import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MonitoringAuditLog
 *
 */
export type MonitoringAuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$MonitoringAuditLogPayload>;
export type AggregateMonitoringAuditLog = {
    _count: MonitoringAuditLogCountAggregateOutputType | null;
    _min: MonitoringAuditLogMinAggregateOutputType | null;
    _max: MonitoringAuditLogMaxAggregateOutputType | null;
};
export type MonitoringAuditLogMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    action: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type MonitoringAuditLogMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    action: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type MonitoringAuditLogCountAggregateOutputType = {
    id: number;
    userId: number;
    deviceId: number;
    action: number;
    description: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type MonitoringAuditLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    action?: true;
    description?: true;
    createdAt?: true;
};
export type MonitoringAuditLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    action?: true;
    description?: true;
    createdAt?: true;
};
export type MonitoringAuditLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    action?: true;
    description?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type MonitoringAuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringAuditLog to aggregate.
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonitoringAuditLogs to fetch.
     */
    orderBy?: Prisma.MonitoringAuditLogOrderByWithRelationInput | Prisma.MonitoringAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MonitoringAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonitoringAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonitoringAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MonitoringAuditLogs
    **/
    _count?: true | MonitoringAuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringAuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringAuditLogMaxAggregateInputType;
};
export type GetMonitoringAuditLogAggregateType<T extends MonitoringAuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateMonitoringAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMonitoringAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateMonitoringAuditLog[P]>;
};
export type MonitoringAuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoringAuditLogWhereInput;
    orderBy?: Prisma.MonitoringAuditLogOrderByWithAggregationInput | Prisma.MonitoringAuditLogOrderByWithAggregationInput[];
    by: Prisma.MonitoringAuditLogScalarFieldEnum[] | Prisma.MonitoringAuditLogScalarFieldEnum;
    having?: Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MonitoringAuditLogCountAggregateInputType | true;
    _min?: MonitoringAuditLogMinAggregateInputType;
    _max?: MonitoringAuditLogMaxAggregateInputType;
};
export type MonitoringAuditLogGroupByOutputType = {
    id: string;
    userId: string | null;
    deviceId: string | null;
    action: string;
    description: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: MonitoringAuditLogCountAggregateOutputType | null;
    _min: MonitoringAuditLogMinAggregateOutputType | null;
    _max: MonitoringAuditLogMaxAggregateOutputType | null;
};
export type GetMonitoringAuditLogGroupByPayload<T extends MonitoringAuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MonitoringAuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MonitoringAuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MonitoringAuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MonitoringAuditLogGroupByOutputType[P]>;
}>>;
export type MonitoringAuditLogWhereInput = {
    AND?: Prisma.MonitoringAuditLogWhereInput | Prisma.MonitoringAuditLogWhereInput[];
    OR?: Prisma.MonitoringAuditLogWhereInput[];
    NOT?: Prisma.MonitoringAuditLogWhereInput | Prisma.MonitoringAuditLogWhereInput[];
    id?: Prisma.StringFilter<"MonitoringAuditLog"> | string;
    userId?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    deviceId?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    action?: Prisma.StringFilter<"MonitoringAuditLog"> | string;
    description?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"MonitoringAuditLog">;
    createdAt?: Prisma.DateTimeFilter<"MonitoringAuditLog"> | Date | string;
};
export type MonitoringAuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MonitoringAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MonitoringAuditLogWhereInput | Prisma.MonitoringAuditLogWhereInput[];
    OR?: Prisma.MonitoringAuditLogWhereInput[];
    NOT?: Prisma.MonitoringAuditLogWhereInput | Prisma.MonitoringAuditLogWhereInput[];
    userId?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    deviceId?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    action?: Prisma.StringFilter<"MonitoringAuditLog"> | string;
    description?: Prisma.StringNullableFilter<"MonitoringAuditLog"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"MonitoringAuditLog">;
    createdAt?: Prisma.DateTimeFilter<"MonitoringAuditLog"> | Date | string;
}, "id">;
export type MonitoringAuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MonitoringAuditLogCountOrderByAggregateInput;
    _max?: Prisma.MonitoringAuditLogMaxOrderByAggregateInput;
    _min?: Prisma.MonitoringAuditLogMinOrderByAggregateInput;
};
export type MonitoringAuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput | Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput | Prisma.MonitoringAuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MonitoringAuditLog"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"MonitoringAuditLog"> | string | null;
    deviceId?: Prisma.StringNullableWithAggregatesFilter<"MonitoringAuditLog"> | string | null;
    action?: Prisma.StringWithAggregatesFilter<"MonitoringAuditLog"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"MonitoringAuditLog"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"MonitoringAuditLog">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MonitoringAuditLog"> | Date | string;
};
export type MonitoringAuditLogCreateInput = {
    id: string;
    userId?: string | null;
    deviceId?: string | null;
    action: string;
    description?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MonitoringAuditLogUncheckedCreateInput = {
    id: string;
    userId?: string | null;
    deviceId?: string | null;
    action: string;
    description?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MonitoringAuditLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoringAuditLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoringAuditLogCreateManyInput = {
    id: string;
    userId?: string | null;
    deviceId?: string | null;
    action: string;
    description?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MonitoringAuditLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoringAuditLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoringAuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MonitoringAuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MonitoringAuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MonitoringAuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    action?: boolean;
    description?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["monitoringAuditLog"]>;
export type MonitoringAuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    action?: boolean;
    description?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["monitoringAuditLog"]>;
export type MonitoringAuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    action?: boolean;
    description?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["monitoringAuditLog"]>;
export type MonitoringAuditLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    action?: boolean;
    description?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type MonitoringAuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "deviceId" | "action" | "description" | "metadata" | "createdAt", ExtArgs["result"]["monitoringAuditLog"]>;
export type $MonitoringAuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MonitoringAuditLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        deviceId: string | null;
        action: string;
        description: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["monitoringAuditLog"]>;
    composites: {};
};
export type MonitoringAuditLogGetPayload<S extends boolean | null | undefined | MonitoringAuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload, S>;
export type MonitoringAuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MonitoringAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MonitoringAuditLogCountAggregateInputType | true;
};
export interface MonitoringAuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MonitoringAuditLog'];
        meta: {
            name: 'MonitoringAuditLog';
        };
    };
    /**
     * Find zero or one MonitoringAuditLog that matches the filter.
     * @param {MonitoringAuditLogFindUniqueArgs} args - Arguments to find a MonitoringAuditLog
     * @example
     * // Get one MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringAuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MonitoringAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitoringAuditLogFindUniqueOrThrowArgs} args - Arguments to find a MonitoringAuditLog
     * @example
     * // Get one MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringAuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MonitoringAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogFindFirstArgs} args - Arguments to find a MonitoringAuditLog
     * @example
     * // Get one MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringAuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MonitoringAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogFindFirstOrThrowArgs} args - Arguments to find a MonitoringAuditLog
     * @example
     * // Get one MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringAuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MonitoringAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringAuditLogs
     * const monitoringAuditLogs = await prisma.monitoringAuditLog.findMany()
     *
     * // Get first 10 MonitoringAuditLogs
     * const monitoringAuditLogs = await prisma.monitoringAuditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const monitoringAuditLogWithIdOnly = await prisma.monitoringAuditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MonitoringAuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MonitoringAuditLog.
     * @param {MonitoringAuditLogCreateArgs} args - Arguments to create a MonitoringAuditLog.
     * @example
     * // Create one MonitoringAuditLog
     * const MonitoringAuditLog = await prisma.monitoringAuditLog.create({
     *   data: {
     *     // ... data to create a MonitoringAuditLog
     *   }
     * })
     *
     */
    create<T extends MonitoringAuditLogCreateArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MonitoringAuditLogs.
     * @param {MonitoringAuditLogCreateManyArgs} args - Arguments to create many MonitoringAuditLogs.
     * @example
     * // Create many MonitoringAuditLogs
     * const monitoringAuditLog = await prisma.monitoringAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MonitoringAuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MonitoringAuditLogs and returns the data saved in the database.
     * @param {MonitoringAuditLogCreateManyAndReturnArgs} args - Arguments to create many MonitoringAuditLogs.
     * @example
     * // Create many MonitoringAuditLogs
     * const monitoringAuditLog = await prisma.monitoringAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MonitoringAuditLogs and only return the `id`
     * const monitoringAuditLogWithIdOnly = await prisma.monitoringAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MonitoringAuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MonitoringAuditLog.
     * @param {MonitoringAuditLogDeleteArgs} args - Arguments to delete one MonitoringAuditLog.
     * @example
     * // Delete one MonitoringAuditLog
     * const MonitoringAuditLog = await prisma.monitoringAuditLog.delete({
     *   where: {
     *     // ... filter to delete one MonitoringAuditLog
     *   }
     * })
     *
     */
    delete<T extends MonitoringAuditLogDeleteArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MonitoringAuditLog.
     * @param {MonitoringAuditLogUpdateArgs} args - Arguments to update one MonitoringAuditLog.
     * @example
     * // Update one MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MonitoringAuditLogUpdateArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MonitoringAuditLogs.
     * @param {MonitoringAuditLogDeleteManyArgs} args - Arguments to filter MonitoringAuditLogs to delete.
     * @example
     * // Delete a few MonitoringAuditLogs
     * const { count } = await prisma.monitoringAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MonitoringAuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, MonitoringAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MonitoringAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringAuditLogs
     * const monitoringAuditLog = await prisma.monitoringAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MonitoringAuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MonitoringAuditLogs and returns the data updated in the database.
     * @param {MonitoringAuditLogUpdateManyAndReturnArgs} args - Arguments to update many MonitoringAuditLogs.
     * @example
     * // Update many MonitoringAuditLogs
     * const monitoringAuditLog = await prisma.monitoringAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MonitoringAuditLogs and only return the `id`
     * const monitoringAuditLogWithIdOnly = await prisma.monitoringAuditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonitoringAuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MonitoringAuditLog.
     * @param {MonitoringAuditLogUpsertArgs} args - Arguments to update or create a MonitoringAuditLog.
     * @example
     * // Update or create a MonitoringAuditLog
     * const monitoringAuditLog = await prisma.monitoringAuditLog.upsert({
     *   create: {
     *     // ... data to create a MonitoringAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringAuditLogUpsertArgs>(args: Prisma.SelectSubset<T, MonitoringAuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__MonitoringAuditLogClient<runtime.Types.Result.GetResult<Prisma.$MonitoringAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MonitoringAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogCountArgs} args - Arguments to filter MonitoringAuditLogs to count.
     * @example
     * // Count the number of MonitoringAuditLogs
     * const count = await prisma.monitoringAuditLog.count({
     *   where: {
     *     // ... the filter for the MonitoringAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends MonitoringAuditLogCountArgs>(args?: Prisma.Subset<T, MonitoringAuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MonitoringAuditLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MonitoringAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonitoringAuditLogAggregateArgs>(args: Prisma.Subset<T, MonitoringAuditLogAggregateArgs>): Prisma.PrismaPromise<GetMonitoringAuditLogAggregateType<T>>;
    /**
     * Group by MonitoringAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAuditLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MonitoringAuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MonitoringAuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: MonitoringAuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MonitoringAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MonitoringAuditLog model
     */
    readonly fields: MonitoringAuditLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MonitoringAuditLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MonitoringAuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MonitoringAuditLog model
 */
export interface MonitoringAuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"MonitoringAuditLog", 'String'>;
    readonly userId: Prisma.FieldRef<"MonitoringAuditLog", 'String'>;
    readonly deviceId: Prisma.FieldRef<"MonitoringAuditLog", 'String'>;
    readonly action: Prisma.FieldRef<"MonitoringAuditLog", 'String'>;
    readonly description: Prisma.FieldRef<"MonitoringAuditLog", 'String'>;
    readonly metadata: Prisma.FieldRef<"MonitoringAuditLog", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"MonitoringAuditLog", 'DateTime'>;
}
/**
 * MonitoringAuditLog findUnique
 */
export type MonitoringAuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which MonitoringAuditLog to fetch.
     */
    where: Prisma.MonitoringAuditLogWhereUniqueInput;
};
/**
 * MonitoringAuditLog findUniqueOrThrow
 */
export type MonitoringAuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which MonitoringAuditLog to fetch.
     */
    where: Prisma.MonitoringAuditLogWhereUniqueInput;
};
/**
 * MonitoringAuditLog findFirst
 */
export type MonitoringAuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which MonitoringAuditLog to fetch.
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonitoringAuditLogs to fetch.
     */
    orderBy?: Prisma.MonitoringAuditLogOrderByWithRelationInput | Prisma.MonitoringAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MonitoringAuditLogs.
     */
    cursor?: Prisma.MonitoringAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonitoringAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonitoringAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonitoringAuditLogs.
     */
    distinct?: Prisma.MonitoringAuditLogScalarFieldEnum | Prisma.MonitoringAuditLogScalarFieldEnum[];
};
/**
 * MonitoringAuditLog findFirstOrThrow
 */
export type MonitoringAuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which MonitoringAuditLog to fetch.
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonitoringAuditLogs to fetch.
     */
    orderBy?: Prisma.MonitoringAuditLogOrderByWithRelationInput | Prisma.MonitoringAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MonitoringAuditLogs.
     */
    cursor?: Prisma.MonitoringAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonitoringAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonitoringAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonitoringAuditLogs.
     */
    distinct?: Prisma.MonitoringAuditLogScalarFieldEnum | Prisma.MonitoringAuditLogScalarFieldEnum[];
};
/**
 * MonitoringAuditLog findMany
 */
export type MonitoringAuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter, which MonitoringAuditLogs to fetch.
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonitoringAuditLogs to fetch.
     */
    orderBy?: Prisma.MonitoringAuditLogOrderByWithRelationInput | Prisma.MonitoringAuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MonitoringAuditLogs.
     */
    cursor?: Prisma.MonitoringAuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonitoringAuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonitoringAuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonitoringAuditLogs.
     */
    distinct?: Prisma.MonitoringAuditLogScalarFieldEnum | Prisma.MonitoringAuditLogScalarFieldEnum[];
};
/**
 * MonitoringAuditLog create
 */
