import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceParameterChangeLog
 *
 */
export type DeviceParameterChangeLogModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceParameterChangeLogPayload>;
export type AggregateDeviceParameterChangeLog = {
    _count: DeviceParameterChangeLogCountAggregateOutputType | null;
    _min: DeviceParameterChangeLogMinAggregateOutputType | null;
    _max: DeviceParameterChangeLogMaxAggregateOutputType | null;
};
export type DeviceParameterChangeLogMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    parameterKey: string | null;
    oldValue: string | null;
    newValue: string | null;
    changedById: string | null;
    commandId: string | null;
    result: string | null;
    createdAt: Date | null;
};
export type DeviceParameterChangeLogMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    parameterKey: string | null;
    oldValue: string | null;
    newValue: string | null;
    changedById: string | null;
    commandId: string | null;
    result: string | null;
    createdAt: Date | null;
};
export type DeviceParameterChangeLogCountAggregateOutputType = {
    id: number;
    deviceId: number;
    parameterKey: number;
    oldValue: number;
    newValue: number;
    changedById: number;
    commandId: number;
    result: number;
    createdAt: number;
    _all: number;
};
export type DeviceParameterChangeLogMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    parameterKey?: true;
    oldValue?: true;
    newValue?: true;
    changedById?: true;
    commandId?: true;
    result?: true;
    createdAt?: true;
};
export type DeviceParameterChangeLogMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    parameterKey?: true;
    oldValue?: true;
    newValue?: true;
    changedById?: true;
    commandId?: true;
    result?: true;
    createdAt?: true;
};
export type DeviceParameterChangeLogCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    parameterKey?: true;
    oldValue?: true;
    newValue?: true;
    changedById?: true;
    commandId?: true;
    result?: true;
    createdAt?: true;
    _all?: true;
};
export type DeviceParameterChangeLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceParameterChangeLog to aggregate.
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterChangeLogs to fetch.
     */
    orderBy?: Prisma.DeviceParameterChangeLogOrderByWithRelationInput | Prisma.DeviceParameterChangeLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceParameterChangeLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterChangeLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterChangeLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceParameterChangeLogs
    **/
    _count?: true | DeviceParameterChangeLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceParameterChangeLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceParameterChangeLogMaxAggregateInputType;
};
export type GetDeviceParameterChangeLogAggregateType<T extends DeviceParameterChangeLogAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceParameterChangeLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceParameterChangeLog[P]> : Prisma.GetScalarType<T[P], AggregateDeviceParameterChangeLog[P]>;
};
export type DeviceParameterChangeLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    orderBy?: Prisma.DeviceParameterChangeLogOrderByWithAggregationInput | Prisma.DeviceParameterChangeLogOrderByWithAggregationInput[];
    by: Prisma.DeviceParameterChangeLogScalarFieldEnum[] | Prisma.DeviceParameterChangeLogScalarFieldEnum;
    having?: Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceParameterChangeLogCountAggregateInputType | true;
    _min?: DeviceParameterChangeLogMinAggregateInputType;
    _max?: DeviceParameterChangeLogMaxAggregateInputType;
};
export type DeviceParameterChangeLogGroupByOutputType = {
    id: string;
    deviceId: string;
    parameterKey: string;
    oldValue: string | null;
    newValue: string | null;
    changedById: string | null;
    commandId: string | null;
    result: string | null;
    createdAt: Date;
    _count: DeviceParameterChangeLogCountAggregateOutputType | null;
    _min: DeviceParameterChangeLogMinAggregateOutputType | null;
    _max: DeviceParameterChangeLogMaxAggregateOutputType | null;
};
export type GetDeviceParameterChangeLogGroupByPayload<T extends DeviceParameterChangeLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceParameterChangeLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceParameterChangeLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceParameterChangeLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceParameterChangeLogGroupByOutputType[P]>;
}>>;
export type DeviceParameterChangeLogWhereInput = {
    AND?: Prisma.DeviceParameterChangeLogWhereInput | Prisma.DeviceParameterChangeLogWhereInput[];
    OR?: Prisma.DeviceParameterChangeLogWhereInput[];
    NOT?: Prisma.DeviceParameterChangeLogWhereInput | Prisma.DeviceParameterChangeLogWhereInput[];
    id?: Prisma.StringFilter<"DeviceParameterChangeLog"> | string;
    deviceId?: Prisma.StringFilter<"DeviceParameterChangeLog"> | string;
    parameterKey?: Prisma.StringFilter<"DeviceParameterChangeLog"> | string;
    oldValue?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    newValue?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    changedById?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    commandId?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    result?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceParameterChangeLog"> | Date | string;
};
export type DeviceParameterChangeLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    parameterKey?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    commandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceParameterChangeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceParameterChangeLogWhereInput | Prisma.DeviceParameterChangeLogWhereInput[];
    OR?: Prisma.DeviceParameterChangeLogWhereInput[];
    NOT?: Prisma.DeviceParameterChangeLogWhereInput | Prisma.DeviceParameterChangeLogWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceParameterChangeLog"> | string;
    parameterKey?: Prisma.StringFilter<"DeviceParameterChangeLog"> | string;
    oldValue?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    newValue?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    changedById?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    commandId?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    result?: Prisma.StringNullableFilter<"DeviceParameterChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceParameterChangeLog"> | Date | string;
}, "id">;
export type DeviceParameterChangeLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    parameterKey?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    commandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceParameterChangeLogCountOrderByAggregateInput;
    _max?: Prisma.DeviceParameterChangeLogMaxOrderByAggregateInput;
    _min?: Prisma.DeviceParameterChangeLogMinOrderByAggregateInput;
};
export type DeviceParameterChangeLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput | Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput | Prisma.DeviceParameterChangeLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceParameterChangeLog"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceParameterChangeLog"> | string;
    parameterKey?: Prisma.StringWithAggregatesFilter<"DeviceParameterChangeLog"> | string;
    oldValue?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterChangeLog"> | string | null;
    newValue?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterChangeLog"> | string | null;
    changedById?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterChangeLog"> | string | null;
    commandId?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterChangeLog"> | string | null;
    result?: Prisma.StringNullableWithAggregatesFilter<"DeviceParameterChangeLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceParameterChangeLog"> | Date | string;
};
export type DeviceParameterChangeLogCreateInput = {
    id: string;
    deviceId: string;
    parameterKey: string;
    oldValue?: string | null;
    newValue?: string | null;
    changedById?: string | null;
    commandId?: string | null;
    result?: string | null;
    createdAt?: Date | string;
};
export type DeviceParameterChangeLogUncheckedCreateInput = {
    id: string;
    deviceId: string;
    parameterKey: string;
    oldValue?: string | null;
    newValue?: string | null;
    changedById?: string | null;
    commandId?: string | null;
    result?: string | null;
    createdAt?: Date | string;
};
export type DeviceParameterChangeLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    parameterKey?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceParameterChangeLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    parameterKey?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceParameterChangeLogCreateManyInput = {
    id: string;
    deviceId: string;
    parameterKey: string;
    oldValue?: string | null;
    newValue?: string | null;
    changedById?: string | null;
    commandId?: string | null;
    result?: string | null;
    createdAt?: Date | string;
};
export type DeviceParameterChangeLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    parameterKey?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceParameterChangeLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    parameterKey?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceParameterChangeLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    parameterKey?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceParameterChangeLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    parameterKey?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceParameterChangeLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    parameterKey?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceParameterChangeLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    parameterKey?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    changedById?: boolean;
    commandId?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceParameterChangeLog"]>;
