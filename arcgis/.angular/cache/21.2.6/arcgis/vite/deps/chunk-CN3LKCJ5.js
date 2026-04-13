import {
  s as s2
} from "./chunk-SEVWV2FY.js";
import {
  e as e2
} from "./chunk-JNCFJPS4.js";
import {
  e as e3
} from "./chunk-ULJA4TCB.js";
import {
  C,
  v
} from "./chunk-IBGMUXG6.js";
import {
  o
} from "./chunk-SVWIACQP.js";
import {
  e,
  i,
  l,
  o as o2,
  s,
  t
} from "./chunk-47Z5HJ52.js";
import {
  n2
} from "./chunk-POW25PFR.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/centroid.js
function n3(t2, n4) {
  return t2 ? n4 ? 4 : 3 : n4 ? 3 : 2;
}
function r2(n4) {
  if (null == n4) return null;
  if (!n4?.lengths.length) return null;
  const { lengths: r3, coords: u2, stride: N2, hasZ: o5, hasM: l3 } = n4, s4 = new s2([], [], o5, false), c = s4.coords, f = [], i2 = o5 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  let T2 = 0;
  for (const t2 of r3) {
    const n5 = e4(i2, u2, T2, t2, o5, l3);
    n5 && f.push(n5), T2 += t2 * N2;
  }
  if (f.sort((t2, n5) => {
    let r4 = t2[2] - n5[2];
    return 0 === r4 && o5 && (r4 = t2[4] - n5[4]), r4;
  }), f.length) {
    let t2 = 6 * f[0][2];
    c[0] = f[0][0] / t2, c[1] = f[0][1] / t2, o5 && (t2 = 6 * f[0][4], c[2] = 0 !== t2 ? f[0][3] / t2 : 0), (c[0] < i2[0] || c[0] > i2[1] || c[1] < i2[2] || c[1] > i2[3] || o5 && (c[2] < i2[4] || c[2] > i2[5])) && (c.length = 0);
  }
  if (!c.length) {
    const t2 = n4.lengths[0] ? I(u2, 0, r3[0], o5, l3) : null;
    if (!t2) return null;
    c[0] = t2[0], c[1] = t2[1], o5 && (c[2] = t2[2] ?? 0);
  }
  return s4;
}
function e4(t2, r3, e6, I3, u2, N2) {
  const o5 = n3(u2, N2);
  let l3 = e6, s4 = e6 + o5, c = 0, f = 0, i2 = 0, T2 = 0, E2 = 0;
  for (let n4 = 0, h = I3 - 1; n4 < h; n4++, l3 += o5, s4 += o5) {
    const n5 = r3[l3], e7 = r3[l3 + 1], I4 = r3[l3 + 2], N3 = r3[s4], o6 = r3[s4 + 1], m2 = r3[s4 + 2];
    let h2 = n5 * o6 - N3 * e7;
    T2 += h2, c += (n5 + N3) * h2, f += (e7 + o6) * h2, u2 && (h2 = n5 * m2 - N3 * I4, i2 += (I4 + m2) * h2, E2 += h2), n5 < t2[0] && (t2[0] = n5), n5 > t2[1] && (t2[1] = n5), e7 < t2[2] && (t2[2] = e7), e7 > t2[3] && (t2[3] = e7), u2 && (I4 < t2[4] && (t2[4] = I4), I4 > t2[5] && (t2[5] = I4));
  }
  if (T2 > 0 && (T2 *= -1), E2 > 0 && (E2 *= -1), !T2) return null;
  const m = [c, f, 0.5 * T2];
  return u2 && (m[3] = i2, m[4] = 0.5 * E2), m;
}
function I(t2, r3, e6, I3, s4) {
  const c = n3(I3, s4);
  let f = r3, i2 = r3 + c, T2 = 0, E2 = 0, m = 0, h = 0;
  for (let n4 = 0, b2 = e6 - 1; n4 < b2; n4++, f += c, i2 += c) {
    const n5 = t2[f], r4 = t2[f + 1], e7 = t2[f + 2], s5 = t2[i2], c2 = t2[i2 + 1], b3 = t2[i2 + 2], F2 = I3 ? N(n5, r4, e7, s5, c2, b3) : u(n5, r4, s5, c2);
    if (F2) if (T2 += F2, I3) {
      const t3 = l2(n5, r4, e7, s5, c2, b3);
      E2 += F2 * t3[0], m += F2 * t3[1], h += F2 * t3[2];
    } else {
      const t3 = o3(n5, r4, s5, c2);
      E2 += F2 * t3[0], m += F2 * t3[1];
    }
  }
  return T2 > 0 ? I3 ? [E2 / T2, m / T2, h / T2] : [E2 / T2, m / T2] : e6 > 0 ? I3 ? [t2[r3], t2[r3 + 1], t2[r3 + 2]] : [t2[r3], t2[r3 + 1]] : null;
}
function u(t2, n4, r3, e6) {
  const I3 = r3 - t2, u2 = e6 - n4;
  return Math.sqrt(I3 * I3 + u2 * u2);
}
function N(t2, n4, r3, e6, I3, u2) {
  const N2 = e6 - t2, o5 = I3 - n4, l3 = u2 - r3;
  return Math.sqrt(N2 * N2 + o5 * o5 + l3 * l3);
}
function o3(t2, n4, r3, e6) {
  return [t2 + 0.5 * (r3 - t2), n4 + 0.5 * (e6 - n4)];
}
function l2(t2, n4, r3, e6, I3, u2) {
  return [t2 + 0.5 * (e6 - t2), n4 + 0.5 * (I3 - n4), r3 + 0.5 * (u2 - r3)];
}

