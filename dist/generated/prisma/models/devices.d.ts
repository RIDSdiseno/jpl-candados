import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model devices
 *
 */
export type devicesModel = runtime.Types.Result.DefaultSelection<Prisma.$devicesPayload>;
export type AggregateDevices = {
    _count: DevicesCountAggregateOutputType | null;
    _avg: DevicesAvgAggregateOutputType | null;
    _sum: DevicesSumAggregateOutputType | null;
    _min: DevicesMinAggregateOutputType | null;
    _max: DevicesMaxAggregateOutputType | null;
};
export type DevicesAvgAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    battery_percent: number | null;
    battery_voltage: number | null;
    signal_csq: number | null;
    satellite_count: number | null;
    alarm_flag: number | null;
};
export type DevicesSumAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    battery_percent: number | null;
    battery_voltage: number | null;
    signal_csq: number | null;
    satellite_count: number | null;
    alarm_flag: number | null;
};
export type DevicesMinAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    last_seen: Date | null;
    last_ip: string | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    battery_percent: number | null;
    battery_voltage: number | null;
    signal_csq: number | null;
    satellite_count: number | null;
    network_mode: string | null;
    charge_status: string | null;
    iccid: string | null;
    hw_version: string | null;
    sw_version: string | null;
    alarm_flag: number | null;
    created_at: Date | null;
};
export type DevicesMaxAggregateOutputType = {
    id: number | null;
    terminal_id: string | null;
    last_seen: Date | null;
    last_ip: string | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    battery_percent: number | null;
    battery_voltage: number | null;
    signal_csq: number | null;
    satellite_count: number | null;
    network_mode: string | null;
    charge_status: string | null;
    iccid: string | null;
    hw_version: string | null;
    sw_version: string | null;
    alarm_flag: number | null;
    created_at: Date | null;
};
export type DevicesCountAggregateOutputType = {
    id: number;
    terminal_id: number;
    last_seen: number;
    last_ip: number;
    is_sealed: number;
    is_shackle_closed: number;
    gps_valid: number;
    latitude: number;
    longitude: number;
    elevation: number;
    speed: number;
    direction: number;
    device_time: number;
    battery_percent: number;
    battery_voltage: number;
    signal_csq: number;
    satellite_count: number;
    network_mode: number;
    charge_status: number;
    iccid: number;
    hw_version: number;
    sw_version: number;
    alarm_flag: number;
    created_at: number;
    _all: number;
};
export type DevicesAvgAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    battery_percent?: true;
    battery_voltage?: true;
    signal_csq?: true;
    satellite_count?: true;
    alarm_flag?: true;
};
export type DevicesSumAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    battery_percent?: true;
    battery_voltage?: true;
    signal_csq?: true;
    satellite_count?: true;
    alarm_flag?: true;
};
export type DevicesMinAggregateInputType = {
    id?: true;
    terminal_id?: true;
    last_seen?: true;
    last_ip?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    battery_percent?: true;
    battery_voltage?: true;
    signal_csq?: true;
    satellite_count?: true;
    network_mode?: true;
    charge_status?: true;
    iccid?: true;
    hw_version?: true;
    sw_version?: true;
    alarm_flag?: true;
    created_at?: true;
};
export type DevicesMaxAggregateInputType = {
    id?: true;
    terminal_id?: true;
    last_seen?: true;
    last_ip?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    battery_percent?: true;
    battery_voltage?: true;
    signal_csq?: true;
    satellite_count?: true;
    network_mode?: true;
    charge_status?: true;
    iccid?: true;
    hw_version?: true;
    sw_version?: true;
    alarm_flag?: true;
    created_at?: true;
};
export type DevicesCountAggregateInputType = {
    id?: true;
    terminal_id?: true;
    last_seen?: true;
    last_ip?: true;
    is_sealed?: true;
    is_shackle_closed?: true;
    gps_valid?: true;
    latitude?: true;
    longitude?: true;
    elevation?: true;
    speed?: true;
    direction?: true;
    device_time?: true;
    battery_percent?: true;
    battery_voltage?: true;
    signal_csq?: true;
    satellite_count?: true;
    network_mode?: true;
    charge_status?: true;
    iccid?: true;
    hw_version?: true;
    sw_version?: true;
    alarm_flag?: true;
    created_at?: true;
    _all?: true;
};
export type DevicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which devices to aggregate.
     */
    where?: Prisma.devicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: Prisma.devicesOrderByWithRelationInput | Prisma.devicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.devicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned devices
    **/
    _count?: true | DevicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DevicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DevicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DevicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DevicesMaxAggregateInputType;
};
export type GetDevicesAggregateType<T extends DevicesAggregateArgs> = {
    [P in keyof T & keyof AggregateDevices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDevices[P]> : Prisma.GetScalarType<T[P], AggregateDevices[P]>;
};
export type devicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.devicesWhereInput;
    orderBy?: Prisma.devicesOrderByWithAggregationInput | Prisma.devicesOrderByWithAggregationInput[];
    by: Prisma.DevicesScalarFieldEnum[] | Prisma.DevicesScalarFieldEnum;
    having?: Prisma.devicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DevicesCountAggregateInputType | true;
    _avg?: DevicesAvgAggregateInputType;
    _sum?: DevicesSumAggregateInputType;
    _min?: DevicesMinAggregateInputType;
    _max?: DevicesMaxAggregateInputType;
};
export type DevicesGroupByOutputType = {
    id: number;
    terminal_id: string;
    last_seen: Date | null;
    last_ip: string | null;
    is_sealed: boolean | null;
    is_shackle_closed: boolean | null;
    gps_valid: boolean | null;
    latitude: number | null;
    longitude: number | null;
    elevation: number | null;
    speed: number | null;
    direction: number | null;
    device_time: Date | null;
    battery_percent: number | null;
    battery_voltage: number | null;
    signal_csq: number | null;
    satellite_count: number | null;
    network_mode: string | null;
    charge_status: string | null;
    iccid: string | null;
    hw_version: string | null;
    sw_version: string | null;
    alarm_flag: number | null;
    created_at: Date | null;
    _count: DevicesCountAggregateOutputType | null;
    _avg: DevicesAvgAggregateOutputType | null;
    _sum: DevicesSumAggregateOutputType | null;
    _min: DevicesMinAggregateOutputType | null;
    _max: DevicesMaxAggregateOutputType | null;
};
export type GetDevicesGroupByPayload<T extends devicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DevicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DevicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DevicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DevicesGroupByOutputType[P]>;
}>>;
export type devicesWhereInput = {
    AND?: Prisma.devicesWhereInput | Prisma.devicesWhereInput[];
    OR?: Prisma.devicesWhereInput[];
    NOT?: Prisma.devicesWhereInput | Prisma.devicesWhereInput[];
    id?: Prisma.IntFilter<"devices"> | number;
    terminal_id?: Prisma.StringFilter<"devices"> | string;
    last_seen?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
    last_ip?: Prisma.StringNullableFilter<"devices"> | string | null;
    is_sealed?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    gps_valid?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    latitude?: Prisma.FloatNullableFilter<"devices"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"devices"> | number | null;
    elevation?: Prisma.IntNullableFilter<"devices"> | number | null;
    speed?: Prisma.FloatNullableFilter<"devices"> | number | null;
    direction?: Prisma.IntNullableFilter<"devices"> | number | null;
    device_time?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
    battery_percent?: Prisma.FloatNullableFilter<"devices"> | number | null;
    battery_voltage?: Prisma.IntNullableFilter<"devices"> | number | null;
    signal_csq?: Prisma.IntNullableFilter<"devices"> | number | null;
    satellite_count?: Prisma.IntNullableFilter<"devices"> | number | null;
    network_mode?: Prisma.StringNullableFilter<"devices"> | string | null;
    charge_status?: Prisma.StringNullableFilter<"devices"> | string | null;
    iccid?: Prisma.StringNullableFilter<"devices"> | string | null;
    hw_version?: Prisma.StringNullableFilter<"devices"> | string | null;
    sw_version?: Prisma.StringNullableFilter<"devices"> | string | null;
    alarm_flag?: Prisma.IntNullableFilter<"devices"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
};
export type devicesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    last_seen?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_sealed?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gps_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    elevation?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrderInput | Prisma.SortOrder;
    signal_csq?: Prisma.SortOrderInput | Prisma.SortOrder;
    satellite_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    network_mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    charge_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    iccid?: Prisma.SortOrderInput | Prisma.SortOrder;
    hw_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    sw_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type devicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    terminal_id?: string;
    AND?: Prisma.devicesWhereInput | Prisma.devicesWhereInput[];
    OR?: Prisma.devicesWhereInput[];
    NOT?: Prisma.devicesWhereInput | Prisma.devicesWhereInput[];
    last_seen?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
    last_ip?: Prisma.StringNullableFilter<"devices"> | string | null;
    is_sealed?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    gps_valid?: Prisma.BoolNullableFilter<"devices"> | boolean | null;
    latitude?: Prisma.FloatNullableFilter<"devices"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"devices"> | number | null;
    elevation?: Prisma.IntNullableFilter<"devices"> | number | null;
    speed?: Prisma.FloatNullableFilter<"devices"> | number | null;
    direction?: Prisma.IntNullableFilter<"devices"> | number | null;
    device_time?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
    battery_percent?: Prisma.FloatNullableFilter<"devices"> | number | null;
    battery_voltage?: Prisma.IntNullableFilter<"devices"> | number | null;
    signal_csq?: Prisma.IntNullableFilter<"devices"> | number | null;
    satellite_count?: Prisma.IntNullableFilter<"devices"> | number | null;
    network_mode?: Prisma.StringNullableFilter<"devices"> | string | null;
    charge_status?: Prisma.StringNullableFilter<"devices"> | string | null;
    iccid?: Prisma.StringNullableFilter<"devices"> | string | null;
    hw_version?: Prisma.StringNullableFilter<"devices"> | string | null;
    sw_version?: Prisma.StringNullableFilter<"devices"> | string | null;
    alarm_flag?: Prisma.IntNullableFilter<"devices"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"devices"> | Date | string | null;
}, "id" | "terminal_id">;
export type devicesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    last_seen?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_sealed?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gps_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    elevation?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    direction?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrderInput | Prisma.SortOrder;
    signal_csq?: Prisma.SortOrderInput | Prisma.SortOrder;
    satellite_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    network_mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    charge_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    iccid?: Prisma.SortOrderInput | Prisma.SortOrder;
    hw_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    sw_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.devicesCountOrderByAggregateInput;
    _avg?: Prisma.devicesAvgOrderByAggregateInput;
    _max?: Prisma.devicesMaxOrderByAggregateInput;
    _min?: Prisma.devicesMinOrderByAggregateInput;
    _sum?: Prisma.devicesSumOrderByAggregateInput;
};
export type devicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.devicesScalarWhereWithAggregatesInput | Prisma.devicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.devicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.devicesScalarWhereWithAggregatesInput | Prisma.devicesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"devices"> | number;
    terminal_id?: Prisma.StringWithAggregatesFilter<"devices"> | string;
    last_seen?: Prisma.DateTimeNullableWithAggregatesFilter<"devices"> | Date | string | null;
    last_ip?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    is_sealed?: Prisma.BoolNullableWithAggregatesFilter<"devices"> | boolean | null;
    is_shackle_closed?: Prisma.BoolNullableWithAggregatesFilter<"devices"> | boolean | null;
    gps_valid?: Prisma.BoolNullableWithAggregatesFilter<"devices"> | boolean | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"devices"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"devices"> | number | null;
    elevation?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    speed?: Prisma.FloatNullableWithAggregatesFilter<"devices"> | number | null;
    direction?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    device_time?: Prisma.DateTimeNullableWithAggregatesFilter<"devices"> | Date | string | null;
    battery_percent?: Prisma.FloatNullableWithAggregatesFilter<"devices"> | number | null;
    battery_voltage?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    signal_csq?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    satellite_count?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    network_mode?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    charge_status?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    iccid?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    hw_version?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    sw_version?: Prisma.StringNullableWithAggregatesFilter<"devices"> | string | null;
    alarm_flag?: Prisma.IntNullableWithAggregatesFilter<"devices"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"devices"> | Date | string | null;
};
export type devicesCreateInput = {
    terminal_id: string;
    last_seen?: Date | string | null;
    last_ip?: string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    battery_percent?: number | null;
    battery_voltage?: number | null;
    signal_csq?: number | null;
    satellite_count?: number | null;
    network_mode?: string | null;
    charge_status?: string | null;
    iccid?: string | null;
    hw_version?: string | null;
    sw_version?: string | null;
    alarm_flag?: number | null;
    created_at?: Date | string | null;
};
export type devicesUncheckedCreateInput = {
    id?: number;
    terminal_id: string;
    last_seen?: Date | string | null;
    last_ip?: string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    battery_percent?: number | null;
    battery_voltage?: number | null;
    signal_csq?: number | null;
    satellite_count?: number | null;
    network_mode?: string | null;
    charge_status?: string | null;
    iccid?: string | null;
    hw_version?: string | null;
    sw_version?: string | null;
    alarm_flag?: number | null;
    created_at?: Date | string | null;
};
export type devicesUpdateInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    battery_voltage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    satellite_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    network_mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    charge_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type devicesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    battery_voltage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    satellite_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    network_mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    charge_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type devicesCreateManyInput = {
    id?: number;
    terminal_id: string;
    last_seen?: Date | string | null;
    last_ip?: string | null;
    is_sealed?: boolean | null;
    is_shackle_closed?: boolean | null;
    gps_valid?: boolean | null;
    latitude?: number | null;
    longitude?: number | null;
    elevation?: number | null;
    speed?: number | null;
    direction?: number | null;
    device_time?: Date | string | null;
    battery_percent?: number | null;
    battery_voltage?: number | null;
    signal_csq?: number | null;
    satellite_count?: number | null;
    network_mode?: string | null;
    charge_status?: string | null;
    iccid?: string | null;
    hw_version?: string | null;
    sw_version?: string | null;
    alarm_flag?: number | null;
    created_at?: Date | string | null;
};
export type devicesUpdateManyMutationInput = {
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    battery_voltage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    satellite_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    network_mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    charge_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type devicesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    terminal_id?: Prisma.StringFieldUpdateOperationsInput | string;
    last_seen?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    last_ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_sealed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_shackle_closed?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    gps_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    elevation?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    direction?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    device_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    battery_percent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    battery_voltage?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signal_csq?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    satellite_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    network_mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    charge_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sw_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alarm_flag?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type devicesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    last_seen?: Prisma.SortOrder;
    last_ip?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    satellite_count?: Prisma.SortOrder;
    network_mode?: Prisma.SortOrder;
    charge_status?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    hw_version?: Prisma.SortOrder;
    sw_version?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type devicesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    satellite_count?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
};
export type devicesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    last_seen?: Prisma.SortOrder;
    last_ip?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    satellite_count?: Prisma.SortOrder;
    network_mode?: Prisma.SortOrder;
    charge_status?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    hw_version?: Prisma.SortOrder;
    sw_version?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type devicesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    terminal_id?: Prisma.SortOrder;
    last_seen?: Prisma.SortOrder;
    last_ip?: Prisma.SortOrder;
    is_sealed?: Prisma.SortOrder;
    is_shackle_closed?: Prisma.SortOrder;
    gps_valid?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    device_time?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    satellite_count?: Prisma.SortOrder;
    network_mode?: Prisma.SortOrder;
    charge_status?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    hw_version?: Prisma.SortOrder;
    sw_version?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type devicesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    elevation?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    direction?: Prisma.SortOrder;
    battery_percent?: Prisma.SortOrder;
    battery_voltage?: Prisma.SortOrder;
    signal_csq?: Prisma.SortOrder;
    satellite_count?: Prisma.SortOrder;
    alarm_flag?: Prisma.SortOrder;
};
export type devicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    last_seen?: boolean;
    last_ip?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    battery_percent?: boolean;
    battery_voltage?: boolean;
    signal_csq?: boolean;
    satellite_count?: boolean;
    network_mode?: boolean;
    charge_status?: boolean;
    iccid?: boolean;
    hw_version?: boolean;
    sw_version?: boolean;
    alarm_flag?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["devices"]>;