export type DeviceParameterChangeLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    parameterKey?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    changedById?: boolean;
    commandId?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceParameterChangeLog"]>;
export type DeviceParameterChangeLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    parameterKey?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    changedById?: boolean;
    commandId?: boolean;
    result?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceParameterChangeLog"]>;
export type DeviceParameterChangeLogSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    parameterKey?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    changedById?: boolean;
    commandId?: boolean;
    result?: boolean;
    createdAt?: boolean;
};
export type DeviceParameterChangeLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "parameterKey" | "oldValue" | "newValue" | "changedById" | "commandId" | "result" | "createdAt", ExtArgs["result"]["deviceParameterChangeLog"]>;
export type $DeviceParameterChangeLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceParameterChangeLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        parameterKey: string;
        oldValue: string | null;
        newValue: string | null;
        changedById: string | null;
        commandId: string | null;
        result: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["deviceParameterChangeLog"]>;
    composites: {};
};
export type DeviceParameterChangeLogGetPayload<S extends boolean | null | undefined | DeviceParameterChangeLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload, S>;
export type DeviceParameterChangeLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceParameterChangeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceParameterChangeLogCountAggregateInputType | true;
};
export interface DeviceParameterChangeLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceParameterChangeLog'];
        meta: {
            name: 'DeviceParameterChangeLog';
        };
    };
    /**
     * Find zero or one DeviceParameterChangeLog that matches the filter.
     * @param {DeviceParameterChangeLogFindUniqueArgs} args - Arguments to find a DeviceParameterChangeLog
     * @example
     * // Get one DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceParameterChangeLogFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceParameterChangeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceParameterChangeLogFindUniqueOrThrowArgs} args - Arguments to find a DeviceParameterChangeLog
     * @example
     * // Get one DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceParameterChangeLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceParameterChangeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogFindFirstArgs} args - Arguments to find a DeviceParameterChangeLog
     * @example
     * // Get one DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceParameterChangeLogFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceParameterChangeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogFindFirstOrThrowArgs} args - Arguments to find a DeviceParameterChangeLog
     * @example
     * // Get one DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceParameterChangeLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceParameterChangeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceParameterChangeLogs
     * const deviceParameterChangeLogs = await prisma.deviceParameterChangeLog.findMany()
     *
     * // Get first 10 DeviceParameterChangeLogs
     * const deviceParameterChangeLogs = await prisma.deviceParameterChangeLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceParameterChangeLogWithIdOnly = await prisma.deviceParameterChangeLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceParameterChangeLogFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceParameterChangeLog.
     * @param {DeviceParameterChangeLogCreateArgs} args - Arguments to create a DeviceParameterChangeLog.
     * @example
     * // Create one DeviceParameterChangeLog
     * const DeviceParameterChangeLog = await prisma.deviceParameterChangeLog.create({
     *   data: {
     *     // ... data to create a DeviceParameterChangeLog
     *   }
     * })
     *
     */
    create<T extends DeviceParameterChangeLogCreateArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceParameterChangeLogs.
     * @param {DeviceParameterChangeLogCreateManyArgs} args - Arguments to create many DeviceParameterChangeLogs.
     * @example
     * // Create many DeviceParameterChangeLogs
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceParameterChangeLogCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceParameterChangeLogs and returns the data saved in the database.
     * @param {DeviceParameterChangeLogCreateManyAndReturnArgs} args - Arguments to create many DeviceParameterChangeLogs.
     * @example
     * // Create many DeviceParameterChangeLogs
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceParameterChangeLogs and only return the `id`
     * const deviceParameterChangeLogWithIdOnly = await prisma.deviceParameterChangeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceParameterChangeLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceParameterChangeLog.
     * @param {DeviceParameterChangeLogDeleteArgs} args - Arguments to delete one DeviceParameterChangeLog.
     * @example
     * // Delete one DeviceParameterChangeLog
     * const DeviceParameterChangeLog = await prisma.deviceParameterChangeLog.delete({
     *   where: {
     *     // ... filter to delete one DeviceParameterChangeLog
     *   }
     * })
     *
     */
    delete<T extends DeviceParameterChangeLogDeleteArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceParameterChangeLog.
     * @param {DeviceParameterChangeLogUpdateArgs} args - Arguments to update one DeviceParameterChangeLog.
     * @example
     * // Update one DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceParameterChangeLogUpdateArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceParameterChangeLogs.
     * @param {DeviceParameterChangeLogDeleteManyArgs} args - Arguments to filter DeviceParameterChangeLogs to delete.
     * @example
     * // Delete a few DeviceParameterChangeLogs
     * const { count } = await prisma.deviceParameterChangeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceParameterChangeLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceParameterChangeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceParameterChangeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceParameterChangeLogs
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceParameterChangeLogUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceParameterChangeLogs and returns the data updated in the database.
     * @param {DeviceParameterChangeLogUpdateManyAndReturnArgs} args - Arguments to update many DeviceParameterChangeLogs.
     * @example
     * // Update many DeviceParameterChangeLogs
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceParameterChangeLogs and only return the `id`
     * const deviceParameterChangeLogWithIdOnly = await prisma.deviceParameterChangeLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceParameterChangeLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceParameterChangeLog.
     * @param {DeviceParameterChangeLogUpsertArgs} args - Arguments to update or create a DeviceParameterChangeLog.
     * @example
     * // Update or create a DeviceParameterChangeLog
     * const deviceParameterChangeLog = await prisma.deviceParameterChangeLog.upsert({
     *   create: {
     *     // ... data to create a DeviceParameterChangeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceParameterChangeLog we want to update
     *   }
     * })
     */
    upsert<T extends DeviceParameterChangeLogUpsertArgs>(args: Prisma.SelectSubset<T, DeviceParameterChangeLogUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceParameterChangeLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceParameterChangeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceParameterChangeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogCountArgs} args - Arguments to filter DeviceParameterChangeLogs to count.
     * @example
     * // Count the number of DeviceParameterChangeLogs
     * const count = await prisma.deviceParameterChangeLog.count({
     *   where: {
     *     // ... the filter for the DeviceParameterChangeLogs we want to count
     *   }
     * })
    **/
    count<T extends DeviceParameterChangeLogCountArgs>(args?: Prisma.Subset<T, DeviceParameterChangeLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceParameterChangeLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceParameterChangeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceParameterChangeLogAggregateArgs>(args: Prisma.Subset<T, DeviceParameterChangeLogAggregateArgs>): Prisma.PrismaPromise<GetDeviceParameterChangeLogAggregateType<T>>;
    /**
     * Group by DeviceParameterChangeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceParameterChangeLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceParameterChangeLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceParameterChangeLogGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceParameterChangeLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceParameterChangeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceParameterChangeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceParameterChangeLog model
     */
    readonly fields: DeviceParameterChangeLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceParameterChangeLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceParameterChangeLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceParameterChangeLog model
 */
export interface DeviceParameterChangeLogFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly parameterKey: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly oldValue: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly newValue: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly changedById: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly commandId: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly result: Prisma.FieldRef<"DeviceParameterChangeLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DeviceParameterChangeLog", 'DateTime'>;
}
/**
 * DeviceParameterChangeLog findUnique
 */
