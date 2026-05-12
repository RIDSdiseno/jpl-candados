import { Router } from "express";
import {
  connectedDevices,
  devicesByTerminalId,
  receivedPackets,
  sendCommandToDevice,
  getServerStats,
  getDeviceByTerminalId,
  pendingRegistrations,
} from "./tcpServer.js";
import { 
  buildSealCommand, 
  buildEnableFingerprintRegister,
  buildWriteICCard,
} from "./hhd-protocol.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "candado-backend",
    time: new Date(),
  });
});

router.get("/stats", (_req, res) => {
  res.json({
    ok: true,
    stats: getServerStats(),
  });
});

// Todos los dispositivos conectados (por socket)
router.get("/devices", (_req, res) => {
  const devices = Array.from(connectedDevices.values()).map((device) => ({
    id: device.id,
    terminalId: device.terminalId,
    ip: device.ip,
    remotePort: device.remotePort,
    connectedAt: device.connectedAt,
    lastSeen: device.lastSeen,
    packetsReceived: device.packetsReceived,
  }));

  res.json({ ok: true, total: devices.length, devices });
});

// Dispositivos conectados por terminalId
router.get("/devices/connected", (_req, res) => {
  const devices = Array.from(devicesByTerminalId.entries()).map(([tid, d]) => ({
    terminalId: tid,
    ip: d.ip,
    connectedAt: d.connectedAt,
    lastSeen: d.lastSeen,
    packetsReceived: d.packetsReceived,
  }));

  res.json({ ok: true, total: devices.length, devices });
});

// Paquetes recibidos
router.get("/packets", (req, res) => {
  const limit = Number(req.query.limit || 100);
  res.json({
    ok: true,
    total: receivedPackets.length,
    packets: receivedPackets.slice(0, limit),
  });
});

router.get("/devices/:deviceId/packets", (req, res) => {
  const { deviceId } = req.params;
  const packets = receivedPackets.filter(
    (p) => p.deviceId === deviceId || p.terminalId === deviceId
  );
  res.json({ ok: true, deviceId, total: packets.length, packets });
});

// Enviar comando raw
router.post("/devices/:deviceId/command", (req, res) => {
  try {
    const { deviceId } = req.params;
    const { command, mode } = req.body as {
      command?: string;
      mode?: "text" | "hex";
    };

    if (!command) {
      return res.status(400).json({ ok: false, message: "Debes enviar command" });
    }

    const result = sendCommandToDevice(deviceId, command, mode || "text");
    return res.json({ ok: true, result });
  } catch (error: any) {
    return res.status(400).json({ ok: false, message: error.message });
  }
});

