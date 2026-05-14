import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FirmwareFile
 *
 */
export type FirmwareFileModel = runtime.Types.Result.DefaultSelection<Prisma.$FirmwareFilePayload>;
export type AggregateFirmwareFile = {
    _count: FirmwareFileCountAggregateOutputType | null;
    _avg: FirmwareFileAvgAggregateOutputType | null;
    _sum: FirmwareFileSumAggregateOutputType | null;
    _min: FirmwareFileMinAggregateOutputType | null;
    _max: FirmwareFileMaxAggregateOutputType | null;
};
export type FirmwareFileAvgAggregateOutputType = {
    fileSize: number | null;
};
export type FirmwareFileSumAggregateOutputType = {
    fileSize: number | null;
};
export type FirmwareFileMinAggregateOutputType = {
    id: string | null;
    deviceType: string | null;
    productModel: string | null;
    firmwareType: string | null;
    versionName: string | null;
    fileName: string | null;
    filePath: string | null;
    fileSize: number | null;
    mimeType: string | null;
    description: string | null;
    uploadedById: string | null;
    uploadedAt: Date | null;
    deletedAt: Date | null;
    checksum: string | null;
    originalFileName: string | null;
    uploadedByName: string | null;
};
export type FirmwareFileMaxAggregateOutputType = {
    id: string | null;
    deviceType: string | null;
    productModel: string | null;
    firmwareType: string | null;
    versionName: string | null;
    fileName: string | null;
    filePath: string | null;
    fileSize: number | null;
    mimeType: string | null;
    description: string | null;
    uploadedById: string | null;
    uploadedAt: Date | null;
    deletedAt: Date | null;
    checksum: string | null;
    originalFileName: string | null;
    uploadedByName: string | null;
};
export type FirmwareFileCountAggregateOutputType = {
    id: number;
    deviceType: number;
    productModel: number;
    firmwareType: number;
    versionName: number;
    fileName: number;
    filePath: number;
    fileSize: number;
    mimeType: number;
    description: number;
    uploadedById: number;
    uploadedAt: number;
    deletedAt: number;
    checksum: number;
    originalFileName: number;
    uploadedByName: number;
    _all: number;
};
export type FirmwareFileAvgAggregateInputType = {
    fileSize?: true;
};
export type FirmwareFileSumAggregateInputType = {
    fileSize?: true;
};
export type FirmwareFileMinAggregateInputType = {
    id?: true;
    deviceType?: true;
    productModel?: true;
    firmwareType?: true;
    versionName?: true;
    fileName?: true;
    filePath?: true;
    fileSize?: true;
    mimeType?: true;
    description?: true;
    uploadedById?: true;
    uploadedAt?: true;
    deletedAt?: true;
    checksum?: true;
    originalFileName?: true;
    uploadedByName?: true;
};
export type FirmwareFileMaxAggregateInputType = {
    id?: true;
    deviceType?: true;
    productModel?: true;
    firmwareType?: true;
    versionName?: true;
    fileName?: true;
    filePath?: true;
    fileSize?: true;
    mimeType?: true;
    description?: true;
    uploadedById?: true;
    uploadedAt?: true;
    deletedAt?: true;
    checksum?: true;
    originalFileName?: true;
    uploadedByName?: true;
};
export type FirmwareFileCountAggregateInputType = {
    id?: true;
    deviceType?: true;
    productModel?: true;
    firmwareType?: true;
    versionName?: true;
    fileName?: true;
    filePath?: true;
    fileSize?: true;
    mimeType?: true;
    description?: true;
    uploadedById?: true;
    uploadedAt?: true;
    deletedAt?: true;
    checksum?: true;
    originalFileName?: true;
    uploadedByName?: true;
    _all?: true;
};
export type FirmwareFileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FirmwareFile to aggregate.
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirmwareFiles to fetch.
     */
    orderBy?: Prisma.FirmwareFileOrderByWithRelationInput | Prisma.FirmwareFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FirmwareFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirmwareFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirmwareFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FirmwareFiles
    **/
    _count?: true | FirmwareFileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FirmwareFileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FirmwareFileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FirmwareFileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FirmwareFileMaxAggregateInputType;
};
export type GetFirmwareFileAggregateType<T extends FirmwareFileAggregateArgs> = {
    [P in keyof T & keyof AggregateFirmwareFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFirmwareFile[P]> : Prisma.GetScalarType<T[P], AggregateFirmwareFile[P]>;
};
export type FirmwareFileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FirmwareFileWhereInput;
    orderBy?: Prisma.FirmwareFileOrderByWithAggregationInput | Prisma.FirmwareFileOrderByWithAggregationInput[];
    by: Prisma.FirmwareFileScalarFieldEnum[] | Prisma.FirmwareFileScalarFieldEnum;
    having?: Prisma.FirmwareFileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FirmwareFileCountAggregateInputType | true;
    _avg?: FirmwareFileAvgAggregateInputType;
    _sum?: FirmwareFileSumAggregateInputType;
    _min?: FirmwareFileMinAggregateInputType;
    _max?: FirmwareFileMaxAggregateInputType;
};
export type FirmwareFileGroupByOutputType = {
    id: string;
    deviceType: string;
    productModel: string;
    firmwareType: string;
    versionName: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    mimeType: string | null;
    description: string | null;
    uploadedById: string | null;
    uploadedAt: Date;
    deletedAt: Date | null;
    checksum: string | null;
    originalFileName: string | null;
    uploadedByName: string | null;
    _count: FirmwareFileCountAggregateOutputType | null;
    _avg: FirmwareFileAvgAggregateOutputType | null;
    _sum: FirmwareFileSumAggregateOutputType | null;
    _min: FirmwareFileMinAggregateOutputType | null;
    _max: FirmwareFileMaxAggregateOutputType | null;
};
export type GetFirmwareFileGroupByPayload<T extends FirmwareFileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FirmwareFileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FirmwareFileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FirmwareFileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FirmwareFileGroupByOutputType[P]>;
}>>;
export type FirmwareFileWhereInput = {
    AND?: Prisma.FirmwareFileWhereInput | Prisma.FirmwareFileWhereInput[];
    OR?: Prisma.FirmwareFileWhereInput[];
    NOT?: Prisma.FirmwareFileWhereInput | Prisma.FirmwareFileWhereInput[];
    id?: Prisma.StringFilter<"FirmwareFile"> | string;
    deviceType?: Prisma.StringFilter<"FirmwareFile"> | string;
    productModel?: Prisma.StringFilter<"FirmwareFile"> | string;
    firmwareType?: Prisma.StringFilter<"FirmwareFile"> | string;
    versionName?: Prisma.StringFilter<"FirmwareFile"> | string;
    fileName?: Prisma.StringFilter<"FirmwareFile"> | string;
    filePath?: Prisma.StringFilter<"FirmwareFile"> | string;
    fileSize?: Prisma.IntFilter<"FirmwareFile"> | number;
    mimeType?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    description?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedById?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedAt?: Prisma.DateTimeFilter<"FirmwareFile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"FirmwareFile"> | Date | string | null;
    checksum?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    originalFileName?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedByName?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
};
export type FirmwareFileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    versionName?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    filePath?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalFileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type FirmwareFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    deviceType_productModel_firmwareType_versionName?: Prisma.FirmwareFileDeviceTypeProductModelFirmwareTypeVersionNameCompoundUniqueInput;
    AND?: Prisma.FirmwareFileWhereInput | Prisma.FirmwareFileWhereInput[];
    OR?: Prisma.FirmwareFileWhereInput[];
    NOT?: Prisma.FirmwareFileWhereInput | Prisma.FirmwareFileWhereInput[];
    deviceType?: Prisma.StringFilter<"FirmwareFile"> | string;
    productModel?: Prisma.StringFilter<"FirmwareFile"> | string;
    firmwareType?: Prisma.StringFilter<"FirmwareFile"> | string;
    versionName?: Prisma.StringFilter<"FirmwareFile"> | string;
    fileName?: Prisma.StringFilter<"FirmwareFile"> | string;
    filePath?: Prisma.StringFilter<"FirmwareFile"> | string;
    fileSize?: Prisma.IntFilter<"FirmwareFile"> | number;
    mimeType?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    description?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedById?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedAt?: Prisma.DateTimeFilter<"FirmwareFile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"FirmwareFile"> | Date | string | null;
    checksum?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    originalFileName?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
    uploadedByName?: Prisma.StringNullableFilter<"FirmwareFile"> | string | null;
}, "id" | "deviceType_productModel_firmwareType_versionName">;
export type FirmwareFileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    versionName?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    filePath?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalFileName?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FirmwareFileCountOrderByAggregateInput;
    _avg?: Prisma.FirmwareFileAvgOrderByAggregateInput;
    _max?: Prisma.FirmwareFileMaxOrderByAggregateInput;
    _min?: Prisma.FirmwareFileMinOrderByAggregateInput;
    _sum?: Prisma.FirmwareFileSumOrderByAggregateInput;
};
export type FirmwareFileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FirmwareFileScalarWhereWithAggregatesInput | Prisma.FirmwareFileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FirmwareFileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FirmwareFileScalarWhereWithAggregatesInput | Prisma.FirmwareFileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    deviceType?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    productModel?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    firmwareType?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    versionName?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    filePath?: Prisma.StringWithAggregatesFilter<"FirmwareFile"> | string;
    fileSize?: Prisma.IntWithAggregatesFilter<"FirmwareFile"> | number;
    mimeType?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
    uploadedById?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
    uploadedAt?: Prisma.DateTimeWithAggregatesFilter<"FirmwareFile"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"FirmwareFile"> | Date | string | null;
    checksum?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
    originalFileName?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
    uploadedByName?: Prisma.StringNullableWithAggregatesFilter<"FirmwareFile"> | string | null;
};
export type FirmwareFileCreateInput = {
    id: string;
    deviceType: string;
    productModel: string;
    firmwareType: string;
    versionName: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    mimeType?: string | null;
    description?: string | null;
    uploadedById?: string | null;
    uploadedAt?: Date | string;
    deletedAt?: Date | string | null;
    checksum?: string | null;
    originalFileName?: string | null;
    uploadedByName?: string | null;
};
export type FirmwareFileUncheckedCreateInput = {
    id: string;
    deviceType: string;
    productModel: string;
    firmwareType: string;
    versionName: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    mimeType?: string | null;
    description?: string | null;
    uploadedById?: string | null;
    uploadedAt?: Date | string;
    deletedAt?: Date | string | null;
    checksum?: string | null;
    originalFileName?: string | null;
    uploadedByName?: string | null;
};
export type FirmwareFileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    versionName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    filePath?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FirmwareFileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    versionName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    filePath?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FirmwareFileCreateManyInput = {
    id: string;
    deviceType: string;
    productModel: string;
    firmwareType: string;
    versionName: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    mimeType?: string | null;
    description?: string | null;
    uploadedById?: string | null;
    uploadedAt?: Date | string;
    deletedAt?: Date | string | null;
    checksum?: string | null;
    originalFileName?: string | null;
    uploadedByName?: string | null;
};
export type FirmwareFileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    versionName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    filePath?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FirmwareFileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceType?: Prisma.StringFieldUpdateOperationsInput | string;
    productModel?: Prisma.StringFieldUpdateOperationsInput | string;
    firmwareType?: Prisma.StringFieldUpdateOperationsInput | string;
    versionName?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    filePath?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checksum?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalFileName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedByName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FirmwareFileDeviceTypeProductModelFirmwareTypeVersionNameCompoundUniqueInput = {
    deviceType: string;
    productModel: string;
    firmwareType: string;
    versionName: string;
};
export type FirmwareFileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    versionName?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    filePath?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
};
export type FirmwareFileAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type FirmwareFileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    versionName?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    filePath?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
};
export type FirmwareFileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceType?: Prisma.SortOrder;
    productModel?: Prisma.SortOrder;
    firmwareType?: Prisma.SortOrder;
    versionName?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    filePath?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    originalFileName?: Prisma.SortOrder;
    uploadedByName?: Prisma.SortOrder;
};
export type FirmwareFileSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FirmwareFileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceType?: boolean;
    productModel?: boolean;
    firmwareType?: boolean;
    versionName?: boolean;
    fileName?: boolean;
    filePath?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    description?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
    deletedAt?: boolean;
    checksum?: boolean;
    originalFileName?: boolean;
    uploadedByName?: boolean;
}, ExtArgs["result"]["firmwareFile"]>;
export type FirmwareFileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceType?: boolean;
    productModel?: boolean;
    firmwareType?: boolean;
    versionName?: boolean;
    fileName?: boolean;
    filePath?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    description?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
    deletedAt?: boolean;
    checksum?: boolean;
    originalFileName?: boolean;
    uploadedByName?: boolean;
}, ExtArgs["result"]["firmwareFile"]>;
export type FirmwareFileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceType?: boolean;
    productModel?: boolean;
    firmwareType?: boolean;
    versionName?: boolean;
    fileName?: boolean;
    filePath?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    description?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
    deletedAt?: boolean;
    checksum?: boolean;
    originalFileName?: boolean;
    uploadedByName?: boolean;
}, ExtArgs["result"]["firmwareFile"]>;
export type FirmwareFileSelectScalar = {
    id?: boolean;
    deviceType?: boolean;
    productModel?: boolean;
    firmwareType?: boolean;
    versionName?: boolean;
    fileName?: boolean;
    filePath?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    description?: boolean;
    uploadedById?: boolean;
    uploadedAt?: boolean;
    deletedAt?: boolean;
    checksum?: boolean;
    originalFileName?: boolean;
    uploadedByName?: boolean;
};
export type FirmwareFileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceType" | "productModel" | "firmwareType" | "versionName" | "fileName" | "filePath" | "fileSize" | "mimeType" | "description" | "uploadedById" | "uploadedAt" | "deletedAt" | "checksum" | "originalFileName" | "uploadedByName", ExtArgs["result"]["firmwareFile"]>;
export type $FirmwareFilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FirmwareFile";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceType: string;
        productModel: string;
        firmwareType: string;
        versionName: string;
        fileName: string;
        filePath: string;
        fileSize: number;
        mimeType: string | null;
        description: string | null;
        uploadedById: string | null;
        uploadedAt: Date;
        deletedAt: Date | null;
        checksum: string | null;
        originalFileName: string | null;
        uploadedByName: string | null;
    }, ExtArgs["result"]["firmwareFile"]>;
    composites: {};
};
export type FirmwareFileGetPayload<S extends boolean | null | undefined | FirmwareFileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload, S>;
export type FirmwareFileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FirmwareFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FirmwareFileCountAggregateInputType | true;
};
export interface FirmwareFileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FirmwareFile'];
        meta: {
            name: 'FirmwareFile';
        };
    };
    /**
     * Find zero or one FirmwareFile that matches the filter.
     * @param {FirmwareFileFindUniqueArgs} args - Arguments to find a FirmwareFile
     * @example
     * // Get one FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FirmwareFileFindUniqueArgs>(args: Prisma.SelectSubset<T, FirmwareFileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FirmwareFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FirmwareFileFindUniqueOrThrowArgs} args - Arguments to find a FirmwareFile
     * @example
     * // Get one FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FirmwareFileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FirmwareFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FirmwareFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileFindFirstArgs} args - Arguments to find a FirmwareFile
     * @example
     * // Get one FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FirmwareFileFindFirstArgs>(args?: Prisma.SelectSubset<T, FirmwareFileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FirmwareFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileFindFirstOrThrowArgs} args - Arguments to find a FirmwareFile
     * @example
     * // Get one FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FirmwareFileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FirmwareFileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FirmwareFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FirmwareFiles
     * const firmwareFiles = await prisma.firmwareFile.findMany()
     *
     * // Get first 10 FirmwareFiles
     * const firmwareFiles = await prisma.firmwareFile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const firmwareFileWithIdOnly = await prisma.firmwareFile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FirmwareFileFindManyArgs>(args?: Prisma.SelectSubset<T, FirmwareFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FirmwareFile.
     * @param {FirmwareFileCreateArgs} args - Arguments to create a FirmwareFile.
     * @example
     * // Create one FirmwareFile
     * const FirmwareFile = await prisma.firmwareFile.create({
     *   data: {
     *     // ... data to create a FirmwareFile
     *   }
     * })
     *
     */
    create<T extends FirmwareFileCreateArgs>(args: Prisma.SelectSubset<T, FirmwareFileCreateArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FirmwareFiles.
     * @param {FirmwareFileCreateManyArgs} args - Arguments to create many FirmwareFiles.
     * @example
     * // Create many FirmwareFiles
     * const firmwareFile = await prisma.firmwareFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FirmwareFileCreateManyArgs>(args?: Prisma.SelectSubset<T, FirmwareFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FirmwareFiles and returns the data saved in the database.
     * @param {FirmwareFileCreateManyAndReturnArgs} args - Arguments to create many FirmwareFiles.
     * @example
     * // Create many FirmwareFiles
     * const firmwareFile = await prisma.firmwareFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FirmwareFiles and only return the `id`
     * const firmwareFileWithIdOnly = await prisma.firmwareFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FirmwareFileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FirmwareFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FirmwareFile.
     * @param {FirmwareFileDeleteArgs} args - Arguments to delete one FirmwareFile.
     * @example
     * // Delete one FirmwareFile
     * const FirmwareFile = await prisma.firmwareFile.delete({
     *   where: {
     *     // ... filter to delete one FirmwareFile
     *   }
     * })
     *
     */
    delete<T extends FirmwareFileDeleteArgs>(args: Prisma.SelectSubset<T, FirmwareFileDeleteArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FirmwareFile.
     * @param {FirmwareFileUpdateArgs} args - Arguments to update one FirmwareFile.
     * @example
     * // Update one FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FirmwareFileUpdateArgs>(args: Prisma.SelectSubset<T, FirmwareFileUpdateArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FirmwareFiles.
     * @param {FirmwareFileDeleteManyArgs} args - Arguments to filter FirmwareFiles to delete.
     * @example
     * // Delete a few FirmwareFiles
     * const { count } = await prisma.firmwareFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FirmwareFileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FirmwareFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FirmwareFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FirmwareFiles
     * const firmwareFile = await prisma.firmwareFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FirmwareFileUpdateManyArgs>(args: Prisma.SelectSubset<T, FirmwareFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FirmwareFiles and returns the data updated in the database.
     * @param {FirmwareFileUpdateManyAndReturnArgs} args - Arguments to update many FirmwareFiles.
     * @example
     * // Update many FirmwareFiles
     * const firmwareFile = await prisma.firmwareFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FirmwareFiles and only return the `id`
     * const firmwareFileWithIdOnly = await prisma.firmwareFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends FirmwareFileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FirmwareFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FirmwareFile.
     * @param {FirmwareFileUpsertArgs} args - Arguments to update or create a FirmwareFile.
     * @example
     * // Update or create a FirmwareFile
     * const firmwareFile = await prisma.firmwareFile.upsert({
     *   create: {
     *     // ... data to create a FirmwareFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FirmwareFile we want to update
     *   }
     * })
     */
    upsert<T extends FirmwareFileUpsertArgs>(args: Prisma.SelectSubset<T, FirmwareFileUpsertArgs<ExtArgs>>): Prisma.Prisma__FirmwareFileClient<runtime.Types.Result.GetResult<Prisma.$FirmwareFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FirmwareFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileCountArgs} args - Arguments to filter FirmwareFiles to count.
     * @example
     * // Count the number of FirmwareFiles
     * const count = await prisma.firmwareFile.count({
     *   where: {
     *     // ... the filter for the FirmwareFiles we want to count
     *   }
     * })
    **/
    count<T extends FirmwareFileCountArgs>(args?: Prisma.Subset<T, FirmwareFileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FirmwareFileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FirmwareFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FirmwareFileAggregateArgs>(args: Prisma.Subset<T, FirmwareFileAggregateArgs>): Prisma.PrismaPromise<GetFirmwareFileAggregateType<T>>;
    /**
     * Group by FirmwareFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FirmwareFileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FirmwareFileGroupByArgs['orderBy'];
    } : {
        orderBy?: FirmwareFileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FirmwareFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirmwareFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FirmwareFile model
     */
    readonly fields: FirmwareFileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FirmwareFile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FirmwareFileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the FirmwareFile model
 */
export interface FirmwareFileFieldRefs {
    readonly id: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly deviceType: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly productModel: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly firmwareType: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly versionName: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly fileName: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly filePath: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly fileSize: Prisma.FieldRef<"FirmwareFile", 'Int'>;
    readonly mimeType: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly description: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly uploadedById: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly uploadedAt: Prisma.FieldRef<"FirmwareFile", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"FirmwareFile", 'DateTime'>;
    readonly checksum: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly originalFileName: Prisma.FieldRef<"FirmwareFile", 'String'>;
    readonly uploadedByName: Prisma.FieldRef<"FirmwareFile", 'String'>;
}
/**
 * FirmwareFile findUnique
 */
export type FirmwareFileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter, which FirmwareFile to fetch.
     */
    where: Prisma.FirmwareFileWhereUniqueInput;
};
/**
 * FirmwareFile findUniqueOrThrow
 */
export type FirmwareFileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter, which FirmwareFile to fetch.
     */
    where: Prisma.FirmwareFileWhereUniqueInput;
};
/**
 * FirmwareFile findFirst
 */
export type FirmwareFileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter, which FirmwareFile to fetch.
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirmwareFiles to fetch.
     */
    orderBy?: Prisma.FirmwareFileOrderByWithRelationInput | Prisma.FirmwareFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FirmwareFiles.
     */
    cursor?: Prisma.FirmwareFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirmwareFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirmwareFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirmwareFiles.
     */
    distinct?: Prisma.FirmwareFileScalarFieldEnum | Prisma.FirmwareFileScalarFieldEnum[];
};
/**
 * FirmwareFile findFirstOrThrow
 */
export type FirmwareFileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter, which FirmwareFile to fetch.
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirmwareFiles to fetch.
     */
    orderBy?: Prisma.FirmwareFileOrderByWithRelationInput | Prisma.FirmwareFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FirmwareFiles.
     */
    cursor?: Prisma.FirmwareFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirmwareFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirmwareFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirmwareFiles.
     */
    distinct?: Prisma.FirmwareFileScalarFieldEnum | Prisma.FirmwareFileScalarFieldEnum[];
};
/**
 * FirmwareFile findMany
 */
