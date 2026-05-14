import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceDiagnosisLog
 *
 */
export type DeviceDiagnosisLogModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceDiagnosisLogPayload>;
export type AggregateDeviceDiagnosisLog = {
    _count: DeviceDiagnosisLogCountAggregateOutputType | null;
    _min: DeviceDiagnosisLogMinAggregateOutputType | null;
    _max: DeviceDiagnosisLogMaxAggregateOutputType | null;
};
export type DeviceDiagnosisLogMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    deviceName: string | null;
    productModel: string | null;
    companyId: string | null;
    diagnosisType: string | null;
    logLevel: string | null;
    summary: string | null;
    fullLog: string | null;
    source: string | null;
    attachmentUrl: string | null;
    uploadedById: string | null;
    uploadedByName: string | null;
    uploadedAt: Date | null;
    createdAt: Date | null;
};
export type DeviceDiagnosisLogMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    deviceName: string | null;
    productModel: string | null;
    companyId: string | null;
    diagnosisType: string | null;
    logLevel: string | null;
    summary: string | null;
    fullLog: string | null;
    source: string | null;
    attachmentUrl: string | null;
    uploadedById: string | null;
    uploadedByName: string | null;
    uploadedAt: Date | null;
    createdAt: Date | null;
};
export type DeviceDiagnosisLogCountAggregateOutputType = {
    id: number;
    deviceId: number;
    deviceName: number;
    productModel: number;
    companyId: number;
    diagnosisType: number;
    logLevel: number;
    summary: number;
    fullLog: number;
    rawPayloadJson: number;
    source: number;
    attachmentUrl: number;
    uploadedById: number;
    uploadedByName: number;
    uploadedAt: number;
    createdAt: number;
    _all: number;
};
export type DeviceDiagnosisLogMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    deviceName?: true;
    productModel?: true;
    companyId?: true;
    diagnosisType?: true;
    logLevel?: true;
    summary?: true;
    fullLog?: true;
    source?: true;
    attachmentUrl?: true;
    uploadedById?: true;
    uploadedByName?: true;
    uploadedAt?: true;
    createdAt?: true;
};
export type DeviceDiagnosisLogMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    deviceName?: true;
    productModel?: true;
    companyId?: true;
    diagnosisType?: true;
    logLevel?: true;
    summary?: true;
    fullLog?: true;
    source?: true;
    attachmentUrl?: true;
    uploadedById?: true;
    uploadedByName?: true;
    uploadedAt?: true;
    createdAt?: true;
};
export type DeviceDiagnosisLogCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    deviceName?: true;
    productModel?: true;
    companyId?: true;
    diagnosisType?: true;
    logLevel?: true;
    summary?: true;
    fullLog?: true;
    rawPayloadJson?: true;
    source?: true;
    attachmentUrl?: true;
    uploadedById?: true;
    uploadedByName?: true;
    uploadedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type DeviceDiagnosisLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceDiagnosisLog to aggregate.
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceDiagnosisLogs to fetch.
     */
    orderBy?: Prisma.DeviceDiagnosisLogOrderByWithRelationInput | Prisma.DeviceDiagnosisLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceDiagnosisLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceDiagnosisLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceDiagnosisLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceDiagnosisLogs
    **/
    _count?: true | DeviceDiagnosisLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceDiagnosisLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceDiagnosisLogMaxAggregateInputType;
};
export type GetDeviceDiagnosisLogAggregateType<T extends DeviceDiagnosisLogAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceDiagnosisLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceDiagnosisLog[P]> : Prisma.GetScalarType<T[P], AggregateDeviceDiagnosisLog[P]>;
};
export type DeviceDiagnosisLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    orderBy?: Prisma.DeviceDiagnosisLogOrderByWithAggregationInput | Prisma.DeviceDiagnosisLogOrderByWithAggregationInput[];
    by: Prisma.DeviceDiagnosisLogScalarFieldEnum[] | Prisma.DeviceDiagnosisLogScalarFieldEnum;
    having?: Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceDiagnosisLogCountAggregateInputType | true;
    _min?: DeviceDiagnosisLogMinAggregateInputType;
    _max?: DeviceDiagnosisLogMaxAggregateInputType;
};
export type DeviceDiagnosisLogGroupByOutputType = {
    id: string;
    deviceId: string;
    deviceName: string | null;
    productModel: string | null;
    companyId: string | null;
    diagnosisType: string;
    logLevel: string;
    summary: string;
    fullLog: string;
    rawPayloadJson: runtime.JsonValue | null;
    source: string;
    attachmentUrl: string | null;
    uploadedById: string | null;
    uploadedByName: string | null;
    uploadedAt: Date;
    createdAt: Date;
    _count: DeviceDiagnosisLogCountAggregateOutputType | null;
    _min: DeviceDiagnosisLogMinAggregateOutputType | null;
    _max: DeviceDiagnosisLogMaxAggregateOutputType | null;
};
export type GetDeviceDiagnosisLogGroupByPayload<T extends DeviceDiagnosisLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceDiagnosisLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceDiagnosisLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceDiagnosisLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceDiagnosisLogGroupByOutputType[P]>;
}>>;
export type DeviceDiagnosisLogWhereInput = {
    AND?: Prisma.DeviceDiagnosisLogWhereInput | Prisma.DeviceDiagnosisLogWhereInput[];
    OR?: Prisma.DeviceDiagnosisLogWhereInput[];
    NOT?: Prisma.DeviceDiagnosisLogWhereInput | Prisma.DeviceDiagnosisLogWhereInput[];
    id?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    deviceId?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    deviceName?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    productModel?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    companyId?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    diagnosisType?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    logLevel?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    summary?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    fullLog?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    rawPayloadJson?: Prisma.JsonNullableFilter<"DeviceDiagnosisLog">;
    source?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    attachmentUrl?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedById?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedByName?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedAt?: Prisma.DateTimeFilter<"DeviceDiagnosisLog"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DeviceDiagnosisLog"> | Date | string;
};
export type DeviceDiagnosisLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    diagnosisType?: Prisma.SortOrder;
    logLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    fullLog?: Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attachmentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceDiagnosisLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceDiagnosisLogWhereInput | Prisma.DeviceDiagnosisLogWhereInput[];
    OR?: Prisma.DeviceDiagnosisLogWhereInput[];
    NOT?: Prisma.DeviceDiagnosisLogWhereInput | Prisma.DeviceDiagnosisLogWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    deviceName?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    productModel?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    companyId?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    diagnosisType?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    logLevel?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    summary?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    fullLog?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    rawPayloadJson?: Prisma.JsonNullableFilter<"DeviceDiagnosisLog">;
    source?: Prisma.StringFilter<"DeviceDiagnosisLog"> | string;
    attachmentUrl?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedById?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedByName?: Prisma.StringNullableFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedAt?: Prisma.DateTimeFilter<"DeviceDiagnosisLog"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DeviceDiagnosisLog"> | Date | string;
}, "id">;
export type DeviceDiagnosisLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    diagnosisType?: Prisma.SortOrder;
    logLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    fullLog?: Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attachmentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceDiagnosisLogCountOrderByAggregateInput;
    _max?: Prisma.DeviceDiagnosisLogMaxOrderByAggregateInput;
    _min?: Prisma.DeviceDiagnosisLogMinOrderByAggregateInput;
};
export type DeviceDiagnosisLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput | Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput | Prisma.DeviceDiagnosisLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    deviceName?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    productModel?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    companyId?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    diagnosisType?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    logLevel?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    fullLog?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    rawPayloadJson?: Prisma.JsonNullableWithAggregatesFilter<"DeviceDiagnosisLog">;
    source?: Prisma.StringWithAggregatesFilter<"DeviceDiagnosisLog"> | string;
    attachmentUrl?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedById?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedByName?: Prisma.StringNullableWithAggregatesFilter<"DeviceDiagnosisLog"> | string | null;
    uploadedAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceDiagnosisLog"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceDiagnosisLog"> | Date | string;
};
export type DeviceDiagnosisLogCreateInput = {
    id: string;
    deviceId: string;
    deviceName?: string | null;
    productModel?: string | null;
    companyId?: string | null;
    diagnosisType?: string;
    logLevel?: string;
    summary: string;
    fullLog: string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: string;
    attachmentUrl?: string | null;
    uploadedById?: string | null;
    uploadedByName?: string | null;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
};
export type DeviceDiagnosisLogUncheckedCreateInput = {
    id: string;
    deviceId: string;
    deviceName?: string | null;
    productModel?: string | null;
    companyId?: string | null;
    diagnosisType?: string;
    logLevel?: string;
    summary: string;
    fullLog: string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: string;
    attachmentUrl?: string | null;
    uploadedById?: string | null;
    uploadedByName?: string | null;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
};
export type DeviceDiagnosisLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diagnosisType?: Prisma.StringFieldUpdateOperationsInput | string;
    logLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    fullLog?: Prisma.StringFieldUpdateOperationsInput | string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    attachmentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceDiagnosisLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diagnosisType?: Prisma.StringFieldUpdateOperationsInput | string;
    logLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    fullLog?: Prisma.StringFieldUpdateOperationsInput | string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    attachmentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceDiagnosisLogCreateManyInput = {
    id: string;
    deviceId: string;
    deviceName?: string | null;
    productModel?: string | null;
    companyId?: string | null;
    diagnosisType?: string;
    logLevel?: string;
    summary: string;
    fullLog: string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: string;
    attachmentUrl?: string | null;
    uploadedById?: string | null;
    uploadedByName?: string | null;
    uploadedAt?: Date | string;
    createdAt?: Date | string;
};
export type DeviceDiagnosisLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diagnosisType?: Prisma.StringFieldUpdateOperationsInput | string;
    logLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    fullLog?: Prisma.StringFieldUpdateOperationsInput | string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    attachmentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceDiagnosisLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diagnosisType?: Prisma.StringFieldUpdateOperationsInput | string;
    logLevel?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    fullLog?: Prisma.StringFieldUpdateOperationsInput | string;
    rawPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    attachmentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceDiagnosisLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    diagnosisType?: Prisma.SortOrder;
    logLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    fullLog?: Prisma.SortOrder;
    rawPayloadJson?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attachmentUrl?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceDiagnosisLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    diagnosisType?: Prisma.SortOrder;
    logLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    fullLog?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attachmentUrl?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceDiagnosisLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    diagnosisType?: Prisma.SortOrder;
    logLevel?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    fullLog?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    attachmentUrl?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeviceDiagnosisLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    companyId?: boolean;
    diagnosisType?: boolean;
    logLevel?: boolean;
    summary?: boolean;
    fullLog?: boolean;
    rawPayloadJson?: boolean;
    source?: boolean;
    attachmentUrl?: boolean;
    uploadedById?: boolean;
    uploadedByName?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceDiagnosisLog"]>;
