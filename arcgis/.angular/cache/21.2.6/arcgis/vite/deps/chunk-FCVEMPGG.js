import {
  o
} from "./chunk-T6F4SXOT.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import {
  f2 as f,
  s2 as s
} from "./chunk-2OF3JE3F.js";

// node_modules/@arcgis/core/support/userTypeGuards/isBasemap.js
var n = /* @__PURE__ */ Symbol("BasemapInstance");
function t(t2) {
  return null != t2 && "object" == typeof t2 && n in t2;
}

// node_modules/@arcgis/core/layers/support/layerUtils.js
function o2(e) {
  return null != e && "object" == typeof e && "type" in e && "feature" === e.type;
}
function s2(e) {
  return null != e && "object" == typeof e && "type" in e && "graphics" === e.type;
}
function c(e) {
  return null != e && "object" == typeof e && "type" in e && "map-image" === e.type;
}
function l(e) {
  return null != e && "object" == typeof e && "type" in e && "knowledge-graph" === e.type && "layers" in e;
}
function f2(e) {
  return null != e && "object" == typeof e && "type" in e && "knowledge-graph-sublayer" === e.type;
}
function p(e) {
  return null != e && "object" == typeof e && "type" in e && "link-chart" === e.type && "layers" in e;
}
function g(e) {
  return null != e && "object" == typeof e && "type" in e && "subtype-group" === e.type && "sublayers" in e;
}
function b(e) {
  return "subtype-sublayer" === e?.type;
}
var j = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
function v(e) {
  const t2 = e?.type;
  return "building-scene" === t2 || "integrated-mesh" === t2 || "point-cloud" === t2 || "scene" === t2;
}
function w(e) {
  return "integrated-mesh" === e.type || "integrated-mesh-3dtiles" === e.type;
}
function T(e) {
  return "feature" === e?.type && !e.url && "memory" === e.source?.type;
}
function U(e) {
  const t2 = e?.type;
  return ("feature" === t2 || "subtype-group" === t2 || "oriented-imagery" === t2) && "feature-layer" === e?.source?.type;
}
function M(e) {
  return "feature" === e?.type && "feature-layer" === e.source?.type;
}
function O(e) {
  return o2(e) && M(e);
}
function P(e) {
  const t2 = e?.type;
  return "binning" === t2 || "cluster" === t2;
}
function B(e, t2) {
  if (!O(e)) return;
  const n2 = t2?.graphic, r = e.featureReduction;
  if (n2) {
    if (n2.isAggregate) {
      const e2 = n2.origin;
      return e2 && ("featureReductionProvider" in e2 && r) ? P(r) ? r : null : void 0;
    }
    return e;
  }
  return t2?.checkFeatureReduction && r ? P(r) ? r : null : e;
}
async function F(n2, r) {
  const i = s?.findServerInfo(n2);
  if (null != i?.currentVersion) return i.owningSystemUrl || null;
  const u = n2.toLowerCase().indexOf("/rest/services");
  if (-1 === u) return null;
  const o3 = `${n2.slice(0, u)}/rest/info`, s3 = null != r ? r.signal : null, { data: c2 } = await f(o3, { query: { f: "json" }, responseType: "json", signal: s3 });
  return c2?.owningSystemUrl || null;
}
function J(e) {
  if (!("capabilities" in e)) return false;
  switch (e.type) {
    case "catalog":
    case "catalog-footprint":
    case "csv":
    case "feature":
    case "geojson":
    case "imagery":
    case "knowledge-graph-sublayer":
    case "ogc-feature":
    case "oriented-imagery":
    case "scene":
    case "sublayer":
    case "subtype-group":
    case "subtype-sublayer":
    case "wfs":
      return true;
    default:
      return false;
  }
}
function A(e) {
  return J(e) ? "effectiveCapabilities" in e ? e.effectiveCapabilities : e.capabilities : null;
}
function D(e) {
  if (!("editingEnabled" in e)) return false;
  switch (e.type) {
    case "csv":
    case "feature":
    case "geojson":
    case "oriented-imagery":
    case "scene":
    case "subtype-group":
    case "subtype-sublayer":
    case "knowledge-graph-sublayer":
      return true;
    default:
      return false;
  }
}
function G(e) {
  return !!D(e) && ("effectiveEditingEnabled" in e ? e.effectiveEditingEnabled : e.editingEnabled);
}
function z(e) {
  const t2 = new q();
  for (const n2 of e.allLayers.concat(e.allTables)) "csv" === n2.type || o(n2) || ("charts" in n2 && t2.push(n2), "subtype-group" === n2.type && t2.push(...n2.sublayers));
  return t2;
}
function H(e, t2) {
  return null;
}
function K(e) {
  return null;
}
function Q(e) {
  return !e || "Feature Service" === e.type && !e.sourceUrl;
}
function W(e, t2) {
  if (!t2 || !Q(e)) return;
  const n2 = H(e.url);
  n2 && (e.url = n2);
}

export {
  n,
  t,
  o2 as o,
  s2 as s,
  c,
  l,
  f2 as f,
  p,
  g,
  b,
  j,
  v,
  w,
  T,
  U,
  O,
  B,
  F,
  J,
  A,
  G,
  z,
  H,
  K,
  Q,
  W
};
//# sourceMappingURL=chunk-FCVEMPGG.js.map
