export declare const AccessStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly REVOKED: "REVOKED";
};
export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus];
export declare const AccessType: {
    readonly OPEN: "OPEN";
    readonly CLOSE: "CLOSE";
    readonly OPEN_CLOSE: "OPEN_CLOSE";
    readonly ADMIN: "ADMIN";
    readonly VIEW_ONLY: "VIEW_ONLY";
};
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
export declare const AlertSeverity: {
    readonly INFO: "INFO";
    readonly WARNING: "WARNING";
    readonly CRITICAL: "CRITICAL";
};
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];
export declare const AlertStatus: {
    readonly OPEN: "OPEN";
    readonly ACKNOWLEDGED: "ACKNOWLEDGED";
    readonly RESOLVED: "RESOLVED";
    readonly DISMISSED: "DISMISSED";
};
export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus];
export declare const AuditAction: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly LOGIN: "LOGIN";
    readonly LOGOUT: "LOGOUT";
    readonly ASSIGN: "ASSIGN";
    readonly REVOKE: "REVOKE";
    readonly OPEN_LOCK: "OPEN_LOCK";
    readonly CLOSE_LOCK: "CLOSE_LOCK";
    readonly SEND_COMMAND: "SEND_COMMAND";
    readonly SYSTEM_EVENT: "SYSTEM_EVENT";
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
export declare const CommandStatus: {
    readonly PENDING: "PENDING";
    readonly SENT: "SENT";
    readonly ACKNOWLEDGED: "ACKNOWLEDGED";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
};
export type CommandStatus = (typeof CommandStatus)[keyof typeof CommandStatus];
export declare const CommandType: {
    readonly OPEN: "OPEN";
    readonly CLOSE: "CLOSE";
    readonly LOCK: "LOCK";
    readonly UNLOCK: "UNLOCK";
    readonly SYNC: "SYNC";
    readonly RESET: "RESET";
    readonly REQUEST_STATUS: "REQUEST_STATUS";
    readonly REQUEST_LOCATION: "REQUEST_LOCATION";
};
export type CommandType = (typeof CommandType)[keyof typeof CommandType];
export declare const CompanyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type CompanyStatus = (typeof CompanyStatus)[keyof typeof CompanyStatus];
export declare const LockConnectionStatus: {
    readonly ONLINE: "ONLINE";
    readonly OFFLINE: "OFFLINE";
    readonly SLEEP: "SLEEP";
    readonly LOST_SIGNAL: "LOST_SIGNAL";
    readonly UNKNOWN: "UNKNOWN";
};
export type LockConnectionStatus = (typeof LockConnectionStatus)[keyof typeof LockConnectionStatus];
export declare const LockConnectionType: {
    readonly IOT: "IOT";
    readonly BLUETOOTH: "BLUETOOTH";
    readonly LORA: "LORA";
    readonly NB_IOT: "NB_IOT";
    readonly LTE: "LTE";
    readonly WIFI: "WIFI";
    readonly API_EXTERNAL: "API_EXTERNAL";
    readonly UNKNOWN: "UNKNOWN";
};
export type LockConnectionType = (typeof LockConnectionType)[keyof typeof LockConnectionType];
export declare const LockEventType: {
    readonly OPENED: "OPENED";
    readonly CLOSED: "CLOSED";
    readonly OPEN_REQUESTED: "OPEN_REQUESTED";
    readonly CLOSE_REQUESTED: "CLOSE_REQUESTED";
    readonly ACCESS_GRANTED: "ACCESS_GRANTED";
    readonly ACCESS_DENIED: "ACCESS_DENIED";
    readonly COMMAND_SENT: "COMMAND_SENT";
    readonly COMMAND_SUCCESS: "COMMAND_SUCCESS";
    readonly COMMAND_FAILED: "COMMAND_FAILED";
    readonly LOW_BATTERY: "LOW_BATTERY";
    readonly SIGNAL_LOST: "SIGNAL_LOST";
    readonly SIGNAL_RESTORED: "SIGNAL_RESTORED";
    readonly TAMPER_ALERT: "TAMPER_ALERT";
    readonly GPS_UPDATED: "GPS_UPDATED";
    readonly GEOFENCE_EXIT: "GEOFENCE_EXIT";
    readonly GEOFENCE_ENTER: "GEOFENCE_ENTER";
    readonly MAINTENANCE_STARTED: "MAINTENANCE_STARTED";
    readonly MAINTENANCE_FINISHED: "MAINTENANCE_FINISHED";
    readonly DEVICE_REGISTERED: "DEVICE_REGISTERED";
    readonly DEVICE_UPDATED: "DEVICE_UPDATED";
};
export type LockEventType = (typeof LockEventType)[keyof typeof LockEventType];
export declare const LockStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly LOCKED: "LOCKED";
    readonly UNLOCKED: "UNLOCKED";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly LOST_SIGNAL: "LOST_SIGNAL";
    readonly LOW_BATTERY: "LOW_BATTERY";
    readonly BLOCKED: "BLOCKED";
};
export type LockStatus = (typeof LockStatus)[keyof typeof LockStatus];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly BLOCKED: "BLOCKED";
    readonly PENDING: "PENDING";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
//# sourceMappingURL=enums.d.ts.map