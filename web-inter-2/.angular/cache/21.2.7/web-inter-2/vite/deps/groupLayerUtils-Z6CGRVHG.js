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
  i,
  s
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/save/groupLayerUtils.js
var u = "Group Layer";
var c2 = "group-layer-save";
var l = "group-layer-save-as";
var p2 = E.GROUP_LAYER_MAP;
function m(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function y(e) {
  return { isValid: s(e, p2), errorMessage: `Layer.portalItem.typeKeywords should have '${p2}'` };
}
function f(e, r) {
  return __spreadProps(__spreadValues({}, o(e, "web-map", true)), { initiator: r });
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function d(e, r) {
  r.title ||= e.title, c(r, E.METADATA), i(r, p2);
}
async function I(e, t) {
  return P({ layer: e, itemType: u, validateLayer: m, validateItem: y, createJSONContext: (r) => f(r, e), createItemData: v, errorNamePrefix: c2, saveResources: async (r, t2) => (e.sourceIsPortalItem || await r.removeAllResources().catch(() => {
  }), p(e.resourceReferences, t2)) }, t);
}
async function g(r, t, o2) {
  return $({ layer: r, itemType: u, validateLayer: m, createJSONContext: (e) => f(e, r), createItemData: v, errorNamePrefix: l, newItem: t, setItemProperties: d, saveResources: (e, t2) => p(r.resourceReferences, t2) }, o2);
}
export {
  I as save,
  g as saveAs
};
//# sourceMappingURL=groupLayerUtils-Z6CGRVHG.js.map
