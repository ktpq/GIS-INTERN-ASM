import {
  an
} from "./chunk-QBEV3F3C.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  re
} from "./chunk-DMD5CGVA.js";
import {
  G
} from "./chunk-VHQJAPCR.js";
import {
  R,
  c,
  n,
  s,
  u
} from "./chunk-SJGGAAKL.js";
import {
  $
} from "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/raster/functions/rasterProjectionHelper.js
function p() {
  if (!N2) throw new r("rasterprojectionhelper-project", "projection operator is not loaded");
}
var g = (e, t, n2, i = 0) => {
  if (1 === n2[0]) return [0, 0];
  let o = 1, r2 = -1, s2 = 1, a = -1;
  for (let g2 = 0; g2 < e.length; g2 += 2) isNaN(e[g2]) || (o = o > e[g2] ? e[g2] : o, r2 = r2 > e[g2] ? r2 : e[g2], s2 = s2 > e[g2 + 1] ? e[g2 + 1] : s2, a = a > e[g2 + 1] ? a : e[g2 + 1]);
  const { cols: l, rows: c2 } = t, f = (r2 - o) / l / n2[0], u2 = (a - s2) / c2 / n2[1], x = 2 * i;
  let m = 0, h = false, p2 = [0, 0];
  for (let g2 = 0; g2 < l - 3; g2++) {
    for (let t2 = 0; t2 < c2 - 3; t2++) {
      const n3 = g2 * c2 * 2 + 2 * t2, i2 = (e[n3] + e[n3 + 4] + e[n3 + 4 * c2] + e[n3 + 4 * c2 + 4]) / 4, o2 = (e[n3 + 1] + e[n3 + 5] + e[n3 + 4 * c2 + 1] + e[n3 + 4 * c2 + 5]) / 4, r3 = Math.abs((i2 - e[n3 + 2 * c2 + 2]) / f), s3 = Math.abs((o2 - e[n3 + 2 * c2 + 3]) / u2);
      if (r3 + s3 > m && (m = r3 + s3, p2 = [r3, s3]), x && m > x) {
        h = true;
        break;
      }
    }
    if (h) break;
  }
  return p2;
};
var y = { 3395: 20037508342789244e-9, 3410: 17334193943686873e-9, 3857: 20037508342788905e-9, 3975: 17367530445161372e-9, 4087: 20037508342789244e-9, 4088: 20015108787169147e-9, 6933: 17367530445161372e-9, 32662: 20037508342789244e-9, 53001: 2001508679602057e-8, 53002: 1000754339801029e-8, 53003: 2001508679602057e-8, 53004: 2001508679602057e-8, 53016: 14152803599503474e-9, 53017: 17333573624304302e-9, 53034: 2001508679602057e-8, 53079: 20015114352186374e-9, 53080: 20015114352186374e-9, 54001: 20037508342789244e-9, 54002: 10018754171394624e-9, 54003: 20037508342789244e-9, 54004: 20037508342789244e-9, 54016: 14168658027268292e-9, 54017: 1736753044516137e-8, 54034: 20037508342789244e-9, 54079: 20037508342789244e-9, 54080: 20037508342789244e-9, 54100: 20037508342789244e-9, 54101: 20037508342789244e-9 };
var d = 32;
var w = 4;
var M = w;
var R2 = /* @__PURE__ */ new Map();
var S2 = /* @__PURE__ */ new Map();
var P = 500;
var b = 39.37;
var G2 = 96;
var k;
var E;
var T;
var N2 = false;
async function j2() {
  return k || (k = $(), E = await import("./projectOperator-SX2OHO52.js"), T = await import("./geographicTransformationUtils-J3COUZM2.js"), E.isLoaded() || await E.load(), T.isLoaded() || await T.load(), N2 = true, k.resolve()), k.promise;
}
function v(e, t, n2) {
  if (p(), n2) {
    const n3 = E.execute(e, t);
    return T.getTransformation(t, e.spatialReference, n3);
  }
  return T.getTransformation(e.spatialReference, t, e);
}
function C(e, t, n2, i) {
  const r2 = e.spatialReference;
  if (!r2 || !t || r2.equals(t)) return e;
  p();
  const s2 = n2.center, a = new z({ xmin: s2.x - e.x / 2, xmax: s2.x + e.x / 2, ymin: s2.y - e.y / 2, ymax: s2.y + e.y / 2, spatialReference: r2 }), l = E.execute(a, t, { geographicTransformation: i }), c2 = $2(t);
  return null == l || null != c2 && l.width >= c2 ? _2(e, r2, t) : { x: l.width, y: l.height };
}
function _2(e, t, n2) {
  const o = re(t) / re(n2);
  return { x: e.x * o, y: e.y * o };
}
function z2(e, n2, o) {
  const { spatialReference: r2 } = o;
  if (!r2 || !n2 || r2.equals(n2)) return e;
  if (r2.isGeographic && n2.isGeographic) return _2(e, r2, n2);
  if (p(), !N2) throw new r("raster-projection-helper:project-dataset-resolution", "geometry engine is not loaded");
  let { x: s2, y: a } = e;
  const l = (s2 + a) / 2 * re(r2);
  let c2 = 1;
  l > 30 && (c2 = 30 / l, s2 *= c2, a *= c2);
  const f = 256, x = s2 * f / 2, m = a * f / 2, { x: h, y: g2 } = o.center, y2 = [];
  for (let t = 0; t <= f; t++) y2.push([h - x, g2 - m + t * a]);
  for (let t = 1; t <= f; t++) y2.push([h - x + t * s2, g2 + m]);
  for (let t = 1; t <= f; t++) y2.push([h + x, g2 + m - t * a]);
  for (let t = 1; t < f; t++) y2.push([h + x - t * s2, g2 - m]);
  y2.push(y2[0]);
  const d2 = new j({ rings: [y2], spatialReference: r2 }), w2 = E.execute(d2, n2);
  if (!w2) return _2(e, r2, n2);
  const M2 = w2.extent, R3 = $2(n2);
  if (null == M2 || null != R3 && M2.width >= R3) return _2(e, r2, n2);
  const S3 = pe(w2.rings), P2 = s2 * a * f * f, b2 = Math.sqrt(S3 / P2) / c2, G3 = { x: M2.width / c2 / f, y: M2.height / c2 / f }, k2 = { x: s2 * b2, y: a * b2 }, T2 = G3.x * G3.y;
  return Math.abs(T2 - k2.x * k2.y) / T2 < 0.1 ? G3 : k2;
}
function L(e, t) {
  return ("number" == typeof e ? e : (e.x + e.y) / 2) * re(t) * G2 * b;
}
function W(e, t) {
  const { pixelSize: n2, extent: i } = e;
  return L(z2(n2, t, i), t);
}
function I(e, t = 0.01) {
  return re(e) ? t / re(e) : 0;
}
function O(e, t, n2, i = true) {
  const o = e.spatialReference;
  if (o.equals(t)) return e;
  p();
  const r2 = E.execute(e, t, { geographicTransformation: n2 });
  return i && r2 ? (A([e], [r2], o, t), r2) : r2;
}
function A(e, t, n2, i) {
  const o = ee(n2, true), r2 = ee(i, true), s2 = I(n2, P), a = I(i, P);
  if (s2 && null != o && null != r2) for (let l = 0; l < e.length; l++) {
    const n3 = t[l];
    if (!n3) continue;
    const { x: i2 } = e[l], { x: c2 } = n3;
    c2 >= r2[1] - a && Math.abs(i2 - o[0]) < s2 ? n3.x -= r2[1] - r2[0] : c2 <= r2[0] + a && Math.abs(i2 - o[1]) < s2 && (n3.x += r2[1] - r2[0]);
  }
}
function F(e) {
  const { inSR: t, outSR: n2, preferPE: i } = e;
  if (t.equals(n2)) {
    const { points: t2 } = X(e, null);
    return t2;
  }
  if (t.isWebMercator && n2.isWGS84 || t.isWGS84 && n2.isWebMercator) return B(e);
  if (i) {
    if (t.isGeographic) return Y(e);
    if (null != U(t)) return Y(e);
  }
  return q(e);
}
function q(e) {
  const { points: t } = X(e, null), { inSR: n2, outSR: i, datumTransformation: o } = e, r2 = t.map((e2) => new _(e2[0], e2[1], n2)), s2 = E.executeMany(r2, i, { geographicTransformation: o });
  return o && A(r2, s2, n2, i), s2.map((e2) => e2 ? [e2.x, e2.y] : [NaN, NaN]);
}
function Y(e) {
  const { inSR: t, outSR: n2, datumTransformation: i } = e, o = U(t), { points: a, mask: f } = X(e, o);
  if (!t.isGeographic) {
    const e2 = t.wkid ? c.coordsys(t.wkid) : c.fromString(t.isGeographic ? s.PE_TYPE_GEOGCS : s.PE_TYPE_PROJCS, t.wkt2 || t.wkt);
    n.projToGeog(e2, a.length, a);
  }
  if (null != i && i.steps.length) {
    let e2;
    const t2 = 179.9955;
    if (n2.isGeographic && (e2 = a.map(([e3]) => e3 > t2 ? 1 : e3 < -t2 ? -1 : 0)), i.steps.forEach((e3) => {
      const t3 = e3.wkid ? c.geogtran(e3.wkid) : c.fromString(s.PE_TYPE_GEOGTRAN, e3.wkt);
      u.geogToGeog(t3, a.length, a, null, e3.isInverse ? s.PE_TRANSFORM_2_TO_1 : s.PE_TRANSFORM_1_TO_2);
    }), e2) for (let n3 = 0; n3 < a.length; n3++) {
      const i2 = e2[n3], o2 = a[n3][0], r2 = o2 > t2 ? 1 : o2 < -t2 ? -1 : 0;
      i2 && r2 && i2 !== r2 && (a[n3][0] = i2 > 0 ? o2 + 360 : o2 - 360);
    }
  }
  if (!n2.isGeographic) {
    const e2 = U(n2, true), t2 = null != e2 && e2.isEnvelope ? [e2.bbox[1], e2.bbox[3]] : [-90, 90];
    K(a, t2);
    const i2 = n2.wkid ? c.coordsys(n2.wkid) : c.fromString(n2.isGeographic ? s.PE_TYPE_GEOGCS : s.PE_TYPE_PROJCS, n2.wkt2 || n2.wkt);
    n.geogToProj(i2, a.length, a);
  }
  let u2 = a;
  if (f && a.length !== f.length) {
    u2 = [];
    for (let e2 = 0, t2 = 0; e2 < f.length; e2++) f[e2] ? u2.push(a[t2++]) : u2.push([NaN, NaN]);
  }
  return u2;
}
function B(e) {
  const { cols: t, rows: n2, xres: i, yres: o, usePixelCenter: r2, inSR: s2, outSR: a } = e;
  let { xmin: l, ymax: c2 } = e;
  r2 && (l += i / 2, c2 -= o / 2);
  const u2 = [], m = [], h = Math.max(t, n2);
  for (let g2 = 0; g2 < h; g2++) {
    const e2 = l + i * Math.min(t, g2), r3 = c2 - o * Math.min(n2, g2), h2 = an(new _({ x: e2, y: r3, spatialReference: s2 }), s2, a);
    g2 <= t && u2.push(h2.x), g2 <= n2 && m.push(h2.y);
  }
  const p2 = [];
  for (let f = 0; f < t; f++) for (let e2 = 0; e2 < n2; e2++) p2.push([u2[f], m[e2]]);
  return p2;
}
function U(e, t = false) {
  let n2 = e.wkid || e.wkt2 || e.wkt;
  if (!n2 || e.isGeographic) return null;
  if (n2 = String(n2), R2.has(n2)) {
    const e2 = R2.get(n2);
    return t ? e2?.gcs : e2?.pcs;
  }
  const i = e.wkid ? c.coordsys(e.wkid) : c.fromString(e.isGeographic ? s.PE_TYPE_GEOGCS : s.PE_TYPE_PROJCS, e.wkt2 || e.wkt), o = J(i, I(e, 1e-4)), a = J(i, 0, true);
  return R2.set(n2, { pcs: o, gcs: a }), t ? a : o;
}
function J(e, t = 0, n2 = false) {
  const i = R.generate(e), o = n2 ? e.horizonGcsGenerate() : e.horizonPcsGenerate();
  if (!i || !o?.length) return null;
  let r2 = false, s2 = o.find((e2) => 1 === e2.getInclusive() && 1 === e2.getKind());
  if (!s2) {
    if (s2 = o.find((e2) => 1 === e2.getInclusive() && 0 === e2.getKind()), !s2) return null;
    r2 = true;
  }
  const l = n2 ? 0 : (2 === i.getNorthPoleLocation() ? 1 : 0) | (2 === i.getSouthPoleLocation() ? 2 : 0), c2 = i.isPannableRectangle(), f = s2.getCoord();
  if (r2) return { isEnvelope: r2, isPannable: c2, vertices: f, coef: null, bbox: [f[0][0] - t, f[0][1] - t, f[1][0] + t, f[1][1] + t], poleLocation: l };
  let u2 = 0;
  const x = [];
  let [m, h] = f[0], [p2, g2] = f[0];
  for (let a = 0, y2 = f.length; a < y2; a++) {
    u2++, u2 === y2 && (u2 = 0);
    const [e2, t2] = f[a], [n3, i2] = f[u2];
    if (i2 === t2) x.push([e2, n3, t2, i2, 2]);
    else {
      const o2 = (n3 - e2) / (i2 - t2 || 1e-4), r3 = e2 - o2 * t2;
      t2 < i2 ? x.push([o2, r3, t2, i2, 0]) : x.push([o2, r3, i2, t2, 1]);
    }
    m = m < e2 ? m : e2, h = h < t2 ? h : t2, p2 = p2 > e2 ? p2 : e2, g2 = g2 > t2 ? g2 : t2;
  }
  return { isEnvelope: false, isPannable: c2, vertices: f, coef: x, bbox: [m, h, p2, g2], poleLocation: l };
}
function X(e, t) {
  const n2 = [], { cols: i, rows: o, xres: r2, yres: s2, usePixelCenter: a } = e;
  let { xmin: l, ymax: c2 } = e;
  if (a && (l += r2 / 2, c2 -= s2 / 2), null == t) {
    for (let e2 = 0; e2 < i; e2++) for (let t2 = 0; t2 < o; t2++) n2.push([l + r2 * e2, c2 - s2 * t2]);
    return { points: n2 };
  }
  const f = new Uint8Array(i * o);
  if (t.isEnvelope) {
    const { isPannable: e2, bbox: [a2, u3, x2, m] } = t;
    for (let t2 = 0, h = 0; t2 < i; t2++) {
      const i2 = l + r2 * t2, p2 = e2 || i2 >= a2 && i2 <= x2;
      for (let e3 = 0; e3 < o; e3++, h++) {
        const t3 = c2 - s2 * e3;
        p2 && t3 >= u3 && t3 <= m && (n2.push([i2, t3]), f[h] = 1);
      }
    }
    return { points: n2, mask: f };
  }
  const u2 = t.coef, x = [];
  for (let m = 0; m < o; m++) {
    const e2 = c2 - s2 * m, t2 = [], n3 = [];
    for (let o2 = 0; o2 < u2.length; o2++) {
      const [i3, r3, s3, a2, l2] = u2[o2];
      if (e2 === s3 && s3 === a2) t2.push(i3), t2.push(r3), n3.push(2), n3.push(2);
      else if (e2 >= s3 && e2 <= a2) {
        const o3 = i3 * e2 + r3;
        t2.push(o3), n3.push(l2);
      }
    }
    let i2 = t2;
    if (t2.length > 2) {
      let e3 = 2 === n3[0] ? 0 : n3[0], o2 = t2[0];
      i2 = [];
      for (let r3 = 1; r3 < n3.length; r3++) 2 === n3[r3] && r3 !== n3.length - 1 || (n3[r3] !== e3 && (i2.push(0 === e3 ? Math.min(o2, t2[r3 - 1]) : Math.max(o2, t2[r3 - 1])), e3 = n3[r3], o2 = t2[r3]), r3 === n3.length - 1 && i2.push(0 === n3[r3] ? Math.min(o2, t2[r3]) : Math.max(o2, t2[r3])));
      i2.sort((e4, t3) => e4 - t3);
    } else t2[0] > t2[1] && (i2 = [t2[1], t2[0]]);
    x.push(i2);
  }
  for (let m = 0, h = 0; m < i; m++) {
    const e2 = l + r2 * m;
    for (let t2 = 0; t2 < o; t2++, h++) {
      const i2 = c2 - s2 * t2, o2 = x[t2];
      if (2 === o2.length) e2 >= o2[0] && e2 <= o2[1] && (n2.push([e2, i2]), f[h] = 1);
      else if (o2.length > 2) {
        let t3 = false;
        for (let n3 = 0; n3 < o2.length; n3 += 2) if (e2 >= o2[n3] && e2 <= o2[n3 + 1]) {
          t3 = true;
          break;
        }
        t3 && (n2.push([e2, i2]), f[h] = 1);
      }
    }
  }
  return { points: n2, mask: f };
}
function K(e, t) {
  const [n2, i] = t;
  for (let o = 0; o < e.length; o++) {
    const t2 = e[o][1];
    (t2 < n2 || t2 > i) && (e[o] = [NaN, NaN]);
  }
}
function D(e, t) {
  const n2 = $2(e[0].spatialReference);
  if (e.length < 2 || null == n2) return e[0];
  if (t = t ?? I(e[0].spatialReference), 1 === (e = e.filter((e2) => e2.width > t)).length) return e[0];
  let { xmin: i, xmax: r2, ymin: s2, ymax: a } = e[0];
  for (let o = 1; o < e.length; o++) {
    const t2 = e[o];
    r2 = t2.xmax + n2 * o, s2 = Math.min(s2, t2.ymin), a = Math.max(a, t2.ymax);
  }
  return new z({ xmin: i, xmax: r2, ymin: s2, ymax: a, spatialReference: e[0].spatialReference });
}
function H(t, n2, i = null, r2 = true) {
  const s2 = t.spatialReference;
  if (s2.equals(n2) || !n2) return t;
  const a = ne(t), l = $2(s2, true), c2 = $2(n2);
  if (0 === a || null == l || null == c2) {
    const e = Z(t, n2, i, r2);
    if (e && null == l && null != c2 && Math.abs(e.width - c2) < I(n2) && E.isLoaded()) {
      const i2 = U(s2);
      if (null != i2 && 0 === i2.poleLocation && t.width < (i2.bbox[2] - i2.bbox[0]) / 2) return V(t, n2) || e;
    }
    return e;
  }
  const f = t.clone().normalize();
  if (1 === f.length && t.xmax < l && t.xmax - l / 2 > I(s2)) {
    const { xmin: e, xmax: n3 } = t;
    for (let i2 = 0; i2 <= a; i2++) {
      const r3 = 0 === i2 ? e : -l / 2, c3 = i2 === a ? n3 - l * i2 : l / 2;
      f[i2] = new z({ xmin: r3, xmax: c3, ymin: t.ymin, ymax: t.ymax, spatialReference: s2 });
    }
  }
  const u2 = f.map((e) => Z(e, n2, i, r2)).filter(N);
  return 0 === u2.length ? null : D(u2);
}
function Q(e, t, n2) {
  if ("extent" === e.type) {
    const { xmin: t2, ymin: n3, xmax: i, ymax: o, spatialReference: r2 } = e;
    e = new j({ rings: [[[t2, o], [i, o], [i, n3], [t2, n3], [t2, o]]], spatialReference: r2 });
  }
  return e.spatialReference.equals(t) ? e : (p(), E.execute(e, t, { geographicTransformation: n2 }));
}
function V(e, t) {
  const n2 = $2(t);
  if (null == n2) return null;
  let { xmin: i, ymin: r2, xmax: s2, ymax: a } = e;
  const l = e.spatialReference, c2 = new j({ spatialReference: l, rings: [[[i, r2], [s2, r2], [s2, a], [i, a], [i, r2]]] }), f = E.execute(c2, t);
  if (2 !== f.rings.length || !f.rings[0].length || !f.rings[1].length) return null;
  const { rings: x } = f, m = I(l), h = new z({ spatialReference: t });
  for (let o = 0; o < 2; o++) {
    i = s2 = x[o][0][0], r2 = a = x[o][0][1];
    for (let e2 = 0; e2 < x[o].length; e2++) i = i > x[o][e2][0] ? x[o][e2][0] : i, s2 = s2 < x[o][e2][0] ? x[o][e2][0] : s2, r2 = r2 > x[o][e2][1] ? x[o][e2][1] : r2, a = a < x[o][e2][1] ? x[o][e2][1] : a;
    if (0 === o) h.ymin = r2, h.ymax = a, h.xmin = i, h.xmax = s2;
    else if (h.ymin = Math.min(h.ymin, r2), h.ymax = Math.max(h.ymax, a), Math.abs(s2 - n2 / 2) < m) h.xmin = i, h.xmax = h.xmax + n2;
    else {
      if (!(Math.abs(i + n2 / 2) < m)) return null;
      h.xmax = s2 + n2;
    }
  }
  return h;
}
function Z(e, t, n2, i = true, o = true) {
  const r2 = e.spatialReference;
  if (r2.equals(t) || !t) return e;
  p();
  const s2 = E.execute(e, t, { geographicTransformation: n2 });
  if (o && t.isWebMercator && s2 && (s2.ymax = Math.min(20037508342787e-6, s2.ymax), s2.ymin = Math.max(-20037508342787e-6, s2.ymin), s2.ymin >= s2.ymax)) return null;
  if (!i || !s2) return s2;
  const a = ee(r2, true), l = ee(t, true);
  if (null == a || null == l) return s2;
  const c2 = I(r2, 1e-3), u2 = I(r2, P), x = I(t, 1e-3);
  if (Math.abs(s2.xmin - l[0]) < x && Math.abs(s2.xmax - l[1]) < x) {
    const i2 = Math.abs(e.xmin - a[0]), o2 = Math.abs(a[1] - e.xmax);
    if (i2 < c2 && o2 > u2) {
      s2.xmin = l[0];
      const i3 = [];
      i3.push(new _(e.xmax, e.ymin, r2)), i3.push(new _(e.xmax, (e.ymin + e.ymax) / 2, r2)), i3.push(new _(e.xmax, e.ymax, r2));
      const o3 = i3.map((e2) => O(e2, t, n2)).filter((e2) => !isNaN(e2?.x)).map((e2) => e2.x);
      s2.xmax = Math.max.apply(null, o3);
    }
    if (o2 < c2 && i2 > u2) {
      s2.xmax = l[1];
      const i3 = [];
      i3.push(new _(e.xmin, e.ymin, r2)), i3.push(new _(e.xmin, (e.ymin + e.ymax) / 2, r2)), i3.push(new _(e.xmin, e.ymax, r2));
      const o3 = i3.map((e2) => O(e2, t, n2)).filter((e2) => !isNaN(e2?.x)).map((e2) => e2.x);
      s2.xmin = Math.min.apply(null, o3);
    }
  } else {
    const e2 = I(t, 1e-3);
    Math.abs(s2.xmin - l[0]) < e2 && (s2.xmin = l[0]), Math.abs(s2.xmax - l[1]) < e2 && (s2.xmax = l[1]);
  }
  return s2;
}
function $2(e, t = false) {
  if (!e) return null;
  const n2 = t ? 20037508342787e-6 : 20037508342788905e-9;
  return e.isWebMercator ? 2 * n2 : e.wkid && e.isGeographic ? 360 : 2 * y[e.wkid] || null;
}
function ee(e, t = false) {
  if (e.isGeographic) return [-180, 180];
  const n2 = $2(e, t);
  return n2 ? [-n2 / 2, n2 / 2] : null;
}
function te(e, t, n2, i) {
  let o = (e - t) / n2;
  return o - Math.floor(o) !== 0 ? o = Math.floor(o) : i && (o -= 1), o;
}
function ne(e, t = false) {
  const n2 = $2(e.spatialReference);
  if (null == n2) return 0;
  const i = t ? 0 : -(n2 / 2), o = I(e.spatialReference), r2 = !t && Math.abs(e.xmax - n2 / 2) < o ? n2 / 2 : e.xmax, s2 = !t && Math.abs(e.xmin + n2 / 2) < o ? -n2 / 2 : e.xmin;
  return te(r2, i, n2, true) - te(s2, i, n2, false);
}
function ie(e) {
  const t = e.storageInfo.origin.x, n2 = $2(e.spatialReference, true);
  if (null == n2) return { originX: t, halfWorldWidth: null, pyramidsInfo: null };
  const i = n2 / 2, { nativePixelSize: o, storageInfo: r2, extent: s2 } = e, { maximumPyramidLevel: a, blockWidth: l, pyramidScalingFactor: c2 } = r2;
  let f = o.x;
  const u2 = [], x = null != e.transform && "gcs-shift" === e.transform.type, m = t + (x ? 0 : i), h = x ? n2 - t : i - t;
  for (let p2 = 0; p2 <= a; p2++) {
    const e2 = (s2.xmax - t) / f / l, n3 = e2 - Math.floor(e2) === 0 ? e2 : Math.ceil(e2), i2 = h / f / l, o2 = i2 - Math.floor(i2) === 0 ? i2 : Math.ceil(i2), r3 = Math.floor(m / f / l), a2 = Math.round(m / f) % l, x2 = (l - Math.round(h / f) % l) % l;
    u2.push({ resolutionX: f, blockWidth: l, datasetColumnCount: n3, worldColumnCountFromOrigin: o2, leftMargin: a2, rightPadding: x2, originColumnOffset: r3 }), f *= c2;
  }
  return { originX: t, halfWorldWidth: i, pyramidsInfo: u2, hasGCSSShiftTransform: x };
}
function oe(e) {
  if (!e || e.isGeographic) return e;
  const t = String(e.wkid || e.wkt2 || e.wkt);
  let n2;
  if (S2.has(t)) n2 = S2.get(t);
  else {
    n2 = (e.wkid ? c.coordsys(e.wkid) : c.fromString(s.PE_TYPE_PROJCS, e.wkt2 || e.wkt)).getGeogcs().getCode(), S2.set(t, n2);
  }
  return new S({ wkid: n2 });
}
function re2(e) {
  const t = e.isAdaptive && null == e.spacing;
  let n2 = e.spacing || [d, d], i = se(e), o = { cols: i.size[0] + 1, rows: i.size[1] + 1 };
  const r2 = i.outofBoundPointCount > 0 && i.outofBoundPointCount < i.offsets.length / 2;
  let s2 = i.outofBoundPointCount === i.offsets.length / 2 || t && r2 ? [0, 0] : g(i.offsets, o, n2, M);
  const a = (s2[0] + s2[1]) / 2, l = e.projectedExtent.spatialReference, c2 = e.srcBufferExtent.spatialReference;
  if (t && (r2 || a > M) && (l.isGeographic || U(l), n2 = [w, w], i = se(__spreadProps(__spreadValues({}, e), { spacing: n2 })), o = { cols: i.size[0] + 1, rows: i.size[1] + 1 }, s2 = g(i.offsets, o, n2, M)), i.error = s2, n2[0] > 1 && (i.coefficients = ae(i.offsets, o, r2)), e.includeGCSGrid && !l.isGeographic && !l.isWebMercator) if (c2.isGeographic) i.gcsGrid = { offsets: i.offsets, coefficients: i.coefficients, spacing: n2 };
  else {
    const t2 = U(l);
    if (null != t2 && !t2.isEnvelope) {
      const t3 = oe(l), s3 = H(e.projectedExtent, t3), { offsets: a2 } = se(__spreadProps(__spreadValues({}, e), { srcBufferExtent: s3, spacing: n2 })), c3 = ae(a2, o, r2);
      i.gcsGrid = { offsets: a2, coefficients: c3, spacing: n2 };
    }
  }
  return i;
}
function se(e) {
  const { projectedExtent: t, srcBufferExtent: n2, pixelSize: i, datumTransformation: o, rasterTransform: r2 } = e, s2 = t.spatialReference, a = n2.spatialReference;
  p();
  const { xmin: l, ymin: c2, xmax: u2, ymax: x } = t, m = $2(a), h = null != m && (e.hasWrapAround || "gcs-shift" === r2?.type), g2 = e.spacing || [d, d], y2 = g2[0] * i.x, M2 = g2[1] * i.y, R3 = 1 === g2[0], S3 = Math.ceil((u2 - l) / y2 - 0.1 / g2[0]) + (R3 ? 0 : 1), b2 = Math.ceil((x - c2) / M2 - 0.1 / g2[1]) + (R3 ? 0 : 1), G3 = F({ cols: S3, rows: b2, xmin: l, ymax: x, xres: y2, yres: M2, inSR: s2, outSR: a, datumTransformation: o, preferPE: g2[0] <= w, usePixelCenter: R3 }), k2 = [];
  let E2, T2 = 0;
  const N3 = R3 ? -1 : NaN, { xmin: j3, xmax: v2, ymax: C2, width: _3, height: z3 } = n2, L2 = I(a, P), W2 = null != m && j3 > 0 && v2 > m / 2, O2 = U(s2), A2 = null != O2 && O2.poleLocation > 0;
  for (let p2 = 0; p2 < S3; p2++) {
    const e2 = [];
    for (let t2 = 0; t2 < b2; t2++) {
      let n3 = G3[p2 * b2 + t2];
      if (h && n3[0] > v2 && n3[0] > m / 2 - L2 ? n3[0] -= m : h && 0 === p2 && n3[0] < 0 && W2 && !r2 && (n3[0] += m), !n3 || isNaN(n3[0]) || isNaN(n3[1])) k2.push(N3), k2.push(N3), e2.push(null), T2++;
      else {
        if (r2) {
          const e3 = r2.inverseTransform(new _({ x: n3[0], y: n3[1], spatialReference: a }));
          n3 = [e3.x, e3.y];
        }
        e2.push(n3), p2 > 0 && h && E2[t2] && n3[0] < E2[t2][0] && (n3[0] += m, A2 && n3[0] > v2 && n3[0] > m && (n3[0] -= m)), k2.push((n3[0] - j3) / _3), k2.push((C2 - n3[1]) / z3);
      }
    }
    E2 = e2;
  }
  return { offsets: k2, error: null, coefficients: null, outofBoundPointCount: T2, spacing: g2, size: R3 ? [S3, b2] : [S3 - 1, b2 - 1] };
}
function ae(e, t, n2) {
  const { cols: i, rows: o } = t, r2 = new Float32Array((i - 1) * (o - 1) * 2 * 6), s2 = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), a = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let l = 0; l < i - 1; l++) {
    for (let t2 = 0; t2 < o - 1; t2++) {
      let n3 = l * o * 2 + 2 * t2;
      const c2 = e[n3], f = e[n3 + 1], u2 = e[n3 + 2], x = e[n3 + 3];
      n3 += 2 * o;
      const m = e[n3], h = e[n3 + 1], p2 = e[n3 + 2], g2 = e[n3 + 3];
      let y2 = 0, d2 = 12 * (t2 * (i - 1) + l);
      for (let e2 = 0; e2 < 3; e2++) r2[d2++] = s2[y2++] * c2 + s2[y2++] * u2 + s2[y2++] * p2;
      y2 = 0;
      for (let e2 = 0; e2 < 3; e2++) r2[d2++] = s2[y2++] * f + s2[y2++] * x + s2[y2++] * g2;
      y2 = 0;
      for (let e2 = 0; e2 < 3; e2++) r2[d2++] = a[y2++] * c2 + a[y2++] * m + a[y2++] * p2;
      y2 = 0;
      for (let e2 = 0; e2 < 3; e2++) r2[d2++] = a[y2++] * f + a[y2++] * h + a[y2++] * g2;
    }
    if (n2) for (let e2 = 0; e2 < r2.length; e2++) isNaN(r2[e2]) && (r2[e2] = -1);
  }
  return r2;
}
function le(e, t) {
  const n2 = e.clone().normalize();
  return 1 === n2.length ? n2[0] : D(n2, t);
}
function ce(e) {
  const { spatialReference: t } = e, n2 = G(t);
  if (!n2) return e;
  const [i, r2] = n2.valid, s2 = r2 - i;
  let a = 0;
  if (e.xmin < i) {
    const t2 = i - e.xmin;
    a = Math.ceil(t2 / s2);
  } else if (e.xmin > r2) {
    const t2 = e.xmin - r2;
    a = -Math.ceil(t2 / s2);
  }
  return new z({ spatialReference: e.spatialReference, xmin: e.xmin + a * s2, ymin: e.ymin, xmax: e.xmax + a * s2, ymax: e.ymax });
}
function fe(e, t, n2) {
  const { storageInfo: o, pixelSize: r2 } = t;
  let s2 = 0, a = false;
  const { pyramidResolutions: l } = o, c2 = "mixed" === o.tileInfo.format?.toLowerCase() ? Math.max(1, Math.min(3, o.tileInfo.dpi / 96)) : 1, u2 = (e.x + e.y) / 2 / c2;
  if (null != l && l.length) {
    const e2 = l[l.length - 1], o2 = (e2.x + e2.y) / 2, c3 = (r2.x + r2.y) / 2;
    if (u2 <= c3) s2 = 0;
    else if (u2 >= o2) s2 = l.length, a = u2 / o2 > 8;
    else {
      let e3, t2 = c3;
      for (let i = 1; i <= l.length; i++) {
        if (e3 = (l[i - 1].x + l[i - 1].y) / 2, u2 <= e3) {
          u2 === e3 ? s2 = i : "down" === n2 ? (s2 = i - 1, a = u2 / t2 > 8) : s2 = "up" === n2 || u2 - t2 > e3 - u2 || u2 / t2 > 2 ? i : i - 1;
          break;
        }
        t2 = e3;
      }
    }
    const x2 = 0 === s2 ? r2 : l[s2 - 1];
    if (a) {
      Math.min(x2.x, x2.y) * re(t.spatialReference) > 19567 && (a = false);
    }
    return { pyramidLevel: s2, pyramidResolution: new _({ x: x2.x, y: x2.y, spatialReference: t.spatialReference }), excessiveReading: a };
  }
  const x = Math.log(e.x / r2.x) / Math.LN2, m = Math.log(e.y / r2.y) / Math.LN2, h = t.storageInfo.maximumPyramidLevel || 0;
  s2 = "down" === n2 ? Math.floor(Math.min(x, m)) : "up" === n2 ? Math.ceil(Math.max(x, m)) : Math.round((x + m) / 2), s2 < 0 ? s2 = 0 : s2 > h && (a = s2 > h + 3, s2 = h);
  const p2 = 2 ** s2;
  return { pyramidLevel: s2, pyramidResolution: new _({ x: p2 * t.nativePixelSize.x, y: p2 * t.nativePixelSize.y, spatialReference: t.spatialReference }), excessiveReading: a };
}
function ue(e, t, n2 = false) {
  const { pixelSize: i, extent: o } = e, r2 = v(o, t, false), s2 = H(le(o, (i.x + i.y) / 16), t, r2);
  return !s2 || n2 || 0 === ne(s2) ? s2 : Z(o, t, r2);
}
function xe(e, t, n2) {
  const i = n2?.tileSize ?? 512, o = n2?.alignGlobalDatasetWithAGOL ?? true, r2 = !!n2?.limitToSrcResolution, { extent: s2, pixelSize: a } = e, l = z2(a, t, s2);
  if (null == l) return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: false };
  const c2 = (l.x + l.y) / 2, f = L(c2, t), u2 = 256 / i, x = t.isGeographic ? 2958287637958547e-7 * u2 : 591657527591555e-6 * u2, m = (t.isGeographic ? 0.703125 : 156543.03392800014) * u2;
  let h = "vector-magdir" === e.dataType || "vector-uv" === e.dataType;
  const p2 = ue(e, t, true), g2 = Math.min(Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2), Math.ceil(Math.log(x / 2 / f) / Math.LN2));
  if (!h && p2 && o && (t.isGeographic || t.isWebMercator)) {
    const n3 = $2(t);
    if (h = ne(p2) > 0 || null != n3 && p2.width > n3 / 4, !h && null != n3) {
      let t2 = -1;
      if (g2 < 3) t2 = 2 ** g2 * c2 * i;
      else if (e.storageInfo) {
        const { maximumPyramidLevel: n4 = 0, pyramidScalingFactor: o3 = 2 } = e.storageInfo;
        t2 = o3 ** n4 * c2 * i;
      }
      const o2 = Math.ceil(n3 / t2);
      h = 1 === o2 || 2 === o2 && n3 / 2 - p2.xmax < t2;
    }
  }
  let y2, d2 = f;
  const w2 = 1.001, M2 = Math.min(2, Math.max(1.414, e.storageInfo?.pyramidScalingFactor || 2));
  if (h) {
    d2 = x;
    const n3 = me(e, t);
    y2 = { x: n3.x * m, y: n3.y * m };
  } else {
    y2 = { x: a.x, y: a.y };
    let e2 = 0;
    for (; d2 < x * (w2 / 2) && e2 < g2; ) e2++, d2 *= M2, y2.x *= M2, y2.y *= M2;
    Math.max(d2, x) / Math.min(d2, x) <= w2 && (d2 = x);
  }
  const R3 = [d2], S3 = [{ x: y2.x, y: y2.y }], P2 = 70.5310735, b2 = Math.min(P2, f) / w2;
  for (; d2 >= b2; ) d2 /= M2, y2.x /= M2, y2.y /= M2, R3.push(d2), S3.push({ x: y2.x, y: y2.y });
  if (r2) {
    const e2 = 1e-3 * a.x;
    let t2 = S3.findIndex((t3) => t3.x >= a.x - e2 && t3.x <= a.x + e2);
    t2 > -1 ? (S3.length = t2 + 1, R3.length = t2 + 1) : (t2 = S3.findIndex((t3) => t3.x <= a.x + e2), t2 > 0 && (S3.length = t2, R3.length = t2));
  }
  return { projectedPixelSize: l, scales: R3, srcResolutions: S3, isCustomTilingScheme: !h };
}
function me(e, t) {
  if (t.isWGS84 || t.isWebMercator) {
    const n3 = t.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, i2 = t.isGeographic ? 4326 : 3857, o = ue(e, new S({ wkid: i2 }), true), r2 = z2({ x: n3, y: n3 }, e.spatialReference, o);
    return { x: r2.x / n3, y: r2.y / n3 };
  }
  const n2 = z2(e.pixelSize, t, e.extent), i = (n2.x + n2.y) / 2;
  return { x: e.pixelSize.x / i, y: e.pixelSize.y / i };
}
function pe(e) {
  let t = 0;
  for (const n2 of e) {
    const e2 = n2.length;
    let i = n2[0][0] * (n2[1][1] - n2[e2 - 2][1]);
    for (let t2 = 1; t2 < e2 - 1; t2++) i += n2[t2][0] * (n2[t2 + 1][1] - n2[t2 - 1][1]);
    t += i / 2;
  }
  return Math.abs(t);
}

export {
  j2 as j,
  v,
  C,
  W,
  O,
  H,
  Q,
  $2 as $,
  ne,
  ie,
  re2 as re,
  ce,
  fe,
  ue,
  xe
};
//# sourceMappingURL=chunk-HDVL2X36.js.map
