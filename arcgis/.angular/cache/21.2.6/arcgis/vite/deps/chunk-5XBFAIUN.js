import {
  m as m3
} from "./chunk-L3NTTNVH.js";
import {
  p,
  s as s2
} from "./chunk-QEI2MEKM.js";
import {
  n as n2
} from "./chunk-PYMCJBOT.js";
import {
  s
} from "./chunk-AEEIJGHJ.js";
import {
  l
} from "./chunk-NSJQHJ2B.js";
import {
  m as m4
} from "./chunk-4QSSUPBC.js";
import {
  u
} from "./chunk-4YKWF6M6.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a2,
  c,
  m,
  m3 as m2,
  r3 as r,
  r4 as r2
} from "./chunk-LV7AMIAU.js";
import {
  o
} from "./chunk-O4A47ZEM.js";
import {
  a
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/FullTextSearch.js
var i = class extends l(n) {
  constructor(e) {
    super(e), this.onFields = null, this.operator = null, this.searchTerm = null, this.searchType = null;
  }
};
__decorate([a2({ type: [String], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.onFields && this.onFields.length > 0 };
} } } })], i.prototype, "onFields", void 0), __decorate([a2({ type: String, json: { write: true } })], i.prototype, "operator", void 0), __decorate([a2({ type: String, json: { write: true } })], i.prototype, "searchTerm", void 0), __decorate([a2({ type: String, json: { write: true } })], i.prototype, "searchType", void 0), i = __decorate([c("esri.rest.support.FullTextSearch")], i);
var p2 = i;