export type MonitoringAuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * The data needed to create a MonitoringAuditLog.
     */
    data: Prisma.XOR<Prisma.MonitoringAuditLogCreateInput, Prisma.MonitoringAuditLogUncheckedCreateInput>;
};
/**
 * MonitoringAuditLog createMany
 */
export type MonitoringAuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringAuditLogs.
     */
    data: Prisma.MonitoringAuditLogCreateManyInput | Prisma.MonitoringAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MonitoringAuditLog createManyAndReturn
 */
export type MonitoringAuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to create many MonitoringAuditLogs.
     */
    data: Prisma.MonitoringAuditLogCreateManyInput | Prisma.MonitoringAuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MonitoringAuditLog update
 */
export type MonitoringAuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * The data needed to update a MonitoringAuditLog.
     */
    data: Prisma.XOR<Prisma.MonitoringAuditLogUpdateInput, Prisma.MonitoringAuditLogUncheckedUpdateInput>;
    /**
     * Choose, which MonitoringAuditLog to update.
     */
    where: Prisma.MonitoringAuditLogWhereUniqueInput;
};
/**
 * MonitoringAuditLog updateMany
 */
export type MonitoringAuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringAuditLogs.
     */
    data: Prisma.XOR<Prisma.MonitoringAuditLogUpdateManyMutationInput, Prisma.MonitoringAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which MonitoringAuditLogs to update
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * Limit how many MonitoringAuditLogs to update.
     */
    limit?: number;
};
/**
 * MonitoringAuditLog updateManyAndReturn
 */
