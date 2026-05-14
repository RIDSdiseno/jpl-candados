import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DeviceAlarmPolicy
 *
 */
export type DeviceAlarmPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$DeviceAlarmPolicyPayload>;
export type AggregateDeviceAlarmPolicy = {
    _count: DeviceAlarmPolicyCountAggregateOutputType | null;
    _min: DeviceAlarmPolicyMinAggregateOutputType | null;
    _max: DeviceAlarmPolicyMaxAggregateOutputType | null;
};
export type DeviceAlarmPolicyMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    receivePhones: string | null;
    receiveEmails: string | null;
    pushSmsEnabled: boolean | null;
    pushEmailEnabled: boolean | null;
    sendingEventTypes: string | null;
    enabled: boolean | null;
    remarks: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeviceAlarmPolicyMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    receivePhones: string | null;
    receiveEmails: string | null;
    pushSmsEnabled: boolean | null;
    pushEmailEnabled: boolean | null;
    sendingEventTypes: string | null;
    enabled: boolean | null;
    remarks: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeviceAlarmPolicyCountAggregateOutputType = {
    id: number;
    deviceId: number;
    receivePhones: number;
    receiveEmails: number;
    pushSmsEnabled: number;
    pushEmailEnabled: number;
    sendingEventTypes: number;
    enabled: number;
    remarks: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DeviceAlarmPolicyMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    receivePhones?: true;
    receiveEmails?: true;
    pushSmsEnabled?: true;
    pushEmailEnabled?: true;
    sendingEventTypes?: true;
    enabled?: true;
    remarks?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeviceAlarmPolicyMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    receivePhones?: true;
    receiveEmails?: true;
    pushSmsEnabled?: true;
    pushEmailEnabled?: true;
    sendingEventTypes?: true;
    enabled?: true;
    remarks?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeviceAlarmPolicyCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    receivePhones?: true;
    receiveEmails?: true;
    pushSmsEnabled?: true;
    pushEmailEnabled?: true;
    sendingEventTypes?: true;
    enabled?: true;
    remarks?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeviceAlarmPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceAlarmPolicy to aggregate.
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceAlarmPolicies to fetch.
     */
    orderBy?: Prisma.DeviceAlarmPolicyOrderByWithRelationInput | Prisma.DeviceAlarmPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeviceAlarmPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceAlarmPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceAlarmPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DeviceAlarmPolicies
    **/
    _count?: true | DeviceAlarmPolicyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeviceAlarmPolicyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeviceAlarmPolicyMaxAggregateInputType;
};
export type GetDeviceAlarmPolicyAggregateType<T extends DeviceAlarmPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateDeviceAlarmPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeviceAlarmPolicy[P]> : Prisma.GetScalarType<T[P], AggregateDeviceAlarmPolicy[P]>;
};
export type DeviceAlarmPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    orderBy?: Prisma.DeviceAlarmPolicyOrderByWithAggregationInput | Prisma.DeviceAlarmPolicyOrderByWithAggregationInput[];
    by: Prisma.DeviceAlarmPolicyScalarFieldEnum[] | Prisma.DeviceAlarmPolicyScalarFieldEnum;
    having?: Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceAlarmPolicyCountAggregateInputType | true;
    _min?: DeviceAlarmPolicyMinAggregateInputType;
    _max?: DeviceAlarmPolicyMaxAggregateInputType;
};
export type DeviceAlarmPolicyGroupByOutputType = {
    id: string;
    deviceId: string;
    receivePhones: string | null;
    receiveEmails: string | null;
    pushSmsEnabled: boolean;
    pushEmailEnabled: boolean;
    sendingEventTypes: string;
    enabled: boolean;
    remarks: string | null;
    createdById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DeviceAlarmPolicyCountAggregateOutputType | null;
    _min: DeviceAlarmPolicyMinAggregateOutputType | null;
    _max: DeviceAlarmPolicyMaxAggregateOutputType | null;
};
export type GetDeviceAlarmPolicyGroupByPayload<T extends DeviceAlarmPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceAlarmPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceAlarmPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceAlarmPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceAlarmPolicyGroupByOutputType[P]>;
}>>;
export type DeviceAlarmPolicyWhereInput = {
    AND?: Prisma.DeviceAlarmPolicyWhereInput | Prisma.DeviceAlarmPolicyWhereInput[];
    OR?: Prisma.DeviceAlarmPolicyWhereInput[];
    NOT?: Prisma.DeviceAlarmPolicyWhereInput | Prisma.DeviceAlarmPolicyWhereInput[];
    id?: Prisma.StringFilter<"DeviceAlarmPolicy"> | string;
    deviceId?: Prisma.StringFilter<"DeviceAlarmPolicy"> | string;
    receivePhones?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    receiveEmails?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    pushSmsEnabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    pushEmailEnabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    sendingEventTypes?: Prisma.StringFilter<"DeviceAlarmPolicy"> | string;
    enabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    remarks?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    createdById?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceAlarmPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeviceAlarmPolicy"> | Date | string;
};
export type DeviceAlarmPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    receivePhones?: Prisma.SortOrderInput | Prisma.SortOrder;
    receiveEmails?: Prisma.SortOrderInput | Prisma.SortOrder;
    pushSmsEnabled?: Prisma.SortOrder;
    pushEmailEnabled?: Prisma.SortOrder;
    sendingEventTypes?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceAlarmPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeviceAlarmPolicyWhereInput | Prisma.DeviceAlarmPolicyWhereInput[];
    OR?: Prisma.DeviceAlarmPolicyWhereInput[];
    NOT?: Prisma.DeviceAlarmPolicyWhereInput | Prisma.DeviceAlarmPolicyWhereInput[];
    deviceId?: Prisma.StringFilter<"DeviceAlarmPolicy"> | string;
    receivePhones?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    receiveEmails?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    pushSmsEnabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    pushEmailEnabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    sendingEventTypes?: Prisma.StringFilter<"DeviceAlarmPolicy"> | string;
    enabled?: Prisma.BoolFilter<"DeviceAlarmPolicy"> | boolean;
    remarks?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    createdById?: Prisma.StringNullableFilter<"DeviceAlarmPolicy"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DeviceAlarmPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DeviceAlarmPolicy"> | Date | string;
}, "id">;
export type DeviceAlarmPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    receivePhones?: Prisma.SortOrderInput | Prisma.SortOrder;
    receiveEmails?: Prisma.SortOrderInput | Prisma.SortOrder;
    pushSmsEnabled?: Prisma.SortOrder;
    pushEmailEnabled?: Prisma.SortOrder;
    sendingEventTypes?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceAlarmPolicyCountOrderByAggregateInput;
    _max?: Prisma.DeviceAlarmPolicyMaxOrderByAggregateInput;
    _min?: Prisma.DeviceAlarmPolicyMinOrderByAggregateInput;
};
export type DeviceAlarmPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput | Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput | Prisma.DeviceAlarmPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DeviceAlarmPolicy"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"DeviceAlarmPolicy"> | string;
    receivePhones?: Prisma.StringNullableWithAggregatesFilter<"DeviceAlarmPolicy"> | string | null;
    receiveEmails?: Prisma.StringNullableWithAggregatesFilter<"DeviceAlarmPolicy"> | string | null;
    pushSmsEnabled?: Prisma.BoolWithAggregatesFilter<"DeviceAlarmPolicy"> | boolean;
    pushEmailEnabled?: Prisma.BoolWithAggregatesFilter<"DeviceAlarmPolicy"> | boolean;
    sendingEventTypes?: Prisma.StringWithAggregatesFilter<"DeviceAlarmPolicy"> | string;
    enabled?: Prisma.BoolWithAggregatesFilter<"DeviceAlarmPolicy"> | boolean;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"DeviceAlarmPolicy"> | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"DeviceAlarmPolicy"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceAlarmPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DeviceAlarmPolicy"> | Date | string;
};
export type DeviceAlarmPolicyCreateInput = {
    id: string;
    deviceId: string;
    receivePhones?: string | null;
    receiveEmails?: string | null;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes: string;
    enabled?: boolean;
    remarks?: string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type DeviceAlarmPolicyUncheckedCreateInput = {
    id: string;
    deviceId: string;
    receivePhones?: string | null;
    receiveEmails?: string | null;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes: string;
    enabled?: boolean;
    remarks?: string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type DeviceAlarmPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivePhones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receiveEmails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pushSmsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pushEmailEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sendingEventTypes?: Prisma.StringFieldUpdateOperationsInput | string;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceAlarmPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivePhones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receiveEmails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pushSmsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pushEmailEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sendingEventTypes?: Prisma.StringFieldUpdateOperationsInput | string;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceAlarmPolicyCreateManyInput = {
    id: string;
    deviceId: string;
    receivePhones?: string | null;
    receiveEmails?: string | null;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes: string;
    enabled?: boolean;
    remarks?: string | null;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type DeviceAlarmPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivePhones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receiveEmails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pushSmsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pushEmailEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sendingEventTypes?: Prisma.StringFieldUpdateOperationsInput | string;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceAlarmPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    receivePhones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    receiveEmails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pushSmsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pushEmailEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sendingEventTypes?: Prisma.StringFieldUpdateOperationsInput | string;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceAlarmPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    receivePhones?: Prisma.SortOrder;
    receiveEmails?: Prisma.SortOrder;
    pushSmsEnabled?: Prisma.SortOrder;
    pushEmailEnabled?: Prisma.SortOrder;
    sendingEventTypes?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceAlarmPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    receivePhones?: Prisma.SortOrder;
    receiveEmails?: Prisma.SortOrder;
    pushSmsEnabled?: Prisma.SortOrder;
    pushEmailEnabled?: Prisma.SortOrder;
    sendingEventTypes?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceAlarmPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    receivePhones?: Prisma.SortOrder;
    receiveEmails?: Prisma.SortOrder;
    pushSmsEnabled?: Prisma.SortOrder;
    pushEmailEnabled?: Prisma.SortOrder;
    sendingEventTypes?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeviceAlarmPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    receivePhones?: boolean;
    receiveEmails?: boolean;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes?: boolean;
    enabled?: boolean;
    remarks?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceAlarmPolicy"]>;
export type DeviceAlarmPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    receivePhones?: boolean;
    receiveEmails?: boolean;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes?: boolean;
    enabled?: boolean;
    remarks?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceAlarmPolicy"]>;
export type DeviceAlarmPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    receivePhones?: boolean;
    receiveEmails?: boolean;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes?: boolean;
    enabled?: boolean;
    remarks?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["deviceAlarmPolicy"]>;
export type DeviceAlarmPolicySelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    receivePhones?: boolean;
    receiveEmails?: boolean;
    pushSmsEnabled?: boolean;
    pushEmailEnabled?: boolean;
    sendingEventTypes?: boolean;
    enabled?: boolean;
    remarks?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DeviceAlarmPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "receivePhones" | "receiveEmails" | "pushSmsEnabled" | "pushEmailEnabled" | "sendingEventTypes" | "enabled" | "remarks" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceAlarmPolicy"]>;
export type $DeviceAlarmPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeviceAlarmPolicy";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        receivePhones: string | null;
        receiveEmails: string | null;
        pushSmsEnabled: boolean;
        pushEmailEnabled: boolean;
        sendingEventTypes: string;
        enabled: boolean;
        remarks: string | null;
        createdById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["deviceAlarmPolicy"]>;
    composites: {};
};
export type DeviceAlarmPolicyGetPayload<S extends boolean | null | undefined | DeviceAlarmPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload, S>;
export type DeviceAlarmPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceAlarmPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceAlarmPolicyCountAggregateInputType | true;
};
export interface DeviceAlarmPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeviceAlarmPolicy'];
        meta: {
            name: 'DeviceAlarmPolicy';
        };
    };
    /**
     * Find zero or one DeviceAlarmPolicy that matches the filter.
     * @param {DeviceAlarmPolicyFindUniqueArgs} args - Arguments to find a DeviceAlarmPolicy
     * @example
     * // Get one DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceAlarmPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DeviceAlarmPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceAlarmPolicyFindUniqueOrThrowArgs} args - Arguments to find a DeviceAlarmPolicy
     * @example
     * // Get one DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceAlarmPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceAlarmPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyFindFirstArgs} args - Arguments to find a DeviceAlarmPolicy
     * @example
     * // Get one DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceAlarmPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DeviceAlarmPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyFindFirstOrThrowArgs} args - Arguments to find a DeviceAlarmPolicy
     * @example
     * // Get one DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceAlarmPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DeviceAlarmPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceAlarmPolicies
     * const deviceAlarmPolicies = await prisma.deviceAlarmPolicy.findMany()
     *
     * // Get first 10 DeviceAlarmPolicies
     * const deviceAlarmPolicies = await prisma.deviceAlarmPolicy.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceAlarmPolicyWithIdOnly = await prisma.deviceAlarmPolicy.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeviceAlarmPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DeviceAlarmPolicy.
     * @param {DeviceAlarmPolicyCreateArgs} args - Arguments to create a DeviceAlarmPolicy.
     * @example
     * // Create one DeviceAlarmPolicy
     * const DeviceAlarmPolicy = await prisma.deviceAlarmPolicy.create({
     *   data: {
     *     // ... data to create a DeviceAlarmPolicy
     *   }
     * })
     *
     */
    create<T extends DeviceAlarmPolicyCreateArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DeviceAlarmPolicies.
     * @param {DeviceAlarmPolicyCreateManyArgs} args - Arguments to create many DeviceAlarmPolicies.
     * @example
     * // Create many DeviceAlarmPolicies
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeviceAlarmPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DeviceAlarmPolicies and returns the data saved in the database.
     * @param {DeviceAlarmPolicyCreateManyAndReturnArgs} args - Arguments to create many DeviceAlarmPolicies.
     * @example
     * // Create many DeviceAlarmPolicies
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DeviceAlarmPolicies and only return the `id`
     * const deviceAlarmPolicyWithIdOnly = await prisma.deviceAlarmPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeviceAlarmPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DeviceAlarmPolicy.
     * @param {DeviceAlarmPolicyDeleteArgs} args - Arguments to delete one DeviceAlarmPolicy.
     * @example
     * // Delete one DeviceAlarmPolicy
     * const DeviceAlarmPolicy = await prisma.deviceAlarmPolicy.delete({
     *   where: {
     *     // ... filter to delete one DeviceAlarmPolicy
     *   }
     * })
     *
     */
    delete<T extends DeviceAlarmPolicyDeleteArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DeviceAlarmPolicy.
     * @param {DeviceAlarmPolicyUpdateArgs} args - Arguments to update one DeviceAlarmPolicy.
     * @example
     * // Update one DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeviceAlarmPolicyUpdateArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DeviceAlarmPolicies.
     * @param {DeviceAlarmPolicyDeleteManyArgs} args - Arguments to filter DeviceAlarmPolicies to delete.
     * @example
     * // Delete a few DeviceAlarmPolicies
     * const { count } = await prisma.deviceAlarmPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeviceAlarmPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceAlarmPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceAlarmPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceAlarmPolicies
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeviceAlarmPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DeviceAlarmPolicies and returns the data updated in the database.
     * @param {DeviceAlarmPolicyUpdateManyAndReturnArgs} args - Arguments to update many DeviceAlarmPolicies.
     * @example
     * // Update many DeviceAlarmPolicies
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DeviceAlarmPolicies and only return the `id`
     * const deviceAlarmPolicyWithIdOnly = await prisma.deviceAlarmPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceAlarmPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DeviceAlarmPolicy.
     * @param {DeviceAlarmPolicyUpsertArgs} args - Arguments to update or create a DeviceAlarmPolicy.
     * @example
     * // Update or create a DeviceAlarmPolicy
     * const deviceAlarmPolicy = await prisma.deviceAlarmPolicy.upsert({
     *   create: {
     *     // ... data to create a DeviceAlarmPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceAlarmPolicy we want to update
     *   }
     * })
     */
    upsert<T extends DeviceAlarmPolicyUpsertArgs>(args: Prisma.SelectSubset<T, DeviceAlarmPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceAlarmPolicyClient<runtime.Types.Result.GetResult<Prisma.$DeviceAlarmPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DeviceAlarmPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyCountArgs} args - Arguments to filter DeviceAlarmPolicies to count.
     * @example
     * // Count the number of DeviceAlarmPolicies
     * const count = await prisma.deviceAlarmPolicy.count({
     *   where: {
     *     // ... the filter for the DeviceAlarmPolicies we want to count
     *   }
     * })
    **/
    count<T extends DeviceAlarmPolicyCountArgs>(args?: Prisma.Subset<T, DeviceAlarmPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceAlarmPolicyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DeviceAlarmPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAlarmPolicyAggregateArgs>(args: Prisma.Subset<T, DeviceAlarmPolicyAggregateArgs>): Prisma.PrismaPromise<GetDeviceAlarmPolicyAggregateType<T>>;
    /**
     * Group by DeviceAlarmPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAlarmPolicyGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DeviceAlarmPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceAlarmPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceAlarmPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceAlarmPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceAlarmPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DeviceAlarmPolicy model
     */
    readonly fields: DeviceAlarmPolicyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DeviceAlarmPolicy.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeviceAlarmPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the DeviceAlarmPolicy model
 */
export interface DeviceAlarmPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly deviceId: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly receivePhones: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly receiveEmails: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly pushSmsEnabled: Prisma.FieldRef<"DeviceAlarmPolicy", 'Boolean'>;
    readonly pushEmailEnabled: Prisma.FieldRef<"DeviceAlarmPolicy", 'Boolean'>;
    readonly sendingEventTypes: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly enabled: Prisma.FieldRef<"DeviceAlarmPolicy", 'Boolean'>;
    readonly remarks: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly createdById: Prisma.FieldRef<"DeviceAlarmPolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DeviceAlarmPolicy", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DeviceAlarmPolicy", 'DateTime'>;
}
/**
 * DeviceAlarmPolicy findUnique
 */
