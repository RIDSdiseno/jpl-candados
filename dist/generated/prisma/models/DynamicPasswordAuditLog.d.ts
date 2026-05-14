import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DynamicPasswordAuditLog
 *
 */
export type DynamicPasswordAuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$DynamicPasswordAuditLogPayload>;
export type AggregateDynamicPasswordAuditLog = {
    _count: DynamicPasswordAuditLogCountAggregateOutputType | null;
    _min: DynamicPasswordAuditLogMinAggregateOutputType | null;
    _max: DynamicPasswordAuditLogMaxAggregateOutputType | null;
};
export type DynamicPasswordAuditLogMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    viewedById: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    result: string | null;
    createdAt: Date | null;
};
export type DynamicPasswordAuditLogMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    viewedById: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    result: string | null;
    createdAt: Date | null;
};
export type DynamicPasswordAuditLogCountAggregateOutputType = {
    id: number;
    deviceId: number;
    viewedById: number;
    ipAddress: number;
    userAgent: number;
    result: number;
    createdAt: number;
    _all: number;
};
export type DynamicPasswordAuditLogMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    viewedById?: true;
    ipAddress?: true;
    userAgent?: true;
    result?: true;
    createdAt?: true;
};
export type DynamicPasswordAuditLogMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    viewedById?: true;
    ipAddress?: true;
    userAgent?: true;
    result?: true;
    createdAt?: true;
};
export type DynamicPasswordAuditLogCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    viewedById?: true;
    ipAddress?: true;
    userAgent?: true;
    result?: true;
    createdAt?: true;
    _all?: true;
};
export type DynamicPasswordAuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicPasswordAuditLog to aggregate.
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DynamicPasswordAuditLogs to fetch.
     */
    orderBy?: Prisma.DynamicPasswordAuditLogOrderByWithRelationInput | Prisma.DynamicPasswordAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DynamicPasswordAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DynamicPasswordAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DynamicPasswordAuditLogs
    **/
    _count?: true | DynamicPasswordAuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DynamicPasswordAuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DynamicPasswordAuditLogMaxAggregateInputType;
};
export type GetDynamicPasswordAuditLogAggregateType<T extends DynamicPasswordAuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateDynamicPasswordAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDynamicPasswordAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateDynamicPasswordAuditLog[P]>;
};
export type DynamicPasswordAuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    orderBy?: Prisma.DynamicPasswordAuditLogOrderByWithAggregationInput | Prisma.DynamicPasswordAuditLogOrderByWithAggregationInput[];
    by: Prisma.DynamicPasswordAuditLogScalarFieldEnum[] | Prisma.DynamicPasswordAuditLogScalarFieldEnum;
    having?: Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DynamicPasswordAuditLogCountAggregateInputType | true;
    _min?: DynamicPasswordAuditLogMinAggregateInputType;
    _max?: DynamicPasswordAuditLogMaxAggregateInputType;
};
export type DynamicPasswordAuditLogGroupByOutputType = {
    id: string;
    deviceId: string;
    viewedById: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    result: string;
    createdAt: Date;
    _count: DynamicPasswordAuditLogCountAggregateOutputType | null;
    _min: DynamicPasswordAuditLogMinAggregateOutputType | null;
    _max: DynamicPasswordAuditLogMaxAggregateOutputType | null;
};
export type GetDynamicPasswordAuditLogGroupByPayload<T extends DynamicPasswordAuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DynamicPasswordAuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DynamicPasswordAuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DynamicPasswordAuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DynamicPasswordAuditLogGroupByOutputType[P]>;
}>>;
export type DynamicPasswordAuditLogWhereInput = {
    AND?: Prisma.DynamicPasswordAuditLogWhereInput | Prisma.DynamicPasswordAuditLogWhereInput[];
    OR?: Prisma.DynamicPasswordAuditLogWhereInput[];
    NOT?: Prisma.DynamicPasswordAuditLogWhereInput | Prisma.DynamicPasswordAuditLogWhereInput[];
    id?: Prisma.StringFilter<"DynamicPasswordAuditLog"> | string;
    deviceId?: Prisma.StringFilter<"DynamicPasswordAuditLog"> | string;
    viewedById?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    ipAddress?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    result?: Prisma.StringFilter<"DynamicPasswordAuditLog"> | string;
    createdAt?: Prisma.DateTimeFilter<"DynamicPasswordAuditLog"> | Date | string;
};
export type DynamicPasswordAuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    viewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DynamicPasswordAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DynamicPasswordAuditLogWhereInput | Prisma.DynamicPasswordAuditLogWhereInput[];
    OR?: Prisma.DynamicPasswordAuditLogWhereInput[];
    NOT?: Prisma.DynamicPasswordAuditLogWhereInput | Prisma.DynamicPasswordAuditLogWhereInput[];
    deviceId?: Prisma.StringFilter<"DynamicPasswordAuditLog"> | string;
    viewedById?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    ipAddress?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"DynamicPasswordAuditLog"> | string | null;
    result?: Prisma.StringFilter<"DynamicPasswordAuditLog"> | string;
    createdAt?: Prisma.DateTimeFilter<"DynamicPasswordAuditLog"> | Date | string;
}, "id">;
export type DynamicPasswordAuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    viewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DynamicPasswordAuditLogCountOrderByAggregateInput;
    _max?: Prisma.DynamicPasswordAuditLogMaxOrderByAggregateInput;
    _min?: Prisma.DynamicPasswordAuditLogMinOrderByAggregateInput;
};
export type DynamicPasswordAuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput | Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput | Prisma.DynamicPasswordAuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DynamicPasswordAuditLog"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DynamicPasswordAuditLog"> | string;
    viewedById?: Prisma.StringNullableWithAggregatesFilter<"DynamicPasswordAuditLog"> | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"DynamicPasswordAuditLog"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"DynamicPasswordAuditLog"> | string | null;
    result?: Prisma.StringWithAggregatesFilter<"DynamicPasswordAuditLog"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DynamicPasswordAuditLog"> | Date | string;
};
export type DynamicPasswordAuditLogCreateInput = {
    id: string;
    deviceId: string;
    viewedById?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    result: string;
    createdAt?: Date | string;
};
export type DynamicPasswordAuditLogUncheckedCreateInput = {
    id: string;
    deviceId: string;
    viewedById?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    result: string;
    createdAt?: Date | string;
};
export type DynamicPasswordAuditLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DynamicPasswordAuditLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DynamicPasswordAuditLogCreateManyInput = {
    id: string;
    deviceId: string;
    viewedById?: string | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    result: string;
    createdAt?: Date | string;
};
export type DynamicPasswordAuditLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DynamicPasswordAuditLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DynamicPasswordAuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    viewedById?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DynamicPasswordAuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    viewedById?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DynamicPasswordAuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    viewedById?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DynamicPasswordAuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    viewedById?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dynamicPasswordAuditLog"]>;
export type DynamicPasswordAuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    viewedById?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dynamicPasswordAuditLog"]>;
export type DynamicPasswordAuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    viewedById?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dynamicPasswordAuditLog"]>;
export type DynamicPasswordAuditLogSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    viewedById?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    result?: boolean;
    createdAt?: boolean;
};
export type DynamicPasswordAuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "viewedById" | "ipAddress" | "userAgent" | "result" | "createdAt", ExtArgs["result"]["dynamicPasswordAuditLog"]>;
export type $DynamicPasswordAuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DynamicPasswordAuditLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        viewedById: string | null;
        ipAddress: string | null;
        userAgent: string | null;
        result: string;
        createdAt: Date;
    }, ExtArgs["result"]["dynamicPasswordAuditLog"]>;
    composites: {};
};
export type DynamicPasswordAuditLogGetPayload<S extends boolean | null | undefined | DynamicPasswordAuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload, S>;
export type DynamicPasswordAuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DynamicPasswordAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DynamicPasswordAuditLogCountAggregateInputType | true;
};
export interface DynamicPasswordAuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DynamicPasswordAuditLog'];
        meta: {
            name: 'DynamicPasswordAuditLog';
        };
    };
    /**
     * Find zero or one DynamicPasswordAuditLog that matches the filter.
     * @param {DynamicPasswordAuditLogFindUniqueArgs} args - Arguments to find a DynamicPasswordAuditLog
     * @example
     * // Get one DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DynamicPasswordAuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DynamicPasswordAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DynamicPasswordAuditLogFindUniqueOrThrowArgs} args - Arguments to find a DynamicPasswordAuditLog
     * @example
     * // Get one DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DynamicPasswordAuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DynamicPasswordAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogFindFirstArgs} args - Arguments to find a DynamicPasswordAuditLog
     * @example
     * // Get one DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DynamicPasswordAuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DynamicPasswordAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogFindFirstOrThrowArgs} args - Arguments to find a DynamicPasswordAuditLog
     * @example
     * // Get one DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DynamicPasswordAuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DynamicPasswordAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLogs = await prisma.dynamicPasswordAuditLog.findMany()
     *
     * // Get first 10 DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLogs = await prisma.dynamicPasswordAuditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dynamicPasswordAuditLogWithIdOnly = await prisma.dynamicPasswordAuditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DynamicPasswordAuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DynamicPasswordAuditLog.
     * @param {DynamicPasswordAuditLogCreateArgs} args - Arguments to create a DynamicPasswordAuditLog.
     * @example
     * // Create one DynamicPasswordAuditLog
     * const DynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.create({
     *   data: {
     *     // ... data to create a DynamicPasswordAuditLog
     *   }
     * })
     *
     */
    create<T extends DynamicPasswordAuditLogCreateArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DynamicPasswordAuditLogs.
     * @param {DynamicPasswordAuditLogCreateManyArgs} args - Arguments to create many DynamicPasswordAuditLogs.
     * @example
     * // Create many DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DynamicPasswordAuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DynamicPasswordAuditLogs and returns the data saved in the database.
     * @param {DynamicPasswordAuditLogCreateManyAndReturnArgs} args - Arguments to create many DynamicPasswordAuditLogs.
     * @example
     * // Create many DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DynamicPasswordAuditLogs and only return the `id`
     * const dynamicPasswordAuditLogWithIdOnly = await prisma.dynamicPasswordAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DynamicPasswordAuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DynamicPasswordAuditLog.
     * @param {DynamicPasswordAuditLogDeleteArgs} args - Arguments to delete one DynamicPasswordAuditLog.
     * @example
     * // Delete one DynamicPasswordAuditLog
     * const DynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.delete({
     *   where: {
     *     // ... filter to delete one DynamicPasswordAuditLog
     *   }
     * })
     *
     */
    delete<T extends DynamicPasswordAuditLogDeleteArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DynamicPasswordAuditLog.
     * @param {DynamicPasswordAuditLogUpdateArgs} args - Arguments to update one DynamicPasswordAuditLog.
     * @example
     * // Update one DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DynamicPasswordAuditLogUpdateArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DynamicPasswordAuditLogs.
     * @param {DynamicPasswordAuditLogDeleteManyArgs} args - Arguments to filter DynamicPasswordAuditLogs to delete.
     * @example
     * // Delete a few DynamicPasswordAuditLogs
     * const { count } = await prisma.dynamicPasswordAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DynamicPasswordAuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, DynamicPasswordAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DynamicPasswordAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DynamicPasswordAuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DynamicPasswordAuditLogs and returns the data updated in the database.
     * @param {DynamicPasswordAuditLogUpdateManyAndReturnArgs} args - Arguments to update many DynamicPasswordAuditLogs.
     * @example
     * // Update many DynamicPasswordAuditLogs
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DynamicPasswordAuditLogs and only return the `id`
     * const dynamicPasswordAuditLogWithIdOnly = await prisma.dynamicPasswordAuditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends DynamicPasswordAuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DynamicPasswordAuditLog.
     * @param {DynamicPasswordAuditLogUpsertArgs} args - Arguments to update or create a DynamicPasswordAuditLog.
     * @example
     * // Update or create a DynamicPasswordAuditLog
     * const dynamicPasswordAuditLog = await prisma.dynamicPasswordAuditLog.upsert({
     *   create: {
     *     // ... data to create a DynamicPasswordAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicPasswordAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends DynamicPasswordAuditLogUpsertArgs>(args: Prisma.SelectSubset<T, DynamicPasswordAuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__DynamicPasswordAuditLogClient<runtime.Types.Result.GetResult<Prisma.$DynamicPasswordAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DynamicPasswordAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogCountArgs} args - Arguments to filter DynamicPasswordAuditLogs to count.
     * @example
     * // Count the number of DynamicPasswordAuditLogs
     * const count = await prisma.dynamicPasswordAuditLog.count({
     *   where: {
     *     // ... the filter for the DynamicPasswordAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends DynamicPasswordAuditLogCountArgs>(args?: Prisma.Subset<T, DynamicPasswordAuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DynamicPasswordAuditLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DynamicPasswordAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DynamicPasswordAuditLogAggregateArgs>(args: Prisma.Subset<T, DynamicPasswordAuditLogAggregateArgs>): Prisma.PrismaPromise<GetDynamicPasswordAuditLogAggregateType<T>>;
    /**
     * Group by DynamicPasswordAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicPasswordAuditLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DynamicPasswordAuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DynamicPasswordAuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: DynamicPasswordAuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DynamicPasswordAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicPasswordAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DynamicPasswordAuditLog model
     */
    readonly fields: DynamicPasswordAuditLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DynamicPasswordAuditLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DynamicPasswordAuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DynamicPasswordAuditLog model
 */
export interface DynamicPasswordAuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly viewedById: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly ipAddress: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly userAgent: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly result: Prisma.FieldRef<"DynamicPasswordAuditLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DynamicPasswordAuditLog", 'DateTime'>;
}
/**
 * DynamicPasswordAuditLog findUnique
 */
export type DynamicPasswordAuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which DynamicPasswordAuditLog to fetch.
     */
    where: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
};
/**
 * DynamicPasswordAuditLog findUniqueOrThrow
 */
export type DynamicPasswordAuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which DynamicPasswordAuditLog to fetch.
     */
    where: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
};
/**
 * DynamicPasswordAuditLog findFirst
 */
export type DynamicPasswordAuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which DynamicPasswordAuditLog to fetch.
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DynamicPasswordAuditLogs to fetch.
     */
    orderBy?: Prisma.DynamicPasswordAuditLogOrderByWithRelationInput | Prisma.DynamicPasswordAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DynamicPasswordAuditLogs.
     */
    cursor?: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DynamicPasswordAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DynamicPasswordAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DynamicPasswordAuditLogs.
     */
    distinct?: Prisma.DynamicPasswordAuditLogScalarFieldEnum | Prisma.DynamicPasswordAuditLogScalarFieldEnum[];
};
/**
 * DynamicPasswordAuditLog findFirstOrThrow
 */
export type DynamicPasswordAuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which DynamicPasswordAuditLog to fetch.
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DynamicPasswordAuditLogs to fetch.
     */
    orderBy?: Prisma.DynamicPasswordAuditLogOrderByWithRelationInput | Prisma.DynamicPasswordAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DynamicPasswordAuditLogs.
     */
    cursor?: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DynamicPasswordAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DynamicPasswordAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DynamicPasswordAuditLogs.
     */
    distinct?: Prisma.DynamicPasswordAuditLogScalarFieldEnum | Prisma.DynamicPasswordAuditLogScalarFieldEnum[];
};
/**
 * DynamicPasswordAuditLog findMany
 */
export type DynamicPasswordAuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which DynamicPasswordAuditLogs to fetch.
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DynamicPasswordAuditLogs to fetch.
     */
    orderBy?: Prisma.DynamicPasswordAuditLogOrderByWithRelationInput | Prisma.DynamicPasswordAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DynamicPasswordAuditLogs.
     */
    cursor?: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DynamicPasswordAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DynamicPasswordAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DynamicPasswordAuditLogs.
     */
    distinct?: Prisma.DynamicPasswordAuditLogScalarFieldEnum | Prisma.DynamicPasswordAuditLogScalarFieldEnum[];
};
/**
 * DynamicPasswordAuditLog create
 */
