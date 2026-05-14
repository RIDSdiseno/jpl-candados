import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Lock
 *
 */
export type LockModel = runtime.Types.Result.DefaultSelection<Prisma.$LockPayload>;
export type AggregateLock = {
    _count: LockCountAggregateOutputType | null;
    _avg: LockAvgAggregateOutputType | null;
    _sum: LockSumAggregateOutputType | null;
    _min: LockMinAggregateOutputType | null;
    _max: LockMaxAggregateOutputType | null;
};
export type LockAvgAggregateOutputType = {
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockSumAggregateOutputType = {
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    internalCode: string | null;
    serialNumber: string | null;
    imei: string | null;
    macAddress: string | null;
    status: $Enums.LockStatus | null;
    connectionType: $Enums.LockConnectionType | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    firmwareVersion: string | null;
    hardwareVersion: string | null;
    lastConnectionAt: Date | null;
    lastSyncAt: Date | null;
    companyId: string | null;
    branchId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    connectionStatus: $Enums.LockConnectionStatus | null;
};
export type LockMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    internalCode: string | null;
    serialNumber: string | null;
    imei: string | null;
    macAddress: string | null;
    status: $Enums.LockStatus | null;
    connectionType: $Enums.LockConnectionType | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    firmwareVersion: string | null;
    hardwareVersion: string | null;
    lastConnectionAt: Date | null;
    lastSyncAt: Date | null;
    companyId: string | null;
    branchId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    connectionStatus: $Enums.LockConnectionStatus | null;
};
export type LockCountAggregateOutputType = {
    id: number;
    name: number;
    internalCode: number;
    serialNumber: number;
    imei: number;
    macAddress: number;
    status: number;
    connectionType: number;
    batteryLevel: number;
    signalLevel: number;
    firmwareVersion: number;
    hardwareVersion: number;
    lastConnectionAt: number;
    lastSyncAt: number;
    companyId: number;
    branchId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    connectionStatus: number;
    _all: number;
};
export type LockAvgAggregateInputType = {
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockSumAggregateInputType = {
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockMinAggregateInputType = {
    id?: true;
    name?: true;
    internalCode?: true;
    serialNumber?: true;
    imei?: true;
    macAddress?: true;
    status?: true;
    connectionType?: true;
    batteryLevel?: true;
    signalLevel?: true;
    firmwareVersion?: true;
    hardwareVersion?: true;
    lastConnectionAt?: true;
    lastSyncAt?: true;
    companyId?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    connectionStatus?: true;
};
export type LockMaxAggregateInputType = {
    id?: true;
    name?: true;
    internalCode?: true;
    serialNumber?: true;
    imei?: true;
    macAddress?: true;
    status?: true;
    connectionType?: true;
    batteryLevel?: true;
    signalLevel?: true;
    firmwareVersion?: true;
    hardwareVersion?: true;
    lastConnectionAt?: true;
    lastSyncAt?: true;
    companyId?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    connectionStatus?: true;
};
export type LockCountAggregateInputType = {
    id?: true;
    name?: true;
    internalCode?: true;
    serialNumber?: true;
    imei?: true;
    macAddress?: true;
    status?: true;
    connectionType?: true;
    batteryLevel?: true;
    signalLevel?: true;
    firmwareVersion?: true;
    hardwareVersion?: true;
    lastConnectionAt?: true;
    lastSyncAt?: true;
    companyId?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    connectionStatus?: true;
    _all?: true;
};
export type LockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lock to aggregate.
     */
    where?: Prisma.LockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locks to fetch.
     */
    orderBy?: Prisma.LockOrderByWithRelationInput | Prisma.LockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Locks
    **/
    _count?: true | LockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LockMaxAggregateInputType;
};
export type GetLockAggregateType<T extends LockAggregateArgs> = {
    [P in keyof T & keyof AggregateLock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLock[P]> : Prisma.GetScalarType<T[P], AggregateLock[P]>;
};
export type LockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockWhereInput;
    orderBy?: Prisma.LockOrderByWithAggregationInput | Prisma.LockOrderByWithAggregationInput[];
    by: Prisma.LockScalarFieldEnum[] | Prisma.LockScalarFieldEnum;
    having?: Prisma.LockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockCountAggregateInputType | true;
    _avg?: LockAvgAggregateInputType;
    _sum?: LockSumAggregateInputType;
    _min?: LockMinAggregateInputType;
    _max?: LockMaxAggregateInputType;
};
export type LockGroupByOutputType = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber: string | null;
    imei: string | null;
    macAddress: string | null;
    status: $Enums.LockStatus;
    connectionType: $Enums.LockConnectionType;
    batteryLevel: number | null;
    signalLevel: number | null;
    firmwareVersion: string | null;
    hardwareVersion: string | null;
    lastConnectionAt: Date | null;
    lastSyncAt: Date | null;
    companyId: string | null;
    branchId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    connectionStatus: $Enums.LockConnectionStatus;
    _count: LockCountAggregateOutputType | null;
    _avg: LockAvgAggregateOutputType | null;
    _sum: LockSumAggregateOutputType | null;
    _min: LockMinAggregateOutputType | null;
    _max: LockMaxAggregateOutputType | null;
};
export type GetLockGroupByPayload<T extends LockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LockGroupByOutputType[P]>;
}>>;
export type LockWhereInput = {
    AND?: Prisma.LockWhereInput | Prisma.LockWhereInput[];
    OR?: Prisma.LockWhereInput[];
    NOT?: Prisma.LockWhereInput | Prisma.LockWhereInput[];
    id?: Prisma.StringFilter<"Lock"> | string;
    name?: Prisma.StringFilter<"Lock"> | string;
    internalCode?: Prisma.StringFilter<"Lock"> | string;
    serialNumber?: Prisma.StringNullableFilter<"Lock"> | string | null;
    imei?: Prisma.StringNullableFilter<"Lock"> | string | null;
    macAddress?: Prisma.StringNullableFilter<"Lock"> | string | null;
    status?: Prisma.EnumLockStatusFilter<"Lock"> | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFilter<"Lock"> | $Enums.LockConnectionType;
    batteryLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    firmwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    hardwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    lastSyncAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    companyId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    branchId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFilter<"Lock"> | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertListRelationFilter;
    Branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    Company?: Prisma.XOR<Prisma.CompanyNullableScalarRelationFilter, Prisma.CompanyWhereInput> | null;
    LockAccess?: Prisma.LockAccessListRelationFilter;
    LockCommand?: Prisma.LockCommandListRelationFilter;
    LockEvent?: Prisma.LockEventListRelationFilter;
    LockLocation?: Prisma.LockLocationListRelationFilter;
    MaintenanceRecord?: Prisma.MaintenanceRecordListRelationFilter;
};
export type LockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    internalCode?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    imei?: Prisma.SortOrderInput | Prisma.SortOrder;
    macAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    connectionType?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    connectionStatus?: Prisma.SortOrder;
    Alert?: Prisma.AlertOrderByRelationAggregateInput;
    Branch?: Prisma.BranchOrderByWithRelationInput;
    Company?: Prisma.CompanyOrderByWithRelationInput;
    LockAccess?: Prisma.LockAccessOrderByRelationAggregateInput;
    LockCommand?: Prisma.LockCommandOrderByRelationAggregateInput;
    LockEvent?: Prisma.LockEventOrderByRelationAggregateInput;
    LockLocation?: Prisma.LockLocationOrderByRelationAggregateInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordOrderByRelationAggregateInput;
};
export type LockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    internalCode?: string;
    serialNumber?: string;
    imei?: string;
    macAddress?: string;
    AND?: Prisma.LockWhereInput | Prisma.LockWhereInput[];
    OR?: Prisma.LockWhereInput[];
    NOT?: Prisma.LockWhereInput | Prisma.LockWhereInput[];
    name?: Prisma.StringFilter<"Lock"> | string;
    status?: Prisma.EnumLockStatusFilter<"Lock"> | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFilter<"Lock"> | $Enums.LockConnectionType;
    batteryLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    firmwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    hardwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    lastSyncAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    companyId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    branchId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFilter<"Lock"> | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertListRelationFilter;
    Branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    Company?: Prisma.XOR<Prisma.CompanyNullableScalarRelationFilter, Prisma.CompanyWhereInput> | null;
    LockAccess?: Prisma.LockAccessListRelationFilter;
    LockCommand?: Prisma.LockCommandListRelationFilter;
    LockEvent?: Prisma.LockEventListRelationFilter;
    LockLocation?: Prisma.LockLocationListRelationFilter;
    MaintenanceRecord?: Prisma.MaintenanceRecordListRelationFilter;
}, "id" | "internalCode" | "serialNumber" | "imei" | "macAddress">;
export type LockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    internalCode?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    imei?: Prisma.SortOrderInput | Prisma.SortOrder;
    macAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    connectionType?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastSyncAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    connectionStatus?: Prisma.SortOrder;
    _count?: Prisma.LockCountOrderByAggregateInput;
    _avg?: Prisma.LockAvgOrderByAggregateInput;
    _max?: Prisma.LockMaxOrderByAggregateInput;
    _min?: Prisma.LockMinOrderByAggregateInput;
    _sum?: Prisma.LockSumOrderByAggregateInput;
};
export type LockScalarWhereWithAggregatesInput = {
    AND?: Prisma.LockScalarWhereWithAggregatesInput | Prisma.LockScalarWhereWithAggregatesInput[];
    OR?: Prisma.LockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LockScalarWhereWithAggregatesInput | Prisma.LockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lock"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Lock"> | string;
    internalCode?: Prisma.StringWithAggregatesFilter<"Lock"> | string;
    serialNumber?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    imei?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    macAddress?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    status?: Prisma.EnumLockStatusWithAggregatesFilter<"Lock"> | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeWithAggregatesFilter<"Lock"> | $Enums.LockConnectionType;
    batteryLevel?: Prisma.IntNullableWithAggregatesFilter<"Lock"> | number | null;
    signalLevel?: Prisma.IntNullableWithAggregatesFilter<"Lock"> | number | null;
    firmwareVersion?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    hardwareVersion?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Lock"> | Date | string | null;
    lastSyncAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Lock"> | Date | string | null;
    companyId?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    branchId?: Prisma.StringNullableWithAggregatesFilter<"Lock"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lock"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lock"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Lock"> | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusWithAggregatesFilter<"Lock"> | $Enums.LockConnectionStatus;
};
export type LockCreateInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateManyInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
};
export type LockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
};
export type LockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
};
export type LockNullableScalarRelationFilter = {
    is?: Prisma.LockWhereInput | null;
    isNot?: Prisma.LockWhereInput | null;
};
export type LockListRelationFilter = {
    every?: Prisma.LockWhereInput;
    some?: Prisma.LockWhereInput;
    none?: Prisma.LockWhereInput;
};
export type LockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    internalCode?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    macAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    connectionType?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastSyncAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    connectionStatus?: Prisma.SortOrder;
};
export type LockAvgOrderByAggregateInput = {
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    internalCode?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    macAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    connectionType?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastSyncAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    connectionStatus?: Prisma.SortOrder;
};
export type LockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    internalCode?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    macAddress?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    connectionType?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastSyncAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    connectionStatus?: Prisma.SortOrder;
};
export type LockSumOrderByAggregateInput = {
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockScalarRelationFilter = {
    is?: Prisma.LockWhereInput;
    isNot?: Prisma.LockWhereInput;
};
export type LockCreateNestedOneWithoutAlertInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutAlertInput, Prisma.LockUncheckedCreateWithoutAlertInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutAlertInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneWithoutAlertNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutAlertInput, Prisma.LockUncheckedCreateWithoutAlertInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutAlertInput;
    upsert?: Prisma.LockUpsertWithoutAlertInput;
    disconnect?: Prisma.LockWhereInput | boolean;
    delete?: Prisma.LockWhereInput | boolean;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutAlertInput, Prisma.LockUpdateWithoutAlertInput>, Prisma.LockUncheckedUpdateWithoutAlertInput>;
};
export type LockCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput> | Prisma.LockCreateWithoutBranchInput[] | Prisma.LockUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutBranchInput | Prisma.LockCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.LockCreateManyBranchInputEnvelope;
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
};
export type LockUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput> | Prisma.LockCreateWithoutBranchInput[] | Prisma.LockUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutBranchInput | Prisma.LockCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.LockCreateManyBranchInputEnvelope;
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
};
export type LockUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput> | Prisma.LockCreateWithoutBranchInput[] | Prisma.LockUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutBranchInput | Prisma.LockCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.LockUpsertWithWhereUniqueWithoutBranchInput | Prisma.LockUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.LockCreateManyBranchInputEnvelope;
    set?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    disconnect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    delete?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    update?: Prisma.LockUpdateWithWhereUniqueWithoutBranchInput | Prisma.LockUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.LockUpdateManyWithWhereWithoutBranchInput | Prisma.LockUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
};
export type LockUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput> | Prisma.LockCreateWithoutBranchInput[] | Prisma.LockUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutBranchInput | Prisma.LockCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.LockUpsertWithWhereUniqueWithoutBranchInput | Prisma.LockUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.LockCreateManyBranchInputEnvelope;
    set?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    disconnect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    delete?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    update?: Prisma.LockUpdateWithWhereUniqueWithoutBranchInput | Prisma.LockUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.LockUpdateManyWithWhereWithoutBranchInput | Prisma.LockUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
};
export type LockCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput> | Prisma.LockCreateWithoutCompanyInput[] | Prisma.LockUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutCompanyInput | Prisma.LockCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.LockCreateManyCompanyInputEnvelope;
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
};
export type LockUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput> | Prisma.LockCreateWithoutCompanyInput[] | Prisma.LockUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutCompanyInput | Prisma.LockCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.LockCreateManyCompanyInputEnvelope;
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
};
export type LockUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput> | Prisma.LockCreateWithoutCompanyInput[] | Prisma.LockUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutCompanyInput | Prisma.LockCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.LockUpsertWithWhereUniqueWithoutCompanyInput | Prisma.LockUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.LockCreateManyCompanyInputEnvelope;
    set?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    disconnect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    delete?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    update?: Prisma.LockUpdateWithWhereUniqueWithoutCompanyInput | Prisma.LockUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.LockUpdateManyWithWhereWithoutCompanyInput | Prisma.LockUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
};
export type LockUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput> | Prisma.LockCreateWithoutCompanyInput[] | Prisma.LockUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutCompanyInput | Prisma.LockCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.LockUpsertWithWhereUniqueWithoutCompanyInput | Prisma.LockUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.LockCreateManyCompanyInputEnvelope;
    set?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    disconnect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    delete?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    connect?: Prisma.LockWhereUniqueInput | Prisma.LockWhereUniqueInput[];
    update?: Prisma.LockUpdateWithWhereUniqueWithoutCompanyInput | Prisma.LockUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.LockUpdateManyWithWhereWithoutCompanyInput | Prisma.LockUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
};
export type EnumLockStatusFieldUpdateOperationsInput = {
    set?: $Enums.LockStatus;
};
export type EnumLockConnectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.LockConnectionType;
};
export type EnumLockConnectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.LockConnectionStatus;
};
export type LockCreateNestedOneWithoutLockAccessInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockAccessInput, Prisma.LockUncheckedCreateWithoutLockAccessInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockAccessInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneRequiredWithoutLockAccessNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockAccessInput, Prisma.LockUncheckedCreateWithoutLockAccessInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockAccessInput;
    upsert?: Prisma.LockUpsertWithoutLockAccessInput;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutLockAccessInput, Prisma.LockUpdateWithoutLockAccessInput>, Prisma.LockUncheckedUpdateWithoutLockAccessInput>;
};
export type LockCreateNestedOneWithoutLockCommandInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockCommandInput, Prisma.LockUncheckedCreateWithoutLockCommandInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockCommandInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneRequiredWithoutLockCommandNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockCommandInput, Prisma.LockUncheckedCreateWithoutLockCommandInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockCommandInput;
    upsert?: Prisma.LockUpsertWithoutLockCommandInput;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutLockCommandInput, Prisma.LockUpdateWithoutLockCommandInput>, Prisma.LockUncheckedUpdateWithoutLockCommandInput>;
};
export type LockCreateNestedOneWithoutLockEventInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockEventInput, Prisma.LockUncheckedCreateWithoutLockEventInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockEventInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneRequiredWithoutLockEventNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockEventInput, Prisma.LockUncheckedCreateWithoutLockEventInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockEventInput;
    upsert?: Prisma.LockUpsertWithoutLockEventInput;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutLockEventInput, Prisma.LockUpdateWithoutLockEventInput>, Prisma.LockUncheckedUpdateWithoutLockEventInput>;
};
export type LockCreateNestedOneWithoutLockLocationInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockLocationInput, Prisma.LockUncheckedCreateWithoutLockLocationInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockLocationInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneRequiredWithoutLockLocationNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutLockLocationInput, Prisma.LockUncheckedCreateWithoutLockLocationInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutLockLocationInput;
    upsert?: Prisma.LockUpsertWithoutLockLocationInput;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutLockLocationInput, Prisma.LockUpdateWithoutLockLocationInput>, Prisma.LockUncheckedUpdateWithoutLockLocationInput>;
};
export type LockCreateNestedOneWithoutMaintenanceRecordInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutMaintenanceRecordInput, Prisma.LockUncheckedCreateWithoutMaintenanceRecordInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutMaintenanceRecordInput;
    connect?: Prisma.LockWhereUniqueInput;
};
export type LockUpdateOneRequiredWithoutMaintenanceRecordNestedInput = {
    create?: Prisma.XOR<Prisma.LockCreateWithoutMaintenanceRecordInput, Prisma.LockUncheckedCreateWithoutMaintenanceRecordInput>;
    connectOrCreate?: Prisma.LockCreateOrConnectWithoutMaintenanceRecordInput;
    upsert?: Prisma.LockUpsertWithoutMaintenanceRecordInput;
    connect?: Prisma.LockWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LockUpdateToOneWithWhereWithoutMaintenanceRecordInput, Prisma.LockUpdateWithoutMaintenanceRecordInput>, Prisma.LockUncheckedUpdateWithoutMaintenanceRecordInput>;
};
export type LockCreateWithoutAlertInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutAlertInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutAlertInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutAlertInput, Prisma.LockUncheckedCreateWithoutAlertInput>;
};
export type LockUpsertWithoutAlertInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutAlertInput, Prisma.LockUncheckedUpdateWithoutAlertInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutAlertInput, Prisma.LockUncheckedCreateWithoutAlertInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutAlertInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutAlertInput, Prisma.LockUncheckedUpdateWithoutAlertInput>;
};
export type LockUpdateWithoutAlertInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutAlertInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateWithoutBranchInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutBranchInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutBranchInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput>;
};
export type LockCreateManyBranchInputEnvelope = {
    data: Prisma.LockCreateManyBranchInput | Prisma.LockCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type LockUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.LockWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockUpdateWithoutBranchInput, Prisma.LockUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutBranchInput, Prisma.LockUncheckedCreateWithoutBranchInput>;
};
export type LockUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.LockWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutBranchInput, Prisma.LockUncheckedUpdateWithoutBranchInput>;
};
export type LockUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.LockScalarWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateManyMutationInput, Prisma.LockUncheckedUpdateManyWithoutBranchInput>;
};
export type LockScalarWhereInput = {
    AND?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
    OR?: Prisma.LockScalarWhereInput[];
    NOT?: Prisma.LockScalarWhereInput | Prisma.LockScalarWhereInput[];
    id?: Prisma.StringFilter<"Lock"> | string;
    name?: Prisma.StringFilter<"Lock"> | string;
    internalCode?: Prisma.StringFilter<"Lock"> | string;
    serialNumber?: Prisma.StringNullableFilter<"Lock"> | string | null;
    imei?: Prisma.StringNullableFilter<"Lock"> | string | null;
    macAddress?: Prisma.StringNullableFilter<"Lock"> | string | null;
    status?: Prisma.EnumLockStatusFilter<"Lock"> | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFilter<"Lock"> | $Enums.LockConnectionType;
    batteryLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"Lock"> | number | null;
    firmwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    hardwareVersion?: Prisma.StringNullableFilter<"Lock"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    lastSyncAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    companyId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    branchId?: Prisma.StringNullableFilter<"Lock"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lock"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Lock"> | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFilter<"Lock"> | $Enums.LockConnectionStatus;
};
export type LockCreateWithoutCompanyInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutCompanyInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutCompanyInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput>;
};
export type LockCreateManyCompanyInputEnvelope = {
    data: Prisma.LockCreateManyCompanyInput | Prisma.LockCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type LockUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.LockWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockUpdateWithoutCompanyInput, Prisma.LockUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutCompanyInput, Prisma.LockUncheckedCreateWithoutCompanyInput>;
};
export type LockUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.LockWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutCompanyInput, Prisma.LockUncheckedUpdateWithoutCompanyInput>;
};
export type LockUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.LockScalarWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateManyMutationInput, Prisma.LockUncheckedUpdateManyWithoutCompanyInput>;
};
export type LockCreateWithoutLockAccessInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutLockAccessInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutLockAccessInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockAccessInput, Prisma.LockUncheckedCreateWithoutLockAccessInput>;
};
export type LockUpsertWithoutLockAccessInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutLockAccessInput, Prisma.LockUncheckedUpdateWithoutLockAccessInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockAccessInput, Prisma.LockUncheckedCreateWithoutLockAccessInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutLockAccessInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutLockAccessInput, Prisma.LockUncheckedUpdateWithoutLockAccessInput>;
};
export type LockUpdateWithoutLockAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutLockAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateWithoutLockCommandInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutLockCommandInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutLockCommandInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockCommandInput, Prisma.LockUncheckedCreateWithoutLockCommandInput>;
};
export type LockUpsertWithoutLockCommandInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutLockCommandInput, Prisma.LockUncheckedUpdateWithoutLockCommandInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockCommandInput, Prisma.LockUncheckedCreateWithoutLockCommandInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutLockCommandInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutLockCommandInput, Prisma.LockUncheckedUpdateWithoutLockCommandInput>;
};
export type LockUpdateWithoutLockCommandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutLockCommandInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateWithoutLockEventInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutLockEventInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutLockEventInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockEventInput, Prisma.LockUncheckedCreateWithoutLockEventInput>;
};
export type LockUpsertWithoutLockEventInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutLockEventInput, Prisma.LockUncheckedUpdateWithoutLockEventInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockEventInput, Prisma.LockUncheckedCreateWithoutLockEventInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutLockEventInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutLockEventInput, Prisma.LockUncheckedUpdateWithoutLockEventInput>;
};
export type LockUpdateWithoutLockEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutLockEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateWithoutLockLocationInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutLockLocationInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutLockLocationInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockLocationInput, Prisma.LockUncheckedCreateWithoutLockLocationInput>;
};
export type LockUpsertWithoutLockLocationInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutLockLocationInput, Prisma.LockUncheckedUpdateWithoutLockLocationInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutLockLocationInput, Prisma.LockUncheckedCreateWithoutLockLocationInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutLockLocationInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutLockLocationInput, Prisma.LockUncheckedUpdateWithoutLockLocationInput>;
};
export type LockUpdateWithoutLockLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutLockLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateWithoutMaintenanceRecordInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertCreateNestedManyWithoutLockInput;
    Branch?: Prisma.BranchCreateNestedOneWithoutLockInput;
    Company?: Prisma.CompanyCreateNestedOneWithoutLockInput;
    LockAccess?: Prisma.LockAccessCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationCreateNestedManyWithoutLockInput;
};
export type LockUncheckedCreateWithoutMaintenanceRecordInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedCreateNestedManyWithoutLockInput;
    LockAccess?: Prisma.LockAccessUncheckedCreateNestedManyWithoutLockInput;
    LockCommand?: Prisma.LockCommandUncheckedCreateNestedManyWithoutLockInput;
    LockEvent?: Prisma.LockEventUncheckedCreateNestedManyWithoutLockInput;
    LockLocation?: Prisma.LockLocationUncheckedCreateNestedManyWithoutLockInput;
};
export type LockCreateOrConnectWithoutMaintenanceRecordInput = {
    where: Prisma.LockWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCreateWithoutMaintenanceRecordInput, Prisma.LockUncheckedCreateWithoutMaintenanceRecordInput>;
};
export type LockUpsertWithoutMaintenanceRecordInput = {
    update: Prisma.XOR<Prisma.LockUpdateWithoutMaintenanceRecordInput, Prisma.LockUncheckedUpdateWithoutMaintenanceRecordInput>;
    create: Prisma.XOR<Prisma.LockCreateWithoutMaintenanceRecordInput, Prisma.LockUncheckedCreateWithoutMaintenanceRecordInput>;
    where?: Prisma.LockWhereInput;
};
export type LockUpdateToOneWithWhereWithoutMaintenanceRecordInput = {
    where?: Prisma.LockWhereInput;
    data: Prisma.XOR<Prisma.LockUpdateWithoutMaintenanceRecordInput, Prisma.LockUncheckedUpdateWithoutMaintenanceRecordInput>;
};
export type LockUpdateWithoutMaintenanceRecordInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutMaintenanceRecordInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockCreateManyBranchInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    companyId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
};
export type LockUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Company?: Prisma.CompanyUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
};
export type LockCreateManyCompanyInput = {
    id: string;
    name: string;
    internalCode: string;
    serialNumber?: string | null;
    imei?: string | null;
    macAddress?: string | null;
    status?: $Enums.LockStatus;
    connectionType?: $Enums.LockConnectionType;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    firmwareVersion?: string | null;
    hardwareVersion?: string | null;
    lastConnectionAt?: Date | string | null;
    lastSyncAt?: Date | string | null;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    connectionStatus?: $Enums.LockConnectionStatus;
};
export type LockUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUpdateManyWithoutLockNestedInput;
    Branch?: Prisma.BranchUpdateOneWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
    Alert?: Prisma.AlertUncheckedUpdateManyWithoutLockNestedInput;
    LockAccess?: Prisma.LockAccessUncheckedUpdateManyWithoutLockNestedInput;
    LockCommand?: Prisma.LockCommandUncheckedUpdateManyWithoutLockNestedInput;
    LockEvent?: Prisma.LockEventUncheckedUpdateManyWithoutLockNestedInput;
    LockLocation?: Prisma.LockLocationUncheckedUpdateManyWithoutLockNestedInput;
    MaintenanceRecord?: Prisma.MaintenanceRecordUncheckedUpdateManyWithoutLockNestedInput;
};
export type LockUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    internalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    macAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLockStatusFieldUpdateOperationsInput | $Enums.LockStatus;
    connectionType?: Prisma.EnumLockConnectionTypeFieldUpdateOperationsInput | $Enums.LockConnectionType;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastSyncAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    connectionStatus?: Prisma.EnumLockConnectionStatusFieldUpdateOperationsInput | $Enums.LockConnectionStatus;
};
/**
 * Count Type LockCountOutputType
 */
