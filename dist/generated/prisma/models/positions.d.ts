import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model positions
 *
 */
export type positionsModel = runtime.Types.Result.DefaultSelection<Prisma.$positionsPayload>;
export type AggregatePositions = {
    _count: PositionsCountAggregateOutputType | null;
    _avg: PositionsAvgAggregateOutputType | null;
    _sum: PositionsSumAggregateOutputType | null;
    _min: PositionsMinAggregateOutputType | null;
    _max: PositionsMaxAggregateOutputType | null;
};
export type PositionsAvgAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    battery_percent: number | null;
    signal_csq: number | null;
    alarm_flag: number | null;
};
export type PositionsSumAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    battery_percent: number | null;
    signal_csq: number | null;
    alarm_flag: number | null;
};
export type PositionsMinAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    battery_percent: number | null;
    signal_csq: number | null;
    alarm_flag: number | null;
    msg_type: string | null;
    created_at: Date | null;
};
export type PositionsMaxAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    battery_percent: number | null;
    signal_csq: number | null;
    alarm_flag: number | null;
    msg_type: string | null;
    created_at: Date | null;
};
export type PositionsCountAggregateOutputType = {
    id: number;
    terminal_id: number;
    latitude: number;
    longitude: number;
    elevation: number;
    speed: number;
    direction: number;
    device_time: number;
    is_sealed: number;
    is_shackle_closed: number;
    gps_valid: number;
    battery_percent: number;
    signal_csq: number;
    alarm_flag: number;
    msg_type: number;
    created_at: number;
    _all: number;
};
export type PositionsAvgAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    battery_percent?: true;
    signal_csq?: true;
    alarm_flag?: true;
};
export type PositionsSumAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    battery_percent?: true;
    signal_csq?: true;
    alarm_flag?: true;
};
export type PositionsMinAggregateInputType = {
    id?: true;
    terminal_id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    battery_percent?: true;
    signal_csq?: true;
    alarm_flag?: true;
    msg_type?: true;
    created_at?: true;
};
export type PositionsMaxAggregateInputType = {
    id?: true;
    terminal_id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    battery_percent?: true;
    signal_csq?: true;
    alarm_flag?: true;
    msg_type?: true;
    created_at?: true;
};
export type PositionsCountAggregateInputType = {
    id?: true;
    terminal_id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    battery_percent?: true;
    signal_csq?: true;
    alarm_flag?: true;
    msg_type?: true;
    created_at?: true;
    _all?: true;
};
export type PositionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which positions to aggregate.
     */
    where?: Prisma.positionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: Prisma.positionsOrderByWithRelationInput | Prisma.positionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.positionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned positions
    **/
    _count?: true | PositionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PositionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PositionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PositionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PositionsMaxAggregateInputType;
};
export type GetPositionsAggregateType<T extends PositionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePositions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePositions[P]> : Prisma.GetScalarType<T[P], AggregatePositions[P]>;
};
export type positionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.positionsWhereInput;
    orderBy?: Prisma.positionsOrderByWithAggregationInput | Prisma.positionsOrderByWithAggregationInput[];
    by: Prisma.PositionsScalarFieldEnum[] | Prisma.PositionsScalarFieldEnum;
    having?: Prisma.positionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PositionsCountAggregateInputType | true;
    _avg?: PositionsAvgAggregateInputType;
    _sum?: PositionsSumAggregateInputType;
    _min?: PositionsMinAggregateInputType;
    _max?: PositionsMaxAggregateInputType;
};
export type PositionsGroupByOutputType = {
    id: number;
    terminal_id: string;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    battery_percent: number | null;
    signal_csq: number | null;
    alarm_flag: number | null;
    msg_type: string | null;
    created_at: Date | null;
    _count: PositionsCountAggregateOutputType | null;
    _avg: PositionsAvgAggregateOutputType | null;
    _sum: PositionsSumAggregateOutputType | null;
    _min: PositionsMinAggregateOutputType | null;
    _max: PositionsMaxAggregateOutputType | null;
};
export type GetPositionsGroupByPayload<T extends positionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PositionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PositionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PositionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PositionsGroupByOutputType[P]>;
}>>;
export type positionsWhereInput = {
    AND?: Prisma.positionsWhereInput | Prisma.positionsWhereInput[];
    OR?: Prisma.positionsWhereInput[];
    NOT?: Prisma.positionsWhereInput | Prisma.positionsWhereInput[];
    id?: Prisma.IntFilter<"positions"> | number;
    terminal_id?: Prisma.StringFilter<"positions"> | string;
    latitude?: Prisma.FloatNullableFilter<"positions"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"positions"> | number | null;
    elevation?: Prisma.IntNullableFilter<"positions"> | number | null;
    speed?: Prisma.FloatNullableFilter<"positions"> | number | null;
    direction?: Prisma.IntNullableFilter<"positions"> | number | null;
    device_time?: Prisma.DateTimeNullableFilter<"positions"> | Date | string | null;
    is_sealed?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    gps_valid?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    battery_percent?: Prisma.FloatNullableFilter<"positions"> | number | null;
    signal_csq?: Prisma.IntNullableFilter<"positions"> | number | null;
    alarm_flag?: Prisma.IntNullableFilter<"positions"> | number | null;
    msg_type?: Prisma.StringNullableFilter<"positions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"positions"> | Date | string | null;
};
export type positionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    elevation?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_sealed?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gps_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    signal_csq?: Prisma.SortOrderInput | Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrderInput | Prisma.SortOrder;
    msg_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.positionsWhereInput | Prisma.positionsWhereInput[];
    OR?: Prisma.positionsWhereInput[];
    NOT?: Prisma.positionsWhereInput | Prisma.positionsWhereInput[];
    terminal_id?: Prisma.StringFilter<"positions"> | string;
    latitude?: Prisma.FloatNullableFilter<"positions"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"positions"> | number | null;
    elevation?: Prisma.IntNullableFilter<"positions"> | number | null;
    speed?: Prisma.FloatNullableFilter<"positions"> | number | null;
    direction?: Prisma.IntNullableFilter<"positions"> | number | null;
    device_time?: Prisma.DateTimeNullableFilter<"positions"> | Date | string | null;
    is_sealed?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    gps_valid?: Prisma.BoolNullableFilter<"positions"> | boolean | null;
    battery_percent?: Prisma.FloatNullableFilter<"positions"> | number | null;
    signal_csq?: Prisma.IntNullableFilter<"positions"> | number | null;
    alarm_flag?: Prisma.IntNullableFilter<"positions"> | number | null;
    msg_type?: Prisma.StringNullableFilter<"positions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"positions"> | Date | string | null;
}, "id">;
export type positionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    elevation?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_sealed?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gps_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    signal_csq?: Prisma.SortOrderInput | Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrderInput | Prisma.SortOrder;
    msg_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.positionsCountOrderByAggregateInput;
    _avg?: Prisma.positionsAvgOrderByAggregateInput;
    _max?: Prisma.positionsMaxOrderByAggregateInput;
    _min?: Prisma.positionsMinOrderByAggregateInput;
    _sum?: Prisma.positionsSumOrderByAggregateInput;
};
export type positionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.positionsScalarWhereWithAggregatesInput | Prisma.positionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.positionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.positionsScalarWhereWithAggregatesInput | Prisma.positionsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"positions"> | number;
    terminal_id?: Prisma.StringWithAggregatesFilter<"positions"> | string;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"positions"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"positions"> | number | null;
    elevation?: Prisma.IntNullableWithAggregatesFilter<"positions"> | number | null;
    speed?: Prisma.FloatNullableWithAggregatesFilter<"positions"> | number | null;
    direction?: Prisma.IntNullableWithAggregatesFilter<"positions"> | number | null;
    device_time?: Prisma.DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null;
    is_sealed?: Prisma.BoolNullableWithAggregatesFilter<"positions"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableWithAggregatesFilter<"positions"> | boolean | null;
    gps_valid?: Prisma.BoolNullableWithAggregatesFilter<"positions"> | boolean | null;
    battery_percent?: Prisma.FloatNullableWithAggregatesFilter<"positions"> | number | null;
    signal_csq?: Prisma.IntNullableWithAggregatesFilter<"positions"> | number | null;
    alarm_flag?: Prisma.IntNullableWithAggregatesFilter<"positions"> | number | null;
    msg_type?: Prisma.StringNullableWithAggregatesFilter<"positions"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"positions"> | Date | string | null;
};
export type positionsCreateInput = {
    terminal_id: string;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    battery_percent?: number | null;
    signal_csq?: number | null;
    alarm_flag?: number | null;
    msg_type?: string | null;
    created_at?: Date | string | null;
};
export type positionsUncheckedCreateInput = {
    id?: number;
    terminal_id: string;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    battery_percent?: number | null;
    signal_csq?: number | null;
    alarm_flag?: number | null;
    msg_type?: string | null;
    created_at?: Date | string | null;
};
export type positionsUpdateInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    msg_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type positionsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    msg_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type positionsCreateManyInput = {
    id?: number;
    terminal_id: string;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    battery_percent?: number | null;
    signal_csq?: number | null;
    alarm_flag?: number | null;
    msg_type?: string | null;
    created_at?: Date | string | null;
};
export type positionsUpdateManyMutationInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    msg_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type positionsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    msg_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type positionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    msg_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type positionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
};
export type positionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    msg_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type positionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    msg_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type positionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
};
export type positionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    battery_percent?: boolean;
    signal_csq?: boolean;
    alarm_flag?: boolean;
    msg_type?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["positions"]>;
