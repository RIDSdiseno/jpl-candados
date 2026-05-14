import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceParameterSnapshot
 *
 */
export type DeviceParameterSnapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceParameterSnapshotPayload>;
export type AggregateDeviceParameterSnapshot = {
    _count: DeviceParameterSnapshotCountAggregateOutputType | null;
    _min: DeviceParameterSnapshotMinAggregateOutputType | null;
    _max: DeviceParameterSnapshotMaxAggregateOutputType | null;
};
export type DeviceParameterSnapshotMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    category: string | null;
    readById: string | null;
    readAt: Date | null;
};
export type DeviceParameterSnapshotMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    category: string | null;
    readById: string | null;
    readAt: Date | null;
};
export type DeviceParameterSnapshotCountAggregateOutputType = {
    id: number;
    deviceId: number;
    category: number;
    parameters: number;
    readById: number;
    readAt: number;
    rawPayload: number;
    _all: number;
};
export type DeviceParameterSnapshotMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    category?: true;
    readById?: true;
    readAt?: true;
};
export type DeviceParameterSnapshotMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    category?: true;
    readById?: true;
    readAt?: true;
};
export type DeviceParameterSnapshotCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    category?: true;
    parameters?: true;
    readById?: true;
    readAt?: true;
    rawPayload?: true;
    _all?: true;
};
export type DeviceParameterSnapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceParameterSnapshot to aggregate.
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterSnapshots to fetch.
     */
    orderBy?: Prisma.DeviceParameterSnapshotOrderByWithRelationInput | Prisma.DeviceParameterSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceParameterSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceParameterSnapshots
    **/
    _count?: true | DeviceParameterSnapshotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceParameterSnapshotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceParameterSnapshotMaxAggregateInputType;
};
export type GetDeviceParameterSnapshotAggregateType<T extends DeviceParameterSnapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceParameterSnapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceParameterSnapshot[P]> : Prisma.GetScalarType<T[P], AggregateDeviceParameterSnapshot[P]>;
};
export type DeviceParameterSnapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    orderBy?: Prisma.DeviceParameterSnapshotOrderByWithAggregationInput | Prisma.DeviceParameterSnapshotOrderByWithAggregationInput[];
    by: Prisma.DeviceParameterSnapshotScalarFieldEnum[] | Prisma.DeviceParameterSnapshotScalarFieldEnum;
    having?: Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceParameterSnapshotCountAggregateInputType | true;
    _min?: DeviceParameterSnapshotMinAggregateInputType;
    _max?: DeviceParameterSnapshotMaxAggregateInputType;
};
export type DeviceParameterSnapshotGroupByOutputType = {
    id: string;
    deviceId: string;
    category: string;
    parameters: runtime.JsonValue;
    readById: string | null;
    readAt: Date;
    rawPayload: runtime.JsonValue | null;
    _count: DeviceParameterSnapshotCountAggregateOutputType | null;
    _min: DeviceParameterSnapshotMinAggregateOutputType | null;
    _max: DeviceParameterSnapshotMaxAggregateOutputType | null;
};
export type GetDeviceParameterSnapshotGroupByPayload<T extends DeviceParameterSnapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceParameterSnapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceParameterSnapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceParameterSnapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceParameterSnapshotGroupByOutputType[P]>;
}>>;
export type DeviceParameterSnapshotWhereInput = {
    AND?: Prisma.DeviceParameterSnapshotWhereInput | Prisma.DeviceParameterSnapshotWhereInput[];
    OR?: Prisma.DeviceParameterSnapshotWhereInput[];
    NOT?: Prisma.DeviceParameterSnapshotWhereInput | Prisma.DeviceParameterSnapshotWhereInput[];
    id?: Prisma.StringFilter<"DeviceParameterSnapshot"> | string;
    deviceId?: Prisma.StringFilter<"DeviceParameterSnapshot"> | string;
    category?: Prisma.StringFilter<"DeviceParameterSnapshot"> | string;
    parameters?: Prisma.JsonFilter<"DeviceParameterSnapshot">;
    readById?: Prisma.StringNullableFilter<"DeviceParameterSnapshot"> | string | null;
    readAt?: Prisma.DateTimeFilter<"DeviceParameterSnapshot"> | Date | string;
    rawPayload?: Prisma.JsonNullableFilter<"DeviceParameterSnapshot">;
};
export type DeviceParameterSnapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    readById?: Prisma.SortOrderInput | Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type DeviceParameterSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceParameterSnapshotWhereInput | Prisma.DeviceParameterSnapshotWhereInput[];
    OR?: Prisma.DeviceParameterSnapshotWhereInput[];
    NOT?: Prisma.DeviceParameterSnapshotWhereInput | Prisma.DeviceParameterSnapshotWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceParameterSnapshot"> | string;
    category?: Prisma.StringFilter<"DeviceParameterSnapshot"> | string;
    parameters?: Prisma.JsonFilter<"DeviceParameterSnapshot">;
    readById?: Prisma.StringNullableFilter<"DeviceParameterSnapshot"> | string | null;
    readAt?: Prisma.DateTimeFilter<"DeviceParameterSnapshot"> | Date | string;
    rawPayload?: Prisma.JsonNullableFilter<"DeviceParameterSnapshot">;
}, "id">;
export type DeviceParameterSnapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    readById?: Prisma.SortOrderInput | Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DeviceParameterSnapshotCountOrderByAggregateInput;
    _max?: Prisma.DeviceParameterSnapshotMaxOrderByAggregateInput;
    _min?: Prisma.DeviceParameterSnapshotMinOrderByAggregateInput;
};
export type DeviceParameterSnapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput | Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput | Prisma.DeviceParameterSnapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceParameterSnapshot"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceParameterSnapshot"> | string;
    category?: Prisma.StringWithAggregatesFilter<"DeviceParameterSnapshot"> | string;
    parameters?: Prisma.JsonWithAggregatesFilter<"DeviceParameterSnapshot">;
    readById?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterSnapshot"> | string | null;
    readAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceParameterSnapshot"> | Date | string;
    rawPayload?: Prisma.JsonNullableWithAggregatesFilter<"DeviceParameterSnapshot">;
};
export type DeviceParameterSnapshotCreateInput = {
    id: string;
    deviceId: string;
    category: string;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: string | null;
    readAt?: Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotUncheckedCreateInput = {
    id: string;
    deviceId: string;
    category: string;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: string | null;
    readAt?: Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotCreateManyInput = {
    id: string;
    deviceId: string;
    category: string;
    parameters: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: string | null;
    readAt?: Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    parameters?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    readById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rawPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type DeviceParameterSnapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    parameters?: Prisma.SortOrder;
    readById?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    rawPayload?: Prisma.SortOrder;
};
export type DeviceParameterSnapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    readById?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type DeviceParameterSnapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    readById?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type DeviceParameterSnapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    category?: boolean;
    parameters?: boolean;
    readById?: boolean;
    readAt?: boolean;
    rawPayload?: boolean;
}, ExtArgs["result"]["deviceParameterSnapshot"]>;
export type DeviceParameterSnapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    category?: boolean;
    parameters?: boolean;
    readById?: boolean;
    readAt?: boolean;
    rawPayload?: boolean;
}, ExtArgs["result"]["deviceParameterSnapshot"]>;
export type DeviceParameterSnapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    category?: boolean;
    parameters?: boolean;
    readById?: boolean;
    readAt?: boolean;
    rawPayload?: boolean;
}, ExtArgs["result"]["deviceParameterSnapshot"]>;
export type DeviceParameterSnapshotSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    category?: boolean;
    parameters?: boolean;
    readById?: boolean;
    readAt?: boolean;
    rawPayload?: boolean;
};
export type DeviceParameterSnapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "category" | "parameters" | "readById" | "readAt" | "rawPayload", ExtArgs["result"]["deviceParameterSnapshot"]>;
export type $DeviceParameterSnapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceParameterSnapshot";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        category: string;
        parameters: runtime.JsonValue;
        readById: string | null;
        readAt: Date;
        rawPayload: runtime.JsonValue | null;
    }, ExtArgs["result"]["deviceParameterSnapshot"]>;
    composites: {};
};
export type DeviceParameterSnapshotGetPayload<S extends boolean | null | undefined | DeviceParameterSnapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload, S>;
export type DeviceParameterSnapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceParameterSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceParameterSnapshotCountAggregateInputType | true;
};
export interface DeviceParameterSnapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceParameterSnapshot'];
        meta: {
            name: 'DeviceParameterSnapshot';
        };
    };
    /**
     * Find zero or one DeviceParameterSnapshot that matches the filter.
     * @param {DeviceParameterSnapshotFindUniqueArgs} args - Arguments to find a DeviceParameterSnapshot
     * @example
     * // Get one DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceParameterSnapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceParameterSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceParameterSnapshotFindUniqueOrThrowArgs} args - Arguments to find a DeviceParameterSnapshot
     * @example
     * // Get one DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceParameterSnapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceParameterSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotFindFirstArgs} args - Arguments to find a DeviceParameterSnapshot
     * @example
     * // Get one DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceParameterSnapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceParameterSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotFindFirstOrThrowArgs} args - Arguments to find a DeviceParameterSnapshot
     * @example
     * // Get one DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceParameterSnapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceParameterSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceParameterSnapshots
     * const deviceParameterSnapshots = await prisma.deviceParameterSnapshot.findMany()
     *
     * // Get first 10 DeviceParameterSnapshots
     * const deviceParameterSnapshots = await prisma.deviceParameterSnapshot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceParameterSnapshotWithIdOnly = await prisma.deviceParameterSnapshot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceParameterSnapshotFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceParameterSnapshot.
     * @param {DeviceParameterSnapshotCreateArgs} args - Arguments to create a DeviceParameterSnapshot.
     * @example
     * // Create one DeviceParameterSnapshot
     * const DeviceParameterSnapshot = await prisma.deviceParameterSnapshot.create({
     *   data: {
     *     // ... data to create a DeviceParameterSnapshot
     *   }
     * })
     *
     */
    create<T extends DeviceParameterSnapshotCreateArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceParameterSnapshots.
     * @param {DeviceParameterSnapshotCreateManyArgs} args - Arguments to create many DeviceParameterSnapshots.
     * @example
     * // Create many DeviceParameterSnapshots
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceParameterSnapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceParameterSnapshots and returns the data saved in the database.
     * @param {DeviceParameterSnapshotCreateManyAndReturnArgs} args - Arguments to create many DeviceParameterSnapshots.
     * @example
     * // Create many DeviceParameterSnapshots
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceParameterSnapshots and only return the `id`
     * const deviceParameterSnapshotWithIdOnly = await prisma.deviceParameterSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceParameterSnapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceParameterSnapshot.
     * @param {DeviceParameterSnapshotDeleteArgs} args - Arguments to delete one DeviceParameterSnapshot.
     * @example
     * // Delete one DeviceParameterSnapshot
     * const DeviceParameterSnapshot = await prisma.deviceParameterSnapshot.delete({
     *   where: {
     *     // ... filter to delete one DeviceParameterSnapshot
     *   }
     * })
     *
     */
    delete<T extends DeviceParameterSnapshotDeleteArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceParameterSnapshot.
     * @param {DeviceParameterSnapshotUpdateArgs} args - Arguments to update one DeviceParameterSnapshot.
     * @example
     * // Update one DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceParameterSnapshotUpdateArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceParameterSnapshots.
     * @param {DeviceParameterSnapshotDeleteManyArgs} args - Arguments to filter DeviceParameterSnapshots to delete.
     * @example
     * // Delete a few DeviceParameterSnapshots
     * const { count } = await prisma.deviceParameterSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceParameterSnapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceParameterSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceParameterSnapshots
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceParameterSnapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceParameterSnapshots and returns the data updated in the database.
     * @param {DeviceParameterSnapshotUpdateManyAndReturnArgs} args - Arguments to update many DeviceParameterSnapshots.
     * @example
     * // Update many DeviceParameterSnapshots
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceParameterSnapshots and only return the `id`
     * const deviceParameterSnapshotWithIdOnly = await prisma.deviceParameterSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceParameterSnapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceParameterSnapshot.
     * @param {DeviceParameterSnapshotUpsertArgs} args - Arguments to update or create a DeviceParameterSnapshot.
     * @example
     * // Update or create a DeviceParameterSnapshot
     * const deviceParameterSnapshot = await prisma.deviceParameterSnapshot.upsert({
     *   create: {
     *     // ... data to create a DeviceParameterSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceParameterSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends DeviceParameterSnapshotUpsertArgs>(args: Prisma.SelectSubset<T, DeviceParameterSnapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterSnapshotClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceParameterSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotCountArgs} args - Arguments to filter DeviceParameterSnapshots to count.
     * @example
     * // Count the number of DeviceParameterSnapshots
     * const count = await prisma.deviceParameterSnapshot.count({
     *   where: {
     *     // ... the filter for the DeviceParameterSnapshots we want to count
     *   }
     * })
    **/
    count<T extends DeviceParameterSnapshotCountArgs>(args?: Prisma.Subset<T, DeviceParameterSnapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceParameterSnapshotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceParameterSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceParameterSnapshotAggregateArgs>(args: Prisma.Subset<T, DeviceParameterSnapshotAggregateArgs>): Prisma.PrismaPromise<GetDeviceParameterSnapshotAggregateType<T>>;
    /**
     * Group by DeviceParameterSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterSnapshotGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceParameterSnapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceParameterSnapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceParameterSnapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceParameterSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceParameterSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceParameterSnapshot model
     */
    readonly fields: DeviceParameterSnapshotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceParameterSnapshot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceParameterSnapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the DeviceParameterSnapshot model
 */
export interface DeviceParameterSnapshotFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceParameterSnapshot", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceParameterSnapshot", 'String'>;
    readonly category: Prisma.FieldRef<"DeviceParameterSnapshot", 'String'>;
    readonly parameters: Prisma.FieldRef<"DeviceParameterSnapshot", 'Json'>;
    readonly readById: Prisma.FieldRef<"DeviceParameterSnapshot", 'String'>;
    readonly readAt: Prisma.FieldRef<"DeviceParameterSnapshot", 'DateTime'>;
    readonly rawPayload: Prisma.FieldRef<"DeviceParameterSnapshot", 'Json'>;
}
/**
 * DeviceParameterSnapshot findUnique
 */
export type DeviceParameterSnapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterSnapshot to fetch.
     */
    where: Prisma.DeviceParameterSnapshotWhereUniqueInput;
};
/**
 * DeviceParameterSnapshot findUniqueOrThrow
 */
export type DeviceParameterSnapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterSnapshot to fetch.
     */
    where: Prisma.DeviceParameterSnapshotWhereUniqueInput;
};
/**
 * DeviceParameterSnapshot findFirst
 */
export type DeviceParameterSnapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterSnapshot to fetch.
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterSnapshots to fetch.
     */
    orderBy?: Prisma.DeviceParameterSnapshotOrderByWithRelationInput | Prisma.DeviceParameterSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceParameterSnapshots.
     */
    cursor?: Prisma.DeviceParameterSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterSnapshots.
     */
    distinct?: Prisma.DeviceParameterSnapshotScalarFieldEnum | Prisma.DeviceParameterSnapshotScalarFieldEnum[];
};
/**
 * DeviceParameterSnapshot findFirstOrThrow
 */