export type DynamicPasswordAuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * The data needed to create a DynamicPasswordAuditLog.
     */
    data: Prisma.XOR<Prisma.DynamicPasswordAuditLogCreateInput, Prisma.DynamicPasswordAuditLogUncheckedCreateInput>;
};
/**
 * DynamicPasswordAuditLog createMany
 */
export type DynamicPasswordAuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicPasswordAuditLogs.
     */
    data: Prisma.DynamicPasswordAuditLogCreateManyInput | Prisma.DynamicPasswordAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DynamicPasswordAuditLog createManyAndReturn
 */
export type DynamicPasswordAuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to create many DynamicPasswordAuditLogs.
     */
    data: Prisma.DynamicPasswordAuditLogCreateManyInput | Prisma.DynamicPasswordAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DynamicPasswordAuditLog update
 */
export type DynamicPasswordAuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * The data needed to update a DynamicPasswordAuditLog.
     */
    data: Prisma.XOR<Prisma.DynamicPasswordAuditLogUpdateInput, Prisma.DynamicPasswordAuditLogUncheckedUpdateInput>;
    /**
     * Choose, which DynamicPasswordAuditLog to update.
     */
    where: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
};
/**
 * DynamicPasswordAuditLog updateMany
 */
export type DynamicPasswordAuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicPasswordAuditLogs.
     */
    data: Prisma.XOR<Prisma.DynamicPasswordAuditLogUpdateManyMutationInput, Prisma.DynamicPasswordAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which DynamicPasswordAuditLogs to update
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * Limit how many DynamicPasswordAuditLogs to update.
     */
    limit?: number;
};
/**
 * DynamicPasswordAuditLog updateManyAndReturn
 */
