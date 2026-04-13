import {
  e,
  i,
  r as r2,
  s,
  u
} from "./chunk-4F4IE6P5.js";
import {
  e as e2
} from "./chunk-EF6HOWDG.js";
import {
  E,
  f,
  h,
  x
} from "./chunk-SVWIACQP.js";
import {
  b,
  z
} from "./chunk-EFJUSEVJ.js";
import {
  c,
  e as e3,
  i as i2,
  l,
  o
} from "./chunk-QK7JX7UE.js";
import {
  A,
  m,
  r
} from "./chunk-ZILR7JK7.js";

// node_modules/@arcgis/core/geometry/support/curves/mathUtils.js
function r3(n3, t, r4, o3) {
  return n3[0] = t[0] * (1 - o3) + r4[0] * o3, n3[1] = t[1] * (1 - o3) + r4[1] * o3, n3;
}
function o2(n3, r4) {
  return b(n3, r4);
}
function u2(n3, t, r4) {
  const u5 = o2(t, r4);
  if (0 === u5) return o2(t, n3);
  const i5 = (t[0] - n3[0]) * (r4[1] - n3[1]) - (t[1] - n3[1]) * (r4[0] - n3[0]);
  return i5 * i5 / u5;
}
function i3(n3, t, r4, o3, u5) {
  const [i5, c4] = t, [e7, m5] = r4, [a3, f5] = o3, [s4, x4] = u5, h6 = (i5 - e7) * (f5 - x4) - (c4 - m5) * (a3 - s4);
  if (0 === h6) return null;
  const l5 = (i5 * m5 - c4 * e7) * (a3 - s4) - (i5 - e7) * (a3 * x4 - f5 * s4), M2 = (i5 * m5 - c4 * e7) * (f5 - x4) - (c4 - m5) * (a3 * x4 - f5 * s4);
  return n3[0] = l5 / h6, n3[1] = M2 / h6, n3;
}
var c2 = 2 * Math.PI;
function e4(n3, t) {
  const r4 = Math.atan2(n3, t);
  return r4 < 0 ? r4 + c2 : r4;
}
function m2(n3) {
  return Math.abs(n3) % c2;
}
function a(n3) {
  const t = m2(n3);
  return t < Math.PI ? t : c2 - t;
}
function f2(n3, t) {
  return { min: Math.min(n3, t), max: Math.max(n3, t) };
}
function s2(t, r4, o3, u5) {
  if (m(m2(t - r4), 0)) return o3 ? [t, t] : [t, u5 ? t - c2 : t + c2];
  const [i5, e7] = u5 ? [t - c2, t] : [t, t + c2];
  return [t, x2({ min: i5, max: e7 }, r4)];
}
function x2({ min: n3, max: t }, r4) {
  let o3;
  return o3 = t - r4, o3 >= c2 ? (o3 -= o3 % c2, r4 + o3) : (o3 = r4 - n3, o3 >= c2 ? (o3 -= o3 % c2, r4 - o3) : r4);
}
function h2(n3, t) {
  const r4 = x2(n3, t);
  return r4 > n3.min && r4 < n3.max ? r4 : a(r4 - n3.min) < a(r4 - n3.max) ? n3.min : n3.max;
}
function l2(n3, t, r4, o3 = 10) {
  return t.map((t2) => {
    let u5 = t2;
    for (let i5 = 0; i5 < o3; i5++) {
      const [t3, o4, i6, c4, e7, m5] = r4(u5), a3 = n3[0] - t3, f5 = n3[1] - o4, s4 = -i6, x4 = -c4;
      u5 += -(2 * a3 * s4 + 2 * f5 * x4) / (2 * s4 * s4 + 2 * a3 * -e7 + 2 * x4 * x4 + 2 * f5 * -m5 || 1e-6);
    }
    return u5;
  });
}

// node_modules/@arcgis/core/geometry/support/curves/lineUtils.js
function s3(s4, i5, n3) {
  const [c4, e7] = s4, [m5, a3] = i5, [f5, h6] = n3, [l5, p3] = [m5 - c4, a3 - e7];
  let u5 = l5 * (f5 - c4) + p3 * (h6 - e7);
  u5 /= l5 ** 2 + p3 ** 2, u5 = isNaN(u5) ? 0 : r(u5, 0, 1);
  const j2 = r3([0, 0], s4, i5, u5);
  return { t: u5, curvePoint: j2, distance: Math.sqrt(o2(j2, n3)) };
}