// node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js
var o4 = class _o {
  constructor(t2 = null, e6 = {}, r3, o5, s4 = 0) {
    this.geometry = t2, this.attributes = e6, this.centroid = r3, this.objectId = o5, this.displayId = s4;
  }
  static fromJSON(t2) {
    const e6 = t2.geometry ? s2.fromJSON(t2.geometry) : null, s4 = t2.centroid ? s2.fromJSON(t2.centroid) : null, i2 = t2.objectId;
    return new _o(e6, t2.attributes, s4, i2);
  }
  weakClone() {
    const t2 = new _o(this.geometry, this.attributes, this.centroid, this.objectId);
    return t2.displayId = this.displayId, t2;
  }
  clone() {
    const t2 = this.geometry?.clone(), e6 = new _o(t2, __spreadValues({}, this.attributes), this.centroid?.clone(), this.objectId);
    return e6.displayId = this.displayId, e6;
  }
  ensureCentroid(t2) {
    return this.centroid ??= r2(this.geometry), this.centroid;
  }
  get usedMemory() {
    return 128 + e2(this.attributes) + (this.geometry?.usedMemory ?? 0);
  }
};
function s3(t2) {
  return !!t2.geometry?.coords?.length;
}

// node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js
var e5 = class _e {
  constructor() {
    this.globalIdFieldName = null, this.geohashFieldName = null, this.geometryProperties = null, this.geometryType = null, this.spatialReference = null, this.hasZ = false, this.hasM = false, this.features = [], this.fields = [], this.transform = null, this.exceededTransferLimit = false, this.uniqueIdField = null, this.queryGeometryType = null, this.queryGeometry = null;
  }
  weakClone() {
    const t2 = new _e();
    return t2.globalIdFieldName = this.globalIdFieldName, t2.geohashFieldName = this.geohashFieldName, t2.geometryProperties = this.geometryProperties, t2.geometryType = this.geometryType, t2.spatialReference = this.spatialReference, t2.hasZ = this.hasZ, t2.hasM = this.hasM, t2.features = this.features, t2.fields = this.fields, t2.transform = this.transform, t2.exceededTransferLimit = this.exceededTransferLimit, t2.uniqueIdField = this.uniqueIdField, t2.queryGeometry = this.queryGeometry, t2.queryGeometryType = this.queryGeometryType, t2;
  }
};

