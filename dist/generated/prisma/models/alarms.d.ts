import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model alarms
 *
 */
export type alarmsModel = runtime.Types.Result.DefaultSelection<Prisma.$alarmsPayload>;
export type AggregateAlarms = {
    _count: AlarmsCountAggregateOutputType | null;
    _avg: AlarmsAvgAggregateOutputType | null;
    _sum: AlarmsSumAggregateOutputType | null;
    _min: AlarmsMinAggregateOutputType | null;
    _max: AlarmsMaxAggregateOutputType | null;
};
export type AlarmsAvgAggregateOutputType = {
    id: number | null;
};
export type AlarmsSumAggregateOutputType = {
    id: number | null;
};
export type AlarmsMinAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    alarm_type: string | null;
    active: boolean | null;
    created_at: Date | null;
};
export type AlarmsMaxAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    alarm_type: string | null;
    active: boolean | null;
    created_at: Date | null;
};
export type AlarmsCountAggregateOutputType = {
    id: number;
    terminal_id: number;
    alarm_type: number;
    active: number;
    created_at: number;
    _all: number;
};
export type AlarmsAvgAggregateInputType = {
    id?: true;
};
export type AlarmsSumAggregateInputType = {
    id?: true;
};
export type AlarmsMinAggregateInputType = {
    id?: true;
    terminal_id?: true;
    alarm_type?: true;
    active?: true;
    created_at?: true;
};
export type AlarmsMaxAggregateInputType = {
    id?: true;
    terminal_id?: true;
    alarm_type?: true;
    active?: true;
    created_at?: true;
};
export type AlarmsCountAggregateInputType = {
    id?: true;
    terminal_id?: true;
    alarm_type?: true;
    active?: true;
    created_at?: true;
    _all?: true;
};
export type AlarmsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alarms to aggregate.
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alarms to fetch.
     */
    orderBy?: Prisma.alarmsOrderByWithRelationInput | Prisma.alarmsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alarmsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alarms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alarms
    **/
    _count?: true | AlarmsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AlarmsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AlarmsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AlarmsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AlarmsMaxAggregateInputType;
};
export type GetAlarmsAggregateType<T extends AlarmsAggregateArgs> = {
    [P in keyof T & keyof AggregateAlarms]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlarms[P]> : Prisma.GetScalarType<T[P], AggregateAlarms[P]>;
};
export type alarmsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alarmsWhereInput;
    orderBy?: Prisma.alarmsOrderByWithAggregationInput | Prisma.alarmsOrderByWithAggregationInput[];
    by: Prisma.AlarmsScalarFieldEnum[] | Prisma.AlarmsScalarFieldEnum;
    having?: Prisma.alarmsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlarmsCountAggregateInputType | true;
    _avg?: AlarmsAvgAggregateInputType;
    _sum?: AlarmsSumAggregateInputType;
    _min?: AlarmsMinAggregateInputType;
    _max?: AlarmsMaxAggregateInputType;
};
export type AlarmsGroupByOutputType = {
    id: number;
    terminal_id: string;
    alarm_type: string | null;
    active: boolean | null;
    created_at: Date | null;
    _count: AlarmsCountAggregateOutputType | null;
    _avg: AlarmsAvgAggregateOutputType | null;
    _sum: AlarmsSumAggregateOutputType | null;
    _min: AlarmsMinAggregateOutputType | null;
    _max: AlarmsMaxAggregateOutputType | null;
};
export type GetAlarmsGroupByPayload<T extends alarmsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlarmsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlarmsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlarmsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlarmsGroupByOutputType[P]>;
}>>;
export type alarmsWhereInput = {
    AND?: Prisma.alarmsWhereInput | Prisma.alarmsWhereInput[];
    OR?: Prisma.alarmsWhereInput[];
    NOT?: Prisma.alarmsWhereInput | Prisma.alarmsWhereInput[];
    id?: Prisma.IntFilter<"alarms"> | number;
    terminal_id?: Prisma.StringFilter<"alarms"> | string;
    alarm_type?: Prisma.StringNullableFilter<"alarms"> | string | null;
    active?: Prisma.BoolNullableFilter<"alarms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"alarms"> | Date | string | null;
};
export type alarmsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    alarm_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type alarmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.alarmsWhereInput | Prisma.alarmsWhereInput[];
    OR?: Prisma.alarmsWhereInput[];
    NOT?: Prisma.alarmsWhereInput | Prisma.alarmsWhereInput[];
    terminal_id?: Prisma.StringFilter<"alarms"> | string;
    alarm_type?: Prisma.StringNullableFilter<"alarms"> | string | null;
    active?: Prisma.BoolNullableFilter<"alarms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"alarms"> | Date | string | null;
}, "id">;
export type alarmsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    alarm_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.alarmsCountOrderByAggregateInput;
    _avg?: Prisma.alarmsAvgOrderByAggregateInput;
    _max?: Prisma.alarmsMaxOrderByAggregateInput;
    _min?: Prisma.alarmsMinOrderByAggregateInput;
    _sum?: Prisma.alarmsSumOrderByAggregateInput;
};
export type alarmsScalarWhereWithAggregatesInput = {
    AND?: Prisma.alarmsScalarWhereWithAggregatesInput | Prisma.alarmsScalarWhereWithAggregatesInput[];
    OR?: Prisma.alarmsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alarmsScalarWhereWithAggregatesInput | Prisma.alarmsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"alarms"> | number;
    terminal_id?: Prisma.StringWithAggregatesFilter<"alarms"> | string;
    alarm_type?: Prisma.StringNullableWithAggregatesFilter<"alarms"> | string | null;
    active?: Prisma.BoolNullableWithAggregatesFilter<"alarms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"alarms"> | Date | string | null;
};
export type alarmsCreateInput = {
    terminal_id: string;
    alarm_type?: string | null;
    active?: boolean | null;
    created_at?: Date | string | null;
};
export type alarmsUncheckedCreateInput = {
    id?: number;
    terminal_id: string;
    alarm_type?: string | null;
    active?: boolean | null;
    created_at?: Date | string | null;
};
export type alarmsUpdateInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    alarm_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type alarmsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    alarm_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type alarmsCreateManyInput = {
    id?: number;
    terminal_id: string;
    alarm_type?: string | null;
    active?: boolean | null;
    created_at?: Date | string | null;
};
export type alarmsUpdateManyMutationInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    alarm_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type alarmsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    alarm_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type alarmsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    alarm_type?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type alarmsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type alarmsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    alarm_type?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type alarmsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    alarm_type?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type alarmsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type alarmsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    alarm_type?: boolean;
    active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["alarms"]>;