// node_modules/@arcgis/core/geometry/support/curves/circleUtils.js
var c3 = class {
  constructor(t, n3, i5, a3, r4, s4) {
    this.cx = t, this.cy = n3, this.radius = i5, this.thetaStart = a3, this.thetaEnd = r4, this.isInvalid = s4;
  }
  get startPoint() {
    const { cx: t, cy: n3, radius: i5, thetaStart: a3 } = this;
    return [t + i5 * Math.cos(a3), n3 + i5 * Math.sin(a3)];
  }
  get endPoint() {
    const { cx: t, cy: n3, radius: i5, thetaEnd: a3 } = this;
    return [t + i5 * Math.cos(a3), n3 + i5 * Math.sin(a3)];
  }
};
function e5(t, n3) {
  const { cx: i5, cy: a3, radius: r4 } = t;
  return [i5 + r4 * Math.cos(n3), a3 + r4 * Math.sin(n3)];
}
function h3(t, n3) {
  if (t.isInvalid) return r3([0, 0], t.startPoint, t.endPoint, n3);
  const { thetaStart: i5, thetaEnd: r4 } = t;
  return e5(t, i5 * (1 - n3) + r4 * n3);
}
function u3(t, a3) {
  if (t.isInvalid) return s3(t.startPoint, t.endPoint, a3);
  const { cx: o3, cy: c4, thetaStart: h6, thetaEnd: u5 } = t, [d4, f5] = a3, l5 = h2(f2(h6, u5), Math.atan2(f5 - c4, d4 - o3)), M2 = e5(t, l5);
  return { t: (l5 - h6) / (u5 - h6), curvePoint: M2, distance: Math.sqrt(o2(a3, M2)) };
}
function d(n3, a3) {
  if (a3.isInvalid) return f(n3, a3.startPoint), f(n3, a3.endPoint), n3;
  const { cx: r4, cy: s4, radius: c4, thetaStart: h6, thetaEnd: u5 } = a3;
  f(n3, e5(a3, h6)), f(n3, e5(a3, u5));
  const d4 = f2(h6, u5), f5 = Math.PI / 2;
  let l5 = 0;
  for (const i5 of [[r4 + c4, s4], [r4, s4 + c4], [r4 - c4, s4], [r4, s4 - c4]]) l5 = x2(d4, l5), l5 > d4.min && l5 < d4.max && f(n3, i5), l5 += f5;
  return n3;
}
function f3(t) {
  if (t.isInvalid) return 2 * t.radius;
  const { radius: n3, thetaStart: i5, thetaEnd: a3 } = t;
  return n3 * Math.abs(a3 - i5);
}

// node_modules/@arcgis/core/geometry/support/curves/circularArcUtils.js
var e6 = e2();
function m3(r4, c4, i5) {
  const [o3, a3] = r4, [m5, l5] = c4, [u5, f5] = i5;
  r2(e6, o3, m5, u5, a3, l5, f5, 1, 1, 1);
  const h6 = e(e6), M2 = 4 * h6 / (o2(r4, c4) + o2(c4, i5) + o2(i5, r4));
  if (!isFinite(M2) || Math.abs(M2) < 1e-8) return null;
  const p3 = o3 ** 2 + a3 ** 2, b4 = m5 ** 2 + l5 ** 2, j2 = u5 ** 2 + f5 ** 2;
  r2(e6, p3, b4, j2, a3, l5, f5, 1, 1, 1);
  const x4 = e(e6);
  r2(e6, p3, b4, j2, o3, m5, u5, 1, 1, 1);
  return [x4 / h6 * 0.5, e(e6) / h6 * -0.5];
}
function l3(t, n3) {
  const [r4, i5] = n3.c, s4 = m3(t, i5, r4), e7 = null == s4, l5 = s4 ?? r3([], t, r4, 0.5), [u5, f5] = t, [h6, M2] = i5, [p3, b4] = r4, [j2, x4] = l5, d4 = u5 - j2, g2 = f5 - x4, I2 = Math.sqrt(d4 * d4 + g2 * g2), P2 = e4(f5 - x4, u5 - j2), U = e4(M2 - x4, h6 - j2);
  let q3 = e4(b4 - x4, p3 - j2);
  return (U - P2) * (q3 - U) < 0 && (q3 += 2 * Math.sign(P2 - q3) * Math.PI), new c3(j2, x4, I2, P2, q3, e7);
}
function u4(t, n3, r4) {
  const c4 = h3(t, r4 / 2), o3 = h3(t, r4), s4 = h3(t, (r4 + 1) / 2);
  return [{ c: [o3, c4] }, { c: [[...n3.c[0]], s4] }];
}
function f4(t, n3) {
  const [r4] = n3.c, { cx: c4, cy: i5, thetaStart: o3, thetaEnd: s4, radius: a3, isInvalid: e7 } = l3(t, n3);
  return { a: [r4, [c4, i5], Math.abs(s4 - o3) < Math.PI ? 1 : 0, o3 > s4 ? 1 : 0, e7 ? o3 : 0, a3, e7 ? 0 : 1] };
}

