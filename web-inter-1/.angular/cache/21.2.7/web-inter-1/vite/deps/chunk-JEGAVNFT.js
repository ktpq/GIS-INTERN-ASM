import {
  M,
  O,
  T
} from "./chunk-KCFCDC2K.js";
import {
  d
} from "./chunk-MKQNA7FS.js";
import {
  u
} from "./chunk-NUGK6T4N.js";
import {
  H,
  J,
  W,
  e
} from "./chunk-XKXL36MC.js";
import {
  _ as _2
} from "./chunk-2KAJZEPA.js";
import {
  i
} from "./chunk-ZBPHFQZH.js";
import {
  n as n2
} from "./chunk-473S3KQM.js";
import {
  y
} from "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  g
} from "./chunk-VHQJAPCR.js";
import {
  Bt,
  I,
  _,
  f2 as f
} from "./chunk-TPFIN626.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js
var F = () => n.getLogger("esri.layers.ogc.ogcFeatureUtils");
var I2 = "startindex";
var T2 = /* @__PURE__ */ new Set([I2, "offset"]);
var k = "http://www.opengis.net/def/crs/";
var x = `${k}OGC/1.3/CRS84`;
async function S2(n3, o, a = {}, s = 5) {
  const { links: l } = n3, c = L(l, "items", "application/geo+json") || L(l, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (null == c) throw new r("ogc-feature-layer:missing-items-page", "Missing items url");
  const { apiKey: u2, customParameters: d2, signal: p } = a, g2 = _(c.href, n3.landingPage.url), w = __spreadProps(__spreadValues({ limit: s }, d2), { token: u2 }), T3 = Bt(g2, w), k2 = { accept: "application/geo+json" }, { data: x2 } = await f(T3, { signal: p, headers: k2 }), S3 = U(T3, s, x2.links) ?? I2;
  M(x2);
  const v2 = x2.numberMatched, O3 = T(x2, { geometryType: o.geometryType }), P2 = o.fields || O3.fields || [], q2 = null != o.hasZ ? o.hasZ : O3.hasZ, C2 = O3.geometryType, N2 = o.objectIdField || O3.objectIdFieldName || "OBJECTID";
  let R2 = o.timeInfo;
  const W3 = P2.find(({ name: e2 }) => e2 === N2);
  if (W3) W3.editable = false, W3.nullable = false;
  else {
    if (!O3.objectIdFieldType) throw new r("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    P2.unshift({ name: N2, alias: N2, type: "number" === O3.objectIdFieldType ? "esriFieldTypeOID" : "esriFieldTypeString", editable: false, nullable: false });
  }
  if (N2 !== O3.objectIdFieldName) {
    const e2 = P2.find(({ name: e3 }) => e3 === O3.objectIdFieldName);
    e2 && (e2.type = "esriFieldTypeInteger");
  }
  P2 === O3.fields && O3.unknownFields.length > 0 && F().warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: O3.unknownFields } });
  for (const e2 of P2) {
    if (null == e2.name && (e2.name = e2.alias), null == e2.alias && (e2.alias = e2.name), "esriFieldTypeOID" !== e2.type && "esriFieldTypeGlobalID" !== e2.type && (e2.editable = null == e2.editable || !!e2.editable, e2.nullable = null == e2.nullable || !!e2.nullable), !e2.name) throw new r("ogc-feature-layer:invalid-field-name", "field name is missing", { field: e2 });
    if (!i.jsonValues.includes(e2.type)) throw new r("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, { field: e2 });
  }
  if (R2) {
    const e2 = new _2(P2);
    if (R2.startTimeField) {
      const t = e2.get(R2.startTimeField);
      t ? (R2.startTimeField = t.name, t.type = "esriFieldTypeDate") : R2.startTimeField = null;
    }
    if (R2.endTimeField) {
      const t = e2.get(R2.endTimeField);
      t ? (R2.endTimeField = t.name, t.type = "esriFieldTypeDate") : R2.endTimeField = null;
    }
    if (R2.trackIdField) {
      const t = e2.get(R2.trackIdField);
      t ? R2.trackIdField = t.name : (R2.trackIdField = null, F().warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: R2 } }));
    }
    R2.timeReference ||= { timeZoneIANA: n2 }, R2.startTimeField || R2.endTimeField || (F().warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: R2 } }), R2 = void 0);
  }
  return { drawingInfo: C2 ? u(C2) : null, extent: K(n3), geometryType: C2, fields: P2, hasZ: !!q2, objectIdField: N2, paginationParameter: S3, timeInfo: R2, featureCount: v2 };
}
async function v(n3, r2 = {}) {
  const { links: o, url: a } = n3, s = L(o, "data", "application/json") ?? L(o, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
  if (!s) throw new r("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: l, customParameters: c, signal: u2 } = r2, d2 = _(s.href, a), { data: p } = await f(d2, { signal: u2, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, c), { token: l }) });
  for (const e2 of p.collections) e2.landingPage = n3;
  return p;
}
async function O2(n3, r2 = {}) {
  const { links: o, url: a } = n3, s = L(o, "conformance", "application/json") || L(o, "http://www.opengis.net/def/rel/ogc/1.0/conformance", "application/json");
  if (null == s) throw new r("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: l, customParameters: c, signal: u2 } = r2, d2 = _(s.href, a), { data: p } = await f(d2, { signal: u2, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, c), { token: l }) });
  return p;
}
async function P(t, n3 = {}) {
  const { apiKey: i2, customParameters: r2, signal: o } = n3, { data: a } = await f(t, { signal: o, headers: { accept: "application/json" }, query: __spreadProps(__spreadValues({}, r2), { token: i2 }) });
  return a.url = t, a;
}
async function q(t, n3 = {}) {
  const { links: r2, url: o } = t, a = L(r2, "service-desc", "application/vnd.oai.openapi+json;version=3.0");
  if (null == a) return F().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: s, customParameters: l, signal: c } = n3, u2 = _(a.href, o), { data: d2 } = await f(u2, { signal: c, headers: { accept: "application/vnd.oai.openapi+json;version=3.0" }, query: __spreadProps(__spreadValues({}, l), { token: s }) });
  return d2;
}
function C(e2) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e2), n3 = t?.groups;
  if (!n3) return null;
  const { authority: i2, code: r2 } = n3;
  switch (i2.toLowerCase()) {
    case "ogc":
      switch (r2.toLowerCase()) {
        case "crs27":
          return S.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return S.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(r2, 10);
      return Number.isNaN(e3) ? null : e3;
    }
    default:
      return null;
  }
}
async function N(e2, t, n3) {
  const i2 = await R(e2, t, n3);
  return W(i2);
}
async function R(n3, r2, o) {
  const { collection: { links: c, landingPage: { url: f2 } }, layerDefinition: m, maxRecordCount: y2, queryParameters: { apiKey: b, customParameters: j }, spatialReference: F2, supportedCrs: I3 } = n3, T3 = L(c, "items", "application/geo+json") || L(c, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (!T3) throw new r("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: k2, num: x2, start: S3, timeExtent: v2, where: O3 } = r2;
  if (r2.objectIds) throw new r("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
  const P2 = S.fromJSON(F2), q2 = r2.outSpatialReference ?? P2, C2 = q2.isWGS84 ? null : $(q2, I3), N2 = Z(k2, I3), R2 = M2(v2), W3 = D(O3), G2 = x2 ?? (null == S3 ? y2 : 10), K2 = 0 === S3 ? void 0 : S3, { fields: U2, geometryType: A, hasZ: J2, objectIdField: z, paginationParameter: E } = m, _3 = _(T3.href, f2), { data: B } = await f(_3, __spreadProps(__spreadValues({}, o), { query: __spreadProps(__spreadValues(__spreadValues({}, j), N2), { crs: C2, datetime: R2, query: W3, limit: G2, [E]: K2, token: b }), headers: { accept: "application/geo+json" } })), Q = O(B, { geometryType: A, hasZ: J2, objectIdField: z }), V = Q.length === G2 && !!L(B.links ?? [], "next", "application/geo+json"), H2 = new _2(U2);
  for (const e2 of Q) {
    const t = {};
    d(H2, t, e2.attributes, true);
    for (const e3 of H2.fields) e3.nullable && !(e3.name in t) && (t[e3.name] = null);
    t[z] = e2.attributes[z], e2.attributes = t;
  }
  if (!C2 && q2.isWebMercator) {
    for (const e2 of Q) if (null != e2.geometry && null != A) {
      const t = J(e2.geometry, A, J2, false);
      t.spatialReference = S.WGS84, e2.geometry = H(y(t, q2));
    }
  }
  for (const e2 of Q) e2.objectId = e2.attributes[z];
  const X = C2 || !C2 && q2.isWebMercator ? q2.toJSON() : g, Y = new e();
  return Y.exceededTransferLimit = V, Y.features = Q, Y.fields = U2, Y.geometryType = A, Y.hasZ = J2, Y.spatialReference = X, Y;
}
function W2(e2) {
  return null != e2 && "extent" === e2.type;
}
function $(e2, t) {
  const { isWebMercator: n3, wkid: i2, latestWkid: r2 } = e2;
  if (!i2 && !r2) return null;
  const o = n3 ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : i2 && t[i2] || r2 && t[r2];
  return o ? `${k}${o}` : null;
}
function G(e2) {
  if (!e2) return "";
  const { xmin: t, ymin: n3, xmax: i2, ymax: r2 } = e2;
  return `${t},${n3},${i2},${r2}`;
}
function M2(e2) {
  if (!e2) return null;
  const { start: t, end: n3 } = e2;
  return `${null != t ? t.toISOString() : ".."}/${null != n3 ? n3.toISOString() : ".."}`;
}
function D(e2) {
  return e2 && "1=1" !== e2 ? e2 : null;
}
function Z(e2, t) {
  if (!W2(e2)) return null;
  const { spatialReference: n3 } = e2;
  if (!n3 || n3.isWGS84) return { bbox: G(e2) };
  const i2 = $(n3, t);
  return null != i2 ? { bbox: G(e2), "bbox-crs": i2 } : n3.isWebMercator ? { bbox: G(y(e2, S.WGS84)) } : null;
}
function K(e2) {
  const t = e2.extent?.spatial;
  if (!t) return null;
  const n3 = t.bbox[0], i2 = 4 === n3.length, [r2, o] = n3, s = i2 ? void 0 : n3[2];
  return { xmin: r2, ymin: o, xmax: i2 ? n3[2] : n3[3], ymax: i2 ? n3[3] : n3[4], zmin: s, zmax: i2 ? void 0 : n3[5], spatialReference: S.WGS84.toJSON() };
}
function L(e2, t, n3) {
  return e2.find(({ rel: e3, type: i2 }) => e3 === t && i2 === n3) ?? e2.find(({ rel: e3, type: n4 }) => e3 === t && !n4);
}
function U(e2, t, n3) {
  if (!n3) return;
  const i2 = L(n3, "next", "application/geo+json"), r2 = I(i2?.href)?.query;
  if (!r2) return;
  const a = I(e2).query, s = Object.keys(a ?? {}), l = Object.entries(r2).filter(([e3]) => !s.includes(e3)).find(([e3, n4]) => T2.has(e3.toLowerCase()) && Number.parseInt(n4, 10) === t), c = l?.[0];
  return c;
}

export {
  k,
  x,
  S2 as S,
  v,
  O2 as O,
  P,
  q,
  C,
  N,
  R
};
//# sourceMappingURL=chunk-JEGAVNFT.js.map
