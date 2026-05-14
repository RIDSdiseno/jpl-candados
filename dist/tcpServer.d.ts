import net from "net";
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
export declare const connectedDevices: Map<string, DeviceConnection>;
export declare const devicesByTerminalId: Map<string, DeviceConnection>;
export declare const receivedPackets: ReceivedPacket[];
export declare const pendingCommands: Map<string, Buffer<ArrayBufferLike>[]>;
export declare const pendingRegistrations: Map<string, {
    userName: string;
    startedAt: Date;
}>;
export declare function getDeviceByTerminalId(terminalId: string): DeviceConnection | undefined;
export declare function queueCommand(terminalId: string, command: Buffer): void;
export declare function startTcpServer(port: number): net.Server;
export declare function sendCommandToDevice(deviceId: string, command: string, mode?: "text" | "hex"): {
    deviceId: string;
    mode: "hex" | "text";
    command: string;
    hexSent: string;
    sentAt: Date;
};
export declare function getServerStats(): {
    connectedDevices: number;
    connectedByTerminalId: number;
    pendingCommands: number;
    totalConnections: number;
    totalPackets: number;
    storedPackets: number;
    uptimeSeconds: number;
    memory: NodeJS.MemoryUsage;
};
export {};
//# sourceMappingURL=tcpServer.d.ts.map