export type MonitoringAuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * The data used to update MonitoringAuditLogs.
     */
    data: Prisma.XOR<Prisma.MonitoringAuditLogUpdateManyMutationInput, Prisma.MonitoringAuditLogUncheckedUpdateManyInput>;
    /**
     * Filter which MonitoringAuditLogs to update
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * Limit how many MonitoringAuditLogs to update.
     */
    limit?: number;
};
/**
 * MonitoringAuditLog upsert
 */
export type MonitoringAuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * The filter to search for the MonitoringAuditLog to update in case it exists.
     */
    where: Prisma.MonitoringAuditLogWhereUniqueInput;
    /**
     * In case the MonitoringAuditLog found by the `where` argument doesn't exist, create a new MonitoringAuditLog with this data.
     */
    create: Prisma.XOR<Prisma.MonitoringAuditLogCreateInput, Prisma.MonitoringAuditLogUncheckedCreateInput>;
    /**
     * In case the MonitoringAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MonitoringAuditLogUpdateInput, Prisma.MonitoringAuditLogUncheckedUpdateInput>;
};
/**
 * MonitoringAuditLog delete
 */
export type MonitoringAuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
    /**
     * Filter which MonitoringAuditLog to delete.
     */
    where: Prisma.MonitoringAuditLogWhereUniqueInput;
};
/**
 * MonitoringAuditLog deleteMany
 */
export type MonitoringAuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringAuditLogs to delete
     */
    where?: Prisma.MonitoringAuditLogWhereInput;
    /**
     * Limit how many MonitoringAuditLogs to delete.
     */
    limit?: number;
};
/**
 * MonitoringAuditLog without action
 */
export type MonitoringAuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringAuditLog
     */
    select?: Prisma.MonitoringAuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringAuditLog
     */
    omit?: Prisma.MonitoringAuditLogOmit<ExtArgs> | null;
};
//# sourceMappingURL=MonitoringAuditLog.d.ts.map