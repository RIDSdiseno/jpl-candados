import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model OtaUpgradeRecord
 *
 */
export type OtaUpgradeRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$OtaUpgradeRecordPayload>;
export type AggregateOtaUpgradeRecord = {
    _count: OtaUpgradeRecordCountAggregateOutputType | null;
    _avg: OtaUpgradeRecordAvgAggregateOutputType | null;
    _sum: OtaUpgradeRecordSumAggregateOutputType | null;
    _min: OtaUpgradeRecordMinAggregateOutputType | null;
    _max: OtaUpgradeRecordMaxAggregateOutputType | null;
};
export type OtaUpgradeRecordAvgAggregateOutputType = {
    progress: number | null;
};
export type OtaUpgradeRecordSumAggregateOutputType = {
    progress: number | null;
};
export type OtaUpgradeRecordMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    firmwareFileId: string | null;
    firmwareType: string | null;
    fromVersion: string | null;
    toVersion: string | null;
    status: string | null;
    progress: number | null;
    errorMessage: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    commandId: string | null;
    companyId: string | null;
    createdByName: string | null;
    deviceName: string | null;
    productModel: string | null;
    targetVersion: string | null;
    verifiedAt: Date | null;
};
export type OtaUpgradeRecordMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    firmwareFileId: string | null;
    firmwareType: string | null;
    fromVersion: string | null;
    toVersion: string | null;
    status: string | null;
    progress: number | null;
    errorMessage: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    commandId: string | null;
    companyId: string | null;
    createdByName: string | null;
    deviceName: string | null;
    productModel: string | null;
    targetVersion: string | null;
    verifiedAt: Date | null;
};
export type OtaUpgradeRecordCountAggregateOutputType = {
    id: number;
    deviceId: number;
    firmwareFileId: number;
    firmwareType: number;
    fromVersion: number;
    toVersion: number;
    status: number;
    progress: number;
    commandPayloadJson: number;
    responsePayloadJson: number;
    errorMessage: number;
    startedAt: number;
    finishedAt: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    commandId: number;
    companyId: number;
    createdByName: number;
    deviceName: number;
    productModel: number;
    targetVersion: number;
    verifiedAt: number;
    _all: number;
};
export type OtaUpgradeRecordAvgAggregateInputType = {
    progress?: true;
};
export type OtaUpgradeRecordSumAggregateInputType = {
    progress?: true;
};
export type OtaUpgradeRecordMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    firmwareFileId?: true;
    firmwareType?: true;
    fromVersion?: true;
    toVersion?: true;
    status?: true;
    progress?: true;
    errorMessage?: true;
    startedAt?: true;
    finishedAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    commandId?: true;
    companyId?: true;
    createdByName?: true;
    deviceName?: true;
    productModel?: true;
    targetVersion?: true;
    verifiedAt?: true;
};
export type OtaUpgradeRecordMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    firmwareFileId?: true;
    firmwareType?: true;
    fromVersion?: true;
    toVersion?: true;
    status?: true;
    progress?: true;
    errorMessage?: true;
    startedAt?: true;
    finishedAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    commandId?: true;
    companyId?: true;
    createdByName?: true;
    deviceName?: true;
    productModel?: true;
    targetVersion?: true;
    verifiedAt?: true;
};
export type OtaUpgradeRecordCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    firmwareFileId?: true;
    firmwareType?: true;
    fromVersion?: true;
    toVersion?: true;
    status?: true;
    progress?: true;
    commandPayloadJson?: true;
    responsePayloadJson?: true;
    errorMessage?: true;
    startedAt?: true;
    finishedAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    commandId?: true;
    companyId?: true;
    createdByName?: true;
    deviceName?: true;
    productModel?: true;
    targetVersion?: true;
    verifiedAt?: true;
    _all?: true;
};
export type OtaUpgradeRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OtaUpgradeRecord to aggregate.
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtaUpgradeRecords to fetch.
     */
    orderBy?: Prisma.OtaUpgradeRecordOrderByWithRelationInput | Prisma.OtaUpgradeRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OtaUpgradeRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtaUpgradeRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtaUpgradeRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OtaUpgradeRecords
    **/
    _count?: true | OtaUpgradeRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OtaUpgradeRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OtaUpgradeRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OtaUpgradeRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OtaUpgradeRecordMaxAggregateInputType;
};
export type GetOtaUpgradeRecordAggregateType<T extends OtaUpgradeRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateOtaUpgradeRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtaUpgradeRecord[P]> : Prisma.GetScalarType<T[P], AggregateOtaUpgradeRecord[P]>;
};
export type OtaUpgradeRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtaUpgradeRecordWhereInput;
    orderBy?: Prisma.OtaUpgradeRecordOrderByWithAggregationInput | Prisma.OtaUpgradeRecordOrderByWithAggregationInput[];
    by: Prisma.OtaUpgradeRecordScalarFieldEnum[] | Prisma.OtaUpgradeRecordScalarFieldEnum;
    having?: Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtaUpgradeRecordCountAggregateInputType | true;
    _avg?: OtaUpgradeRecordAvgAggregateInputType;
    _sum?: OtaUpgradeRecordSumAggregateInputType;
    _min?: OtaUpgradeRecordMinAggregateInputType;
    _max?: OtaUpgradeRecordMaxAggregateInputType;
};
export type OtaUpgradeRecordGroupByOutputType = {
    id: string;
    deviceId: string;
    firmwareFileId: string;
    firmwareType: string;
    fromVersion: string | null;
    toVersion: string;
    status: string;
    progress: number;
    commandPayloadJson: runtime.JsonValue | null;
    responsePayloadJson: runtime.JsonValue | null;
    errorMessage: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdById: string | null;
    createdAt: Date;
    updatedAt: Date;
    commandId: string | null;
    companyId: string | null;
    createdByName: string | null;
    deviceName: string | null;
    productModel: string | null;
    targetVersion: string | null;
    verifiedAt: Date | null;
    _count: OtaUpgradeRecordCountAggregateOutputType | null;
    _avg: OtaUpgradeRecordAvgAggregateOutputType | null;
    _sum: OtaUpgradeRecordSumAggregateOutputType | null;
    _min: OtaUpgradeRecordMinAggregateOutputType | null;
    _max: OtaUpgradeRecordMaxAggregateOutputType | null;
};
export type GetOtaUpgradeRecordGroupByPayload<T extends OtaUpgradeRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtaUpgradeRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtaUpgradeRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtaUpgradeRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtaUpgradeRecordGroupByOutputType[P]>;
}>>;
export type OtaUpgradeRecordWhereInput = {
    AND?: Prisma.OtaUpgradeRecordWhereInput | Prisma.OtaUpgradeRecordWhereInput[];
    OR?: Prisma.OtaUpgradeRecordWhereInput[];
    NOT?: Prisma.OtaUpgradeRecordWhereInput | Prisma.OtaUpgradeRecordWhereInput[];
    id?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    deviceId?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    firmwareFileId?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    firmwareType?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    fromVersion?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    toVersion?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    status?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    progress?: Prisma.IntFilter<"OtaUpgradeRecord"> | number;
    commandPayloadJson?: Prisma.JsonNullableFilter<"OtaUpgradeRecord">;
    responsePayloadJson?: Prisma.JsonNullableFilter<"OtaUpgradeRecord">;
    errorMessage?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    startedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OtaUpgradeRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OtaUpgradeRecord"> | Date | string;
    commandId?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    companyId?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    createdByName?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    deviceName?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    productModel?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    targetVersion?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
};
export type OtaUpgradeRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    firmwareFileId?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    fromVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    toVersion?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    commandPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsePayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type OtaUpgradeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OtaUpgradeRecordWhereInput | Prisma.OtaUpgradeRecordWhereInput[];
    OR?: Prisma.OtaUpgradeRecordWhereInput[];
    NOT?: Prisma.OtaUpgradeRecordWhereInput | Prisma.OtaUpgradeRecordWhereInput[];
    deviceId?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    firmwareFileId?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    firmwareType?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    fromVersion?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    toVersion?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    status?: Prisma.StringFilter<"OtaUpgradeRecord"> | string;
    progress?: Prisma.IntFilter<"OtaUpgradeRecord"> | number;
    commandPayloadJson?: Prisma.JsonNullableFilter<"OtaUpgradeRecord">;
    responsePayloadJson?: Prisma.JsonNullableFilter<"OtaUpgradeRecord">;
    errorMessage?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    startedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
    createdById?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OtaUpgradeRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OtaUpgradeRecord"> | Date | string;
    commandId?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    companyId?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    createdByName?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    deviceName?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    productModel?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    targetVersion?: Prisma.StringNullableFilter<"OtaUpgradeRecord"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"OtaUpgradeRecord"> | Date | string | null;
}, "id">;
export type OtaUpgradeRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    firmwareFileId?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    fromVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    toVersion?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    commandPayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsePayloadJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandId?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByName?: Prisma.SortOrderInput | Prisma.SortOrder;
    deviceName?: Prisma.SortOrderInput | Prisma.SortOrder;
    productModel?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OtaUpgradeRecordCountOrderByAggregateInput;
    _avg?: Prisma.OtaUpgradeRecordAvgOrderByAggregateInput;
    _max?: Prisma.OtaUpgradeRecordMaxOrderByAggregateInput;
    _min?: Prisma.OtaUpgradeRecordMinOrderByAggregateInput;
    _sum?: Prisma.OtaUpgradeRecordSumOrderByAggregateInput;
};
export type OtaUpgradeRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput | Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput | Prisma.OtaUpgradeRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    firmwareFileId?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    firmwareType?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    fromVersion?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    toVersion?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    status?: Prisma.StringWithAggregatesFilter<"OtaUpgradeRecord"> | string;
    progress?: Prisma.IntWithAggregatesFilter<"OtaUpgradeRecord"> | number;
    commandPayloadJson?: Prisma.JsonNullableWithAggregatesFilter<"OtaUpgradeRecord">;
    responsePayloadJson?: Prisma.JsonNullableWithAggregatesFilter<"OtaUpgradeRecord">;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OtaUpgradeRecord"> | Date | string | null;
    finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OtaUpgradeRecord"> | Date | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OtaUpgradeRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OtaUpgradeRecord"> | Date | string;
    commandId?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    companyId?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    createdByName?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    deviceName?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    productModel?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    targetVersion?: Prisma.StringNullableWithAggregatesFilter<"OtaUpgradeRecord"> | string | null;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OtaUpgradeRecord"> | Date | string | null;
};
export type OtaUpgradeRecordCreateInput = {
    id: string;
    deviceId: string;
    firmwareFileId: string;
    firmwareType: string;
    fromVersion?: string | null;
    toVersion: string;
    status?: string;
    progress?: number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandId?: string | null;
    companyId?: string | null;
    createdByName?: string | null;
    deviceName?: string | null;
    productModel?: string | null;
    targetVersion?: string | null;
    verifiedAt?: Date | string | null;
};
export type OtaUpgradeRecordUncheckedCreateInput = {
    id: string;
    deviceId: string;
    firmwareFileId: string;
    firmwareType: string;
    fromVersion?: string | null;
    toVersion: string;
    status?: string;
    progress?: number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandId?: string | null;
    companyId?: string | null;
    createdByName?: string | null;
    deviceName?: string | null;
    productModel?: string | null;
    targetVersion?: string | null;
    verifiedAt?: Date | string | null;
};
export type OtaUpgradeRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    fromVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OtaUpgradeRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    fromVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OtaUpgradeRecordCreateManyInput = {
    id: string;
    deviceId: string;
    firmwareFileId: string;
    firmwareType: string;
    fromVersion?: string | null;
    toVersion: string;
    status?: string;
    progress?: number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    commandId?: string | null;
    companyId?: string | null;
    createdByName?: string | null;
    deviceName?: string | null;
    productModel?: string | null;
    targetVersion?: string | null;
    verifiedAt?: Date | string | null;
};
export type OtaUpgradeRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    fromVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OtaUpgradeRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareFileId?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    fromVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.IntFieldUpdateOperationsInput | number;
    commandPayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    responsePayloadJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productModel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OtaUpgradeRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    firmwareFileId?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    fromVersion?: Prisma.SortOrder;
    toVersion?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    commandPayloadJson?: Prisma.SortOrder;
    responsePayloadJson?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdByName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    targetVersion?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
};
export type OtaUpgradeRecordAvgOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type OtaUpgradeRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    firmwareFileId?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    fromVersion?: Prisma.SortOrder;
    toVersion?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdByName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    targetVersion?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
};
export type OtaUpgradeRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    firmwareFileId?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    fromVersion?: Prisma.SortOrder;
    toVersion?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commandId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdByName?: Prisma.SortOrder;
    deviceName?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    targetVersion?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
};
export type OtaUpgradeRecordSumOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type OtaUpgradeRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    firmwareFileId?: boolean;
    firmwareType?: boolean;
    fromVersion?: boolean;
    toVersion?: boolean;
    status?: boolean;
    progress?: boolean;
    commandPayloadJson?: boolean;
    responsePayloadJson?: boolean;
    errorMessage?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandId?: boolean;
    companyId?: boolean;
    createdByName?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    targetVersion?: boolean;
    verifiedAt?: boolean;
}, ExtArgs["result"]["otaUpgradeRecord"]>;
export type OtaUpgradeRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    firmwareFileId?: boolean;
    firmwareType?: boolean;
    fromVersion?: boolean;
    toVersion?: boolean;
    status?: boolean;
    progress?: boolean;
    commandPayloadJson?: boolean;
    responsePayloadJson?: boolean;
    errorMessage?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandId?: boolean;
    companyId?: boolean;
    createdByName?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    targetVersion?: boolean;
    verifiedAt?: boolean;
}, ExtArgs["result"]["otaUpgradeRecord"]>;
export type OtaUpgradeRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    firmwareFileId?: boolean;
    firmwareType?: boolean;
    fromVersion?: boolean;
    toVersion?: boolean;
    status?: boolean;
    progress?: boolean;
    commandPayloadJson?: boolean;
    responsePayloadJson?: boolean;
    errorMessage?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandId?: boolean;
    companyId?: boolean;
    createdByName?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    targetVersion?: boolean;
    verifiedAt?: boolean;
}, ExtArgs["result"]["otaUpgradeRecord"]>;
export type OtaUpgradeRecordSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    firmwareFileId?: boolean;
    firmwareType?: boolean;
    fromVersion?: boolean;
    toVersion?: boolean;
    status?: boolean;
    progress?: boolean;
    commandPayloadJson?: boolean;
    responsePayloadJson?: boolean;
    errorMessage?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commandId?: boolean;
    companyId?: boolean;
    createdByName?: boolean;
    deviceName?: boolean;
    productModel?: boolean;
    targetVersion?: boolean;
    verifiedAt?: boolean;
};
export type OtaUpgradeRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "firmwareFileId" | "firmwareType" | "fromVersion" | "toVersion" | "status" | "progress" | "commandPayloadJson" | "responsePayloadJson" | "errorMessage" | "startedAt" | "finishedAt" | "createdById" | "createdAt" | "updatedAt" | "commandId" | "companyId" | "createdByName" | "deviceName" | "productModel" | "targetVersion" | "verifiedAt", ExtArgs["result"]["otaUpgradeRecord"]>;
export type $OtaUpgradeRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OtaUpgradeRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        firmwareFileId: string;
        firmwareType: string;
        fromVersion: string | null;
        toVersion: string;
        status: string;
        progress: number;
        commandPayloadJson: runtime.JsonValue | null;
        responsePayloadJson: runtime.JsonValue | null;
        errorMessage: string | null;
        startedAt: Date | null;
        finishedAt: Date | null;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
        commandId: string | null;
        companyId: string | null;
        createdByName: string | null;
        deviceName: string | null;
        productModel: string | null;
        targetVersion: string | null;
        verifiedAt: Date | null;
    }, ExtArgs["result"]["otaUpgradeRecord"]>;
    composites: {};
};
export type OtaUpgradeRecordGetPayload<S extends boolean | null | undefined | OtaUpgradeRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload, S>;
export type OtaUpgradeRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtaUpgradeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtaUpgradeRecordCountAggregateInputType | true;
};
export interface OtaUpgradeRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OtaUpgradeRecord'];
        meta: {
            name: 'OtaUpgradeRecord';
        };
    };
    /**
     * Find zero or one OtaUpgradeRecord that matches the filter.
     * @param {OtaUpgradeRecordFindUniqueArgs} args - Arguments to find a OtaUpgradeRecord
     * @example
     * // Get one OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtaUpgradeRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OtaUpgradeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtaUpgradeRecordFindUniqueOrThrowArgs} args - Arguments to find a OtaUpgradeRecord
     * @example
     * // Get one OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtaUpgradeRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OtaUpgradeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordFindFirstArgs} args - Arguments to find a OtaUpgradeRecord
     * @example
     * // Get one OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtaUpgradeRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OtaUpgradeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordFindFirstOrThrowArgs} args - Arguments to find a OtaUpgradeRecord
     * @example
     * // Get one OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtaUpgradeRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OtaUpgradeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtaUpgradeRecords
     * const otaUpgradeRecords = await prisma.otaUpgradeRecord.findMany()
     *
     * // Get first 10 OtaUpgradeRecords
     * const otaUpgradeRecords = await prisma.otaUpgradeRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otaUpgradeRecordWithIdOnly = await prisma.otaUpgradeRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OtaUpgradeRecordFindManyArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OtaUpgradeRecord.
     * @param {OtaUpgradeRecordCreateArgs} args - Arguments to create a OtaUpgradeRecord.
     * @example
     * // Create one OtaUpgradeRecord
     * const OtaUpgradeRecord = await prisma.otaUpgradeRecord.create({
     *   data: {
     *     // ... data to create a OtaUpgradeRecord
     *   }
     * })
     *
     */
    create<T extends OtaUpgradeRecordCreateArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordCreateArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OtaUpgradeRecords.
     * @param {OtaUpgradeRecordCreateManyArgs} args - Arguments to create many OtaUpgradeRecords.
     * @example
     * // Create many OtaUpgradeRecords
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OtaUpgradeRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OtaUpgradeRecords and returns the data saved in the database.
     * @param {OtaUpgradeRecordCreateManyAndReturnArgs} args - Arguments to create many OtaUpgradeRecords.
     * @example
     * // Create many OtaUpgradeRecords
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OtaUpgradeRecords and only return the `id`
     * const otaUpgradeRecordWithIdOnly = await prisma.otaUpgradeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OtaUpgradeRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OtaUpgradeRecord.
     * @param {OtaUpgradeRecordDeleteArgs} args - Arguments to delete one OtaUpgradeRecord.
     * @example
     * // Delete one OtaUpgradeRecord
     * const OtaUpgradeRecord = await prisma.otaUpgradeRecord.delete({
     *   where: {
     *     // ... filter to delete one OtaUpgradeRecord
     *   }
     * })
     *
     */
    delete<T extends OtaUpgradeRecordDeleteArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OtaUpgradeRecord.
     * @param {OtaUpgradeRecordUpdateArgs} args - Arguments to update one OtaUpgradeRecord.
     * @example
     * // Update one OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OtaUpgradeRecordUpdateArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OtaUpgradeRecords.
     * @param {OtaUpgradeRecordDeleteManyArgs} args - Arguments to filter OtaUpgradeRecords to delete.
     * @example
     * // Delete a few OtaUpgradeRecords
     * const { count } = await prisma.otaUpgradeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OtaUpgradeRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtaUpgradeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OtaUpgradeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtaUpgradeRecords
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OtaUpgradeRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OtaUpgradeRecords and returns the data updated in the database.
     * @param {OtaUpgradeRecordUpdateManyAndReturnArgs} args - Arguments to update many OtaUpgradeRecords.
     * @example
     * // Update many OtaUpgradeRecords
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OtaUpgradeRecords and only return the `id`
     * const otaUpgradeRecordWithIdOnly = await prisma.otaUpgradeRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtaUpgradeRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OtaUpgradeRecord.
     * @param {OtaUpgradeRecordUpsertArgs} args - Arguments to update or create a OtaUpgradeRecord.
     * @example
     * // Update or create a OtaUpgradeRecord
     * const otaUpgradeRecord = await prisma.otaUpgradeRecord.upsert({
     *   create: {
     *     // ... data to create a OtaUpgradeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtaUpgradeRecord we want to update
     *   }
     * })
     */
    upsert<T extends OtaUpgradeRecordUpsertArgs>(args: Prisma.SelectSubset<T, OtaUpgradeRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__OtaUpgradeRecordClient<runtime.Types.Result.GetResult<Prisma.$OtaUpgradeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OtaUpgradeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordCountArgs} args - Arguments to filter OtaUpgradeRecords to count.
     * @example
     * // Count the number of OtaUpgradeRecords
     * const count = await prisma.otaUpgradeRecord.count({
     *   where: {
     *     // ... the filter for the OtaUpgradeRecords we want to count
     *   }
     * })
    **/
    count<T extends OtaUpgradeRecordCountArgs>(args?: Prisma.Subset<T, OtaUpgradeRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtaUpgradeRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OtaUpgradeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtaUpgradeRecordAggregateArgs>(args: Prisma.Subset<T, OtaUpgradeRecordAggregateArgs>): Prisma.PrismaPromise<GetOtaUpgradeRecordAggregateType<T>>;
    /**
     * Group by OtaUpgradeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaUpgradeRecordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OtaUpgradeRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtaUpgradeRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: OtaUpgradeRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtaUpgradeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtaUpgradeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OtaUpgradeRecord model
     */
    readonly fields: OtaUpgradeRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OtaUpgradeRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OtaUpgradeRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the OtaUpgradeRecord model
 */
export interface OtaUpgradeRecordFieldRefs {
    readonly id: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly deviceId: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly firmwareFileId: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly firmwareType: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly fromVersion: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly toVersion: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly status: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly progress: Prisma.FieldRef<"OtaUpgradeRecord", 'Int'>;
    readonly commandPayloadJson: Prisma.FieldRef<"OtaUpgradeRecord", 'Json'>;
    readonly responsePayloadJson: Prisma.FieldRef<"OtaUpgradeRecord", 'Json'>;
    readonly errorMessage: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly startedAt: Prisma.FieldRef<"OtaUpgradeRecord", 'DateTime'>;
    readonly finishedAt: Prisma.FieldRef<"OtaUpgradeRecord", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OtaUpgradeRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OtaUpgradeRecord", 'DateTime'>;
    readonly commandId: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly companyId: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly createdByName: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly deviceName: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly productModel: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly targetVersion: Prisma.FieldRef<"OtaUpgradeRecord", 'String'>;
    readonly verifiedAt: Prisma.FieldRef<"OtaUpgradeRecord", 'DateTime'>;
}
/**
 * OtaUpgradeRecord findUnique
 */
export type OtaUpgradeRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter, which OtaUpgradeRecord to fetch.
     */
    where: Prisma.OtaUpgradeRecordWhereUniqueInput;
};
/**
 * OtaUpgradeRecord findUniqueOrThrow
 */