export type DeviceDiagnosisLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    companyId?: boolean;
    diagnosisType?: boolean;
    logLevel?: boolean;
    summary?: boolean;
    fullLog?: boolean;
    rawPayloadJson?: boolean;
    source?: boolean;
    attachmentUrl?: boolean;
    uploadedById?: boolean;
    uploadedByName?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceDiagnosisLog"]>;
export type DeviceDiagnosisLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    companyId?: boolean;
    diagnosisType?: boolean;
    logLevel?: boolean;
    summary?: boolean;
    fullLog?: boolean;
    rawPayloadJson?: boolean;
    source?: boolean;
    attachmentUrl?: boolean;
    uploadedById?: boolean;
    uploadedByName?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["deviceDiagnosisLog"]>;
export type DeviceDiagnosisLogSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    companyId?: boolean;
    diagnosisType?: boolean;
    logLevel?: boolean;
    summary?: boolean;
    fullLog?: boolean;
    rawPayloadJson?: boolean;
    source?: boolean;
    attachmentUrl?: boolean;
    uploadedById?: boolean;
    uploadedByName?: boolean;
    uploadedAt?: boolean;
    createdAt?: boolean;
};
export type DeviceDiagnosisLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "deviceName" | "productModel" | "companyId" | "diagnosisType" | "logLevel" | "summary" | "fullLog" | "rawPayloadJson" | "source" | "attachmentUrl" | "uploadedById" | "uploadedByName" | "uploadedAt" | "createdAt", ExtArgs["result"]["deviceDiagnosisLog"]>;
export type $DeviceDiagnosisLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceDiagnosisLog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        deviceName: string | null;
        productModel: string | null;
        companyId: string | null;
        diagnosisType: string;
        logLevel: string;
        summary: string;
        fullLog: string;
        rawPayloadJson: runtime.JsonValue | null;
        source: string;
        attachmentUrl: string | null;
        uploadedById: string | null;
        uploadedByName: string | null;
        uploadedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["deviceDiagnosisLog"]>;
    composites: {};
};
export type DeviceDiagnosisLogGetPayload<S extends boolean | null | undefined | DeviceDiagnosisLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload, S>;
export type DeviceDiagnosisLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceDiagnosisLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceDiagnosisLogCountAggregateInputType | true;
};
export interface DeviceDiagnosisLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceDiagnosisLog'];
        meta: {
            name: 'DeviceDiagnosisLog';
        };
    };
    /**
     * Find zero or one DeviceDiagnosisLog that matches the filter.
     * @param {DeviceDiagnosisLogFindUniqueArgs} args - Arguments to find a DeviceDiagnosisLog
     * @example
     * // Get one DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceDiagnosisLogFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceDiagnosisLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceDiagnosisLogFindUniqueOrThrowArgs} args - Arguments to find a DeviceDiagnosisLog
     * @example
     * // Get one DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceDiagnosisLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceDiagnosisLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogFindFirstArgs} args - Arguments to find a DeviceDiagnosisLog
     * @example
     * // Get one DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceDiagnosisLogFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceDiagnosisLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogFindFirstOrThrowArgs} args - Arguments to find a DeviceDiagnosisLog
     * @example
     * // Get one DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceDiagnosisLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceDiagnosisLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceDiagnosisLogs
     * const deviceDiagnosisLogs = await prisma.deviceDiagnosisLog.findMany()
     *
     * // Get first 10 DeviceDiagnosisLogs
     * const deviceDiagnosisLogs = await prisma.deviceDiagnosisLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceDiagnosisLogWithIdOnly = await prisma.deviceDiagnosisLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceDiagnosisLogFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceDiagnosisLog.
     * @param {DeviceDiagnosisLogCreateArgs} args - Arguments to create a DeviceDiagnosisLog.
     * @example
     * // Create one DeviceDiagnosisLog
     * const DeviceDiagnosisLog = await prisma.deviceDiagnosisLog.create({
     *   data: {
     *     // ... data to create a DeviceDiagnosisLog
     *   }
     * })
     *
     */
    create<T extends DeviceDiagnosisLogCreateArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceDiagnosisLogs.
     * @param {DeviceDiagnosisLogCreateManyArgs} args - Arguments to create many DeviceDiagnosisLogs.
     * @example
     * // Create many DeviceDiagnosisLogs
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceDiagnosisLogCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceDiagnosisLogs and returns the data saved in the database.
     * @param {DeviceDiagnosisLogCreateManyAndReturnArgs} args - Arguments to create many DeviceDiagnosisLogs.
     * @example
     * // Create many DeviceDiagnosisLogs
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceDiagnosisLogs and only return the `id`
     * const deviceDiagnosisLogWithIdOnly = await prisma.deviceDiagnosisLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceDiagnosisLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceDiagnosisLog.
     * @param {DeviceDiagnosisLogDeleteArgs} args - Arguments to delete one DeviceDiagnosisLog.
     * @example
     * // Delete one DeviceDiagnosisLog
     * const DeviceDiagnosisLog = await prisma.deviceDiagnosisLog.delete({
     *   where: {
     *     // ... filter to delete one DeviceDiagnosisLog
     *   }
     * })
     *
     */
    delete<T extends DeviceDiagnosisLogDeleteArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceDiagnosisLog.
     * @param {DeviceDiagnosisLogUpdateArgs} args - Arguments to update one DeviceDiagnosisLog.
     * @example
     * // Update one DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceDiagnosisLogUpdateArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceDiagnosisLogs.
     * @param {DeviceDiagnosisLogDeleteManyArgs} args - Arguments to filter DeviceDiagnosisLogs to delete.
     * @example
     * // Delete a few DeviceDiagnosisLogs
     * const { count } = await prisma.deviceDiagnosisLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceDiagnosisLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceDiagnosisLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceDiagnosisLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceDiagnosisLogs
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceDiagnosisLogUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceDiagnosisLogs and returns the data updated in the database.
     * @param {DeviceDiagnosisLogUpdateManyAndReturnArgs} args - Arguments to update many DeviceDiagnosisLogs.
     * @example
     * // Update many DeviceDiagnosisLogs
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceDiagnosisLogs and only return the `id`
     * const deviceDiagnosisLogWithIdOnly = await prisma.deviceDiagnosisLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceDiagnosisLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceDiagnosisLog.
     * @param {DeviceDiagnosisLogUpsertArgs} args - Arguments to update or create a DeviceDiagnosisLog.
     * @example
     * // Update or create a DeviceDiagnosisLog
     * const deviceDiagnosisLog = await prisma.deviceDiagnosisLog.upsert({
     *   create: {
     *     // ... data to create a DeviceDiagnosisLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceDiagnosisLog we want to update
     *   }
     * })
     */
    upsert<T extends DeviceDiagnosisLogUpsertArgs>(args: Prisma.SelectSubset<T, DeviceDiagnosisLogUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceDiagnosisLogClient<runtime.Types.Result.GetResult<Prisma.$DeviceDiagnosisLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceDiagnosisLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogCountArgs} args - Arguments to filter DeviceDiagnosisLogs to count.
     * @example
     * // Count the number of DeviceDiagnosisLogs
     * const count = await prisma.deviceDiagnosisLog.count({
     *   where: {
     *     // ... the filter for the DeviceDiagnosisLogs we want to count
     *   }
     * })
    **/
    count<T extends DeviceDiagnosisLogCountArgs>(args?: Prisma.Subset<T, DeviceDiagnosisLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceDiagnosisLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceDiagnosisLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceDiagnosisLogAggregateArgs>(args: Prisma.Subset<T, DeviceDiagnosisLogAggregateArgs>): Prisma.PrismaPromise<GetDeviceDiagnosisLogAggregateType<T>>;
    /**
     * Group by DeviceDiagnosisLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceDiagnosisLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceDiagnosisLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceDiagnosisLogGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceDiagnosisLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceDiagnosisLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceDiagnosisLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceDiagnosisLog model
     */
    readonly fields: DeviceDiagnosisLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceDiagnosisLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceDiagnosisLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceDiagnosisLog model
 */
export interface DeviceDiagnosisLogFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly deviceName: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly productModel: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly companyId: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly diagnosisType: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly logLevel: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly summary: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly fullLog: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly rawPayloadJson: Prisma.FieldRef<"DeviceDiagnosisLog", 'Json'>;
    readonly source: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly attachmentUrl: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly uploadedById: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly uploadedByName: Prisma.FieldRef<"DeviceDiagnosisLog", 'String'>;
    readonly uploadedAt: Prisma.FieldRef<"DeviceDiagnosisLog", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DeviceDiagnosisLog", 'DateTime'>;
}
/**
 * DeviceDiagnosisLog findUnique
 */
