import {
  a,
  p
} from "./chunk-DVZUPJLC.js";
import "./chunk-F6AS75CS.js";
import {
  F,
  P,
  r
} from "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
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
import "./chunk-GLWFJLHD.js";
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
    const [e, o, r2, p3] = await Promise.all([import("./Envelope2D-MBIV4VTW.js"), import("./ProjectionTransformation-MB5L2AKO.js").then(({ queryTransformationList: n }) => n), import("./SpatialReference-QMDBPWPX.js").then((n) => n.aP).then(({ injectPe: n }) => n), import("./apiConverter-KESKQ3A6.js"), P()]);
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
//# sourceMappingURL=geographicTransformationUtils-4QWBVM77.js.map
