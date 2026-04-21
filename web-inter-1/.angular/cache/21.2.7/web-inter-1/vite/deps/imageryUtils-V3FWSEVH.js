import {
  r
} from "./chunk-ZCPCMSQC.js";
import {
  $,
  P
} from "./chunk-2UUZIOKG.js";
import "./chunk-FLIHJ2WP.js";
import "./chunk-QGIGOSOK.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-TUWUJRA7.js";
import {
  E,
  c,
  l,
  u
} from "./chunk-2HNVQGYK.js";
import "./chunk-RNT2VJHG.js";
import "./chunk-5MDFQFDX.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-56NUZKCZ.js";
import "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=imageryUtils-V3FWSEVH.js.map