export type DeviceAlarmPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceAlarmPolicy to fetch.
     */
    where: Prisma.DeviceAlarmPolicyWhereUniqueInput;
};
/**
 * DeviceAlarmPolicy findUniqueOrThrow
 */
export type DeviceAlarmPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceAlarmPolicy to fetch.
     */
    where: Prisma.DeviceAlarmPolicyWhereUniqueInput;
};
/**
 * DeviceAlarmPolicy findFirst
 */
export type DeviceAlarmPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceAlarmPolicy to fetch.
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceAlarmPolicies to fetch.
     */
    orderBy?: Prisma.DeviceAlarmPolicyOrderByWithRelationInput | Prisma.DeviceAlarmPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceAlarmPolicies.
     */
    cursor?: Prisma.DeviceAlarmPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceAlarmPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceAlarmPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceAlarmPolicies.
     */
    distinct?: Prisma.DeviceAlarmPolicyScalarFieldEnum | Prisma.DeviceAlarmPolicyScalarFieldEnum[];
};
/**
 * DeviceAlarmPolicy findFirstOrThrow
 */
export type DeviceAlarmPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceAlarmPolicy to fetch.
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceAlarmPolicies to fetch.
     */
    orderBy?: Prisma.DeviceAlarmPolicyOrderByWithRelationInput | Prisma.DeviceAlarmPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DeviceAlarmPolicies.
     */
    cursor?: Prisma.DeviceAlarmPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceAlarmPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceAlarmPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceAlarmPolicies.
     */
    distinct?: Prisma.DeviceAlarmPolicyScalarFieldEnum | Prisma.DeviceAlarmPolicyScalarFieldEnum[];
};
/**
 * DeviceAlarmPolicy findMany
 */