export type DeviceDiagnosisLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceDiagnosisLog to fetch.
     */
    where: Prisma.DeviceDiagnosisLogWhereUniqueInput;
};
/**
 * DeviceDiagnosisLog findUniqueOrThrow
 */
export type DeviceDiagnosisLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceDiagnosisLog to fetch.
     */
    where: Prisma.DeviceDiagnosisLogWhereUniqueInput;
};
/**
 * DeviceDiagnosisLog findFirst
 */
export type DeviceDiagnosisLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceDiagnosisLog to fetch.
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceDiagnosisLogs to fetch.
     */
    orderBy?: Prisma.DeviceDiagnosisLogOrderByWithRelationInput | Prisma.DeviceDiagnosisLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceDiagnosisLogs.
     */
    cursor?: Prisma.DeviceDiagnosisLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceDiagnosisLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceDiagnosisLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceDiagnosisLogs.
     */
    distinct?: Prisma.DeviceDiagnosisLogScalarFieldEnum | Prisma.DeviceDiagnosisLogScalarFieldEnum[];
};
/**
 * DeviceDiagnosisLog findFirstOrThrow
 */
export type DeviceDiagnosisLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceDiagnosisLog to fetch.
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceDiagnosisLogs to fetch.
     */
    orderBy?: Prisma.DeviceDiagnosisLogOrderByWithRelationInput | Prisma.DeviceDiagnosisLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceDiagnosisLogs.
     */
    cursor?: Prisma.DeviceDiagnosisLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceDiagnosisLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceDiagnosisLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceDiagnosisLogs.
     */
    distinct?: Prisma.DeviceDiagnosisLogScalarFieldEnum | Prisma.DeviceDiagnosisLogScalarFieldEnum[];
};
/**
 * DeviceDiagnosisLog findMany
 */
