import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LockEvent
 *
 */
export type LockEventModel = runtime.Types.Result.DefaultSelection<Prisma.$LockEventPayload>;
export type AggregateLockEvent = {
    _count: LockEventCountAggregateOutputType | null;
    _avg: LockEventAvgAggregateOutputType | null;
    _sum: LockEventSumAggregateOutputType | null;
    _min: LockEventMinAggregateOutputType | null;
    _max: LockEventMaxAggregateOutputType | null;
};
export type LockEventAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockEventSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockEventMinAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    userId: string | null;
    type: $Enums.LockEventType | null;
    message: string | null;
    latitude: number | null;
    longitude: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    createdAt: Date | null;
};
export type LockEventMaxAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    userId: string | null;
    type: $Enums.LockEventType | null;
    message: string | null;
    latitude: number | null;
    longitude: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    createdAt: Date | null;
};
export type LockEventCountAggregateOutputType = {
    id: number;
    lockId: number;
    userId: number;
    type: number;
    message: number;
    latitude: number;
    longitude: number;
    batteryLevel: number;
    signalLevel: number;
    rawPayload: number;
    createdAt: number;
    _all: number;
};
export type LockEventAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockEventSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockEventMinAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    message?: true;
    latitude?: true;
    longitude?: true;
    batteryLevel?: true;
    signalLevel?: true;
    createdAt?: true;
};
export type LockEventMaxAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    message?: true;
    latitude?: true;
    longitude?: true;
    batteryLevel?: true;
    signalLevel?: true;
    createdAt?: true;
};
export type LockEventCountAggregateInputType = {
    id?: true;
    lockId?: true;
    userId?: true;
    type?: true;
    message?: true;
    latitude?: true;
    longitude?: true;
    batteryLevel?: true;
    signalLevel?: true;
    rawPayload?: true;
    createdAt?: true;
    _all?: true;
};
export type LockEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockEvent to aggregate.
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockEvents to fetch.
     */
    orderBy?: Prisma.LockEventOrderByWithRelationInput | Prisma.LockEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LockEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockEvents
    **/
    _count?: true | LockEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LockEventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LockEventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LockEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LockEventMaxAggregateInputType;
};
export type GetLockEventAggregateType<T extends LockEventAggregateArgs> = {
    [P in keyof T & keyof AggregateLockEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLockEvent[P]> : Prisma.GetScalarType<T[P], AggregateLockEvent[P]>;
};
export type LockEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockEventWhereInput;
    orderBy?: Prisma.LockEventOrderByWithAggregationInput | Prisma.LockEventOrderByWithAggregationInput[];
    by: Prisma.LockEventScalarFieldEnum[] | Prisma.LockEventScalarFieldEnum;
    having?: Prisma.LockEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockEventCountAggregateInputType | true;
    _avg?: LockEventAvgAggregateInputType;
    _sum?: LockEventSumAggregateInputType;
    _min?: LockEventMinAggregateInputType;
    _max?: LockEventMaxAggregateInputType;
};
export type LockEventGroupByOutputType = {
    id: string;
    lockId: string;
    userId: string | null;
    type: $Enums.LockEventType;
    message: string | null;
    latitude: number | null;
    longitude: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    rawPayload: runtime.JsonValue | null;
    createdAt: Date;
    _count: LockEventCountAggregateOutputType | null;
    _avg: LockEventAvgAggregateOutputType | null;
    _sum: LockEventSumAggregateOutputType | null;
    _min: LockEventMinAggregateOutputType | null;
    _max: LockEventMaxAggregateOutputType | null;
};
export type GetLockEventGroupByPayload<T extends LockEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LockEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LockEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LockEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LockEventGroupByOutputType[P]>;
}>>;
export type LockEventWhereInput = {
    AND?: Prisma.LockEventWhereInput | Prisma.LockEventWhereInput[];
    OR?: Prisma.LockEventWhereInput[];
    NOT?: Prisma.LockEventWhereInput | Prisma.LockEventWhereInput[];
    id?: Prisma.StringFilter<"LockEvent"> | string;
    lockId?: Prisma.StringFilter<"LockEvent"> | string;
    userId?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    type?: Prisma.EnumLockEventTypeFilter<"LockEvent"> | $Enums.LockEventType;
    message?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockEvent">;
    createdAt?: Prisma.DateTimeFilter<"LockEvent"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type LockEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    Lock?: Prisma.LockOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type LockEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LockEventWhereInput | Prisma.LockEventWhereInput[];
    OR?: Prisma.LockEventWhereInput[];
    NOT?: Prisma.LockEventWhereInput | Prisma.LockEventWhereInput[];
    lockId?: Prisma.StringFilter<"LockEvent"> | string;
    userId?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    type?: Prisma.EnumLockEventTypeFilter<"LockEvent"> | $Enums.LockEventType;
    message?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockEvent">;
    createdAt?: Prisma.DateTimeFilter<"LockEvent"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
    User?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type LockEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LockEventCountOrderByAggregateInput;
    _avg?: Prisma.LockEventAvgOrderByAggregateInput;
    _max?: Prisma.LockEventMaxOrderByAggregateInput;
    _min?: Prisma.LockEventMinOrderByAggregateInput;
    _sum?: Prisma.LockEventSumOrderByAggregateInput;
};
export type LockEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.LockEventScalarWhereWithAggregatesInput | Prisma.LockEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.LockEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LockEventScalarWhereWithAggregatesInput | Prisma.LockEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LockEvent"> | string;
    lockId?: Prisma.StringWithAggregatesFilter<"LockEvent"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"LockEvent"> | string | null;
    type?: Prisma.EnumLockEventTypeWithAggregatesFilter<"LockEvent"> | $Enums.LockEventType;
    message?: Prisma.StringNullableWithAggregatesFilter<"LockEvent"> | string | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"LockEvent"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"LockEvent"> | number | null;
    batteryLevel?: Prisma.IntNullableWithAggregatesFilter<"LockEvent"> | number | null;
    signalLevel?: Prisma.IntNullableWithAggregatesFilter<"LockEvent"> | number | null;
    rawPayload?: Prisma.JsonNullableWithAggregatesFilter<"LockEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LockEvent"> | Date | string;
};
export type LockEventCreateInput = {
    id: string;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    Lock: Prisma.LockCreateNestedOneWithoutLockEventInput;
    User?: Prisma.UserCreateNestedOneWithoutLockEventInput;
};
export type LockEventUncheckedCreateInput = {
    id: string;
    lockId: string;
    userId?: string | null;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockEventNestedInput;
    User?: Prisma.UserUpdateOneWithoutLockEventNestedInput;
};
export type LockEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventCreateManyInput = {
    id: string;
    lockId: string;
    userId?: string | null;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventListRelationFilter = {
    every?: Prisma.LockEventWhereInput;
    some?: Prisma.LockEventWhereInput;
    none?: Prisma.LockEventWhereInput;
};
export type LockEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LockEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LockEventAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LockEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LockEventSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockEventCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput> | Prisma.LockEventCreateWithoutLockInput[] | Prisma.LockEventUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutLockInput | Prisma.LockEventCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockEventCreateManyLockInputEnvelope;
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
};
export type LockEventUncheckedCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput> | Prisma.LockEventCreateWithoutLockInput[] | Prisma.LockEventUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutLockInput | Prisma.LockEventCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockEventCreateManyLockInputEnvelope;
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
};
export type LockEventUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput> | Prisma.LockEventCreateWithoutLockInput[] | Prisma.LockEventUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutLockInput | Prisma.LockEventCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockEventUpsertWithWhereUniqueWithoutLockInput | Prisma.LockEventUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockEventCreateManyLockInputEnvelope;
    set?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    disconnect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    delete?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    update?: Prisma.LockEventUpdateWithWhereUniqueWithoutLockInput | Prisma.LockEventUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockEventUpdateManyWithWhereWithoutLockInput | Prisma.LockEventUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
};
export type LockEventUncheckedUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput> | Prisma.LockEventCreateWithoutLockInput[] | Prisma.LockEventUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutLockInput | Prisma.LockEventCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockEventUpsertWithWhereUniqueWithoutLockInput | Prisma.LockEventUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockEventCreateManyLockInputEnvelope;
    set?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    disconnect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    delete?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    update?: Prisma.LockEventUpdateWithWhereUniqueWithoutLockInput | Prisma.LockEventUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockEventUpdateManyWithWhereWithoutLockInput | Prisma.LockEventUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
};
export type EnumLockEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.LockEventType;
};
export type LockEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput> | Prisma.LockEventCreateWithoutUserInput[] | Prisma.LockEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutUserInput | Prisma.LockEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockEventCreateManyUserInputEnvelope;
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
};
export type LockEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput> | Prisma.LockEventCreateWithoutUserInput[] | Prisma.LockEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutUserInput | Prisma.LockEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LockEventCreateManyUserInputEnvelope;
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
};
export type LockEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput> | Prisma.LockEventCreateWithoutUserInput[] | Prisma.LockEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutUserInput | Prisma.LockEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockEventUpsertWithWhereUniqueWithoutUserInput | Prisma.LockEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockEventCreateManyUserInputEnvelope;
    set?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    disconnect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    delete?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    update?: Prisma.LockEventUpdateWithWhereUniqueWithoutUserInput | Prisma.LockEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockEventUpdateManyWithWhereWithoutUserInput | Prisma.LockEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
};
export type LockEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput> | Prisma.LockEventCreateWithoutUserInput[] | Prisma.LockEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LockEventCreateOrConnectWithoutUserInput | Prisma.LockEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LockEventUpsertWithWhereUniqueWithoutUserInput | Prisma.LockEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LockEventCreateManyUserInputEnvelope;
    set?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    disconnect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    delete?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    connect?: Prisma.LockEventWhereUniqueInput | Prisma.LockEventWhereUniqueInput[];
    update?: Prisma.LockEventUpdateWithWhereUniqueWithoutUserInput | Prisma.LockEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LockEventUpdateManyWithWhereWithoutUserInput | Prisma.LockEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
};
export type LockEventCreateWithoutLockInput = {
    id: string;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    User?: Prisma.UserCreateNestedOneWithoutLockEventInput;
};
export type LockEventUncheckedCreateWithoutLockInput = {
    id: string;
    userId?: string | null;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventCreateOrConnectWithoutLockInput = {
    where: Prisma.LockEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput>;
};
export type LockEventCreateManyLockInputEnvelope = {
    data: Prisma.LockEventCreateManyLockInput | Prisma.LockEventCreateManyLockInput[];
    skipDuplicates?: boolean;
};
export type LockEventUpsertWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockEventUpdateWithoutLockInput, Prisma.LockEventUncheckedUpdateWithoutLockInput>;
    create: Prisma.XOR<Prisma.LockEventCreateWithoutLockInput, Prisma.LockEventUncheckedCreateWithoutLockInput>;
};
export type LockEventUpdateWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockEventUpdateWithoutLockInput, Prisma.LockEventUncheckedUpdateWithoutLockInput>;
};
export type LockEventUpdateManyWithWhereWithoutLockInput = {
    where: Prisma.LockEventScalarWhereInput;
    data: Prisma.XOR<Prisma.LockEventUpdateManyMutationInput, Prisma.LockEventUncheckedUpdateManyWithoutLockInput>;
};
export type LockEventScalarWhereInput = {
    AND?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
    OR?: Prisma.LockEventScalarWhereInput[];
    NOT?: Prisma.LockEventScalarWhereInput | Prisma.LockEventScalarWhereInput[];
    id?: Prisma.StringFilter<"LockEvent"> | string;
    lockId?: Prisma.StringFilter<"LockEvent"> | string;
    userId?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    type?: Prisma.EnumLockEventTypeFilter<"LockEvent"> | $Enums.LockEventType;
    message?: Prisma.StringNullableFilter<"LockEvent"> | string | null;
    latitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"LockEvent"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockEvent"> | number | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockEvent">;
    createdAt?: Prisma.DateTimeFilter<"LockEvent"> | Date | string;
};
export type LockEventCreateWithoutUserInput = {
    id: string;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    Lock: Prisma.LockCreateNestedOneWithoutLockEventInput;
};
export type LockEventUncheckedCreateWithoutUserInput = {
    id: string;
    lockId: string;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventCreateOrConnectWithoutUserInput = {
    where: Prisma.LockEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput>;
};
export type LockEventCreateManyUserInputEnvelope = {
    data: Prisma.LockEventCreateManyUserInput | Prisma.LockEventCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LockEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockEventUpdateWithoutUserInput, Prisma.LockEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LockEventCreateWithoutUserInput, Prisma.LockEventUncheckedCreateWithoutUserInput>;
};
export type LockEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LockEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockEventUpdateWithoutUserInput, Prisma.LockEventUncheckedUpdateWithoutUserInput>;
};
export type LockEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LockEventScalarWhereInput;
    data: Prisma.XOR<Prisma.LockEventUpdateManyMutationInput, Prisma.LockEventUncheckedUpdateManyWithoutUserInput>;
};
export type LockEventCreateManyLockInput = {
    id: string;
    userId?: string | null;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneWithoutLockEventNestedInput;
};
export type LockEventUncheckedUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventUncheckedUpdateManyWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventCreateManyUserInput = {
    id: string;
    lockId: string;
    type: $Enums.LockEventType;
    message?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type LockEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockEventNestedInput;
};
export type LockEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLockEventTypeFieldUpdateOperationsInput | $Enums.LockEventType;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    message?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockEvent"]>;
export type LockEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    message?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockEvent"]>;
export type LockEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    message?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
}, ExtArgs["result"]["lockEvent"]>;
export type LockEventSelectScalar = {
    id?: boolean;
    lockId?: boolean;
    userId?: boolean;
    type?: boolean;
    message?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    rawPayload?: boolean;
    createdAt?: boolean;
};
export type LockEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lockId" | "userId" | "type" | "message" | "latitude" | "longitude" | "batteryLevel" | "signalLevel" | "rawPayload" | "createdAt", ExtArgs["result"]["lockEvent"]>;
export type LockEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
};
export type LockEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
};
export type LockEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.LockEvent$UserArgs<ExtArgs>;
};
export type $LockEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LockEvent";
    objects: {
        Lock: Prisma.$LockPayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lockId: string;
        userId: string | null;
        type: $Enums.LockEventType;
        message: string | null;
        latitude: number | null;
        longitude: number | null;
        batteryLevel: number | null;
        signalLevel: number | null;
        rawPayload: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["lockEvent"]>;
    composites: {};
};
export type LockEventGetPayload<S extends boolean | null | undefined | LockEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LockEventPayload, S>;
export type LockEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LockEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LockEventCountAggregateInputType | true;
};
export interface LockEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LockEvent'];
        meta: {
            name: 'LockEvent';
        };
    };
    /**
     * Find zero or one LockEvent that matches the filter.
     * @param {LockEventFindUniqueArgs} args - Arguments to find a LockEvent
     * @example
     * // Get one LockEvent
     * const lockEvent = await prisma.lockEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockEventFindUniqueArgs>(args: Prisma.SelectSubset<T, LockEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LockEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockEventFindUniqueOrThrowArgs} args - Arguments to find a LockEvent
     * @example
     * // Get one LockEvent
     * const lockEvent = await prisma.lockEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LockEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventFindFirstArgs} args - Arguments to find a LockEvent
     * @example
     * // Get one LockEvent
     * const lockEvent = await prisma.lockEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockEventFindFirstArgs>(args?: Prisma.SelectSubset<T, LockEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventFindFirstOrThrowArgs} args - Arguments to find a LockEvent
     * @example
     * // Get one LockEvent
     * const lockEvent = await prisma.lockEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LockEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LockEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockEvents
     * const lockEvents = await prisma.lockEvent.findMany()
     *
     * // Get first 10 LockEvents
     * const lockEvents = await prisma.lockEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockEventWithIdOnly = await prisma.lockEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockEventFindManyArgs>(args?: Prisma.SelectSubset<T, LockEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LockEvent.
     * @param {LockEventCreateArgs} args - Arguments to create a LockEvent.
     * @example
     * // Create one LockEvent
     * const LockEvent = await prisma.lockEvent.create({
     *   data: {
     *     // ... data to create a LockEvent
     *   }
     * })
     *
     */
    create<T extends LockEventCreateArgs>(args: Prisma.SelectSubset<T, LockEventCreateArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LockEvents.
     * @param {LockEventCreateManyArgs} args - Arguments to create many LockEvents.
     * @example
     * // Create many LockEvents
     * const lockEvent = await prisma.lockEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockEventCreateManyArgs>(args?: Prisma.SelectSubset<T, LockEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LockEvents and returns the data saved in the database.
     * @param {LockEventCreateManyAndReturnArgs} args - Arguments to create many LockEvents.
     * @example
     * // Create many LockEvents
     * const lockEvent = await prisma.lockEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockEvents and only return the `id`
     * const lockEventWithIdOnly = await prisma.lockEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LockEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LockEvent.
     * @param {LockEventDeleteArgs} args - Arguments to delete one LockEvent.
     * @example
     * // Delete one LockEvent
     * const LockEvent = await prisma.lockEvent.delete({
     *   where: {
     *     // ... filter to delete one LockEvent
     *   }
     * })
     *
     */
    delete<T extends LockEventDeleteArgs>(args: Prisma.SelectSubset<T, LockEventDeleteArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LockEvent.
     * @param {LockEventUpdateArgs} args - Arguments to update one LockEvent.
     * @example
     * // Update one LockEvent
     * const lockEvent = await prisma.lockEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockEventUpdateArgs>(args: Prisma.SelectSubset<T, LockEventUpdateArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LockEvents.
     * @param {LockEventDeleteManyArgs} args - Arguments to filter LockEvents to delete.
     * @example
     * // Delete a few LockEvents
     * const { count } = await prisma.lockEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, LockEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockEvents
     * const lockEvent = await prisma.lockEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockEventUpdateManyArgs>(args: Prisma.SelectSubset<T, LockEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockEvents and returns the data updated in the database.
     * @param {LockEventUpdateManyAndReturnArgs} args - Arguments to update many LockEvents.
     * @example
     * // Update many LockEvents
     * const lockEvent = await prisma.lockEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockEvents and only return the `id`
     * const lockEventWithIdOnly = await prisma.lockEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends LockEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LockEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LockEvent.
     * @param {LockEventUpsertArgs} args - Arguments to update or create a LockEvent.
     * @example
     * // Update or create a LockEvent
     * const lockEvent = await prisma.lockEvent.upsert({
     *   create: {
     *     // ... data to create a LockEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockEvent we want to update
     *   }
     * })
     */
    upsert<T extends LockEventUpsertArgs>(args: Prisma.SelectSubset<T, LockEventUpsertArgs<ExtArgs>>): Prisma.Prisma__LockEventClient<runtime.Types.Result.GetResult<Prisma.$LockEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LockEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventCountArgs} args - Arguments to filter LockEvents to count.
     * @example
     * // Count the number of LockEvents
     * const count = await prisma.lockEvent.count({
     *   where: {
     *     // ... the filter for the LockEvents we want to count
     *   }
     * })
    **/
    count<T extends LockEventCountArgs>(args?: Prisma.Subset<T, LockEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LockEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LockEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LockEventAggregateArgs>(args: Prisma.Subset<T, LockEventAggregateArgs>): Prisma.PrismaPromise<GetLockEventAggregateType<T>>;
    /**
     * Group by LockEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LockEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LockEventGroupByArgs['orderBy'];
    } : {
        orderBy?: LockEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LockEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockEvent model
     */
    readonly fields: LockEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LockEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LockEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Lock<T extends Prisma.LockDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockDefaultArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.LockEvent$UserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockEvent$UserArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LockEvent model
 */
export interface LockEventFieldRefs {
    readonly id: Prisma.FieldRef<"LockEvent", 'String'>;
    readonly lockId: Prisma.FieldRef<"LockEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"LockEvent", 'String'>;
    readonly type: Prisma.FieldRef<"LockEvent", 'LockEventType'>;
    readonly message: Prisma.FieldRef<"LockEvent", 'String'>;
    readonly latitude: Prisma.FieldRef<"LockEvent", 'Float'>;
    readonly longitude: Prisma.FieldRef<"LockEvent", 'Float'>;
    readonly batteryLevel: Prisma.FieldRef<"LockEvent", 'Int'>;
    readonly signalLevel: Prisma.FieldRef<"LockEvent", 'Int'>;
    readonly rawPayload: Prisma.FieldRef<"LockEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"LockEvent", 'DateTime'>;
}
/**
 * LockEvent findUnique
 */
export type LockEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockEvent to fetch.
     */
    where: Prisma.LockEventWhereUniqueInput;
};
/**
 * LockEvent findUniqueOrThrow
 */
export type LockEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockEvent to fetch.
     */
    where: Prisma.LockEventWhereUniqueInput;
};
/**
 * LockEvent findFirst
 */
export type LockEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockEvent to fetch.
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockEvents to fetch.
     */
    orderBy?: Prisma.LockEventOrderByWithRelationInput | Prisma.LockEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockEvents.
     */
    cursor?: Prisma.LockEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockEvents.
     */
    distinct?: Prisma.LockEventScalarFieldEnum | Prisma.LockEventScalarFieldEnum[];
};
/**
 * LockEvent findFirstOrThrow
 */
export type LockEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockEvent to fetch.
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockEvents to fetch.
     */
    orderBy?: Prisma.LockEventOrderByWithRelationInput | Prisma.LockEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockEvents.
     */
    cursor?: Prisma.LockEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockEvents.
     */
    distinct?: Prisma.LockEventScalarFieldEnum | Prisma.LockEventScalarFieldEnum[];
};
/**
 * LockEvent findMany
 */
export type LockEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockEvents to fetch.
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockEvents to fetch.
     */
    orderBy?: Prisma.LockEventOrderByWithRelationInput | Prisma.LockEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockEvents.
     */
    cursor?: Prisma.LockEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockEvents.
     */
    distinct?: Prisma.LockEventScalarFieldEnum | Prisma.LockEventScalarFieldEnum[];
};
/**
 * LockEvent create
 */
