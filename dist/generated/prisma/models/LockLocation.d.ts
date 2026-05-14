import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LockLocation
 *
 */
export type LockLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$LockLocationPayload>;
export type AggregateLockLocation = {
    _count: LockLocationCountAggregateOutputType | null;
    _avg: LockLocationAvgAggregateOutputType | null;
    _sum: LockLocationSumAggregateOutputType | null;
    _min: LockLocationMinAggregateOutputType | null;
    _max: LockLocationMaxAggregateOutputType | null;
};
export type LockLocationAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    speed: number | null;
    heading: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockLocationSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    speed: number | null;
    heading: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
};
export type LockLocationMinAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    speed: number | null;
    heading: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    source: string | null;
    recordedAt: Date | null;
};
export type LockLocationMaxAggregateOutputType = {
    id: string | null;
    lockId: string | null;
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    speed: number | null;
    heading: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    source: string | null;
    recordedAt: Date | null;
};
export type LockLocationCountAggregateOutputType = {
    id: number;
    lockId: number;
    latitude: number;
    longitude: number;
    accuracy: number;
    speed: number;
    heading: number;
    batteryLevel: number;
    signalLevel: number;
    source: number;
    rawPayload: number;
    recordedAt: number;
    _all: number;
};
export type LockLocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    speed?: true;
    heading?: true;
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockLocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    speed?: true;
    heading?: true;
    batteryLevel?: true;
    signalLevel?: true;
};
export type LockLocationMinAggregateInputType = {
    id?: true;
    lockId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    speed?: true;
    heading?: true;
    batteryLevel?: true;
    signalLevel?: true;
    source?: true;
    recordedAt?: true;
};
export type LockLocationMaxAggregateInputType = {
    id?: true;
    lockId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    speed?: true;
    heading?: true;
    batteryLevel?: true;
    signalLevel?: true;
    source?: true;
    recordedAt?: true;
};
export type LockLocationCountAggregateInputType = {
    id?: true;
    lockId?: true;
    latitude?: true;
    longitude?: true;
    accuracy?: true;
    speed?: true;
    heading?: true;
    batteryLevel?: true;
    signalLevel?: true;
    source?: true;
    rawPayload?: true;
    recordedAt?: true;
    _all?: true;
};
export type LockLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockLocation to aggregate.
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockLocations to fetch.
     */
    orderBy?: Prisma.LockLocationOrderByWithRelationInput | Prisma.LockLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LockLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LockLocations
    **/
    _count?: true | LockLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LockLocationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LockLocationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LockLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LockLocationMaxAggregateInputType;
};
export type GetLockLocationAggregateType<T extends LockLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateLockLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLockLocation[P]> : Prisma.GetScalarType<T[P], AggregateLockLocation[P]>;
};
export type LockLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LockLocationWhereInput;
    orderBy?: Prisma.LockLocationOrderByWithAggregationInput | Prisma.LockLocationOrderByWithAggregationInput[];
    by: Prisma.LockLocationScalarFieldEnum[] | Prisma.LockLocationScalarFieldEnum;
    having?: Prisma.LockLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LockLocationCountAggregateInputType | true;
    _avg?: LockLocationAvgAggregateInputType;
    _sum?: LockLocationSumAggregateInputType;
    _min?: LockLocationMinAggregateInputType;
    _max?: LockLocationMaxAggregateInputType;
};
export type LockLocationGroupByOutputType = {
    id: string;
    lockId: string;
    latitude: number;
    longitude: number;
    accuracy: number | null;
    speed: number | null;
    heading: number | null;
    batteryLevel: number | null;
    signalLevel: number | null;
    source: string | null;
    rawPayload: runtime.JsonValue | null;
    recordedAt: Date;
    _count: LockLocationCountAggregateOutputType | null;
    _avg: LockLocationAvgAggregateOutputType | null;
    _sum: LockLocationSumAggregateOutputType | null;
    _min: LockLocationMinAggregateOutputType | null;
    _max: LockLocationMaxAggregateOutputType | null;
};
export type GetLockLocationGroupByPayload<T extends LockLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LockLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LockLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LockLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LockLocationGroupByOutputType[P]>;
}>>;
export type LockLocationWhereInput = {
    AND?: Prisma.LockLocationWhereInput | Prisma.LockLocationWhereInput[];
    OR?: Prisma.LockLocationWhereInput[];
    NOT?: Prisma.LockLocationWhereInput | Prisma.LockLocationWhereInput[];
    id?: Prisma.StringFilter<"LockLocation"> | string;
    lockId?: Prisma.StringFilter<"LockLocation"> | string;
    latitude?: Prisma.FloatFilter<"LockLocation"> | number;
    longitude?: Prisma.FloatFilter<"LockLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    speed?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    heading?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    source?: Prisma.StringNullableFilter<"LockLocation"> | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockLocation">;
    recordedAt?: Prisma.DateTimeFilter<"LockLocation"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
};
export type LockLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    Lock?: Prisma.LockOrderByWithRelationInput;
};
export type LockLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LockLocationWhereInput | Prisma.LockLocationWhereInput[];
    OR?: Prisma.LockLocationWhereInput[];
    NOT?: Prisma.LockLocationWhereInput | Prisma.LockLocationWhereInput[];
    lockId?: Prisma.StringFilter<"LockLocation"> | string;
    latitude?: Prisma.FloatFilter<"LockLocation"> | number;
    longitude?: Prisma.FloatFilter<"LockLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    speed?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    heading?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    source?: Prisma.StringNullableFilter<"LockLocation"> | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockLocation">;
    recordedAt?: Prisma.DateTimeFilter<"LockLocation"> | Date | string;
    Lock?: Prisma.XOR<Prisma.LockScalarRelationFilter, Prisma.LockWhereInput>;
}, "id">;
export type LockLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    _count?: Prisma.LockLocationCountOrderByAggregateInput;
    _avg?: Prisma.LockLocationAvgOrderByAggregateInput;
    _max?: Prisma.LockLocationMaxOrderByAggregateInput;
    _min?: Prisma.LockLocationMinOrderByAggregateInput;
    _sum?: Prisma.LockLocationSumOrderByAggregateInput;
};
export type LockLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.LockLocationScalarWhereWithAggregatesInput | Prisma.LockLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.LockLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LockLocationScalarWhereWithAggregatesInput | Prisma.LockLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LockLocation"> | string;
    lockId?: Prisma.StringWithAggregatesFilter<"LockLocation"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"LockLocation"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"LockLocation"> | number;
    accuracy?: Prisma.FloatNullableWithAggregatesFilter<"LockLocation"> | number | null;
    speed?: Prisma.FloatNullableWithAggregatesFilter<"LockLocation"> | number | null;
    heading?: Prisma.FloatNullableWithAggregatesFilter<"LockLocation"> | number | null;
    batteryLevel?: Prisma.IntNullableWithAggregatesFilter<"LockLocation"> | number | null;
    signalLevel?: Prisma.IntNullableWithAggregatesFilter<"LockLocation"> | number | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"LockLocation"> | string | null;
    rawPayload?: Prisma.JsonNullableWithAggregatesFilter<"LockLocation">;
    recordedAt?: Prisma.DateTimeWithAggregatesFilter<"LockLocation"> | Date | string;
};
export type LockLocationCreateInput = {
    id: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
    Lock: Prisma.LockCreateNestedOneWithoutLockLocationInput;
};
export type LockLocationUncheckedCreateInput = {
    id: string;
    lockId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
};
export type LockLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Lock?: Prisma.LockUpdateOneRequiredWithoutLockLocationNestedInput;
};
export type LockLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationCreateManyInput = {
    id: string;
    lockId: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
};
export type LockLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lockId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationListRelationFilter = {
    every?: Prisma.LockLocationWhereInput;
    some?: Prisma.LockLocationWhereInput;
    none?: Prisma.LockLocationWhereInput;
};
export type LockLocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LockLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LockLocationAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LockLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lockId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LockLocationSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalLevel?: Prisma.SortOrder;
};
export type LockLocationCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput> | Prisma.LockLocationCreateWithoutLockInput[] | Prisma.LockLocationUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockLocationCreateOrConnectWithoutLockInput | Prisma.LockLocationCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockLocationCreateManyLockInputEnvelope;
    connect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
};
export type LockLocationUncheckedCreateNestedManyWithoutLockInput = {
    create?: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput> | Prisma.LockLocationCreateWithoutLockInput[] | Prisma.LockLocationUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockLocationCreateOrConnectWithoutLockInput | Prisma.LockLocationCreateOrConnectWithoutLockInput[];
    createMany?: Prisma.LockLocationCreateManyLockInputEnvelope;
    connect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
};
export type LockLocationUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput> | Prisma.LockLocationCreateWithoutLockInput[] | Prisma.LockLocationUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockLocationCreateOrConnectWithoutLockInput | Prisma.LockLocationCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockLocationUpsertWithWhereUniqueWithoutLockInput | Prisma.LockLocationUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockLocationCreateManyLockInputEnvelope;
    set?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    disconnect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    delete?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    connect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    update?: Prisma.LockLocationUpdateWithWhereUniqueWithoutLockInput | Prisma.LockLocationUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockLocationUpdateManyWithWhereWithoutLockInput | Prisma.LockLocationUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockLocationScalarWhereInput | Prisma.LockLocationScalarWhereInput[];
};
export type LockLocationUncheckedUpdateManyWithoutLockNestedInput = {
    create?: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput> | Prisma.LockLocationCreateWithoutLockInput[] | Prisma.LockLocationUncheckedCreateWithoutLockInput[];
    connectOrCreate?: Prisma.LockLocationCreateOrConnectWithoutLockInput | Prisma.LockLocationCreateOrConnectWithoutLockInput[];
    upsert?: Prisma.LockLocationUpsertWithWhereUniqueWithoutLockInput | Prisma.LockLocationUpsertWithWhereUniqueWithoutLockInput[];
    createMany?: Prisma.LockLocationCreateManyLockInputEnvelope;
    set?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    disconnect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    delete?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    connect?: Prisma.LockLocationWhereUniqueInput | Prisma.LockLocationWhereUniqueInput[];
    update?: Prisma.LockLocationUpdateWithWhereUniqueWithoutLockInput | Prisma.LockLocationUpdateWithWhereUniqueWithoutLockInput[];
    updateMany?: Prisma.LockLocationUpdateManyWithWhereWithoutLockInput | Prisma.LockLocationUpdateManyWithWhereWithoutLockInput[];
    deleteMany?: Prisma.LockLocationScalarWhereInput | Prisma.LockLocationScalarWhereInput[];
};
export type LockLocationCreateWithoutLockInput = {
    id: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
};
export type LockLocationUncheckedCreateWithoutLockInput = {
    id: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
};
export type LockLocationCreateOrConnectWithoutLockInput = {
    where: Prisma.LockLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput>;
};
export type LockLocationCreateManyLockInputEnvelope = {
    data: Prisma.LockLocationCreateManyLockInput | Prisma.LockLocationCreateManyLockInput[];
    skipDuplicates?: boolean;
};
export type LockLocationUpsertWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockLocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LockLocationUpdateWithoutLockInput, Prisma.LockLocationUncheckedUpdateWithoutLockInput>;
    create: Prisma.XOR<Prisma.LockLocationCreateWithoutLockInput, Prisma.LockLocationUncheckedCreateWithoutLockInput>;
};
export type LockLocationUpdateWithWhereUniqueWithoutLockInput = {
    where: Prisma.LockLocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LockLocationUpdateWithoutLockInput, Prisma.LockLocationUncheckedUpdateWithoutLockInput>;
};
export type LockLocationUpdateManyWithWhereWithoutLockInput = {
    where: Prisma.LockLocationScalarWhereInput;
    data: Prisma.XOR<Prisma.LockLocationUpdateManyMutationInput, Prisma.LockLocationUncheckedUpdateManyWithoutLockInput>;
};
export type LockLocationScalarWhereInput = {
    AND?: Prisma.LockLocationScalarWhereInput | Prisma.LockLocationScalarWhereInput[];
    OR?: Prisma.LockLocationScalarWhereInput[];
    NOT?: Prisma.LockLocationScalarWhereInput | Prisma.LockLocationScalarWhereInput[];
    id?: Prisma.StringFilter<"LockLocation"> | string;
    lockId?: Prisma.StringFilter<"LockLocation"> | string;
    latitude?: Prisma.FloatFilter<"LockLocation"> | number;
    longitude?: Prisma.FloatFilter<"LockLocation"> | number;
    accuracy?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    speed?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    heading?: Prisma.FloatNullableFilter<"LockLocation"> | number | null;
    batteryLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    signalLevel?: Prisma.IntNullableFilter<"LockLocation"> | number | null;
    source?: Prisma.StringNullableFilter<"LockLocation"> | string | null;
    rawPayload?: Prisma.JsonNullableFilter<"LockLocation">;
    recordedAt?: Prisma.DateTimeFilter<"LockLocation"> | Date | string;
};
export type LockLocationCreateManyLockInput = {
    id: string;
    latitude: number;
    longitude: number;
    accuracy?: number | null;
    speed?: number | null;
    heading?: number | null;
    batteryLevel?: number | null;
    signalLevel?: number | null;
    source?: string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Date | string;
};
export type LockLocationUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationUncheckedUpdateWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationUncheckedUpdateManyWithoutLockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LockLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    speed?: boolean;
    heading?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    source?: boolean;
    rawPayload?: boolean;
    recordedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockLocation"]>;
