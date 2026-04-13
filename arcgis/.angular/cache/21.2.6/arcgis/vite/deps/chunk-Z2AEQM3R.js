import {
  I,
  v,
  y
} from "./chunk-LW5ZVONF.js";
import {
  e
} from "./chunk-C6P3JIAK.js";
import {
  P,
  Z,
  _,
  o
} from "./chunk-YM62CGUL.js";
import {
  j
} from "./chunk-D4W5U2I5.js";
import {
  N,
  m,
  s as s2
} from "./chunk-MLBRAI7B.js";
import {
  M,
  s
} from "./chunk-ZILR7JK7.js";

// node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
function g(r = B) {
  return [r[0], r[1], r[2], r[3]];
}
function q(r, t, n = g()) {
  return o(k(n), r), n[3] = t, n;
}
function v2(r, t, n) {
  return P(n, r, t), _(n, n), n[3] = -Z(r, t), n;
}
function y2(r, o2 = g()) {
  const i = j(C, r);
  return A(o2, M(I(o2, i))), o2;
}
function U(r, n, c = g()) {
  return y(C, k(r), z(r)), y(D, k(n), z(n)), v(C, D, C), A(c, M(I(k(c), C)));
}
function d(r, t, n, o2 = g()) {
  return q(s2, r, F), q(m, t, G), q(N, n, H), U(F, G, F), U(F, H, o2), o2;
}
function k(r) {
  return r;
}
function w(r) {
  return r[3];
}
function z(t) {
  return s(t[3]);
}
function A(r, t) {
  return r[3] = t, r;
}
var B = [0, 0, 1, 0];
var C = e();
var D = e();
var E = g();
var F = g();
var G = g();
var H = g();

export {
  g,
  q,
  v2 as v,
  y2 as y,
  d,
  k,
  w,
  z,
  B
};
//# sourceMappingURL=chunk-Z2AEQM3R.js.map