export type LockEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LockEvent.
     */
    data: Prisma.XOR<Prisma.LockEventCreateInput, Prisma.LockEventUncheckedCreateInput>;
};
/**
 * LockEvent createMany
 */
export type LockEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LockEvents.
     */
    data: Prisma.LockEventCreateManyInput | Prisma.LockEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LockEvent createManyAndReturn
 */
export type LockEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockEvent
     */
    select?: Prisma.LockEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockEvent
     */
    omit?: Prisma.LockEventOmit<ExtArgs> | null;
    /**
     * The data used to create many LockEvents.
     */
    data: Prisma.LockEventCreateManyInput | Prisma.LockEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LockEvent update
 */
export type LockEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LockEvent.
     */
    data: Prisma.XOR<Prisma.LockEventUpdateInput, Prisma.LockEventUncheckedUpdateInput>;
    /**
     * Choose, which LockEvent to update.
     */
    where: Prisma.LockEventWhereUniqueInput;
};
/**
 * LockEvent updateMany
 */
export type LockEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LockEvents.
     */
    data: Prisma.XOR<Prisma.LockEventUpdateManyMutationInput, Prisma.LockEventUncheckedUpdateManyInput>;
    /**
     * Filter which LockEvents to update
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * Limit how many LockEvents to update.
     */
    limit?: number;
};
/**
 * LockEvent updateManyAndReturn
 */