export type LockLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    speed?: boolean;
    heading?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    source?: boolean;
    rawPayload?: boolean;
    recordedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockLocation"]>;
export type LockLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lockId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    speed?: boolean;
    heading?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    source?: boolean;
    rawPayload?: boolean;
    recordedAt?: boolean;
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lockLocation"]>;
export type LockLocationSelectScalar = {
    id?: boolean;
    lockId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    accuracy?: boolean;
    speed?: boolean;
    heading?: boolean;
    batteryLevel?: boolean;
    signalLevel?: boolean;
    source?: boolean;
    rawPayload?: boolean;
    recordedAt?: boolean;
};
export type LockLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lockId" | "latitude" | "longitude" | "accuracy" | "speed" | "heading" | "batteryLevel" | "signalLevel" | "source" | "rawPayload" | "recordedAt", ExtArgs["result"]["lockLocation"]>;
export type LockLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
};
export type LockLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
};
export type LockLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Lock?: boolean | Prisma.LockDefaultArgs<ExtArgs>;
};
export type $LockLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LockLocation";
    objects: {
        Lock: Prisma.$LockPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lockId: string;
        latitude: number;
        longitude: number;
        accuracy: number | null;
        speed: number | null;
        heading: number | null;
        batteryLevel: number | null;
        signalLevel: number | null;
        source: string | null;
        rawPayload: runtime.JsonValue | null;
        recordedAt: Date;
    }, ExtArgs["result"]["lockLocation"]>;
    composites: {};
};
export type LockLocationGetPayload<S extends boolean | null | undefined | LockLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LockLocationPayload, S>;
export type LockLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LockLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LockLocationCountAggregateInputType | true;
};
export interface LockLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LockLocation'];
        meta: {
            name: 'LockLocation';
        };
    };
    /**
     * Find zero or one LockLocation that matches the filter.
     * @param {LockLocationFindUniqueArgs} args - Arguments to find a LockLocation
     * @example
     * // Get one LockLocation
     * const lockLocation = await prisma.lockLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LockLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, LockLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LockLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LockLocationFindUniqueOrThrowArgs} args - Arguments to find a LockLocation
     * @example
     * // Get one LockLocation
     * const lockLocation = await prisma.lockLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LockLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LockLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationFindFirstArgs} args - Arguments to find a LockLocation
     * @example
     * // Get one LockLocation
     * const lockLocation = await prisma.lockLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LockLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, LockLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LockLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationFindFirstOrThrowArgs} args - Arguments to find a LockLocation
     * @example
     * // Get one LockLocation
     * const lockLocation = await prisma.lockLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LockLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LockLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LockLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LockLocations
     * const lockLocations = await prisma.lockLocation.findMany()
     *
     * // Get first 10 LockLocations
     * const lockLocations = await prisma.lockLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lockLocationWithIdOnly = await prisma.lockLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LockLocationFindManyArgs>(args?: Prisma.SelectSubset<T, LockLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LockLocation.
     * @param {LockLocationCreateArgs} args - Arguments to create a LockLocation.
     * @example
     * // Create one LockLocation
     * const LockLocation = await prisma.lockLocation.create({
     *   data: {
     *     // ... data to create a LockLocation
     *   }
     * })
     *
     */
    create<T extends LockLocationCreateArgs>(args: Prisma.SelectSubset<T, LockLocationCreateArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LockLocations.
     * @param {LockLocationCreateManyArgs} args - Arguments to create many LockLocations.
     * @example
     * // Create many LockLocations
     * const lockLocation = await prisma.lockLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LockLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, LockLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LockLocations and returns the data saved in the database.
     * @param {LockLocationCreateManyAndReturnArgs} args - Arguments to create many LockLocations.
     * @example
     * // Create many LockLocations
     * const lockLocation = await prisma.lockLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LockLocations and only return the `id`
     * const lockLocationWithIdOnly = await prisma.lockLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LockLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LockLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LockLocation.
     * @param {LockLocationDeleteArgs} args - Arguments to delete one LockLocation.
     * @example
     * // Delete one LockLocation
     * const LockLocation = await prisma.lockLocation.delete({
     *   where: {
     *     // ... filter to delete one LockLocation
     *   }
     * })
     *
     */
    delete<T extends LockLocationDeleteArgs>(args: Prisma.SelectSubset<T, LockLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LockLocation.
     * @param {LockLocationUpdateArgs} args - Arguments to update one LockLocation.
     * @example
     * // Update one LockLocation
     * const lockLocation = await prisma.lockLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LockLocationUpdateArgs>(args: Prisma.SelectSubset<T, LockLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LockLocations.
     * @param {LockLocationDeleteManyArgs} args - Arguments to filter LockLocations to delete.
     * @example
     * // Delete a few LockLocations
     * const { count } = await prisma.lockLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LockLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LockLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LockLocations
     * const lockLocation = await prisma.lockLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LockLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, LockLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LockLocations and returns the data updated in the database.
     * @param {LockLocationUpdateManyAndReturnArgs} args - Arguments to update many LockLocations.
     * @example
     * // Update many LockLocations
     * const lockLocation = await prisma.lockLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LockLocations and only return the `id`
     * const lockLocationWithIdOnly = await prisma.lockLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends LockLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LockLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LockLocation.
     * @param {LockLocationUpsertArgs} args - Arguments to update or create a LockLocation.
     * @example
     * // Update or create a LockLocation
     * const lockLocation = await prisma.lockLocation.upsert({
     *   create: {
     *     // ... data to create a LockLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LockLocation we want to update
     *   }
     * })
     */
    upsert<T extends LockLocationUpsertArgs>(args: Prisma.SelectSubset<T, LockLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__LockLocationClient<runtime.Types.Result.GetResult<Prisma.$LockLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LockLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationCountArgs} args - Arguments to filter LockLocations to count.
     * @example
     * // Count the number of LockLocations
     * const count = await prisma.lockLocation.count({
     *   where: {
     *     // ... the filter for the LockLocations we want to count
     *   }
     * })
    **/
    count<T extends LockLocationCountArgs>(args?: Prisma.Subset<T, LockLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LockLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LockLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LockLocationAggregateArgs>(args: Prisma.Subset<T, LockLocationAggregateArgs>): Prisma.PrismaPromise<GetLockLocationAggregateType<T>>;
    /**
     * Group by LockLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LockLocationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LockLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LockLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: LockLocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LockLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLockLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LockLocation model
     */
    readonly fields: LockLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LockLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LockLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Lock<T extends Prisma.LockDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LockDefaultArgs<ExtArgs>>): Prisma.Prisma__LockClient<runtime.Types.Result.GetResult<Prisma.$LockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LockLocation model
 */
export interface LockLocationFieldRefs {
    readonly id: Prisma.FieldRef<"LockLocation", 'String'>;
    readonly lockId: Prisma.FieldRef<"LockLocation", 'String'>;
    readonly latitude: Prisma.FieldRef<"LockLocation", 'Float'>;
    readonly longitude: Prisma.FieldRef<"LockLocation", 'Float'>;
    readonly accuracy: Prisma.FieldRef<"LockLocation", 'Float'>;
    readonly speed: Prisma.FieldRef<"LockLocation", 'Float'>;
    readonly heading: Prisma.FieldRef<"LockLocation", 'Float'>;
    readonly batteryLevel: Prisma.FieldRef<"LockLocation", 'Int'>;
    readonly signalLevel: Prisma.FieldRef<"LockLocation", 'Int'>;
    readonly source: Prisma.FieldRef<"LockLocation", 'String'>;
    readonly rawPayload: Prisma.FieldRef<"LockLocation", 'Json'>;
    readonly recordedAt: Prisma.FieldRef<"LockLocation", 'DateTime'>;
}
/**
 * LockLocation findUnique
 */
export type LockLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockLocation to fetch.
     */
    where: Prisma.LockLocationWhereUniqueInput;
};
/**
 * LockLocation findUniqueOrThrow
 */
export type LockLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockLocation to fetch.
     */
    where: Prisma.LockLocationWhereUniqueInput;
};
/**
 * LockLocation findFirst
 */
export type LockLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockLocation to fetch.
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockLocations to fetch.
     */
    orderBy?: Prisma.LockLocationOrderByWithRelationInput | Prisma.LockLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockLocations.
     */
    cursor?: Prisma.LockLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockLocations.
     */
    distinct?: Prisma.LockLocationScalarFieldEnum | Prisma.LockLocationScalarFieldEnum[];
};
/**
 * LockLocation findFirstOrThrow
 */
