import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceNfcCard
 *
 */
export type DeviceNfcCardModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceNfcCardPayload>;
export type AggregateDeviceNfcCard = {
    _count: DeviceNfcCardCountAggregateOutputType | null;
    _min: DeviceNfcCardMinAggregateOutputType | null;
    _max: DeviceNfcCardMaxAggregateOutputType | null;
};
export type DeviceNfcCardMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    nfcCardId: string | null;
    syncedAt: Date | null;
    createdAt: Date | null;
    blockNumber: string | null;
    cardNumber: string | null;
    createdById: string | null;
    status: string | null;
    updatedAt: Date | null;
};
export type DeviceNfcCardMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    nfcCardId: string | null;
    syncedAt: Date | null;
    createdAt: Date | null;
    blockNumber: string | null;
    cardNumber: string | null;
    createdById: string | null;
    status: string | null;
    updatedAt: Date | null;
};
export type DeviceNfcCardCountAggregateOutputType = {
    id: number;
    deviceId: number;
    nfcCardId: number;
    syncedAt: number;
    createdAt: number;
    blockNumber: number;
    cardNumber: number;
    createdById: number;
    status: number;
    updatedAt: number;
    _all: number;
};
export type DeviceNfcCardMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    nfcCardId?: true;
    syncedAt?: true;
    createdAt?: true;
    blockNumber?: true;
    cardNumber?: true;
    createdById?: true;
    status?: true;
    updatedAt?: true;
};
export type DeviceNfcCardMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    nfcCardId?: true;
    syncedAt?: true;
    createdAt?: true;
    blockNumber?: true;
    cardNumber?: true;
    createdById?: true;
    status?: true;
    updatedAt?: true;
};
export type DeviceNfcCardCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    nfcCardId?: true;
    syncedAt?: true;
    createdAt?: true;
    blockNumber?: true;
    cardNumber?: true;
    createdById?: true;
    status?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeviceNfcCardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceNfcCard to aggregate.
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceNfcCards to fetch.
     */
    orderBy?: Prisma.DeviceNfcCardOrderByWithRelationInput | Prisma.DeviceNfcCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceNfcCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceNfcCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceNfcCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceNfcCards
    **/
    _count?: true | DeviceNfcCardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceNfcCardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceNfcCardMaxAggregateInputType;
};
export type GetDeviceNfcCardAggregateType<T extends DeviceNfcCardAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceNfcCard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceNfcCard[P]> : Prisma.GetScalarType<T[P], AggregateDeviceNfcCard[P]>;
};
export type DeviceNfcCardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceNfcCardWhereInput;
    orderBy?: Prisma.DeviceNfcCardOrderByWithAggregationInput | Prisma.DeviceNfcCardOrderByWithAggregationInput[];
    by: Prisma.DeviceNfcCardScalarFieldEnum[] | Prisma.DeviceNfcCardScalarFieldEnum;
    having?: Prisma.DeviceNfcCardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceNfcCardCountAggregateInputType | true;
    _min?: DeviceNfcCardMinAggregateInputType;
    _max?: DeviceNfcCardMaxAggregateInputType;
};
export type DeviceNfcCardGroupByOutputType = {
    id: string;
    deviceId: string;
    nfcCardId: string;
    syncedAt: Date | null;
    createdAt: Date;
    blockNumber: string | null;
    cardNumber: string | null;
    createdById: string | null;
    status: string;
    updatedAt: Date;
    _count: DeviceNfcCardCountAggregateOutputType | null;
    _min: DeviceNfcCardMinAggregateOutputType | null;
    _max: DeviceNfcCardMaxAggregateOutputType | null;
};
export type GetDeviceNfcCardGroupByPayload<T extends DeviceNfcCardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceNfcCardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceNfcCardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceNfcCardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceNfcCardGroupByOutputType[P]>;
}>>;
export type DeviceNfcCardWhereInput = {
    AND?: Prisma.DeviceNfcCardWhereInput | Prisma.DeviceNfcCardWhereInput[];
    OR?: Prisma.DeviceNfcCardWhereInput[];
    NOT?: Prisma.DeviceNfcCardWhereInput | Prisma.DeviceNfcCardWhereInput[];
    id?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    deviceId?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    nfcCardId?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    syncedAt?: Prisma.DateTimeNullableFilter<"DeviceNfcCard"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceNfcCard"> | Date | string;
    blockNumber?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    cardNumber?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    createdById?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    status?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    updatedAt?: Prisma.DateTimeFilter<"DeviceNfcCard"> | Date | string;
};
export type DeviceNfcCardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    nfcCardId?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blockNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceNfcCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    deviceId_nfcCardId?: Prisma.DeviceNfcCardDeviceIdNfcCardIdCompoundUniqueInput;
    AND?: Prisma.DeviceNfcCardWhereInput | Prisma.DeviceNfcCardWhereInput[];
    OR?: Prisma.DeviceNfcCardWhereInput[];
    NOT?: Prisma.DeviceNfcCardWhereInput | Prisma.DeviceNfcCardWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    nfcCardId?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    syncedAt?: Prisma.DateTimeNullableFilter<"DeviceNfcCard"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceNfcCard"> | Date | string;
    blockNumber?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    cardNumber?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    createdById?: Prisma.StringNullableFilter<"DeviceNfcCard"> | string | null;
    status?: Prisma.StringFilter<"DeviceNfcCard"> | string;
    updatedAt?: Prisma.DateTimeFilter<"DeviceNfcCard"> | Date | string;
}, "id" | "deviceId_nfcCardId">;
export type DeviceNfcCardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    nfcCardId?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blockNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceNfcCardCountOrderByAggregateInput;
    _max?: Prisma.DeviceNfcCardMaxOrderByAggregateInput;
    _min?: Prisma.DeviceNfcCardMinOrderByAggregateInput;
};
export type DeviceNfcCardScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceNfcCardScalarWhereWithAggregatesInput | Prisma.DeviceNfcCardScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceNfcCardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceNfcCardScalarWhereWithAggregatesInput | Prisma.DeviceNfcCardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceNfcCard"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceNfcCard"> | string;
    nfcCardId?: Prisma.StringWithAggregatesFilter<"DeviceNfcCard"> | string;
    syncedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DeviceNfcCard"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceNfcCard"> | Date | string;
    blockNumber?: Prisma.StringNullableWithAggregatesFilter<"DeviceNfcCard"> | string | null;
    cardNumber?: Prisma.StringNullableWithAggregatesFilter<"DeviceNfcCard"> | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"DeviceNfcCard"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"DeviceNfcCard"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceNfcCard"> | Date | string;
};
export type DeviceNfcCardCreateInput = {
    id: string;
    deviceId: string;
    nfcCardId: string;
    syncedAt?: Date | string | null;
    createdAt?: Date | string;
    blockNumber?: string | null;
    cardNumber?: string | null;
    createdById?: string | null;
    status?: string;
    updatedAt?: Date | string;
};
export type DeviceNfcCardUncheckedCreateInput = {
    id: string;
    deviceId: string;
    nfcCardId: string;
    syncedAt?: Date | string | null;
    createdAt?: Date | string;
    blockNumber?: string | null;
    cardNumber?: string | null;
    createdById?: string | null;
    status?: string;
    updatedAt?: Date | string;
};
export type DeviceNfcCardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nfcCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    syncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blockNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceNfcCardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nfcCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    syncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blockNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceNfcCardCreateManyInput = {
    id: string;
    deviceId: string;
    nfcCardId: string;
    syncedAt?: Date | string | null;
    createdAt?: Date | string;
    blockNumber?: string | null;
    cardNumber?: string | null;
    createdById?: string | null;
    status?: string;
    updatedAt?: Date | string;
};
export type DeviceNfcCardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nfcCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    syncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blockNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceNfcCardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    nfcCardId?: Prisma.StringFieldUpdateOperationsInput | string;
    syncedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blockNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceNfcCardDeviceIdNfcCardIdCompoundUniqueInput = {
    deviceId: string;
    nfcCardId: string;
};
export type DeviceNfcCardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    nfcCardId?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blockNumber?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceNfcCardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    nfcCardId?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blockNumber?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceNfcCardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    nfcCardId?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blockNumber?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceNfcCardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    nfcCardId?: boolean;
    syncedAt?: boolean;
    createdAt?: boolean;
    blockNumber?: boolean;
    cardNumber?: boolean;
    createdById?: boolean;
    status?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceNfcCard"]>;