export type LockCountOutputType = {
    Alert: number;
    LockAccess: number;
    LockCommand: number;
    LockEvent: number;
    LockLocation: number;
    MaintenanceRecord: number;
};
export type LockCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Alert?: boolean | LockCountOutputTypeCountAlertArgs;
    LockAccess?: boolean | LockCountOutputTypeCountLockAccessArgs;
    LockCommand?: boolean | LockCountOutputTypeCountLockCommandArgs;
    LockEvent?: boolean | LockCountOutputTypeCountLockEventArgs;
    LockLocation?: boolean | LockCountOutputTypeCountLockLocationArgs;
    MaintenanceRecord?: boolean | LockCountOutputTypeCountMaintenanceRecordArgs;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockCountOutputType
     */
    select?: Prisma.LockCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountAlertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlertWhereInput;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountLockAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockAccessWhereInput;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountLockCommandArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockCommandWhereInput;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountLockEventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockEventWhereInput;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountLockLocationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockLocationWhereInput;
};
/**
 * LockCountOutputType without action
 */
export type LockCountOutputTypeCountMaintenanceRecordArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintenanceRecordWhereInput;
};
export type LockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    internalCode?: boolean;
    serialNumber?: boolean;
    imei?: boolean;
    macAddress?: boolean;
    status?: boolean;
    connectionType?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    firmwareVersion?: boolean;
    hardwareVersion?: boolean;
    lastConnectionAt?: boolean;
    lastSyncAt?: boolean;
    companyId?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    connectionStatus?: boolean;
    Alert?: boolean | Prisma.Lock$AlertArgs<ExtArgs>;
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
    LockAccess?: boolean | Prisma.Lock$LockAccessArgs<ExtArgs>;
    LockCommand?: boolean | Prisma.Lock$LockCommandArgs<ExtArgs>;
    LockEvent?: boolean | Prisma.Lock$LockEventArgs<ExtArgs>;
    LockLocation?: boolean | Prisma.Lock$LockLocationArgs<ExtArgs>;
    MaintenanceRecord?: boolean | Prisma.Lock$MaintenanceRecordArgs<ExtArgs>;
    _count?: boolean | Prisma.LockCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lock"]>;
