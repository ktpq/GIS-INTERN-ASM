import {
  a,
  p
} from "./chunk-MESRIVTQ.js";
import "./chunk-NLVGGH5B.js";
import {
  F,
  P,
  r
} from "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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
    const [e, o, r2, p3] = await Promise.all([import("./Envelope2D-MBIV4VTW.js"), import("./ProjectionTransformation-GC2Z2KYQ.js").then(({ queryTransformationList: n }) => n), import("./SpatialReference-53GCE4ZP.js").then((n) => n.aP).then(({ injectPe: n }) => n), import("./apiConverter-MMY3VODX.js"), P()]);
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
//# sourceMappingURL=geographicTransformationUtils-5YSN6G5R.js.map