export type alarmsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    alarm_type?: boolean;
    active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["alarms"]>;
export type alarmsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    alarm_type?: boolean;
    active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["alarms"]>;
export type alarmsSelectScalar = {
    id?: boolean;
    terminal_id?: boolean;
    alarm_type?: boolean;
    active?: boolean;
    created_at?: boolean;
};
export type alarmsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "terminal_id" | "alarm_type" | "active" | "created_at", ExtArgs["result"]["alarms"]>;
export type $alarmsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alarms";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        terminal_id: string;
        alarm_type: string | null;
        active: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["alarms"]>;
    composites: {};
};
export type alarmsGetPayload<S extends boolean | null | undefined | alarmsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alarmsPayload, S>;
export type alarmsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alarmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlarmsCountAggregateInputType | true;
};
export interface alarmsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alarms'];
        meta: {
            name: 'alarms';
        };
    };
    /**
     * Find zero or one Alarms that matches the filter.
     * @param {alarmsFindUniqueArgs} args - Arguments to find a Alarms
     * @example
     * // Get one Alarms
     * const alarms = await prisma.alarms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alarmsFindUniqueArgs>(args: Prisma.SelectSubset<T, alarmsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alarms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alarmsFindUniqueOrThrowArgs} args - Arguments to find a Alarms
     * @example
     * // Get one Alarms
     * const alarms = await prisma.alarms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alarmsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alarmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsFindFirstArgs} args - Arguments to find a Alarms
     * @example
     * // Get one Alarms
     * const alarms = await prisma.alarms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alarmsFindFirstArgs>(args?: Prisma.SelectSubset<T, alarmsFindFirstArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alarms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsFindFirstOrThrowArgs} args - Arguments to find a Alarms
     * @example
     * // Get one Alarms
     * const alarms = await prisma.alarms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alarmsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alarmsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alarms
     * const alarms = await prisma.alarms.findMany()
     *
     * // Get first 10 Alarms
     * const alarms = await prisma.alarms.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const alarmsWithIdOnly = await prisma.alarms.findMany({ select: { id: true } })
     *
     */
    findMany<T extends alarmsFindManyArgs>(args?: Prisma.SelectSubset<T, alarmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alarms.
     * @param {alarmsCreateArgs} args - Arguments to create a Alarms.
     * @example
     * // Create one Alarms
     * const Alarms = await prisma.alarms.create({
     *   data: {
     *     // ... data to create a Alarms
     *   }
     * })
     *
     */
    create<T extends alarmsCreateArgs>(args: Prisma.SelectSubset<T, alarmsCreateArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alarms.
     * @param {alarmsCreateManyArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarms = await prisma.alarms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alarmsCreateManyArgs>(args?: Prisma.SelectSubset<T, alarmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alarms and returns the data saved in the database.
     * @param {alarmsCreateManyAndReturnArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarms = await prisma.alarms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alarms and only return the `id`
     * const alarmsWithIdOnly = await prisma.alarms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends alarmsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, alarmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alarms.
     * @param {alarmsDeleteArgs} args - Arguments to delete one Alarms.
     * @example
     * // Delete one Alarms
     * const Alarms = await prisma.alarms.delete({
     *   where: {
     *     // ... filter to delete one Alarms
     *   }
     * })
     *
     */
    delete<T extends alarmsDeleteArgs>(args: Prisma.SelectSubset<T, alarmsDeleteArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alarms.
     * @param {alarmsUpdateArgs} args - Arguments to update one Alarms.
     * @example
     * // Update one Alarms
     * const alarms = await prisma.alarms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alarmsUpdateArgs>(args: Prisma.SelectSubset<T, alarmsUpdateArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alarms.
     * @param {alarmsDeleteManyArgs} args - Arguments to filter Alarms to delete.
     * @example
     * // Delete a few Alarms
     * const { count } = await prisma.alarms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alarmsDeleteManyArgs>(args?: Prisma.SelectSubset<T, alarmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alarms
     * const alarms = await prisma.alarms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alarmsUpdateManyArgs>(args: Prisma.SelectSubset<T, alarmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alarms and returns the data updated in the database.
     * @param {alarmsUpdateManyAndReturnArgs} args - Arguments to update many Alarms.
     * @example
     * // Update many Alarms
     * const alarms = await prisma.alarms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alarms and only return the `id`
     * const alarmsWithIdOnly = await prisma.alarms.updateManyAndReturn({
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
    updateManyAndReturn<T extends alarmsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, alarmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alarms.
     * @param {alarmsUpsertArgs} args - Arguments to update or create a Alarms.
     * @example
     * // Update or create a Alarms
     * const alarms = await prisma.alarms.upsert({
     *   create: {
     *     // ... data to create a Alarms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alarms we want to update
     *   }
     * })
     */
    upsert<T extends alarmsUpsertArgs>(args: Prisma.SelectSubset<T, alarmsUpsertArgs<ExtArgs>>): Prisma.Prisma__alarmsClient<runtime.Types.Result.GetResult<Prisma.$alarmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsCountArgs} args - Arguments to filter Alarms to count.
     * @example
     * // Count the number of Alarms
     * const count = await prisma.alarms.count({
     *   where: {
     *     // ... the filter for the Alarms we want to count
     *   }
     * })
    **/
    count<T extends alarmsCountArgs>(args?: Prisma.Subset<T, alarmsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlarmsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmsAggregateArgs>(args: Prisma.Subset<T, AlarmsAggregateArgs>): Prisma.PrismaPromise<GetAlarmsAggregateType<T>>;
    /**
     * Group by Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alarmsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alarmsGroupByArgs['orderBy'];
    } : {
        orderBy?: alarmsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alarmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alarms model
     */
    readonly fields: alarmsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alarms.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alarmsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the alarms model
 */
export interface alarmsFieldRefs {
    readonly id: Prisma.FieldRef<"alarms", 'Int'>;
    readonly terminal_id: Prisma.FieldRef<"alarms", 'String'>;
    readonly alarm_type: Prisma.FieldRef<"alarms", 'String'>;
    readonly active: Prisma.FieldRef<"alarms", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"alarms", 'DateTime'>;
}
/**
 * alarms findUnique
 */
export type alarmsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter, which alarms to fetch.
     */
    where: Prisma.alarmsWhereUniqueInput;
};
/**
 * alarms findUniqueOrThrow
 */
export type alarmsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter, which alarms to fetch.
     */
    where: Prisma.alarmsWhereUniqueInput;
};
/**
 * alarms findFirst
 */
export type alarmsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter, which alarms to fetch.
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alarms to fetch.
     */
    orderBy?: Prisma.alarmsOrderByWithRelationInput | Prisma.alarmsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alarms.
     */
    cursor?: Prisma.alarmsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alarms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alarms.
     */
    distinct?: Prisma.AlarmsScalarFieldEnum | Prisma.AlarmsScalarFieldEnum[];
};
/**
 * alarms findFirstOrThrow
 */
export type alarmsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter, which alarms to fetch.
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alarms to fetch.
     */
    orderBy?: Prisma.alarmsOrderByWithRelationInput | Prisma.alarmsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alarms.
     */
    cursor?: Prisma.alarmsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alarms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alarms.
     */
    distinct?: Prisma.AlarmsScalarFieldEnum | Prisma.AlarmsScalarFieldEnum[];
};
/**
 * alarms findMany
 */
export type alarmsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter, which alarms to fetch.
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alarms to fetch.
     */
    orderBy?: Prisma.alarmsOrderByWithRelationInput | Prisma.alarmsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alarms.
     */
    cursor?: Prisma.alarmsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alarms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alarms.
     */
    distinct?: Prisma.AlarmsScalarFieldEnum | Prisma.AlarmsScalarFieldEnum[];
};
/**
 * alarms create
 */
export type alarmsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * The data needed to create a alarms.
     */
    data: Prisma.XOR<Prisma.alarmsCreateInput, Prisma.alarmsUncheckedCreateInput>;
};
/**
 * alarms createMany
 */
export type alarmsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alarms.
     */
    data: Prisma.alarmsCreateManyInput | Prisma.alarmsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alarms createManyAndReturn
 */
export type alarmsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * The data used to create many alarms.
     */
    data: Prisma.alarmsCreateManyInput | Prisma.alarmsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alarms update
 */
export type alarmsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * The data needed to update a alarms.
     */
    data: Prisma.XOR<Prisma.alarmsUpdateInput, Prisma.alarmsUncheckedUpdateInput>;
    /**
     * Choose, which alarms to update.
     */
    where: Prisma.alarmsWhereUniqueInput;
};
/**
 * alarms updateMany
 */
export type alarmsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alarms.
     */
    data: Prisma.XOR<Prisma.alarmsUpdateManyMutationInput, Prisma.alarmsUncheckedUpdateManyInput>;
    /**
     * Filter which alarms to update
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * Limit how many alarms to update.
     */
    limit?: number;
};
/**
 * alarms updateManyAndReturn
 */
export type alarmsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * The data used to update alarms.
     */
    data: Prisma.XOR<Prisma.alarmsUpdateManyMutationInput, Prisma.alarmsUncheckedUpdateManyInput>;
    /**
     * Filter which alarms to update
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * Limit how many alarms to update.
     */
    limit?: number;
};
/**
 * alarms upsert
 */
export type alarmsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * The filter to search for the alarms to update in case it exists.
     */
    where: Prisma.alarmsWhereUniqueInput;
    /**
     * In case the alarms found by the `where` argument doesn't exist, create a new alarms with this data.
     */
    create: Prisma.XOR<Prisma.alarmsCreateInput, Prisma.alarmsUncheckedCreateInput>;
    /**
     * In case the alarms was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alarmsUpdateInput, Prisma.alarmsUncheckedUpdateInput>;
};
/**
 * alarms delete
 */
export type alarmsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
    /**
     * Filter which alarms to delete.
     */
    where: Prisma.alarmsWhereUniqueInput;
};
/**
 * alarms deleteMany
 */
export type alarmsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alarms to delete
     */
    where?: Prisma.alarmsWhereInput;
    /**
     * Limit how many alarms to delete.
     */
    limit?: number;
};
/**
 * alarms without action
 */
export type alarmsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarms
     */
    select?: Prisma.alarmsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alarms
     */
    omit?: Prisma.alarmsOmit<ExtArgs> | null;
};
//# sourceMappingURL=alarms.d.ts.map