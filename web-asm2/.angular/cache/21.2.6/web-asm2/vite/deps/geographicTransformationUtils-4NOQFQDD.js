import {
  a,
  p
} from "./chunk-BGSLLK4A.js";
import "./chunk-DUGX5C7M.js";
import {
  F,
  P,
  r
} from "./chunk-YBEVNI5U.js";
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
    const [e, o, r2, p3] = await Promise.all([import("./Envelope2D-6VZUTFHC.js"), import("./ProjectionTransformation-BWYJR7CS.js").then(({ queryTransformationList: n }) => n), import("./SpatialReference-XWO6JU7C.js").then((n) => n.aP).then(({ injectPe: n }) => n), import("./apiConverter-AF5EX7PS.js"), P()]);
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
//# sourceMappingURL=geographicTransformationUtils-4NOQFQDD.js.map
