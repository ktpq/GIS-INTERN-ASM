import {
  p
} from "./chunk-77HUKSZH.js";
import {
  $,
  P
} from "./chunk-2RH2VSAA.js";
import "./chunk-WIIVLG5H.js";
import "./chunk-VJAFIHLD.js";
import "./chunk-6ED3X2QG.js";
import "./chunk-DO7AIBZH.js";
import {
  o
} from "./chunk-VDWEOSPM.js";
import {
  E,
  c,
  i,
  s
} from "./chunk-N2GOMHYA.js";
import "./chunk-6Q36DUGX.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-IDQ6F3RQ.js";
import "./chunk-JWSXOJ4W.js";
import "./chunk-J5XU3PTN.js";
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
//# sourceMappingURL=groupLayerUtils-GWD3ULTL.js.map
