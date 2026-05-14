import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LockAccess
 *
 */
export type LockAccessModel = runtime.Types.Result.DefaultSelection<Prisma.$LockAccessPayload>;
export type AggregateLockAccess = {
    _count: LockAccessCountAggregateOutputType | null;
    _min: LockAccessMinAggregateOutputType | null;
    _max: LockAccessMaxAggregateOutputType | null;
};
export type LockAccessMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lockId: string | null;
    accessType: $Enums.AccessType | null;
    status: $Enums.AccessStatus | null;
    validFrom: Date | null;
    validTo: Date | null;
    allowedDays: string | null;
    allowedFromTime: string | null;
    allowedToTime: string | null;
    createdById: string | null;
    reason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    revokedAt: Date | null;
};
export type LockAccessMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    lockId: string | null;
    accessType: $Enums.AccessType | null;
    status: $Enums.AccessStatus | null;
    validFrom: Date | null;
    validTo: Date | null;
    allowedDays: string | null;
    allowedFromTime: string | null;
    allowedToTime: string | null;
    createdById: string | null;
    reason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    revokedAt: Date | null;
};
export type LockAccessCountAggregateOutputType = {
    id: number;
    userId: number;
    lockId: number;
    accessType: number;
    status: number;
    validFrom: number;
    validTo: number;
    allowedDays: number;
    allowedFromTime: number;
    allowedToTime: number;
    createdById: number;
    reason: number;
    createdAt: number;
    updatedAt: number;
    revokedAt: number;
    _all: number;
};
export type LockAccessMinAggregateInputType = {
    id?: true;
    userId?: true;
    lockId?: true;
    accessType?: true;
    status?: true;
    validFrom?: true;
    validTo?: true;
    allowedDays?: true;
    allowedFromTime?: true;
    allowedToTime?: true;
    createdById?: true;
    reason?: true;
    createdAt?: true;
    updatedAt?: true;
    revokedAt?: true;
};
export type LockAccessMaxAggregateInputType = {
    id?: true;
    userId?: true;
    lockId?: true;
    accessType?: true;
    status?: true;
    validFrom?: true;
    validTo?: true;
    allowedDays?: true;
    allowedFromTime?: true;
    allowedToTime?: true;
    createdById?: true;
    reason?: true;
    createdAt?: true;
    updatedAt?: true;
    revokedAt?: true;
};
export type LockAccessCountAggregateInputType = {
    id?: true;
    userId?: true;
    lockId?: true;
    accessType?: true;
    status?: true;
    validFrom?: true;
    validTo?: true;
    allowedDays?: true;
    allowedFromTime?: true;
    allowedToTime?: true;
    createdById?: true;
    reason?: true;
    createdAt?: true;
    updatedAt?: true;
    revokedAt?: true;
    _all?: true;
};
export type LockAccessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockAccess to aggregate.
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockAccesses to fetch.
     */
    orderBy?: Prisma.LockAccessOrderByWithRelationInput | Prisma.LockAccessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LockAccessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockAccesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockAccesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockAccesses
    **/
    _count?: true | LockAccessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LockAccessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LockAccessMaxAggregateInputType;
};
export type GetLockAccessAggregateType<T extends LockAccessAggregateArgs> = {
    [P in keyof T & keyof AggregateLockAccess]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLockAccess[P]> : Prisma.GetScalarType<T[P], AggregateLockAccess[P]>;
};
export type LockAccessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockAccessWhereInput;
    orderBy?: Prisma.LockAccessOrderByWithAggregationInput | Prisma.LockAccessOrderByWithAggregationInput[];
    by: Prisma.LockAccessScalarFieldEnum[] | Prisma.LockAccessScalarFieldEnum;
    having?: Prisma.LockAccessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockAccessCountAggregateInputType | true;
    _min?: LockAccessMinAggregateInputType;
    _max?: LockAccessMaxAggregateInputType;
};
export type LockAccessGroupByOutputType = {
    id: string;
    userId: string;
    lockId: string;
    accessType: $Enums.AccessType;
    status: $Enums.AccessStatus;
    validFrom: Date | null;
    validTo: Date | null;
    allowedDays: string | null;
    allowedFromTime: string | null;
    allowedToTime: string | null;
    createdById: string | null;
    reason: string | null;
    createdAt: Date;
    updatedAt: Date;
    revokedAt: Date | null;
    _count: LockAccessCountAggregateOutputType | null;
    _min: LockAccessMinAggregateOutputType | null;
    _max: LockAccessMaxAggregateOutputType | null;
};
export type GetLockAccessGroupByPayload<T extends LockAccessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LockAccessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LockAccessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LockAccessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LockAccessGroupByOutputType[P]>;
}>>;
export type LockAccessWhereInput = {
    AND?: Prisma.LockAccessWhereInput | Prisma.LockAccessWhereInput[];
    OR?: Prisma.LockAccessWhereInput[];
    NOT?: Prisma.LockAccessWhereInput | Prisma.LockAccessWhereInput[];
    id?: Prisma.StringFilter<"LockAccess"> | string;
    userId?: Prisma.StringFilter<"LockAccess"> | string;
    lockId?: Prisma.StringFilter<"LockAccess"> | string;
    accessType?: Prisma.EnumAccessTypeFilter<"LockAccess"> | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFilter<"LockAccess"> | $Enums.AccessStatus;
    validFrom?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    validTo?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    allowedDays?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedFromTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedToTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdById?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    reason?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type LockAccessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedFromTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedToTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    Lock?: Prisma.LockOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type LockAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_lockId?: Prisma.LockAccessUserIdLockIdCompoundUniqueInput;
    AND?: Prisma.LockAccessWhereInput | Prisma.LockAccessWhereInput[];
    OR?: Prisma.LockAccessWhereInput[];
    NOT?: Prisma.LockAccessWhereInput | Prisma.LockAccessWhereInput[];
    userId?: Prisma.StringFilter<"LockAccess"> | string;
    lockId?: Prisma.StringFilter<"LockAccess"> | string;
    accessType?: Prisma.EnumAccessTypeFilter<"LockAccess"> | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFilter<"LockAccess"> | $Enums.AccessStatus;
    validFrom?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    validTo?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    allowedDays?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedFromTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedToTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdById?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    reason?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_lockId">;
export type LockAccessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedFromTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    allowedToTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LockAccessCountOrderByAggregateInput;
    _max?: Prisma.LockAccessMaxOrderByAggregateInput;
    _min?: Prisma.LockAccessMinOrderByAggregateInput;
};
export type LockAccessScalarWhereWithAggregatesInput = {
    AND?: Prisma.LockAccessScalarWhereWithAggregatesInput | Prisma.LockAccessScalarWhereWithAggregatesInput[];
    OR?: Prisma.LockAccessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LockAccessScalarWhereWithAggregatesInput | Prisma.LockAccessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LockAccess"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"LockAccess"> | string;
    lockId?: Prisma.StringWithAggregatesFilter<"LockAccess"> | string;
    accessType?: Prisma.EnumAccessTypeWithAggregatesFilter<"LockAccess"> | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusWithAggregatesFilter<"LockAccess"> | $Enums.AccessStatus;
    validFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"LockAccess"> | Date | string | null;
    validTo?: Prisma.DateTimeNullableWithAggregatesFilter<"LockAccess"> | Date | string | null;
    allowedDays?: Prisma.StringNullableWithAggregatesFilter<"LockAccess"> | string | null;
    allowedFromTime?: Prisma.StringNullableWithAggregatesFilter<"LockAccess"> | string | null;
    allowedToTime?: Prisma.StringNullableWithAggregatesFilter<"LockAccess"> | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"LockAccess"> | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"LockAccess"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LockAccess"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LockAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LockAccess"> | Date | string | null;
};
export type LockAccessCreateInput = {
    id: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
    Lock: Prisma.LockCreateNestedOneWithoutLockAccessInput;
    User: Prisma.UserCreateNestedOneWithoutLockAccessInput;
};
export type LockAccessUncheckedCreateInput = {
    id: string;
    userId: string;
    lockId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockAccessNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutLockAccessNestedInput;
};
export type LockAccessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessCreateManyInput = {
    id: string;
    userId: string;
    lockId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessListRelationFilter = {
    every?: Prisma.LockAccessWhereInput;
    some?: Prisma.LockAccessWhereInput;
    none?: Prisma.LockAccessWhereInput;
};
export type LockAccessOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LockAccessUserIdLockIdCompoundUniqueInput = {
    userId: string;
    lockId: string;
};
export type LockAccessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    allowedDays?: Prisma.SortOrder;
    allowedFromTime?: Prisma.SortOrder;
    allowedToTime?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type LockAccessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    allowedDays?: Prisma.SortOrder;
    allowedFromTime?: Prisma.SortOrder;
    allowedToTime?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type LockAccessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    accessType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    allowedDays?: Prisma.SortOrder;
    allowedFromTime?: Prisma.SortOrder;
    allowedToTime?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type LockAccessCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput> | Prisma.LockAccessCreateWithoutLockInput[] | Prisma.LockAccessUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutLockInput | Prisma.LockAccessCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockAccessCreateManyLockInputEnvelope;
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
};
export type LockAccessUncheckedCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput> | Prisma.LockAccessCreateWithoutLockInput[] | Prisma.LockAccessUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutLockInput | Prisma.LockAccessCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockAccessCreateManyLockInputEnvelope;
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
};
export type LockAccessUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput> | Prisma.LockAccessCreateWithoutLockInput[] | Prisma.LockAccessUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutLockInput | Prisma.LockAccessCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockAccessUpsertWithWhereUniqueWithoutLockInput | Prisma.LockAccessUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockAccessCreateManyLockInputEnvelope;
    set?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    disconnect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    delete?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    update?: Prisma.LockAccessUpdateWithWhereUniqueWithoutLockInput | Prisma.LockAccessUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockAccessUpdateManyWithWhereWithoutLockInput | Prisma.LockAccessUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
};
export type LockAccessUncheckedUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput> | Prisma.LockAccessCreateWithoutLockInput[] | Prisma.LockAccessUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutLockInput | Prisma.LockAccessCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockAccessUpsertWithWhereUniqueWithoutLockInput | Prisma.LockAccessUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockAccessCreateManyLockInputEnvelope;
    set?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    disconnect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    delete?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    update?: Prisma.LockAccessUpdateWithWhereUniqueWithoutLockInput | Prisma.LockAccessUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockAccessUpdateManyWithWhereWithoutLockInput | Prisma.LockAccessUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
};
export type EnumAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccessType;
};
export type EnumAccessStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccessStatus;
};
export type LockAccessCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput> | Prisma.LockAccessCreateWithoutUserInput[] | Prisma.LockAccessUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutUserInput | Prisma.LockAccessCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockAccessCreateManyUserInputEnvelope;
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
};
export type LockAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput> | Prisma.LockAccessCreateWithoutUserInput[] | Prisma.LockAccessUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutUserInput | Prisma.LockAccessCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockAccessCreateManyUserInputEnvelope;
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
};
export type LockAccessUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput> | Prisma.LockAccessCreateWithoutUserInput[] | Prisma.LockAccessUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutUserInput | Prisma.LockAccessCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockAccessUpsertWithWhereUniqueWithoutUserInput | Prisma.LockAccessUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockAccessCreateManyUserInputEnvelope;
    set?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    disconnect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    delete?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    update?: Prisma.LockAccessUpdateWithWhereUniqueWithoutUserInput | Prisma.LockAccessUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockAccessUpdateManyWithWhereWithoutUserInput | Prisma.LockAccessUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
};
export type LockAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput> | Prisma.LockAccessCreateWithoutUserInput[] | Prisma.LockAccessUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockAccessCreateOrConnectWithoutUserInput | Prisma.LockAccessCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockAccessUpsertWithWhereUniqueWithoutUserInput | Prisma.LockAccessUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockAccessCreateManyUserInputEnvelope;
    set?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    disconnect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    delete?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    connect?: Prisma.LockAccessWhereUniqueInput | Prisma.LockAccessWhereUniqueInput[];
    update?: Prisma.LockAccessUpdateWithWhereUniqueWithoutUserInput | Prisma.LockAccessUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockAccessUpdateManyWithWhereWithoutUserInput | Prisma.LockAccessUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
};
export type LockAccessCreateWithoutLockInput = {
    id: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
    User: Prisma.UserCreateNestedOneWithoutLockAccessInput;
};
export type LockAccessUncheckedCreateWithoutLockInput = {
    id: string;
    userId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessCreateOrConnectWithoutLockInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput>;
};
export type LockAccessCreateManyLockInputEnvelope = {
    data: Prisma.LockAccessCreateManyLockInput | Prisma.LockAccessCreateManyLockInput[];
    skipDuplicates?: boolean;
};
export type LockAccessUpsertWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockAccessUpdateWithoutLockInput, Prisma.LockAccessUncheckedUpdateWithoutLockInput>;
    create: Prisma.XOR<Prisma.LockAccessCreateWithoutLockInput, Prisma.LockAccessUncheckedCreateWithoutLockInput>;
};
export type LockAccessUpdateWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockAccessUpdateWithoutLockInput, Prisma.LockAccessUncheckedUpdateWithoutLockInput>;
};
export type LockAccessUpdateManyWithWhereWithoutLockInput = {
    where: Prisma.LockAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.LockAccessUpdateManyMutationInput, Prisma.LockAccessUncheckedUpdateManyWithoutLockInput>;
};
export type LockAccessScalarWhereInput = {
    AND?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
    OR?: Prisma.LockAccessScalarWhereInput[];
    NOT?: Prisma.LockAccessScalarWhereInput | Prisma.LockAccessScalarWhereInput[];
    id?: Prisma.StringFilter<"LockAccess"> | string;
    userId?: Prisma.StringFilter<"LockAccess"> | string;
    lockId?: Prisma.StringFilter<"LockAccess"> | string;
    accessType?: Prisma.EnumAccessTypeFilter<"LockAccess"> | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFilter<"LockAccess"> | $Enums.AccessStatus;
    validFrom?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    validTo?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
    allowedDays?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedFromTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    allowedToTime?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdById?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    reason?: Prisma.StringNullableFilter<"LockAccess"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"LockAccess"> | Date | string | null;
};
export type LockAccessCreateWithoutUserInput = {
    id: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
    Lock: Prisma.LockCreateNestedOneWithoutLockAccessInput;
};
export type LockAccessUncheckedCreateWithoutUserInput = {
    id: string;
    lockId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessCreateOrConnectWithoutUserInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput>;
};
export type LockAccessCreateManyUserInputEnvelope = {
    data: Prisma.LockAccessCreateManyUserInput | Prisma.LockAccessCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LockAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockAccessUpdateWithoutUserInput, Prisma.LockAccessUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LockAccessCreateWithoutUserInput, Prisma.LockAccessUncheckedCreateWithoutUserInput>;
};
export type LockAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockAccessUpdateWithoutUserInput, Prisma.LockAccessUncheckedUpdateWithoutUserInput>;
};
export type LockAccessUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LockAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.LockAccessUpdateManyMutationInput, Prisma.LockAccessUncheckedUpdateManyWithoutUserInput>;
};
export type LockAccessCreateManyLockInput = {
    id: string;
    userId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    User?: Prisma.UserUpdateOneRequiredWithoutLockAccessNestedInput;
};
export type LockAccessUncheckedUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessUncheckedUpdateManyWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessCreateManyUserInput = {
    id: string;
    lockId: string;
    accessType?: $Enums.AccessType;
    status?: $Enums.AccessStatus;
    validFrom?: Date | string | null;
    validTo?: Date | string | null;
    allowedDays?: string | null;
    allowedFromTime?: string | null;
    allowedToTime?: string | null;
    createdById?: string | null;
    reason?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    revokedAt?: Date | string | null;
};
export type LockAccessUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockAccessNestedInput;
};
export type LockAccessUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessType?: Prisma.EnumAccessTypeFieldUpdateOperationsInput | $Enums.AccessType;
    status?: Prisma.EnumAccessStatusFieldUpdateOperationsInput | $Enums.AccessStatus;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    allowedDays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedFromTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allowedToTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LockAccessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lockId?: boolean;
    accessType?: boolean;
    status?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    allowedDays?: boolean;
    allowedFromTime?: boolean;
    allowedToTime?: boolean;
    createdById?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    revokedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockAccess"]>;