// node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var y = () => n.getLogger("esri.layers.graphics.featureConversionUtils");
var p = { esriGeometryPoint: 0, esriGeometryPolyline: 2, esriGeometryPolygon: 3, esriGeometryMultipoint: 0, esriGeometryMultiPatch: 3, esriGeometryEnvelope: 0 };
function I2({ scale: t2, translate: e6 }, r3) {
  return Math.round((r3 - e6[0]) / t2[0]);
}
function M({ scale: t2, translate: e6 }, r3) {
  return Math.round((e6[1] - r3) / t2[1]);
}
function b({ scale: t2, translate: e6 }, r3) {
  return Math.round((r3 - e6[0]) / t2[0]);
}
function w({ scale: t2, translate: e6 }, r3) {
  return Math.round((r3 - e6[1]) / t2[1]);
}
function T({ scale: t2, translate: e6 }, r3, n4) {
  return r3 * t2[n4] + e6[n4];
}
function P(t2, e6, r3) {
  return e6 && (t2.hasZ = true), r3 && (t2.hasM = true), t2;
}
function F(t2, e6, r3, n4) {
  if (e6 && n4 && t2 !== r3) return (e7, r4, n5, o6) => {
    n5[o6++] = e7[r4++], n5[o6++] = e7[r4++], t2 ? r4++ : n5[o6++] = 0, n5[o6++] = e7[r4++] ?? 0;
  };
  const o5 = 2 + (r3 ? 1 : 0) + (n4 ? 1 : 0), s4 = o5 - ((!t2 && r3 ? 1 : 0) + (!e6 && n4 ? 1 : 0));
  return (t3, e7, r4, n5) => {
    for (let u2 = 0; u2 < o5; ++u2) r4[n5++] = u2 < s4 ? t3[e7++] ?? 0 : 0;
  };
}
function Z(t2, e6, r3) {
  if (!t2) return null;
  const { coords: n4, hasZ: o5, hasM: s4 } = t2, [u2, c] = n4, l3 = o5 ? n4[2] : 0, i2 = s4 ? n4[2 + (o5 ? 1 : 0)] : 0;
  return { x: u2, y: c, z: e6 ? l3 : void 0, m: r3 ? i2 : void 0 };
}
function x(t2, e6, r3, n4) {
  for (const { geometry: o5, attributes: s4 } of e6) t2.push({ attributes: s4, geometry: Z(o5, r3, n4) });
  return t2;
}
function E(t2, e6, r3, n4, o5) {
  for (const s4 of e6) {
    const { geometry: e7, attributes: u2, centroid: c } = s4, l3 = l(e7), i2 = s(e7);
    t2.push(new o4(e7 ? j(e7, r3 && l3, n4 && i2) : null, u2, c ? j(c, false, false) : null, e3(s4, o5)));
  }
  return t2;
}
function j(t2, e6 = l(t2), r3 = s(t2)) {
  const { x: n4, y: o5, z: s4, m: u2 } = t2, c = [n4, o5];
  return e6 && c.push(s4 ?? 0), r3 && c.push(u2 ?? 0), new s2([], c, e6, r3);
}
function v2(t2, e6, r3, n4) {
  for (const { geometry: o5, attributes: s4 } of e6) t2.push({ geometry: o5 && k(o5, r3, n4), attributes: s4 });
  return t2;
}
function k(t2, e6, r3) {
  if (null == t2) return null;
  const { coords: n4, stride: o5, hasZ: s4, hasM: u2 } = t2, c = F(s4, u2, e6, r3), l3 = [];
  for (let i2 = 0; i2 < n4.length; i2 += o5) {
    const t3 = [];
    c(n4, i2, t3, 0), l3.push(t3);
  }
  return P({ points: l3 }, e6, r3);
}
function V(t2, e6, r3, n4, o5) {
  for (const s4 of e6) {
    const { geometry: e7, attributes: u2 } = s4, c = l(e7), l3 = s(e7);
    t2.push(new o4(e7 ? Y(e7, r3 && c, n4 && l3) : null, u2, null, e3(s4, o5)));
  }
  return t2;
}
function Y(t2, e6 = l(t2), r3 = s(t2)) {
  const { points: n4, hasZ: o5, hasM: s4 } = t2, u2 = new s2([n4.length], [], e6, r3), { coords: c, stride: l3 } = u2;
  let i2 = 0;
  const h = F(o5 ?? false, s4 ?? false, e6, r3);
  for (const f of n4) h(f, 0, c, i2), i2 += l3;
  return u2;
}
function _(t2, e6, r3, n4) {
  for (const { geometry: o5, attributes: s4 } of e6) t2.push({ geometry: o5 && L(o5, r3, n4), attributes: s4 });
  return t2;
}
function L(t2, e6, r3) {
  if (!t2) return null;
  const { coords: n4, lengths: o5, stride: s4, hasZ: u2, hasM: c } = t2;
  let l3 = 0;
  const i2 = F(u2, c, e6, r3), f = [];
  for (const a of o5) {
    const t3 = [];
    for (let e7 = 0; e7 < a; e7++) {
      const e8 = [];
      i2(n4, l3, e8, 0), l3 += s4, t3.push(e8);
    }
    f.push(t3);
  }
  return P({ paths: f }, e6, r3);
}
function O(t2, e6, r3, n4, o5) {
  for (const s4 of e6) {
    const { geometry: e7, attributes: u2, centroid: c } = s4, l3 = l(e7), i2 = s(e7);
    t2.push(new o4(e7 ? S(e7, r3 && l3, n4 && i2) : null, u2, c ? j(c, false, false) : null, e3(s4, o5)));
  }
  return t2;
}
function S(t2, e6 = l(t2), r3 = s(t2)) {
  const { paths: n4, hasZ: o5, hasM: s4 } = t2, u2 = F(o5 ?? false, s4 ?? false, e6, r3), c = new s2([], [], e6, r3), { lengths: l3, coords: i2, stride: h } = c;
  let m = 0;
  for (const f of n4) {
    for (const t3 of f) u2(t3, 0, i2, m), m += h;
    l3.push(f.length);
  }
  return c;
}
function U(t2, e6, r3, n4) {
  for (const { geometry: o5, attributes: s4, centroid: u2 } of e6) {
    const e7 = z(o5, r3, n4), c = Z(u2, false, false);
    t2.push(u2 ? { geometry: e7, attributes: s4, centroid: c } : { geometry: e7, attributes: s4 });
  }
  return t2;
}
function z(t2, e6, r3) {
  if (!t2) return null;
  const { coords: n4, lengths: o5, stride: s4, hasZ: u2, hasM: c } = t2;
  let l3 = 0;
  const i2 = F(u2, c, e6, r3), f = [];
  for (const a of o5) {
    const t3 = [];
    for (let e7 = 0; e7 < a; e7++) {
      const e8 = [];
      i2(n4, l3, e8, 0), l3 += s4, t3.push(e8);
    }
    f.push(t3);
  }
  return P({ rings: f }, e6, r3);
}
function R(t2, e6, r3, n4, o5) {
  for (const s4 of e6) {
    const { geometry: e7, attributes: u2, centroid: c } = s4, l3 = l(e7), i2 = s(e7);
    t2.push(new o4(e7 ? A(e7, r3 && l3, n4 && i2) : null, u2, c ? j(c, false, false) : null, e3(s4, o5)));
  }
  return t2;
}
function A(t2, e6 = l(t2), r3 = s(t2)) {
  const { rings: n4, hasZ: o5, hasM: s4 } = t2, u2 = new s2([], [], e6, r3), { lengths: c, coords: l3, stride: i2 } = u2;
  let h = 0;
  const m = F(o5 ?? false, s4 ?? false, e6, r3);
  for (const f of n4) {
    for (const t3 of f) m(t3, 0, l3, h), h += i2;
    c.push(f.length);
  }
  return u2;
}
var $ = [];
var q = [];
function B(t2, e6, r3, n4, o5) {
  $[0] = t2;
  const [s4] = C2(q, $, e6, r3, n4, o5);
  return dt($), dt(q), s4;
}
function C2(e6, r3, n4, o5, s4, u2) {
  if (dt(e6), !n4) {
    for (const t2 of r3) {
      const r4 = e3(t2, u2);
      e6.push(new o4(null, t2.attributes, null, r4));
    }
    return e6;
  }
  switch (n4) {
    case "esriGeometryPoint":
      return E(e6, r3, o5, s4, u2);
    case "esriGeometryMultipoint":
      return V(e6, r3, o5, s4, u2);
    case "esriGeometryPolyline":
      return O(e6, r3, o5, s4, u2);
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      return R(e6, r3, o5, s4, u2);
    default:
      y().error("convertToFeatureSet:unknown-geometry", new r("internal:geometry", `Unable to parse unknown geometry type '${n4}'`)), dt(e6);
  }
  return e6;
}
function D(t2, e6, r3, n4) {
  q[0] = t2, Q($, q, e6, r3, n4);
  const o5 = $[0];
  return dt($), dt(q), o5;
}
function H(e6, r3 = l(e6), n4 = s(e6)) {
  return null == e6 ? null : t(e6) ? j(e6, r3, n4) : o2(e6) ? A(e6, r3, n4) : e(e6) ? S(e6, r3, n4) : i(e6) ? Y(e6, r3, n4) : void y().error("convertFromGeometry:unknown-geometry", new r("internal:geometry", `Unable to parse unknown geometry type '${e6}'`));
}
function J(e6, r3, n4, o5) {
  if (null == e6) return null;
  const s4 = "coords" in e6 ? e6 : e6.geometry;
  if (null == s4) return null;
  switch (r3) {
    case "esriGeometryPoint":
      return Z(s4, n4, o5);
    case "esriGeometryMultipoint":
      return k(s4, n4, o5);
    case "esriGeometryPolyline":
      return L(s4, n4, o5);
    case "esriGeometryPolygon":
      return z(s4, n4, o5);
    default:
      return y().error("convertToGeometry:unknown-geometry", new r("internal:geometry", `Unable to parse unknown geometry type '${r3}'`)), null;
  }
}
function K(t2, e6) {
  for (const r3 of e6) t2.push({ attributes: r3.attributes });
  return t2;
}
function Q(e6, r3, n4, o5, s4) {
  if (dt(e6), null == n4) return K(e6, r3);
  switch (n4) {
    case "esriGeometryPoint":
      return x(e6, r3, o5, s4);
    case "esriGeometryMultipoint":
      return v2(e6, r3, o5, s4);
    case "esriGeometryPolyline":
      return _(e6, r3, o5, s4);
    case "esriGeometryPolygon":
      return U(e6, r3, o5, s4);
    default:
      y().error("convertToFeatureSet:unknown-geometry", new r("internal:geometry", `Unable to parse unknown geometry type '${n4}'`));
  }
  return e6;
}
function W(t2) {
  const { spatialReference: e6, transform: r3, fields: n4, hasM: o5, hasZ: s4, features: u2, geometryType: c, exceededTransferLimit: l3, queryGeometry: i2, queryGeometryType: f } = t2, a = { features: Q([], u2, c, s4, o5), fields: n4, geometryType: c, spatialReference: e6, queryGeometry: J(i2, f, s4, o5) };
  return r3 && (a.transform = r3), l3 && (a.exceededTransferLimit = l3), o5 && (a.hasM = o5), s4 && (a.hasZ = s4), a;
}
function X(t2, e6) {
  const r3 = new e5(), { hasM: n4, hasZ: o5, features: s4, spatialReference: u2, geometryType: c, exceededTransferLimit: l3, transform: i2, fields: f, globalIdFieldName: a } = t2;
  return f && (r3.fields = f), r3.geometryType = c ?? null, r3.spatialReference = u2 ?? null, s4 && C2(r3.features, s4, c, o5, n4, e6), l3 && (r3.exceededTransferLimit = l3), n4 && (r3.hasM = n4), o5 && (r3.hasZ = o5), i2 && (r3.transform = i2), a && (r3.globalIdFieldName = a), r3;
}
function et(t2, e6) {
  const { geometryType: r3, features: n4 } = e6;
  if (!t2) return e6;
  for (let o5 = 0; o5 < n4.length; o5++) {
    const e7 = n4[o5], s4 = e7.weakClone();
    s4.geometry = rt(e7.geometry, r3, t2), s4.centroid = rt(e7.centroid, "esriGeometryPoint", t2), n4[o5] = s4;
  }
  return e6.transform = t2, e6;
}
function rt(t2, e6, r3, n4, o5) {
  if (null == t2) return null;
  if (!t2?.coords.length) return null;
  const s4 = p[e6], { coords: u2, lengths: c, stride: l3, hasZ: i2, hasM: f } = t2;
  n4 ??= i2, o5 ??= f;
  const a = new s2([], [], n4, o5), h = a.stride, m = F(i2, f, n4, o5);
  let g = 0;
  const y2 = [0, 0, 0, 0].slice(h);
  function b2() {
    m(u2, g, y2, 0), g += l3, y2[0] = I2(r3, y2[0]), y2[1] = M(r3, y2[1]);
  }
  if (t2.isPoint) return b2(), a.coords.push(...y2), a;
  let w2 = 0;
  for (const d of c) {
    if (d < s4) continue;
    let t3 = 1;
    b2(), a.coords.push(...y2);
    let [e7, r4] = y2;
    for (let n5 = 1; n5 < d; n5++) {
      b2();
      const [n6, o6] = y2;
      e7 === n6 && r4 === o6 || (y2[0] -= e7, y2[1] -= r4, a.coords.push(...y2), e7 = n6, r4 = o6, t3++);
    }
    t3 >= s4 ? (a.lengths.push(t3), w2 = a.coords.length) : dt(a.coords, w2);
  }
  return dt(a.coords, w2), a.coords.length ? a : null;
}
function nt(t2, e6, r3, n4 = t2.hasZ, o5 = t2.hasM) {
  if (!t2.coords.length) return null;
  const s4 = p[e6], { coords: u2, lengths: c, stride: l3, hasZ: i2, hasM: f } = t2, a = new s2([], [], n4, o5), h = a.stride, m = F(i2, f, n4, o5);
  if (t2.isPoint) return m(u2, 0, a.coords, 0), a;
  let g = 0;
  const y2 = r3 * r3;
  for (const d of c) {
    if (d < s4) {
      g += d * l3;
      continue;
    }
    const t3 = a.coords.length / h, e7 = g, r4 = g + (d - 1) * l3;
    m(u2, e7, a.coords, a.coords.length), st(a.coords, u2, l3, y2, m, e7, r4), m(u2, r4, a.coords, a.coords.length);
    const n5 = a.coords.length / h - t3;
    n5 >= s4 ? a.lengths.push(n5) : dt(a.coords, t3 * h), g += d * l3;
  }
  return a.coords.length ? a : null;
}
function ot(t2, e6, r3, n4) {
  const o5 = t2[e6], s4 = t2[e6 + 1], u2 = t2[r3], c = t2[r3 + 1], l3 = t2[n4], i2 = t2[n4 + 1];
  let f = u2, a = c, h = l3 - f, m = i2 - a;
  if (0 !== h || 0 !== m) {
    const t3 = ((o5 - f) * h + (s4 - a) * m) / (h * h + m * m);
    t3 > 1 ? (f = l3, a = i2) : t3 > 0 && (f += h * t3, a += m * t3);
  }
  return h = o5 - f, m = s4 - a, h * h + m * m;
}
function st(t2, e6, r3, n4, o5, s4, u2) {
  let c, l3 = n4, i2 = 0;
  for (let f = s4 + r3; f < u2; f += r3) c = ot(e6, f, s4, u2), c > l3 && (i2 = f, l3 = c);
  l3 > n4 && (i2 - s4 > r3 && st(t2, e6, r3, n4, o5, s4, i2), o5(e6, i2, t2, t2.length), u2 - i2 > r3 && st(t2, e6, r3, n4, o5, i2, u2));
}
function ut(t2, e6) {
  if (!e6?.coords?.length) return null;
  let r3 = Number.POSITIVE_INFINITY, u2 = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, l3 = Number.NEGATIVE_INFINITY;
  const { coords: i2, stride: f } = e6;
  for (let n4 = 0; n4 < i2.length; n4 += f) {
    const t3 = i2[n4], e7 = i2[n4 + 1];
    r3 = Math.min(r3, t3), c = Math.max(c, t3), u2 = Math.min(u2, e7), l3 = Math.max(l3, e7);
  }
  return C(t2) ? v(t2, r3, u2, c, l3) : o(r3, u2, c, l3, t2), t2;
}
function lt(t2, e6) {
  const { coords: n4, lengths: o5, stride: s4 } = t2;
  if (!n4.length) return void (o5.length = 0);
  n2(e6);
  const { originPosition: u2, scale: c, translate: l3 } = e6, i2 = gt;
  i2.originPosition = u2;
  const f = i2.scale;
  f[0] = c[0] ?? 1, f[1] = -(c[1] ?? 1), f[2] = c[2] ?? 1, f[3] = c[3] ?? 1;
  const a = i2.translate;
  if (a[0] = l3[0] ?? 0, a[1] = l3[1] ?? 0, a[2] = l3[2] ?? 0, a[3] = l3[3] ?? 0, !o5.length) {
    for (let t3 = 0; t3 < s4; ++t3) n4[t3] = T(i2, n4[t3], t3);
    return void (o5.length = 0);
  }
  let h = 0;
  for (let r3 = 0; r3 < o5.length; r3++) {
    const t3 = o5[r3];
    o5[r3] = t3;
    for (let r4 = 0; r4 < s4; ++r4) n4[h + r4] = T(i2, n4[h + r4], r4);
    let e7 = n4[h], u3 = n4[h + 1];
    h += s4;
    for (let r4 = 1; r4 < t3; r4++, h += s4) {
      e7 += n4[h] * f[0], u3 += n4[h + 1] * f[1], n4[h] = e7, n4[h + 1] = u3;
      for (let t4 = 2; t4 < s4; ++t4) n4[h + t4] = T(i2, n4[h + t4], t4);
    }
  }
}
function ft(t2, e6, r3, n4) {
  let o5 = 0, s4 = t2[n4 * e6], u2 = t2[n4 * (e6 + 1)];
  for (let c = 1; c < r3; c++) {
    const r4 = s4 + t2[n4 * (e6 + c)], l3 = u2 + t2[n4 * (e6 + c) + 1], i2 = (r4 - s4) * (l3 + u2);
    s4 = r4, u2 = l3, o5 += i2;
  }
  return 0.5 * o5;
}
function at(t2, e6) {
  const { coords: r3, lengths: n4 } = t2;
  let o5 = 0, s4 = 0;
  for (let u2 = 0; u2 < n4.length; u2++) {
    const t3 = n4[u2];
    s4 += ft(r3, o5, t3, e6), o5 += t3;
  }
  return Math.abs(s4);
}
function ht(t2, e6, r3, n4) {
  return 0 === t2 * n4 - r3 * e6 && t2 * r3 + e6 * n4 > 0;
}
function mt(t2, e6, r3) {
  const { stride: n4 } = t2;
  if (t2.isPoint) {
    if (t2.coords.length < 2) return null;
    const [r4, n5] = t2.coords, o6 = b(e6, r4), s5 = w(e6, n5);
    return new s2([], [o6, s5]);
  }
  const o5 = new s2([], [0, 0]), s4 = p[r3], u2 = "esriGeometryPolygon" === r3 || "esriGeometryPolyline" === r3;
  let c = 0, l3 = 0;
  for (let i2 = 0; i2 < t2.lengths.length; i2++) {
    const r4 = t2.lengths[i2], f = l3;
    let a = b(e6, t2.coords[n4 * c]), h = w(e6, t2.coords[n4 * c + 1]);
    o5.coords[l3++] = a, o5.coords[l3++] = h;
    let m = 0, d = 0, g = 1;
    for (let s5 = 1; s5 < r4; s5++) {
      const r5 = b(e6, t2.coords[n4 * (s5 + c)]), i3 = w(e6, t2.coords[n4 * (s5 + c) + 1]);
      if (r5 !== a || i3 !== h) {
        const t3 = r5 - a, e7 = i3 - h;
        u2 && ht(m, d, t3, e7) ? (o5.coords[l3 - 2] += t3, o5.coords[l3 - 1] += e7, a += t3, h += e7) : (o5.coords[l3++] = r5, o5.coords[l3++] = i3, a = r5, h = i3, m = t3, d = e7, g += 1);
      }
    }
    g < s4 ? l3 = f : o5.lengths.push(g), c += r4;
  }
  return 0 === o5.lengths.length ? null : o5;
}
function dt(t2, e6 = 0) {
  t2.length !== e6 && (t2.length = e6);
}
var gt = { originPosition: "lowerLeft", scale: [1, 1, 1, 1], translate: [0, 0, 0, 0] };

export {
  r2 as r,
  o4 as o,
  s3 as s,
  e5 as e,
  I2 as I,
  M,
  Z,
  j,
  Y,
  S,
  A,
  B,
  C2 as C,
  D,
  H,
  J,
  W,
  X,
  et,
  rt,
  nt,
  ut,
  lt,
  at,
  mt
};
//# sourceMappingURL=chunk-CN3LKCJ5.js.map
