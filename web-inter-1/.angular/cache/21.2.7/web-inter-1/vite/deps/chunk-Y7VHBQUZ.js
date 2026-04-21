import {
  a,
  c,
  m,
  s,
  s2,
  u
} from "./chunk-PIGO73DQ.js";

// node_modules/@arcgis/core/geometry/operators/projectOperator.js
var s3;
var i;
var p;
var c2;
var m2;
var u2;
function f() {
  return !!s3 && u();
}
async function l() {
  if (!f()) {
    const [o, e] = await Promise.all([import("./apiConverter-XI625PME.js"), import("./projectionTransformation-J24CXYVE.js"), c()]);
    s3 = o.fromGeometry, i = o.fromSpatialReference, p = o.getSpatialReference, c2 = o.toGeometry, m2 = e.createProjectionTransformation, u2 = m();
  }
}
function j(e, r, t) {
  const n = p(e), u3 = m2(i(n), i(r), t), f2 = c2(a(s3(e), u3), r);
  return !t?.zConversionDisabled && f2?.hasZ && s2([f2], n, r), f2;
}
function d(o, r, t) {
  const n = o.map(s3), u3 = p(o), f2 = m2(i(u3), i(r), t), l2 = s(n, f2).map((o2) => c2(o2, r));
  return !t?.zConversionDisabled && l2 && s2(l2, u3, r), l2;
}

export {
  u2 as u,
  f,
  l,
  j,
  d
};
//# sourceMappingURL=chunk-Y7VHBQUZ.js.map
