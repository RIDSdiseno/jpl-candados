import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Alerts
  * const alerts = await prisma.alert.findMany()
  * ```
  */
    get alert(): Prisma.AlertDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Branches
      * const branches = await prisma.branch.findMany()
      * ```
      */
    get branch(): Prisma.BranchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.company`: Exposes CRUD operations for the **Company** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Companies
      * const companies = await prisma.company.findMany()
      * ```
      */
    get company(): Prisma.CompanyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.device`: Exposes CRUD operations for the **Device** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Devices
      * const devices = await prisma.device.findMany()
      * ```
      */
    get device(): Prisma.DeviceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceAlarmPolicy`: Exposes CRUD operations for the **DeviceAlarmPolicy** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceAlarmPolicies
      * const deviceAlarmPolicies = await prisma.deviceAlarmPolicy.findMany()
      * ```
      */
    get deviceAlarmPolicy(): Prisma.DeviceAlarmPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceCommand`: Exposes CRUD operations for the **DeviceCommand** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceCommands
      * const deviceCommands = await prisma.deviceCommand.findMany()
      * ```
      */
    get deviceCommand(): Prisma.DeviceCommandDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceCompanyAssignmentHistory`: Exposes CRUD operations for the **DeviceCompanyAssignmentHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceCompanyAssignmentHistories
      * const deviceCompanyAssignmentHistories = await prisma.deviceCompanyAssignmentHistory.findMany()
      * ```
      */
    get deviceCompanyAssignmentHistory(): Prisma.DeviceCompanyAssignmentHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceDiagnosisLog`: Exposes CRUD operations for the **DeviceDiagnosisLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceDiagnosisLogs
      * const deviceDiagnosisLogs = await prisma.deviceDiagnosisLog.findMany()
      * ```
      */
    get deviceDiagnosisLog(): Prisma.DeviceDiagnosisLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceEvent`: Exposes CRUD operations for the **DeviceEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceEvents
      * const deviceEvents = await prisma.deviceEvent.findMany()
      * ```
      */
    get deviceEvent(): Prisma.DeviceEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceGeoFence`: Exposes CRUD operations for the **DeviceGeoFence** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceGeoFences
      * const deviceGeoFences = await prisma.deviceGeoFence.findMany()
      * ```
      */
    get deviceGeoFence(): Prisma.DeviceGeoFenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceHistoryData`: Exposes CRUD operations for the **DeviceHistoryData** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceHistoryData
      * const deviceHistoryData = await prisma.deviceHistoryData.findMany()
      * ```
      */
    get deviceHistoryData(): Prisma.DeviceHistoryDataDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceNfcCard`: Exposes CRUD operations for the **DeviceNfcCard** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceNfcCards
      * const deviceNfcCards = await prisma.deviceNfcCard.findMany()
      * ```
      */
    get deviceNfcCard(): Prisma.DeviceNfcCardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceParameterChangeLog`: Exposes CRUD operations for the **DeviceParameterChangeLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceParameterChangeLogs
      * const deviceParameterChangeLogs = await prisma.deviceParameterChangeLog.findMany()
      * ```
      */
    get deviceParameterChangeLog(): Prisma.DeviceParameterChangeLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceParameterSnapshot`: Exposes CRUD operations for the **DeviceParameterSnapshot** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceParameterSnapshots
      * const deviceParameterSnapshots = await prisma.deviceParameterSnapshot.findMany()
      * ```
      */
    get deviceParameterSnapshot(): Prisma.DeviceParameterSnapshotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.deviceTelemetry`: Exposes CRUD operations for the **DeviceTelemetry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DeviceTelemetries
      * const deviceTelemetries = await prisma.deviceTelemetry.findMany()
      * ```
      */
    get deviceTelemetry(): Prisma.DeviceTelemetryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dynamicPasswordAuditLog`: Exposes CRUD operations for the **DynamicPasswordAuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DynamicPasswordAuditLogs
      * const dynamicPasswordAuditLogs = await prisma.dynamicPasswordAuditLog.findMany()
      * ```
      */
    get dynamicPasswordAuditLog(): Prisma.DynamicPasswordAuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.firmwareFile`: Exposes CRUD operations for the **FirmwareFile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FirmwareFiles
      * const firmwareFiles = await prisma.firmwareFile.findMany()
      * ```
      */
    get firmwareFile(): Prisma.FirmwareFileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.geoFence`: Exposes CRUD operations for the **GeoFence** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more GeoFences
      * const geoFences = await prisma.geoFence.findMany()
      * ```
      */
    get geoFence(): Prisma.GeoFenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.geofence`: Exposes CRUD operations for the **Geofence** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Geofences
      * const geofences = await prisma.geofence.findMany()
      * ```
      */
    get geofence(): Prisma.GeofenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lock`: Exposes CRUD operations for the **Lock** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Locks
      * const locks = await prisma.lock.findMany()
      * ```
      */
    get lock(): Prisma.LockDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lockAccess`: Exposes CRUD operations for the **LockAccess** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LockAccesses
      * const lockAccesses = await prisma.lockAccess.findMany()
      * ```
      */
    get lockAccess(): Prisma.LockAccessDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lockCommand`: Exposes CRUD operations for the **LockCommand** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LockCommands
      * const lockCommands = await prisma.lockCommand.findMany()
      * ```
      */
    get lockCommand(): Prisma.LockCommandDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lockEvent`: Exposes CRUD operations for the **LockEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LockEvents
      * const lockEvents = await prisma.lockEvent.findMany()
      * ```
      */
    get lockEvent(): Prisma.LockEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lockLocation`: Exposes CRUD operations for the **LockLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LockLocations
      * const lockLocations = await prisma.lockLocation.findMany()
      * ```
      */
    get lockLocation(): Prisma.LockLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.maintenanceRecord`: Exposes CRUD operations for the **MaintenanceRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MaintenanceRecords
      * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
      * ```
      */
    get maintenanceRecord(): Prisma.MaintenanceRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.monitoringAuditLog`: Exposes CRUD operations for the **MonitoringAuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MonitoringAuditLogs
      * const monitoringAuditLogs = await prisma.monitoringAuditLog.findMany()
      * ```
      */
    get monitoringAuditLog(): Prisma.MonitoringAuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.nfcCard`: Exposes CRUD operations for the **NfcCard** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more NfcCards
      * const nfcCards = await prisma.nfcCard.findMany()
      * ```
      */
    get nfcCard(): Prisma.NfcCardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.otaUpgradeRecord`: Exposes CRUD operations for the **OtaUpgradeRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OtaUpgradeRecords
      * const otaUpgradeRecords = await prisma.otaUpgradeRecord.findMany()
      * ```
      */
    get otaUpgradeRecord(): Prisma.OtaUpgradeRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Permissions
      * const permissions = await prisma.permission.findMany()
      * ```
      */
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RolePermissions
      * const rolePermissions = await prisma.rolePermission.findMany()
      * ```
      */
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alarms`: Exposes CRUD operations for the **alarms** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alarms
      * const alarms = await prisma.alarms.findMany()
      * ```
      */
    get alarms(): Prisma.alarmsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.devices`: Exposes CRUD operations for the **devices** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Devices
      * const devices = await prisma.devices.findMany()
      * ```
      */
    get devices(): Prisma.devicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.events`: Exposes CRUD operations for the **events** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.events.findMany()
      * ```
      */
    get events(): Prisma.eventsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.positions`: Exposes CRUD operations for the **positions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Positions
      * const positions = await prisma.positions.findMany()
      * ```
      */
    get positions(): Prisma.positionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map