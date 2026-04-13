import {
  s as s3
} from "./chunk-RTWZV6QR.js";
import {
  M,
  l,
  r,
  s
} from "./chunk-ZILR7JK7.js";
import {
  A,
  G,
  H,
  I,
  T as T2,
  re,
  w
} from "./chunk-DHNLUBWZ.js";
import {
  e,
  s as s2,
  t
} from "./chunk-EWPZDMTE.js";
import {
  O,
  P,
  T,
  k
} from "./chunk-4X5LQ2UO.js";

// node_modules/@arcgis/core/geometry/projection/projectors.js
var w2 = { 2: { 5: F, 7: null, 9: null, 10: F, 1: H2, 6: null, 8: null, 0: null, 3: W, 11: b, 2: F, 4: X }, 5: { 5: F, 7: null, 9: null, 10: F, 1: H2, 6: null, 8: null, 0: null, 3: W, 11: b, 2: F, 4: X }, 7: { 5: null, 7: F, 9: null, 10: F, 1: null, 6: D, 8: null, 0: null, 3: null, 11: null, 2: null, 4: null }, 9: { 5: null, 7: null, 9: F, 10: F, 1: null, 6: null, 8: B, 0: null, 3: null, 11: null, 2: null, 4: null }, 3: { 5: S, 7: null, 9: null, 10: S, 1: j, 6: null, 8: null, 0: null, 3: F, 11: U, 2: S, 4: q }, 4: { 5: Y, 7: null, 9: null, 10: Y, 1: Z, 6: null, 8: null, 0: null, 3: $, 11: G2, 2: Y, 4: F }, 1: { 5: N, 7: null, 9: null, 10: N, 1: F, 6: null, 8: null, 0: null, 3: O2, 11: x, 2: N, 4: Q }, 6: { 5: null, 7: L, 9: null, 10: L, 1: null, 6: F, 8: null, 0: null, 3: null, 11: null, 2: null, 4: null }, 8: { 5: null, 7: null, 9: K, 10: K, 1: null, 6: null, 8: F, 0: null, 3: null, 11: null, 2: null, 4: null }, 0: { 5: null, 7: null, 9: null, 10: null, 1: null, 6: null, 8: null, 0: F, 3: null, 11: null, 2: null, 4: null }, 10: { 5: F, 7: F, 9: F, 10: F, 1: H2, 6: D, 8: B, 0: null, 3: W, 11: b, 2: F, 4: X }, 11: { 5: k2, 7: null, 9: null, 10: k2, 1: y, 6: null, 8: null, 0: null, 3: A2, 11: F, 2: k2, 4: v } };
function C(n, l2) {
  return I2(n, l2)?.projector;
}
function I2(n, l2) {
  if (null == n || null == l2) return null;
  if (_.source.spatialReference === n && _.dest.spatialReference === l2) return _;
  const e2 = T3(n, _.source), t2 = T3(l2, _.dest);
  return 0 === e2 && 0 === t2 ? T(n, l2) ? _.projector = F : _.projector = null : _.projector = w2[e2][t2], _;
}
function T3(n, l2) {
  return n ? l2.spatialReference === n ? l2.spatialReferenceId : (l2.spatialReference = n, "metersPerUnit" in l2 && (l2.metersPerUnit = re(n, 1)), A(n) ? l2.spatialReferenceId = 1 : P(n) ? l2.spatialReferenceId = 2 : O(n) ? l2.spatialReferenceId = 3 : k(n) ? l2.spatialReferenceId = 11 : n.wkt === I.wkt ? l2.spatialReferenceId = 4 : 4490 === n.wkid ? l2.spatialReferenceId = 5 : n.wkt === T2.wkt ? l2.spatialReferenceId = 6 : n.wkt === G.wkt ? l2.spatialReferenceId = 8 : H(n) ? l2.spatialReferenceId = 7 : w(n) ? l2.spatialReferenceId = 9 : l2.spatialReferenceId = 0) : 0;
}
function F(n, l2, e2, t2) {
  n !== e2 && (e2[t2++] = n[l2++], e2[t2++] = n[l2++], e2[t2] = n[l2] ?? 0);
}
function S(n, l2, e2, t2) {
  e2[t2] = ln * (n[l2] / tn), e2[t2 + 1] = ln * (en - 2 * Math.atan(Math.exp(-n[l2 + 1] / tn))), e2[t2 + 2] = n[l2 + 2] ?? 0;
}
function j(n, l2, e2, t2) {
  const r2 = n[l2] / tn, u = en - 2 * Math.atan(Math.exp(-n[l2 + 1] / tn)), a = tn + (n[l2 + 2] ?? 0), c = Math.cos(u) * a;
  e2[t2] = Math.cos(r2) * c, e2[t2 + 1] = Math.sin(r2) * c, e2[t2 + 2] = Math.sin(u) * a;
}
function q(n, l2, e2, t2) {
  S(n, l2, e2, t2), X(e2, t2, e2, t2);
}
function g(l2, e2, t2, r2, u) {
  const a = 0.4999999 * Math.PI, c = r(nn * l2[e2 + 1], -a, a), s4 = Math.sin(c);
  t2[r2++] = nn * l2[e2] * u.radius, t2[r2++] = u.halfSemiMajorAxis * Math.log((1 + s4) / (1 - s4)), t2[r2] = l2[e2 + 2] ?? 0;
}
function W(n, l2, e2, t2) {
  g(n, l2, e2, t2, t);
}
function b(n, l2, e2, t2) {
  e2[t2] = n[l2] * rn, e2[t2 + 1] = n[l2 + 1] * rn, e2[t2 + 2] = n[l2 + 2] ?? 0;
}
function k2(n, l2, e2, t2) {
  e2[t2] = n[l2] * un, e2[t2 + 1] = n[l2 + 1] * un, e2[t2 + 2] = n[l2 + 2] ?? 0;
}
function U(n, l2, e2, t2) {
  S(n, l2, e2, t2), b(e2, t2, e2, t2);
}
function G2(n, l2, e2, t2) {
  Y(n, l2, e2, t2), b(e2, t2, e2, t2);
}
function x(n, l2, e2, t2) {
  N(n, l2, e2, t2), b(e2, t2, e2, t2);
}
function y(n, l2, e2, t2) {
  k2(n, l2, e2, t2), H2(e2, t2, e2, t2);
}
function A2(n, l2, e2, t2) {
  k2(n, l2, e2, t2), W(e2, t2, e2, t2);
}
function v(n, l2, e2, t2) {
  k2(n, l2, e2, t2), X(e2, t2, e2, t2);
}
function z(n, l2, e2, t2, r2) {
  const u = r2 + (n[l2 + 2] ?? 0), a = nn * n[l2], c = nn * n[l2 + 1], s4 = Math.cos(c) * u;
  e2[t2] = Math.cos(a) * s4, e2[t2 + 1] = Math.sin(a) * s4, e2[t2 + 2] = Math.sin(c) * u;
}
function B(n, l2, e2, t2) {
  z(n, l2, e2, t2, s2.radius);
}
function D(n, l2, e2, t2) {
  z(n, l2, e2, t2, e.radius);
}
function H2(n, l2, e2, t2) {
  z(n, l2, e2, t2, t.radius);
}
function J(n, l2, e2, r2, u) {
  const a = n[l2], c = n[l2 + 1], s4 = n[l2 + 2] ?? 0, o2 = Math.sqrt(a * a + c * c + s4 * s4), i = l(s4 / (0 === o2 ? 1 : o2)), f = Math.atan2(c, a);
  e2[r2++] = ln * f, e2[r2++] = ln * i, e2[r2] = o2 - u;
}
function K(n, l2, e2, t2) {
  J(n, l2, e2, t2, s2.radius);
}
function L(n, l2, e2, t2) {
  J(n, l2, e2, t2, e.radius);
}
function N(n, l2, e2, t2) {
  J(n, l2, e2, t2, t.radius);
}
function O2(n, l2, e2, t2) {
  N(n, l2, e2, t2), W(e2, t2, e2, t2);
}
function Q(n, l2, e2, t2) {
  N(n, l2, e2, t2), X(e2, t2, e2, t2);
}
function V(n, l2, e2, t2, r2) {
  const u = nn * n[l2], a = nn * n[l2 + 1], c = n[l2 + 2] ?? 0, s4 = Math.sin(a), o2 = Math.cos(a), i = r2.radius / Math.sqrt(1 - r2.eccentricitySquared * s4 * s4);
  e2[t2++] = (i + c) * o2 * Math.cos(u), e2[t2++] = (i + c) * o2 * Math.sin(u), e2[t2++] = (i * (1 - r2.eccentricitySquared) + c) * s4;
}
function X(n, l2, e2, t2) {
  V(n, l2, e2, t2, t);
}
function Y(n, l2, e2, t2) {
  const r2 = s3, u = n[l2], a = n[l2 + 1], c = n[l2 + 2] ?? 0;
  let s4, o2, i, f, p, d, E, R, m, w3, C2, I3, P2, T4, F2, S2, j2, q2, g2, W2, b2;
  s4 = Math.abs(c), o2 = u * u + a * a, i = Math.sqrt(o2), f = o2 + c * c, p = Math.sqrt(f), W2 = Math.atan2(a, u), d = c * c / f, E = o2 / f, T4 = r2.a2 / p, F2 = r2.a3 - r2.a4 / p, E > 0.3 ? (R = s4 / p * (1 + E * (r2.a1 + T4 + d * F2) / p), g2 = Math.asin(R), w3 = R * R, m = Math.sqrt(1 - w3)) : (m = i / p * (1 - d * (r2.a5 - T4 - E * F2) / p), g2 = Math.acos(m), w3 = 1 - m * m, R = Math.sqrt(w3)), C2 = 1 - t.eccentricitySquared * w3, I3 = t.radius / Math.sqrt(C2), P2 = r2.a6 * I3, T4 = i - I3 * m, F2 = s4 - P2 * R, j2 = m * T4 + R * F2, S2 = m * F2 - R * T4, q2 = S2 / (P2 / C2 + j2), g2 += q2, b2 = j2 + S2 * q2 / 2, c < 0 && (g2 = -g2), e2[t2++] = ln * W2, e2[t2++] = ln * g2, e2[t2] = b2;
}
function Z(n, l2, e2, t2) {
  Y(n, l2, e2, t2), H2(e2, t2, e2, t2);
}
function $(n, l2, e2, t2) {
  Y(n, l2, e2, t2), W(e2, t2, e2, t2);
}
var _ = { source: { spatialReference: null, spatialReferenceId: 0, metersPerUnit: 1 }, dest: { spatialReference: null, spatialReferenceId: 0, metersPerUnit: 1 }, projector: F };
var nn = s(1);
var ln = M(1);
var en = 0.5 * Math.PI;
var tn = t.radius;
var rn = tn * Math.PI / 180;
var un = 180 / (tn * Math.PI);

// node_modules/@arcgis/core/geometry/projection/projectBuffer.js
function o(o2, n, e2, f, l2, u, c = Math.floor(o2.length / 3)) {
  const i = C(n, l2);
  if (null == i) return false;
  if (i === F) {
    if (o2 === f && e2 === u) return true;
    const r2 = e2 + 3 * c;
    for (let t2 = e2, n2 = u; t2 < r2; t2++, n2++) f[n2] = o2[t2] ?? 0;
    return true;
  }
  const s4 = e2 + 3 * c;
  for (let r2 = e2, t2 = u; r2 < s4; r2 += 3, t2 += 3) i(o2, r2, f, t2);
  return true;
}

export {
  w2 as w,
  C,
  I2 as I,
  g,
  J,
  o
};
//# sourceMappingURL=chunk-XASC6DGR.js.map