// ✅ ABRIR / CERRAR CANDADO REMOTAMENTE
router.post("/devices/:terminalId/seal", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { seal, operatorName } = req.body as {
      seal: boolean;
      operatorName?: string;
    };

    if (seal === undefined) {
      return res.status(400).json({
        ok: false,
        message: "Debes enviar seal: true (cerrar) o false (abrir)",
      });
    }

    const device = getDeviceByTerminalId(terminalId!);

    if (!device) {
      return res.status(404).json({
        ok: false,
        message: `Candado ${terminalId} no está conectado`,
        connectedTerminals: Array.from(devicesByTerminalId.keys()),
      });
    }

    const serialNumber = Math.floor(Math.random() * 65535);
    const command = buildSealCommand(
      terminalId!,
      serialNumber,
      seal,
      operatorName ?? "admin"
    );

    device.socket.write(command);

    console.log(`📤 Comando ${seal ? 'SEAL 🔒' : 'UNSEAL 🔓'} enviado a ${terminalId}`);

    return res.json({
      ok: true,
      message: `Comando ${seal ? 'CERRAR' : 'ABRIR'} enviado al candado`,
      terminalId,
      action: seal ? "SEAL" : "UNSEAL",
      operatorName: operatorName ?? "admin",
      hexSent: command.toString('hex').toUpperCase(),
      sentAt: new Date(),
    });

  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ ACTIVAR MODO REGISTRO DE HUELLA
router.post("/devices/:terminalId/fingerprint/register", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { userName } = req.body as { userName: string };

    if (!userName) {
      return res.status(400).json({
        ok: false,
        message: "Debes enviar userName",
      });
    }

    const device = getDeviceByTerminalId(terminalId!);

    if (!device) {
      return res.status(404).json({
        ok: false,
        message: `Candado ${terminalId} no está conectado`,
      });
    }

    // Guardar pendiente de registro
    pendingRegistrations.set(terminalId!, {
      userName,
      startedAt: new Date(),
    });

    // Enviar comando al candado
    const command = buildEnableFingerprintRegister(
      terminalId!,
      Math.floor(Math.random() * 65535),
    );
    device.socket.write(command);

    console.log(`👆 Modo registro huella activado para ${terminalId} - Usuario: ${userName}`);

    return res.json({
      ok: true,
      message: "Modo registro activado. Pide al usuario que ponga el dedo en el candado.",
      terminalId,
      userName,
      expiresIn: "60 segundos",
    });

  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ VER REGISTROS PENDIENTES
router.get("/devices/:terminalId/fingerprint/pending", (req, res) => {
  const { terminalId } = req.params;
  const pending = pendingRegistrations.get(terminalId!);
  res.json({
    ok: true,
    terminalId,
    pending: pending ?? null,
  });
});

// ✅ ESCRIBIR TARJETA IC / HUELLA CON ID ESPECÍFICO
router.post("/devices/:terminalId/nfc/write", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { cardId, blockNumber, address, userName } = req.body as {
      cardId: string;
      blockNumber?: number;
      address?: number;
      userName?: string;
    };

    if (!cardId) {
      return res.status(400).json({
        ok: false,
        message: "Debes enviar cardId (8 dígitos hex, ej: 00000001)",
      });
    }

    if (cardId.length !== 8) {
      return res.status(400).json({
        ok: false,
        message: "cardId debe tener exactamente 8 dígitos hex",
      });
    }

    const device = getDeviceByTerminalId(terminalId!);

    if (!device) {
      return res.status(404).json({
        ok: false,
        message: `Candado ${terminalId} no está conectado`,
      });
    }

    const command = buildWriteICCard(
      terminalId!,
      Math.floor(Math.random() * 65535),
      blockNumber ?? 0,
      address ?? 0,
      cardId
    );

    device.socket.write(command);

    console.log(`💳 Tarjeta ${cardId} escrita en candado ${terminalId} - Usuario: ${userName ?? 'N/A'}`);

    return res.json({
      ok: true,
      message: `Tarjeta ${cardId} enviada al candado`,
      terminalId,
      cardId,
      userName: userName ?? null,
      hexSent: command.toString('hex').toUpperCase(),
      sentAt: new Date(),
    });

  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ LEER TARJETAS IC DEL CANDADO
router.get("/devices/:terminalId/nfc/read/:blockNumber", (req, res) => {
  try {
    const { terminalId, blockNumber } = req.params;

    const device = getDeviceByTerminalId(terminalId!);

    if (!device) {
      return res.status(404).json({
        ok: false,
        message: `Candado ${terminalId} no está conectado`,
      });
    }

    const block = Number(blockNumber ?? 0);
    const readCmd = Buffer.concat([
      Buffer.from([0x7E]),
      Buffer.from([0x02, 0x16]), // msg ID 0x0216
    ]);

    // Construir comando 0x0216 (leer IC cards)
    const body = Buffer.from([block]);
    const header = Buffer.alloc(12);
    header.writeUInt16BE(0x0216, 0);
    header.writeUInt16BE(body.length, 2);
    Buffer.from(terminalId!, 'hex').copy(header, 4);
    header.writeUInt16BE(Math.floor(Math.random() * 65535), 10);

    const packet = Buffer.concat([header, body]);
    let checksum = 0;
    for (const byte of packet) checksum ^= byte;

    const command = Buffer.concat([
      Buffer.from([0x7E]),
      packet,
      Buffer.from([checksum]),
      Buffer.from([0x7E]),
    ]);

    device.socket.write(command);

    return res.json({
      ok: true,
      message: `Comando leer tarjetas bloque ${block} enviado`,
      terminalId,
      blockNumber: block,
    });

  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

export default router;