import {
  a
} from "./chunk-JSLIUVPU.js";
import {
  c,
  e,
  i,
  l,
  n,
  s as s3,
  y
} from "./chunk-D4UZS7YU.js";
import {
  u
} from "./chunk-MSVPPUQN.js";
import {
  s
} from "./chunk-JZV4LTC3.js";
import {
  s as s2
} from "./chunk-OTOTHRZE.js";
import {
  K,
  W,
  j
} from "./chunk-YK5DPRSK.js";
import {
  k
} from "./chunk-TDVHS7EW.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/portal/support/portalLayers.js
async function L(e2) {
  let { portalItem: a2 } = e2;
  !a2 || a2 instanceof k || (a2 = new k(a2));
  const r2 = await w(a2);
  return new (0, r2.constructor)(__spreadValues({ portalItem: a2 }, r2.properties));
}
async function w(e2) {
  await e2.load();
  const a2 = new e();
  return N(await S(e2, a2));
}
async function S(a2, r2) {
  switch (a2.type) {
    case "3DTiles Service":
      return a2.typeKeywords.includes("3DObject") ? F() : a2.typeKeywords.includes("GaussianSplat") ? b() : P();
    case "CSV":
      return K2();
    case "Feature Collection":
      return M(a2);
    case "Feature Service":
      return h(a2, r2);
    case "Feed":
      return J();
    case "GeoJson":
      return G();
    case "Group Layer":
      return k2();
    case "Image Service":
      return g(a2, r2);
    case "KML":
      return V();
    case "Knowledge Graph Layer":
      return W2();
    case "Map Service":
      return v(a2, r2);
    case "Media Layer":
      return $();
    case "Scene Service":
      return I(a2, r2);
    case "Stream Service":
      return j2();
    case "Video Service":
      return T(a2, r2);
    case "Vector Tile Service":
      return C();
    case "WCS":
      return U();
    case "WFS":
      return D();
    case "WMS":
      return O();
    case "WMTS":
      return x();
    default:
      throw new r("portal:unknown-item-type", "Unknown item type '${type}'", { type: a2.type });
  }
}
async function N(e2) {
  const a2 = e2.className, r2 = a[a2];
  return { constructor: await r2(), properties: e2.properties };
}
async function v(e2, a2) {
  return await A(e2, a2) ? { className: "TileLayer" } : { className: "MapImageLayer" };
}
async function h(e2, a2) {
  const r2 = await E(e2, a2);
  if ("object" == typeof r2) {
    const { sourceJSON: e3, className: a3 } = r2, t = { sourceJSON: e3 };
    return null != r2.id && (t.layerId = r2.id), { className: a3 || "FeatureLayer", properties: t };
  }
  return { className: "GroupLayer" };
}
async function I(e2, r2) {
  const t = await E(e2, r2, async () => {
    try {
      if (!e2.url) return [];
      const { serverUrl: t2 } = await s(e2.url, { sceneLayerItem: e2 }), s4 = await r2.fetchServiceMetadata(t2);
      return s4?.tables ?? [];
    } catch {
      return [];
    }
  });
  if ("object" == typeof t) {
    const a2 = {};
    let n2;
    if (null != t.id ? (a2.layerId = t.id, n2 = `${e2.url}/layers/${t.id}`) : n2 = e2.url, e2.typeKeywords?.length) {
      for (const r3 of Object.keys(j)) if (e2.typeKeywords.includes(r3)) return { className: j[r3] };
    }
    const c2 = await r2.fetchServiceMetadata(n2, { customParameters: await r2.fetchCustomParameters(e2, (e3) => s3(e3)?.customParameters) });
    return { className: j[c2?.layerType] || "SceneLayer", properties: a2 };
  }
  if (false === t) {
    const a2 = await r2.fetchServiceMetadata(e2.url);
    if ("Voxel" === a2?.layerType) return { className: "VoxelLayer" };
  }
  return { className: "GroupLayer" };
}
async function M(e2) {
  await e2.load();
  const a2 = s2(e2, "Map Notes"), r2 = s2(e2, "Markup");
  if (a2 || r2) return { className: "MapNotesLayer" };
  if (s2(e2, "Route Layer")) return { className: "RouteLayer" };
  const t = await e2.fetchData();
  return 1 === c(t) ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function g(e2, a2) {
  await e2.load();
  const r2 = e2.typeKeywords?.map((e3) => e3.toLowerCase()) ?? [];
  if (r2.includes("elevation 3d layer")) return { className: "ElevationLayer" };
  if (r2.includes("tiled imagery")) return { className: "ImageryTileLayer" };
  const t = await a2.fetchItemData(e2), s4 = t?.layerType;
  if ("ArcGISTiledImageServiceLayer" === s4) return { className: "ImageryTileLayer" };
  if ("ArcGISImageServiceLayer" === s4) return { className: "ImageryLayer" };
  const n2 = await a2.fetchServiceMetadata(e2.url, { customParameters: await a2.fetchCustomParameters(e2) }), c2 = n2.cacheType?.toLowerCase(), o = n2.capabilities?.toLowerCase().includes("tilesonly"), i2 = n2.tileInfo?.format?.toLowerCase() ?? "", u2 = null == c2 && ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"].includes(i2);
  return "map" === c2 || u2 || o ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function j2() {
  return { className: "StreamLayer" };
}
async function T(e2, a2) {
  return "object" == typeof await E(e2, a2) ? { className: "VideoLayer" } : { className: "GroupLayer" };
}
function C() {
  return { className: "VectorTileLayer" };
}
function G() {
  return { className: "GeoJSONLayer" };
}
function P() {
  return { className: "IntegratedMesh3DTilesLayer" };
}
function b() {
  return { className: "GaussianSplatLayer" };
}
function F() {
  return { className: "UnsupportedLayer" };
}
function K2() {
  return { className: "CSVLayer" };
}
function V() {
  return { className: "KMLLayer" };
}
function W2() {
  return { className: "KnowledgeGraphLayer" };
}
function U() {
  return { className: "WCSLayer" };
}
function D() {
  return { className: "WFSLayer" };
}
function O() {
  return { className: "WMSLayer" };
}
function x() {
  return { className: "WMTSLayer" };
}
function J() {
  return { className: "StreamLayer" };
}
function k2() {
  return { className: "GroupLayer" };
}
function $() {
  return { className: "MediaLayer" };
}
async function A(e2, a2) {
  const { tileInfo: r2 } = await a2.fetchServiceMetadata(e2.url, { customParameters: await a2.fetchCustomParameters(e2) });
  return r2;
}
async function E(e2, a2, t) {
  const { url: s4, type: o } = e2, i2 = "Feature Service" === o;
  if (!s4) return {};
  if (/\/\d+$/.test(s4)) {
    if (i2) {
      const t2 = await a2.fetchServiceMetadata(s4, { customParameters: await a2.fetchCustomParameters(e2, (e3) => s3(e3)?.customParameters) });
      return W(e2, K()), { id: t2.id, className: u(t2.type), sourceJSON: t2 };
    }
    return {};
  }
  if ("Video Service" === o) {
    const e3 = await a2.fetchServiceMetadata(s4);
    return !((e3.layers?.length ?? 0) > 1) && {};
  }
  await e2.load();
  let d = await a2.fetchItemData(e2);
  if (i2) {
    const { data: r2, preferredHost: t2 } = await l(d, s4, a2);
    W(e2, t2);
    const c2 = R(r2);
    if ("object" == typeof c2) {
      const e3 = n(r2, c2.id);
      c2.className = i(e3?.layerType);
    }
    return c2;
  }
  "Scene Service" === o && (d = await y(e2, d, a2));
  if (c(d) > 0) return R(d);
  const L2 = await a2.fetchServiceMetadata(s4);
  return t && (L2.tables = await t()), R(L2);
}
function R(e2) {
  return 1 === c(e2) && { id: s3(e2)?.id };
}

export {
  L,
  S
};
//# sourceMappingURL=chunk-IPH7QSCZ.js.map
