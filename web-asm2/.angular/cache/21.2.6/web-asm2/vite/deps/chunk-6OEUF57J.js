import {
  s as s3
} from "./chunk-SEVWV2FY.js";
import {
  l as l3
} from "./chunk-JNCFJPS4.js";
import {
  d2 as d,
  h2 as h,
  h3 as h2,
  l,
  n2 as n,
  p2 as p
} from "./chunk-PBNUMATE.js";
import {
  e,
  i as i2,
  l as l2,
  s as s2,
  t as t2
} from "./chunk-47Z5HJ52.js";
import {
  c,
  i,
  o,
  s,
  t,
  v
} from "./chunk-QK7JX7UE.js";
import {
  M,
  N
} from "./chunk-SLHRVNEB.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  T
} from "./chunk-4X5LQ2UO.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/FlatGeometry.js
var _ = class {
  constructor({ type: t3, spatialReference: e2, vertexCount: r, vertexXY: s4, vertexZ: n2, vertexM: i3, partCount: a, partOffsets: o2, partFlags: u, segmentFlags: h3, segmentIndices: l4, segmentParams: c2, segmentCountArc: g, segmentCountBezier: f }) {
    this.segmentCountArc = 0, this.segmentCountBezier = 0, this.type = t3, this.spatialReference = e2, this.vertexCount = r, this.vertexXY = s4, this.vertexZ = n2, this.vertexM = i3, this.partCount = a, this.partOffsets = o2, this.partFlags = u, this.segmentFlags = h3, this.segmentIndices = l4, this.segmentParams = c2, this.segmentCountArc = g, this.segmentCountBezier = f;
  }
  get segmentParamCount() {
    return 10 * this.segmentCountArc + 4 * this.segmentCountBezier;
  }
  get segmentCountLine() {
    const { segmentCount: t3, segmentCountArc: e2, segmentCountBezier: r } = this;
    return t3 && t3 - e2 - r;
  }
  get segmentCount() {
    return "polyline" === this.type ? this.vertexCount - this.partCount : "polygon" === this.type ? this.vertexCount : 0;
  }
  get hasZ() {
    return null != this.vertexZ;
  }
  get hasM() {
    return null != this.vertexM;
  }
  hasCurves() {
    return null != this.segmentFlags;
  }
  isMultipart() {
    return "polyline" === this.type || "polygon" === this.type;
  }
  get usedMemory() {
    function t3(t4) {
      return t4 ? l3 + t4.byteLength : 0;
    }
    return t3(this.vertexXY) + t3(this.vertexZ) + t3(this.vertexM) + t3(this.partOffsets) + t3(this.partFlags) + t3(this.segmentFlags) + t3(this.segmentIndices) + t3(this.segmentParams);
  }
  clone() {
    const { type: t3, vertexCount: e2, partCount: r, hasZ: s4, hasM: n2, segmentCountArc: i3, segmentCountBezier: a } = this, o2 = U(t3, e2, r, s4, n2, this.hasCurves(), i3, a);
    o2.spatialReference = this.spatialReference;
    const { vertexXY: u, vertexZ: h3, vertexM: l4 } = this;
    if (o2.vertexXY.set(u.subarray(0, 2 * e2), 0), o2.vertexZ?.set(h3.subarray(0, e2), 0), o2.vertexM?.set(l4.subarray(0, e2), 0), this.isMultipart()) {
      const { partOffsets: t4, partFlags: e3 } = this;
      o2.partFlags.set(e3.subarray(0, r + 1)), o2.partOffsets.set(t4.subarray(0, r + 1));
    }
    if (this.hasCurves()) {
      const { segmentFlags: t4, segmentIndices: r2, segmentParams: s5, segmentParamCount: n3 } = this;
      o2.segmentFlags.set(t4.subarray(0, e2), 0), o2.segmentIndices.set(r2.subarray(0, e2), 0), o2.segmentParams.set(s5.subarray(0, n3), 0);
    }
    return o2;
  }
  equals(t3) {
    return this.equalsWithinTolerance(t3, 0);
  }
  equalsWithinTolerance(t3, e2) {
    if (null == t3) return false;
    if (this === t3) return true;
    if (!T(this.spatialReference, t3.spatialReference)) return false;
    if (this.vertexCount !== t3.vertexCount || this.partCount !== t3.partCount) return false;
    if (this.hasZ !== t3.hasZ || this.hasM !== t3.hasM) return false;
    if (this.hasCurves() !== t3.hasCurves() || this.segmentCountArc !== t3.segmentCountArc || this.segmentCountBezier !== t3.segmentCountBezier) return false;
    const r = 0 === e2 ? (t4, e3) => t4 !== e3 || isNaN(t4) !== isNaN(e3) : (t4, r2) => Math.abs(t4 - r2) > e2 || isNaN(t4) !== isNaN(r2);
    for (let s4 = 0; s4 < this.vertexCount; ++s4) if (r(this.vertexXY[2 * s4], t3.vertexXY[2 * s4]) || r(this.vertexXY[2 * s4 + 1], t3.vertexXY[2 * s4 + 1])) return false;
    if (this.hasZ) {
      for (let s4 = 0; s4 < this.vertexCount; ++s4) if (r(this.vertexZ[s4], t3.vertexZ[s4])) return false;
    }
    if (this.hasM) {
      for (let s4 = 0; s4 < this.vertexCount; ++s4) if (r(this.vertexM[s4], t3.vertexM[s4])) return false;
    }
    for (let s4 = 0; s4 < this.partCount; ++s4) if (this.partFlags[s4] !== t3.partFlags[s4] || this.partOffsets[s4] !== t3.partOffsets[s4]) return false;
    if (this.hasCurves()) {
      for (let e3 = 0; e3 < this.vertexCount; ++e3) if (this.segmentFlags[e3] !== t3.segmentFlags[e3] || this.segmentIndices[e3] !== t3.segmentIndices[e3]) return false;
      for (let e3 = 0; e3 < this.segmentParamCount; ++e3) if (r(this.segmentParams[e3], t3.segmentParams[e3])) return false;
    }
    return true;
  }
  get parts() {
    return this.isMultipart() ? new Z(this) : [][Symbol.iterator]();
  }
};
var Z = class {
  constructor(t3) {
    this.geometry = t3, this.value = new A(t3);
  }
  get done() {
    return this.value.index >= this.geometry.partCount;
  }
  next() {
    return ++this.value.index, this;
  }
  [Symbol.iterator]() {
    return this;
  }
};
var A = class {
  constructor(t3) {
    this.geometry = t3, this.index = -1, this._readVertex = j(t3), this._segments = new R(this);
  }
  get segments() {
    return this._segments.reset(), this._segments;
  }
  get startVertex() {
    return this._readVertex(this.geometry.partOffsets[this.index]);
  }
  get vertexCount() {
    const t3 = this.geometry.partOffsets;
    return t3[this.index + 1] - t3[this.index];
  }
};
var R = class {
  constructor(t3) {
    this._part = t3, this._partStart = 0, this._partEnd = 0, this._isPolygon = "polygon" === t3.geometry.type, this.value = new V(t3.geometry);
  }
  get done() {
    return this.value.indexOfStartVertex > this._partEnd;
  }
  next() {
    ++this.value.indexOfStartVertex;
    const t3 = this.value.indexOfStartVertex >= this._partEnd;
    return this.value.indexOfEndVertex = t3 && this._isPolygon ? this._partStart : this.value.indexOfStartVertex + 1, this;
  }
  [Symbol.iterator]() {
    return this;
  }
  reset() {
    const { index: t3 } = this._part, e2 = this._part.geometry.partOffsets;
    this._partStart = e2[t3], this._partEnd = e2[t3 + 1] - (this._isPolygon ? 1 : 2), this.value.indexOfStartVertex = this._partStart - 1;
  }
};
var V = class {
  constructor(t3) {
    this.geometry = t3, this.indexOfStartVertex = -1, this.indexOfEndVertex = -1, this._readVertex = j(t3);
  }
  get xStart() {
    return this.geometry.vertexXY[2 * this.indexOfStartVertex];
  }
  get yStart() {
    return this.geometry.vertexXY[2 * this.indexOfStartVertex + 1];
  }
  get zStart() {
    return this.geometry.vertexZ[this.indexOfStartVertex];
  }
  get mStart() {
    return this.geometry.vertexM[this.indexOfStartVertex];
  }
  get xEnd() {
    return this.geometry.vertexXY[2 * this.indexOfEndVertex];
  }
  get yEnd() {
    return this.geometry.vertexXY[2 * this.indexOfEndVertex + 1];
  }
  get zEnd() {
    return this.geometry.vertexZ[this.indexOfEndVertex];
  }
  get mEnd() {
    return this.geometry.vertexM[this.indexOfEndVertex];
  }
  get start() {
    return this._readVertex(this.indexOfStartVertex);
  }
  get end() {
    return this._readVertex(this.indexOfEndVertex);
  }
  get curve() {
    const t3 = this.geometry.segmentFlags?.[this.indexOfStartVertex] ?? 1;
    if (1 === t3) return this.end;
    const e2 = this.geometry.segmentParams;
    let r = this.geometry.segmentIndices[this.indexOfStartVertex];
    if (2 === t3) {
      const t4 = e2[r++], s5 = e2[r++], n3 = e2[r++], i4 = e2[r++];
      return { b: [this.end, [t4, s5], [n3, i4]] };
    }
    const s4 = e2[r++], n2 = e2[r++], i3 = e2[r++], a = e2[r++], o2 = e2[r++], u = e2[r++];
    r++, r++;
    const h3 = e2[r++], l4 = e2[r++];
    if (!Boolean(4 & s4) && 1 === i3) return { c: [this.end, [h3, l4]] };
    const c2 = 2 & s4 ? 0 : 1, g = 1 & s4 ? 0 : 1;
    return { a: [this.end, [o2, u], c2, g, a, n2, i3] };
  }
};
function Y(r) {
  let s4;
  const { vertexCount: n2, vertexXY: i3, vertexZ: o2, vertexM: u } = r, h3 = z(r);
  if (r.hasCurves()) {
    const n3 = { stack: [], error: void 0, hasError: false };
    try {
      __addDisposableResource(n3, new k(r, ["vertexZ", "vertexM"]), false);
      const e2 = N();
      for (const t3 of r.parts) {
        let r2 = t3.startVertex;
        for (const { curve: s5 } of t3.segments) n(e2, r2, s5), r2 = v(s5);
      }
      const [i4, o3, u2, l4] = e2;
      s4 = { xmin: i4, ymin: o3, xmax: u2, ymax: l4, spatialReference: h3 };
    } catch (l4) {
      n3.error = l4, n3.hasError = true;
    } finally {
      __disposeResources(n3);
    }
  } else {
    let t3, e2, r2, a;
    t3 = e2 = 1 / 0, r2 = a = -1 / 0;
    for (let s5 = 0; s5 < n2; ++s5) {
      const n3 = i3[2 * s5], o3 = i3[2 * s5 + 1];
      t3 = Math.min(t3, n3), r2 = Math.max(r2, n3), e2 = Math.min(e2, o3), a = Math.max(a, o3);
    }
    s4 = { xmin: t3, ymin: e2, xmax: r2, ymax: a, spatialReference: h3 };
  }
  if (o2) {
    let t3 = 1 / 0, e2 = -1 / 0;
    for (const r2 of o2) t3 = Math.min(t3, r2), e2 = Math.max(e2, r2);
    s4.zmin = t3, s4.zmax = e2;
  }
  if (u) {
    let t3 = 1 / 0, e2 = -1 / 0;
    for (const r2 of u) t3 = Math.min(t3, r2), e2 = Math.max(e2, r2);
    s4.mmin = t3, s4.mmax = e2;
  }
  return s4;
}
function b(r, s4) {
  const n2 = { stack: [], error: void 0, hasError: false };
  try {
    s4 ??= N();
    __addDisposableResource(n2, new k(r, ["vertexZ", "vertexM", "spatialReference"]), false);
    return M(s4, Y(r)), s4;
  } catch (i3) {
    n2.error = i3, n2.hasError = true;
  } finally {
    __disposeResources(n2);
  }
}
function I2(t3) {
  let e2, r, s4;
  if (t2(t3)) {
    s4 = "point";
    const { x: n3, y: i4, z: a2, m: o3 } = t3, u = [n3, i4];
    null != a2 && u.push(a2), null != o3 && u.push(o3), r = [[u]], e2 = 1;
  } else i2(t3) ? (s4 = "multipoint", r = [t3.points], e2 = t3.points.length) : e(t3) ? (s4 = "polyline", r = t3.curvePaths ?? t3.paths, e2 = r.reduce((t4, e3) => t4 + e3.length, 0)) : (s4 = "polygon", r = t3.curveRings ?? t3.rings, e2 = r.reduce((t4, e3) => (0 === e3.length || (t4 += e3.length, W(e3[0], v(e3.at(-1))) && --t4), t4), 0));
  const n2 = U(s4, e2, s4.includes("point") ? 0 : r.length, l2(t3), s2(t3), t(t3)), { hasZ: i3, hasM: a, vertexXY: o2, vertexZ: f, vertexM: m } = n2;
  function p2(t4) {
    o2[2 * O] = t4[0], o2[2 * O + 1] = t4[1], i3 && (f[O] = t4[2]), a && (m[O] = t4[x]), ++O;
  }
  n2.spatialReference = t3.spatialReference ?? void 0;
  const x = n2.hasZ ? 3 : 2;
  let O = 0;
  if (!n2.isMultipart()) {
    if (!i3 && !a) {
      for (const [t4, e3] of r[0]) o2[2 * O] = t4, o2[2 * O + 1] = e3, ++O;
      return n2;
    }
    for (const t4 of r[0]) p2(t4);
    return n2;
  }
  const S2 = "polygon" === s4, { partOffsets: F } = n2;
  let P = 0;
  if (!n2.hasCurves()) {
    for (const t4 of r) {
      if (F[P++] = O, 0 === t4.length) continue;
      let e3 = t4.length;
      if (S2 && W(t4[0], t4.at(-1)) && --e3, i3 || a) for (let r2 = 0; r2 < e3; ++r2) p2(t4[r2]);
      else for (let r2 = 0; r2 < e3; ++r2) {
        const [e4, s5] = t4[r2];
        o2[2 * O] = e4, o2[2 * O + 1] = s5, ++O;
      }
    }
    return F[P] = O, n2;
  }
  function _2(t4) {
    const e3 = Z2 + t4;
    if (e3 <= (n2.segmentParams?.length ?? 0)) return;
    let r2 = e3 * K;
    r2 = 20 * Math.ceil(r2 / 20);
    const s5 = n2.segmentParams;
    n2.segmentParams = new Float64Array(r2), null != s5 && n2.segmentParams.set(s5);
  }
  let Z2 = 0;
  for (const u of r) {
    if (n2.partOffsets[P++] = O, 0 === u.length) continue;
    const t4 = u[0];
    let e3 = t4;
    for (let r2 = 1; r2 < u.length; ++r2) {
      const t5 = u[r2];
      p2(e3);
      const s5 = O - 1;
      s(t5) ? (_2(10), ++n2.segmentCountArc, Z2 = D(e3, t5, n2, s5, Z2), e3 = t5.a[0]) : o(t5) ? (_2(10), ++n2.segmentCountArc, Z2 = q(e3, t5, n2, s5, Z2), e3 = t5.a[0]) : c(t5) ? (_2(10), ++n2.segmentCountArc, Z2 = G(e3, t5, n2, s5, Z2), e3 = t5.c[0]) : i(t5) ? (_2(4), ++n2.segmentCountBezier, Z2 = H(e3, t5, n2, s5, Z2), e3 = t5.b[0]) : e3 = t5;
    }
    S2 && W(t4, e3) || p2(e3);
  }
  return n2.partOffsets[P] = O, n2;
}
function X(t3) {
  const e2 = j(t3), { vertexCount: r, partCount: s4, hasZ: n2, hasM: i3 } = t3, a = z(t3);
  if ("point" === t3.type) {
    const [e3, r2] = t3.vertexXY, s5 = t3.vertexZ?.[0], n3 = t3.vertexM?.[0];
    return { x: e3, y: r2, z: s5, m: n3, spatialReference: a };
  }
  let o2 = 0;
  if ("multipoint" === t3.type) {
    const t4 = [];
    for (; o2 < r; ) t4.push(e2(o2++));
    return { points: t4, spatialReference: a, hasZ: n2, hasM: i3 };
  }
  const u = "polygon" === t3.type;
  if (!t3.hasCurves()) {
    const r2 = new Array();
    for (let n3 = 0; n3 < s4; ++n3) {
      const s5 = t3.partOffsets[n3 + 1], i4 = new Array();
      for (; o2 < s5; ) i4.push(e2(o2++));
      u && i4.length > 0 && i4.push(i4[0]), r2.push(i4);
    }
    return u ? { rings: r2, hasZ: n2, hasM: i3, spatialReference: a } : { paths: r2, hasZ: n2, hasM: i3, spatialReference: a };
  }
  const h3 = new Array();
  for (const { segments: l4, startVertex: c2 } of t3.parts) {
    const t4 = [c2];
    for (const { curve: e3 } of l4) t4.push(e3);
    h3.push(t4);
  }
  return u ? { rings: [], curveRings: h3, hasZ: n2, hasM: i3, spatialReference: a } : { paths: [], curvePaths: h3, hasZ: n2, hasM: i3, spatialReference: a };
}
function B(t3, { lengths: e2, coords: r, hasZ: s4, hasM: n2 }, i3) {
  const a = t3.includes("point") ? 0 : e2.length, o2 = "polygon" === t3, u = "point" === t3 ? 1 : e2.reduce((t4, e3) => t4 + e3, 0) - (o2 ? a : 0);
  s4 ??= false, n2 ??= false;
  const h3 = U(t3, u, a, s4, n2, false, 0, 0);
  if (h3.spatialReference = i3 ?? void 0, !h3.isMultipart()) {
    for (let t4 = 0, e3 = 0; t4 < u; ++t4) h3.vertexXY[2 * t4] = r[e3++], h3.vertexXY[2 * t4 + 1] = r[e3++], s4 && (h3.vertexZ[t4] = r[e3++]), n2 && (h3.vertexM[t4] = r[e3++]);
    return h3;
  }
  const l4 = 2 + Number(s4) + Number(n2);
  let c2 = 0, g = 0;
  h3.partOffsets[0] = 0;
  for (const f of e2) {
    const t4 = h3.partOffsets[g], e3 = t4 + f - Number(o2);
    h3.partOffsets[++g] = e3;
    for (let i4 = t4; i4 < e3; ++i4) h3.vertexXY[2 * i4] = r[c2++], h3.vertexXY[2 * i4 + 1] = r[c2++], s4 && (h3.vertexZ[i4] = r[c2++]), n2 && (h3.vertexM[i4] = r[c2++]);
    o2 && (c2 += l4);
  }
  return h3;
}
function L({ type: t3, vertexCount: e2, vertexXY: r, vertexZ: s4, vertexM: n2, partCount: i3, partOffsets: a, hasZ: o2, hasM: u }) {
  const h3 = new s3([], [], o2, u);
  i3 = Math.max(i3, 1);
  const l4 = "polygon" === t3;
  let c2 = 0;
  for (let g = 0; g < i3; ++g) {
    const t4 = a?.[g + 1] ?? e2, i4 = h3.coords.length;
    for (let e3 = c2; e3 < t4; ++e3) h3.coords.push(r[2 * e3], r[2 * e3 + 1]), o2 && h3.coords.push(s4[e3]), u && h3.coords.push(n2[e3]);
    if (l4) {
      const t5 = c2;
      h3.coords.push(r[2 * t5], r[2 * t5 + 1]), o2 && h3.coords.push(s4[t5]), u && h3.coords.push(n2[t5]);
    }
    h3.lengths.push((h3.coords.length - i4) / h3.stride), c2 = t4;
  }
  return "point" === t3 && (h3.lengths.length = 0), h3;
}
function N2(t3, e2) {
  return "getSpatialReference" in t3 && (e2 = T2(t3.getSpatialReference()), t3 = t3.getGeometry()), new _(__spreadProps(__spreadValues({}, t3.toFlatGeometry()), { spatialReference: e2 }));
}
function T2(t3) {
  if (null == t3) return;
  const e2 = t3.getText() || void 0, r = t3.isCustomWkid() ? 0 : t3.getOldID();
  if (r <= 0) return { wkt: e2 };
  let s4 = t3.getLatestID();
  (s4 <= 0 || s4 === r) && (s4 = void 0);
  const n2 = t3.getVCS();
  if (null == n2) return { wkid: r, latestWkid: s4, wkt: e2 };
  const i3 = n2.isCustomWkid() ? 0 : n2.getOldID();
  if (i3 <= 0) return { wkt: e2 };
  let a = t3.getLatestVerticalID();
  return (a <= 0 || a === i3) && (a = void 0), { wkid: r, wkt: e2, latestWkid: s4, vcsWkid: i3, latestVcsWkid: a };
}
var k = class {
  constructor(t3, e2) {
    this.target = t3, this.keys = e2, this.oldValues = e2.map((e3) => t3[e3]);
    for (const r of e2) t3[r] = void 0;
  }
  [Symbol.dispose]() {
    this.keys.map((t3, e2) => {
      this.target[t3] = this.oldValues[e2];
    });
  }
};
function z({ spatialReference: t3 }) {
  return t3 instanceof S ? t3.toJSON() : t3;
}
function j({ vertexXY: t3, vertexZ: e2, vertexM: r }) {
  return e2 ? r ? (s4) => [t3[2 * s4], t3[2 * s4 + 1], e2[s4], r[s4]] : (r2) => [t3[2 * r2], t3[2 * r2 + 1], e2[r2]] : r ? (e3) => [t3[2 * e3], t3[2 * e3 + 1], r[e3]] : (e3) => [t3[2 * e3], t3[2 * e3 + 1]];
}
function W(t3, e2) {
  return t3.every((t4, r) => t4 === e2[r]);
}
function U(t3, e2, r, s4, n2, i3, a, o2) {
  a ??= 0, o2 ??= 0;
  const u = new _({ type: t3, vertexCount: e2, vertexXY: null, vertexZ: void 0, vertexM: void 0, partCount: r, partOffsets: void 0, partFlags: void 0, segmentFlags: void 0, segmentIndices: void 0, segmentParams: void 0, segmentCountArc: a, segmentCountBezier: o2 });
  let h3 = 2 * Float64Array.BYTES_PER_ELEMENT * e2;
  s4 && (h3 += Float64Array.BYTES_PER_ELEMENT * e2), n2 && (h3 += Float64Array.BYTES_PER_ELEMENT * e2), u.isMultipart() && (h3 += (r + 1) * Int32Array.BYTES_PER_ELEMENT, h3 += (r + 1) * Int8Array.BYTES_PER_ELEMENT), i3 && (h3 += e2 * Int8Array.BYTES_PER_ELEMENT, h3 += e2 * Int32Array.BYTES_PER_ELEMENT, h3 += u.segmentParamCount * Float64Array.BYTES_PER_ELEMENT);
  const l4 = new ArrayBuffer(h3);
  let c2 = 0;
  return u.vertexXY = new Float64Array(l4, c2, 2 * e2), c2 += u.vertexXY.byteLength, s4 && (u.vertexZ = new Float64Array(l4, c2, e2), c2 += u.vertexZ.byteLength), n2 && (u.vertexM = new Float64Array(l4, c2, e2), c2 += u.vertexM.byteLength), i3 && (u.segmentParams = new Float64Array(l4, c2, u.segmentParamCount), c2 += u.segmentParams.byteLength, u.segmentIndices = new Int32Array(l4, c2, e2), u.segmentIndices.fill(Q), c2 += u.segmentIndices.byteLength), u.isMultipart() && (u.partOffsets = new Int32Array(l4, c2, r + 1), c2 += u.partOffsets.byteLength, u.partFlags = new Int8Array(l4, c2, r + 1), c2 += u.partFlags.byteLength, "polygon" === u.type && u.partFlags.subarray(0, r).fill(1)), i3 && (u.segmentFlags = new Int8Array(l4, c2, e2), u.segmentFlags.fill(1), c2 += u.segmentFlags.byteLength), u;
}
function D(t3, e2, { segmentFlags: r, segmentIndices: s4, segmentParams: n2 }, i3, a) {
  r[i3] = 4, s4[i3] = a;
  const [o2, [u, h3], l4, c2, g, f, m] = e2.a;
  let p2 = 4;
  c2 || (p2 |= 1), l4 || (p2 |= 2);
  const x = p(t3, e2), [v2, d2] = d(x, 0.5);
  return n2[a++] = p2, n2[a++] = f, n2[a++] = m, n2[a++] = g, n2[a++] = u, n2[a++] = h3, n2[a++] = x.u2 - x.u1, n2[a++] = x.u1, n2[a++] = v2, n2[a++] = d2, a;
}
function q(t3, e2, { segmentFlags: r, segmentIndices: s4, segmentParams: n2 }, i3, a) {
  r[i3] = 4, s4[i3] = a;
  const o2 = h2(t3, e2);
  return J(o2, 4, ...h(o2, 0.5), n2, a);
}
function G(t3, e2, { segmentFlags: r, segmentIndices: s4, segmentParams: n2 }, i3, a) {
  r[i3] = 4, s4[i3] = a;
  return J(l(t3, e2), 0, ...e2.c[1], n2, a);
}
function J(t3, e2, r, s4, n2, i3) {
  const { cx: a, cy: o2, thetaStart: u, thetaEnd: h3, radius: l4 } = t3;
  u > h3 || (e2 |= 1);
  return Math.abs(h3 - u) <= Math.PI || (e2 |= 2), n2[i3++] = e2, n2[i3++] = l4, n2[i3++] = 1, n2[i3++] = 0, n2[i3++] = a, n2[i3++] = o2, n2[i3++] = h3 - u, n2[i3++] = u, n2[i3++] = r, n2[i3++] = s4, i3;
}
function H(t3, { b: [e2, [r, s4], [n2, i3]] }, { segmentFlags: a, segmentIndices: o2, segmentParams: u }, h3, l4) {
  return a[h3] = 2, o2[h3] = l4, u[l4++] = r, u[l4++] = s4, u[l4++] = n2, u[l4++] = i3, l4;
}
var K = 1.61803;
var Q = -1;

export {
  _,
  b,
  I2 as I,
  X,
  B,
  L,
  N2 as N,
  U,
  D,
  G,
  H
};
//# sourceMappingURL=chunk-6OEUF57J.js.map