export type DeviceParameterChangeLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterChangeLog to fetch.
     */
    where: Prisma.DeviceParameterChangeLogWhereUniqueInput;
};
/**
 * DeviceParameterChangeLog findUniqueOrThrow
 */
export type DeviceParameterChangeLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterChangeLog to fetch.
     */
    where: Prisma.DeviceParameterChangeLogWhereUniqueInput;
};
/**
 * DeviceParameterChangeLog findFirst
 */
export type DeviceParameterChangeLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterChangeLog to fetch.
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterChangeLogs to fetch.
     */
    orderBy?: Prisma.DeviceParameterChangeLogOrderByWithRelationInput | Prisma.DeviceParameterChangeLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceParameterChangeLogs.
     */
    cursor?: Prisma.DeviceParameterChangeLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterChangeLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterChangeLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterChangeLogs.
     */
    distinct?: Prisma.DeviceParameterChangeLogScalarFieldEnum | Prisma.DeviceParameterChangeLogScalarFieldEnum[];
};
/**
 * DeviceParameterChangeLog findFirstOrThrow
 */
export type DeviceParameterChangeLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterChangeLog to fetch.
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterChangeLogs to fetch.
     */
    orderBy?: Prisma.DeviceParameterChangeLogOrderByWithRelationInput | Prisma.DeviceParameterChangeLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceParameterChangeLogs.
     */
    cursor?: Prisma.DeviceParameterChangeLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterChangeLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterChangeLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterChangeLogs.
     */
    distinct?: Prisma.DeviceParameterChangeLogScalarFieldEnum | Prisma.DeviceParameterChangeLogScalarFieldEnum[];
};
/**
 * DeviceParameterChangeLog findMany
 */
