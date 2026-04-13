import {
  o
} from "./chunk-F3EUMCMF.js";
import {
  C,
  E,
  M,
  w
} from "./chunk-UPOCHML7.js";
import {
  t
} from "./chunk-GBACRMDK.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorSimplifyOGC.js
var e = new o();
function t2(r, n, t3) {
  return e.execute(r, n, t3, null);
}
function u(n, t3, u2) {
  const o3 = e.executeMany(new t(n), t3, u2, null);
  return Array.from(o3);
}
function o2(r, n, t3, u2) {
  return e.isSimple(r, n, t3, u2, null);
}
function s() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/geometry/operators/simplifyOGCOperator.js
function i(r) {
  const t3 = C(r);
  return E(t2(M(r), w(t3), false), t3);
}
function a(r) {
  const t3 = r.map(M), n = C(r);
  return u(t3, w(n), false).map((r2) => E(r2, n));
}
function c(t3, n) {
  return o2(M(t3), w(C(t3)), null != n, n ?? null);
}
var m = s();

export {
  i,
  a,
  c,
  m
};
//# sourceMappingURL=chunk-CHC7DFO2.js.map
