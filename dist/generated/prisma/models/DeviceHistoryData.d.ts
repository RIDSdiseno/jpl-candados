import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceHistoryData
 *
 */
export type DeviceHistoryDataModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceHistoryDataPayload>;
export type AggregateDeviceHistoryData = {
    _count: DeviceHistoryDataCountAggregateOutputType | null;
    _avg: DeviceHistoryDataAvgAggregateOutputType | null;
    _sum: DeviceHistoryDataSumAggregateOutputType | null;
    _min: DeviceHistoryDataMinAggregateOutputType | null;
    _max: DeviceHistoryDataMaxAggregateOutputType | null;
};
export type DeviceHistoryDataAvgAggregateOutputType = {
    longitude: number | null;
    latitude: number | null;
    batteryLevel: number | null;
    signalStrength: number | null;
    temperature: number | null;
    speed: number | null;
};
export type DeviceHistoryDataSumAggregateOutputType = {
    longitude: number | null;
    latitude: number | null;
    batteryLevel: number | null;
    signalStrength: number | null;
    temperature: number | null;
    speed: number | null;
};
export type DeviceHistoryDataMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    reportType: string | null;
    reportedAt: Date | null;
    longitude: number | null;
    latitude: number | null;
    address: string | null;
    lockStatus: string | null;
    shackleStatus: string | null;
    batteryLevel: number | null;
    signalStrength: number | null;
    temperature: number | null;
    speed: number | null;
    createdAt: Date | null;
    companyId: string | null;
    companyName: string | null;
    deviceName: string | null;
    deviceType: string | null;
    firmwareVersion: string | null;
    productModel: string | null;
    source: string | null;
};
export type DeviceHistoryDataMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    reportType: string | null;
    reportedAt: Date | null;
    longitude: number | null;
    latitude: number | null;
    address: string | null;
    lockStatus: string | null;
    shackleStatus: string | null;
    batteryLevel: number | null;
    signalStrength: number | null;
    temperature: number | null;
    speed: number | null;
    createdAt: Date | null;
    companyId: string | null;
    companyName: string | null;
    deviceName: string | null;
    deviceType: string | null;
    firmwareVersion: string | null;
    productModel: string | null;
    source: string | null;
};
export type DeviceHistoryDataCountAggregateOutputType = {
    id: number;
    deviceId: number;
    reportType: number;
    reportedAt: number;
    longitude: number;
    latitude: number;
    address: number;
    lockStatus: number;
    shackleStatus: number;
    batteryLevel: number;
    signalStrength: number;
    temperature: number;
    speed: number;
    rawPayloadJson: number;
    createdAt: number;
    companyId: number;
    companyName: number;
    deviceName: number;
    deviceType: number;
    firmwareVersion: number;
    productModel: number;
    source: number;
    _all: number;
};
export type DeviceHistoryDataAvgAggregateInputType = {
    longitude?: true;
    latitude?: true;
    batteryLevel?: true;
    signalStrength?: true;
    temperature?: true;
    speed?: true;
};
export type DeviceHistoryDataSumAggregateInputType = {
    longitude?: true;
    latitude?: true;
    batteryLevel?: true;
    signalStrength?: true;
    temperature?: true;
    speed?: true;
};
export type DeviceHistoryDataMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    reportType?: true;
    reportedAt?: true;
    longitude?: true;
    latitude?: true;
    address?: true;
    lockStatus?: true;
    shackleStatus?: true;
    batteryLevel?: true;
    signalStrength?: true;
    temperature?: true;
    speed?: true;
    createdAt?: true;
    companyId?: true;
    companyName?: true;
    deviceName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    productModel?: true;
    source?: true;
};
export type DeviceHistoryDataMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    reportType?: true;
    reportedAt?: true;
    longitude?: true;
    latitude?: true;
    address?: true;
    lockStatus?: true;
    shackleStatus?: true;
    batteryLevel?: true;
    signalStrength?: true;
    temperature?: true;
    speed?: true;
    createdAt?: true;
    companyId?: true;
    companyName?: true;
    deviceName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    productModel?: true;
    source?: true;
};
export type DeviceHistoryDataCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    reportType?: true;
    reportedAt?: true;
    longitude?: true;
    latitude?: true;
    address?: true;
    lockStatus?: true;
    shackleStatus?: true;
    batteryLevel?: true;
    signalStrength?: true;
    temperature?: true;
    speed?: true;
    rawPayloadJson?: true;
    createdAt?: true;
    companyId?: true;
    companyName?: true;
    deviceName?: true;
    deviceType?: true;
    firmwareVersion?: true;
    productModel?: true;
    source?: true;
    _all?: true;
};
export type DeviceHistoryDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceHistoryData to aggregate.
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceHistoryData to fetch.
     */
    orderBy?: Prisma.DeviceHistoryDataOrderByWithRelationInput | Prisma.DeviceHistoryDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceHistoryDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceHistoryData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceHistoryData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceHistoryData
    **/
    _count?: true | DeviceHistoryDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DeviceHistoryDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DeviceHistoryDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceHistoryDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceHistoryDataMaxAggregateInputType;
};
export type GetDeviceHistoryDataAggregateType<T extends DeviceHistoryDataAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceHistoryData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceHistoryData[P]> : Prisma.GetScalarType<T[P], AggregateDeviceHistoryData[P]>;
};
export type DeviceHistoryDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceHistoryDataWhereInput;
    orderBy?: Prisma.DeviceHistoryDataOrderByWithAggregationInput | Prisma.DeviceHistoryDataOrderByWithAggregationInput[];
    by: Prisma.DeviceHistoryDataScalarFieldEnum[] | Prisma.DeviceHistoryDataScalarFieldEnum;
    having?: Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceHistoryDataCountAggregateInputType | true;
    _avg?: DeviceHistoryDataAvgAggregateInputType;
    _sum?: DeviceHistoryDataSumAggregateInputType;
    _min?: DeviceHistoryDataMinAggregateInputType;
    _max?: DeviceHistoryDataMaxAggregateInputType;
};
export type DeviceHistoryDataGroupByOutputType = {
    id: string;
    deviceId: string;
    reportType: string;
    reportedAt: Date;
    longitude: number | null;
    latitude: number | null;
    address: string | null;
    lockStatus: string | null;
    shackleStatus: string | null;
    batteryLevel: number | null;
    signalStrength: number | null;
    temperature: number | null;
    speed: number | null;
    rawPayloadJson: runtime.JsonValue | null;
    createdAt: Date;
    companyId: string | null;
    companyName: string | null;
    deviceName: string | null;
    deviceType: string | null;
    firmwareVersion: string | null;
    productModel: string | null;
    source: string | null;
    _count: DeviceHistoryDataCountAggregateOutputType | null;
    _avg: DeviceHistoryDataAvgAggregateOutputType | null;
    _sum: DeviceHistoryDataSumAggregateOutputType | null;
    _min: DeviceHistoryDataMinAggregateOutputType | null;
    _max: DeviceHistoryDataMaxAggregateOutputType | null;
};
export type GetDeviceHistoryDataGroupByPayload<T extends DeviceHistoryDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceHistoryDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceHistoryDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceHistoryDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceHistoryDataGroupByOutputType[P]>;
}>>;
export type DeviceHistoryDataWhereInput = {
    AND?: Prisma.DeviceHistoryDataWhereInput | Prisma.DeviceHistoryDataWhereInput[];
    OR?: Prisma.DeviceHistoryDataWhereInput[];
    NOT?: Prisma.DeviceHistoryDataWhereInput | Prisma.DeviceHistoryDataWhereInput[];
    id?: Prisma.StringFilter<"DeviceHistoryData"> | string;
    deviceId?: Prisma.StringFilter<"DeviceHistoryData"> | string;
    reportType?: Prisma.StringFilter<"DeviceHistoryData"> | string;
    reportedAt?: Prisma.DateTimeFilter<"DeviceHistoryData"> | Date | string;
    longitude?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    address?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    lockStatus?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    shackleStatus?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    batteryLevel?: Prisma.IntNullableFilter<"DeviceHistoryData"> | number | null;
    signalStrength?: Prisma.IntNullableFilter<"DeviceHistoryData"> | number | null;
    temperature?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    speed?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    rawPayloadJson?: Prisma.JsonNullableFilter<"DeviceHistoryData">;
    createdAt?: Prisma.DateTimeFilter<"DeviceHistoryData"> | Date | string;
    companyId?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    companyName?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    deviceName?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    deviceType?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    firmwareVersion?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    productModel?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    source?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
};
export type DeviceHistoryDataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalStrength?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type DeviceHistoryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceHistoryDataWhereInput | Prisma.DeviceHistoryDataWhereInput[];
    OR?: Prisma.DeviceHistoryDataWhereInput[];
    NOT?: Prisma.DeviceHistoryDataWhereInput | Prisma.DeviceHistoryDataWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceHistoryData"> | string;
    reportType?: Prisma.StringFilter<"DeviceHistoryData"> | string;
    reportedAt?: Prisma.DateTimeFilter<"DeviceHistoryData"> | Date | string;
    longitude?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    address?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    lockStatus?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    shackleStatus?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    batteryLevel?: Prisma.IntNullableFilter<"DeviceHistoryData"> | number | null;
    signalStrength?: Prisma.IntNullableFilter<"DeviceHistoryData"> | number | null;
    temperature?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    speed?: Prisma.FloatNullableFilter<"DeviceHistoryData"> | number | null;
    rawPayloadJson?: Prisma.JsonNullableFilter<"DeviceHistoryData">;
    createdAt?: Prisma.DateTimeFilter<"DeviceHistoryData"> | Date | string;
    companyId?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    companyName?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    deviceName?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    deviceType?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    firmwareVersion?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    productModel?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
    source?: Prisma.StringNullableFilter<"DeviceHistoryData"> | string | null;
}, "id">;
export type DeviceHistoryDataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrderInput | Prisma.SortOrder;
    signalStrength?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DeviceHistoryDataCountOrderByAggregateInput;
    _avg?: Prisma.DeviceHistoryDataAvgOrderByAggregateInput;
    _max?: Prisma.DeviceHistoryDataMaxOrderByAggregateInput;
    _min?: Prisma.DeviceHistoryDataMinOrderByAggregateInput;
    _sum?: Prisma.DeviceHistoryDataSumOrderByAggregateInput;
};
export type DeviceHistoryDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput | Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput | Prisma.DeviceHistoryDataScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceHistoryData"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceHistoryData"> | string;
    reportType?: Prisma.StringWithAggregatesFilter<"DeviceHistoryData"> | string;
    reportedAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceHistoryData"> | Date | string;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    lockStatus?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    shackleStatus?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    batteryLevel?: Prisma.IntNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    signalStrength?: Prisma.IntNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    temperature?: Prisma.FloatNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    speed?: Prisma.FloatNullableWithAggregatesFilter<"DeviceHistoryData"> | number | null;
    rawPayloadJson?: Prisma.JsonNullableWithAggregatesFilter<"DeviceHistoryData">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceHistoryData"> | Date | string;
    companyId?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    companyName?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    deviceName?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    deviceType?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    firmwareVersion?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    productModel?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"DeviceHistoryData"> | string | null;
};
export type DeviceHistoryDataCreateInput = {
    id: string;
    deviceId: string;
    reportType?: string;
    reportedAt?: Date | string;
    longitude?: number | null;
    latitude?: number | null;
    address?: string | null;
    lockStatus?: string | null;
    shackleStatus?: string | null;
    batteryLevel?: number | null;
    signalStrength?: number | null;
    temperature?: number | null;
    speed?: number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    companyId?: string | null;
    companyName?: string | null;
    deviceName?: string | null;
    deviceType?: string | null;
    firmwareVersion?: string | null;
    productModel?: string | null;
    source?: string | null;
};
export type DeviceHistoryDataUncheckedCreateInput = {
    id: string;
    deviceId: string;
    reportType?: string;
    reportedAt?: Date | string;
    longitude?: number | null;
    latitude?: number | null;
    address?: string | null;
    lockStatus?: string | null;
    shackleStatus?: string | null;
    batteryLevel?: number | null;
    signalStrength?: number | null;
    temperature?: number | null;
    speed?: number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    companyId?: string | null;
    companyName?: string | null;
    deviceName?: string | null;
    deviceType?: string | null;
    firmwareVersion?: string | null;
    productModel?: string | null;
    source?: string | null;
};
export type DeviceHistoryDataUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceHistoryDataUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceHistoryDataCreateManyInput = {
    id: string;
    deviceId: string;
    reportType?: string;
    reportedAt?: Date | string;
    longitude?: number | null;
    latitude?: number | null;
    address?: string | null;
    lockStatus?: string | null;
    shackleStatus?: string | null;
    batteryLevel?: number | null;
    signalStrength?: number | null;
    temperature?: number | null;
    speed?: number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    companyId?: string | null;
    companyName?: string | null;
    deviceName?: string | null;
    deviceType?: string | null;
    firmwareVersion?: string | null;
    productModel?: string | null;
    source?: string | null;
};
export type DeviceHistoryDataUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceHistoryDataUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportType?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shackleStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batteryLevel?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signalStrength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firmwareVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DeviceHistoryDataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
};
export type DeviceHistoryDataAvgOrderByAggregateInput = {
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
};
export type DeviceHistoryDataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
};
export type DeviceHistoryDataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    reportType?: Prisma.SortOrder;
    reportedAt?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lockStatus?: Prisma.SortOrder;
    shackleStatus?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    firmwareVersion?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
};
export type DeviceHistoryDataSumOrderByAggregateInput = {
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    batteryLevel?: Prisma.SortOrder;
    signalStrength?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
};
export type DeviceHistoryDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    reportType?: boolean;
    reportedAt?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    address?: boolean;
    lockStatus?: boolean;
    shackleStatus?: boolean;
    batteryLevel?: boolean;
    signalStrength?: boolean;
    temperature?: boolean;
    speed?: boolean;
    rawPayloadJson?: boolean;
    createdAt?: boolean;
    companyId?: boolean;
    companyName?: boolean;
    deviceName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    productModel?: boolean;
    source?: boolean;
}, ExtArgs["result"]["deviceHistoryData"]>;
export type DeviceHistoryDataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    reportType?: boolean;
    reportedAt?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    address?: boolean;
    lockStatus?: boolean;
    shackleStatus?: boolean;
    batteryLevel?: boolean;
    signalStrength?: boolean;
    temperature?: boolean;
    speed?: boolean;
    rawPayloadJson?: boolean;
    createdAt?: boolean;
    companyId?: boolean;
    companyName?: boolean;
    deviceName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    productModel?: boolean;
    source?: boolean;
}, ExtArgs["result"]["deviceHistoryData"]>;
export type DeviceHistoryDataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    reportType?: boolean;
    reportedAt?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    address?: boolean;
    lockStatus?: boolean;
    shackleStatus?: boolean;
    batteryLevel?: boolean;
    signalStrength?: boolean;
    temperature?: boolean;
    speed?: boolean;
    rawPayloadJson?: boolean;
    createdAt?: boolean;
    companyId?: boolean;
    companyName?: boolean;
    deviceName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    productModel?: boolean;
    source?: boolean;
}, ExtArgs["result"]["deviceHistoryData"]>;
export type DeviceHistoryDataSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    reportType?: boolean;
    reportedAt?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    address?: boolean;
    lockStatus?: boolean;
    shackleStatus?: boolean;
    batteryLevel?: boolean;
    signalStrength?: boolean;
    temperature?: boolean;
    speed?: boolean;
    rawPayloadJson?: boolean;
    createdAt?: boolean;
    companyId?: boolean;
    companyName?: boolean;
    deviceName?: boolean;
    deviceType?: boolean;
    firmwareVersion?: boolean;
    productModel?: boolean;
    source?: boolean;
};
export type DeviceHistoryDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "reportType" | "reportedAt" | "longitude" | "latitude" | "address" | "lockStatus" | "shackleStatus" | "batteryLevel" | "signalStrength" | "temperature" | "speed" | "rawPayloadJson" | "createdAt" | "companyId" | "companyName" | "deviceName" | "deviceType" | "firmwareVersion" | "productModel" | "source", ExtArgs["result"]["deviceHistoryData"]>;
export type $DeviceHistoryDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceHistoryData";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        reportType: string;
        reportedAt: Date;
        longitude: number | null;
        latitude: number | null;
        address: string | null;
        lockStatus: string | null;
        shackleStatus: string | null;
        batteryLevel: number | null;
        signalStrength: number | null;
        temperature: number | null;
        speed: number | null;
        rawPayloadJson: runtime.JsonValue | null;
        createdAt: Date;
        companyId: string | null;
        companyName: string | null;
        deviceName: string | null;
        deviceType: string | null;
        firmwareVersion: string | null;
        productModel: string | null;
        source: string | null;
    }, ExtArgs["result"]["deviceHistoryData"]>;
    composites: {};
};
export type DeviceHistoryDataGetPayload<S extends boolean | null | undefined | DeviceHistoryDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload, S>;
export type DeviceHistoryDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceHistoryDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceHistoryDataCountAggregateInputType | true;
};
export interface DeviceHistoryDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceHistoryData'];
        meta: {
            name: 'DeviceHistoryData';
        };
    };
    /**
     * Find zero or one DeviceHistoryData that matches the filter.
     * @param {DeviceHistoryDataFindUniqueArgs} args - Arguments to find a DeviceHistoryData
     * @example
     * // Get one DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceHistoryDataFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceHistoryData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceHistoryDataFindUniqueOrThrowArgs} args - Arguments to find a DeviceHistoryData
     * @example
     * // Get one DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceHistoryDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceHistoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataFindFirstArgs} args - Arguments to find a DeviceHistoryData
     * @example
     * // Get one DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceHistoryDataFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceHistoryData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataFindFirstOrThrowArgs} args - Arguments to find a DeviceHistoryData
     * @example
     * // Get one DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceHistoryDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceHistoryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findMany()
     *
     * // Get first 10 DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceHistoryDataWithIdOnly = await prisma.deviceHistoryData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceHistoryDataFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceHistoryData.
     * @param {DeviceHistoryDataCreateArgs} args - Arguments to create a DeviceHistoryData.
     * @example
     * // Create one DeviceHistoryData
     * const DeviceHistoryData = await prisma.deviceHistoryData.create({
     *   data: {
     *     // ... data to create a DeviceHistoryData
     *   }
     * })
     *
     */
    create<T extends DeviceHistoryDataCreateArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceHistoryData.
     * @param {DeviceHistoryDataCreateManyArgs} args - Arguments to create many DeviceHistoryData.
     * @example
     * // Create many DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceHistoryDataCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceHistoryData and returns the data saved in the database.
     * @param {DeviceHistoryDataCreateManyAndReturnArgs} args - Arguments to create many DeviceHistoryData.
     * @example
     * // Create many DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceHistoryData and only return the `id`
     * const deviceHistoryDataWithIdOnly = await prisma.deviceHistoryData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceHistoryDataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceHistoryData.
     * @param {DeviceHistoryDataDeleteArgs} args - Arguments to delete one DeviceHistoryData.
     * @example
     * // Delete one DeviceHistoryData
     * const DeviceHistoryData = await prisma.deviceHistoryData.delete({
     *   where: {
     *     // ... filter to delete one DeviceHistoryData
     *   }
     * })
     *
     */
    delete<T extends DeviceHistoryDataDeleteArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceHistoryData.
     * @param {DeviceHistoryDataUpdateArgs} args - Arguments to update one DeviceHistoryData.
     * @example
     * // Update one DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceHistoryDataUpdateArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceHistoryData.
     * @param {DeviceHistoryDataDeleteManyArgs} args - Arguments to filter DeviceHistoryData to delete.
     * @example
     * // Delete a few DeviceHistoryData
     * const { count } = await prisma.deviceHistoryData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceHistoryDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceHistoryDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceHistoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceHistoryDataUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceHistoryData and returns the data updated in the database.
     * @param {DeviceHistoryDataUpdateManyAndReturnArgs} args - Arguments to update many DeviceHistoryData.
     * @example
     * // Update many DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceHistoryData and only return the `id`
     * const deviceHistoryDataWithIdOnly = await prisma.deviceHistoryData.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceHistoryDataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceHistoryData.
     * @param {DeviceHistoryDataUpsertArgs} args - Arguments to update or create a DeviceHistoryData.
     * @example
     * // Update or create a DeviceHistoryData
     * const deviceHistoryData = await prisma.deviceHistoryData.upsert({
     *   create: {
     *     // ... data to create a DeviceHistoryData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceHistoryData we want to update
     *   }
     * })
     */
    upsert<T extends DeviceHistoryDataUpsertArgs>(args: Prisma.SelectSubset<T, DeviceHistoryDataUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceHistoryDataClient<runtime.Types.Result.GetResult<Prisma.$DeviceHistoryDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceHistoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataCountArgs} args - Arguments to filter DeviceHistoryData to count.
     * @example
     * // Count the number of DeviceHistoryData
     * const count = await prisma.deviceHistoryData.count({
     *   where: {
     *     // ... the filter for the DeviceHistoryData we want to count
     *   }
     * })
    **/
    count<T extends DeviceHistoryDataCountArgs>(args?: Prisma.Subset<T, DeviceHistoryDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceHistoryDataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceHistoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceHistoryDataAggregateArgs>(args: Prisma.Subset<T, DeviceHistoryDataAggregateArgs>): Prisma.PrismaPromise<GetDeviceHistoryDataAggregateType<T>>;
    /**
     * Group by DeviceHistoryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryDataGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceHistoryDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceHistoryDataGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceHistoryDataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceHistoryDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceHistoryDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceHistoryData model
     */
    readonly fields: DeviceHistoryDataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceHistoryData.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceHistoryDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceHistoryData model
 */
export interface DeviceHistoryDataFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly reportType: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly reportedAt: Prisma.FieldRef<"DeviceHistoryData", 'DateTime'>;
    readonly longitude: Prisma.FieldRef<"DeviceHistoryData", 'Float'>;
    readonly latitude: Prisma.FieldRef<"DeviceHistoryData", 'Float'>;
    readonly address: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly lockStatus: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly shackleStatus: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly batteryLevel: Prisma.FieldRef<"DeviceHistoryData", 'Int'>;
    readonly signalStrength: Prisma.FieldRef<"DeviceHistoryData", 'Int'>;
    readonly temperature: Prisma.FieldRef<"DeviceHistoryData", 'Float'>;
    readonly speed: Prisma.FieldRef<"DeviceHistoryData", 'Float'>;
    readonly rawPayloadJson: Prisma.FieldRef<"DeviceHistoryData", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"DeviceHistoryData", 'DateTime'>;
    readonly companyId: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly companyName: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly deviceName: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly deviceType: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly firmwareVersion: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly productModel: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
    readonly source: Prisma.FieldRef<"DeviceHistoryData", 'String'>;
}
/**
 * DeviceHistoryData findUnique
 */
