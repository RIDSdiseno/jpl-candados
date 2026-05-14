import { Router } from "express";
import {
  connectedDevices,
  devicesByTerminalId,
  receivedPackets,
  sendCommandToDevice,
  getServerStats,
  getDeviceByTerminalId,
  pendingRegistrations,
  queueCommand,
} from "./tcpServer.js";
import { 
  buildSealCommand, 
  buildEnableFingerprintRegister,
  buildWriteICCard,
  buildEnableAutoCardBinding,
  buildSetCardTriggerMode,
  buildEnableTouchWakeUp,
  buildSetICCardPassword,
} from "./hhd-protocol.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ ok: true, service: "candado-backend", time: new Date() });
});

router.get("/stats", (_req, res) => {
  res.json({ ok: true, stats: getServerStats() });
});

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

router.get("/packets", (req, res) => {
  const limit = Number(req.query.limit || 100);
  res.json({ ok: true, total: receivedPackets.length, packets: receivedPackets.slice(0, limit) });
});

router.get("/devices/:deviceId/packets", (req, res) => {
  const { deviceId } = req.params;
  const packets = receivedPackets.filter(
    (p) => p.deviceId === deviceId || p.terminalId === deviceId
  );
  res.json({ ok: true, deviceId, total: packets.length, packets });
});

router.post("/devices/:deviceId/command", (req, res) => {
  try {
    const { deviceId } = req.params;
    const { command, mode } = req.body as { command?: string; mode?: "text" | "hex" };
    if (!command) {
      return res.status(400).json({ ok: false, message: "Debes enviar command" });
    }
    const result = sendCommandToDevice(deviceId, command, mode || "text");
    return res.json({ ok: true, result });
  } catch (error: any) {
    return res.status(400).json({ ok: false, message: error.message });
  }
});