export type LockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    internalCode?: boolean;
    serialNumber?: boolean;
    imei?: boolean;
    macAddress?: boolean;
    status?: boolean;
    connectionType?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    firmwareVersion?: boolean;
    hardwareVersion?: boolean;
    lastConnectionAt?: boolean;
    lastSyncAt?: boolean;
    companyId?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    connectionStatus?: boolean;
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
}, ExtArgs["result"]["lock"]>;
export type LockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    internalCode?: boolean;
    serialNumber?: boolean;
    imei?: boolean;
    macAddress?: boolean;
    status?: boolean;
    connectionType?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    firmwareVersion?: boolean;
    hardwareVersion?: boolean;
    lastConnectionAt?: boolean;
    lastSyncAt?: boolean;
    companyId?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    connectionStatus?: boolean;
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
}, ExtArgs["result"]["lock"]>;
export type LockSelectScalar = {
    id?: boolean;
    name?: boolean;
    internalCode?: boolean;
    serialNumber?: boolean;
    imei?: boolean;
    macAddress?: boolean;
    status?: boolean;
    connectionType?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    firmwareVersion?: boolean;
    hardwareVersion?: boolean;
    lastConnectionAt?: boolean;
    lastSyncAt?: boolean;
    companyId?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    connectionStatus?: boolean;
};
export type LockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "internalCode" | "serialNumber" | "imei" | "macAddress" | "status" | "connectionType" | "batteryLevel" | "signalLevel" | "firmwareVersion" | "hardwareVersion" | "lastConnectionAt" | "lastSyncAt" | "companyId" | "branchId" | "createdAt" | "updatedAt" | "deletedAt" | "connectionStatus", ExtArgs["result"]["lock"]>;
export type LockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Alert?: boolean | Prisma.Lock$AlertArgs<ExtArgs>;
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
    LockAccess?: boolean | Prisma.Lock$LockAccessArgs<ExtArgs>;
    LockCommand?: boolean | Prisma.Lock$LockCommandArgs<ExtArgs>;
    LockEvent?: boolean | Prisma.Lock$LockEventArgs<ExtArgs>;
    LockLocation?: boolean | Prisma.Lock$LockLocationArgs<ExtArgs>;
    MaintenanceRecord?: boolean | Prisma.Lock$MaintenanceRecordArgs<ExtArgs>;
    _count?: boolean | Prisma.LockCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
};
export type LockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Branch?: boolean | Prisma.Lock$BranchArgs<ExtArgs>;
    Company?: boolean | Prisma.Lock$CompanyArgs<ExtArgs>;
};
export type $LockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lock";
    objects: {
        Alert: Prisma.$AlertPayload<ExtArgs>[];
        Branch: Prisma.$BranchPayload<ExtArgs> | null;
        Company: Prisma.$CompanyPayload<ExtArgs> | null;
        LockAccess: Prisma.$LockAccessPayload<ExtArgs>[];
        LockCommand: Prisma.$LockCommandPayload<ExtArgs>[];
        LockEvent: Prisma.$LockEventPayload<ExtArgs>[];
        LockLocation: Prisma.$LockLocationPayload<ExtArgs>[];
        MaintenanceRecord: Prisma.$MaintenanceRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        internalCode: string;
        serialNumber: string | null;
        imei: string | null;
        macAddress: string | null;
        status: $Enums.LockStatus;
        connectionType: $Enums.LockConnectionType;
        batteryLevel: number | null;
        signalLevel: number | null;
        firmwareVersion: string | null;
        hardwareVersion: string | null;
        lastConnectionAt: Date | null;
        lastSyncAt: Date | null;
        companyId: string | null;
        branchId: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        connectionStatus: $Enums.LockConnectionStatus;
    }, ExtArgs["result"]["lock"]>;
    composites: {};
};
export type LockGetPayload<S extends boolean | null | undefined | LockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LockPayload, S>;
export type LockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LockCountAggregateInputType | true;
};
export interface LockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lock'];
        meta: {
            name: 'Lock';
        };
    };
    /**
     * Find zero or one Lock that matches the filter.
     * @param {LockFindUniqueArgs} args - Arguments to find a Lock
     * @example
     * // Get one Lock
     * const lock = await prisma.lock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockFindUniqueArgs>(args: Prisma.SelectSubset<T, LockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockFindUniqueOrThrowArgs} args - Arguments to find a Lock
     * @example
     * // Get one Lock
     * const lock = await prisma.lock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockFindFirstArgs} args - Arguments to find a Lock
     * @example
     * // Get one Lock
     * const lock = await prisma.lock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockFindFirstArgs>(args?: Prisma.SelectSubset<T, LockFindFirstArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockFindFirstOrThrowArgs} args - Arguments to find a Lock
     * @example
     * // Get one Lock
     * const lock = await prisma.lock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Locks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locks
     * const locks = await prisma.lock.findMany()
     *
     * // Get first 10 Locks
     * const locks = await prisma.lock.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockWithIdOnly = await prisma.lock.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockFindManyArgs>(args?: Prisma.SelectSubset<T, LockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lock.
     * @param {LockCreateArgs} args - Arguments to create a Lock.
     * @example
     * // Create one Lock
     * const Lock = await prisma.lock.create({
     *   data: {
     *     // ... data to create a Lock
     *   }
     * })
     *
     */
    create<T extends LockCreateArgs>(args: Prisma.SelectSubset<T, LockCreateArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Locks.
     * @param {LockCreateManyArgs} args - Arguments to create many Locks.
     * @example
     * // Create many Locks
     * const lock = await prisma.lock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockCreateManyArgs>(args?: Prisma.SelectSubset<T, LockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Locks and returns the data saved in the database.
     * @param {LockCreateManyAndReturnArgs} args - Arguments to create many Locks.
     * @example
     * // Create many Locks
     * const lock = await prisma.lock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Locks and only return the `id`
     * const lockWithIdOnly = await prisma.lock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Lock.
     * @param {LockDeleteArgs} args - Arguments to delete one Lock.
     * @example
     * // Delete one Lock
     * const Lock = await prisma.lock.delete({
     *   where: {
     *     // ... filter to delete one Lock
     *   }
     * })
     *
     */
    delete<T extends LockDeleteArgs>(args: Prisma.SelectSubset<T, LockDeleteArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lock.
     * @param {LockUpdateArgs} args - Arguments to update one Lock.
     * @example
     * // Update one Lock
     * const lock = await prisma.lock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockUpdateArgs>(args: Prisma.SelectSubset<T, LockUpdateArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Locks.
     * @param {LockDeleteManyArgs} args - Arguments to filter Locks to delete.
     * @example
     * // Delete a few Locks
     * const { count } = await prisma.lock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockDeleteManyArgs>(args?: Prisma.SelectSubset<T, LockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locks
     * const lock = await prisma.lock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockUpdateManyArgs>(args: Prisma.SelectSubset<T, LockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locks and returns the data updated in the database.
     * @param {LockUpdateManyAndReturnArgs} args - Arguments to update many Locks.
     * @example
     * // Update many Locks
     * const lock = await prisma.lock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Locks and only return the `id`
     * const lockWithIdOnly = await prisma.lock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Lock.
     * @param {LockUpsertArgs} args - Arguments to update or create a Lock.
     * @example
     * // Update or create a Lock
     * const lock = await prisma.lock.upsert({
     *   create: {
     *     // ... data to create a Lock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lock we want to update
     *   }
     * })
     */
    upsert<T extends LockUpsertArgs>(args: Prisma.SelectSubset<T, LockUpsertArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Locks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCountArgs} args - Arguments to filter Locks to count.
     * @example
     * // Count the number of Locks
     * const count = await prisma.lock.count({
     *   where: {
     *     // ... the filter for the Locks we want to count
     *   }
     * })
    **/
    count<T extends LockCountArgs>(args?: Prisma.Subset<T, LockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LockCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LockAggregateArgs>(args: Prisma.Subset<T, LockAggregateArgs>): Prisma.PrismaPromise<GetLockAggregateType<T>>;
    /**
     * Group by Lock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends LockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LockGroupByArgs['orderBy'];
    } : {
        orderBy?: LockGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Lock model
     */
    readonly fields: LockFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Lock.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Alert<T extends Prisma.Lock$AlertArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$AlertArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Branch<T extends Prisma.Lock$BranchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$BranchArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Company<T extends Prisma.Lock$CompanyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$CompanyArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    LockAccess<T extends Prisma.Lock$LockAccessArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$LockAccessArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    LockCommand<T extends Prisma.Lock$LockCommandArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$LockCommandArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    LockEvent<T extends Prisma.Lock$LockEventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$LockEventArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    LockLocation<T extends Prisma.Lock$LockLocationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$LockLocationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MaintenanceRecord<T extends Prisma.Lock$MaintenanceRecordArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lock$MaintenanceRecordArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Lock model
 */
export interface LockFieldRefs {
    readonly id: Prisma.FieldRef<"Lock", 'String'>;
    readonly name: Prisma.FieldRef<"Lock", 'String'>;
    readonly internalCode: Prisma.FieldRef<"Lock", 'String'>;
    readonly serialNumber: Prisma.FieldRef<"Lock", 'String'>;
    readonly imei: Prisma.FieldRef<"Lock", 'String'>;
    readonly macAddress: Prisma.FieldRef<"Lock", 'String'>;
    readonly status: Prisma.FieldRef<"Lock", 'LockStatus'>;
    readonly connectionType: Prisma.FieldRef<"Lock", 'LockConnectionType'>;
    readonly batteryLevel: Prisma.FieldRef<"Lock", 'Int'>;
    readonly signalLevel: Prisma.FieldRef<"Lock", 'Int'>;
    readonly firmwareVersion: Prisma.FieldRef<"Lock", 'String'>;
    readonly hardwareVersion: Prisma.FieldRef<"Lock", 'String'>;
    readonly lastConnectionAt: Prisma.FieldRef<"Lock", 'DateTime'>;
    readonly lastSyncAt: Prisma.FieldRef<"Lock", 'DateTime'>;
    readonly companyId: Prisma.FieldRef<"Lock", 'String'>;
    readonly branchId: Prisma.FieldRef<"Lock", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Lock", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lock", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Lock", 'DateTime'>;
    readonly connectionStatus: Prisma.FieldRef<"Lock", 'LockConnectionStatus'>;
}
/**
 * Lock findUnique
 */
export type LockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter, which Lock to fetch.
     */
    where: Prisma.LockWhereUniqueInput;
};
/**
 * Lock findUniqueOrThrow
 */
export type LockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter, which Lock to fetch.
     */
    where: Prisma.LockWhereUniqueInput;
};
/**
 * Lock findFirst
 */
export type LockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter, which Lock to fetch.
     */
    where?: Prisma.LockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locks to fetch.
     */
    orderBy?: Prisma.LockOrderByWithRelationInput | Prisma.LockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locks.
     */
    cursor?: Prisma.LockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locks.
     */
    distinct?: Prisma.LockScalarFieldEnum | Prisma.LockScalarFieldEnum[];
};
/**
 * Lock findFirstOrThrow
 */
export type LockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter, which Lock to fetch.
     */
    where?: Prisma.LockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locks to fetch.
     */
    orderBy?: Prisma.LockOrderByWithRelationInput | Prisma.LockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locks.
     */
    cursor?: Prisma.LockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locks.
     */
    distinct?: Prisma.LockScalarFieldEnum | Prisma.LockScalarFieldEnum[];
};
/**
 * Lock findMany
 */
export type LockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter, which Locks to fetch.
     */
    where?: Prisma.LockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locks to fetch.
     */
    orderBy?: Prisma.LockOrderByWithRelationInput | Prisma.LockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Locks.
     */
    cursor?: Prisma.LockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locks.
     */
    distinct?: Prisma.LockScalarFieldEnum | Prisma.LockScalarFieldEnum[];
};
/**
 * Lock create
 */
export type LockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * The data needed to create a Lock.
     */
    data: Prisma.XOR<Prisma.LockCreateInput, Prisma.LockUncheckedCreateInput>;
};
/**
 * Lock createMany
 */
export type LockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locks.
     */
    data: Prisma.LockCreateManyInput | Prisma.LockCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Lock createManyAndReturn
 */
export type LockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * The data used to create many Locks.
     */
    data: Prisma.LockCreateManyInput | Prisma.LockCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Lock update
 */
export type LockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * The data needed to update a Lock.
     */
    data: Prisma.XOR<Prisma.LockUpdateInput, Prisma.LockUncheckedUpdateInput>;
    /**
     * Choose, which Lock to update.
     */
    where: Prisma.LockWhereUniqueInput;
};
/**
 * Lock updateMany
 */
