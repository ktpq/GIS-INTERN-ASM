import {
  b
} from "./chunk-JWSXOJ4W.js";
import {
  l,
  w
} from "./chunk-CD6IOUFB.js";
import {
  q
} from "./chunk-4UWOVR5Y.js";
import {
  f2 as f,
  s2 as s
} from "./chunk-5AVTDH3Y.js";
import {
  e
} from "./chunk-2DNVIDFH.js";

// node_modules/@arcgis/core/support/userTypeGuards/isBasemap.js
var n = /* @__PURE__ */ Symbol("BasemapInstance");
function t(t2) {
  return null != t2 && "object" == typeof t2 && n in t2;
}

// node_modules/@arcgis/core/layers/catalog/catalogUtils.js
var a = /* @__PURE__ */ new WeakMap();
function o(i) {
  return !i.destroyed && (a.has(i) || i.addHandles([l(() => {
    const { parent: e2 } = i;
    return !!(e2 && e2 instanceof b) && ("catalog-dynamic-group" === e2.type || o(e2));
  }, (e2) => a.set(i, e2), w), e(() => a.delete(i))]), a.get(i));
}

// node_modules/@arcgis/core/layers/support/layerUtils.js
function o2(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "feature" === e2.type;
}
function s2(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "graphics" === e2.type;
}
function c(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "map-image" === e2.type;
}
function l2(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "knowledge-graph" === e2.type && "layers" in e2;
}
function f2(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "knowledge-graph-sublayer" === e2.type;
}
function p(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "link-chart" === e2.type && "layers" in e2;
}
function g(e2) {
  return null != e2 && "object" == typeof e2 && "type" in e2 && "subtype-group" === e2.type && "sublayers" in e2;
}
function b2(e2) {
  return "subtype-sublayer" === e2?.type;
}
var j = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
function v(e2) {
  const t2 = e2?.type;
  return "building-scene" === t2 || "integrated-mesh" === t2 || "point-cloud" === t2 || "scene" === t2;
}
function w2(e2) {
  return "integrated-mesh" === e2.type || "integrated-mesh-3dtiles" === e2.type;
}
function T(e2) {
  return "feature" === e2?.type && !e2.url && "memory" === e2.source?.type;
}
function U(e2) {
  const t2 = e2?.type;
  return ("feature" === t2 || "subtype-group" === t2 || "oriented-imagery" === t2) && "feature-layer" === e2?.source?.type;
}
function M(e2) {
  return "feature" === e2?.type && "feature-layer" === e2.source?.type;
}
function O(e2) {
  return o2(e2) && M(e2);
}
function P(e2) {
  const t2 = e2?.type;
  return "binning" === t2 || "cluster" === t2;
}
function B(e2, t2) {
  if (!O(e2)) return;
  const n2 = t2?.graphic, r = e2.featureReduction;
  if (n2) {
    if (n2.isAggregate) {
      const e3 = n2.origin;
      return e3 && ("featureReductionProvider" in e3 && r) ? P(r) ? r : null : void 0;
    }
    return e2;
  }
  return t2?.checkFeatureReduction && r ? P(r) ? r : null : e2;
}
async function F(n2, r) {
  const i = s?.findServerInfo(n2);
  if (null != i?.currentVersion) return i.owningSystemUrl || null;
  const u = n2.toLowerCase().indexOf("/rest/services");
  if (-1 === u) return null;
  const o3 = `${n2.slice(0, u)}/rest/info`, s3 = null != r ? r.signal : null, { data: c2 } = await f(o3, { query: { f: "json" }, responseType: "json", signal: s3 });
  return c2?.owningSystemUrl || null;
}
function J(e2) {
  if (!("capabilities" in e2)) return false;
  switch (e2.type) {
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
function A(e2) {
  return J(e2) ? "effectiveCapabilities" in e2 ? e2.effectiveCapabilities : e2.capabilities : null;
}
function D(e2) {
  if (!("editingEnabled" in e2)) return false;
  switch (e2.type) {
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
function G(e2) {
  return !!D(e2) && ("effectiveEditingEnabled" in e2 ? e2.effectiveEditingEnabled : e2.editingEnabled);
}
function z(e2) {
  const t2 = new q();
  for (const n2 of e2.allLayers.concat(e2.allTables)) "csv" === n2.type || o(n2) || ("charts" in n2 && t2.push(n2), "subtype-group" === n2.type && t2.push(...n2.sublayers));
  return t2;
}
function H(e2, t2) {
  return null;
}
function K(e2) {
  return null;
}
function Q(e2) {
  return !e2 || "Feature Service" === e2.type && !e2.sourceUrl;
}
function W(e2, t2) {
  if (!t2 || !Q(e2)) return;
  const n2 = H(e2.url);
  n2 && (e2.url = n2);
}

export {
  n,
  t,
  o,
  o2,
  s2 as s,
  c,
  l2 as l,
  f2 as f,
  p,
  g,
  b2 as b,
  j,
  v,
  w2 as w,
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
//# sourceMappingURL=chunk-6Q36DUGX.js.map
