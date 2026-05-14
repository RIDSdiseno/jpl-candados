import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity;
};
export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
};
export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction;
};
export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
};
export type EnumCompanyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | Prisma.EnumCompanyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel> | $Enums.CompanyStatus;
};
export type EnumCompanyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | Prisma.EnumCompanyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanyStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumLockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LockStatus | Prisma.EnumLockStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockStatusFilter<$PrismaModel> | $Enums.LockStatus;
};
export type EnumLockConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionType | Prisma.EnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel> | $Enums.LockConnectionType;
};
export type EnumLockConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionStatus | Prisma.EnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel> | $Enums.LockConnectionStatus;
};
export type EnumLockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockStatus | Prisma.EnumLockStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockStatusWithAggregatesFilter<$PrismaModel> | $Enums.LockStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockStatusFilter<$PrismaModel>;
};
export type EnumLockConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionType | Prisma.EnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.LockConnectionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel>;
};
export type EnumLockConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionStatus | Prisma.EnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.LockConnectionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel>;
};
export type EnumAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | Prisma.EnumAccessTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel> | $Enums.AccessType;
};
export type EnumAccessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessStatus | Prisma.EnumAccessStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel> | $Enums.AccessStatus;
};
export type EnumAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | Prisma.EnumAccessTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel>;
};
export type EnumAccessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessStatus | Prisma.EnumAccessStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccessStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel>;
};
export type EnumCommandTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandType | Prisma.EnumCommandTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel> | $Enums.CommandType;
};
export type EnumCommandStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandStatus | Prisma.EnumCommandStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel> | $Enums.CommandStatus;
};
export type EnumCommandTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandType | Prisma.EnumCommandTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommandType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel>;
};
export type EnumCommandStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandStatus | Prisma.EnumCommandStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommandStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel>;
};
export type EnumLockEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LockEventType | Prisma.EnumLockEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel> | $Enums.LockEventType;
};
export type EnumLockEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockEventType | Prisma.EnumLockEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LockEventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel>;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity;
};
export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | Prisma.EnumAlertSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertSeverity[] | Prisma.ListEnumAlertSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertSeverityFilter<$PrismaModel>;
};
export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | Prisma.EnumAlertStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AlertStatus[] | Prisma.ListEnumAlertStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlertStatusFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction;
};
export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
};
export type NestedEnumCompanyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | Prisma.EnumCompanyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel> | $Enums.CompanyStatus;
};
export type NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyStatus | Prisma.EnumCompanyStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CompanyStatus[] | Prisma.ListEnumCompanyStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCompanyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompanyStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCompanyStatusFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumLockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LockStatus | Prisma.EnumLockStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockStatusFilter<$PrismaModel> | $Enums.LockStatus;
};
export type NestedEnumLockConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionType | Prisma.EnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel> | $Enums.LockConnectionType;
};
export type NestedEnumLockConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionStatus | Prisma.EnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel> | $Enums.LockConnectionStatus;
};
export type NestedEnumLockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockStatus | Prisma.EnumLockStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockStatus[] | Prisma.ListEnumLockStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockStatusWithAggregatesFilter<$PrismaModel> | $Enums.LockStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockStatusFilter<$PrismaModel>;
};
export type NestedEnumLockConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionType | Prisma.EnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionType[] | Prisma.ListEnumLockConnectionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.LockConnectionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockConnectionTypeFilter<$PrismaModel>;
};
export type NestedEnumLockConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockConnectionStatus | Prisma.EnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockConnectionStatus[] | Prisma.ListEnumLockConnectionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.LockConnectionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockConnectionStatusFilter<$PrismaModel>;
};
export type NestedEnumAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | Prisma.EnumAccessTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel> | $Enums.AccessType;
};
export type NestedEnumAccessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessStatus | Prisma.EnumAccessStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel> | $Enums.AccessStatus;
};
export type NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessType | Prisma.EnumAccessTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessType[] | Prisma.ListEnumAccessTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccessType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessTypeFilter<$PrismaModel>;
};
export type NestedEnumAccessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessStatus | Prisma.EnumAccessStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccessStatus[] | Prisma.ListEnumAccessStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccessStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccessStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccessStatusFilter<$PrismaModel>;
};
export type NestedEnumCommandTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandType | Prisma.EnumCommandTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel> | $Enums.CommandType;
};
export type NestedEnumCommandStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandStatus | Prisma.EnumCommandStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel> | $Enums.CommandStatus;
};
export type NestedEnumCommandTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandType | Prisma.EnumCommandTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandType[] | Prisma.ListEnumCommandTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommandType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommandTypeFilter<$PrismaModel>;
};
export type NestedEnumCommandStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommandStatus | Prisma.EnumCommandStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommandStatus[] | Prisma.ListEnumCommandStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommandStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommandStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommandStatusFilter<$PrismaModel>;
};
export type NestedEnumLockEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LockEventType | Prisma.EnumLockEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel> | $Enums.LockEventType;
};
export type NestedEnumLockEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LockEventType | Prisma.EnumLockEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LockEventType[] | Prisma.ListEnumLockEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLockEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LockEventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLockEventTypeFilter<$PrismaModel>;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map