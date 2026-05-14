import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LockCommand
 *
 */
export type LockCommandModel = runtime.Types.Result.DefaultSelection<Prisma.$LockCommandPayload>;
export type AggregateLockCommand = {
    _count: LockCommandCountAggregateOutputType | null;
    _min: LockCommandMinAggregateOutputType | null;
    _max: LockCommandMaxAggregateOutputType | null;
};
export type LockCommandMinAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    userId: string | null;
    type: $Enums.CommandType | null;
    status: $Enums.CommandStatus | null;
    errorMessage: string | null;
    sentAt: Date | null;
    acknowledgedAt: Date | null;
    completedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LockCommandMaxAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    userId: string | null;
    type: $Enums.CommandType | null;
    status: $Enums.CommandStatus | null;
    errorMessage: string | null;
    sentAt: Date | null;
    acknowledgedAt: Date | null;
    completedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LockCommandCountAggregateOutputType = {
    id: number;
    lockId: number;
    userId: number;
    type: number;
    status: number;
    requestPayload: number;
    responsePayload: number;
    errorMessage: number;
    sentAt: number;
    acknowledgedAt: number;
    completedAt: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LockCommandMinAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    status?: true;
    errorMessage?: true;
    sentAt?: true;
    acknowledgedAt?: true;
    completedAt?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LockCommandMaxAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    status?: true;
    errorMessage?: true;
    sentAt?: true;
    acknowledgedAt?: true;
    completedAt?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LockCommandCountAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    status?: true;
    requestPayload?: true;
    responsePayload?: true;
    errorMessage?: true;
    sentAt?: true;
    acknowledgedAt?: true;
    completedAt?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LockCommandAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockCommand to aggregate.
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockCommands to fetch.
     */
    orderBy?: Prisma.LockCommandOrderByWithRelationInput | Prisma.LockCommandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LockCommandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockCommands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockCommands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockCommands
    **/
    _count?: true | LockCommandCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LockCommandMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LockCommandMaxAggregateInputType;
};
export type GetLockCommandAggregateType<T extends LockCommandAggregateArgs> = {
    [P in keyof T & keyof AggregateLockCommand]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLockCommand[P]> : Prisma.GetScalarType<T[P], AggregateLockCommand[P]>;
};
export type LockCommandGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockCommandWhereInput;
    orderBy?: Prisma.LockCommandOrderByWithAggregationInput | Prisma.LockCommandOrderByWithAggregationInput[];
    by: Prisma.LockCommandScalarFieldEnum[] | Prisma.LockCommandScalarFieldEnum;
    having?: Prisma.LockCommandScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockCommandCountAggregateInputType | true;
    _min?: LockCommandMinAggregateInputType;
    _max?: LockCommandMaxAggregateInputType;
};
export type LockCommandGroupByOutputType = {
    id: string;
    lockId: string;
    userId: string | null;
    type: $Enums.CommandType;
    status: $Enums.CommandStatus;
    requestPayload: runtime.JsonValue | null;
    responsePayload: runtime.JsonValue | null;
    errorMessage: string | null;
    sentAt: Date | null;
    acknowledgedAt: Date | null;
    completedAt: Date | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LockCommandCountAggregateOutputType | null;
    _min: LockCommandMinAggregateOutputType | null;
    _max: LockCommandMaxAggregateOutputType | null;
};
export type GetLockCommandGroupByPayload<T extends LockCommandGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LockCommandGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LockCommandGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LockCommandGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LockCommandGroupByOutputType[P]>;
}>>;
export type LockCommandWhereInput = {
    AND?: Prisma.LockCommandWhereInput | Prisma.LockCommandWhereInput[];
    OR?: Prisma.LockCommandWhereInput[];
    NOT?: Prisma.LockCommandWhereInput | Prisma.LockCommandWhereInput[];
    id?: Prisma.StringFilter<"LockCommand"> | string;
    lockId?: Prisma.StringFilter<"LockCommand"> | string;
    userId?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    type?: Prisma.EnumCommandTypeFilter<"LockCommand"> | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFilter<"LockCommand"> | $Enums.CommandStatus;
    requestPayload?: Prisma.JsonNullableFilter<"LockCommand">;
    responsePayload?: Prisma.JsonNullableFilter<"LockCommand">;
    errorMessage?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type LockCommandOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsePayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Lock?: Prisma.LockOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type LockCommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LockCommandWhereInput | Prisma.LockCommandWhereInput[];
    OR?: Prisma.LockCommandWhereInput[];
    NOT?: Prisma.LockCommandWhereInput | Prisma.LockCommandWhereInput[];
    lockId?: Prisma.StringFilter<"LockCommand"> | string;
    userId?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    type?: Prisma.EnumCommandTypeFilter<"LockCommand"> | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFilter<"LockCommand"> | $Enums.CommandStatus;
    requestPayload?: Prisma.JsonNullableFilter<"LockCommand">;
    responsePayload?: Prisma.JsonNullableFilter<"LockCommand">;
    errorMessage?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type LockCommandOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsePayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LockCommandCountOrderByAggregateInput;
    _max?: Prisma.LockCommandMaxOrderByAggregateInput;
    _min?: Prisma.LockCommandMinOrderByAggregateInput;
};
export type LockCommandScalarWhereWithAggregatesInput = {
    AND?: Prisma.LockCommandScalarWhereWithAggregatesInput | Prisma.LockCommandScalarWhereWithAggregatesInput[];
    OR?: Prisma.LockCommandScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LockCommandScalarWhereWithAggregatesInput | Prisma.LockCommandScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LockCommand"> | string;
    lockId?: Prisma.StringWithAggregatesFilter<"LockCommand"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"LockCommand"> | string | null;
    type?: Prisma.EnumCommandTypeWithAggregatesFilter<"LockCommand"> | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusWithAggregatesFilter<"LockCommand"> | $Enums.CommandStatus;
    requestPayload?: Prisma.JsonNullableWithAggregatesFilter<"LockCommand">;
    responsePayload?: Prisma.JsonNullableWithAggregatesFilter<"LockCommand">;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"LockCommand"> | string | null;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LockCommand"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LockCommand"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LockCommand"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LockCommand"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LockCommand"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LockCommand"> | Date | string;
};
export type LockCommandCreateInput = {
    id: string;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Lock: Prisma.LockCreateNestedOneWithoutLockCommandInput;
    User?: Prisma.UserCreateNestedOneWithoutLockCommandInput;
};
export type LockCommandUncheckedCreateInput = {
    id: string;
    lockId: string;
    userId?: string | null;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockCommandNestedInput;
    User?: Prisma.UserUpdateOneWithoutLockCommandNestedInput;
};
export type LockCommandUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandCreateManyInput = {
    id: string;
    lockId: string;
    userId?: string | null;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandListRelationFilter = {
    every?: Prisma.LockCommandWhereInput;
    some?: Prisma.LockCommandWhereInput;
    none?: Prisma.LockCommandWhereInput;
};
export type LockCommandOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LockCommandCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestPayload?: Prisma.SortOrder;
    responsePayload?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LockCommandMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LockCommandMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LockCommandCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput> | Prisma.LockCommandCreateWithoutLockInput[] | Prisma.LockCommandUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutLockInput | Prisma.LockCommandCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockCommandCreateManyLockInputEnvelope;
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
};
export type LockCommandUncheckedCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput> | Prisma.LockCommandCreateWithoutLockInput[] | Prisma.LockCommandUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutLockInput | Prisma.LockCommandCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockCommandCreateManyLockInputEnvelope;
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
};
export type LockCommandUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput> | Prisma.LockCommandCreateWithoutLockInput[] | Prisma.LockCommandUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutLockInput | Prisma.LockCommandCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockCommandUpsertWithWhereUniqueWithoutLockInput | Prisma.LockCommandUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockCommandCreateManyLockInputEnvelope;
    set?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    disconnect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    delete?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    update?: Prisma.LockCommandUpdateWithWhereUniqueWithoutLockInput | Prisma.LockCommandUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockCommandUpdateManyWithWhereWithoutLockInput | Prisma.LockCommandUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
};
export type LockCommandUncheckedUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput> | Prisma.LockCommandCreateWithoutLockInput[] | Prisma.LockCommandUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutLockInput | Prisma.LockCommandCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockCommandUpsertWithWhereUniqueWithoutLockInput | Prisma.LockCommandUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockCommandCreateManyLockInputEnvelope;
    set?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    disconnect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    delete?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    update?: Prisma.LockCommandUpdateWithWhereUniqueWithoutLockInput | Prisma.LockCommandUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockCommandUpdateManyWithWhereWithoutLockInput | Prisma.LockCommandUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
};
export type EnumCommandTypeFieldUpdateOperationsInput = {
    set?: $Enums.CommandType;
};
export type EnumCommandStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommandStatus;
};
export type LockCommandCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput> | Prisma.LockCommandCreateWithoutUserInput[] | Prisma.LockCommandUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutUserInput | Prisma.LockCommandCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockCommandCreateManyUserInputEnvelope;
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
};
export type LockCommandUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput> | Prisma.LockCommandCreateWithoutUserInput[] | Prisma.LockCommandUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutUserInput | Prisma.LockCommandCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockCommandCreateManyUserInputEnvelope;
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
};
export type LockCommandUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput> | Prisma.LockCommandCreateWithoutUserInput[] | Prisma.LockCommandUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutUserInput | Prisma.LockCommandCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockCommandUpsertWithWhereUniqueWithoutUserInput | Prisma.LockCommandUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockCommandCreateManyUserInputEnvelope;
    set?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    disconnect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    delete?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    update?: Prisma.LockCommandUpdateWithWhereUniqueWithoutUserInput | Prisma.LockCommandUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockCommandUpdateManyWithWhereWithoutUserInput | Prisma.LockCommandUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
};
export type LockCommandUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput> | Prisma.LockCommandCreateWithoutUserInput[] | Prisma.LockCommandUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockCommandCreateOrConnectWithoutUserInput | Prisma.LockCommandCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockCommandUpsertWithWhereUniqueWithoutUserInput | Prisma.LockCommandUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockCommandCreateManyUserInputEnvelope;
    set?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    disconnect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    delete?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    connect?: Prisma.LockCommandWhereUniqueInput | Prisma.LockCommandWhereUniqueInput[];
    update?: Prisma.LockCommandUpdateWithWhereUniqueWithoutUserInput | Prisma.LockCommandUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockCommandUpdateManyWithWhereWithoutUserInput | Prisma.LockCommandUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
};
export type LockCommandCreateWithoutLockInput = {
    id: string;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    User?: Prisma.UserCreateNestedOneWithoutLockCommandInput;
};
export type LockCommandUncheckedCreateWithoutLockInput = {
    id: string;
    userId?: string | null;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandCreateOrConnectWithoutLockInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput>;
};
export type LockCommandCreateManyLockInputEnvelope = {
    data: Prisma.LockCommandCreateManyLockInput | Prisma.LockCommandCreateManyLockInput[];
    skipDuplicates?: boolean;
};
export type LockCommandUpsertWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockCommandUpdateWithoutLockInput, Prisma.LockCommandUncheckedUpdateWithoutLockInput>;
    create: Prisma.XOR<Prisma.LockCommandCreateWithoutLockInput, Prisma.LockCommandUncheckedCreateWithoutLockInput>;
};
export type LockCommandUpdateWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockCommandUpdateWithoutLockInput, Prisma.LockCommandUncheckedUpdateWithoutLockInput>;
};
export type LockCommandUpdateManyWithWhereWithoutLockInput = {
    where: Prisma.LockCommandScalarWhereInput;
    data: Prisma.XOR<Prisma.LockCommandUpdateManyMutationInput, Prisma.LockCommandUncheckedUpdateManyWithoutLockInput>;
};
export type LockCommandScalarWhereInput = {
    AND?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
    OR?: Prisma.LockCommandScalarWhereInput[];
    NOT?: Prisma.LockCommandScalarWhereInput | Prisma.LockCommandScalarWhereInput[];
    id?: Prisma.StringFilter<"LockCommand"> | string;
    lockId?: Prisma.StringFilter<"LockCommand"> | string;
    userId?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    type?: Prisma.EnumCommandTypeFilter<"LockCommand"> | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFilter<"LockCommand"> | $Enums.CommandStatus;
    requestPayload?: Prisma.JsonNullableFilter<"LockCommand">;
    responsePayload?: Prisma.JsonNullableFilter<"LockCommand">;
    errorMessage?: Prisma.StringNullableFilter<"LockCommand"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LockCommand"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LockCommand"> | Date | string;
};
export type LockCommandCreateWithoutUserInput = {
    id: string;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Lock: Prisma.LockCreateNestedOneWithoutLockCommandInput;
};
export type LockCommandUncheckedCreateWithoutUserInput = {
    id: string;
    lockId: string;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandCreateOrConnectWithoutUserInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput>;
};
export type LockCommandCreateManyUserInputEnvelope = {
    data: Prisma.LockCommandCreateManyUserInput | Prisma.LockCommandCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LockCommandUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockCommandUpdateWithoutUserInput, Prisma.LockCommandUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LockCommandCreateWithoutUserInput, Prisma.LockCommandUncheckedCreateWithoutUserInput>;
};
export type LockCommandUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockCommandWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockCommandUpdateWithoutUserInput, Prisma.LockCommandUncheckedUpdateWithoutUserInput>;
};
export type LockCommandUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LockCommandScalarWhereInput;
    data: Prisma.XOR<Prisma.LockCommandUpdateManyMutationInput, Prisma.LockCommandUncheckedUpdateManyWithoutUserInput>;
};
export type LockCommandCreateManyLockInput = {
    id: string;
    userId?: string | null;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneWithoutLockCommandNestedInput;
};
export type LockCommandUncheckedUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandUncheckedUpdateManyWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandCreateManyUserInput = {
    id: string;
    lockId: string;
    type: $Enums.CommandType;
    status?: $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    sentAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    completedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LockCommandUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockCommandNestedInput;
};
export type LockCommandUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCommandTypeFieldUpdateOperationsInput | $Enums.CommandType;
    status?: Prisma.EnumCommandStatusFieldUpdateOperationsInput | $Enums.CommandStatus;
    requestPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockCommandSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    requestPayload?: boolean;
    responsePayload?: boolean;
    errorMessage?: boolean;
    sentAt?: boolean;
    acknowledgedAt?: boolean;
    completedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockCommand"]>;
