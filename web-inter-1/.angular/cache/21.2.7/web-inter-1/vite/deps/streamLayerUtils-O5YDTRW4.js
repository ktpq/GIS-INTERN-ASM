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
  i,
  l
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

// node_modules/@arcgis/core/layers/save/streamLayerUtils.js
var n = "Stream Service";
var i2 = "Feed";
var o = "stream-layer-save";
var m = "stream-layer-save-as";
function u(e) {
  return { isValid: "stream" === e.type && !!e.url && !e.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function c2(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function y(e, t) {
  const { parsedUrl: n2, title: i3, fullExtent: o2 } = e;
  t.url = n2.path, t.title ||= i3, t.extent = null, null != o2 && (t.extent = await l(o2)), c(t, E.METADATA), i(t, E.SINGLE_LAYER);
}
async function p(e, r) {
  return P({ layer: e, itemType: n, additionalItemType: i2, validateLayer: u, createItemData: c2, errorNamePrefix: o }, r);
}
async function f(t, r, a) {
  return $({ layer: t, itemType: n, validateLayer: u, createItemData: c2, errorNamePrefix: m, newItem: r, setItemProperties: y }, a);
}
export {
  p as save,
  f as saveAs
};
//# sourceMappingURL=streamLayerUtils-O5YDTRW4.js.map