export type positionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    battery_percent?: boolean;
    signal_csq?: boolean;
    alarm_flag?: boolean;
    msg_type?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["positions"]>;
export type positionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    battery_percent?: boolean;
    signal_csq?: boolean;
    alarm_flag?: boolean;
    msg_type?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["positions"]>;
export type positionsSelectScalar = {
    id?: boolean;
    terminal_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    battery_percent?: boolean;
    signal_csq?: boolean;
    alarm_flag?: boolean;
    msg_type?: boolean;
    created_at?: boolean;
};
export type positionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "terminal_id" | "latitude" | "longitude" | "elevation" | "speed" | "direction" | "device_time" | "is_sealed" | "is_shackle_closed" | "gps_valid" | "battery_percent" | "signal_csq" | "alarm_flag" | "msg_type" | "created_at", ExtArgs["result"]["positions"]>;
export type $positionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "positions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        terminal_id: string;
        latitude: number | null;
        longitude: number | null;
        elevation: number | null;
        speed: number | null;
        direction: number | null;
        device_time: Date | null;
        is_sealed: boolean | null;
        is_shackle_closed: boolean | null;
        gps_valid: boolean | null;
        battery_percent: number | null;
        signal_csq: number | null;
        alarm_flag: number | null;
        msg_type: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["positions"]>;
    composites: {};
};
export type positionsGetPayload<S extends boolean | null | undefined | positionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$positionsPayload, S>;
export type positionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PositionsCountAggregateInputType | true;
};
export interface positionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['positions'];
        meta: {
            name: 'positions';
        };
    };
    /**
     * Find zero or one Positions that matches the filter.
     * @param {positionsFindUniqueArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends positionsFindUniqueArgs>(args: Prisma.SelectSubset<T, positionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {positionsFindUniqueOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends positionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends positionsFindFirstArgs>(args?: Prisma.SelectSubset<T, positionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindFirstOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends positionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.positions.findMany()
     *
     * // Get first 10 Positions
     * const positions = await prisma.positions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const positionsWithIdOnly = await prisma.positions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends positionsFindManyArgs>(args?: Prisma.SelectSubset<T, positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Positions.
     * @param {positionsCreateArgs} args - Arguments to create a Positions.
     * @example
     * // Create one Positions
     * const Positions = await prisma.positions.create({
     *   data: {
     *     // ... data to create a Positions
     *   }
     * })
     *
     */
    create<T extends positionsCreateArgs>(args: Prisma.SelectSubset<T, positionsCreateArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Positions.
     * @param {positionsCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends positionsCreateManyArgs>(args?: Prisma.SelectSubset<T, positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Positions and returns the data saved in the database.
     * @param {positionsCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const positions = await prisma.positions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends positionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, positionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Positions.
     * @param {positionsDeleteArgs} args - Arguments to delete one Positions.
     * @example
     * // Delete one Positions
     * const Positions = await prisma.positions.delete({
     *   where: {
     *     // ... filter to delete one Positions
     *   }
     * })
     *
     */
    delete<T extends positionsDeleteArgs>(args: Prisma.SelectSubset<T, positionsDeleteArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Positions.
     * @param {positionsUpdateArgs} args - Arguments to update one Positions.
     * @example
     * // Update one Positions
     * const positions = await prisma.positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends positionsUpdateArgs>(args: Prisma.SelectSubset<T, positionsUpdateArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Positions.
     * @param {positionsDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends positionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends positionsUpdateManyArgs>(args: Prisma.SelectSubset<T, positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {positionsUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Positions and only return the `id`
     * const positionsWithIdOnly = await prisma.positions.updateManyAndReturn({
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
    updateManyAndReturn<T extends positionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, positionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Positions.
     * @param {positionsUpsertArgs} args - Arguments to update or create a Positions.
     * @example
     * // Update or create a Positions
     * const positions = await prisma.positions.upsert({
     *   create: {
     *     // ... data to create a Positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Positions we want to update
     *   }
     * })
     */
    upsert<T extends positionsUpsertArgs>(args: Prisma.SelectSubset<T, positionsUpsertArgs<ExtArgs>>): Prisma.Prisma__positionsClient<runtime.Types.Result.GetResult<Prisma.$positionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.positions.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends positionsCountArgs>(args?: Prisma.Subset<T, positionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PositionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionsAggregateArgs>(args: Prisma.Subset<T, PositionsAggregateArgs>): Prisma.PrismaPromise<GetPositionsAggregateType<T>>;
    /**
     * Group by Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends positionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: positionsGroupByArgs['orderBy'];
    } : {
        orderBy?: positionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the positions model
     */
    readonly fields: positionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for positions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__positionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the positions model
 */
export interface positionsFieldRefs {
    readonly id: Prisma.FieldRef<"positions", 'Int'>;
    readonly terminal_id: Prisma.FieldRef<"positions", 'String'>;
    readonly latitude: Prisma.FieldRef<"positions", 'Float'>;
    readonly longitude: Prisma.FieldRef<"positions", 'Float'>;
    readonly elevation: Prisma.FieldRef<"positions", 'Int'>;
    readonly speed: Prisma.FieldRef<"positions", 'Float'>;
    readonly direction: Prisma.FieldRef<"positions", 'Int'>;
    readonly device_time: Prisma.FieldRef<"positions", 'DateTime'>;
    readonly is_sealed: Prisma.FieldRef<"positions", 'Boolean'>;
    readonly is_shackle_closed: Prisma.FieldRef<"positions", 'Boolean'>;
    readonly gps_valid: Prisma.FieldRef<"positions", 'Boolean'>;
    readonly battery_percent: Prisma.FieldRef<"positions", 'Float'>;
    readonly signal_csq: Prisma.FieldRef<"positions", 'Int'>;
    readonly alarm_flag: Prisma.FieldRef<"positions", 'Int'>;
    readonly msg_type: Prisma.FieldRef<"positions", 'String'>;
    readonly created_at: Prisma.FieldRef<"positions", 'DateTime'>;
}
/**
 * positions findUnique
 */
export type positionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where: Prisma.positionsWhereUniqueInput;
};
/**
 * positions findUniqueOrThrow
 */
export type positionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where: Prisma.positionsWhereUniqueInput;
};
/**
 * positions findFirst
 */
export type positionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where?: Prisma.positionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: Prisma.positionsOrderByWithRelationInput | Prisma.positionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for positions.
     */
    cursor?: Prisma.positionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of positions.
     */
    distinct?: Prisma.PositionsScalarFieldEnum | Prisma.PositionsScalarFieldEnum[];
};
/**
 * positions findFirstOrThrow
 */
export type positionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where?: Prisma.positionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: Prisma.positionsOrderByWithRelationInput | Prisma.positionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for positions.
     */
    cursor?: Prisma.positionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of positions.
     */
    distinct?: Prisma.PositionsScalarFieldEnum | Prisma.PositionsScalarFieldEnum[];
};
/**
 * positions findMany
 */
export type positionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where?: Prisma.positionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: Prisma.positionsOrderByWithRelationInput | Prisma.positionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing positions.
     */
    cursor?: Prisma.positionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of positions.
     */
    distinct?: Prisma.PositionsScalarFieldEnum | Prisma.PositionsScalarFieldEnum[];
};
/**
 * positions create
 */
export type positionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * The data needed to create a positions.
     */
    data: Prisma.XOR<Prisma.positionsCreateInput, Prisma.positionsUncheckedCreateInput>;
};
/**
 * positions createMany
 */
export type positionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many positions.
     */
    data: Prisma.positionsCreateManyInput | Prisma.positionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * positions createManyAndReturn
 */
export type positionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * The data used to create many positions.
     */
    data: Prisma.positionsCreateManyInput | Prisma.positionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * positions update
 */
export type positionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * The data needed to update a positions.
     */
    data: Prisma.XOR<Prisma.positionsUpdateInput, Prisma.positionsUncheckedUpdateInput>;
    /**
     * Choose, which positions to update.
     */
    where: Prisma.positionsWhereUniqueInput;
};
/**
 * positions updateMany
 */
export type positionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update positions.
     */
    data: Prisma.XOR<Prisma.positionsUpdateManyMutationInput, Prisma.positionsUncheckedUpdateManyInput>;
    /**
     * Filter which positions to update
     */
    where?: Prisma.positionsWhereInput;
    /**
     * Limit how many positions to update.
     */
    limit?: number;
};
/**
 * positions updateManyAndReturn
 */
export type positionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * The data used to update positions.
     */
    data: Prisma.XOR<Prisma.positionsUpdateManyMutationInput, Prisma.positionsUncheckedUpdateManyInput>;
    /**
     * Filter which positions to update
     */
    where?: Prisma.positionsWhereInput;
    /**
     * Limit how many positions to update.
     */
    limit?: number;
};
/**
 * positions upsert
 */
export type positionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * The filter to search for the positions to update in case it exists.
     */
    where: Prisma.positionsWhereUniqueInput;
    /**
     * In case the positions found by the `where` argument doesn't exist, create a new positions with this data.
     */
    create: Prisma.XOR<Prisma.positionsCreateInput, Prisma.positionsUncheckedCreateInput>;
    /**
     * In case the positions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.positionsUpdateInput, Prisma.positionsUncheckedUpdateInput>;
};
/**
 * positions delete
 */
export type positionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
    /**
     * Filter which positions to delete.
     */
    where: Prisma.positionsWhereUniqueInput;
};
/**
 * positions deleteMany
 */
export type positionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which positions to delete
     */
    where?: Prisma.positionsWhereInput;
    /**
     * Limit how many positions to delete.
     */
    limit?: number;
};
/**
 * positions without action
 */
export type positionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the positions
     */
    select?: Prisma.positionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the positions
     */
    omit?: Prisma.positionsOmit<ExtArgs> | null;
};
//# sourceMappingURL=positions.d.ts.map