import {
  o as o3
} from "./chunk-LUD2K6Y4.js";
import {
  a as a3
} from "./chunk-CQHC3BLE.js";
import {
  b as b2
} from "./chunk-EC7TDGXO.js";
import {
  D,
  U,
  a as a2,
  b,
  n as n3,
  q
} from "./chunk-XWBLBUQP.js";
import {
  f as f2,
  s
} from "./chunk-KGOQYI3F.js";
import {
  g
} from "./chunk-CLQKOCYA.js";
import {
  j
} from "./chunk-TE5PBIJT.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  _
} from "./chunk-X2SNEXCL.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  f2 as f,
  jt
} from "./chunk-ZRWCUWWK.js";
import {
  n as n2
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  o4 as o2,
  r3 as r2,
  r4 as r3
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  n2 as n,
  r3 as r,
  t
} from "./chunk-TX75HZKJ.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/NetworkAttribute.js
var u = class extends n2 {
  constructor(t2) {
    super(t2), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
__decorate([a({ type: String })], u.prototype, "dataType", void 0), __decorate([r2(D, { ignoreUnknown: false })], u.prototype, "name", void 0), __decorate([a({ type: [String] })], u.prototype, "parameterNames", void 0), __decorate([a({ type: String })], u.prototype, "restrictionUsageParameterName", void 0), __decorate([r2(U, { ignoreUnknown: false })], u.prototype, "timeNeutralAttributeName", void 0), __decorate([a({ type: String })], u.prototype, "trafficSupport", void 0), __decorate([r2(n3)], u.prototype, "units", void 0), __decorate([r2(b)], u.prototype, "usageType", void 0), u = __decorate([c("esri.rest.support.NetworkAttribute")], u);
var m = u;

// node_modules/@arcgis/core/rest/support/NetworkDataset.js
var p = class extends n2 {
  constructor(t2) {
    super(t2), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
__decorate([a({ type: Number })], p.prototype, "buildTime", void 0), __decorate([a({ type: String })], p.prototype, "name", void 0), __decorate([a({ type: [m] })], p.prototype, "networkAttributes", void 0), __decorate([a()], p.prototype, "networkSources", void 0), __decorate([a({ type: String })], p.prototype, "state", void 0), p = __decorate([c("esri.rest.support.NetworkDataset")], p);
var i = p;

// node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js
var c2 = class extends n2 {
  constructor(t2) {
    super(t2), this.accumulateAttributeNames = null, this.attributeParameterValues = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => D.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e, r4) {
    t2?.length && (e[r4] = t2.map((t3) => D.toJSON(t3)));
  }
  get capabilities() {
    return { supportsNow: (this.currentVersion ?? 10) >= 10.81 };
  }
  readDefaultTravelMode(t2, e) {
    const r4 = e.supportedTravelModes?.find(({ id: t3 }) => t3 === e.defaultTravelMode) ?? e.supportedTravelModes?.find(({ itemId: t3 }) => t3 === e.defaultTravelMode);
    return r4 ? b2.fromJSON(r4) : null;
  }
};
__decorate([a()], c2.prototype, "accumulateAttributeNames", void 0), __decorate([o2("accumulateAttributeNames")], c2.prototype, "readAccumulateAttributes", null), __decorate([r3("accumulateAttributeNames")], c2.prototype, "writeAccumulateAttributes", null), __decorate([a()], c2.prototype, "attributeParameterValues", void 0), __decorate([a()], c2.prototype, "capabilities", null), __decorate([a()], c2.prototype, "currentVersion", void 0), __decorate([a()], c2.prototype, "defaultTravelMode", void 0), __decorate([o2("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])], c2.prototype, "readDefaultTravelMode", null), __decorate([a()], c2.prototype, "directionsLanguage", void 0), __decorate([r2(a2)], c2.prototype, "directionsLengthUnits", void 0), __decorate([a()], c2.prototype, "directionsSupportedLanguages", void 0), __decorate([r2(U, { ignoreUnknown: false })], c2.prototype, "directionsTimeAttribute", void 0), __decorate([a()], c2.prototype, "hasZ", void 0), __decorate([r2(D, { ignoreUnknown: false })], c2.prototype, "impedance", void 0), __decorate([a({ type: i })], c2.prototype, "networkDataset", void 0), __decorate([a({ type: [b2] })], c2.prototype, "supportedTravelModes", void 0), c2 = __decorate([c("esri.rest.support.NetworkServiceDescription")], c2);

// node_modules/@arcgis/core/rest/networkService.js
var l = () => n.getLogger("esri.rest.networkService");
function u2(e, r4, t2, o4) {
  o4[t2] = [r4.length, r4.length + e.length], e.forEach((e2) => {
    r4.push(e2.geometry);
  });
}
function f3(e, r4) {
  for (let t2 = 0; t2 < r4.length; t2++) {
    const o4 = e[r4[t2]];
    if (o4 && o4.length) for (const e2 of o4) e2.z = void 0;
  }
  l().warnOnce("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
}
function c3(e, r4) {
  for (let t2 = 0; t2 < r4.length; t2++) {
    const o4 = e[r4[t2]];
    if (o4 && o4.length) {
      for (const e2 of o4) if (null != e2 && e2.hasZ) return true;
    }
  }
  return false;
}
async function d(t2, o4, s2) {
  if (!t2) throw new r("network-service:missing-url", "Url to Network service is missing");
  const n5 = s({ f: "json", token: o4 }, s2), { data: l3 } = await f(t2, n5), u5 = l3.currentVersion >= 10.4 ? p2(t2, o4, s2) : v(t2, s2), { defaultTravelMode: f5, supportedTravelModes: c5 } = await u5;
  return l3.defaultTravelMode = f5, l3.supportedTravelModes = c5, c2.fromJSON(l3);
}
async function v(r4, t2) {
  const i4 = s({ f: "json" }, t2), { data: l3 } = await f(r4.replace(/\/rest\/.*$/i, "/info"), i4);
  if (!l3?.owningSystemUrl) return { supportedTravelModes: [], defaultTravelMode: null };
  const { owningSystemUrl: u5 } = l3, f5 = jt(u5) + "/sharing/rest/portals/self", { data: c5 } = await f(f5, i4), d2 = t("helperServices.routingUtilities.url", c5);
  if (!d2) return { supportedTravelModes: [], defaultTravelMode: null };
  const v2 = f2(u5), p4 = /\/solve$/i.test(v2.path) ? "Route" : /\/solveclosestfacility$/i.test(v2.path) ? "ClosestFacility" : "ServiceAreas", m3 = s({ f: "json", serviceName: p4 }, t2), h = jt(d2) + "/GetTravelModes/execute", g2 = await f(h, m3), w = [];
  let T = null;
  if (g2?.data?.results?.length) {
    const e = g2.data.results;
    for (const r5 of e) if ("supportedTravelModes" === r5.paramName) {
      if (r5.value?.features) {
        for (const { attributes: e2 } of r5.value.features) if (e2) {
          const r6 = JSON.parse(e2.TravelMode);
          w.push(r6);
        }
      }
    } else "defaultTravelMode" === r5.paramName && (T = r5.value);
  }
  return { supportedTravelModes: w, defaultTravelMode: T };
}
async function p2(t2, o4, n5) {
  try {
    const r4 = s({ f: "json", token: o4 }, n5), i4 = jt(t2) + "/retrieveTravelModes", { data: { supportedTravelModes: l3, defaultTravelMode: u5 } } = await f(i4, r4);
    return { supportedTravelModes: l3, defaultTravelMode: u5 };
  } catch (i4) {
    throw new r("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: i4 });
  }
}

// node_modules/@arcgis/core/rest/support/NAMessage.js
var p3 = new o({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
var i2 = class extends a3 {
  constructor(r4) {
    super(r4), this.type = null;
  }
};
__decorate([a({ type: String, json: { read: p3.read, write: p3.write } })], i2.prototype, "type", void 0), i2 = __decorate([c("esri.rest.support.NAMessage")], i2);
var a4 = i2;

// node_modules/@arcgis/core/rest/support/DirectionsString.js
var c4 = class extends n2 {
  constructor(r4) {
    super(r4);
  }
};
__decorate([a({ json: { read: { source: "string" } } })], c4.prototype, "text", void 0), __decorate([r2(q, { name: "stringType" })], c4.prototype, "type", void 0), c4 = __decorate([c("esri.rest.support.DirectionsString")], c4);
var i3 = c4;

// node_modules/@arcgis/core/rest/support/DirectionsEvent.js
var a5 = class extends n2 {
  constructor(r4) {
    super(r4), this.arriveTime = null, this.arriveTimeOffset = null, this.geometry = null, this.strings = null;
  }
  readArriveTimeOffset(r4, e) {
    return o3(e.ETA, e.arriveTimeUTC);
  }
  readGeometry(r4, e) {
    return _.fromJSON(e.point);
  }
};
__decorate([a({ type: Date, json: { read: { source: "arriveTimeUTC" } } })], a5.prototype, "arriveTime", void 0), __decorate([a()], a5.prototype, "arriveTimeOffset", void 0), __decorate([o2("arriveTimeOffset", ["arriveTimeUTC", "ETA"])], a5.prototype, "readArriveTimeOffset", null), __decorate([a({ type: _ })], a5.prototype, "geometry", void 0), __decorate([o2("geometry", ["point"])], a5.prototype, "readGeometry", null), __decorate([a({ type: [i3] })], a5.prototype, "strings", void 0), a5 = __decorate([c("esri.rest.support.DirectionsEvent")], a5);
var n4 = a5;

// node_modules/@arcgis/core/rest/support/DirectionsFeature.js
function a6(e) {
  if (null == e || "" === e) return null;
  let t2 = 0, r4 = 0, s2 = 0, o4 = 0;
  const p4 = [];
  let n5, i4, a7, l3, u5, m3, c5, y2, f5 = 0, d2 = 0, h = 0;
  if (u5 = e.match(/((\+|-)[^+\-|]+|\|)/g), u5 || (u5 = []), 0 === parseInt(u5[f5], 32)) {
    f5 = 2;
    const e2 = parseInt(u5[f5], 32);
    f5++, m3 = parseInt(u5[f5], 32), f5++, 1 & e2 && (d2 = u5.indexOf("|") + 1, c5 = parseInt(u5[d2], 32), d2++), 2 & e2 && (h = u5.indexOf("|", d2) + 1, y2 = parseInt(u5[h], 32), h++);
  } else m3 = parseInt(u5[f5], 32), f5++;
  for (; f5 < u5.length && "|" !== u5[f5]; ) {
    n5 = parseInt(u5[f5], 32) + t2, f5++, t2 = n5, i4 = parseInt(u5[f5], 32) + r4, f5++, r4 = i4;
    const e2 = [n5 / m3, i4 / m3];
    d2 && (l3 = parseInt(u5[d2], 32) + s2, d2++, s2 = l3, e2.push(l3 / c5)), h && (a7 = parseInt(u5[h], 32) + o4, h++, o4 = a7, e2.push(a7 / y2)), p4.push(e2);
  }
  return { paths: [p4], hasZ: d2 > 0, hasM: h > 0 };
}
var l2 = class extends j {
  constructor(e) {
    super(e), this.events = null, this.geometry = null, this.strings = null;
  }
  set attributes(e) {
    super.attributes = e;
  }
  readGeometry(e, t2) {
    const r4 = a6(t2.compressedGeometry);
    return null != r4 ? y.fromJSON(r4) : null;
  }
};
__decorate([a({ type: [n4] })], l2.prototype, "events", void 0), __decorate([a({ types: { base: null, key: "type", typeMap: { polygon: y }, defaultKeyValue: "polygon" } })], l2.prototype, "geometry", void 0), __decorate([o2("geometry", ["compressedGeometry"])], l2.prototype, "readGeometry", null), __decorate([a({ type: [i3] })], l2.prototype, "strings", void 0), l2 = __decorate([c("esri.rest.support.DirectionsFeature")], l2);
var u3 = l2;

// node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js
function u4(e, t2) {
  if (0 === e.length) return new y({ spatialReference: t2 });
  const r4 = [];
  for (const a7 of e) for (const e2 of a7.paths) r4.push(...e2);
  const o4 = [];
  r4.forEach((e2, t3) => {
    0 !== t3 && e2[0] === r4[t3 - 1][0] && e2[1] === r4[t3 - 1][1] || o4.push(e2);
  });
  const { hasM: s2, hasZ: n5 } = e[0];
  return new y({ hasM: s2, hasZ: n5, paths: [o4], spatialReference: t2 });
}
var m2 = class extends g {
  constructor(e) {
    super(e), this.extent = null, this.features = [], this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(e, t2) {
    if (!e) return [];
    const r4 = t2.summary.envelope.spatialReference ?? t2.spatialReference, o4 = r4 && S.fromJSON(r4);
    return e.map((e2) => {
      const t3 = u3.fromJSON(e2);
      if (null != t3.geometry && (t3.geometry.spatialReference = o4), null != t3.events) for (const r5 of t3.events) null != r5.geometry && (r5.geometry.spatialReference = o4);
      return t3;
    });
  }
  get mergedGeometry() {
    if (!this.features) return null;
    return u4(this.features.map(({ geometry: e }) => e), this.extent.spatialReference);
  }
  get strings() {
    return this.features.flatMap(({ strings: e }) => e).filter(N);
  }
};
__decorate([a({ type: z, json: { read: { source: "summary.envelope" } } })], m2.prototype, "extent", void 0), __decorate([a({ nonNullable: true })], m2.prototype, "features", void 0), __decorate([o2("features")], m2.prototype, "readFeatures", null), __decorate([a()], m2.prototype, "geometryType", void 0), __decorate([a({ readOnly: true })], m2.prototype, "mergedGeometry", null), __decorate([a()], m2.prototype, "routeId", void 0), __decorate([a()], m2.prototype, "routeName", void 0), __decorate([a({ value: null, readOnly: true })], m2.prototype, "strings", null), __decorate([a({ json: { read: { source: "summary.totalDriveTime" } } })], m2.prototype, "totalDriveTime", void 0), __decorate([a({ json: { read: { source: "summary.totalLength" } } })], m2.prototype, "totalLength", void 0), __decorate([a({ json: { read: { source: "summary.totalTime" } } })], m2.prototype, "totalTime", void 0), m2 = __decorate([c("esri.rest.support.DirectionsFeatureSet")], m2);
var f4 = m2;

export {
  u2 as u,
  f3 as f,
  c3 as c,
  d,
  a4 as a,
  f4 as f2
};
//# sourceMappingURL=chunk-5TWKZSLF.js.map