export type DeviceNfcCardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    nfcCardId?: boolean;
    syncedAt?: boolean;
    createdAt?: boolean;
    blockNumber?: boolean;
    cardNumber?: boolean;
    createdById?: boolean;
    status?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceNfcCard"]>;
export type DeviceNfcCardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    nfcCardId?: boolean;
    syncedAt?: boolean;
    createdAt?: boolean;
    blockNumber?: boolean;
    cardNumber?: boolean;
    createdById?: boolean;
    status?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceNfcCard"]>;
export type DeviceNfcCardSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    nfcCardId?: boolean;
    syncedAt?: boolean;
    createdAt?: boolean;
    blockNumber?: boolean;
    cardNumber?: boolean;
    createdById?: boolean;
    status?: boolean;
    updatedAt?: boolean;
};
export type DeviceNfcCardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "nfcCardId" | "syncedAt" | "createdAt" | "blockNumber" | "cardNumber" | "createdById" | "status" | "updatedAt", ExtArgs["result"]["deviceNfcCard"]>;
export type $DeviceNfcCardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceNfcCard";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        nfcCardId: string;
        syncedAt: Date | null;
        createdAt: Date;
        blockNumber: string | null;
        cardNumber: string | null;
        createdById: string | null;
        status: string;
        updatedAt: Date;
    }, ExtArgs["result"]["deviceNfcCard"]>;
    composites: {};
};
export type DeviceNfcCardGetPayload<S extends boolean | null | undefined | DeviceNfcCardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload, S>;
export type DeviceNfcCardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceNfcCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceNfcCardCountAggregateInputType | true;
};
export interface DeviceNfcCardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceNfcCard'];
        meta: {
            name: 'DeviceNfcCard';
        };
    };
    /**
     * Find zero or one DeviceNfcCard that matches the filter.
     * @param {DeviceNfcCardFindUniqueArgs} args - Arguments to find a DeviceNfcCard
     * @example
     * // Get one DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceNfcCardFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceNfcCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceNfcCardFindUniqueOrThrowArgs} args - Arguments to find a DeviceNfcCard
     * @example
     * // Get one DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceNfcCardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceNfcCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardFindFirstArgs} args - Arguments to find a DeviceNfcCard
     * @example
     * // Get one DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceNfcCardFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceNfcCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardFindFirstOrThrowArgs} args - Arguments to find a DeviceNfcCard
     * @example
     * // Get one DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceNfcCardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceNfcCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceNfcCards
     * const deviceNfcCards = await prisma.deviceNfcCard.findMany()
     *
     * // Get first 10 DeviceNfcCards
     * const deviceNfcCards = await prisma.deviceNfcCard.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceNfcCardWithIdOnly = await prisma.deviceNfcCard.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceNfcCardFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceNfcCard.
     * @param {DeviceNfcCardCreateArgs} args - Arguments to create a DeviceNfcCard.
     * @example
     * // Create one DeviceNfcCard
     * const DeviceNfcCard = await prisma.deviceNfcCard.create({
     *   data: {
     *     // ... data to create a DeviceNfcCard
     *   }
     * })
     *
     */
    create<T extends DeviceNfcCardCreateArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceNfcCards.
     * @param {DeviceNfcCardCreateManyArgs} args - Arguments to create many DeviceNfcCards.
     * @example
     * // Create many DeviceNfcCards
     * const deviceNfcCard = await prisma.deviceNfcCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceNfcCardCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceNfcCards and returns the data saved in the database.
     * @param {DeviceNfcCardCreateManyAndReturnArgs} args - Arguments to create many DeviceNfcCards.
     * @example
     * // Create many DeviceNfcCards
     * const deviceNfcCard = await prisma.deviceNfcCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceNfcCards and only return the `id`
     * const deviceNfcCardWithIdOnly = await prisma.deviceNfcCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceNfcCardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceNfcCard.
     * @param {DeviceNfcCardDeleteArgs} args - Arguments to delete one DeviceNfcCard.
     * @example
     * // Delete one DeviceNfcCard
     * const DeviceNfcCard = await prisma.deviceNfcCard.delete({
     *   where: {
     *     // ... filter to delete one DeviceNfcCard
     *   }
     * })
     *
     */
    delete<T extends DeviceNfcCardDeleteArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceNfcCard.
     * @param {DeviceNfcCardUpdateArgs} args - Arguments to update one DeviceNfcCard.
     * @example
     * // Update one DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceNfcCardUpdateArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceNfcCards.
     * @param {DeviceNfcCardDeleteManyArgs} args - Arguments to filter DeviceNfcCards to delete.
     * @example
     * // Delete a few DeviceNfcCards
     * const { count } = await prisma.deviceNfcCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceNfcCardDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceNfcCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceNfcCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceNfcCards
     * const deviceNfcCard = await prisma.deviceNfcCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceNfcCardUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceNfcCards and returns the data updated in the database.
     * @param {DeviceNfcCardUpdateManyAndReturnArgs} args - Arguments to update many DeviceNfcCards.
     * @example
     * // Update many DeviceNfcCards
     * const deviceNfcCard = await prisma.deviceNfcCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceNfcCards and only return the `id`
     * const deviceNfcCardWithIdOnly = await prisma.deviceNfcCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceNfcCardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceNfcCard.
     * @param {DeviceNfcCardUpsertArgs} args - Arguments to update or create a DeviceNfcCard.
     * @example
     * // Update or create a DeviceNfcCard
     * const deviceNfcCard = await prisma.deviceNfcCard.upsert({
     *   create: {
     *     // ... data to create a DeviceNfcCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceNfcCard we want to update
     *   }
     * })
     */
    upsert<T extends DeviceNfcCardUpsertArgs>(args: Prisma.SelectSubset<T, DeviceNfcCardUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceNfcCardClient<runtime.Types.Result.GetResult<Prisma.$DeviceNfcCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceNfcCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardCountArgs} args - Arguments to filter DeviceNfcCards to count.
     * @example
     * // Count the number of DeviceNfcCards
     * const count = await prisma.deviceNfcCard.count({
     *   where: {
     *     // ... the filter for the DeviceNfcCards we want to count
     *   }
     * })
    **/
    count<T extends DeviceNfcCardCountArgs>(args?: Prisma.Subset<T, DeviceNfcCardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceNfcCardCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceNfcCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceNfcCardAggregateArgs>(args: Prisma.Subset<T, DeviceNfcCardAggregateArgs>): Prisma.PrismaPromise<GetDeviceNfcCardAggregateType<T>>;
    /**
     * Group by DeviceNfcCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceNfcCardGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceNfcCardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceNfcCardGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceNfcCardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceNfcCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceNfcCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceNfcCard model
     */
    readonly fields: DeviceNfcCardFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceNfcCard.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceNfcCardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceNfcCard model
 */
export interface DeviceNfcCardFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly nfcCardId: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly syncedAt: Prisma.FieldRef<"DeviceNfcCard", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DeviceNfcCard", 'DateTime'>;
    readonly blockNumber: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly cardNumber: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly createdById: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly status: Prisma.FieldRef<"DeviceNfcCard", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"DeviceNfcCard", 'DateTime'>;
}
/**
 * DeviceNfcCard findUnique
 */