export type DeviceParameterChangeLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceParameterChangeLogs to fetch.
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceParameterChangeLogs to fetch.
     */
    orderBy?: Prisma.DeviceParameterChangeLogOrderByWithRelationInput | Prisma.DeviceParameterChangeLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceParameterChangeLogs.
     */
    cursor?: Prisma.DeviceParameterChangeLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceParameterChangeLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceParameterChangeLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceParameterChangeLogs.
     */
    distinct?: Prisma.DeviceParameterChangeLogScalarFieldEnum | Prisma.DeviceParameterChangeLogScalarFieldEnum[];
};
/**
 * DeviceParameterChangeLog create
 */
export type DeviceParameterChangeLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceParameterChangeLog.
     */
    data: Prisma.XOR<Prisma.DeviceParameterChangeLogCreateInput, Prisma.DeviceParameterChangeLogUncheckedCreateInput>;
};
/**
 * DeviceParameterChangeLog createMany
 */
export type DeviceParameterChangeLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceParameterChangeLogs.
     */
    data: Prisma.DeviceParameterChangeLogCreateManyInput | Prisma.DeviceParameterChangeLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceParameterChangeLog createManyAndReturn
 */
export type DeviceParameterChangeLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceParameterChangeLogs.
     */
    data: Prisma.DeviceParameterChangeLogCreateManyInput | Prisma.DeviceParameterChangeLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceParameterChangeLog update
 */
