import {
  a,
  p
} from "./chunk-RXP6U2XC.js";
import "./chunk-7ZFYLJ6O.js";
import {
  F,
  P,
  r
} from "./chunk-SJGGAAKL.js";
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
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/support/geographicTransformationUtils.js
var i;
var s;
var c;
var a2;
function p2() {
  return !!i && r();
}
async function u() {
  if (!p2()) {
    const [e, o, r2, p3] = await Promise.all([import("./Envelope2D-MBIV4VTW.js"), import("./ProjectionTransformation-FPAXESFB.js").then(({ queryTransformationList: n }) => n), import("./SpatialReference-J73TUBVZ.js").then((n) => n.aP).then(({ injectPe: n }) => n), import("./apiConverter-XI625PME.js"), P()]);
    c = e.Envelope2D.construct, a2 = e.Envelope2D.constructEmpty(), i = o, r2(F), s = p3.fromSpatialReference;
  }
}
function m(n, t, e = null) {
  const o = e ? l(e) : a2, r2 = i(0, s(n), s(t), o, 1, true);
  return r2.length > 0 ? h(r2[0]) : null;
}
function f(n, t, e = null) {
  const o = e ? l(e) : a2;
  return i(0, s(n), s(t), o, 0, true).map((n2) => h(n2));
}
function l(n) {
  return c(n.xmin, n.ymin, n.xmax, n.ymax);
}
function h(n) {
  const t = new a();
  for (let e = 0; e < n.count(); e++) {
    const o = n.getStep(e);
    t.steps.push(new p({ wkid: o.getID(), isInverse: o.isInverted() }));
  }
  return t;
}
export {
  m as getTransformation,
  f as getTransformations,
  p2 as isLoaded,
  u as load
};
//# sourceMappingURL=geographicTransformationUtils-J3COUZM2.js.map