export type DeviceAlarmPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter, which DeviceAlarmPolicies to fetch.
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DeviceAlarmPolicies to fetch.
     */
    orderBy?: Prisma.DeviceAlarmPolicyOrderByWithRelationInput | Prisma.DeviceAlarmPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DeviceAlarmPolicies.
     */
    cursor?: Prisma.DeviceAlarmPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DeviceAlarmPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DeviceAlarmPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DeviceAlarmPolicies.
     */
    distinct?: Prisma.DeviceAlarmPolicyScalarFieldEnum | Prisma.DeviceAlarmPolicyScalarFieldEnum[];
};
/**
 * DeviceAlarmPolicy create
 */
export type DeviceAlarmPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * The data needed to create a DeviceAlarmPolicy.
     */
    data: Prisma.XOR<Prisma.DeviceAlarmPolicyCreateInput, Prisma.DeviceAlarmPolicyUncheckedCreateInput>;
};
/**
 * DeviceAlarmPolicy createMany
 */
export type DeviceAlarmPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceAlarmPolicies.
     */
    data: Prisma.DeviceAlarmPolicyCreateManyInput | Prisma.DeviceAlarmPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceAlarmPolicy createManyAndReturn
 */
export type DeviceAlarmPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * The data used to create many DeviceAlarmPolicies.
     */
    data: Prisma.DeviceAlarmPolicyCreateManyInput | Prisma.DeviceAlarmPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DeviceAlarmPolicy update
 */
