import {
  t
} from "./chunk-JKKDTCKU.js";
import {
  b
} from "./chunk-6M47K7WW.js";
import {
  D,
  M,
  R,
  U,
  a as a2,
  f,
  l as l3,
  m as m3,
  o as o2,
  r as r3,
  t as t2,
  w
} from "./chunk-TPY5PFTU.js";
import {
  g
} from "./chunk-KNE7SVYH.js";
import {
  s
} from "./chunk-7PBHIAQH.js";
import {
  u
} from "./chunk-K5YEU7YE.js";
import {
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c,
  l2 as l,
  m,
  m2,
  o4 as o,
  r3 as r,
  r4 as r2
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/DataLayer.js
var m4 = class extends l2(n) {
  constructor(t3) {
    super(t3), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], m4.prototype, "doNotLocateOnRestrictedElements", void 0), __decorate([a({ types: s, json: { read: u, write: true } })], m4.prototype, "geometry", void 0), __decorate([r(R)], m4.prototype, "geometryType", void 0), __decorate([a({ type: String, json: { name: "layerName", write: true } })], m4.prototype, "name", void 0), __decorate([r(M, { name: "spatialRel" })], m4.prototype, "spatialRelationship", void 0), __decorate([a({ type: String, json: { write: true } })], m4.prototype, "type", void 0), __decorate([a({ type: String, json: { write: true } })], m4.prototype, "where", void 0), m4 = __decorate([c("esri.rest.support.DataLayer")], m4);

// node_modules/@arcgis/core/rest/support/LocateSettingSource.js
var p = class extends l2(n) {
  constructor(o3) {
    super(o3), this.name = null, this.where = null;
  }
};
__decorate([m2({ json: { write: true } })], p.prototype, "name", void 0), __decorate([m2({ json: { write: true } })], p.prototype, "where", void 0), p = __decorate([l("esri.rest.support.LocateSettingSource")], p);
var c2 = p;

// node_modules/@arcgis/core/rest/support/LocateSettingBase.js
var c3 = class extends l2(n) {
  constructor(o3) {
    super(o3), this.allowAutoRelocate = null, this.sources = null;
  }
};
__decorate([m2({ type: Boolean, json: { write: true } })], c3.prototype, "allowAutoRelocate", void 0), __decorate([m2({ type: [c2], json: { write: true } })], c3.prototype, "sources", void 0), c3 = __decorate([l("esri.rest.support.LocateSettingBase")], c3);
var l4 = c3;

// node_modules/@arcgis/core/rest/support/LocateSetting.js
var p2 = class extends l4 {
  constructor(o3) {
    super(o3), this.tolerance = null, this.toleranceUnits = null;
  }
};
__decorate([m2({ type: Number, json: { write: true } })], p2.prototype, "tolerance", void 0), __decorate([r(t2)], p2.prototype, "toleranceUnits", void 0), p2 = __decorate([l("esri.rest.support.LocateSetting")], p2);
var a3 = p2;

// node_modules/@arcgis/core/rest/support/LocateSettingsOverrides.js
var n2 = class extends l2(n) {
  constructor(r4) {
    super(r4), this.stops = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null;
  }
};
__decorate([m2({ type: a3, json: { write: true } })], n2.prototype, "stops", void 0), __decorate([m2({ type: a3, json: { name: "barriers", write: true } })], n2.prototype, "pointBarriers", void 0), __decorate([m2({ type: l4, json: { write: true } })], n2.prototype, "polylineBarriers", void 0), __decorate([m2({ type: l4, json: { write: true } })], n2.prototype, "polygonBarriers", void 0), n2 = __decorate([l("esri.rest.support.LocateSettingsOverrides")], n2);
var a4 = n2;

// node_modules/@arcgis/core/rest/support/LocateSettings.js
var c4 = class extends l2(n) {
  constructor(o3) {
    super(o3), this.default = null, this.overrides = null;
  }
};
__decorate([m2({ type: a3, json: { write: true } })], c4.prototype, "default", void 0), __decorate([m2({ type: a4, json: { write: true } })], c4.prototype, "overrides", void 0), c4 = __decorate([l("esri.rest.support.LocateSettings")], c4);
var a5 = c4;

// node_modules/@arcgis/core/rest/support/NetworkFeatureSet.js
var s2;
var c5 = class extends g {
  static {
    s2 = this;
  }
  constructor(t3) {
    super(t3), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new s2(__spreadValues({ doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements }, this.cloneProperties()));
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], c5.prototype, "doNotLocateOnRestrictedElements", void 0), c5 = s2 = __decorate([c("esri.rest.support.NetworkFeatureSet")], c5);

// node_modules/@arcgis/core/rest/support/NetworkUrl.js
var p3 = class extends l2(n) {
  constructor(o3) {
    super(o3), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], p3.prototype, "doNotLocateOnRestrictedElements", void 0), __decorate([a({ type: String, json: { write: true } })], p3.prototype, "url", void 0), p3 = __decorate([c("esri.rest.support.NetworkUrl")], p3);

// node_modules/@arcgis/core/rest/support/RouteParameters.js
var P;
var O = class extends l2(n) {
  static {
    P = this;
  }
  constructor(t3) {
    super(t3), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.checksum = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.locateSettings = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = false, this.returnDirections = false, this.returnEmptyResults = null, this.returnPolygonBarriers = false, this.returnPolylineBarriers = false, this.returnRoutes = true, this.returnStops = false, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = true, this.startTime = null, this.startTimeIsUTC = true, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(t3) {
    return m(P, t3);
  }
  readAccumulateAttributes(t3) {
    return null == t3 ? null : t3.map((t4) => D.fromJSON(t4));
  }
  writeAccumulateAttributes(t3, e, r4) {
    t3?.length && (e[r4] = t3.map((t4) => D.toJSON(t4)));
  }
  writePointBarriers(t3, e, r4) {
    C(t3, e, r4);
  }
  writePolygonBarrier(t3, e, r4) {
    C(t3, e, r4);
  }
  writePolylineBarrier(t3, e, r4) {
    C(t3, e, r4);
  }
  readRestrictionAttributes(t3) {
    return null == t3 ? null : t3.map((t4) => w.fromJSON(t4));
  }
  writeRestrictionAttributes(t3, e, r4) {
    t3?.length && (e[r4] = t3.map((t4) => w.toJSON(t4)));
  }
  readStartTime(t3, e) {
    const { startTime: r4 } = e;
    return null == r4 ? null : "now" === r4 ? "now" : new Date(r4);
  }
  writeStartTime(t3, e) {
    null != t3 && (e.startTime = "now" === t3 ? "now" : t3.getTime());
  }
  readStops(t3, e) {
    return k(e.stops);
  }
  writeStops(t3, e, r4) {
    C(t3, e, r4);
  }
};
function R2(t3) {
  return t3 && "type" in t3;
}
function J(t3) {
  return t3 && "features" in t3 && "doNotLocateOnRestrictedElements" in t3;
}
function L(t3) {
  return t3 && "url" in t3;
}
function U2(t3) {
  return t3 && "features" in t3;
}
function k(t3) {
  return R2(t3) ? m4.fromJSON(t3) : L(t3) ? p3.fromJSON(t3) : J(t3) ? c5.fromJSON(t3) : U2(t3) ? g.fromJSON(t3) : null;
}
function C(t3, e, o3) {
  null != t3 && (e[o3] = q.isCollection(t3) ? { features: t3.toArray().map((t4) => t4.toJSON()) } : t3.toJSON());
}
__decorate([a({ type: [String], json: { name: "accumulateAttributeNames", write: true } })], O.prototype, "accumulateAttributes", void 0), __decorate([o("accumulateAttributes")], O.prototype, "readAccumulateAttributes", null), __decorate([r2("accumulateAttributes")], O.prototype, "writeAccumulateAttributes", null), __decorate([a(t)], O.prototype, "apiKey", void 0), __decorate([a({ json: { write: true } })], O.prototype, "attributeParameterValues", void 0), __decorate([a({ type: String, json: { write: true } })], O.prototype, "checksum", void 0), __decorate([a({ type: String, json: { write: true } })], O.prototype, "directionsLanguage", void 0), __decorate([r(a2)], O.prototype, "directionsLengthUnits", void 0), __decorate([r(o2)], O.prototype, "directionsOutputType", void 0), __decorate([r(f)], O.prototype, "directionsStyleName", void 0), __decorate([r(U, { name: "directionsTimeAttributeName", ignoreUnknown: false })], O.prototype, "directionsTimeAttribute", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "findBestSequence", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecision", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecisionM", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "geometryPrecisionZ", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "ignoreInvalidLocations", void 0), __decorate([r(D, { name: "impedanceAttributeName", ignoreUnknown: false })], O.prototype, "impedanceAttribute", void 0), __decorate([a({ type: a5, json: { write: true } })], O.prototype, "locateSettings", void 0), __decorate([a({ type: Number, json: { write: true } })], O.prototype, "outputGeometryPrecision", void 0), __decorate([r(r3)], O.prototype, "outputGeometryPrecisionUnits", void 0), __decorate([r(l3)], O.prototype, "outputLines", void 0), __decorate([a({ type: S, json: { name: "outSR", write: true } })], O.prototype, "outSpatialReference", void 0), __decorate([a({ json: { write: true } })], O.prototype, "overrides", void 0), __decorate([a({ json: { name: "barriers", write: true } })], O.prototype, "pointBarriers", void 0), __decorate([r2("pointBarriers")], O.prototype, "writePointBarriers", null), __decorate([a({ json: { write: true } })], O.prototype, "polygonBarriers", void 0), __decorate([r2("polygonBarriers")], O.prototype, "writePolygonBarrier", null), __decorate([a({ json: { write: true } })], O.prototype, "polylineBarriers", void 0), __decorate([r2("polylineBarriers")], O.prototype, "writePolylineBarrier", null), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "preserveFirstStop", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "preserveLastStop", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "preserveObjectID", void 0), __decorate([a({ type: [String], json: { name: "restrictionAttributeNames", write: true } })], O.prototype, "restrictionAttributes", void 0), __decorate([o("restrictionAttributes")], O.prototype, "readRestrictionAttributes", null), __decorate([r2("restrictionAttributes")], O.prototype, "writeRestrictionAttributes", null), __decorate([r(m3)], O.prototype, "restrictUTurns", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnBarriers", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnDirections", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnEmptyResults", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnPolygonBarriers", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnPolylineBarriers", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnRoutes", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnStops", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedEdges", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedJunctions", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnTraversedTurns", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "returnZ", void 0), __decorate([a({ json: { write: true } })], O.prototype, "startTime", void 0), __decorate([o("startTime")], O.prototype, "readStartTime", null), __decorate([r2("startTime")], O.prototype, "writeStartTime", null), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "startTimeIsUTC", void 0), __decorate([a({ json: { write: true } })], O.prototype, "stops", void 0), __decorate([o("stops")], O.prototype, "readStops", null), __decorate([r2("stops")], O.prototype, "writeStops", null), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "timeWindowsAreUTC", void 0), __decorate([a({ type: b, json: { write: true } })], O.prototype, "travelMode", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "useHierarchy", void 0), __decorate([a({ type: Boolean, json: { write: true } })], O.prototype, "useTimeWindows", void 0), O = P = __decorate([c("esri.rest.support.RouteParameters")], O);

export {
  O
};
//# sourceMappingURL=chunk-3F7NZKCU.js.map