export type LockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Locks.
     */
    data: Prisma.XOR<Prisma.LockUpdateManyMutationInput, Prisma.LockUncheckedUpdateManyInput>;
    /**
     * Filter which Locks to update
     */
    where?: Prisma.LockWhereInput;
    /**
     * Limit how many Locks to update.
     */
    limit?: number;
};
/**
 * Lock updateManyAndReturn
 */
export type LockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * The data used to update Locks.
     */
    data: Prisma.XOR<Prisma.LockUpdateManyMutationInput, Prisma.LockUncheckedUpdateManyInput>;
    /**
     * Filter which Locks to update
     */
    where?: Prisma.LockWhereInput;
    /**
     * Limit how many Locks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Lock upsert
 */
export type LockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * The filter to search for the Lock to update in case it exists.
     */
    where: Prisma.LockWhereUniqueInput;
    /**
     * In case the Lock found by the `where` argument doesn't exist, create a new Lock with this data.
     */
    create: Prisma.XOR<Prisma.LockCreateInput, Prisma.LockUncheckedCreateInput>;
    /**
     * In case the Lock was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LockUpdateInput, Prisma.LockUncheckedUpdateInput>;
};
/**
 * Lock delete
 */
export type LockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
    /**
     * Filter which Lock to delete.
     */
    where: Prisma.LockWhereUniqueInput;
};
/**
 * Lock deleteMany
 */
