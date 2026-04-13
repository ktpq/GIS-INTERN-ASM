import {
  r
} from "./chunk-7L3OWZWB.js";
import {
  $,
  P
} from "./chunk-CWYNDOEU.js";
import "./chunk-WIIVLG5H.js";
import "./chunk-THHD4X2W.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-MYHHJAJH.js";
import {
  E,
  c,
  l,
  u
} from "./chunk-PDKX3TBX.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-JAXZMTZX.js";
import "./chunk-FCVEMPGG.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-T6F4SXOT.js";
import "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=imageryUtils-FGENHQFR.js.map