export type LockAccessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lockId?: boolean;
    accessType?: boolean;
    status?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    allowedDays?: boolean;
    allowedFromTime?: boolean;
    allowedToTime?: boolean;
    createdById?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    revokedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockAccess"]>;
export type LockAccessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lockId?: boolean;
    accessType?: boolean;
    status?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    allowedDays?: boolean;
    allowedFromTime?: boolean;
    allowedToTime?: boolean;
    createdById?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    revokedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockAccess"]>;
export type LockAccessSelectScalar = {
    id?: boolean;
    userId?: boolean;
    lockId?: boolean;
    accessType?: boolean;
    status?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    allowedDays?: boolean;
    allowedFromTime?: boolean;
    allowedToTime?: boolean;
    createdById?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    revokedAt?: boolean;
};
export type LockAccessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "lockId" | "accessType" | "status" | "validFrom" | "validTo" | "allowedDays" | "allowedFromTime" | "allowedToTime" | "createdById" | "reason" | "createdAt" | "updatedAt" | "revokedAt", ExtArgs["result"]["lockAccess"]>;
export type LockAccessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LockAccessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LockAccessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LockAccessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LockAccess";
    objects: {
        Lock: Prisma.$LockPayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        lockId: string;
        accessType: $Enums.AccessType;
        status: $Enums.AccessStatus;
        validFrom: Date | null;
        validTo: Date | null;
        allowedDays: string | null;
        allowedFromTime: string | null;
        allowedToTime: string | null;
        createdById: string | null;
        reason: string | null;
        createdAt: Date;
        updatedAt: Date;
        revokedAt: Date | null;
    }, ExtArgs["result"]["lockAccess"]>;
    composites: {};
};
export type LockAccessGetPayload<S extends boolean | null | undefined | LockAccessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LockAccessPayload, S>;
export type LockAccessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LockAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LockAccessCountAggregateInputType | true;
};
export interface LockAccessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LockAccess'];
        meta: {
            name: 'LockAccess';
        };
    };
    /**
     * Find zero or one LockAccess that matches the filter.
     * @param {LockAccessFindUniqueArgs} args - Arguments to find a LockAccess
     * @example
     * // Get one LockAccess
     * const lockAccess = await prisma.lockAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockAccessFindUniqueArgs>(args: Prisma.SelectSubset<T, LockAccessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LockAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockAccessFindUniqueOrThrowArgs} args - Arguments to find a LockAccess
     * @example
     * // Get one LockAccess
     * const lockAccess = await prisma.lockAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockAccessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LockAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessFindFirstArgs} args - Arguments to find a LockAccess
     * @example
     * // Get one LockAccess
     * const lockAccess = await prisma.lockAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockAccessFindFirstArgs>(args?: Prisma.SelectSubset<T, LockAccessFindFirstArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessFindFirstOrThrowArgs} args - Arguments to find a LockAccess
     * @example
     * // Get one LockAccess
     * const lockAccess = await prisma.lockAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockAccessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LockAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LockAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockAccesses
     * const lockAccesses = await prisma.lockAccess.findMany()
     *
     * // Get first 10 LockAccesses
     * const lockAccesses = await prisma.lockAccess.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockAccessWithIdOnly = await prisma.lockAccess.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockAccessFindManyArgs>(args?: Prisma.SelectSubset<T, LockAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LockAccess.
     * @param {LockAccessCreateArgs} args - Arguments to create a LockAccess.
     * @example
     * // Create one LockAccess
     * const LockAccess = await prisma.lockAccess.create({
     *   data: {
     *     // ... data to create a LockAccess
     *   }
     * })
     *
     */
    create<T extends LockAccessCreateArgs>(args: Prisma.SelectSubset<T, LockAccessCreateArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LockAccesses.
     * @param {LockAccessCreateManyArgs} args - Arguments to create many LockAccesses.
     * @example
     * // Create many LockAccesses
     * const lockAccess = await prisma.lockAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockAccessCreateManyArgs>(args?: Prisma.SelectSubset<T, LockAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LockAccesses and returns the data saved in the database.
     * @param {LockAccessCreateManyAndReturnArgs} args - Arguments to create many LockAccesses.
     * @example
     * // Create many LockAccesses
     * const lockAccess = await prisma.lockAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockAccesses and only return the `id`
     * const lockAccessWithIdOnly = await prisma.lockAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockAccessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LockAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LockAccess.
     * @param {LockAccessDeleteArgs} args - Arguments to delete one LockAccess.
     * @example
     * // Delete one LockAccess
     * const LockAccess = await prisma.lockAccess.delete({
     *   where: {
     *     // ... filter to delete one LockAccess
     *   }
     * })
     *
     */
    delete<T extends LockAccessDeleteArgs>(args: Prisma.SelectSubset<T, LockAccessDeleteArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LockAccess.
     * @param {LockAccessUpdateArgs} args - Arguments to update one LockAccess.
     * @example
     * // Update one LockAccess
     * const lockAccess = await prisma.lockAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockAccessUpdateArgs>(args: Prisma.SelectSubset<T, LockAccessUpdateArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LockAccesses.
     * @param {LockAccessDeleteManyArgs} args - Arguments to filter LockAccesses to delete.
     * @example
     * // Delete a few LockAccesses
     * const { count } = await prisma.lockAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockAccessDeleteManyArgs>(args?: Prisma.SelectSubset<T, LockAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockAccesses
     * const lockAccess = await prisma.lockAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockAccessUpdateManyArgs>(args: Prisma.SelectSubset<T, LockAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockAccesses and returns the data updated in the database.
     * @param {LockAccessUpdateManyAndReturnArgs} args - Arguments to update many LockAccesses.
     * @example
     * // Update many LockAccesses
     * const lockAccess = await prisma.lockAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockAccesses and only return the `id`
     * const lockAccessWithIdOnly = await prisma.lockAccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends LockAccessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LockAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LockAccess.
     * @param {LockAccessUpsertArgs} args - Arguments to update or create a LockAccess.
     * @example
     * // Update or create a LockAccess
     * const lockAccess = await prisma.lockAccess.upsert({
     *   create: {
     *     // ... data to create a LockAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockAccess we want to update
     *   }
     * })
     */
    upsert<T extends LockAccessUpsertArgs>(args: Prisma.SelectSubset<T, LockAccessUpsertArgs<ExtArgs>>): Prisma.Prisma__LockAccessClient<runtime.Types.Result.GetResult<Prisma.$LockAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LockAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessCountArgs} args - Arguments to filter LockAccesses to count.
     * @example
     * // Count the number of LockAccesses
     * const count = await prisma.lockAccess.count({
     *   where: {
     *     // ... the filter for the LockAccesses we want to count
     *   }
     * })
    **/
    count<T extends LockAccessCountArgs>(args?: Prisma.Subset<T, LockAccessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LockAccessCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LockAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LockAccessAggregateArgs>(args: Prisma.Subset<T, LockAccessAggregateArgs>): Prisma.PrismaPromise<GetLockAccessAggregateType<T>>;
    /**
     * Group by LockAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockAccessGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LockAccessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LockAccessGroupByArgs['orderBy'];
    } : {
        orderBy?: LockAccessGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LockAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockAccess model
     */
    readonly fields: LockAccessFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LockAccess.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LockAccessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Lock<T extends Prisma.LockDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockDefaultArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LockAccess model
 */
export interface LockAccessFieldRefs {
    readonly id: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly userId: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly lockId: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly accessType: Prisma.FieldRef<"LockAccess", 'AccessType'>;
    readonly status: Prisma.FieldRef<"LockAccess", 'AccessStatus'>;
    readonly validFrom: Prisma.FieldRef<"LockAccess", 'DateTime'>;
    readonly validTo: Prisma.FieldRef<"LockAccess", 'DateTime'>;
    readonly allowedDays: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly allowedFromTime: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly allowedToTime: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly createdById: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly reason: Prisma.FieldRef<"LockAccess", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LockAccess", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LockAccess", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"LockAccess", 'DateTime'>;
}
/**
 * LockAccess findUnique
 */
export type LockAccessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockAccess to fetch.
     */
    where: Prisma.LockAccessWhereUniqueInput;
};
/**
 * LockAccess findUniqueOrThrow
 */
export type LockAccessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockAccess to fetch.
     */
    where: Prisma.LockAccessWhereUniqueInput;
};
/**
 * LockAccess findFirst
 */
export type LockAccessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockAccess to fetch.
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockAccesses to fetch.
     */
    orderBy?: Prisma.LockAccessOrderByWithRelationInput | Prisma.LockAccessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockAccesses.
     */
    cursor?: Prisma.LockAccessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockAccesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockAccesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockAccesses.
     */
    distinct?: Prisma.LockAccessScalarFieldEnum | Prisma.LockAccessScalarFieldEnum[];
};
/**
 * LockAccess findFirstOrThrow
 */
export type LockAccessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockAccess to fetch.
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockAccesses to fetch.
     */
    orderBy?: Prisma.LockAccessOrderByWithRelationInput | Prisma.LockAccessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockAccesses.
     */
    cursor?: Prisma.LockAccessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockAccesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockAccesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockAccesses.
     */
    distinct?: Prisma.LockAccessScalarFieldEnum | Prisma.LockAccessScalarFieldEnum[];
};
/**
 * LockAccess findMany
 */
export type LockAccessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockAccesses to fetch.
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockAccesses to fetch.
     */
    orderBy?: Prisma.LockAccessOrderByWithRelationInput | Prisma.LockAccessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockAccesses.
     */
    cursor?: Prisma.LockAccessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockAccesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockAccesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockAccesses.
     */
    distinct?: Prisma.LockAccessScalarFieldEnum | Prisma.LockAccessScalarFieldEnum[];
};
/**
 * LockAccess create
 */
export type LockAccessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LockAccess.
     */
    data: Prisma.XOR<Prisma.LockAccessCreateInput, Prisma.LockAccessUncheckedCreateInput>;
};
/**
 * LockAccess createMany
 */