export type LockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Locks to delete
     */
    where?: Prisma.LockWhereInput;
    /**
     * Limit how many Locks to delete.
     */
    limit?: number;
};
/**
 * Lock.Alert
 */
export type Lock$AlertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: Prisma.AlertSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alert
     */
    omit?: Prisma.AlertOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlertInclude<ExtArgs> | null;
    where?: Prisma.AlertWhereInput;
    orderBy?: Prisma.AlertOrderByWithRelationInput | Prisma.AlertOrderByWithRelationInput[];
    cursor?: Prisma.AlertWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlertScalarFieldEnum | Prisma.AlertScalarFieldEnum[];
};
/**
 * Lock.Branch
 */
export type Lock$BranchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: Prisma.BranchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Branch
     */
    omit?: Prisma.BranchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BranchInclude<ExtArgs> | null;
    where?: Prisma.BranchWhereInput;
};
/**
 * Lock.Company
 */
export type Lock$CompanyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: Prisma.CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where?: Prisma.CompanyWhereInput;
};
/**
 * Lock.LockAccess
 */
export type Lock$LockAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockAccess
     */
    select?: Prisma.LockAccessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockAccess
     */
    omit?: Prisma.LockAccessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockAccessInclude<ExtArgs> | null;
    where?: Prisma.LockAccessWhereInput;
    orderBy?: Prisma.LockAccessOrderByWithRelationInput | Prisma.LockAccessOrderByWithRelationInput[];
    cursor?: Prisma.LockAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LockAccessScalarFieldEnum | Prisma.LockAccessScalarFieldEnum[];
};
/**
 * Lock.LockCommand
 */