export type LockCommandSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    requestPayload?: boolean;
    responsePayload?: boolean;
    errorMessage?: boolean;
    sentAt?: boolean;
    acknowledgedAt?: boolean;
    completedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockCommand"]>;
export type LockCommandSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    requestPayload?: boolean;
    responsePayload?: boolean;
    errorMessage?: boolean;
    sentAt?: boolean;
    acknowledgedAt?: boolean;
    completedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockCommand"]>;
export type LockCommandSelectScalar = {
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    requestPayload?: boolean;
    responsePayload?: boolean;
    errorMessage?: boolean;
    sentAt?: boolean;
    acknowledgedAt?: boolean;
    completedAt?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LockCommandOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lockId" | "userId" | "type" | "status" | "requestPayload" | "responsePayload" | "errorMessage" | "sentAt" | "acknowledgedAt" | "completedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lockCommand"]>;
export type LockCommandInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
};
export type LockCommandIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
};
export type LockCommandIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockCommand$UserArgs<ExtArgs>;
};
export type $LockCommandPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LockCommand";
    objects: {
        Lock: Prisma.$LockPayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lockId: string;
        userId: string | null;
        type: $Enums.CommandType;
        status: $Enums.CommandStatus;
        requestPayload: runtime.JsonValue | null;
        responsePayload: runtime.JsonValue | null;
        errorMessage: string | null;
        sentAt: Date | null;
        acknowledgedAt: Date | null;
        completedAt: Date | null;
        expiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lockCommand"]>;
    composites: {};
};
export type LockCommandGetPayload<S extends boolean | null | undefined | LockCommandDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LockCommandPayload, S>;
export type LockCommandCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LockCommandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LockCommandCountAggregateInputType | true;
};
export interface LockCommandDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LockCommand'];
        meta: {
            name: 'LockCommand';
        };
    };
    /**
     * Find zero or one LockCommand that matches the filter.
     * @param {LockCommandFindUniqueArgs} args - Arguments to find a LockCommand
     * @example
     * // Get one LockCommand
     * const lockCommand = await prisma.lockCommand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockCommandFindUniqueArgs>(args: Prisma.SelectSubset<T, LockCommandFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LockCommand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockCommandFindUniqueOrThrowArgs} args - Arguments to find a LockCommand
     * @example
     * // Get one LockCommand
     * const lockCommand = await prisma.lockCommand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockCommandFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LockCommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockCommand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandFindFirstArgs} args - Arguments to find a LockCommand
     * @example
     * // Get one LockCommand
     * const lockCommand = await prisma.lockCommand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockCommandFindFirstArgs>(args?: Prisma.SelectSubset<T, LockCommandFindFirstArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockCommand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandFindFirstOrThrowArgs} args - Arguments to find a LockCommand
     * @example
     * // Get one LockCommand
     * const lockCommand = await prisma.lockCommand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockCommandFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LockCommandFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LockCommands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockCommands
     * const lockCommands = await prisma.lockCommand.findMany()
     *
     * // Get first 10 LockCommands
     * const lockCommands = await prisma.lockCommand.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockCommandWithIdOnly = await prisma.lockCommand.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockCommandFindManyArgs>(args?: Prisma.SelectSubset<T, LockCommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LockCommand.
     * @param {LockCommandCreateArgs} args - Arguments to create a LockCommand.
     * @example
     * // Create one LockCommand
     * const LockCommand = await prisma.lockCommand.create({
     *   data: {
     *     // ... data to create a LockCommand
     *   }
     * })
     *
     */
    create<T extends LockCommandCreateArgs>(args: Prisma.SelectSubset<T, LockCommandCreateArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LockCommands.
     * @param {LockCommandCreateManyArgs} args - Arguments to create many LockCommands.
     * @example
     * // Create many LockCommands
     * const lockCommand = await prisma.lockCommand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockCommandCreateManyArgs>(args?: Prisma.SelectSubset<T, LockCommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LockCommands and returns the data saved in the database.
     * @param {LockCommandCreateManyAndReturnArgs} args - Arguments to create many LockCommands.
     * @example
     * // Create many LockCommands
     * const lockCommand = await prisma.lockCommand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockCommands and only return the `id`
     * const lockCommandWithIdOnly = await prisma.lockCommand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockCommandCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LockCommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LockCommand.
     * @param {LockCommandDeleteArgs} args - Arguments to delete one LockCommand.
     * @example
     * // Delete one LockCommand
     * const LockCommand = await prisma.lockCommand.delete({
     *   where: {
     *     // ... filter to delete one LockCommand
     *   }
     * })
     *
     */
    delete<T extends LockCommandDeleteArgs>(args: Prisma.SelectSubset<T, LockCommandDeleteArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LockCommand.
     * @param {LockCommandUpdateArgs} args - Arguments to update one LockCommand.
     * @example
     * // Update one LockCommand
     * const lockCommand = await prisma.lockCommand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockCommandUpdateArgs>(args: Prisma.SelectSubset<T, LockCommandUpdateArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LockCommands.
     * @param {LockCommandDeleteManyArgs} args - Arguments to filter LockCommands to delete.
     * @example
     * // Delete a few LockCommands
     * const { count } = await prisma.lockCommand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockCommandDeleteManyArgs>(args?: Prisma.SelectSubset<T, LockCommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockCommands
     * const lockCommand = await prisma.lockCommand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockCommandUpdateManyArgs>(args: Prisma.SelectSubset<T, LockCommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockCommands and returns the data updated in the database.
     * @param {LockCommandUpdateManyAndReturnArgs} args - Arguments to update many LockCommands.
     * @example
     * // Update many LockCommands
     * const lockCommand = await prisma.lockCommand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockCommands and only return the `id`
     * const lockCommandWithIdOnly = await prisma.lockCommand.updateManyAndReturn({
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
    updateManyAndReturn<T extends LockCommandUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LockCommandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LockCommand.
     * @param {LockCommandUpsertArgs} args - Arguments to update or create a LockCommand.
     * @example
     * // Update or create a LockCommand
     * const lockCommand = await prisma.lockCommand.upsert({
     *   create: {
     *     // ... data to create a LockCommand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockCommand we want to update
     *   }
     * })
     */
    upsert<T extends LockCommandUpsertArgs>(args: Prisma.SelectSubset<T, LockCommandUpsertArgs<ExtArgs>>): Prisma.Prisma__LockCommandClient<runtime.Types.Result.GetResult<Prisma.$LockCommandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LockCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandCountArgs} args - Arguments to filter LockCommands to count.
     * @example
     * // Count the number of LockCommands
     * const count = await prisma.lockCommand.count({
     *   where: {
     *     // ... the filter for the LockCommands we want to count
     *   }
     * })
    **/
    count<T extends LockCommandCountArgs>(args?: Prisma.Subset<T, LockCommandCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LockCommandCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LockCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LockCommandAggregateArgs>(args: Prisma.Subset<T, LockCommandAggregateArgs>): Prisma.PrismaPromise<GetLockCommandAggregateType<T>>;
    /**
     * Group by LockCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockCommandGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LockCommandGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LockCommandGroupByArgs['orderBy'];
    } : {
        orderBy?: LockCommandGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LockCommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockCommand model
     */
    readonly fields: LockCommandFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LockCommand.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LockCommandClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Lock<T extends Prisma.LockDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockDefaultArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.LockCommand$UserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockCommand$UserArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LockCommand model
 */
export interface LockCommandFieldRefs {
    readonly id: Prisma.FieldRef<"LockCommand", 'String'>;
    readonly lockId: Prisma.FieldRef<"LockCommand", 'String'>;
    readonly userId: Prisma.FieldRef<"LockCommand", 'String'>;
    readonly type: Prisma.FieldRef<"LockCommand", 'CommandType'>;
    readonly status: Prisma.FieldRef<"LockCommand", 'CommandStatus'>;
    readonly requestPayload: Prisma.FieldRef<"LockCommand", 'Json'>;
    readonly responsePayload: Prisma.FieldRef<"LockCommand", 'Json'>;
    readonly errorMessage: Prisma.FieldRef<"LockCommand", 'String'>;
    readonly sentAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
    readonly acknowledgedAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LockCommand", 'DateTime'>;
}
/**
 * LockCommand findUnique
 */
export type LockCommandFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockCommand to fetch.
     */
    where: Prisma.LockCommandWhereUniqueInput;
};
/**
 * LockCommand findUniqueOrThrow
 */
export type LockCommandFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockCommand to fetch.
     */
    where: Prisma.LockCommandWhereUniqueInput;
};
/**
 * LockCommand findFirst
 */
export type LockCommandFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockCommand to fetch.
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockCommands to fetch.
     */
    orderBy?: Prisma.LockCommandOrderByWithRelationInput | Prisma.LockCommandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockCommands.
     */
    cursor?: Prisma.LockCommandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockCommands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockCommands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockCommands.
     */
    distinct?: Prisma.LockCommandScalarFieldEnum | Prisma.LockCommandScalarFieldEnum[];
};
/**
 * LockCommand findFirstOrThrow
 */
export type LockCommandFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockCommand to fetch.
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockCommands to fetch.
     */
    orderBy?: Prisma.LockCommandOrderByWithRelationInput | Prisma.LockCommandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockCommands.
     */
    cursor?: Prisma.LockCommandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockCommands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockCommands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockCommands.
     */
    distinct?: Prisma.LockCommandScalarFieldEnum | Prisma.LockCommandScalarFieldEnum[];
};
/**
 * LockCommand findMany
 */
export type LockCommandFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockCommands to fetch.
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockCommands to fetch.
     */
    orderBy?: Prisma.LockCommandOrderByWithRelationInput | Prisma.LockCommandOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockCommands.
     */
    cursor?: Prisma.LockCommandWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockCommands from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockCommands.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockCommands.
     */
    distinct?: Prisma.LockCommandScalarFieldEnum | Prisma.LockCommandScalarFieldEnum[];
};
/**
 * LockCommand create
 */
export type LockCommandCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LockCommand.
     */
    data: Prisma.XOR<Prisma.LockCommandCreateInput, Prisma.LockCommandUncheckedCreateInput>;
};
/**
 * LockCommand createMany
 */
export type LockCommandCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LockCommands.
     */
    data: Prisma.LockCommandCreateManyInput | Prisma.LockCommandCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LockCommand createManyAndReturn
 */
export type LockCommandCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockCommand
     */
    select?: Prisma.LockCommandSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockCommand
     */
    omit?: Prisma.LockCommandOmit<ExtArgs> | null;
    /**
     * The data used to create many LockCommands.
     */
    data: Prisma.LockCommandCreateManyInput | Prisma.LockCommandCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockCommandIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LockCommand update
 */
export type LockCommandUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LockCommand.
     */
    data: Prisma.XOR<Prisma.LockCommandUpdateInput, Prisma.LockCommandUncheckedUpdateInput>;
    /**
     * Choose, which LockCommand to update.
     */
    where: Prisma.LockCommandWhereUniqueInput;
};
/**
 * LockCommand updateMany
 */
export type LockCommandUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LockCommands.
     */
    data: Prisma.XOR<Prisma.LockCommandUpdateManyMutationInput, Prisma.LockCommandUncheckedUpdateManyInput>;
    /**
     * Filter which LockCommands to update
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * Limit how many LockCommands to update.
     */
    limit?: number;
};
/**
 * LockCommand updateManyAndReturn
 */