export type DeviceNfcCardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceNfcCard to fetch.
     */
    where: Prisma.DeviceNfcCardWhereUniqueInput;
};
/**
 * DeviceNfcCard findUniqueOrThrow
 */
export type DeviceNfcCardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceNfcCard to fetch.
     */
    where: Prisma.DeviceNfcCardWhereUniqueInput;
};
/**
 * DeviceNfcCard findFirst
 */
export type DeviceNfcCardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceNfcCard to fetch.
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceNfcCards to fetch.
     */
    orderBy?: Prisma.DeviceNfcCardOrderByWithRelationInput | Prisma.DeviceNfcCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceNfcCards.
     */
    cursor?: Prisma.DeviceNfcCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceNfcCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceNfcCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceNfcCards.
     */
    distinct?: Prisma.DeviceNfcCardScalarFieldEnum | Prisma.DeviceNfcCardScalarFieldEnum[];
};
/**
 * DeviceNfcCard findFirstOrThrow
 */
export type DeviceNfcCardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceNfcCard to fetch.
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceNfcCards to fetch.
     */
    orderBy?: Prisma.DeviceNfcCardOrderByWithRelationInput | Prisma.DeviceNfcCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceNfcCards.
     */
    cursor?: Prisma.DeviceNfcCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceNfcCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceNfcCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceNfcCards.
     */
    distinct?: Prisma.DeviceNfcCardScalarFieldEnum | Prisma.DeviceNfcCardScalarFieldEnum[];
};
/**
 * DeviceNfcCard findMany
 */