export type DeviceHistoryDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceHistoryData to fetch.
     */
    where: Prisma.DeviceHistoryDataWhereUniqueInput;
};
/**
 * DeviceHistoryData findUniqueOrThrow
 */
export type DeviceHistoryDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceHistoryData to fetch.
     */
    where: Prisma.DeviceHistoryDataWhereUniqueInput;
};
/**
 * DeviceHistoryData findFirst
 */
export type DeviceHistoryDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceHistoryData to fetch.
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceHistoryData to fetch.
     */
    orderBy?: Prisma.DeviceHistoryDataOrderByWithRelationInput | Prisma.DeviceHistoryDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceHistoryData.
     */
    cursor?: Prisma.DeviceHistoryDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceHistoryData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceHistoryData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceHistoryData.
     */
    distinct?: Prisma.DeviceHistoryDataScalarFieldEnum | Prisma.DeviceHistoryDataScalarFieldEnum[];
};
/**
 * DeviceHistoryData findFirstOrThrow
 */
export type DeviceHistoryDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceHistoryData to fetch.
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceHistoryData to fetch.
     */
    orderBy?: Prisma.DeviceHistoryDataOrderByWithRelationInput | Prisma.DeviceHistoryDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceHistoryData.
     */
    cursor?: Prisma.DeviceHistoryDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceHistoryData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceHistoryData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceHistoryData.
     */
    distinct?: Prisma.DeviceHistoryDataScalarFieldEnum | Prisma.DeviceHistoryDataScalarFieldEnum[];
};
/**
 * DeviceHistoryData findMany
 */