// node_modules/@arcgis/core/geometry/support/curves/ellipticArc4Utils.js
function h4(r4, h6) {
  const [n3, c4, i5, e7] = h6.a, [m5, M2] = r4, [f5, l5] = n3, [p3, u5] = c4, j2 = m5 - p3, U = M2 - u5, b4 = Math.sqrt(j2 * j2 + U * U), q3 = f5 - p3, x4 = l5 - u5, I2 = Math.sqrt(q3 * q3 + x4 * x4), P2 = 0 === b4 || 0 === I2 || !A(b4, I2), d4 = b4, [w2, y2] = s2(e4(M2 - u5, m5 - p3), Math.atan2(l5 - u5, f5 - p3), i5, e7);
  return new c3(p3, u5, d4, w2, y2, P2);
}
function n(t, a3, o3) {
  const { cx: s4, cy: h6, thetaStart: n3, thetaEnd: c4 } = t, [i5, e7, m5, M2] = a3.a, f5 = n3 * (1 - o3) + c4 * o3;
  return [{ a: [h3(t, o3), [s4, h6], Math.abs(f5 - n3) < Math.PI ? 1 : 0, M2] }, { a: [[...i5], [s4, h6], Math.abs(c4 - f5) < Math.PI ? 1 : 0, M2] }];
}

