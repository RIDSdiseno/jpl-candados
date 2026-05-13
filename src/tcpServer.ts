import net from "net";
import { parsePacket, parsePosition, buildResponse8001 } from "./hhd-protocol.js";

type DeviceConnection = {
  id: string;
  terminalId: string;
  socket: net.Socket;
  ip: string;
  remotePort: number | undefined;
  connectedAt: Date;
  lastSeen: Date;
  packetsReceived: number;
};

type ReceivedPacket = {
  id: number;
  deviceId: string;
  terminalId: string;
  ip: string;
  remotePort: number | undefined;
  size: number;
  hex: string;
  raw: string;
  receivedAt: Date;
};

export const connectedDevices = new Map<string, DeviceConnection>();
export const devicesByTerminalId = new Map<string, DeviceConnection>();
export const receivedPackets: ReceivedPacket[] = [];

// ✅ Cola de comandos pendientes por terminalId
export const pendingCommands = new Map<string, Buffer[]>();

// ✅ Registros pendientes de huella
export const pendingRegistrations = new Map<string, {
  userName: string;
  startedAt: Date;
}>();

let packetCounter = 1;
let totalConnections = 0;
let totalPackets = 0;

function getSocketId(socket: net.Socket): string {
  return `${socket.remoteAddress}:${socket.remotePort}`;
}

function normalizeRaw(buffer: Buffer): string {
  const raw = buffer.toString("utf8");
  return raw.replace(/[^\x20-\x7E\r\n\t]/g, ".");
}

export function getDeviceByTerminalId(terminalId: string): DeviceConnection | undefined {
  return devicesByTerminalId.get(terminalId.toUpperCase());
}

// ✅ Encolar comando para cuando el candado se conecte
export function queueCommand(terminalId: string, command: Buffer): void {
  const existing = pendingCommands.get(terminalId.toUpperCase()) ?? [];
  existing.push(command);
  pendingCommands.set(terminalId.toUpperCase(), existing);
  console.log(`📋 Comando encolado para ${terminalId} (${existing.length} en cola)`);
}