export type FirmwareFileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter, which FirmwareFiles to fetch.
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirmwareFiles to fetch.
     */
    orderBy?: Prisma.FirmwareFileOrderByWithRelationInput | Prisma.FirmwareFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FirmwareFiles.
     */
    cursor?: Prisma.FirmwareFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirmwareFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirmwareFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirmwareFiles.
     */
    distinct?: Prisma.FirmwareFileScalarFieldEnum | Prisma.FirmwareFileScalarFieldEnum[];
};
/**
 * FirmwareFile create
 */
export type FirmwareFileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * The data needed to create a FirmwareFile.
     */
    data: Prisma.XOR<Prisma.FirmwareFileCreateInput, Prisma.FirmwareFileUncheckedCreateInput>;
};
/**
 * FirmwareFile createMany
 */
export type FirmwareFileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FirmwareFiles.
     */
    data: Prisma.FirmwareFileCreateManyInput | Prisma.FirmwareFileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FirmwareFile createManyAndReturn
 */
export type FirmwareFileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * The data used to create many FirmwareFiles.
     */
    data: Prisma.FirmwareFileCreateManyInput | Prisma.FirmwareFileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FirmwareFile update
 */
export type FirmwareFileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * The data needed to update a FirmwareFile.
     */
    data: Prisma.XOR<Prisma.FirmwareFileUpdateInput, Prisma.FirmwareFileUncheckedUpdateInput>;
    /**
     * Choose, which FirmwareFile to update.
     */
    where: Prisma.FirmwareFileWhereUniqueInput;
};
/**
 * FirmwareFile updateMany
 */
