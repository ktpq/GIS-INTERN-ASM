import {
  H,
  sn
} from "./chunk-DOW7IE32.js";
import {
  S as S2
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";

// node_modules/@arcgis/core/portal/support/portalItemUtils.js
async function o(o2) {
  const i2 = o2.spatialReference;
  if (i2.isWGS84) return o2.clone();
  if (i2.isWebMercator) return S2(o2);
  const s2 = S.WGS84;
  return await sn(i2, s2), H(o2, s2);
}
function i(e, t) {
  if (!s(e, t)) {
    const r = e.typeKeywords;
    r ? r.push(t) : e.typeKeywords = [t];
  }
}
function s(e, t) {
  return !!e.typeKeywords?.includes(t);
}
function a(e) {
  return s(e, E.HOSTED_SERVICE);
}
function c(e, t) {
  const r = e.typeKeywords;
  if (r) {
    const e2 = r.indexOf(t);
    e2 > -1 && r.splice(e2, 1);
  }
}
function u(e, t, r) {
  r ? i(e, t) : c(e, t);
}
async function l(e) {
  const t = e.clone().normalize();
  let r;
  if (t.length > 1) for (const n of t) r ? n.width > r.width && (r = n) : r = n;
  else r = t[0];
  return o(r);
}
var E = { CHARTS: "Charts", DYNAMIC: "Dynamic", DEVELOPER_BASEMAP: "DeveloperBasemap", GROUP_LAYER_MAP: "Map", HOSTED_SERVICE: "Hosted Service", JSAPI: "ArcGIS API for JavaScript", LOCAL_SCENE: "ViewingMode-Local", METADATA: "Metadata", MULTI_LAYER: "Multilayer", ORIENTED_IMAGERY_LAYER: "OrientedImageryLayer", SINGLE_LAYER: "Singlelayer", SUBTYPE_GROUP_LAYER: "SubtypeGroupLayer", SUBTYPE_GROUP_TABLE: "SubtypeGroupTable", TABLE: "Table", TILED_IMAGERY: "Tiled Imagery" };
function f(e) {
  const { portal: t, isOrgItem: r, itemControl: n } = e, o2 = t.user?.privileges;
  let i2 = !o2 || o2.includes("features:user:edit"), s2 = !!r && !!o2?.includes("features:user:fullEdit");
  const a2 = "update" === n || "admin" === n;
  return a2 ? s2 = i2 = true : s2 && (i2 = true), { features: { edit: i2, fullEdit: s2 }, content: { updateItem: a2 } };
}

export {
  i,
  s,
  a,
  c,
  u,
  l,
  E,
  f
};
//# sourceMappingURL=chunk-N2GOMHYA.js.map
