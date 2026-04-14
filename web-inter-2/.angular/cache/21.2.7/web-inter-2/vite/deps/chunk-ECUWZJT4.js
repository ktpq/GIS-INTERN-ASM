import {
  a as a2,
  m as m2,
  m2 as m3,
  m3 as m4,
  m4 as m5
} from "./chunk-FL6TAO52.js";
import {
  g as g2
} from "./chunk-VVQG655H.js";
import {
  p,
  s as s2
} from "./chunk-DMPSJLSK.js";
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
  g
} from "./chunk-473S3KQM.js";
import {
  l
} from "./chunk-F6AS75CS.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  n as n2
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  r3 as r,
  w
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/AttributeBinsQuery.js
var b = new o({ asc: "ascending", desc: "descending" });
var B = { base: a2, key: "type", typeMap: { "auto-interval": m2, date: m3, "fixed-boundaries": m4, "fixed-interval": m5 } };
var R = class extends l(n2) {
  constructor(e) {
    super(e), this.binParameters = null, this.binOrder = "ascending", this.cacheHint = void 0, this.datumTransformation = null, this.defaultSpatialReference = null, this.distance = void 0, this.geometry = null, this.lowerBoundaryAlias = null, this.outSpatialReference = null, this.outStatistics = null, this.returnDistinctValues = null, this.spatialRelationship = "intersects", this.timeExtent = null, this.upperBoundaryAlias = null, this.units = null, this.where = "1=1";
  }
  set outTimeZone(e) {
    this._set("outTimeZone", e), e && !g(e) && n.getLogger(this).warn("#outTimeZone", `the parsed value '${e}' may not be a valid IANA time zone`);
  }
};
__decorate([a({ types: B, json: { name: "bin", write: true } })], R.prototype, "binParameters", void 0), __decorate([r(b)], R.prototype, "binOrder", void 0), __decorate([a({ type: Boolean, json: { write: true } })], R.prototype, "cacheHint", void 0), __decorate([a({ json: { write: true } })], R.prototype, "datumTransformation", void 0), __decorate([a({ type: S, json: { name: "defaultSR", write: true } })], R.prototype, "defaultSpatialReference", void 0), __decorate([a({ type: Number, json: { write: { overridePolicy: (e) => ({ enabled: e > 0 }) } } })], R.prototype, "distance", void 0), __decorate([a({ types: s, json: { read: u, write: true } })], R.prototype, "geometry", void 0), __decorate([a({ type: String, json: { write: true } })], R.prototype, "lowerBoundaryAlias", void 0), __decorate([a({ type: S, json: { name: "outSR", write: true } })], R.prototype, "outSpatialReference", void 0), __decorate([a({ type: [p], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.outStatistics && this.outStatistics.length > 0 };
} } } })], R.prototype, "outStatistics", void 0), __decorate([a({ value: null, json: { name: "outTimeReference", read: { reader: (e) => e.ianaTimeZone }, write: { writer: (e, t, o2) => {
  e && (t[o2] = { ianaTimeZone: e });
} } } })], R.prototype, "outTimeZone", null), __decorate([a({ type: Boolean, json: { write: true } })], R.prototype, "returnDistinctValues", void 0), __decorate([r(s2, { name: "spatialRel" })], R.prototype, "spatialRelationship", void 0), __decorate([a({ type: m, json: { write: true } })], R.prototype, "timeExtent", void 0), __decorate([a({ type: String, json: { write: true } })], R.prototype, "upperBoundaryAlias", void 0), __decorate([a({ type: String, json: { read: g2.read, write: { writer: g2.write, overridePolicy(e) {
  return { enabled: null != e && null != this.distance };
} } } })], R.prototype, "units", void 0), __decorate([a({ type: String, json: { write: true } })], R.prototype, "where", void 0), R = __decorate([c("esri.rest.support.AttributeBinsQuery")], R), R.from = w(R);

export {
  R
};
//# sourceMappingURL=chunk-ECUWZJT4.js.map
