import {
  t
} from "./chunk-JKKDTCKU.js";
import {
  b
} from "./chunk-EC7TDGXO.js";
import {
  D,
  U,
  a as a2,
  d,
  f,
  l as l2,
  m as m2,
  o as o2,
  r as r3,
  u,
  w
} from "./chunk-XWBLBUQP.js";
import {
  q
} from "./chunk-OEXL7OFS.js";
import {
  l
} from "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  m,
  o4 as o,
  r3 as r,
  r4 as r2
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/ClosestFacilityParameters.js
var P;
function T(t2, e, o3) {
  null != t2 && (e[o3] = q.isCollection(t2) ? { features: t2.toArray().map((t3) => t3.toJSON()) } : t2.toJSON());
}
var O = class extends l(n) {
  static {
    P = this;
  }
  constructor(t2) {
    super(t2), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.defaultCutoff = null, this.defaultTargetFacilityCount = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.facilities = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.incidents = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = null, this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnDirections = false, this.returnFacilities = false, this.returnIncidents = false, this.returnPointBarriers = false, this.returnPolygonBarriers = false, this.returnPolylineBarriers = false, this.returnRoutes = true, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = null, this.timeOfDay = null, this.timeOfDayIsUTC = null, this.timeOfDayUsage = null, this.travelDirection = null, this.travelMode = null, this.useHierarchy = false;
  }
  static from(t2) {
    return m(P, t2);
  }
  readAccumulateAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => D.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e, r4) {
    t2?.length && (e[r4] = t2.map((t3) => D.toJSON(t3)));
  }
  writeFacilities(t2, e, r4) {
    T(t2, e, r4);
  }
  writeIncidents(t2, e, r4) {
    T(t2, e, r4);
  }
  writePointBarriers(t2, e, r4) {
    T(t2, e, r4);
  }
  writePolygonBarrier(t2, e, r4) {
    T(t2, e, r4);
  }
  writePolylineBarrier(t2, e, r4) {
    T(t2, e, r4);
  }
  readRestrictionAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => w.fromJSON(t3));
  }
  writeRestrictionAttributes(t2, e, r4) {
    t2?.length && (e[r4] = t2.map((t3) => w.toJSON(t3)));
  }
  readTimeOfDay(t2, e) {
    const { timeOfDay: r4 } = e;
    return null == r4 ? null : "now" === r4 ? "now" : new Date(r4);
  }
  writeTimeOfDay(t2, e) {
    null != t2 && (e.timeOfDay = "now" === t2 ? "now" : t2.getTime());
  }
};
__decorate([a({ type: [String], json: { name: "accumulateAttributeNames", write: true } })], O.prototype, "accumulateAttributes", void 0), __decorate([o("accumulateAttributes")], O.prototype, "readAccumulateAttributes", null), __decorate([r2("accumulateAttributes")], O.prototype, "writeAccumulateAttributes", null), __decorate([a(t)], O.prototype, "apiKey", void 0), __decorate([a({ json: { write: true } })], O.prototype, "attributeParameterValues", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "defaultCutoff", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "defaultTargetFacilityCount", void 0), __decorate([a({ type: String, json: { write: true } })], O.prototype, "directionsLanguage", void 0), __decorate([r(a2)], O.prototype, "directionsLengthUnits", void 0), __decorate([r(o2)], O.prototype, "directionsOutputType", void 0), __decorate([r(f)], O.prototype, "directionsStyleName", void 0), __decorate([r(U, { name: "directionsTimeAttributeName", ignoreUnknown: false })], O.prototype, "directionsTimeAttribute", void 0), __decorate([a({ json: { write: true } })], O.prototype, "facilities", void 0), __decorate([r2("facilities")], O.prototype, "writeFacilities", null), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecision", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecisionM", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecisionZ", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "ignoreInvalidLocations", void 0), __decorate([r(D, { name: "impedanceAttributeName", ignoreUnknown: false })], O.prototype, "impedanceAttribute", void 0), __decorate([a({ json: { write: true } })], O.prototype, "incidents", void 0), __decorate([r2("incidents")], O.prototype, "writeIncidents", null), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "outputGeometryPrecision", void 0), __decorate([r(r3)], O.prototype, "outputGeometryPrecisionUnits", void 0), __decorate([r(l2)], O.prototype, "outputLines", void 0), __decorate([a({ type: S, json: { name: "outSR", write: true } })], O.prototype, "outSpatialReference", void 0), __decorate([a({ json: { write: true } })], O.prototype, "overrides", void 0), __decorate([a({ json: { name: "barriers", write: true } })], O.prototype, "pointBarriers", void 0), __decorate([r2("pointBarriers")], O.prototype, "writePointBarriers", null), __decorate([a({ json: { write: true } })], O.prototype, "polygonBarriers", void 0), __decorate([r2("polygonBarriers")], O.prototype, "writePolygonBarrier", null), __decorate([a({ json: { write: true } })], O.prototype, "polylineBarriers", void 0), __decorate([r2("polylineBarriers")], O.prototype, "writePolylineBarrier", null), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "preserveObjectID", void 0), __decorate([a({ type: [String], json: { name: "restrictionAttributeNames", write: true } })], O.prototype, "restrictionAttributes", void 0), __decorate([o("restrictionAttributes")], O.prototype, "readRestrictionAttributes", null), __decorate([r2("restrictionAttributes")], O.prototype, "writeRestrictionAttributes", null), __decorate([r(m2)], O.prototype, "restrictUTurns", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnDirections", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnFacilities", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnIncidents", void 0), __decorate([a({ type: Boolean, json: { name: "returnBarriers", write: true } })], O.prototype, "returnPointBarriers", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnPolygonBarriers", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnPolylineBarriers", void 0), __decorate([a({ type: Boolean, json: { name: "returnCFRoutes", write: true } })], O.prototype, "returnRoutes", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedEdges", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedJunctions", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedTurns", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnZ", void 0), __decorate([a({ json: { write: true } })], O.prototype, "timeOfDay", void 0), __decorate([o("timeOfDay")], O.prototype, "readTimeOfDay", null), __decorate([r2("timeOfDay")], O.prototype, "writeTimeOfDay", null), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "timeOfDayIsUTC", void 0), __decorate([r(d)], O.prototype, "timeOfDayUsage", void 0), __decorate([r(u)], O.prototype, "travelDirection", void 0), __decorate([a({ type: b, json: { write: true } })], O.prototype, "travelMode", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "useHierarchy", void 0), O = P = __decorate([c("esri.rest.support.ClosestFacilityParameters")], O);
var S2 = O;
export {
  S2 as default
};
//# sourceMappingURL=@arcgis_core_rest_support_ClosestFacilityParameters.js.map
