import {
  m
} from "./chunk-VITXUMTH.js";
import {
  s
} from "./chunk-U4R7X4DP.js";
import {
  u
} from "./chunk-UIKAL3FG.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a2,
  c,
  r4 as r,
  w
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/TopFilter.js
var s2;
var i = s2 = class extends n {
  constructor(o2) {
    super(o2), this.groupByFields = void 0, this.topCount = void 0, this.orderByFields = void 0;
  }
  clone() {
    return new s2({ groupByFields: this.groupByFields, topCount: this.topCount, orderByFields: this.orderByFields });
  }
};
__decorate([a2({ type: [String], json: { write: true } })], i.prototype, "groupByFields", void 0), __decorate([a2({ type: Number, json: { write: true } })], i.prototype, "topCount", void 0), __decorate([a2({ type: [String], json: { write: true } })], i.prototype, "orderByFields", void 0), i = s2 = __decorate([c("esri.rest.support.TopFilter")], i);
var p = i;

// node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
var y;
var m2 = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });
var h = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var j = class extends n {
  static {
    y = this;
  }
  constructor(t) {
    super(t), this.cacheHint = void 0, this.distance = void 0, this.geometry = null, this.geometryPrecision = void 0, this.maxAllowableOffset = void 0, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.resultType = null, this.returnGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.start = void 0, this.spatialRelationship = "intersects", this.timeExtent = null, this.topFilter = void 0, this.units = null, this.where = "1=1";
  }
  writeStart(t, e) {
    e.resultOffset = this.start, e.resultRecordCount = this.num || 10;
  }
  clone() {
    return new y(a({ cacheHint: this.cacheHint, distance: this.distance, geometry: this.geometry, geometryPrecision: this.geometryPrecision, maxAllowableOffset: this.maxAllowableOffset, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, outFields: this.outFields, outSpatialReference: this.outSpatialReference, resultType: this.resultType, returnGeometry: this.returnGeometry, returnZ: this.returnZ, returnM: this.returnM, start: this.start, spatialRelationship: this.spatialRelationship, timeExtent: this.timeExtent, topFilter: this.topFilter, units: this.units, where: this.where }));
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], j.prototype, "cacheHint", void 0), __decorate([a2({ type: Number, json: { write: { overridePolicy: (t) => ({ enabled: t > 0 }) } } })], j.prototype, "distance", void 0), __decorate([a2({ types: s, json: { read: u, write: true } })], j.prototype, "geometry", void 0), __decorate([a2({ type: Number, json: { write: true } })], j.prototype, "geometryPrecision", void 0), __decorate([a2({ type: Number, json: { write: true } })], j.prototype, "maxAllowableOffset", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultRecordCount" } } })], j.prototype, "num", void 0), __decorate([a2({ json: { write: true } })], j.prototype, "objectIds", void 0), __decorate([a2({ type: [String], json: { write: true } })], j.prototype, "orderByFields", void 0), __decorate([a2({ type: [String], json: { write: true } })], j.prototype, "outFields", void 0), __decorate([a2({ type: S, json: { read: { source: "outSR" }, write: { target: "outSR" } } })], j.prototype, "outSpatialReference", void 0), __decorate([a2({ type: String, json: { write: true } })], j.prototype, "resultType", void 0), __decorate([a2({ json: { write: true } })], j.prototype, "returnGeometry", void 0), __decorate([a2({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], j.prototype, "returnM", void 0), __decorate([a2({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], j.prototype, "returnZ", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultOffset" } } })], j.prototype, "start", void 0), __decorate([r("start"), r("num")], j.prototype, "writeStart", null), __decorate([a2({ type: String, json: { read: { source: "spatialRel", reader: m2.read }, write: { target: "spatialRel", writer: m2.write } } })], j.prototype, "spatialRelationship", void 0), __decorate([a2({ type: m, json: { write: true } })], j.prototype, "timeExtent", void 0), __decorate([a2({ type: p, json: { write: true } })], j.prototype, "topFilter", void 0), __decorate([a2({ type: String, json: { read: h.read, write: { writer: h.write, overridePolicy(t) {
  return { enabled: null != t && null != this.distance };
} } } })], j.prototype, "units", void 0), __decorate([a2({ type: String, json: { write: true } })], j.prototype, "where", void 0), j = y = __decorate([c("esri.rest.support.TopFeaturesQuery")], j), j.from = w(j);

export {
  j
};
//# sourceMappingURL=chunk-UZM5PJ3B.js.map
