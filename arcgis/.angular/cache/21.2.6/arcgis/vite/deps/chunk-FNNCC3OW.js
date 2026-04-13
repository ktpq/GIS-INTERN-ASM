import {
  R
} from "./chunk-5XBFAIUN.js";
import {
  s
} from "./chunk-AEEIJGHJ.js";
import {
  m
} from "./chunk-4QSSUPBC.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a2,
  c
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
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/FeatureFilter.js
var p;
var c2 = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });
var u = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var m2 = p = class extends n {
  constructor(e) {
    super(e), this.where = null, this.geometry = null, this.spatialRelationship = "intersects", this.distance = void 0, this.objectIds = null, this.units = null, this.timeExtent = null;
  }
  createQuery(e = {}) {
    const { where: t, geometry: i, spatialRelationship: s2, timeExtent: o2, objectIds: n2, units: a3, distance: p2 } = this;
    return new R(__spreadValues({ geometry: a(i), objectIds: a(n2), spatialRelationship: s2, timeExtent: a(o2), where: t, units: a3, distance: p2 }, e));
  }
  clone() {
    const { where: e, geometry: t, spatialRelationship: i, timeExtent: s2, objectIds: o2, units: n2, distance: l } = this;
    return new p({ geometry: a(t), objectIds: a(o2), spatialRelationship: i, timeExtent: a(s2), where: e, units: n2, distance: l });
  }
};
__decorate([a2({ type: String, json: { write: true } })], m2.prototype, "where", void 0), __decorate([a2({ types: s, json: { write: true } })], m2.prototype, "geometry", void 0), __decorate([a2({ type: c2.apiValues, json: { name: "spatialRel", read: { reader: c2.read }, write: { allowNull: false, writer: c2.write, overridePolicy() {
  return { enabled: null != this.geometry };
} } } })], m2.prototype, "spatialRelationship", void 0), __decorate([a2({ type: Number, json: { write: { overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "distance", void 0), __decorate([a2({ type: [Number], json: { write: true } })], m2.prototype, "objectIds", void 0), __decorate([a2({ type: u.apiValues, json: { read: u.read, write: { writer: u.write, overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "units", void 0), __decorate([a2({ type: m, json: { write: true } })], m2.prototype, "timeExtent", void 0), m2 = p = __decorate([c("esri.layers.support.FeatureFilter")], m2);
var d = m2;

export {
  d
};
//# sourceMappingURL=chunk-FNNCC3OW.js.map