// node_modules/@arcgis/core/rest/support/Query.js
var S2;
var g = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var R = class extends n {
  static {
    S2 = this;
  }
  static from(t) {
    return m(S2, t);
  }
  constructor(t) {
    super(t), this.aggregateIds = null, this.cacheHint = void 0, this.compactGeometryEnabled = false, this.datumTransformation = null, this.defaultSpatialReferenceEnabled = false, this.distance = void 0, this.dynamicDataSource = void 0, this.formatOf3DObjects = null, this.fullText = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = void 0, this.groupByFieldsForStatistics = null, this.having = null, this.historicMoment = null, this.maxAllowableOffset = void 0, this.maxRecordCountFactor = 1, this.multipatchOption = null, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.outStatistics = null, this.parameterValues = null, this.pixelSize = null, this.quantizationParameters = null, this.rangeValues = null, this.relationParameter = null, this.resultType = null, this.returnCentroid = false, this.returnDistinctValues = false, this.returnExceededLimitFeatures = true, this.returnGeometry = false, this.returnQueryGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.returnTrueCurves = void 0, this.sourceSpatialReference = null, this.spatialRelationship = "intersects", this.start = void 0, this.sqlFormat = null, this.text = null, this.timeExtent = null, this.timeReferenceUnknownClient = false, this.units = null, this.where = null;
  }
  castDatumTransformation(t) {
    return "number" == typeof t || "object" == typeof t ? t : null;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
  writeParameterValues(t, e) {
    if (t) {
      const r3 = {};
      for (const e2 in t) {
        const o2 = t[e2];
        Array.isArray(o2) ? r3[e2] = o2.map((t2) => t2 instanceof Date ? t2.getTime() : t2) : o2 instanceof Date ? r3[e2] = o2.getTime() : r3[e2] = o2;
      }
      e.parameterValues = r3;
    }
  }
  writeStart(t, e) {
    e.resultOffset = this.start, e.resultRecordCount = this.num || 10, e.where = "1=1";
  }
  writeWhere(t, e) {
    e.where = t || "1=1";
  }
  clone() {
    return new S2(a({ aggregateIds: this.aggregateIds, cacheHint: this.cacheHint, compactGeometryEnabled: this.compactGeometryEnabled, datumTransformation: this.datumTransformation, defaultSpatialReferenceEnabled: this.defaultSpatialReferenceEnabled, distance: this.distance, fullText: this.fullText, formatOf3DObjects: this.formatOf3DObjects, gdbVersion: this.gdbVersion, geometry: this.geometry, geometryPrecision: this.geometryPrecision, groupByFieldsForStatistics: this.groupByFieldsForStatistics, having: this.having, historicMoment: null != this.historicMoment ? new Date(this.historicMoment) : null, maxAllowableOffset: this.maxAllowableOffset, maxRecordCountFactor: this.maxRecordCountFactor, multipatchOption: this.multipatchOption, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, outFields: this.outFields, outSpatialReference: this.outSpatialReference, outStatistics: this.outStatistics, parameterValues: this.parameterValues, pixelSize: this.pixelSize, quantizationParameters: this.quantizationParameters, rangeValues: this.rangeValues, relationParameter: this.relationParameter, resultType: this.resultType, returnDistinctValues: this.returnDistinctValues, returnGeometry: this.returnGeometry, returnCentroid: this.returnCentroid, returnExceededLimitFeatures: this.returnExceededLimitFeatures, returnQueryGeometry: this.returnQueryGeometry, returnM: this.returnM, returnZ: this.returnZ, returnTrueCurves: this.returnTrueCurves, dynamicDataSource: this.dynamicDataSource, sourceSpatialReference: this.sourceSpatialReference, spatialRelationship: this.spatialRelationship, start: this.start, sqlFormat: this.sqlFormat, text: this.text, timeExtent: this.timeExtent, timeReferenceUnknownClient: this.timeReferenceUnknownClient, units: this.units, where: this.where }));
  }
  static {
    this.MAX_MAX_RECORD_COUNT_FACTOR = 5;
  }
};
__decorate([a2({ json: { write: true } })], R.prototype, "aggregateIds", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], R.prototype, "cacheHint", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "compactGeometryEnabled", void 0), __decorate([a2({ json: { write: true } })], R.prototype, "datumTransformation", void 0), __decorate([m2("datumTransformation")], R.prototype, "castDatumTransformation", null), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "defaultSpatialReferenceEnabled", void 0), __decorate([a2({ type: Number, json: { write: true } })], R.prototype, "distance", void 0), __decorate([a2({ type: n2, json: { write: true } })], R.prototype, "dynamicDataSource", void 0), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "formatOf3DObjects", void 0), __decorate([a2({ type: [p2], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.fullText && this.fullText.length > 0 };
} } } })], R.prototype, "fullText", void 0), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "gdbVersion", void 0), __decorate([a2({ types: s, json: { read: u, write: true } })], R.prototype, "geometry", void 0), __decorate([a2({ type: Number, json: { write: true } })], R.prototype, "geometryPrecision", void 0), __decorate([a2({ type: [String], json: { write: true } })], R.prototype, "groupByFieldsForStatistics", void 0), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "having", void 0), __decorate([a2({ type: Date })], R.prototype, "historicMoment", void 0), __decorate([r2("historicMoment")], R.prototype, "writeHistoricMoment", null), __decorate([a2({ type: Number, json: { write: true } })], R.prototype, "maxAllowableOffset", void 0), __decorate([a2({ type: Number, cast: (t) => t < 1 ? 1 : t > R.MAX_MAX_RECORD_COUNT_FACTOR ? R.MAX_MAX_RECORD_COUNT_FACTOR : t, json: { write: { overridePolicy: (t) => ({ enabled: t > 1 }) } } })], R.prototype, "maxRecordCountFactor", void 0), __decorate([a2({ type: ["xyFootprint"], json: { write: true } })], R.prototype, "multipatchOption", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultRecordCount" } } })], R.prototype, "num", void 0), __decorate([a2({ json: { write: true } })], R.prototype, "objectIds", void 0), __decorate([a2({ type: [String], json: { write: true } })], R.prototype, "orderByFields", void 0), __decorate([a2({ type: [String], json: { write: true } })], R.prototype, "outFields", void 0), __decorate([a2({ type: S, json: { name: "outSR", write: true } })], R.prototype, "outSpatialReference", void 0), __decorate([a2({ type: [p], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.outStatistics && this.outStatistics.length > 0 };
} } } })], R.prototype, "outStatistics", void 0), __decorate([a2({ json: { write: true } })], R.prototype, "parameterValues", void 0), __decorate([r2("parameterValues")], R.prototype, "writeParameterValues", null), __decorate([a2({ type: _, json: { write: true } })], R.prototype, "pixelSize", void 0), __decorate([a2({ type: m3, json: { write: true } })], R.prototype, "quantizationParameters", void 0), __decorate([a2({ type: [Object], json: { write: true } })], R.prototype, "rangeValues", void 0), __decorate([a2({ type: String, json: { read: { source: "relationParam" }, write: { target: "relationParam", overridePolicy() {
  return { enabled: "relation" === this.spatialRelationship };
} } } })], R.prototype, "relationParameter", void 0), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "resultType", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "returnCentroid", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "returnDistinctValues", void 0), __decorate([a2({ type: Boolean, json: { default: true, write: true } })], R.prototype, "returnExceededLimitFeatures", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], R.prototype, "returnGeometry", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "returnQueryGeometry", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "returnM", void 0), __decorate([a2({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], R.prototype, "returnZ", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], R.prototype, "returnTrueCurves", void 0), __decorate([a2({ type: S, json: { write: true } })], R.prototype, "sourceSpatialReference", void 0), __decorate([r(s2, { ignoreUnknown: false, name: "spatialRel" })], R.prototype, "spatialRelationship", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultOffset" } } })], R.prototype, "start", void 0), __decorate([r2("start"), r2("num")], R.prototype, "writeStart", null), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "sqlFormat", void 0), __decorate([a2({ type: String, json: { write: true } })], R.prototype, "text", void 0), __decorate([a2({ type: m4, json: { write: true } })], R.prototype, "timeExtent", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], R.prototype, "timeReferenceUnknownClient", void 0), __decorate([r(g, { ignoreUnknown: false }), a2({ json: { write: { overridePolicy(t) {
  return { enabled: !!t && null != this.distance };
} } } })], R.prototype, "units", void 0), __decorate([a2({ type: String, json: { write: { overridePolicy(t) {
  return { enabled: null != t || null != this.start && this.start > 0 };
} } } })], R.prototype, "where", void 0), __decorate([r2("where")], R.prototype, "writeWhere", null), R = S2 = __decorate([c("esri.rest.support.Query")], R);

export {
  R
};
//# sourceMappingURL=chunk-5XBFAIUN.js.map