export type DeviceHistoryDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceHistoryData to fetch.
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceHistoryData to fetch.
     */
    orderBy?: Prisma.DeviceHistoryDataOrderByWithRelationInput | Prisma.DeviceHistoryDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceHistoryData.
     */
    cursor?: Prisma.DeviceHistoryDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceHistoryData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceHistoryData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceHistoryData.
     */
    distinct?: Prisma.DeviceHistoryDataScalarFieldEnum | Prisma.DeviceHistoryDataScalarFieldEnum[];
};
/**
 * DeviceHistoryData create
 */
export type DeviceHistoryDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceHistoryData.
     */
    data: Prisma.XOR<Prisma.DeviceHistoryDataCreateInput, Prisma.DeviceHistoryDataUncheckedCreateInput>;
};
/**
 * DeviceHistoryData createMany
 */
export type DeviceHistoryDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceHistoryData.
     */
    data: Prisma.DeviceHistoryDataCreateManyInput | Prisma.DeviceHistoryDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceHistoryData createManyAndReturn
 */
export type DeviceHistoryDataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceHistoryData.
     */
    data: Prisma.DeviceHistoryDataCreateManyInput | Prisma.DeviceHistoryDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceHistoryData update
 */
export type DeviceHistoryDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceHistoryData.
     */
    data: Prisma.XOR<Prisma.DeviceHistoryDataUpdateInput, Prisma.DeviceHistoryDataUncheckedUpdateInput>;
    /**
     * Choose, which DeviceHistoryData to update.
     */
    where: Prisma.DeviceHistoryDataWhereUniqueInput;
};
/**
 * DeviceHistoryData updateMany
 */
