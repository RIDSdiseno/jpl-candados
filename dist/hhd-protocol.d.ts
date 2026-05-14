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
export declare function parsePacket(raw: Buffer): HHDPacket | null;
export declare function parsePosition(body: Buffer): Position | null;
export declare function buildResponse8001(terminalId: string, serialNumber: number, answerId: number): Buffer;
export declare function buildSealCommand(terminalId: string, serialNumber: number, seal: boolean, operatorName?: string): Buffer;
export declare function buildWriteICCard(terminalId: string, serialNumber: number, blockNumber: number, address: number, cardId: string): Buffer;
export declare function buildEnableFingerprintRegister(terminalId: string, serialNumber: number, blockNumber?: number, address?: number): Buffer;
export declare function buildEnableAutoCardBinding(terminalId: string, serialNumber: number, minutes?: number): Buffer;
export declare function buildSetCardTriggerMode(terminalId: string, serialNumber: number, mode?: number): Buffer;
//# sourceMappingURL=hhd-protocol.d.ts.map