export type LockAccessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LockAccesses.
     */
    data: Prisma.LockAccessCreateManyInput | Prisma.LockAccessCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LockAccess createManyAndReturn
 */
export type LockAccessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockAccess
     */
    select?: Prisma.LockAccessSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockAccess
     */
    omit?: Prisma.LockAccessOmit<ExtArgs> | null;
    /**
     * The data used to create many LockAccesses.
     */
    data: Prisma.LockAccessCreateManyInput | Prisma.LockAccessCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockAccessIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LockAccess update
 */
export type LockAccessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LockAccess.
     */
    data: Prisma.XOR<Prisma.LockAccessUpdateInput, Prisma.LockAccessUncheckedUpdateInput>;
    /**
     * Choose, which LockAccess to update.
     */
    where: Prisma.LockAccessWhereUniqueInput;
};
/**
 * LockAccess updateMany
 */
export type LockAccessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LockAccesses.
     */
    data: Prisma.XOR<Prisma.LockAccessUpdateManyMutationInput, Prisma.LockAccessUncheckedUpdateManyInput>;
    /**
     * Filter which LockAccesses to update
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * Limit how many LockAccesses to update.
     */
    limit?: number;
};
/**
 * LockAccess updateManyAndReturn
 */
export type LockAccessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockAccess
     */
    select?: Prisma.LockAccessSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockAccess
     */
    omit?: Prisma.LockAccessOmit<ExtArgs> | null;
    /**
     * The data used to update LockAccesses.
     */
    data: Prisma.XOR<Prisma.LockAccessUpdateManyMutationInput, Prisma.LockAccessUncheckedUpdateManyInput>;
    /**
     * Filter which LockAccesses to update
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * Limit how many LockAccesses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockAccessIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LockAccess upsert
 */
export type LockAccessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LockAccess to update in case it exists.
     */
    where: Prisma.LockAccessWhereUniqueInput;
    /**
     * In case the LockAccess found by the `where` argument doesn't exist, create a new LockAccess with this data.
     */
    create: Prisma.XOR<Prisma.LockAccessCreateInput, Prisma.LockAccessUncheckedCreateInput>;
    /**
     * In case the LockAccess was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LockAccessUpdateInput, Prisma.LockAccessUncheckedUpdateInput>;
};
/**
 * LockAccess delete
 */
export type LockAccessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LockAccess to delete.
     */
    where: Prisma.LockAccessWhereUniqueInput;
};
/**
 * LockAccess deleteMany
 */
export type LockAccessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockAccesses to delete
     */
    where?: Prisma.LockAccessWhereInput;
    /**
     * Limit how many LockAccesses to delete.
     */
    limit?: number;
};
/**
 * LockAccess without action
 */
export type LockAccessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LockAccess.d.ts.map