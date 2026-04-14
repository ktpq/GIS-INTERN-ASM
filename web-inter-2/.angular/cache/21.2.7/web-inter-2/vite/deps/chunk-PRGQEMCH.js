import {
  u as u3
} from "./chunk-IKCUBMQP.js";
import {
  j
} from "./chunk-76B4KLE5.js";
import {
  M as M2,
  b,
  d,
  f,
  g,
  h3 as h,
  l,
  n,
  o,
  p2 as p,
  q,
  u2 as u,
  u3 as u2,
  x
} from "./chunk-LKZBFHT4.js";
import {
  _
} from "./chunk-X2SNEXCL.js";
import {
  c,
  e,
  i,
  l as l2,
  o as o2,
  v
} from "./chunk-URLT4X25.js";
import {
  re
} from "./chunk-JC2AZ2NN.js";
import {
  M
} from "./chunk-253Z6EVN.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/functions/centroid.js
function e2(t, n2, e3) {
  return Math.sqrt((t[0] - n2[0]) ** 2 + (t[1] - n2[1]) ** 2 + (void 0 !== t[2] && void 0 !== n2[2] ? (t[2] * e3 - n2[2] * e3) ** 2 : 0));
}
function r(t, n2, e3) {
  return (t[0] - n2[0]) ** 2 + (t[1] - n2[1]) ** 2 + (void 0 !== t[2] && void 0 !== n2[2] ? (t[2] * e3 - n2[2] * e3) ** 2 : 0);
}
var o3 = [];
for (const w2 of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t = w2[0];
  for (let n2 = 1; n2 < w2.length; n2++) o3[w2[n2]] = t;
}
var s = [];
function i2(t) {
  return t.vcsWkid && void 0 !== o3[t.vcsWkid] ? s[o3[t.vcsWkid]] : t.latestVcsWkid && void 0 !== o3[t.latestVcsWkid] ? s[o3[t.latestVcsWkid]] : 1;
}
function f2(t, n2, e3) {
  const r2 = n2[0] - t[0], o4 = n2[1] - t[1];
  if (e3) {
    const t2 = n2[2] - n2[2];
    return Math.sqrt(r2 * r2 + o4 * o4 + t2 * t2);
  }
  return Math.sqrt(r2 * r2 + o4 * o4);
}
function h2(t, n2, e3) {
  const r2 = n2[0] - t[0], o4 = n2[1] - t[1];
  if (e3) {
    const t2 = n2[2] - n2[2];
    return r2 * r2 + o4 * o4 + t2 * t2;
  }
  return r2 * r2 + o4 * o4;
}
function m(t, n2) {
  return t.x * n2.x + t.y * n2.y;
}
function M3(t, n2) {
  return t.x * n2.y - n2.x * t.y;
}
function p2(t, n2, e3 = 0) {
  for (; t < e3; ) t += n2;
  const r2 = e3 + n2;
  for (; t >= r2; ) t -= n2;
  return t;
}
function g2(t, n2) {
  return Math.atan2(n2.y - t.y, n2.x - t.x);
}
function z(t, n2) {
  return p2(g2(t, n2), 2 * Math.PI) * (180 / Math.PI);
}
function d2(t, n2) {
  return p2(Math.PI / 2 - g2(t, n2), 2 * Math.PI) * (180 / Math.PI);
}
function v2(t, n2, e3) {
  const r2 = { x: t.x - n2.x, y: t.y - n2.y }, o4 = { x: e3.x - n2.x, y: e3.y - n2.y };
  return Math.atan2(M3(r2, o4), m(r2, o4));
}
function P(n2, e3, r2) {
  return M(p2(v2(n2, e3, r2), 2 * Math.PI));
}
function Z(n2, e3, r2) {
  return M(p2(-1 * v2(n2, e3, r2), 2 * Math.PI));
}
function I(t, n2, e3) {
  return Math.max(n2, Math.min(e3, t));
}
function R(t, n2) {
  return t[0] * n2[0] + t[1] * n2[1] + t[2] * n2[2];
}
function k(t) {
  return t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
}
function W(t, n2, e3) {
  const r2 = [e3[0] - n2[0], e3[1] - n2[1], e3[2] - n2[2]], o4 = I(R(r2, [t[0] - n2[0], t[1] - n2[1], t[2] - n2[2]]) / k(r2), 0, 1);
  return [n2[0] + (e3[0] - n2[0]) * o4, n2[1] + (e3[1] - n2[1]) * o4, n2[2] + (e3[2] - n2[2]) * o4];
}
function q2(t, n2, e3) {
  let r2 = 0;
  const o4 = e3[0] - n2[0], s2 = e3[1] - n2[1], i3 = o4 * o4 + s2 * s2;
  if (0 === i3) r2 = 0.5;
  else {
    r2 = ((t[0] - n2[0]) * o4 + (t[1] - n2[1]) * s2) / i3, r2 < 0 ? r2 = 0 : r2 > 1 && (r2 = 1);
  }
  return r2 <= 0.5 ? [n2[0] + (e3[0] - n2[0]) * r2, n2[1] + (e3[1] - n2[1]) * r2] : [e3[0] - (e3[0] - n2[0]) * (1 - r2), e3[1] - (e3[1] - n2[1]) * (1 - r2)];
}
s[9002] = 0.3048, s[9003] = 0.3048006096012192, s[9095] = 0.3048007491;

