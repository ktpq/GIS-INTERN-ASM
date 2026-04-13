import {
  $,
  P
} from "./chunk-2RH2VSAA.js";
import "./chunk-WIIVLG5H.js";
import "./chunk-VJAFIHLD.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-VDWEOSPM.js";
import {
  E,
  c,
  i,
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

// node_modules/@arcgis/core/layers/save/mapImageLayerUtils.js
var o = "Map Service";
var l2 = "map-image-layer-save";
var m = "map-image-layer-save-as";
function c2(e) {
  return { isValid: "map-image" === e.type && !e.sourceJSON?.tileInfo, errorMessage: "Layer.type should be 'map-image' and reference a dynamic (non-cached) map service" };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function u2(e, t) {
  return f(e, t), Promise.resolve();
}
async function y(e, t) {
  const { parsedUrl: s, title: i2, fullExtent: o2 } = e;
  t.url = s.path, t.title ||= i2, t.extent = o2 ? await l(o2) : null, c(t, E.METADATA), f(e, t);
}
function f(e, t) {
  i(t, E.DYNAMIC);
  const r = e.sublayers?.length ?? 0;
  u(t, E.MULTI_LAYER, r > 1), u(t, E.SINGLE_LAYER, 1 === r);
}
async function v(e, r) {
  return P({ layer: e, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: l2, setItemProperties: u2 }, r);
}
async function I(t, r, a) {
  return $({ layer: t, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: m, newItem: r, setItemProperties: y }, a);
}
export {
  v as save,
  I as saveAs
};
//# sourceMappingURL=mapImageLayerUtils-ECX6IM6Y.js.map