export type DeviceAlarmPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * The data needed to update a DeviceAlarmPolicy.
     */
    data: Prisma.XOR<Prisma.DeviceAlarmPolicyUpdateInput, Prisma.DeviceAlarmPolicyUncheckedUpdateInput>;
    /**
     * Choose, which DeviceAlarmPolicy to update.
     */
    where: Prisma.DeviceAlarmPolicyWhereUniqueInput;
};
/**
 * DeviceAlarmPolicy updateMany
 */
export type DeviceAlarmPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceAlarmPolicies.
     */
    data: Prisma.XOR<Prisma.DeviceAlarmPolicyUpdateManyMutationInput, Prisma.DeviceAlarmPolicyUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceAlarmPolicies to update
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * Limit how many DeviceAlarmPolicies to update.
     */
    limit?: number;
};
/**
 * DeviceAlarmPolicy updateManyAndReturn
 */
export type DeviceAlarmPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * The data used to update DeviceAlarmPolicies.
     */
    data: Prisma.XOR<Prisma.DeviceAlarmPolicyUpdateManyMutationInput, Prisma.DeviceAlarmPolicyUncheckedUpdateManyInput>;
    /**
     * Filter which DeviceAlarmPolicies to update
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * Limit how many DeviceAlarmPolicies to update.
     */
    limit?: number;
};
/**
 * DeviceAlarmPolicy upsert
 */