export type devicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    last_seen?: boolean;
    last_ip?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    battery_percent?: boolean;
    battery_voltage?: boolean;
    signal_csq?: boolean;
    satellite_count?: boolean;
    network_mode?: boolean;
    charge_status?: boolean;
    iccid?: boolean;
    hw_version?: boolean;
    sw_version?: boolean;
    alarm_flag?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["devices"]>;
export type devicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    terminal_id?: boolean;
    last_seen?: boolean;
    last_ip?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    battery_percent?: boolean;
    battery_voltage?: boolean;
    signal_csq?: boolean;
    satellite_count?: boolean;
    network_mode?: boolean;
    charge_status?: boolean;
    iccid?: boolean;
    hw_version?: boolean;
    sw_version?: boolean;
    alarm_flag?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["devices"]>;
export type devicesSelectScalar = {
    id?: boolean;
    terminal_id?: boolean;
    last_seen?: boolean;
    last_ip?: boolean;
    is_sealed?: boolean;
    is_shackle_closed?: boolean;
    gps_valid?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    elevation?: boolean;
    speed?: boolean;
    direction?: boolean;
    device_time?: boolean;
    battery_percent?: boolean;
    battery_voltage?: boolean;
    signal_csq?: boolean;
    satellite_count?: boolean;
    network_mode?: boolean;
    charge_status?: boolean;
    iccid?: boolean;
    hw_version?: boolean;
    sw_version?: boolean;
    alarm_flag?: boolean;
    created_at?: boolean;
};
export type devicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "terminal_id" | "last_seen" | "last_ip" | "is_sealed" | "is_shackle_closed" | "gps_valid" | "latitude" | "longitude" | "elevation" | "speed" | "direction" | "device_time" | "battery_percent" | "battery_voltage" | "signal_csq" | "satellite_count" | "network_mode" | "charge_status" | "iccid" | "hw_version" | "sw_version" | "alarm_flag" | "created_at", ExtArgs["result"]["devices"]>;
export type $devicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "devices";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        terminal_id: string;
        last_seen: Date | null;
        last_ip: string | null;
        is_sealed: boolean | null;
        is_shackle_closed: boolean | null;
        gps_valid: boolean | null;
        latitude: number | null;
        longitude: number | null;
        elevation: number | null;
        speed: number | null;
        direction: number | null;
        device_time: Date | null;
        battery_percent: number | null;
        battery_voltage: number | null;
        signal_csq: number | null;
        satellite_count: number | null;
        network_mode: string | null;
        charge_status: string | null;
        iccid: string | null;
        hw_version: string | null;
        sw_version: string | null;
        alarm_flag: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["devices"]>;
    composites: {};
};
export type devicesGetPayload<S extends boolean | null | undefined | devicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$devicesPayload, S>;
export type devicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<devicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DevicesCountAggregateInputType | true;
};
export interface devicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['devices'];
        meta: {
            name: 'devices';
        };
    };
    /**
     * Find zero or one Devices that matches the filter.
     * @param {devicesFindUniqueArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends devicesFindUniqueArgs>(args: Prisma.SelectSubset<T, devicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Devices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {devicesFindUniqueOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends devicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, devicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesFindFirstArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends devicesFindFirstArgs>(args?: Prisma.SelectSubset<T, devicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Devices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesFindFirstOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends devicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, devicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.devices.findMany()
     *
     * // Get first 10 Devices
     * const devices = await prisma.devices.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const devicesWithIdOnly = await prisma.devices.findMany({ select: { id: true } })
     *
     */
    findMany<T extends devicesFindManyArgs>(args?: Prisma.SelectSubset<T, devicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Devices.
     * @param {devicesCreateArgs} args - Arguments to create a Devices.
     * @example
     * // Create one Devices
     * const Devices = await prisma.devices.create({
     *   data: {
     *     // ... data to create a Devices
     *   }
     * })
     *
     */
    create<T extends devicesCreateArgs>(args: Prisma.SelectSubset<T, devicesCreateArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Devices.
     * @param {devicesCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends devicesCreateManyArgs>(args?: Prisma.SelectSubset<T, devicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Devices and returns the data saved in the database.
     * @param {devicesCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Devices and only return the `id`
     * const devicesWithIdOnly = await prisma.devices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends devicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, devicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Devices.
     * @param {devicesDeleteArgs} args - Arguments to delete one Devices.
     * @example
     * // Delete one Devices
     * const Devices = await prisma.devices.delete({
     *   where: {
     *     // ... filter to delete one Devices
     *   }
     * })
     *
     */
    delete<T extends devicesDeleteArgs>(args: Prisma.SelectSubset<T, devicesDeleteArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Devices.
     * @param {devicesUpdateArgs} args - Arguments to update one Devices.
     * @example
     * // Update one Devices
     * const devices = await prisma.devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends devicesUpdateArgs>(args: Prisma.SelectSubset<T, devicesUpdateArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Devices.
     * @param {devicesDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends devicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, devicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends devicesUpdateManyArgs>(args: Prisma.SelectSubset<T, devicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {devicesUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Devices and only return the `id`
     * const devicesWithIdOnly = await prisma.devices.updateManyAndReturn({
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
    updateManyAndReturn<T extends devicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, devicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Devices.
     * @param {devicesUpsertArgs} args - Arguments to update or create a Devices.
     * @example
     * // Update or create a Devices
     * const devices = await prisma.devices.upsert({
     *   create: {
     *     // ... data to create a Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices we want to update
     *   }
     * })
     */
    upsert<T extends devicesUpsertArgs>(args: Prisma.SelectSubset<T, devicesUpsertArgs<ExtArgs>>): Prisma.Prisma__devicesClient<runtime.Types.Result.GetResult<Prisma.$devicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.devices.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends devicesCountArgs>(args?: Prisma.Subset<T, devicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DevicesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevicesAggregateArgs>(args: Prisma.Subset<T, DevicesAggregateArgs>): Prisma.PrismaPromise<GetDevicesAggregateType<T>>;
    /**
     * Group by Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devicesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends devicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: devicesGroupByArgs['orderBy'];
    } : {
        orderBy?: devicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, devicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the devices model
     */
    readonly fields: devicesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for devices.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__devicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the devices model
 */
export interface devicesFieldRefs {
    readonly id: Prisma.FieldRef<"devices", 'Int'>;
    readonly terminal_id: Prisma.FieldRef<"devices", 'String'>;
    readonly last_seen: Prisma.FieldRef<"devices", 'DateTime'>;
    readonly last_ip: Prisma.FieldRef<"devices", 'String'>;
    readonly is_sealed: Prisma.FieldRef<"devices", 'Boolean'>;
    readonly is_shackle_closed: Prisma.FieldRef<"devices", 'Boolean'>;
    readonly gps_valid: Prisma.FieldRef<"devices", 'Boolean'>;
    readonly latitude: Prisma.FieldRef<"devices", 'Float'>;
    readonly longitude: Prisma.FieldRef<"devices", 'Float'>;
    readonly elevation: Prisma.FieldRef<"devices", 'Int'>;
    readonly speed: Prisma.FieldRef<"devices", 'Float'>;
    readonly direction: Prisma.FieldRef<"devices", 'Int'>;
    readonly device_time: Prisma.FieldRef<"devices", 'DateTime'>;
    readonly battery_percent: Prisma.FieldRef<"devices", 'Float'>;
    readonly battery_voltage: Prisma.FieldRef<"devices", 'Int'>;
    readonly signal_csq: Prisma.FieldRef<"devices", 'Int'>;
    readonly satellite_count: Prisma.FieldRef<"devices", 'Int'>;
    readonly network_mode: Prisma.FieldRef<"devices", 'String'>;
    readonly charge_status: Prisma.FieldRef<"devices", 'String'>;
    readonly iccid: Prisma.FieldRef<"devices", 'String'>;
    readonly hw_version: Prisma.FieldRef<"devices", 'String'>;
    readonly sw_version: Prisma.FieldRef<"devices", 'String'>;
    readonly alarm_flag: Prisma.FieldRef<"devices", 'Int'>;
    readonly created_at: Prisma.FieldRef<"devices", 'DateTime'>;
}
/**
 * devices findUnique
 */
export type devicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where: Prisma.devicesWhereUniqueInput;
};
/**
 * devices findUniqueOrThrow
 */
export type devicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where: Prisma.devicesWhereUniqueInput;
};
/**
 * devices findFirst
 */
export type devicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where?: Prisma.devicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: Prisma.devicesOrderByWithRelationInput | Prisma.devicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for devices.
     */
    cursor?: Prisma.devicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of devices.
     */
    distinct?: Prisma.DevicesScalarFieldEnum | Prisma.DevicesScalarFieldEnum[];
};
/**
 * devices findFirstOrThrow
 */
export type devicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where?: Prisma.devicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: Prisma.devicesOrderByWithRelationInput | Prisma.devicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for devices.
     */
    cursor?: Prisma.devicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of devices.
     */
    distinct?: Prisma.DevicesScalarFieldEnum | Prisma.DevicesScalarFieldEnum[];
};
/**
 * devices findMany
 */
export type devicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where?: Prisma.devicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: Prisma.devicesOrderByWithRelationInput | Prisma.devicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing devices.
     */
    cursor?: Prisma.devicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of devices.
     */
    distinct?: Prisma.DevicesScalarFieldEnum | Prisma.DevicesScalarFieldEnum[];
};
/**
 * devices create
 */
export type devicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * The data needed to create a devices.
     */
    data: Prisma.XOR<Prisma.devicesCreateInput, Prisma.devicesUncheckedCreateInput>;
};
/**
 * devices createMany
 */
export type devicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: Prisma.devicesCreateManyInput | Prisma.devicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * devices createManyAndReturn
 */
export type devicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * The data used to create many devices.
     */
    data: Prisma.devicesCreateManyInput | Prisma.devicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * devices update
 */
export type devicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * The data needed to update a devices.
     */
    data: Prisma.XOR<Prisma.devicesUpdateInput, Prisma.devicesUncheckedUpdateInput>;
    /**
     * Choose, which devices to update.
     */
    where: Prisma.devicesWhereUniqueInput;
};
/**
 * devices updateMany
 */
export type devicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: Prisma.XOR<Prisma.devicesUpdateManyMutationInput, Prisma.devicesUncheckedUpdateManyInput>;
    /**
     * Filter which devices to update
     */
    where?: Prisma.devicesWhereInput;
    /**
     * Limit how many devices to update.
     */
    limit?: number;
};
/**
 * devices updateManyAndReturn
 */
export type devicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * The data used to update devices.
     */
    data: Prisma.XOR<Prisma.devicesUpdateManyMutationInput, Prisma.devicesUncheckedUpdateManyInput>;
    /**
     * Filter which devices to update
     */
    where?: Prisma.devicesWhereInput;
    /**
     * Limit how many devices to update.
     */
    limit?: number;
};
/**
 * devices upsert
 */
export type devicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * The filter to search for the devices to update in case it exists.
     */
    where: Prisma.devicesWhereUniqueInput;
    /**
     * In case the devices found by the `where` argument doesn't exist, create a new devices with this data.
     */
    create: Prisma.XOR<Prisma.devicesCreateInput, Prisma.devicesUncheckedCreateInput>;
    /**
     * In case the devices was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.devicesUpdateInput, Prisma.devicesUncheckedUpdateInput>;
};
/**
 * devices delete
 */
export type devicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
    /**
     * Filter which devices to delete.
     */
    where: Prisma.devicesWhereUniqueInput;
};
/**
 * devices deleteMany
 */
export type devicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: Prisma.devicesWhereInput;
    /**
     * Limit how many devices to delete.
     */
    limit?: number;
};
/**
 * devices without action
 */
export type devicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devices
     */
    select?: Prisma.devicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the devices
     */
    omit?: Prisma.devicesOmit<ExtArgs> | null;
};
//# sourceMappingURL=devices.d.ts.map