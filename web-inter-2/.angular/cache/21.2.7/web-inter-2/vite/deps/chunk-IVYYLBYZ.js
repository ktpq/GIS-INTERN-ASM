import {
  s
} from "./chunk-52S666YI.js";
import {
  d
} from "./chunk-ACTGCYFB.js";
import {
  u
} from "./chunk-U4R7X4DP.js";
import {
  S,
  m2 as m
} from "./chunk-ZRWCUWWK.js";
import {
  has
} from "./chunk-TX75HZKJ.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/rest/support/jsonUtils.js
function n(n3, r2, u2) {
  return !!t(n3, r2, u2);
}
function r(n3, r2, u2) {
  return t(n3, r2, u2);
}
function t(n3, r2, t2) {
  return n3 && n3.hasOwnProperty(r2) ? n3[r2] : t2;
}

// node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
var a = { name: "supportsName", size: "supportsSize", contentType: "supportsContentType", keywords: "supportsKeywords", exifInfo: "supportsExifInfo" };
var n2 = ["cubic-bezier", "circular-arc", "elliptic-arc"];
function c(t2) {
  const s2 = t2?.supportedSpatialAggregationStatistics?.map((t3) => t3.toLowerCase());
  return { envelope: !!s2?.includes("envelopeaggregate"), centroid: !!s2?.includes("centroidaggregate"), convexHull: !!s2?.includes("convexhullaggregate") };
}
function l(t2, s2) {
  const e = t2?.supportedOperationsWithCacheHint?.map((t3) => t3.toLowerCase());
  return !!e?.includes(s2.toLowerCase());
}
function d2(t2) {
  const s2 = t2?.supportedStatisticTypes?.map((t3) => t3.toLowerCase());
  return { count: !!s2?.includes("count"), sum: !!s2?.includes("sum"), min: !!s2?.includes("min"), max: !!s2?.includes("max"), avg: !!s2?.includes("avg"), var: !!s2?.includes("var"), stddev: !!s2?.includes("stddev"), percentileContinuous: !!s2?.includes("percentile_cont"), percentileDiscrete: !!s2?.includes("percentile_disc"), envelope: !!s2?.includes("envelopeaggregate"), centroid: !!s2?.includes("centroidaggregate"), convexHull: !!s2?.includes("convexhullaggregate") };
}
function y(t2) {
  const s2 = t2?.supportedNormalizationTypes?.map((t3) => t3.toLowerCase());
  return { field: !!s2?.includes("field"), log: !!s2?.includes("log"), naturalLog: !!s2?.includes("naturallog"), percentOfTotal: !!s2?.includes("percentoftotal"), squareRoot: !!s2?.includes("squareroot") };
}
function m2(t2) {
  if (!has("featurelayer-pbf-true-curves")) return false;
  return (t2.supportedTrueCurvePbfFeatureEncodings ?? []).includes("esriDefault");
}
function C(t2, s2) {
  return { analytics: v(t2), attachment: g(t2), data: f(t2), metadata: h(t2), operations: Q(t2.capabilities, t2, s2), query: A(t2, s2), queryAttributeBins: F(t2), queryRelated: S2(t2), queryTopFeatures: T(t2), editing: x(t2) };
}
function v(t2) {
  return { supportsCacheHint: l(t2.advancedQueryCapabilities, "queryAnalytics") };
}
function g(t2) {
  const s2 = t2.attachmentProperties, e = { supportsName: false, supportsSize: false, supportsContentType: false, supportsKeywords: false, supportsExifInfo: false, supportsCacheHint: l(t2.advancedQueryCapabilities, "queryAttachments"), supportsOrderByFields: n(t2.advancedQueryCapabilities, "supportsQueryAttachmentOrderByFields", false), supportsResize: n(t2, "supportsAttachmentsResizing", false), supportsTypeWildcard: n(t2.advancedQueryCapabilities, "supportsQueryAttachmentWithTypeWildcard", false) };
  return s2 && Array.isArray(s2) && s2.forEach((t3) => {
    const s3 = a[t3.name];
    s3 && (e[s3] = !!t3.isEnabled);
  }), e;
}
function f(t2) {
  const s2 = n(t2.advancedQueryCapabilities, "supportsTrueCurve", false);
  return { isVersioned: n(t2, "isDataVersioned", false), isBranchVersioned: n(t2, "isDataBranchVersioned", false), supportsAttachment: n(t2, "hasAttachments", false), supportsM: n(t2, "hasM", false), supportsTrueCurve: s2, supportedCurveTypes: B(t2, s2), supportsZ: n(t2, "hasZ", false) };
}
function h(t2) {
  return { supportsAdvancedFieldProperties: n(t2, "supportsFieldDescriptionProperty", false) };
}
function Q(t2, s2, p) {
  const o = S(p), u2 = t2?.toLowerCase().split(",").map((t3) => t3.trim()) ?? [], a2 = p ? m(p) : null, n3 = u2.includes("MapServer" === a2?.serverType ? "data" : "query"), c2 = u2.includes("editing") && !s2.datesInUnknownTimezone && !(true === s2.uniqueIdInfo?.OIDFieldContainsHashValue);
  let l2 = c2 && u2.includes("create"), d3 = c2 && u2.includes("delete"), y2 = c2 && u2.includes("update");
  const m3 = u2.includes("changetracking"), C2 = s2.advancedQueryCapabilities;
  let v2 = n(s2, "supportsExceedsLimitStatistics", false);
  if (!o) {
    n(C2, "supportsUseEstimateForExceedsLimit", false) || (v2 = false);
  }
  return c2 && !(l2 || d3 || y2) && (l2 = d3 = y2 = true), { supportsCalculate: n(s2, "supportsCalculate", false), supportsTruncate: n(s2, "supportsTruncate", false), supportsValidateSql: n(s2, "supportsValidateSql", false), supportsAdd: l2, supportsDelete: d3, supportsEditing: c2, supportsChangeTracking: m3, supportsQuery: n3, supportsQueryAnalytics: n(C2, "supportsQueryAnalytic", false), supportsQueryAttachments: n(C2, "supportsQueryAttachments", false), supportsQueryBins: n(C2, "supportsQueryBins", false) || !!s2.queryBinsCapabilities, supportsQueryPivot: n(C2, "supportsQueryPivot", false), supportsQueryTopFeatures: n(C2, "supportsTopFeaturesQuery", false), supportsResizeAttachments: n(s2, "supportsAttachmentsResizing", false), supportsSync: u2.includes("sync"), supportsUpdate: y2, supportsExceedsLimitStatistics: v2, supportsAsyncConvert3D: n(s2, "supportsAsyncConvert3D", false) };
}
function A(t2, s2) {
  const r2 = t2.advancedQueryCapabilities, a2 = t2.ownershipBasedAccessControlForFeatures, n3 = t2.archivingInfo, d3 = t2.currentVersion, y2 = s(s2, t2.cacheMaxAge), C2 = s2?.includes("MapServer"), v2 = !C2 || d3 >= has("mapserver-pbf-version-support"), g2 = S(s2), f2 = new Set((t2.supportedQueryFormats ?? "").split(",").map((t3) => t3.toLowerCase().trim())), h2 = v2 && m2(t2);
  return { maxRecordCount: r(t2, "maxRecordCount", void 0), maxRecordCountFactor: r(t2, "maxRecordCountFactor", void 0), maxUniqueIDCount: r(t2, "maxUniqueIDCount", void 0), relativeTimeBinWindow: y2, standardMaxRecordCount: r(t2, "standardMaxRecordCount", void 0), supportedSpatialAggregationStatistics: c(r2), supportsCacheHint: n(r2, "supportsQueryWithCacheHint", false) || l(r2, "query"), supportsCentroid: n(r2, "supportsReturningGeometryCentroid", false), supportsCentroidOnDegeneratedQuantizedGeometry: g2 || null == s2, supportsCompactGeometry: g2, supportsCurrentUser: n(r2, "supportsCurrentUserQueries", false), supportsDefaultSpatialReference: n(r2, "supportsDefaultSR", false), supportsDegeneratedQuantizedGeometry: n(r2, "supportsDegeneratedQuantizedGeometry", false), supportsDisjointSpatialRelationship: n(r2, "supportsDisjointSpatialRel", false), supportsDistance: n(r2, "supportsQueryWithDistance", false), supportsDistinct: n(r2, "supportsDistinct", t2.supportsAdvancedQueries), supportsExtent: n(r2, "supportsReturningQueryExtent", false), supportsFormatPBF: v2 && f2.has("pbf"), supportsFormatPBFWithCurves: h2, supportsFullTextSearch: n(r2, "supportsFullTextSearch", false), supportsGeometryProperties: n(r2, "supportsReturningGeometryProperties", false), supportsHavingClause: n(r2, "supportsHavingClause", false), supportsHistoricMoment: n(n3, "supportsQueryWithHistoricMoment", false), supportsMaxRecordCountFactor: n(r2, "supportsMaxRecordCountFactor", false), supportsOrderBy: n(r2, "supportsOrderBy", t2.supportsAdvancedQueries), supportsPagination: n(r2, "supportsPagination", false), supportsPaginationOnAggregatedQueries: n(r2, "supportsPaginationOnAggregatedQueries", false), supportsPercentileStatistics: n(r2, "supportsPercentileStatistics", false), supportsQuantization: n(t2, "supportsCoordinatesQuantization", false), supportsQuantizationEditMode: n(t2, "supportsQuantizationEditMode", false), supportsQueryByAnonymous: n(a2, "allowAnonymousToQuery", true), supportsQueryByOthers: n(a2, "allowOthersToQuery", true), supportsQueryGeometry: n(t2, "supportsReturningQueryGeometry", false), supportsResultType: n(r2, "supportsQueryWithResultType", false), supportsReturnMesh: !!d(t2.infoFor3D), supportsSpatialAggregationStatistics: n(r2, "supportsSpatialAggregationStatistics", false), supportsSqlExpression: n(r2, "supportsSqlExpression", false), supportsStandardizedQueriesOnly: n(t2, "useStandardizedQueries", false), supportsStatistics: n(r2, "supportsStatistics", t2.supportsStatistics), supportsTopFeaturesQuery: n(r2, "supportsTopFeaturesQuery", false), supportsTrueCurve: n(r2, "supportsTrueCurve", false), tileMaxRecordCount: r(t2, "tileMaxRecordCount", void 0) };
}
function S2(t2) {
  const s2 = t2.advancedQueryCapabilities, e = n(s2, "supportsAdvancedQueryRelated", false);
  return { supportsPagination: n(s2, "supportsQueryRelatedPagination", false), supportsCount: e, supportsOrderBy: e, supportsCacheHint: l(s2, "queryRelated") };
}
function T(t2) {
  return { supportsCacheHint: l(t2.advancedQueryCapabilities, "queryTopFilter") };
}
function F(t2) {
  const s2 = t2 ? t2.queryBinsCapabilities : void 0;
  return { supportsDate: n(s2, "supportsDateBin", false), supportsFixedInterval: n(s2, "supportsFixedIntervalBin", false), supportsAutoInterval: n(s2, "supportsAutoIntervalBin", false), supportsFixedBoundaries: n(s2, "supportsFixedBoundariesBin", false), supportsStackBy: n(s2, "supportsStackBy", false), supportsSplitBy: n(s2, "supportsSplitBy", false), supportsSnapToData: n(s2, "supportsSnapToData", false), supportsReturnFullIntervalBin: n(s2, "supportsReturnFullIntervalBin", false), supportsFirstDayOfWeek: n(s2, "supportsFirstDayOfWeek", false), supportsNormalization: n(s2, "supportsNormalization", false), supportedStatistics: d2(s2), supportedNormalizationTypes: y(s2) };
}
function x(t2) {
  const s2 = t2.ownershipBasedAccessControlForFeatures, e = t2 ? t2.advancedEditingCapabilities : void 0;
  return { supportsGeometryUpdate: n(t2, "allowGeometryUpdates", true), supportsGlobalId: n(t2, "supportsApplyEditsWithGlobalIds", false), supportsReturnServiceEditsInSourceSpatialReference: n(t2, "supportsReturnServiceEditsInSourceSR", false), supportsRollbackOnFailure: n(t2, "supportsRollbackOnFailureParameter", false), supportsTrueCurveUpdate: n(t2, "allowTrueCurvesUpdates", true), supportsTrueCurveUpdateByTrueCurveClientsOnly: n(t2, "onlyAllowTrueCurveUpdatesByTrueCurveClients", true), supportsUpdateWithoutM: n(t2, "allowUpdateWithoutMValues", false), supportsUploadWithItemId: n(t2, "supportsAttachmentsByUploadId", false), supportsDeleteByAnonymous: n(s2, "allowAnonymousToDelete", true), supportsDeleteByOthers: n(s2, "allowOthersToDelete", true), supportsUpdateByAnonymous: n(s2, "allowAnonymousToUpdate", true), supportsUpdateByOthers: n(s2, "allowOthersToUpdate", true), supportsAsyncApplyEdits: n(e, "supportsAsyncApplyEdits", false), zDefault: r(t2, "zDefault", void 0) };
}
function B(e, r2) {
  const p = e.supportedCurveTypes ?? e.advancedQueryCapabilities?.supportedCurveTypes;
  return Array.isArray(p) ? p.map((t2) => u.fromJSON(t2)).filter(N) : r2 ? n2 : [];
}
function R(t2) {
  return { operations: { supportsAppend: n(t2, "supportsAppend", false), supportsCoverageQuery: t2?.playbackInfo?.klv["0601"] ?? false, supportsExportClip: n(t2, "supportsExportClip", false), supportsExportFrameset: n(t2, "supportsExportFrameset", false), supportsMensuration: n(t2, "supportsMensuration", false), supportsPreviews: n(t2, "supportsPreviews", false), supportsUpdate: n(t2, "supportsUpdate", false) } };
}

export {
  C,
  R
};
//# sourceMappingURL=chunk-IVYYLBYZ.js.map
