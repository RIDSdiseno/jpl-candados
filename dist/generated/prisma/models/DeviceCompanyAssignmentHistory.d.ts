import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceCompanyAssignmentHistory
 *
 */
export type DeviceCompanyAssignmentHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceCompanyAssignmentHistoryPayload>;
export type AggregateDeviceCompanyAssignmentHistory = {
    _count: DeviceCompanyAssignmentHistoryCountAggregateOutputType | null;
    _min: DeviceCompanyAssignmentHistoryMinAggregateOutputType | null;
    _max: DeviceCompanyAssignmentHistoryMaxAggregateOutputType | null;
};
export type DeviceCompanyAssignmentHistoryMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    fromCompanyId: string | null;
    toCompanyId: string | null;
    assignedById: string | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type DeviceCompanyAssignmentHistoryMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    fromCompanyId: string | null;
    toCompanyId: string | null;
    assignedById: string | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type DeviceCompanyAssignmentHistoryCountAggregateOutputType = {
    id: number;
    deviceId: number;
    fromCompanyId: number;
    toCompanyId: number;
    assignedById: number;
    remarks: number;
    createdAt: number;
    _all: number;
};
export type DeviceCompanyAssignmentHistoryMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    fromCompanyId?: true;
    toCompanyId?: true;
    assignedById?: true;
    remarks?: true;
    createdAt?: true;
};
export type DeviceCompanyAssignmentHistoryMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    fromCompanyId?: true;
    toCompanyId?: true;
    assignedById?: true;
    remarks?: true;
    createdAt?: true;
};
export type DeviceCompanyAssignmentHistoryCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    fromCompanyId?: true;
    toCompanyId?: true;
    assignedById?: true;
    remarks?: true;
    createdAt?: true;
    _all?: true;
};
export type DeviceCompanyAssignmentHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceCompanyAssignmentHistory to aggregate.
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceCompanyAssignmentHistories to fetch.
     */
    orderBy?: Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput | Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceCompanyAssignmentHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceCompanyAssignmentHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceCompanyAssignmentHistories
    **/
    _count?: true | DeviceCompanyAssignmentHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceCompanyAssignmentHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceCompanyAssignmentHistoryMaxAggregateInputType;
};
export type GetDeviceCompanyAssignmentHistoryAggregateType<T extends DeviceCompanyAssignmentHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceCompanyAssignmentHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceCompanyAssignmentHistory[P]> : Prisma.GetScalarType<T[P], AggregateDeviceCompanyAssignmentHistory[P]>;
};
export type DeviceCompanyAssignmentHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    orderBy?: Prisma.DeviceCompanyAssignmentHistoryOrderByWithAggregationInput | Prisma.DeviceCompanyAssignmentHistoryOrderByWithAggregationInput[];
    by: Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum[] | Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum;
    having?: Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCompanyAssignmentHistoryCountAggregateInputType | true;
    _min?: DeviceCompanyAssignmentHistoryMinAggregateInputType;
    _max?: DeviceCompanyAssignmentHistoryMaxAggregateInputType;
};
export type DeviceCompanyAssignmentHistoryGroupByOutputType = {
    id: string;
    deviceId: string;
    fromCompanyId: string | null;
    toCompanyId: string;
    assignedById: string | null;
    remarks: string | null;
    createdAt: Date;
    _count: DeviceCompanyAssignmentHistoryCountAggregateOutputType | null;
    _min: DeviceCompanyAssignmentHistoryMinAggregateOutputType | null;
    _max: DeviceCompanyAssignmentHistoryMaxAggregateOutputType | null;
};
export type GetDeviceCompanyAssignmentHistoryGroupByPayload<T extends DeviceCompanyAssignmentHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceCompanyAssignmentHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceCompanyAssignmentHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceCompanyAssignmentHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceCompanyAssignmentHistoryGroupByOutputType[P]>;
}>>;
export type DeviceCompanyAssignmentHistoryWhereInput = {
    AND?: Prisma.DeviceCompanyAssignmentHistoryWhereInput | Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    OR?: Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    NOT?: Prisma.DeviceCompanyAssignmentHistoryWhereInput | Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    id?: Prisma.StringFilter<"DeviceCompanyAssignmentHistory"> | string;
    deviceId?: Prisma.StringFilter<"DeviceCompanyAssignmentHistory"> | string;
    fromCompanyId?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    toCompanyId?: Prisma.StringFilter<"DeviceCompanyAssignmentHistory"> | string;
    assignedById?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    remarks?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceCompanyAssignmentHistory"> | Date | string;
};
export type DeviceCompanyAssignmentHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fromCompanyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toCompanyId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceCompanyAssignmentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceCompanyAssignmentHistoryWhereInput | Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    OR?: Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    NOT?: Prisma.DeviceCompanyAssignmentHistoryWhereInput | Prisma.DeviceCompanyAssignmentHistoryWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceCompanyAssignmentHistory"> | string;
    fromCompanyId?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    toCompanyId?: Prisma.StringFilter<"DeviceCompanyAssignmentHistory"> | string;
    assignedById?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    remarks?: Prisma.StringNullableFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceCompanyAssignmentHistory"> | Date | string;
}, "id">;
export type DeviceCompanyAssignmentHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fromCompanyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toCompanyId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceCompanyAssignmentHistoryCountOrderByAggregateInput;
    _max?: Prisma.DeviceCompanyAssignmentHistoryMaxOrderByAggregateInput;
    _min?: Prisma.DeviceCompanyAssignmentHistoryMinOrderByAggregateInput;
};
export type DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput | Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput | Prisma.DeviceCompanyAssignmentHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string;
    fromCompanyId?: Prisma.StringNullableWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    toCompanyId?: Prisma.StringWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string;
    assignedById?: Prisma.StringNullableWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceCompanyAssignmentHistory"> | Date | string;
};
export type DeviceCompanyAssignmentHistoryCreateInput = {
    id: string;
    deviceId: string;
    fromCompanyId?: string | null;
    toCompanyId: string;
    assignedById?: string | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type DeviceCompanyAssignmentHistoryUncheckedCreateInput = {
    id: string;
    deviceId: string;
    fromCompanyId?: string | null;
    toCompanyId: string;
    assignedById?: string | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type DeviceCompanyAssignmentHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromCompanyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toCompanyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCompanyAssignmentHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromCompanyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toCompanyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCompanyAssignmentHistoryCreateManyInput = {
    id: string;
    deviceId: string;
    fromCompanyId?: string | null;
    toCompanyId: string;
    assignedById?: string | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type DeviceCompanyAssignmentHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromCompanyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toCompanyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCompanyAssignmentHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromCompanyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toCompanyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCompanyAssignmentHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fromCompanyId?: Prisma.SortOrder;
    toCompanyId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceCompanyAssignmentHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fromCompanyId?: Prisma.SortOrder;
    toCompanyId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceCompanyAssignmentHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    fromCompanyId?: Prisma.SortOrder;
    toCompanyId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceCompanyAssignmentHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    fromCompanyId?: boolean;
    toCompanyId?: boolean;
    assignedById?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceCompanyAssignmentHistory"]>;
export type DeviceCompanyAssignmentHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    fromCompanyId?: boolean;
    toCompanyId?: boolean;
    assignedById?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceCompanyAssignmentHistory"]>;
export type DeviceCompanyAssignmentHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    fromCompanyId?: boolean;
    toCompanyId?: boolean;
    assignedById?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceCompanyAssignmentHistory"]>;
export type DeviceCompanyAssignmentHistorySelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    fromCompanyId?: boolean;
    toCompanyId?: boolean;
    assignedById?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
};
export type DeviceCompanyAssignmentHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "fromCompanyId" | "toCompanyId" | "assignedById" | "remarks" | "createdAt", ExtArgs["result"]["deviceCompanyAssignmentHistory"]>;
export type $DeviceCompanyAssignmentHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceCompanyAssignmentHistory";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        fromCompanyId: string | null;
        toCompanyId: string;
        assignedById: string | null;
        remarks: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["deviceCompanyAssignmentHistory"]>;
    composites: {};
};
export type DeviceCompanyAssignmentHistoryGetPayload<S extends boolean | null | undefined | DeviceCompanyAssignmentHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload, S>;
export type DeviceCompanyAssignmentHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceCompanyAssignmentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceCompanyAssignmentHistoryCountAggregateInputType | true;
};
export interface DeviceCompanyAssignmentHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceCompanyAssignmentHistory'];
        meta: {
            name: 'DeviceCompanyAssignmentHistory';
        };
    };
    /**
     * Find zero or one DeviceCompanyAssignmentHistory that matches the filter.
     * @param {DeviceCompanyAssignmentHistoryFindUniqueArgs} args - Arguments to find a DeviceCompanyAssignmentHistory
     * @example
     * // Get one DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceCompanyAssignmentHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceCompanyAssignmentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceCompanyAssignmentHistoryFindUniqueOrThrowArgs} args - Arguments to find a DeviceCompanyAssignmentHistory
     * @example
     * // Get one DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceCompanyAssignmentHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceCompanyAssignmentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryFindFirstArgs} args - Arguments to find a DeviceCompanyAssignmentHistory
     * @example
     * // Get one DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceCompanyAssignmentHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceCompanyAssignmentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryFindFirstOrThrowArgs} args - Arguments to find a DeviceCompanyAssignmentHistory
     * @example
     * // Get one DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceCompanyAssignmentHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceCompanyAssignmentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistories = await prisma.deviceCompanyAssignmentHistory.findMany()
     *
     * // Get first 10 DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistories = await prisma.deviceCompanyAssignmentHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceCompanyAssignmentHistoryWithIdOnly = await prisma.deviceCompanyAssignmentHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceCompanyAssignmentHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceCompanyAssignmentHistory.
     * @param {DeviceCompanyAssignmentHistoryCreateArgs} args - Arguments to create a DeviceCompanyAssignmentHistory.
     * @example
     * // Create one DeviceCompanyAssignmentHistory
     * const DeviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.create({
     *   data: {
     *     // ... data to create a DeviceCompanyAssignmentHistory
     *   }
     * })
     *
     */
    create<T extends DeviceCompanyAssignmentHistoryCreateArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceCompanyAssignmentHistories.
     * @param {DeviceCompanyAssignmentHistoryCreateManyArgs} args - Arguments to create many DeviceCompanyAssignmentHistories.
     * @example
     * // Create many DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceCompanyAssignmentHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceCompanyAssignmentHistories and returns the data saved in the database.
     * @param {DeviceCompanyAssignmentHistoryCreateManyAndReturnArgs} args - Arguments to create many DeviceCompanyAssignmentHistories.
     * @example
     * // Create many DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceCompanyAssignmentHistories and only return the `id`
     * const deviceCompanyAssignmentHistoryWithIdOnly = await prisma.deviceCompanyAssignmentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceCompanyAssignmentHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceCompanyAssignmentHistory.
     * @param {DeviceCompanyAssignmentHistoryDeleteArgs} args - Arguments to delete one DeviceCompanyAssignmentHistory.
     * @example
     * // Delete one DeviceCompanyAssignmentHistory
     * const DeviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.delete({
     *   where: {
     *     // ... filter to delete one DeviceCompanyAssignmentHistory
     *   }
     * })
     *
     */
    delete<T extends DeviceCompanyAssignmentHistoryDeleteArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceCompanyAssignmentHistory.
     * @param {DeviceCompanyAssignmentHistoryUpdateArgs} args - Arguments to update one DeviceCompanyAssignmentHistory.
     * @example
     * // Update one DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceCompanyAssignmentHistoryUpdateArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceCompanyAssignmentHistories.
     * @param {DeviceCompanyAssignmentHistoryDeleteManyArgs} args - Arguments to filter DeviceCompanyAssignmentHistories to delete.
     * @example
     * // Delete a few DeviceCompanyAssignmentHistories
     * const { count } = await prisma.deviceCompanyAssignmentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceCompanyAssignmentHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceCompanyAssignmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceCompanyAssignmentHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceCompanyAssignmentHistories and returns the data updated in the database.
     * @param {DeviceCompanyAssignmentHistoryUpdateManyAndReturnArgs} args - Arguments to update many DeviceCompanyAssignmentHistories.
     * @example
     * // Update many DeviceCompanyAssignmentHistories
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceCompanyAssignmentHistories and only return the `id`
     * const deviceCompanyAssignmentHistoryWithIdOnly = await prisma.deviceCompanyAssignmentHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceCompanyAssignmentHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceCompanyAssignmentHistory.
     * @param {DeviceCompanyAssignmentHistoryUpsertArgs} args - Arguments to update or create a DeviceCompanyAssignmentHistory.
     * @example
     * // Update or create a DeviceCompanyAssignmentHistory
     * const deviceCompanyAssignmentHistory = await prisma.deviceCompanyAssignmentHistory.upsert({
     *   create: {
     *     // ... data to create a DeviceCompanyAssignmentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceCompanyAssignmentHistory we want to update
     *   }
     * })
     */
    upsert<T extends DeviceCompanyAssignmentHistoryUpsertArgs>(args: Prisma.SelectSubset<T, DeviceCompanyAssignmentHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceCompanyAssignmentHistoryClient<runtime.Types.Result.GetResult<Prisma.$DeviceCompanyAssignmentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceCompanyAssignmentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryCountArgs} args - Arguments to filter DeviceCompanyAssignmentHistories to count.
     * @example
     * // Count the number of DeviceCompanyAssignmentHistories
     * const count = await prisma.deviceCompanyAssignmentHistory.count({
     *   where: {
     *     // ... the filter for the DeviceCompanyAssignmentHistories we want to count
     *   }
     * })
    **/
    count<T extends DeviceCompanyAssignmentHistoryCountArgs>(args?: Prisma.Subset<T, DeviceCompanyAssignmentHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceCompanyAssignmentHistoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceCompanyAssignmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceCompanyAssignmentHistoryAggregateArgs>(args: Prisma.Subset<T, DeviceCompanyAssignmentHistoryAggregateArgs>): Prisma.PrismaPromise<GetDeviceCompanyAssignmentHistoryAggregateType<T>>;
    /**
     * Group by DeviceCompanyAssignmentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCompanyAssignmentHistoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceCompanyAssignmentHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceCompanyAssignmentHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceCompanyAssignmentHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceCompanyAssignmentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceCompanyAssignmentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceCompanyAssignmentHistory model
     */
    readonly fields: DeviceCompanyAssignmentHistoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceCompanyAssignmentHistory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceCompanyAssignmentHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceCompanyAssignmentHistory model
 */
export interface DeviceCompanyAssignmentHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly fromCompanyId: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly toCompanyId: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly assignedById: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly remarks: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DeviceCompanyAssignmentHistory", 'DateTime'>;
}
/**
 * DeviceCompanyAssignmentHistory findUnique
 */
export type DeviceCompanyAssignmentHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceCompanyAssignmentHistory to fetch.
     */
    where: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
};
/**
 * DeviceCompanyAssignmentHistory findUniqueOrThrow
 */
export type DeviceCompanyAssignmentHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceCompanyAssignmentHistory to fetch.
     */
    where: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
};
/**
 * DeviceCompanyAssignmentHistory findFirst
 */
export type DeviceCompanyAssignmentHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceCompanyAssignmentHistory to fetch.
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceCompanyAssignmentHistories to fetch.
     */
    orderBy?: Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput | Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceCompanyAssignmentHistories.
     */
    cursor?: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceCompanyAssignmentHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceCompanyAssignmentHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceCompanyAssignmentHistories.
     */
    distinct?: Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum | Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum[];
};
/**
 * DeviceCompanyAssignmentHistory findFirstOrThrow
 */
export type DeviceCompanyAssignmentHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceCompanyAssignmentHistory to fetch.
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceCompanyAssignmentHistories to fetch.
     */
    orderBy?: Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput | Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceCompanyAssignmentHistories.
     */
    cursor?: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceCompanyAssignmentHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceCompanyAssignmentHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceCompanyAssignmentHistories.
     */
    distinct?: Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum | Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum[];
};
/**
 * DeviceCompanyAssignmentHistory findMany
 */
export type DeviceCompanyAssignmentHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceCompanyAssignmentHistories to fetch.
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceCompanyAssignmentHistories to fetch.
     */
    orderBy?: Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput | Prisma.DeviceCompanyAssignmentHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceCompanyAssignmentHistories.
     */
    cursor?: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceCompanyAssignmentHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceCompanyAssignmentHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceCompanyAssignmentHistories.
     */
    distinct?: Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum | Prisma.DeviceCompanyAssignmentHistoryScalarFieldEnum[];
};
/**
 * DeviceCompanyAssignmentHistory create
 */
export type DeviceCompanyAssignmentHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceCompanyAssignmentHistory.
     */
    data: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryCreateInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedCreateInput>;
};
/**
 * DeviceCompanyAssignmentHistory createMany
 */
export type DeviceCompanyAssignmentHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceCompanyAssignmentHistories.
     */
    data: Prisma.DeviceCompanyAssignmentHistoryCreateManyInput | Prisma.DeviceCompanyAssignmentHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceCompanyAssignmentHistory createManyAndReturn
 */
export type DeviceCompanyAssignmentHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceCompanyAssignmentHistories.
     */
    data: Prisma.DeviceCompanyAssignmentHistoryCreateManyInput | Prisma.DeviceCompanyAssignmentHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceCompanyAssignmentHistory update
 */
export type DeviceCompanyAssignmentHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceCompanyAssignmentHistory.
     */
    data: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryUpdateInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedUpdateInput>;
    /**
     * Choose, which DeviceCompanyAssignmentHistory to update.
     */
    where: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
};
/**
 * DeviceCompanyAssignmentHistory updateMany
 */
export type DeviceCompanyAssignmentHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceCompanyAssignmentHistories.
     */
    data: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryUpdateManyMutationInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceCompanyAssignmentHistories to update
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * Limit how many DeviceCompanyAssignmentHistories to update.
     */
    limit?: number;
};
/**
 * DeviceCompanyAssignmentHistory updateManyAndReturn
 */
export type DeviceCompanyAssignmentHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceCompanyAssignmentHistories.
     */
    data: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryUpdateManyMutationInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceCompanyAssignmentHistories to update
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * Limit how many DeviceCompanyAssignmentHistories to update.
     */
    limit?: number;
};
/**
 * DeviceCompanyAssignmentHistory upsert
 */
export type DeviceCompanyAssignmentHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceCompanyAssignmentHistory to update in case it exists.
     */
    where: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
    /**
     * In case the DeviceCompanyAssignmentHistory found by the `where` argument doesn't exist, create a new DeviceCompanyAssignmentHistory with this data.
     */
    create: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryCreateInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedCreateInput>;
    /**
     * In case the DeviceCompanyAssignmentHistory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceCompanyAssignmentHistoryUpdateInput, Prisma.DeviceCompanyAssignmentHistoryUncheckedUpdateInput>;
};
/**
 * DeviceCompanyAssignmentHistory delete
 */
export type DeviceCompanyAssignmentHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
    /**
     * Filter which DeviceCompanyAssignmentHistory to delete.
     */
    where: Prisma.DeviceCompanyAssignmentHistoryWhereUniqueInput;
};
/**
 * DeviceCompanyAssignmentHistory deleteMany
 */
export type DeviceCompanyAssignmentHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceCompanyAssignmentHistories to delete
     */
    where?: Prisma.DeviceCompanyAssignmentHistoryWhereInput;
    /**
     * Limit how many DeviceCompanyAssignmentHistories to delete.
     */
    limit?: number;
};
/**
 * DeviceCompanyAssignmentHistory without action
 */
export type DeviceCompanyAssignmentHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCompanyAssignmentHistory
     */
    select?: Prisma.DeviceCompanyAssignmentHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceCompanyAssignmentHistory
     */
    omit?: Prisma.DeviceCompanyAssignmentHistoryOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceCompanyAssignmentHistory.d.ts.map