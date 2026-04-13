import {
  G
} from "./chunk-TIZ3VJFS.js";
import {
  h
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/geometry/support/coordsUtils.js
function r(t) {
  if (!t) return null;
  if (Array.isArray(t)) return t;
  const n = t.hasZ, e = t.hasM;
  if ("point" === t.type) return e && n ? [t.x, t.y, t.z, t.m] : n ? [t.x, t.y, t.z] : e ? [t.x, t.y, t.m] : [t.x, t.y];
  if ("polygon" === t.type) return t.rings.slice();
  if ("polyline" === t.type) return t.paths.slice();
  if ("multipoint" === t.type) return t.points.map((t2) => [t2]);
  if ("extent" === t.type) {
    const n2 = t.clone().normalize();
    if (!n2) return null;
    let e2 = false, r2 = false;
    return n2.forEach((t2) => {
      t2.hasZ && (e2 = true), t2.hasM && (r2 = true);
    }), n2.map((t2) => {
      const n3 = [[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]];
      if (e2 && t2.hasZ) {
        const e3 = 0.5 * (t2.zmax - t2.zmin);
        for (let t3 = 0; t3 < n3.length; t3++) n3[t3].push(e3);
      }
      if (r2 && t2.hasM) {
        const e3 = 0.5 * (t2.mmax - t2.mmin);
        for (let t3 = 0; t3 < n3.length; t3++) n3[t3].push(e3);
      }
      return n3;
    });
  }
  return null;
}
function i(t, n) {
  const e = n[0] - t[0], r2 = n[1] - t[1];
  if (t.length > 2 && n.length > 2) {
    const i2 = t[2] - n[2];
    return Math.sqrt(e * e + r2 * r2 + i2 * i2);
  }
  return Math.sqrt(e * e + r2 * r2);
}
function o(t, n, e) {
  const r2 = t[0] + e * (n[0] - t[0]), i2 = t[1] + e * (n[1] - t[1]);
  return t.length > 2 && n.length > 2 ? [r2, i2, t[2] + e * (n[2] - t[2])] : [r2, i2];
}
function s(t, n, e, r2) {
  return u(t, n, e[r2], e[r2 + 1]);
}
function u(t, n, e, r2) {
  const [i2, o2] = n, [s2, u2] = e, [l, f2] = r2, c2 = l - s2, h4 = f2 - u2, p2 = c2 * c2 + h4 * h4, g2 = (i2 - s2) * c2 + (o2 - u2) * h4, a2 = Math.min(1, Math.max(0, g2 / p2));
  return t[0] = s2 + c2 * a2, t[1] = u2 + h4 * a2, t;
}
function f(t, n, e, r2, i2, o2) {
  let s2 = e, u2 = r2, l = i2 - s2, f2 = o2 - u2;
  if (0 !== l || 0 !== f2) {
    const e2 = ((t - s2) * l + (n - u2) * f2) / (l * l + f2 * f2);
    e2 > 1 ? (s2 = i2, u2 = o2) : e2 > 0 && (s2 += l * e2, u2 += f2 * e2);
  }
  return l = t - s2, f2 = n - u2, l * l + f2 * f2;
}
function c(t, n) {
  return o(t, n, 0.5);
}
function h3(t) {
  const n = t.length;
  let e = 0;
  for (let r2 = 0; r2 < n - 1; ++r2) e += i(t[r2], t[r2 + 1]);
  return e;
}
function p(t, n) {
  if (n <= 0) return t[0];
  const e = t.length;
  let r2 = 0;
  for (let s2 = 0; s2 < e - 1; ++s2) {
    const e2 = i(t[s2], t[s2 + 1]);
    if (n - r2 < e2) {
      const i2 = (n - r2) / e2;
      return o(t[s2], t[s2 + 1], i2);
    }
    r2 += e2;
  }
  return t[e - 1];
}
function g(t, n = 0, e = 1) {
  let r2 = 0;
  const i2 = t.length;
  let o2 = t[0];
  for (let s2 = 1; s2 < i2; s2++) {
    const i3 = t[s2];
    r2 += (i3[n] - o2[n]) * (i3[e] + o2[e]), o2 = i3;
  }
  if (a(t)) {
    const i3 = t[0];
    r2 += (i3[n] - o2[n]) * (i3[e] + o2[e]);
  }
  return r2 >= 0;
}
function a(n) {
  const e = n.length;
  return e > 0 && !h(n[0], n[e - 1]);
}
function y(t) {
  "rings" in t && (m(t), x(t));
}
function m(t) {
  if ("rings" in t) for (const n of t.rings) a(n) && n.push(n[0].slice());
}
function x(t) {
  if (!("rings" in t)) return false;
  if (0 === t.rings.length || g(t.rings[0])) return false;
  for (const n of t.rings) n.reverse();
  return true;
}
function v(t) {
  if ("polygon" !== t.type && "polyline" !== t.type) return t;
  return M("polygon" === t.type ? t.rings : t.paths, t.spatialReference), t;
}
function M(t, e) {
  const r2 = G(e);
  if (!r2) return;
  const i2 = r2.valid[0], o2 = r2.valid[1], s2 = o2 - i2;
  for (const n of t) {
    let t2 = 1 / 0, e2 = -1 / 0;
    for (const s3 of n) {
      const n2 = P(s3[0], i2, o2);
      t2 = Math.min(t2, n2), e2 = Math.max(e2, n2), s3[0] = n2;
    }
    const r3 = e2 - t2;
    s2 - r3 < r3 && n.forEach((t3) => {
      t3[0] < 0 && (t3[0] += s2);
    });
  }
}
function P(t, n, e) {
  const r2 = e - n;
  return t < n ? e - (n - t) % r2 : t > e ? n + (t - n) % r2 : t;
}

export {
  r,
  i,
  s,
  u,
  f,
  c,
  h3 as h,
  p,
  g,
  y,
  m,
  v,
  M,
  P
};
//# sourceMappingURL=chunk-ZEMVKL33.js.map