// node_modules/@arcgis/core/geometry/support/curves/curveLength.js
function f3(f4, n2, p3 = 1) {
  if (i(n2)) return d(f4, n2, p3);
  if (c(n2)) {
    const r2 = l(f4, n2);
    return r2.isInvalid ? Math.sqrt(o(f4, n2.c[0])) : f(r2);
  }
  if (o2(n2)) {
    const r2 = h(f4, n2);
    return r2.isInvalid ? Math.sqrt(o(f4, n2.a[0])) : f(r2);
  }
  return g(f4, n2, p3);
}

// node_modules/@arcgis/core/geometry/support/curves/splitCurveAtPoint.js
var j2 = 1e-6;
function U(r2, n2, o4, s2) {
  const c2 = b(r2, n2, o4).filter(({ distance: t }) => t <= s2), e3 = [];
  let u4 = 0, f4 = n2;
  for (const { t } of c2) {
    const n3 = (t - u4) / (1 - u4);
    if (n3 < j2 || 1 - n3 < j2) continue;
    const [o5, s3] = M2(r2, f4, t);
    e3.push(o5), f4 = s3, u4 = t;
  }
  return e3.push(f4), e3;
}
function v3(t, i3, s2, e3) {
  const u4 = l(t, i3);
  if (u4.isInvalid) return [l2(i3)];
  const { t: f4, distance: l3 } = u(u4, s2);
  return l3 <= e3 ? u2(u4, i3, f4) : [l2(i3)];
}
function A(t, i3, n2, o4) {
  const s2 = h(t, i3);
  if (s2.isInvalid) return [l2(i3)];
  const { t: e3, distance: u4 } = u(s2, n2);
  return u4 <= o4 ? n(s2, i3, e3) : [l2(i3)];
}
function I2(t, i3, r2, n2) {
  const o4 = p(t, i3);
  if (o4.isInvalid) return [l2(i3)];
  const { t: s2, distance: e3 } = q(o4, r2);
  return e3 <= n2 ? x(o4, i3, s2) : [l2(i3)];
}
function h3(t, i3, r2, n2) {
  return e(i3) ? [l2(i3)] : i(i3) ? U(t, i3, r2, n2) : c(i3) ? v3(t, i3, r2, n2) : o2(i3) ? A(t, i3, r2, n2) : I2(t, i3, r2, n2);
}