export type LockEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockEvent
     */
    select?: Prisma.LockEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockEvent
     */
    omit?: Prisma.LockEventOmit<ExtArgs> | null;
    /**
     * The data used to update LockEvents.
     */
    data: Prisma.XOR<Prisma.LockEventUpdateManyMutationInput, Prisma.LockEventUncheckedUpdateManyInput>;
    /**
     * Filter which LockEvents to update
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * Limit how many LockEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LockEvent upsert
 */
export type LockEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LockEvent to update in case it exists.
     */
    where: Prisma.LockEventWhereUniqueInput;
    /**
     * In case the LockEvent found by the `where` argument doesn't exist, create a new LockEvent with this data.
     */
    create: Prisma.XOR<Prisma.LockEventCreateInput, Prisma.LockEventUncheckedCreateInput>;
    /**
     * In case the LockEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LockEventUpdateInput, Prisma.LockEventUncheckedUpdateInput>;
};
/**
 * LockEvent delete
 */
export type LockEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LockEvent to delete.
     */
    where: Prisma.LockEventWhereUniqueInput;
};
/**
 * LockEvent deleteMany
 */
export type LockEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockEvents to delete
     */
    where?: Prisma.LockEventWhereInput;
    /**
     * Limit how many LockEvents to delete.
     */
    limit?: number;
};
/**
 * LockEvent.User
 */
export type LockEvent$UserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * LockEvent without action
 */
export type LockEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LockEvent.d.ts.map