export type DeviceParameterSnapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterSnapshot to fetch.
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterSnapshots to fetch.
     */
    orderBy?: Prisma.DeviceParameterSnapshotOrderByWithRelationInput | Prisma.DeviceParameterSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceParameterSnapshots.
     */
    cursor?: Prisma.DeviceParameterSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterSnapshots.
     */
    distinct?: Prisma.DeviceParameterSnapshotScalarFieldEnum | Prisma.DeviceParameterSnapshotScalarFieldEnum[];
};
/**
 * DeviceParameterSnapshot findMany
 */
export type DeviceParameterSnapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterSnapshots to fetch.
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterSnapshots to fetch.
     */
    orderBy?: Prisma.DeviceParameterSnapshotOrderByWithRelationInput | Prisma.DeviceParameterSnapshotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceParameterSnapshots.
     */
    cursor?: Prisma.DeviceParameterSnapshotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterSnapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterSnapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterSnapshots.
     */
    distinct?: Prisma.DeviceParameterSnapshotScalarFieldEnum | Prisma.DeviceParameterSnapshotScalarFieldEnum[];
};
/**
 * DeviceParameterSnapshot create
 */
export type DeviceParameterSnapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceParameterSnapshot.
     */
    data: Prisma.XOR<Prisma.DeviceParameterSnapshotCreateInput, Prisma.DeviceParameterSnapshotUncheckedCreateInput>;
};
/**
 * DeviceParameterSnapshot createMany
 */