export type OtaUpgradeRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter, which OtaUpgradeRecord to fetch.
     */
    where: Prisma.OtaUpgradeRecordWhereUniqueInput;
};
/**
 * OtaUpgradeRecord findFirst
 */
export type OtaUpgradeRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter, which OtaUpgradeRecord to fetch.
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtaUpgradeRecords to fetch.
     */
    orderBy?: Prisma.OtaUpgradeRecordOrderByWithRelationInput | Prisma.OtaUpgradeRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtaUpgradeRecords.
     */
    cursor?: Prisma.OtaUpgradeRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtaUpgradeRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtaUpgradeRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtaUpgradeRecords.
     */
    distinct?: Prisma.OtaUpgradeRecordScalarFieldEnum | Prisma.OtaUpgradeRecordScalarFieldEnum[];
};
/**
 * OtaUpgradeRecord findFirstOrThrow
 */
export type OtaUpgradeRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter, which OtaUpgradeRecord to fetch.
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtaUpgradeRecords to fetch.
     */
    orderBy?: Prisma.OtaUpgradeRecordOrderByWithRelationInput | Prisma.OtaUpgradeRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OtaUpgradeRecords.
     */
    cursor?: Prisma.OtaUpgradeRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtaUpgradeRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtaUpgradeRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtaUpgradeRecords.
     */
    distinct?: Prisma.OtaUpgradeRecordScalarFieldEnum | Prisma.OtaUpgradeRecordScalarFieldEnum[];
};
/**
 * OtaUpgradeRecord findMany
 */
