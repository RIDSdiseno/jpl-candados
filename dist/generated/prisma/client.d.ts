import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Alerts
 * const alerts = await prisma.alert.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Alert
 *
 */
export type Alert = Prisma.AlertModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
/**
 * Model Branch
 *
 */
export type Branch = Prisma.BranchModel;
/**
 * Model Company
 *
 */
export type Company = Prisma.CompanyModel;
/**
 * Model Device
 *
 */
export type Device = Prisma.DeviceModel;
/**
 * Model DeviceAlarmPolicy
 *
 */
export type DeviceAlarmPolicy = Prisma.DeviceAlarmPolicyModel;
/**
 * Model DeviceCommand
 *
 */
export type DeviceCommand = Prisma.DeviceCommandModel;
/**
 * Model DeviceCompanyAssignmentHistory
 *
 */
export type DeviceCompanyAssignmentHistory = Prisma.DeviceCompanyAssignmentHistoryModel;
/**
 * Model DeviceDiagnosisLog
 *
 */
export type DeviceDiagnosisLog = Prisma.DeviceDiagnosisLogModel;
/**
 * Model DeviceEvent
 *
 */
export type DeviceEvent = Prisma.DeviceEventModel;
/**
 * Model DeviceGeoFence
 *
 */
export type DeviceGeoFence = Prisma.DeviceGeoFenceModel;
/**
 * Model DeviceHistoryData
 *
 */
export type DeviceHistoryData = Prisma.DeviceHistoryDataModel;
/**
 * Model DeviceNfcCard
 *
 */
export type DeviceNfcCard = Prisma.DeviceNfcCardModel;
/**
 * Model DeviceParameterChangeLog
 *
 */
export type DeviceParameterChangeLog = Prisma.DeviceParameterChangeLogModel;
/**
 * Model DeviceParameterSnapshot
 *
 */
export type DeviceParameterSnapshot = Prisma.DeviceParameterSnapshotModel;
/**
 * Model DeviceTelemetry
 *
 */
export type DeviceTelemetry = Prisma.DeviceTelemetryModel;
/**
 * Model DynamicPasswordAuditLog
 *
 */
export type DynamicPasswordAuditLog = Prisma.DynamicPasswordAuditLogModel;
/**
 * Model FirmwareFile
 *
 */
export type FirmwareFile = Prisma.FirmwareFileModel;
/**
 * Model GeoFence
 *
 */
export type GeoFence = Prisma.GeoFenceModel;
/**
 * Model Geofence
 *
 */
export type Geofence = Prisma.GeofenceModel;
/**
 * Model Lock
 *
 */
export type Lock = Prisma.LockModel;
/**
 * Model LockAccess
 *
 */
export type LockAccess = Prisma.LockAccessModel;
/**
 * Model LockCommand
 *
 */
export type LockCommand = Prisma.LockCommandModel;
/**
 * Model LockEvent
 *
 */
export type LockEvent = Prisma.LockEventModel;
/**
 * Model LockLocation
 *
 */
export type LockLocation = Prisma.LockLocationModel;
/**
 * Model MaintenanceRecord
 *
 */
export type MaintenanceRecord = Prisma.MaintenanceRecordModel;
/**
 * Model MonitoringAuditLog
 *
 */
export type MonitoringAuditLog = Prisma.MonitoringAuditLogModel;
/**
 * Model NfcCard
 *
 */
export type NfcCard = Prisma.NfcCardModel;
/**
 * Model OtaUpgradeRecord
 *
 */
export type OtaUpgradeRecord = Prisma.OtaUpgradeRecordModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model RolePermission
 *
 */
export type RolePermission = Prisma.RolePermissionModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model alarms
 *
 */
export type alarms = Prisma.alarmsModel;
/**
 * Model devices
 *
 */
export type devices = Prisma.devicesModel;
/**
 * Model events
 *
 */
export type events = Prisma.eventsModel;
/**
 * Model positions
 *
 */
export type positions = Prisma.positionsModel;
//# sourceMappingURL=client.d.ts.map