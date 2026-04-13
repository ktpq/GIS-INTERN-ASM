import {
  c as c2
} from "./chunk-3WUVRBIS.js";
import {
  y
} from "./chunk-NNANCYKT.js";
import {
  r
} from "./chunk-ZEMVKL33.js";
import {
  f2 as f,
  w
} from "./chunk-ZHB32LSG.js";
import {
  j,
  u
} from "./chunk-SVWIACQP.js";
import {
  c,
  e,
  i,
  t,
  v
} from "./chunk-QK7JX7UE.js";
import {
  M
} from "./chunk-ZILR7JK7.js";
import {
  h
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/draw/support/drawUtils.js
function y2(t2, n, r2, o) {
  if (null == o || t2.hasZ || (o = void 0), "point" === t2.type) return t2.x += n, t2.y += r2, t2.hasZ && null != o && (t2.z += o), t2;
  if ("multipoint" === t2.type) {
    const e3 = t2.points;
    for (let t3 = 0; t3 < e3.length; t3++) e3[t3] = g(e3[t3], n, r2, o);
    return t2;
  }
  if ("extent" === t2.type) return t2.xmin += n, t2.xmax += n, t2.ymin += r2, t2.ymax += r2, null != o && (t2.zmin ??= 0, t2.zmin += o, t2.zmax ??= 0, t2.zmax += o), t2;
  const e2 = "polyline" === t2.type ? t2.curvePaths ?? t2.paths : t2.curveRings ?? t2.rings, i2 = t(t2);
  for (let s = 0; s < e2.length; s++) {
    const t3 = e2[s];
    for (let e3 = 0; e3 < t3.length; e3++) t3[e3] = v2(t3[e3], n, r2, o);
  }
  return "paths" in t2 ? i2 ? t2.curvePaths = e2 : t2.paths = e2 : i2 ? t2.curveRings = e2 : t2.rings = e2, t2;
}
function x(t2, n, r2, o, e2) {
  const i2 = t2.clone();
  if (e2) {
    const { resolution: t3 } = o;
    y2(i2, n * t3, -r2 * t3);
  } else {
    const { dxMap: t3, dyMap: e3 } = h2(n, r2, o);
    y2(i2, t3, e3);
  }
  return i2;
}
function h2(t2, n, r2) {
  const o = r2.state.inverseTransform;
  return { dxMap: o[0] * t2 + o[2] * n, dyMap: o[1] * t2 + o[3] * n };
}
function g(t2, n, r2, o) {
  return z(t2, t2[0] + n, t2[1] + r2, null != t2[2] && null != o ? t2[2] + o : void 0);
}
function v2(t2, n, r2, o) {
  const e2 = g(v(t2), n, r2, o);
  if (e(t2)) return e2;
  if (i(t2)) {
    const [, o2, i3] = t2.b;
    return { b: [e2, [o2[0] + n, o2[1] + r2], [i3[0] + n, i3[1] + r2]] };
  }
  if (c(t2)) {
    const [, o2] = t2.c;
    return { c: [e2, [o2[0] + n, o2[1] + r2]] };
  }
  const [, i2, ...s] = t2.a;
  return { a: [e2, [i2[0] + n, i2[1] + r2], ...s] };
}
function M2(n, s, c3, a) {
  if ("point" === n.type) {
    const { x: t2, y: r2 } = n, o = a ? a[0] : t2, e2 = a ? a[1] : r2, i2 = n.clone(), u2 = (t2 - o) * s + o, m2 = (r2 - e2) * c3 + e2;
    return i2.x = u2, i2.y = m2, i2;
  }
  if ("extent" === n.type) {
    const { xmin: t2, xmax: r2, ymin: o, ymax: e2 } = n, i2 = a ? a[0] : (t2 + r2) / 2, u2 = a ? a[1] : (e2 + o) / 2, m2 = n.clone();
    if (m2.xmin = (t2 - i2) * s + i2, m2.ymax = (e2 - u2) * c3 + u2, m2.xmax = (r2 - i2) * s + i2, m2.ymin = (o - u2) * c3 + u2, m2.xmin > m2.xmax) {
      const t3 = m2.xmin, n2 = m2.xmax;
      m2.xmin = n2, m2.xmax = t3;
    }
    if (m2.ymin > m2.ymax) {
      const t3 = m2.ymin, n2 = m2.ymax;
      m2.ymin = n2, m2.ymax = t3;
    }
    return m2;
  }
  let m = null;
  if (!a) {
    m = r(n);
    const t2 = u(), o = y(t2, m);
    if (!o) return n.clone();
    const [s2, c4, u2, l2] = o;
    a = [(s2 + u2) / 2, (c4 + l2) / 2];
  }
  const [l, p] = a;
  if ("multipoint" === n.type) {
    const t2 = n.clone(), r2 = t2.points;
    for (let n2 = 0; n2 < r2.length; n2++) {
      const t3 = r2[n2], [o, e2] = t3, i2 = (o - l) * s + l, u2 = (e2 - p) * c3 + p;
      r2[n2] = z(t3, i2, u2, void 0);
    }
    return t2.points = r2, t2;
  }
  const f2 = n.clone();
  m ??= r(n);
  const y3 = "polygon" === f2.type, x2 = y3 ? f2.curveRings ?? f2.rings : f2.curvePaths ?? f2.paths;
  if (!a) {
    const t2 = u(), n2 = y(t2, x2, false, false);
    if (!n2) return f2;
    a = j(n2);
  }
  for (const r2 of x2) {
    let n2 = null;
    const o = y3 && r2.length > 0 && h(v(r2[0]), v(r2.at(-1)));
    for (let t2 = 0; t2 < r2.length; t2++) {
      const o2 = r2[t2];
      r2[t2] = j2(o2, s, c3, l, p, n2), n2 = o2;
    }
    o && (r2[0] = [...v(r2.at(-1))]);
  }
  return f2;
}
function d(t2, n, r2, o, e2) {
  const [i2, s, ...c3] = t2;
  return [(i2 - o) * n + o, (s - e2) * r2 + e2, ...c3];
}
function j2(t2, n, r2, o, e2, i2) {
  if (e(t2)) return d(t2, n, r2, o, e2);
  if (i(t2)) {
    const [i3, s, c4] = t2.b.map((t3) => d(t3, n, r2, o, e2));
    return { b: [i3, s, c4] };
  }
  if (!i2) return t2;
  const c3 = v(i2), y3 = c(t2) ? f(c3, t2) : t2, [x2, h3, g2, v3, M3, j3, U2] = y3.a, b2 = M3 ?? 0, z2 = j3 ?? Math.hypot(x2[0] - h3[0], x2[1] - h3[1]), R = U2 ?? 1, P = c2(o, e2, 1, 0, 0, 1, n, r2);
  return w(c3, { a: [[...x2], [...h3], g2, v3, b2, z2, R] }, P);
}
function U(t2, n, r2, o, e2, i2) {
  const s = Math.sqrt((r2 - t2) * (r2 - t2) + (o - n) * (o - n));
  return Math.sqrt((e2 - t2) * (e2 - t2) + (i2 - n) * (i2 - n)) / s;
}
function b(t2, r2, o, e2 = false) {
  const i2 = Math.atan2(r2.y - o.y, r2.x - o.x) - Math.atan2(t2.y - o.y, t2.x - o.x), s = Math.atan2(Math.sin(i2), Math.cos(i2));
  return e2 ? s : M(s);
}
function z(t2, n, r2, o) {
  const e2 = [n, r2];
  return t2.length > 2 && e2.push(null != o ? o : t2[2]), t2.length > 3 && e2.push(t2[3]), e2;
}

export {
  x,
  h2 as h,
  M2 as M,
  U,
  b
};
//# sourceMappingURL=chunk-DASIE7LF.js.map