// node_modules/@arcgis/core/geometry/support/curves/bezierCurveUtils.js
var i4 = [0, 0];
function a2(t) {
  const n3 = 1 - t, o3 = n3 * n3, r4 = t * t;
  return [o3 * n3, 3 * t * o3, 3 * r4 * n3, r4 * t];
}
function h5(t, n3, o3, r4, s4) {
  const [c4, u5, e7, f5] = a2(s4);
  return [t[0] * c4 + n3[0] * u5 + o3[0] * e7 + r4[0] * f5, t[1] * c4 + n3[1] * u5 + o3[1] * e7 + r4[1] * f5];
}
function m4(t, n3, o3, r4, s4) {
  const [c4, u5, e7, f5] = a2(s4);
  return t * c4 + n3 * u5 + o3 * e7 + r4 * f5;
}
function p(t, n3, o3) {
  const r4 = t, [s4, c4, u5] = n3.b;
  return h5(r4, c4, u5, s4, o3);
}
function M(t, n3, o3) {
  const r4 = t, [s4, c4, u5] = n3.b, e7 = r3([0, 0], r4, c4, o3), a3 = r3(i4, c4, u5, o3), h6 = r3([0, 0], u5, s4, o3), m5 = r3([0, 0], e7, a3, o3), p3 = r3([0, 0], a3, h6, o3);
  return [{ b: [r3([], m5, p3, o3), e7, m5] }, { b: [[...s4], p3, h6] }];
}
function b2(o3, r4, s4) {
  const c4 = o3, [u5, f5, i5] = r4.b, a3 = l2(s4, [0.1, 0.5, 0.9], (t) => {
    const n3 = 1 - t, [o4, r5] = h5(c4, f5, i5, u5, t);
    return [o4, r5, 3 * n3 * n3 * (f5[0] - c4[0]) + 6 * n3 * t * (i5[0] - f5[0]) + 3 * t * t * (u5[0] - i5[0]), 3 * n3 * n3 * (f5[1] - c4[1]) + 6 * n3 * t * (i5[1] - f5[1]) + 3 * t * t * (u5[1] - i5[1]), 6 * n3 * (i5[0] - 2 * f5[0] + c4[0]) + 6 * t * (u5[0] - 2 * i5[0] + f5[0]), 6 * n3 * (i5[1] - 2 * f5[1] + c4[1]) + 6 * t * (u5[1] - 2 * i5[1] + f5[1])];
  }).map((t) => Math.min(1, Math.max(0, t)));
  a3.push(0, 1);
  let m5 = 1 / 0;
  const p3 = a3.map((t) => {
    const n3 = h5(c4, f5, i5, u5, t), [o4, r5] = n3, e7 = s4[0] - o4, a4 = s4[1] - r5, p4 = Math.sqrt(e7 * e7 + a4 * a4);
    return m5 = Math.min(p4, m5), { t, curvePoint: n3, distance: p4 };
  }), M2 = [];
  for (const e7 of p3) {
    const { t: o4, distance: r5 } = e7;
    A(r5, m5) && !M2.some(({ t }) => m(t, o4)) && M2.push(e7);
  }
  return M2;
}
function l4(t, n3, u5) {
  const e7 = n3, [f5, i5, a3] = u5.b;
  if (f(t, e7), f(t, f5), E(t, i5[0], i5[1]) && E(t, a3[0], a3[1])) return t;
  for (const o3 of q(e7[0], i5[0], a3[0], f5[0])) o3 > 0 && o3 < 1 && h(t, m4(e7[0], i5[0], a3[0], f5[0], o3));
  for (const o3 of q(e7[1], i5[1], a3[1], f5[1])) o3 > 0 && o3 < 1 && x(t, m4(e7[1], i5[1], a3[1], f5[1], o3));
  return t;
}
function q(t, n3, o3, r4) {
  const s4 = 3 * (3 * (n3 - o3) - t + r4), c4 = 6 * (t - 2 * n3 + o3), u5 = 3 * (n3 - t);
  if (0 === s4) return 0 !== c4 ? [-u5 / c4] : [];
  const e7 = Math.sqrt(c4 * c4 - 4 * s4 * u5);
  return [(-c4 + e7) / (2 * s4), (-c4 - e7) / (2 * s4)];
}
function d2(t, n3, o3) {
  const r4 = 16;
  let s4 = 0, c4 = [n3];
  for (let e7 = 0; e7 < r4; e7++) {
    let n4 = t;
    const r5 = [];
    for (const t2 of c4) r5.push(...M(n4, t2, 0.5)), n4 = t2.b[0];
    c4 = r5, n4 = t, s4 = 0;
    let e8 = 0;
    for (const t2 of c4) {
      const [o4, r6, c5] = t2.b, f5 = Math.sqrt(o2(n4, o4));
      s4 += (f5 + (Math.sqrt(o2(n4, r6)) + Math.sqrt(o2(r6, c5)) + Math.sqrt(o2(c5, o4)))) / 2, e8 += f5, n4 = o4;
    }
    if (s4 - e8 < o3) return s4;
  }
  return s4;
}

// node_modules/@arcgis/core/geometry/support/curves/ellipticArc7Utils.js
var b3 = class {
  constructor(t, s4, n3, a3, r4, o3, i5, c4, h6) {
    this.cx = t, this.cy = s4, this.a = n3, this.b = a3, this.cosR = r4, this.sinR = o3, this.u1 = i5, this.u2 = c4, this.isInvalid = h6;
  }
};
function p2(t, s4) {
  const [n3, a3, r4, o3, i5, c4, h6] = s4.a, [f5, m5] = t, [M2, l5] = n3, [p3, R2] = a3, d4 = c4 * h6, x4 = Math.cos(i5), q3 = Math.sin(i5), [I2, g2] = s2(e4(1 / d4 * (m5 - R2) * x4 - 1 / d4 * (f5 - p3) * q3, 1 / c4 * (m5 - R2) * q3 + 1 / c4 * (f5 - p3) * x4), Math.atan2(1 / d4 * (l5 - R2) * x4 - 1 / d4 * (M2 - p3) * q3, 1 / c4 * (l5 - R2) * q3 + 1 / c4 * (M2 - p3) * x4), r4, o3);
  return new b3(p3, R2, c4, d4, x4, q3, I2, g2, 0 === c4 || 0 === d4);
}
function R(t, s4) {
  const { a: n3, b: a3, cosR: r4, sinR: o3, cx: i5, cy: c4 } = t, h6 = Math.cos(s4), u5 = Math.sin(s4);
  return [n3 * h6 * r4 - a3 * u5 * o3 + i5, n3 * h6 * o3 + a3 * u5 * r4 + c4];
}
function d3(t, s4) {
  const { u1: n3, u2: a3 } = t;
  return R(t, n3 * (1 - s4) + a3 * s4);
}
function x3(t, s4, n3) {
  if (n3 < 0 || n3 > 1) return [];
  if (0 === n3 || 1 === n3) return [l(s4)];
  const [a3, [r4, o3], i5, h6, u5, e7, f5] = s4.a, { u1: m5, u2: M2 } = t, l5 = m5 * (1 - n3) + M2 * n3;
  return [{ a: [[...d3(t, n3)], [r4, o3], Math.abs(l5 - m5) < Math.PI ? 1 : 0, h6, u5, e7, f5] }, { a: [[...a3], [r4, o3], Math.abs(M2 - l5) < Math.PI ? 1 : 0, h6, u5, e7, f5] }];
}
function q2(t, s4) {
  const { a: n3, b: a3, cosR: r4, sinR: o3, u1: i5, u2: c4 } = t, u5 = Math.PI / 6, e7 = l2(s4, [1 * u5, 2 * u5, 4 * u5, 5 * u5, 7 * u5, 8 * u5, 10 * u5, 11 * u5], (s5) => {
    const i6 = Math.cos(s5), c5 = Math.sin(s5), [h6, u6] = R(t, s5);
    return [h6, u6, -n3 * r4 * c5 - a3 * o3 * i6, -n3 * o3 * c5 + a3 * r4 * i6, -n3 * r4 * i6 + a3 * o3 * c5, -n3 * o3 * i6 - a3 * r4 * c5];
  }), m5 = f2(i5, c4), M2 = new Set(e7.map((t2) => x2(m5, t2)).filter((t2) => t2 > m5.min && t2 < m5.max));
  M2.add(i5), M2.add(c4);
  let b4, p3, d4 = 1 / 0;
  for (const h6 of M2) {
    const n4 = R(t, h6), [a4, r5] = n4, o4 = s4[0] - a4, u6 = s4[1] - r5, e8 = o4 * o4 + u6 * u6;
    e8 < d4 && (b4 = (h6 - i5) / (c4 - i5), p3 = n4, d4 = e8);
  }
  return { t: b4, curvePoint: p3, distance: Math.sqrt(d4) };
}
function I(t, s4, n3) {
  const a3 = p2(s4, n3), { a: r4, b: o3, u1: c4, u2: u5, cosR: e7, sinR: m5, isInvalid: M2 } = a3, l5 = n3.a[0];
  if (f(t, s4), f(t, l5), M2) return t;
  const b4 = Math.atan2(-o3 * m5, r4 * e7), d4 = b4 + Math.PI, x4 = Math.atan2(o3 * e7, r4 * m5), q3 = x4 + Math.PI, I2 = f2(c4, u5);
  for (const f5 of [b4, d4, x4, q3].map((t2) => x2(I2, t2))) f5 > I2.min && f5 < I2.max && f(t, R(a3, f5));
  return t;
}
function g(t, s4, n3) {
  const [a3, r4, o3, i5, c4, h6, u5] = s4.a, e7 = p2(t, s4), { u1: f5, u2: l5, isInvalid: b4 } = e7, x4 = l5 - f5;
  if (b4) return Math.sqrt(o2(t, a3));
  const q3 = 14, I2 = [0, 0];
  let g2 = 0, j2 = [d3(e7, 0), d3(e7, 0.25), d3(e7, 0.5), d3(e7, 0.75), d3(e7, 1)];
  for (let p3 = 0; p3 < q3; p3++) {
    const t2 = j2.length - 1, s5 = x4 / (2 * t2), a4 = [];
    for (let n4 = 0; n4 < t2; n4++) a4.push(j2[n4]), a4.push(R(e7, f5 + (2 * n4 + 1) * s5));
    a4.push(j2[j2.length - 1]), j2 = a4, g2 = 0;
    let o4 = 0;
    for (let n4 = 1; n4 < j2.length; n4++) {
      const t3 = j2[n4 - 1], s6 = j2[n4];
      if (g2 += Math.sqrt(o2(t3, s6)), n4 > 1) {
        const a5 = j2[n4 - 2], i6 = i3(I2, a5, t3, r4, s6);
        o4 += i6 ? Math.sqrt(o2(t3, i6)) : Math.abs(s6[0] - t3[0]) + Math.abs(s6[1] - t3[1]);
      } else o4 += g2;
    }
    if (o4 - g2 < n3) return g2;
  }
  return g2;
}
var j = e2();
var v = e2();
var P = e2();
var y = e2();
function w(r4, i5, c4) {
  const [h6, u5, f5, M2, l5, b4, R2] = i5.a, d4 = p2(r4, i5), { cosR: x4, sinR: q3, a: I2, b: g2, cx: w2, cy: U } = d4, B = z([0, 0], h6, c4), S = z([0, 0], u5, c4), k = c4[0] * c4[4] < 0 ? 1 - M2 : M2;
  {
    const s4 = I2 * I2 * q3 * q3 + g2 * g2 * x4 * x4, n3 = 2 * (g2 * g2 - I2 * I2) * q3 * x4, a3 = I2 * I2 * x4 * x4 + g2 * g2 * q3 * q3, r5 = -2 * s4 * w2 - n3 * U, o3 = -n3 * w2 - 2 * a3 * U;
    r2(j, s4, n3 / 2, r5 / 2, n3 / 2, a3, o3 / 2, r5 / 2, o3 / 2, s4 * w2 * w2 + n3 * w2 * U + a3 * U * U - I2 * I2 * g2 * g2);
  }
  if (s(v, c4), null == v) {
    const t = z([0, 0], r4, c4);
    return { a: [B, S, f5, M2, e4(B[1], B[0]), Math.sqrt(o2(B, t)) / 2, 0] };
  }
  u(P, v), i(y, i(y, P, j), v);
  {
    const t = y[0], s4 = 2 * y[1], n3 = y[4], a3 = 2 * y[2], r5 = 2 * y[5], o3 = s4 * s4 - 4 * t * n3, i6 = 2 * (t * r5 * r5 + n3 * a3 * a3 - s4 * a3 * r5 + o3 * y[8]), c5 = Math.sqrt((t - n3) ** 2 + s4 * s4), h7 = -Math.sqrt(i6 * (t + n3 + c5)) / o3, u6 = -Math.sqrt(i6 * (t + n3 - c5)) / o3;
    return { a: [B, S, f5, k, 0.5 * e4(-s4, n3 - t), h7, u6 / h7] };
  }
}

// node_modules/@arcgis/core/geometry/support/curves/curveExtent.js
function n2(n3, p3, u5) {
  if (e3(u5)) return f(n3, p3), f(n3, u5), n3;
  if (i2(u5)) return l4(n3, p3, u5);
  if (c(u5)) {
    const r4 = l3(p3, u5);
    return d(n3, r4);
  }
  if (o(u5)) {
    const r4 = h4(p3, u5);
    return d(n3, r4);
  }
  return I(n3, p3, u5);
}

export {
  r3 as r,
  o2 as o,
  u2 as u,
  e4 as e,
  h5 as h,
  p,
  M,
  b2 as b,
  d2 as d,
  s3 as s,
  h3 as h2,
  u3 as u2,
  f3 as f,
  l3 as l,
  u4 as u3,
  f4 as f2,
  h4 as h3,
  n,
  p2,
  d3 as d2,
  x3 as x,
  q2 as q,
  g,
  w,
  n2
};
//# sourceMappingURL=chunk-ZHB32LSG.js.map