export type Lock$LockCommandArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockCommand
     */
    select?: Prisma.LockCommandSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockCommand
     */
    omit?: Prisma.LockCommandOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockCommandInclude<ExtArgs> | null;
    where?: Prisma.LockCommandWhereInput;
    orderBy?: Prisma.LockCommandOrderByWithRelationInput | Prisma.LockCommandOrderByWithRelationInput[];
    cursor?: Prisma.LockCommandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LockCommandScalarFieldEnum | Prisma.LockCommandScalarFieldEnum[];
};
/**
 * Lock.LockEvent
 */
export type Lock$LockEventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockEvent
     */
    select?: Prisma.LockEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockEvent
     */
    omit?: Prisma.LockEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockEventInclude<ExtArgs> | null;
    where?: Prisma.LockEventWhereInput;
    orderBy?: Prisma.LockEventOrderByWithRelationInput | Prisma.LockEventOrderByWithRelationInput[];
    cursor?: Prisma.LockEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LockEventScalarFieldEnum | Prisma.LockEventScalarFieldEnum[];
};
/**
 * Lock.LockLocation
 */
export type Lock$LockLocationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockLocation
     */
    select?: Prisma.LockLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LockLocation
     */
    omit?: Prisma.LockLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockLocationInclude<ExtArgs> | null;
    where?: Prisma.LockLocationWhereInput;
    orderBy?: Prisma.LockLocationOrderByWithRelationInput | Prisma.LockLocationOrderByWithRelationInput[];
    cursor?: Prisma.LockLocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LockLocationScalarFieldEnum | Prisma.LockLocationScalarFieldEnum[];
};
/**
 * Lock.MaintenanceRecord
 */
export type Lock$MaintenanceRecordArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: Prisma.MaintenanceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: Prisma.MaintenanceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaintenanceRecordInclude<ExtArgs> | null;
    where?: Prisma.MaintenanceRecordWhereInput;
    orderBy?: Prisma.MaintenanceRecordOrderByWithRelationInput | Prisma.MaintenanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.MaintenanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaintenanceRecordScalarFieldEnum | Prisma.MaintenanceRecordScalarFieldEnum[];
};
/**
 * Lock without action
 */
export type LockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lock
     */
    select?: Prisma.LockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lock
     */
    omit?: Prisma.LockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockInclude<ExtArgs> | null;
};
//# sourceMappingURL=Lock.d.ts.map