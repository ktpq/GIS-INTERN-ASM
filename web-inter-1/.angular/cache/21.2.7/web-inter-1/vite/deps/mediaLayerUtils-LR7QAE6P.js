import {
  p
} from "./chunk-IIU3VU7Y.js";
import {
  $,
  P
} from "./chunk-2UUZIOKG.js";
import "./chunk-FLIHJ2WP.js";
import "./chunk-QGIGOSOK.js";
import "./chunk-ARMAGCE2.js";
import "./chunk-UGNCDVPZ.js";
import {
  o
} from "./chunk-TUWUJRA7.js";
import {
  E,
  c,
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
import "./chunk-Z3PP4SLW.js";
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
//# sourceMappingURL=mediaLayerUtils-LR7QAE6P.js.map
