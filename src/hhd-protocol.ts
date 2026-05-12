// hhd-protocol.ts
// Parser del protocolo HHD V38

export interface HHDPacket {
  msgId: number;
  msgLength: number;
  terminalId: string;
  serialNumber: number;
  body: Buffer;
}

export interface Position {
  alarmFlag: number;
  status: number;
  latitude: number;
  longitude: number;
  elevation: number;
  speed: number;
  direction: number;
  time: string;
  isSealed: boolean;
  isShackleClosed: boolean;
  gpsValid: boolean;
}

// Desenmascarar bytes 0x7D
function unescape(buffer: Buffer): Buffer {
  const result: number[] = [];
  let i = 0;
  while (i < buffer.length) {
    if (buffer[i] === 0x7D) {
      i++;
      if (buffer[i] === 0x02) result.push(0x7E);
      else if (buffer[i] === 0x01) result.push(0x7D);
    } else {
      result.push(buffer[i]!);
    }
    i++;
  }
  return Buffer.from(result);
}

// Escape bytes para envío
function escape7E(buffer: Buffer): Buffer {
  const result: number[] = [];
  for (const byte of buffer) {
    if (byte === 0x7E) {
      result.push(0x7D, 0x02);
    } else if (byte === 0x7D) {
      result.push(0x7D, 0x01);
    } else {
      result.push(byte);
    }
  }
  return Buffer.from(result);
}

// Parsear paquete completo
export function parsePacket(raw: Buffer): HHDPacket | null {
  try {
    if (raw[0] !== 0x7E) return null;

    const unescaped = unescape(raw.slice(1, raw.length - 1));

    const msgId = unescaped.readUInt16BE(0);
    const msgAttr = unescaped.readUInt16BE(2);
    const msgLength = msgAttr & 0x03FF;
    const terminalId = unescaped.slice(4, 10).toString('hex').toUpperCase();
    const serialNumber = unescaped.readUInt16BE(10);
    const body = unescaped.slice(12, 12 + msgLength);

    return { msgId, msgLength, terminalId, serialNumber, body };
  } catch {
    return null;
  }
}

// Parsear cuerpo del 0x0200 (posición)
export function parsePosition(body: Buffer): Position | null {
  try {
    const alarmFlag = body.readUInt32BE(0);
    const status = body.readUInt32BE(4);
    const latRaw = body.readUInt32BE(8);
    const lonRaw = body.readUInt32BE(12);
    const elevation = body.readUInt16BE(16);
    const speed = body.readUInt16BE(18);
    const direction = body.readUInt16BE(20);

    const t = body.slice(22, 28);
    const time = `20${t[0]!.toString(16).padStart(2,'0')}-${t[1]!.toString(16).padStart(2,'0')}-${t[2]!.toString(16).padStart(2,'0')} ${t[3]!.toString(16).padStart(2,'0')}:${t[4]!.toString(16).padStart(2,'0')}:${t[5]!.toString(16).padStart(2,'0')}`;

    const latitude = latRaw / 1_000_000;
    const longitude = lonRaw / 1_000_000;

    const isSouth = (status >> 2) & 1;
    const isWest = (status >> 3) & 1;

    return {
      alarmFlag,
      status,
      latitude: isSouth ? -latitude : latitude,
      longitude: isWest ? -longitude : longitude,
      elevation,
      speed: speed / 10,
      direction,
      time,
      isSealed: Boolean((status >> 14) & 1),
      isShackleClosed: Boolean((status >> 15) & 1),
      gpsValid: Boolean((status >> 1) & 1),
    };
  } catch {
    return null;
  }
}

// Construir respuesta 0x8001
export function buildResponse8001(
  terminalId: string,
  serialNumber: number,
  answerId: number
): Buffer {
  const body = Buffer.alloc(5);
  body.writeUInt16BE(serialNumber, 0);
  body.writeUInt16BE(answerId, 2);
  body[4] = 0x00;

  const header = Buffer.alloc(12);
  header.writeUInt16BE(0x8001, 0);
  header.writeUInt16BE(body.length, 2);
  Buffer.from(terminalId, 'hex').copy(header, 4);
  header.writeUInt16BE(0x0001, 10);

  const packet = Buffer.concat([header, body]);

  let checksum = 0;
  for (const byte of packet) checksum ^= byte;

  return Buffer.concat([
    Buffer.from([0x7E]),
    escape7E(packet),
    Buffer.from([checksum]),
    Buffer.from([0x7E]),
  ]);
}

// Comando Seal/Unseal (0x0310 parámetro 0x24)
export function buildSealCommand(
  terminalId: string,
  serialNumber: number,
  seal: boolean,
  operatorName: string = "admin"
): Buffer {
  const sealByte = Buffer.from([seal ? 0x01 : 0x00]);
  const operatorBytes = Buffer.from(operatorName, 'utf8');
  const paramValue = Buffer.concat([sealByte, operatorBytes]);

  const body = Buffer.concat([
    Buffer.from([0x01]),
    Buffer.from([0x24]),
    Buffer.from([paramValue.length]),
    paramValue,
  ]);

  const header = Buffer.alloc(12);
  header.writeUInt16BE(0x0310, 0);
  header.writeUInt16BE(body.length, 2);
  Buffer.from(terminalId, 'hex').copy(header, 4);
  header.writeUInt16BE(serialNumber, 10);

  const packet = Buffer.concat([header, body]);

  let checksum = 0;
  for (const byte of packet) checksum ^= byte;

  return Buffer.concat([
    Buffer.from([0x7E]),
    escape7E(packet),
    Buffer.from([checksum]),
    Buffer.from([0x7E]),
  ]);
}

// Activar modo registro de huella/tarjeta (0x0214)
// Escribir tarjeta IC / huella en el candado (0x0214)
export function buildWriteICCard(
  terminalId: string,
  serialNumber: number,
  blockNumber: number,
  address: number,
  cardId: string  // 8 dígitos ej: "00000001"
): Buffer {
  const block = Buffer.from([blockNumber]);
  
  // Dirección: WORD (2 bytes)
  const addr = Buffer.alloc(2);
  addr.writeUInt16BE(address, 0);
  
  // Card ID: BCD 4 bytes (8 dígitos → 4 bytes BCD)
  // "00000001" → 0x00 0x00 0x00 0x01
  const cardBytes = Buffer.from(cardId.padStart(8, '0'), 'hex');

  const body = Buffer.concat([block, addr, cardBytes]);

  const header = Buffer.alloc(12);
  header.writeUInt16BE(0x0214, 0);
  header.writeUInt16BE(body.length, 2);
  Buffer.from(terminalId, 'hex').copy(header, 4);
  header.writeUInt16BE(serialNumber, 10);

  const packet = Buffer.concat([header, body]);

  let checksum = 0;
  for (const byte of packet) checksum ^= byte;

  return Buffer.concat([
    Buffer.from([0x7E]),
    escape7E(packet),
    Buffer.from([checksum]),
    Buffer.from([0x7E]),
  ]);
}

// Activar modo registro de huella (0x0214 con cardId especial)
export function buildEnableFingerprintRegister(
  terminalId: string,
  serialNumber: number,
  blockNumber: number = 0,
  address: number = 0
): Buffer {
  // Enviamos cardId = "FFFFFFFF" para activar modo registro
  return buildWriteICCard(
    terminalId,
    serialNumber,
    blockNumber,
    address,
    "FFFFFFFF"
  );
}