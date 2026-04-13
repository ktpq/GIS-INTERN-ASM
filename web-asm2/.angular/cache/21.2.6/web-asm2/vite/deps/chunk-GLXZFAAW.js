import {
  e
} from "./chunk-DH7E4OJC.js";
import {
  u
} from "./chunk-SLHRVNEB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";

// node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
function a(n) {
  return n;
}
function i(n = U) {
  return a([n[0], n[1], n[2], n[3], n[4], n[5]]);
}
function u2(n, t, r, a2, u3, e2, m2 = i()) {
  return m2[0] = n, m2[1] = t, m2[2] = r, m2[3] = a2, m2[4] = u3, m2[5] = e2, m2;
}
function m(n, t = i()) {
  return o(n, 0, n.length / 3, t);
}
function o(n, t, r, a2 = i()) {
  return q(a2, Q), N(a2, n, t, r), a2;
}
function f(n, t = e(24)) {
  const [a2, i2, u3, e2, m2, o2] = n;
  return t[0] = a2, t[1] = i2, t[2] = u3, t[3] = a2, t[4] = i2, t[5] = o2, t[6] = a2, t[7] = m2, t[8] = u3, t[9] = a2, t[10] = m2, t[11] = o2, t[12] = e2, t[13] = i2, t[14] = u3, t[15] = e2, t[16] = i2, t[17] = o2, t[18] = e2, t[19] = m2, t[20] = u3, t[21] = e2, t[22] = m2, t[23] = o2, t;
}
function h(t, r) {
  const a2 = isFinite(t[2]) || isFinite(t[5]);
  return new z(a2 ? { xmin: t[0], xmax: t[3], ymin: t[1], ymax: t[4], zmin: t[2], zmax: t[5], spatialReference: r } : { xmin: t[0], xmax: t[3], ymin: t[1], ymax: t[4], spatialReference: r });
}
function M(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[3]), n[4] = Math.max(n[4], t[4]), n[5] = Math.max(n[5], t[5]);
}
function x(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[3] = Math.max(n[3], t[2]), n[4] = Math.max(n[4], t[3]);
}
function l(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[0]), n[4] = Math.max(n[4], t[1]), n[5] = Math.max(n[5], t[2]);
}
function N(n, t, r = 0, a2 = t.length / 3) {
  let i2 = n[0], u3 = n[1], e2 = n[2], m2 = n[3], o2 = n[4], f2 = n[5];
  for (let h2 = 0; h2 < a2; h2++) i2 = Math.min(i2, t[r + 3 * h2]), u3 = Math.min(u3, t[r + 3 * h2 + 1]), e2 = Math.min(e2, t[r + 3 * h2 + 2]), m2 = Math.max(m2, t[r + 3 * h2]), o2 = Math.max(o2, t[r + 3 * h2 + 1]), f2 = Math.max(f2, t[r + 3 * h2 + 2]);
  n[0] = i2, n[1] = u3, n[2] = e2, n[3] = m2, n[4] = o2, n[5] = f2;
}
function y(n, t, r) {
  const a2 = t.length;
  let i2 = n[0], u3 = n[1], e2 = n[2], m2 = n[3], o2 = n[4], f2 = n[5];
  if (r) for (let h2 = 0; h2 < a2; h2++) {
    const n2 = t[h2];
    i2 = Math.min(i2, n2[0]), u3 = Math.min(u3, n2[1]), e2 = Math.min(e2, n2[2]), m2 = Math.max(m2, n2[0]), o2 = Math.max(o2, n2[1]), f2 = Math.max(f2, n2[2]);
  }
  else for (let h2 = 0; h2 < a2; h2++) {
    const n2 = t[h2];
    i2 = Math.min(i2, n2[0]), u3 = Math.min(u3, n2[1]), m2 = Math.max(m2, n2[0]), o2 = Math.max(o2, n2[1]);
  }
  n[0] = i2, n[1] = u3, n[2] = e2, n[3] = m2, n[4] = o2, n[5] = f2;
}
function T(n) {
  for (let t = 0; t < 6; t++) if (!isFinite(n[t])) return false;
  return true;
}
function g(n) {
  return n[0] >= n[3] ? 0 : n[3] - n[0];
}
function E(n) {
  return n[1] >= n[4] ? 0 : n[4] - n[1];
}
function F(n) {
  return n[2] >= n[5] ? 0 : n[5] - n[2];
}
function b(n) {
  const t = g(n), r = F(n), a2 = E(n);
  return Math.sqrt(t * t + r * r + a2 * a2);
}
function p(n, t = [0, 0, 0]) {
  return t[0] = n[0] + g(n) / 2, t[1] = n[1] + E(n) / 2, t[2] = n[2] + F(n) / 2, t;
}
function z2(n, t = [0, 0, 0]) {
  return t[0] = g(n), t[1] = E(n), t[2] = F(n), t;
}
function Y(n, t) {
  return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[0] <= n[3] && t[1] <= n[4] && t[2] <= n[5];
}
function A(n, t) {
  return Math.max(t[0], n[0]) <= Math.min(t[3], n[3]) && Math.max(t[1], n[1]) <= Math.min(t[4], n[4]) && Math.max(t[2], n[2]) <= Math.min(t[5], n[5]);
}
function R(n, t) {
  return null == t || A(n, t);
}
function O(n, t, r, a2, i2 = n) {
  return i2[0] = n[0] + t, i2[1] = n[1] + r, i2[2] = n[2] + a2, i2[3] = n[3] + t, i2[4] = n[4] + r, i2[5] = n[5] + a2, i2;
}
function P(n, t, r = n) {
  const a2 = n[0] + g(n) / 2, i2 = n[1] + E(n) / 2, u3 = n[2] + F(n) / 2;
  return r[0] = a2 + (n[0] - a2) * t, r[1] = i2 + (n[1] - i2) * t, r[2] = u3 + (n[2] - u3) * t, r[3] = a2 + (n[3] - a2) * t, r[4] = i2 + (n[4] - i2) * t, r[5] = u3 + (n[5] - u3) * t, r;
}
function S(n, t) {
  return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
}
function d(n, t, r = n) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r !== n && (r[3] = n[3], r[4] = n[4], r[5] = n[5]), r;
}
function k(n, t, r = n) {
  return r[3] = t[0], r[4] = t[1], r[5] = t[2], r !== n && (r[0] = n[0], r[1] = n[1], r[2] = n[2]), n;
}
function q(n, t) {
  return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
}
function w(n) {
  return n ? q(n, Q) : i(Q);
}
function B(n, r = u()) {
  return r[0] = n[0], r[1] = n[1], r[2] = n[3], r[3] = n[4], r;
}
function D(n, t) {
  return n[0] = t[0], n[1] = t[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t[2], n[4] = t[3], n[5] = Number.POSITIVE_INFINITY, n;
}
function v(n, t, r, a2, i2) {
  return n[0] = t, n[1] = r, n[2] = Number.NEGATIVE_INFINITY, n[3] = a2, n[4] = i2, n[5] = Number.POSITIVE_INFINITY, n;
}
function C(n) {
  return 6 === n.length;
}
function H(n) {
  return 0 === g(n) && 0 === E(n) && 0 === F(n);
}
function J(n, t, r) {
  if (null == n || null == t) return n === t;
  if (!C(n) || !C(t)) return false;
  if (r) {
    for (let a2 = 0; a2 < n.length; a2++) if (!r(n[a2], t[a2])) return false;
  } else for (let a2 = 0; a2 < n.length; a2++) if (n[a2] !== t[a2]) return false;
  return true;
}
var L = a([-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0]);
var Q = a([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0]);
var U = a([0, 0, 0, 0, 0, 0]);
var W = a([NaN, NaN, NaN, NaN, NaN, NaN]);
var X = i();

export {
  i,
  u2 as u,
  m,
  o,
  f,
  h,
  M,
  x,
  l,
  N,
  y,
  T,
  g,
  E,
  F,
  b,
  p,
  z2 as z,
  Y,
  R,
  O,
  P,
  S,
  d,
  k,
  q,
  w,
  B,
  D,
  v,
  C,
  H,
  J,
  Q,
  U
};
//# sourceMappingURL=chunk-GLXZFAAW.js.map
