import {
  s
} from "./chunk-AGQQQ6D2.js";
import {
  c as c2
} from "./chunk-ZO27FAQA.js";
import {
  A,
  c,
  e,
  j,
  o,
  v,
  x
} from "./chunk-SGNC5H35.js";
import {
  n,
  t
} from "./chunk-KEY3YQEB.js";
import {
  r
} from "./chunk-253Z6EVN.js";

// node_modules/@arcgis/core/geometry/support/lineSegment.js
function v2(t2) {
  return t2 ? { origin: t(t2.origin), vector: t(t2.vector) } : { origin: n(), vector: n() };
}
function m(t2, r2) {
  const n2 = S.get();
  return n2.origin = t2, n2.vector = r2, n2;
}
function p(t2, r2 = v2()) {
  return b(t2.origin, t2.vector, r2);
}
function b(t2, r2, o2 = v2()) {
  return o(o2.origin, t2), o(o2.vector, r2), o2;
}
function h(t2, r2, i = v2()) {
  return o(i.origin, t2), e(i.vector, r2, t2), i;
}
function l(r2, n2) {
  const e2 = e(c2.get(), n2, r2.origin), g = A(r2.vector, e2), s2 = A(r2.vector, r2.vector), u = r(g / s2, 0, 1), a = e(c2.get(), x(c2.get(), r2.vector, u), e2);
  return A(a, a);
}
function M(t2, r2, n2) {
  return A2(t2, r2, 0, 1, n2);
}
function j2(t2, r2, n2) {
  return c(n2, t2.origin, x(n2, t2.vector, r2));
}
function A2(r2, n2, s2, u, a) {
  const { vector: v3, origin: m2 } = r2, p2 = e(c2.get(), n2, m2), b2 = A(v3, p2) / j(v3);
  return x(a, v3, r(b2, s2, u)), c(a, a, r2.origin);
}
function B(t2, r2) {
  if (x2(t2, m(r2.origin, r2.direction), false, k)) {
    const { tA: r3, pB: n2, distance2: o2 } = k;
    if (r3 >= 0 && r3 <= 1) return o2;
    if (r3 < 0) return v(t2.origin, n2);
    if (r3 > 1) return v(c(c2.get(), t2.origin, t2.vector), n2);
  }
  return null;
}
function d(t2, r2, o2) {
  return !!x2(t2, r2, true, k) && (o(o2, k.pA), true);
}
function x2(r2, n2, o2, i) {
  const e2 = 1e-6, c3 = r2.origin, u = c(c2.get(), c3, r2.vector), a = n2.origin, v3 = c(c2.get(), a, n2.vector), m2 = c2.get(), p2 = c2.get();
  if (m2[0] = c3[0] - a[0], m2[1] = c3[1] - a[1], m2[2] = c3[2] - a[2], p2[0] = v3[0] - a[0], p2[1] = v3[1] - a[1], p2[2] = v3[2] - a[2], Math.abs(p2[0]) < e2 && Math.abs(p2[1]) < e2 && Math.abs(p2[2]) < e2) return false;
  const b2 = c2.get();
  if (b2[0] = u[0] - c3[0], b2[1] = u[1] - c3[1], b2[2] = u[2] - c3[2], Math.abs(b2[0]) < e2 && Math.abs(b2[1]) < e2 && Math.abs(b2[2]) < e2) return false;
  const h2 = m2[0] * p2[0] + m2[1] * p2[1] + m2[2] * p2[2], l2 = p2[0] * b2[0] + p2[1] * b2[1] + p2[2] * b2[2], M2 = m2[0] * b2[0] + m2[1] * b2[1] + m2[2] * b2[2], j3 = p2[0] * p2[0] + p2[1] * p2[1] + p2[2] * p2[2], A3 = (b2[0] * b2[0] + b2[1] * b2[1] + b2[2] * b2[2]) * j3 - l2 * l2;
  if (Math.abs(A3) < e2) return false;
  let B2 = (h2 * l2 - M2 * j3) / A3, d2 = (h2 + l2 * B2) / j3;
  o2 && (B2 = r(B2, 0, 1), d2 = r(d2, 0, 1));
  const x3 = c2.get(), k2 = c2.get();
  return x3[0] = c3[0] + B2 * b2[0], x3[1] = c3[1] + B2 * b2[1], x3[2] = c3[2] + B2 * b2[2], k2[0] = a[0] + d2 * p2[0], k2[1] = a[1] + d2 * p2[1], k2[2] = a[2] + d2 * p2[2], i.tA = B2, i.tB = d2, i.pA = x3, i.pB = k2, i.distance2 = v(x3, k2), true;
}
var k = { tA: 0, tB: 0, pA: n(), pB: n(), distance2: 0 };
var S = new s(() => v2());

export {
  v2 as v,
  m,
  p,
  b,
  h,
  l,
  M,
  j2 as j,
  A2 as A,
  B,
  d
};
//# sourceMappingURL=chunk-3GPHIYF3.js.map
