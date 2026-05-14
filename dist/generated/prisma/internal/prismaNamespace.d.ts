import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Alert: "Alert";
    readonly AuditLog: "AuditLog";
    readonly Branch: "Branch";
    readonly Company: "Company";
    readonly Device: "Device";
    readonly DeviceAlarmPolicy: "DeviceAlarmPolicy";
    readonly DeviceCommand: "DeviceCommand";
    readonly DeviceCompanyAssignmentHistory: "DeviceCompanyAssignmentHistory";
    readonly DeviceDiagnosisLog: "DeviceDiagnosisLog";
    readonly DeviceEvent: "DeviceEvent";
    readonly DeviceGeoFence: "DeviceGeoFence";
    readonly DeviceHistoryData: "DeviceHistoryData";
    readonly DeviceNfcCard: "DeviceNfcCard";
    readonly DeviceParameterChangeLog: "DeviceParameterChangeLog";
    readonly DeviceParameterSnapshot: "DeviceParameterSnapshot";
    readonly DeviceTelemetry: "DeviceTelemetry";
    readonly DynamicPasswordAuditLog: "DynamicPasswordAuditLog";
    readonly FirmwareFile: "FirmwareFile";
    readonly GeoFence: "GeoFence";
    readonly Geofence: "Geofence";
    readonly Lock: "Lock";
    readonly LockAccess: "LockAccess";
    readonly LockCommand: "LockCommand";
    readonly LockEvent: "LockEvent";
    readonly LockLocation: "LockLocation";
    readonly MaintenanceRecord: "MaintenanceRecord";
    readonly MonitoringAuditLog: "MonitoringAuditLog";
    readonly NfcCard: "NfcCard";
    readonly OtaUpgradeRecord: "OtaUpgradeRecord";
    readonly Permission: "Permission";
    readonly Role: "Role";
    readonly RolePermission: "RolePermission";
    readonly User: "User";
    readonly alarms: "alarms";
    readonly devices: "devices";
    readonly events: "events";
    readonly positions: "positions";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "alert" | "auditLog" | "branch" | "company" | "device" | "deviceAlarmPolicy" | "deviceCommand" | "deviceCompanyAssignmentHistory" | "deviceDiagnosisLog" | "deviceEvent" | "deviceGeoFence" | "deviceHistoryData" | "deviceNfcCard" | "deviceParameterChangeLog" | "deviceParameterSnapshot" | "deviceTelemetry" | "dynamicPasswordAuditLog" | "firmwareFile" | "geoFence" | "geofence" | "lock" | "lockAccess" | "lockCommand" | "lockEvent" | "lockLocation" | "maintenanceRecord" | "monitoringAuditLog" | "nfcCard" | "otaUpgradeRecord" | "permission" | "role" | "rolePermission" | "user" | "alarms" | "devices" | "events" | "positions";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Alert: {
            payload: Prisma.$AlertPayload<ExtArgs>;
            fields: Prisma.AlertFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlertFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                findFirst: {
                    args: Prisma.AlertFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                findMany: {
                    args: Prisma.AlertFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                create: {
                    args: Prisma.AlertCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                createMany: {
                    args: Prisma.AlertCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                delete: {
                    args: Prisma.AlertDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                update: {
                    args: Prisma.AlertUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                deleteMany: {
                    args: Prisma.AlertDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlertUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>[];
                };
                upsert: {
                    args: Prisma.AlertUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertPayload>;
                };
                aggregate: {
                    args: Prisma.AlertAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlert>;
                };
                groupBy: {
                    args: Prisma.AlertGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlertGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlertCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlertCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Branch: {
            payload: Prisma.$BranchPayload<ExtArgs>;
            fields: Prisma.BranchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BranchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                findFirst: {
                    args: Prisma.BranchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                findMany: {
                    args: Prisma.BranchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                create: {
                    args: Prisma.BranchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                createMany: {
                    args: Prisma.BranchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                delete: {
                    args: Prisma.BranchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                update: {
                    args: Prisma.BranchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                deleteMany: {
                    args: Prisma.BranchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BranchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>[];
                };
                upsert: {
                    args: Prisma.BranchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchPayload>;
                };
                aggregate: {
                    args: Prisma.BranchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranch>;
                };
                groupBy: {
                    args: Prisma.BranchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BranchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchCountAggregateOutputType> | number;
                };
            };
        };
        Company: {
            payload: Prisma.$CompanyPayload<ExtArgs>;
            fields: Prisma.CompanyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findFirst: {
                    args: Prisma.CompanyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findMany: {
                    args: Prisma.CompanyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                create: {
                    args: Prisma.CompanyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                createMany: {
                    args: Prisma.CompanyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                delete: {
                    args: Prisma.CompanyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                update: {
                    args: Prisma.CompanyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                deleteMany: {
                    args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                upsert: {
                    args: Prisma.CompanyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                aggregate: {
                    args: Prisma.CompanyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCompany>;
                };
                groupBy: {
                    args: Prisma.CompanyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CompanyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyCountAggregateOutputType> | number;
                };
            };
        };
        Device: {
            payload: Prisma.$DevicePayload<ExtArgs>;
            fields: Prisma.DeviceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findFirst: {
                    args: Prisma.DeviceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findMany: {
                    args: Prisma.DeviceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                create: {
                    args: Prisma.DeviceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                createMany: {
                    args: Prisma.DeviceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                delete: {
                    args: Prisma.DeviceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                update: {
                    args: Prisma.DeviceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                upsert: {
                    args: Prisma.DeviceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                aggregate: {
                    args: Prisma.DeviceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDevice>;
                };
                groupBy: {
                    args: Prisma.DeviceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCountAggregateOutputType> | number;
                };
            };
        };
        DeviceAlarmPolicy: {
            payload: Prisma.$DeviceAlarmPolicyPayload<ExtArgs>;
            fields: Prisma.DeviceAlarmPolicyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceAlarmPolicyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceAlarmPolicyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceAlarmPolicyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceAlarmPolicyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                findMany: {
                    args: Prisma.DeviceAlarmPolicyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>[];
                };
                create: {
                    args: Prisma.DeviceAlarmPolicyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                createMany: {
                    args: Prisma.DeviceAlarmPolicyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceAlarmPolicyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>[];
                };
                delete: {
                    args: Prisma.DeviceAlarmPolicyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                update: {
                    args: Prisma.DeviceAlarmPolicyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceAlarmPolicyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceAlarmPolicyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceAlarmPolicyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceAlarmPolicyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceAlarmPolicyPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceAlarmPolicyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceAlarmPolicy>;
                };
                groupBy: {
                    args: Prisma.DeviceAlarmPolicyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceAlarmPolicyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceAlarmPolicyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceAlarmPolicyCountAggregateOutputType> | number;
                };
            };
        };
        DeviceCommand: {
            payload: Prisma.$DeviceCommandPayload<ExtArgs>;
            fields: Prisma.DeviceCommandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceCommandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceCommandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceCommandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceCommandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                findMany: {
                    args: Prisma.DeviceCommandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>[];
                };
                create: {
                    args: Prisma.DeviceCommandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                createMany: {
                    args: Prisma.DeviceCommandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceCommandCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>[];
                };
                delete: {
                    args: Prisma.DeviceCommandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                update: {
                    args: Prisma.DeviceCommandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceCommandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceCommandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceCommandUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceCommandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCommandPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceCommandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceCommand>;
                };
                groupBy: {
                    args: Prisma.DeviceCommandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCommandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceCommandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCommandCountAggregateOutputType> | number;
                };
            };
        };
        DeviceCompanyAssignmentHistory: {
            payload: Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>;
            fields: Prisma.DeviceCompanyAssignmentHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceCompanyAssignmentHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceCompanyAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceCompanyAssignmentHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceCompanyAssignmentHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                findMany: {
                    args: Prisma.DeviceCompanyAssignmentHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>[];
                };
                create: {
                    args: Prisma.DeviceCompanyAssignmentHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                createMany: {
                    args: Prisma.DeviceCompanyAssignmentHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceCompanyAssignmentHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>[];
                };
                delete: {
                    args: Prisma.DeviceCompanyAssignmentHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                update: {
                    args: Prisma.DeviceCompanyAssignmentHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceCompanyAssignmentHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceCompanyAssignmentHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceCompanyAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceCompanyAssignmentHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceCompanyAssignmentHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceCompanyAssignmentHistory>;
                };
                groupBy: {
                    args: Prisma.DeviceCompanyAssignmentHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCompanyAssignmentHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceCompanyAssignmentHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCompanyAssignmentHistoryCountAggregateOutputType> | number;
                };
            };
        };
        DeviceDiagnosisLog: {
            payload: Prisma.$DeviceDiagnosisLogPayload<ExtArgs>;
            fields: Prisma.DeviceDiagnosisLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceDiagnosisLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceDiagnosisLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceDiagnosisLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceDiagnosisLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                findMany: {
                    args: Prisma.DeviceDiagnosisLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>[];
                };
                create: {
                    args: Prisma.DeviceDiagnosisLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                createMany: {
                    args: Prisma.DeviceDiagnosisLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceDiagnosisLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>[];
                };
                delete: {
                    args: Prisma.DeviceDiagnosisLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                update: {
                    args: Prisma.DeviceDiagnosisLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceDiagnosisLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceDiagnosisLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceDiagnosisLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceDiagnosisLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceDiagnosisLogPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceDiagnosisLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceDiagnosisLog>;
                };
                groupBy: {
                    args: Prisma.DeviceDiagnosisLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceDiagnosisLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceDiagnosisLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceDiagnosisLogCountAggregateOutputType> | number;
                };
            };
        };
        DeviceEvent: {
            payload: Prisma.$DeviceEventPayload<ExtArgs>;
            fields: Prisma.DeviceEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                findMany: {
                    args: Prisma.DeviceEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>[];
                };
                create: {
                    args: Prisma.DeviceEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                createMany: {
                    args: Prisma.DeviceEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>[];
                };
                delete: {
                    args: Prisma.DeviceEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                update: {
                    args: Prisma.DeviceEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceEventPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceEvent>;
                };
                groupBy: {
                    args: Prisma.DeviceEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceEventCountAggregateOutputType> | number;
                };
            };
        };
        DeviceGeoFence: {
            payload: Prisma.$DeviceGeoFencePayload<ExtArgs>;
            fields: Prisma.DeviceGeoFenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceGeoFenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceGeoFenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                findFirst: {
                    args: Prisma.DeviceGeoFenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceGeoFenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                findMany: {
                    args: Prisma.DeviceGeoFenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>[];
                };
                create: {
                    args: Prisma.DeviceGeoFenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                createMany: {
                    args: Prisma.DeviceGeoFenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceGeoFenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>[];
                };
                delete: {
                    args: Prisma.DeviceGeoFenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                update: {
                    args: Prisma.DeviceGeoFenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceGeoFenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceGeoFenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceGeoFenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>[];
                };
                upsert: {
                    args: Prisma.DeviceGeoFenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceGeoFencePayload>;
                };
                aggregate: {
                    args: Prisma.DeviceGeoFenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceGeoFence>;
                };
                groupBy: {
                    args: Prisma.DeviceGeoFenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceGeoFenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceGeoFenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceGeoFenceCountAggregateOutputType> | number;
                };
            };
        };
        DeviceHistoryData: {
            payload: Prisma.$DeviceHistoryDataPayload<ExtArgs>;
            fields: Prisma.DeviceHistoryDataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceHistoryDataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceHistoryDataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceHistoryDataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceHistoryDataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                findMany: {
                    args: Prisma.DeviceHistoryDataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>[];
                };
                create: {
                    args: Prisma.DeviceHistoryDataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                createMany: {
                    args: Prisma.DeviceHistoryDataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceHistoryDataCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>[];
                };
                delete: {
                    args: Prisma.DeviceHistoryDataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                update: {
                    args: Prisma.DeviceHistoryDataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceHistoryDataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceHistoryDataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceHistoryDataUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceHistoryDataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceHistoryDataPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceHistoryDataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceHistoryData>;
                };
                groupBy: {
                    args: Prisma.DeviceHistoryDataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceHistoryDataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceHistoryDataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceHistoryDataCountAggregateOutputType> | number;
                };
            };
        };
        DeviceNfcCard: {
            payload: Prisma.$DeviceNfcCardPayload<ExtArgs>;
            fields: Prisma.DeviceNfcCardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceNfcCardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceNfcCardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceNfcCardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceNfcCardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                findMany: {
                    args: Prisma.DeviceNfcCardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>[];
                };
                create: {
                    args: Prisma.DeviceNfcCardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                createMany: {
                    args: Prisma.DeviceNfcCardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceNfcCardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>[];
                };
                delete: {
                    args: Prisma.DeviceNfcCardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                update: {
                    args: Prisma.DeviceNfcCardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceNfcCardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceNfcCardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceNfcCardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceNfcCardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceNfcCardPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceNfcCardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceNfcCard>;
                };
                groupBy: {
                    args: Prisma.DeviceNfcCardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceNfcCardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceNfcCardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceNfcCardCountAggregateOutputType> | number;
                };
            };
        };
        DeviceParameterChangeLog: {
            payload: Prisma.$DeviceParameterChangeLogPayload<ExtArgs>;
            fields: Prisma.DeviceParameterChangeLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceParameterChangeLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceParameterChangeLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceParameterChangeLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceParameterChangeLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                findMany: {
                    args: Prisma.DeviceParameterChangeLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>[];
                };
                create: {
                    args: Prisma.DeviceParameterChangeLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                createMany: {
                    args: Prisma.DeviceParameterChangeLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceParameterChangeLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>[];
                };
                delete: {
                    args: Prisma.DeviceParameterChangeLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                update: {
                    args: Prisma.DeviceParameterChangeLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceParameterChangeLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceParameterChangeLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceParameterChangeLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceParameterChangeLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterChangeLogPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceParameterChangeLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceParameterChangeLog>;
                };
                groupBy: {
                    args: Prisma.DeviceParameterChangeLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceParameterChangeLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceParameterChangeLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceParameterChangeLogCountAggregateOutputType> | number;
                };
            };
        };
        DeviceParameterSnapshot: {
            payload: Prisma.$DeviceParameterSnapshotPayload<ExtArgs>;
            fields: Prisma.DeviceParameterSnapshotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceParameterSnapshotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceParameterSnapshotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceParameterSnapshotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceParameterSnapshotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                findMany: {
                    args: Prisma.DeviceParameterSnapshotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>[];
                };
                create: {
                    args: Prisma.DeviceParameterSnapshotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                createMany: {
                    args: Prisma.DeviceParameterSnapshotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceParameterSnapshotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>[];
                };
                delete: {
                    args: Prisma.DeviceParameterSnapshotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                update: {
                    args: Prisma.DeviceParameterSnapshotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceParameterSnapshotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceParameterSnapshotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceParameterSnapshotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceParameterSnapshotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceParameterSnapshotPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceParameterSnapshotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceParameterSnapshot>;
                };
                groupBy: {
                    args: Prisma.DeviceParameterSnapshotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceParameterSnapshotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceParameterSnapshotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceParameterSnapshotCountAggregateOutputType> | number;
                };
            };
        };
        DeviceTelemetry: {
            payload: Prisma.$DeviceTelemetryPayload<ExtArgs>;
            fields: Prisma.DeviceTelemetryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceTelemetryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceTelemetryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                findFirst: {
                    args: Prisma.DeviceTelemetryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceTelemetryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                findMany: {
                    args: Prisma.DeviceTelemetryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[];
                };
                create: {
                    args: Prisma.DeviceTelemetryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                createMany: {
                    args: Prisma.DeviceTelemetryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceTelemetryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[];
                };
                delete: {
                    args: Prisma.DeviceTelemetryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                update: {
                    args: Prisma.DeviceTelemetryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceTelemetryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceTelemetryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceTelemetryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>[];
                };
                upsert: {
                    args: Prisma.DeviceTelemetryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeviceTelemetryPayload>;
                };
                aggregate: {
                    args: Prisma.DeviceTelemetryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeviceTelemetry>;
                };
                groupBy: {
                    args: Prisma.DeviceTelemetryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceTelemetryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceTelemetryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceTelemetryCountAggregateOutputType> | number;
                };
            };
        };
        DynamicPasswordAuditLog: {
            payload: Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>;
            fields: Prisma.DynamicPasswordAuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DynamicPasswordAuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DynamicPasswordAuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.DynamicPasswordAuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DynamicPasswordAuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                findMany: {
                    args: Prisma.DynamicPasswordAuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>[];
                };
                create: {
                    args: Prisma.DynamicPasswordAuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                createMany: {
                    args: Prisma.DynamicPasswordAuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DynamicPasswordAuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>[];
                };
                delete: {
                    args: Prisma.DynamicPasswordAuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                update: {
                    args: Prisma.DynamicPasswordAuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.DynamicPasswordAuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DynamicPasswordAuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DynamicPasswordAuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.DynamicPasswordAuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicPasswordAuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.DynamicPasswordAuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDynamicPasswordAuditLog>;
                };
                groupBy: {
                    args: Prisma.DynamicPasswordAuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicPasswordAuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DynamicPasswordAuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicPasswordAuditLogCountAggregateOutputType> | number;
                };
            };
        };
        FirmwareFile: {
            payload: Prisma.$FirmwareFilePayload<ExtArgs>;
            fields: Prisma.FirmwareFileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FirmwareFileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FirmwareFileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                findFirst: {
                    args: Prisma.FirmwareFileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FirmwareFileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                findMany: {
                    args: Prisma.FirmwareFileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>[];
                };
                create: {
                    args: Prisma.FirmwareFileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                createMany: {
                    args: Prisma.FirmwareFileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FirmwareFileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>[];
                };
                delete: {
                    args: Prisma.FirmwareFileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                update: {
                    args: Prisma.FirmwareFileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                deleteMany: {
                    args: Prisma.FirmwareFileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FirmwareFileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FirmwareFileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>[];
                };
                upsert: {
                    args: Prisma.FirmwareFileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FirmwareFilePayload>;
                };
                aggregate: {
                    args: Prisma.FirmwareFileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFirmwareFile>;
                };
                groupBy: {
                    args: Prisma.FirmwareFileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FirmwareFileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FirmwareFileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FirmwareFileCountAggregateOutputType> | number;
                };
            };
        };
        GeoFence: {
            payload: Prisma.$GeoFencePayload<ExtArgs>;
            fields: Prisma.GeoFenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeoFenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeoFenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                findFirst: {
                    args: Prisma.GeoFenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeoFenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                findMany: {
                    args: Prisma.GeoFenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>[];
                };
                create: {
                    args: Prisma.GeoFenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                createMany: {
                    args: Prisma.GeoFenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeoFenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>[];
                };
                delete: {
                    args: Prisma.GeoFenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                update: {
                    args: Prisma.GeoFenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                deleteMany: {
                    args: Prisma.GeoFenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeoFenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeoFenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>[];
                };
                upsert: {
                    args: Prisma.GeoFenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeoFencePayload>;
                };
                aggregate: {
                    args: Prisma.GeoFenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeoFence>;
                };
                groupBy: {
                    args: Prisma.GeoFenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeoFenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeoFenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeoFenceCountAggregateOutputType> | number;
                };
            };
        };
        Geofence: {
            payload: Prisma.$GeofencePayload<ExtArgs>;
            fields: Prisma.GeofenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeofenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeofenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                findFirst: {
                    args: Prisma.GeofenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeofenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                findMany: {
                    args: Prisma.GeofenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>[];
                };
                create: {
                    args: Prisma.GeofenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                createMany: {
                    args: Prisma.GeofenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeofenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>[];
                };
                delete: {
                    args: Prisma.GeofenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                update: {
                    args: Prisma.GeofenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                deleteMany: {
                    args: Prisma.GeofenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeofenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeofenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>[];
                };
                upsert: {
                    args: Prisma.GeofenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeofencePayload>;
                };
                aggregate: {
                    args: Prisma.GeofenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeofence>;
                };
                groupBy: {
                    args: Prisma.GeofenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeofenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeofenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeofenceCountAggregateOutputType> | number;
                };
            };
        };
        Lock: {
            payload: Prisma.$LockPayload<ExtArgs>;
            fields: Prisma.LockFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LockFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LockFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                findFirst: {
                    args: Prisma.LockFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LockFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                findMany: {
                    args: Prisma.LockFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>[];
                };
                create: {
                    args: Prisma.LockCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                createMany: {
                    args: Prisma.LockCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LockCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>[];
                };
                delete: {
                    args: Prisma.LockDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                update: {
                    args: Prisma.LockUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                deleteMany: {
                    args: Prisma.LockDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LockUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LockUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>[];
                };
                upsert: {
                    args: Prisma.LockUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockPayload>;
                };
                aggregate: {
                    args: Prisma.LockAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLock>;
                };
                groupBy: {
                    args: Prisma.LockGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LockCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockCountAggregateOutputType> | number;
                };
            };
        };
        LockAccess: {
            payload: Prisma.$LockAccessPayload<ExtArgs>;
            fields: Prisma.LockAccessFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LockAccessFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LockAccessFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                findFirst: {
                    args: Prisma.LockAccessFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LockAccessFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                findMany: {
                    args: Prisma.LockAccessFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>[];
                };
                create: {
                    args: Prisma.LockAccessCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                createMany: {
                    args: Prisma.LockAccessCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LockAccessCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>[];
                };
                delete: {
                    args: Prisma.LockAccessDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                update: {
                    args: Prisma.LockAccessUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                deleteMany: {
                    args: Prisma.LockAccessDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LockAccessUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LockAccessUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>[];
                };
                upsert: {
                    args: Prisma.LockAccessUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockAccessPayload>;
                };
                aggregate: {
                    args: Prisma.LockAccessAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLockAccess>;
                };
                groupBy: {
                    args: Prisma.LockAccessGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockAccessGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LockAccessCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockAccessCountAggregateOutputType> | number;
                };
            };
        };
        LockCommand: {
            payload: Prisma.$LockCommandPayload<ExtArgs>;
            fields: Prisma.LockCommandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LockCommandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LockCommandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                findFirst: {
                    args: Prisma.LockCommandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LockCommandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                findMany: {
                    args: Prisma.LockCommandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>[];
                };
                create: {
                    args: Prisma.LockCommandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                createMany: {
                    args: Prisma.LockCommandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LockCommandCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>[];
                };
                delete: {
                    args: Prisma.LockCommandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                update: {
                    args: Prisma.LockCommandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                deleteMany: {
                    args: Prisma.LockCommandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LockCommandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LockCommandUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>[];
                };
                upsert: {
                    args: Prisma.LockCommandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockCommandPayload>;
                };
                aggregate: {
                    args: Prisma.LockCommandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLockCommand>;
                };
                groupBy: {
                    args: Prisma.LockCommandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockCommandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LockCommandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockCommandCountAggregateOutputType> | number;
                };
            };
        };
        LockEvent: {
            payload: Prisma.$LockEventPayload<ExtArgs>;
            fields: Prisma.LockEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LockEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LockEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                findFirst: {
                    args: Prisma.LockEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LockEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                findMany: {
                    args: Prisma.LockEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>[];
                };
                create: {
                    args: Prisma.LockEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                createMany: {
                    args: Prisma.LockEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LockEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>[];
                };
                delete: {
                    args: Prisma.LockEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                update: {
                    args: Prisma.LockEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                deleteMany: {
                    args: Prisma.LockEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LockEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LockEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>[];
                };
                upsert: {
                    args: Prisma.LockEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockEventPayload>;
                };
                aggregate: {
                    args: Prisma.LockEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLockEvent>;
                };
                groupBy: {
                    args: Prisma.LockEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LockEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockEventCountAggregateOutputType> | number;
                };
            };
        };
        LockLocation: {
            payload: Prisma.$LockLocationPayload<ExtArgs>;
            fields: Prisma.LockLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LockLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LockLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                findFirst: {
                    args: Prisma.LockLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LockLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                findMany: {
                    args: Prisma.LockLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>[];
                };
                create: {
                    args: Prisma.LockLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                createMany: {
                    args: Prisma.LockLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LockLocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>[];
                };
                delete: {
                    args: Prisma.LockLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                update: {
                    args: Prisma.LockLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.LockLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LockLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LockLocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>[];
                };
                upsert: {
                    args: Prisma.LockLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LockLocationPayload>;
                };
                aggregate: {
                    args: Prisma.LockLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLockLocation>;
                };
                groupBy: {
                    args: Prisma.LockLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockLocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LockLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LockLocationCountAggregateOutputType> | number;
                };
            };
        };
        MaintenanceRecord: {
            payload: Prisma.$MaintenanceRecordPayload<ExtArgs>;
            fields: Prisma.MaintenanceRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaintenanceRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                findFirst: {
                    args: Prisma.MaintenanceRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                findMany: {
                    args: Prisma.MaintenanceRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[];
                };
                create: {
                    args: Prisma.MaintenanceRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                createMany: {
                    args: Prisma.MaintenanceRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaintenanceRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[];
                };
                delete: {
                    args: Prisma.MaintenanceRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                update: {
                    args: Prisma.MaintenanceRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.MaintenanceRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaintenanceRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaintenanceRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[];
                };
                upsert: {
                    args: Prisma.MaintenanceRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>;
                };
                aggregate: {
                    args: Prisma.MaintenanceRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaintenanceRecord>;
                };
                groupBy: {
                    args: Prisma.MaintenanceRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaintenanceRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaintenanceRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaintenanceRecordCountAggregateOutputType> | number;
                };
            };
        };
        MonitoringAuditLog: {
            payload: Prisma.$MonitoringAuditLogPayload<ExtArgs>;
            fields: Prisma.MonitoringAuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MonitoringAuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MonitoringAuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.MonitoringAuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MonitoringAuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                findMany: {
                    args: Prisma.MonitoringAuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>[];
                };
                create: {
                    args: Prisma.MonitoringAuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                createMany: {
                    args: Prisma.MonitoringAuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MonitoringAuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>[];
                };
                delete: {
                    args: Prisma.MonitoringAuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                update: {
                    args: Prisma.MonitoringAuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.MonitoringAuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MonitoringAuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MonitoringAuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.MonitoringAuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoringAuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.MonitoringAuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMonitoringAuditLog>;
                };
                groupBy: {
                    args: Prisma.MonitoringAuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonitoringAuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MonitoringAuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonitoringAuditLogCountAggregateOutputType> | number;
                };
            };
        };
        NfcCard: {
            payload: Prisma.$NfcCardPayload<ExtArgs>;
            fields: Prisma.NfcCardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NfcCardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NfcCardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                findFirst: {
                    args: Prisma.NfcCardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NfcCardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                findMany: {
                    args: Prisma.NfcCardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>[];
                };
                create: {
                    args: Prisma.NfcCardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                createMany: {
                    args: Prisma.NfcCardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NfcCardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>[];
                };
                delete: {
                    args: Prisma.NfcCardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                update: {
                    args: Prisma.NfcCardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                deleteMany: {
                    args: Prisma.NfcCardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NfcCardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NfcCardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>[];
                };
                upsert: {
                    args: Prisma.NfcCardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NfcCardPayload>;
                };
                aggregate: {
                    args: Prisma.NfcCardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNfcCard>;
                };
                groupBy: {
                    args: Prisma.NfcCardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NfcCardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NfcCardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NfcCardCountAggregateOutputType> | number;
                };
            };
        };
        OtaUpgradeRecord: {
            payload: Prisma.$OtaUpgradeRecordPayload<ExtArgs>;
            fields: Prisma.OtaUpgradeRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtaUpgradeRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtaUpgradeRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                findFirst: {
                    args: Prisma.OtaUpgradeRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtaUpgradeRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                findMany: {
                    args: Prisma.OtaUpgradeRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>[];
                };
                create: {
                    args: Prisma.OtaUpgradeRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                createMany: {
                    args: Prisma.OtaUpgradeRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtaUpgradeRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>[];
                };
                delete: {
                    args: Prisma.OtaUpgradeRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                update: {
                    args: Prisma.OtaUpgradeRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.OtaUpgradeRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtaUpgradeRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtaUpgradeRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>[];
                };
                upsert: {
                    args: Prisma.OtaUpgradeRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtaUpgradeRecordPayload>;
                };
                aggregate: {
                    args: Prisma.OtaUpgradeRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtaUpgradeRecord>;
                };
                groupBy: {
                    args: Prisma.OtaUpgradeRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtaUpgradeRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtaUpgradeRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtaUpgradeRecordCountAggregateOutputType> | number;
                };
            };
        };
        Permission: {
            payload: Prisma.$PermissionPayload<ExtArgs>;
            fields: Prisma.PermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findFirst: {
                    args: Prisma.PermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findMany: {
                    args: Prisma.PermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                create: {
                    args: Prisma.PermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                createMany: {
                    args: Prisma.PermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                delete: {
                    args: Prisma.PermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                update: {
                    args: Prisma.PermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                upsert: {
                    args: Prisma.PermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>;
                };
                groupBy: {
                    args: Prisma.PermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        alarms: {
            payload: Prisma.$alarmsPayload<ExtArgs>;
            fields: Prisma.alarmsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alarmsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alarmsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                findFirst: {
                    args: Prisma.alarmsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alarmsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                findMany: {
                    args: Prisma.alarmsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>[];
                };
                create: {
                    args: Prisma.alarmsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                createMany: {
                    args: Prisma.alarmsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alarmsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>[];
                };
                delete: {
                    args: Prisma.alarmsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                update: {
                    args: Prisma.alarmsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                deleteMany: {
                    args: Prisma.alarmsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alarmsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alarmsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>[];
                };
                upsert: {
                    args: Prisma.alarmsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alarmsPayload>;
                };
                aggregate: {
                    args: Prisma.AlarmsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlarms>;
                };
                groupBy: {
                    args: Prisma.alarmsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlarmsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alarmsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlarmsCountAggregateOutputType> | number;
                };
            };
        };
        devices: {
            payload: Prisma.$devicesPayload<ExtArgs>;
            fields: Prisma.devicesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.devicesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.devicesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                findFirst: {
                    args: Prisma.devicesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.devicesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                findMany: {
                    args: Prisma.devicesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>[];
                };
                create: {
                    args: Prisma.devicesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                createMany: {
                    args: Prisma.devicesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.devicesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>[];
                };
                delete: {
                    args: Prisma.devicesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                update: {
                    args: Prisma.devicesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                deleteMany: {
                    args: Prisma.devicesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.devicesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.devicesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>[];
                };
                upsert: {
                    args: Prisma.devicesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$devicesPayload>;
                };
                aggregate: {
                    args: Prisma.DevicesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDevices>;
                };
                groupBy: {
                    args: Prisma.devicesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DevicesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.devicesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DevicesCountAggregateOutputType> | number;
                };
            };
        };
        events: {
            payload: Prisma.$eventsPayload<ExtArgs>;
            fields: Prisma.eventsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.eventsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                findFirst: {
                    args: Prisma.eventsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                findMany: {
                    args: Prisma.eventsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                create: {
                    args: Prisma.eventsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                createMany: {
                    args: Prisma.eventsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                delete: {
                    args: Prisma.eventsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                update: {
                    args: Prisma.eventsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                deleteMany: {
                    args: Prisma.eventsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.eventsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                upsert: {
                    args: Prisma.eventsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                aggregate: {
                    args: Prisma.EventsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvents>;
                };
                groupBy: {
                    args: Prisma.eventsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.eventsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventsCountAggregateOutputType> | number;
                };
            };
        };
        positions: {
            payload: Prisma.$positionsPayload<ExtArgs>;
            fields: Prisma.positionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.positionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.positionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                findFirst: {
                    args: Prisma.positionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.positionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                findMany: {
                    args: Prisma.positionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>[];
                };
                create: {
                    args: Prisma.positionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                createMany: {
                    args: Prisma.positionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.positionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>[];
                };
                delete: {
                    args: Prisma.positionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                update: {
                    args: Prisma.positionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                deleteMany: {
                    args: Prisma.positionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.positionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.positionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>[];
                };
                upsert: {
                    args: Prisma.positionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$positionsPayload>;
                };
                aggregate: {
                    args: Prisma.PositionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePositions>;
                };
                groupBy: {
                    args: Prisma.positionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.positionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AlertScalarFieldEnum: {
    readonly id: "id";
    readonly lockId: "lockId";
    readonly title: "title";
    readonly message: "message";
    readonly severity: "severity";
    readonly status: "status";
    readonly resolvedAt: "resolvedAt";
    readonly acknowledgedAt: "acknowledgedAt";
    readonly rawPayload: "rawPayload";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly oldValues: "oldValues";
    readonly newValues: "newValues";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const BranchScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly city: "city";
    readonly region: "region";
    readonly companyId: "companyId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum];
export declare const CompanyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly rut: "rut";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];
export declare const DeviceScalarFieldEnum: {
    readonly id: "id";
    readonly providerId: "providerId";
    readonly deviceId: "deviceId";
    readonly name: "name";
    readonly companyId: "companyId";
    readonly status: "status";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly batteryLevel: "batteryLevel";
    readonly bleMac: "bleMac";
    readonly bluetoothName: "bluetoothName";
    readonly deviceType: "deviceType";
    readonly firmwareVersion: "firmwareVersion";
    readonly gpsSupported: "gpsSupported";
    readonly hardwareVersion: "hardwareVersion";
    readonly iccid: "iccid";
    readonly imei: "imei";
    readonly keyboardSupported: "keyboardSupported";
    readonly lastAddress: "lastAddress";
    readonly lastConnectionAt: "lastConnectionAt";
    readonly lastLocationLat: "lastLocationLat";
    readonly lastLocationLng: "lastLocationLng";
    readonly lockStatus: "lockStatus";
    readonly loraSupported: "loraSupported";
    readonly nfcSupported: "nfcSupported";
    readonly notes: "notes";
    readonly onlineStatus: "onlineStatus";
    readonly productModel: "productModel";
    readonly remoteUnlockSupported: "remoteUnlockSupported";
    readonly serialNumber: "serialNumber";
    readonly shackleStatus: "shackleStatus";
    readonly signalStrength: "signalStrength";
    readonly simNumber: "simNumber";
};
export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];
export declare const DeviceAlarmPolicyScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly receivePhones: "receivePhones";
    readonly receiveEmails: "receiveEmails";
    readonly pushSmsEnabled: "pushSmsEnabled";
    readonly pushEmailEnabled: "pushEmailEnabled";
    readonly sendingEventTypes: "sendingEventTypes";
    readonly enabled: "enabled";
    readonly remarks: "remarks";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DeviceAlarmPolicyScalarFieldEnum = (typeof DeviceAlarmPolicyScalarFieldEnum)[keyof typeof DeviceAlarmPolicyScalarFieldEnum];
export declare const DeviceCommandScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly userId: "userId";
    readonly command: "command";
    readonly status: "status";
    readonly requestPayload: "requestPayload";
    readonly responsePayload: "responsePayload";
    readonly createdAt: "createdAt";
    readonly completedAt: "completedAt";
    readonly commandContent: "commandContent";
    readonly commandType: "commandType";
    readonly executeWhenOnline: "executeWhenOnline";
    readonly executionTime: "executionTime";
    readonly expiresAt: "expiresAt";
    readonly isCancelled: "isCancelled";
    readonly isReserved: "isReserved";
    readonly operatorName: "operatorName";
    readonly payload: "payload";
    readonly requestedByUserId: "requestedByUserId";
    readonly responseContent: "responseContent";
    readonly updatedAt: "updatedAt";
};
export type DeviceCommandScalarFieldEnum = (typeof DeviceCommandScalarFieldEnum)[keyof typeof DeviceCommandScalarFieldEnum];
export declare const DeviceCompanyAssignmentHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly fromCompanyId: "fromCompanyId";
    readonly toCompanyId: "toCompanyId";
    readonly assignedById: "assignedById";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
};
export type DeviceCompanyAssignmentHistoryScalarFieldEnum = (typeof DeviceCompanyAssignmentHistoryScalarFieldEnum)[keyof typeof DeviceCompanyAssignmentHistoryScalarFieldEnum];
export declare const DeviceDiagnosisLogScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly deviceName: "deviceName";
    readonly productModel: "productModel";
    readonly companyId: "companyId";
    readonly diagnosisType: "diagnosisType";
    readonly logLevel: "logLevel";
    readonly summary: "summary";
    readonly fullLog: "fullLog";
    readonly rawPayloadJson: "rawPayloadJson";
    readonly source: "source";
    readonly attachmentUrl: "attachmentUrl";
    readonly uploadedById: "uploadedById";
    readonly uploadedByName: "uploadedByName";
    readonly uploadedAt: "uploadedAt";
    readonly createdAt: "createdAt";
};
export type DeviceDiagnosisLogScalarFieldEnum = (typeof DeviceDiagnosisLogScalarFieldEnum)[keyof typeof DeviceDiagnosisLogScalarFieldEnum];
export declare const DeviceEventScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly type: "type";
    readonly message: "message";
    readonly rawPayload: "rawPayload";
    readonly createdAt: "createdAt";
};
export type DeviceEventScalarFieldEnum = (typeof DeviceEventScalarFieldEnum)[keyof typeof DeviceEventScalarFieldEnum];
export declare const DeviceGeoFenceScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly geofenceId: "geofenceId";
    readonly syncedAt: "syncedAt";
    readonly createdAt: "createdAt";
};
export type DeviceGeoFenceScalarFieldEnum = (typeof DeviceGeoFenceScalarFieldEnum)[keyof typeof DeviceGeoFenceScalarFieldEnum];
export declare const DeviceHistoryDataScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly reportType: "reportType";
    readonly reportedAt: "reportedAt";
    readonly longitude: "longitude";
    readonly latitude: "latitude";
    readonly address: "address";
    readonly lockStatus: "lockStatus";
    readonly shackleStatus: "shackleStatus";
    readonly batteryLevel: "batteryLevel";
    readonly signalStrength: "signalStrength";
    readonly temperature: "temperature";
    readonly speed: "speed";
    readonly rawPayloadJson: "rawPayloadJson";
    readonly createdAt: "createdAt";
    readonly companyId: "companyId";
    readonly companyName: "companyName";
    readonly deviceName: "deviceName";
    readonly deviceType: "deviceType";
    readonly firmwareVersion: "firmwareVersion";
    readonly productModel: "productModel";
    readonly source: "source";
};
export type DeviceHistoryDataScalarFieldEnum = (typeof DeviceHistoryDataScalarFieldEnum)[keyof typeof DeviceHistoryDataScalarFieldEnum];
export declare const DeviceNfcCardScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly nfcCardId: "nfcCardId";
    readonly syncedAt: "syncedAt";
    readonly createdAt: "createdAt";
    readonly blockNumber: "blockNumber";
    readonly cardNumber: "cardNumber";
    readonly createdById: "createdById";
    readonly status: "status";
    readonly updatedAt: "updatedAt";
};
export type DeviceNfcCardScalarFieldEnum = (typeof DeviceNfcCardScalarFieldEnum)[keyof typeof DeviceNfcCardScalarFieldEnum];
export declare const DeviceParameterChangeLogScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly parameterKey: "parameterKey";
    readonly oldValue: "oldValue";
    readonly newValue: "newValue";
    readonly changedById: "changedById";
    readonly commandId: "commandId";
    readonly result: "result";
    readonly createdAt: "createdAt";
};
export type DeviceParameterChangeLogScalarFieldEnum = (typeof DeviceParameterChangeLogScalarFieldEnum)[keyof typeof DeviceParameterChangeLogScalarFieldEnum];
export declare const DeviceParameterSnapshotScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly category: "category";
    readonly parameters: "parameters";
    readonly readById: "readById";
    readonly readAt: "readAt";
    readonly rawPayload: "rawPayload";
};
export type DeviceParameterSnapshotScalarFieldEnum = (typeof DeviceParameterSnapshotScalarFieldEnum)[keyof typeof DeviceParameterSnapshotScalarFieldEnum];
export declare const DeviceTelemetryScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly battery: "battery";
    readonly signal: "signal";
    readonly speed: "speed";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly rawPayload: "rawPayload";
    readonly recordedAt: "recordedAt";
};
export type DeviceTelemetryScalarFieldEnum = (typeof DeviceTelemetryScalarFieldEnum)[keyof typeof DeviceTelemetryScalarFieldEnum];
export declare const DynamicPasswordAuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly viewedById: "viewedById";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly result: "result";
    readonly createdAt: "createdAt";
};
export type DynamicPasswordAuditLogScalarFieldEnum = (typeof DynamicPasswordAuditLogScalarFieldEnum)[keyof typeof DynamicPasswordAuditLogScalarFieldEnum];
export declare const FirmwareFileScalarFieldEnum: {
    readonly id: "id";
    readonly deviceType: "deviceType";
    readonly productModel: "productModel";
    readonly firmwareType: "firmwareType";
    readonly versionName: "versionName";
    readonly fileName: "fileName";
    readonly filePath: "filePath";
    readonly fileSize: "fileSize";
    readonly mimeType: "mimeType";
    readonly description: "description";
    readonly uploadedById: "uploadedById";
    readonly uploadedAt: "uploadedAt";
    readonly deletedAt: "deletedAt";
    readonly checksum: "checksum";
    readonly originalFileName: "originalFileName";
    readonly uploadedByName: "uploadedByName";
};
export type FirmwareFileScalarFieldEnum = (typeof FirmwareFileScalarFieldEnum)[keyof typeof FirmwareFileScalarFieldEnum];
export declare const GeoFenceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly companyId: "companyId";
    readonly type: "type";
    readonly centerLat: "centerLat";
    readonly centerLng: "centerLng";
    readonly radiusMt: "radiusMt";
    readonly isActive: "isActive";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GeoFenceScalarFieldEnum = (typeof GeoFenceScalarFieldEnum)[keyof typeof GeoFenceScalarFieldEnum];
export declare const GeofenceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly companyId: "companyId";
    readonly centerLat: "centerLat";
    readonly centerLng: "centerLng";
    readonly radiusMt: "radiusMt";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GeofenceScalarFieldEnum = (typeof GeofenceScalarFieldEnum)[keyof typeof GeofenceScalarFieldEnum];
export declare const LockScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly internalCode: "internalCode";
    readonly serialNumber: "serialNumber";
    readonly imei: "imei";
    readonly macAddress: "macAddress";
    readonly status: "status";
    readonly connectionType: "connectionType";
    readonly batteryLevel: "batteryLevel";
    readonly signalLevel: "signalLevel";
    readonly firmwareVersion: "firmwareVersion";
    readonly hardwareVersion: "hardwareVersion";
    readonly lastConnectionAt: "lastConnectionAt";
    readonly lastSyncAt: "lastSyncAt";
    readonly companyId: "companyId";
    readonly branchId: "branchId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly connectionStatus: "connectionStatus";
};
export type LockScalarFieldEnum = (typeof LockScalarFieldEnum)[keyof typeof LockScalarFieldEnum];
export declare const LockAccessScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly lockId: "lockId";
    readonly accessType: "accessType";
    readonly status: "status";
    readonly validFrom: "validFrom";
    readonly validTo: "validTo";
    readonly allowedDays: "allowedDays";
    readonly allowedFromTime: "allowedFromTime";
    readonly allowedToTime: "allowedToTime";
    readonly createdById: "createdById";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly revokedAt: "revokedAt";
};
export type LockAccessScalarFieldEnum = (typeof LockAccessScalarFieldEnum)[keyof typeof LockAccessScalarFieldEnum];
export declare const LockCommandScalarFieldEnum: {
    readonly id: "id";
    readonly lockId: "lockId";
    readonly userId: "userId";
    readonly type: "type";
    readonly status: "status";
    readonly requestPayload: "requestPayload";
    readonly responsePayload: "responsePayload";
    readonly errorMessage: "errorMessage";
    readonly sentAt: "sentAt";
    readonly acknowledgedAt: "acknowledgedAt";
    readonly completedAt: "completedAt";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LockCommandScalarFieldEnum = (typeof LockCommandScalarFieldEnum)[keyof typeof LockCommandScalarFieldEnum];
export declare const LockEventScalarFieldEnum: {
    readonly id: "id";
    readonly lockId: "lockId";
    readonly userId: "userId";
    readonly type: "type";
    readonly message: "message";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly batteryLevel: "batteryLevel";
    readonly signalLevel: "signalLevel";
    readonly rawPayload: "rawPayload";
    readonly createdAt: "createdAt";
};
export type LockEventScalarFieldEnum = (typeof LockEventScalarFieldEnum)[keyof typeof LockEventScalarFieldEnum];
export declare const LockLocationScalarFieldEnum: {
    readonly id: "id";
    readonly lockId: "lockId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly accuracy: "accuracy";
    readonly speed: "speed";
    readonly heading: "heading";
    readonly batteryLevel: "batteryLevel";
    readonly signalLevel: "signalLevel";
    readonly source: "source";
    readonly rawPayload: "rawPayload";
    readonly recordedAt: "recordedAt";
};
export type LockLocationScalarFieldEnum = (typeof LockLocationScalarFieldEnum)[keyof typeof LockLocationScalarFieldEnum];
export declare const MaintenanceRecordScalarFieldEnum: {
    readonly id: "id";
    readonly lockId: "lockId";
    readonly title: "title";
    readonly description: "description";
    readonly startedAt: "startedAt";
    readonly finishedAt: "finishedAt";
    readonly technicianName: "technicianName";
    readonly result: "result";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaintenanceRecordScalarFieldEnum = (typeof MaintenanceRecordScalarFieldEnum)[keyof typeof MaintenanceRecordScalarFieldEnum];
export declare const MonitoringAuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly deviceId: "deviceId";
    readonly action: "action";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type MonitoringAuditLogScalarFieldEnum = (typeof MonitoringAuditLogScalarFieldEnum)[keyof typeof MonitoringAuditLogScalarFieldEnum];
export declare const NfcCardScalarFieldEnum: {
    readonly id: "id";
    readonly cardNo: "cardNo";
    readonly holder: "holder";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NfcCardScalarFieldEnum = (typeof NfcCardScalarFieldEnum)[keyof typeof NfcCardScalarFieldEnum];
export declare const OtaUpgradeRecordScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly firmwareFileId: "firmwareFileId";
    readonly firmwareType: "firmwareType";
    readonly fromVersion: "fromVersion";
    readonly toVersion: "toVersion";
    readonly status: "status";
    readonly progress: "progress";
    readonly commandPayloadJson: "commandPayloadJson";
    readonly responsePayloadJson: "responsePayloadJson";
    readonly errorMessage: "errorMessage";
    readonly startedAt: "startedAt";
    readonly finishedAt: "finishedAt";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly commandId: "commandId";
    readonly companyId: "companyId";
    readonly createdByName: "createdByName";
    readonly deviceName: "deviceName";
    readonly productModel: "productModel";
    readonly targetVersion: "targetVersion";
    readonly verifiedAt: "verifiedAt";
};
export type OtaUpgradeRecordScalarFieldEnum = (typeof OtaUpgradeRecordScalarFieldEnum)[keyof typeof OtaUpgradeRecordScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly id: "id";
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
    readonly createdAt: "createdAt";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly phone: "phone";
    readonly status: "status";
    readonly companyId: "companyId";
    readonly roleId: "roleId";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AlarmsScalarFieldEnum: {
    readonly id: "id";
    readonly terminal_id: "terminal_id";
    readonly alarm_type: "alarm_type";
    readonly active: "active";
    readonly created_at: "created_at";
};
export type AlarmsScalarFieldEnum = (typeof AlarmsScalarFieldEnum)[keyof typeof AlarmsScalarFieldEnum];
export declare const DevicesScalarFieldEnum: {
    readonly id: "id";
    readonly terminal_id: "terminal_id";
    readonly last_seen: "last_seen";
    readonly last_ip: "last_ip";
    readonly is_sealed: "is_sealed";
    readonly is_shackle_closed: "is_shackle_closed";
    readonly gps_valid: "gps_valid";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly elevation: "elevation";
    readonly speed: "speed";
    readonly direction: "direction";
    readonly device_time: "device_time";
    readonly battery_percent: "battery_percent";
    readonly battery_voltage: "battery_voltage";
    readonly signal_csq: "signal_csq";
    readonly satellite_count: "satellite_count";
    readonly network_mode: "network_mode";
    readonly charge_status: "charge_status";
    readonly iccid: "iccid";
    readonly hw_version: "hw_version";
    readonly sw_version: "sw_version";
    readonly alarm_flag: "alarm_flag";
    readonly created_at: "created_at";
};
export type DevicesScalarFieldEnum = (typeof DevicesScalarFieldEnum)[keyof typeof DevicesScalarFieldEnum];
export declare const EventsScalarFieldEnum: {
    readonly id: "id";
    readonly terminal_id: "terminal_id";
    readonly event_id: "event_id";
    readonly event_name: "event_name";
    readonly event_type: "event_type";
    readonly event_content: "event_content";
    readonly created_at: "created_at";
};
export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum];
export declare const PositionsScalarFieldEnum: {
    readonly id: "id";
    readonly terminal_id: "terminal_id";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly elevation: "elevation";
    readonly speed: "speed";
    readonly direction: "direction";
    readonly device_time: "device_time";
    readonly is_sealed: "is_sealed";
    readonly is_shackle_closed: "is_shackle_closed";
    readonly gps_valid: "gps_valid";
    readonly battery_percent: "battery_percent";
    readonly signal_csq: "signal_csq";
    readonly alarm_flag: "alarm_flag";
    readonly msg_type: "msg_type";
    readonly created_at: "created_at";
};
export type PositionsScalarFieldEnum = (typeof PositionsScalarFieldEnum)[keyof typeof PositionsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'AlertSeverity'
 */
export type EnumAlertSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertSeverity'>;
/**
 * Reference to a field of type 'AlertSeverity[]'
 */
export type ListEnumAlertSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertSeverity[]'>;
/**
 * Reference to a field of type 'AlertStatus'
 */
export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>;
/**
 * Reference to a field of type 'AlertStatus[]'
 */
export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'AuditAction'
 */
export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>;
/**
 * Reference to a field of type 'AuditAction[]'
 */
export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>;
/**
 * Reference to a field of type 'CompanyStatus'
 */
export type EnumCompanyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyStatus'>;
/**
 * Reference to a field of type 'CompanyStatus[]'
 */
export type ListEnumCompanyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyStatus[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'LockStatus'
 */
export type EnumLockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockStatus'>;
/**
 * Reference to a field of type 'LockStatus[]'
 */
export type ListEnumLockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockStatus[]'>;
/**
 * Reference to a field of type 'LockConnectionType'
 */
export type EnumLockConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockConnectionType'>;
/**
 * Reference to a field of type 'LockConnectionType[]'
 */
export type ListEnumLockConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockConnectionType[]'>;
/**
 * Reference to a field of type 'LockConnectionStatus'
 */
export type EnumLockConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockConnectionStatus'>;
/**
 * Reference to a field of type 'LockConnectionStatus[]'
 */
export type ListEnumLockConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockConnectionStatus[]'>;
/**
 * Reference to a field of type 'AccessType'
 */
export type EnumAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessType'>;
/**
 * Reference to a field of type 'AccessType[]'
 */
export type ListEnumAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessType[]'>;
/**
 * Reference to a field of type 'AccessStatus'
 */
export type EnumAccessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessStatus'>;
/**
 * Reference to a field of type 'AccessStatus[]'
 */
export type ListEnumAccessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessStatus[]'>;
/**
 * Reference to a field of type 'CommandType'
 */
export type EnumCommandTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommandType'>;
/**
 * Reference to a field of type 'CommandType[]'
 */
export type ListEnumCommandTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommandType[]'>;
/**
 * Reference to a field of type 'CommandStatus'
 */
export type EnumCommandStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommandStatus'>;
/**
 * Reference to a field of type 'CommandStatus[]'
 */
export type ListEnumCommandStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommandStatus[]'>;
/**
 * Reference to a field of type 'LockEventType'
 */
export type EnumLockEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockEventType'>;
/**
 * Reference to a field of type 'LockEventType[]'
 */
export type ListEnumLockEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LockEventType[]'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'UserStatus[]'
 */
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    alert?: Prisma.AlertOmit;
    auditLog?: Prisma.AuditLogOmit;
    branch?: Prisma.BranchOmit;
    company?: Prisma.CompanyOmit;
    device?: Prisma.DeviceOmit;
    deviceAlarmPolicy?: Prisma.DeviceAlarmPolicyOmit;
    deviceCommand?: Prisma.DeviceCommandOmit;
    deviceCompanyAssignmentHistory?: Prisma.DeviceCompanyAssignmentHistoryOmit;
    deviceDiagnosisLog?: Prisma.DeviceDiagnosisLogOmit;
    deviceEvent?: Prisma.DeviceEventOmit;
    deviceGeoFence?: Prisma.DeviceGeoFenceOmit;
    deviceHistoryData?: Prisma.DeviceHistoryDataOmit;
    deviceNfcCard?: Prisma.DeviceNfcCardOmit;
    deviceParameterChangeLog?: Prisma.DeviceParameterChangeLogOmit;
    deviceParameterSnapshot?: Prisma.DeviceParameterSnapshotOmit;
    deviceTelemetry?: Prisma.DeviceTelemetryOmit;
    dynamicPasswordAuditLog?: Prisma.DynamicPasswordAuditLogOmit;
    firmwareFile?: Prisma.FirmwareFileOmit;
    geoFence?: Prisma.GeoFenceOmit;
    geofence?: Prisma.GeofenceOmit;
    lock?: Prisma.LockOmit;
    lockAccess?: Prisma.LockAccessOmit;
    lockCommand?: Prisma.LockCommandOmit;
    lockEvent?: Prisma.LockEventOmit;
    lockLocation?: Prisma.LockLocationOmit;
    maintenanceRecord?: Prisma.MaintenanceRecordOmit;
    monitoringAuditLog?: Prisma.MonitoringAuditLogOmit;
    nfcCard?: Prisma.NfcCardOmit;
    otaUpgradeRecord?: Prisma.OtaUpgradeRecordOmit;
    permission?: Prisma.PermissionOmit;
    role?: Prisma.RoleOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    user?: Prisma.UserOmit;
    alarms?: Prisma.alarmsOmit;
    devices?: Prisma.devicesOmit;
    events?: Prisma.eventsOmit;
    positions?: Prisma.positionsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map