export type LockLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockLocation to fetch.
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockLocations to fetch.
     */
    orderBy?: Prisma.LockLocationOrderByWithRelationInput | Prisma.LockLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LockLocations.
     */
    cursor?: Prisma.LockLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockLocations.
     */
    distinct?: Prisma.LockLocationScalarFieldEnum | Prisma.LockLocationScalarFieldEnum[];
};
/**
 * LockLocation findMany
 */
export type LockLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LockLocations to fetch.
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LockLocations to fetch.
     */
    orderBy?: Prisma.LockLocationOrderByWithRelationInput | Prisma.LockLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LockLocations.
     */
    cursor?: Prisma.LockLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LockLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LockLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LockLocations.
     */
    distinct?: Prisma.LockLocationScalarFieldEnum | Prisma.LockLocationScalarFieldEnum[];
};
/**
 * LockLocation create
 */
export type LockLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LockLocation.
     */
    data: Prisma.XOR<Prisma.LockLocationCreateInput, Prisma.LockLocationUncheckedCreateInput>;
};
/**
 * LockLocation createMany
 */
export type LockLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LockLocations.
     */
    data: Prisma.LockLocationCreateManyInput | Prisma.LockLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LockLocation createManyAndReturn
 */
export type LockLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockLocation
     */
    select?: Prisma.LockLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockLocation
     */
    omit?: Prisma.LockLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many LockLocations.
     */
    data: Prisma.LockLocationCreateManyInput | Prisma.LockLocationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockLocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LockLocation update
 */