export type DeviceNfcCardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceNfcCards to fetch.
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceNfcCards to fetch.
     */
    orderBy?: Prisma.DeviceNfcCardOrderByWithRelationInput | Prisma.DeviceNfcCardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceNfcCards.
     */
    cursor?: Prisma.DeviceNfcCardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceNfcCards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceNfcCards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceNfcCards.
     */
    distinct?: Prisma.DeviceNfcCardScalarFieldEnum | Prisma.DeviceNfcCardScalarFieldEnum[];
};
/**
 * DeviceNfcCard create
 */
export type DeviceNfcCardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceNfcCard.
     */
    data: Prisma.XOR<Prisma.DeviceNfcCardCreateInput, Prisma.DeviceNfcCardUncheckedCreateInput>;
};
/**
 * DeviceNfcCard createMany
 */
export type DeviceNfcCardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceNfcCards.
     */
    data: Prisma.DeviceNfcCardCreateManyInput | Prisma.DeviceNfcCardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceNfcCard createManyAndReturn
 */
export type DeviceNfcCardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceNfcCards.
     */
    data: Prisma.DeviceNfcCardCreateManyInput | Prisma.DeviceNfcCardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceNfcCard update
 */
export type DeviceNfcCardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceNfcCard.
     */
    data: Prisma.XOR<Prisma.DeviceNfcCardUpdateInput, Prisma.DeviceNfcCardUncheckedUpdateInput>;
    /**
     * Choose, which DeviceNfcCard to update.
     */
    where: Prisma.DeviceNfcCardWhereUniqueInput;
};
/**
 * DeviceNfcCard updateMany
 */
