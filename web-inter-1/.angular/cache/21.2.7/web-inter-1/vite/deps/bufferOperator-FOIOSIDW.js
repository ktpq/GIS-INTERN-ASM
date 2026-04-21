import {
  f,
  l
} from "./chunk-K7HIPR6Y.js";
import "./chunk-ANW2HCCQ.js";
import "./chunk-EYMUFQFP.js";
import "./chunk-EB4L4GPV.js";
import {
  Ge,
  Qe,
  Xe,
  Ye
} from "./chunk-AOQZWIJ3.js";
import "./chunk-B3YOBJ3Z.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-PEQTFUTW.js";
import "./chunk-55ANZSLC.js";
import "./chunk-TTDA3WA3.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-U54DMEX7.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import {
  F
} from "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
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
import {
  N
} from "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=bufferOperator-FOIOSIDW.js.map