export type DeviceDiagnosisLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceDiagnosisLogs to fetch.
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceDiagnosisLogs to fetch.
     */
    orderBy?: Prisma.DeviceDiagnosisLogOrderByWithRelationInput | Prisma.DeviceDiagnosisLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceDiagnosisLogs.
     */
    cursor?: Prisma.DeviceDiagnosisLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceDiagnosisLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceDiagnosisLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceDiagnosisLogs.
     */
    distinct?: Prisma.DeviceDiagnosisLogScalarFieldEnum | Prisma.DeviceDiagnosisLogScalarFieldEnum[];
};
/**
 * DeviceDiagnosisLog create
 */
export type DeviceDiagnosisLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceDiagnosisLog.
     */
    data: Prisma.XOR<Prisma.DeviceDiagnosisLogCreateInput, Prisma.DeviceDiagnosisLogUncheckedCreateInput>;
};
/**
 * DeviceDiagnosisLog createMany
 */
export type DeviceDiagnosisLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceDiagnosisLogs.
     */
    data: Prisma.DeviceDiagnosisLogCreateManyInput | Prisma.DeviceDiagnosisLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceDiagnosisLog createManyAndReturn
 */
export type DeviceDiagnosisLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceDiagnosisLogs.
     */
    data: Prisma.DeviceDiagnosisLogCreateManyInput | Prisma.DeviceDiagnosisLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceDiagnosisLog update
 */