export type DynamicPasswordAuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to update DynamicPasswordAuditLogs.
     */
    data: Prisma.XOR<Prisma.DynamicPasswordAuditLogUpdateManyMutationInput, Prisma.DynamicPasswordAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which DynamicPasswordAuditLogs to update
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * Limit how many DynamicPasswordAuditLogs to update.
     */
    limit?: number;
};
/**
 * DynamicPasswordAuditLog upsert
 */
export type DynamicPasswordAuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * The filter to search for the DynamicPasswordAuditLog to update in case it exists.
     */
    where: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
    /**
     * In case the DynamicPasswordAuditLog found by the `where` argument doesn't exist, create a new DynamicPasswordAuditLog with this data.
     */
    create: Prisma.XOR<Prisma.DynamicPasswordAuditLogCreateInput, Prisma.DynamicPasswordAuditLogUncheckedCreateInput>;
    /**
     * In case the DynamicPasswordAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DynamicPasswordAuditLogUpdateInput, Prisma.DynamicPasswordAuditLogUncheckedUpdateInput>;
};
/**
 * DynamicPasswordAuditLog delete
 */
export type DynamicPasswordAuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
    /**
     * Filter which DynamicPasswordAuditLog to delete.
     */
    where: Prisma.DynamicPasswordAuditLogWhereUniqueInput;
};
/**
 * DynamicPasswordAuditLog deleteMany
 */
export type DynamicPasswordAuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicPasswordAuditLogs to delete
     */
    where?: Prisma.DynamicPasswordAuditLogWhereInput;
    /**
     * Limit how many DynamicPasswordAuditLogs to delete.
     */
    limit?: number;
};
/**
 * DynamicPasswordAuditLog without action
 */
export type DynamicPasswordAuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicPasswordAuditLog
     */
    select?: Prisma.DynamicPasswordAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DynamicPasswordAuditLog
     */
    omit?: Prisma.DynamicPasswordAuditLogOmit<ExtArgs> | null;
};
//# sourceMappingURL=DynamicPasswordAuditLog.d.ts.map