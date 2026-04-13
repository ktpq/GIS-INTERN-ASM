import {
  t as t2
} from "./chunk-MXAZZ5UX.js";
import {
  u as u3
} from "./chunk-4YKWF6M6.js";
import {
  d2 as d,
  h,
  h3 as h2,
  l,
  o,
  p2 as p,
  r as r2,
  u
} from "./chunk-ZHB32LSG.js";
import {
  c,
  e,
  f,
  i,
  l as l2,
  o as o2,
  s,
  t,
  u as u2,
  v
} from "./chunk-QK7JX7UE.js";
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/curves/densifyCurvedGeometry.js
var M = { maxSegmentLength: 0, maxDeviation: 0, maxSegmentsPerCurve: 12e3, minSegmentsPerCurve: 1 };
var P = 100;
var k = 1e-6;
var C = [0, 0];
function _(t3) {
  return { maxSegmentLength: t3.maxSegmentLength ?? M.maxSegmentLength, maxDeviation: t3.maxDeviation ?? M.maxDeviation, maxSegmentsPerCurve: t3.maxSegmentsPerCurve ?? M.maxSegmentsPerCurve, minSegmentsPerCurve: Math.max(t3.minSegmentsPerCurve ?? M.minSegmentsPerCurve, 1) };
}
var y = class {
  constructor(t3, e2) {
    this.curveStart = t3, this.curveEnd = e2, this.tStart = 0, this.tEnd = 0, this.tEndStack = [], this.arcEndStack = [];
  }
  get stackSize() {
    return this.tEndStack.length;
  }
  initialize(t3, e2) {
    this.tStart = 0, this.arcStart = t3, this.tEndStack.push(1), this.arcEndStack.push(e2);
  }
  splitAt(t3) {
    this.tEndStack.push(this.tEnd), this.arcEndStack.push(this.arcEnd), this.tEndStack.push(t3), this.arcEndStack.push(this.interpolate(t3));
  }
  splitInHalf() {
    return this.splitAt((this.tStart + this.tEnd) / 2);
  }
  pop() {
    this.tEnd = this.tEndStack.pop(), this.arcEnd = this.arcEndStack.pop();
  }
  next() {
    this.tStart = this.tEnd, this.arcStart = this.arcEnd;
  }
  densify(t3, { maxDeviation: e2, maxSegmentLength: s2, maxSegmentsPerCurve: n, minSegmentsPerCurve: i2 }) {
    const r3 = s2 * s2, a = e2 * e2, o3 = 1 / n, c2 = this.interpolate(0), h3 = this.interpolate(1);
    o(this.curveStart, c2) > k && t3.push(c2), this.initialize(c2, h3);
    const u4 = 1 / i2;
    for (let p2 = i2 - 1; p2 > 0; p2--) {
      const t4 = p2 * u4;
      this.pop(), this.splitAt(t4);
    }
    for (; this.stackSize > 0; ) this.pop(), this.tStart === this.tEnd || this.tEnd - this.tStart < o3 || (0 === r3 || !isFinite(r3) || o(this.arcStart, this.arcEnd) < r3) && (0 === a || !isFinite(a) || this.getDeviation2() < a) ? (t3.push(this.arcEnd), this.next()) : this.splitInHalf();
    return o(this.curveEnd, h3) > k && t3.push([...this.curveEnd]), t3;
  }
};
var R = class extends y {
  constructor(t3, e2) {
    const [s2, n, i2] = e2.b;
    super(t3, s2), this._controlPointsStack = [], this._curveControlPoints = [n, i2], this._arcControlPoints = [n, i2], this._controlPointsStack.push(this._arcControlPoints);
  }
  splitAt(t3) {
    const { arcStart: e2, arcEnd: s2, tStart: n, tEnd: i2 } = this, [r3, a] = this._arcControlPoints, o3 = (t3 - n) / (i2 - n), c2 = r2([], e2, r3, o3), h3 = r2(C, r3, a, o3), u4 = r2([], a, s2, o3), p2 = r2([], c2, h3, o3), l3 = r2([], h3, u4, o3), m = r2([], p2, l3, o3);
    this.tEndStack.push(this.tEnd), this.arcEndStack.push(this.arcEnd), this._controlPointsStack.push([l3, u4]), this.tEndStack.push(t3), this.arcEndStack.push(m), this._arcControlPoints[0] = c2, this._arcControlPoints[1] = p2, this._controlPointsStack.push(this._arcControlPoints);
  }
  pop() {
    super.pop(), this._arcControlPoints = this._controlPointsStack.pop();
  }
  interpolate(t3) {
    const { curveStart: e2, curveEnd: s2 } = this, [i2, r3] = this._curveControlPoints;
    return h(e2, i2, r3, s2, t3);
  }
  getDeviation2() {
    const { arcStart: t3, arcEnd: e2 } = this, [s2, n] = this._arcControlPoints;
    return Math.max(u(s2, t3, e2), u(n, t3, e2));
  }
};
var w = class extends y {
  constructor(t3, e2) {
    const [s2] = e2.a;
    super(t3, s2), this._derivedEllipse = p(t3, e2);
  }
  pop() {
    super.pop(), this._tMid = (this.tStart + this.tEnd) / 2, this._arcMid = this.interpolate(this._tMid);
  }
  splitInHalf() {
    this.tEndStack.push(this.tEnd), this.arcEndStack.push(this.arcEnd), this.tEndStack.push(this._tMid), this.arcEndStack.push(this._arcMid);
  }
  interpolate(t3) {
    return d(this._derivedEllipse, t3);
  }
  getDeviation2() {
    return u(this._arcMid, this.arcStart, this.arcEnd);
  }
};
function b(t3, e2, s2, { cx: n, cy: i2, radius: r3, thetaStart: a, thetaEnd: o3, isInvalid: c2 }, { maxDeviation: h3, maxSegmentLength: u4, maxSegmentsPerCurve: p2, minSegmentsPerCurve: l3 }) {
  if (c2) return t3.push([...s2]), t3;
  const m = 2 * r3, d2 = [n + r3 * Math.cos(a), i2 + r3 * Math.sin(a)], f2 = [n + r3 * Math.cos(o3), i2 + r3 * Math.sin(o3)];
  o(e2, d2) > k && t3.push(d2);
  const S = Math.abs(o3 - a), v2 = u4 > 0 && u4 < m ? 2 * Math.asin(u4 / m) : S, E = h3 > 0 && h3 <= r3 ? 2 * Math.acos(1 - h3 / r3) : S, g = Math.min(v2, E), M2 = Math.min(p2, Math.max(l3, Math.ceil(Math.abs(S / g)))), P2 = 1 / M2;
  for (let x = 1; x < M2; x++) {
    const e3 = x * P2, s3 = a * (1 - e3) + o3 * e3;
    t3.push([n + r3 * Math.cos(s3), i2 + r3 * Math.sin(s3)]);
  }
  return t3.push(f2), o(s2, f2) > k && t3.push([...s2]), t3;
}
function j(t3, e2, s2, n) {
  return new R(e2, s2).densify(t3, n);
}
function Z(t3, e2, s2, n) {
  const r3 = l(e2, s2), [a] = s2.c;
  return b(t3, e2, a, r3, n);
}
function D(t3, e2, s2, n) {
  const i2 = h2(e2, s2), [r3] = s2.a;
  return b(t3, e2, r3, i2, n);
}
function z(t3, e2, s2, n) {
  const [i2, r3, a, o3, c2, h3, u4] = s2.a;
  return 0 === h3 || 0 === u4 ? (t3.push([...i2]), t3) : new w(e2, s2).densify(t3, n);
}
function A(t3, e2, s2, n) {
  return e(s2) ? (t3.push([...s2]), t3) : i(s2) ? j(t3, e2, s2, n) : c(s2) ? Z(t3, e2, s2, n) : o2(s2) ? D(t3, e2, s2, n) : z(t3, e2, s2, n);
}
function L(t3, e2 = {}) {
  if (!t(t3)) return t3;
  const s2 = _(e2), n = u2(t3), i2 = [];
  for (const r3 of n) {
    const t4 = [];
    for (let e3 = 0; e3 < r3.length - 1; e3++) {
      const n2 = e3 + 1, i3 = [...v(r3[e3])];
      0 === e3 && t4.push(i3);
      A(t4, i3, r3[n2], s2);
    }
    i2.push(t4);
  }
  return "curvePaths" in t3 ? __spreadProps(__spreadValues(__spreadValues({}, void 0 !== t3.hasZ ? { hasZ: t3.hasZ } : {}), void 0 !== t3.hasM ? { hasM: t3.hasM } : {}), { paths: i2, spatialReference: t3.spatialReference }) : __spreadProps(__spreadValues(__spreadValues({}, void 0 !== t3.hasZ ? { hasZ: t3.hasZ } : {}), void 0 !== t3.hasM ? { hasM: t3.hasM } : {}), { rings: i2, spatialReference: t3.spatialReference });
}
var U = t2((t3) => ({ maxDeviation: 0, maxSegmentLength: t3 * P, maxSegmentsPerCurve: 12e3, minSegmentsPerCurve: 1 }));
function T(t3, e2, s2) {
  if (!t(t3)) return t3;
  const n = new Set(e2), i2 = _(s2), a = u2(t3), f2 = [];
  let S = false;
  for (const r3 of a) {
    const t4 = [];
    for (let e3 = 0; e3 < r3.length - 1; e3++) {
      const s3 = e3 + 1, a2 = [...v(r3[e3])];
      0 === e3 && t4.push(a2);
      const o3 = r3[s3];
      e(o3) ? t4.push([...o3]) : i(o3) && !n.has("cubic-bezier") ? j(t4, a2, o3, i2) : c(o3) && !n.has("circular-arc") ? Z(t4, a2, o3, i2) : o2(o3) && !n.has("elliptic-arc") ? D(t4, a2, o3, i2) : s(o3) && !n.has("elliptic-arc") ? z(t4, a2, o3, i2) : (t4.push(l2(o3)), S = true);
    }
    f2.push(t4);
  }
  return "curvePaths" in t3 ? __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, void 0 !== t3.hasZ ? { hasZ: t3.hasZ } : {}), void 0 !== t3.hasM ? { hasM: t3.hasM } : {}), { spatialReference: t3.spatialReference }), S ? { curvePaths: f2 } : { paths: f2 }) : __spreadValues({ hasZ: t3.hasZ, hasM: t3.hasM, spatialReference: t3.spatialReference }, S ? { curveRings: f2 } : { rings: f2 });
}
async function I(t3, e2, n) {
  const i2 = new Set(e2);
  return await J(t3, i2, n), t3.map((t4) => {
    if (!t4 || !t(t4)) return t4;
    const n2 = t4.spatialReference.xyTolerance;
    if (null == n2) return t4;
    const i3 = U(n2);
    return u3(T(t4, e2, i3));
  });
}
async function J(e2, s2, n) {
  let i2 = null;
  for (const o3 of e2) if (o3 && t(o3) && null == o3.spatialReference.xyTolerance && f(o3, s2)) {
    const e3 = o3.spatialReference;
    if (!e3) throw new r("geometry:missing-spatial-reference", "Geometry contains an unsupported curve type, but it cannot be densified because it has no spatial reference.");
    const s3 = N(e3);
    if (n.has(s3)) o3.spatialReference = n.get(s3);
    else {
      i2 || (i2 = await import("./apiConverter-ACXXCKWO.js"));
      const r3 = i2.fromSpatialReference(e3), a = r3?.getTolerance();
      if (null == a) throw new r("geometry:missing-tolerance", "Geometry contains an unsupported curve type, but it cannot be densified because the tolerance of its spatial reference is unknown. Set the `xyTolerance` property of the spatial reference.");
      const c2 = o3.spatialReference.clone();
      c2.read({ xyTolerance: a }), o3.spatialReference = c2, n.set(s3, c2);
    }
  }
}
function N(t3) {
  if (null != t3.wkid) return `${t3.wkid}`;
  if (null != t3.wkt) return t3.wkt;
  const e2 = "toJSON" in t3 && "function" == typeof t3.toJSON ? t3.toJSON() : t3;
  return JSON.stringify(e2);
}

export {
  L,
  I
};
//# sourceMappingURL=chunk-SLQLDNYL.js.map