export type OtaUpgradeRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter, which OtaUpgradeRecords to fetch.
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OtaUpgradeRecords to fetch.
     */
    orderBy?: Prisma.OtaUpgradeRecordOrderByWithRelationInput | Prisma.OtaUpgradeRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OtaUpgradeRecords.
     */
    cursor?: Prisma.OtaUpgradeRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OtaUpgradeRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OtaUpgradeRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OtaUpgradeRecords.
     */
    distinct?: Prisma.OtaUpgradeRecordScalarFieldEnum | Prisma.OtaUpgradeRecordScalarFieldEnum[];
};
/**
 * OtaUpgradeRecord create
 */
export type OtaUpgradeRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * The data needed to create a OtaUpgradeRecord.
     */
    data: Prisma.XOR<Prisma.OtaUpgradeRecordCreateInput, Prisma.OtaUpgradeRecordUncheckedCreateInput>;
};
/**
 * OtaUpgradeRecord createMany
 */
export type OtaUpgradeRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtaUpgradeRecords.
     */
    data: Prisma.OtaUpgradeRecordCreateManyInput | Prisma.OtaUpgradeRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OtaUpgradeRecord createManyAndReturn
 */
export type OtaUpgradeRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many OtaUpgradeRecords.
     */
    data: Prisma.OtaUpgradeRecordCreateManyInput | Prisma.OtaUpgradeRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OtaUpgradeRecord update
 */