export type DeviceNfcCardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceNfcCards.
     */
    data: Prisma.XOR<Prisma.DeviceNfcCardUpdateManyMutationInput, Prisma.DeviceNfcCardUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceNfcCards to update
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * Limit how many DeviceNfcCards to update.
     */
    limit?: number;
};
/**
 * DeviceNfcCard updateManyAndReturn
 */
export type DeviceNfcCardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceNfcCards.
     */
    data: Prisma.XOR<Prisma.DeviceNfcCardUpdateManyMutationInput, Prisma.DeviceNfcCardUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceNfcCards to update
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * Limit how many DeviceNfcCards to update.
     */
    limit?: number;
};
/**
 * DeviceNfcCard upsert
 */
export type DeviceNfcCardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceNfcCard to update in case it exists.
     */
    where: Prisma.DeviceNfcCardWhereUniqueInput;
    /**
     * In case the DeviceNfcCard found by the `where` argument doesn't exist, create a new DeviceNfcCard with this data.
     */
    create: Prisma.XOR<Prisma.DeviceNfcCardCreateInput, Prisma.DeviceNfcCardUncheckedCreateInput>;
    /**
     * In case the DeviceNfcCard was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceNfcCardUpdateInput, Prisma.DeviceNfcCardUncheckedUpdateInput>;
};
/**
 * DeviceNfcCard delete
 */
export type DeviceNfcCardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
    /**
     * Filter which DeviceNfcCard to delete.
     */
    where: Prisma.DeviceNfcCardWhereUniqueInput;
};
/**
 * DeviceNfcCard deleteMany
 */
export type DeviceNfcCardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceNfcCards to delete
     */
    where?: Prisma.DeviceNfcCardWhereInput;
    /**
     * Limit how many DeviceNfcCards to delete.
     */
    limit?: number;
};
/**
 * DeviceNfcCard without action
 */
export type DeviceNfcCardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceNfcCard
     */
    select?: Prisma.DeviceNfcCardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceNfcCard
     */
    omit?: Prisma.DeviceNfcCardOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceNfcCard.d.ts.map