import {
  $,
  P
} from "./chunk-ICYQGIXQ.js";
import "./chunk-FLIHJ2WP.js";
import "./chunk-53GCD5BF.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-DL5A7PLL.js";
import {
  E,
  c,
  i,
  l
} from "./chunk-VIFYHMCM.js";
import "./chunk-MQRKJL3K.js";
import "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-MCLMCBJF.js";
import "./chunk-I5YTT2EB.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
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
import "./chunk-YY44XNLW.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import "./chunk-LAAWMBRE.js";
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
//# sourceMappingURL=streamLayerUtils-K6JAE3G5.js.map