export type OtaUpgradeRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * The data needed to update a OtaUpgradeRecord.
     */
    data: Prisma.XOR<Prisma.OtaUpgradeRecordUpdateInput, Prisma.OtaUpgradeRecordUncheckedUpdateInput>;
    /**
     * Choose, which OtaUpgradeRecord to update.
     */
    where: Prisma.OtaUpgradeRecordWhereUniqueInput;
};
/**
 * OtaUpgradeRecord updateMany
 */
export type OtaUpgradeRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OtaUpgradeRecords.
     */
    data: Prisma.XOR<Prisma.OtaUpgradeRecordUpdateManyMutationInput, Prisma.OtaUpgradeRecordUncheckedUpdateManyInput>;
    /**
     * Filter which OtaUpgradeRecords to update
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * Limit how many OtaUpgradeRecords to update.
     */
    limit?: number;
};
/**
 * OtaUpgradeRecord updateManyAndReturn
 */
export type OtaUpgradeRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * The data used to update OtaUpgradeRecords.
     */
    data: Prisma.XOR<Prisma.OtaUpgradeRecordUpdateManyMutationInput, Prisma.OtaUpgradeRecordUncheckedUpdateManyInput>;
    /**
     * Filter which OtaUpgradeRecords to update
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * Limit how many OtaUpgradeRecords to update.
     */
    limit?: number;
};
/**
 * OtaUpgradeRecord upsert
 */
