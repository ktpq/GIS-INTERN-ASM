import {
  a as a2,
  t as t2
} from "./chunk-GSWONWCV.js";
import {
  o as o2
} from "./chunk-53OZ2LR7.js";
import {
  a as a3,
  d,
  n as n6,
  r as r2
} from "./chunk-NZKVNPZ3.js";
import {
  f as f2
} from "./chunk-VLXEOEMU.js";
import {
  n as n5
} from "./chunk-DZ6LTFHJ.js";
import {
  U as U2,
  v
} from "./chunk-GDMLFOX7.js";
import {
  E,
  N as N2,
  _,
  e as e3,
  y
} from "./chunk-SGNC5H35.js";
import {
  a,
  u
} from "./chunk-5TEEMD4W.js";
import {
  B,
  c,
  f,
  h as h2,
  n as n4
} from "./chunk-IRS5H2YE.js";
import {
  o
} from "./chunk-JL3Z5SD5.js";
import {
  n as n3
} from "./chunk-KEY3YQEB.js";
import {
  e as e2,
  r
} from "./chunk-XNNZ2U24.js";
import {
  j,
  n as n2
} from "./chunk-6U5MFJUS.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  h
} from "./chunk-ONXOVX4W.js";
import {
  H,
  N,
  U,
  ce,
  w
} from "./chunk-NR66QFNF.js";
import {
  t
} from "./chunk-FZD4GVUW.js";
import {
  C
} from "./chunk-LANOLZOB.js";
import {
  P,
  T,
  s
} from "./chunk-253Z6EVN.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var E2 = "Projection may be possible after calling projection.load().";
function M(r3, t3, o3, e4) {
  r3.error(`Failed to project from (wkid:${t3.wkid}) to (wkid:${o3.wkid}).${e4 ? " " : ""}${e4}`);
}
function w2(r3, t3, o3, e4, n7, i) {
  return S(0, U2.fromTypedArray(r3), 0, v.fromTypedArray(t3), o3, v.fromTypedArray(e4), n7, U2.fromTypedArray(i)) ? i : null;
}
function x(r3, t3, o3, e4, n7, i) {
  return S(1, U2.fromTypedArray(r3), 0, v.fromTypedArray(t3), o3, v.fromTypedArray(e4), n7, U2.fromTypedArray(i)) ? i : null;
}
function V(r3, t3, o3, e4) {
  return o(r3, t3, 0, o3, e4, 0) ? o3 : null;
}
function k(r3, t3, o3, e4) {
  return o(r3, t3, 0, o3, e4, 0) ? o3 : null;
}
function v2(t3, e4, n7) {
  return j(z, n7), n6(e4, t3, z), T(z) && d(e4, e4), e4;
}
function B2(t3, o3, n7) {
  return n2(z, n7), o2(o3, t3, z), T(z) && d(o3, o3, 4), o3;
}
function R(r3, o3, e4, n7) {
  const i = 0 === o3;
  return $(r3, o3, e4, (r4, o4) => {
    const e5 = Math.cos(s(r4));
    o4[0] = i ? e5 : 1 / e5, o4[1] = 1;
  }, n7);
}
function U3(r3, t3, o3, e4) {
  const n7 = 0 === t3;
  return $(r3, t3, o3, (r4, t4) => {
    const o4 = Math.cosh(-r4 / t.radius);
    t4[0] = 1, t4[1] = n7 ? o4 : 1 / o4;
  }, e4);
}
function $(r3, t3, o3, e4, n7) {
  const i = 0 === t3 ? 3 : 4, f3 = [0, 0];
  for (let a4 = 0, m = 1; a4 < r3.length; a4 += i, m += 3) {
    e4(o3[m], f3);
    const t4 = r3[a4] * f3[0], s2 = r3[a4 + 1] * f3[1], c2 = r3[a4 + 2], l = 1 / Math.sqrt(t4 * t4 + s2 * s2 + c2 * c2);
    n7[a4] = t4 * l, n7[a4 + 1] = s2 * l, n7[a4 + 2] = c2 * l, 4 === i && (n7[a4 + 3] = r3[a4 + 3]);
  }
  return n7;
}
function _2(r3, t3, o3, e4, n7, i) {
  if (!S(0, U2.fromTypedArray(r3, 4 * Float32Array.BYTES_PER_ELEMENT), 1, v.fromTypedArray(t3), o3, v.fromTypedArray(e4), n7, U2.fromTypedArray(i, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let f3 = 3; f3 < r3.length; f3 += 4) i[f3] = r3[f3];
  return i;
}
function F(r3, t3, o3, e4, n7, i) {
  if (!S(1, U2.fromTypedArray(r3, 16), 1, v.fromTypedArray(t3), o3, v.fromTypedArray(e4), n7, U2.fromTypedArray(i, 16))) return null;
  for (let f3 = 3; f3 < r3.length; f3 += 4) i[f3] = r3[f3];
  return i;
}
function P2(r3, t3, n7, f3, a4) {
  switch (f2(f3, n7, q, f3), 1 === r3 && h2(q, q), t3) {
    case 0:
      return j(a4, q);
    case 1:
      return n2(a4, q);
  }
}
function S(r3, t3, o3, e4, n7, i, f3, s2) {
  if (!t3) return;
  const c2 = e4.count;
  if (L(n7)) for (let m = 0; m < c2; m++) i.getVec(m, N3), t3.getVec(m, Y), N2(Y, Y, P2(r3, o3, N3, f3, z)), s2.setVec(m, Y);
  else for (let l = 0; l < c2; l++) {
    i.getVec(l, N3), t3.getVec(l, Y);
    const n8 = h(e4.get(l, 1));
    let c3 = Math.cos(n8);
    1 === o3 != (0 === r3) && (c3 = 1 / c3), P2(r3, o3, N3, f3, z), 0 === r3 ? (z[0] *= c3, z[1] *= c3, z[2] *= c3, z[3] *= c3, z[4] *= c3, z[5] *= c3) : (z[0] *= c3, z[3] *= c3, z[6] *= c3, z[1] *= c3, z[4] *= c3, z[7] *= c3), N2(Y, Y, z), _(Y, Y), s2.setVec(l, Y);
  }
  return s2;
}
function L(r3) {
  return r3.isWGS84 || C(r3) || H(r3) || w(r3);
}
var N3 = n3();
var Y = n3();
var q = e2();
var z = e();

// node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var O = () => n.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function P3(t3, n7, { vertexSpace: r3, spatialReference: e4 }) {
  if ("georeferenced" === r3.type) {
    const o4 = t3;
    if (!n5(n7, o4, e4)) return false;
    const { origin: i2 } = r3;
    return e3(t3, o4, i2), true;
  }
  const o3 = u(e4), i = t3;
  if (!n5(n7, i, o3)) return false;
  const { origin: l } = r3, a4 = lt;
  if (!f2(e4, l, a4, o3)) return false;
  const c2 = h2(lt, a4);
  return null != c2 && (E(t3, i, c2), true);
}
function q2(t3, n7, r3) {
  const { vertexSpace: e4, transform: o3, vertexAttributes: i } = t3, a4 = t2(e4) ? o3 : null, s2 = Y2(t3.spatialReference, r3, 3);
  if (a2(e4, n7) && (!a4 || B(a4.localMatrix, r)) && Z(s2)) {
    const { position: t4, normal: n8, tangent: e5 } = i, o4 = r3?.allowBufferReuse;
    return { position: o4 ? t4 : t4.slice(), normal: o4 ? n8 : n8?.slice(), tangent: o4 ? e5 : e5?.slice() };
  }
  switch (t3.vertexSpace.type) {
    case "local":
      return "local" === n7.type ? J(t3, t3.vertexSpace, n7.origin, r3) : G(t3, t3.vertexSpace, n7.origin, r3);
    case "georeferenced":
      return "local" === n7.type ? H2(t3, t3.vertexSpace, n7.origin, r3) : z2(t3, t3.vertexSpace, n7.origin, r3);
  }
}
function z2({ vertexAttributes: t3, transform: n7, spatialReference: r3 }, { origin: e4 }, o3, i) {
  const l = Y2(r3, i, 3), a4 = e4 || !Z(l) ? n4(rt, n7?.localMatrix ?? r) : null;
  a4 && X(a4, r3, i, 3);
  const { position: s2, normal: u2, tangent: m } = a4 ? K(t3, a4) : t3, g = i?.allowBufferReuse, x2 = g ? s2 : new Float64Array(s2.length);
  let h3 = s2;
  if (e4 && (h3 = a3(x2, h3, e4)), o3) {
    const t4 = y(it, o3);
    h3 = a3(x2, h3, t4);
  }
  return { position: h3 !== t3.position || g ? h3 : h3.slice(), normal: u2 !== t3.normal || g ? u2 : u2?.slice(), tangent: m !== t3.tangent || g ? m : m?.slice() };
}
function D(t3, n7) {
  return n7?.useEllipsoid && U(t3) ? a : u(t3);
}
function G({ spatialReference: t3, vertexAttributes: n7, transform: r3 }, { origin: e4 }, o3, i) {
  const l = D(t3, i);
  if (!f2(t3, e4, rt, l)) return M(O(), t3, l), null;
  r3 && c(rt, rt, r3.localMatrix), X(rt, t3, i, 1);
  const a4 = new Float64Array(n7.position.length), s2 = N4(n7.position, rt, t3, a4, l);
  if (!s2) return null;
  const c2 = Q(s2, t3, a4, l, n7.normal, rt);
  if (n7.normal && !c2) return null;
  const f3 = W(s2, t3, a4, l, n7.tangent, rt);
  if (n7.tangent && !f3) return null;
  if (o3) {
    const t4 = y(it, o3);
    a3(s2, s2, t4);
  }
  return { position: s2, normal: c2, tangent: f3 };
}
function H2({ vertexAttributes: t3, spatialReference: n7, transform: r3 }, { origin: e4 }, i, l) {
  const c2 = D(n7, l);
  if (!f2(n7, i, rt, c2)) return M(O(), n7, c2), null;
  const u2 = 1 / Y2(n7, l, 2);
  f(rt, rt, [u2, u2, u2]);
  const f3 = h2(et, rt), { position: m, normal: p, tangent: g } = I(t3, e4, r3), x2 = new Float64Array(m.length), h3 = $2(m, n7, f3, x2, c2);
  if (!h3) return null;
  const v3 = j(ot, f3), j2 = _3(p, m, n7, x2, c2, v3, p !== t3.normal ? p : void 0);
  if (!j2 && p) return null;
  const A = tt(g, m, n7, x2, c2, v3, g !== t3.tangent ? g : void 0);
  return !A && g ? null : { position: h3, normal: j2, tangent: A };
}
function I(t3, n7, r3) {
  if (!n7) return t3;
  if (!r3) {
    const { position: r4, normal: e5, tangent: o3 } = t3;
    return { position: a3(new Float64Array(r4.length), r4, n7), tangent: o3, normal: e5 };
  }
  const e4 = K(t3, r3.localMatrix);
  return a3(e4.position, e4.position, n7), e4;
}
function J({ vertexAttributes: t3, spatialReference: n7, transform: r3 }, { origin: e4 }, o3, i) {
  const l = D(n7, i);
  if (!f2(n7, e4, rt, l)) return M(O(), n7, l), null;
  if (r3 && c(rt, rt, r3.localMatrix), !f2(n7, o3, et, l)) return M(O(), l, n7), null;
  h2(et, et);
  const a4 = c(rt, et, rt);
  return X(a4, n7, i, 3), K(t3, a4);
}
function K(t3, n7) {
  const r3 = new Float64Array(t3.position.length);
  r2(r3, t3.position, n7);
  const e4 = t3.normal ? new Float32Array(t3.normal.length) : null, o3 = t3.tangent ? new Float32Array(t3.tangent.length) : null;
  return e4 && t3.normal && v2(t3.normal, e4, n7), o3 && t3.tangent && B2(t3.tangent, o3, n7), { position: r3, normal: e4, tangent: o3 };
}
function N4(t3, n7, r3, e4, o3) {
  r2(e4, t3, n7);
  const i = new Float64Array(t3.length);
  return k(e4, o3, i, r3) ? i : (M(O(), o3, r3), null);
}
function Q(t3, n7, r3, e4, o3, i) {
  if (null == o3) return null;
  const l = new Float32Array(o3.length);
  return v2(o3, l, i), x(l, t3, n7, r3, e4, l) ? l : (M(O(), e4, n7), null);
}
function W(t3, n7, r3, e4, o3, i) {
  if (null == o3) return null;
  const l = new Float32Array(o3.length);
  return B2(o3, l, i), F(l, t3, n7, r3, e4, l) ? l : (M(O(), e4, n7), null);
}
function X(t3, n7, r3, e4) {
  const o3 = Y2(n7, r3, e4);
  Z(o3) || f(t3, t3, [o3, o3, o3]);
}
function Y2(t3, n7, r3) {
  const e4 = !!(1 & r3), o3 = !!(2 & r3), i = n7?.sourceUnit, l = n7?.targetUnit;
  if (!i && !l) return 1;
  let a4 = nt(i, t3);
  e4 || !i || Z(a4) || (O().warn("source unit conversion not supported"), a4 = 1);
  let s2 = 1 / nt(l, t3);
  return o3 || !l || Z(s2) || (O().warn("target unit conversion not supported"), s2 = 1), a4 * s2;
}
function Z(t3) {
  return P(t3, 1);
}
function $2(t3, n7, r3, e4, o3) {
  const i = V(t3, n7, e4, o3);
  if (!i) return M(O(), n7, o3), null;
  const l = new Float64Array(i.length);
  return r2(l, i, r3), l;
}
function _3(t3, n7, r3, e4, o3, i, l) {
  if (null == t3) return null;
  const a4 = l ?? new Float32Array(t3.length);
  return w2(t3, n7, r3, e4, o3, a4) ? (n6(a4, a4, i), a4) : (M(O(), r3, o3), null);
}
function tt(t3, n7, r3, e4, o3, i, l) {
  if (null == t3) return null;
  const a4 = l ?? new Float32Array(t3.length);
  return _2(t3, n7, r3, e4, o3, a4) ? (n6(a4, a4, i, 4), a4) : (M(O(), r3, o3), null);
}
function nt(t3, n7) {
  if (null == t3) return 1;
  const o3 = ce(n7);
  return 1 / N(o3, "meters", t3);
}
var rt = e2();
var et = e2();
var ot = e();
var it = n3();
var lt = e2();

export {
  E2 as E,
  M,
  w2 as w,
  x,
  V,
  k,
  v2 as v,
  B2 as B,
  R,
  U3 as U,
  _2 as _,
  F,
  P3 as P,
  q2 as q,
  nt
};
//# sourceMappingURL=chunk-IXW3HBVP.js.map