export type DeviceHistoryDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceHistoryData.
     */
    data: Prisma.XOR<Prisma.DeviceHistoryDataUpdateManyMutationInput, Prisma.DeviceHistoryDataUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceHistoryData to update
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * Limit how many DeviceHistoryData to update.
     */
    limit?: number;
};
/**
 * DeviceHistoryData updateManyAndReturn
 */
export type DeviceHistoryDataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceHistoryData.
     */
    data: Prisma.XOR<Prisma.DeviceHistoryDataUpdateManyMutationInput, Prisma.DeviceHistoryDataUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceHistoryData to update
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * Limit how many DeviceHistoryData to update.
     */
    limit?: number;
};
/**
 * DeviceHistoryData upsert
 */
export type DeviceHistoryDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceHistoryData to update in case it exists.
     */
    where: Prisma.DeviceHistoryDataWhereUniqueInput;
    /**
     * In case the DeviceHistoryData found by the `where` argument doesn't exist, create a new DeviceHistoryData with this data.
     */
    create: Prisma.XOR<Prisma.DeviceHistoryDataCreateInput, Prisma.DeviceHistoryDataUncheckedCreateInput>;
    /**
     * In case the DeviceHistoryData was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceHistoryDataUpdateInput, Prisma.DeviceHistoryDataUncheckedUpdateInput>;
};
/**
 * DeviceHistoryData delete
 */
export type DeviceHistoryDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
    /**
     * Filter which DeviceHistoryData to delete.
     */
    where: Prisma.DeviceHistoryDataWhereUniqueInput;
};
/**
 * DeviceHistoryData deleteMany
 */
export type DeviceHistoryDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceHistoryData to delete
     */
    where?: Prisma.DeviceHistoryDataWhereInput;
    /**
     * Limit how many DeviceHistoryData to delete.
     */
    limit?: number;
};
/**
 * DeviceHistoryData without action
 */
export type DeviceHistoryDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistoryData
     */
    select?: Prisma.DeviceHistoryDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceHistoryData
     */
    omit?: Prisma.DeviceHistoryDataOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceHistoryData.d.ts.map