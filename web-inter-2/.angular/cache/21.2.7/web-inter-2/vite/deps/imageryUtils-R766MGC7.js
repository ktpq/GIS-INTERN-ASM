import {
  $,
  P
} from "./chunk-BOLJVW4K.js";
import "./chunk-FLIHJ2WP.js";
import "./chunk-7YHZNK4V.js";
import {
  r
} from "./chunk-ZCPCMSQC.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-J75ZMBKV.js";
import {
  E,
  c,
  l,
  u
} from "./chunk-YDQ5OQ56.js";
import "./chunk-SCB6GXME.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-N2NNQJRW.js";
import "./chunk-BEBG2VYN.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/save/imageryUtils.js
var l2 = "Image Service";
var m = "imagery-layer-save";
var o = "imagery-layer-save-as";
var n = "imagery-tile-layer-save";
var c2 = "imagery-tile-layer-save-as";
var p = "WCS";
var u2 = "wcs-layer-save";
var g = "wcs-layer-save-as";
function v(t) {
  if ("imagery" === t.type || "wcs" === t.type) return { isValid: true };
  const { raster: a } = t, r2 = r(a)[0];
  return { isValid: "RasterTileServer" === r2?.datasetFormat && ("Raster" === r2.tileType || "Map" === r2.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function f(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function d(e, t) {
  const { parsedUrl: a, title: l3, fullExtent: m2 } = e;
  t.url = a.path, t.title ||= l3;
  try {
    t.extent = await l(m2);
  } catch {
    t.extent = void 0;
  }
  c(t, E.METADATA), u(t, E.TILED_IMAGERY, "imagery-tile" === e.type);
}
async function I(e, t) {
  const r2 = "imagery" === e.type ? m : "imagery-tile" === e.type ? n : u2, s = "wcs" === e.type ? p : l2;
  return P({ layer: e, itemType: s, validateLayer: v, createItemData: f, errorNamePrefix: r2 }, t);
}
async function T(e, a, r2) {
  const s = "imagery" === e.type ? o : "imagery-tile" === e.type ? c2 : g, i = "wcs" === e.type ? p : l2;
  return $({ layer: e, itemType: i, validateLayer: v, createItemData: f, errorNamePrefix: s, newItem: a, setItemProperties: d }, r2);
}
export {
  I as save,
  T as saveAs
};
//# sourceMappingURL=imageryUtils-R766MGC7.js.map
