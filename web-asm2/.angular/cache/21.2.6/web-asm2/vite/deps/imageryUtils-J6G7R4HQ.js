import {
  $,
  P
} from "./chunk-2RH2VSAA.js";
import "./chunk-WIIVLG5H.js";
import "./chunk-VJAFIHLD.js";
import {
  r
} from "./chunk-7L3OWZWB.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-VDWEOSPM.js";
import {
  E,
  c,
  l,
  u
} from "./chunk-N2GOMHYA.js";
import "./chunk-6Q36DUGX.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-IDQ6F3RQ.js";
import "./chunk-JWSXOJ4W.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=imageryUtils-J6G7R4HQ.js.map