export type DeviceParameterSnapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceParameterSnapshots.
     */
    data: Prisma.DeviceParameterSnapshotCreateManyInput | Prisma.DeviceParameterSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceParameterSnapshot createManyAndReturn
 */
export type DeviceParameterSnapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceParameterSnapshots.
     */
    data: Prisma.DeviceParameterSnapshotCreateManyInput | Prisma.DeviceParameterSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceParameterSnapshot update
 */
export type DeviceParameterSnapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceParameterSnapshot.
     */
    data: Prisma.XOR<Prisma.DeviceParameterSnapshotUpdateInput, Prisma.DeviceParameterSnapshotUncheckedUpdateInput>;
    /**
     * Choose, which DeviceParameterSnapshot to update.
     */
    where: Prisma.DeviceParameterSnapshotWhereUniqueInput;
};
/**
 * DeviceParameterSnapshot updateMany
 */
export type DeviceParameterSnapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceParameterSnapshots.
     */
    data: Prisma.XOR<Prisma.DeviceParameterSnapshotUpdateManyMutationInput, Prisma.DeviceParameterSnapshotUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceParameterSnapshots to update
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * Limit how many DeviceParameterSnapshots to update.
     */
    limit?: number;
};
/**
 * DeviceParameterSnapshot updateManyAndReturn
 */