export type DeviceParameterChangeLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceParameterChangeLog.
     */
    data: Prisma.XOR<Prisma.DeviceParameterChangeLogUpdateInput, Prisma.DeviceParameterChangeLogUncheckedUpdateInput>;
    /**
     * Choose, which DeviceParameterChangeLog to update.
     */
    where: Prisma.DeviceParameterChangeLogWhereUniqueInput;
};
/**
 * DeviceParameterChangeLog updateMany
 */
export type DeviceParameterChangeLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceParameterChangeLogs.
     */
    data: Prisma.XOR<Prisma.DeviceParameterChangeLogUpdateManyMutationInput, Prisma.DeviceParameterChangeLogUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceParameterChangeLogs to update
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * Limit how many DeviceParameterChangeLogs to update.
     */
    limit?: number;
};
/**
 * DeviceParameterChangeLog updateManyAndReturn
 */
export type DeviceParameterChangeLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceParameterChangeLogs.
     */
    data: Prisma.XOR<Prisma.DeviceParameterChangeLogUpdateManyMutationInput, Prisma.DeviceParameterChangeLogUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceParameterChangeLogs to update
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * Limit how many DeviceParameterChangeLogs to update.
     */
    limit?: number;
};
/**
 * DeviceParameterChangeLog upsert
 */
export type DeviceParameterChangeLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceParameterChangeLog to update in case it exists.
     */
    where: Prisma.DeviceParameterChangeLogWhereUniqueInput;
    /**
     * In case the DeviceParameterChangeLog found by the `where` argument doesn't exist, create a new DeviceParameterChangeLog with this data.
     */
    create: Prisma.XOR<Prisma.DeviceParameterChangeLogCreateInput, Prisma.DeviceParameterChangeLogUncheckedCreateInput>;
    /**
     * In case the DeviceParameterChangeLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceParameterChangeLogUpdateInput, Prisma.DeviceParameterChangeLogUncheckedUpdateInput>;
};
/**
 * DeviceParameterChangeLog delete
 */
export type DeviceParameterChangeLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
    /**
     * Filter which DeviceParameterChangeLog to delete.
     */
    where: Prisma.DeviceParameterChangeLogWhereUniqueInput;
};
/**
 * DeviceParameterChangeLog deleteMany
 */
export type DeviceParameterChangeLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceParameterChangeLogs to delete
     */
    where?: Prisma.DeviceParameterChangeLogWhereInput;
    /**
     * Limit how many DeviceParameterChangeLogs to delete.
     */
    limit?: number;
};
/**
 * DeviceParameterChangeLog without action
 */
export type DeviceParameterChangeLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceParameterChangeLog
     */
    select?: Prisma.DeviceParameterChangeLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceParameterChangeLog
     */
    omit?: Prisma.DeviceParameterChangeLogOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceParameterChangeLog.d.ts.map