// ✅ ABRIR / CERRAR CANDADO
router.post("/devices/:terminalId/seal", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { seal, operatorName } = req.body as { seal: boolean; operatorName?: string };
    if (seal === undefined) {
      return res.status(400).json({ ok: false, message: "Debes enviar seal: true o false" });
    }
    const command = buildSealCommand(terminalId!, Math.floor(Math.random() * 65535), seal, operatorName ?? "admin");
    const device = getDeviceByTerminalId(terminalId!);
    if (device) {
      device.socket.write(command);
      console.log(`📤 Comando ${seal ? 'SEAL 🔒' : 'UNSEAL 🔓'} enviado a ${terminalId}`);
    } else {
      queueCommand(terminalId!, command);
      console.log(`📋 Comando ${seal ? 'SEAL 🔒' : 'UNSEAL 🔓'} encolado para ${terminalId}`);
    }
    return res.json({
      ok: true,
      message: device ? `Comando ${seal ? 'CERRAR' : 'ABRIR'} enviado` : `Comando ${seal ? 'CERRAR' : 'ABRIR'} encolado`,
      terminalId,
      action: seal ? "SEAL" : "UNSEAL",
      operatorName: operatorName ?? "admin",
      deviceOnline: device !== null,
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
    if (!userName) return res.status(400).json({ ok: false, message: "Debes enviar userName" });
    const command = buildEnableFingerprintRegister(terminalId!, Math.floor(Math.random() * 65535));
    pendingRegistrations.set(terminalId!, { userName, startedAt: new Date() });
    const device = getDeviceByTerminalId(terminalId!);
    if (device) {
      device.socket.write(command);
    } else {
      queueCommand(terminalId!, command);
    }
    return res.json({
      ok: true,
      message: device ? "Modo registro activado. Pon el dedo." : "Comando encolado.",
      terminalId, userName, deviceOnline: device !== null,
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ ACTIVAR AUTO-BINDING
router.post("/devices/:terminalId/fingerprint/autobinding", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { minutes, userName } = req.body as { minutes?: number; userName: string };
    if (!userName) return res.status(400).json({ ok: false, message: "Debes enviar userName" });
    const command = buildEnableAutoCardBinding(terminalId!, Math.floor(Math.random() * 65535), minutes ?? 5);
    pendingRegistrations.set(terminalId!, { userName, startedAt: new Date() });
    const device = getDeviceByTerminalId(terminalId!);
    if (device) {
      device.socket.write(command);
    } else {
      queueCommand(terminalId!, command);
    }
    return res.json({
      ok: true,
      message: device ? "Auto-binding activado. Pon el dedo." : "Comando encolado.",
      terminalId, userName, deviceOnline: device !== null,
      expiresIn: `${minutes ?? 5} minutos`,
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ SETUP COMPLETO HUELLA (contraseña + autobinding)
router.post("/devices/:terminalId/fingerprint/setup", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { userName, minutes } = req.body as { userName: string; minutes?: number };
    if (!userName) return res.status(400).json({ ok: false, message: "Debes enviar userName" });

    const passCmd = buildSetICCardPassword(terminalId!, Math.floor(Math.random() * 65535), "665512668834");
    const bindCmd = buildEnableAutoCardBinding(terminalId!, Math.floor(Math.random() * 65535), minutes ?? 5);

    pendingRegistrations.set(terminalId!, { userName, startedAt: new Date() });

    const device = getDeviceByTerminalId(terminalId!);
    if (device) {
      device.socket.write(passCmd);
      setTimeout(() => device.socket.write(bindCmd), 500);
      console.log(`👆 Setup huella enviado a ${terminalId} - Usuario: ${userName}`);
    } else {
      queueCommand(terminalId!, passCmd);
      queueCommand(terminalId!, bindCmd);
      console.log(`📋 Setup huella encolado para ${terminalId} - Usuario: ${userName}`);
    }

    return res.json({
      ok: true,
      message: device ? "Setup enviado. Pon el dedo en el candado." : "Setup encolado. Se enviará cuando conecte.",
      terminalId, userName, deviceOnline: device !== null,
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ VER REGISTROS PENDIENTES
router.get("/devices/:terminalId/fingerprint/pending", (req, res) => {
  const { terminalId } = req.params;
  const pending = pendingRegistrations.get(terminalId!);
  res.json({ ok: true, terminalId, pending: pending ?? null });
});

// ✅ ESCRIBIR TARJETA IC
router.post("/devices/:terminalId/nfc/write", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { cardId, blockNumber, address, userName } = req.body as {
      cardId: string; blockNumber?: number; address?: number; userName?: string;
    };
    if (!cardId) return res.status(400).json({ ok: false, message: "Debes enviar cardId" });
    if (cardId.length !== 8) return res.status(400).json({ ok: false, message: "cardId debe tener 8 dígitos hex" });
    const command = buildWriteICCard(terminalId!, Math.floor(Math.random() * 65535), blockNumber ?? 0, address ?? 0, cardId);
    const device = getDeviceByTerminalId(terminalId!);
    if (device) { device.socket.write(command); } else { queueCommand(terminalId!, command); }
    return res.json({
      ok: true,
      message: device ? `Tarjeta ${cardId} enviada` : `Tarjeta ${cardId} encolada`,
      terminalId, cardId, userName: userName ?? null,
      deviceOnline: device !== null,
      hexSent: command.toString('hex').toUpperCase(),
      sentAt: new Date(),
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ LEER TARJETAS IC
router.get("/devices/:terminalId/nfc/read/:blockNumber", (req, res) => {
  try {
    const { terminalId, blockNumber } = req.params;
    const device = getDeviceByTerminalId(terminalId!);
    if (!device) return res.status(404).json({ ok: false, message: `Candado ${terminalId} no conectado` });
    const block = Number(blockNumber ?? 0);
    const body = Buffer.from([block]);
    const header = Buffer.alloc(12);
    header.writeUInt16BE(0x0216, 0);
    header.writeUInt16BE(body.length, 2);
    Buffer.from(terminalId!, 'hex').copy(header, 4);
    header.writeUInt16BE(Math.floor(Math.random() * 65535), 10);
    const packet = Buffer.concat([header, body]);
    let checksum = 0;
    for (const byte of packet) checksum ^= byte;
    const command = Buffer.concat([Buffer.from([0x7E]), packet, Buffer.from([checksum]), Buffer.from([0x7E])]);
    device.socket.write(command);
    return res.json({ ok: true, message: `Leer tarjetas bloque ${block} enviado`, terminalId, blockNumber: block });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ MODO TRIGGER TARJETA
router.post("/devices/:terminalId/nfc/triggermode", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { mode } = req.body as { mode?: number };
    const command = buildSetCardTriggerMode(terminalId!, Math.floor(Math.random() * 65535), mode ?? 0);
    const device = getDeviceByTerminalId(terminalId!);
    if (device) { device.socket.write(command); } else { queueCommand(terminalId!, command); }
    return res.json({
      ok: true,
      message: device ? `Modo trigger ${mode ?? 0} enviado` : `Modo trigger ${mode ?? 0} encolado`,
      deviceOnline: device !== null,
      hexSent: command.toString('hex').toUpperCase(),
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// ✅ TOUCH WAKE-UP BLE
router.post("/devices/:terminalId/ble/wakeup", (req, res) => {
  try {
    const { terminalId } = req.params;
    const { enable } = req.body as { enable?: boolean };
    const command = buildEnableTouchWakeUp(terminalId!, Math.floor(Math.random() * 65535), enable ?? true);
    const device = getDeviceByTerminalId(terminalId!);
    if (device) { device.socket.write(command); } else { queueCommand(terminalId!, command); }
    return res.json({
      ok: true,
      message: device ? "Touch wake-up enviado" : "Touch wake-up encolado",
      deviceOnline: device !== null,
      hexSent: command.toString('hex').toUpperCase(),
    });
  } catch (error: any) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

export default router;