export type FirmwareFileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FirmwareFiles.
     */
    data: Prisma.XOR<Prisma.FirmwareFileUpdateManyMutationInput, Prisma.FirmwareFileUncheckedUpdateManyInput>;
    /**
     * Filter which FirmwareFiles to update
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * Limit how many FirmwareFiles to update.
     */
    limit?: number;
};
/**
 * FirmwareFile updateManyAndReturn
 */
export type FirmwareFileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * The data used to update FirmwareFiles.
     */
    data: Prisma.XOR<Prisma.FirmwareFileUpdateManyMutationInput, Prisma.FirmwareFileUncheckedUpdateManyInput>;
    /**
     * Filter which FirmwareFiles to update
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * Limit how many FirmwareFiles to update.
     */
    limit?: number;
};
/**
 * FirmwareFile upsert
 */
export type FirmwareFileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * The filter to search for the FirmwareFile to update in case it exists.
     */
    where: Prisma.FirmwareFileWhereUniqueInput;
    /**
     * In case the FirmwareFile found by the `where` argument doesn't exist, create a new FirmwareFile with this data.
     */
    create: Prisma.XOR<Prisma.FirmwareFileCreateInput, Prisma.FirmwareFileUncheckedCreateInput>;
    /**
     * In case the FirmwareFile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FirmwareFileUpdateInput, Prisma.FirmwareFileUncheckedUpdateInput>;
};
/**
 * FirmwareFile delete
 */
export type FirmwareFileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
    /**
     * Filter which FirmwareFile to delete.
     */
    where: Prisma.FirmwareFileWhereUniqueInput;
};
/**
 * FirmwareFile deleteMany
 */
export type FirmwareFileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FirmwareFiles to delete
     */
    where?: Prisma.FirmwareFileWhereInput;
    /**
     * Limit how many FirmwareFiles to delete.
     */
    limit?: number;
};
/**
 * FirmwareFile without action
 */
export type FirmwareFileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareFile
     */
    select?: Prisma.FirmwareFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirmwareFile
     */
    omit?: Prisma.FirmwareFileOmit<ExtArgs> | null;
};
//# sourceMappingURL=FirmwareFile.d.ts.map