export function startTcpServer(port: number): net.Server {
  const server = net.createServer((socket: net.Socket) => {
    totalConnections++;

    const ip = socket.remoteAddress || "unknown";
    const remotePort = socket.remotePort;
    const socketId = getSocketId(socket);

    const deviceConn: DeviceConnection = {
      id: socketId,
      terminalId: "",
      socket,
      ip,
      remotePort,
      connectedAt: new Date(),
      lastSeen: new Date(),
      packetsReceived: 0,
    };

    connectedDevices.set(socketId, deviceConn);

    console.log("====================================");
    console.log("🔌 Nueva conexión TCP");
    console.log("ID:", socketId);
    console.log("IP:", ip);
    console.log("Puerto remoto:", remotePort);
    console.log("====================================");

    socket.on("data", (data: Buffer | string) => {
      const buffer = Buffer.isBuffer(data)
        ? data
        : Buffer.from(data, "utf8");

      const currentDevice = connectedDevices.get(socketId);
      if (currentDevice) {
        currentDevice.lastSeen = new Date();
        currentDevice.packetsReceived += 1;
      }

      const hex = buffer.toString("hex").toUpperCase();
      const raw = normalizeRaw(buffer);

      totalPackets++;

      console.log("\n📦 Paquete recibido");
      console.log("Bytes:", buffer.length);
      console.log("HEX:", hex);

      // Parsear protocolo HHD
      const parsed = parsePacket(buffer);
      if (parsed) {
        console.log(`📟 Terminal ID: ${parsed.terminalId}`);
        console.log(`📨 MSG ID: 0x${parsed.msgId.toString(16).toUpperCase()}`);

        // ✅ Mapear terminalId → socket
        if (currentDevice && parsed.terminalId) {
          currentDevice.terminalId = parsed.terminalId;
          devicesByTerminalId.set(parsed.terminalId, currentDevice);
          console.log(`🗺️  Mapeado: ${parsed.terminalId} → ${socketId}`);

          // ✅ Enviar comandos pendientes automáticamente
          const pending = pendingCommands.get(parsed.terminalId);
          if (pending && pending.length > 0) {
            console.log(`📤 Enviando ${pending.length} comando(s) pendiente(s) a ${parsed.terminalId}`);
            for (const cmd of pending) {
              socket.write(cmd);
              console.log(`📤 Comando pendiente enviado a ${parsed.terminalId}`);
            }
            pendingCommands.delete(parsed.terminalId);
          }
        }

        const packet: ReceivedPacket = {
          id: packetCounter++,
          deviceId: socketId,
          terminalId: parsed.terminalId,
          ip,
          remotePort,
          size: buffer.length,
          hex,
          raw,
          receivedAt: new Date(),
        };

        receivedPackets.unshift(packet);
        if (receivedPackets.length > 1000) receivedPackets.pop();

        // Reporte de posición
        if (parsed.msgId === 0x0200 || parsed.msgId === 0x0210) {
          const position = parsePosition(parsed.body);
          if (position) {
            console.log(`📍 GPS: ${position.latitude}, ${position.longitude}`);
            console.log(`🔒 Sellado: ${position.isSealed}`);
            console.log(`🔗 Shackle: ${position.isShackleClosed}`);
            console.log(`📡 GPS válido: ${position.gpsValid}`);
            console.log(`⚡ Velocidad: ${position.speed} km/h`);
            console.log(`🕐 Hora: ${position.time}`);
          }
        }

        // Responder con 0x8001
        const response = buildResponse8001(
          parsed.terminalId,
          parsed.serialNumber,
          parsed.msgId
        );
        socket.write(response);
        console.log(`✅ 0x8001 enviado a ${parsed.terminalId}`);

      } else {
        console.log("⚠️  Paquete no reconocido como protocolo HHD");
      }
    });

    socket.on("close", () => {
      console.log(`❌ Conexión cerrada: ${socketId}`);
      const closing = connectedDevices.get(socketId);
      if (closing?.terminalId) {
        devicesByTerminalId.delete(closing.terminalId);
        console.log(`🗺️  Removido del mapa: ${closing.terminalId}`);
      }
      connectedDevices.delete(socketId);
    });

    socket.on("error", (error: Error) => {
      console.error(`⚠️  Error TCP: ${socketId}`, error.message);
      const errDevice = connectedDevices.get(socketId);
      if (errDevice?.terminalId) {
        devicesByTerminalId.delete(errDevice.terminalId);
      }
      connectedDevices.delete(socketId);
    });
  });

  server.on("error", (error: Error) => {
    console.error("❌ Error del servidor TCP:", error.message);
  });

  server.listen(port, "0.0.0.0", () => {
    console.log(`🔒 Servidor TCP escuchando en puerto ${port}`);
  });

  return server;
}

export function sendCommandToDevice(
  deviceId: string,
  command: string,
  mode: "text" | "hex" = "text"
) {
  const device = connectedDevices.get(deviceId);

  if (!device) {
    throw new Error("El dispositivo no está conectado");
  }

  const buffer =
    mode === "hex"
      ? Buffer.from(command.replace(/\s/g, ""), "hex")
      : Buffer.from(command, "utf8");

  device.socket.write(buffer);

  return {
    deviceId,
    mode,
    command,
    hexSent: buffer.toString("hex").toUpperCase(),
    sentAt: new Date(),
  };
}

export function getServerStats() {
  return {
    connectedDevices: connectedDevices.size,
    connectedByTerminalId: devicesByTerminalId.size,
    pendingCommands: pendingCommands.size,
    totalConnections,
    totalPackets,
    storedPackets: receivedPackets.length,
    uptimeSeconds: process.uptime(),
    memory: process.memoryUsage(),
  };
}