// node_modules/@arcgis/core/arcade/functions/measures.js
function d3(e3) {
  return Math.sqrt(e3[0] * e3[0] + e3[1] * e3[1] + e3[2] * e3[2]);
}
function g3(e3) {
  const t = d3(e3);
  return [e3[0] / t, e3[1] / t, e3[2] / t];
}
function y(e3, t, n2, s2) {
  const r2 = g3([t[0] - e3[0], t[1] - e3[1], t[2] * s2 - e3[2] * s2]);
  return [e3[0] + r2[0] * n2, e3[1] + r2[1] * n2, e3[2] + r2[2] * n2];
}
function R2(e3, t, n2, s2) {
  return e3 + (t - e3) / n2 * s2;
}
function x2(e3, t, n2) {
  let s2 = t[0] - e3[0], r2 = t[1] - e3[1];
  const a = Math.sqrt(s2 * s2 + r2 * r2);
  return s2 /= a, r2 /= a, s2 *= n2, r2 *= n2, [e3[0] + s2, e3[1] + r2];
}
function Z2(t, n2) {
  if (!t) return null;
  switch (t.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const s2 = "polygon" === t.type ? t.rings : t.paths;
  let r2 = 1;
  if (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) {
    r2 = i2(t.spatialReference) / re(t.spatialReference);
  }
  if (0 === s2.length) return null;
  if (0 === s2[0].length) return null;
  if (false === t.hasM) return null;
  let a = -1, l3 = 0;
  const { hasM: o4, hasZ: u4 } = t, f4 = u4 ? 3 : 2, p3 = 2;
  for (const e3 of s2) {
    if (a++, e3.length > 0 && e3[0][f4] === n2) return { partId: a, distanceAlong: l3, coordinate: new _(__spreadValues(__spreadValues({ hasZ: u4, hasM: o4, spatialReference: t.spatialReference, x: e3[0][0], y: e3[0][1] }, u4 ? { z: e3[0][p3] } : {}), o4 ? { m: e3[0][f4] } : {})), segmentId: 0 };
    let s3 = -1;
    for (let i3 = 1; i3 < e3.length; i3++) {
      const h4 = k2(e3[i3 - 1], e3[i3], u4, r2);
      s3++;
      const m2 = e3[i3][f4] - e3[i3 - 1][f4], d4 = e3[i3][f4];
      if (d4 === n2) return { partId: a, distanceAlong: h4 + l3, coordinate: new _(__spreadValues(__spreadValues({ hasZ: u4, hasM: o4, spatialReference: t.spatialReference, x: e3[i3][0], y: e3[i3][1] }, u4 ? { z: e3[i3][p3] } : {}), o4 ? { m: e3[i3][f4] } : {})), segmentId: s3 };
      if (d4 > n2 && n2 > e3[i3 - 1][f4]) {
        const d5 = (n2 - e3[i3 - 1][f4]) / m2 * h4;
        let g4 = u4 ? y(e3[i3 - 1], e3[i3], d5, r2) : x2(e3[i3 - 1], e3[i3], d5);
        g4 = [...g4, n2];
        const R3 = new _(__spreadValues(__spreadValues({ hasZ: u4, hasM: o4, spatialReference: t.spatialReference, x: g4[0], y: g4[1] }, u4 ? { z: g4[p3] } : {}), o4 ? { m: g4[f4] } : {}));
        return { partId: a, distanceAlong: l3 + k2(e3[i3 - 1], [R3.x, R3.y, ...u4 ? [R3.z] : [], ...o4 ? [R3.m] : []], u4, r2), coordinate: R3, segmentId: s3 };
      }
      l3 += h4;
    }
  }
  return null;
}
function M4(t, n2) {
  if (!t) return null;
  switch (t.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const s2 = "polygon" === t.type ? t.rings : t.paths;
  if (n2 < 0) return null;
  let r2 = 1;
  if (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) {
    r2 = i2(t.spatialReference) / re(t.spatialReference);
  }
  let a = 0;
  const { hasZ: l3, hasM: o4 } = t, u4 = l3 ? 3 : 2, f4 = 2;
  let p3 = -1;
  if (0 === n2) return 0 === s2.length || 0 === s2[0].length ? null : { partId: 0, coordinate: new _(__spreadValues(__spreadValues({ hasZ: l3, hasM: o4, spatialReference: t.spatialReference, x: s2[0][0][0], y: s2[0][0][1] }, l3 ? { z: s2[0][0][f4] } : {}), o4 ? { m: s2[0][0][u4] } : {})), segmentId: 0 };
  for (const e3 of s2) {
    p3++;
    let s3 = -1;
    for (let i3 = 1; i3 < e3.length; i3++) {
      s3++;
      const h4 = k2(e3[i3 - 1], e3[i3], l3, r2), m2 = a + h4;
      if (m2 === n2) return { partId: p3, coordinate: new _(__spreadValues(__spreadValues({ hasZ: l3, hasM: o4, spatialReference: t.spatialReference, x: e3[i3][0], y: e3[i3][1] }, l3 ? { z: e3[i3][f4] } : {}), o4 ? { m: e3[i3][u4] } : {})), segmentId: s3 };
      if (m2 > n2) {
        let m3 = l3 ? y(e3[i3 - 1], e3[i3], n2 - a, r2) : x2(e3[i3 - 1], e3[i3], n2 - a);
        return m3 = [...m3, R2(e3[i3 - 1][u4], e3[i3][u4], h4, n2 - a)], { partId: p3, coordinate: new _(__spreadValues(__spreadValues({ hasZ: l3, hasM: o4, spatialReference: t.spatialReference, x: m3[0], y: m3[1] }, l3 ? { z: m3[f4] } : {}), o4 ? { m: m3[u4] } : {})), segmentId: s3 };
      }
      a = m2;
    }
  }
  return null;
}
function v4(s2, r2) {
  if (!s2) return null;
  if (!r2) return null;
  let a = 1;
  if (r2.spatialReference.vcsWkid || r2.spatialReference.latestVcsWkid) {
    a = i2(r2.spatialReference) / re(r2.spatialReference);
  }
  let l3 = null, c2 = 0;
  return l3 = s2, c2 = s2.hasZ && r2.hasZ ? e2([r2.x, r2.y, r2.z], [s2.x, s2.y, s2.z], a) : f2([r2.x, r2.y], [s2.x, s2.y], false), { coordinate: l3, distance: c2 };
}
function I3(t, n2) {
  if (!t) return null;
  if (!n2) return null;
  let a = 1;
  if (n2.spatialReference.vcsWkid || n2.spatialReference.latestVcsWkid) {
    a = i2(n2.spatialReference) / re(n2.spatialReference);
  }
  let l3 = null, c2 = 0, o4 = Number.MAX_VALUE, u4 = -1, f4 = -1;
  for (const e3 of t.points || []) {
    f4++;
    const l4 = t.hasZ && n2.hasZ ? r([e3[0], e3[1], e3[2]], [n2.x, n2.y, n2.z], a) : h2([e3[0], e3[1]], [n2.x, n2.y], false);
    l4 < o4 && (o4 = l4, u4 = f4);
  }
  return u4 < 0 ? null : (c2 = o4, l3 = t.getPoint(u4), { coordinate: l3, distance: Math.sqrt(c2) });
}
function z2(t, n2) {
  if (!t) return null;
  if (!n2) return null;
  const s2 = "polygon" === t.type ? t.curveRings ?? t.rings : t.curvePaths ?? t.paths;
  let r2 = 1;
  if (n2.spatialReference.vcsWkid || n2.spatialReference.latestVcsWkid) {
    r2 = i2(n2.spatialReference) / re(n2.spatialReference);
  }
  let a = Number.MAX_VALUE, l3 = -1, o4 = -1, u4 = -1;
  const f4 = t.hasZ && n2.hasZ;
  let d4 = null;
  const g4 = f4 ? [n2.x, n2.y, n2.z] : [n2.x, n2.y];
  for (const e3 of s2) {
    o4++;
    for (let t2 = 1; t2 < e3.length; t2++) {
      const n3 = w(g4, e3[t2 - 1], e3[t2], f4, r2);
      n3.distance < a && (a = n3.distance, d4 = n3.closestPoint, u4 = o4, l3 = t2 - 1);
    }
  }
  if (l3 < 0 || !d4) return null;
  const y2 = t.hasM && t.hasZ ? 3 : 2, x3 = 2, Z3 = s2[u4][l3], M5 = v(Z3), v5 = s2[u4][l3 + 1], I4 = v(v5);
  let z3 = null, P3 = null, W2 = f4 ? d4[2] : null;
  const A2 = e(v5) ? d4 : h3(M5, v5, d4, 1e-3)[0];
  let j3 = k2(M5, A2, f4, r2);
  const V = k2(M5, v5, f4, r2);
  t.hasM && (P3 = R2(M5[y2], I4[y2], V, j3)), !t.hasZ || false !== n2.hasZ && e(A2) || (W2 = R2(M5[x3], I4[x3], V, j3), v(A2)[x3] = W2, j3 = k2(M5, A2, true, r2)), z3 = new _(__spreadValues(__spreadValues({ hasZ: f4, hasM: t.hasM, spatialReference: n2.spatialReference, x: d4[0], y: d4[1] }, t.hasZ ? { z: W2 } : {}), t.hasM ? { m: P3 } : {}));
  let L = 0;
  for (let e3 = 0; e3 <= u4; e3++) {
    const n3 = s2[e3], a2 = e3 === u4 ? l3 : n3.length - 1;
    for (let e4 = 1; e4 <= a2; e4++) L += k2(v(n3[e4 - 1]), n3[e4], t.hasZ, r2);
  }
  return L += j3, { partId: u4, segmentId: l3, coordinate: z3, distance: a, distanceAlong: L };
}
function w(e3, s2, r2, i3, c2) {
  const o4 = v(s2);
  if (e(r2)) {
    const s3 = i3 ? W(e3, o4, r2) : q2(e3, o4, r2);
    return { closestPoint: s3, distance: i3 ? e2(s3, e3, c2) : f2(s3, e3, false) };
  }
  const { curvePoint: f4, distance: m2 } = u3(o4, r2, e3);
  return { closestPoint: f4, distance: m2 };
}
function k2(e3, s2, r2, a) {
  return e(s2) ? r2 ? e2(e3, s2, a) : f2(e3, s2, false) : f3(e3, s2, 1e-3);
}
function P2(e3, t) {
  if (!e3) return null;
  if (!t) return null;
  if ("extent" === e3.type) {
    const t2 = e3;
    e3 = new j({ spatialReference: e3.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] });
  }
  switch (e3.type) {
    case "point":
      return v4(e3, t) ?? null;
    case "multipoint":
      return I3(e3, t) ?? null;
    case "polygon":
    case "polyline":
      return z2(e3, t) ?? null;
    default:
      return null;
  }
}

export {
  e2 as e,
  i2 as i,
  z,
  d2 as d,
  P,
  Z,
  Z2,
  M4 as M,
  P2
};
//# sourceMappingURL=chunk-PRGQEMCH.js.map