export type DeviceDiagnosisLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceDiagnosisLog.
     */
    data: Prisma.XOR<Prisma.DeviceDiagnosisLogUpdateInput, Prisma.DeviceDiagnosisLogUncheckedUpdateInput>;
    /**
     * Choose, which DeviceDiagnosisLog to update.
     */
    where: Prisma.DeviceDiagnosisLogWhereUniqueInput;
};
/**
 * DeviceDiagnosisLog updateMany
 */
export type DeviceDiagnosisLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceDiagnosisLogs.
     */
    data: Prisma.XOR<Prisma.DeviceDiagnosisLogUpdateManyMutationInput, Prisma.DeviceDiagnosisLogUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceDiagnosisLogs to update
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * Limit how many DeviceDiagnosisLogs to update.
     */
    limit?: number;
};
/**
 * DeviceDiagnosisLog updateManyAndReturn
 */
export type DeviceDiagnosisLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceDiagnosisLogs.
     */
    data: Prisma.XOR<Prisma.DeviceDiagnosisLogUpdateManyMutationInput, Prisma.DeviceDiagnosisLogUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceDiagnosisLogs to update
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * Limit how many DeviceDiagnosisLogs to update.
     */
    limit?: number;
};
/**
 * DeviceDiagnosisLog upsert
 */