export type OtaUpgradeRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * The filter to search for the OtaUpgradeRecord to update in case it exists.
     */
    where: Prisma.OtaUpgradeRecordWhereUniqueInput;
    /**
     * In case the OtaUpgradeRecord found by the `where` argument doesn't exist, create a new OtaUpgradeRecord with this data.
     */
    create: Prisma.XOR<Prisma.OtaUpgradeRecordCreateInput, Prisma.OtaUpgradeRecordUncheckedCreateInput>;
    /**
     * In case the OtaUpgradeRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OtaUpgradeRecordUpdateInput, Prisma.OtaUpgradeRecordUncheckedUpdateInput>;
};
/**
 * OtaUpgradeRecord delete
 */
export type OtaUpgradeRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
    /**
     * Filter which OtaUpgradeRecord to delete.
     */
    where: Prisma.OtaUpgradeRecordWhereUniqueInput;
};
/**
 * OtaUpgradeRecord deleteMany
 */
export type OtaUpgradeRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OtaUpgradeRecords to delete
     */
    where?: Prisma.OtaUpgradeRecordWhereInput;
    /**
     * Limit how many OtaUpgradeRecords to delete.
     */
    limit?: number;
};
/**
 * OtaUpgradeRecord without action
 */
export type OtaUpgradeRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaUpgradeRecord
     */
    select?: Prisma.OtaUpgradeRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OtaUpgradeRecord
     */
    omit?: Prisma.OtaUpgradeRecordOmit<ExtArgs> | null;
};
//# sourceMappingURL=OtaUpgradeRecord.d.ts.map