export type DeviceAlarmPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * The filter to search for the DeviceAlarmPolicy to update in case it exists.
     */
    where: Prisma.DeviceAlarmPolicyWhereUniqueInput;
    /**
     * In case the DeviceAlarmPolicy found by the `where` argument doesn't exist, create a new DeviceAlarmPolicy with this data.
     */
    create: Prisma.XOR<Prisma.DeviceAlarmPolicyCreateInput, Prisma.DeviceAlarmPolicyUncheckedCreateInput>;
    /**
     * In case the DeviceAlarmPolicy was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeviceAlarmPolicyUpdateInput, Prisma.DeviceAlarmPolicyUncheckedUpdateInput>;
};
/**
 * DeviceAlarmPolicy delete
 */
export type DeviceAlarmPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
    /**
     * Filter which DeviceAlarmPolicy to delete.
     */
    where: Prisma.DeviceAlarmPolicyWhereUniqueInput;
};
/**
 * DeviceAlarmPolicy deleteMany
 */
export type DeviceAlarmPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceAlarmPolicies to delete
     */
    where?: Prisma.DeviceAlarmPolicyWhereInput;
    /**
     * Limit how many DeviceAlarmPolicies to delete.
     */
    limit?: number;
};
/**
 * DeviceAlarmPolicy without action
 */
export type DeviceAlarmPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAlarmPolicy
     */
    select?: Prisma.DeviceAlarmPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DeviceAlarmPolicy
     */
    omit?: Prisma.DeviceAlarmPolicyOmit<ExtArgs> | null;
};
//# sourceMappingURL=DeviceAlarmPolicy.d.ts.map