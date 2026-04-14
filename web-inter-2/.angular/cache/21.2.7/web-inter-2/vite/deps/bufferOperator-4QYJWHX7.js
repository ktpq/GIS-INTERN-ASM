import {
  f,
  l
} from "./chunk-CPFTZQN3.js";
import "./chunk-2CLAHPOQ.js";
import "./chunk-DEYOT4AD.js";
import "./chunk-HGL6L2CM.js";
import "./chunk-PEQTFUTW.js";
import {
  Ge,
  Qe,
  Xe,
  Ye
} from "./chunk-4VUAIFP7.js";
import "./chunk-PBTPKOC3.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-6YNOGQRZ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import {
  F
} from "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/json/bufferOperator.js
function a(t, o, m = {}) {
  const { unit: a2 } = m, c2 = Ge(t);
  a2 && c2 && (o = F(o, a2, c2));
  const u = Ye(t), p = u.getSpatialReference();
  return Qe(f(u.getGeometry(), p, o), p);
}
function c(e, i, a2 = {}) {
  let { maxDeviation: c2 = NaN, maxVerticesInFullCircle: u = 96, union: p = false, unit: f2 } = a2;
  const l2 = Ge(e);
  f2 && l2 && (i = i.map((t) => F(t, f2, l2)), c2 && (c2 = F(c2, f2, l2)));
  const [j, x] = Xe(e);
  return l(j, x, i, c2, u, p).map((t) => Qe(t, x)).filter(N);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=bufferOperator-4QYJWHX7.js.map