export type DeviceParameterSnapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceParameterSnapshots.
     */
    data: Prisma.XOR<Prisma.DeviceParameterSnapshotUpdateManyMutationInput, Prisma.DeviceParameterSnapshotUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceParameterSnapshots to update
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * Limit how many DeviceParameterSnapshots to update.
     */
    limit?: number;
};
/**
 * DeviceParameterSnapshot upsert
 */
export type DeviceParameterSnapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceParameterSnapshot to update in case it exists.
     */
    where: Prisma.DeviceParameterSnapshotWhereUniqueInput;
    /**
     * In case the DeviceParameterSnapshot found by the `where` argument doesn't exist, create a new DeviceParameterSnapshot with this data.
     */
    create: Prisma.XOR<Prisma.DeviceParameterSnapshotCreateInput, Prisma.DeviceParameterSnapshotUncheckedCreateInput>;
    /**
     * In case the DeviceParameterSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceParameterSnapshotUpdateInput, Prisma.DeviceParameterSnapshotUncheckedUpdateInput>;
};
/**
 * DeviceParameterSnapshot delete
 */
export type DeviceParameterSnapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
    /**
     * Filter which DeviceParameterSnapshot to delete.
     */
    where: Prisma.DeviceParameterSnapshotWhereUniqueInput;
};
/**
 * DeviceParameterSnapshot deleteMany
 */
export type DeviceParameterSnapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceParameterSnapshots to delete
     */
    where?: Prisma.DeviceParameterSnapshotWhereInput;
    /**
     * Limit how many DeviceParameterSnapshots to delete.
     */
    limit?: number;
};
/**
 * DeviceParameterSnapshot without action
 */
export type DeviceParameterSnapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterSnapshot
     */
    select?: Prisma.DeviceParameterSnapshotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterSnapshot
     */
    omit?: Prisma.DeviceParameterSnapshotOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceParameterSnapshot.d.ts.map