export type LockCommandUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockCommand
     */
    select?: Prisma.LockCommandSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockCommand
     */
    omit?: Prisma.LockCommandOmit<ExtArgs> | null;
    /**
     * The data used to update LockCommands.
     */
    data: Prisma.XOR<Prisma.LockCommandUpdateManyMutationInput, Prisma.LockCommandUncheckedUpdateManyInput>;
    /**
     * Filter which LockCommands to update
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * Limit how many LockCommands to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockCommandIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LockCommand upsert
 */
export type LockCommandUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LockCommand to update in case it exists.
     */
    where: Prisma.LockCommandWhereUniqueInput;
    /**
     * In case the LockCommand found by the `where` argument doesn't exist, create a new LockCommand with this data.
     */
    create: Prisma.XOR<Prisma.LockCommandCreateInput, Prisma.LockCommandUncheckedCreateInput>;
    /**
     * In case the LockCommand was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LockCommandUpdateInput, Prisma.LockCommandUncheckedUpdateInput>;
};
/**
 * LockCommand delete
 */
export type LockCommandDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LockCommand to delete.
     */
    where: Prisma.LockCommandWhereUniqueInput;
};
/**
 * LockCommand deleteMany
 */
export type LockCommandDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockCommands to delete
     */
    where?: Prisma.LockCommandWhereInput;
    /**
     * Limit how many LockCommands to delete.
     */
    limit?: number;
};
/**
 * LockCommand.User
 */
export type LockCommand$UserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * LockCommand without action
 */
export type LockCommandDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LockCommand.d.ts.map