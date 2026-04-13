import {
  a,
  p
} from "./chunk-DWBAGWXH.js";
import "./chunk-NSJQHJ2B.js";
import {
  F,
  P,
  r
} from "./chunk-6CUKMFJV.js";
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
    const [e, o, r2, p3] = await Promise.all([import("./Envelope2D-6VZUTFHC.js"), import("./ProjectionTransformation-BWYJR7CS.js").then(({ queryTransformationList: n }) => n), import("./SpatialReference-XWO6JU7C.js").then((n) => n.aP).then(({ injectPe: n }) => n), import("./apiConverter-ACXXCKWO.js"), P()]);
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
//# sourceMappingURL=geographicTransformationUtils-PXXULM6T.js.map
