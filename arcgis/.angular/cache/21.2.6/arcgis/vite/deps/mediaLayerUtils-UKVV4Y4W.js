import {
  p
} from "./chunk-KV523TAY.js";
import {
  $,
  P
} from "./chunk-CWYNDOEU.js";
import "./chunk-WIIVLG5H.js";
import "./chunk-THHD4X2W.js";
import "./chunk-A6V5E4GI.js";
import "./chunk-DO7AIBZH.js";
import {
  o
} from "./chunk-MYHHJAJH.js";
import {
  E,
  c,
  l
} from "./chunk-PDKX3TBX.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-JAXZMTZX.js";
import "./chunk-J5XU3PTN.js";
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
//# sourceMappingURL=mediaLayerUtils-UKVV4Y4W.js.map
