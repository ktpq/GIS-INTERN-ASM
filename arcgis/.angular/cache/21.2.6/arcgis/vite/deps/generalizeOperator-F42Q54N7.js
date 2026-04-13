import {
  o,
  t
} from "./chunk-N3EYXCI5.js";
import "./chunk-JZVSUVFV.js";
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
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/json/generalizeOperator.js
function u(r, a, u2 = {}) {
  const { removeDegenerateParts: c2 = false, unit: i } = u2, m = Ge(r);
  i && m && (a = F(a, i, m));
  const p = Ye(r), f = t(p.getGeometry(), a, c2);
  return null == f ? null : Qe(f, p.getSpatialReference());
}
function c(t2, o2, u2 = {}) {
  const { removeDegenerateParts: c2 = false, unit: i } = u2, m = Ge(t2);
  i && m && (o2 = F(o2, i, m));
  const [p, f] = Xe(t2);
  return o(p, o2, c2).map((e) => Qe(e, f));
}
export {
  u as execute,
  c as executeMany
};
//# sourceMappingURL=generalizeOperator-F42Q54N7.js.map
