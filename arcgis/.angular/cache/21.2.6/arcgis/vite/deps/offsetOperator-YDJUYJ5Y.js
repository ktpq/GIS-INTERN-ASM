import {
  j,
  w
} from "./chunk-I7J4ZS2Y.js";
import {
  Ge,
  Qe,
  Xe,
  Ye
} from "./chunk-ZQAMXZ7F.js";
import "./chunk-F3UEEVCN.js";
import "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import "./chunk-S5FMCRBW.js";
import "./chunk-MKUY72VH.js";
import "./chunk-GAJDBZ5G.js";
import "./chunk-FZMMQS4X.js";
import "./chunk-U3KYTZUD.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import {
  F
} from "./chunk-66OU277M.js";
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
import {
  N
} from "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/json/offsetOperator.js
var u = { round: 0, bevel: 1, miter: 2, square: 3 };
function a(r, o, m = {}) {
  const { miterLimit: a2 = 10, flattenError: c2 = 0, joins: f = "round", unit: p } = m, j2 = Ge(r);
  p && j2 && (o = F(o, p, j2));
  const l = Ye(r), x = l.getSpatialReference();
  return Qe(w(l.getGeometry(), x, o, u[f], a2, c2), x);
}
function c(e, i, a2 = {}) {
  const { miterLimit: c2 = 10, flattenError: f = 0, joins: p = "round", unit: j2 } = a2, l = Ge(e);
  j2 && l && (i = F(i, j2, l));
  const [x, d] = Xe(e);
  return j(x, d, i, u[p], c2, f).map((r) => Qe(r, d)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=offsetOperator-YDJUYJ5Y.js.map