export type DeviceDiagnosisLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceDiagnosisLog to update in case it exists.
     */
    where: Prisma.DeviceDiagnosisLogWhereUniqueInput;
    /**
     * In case the DeviceDiagnosisLog found by the `where` argument doesn't exist, create a new DeviceDiagnosisLog with this data.
     */
    create: Prisma.XOR<Prisma.DeviceDiagnosisLogCreateInput, Prisma.DeviceDiagnosisLogUncheckedCreateInput>;
    /**
     * In case the DeviceDiagnosisLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceDiagnosisLogUpdateInput, Prisma.DeviceDiagnosisLogUncheckedUpdateInput>;
};
/**
 * DeviceDiagnosisLog delete
 */
export type DeviceDiagnosisLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
    /**
     * Filter which DeviceDiagnosisLog to delete.
     */
    where: Prisma.DeviceDiagnosisLogWhereUniqueInput;
};
/**
 * DeviceDiagnosisLog deleteMany
 */
export type DeviceDiagnosisLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceDiagnosisLogs to delete
     */
    where?: Prisma.DeviceDiagnosisLogWhereInput;
    /**
     * Limit how many DeviceDiagnosisLogs to delete.
     */
    limit?: number;
};
/**
 * DeviceDiagnosisLog without action
 */
export type DeviceDiagnosisLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceDiagnosisLog
     */
    select?: Prisma.DeviceDiagnosisLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceDiagnosisLog
     */
    omit?: Prisma.DeviceDiagnosisLogOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceDiagnosisLog.d.ts.map