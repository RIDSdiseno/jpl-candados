import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Device
 *
 */
export type DeviceModel = runtime.Types.Result.DefaultSelection<Prisma.$DevicePayload>;
export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type DeviceAvgAggregateOutputType = {
    batteryLevel: number | null;
    lastLocationLat: number | null;
    lastLocationLng: number | null;
    signalStrength: number | null;
};
export type DeviceSumAggregateOutputType = {
    batteryLevel: number | null;
    lastLocationLat: number | null;
    lastLocationLng: number | null;
    signalStrength: number | null;
};
export type DeviceMinAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceId: string | null;
    name: string | null;
    companyId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    batteryLevel: number | null;
    bleMac: string | null;
    bluetoothName: string | null;
    deviceType: string | null;
    firmwareVersion: string | null;
    gpsSupported: boolean | null;
    hardwareVersion: string | null;
    iccid: string | null;
    imei: string | null;
    keyboardSupported: boolean | null;
    lastAddress: string | null;
    lastConnectionAt: Date | null;
    lastLocationLat: number | null;
    lastLocationLng: number | null;
    lockStatus: string | null;
    loraSupported: boolean | null;
    nfcSupported: boolean | null;
    notes: string | null;
    onlineStatus: string | null;
    productModel: string | null;
    remoteUnlockSupported: boolean | null;
    serialNumber: string | null;
    shackleStatus: string | null;
    signalStrength: number | null;
    simNumber: string | null;
};
export type DeviceMaxAggregateOutputType = {
    id: string | null;
    providerId: string | null;
    deviceId: string | null;
    name: string | null;
    companyId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    batteryLevel: number | null;
    bleMac: string | null;
    bluetoothName: string | null;
    deviceType: string | null;
    firmwareVersion: string | null;
    gpsSupported: boolean | null;
    hardwareVersion: string | null;
    iccid: string | null;
    imei: string | null;
    keyboardSupported: boolean | null;
    lastAddress: string | null;
    lastConnectionAt: Date | null;
    lastLocationLat: number | null;
    lastLocationLng: number | null;
    lockStatus: string | null;
    loraSupported: boolean | null;
    nfcSupported: boolean | null;
    notes: string | null;
    onlineStatus: string | null;
    productModel: string | null;
    remoteUnlockSupported: boolean | null;
    serialNumber: string | null;
    shackleStatus: string | null;
    signalStrength: number | null;
    simNumber: string | null;
};
export type DeviceCountAggregateOutputType = {
    id: number;
    providerId: number;
    deviceId: number;
    name: number;
    companyId: number;
    status: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    batteryLevel: number;
    bleMac: number;
    bluetoothName: number;
    deviceType: number;
    firmwareVersion: number;
    gpsSupported: number;
    hardwareVersion: number;
    iccid: number;
    imei: number;
    keyboardSupported: number;
    lastAddress: number;
    lastConnectionAt: number;
    lastLocationLat: number;
    lastLocationLng: number;
    lockStatus: number;
    loraSupported: number;
    nfcSupported: number;
    notes: number;
    onlineStatus: number;
    productModel: number;
    remoteUnlockSupported: number;
    serialNumber: number;
    shackleStatus: number;
    signalStrength: number;
    simNumber: number;
    _all: number;
};
export type DeviceAvgAggregateInputType = {
    batteryLevel?: true;
    lastLocationLat?: true;
    lastLocationLng?: true;
    signalStrength?: true;
};
export type DeviceSumAggregateInputType = {
    batteryLevel?: true;
    lastLocationLat?: true;
    lastLocationLng?: true;
    signalStrength?: true;
};
export type DeviceMinAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceId?: true;
    name?: true;
    companyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    batteryLevel?: true;
    bleMac?: true;
    bluetoothName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    gpsSupported?: true;
    hardwareVersion?: true;
    iccid?: true;
    imei?: true;
    keyboardSupported?: true;
    lastAddress?: true;
    lastConnectionAt?: true;
    lastLocationLat?: true;
    lastLocationLng?: true;
    lockStatus?: true;
    loraSupported?: true;
    nfcSupported?: true;
    notes?: true;
    onlineStatus?: true;
    productModel?: true;
    remoteUnlockSupported?: true;
    serialNumber?: true;
    shackleStatus?: true;
    signalStrength?: true;
    simNumber?: true;
};
export type DeviceMaxAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceId?: true;
    name?: true;
    companyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    batteryLevel?: true;
    bleMac?: true;
    bluetoothName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    gpsSupported?: true;
    hardwareVersion?: true;
    iccid?: true;
    imei?: true;
    keyboardSupported?: true;
    lastAddress?: true;
    lastConnectionAt?: true;
    lastLocationLat?: true;
    lastLocationLng?: true;
    lockStatus?: true;
    loraSupported?: true;
    nfcSupported?: true;
    notes?: true;
    onlineStatus?: true;
    productModel?: true;
    remoteUnlockSupported?: true;
    serialNumber?: true;
    shackleStatus?: true;
    signalStrength?: true;
    simNumber?: true;
};
export type DeviceCountAggregateInputType = {
    id?: true;
    providerId?: true;
    deviceId?: true;
    name?: true;
    companyId?: true;
    status?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    batteryLevel?: true;
    bleMac?: true;
    bluetoothName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    gpsSupported?: true;
    hardwareVersion?: true;
    iccid?: true;
    imei?: true;
    keyboardSupported?: true;
    lastAddress?: true;
    lastConnectionAt?: true;
    lastLocationLat?: true;
    lastLocationLng?: true;
    lockStatus?: true;
    loraSupported?: true;
    nfcSupported?: true;
    notes?: true;
    onlineStatus?: true;
    productModel?: true;
    remoteUnlockSupported?: true;
    serialNumber?: true;
    shackleStatus?: true;
    signalStrength?: true;
    simNumber?: true;
    _all?: true;
};
export type DeviceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType;
};
export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDevice[P]> : Prisma.GetScalarType<T[P], AggregateDevice[P]>;
};
export type DeviceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithAggregationInput | Prisma.DeviceOrderByWithAggregationInput[];
    by: Prisma.DeviceScalarFieldEnum[] | Prisma.DeviceScalarFieldEnum;
    having?: Prisma.DeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _avg?: DeviceAvgAggregateInputType;
    _sum?: DeviceSumAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type DeviceGroupByOutputType = {
    id: string;
    providerId: string | null;
    deviceId: string;
    name: string;
    companyId: string | null;
    status: string;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    batteryLevel: number | null;
    bleMac: string | null;
    bluetoothName: string | null;
    deviceType: string;
    firmwareVersion: string | null;
    gpsSupported: boolean;
    hardwareVersion: string | null;
    iccid: string | null;
    imei: string | null;
    keyboardSupported: boolean;
    lastAddress: string | null;
    lastConnectionAt: Date | null;
    lastLocationLat: number | null;
    lastLocationLng: number | null;
    lockStatus: string | null;
    loraSupported: boolean;
    nfcSupported: boolean;
    notes: string | null;
    onlineStatus: string;
    productModel: string;
    remoteUnlockSupported: boolean;
    serialNumber: string | null;
    shackleStatus: string | null;
    signalStrength: number | null;
    simNumber: string | null;
    _count: DeviceCountAggregateOutputType | null;
    _avg: DeviceAvgAggregateOutputType | null;
    _sum: DeviceSumAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]>;
}>>;
export type DeviceWhereInput = {
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    id?: Prisma.StringFilter<"Device"> | string;
    providerId?: Prisma.StringNullableFilter<"Device"> | string | null;
    deviceId?: Prisma.StringFilter<"Device"> | string;
    name?: Prisma.StringFilter<"Device"> | string;
    companyId?: Prisma.StringNullableFilter<"Device"> | string | null;
    status?: Prisma.StringFilter<"Device"> | string;
    metadata?: Prisma.JsonNullableFilter<"Device">;
    createdAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    batteryLevel?: Prisma.IntNullableFilter<"Device"> | number | null;
    bleMac?: Prisma.StringNullableFilter<"Device"> | string | null;
    bluetoothName?: Prisma.StringNullableFilter<"Device"> | string | null;
    deviceType?: Prisma.StringFilter<"Device"> | string;
    firmwareVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    gpsSupported?: Prisma.BoolFilter<"Device"> | boolean;
    hardwareVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    iccid?: Prisma.StringNullableFilter<"Device"> | string | null;
    imei?: Prisma.StringNullableFilter<"Device"> | string | null;
    keyboardSupported?: Prisma.BoolFilter<"Device"> | boolean;
    lastAddress?: Prisma.StringNullableFilter<"Device"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    lastLocationLat?: Prisma.FloatNullableFilter<"Device"> | number | null;
    lastLocationLng?: Prisma.FloatNullableFilter<"Device"> | number | null;
    lockStatus?: Prisma.StringNullableFilter<"Device"> | string | null;
    loraSupported?: Prisma.BoolFilter<"Device"> | boolean;
    nfcSupported?: Prisma.BoolFilter<"Device"> | boolean;
    notes?: Prisma.StringNullableFilter<"Device"> | string | null;
    onlineStatus?: Prisma.StringFilter<"Device"> | string;
    productModel?: Prisma.StringFilter<"Device"> | string;
    remoteUnlockSupported?: Prisma.BoolFilter<"Device"> | boolean;
    serialNumber?: Prisma.StringNullableFilter<"Device"> | string | null;
    shackleStatus?: Prisma.StringNullableFilter<"Device"> | string | null;
    signalStrength?: Prisma.IntNullableFilter<"Device"> | number | null;
    simNumber?: Prisma.StringNullableFilter<"Device"> | string | null;
};
export type DeviceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    bleMac?: Prisma.SortOrderInput | Prisma.SortOrder;
    bluetoothName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    gpsSupported?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    iccid?: Prisma.SortOrderInput | Prisma.SortOrder;
    imei?: Prisma.SortOrderInput | Prisma.SortOrder;
    keyboardSupported?: Prisma.SortOrder;
    lastAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    loraSupported?: Prisma.SortOrder;
    nfcSupported?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineStatus?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    remoteUnlockSupported?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalStrength?: Prisma.SortOrderInput | Prisma.SortOrder;
    simNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    providerId?: string;
    deviceId?: string;
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    name?: Prisma.StringFilter<"Device"> | string;
    companyId?: Prisma.StringNullableFilter<"Device"> | string | null;
    status?: Prisma.StringFilter<"Device"> | string;
    metadata?: Prisma.JsonNullableFilter<"Device">;
    createdAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    batteryLevel?: Prisma.IntNullableFilter<"Device"> | number | null;
    bleMac?: Prisma.StringNullableFilter<"Device"> | string | null;
    bluetoothName?: Prisma.StringNullableFilter<"Device"> | string | null;
    deviceType?: Prisma.StringFilter<"Device"> | string;
    firmwareVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    gpsSupported?: Prisma.BoolFilter<"Device"> | boolean;
    hardwareVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    iccid?: Prisma.StringNullableFilter<"Device"> | string | null;
    imei?: Prisma.StringNullableFilter<"Device"> | string | null;
    keyboardSupported?: Prisma.BoolFilter<"Device"> | boolean;
    lastAddress?: Prisma.StringNullableFilter<"Device"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    lastLocationLat?: Prisma.FloatNullableFilter<"Device"> | number | null;
    lastLocationLng?: Prisma.FloatNullableFilter<"Device"> | number | null;
    lockStatus?: Prisma.StringNullableFilter<"Device"> | string | null;
    loraSupported?: Prisma.BoolFilter<"Device"> | boolean;
    nfcSupported?: Prisma.BoolFilter<"Device"> | boolean;
    notes?: Prisma.StringNullableFilter<"Device"> | string | null;
    onlineStatus?: Prisma.StringFilter<"Device"> | string;
    productModel?: Prisma.StringFilter<"Device"> | string;
    remoteUnlockSupported?: Prisma.BoolFilter<"Device"> | boolean;
    serialNumber?: Prisma.StringNullableFilter<"Device"> | string | null;
    shackleStatus?: Prisma.StringNullableFilter<"Device"> | string | null;
    signalStrength?: Prisma.IntNullableFilter<"Device"> | number | null;
    simNumber?: Prisma.StringNullableFilter<"Device"> | string | null;
}, "id" | "providerId" | "deviceId">;
export type DeviceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    bleMac?: Prisma.SortOrderInput | Prisma.SortOrder;
    bluetoothName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    gpsSupported?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    iccid?: Prisma.SortOrderInput | Prisma.SortOrder;
    imei?: Prisma.SortOrderInput | Prisma.SortOrder;
    keyboardSupported?: Prisma.SortOrder;
    lastAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    loraSupported?: Prisma.SortOrder;
    nfcSupported?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    onlineStatus?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    remoteUnlockSupported?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalStrength?: Prisma.SortOrderInput | Prisma.SortOrder;
    simNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DeviceCountOrderByAggregateInput;
    _avg?: Prisma.DeviceAvgOrderByAggregateInput;
    _max?: Prisma.DeviceMaxOrderByAggregateInput;
    _min?: Prisma.DeviceMinOrderByAggregateInput;
    _sum?: Prisma.DeviceSumOrderByAggregateInput;
};
export type DeviceScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    providerId?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    deviceId?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    companyId?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Device">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
    batteryLevel?: Prisma.IntNullableWithAggregatesFilter<"Device"> | number | null;
    bleMac?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    bluetoothName?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    deviceType?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    firmwareVersion?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    gpsSupported?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    hardwareVersion?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    iccid?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    imei?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    keyboardSupported?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    lastAddress?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    lastConnectionAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
    lastLocationLat?: Prisma.FloatNullableWithAggregatesFilter<"Device"> | number | null;
    lastLocationLng?: Prisma.FloatNullableWithAggregatesFilter<"Device"> | number | null;
    lockStatus?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    loraSupported?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    nfcSupported?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    onlineStatus?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    productModel?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    remoteUnlockSupported?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    serialNumber?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    shackleStatus?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    signalStrength?: Prisma.IntNullableWithAggregatesFilter<"Device"> | number | null;
    simNumber?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
};
export type DeviceCreateInput = {
    id: string;
    providerId?: string | null;
    deviceId: string;
    name: string;
    companyId?: string | null;
    status?: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    batteryLevel?: number | null;
    bleMac?: string | null;
    bluetoothName?: string | null;
    deviceType?: string;
    firmwareVersion?: string | null;
    gpsSupported?: boolean;
    hardwareVersion?: string | null;
    iccid?: string | null;
    imei?: string | null;
    keyboardSupported?: boolean;
    lastAddress?: string | null;
    lastConnectionAt?: Date | string | null;
    lastLocationLat?: number | null;
    lastLocationLng?: number | null;
    lockStatus?: string | null;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: string | null;
    onlineStatus?: string;
    productModel?: string;
    remoteUnlockSupported?: boolean;
    serialNumber?: string | null;
    shackleStatus?: string | null;
    signalStrength?: number | null;
    simNumber?: string | null;
};
export type DeviceUncheckedCreateInput = {
    id: string;
    providerId?: string | null;
    deviceId: string;
    name: string;
    companyId?: string | null;
    status?: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    batteryLevel?: number | null;
    bleMac?: string | null;
    bluetoothName?: string | null;
    deviceType?: string;
    firmwareVersion?: string | null;
    gpsSupported?: boolean;
    hardwareVersion?: string | null;
    iccid?: string | null;
    imei?: string | null;
    keyboardSupported?: boolean;
    lastAddress?: string | null;
    lastConnectionAt?: Date | string | null;
    lastLocationLat?: number | null;
    lastLocationLng?: number | null;
    lockStatus?: string | null;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: string | null;
    onlineStatus?: string;
    productModel?: string;
    remoteUnlockSupported?: boolean;
    serialNumber?: string | null;
    shackleStatus?: string | null;
    signalStrength?: number | null;
    simNumber?: string | null;
};
export type DeviceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bleMac?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bluetoothName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gpsSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keyboardSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLocationLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLocationLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loraSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    nfcSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    remoteUnlockSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    simNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bleMac?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bluetoothName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gpsSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keyboardSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLocationLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLocationLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loraSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    nfcSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    remoteUnlockSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    simNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceCreateManyInput = {
    id: string;
    providerId?: string | null;
    deviceId: string;
    name: string;
    companyId?: string | null;
    status?: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string | null;
    batteryLevel?: number | null;
    bleMac?: string | null;
    bluetoothName?: string | null;
    deviceType?: string;
    firmwareVersion?: string | null;
    gpsSupported?: boolean;
    hardwareVersion?: string | null;
    iccid?: string | null;
    imei?: string | null;
    keyboardSupported?: boolean;
    lastAddress?: string | null;
    lastConnectionAt?: Date | string | null;
    lastLocationLat?: number | null;
    lastLocationLng?: number | null;
    lockStatus?: string | null;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: string | null;
    onlineStatus?: string;
    productModel?: string;
    remoteUnlockSupported?: boolean;
    serialNumber?: string | null;
    shackleStatus?: string | null;
    signalStrength?: number | null;
    simNumber?: string | null;
};
export type DeviceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bleMac?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bluetoothName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gpsSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keyboardSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLocationLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLocationLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loraSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    nfcSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    remoteUnlockSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    simNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bleMac?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bluetoothName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gpsSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    hardwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iccid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imei?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keyboardSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastConnectionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastLocationLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLocationLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loraSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    nfcSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    onlineStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    remoteUnlockSupported?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    serialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    simNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    bleMac?: Prisma.SortOrder;
    bluetoothName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    gpsSupported?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    keyboardSupported?: Prisma.SortOrder;
    lastAddress?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    loraSupported?: Prisma.SortOrder;
    nfcSupported?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    onlineStatus?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    remoteUnlockSupported?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    simNumber?: Prisma.SortOrder;
};
export type DeviceAvgOrderByAggregateInput = {
    batteryLevel?: Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
};
export type DeviceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    bleMac?: Prisma.SortOrder;
    bluetoothName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    gpsSupported?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    keyboardSupported?: Prisma.SortOrder;
    lastAddress?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    loraSupported?: Prisma.SortOrder;
    nfcSupported?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    onlineStatus?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    remoteUnlockSupported?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    simNumber?: Prisma.SortOrder;
};
export type DeviceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    bleMac?: Prisma.SortOrder;
    bluetoothName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    gpsSupported?: Prisma.SortOrder;
    hardwareVersion?: Prisma.SortOrder;
    iccid?: Prisma.SortOrder;
    imei?: Prisma.SortOrder;
    keyboardSupported?: Prisma.SortOrder;
    lastAddress?: Prisma.SortOrder;
    lastConnectionAt?: Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    loraSupported?: Prisma.SortOrder;
    nfcSupported?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    onlineStatus?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    remoteUnlockSupported?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    simNumber?: Prisma.SortOrder;
};
export type DeviceSumOrderByAggregateInput = {
    batteryLevel?: Prisma.SortOrder;
    lastLocationLat?: Prisma.SortOrder;
    lastLocationLng?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DeviceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceId?: boolean;
    name?: boolean;
    companyId?: boolean;
    status?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    batteryLevel?: boolean;
    bleMac?: boolean;
    bluetoothName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    gpsSupported?: boolean;
    hardwareVersion?: boolean;
    iccid?: boolean;
    imei?: boolean;
    keyboardSupported?: boolean;
    lastAddress?: boolean;
    lastConnectionAt?: boolean;
    lastLocationLat?: boolean;
    lastLocationLng?: boolean;
    lockStatus?: boolean;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: boolean;
    onlineStatus?: boolean;
    productModel?: boolean;
    remoteUnlockSupported?: boolean;
    serialNumber?: boolean;
    shackleStatus?: boolean;
    signalStrength?: boolean;
    simNumber?: boolean;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceId?: boolean;
    name?: boolean;
    companyId?: boolean;
    status?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    batteryLevel?: boolean;
    bleMac?: boolean;
    bluetoothName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    gpsSupported?: boolean;
    hardwareVersion?: boolean;
    iccid?: boolean;
    imei?: boolean;
    keyboardSupported?: boolean;
    lastAddress?: boolean;
    lastConnectionAt?: boolean;
    lastLocationLat?: boolean;
    lastLocationLng?: boolean;
    lockStatus?: boolean;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: boolean;
    onlineStatus?: boolean;
    productModel?: boolean;
    remoteUnlockSupported?: boolean;
    serialNumber?: boolean;
    shackleStatus?: boolean;
    signalStrength?: boolean;
    simNumber?: boolean;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    providerId?: boolean;
    deviceId?: boolean;
    name?: boolean;
    companyId?: boolean;
    status?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    batteryLevel?: boolean;
    bleMac?: boolean;
    bluetoothName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    gpsSupported?: boolean;
    hardwareVersion?: boolean;
    iccid?: boolean;
    imei?: boolean;
    keyboardSupported?: boolean;
    lastAddress?: boolean;
    lastConnectionAt?: boolean;
    lastLocationLat?: boolean;
    lastLocationLng?: boolean;
    lockStatus?: boolean;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: boolean;
    onlineStatus?: boolean;
    productModel?: boolean;
    remoteUnlockSupported?: boolean;
    serialNumber?: boolean;
    shackleStatus?: boolean;
    signalStrength?: boolean;
    simNumber?: boolean;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectScalar = {
    id?: boolean;
    providerId?: boolean;
    deviceId?: boolean;
    name?: boolean;
    companyId?: boolean;
    status?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    batteryLevel?: boolean;
    bleMac?: boolean;
    bluetoothName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    gpsSupported?: boolean;
    hardwareVersion?: boolean;
    iccid?: boolean;
    imei?: boolean;
    keyboardSupported?: boolean;
    lastAddress?: boolean;
    lastConnectionAt?: boolean;
    lastLocationLat?: boolean;
    lastLocationLng?: boolean;
    lockStatus?: boolean;
    loraSupported?: boolean;
    nfcSupported?: boolean;
    notes?: boolean;
    onlineStatus?: boolean;
    productModel?: boolean;
    remoteUnlockSupported?: boolean;
    serialNumber?: boolean;
    shackleStatus?: boolean;
    signalStrength?: boolean;
    simNumber?: boolean;
};
export type DeviceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "providerId" | "deviceId" | "name" | "companyId" | "status" | "metadata" | "createdAt" | "updatedAt" | "deletedAt" | "batteryLevel" | "bleMac" | "bluetoothName" | "deviceType" | "firmwareVersion" | "gpsSupported" | "hardwareVersion" | "iccid" | "imei" | "keyboardSupported" | "lastAddress" | "lastConnectionAt" | "lastLocationLat" | "lastLocationLng" | "lockStatus" | "loraSupported" | "nfcSupported" | "notes" | "onlineStatus" | "productModel" | "remoteUnlockSupported" | "serialNumber" | "shackleStatus" | "signalStrength" | "simNumber", ExtArgs["result"]["device"]>;
export type $DevicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Device";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        providerId: string | null;
        deviceId: string;
        name: string;
        companyId: string | null;
        status: string;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        batteryLevel: number | null;
        bleMac: string | null;
        bluetoothName: string | null;
        deviceType: string;
        firmwareVersion: string | null;
        gpsSupported: boolean;
        hardwareVersion: string | null;
        iccid: string | null;
        imei: string | null;
        keyboardSupported: boolean;
        lastAddress: string | null;
        lastConnectionAt: Date | null;
        lastLocationLat: number | null;
        lastLocationLng: number | null;
        lockStatus: string | null;
        loraSupported: boolean;
        nfcSupported: boolean;
        notes: string | null;
        onlineStatus: string;
        productModel: string;
        remoteUnlockSupported: boolean;
        serialNumber: string | null;
        shackleStatus: string | null;
        signalStrength: number | null;
        simNumber: string | null;
    }, ExtArgs["result"]["device"]>;
    composites: {};
};
export type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DevicePayload, S>;
export type DeviceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceCountAggregateInputType | true;
};
export interface DeviceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Device'];
        meta: {
            name: 'Device';
        };
    };
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     *
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     *
     */
    create<T extends DeviceCreateArgs>(args: Prisma.SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     *
     */
    delete<T extends DeviceDeleteArgs>(args: Prisma.SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceUpdateArgs>(args: Prisma.SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: Prisma.SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(args?: Prisma.Subset<T, DeviceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Prisma.Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;
    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Device model
     */
    readonly fields: DeviceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Device.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Device model
 */
export interface DeviceFieldRefs {
    readonly id: Prisma.FieldRef<"Device", 'String'>;
    readonly providerId: Prisma.FieldRef<"Device", 'String'>;
    readonly deviceId: Prisma.FieldRef<"Device", 'String'>;
    readonly name: Prisma.FieldRef<"Device", 'String'>;
    readonly companyId: Prisma.FieldRef<"Device", 'String'>;
    readonly status: Prisma.FieldRef<"Device", 'String'>;
    readonly metadata: Prisma.FieldRef<"Device", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly batteryLevel: Prisma.FieldRef<"Device", 'Int'>;
    readonly bleMac: Prisma.FieldRef<"Device", 'String'>;
    readonly bluetoothName: Prisma.FieldRef<"Device", 'String'>;
    readonly deviceType: Prisma.FieldRef<"Device", 'String'>;
    readonly firmwareVersion: Prisma.FieldRef<"Device", 'String'>;
    readonly gpsSupported: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly hardwareVersion: Prisma.FieldRef<"Device", 'String'>;
    readonly iccid: Prisma.FieldRef<"Device", 'String'>;
    readonly imei: Prisma.FieldRef<"Device", 'String'>;
    readonly keyboardSupported: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly lastAddress: Prisma.FieldRef<"Device", 'String'>;
    readonly lastConnectionAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly lastLocationLat: Prisma.FieldRef<"Device", 'Float'>;
    readonly lastLocationLng: Prisma.FieldRef<"Device", 'Float'>;
    readonly lockStatus: Prisma.FieldRef<"Device", 'String'>;
    readonly loraSupported: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly nfcSupported: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly notes: Prisma.FieldRef<"Device", 'String'>;
    readonly onlineStatus: Prisma.FieldRef<"Device", 'String'>;
    readonly productModel: Prisma.FieldRef<"Device", 'String'>;
    readonly remoteUnlockSupported: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly serialNumber: Prisma.FieldRef<"Device", 'String'>;
    readonly shackleStatus: Prisma.FieldRef<"Device", 'String'>;
    readonly signalStrength: Prisma.FieldRef<"Device", 'Int'>;
    readonly simNumber: Prisma.FieldRef<"Device", 'String'>;
}
/**
 * Device findUnique
 */
export type DeviceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where: Prisma.DeviceWhereUniqueInput;
};
/**
 * Device findUniqueOrThrow
 */
export type DeviceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where: Prisma.DeviceWhereUniqueInput;
};
/**
 * Device findFirst
 */
export type DeviceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Devices.
     */
    cursor?: Prisma.DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Devices.
     */
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
/**
 * Device findFirstOrThrow
 */
export type DeviceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter, which Device to fetch.
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Devices.
     */
    cursor?: Prisma.DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Devices.
     */
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
/**
 * Device findMany
 */
export type DeviceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter, which Devices to fetch.
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Devices to fetch.
     */
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Devices.
     */
    cursor?: Prisma.DeviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Devices.
     */
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
/**
 * Device create
 */
export type DeviceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * The data needed to create a Device.
     */
    data: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
};
/**
 * Device createMany
 */
export type DeviceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Device createManyAndReturn
 */
export type DeviceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * The data used to create many Devices.
     */
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Device update
 */
export type DeviceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * The data needed to update a Device.
     */
    data: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
    /**
     * Choose, which Device to update.
     */
    where: Prisma.DeviceWhereUniqueInput;
};
/**
 * Device updateMany
 */
export type DeviceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    /**
     * Filter which Devices to update
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * Limit how many Devices to update.
     */
    limit?: number;
};
/**
 * Device updateManyAndReturn
 */
export type DeviceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * The data used to update Devices.
     */
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    /**
     * Filter which Devices to update
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * Limit how many Devices to update.
     */
    limit?: number;
};
/**
 * Device upsert
 */
export type DeviceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: Prisma.DeviceWhereUniqueInput;
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
};
/**
 * Device delete
 */
export type DeviceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    /**
     * Filter which Device to delete.
     */
    where: Prisma.DeviceWhereUniqueInput;
};
/**
 * Device deleteMany
 */
export type DeviceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: Prisma.DeviceWhereInput;
    /**
     * Limit how many Devices to delete.
     */
    limit?: number;
};
/**
 * Device without action
 */
export type DeviceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Device
     */
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
};
//# sourceMappingURL=Device.d.ts.map