export type LockLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LockLocation.
     */
    data: Prisma.XOR<Prisma.LockLocationUpdateInput, Prisma.LockLocationUncheckedUpdateInput>;
    /**
     * Choose, which LockLocation to update.
     */
    where: Prisma.LockLocationWhereUniqueInput;
};
/**
 * LockLocation updateMany
 */
export type LockLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LockLocations.
     */
    data: Prisma.XOR<Prisma.LockLocationUpdateManyMutationInput, Prisma.LockLocationUncheckedUpdateManyInput>;
    /**
     * Filter which LockLocations to update
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * Limit how many LockLocations to update.
     */
    limit?: number;
};
/**
 * LockLocation updateManyAndReturn
 */
export type LockLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LockLocation
     */
    select?: Prisma.LockLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LockLocation
     */
    omit?: Prisma.LockLocationOmit<ExtArgs> | null;
    /**
     * The data used to update LockLocations.
     */
    data: Prisma.XOR<Prisma.LockLocationUpdateManyMutationInput, Prisma.LockLocationUncheckedUpdateManyInput>;
    /**
     * Filter which LockLocations to update
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * Limit how many LockLocations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LockLocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LockLocation upsert
 */
export type LockLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LockLocation to update in case it exists.
     */
    where: Prisma.LockLocationWhereUniqueInput;
    /**
     * In case the LockLocation found by the `where` argument doesn't exist, create a new LockLocation with this data.
     */
    create: Prisma.XOR<Prisma.LockLocationCreateInput, Prisma.LockLocationUncheckedCreateInput>;
    /**
     * In case the LockLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LockLocationUpdateInput, Prisma.LockLocationUncheckedUpdateInput>;
};
/**
 * LockLocation delete
 */
export type LockLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LockLocation to delete.
     */
    where: Prisma.LockLocationWhereUniqueInput;
};
/**
 * LockLocation deleteMany
 */
export type LockLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LockLocations to delete
     */
    where?: Prisma.LockLocationWhereInput;
    /**
     * Limit how many LockLocations to delete.
     */
    limit?: number;
};
/**
 * LockLocation without action
 */
export type LockLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LockLocation.d.ts.map