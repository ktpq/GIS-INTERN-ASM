import {
  p
} from "./chunk-R5Z7TSMK.js";
import {
  $,
  P
} from "./chunk-R2Z26CEU.js";
import "./chunk-FLIHJ2WP.js";
import "./chunk-H5PQOJ5Z.js";
import "./chunk-6FS257XK.js";
import "./chunk-UGNCDVPZ.js";
import {
  o
} from "./chunk-QJORC5MD.js";
import {
  E,
  c,
  l
} from "./chunk-OTOTHRZE.js";
import "./chunk-YK5DPRSK.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-TDVHS7EW.js";
import "./chunk-DVV7T3XR.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-OOTSAG75.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OIICDJNU.js";
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
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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

// node_modules/@arcgis/core/layers/save/mediaLayerUtils.js
var i = "Media Layer";
var u = "media-layer-save";
var p2 = "media-layer-save-as";
var l2 = ["media-layer:unsupported-source"];
function m(e) {
  return { isValid: "media" === e.type, errorMessage: "Layer.type should be 'media'" };
}
function c2(e) {
  return o(e, "portal-item", true);
}
function y(e) {
  return Promise.resolve(e.layerJSON);
}
async function f(e, r) {
  r.extent = e.fullExtent ? await l(e.fullExtent) : null;
}
async function d(e, r) {
  r.title ||= e.title, await f(e, r), c(r, E.METADATA);
}
async function v(e, t) {
  return P({ layer: e, itemType: i, validateLayer: m, createJSONContext: (e2) => c2(e2), createItemData: y, errorNamePrefix: u, supplementalUnsupportedErrors: l2, setItemProperties: f, saveResources: (r, t2) => p(e.resourceReferences, t2) }, t);
}
async function x(r, t, a) {
  return $({ layer: r, itemType: i, validateLayer: m, createJSONContext: (e) => c2(e), createItemData: y, errorNamePrefix: p2, supplementalUnsupportedErrors: l2, newItem: t, setItemProperties: d, saveResources: (e, t2) => p(r.resourceReferences, t2) }, a);
}
export {
  v as save,
  x as saveAs
};
//# sourceMappingURL=mediaLayerUtils-N5ZEKSHV.js.map
