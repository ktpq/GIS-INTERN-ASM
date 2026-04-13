import {
  j,
  w
} from "./chunk-LFAUN6PY.js";
import {
  Ge,
  Qe,
  Xe,
  Ye
} from "./chunk-QODK3RPJ.js";
import "./chunk-AGEBX7DX.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-6YNOGQRZ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
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
import {
  F
} from "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-LAAWMBRE.js";
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
import {
  N
} from "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=offsetOperator-NOGRYVJJ.js.map
