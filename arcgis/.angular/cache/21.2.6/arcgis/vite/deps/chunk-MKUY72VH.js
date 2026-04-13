import {
  x as x3
} from "./chunk-GAJDBZ5G.js";
import {
  n as n3
} from "./chunk-FZMMQS4X.js";
import {
  $,
  $s,
  $t,
  A,
  A2,
  Bt,
  C,
  Ct,
  D,
  D2,
  Dt,
  Et,
  F,
  Ft,
  G2 as G,
  Gs,
  H,
  Hs,
  I2 as I,
  It,
  J,
  Js,
  Jt,
  K,
  L2 as L,
  Ls,
  Lt,
  O,
  Os,
  Ot,
  P,
  P2,
  Pt,
  Q,
  Qs,
  Qt,
  Rt,
  Ss,
  T,
  U2 as U,
  Us,
  V,
  Vs,
  Ws,
  Wt,
  Xs,
  Xt,
  Y,
  Yt,
  Zt,
  _t,
  a,
  b,
  cs,
  ct,
  ds,
  ei,
  f,
  fs,
  ft,
  g,
  gt,
  h,
  ii,
  j2 as j,
  js,
  jt,
  k,
  k2,
  l,
  ls,
  mi,
  n,
  n2,
  ni,
  p2 as p,
  qt,
  si,
  st,
  v,
  vs,
  vt,
  w2 as w,
  wt,
  x,
  x2,
  y,
  z,
  zt
} from "./chunk-U3KYTZUD.js";
import {
  s
} from "./chunk-S5K7KX5U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/Envelope.js
var C2 = [0, 0, Number.NaN, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0];
var T2 = [2, 1, 1, 1, 3, 1, 2, 3, 2, 4, 1, 1, 2, 1];
var R = [1, 1, 1, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1];
var A3 = [1, 1, 1, 2, 0, 0, 0, 0, 2, 2, 4, 2, 2, 1];
var q = [4, 8, 4, 8, 1];
var w2 = 25;
function B() {
  return Yt(w2, Number.NaN);
}
var z2 = class s2 {
  getAttributeCount() {
    return this.m_attributeCount;
  }
  getSemantics(t2) {
    return this.m_indexToSemantics[t2];
  }
  getSemanticsBitArray() {
    return this.m_semanticsBitArray;
  }
  getAttributeIndex(t2) {
    return this.m_semanticsToIndexMap[t2];
  }
  static getInterpolation(t2) {
    return R[t2];
  }
  static getPersistence(t2) {
    return A3[t2];
  }
  static getPersistenceSize(t2) {
    return q[t2];
  }
  static getPersistenceSizeFromSemantics(t2) {
    return s2.getPersistenceSize(s2.getPersistence(t2)) * s2.getComponentCount(t2);
  }
  static getComponentCount(t2) {
    return T2[t2];
  }
  static maxComponentCount() {
    return 4;
  }
  static isInteger(t2) {
    return 2 === t2 || 3 === t2 || 4 === t2;
  }
  static isIntegerSemantics(t2) {
    return s2.isInteger(s2.getPersistence(t2));
  }
  static isTexture(t2) {
    return 5 === t2 || 6 === t2 || 7 === t2;
  }
  hasAttribute(t2) {
    return !!(this.m_semanticsBitArray & 1 << t2);
  }
  hasAttributesFrom(t2) {
    return (this.m_semanticsBitArray & t2.m_semanticsBitArray) === t2.m_semanticsBitArray;
  }
  hasZ() {
    return this.hasAttribute(1);
  }
  hasM() {
    return this.hasAttribute(2);
  }
  hasID() {
    return this.hasAttribute(3);
  }
  getTotalComponentCount() {
    return this.m_totalComponentCount;
  }
  static getDefaultValue(t2) {
    return C2[t2];
  }
  static isDefaultValue(e, s3) {
    return ls(C2[e], s3);
  }
  equals(t2) {
    return this === t2;
  }
  getDefaultPointAttributes() {
    return this.m_defaultPointAttributes;
  }
  getPointAttributeOffset(t2) {
    return this.m_pointAttributeOffsets[t2];
  }
  constructor(t2) {
    this.m_semanticsBitArray = t2, this.m_attributeCount = 0, this.m_totalComponentCount = 0, this.m_semanticsToIndexMap = new Int32Array(14), this.m_indexToSemantics = new Int32Array(14), this.m_pointAttributeOffsets = new Int32Array(14), this.m_defaultPointAttributes = Yt(w2, Number.NaN), this.m_semanticsToIndexMap.fill(-1), this.m_indexToSemantics.fill(-1);
    let i = 0, n4 = 1, r = 14;
    for (; i < r; i++) t2 & n4 && (this.m_semanticsToIndexMap[i] = this.m_attributeCount, this.m_indexToSemantics[this.m_attributeCount] = i, this.m_attributeCount++, this.m_totalComponentCount += s2.getComponentCount(i)), n4 <<= 1;
    let h2 = 0;
    for (i = 0, r = this.getAttributeCount(); i < r; i++) {
      const t3 = this.getSemantics(i), e = s2.getComponentCount(t3), n5 = s2.getDefaultValue(t3);
      this.m_pointAttributeOffsets[i] = h2;
      for (let s3 = 0; s3 < e; s3++) this.m_defaultPointAttributes[h2] = n5, h2++;
    }
  }
};
var L2 = z2;
function S() {
  return Yt(14, 0);
}
var F2 = class _F {
  static getInstance() {
    return _F.s_thisInstance;
  }
  constructor() {
    this.m_map = /* @__PURE__ */ new Map(), this.m_vd2D = new L2(1), this.m_map.set(1, this.m_vd2D), this.m_vd3D = new L2(3), this.m_map.set(3, this.m_vd2D);
  }
  GetVD2D() {
    return this.m_vd2D;
  }
  GetVD3D() {
    return this.m_vd3D;
  }
  FindOrAdd(t2) {
    if (1 === t2) return this.GetVD2D();
    if (3 === t2) return this.GetVD3D();
    const e = this.m_map.get(t2);
    if (e) return e;
    const s3 = new L2(t2);
    return this.m_map.set(t2, s3), s3;
  }
};
function P3(t2) {
  return F2.getInstance().FindOrAdd(t2);
}
function H2(t2, e) {
  if (!t2 || !e) return e || t2;
  const s3 = t2.getSemanticsBitArray() | e.getSemanticsBitArray();
  return (s3 & t2.getSemanticsBitArray()) === s3 ? t2 : (s3 & e.getSemanticsBitArray()) === s3 ? e : P3(s3);
}
function V2(t2, e) {
  const s3 = t2.getSemanticsBitArray() | 1 << e;
  return (s3 & t2.getSemanticsBitArray()) === s3 ? t2 : P3(s3);
}
function k3(t2, e) {
  const s3 = (t2.getSemanticsBitArray() | 1 << e) - (1 << e);
  return s3 === t2.getSemanticsBitArray() ? t2 : P3(s3);
}
function M() {
  return F2.getInstance().GetVD2D();
}
function O2() {
  return F2.getInstance().GetVD3D();
}
function Y2(t2, e, s3) {
  if (s3.fill(-1), null !== t2 && null !== e) for (let i = 0, n4 = t2.getAttributeCount(); i < n4; i++) s3[i] = e.getAttributeIndex(t2.getSemantics(i));
}
F2.s_thisInstance = new F2();
var X = class _X {
  static construct(t2, e, s3) {
    return new _X(t2, e, s3);
  }
  constructor(t2, e, s3) {
    void 0 !== t2 ? (this.x = t2, this.y = e, this.z = s3) : this.x = this.y = this.z = Number.NaN;
  }
  get 0() {
    return this.x;
  }
  get 1() {
    return this.y;
  }
  get 2() {
    return this.z;
  }
  set 0(t2) {
    this.x = t2;
  }
  set 1(t2) {
    this.y = t2;
  }
  set 2(t2) {
    this.z = t2;
  }
  clone() {
    return new _X(this.x, this.y, this.z);
  }
  assign(t2) {
    return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
  }
  setCoords(t2, e, s3) {
    return this.x = t2, this.y = e, this.z = s3, this;
  }
  setCoordsPoint2DZ(t2, e) {
    return this.setCoords(t2.x, t2.y, e);
  }
  setCoordsPoint3D(t2) {
    this.x = t2.x, this.y = t2.y, this.z = t2.z;
  }
  setZero() {
    this.x = 0, this.y = 0, this.z = 0;
  }
  setNormalized(t2) {
    this.assign(t2), this.normalizeThis();
  }
  normalizeThis() {
    const t2 = this.length();
    return t2 ? (this.x /= t2, this.y /= t2, this.z /= t2) : (this.x = 1, this.y = 0, this.z = 0), this;
  }
  getUnitVector() {
    const t2 = new _X();
    return t2.setNormalized(this), t2;
  }
  sqrLength() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  lengthXY() {
    return n(0), 0;
  }
  static sqrDistance(t2, e) {
    return H(t2.x - e.x) + H(t2.y - e.y) + H(t2.z - e.z);
  }
  static sqrDistanceCoords(t2, e, i, n4, r, h2) {
    return H(t2 - n4) + H(e - r) + H(i - h2);
  }
  static distance(t2, e) {
    return Math.sqrt(_X.sqrDistance(t2, e));
  }
  isEqual(t2, e) {
    return void 0 === e && (e = 0), Math.abs(this.x - t2.x) <= e && Math.abs(this.y - t2.y) <= e && cs(this.z, t2.z, e);
  }
  static compareByLength(t2, e, s3, i) {
    return n(0), 0;
  }
  isEqualCoords(t2, e, s3, i) {
    return n(0), this.x === t2 && this.y === e && this.z === s3;
  }
  isEqualsTols(t2, e, s3) {
    return n(0), false;
  }
  isEqualCoordsTols(t2, e, s3, i, n4) {
    return n(0), false;
  }
  static st_isEqual(t2, e, s3, i) {
    return n(0), false;
  }
  equals(t2, e) {
    return this.isEqual(t2, e);
  }
  equalsTols(t2, e, s3) {
    return n(0), false;
  }
  divThis(t2) {
    return this.x /= t2, this.y /= t2, this.z /= t2, this;
  }
  subThis(t2) {
    return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
  }
  setSub(t2, e) {
    return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this;
  }
  sub(t2) {
    return _X.construct(this.x - t2.x, this.y - t2.y, this.z - t2.z);
  }
  addThis(t2) {
    return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
  }
  add(t2) {
    return this.clone().addThis(t2);
  }
  setAdd(t2, e) {
    return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this;
  }
  mul(t2) {
    return _X.construct(this.x * t2, this.y * t2, this.z * t2);
  }
  dotProduct(t2) {
    return this.x * t2.x + this.y * t2.y + this.z * t2.z;
  }
  crossProductVector(t2) {
    const e = this.y * t2.z - t2.y * this.z, s3 = t2.x * this.z - this.x * t2.z, i = this.x * t2.y - t2.x * this.y;
    return new _X(e, s3, i);
  }
  setCrossProductVector(t2, e) {
    const s3 = t2.y * e.z - e.y * t2.z, i = e.x * t2.z - t2.x * e.z, n4 = t2.x * e.y - e.x * t2.y;
    return this.x = s3, this.y = i, this.z = n4, this;
  }
  setScaled(t2, e) {
    return this.x = t2 * e.x, this.y = t2 * e.y, this.z = t2 * e.z, this;
  }
  scaleThis(t2) {
    return this.x *= t2, this.y *= t2, this.z *= t2, this;
  }
  scaleZThis(t2) {
    return this.z *= t2, this;
  }
  setNAN() {
    return n(0), this;
  }
  isNAN() {
    return Number.isNaN(this.x) || Number.isNaN(this.y) || Number.isNaN(this.z);
  }
  static getNAN() {
    return _X.construct(Number.NaN, Number.NaN, Number.NaN);
  }
  isFinite() {
    return n(0), false;
  }
  isZero() {
    return 0 === this.x && 0 === this.y && 0 === this.z;
  }
  norm(t2) {
    return n(0), 0;
  }
  sqrDistanceFromCenterToSpheroidSurface(t2, e) {
    return n(0), 0;
  }
  distanceFromCenterToSpheroidSurface(t2, e) {
    return Math.sqrt(this.sqrDistanceFromCenterToSpheroidSurface(t2, e));
  }
  static getClosestCoordinate(t2, e, s3, i = false) {
    return n(0), 0;
  }
  compare(t2) {
    return this.y < t2.y ? -1 : this.y > t2.y ? 1 : this.x < t2.x ? -1 : this.x > t2.x ? 1 : this.z < t2.z ? -1 : this.z > t2.z ? 1 : 0;
  }
  compareXYZ(t2) {
    return n(0), 0;
  }
  negateThis() {
    this.x = -this.x, this.y = -this.y, this.z = -this.z;
  }
  static averageFast(t2, e) {
    return n(0), {};
  }
  static average(t2, e) {
    return n(0), {};
  }
  static size() {
    return _X.dimensions;
  }
  static lerp(t2, e, s3) {
    const i = new _X();
    return j(t2, e, s3, i), i;
  }
  static slerp(t2, e, s3) {
    return n(0), {};
  }
  static compareVectors(t2, e) {
    return n(0), 0;
  }
  static selectRightHandedBasisFromNormal(t2, e, s3) {
    const i = t2.getUnitVector(), n4 = i.createAPerpendicular(), r = new _X();
    r.setCrossProductVector(i, n4), r.normalizeThis(), e.setCoordsPoint3D(n4), s3.setCoordsPoint3D(r);
  }
  createAPerpendicular() {
    const t2 = [this.crossProductVector(new _X(0, 0, 1)), this.crossProductVector(new _X(1, 0, 0)), this.crossProductVector(new _X(0, 1, 0))], e = [t2[0].sqrLength(), t2[1].sqrLength(), t2[2].sqrLength()], s3 = t2[e.reduce((t3, s4, i) => e[t3] > e[i] ? t3 : i, 0)];
    return s3.normalizeThis(), s3;
  }
  calculateAngle(t2) {
    return n(0), 0;
  }
  static crossDotSign(t2, e, s3) {
    return n(0), 0;
  }
  static isBisectorRobust(t2, e, s3) {
    return n(0), 0;
  }
  static compareZOrder(t2, e) {
    return n(0), false;
  }
};
X.dimensions = 3;
var G2 = class _G {
  static constructEmpty() {
    return new _G(Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN);
  }
  constructor(t2, e, s3, i, n4, r) {
    this.m_EnvelopeType = 3, this.xmin = t2, this.ymin = e, this.zmin = s3, this.xmax = i, this.ymax = n4, this.zmax = r, this.normalize();
  }
  inflate(t2) {
    this.inflateCoords(t2, t2, t2);
  }
  inflateCoords(t2, e, s3) {
    n(0);
  }
  getEnvelope2D() {
    return new n3(this.xmin, this.ymin, this.xmax, this.ymax);
  }
  getEnvelopeZs() {
    return new x2(this.zmin, this.zmax);
  }
  setEmptyZ() {
    this.zmin = Number.NaN, this.zmax = Number.NaN;
  }
  normalize() {
    let t2 = false;
    this.xmin <= this.xmax || (this.xmax = Pt(this.xmin, this.xmin = this.xmax), t2 = true), this.ymin <= this.ymax || (this.ymax = Pt(this.ymin, this.ymin = this.ymax), t2 = true), !t2 || this.xmin <= this.xmax && this.ymin <= this.ymax ? this.zmin <= this.zmax || (this.zmax = Pt(this.zmin, this.zmin = this.zmax), this.zmin <= this.zmax || this.setEmptyZ()) : this.setEmpty();
  }
  isEmpty() {
    return Number.isNaN(this.xmin) || Number.isNaN(this.ymin) || Number.isNaN(this.xmax) || Number.isNaN(this.ymax);
  }
  isEmptyZ() {
    return Number.isNaN(this.zmin) || Number.isNaN(this.zmax);
  }
  setEmpty() {
    this.xmin = Number.NaN, this.ymin = Number.NaN, this.zmin = Number.NaN, this.xmax = Number.NaN, this.ymax = Number.NaN, this.zmax = Number.NaN;
  }
  mergeEnv3D(t2) {
    t2.isEmpty() || (this.mergeCoords(t2.xmin, t2.ymin, t2.zmin), this.mergeCoords(t2.xmax, t2.ymax, t2.zmax));
  }
  mergeNe(t2) {
    this.mergeNeCoords(t2.x, t2.y, t2.z);
  }
  mergeNeCoords(t2, e, s3) {
    this.xmin > t2 ? this.xmin = t2 : this.xmax < t2 && (this.xmax = t2), this.ymin > e ? this.ymin = e : this.ymax < e && (this.ymax = e), this.zmin > s3 ? this.zmin = s3 : this.zmax < s3 && (this.zmax = s3);
  }
  mergeCoords(t2, e, s3) {
    this.isEmpty() ? (this.xmin = t2, this.xmax = t2, this.ymin = e, this.ymax = e, this.zmin = s3, this.zmax = s3) : (this.isEmptyZ() && (this.zmin = s3, this.zmax = s3), this.mergeNeCoords(t2, e, s3));
  }
  setCoords(t2, e, s3, i, n4, r) {
    this.xmin = t2, this.ymin = e, this.zmin = s3, this.xmax = i, this.ymax = n4, this.zmax = r, this.normalize();
  }
  sqrDistanceEnvelope3DAndPoints(t2, e, s3, i = 1) {
    return n(0), 0;
  }
  sqrMaxDistance(t2, e = 1) {
    return n(0), 0;
  }
};
var U2 = -559038737;
var Z = z2;
function Q2(t2, e, s3) {
  switch (t2) {
    case 0:
      return new it(e, s3);
    case 1:
      return new nt(e, s3);
    case 2:
      return new st2(e, s3);
    case 3:
      throw new Error("64 bit int attribute stream not implemented");
    case 4:
      return new et(e, s3);
    default:
      P("");
  }
}
function j2(t2, e) {
  const s3 = Z.getComponentCount(t2);
  return Q2(Z.getPersistence(t2), e * s3, Z.getDefaultValue(t2));
}
function W(t2, e) {
  const s3 = Z.getComponentCount(t2);
  return Q2(Z.getPersistence(t2), e * s3);
}
function J2(t2, e) {
  return new st2(t2, e);
}
function K2(t2, e) {
  return new et(t2, e);
}
function $2(t2, e) {
  return new nt(t2, e);
}
var tt = class _tt {
  size() {
    return this.m_size;
  }
  checkResize(t2, e) {
    t2 > this.m_size && this.resize(t2, e);
  }
  resize(t2, e) {
    if ((t2 = Math.trunc(t2)) === this.m_size) return;
    const s3 = !!e || Number.isNaN(e);
    if (t2 < this.m_a.length) this.m_a.length > _tt.s_resizeMin && 1.25 * t2 < this.m_a.length && (this.m_a = this.m_a.slice(0, t2)), s3 && t2 > this.m_size && this.m_a.fill(e, this.m_size, t2);
    else if (t2 >= this.m_a.length) {
      const i = 1.25 * t2, n4 = new this.m_a.constructor(i);
      n4.set(this.m_a), this.m_a = n4, s3 && this.m_a.fill(e, this.m_size, t2);
    }
    this.m_size = t2;
  }
  resizeRounded(t2, e) {
    return this.resize(t2, e);
  }
  reserve(t2) {
  }
  read(t2) {
    return this.m_a[t2];
  }
  readAsDbl(t2) {
    return this.read(t2);
  }
  write(t2, e) {
    this.m_a[t2] = e;
  }
  writeAsDbl(t2, e) {
    this.write(t2, e);
  }
  setRange(t2, e, s3) {
    (e < 0 || s3 < 0 || s3 + e > this.size()) && P(), this.m_a.fill(t2, e, e + s3);
  }
  add(t2) {
    this.resize(this.m_size + 1), this.m_a[this.m_size - 1] = t2;
  }
  addArray(t2, e) {
    const s3 = this.m_size;
    void 0 === e ? (this.resize(this.m_size + t2.length), this.m_a.set(t2, s3)) : (this.resize(this.m_size + e), this.m_a.set(t2.slice(0, e), s3));
  }
  getArray() {
    return this.m_a;
  }
  equals(t2, e, s3, i) {
    if (this.getPersistence() !== t2.getPersistence()) return false;
    return rt(this, t2, e, s3, i);
  }
  insertRange(t2, e, s3, i) {
    const n4 = this.m_size;
    this.checkResize(Math.max(0, i) + s3), this.m_a.copyWithin(t2 + s3, t2, i >= 0 ? i : n4), this.m_a.fill(e, t2, t2 + s3);
  }
  readRange(t2, e) {
    return this.m_a.slice(t2, t2 + e);
  }
  insertRangeFromStream(t2, e, s3, i, n4, r, h2) {
    n(this.getPersistence() === e.getPersistence());
    const o = e, a2 = this.m_size;
    i && this.checkResize(Math.max(0, h2) + i), this.m_a.copyWithin(t2 + i, t2, h2 >= 0 ? h2 : a2), this.m_a.set(o.readRange(s3, i), t2), n4 || this.reverseRange(t2, i, r);
  }
  writeRange(t2, e, s3, i, n4, r) {
    n(this.getPersistence() === s3.getPersistence());
    const h2 = s3;
    if ((t2 < 0 || e < 0 || i < 0) && P(), h2.size() < i + e && P(), 0 === e) return;
    this.size() < e + t2 && this.resize(e + t2);
    const o = h2.m_a.subarray(i, i + e);
    ht(this.m_a, t2, e, o);
  }
  insertAttributes(t2, e, s3, i) {
    const n4 = Z.getComponentCount(s3);
    this.m_a.copyWithin(t2 + n4, t2, i >= 0 ? i : this.m_size);
    for (let r = 0; r < n4; r++) this.m_a[t2 + r] = e.getAttributeAsDbl(s3, r);
  }
  insertAttributesFromPoints(t2, e, s3, i, n4) {
    n(Z.getPersistence(i) === this.getPersistence());
    const r = Z.getComponentCount(i), h2 = this.m_size;
    if (this.checkResize(Math.max(0, n4) + r * s3), this.m_a.copyWithin(t2 + r * s3, t2, n4 >= 0 ? n4 : h2), 0 === i) {
      const i2 = new mi();
      for (let n5 = t2, r2 = 0; r2 < s3; r2++, n5 += 2) e[r2].queryXY(i2), this.m_a[n5] = i2.x, this.m_a[n5 + 1] = i2.y;
    } else if (1 === r) for (let o = t2, a2 = 0; a2 < s3; a2++, o++) this.m_a[o] = e[a2].getAttributeAsDbl(i, 0);
    else for (let o = t2, a2 = 0; a2 < s3; a2++, o += r) for (let t3 = 0; t3 < r; t3++) this.m_a[o + t3] = e[a2].getAttributeAsDbl(i, t3);
  }
  eraseRange(t2, e, s3) {
    this.m_size < t2 + e && P(), this.m_a.copyWithin(t2, t2 + e), this.m_size -= e;
  }
  reverseRange(t2, e, s3) {
    if ((s3 < 1 || e % s3 !== 0) && P(), this.m_a.subarray(t2, t2 + e).reverse(), s3 > 1) for (let i = t2, n4 = t2 + e; i < n4; i += s3) {
      let t3 = i, e2 = i + s3 - 1;
      for (; t3 < e2; ) {
        const s4 = this.m_a[t3];
        this.m_a[t3] = this.m_a[e2], this.m_a[e2] = s4, t3++, e2--;
      }
    }
  }
  rotate(t2, e, s3) {
    (e < t2 || e > s3 || t2 > s3) && A("rotate"), e !== t2 && e !== s3 && (this.reverseRange(t2, e - t2, 1), this.reverseRange(e, s3 - e, 1), this.reverseRange(t2, s3 - t2, 1));
  }
  sort(t2, e, s3) {
    this.m_a.subarray(t2, e).sort(s3);
  }
  constructor(t2) {
    if (t2.move) this.m_a = t2.move.m_a, this.m_size = t2.move.m_size, t2.move.m_a = t2.move.m_a.slice(0, 0), t2.move.m_size = 0;
    else if (t2.fromArray) this.m_a = t2.fromArray, this.m_size = t2.size ?? t2.fromArray.length;
    else if (t2.copy) this.m_size = t2.copy.m_size, t2.maxSize && (this.m_size = Math.min(t2.maxSize, this.m_size)), this.m_a = t2.copy.m_a.slice(0, this.m_size);
    else {
      const e = Math.max(t2.size, _tt.s_constructMin);
      this.m_a = new t2.ctor(e), (t2.defaultValue || Number.isNaN(t2.defaultValue)) && this.m_a.fill(t2.defaultValue), this.m_size = t2.size;
    }
  }
};
tt.s_constructMin = 2, tt.s_resizeMin = 30;
var et = class _et extends tt {
  setBits(t2, e) {
    this.m_a[t2] |= e;
  }
  clearBits(t2, e) {
    this.m_a[t2] &= ~e;
  }
  getPersistence() {
    return 4;
  }
  clone() {
    return new _et({ ctor: Int8Array, copy: this });
  }
  restrictedClone(t2) {
    return new _et({ ctor: Int8Array, copy: this, maxSize: t2 });
  }
  constructor(t2, e) {
    super("number" == typeof t2 ? { ctor: Int8Array, size: t2, defaultValue: e } : t2);
  }
};
var st2 = class _st extends tt {
  getPersistence() {
    return 2;
  }
  clone() {
    return new _st({ ctor: Int32Array, copy: this });
  }
  restrictedClone(t2) {
    return new _st({ ctor: Int32Array, copy: this, maxSize: t2 });
  }
  write(t2, e) {
    n(e <= ds()), super.write(t2, e);
  }
  constructor(t2, e) {
    super("number" == typeof t2 ? { ctor: Int32Array, size: t2, defaultValue: e } : t2);
  }
};
var it = class _it extends tt {
  getPersistence() {
    return 0;
  }
  clone() {
    return new _it({ ctor: Float32Array, copy: this });
  }
  restrictedClone(t2) {
    return new _it({ ctor: Float32Array, copy: this, maxSize: t2 });
  }
  constructor(t2, e) {
    super("number" == typeof t2 ? { ctor: Float32Array, size: t2, defaultValue: e } : t2);
  }
};
var nt = class _nt extends tt {
  getPersistence() {
    return 1;
  }
  applyTransformation(t2, e, s3) {
    (1 & e || e + 2 * s3 > this.size()) && P();
    const i = 0 === e ? this.m_a : this.m_a.subarray(e);
    t2.transformInterleavedPoints(i, s3, i);
  }
  readPoint2D(t2) {
    const e = this.m_a[t2], s3 = this.m_a[t2 + 1];
    return new mi(e, s3);
  }
  queryPoint2D(t2, e) {
    return e.x = this.m_a[t2], e.y = this.m_a[t2 + 1], e;
  }
  writePoint2D(t2, e) {
    this.write(t2, e.x), this.write(t2 + 1, e.y);
  }
  insert(t2, e, s3) {
    this.checkResize(s3 + 2), this.m_a.copyWithin(t2 + 2, t2, s3), this.m_a[t2] = e.x, this.m_a[t2 + 1] = e.y;
  }
  insertRangeFromPoints(t2, e, s3, i, n4, r) {
    const h2 = this.m_size;
    if (this.checkResize(Math.max(r, 0) + 2 * i), this.m_a.copyWithin(t2 + 2 * i, t2, r >= 0 ? r : h2), n4) for (let o = s3, a2 = t2, m = 0; m < i; ++m, ++o) {
      const t3 = e[o];
      this.m_a[a2++] = t3.x, this.m_a[a2++] = t3.y;
    }
    else for (let o = s3 + i - 1, a2 = t2, m = 0; m < i; ++m, --o) {
      const t3 = e[o];
      this.m_a[a2++] = t3.x, this.m_a[a2++] = t3.y;
    }
  }
  queryRange(t2, e, s3, i, n4) {
    if ((t2 < 0 || e < 0) && P(), !i && (n4 <= 0 || e % n4 !== 0) && P(), 0 === e) return;
    if (1 === e) return void (s3[0] = this.m_a[t2]);
    const r = this.m_a.subarray(t2, t2 + e);
    s3.set(r);
  }
  writeRangeFromArray(t2, e, s3, i, n4) {
    if ((t2 < 0 || e < 0) && P(), 0 === e) return;
    if (1 === e) return void (this.m_a[t2] = s3[0]);
    let r = s3;
    e < s3.length && (r = s3.subarray(0, e)), this.m_a.set(r, t2);
  }
  clone() {
    return new _nt({ ctor: Float64Array, copy: this });
  }
  restrictedClone(t2) {
    return new _nt({ ctor: Float64Array, copy: this, maxSize: t2 });
  }
  constructor(t2, e) {
    super("number" == typeof t2 ? { ctor: Float64Array, size: t2, defaultValue: e } : t2);
  }
};
function rt(t2, e, s3, n4, r) {
  if (t2.getPersistence() !== e.getPersistence()) return false;
  const h2 = t2.getPersistence() <= 1, o = t2.size(), a2 = e.size();
  if (n4 > o || n4 > a2) return false;
  if (r) if (h2) {
    for (let m = s3; m < n4; m++) if (!cs(t2.read(m), e.read(m), r)) return false;
  } else for (let i = s3; i < n4; i++) {
    let s4 = t2.read(i) - e.read(i);
    if (s4 < 0 && (s4 = -s4), s4 > r) return false;
  }
  else for (let i = s3; i < n4; i++) {
    const s4 = t2.read(i), n5 = e.read(i);
    if (s4 !== n5) {
      if (h2 && Number.isNaN(s4) && Number.isNaN(n5)) continue;
      return false;
    }
  }
  return true;
}
function ht(t2, e, s3, i, n4, r) {
  if ((e < 0 || s3 < 0) && P(), 0 === s3) return;
  if (1 === s3) return void (t2[e] = i[0]);
  let h2 = i;
  s3 < i.length && (h2 = i.subarray(0, s3)), t2.set(h2, e);
}
var ot = { partCount: 0, partOffsets: void 0, partFlags: void 0, segmentFlags: void 0, segmentIndices: void 0, segmentParams: void 0, segmentCountArc: 0, segmentCountBezier: 0 };
var at = class _at {
  constructor() {
    this.m_minValue = -1, this.m_maxValue = -1, this.m_dy = Number.NaN, this.m_buckets = new st2(0), this.m_bucketedIndices = new st2(0);
  }
  static sortEx(t2, e, s3, i, n4 = 32) {
    if (s3 - e <= n4) return void i.userSort(e, s3, t2);
    new _at().sort(t2, e, s3, i, n4);
  }
  sort(t2, e, s3, i, n4 = 32) {
    if (s3 - e <= n4) return void i.userSort(e, s3, t2);
    let r = true, h2 = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY;
    for (let m = e; m < s3; m++) {
      const e2 = i.getValue(t2.read(m));
      e2 < h2 && (h2 = e2), e2 > o && (o = e2);
    }
    if (this.reset(s3 - e, h2, o, s3 - e)) {
      for (let r2 = e; r2 < s3; r2++) {
        const s4 = t2.read(r2), n6 = i.getValue(s4), h3 = this.getBucket(n6);
        this.m_buckets.write(h3, this.m_buckets.read(h3) + 1), this.m_bucketedIndices.write(r2 - e, s4);
      }
      let n5 = this.m_buckets.read(0);
      this.m_buckets.write(0, 0);
      for (let t3 = 1, e2 = this.m_buckets.size(); t3 < e2; t3++) {
        const e3 = this.m_buckets.read(t3);
        this.m_buckets.write(t3, n5), n5 += e3;
      }
      for (let r2 = e; r2 < s3; r2++) {
        const s4 = this.m_bucketedIndices.read(r2 - e), n6 = i.getValue(s4), h3 = this.getBucket(n6), o2 = this.m_buckets.read(h3);
        t2.write(o2 + e, s4), this.m_buckets.write(h3, o2 + 1);
      }
      r = false;
    }
    if (r) return void i.userSort(e, s3, t2);
    let a2 = 0;
    for (let m = 0, _ = this.m_buckets.size(); m < _; m++) {
      const s4 = a2;
      a2 = this.m_buckets.read(m), a2 > s4 && i.userSort(e + s4, e + a2, t2);
    }
    this.m_buckets.size() > 100 && (this.m_buckets.resize(0), this.m_bucketedIndices.resize(0));
  }
  reset(t2, e, s3, i) {
    if (t2 < 2 || s3 === e) return false;
    const n4 = Math.min(_at.c_maxBuckets, t2);
    return this.m_buckets.resize(n4), this.m_buckets.setRange(0, 0, this.m_buckets.size()), this.m_minValue = e, this.m_maxValue = s3, this.m_bucketedIndices.resize(i), this.m_dy = (s3 - e) / (n4 - 1), true;
  }
  getBucket(t2) {
    return Math.trunc((t2 - this.m_minValue) / this.m_dy);
  }
  getBucketCount() {
    return this.m_buckets.size();
  }
};
at.c_maxBuckets = 65536;
var mt = class {
  capacity() {
    return this.capacity_;
  }
  constructor(t2) {
    this.m_buffer = new Int32Array(0), this.m_firstFree = -1, this.m_last = 0, this.size_ = 0, this.capacity_ = 0, this.stride = t2;
  }
  size() {
    return this.size_;
  }
  deleteElement(t2) {
    t2 < this.m_last ? (this.m_buffer[t2 * this.stride] = this.m_firstFree, this.m_firstFree = t2) : this.m_last--, this.size_--;
  }
  getField(t2, e) {
    return this.m_buffer[t2 * this.stride + e];
  }
  setField(t2, e, s3) {
    this.m_buffer[t2 * this.stride + e] = s3;
  }
  elementToIndex(t2) {
    return t2;
  }
  newElement() {
    let t2 = this.m_firstFree;
    if (-1 === t2) {
      if (this.m_last === this.capacity_) {
        let t3 = 0 !== this.capacity_ ? Math.trunc(3 * (this.capacity_ + 1) / 2) : 1;
        if (t3 > Number.MAX_SAFE_INTEGER && (t3 = Number.MAX_SAFE_INTEGER), t3 === this.capacity_) throw new Error("index out of bounds");
        this.grow_(t3);
      }
      t2 = this.m_last, this.m_last++;
    } else this.m_firstFree = this.m_buffer[t2 * this.stride];
    this.size_++;
    for (let e = t2 * this.stride; e < t2 * this.stride + this.stride; e++) this.m_buffer[e] = -1;
    return t2;
  }
  newElementPset(t2) {
    let e = this.m_firstFree;
    if (-1 === e) {
      if (this.m_last === this.capacity_) {
        let t3 = 0 !== this.capacity_ ? Math.trunc(3 * (this.capacity_ + 1) / 2) : 1;
        if (t3 > Number.MAX_SAFE_INTEGER && (t3 = Number.MAX_SAFE_INTEGER), t3 === this.capacity_) throw new Error("index out of bounds");
        this.grow_(t3);
      }
      e = this.m_last, this.m_last++;
    } else this.m_firstFree = this.m_buffer[e * this.stride];
    this.size_++;
    const s3 = e * this.stride;
    for (let i = 0; i < t2.length; i++) this.m_buffer[s3 + i] = t2[i];
    return e;
  }
  deleteAll(t2) {
    this.m_firstFree = -1, this.m_last = 0, this.size_ = 0, t2 && (this.m_buffer = new Int32Array(0), this.capacity_ = 0);
  }
  setCapacity(t2) {
    t2 > this.capacity_ && this.grow_(t2);
  }
  swap(t2, e) {
    const s3 = t2 * this.stride, i = e * this.stride;
    for (let n4 = 0; n4 < this.stride; n4++) {
      const t3 = this.m_buffer[i + n4];
      this.m_buffer[i + n4] = this.m_buffer[s3 + n4], this.m_buffer[s3 + n4] = t3;
    }
  }
  swapField(t2, e, s3) {
    const i = this.m_buffer[this.stride * e + s3];
    this.m_buffer[this.stride * e + s3] = this.m_buffer[this.stride * t2 + s3], this.m_buffer[this.stride * t2 + s3] = i;
  }
  static impossibleIndex2() {
    return -2;
  }
  static impossibleIndex3() {
    return -3;
  }
  static isValidElement(t2) {
    return t2 >= 0;
  }
  grow_(t2) {
    null == this.m_buffer && (this.m_buffer = new Int32Array(0));
    const e = this.stride * t2, s3 = new Int32Array(e);
    s3.set(this.m_buffer, 0), this.m_buffer = s3, this.capacity_ = t2;
  }
};
function _t2(t2, e) {
  return { element: t2, box: e.clone() };
}
var lt = class _lt {
  constructor(t2, e, s3) {
    this.m_extent = new n3(), this.m_dataExtent = new n3(), this.m_childExtents = [new n3(), new n3(), new n3(), new n3()], this.m_elementNodes = new mt(4), this.m_data = [], this.m_freeData = [], this.m_root = -1, this.m_height = 8, void 0 === s3 && (s3 = false), this.m_quadTreeNodes = new mt(s3 ? 11 : 10), this.m_bStoreDuplicates = s3, this.reset_(t2, e);
  }
  reset(t2, e) {
    this.m_quadTreeNodes.deleteAll(false), this.m_elementNodes.deleteAll(false), this.m_data.length = 0, this.m_freeData.length = 0, this.reset_(t2, e);
  }
  insert(t2, e) {
    if (-1 === this.m_root && this.createRoot_(), this.m_bStoreDuplicates) {
      const s4 = this.insertDuplicates_(t2, e, 0, this.m_extent, this.m_root, false, -1);
      return -1 !== s4 && (this.m_dataExtent.isEmpty() ? this.m_dataExtent.setCoords({ env2D: e }) : this.m_dataExtent.mergeEnvelope2D(e)), s4;
    }
    const s3 = this.insert_(t2, e, 0, this.m_extent, this.m_root, false, -1);
    return -1 !== s3 && (this.m_dataExtent.isEmpty() ? this.m_dataExtent.setCoords({ env2D: e }) : this.m_dataExtent.mergeEnvelope2D(e)), s3;
  }
  insertEx(t2, e, s3) {
    if (-1 === this.m_root && this.createRoot_(), this.m_bStoreDuplicates) {
      const s4 = this.insertDuplicates_(t2, e, 0, this.m_extent, this.m_root, false, -1);
      return -1 !== s4 && (this.m_dataExtent.isEmpty() ? this.m_dataExtent.setCoords({ env2D: e }) : this.m_dataExtent.mergeEnvelope2D(e)), s4;
    }
    let i;
    i = -1 === s3 ? this.m_root : this.getQuad_(s3);
    const n4 = this.getHeight(i), r = this.getExtent(i), h2 = this.insert_(t2, e, n4, r, i, false, -1);
    return -1 !== h2 && (this.m_dataExtent.isEmpty() ? this.m_dataExtent.setCoords({ env2D: e }) : this.m_dataExtent.mergeEnvelope2D(e)), h2;
  }
  removeElement(t2) {
    n(0);
  }
  getElement(t2) {
    return this.getElementValue_(this.getData_(t2));
  }
  getElementAtIndex(t2) {
    return n(0), 0;
  }
  getElementExtent(t2) {
    const e = this.getData_(t2);
    return this.getBoundingBoxValue_(e).clone();
  }
  getElementExtentAtIndex(t2) {
    return n(0), {};
  }
  getDataExtent() {
    return this.m_dataExtent.clone();
  }
  getQuadTreeExtent() {
    return n(0), {};
  }
  getHeight(t2) {
    return this.m_quadTreeNodes.getField(t2, 6) >> _lt.m_heightBitShift;
  }
  getMaxHeight() {
    return this.m_height;
  }
  getExtent(t2) {
    const e = new n3();
    if (e.setCoords({ env2D: this.m_extent }), t2 === this.m_root) return e;
    const s3 = [];
    let i = t2;
    do {
      s3.push(this.getQuadrant_(i)), i = this.getParent_(i);
    } while (i !== this.m_root);
    const n4 = s3.length;
    for (let r = 0; r < n4; r++) {
      const t3 = s3.at(-1);
      s3.pop(), 0 === t3 ? (e.xmin = 0.5 * (e.xmin + e.xmax), e.ymin = 0.5 * (e.ymin + e.ymax)) : 1 === t3 ? (e.xmax = 0.5 * (e.xmin + e.xmax), e.ymin = 0.5 * (e.ymin + e.ymax)) : 2 === t3 ? (e.xmax = 0.5 * (e.xmin + e.xmax), e.ymax = 0.5 * (e.ymin + e.ymax)) : (e.xmin = 0.5 * (e.xmin + e.xmax), e.ymax = 0.5 * (e.ymin + e.ymax));
    }
    return e;
  }
  getQuad(t2) {
    return this.getQuad_(t2);
  }
  getElementCount() {
    return -1 === this.m_root ? 0 : this.getSubTreeElementCount_(this.m_root);
  }
  getSubTreeElementCount(t2) {
    return this.getSubTreeElementCount_(t2);
  }
  getContainedSubTreeElementCount(t2) {
    return this.m_bStoreDuplicates ? this.getContainedSubTreeElementCount_(t2) : this.getSubTreeElementCount_(t2);
  }
  getIntersectionCount(t2, e, s3) {
    if (-1 === this.m_root) return 0;
    const i = new n3();
    i.setCoords({ env2D: t2 }), i.inflateCoords(e, e);
    const n4 = [], r = [];
    n4.push(this.m_root), r.push(this.m_extent.clone());
    const h2 = Ot(n3, 4);
    let o = 0;
    for (; n4.length > 0; ) {
      let t3 = false;
      const e2 = n4.at(-1), a2 = r.at(-1);
      if (n4.pop(), r.pop(), i.containsEnvelope(a2)) {
        if (o += this.getSubTreeElementCount(e2), s3 > 0 && o >= s3) return s3;
      } else if (i.isIntersecting(a2)) {
        for (let t4 = this.getFirstElement_(e2); -1 !== t4; t4 = this.getNextElement_(t4)) {
          const e3 = this.getData_(t4);
          if (this.getBoundingBoxValue_(e3).isIntersecting(i) && (o++, s3 > 0 && o >= s3)) return s3;
        }
        t3 = this.getHeight(e2) + 1 <= this.m_height;
      }
      if (t3) {
        _lt.setChildExtents_(a2, h2);
        for (let t4 = 0; t4 < 4; t4++) {
          const s4 = this.getChild_(e2, t4);
          if (-1 !== s4 && this.getSubTreeElementCount_(s4) > 0) {
            i.isIntersecting(h2[t4]) && (n4.push(s4), r.push(h2[t4].clone()));
          }
        }
      }
    }
    return o;
  }
  hasData(t2, e) {
    return this.getIntersectionCount(t2, e, 1) >= 1;
  }
  getIterator(t2, e) {
    return new ut(this, t2, e);
  }
  getIteratorForQT() {
    return new ut(this);
  }
  getSortedIterator(t2, e) {
    return new dt(this.getIterator(t2, e));
  }
  getSortedIteratorForQT() {
    return new dt(this.getIteratorForQT());
  }
  visitLeavesNearest(t2, e, s3, i) {
    n(0);
  }
  reset_(t2, e) {
    (e < 0 || e > 127) && P("invalid height"), this.m_height = e, this.m_extent.setCoords({ env2D: t2 }), this.m_dataExtent.setEmpty(), this.m_root = -1;
  }
  insert_(t2, e, s3, i, n4, r, h2) {
    if (!i.containsEnvelope(e)) return 0 === s3 ? -1 : this.insert_(t2, e, 0, this.m_extent, this.m_root, r, h2);
    if (!r) for (let _ = n4; -1 !== _; _ = this.getParent_(_)) this.setSubTreeElementCount_(_, this.getSubTreeElementCount_(_) + 1);
    const o = new n3();
    o.setCoords({ env2D: i });
    let a2, m = n4;
    for (a2 = s3; a2 < this.m_height && this.canPushDown_(m); a2++) {
      _lt.setChildExtents_(o, this.m_childExtents);
      let t3 = false;
      for (let s4 = 0; s4 < 4; s4++) if (this.m_childExtents[s4].containsEnvelope(e)) {
        t3 = true;
        let e2 = this.getChild_(m, s4);
        -1 === e2 && (e2 = this.createChild_(m, s4)), this.setSubTreeElementCount_(e2, this.getSubTreeElementCount_(e2) + 1), m = e2, o.setCoords({ env2D: this.m_childExtents[s4] });
        break;
      }
      if (!t3) break;
    }
    return this.insertAtQuad_(t2, e, a2, o, m, r, n4, h2, -1);
  }
  insertDuplicates_(t2, e, s3, i, n4, r, h2) {
    if (!r) {
      if (!i.containsEnvelope(e)) return -1;
      this.setSubTreeElementCount_(n4, this.getSubTreeElementCount_(n4) + 1), this.setContainedSubTreeElementCount_(n4, this.getContainedSubTreeElementCount_(n4) + 1);
    }
    const o = Math.max(e.width(), e.height());
    let a2 = -1;
    const m = [], _ = [], l2 = [];
    m.push(n4), _.push(i.clone()), l2.push(s3);
    const u = Ot(n3, 4);
    for (; m.length > 0; ) {
      let s4 = false;
      const i2 = m.at(-1), d = _.at(-1), c = l2.at(-1);
      if (m.pop(), _.pop(), l2.pop(), c + 1 < this.m_height && this.canPushDown_(i2)) {
        o <= Math.max(d.width(), d.height()) / 2 && (s4 = true);
      }
      if (s4) {
        _lt.setChildExtents_(d, u);
        let t3 = false;
        for (let s5 = 0; s5 < 4; s5++) if (t3 = u[s5].containsEnvelope(e), t3) {
          let t4 = this.getChild_(i2, s5);
          -1 === t4 && (t4 = this.createChild_(i2, s5)), m.push(t4), _.push(u[s5].clone()), l2.push(c + 1), this.setSubTreeElementCount_(t4, this.getSubTreeElementCount_(t4) + 1), this.setContainedSubTreeElementCount_(t4, this.getContainedSubTreeElementCount_(t4) + 1);
          break;
        }
        if (!t3) for (let s5 = 0; s5 < 4; s5++) {
          if (u[s5].isIntersecting(e)) {
            let t4 = this.getChild_(i2, s5);
            -1 === t4 && (t4 = this.createChild_(i2, s5)), m.push(t4), _.push(u[s5].clone()), l2.push(c + 1), this.setSubTreeElementCount_(t4, this.getSubTreeElementCount_(t4) + 1);
          }
        }
      } else a2 = this.insertAtQuad_(t2, e, c, d, i2, r, n4, h2, a2), r = false;
    }
    return 0;
  }
  insertAtQuad_(t2, e, s3, i, n4, r, h2, o, a2) {
    this.getFirstElement_(n4);
    const m = this.getLastElement_(n4);
    let _ = -1;
    if (r) {
      if (n4 === h2) return o;
      this.disconnectElementHandle_(o), _ = o;
    } else -1 === a2 ? (_ = this.createElement_(), this.setDataValues_(this.getData_(_), t2, e)) : _ = this.createElementFromDuplicate_(a2);
    return this.setQuad_(_, n4), -1 !== m ? (this.setPrevElement_(_, m), this.setNextElement_(m, _)) : this.setFirstElement_(n4, _), this.setLastElement_(n4, _), this.setLocalElementCount_(n4, this.getLocalElementCount_(n4) + 1), this.canFlush_(n4) && this.flush_(s3, i, n4), _;
  }
  static setChildExtents_(t2, e) {
    const s3 = 0.5 * (t2.xmin + t2.xmax), i = 0.5 * (t2.ymin + t2.ymax);
    e[0].setCoords({ xmin: s3, ymin: i, xmax: t2.xmax, ymax: t2.ymax }), e[1].setCoords({ xmin: t2.xmin, ymin: i, xmax: s3, ymax: t2.ymax }), e[2].setCoords({ xmin: t2.xmin, ymin: t2.ymin, xmax: s3, ymax: i }), e[3].setCoords({ xmin: s3, ymin: t2.ymin, xmax: t2.xmax, ymax: i });
  }
  disconnectElementHandle_(t2) {
    const e = this.getQuad_(t2), s3 = this.getFirstElement_(e), i = this.getLastElement_(e), n4 = this.getPrevElement_(t2), r = this.getNextElement_(t2);
    s3 === t2 ? (-1 !== r ? this.setPrevElement_(r, -1) : this.setLastElement_(e, -1), this.setFirstElement_(e, r)) : i === t2 ? (this.setNextElement_(n4, -1), this.setLastElement_(e, n4)) : (this.setPrevElement_(r, n4), this.setNextElement_(n4, r)), this.setPrevElement_(t2, -1), this.setNextElement_(t2, -1), this.setLocalElementCount_(e, this.getLocalElementCount_(e) - 1);
  }
  canFlush_(t2) {
    return this.getLocalElementCount_(t2) === _lt.m_flushingCount && !this.hasChildren_(t2);
  }
  flush_(t2, e, s3) {
    let i;
    const n4 = new n3();
    let r = this.getFirstElement_(s3), h2 = -1, o = -1;
    do {
      o = this.getData_(r), i = this.getElementValue_(o), n4.setCoords({ env2D: this.getBoundingBoxValue_(o) }), h2 = this.getNextElement_(r), this.m_bStoreDuplicates ? this.insertDuplicates_(i, n4, t2, e, s3, true, r) : this.insert_(i, n4, t2, e, s3, true, r), r = h2;
    } while (-1 !== r);
  }
  canPushDown_(t2) {
    return this.getLocalElementCount_(t2) >= _lt.m_flushingCount || this.hasChildren_(t2);
  }
  hasChildren_(t2) {
    return -1 !== this.getChild_(t2, 0) || -1 !== this.getChild_(t2, 1) || -1 !== this.getChild_(t2, 2) || -1 !== this.getChild_(t2, 3);
  }
  createChild_(t2, e) {
    const s3 = this.m_quadTreeNodes.newElement();
    return this.setChild_(t2, e, s3), this.setSubTreeElementCount_(s3, 0), this.setLocalElementCount_(s3, 0), this.setParent_(s3, t2), this.setHeightAndQuadrant_(s3, this.getHeight_(t2) + 1, e), this.m_bStoreDuplicates && this.setContainedSubTreeElementCount_(s3, 0), s3;
  }
  createRoot_() {
    this.m_root = this.m_quadTreeNodes.newElement(), this.setSubTreeElementCount_(this.m_root, 0), this.setLocalElementCount_(this.m_root, 0), this.setHeightAndQuadrant_(this.m_root, 0, 0), this.m_bStoreDuplicates && this.setContainedSubTreeElementCount_(this.m_root, 0);
  }
  createElement_() {
    const t2 = this.m_elementNodes.newElement();
    let e;
    return this.m_freeData.length > 0 ? (e = this.m_freeData.at(-1), this.m_freeData.pop()) : (e = this.m_data.length, this.m_data.length = e + 1), this.setData_(t2, e), t2;
  }
  createElementFromDuplicate_(t2) {
    const e = this.m_elementNodes.newElement(), s3 = this.getData_(t2);
    return this.setData_(e, s3), e;
  }
  freeElementAndBoxNode_(t2) {
    n(0);
  }
  getChild_(t2, e) {
    return this.m_quadTreeNodes.getField(t2, e);
  }
  setChild_(t2, e, s3) {
    this.m_quadTreeNodes.setField(t2, e, s3);
  }
  getFirstElement_(t2) {
    return this.m_quadTreeNodes.getField(t2, 4);
  }
  setFirstElement_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 4, e);
  }
  getLastElement_(t2) {
    return this.m_quadTreeNodes.getField(t2, 5);
  }
  setLastElement_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 5, e);
  }
  getQuadrant_(t2) {
    return this.m_quadTreeNodes.getField(t2, 6) & _lt.m_quadrantMask;
  }
  getHeight_(t2) {
    return this.m_quadTreeNodes.getField(t2, 6) >> _lt.m_heightBitShift;
  }
  setHeightAndQuadrant_(t2, e, s3) {
    const i = e << _lt.m_heightBitShift | s3;
    this.m_quadTreeNodes.setField(t2, 6, i);
  }
  getLocalElementCount_(t2) {
    return this.m_quadTreeNodes.getField(t2, 7);
  }
  setLocalElementCount_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 7, e);
  }
  getSubTreeElementCount_(t2) {
    return this.m_quadTreeNodes.getField(t2, 8);
  }
  setSubTreeElementCount_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 8, e);
  }
  getParent_(t2) {
    return this.m_quadTreeNodes.getField(t2, 9);
  }
  setParent_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 9, e);
  }
  getContainedSubTreeElementCount_(t2) {
    return this.m_quadTreeNodes.getField(t2, 10);
  }
  setContainedSubTreeElementCount_(t2, e) {
    this.m_quadTreeNodes.setField(t2, 10, e);
  }
  getData_(t2) {
    return this.m_elementNodes.getField(t2, 0);
  }
  setData_(t2, e) {
    this.m_elementNodes.setField(t2, 0, e);
  }
  getPrevElement_(t2) {
    return this.m_elementNodes.getField(t2, 1);
  }
  getNextElement_(t2) {
    return this.m_elementNodes.getField(t2, 2);
  }
  setPrevElement_(t2, e) {
    this.m_elementNodes.setField(t2, 1, e);
  }
  setNextElement_(t2, e) {
    this.m_elementNodes.setField(t2, 2, e);
  }
  getQuad_(t2) {
    return this.m_elementNodes.getField(t2, 3);
  }
  setQuad_(t2, e) {
    this.m_elementNodes.setField(t2, 3, e);
  }
  getElementValue_(t2) {
    return this.m_data[t2].element;
  }
  getBoundingBoxValue_(t2) {
    return this.m_data[t2].box;
  }
  setDataValues_(t2, e, s3) {
    this.m_data[t2] = _t2(e, s3);
  }
};
lt.m_quadrantMask = 3, lt.m_heightBitShift = 2, lt.m_flushingCount = 5;
var ut = class {
  constructor(t2, e, s3) {
    this.m_bLinear = false, this.m_queryStart = new mi(), this.m_queryEnd = new mi(), this.m_queryBox = new n3(), this.m_tolerance = 0, this.m_currentElementHandle = -1, this.m_nextElementHandle = -1, this.m_quadsStack = [], this.m_extentsStack = [], this.m_childExtents = [new n3(), new n3(), new n3(), new n3()], this.m_quadTree = t2, e && this.resetIterator(e, s3);
  }
  resetIterator(t2, e) {
    if (void 0 === e && (e = 0), t2 instanceof n3) return this.m_quadsStack.length = 0, this.m_extentsStack.length = 0, this.m_currentElementHandle = -1, this.m_queryBox.setCoords({ env2D: t2 }), this.m_queryBox.inflateCoords(e, e), this.m_tolerance = Number.NaN, void (-1 !== this.m_quadTree.m_root && this.m_queryBox.isIntersecting(this.m_quadTree.m_extent) ? (this.m_quadsStack.push(this.m_quadTree.m_root), this.m_extentsStack.push(this.m_quadTree.m_extent.clone()), this.m_nextElementHandle = this.m_quadTree.getFirstElement_(this.m_quadTree.m_root), this.m_bLinear = false) : this.m_nextElementHandle = -1);
    if (this.m_quadsStack.length = 0, this.m_extentsStack.length = 0, this.m_currentElementHandle = -1, t2.queryLooseEnvelope(this.m_queryBox), this.m_queryBox.inflateCoords(e, e), -1 !== this.m_quadTree.m_root && this.m_queryBox.isIntersecting(this.m_quadTree.m_extent)) {
      const s3 = t2.getGeometryType();
      if (this.m_bLinear = s3 === a.enumLine, this.m_bLinear) {
        const s4 = t2;
        this.m_queryStart.assign(s4.getStartXY()), this.m_queryEnd.assign(s4.getEndXY()), this.m_tolerance = e;
      } else this.m_tolerance = Number.NaN;
      this.m_quadsStack.push(this.m_quadTree.m_root), this.m_extentsStack.push(this.m_quadTree.m_extent.clone()), this.m_nextElementHandle = this.m_quadTree.getFirstElement_(this.m_quadTree.m_root);
    } else this.m_nextElementHandle = -1;
  }
  next() {
    if (0 === this.m_quadsStack.length) return -1;
    this.m_currentElementHandle = this.m_nextElementHandle;
    const t2 = new mi(), e = new mi(), s3 = new n3();
    let i = false;
    for (; !i; ) {
      for (; -1 !== this.m_currentElementHandle; ) {
        const n4 = this.m_quadTree.getData_(this.m_currentElementHandle);
        if (s3.setCoords({ env2D: this.m_quadTree.getBoundingBoxValue_(n4) }), s3.isIntersecting(this.m_queryBox)) {
          if (!this.m_bLinear) {
            i = true;
            break;
          }
          if (t2.setCoordsPoint2D(this.m_queryStart), e.setCoordsPoint2D(this.m_queryEnd), s3.inflateCoords(this.m_tolerance, this.m_tolerance), s3.clipLine(t2, e) > 0) {
            i = true;
            break;
          }
        }
        this.m_currentElementHandle = this.m_quadTree.getNextElement_(this.m_currentElementHandle);
      }
      if (-1 === this.m_currentElementHandle) {
        const s4 = this.m_quadsStack.at(-1), i2 = this.m_extentsStack.at(-1);
        lt.setChildExtents_(i2, this.m_childExtents), this.m_quadsStack.pop(), this.m_extentsStack.pop();
        for (let n4 = 0; n4 < 4; n4++) {
          const i3 = this.m_quadTree.getChild_(s4, n4);
          if (-1 !== i3 && this.m_quadTree.getSubTreeElementCount(i3) > 0 && this.m_childExtents[n4].isIntersecting(this.m_queryBox)) if (this.m_bLinear) {
            t2.setCoordsPoint2D(this.m_queryStart), e.setCoordsPoint2D(this.m_queryEnd);
            const s5 = new n3();
            s5.setCoords({ env2D: this.m_childExtents[n4] }), s5.inflateCoords(this.m_tolerance, this.m_tolerance), s5.clipLine(t2, e) > 0 && (this.m_quadsStack.push(i3), this.m_extentsStack.push(this.m_childExtents[n4].clone()));
          } else this.m_quadsStack.push(i3), this.m_extentsStack.push(this.m_childExtents[n4].clone());
        }
        if (0 === this.m_quadsStack.length) return -1;
        this.m_currentElementHandle = this.m_quadTree.getFirstElement_(this.m_quadsStack.at(-1));
      }
    }
    return this.m_nextElementHandle = this.m_quadTree.getNextElement_(this.m_currentElementHandle), this.m_currentElementHandle;
  }
  clone() {
    return n(0), {};
  }
};
var dt = class {
  constructor(t2) {
    this.m_bucketSort = new at(), this.m_sortedHandles = new st2(0), this.m_index = -1, this.m_quadTreeIteratorImpl = t2;
  }
  resetIterator(t2, e) {
    this.m_quadTreeIteratorImpl.resetIterator(t2, e), this.m_sortedHandles.resize(0), this.m_index = -1;
  }
  next() {
    if (-1 === this.m_index) {
      let t2 = -1;
      for (; -1 !== (t2 = this.m_quadTreeIteratorImpl.next()); ) this.m_sortedHandles.add(t2);
      const e = this, s3 = { userSort(t3, s4, i) {
        i.sort(t3, s4, (t4, s5) => e.m_quadTreeIteratorImpl.m_quadTree.getElement(t4) - e.m_quadTreeIteratorImpl.m_quadTree.getElement(s5));
      }, getValue: (t3) => e.m_quadTreeIteratorImpl.m_quadTree.getElement(t3) };
      this.m_bucketSort.sort(this.m_sortedHandles, 0, this.m_sortedHandles.size(), s3);
    }
    return this.m_index === this.m_sortedHandles.size() - 1 ? -1 : (this.m_index++, this.m_sortedHandles.read(this.m_index));
  }
  clone() {
    return n(0), {};
  }
};
var ct2 = class {
  constructor(t2 = false) {
    this.m_bNotifyOnActions = t2;
  }
  onDelete(t2) {
  }
  onSet(t2) {
  }
  onEndSearch(t2) {
  }
  onAddUniqueElementFailed(t2) {
  }
  onDeleteImpl(t2, e) {
    this.m_bNotifyOnActions && this.onDelete(t2.getElement(e));
  }
  onSetImpl(t2, e) {
    this.m_bNotifyOnActions && this.onSet(t2.getElement(e));
  }
  onAddUniqueElementFailedImpl(t2) {
    this.m_bNotifyOnActions && this.onAddUniqueElementFailed(t2);
  }
  onEndSearchImpl(t2) {
    this.m_bNotifyOnActions && this.onEndSearch(t2);
  }
};
var pt = class _pt {
  static st_nullNode() {
    return -1;
  }
  constructor() {
    this.m_defaultTreap = -1, this.m_random = 124234251, this.m_comparator = null, this.m_treapData = new mt(7), this.m_treapCount = 0, this.m_maxDepthEver = 0, this.m_bBalancing = true;
  }
  setComparator(t2) {
    this.m_comparator = t2;
  }
  getComparator() {
    return this.m_comparator;
  }
  disableBalancing() {
    this.m_bBalancing = false;
  }
  enableBalancing() {
    this.m_bBalancing || (n(this.m_treapCount <= 1), this.rebalance(-1), this.m_bBalancing = true);
  }
  isAutoBalancing() {
    return this.m_bBalancing;
  }
  rebalance(t2) {
    if (this.m_bBalancing) return;
    if (-1 === t2 && (t2 = this.m_defaultTreap), 0 === this.size(t2)) return;
    const e = [];
    for (let s3 = this.getFirst(t2); -1 !== s3; s3 = this.getNext(s3)) e.push(s3), this.setParent_(s3, -1), this.setRight_(s3, -1), this.setLeft_(s3, -1);
    this.setRoot_(-1, t2), this.setFirst_(-1, t2), this.setLast_(-1, t2), this.setSize_(0, t2), this.m_bBalancing = true;
    for (const s3 of e) this.addBiggestElement_(s3, t2);
    this.m_bBalancing = false;
  }
  setCapacity(t2) {
    this.m_treapData.setCapacity(t2);
  }
  createTreap(t2) {
    const e = this.m_treapData.newElement();
    return this.setSize_(0, e), this.setTreapData_(t2, e), this.m_treapCount++, e;
  }
  deleteTreap(t2) {
    this.m_treapData.deleteElement(t2), this.m_treapCount--;
  }
  addElement(t2, e = -1) {
    return -1 === e && (this.m_defaultTreap === _pt.st_nullNode() && (this.m_defaultTreap = this.createTreap(-1)), e = this.m_defaultTreap), this.addElement_(t2, 0, e);
  }
  addUniqueElement(t2, e = -1) {
    return -1 === e && (this.m_defaultTreap === _pt.st_nullNode() && (this.m_defaultTreap = this.createTreap(-1)), e = this.m_defaultTreap), this.addElement_(t2, 1, e);
  }
  addBiggestElement(t2, e = -1) {
    -1 === e && (this.m_defaultTreap === _pt.st_nullNode() && (this.m_defaultTreap = this.createTreap(-1)), e = this.m_defaultTreap);
    const s3 = this.newNode_(t2);
    return this.addBiggestElement_(s3, e), s3;
  }
  addElementAtPosition(t2, e, s3, i, n4, r = -1) {
    if (-1 === r && (this.m_defaultTreap === _pt.st_nullNode() && (this.m_defaultTreap = this.createTreap(-1)), r = this.m_defaultTreap), this.getRoot_(r) === _pt.st_nullNode()) {
      const t3 = this.newNode_(s3);
      return this.setRoot_(t3, r), this.addToList_(-1, t3, r), t3;
    }
    let h2, o, a2, m, _;
    if (n4 ? (h2 = e !== _pt.st_nullNode() ? this.m_comparator.compare(this, s3, e) : -1, o = t2 !== _pt.st_nullNode() ? this.m_comparator.compare(this, s3, t2) : 1) : (h2 = -1, o = 1), i && (0 === h2 || 0 === o)) {
      this.m_comparator.onAddUniqueElementFailedImpl(s3);
      const i2 = 0 === h2 ? e : t2;
      return this.setDuplicateElement_(i2, r), -1;
    }
    _ = e !== _pt.st_nullNode() && t2 !== _pt.st_nullNode() ? this.m_random > Ss(this.m_random) >> 1 : e !== _pt.st_nullNode(), _ ? (m = h2, a2 = e) : (m = o, a2 = t2);
    let u = -1, d = -1, c = true;
    for (; ; ) {
      if (m < 0) {
        const t3 = this.getLeft(a2);
        if (t3 === _pt.st_nullNode()) {
          d = a2, u = this.newNode_(s3), this.setLeft_(a2, u), this.setParent_(u, a2);
          break;
        }
        a2 = t3;
      } else {
        const t3 = this.getRight(a2);
        if (t3 === _pt.st_nullNode()) {
          d = this.getNext(a2), u = this.newNode_(s3), this.setRight_(a2, u), this.setParent_(u, a2);
          break;
        }
        a2 = t3;
      }
      c && (m *= -1, c = false);
    }
    return this.bubbleUp_(u), this.getParent(u) === _pt.st_nullNode() && this.setRoot_(u, r), this.addToList_(d, u, r), u;
  }
  replaceElementAtPosition(t2, e, s3, i, n4 = -1) {
    if (i) {
      const i2 = this.getNext(t2);
      let r = -1;
      i2 !== _pt.st_nullNode() && (r = this.m_comparator.compare(this, e, i2));
      const h2 = this.getPrev(t2);
      let o = -1;
      if (h2 !== _pt.st_nullNode() && (o = this.m_comparator.compare(this, e, h2)), s3 && (0 === r || 0 === o)) {
        this.m_comparator.onAddUniqueElementFailedImpl(e);
        const t3 = 0 === r ? i2 : h2;
        return n4 === _pt.st_nullNode() && (this.m_defaultTreap === _pt.st_nullNode() && (this.m_defaultTreap = this.createTreap(-1)), n4 = this.m_defaultTreap), this.setDuplicateElement_(t3, n4), -1;
      }
    }
    return this.setElement_(t2, e), t2;
  }
  getDuplicateElement(t2 = -1) {
    return -1 === t2 ? this.getDuplicateElement_(this.m_defaultTreap) : this.getDuplicateElement_(t2);
  }
  deleteNode(t2, e = -1) {
    this.m_comparator && this.m_comparator.onDeleteImpl(this, t2), -1 === e && (e = this.m_defaultTreap), this.m_bBalancing ? this.deleteNode_(t2, e) : this.unbalancedDelete_(t2, e);
  }
  search(t2, e = -1) {
    let s3 = this.getRoot(e);
    for (; s3 !== _pt.st_nullNode(); ) {
      const e2 = this.m_comparator.compare(this, t2, s3);
      if (!e2) return s3;
      s3 = e2 < 0 ? this.getLeft(s3) : this.getRight(s3);
    }
    return this.m_comparator.onEndSearchImpl(t2), _pt.st_nullNode();
  }
  searchLowerBound(t2, e = -1) {
    let s3 = this.getRoot(e), i = -1;
    for (; s3 !== _pt.st_nullNode(); ) {
      const e2 = t2.compare(this, s3);
      if (!e2) return s3;
      e2 < 0 ? s3 = this.getLeft(s3) : (i = s3, s3 = this.getRight(s3));
    }
    return i;
  }
  searchUpperBound(t2, e = -1) {
    let s3 = this.getRoot(e), i = -1;
    for (; s3 !== _pt.st_nullNode(); ) {
      const e2 = t2.compare(this, s3);
      if (!e2) return s3;
      e2 < 0 ? (i = s3, s3 = this.getLeft(s3)) : s3 = this.getRight(s3);
    }
    return i;
  }
  getElement(t2) {
    return this.m_treapData.getField(t2, 3);
  }
  getLeft(t2) {
    return this.m_treapData.getField(t2, 0);
  }
  getRight(t2) {
    return this.m_treapData.getField(t2, 1);
  }
  getParent(t2) {
    return this.m_treapData.getField(t2, 2);
  }
  getNext(t2) {
    return this.m_treapData.getField(t2, 6);
  }
  getPrev(t2) {
    return this.m_treapData.getField(t2, 5);
  }
  getFirst(t2 = -1) {
    return -1 === t2 ? this.getFirst_(this.m_defaultTreap) : this.getFirst_(t2);
  }
  getLast(t2 = -1) {
    return -1 === t2 ? this.getLast_(this.m_defaultTreap) : this.getLast_(t2);
  }
  getTreapData(t2 = -1) {
    return -1 === t2 ? this.getTreapData_(this.m_defaultTreap) : this.getTreapData_(t2);
  }
  setElement(t2, e) {
    null !== this.m_comparator && this.m_comparator.onSetImpl(this, t2), this.setElement_(t2, e);
  }
  getRoot(t2 = -1) {
    return -1 === t2 ? this.getRoot_(this.m_defaultTreap) : this.getRoot_(t2);
  }
  clear() {
    this.m_treapData.deleteAll(false), this.m_defaultTreap = _pt.st_nullNode(), this.m_treapCount = 0, this.m_maxDepthEver = 0;
  }
  addToList_(t2, e, s3) {
    let i;
    -1 !== t2 ? (i = this.getPrev(t2), this.setPrev_(t2, e)) : i = this.getLast_(s3), this.setPrev_(e, i), -1 !== i && this.setNext_(i, e), this.setNext_(e, t2), t2 === this.getFirst_(s3) && this.setFirst_(e, s3), -1 === t2 && this.setLast_(e, s3), this.setSize_(this.getSize_(s3) + 1, s3);
  }
  size(t2 = -1) {
    return -1 === t2 ? this.getSize_(this.m_defaultTreap) : this.getSize_(t2);
  }
  getMaxDepth(t2 = -1) {
    return this.getMaxDepthHelper_(this.getRoot(t2));
  }
  getMaxDepthEver() {
    return this.m_maxDepthEver;
  }
  static st_isValidNode(t2) {
    return mt.isValidElement(t2);
  }
  dbgCheck_(t2) {
  }
  getPriority_(t2) {
    return this.m_treapData.getField(t2, 4);
  }
  bubbleDown_(t2) {
    let e = this.getLeft(t2), s3 = this.getRight(t2);
    const i = this.getPriority_(t2);
    for (; e !== _pt.st_nullNode() || s3 !== _pt.st_nullNode(); ) {
      const n4 = e !== _pt.st_nullNode() ? this.getPriority_(e) : vs(), r = s3 !== _pt.st_nullNode() ? this.getPriority_(s3) : vs();
      if (i <= Math.min(n4, r)) return;
      n4 <= r ? this.rotateRight_(e) : this.rotateLeft_(t2), e = this.getLeft(t2), s3 = this.getRight(t2);
    }
  }
  bubbleUp_(t2) {
    if (!this.m_bBalancing) return;
    const e = this.getPriority_(t2);
    let s3 = this.getParent(t2);
    for (; s3 !== _pt.st_nullNode() && this.getPriority_(s3) > e; ) this.getLeft(s3) === t2 ? this.rotateRight_(t2) : this.rotateLeft_(s3), s3 = this.getParent(t2);
  }
  rotateLeft_(t2) {
    const e = t2, s3 = this.getRight(t2);
    let i;
    this.setParent_(s3, this.getParent(e)), this.setParent_(e, s3), i = this.getLeft(s3), this.setRight_(e, i), i !== _pt.st_nullNode() && this.setParent_(i, e), this.setLeft_(s3, e), i = this.getParent(s3), i !== _pt.st_nullNode() && (this.getLeft(i) === e ? this.setLeft_(i, s3) : this.setRight_(i, s3));
  }
  rotateRight_(t2) {
    const e = this.getParent(t2), s3 = t2;
    let i;
    this.setParent_(s3, this.getParent(e)), this.setParent_(e, s3), i = this.getRight(s3), this.setLeft_(e, i), i !== _pt.st_nullNode() && this.setParent_(i, e), this.setRight_(s3, e), i = this.getParent(s3), i !== _pt.st_nullNode() && (this.getLeft(i) === e ? this.setLeft_(i, s3) : this.setRight_(i, s3));
  }
  setParent_(t2, e) {
    this.m_treapData.setField(t2, 2, e);
  }
  setLeft_(t2, e) {
    this.m_treapData.setField(t2, 0, e);
  }
  setRight_(t2, e) {
    this.m_treapData.setField(t2, 1, e);
  }
  setPriority_(t2, e) {
    this.m_treapData.setField(t2, 4, e);
  }
  setPrev_(t2, e) {
    this.m_treapData.setField(t2, 5, e);
  }
  setNext_(t2, e) {
    this.m_treapData.setField(t2, 6, e);
  }
  setRoot_(t2, e) {
    this.m_treapData.setField(e, 0, t2);
  }
  setFirst_(t2, e) {
    this.m_treapData.setField(e, 1, t2);
  }
  setLast_(t2, e) {
    this.m_treapData.setField(e, 2, t2);
  }
  setDuplicateElement_(t2, e) {
    this.m_treapData.setField(e, 3, t2);
  }
  setSize_(t2, e) {
    this.m_treapData.setField(e, 4, t2);
  }
  setTreapData_(t2, e) {
    this.m_treapData.setField(e, 5, t2);
  }
  getRoot_(t2) {
    return -1 === t2 ? _pt.st_nullNode() : this.m_treapData.getField(t2, 0);
  }
  getFirst_(t2) {
    return -1 === t2 ? _pt.st_nullNode() : this.m_treapData.getField(t2, 1);
  }
  getLast_(t2) {
    return -1 === t2 ? _pt.st_nullNode() : this.m_treapData.getField(t2, 2);
  }
  getDuplicateElement_(t2) {
    return -1 === t2 ? _pt.st_nullNode() : this.m_treapData.getField(t2, 3);
  }
  getSize_(t2) {
    return -1 === t2 ? 0 : this.m_treapData.getField(t2, 4);
  }
  getTreapData_(t2) {
    return this.m_treapData.getField(t2, 5);
  }
  newNode_(t2) {
    const e = this.m_treapData.newElement();
    return this.setPriority_(e, this.generatePriority_()), this.setElement_(e, t2), e;
  }
  freeNode_(t2, e) {
    t2 !== _pt.st_nullNode() && this.m_treapData.deleteElement(t2);
  }
  generatePriority_() {
    return this.m_random = Ss(this.m_random), this.m_random & vs() >> 1;
  }
  maxPriority() {
    return n(0), 0;
  }
  getMaxDepthHelper_(t2) {
    return t2 === _pt.st_nullNode() ? 0 : 1 + Math.max(this.getMaxDepthHelper_(this.getLeft(t2)), this.getMaxDepthHelper_(this.getRight(t2)));
  }
  addElement_(t2, e, s3) {
    if (this.getRoot(s3) === _pt.st_nullNode()) {
      const e2 = this.newNode_(t2);
      return this.setRoot_(e2, s3), this.addToList_(-1, e2, s3), this.m_maxDepthEver = Math.max(this.m_maxDepthEver, 1), e2;
    }
    let i = this.getRoot_(s3), n4 = -1, r = -1, h2 = 1;
    for (; ; ) {
      const o = -1 === e ? 1 : this.m_comparator.compare(this, t2, i);
      if (o < 0) {
        const e2 = this.getLeft(i);
        if (e2 === _pt.st_nullNode()) {
          r = i, n4 = this.newNode_(t2), this.setLeft_(i, n4), this.setParent_(n4, i);
          break;
        }
        i = e2;
      } else {
        if (1 === e && 0 === o) return this.m_comparator.onAddUniqueElementFailedImpl(t2), this.setDuplicateElement_(i, s3), -1;
        const h3 = this.getRight(i);
        if (h3 === _pt.st_nullNode()) {
          r = this.getNext(i), n4 = this.newNode_(t2), this.setRight_(i, n4), this.setParent_(n4, i);
          break;
        }
        i = h3;
      }
      h2++;
    }
    return this.bubbleUp_(n4), this.getParent(n4) === _pt.st_nullNode() && this.setRoot_(n4, s3), this.addToList_(r, n4, s3), this.m_maxDepthEver = Math.max(h2, this.m_maxDepthEver), n4;
  }
  removeFromList_(t2, e) {
    const s3 = this.getPrev(t2), i = this.getNext(t2);
    -1 !== s3 ? this.setNext_(s3, i) : this.setFirst_(i, e), -1 !== i ? this.setPrev_(i, s3) : this.setLast_(s3, e), this.setSize_(this.getSize_(e) - 1, e);
  }
  unbalancedDelete_(t2, e) {
    this.removeFromList_(t2, e);
    let s3 = this.getLeft(t2), i = this.getRight(t2), n4 = this.getParent(t2), r = t2;
    if (-1 !== s3 && -1 !== i) {
      let h3;
      this.m_random = Ss(this.m_random), h3 = this.m_random > vs() >> 1 ? this.getNext(t2) : this.getPrev(t2);
      const o = this.getParent(h3) === t2;
      this.m_treapData.swapField(t2, h3, 0), this.m_treapData.swapField(t2, h3, 1), this.m_treapData.swapField(t2, h3, 2), -1 !== n4 ? this.getLeft(n4) === t2 ? this.setLeft_(n4, h3) : this.setRight_(n4, h3) : this.setRoot_(h3, e), o ? (s3 === h3 ? (this.setLeft_(h3, t2), this.setParent_(i, h3)) : i === h3 && (this.setRight_(h3, t2), this.setParent_(s3, h3)), this.setParent_(t2, h3), n4 = h3) : (this.setParent_(s3, h3), this.setParent_(i, h3), n4 = this.getParent(t2), r = h3), s3 = this.getLeft(t2), i = this.getRight(t2), -1 !== s3 && this.setParent_(s3, t2), -1 !== i && this.setParent_(i, t2);
    }
    const h2 = -1 !== s3 ? s3 : i;
    -1 === n4 ? this.setRoot_(h2, e) : this.getLeft(n4) === r ? this.setLeft_(n4, h2) : this.setRight_(n4, h2), -1 !== h2 && this.setParent_(h2, n4), this.freeNode_(t2, e);
  }
  deleteNode_(t2, e) {
    this.setPriority_(t2, vs());
    let s3 = _pt.st_nullNode(), i = _pt.st_nullNode();
    const n4 = this.getRoot_(e), r = n4 === t2;
    if (r && (s3 = this.getLeft(n4), i = this.getRight(n4), s3 === _pt.st_nullNode() && i === _pt.st_nullNode())) return this.removeFromList_(n4, e), this.freeNode_(n4, e), void this.setRoot_(_pt.st_nullNode(), e);
    this.bubbleDown_(t2);
    const h2 = this.getParent(t2);
    h2 !== _pt.st_nullNode() && (this.getLeft(h2) === t2 ? this.setLeft_(h2, _pt.st_nullNode()) : this.setRight_(h2, _pt.st_nullNode())), this.removeFromList_(t2, e), this.freeNode_(t2, e), r && this.setRoot_(s3 === _pt.st_nullNode() || this.getParent(s3) !== _pt.st_nullNode() ? i : s3, e);
  }
  setElement_(t2, e) {
    this.m_treapData.setField(t2, 3, e);
  }
  addBiggestElement_(t2, e) {
    if (this.getRoot_(e) === _pt.st_nullNode()) return this.setRoot_(t2, e), void this.addToList_(-1, t2, e);
    const s3 = this.getLast_(e);
    this.setRight_(s3, t2), this.setParent_(t2, s3), this.bubbleUp_(t2), this.getParent(t2) === _pt.st_nullNode() && this.setRoot_(t2, e), this.addToList_(-1, t2, e);
  }
};
var gt2 = class _gt {
  constructor(t2) {
    this.m_lists = new mt(6), this.m_listOfLists = _gt.st_nullNode(), void 0 === t2 ? (this.m_listNodes = new mt(3), this.m_bStoreListIndexWithNode = false) : (this.m_listNodes = new mt(t2 ? 4 : 3), this.m_bStoreListIndexWithNode = t2);
  }
  freeNode_(t2) {
    this.m_listNodes.deleteElement(t2);
  }
  newNode_() {
    return this.m_listNodes.newElement();
  }
  freeList_(t2) {
    n(0);
  }
  newList_() {
    return this.m_lists.newElement();
  }
  setPrev_(t2, e) {
    this.m_listNodes.setField(t2, 1, e);
  }
  setNext_(t2, e) {
    this.m_listNodes.setField(t2, 2, e);
  }
  setData_(t2, e) {
    n(0);
  }
  setList_(t2, e) {
    return this.m_listNodes.setField(t2, 3, e);
  }
  setListSize_(t2, e) {
    this.m_lists.setField(t2, 4, e);
  }
  setNextList_(t2, e) {
    n(0);
  }
  setPrevList_(t2, e) {
    this.m_lists.setField(t2, 2, e);
  }
  createList(t2) {
    const e = this.newList_();
    return this.m_lists.setField(e, 3, this.m_listOfLists), this.m_lists.setField(e, 4, 0), this.m_lists.setField(e, 5, t2), this.m_listOfLists !== _gt.st_nullNode() && this.setPrevList_(this.m_listOfLists, e), this.m_listOfLists = e, e;
  }
  deleteList(t2) {
    this.clear(t2);
    const e = this.m_lists.getField(t2, 2), s3 = this.m_lists.getField(t2, 3);
    return e !== _gt.st_nullNode() ? this.setNextList_(e, s3) : this.m_listOfLists = s3, s3 !== _gt.st_nullNode() && this.setPrevList_(s3, e), this.freeList_(t2), s3;
  }
  reserveLists(t2) {
    n(0);
  }
  getListData(t2) {
    return this.m_lists.getField(t2, 5);
  }
  getList(t2) {
    return n(0), 0;
  }
  setListData(t2, e) {
    this.m_lists.setField(t2, 5, e);
  }
  addElement(t2, e) {
    return this.insertElement(t2, -1, e);
  }
  insertElement(t2, e, s3) {
    const i = this.newNode_();
    let n4 = -1;
    e !== _gt.st_nullNode() && (n4 = this.getPrev(e), this.setPrev_(e, i)), this.setNext_(i, e), n4 !== _gt.st_nullNode() && this.setNext_(n4, i);
    if (e === this.m_lists.getField(t2, 0) && this.m_lists.setField(t2, 0, i), e === _gt.st_nullNode()) {
      const e2 = this.m_lists.getField(t2, 1);
      this.setPrev_(i, e2), -1 !== e2 && this.setNext_(e2, i), this.m_lists.setField(t2, 1, i);
    }
    return this.setData(i, s3), this.setListSize_(t2, this.getListSize(t2) + 1), this.m_bStoreListIndexWithNode && this.setList_(i, t2), i;
  }
  deleteElement(t2, e) {
    const s3 = this.getPrev(e), i = this.getNext(e);
    return s3 !== _gt.st_nullNode() ? this.setNext_(s3, i) : this.m_lists.setField(t2, 0, i), i !== _gt.st_nullNode() ? this.setPrev_(i, s3) : this.m_lists.setField(t2, 1, s3), this.freeNode_(e), this.setListSize_(t2, this.getListSize(t2) - 1), i;
  }
  reserveNodes(t2) {
    this.m_listNodes.setCapacity(t2);
  }
  getData(t2) {
    return this.m_listNodes.getField(t2, 0);
  }
  getElement(t2) {
    return this.getData(t2);
  }
  setData(t2, e) {
    this.m_listNodes.setField(t2, 0, e);
  }
  getNext(t2) {
    return this.m_listNodes.getField(t2, 2);
  }
  getPrev(t2) {
    return this.m_listNodes.getField(t2, 1);
  }
  getFirst(t2) {
    return this.m_lists.getField(t2, 0);
  }
  getLast(t2) {
    return this.m_lists.getField(t2, 1);
  }
  static st_nullNode() {
    return -1;
  }
  clear(t2) {
    if (void 0 !== t2) {
      let e = this.getLast(t2);
      for (; e !== _gt.st_nullNode(); ) {
        const t3 = e;
        e = this.getPrev(t3), this.freeNode_(t3);
      }
      return this.m_lists.setField(t2, 0, -1), this.m_lists.setField(t2, 1, -1), void this.setListSize_(t2, 0);
    }
    for (let e = this.getFirstList(); -1 !== e; ) e = this.deleteList(e);
  }
  isEmpty(t2) {
    return n(0), false;
  }
  getNodeCount() {
    return this.m_listNodes.size();
  }
  getListCount() {
    return this.m_lists.size();
  }
  getListSize(t2) {
    return this.m_lists.getField(t2, 4);
  }
  getFirstList() {
    return this.m_listOfLists;
  }
  getNextList(t2) {
    return this.m_lists.getField(t2, 3);
  }
};
var ft2 = class extends ct2 {
  constructor(t2) {
    super(), this.m_intervalTree = t2;
  }
  compare(t2, e, s3) {
    const i = t2.getElement(s3), n4 = this.m_intervalTree.getValue_(e), r = this.m_intervalTree.getValue_(i);
    return n4 < r ? -1 : n4 === r ? vt2.isLeft_(e) && vt2.isRight_(i) ? -1 : vt2.isLeft_(i) && vt2.isRight_(e) ? 1 : 0 : 1;
  }
};
var vt2 = class _vt {
  constructor(t2) {
    this.m_bEnvelopesRef = false, this.m_intervals = [], this.m_envelopesRef = null, this.m_intervalNodes = new mt(3), this.m_intervalHandles = [], this.m_endIndicesUnique = [], this.m_cCount = -1, this.m_root = -1, this.m_bSortIntervals = false, this.m_bConstructing = false, this.m_bConstructionEnded = false, this.m_bOfflineDynamic = t2, this.m_tertiaryNodes = new mt(this.m_bOfflineDynamic ? 5 : 4), this.m_secondaryTreaps = new pt(), this.m_secondaryTreaps.setComparator(new ft2(this)), this.m_secondaryLists = new gt2();
  }
  addEnvelopesRef(t2) {
    this.reset_(true, true), this.m_bEnvelopesRef = true, this.m_envelopesRef = t2, this.m_bConstructing = false, this.m_bConstructionEnded = true, this.m_bOfflineDynamic || (this.insertIntervalsStatic_(), this.m_cCount = this.m_envelopesRef.length);
  }
  startConstruction() {
    this.reset_(true, false);
  }
  addInterval(t2) {
    this.m_bConstructing || C(""), this.m_intervals.push(t2.clone());
  }
  addIntervalCoords(t2, e) {
    n(0);
  }
  endConstruction() {
    this.m_bConstructing || C(""), this.m_bConstructing = false, this.m_bConstructionEnded = true, this.m_bOfflineDynamic || (this.insertIntervalsStatic_(), this.m_cCount = this.m_intervals.length);
  }
  insert(t2) {
    if (this.m_bOfflineDynamic && this.m_bConstructionEnded || C(""), -1 === this.m_root) {
      const t3 = this.m_bEnvelopesRef ? this.m_envelopesRef.length : this.m_intervals.length;
      if (this.m_bSortIntervals) {
        const e2 = new st2(0);
        this.querySortedEndPointIndices_(e2), this.m_endIndicesUnique.length = 0, this.querySortedDuplicatesRemoved_(e2), this.m_intervalHandles.length = t3, this.m_intervalHandles.fill(-1), this.m_bSortIntervals = false;
      } else this.m_intervalHandles.fill(-1, 0, t3);
      this.m_root = this.createRoot_();
    }
    const e = this.insertIntervalEnd_(t2 << 1, this.m_root), s3 = this.getSecondaryFromInterval_(e), i = this.m_secondaryTreaps.addElement(1 + (t2 << 1), s3);
    this.setRightEnd_(e, i), this.m_intervalHandles[t2] = e, this.m_cCount++;
  }
  remove(t2) {
    this.m_bOfflineDynamic && this.m_bConstructionEnded || C("");
    const e = this.m_intervalHandles[t2];
    let s3;
    -1 === e && P("the interval does not exist in the interval tree"), this.m_intervalHandles[t2] = -1, this.m_cCount--;
    let i = this.getSecondaryFromInterval_(e), n4 = -1;
    n4 = this.m_secondaryTreaps.getTreapData(i), this.m_secondaryTreaps.deleteNode(this.getLeftEnd_(e), i), this.m_secondaryTreaps.deleteNode(this.getRightEnd_(e), i), s3 = this.m_secondaryTreaps.size(i), 0 === s3 && (this.m_secondaryTreaps.deleteTreap(i), this.setSecondaryToTertiary_(n4, -1)), this.m_intervalNodes.deleteElement(e);
    let r = this.getPptr_(n4), h2 = this.getLptr_(n4), o = this.getRptr_(n4);
    for (; !(s3 > 0 || n4 === this.m_root || -1 !== h2 && -1 !== o); ) n4 === this.getLptr_(r) ? -1 !== h2 ? (this.setLptr_(r, h2), this.setPptr_(h2, r), this.setLptr_(n4, -1), this.setPptr_(n4, -1)) : -1 !== o ? (this.setLptr_(r, o), this.setPptr_(o, r), this.setRptr_(n4, -1), this.setPptr_(n4, -1)) : (this.setLptr_(r, -1), this.setPptr_(n4, -1)) : -1 !== h2 ? (this.setRptr_(r, h2), this.setPptr_(h2, r), this.setLptr_(n4, -1), this.setPptr_(n4, -1)) : -1 !== o ? (this.setRptr_(r, o), this.setPptr_(o, r), this.setRptr_(n4, -1), this.setPptr_(n4, -1)) : (this.setRptr_(r, -1), this.setPptr_(n4, -1)), this.m_tertiaryNodes.deleteElement(n4), n4 = r, i = this.getSecondaryFromTertiary_(n4), s3 = -1 !== i ? this.m_secondaryTreaps.size(i) : 0, h2 = this.getLptr_(n4), o = this.getRptr_(n4), r = this.getPptr_(n4);
  }
  size() {
    return this.m_cCount;
  }
  getIteratorQuery(t2, e) {
    return t2 instanceof x2 ? new yt(this, t2, e) : (n(0), {});
  }
  getIterator() {
    return new yt(this);
  }
  querySortedEndPointIndices_(t2) {
    const e = this.m_bEnvelopesRef ? this.m_envelopesRef.length : this.m_intervals.length;
    for (let s3 = 0; s3 < 2 * e; s3++) t2.add(s3);
    this.sortEndIndices_(t2, 0, 2 * e);
  }
  querySortedDuplicatesRemoved_(t2) {
    let e = Number.NaN;
    for (let s3 = 0; s3 < t2.size(); s3++) {
      const i = t2.read(s3), n4 = this.getValue_(i);
      n4 !== e && (this.m_endIndicesUnique.push(i), e = n4);
    }
  }
  insertIntervalsStatic_() {
    const t2 = this.m_bEnvelopesRef ? this.m_envelopesRef.length : this.m_intervals.length, s3 = new st2(0);
    this.querySortedEndPointIndices_(s3), this.m_endIndicesUnique.length = 0, this.querySortedDuplicatesRemoved_(s3), this.m_intervalNodes.setCapacity(t2), this.m_secondaryLists.reserveNodes(2 * t2);
    const i = Yt(t2, -1);
    this.m_root = this.createRoot_();
    for (let e = 0; e < s3.size(); e++) {
      const t3 = s3.read(e);
      let n4 = i[t3 >> 1];
      if (-1 !== n4) {
        const e2 = this.getSecondaryFromInterval_(n4);
        this.setRightEnd_(n4, this.m_secondaryLists.addElement(e2, t3));
      } else n4 = this.insertIntervalEnd_(t3, this.m_root), i[t3 >> 1] = n4;
    }
  }
  createRoot_() {
    const t2 = this.calculateDiscriminantIndex1_(0, this.m_endIndicesUnique.length - 1);
    return this.createTertiaryNode_(t2);
  }
  insertIntervalEnd_(t2, e) {
    let s3 = -1, i = e, n4 = -1, r = -1, h2 = 0, o = this.m_endIndicesUnique.length - 1, a2 = 0;
    const m = t2 >> 1;
    let _ = Number.NaN, l2 = Number.NaN, u = true;
    const d = this.getMin_(m), c = this.getMax_(m);
    let p2 = -1;
    for (; u; ) {
      a2 = h2 + (o - h2 >> 1), p2 = this.calculateDiscriminantIndex1_(h2, o);
      const e2 = this.getDiscriminantFromIndex1_(p2);
      if (c < e2) {
        if (-1 !== i) {
          if (p2 === this.getDiscriminantIndex1_(i)) s3 = i, _ = e2, i = this.getLptr_(i), l2 = -1 !== i ? this.getDiscriminant_(i) : Number.NaN;
          else if (l2 > e2) {
            const t3 = this.createTertiaryNode_(p2);
            e2 < _ ? this.setLptr_(s3, t3) : this.setRptr_(s3, t3), this.setRptr_(t3, i), this.m_bOfflineDynamic && (this.setPptr_(t3, s3), this.setPptr_(i, t3)), s3 = t3, _ = e2, i = -1, l2 = Number.NaN;
          }
        }
        o = a2;
        continue;
      }
      if (d > e2) {
        if (-1 !== i) {
          if (p2 === this.getDiscriminantIndex1_(i)) s3 = i, _ = e2, i = this.getRptr_(i), l2 = -1 !== i ? this.getDiscriminant_(i) : Number.NaN;
          else if (l2 < e2) {
            const t3 = this.createTertiaryNode_(p2);
            e2 < _ ? this.setLptr_(s3, t3) : this.setRptr_(s3, t3), this.setLptr_(t3, i), this.m_bOfflineDynamic && (this.setPptr_(t3, s3), this.setPptr_(i, t3)), s3 = t3, _ = e2, i = -1, l2 = Number.NaN;
          }
        }
        h2 = a2 + 1;
        continue;
      }
      let m2 = -1;
      m2 = -1 === i || p2 !== this.getDiscriminantIndex1_(i) ? this.createTertiaryNode_(p2) : i, n4 = this.getSecondaryFromTertiary_(m2), -1 === n4 && (n4 = this.createSecondary_(m2), this.setSecondaryToTertiary_(m2, n4));
      const g2 = this.addEndIndex_(n4, t2);
      r = this.createIntervalNode_(), this.setSecondaryToInterval_(r, n4), this.setLeftEnd_(r, g2), -1 !== i && p2 === this.getDiscriminantIndex1_(i) || (e2 < _ ? this.setLptr_(s3, m2) : this.setRptr_(s3, m2), this.m_bOfflineDynamic && this.setPptr_(m2, s3), -1 !== i && (l2 < e2 ? this.setLptr_(m2, i) : this.setRptr_(m2, i), this.m_bOfflineDynamic && this.setPptr_(i, m2))), u = false;
      break;
    }
    return r;
  }
  createTertiaryNode_(t2) {
    const e = this.m_tertiaryNodes.newElement();
    return this.setDiscriminantIndex1_(e, t2), e;
  }
  createSecondary_(t2) {
    return this.m_bOfflineDynamic ? this.m_secondaryTreaps.createTreap(t2) : this.m_secondaryLists.createList(t2);
  }
  createIntervalNode_() {
    return this.m_intervalNodes.newElement();
  }
  reset() {
    this.m_bOfflineDynamic && this.m_bConstructionEnded || C(""), this.reset_(false, this.m_bEnvelopesRef);
  }
  reset_(t2, e) {
    t2 ? (this.m_bEnvelopesRef = false, this.m_envelopesRef = null, this.m_bSortIntervals = true, this.m_bConstructing = true, this.m_bConstructionEnded = false, this.m_endIndicesUnique.length = 0, e ? (this.m_intervals.length = 0, this.m_bEnvelopesRef = true) : this.m_intervals.length = 0) : this.m_bSortIntervals = false, this.m_bOfflineDynamic ? this.m_secondaryTreaps.clear() : this.m_secondaryLists.clear(), this.m_intervalNodes.deleteAll(false), this.m_tertiaryNodes.deleteAll(false), this.m_root = -1, this.m_cCount = 0;
  }
  getDiscriminant_(t2) {
    const e = this.getDiscriminantIndex1_(t2);
    return this.getDiscriminantFromIndex1_(e);
  }
  getDiscriminantFromIndex1_(t2) {
    if (-1 === t2) return Number.NaN;
    if (t2 > 0) {
      const e2 = t2 - 2, s4 = this.m_endIndicesUnique[e2], i = this.m_endIndicesUnique[e2 + 1];
      return 0.5 * (this.getValue_(s4) + this.getValue_(i));
    }
    const e = -t2 - 2, s3 = this.m_endIndicesUnique[e];
    return this.getValue_(s3);
  }
  calculateDiscriminantIndex1_(t2, e) {
    let s3;
    if (t2 < e) {
      s3 = t2 + (e - t2 >> 1) + 2;
    } else s3 = -(t2 + 2);
    return s3;
  }
  setDiscriminantIndex1_(t2, e) {
    this.m_tertiaryNodes.setField(t2, 0, e);
  }
  setSecondaryToTertiary_(t2, e) {
    this.m_tertiaryNodes.setField(t2, 1, e);
  }
  setLptr_(t2, e) {
    this.m_tertiaryNodes.setField(t2, 2, e);
  }
  setRptr_(t2, e) {
    this.m_tertiaryNodes.setField(t2, 3, e);
  }
  setPptr_(t2, e) {
    this.m_tertiaryNodes.setField(t2, 4, e);
  }
  setSecondaryToInterval_(t2, e) {
    this.m_intervalNodes.setField(t2, 0, e);
  }
  addEndIndex_(t2, e) {
    let s3 = -1;
    return s3 = this.m_bOfflineDynamic ? this.m_secondaryTreaps.addElement(e, t2) : this.m_secondaryLists.addElement(t2, e), s3;
  }
  setLeftEnd_(t2, e) {
    this.m_intervalNodes.setField(t2, 1, e);
  }
  setRightEnd_(t2, e) {
    this.m_intervalNodes.setField(t2, 2, e);
  }
  getFirst_(t2) {
    return this.m_bOfflineDynamic ? this.m_secondaryTreaps.getFirst(t2) : this.m_secondaryLists.getFirst(t2);
  }
  getLast_(t2) {
    return this.m_bOfflineDynamic ? this.m_secondaryTreaps.getLast(t2) : this.m_secondaryLists.getLast(t2);
  }
  static isLeft_(t2) {
    return !(1 & t2);
  }
  static isRight_(t2) {
    return !(1 & ~t2);
  }
  getDiscriminantIndex1_(t2) {
    return this.m_tertiaryNodes.getField(t2, 0);
  }
  getSecondaryFromTertiary_(t2) {
    return this.m_tertiaryNodes.getField(t2, 1);
  }
  getLptr_(t2) {
    return this.m_tertiaryNodes.getField(t2, 2);
  }
  getRptr_(t2) {
    return this.m_tertiaryNodes.getField(t2, 3);
  }
  getPptr_(t2) {
    return this.m_tertiaryNodes.getField(t2, 4);
  }
  getSecondaryFromInterval_(t2) {
    return this.m_intervalNodes.getField(t2, 0);
  }
  getLeftEnd_(t2) {
    return this.m_intervalNodes.getField(t2, 1);
  }
  getRightEnd_(t2) {
    return this.m_intervalNodes.getField(t2, 2);
  }
  getMin_(t2) {
    return this.m_bEnvelopesRef ? this.m_envelopesRef[t2].xmin : this.m_intervals[t2].vmin;
  }
  getMax_(t2) {
    return this.m_bEnvelopesRef ? this.m_envelopesRef[t2].xmax : this.m_intervals[t2].vmax;
  }
  sortEndIndices_(t2, e, s3) {
    const i = this, n4 = { userSort(t3, e2, s4) {
      i.sortEndIndicesHelper_(s4, t3, e2);
    }, getValue: (t3) => i.getValue_(t3) };
    new at().sort(t2, e, s3, n4);
  }
  sortEndIndicesHelper_(t2, e, s3) {
    t2.sort(e, s3, (t3, e2) => {
      const s4 = this.getValue_(t3), i = this.getValue_(e2);
      return s4 < i || s4 === i && _vt.isLeft_(t3) && _vt.isRight_(e2) ? -1 : 1;
    });
  }
  getValue_(t2) {
    if (!this.m_bEnvelopesRef) {
      const e2 = this.m_intervals[t2 >> 1];
      return _vt.isLeft_(t2) ? e2.vmin : e2.vmax;
    }
    const e = this.m_envelopesRef[t2 >> 1];
    return _vt.isLeft_(t2) ? e.xmin : e.xmax;
  }
};
var yt = class {
  constructor(t2, e, s3) {
    this.m_query = x2.constructEmpty(), this.m_tertiaryHandle = -1, this.m_nextTertiaryHandle = -1, this.m_forkedHandle = -1, this.m_currentEndHandle = -1, this.m_nextEndHandle = -1, this.m_tertiaryStack = [], this.m_functionIndex = 0, this.m_intervalTree = t2, this.m_functionStack = new Array(2), this.m_functionStack[0] = this.nullFunc_, this.m_functionStack[1] = this.nullFunc_, void 0 !== e && this.resetIterator(e, s3);
  }
  nullFunc_() {
    return b("should not be called"), false;
  }
  resetIterator(t2, e) {
    if ("number" == typeof t2) {
      const s3 = new x2();
      s3.setCoords(t2, t2), this.resetIterator(s3, e);
    } else void 0 === e && (e = 0), this.m_query.vmin = t2.vmin - e, this.m_query.vmax = t2.vmax + e, this.m_tertiaryStack.length = 0, this.m_functionIndex = 0, this.m_functionStack[0] = this.initialize_;
  }
  next() {
    if (this.m_intervalTree.m_bConstructionEnded || C(""), this.m_functionIndex < 0) return -1;
    for (; this.m_fi = this.m_functionStack[this.m_functionIndex], this.m_fi(); ) ;
    return -1 !== this.m_currentEndHandle ? this.getCurrentEndIndex_() >> 1 : -1;
  }
  initialize_() {
    return this.m_tertiaryHandle = -1, this.m_nextTertiaryHandle = -1, this.m_forkedHandle = -1, this.m_currentEndHandle = -1, this.m_intervalTree.m_tertiaryNodes.size() > 0 ? (this.m_functionStack[0] = this.pIn_, this.m_nextTertiaryHandle = this.m_intervalTree.m_root, true) : (this.m_functionIndex = -1, false);
  }
  pIn_() {
    if (this.m_tertiaryHandle = this.m_nextTertiaryHandle, -1 === this.m_tertiaryHandle) return this.m_functionIndex = -1, this.m_currentEndHandle = -1, false;
    const t2 = this.m_intervalTree.getDiscriminant_(this.m_tertiaryHandle);
    if (this.m_query.vmax < t2) {
      const t3 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
      return this.m_nextTertiaryHandle = this.m_intervalTree.getLptr_(this.m_tertiaryHandle), -1 !== t3 && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(t3), this.m_functionStack[++this.m_functionIndex] = this.left_), true;
    }
    if (t2 < this.m_query.vmin) {
      const t3 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
      return this.m_nextTertiaryHandle = this.m_intervalTree.getRptr_(this.m_tertiaryHandle), -1 !== t3 && (this.m_nextEndHandle = this.m_intervalTree.getLast_(t3), this.m_functionStack[++this.m_functionIndex] = this.right_), true;
    }
    this.m_functionStack[this.m_functionIndex] = this.pL_, this.m_forkedHandle = this.m_tertiaryHandle;
    const e = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
    return this.m_nextTertiaryHandle = this.m_intervalTree.getLptr_(this.m_tertiaryHandle), -1 !== e && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(e), this.m_functionStack[++this.m_functionIndex] = this.all_), true;
  }
  pL_() {
    if (this.m_tertiaryHandle = this.m_nextTertiaryHandle, -1 === this.m_tertiaryHandle) return this.m_functionStack[this.m_functionIndex] = this.pR_, this.m_nextTertiaryHandle = this.m_intervalTree.getRptr_(this.m_forkedHandle), true;
    if (this.m_intervalTree.getDiscriminant_(this.m_tertiaryHandle) < this.m_query.vmin) {
      const t3 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
      return this.m_nextTertiaryHandle = this.m_intervalTree.getRptr_(this.m_tertiaryHandle), -1 !== t3 && (this.m_nextEndHandle = this.m_intervalTree.getLast_(t3), this.m_functionStack[++this.m_functionIndex] = this.right_), true;
    }
    const t2 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
    this.m_nextTertiaryHandle = this.m_intervalTree.getLptr_(this.m_tertiaryHandle), -1 !== t2 && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(t2), this.m_functionStack[++this.m_functionIndex] = this.all_);
    const e = this.m_intervalTree.getRptr_(this.m_tertiaryHandle);
    return -1 !== e && this.m_tertiaryStack.push(e), true;
  }
  pR_() {
    if (this.m_tertiaryHandle = this.m_nextTertiaryHandle, -1 === this.m_tertiaryHandle) return this.m_functionStack[this.m_functionIndex] = this.pT_, true;
    const t2 = this.m_intervalTree.getDiscriminant_(this.m_tertiaryHandle);
    if (this.m_query.vmax < t2) {
      const t3 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
      return this.m_nextTertiaryHandle = this.m_intervalTree.getLptr_(this.m_tertiaryHandle), -1 !== t3 && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(t3), this.m_functionStack[++this.m_functionIndex] = this.left_), true;
    }
    const e = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
    this.m_nextTertiaryHandle = this.m_intervalTree.getRptr_(this.m_tertiaryHandle), -1 !== e && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(e), this.m_functionStack[++this.m_functionIndex] = this.all_);
    const s3 = this.m_intervalTree.getLptr_(this.m_tertiaryHandle);
    return -1 !== s3 && this.m_tertiaryStack.push(s3), true;
  }
  pT_() {
    if (0 === this.m_tertiaryStack.length) return this.m_functionIndex = -1, this.m_currentEndHandle = -1, false;
    this.m_tertiaryHandle = this.m_tertiaryStack.at(-1), this.m_tertiaryStack.pop();
    const t2 = this.m_intervalTree.getSecondaryFromTertiary_(this.m_tertiaryHandle);
    return -1 !== t2 && (this.m_nextEndHandle = this.m_intervalTree.getFirst_(t2), this.m_functionStack[++this.m_functionIndex] = this.all_), -1 !== this.m_intervalTree.getLptr_(this.m_tertiaryHandle) && this.m_tertiaryStack.push(this.m_intervalTree.getLptr_(this.m_tertiaryHandle)), -1 !== this.m_intervalTree.getRptr_(this.m_tertiaryHandle) && this.m_tertiaryStack.push(this.m_intervalTree.getRptr_(this.m_tertiaryHandle)), true;
  }
  left_() {
    return this.m_currentEndHandle = this.m_nextEndHandle, -1 !== this.m_currentEndHandle && vt2.isLeft_(this.getCurrentEndIndex_()) && this.m_intervalTree.getValue_(this.getCurrentEndIndex_()) <= this.m_query.vmax ? (this.m_nextEndHandle = this.getNext_(), false) : (this.m_functionIndex--, true);
  }
  right_() {
    return this.m_currentEndHandle = this.m_nextEndHandle, -1 !== this.m_currentEndHandle && vt2.isRight_(this.getCurrentEndIndex_()) && this.m_intervalTree.getValue_(this.getCurrentEndIndex_()) >= this.m_query.vmin ? (this.m_nextEndHandle = this.getPrev_(), false) : (this.m_functionIndex--, true);
  }
  all_() {
    return this.m_currentEndHandle = this.m_nextEndHandle, -1 !== this.m_currentEndHandle && vt2.isLeft_(this.getCurrentEndIndex_()) ? (this.m_nextEndHandle = this.getNext_(), false) : (this.m_functionIndex--, true);
  }
  getNext_() {
    return this.m_intervalTree.m_bOfflineDynamic ? this.m_intervalTree.m_secondaryTreaps.getNext(this.m_currentEndHandle) : this.m_intervalTree.m_secondaryLists.getNext(this.m_currentEndHandle);
  }
  getPrev_() {
    return this.m_intervalTree.m_bOfflineDynamic ? this.m_intervalTree.m_secondaryTreaps.getPrev(this.m_currentEndHandle) : this.m_intervalTree.m_secondaryLists.getPrev(this.m_currentEndHandle);
  }
  getCurrentEndIndex_() {
    return this.m_intervalTree.m_bOfflineDynamic ? this.m_intervalTree.m_secondaryTreaps.getElement(this.m_currentEndHandle) : this.m_intervalTree.m_secondaryLists.getData(this.m_currentEndHandle);
  }
};
var xt = class {
  constructor() {
    this.m_tolerance = 0, this.m_sweepIndexRed = -1, this.m_sweepIndexBlue = -1, this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_intervalTreeRed = null, this.m_intervalTreeBlue = null, this.m_iteratorRed = null, this.m_iteratorBlue = null, this.m_envelopesRed = [], this.m_envelopesBlue = [], this.m_elementsRed = [], this.m_elementsBlue = [], this.m_sortedEndIndicesRed = new st2(0), this.m_sortedEndIndicesBlue = new st2(0), this.m_queuedListRed = -1, this.m_queuedListBlue = -1, this.m_queuedEnvelopes = new gt2(), this.m_queuedIndicesRed = [], this.m_queuedIndicesBlue = [], this.m_bAddRed = false, this.m_bAddBlue = false, this.m_bAddRedRed = false, this.m_bDone = true, this.m_function = this.nullFunc_, this.reset_();
  }
  startConstruction() {
    this.reset_(), this.m_bAddRedRed = true, this.m_elementsRed.length = 0, this.m_envelopesRed.length = 0;
  }
  addEnvelope(t2, e) {
    this.m_bAddRedRed || C(""), this.m_elementsRed.push(t2), this.m_envelopesRed.push(new n3(e));
  }
  endConstruction() {
    this.m_bAddRedRed || C(""), this.m_bAddRedRed = false, this.m_envelopesRed.length > 0 && (this.m_function = this.initialize_, this.m_bDone = false);
  }
  startRedConstruction() {
    this.reset_(), this.m_bAddRed = true, this.m_elementsRed.length = 0, this.m_envelopesRed.length = 0;
  }
  addRedEnvelope(t2, e) {
    this.m_bAddRed || C(""), this.m_elementsRed.push(t2), this.m_envelopesRed.push(e.clone());
  }
  endRedConstruction() {
    this.m_bAddRed || C(""), this.m_bAddRed = false, this.m_envelopesRed.length > 0 && this.m_envelopesBlue.length > 0 && (this.m_function === this.nullFunc_ || this.m_function === this.initializeBlue_ ? this.m_function = this.initializeRedBlue_ : this.m_function !== this.initializeRedBlue_ && (this.m_function = this.initializeRed_), this.m_bDone = false);
  }
  startBlueConstruction() {
    this.reset_(), this.m_bAddBlue = true, this.m_elementsBlue.length = 0, this.m_envelopesBlue.length = 0;
  }
  addBlueEnvelope(t2, e) {
    this.m_bAddBlue || C(""), this.m_elementsBlue.push(t2), this.m_envelopesBlue.push(e.clone());
  }
  endBlueConstruction() {
    this.m_bAddBlue || C(""), this.m_bAddBlue = false, this.m_envelopesRed.length > 0 && this.m_envelopesBlue.length > 0 && (this.m_function === this.nullFunc_ || this.m_function === this.initializeRed_ ? this.m_function = this.initializeRedBlue_ : this.m_function !== this.initializeRedBlue_ && (this.m_function = this.initializeBlue_), this.m_bDone = false);
  }
  next() {
    if (this.m_bDone) return false;
    for (; this.m_function(); ) ;
    return !this.m_bDone;
  }
  getHandleA() {
    return this.m_envelopeHandleA;
  }
  getHandleB() {
    return this.m_envelopeHandleB;
  }
  setTolerance(t2) {
    this.m_tolerance = t2;
  }
  getElement(t2) {
    return this.m_elementsRed[t2];
  }
  getRedEnvelope(t2) {
    return this.m_envelopesRed[t2];
  }
  getBlueEnvelope(t2) {
    return this.m_envelopesBlue[t2];
  }
  getRedElement(t2) {
    return this.m_elementsRed[t2];
  }
  getBlueElement(t2) {
    return this.m_elementsBlue[t2];
  }
  isTop_(t2) {
    return !(1 & ~t2);
  }
  isBottom_(t2) {
    return !(1 & t2);
  }
  reset_() {
    this.m_bAddRed = false, this.m_bAddBlue = false, this.m_bAddRedRed = false, this.m_sweepIndexRed = -1, this.m_sweepIndexBlue = -1, this.m_queuedListRed = -1, this.m_queuedListBlue = -1, this.m_bDone = true;
  }
  initialize_() {
    if (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_envelopesRed.length < 10) return this.m_sweepIndexRed = this.m_envelopesRed.length, this.m_function = this.sweepBruteForce_, true;
    this.m_intervalTreeRed || (this.m_intervalTreeRed = new vt2(true)), this.m_intervalTreeRed.addEnvelopesRef(this.m_envelopesRed), null === this.m_iteratorRed && (this.m_iteratorRed = this.m_intervalTreeRed.getIterator()), this.m_sortedEndIndicesRed.resize(0);
    for (let t2 = 0; t2 < 2 * this.m_envelopesRed.length; t2++) this.m_sortedEndIndicesRed.add(t2);
    return this.sortYEndIndices_(this.m_sortedEndIndicesRed, 0, 2 * this.m_envelopesRed.length, true), this.m_sweepIndexRed = 2 * this.m_envelopesRed.length, this.m_function = this.sweep_, true;
  }
  initializeRed_() {
    if (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_envelopesRed.length < 10 || this.m_envelopesBlue.length < 10) return this.m_sweepIndexRed = this.m_envelopesRed.length, this.m_function = this.sweepRedBlueBruteForce_, true;
    this.m_intervalTreeRed || (this.m_intervalTreeRed = new vt2(true)), this.m_intervalTreeRed.addEnvelopesRef(this.m_envelopesRed), null === this.m_iteratorRed && (this.m_iteratorRed = this.m_intervalTreeRed.getIterator()), this.m_sortedEndIndicesRed.resize(0);
    for (let t2 = 0; t2 < 2 * this.m_envelopesRed.length; t2++) this.m_sortedEndIndicesRed.add(t2);
    return this.sortYEndIndices_(this.m_sortedEndIndicesRed, 0, this.m_sortedEndIndicesRed.size(), true), this.m_sweepIndexRed = this.m_sortedEndIndicesRed.size(), -1 !== this.m_queuedListRed && (this.m_queuedEnvelopes.deleteList(this.m_queuedListRed), this.m_queuedIndicesRed.length = 0, this.m_queuedListRed = -1), this.m_function = this.sweepRedBlue_, this.resetBlue_();
  }
  initializeBlue_() {
    if (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_envelopesRed.length < 10 || this.m_envelopesBlue.length < 10) return this.m_sweepIndexRed = this.m_envelopesRed.length, this.m_function = this.sweepRedBlueBruteForce_, true;
    this.m_intervalTreeBlue || (this.m_intervalTreeBlue = new vt2(true)), this.m_intervalTreeBlue.addEnvelopesRef(this.m_envelopesBlue), null == this.m_iteratorBlue && (this.m_iteratorBlue = this.m_intervalTreeBlue.getIterator()), this.m_sortedEndIndicesBlue.resize(0);
    for (let t2 = 0; t2 < 2 * this.m_envelopesBlue.length; t2++) this.m_sortedEndIndicesBlue.add(t2);
    return this.sortYEndIndices_(this.m_sortedEndIndicesBlue, 0, this.m_sortedEndIndicesBlue.size(), false), this.m_sweepIndexBlue = this.m_sortedEndIndicesBlue.size(), -1 !== this.m_queuedListBlue && (this.m_queuedEnvelopes.deleteList(this.m_queuedListBlue), this.m_queuedIndicesBlue.length = 0, this.m_queuedListBlue = -1), this.m_function = this.sweepRedBlue_, this.resetRed_();
  }
  initializeRedBlue_() {
    if (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_envelopesRed.length < 10 || this.m_envelopesBlue.length < 10) return this.m_sweepIndexRed = this.m_envelopesRed.length, this.m_function = this.sweepRedBlueBruteForce_, true;
    this.m_intervalTreeRed || (this.m_intervalTreeRed = new vt2(true)), this.m_intervalTreeBlue || (this.m_intervalTreeBlue = new vt2(true)), this.m_intervalTreeRed.addEnvelopesRef(this.m_envelopesRed), this.m_intervalTreeBlue.addEnvelopesRef(this.m_envelopesBlue), null === this.m_iteratorRed && (this.m_iteratorRed = this.m_intervalTreeRed.getIterator()), null === this.m_iteratorBlue && (this.m_iteratorBlue = this.m_intervalTreeBlue.getIterator()), this.m_sortedEndIndicesRed.resize(0), this.m_sortedEndIndicesBlue.resize(0);
    for (let t2 = 0; t2 < 2 * this.m_envelopesRed.length; t2++) this.m_sortedEndIndicesRed.add(t2);
    for (let t2 = 0; t2 < 2 * this.m_envelopesBlue.length; t2++) this.m_sortedEndIndicesBlue.add(t2);
    return this.sortYEndIndices_(this.m_sortedEndIndicesRed, 0, this.m_sortedEndIndicesRed.size(), true), this.sortYEndIndices_(this.m_sortedEndIndicesBlue, 0, this.m_sortedEndIndicesBlue.size(), false), this.m_sweepIndexRed = this.m_sortedEndIndicesRed.size(), this.m_sweepIndexBlue = this.m_sortedEndIndicesBlue.size(), -1 !== this.m_queuedListRed && (this.m_queuedEnvelopes.deleteList(this.m_queuedListRed), this.m_queuedIndicesRed.length = 0, this.m_queuedListRed = -1), -1 !== this.m_queuedListBlue && (this.m_queuedEnvelopes.deleteList(this.m_queuedListBlue), this.m_queuedIndicesBlue.length = 0, this.m_queuedListBlue = -1), this.m_function = this.sweepRedBlue_, true;
  }
  sweep_() {
    const t2 = this.m_sortedEndIndicesRed.read(--this.m_sweepIndexRed), e = t2 >> 1;
    if (this.isBottom_(t2)) return this.m_intervalTreeRed.remove(e), 0 !== this.m_sweepIndexRed || (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_bDone = true, false);
    const s3 = x2.construct(this.m_envelopesRed[e].xmin, this.m_envelopesRed[e].xmax);
    return this.m_iteratorRed.resetIterator(s3, this.m_tolerance), this.m_envelopeHandleA = e, this.m_function = this.iterate_, true;
  }
  sweepBruteForce_() {
    return -1 === --this.m_sweepIndexRed ? (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_bDone = true, false) : (this.m_envelopeHandleA = this.m_sweepIndexRed, this.m_sweepIndexBlue = this.m_sweepIndexRed, this.m_function = this.iterateBruteForce_, true);
  }
  sweepRedBlueBruteForce_() {
    return -1 === --this.m_sweepIndexRed ? (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_bDone = true, false) : (this.m_envelopeHandleA = this.m_sweepIndexRed, this.m_sweepIndexBlue = this.m_envelopesBlue.length, this.m_function = this.iterateRedBlueBruteForce_, true);
  }
  sweepRedBlue_() {
    const t2 = this.m_sortedEndIndicesRed.read(this.m_sweepIndexRed - 1), e = this.m_sortedEndIndicesBlue.read(this.m_sweepIndexBlue - 1), s3 = this.getAdjustedValue_(t2, true), i = this.getAdjustedValue_(e, false);
    return s3 > i ? this.sweepRed_() : s3 < i ? this.sweepBlue_() : this.isTop_(t2) ? this.sweepRed_() : this.isTop_(e) ? this.sweepBlue_() : this.sweepRed_();
  }
  sweepRed_() {
    const t2 = this.m_sortedEndIndicesRed.read(--this.m_sweepIndexRed), e = t2 >> 1;
    if (this.isBottom_(t2)) return -1 !== this.m_queuedListRed && -1 !== this.m_queuedIndicesRed[e] ? (this.m_queuedEnvelopes.deleteElement(this.m_queuedListRed, this.m_queuedIndicesRed[e]), this.m_queuedIndicesRed[e] = -1) : this.m_intervalTreeRed.remove(e), 0 !== this.m_sweepIndexRed || (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_bDone = true, false);
    if (-1 !== this.m_queuedListBlue && this.m_queuedEnvelopes.getListSize(this.m_queuedListBlue) > 0) {
      let t3 = this.m_queuedEnvelopes.getFirst(this.m_queuedListBlue);
      for (; -1 !== t3; ) {
        const e2 = this.m_queuedEnvelopes.getData(t3);
        this.m_intervalTreeBlue.insert(e2), this.m_queuedIndicesBlue[e2] = -1;
        const s3 = this.m_queuedEnvelopes.getNext(t3);
        this.m_queuedEnvelopes.deleteElement(this.m_queuedListBlue, t3), t3 = s3;
      }
    }
    if (this.m_intervalTreeBlue.size() > 0) {
      const t3 = x2.construct(this.m_envelopesRed[e].xmin, this.m_envelopesRed[e].xmax);
      this.m_iteratorBlue.resetIterator(t3, this.m_tolerance), this.m_envelopeHandleA = e, this.m_function = this.iterateBlue_;
    } else -1 === this.m_queuedListRed && (Ft(this.m_queuedIndicesRed, this.m_envelopesRed.length, -1), this.m_queuedListRed = this.m_queuedEnvelopes.createList(1)), this.m_queuedIndicesRed[e] = this.m_queuedEnvelopes.addElement(this.m_queuedListRed, e), this.m_function = this.sweepRedBlue_;
    return true;
  }
  sweepBlue_() {
    const t2 = this.m_sortedEndIndicesBlue.read(--this.m_sweepIndexBlue), e = t2 >> 1;
    if (this.isBottom_(t2)) return -1 !== this.m_queuedListBlue && -1 !== this.m_queuedIndicesBlue[e] ? (this.m_queuedEnvelopes.deleteElement(this.m_queuedListBlue, this.m_queuedIndicesBlue[e]), this.m_queuedIndicesBlue[e] = -1) : this.m_intervalTreeBlue.remove(e), 0 !== this.m_sweepIndexBlue || (this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1, this.m_bDone = true, false);
    if (-1 !== this.m_queuedListRed && this.m_queuedEnvelopes.getListSize(this.m_queuedListRed) > 0) {
      let t3 = this.m_queuedEnvelopes.getFirst(this.m_queuedListRed);
      for (; -1 !== t3; ) {
        const e2 = this.m_queuedEnvelopes.getData(t3);
        this.m_intervalTreeRed.insert(e2), this.m_queuedIndicesRed[e2] = -1;
        const s3 = this.m_queuedEnvelopes.getNext(t3);
        this.m_queuedEnvelopes.deleteElement(this.m_queuedListRed, t3), t3 = s3;
      }
    }
    if (this.m_intervalTreeRed.size() > 0) {
      const t3 = x2.construct(this.m_envelopesBlue[e].xmin, this.m_envelopesBlue[e].xmax);
      this.m_iteratorRed.resetIterator(t3, this.m_tolerance), this.m_envelopeHandleB = e, this.m_function = this.iterateRed_;
    } else -1 === this.m_queuedListBlue && (Ft(this.m_queuedIndicesBlue, this.m_envelopesBlue.length, -1), this.m_queuedListBlue = this.m_queuedEnvelopes.createList(0)), this.m_queuedIndicesBlue[e] = this.m_queuedEnvelopes.addElement(this.m_queuedListBlue, e), this.m_function = this.sweepRedBlue_;
    return true;
  }
  iterate_() {
    if (this.m_envelopeHandleB = this.m_iteratorRed.next(), -1 !== this.m_envelopeHandleB) return false;
    const t2 = this.m_sortedEndIndicesRed.read(this.m_sweepIndexRed) >> 1;
    return this.m_intervalTreeRed.insert(t2), this.m_function = this.sweep_, true;
  }
  iterateRed_() {
    if (this.m_envelopeHandleA = this.m_iteratorRed.next(), -1 !== this.m_envelopeHandleA) return false;
    this.m_envelopeHandleA = -1, this.m_envelopeHandleB = -1;
    const t2 = this.m_sortedEndIndicesBlue.read(this.m_sweepIndexBlue) >> 1;
    return this.m_intervalTreeBlue.insert(t2), this.m_function = this.sweepRedBlue_, true;
  }
  iterateBlue_() {
    if (this.m_envelopeHandleB = this.m_iteratorBlue.next(), -1 !== this.m_envelopeHandleB) return false;
    const t2 = this.m_sortedEndIndicesRed.read(this.m_sweepIndexRed) >> 1;
    return this.m_intervalTreeRed.insert(t2), this.m_function = this.sweepRedBlue_, true;
  }
  iterateBruteForce_() {
    if (-1 === --this.m_sweepIndexBlue) return this.m_function = this.sweepBruteForce_, true;
    const t2 = this.m_envelopesRed[this.m_sweepIndexRed].clone(), e = this.m_envelopesRed[this.m_sweepIndexBlue];
    return t2.inflateCoords(this.m_tolerance, this.m_tolerance), !t2.isIntersecting(e) || (this.m_envelopeHandleB = this.m_sweepIndexBlue, false);
  }
  iterateRedBlueBruteForce_() {
    if (-1 === --this.m_sweepIndexBlue) return this.m_function = this.sweepRedBlueBruteForce_, true;
    const t2 = this.m_envelopesRed[this.m_sweepIndexRed].clone(), e = this.m_envelopesBlue[this.m_sweepIndexBlue];
    return t2.inflateCoords(this.m_tolerance, this.m_tolerance), !t2.isIntersecting(e) || (this.m_envelopeHandleB = this.m_sweepIndexBlue, false);
  }
  resetRed_() {
    return this.m_sweepIndexRed = this.m_sortedEndIndicesRed.size(), this.m_intervalTreeRed.size() > 0 && this.m_intervalTreeRed.reset(), -1 !== this.m_queuedListRed && (this.m_queuedEnvelopes.deleteList(this.m_queuedListRed), this.m_queuedIndicesRed.length = 0, this.m_queuedListRed = -1), this.m_bDone = false, true;
  }
  resetBlue_() {
    return this.m_sweepIndexBlue = this.m_sortedEndIndicesBlue.size(), this.m_intervalTreeBlue.size() > 0 && this.m_intervalTreeBlue.reset(), -1 !== this.m_queuedListBlue && (this.m_queuedEnvelopes.deleteList(this.m_queuedListBlue), this.m_queuedIndicesBlue.length = 0, this.m_queuedListBlue = -1), this.m_bDone = false, true;
  }
  nullFunc_() {
    return b("should not be called"), false;
  }
  sortYEndIndices_(t2, e, s3, i) {
    const n4 = this, r = { userSort(t3, e2, s4) {
      n4.sortYEndIndicesHelper_(s4, t3, e2, i);
    }, getValue: (t3) => n4.getAdjustedValue_(t3, i) };
    new at().sort(t2, e, s3, r);
  }
  sortYEndIndicesHelper_(t2, e, s3, i) {
    t2.sort(e, s3, (t3, e2) => {
      const s4 = this.getAdjustedValue_(t3, i), n4 = this.getAdjustedValue_(e2, i);
      return s4 < n4 || s4 === n4 && this.isBottom_(t3) && this.isTop_(e2) ? -1 : 1;
    });
  }
  getAdjustedValue_(t2, e) {
    const s3 = 0.5 * this.m_tolerance;
    if (e) {
      const e2 = this.m_envelopesRed[t2 >> 1];
      return this.isBottom_(t2) ? e2.ymin - s3 : e2.ymax + s3;
    }
    const i = this.m_envelopesBlue[t2 >> 1];
    return this.isBottom_(t2) ? i.ymin - s3 : i.ymax + s3;
  }
};
var Et2 = z2;
var bt = class _bt {
  constructor(t2, e) {
    this.tolerance = void 0 !== t2 ? t2 : Number.NaN, this.resolution = void 0 !== e ? e : Number.NaN;
  }
  add(t2) {
    return new _bt(this.tolerance + t2, this.resolution);
  }
  scale(t2) {
    return new _bt(this.tolerance * t2, this.resolution * t2);
  }
  total() {
    return this.tolerance + this.resolution;
  }
};
function Nt(t2, e, i, n4, r) {
  const h2 = n4 * n4, o = t2.sub(e), a2 = i.sub(e), m = o.sqrLength(), _ = a2.sqrLength();
  if (m <= h2 || _ <= h2) return true;
  const l2 = H(o.crossProduct(a2));
  if (l2 <= h2 * m || l2 <= h2 * _) {
    return o.dotProduct(a2) >= 0;
  }
  return false;
}
function Dt2(t2, e, s3) {
  return (i) => 0 === s3 ? (i + t2) * e : 1 * (i - t2 * e) / e;
}
function It2(t2, e) {
  const s3 = new n3();
  return t2.queryLooseEnvelope(s3), s3.mergeEnvelope2D(e), s3;
}
function Ct2(t2, e) {
  const s3 = n3.constructEmpty();
  t2.queryLooseEnvelope(s3);
  const i = n3.constructEmpty();
  return e.queryLooseEnvelope(i), s3.mergeEnvelope2D(i), s3;
}
function Tt(t2, e) {
  return (Number.isFinite(t2) || Number.isNaN(t2)) && (Number.isFinite(e) || Number.isNaN(e));
}
function Rt2(t2, e) {
  return Number.isFinite(t2) && Number.isFinite(e);
}
function At(t2, e, s3) {
  const i = n3.constructEmpty();
  i.setFromPoints(t2, e);
  return Ft2(0, null, i.calculateToleranceFromEnvelope(), s3, false);
}
function qt2(t2, e, s3) {
  return Ft2(0, t2, e.calculateToleranceFromEnvelope(), s3, false);
}
function wt2(t2, e, s3) {
  return Ft2(1, t2, e.calculateToleranceFromEnvelope(), s3, false);
}
function Bt2(t2, e, s3) {
  return wt2(t2, e.queryInterval(1, 0), s3);
}
function zt2(t2, e, s3) {
  const i = n3.constructEmpty();
  return e.queryEnvelope(i), qt2(t2, i, s3);
}
function Lt2(t2, e, s3 = false) {
  return Ft2(0, t2, e.calculateToleranceFromEnvelope(), s3, true).total();
}
function St(t2, e, s3) {
  const i = n3.constructEmpty();
  return e.queryEnvelope(i), Lt2(t2, i, s3);
}
function Ft2(t2, e, s3, i, n4) {
  const r = new bt(0, 0);
  if (null !== e && (r.tolerance = e.getTolerance(t2), (!n4 || i) && null !== e)) {
    const s4 = e.getResolution(t2);
    r.resolution = s4, i && (r.resolution *= 2);
  }
  i && (s3 *= 4, r.tolerance *= 1.01, r.resolution *= 1.01);
  return r.total() < s3 ? new bt(s3, 0) : r;
}
function Pt2(t2) {
  return Math.sqrt(2) * (2 * t2.tolerance + t2.resolution);
}
function Ht(t2) {
  return Math.sqrt(2) * (t2.tolerance + t2.resolution);
}
function Vt(t2) {
  return t2 >= 3;
}
function kt(t2, e) {
  const s3 = [0];
  return t2.getImpl().getIsSimple(e, s3) >= 3;
}
function Mt(t2, e) {
  t2.getImpl().setIsSimple(3, e);
}
function Ot2(t2, e, n4, r) {
  if (H(e.x - t2.x) + H(e.y - t2.y) <= n4 * n4) {
    const s3 = t2.z, n5 = e.z;
    return cs(s3, n5, r);
  }
  return false;
}
function Yt2(t2) {
  return t2 >= 4;
}
function Xt2(t2, e) {
  return t2 === a.enumPolygon ? Vt(e) : e >= 1;
}
function Gt(t2, e, s3) {
  const i = n3.constructEmpty(), n4 = n3.constructEmpty();
  t2.queryLooseEnvelope(i), e.queryLooseEnvelope(n4), i.inflateCoords(s3, s3), n4.inflateCoords(s3, s3);
  const r = n3.constructEmpty();
  r.setCoords({ env2D: i }), r.intersect(n4);
  const h2 = t2.querySegmentIterator(), o = e.querySegmentIterator(), a2 = n3.constructEmpty(), m = n3.constructEmpty(), _ = new xt();
  _.setTolerance(s3);
  let l2 = false;
  for (_.startRedConstruction(); h2.nextPath(); ) for (; h2.hasNextSegment(); ) {
    h2.nextSegment().queryLooseEnvelope(a2), a2.isIntersecting(r) && (l2 = true, _.addRedEnvelope(h2.getStartPointIndex(), a2));
  }
  if (_.endRedConstruction(), !l2) return null;
  let u = false;
  for (_.startBlueConstruction(); o.nextPath(); ) for (; o.hasNextSegment(); ) {
    o.nextSegment().queryLooseEnvelope(m), m.isIntersecting(r) && (u = true, _.addBlueEnvelope(o.getStartPointIndex(), m));
  }
  return _.endBlueConstruction(), u ? _ : null;
}
function Ut(t2, e, s3, i, n4) {
  t2.getGeometryType(), e.getGeometryType();
  const r = n3.constructEmpty(), h2 = n3.constructEmpty();
  t2.queryLooseEnvelope(r), e.queryLooseEnvelope(h2), r.inflateCoords(s3, s3), h2.inflateCoords(s3, s3);
  const o = n3.constructEmpty();
  o.setCoords({ env2D: r }), o.intersect(h2);
  const a2 = new xt();
  a2.setTolerance(s3);
  let m = false;
  a2.startRedConstruction();
  for (let l2 = 0, u = t2.getPathCount(); l2 < u; l2++) t2.queryLoosePathEnvelope(l2, r), r.isIntersecting(o) && (m = true, a2.addRedEnvelope(l2, r));
  if (a2.endRedConstruction(), !m) return null;
  let _ = false;
  a2.startBlueConstruction();
  for (let l2 = 0, u = e.getPathCount(); l2 < u; l2++) e.queryLoosePathEnvelope(l2, h2), h2.isIntersecting(o) && (_ = true, a2.addBlueEnvelope(l2, h2));
  return a2.endBlueConstruction(), _ ? a2 : null;
}
function Zt2(t2, e, s3) {
  const i = n3.constructEmpty(), n4 = n3.constructEmpty();
  t2.queryLooseEnvelope(i), e.queryEnvelope(n4), i.inflateCoords(s3, s3), n4.inflateCoords(s3, s3);
  const r = n3.constructEmpty();
  r.setCoords({ env2D: i }), r.intersect(n4);
  const h2 = t2.querySegmentIterator(), o = new xt();
  o.setTolerance(s3);
  let a2 = false;
  for (o.startRedConstruction(); h2.nextPath(); ) for (; h2.hasNextSegment(); ) {
    h2.nextSegment().queryLooseEnvelope(i), i.isIntersecting(r) && (a2 = true, o.addRedEnvelope(h2.getStartPointIndex(), i));
  }
  if (o.endRedConstruction(), !a2) return null;
  let m = false;
  o.startBlueConstruction();
  for (let _ = 0, l2 = e.getPointCount(); _ < l2; _++) {
    const t3 = e.getXY(_);
    r.contains(t3) && (m = true, o.addBlueEnvelope(_, n3.construct(t3.x, t3.y, t3.x, t3.y)));
  }
  return o.endBlueConstruction(), m ? o : null;
}
function Qt2(t2, e, s3) {
  const i = n3.constructEmpty(), n4 = n3.constructEmpty();
  t2.queryEnvelope(i), e.queryEnvelope(n4), i.inflateCoords(s3, s3), n4.inflateCoords(s3, s3);
  const r = n3.constructEmpty();
  r.setCoords({ env2D: i }), r.intersect(n4);
  const h2 = new xt();
  h2.setTolerance(s3);
  let a2 = false;
  h2.startRedConstruction();
  const m = new mi();
  for (let o = 0, u = t2.getPointCount(); o < u; o++) t2.queryXY(o, m), r.contains(m) && (a2 = true, h2.addRedEnvelope(o, n3.construct(m.x, m.y, m.x, m.y)));
  if (h2.endRedConstruction(), !a2) return null;
  let _ = false;
  h2.startBlueConstruction();
  const l2 = new mi();
  for (let o = 0, u = e.getPointCount(); o < u; o++) e.queryXY(o, l2), r.contains(l2) && (_ = true, h2.addBlueEnvelope(o, n3.construct(l2.x, l2.y, l2.x, l2.y)));
  return h2.endBlueConstruction(), _ ? h2 : null;
}
function jt2(t2) {
  const e = new n3();
  return t2.queryLooseEnvelope(e), e.inflateCoords(1, 1), Wt2(t2, e);
}
function Wt2(t2, e, s3) {
  const i = new n3();
  if (t2.queryLooseEnvelope(i), i.isEmpty()) return null;
  t2.getGeometryType();
  const n4 = new lt(i, 8);
  let r = -1;
  const h2 = new n3();
  let o = false;
  do {
    for (let s4 = 0, a2 = t2.getPathCount(); s4 < a2; s4++) if (t2.queryLoosePathEnvelope(s4, h2), h2.isIntersecting(e)) {
      if (r = n4.insertEx(s4, h2, r), -1 === r) {
        o && b("build_quad_tree_for_paths"), i.assign(t2.calculateEnvelope2D(false)), o = true, n4.reset(i, 8);
        break;
      }
      o = false;
    }
  } while (o);
  return n4;
}
function Jt2(t2, e) {
  if (!e) {
    const e2 = new n3();
    t2.queryLooseEnvelope(e2);
    const s4 = new lt(e2, 8);
    let i2 = -1;
    const n5 = new n3(), r2 = t2.querySegmentIterator();
    let h3 = false;
    for (; r2.nextPath(); ) for (; r2.hasNextSegment(); ) {
      const o2 = r2.nextSegment(), a2 = r2.getStartPointIndex();
      if (o2.queryLooseEnvelope(n5), i2 = s4.insertEx(a2, n5, i2), -1 === i2) {
        h3 && b(""), e2.assign(t2.calculateEnvelope2D(false)), h3 = true, s4.reset(e2, 8), r2.resetToFirstPath();
        break;
      }
    }
    return s4;
  }
  const s3 = new n3();
  t2.queryLooseEnvelope(s3);
  const i = new lt(s3, 8);
  let n4 = -1;
  const r = new n3(), h2 = t2.querySegmentIterator();
  let o = false;
  for (; h2.nextPath(); ) for (; h2.hasNextSegment(); ) {
    const a2 = h2.nextSegment(), m = h2.getStartPointIndex();
    if (a2.queryLooseEnvelope(r), r.isIntersecting(e) && (n4 = i.insertEx(m, r, n4), -1 === n4)) {
      o && b(""), s3.assign(t2.calculateEnvelope2D(false)), o = true, i.reset(s3, 8), h2.resetToFirstPath();
      break;
    }
  }
  return i;
}
function Kt(t2, e) {
  if (e) {
    const s3 = new lt(e, 8), i = new mi(), n4 = new n3();
    let r = false;
    for (let h2 = 0; h2 < t2.getPointCount(); h2++) {
      if (i.setCoordsPoint2D(t2.getXY(h2)), !e.contains(i)) continue;
      n4.setCoords({ pt: i });
      -1 !== s3.insert(h2, n4) || (r && b(""), r = true, s3.reset(t2.calculateEnvelope2D(), 8), h2 = -1);
    }
    return s3;
  }
  return z("no-extent version not yet impl"), null;
}
function $t2(t2, e, s3, i, n4) {
  let r = false;
  const h2 = n4.vmin, o = n4.vmax;
  for (let a2 = s3; a2 < e; a2 += i) {
    const e2 = t2.read(a2);
    e2 < h2 ? (r = true, t2.write(a2, h2)) : e2 > o && (r = true, t2.write(a2, o));
  }
  return r;
}
function te(t2, e, s3, i) {
  if (!t2.hasAttribute(s3)) return false;
  const n4 = t2.getGeometryType();
  if (n4 === a.enumGeometryCollection) {
    const n5 = t2, r = n5.getGeometryCount();
    let h2 = 0;
    for (let t3 = 0; t3 < r; ++t3) {
      h2 |= te(n5.getGeometry(t3), e, s3, i) ? 1 : 0;
    }
    return !!h2;
  }
  if (y(n4)) {
    const n5 = t2, r = Et2.getPersistence(s3), h2 = Et2.getComponentCount(s3), o = n5.getPointCount();
    if (1 === r) {
      const t3 = $t2(n5.getAttributeStreamRef(s3), o * h2, i, h2, e);
      return t3 && n5.notifyModified(), t3;
    }
    if (2 === r) {
      const t3 = $t2(n5.getAttributeStreamRef(s3), o * h2, i, h2, e);
      return t3 && n5.notifyModified(), t3;
    }
    b("snap_coordinate not implemented");
  }
  if (n4 === a.enumEnvelope) {
    const n5 = t2, r = n5.queryInterval(s3, i);
    let h2 = false;
    return r.vmin < e.vmin && (h2 = true, r.vmin = e.vmin), r.vmax > e.vmax && (h2 = true, r.vmax = e.vmax), h2 && n5.setIntervalEnvelope(s3, i, r), h2;
  }
  if (n4 === a.enumPoint) {
    const n5 = t2;
    let r = n5.getAttributeAsDbl(s3, i), h2 = false;
    return r < e.vmin && (h2 = true, r = e.vmin), r > e.vmax && (h2 = true, r = e.vmax), h2 && n5.setAttributeBasic(s3, i, r), h2;
  }
  if (f(n4)) {
    const n5 = t2;
    let r = n5.getStartAttributeAsDbl(s3, i), h2 = false;
    return r < e.vmin && (h2 = true, r = e.vmin), r > e.vmax && (h2 = true, r = e.vmax), h2 && n5.setStartAttribute(s3, i, r), r = n5.getEndAttributeAsDbl(s3, i), r < e.vmin && (h2 = true, r = e.vmin), r > e.vmax && (h2 = true, r = e.vmax), h2 && n5.setEndAttribute(s3, i, r), h2;
  }
  b("snap_coordinate not implemented");
}
var ee = z2;
var se = class _se {
  constructor(t2) {
    if (this.m_description = null, this.x = Number.NaN, this.y = Number.NaN, this.m_attribs = null, t2) {
      if (!t2.copy) return t2.move ? (this.m_description = t2.move.m_description, t2.move.m_description = null, this.m_attribs = t2.move.m_attribs, t2.move.m_attribs = null, this.x = t2.move.x, void (this.y = t2.move.y)) : t2.vd ? (this.m_description = t2.vd, void (t2.attribBuffer ? (this.m_attribs = t2.attribBuffer, t2.initDefaultValues && this.setDefaultAttributeValues()) : this.ensureAttributes())) : t2.pt ? (this.m_description = M(), void this.setXY(t2.pt)) : void ("x" in t2 && ("z" in t2 ? (this.m_description = O2(), this.ensureAttributes(), this.setXYZ(new X(t2.x, t2.y, t2.z))) : (this.m_description = M(), this.setXYCoords(t2.x, t2.y))));
      t2.copy.copyTo(this);
    } else this.m_description = M();
  }
  assignCopy(t2) {
    return this.m_attribs = null, t2.copyTo(this), this;
  }
  assignMove(t2) {
    return this.m_attribs = null, t2.copyTo(this), t2.setEmpty(), this;
  }
  getXY() {
    return new mi(this.x, this.y);
  }
  queryXY(t2) {
    t2.x = this.x, t2.y = this.y;
  }
  setXY(t2) {
    this.x = t2.x, this.y = t2.y;
  }
  setXYCoords(t2, e) {
    this.x = t2, this.y = e;
  }
  getXYZ() {
    const t2 = new X();
    return t2.x = this.x, t2.y = this.y, t2.z = this.getZ(), t2;
  }
  setXYZ(t2) {
    this.addAttribute(1), this.x = t2.x, this.y = t2.y, this.m_attribs[0] = t2.z;
  }
  getX() {
    return this.x;
  }
  setX(t2) {
    this.x = t2;
  }
  getY() {
    return this.y;
  }
  setY(t2) {
    this.y = t2;
  }
  getZ() {
    return this.m_description.hasZ() ? this.m_attribs[0] : ee.getDefaultValue(1);
  }
  setZ(t2) {
    this.addAttribute(1), this.m_attribs[0] = t2;
  }
  getM() {
    return this.getAttributeAsDbl(2, 0);
  }
  setM(t2) {
    this.addAttribute(2), this.m_description.hasZ() ? this.m_attribs[1] = t2 : this.m_attribs[0] = t2;
  }
  getID() {
    return this.getAttributeAsInt(3, 0);
  }
  setID(t2) {
    this.setAttributeBasic(3, 0, t2);
  }
  isEqualXY(t2, e) {
    return void 0 === e && (e = 0), Math.abs(t2.x - this.x) <= e && Math.abs(t2.y - this.y) <= e;
  }
  isEqualXYCoords(t2, e, s3) {
    return void 0 === s3 && (s3 = 0), Math.abs(t2 - this.x) <= s3 && Math.abs(e - this.y) <= s3;
  }
  getAttributeAsDbl(t2, e) {
    if (0 === t2) {
      if (0 === e) return this.x;
      if (1 === e) return this.y;
      A("");
    }
    const s3 = ee.getComponentCount(t2);
    (e < 0 || e >= s3) && A("");
    const i = this.m_description.getAttributeIndex(t2);
    return i >= 0 ? this.m_attribs[this.m_description.getPointAttributeOffset(i) - 2 + e] : ee.getDefaultValue(t2);
  }
  getAttributeAsInt(t2, e) {
    return Math.trunc(this.getAttributeAsDbl(t2, e));
  }
  setAttributeBasic(t2, e, s3) {
    if (0 === t2) return void (0 === e ? this.x = s3 : 1 === e ? this.y = s3 : A(""));
    const i = ee.getComponentCount(t2);
    (e < 0 || e >= i) && A("");
    let n4 = this.m_description.getAttributeIndex(t2);
    n4 < 0 && (this.addAttribute(t2), n4 = this.m_description.getAttributeIndex(t2)), this.m_attribs[this.m_description.getPointAttributeOffset(n4) - 2 + e] = s3;
  }
  copyAttributesFrom(t2, e) {
    if (this === t2) return;
    const s3 = t2.getDescription();
    for (let i = e && s3.hasZ() ? 2 : 1, n4 = s3.getAttributeCount(); i < n4; ++i) {
      const e2 = s3.getSemantics(i), n5 = ee.getComponentCount(e2);
      for (let s4 = 0; s4 < n5; ++s4) {
        const i2 = t2.getAttributeAsDbl(e2, s4);
        this.setAttributeBasic(e2, s4, i2);
      }
    }
  }
  getAttributeArray() {
    return this.m_attribs;
  }
  getDescription() {
    return this.m_description;
  }
  assignVertexDescription(t2) {
    this.m_description !== t2 && this.assignVertexDescriptionImpl(t2);
  }
  mergeVertexDescription(t2) {
    this.m_description !== t2 && (this.m_description.hasAttributesFrom(t2) || this.mergeVertexDescriptionImpl(t2));
  }
  hasAttribute(t2) {
    return this.m_description.hasAttribute(t2);
  }
  addAttribute(t2) {
    if (this.m_description.hasAttribute(t2)) return;
    const e = V2(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAttribute(t2) {
    if (!this.m_description.hasAttribute(t2)) return;
    const e = k3(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAllAttributes() {
    const t2 = M();
    t2 !== this.m_description && this.assignVertexDescription(t2);
  }
  getGeometryType() {
    return a.enumPoint;
  }
  getDimension() {
    return 0;
  }
  queryEnvelope(t2) {
    if (t2 instanceof he) return t2.setEmpty(), t2.assignVertexDescription(this.m_description), void t2.merge(this);
    if (t2 instanceof G2) {
      if (this.isEmpty()) return void t2.setEmpty();
      const e = this.getXYZ();
      return t2.xmin = e.x, t2.ymin = e.y, t2.zmin = e.z, t2.xmax = e.x, t2.ymax = e.y, void (t2.zmax = e.z);
    }
    this.isEmpty() ? t2.setEmpty() : (t2.xmin = this.x, t2.ymin = this.y, t2.xmax = this.x, t2.ymax = this.y);
  }
  queryLooseEnvelope(t2) {
    this.queryEnvelope(t2);
  }
  queryInterval(t2, e) {
    const s3 = new x2();
    if (this.isEmpty()) return s3.setEmpty(), s3;
    const i = this.getAttributeAsDbl(t2, e);
    return s3.vmin = i, s3.vmax = i, s3;
  }
  applyTransformation(t2) {
    if (!this.isEmpty()) {
      if (1 === t2.m_TransformationType) {
        const e = this.getXY();
        return t2.transformInPlace(e), void this.setXY(e);
      }
      z("3d not impl");
    }
  }
  transformAttribute(t2, e, s3, i, n4) {
    if (this.isEmpty()) return;
    this.addAttribute(t2);
    const r = this.getAttributeAsDbl(t2, e), h2 = Dt2(s3, i, n4);
    this.setAttributeBasic(t2, e, h2(r));
  }
  createInstance() {
    return new _se({ vd: this.m_description });
  }
  copyTo(t2) {
    if (this === t2) return;
    t2.getGeometryType() !== a.enumPoint && P();
    const e = t2;
    e.x = this.x, e.y = this.y, this.m_attribs ? (e.assignVertexDescription(this.m_description), e.m_attribs = this.m_attribs.slice()) : (e.releaseAttributes(), e.assignVertexDescription(this.m_description));
  }
  isEmpty() {
    return Number.isNaN(this.x) || Number.isNaN(this.y);
  }
  setEmpty() {
    this.m_description || (this.m_description = M(), this.releaseAttributes()), this.x = Number.NaN, this.y = Number.NaN, this.m_attribs && Dt(this.m_attribs, this.m_description.getDefaultPointAttributes(), 0, 2, this.m_description.getTotalComponentCount() - 2);
  }
  calculateArea2D() {
    return 0;
  }
  calculateLength2D() {
    return 0;
  }
  calculateLength3D(t2) {
    return 0;
  }
  equals(t2, e) {
    if (t2 === this) return true;
    if (t2.getGeometryType() !== a.enumPoint) return false;
    const s3 = t2;
    if (this.m_description !== s3.m_description) return false;
    if (this.isEmpty() !== s3.isEmpty()) return false;
    if (this.isEmpty()) return true;
    if (void 0 === e && (e = 0), Math.abs(this.x - s3.x) > e) return false;
    if (Math.abs(this.y - s3.y) > e) return false;
    for (let n4 = 0, r = this.m_description.getTotalComponentCount() - 2; n4 < r; n4++) if (!cs(this.m_attribs[n4], s3.m_attribs[n4], e)) return false;
    return true;
  }
  getBoundary() {
    return null;
  }
  clone() {
    const t2 = new _se({ vd: this.m_description });
    return this.copyTo(t2), t2;
  }
  swap(t2) {
    if (this === t2) return;
    t2.getGeometryType() !== a.enumPoint && P("wrong geometry type");
    const e = t2;
    e.m_description = Pt(this.m_description, this.m_description = e.m_description), e.x = Pt(this.x, this.x = e.x), e.y = Pt(this.y, this.y = e.y), e.m_attribs = Pt(this.m_attribs, this.m_attribs = e.m_attribs);
  }
  replaceNaNs(t2, e) {
    if (this.addAttribute(t2), this.isEmpty()) return;
    const s3 = ee.getComponentCount(t2);
    for (let i = 0; i < s3; i++) {
      const s4 = this.getAttributeAsDbl(t2, i);
      Number.isNaN(s4) && this.setAttributeBasic(t2, i, e);
    }
  }
  lerp(t2, e, s3) {
    if (t2.getDescription() !== e.getDescription() && P("Point.lerp"), this.assignVertexDescription(t2.getDescription()), t2.isEmpty() || e.isEmpty()) return this.setEmpty(), this;
    this.ensureAttributes();
    const i = B();
    t2.queryValues(i, i.length);
    const n4 = B();
    e.queryValues(n4, n4.length);
    const r = B();
    let h2 = i, o = n4;
    const a2 = r;
    let m = 0;
    for (let l2 = 0, u = this.m_description.getAttributeCount(); l2 < u; l2++) {
      const t3 = this.m_description.getSemantics(l2), e2 = ee.getInterpolation(t3), i2 = ee.getComponentCount(t3), n5 = ee.getDefaultValue(t3);
      wt(e2, h2, o, a2, m, i2, s3, n5), h2 = h2.slice(i2), o = o.slice(i2), m += i2;
    }
    return this.setValues(r, m), this;
  }
  static lerp(t2, e, s3, i) {
    i.lerp(t2, e, s3);
  }
  setDefaultAttributeValues() {
    const t2 = this.m_description.getTotalComponentCount() - 2;
    t2 > 0 && (this.m_attribs ? Dt(this.m_attribs, this.m_description.getDefaultPointAttributes(), 0, 2, t2) : this.m_attribs = this.m_description.getDefaultPointAttributes().slice(2));
  }
  static sqrDistance2D(t2, e) {
    return mi.sqrDistanceCoords(t2.x, t2.y, e.x, e.y);
  }
  getImpl() {
    return this;
  }
  mergeVertexDescriptionImpl(t2) {
    const e = H2(this.getDescription(), t2);
    this.assignVertexDescription(e);
  }
  releaseAttributes() {
    this.m_attribs = null;
  }
  assignVertexDescriptionImpl(t2) {
    this.m_description || (this.m_description = M());
    const e = S();
    Y2(t2, this.m_description, e);
    let s3 = null;
    t2.getTotalComponentCount() - 2 > 0 && (s3 = t2.getDefaultPointAttributes().slice(2));
    for (let i = 1, n4 = t2.getAttributeCount(); i < n4; i++) {
      const n5 = e[i];
      if (-1 !== n5) {
        const e2 = this.m_description.getPointAttributeOffset(n5) - 2, r = t2.getPointAttributeOffset(i) - 2, h2 = ee.getComponentCount(t2.getSemantics(i));
        for (let t3 = 0; t3 < h2; t3++) s3[r + t3] = this.m_attribs[e2 + t3];
      }
    }
    this.m_attribs = s3, this.m_description = t2;
  }
  ensureAttributes() {
    this.m_description.getTotalComponentCount() - 2 > 0 && null === this.m_attribs && (this.m_attribs = this.m_description.getDefaultPointAttributes().slice(2));
  }
  queryValues(t2, e) {
    const s3 = this.m_description.getTotalComponentCount();
    n(s3 <= e), t2[0] = this.x, t2[1] = this.y, Dt(t2, this.m_attribs, 2, 0, s3 - 2);
  }
  copyCommonAttributesTo(t2) {
    t2.x = this.x, t2.y = this.y;
    const e = t2.getDescription();
    if (e === this.m_description) this.m_attribs && Dt(t2.m_attribs, this.m_attribs, 0, 0, this.m_description.getTotalComponentCount() - 2);
    else {
      let s3 = 0;
      for (let i = 1, n4 = e.getAttributeCount(); i < n4; i++) {
        const n5 = e.getSemantics(i);
        let r = ee.getComponentCount(n5);
        if (this.m_description.hasAttribute(n5)) {
          let e2 = this.m_description.getPointAttributeOffset(this.m_description.getAttributeIndex(n5)) - 2;
          for (; 0 !== r; ) t2.m_attribs[s3++] = this.m_attribs[e2++], r--;
        } else {
          const e2 = ee.getDefaultValue(n5);
          for (; 0 !== r; ) t2.m_attribs[s3++] = e2, r--;
        }
      }
    }
  }
  setValues(t2, e) {
    const s3 = this.m_description.getTotalComponentCount();
    n(s3 <= e), this.x = t2[0], this.y = t2[1], Dt(this.m_attribs, t2, 0, 2, s3 - 2);
  }
  dbgDefaultAttribs() {
  }
  toFlatGeometry() {
    const t2 = Float64Array.of(this.getX(), this.getY(), this.getZ(), this.getM());
    return __spreadValues({ type: "point", vertexCount: 1, vertexXY: t2.subarray(0, 2), vertexZ: this.hasAttribute(1) ? t2.subarray(2, 3) : void 0, vertexM: this.hasAttribute(2) ? t2.subarray(3, 4) : void 0 }, ot);
  }
};
se.type = a.enumPoint;
var ie = z2;
function ne(t2, e) {
  return e * (t2.getTotalComponentCount() - 2);
}
var re = class {
  constructor(t2) {
    if (this.m_attributes = null, t2) if (void 0 !== t2.xmin) this.m_envelope2D = new n3(t2.xmin, t2.ymin, t2.xmax, t2.ymax);
    else if (void 0 !== t2.env2D) this.m_envelope2D = new n3(t2.env2D);
    else if (t2.move) this.m_envelope2D = new n3(t2.move.m_envelope2D), this.m_attributes = t2.move.m_attributes, t2.move.m_attributes = null;
    else {
      if (!t2.moveEnv) throw new Error("unrecognized EnvelopeData constructor options");
      {
        const e = t2.moveEnv.accessEnvelopeData();
        this.m_envelope2D = new n3(e.m_envelope2D), this.m_attributes = e.m_attributes, e.m_attributes = null;
      }
    }
    else this.m_envelope2D = n3.constructEmpty();
  }
  ensureAttributes(t2) {
    const s3 = t2.getTotalComponentCount() - 2;
    !this.m_attributes && s3 && (this.m_attributes = Yt(2 * s3, Number.NaN), this.m_attributes.fill(Number.NaN));
  }
  copyTo(t2, s3) {
    const i = s3, n4 = t2.getTotalComponentCount() - 2;
    if (i.m_description !== t2 && (i.releaseAttributes_(), i.m_description = t2, n4 && (i.m_data.m_attributes = Yt(2 * n4, Number.NaN))), n4) {
      n(this.m_attributes && i.m_data.m_attributes);
      const t3 = 2 * n4;
      Dt(i.m_data.m_attributes, this.m_attributes, 0, 0, t3);
    }
    i.m_data.m_envelope2D = new n3(this.m_envelope2D);
  }
  copyToIfNotNull(t2, e) {
    e.m_envelope2D = new n3(this.m_envelope2D), e.releaseAttributes();
    t2.getTotalComponentCount() - 2 && this.m_attributes && (e.m_attributes = this.m_attributes.slice());
  }
  releaseAttributes() {
    this.m_attributes = null;
  }
  isEmpty() {
    return this.m_envelope2D.isEmpty();
  }
  transformAttribute(t2, e, s3, i, n4) {
    n(0);
  }
  queryInterval(t2, e, s3, i) {
    if (this.isEmpty()) return void i.setEmpty();
    if (0 === e) return void (0 === s3 ? this.m_envelope2D.queryIntervalX(i) : 1 === s3 ? this.m_envelope2D.queryIntervalY(i) : A(""));
    const n4 = ie.getComponentCount(e);
    (s3 < 0 || s3 >= n4) && A("");
    const r = t2.getAttributeIndex(e);
    if (r >= 0) return i.vmin = this.m_attributes[ne(t2, 0) + t2.getPointAttributeOffset(r) - 2 + s3], void (i.vmax = this.m_attributes[ne(t2, 1) + t2.getPointAttributeOffset(r) - 2 + s3]);
    {
      const t3 = ie.getDefaultValue(e);
      return void i.setCoords(t3, t3);
    }
  }
  queryEnvelope3D(t2, e) {
    const s3 = new x2();
    this.queryInterval(t2, 1, 0, s3), e.setCoords(this.m_envelope2D.xmin, this.m_envelope2D.ymin, s3.vmin, this.m_envelope2D.xmax, this.m_envelope2D.ymax, s3.vmax);
  }
  setEmpty(t2) {
    this.m_envelope2D.setEmpty();
    const s3 = t2.getTotalComponentCount() - 2;
    s3 && (this.m_attributes ? this.dbgAssertSize(s3) : this.m_attributes = Yt(2 * s3, Number.NaN), this.m_attributes.fill(Number.NaN));
  }
  dbgAssertSize(t2) {
  }
};
var he = class t {
  constructor(t2) {
    if (this.m_EnvelopeType = 4, this.m_description = M(), void 0 === t2) this.m_data = new re();
    else if (void 0 !== t2.vd) this.m_description = t2.vd, this.m_data = new re(), this.ensureAttributes_();
    else if (t2?.env2D) this.m_data = new re({ env2D: t2.env2D });
    else if (void 0 !== t2.xmin) this.m_data = new re({ xmin: t2.xmin, ymin: t2.ymin, xmax: t2.xmax, ymax: t2.ymax });
    else if (t2.copy) this.m_data = new re(), t2.copy.copyTo(this);
    else if (t2.move) this.m_description = t2.move.m_description, t2.move.m_description = null, this.m_data = new re({ move: t2.move.m_data });
    else {
      if (!t2.centerPoint) throw new Error("unrecognized Envelope constructor options");
      this.m_description = t2.centerPoint.getDescription(), this.m_data = new re(), this.ensureAttributes_(), this.setFromPoint(t2.centerPoint, t2.width, t2.height);
    }
  }
  accessEnvelopeData() {
    return this.m_description = null, this.m_data;
  }
  assignMove(t2) {
    return this === t2 || (this.m_description = t2.m_description, t2.m_description = null, this.m_data = new re({ move: t2.m_data })), this;
  }
  assignCopy(t2) {
    return this === t2 || t2.copyTo(this), this;
  }
  transformAttribute(t2, e, s3, i, n4) {
    n(0);
  }
  setAttributeBasic(t2, e, s3) {
    if (this.addAttribute(t2), this.m_data.isEmpty()) return;
    const i = this.queryInterval(t2, e);
    i.vmin = s3, i.vmax = s3, this.setIntervalEnvelope(t2, e, i);
  }
  mergeVertexDescriptionImpl(t2) {
    const e = H2(this.getDescription(), t2);
    this.assignVertexDescription(e);
  }
  asEnvelope2D() {
    return new n3(this.m_data.m_envelope2D);
  }
  assignVertexDescription(t2) {
    this.m_description !== t2 && this.assignVertexDescriptionImpl(t2);
  }
  getGeometryType() {
    return a.enumEnvelope;
  }
  getDimension() {
    return 2;
  }
  getXMin() {
    return this.m_data.m_envelope2D.xmin;
  }
  getYMin() {
    return this.m_data.m_envelope2D.ymin;
  }
  getXMax() {
    return this.m_data.m_envelope2D.xmax;
  }
  getYMax() {
    return this.m_data.m_envelope2D.ymax;
  }
  width() {
    return this.m_data.isEmpty() ? Number.NaN : this.m_data.m_envelope2D.width();
  }
  height() {
    return this.m_data.isEmpty() ? Number.NaN : this.m_data.m_envelope2D.height();
  }
  getCenterXY() {
    return this.m_data.isEmpty() ? new mi() : this.m_data.m_envelope2D.getCenter();
  }
  getCenter(t2) {
    if (t2.assignVertexDescription(this.m_description), this.m_data.isEmpty()) return void t2.setEmpty();
    const e = this.m_description.getAttributeCount();
    for (let s3 = 1; s3 < e; s3++) {
      const e2 = this.m_description.getSemantics(s3), i = ie.getComponentCount(e2);
      for (let s4 = 0; s4 < i; s4++) {
        const i2 = 0.5 * (this.getAttributeAsDblImpl(0, e2, s4) + this.getAttributeAsDblImpl(1, e2, s4));
        t2.setAttributeBasic(e2, s4, i2);
      }
    }
    t2.setXY(this.m_data.m_envelope2D.getCenter());
  }
  setCoords(t2, e, s3, i) {
    this.m_data.m_envelope2D.setCoords({ xmin: t2, ymin: e, xmax: s3, ymax: i });
  }
  setEnvelope(t2) {
    if (t2 instanceof n3) this.m_data.m_envelope2D = new n3(t2), this.m_data.m_envelope2D.normalize();
    else {
      this.addAttribute(1), this.m_data.m_envelope2D = t2.getEnvelope2D(), this.m_data.m_envelope2D.normalize();
      const e = x2.constructEmpty();
      e.setCoords(t2.zmin, t2.zmax), this.setInterval(1, 0, e.vmin, e.vmax);
    }
  }
  merge(e) {
    if (e instanceof n3) return e.isValid() || P(""), void this.m_data.m_envelope2D.mergeEnvelope2D(e);
    if (e instanceof t) {
      if (e.m_data.isEmpty()) return;
      const t2 = e.getDescription();
      this.mergeVertexDescription(t2), this.m_data.m_envelope2D.mergeEnvelope2D(e.m_data.m_envelope2D);
      for (let s3 = 1, i = t2.getAttributeCount(); s3 < i; s3++) {
        const i2 = t2.getSemantics(s3), n4 = ie.getComponentCount(i2);
        for (let t3 = 0; t3 < n4; t3++) {
          const s4 = e.queryInterval(i2, t3), n5 = this.queryInterval(i2, t3);
          n5.merge(s4), this.setIntervalEnvelope(i2, t3, n5);
        }
      }
      return;
    }
    if (e instanceof se) {
      const t2 = e;
      if (t2.isEmpty()) return;
      const s3 = t2.getDescription();
      if (this.mergeVertexDescription(s3), this.m_data.isEmpty()) return void this.setFromPoint(t2);
      this.m_data.m_envelope2D.merge(t2.getXY());
      for (let e2 = 1, i = s3.getAttributeCount(); e2 < i; e2++) {
        const i2 = s3.getSemantics(e2), n4 = ie.getComponentCount(i2);
        for (let e3 = 0; e3 < n4; e3++) {
          const s4 = t2.getAttributeAsDbl(i2, e3), n5 = this.queryInterval(i2, e3);
          n5.mergeCoordinate(s4), this.setIntervalEnvelope(i2, e3, n5);
        }
      }
      return;
    }
    z("unrecognized type for envelope.merge");
  }
  intersect(t2) {
    if (!this.m_data.m_envelope2D.intersect(t2.m_data.m_envelope2D)) return this.setEmpty(), false;
    const e = t2.getDescription();
    this.mergeVertexDescription(e);
    for (let s3 = 1, i = this.m_description.getAttributeCount(); s3 < i; s3++) {
      const e2 = this.m_description.getSemantics(s3), i2 = ie.getComponentCount(e2);
      for (let s4 = 0; s4 < i2; s4++) {
        const i3 = t2.queryInterval(e2, s4), n4 = this.queryInterval(e2, s4);
        n4.intersect(i3), this.setIntervalEnvelope(e2, s4, n4);
      }
    }
    return true;
  }
  intersectCommonAttributes(t2) {
    if (!this.m_data.m_envelope2D.intersect(t2.m_data.m_envelope2D)) return this.setEmpty(), false;
    const e = t2.getDescription();
    for (let s3 = 1, i = this.m_description.getAttributeCount(); s3 < i; s3++) {
      const i2 = this.m_description.getSemantics(s3);
      if (!e.hasAttribute(i2)) continue;
      const n4 = ie.getComponentCount(i2);
      for (let e2 = 0; e2 < n4; e2++) {
        const s4 = t2.queryInterval(i2, e2), n5 = this.queryInterval(i2, e2);
        n5.intersect(s4), this.setIntervalEnvelope(i2, e2, n5);
      }
    }
    return true;
  }
  move(t2, e) {
    this.m_data.m_envelope2D.move(t2, e);
  }
  centerAt(t2, e) {
    this.m_data.m_envelope2D.centerAtCoords(t2, e);
  }
  centerAtPoint(t2) {
    this.m_data.m_envelope2D.centerAt(t2);
  }
  reaspect(t2, e) {
    this.m_data.m_envelope2D.reaspect(t2, e);
  }
  inflateCoords(t2, e) {
    this.m_data.m_envelope2D.inflateCoords(t2, e);
  }
  containsCoords(t2, e) {
    return this.m_data.m_envelope2D.containsCoords(t2, e);
  }
  contains(t2) {
    return this.m_data.m_envelope2D.contains(t2);
  }
  containsPoint(t2) {
    return !t2.isEmpty() && this.m_data.m_envelope2D.contains(t2.getXY());
  }
  containsEnvelope(t2) {
    return this.m_data.m_envelope2D.containsEnvelope(t2.m_data.m_envelope2D);
  }
  setIntervalEnvelope(t2, e, s3) {
    if (this.addAttribute(t2), this.m_data.isEmpty()) return;
    const i = new x2(s3);
    if (i.normalize(), 0 === t2) {
      if (i.isEmpty()) return void this.setEmpty();
      0 === e ? (this.m_data.m_envelope2D.xmin = i.vmin, this.m_data.m_envelope2D.xmax = i.vmax) : 1 === e ? (this.m_data.m_envelope2D.ymin = i.vmin, this.m_data.m_envelope2D.ymax = i.vmax) : A("");
    } else this.setAttributeAsDblImpl(0, t2, e, i.vmin), this.setAttributeAsDblImpl(1, t2, e, i.vmax);
  }
  setInterval(t2, e, s3, i) {
    this.setIntervalEnvelope(t2, e, new x2(s3, i));
  }
  queryInterval(t2, e) {
    const s3 = new x2();
    return this.m_data.queryInterval(this.m_description, t2, e, s3), s3;
  }
  queryEnvelope(t2) {
    2 !== t2.m_EnvelopeType ? 3 !== t2.m_EnvelopeType ? 4 !== t2.m_EnvelopeType ? z("unrecognized type for queryEnveloper") : this.copyTo(t2) : this.m_data.queryEnvelope3D(this.m_description, t2) : t2.setCoords({ env2D: this.m_data.m_envelope2D });
  }
  applyTransformation(t2) {
    1 !== t2.m_TransformationType ? n(0) : t2.transformEnvInPlace(this.m_data.m_envelope2D);
  }
  createInstance() {
    return new t({ vd: this.m_description });
  }
  copyTo(t2) {
    t2 !== this && this.m_data.copyTo(this.m_description, t2);
  }
  isEmpty() {
    return this.m_data.isEmpty();
  }
  setEmpty() {
    this.m_description || (this.m_description = M()), this.m_data.setEmpty(this.m_description);
  }
  calculateArea2D() {
    return this.m_data.m_envelope2D.getArea();
  }
  calculateLength2D() {
    return this.m_data.m_envelope2D.getLength();
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  equals(t2, e) {
    if (t2 === this) return true;
    const s3 = t2;
    if (this.m_description !== s3.m_description) return false;
    if (this.m_data.isEmpty() !== s3.m_data.isEmpty()) return false;
    if (this.m_data.isEmpty()) return true;
    if (void 0 === e && (e = 0), Math.abs(this.m_data.m_envelope2D.xmin - s3.m_data.m_envelope2D.xmin) > e) return false;
    if (Math.abs(this.m_data.m_envelope2D.ymin - s3.m_data.m_envelope2D.ymin) > e) return false;
    if (Math.abs(this.m_data.m_envelope2D.xmax - s3.m_data.m_envelope2D.xmax) > e) return false;
    if (Math.abs(this.m_data.m_envelope2D.ymax - s3.m_data.m_envelope2D.ymax) > e) return false;
    for (let n4 = 0, r = 2 * (this.m_description.getTotalComponentCount() - 2); n4 < r; n4++) if (!cs(this.m_data.m_attributes[n4], s3.m_data.m_attributes[n4], e)) return false;
    return true;
  }
  getBoundary() {
    return z("getBoundary not available in this context. Use the boundary operator with an envelope parameter"), null;
  }
  clone() {
    return new t({ copy: this });
  }
  swap(t2) {
    if (this === t2) return;
    t2.getGeometryType() !== a.enumEnvelope && P("wrong geometry type");
    const e = t2;
    e.m_description = Pt(this.m_description, this.m_description = e.m_description), e.m_data.m_envelope2D = Pt(this.m_data.m_envelope2D, this.m_data.m_envelope2D = e.m_data.m_envelope2D), e.m_data.m_attributes = Pt(this.m_data.m_attributes, this.m_data.m_attributes = e.m_data.m_attributes);
  }
  queryCoordinates(t2) {
    this.m_data.isEmpty() && P(""), this.m_data.m_envelope2D.queryCorners(t2);
  }
  queryCornerByVal(t2, e) {
    (t2 < 0 || t2 > 3) && A(""), e.assignVertexDescription(this.m_description);
    const s3 = this.getDescription().getAttributeCount();
    for (let i = 1; i < s3; i++) {
      const s4 = this.m_description.getSemantics(i), n4 = ie.getComponentCount(s4);
      for (let i2 = 0; i2 < n4; i2++) e.setAttributeBasic(s4, i2, this.getAttributeAsDblImpl(t2 % 2, s4, i2));
    }
    e.setXY(this.m_data.m_envelope2D.queryCorner(t2));
  }
  queryCorner(t2, e) {
    e.assign(this.m_data.m_envelope2D.queryCorner(t2));
  }
  getDescription() {
    return this.m_description;
  }
  mergeVertexDescription(t2) {
    this.m_description !== t2 && (this.m_description && this.m_description.hasAttributesFrom(t2) || this.mergeVertexDescriptionImpl(t2));
  }
  hasAttribute(t2) {
    return this.m_description.hasAttribute(t2);
  }
  addAttribute(t2) {
    if (this.m_description.hasAttribute(t2)) return;
    const e = V2(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAttribute(t2) {
    if (!this.m_description.hasAttribute(t2)) return;
    const e = k3(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAllAttributes() {
    const t2 = M();
    t2 !== this.m_description && this.assignVertexDescription(t2);
  }
  queryLooseEnvelope(t2) {
    this.queryEnvelope(t2);
  }
  replaceNaNs(t2, e) {
    if (this.addAttribute(t2), this.m_data.isEmpty()) return;
    const s3 = ie.getComponentCount(t2);
    for (let i = 0; i < s3; i++) {
      const s4 = this.queryInterval(t2, i);
      s4.isEmpty() && (s4.vmin = e, s4.vmax = e, this.setIntervalEnvelope(t2, i, s4));
    }
  }
  getImpl() {
    return this;
  }
  setFromPoint(t2, e, s3) {
    this.m_data.m_envelope2D.setCoords({ center: t2.getXY(), width: e ?? 0, height: s3 ?? 0 });
    const i = t2.getDescription();
    for (let n4 = 1, r = i.getAttributeCount(); n4 < r; n4++) {
      const e2 = i.getSemantics(n4), s4 = ie.getComponentCount(e2);
      for (let i2 = 0; i2 < s4; i2++) {
        const s5 = t2.getAttributeAsDbl(e2, i2);
        this.setInterval(e2, i2, s5, s5);
      }
    }
  }
  assignVertexDescriptionImpl(t2) {
    const s3 = S();
    Y2(t2, this.m_description, s3);
    let i = null;
    const n4 = t2.getTotalComponentCount() - 2, r = this.m_description ? this.m_description.getTotalComponentCount() - 2 : 0;
    n4 > 0 && (i = Yt(2 * n4, Number.NaN));
    for (let e = 1; e < t2.getAttributeCount(); e++) {
      const h2 = s3[e];
      if (-1 !== h2) {
        const s4 = t2.getPointAttributeOffset(e) - 2, o = ie.getComponentCount(t2.getSemantics(e)), a2 = this.m_description.getPointAttributeOffset(h2) - 2;
        Dt(i, this.m_data.m_attributes, s4, a2, o), Dt(i, this.m_data.m_attributes, n4 + s4, r + a2, o);
      }
    }
    this.releaseAttributes_(), this.m_data.m_attributes = i, this.m_description = t2;
  }
  getAttributeAsDblImpl(t2, e, s3) {
    if (this.m_data.isEmpty() && x(""), 0 === e) return t2 ? s3 ? this.m_data.m_envelope2D.ymax : this.m_data.m_envelope2D.xmax : s3 ? this.m_data.m_envelope2D.ymin : this.m_data.m_envelope2D.xmin;
    s3 >= ie.getComponentCount(e) && A("");
    const i = this.m_description.getAttributeIndex(e);
    return i >= 0 ? this.m_data.m_attributes[ne(this.m_description, t2) + this.m_description.getPointAttributeOffset(i) - 2 + s3] : z2.getDefaultValue(e);
  }
  setAttributeAsDblImpl(t2, e, s3, i) {
    0 === e && (t2 ? 1 === s3 ? this.m_data.m_envelope2D.ymax = i : 0 === s3 ? this.m_data.m_envelope2D.xmax = i : A("") : 1 === s3 ? this.m_data.m_envelope2D.ymin = i : 0 === s3 ? this.m_data.m_envelope2D.xmin = i : A(""));
    const n4 = ie.getComponentCount(e);
    (s3 < 0 || s3 >= n4) && A(""), this.addAttribute(e);
    const r = this.m_description.getAttributeIndex(e);
    this.m_data.m_attributes[ne(this.m_description, t2) + this.m_description.getPointAttributeOffset(r) - 2 + s3] = i;
  }
  releaseAttributes_() {
    this.m_data.releaseAttributes();
  }
  ensureAttributes_() {
    this.m_data.ensureAttributes(this.m_description);
  }
};
he.type = a.enumEnvelope;
var oe = Object.freeze(Object.defineProperty({ __proto__: null, Envelope: he, EnvelopeData: re }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/MultiPathImpl.js
var de = class {
  constructor() {
    this.posStream = null, this.streams = null;
  }
  get(t2) {
    return t2 > 0 ? this.streams[t2 - 1] : this.posStream;
  }
  set(t2, e) {
    t2 > 0 ? this.streams[t2 - 1] = e : this.posStream = e;
  }
  destroyAndSetSize(t2) {
    if (this.streams = null, t2 > 1) {
      this.streams = new Array(t2 - 1);
      for (let e = 0; e < t2 - 1; ++e) this.streams[e] = null;
    }
    this.posStream = null;
  }
  swap(t2) {
    [this.streams, t2.streams] = [t2.streams, this.streams], [this.posStream, t2.posStream] = [t2.posStream, this.posStream];
  }
  empty() {
    return null === this.posStream && null === this.streams;
  }
};
function _e(t2, s3, n4, i, r) {
  (s3 < 0 || n4 < 0 || i < 1 || s3 + i * (n4 - 1) + 1 > t2.size()) && P("Index out of bound");
  for (let e = s3, o = s3 + i * (n4 - 1) + 1; e < o; e += i) t2.writeAsDbl(e, r(t2.readAsDbl(e)));
}
function pe(t2, e, s3) {
  if (t2) for (let n4 = e.length - 1; n4 >= 0; --n4) s3(e[n4]);
  else e.forEach(s3);
}
function fe(t2, e) {
  let s3 = Ss(t2);
  const n4 = e.length / ds();
  for (let i = 0; i < e.length; ++i) {
    const t3 = Math.trunc(s3 * n4);
    s3 = Ss(s3);
    const i2 = Math.trunc(s3 * n4), r = e[t3];
    e[t3] = e[i2], e[i2] = r;
  }
}
function ve(t2, e, s3) {
  const n4 = t2.getDescription().getTotalComponentCount();
  t2.setX(e[0]), t2.setY(e[1]), Dt(t2.getAttributeArray(), e, 0, 2, n4 - 2);
}
var be = z2;
var Se = "can not assign an empty point to a vertex";
var Ee = class {
  constructor(t2) {
    if (this.m_accelerators = null, void 0 !== t2 && t2.move) this.m_description = t2.move.m_description, t2.move.m_description = M(), this.m_vertexAttributes = t2.move.m_vertexAttributes, t2.move.m_vertexAttributes = new de(), this.m_envelopeData = t2.move.m_envelopeData, t2.move.m_envelopeData = new re(), this.m_pointCount = t2.move.m_pointCount, this.m_reservedPointCount = t2.move.m_reservedPointCount, this.m_flags = t2.move.m_flags, this.m_bFillRule = t2.move.m_bFillRule, this.m_bPathStarted = t2.move.m_bPathStarted, this.m_bPolygon = t2.move.m_bPolygon, this.m_simpleTolerance = t2.move.m_simpleTolerance;
    else {
      const e = void 0 !== t2 && t2.vd ? t2.vd : M();
      this.m_description = e, this.m_vertexAttributes = new de(), this.m_envelopeData = new re(), this.m_pointCount = 0, this.m_reservedPointCount = -1, this.m_flags = 4063, this.m_bFillRule = this.m_bPathStarted = this.m_bPolygon = false, this.m_simpleTolerance = 0, void 0 !== t2 && t2.copy && t2.copy.copyTo(this);
    }
  }
  equalsBase(e, s3) {
    if (!y(e.getGeometryType())) return false;
    const n4 = e;
    if (this === n4) return true;
    if (!this.m_description.equals(n4.getDescription())) return false;
    if (this.isEmptyImpl() !== n4.isEmptyImpl()) return false;
    if (this.isEmptyImpl()) return true;
    const i = this.getPointCount();
    if (i !== n4.getPointCount()) return false;
    for (let t2 = 0; t2 < this.m_description.getAttributeCount(); t2++) {
      const e2 = this.m_description.getSemantics(t2), r = this.getAttributeStreamRef(e2), o = n4.getAttributeStreamRef(e2), a2 = be.getComponentCount(e2);
      if (!r.equals(o, 0, i * a2, s3)) return false;
    }
    if (s3) {
      if (!this.equalsImplTol(e, s3)) return false;
    } else if (!this.equalsImpl(e)) return false;
    return true;
  }
  transformAttribute(t2, s3, n4, i, r) {
    if (this.addAttribute(t2), !this.isEmpty() && (0 !== n4 || 1 !== i)) {
      if (0 === t2) {
        const t3 = new x3();
        return 0 === r ? 0 === s3 ? (t3.setShiftCoords(n4, 0), t3.scale(i, 1)) : 1 === s3 ? (t3.setShiftCoords(0, n4), t3.scale(1, i)) : P("") : 0 === s3 ? (t3.setScaleCoords(1 / i, 1), t3.shiftCoords(-n4, 0)) : 1 === s3 ? (t3.setScaleCoords(1, 1 / i), t3.shiftCoords(0, -n4)) : P(""), void this.applyTransformation(t3);
      }
      _e(this.getAttributeStreamRef(t2), s3, this.getPointCount(), be.getComponentCount(t2), Dt2(n4, i, r)), this.notifyModified();
    }
  }
  getDescription() {
    return this.m_description;
  }
  assignVertexDescription(t2) {
    this.m_description !== t2 && this.assignVertexDescriptionImpl(t2);
  }
  mergeVertexDescriptionImpl(t2) {
    const e = this.getDescription(), s3 = H2(e, t2);
    this.assignVertexDescription(s3);
  }
  mergeVertexDescription(t2) {
    this.m_description !== t2 && (this.m_description.hasAttributesFrom(t2) || this.mergeVertexDescriptionImpl(t2));
  }
  hasAttribute(t2) {
    return this.m_description.hasAttribute(t2);
  }
  addAttribute(t2) {
    if (this.m_description.hasAttribute(t2)) return;
    const e = V2(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAttribute(t2) {
    if (!this.m_description.hasAttribute(t2)) return;
    const e = k3(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAllAttributes() {
    const t2 = M();
    t2 !== this.m_description && this.assignVertexDescription(t2);
  }
  getAttributeStreamRef(t2) {
    this.throwIfEmpty(), this.m_description.hasAttribute(t2) || P("AttributeStream : Geometry does not have the attribute");
    const s3 = this.m_description.getAttributeIndex(t2);
    return this.m_vertexAttributes.get(s3);
  }
  setAttributeStreamRef(t2, s3) {
    s3 || P("stream"), s3 && be.getPersistence(t2) !== s3.getPersistence() && P(""), this.addAttribute(t2);
    const n4 = this.m_description.getAttributeIndex(t2);
    this.m_vertexAttributes.empty() && this.m_vertexAttributes.destroyAndSetSize(this.m_description.getAttributeCount()), this.m_vertexAttributes.set(n4, s3), this.notifyModifiedFlags(2001);
  }
  notifyModifiedFlags(t2) {
    65535 === t2 && (this.m_reservedPointCount = -1, this.notifyModifiedAllImpl()), this.setDirtyFlagProtected(t2, true), this.clearAccelerators(), 32 & t2 && this.verifyAllStreamsAfterSizeChange();
  }
  notifyModified() {
    this.notifyModifiedFlags(2001);
  }
  getPointCount() {
    return this.m_pointCount;
  }
  getPointByVal(t2, e) {
    const s3 = e;
    s3.assignVertexDescription(this.m_description);
    for (let n4 = 0; n4 < this.m_description.getAttributeCount(); n4++) {
      const e2 = this.m_description.getSemantics(n4);
      for (let i = 0, r = be.getComponentCount(e2); i < r; i++) {
        const o = this.m_vertexAttributes.get(n4).readAsDbl(r * t2 + i);
        s3.setAttributeBasic(e2, i, o);
      }
    }
  }
  setPointByValNoCurves(t2, s3) {
    const n4 = s3;
    n4.isEmpty() && P(Se);
    const i = n4.getDescription();
    i !== this.m_description && this.mergeVertexDescription(i);
    const r = this.m_vertexAttributes.get(0);
    r.write(2 * t2, n4.getX()), r.write(2 * t2 + 1, n4.getY());
    for (let e = 1, o = this.m_description.getAttributeCount(); e < o; e++) {
      const s4 = this.m_description.getSemantics(e), i2 = be.getComponentCount(s4);
      for (let r2 = 0; r2 < i2; r2++) {
        const o2 = n4.getAttributeAsDbl(s4, r2);
        this.m_vertexAttributes.get(e).writeAsDbl(t2 * i2 + r2, o2);
      }
    }
    this.notifyModifiedFlags(2001);
  }
  setPointByValFromArrayNoCurves(t2, e, n4, i) {
    n(0);
  }
  getPointByValAsArray(t2, e, n4, i) {
    n(0);
  }
  isEmpty() {
    return this.isEmptyImpl();
  }
  isEmptyImpl() {
    return 0 === this.m_pointCount;
  }
  getAttributeAsDbl(t2, e, s3) {
    const i = be.getComponentCount(t2);
    s3 >= i && A("");
    const r = this.m_description.getAttributeIndex(t2);
    return r >= 0 ? this.m_vertexAttributes.get(r).readAsDbl(e * i + s3) : be.getDefaultValue(t2);
  }
  queryAttributeAsDbl(t2, e, s3, i) {
    const r = be.getComponentCount(t2);
    i < r && A("");
    const o = this.m_description.getAttributeIndex(t2);
    if (o >= 0) {
      const t3 = e * r, n4 = this.m_vertexAttributes.get(o);
      for (let e2 = 0; e2 < r; e2++) s3[e2] = n4.readAsDbl(t3 + e2);
    } else {
      const e2 = be.getDefaultValue(t2);
      for (let t3 = 0; t3 < r; t3++) s3[t3] = e2;
    }
  }
  getAttributeAsInt(t2, e, s3) {
    return Math.trunc(this.getAttributeAsDbl(t2, e, s3));
  }
  queryAttributeAsInt(t2, e, n4, i) {
    n(0);
  }
  setAttributeNoCurves(t2, e, s3, i) {
    const r = be.getComponentCount(t2);
    s3 >= r && A(""), this.addAttribute(t2);
    const o = this.m_description.getAttributeIndex(t2);
    this.notifyModifiedFlags(2001), this.m_vertexAttributes.get(o).writeAsDbl(e * r + s3, i);
  }
  setAttributeFromArrayNoCurves(t2, e, s3, i) {
    (e < 0 || e >= this.m_pointCount) && A("");
    const r = be.getComponentCount(t2);
    i < r && A(""), this.addAttribute(t2);
    const o = this.m_description.getAttributeIndex(t2);
    this.notifyModifiedFlags(2001);
    const a2 = this.m_vertexAttributes.get(o);
    for (let n4 = 0; n4 < r; ++n4) a2.writeAsDbl(e * r + n4, s3[n4]);
  }
  getXY(t2) {
    return this.m_vertexAttributes.get(0).readPoint2D(2 * t2);
  }
  queryXY(t2, e) {
    return this.m_vertexAttributes.get(0).queryPoint2D(2 * t2, e);
  }
  setXYNoCurves(t2, e) {
    this.m_vertexAttributes.get(0).writePoint2D(2 * t2, e), this.notifyModifiedFlags(2001);
  }
  setXYCoordsNoCurves(t2, e, s3) {
    const n4 = this.m_vertexAttributes.get(0);
    n4.write(2 * t2, e), n4.write(2 * t2 + 1, s3), this.notifyModifiedFlags(2001);
  }
  getXYZ(t2) {
    const e = this.m_vertexAttributes.get(0), s3 = X.getNAN();
    return s3.x = e.read(2 * t2), s3.y = e.read(2 * t2 + 1), this.m_description.hasAttribute(1) ? s3.z = this.m_vertexAttributes.get(1).read(t2) : s3.z = be.getDefaultValue(1), s3;
  }
  setXYZNoCurves(t2, e) {
    this.addAttribute(1), this.notifyModifiedFlags(2001);
    const s3 = this.m_vertexAttributes.get(0);
    s3.write(2 * t2, e.x), s3.write(2 * t2 + 1, e.y);
    this.m_vertexAttributes.get(1).write(t2, e.z);
  }
  queryEnvelope(t2) {
    t2 instanceof n3 || t2 instanceof G2 ? this.updateEnvelope(t2) : (this.updateAllDirtyIntervals(true), this.m_envelopeData.copyTo(this.m_description, t2));
  }
  queryLooseEnvelope(t2) {
    this.updateLooseEnvelope(t2);
  }
  queryInterval(t2, e) {
    const s3 = x2.constructEmpty();
    return this.isEmptyImpl() || (this.updateAllDirtyIntervals(true), this.m_envelopeData.queryInterval(this.m_description, t2, e, s3)), s3;
  }
  setAttributeBasic(t2, e, s3) {
    this.setAttributeImpl(t2, e, s3);
  }
  setAttributeImpl(t2, e, s3) {
    if (this.addAttribute(t2), this.isEmpty()) return;
    let n4 = false;
    const i = be.getComponentCount(t2), r = this.getAttributeStreamRef(t2), o = Number.isNaN(s3);
    if (1 === r.getPersistence()) {
      const t3 = r;
      for (let r2 = e, a2 = this.m_pointCount * i; r2 < a2; r2 += i) {
        const e2 = t3.read(r2);
        (o || e2 === s3) && Number.isNaN(e2) || (t3.write(r2, s3), n4 = true);
      }
    } else for (let a2 = e, h2 = this.m_pointCount * i; a2 < h2; a2 += i) {
      r.readAsDbl(a2) !== s3 && (r.writeAsDbl(a2, s3), n4 = true);
    }
    n4 && this.notifyModifiedFlags(2001);
  }
  replaceNaNs(t2, e) {
    if (this.addAttribute(t2), this.isEmpty()) return;
    let s3 = false;
    const n4 = be.getComponentCount(t2), i = this.getAttributeStreamRef(t2);
    for (let r = 0; r < n4; r++) if (1 === i.getPersistence()) {
      const t3 = i;
      for (let i2 = 0, r2 = this.m_pointCount * n4; i2 < r2; i2++) {
        const n5 = t3.read(i2);
        Number.isNaN(n5) && (t3.write(i2, e), s3 = true);
      }
    } else for (let t3 = 0, o = this.m_pointCount * n4; t3 < o; t3++) {
      const n5 = i.readAsDbl(t3);
      Number.isNaN(n5) && (i.writeAsDbl(t3, e), s3 = true);
    }
    s3 && this.notifyModifiedFlags(2001);
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  setEnvelopeForImport(t2) {
    this.m_description.equals(t2.getDescription()) || P(""), this.m_envelopeData = new re({ moveEnv: t2 }), this.setDirtyFlagProtected(192, false);
  }
  copyTo(t2) {
    t2.getGeometryType() !== this.getGeometryType() && P(""), this !== t2 && this.copyToUnchecked(t2, false);
  }
  queryCoordinates(t2, s3, n4, i) {
    let r = i < 0 ? this.m_pointCount : i;
    if (r = Math.min(r, n4 + s3), (n4 < 0 || r < n4 || this.m_pointCount > 0 && n4 >= this.m_pointCount) && P(""), 0 === this.m_pointCount) return r;
    const o = this.getAttributeStreamRef(0);
    for (let e = 2 * n4, a2 = 2 * r, h2 = 0; e < a2; e += 2, h2++) o.queryPoint2D(e, t2[h2]);
    return r;
  }
  queryCoordinates3D(t2, s3, n4, i) {
    let r = i < 0 ? this.m_pointCount : i;
    if (r = Math.min(r, n4 + s3), (n4 < 0 || r < n4 || this.m_pointCount > 0 && n4 >= this.m_pointCount) && P(""), 0 === this.m_pointCount) return r;
    const o = this.getAttributeStreamRef(0);
    let a2 = null;
    const h2 = be.getDefaultValue(1), u = this.m_description.hasAttribute(1);
    u && (a2 = this.getAttributeStreamRef(1));
    let m = 0;
    for (let e = n4; e < r; e++, m++) t2[m].x = o.read(2 * e), t2[m].y = o.read(2 * e + 1), t2[m].z = u ? a2.read(e) : h2;
    return r;
  }
  clearAndSetDirtyFlagProtected(t2, e) {
    let s3 = 0;
    const n4 = t2 & ~e, i = e | n4;
    s3 = this.m_flags, (s3 & i) !== e && (this.m_flags = s3 & ~n4 | e);
  }
  getIsSimple(t2, e) {
    e[0] = 0;
    let s3 = -1;
    const n4 = this.m_flags, i = this.m_simpleTolerance;
    if (!(1 & n4)) {
      s3 = (14 & n4) >> 1, e[0] = i, i < t2 && (s3 = -1);
    }
    return s3;
  }
  setIsSimple(t2, e, n4 = false) {
    if (2 === t2 ? n(this.getGeometryType() === a.enumPolyline) : 1 === t2 ? n(this.getGeometryType() === a.enumMultiPoint || this.getGeometryType() === a.enumPolyline) : 3 === t2 && n(this.getGeometryType() === a.enumPolygon), -1 === t2) this.setDirtyFlagProtected(17, true);
    else {
      let s3 = t2 << 1;
      n4 || (s3 |= 16);
      const i = 31;
      this.clearAndSetDirtyFlagProtected(i, s3), this.m_simpleTolerance !== e && (this.m_simpleTolerance = e);
    }
  }
  attributeStreamIsAllocated(t2) {
    this.throwIfEmpty();
    const e = this.m_description.getAttributeIndex(t2);
    return e >= 0 && null !== this.m_vertexAttributes.get(e);
  }
  capacity() {
    return -1 === this.m_reservedPointCount && 0 === this.m_pointCount ? 0 : this.m_reservedPointCount;
  }
  getDescriptionImpl() {
    return this.m_description;
  }
  copyToUnchecked(t2, e = false) {
    e && this.hasDirtyFlag(32) && T("Cannot do shallow clone on unprepared geometry");
    const n4 = t2, o = this.getGeometryType(), a2 = n4.getGeometryType();
    n(o === a2 || o === a.enumPolygon && a2 === a.enumPolyline, "failure in copyToUnchcked"), n4.clearAccelerators(), n4.m_description = this.m_description, n4.m_vertexAttributes.destroyAndSetSize(0), n4.m_envelopeData.releaseAttributes();
    const h2 = this.m_description.getAttributeCount(), u = new de();
    if (!this.m_vertexAttributes.empty()) {
      u.destroyAndSetSize(h2);
      for (let t3 = 0; t3 < h2; t3++) if (this.m_vertexAttributes.get(t3)) if (e) u.set(t3, this.m_vertexAttributes.get(t3));
      else {
        const e2 = be.getComponentCount(this.m_description.getSemantics(t3));
        u.set(t3, this.m_vertexAttributes.get(t3).restrictedClone(this.getPointCount() * e2));
      }
    }
    if (this.m_envelopeData.copyToIfNotNull(this.m_description, n4.m_envelopeData), n4.m_flags = this.m_flags, n4.m_simpleTolerance = this.m_simpleTolerance, o !== a2) {
      const t3 = [Number.NaN];
      n4.getIsSimple(0, t3) >= 3 ? n4.setIsSimple(1, t3[0]) : n4.setIsSimple(-1, 0);
    }
    n4.m_vertexAttributes.swap(u), u.destroyAndSetSize(0), n4.m_pointCount = this.m_pointCount, n4.hasDirtyFlag(32) || n4.m_vertexAttributes.empty() ? (n(!e || 0 === n4.m_pointCount), n4.m_reservedPointCount = -1) : n4.m_reservedPointCount = n4.m_pointCount;
    try {
      this.copyToImpl(n4, e);
    } catch (m) {
      throw n4.setEmpty(), m;
    }
    n4.verifyAllStreamsAfterSizeChange();
  }
  buildRasterizedGeometryAccelerator(t2, e) {
    return false;
  }
  getAccelerators() {
    return this.m_accelerators;
  }
  clearAccelerators() {
    this.m_accelerators && this.m_accelerators.release(), this.m_accelerators = null;
  }
  ensureUniqueAccelerators() {
    if (this.m_accelerators && !this.m_accelerators.uniqueUse()) {
      const t2 = this.m_accelerators.clone();
      this.m_accelerators.release(), this.m_accelerators = t2;
    }
  }
  interpolateTwoVertices(t2, e, i, r) {
    (t2 < 0 || t2 >= this.m_pointCount) && A(""), (e < 0 || e >= this.m_pointCount) && A(""), r.assignVertexDescription(this.m_description);
    const o = Yt(be.maxComponentCount(), Number.NaN), a2 = Yt(be.maxComponentCount(), Number.NaN), h2 = B();
    let u = 0;
    for (let n4 = 0; n4 < this.m_description.getAttributeCount(); n4++) {
      const r2 = this.m_description.getSemantics(n4), m = be.getInterpolation(r2), l2 = be.getComponentCount(r2), c = be.getDefaultValue(r2);
      this.queryAttributeAsDbl(r2, t2, o, l2), this.queryAttributeAsDbl(r2, e, a2, l2), n(u + l2 <= w2), wt(m, o, a2, h2, u, l2, i, c), u += l2;
    }
    ve(r, h2);
  }
  getShortestDistance(t2, e) {
    return mi.distance(this.getXY(t2), this.getXY(e));
  }
  getShortestSqrDistance(t2, e) {
    return mi.sqrDistance(this.getXY(t2), this.getXY(e));
  }
  resizeImpl(t2) {
    if (t2 < 0 && P(), (t2 = Math.ceil(t2)) === this.m_pointCount) return;
    this.m_pointCount = t2;
    const s3 = this.m_pointCount <= this.m_reservedPointCount ? 2001 : 4095;
    this.notifyModifiedFlags(s3);
  }
  assignVertexDescriptionImpl(t2) {
    if (!this.m_vertexAttributes.empty()) {
      const e = S();
      Y2(t2, this.m_description, e);
      const s3 = new de();
      s3.destroyAndSetSize(t2.getAttributeCount());
      for (let n4 = 0; n4 < t2.getAttributeCount(); n4++) {
        const t3 = e[n4];
        -1 !== t3 ? s3.set(n4, this.m_vertexAttributes.get(t3)) : this.m_reservedPointCount = -1;
      }
      s3.swap(this.m_vertexAttributes);
    }
    this.m_description = t2, this.m_envelopeData.releaseAttributes(), this.notifyModifiedFlags(4095);
  }
  hasDirtyFlag(t2) {
    return 0 !== (this.m_flags & t2);
  }
  setDirtyFlagProtected(t2, e) {
    e ? this.m_flags |= t2 : this.m_flags &= ~t2;
  }
  notifyModifiedAllImpl() {
  }
  verifyAllStreamsAfterSizeChange() {
    this.hasDirtyFlag(32) && this.verifyAllStreamsAfterSizeChangeImpl();
  }
  verifyAllStreamsAfterSizeChangeImpl() {
    if (this.hasDirtyFlag(32)) {
      if (this.m_reservedPointCount < this.m_pointCount) {
        this.m_vertexAttributes.empty() && this.m_vertexAttributes.destroyAndSetSize(this.m_description.getAttributeCount()), this.m_reservedPointCount = -1;
        let t2 = Number.MAX_SAFE_INTEGER, e = 0;
        e = this.m_pointCount < 4 ? 3 : this.m_pointCount <= 128 ? 2 * this.m_pointCount : Math.trunc((4 * this.m_pointCount + 2) / 3);
        for (let s3 = 0; s3 < this.m_description.getAttributeCount(); s3++) {
          const n4 = this.m_description.getSemantics(s3);
          let i = 0;
          if (null !== this.m_vertexAttributes.get(s3)) {
            const t3 = be.getComponentCount(n4);
            i = this.m_vertexAttributes.get(s3).size() / t3, i < this.m_pointCount && (this.m_vertexAttributes.get(s3).resize(e * t3, be.getDefaultValue(n4)), i = e);
          } else this.m_vertexAttributes.set(s3, j2(n4, e)), i = e;
          i < t2 && (t2 = i);
        }
        this.m_reservedPointCount = t2;
      }
      this.verifyStreamsAfterSizeChangeExtraImpl(), this.setDirtyFlagProtected(32, false);
    }
  }
  verifyStreamsAfterSizeChangeExtraImpl() {
  }
  updateAllDirtyIntervals(t2) {
    if (t2 ? this.hasDirtyFlag(192) : this.hasDirtyFlag(128)) {
      if (this.isEmpty()) return this.hasDirtyFlag(192) && this.m_envelopeData.setEmpty(this.m_description), void this.setDirtyFlagProtected(192, false);
      const e = this.updateXYImpl(t2), s3 = new he({ vd: this.m_description });
      s3.setEnvelope(e);
      for (let t3 = 1; t3 < this.m_description.getAttributeCount(); t3++) {
        const e2 = this.m_description.getSemantics(t3), n4 = be.getComponentCount(e2), i = this.m_vertexAttributes.get(t3);
        for (let t4 = 0; t4 < n4; t4++) {
          const r = new x2();
          r.setEmpty();
          for (let e3 = 0; e3 < this.m_pointCount; e3++) {
            const s4 = i.readAsDbl(e3 * n4 + t4);
            r.mergeCoordinate(s4);
          }
          s3.setIntervalEnvelope(e2, t4, r);
        }
      }
      (t2 ? this.hasDirtyFlag(192) : this.hasDirtyFlag(128)) && (this.m_envelopeData = new re({ moveEnv: s3 }), this.clearDirtyIntervalsFlag(t2));
    }
  }
  updateXYImpl(t2) {
    const e = n3.constructEmpty(), s3 = this.m_vertexAttributes.get(0);
    return e.mergePointsInterleaved(s3, 0, this.m_pointCount), e;
  }
  updateEnvelope3D(t2) {
    n(0);
  }
  updateLooseEnvelope(t2) {
    this.updateAllDirtyIntervals(false), t2 instanceof n3 ? t2.assign(this.m_envelopeData.m_envelope2D) : this.m_envelopeData.queryEnvelope3D(this.m_description, t2);
  }
  updateEnvelope(t2) {
    this.updateAllDirtyIntervals(true), t2.assign(this.m_envelopeData.m_envelope2D);
  }
  setEmptyImpl() {
    this.m_pointCount = 0, this.m_reservedPointCount = -1, this.m_vertexAttributes.destroyAndSetSize(0), this.notifyModifiedFlags(4095);
  }
  clearDirtyIntervalsFlag(t2) {
    this.setDirtyFlagProtected(192, false);
  }
  reserveImpl(t2, s3) {
    if (t2 < 0 && P(""), 0 === t2) return;
    let n4 = t2 = Math.ceil(t2);
    if (this.m_reservedPointCount < n4) {
      this.m_vertexAttributes.empty() && this.m_vertexAttributes.destroyAndSetSize(this.m_description.getAttributeCount()), s3 ? (null === this.m_vertexAttributes.get(0) && this.m_vertexAttributes.set(0, W(0, 0)), this.m_vertexAttributes.get(0).resizeRounded(2 * n4), n4 = this.m_vertexAttributes.get(0).size() >> 1) : null === this.m_vertexAttributes.get(0) ? this.m_vertexAttributes.set(0, W(0, n4)) : this.m_vertexAttributes.get(0).resize(2 * n4);
      for (let t3 = 1; t3 < this.m_description.getAttributeCount(); t3++) {
        const e = this.m_description.getSemantics(t3), s4 = be.getComponentCount(e);
        null !== this.m_vertexAttributes.get(t3) ? this.m_vertexAttributes.get(t3).resize(n4 * s4) : this.m_vertexAttributes.set(t3, W(e, n4));
      }
      this.reserveImplImpl(n4, s3), this.m_reservedPointCount = n4;
    }
  }
  reserveRounded(t2) {
    t2 < 0 && P(), t2 = Math.ceil(t2), this.reserveImpl(t2, true);
  }
  reserveImplImpl(t2, e) {
  }
  throwIfEmpty() {
    this.isEmptyImpl() && x("");
  }
  exportVertexAttributes() {
    const t2 = this.getPointCount(), e = this.m_description.getAttributeIndex(1), s3 = this.m_description.getAttributeIndex(2), n4 = this.m_vertexAttributes.posStream, i = e > 0 ? this.m_vertexAttributes.get(e) : void 0, r = s3 > 0 ? this.m_vertexAttributes.get(s3) : void 0, o = n4?.getArray() ?? new Float64Array(), a2 = i?.getArray(), h2 = r?.getArray();
    return { vertexCount: t2, vertexXY: o, vertexZ: a2, vertexM: h2 };
  }
};
var De = class _De extends Ee {
  constructor(t2) {
    super(t2), t2 && (t2.points ? this.addPoints2D(t2.points, t2.pointsSize, 0, -1) : t2.point && this.add(t2.point));
  }
  assignCopy(t2) {
    return t2.copyTo(this), this;
  }
  assignMove(t2) {
    return t2.copyTo(this), t2.setEmpty(), this;
  }
  insertPoint2D(t2, s3) {
    t2 > this.getPointCount() && P("invalid point index"), t2 < 0 && (t2 = this.getPointCount());
    const n4 = this.m_pointCount;
    this.resizeNoInit(this.m_pointCount + 1);
    for (let e = 0, i = this.m_description.getAttributeCount(); e < i; e++) {
      const i2 = this.m_description.getSemantics(e), r = z2.getComponentCount(i2);
      if (0 === i2) this.m_vertexAttributes.get(e).insert(r * t2, s3, r * n4);
      else {
        const s4 = z2.getDefaultValue(i2);
        this.m_vertexAttributes.get(e).insertRange(r * t2, s4, r, r * n4);
      }
    }
    this.notifyModifiedFlags(2001);
  }
  insertPoint(t2, s3) {
    s3.isEmpty() && P(Se), t2 < 0 && (t2 = this.getPointCount()), this.mergeVertexDescription(s3.getDescription());
    const n4 = this.m_pointCount;
    this.resizeNoInit(this.m_pointCount + 1);
    for (let e = 0, i = this.m_description.getAttributeCount(); e < i; e++) {
      const i2 = this.m_description.getSemantics(e), r = z2.getComponentCount(i2);
      if (s3.hasAttribute(i2)) this.m_vertexAttributes.get(e).insertAttributes(r * t2, s3, i2, r * n4);
      else {
        const s4 = z2.getDefaultValue(i2);
        this.m_vertexAttributes.get(e).insertRange(r * t2, s4, r, r * n4);
      }
    }
    this.notifyModifiedFlags(2001);
  }
  insertPoints(t2, e, s3) {
    if ((t2 > this.getPointCount() || s3 < 0) && A(""), t2 < 0 && (t2 = this.getPointCount()), 0 === s3) return;
    const i = e[0].getDescription();
    this.mergeVertexDescription(i);
    const r = this.m_pointCount;
    this.resizeNoInit(this.m_pointCount + s3);
    for (let n4 = 0, o = this.m_description.getAttributeCount(); n4 < o; n4++) {
      const o2 = this.m_description.getSemantics(n4), a2 = z2.getComponentCount(o2);
      if (this.m_vertexAttributes.get(n4)) if (i.hasAttribute(o2)) this.m_vertexAttributes.get(n4).insertAttributesFromPoints(t2 * a2, e, s3, o2, r * a2);
      else {
        const e2 = z2.getDefaultValue(o2);
        this.m_vertexAttributes.get(n4).insertRange(a2 * t2, e2, a2 * s3, a2 * r);
      }
    }
    this.notifyModifiedFlags(2001);
  }
  insertPoints2D(t2, s3, n4) {
    if ((t2 > this.getPointCount() || n4 < 0) && P("invalid point index"), t2 < 0 && (t2 = this.getPointCount()), 0 === n4) return;
    const i = this.m_pointCount;
    this.resizeNoInit(this.m_pointCount + n4);
    for (let e = 0, r = this.m_description.getAttributeCount(); e < r; e++) {
      const r2 = this.m_description.getSemantics(e), o = z2.getComponentCount(r2);
      if (this.m_vertexAttributes.get(e)) if (0 === r2) this.m_vertexAttributes.get(e).insertRangeFromPoints(o * t2, s3, 0, n4, true, o * i);
      else {
        const s4 = z2.getDefaultValue(r2);
        this.m_vertexAttributes.get(e).insertRange(o * t2, s4, o, o * i);
      }
    }
    this.notifyModifiedFlags(2001);
  }
  removePoints(t2, e) {
    if ((t2 < 0 || e < 0 || t2 + e > this.getPointCount()) && A("remove_points"), 0 !== e) {
      for (let s3 = 0, n4 = this.m_description.getAttributeCount(); s3 < n4; s3++) if (this.m_vertexAttributes.get(s3)) {
        const n5 = this.m_description.getSemantics(s3), i = z2.getComponentCount(n5);
        this.m_vertexAttributes.get(s3).eraseRange(i * t2, i * e, i * this.m_pointCount);
      }
      this.m_pointCount -= e, this.m_reservedPointCount > 0 && (this.m_reservedPointCount -= e), this.notifyModifiedFlags(2001);
    }
  }
  removePoint(t2) {
    for (let e = 0, s3 = this.m_description.getAttributeCount(); e < s3; e++) if (this.m_vertexAttributes.get(e)) {
      const s4 = this.m_description.getSemantics(e), n4 = z2.getComponentCount(s4);
      this.m_vertexAttributes.get(e).eraseRange(n4 * t2, n4, n4 * this.m_pointCount);
    }
    this.m_pointCount--, this.m_reservedPointCount > 0 && this.m_reservedPointCount--, this.notifyModifiedFlags(2001);
  }
  calculateEnvelope2D() {
    return this.updateXYImpl(true);
  }
  resizeNoInit(t2) {
    this.resizeImpl(t2);
  }
  resizeAndInitNonPositionAttributes(t2) {
    const e = this.m_pointCount;
    if (this.resizeImpl(t2), this.m_pointCount > e) for (let s3 = 1, n4 = this.m_description.getAttributeCount(); s3 < n4; s3++) {
      const t3 = this.m_description.getSemantics(s3), n5 = z2.getDefaultValue(t3), i = z2.getComponentCount(t3);
      this.m_vertexAttributes.get(s3).insertRange(i * e, n5, i * (this.m_pointCount - e), i * e);
    }
  }
  queryCoordinates3D(t2, s3, n4, i) {
    let r = i < 0 ? this.m_pointCount : i;
    if (r = Math.min(r, n4 + s3), (n4 < 0 || r < n4 || this.m_pointCount > 0 && n4 >= this.m_pointCount) && P(""), 0 === this.m_pointCount) return r;
    const o = this.getAttributeStreamRef(0);
    let a2 = null;
    const h2 = z2.getDefaultValue(1), u = this.m_description.hasAttribute(1);
    u && (a2 = this.getAttributeStreamRef(1));
    let m = 0;
    for (let e = n4; e < r; e++, m++) t2[m].x = o.read(2 * e), t2[m].y = o.read(2 * e + 1), t2[m].z = u ? a2.read(e) : h2;
    return r;
  }
  queryAttributeAsInt(t2, e, n4, i) {
    n(0);
  }
  add(t2) {
    t2.isEmpty() && P(Se), this.resizeAndInitNonPositionAttributes(this.m_pointCount + 1), this.setPointByValNoCurves(this.m_pointCount - 1, t2);
  }
  addXY(t2, e) {
    this.resizeAndInitNonPositionAttributes(this.m_pointCount + 1);
    const s3 = new mi(t2, e);
    this.setXYNoCurves(this.m_pointCount - 1, s3);
  }
  addXYZ(t2, e, s3) {
    this.resizeAndInitNonPositionAttributes(this.m_pointCount + 1);
    const n4 = new X();
    n4.setCoords(t2, e, s3), this.setXYZNoCurves(this.m_pointCount - 1, n4);
  }
  addPoint2D(t2) {
    this.addXY(t2.x, t2.y);
  }
  addPoint3D(t2) {
    this.addXYZ(t2.x, t2.y, t2.z);
  }
  addPoints(t2, s3, n4) {
    this === t2 && P("Multi_point_impl.add");
    const i = n4 < 0 ? t2.getPointCount() : n4;
    if ((s3 < 0 || s3 > t2.getPointCount() || i < s3) && P(""), s3 === i) return;
    const r = t2.getDescription();
    this.mergeVertexDescription(r);
    const o = i - s3, a2 = this.m_pointCount;
    this.resizeNoInit(this.m_pointCount + o);
    for (let e = 0, h2 = this.m_description.getAttributeCount(); e < h2; e++) {
      const n5 = this.m_description.getSemantics(e), i2 = z2.getComponentCount(n5), h3 = this.getAttributeStreamRef(n5);
      if (r.hasAttribute(n5)) {
        const e2 = t2.getAttributeStreamRef(n5);
        h3.insertRangeFromStream(a2 * i2, e2, s3 * i2, o * i2, true, 1, a2 * i2);
      } else {
        const t3 = z2.getDefaultValue(n5);
        h3.insertRange(a2 * i2, t3, o * i2, a2 * i2);
      }
    }
  }
  addPoints2D(t2, s3, n4, i) {
    let r = s3;
    const o = i < 0 ? r : i;
    if ((r < 0 || n4 < 0 || n4 > r || o < n4) && P(""), n4 === o) return;
    r = o - n4;
    const a2 = this.m_pointCount;
    this.resizeAndInitNonPositionAttributes(this.m_pointCount + r);
    const h2 = this.getAttributeStreamRef(0);
    for (let e = 0; e < r; ++e) h2.writePoint2D(2 * (a2 + e), t2[n4 + e]);
    this.notifyModifiedFlags(2001);
  }
  addPoints3D(t2, s3, n4, i) {
    let r = s3;
    const o = i < 0 ? r : i;
    if ((r < 0 || n4 < 0 || n4 > r || o < n4) && P(""), this.addAttribute(1), n4 === o) return;
    r = o - n4;
    const a2 = this.m_pointCount;
    this.resizeAndInitNonPositionAttributes(this.m_pointCount + r);
    const h2 = this.getAttributeStreamRef(0), u = new mi();
    for (let e = 0; e < r; e++) u.x = t2[n4 + e].x, u.y = t2[n4 + e].y, h2.writePoint2D(2 * (a2 + e), u);
    const m = this.getAttributeStreamRef(1);
    for (let e = 0; e < r; e++) m.write(a2 + e, t2[n4 + e].z);
    this.notifyModifiedFlags(2001);
  }
  setPointByVal(t2, e) {
    this.setPointByValNoCurves(t2, e);
  }
  setXY(t2, e) {
    this.setXYNoCurves(t2, e);
  }
  setXYCoords(t2, e, s3) {
    this.setXYCoordsNoCurves(t2, e, s3);
  }
  setXYZ(t2, e) {
    this.setXYZNoCurves(t2, e);
  }
  setAttribute(t2, e, s3, n4) {
    this.setAttributeNoCurves(t2, e, s3, n4);
  }
  getGeometryType() {
    return a.enumMultiPoint;
  }
  getDimension() {
    return 0;
  }
  createInstance() {
    return new _De({ vd: this.getDescription() });
  }
  setEmpty() {
    this.setEmptyImpl();
  }
  applyTransformation(t2) {
    if (this.isEmpty()) return;
    if (t2.isIdentity()) return;
    const e = this.m_vertexAttributes.get(0);
    1 === t2.m_TransformationType ? e.applyTransformation(t2, 0, this.m_pointCount) : z("3d xform not impl"), this.notifyModifiedFlags(2001);
  }
  calculateArea2D() {
    return 0;
  }
  calculateLength2D() {
    return 0;
  }
  calculateLength3D(t2) {
    return 0;
  }
  equals(t2, e) {
    return t2.getGeometryType() === a.enumMultiPoint && this.equalsBase(t2, e);
  }
  queryEnvelope(t2) {
    4 === t2.m_EnvelopeType ? (this.updateAllDirtyIntervals(true), this.m_envelopeData.copyTo(this.m_description, t2)) : 2 === t2.m_EnvelopeType ? this.updateEnvelope(t2) : z("");
  }
  getImpl() {
    return this;
  }
  getBoundary() {
    return null;
  }
  reserve(t2) {
    this.reserveImpl(t2);
  }
  clone() {
    const t2 = this.createInstance();
    return this.copyTo(t2), t2;
  }
  swap(t2) {
    n(0);
  }
  buildQuadTreeAccelerator(t2) {
    return false;
  }
  getHashCodeImpl() {
    return n(0), 0;
  }
  equalsImpl(t2) {
    return true;
  }
  equalsImplTol(t2, e) {
    return true;
  }
  copyToImpl(t2, e) {
  }
  toFlatGeometry() {
    return __spreadValues(__spreadValues({ type: "multipoint" }, this.exportVertexAttributes()), ot);
  }
};
De.type = a.enumMultiPoint;
var we = class _we {
  constructor() {
    this.m_EnvelopeType = 5, this.envAabb = n3.constructEmpty(), this.envRot = n3.constructEmpty();
  }
  static constructEmpty() {
    return new _we();
  }
  width() {
    return this.envAabb.width();
  }
  height() {
    return this.envAabb.height();
  }
  maxDim() {
    return Math.max(this.width(), this.height());
  }
  setEmpty() {
    this.envAabb.setEmpty(), this.envRot.setEmpty();
  }
  setCoords(t2) {
    this.envAabb.setCoords(t2), this.envRot.setCoords({ x: Ie(t2), y: Me(t2) });
  }
  setFromPoints(t2, e) {
    this.setEmpty(), this.mergePoints(t2, e);
  }
  mergeNe(t2) {
    this.envAabb.mergeNe(t2), this.envRot.mergeNeCoords(Ie(t2), Me(t2));
  }
  mergePoints(t2, e) {
    this.envAabb.mergePoints(t2, e);
    for (let s3 = 0; s3 < e; ) {
      if (!this.envRot.isEmpty()) {
        for (let n4 = s3; n4 < e; n4++) {
          const e2 = Ie(t2[n4]), s4 = Me(t2[n4]);
          this.envRot.mergeNeCoords(e2, s4);
        }
        break;
      }
      {
        const e2 = Ie(t2[s3]), n4 = Me(t2[s3]);
        this.envRot.setCoords({ x: e2, y: n4 }), s3++;
      }
    }
  }
  isIntersectingPoint2D(t2) {
    return !(!this.envAabb.contains(t2) || !this.envRot.containsCoords(Ie(t2), Me(t2)));
  }
  isIntersectingW(t2) {
    return this.envAabb.isIntersecting(t2.envAabb) && this.envRot.isIntersecting(t2.envRot);
  }
  containsW(t2) {
    return !(!this.envAabb.containsEnvelope(t2.envAabb) || !this.envRot.containsEnvelope(t2.envRot));
  }
  containsPoint2D(t2) {
    return this.isIntersectingPoint2D(t2);
  }
  intersectW(t2) {
    const e = this.envAabb.intersect(t2.envAabb), s3 = this.envRot.intersect(t2.envRot);
    return e && !s3 && this.envAabb.setEmpty(), s3 && !e && this.envRot.setEmpty(), e && s3;
  }
  inflate(t2) {
    this.envAabb.inflateCoords(t2, t2);
    const e = t2 * Gs();
    this.envRot.inflateCoords(e, e), e < 0 && _we.st_reduceEmpty(this);
  }
  static st_reduceEmpty(t2) {
    const e = t2.envAabb.isEmpty(), s3 = t2.envRot.isEmpty();
    e && !s3 ? t2.envRot.setEmpty() : s3 && !e && t2.envAabb.setEmpty();
  }
  sqrMaxMinDistance(t2) {
    const e = this.envAabb.sqrMaxMinDistance(t2), s3 = this.envRot.sqrMaxMinDistance(Ye(t2)) / 2;
    return Math.max(e, s3);
  }
  sqrMinDistance(t2) {
    const e = this.envAabb.sqrMinDistance(t2), s3 = this.envRot.sqrMinDistance(Ye(t2)) / 2;
    return Math.max(e, s3);
  }
  sqrMaxDistance(t2) {
    const e = this.envAabb.sqrMaxDistance(t2), s3 = this.envRot.sqrMaxDistance(Ye(t2)) / 2;
    return Math.max(e, s3);
  }
  getEnvelope2D() {
    return this.envAabb;
  }
  getRotatedEnvelope2D() {
    return this.envRot;
  }
  xyRot(t2, e) {
    const s3 = Ae(t2.x, t2.y), n4 = Te(t2.x, t2.y);
    e.setCoords(s3, n4);
  }
};
function Ae(t2, e) {
  return t2 - e;
}
function Te(t2, e) {
  return t2 + e;
}
function Ie(t2) {
  return t2.x - t2.y;
}
function Me(t2) {
  return t2.x + t2.y;
}
function Ye(t2) {
  return new mi(Ie(t2), Me(t2));
}
var Ne = class _Ne {
  constructor() {
    this.x = p.getNAN(), this.y = p.getNAN();
  }
  static getNAN() {
    return new _Ne();
  }
  static constructPoint2D(t2) {
    const e = new _Ne();
    return e.x.set(t2.x), e.y.set(t2.y), e;
  }
  static constructCoords(t2, e) {
    const s3 = new _Ne();
    return s3.x.set(t2), s3.y.set(e), s3;
  }
  static constructCoordsE(t2, e) {
    const s3 = new _Ne();
    return s3.setCoordsE(t2, e), s3;
  }
  get 0() {
    return this.x.clone();
  }
  set 0(t2) {
    this.x.setE(t2);
  }
  get 1() {
    return this.y.clone();
  }
  set 1(t2) {
    this.y.setE(t2);
  }
  clone() {
    return new _Ne().setE(this);
  }
  scaleThis(t2) {
    return this.x.mulThisE(t2), this.y.mulThisE(t2), this;
  }
  setCoords(t2, e) {
    return this.x.set(t2), this.y.set(e), this;
  }
  setCoordsE(t2, e) {
    return this.x.setE(t2), this.y.setE(e), this;
  }
  set(t2) {
    return this.x.set(t2.x), this.y.set(t2.y), this;
  }
  setE(t2) {
    return this.x.setE(t2.x), this.y.setE(t2.y), this;
  }
  setWithEps(t2, e) {
    return this.x.setWithEps(t2.x, e), this.y.setWithEps(t2.y, e), this;
  }
  getUnitVector() {
    const t2 = this.clone();
    return t2.normalize(), t2;
  }
  sqrLength() {
    return this.x.sqr().addE(this.y.sqr());
  }
  length() {
    return this.sqrLength().sqrt();
  }
  mulE(t2) {
    const e = new _Ne();
    return e.setCoordsE(this.x.mulE(t2), this.y.mulE(t2)), e;
  }
  mul(t2) {
    const e = new _Ne();
    return e.setCoordsE(this.x.mul(t2), this.y.mul(t2)), e;
  }
  mulThis(t2) {
    return this.x.mulThis(t2), this.y.mulThis(t2), this;
  }
  mulThisE(t2) {
    return this.x.mulThisE(t2), this.y.mulThisE(t2), this;
  }
  divE(t2) {
    return this.clone().divThisE(t2);
  }
  divThisE(t2) {
    return this.x.divThisE(t2), this.y.divThisE(t2), this;
  }
  normalize() {
    const t2 = this.length();
    0 === t2.value() ? (this.x = w.clone(), this.y = I.clone()) : (this.x.divThisE(t2), this.y.divThisE(t2));
  }
  addE(t2) {
    return this.clone().addThisE(t2);
  }
  addThisE(t2) {
    return this.x.addThisE(t2.x), this.y.addThisE(t2.y), this;
  }
  subE(t2) {
    return this.clone().subThisE(t2);
  }
  subThisE(t2) {
    return this.x.subThisE(t2.x), this.y.subThisE(t2.y), this;
  }
  static distance(t2, e) {
    return t2.subE(e).length();
  }
  negateThis() {
    return this.x.negateThis(), this.y.negateThis(), this;
  }
  eq(t2) {
    return this.x.eq(t2.x) && this.y.eq(t2.y);
  }
  isZero() {
    return this.x.isZero() && this.y.isZero();
  }
  isTrueZero() {
    return !this.x.value() && !this.y.value();
  }
  rotateDirect(t2, e) {
    const s3 = this.x.mulE(t2).subThisE(this.y.mulE(e)), n4 = this.x.mulE(e).addThisE(this.y.mulE(t2));
    return this.x.setE(s3), this.y.setE(n4), this;
  }
  rotateReverse(t2, e) {
    const s3 = this.x.mulE(t2).addThisE(this.y.mulE(e)), n4 = this.x.negate().mulThisE(e).addThisE(this.y.mulE(t2));
    return this.x.setE(s3), this.y.setE(n4), this;
  }
  dotProduct(t2) {
    return this.x.mulE(t2.x).addE(this.y.mulE(t2.y));
  }
  crossProduct(t2) {
    return this.x.mulE(t2.y).subE(this.y.mulE(t2.x));
  }
  value() {
    return mi.construct(this.x.value(), this.y.value());
  }
};
var Xe = class _Xe {
  constructor() {
    this.a11 = new p(1), this.a12 = new p(0), this.a21 = new p(0), this.a22 = new p(1);
  }
  clone() {
    const t2 = new _Xe();
    return t2.a11.setE(this.a11), t2.a12.setE(this.a12), t2.a21.setE(this.a21), t2.a22.setE(this.a22), t2;
  }
  assign(t2) {
    return this.a11.setE(t2.a11), this.a12.setE(t2.a12), this.a21.setE(t2.a21), this.a22.setE(t2.a22), this;
  }
  mulThis(t2) {
    const e = this.a11.mulE(t2.a11).addThisE(this.a12.mulE(t2.a21)), s3 = this.a11.mulE(t2.a12).addThisE(this.a12.mulE(t2.a22)), n4 = this.a21.mulE(t2.a11).addThisE(this.a22.mulE(t2.a21)), i = this.a21.mulE(t2.a12).addThisE(this.a22.mulE(t2.a22));
    return this.a11 = e, this.a12 = s3, this.a21 = n4, this.a22 = i, this;
  }
  mulLeftThis(t2) {
    const e = t2.clone();
    return this.assign(e.mulThis(this)), this;
  }
  det() {
    return this.a11.mulE(this.a22).subThisE(this.a12.mulE(this.a21));
  }
  invertThis() {
    const t2 = this.det();
    if (0 !== t2.value()) {
      const e = this.a22.divE(t2), s3 = this.a12.negate().divThisE(t2), n4 = this.a21.negate().divThisE(t2), i = this.a11.divE(t2);
      this.a11 = e, this.a12 = s3, this.a21 = n4, this.a22 = i;
    } else this.setZero();
    return !t2.isZero();
  }
  transposeThis() {
    return this.a21 = Pt(this.a12, this.a12 = this.a21), this;
  }
  eigenSymmetric(t2, e) {
    const s3 = this.a12.clone();
    s3.addThisE(this.a21), s3.mulThisByPower2(0.5);
    let n4 = new p(1), i = new p(0);
    if (s3.isZero()) t2[0].setE(this.a11), t2[1].setE(this.a22);
    else {
      const e2 = new p(1);
      if (this.a11.ne(this.a22)) {
        const r = this.a11.subE(this.a22).divE(s3);
        r.mulThisByPower2(0.5);
        const o = r.sqr();
        e2.setE(r), e2.absThis(), e2.subThisE(o.add(1).sqrtThis()), r.gt(I) && e2.negateThis();
        const a2 = e2.sqr().addThis(1).sqrtThis().invThis();
        i = e2.mulE(a2), n4.setE(a2);
        const h2 = e2.mulE(s3);
        t2[0] = this.a11.addE(h2), t2[1] = this.a22.subE(h2);
      } else n4 = new p(1 / Math.sqrt(2)), i = n4.clone(), t2[0] = this.a11.addE(s3), t2[1] = this.a22.subE(s3);
    }
    e[0].x = n4.toDouble(), e[0].y = i.toDouble(), e[1].x = i.negate().toDouble(), e[1].y = n4.toDouble(), Math.abs(t2[0].toDouble()) > Math.abs(t2[1].toDouble()) && (t2[1] = Pt(t2[0], t2[0] = t2[1]), e[1] = Pt(e[0], e[0] = e[1]));
  }
  setZero() {
    this.a11.set(0), this.a21.set(0), this.a12.set(0), this.a22.set(0);
  }
};
var qe = class _qe {
  static constructPoint2D(t2) {
    return new _qe(si.constructDouble(t2.x), si.constructDouble(t2.y));
  }
  constructor(t2, e) {
    if (void 0 === t2) return this.x = new si().setNAN(), void (this.y = new si().setNAN());
    this.x = t2.clone(), this.y = e.clone();
  }
  assignPoint2D(t2) {
    return this.x.setDouble(t2.x), this.y.setDouble(t2.y), this;
  }
  setCoords(t2, e) {
    return this.x.setThis(t2), this.y.setThis(e), this;
  }
  asPoint2D() {
    return new mi(this.x.value(), this.y.value());
  }
  crossProduct(t2) {
    return this.x.mul(t2.y).sub(this.y.mul(t2.x));
  }
  leftPerpendicularThis() {
    const t2 = this.x.clone();
    this.x = this.y.clone().negate(), this.y = t2;
  }
  clone() {
    return new _qe(this.x, this.y);
  }
  dotProduct(t2) {
    return this.x.mul(t2.x).add(this.y.mul(t2.y));
  }
  add(t2) {
    return new _qe(this.x.add(t2.x), this.y.add(t2.y));
  }
  sub(t2) {
    return new _qe(this.x.sub(t2.x), this.y.sub(t2.y));
  }
  sqrLength() {
    return this.x.sqr().addThis(this.y.sqr());
  }
  mulThis(t2) {
    return this.x.mulThis(t2), this.y.mulThis(t2), this;
  }
  mul(t2) {
    return this.clone().mulThis(t2);
  }
  subThis(t2) {
    return this.x.subThis(t2.x), this.y.subThis(t2.y), this;
  }
  addThis(t2) {
    return this.x.addThis(t2.x), this.y.addThis(t2.y), this;
  }
};
var Fe = z2;
function Ve(t2) {
  let e = false;
  for (let s3 = 0; s3 < 2; s3++) {
    const n4 = fs(t2[0][s3], t2[3][s3]);
    n4 > 0 ? (fs(t2[0][s3], t2[1][s3]) < 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[3][s3]) < 0 && (t2[1][s3] = t2[3][s3], e = true), fs(t2[0][s3], t2[2][s3]) < 0 && (t2[2][s3] = t2[0][s3], e = true), fs(t2[2][s3], t2[3][s3]) < 0 && (t2[2][s3] = t2[3][s3], e = true), fs(t2[1][s3], t2[2][s3]) < 0 && (t2[2][s3] = t2[1][s3], e = true)) : n4 < 0 ? (fs(t2[0][s3], t2[1][s3]) > 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[3][s3]) > 0 && (t2[1][s3] = t2[3][s3], e = true), fs(t2[0][s3], t2[2][s3]) > 0 && (t2[2][s3] = t2[0][s3], e = true), fs(t2[2][s3], t2[3][s3]) > 0 && (t2[2][s3] = t2[3][s3], e = true), fs(t2[1][s3], t2[2][s3]) > 0 && (t2[2][s3] = t2[1][s3], e = true)) : t2[1][s3] === t2[0][s3] && t2[2][s3] === t2[0][s3] || (t2[1][s3] = t2[0][s3], t2[2][s3] = t2[0][s3], e = true);
  }
  return e;
}
function Le(t2) {
  const e = fs(t2[0].y, t2[1].y), s3 = fs(t2[1].y, t2[2].y), n4 = fs(t2[2].y, t2[3].y);
  if (e >= 0 && s3 >= 0 && n4 >= 0 || e <= 0 && s3 <= 0 && n4 <= 0) {
    const e2 = fs(t2[0].x, t2[1].x), s4 = fs(t2[1].x, t2[2].x), n5 = fs(t2[2].x, t2[3].x);
    if (e2 >= 0 && s4 >= 0 && n5 >= 0 || e2 <= 0 && s4 <= 0 && n5 <= 0) return true;
  }
  return false;
}
function Re(t2, e) {
  const s3 = t2.getStartXY();
  if (s3.equals(e.getStartXY())) return true;
  if (s3.equals(e.getEndXY())) return true;
  const n4 = t2.getEndXY();
  return !!n4.equals(e.getStartXY()) || !!n4.equals(e.getEndXY());
}
function ze(t2, e) {
  let s3 = t2.calculateLowerLength2D();
  return !(s3 > e) && (!!t2.isLine() || (s3 = t2.calculateUpperLength2D(), s3 <= e || 0 !== e && t2.calculateLength2D() <= e));
}
function Be(t2, e, s3) {
  const n4 = Ot(mi, 4);
  let r = t2.queryControlPointsHelper(n4);
  const o = Ot(mi, 4);
  let a2 = e.queryControlPointsHelper(o);
  n4[0].equals(o[0]) || k("");
  const h2 = t2.getGeometryType();
  if (h2 === e.getGeometryType() && n4.map((t3, e2) => o[e2].equals(t3)).reduce((t3, e2) => t3 && e2)) {
    if (h2 !== a.enumRationalBezier2) return 0;
    {
      const s4 = e, n5 = [0, 0, 0], i = [0, 0, 0];
      if (t2.queryWeights(n5), s4.queryWeights(i), n5.map((t3, e2) => i[e2] === t3).reduce((t3, e2) => t3 && e2)) return 0;
    }
  }
  for (; r > 2 && n4[1].equals(n4[0]); ) n4.splice(1, 1), r--;
  for (; a2 > 2 && o[1].equals(o[0]); ) o.splice(1, 1), a2--;
  (n4[1].equals(n4[0]) || o[1].equals(n4[0])) && k("");
  const m = mi.compareVectorsOrigin(n4[0], n4[1], o[1]);
  if (0 === m) {
    const s4 = qe.constructPoint2D(n4[0]), i = new qe();
    t2.queryCoord2DMP(1e-16, i), i.sub(s4);
    const r2 = new qe();
    e.queryCoord2DMP(1e-16, r2), r2.sub(s4);
    return r2.crossProduct(i).sign();
  }
  return m;
}
function ke(t2, e, n4, i, r, o, a2, h2) {
  let u = t2.calculateUpperLength2D(), m = e.calculateUpperLength2D(), l2 = t2, c = e, g2 = false;
  u > m && (c = Pt(l2, l2 = c), i = Pt(n4, n4 = i), m = Pt(u, u = m), g2 = true);
  const d = 0 === n4;
  {
    a2[0] = d ? 1 : 0;
    const t3 = l2.getCoord2D(a2[0]);
    h2[0] = c.getClosestCoordinate(t3, false);
    const e2 = c.getCoord2D(h2[0]);
    if (mi.distance(t3, e2) <= r) {
      const e3 = [0.5, 0.75, 0.25, 0.1, 0.9];
      let s3 = true;
      for (let n5 = 0; n5 < e3.length; n5++) if (t3.assign(l2.getCoord2D(e3[n5])), !c.isCloserThanDistance(t3, new x2(0, 1), r)) {
        s3 = false;
        break;
      }
      if (s3) return g2 && (h2[0] = Pt(a2[0], a2[0] = h2[0])), 1;
    }
  }
  if (u <= 3 * r) return 0;
  let _ = Us(Math.max(r / u, 0.1), 0, 0.5), p2 = 0.01 * r, f2 = 0, P4 = 0, y2 = _, x4 = -1, C3 = 0, v2 = 1 / 32;
  for (let b2 = 0; ; b2++) {
    n(b2 < 4095);
    const t3 = d ? _ : 1 - _, e2 = l2.getCoord2D(t3), n5 = c.getClosestCoordinate(e2, false);
    if (n5 === i) return C3;
    const u2 = c.getCoord2D(n5), m2 = mi.distance(e2, u2);
    if (0 === b2 && (x4 = m2), m2 <= p2 ? (v2 = 0.5, P4 = m2, f2 = _) : (y2 = _, x4 = m2), Math.abs(P4 - x4) > 0.1 * p2 && y2 - f2 > 1e-16) _ = Q(f2, y2, v2);
    else {
      if (a2[C3] = t3, h2[C3] = n5, g2 && (h2[C3] = Pt(a2[C3], a2[C3] = h2[C3])), 1 === o || 1 === C3) return 1 === C3 && a2[0] > a2[1] && (a2[1] = Pt(a2[0], a2[0] = a2[1]), h2[1] = Pt(h2[0], h2[0] = h2[1])), C3 + 1;
      C3++, f2 = y2, P4 = x4, y2 = 0.8, x4 = -1, _ = 0.8, v2 = 1 / 32, p2 = 10 * r, b2 = 0;
    }
  }
}
function Ge(t2, e, s3, n4, i, r, o, a2, h2) {
  if (Vs(s3, 0, 1) && Vs(n4, 0, 1)) {
    if (0 === mi.distance(t2.getCoord2D(s3), e.getCoord2D(n4))) {
      const h3 = 1e-12, u = new Ne(), m = Qs();
      if (t2.queryDerivative(new p(s3, m), u), u.isTrueZero()) {
        const e2 = 1 === s3 ? -h3 : h3;
        t2.queryDerivative(new p(s3, m).add(e2), u);
      }
      1 === s3 && u.negateThis();
      const l2 = new Ne();
      if (e.queryDerivative(new p(n4, m), l2), l2.isTrueZero()) {
        const t3 = 1 === s3 ? -h3 : h3;
        e.queryDerivative(new p(n4, m).add(t3), l2);
      }
      1 === n4 && l2.negateThis(), u.isZero() || u.normalize(), l2.isZero() || l2.normalize();
      const c = u.dotProduct(l2), g2 = u.crossProduct(l2);
      g2.scaleError(3);
      const d = () => {
        {
          const s4 = t2.calculateUpperLength2D(), n5 = e.calculateUpperLength2D();
          return Math.min(0.01 * i / Math.min(s4, n5), 1e-10);
        }
      };
      if (c.ge(I) && (g2.isZero() || Math.abs(g2.value()) < d())) {
        return ke(t2, e, s3, n4, i, r, o, a2);
      }
    }
  }
  return 0;
}
function We(t2, e, n4) {
  if (n(t2.isCurve() || e.isCurve()), t2.getStartXY().equals(e.getStartXY())) {
    if (Ge(t2, e, 0, 0, n4, 2, [0, 0], [0, 0])) return true;
  }
  if (t2.getEndXY().equals(e.getEndXY())) {
    if (Ge(t2, e, 1, 1, n4, 2, [0, 0], [0, 0])) return true;
  }
  if (t2.getStartXY().equals(e.getEndXY())) {
    if (Ge(t2, e, 0, 1, n4, 2, [0, 0], [0, 0])) return true;
  }
  if (t2.getEndXY().equals(e.getStartXY())) {
    if (Ge(t2, e, 1, 0, n4, 2, [0, 0], [0, 0])) return true;
  }
  return false;
}
function je(t2, e) {
  t2.m_XStart = e.x, t2.m_YStart = e.y;
}
function Ze(t2, e, s3) {
  t2.m_XStart = e, t2.m_YStart = s3;
}
function He(t2, e) {
  t2.m_XEnd = e.x, t2.m_YEnd = e.y;
}
function Ue(t2, e, s3) {
  t2.m_XEnd = e, t2.m_YEnd = s3;
}
function Oe(t2, e, s3) {
  e ? t2.m_XEnd === s3.x && t2.m_YEnd === s3.y || (t2.m_XEnd = s3.x, t2.m_YEnd = s3.y, t2.endPointModified()) : t2.m_XStart === s3.x && t2.m_YStart === s3.y || (t2.m_XStart = s3.x, t2.m_YStart = s3.y, t2.endPointModified());
}
function Qe(t2, e) {
  const s3 = new X();
  return e ? (s3.x = t2.m_XEnd, s3.y = t2.m_YEnd) : (s3.x = t2.m_XStart, s3.y = t2.m_YStart), s3.z = Je(t2, e), s3;
}
function Je(t2, e) {
  return t2.m_description.hasZ() ? t2.m_attributes[e * (t2.m_description.getTotalComponentCount() - 2)] : Fe.getDefaultValue(1);
}
function Ke(t2, e, s3) {
  t2.m_description.hasZ() || t2.addAttribute(1), e ? t2.m_XEnd === s3.x && t2.m_YEnd === s3.y || (t2.m_XEnd = s3.x, t2.m_YEnd = s3.y, t2.endPointModified()) : t2.m_XStart === s3.x && t2.m_YStart === s3.y || (t2.m_XStart = s3.x, t2.m_YStart = s3.y, t2.endPointModified()), t2.m_attributes[(t2.m_description.getTotalComponentCount() - 2) * e] = s3.z;
}
function $e(t2, e, s3) {
  s3.assignVertexDescription(t2.m_description);
  const n4 = 0 === e ? t2.m_XStart : t2.m_XEnd, i = 0 === e ? t2.m_YStart : t2.m_YEnd;
  s3.setXYCoords(n4, i);
  for (let r = 1; r < t2.m_description.getAttributeCount(); r++) {
    const n5 = t2.m_description.getSemantics(r);
    for (let i2 = 0, r2 = Fe.getComponentCount(n5); i2 < r2; i2++) {
      const r3 = es(t2, e, n5, i2);
      s3.setAttributeBasic(n5, i2, r3);
    }
  }
}
function ts(t2, e, s3) {
  s3.isEmpty() && x(""), Oe(t2, e, s3.getXY());
  const n4 = s3.getDescription();
  n4 !== t2.m_description && t2.mergeVertexDescription(n4);
  for (let i = 1, r = n4.getAttributeCount(); i < r; i++) {
    const r2 = n4.getSemantics(i), o = Fe.getComponentCount(r2);
    for (let n5 = 0; n5 < o; n5++) {
      ss(t2, e, r2, n5, s3.getAttributeAsDbl(r2, n5));
    }
  }
}
function es(t2, e, s3, i) {
  if ((e < 0 || e > 1) && A(""), 0 === s3) return (i < 0 || i >= 2) && A(""), 0 === e ? 0 === i ? t2.m_XStart : t2.m_YStart : 0 === i ? t2.m_XEnd : t2.m_YEnd;
  const r = Fe.getComponentCount(s3);
  (i < 0 || i >= r) && A("");
  const o = t2.m_description.getAttributeIndex(s3);
  return o >= 0 ? t2.m_attributes[e * (t2.m_description.getTotalComponentCount() - 2) + t2.m_description.getPointAttributeOffset(o) - 2 + i] : Fe.getDefaultValue(s3);
}
function ss(t2, e, s3, i, r) {
  if ((e < 0 || e > 1) && A(""), 0 === s3) return 0 === e ? 0 === i ? t2.m_XStart = r : 1 === i ? t2.m_YStart = r : A("") : 1 === e ? 0 === i ? t2.m_XEnd = r : 1 === i ? t2.m_YEnd = r : A("") : A(""), void t2.endPointModified();
  const o = Fe.getComponentCount(s3);
  (i < 0 || i >= o) && A("");
  let a2 = t2.m_description.getAttributeIndex(s3);
  a2 < 0 && (t2.addAttribute(s3), a2 = t2.m_description.getAttributeIndex(s3)), t2.m_attributes[e * (t2.m_description.getTotalComponentCount() - 2) + t2.m_description.getPointAttributeOffset(a2) - 2 + i] = r;
}
function ns(t2, e) {
  if (t2 === e) return;
  e.isEmpty() && x("");
  const s3 = e.getDescription();
  s3 !== t2.m_description && t2.mergeVertexDescription(s3);
  for (let n4 = 1, i = s3.getAttributeCount(); n4 < i; n4++) {
    const i2 = s3.getSemantics(n4), r = Fe.getComponentCount(i2);
    for (let s4 = 0; s4 < r; s4++) {
      let n5 = es(e, 0, i2, s4);
      ss(t2, 0, i2, s4, n5), n5 = es(e, 1, i2, s4), ss(t2, 1, i2, s4, n5);
    }
  }
}
function is(t2, e) {
  const s3 = S();
  Y2(e, t2.m_description, s3);
  let n4 = null;
  const i = e.getTotalComponentCount() - 2, r = t2.m_description ? t2.m_description.getTotalComponentCount() - 2 : 0;
  if (i > 0 && (n4 = Yt(2 * i, Number.NaN), Dt(n4, e.getDefaultPointAttributes(), 0, 2, i), Dt(n4, e.getDefaultPointAttributes(), i, 2, i), null !== t2.m_description)) for (let o = 1; o < e.getAttributeCount(); o++) {
    const a2 = s3[o];
    if (-1 !== a2) {
      const s4 = t2.m_description.getPointAttributeOffset(a2) - 2, h2 = e.getPointAttributeOffset(o) - 2, u = Fe.getComponentCount(e.getSemantics(o));
      for (let e2 = 0; e2 < u; ++e2) n4[h2] = t2.m_attributes[s4], n4[i + h2] = t2.m_attributes[r + s4];
    }
  }
  t2.m_attributes = n4, t2.m_description = e;
}
function rs(t2) {
  return t2.absNorm() * Ls();
}
function os(t2, e) {
  return Math.max(t2.absNorm(), e.absNorm()) * Ls();
}
function as(t2, e, s3) {
  const n4 = new we();
  t2.queryEnvelopeW(x2.unit(), n4);
  const i = new we();
  return e.queryEnvelopeW(x2.unit(), i), i.inflate(s3), !n4.isIntersectingW(i);
}
function hs(t2, e, s3) {
  const n4 = Qt(t2, s3), i = Qt(e, s3);
  n4.sort((t3, e2) => t3.compare(e2)), i.sort((t3, e2) => t3.compare(e2));
  for (let r = 0; r < 3; r++) {
    if (n4[r].compare(i[r]) < 0) return -1;
    if (0 !== n4[r].compare(i[r])) return 1;
  }
  return 0;
}
var us = z2;
var ms = class {
  constructor(t2) {
    if (t2.copy) {
      if (this.m_XStart = t2.copy.m_XStart, this.m_YStart = t2.copy.m_YStart, this.m_XEnd = t2.copy.m_XEnd, this.m_YEnd = t2.copy.m_YEnd, this.m_description = t2.copy.m_description, this.m_attributes = null, this.m_description) {
        this.m_description.getTotalComponentCount() - 2 && (this.m_attributes = t2.copy.m_attributes.slice());
      }
    } else {
      if (t2.move) return this.m_description = t2.move.m_description, t2.move.m_description = null, this.m_attributes = t2.move.m_attributes, t2.move.m_attributes = null, this.m_XStart = t2.move.m_XStart, this.m_YStart = t2.move.m_YStart, this.m_XEnd = t2.move.m_XEnd, void (this.m_YEnd = t2.move.m_YEnd);
      if (void 0 !== t2.XStart) return this.m_XStart = t2.XStart, this.m_YStart = t2.YStart, this.m_XEnd = t2.XEnd, this.m_YEnd = t2.YEnd, this.m_attributes = null, this.m_description = t2.vd ? t2.vd : M(), void (t2.vd && this.setDefaultAttributeValues());
      if (void 0 !== t2.ZStart) return this.m_XStart = t2.XStart, this.m_YStart = t2.YStart, this.m_XEnd = t2.XEnd, this.m_YEnd = t2.YEnd, this.m_description = t2.vd ? t2.vd : O2(), void (t2.vd ? (this.setDefaultAttributeValues(), this.addAttribute(1), this.m_attributes[0] = t2.ZStart, this.m_attributes[this.m_description.getTotalComponentCount() - 2] = t2.ZEnd) : this.m_attributes = [t2.ZStart, t2.ZEnd]);
      if (t2.start) return this.m_XStart = t2.start.x, this.m_YStart = t2.start.y, this.m_XEnd = t2.end.x, this.m_YEnd = t2.end.y, this.m_attributes = null, void (this.m_description = M());
      if (t2.start3D) return this.m_XStart = t2.start3D.x, this.m_YStart = t2.start3D.y, this.m_XEnd = t2.end3D.x, this.m_YEnd = t2.end3D.y, this.m_description = t2.vd ? t2.vd : O2(), void (t2.vd ? (this.setDefaultAttributeValues(), this.addAttribute(1), this.m_attributes[0] = t2.start3D.z, this.m_attributes[this.m_description.getTotalComponentCount() - 2] = t2.end3D.z) : this.m_attributes = [t2.start3D.z, t2.end3D.z]);
      b("bad constructor params"), this.m_XStart = this.m_YStart = this.m_XEnd = this.m_YEnd = Number.NaN;
    }
  }
  setDefaultAttributeValues() {
    const t2 = this.m_description.getTotalComponentCount() - 2;
    t2 > 0 && (null === this.m_attributes && (this.m_attributes = Yt(2 * t2, Number.NaN)), Dt(this.m_attributes, this.m_description.getDefaultPointAttributes(), 0, 2, t2), Dt(this.m_attributes, this.m_description.getDefaultPointAttributes(), t2, 2, t2));
  }
  absNormXYZ(t2) {
    return z("not implemented"), 0;
  }
  queryWeights(t2) {
  }
  snapControlPoints3D() {
    return z("not implemented"), false;
  }
  setCoordsForIntersector3D(t2, e, s3) {
    z("not implemented");
  }
  transformAttribute(t2, e, s3, n4, i) {
    z("");
  }
  mergeVertexDescriptionImpl(t2) {
    const e = this.getDescription(), s3 = H2(e, t2);
    this.assignVertexDescription(s3);
  }
  changeEndPoints(t2, e) {
    const s3 = t2.getXY(), n4 = e.getXY();
    this.changeEndPoints2D(s3, n4);
    let i = t2.getDescription();
    i !== this.getDescription() && this.mergeVertexDescription(i), i = e.getDescription(), i !== this.getDescription() && this.mergeVertexDescription(i);
    for (let r = 1, o = i.getAttributeCount(); r < o; r++) {
      const s4 = i.getSemantics(r), n5 = us.getComponentCount(s4);
      for (let i2 = 0; i2 < n5; i2++) {
        ss(this, 0, s4, i2, t2.getAttributeAsDbl(s4, i2));
        ss(this, 1, s4, i2, e.getAttributeAsDbl(s4, i2));
      }
    }
  }
  getStartXY() {
    return new mi(this.m_XStart, this.m_YStart);
  }
  setStartXY(t2) {
    this.m_XStart = t2.x, this.m_YStart = t2.y, this.endPointModified();
  }
  setStartXYCoords(t2, e) {
    this.m_XStart = t2, this.m_YStart = e, this.endPointModified();
  }
  getStartXYZ() {
    return Qe(this, 0);
  }
  setStartXYZ(t2) {
    Ke(this, 0, t2);
  }
  setStartXYZCoords(t2, e, s3) {
    Ke(this, 0, X.construct(t2, e, s3));
  }
  queryStart(t2) {
    $e(this, 0, t2);
  }
  setStart(t2) {
    ts(this, 0, t2);
  }
  setStart2D(t2) {
    this.setStartXY(t2);
  }
  getStartAttributeAsDbl(t2, e) {
    return es(this, 0, t2, e);
  }
  getStartAttributeAsInt(t2, e) {
    return n(0), 0;
  }
  setStartAttribute(t2, e, s3) {
    ss(this, 0, t2, e, s3);
  }
  setStartAttributesFromPoint(t2, e) {
    const s3 = t2.getDescription();
    for (let n4 = e && s3.hasZ() ? 2 : 1, i = s3.getAttributeCount(); n4 < i; ++n4) {
      const e2 = s3.getSemantics(n4), i2 = us.getComponentCount(e2);
      for (let s4 = 0; s4 < i2; ++s4) {
        const n5 = t2.getAttributeAsDbl(e2, s4);
        this.setStartAttribute(e2, s4, n5);
      }
    }
  }
  setEndAttributesFromPoint(t2, e) {
    const s3 = t2.getDescription();
    for (let n4 = e && s3.hasZ() ? 2 : 1, i = s3.getAttributeCount(); n4 < i; ++n4) {
      const e2 = s3.getSemantics(n4), i2 = us.getComponentCount(e2);
      for (let s4 = 0; s4 < i2; ++s4) {
        const n5 = t2.getAttributeAsDbl(e2, s4);
        this.setEndAttribute(e2, s4, n5);
      }
    }
  }
  getStartX() {
    return this.m_XStart;
  }
  getStartY() {
    return this.m_YStart;
  }
  getStartZ() {
    return n(0), 0;
  }
  getEndX() {
    return this.m_XEnd;
  }
  getEndY() {
    return this.m_YEnd;
  }
  getEndZ() {
    return n(0), 0;
  }
  getEndXY() {
    return new mi(this.m_XEnd, this.m_YEnd);
  }
  setEndXY(t2) {
    this.m_XEnd = t2.x, this.m_YEnd = t2.y, this.endPointModified();
  }
  setEndXYCoords(t2, e) {
    this.m_XEnd = t2, this.m_YEnd = e, this.endPointModified();
  }
  getEndXYZ() {
    return Qe(this, 1);
  }
  setEndXYZ(t2) {
    Ke(this, 1, t2);
  }
  setEndXYZCoords(t2, e, s3) {
    Ke(this, 1, X.construct(t2, e, s3));
  }
  queryEnd(t2) {
    $e(this, 1, t2);
  }
  setEnd(t2) {
    ts(this, 1, t2);
  }
  setEnd2D(t2) {
    this.setEndXY(t2);
  }
  getEndAttributeAsDbl(t2, e) {
    return es(this, 1, t2, e);
  }
  getEndAttributeAsInt(t2, e) {
    return n(0), Math.trunc(0);
  }
  setEndAttribute(t2, e, s3) {
    ss(this, 1, t2, e, s3);
  }
  getDimension() {
    return 1;
  }
  copyTo(t2) {
    if (this === t2) return;
    t2.getGeometryType() !== this.getGeometryType() && P("");
    const s3 = t2;
    s3.assignVertexDescription(this.m_description), s3.m_attributes && Dt(s3.m_attributes, this.m_attributes, 0, 0, 2 * (this.m_description.getTotalComponentCount() - 2)), s3.m_XStart = this.m_XStart, s3.m_YStart = this.m_YStart, s3.m_XEnd = this.m_XEnd, s3.m_YEnd = this.m_YEnd, this.copyToImpl(s3);
  }
  isEmpty() {
    return this.isEmptyImpl();
  }
  isClosed() {
    return this.m_XStart === this.m_XEnd && this.m_YStart === this.m_YEnd;
  }
  setEmpty() {
  }
  calculateArea2D() {
    return 0;
  }
  queryInterval(t2, e) {
    const s3 = x2.constructEmpty();
    return s3.vmin = es(this, 0, t2, e), s3.vmax = s3.vmin, s3.mergeNeCoordinate(es(this, 1, t2, e)), s3;
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  getCoord3D(t2) {
    return n(0), {};
  }
  getCoord2D(t2) {
    const e = mi.getNAN();
    return this.queryCoord2D(t2, e), e;
  }
  queryCoord3D(t2, e) {
    n(0);
  }
  getCoordZ(t2) {
    return n(0), 0;
  }
  queryCoord(t2, e) {
    e.assignVertexDescription(this.m_description), e.setXY(this.getCoord2D(t2));
    for (let s3 = 1, n4 = this.m_description.getAttributeCount(); s3 < n4; s3++) {
      const n5 = this.m_description.getSemantics(s3), i = us.getComponentCount(n5);
      for (let s4 = 0; s4 < i; s4++) {
        const i2 = this.getAttributeAsDbl(t2, n5, s4);
        e.setAttributeBasic(n5, s4, i2);
      }
    }
  }
  isCloserThanDistance(t2, e, s3) {
    const n4 = n3.constructEmpty();
    this.queryLooseEnvelopeOnInterval(e, n4);
    if (n4.distance(t2) > s3) return false;
    const i = this.getClosestCoordinateOnInterval(t2, e, s3);
    return !Number.isNaN(i) && mi.distance(t2, this.getCoord2D(i)) <= s3;
  }
  isMonotoneQuickAndDirty() {
    return false;
  }
  isTrue3D() {
    return false;
  }
  getReversed() {
    const t2 = this.clone();
    return t2.reverse(), t2;
  }
  reverse() {
    this.m_XEnd = Pt(this.m_XStart, this.m_XStart = this.m_XEnd), this.m_YEnd = Pt(this.m_YStart, this.m_YStart = this.m_YEnd), this.reverseImpl();
    for (let t2 = 1, e = this.m_description.getAttributeCount(); t2 < e; t2++) {
      const e2 = this.m_description.getSemantics(t2);
      for (let t3 = 0, s3 = us.getComponentCount(e2); t3 < s3; t3++) {
        const s4 = es(this, 0, e2, t3);
        ss(this, 0, e2, t3, es(this, 1, e2, t3)), ss(this, 1, e2, t3, s4);
      }
    }
    return this.afterCompletedModification(), this;
  }
  isEmptyImpl() {
    return false;
  }
  isCircular() {
    return false;
  }
  distance(t2, e, n4, i) {
    if (!e && this.isIntersecting(t2, 0, false)) {
      if (null !== n4 || null !== i) {
        const e2 = Yt(9, Number.NaN), r2 = Yt(9, Number.NaN), o2 = this.intersect(t2, null, e2, r2, 0);
        n(o2 <= 9), 0 === o2 && b(""), null !== n4 && (n4[0] = e2[0]), null !== i && (i[0] = r2[0]);
      }
      return 0;
    }
    let r, o = Number.MAX_VALUE, a2 = -1, u = o;
    return r = this.getStartXY(), a2 = t2.getClosestCoordinate(r, false), r.subThis(t2.getCoord2D(a2)), u = r.length(), u < o && (o = u, null !== i && (i[0] = a2), null !== n4 && (n4[0] = 0)), r = this.getEndXY(), a2 = t2.getClosestCoordinate(r, false), r.subThis(t2.getCoord2D(a2)), u = r.length(), u < o && (o = u, null !== i && (i[0] = a2), null !== n4 && (n4[0] = 1)), r = t2.getStartXY(), a2 = this.getClosestCoordinate(r, false), r.subThis(this.getCoord2D(a2)), u = r.length(), u < o && (o = u, null !== n4 && (n4[0] = a2), null !== i && (i[0] = 0)), r = t2.getEndXY(), a2 = this.getClosestCoordinate(r, false), r.subThis(this.getCoord2D(a2)), u = r.length(), u < o && (o = u, null !== n4 && (n4[0] = a2), null !== i && (i[0] = 1)), o;
  }
  calculateSubLengthFromStart(t2) {
    return this.tToLength(t2);
  }
  calculateSubLength(t2, e) {
    return e === t2 ? 0 : this.tToLength(e) - this.tToLength(t2);
  }
  static recalculateParentT(t2, e, s3) {
    return Q(t2, e, s3);
  }
  moveTo(t2) {
    const e = this.isClosed(), s3 = new x3();
    s3.setShift(t2.sub(this.getStartXY())), this.applyTransformation(s3), e ? this.changeEndPoints2D(t2, t2) : this.changeEndPoints2D(t2, this.getEndXY());
  }
  moveTo3D(t2) {
    n(0);
  }
  getDescription() {
    return this.m_description;
  }
  assignVertexDescription(t2) {
    is(this, t2);
  }
  mergeVertexDescription(t2) {
    this.m_description !== t2 && (this.m_description.hasAttributesFrom(t2) || this.mergeVertexDescriptionImpl(t2));
  }
  hasAttribute(t2) {
    return this.m_description.hasAttribute(t2);
  }
  addAttribute(t2) {
    if (this.m_description.hasAttribute(t2)) return;
    const e = V2(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAttribute(t2) {
    if (!this.m_description.hasAttribute(t2)) return;
    const e = k3(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAllAttributes() {
    const t2 = M();
    t2 !== this.m_description && this.assignVertexDescription(t2);
  }
  swap(t2) {
    if (this === t2) return;
    t2.getGeometryType() !== this.getGeometryType() && P("wrong geometry type");
    const s3 = t2;
    s3.m_description = Pt(this.m_description, this.m_description = s3.m_description), s3.m_XStart = Pt(this.m_XStart, this.m_XStart = s3.m_XStart), s3.m_YStart = Pt(this.m_YStart, this.m_YStart = s3.m_YStart), s3.m_XEnd = Pt(this.m_XEnd, this.m_XEnd = s3.m_XEnd), s3.m_YEnd = Pt(this.m_YEnd, this.m_YEnd = s3.m_YEnd), s3.m_attributes = Pt(this.m_attributes, this.m_attributes = s3.m_attributes), this.swapImpl(s3);
  }
  equals(t2, e) {
    if (this.getGeometryType() !== t2.getGeometryType()) return false;
    const s3 = void 0 === e;
    s3 && (e = 0);
    const n4 = t2;
    if (this === n4) return true;
    if (this.m_description !== n4.m_description) return false;
    if (Math.abs(this.m_XStart - n4.m_XStart) > e || Math.abs(this.m_XEnd - n4.m_XEnd) > e || Math.abs(this.m_YStart - n4.m_YStart) > e || Math.abs(this.m_YEnd - n4.m_YEnd) > e) return false;
    for (let i = 0, r = 2 * (this.m_description.getTotalComponentCount() - 2); i < r; i++) if (!cs(this.m_attributes[i], n4.m_attributes[i], e)) return false;
    return s3 ? this.equalsImpl(n4) : this.equalsImplTol(n4, e);
  }
  getImpl() {
    return this;
  }
  setAttributeBasic(t2, s3, n4) {
    if (this.addAttribute(t2), 0 === t2 && this.isCurve()) {
      (s3 < 0 || s3 > 1) && P("");
      const t3 = new x3(), i = 0 === s3 ? n4 : 0, r = 1 === s3 ? n4 : 0;
      t3.setShiftCoords(i, r), 0 === s3 ? t3.xx = 0 : t3.yy = 0, this.applyTransformation(t3);
    } else this.setStartAttribute(t2, s3, n4), this.setEndAttribute(t2, s3, n4);
  }
  replaceNaNs(t2, e) {
    if (this.addAttribute(t2), this.isEmpty()) return;
    const s3 = us.getComponentCount(t2);
    for (let n4 = 0; n4 < s3; n4++) {
      const s4 = this.getStartAttributeAsDbl(t2, n4);
      Number.isNaN(s4) && this.setStartAttribute(t2, n4, e);
      const i = this.getEndAttributeAsDbl(t2, n4);
      Number.isNaN(i) && this.setEndAttribute(t2, n4, e);
    }
  }
};
ms.s_maxMonotonicPartParams = 8;
var ls2 = class extends s {
  constructor(t2, e) {
    super(), this.m_index = -1, this.gc = t2, this.dim = e;
  }
  next() {
    for (; ; ) {
      if (this.m_index >= this.gc.getGeometryCount()) return null;
      if (this.m_index++, this.m_index === this.gc.getGeometryCount()) return null;
      const t2 = this.gc.getGeometry(this.m_index);
      if (-1 === this.dim || 1 << t2.getDimension() & this.dim) return t2;
    }
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
var cs2 = class _cs {
  constructor(t2) {
    this.m_geoms = [], this.m_description = M(), t2 && (t2.vd ? this.m_description = t2.vd : t2.copy ? t2.copy.copyTo(this) : P("constructor argument not recognized"));
  }
  getGeometryCount() {
    return this.m_geoms.length;
  }
  reserve(t2) {
  }
  addGeometry(t2) {
    if (t2.getGeometryType() === a.enumGeometryCollection) {
      const e = t2;
      for (let t3 = 0, s3 = e.getGeometryCount(); t3 < s3; t3++) this.addGeometry(e.getGeometry(t3));
    } else this.m_geoms.push(t2.clone()), this.mergeVertexDescription(t2.getDescription());
  }
  addCursor(t2) {
    for (let e = t2.next(); null !== e; e = t2.next()) this.addGeometry(e);
  }
  getGeometry(t2) {
    return (t2 < 0 || t2 >= this.m_geoms.length) && P("Geometry_collection.get_geometry"), this.m_geoms[t2];
  }
  modifiedElementIndex(t2) {
    this.mergeVertexDescription(this.getGeometry(t2).getDescription());
  }
  modifiedElement(t2) {
    this.mergeVertexDescription(t2.getDescription());
  }
  getGeometryType() {
    return a.enumGeometryCollection;
  }
  getDimension() {
    let t2 = 0;
    for (const e of this.m_geoms) t2 = Math.max(t2, e.getDimension());
    return t2;
  }
  getDescription() {
    return this.m_description;
  }
  assignVertexDescription(t2) {
    this.m_description !== t2 && this.assignVertexDescriptionImpl(t2);
  }
  assignVertexDescriptionImpl(t2) {
    for (const e of this.m_geoms) e.assignVertexDescription(t2);
    this.m_description = t2;
  }
  mergeVertexDescription(t2) {
    this.m_description !== t2 && (this.m_description.hasAttributesFrom(t2) || this.mergeVertexDescriptionImpl(t2));
  }
  hasAttribute(t2) {
    return this.m_description.hasAttribute(t2);
  }
  addAttribute(t2) {
    if (this.m_description.hasAttribute(t2)) return;
    const e = V2(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAttribute(t2) {
    if (!this.m_description.hasAttribute(t2)) return;
    const e = k3(this.m_description, t2);
    this.assignVertexDescription(e);
  }
  dropAllAttributes() {
    const t2 = M();
    t2 !== this.m_description && this.assignVertexDescription(t2);
  }
  queryInterval(t2, e) {
    let s3 = new x2();
    const n4 = new x2();
    n4.setEmpty();
    for (const i of this.m_geoms) s3 = i.queryInterval(t2, e), n4.merge(s3);
    return n4;
  }
  queryEnvelope(t2) {
    if (4 === t2.m_EnvelopeType) {
      const e = new he();
      t2.setEmpty(), t2.assignVertexDescription(this.m_description);
      for (const s3 of this.m_geoms) s3.queryEnvelope(e), t2.merge(e);
    } else if (2 === t2.m_EnvelopeType) {
      const e = new n3();
      t2.setEmpty();
      for (const s3 of this.m_geoms) s3.queryEnvelope(e), t2.mergeEnvelope2D(e);
    }
    z("3d envelope case not implemented");
  }
  queryLooseEnvelope(t2) {
    if (2 === t2.m_EnvelopeType) {
      const e = new n3();
      t2.setEmpty();
      for (const s3 of this.m_geoms) s3.queryLooseEnvelope(e), t2.mergeEnvelope2D(e);
    }
    z("3d not impl");
  }
  isEmpty() {
    return 0 === this.m_geoms.length;
  }
  setEmpty() {
    this.m_geoms.length = 0;
  }
  applyTransformation(t2) {
    if (1 === t2.m_TransformationType) for (const e of this.m_geoms) e.applyTransformation(t2);
    z("3d xform not impl");
  }
  transformAttribute(t2, e, s3, n4, i) {
    for (const r of this.m_geoms) r.transformAttribute(t2, e, s3, n4, i);
  }
  createInstance() {
    return new _cs({ vd: this.getDescription() });
  }
  copyTo(t2) {
    t2.getGeometryType() !== a.enumGeometryCollection && P("");
    const s3 = t2;
    if (s3 !== this) {
      s3.m_geoms.length = 0, s3.assignVertexDescription(this.m_description);
      for (const t3 of this.m_geoms) s3.m_geoms.push(t3.clone());
    }
  }
  calculateArea2D() {
    const t2 = new n2(0);
    for (const e of this.m_geoms) t2.pe(e.calculateArea2D());
    return t2.getResult();
  }
  calculateLength2D() {
    const t2 = new n2(0);
    for (const e of this.m_geoms) t2.pe(e.calculateLength2D());
    return t2.getResult();
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  getBoundary() {
    const t2 = this.createInstance(), e = t2;
    for (const s3 of this.m_geoms) {
      const t3 = s3.getBoundary();
      t3 && e.m_geoms.push(t3);
    }
    return t2;
  }
  clone() {
    return new _cs({ copy: this });
  }
  equals(t2, e) {
    if (t2 === this) return true;
    if (t2.getGeometryType() !== a.enumGeometryCollection) return false;
    const s3 = t2;
    if (this.m_description !== s3.m_description) return false;
    if (this.m_geoms.length !== s3.m_geoms.length) return false;
    for (let n4 = 0; n4 < this.m_geoms.length; ++n4) if (!this.m_geoms[n4].equals(s3.m_geoms[n4], e)) return false;
    return true;
  }
  swap(t2) {
    t2.getGeometryType() !== a.enumGeometryCollection && P("");
    const s3 = t2;
    s3 !== this && (this.m_geoms = Pt(s3.m_geoms, s3.m_geoms = this.m_geoms));
  }
  setAttributeBasic(t2, e, s3) {
    for (const n4 of this.m_geoms) n4.setAttributeBasic(t2, e, s3);
  }
  replaceNaNs(t2, e) {
    for (const s3 of this.m_geoms) s3.replaceNaNs(t2, e);
  }
  getImpl() {
    return this;
  }
  mergeVertexDescriptionImpl(t2) {
    const e = this.getDescription(), s3 = H2(e, t2);
    this.assignVertexDescription(s3);
  }
};
function gs(t2, e = -1) {
  return new ls2(t2, e);
}
cs2.type = a.enumGeometryCollection;
var ds2 = class extends ms {
  constructor(t2) {
    super(t2);
  }
};
var _s = class extends ds2 {
  isTrue3D() {
    return true;
  }
  constructor(t2) {
    super(t2);
  }
};
function ps(t2, e, s3) {
  fs2(e, t2.getStartXY(), t2.getEndXY(), s3);
}
function fs2(t2, e, s3, n4) {
  Y(e, s3, t2, n4);
}
function Ps(t2, e) {
  return Q(t2.m_XStart, t2.m_XEnd, e);
}
function ys(t2, e) {
  return Q(t2.m_YStart, t2.m_YEnd, e);
}
function xs(t2, e) {
  const s3 = t2.getStartZ(), n4 = t2.getEndZ();
  return Q(s3, n4, e);
}
function Cs(t2, e, s3) {
  const n4 = Ne.constructPoint2D(t2.getStartXY()), i = Ne.constructPoint2D(t2.getEndXY());
  s3.setCoordsE(i.x.subE(n4.x), i.y.subE(n4.y));
}
function vs2(t2, e, s3) {
  e.value() <= 0.5 ? O(2, Ne.constructPoint2D(t2.getStartXY()), Ne.constructPoint2D(t2.getEndXY()), e, s3) : G(2, Ne.constructPoint2D(t2.getStartXY()), Ne.constructPoint2D(t2.getEndXY()), e, s3);
}
function bs(t2, e, s3) {
  t2.m_XStart = e.x, t2.m_YStart = e.y, t2.m_XEnd = s3.x, t2.m_YEnd = s3.y, t2.afterCompletedModification();
}
function Ss2(t2, e) {
  const s3 = t2.getStartXYZ();
  s3.z *= e;
  const n4 = t2.getEndXYZ();
  return n4.z *= e, s3.norm(1) + n4.norm(1);
}
function Es(t2) {
  if (t2.m_YEnd < t2.m_YStart || t2.m_YEnd === t2.m_YStart && t2.m_XEnd < t2.m_XStart) {
    t2.m_XEnd = Pt(t2.m_XStart, t2.m_XStart = t2.m_XEnd), t2.m_YEnd = Pt(t2.m_YStart, t2.m_YStart = t2.m_YEnd);
    for (let e = 0, s3 = t2.m_description.getTotalComponentCount() - 2; e < s3; e++) t2.m_attributes[e + s3] = Pt(t2.m_attributes[e], t2.m_attributes[e] = t2.m_attributes[e + s3]);
  }
}
function Ds(t2, e, s3, n4) {
  let i = 0;
  if ((t2.m_XStart === e.m_XStart && t2.m_YStart === e.m_YStart || t2.m_XStart === e.m_XEnd && t2.m_YStart === e.m_YEnd) && (i++, !n4)) return 1;
  if (t2.m_XEnd === e.m_XStart && t2.m_YEnd === e.m_YStart || t2.m_XEnd === e.m_XEnd && t2.m_YEnd === e.m_YEnd) {
    if (i++, 2 === i) return 2;
    if (!n4) return 1;
  }
  return e.isIntersectingPoint(t2.getStartXY(), s3, true) || e.isIntersectingPoint(t2.getEndXY(), s3, true) || t2.isIntersectingPoint(e.getStartXY(), s3, true) || t2.isIntersectingPoint(e.getEndXY(), s3, true) ? 4 : n4 && i ? 0 : Ts(t2, e) ? 4 : 0;
}
function ws(t2, e, s3, n4, i, r, o, a2) {
  null !== n4 && Ft(n4, 2, Number.NaN), null !== i && Ft(i, 2, Number.NaN), null !== s3 && Lt(s3, mi, 2);
  const h2 = As(t2, e, 2, s3, n4, i, r, o, a2);
  return n4 && (n4.length = h2), i && (i.length = h2), s3 && (s3.length = h2), h2;
}
function As(t2, e, s3, n4, i, r, o, a2, h2) {
  const u = Ms(t2, e.getStartXY(), o, false), m = Ms(t2, e.getEndXY(), o, false), l2 = Ms(e, t2.getStartXY(), o, false), c = Ms(e, t2.getEndXY(), o, false);
  let g2 = 0, d = 0;
  if (!Number.isNaN(u)) {
    let s4 = false;
    a2 && Vs(u, 0, 1) && t2.getCoord2D(u).isEqualPoint2D(e.getStartXY()) && (g2++, s4 = true), s4 || (i && (i[d] = u), r && (r[d] = 0), n4 && n4[d].setCoords(e.m_XStart, e.m_YStart), d++);
  }
  if (!Number.isNaN(m)) {
    let o2 = false;
    a2 && Vs(m, 0, 1) && t2.getCoord2D(m).isEqualPoint2D(e.getEndXY()) && (g2++, o2 = true), o2 || (s3 > d && (i && (i[d] = m), r && (r[d] = 1), n4 && n4[d].setCoords(e.m_XEnd, e.m_YEnd)), d++);
  }
  if (2 !== d && !Number.isNaN(l2) && !(0 === u && 0 === l2 || 0 === m && 1 === l2)) {
    let o2 = false;
    a2 && Vs(l2, 0, 1) && e.getCoord2D(l2).isEqualPoint2D(t2.getStartXY()) && (g2++, o2 = true), o2 || (s3 > d && (i && (i[d] = 0), r && (r[d] = l2), n4 && n4[d].setCoords(t2.m_XStart, t2.m_YStart)), d++);
  }
  if (2 !== d && !Number.isNaN(c) && !(1 === u && 0 === c || 1 === m && 1 === c)) {
    let o2 = false;
    a2 && Vs(c, 0, 1) && e.getCoord2D(c).isEqualPoint2D(t2.getEndXY()) && (g2++, o2 = true), o2 || (s3 > d && (i && (i[d] = 1), r && (r[d] = c), n4 && n4[d].setCoords(e.m_XEnd, e.m_YEnd)), d++);
  }
  if (d > 0) return h2 && (r = Pt(i, i = r)), 2 === d && s3 >= 2 && i && i[0] > i[1] && (i[1] = Pt(i[0], i[0] = i[1]), r && (r[1] = Pt(r[0], r[0] = r[1])), n4 && (n4[1] = Pt(n4[0], n4[0] = n4[1]))), d;
  if (g2 > 0) return 0;
  const _ = Fs(t2, e, o);
  return Number.isNaN(_.x) ? 0 : (n4 && (n4[0] = t2.getCoord2D(_.x)), i && (i[0] = _.x), r && (r[0] = _.y), 1);
}
function Ts(t2, e) {
  const s3 = Ys(t2, e.m_XStart, e.m_YStart), n4 = Ys(t2, e.m_XEnd, e.m_YEnd);
  if (s3 < 0 && n4 < 0 || s3 > 0 && n4 > 0) return false;
  const i = Ys(e, t2.m_XStart, t2.m_YStart), r = Ys(e, t2.m_XEnd, t2.m_YEnd);
  if (i < 0 && r < 0 || i > 0 && r > 0) return false;
  return qs(t2) > qs(e) ? Xs2(t2, e) : Xs2(e, t2);
}
function Ms(t2, e, s3, n4) {
  const i = mi.getNAN(), r = mi.getNAN();
  let o = false;
  t2.m_YEnd < t2.m_YStart || t2.m_YEnd === t2.m_YStart && t2.m_XEnd < t2.m_XStart ? (i.setCoords(t2.m_XEnd, t2.m_YEnd), r.setCoords(t2.m_XStart, t2.m_YStart), o = true) : (i.setCoords(t2.m_XStart, t2.m_YStart), r.setCoords(t2.m_XEnd, t2.m_YEnd));
  const a2 = o ? 1 : 0, h2 = o ? 0 : 1, u = mi.getNAN();
  u.setSub(e, i);
  let m = u.length(), l2 = 3 * m * Qs();
  if (m <= Math.max(s3, l2)) return n4 && 0 === m ? Number.NaN : a2;
  if (u.setSub(e, r), m = u.length(), l2 = 3 * m * Qs(), m <= Math.max(s3, l2)) return n4 && 0 === m ? Number.NaN : h2;
  u.setCoords(r.x - i.x, r.y - i.y);
  const c = u.length();
  if (c > 0) {
    const t3 = 1 / c;
    u.scale(t3);
    const n5 = mi.getNAN();
    n5.setSub(e, i);
    const m2 = n5.dotProduct(u), l3 = 8 * n5.dotProductAbs(u) * Qs();
    u.leftPerpendicularThis();
    const g2 = n5.dotProduct(u), d = 8 * n5.dotProductAbs(u) * Qs(), _ = Math.max(s3, l3);
    if (m2 < -_ || m2 > c + _) return Number.NaN;
    const p2 = Math.max(s3, d);
    if (Math.abs(g2) <= p2) {
      let n6 = m2 * t3;
      n6 = Us(n6, 0, 1);
      const u2 = mi.getNAN();
      if (fs2(n6, i, r, u2), mi.distance(u2, e) <= s3) {
        if (n6 < 0.5) {
          if (mi.distance(u2, i) <= s3 && mi.distance(e, i) <= s3) return a2;
        } else if (mi.distance(u2, r) <= s3 && mi.distance(e, r) <= s3) return h2;
        return o ? 1 - n6 : n6;
      }
    }
  }
  return Number.NaN;
}
function Ys(t2, e, s3) {
  const n4 = mi.getNAN();
  n4.setCoords(e, s3), n4.subThis(t2.getStartXY());
  const i = mi.getNAN();
  i.setSub(t2.getEndXY(), t2.getStartXY());
  const r = i.crossProduct(n4), o = 4 * Qs() * (Math.abs(i.x * n4.y) + Math.abs(i.y * n4.x));
  return r > o ? -1 : r < -o ? 1 : 0;
}
function Ns(t2, e, s3, n4) {
  const i = n4 ? t2.m_XStart : t2.m_XEnd, r = n4 ? t2.m_YStart : t2.m_YEnd, o = mi.getNAN();
  o.x = e.getEndX() - i, o.y = e.getEndY() - r;
  if (s3.dotProduct(o) > 3 * Qs() * s3.dotProductAbs(o)) {
    o.x = e.getStartX() - i, o.y = e.getStartY() - r;
    return s3.dotProduct(o) <= 3 * Qs() * s3.dotProductAbs(o);
  }
  return true;
}
function Xs2(t2, e) {
  const s3 = mi.getNAN();
  return s3.x = t2.m_XEnd - t2.m_XStart, s3.y = t2.m_YEnd - t2.m_YStart, !!Ns(t2, e, s3, false) && (s3.negateThis(), !!Ns(t2, e, s3, true));
}
function qs(t2) {
  const e = t2.m_XStart - t2.m_XEnd, s3 = t2.m_YStart - t2.m_YEnd;
  return e * e + s3 * s3;
}
function Fs(t2, e, s3) {
  const n4 = t2.m_XEnd - t2.m_XStart, i = t2.m_YEnd - t2.m_YStart, r = e.m_XEnd - e.m_XStart, o = e.m_YEnd - e.m_YStart, a2 = r * i - n4 * o;
  if (0 === a2) return mi.getNAN();
  const h2 = 4 * Qs() * (Math.abs(r * i) + Math.abs(n4 * o)), u = e.m_XStart - t2.m_XStart, m = e.m_YStart - t2.m_YStart, l2 = r * m - u * o, c = 4 * Qs() * (Math.abs(r * m) + Math.abs(u * o)), g2 = l2 / a2, d = Math.abs(a2), _ = (c * d + h2 * Math.abs(l2)) / (a2 * a2) + Qs() * Math.abs(g2);
  if (g2 < -_ || g2 > 1 + _) return mi.getNAN();
  const p2 = n4 * m - u * i, f2 = p2 / a2, P4 = (4 * Qs() * (Math.abs(n4 * m) + Math.abs(u * i)) * d + h2 * Math.abs(p2)) / (a2 * a2) + Qs() * Math.abs(f2);
  if (f2 < -P4 || f2 > 1 + P4) return mi.getNAN();
  let y2 = Us(g2, 0, 1), x4 = Us(f2, 0, 1);
  const C3 = mi.getNAN();
  ps(t2, y2, C3);
  const v2 = mi.getNAN();
  if (ps(e, x4, v2), !s3 || mi.distance(C3, v2) > s3) {
    const n5 = mi.getNAN();
    Y(C3, v2, 0.5, n5), y2 = t2.getClosestCoordinate(n5, false), x4 = e.getClosestCoordinate(n5, false);
    const i2 = mi.getNAN();
    ps(t2, y2, i2);
    const r2 = mi.getNAN();
    ps(e, x4, r2), i2.subThis(r2);
    const o2 = i2.length(), a3 = (t2.absNorm() + e.absNorm()) * Ls();
    if (o2 > Math.max(s3, a3)) return mi.getNAN();
  }
  return new mi(y2, x4);
}
var Vs2 = class {
  constructor(t2) {
    if (this.m_segFlagStream = null, this.m_xyStream = null, this.m_bCirculator = false, this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = 0, this.m_nextPathIndex = 0, this.m_currentPathIndex = -1, this.m_parent = t2.parent, this.m_buffer = new this.m_parent.m_segmentBufferCTor(), this.m_description = t2.parent.getDescription(), this.m_segmentCount = this.getSegmentCount(this.m_nextPathIndex), void 0 !== t2.pointIndex) {
      (t2.pointIndex < 0 || t2.pointIndex >= t2.parent.getPointCount()) && A("");
      const e = t2.parent.getPathIndexFromPointIndex(t2.pointIndex);
      this.m_currentPathIndex = e, this.m_nextPathIndex = e + 1, this.m_nextSegmentIndex = t2.pointIndex - t2.parent.getPathStart(e), this.m_segmentCount = this.getSegmentCount(this.m_currentPathIndex);
    } else if (void 0 !== t2.pathIndex) {
      (t2.pathIndex < 0 || t2.pathIndex >= t2.parent.getPathCount() || t2.segmentIndex < 0) && A("");
      const e = t2.parent.isClosedPath(t2.pathIndex) ? 0 : 1;
      t2.segmentIndex >= t2.parent.getPathSize(t2.pathIndex) - e && A(""), this.m_nextSegmentIndex = t2.segmentIndex, this.m_currentPathIndex = t2.pathIndex, this.m_nextPathIndex = this.m_nextSegmentIndex + 1, this.m_segmentCount = this.getSegmentCount(this.m_nextPathIndex);
    }
    this.prepare(), this.m_pathBegin = -1, this.m_bCurrentPathClosed = false, this.m_bStripAttributes = false, this.m_prevPathIndex = -1, this.m_prevSegmentIndex = -1, this.m_bNeedsUpdate = false, this.m_currentPathIndex > -1 && (this.m_pathBegin = this.m_parent.getPathStart(this.m_currentPathIndex), this.m_bCurrentPathClosed = this.m_parent.isClosedPath(this.m_currentPathIndex));
  }
  stripAttributes() {
    this.m_bStripAttributes = true;
  }
  prepare() {
    this.m_bCirculator = false, this.m_parent.isEmptyImpl() ? (this.m_segFlagStream = null, this.m_xyStream = null) : (this.m_segFlagStream = this.m_parent.getSegmentFlagsStreamRef(), this.m_xyStream = this.m_parent.getAttributeStreamRef(0));
  }
  nextPath() {
    return this.m_currentPathIndex = this.m_nextPathIndex, !(this.m_currentPathIndex >= this.m_parent.getPathCount()) && (this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = 0, this.m_segmentCount = this.getSegmentCount(this.m_currentPathIndex), this.m_pathBegin = this.m_parent.getPathStart(this.m_currentPathIndex), this.m_bCurrentPathClosed = this.m_parent.isClosedPath(this.m_currentPathIndex), this.m_nextPathIndex++, true);
  }
  previousPath() {
    return 0 !== this.m_nextPathIndex && (this.m_nextPathIndex--, this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = 0, this.m_segmentCount = this.getSegmentCount(this.m_nextPathIndex), this.m_currentPathIndex = this.m_nextPathIndex, this.m_pathBegin = this.m_parent.getPathStart(this.m_currentPathIndex), this.m_bCurrentPathClosed = this.m_parent.isClosedPath(this.m_currentPathIndex), this.resetToLastSegment(), true);
  }
  getSegmentCount(t2) {
    return this.m_parent.isEmptyImpl() ? 0 : this.m_parent.getSegmentCountPath(t2);
  }
  resetToFirstPath() {
    this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = -1, this.m_segmentCount = -1, this.m_nextPathIndex = 0, this.m_currentPathIndex = -1, this.m_pathBegin = -1, this.m_bCurrentPathClosed = false;
  }
  resetToLastPath() {
    this.m_nextPathIndex = this.m_parent.getPathCount(), this.m_currentPathIndex = -1, this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = -1, this.m_segmentCount = -1, this.m_pathBegin = -1;
  }
  resetToPath(t2) {
    (t2 < 0 || t2 > this.m_parent.getPathCount()) && A(""), this.m_nextPathIndex = t2, this.m_currentPathIndex = -1, this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = -1, this.m_segmentCount = -1, this.m_pathBegin = -1, this.m_bCurrentPathClosed = false;
  }
  isLastPath() {
    return this.m_currentPathIndex === this.m_parent.getPathCount() - 1;
  }
  isFirstSegmentInPath() {
    return 0 === this.m_currentSegmentIndex;
  }
  isLastSegmentInPath() {
    return this.m_currentSegmentIndex === this.m_segmentCount - 1;
  }
  resetToFirstSegment() {
    this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = 0;
  }
  resetToLastSegment() {
    this.m_nextSegmentIndex = this.m_segmentCount, this.m_currentSegmentIndex = -1;
  }
  resetTo(t2) {
    this.m_parent !== t2.m_parent && C(""), this.m_currentSegmentIndex = t2.m_currentSegmentIndex, this.m_nextSegmentIndex = t2.m_nextSegmentIndex, this.m_currentPathIndex = t2.m_currentPathIndex, this.m_nextPathIndex = t2.m_nextPathIndex, this.m_segmentCount = t2.m_segmentCount, this.m_bCirculator = t2.m_bCirculator, this.m_pathBegin = t2.m_pathBegin, this.m_bCurrentPathClosed = t2.m_bCurrentPathClosed, this.m_bStripAttributes = t2.m_bStripAttributes, this.m_description = t2.m_description;
  }
  resetToVertex(t2, e) {
    if (this.m_currentPathIndex >= 0 && this.m_currentPathIndex < this.m_parent.getPathCount()) {
      const e2 = this.getPathBegin();
      if (t2 >= e2 && t2 < this.m_parent.getPathEnd(this.m_currentPathIndex)) return this.m_currentSegmentIndex = -1, void (this.m_nextSegmentIndex = t2 - e2);
    }
    let s3;
    s3 = e >= 0 && e < this.m_parent.getPathCount() && t2 >= this.m_parent.getPathStart(e) && t2 < this.m_parent.getPathEnd(e) ? e : this.m_parent.getPathIndexFromPointIndex(t2), this.m_nextPathIndex = s3 + 1, this.m_currentPathIndex = s3, this.m_currentSegmentIndex = -1, this.m_nextSegmentIndex = t2 - this.m_parent.getPathStart(s3), this.m_segmentCount = this.getSegmentCount(s3), this.m_pathBegin = this.m_parent.getPathStart(this.m_currentPathIndex), this.m_bCurrentPathClosed = this.m_parent.isClosedPath(this.m_currentPathIndex);
  }
  hasNextSegment() {
    return this.m_nextSegmentIndex < this.m_segmentCount;
  }
  hasPreviousSegment() {
    return this.m_nextSegmentIndex > 0;
  }
  nextSegment() {
    return this.m_currentSegmentIndex !== this.m_nextSegmentIndex && this.updateSegment(), this.m_bCirculator ? this.m_nextSegmentIndex = (this.m_nextSegmentIndex + 1) % this.m_segmentCount : (this.m_nextSegmentIndex === this.m_segmentCount && A("Segment_iterator_impl::next_segment"), this.m_nextSegmentIndex++), this.m_buffer.get();
  }
  previousSegment() {
    return this.m_bCirculator ? this.m_nextSegmentIndex = (this.m_segmentCount + this.m_nextSegmentIndex - 1) % this.m_segmentCount : (0 === this.m_nextSegmentIndex && A(""), this.m_nextSegmentIndex--), this.m_nextSegmentIndex !== this.m_currentSegmentIndex && this.updateSegment(), this.m_buffer.get();
  }
  nextCurve() {
    if (!this.m_parent.hasNonLinearSegments()) return this.resetToLastSegment(), null;
    let t2 = 0;
    for (; ; ) {
      if (this.m_nextSegmentIndex === this.m_segmentCount || t2 === this.m_segmentCount) return null;
      const e = this.getPathBegin() + this.m_nextSegmentIndex;
      if (1 !== (31 & this.m_segFlagStream.read(e))) {
        this.updateSegment();
        break;
      }
      this.m_bCirculator ? this.m_nextSegmentIndex = (this.m_nextSegmentIndex + 1) % this.m_segmentCount : this.m_nextSegmentIndex++, t2++;
    }
    return this.m_currentSegmentIndex !== this.m_nextSegmentIndex && this.updateSegment(), this.m_bCirculator ? this.m_nextSegmentIndex = (this.m_nextSegmentIndex + 1) % this.m_segmentCount : (this.m_nextSegmentIndex === this.m_segmentCount && A(""), this.m_nextSegmentIndex++), this.m_buffer.get();
  }
  getPathBegin() {
    return this.m_pathBegin;
  }
  getPathIndex() {
    return this.m_currentPathIndex;
  }
  getStartPointIndex() {
    return this.getPathBegin() + this.m_currentSegmentIndex;
  }
  getEndPointIndex() {
    return this.isClosingSegment() ? this.getPathBegin() : this.getStartPointIndex() + 1;
  }
  updateSegment() {
    (this.m_nextSegmentIndex < 0 || this.m_nextSegmentIndex >= this.m_segmentCount || this.m_currentPathIndex < 0) && A(""), this.m_currentSegmentIndex = this.m_nextSegmentIndex, this.m_parent.getSegmentFromPath(this.m_currentPathIndex, this.m_currentSegmentIndex, this.m_buffer, this.m_bStripAttributes);
  }
  isClosingSegment() {
    return this.m_bCurrentPathClosed && this.m_currentSegmentIndex === this.m_segmentCount - 1;
  }
  isCurve() {
    if (null !== this.m_segFlagStream) {
      return 1 !== (31 & this.m_segFlagStream.read(this.m_currentSegmentIndex));
    }
    return false;
  }
  isPathClosed() {
    return this.m_bCurrentPathClosed;
  }
  setCirculator(t2) {
    this.m_bCirculator = t2;
  }
  getImpl() {
    return this;
  }
};
var Ls2 = class _Ls {
  constructor(t2) {
    this.m_rasterizedGeometry = null, this.m_quadTree = null, this.m_quadTreeForPaths = null, this.m_refCount = 1, t2 && t2.copyTo(this);
  }
  getRasterizedGeometry() {
    return this.m_rasterizedGeometry;
  }
  copyTo(t2) {
    t2 !== this && (n(t2.uniqueUse()), t2.m_quadTree = this.m_quadTree, t2.m_quadTreeForPaths = this.m_quadTreeForPaths, t2.m_rasterizedGeometry = this.m_rasterizedGeometry);
  }
  clone() {
    const t2 = new _Ls();
    return this.copyTo(t2), t2;
  }
  uniqueUse() {
    return 1 === this.m_refCount;
  }
  addRef() {
    ++this.m_refCount;
  }
  release() {
    0 === --this.m_refCount && (this.m_rasterizedGeometry = null, this.m_quadTree = null, this.m_quadTreeForPaths = null);
  }
  setRasterizedGeometry(t2) {
    n(this.uniqueUse());
  }
  setQuadTree(t2) {
    n(this.uniqueUse()), this.m_quadTree = t2;
  }
  setQuadTreeForPaths(t2) {
    n(this.uniqueUse()), this.m_quadTreeForPaths = t2;
  }
  getQuadTree() {
    return this.m_quadTree;
  }
  getQuadTreeForPaths() {
    return this.m_quadTreeForPaths;
  }
};
function Rs(t2) {
  return !(t2.isEmpty() || t2.getGeometryType() !== a.enumPolyline && t2.getGeometryType() !== a.enumPolygon) && !(t2.getPointCount() < 20);
}
function zs(t2) {
  return !(t2.isEmpty() || t2.getGeometryType() !== a.enumPolyline && t2.getGeometryType() !== a.enumPolygon) && !(t2.getPointCount() < 20);
}
function Bs(t2, e) {
  return t2.readPoint2D(e + 4);
}
function ks(t2) {
  const e = t2.getGeometryType();
  return e === a.enumEllipticArc ? 10 : e === a.enumBezier ? 4 : e === a.enumRationalBezier2 ? 5 : e === a.enumBezier2 ? 2 : void b("");
}
function Gs2(t2) {
  const e = 31 & t2;
  return 4 === e ? 10 : 2 === e ? 4 : 8 === e ? 5 : 16 === e ? 2 : 0;
}
function Ws2(t2, e, s3, n4) {
  const i = t2.getPathStart(e), r = t2.getPathEnd(e);
  if (r - i < 3) return;
  const o = 2 * i, a2 = mi.getNAN();
  s3.queryPoint2D(o, a2);
  const h2 = a2.x, u = a2.y, m = mi.getNAN();
  s3.queryPoint2D(o + 2, m);
  const l2 = mi.getNAN();
  for (let c = o + 4, g2 = 2 * r; c < g2; c += 2) s3.queryPoint2D(c, l2), n4.pe((l2.x - a2.x) * (m.y - u)), a2.setCoordsPoint2D(m), m.setCoordsPoint2D(l2);
  n4.pe((h2 - a2.x) * (m.y - u));
}
function js2(t2, e, s3) {
  for (; e.hasNextSegment(); ) {
    const t3 = e.nextCurve();
    if (null === t3) break;
    s3.pe(2 * t3.calculateArea2DHelper());
  }
}
var Zs = z2;
var Hs2 = class {
  static toSegType(t2) {
    let e = 0;
    switch (t2) {
      case a.enumLine:
        e = 1;
        break;
      case a.enumBezier:
        e = 2;
        break;
      case a.enumEllipticArc:
        e = 4;
        break;
      case a.enumRationalBezier2:
        e = 8;
        break;
      case a.enumBezier2:
        e = 16;
        break;
      default:
        b("");
    }
    return e;
  }
  constructor() {
    this.m_segmentFlags = null, this.m_segmentParamIndex = null, this.m_segmentParams = null, this.m_curveCount = 0, this.m_bezierCount = 0, this.m_arcCount = 0, this.m_rbezier2Count = 0, this.m_bezier2Count = 0, this.m_curveParamWritePoint = 0;
  }
  assignCopy(t2) {
    return this.m_segmentFlags = t2.m_segmentFlags, this.m_segmentParamIndex = t2.m_segmentParamIndex, this.m_segmentParams = t2.m_segmentParams, this.m_curveCount = t2.m_curveCount, this.m_bezierCount = t2.m_bezierCount, this.m_arcCount = t2.m_arcCount, this.m_rbezier2Count = t2.m_rbezier2Count, this.m_bezier2Count = t2.m_bezier2Count, this.m_curveParamWritePoint = t2.m_curveParamWritePoint, this;
  }
};
var Us2 = class _Us extends Ee {
  constructor(t2) {
    super(t2), this.m_cachedRingAreas2D = null, this.m_paths = null, this.m_pathFlags = null, this.m_curveData = null, t2.move ? (this.m_bPolygon = t2.move.m_bPolygon, this.m_cachedLength2D = t2.move.m_cachedLength2D, this.m_cachedArea2D = t2.move.m_cachedArea2D, this.m_currentPathIndex = t2.move.m_currentPathIndex, this.m_cachedRingAreas2D = t2.move.m_cachedRingAreas2D, this.m_paths = t2.move.m_paths, this.m_pathFlags = t2.move.m_pathFlags, this.m_curveData = t2.move.m_curveData, t2.move.m_curveData = null, t2.move.setEmpty()) : (this.m_bPolygon = t2.bPolygon, this.m_cachedLength2D = 0, this.m_cachedArea2D = 0, this.m_currentPathIndex = 0);
  }
  getGeometryType() {
    return this.m_bPolygon ? a.enumPolygon : a.enumPolyline;
  }
  getDimension() {
    return this.m_bPolygon ? 2 : 1;
  }
  changeRingStartPoint(t2) {
    n(this.m_bPolygon);
    const n4 = this.getPathIndexFromPointIndex(t2), i = this.getPathStart(n4);
    if (i === t2) return;
    const r = this.getPathEnd(n4);
    (t2 >= r || t2 < i) && P("change_ring_start_point");
    for (let e = 0, s3 = this.m_description.getAttributeCount(); e < s3; e++) {
      const s4 = this.m_description.getSemantics(e), n5 = Zs.getComponentCount(s4);
      this.m_vertexAttributes.get(e).rotate(i * n5, t2 * n5, r * n5);
    }
    this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.rotate(i, t2, r), this.m_curveData.m_segmentParamIndex.rotate(i, t2, r));
  }
  setFillRule(t2) {
    this.m_bFillRule = 1 === t2;
  }
  getFillRule() {
    return this.m_bFillRule ? 1 : 0;
  }
  isExteriorRingOGC(t2) {
    return !!this.m_bPolygon && (this.updateOGCFlagsProtected(), !!(8 & this.m_pathFlags.read(t2)));
  }
  isExteriorRing(t2) {
    return this.calculateRingArea2D(t2) > 0;
  }
  calculateRingArea2D(t2) {
    return this.m_bPolygon ? (this.updateRingAreas2DProtected(), this.m_cachedRingAreas2D.read(t2)) : 0;
  }
  updateRingAreas2DProtected() {
    if (!this.hasDirtyFlag(1024)) return;
    const t2 = this.getPathCount();
    if (0 === t2) return this.hasDirtyFlag(1024) && (this.m_cachedArea2D = 0), void this.setDirtyFlagProtected(1024, false);
    const e = new nt(t2), s3 = new n2(0), n4 = new n2(0);
    if (0 !== this.m_pointCount) {
      const i = this.getAttributeStreamRef(0);
      if (this.hasNonLinearSegments()) {
        const t3 = new Vs2({ parent: this });
        for (t3.stripAttributes(); t3.nextPath(); ) {
          n4.reset();
          const r = t3.getPathIndex();
          Ws2(this, r, i, n4), js2(this, t3, n4);
          const o = 0.5 * n4.getResult();
          s3.add(o), e.write(r, o);
        }
      } else for (let r = 0; r < t2; r++) {
        n4.reset(), Ws2(this, r, i, n4);
        const t3 = 0.5 * n4.getResult();
        s3.add(t3), e.write(r, t3);
      }
    }
    this.hasDirtyFlag(1024) && (this.m_cachedArea2D = s3.getResult(), this.m_cachedRingAreas2D = e, this.setDirtyFlagProtected(1024, false));
  }
  getOGCPolygonCount() {
    if (!this.m_bPolygon) return 0;
    this.updateOGCFlagsProtected();
    let t2 = 0;
    const e = this.getPathCount();
    for (let s3 = 0; s3 < e; s3++) 8 & this.m_pathFlags.read(s3) && t2++;
    return t2;
  }
  getHashCodeImpl() {
    return n(0), 0;
  }
  equalsImpl(t2) {
    const e = t2, s3 = this.getPathCount();
    if (s3 !== e.getPathCount()) return false;
    const n4 = this.hasNonLinearSegments();
    if (n4 !== e.hasNonLinearSegments()) return false;
    if (n4) {
      if (this.m_curveData.m_curveCount !== e.m_curveData.m_curveCount) return false;
      if (this.m_curveData.m_bezierCount !== e.m_curveData.m_bezierCount) return false;
    }
    if (this.m_paths && !this.m_paths.equals(e.m_paths, 0, s3 + 1)) return false;
    if (this.m_bFillRule !== e.m_bFillRule) return false;
    if (!this.m_bPolygon && this.m_pathFlags && !this.m_pathFlags.equals(e.m_pathFlags, 0, s3)) return false;
    if (this.hasNonLinearSegments()) {
      if (!this.m_curveData.m_segmentFlags.equals(e.m_curveData.m_segmentFlags, 0, this.getPointCount())) return false;
      for (let t3 = 0, s4 = this.getPointCount(); t3 < s4; t3++) {
        const s5 = this.m_curveData.m_segmentFlags.read(t3);
        if (!_Us.isNonLinearSegmentFlag(s5)) continue;
        const n5 = this.m_curveData.m_segmentParamIndex.read(t3), i = e.m_curveData.m_segmentParamIndex.read(t3), r = Gs2(s5);
        for (let t4 = 0; t4 < r; t4++) {
          const s6 = this.m_curveData.m_segmentParams.read(n5 + t4), r2 = e.m_curveData.m_segmentParams.read(i + t4);
          if (!ls(s6, r2)) return false;
        }
      }
    }
    return true;
  }
  equalsImplTol(t2, e) {
    const s3 = t2, n4 = this.getPathCount();
    if (n4 !== s3.getPathCount()) return false;
    const i = this.hasNonLinearSegments();
    if (i !== s3.hasNonLinearSegments()) return false;
    if (i) {
      if (this.m_curveData.m_curveCount !== s3.m_curveData.m_curveCount) return false;
      if (this.m_curveData.m_bezierCount !== s3.m_curveData.m_bezierCount) return false;
    }
    if (this.m_paths && !this.m_paths.equals(s3.m_paths, 0, n4 + 1)) return false;
    if (this.m_bFillRule !== s3.m_bFillRule) return false;
    if (!this.m_bPolygon && this.m_pathFlags && !this.m_pathFlags.equals(s3.m_pathFlags, 0, n4)) return false;
    if (!i) return true;
    if (!this.m_curveData.m_segmentFlags.equals(s3.m_curveData.m_segmentFlags, 0, this.getPointCount())) return false;
    const r = this.querySegmentIterator(), o = s3.querySegmentIterator();
    for (; r.nextPath(); ) {
      if (!o.nextPath()) return false;
      for (; r.hasNextSegment(); ) {
        const t3 = r.nextCurve(), s4 = o.nextCurve();
        if (!(t3 && s4 && t3.equals(s4, e))) {
          if (!t3 && !s4) break;
          return false;
        }
      }
    }
    return true;
  }
  reserveImplImpl(t2, e) {
    this.m_curveData && this.m_curveData.m_segmentFlags && (this.m_curveData.m_segmentFlags.resize(t2, 1), this.m_curveData.m_segmentParamIndex.resize(t2, -1), this.checkCompactSegmentParams());
  }
  verifyStreamsAfterSizeChangeExtraImpl() {
    this.m_paths || (this.m_paths = J2(1, 0), this.m_pathFlags = K2(1, 0)), this.m_curveData && this.m_curveData.m_segmentFlags && (this.m_curveData.m_segmentFlags.resize(this.m_reservedPointCount, 1), this.m_curveData.m_segmentParamIndex.resize(this.m_reservedPointCount, -1), this.checkCompactSegmentParams());
  }
  copyToImpl(t2, e) {
    const s3 = t2;
    s3.m_bPathStarted = false, s3.m_bFillRule = this.m_bFillRule, this.m_paths ? s3.m_paths = e ? this.m_paths : this.m_paths.clone() : s3.m_paths = null, this.m_pathFlags ? s3.m_pathFlags = e ? this.m_pathFlags : this.m_pathFlags.clone() : s3.m_pathFlags = null, this.m_curveData && (s3.m_curveData || (s3.m_curveData = new Hs2()), s3.m_curveData.assignCopy(this.m_curveData), s3.m_curveData.m_curveCount = 0, s3.updateCurveCounter(this.m_curveData.m_curveCount), e || (this.m_curveData.m_segmentParamIndex ? s3.m_curveData.m_segmentParamIndex = this.m_curveData.m_segmentParamIndex.clone() : s3.m_curveData.m_segmentParamIndex = null, this.m_curveData.m_segmentFlags ? s3.m_curveData.m_segmentFlags = this.m_curveData.m_segmentFlags.clone() : s3.m_curveData.m_segmentFlags = null, this.m_curveData.m_segmentParams ? s3.m_curveData.m_segmentParams = this.m_curveData.m_segmentParams.clone() : s3.m_curveData.m_segmentParams = null)), s3.hasDirtyFlag(512) || (s3.m_cachedLength2D = this.m_cachedLength2D), s3.m_cachedRingAreas2D = null, s3.hasDirtyFlag(1024) || (s3.m_cachedArea2D = this.m_cachedArea2D, null !== this.m_cachedRingAreas2D && (s3.m_cachedRingAreas2D = e ? this.m_cachedRingAreas2D : this.m_cachedRingAreas2D.clone()));
  }
  calculateArea2D() {
    return this.m_bPolygon ? (this.updateRingAreas2DProtected(), this.m_cachedArea2D) : 0;
  }
  calculateLength2D() {
    if (!this.hasDirtyFlag(512)) return this.m_cachedLength2D;
    const t2 = this.querySegmentIterator(), e = new n2(0);
    for (; t2.nextPath(); ) for (; t2.hasNextSegment(); ) e.add(t2.nextSegment().calculateLength2D());
    return this.hasDirtyFlag(512) && (this.m_cachedLength2D = e.getResult()), this.setDirtyFlagProtected(512, false), e.getResult();
  }
  calculatePathLength2D(t2) {
    const e = this.querySegmentIteratorAtVertex(this.getPathStart(t2)), s3 = new n2(0);
    for (; e.hasNextSegment(); ) s3.add(e.nextSegment().calculateLength2D());
    return s3.getResult();
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  calculatePathLength3D(t2, e) {
    return n(0), 0;
  }
  copyTo(t2) {
    h(t2.getGeometryType()) || P(""), this !== t2 && super.copyTo(t2);
  }
  swap(t2) {
    n(0);
  }
  setPointByVal(t2, e) {
    this.setPointByValWithCurves(t2, e);
  }
  setPointByValWithCurves(t2, e) {
    if (this.hasNonLinearSegments()) {
      const s3 = e.getXY();
      if (this.setXYCoordsWithCurves(t2, s3.x, s3.y), 1 === this.m_description.getAttributeCount()) return;
    }
    this.setPointByValNoCurves(t2, e);
  }
  setXYCoordsWithCurves(t2, e, s3) {
    if (this.hasNonLinearSegments()) {
      const n4 = _Us.getPathIndexFromPointIndexImpl(this.m_paths, this.getPathCount(), t2, this.m_currentPathIndex);
      this.m_currentPathIndex = n4;
      const i = this.getPrevSegmentTypeFromPath(n4, t2), r = this.getNextSegmentType(t2);
      if (1 !== i || 1 !== r) {
        let o = t2 - 1;
        const a2 = new Pm();
        if (1 !== i) {
          if (this.isClosedPath(n4) && t2 === this.getPathStart(n4)) {
            o = this.getPathEnd(n4) - 1;
          }
          this.getSegmentBuffer(o, a2, true);
        }
        const h2 = new Pm();
        1 !== r && this.getSegmentBuffer(t2, h2, true);
        const u = t2 + 1;
        this.setXYCoordsNoCurves(t2, e, s3);
        const m = new mi(e, s3);
        return 1 !== i && (a2.get().changeEndPoints2D(a2.get().getStartXY(), m), this.replaceSegmentImpl(o, t2, a2.get(), true)), void (1 !== r && (h2.get().changeEndPoints2D(m, h2.get().getEndXY()), this.replaceSegmentImpl(t2, u, h2.get(), true)));
      }
    }
    this.setXYCoordsNoCurves(t2, e, s3);
  }
  setXYZWithCurves(t2, e) {
    this.hasNonLinearSegments() ? (this.setXYCoordsWithCurves(t2, e.x, e.y), this.setAttributeNoCurves(1, t2, 0, e.z)) : this.setXYZNoCurves(t2, e);
  }
  setAttributeWithCurves(t2, e, s3, n4) {
    if (0 === t2 && this.hasNonLinearSegments()) {
      const t3 = this.getXY(e);
      0 === s3 ? t3.x = n4 : t3.y = n4, this.setXYCoordsWithCurves(e, t3.x, t3.y);
    } else this.setAttributeNoCurves(t2, e, s3, n4);
  }
  setXY(t2, e) {
    this.setXYCoordsWithCurves(t2, e.x, e.y);
  }
  setXYCoords(t2, e, s3) {
    this.setXYCoordsWithCurves(t2, e, s3);
  }
  setXYZ(t2, e) {
    this.setXYZWithCurves(t2, e);
  }
  setAttribute(t2, e, s3, n4) {
    this.setAttributeWithCurves(t2, e, s3, n4);
  }
  setAttributeWithCurvesFromArray(t2, e, s3, i) {
    if (0 === t2 && this.hasNonLinearSegments()) {
      i < 2 && A("");
      const t3 = this.getXY(e);
      t3.x = s3[0], t3.y = s3[1], this.setXYCoordsWithCurves(e, t3.x, t3.y);
    } else this.setAttributeFromArrayNoCurves(t2, e, s3, i);
  }
  setAttributeFromArray(t2, e, s3, n4) {
    this.setAttributeWithCurvesFromArray(t2, e, s3, n4);
  }
  hasNonLinearSegments() {
    return 0 !== this.getCurveCount();
  }
  getSegmentCount() {
    let t2 = this.getPointCount();
    if (!this.m_bPolygon) {
      t2 -= this.getPathCount();
      for (let e = 0, s3 = this.getPathCount(); e < s3; e++) this.isClosedPath(e) && t2++;
    }
    return t2;
  }
  getSegmentCountPath(t2) {
    let e = this.getPathSize(t2);
    return !this.isClosedPath(t2) && e > 0 && e--, e;
  }
  add(t2, s3) {
    this === t2 && P("Multi_path_impl::add");
    for (let e = 0, n4 = t2.getPathCount(); e < n4; e++) this.addPath(t2, e, !s3);
  }
  addPath(t2, e, s3) {
    this.insertPath(-1, t2, e, s3);
  }
  addPathPoint2D(t2, e, s3) {
    this.insertPath2D(-1, t2, 0, e, s3);
  }
  addPathMultiPoint(t2, e, s3, n4) {
    s3 < 0 && (s3 = t2.getPointCount() - e), this.insertPointsFromMultipoint(-1, 0, t2, e, s3, n4);
  }
  addSegmentsFromPath(t2, s3, i, r, o) {
    if (this === t2 && P("Multi_path_impl.add_segments_from_path"), o || 0 !== this.getPathCount() || (o = true), s3 < 0 && (s3 = t2.getPathCount() - 1), (s3 >= t2.getPathCount() || i < 0 || r < 0 || i + r > t2.getSegmentCountPath(s3)) && A("add_segments_from_path"), 0 === r) return;
    const a2 = t2.getPathStart(s3), h2 = t2.isClosedPath(s3) && i + r === t2.getSegmentCountPath(s3);
    this.m_bPathStarted = false, this.mergeVertexDescription(t2.getDescription());
    let u = r;
    const m = a2 + i;
    let l2 = m + 1;
    o && (u++, l2--), !o && t2.hasNonLinearSegments() && 1 !== t2.m_curveData.m_segmentFlags.read(m) && (t2.getXY(m).equals(this.getXY(this.m_pointCount - 1)) || P("add_segments_from_path: start point mismatch"));
    const c = this.m_pointCount;
    if (this.resizeImpl(this.m_pointCount + u), this.verifyAllStreamsAfterSizeChange(), o) {
      if (0 === u) return;
      this.m_paths.add(this.m_pointCount);
      let e = t2.m_pathFlags.read(s3);
      this.m_bPolygon && (e |= 1), this.m_pathFlags.write(this.m_pathFlags.size() - 1, e), this.m_pathFlags.add(0);
    } else this.m_paths.write(this.m_pathFlags.size() - 1, this.m_pointCount);
    const g2 = h2 ? u - 1 : u;
    for (let e = 0, n4 = this.m_description.getAttributeCount(); e < n4; e++) {
      const s4 = this.m_description.getSemantics(e), n5 = Zs.getComponentCount(s4), i2 = t2.m_description.getAttributeIndex(s4);
      if (g2 > 0) {
        if (i2 < 0 || !t2.m_vertexAttributes.get(i2)) {
          const t3 = Zs.getDefaultValue(s4);
          this.m_vertexAttributes.get(e).insertRange(n5 * c, t3, g2 * n5, n5 * c), h2 && this.m_vertexAttributes.get(e).insertRange(n5 * c + g2 * n5, t3, n5, n5 * c);
          continue;
        }
        this.m_vertexAttributes.get(e).insertRangeFromStream(n5 * c, t2.m_vertexAttributes.get(i2), n5 * l2, g2 * n5, true, n5, n5 * c);
      }
      h2 && this.m_vertexAttributes.get(e).insertRangeFromStream(n5 * (c + g2), t2.m_vertexAttributes.get(i2), n5 * a2, n5, true, n5, n5 * (c + g2));
    }
    if (this.hasNonLinearSegments() && this.initSegmentData(0), t2.hasNonLinearSegments()) {
      let e = 0;
      for (let s4 = 0, n4 = m; s4 < r; s4++) {
        e += Gs2(t2.m_curveData.m_segmentFlags.read(n4)), n4++;
      }
      if (e > 0) {
        this.initSegmentData(e);
        let s4 = m, n4 = c - (o ? 0 : 1), i2 = 0;
        for (let e2 = 0; e2 < r; e2++) {
          const e3 = t2.m_curveData.m_segmentFlags.read(s4);
          if (this.m_curveData.m_segmentFlags.write(n4, e3), _Us.isNonLinearSegmentFlag(e3)) {
            i2++;
            let r2 = t2.m_curveData.m_segmentParamIndex.read(s4);
            const o2 = Gs2(e3);
            this.m_curveData.m_segmentParamIndex.write(n4, this.m_curveData.m_curveParamWritePoint);
            for (let e4 = 0; e4 < o2; e4++) {
              const e5 = t2.m_curveData.m_segmentParams.read(r2);
              this.m_curveData.m_segmentParams.write(this.m_curveData.m_curveParamWritePoint, e5), this.m_curveData.m_curveParamWritePoint++, r2++;
            }
            this.incCurveType(e3, 1);
          } else this.m_curveData.m_segmentParamIndex.write(n4, -1);
          n4++, s4++;
        }
        this.modifyCurveCounter(i2);
      }
    }
    if (h2) {
      const t3 = this.getPathCount() - 1, e = this.getPathStart(t3), s4 = this.getPathEnd(t3) - 1, n4 = this.getXY(e), i2 = this.getXY(s4);
      n4.isEqualPoint2D(i2) && (--this.m_pointCount, this.m_paths.write(t3 + 1, this.m_pointCount));
    }
    this.notifyModifiedFlags(2001);
  }
  reverseAllPaths() {
    for (let t2 = 0, e = this.getPathCount(); t2 < e; t2++) this.reversePath(t2);
  }
  reversePath(t2) {
    t2 >= this.getPathCount() && P("");
    const s3 = this.getPathSize(t2);
    if (0 === s3) return;
    const n4 = this.getPathStart(t2), i = this.isClosedPath(t2);
    if (this.hasNonLinearSegments()) {
      let t3 = n4;
      const e = new this.m_segmentBufferCTor();
      let r2 = false;
      for (let n5 = 0; n5 < s3; n5++, t3++) {
        const s4 = this.m_curveData.m_segmentFlags.read(t3);
        if (!_Us.isNonLinearSegmentFlag(s4)) continue;
        r2 = true, this.querySegment(t3, e, true), e.get().reverse();
        const n6 = this.m_curveData.m_segmentParamIndex.read(t3);
        e.get().writeInBufferStream(this.m_curveData.m_segmentParams, n6);
      }
      if (r2) {
        const t4 = i ? 0 : 1;
        this.m_curveData.m_segmentFlags.reverseRange(n4, s3 - t4, 1), this.m_curveData.m_segmentParamIndex.reverseRange(n4, s3 - t4, 1);
      }
    }
    const r = i ? 1 : 0;
    for (let e = 0, a2 = this.m_description.getAttributeCount(); e < a2; e++) if (this.m_vertexAttributes.get(e)) {
      const t3 = this.m_description.getSemantics(e), i2 = Zs.getComponentCount(t3);
      this.m_vertexAttributes.get(e).reverseRange(i2 * (n4 + r), i2 * (s3 - r), i2);
    }
    const o = 6 & this.m_pathFlags.read(t2);
    if (o) {
      let e = 0;
      4 & o && (e |= 2), 2 & o && (e |= 4), this.m_pathFlags.clearBits(t2, 6), this.m_pathFlags.setBits(t2, e);
    }
    this.notifyModifiedFlags(1233);
  }
  removePath(t2) {
    const s3 = this.getPathCount();
    t2 < 0 && (t2 = s3 - 1), t2 >= s3 && P("");
    const n4 = this.getPathStart(t2), i = this.getPathSize(t2);
    for (let e = 0, r = this.m_description.getAttributeCount(); e < r; e++) if (this.m_vertexAttributes.get(e)) {
      const t3 = this.m_description.getSemantics(e), s4 = Zs.getComponentCount(t3);
      this.m_vertexAttributes.get(e).eraseRange(s4 * n4, s4 * i, s4 * this.m_pointCount);
    }
    if (this.hasNonLinearSegments()) {
      let t3 = 0;
      for (let e = n4, s4 = n4 + i; e < s4; e++) {
        const s5 = this.m_curveData.m_segmentFlags.read(e);
        _Us.isNonLinearSegmentFlag(s5) && (this.incCurveType(s5, -1), t3++);
      }
      this.modifyCurveCounter(-t3), this.m_curveData.m_segmentFlags.eraseRange(n4, i, this.m_pointCount), this.m_curveData.m_segmentParamIndex.eraseRange(n4, i, this.m_pointCount);
    }
    for (let e = t2 + 1; e <= s3; e++) {
      const t3 = this.m_paths.read(e);
      this.m_paths.write(e - 1, t3 - i);
    }
    if (this.m_pathFlags) for (let e = t2 + 1; e <= s3; e++) {
      const t3 = this.m_pathFlags.read(e);
      this.m_pathFlags.write(e - 1, t3);
    }
    this.m_paths.resize(s3), this.m_pathFlags.resize(s3), this.m_pointCount -= i, this.m_reservedPointCount -= i, t2 === s3 - 1 && (this.m_bPathStarted = false), this.notifyModifiedFlags(2001), this.checkCompactSegmentParams(), this.dbgVerifyCurves();
  }
  dbgVerifyCurves() {
  }
  insertPath(t2, s3, n4, i) {
    this === s3 && P("Multi_path_impl::insert_path");
    const r = this.getPathCount();
    if (!i && s3.hasNonLinearSegmentsPath(n4)) return t2 = this.insertPath(t2, s3, n4, true), this.reversePath(t2), t2;
    n4 >= s3.getPathCount() && P(""), t2 > r && P(""), t2 < 0 && (t2 = r), n4 < 0 && (n4 = s3.getPathCount() - 1), this.m_bPathStarted = false, this.mergeVertexDescription(s3.getDescription());
    const o = s3.getPathStart(n4), a2 = s3.getPathSize(n4);
    if (0 === a2) return this.insertPath2D(t2, null, 0, 0, true);
    const h2 = this.m_pointCount, u = s3.isClosedPath(n4) && !i ? 1 : 0;
    this.resizeImpl(this.m_pointCount + a2), this.verifyAllStreamsAfterSizeChange();
    const m = t2 < r ? this.getPathStart(t2) : h2;
    for (let e = 0, g2 = this.m_description.getAttributeCount(); e < g2; e++) {
      const t3 = this.m_description.getSemantics(e), n5 = s3.getDescription().getAttributeIndex(t3), r2 = Zs.getComponentCount(t3);
      if (n5 >= 0 && s3.m_vertexAttributes.get(n5)) 0 !== u && this.m_vertexAttributes.get(e).insertRangeFromStream(m * r2, s3.m_vertexAttributes.get(n5), r2 * o, r2, true, r2, r2 * h2), this.m_vertexAttributes.get(e).insertRangeFromStream((m + u) * r2, s3.m_vertexAttributes.get(n5), r2 * (o + u), r2 * (a2 - u), i, r2, r2 * (h2 + u));
      else {
        const s4 = Zs.getDefaultValue(t3);
        this.m_vertexAttributes.get(e).insertRange(m * r2, s4, r2 * a2, r2 * h2);
      }
    }
    const l2 = h2 + a2;
    this.m_paths.add(l2);
    for (let e = r; e >= t2 + 1; e--) {
      const t3 = this.m_paths.read(e - 1);
      this.m_paths.write(e, t3 + a2);
    }
    this.m_pathFlags.add(0);
    for (let e = r - 1; e >= t2 + 1; e--) {
      let t3 = this.m_pathFlags.read(e);
      t3 &= -9, this.m_pathFlags.write(e + 1, t3);
    }
    let c = s3.getPathFlagsStreamRef().read(n4);
    if (c &= -9, this.m_bPolygon && (c |= 1), this.m_pathFlags.write(t2, c), s3.hasNonLinearSegments()) {
      this.initSegmentData(0);
      let t3 = o, e = 0;
      for (let n5 = 0; n5 < a2; n5++) {
        e += Gs2(s3.m_curveData.m_segmentFlags.read(t3)), t3++;
      }
      if (e > 0) {
        null === this.m_curveData.m_segmentFlags ? (this.m_curveData.m_segmentFlags = K2(this.m_pointCount, 1), this.m_curveData.m_segmentParamIndex = J2(this.m_pointCount, -1)) : (this.m_curveData.m_segmentFlags.insertRange(m, 1, a2, h2), this.m_curveData.m_segmentParamIndex.insertRange(m, -1, a2, h2)), this.m_curveData.m_segmentParams ? this.m_curveData.m_segmentParams.resize(this.m_curveData.m_curveParamWritePoint + e) : this.m_curveData.m_segmentParams = $2(e), t3 = o;
        let n5 = m, i2 = 0;
        for (let e2 = 0; e2 < a2; e2++) {
          const e3 = s3.m_curveData.m_segmentFlags.read(t3);
          if (_Us.isNonLinearSegmentFlag(e3)) {
            this.m_curveData.m_segmentFlags.write(n5, e3), this.m_curveData.m_segmentParamIndex.write(n5, this.m_curveData.m_curveParamWritePoint);
            const r2 = Gs2(e3);
            let o2 = s3.m_curveData.m_segmentParamIndex.read(t3);
            for (let t4 = 0; t4 < r2; t4++) {
              const t5 = s3.m_curveData.m_segmentParams.read(o2);
              this.m_curveData.m_segmentParams.write(this.m_curveData.m_curveParamWritePoint, t5), this.m_curveData.m_curveParamWritePoint++, o2++;
            }
            i2++, this.incCurveType(e3, 1);
          }
          t3++, n5++;
        }
        this.modifyCurveCounter(i2);
      }
    }
    return this.notifyModifiedFlags(2001), t2;
  }
  insertPath2D(t2, s3, n4, i, r) {
    const o = this.getPathCount();
    (t2 > o || n4 < 0) && P(""), t2 < 0 && (t2 = o), this.m_bPathStarted = false;
    const a2 = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + i), 0 === i && this.notifyModifiedFlags(32), this.verifyAllStreamsAfterSizeChange();
    const h2 = t2 < o ? this.getPathStart(t2) : a2;
    if (s3) this.m_vertexAttributes.get(0).insertRangeFromPoints(2 * h2, s3, n4, i, r, 2 * a2);
    else {
      const t3 = Zs.getDefaultValue(0);
      this.m_vertexAttributes.get(0).insertRange(2 * h2, t3, 2 * i, 2 * a2);
    }
    for (let e = 1, u = this.m_description.getAttributeCount(); e < u; e++) {
      const t3 = this.m_description.getSemantics(e), s4 = Zs.getComponentCount(t3), n5 = Zs.getDefaultValue(t3);
      this.m_vertexAttributes.get(e).insertRange(h2 * s4, n5, s4 * i, s4 * a2);
    }
    this.m_paths.add(this.m_pointCount);
    for (let e = o; e >= t2 + 1; e--) {
      const t3 = this.m_paths.read(e - 1);
      this.m_paths.write(e, t3 + i);
    }
    this.m_pathFlags.add(0);
    for (let e = o - 1; e >= t2 + 1; e--) {
      let t3 = this.m_pathFlags.read(e);
      t3 &= -9, this.m_pathFlags.write(e + 1, t3);
    }
    return this.m_bPolygon && this.m_pathFlags.write(t2, 1), this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.insertRange(h2, 1, i, a2), this.m_curveData.m_segmentParamIndex.insertRange(h2, -1, i, a2)), this.notifyModifiedFlags(2001), t2;
  }
  insertPathFromMultipoint(t2, s3, n4, i, r) {
    const o = s3.getImpl(), a2 = this.getPathCount();
    (t2 > a2 || n4 < 0) && P("");
    const h2 = i < 0 ? o.getPointCount() - n4 : i;
    if (h2 > o.getPointCount() && P(""), n4 >= o.getPointCount() && P("pointsOffset"), t2 < 0 && (t2 = a2), this.m_bPathStarted = false, this.mergeVertexDescription(o.getDescription()), 0 === h2) return void this.insertPath2D(t2, null, 0, 0, true);
    const u = this.m_pointCount, m = n4;
    this.resizeImpl(this.m_pointCount + h2), this.verifyAllStreamsAfterSizeChange();
    const l2 = t2 < a2 ? this.getPathStart(t2) : u;
    for (let e = 0, d = this.m_description.getAttributeCount(); e < d; e++) {
      const t3 = this.m_description.getSemantics(e), s4 = o.getDescription().getAttributeIndex(t3), n5 = Zs.getComponentCount(t3);
      if (s4 >= 0) {
        const s5 = o.getAttributeStreamRef(t3);
        this.m_vertexAttributes.get(e).insertRangeFromStream(l2 * n5, s5, n5 * m, n5 * h2, r, n5, n5 * u);
      } else {
        const s5 = Zs.getDefaultValue(t3);
        this.m_vertexAttributes.get(e).insertRange(l2 * n5, s5, n5 * h2, n5 * u);
      }
    }
    const c = u + h2;
    this.m_paths.add(c);
    for (let e = a2; e >= t2 + 1; e--) {
      const t3 = this.m_paths.read(e - 1);
      this.m_paths.write(e, t3 + h2);
    }
    this.m_pathFlags.add(0);
    for (let e = a2 - 1; e >= t2 + 1; e--) {
      let t3 = this.m_pathFlags.read(e);
      t3 &= -9, this.m_pathFlags.write(e + 1, t3);
    }
    let g2 = 0;
    this.m_bPolygon && (g2 |= 1), this.m_pathFlags.write(t2, g2), this.notifyModifiedFlags(2001);
  }
  insertPoints(t2, s3, i, r, o, a2, h2) {
    if (this === i && P("Multi_path_impl.insert_points"), t2 < 0 && (t2 = this.getPathCount()), r < 0 && (r = i.getPathCount() - 1), (t2 > this.getPathCount() || s3 >= 0 && s3 > this.getPathSize(t2) || r >= i.getPathCount() || a2 > i.getPathSize(r)) && A(""), !a2) return;
    if (this.mergeVertexDescription(i.m_description), t2 === this.getPathCount()) {
      this.m_paths.add(this.m_pointCount);
      let t3 = i.m_pathFlags.read(r);
      t3 &= -9, this.m_bPolygon ? this.m_pathFlags.add(1 | t3) : this.m_pathFlags.add(t3);
    }
    s3 < 0 && (s3 = this.getPathSize(t2));
    const u = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + a2), this.verifyAllStreamsAfterSizeChange();
    const m = this.getPathStart(t2), l2 = m + s3;
    a2 < 0 && (a2 = i.getPathSize(r));
    const c = i.getPathStart(r), g2 = c + a2;
    for (let e = 0, n4 = this.m_description.getAttributeCount(); e < n4; e++) {
      const t3 = this.m_description.getSemantics(e), n5 = Zs.getComponentCount(t3), r2 = i.m_description.getAttributeIndex(t3);
      if (r2 < 0 || !i.m_vertexAttributes.get(r2)) {
        const s4 = Zs.getDefaultValue(t3);
        this.m_vertexAttributes.get(e).insertRange(n5 * l2, s4, g2 * n5, n5 * u);
        continue;
      }
      this.m_vertexAttributes.get(e)?.insertRangeFromStream(n5 * (m + s3), i.m_vertexAttributes.get(r2), n5 * (c + o), a2 * n5, h2, n5, n5 * u);
    }
    this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.insertRange(m + s3, 1, a2, u), this.m_curveData.m_segmentParamIndex.insertRange(m + s3, -1, a2, u), s3 > 0 && this.isNonLinearSegment(m + s3 - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(m + s3 - 1), -1), this.m_curveData.m_segmentFlags.write(m + s3 - 1, 1), this.m_curveData.m_segmentParamIndex.write(m + s3 - 1, -1), this.modifyCurveCounter(-1)));
    for (let e = t2 + 1, n4 = this.getPathCount(); e <= n4; e++) {
      const t3 = this.m_paths.read(e);
      this.m_paths.write(e, t3 + a2);
    }
    this.notifyModifiedFlags(2001);
  }
  insertPointsFromPoints(t2, e, s3, i, r, o) {
    if (t2 < 0 && (t2 = this.getPathCount()), (t2 > this.getPathCount() || e > this.getPathSize(t2) || i < 0) && A(""), !r) return;
    t2 === this.getPathCount() && (this.m_paths.add(this.m_pointCount), this.m_bPolygon ? this.m_pathFlags.add(1) : this.m_pathFlags.add(0)), e < 0 && (e = this.getPathSize(t2));
    const a2 = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + r), this.verifyAllStreamsAfterSizeChange();
    const h2 = this.getPathStart(t2);
    this.m_vertexAttributes.get(0).insertRangeFromPoints(2 * (h2 + e), s3, i, r, o, 2 * a2);
    for (let n4 = 1, u = this.m_description.getAttributeCount(); n4 < u; n4++) {
      const t3 = this.m_description.getSemantics(n4), s4 = Zs.getComponentCount(t3), i2 = Zs.getDefaultValue(t3);
      this.m_vertexAttributes.get(n4).insertRange((h2 + e) * s4, i2, s4 * r, s4 * a2);
    }
    this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.insertRange(h2 + e, 1, r, a2), this.m_curveData.m_segmentParamIndex.insertRange(h2 + e, -1, r, a2), e > 0 && this.isNonLinearSegment(h2 + e - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(h2 + e - 1), -1), this.m_curveData.m_segmentFlags.write(h2 + e - 1, 1), this.m_curveData.m_segmentParamIndex.write(h2 + e - 1, -1), this.modifyCurveCounter(-1)));
    for (let n4 = t2 + 1, u = this.getPathCount(); n4 <= u; n4++) this.m_paths.write(n4, this.m_paths.read(n4) + r);
    this.notifyModifiedFlags(2001);
  }
  insertPointsFromMultipoint(t2, e, s3, i, r, o) {
    const a2 = s3.getImpl(), h2 = this.getPathCount();
    t2 < 0 && (t2 = this.getPathCount());
    const u = a2.getPointCount();
    if ((i < 0 || i > u) && A(""), (r < 0 || i + r > u) && (r = u - i), e < 0 && (e = t2 < h2 ? this.getPathSize(t2) : 0), (t2 > h2 || t2 < h2 && e > this.getPathSize(t2) || t2 === h2 && e > 0 || r < 0) && A(""), !r) return;
    if (this.mergeVertexDescription(a2.getDescription()), t2 === h2) {
      this.m_paths.add(this.m_pointCount);
      const t3 = 0;
      this.m_bPolygon ? this.m_pathFlags.add(1 | t3) : this.m_pathFlags.add(t3);
    }
    e < 0 && (e = this.getPathSize(t2));
    const m = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + r), this.verifyAllStreamsAfterSizeChange();
    const l2 = this.getPathStart(t2), c = l2 + e, g2 = 0, d = g2 + r;
    for (let n4 = 0, _ = this.m_description.getAttributeCount(); n4 < _; n4++) {
      const t3 = this.m_description.getSemantics(n4), s4 = Zs.getComponentCount(t3);
      if (a2.getDescription().getAttributeIndex(t3) < 0) {
        const e2 = Zs.getDefaultValue(t3);
        this.m_vertexAttributes.get(n4).insertRange(s4 * c, e2, d * s4, s4 * m);
        continue;
      }
      const h3 = a2.getAttributeStreamRef(t3);
      this.m_vertexAttributes.get(n4).insertRangeFromStream(s4 * (l2 + e), h3, s4 * (g2 + i), r * s4, o, s4, s4 * m);
    }
    this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.insertRange(l2 + e, 1, r, m), this.m_curveData.m_segmentParamIndex.insertRange(l2 + e, -1, r, m), e > 0 && this.isNonLinearSegment(l2 + e - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(l2 + e - 1), -1), this.m_curveData.m_segmentFlags.write(l2 + e - 1, 1), this.m_curveData.m_segmentParamIndex.write(l2 + e - 1, -1), this.modifyCurveCounter(-1)));
    for (let n4 = t2 + 1, _ = this.getPathCount(); n4 <= _; n4++) {
      const t3 = this.m_paths.read(n4);
      this.m_paths.write(n4, t3 + r);
    }
    this.notifyModifiedFlags(2001);
  }
  insertPoint2D(t2, e, s3) {
    const i = this.getPathCount();
    t2 < 0 && (t2 = i), (t2 > i || t2 < i && e > this.getPathSize(t2)) && A(""), t2 === i && this.addPathPoint2D(null, 0, true);
    const r = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + 1), this.verifyAllStreamsAfterSizeChange();
    const o = this.getPathStart(t2), a2 = e < 0 ? this.getPathSize(t2) + o : e + o, h2 = this.m_vertexAttributes.get(0);
    if (a2 === r) this.m_paths.write(t2 + 1, r + 1), h2.writePoint2D(2 * a2, s3);
    else {
      h2.insert(2 * a2, s3, 2 * r);
      for (let t3 = 1, e2 = this.m_description.getAttributeCount(); t3 < e2; t3++) {
        const e3 = this.m_description.getSemantics(t3), s4 = Zs.getComponentCount(e3), n4 = Zs.getDefaultValue(e3);
        this.m_vertexAttributes.get(t3).insertRange(s4 * a2, n4, s4, s4 * r);
      }
      this.m_curveData && this.m_curveData.m_segmentFlags && (this.m_curveData.m_segmentFlags.insertRange(a2, 1, 1, r), this.m_curveData.m_segmentParamIndex.insertRange(a2, -1, 1, r));
      for (let e2 = t2 + 1, s4 = i; e2 <= s4; e2++) this.m_paths.write(e2, this.m_paths.read(e2) + 1);
    }
    this.m_curveData && this.m_curveData.m_segmentFlags && a2 > o && this.isNonLinearSegment(a2 - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(a2 - 1), -1), this.modifyCurveCounter(-1), this.m_curveData.m_segmentFlags.write(a2 - 1, 1), this.m_curveData.m_segmentParamIndex.write(a2 - 1, -1)), this.notifyModifiedFlags(2001);
  }
  insertPoint(t2, e, s3) {
    const i = this.getPathCount();
    t2 < 0 && (t2 = i), (t2 > i || t2 < i && e > this.getPathSize(t2)) && A(""), t2 === i && this.addPathPoint2D(null, 0, true);
    const r = this.m_pointCount;
    this.resizeImpl(this.m_pointCount + 1), this.verifyAllStreamsAfterSizeChange();
    const o = this.getPathStart(t2), a2 = e < 0 ? this.getPathSize(t2) + o : e + o;
    if (a2 === r) this.m_paths.write(t2 + 1, r + 1), this.setPointByValNoCurves(a2, s3);
    else {
      const e2 = s3.getDescription();
      this.m_description !== e2 && this.mergeVertexDescription(e2);
      for (let t3 = 0, n4 = this.m_description.getAttributeCount(); t3 < n4; t3++) {
        const n5 = this.m_description.getSemantics(t3), i2 = Zs.getComponentCount(n5);
        if (e2.hasAttribute(n5)) this.m_vertexAttributes.get(t3).insertAttributes(i2 * a2, s3, n5, i2 * r);
        else {
          const e3 = Zs.getDefaultValue(n5);
          this.m_vertexAttributes.get(t3).insertRange(i2 * a2, e3, i2, i2 * r);
        }
      }
      this.m_curveData && this.m_curveData.m_segmentFlags && (this.m_curveData.m_segmentFlags.insertRange(a2, 1, 1, r), this.m_curveData.m_segmentParamIndex.insertRange(a2, -1, 1, r));
      for (let s4 = t2 + 1, n4 = i; s4 <= n4; s4++) this.m_paths.write(s4, this.m_paths.read(s4) + 1);
    }
    this.m_curveData && this.m_curveData.m_segmentFlags && a2 > o && this.isNonLinearSegment(a2 - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(a2 - 1), -1), this.modifyCurveCounter(-1), this.m_curveData.m_segmentFlags.write(a2 - 1, 1), this.m_curveData.m_segmentParamIndex.write(a2 - 1, -1)), this.notifyModifiedFlags(2001);
  }
  removePointFromPath(t2, e) {
    const s3 = this.getPathCount();
    t2 < 0 && (t2 = s3 - 1), (t2 >= s3 || e >= this.getPathSize(t2)) && A("Multi_path.remove_point");
    const i = this.getPathStart(t2), r = this.isClosedPath(t2);
    e < 0 && (e = this.getPathSize(t2) - 1), e < 0 && A("Multi_path.remove_point");
    const o = i + e;
    for (let n4 = 0, a2 = this.m_description.getAttributeCount(); n4 < a2; n4++) if (this.m_vertexAttributes.get(n4)) {
      const t3 = this.m_description.getSemantics(n4), e2 = Zs.getComponentCount(t3);
      this.m_vertexAttributes.get(n4).eraseRange(e2 * o, e2, e2 * this.m_pointCount);
    }
    if (this.m_curveData && this.m_curveData.m_segmentFlags) {
      this.checkCompactSegmentParams();
      let e2 = 0;
      if (o > i && this.isNonLinearSegment(o - 1)) e2 += 1, this.incCurveType(this.m_curveData.m_segmentFlags.read(o - 1), -1), this.m_curveData.m_segmentFlags.write(o - 1, 1), this.m_curveData.m_segmentParamIndex.write(o - 1, -1);
      else {
        const s4 = this.getPathEnd(t2);
        r && i + 1 < s4 && this.isNonLinearSegment(s4 - 1) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(s4 - 1), -1), this.m_curveData.m_segmentFlags.write(s4 - 1, 1), this.m_curveData.m_segmentParamIndex.write(s4 - 1, -1), e2 += 1);
      }
      this.isNonLinearSegment(o) && (this.incCurveType(this.m_curveData.m_segmentFlags.read(o), -1), e2 += 1), e2 > 0 && this.modifyCurveCounter(-e2), this.m_curveData.m_segmentFlags.eraseRange(o, 1, this.m_pointCount), this.m_curveData.m_segmentParamIndex.eraseRange(o, 1, this.m_pointCount);
    }
    for (let n4 = s3; n4 >= t2 + 1; n4--) {
      const t3 = this.m_paths.read(n4);
      this.m_paths.write(n4, t3 - 1);
    }
    this.m_pointCount--, this.m_reservedPointCount--, this.notifyModifiedFlags(2001);
  }
  removePoint(t2) {
    let e;
    e = t2 < 0 ? this.getPathCount() - 1 : this.getPathIndexFromPointIndex(t2), this.removePointFromPath(e, t2 - this.getPathStart(e));
  }
  getNextSegmentType(t2) {
    return this.hasNonLinearSegments() ? this.m_curveData.m_segmentFlags.read(t2) : 1;
  }
  getPrevSegmentTypeFromPath(t2, e) {
    if (!this.hasNonLinearSegments()) return 1;
    const s3 = this.getPathStart(t2);
    if (e > s3) return this.m_curveData.m_segmentFlags.read(e - 1);
    if (e === s3) {
      if (this.isClosedPath(t2)) {
        const e2 = this.getPathEnd(t2);
        return this.m_curveData.m_segmentFlags.read(e2 - 1);
      }
      return 1;
    }
    b("");
  }
  getNumberOfCurves(t2) {
    if (!this.hasNonLinearSegments()) return 0;
    let e = 0;
    for (let s3 = this.getPathStart(t2), n4 = this.getPathEnd(t2); s3 < n4; s3++) _Us.isNonLinearSegmentFlag(this.m_curveData.m_segmentFlags.read(s3)) && ++e;
    return e;
  }
  getPathCount() {
    return this.m_paths ? this.m_paths.size() - 1 : 0;
  }
  getPathSize(t2) {
    return this.m_paths.read(t2 + 1) - this.m_paths.read(t2);
  }
  getPathStart(t2) {
    return this.m_paths.read(t2);
  }
  getPathEnd(t2) {
    return this.m_paths.read(t2 + 1);
  }
  getPathIndexFromPointIndex(t2, e = -1) {
    -1 === e && (e = this.m_currentPathIndex);
    const s3 = this.getPathCount(), n4 = _Us.getPathIndexFromPointIndexImpl(this.m_paths, s3, t2, e);
    return this.m_currentPathIndex = n4, n4;
  }
  startPathCoords(t2, e) {
    this.startPathPoint(new se({ x: t2, y: e }));
  }
  startPath(t2) {
    this.startPathPoint(new se({ pt: t2 }));
  }
  startPath3D(t2) {
    this.startPathPoint(new se({ x: t2.x, y: t2.y, z: t2.z }));
  }
  startPath3DCoords(t2, e, s3) {
    this.startPathPoint(new se({ x: t2, y: e, z: s3 }));
  }
  startPathPoint(t2) {
    t2.isEmpty() && P("");
    const s3 = t2.getDescription();
    let n4;
    if (this.m_description !== s3) {
      this.mergeVertexDescription(s3);
      const e = new se({ vd: this.m_description });
      t2.copyCommonAttributesTo(e), n4 = e;
    } else n4 = t2;
    this.m_bPathStarted ? this.setPointByValNoCurves(this.m_pointCount - 1, n4) : (this.insertPoint(-1, -1, n4), this.m_bPathStarted = true);
  }
  beforeNewSegmentHelper2() {
    this.m_paths = J2(2), this.m_paths.write(0, 0), this.m_pathFlags = K2(2, 0), this.m_bPolygon && this.m_pathFlags.write(0, 1);
  }
  beforeNewSegmentHelper1() {
    null !== this.m_paths ? (this.m_paths.add(0), this.m_pathFlags.add(0), this.m_bPolygon && this.m_pathFlags.write(this.m_pathFlags.size() - 2, 1)) : this.beforeNewSegmentHelper2();
  }
  beforeNewSegment(t2) {
    0 !== this.m_pointCount || this.m_bPathStarted || this.startPathCoords(0, 0);
    const e = this.m_pointCount, s3 = this.m_paths.size() - 1, n4 = e + t2;
    this.m_paths.write(s3, n4), this.resizeImpl(n4), this.m_bPathStarted && (this.m_bPathStarted = false);
  }
  finishLineTo() {
    if (this.hasNonLinearSegments()) {
      const t2 = this.m_curveData.m_segmentFlags.read(this.m_pointCount - 1);
      1 !== t2 && (this.m_curveData.m_segmentFlags.write(this.m_pointCount - 1, 1), this.m_curveData.m_segmentParamIndex.write(this.m_pointCount - 1, -1), this.modifyCurveCounter(-1), this.incCurveType(t2, -1));
    }
  }
  lineToCoords(t2, e) {
    if (this.beforeNewSegment(1), 1 === this.m_description.getAttributeCount()) this.setXYCoordsNoCurves(this.m_pointCount - 1, t2, e);
    else {
      const s3 = B(), n4 = new se({ vd: this.m_description, attribBuffer: s3, initDefaultValues: true });
      n4.setXYCoords(t2, e), this.setPointByValNoCurves(this.m_pointCount - 1, n4);
    }
    this.finishLineTo();
  }
  lineTo(t2) {
    this.lineToCoords(t2.x, t2.y);
  }
  lineTo3D(t2) {
    this.beforeNewSegment(1);
    const e = H2(this.m_description, O2()), s3 = B(), n4 = new se({ vd: e, attribBuffer: s3, initDefaultValues: true });
    n4.setXYZ(t2), this.setPointByValNoCurves(this.m_pointCount - 1, n4), this.finishLineTo();
  }
  lineTo3DCoords(t2, e, s3) {
    this.lineTo3D(new X(t2, e, s3));
  }
  lineToPoint(t2) {
    if (this.beforeNewSegment(1), this.m_description === t2.getDescription()) this.setPointByValNoCurves(this.m_pointCount - 1, t2);
    else {
      this.mergeVertexDescription(t2.getDescription());
      const e = B(), s3 = new se({ vd: this.m_description, attribBuffer: e, initDefaultValues: false });
      t2.copyCommonAttributesTo(s3), this.setPointByValNoCurves(this.m_pointCount - 1, s3);
    }
    this.finishLineTo();
  }
  openPathAndDuplicateStartVertex(t2) {
    this.m_bPolygon && b("");
    const s3 = this.getPathCount();
    if (t2 > s3 && P(""), !this.isClosedPath(t2)) return;
    this.m_pathFlags || b("");
    const n4 = this.m_pointCount, i = this.getPathStart(t2), r = this.getPathEnd(t2);
    if (r - i !== 0) {
      this.resizeImpl(this.m_pointCount + 1), this.verifyAllStreamsAfterSizeChange();
      for (let t3 = 0, e = this.m_description.getAttributeCount(); t3 < e; t3++) if (this.m_vertexAttributes.get(t3)) {
        const e2 = this.m_description.getSemantics(t3), s4 = Zs.getComponentCount(e2);
        this.m_vertexAttributes.get(t3).insertRangeFromStream(s4 * r, this.m_vertexAttributes.get(t3), s4 * i, s4, true, 1, s4 * n4);
      }
      for (let e = s3; e > t2; e--) {
        const t3 = this.m_paths.read(e);
        this.m_paths.write(e, t3 + 1);
      }
      this.hasNonLinearSegments() && (this.m_curveData.m_segmentFlags.insertRange(r, 1, 1, n4), this.m_curveData.m_segmentParamIndex.insertRange(r, -1, 1, n4)), this.m_pathFlags.clearBits(t2, 1);
    }
  }
  openPath(t2) {
    this.m_bPolygon && b(""), t2 > this.getPathCount() && P(""), this.m_pathFlags || b(""), this.m_pathFlags.clearBits(t2, 1);
  }
  isStrongPathStart(t2) {
    return !!(2 & this.m_pathFlags.read(t2));
  }
  setStrongPathStart(t2, e) {
    e ? this.m_pathFlags.setBits(t2, 2) : this.m_pathFlags.clearBits(t2, 2);
  }
  isStrongPathEnd(t2) {
    return !!(4 & this.m_pathFlags.read(t2));
  }
  setStrongPathEnd(t2, e) {
    e ? this.m_pathFlags.setBits(t2, 4) : this.m_pathFlags.clearBits(t2, 4);
  }
  clearStrongPathEnds() {
    for (let t2 = 0, e = this.getPathCount(); t2 < e; ++t2) this.m_pathFlags.clearBits(t2, 6);
  }
  openAllPathsAndDuplicateStartVertex() {
    if (this.m_bPolygon && b(""), this.isEmpty()) return;
    this.m_pathFlags || b("");
    let t2 = 0;
    const e = this.getPathCount();
    for (let h2 = 0; h2 < e; h2++) this.isClosedPath(h2) && (this.getPathSize(h2) > 0 ? t2++ : this.m_pathFlags.clearBits(h2, 1));
    if (0 === t2) return;
    const s3 = this.hasNonLinearSegments();
    let n4 = 0;
    const i = this.getPathCount(), r = this.m_description.getAttributeCount(), o = new Array(r);
    let a2 = null, u = null;
    for (let h2 = 0; h2 < i; ++h2) {
      const e2 = this.getPathStart(h2), i2 = this.getPathSize(h2), m = this.isClosedPath(h2);
      if (i2 > 0) {
        const h3 = e2 + n4;
        for (let s4 = 0; s4 < r; s4++) if (this.m_vertexAttributes.get(s4)) {
          const n5 = this.m_description.getSemantics(s4), r2 = Zs.getComponentCount(n5);
          if (!o[s4]) {
            const e3 = r2 * (this.m_pointCount + t2), i3 = W(n5, e3);
            o[s4] = i3;
          }
          o[s4].writeRange(h3 * r2, i2 * r2, this.m_vertexAttributes.get(s4), e2 * r2, true, 1), m && o[s4].writeRange((h3 + i2) * r2, r2, this.m_vertexAttributes.get(s4), e2 * r2, true, 1);
        }
        if (s3) {
          if (null === a2) {
            const e3 = this.m_pointCount + t2;
            a2 = K2(e3), u = J2(e3);
          }
          a2.writeRange(h3, i2, this.m_curveData.m_segmentFlags, e2, true, 1), u.writeRange(h3, i2, this.m_curveData.m_segmentParamIndex, e2, true, 1), m && (a2.write(h3 + i2, 1), u.write(h3 + i2, -1));
        }
      }
      this.m_paths.write(h2, e2 + n4), m && (this.m_pathFlags.clearBits(h2, 1), ++n4);
    }
    this.m_paths.write(i, this.m_pointCount + t2), this.m_pathFlags.clearBits(i, 1);
    for (let h2 = 0; h2 < r; h2++) this.m_vertexAttributes.get(h2) && this.m_vertexAttributes.set(h2, o[h2]);
    s3 && (this.m_curveData.m_segmentFlags = a2, this.m_curveData.m_segmentParamIndex = u), this.m_pointCount += t2, this.m_reservedPointCount > 0 && (this.m_reservedPointCount = this.m_pointCount);
  }
  closePathWithLine(t2) {
    void 0 === t2 && (t2 = this.getPathCount() - 1), this.throwIfEmpty(), (t2 < 0 || t2 >= this.getPathCount()) && P("close_path_with_line"), t2 === this.getPathCount() - 1 && (this.m_bPathStarted = false);
    const s3 = this.m_pathFlags.read(t2);
    if (1 & s3 || this.m_pathFlags.write(t2, 1 | s3), this.m_curveData && this.m_curveData.m_segmentFlags) {
      const e = this.getPathEnd(t2) - 1, s4 = this.m_curveData.m_segmentFlags.read(e);
      1 !== s4 && (this.m_curveData.m_segmentFlags.write(e, 1), this.m_curveData.m_segmentParamIndex.write(e, -1), this.incCurveType(s4, -1), this.modifyCurveCounter(-1));
    }
    this.notifyModifiedFlags(2001);
  }
  closeLastPathWithSegment(t2) {
    this.closePathWithSegment(this.getPathCount() - 1, t2);
  }
  closePathWithSegment(t2, s3) {
    if (this.throwIfEmpty(), (t2 < 0 || t2 >= this.getPathCount()) && P("close_path_with_line"), s3.getEndXY().equals(this.getXY(this.getPathStart(t2))) || P("close_path_with_segment: end point mismatch"), t2 === this.getPathCount() - 1) this.m_bPathStarted = false, this.addSegment(s3, false), --this.m_pointCount, this.m_paths.write(t2 + 1, this.m_pointCount);
    else {
      this.mergeVertexDescription(s3.getDescription());
      const n5 = s3.getStartXY(), r = this.getPathEnd(t2) - 1;
      n5.equals(this.getXY(r)) || P("close_path_with_segment: start point mismatch");
      const o = s3.getGeometryType();
      if (o === a.enumLine) return void this.closePathWithLine(t2);
      {
        const t3 = ks(s3);
        this.initSegmentData(t3);
        const e = Hs2.toSegType(o), n6 = this.m_curveData.m_segmentFlags.read(r);
        if (n6 !== e) this.m_curveData.m_segmentParamIndex.write(r, this.m_curveData.m_curveParamWritePoint), s3.writeInBufferStream(this.m_curveData.m_segmentParams, this.m_curveData.m_curveParamWritePoint), this.m_curveData.m_curveParamWritePoint += t3, this.incCurveType(e, 1), 1 !== n6 ? this.incCurveType(n6, -1) : this.modifyCurveCounter(1);
        else {
          const t4 = this.m_curveData.m_segmentParamIndex.read(r);
          s3.writeInBufferStream(this.m_curveData.m_segmentParams, t4);
        }
        this.m_curveData.m_segmentFlags.write(r, e);
      }
    }
    const n4 = this.m_pathFlags.read(t2);
    1 & n4 || this.m_pathFlags.write(t2, 1 | n4), this.notifyModifiedFlags(2001);
  }
  closeAllPaths() {
    if (this.m_bPolygon || this.isEmptyImpl()) return;
    this.m_bPathStarted = false;
    let t2 = false;
    for (let e = 0, s3 = this.m_paths.size() - 1; e < s3; e++) {
      if (this.isClosedPath(e)) continue;
      const s4 = this.m_pathFlags.read(e);
      this.m_pathFlags.write(e, 1 | s4), t2 = true;
    }
    t2 && this.notifyModifiedFlags(512);
  }
  isClosedPath(t2) {
    return !!(1 & this.m_pathFlags.read(t2));
  }
  isClosedPathInXYPlane(t2) {
    if (this.isClosedPath(t2)) return true;
    const e = this.getPathStart(t2), s3 = this.getPathEnd(t2) - 1;
    if (e > s3) return false;
    const n4 = this.getXY(e), i = this.getXY(s3);
    return n4.isEqualPoint2D(i);
  }
  isClosedPathIn3D(t2) {
    return n(0), false;
  }
  hasNonLinearSegmentsPath(t2) {
    if (!this.hasNonLinearSegments()) return false;
    for (let e = this.getPathStart(t2), s3 = this.getPathEnd(t2); e < s3; e++) if (_Us.isNonLinearSegmentFlag(this.m_curveData.m_segmentFlags.read(e))) return true;
    return false;
  }
  isNonLinearSegment(t2) {
    return !(1 & this.getSegmentFlags(t2));
  }
  addEnvelope(t2, e) {
    if (t2.isEmpty()) return;
    const s3 = 0 === this.m_pointCount;
    if (t2 instanceof n3) this.startPathCoords(t2.xmin, t2.ymin), e ? (this.lineToCoords(t2.xmax, t2.ymin), this.lineToCoords(t2.xmax, t2.ymax), this.lineToCoords(t2.xmin, t2.ymax)) : (this.lineToCoords(t2.xmin, t2.ymax), this.lineToCoords(t2.xmax, t2.ymax), this.lineToCoords(t2.xmax, t2.ymin));
    else {
      const s4 = t2.getDescription(), n4 = B(), i = new se({ vd: s4, attribBuffer: n4, initDefaultValues: false });
      for (let r = 0, o = 4; r < o; r++) {
        const s5 = e ? o - r - 1 : r;
        t2.queryCornerByVal(s5, i), 0 === r ? this.startPathPoint(i) : this.lineToPoint(i);
      }
    }
    this.closePathWithLine(), this.m_bPathStarted = false, s3 && !e && (this.setDirtyFlagProtected(256, false), this.m_bPolygon && Math.min(t2.width(), t2.height()) > 0 && this.setIsSimple(3, 0));
  }
  addPathFromClosedSegment(t2, s3) {
    if (t2.isClosed() || P("add_path_from_closedSegment: segment must be closed"), s3) {
      const e = t2.getReversed(), s4 = new se();
      e.queryStart(s4), this.startPathPoint(s4), this.closeLastPathWithSegment(e);
    } else {
      const e = new se();
      t2.queryStart(e), this.startPathPoint(e), this.closeLastPathWithSegment(t2);
    }
  }
  addSegment_(t2, s3) {
    const n4 = t2.getDescription();
    this.mergeVertexDescription(n4);
    const r = B(), o = new se({ vd: n4, attribBuffer: r, initDefaultValues: false }), a2 = t2.getGeometryType();
    if (a2 === a.enumLine) (s3 || this.isEmptyImpl()) && (t2.queryStart(o), this.startPathPoint(o)), t2.queryEnd(o), this.lineToPoint(o);
    else {
      let n5 = false;
      if ((s3 || this.isEmptyImpl()) && (n5 = true), !n5) {
        t2.getStartXY().equals(this.getXY(this.m_pointCount - 1)) || P("add_segment: start point mismatch");
      }
      if (n5 && (t2.queryStart(o), this.startPathPoint(o)), this.beforeNewSegment(1), t2.queryEnd(o), o.getDescription() === this.m_description) this.setPointByVal(this.m_pointCount - 1, o);
      else {
        const t3 = B(), e = new se({ vd: this.m_description, attribBuffer: t3, initDefaultValues: false });
        o.copyCommonAttributesTo(e), this.setPointByVal(this.m_pointCount - 1, e);
      }
      const i = ks(t2);
      this.initSegmentData(i), this.m_curveData.m_segmentParamIndex.write(this.m_pointCount - 2, this.m_curveData.m_curveParamWritePoint), t2.writeInBufferStream(this.m_curveData.m_segmentParams, this.m_curveData.m_curveParamWritePoint), this.m_curveData.m_curveParamWritePoint += i;
      const r2 = Hs2.toSegType(a2);
      this.incCurveType(r2, 1), this.modifyCurveCounter(1), this.m_curveData.m_segmentFlags.write(this.m_pointCount - 2, r2);
    }
  }
  addSegment(t2, e, s3) {
    s3 ? e ? this.addPathFromClosedSegment(t2, false) : this.closeLastPathWithSegment(t2) : this.addSegment_(t2, e);
  }
  interpolateAttributesRange(t2, s3, n4, i) {
    for (let a2 = t2; a2 < n4 - 1; a2++) this.isClosedPath(a2) && P("cannot interpolate across closed paths");
    const r = this.m_description.getAttributeCount();
    if (1 === r) return;
    const o = this.calculateSubLength2D(t2, s3, n4, i);
    if (0 !== o) for (let e = 1; e < r; e++) {
      const r2 = this.m_description.getSemantics(e);
      this.interpolateAttributesSemanticsImpl(r2, t2, s3, n4, i, o);
    }
  }
  interpolateAttributesSemantics(t2, s3, n4, i, r) {
    if (0 === t2) return;
    this.hasAttribute(t2) || P("does not have the given attribute");
    2 === Zs.getInterpolation(t2) && P("angular interpolation");
    for (let a2 = s3; a2 < i - 1; a2++) this.isClosedPath(a2) && P("cannot interpolate across closed paths");
    const o = this.calculateSubLength2D(s3, n4, i, r);
    0 !== o && this.interpolateAttributesSemanticsImpl(t2, s3, n4, i, r, o);
  }
  interpolateAttributesPath(t2, e, s3) {
    const n4 = this.m_description.getAttributeCount();
    if (1 === n4) return;
    if (e === s3) return;
    const i = this.calculatePathSubLength2D(t2, e, s3);
    for (let r = 1; r < n4; r++) {
      const n5 = this.m_description.getSemantics(r);
      this.interpolateAttributesSemanticsPathImpl(n5, t2, e, s3, i);
    }
  }
  interpolateAttributesSemanticsPath(t2, s3, n4, i) {
    if (0 === t2) return;
    this.hasAttribute(t2) || P("does not have the given attribute");
    2 === Zs.getInterpolation(t2) && P("angular interpolation");
    const r = this.calculatePathSubLength2D(s3, n4, i);
    0 !== r && this.interpolateAttributesSemanticsPathImpl(t2, s3, n4, i, r);
  }
  interpolateAttributesSemanticsImpl(t2, e, s3, n4, i, r) {
    const o = this.querySegmentIterator(), a2 = this.getPathStart(e) + s3, h2 = this.getPathStart(n4) + i, u = Zs.getComponentCount(t2), m = Yt(Zs.maxComponentCount(), Number.NaN);
    this.queryAttributeAsDbl(t2, a2, m, u);
    const l2 = Yt(Zs.maxComponentCount(), Number.NaN);
    this.queryAttributeAsDbl(t2, h2, l2, u);
    const c = Yt(Zs.maxComponentCount(), Number.NaN);
    Dt(c, m, 0, 0, u);
    let g2 = 0;
    const d = Zs.getDefaultValue(t2), _ = Zs.getInterpolation(t2);
    o.resetToVertex(a2, e);
    do {
      if (o.hasNextSegment()) {
        if (o.nextSegment(), o.getStartPointIndex() === h2) return;
        this.setAttributeFromArray(t2, o.getStartPointIndex(), c, u), o.previousSegment();
        do {
          const e2 = o.nextSegment();
          if (o.getEndPointIndex() === h2) return;
          g2 += e2.calculateLength2D();
          wt(_, m, l2, c, 0, u, g2 / r, d), o.isClosingSegment() || this.setAttributeFromArray(t2, o.getEndPointIndex(), c, u);
        } while (o.hasNextSegment());
      }
    } while (o.nextPath());
  }
  interpolateAttributesSemanticsPathImpl(t2, e, n4, i, r) {
    n(0 !== t2);
    const o = this.querySegmentIterator(), a2 = Zs.getInterpolation(t2), h2 = this.getPathStart(e) + n4, u = this.getPathStart(e) + i;
    if (u === h2) return;
    const m = Zs.getComponentCount(t2), l2 = Yt(Zs.maxComponentCount(), Number.NaN);
    this.queryAttributeAsDbl(t2, h2, l2, m);
    const c = Yt(Zs.maxComponentCount(), Number.NaN);
    this.queryAttributeAsDbl(t2, u, c, m);
    const g2 = new n2(0);
    o.resetToVertex(h2, e), o.setCirculator(this.isClosedPath(e));
    const d = Zs.getDefaultValue(t2), _ = Yt(Zs.maxComponentCount(), Number.NaN);
    Dt(_, l2, 0, 0, m);
    const p2 = 0 === r;
    let f2 = 0.5;
    do {
      const e2 = o.nextSegment();
      if (this.setAttributeFromArrayNoCurves(t2, o.getStartPointIndex(), _, m), !p2) {
        const t3 = e2.calculateLength2D();
        g2.pe(t3), f2 = g2.getResult() / r;
      }
      wt(a2, l2, c, _, 0, m, f2, d);
    } while (o.getEndPointIndex() !== u);
  }
  querySegment(t2, s3, n4) {
    const i = this.getPathIndexFromPointIndex(t2), r = t2 - this.getPathStart(i);
    r >= this.getSegmentCountPath(i) && P("get_segment"), this.getSegmentFromPath(i, r, s3, n4);
  }
  getSegment(t2, e) {
    const s3 = new this.m_segmentBufferCTor();
    return this.getSegmentBuffer(t2, s3, e), s3.releaseSegment();
  }
  getSegmentType(t2) {
    const s3 = this.getPathIndexFromPointIndex(t2), n4 = t2 - this.getPathStart(s3);
    return n4 >= this.getSegmentCountPath(s3) && P("get_segment"), this.getSegmentTypeFromPath(s3, n4);
  }
  getSegmentFromPath(t2, e, s3, n4) {
    const i = this.getPathStart(t2) + e, r = this.getSegmentFlagsStreamRef();
    let o = 1;
    switch (r && (o = 31 & r.read(i)), o) {
      case 1:
        s3.createLine();
        break;
      case 2:
        s3.createCubicBezier();
        break;
      case 4:
        s3.createEllipticArc();
        break;
      case 8:
        s3.createQuadraticRationalBezier();
        break;
      case 16:
        s3.createQuadraticBezier();
        break;
      default:
        b("");
    }
    const a2 = s3.get();
    let u, m = null;
    n4 ? (m = M(), a2.assignVertexDescription(m)) : a2.assignVertexDescription(this.m_description), u = i === this.getPathEnd(t2) - 1 && this.isClosedPath(t2) ? this.getPathStart(t2) : i + 1;
    je(a2, this.getXY(i));
    if (He(a2, this.getXY(u)), !n4) for (let h2 = 1, l2 = this.m_description.getAttributeCount(); h2 < l2; h2++) {
      const t3 = this.m_description.getSemantics(h2), e2 = Zs.getComponentCount(t3);
      for (let s4 = 0; s4 < e2; s4++) {
        const e3 = this.getAttributeAsDbl(t3, i, s4);
        a2.setStartAttribute(t3, s4, e3);
        const n5 = this.getAttributeAsDbl(t3, u, s4);
        a2.setEndAttribute(t3, s4, n5);
      }
    }
    if (_Us.isNonLinearSegmentFlag(o)) {
      const t3 = this.m_curveData.m_segmentParamIndex.read(i);
      a2.readFromBufferStream(this.m_curveData.m_segmentParams, t3);
    }
  }
  replaceLinearEllipticalArcsWithTrueLines() {
    if (!this.hasNonLinearSegments()) return false;
    if (0 === this.m_curveData.m_arcCount) return false;
    let t2 = false;
    for (let e = 0, s3 = this.getPointCount(); e < s3; e++) {
      if (4 === this.m_curveData.m_segmentFlags.read(e)) {
        const s4 = this.m_curveData.m_segmentParamIndex.read(e);
        Bs(this.m_curveData.m_segmentParams, s4).isNAN() && (this.m_curveData.m_segmentFlags.write(e, 1), this.m_curveData.m_segmentParamIndex.write(e, -1), this.incCurveType(4, -1), this.modifyCurveCounter(-1), t2 = true);
      }
    }
    return t2 && this.checkCompactSegmentParams(), t2;
  }
  queryPointAlongPath(t2, s3, n4, i = false) {
    const r = { iSegment: -1 }, o = i ? r : { tSegment: 0 };
    if (n4.setEmpty(), this.isEmpty()) return r;
    if ((t2 < 0 || t2 >= this.getPathCount()) && P("query_point_along_path"), s3 < 0) return r;
    const a2 = this.getPathSize(t2);
    if (0 === a2) return r;
    if (1 === a2) return this.getPointByVal(this.getPathStart(t2), n4), o.tSegment = 0, r.iSegment = this.getPathStart(t2), r;
    const h2 = this.querySegmentIteratorAtVertex(this.getPathStart(t2)), u = new n2(0);
    for (; h2.hasNextSegment(); ) {
      const t3 = h2.nextSegment(), e = t3.calculateLength2D(), i2 = u.getResult();
      if (u.add(e), u.getResult() >= s3) {
        let a3 = s3 - i2;
        a3 > e && (a3 = e);
        const u2 = t3.lengthToT(a3);
        return t3.queryCoord(u2, n4), o.tSegment = u2, r.iSegment = h2.getStartPointIndex(), r;
      }
    }
    if (this.isClosedPath(t2)) {
      const e = this.getPathStart(t2);
      return this.getPointByVal(e, n4), o.tSegment = 1, r.iSegment = this.getPathEnd(t2) - 1, r;
    }
    {
      const e = this.getPathEnd(t2) - 1;
      return this.getPointByVal(e, n4), this.getPathSize(t2) > 1 ? (o.tSegment = 1, r.iSegment = this.getPathEnd(t2) - 2, r) : (o.tSegment = 0, r.iSegment = this.getPathStart(t2), r);
    }
  }
  queryPointsAlongPath(t2, s3, n4, i, r, o) {
    {
      let t3 = 0;
      for (let a3 = 0; a3 < s3; ++a3) i && i[a3].setEmpty(), r && (r[a3] = -1), o && (o[a3] = 0), t3 > n4[a3] && P("query_points_along"), t3 = n4[a3];
    }
    const a2 = this.getPathSize(t2);
    if (0 === s3 || 0 === a2) return 0;
    if (1 === a2) {
      const e = this.getPathStart(t2);
      return i && this.getPointByVal(e, i[0]), o && (o[0] = 0), r && (r[0] = e), 1;
    }
    const h2 = this.getPathStart(t2), u = new n2(0), m = this.querySegmentIteratorAtVertex(h2);
    let l2 = 0, c = 0, g2 = n4[l2];
    for (; m.hasNextSegment(); ) {
      const t3 = m.nextSegment(), e = t3.calculateLength2D(), a3 = u.getResult();
      for (u.add(e); u.getResult() >= g2; ) {
        let h3 = g2 - a3;
        h3 > e && (h3 = e);
        const u2 = t3.lengthToT(h3);
        if (i && t3.queryCoord(u2, i[c]), o && (o[c] = u2), r && (r[c] = m.getStartPointIndex()), c++, l2++, g2 = n4[l2], l2 === s3) return c;
      }
    }
    if (this.isClosedPath(t2)) {
      const e = this.getPathStart(t2), s4 = 0;
      i && this.getPointByVal(e, i[c]), o && (o[c] = s4), r && (r[c] = e), c++;
    } else if (this.getPathSize(t2) > 1) {
      const e = this.getPathEnd(t2) - 2, s4 = 1;
      i && this.getPointByVal(e + 1, i[c]), o && (o[c] = s4), r && (r[c] = e), c++;
    }
    return c;
  }
  queryPointsAlong(t2, s3, n4, i, r) {
    {
      let o2 = 0;
      for (let a3 = 0; a3 < t2; ++a3) n4 && n4[a3].setEmpty(), i && (i[a3] = -1), r && (r[a3] = 0), o2 > s3[a3] && P("query_points_along"), o2 = s3[a3];
    }
    if (0 === t2) return 0;
    const o = new n2(0), a2 = this.querySegmentIterator();
    let h2 = -1, u = 0, m = 0, l2 = s3[u];
    for (; a2.nextPath(); ) for (; a2.hasNextSegment(); ) {
      h2 = a2.getPathIndex();
      const e = a2.nextSegment(), c = e.calculateLength2D(), g2 = o.getResult();
      for (o.add(c); o.getResult() >= l2; ) {
        let o2 = l2 - g2;
        o2 > c && (o2 = c);
        const h3 = e.lengthToT(o2);
        if (n4 && e.queryCoord(h3, n4[m]), r && (r[m] = h3), i && (i[m] = a2.getStartPointIndex()), m++, u++, l2 = s3[u], u === t2) return m;
      }
    }
    if (h2 < 0) return 0;
    if (this.isClosedPath(h2)) {
      const t3 = this.getPathStart(h2), e = 0;
      n4 && this.getPointByVal(t3, n4[m]), r && (r[m] = e), i && (i[m] = t3), m++;
    } else if (this.getPathSize(h2) > 1) {
      const t3 = this.getPathEnd(h2) - 2, e = 1;
      n4 && this.getPointByVal(t3 + 1, n4[m]), r && (r[m] = e), i && (i[m] = t3), m++;
    }
    return m;
  }
  querySegmentIterator() {
    return new Vs2({ parent: this });
  }
  querySegmentIteratorAtVertex(t2) {
    return new Vs2({ parent: this, pointIndex: t2 });
  }
  queryPathEnvelope(t2, e) {
    this.queryPathEnvelopeImpl(t2, e, true);
  }
  queryLoosePathEnvelope(t2, e) {
    this.queryPathEnvelopeImpl(t2, e, false);
  }
  queryPathEnvelopeImpl(t2, n4, i) {
    if (n4 instanceof he && n(0, "not implemented for Envelope"), n4 instanceof G2 && n(0, "not implemented for Envelope3D"), (t2 >= this.getPathCount() || t2 < 0) && P(""), this.isEmpty()) return void n4.setEmpty();
    const r = this.getAttributeStreamRef(0), o = n3.constructEmpty();
    o.setEmpty();
    for (let e = 2 * this.getPathStart(t2), a2 = 2 * this.getPathEnd(t2); e < a2; ) {
      const t3 = a2 - e;
      n(!(1 & t3)), o.mergePointsInterleaved(r, e / 2, t3 / 2), e += t3;
    }
    if (n4.setCoords({ env2D: o }), this.hasNonLinearSegmentsPath(t2)) {
      const e = this.querySegmentIterator();
      if (e.resetToPath(t2), e.nextPath()) for (; e.hasNextSegment(); ) {
        const t3 = e.nextCurve();
        if (!t3) break;
        {
          const e2 = n3.constructEmpty();
          i ? t3.queryEnvelope(e2) : t3.queryLooseEnvelope(e2), n4.mergeEnvelope2D(e2);
        }
      }
      else n(0);
    }
  }
  checkCompactSegmentParams() {
    if (!this.m_curveData || null === this.m_curveData.m_segmentParams) return false;
    if (this.m_curveData.m_segmentParams.size() <= this.m_vertexAttributes.get(0).size()) return false;
    const t2 = 10, e = Gs2(4) * this.m_curveData.m_arcCount + Gs2(2) * this.m_curveData.m_bezierCount + Gs2(8) * this.m_curveData.m_rbezier2Count + Gs2(16) * this.m_curveData.m_bezier2Count;
    return this.m_curveData.m_segmentParams.size() > Math.max(3 * e >> 1, t2) ? (this.forceCompactSegmentParams(), true) : (0 === this.m_pointCount && (this.m_curveData.m_curveParamWritePoint = 0), false);
  }
  forceCompactSegmentParams() {
    let t2 = 0;
    for (let n4 = 0, i = this.getPointCount(); n4 < i; n4++) {
      const e2 = this.m_curveData.m_segmentFlags.read(n4);
      if (_Us.isNonLinearSegmentFlag(e2)) {
        t2 += Gs2(e2);
      }
    }
    const e = $2(t2);
    let s3 = 0;
    for (let n4 = 0, i = this.getPointCount(); n4 < i; n4++) {
      const t3 = this.m_curveData.m_segmentFlags.read(n4);
      if (_Us.isNonLinearSegmentFlag(t3)) {
        let i2 = this.m_curveData.m_segmentParamIndex.read(n4);
        this.m_curveData.m_segmentParamIndex.write(n4, s3);
        const r = Gs2(t3);
        for (let t4 = 0; t4 < r; t4++) e.write(s3, this.m_curveData.m_segmentParams.read(i2)), s3++, i2++;
      }
    }
    this.m_curveData.m_segmentParams = e, this.m_curveData.m_curveParamWritePoint = s3;
  }
  setEmpty() {
    this.m_curveData && (this.removeAllCurvesFromGlobalCounter(), this.m_curveData = null), this.m_bPathStarted = false, this.m_paths = null, this.m_pathFlags = null, this.setEmptyImpl();
  }
  applyTransformation(t2) {
    this.applyTransformationToPath(t2, -1);
  }
  applyTransformation3D(t2) {
    n(0);
  }
  getImpl() {
    return this;
  }
  reserve(t2) {
    this.reserveImpl(t2), t2 > 0 && !this.m_paths && (this.m_paths = J2(0), this.m_pathFlags = K2(0), this.m_paths.reserve(2), this.m_pathFlags.reserve(2), this.m_paths.resize(1, 0), this.m_pathFlags.resize(1, this.m_bPolygon ? 1 : 0));
  }
  reserveParts(t2, e) {
    this.reserveImpl(t2), e > 0 && (this.m_paths ? (this.m_paths.reserve(e + 1), this.m_pathFlags.reserve(e + 1)) : (this.m_paths = J2(0), this.m_pathFlags = K2(0), this.m_paths.reserve(e + 1), this.m_pathFlags.reserve(e + 1), this.m_paths.resize(1, 0), this.m_pathFlags.resize(1, this.m_bPolygon ? 1 : 0)));
  }
  clone() {
    const t2 = this.createInstance();
    return this.copyTo(t2), t2;
  }
  queryLimitedSegmentIterator(t2) {
    return new Os2(this, t2);
  }
  getPathStreamRef() {
    return this.throwIfEmpty(), this.m_paths;
  }
  setPathStreamRef(t2) {
    this.m_paths = t2;
  }
  getSegmentFlagsStreamRef() {
    return this.throwIfEmpty(), null != this.m_curveData ? this.m_curveData.m_segmentFlags : null;
  }
  getPathFlagsStreamRef() {
    return this.throwIfEmpty(), this.m_pathFlags;
  }
  setPathFlagsStreamRef(t2) {
    this.m_pathFlags = t2;
  }
  getSegmentIndexStreamRef() {
    return this.throwIfEmpty(), null !== this.m_curveData ? this.m_curveData.m_segmentParamIndex : null;
  }
  getSegmentDataStreamRef() {
    return this.throwIfEmpty(), null !== this.m_curveData ? this.m_curveData.m_segmentParams : null;
  }
  setSegmentData(t2, e, s3, n4) {
    this.m_curveData || (this.m_curveData = new Hs2()), this.m_curveData.m_segmentFlags = s3, this.m_curveData.m_segmentParams = e, this.m_curveData.m_segmentParamIndex = t2, this.m_curveData.m_curveParamWritePoint = n4;
  }
  static getPathIndexFromPointIndexImpl(t2, e, s3, n4) {
    if (n4 >= 0 && n4 < e) {
      if (s3 >= t2.read(n4)) {
        if (s3 < t2.read(n4 + 1)) return n4;
        n4++;
      } else n4--;
      if (n4 >= 0 && n4 < e && s3 >= t2.read(n4) && s3 < t2.read(n4 + 1)) return n4;
    }
    if (e < 5) {
      for (let n5 = 0; n5 < e; n5++) if (s3 < t2.read(n5 + 1)) return n5;
      v("");
    }
    let i = 0, r = e - 1;
    for (; r > i; ) {
      const e2 = i + (r - i >> 1);
      if (s3 < t2.read(e2)) r = e2 - 1;
      else {
        if (!(s3 >= t2.read(e2 + 1))) return e2;
        i = e2 + 1;
      }
    }
    return i;
  }
  getHighestPointIndex(t2) {
    n(t2 >= 0 && t2 < this.getPathCount());
    const e = this.getAttributeStreamRef(0), n4 = this.getPathEnd(t2), i = this.getPathStart(t2);
    let r = -1;
    const o = new mi();
    o.y = Number.NEGATIVE_INFINITY, o.x = Number.NEGATIVE_INFINITY;
    for (let s3 = i + 0; s3 < n4; s3++) {
      const t3 = e.readPoint2D(2 * s3);
      -1 === o.compare(t3) && (r = s3, o.setCoordsPoint2D(t3));
    }
    return r;
  }
  applyTransformationToPath(t2, s3) {
    if (s3 >= this.getPathCount() && P("apply_transformation"), this.isEmpty()) return;
    if (t2.isIdentity()) return;
    const n4 = this.m_vertexAttributes.get(0);
    if (!(s3 < 0 ? this.hasNonLinearSegments() : this.hasNonLinearSegmentsPath(s3))) {
      let e, i2;
      return s3 < 0 ? (e = 0, i2 = this.m_pointCount) : (e = this.getPathStart(s3), i2 = this.getPathEnd(s3)), n4.applyTransformation(t2, 2 * e, i2 - e), void this.notifyModifiedFlags(2001);
    }
    const i = new this.m_segmentBufferCTor(), r = this.getPathCount();
    let o = s3 < 0 ? 0 : s3;
    do {
      const e = this.getPathStart(o), r2 = this.getPathEnd(o), a2 = this.isClosedPath(o), h2 = n4.readPoint2D(2 * e);
      if (!this.hasNonLinearSegmentsPath(o)) {
        n4.applyTransformation(t2, 2 * e, r2 - e);
        continue;
      }
      const u = mi.getNAN();
      for (let s4 = e; s4 < r2; ++s4) {
        if (1 !== (31 & this.m_curveData.m_segmentFlags.read(s4))) {
          const o3 = a2 && s4 + 1 === r2;
          o3 && n4.writePoint2D(2 * e, h2), this.getSegmentBuffer(s4, i, true), i.get().applyTransformation(t2);
          const u2 = this.m_curveData.m_segmentParamIndex.read(s4);
          i.get().writeInBufferStream(this.m_curveData.m_segmentParams, u2), n4.writePoint2D(2 * s4, i.get().getStartXY()), o3 && n4.writePoint2D(2 * e, i.get().getEndXY());
          continue;
        }
        const o2 = 2 * s4;
        n4.queryPoint2D(o2, u), t2.transformInPlace(u), n4.writePoint2D(o2, u);
      }
      if (o === s3) break;
    } while (++o < r);
    this.notifyModifiedFlags(2001);
  }
  calculateSubLength2D(t2, e, s3, n4) {
    const i = this.getPathStart(t2) + e, r = this.getPathStart(s3) + n4;
    (r < i || i < 0 || r > this.getPointCount() - 1) && C("");
    const o = this.querySegmentIterator();
    let a2 = 0;
    o.resetToVertex(i, t2);
    do {
      for (; o.hasNextSegment(); ) {
        const t3 = o.nextSegment();
        if (o.getStartPointIndex() === r) break;
        a2 += t3.calculateLength2D();
      }
      if (o.getStartPointIndex() === r) break;
    } while (o.nextPath());
    return a2;
  }
  calculatePathSubLength2D(t2, s3, n4) {
    const i = this.getPathStart(t2) + s3, r = this.getPathStart(t2) + n4;
    (i < 0 || r > this.getPointCount() - 1) && C("");
    const o = this.querySegmentIterator();
    if (i > r && (this.isClosedPath(t2) || P("cannot iterate across an open path"), o.setCirculator(true)), i === r) return 0;
    let a2 = 0, h2 = 0;
    o.resetToVertex(i, t2);
    do {
      h2 += a2;
      a2 = o.nextSegment().calculateLength2D();
    } while (o.getStartPointIndex() !== r);
    return h2;
  }
  calculateEnvelope2D(t2) {
    return this.updateXYImpl(t2);
  }
  updateXYImpl(t2) {
    const e = super.updateXYImpl(t2);
    if (this.hasNonLinearSegments()) {
      const s3 = n3.constructEmpty(), n4 = this.querySegmentIterator();
      for (; n4.nextPath(); ) for (; n4.hasNextSegment(); ) {
        const i = n4.nextCurve();
        if (!i) break;
        t2 ? i.queryEnvelope(s3) : i.queryLooseEnvelope(s3), e.mergeEnvelope2D(s3);
      }
    }
    return e;
  }
  notifyModifiedAllImpl() {
    null !== this.m_paths && this.m_paths.size() ? this.m_pointCount = this.m_paths.read(this.m_paths.size() - 1) : this.m_pointCount = 0;
  }
  setDirtyOGCFlags(t2) {
    this.setDirtyFlagProtected(16, t2);
  }
  hasDirtyOGCStartFlags() {
    return this.hasDirtyFlag(16);
  }
  setDirtyRingAreas2D(t2) {
    this.setDirtyFlagProtected(1024, t2);
  }
  hasDirtyRingAreas2D() {
    return this.hasDirtyFlag(1024);
  }
  static isNonLinearSegmentFlag(t2) {
    return !(1 & t2);
  }
  addAndExplicitlyOpenAllPaths(t2, s3) {
    this === t2 && P("Multi_path_impl::add");
    let n4 = this.getPathCount();
    for (let e = 0, i = t2.getPathCount(); e < i; e++) this.addPath(t2, e, !s3), this.openPathAndDuplicateStartVertex(n4), n4++;
  }
  getSegmentFlags(t2) {
    return null !== this.m_curveData && null !== this.m_curveData.m_segmentFlags ? this.m_curveData.m_segmentFlags.read(t2) : 1;
  }
  getSegmentBuffer(t2, s3, n4) {
    const i = this.getPathIndexFromPointIndex(t2), r = t2 - this.getPathStart(i);
    r >= this.getSegmentCountPath(i) && P("getSegmentBuffer"), this.getSegmentFromPath(i, r, s3, n4);
  }
  getSegmentTypeFromPath(t2, e) {
    const s3 = this.getPathStart(t2) + e, n4 = this.getSegmentFlagsStreamRef();
    let r = 1;
    switch (n4 && (r = 31 & n4.read(s3)), r) {
      case 1:
        return a.enumLine;
      case 2:
        return a.enumBezier;
      case 4:
        return a.enumEllipticArc;
      case 8:
        return a.enumRationalBezier2;
      case 16:
        return a.enumBezier2;
      default:
        b("");
    }
  }
  ensureXYMonotoneSegments() {
    if (!this.m_curveData) return false;
    let t2 = false;
    for (let e = 0, s3 = this.getPathCount(); e < s3; e++) {
      const s4 = this.getPathStart(e), n4 = this.getPathEnd(e), i = n4 - s4;
      for (let e2 = s4; e2 < n4; e2++) {
        const n5 = 31 & this.m_curveData.m_segmentFlags.read(e2);
        if (1 === n5) continue;
        2 !== n5 && z("ensure_xy_monotone_segments");
        const r = (e2 - s4 + 1) % i + s4, o = this.m_curveData.m_segmentParamIndex.read(e2), h2 = Ot(mi, 4);
        h2[0] = this.getXY(e2), h2[3] = this.getXY(r), h2[1].x = this.m_curveData.m_segmentParams.read(o), h2[1].y = this.m_curveData.m_segmentParams.read(o + 1), h2[2].x = this.m_curveData.m_segmentParams.read(o + 2), h2[2].y = this.m_curveData.m_segmentParams.read(o + 3), Ve(h2) && (t2 = true, this.m_curveData.m_segmentParams.write(o, h2[1].x), this.m_curveData.m_segmentParams.write(o + 1, h2[1].y), this.m_curveData.m_segmentParams.write(o + 2, h2[2].x), this.m_curveData.m_segmentParams.write(o + 3, h2[2].y));
      }
    }
    return t2 && this.notifyModifiedFlags(2001), t2;
  }
  buildRasterizedGeometryAccelerator(t2, e) {
    return false;
  }
  buildQuadTreeAccelerator(t2) {
    if (this.m_accelerators || (this.m_accelerators = new Ls2()), null !== this.m_accelerators.getQuadTree()) return true;
    this.ensureUniqueAccelerators(), this.m_accelerators.setQuadTree(null);
    const e = Jt2(this);
    return this.m_accelerators.setQuadTree(e), true;
  }
  buildQuadTreeForPathsAccelerator(t2) {
    if (this.m_accelerators || (this.m_accelerators = new Ls2()), null !== this.m_accelerators.getQuadTreeForPaths()) return true;
    this.ensureUniqueAccelerators(), this.m_accelerators.setQuadTreeForPaths(null);
    const e = jt2(this);
    return this.m_accelerators.setQuadTreeForPaths(e), true;
  }
  updateCurveCounter(t2) {
    this.modifyCurveCounter(t2 - this.getCurveCount());
  }
  removeAllCurvesFromGlobalCounter() {
    this.m_curveData && (_Us.st_totalCurveCount -= this.m_curveData.m_curveCount, this.m_curveData.m_curveCount = 0, this.m_curveData.m_bezierCount = 0, this.m_curveData.m_arcCount = 0, this.m_curveData.m_bezier2Count = 0, this.m_curveData.m_rbezier2Count = 0, this.m_curveData.m_curveParamWritePoint = 0);
  }
  modifyCurveCounter(t2) {
    t2 && (this.m_curveData || (this.m_curveData = new Hs2()), _Us.st_totalCurveCount += t2, this.m_curveData.m_curveCount += t2);
  }
  getCurveCount() {
    return this.m_curveData ? this.m_curveData.m_curveCount : 0;
  }
  incCurveType(t2, e) {
    this.m_curveData || (this.m_curveData = new Hs2()), 2 & t2 ? this.m_curveData.m_bezierCount += e : 4 & t2 ? this.m_curveData.m_arcCount += e : 8 & t2 ? this.m_curveData.m_rbezier2Count += e : 16 & t2 && (this.m_curveData.m_bezier2Count += e);
  }
  getCurveWritePoint() {
    return null !== this.m_curveData ? this.m_curveData.m_curveParamWritePoint : 0;
  }
  initSegmentData(t2) {
    null === this.m_curveData && (this.m_curveData = new Hs2());
    const e = this.m_reservedPointCount > 0 ? this.m_reservedPointCount : this.m_pointCount;
    null === this.m_curveData.m_segmentParamIndex && (this.m_curveData.m_segmentFlags = K2(e, 1), this.m_curveData.m_segmentParamIndex = J2(e, -1));
    const s3 = this.m_curveData.m_curveParamWritePoint + t2;
    null === this.m_curveData.m_segmentParams ? this.m_curveData.m_segmentParams = $2(s3) : s3 !== this.m_curveData.m_segmentParams.size() && this.m_curveData.m_segmentParams.resize(s3, 0), this.m_curveData.m_segmentFlags.size() < e && (this.m_curveData.m_segmentFlags.resize(e, 1), this.m_curveData.m_segmentParamIndex.resize(e, -1));
  }
  updateCurveWritePoint(t2) {
    null === this.m_curveData && (this.m_curveData = new Hs2()), this.m_curveData.m_curveParamWritePoint = t2;
  }
  updateOGCFlagsHelper() {
    const t2 = this.getPathCount();
    if (0 === t2) return;
    const e = this.m_pathFlags;
    let s3 = 0;
    for (let n4 = 0; n4 < t2; n4++) {
      const t3 = this.m_cachedRingAreas2D.read(n4);
      0 === s3 && (s3 = K(t3)), t3 * s3 > 0 || 0 === s3 ? e.setBits(n4, 8) : e.clearBits(n4, 8);
    }
  }
  updateOGCFlagsProtected() {
    this.hasDirtyFlag(16) && (this.updateRingAreas2DProtected(), this.updateOGCFlagsHelper(), this.setDirtyFlagProtected(16, false));
  }
  replaceSegment(t2, n4, i) {
    (t2 < 0 || t2 >= this.getPointCount()) && P("Multi_path_impl.replace_segment"), n(n4.isCurve());
    const r = this.getPathIndexFromPointIndex(t2), o = this.getPathStart(r), a2 = (t2 - o + 1) % this.getPathSize(r) + o;
    {
      const e = this.getXY(t2), i2 = this.getXY(a2), r2 = !e.isEqualPoint2D(n4.getStartXY()) || !i2.isEqualPoint2D(n4.getEndXY());
      n(!r2);
    }
    this.replaceSegmentImpl(t2, a2, n4, i);
  }
  replaceSegmentImpl(t2, e, n4, i) {
    const r = n4.getDescription();
    this.mergeVertexDescription(r);
    const o = Yt(32, Number.NaN), a2 = new se({ vd: r, attribBuffer: o, initDefaultValues: false }), h2 = null === this.m_curveData ? 1 : 31 & this.m_curveData.m_segmentFlags.read(t2), u = Gs2(h2), m = ks(n4);
    let l2, c = false;
    u >= m ? (n(null !== this.m_curveData), c = true, l2 = this.m_curveData.m_segmentParamIndex.read(t2)) : (this.initSegmentData(m), c = false, l2 = this.m_curveData.m_curveParamWritePoint);
    const g2 = n4.getGeometryType(), d = Hs2.toSegType(g2);
    i || (n4.queryStart(a2), this.setPointByValNoCurves(t2, a2), n4.queryEnd(a2), this.setPointByValNoCurves(e, a2)), this.m_curveData.m_segmentParamIndex.write(t2, 1 !== d ? l2 : -1), this.m_curveData.m_segmentFlags.write(t2, d), 1 !== d && n4.writeInBufferStream(this.m_curveData.m_segmentParams, l2), c || (this.m_curveData.m_curveParamWritePoint += m), h2 !== d && (this.incCurveType(h2, -1), this.incCurveType(d, 1), this.modifyCurveCounter(1 === h2 ? 1 : -1));
  }
  setAttributeImpl(t2, s3, n4) {
    if (this.addAttribute(t2), !this.isEmpty()) if (this.hasNonLinearSegments() && 0 === t2) {
      (s3 < 0 || s3 > 1) && P("");
      const t3 = new x3(), i = 0 === s3 ? n4 : 0, r = 0 === s3 ? 0 : 1;
      t3.setShiftCoords(i, r), 0 === s3 ? t3.xx = 0 : t3.yy = 0, this.applyTransformation(t3);
    } else super.setAttributeImpl(t2, s3, n4);
  }
  toFlatGeometry() {
    const t2 = this.m_bPolygon ? "polygon" : "polyline", e = this.getPathCount(), s3 = this.m_paths ? this.m_paths.getArray() : new Int32Array(), n4 = this.m_paths ? this.m_pathFlags.getArray() : new Int8Array();
    let i, r, o, a2 = 0, h2 = 0;
    if (this.m_curveData) {
      const { m_segmentFlags: t3, m_segmentParamIndex: e2, m_segmentParams: s4 } = this.m_curveData;
      i = t3?.getArray() ?? new Int8Array(), r = e2?.getArray() ?? new Int32Array(), o = s4?.getArray() ?? new Float64Array(), a2 = this.m_curveData.m_arcCount, h2 = this.m_curveData.m_bezierCount;
    }
    return __spreadProps(__spreadValues({ type: t2 }, this.exportVertexAttributes()), { partCount: e, partOffsets: s3, partFlags: n4, segmentFlags: i, segmentIndices: r, segmentParams: o, segmentCountArc: a2, segmentCountBezier: h2 });
  }
};
Us2.st_totalCurveCount = 0;
var Os2 = class {
  constructor(t2, e) {
    this.m_segIter = null, this.m_quadTree = null, this.m_qtIter = null, this.m_extentOfInterest = new n3(e), this.m_bfirst = true, this.m_prevIndex = -100, this.m_parent = t2;
  }
  nextSegment() {
    return this.m_bfirst && this.prepare_(), this.m_quadTree ? this.nextSegmentQt() : this.nextSegmentNoQt();
  }
  getPathIndex() {
    return this.m_segIter.getPathIndex();
  }
  getStartPointIndex() {
    return this.m_segIter.getStartPointIndex();
  }
  getEndPointIndex() {
    return this.m_segIter.getEndPointIndex();
  }
  isClosingSegment() {
    return this.m_segIter.isClosingSegment();
  }
  isPathClosed() {
    return this.m_segIter.isPathClosed();
  }
  prepare_() {
    const t2 = this.m_parent.getAccelerators();
    t2 && (this.m_quadTree = t2.getQuadTree(), this.m_quadTree && (this.m_qtIter = this.m_quadTree.getSortedIterator(this.m_extentOfInterest, 0))), this.m_segIter = this.m_parent.querySegmentIterator();
  }
  nextSegmentQt() {
    this.m_bfirst = false;
    const t2 = this.m_qtIter.next();
    if (-1 === t2) return null;
    const e = this.m_quadTree.getElement(t2);
    (e !== this.m_prevIndex + 1 || this.m_segIter.isLastSegmentInPath()) && (this.m_segIter.resetToVertex(e, this.m_segIter.getPathIndex()), this.m_prevIndex = e);
    return this.m_segIter.nextSegment();
  }
  nextSegmentNoQt() {
    for (; ; ) {
      if (!this.m_bfirst && this.m_segIter.hasNextSegment()) {
        const t2 = this.m_segIter.nextSegment(), e = n3.constructEmpty();
        if (t2.queryLooseEnvelope(e), !e.isIntersecting(this.m_extentOfInterest)) continue;
        return t2;
      }
      if (this.m_bfirst = false, !this.m_segIter.nextPath()) return null;
    }
  }
};
var Qs2 = class _Qs extends Us2 {
  constructor(t2) {
    t2 ? t2.vd ? (super({ vd: t2.vd, bPolygon: false }), this.m_segmentBufferCTor = Pm) : t2.copy ? (super({ vd: t2.copy.getDescription(), bPolygon: false }), this.m_segmentBufferCTor = Pm, t2.copy.copyTo(this)) : t2.move ? (super({ move: t2.move }), this.m_segmentBufferCTor = Pm) : t2.start ? (super({ vd: t2.start.getDescription(), bPolygon: false }), this.m_segmentBufferCTor = Pm, this.startPathPoint(t2.start), this.lineToPoint(t2.end)) : t2.path ? (super({ bPolygon: false }), this.m_segmentBufferCTor = Pm, this.addPathPoint2D(t2.path, t2.pointCount, t2.bForward)) : b("bad constructor arg") : (super({ bPolygon: false }), this.m_segmentBufferCTor = Pm);
  }
  getBoundary() {
    return $s2(this);
  }
  assignCopy(t2) {
    return this !== t2 && t2.copyTo(this), this;
  }
  assignMove(t2) {
    return t2.copyTo(this), this;
  }
  getGeometryType() {
    return _Qs.type;
  }
  getDimension() {
    return 1;
  }
  createInstance() {
    return new _Qs({ vd: this.getDescription() });
  }
  equals(t2, e) {
    return this.equalsBase(t2, e);
  }
};
Qs2.type = a.enumPolyline;
var Js2 = a;
function Ks(t2, e) {
  if (t2.isEmpty()) return false;
  const s3 = t2.getGeometryType();
  if (s3 === Js2.enumPolygon) return 0 !== t2.calculateArea2D();
  if (s3 === Js2.enumPolyline) return tn(t2.getImpl(), e, true).bNotEmpty;
  if (s3 === Js2.enumEnvelope) return true;
  if (f(s3)) return !!t2.isClosed();
  if (l(s3)) return false;
  if (s3 === Js2.enumGeometryCollection) {
    const s4 = t2;
    for (let t3 = 0, n4 = s4.getGeometryCount(); t3 < n4; t3++) if (Ks(s4.getGeometry(t3), e)) return true;
    return false;
  }
  z("");
}
function $s2(t2, e) {
  const s3 = t2.getGeometryType();
  if (s3 === Js2.enumPolygon) {
    const e2 = new Qs2({ vd: t2.getDescription() });
    return t2.isEmpty() || t2.copyToUnchecked(e2), e2;
  }
  if (s3 === Js2.enumPolyline) return tn(t2.getImpl(), e, false).boundary;
  if (s3 === Js2.enumEnvelope) {
    const e2 = new Qs2({ vd: t2.getDescription() });
    return t2.isEmpty() || e2.addEnvelope(t2, false), e2;
  }
  if (f(s3)) {
    const e2 = new De({ vd: t2.getDescription() });
    if (!t2.isEmpty() && !t2.isClosed()) {
      const s4 = new se();
      e2.reserve(2), t2.queryStart(s4), e2.add(s4), t2.queryEnd(s4), e2.add(s4);
    }
    return e2;
  }
  if (s3 === Js2.enumGeometryCollection) {
    const s4 = t2;
    let n4 = null;
    for (let i = 0, r = s4.getGeometryCount(); i < r; i++) {
      const r2 = $s2(s4.getGeometry(i), e);
      if (null !== r2) {
        null === n4 && (n4 = t2.createInstance());
        const e2 = r2;
        n4.addGeometry(e2);
      }
    }
    return n4;
  }
  if (l(s3)) return new se({ vd: t2.getDescription() });
  z("");
}
function tn(t2, e, s3) {
  const n4 = false, i = t2;
  let r = null;
  if (s3 || (r = new De({ vd: i.getDescription() })), !i.isEmpty()) {
    const t3 = new st2(0);
    for (let e2 = 0, s4 = i.getPathCount(); e2 < s4; e2++) {
      if (i.getPathSize(e2) > 0 && !i.isClosedPathInXYPlane(e2)) {
        const s5 = i.getPathStart(e2);
        t3.add(s5);
        const n5 = i.getPathEnd(e2) - 1;
        t3.add(n5);
      }
    }
    if (t3.size() > 0) {
      const e2 = new at(), n5 = i.getAttributeStreamRef(0), o = { userSort(t4, e3, s4) {
        const i2 = mi.getNAN(), r2 = mi.getNAN();
        s4.sort(t4, e3, (t5, e4) => (n5.queryPoint2D(2 * t5, i2), n5.queryPoint2D(2 * e4, r2), i2.compare(r2)));
      }, getValue: (t4) => n5.read(2 * t4 + 1) };
      e2.sort(t3, 0, t3.size(), o);
      let a2 = n5.readPoint2D(2 * t3.read(0)), h2 = 0, u = 1;
      const m = new se();
      for (let i2 = 1, r2 = t3.size(); i2 < r2; i2++) {
        const e3 = n5.readPoint2D(2 * t3.read(i2));
        if (e3.isEqualPoint2D(a2)) t3.read(h2) > t3.read(i2) ? (t3.write(h2, vs()), h2 = i2) : t3.write(i2, vs()), u++;
        else {
          if (1 & u) {
            if (s3) return { bNotEmpty: true, boundary: new De({}) };
          } else t3.write(h2, vs());
          a2 = e3, h2 = i2, u = 1;
        }
      }
      if (1 & u) {
        if (s3) return { bNotEmpty: true, boundary: new De({}) };
      } else t3.write(h2, vs());
      if (!s3) {
        t3.sort(0, t3.size());
        for (let e3 = 0, s4 = t3.size(); e3 < s4 && t3.read(e3) !== vs(); e3++) i.getPointByVal(t3.read(e3), m), r.add(m);
      }
    }
  }
  return s3 ? { bNotEmpty: n4, boundary: new De({}) } : { bNotEmpty: n4, boundary: r };
}
function en(t2, e, n4, i) {
  const r = 4 * Qs() * (Math.abs(e.vmin) + Math.abs(e.vmax)), o = Qs();
  if (1 === t2.getMaxDerivative()) {
    n(n4 > 0);
    const o2 = un(t2, 0, e, Qs(), r);
    return i[0] = o2.root, o2.cRoots;
  }
  let a2, h2 = [];
  const u = new x2(e.vmin - r, e.vmax + r);
  h2.push(new mi(u.vmin, u.vmax));
  let m = 0;
  for (let s3 = t2.getMaxDerivative() - 1; s3 >= 0; s3--) {
    a2 = h2, h2 = [];
    for (let u2 = 0, l2 = a2.length; u2 < l2; u2++) {
      if (a2[u2][0] < a2[u2][1]) {
        let l3, c, g2;
        if (s3 === t2.getMaxDerivative() - 1 ? { root: l3, funcAtRoot: c, cRoots: g2 } = un(t2, s3, x2.construct(a2[u2][0], a2[u2][1]), o, 0.5 * r) : { root: l3, funcAtRoot: c, cRoots: g2 } = mn(t2, s3, x2.construct(a2[u2][0], a2[u2][1]), o, 0.5 * r), 1 === g2) {
          if (0 === s3) {
            if (m < n4) {
              if (a2[u2][0] <= e.vmin && a2[u2][1] >= e.vmin && l3 !== e.vmin) {
                0 === t2.getValue(0, e.vmin) && (l3 = e.vmin);
              }
              if (a2[u2][0] <= e.vmax && a2[u2][1] >= e.vmax && l3 !== e.vmax) {
                0 === t2.getValue(0, e.vmax) && (l3 = e.vmax);
              }
              i[m] = e.snapClip(l3), m > 0 ? i[m] - i[m - 1] > r && m++ : m++;
            }
          } else {
            const t3 = mi.getNAN();
            t3[0] = a2[u2][0], t3[1] = l3, h2.push(t3);
            const e2 = mi.getNAN();
            e2[0] = l3, e2[1] = a2[u2][1], h2.push(e2);
          }
          continue;
        }
      }
      h2.push(a2[u2]);
    }
  }
  return m;
}
function sn(t2, e, s3, n4) {
  const i = new p(), r = gn(new p(t2), new p(e), s3, i);
  return n4[0] = i.value(), r;
}
function nn(t2, e, s3, n4, i, r) {
  const o = Ot(p, 2), a2 = dn(new p(t2), new p(e), new p(s3), n4, i, o);
  return r[0] = o[0].value(), r[1] = o[1].value(), a2;
}
function rn(t2, e, s3, n4, i, r, o) {
  const a2 = Ot(p, 3), h2 = _n(new p(t2), new p(e), new p(s3), new p(n4), i, r, a2);
  return o[0] = a2[0].value(), o[1] = a2[1].value(), o[2] = a2[2].value(), h2;
}
function on(t2, e, s3, n4, i, r, o, a2) {
  return hn(t2, e, s3, n4, i, r, o, a2);
}
function an(t2, e, s3, n4, i, r) {
  return cn(t2, e, s3, n4, i, r);
}
function hn(t2, e, s3, n4, i, r, o, a2) {
  const h2 = Yt(s3 * s3, Number.NaN);
  h2.fill(0), Dt(a2, n4, 0, 0, s3);
  const u = Yt(s3, Number.NaN), m = Yt(s3, Number.NaN), l2 = Yt(s3, Number.NaN);
  let c = t2(a2, s3, e);
  const g2 = 100;
  let d = 0;
  for (d = 0; d < g2; d++) {
    const n5 = c;
    for (let t3 = 0; t3 < s3; ++t3) m[t3] = a2[t3];
    if (d % s3 === 0) {
      h2.fill(0);
      for (let t3 = 0; t3 < s3; t3++) h2[t3 * s3 + t3] = 1;
    }
    let o2 = 0, g3 = 0;
    for (let m2 = 0; m2 < s3; ++m2) {
      for (let t3 = 0; t3 < s3; ++t3) u[t3] = h2[m2 * s3 + t3];
      const n6 = c;
      c = ln(t2, e, a2, u, i, r, s3);
      const l3 = n6 - c;
      l3 > o2 && (g3 = m2, o2 = l3);
    }
    for (let t3 = 0; t3 < s3; t3++) u[t3] = a2[t3] - m[t3], l2[t3] = a2[t3] + (a2[t3] - m[t3]);
    const _ = t2(l2, s3, e);
    if (_ < n5) {
      if (2 * (n5 - 2 * c + _) * H(n5 - c - o2) < H(n5 - _) * o2) {
        c = ln(t2, e, a2, u, i, r, s3);
        for (let t3 = 0; t3 < s3; ++t3) h2[g3 * s3 + t3] = h2[(s3 - 1) * s3 + t3], h2[(s3 - 1) * s3 + t3] = u[t3];
      }
    }
    if (n5 <= c) return t2(a2, s3, e);
  }
  return c;
}
function un(t2, e, s3, n4, i) {
  const r = { root: 0, funcAtRoot: 0, cRoots: 0 };
  let o = s3.vmin, a2 = s3.vmax, u = 0, m = Number.MAX_VALUE, l2 = t2.getValue(e, o), c = t2.getValue(e, a2), g2 = 0, d = 0, _ = 0;
  if (l2 >= 0 && c >= 0 || l2 <= 0 && c <= 0) return Math.abs(l2) < Math.abs(c) ? (r.funcAtRoot = l2, r.root = o, r.cRoots = 0 === l2 ? 1 : 0, r) : (r.funcAtRoot = c, r.root = a2, r.cRoots = 0 === c ? 1 : 0, r);
  Math.abs(l2) < Math.abs(c) && (a2 = Pt(o, o = a2), c = Pt(l2, l2 = c)), u = o, g2 = l2;
  let p2 = true, f2 = 0;
  for (; 0 !== c && Math.abs(o - a2) > n4 * Math.abs(a2) + i; f2++) {
    let s4 = f2 > 64;
    if (!s4) {
      d = l2 !== g2 && c !== g2 ? o * c * g2 / ((l2 - c) * (l2 - g2)) + a2 * l2 * g2 / ((c - l2) * (c - g2)) + u * l2 * c / ((g2 - l2) * (g2 - c)) : a2 - c * (a2 - o) / (c - l2);
      const t3 = (3 * o + a2) / 4;
      if (s4 = !(d > t3 && d < a2 || d > a2 && d < t3), !s4) {
        const t4 = n4 * Math.abs(a2) + i;
        if (p2) {
          const e2 = Math.abs(a2 - u);
          s4 = Math.abs(d - a2) >= 0.5 * e2 || e2 < t4;
        } else {
          const e2 = Math.abs(u - m);
          s4 = Math.abs(d - a2) >= 0.5 * e2 || e2 < t4;
        }
      }
    }
    if (s4 ? (d = (o + a2) / 2, p2 = true) : p2 = false, _ = t2.getValue(e, d), 0 === _) return r.root = d, r.funcAtRoot = _, r.cRoots = 1, r;
    if (!s4) {
      const s5 = o - d, n5 = d - a2;
      if (Math.abs(s5) > 10 * Math.abs(n5)) {
        let s6 = a2 + 3 * n5;
        for (let n6 = 0; n6 < 2; n6++) {
          const n7 = t2.getValue(e, s6);
          K(l2) * K(n7) > 0 ? (o = s6, l2 = n7) : s6 = Q(o, a2, 0.75);
        }
      } else if (Math.abs(n5) > 10 * Math.abs(s5)) {
        let n6 = o - 3 * s5;
        for (let s6 = 0; s6 < 2; ++s6) {
          const s7 = t2.getValue(e, n6);
          K(c) * K(s7) > 0 ? (a2 = n6, c = s7) : n6 = Q(o, a2, 0.25);
        }
      }
    }
    m = u, u = a2, g2 = c, K(l2) * K(_) < 0 ? (a2 = d, c = _) : (o = d, l2 = _), Math.abs(l2) < Math.abs(c) && (a2 = Pt(o, o = a2), c = Pt(l2, l2 = c)), 128 === f2 && b("Root_finder iterations exceeded");
  }
  return r.root = a2, r.funcAtRoot = c, r.cRoots = 1, r;
}
function mn(t2, e, s3, n4, i) {
  const r = { root: 0, funcAtRoot: 0, cRoots: 0 };
  let o = s3.vmin, a2 = t2.getValue(e, o), u = s3.vmax, m = t2.getValue(e, u);
  if (a2 >= 0 && m >= 0 || a2 <= 0 && m <= 0) return Math.abs(a2) < Math.abs(m) ? (r.funcAtRoot = a2, r.root = o, r.cRoots = 0 === a2 ? 1 : 0, r) : (r.funcAtRoot = m, r.root = u, r.cRoots = 0 === m ? 1 : 0, r);
  m < 0 && (m = Pt(a2, a2 = m), u = Pt(o, o = u));
  let l2 = 0.5 * (o + u), c = Math.abs(u - o), g2 = c, d = t2.getValue(e, l2), _ = t2.getValue(e + 1, l2);
  const p2 = 1, f2 = 4;
  let P4 = f2;
  const y2 = 2;
  let x4 = 1, C3 = 0, v2 = 0, b2 = p2;
  const S2 = 32;
  let E = 0;
  for (; ++E < 100; ) {
    let s4;
    E > S2 || 0 === _ || b2 === y2 && C3 > 1 || b2 === p2 && P4 < f2 ? (b2 = p2, x4 > 1 && x4--) : (b2 = y2, v2 > 1 && Math.abs(2 * d) > Math.abs(c * _) && x4++), c = g2;
    let n5 = false;
    if (b2 === p2) do {
      if (v2 > 2) {
        const t3 = 16 * Math.abs(c);
        if (0.5 * Math.abs(o - u) > t3) {
          const e2 = Math.min(o, u), n6 = Math.max(o, u);
          if (l2 === e2) {
            s4 = l2, l2 = e2 + t3, g2 = l2 - s4;
            break;
          }
          if (l2 === n6) {
            s4 = l2, l2 = n6 - t3, g2 = l2 - s4;
            break;
          }
        }
      }
      g2 = 0.5 * (u - o), s4 = l2, l2 = o + g2, n5 = o === l2 || u === l2;
    } while (0);
    else for (; ; ) {
      g2 = x4 * d / _, s4 = l2, l2 -= g2, n5 = l2 === s4;
      const t3 = Math.min(o, u), e2 = Math.max(o, u);
      if (l2 < t3) {
        if (x4 > 1) {
          l2 = s4, x4--;
          continue;
        }
        g2 = s4 - t3, l2 = t3;
      } else if (l2 > e2) {
        if (x4 > 1) {
          l2 = s4, x4--;
          continue;
        }
        g2 = s4 - e2, l2 = e2;
      }
      break;
    }
    if (n5 || Math.abs(g2) < i) {
      s4 !== l2 && (d = t2.getValue(e, l2));
      break;
    }
    d = t2.getValue(e, l2), _ = t2.getValue(e + 1, l2);
    const r2 = o, h2 = u;
    d < 0 ? (a2 = d, o = l2) : (m = d, u = l2), b2 === y2 && (o === r2 && u === h2 || v2 > 1 && Math.abs(g2) >= 0.5001 * Math.abs(c)) ? C3++ : C3 = 0, b2 === p2 ? (P4++, v2 = 0) : (P4 = 0, v2++);
  }
  return 100 === E && b("Root_finder iterations exceeded"), r.root = l2, r.funcAtRoot = d, r.cRoots = 1, r;
}
function ln(t2, e, s3, n4, i, r, o) {
  const a2 = n4.slice(0, o);
  let h2 = 0;
  for (let f2 = 0; f2 < o; f2++) h2 += n4[f2] * n4[f2];
  if (h2 = Math.sqrt(h2), h2 > 0) for (let f2 = 0; f2 < o; f2++) a2[f2] /= h2;
  let u = Number.NEGATIVE_INFINITY, m = Number.POSITIVE_INFINITY;
  {
    const t3 = Yt(o, 0);
    for (let e2 = 0; e2 < o; e2++) t3[e2] = e2;
    t3.sort((t4, e2) => {
      const s4 = Math.abs(a2[t4]), n5 = Math.abs(a2[e2]);
      return s4 < n5 ? -1 : s4 > n5 ? 1 : 0;
    });
    for (let e2 = 0; e2 < o; e2++) {
      const n5 = t3[e2];
      if (0 === a2[n5]) continue;
      let o2 = (i[n5] - s3[n5]) / a2[n5], h3 = (r[n5] - s3[n5]) / a2[n5];
      h3 < o2 && (h3 = Pt(o2, o2 = h3)), o2 > u && (u = o2), h3 < m && (m = h3);
    }
  }
  let l2 = 0;
  const c = (Math.abs(u) + Math.abs(m)) * Qs() * 100, g2 = Yt(o, Number.NaN), d = a2.slice();
  function _(n5, i2) {
    for (let t3 = 0, e2 = o; t3 < e2; t3++) g2[t3] = s3[t3] + n5 * d[t3];
    return t2(g2, o, e);
  }
  c > 0 && (l2 = an(_, null, u, 0, m, c));
  const p2 = _(l2);
  for (let f2 = 0, P4 = o; f2 < P4; f2++) s3[f2] = Us(g2[f2], i[f2], r[f2]);
  return p2;
}
function cn(t2, e, s3, n4, i, r) {
  const o = Os();
  let a2 = n4, h2 = t2(a2, e), u = s3, m = i, l2 = t2(u, e), c = t2(m, e);
  h2 > l2 && (h2 = l2, a2 = u), h2 > c && (h2 = c, a2 = m);
  let g2 = u, d = m, _ = l2, p2 = c;
  _ > p2 && (_ = Pt(p2, p2 = _), d = Pt(g2, g2 = d));
  let f2 = a2 - g2, P4 = g2 - d;
  const y2 = 0.5 * Math.min(r, m - u), x4 = 2 * y2, C3 = 100;
  let v2, b2 = 0;
  for (v2 = 0; v2 < C3 && !(m - u <= x4); ++v2) {
    const s4 = u + 0.5 * (m - u);
    let n5 = b2 > 0;
    if (!n5 && Math.abs(P4) <= y2 && (n5 = true, b2 = 3), !n5) {
      const t3 = a2 - g2, e2 = a2 - d, s5 = t3 * (h2 - p2);
      let i3 = e2 * (h2 - _), r3 = e2 * i3 - t3 * s5;
      i3 = 2 * (i3 - s5), i3 > 0 && (r3 = -r3), i3 = Math.abs(i3), 0 === i3 || Math.abs(r3) >= Math.abs(i3 * P4 / 2) || r3 <= i3 * (u - a2) || r3 >= i3 * (m - a2) ? (n5 = true, b2 = 3) : (P4 = f2, f2 = r3 / i3);
    }
    n5 && (P4 = a2 >= s4 ? u - a2 : m - a2, f2 = o * P4, b2--);
    let i2 = a2 + f2;
    i2 < u + y2 ? i2 = u + y2 : i2 > m - y2 && (i2 = m - y2);
    const r2 = t2(i2, e);
    r2 < h2 ? (i2 >= a2 ? (u = a2, l2 = h2) : (m = a2, c = h2), d = g2, g2 = a2, a2 = i2, p2 = _, _ = h2, h2 = r2) : (i2 < a2 ? (u = i2, l2 = r2) : (m = i2, c = r2), r2 <= _ || g2 === a2 ? (d = g2, g2 = i2, p2 = _, _ = r2) : (r2 <= p2 || d === a2 || d === g2) && (d = i2, p2 = r2));
  }
  return a2;
}
function gn(t2, e, s3, n4) {
  return t2.isZero() ? e.isZero() ? -1 : 0 : (n4.setE(e.clone().negateThis().divThisE(t2)), s3.containsCoordinate(n4.value()) ? 1 : 0);
}
function dn(t2, e, s3, n4, i, r) {
  if (0 === t2.value()) {
    if (i) return r[0].set(1), n4.containsCoordinate(r[0].value()) ? 1 : 0;
    return gn(e, s3, n4, r[0]);
  }
  if (i) {
    let e2 = 2;
    return r[0].set(1), r[1].setE(s3).divThisE(t2), r[1].eq(r[0]) && (r[1].set(1), e2 = 1), n4.containsCoordinate(r[1].value()) || (e2 = 1), n4.containsCoordinate(r[0].value()) || (e2--, r[0].setE(r[1])), 2 === e2 && r[0].value() > r[1].value() && (r[1] = Pt(r[0], r[0] = r[1])), e2;
  }
  const o = e.clone().sqrThis().subThisE(t2.clone().mulThisE(s3).mulThisE(D2));
  if (o.lt(I)) return 0;
  const a2 = new p(e.value() >= 0 ? 1 : -1), h2 = o.clone().sqrtThis(), u = new p(-0.5).mulThisE(e.clone().addThisE(a2.clone().mulThisE(h2)));
  let m = 0;
  r[0].setE(u.divE(t2));
  const l2 = new p(r[0].value()), c = new p(t2.value()).mulE(l2).addE(new p(e.value()).mulE(l2).addE(new p(s3.value())));
  return c.isZero() || vn(r[0], t2, e, s3, r[0]), n4.containsCoordinate(r[0].value()) && m++, 0 !== h2.value() && 0 !== u.value() ? (r[m].assign(s3.divE(u)), l2.set(r[m].value()), c.assign(new p(t2.value()).mulE(l2).addE(new p(e.value()).mulE(l2).addE(new p(s3.value())))), c.isZero() || vn(r[m], t2, e, s3, r[m]), n4.containsCoordinate(r[m].value()) && m++, 2 === m && r[0].value() > r[1].value() && (r[1] = Pt(r[0], r[0] = r[1])), m) : m;
}
function _n(t2, e, s3, n4, i, r, o) {
  if (0 === t2.value()) {
    return dn(e, s3, n4, i, r, o);
  }
  if (r) {
    let s4 = 1;
    o[0].set(1);
    const r2 = o.slice(s4), a2 = dn(t2, e.addE(t2), n4.negate(), i, false, r2);
    if (a2 > 0) {
      s4 += a2;
      for (let t3 = 1; t3 < s4; t3++) o[t3].eq(w) && (o[s4 - 1] = Pt(o[t3], o[t3] = o[s4 - 1]), s4--);
    }
    const h2 = o.slice(0, s4);
    h2.sort((t3, e2) => t3.value() < e2.value() ? -1 : t3.value() > e2.value() ? 1 : 0);
    for (let t3 = 0; t3 < s4; ++t3) o[t3] = h2[t3];
    return s4;
  }
  return bn(t2, e, s3, n4, i, o);
}
function pn(t2, s3, n4, i, r, o) {
  return (o < s3 || s3 < 0) && P("nth_degree_real_roots"), Sn(t2, s3, n4, i, r);
}
function fn(t2, e, s3, n4) {
  return { coef0: t2.clone(), coef1: e.clone(), coef2: s3.clone(), coef3: n4.clone(), calcF(t3) {
    return this.coef0.clone().mulThis(t3).addThisE(this.coef1).mulThis(t3).addThisE(this.coef2).mulThis(t3).addThisE(this.coef3);
  }, calcDF(t3) {
    return this.coef0.clone().mulThis(3).mulThis(t3).addThisE(this.coef1.clone().mulThisByPower2(2)).mulThis(t3).addThisE(this.coef2);
  }, estimateError(t3) {
    const e2 = Math.abs(t3), s4 = ((this.coef0.eps() * e2 + this.coef1.eps()) * e2 + this.coef2.eps()) * e2 + this.coef3.eps() + this.calcF(t3).eps(), n5 = this.coef0.clone().mulThis(t3).mulThis(3).addThisE(this.coef1.clone().mulThis(2)).mulThis(t3).addThisE(this.coef2);
    if (n5.isZero()) {
      const e3 = this.coef0.clone().mulThis(t3).mulThis(6).addThisE(this.coef1.clone().mulThis(2));
      if (e3.isZero()) {
        const t4 = this.coef0.clone().mulThis(6);
        return Math.pow(6 * s4 / Math.abs(t4.value()), 1 / 3);
      }
      return Math.sqrt(2 * s4 / Math.abs(e3.value()));
    }
    return s4 / Math.abs(n5.value());
  } };
}
var Pn = class {
  updateCoefs(t2) {
    if (this.lastDeriv1 === t2) return this.curCoefs = this.derivCoefs1, void (this.lastUsed = 1);
    if (this.lastDeriv2 === t2) return this.curCoefs = this.derivCoefs2, void (this.lastUsed = 2);
    let e;
    1 === this.lastUsed ? (e = this.derivCoefs2, this.lastDeriv2 = t2, this.lastUsed = 2) : (e = this.derivCoefs1, this.lastDeriv1 = t2, this.lastUsed = 1), e.length = 0;
    for (let s3 = 0, n4 = this.truePower - t2; s3 <= n4; ++s3) {
      e.push(this.coefs[s3 + t2].clone());
      let n5 = s3 + t2, i = n5--;
      for (let e2 = 1; e2 < t2; e2++) i *= n5--;
      e[s3].mulThis(i);
    }
    this.curCoefs = e;
  }
  constructor(t2, e, s3, n4) {
    this.derivCoefs1 = [], this.derivCoefs2 = [], this.lastDeriv1 = -1, this.lastDeriv2 = -1, this.lastUsed = -1, this.curCoefs = null, this.coefs = t2, this.power = e, this.truePower = 0;
    for (let i = e; i >= 1; i--) if (0 !== this.coefs[i].value()) {
      this.truePower = i;
      break;
    }
  }
  getMaxDerivative() {
    return this.truePower + 1;
  }
  getValue(t2, e) {
    let s3 = this.coefs;
    0 === t2 ? s3 = this.coefs : (this.updateCoefs(t2), s3 = this.curCoefs);
    const n4 = new n2(0);
    let i = 1;
    for (let r = 0, o = this.truePower - t2; r <= o; ++r) n4.pe(i * s3[r].value()), i *= e;
    return n4.getResult();
  }
  getError(t2) {
    const e = Math.abs(t2), s3 = new n2(0), n4 = new p(1), i = new p(0);
    for (let o = 0, a2 = this.power; o <= a2; ++o) i.addThisE(this.coefs[o].mulE(n4)), s3.pe(n4.value() * this.coefs[o].eps()), n4.mulThis(e);
    s3.pe(i.eps());
    let r = 1;
    for (let o = 1; o <= this.truePower; ++o) {
      r *= o, this.updateCoefs(o);
      const e2 = new p(1), n5 = new p(0);
      for (let s4 = 0, i2 = this.truePower - o; s4 <= i2; ++s4) n5.addThisE(this.curCoefs[s4].mulE(e2)), e2.mulThis(t2);
      if (!n5.isZero()) return Math.pow(r * s3.getResult() / Math.abs(n5.value()), 1 / o);
    }
    return 0;
  }
};
function yn(t2, e, s3, n4, i, r) {
  let o = t2, a2 = e, h2 = a2 - o;
  if (!r) {
    let s4 = n4.calcF(t2).value(), i2 = n4.calcF(e).value();
    if ((s4 > 0 || s4 > i2) && (a2 = Pt(o, o = a2), i2 = Pt(s4, s4 = i2)), s4 >= 0 || i2 <= 0) return false;
  }
  let u, m = false, l2 = s3, c = 0;
  for (; c < 100; c++) {
    const t3 = n4.calcF(l2);
    if (u = n4.calcDF(l2), u.isZero()) return false;
    if (!t3.value() || c > 3 && t3.isZero()) {
      m = true;
      break;
    }
    r || (t3.value() < 0 ? o = l2 : a2 = l2);
    const e2 = t3.value() / u.value(), s4 = l2 - e2;
    r || (s4 >= o && s4 <= a2 || s4 >= a2 && s4 <= o) && Math.abs(e2) <= 0.5 * h2 ? (l2 = s4, h2 = Math.abs(e2)) : (h2 = Math.abs(0.5 * (a2 - o)), l2 = 0.5 * (o + a2));
  }
  return !!m && (i.set(l2, n4.estimateError(l2)), true);
}
function xn(t2, e, s3, n4, i, r, o, a2) {
  return yn(t2, e, s3.value(), fn(n4, i, r, o), a2, false);
}
var Cn = class {
  constructor(t2, e, s3) {
    this.coefs = Ot(p, 3), this.coefs[0].setE(t2), this.coefs[1].setE(e), this.coefs[2].setE(s3);
  }
  calcF(t2) {
    const e = new p(t2);
    return this.coefs[0].mulE(e).addE(this.coefs[1]).mulE(e).addE(this.coefs[2]);
  }
  calcDF(t2) {
    const e = new p(t2);
    return p.st_mulByPower2(this.coefs[0], 2).mulE(e).addE(this.coefs[1]);
  }
  estimateError(t2) {
    const e = Math.abs(t2), s3 = (this.coefs[0].eps() * e + this.coefs[1].eps()) * e + this.coefs[2].eps() + this.calcF(t2).eps(), n4 = new p(2).mulE(this.coefs[0]).mul(t2).addE(this.coefs[1]);
    if (n4.isZero()) {
      const t3 = this.coefs[0].value();
      return Math.sqrt(s3 / Math.abs(t3));
    }
    return s3 / Math.abs(n4.value());
  }
};
function vn(t2, e, s3, n4, i) {
  return yn(0, 0, t2.value(), new Cn(e, s3, n4), i, true);
}
function bn(t2, e, s3, n4, i, r) {
  const o = Ot(p, 3);
  let a2 = 0;
  const u = e.negate().divThisE(t2.clone().mulThis(3));
  i.containsCoordinate(u.value()) && (o[0].setE(u), a2 = 1);
  const m = Ot(p, 2), l2 = dn(t2.mul(3), e.mul(2), s3, i, false, m);
  if (l2 < 0) return n4.isZero() ? -1 : 0;
  for (let h2 = 0; h2 < l2; h2++) i.containsCoordinate(m[h2].value()) && o[a2++].setE(m[h2]);
  Zt(o, 0, a2, (t3, e2) => t3.value() < e2.value() ? -1 : t3.value() > e2.value() ? 1 : 0);
  const c = Ot(p, 5);
  c[0].set(i.vmin);
  for (let h2 = 0; h2 < a2; h2++) c[1 + h2].setE(o[h2]);
  c[1 + a2].set(i.vmax);
  const g2 = a2 + 2;
  let d = 1, _ = 0;
  {
    const i2 = c[0].clone();
    if (t2.clone().mulThisE(i2).addThisE(e).mulThisE(i2).addThisE(s3).mulThisE(i2).addThisE(n4).isZero()) {
      const o2 = fn(t2, e, s3, n4);
      i2.setError(o2.estimateError(i2.value())), r[_] = i2, _++, d++;
    }
  }
  for (let p2 = d; p2 < g2; p2++) {
    const o2 = c[p2].clone(), a3 = t2.clone().mulThisE(o2).addThisE(e).mulThisE(o2).addThisE(s3).mulThisE(o2).addThisE(n4).isZero();
    if (a3 || !c[p2].eq(c[p2 - 1])) {
      if (a3 || xn(c[p2 - 1].value(), c[p2].value(), c[p2 - 1].clone().addThisE(c[p2]).divThisByPower2(2), t2, e, s3, n4, o2)) {
        if (_ > 0 && o2.eq(r[_ - 1])) continue;
        if (_ >= 3 && b("cubic_polynomial_solver_too_many_roots"), a3) {
          const i2 = fn(t2, e, s3, n4);
          o2.setError(i2.estimateError(o2.value()));
        }
        r[_] = o2, _++;
      }
      if (c[p2].value() === i.vmax) break;
      a3 && p2++;
    }
  }
  return _;
}
function Sn(t2, e, s3, n4, i, r) {
  const o = new Pn(t2, e, s3, Qs());
  let a2 = 0;
  if (2 === o.truePower) a2 = dn(t2[2], t2[1], t2[0], s3, n4, i);
  else if (1 === o.truePower) a2 = gn(t2[1], t2[0], s3, i[0]);
  else {
    if (0 === o.truePower) return t2[0].value() ? 0 : -1;
    {
      const t3 = [];
      t3.length = e, a2 = en(o, s3, e, t3);
      for (let e2 = 0; e2 < a2; e2++) i[e2].set(t3[e2]);
    }
  }
  for (let h2 = 0; h2 < a2; h2++) i[h2].setError(o.getError(i[h2].value()));
  return a2;
}
var En = z2;
var Dn = class _Dn extends ds2 {
  constructor(t2) {
    return void 0 === t2 || jt(t2, "vd") ? (super({ vd: t2?.vd, XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_cp = new mi(0, 0), void (this.m_weights = [1, 0, 1])) : (t2.fromPoint && t2.weight ? t2 = { fromPoint: t2.fromPoint, controlPoint1: t2.controlPoint1, toPoint: t2.toPoint, weight0: 1, weight1: t2.weight, weight2: 1 } : t2.points && t2.weight ? t2 = { fromPoint: t2.points[0], controlPoint1: t2.points[1], toPoint: t2.points[2], weight0: 1, weight1: t2.weight, weight2: 1 } : t2.points && t2.weights && (t2 = { fromPoint: t2.points[0], controlPoint1: t2.points[1], toPoint: t2.points[2], weight0: t2.weights[0], weight1: t2.weights[1], weight2: t2.weights[2] }), t2.fromPoint && t2.weight0 ? (super({ start: t2.fromPoint, end: t2.toPoint }), (t2.weight0 <= 0 || t2.weight1 < 0 || t2.weight2 <= 0) && P("weights"), this.m_cp = t2.controlPoint1.clone(), void (this.m_weights = [t2.weight0, t2.weight1, t2.weight2])) : t2.copy ? (super(t2), this.m_cp = t2.copy.m_cp.clone(), void (this.m_weights = t2.copy.m_weights.slice())) : t2.move ? (super(t2), this.m_cp = t2.move.m_cp.clone(), void (this.m_weights = t2.move.m_weights.slice())) : void z("unexpected constructor param"));
  }
  getBoundary() {
    return $s2(this);
  }
  assignMove(t2) {
    return this;
  }
  assignCopy(t2) {
    return t2.copyTo(this), this;
  }
  construct(t2, e, s3, n4) {
    this.dropAllAttributes(), this.setCpsAndWeights(t2, e, s3, 1, n4, 1), ca(this);
  }
  constructWeights(t2, e, s3, n4, i, r) {
    this.dropAllAttributes(), this.setCpsAndWeights(t2, e, s3, n4, i, r), ca(this);
  }
  constructArray(t2, e) {
    this.construct(t2[0], t2[1], t2[2], e);
  }
  constructArrayWeights(t2, e) {
    this.dropAllAttributes(), this.setCpsAndWeightsArray(t2, e), ca(this);
  }
  convertToStandardForm() {
  }
  getStandardFormWeight() {
    return this.m_weights[1] / Math.sqrt(this.m_weights[0] * this.m_weights[2]);
  }
  getGeometryType() {
    return a.enumRationalBezier2;
  }
  queryEnvelope(t2) {
    if (t2 instanceof n3) {
      if (t2.setCoords(this.getStartXY()), t2.mergeNe(this.getEndXY()), t2.contains(this.m_cp)) return;
      const e = La(this);
      if (null !== e) {
        const s3 = new mi();
        for (const n4 of e.specialPoints) this.queryCoord2D(n4, s3), t2.mergeNe(s3);
      } else {
        const e2 = [], s3 = Ot(mi, 3);
        this.queryControlPoints(s3), _a(s3, this.m_weights, e2);
        const n4 = new mi();
        for (const i of e2) this.queryCoord2D(i, n4), t2.mergeNe(n4);
      }
    }
  }
  applyTransformation(t2) {
    if (t2 instanceof x3) {
      const e = Ot(mi, 3);
      return this.queryControlPoints(e), t2.transformPoints2D(e, 3, e), this.setStartXY(e[0]), this.m_cp.assign(e[1]), this.setEndXY(e[2]), void this.afterCompletedModification();
    }
  }
  createInstance() {
    return new _Dn({ vd: this.m_description });
  }
  calculateLength2D() {
    return pa(this, 1, false);
  }
  calculateLowerLength2D() {
    return mi.distance(this.getStartXY(), this.getEndXY());
  }
  calculateUpperLength2D() {
    return this.calculateUpperLength2D_();
  }
  calculateUpperLength2D_() {
    if (this.m_weights[1] > 0) {
      return mi.distance(this.getStartXY(), this.m_cp) + mi.distance(this.getEndXY(), this.m_cp);
    }
    return mi.distance(this.getStartXY(), this.getEndXY());
  }
  queryCoord2D(t2, e) {
    return this.queryCoord2DExtension(t2, e, true);
  }
  queryCoord2DE(t2, e) {
    ch(this, t2, e);
  }
  queryCoord2DExtension(t2, e, s3) {
    if (s3) {
      if (t2 < 0) {
        return void ps(new fm({ start: this.getStartXY(), end: this.getStartXY().add(this.getTangent(0).getUnitVector()) }), t2, e);
      }
      if (t2 > 1) {
        return void ps(new fm({ start: this.getEndXY(), end: this.getEndXY().add(this.getTangent(1).getUnitVector()) }), t2 - 1, e);
      }
    }
    const n4 = Ot(mi, 3);
    this.queryControlPoints(n4), ph(n4, this.m_weights, t2, e);
  }
  getCoordX(t2) {
    const e = new mi();
    return this.queryCoord2DExtension(t2, e, true), e.x;
  }
  getCoordY(t2) {
    const e = new mi();
    return this.queryCoord2DExtension(t2, e, true), e.y;
  }
  cut(t2, e, s3) {
    const n4 = new Pm();
    return this.queryCut(t2, e, n4, s3), n4.releaseSegment();
  }
  queryCut(t2, e, s3, n4) {
    const i = s3.createQuadraticRationalBezier();
    if (this.cutBezierIgnoreAttributes(t2, e, i), n4) return;
    i.assignVertexDescription(this.m_description);
    const r = this.m_description.getAttributeCount();
    if (r > 1) {
      for (let e2 = 1; e2 < r; e2++) {
        const s4 = this.m_description.getSemantics(e2), n5 = En.getComponentCount(s4);
        for (let e3 = 0; e3 < n5; e3++) {
          const n6 = this.getAttributeAsDbl(t2, s4, e3);
          i.setStartAttribute(s4, e3, n6);
        }
      }
      for (let t3 = 1; t3 < r; t3++) {
        const s4 = this.m_description.getSemantics(t3), n5 = En.getComponentCount(s4);
        for (let t4 = 0; t4 < n5; t4++) {
          const n6 = this.getAttributeAsDbl(e, s4, t4);
          i.setEndAttribute(s4, t4, n6);
        }
      }
    }
  }
  queryDerivative(t2, e) {
    Da(this, t2, e);
  }
  cutBezierIgnoreAttributes(t2, s3, n4) {
    (t2 < 0 || s3 > 1 || t2 > s3) && P("Quadratic_rational_bezier.cut_bezier_ignore_attributes");
    const i = Ot(mi, 3);
    this.queryControlPoints(i);
    const r = [0, 0, 0];
    Ja(i, this.m_weights, t2, s3, i, r), n4.setControlPointsAndWeights(i, r);
  }
  splitBezierIgnoreAttributes(t2, e, s3) {
  }
  getAttributeAsDbl(t2, e, s3) {
    if (0 === e) return 0 === s3 ? this.getCoordX(t2) : this.getCoordY(t2);
    const n4 = this.calculateLength2D(), i = n4 > 0 ? this.tToLength(t2) / n4 : 0, r = En.getInterpolation(e), o = this.getStartAttributeAsDbl(e, s3), a2 = this.getEndAttributeAsDbl(e, s3);
    return It(r, o, a2, i, En.getDefaultValue(e));
  }
  getClosestCoordinate(t2, e) {
    return za(this, t2, x2.unit(), e, -1);
  }
  getClosestCoordinateOnInterval(t2, e, s3 = -1) {
    return za(this, t2, e, false, s3);
  }
  getYMonotonicParts(t2, e) {
    return this.getMonotonicParts(t2, e);
  }
  getMonotonicParts(t2, n4) {
    t2.length < 2 && P("");
    const i = da(this);
    let r = 0;
    if (2 === i.specialPointsCount()) return 0;
    n(t2.length >= i.specialPointsCount() - 1);
    for (let e = 1, s3 = i.specialPointsCount(); e < s3; ++e) this.queryCut(i.specialPoints[e - 1], i.specialPoints[e], t2[r], n4), r++;
    for (let e = 0; e < r; ++e) {
      Ha(t2[e].get());
    }
    return r;
  }
  intersectionWithAxis2D(t2, e, s3, n4) {
    s3 && (s3.length = 9), n4 && (n4.length = 9);
    const i = new Array(3), r = Ot(p, 2), o = new x2(0, 1);
    let a2 = 0;
    const h2 = Ot(mi, 3);
    if (this.queryControlPoints(h2), t2) {
      if (i[0] = new p(h2[0].y).sub(e).mul(this.m_weights[0]), i[1] = new p(h2[1].y).sub(e).mul(this.m_weights[1]), i[2] = i[0].subE(i[1].mul(2)).addE(new p(h2[2].y).sub(e).mul(this.m_weights[2])), i[1] = i[1].subE(i[0]).mulThisByPower2(2), a2 = dn(i[2], i[1], i[0], o, false, r), s3) for (let u = 0; u < a2; u++) s3[u] = this.getCoordX(r[u].value());
    } else if (i[0] = new p(h2[0].x).sub(e).mul(this.m_weights[0]), i[1] = new p(h2[1].x).sub(e).mul(this.m_weights[1]), i[2] = i[0].subE(i[1].mul(2)).addE(new p(h2[2].x).sub(e).mul(this.m_weights[2])), i[1] = i[1].subE(i[0]).mulThisByPower2(2), a2 = dn(i[2], i[1], i[0], o, false, r), s3) for (let u = 0; u < a2; u++) s3[u] = this.getCoordY(r[u].value());
    if (n4) for (let u = 0; u < a2; u++) n4[u] = r[u].value();
    else s3 && Zt(s3, 0, a2, Ct);
    return a2;
  }
  intersectionOfYMonotonicWithAxisX(t2, e) {
    if (this.m_YStart === this.m_YEnd) return t2 === this.m_YStart ? e : Number.NaN;
    if (t2 === this.m_YStart) return this.m_XStart;
    if (t2 === this.m_YEnd) return this.m_XEnd;
    const n4 = [Number.NaN, Number.NaN], i = this.intersectionWithAxis2D(true, t2, n4, null);
    return n(2 !== i), -1 === i ? e : n4[0];
  }
  isCurve() {
    return true;
  }
  isDegenerate(t2) {
    return ze(this, t2);
  }
  isDegenerate3D(t2, e) {
    return false;
  }
  queryLooseEnvelope(t2) {
    if (t2 instanceof n3) return t2.setCoords({ pt: this.getStartXY() }), t2.mergeNe(this.m_cp), void t2.mergeNe(this.getEndXY());
  }
  clone(t2) {
    const e = this.createInstance();
    return this.copyTo(e), e;
  }
  queryInterval(t2, e) {
    if (0 === t2) {
      const t3 = n3.constructEmpty();
      this.queryEnvelope(t3);
      const s3 = x2.constructEmpty();
      return 0 === e ? t3.queryIntervalX(s3) : t3.queryIntervalY(s3), s3;
    }
    return super.queryInterval(t2, e);
  }
  queryLooseEnvelopeOnInterval(t2, e) {
    const s3 = Ot(mi, 3);
    this.queryControlPoints(s3);
    const n4 = [0, 0, 0];
    Ja(s3, this.m_weights, t2.vmin, t2.vmax, s3, n4), e.setFromPoints(s3, 3);
  }
  changeEndPoints2D(t2, e) {
    if (t2.isEqual(this.m_XStart, this.m_YStart) && e.isEqual(this.m_XEnd, this.m_YEnd)) return;
    const s3 = this.m_cp.isEqual(this.m_XStart, this.m_YStart), n4 = this.m_cp.isEqual(this.m_XEnd, this.m_YEnd);
    this.setStartXY(t2), this.setEndXY(e), s3 ? this.m_cp.setCoordsPoint2D(t2) : n4 && this.m_cp.setCoordsPoint2D(e), this.normalizeAfterEndpointChange();
  }
  tToLength(t2) {
    return pa(this, t2, true);
  }
  lengthToT(t2) {
    return Ia(this, t2);
  }
  calculateWeightedAreaCentroid2D(t2) {
    const e = Xa(this), s3 = Ma(this);
    return e.x += (this.getStartX() - t2.x) * s3, e.y += (this.getStartY() - t2.y) * s3, e;
  }
  calculateWeightedCentroid2D() {
    const t2 = new mi();
    return this.isDegenerate(0) ? (t2.setCoords(0, 0), t2) : Va(this) ? (t2.assign(this.getCoord2D(0.5).mul(this.calculateLength2D())), t2) : (t2.assign(Oa(this, 1)), t2);
  }
  getControlPoint1() {
    return this.m_cp.clone();
  }
  setControlPoint1(t2) {
    this.m_cp.setCoordsPoint2D(t2), this.afterCompletedModification();
  }
  queryWeights(t2) {
    for (let e = 0; e < 3; ++e) t2[e] = this.m_weights[e];
  }
  queryCoord2DMP(t2, e) {
    const s3 = Ot(mi, 3);
    return this.queryControlPoints(s3), dh(s3.map((t3) => qe.constructPoint2D(t3)), this.m_weights.map((t3) => si.constructDouble(t3)), si.constructDouble(t2), e);
  }
  setWeights(t2) {
  }
  queryControlPoints(t2) {
    t2[0].assign(this.getStartXY()), t2[1].assign(this.m_cp), t2[2].assign(this.getEndXY());
  }
  queryControlPointsHelper(t2) {
    return this.queryControlPoints(t2), 3;
  }
  setControlPointsAndWeights(t2, e) {
    this.setCpsAndWeightsArray(t2, e), this.afterCompletedModification();
  }
  getTangent(t2) {
    const e = Ot(mi, 3);
    return this.queryControlPoints(e), Aa(e, this.m_weights, t2);
  }
  getDerivative(t2) {
    const e = Us(t2, 0, 1), s3 = Ot(mi, 4);
    return fa(this, 1, e, s3), s3[1];
  }
  getCurvature(t2) {
    const e = Ot(mi, 4);
    fa(this, 2, t2, e);
    const s3 = e[1].sqrLength();
    if (0 === s3) return Number.NaN;
    e[1].divThis(Math.sqrt(s3));
    return e[1].crossProduct(e[2]) / s3;
  }
  isIntersecting(t2, e, s3) {
    return false;
  }
  isIntersectingPoint(t2, e, s3) {
    return false;
  }
  isIntersectingPoint3D(t2, e, s3, n4, i = 1) {
    return false;
  }
  isMonotoneQuickAndDirty() {
    const t2 = Ot(mi, 3);
    return this.queryControlPoints(t2), Za(t2);
  }
  getMonotonicPartParams(t2, s3) {
    const n4 = da(this), i = n4.specialPointsCount();
    if (!s3) return n4.specialPointsCount();
    t2 < i && P("");
    for (let e = 0; e < i; e++) s3[e] = n4.specialPoints[e];
    return i;
  }
  normalizeAfterEndpointChange() {
    return false;
  }
  orientBottomUp() {
    if (this.m_YEnd < this.m_YStart || this.m_YEnd === this.m_YStart && this.m_XEnd < this.m_XStart) {
      this.m_XEnd = Pt(this.m_XStart, this.m_XStart = this.m_XEnd), this.m_YEnd = Pt(this.m_YStart, this.m_YStart = this.m_YEnd), this.m_weights[2] = Pt(this.m_weights[0], this.m_weights[0] = this.m_weights[2]);
      for (let t2 = 0, e = this.m_description.getTotalComponentCount() - 2; t2 < e; t2++) this.m_attributes[t2 + e] = Pt(this.m_attributes[t2], this.m_attributes[t2] = this.m_attributes[t2 + e]);
      this.m_cachedValues = null;
    }
  }
  isLine() {
    return false;
  }
  isDegenerateToLineHelper(t2) {
    const e = Ot(mi, 3);
    this.queryControlPoints(e);
    const s3 = e[2].sub(e[0]), n4 = s3.length();
    if (mi.distance(e[0], e[1]) + mi.distance(e[2], e[1]) - n4 > t2) return false;
    const i = t2, r = e[1].clone();
    r.subThis(e[0]);
    return !(Math.abs(r.crossProduct(s3)) / n4 > i);
  }
  copyIgnoreAttributes(t2) {
    const e = Ot(mi, 3);
    this.queryControlPoints(e);
    const s3 = [0, 0, 0];
    this.queryWeights(s3), t2.setControlPointsAndWeights(e, s3);
  }
  calculateArea2DHelper() {
    return Ma(this);
  }
  absNorm() {
    return this.getStartXY().norm(1) + this.getEndXY().norm(1) + this.m_cp.norm(1);
  }
  absNormXYZ(t2) {
    return n(0), 0;
  }
  queryEnvelopeW(t2, e) {
    Wa(this, t2, e);
  }
  setSegmentFromCoordsForStitcher(t2, e) {
    const s3 = [0, 0, 0];
    this.queryWeights(s3), this.constructWeights(t2[0], this.getControlPoint1(), t2[e - 1], s3[0], s3[1], s3[2]);
  }
  writeInBufferStream(t2, e) {
    const s3 = new Float64Array(5);
    return s3[0] = this.m_cp.x, s3[1] = this.m_cp.y, s3[2] = this.m_weights[0], s3[3] = this.m_weights[1], s3[4] = this.m_weights[2], t2.writeRangeFromArray(e, s3.length, s3, true, 1), e + s3.length;
  }
  readFromBufferStream(t2, e) {
    const s3 = new Float64Array(5);
    t2.queryRange(e, s3.length, s3, true, 1), this.m_cp.x = s3[0], this.m_cp.y = s3[1], this.m_weights[0] = s3[2], this.m_weights[1] = s3[3], this.m_weights[2] = s3[4], this.m_cachedValues = null;
  }
  snapControlPoints(t2) {
    const e = Ot(mi, 3);
    this.queryControlPoints(e);
    const s3 = mi.sqrDistance(e[1], e[0]), n4 = mi.sqrDistance(e[1], e[2]);
    let i = e[0].clone(), r = s3;
    s3 > n4 && (i = e[2].clone(), r = n4);
    let o = false;
    return r <= t2 && 0 !== r && (o = true, this.setControlPoint1(i)), o;
  }
  needsSnapControlPoints(t2) {
    if (!t2) return false;
    const e = Ot(mi, 3);
    this.queryControlPoints(e);
    const s3 = mi.sqrDistance(e[1], e[0]), n4 = mi.sqrDistance(e[1], e[2]);
    e[0].clone();
    let i = s3;
    return s3 > n4 && (e[2].clone(), i = n4), i <= t2 && 0 !== i;
  }
  calculateSpecialPointsForCracking(t2, e) {
    return 0;
  }
  ensureXYMonotone() {
    return Ha(this);
  }
  setCoordsForIntersector(t2, e, s3) {
    $a(this, t2, e, s3);
  }
  copyToImpl(t2) {
    const e = t2;
    e.m_cp.setCoordsPoint2D(this.m_cp), e.m_weights[0] = this.m_weights[0], e.m_weights[1] = this.m_weights[1], e.m_weights[2] = this.m_weights[2], Ra(e, La(this));
  }
  reverseImpl() {
    this.m_weights[2] = Pt(this.m_weights[0], this.m_weights[0] = this.m_weights[2]);
  }
  equalsImpl(t2) {
    const e = t2;
    if (!this.m_cp.equals(e.m_cp)) return false;
    for (let s3 = 0; s3 < 3; s3++) if (this.m_weights[s3] !== e.m_weights[s3]) return false;
    return true;
  }
  equalsImplTol(t2, e) {
    const s3 = t2;
    if (!this.m_cp.isEqualPoint2D(s3.m_cp, e)) return false;
    const n4 = Ot(mi, 3);
    this.queryControlPoints(n4);
    const i = Ot(mi, 3);
    s3.queryControlPoints(i);
    const r = [s3.m_weights[0], s3.m_weights[1], s3.m_weights[2]];
    for (let o = 0; o < 3; o++) {
      const t3 = new X();
      t3.setCoordsPoint2DZ(n4[o].mul(this.m_weights[o]), this.m_weights[o]);
      const s4 = new X();
      if (s4.setCoordsPoint2DZ(i[o].mul(r[o]), r[o]), !t3.isEqual(s4, e)) return false;
    }
    return true;
  }
  swapImpl(t2) {
    const e = t2;
    e.m_cp = Pt(this.m_cp, this.m_cp = e.m_cp), e.m_weights = Pt(this.m_weights, this.m_weights = e.m_weights), ga(this, e);
  }
  afterCompletedModification() {
    ca(this);
  }
  intersect(t2, e, s3, n4, i) {
    return mm(false, this, t2, e, s3, n4, i);
  }
  intersectPoint(t2, e, s3) {
    return Ga(this, t2, e, s3);
  }
  endPointModified() {
    ca(this);
  }
  clearEndPointModified() {
  }
  setCpsAndWeights(t2, s3, n4, i, r, o) {
    (i <= 0 || o <= 0 || r < 0) && P("weights"), (t2.isNAN() || s3.isNAN() || n4.isNAN()) && P("NAN control points in bezier are not supported"), this.setStartXY(t2), this.m_cp.assign(s3), this.m_weights[0] = i, this.m_weights[1] = r, this.m_weights[2] = o, this.setEndXY(n4);
  }
  setCpsAndWeightsArray(t2, e) {
    this.setCpsAndWeights(t2[0], t2[1], t2[2], e[0], e[1], e[2]);
  }
};
Dn.type = a.enumRationalBezier2;
var wn = z2;
var An = class _An extends ds2 {
  constructor(t2) {
    void 0 === t2 || jt(t2, "vd") ? (super({ vd: t2?.vd, XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_cp = new mi(0, 0)) : t2.from ? (super(__spreadValues({ XStart: t2.from.x, YStart: t2.from.y, XEnd: t2.to.x, YEnd: t2.to.y }, t2.vd)), this.m_cp = t2.cp.clone()) : t2.points ? (super(__spreadValues({ XStart: t2.points[0].x, YStart: t2.points[0].y, XEnd: t2.points[2].x, YEnd: t2.points[2].y }, t2.vd)), this.m_cp = t2.points[1].clone()) : t2.copy ? (super(t2), this.m_cp = t2.copy.m_cp.clone()) : b("unexpected constructor args");
  }
  getBoundary() {
    return $s2(this);
  }
  assignCopy(t2) {
    return this !== t2 && t2.copyTo(this), this;
  }
  construct(t2, e, s3) {
    this.setStartXY(t2), this.m_cp.assign(e), this.setEndXY(s3), ri(this);
  }
  constructPoints(t2) {
    this.setStartXY(t2[0]), this.m_cp.assign(t2[1]), this.setEndXY(t2[2]), ri(this);
  }
  getGeometryType() {
    return a.enumBezier2;
  }
  queryEnvelope(t2) {
    if (2 === t2.m_EnvelopeType) {
      if (t2.setCoords(this.getStartXY()), t2.mergeNe(this.getEndXY()), t2.contains(this.m_cp)) return;
      const e = xi(this);
      if (null !== e) {
        const s3 = new mi();
        for (const n4 of e.specialPoints) this.queryCoord2D(n4, s3), t2.mergeNe(s3);
      } else {
        const e2 = [];
        hi(this, e2);
        const s3 = new mi();
        for (const n4 of e2) this.queryCoord2D(n4, s3), t2.mergeNe(s3);
      }
      return;
    }
    z("env type not impl");
  }
  applyTransformation(t2) {
    if (1 === t2.m_TransformationType) {
      const e = Ot(mi, 3);
      return this.queryControlPoints(e), t2.transformPoints2D(e, 3, e), this.setStartXY(e[0]), this.m_cp.assign(e[1]), this.setEndXY(e[2]), void this.afterCompletedModification();
    }
    n(0);
  }
  createInstance() {
    return new _An({ vd: this.m_description });
  }
  calculateLength2D() {
    return ui(this, 1, false);
  }
  calculateLowerLength2D() {
    return mi.distance(this.getStartXY(), this.getEndXY());
  }
  calculateUpperLength2D() {
    return this.calculateUpperLength2D_();
  }
  calculateUpperLength2D_() {
    return mi.distance(this.getStartXY(), this.m_cp) + mi.distance(this.getEndXY(), this.m_cp);
  }
  queryCoord2D(t2, e) {
    this.queryCoord2DExtended(t2, e, false);
  }
  queryCoord2DExtended(t2, e, s3) {
    const n4 = Ot(mi, 3);
    this.queryControlPoints(n4), Zi(n4, t2, e, s3);
  }
  queryCoord2DE(t2, e) {
    Hi(this, t2, e);
  }
  queryCoord2DMP(t2, e) {
    n(false, "bernstein polynomials not ported");
  }
  getCoordX(t2) {
    if (t2 < 0 || t2 > 1) {
      const e = new mi();
      return this.queryCoord2DExtended(t2, e, true), e.x;
    }
    if (t2 <= 0.5) {
      const e = V(this.getStartX(), this.m_cp.x, t2), s3 = V(this.m_cp.x, this.getEndX(), t2);
      return V(e, s3, t2);
    }
    {
      const e = U(this.getStartX(), this.m_cp.x, t2), s3 = U(this.m_cp.x, this.getEndX(), t2);
      return U(e, s3, t2);
    }
  }
  getCoordY(t2) {
    if (t2 < 0 || t2 > 1) {
      const e = new mi();
      return this.queryCoord2DExtended(t2, e, true), e.y;
    }
    if (t2 <= 0.5) {
      const e = V(this.getStartX(), this.m_cp.x, t2), s3 = V(this.m_cp.x, this.getEndX(), t2);
      return V(e, s3, t2);
    }
    {
      const e = U(this.getStartY(), this.m_cp.y, t2), s3 = U(this.m_cp.y, this.getEndY(), t2);
      return U(e, s3, t2);
    }
  }
  cut(t2, e, s3) {
    const n4 = new Pm();
    return this.queryCut(t2, e, n4, s3), n4.releaseSegment();
  }
  queryCut(t2, e, s3, n4) {
    const i = s3.createQuadraticBezier();
    if (this.cutBezierIgnoreAttributes(t2, e, i), n4) return;
    i.assignVertexDescription(this.m_description);
    const r = this.m_description.getAttributeCount();
    if (r > 1) {
      for (let e2 = 1; e2 < r; e2++) {
        const s4 = this.m_description.getSemantics(e2), n5 = wn.getComponentCount(s4);
        for (let e3 = 0; e3 < n5; e3++) {
          const n6 = this.getAttributeAsDbl(t2, s4, e3);
          i.setStartAttribute(s4, e3, n6);
        }
      }
      for (let t3 = 1; t3 < r; t3++) {
        const s4 = this.m_description.getSemantics(t3), n5 = wn.getComponentCount(s4);
        for (let t4 = 0; t4 < n5; t4++) {
          const n6 = this.getAttributeAsDbl(e, s4, t4);
          i.setEndAttribute(s4, t4, n6);
        }
      }
    }
  }
  queryDerivative(t2, e) {
    Oi(this, t2, e);
  }
  cutBezierIgnoreAttributes(t2, s3, n4) {
    if ((t2 < 0 || s3 > 1 || t2 > s3) && P("Quadratic_bezier.cut_bezier_ignore_attributes"), 0 === t2 && 1 === s3) return n4.setStartXY(this.getStartXY()), n4.m_cp.assign(this.m_cp), void n4.setEndXY(this.getEndXY());
    const i = Ot(mi, 3);
    this.queryControlPoints(i), Yi(i, t2, s3, i), n4.constructPoints(i);
  }
  splitBezierIgnoreAttributes(t2, e, n4) {
    n(0);
  }
  getAttributeAsDbl(t2, e, s3) {
    if (0 === e) return 0 === s3 ? this.getCoordX(t2) : this.getCoordY(t2);
    const n4 = this.calculateLength2D(), i = n4 > 0 ? this.tToLength(t2) / n4 : 0, r = wn.getInterpolation(e), o = this.getStartAttributeAsDbl(e, s3), a2 = this.getEndAttributeAsDbl(e, s3);
    return It(r, o, a2, i, wn.getDefaultValue(e));
  }
  getClosestCoordinate(t2, e) {
    return vi(this, t2, x2.unit(), e);
  }
  getClosestCoordinateOnInterval(t2, e, s3 = -1) {
    return vi(this, t2, e, false);
  }
  getYMonotonicParts(t2, e) {
    return this.getMonotonicParts(t2, e);
  }
  getMonotonicParts(t2, n4) {
    t2.length < 2 && P("");
    const i = ai(this);
    let r = 0;
    if (2 === i.specialPointsCount()) return 0;
    n(t2.length >= i.specialPointsCount() - 1);
    for (let e = 1, s3 = i.specialPointsCount(); e < s3; ++e) this.queryCut(i.specialPoints[e - 1], i.specialPoints[e], t2[r], n4), r++;
    for (let e = 0; e < r; ++e) {
      Ai(t2[e].get());
    }
    return r;
  }
  intersectionWithAxis2D(t2, e, s3, n4) {
    const i = Ot(p, 3), r = Ot(p, 2), o = new x2(0, 1);
    let a2 = 0;
    if (t2) {
      if (i[0] = new p(this.getStartY()).sub(e), i[1] = new p(this.m_cp.y).subE(new p(this.getStartY())).mulThisByPower2(2), i[2] = new p(this.getStartY()).add(this.getEndY()).subE(new p(this.m_cp.y).mulThisByPower2(2)), a2 = dn(i[2], i[1], i[0], o, false, r), s3) for (let h2 = 0; h2 < a2; h2++) s3[h2] = this.getCoordX(r[h2].value());
    } else if (i[0] = new p(this.getStartX()).sub(e), i[1] = new p(this.m_cp.x).subE(new p(this.getStartX())).mulThisByPower2(2), i[2] = new p(this.getStartX()).add(this.getEndX()).subE(new p(this.m_cp.x).mulThisByPower2(2)), a2 = dn(i[2], i[1], i[0], o, false, r), s3) for (let h2 = 0; h2 < a2; h2++) s3[h2] = this.getCoordY(r[h2].value());
    if (n4) for (let h2 = 0; h2 < a2; h2++) n4[h2] = r[h2].value();
    else s3 && zt(s3, a2);
    return a2;
  }
  intersectionOfYMonotonicWithAxisX(t2, e) {
    if (this.m_YStart === this.m_YEnd) return t2 === this.m_YStart ? e : Number.NaN;
    if (t2 === this.m_YStart) return this.m_XStart;
    if (t2 === this.m_YEnd) return this.m_XEnd;
    const n4 = [0, 0], i = this.intersectionWithAxis2D(true, t2, n4, null);
    return n(2 !== i), -1 === i ? e : n4[0];
  }
  isCurve() {
    return true;
  }
  isLine() {
    return false;
  }
  isDegenerate(t2) {
    return ze(this, t2);
  }
  isDegenerate3D(t2, e) {
    return n(0), false;
  }
  queryLooseEnvelope(t2) {
    if (2 === t2.m_EnvelopeType) return t2.setCoords(this.getStartXY()), t2.mergeNe(this.m_cp), void t2.mergeNe(this.getEndXY());
    n(0);
  }
  clone(t2) {
    const e = this.createInstance();
    return this.copyTo(e), e;
  }
  queryInterval(t2, e) {
    if (0 === t2) {
      const t3 = new n3();
      this.queryEnvelope(t3);
      const s3 = new x2();
      return 0 === e ? t3.queryIntervalX(s3) : t3.queryIntervalY(s3), s3;
    }
    return super.queryInterval(t2, e);
  }
  queryLooseEnvelopeOnInterval(t2, e) {
    const s3 = Ot(mi, 4);
    this.queryControlPoints(s3), Yi(s3, t2.vmin, t2.vmax, s3), e.setFromPoints(s3, 4);
  }
  changeEndPoints2D(t2, e) {
    if (t2.isEqual(this.m_XStart, this.m_YStart) && e.isEqual(this.m_XEnd, this.m_YEnd)) return;
    const s3 = this.m_cp.isEqual(this.m_XStart, this.m_YStart), n4 = this.m_cp.isEqual(this.m_XEnd, this.m_YEnd);
    this.setStartXY(t2), this.setEndXY(e), s3 ? this.m_cp.setCoordsPoint2D(t2) : n4 && this.m_cp.setCoordsPoint2D(e), this.normalizeAfterEndpointChange();
  }
  tToLength(t2) {
    return ui(this, t2, true);
  }
  lengthToT(t2) {
    return pi(this, t2);
  }
  calculateWeightedAreaCentroid2D(t2) {
    const e = Ot(mi, 3);
    ki(this, e);
    const s3 = e[2], n4 = e[1], i = new mi(), r = s3.y * n4.x - s3.x * n4.y;
    i.x = -(4 * s3.x + 5 * n4.x) * r / 60, i.y = -(4 * s3.y + 5 * n4.y) * r / 60;
    const o = fi(this);
    return i.x += (e[0].x - t2.x) * o, i.y += (e[0].y - t2.y) * o, i;
  }
  calculateWeightedCentroid2D() {
    const t2 = new mi();
    return this.isDegenerate(0) ? (t2.setCoords(0, 0), t2) : yi(this) ? (t2.assign(this.getCoord2D(0.5).mul(this.calculateLength2D())), t2) : (t2.assign(Ii(this, 1)), t2);
  }
  getControlPoint1() {
    return this.m_cp.clone();
  }
  setControlPoint1(t2) {
    this.m_cp.setCoordsPoint2D(t2), this.afterCompletedModification();
  }
  queryControlPoints(t2) {
    t2[0].assign(this.getStartXY()), t2[1].assign(this.m_cp), t2[2].assign(this.getEndXY());
  }
  queryControlPointsHelper(t2) {
    return this.queryControlPoints(t2), 3;
  }
  setControlPoints(t2) {
    for (let s3 = 0; s3 < 3; s3++) t2[s3].isNAN() && P("NaN control points in bezier are not supported");
    this.m_XStart = t2[0].x, this.m_YStart = t2[0].y, this.m_cp.setCoordsPoint2D(t2[1]), this.m_XEnd = t2[2].x, this.m_YEnd = t2[2].y, this.afterCompletedModification();
  }
  getTangent(t2) {
    const e = Us(t2, 0, 1);
    let s3 = gi(this, 1, e);
    return s3.isZero() && (s3 = gi(this, 2, e), 1 === e && s3.negateThis()), s3;
  }
  getDerivative(t2) {
    return gi(this, 1, Us(t2, 0, 1));
  }
  getCurvature(t2) {
    const e = gi(this, 1, t2), s3 = gi(this, 2, t2), n4 = e.sqrLength();
    if (0 === n4) return Number.NaN;
    e.divThis(Math.sqrt(n4));
    return e.crossProduct(s3) / n4;
  }
  isIntersecting(t2, e, s3) {
    return 0 !== om(false, this, t2, e, s3);
  }
  isIntersectingPoint(t2, e, s3) {
    if (s3 && (t2.isEqualPoint2D(this.getStartXY()) || t2.isEqualPoint2D(this.getEndXY()))) return false;
    const n4 = new n3();
    if (this.queryLooseEnvelope(n4), n4.inflateCoords(e, e), !n4.contains(t2)) return false;
    const i = this.getClosestCoordinate(t2, false), r = new mi();
    this.queryCoord2D(i, r);
    return mi.distance(r, t2) <= e;
  }
  isIntersectingPoint3D(t2, e, n4, i, r = 1) {
    return n(0), false;
  }
  isMonotoneQuickAndDirty() {
    return false;
  }
  getMonotonicPartParams(t2, s3) {
    const n4 = ai(this), i = n4.specialPointsCount();
    if (!s3) return n4.specialPointsCount();
    t2 < i && P("");
    for (let e = 0; e < i; e++) s3[e] = n4.specialPoints[e];
    return i;
  }
  normalizeAfterEndpointChange() {
    return false;
  }
  orientBottomUp() {
    if (this.m_YEnd < this.m_YStart || this.m_YEnd === this.m_YStart && this.m_XEnd < this.m_XStart) {
      Pt(this.m_XStart, this.m_XStart = this.m_XEnd), Pt(this.m_YStart, this.m_YStart = this.m_YEnd);
      for (let t2 = 0, e = this.m_description.getTotalComponentCount() - 2; t2 < e; t2++) this.m_attributes[t2 + e] = Pt(this.m_attributes[t2], this.m_attributes[t2] = this.m_attributes[t2 + e]);
      this.m_cachedValues = null;
    }
  }
  isDegenerateToLineHelper(t2) {
    const e = Ot(mi, 3);
    this.queryControlPoints(e);
    const s3 = e[2].sub(e[0]), n4 = s3.length();
    if (mi.distance(e[0], e[1]) + mi.distance(e[2], e[1]) - n4 > t2) return false;
    const i = t2, r = e[1].clone();
    r.subThis(e[0]);
    return !(Math.abs(r.crossProduct(s3)) / n4 > i);
  }
  copyIgnoreAttributes(t2) {
    const e = Ot(mi, 3);
    this.queryControlPoints(e), t2.setControlPoints(e);
  }
  calculateArea2DHelper() {
    return fi(this);
  }
  absNorm() {
    return Xi(this);
  }
  queryEnvelopeW(t2, e) {
    const s3 = Ot(mi, 3);
    this.queryControlPoints(s3), Di(s3, t2, e);
  }
  setSegmentFromCoordsForStitcher(t2, e) {
    this.construct(t2[0], this.getControlPoint1(), t2[e - 1]);
  }
  snapControlPoints(t2) {
    return tr(this, t2);
  }
  writeInBufferStream(t2, e) {
    const s3 = new Float64Array(2);
    return s3[0] = this.m_cp.x, s3[1] = this.m_cp.y, t2.writeRangeFromArray(e, s3.length, s3, true, 1), e + s3.length;
  }
  readFromBufferStream(t2, e) {
    const s3 = new Float64Array(2);
    t2.queryRange(e, s3.length, s3, true, 1), this.m_cp.x = s3[0], this.m_cp.y = s3[1], this.m_cachedValues = null;
  }
  needsSnapControlPoints(t2) {
    return er(this, t2);
  }
  calculateSpecialPointsForCracking(t2, e) {
    return 0;
  }
  ensureXYMonotone() {
    return Ai(this);
  }
  setCoordsForIntersector(t2, e, s3) {
    Ni(this, t2, e, s3);
  }
  copyToImpl(t2) {
    const e = t2;
    e.m_cp.setCoordsPoint2D(this.m_cp), Ci(e, xi(this));
  }
  reverseImpl() {
  }
  equalsImplTol(t2, e) {
    const s3 = t2;
    return !!this.m_cp.isEqualPoint2D(s3.m_cp, e);
  }
  equalsImpl(t2) {
    const e = t2;
    return !!this.m_cp.equals(e.m_cp);
  }
  swapImpl(t2) {
    const e = t2;
    e.m_cp = Pt(this.m_cp, this.m_cp = e.m_cp), oi(this, e);
  }
  afterCompletedModification() {
    ri(this);
  }
  intersect(t2, e, s3, n4, i) {
    return mm(false, this, t2, e, s3, n4, i);
  }
  intersectPoint(t2, e, s3) {
    return Si(this, t2, e.length, e, s3);
  }
  endPointModified() {
    ri(this);
  }
  clearEndPointModified() {
  }
};
An.type = a.enumBezier2;
var Tn = class {
  constructor(t2) {
    return t2.coefsT ? (this.m_zeroCtor = t2.zeroCtor, this.m_elements = t2.coefsT.map((t3) => t3.clone()), n(this.m_elements.length === t2.power + 1), void this.updatePower()) : t2.coef0 ? (this.m_zeroCtor = t2.zeroCtor, void (this.m_elements = [t2.coef0.clone()])) : t2.copy ? (this.m_zeroCtor = t2.copy.m_zeroCtor, void (this.m_elements = t2.copy.m_elements.map((t3) => t3.clone()))) : (this.m_zeroCtor = t2.zeroCtor, void (this.m_elements = [new this.m_zeroCtor()]));
  }
  construct(t2, e) {
    return this.m_elements = t2.map((t3) => t3.clone()), this.updatePower(), this;
  }
  construct0(t2) {
    return this.m_elements.length = 0, this.m_elements.push(t2.clone()), this.updatePower(), this;
  }
  assignCopy(t2) {
    return this.m_elements = t2.m_elements.map((t3) => t3.clone()), this.updatePower(), this;
  }
  assignMove(t2) {
    return this.m_elements = t2.m_elements, t2.m_elements = [], this.updatePower(), this;
  }
  power() {
    return this.m_elements.length - 1;
  }
  addElement(t2) {
    this.m_elements.push(t2.clone());
  }
  scaleRangeToUnitInterval(t2, e) {
    const s3 = e;
    s3.subThis(t2);
    const n4 = this.power();
    for (let i = 0; i <= n4; i++) {
      const e2 = new this.m_zeroCtor();
      for (let s4 = i; s4 <= n4; s4++) {
        const n5 = this.m_elements[s4];
        n5.mulDoubleThis(gt(s4, i));
        const r2 = t2.pow(s4 - i);
        n5.mulThis(r2), e2.addThis(n5);
      }
      const r = s3.pow(i);
      e2.mulThis(r), this.m_elements[i] = e2;
    }
  }
  fmSubThis(t2, e) {
    return n(0), this;
  }
  addThis(t2) {
    const e = Math.min(this.power(), t2.power());
    for (let n4 = 0; n4 <= e; ++n4) this.m_elements[n4].addThis(t2.m_elements[n4]);
    const s3 = t2.power();
    this.m_elements.length = Math.max(this.power(), t2.power()) + 1;
    for (let n4 = e + 1; n4 <= s3; ++n4) this.m_elements[n4] = t2.m_elements[n4];
    return this.updatePower(), this;
  }
  add0(t2) {
    return this.m_elements[0].addThis(t2), this.updatePower(), this;
  }
  addNumber0(t2) {
    return n(0), this;
  }
  sub(t2) {
    const e = Math.min(this.power(), t2.power());
    for (let n4 = 0; n4 <= e; ++n4) this.m_elements[n4].subThis(t2.m_elements[n4]);
    const s3 = t2.power();
    this.m_elements.length = Math.max(this.power(), t2.power()) + 1;
    for (let n4 = e + 1; n4 <= s3; ++n4) this.m_elements[n4] = t2.m_elements[n4].clone(), this.m_elements[n4].negateThis();
    return this.updatePower(), this;
  }
  sub0(t2) {
    return n(0), this;
  }
  subNumber0(t2) {
    return n(0), this;
  }
  subShifted(t2, e) {
    const s3 = this.power(), n4 = t2.power() + e, i = Math.min(this.power(), n4);
    let r = 0;
    for (let o = e; o <= i; ++o) this.m_elements[o].subThis(t2.m_elements[r]), r++;
    if (n4 <= s3) return this.updatePower(), this;
    this.m_elements.length = n4 + 1;
    for (let o = s3 + 1; o < this.m_elements.length; ++o) this.m_elements[o] = new this.m_zeroCtor();
    for (let o = i + 1; o <= n4; ++o) this.m_elements[o].subThis(t2.m_elements[r++]);
    return this.updatePower(), this;
  }
  subShiftedWithCoef(t2, e, s3) {
    const n4 = this.power(), i = t2.power() + s3, r = Math.min(this.power(), i);
    let o = 0;
    for (let a2 = s3; a2 <= r; ++a2) this.m_elements[a2].fmSubThis(t2.m_elements[o], e), o++;
    if (i <= n4) return this.updatePower(), this;
    this.m_elements.length = i + 1;
    for (let a2 = n4 + 1; a2 < this.m_elements.length; ++a2) this.m_elements[a2] = new this.m_zeroCtor();
    for (let a2 = r + 1; a2 <= i; ++a2) this.m_elements[a2].fmSubThis(t2.m_elements[o++], e);
    return this.updatePower(), this;
  }
  mulThis(t2) {
    if (this.constructor === t2.constructor) {
      const e = t2, s3 = [];
      for (let t3 = 0, n4 = this.power(); t3 <= n4; t3++) for (let i = 0, r = e.power(); i <= r; i++) {
        const n5 = this.m_elements[t3].clone();
        n5.mulThis(e.m_elements[i]), t3 + i < s3.length ? s3[t3 + i].addThis(n5) : s3.push(n5);
      }
      this.m_elements = s3;
    } else for (let e = 0, s3 = this.power(); e <= s3; e++) this.m_elements[e].mulThis(t2);
    return this.updatePower(), this;
  }
  mulElementThis(t2) {
    for (let e = 0, s3 = this.power(); e <= s3; e++) this.m_elements[e].mulThis(t2);
    return this.updatePower(), this;
  }
  mulDoubleThis(t2) {
    for (let e = 0, s3 = this.power(); e <= s3; e++) this.m_elements[e].mulDoubleThis(t2);
    return this.updatePower(), this;
  }
  mulNumber0(t2) {
    return n(0), this;
  }
  mulBigint0(t2) {
    return n(0), this;
  }
  mulBigIntThis(t2) {
    return n(0), this;
  }
  mulInt320(t2) {
    return n(0), this;
  }
  div0(t2) {
    return n(0), this;
  }
  absThis() {
    return n(0), this;
  }
  div(t2, e, s3) {
    if (this.power() < t2.power()) return s3.assignCopy(this), void e.setZero();
    s3.setZero(), e.setZero();
    const n4 = t2.getElement(t2.power()), i = this.clone();
    let r = i.power();
    const o = i.power() - t2.power();
    let a2 = o;
    for (e.m_elements = Ot(e.m_zeroCtor, o + 1); ; ) {
      if (r < t2.power()) {
        s3.assignMove(i);
        break;
      }
      if (r === i.power()) {
        const s4 = i.getElement(i.power());
        s4.divThis(n4), i.subShiftedWithCoef(t2, s4, i.power() - t2.power()), e.m_elements[a2] = s4.clone();
      }
      a2--, r--;
    }
    s3.updatePower(), e.updatePower();
  }
  divThis(t2) {
    return n(0), this;
  }
  subThis(t2) {
    const e = Math.min(this.power(), t2.power());
    for (let n4 = 0; n4 <= e; ++n4) this.m_elements[n4].subThis(t2.m_elements[n4]);
    const s3 = t2.power();
    this.m_elements.length = Math.max(this.power(), t2.power()) + 1;
    for (let n4 = e + 1; n4 <= s3; ++n4) this.m_elements[n4] = t2.m_elements[n4].clone(), this.m_elements[n4].negateThis();
    return this.updatePower(), this;
  }
  sub0This(t2) {
    return this.m_elements[0].subThis(t2), this.updatePower(), this;
  }
  subFrom(t2, e) {
    n(0);
  }
  isZero() {
    return 0 === this.power() && this.m_elements[0].isZero();
  }
  negateThis() {
    for (let t2 = this.m_elements.length - 1; t2 >= 0; t2--) this.m_elements[t2].negateThis();
    return this;
  }
  getElement(t2) {
    return this.m_elements[t2].clone();
  }
  setElement(t2, e) {
    return this.m_elements[t2] = e.clone(), this;
  }
  evaluate(t2) {
    const e = this.power(), s3 = this.m_elements[e].clone();
    for (let n4 = e - 1; n4 >= 0; --n4) s3.mulThis(t2), s3.addThis(this.m_elements[n4]);
    return s3;
  }
  equals(t2) {
    if (this === t2) return true;
    if (this.power() !== t2.power()) return false;
    for (let e = this.m_elements.length - 1; e >= 0; e--) if (!this.m_elements[e].equals(t2.m_elements[e])) return false;
    return true;
  }
  updatePower() {
    for (let t2 = this.m_elements.length - 1; t2 > 0 && this.m_elements[t2].isZero(); t2--) this.m_elements.pop();
    return this;
  }
  setZero() {
    return this.m_elements.length = 1, this.m_elements[0] = new this.m_zeroCtor(), this.updatePower(), this;
  }
  derivative(t2) {
    if (this.power() < t2) return this.clone().setZero();
    if (0 === t2) return this.clone();
    const e = new this.constructor({ coefsT: this.m_elements.slice(t2), power: this.power() - t2 });
    for (let s3 = t2, n4 = this.power(); s3 <= n4; s3++) {
      let n5 = BigInt(s3);
      for (let e2 = s3 - 1, i = s3 - t2; e2 > i; --e2) n5 *= BigInt(e2);
      e.m_elements[s3 - t2].mulBigIntThis(n5);
    }
    return e.updatePower(), e;
  }
  derivative1This() {
    if (this.m_elements.length > 1) {
      this.m_elements = this.m_elements.slice(1);
      for (let t2 = 1, e = this.power(); t2 <= e; t2++) this.m_elements[t2].mulThis(si.constructInt32(t2 + 1));
    } else this.m_elements.length = 0, this.m_elements.push(new this.m_zeroCtor());
    return this;
  }
  limitPrecisionThis(t2) {
    for (let e = this.power(); e >= 0; --e) this.m_elements[e].limitPrecisionThis(t2);
    return this.updatePower(), this;
  }
  hiBitIndex() {
    return this.m_elements.reduce((t2, e) => {
      const s3 = e.hiBitIndex();
      return t2 < s3 ? s3 : t2;
    }, 0);
  }
  shiftRight(t2) {
    return this.m_elements.splice(0, t2), this.updatePower(), this;
  }
  evaluateDerivative(t2) {
    const e = this.power(), s3 = this.m_elements[e];
    s3.mulDoubleThis(e);
    for (let n4 = e - 1; n4 >= 1; --n4) {
      s3.mulThis(t2);
      const e2 = this.m_elements[n4];
      e2.mulDoubleThis(n4), s3.addThis(e2);
    }
    return s3;
  }
  static evaluateCoefs(t2, e, s3) {
    const n4 = t2.power();
    s3.construct0(t2.getElement(0).evaluate(e));
    for (let i = 1; i <= n4; ++i) s3.addElement(t2.getElement(i).evaluate(e));
    s3.updatePower();
  }
};
var In = class _In extends Tn {
  constructor(t2) {
    super(void 0 === t2 ? { zeroCtor: si } : __spreadProps(__spreadValues({}, t2), { zeroCtor: si }));
  }
  clone() {
    return new _In({ copy: this });
  }
  absEvaluate(t2) {
    const e = this.power(), s3 = this.m_elements[e].clone();
    s3.absThis();
    const n4 = t2.clone();
    n4.absThis();
    for (let i = e - 1; i >= 0; --i) s3.mulThis(n4), s3.addThis(this.m_elements[i].abs());
    return s3;
  }
};
var Mn = class _Mn extends Tn {
  constructor(t2) {
    super(void 0 === t2 ? { zeroCtor: In } : __spreadProps(__spreadValues({}, t2), { zeroCtor: In }));
  }
  clone() {
    return new _Mn({ copy: this });
  }
  constructFromMPValues(t2, e) {
    this.m_elements.length = 0;
    for (let s3 = 0; s3 <= e; ++s3) this.m_elements.push(new In({ coef0: t2[s3] }));
    return this.updatePower(), this;
  }
};
function Yn() {
  return { polypoly1: new Mn(), polypoly2: new Mn(), polyX2: new In(), polyY2: new In(), polyX2Deriv: new In(), polyY2Deriv: new In(), polypolyX1: new Mn(), polypolyY1: new Mn(), polypolyX1Deriv: new Mn(), polypolyY1Deriv: new Mn(), lazyPolypolyD1: new Mn(), lazyPolypolyD1Deriv: new Mn(), lazyPolyD2: new In(), lazyPolyD2Deriv: null, polypoly11: new Mn(), polypoly12: new Mn(), tempPp: new Mn(), tempPp1: new Mn(), tempPp2: new Mn(), tempP: new In(), tempP1: new In(), tempP2: new In() };
}
function Nn(t2, e, n4, i, r, o, a2, u, m, l2, c, g2, d, _, p2, f2, P4, y2, x4, C3 = false) {
  const v2 = Yn();
  v2.polyX2.construct(a2, u), v2.polyY2.construct(m, l2), v2.polypolyX1.constructFromMPValues(t2, e), v2.polypolyY1.constructFromMPValues(n4, i), v2.polypoly11.assignCopy(v2.polypolyX1), v2.polypoly12.assignCopy(v2.polypolyY1), c && (v2.lazyPolyD2.construct(c, g2), v2.polypoly11.mulElementThis(v2.lazyPolyD2), v2.polypoly12.mulElementThis(v2.lazyPolyD2)), r ? (v2.lazyPolypolyD1.constructFromMPValues(r, o), v2.lazyPolypolyD1Deriv = new Mn({ copy: v2.lazyPolypolyD1 }), v2.lazyPolypolyD1Deriv.derivative1This(), v2.tempPp.assignCopy(v2.lazyPolypolyD1), v2.tempPp.mulElementThis(v2.polyX2), v2.polypoly11.subThis(v2.tempPp), v2.tempPp.assignCopy(v2.lazyPolypolyD1), v2.tempPp.mulElementThis(v2.polyY2), v2.polypoly12.subThis(v2.tempPp)) : (v2.polypoly11.sub0This(v2.polyX2), v2.polypoly12.sub0This(v2.polyY2)), v2.polypolyX1Deriv.assignCopy(v2.polypolyX1), v2.polypolyX1Deriv.derivative1This(), v2.polypolyY1Deriv.assignCopy(v2.polypolyY1), v2.polypolyY1Deriv.derivative1This(), r && (v2.polypolyX1Deriv.mulThis(v2.lazyPolypolyD1), v2.tempPp2.assignCopy(v2.lazyPolypolyD1Deriv), v2.tempPp2.mulThis(v2.polypolyX1), v2.polypolyX1Deriv.subThis(v2.tempPp2), v2.polypolyY1Deriv.mulThis(v2.lazyPolypolyD1), v2.tempPp2.assignCopy(v2.lazyPolypolyD1Deriv), v2.tempPp2.mulThis(v2.polypolyY1), v2.polypolyY1Deriv.subThis(v2.tempPp2)), v2.polyX2Deriv.assignCopy(v2.polyX2), v2.polyX2Deriv.derivative1This(), v2.polyY2Deriv.assignCopy(v2.polyY2), v2.polyY2Deriv.derivative1This(), c && (n(null === v2.lazyPolyD2Deriv), v2.lazyPolyD2Deriv = new In({ copy: v2.lazyPolyD2 }), v2.lazyPolyD2Deriv.derivative1This(), v2.polyX2Deriv.mulThis(v2.lazyPolyD2), v2.tempP1.assignCopy(v2.lazyPolyD2Deriv), v2.tempP1.mulThis(v2.polyX2), v2.polyX2Deriv.subThis(v2.tempP1), v2.polyY2Deriv.mulThis(v2.lazyPolyD2), v2.tempP1.assignCopy(v2.lazyPolyD2Deriv), v2.tempP1.mulThis(v2.polyY2), v2.polyY2Deriv.subThis(v2.tempP1)), v2.polypoly1.assignCopy(v2.polypoly11), v2.polypoly1.mulElementThis(v2.polyX2Deriv), v2.tempPp.assignCopy(v2.polypoly12), v2.tempPp.mulElementThis(v2.polyY2Deriv), v2.polypoly1.addThis(v2.tempPp), v2.polypoly2.assignCopy(v2.polypolyX1Deriv), v2.polypoly2.mulElementThis(v2.polyY2Deriv), v2.tempPp.assignCopy(v2.polypolyY1Deriv), v2.tempPp.mulElementThis(v2.polyX2Deriv), v2.polypoly2.subThis(v2.tempPp);
  let b2 = [];
  const S2 = [];
  P4 || (P4 = []), f2 || (f2 = []), Gn(v2.polypoly11, v2.polypoly12, v2.tempP);
  const E = 64, D3 = ii.ldexp(-59).toDouble(), w3 = [];
  let A4 = Wn(v2.tempP, d, p2, D3, E, w3, y2, y2);
  if (A4 < 0) return -1;
  for (let Y3 = 0; Y3 < A4; Y3++) {
    const t3 = v2.tempP1, e2 = v2.tempP2;
    In.evaluateCoefs(v2.polypoly11, w3[Y3], t3);
    const n5 = Et(t3.m_elements, t3.power() + 1);
    n5.sort((t4, e3) => t4.compare(e3)), In.evaluateCoefs(v2.polypoly12, w3[Y3], e2);
    const i2 = Et(e2.m_elements, e2.power() + 1);
    i2.sort((t4, e3) => t4.compare(e3));
    const r2 = n5[0], o2 = n5.at(-1), a3 = i2[0], u2 = i2.at(-1);
    o2.subThis(r2), u2.subThis(a3);
    const m2 = o2.subThis(u2).GEZ(), l3 = 58, c2 = ii.ldexp(-59).toDouble(), g3 = [];
    let p3;
    if (p3 = Wn(m2 ? t3 : e2, d, _, c2, l3, g3, y2, y2), p3 < 0 && b("mp_curve_proximity"), p3 > 0) {
      const n6 = m2 ? e2 : t3;
      for (let t4 = 0; t4 < p3; t4++) {
        let e3;
        if (m2) {
          const s3 = v2.tempP;
          In.evaluateCoefs(v2.polypoly12, w3[Y3].addDouble(Number.EPSILON), s3), e3 = s3.evaluate(g3[t4]);
        } else {
          const s3 = v2.tempP;
          In.evaluateCoefs(v2.polypoly11, w3[Y3].addDouble(Number.EPSILON), s3), e3 = s3.evaluate(g3[t4]);
        }
        const i3 = n6.evaluateDerivative(g3[t4]).abs().mulDoubleThis(Number.EPSILON), r3 = n6.evaluate(g3[t4]);
        i3.addThis(e3.sub(r3).absThis()), i3.ldexpThis(3), r3.absThis(), r3.lt(i3) ? S2.push($t(g3[t4].toDouble(), w3[Y3].toDouble())) : n(r3.gte(i3));
      }
    }
  }
  A4 = S2.length, Gn(v2.polypoly1, v2.polypoly2, v2.tempP);
  const T3 = [];
  let I2 = Wn(v2.tempP, d, p2, D3, E, T3);
  I2 < 0 && (I2 = 0);
  for (let s3 = 0; s3 < I2; s3++) {
    In.evaluateCoefs(v2.polypoly1, T3[s3], v2.tempP1);
    const t3 = [];
    let e2 = Wn(v2.tempP1, d, _, D3, E, t3);
    if (0 !== e2) if (In.evaluateCoefs(v2.polypoly2, T3[s3], v2.tempP2), e2 < 0) {
      if (e2 = Wn(v2.tempP2, d, _, D3, E, t3), e2 < 0) continue;
      for (let n5 = 0; n5 < e2; n5++) b2.push($t(t3[n5].toDouble(), T3[s3].toDouble()));
    } else {
      const n5 = v2.tempP2.absEvaluate(ii);
      n5.mulThis(si.constructDouble(1e-12));
      for (let i2 = 0; i2 < e2; i2++) {
        const e3 = v2.tempP2.evaluate(t3[i2]);
        e3.absThis(), e3.lt(n5) && b2.push($t(t3[i2].toDouble(), T3[s3].toDouble()));
      }
    }
  }
  if (I2 = b2.length, 0 === A4 && 0 === I2) return 0;
  b2 = b2.concat(S2), b2.sort((t3, e2) => C3 ? Ct(t3.second, e2.second) : Ct(t3.first, e2.first));
  const M2 = Bt(b2, (t3, e2) => t3.first === e2.first && t3.second === e2.second);
  b2 = b2.slice(0, M2), f2.length = 0, P4.length = 0;
  for (const s3 of b2) f2.push(s3.first), P4.push(s3.second);
  return n(f2.length === P4.length), P4.length;
}
function Xn(t2, e, s3, n4, i, r, o) {
  if (0 === t2.power()) return t2.isZero() ? -1 : 0;
  const a2 = t2.evaluate(si.constructInt32(1)).isZero();
  if (1 === t2.power()) {
    const s4 = Vn(t2.getElement(1), t2.getElement(0), e, r.at(0));
    return r[0].limitPrecisionThis(n4), 1 !== s4 ? 0 : (r[0].limitPrecisionThis(n4), 1);
  }
  if (2 === t2.power()) {
    return Ln(t2.getElement(2), t2.getElement(1), t2.getElement(0), n4, e, a2, r);
  }
  if (3 === t2.power()) {
    return Rn(t2.getElement(3), t2.getElement(2), t2.getElement(1), t2.getElement(0), n4, e, a2, r);
  }
  if (4 === t2.power()) {
    return zn(t2.getElement(4), t2.getElement(3), t2.getElement(2), t2.getElement(1), t2.getElement(0), n4, e, a2, r);
  }
  return On(t2, e, s3, n4, a2, i, r, o);
}
function qn() {
  return { polyIntersect: new In(), polyX1: new In(), polyY1: new In(), polyX1Deriv: new In(), polyY1Deriv: new In(), lazyPolyD1: new In(), lazyPolyD1Deriv: new In(), tempP: new In(), tempP1: new In(), tempP2: new In(), polypoly1Proximity: new Mn(), polypoly2Proximity: new Mn() };
}
function Fn(t2, e, s3, n4, i, r, o, a2, h2, u, m, l2, c) {
  const g2 = qn();
  g2.polyX1.construct(t2, e), g2.polyY1.construct(s3, n4), g2.polyX1Deriv.assignCopy(g2.polyX1), g2.polyX1Deriv.derivative1This(), g2.polyY1Deriv.assignCopy(g2.polyY1), g2.polyY1Deriv.derivative1This(), g2.polyIntersect.assignCopy(g2.polyX1), g2.polyIntersect.mulThis(g2.polyX1), g2.polyIntersect.mulElementThis(o[0]), g2.tempP.assignCopy(g2.polyY1), g2.tempP.mulThis(g2.polyY1), g2.tempP.mulElementThis(o[1]), g2.polyIntersect.addThis(g2.tempP), i ? (g2.lazyPolyD1.construct(i, r), g2.tempP.assignCopy(g2.lazyPolyD1), g2.tempP.mulThis(g2.lazyPolyD1), g2.tempP.mulElementThis(o[2]), g2.polyIntersect.addThis(g2.tempP)) : g2.polyIntersect.add0(o[2]);
  {
    const i2 = o[0].clone(), r2 = i2.clone();
    r2.sqrThis();
    const a3 = o[1].clone(), h3 = a3.clone();
    h3.sqrThis();
    const u2 = o[2].clone(), m2 = i2.clone();
    m2.subThis(a3), g2.polyX1.construct(t2, e), g2.polyX1Deriv.assignCopy(g2.polyX1), g2.polyX1Deriv.derivative1This(), g2.polyY1.construct(s3, n4), g2.polyY1Deriv.assignCopy(g2.polyY1), g2.polyY1Deriv.derivative1This(), g2.tempP.assignCopy(g2.polyX1), g2.tempP.mulThis(g2.polyX1), g2.tempP.mulElementThis(h3), g2.tempP.mulElementThis(u2), g2.polypoly1Proximity.construct0(g2.tempP), g2.tempP.assignCopy(g2.polyX1), g2.tempP.mulThis(a3.mul(m2).mul(u2).ldexpThis(1)), g2.polypoly1Proximity.addElement(g2.tempP), g2.tempP.assignCopy(g2.polyX1), g2.tempP.mulThis(g2.polyX1), g2.tempP.mulElementThis(i2.mul(h3)), g2.tempP1.assignCopy(g2.polyY1), g2.tempP1.mulThis(g2.polyY1), g2.tempP1.mulElementThis(r2.mul(a3)), g2.tempP.addThis(g2.tempP1), g2.tempP.add0(m2.mul(m2).mul(u2)), g2.polypoly1Proximity.addElement(g2.tempP), g2.tempP.assignCopy(g2.polyX1), g2.tempP.mulElementThis(m2.mul(i2).mul(a3).ldexpThis(1)), g2.polypoly1Proximity.addElement(g2.tempP), g2.tempP.construct0(i2.mul(m2).mul(m2)), g2.polypoly1Proximity.addElement(g2.tempP), g2.polypoly1Proximity.updatePower(), g2.tempP.construct0(ei), g2.polypoly2Proximity.construct0(g2.tempP), g2.tempP.assignCopy(g2.polyX1), g2.tempP.mulThis(g2.polyX1Deriv), g2.tempP1.assignCopy(g2.polyY1), g2.tempP1.mulThis(g2.polyY1Deriv), g2.tempP.addThis(g2.tempP1), g2.tempP.mulElementThis(i2.mul(a3)), g2.polypoly2Proximity.addElement(g2.tempP), g2.tempP.assignCopy(g2.polyX1Deriv), g2.tempP.mulElementThis(m2.mul(i2)), g2.polypoly2Proximity.addElement(g2.tempP), g2.polypoly2Proximity.updatePower();
  }
  const d = [], _ = [];
  null === m && (m = []);
  let p2 = 2 * g2.polyIntersect.power() + 58;
  const f2 = 0.5 * Number.EPSILON, P4 = [], y2 = Wn(g2.polyIntersect, a2, h2, f2, p2, P4, l2, l2);
  if (y2 < 0) return -1;
  for (const b2 of P4) _.push(b2.toDouble());
  Gn(g2.polypoly1Proximity, g2.polypoly2Proximity, g2.tempP), p2 = 2 * g2.tempP.power() + 58, P4.length = 0;
  let x4 = Wn(g2.tempP, a2, h2, f2, p2, P4);
  if (x4 < 0 && (x4 = 0), 0 === y2 && 0 === x4) return 0;
  for (const b2 of P4) d.push(b2.toDouble());
  const C3 = d.concat(_);
  m.length = C3.length, Dt(m, C3, 0, 0, C3.length), qt(m);
  const v2 = Bt(m, (t3, e2) => 0 === Ct(t3, e2));
  return m.length = v2, m.length;
}
function Vn(t2, e, s3, n4) {
  return t2.isZero() ? e.isZero() ? -1 : 0 : (n4.setThis(e), n4.negateThis(), n4.divThis(t2), s3.isEmpty() || s3.containsCoordinate(n4.value()) ? 1 : 0);
}
function Ln(t2, e, s3, n4, i, r, o) {
  if (t2.isZero()) {
    if (r) return o[0].setInt32(1), i.containsCoordinate(1) ? 1 : 0;
    return Vn(e, s3, i, o[0]);
  }
  if (r) {
    let e2 = 2;
    return o[0].setInt32(1), s3.equals(t2) ? (o[1].setInt32(1), e2 = 1) : o[1].setThis(s3.div(t2)), i.containsCoordinate(o[1].value()) || (e2 = 1), i.containsCoordinate(o[0].value()) || (e2--, o[0].setThis(o[1])), 2 === e2 && o[0].value() > o[1].value() && (o[1] = Pt(o[0], o[0] = o[1])), e2;
  }
  const a2 = e.clone();
  a2.sqrThis();
  const h2 = t2.clone();
  if (h2.mulThis(s3).ldexpThis(2).negateThis().addThis(a2), h2.LZ()) return 0;
  const u = n4 + 2, m = si.sqrt(h2, u), l2 = m.clone();
  e.LZ() && l2.negateThis(), l2.addThis(e).limitPrecisionThis(u).ldexpThis(-1).negateThis();
  let c = 0;
  return o[0].setThis(l2).divThis(si.constructAssign(t2, u)).limitPrecisionThis(n4), (i.isEmpty() || i.containsCoordinate(o[0].value())) && c++, m.isZero() || l2.isZero() || (o[c].setThis(s3).divThis(l2).limitPrecisionThis(n4), (i.isEmpty() || i.containsCoordinate(o[c].value())) && c++, 2 === c && o[0].gt(o[1]) && (o[1] = Pt(o[0], o[0] = o[1]))), c;
}
function Rn(t2, e, n4, i, r, o, a2, h2) {
  if (t2.isZero()) {
    return Ln(e, n4, i, r, o, a2, h2);
  }
  const u = (t3, e2) => {
    if (t3 > 0) {
      let s3 = e2 + t3;
      for (let t4 = 1; t4 < s3; t4++) h2[t4].equals(h2[0]) && (h2[s3 - 1] = Pt(h2[t4], h2[t4] = h2[s3 - 1]), s3--);
      e2 = s3;
    }
    return Zt(h2, 0, e2, (t4, e3) => t4.compare(e3)), e2;
  };
  if (i.isZero()) {
    let s3 = 0;
    o.containsCoordinate(0) && (h2[0].setInt32(0), s3 = 1);
    return u(Ln(t2, e, n4, r, o, a2, h2.slice(1)), s3);
  }
  if (a2) {
    let s3 = 0;
    o.containsCoordinate(1) && (h2[0].setInt32(1), s3 = 1);
    const n5 = e.add(t2), a3 = i.negate(), m2 = t2.add(n5).add(a3).isZero();
    return u(Ln(t2, n5, a3, r, o, m2, h2.slice(s3)), s3);
  }
  const m = new si(), l2 = new si(), c = new si(), g2 = e.clone();
  if (g2.isZero()) l2.setThis(n4), l2.divThis(t2), c.setThis(i), c.divThis(t2);
  else {
    g2.divThis(t2).divDoubleThis(3).negateThis();
    const s3 = e.clone();
    s3.sqrThis();
    const r2 = t2.clone();
    r2.sqrThis(), l2.setThis(t2), l2.mulThis(n4).mulDoubleThis(3).subThis(s3).divThis(r2).divDoubleThis(3), c.setThis(s3), c.mulThis(e), c.ldexpThis(1), m.setThis(t2), m.mulThis(e).mulThis(n4).mulDoubleThis(9), c.subThis(m), m.setThis(r2), m.mulThis(i).mulDoubleThis(27), c.addThis(m), c.divThis(r2).divThis(t2).divDoubleThis(27);
  }
  if (l2.isZero()) {
    const t3 = c.clone();
    return t3.negateThis(), t3.isZero() ? (h2[0].setThis(g2), Jn(o, r, h2, 1)) : (h2[0].setThis(si.cubicRoot(t3, r).add(g2)), Jn(o, r, h2, 1));
  }
  const d = c.clone();
  if (d.sqrThis().ldexpThis(-2), m.setThis(l2.clone()), m.sqrThis().mulThis(l2).divDoubleThis(27), d.addThis(m), d.isZero()) return h2[0].setThis(c), h2[0].mulDoubleThis(3).divThis(l2), h2[1].setThis(h2[0]), h2[1].negateThis(), h2[1].ldexpThis(-1), h2[0].addThis(g2), h2[1].addThis(g2), Jn(o, r, h2, 2);
  if (d.GZ()) return d.setThis(si.sqrt(d, r + 8)), m.setThis(c), m.ldexpThis(-1).negateThis(), m.addThis(d), h2[0].setThis(si.cubicRoot(m, r + 8)), m.setThis(c), m.ldexpThis(-1).negateThis(), m.subThis(d), h2[0].addThis(si.cubicRoot(m, r + 8)), h2[0].addThis(g2), Jn(o, r, h2, 1);
  m.setThis(l2), m.divDoubleThis(3).negateThis(), n(m.GEZ());
  const _ = si.sqrt(m, r + 8), p2 = _.clone();
  p2.negateThis(), p2.addThis(g2), _.addThis(g2);
  const f2 = si.constructDouble(o.isEmpty() ? -Number.MAX_VALUE : o.vmin), P4 = si.constructDouble(o.isEmpty() ? Number.MAX_VALUE : o.vmax), y2 = new In({ zeroCtor: si });
  y2.construct0(i), y2.addElement(n4), y2.addElement(e), y2.addElement(t2);
  const x4 = new In({ copy: y2 });
  x4.derivative1This();
  let C3 = 0;
  const v2 = Ot(si, 4);
  v2[C3++].setThis(f2), p2.gt(f2) && p2.lt(P4) && v2[C3++].setThis(p2), _.gt(f2) && _.lt(P4) && v2[C3++].setThis(_), v2[C3++].setThis(P4);
  const b2 = 3 * r;
  let S2 = 52, E = Number.EPSILON;
  for (; S2 < b2; ) 2 * S2 <= b2 ? (E *= E, S2 *= 2) : (E *= Number.EPSILON, S2 += 52);
  S2 += 2;
  let D3 = 0, w3 = false;
  for (let s3 = 1; s3 < C3; s3++) {
    if (Hn(y2, x4, v2[s3 - 1], v2[s3], E, S2, h2[0])) {
      D3 = 1, w3 = s3 + 1 < C3;
      break;
    }
  }
  if (!D3) return 0;
  if (w3) {
    const t3 = new In({ zeroCtor: si, coef0: h2[0] });
    t3.negateThis(), t3.addElement(ii);
    const e2 = new In({ zeroCtor: si }), n5 = new In({ zeroCtor: si });
    y2.div(t3, e2, n5), n(2 === e2.power()), n(0 === n5.power());
    const i2 = Ln(e2.getElement(2), e2.getElement(1), e2.getElement(0), r, o, false, h2.slice(1));
    n(i2 >= 0 && i2 <= 2), D3 += i2;
  }
  return Jn(o, r, h2, D3);
}
function zn(t2, e, s3, n4, i, r, o, a2, h2) {
  if (t2.isZero()) return Rn(e, s3, n4, i, r, o, a2, h2);
  const u = (t3, e2) => {
    if (t3 > 0) {
      let s4 = e2 + t3;
      for (let t4 = 1; t4 < s4; t4++) h2[t4].equals(h2[0]) && (h2[s4 - 1] = Pt(h2[t4], h2[t4] = h2[s4 - 1]), s4--);
      e2 = s4;
    }
    return Zt(h2, 0, e2, (t4, e3) => t4.compare(e3)), e2;
  };
  if (i.isZero()) {
    let i2 = 0;
    o.containsCoordinate(0) && (h2[0].setInt32(0), i2 = 1);
    return u(Rn(t2, e, s3, n4, r, o, a2, h2.slice(i2)), i2);
  }
  const m = new In({ zeroCtor: si, coef0: i });
  if (m.addElement(n4), m.addElement(s3), m.addElement(e), m.addElement(t2), a2) {
    let t3 = 0;
    o.containsCoordinate(1) && (h2[0].setInt32(1), t3 = 1);
    const e2 = new In({ zeroCtor: si, coef0: si.constructInt32(-1) });
    e2.addElement(si.constructInt32(1));
    const s4 = new In({ zeroCtor: si }), n5 = new In({ zeroCtor: si });
    m.div(e2, s4, n5);
    return u(Rn(3 === s4.power() ? s4.getElement(3) : ei.clone(), s4.power() >= 2 ? s4.getElement(2) : ei.clone(), s4.power() >= 1 ? s4.getElement(1) : ei.clone(), s4.getElement(0), r, o, s4.evaluate(ii).isZero(), h2.slice(t3)), t3);
  }
  if (m.getElement(0).isZero()) {
    let t3 = 0;
    for (o.containsCoordinate(0) && (t3 = 1, h2[0].setDouble(0)); m.getElement(0).isZero() && m.power() > 0; ) m.shiftRight(1);
    const e2 = Rn(3 === m.power() ? m.getElement(3) : ei.clone(), m.power() >= 2 ? m.getElement(2) : ei.clone(), m.power() >= 1 ? m.getElement(1) : ei.clone(), m.getElement(0), r, o, false, h2.slice(t3));
    return e2 > 0 && (t3 += e2), Zt(h2, 0, t3, (t4, e3) => t4.compare(e3)), t3;
  }
  let l2 = 52, c = Number.EPSILON;
  for (; l2 < r; ) 2 * l2 <= r ? (c *= c, l2 *= 2) : (c *= Number.EPSILON, l2 += 52);
  l2 += 2;
  const g2 = Qn(m), d = si.constructDouble(Math.max(Math.abs(o.vmax), Math.abs(o.vmin)));
  return c = (g2.lt(d) ? g2 : d).mul(si.constructDouble(c)).toDouble(), On(m, o, c, l2, a2, false, h2, 4);
}
function Bn(t2, e) {
  let s3 = t2, n4 = e;
  n4.power() > s3.power() && (n4 = Pt(s3, s3 = n4));
  const i = s3.power() - n4.power(), r = new In({ copy: s3.getElement(s3.power()) });
  s3.mulThis(n4.getElement(n4.power()));
  for (let o = 0, a2 = s3.power(); o < a2; o++) if (o >= i) {
    const t3 = new In({ copy: n4.getElement(o - i) });
    t3.mulThis(r);
    const e2 = s3.getElement(o).sub(t3);
    s3.setElement(o, e2);
  }
  s3.setElement(s3.power(), s3.getElement(s3.power()).setZero()), s3.updatePower(), kn(s3);
}
function kn(t2) {
  let e = 0;
  for (; e < t2.power() && t2.getElement(e).isZero(); ) e++;
  return e > 0 && (t2.shiftRight(e), true);
}
function Gn(t2, e, s3) {
  const n4 = t2.clone(), i = e.clone();
  for (kn(n4), kn(i); 0 !== n4.power() || 0 !== i.power(); ) Bn(n4, i);
  s3.assignMove(n4.getElement(0));
}
function Wn(t2, e, s3, n4, i, r, o = false, a2 = false) {
  r.length = 0;
  const h2 = t2.power(), u = Ot(si, 2 * h2 + 4), m = Xn(t2, s3 || x2.unit(), n4, i, false, u, u.length);
  if (m > 0) {
    r.length = 0;
    for (let t3 = 0; t3 < m; t3++) {
      const e2 = u[t3];
      t3 > 0 && e2.lte(r.at(-1)) || r.push(e2.clone());
    }
    return r.length;
  }
  return m;
}
function jn(t2, e, n4) {
  if (n(n4 >= 1), 0 === t2.power()) return t2.isZero() ? -1 : 0;
  const i = t2.getElement(0);
  return i.negateThis(), i.divThis(t2.getElement(1)), e[0].setThis(i), 1;
}
function Zn(t2, e, n4, i) {
  if (t2.power() < 2) return jn(t2, n4, i);
  n(i >= 1);
  let r = t2.getElement(1);
  r.mulThis(t2.getElement(1));
  const o = t2.getElement(0);
  if (o.mulThis(t2.getElement(2)), o.ldexpThis(2), r.subThis(o), r.LZ()) return 0;
  if (r.isZero()) {
    const s3 = t2.getElement(1);
    return s3.negateThis(), s3.divThis(t2.getElement(2)), s3.ldexpThis(-1), s3.limitPrecisionThis(e), n4[0].setThis(s3), 1;
  }
  n(i >= 2), r = si.sqrt(r, e + 8);
  const a2 = t2.getElement(1);
  a2.negateThis();
  const h2 = a2.clone();
  h2.subThis(r), h2.divThis(t2.getElement(2)), h2.ldexpThis(-1), h2.limitPrecisionThis(e);
  const u = a2.clone();
  return u.addThis(r), u.divThis(t2.getElement(2)), u.ldexpThis(-1), u.limitPrecisionThis(e), h2.lt(u) ? (n4[0].setThis(h2), n4[1].setThis(u)) : (n4[1].setThis(h2), n4[0].setThis(u)), 2;
}
function Hn(t2, e, s3, n4, i, r, o) {
  let a2 = s3.clone(), u = n4.clone();
  a2.limitPrecisionThis(r), u.limitPrecisionThis(r);
  let m = t2.evaluate(a2);
  m.limitPrecisionThis(r + 2);
  let l2 = t2.evaluate(u);
  if (l2.limitPrecisionThis(r + 2), m.GEZ() && l2.GEZ() || m.LEZ() && l2.LEZ()) return m.absLessAbs(l2) ? (o = a2, m.isZero()) : (o = u, l2.isZero());
  const c = l2.LZ();
  c && (l2 = Pt(m, m = l2), u = Pt(a2, a2 = u));
  const g2 = c ? u : a2, d = c ? a2 : u, _ = a2.add(u).ldexpThis(-1);
  _.limitPrecisionThis(r);
  const p2 = u.sub(a2);
  p2.limitPrecisionThis(r), p2.absThis();
  const f2 = p2.clone();
  let P4 = t2.evaluate(_), y2 = e.evaluate(_);
  const x4 = new In({ copy: t2 }), C3 = new In({ copy: e });
  {
    const s4 = Math.max(t2.hiBitIndex(), e.hiBitIndex()), n5 = ii.clone();
    n5.ldexpThis(-(r + 2));
    for (let i2 = 64; i2 < s4; ) {
      x4.limitPrecisionThis(i2), C3.limitPrecisionThis(i2);
      const r2 = x4.evaluate(_), o2 = C3.evaluate(_), a3 = r2.sub(P4), h2 = o2.sub(y2);
      if (a3.divThis(P4).absThis().lt(n5) && (y2.isZero() || h2.divThis(y2).absThis().lt(n5))) break;
      x4.assignCopy(t2), C3.assignCopy(e), i2 = Math.min(i2 + 64, s4);
    }
    P4.limitPrecisionThis(r + 2), y2.limitPrecisionThis(r + 2);
  }
  const v2 = 1, b2 = 4;
  let S2 = b2;
  const E = 2;
  let D3 = 1, w3 = 0, A4 = 0, T3 = v2;
  const I2 = 32, M2 = si.constructDouble(0.25 * i), Y3 = si.constructDouble(0.5001);
  let N2 = 0;
  const X2 = 300;
  for (; ++N2 < X2; ) {
    if (N2 > I2 && w3 > 0 || y2.isZero() || T3 === E && w3 > 1 || T3 === v2 && S2 < b2) T3 = v2, D3 > 1 && D3--;
    else if (T3 = E, A4 > 1) {
      const t4 = p2.mul(y2);
      t4.absThis(), t4.ldexpThis(-3), t4.absLessAbs(P4) && D3++;
    }
    p2.setThis(f2);
    const t3 = new si();
    let e2 = false;
    if (T3 === v2) do {
      if (A4 > 2) {
        const e3 = p2.clone();
        if (e3.absThis(), e3.ldexpThis(4), d.sub(g2).ldexpThis(-1).gt(e3)) {
          if (_.equals(g2)) {
            t3.setThis(_), _.setThis(g2.add(e3)), _.limitPrecisionThis(r), f2.setThis(_.sub(t3));
            break;
          }
          if (_.equals(d)) {
            t3.setThis(_), _.setThis(d.sub(e3)), _.limitPrecisionThis(r), f2.setThis(_.sub(t3));
            break;
          }
        }
      }
      f2.setThis(u.sub(a2)), f2.ldexpThis(-1), f2.limitPrecisionThis(r), t3.setThis(_), _.setThis(a2.add(f2)), _.limitPrecisionThis(r), _.lt(g2) ? _.setThis(g2) : _.gt(d) && _.setThis(d), e2 = a2.equals(_) || u.equals(_);
    } while (0);
    else for (; ; ) {
      if (f2.setThis(P4.div(y2)), f2.limitPrecisionThis(r), 1 !== D3 && f2.mulDoubleThis(D3), t3.setThis(_), _.subThis(f2), _.limitPrecisionThis(r), e2 = _.equals(t3), _.lt(g2)) {
        if (D3 > 1) {
          _.setThis(t3), D3--;
          continue;
        }
        f2.setThis(t3.sub(g2)), _.setThis(g2);
      } else if (_.gt(d)) {
        if (D3 > 1) {
          _.setThis(t3), D3--;
          continue;
        }
        f2.setThis(t3.sub(d)), _.setThis(d);
      }
      break;
    }
    if (e2 || f2.absLessAbs(M2)) {
      t3.equals(_) || (P4 = x4.evaluate(_), P4.limitPrecisionThis(r + 2));
      break;
    }
    P4 = x4.evaluate(_), P4.limitPrecisionThis(r + 2), y2 = C3.evaluate(_), y2.limitPrecisionThis(r + 2);
    const s4 = a2.clone(), n5 = u.clone();
    P4.LZ() ? (m.setThis(P4), a2.setThis(_)) : (l2.setThis(P4), u.setThis(_)), T3 === E && (a2.equals(s4) && u.equals(n5) || A4 > 1 && !f2.absLessAbs(Y3.mul(p2))) ? w3++ : w3 = 0, T3 === v2 ? (S2++, A4 = 0) : (S2 = 0, A4++);
  }
  return N2 >= X2 && b("Root_finder iterations exceeded"), o.setThis(_), true;
}
function Un(t2, e, s3, n4, i) {
  const r = t2.evaluate(s3);
  if (r.isZero()) return true;
  const o = si.constructDouble(0.5 * n4), a2 = s3.clone();
  a2.subThis(o);
  const h2 = t2.evaluate(a2), u = s3.clone();
  u.addThis(o);
  const m = t2.evaluate(u);
  if (h2.LZ() && m.GZ() || h2.GZ() && m.LZ()) return true;
  if (r.GZ() ? h2.LEZ() || m.LEZ() : h2.GEZ() || m.GEZ()) return true;
  const l2 = h2.LEZ() && m.LEZ(), c = h2.GEZ() && m.GEZ();
  let g2 = false;
  return l2 ? r.gt(h2) && r.gt(m) && (g2 = true) : c && r.lt(h2) && r.lt(m) && (g2 = true), !!g2 && r.absThis().lt(si.constructDouble(1e-17));
}
function On(t2, e, n4, i, r, o, a2, h2) {
  n(n4 > 0), n(h2 >= t2.power());
  const u = a2, m = [];
  let l2 = [];
  const c = new In({ zeroCtor: t2.m_zeroCtor }), g2 = new In({ zeroCtor: t2.m_zeroCtor }), d = new In({ zeroCtor: t2.m_zeroCtor }), _ = si.constructDouble(n4), p2 = si.constructDouble(e.vmin), f2 = si.constructDouble(e.vmax), P4 = p2.sub(_), y2 = f2.add(_), x4 = Qn(t2), C3 = x4.clone();
  if (C3.negateThis(), P4.lt(C3)) P4.setThis(C3.sub(_));
  else if (P4.gt(x4)) return 0;
  if (y2.gt(x4)) y2.setThis(x4.add(_));
  else if (y2.lt(C3)) return 0;
  let v2 = t2, b2 = null;
  if (r) {
    const e2 = new In({ coef0: si.constructInt32(-1) });
    e2.addElement(ii), b2 = new In(), v2 = b2;
    const s3 = new In(), n5 = new In();
    for (t2.div(e2, s3, n5), b2.assignCopy(s3); v2.evaluate(ii).isZero(); ) v2.div(e2, s3, n5), b2.assignCopy(s3);
  }
  let S2 = false;
  if (v2.power() > 0 && v2.getElement(0).isZero()) for (S2 = true, b2 || (b2 = new In({ copy: v2 }), v2 = b2); v2.getElement(0).isZero(); ) b2.shiftRight(1);
  let E = i + 2 * v2.power() + 2, D3 = n4 / Math.pow(2, v2.power() + 2), w3 = E;
  if (ei.gt(P4) && ei.lt(y2)) {
    for (let s3 = 0, Y3 = v2.power(); s3 < Y3; s3++) if (v2.getElement(s3).isZero()) {
      m.push(ei.clone());
      break;
    }
  }
  for (let Y3 = v2.power() - 1; Y3 > 0; Y3--) {
    if (D3 *= 2, E -= 2, w3 -= 2, v2.power() - Y3 === 1) {
      g2.assignMove(v2.derivative(Y3));
      1 === jn(g2, u, h2) && (u[0].gt(P4) && u[0].lt(y2) && !u[0].isZero() && m.push(u[0].clone()), c.assignMove(g2), d.assignMove(v2.derivative(Y3 - 1)));
      continue;
    }
    if (v2.power() - Y3 === 2) {
      g2.assignMove(v2.derivative(Y3));
      const t3 = Zn(g2, E, u, h2);
      n(t3 >= 0 && t3 <= 2);
      for (let e2 = 0; e2 < t3; e2++) u[e2].gt(P4) && u[e2].lt(y2) && !u[e2].isZero() && m.push(u[e2].clone());
      if (m.length > 1 && m.sort((t4, e2) => t4.compare(e2)), m.length > 0) {
        let t4 = m[0].sub(_);
        t4.limitPrecisionThis(w3), l2.push($t(P4.clone(), t4));
        let e2 = 1 === m.length ? y2.clone() : m[1].sub(_);
        t4 = m[0].add(_), t4.limitPrecisionThis(w3), e2.limitPrecisionThis(w3), l2.push($t(t4, e2)), m.length > 1 && (e2 = 2 === m.length ? y2.clone() : m[2].sub(_), e2.limitPrecisionThis(w3), t4 = m[1].add(_), t4.limitPrecisionThis(w3), l2.push($t(t4, e2)), m.length > 2 && (t4 = m[2].add(_), t4.limitPrecisionThis(w3), l2.push($t(t4, y2.clone()))));
      } else l2.push($t(P4.clone(), y2.clone()));
      c.assignCopy(g2), d.assignMove(v2.derivative(Y3 - 1));
      continue;
    }
    {
      g2.assignMove(d), d.assignMove(v2.derivative(Y3 - 1));
      let t3 = [];
      for (let e2 = 0, s3 = l2.length; e2 < s3; ++e2) if (l2[e2].first.lte(l2[e2].second)) {
        const s4 = new si();
        if (Hn(g2, c, l2[e2].first, l2[e2].second, D3, E, s4)) {
          m.push(s4);
          let n5 = s4.sub(_);
          n5.limitPrecisionThis(w3), t3.push($t(l2[e2].first, n5)), n5 = s4.add(_), n5.limitPrecisionThis(w3), t3.push($t(n5, l2[e2].second));
        } else t3.push(l2[e2]);
      }
      l2 = t3, t3 = [], c.assignMove(g2);
    }
  }
  m.sort((t3, e2) => t3.compare(e2)), 0 === l2.length && (c.assignMove(v2.derivative(v2.power())), c.isZero() || l2.push($t(P4.clone(), y2.clone())));
  let A4 = 0, T3 = 0, I2 = 0;
  const M2 = new si();
  for (; ; ) {
    if (T3 < l2.length) {
      if (l2[T3].first.gt(l2[T3].second)) {
        T3++;
        continue;
      }
      let t3 = false;
      if (I2 < m.length && m[I2].lt(l2[T3].first) && (t3 = true), !t3) {
        Hn(v2, c, l2[T3].first, l2[T3].second, n4, i, M2) && (M2.lt(p2) ? u[A4++].setThis(p2) : M2.gt(f2) ? u[A4++].setThis(f2) : u[A4++].setThis(M2)), T3++;
        continue;
      }
    }
    if (!(I2 < m.length)) break;
    0 !== I2 && m[I2 - 1].equals(m[I2]) || Un(v2, c, m[I2], n4) && (M2.setThis(m[I2]), M2.lt(p2) ? M2.setThis(p2) : M2.gt(f2) && M2.setThis(f2), 0 !== A4 && u[A4].equals(M2) || u[A4++].setThis(M2)), I2++;
  }
  return S2 && ei.gt(P4) && ei.lt(y2) && (u[A4++].setThis(ei), Zt(u, 0, A4, (t3, e2) => t3.compare(e2))), r && ii.gt(P4) && ii.lt(y2) && (u[A4++].setThis(ii), Zt(u, 0, A4, (t3, e2) => t3.compare(e2))), A4;
}
function Qn(t2) {
  const e = t2.getElement(t2.power());
  e.limitPrecisionThis(53), e.absThis();
  const s3 = ei.clone();
  for (let n4 = 0, i = t2.power(); n4 < i; n4++) {
    const e2 = t2.getElement(n4);
    e2.limitPrecisionThis(53), e2.gt(s3) && s3.setThis(e2);
  }
  return s3.divThis(e), s3.addThis(ii), s3.mulThis(si.constructDouble(1 + 100 * Number.EPSILON)), s3;
}
function Jn(t2, e, s3, n4) {
  let i = n4;
  if (!t2.isEmpty()) {
    i = 0;
    for (let e2 = 0; e2 < n4; ++e2) t2.containsCoordinate(s3[e2].value()) && (i !== e2 && s3[i].setThis(s3[e2]), i++);
  }
  i > 1 && (s3[0].gt(s3[1]) && (s3[1] = Pt(s3[0], s3[0] = s3[1])), i > 2 && (s3[0].gt(s3[2]) && (s3[2] = Pt(s3[0], s3[0] = s3[2])), s3[1].gt(s3[2]) && (s3[2] = Pt(s3[1], s3[1] = s3[2]))));
  for (let r = 0; r < i; ++r) s3[r].limitPrecisionThis(e);
  return i;
}
function Kn(t2, e, s3, n4, i, r) {
  return ei2(t2, e, s3, r, n4, i);
}
function $n(t2, e, s3, n4, i, r) {
  let o = i;
  if (n4) return r[0] = 1, o = 0.5 * (e - t2) * (s3(t2) + s3(e)), o;
  const a2 = r[0], h2 = (e - t2) / a2, u = t2, m = new n2(0);
  for (let l2 = 1; l2 <= r[0]; ++l2) {
    const t3 = (l2 - 0.5) * h2;
    m.add(s3(u + t3));
  }
  return o = 0.5 * (o + (e - t2) * m.getResult() / a2), r[0] *= 2, o;
}
function ti(t2, e, s3, n4, i, r, o) {
  let a2 = 0, h2 = Math.abs(i - s3[t2]);
  const u = Yt(e, Number.NaN), m = Yt(e, Number.NaN);
  for (let d = 0; d < e; ++d) {
    const e2 = Math.abs(i - s3[t2 + d]);
    e2 < h2 && (a2 = d, h2 = e2), u[d] = n4[t2 + d], m[d] = n4[t2 + d];
  }
  let l2 = 0, c = 0, g2 = 0;
  r[0] = n4[t2 + a2], a2--;
  for (let d = 1; d < e; d++) {
    for (let n5 = 0; n5 < e - d; n5++) {
      if (c = s3[t2 + n5] - i, g2 = s3[t2 + n5 + d] - i, l2 = c - g2, 0 === l2) return false;
      const e2 = (u[n5 + 1] - m[n5]) / l2;
      u[n5] = c * e2, m[n5] = g2 * e2;
    }
    if (2 * (a2 + 1) < e - d) {
      const t3 = a2 + 1;
      o[0] = u[t3];
    } else {
      const t3 = a2;
      o[0] = m[t3], a2--;
    }
    r[0] += o[0];
  }
  return true;
}
function ei2(t2, s3, n4, i, r, o) {
  if (n4 < s3 && P("xTo < xFrom"), n4 === s3) return 0;
  const a2 = [0];
  let u = Number.MAX_VALUE;
  const m = [Number.MAX_VALUE];
  let l2 = 0;
  const c = 32, g2 = Yt(c + 1, Number.NaN), d = Yt(c + 1, Number.NaN), _ = [0];
  g2[0] = 1;
  let p2 = 0, f2 = 0;
  for (let e = 0; e < c; e++) {
    if (l2 = $n(s3, n4, i, 0 === e, l2, _), d[e] = l2, e + 1 >= t2) {
      ti(e + 1 - t2, t2, g2, d, 0, a2, m) || b("polynomial_interpolation");
      const s4 = r * Math.abs(a2[0]) + o, n5 = Math.abs(u - a2[0]);
      if (n5 <= s4 && Math.abs(m[0]) <= s4) {
        if (p2++, p2 > 1 && (n5 <= 0.1 * f2 || 0 === f2 || p2 > 2)) return a2[0];
      } else p2 = 0;
      f2 = n5, u = a2[0];
    }
    d[e + 1] = d[e], g2[e + 1] = 0.25 * g2[e];
  }
  return a2[0];
}
var si2 = class {
  constructor() {
    this.area = Number.NaN, this.centroid_x = Number.NaN, this.centroid_y = 0, this.specialPoints = [], this.specialPointsLength = [];
  }
  specialPointsCount() {
    return this.specialPoints.length;
  }
};
var ni2 = class {
  constructor(t2, e) {
    this.b = t2, this.len = e;
  }
  getMaxDerivative() {
    return 1;
  }
  getValue(t2, e) {
    return 0 === t2 ? this.len - ui(this.b, e, false) : 0;
  }
  getError(t2) {
    return n(0), 0;
  }
};
function ii2(t2, e, s3, n4, i) {
  let r = true;
  const o = Ot(mi, 3);
  t2.queryControlPoints(o);
  let a2 = r ? 0 : 1, h2 = o[1][a2] - o[0][a2], u = o[2][a2] - o[0][a2];
  const m = Kn(5, e, s3, n4, i, (t3) => {
    let e2;
    if (t3 <= 0.5) {
      const s4 = V(0, h2, t3), n5 = V(h2, u, t3);
      e2 = V(s4, n5, t3);
    } else {
      const s4 = U(0, h2, t3), n5 = U(h2, u, t3);
      e2 = U(s4, n5, t3);
    }
    return e2 * di(o, 1, t3).length();
  });
  r = false, a2 = r ? 0 : 1, h2 = o[1][a2] - o[0][a2], u = o[2][a2] - o[0][a2];
  const l2 = Kn(5, e, s3, n4, i, (t3) => {
    let e2;
    if (t3 <= 0.5) {
      const s4 = V(0, h2, t3), n5 = V(h2, u, t3);
      e2 = V(s4, n5, t3);
    } else {
      const s4 = U(0, h2, t3), n5 = U(h2, u, t3);
      e2 = U(s4, n5, t3);
    }
    return e2 * di(o, 1, t3).length();
  });
  return new mi(m, l2);
}
function ri(t2) {
  t2.m_cachedValues = null;
}
function oi(t2, e) {
  e.m_cachedValues = Pt(t2.m_cachedValues, t2.m_cachedValues = e.m_cachedValues);
}
function ai(t2) {
  if (t2.m_cachedValues) return t2.m_cachedValues;
  const e = new si2();
  return hi(t2, e.specialPoints), Ci(t2, e), e;
}
function hi(t2, e) {
  const s3 = Ot(mi, 3);
  t2.queryControlPoints(s3);
  const n4 = Ot(p, 8);
  n4[0].set(0);
  let i = 1;
  {
    const t3 = Ot(p, 3);
    Gi(s3, t3, false);
    const e2 = Ot(p, 2), r = new x2(0, 1);
    let o = gn(t3[2].mul(2), t3[1], r, e2[0]);
    o < 0 && (o = 0);
    for (let s4 = 0; s4 < o; s4++) Vs(e2[s4].value(), 0, 1) || (n4[i] = e2[s4], i++);
  }
  {
    const t3 = Ot(p, 3);
    Wi(s3, t3, false);
    const e2 = Ot(p, 2), r = new x2(0, 1);
    let o = gn(t3[2].mul(2), t3[1], r, e2[0]);
    o < 0 && (o = 0);
    for (let s4 = 0; s4 < o; s4++) Vs(e2[s4].value(), 0, 1) || (n4[i] = e2[s4], i++);
  }
  if (n4[i].set(1), i++, i > 2) {
    Zt(n4, 0, i, (t4, e3) => t4.value() - e3.value());
    let t3 = 0, e2 = n4[0].value(), s4 = 1;
    for (let r = 1; r < i; r++) n4[r].eq(n4[r - 1]) ? (e2 += n4[r].value(), s4++) : (s4 > 1 && (e2 /= s4, n4[t3].set(e2)), t3++, n4[t3] = n4[r], e2 = n4[r].value(), s4 = 1);
    t3++, i = t3;
  }
  n4[0].set(0), n4[i - 1].set(1), e.length = i;
  for (let r = 0; r < i; r++) e[r] = n4[r].value();
}
function ui(t2, e, s3) {
  const n4 = Ot(mi, 3);
  return t2.queryControlPoints(n4), mi2(n4, e, s3);
}
function mi2(t2, e, s3) {
  if (s3) {
    if (e < 0) return e;
    if (e > 1) return e - 1 + mi2(t2, 1, false);
  }
  if (1 === e) return li(t2);
  const n4 = Ot(mi, 3);
  return Mi(t2, e, n4, null), li(n4);
}
function li(t2) {
  if (t2[0].equals(t2[1])) return mi.distance(t2[2], t2[0]);
  if (t2[1].equals(t2[2])) return mi.distance(t2[0], t2[2]);
  const e = mi.distance(t2[0], t2[1]) + mi.distance(t2[2], t2[1]), s3 = mi.distance(t2[0], t2[2]);
  if (e - s3 <= e * Number.EPSILON) return s3;
  const n4 = 1, i = Ot(mi, 3);
  Bi(t2, i, true);
  const r = 4 * (H(i[2].x) + H(i[2].y)), o = 2 * (i[2].x * i[1].x + i[2].y * i[1].y), a2 = H(i[1].x) + H(i[1].y);
  if (1e-14 * (Math.abs(o) + Math.abs(a2)) >= Math.abs(r)) {
    if (1e-14 * Math.abs(a2) >= Math.abs(o)) {
      return Math.sqrt(a2) * n4;
    }
    return 2 / (3 * o) * (Math.pow(o * n4 + a2, 1.5) - Math.pow(a2, 1.5));
  }
  const h2 = o / r, u = a2 / r, m = u - h2 * h2, l2 = n4 + h2;
  if (0 === m) {
    if (h2 >= 0 && l2 >= 0 || h2 <= 0 && l2 <= 0) {
      return Math.abs(0.5 * Math.sqrt(r) * (l2 * l2 - h2 * h2));
    }
    return 0.5 * Math.sqrt(r) * (l2 * l2 + h2 * h2);
  }
  const c = Math.sqrt(m + l2 * l2), g2 = Math.sqrt(u);
  return 0.5 * Math.sqrt(r) * (l2 * c - h2 * g2 + m * Math.log(Math.abs((l2 + c) / (h2 + g2))));
}
function ci(t2, e) {
  const s3 = Us(e, 0, 1);
  let n4 = di(t2, 1, s3);
  return n4.isZero() && (n4 = di(t2, 2, s3)), n4;
}
function gi(t2, e, s3) {
  const n4 = Ot(mi, 3);
  return t2.queryControlPoints(n4), di(n4, e, s3);
}
function di(t2, e, s3) {
  if (1 === e) {
    const e2 = t2[1].sub(t2[0]).mul(1 - s3).add(t2[2].sub(t2[1]).mul(s3));
    return e2.mulThis(2), e2;
  }
  return 2 === e ? t2[2].sub(t2[1]).sub(t2[1].sub(t2[0]).mul(2)) : mi.construct(0, 0);
}
function _i(t2, e, s3) {
  {
    const e2 = Ne.constructPoint2D(t2[1]).subE(Ne.constructPoint2D(t2[0])), n4 = new p(1).subE(s3), i = Ne.constructPoint2D(t2[2]).subE(Ne.constructPoint2D(t2[1])), r = e2.mulE(n4).addE(i.mulE(s3));
    return r.mulThisE(new p(2)), r;
  }
}
function pi(t2, e, s3) {
  const n4 = ui(t2, 1, false);
  if (e <= 0) return e;
  if (e >= n4) return e - n4 + 1;
  const i = [0];
  return 1 !== en(new ni2(t2, e), x2.unit(), 1, i) && b(""), i[0];
}
function fi(t2) {
  const e = Ot(mi, 3);
  return t2.queryControlPoints(e), Pi(e);
}
function Pi(t2) {
  return -t2[1].sub(t2[0]).crossProduct(t2[2].sub(t2[0])) / 3;
}
function yi(t2) {
  const e = mi.distance(t2.getStartXY(), t2.getEndXY()), s3 = t2.calculateUpperLength2D();
  return s3 - e <= 8 * Number.EPSILON * s3;
}
function xi(t2) {
  return t2.m_cachedValues;
}
function Ci(t2, e) {
  t2.m_cachedValues = e;
}
function vi(t2, e, s3, n4, i) {
  D(x2.unit().contains(s3), "QuadraticBezierHelper::getClosestCoordinateSegment");
  const r = Ot(mi, 3);
  t2.queryControlPoints(r);
  let o = Number.MAX_VALUE;
  const a2 = [0], h2 = bi(r, e, a2);
  if (s3.containsCoordinate(a2[0])) o = mi.distance(e, h2);
  else {
    a2[0] = s3.vmin, Zi(r, a2[0], h2), o = mi.distance(h2, e);
    const t3 = new mi();
    Zi(r, s3.vmax, t3);
    const n5 = mi.distance(t3, e);
    o > n5 && (h2.setCoordsPoint2D(t3), a2[0] = s3.vmax, o = n5);
  }
  if (!n4) return a2[0];
  if (s3.vmin <= 0) {
    const n5 = new mi();
    t2.queryCoord2DExtended(-1, n5, true);
    const i2 = new mi();
    t2.queryCoord2D(s3.vmin, i2);
    const r2 = new fm({ start: n5, end: i2 }), u = r2.getClosestCoordinate(e, true);
    if (u < 1) {
      const t3 = r2.getCoord2D(u), s4 = mi.distance(t3, e);
      s4 < o && (o = s4, a2[0] = u - 1, h2.assign(t3));
    }
  }
  if (s3.vmin >= 1) {
    const n5 = new mi();
    t2.queryCoord2DExtended(2, n5, true);
    const i2 = new mi();
    t2.queryCoord2D(s3.vmax, i2);
    const r2 = new fm({ start: i2, end: n5 }), u = r2.getClosestCoordinate(e, true);
    if (u > 0) {
      const t3 = r2.getCoord2D(u), s4 = mi.distance(t3, e);
      s4 < o && (o = s4, a2[0] = 1 + u, h2.assign(t3));
    }
  }
  return a2[0];
}
function bi(t2, e, s3) {
  const n4 = t2[2].sub(t2[1]).sub(t2[1].sub(t2[0])), i = t2[1].sub(t2[0]), r = t2[0].sub(e), o = r.dotProduct(i), a2 = r.dotProduct(n4) + 2 * i.dotProduct(i), h2 = 3 * i.dotProduct(n4), u = n4.dotProduct(n4), m = Yt(3, Number.NaN), l2 = rn(u, h2, a2, o, x2.unit(), false, m), c = t2[0].clone();
  let g2 = 0, d = mi.sqrDistance(t2[0], e), _ = mi.sqrDistance(t2[2], e);
  _ < d && (g2 = 1, c.assign(t2[2]), d = _);
  for (let p2 = 0; p2 < l2; p2++) {
    const s4 = new mi();
    Zi(t2, m[p2], s4), _ = mi.sqrDistance(s4, e), _ < d && (d = _, c.assign(s4), g2 = m[p2]);
  }
  return s3 && (s3[0] = g2), c;
}
function Si(t2, e, s3, n4, i, r) {
  const o = new we();
  if (Ei(t2, x2.unit(), o), o.inflate(i), !o.isIntersectingPoint2D(e)) return 0;
  const a2 = new mi(), h2 = vi(t2, e, x2.unit(), false);
  t2.queryCoord2D(h2, a2);
  return mi.distance(a2, e) <= i ? (n4 && (n4[0] = h2), 1) : 0;
}
function Ei(t2, e, s3) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4), Di(n4, e, s3);
}
function Di(t2, e, s3) {
  if (e.equalsRange(0, 1)) return void s3.setFromPoints(t2, 3);
  const n4 = Ot(mi, 3);
  Yi(t2, e.vmin, e.vmax, n4), s3.setFromPoints(n4, 3);
}
function wi(t2, e, s3) {
  s3.setEmpty();
  const n4 = [];
  n4.push(new x2(0, 1));
  const i = 0.5 * Math.max(e.width(), e.height());
  for (; n4.length; ) {
    const r = n4.at(-1);
    n4.pop();
    const o = new we();
    if (Di(t2, r, o), o.isIntersectingW(e)) {
      const t3 = Math.max(o.width(), o.height());
      if (e.containsW(o) || t3 <= i || r.width() < 1e-12) s3.merge(r);
      else {
        const t4 = r.getCenter();
        n4.push(x2.construct(r.vmin, t4)), n4.push(x2.construct(t4, r.vmax));
      }
    }
  }
}
function Ai(t2) {
  const e = Ot(mi, 3);
  t2.queryControlPoints(e);
  const s3 = Ti(e);
  return s3 && (t2.m_cp.setCoordsPoint2D(e[1]), t2.afterCompletedModification()), s3;
}
function Ti(t2) {
  let e = false;
  for (let s3 = 0; s3 < 2; s3++) {
    const n4 = fs(t2[0][s3], t2[2][s3]);
    n4 > 0 ? (fs(t2[0][s3], t2[1][s3]) < 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[2][s3]) < 0 && (t2[1][s3] = t2[2][s3], e = true)) : n4 < 0 ? (fs(t2[0][s3], t2[1][s3]) > 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[2][s3]) > 0 && (t2[1][s3] = t2[2][s3], e = true)) : t2[1][s3] !== t2[0][s3] && (t2[1][s3] = t2[0][s3], e = true);
  }
  return e;
}
function Ii(t2, s3, n4) {
  void 0 === n4 && (n4 = s3, s3 = 0);
  const i = new mi();
  if (s3 < 0 || n4 > 1) return i.setNAN(), i;
  if (s3 > n4 && P("calculate_sub_weighted_centroid"), s3 === n4 || t2.isDegenerate(0)) return i.setCoords(0, 0), i;
  const r = ai(t2), o = rs(t2), a2 = Math.min(o / t2.calculateUpperLength2D(), 1e-7);
  let h2 = s3, u = 0;
  for (let e = 1, m = r.specialPointsCount(); e < m; e++) if (s3 < r.specialPoints[e]) {
    u = e - 1;
    break;
  }
  i.setCoords(0, 0);
  for (let e = u + 1, m = r.specialPointsCount(); e < m; e++) {
    const s4 = Math.min(r.specialPoints[e], n4), u2 = ii2(t2, h2, s4, a2, o);
    if (i.addThis(u2), h2 = s4, n4 <= r.specialPoints[e]) break;
  }
  return i.add(t2.getStartXY().mul(t2.calculateLength2D()));
}
function Mi(t2, e, s3, n4) {
  new mi().setCoordsPoint2D(t2[0]);
  new mi().setCoordsPoint2D(t2[1]);
  new mi().setCoordsPoint2D(t2[2]);
  const i = new mi(), r = new mi(), o = new mi();
  if (Y(t2[0], t2[1], e, i), Y(t2[1], t2[2], e, r), Y(i, r, e, o), s3 && (s3[0].assign(t2[0]), s3[1].assign(i), s3[2].assign(o)), n4) {
    const e2 = t2[2];
    n4[0].assign(o), n4[1].assign(r), n4[2].assign(e2);
  }
}
function Yi(t2, e, s3, n4) {
  if (e === s3) {
    const s4 = new mi();
    return Zi(t2, e, s4), n4[0] = s4, n4[1] = s4, void (n4[2] = s4);
  }
  const i = Ot(mi, 3);
  Mi(t2, s3, i, null), Mi(i, e / s3, null, i), Zi(t2, e, i[0]), Zi(t2, s3, i[2]), n4[0].setCoordsPoint2D(i[0]), n4[1].setCoordsPoint2D(i[1]), n4[2].setCoordsPoint2D(i[2]);
}
function Ni(t2, e, s3, n4) {
  if (e.isEqual(t2.m_XStart, t2.m_YStart) && s3.isEqual(t2.m_XEnd, t2.m_YEnd)) return;
  const i = !!n4 && t2.isMonotoneQuickAndDirty(), r = new x3(), o = Ot(mi, 3);
  o[0].setCoords(t2.m_XStart, t2.m_YStart), o[2].setCoords(t2.m_XEnd, t2.m_YEnd);
  const a2 = new mi();
  a2.setSub(o[2], o[0]), a2.leftPerpendicularThis(), o[1].setAdd(o[0], a2);
  const h2 = Ot(mi, 3);
  h2[0].setCoordsPoint2D(e), h2[2].setCoordsPoint2D(s3), a2.setSub(h2[2], h2[0]), a2.leftPerpendicularThis(), h2[1].setAdd(h2[0], a2), r.setFromTwoTriangles(o, h2) ? r.transformInPlace(t2.m_cp) : Y(e, s3, 0.5, t2.m_cp), t2.changeEndPoints2D(e, s3), i && Ai(t2);
}
function Xi(t2) {
  return t2.getStartXY().norm(1) + t2.getEndXY().norm(1) + t2.m_cp.norm(1);
}
function qi(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Li(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function Fi(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Ri(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function Vi(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== zi(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function Li(t2, e, n4, i, r, o, a2, h2, u, m) {
  if (null != r && (r.length = 0), null !== o && (o.length = 0), null !== i && (i.length = 0), n4.isDegenerate(0)) {
    const t3 = [0, 0], s3 = e.intersectPoint(n4.getStartXY(), t3, a2);
    if (s3 > 0) {
      if (null !== r) for (let e2 = 0; e2 < s3; e2++) r.push(t3[e2]);
      if (null !== o) for (let t4 = 0; t4 < s3; t4++) o.push(0);
      if (null !== i) for (let n5 = 0; n5 < s3; n5++) {
        const s4 = new mi();
        e.queryCoord2D(t3[n5], s4), i.push(s4);
      }
    }
    return s3;
  }
  const l2 = os(e, n4);
  if (a2 = Math.max(a2, l2), e.isDegenerateToLineHelper(l2)) {
    const t3 = new fm({ start: e.getStartXY(), end: e.getEndXY() }), s3 = ws(t3, n4, i, r, o, a2, h2, m);
    if (r) for (let n5 = 0; n5 < s3; ++n5) {
      const s4 = t3.getCoord2D(r[n5]);
      r[n5] = e.getClosestCoordinate(s4, false);
    }
    return s3;
  }
  if (as(e, n4, a2)) return 0;
  const c = qe.constructPoint2D(n4.getStartXY()), g2 = qe.constructPoint2D(n4.getEndXY()).sub(c), d = g2.clone();
  d.leftPerpendicularThis();
  const _ = qe.constructPoint2D(e.m_cp).sub(qe.constructPoint2D(e.getStartXY())), p2 = qe.constructPoint2D(e.getEndXY()).sub(qe.constructPoint2D(e.m_cp));
  let f2 = _.dotProduct(d).toDouble(), P4 = p2.sub(_).dotProduct(d).toDouble();
  const y2 = Yt(12, Number.NaN), x4 = Yt(12, Number.NaN);
  let C3 = sn(P4, f2, x2.unit(), y2);
  C3 < 0 && (y2[0] = 0, y2[1] = 1, C3 = 2);
  let v2, b2 = 0;
  for (let s3 = 0, w3 = b2; s3 < C3; ++s3) {
    const t3 = e.getCoord2D(y2[s3 + w3]);
    x4[b2] = n4.getClosestCoordinate(t3, false), mi.distance(t3, n4.getCoord2D(x4[b2])) <= a2 && (y2[b2] = y2[s3 + w3], b2++);
  }
  const S2 = Ot(mi, 3);
  e.queryControlPoints(S2);
  {
    const t3 = Ot(qe, 3);
    if (ji(S2, t3, false), t3[0] = t3[0].sub(c), g2.x.abs().gte(g2.y.abs())) {
      const e2 = g2.y.div(g2.x);
      P4 = t3[2].y.sub(t3[2].x.mul(e2)).toDouble(), f2 = t3[1].y.sub(t3[1].x.mul(e2)).toDouble(), v2 = t3[0].y.sub(t3[0].x.mul(e2)).toDouble();
    } else {
      const e2 = g2.x.div(g2.y);
      P4 = t3[2].x.sub(t3[2].y.mul(e2)).toDouble(), f2 = t3[1].x.sub(t3[1].y.mul(e2)).toDouble(), v2 = t3[0].x.sub(t3[0].y.mul(e2)).toDouble();
    }
  }
  const E = e.getEndXY().equals(n4.getStartXY()) || e.getEndXY().equals(n4.getEndXY()), D3 = [0, 0];
  C3 = nn(P4, f2, v2, x2.unit(), E, D3);
  for (let s3 = 0, w3 = b2; s3 < C3; ++s3) {
    y2[s3 + w3] = D3[s3];
    const t3 = e.getCoord2D(y2[s3 + w3]);
    x4[b2] = n4.getClosestCoordinate(t3, false), mi.distance(t3, n4.getCoord2D(x4[b2])) <= a2 && (y2[b2] = y2[s3 + w3], b2++);
  }
  n(b2 < y2.length + 4), C3 = e.intersectPoint(n4.getStartXY(), D3, a2);
  for (let s3 = 0; s3 < C3; s3++) y2[b2] = D3[s3], x4[b2++] = 0;
  C3 = e.intersectPoint(n4.getEndXY(), D3, a2);
  for (let s3 = 0; s3 < C3; s3++) y2[b2] = D3[s3], x4[b2++] = 1;
  C3 = n4.intersectPoint(e.getStartXY(), D3, a2);
  for (let s3 = 0; s3 < C3; s3++) x4[b2] = D3[s3], y2[b2++] = 0;
  C3 = n4.intersectPoint(e.getEndXY(), D3, a2);
  for (let s3 = 0; s3 < C3; s3++) x4[b2] = D3[s3], y2[b2++] = 0;
  return 0 === b2 ? 0 : gm(t2, e, n4, y2, x4, b2, i, r, o, a2, h2, u, m);
}
function Ri(t2, e, s3, n4, i, r, o, a2, h2, u) {
  if (Eu(s3)) {
    return Li(t2, e, new fm({ start: s3.getStartXY(), end: s3.getEndXY() }), n4, i, r, o, a2, h2, u);
  }
  const m = os(e, s3);
  if (as(e, s3, o = Math.max(o, m))) return 0;
  const l2 = [], c = [], g2 = Ot(mi, 3);
  {
    e.queryControlPoints(g2);
    const t3 = Ot(mi, 3), n5 = new x3();
    s3.canonicToWorldTransformation(n5);
    const i2 = new x3();
    i2.setInvert(n5), i2.transformPoints2D(g2, 3, t3);
    const r2 = Ot(qe, 3);
    ji(t3, r2);
    const h3 = [r2[0].x, r2[1].x, r2[2].x], u2 = [r2[0].y, r2[1].y, r2[2].y], m2 = Ot(si, 3);
    m2[0].setDouble(s3.getSemiMinorAxis()), m2[0].sqrThis(), m2[1].setDouble(s3.getSemiMajorAxis()), m2[1].sqrThis(), m2[2] = m2[0], m2[2].mul(m2[1]), m2[2].negate();
    const d2 = Fn(h3, 2, u2, 2, null, 0, m2, true, x2.unit(), x2.unit(), l2, a2);
    if (d2 > 0) {
      let t4 = 0;
      for (let n6 = 0; n6 < d2; n6++) {
        const i3 = new mi();
        e.queryCoord2D(l2[n6], i3);
        const r3 = s3.getClosestCoordinate(i3, false), a3 = new mi();
        s3.queryCoord2D(r3, a3), mi.distance(i3, a3) <= o && (l2[t4] = l2[n6], c.push(r3), t4++);
      }
      l2.length = t4;
    }
  }
  const d = [0, 1];
  for (let _ = 0; _ < 2; _++) {
    const t3 = 0 === _ ? s3.getStartXY() : s3.getEndXY(), e2 = [0];
    bi(g2, t3, e2);
    const n5 = new mi();
    Zi(g2, e2[0], n5), mi.distance(t3, n5) <= o && (l2.push(e2[0]), c.push(d[_]));
  }
  for (let _ = 0; _ < 2; _++) {
    const t3 = [0, 2];
    {
      const e2 = s3.getClosestCoordinate(g2[t3[_]], false), n5 = new mi();
      s3.queryCoord2D(e2, n5), mi.distance(g2[t3[_]], n5) <= o && (l2.push(d[_]), c.push(e2));
    }
  }
  return gm(t2, e, s3, l2, c, l2.length, n4, i, r, o, a2, h2, u);
}
function zi(t2, e, s3, n4, i, r, o, a2, h2, u) {
  const m = Ot(mi, 3);
  e.queryControlPoints(m);
  const l2 = Ot(mi, 3);
  if (s3.queryControlPoints(l2), hs(m, l2, 3) < 0) return zi(t2, s3, e, n4, r, i, o, a2, h2, !u);
  const c = os(e, s3);
  if (as(e, s3, o = Math.max(o, c))) return 0;
  if (sr(e, s3, n4, i, r, o, a2, h2, u)) return 2;
  const g2 = new x2(0, 1), d = new x2(0, 1);
  {
    const t3 = new we();
    Di(m, x2.unit(), t3);
    const e2 = new we();
    Di(l2, x2.unit(), e2);
    const s4 = Math.max(t3.maxDim(), e2.maxDim());
    if (t3.inflate(3 * o), e2.inflate(3 * o), !t3.intersectW(e2)) return 0;
    if (t3.maxDim() < 0.1 * s4) {
      if (wi(m, t3, g2), wi(l2, t3, d), g2.isEmpty() || d.isEmpty()) return 0;
      Yi(m, g2.vmin, g2.vmax, m), Yi(l2, d.vmin, d.vmax, l2);
    }
  }
  const _ = _m(m, 2, l2, 2, o);
  if (0 === _) return 0;
  const p2 = [], f2 = [];
  if (-1 === _) {
    const t3 = Ot(qe, 3);
    ji(m, t3);
    const e2 = [t3[0].x, t3[1].x, t3[2].x], s4 = [t3[0].y, t3[1].y, t3[2].y], n5 = Ot(qe, 3);
    ji(l2, n5);
    const i2 = Nn(e2, 2, s4, 2, null, 0, [n5[0].x, n5[1].x, n5[2].x], 2, [n5[0].y, n5[1].y, n5[2].y], 2, null, 0, true, x2.unit(), x2.unit(), p2, f2, u, a2, u);
    if (i2 > 0) {
      let t4 = 0;
      for (let e3 = 0; e3 < i2; e3++) {
        const s5 = new mi(), n6 = new mi();
        Zi(l2, f2[e3], n6), Zi(m, p2[e3], s5), mi.distance(s5, n6) <= o && (p2[t4] = p2[e3], f2[t4] = f2[e3], t4++);
      }
      p2.length = t4, f2.length = t4;
    }
  }
  for (let P4 = 0; P4 < 2; P4++) {
    const t3 = 0 === P4 ? m : l2, e2 = 0 === P4 ? l2 : m;
    for (let s4 = 0; s4 < 2; s4++) {
      const n5 = 0 === s4 ? 0 : 2, i2 = [0];
      bi(e2, t3[n5], i2);
      const r2 = new mi();
      Zi(e2, i2[0], r2), mi.distance(t3[n5], r2) <= o && (0 === P4 ? (p2.push(0 === n5 ? 0 : 1), f2.push(i2[0])) : (f2.push(0 === n5 ? 0 : 1), p2.push(i2[0])));
    }
  }
  if (0 === p2.length) return 0;
  if (!g2.equalsRange(0, 1)) for (let P4 = 0; P4 < p2.length; ++P4) p2[P4] = An.recalculateParentT(g2.vmin, g2.vmax, p2[P4]);
  if (!d.equalsRange(0, 1)) for (let P4 = 0; P4 < f2.length; ++P4) f2[P4] = An.recalculateParentT(d.vmin, d.vmax, f2[P4]);
  return gm(t2, e, s3, p2, f2, p2.length, n4, i, r, o, a2, h2, u);
}
function Bi(t2, e, s3 = false) {
  const n4 = t2[1].sub(t2[0]);
  e[1].assign(n4.mul(2)), e[2].assign(t2[2].sub(t2[1]).sub(n4)), s3 ? e[0].setCoords(0, 0) : e[0].assign(t2[0]);
}
function ki(t2, e, s3 = false) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4), Bi(n4, e, s3);
}
function Gi(t2, e, s3 = false) {
  const n4 = 0, i = new p(t2[1][n4]).subE(new p(t2[0][n4]));
  e[1] = i.mul(2), e[2] = new p(t2[2][n4]).subE(new p(t2[1][n4])).subE(i), s3 ? e[0].set(0) : e[0].set(t2[0][n4]);
}
function Wi(t2, e, s3 = false) {
  const n4 = 1, i = new p(t2[1][n4]).subE(new p(t2[0][n4]));
  e[1] = i.mul(2), e[2] = new p(t2[2][n4]).subE(new p(t2[1][n4])).subE(i), s3 ? e[0].set(0) : e[0].set(t2[0][n4]);
}
function ji(t2, e, s3 = false) {
  const n4 = qe.constructPoint2D(t2[1]), i = n4.sub(qe.constructPoint2D(t2[0]));
  e[1] = i.mul(si.constructInt32(2)), e[2] = qe.constructPoint2D(t2[2]).sub(n4).sub(i), e[0] = s3 ? new qe(ei, ei) : qe.constructPoint2D(t2[0]);
}
function Zi(t2, e, s3, n4) {
  if (n4) {
    if (e < 0) {
      return void ps(new fm({ start: t2[0], end: t2[0].add(ci(t2, 0).getUnitVector()) }), e, s3);
    }
    if (e > 1) {
      return void ps(new fm({ start: t2[2], end: t2[2].add(ci(t2, 1).getUnitVector()) }), e - 1, s3);
    }
  }
  if (e <= 0.5) {
    const n5 = t2[1].clone(), i = new mi();
    k2(2, t2[0], n5, e, i);
    const r = new mi();
    k2(2, n5, t2[2], e, r);
    const o = new mi();
    k2(2, i, r, e, o), s3.assign(o);
  } else {
    const n5 = t2[1].clone(), i = new mi();
    F(2, t2[0], n5, e, i);
    const r = new mi();
    F(2, n5, t2[2], e, r);
    const o = new mi();
    F(2, i, r, e, o), s3.assign(o);
  }
}
function Hi(t2, e, s3) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4), Ui(n4, e, s3);
}
function Ui(t2, e, s3) {
  if (e.value() <= 0.5) {
    const n4 = Ne.constructPoint2D(t2[1]), i = new Ne();
    O(2, Ne.constructPoint2D(t2[0]), n4, e, i);
    const r = new Ne();
    O(2, n4, Ne.constructPoint2D(t2[2]), e, r);
    const o = new Ne();
    O(2, i, r, e, o), s3.setE(o);
  } else {
    const n4 = Ne.constructPoint2D(t2[1]), i = new Ne();
    G(2, Ne.constructPoint2D(t2[0]), n4, e, i);
    const r = new Ne();
    G(2, n4, Ne.constructPoint2D(t2[2]), e, r);
    const o = new Ne();
    G(2, i, r, e, o), s3.setE(o);
  }
}
function Oi(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), Qi(n4, e, s3);
}
function Qi(t2, e, s3) {
  e.value() < 0 && e.set(0, e.eps()), e.value() > 1 && e.set(1, e.eps()), s3.setE(_i(t2, 1, e));
}
function $i(t2, e) {
  e[0].assign(t2[0]), e[3].assign(t2[2]), Y(t2[0], t2[1], 2 / 3, e[1]), Y(t2[1], t2[2], 1 / 3, e[2]);
}
function tr(t2, e) {
  const s3 = Ot(mi, 3);
  t2.queryControlPoints(s3);
  const n4 = mi.sqrDistance(s3[1], s3[0]), i = mi.sqrDistance(s3[1], s3[2]);
  let r = s3[0].clone(), o = n4;
  n4 > i && (r = s3[2].clone(), o = i);
  let a2 = false;
  return o <= e && 0 !== o && (a2 = true, t2.setControlPoint1(r)), a2;
}
function er(t2, e) {
  if (!e) return false;
  const s3 = Ot(mi, 3);
  t2.queryControlPoints(s3);
  const n4 = mi.sqrDistance(s3[1], s3[0]), i = mi.sqrDistance(s3[1], s3[2]);
  s3[0].clone();
  let r = n4;
  return n4 > i && (s3[2].clone(), r = i), r <= e && 0 !== r;
}
function sr(t2, e, s3, n4, i, r, o, a2, h2) {
  const u = Ot(mi, 3);
  t2.queryControlPoints(u);
  const m = Ot(mi, 3);
  if (e.queryControlPoints(m), u[0].equals(m[0])) {
    if (u[1].equals(m[1]) && u[2].equals(m[2])) return s3 && (s3.length = 0, s3.push(u[0]), s3.push(u[2])), n4 && (n4.length = 0, n4.push(0), n4.push(1)), i && (i.length = 0, i.push(0), i.push(1)), true;
    if (!u[0].equals(m[2])) return false;
  }
  return !!(u[0].equals(m[2]) && u[1].equals(m[1]) && u[2].equals(m[0])) && (n4 && (n4.length = 0, n4.push(0), n4.push(1), h2 && (n4[1] = Pt(n4[0], n4[0] = n4[1]))), i && (i.length = 0, i.push(1), i.push(0), h2 && (i[1] = Pt(i[0], i[0] = i[1]))), s3 && (s3.length = 0, s3.push(u[0]), s3.push(u[2]), h2 && (s3[1] = Pt(s3[0], s3[0] = s3[1]))), true);
}
var nr = [[0.33998104358485626, 0.6521451548625461], [0.8611363115940526, 0.34785484513745385]];
var ir = [[0.1834346424956498, 0.362683783378362], [0.525532409916329, 0.31370664587788727], [0.7966664774136267, 0.22238103445337448], [0.9602898564975363, 0.10122853629037626]];
var rr = [[0.09501250983763744, 0.1894506104550685], [0.2816035507792589, 0.18260341504492358], [0.45801677765722737, 0.16915651939500254], [0.6178762444026438, 0.14959598881657674], [0.755404408355003, 0.12462897125553388], [0.8656312023878318, 0.09515851168249279], [0.9445750230732326, 0.062253523938647894], [0.9894009349916499, 0.027152459411754096]];
var or = [[0.04830766568773832, 0.0965400885147278], [0.1444719615827965, 0.09563872007927486], [0.23928736225213706, 0.09384439908080457], [0.33186860228212767, 0.09117387869576389], [0.42135127613063533, 0.08765209300440381], [0.5068999089322294, 0.08331192422694675], [0.5877157572407623, 0.07819389578707031], [0.6630442669302152, 0.0723457941088485], [0.7321821187402897, 0.06582222277636185], [0.7944837959679424, 0.058684093478535544], [0.84936761373257, 0.050998059262376175], [0.8963211557660521, 0.04283589802222668], [0.9349060759377397, 0.03427386291302143], [0.9647622555875064, 0.02539206530926206], [0.9856115115452684, 0.01627439473090567], [0.9972638618494816, 0.007018610009470096]];
var ar = [[0.024350292663424433, 0.048690957009139724], [0.07299312178779904, 0.04857546744150343], [0.12146281929612056, 0.048344762234802954], [0.16964442042399283, 0.04799938859645831], [0.21742364374000708, 0.04754016571483031], [0.2646871622087674, 0.04696818281621002], [0.31132287199021097, 0.046284796581314416], [0.3572201583376681, 0.04549162792741814], [0.4022701579639916, 0.044590558163756566], [0.4463660172534641, 0.04358372452932345], [0.48940314570705296, 0.04247351512365359], [0.5312794640198946, 0.04126256324262353], [0.571895646202634, 0.03995374113272034], [0.6111553551723933, 0.038550153178615626], [0.6489654712546573, 0.03705512854024005], [0.6852363130542333, 0.035472213256882386], [0.7198818501716109, 0.033805161837141606], [0.7528199072605319, 0.03205792835485155], [0.7839723589433414, 0.030234657072402478], [0.8132653151227975, 0.028339672614259483], [0.8406292962525803, 0.02637746971505466], [0.8659993981540928, 0.024352702568710874], [0.8893154459951141, 0.022270173808383253], [0.9105221370785028, 0.02013482315353021], [0.9295691721319396, 0.017951715775697343], [0.9464113748584028, 0.015726030476024718], [0.9610087996520538, 0.013463047896718643], [0.973326827789911, 0.011168139460131128], [0.983336253884626, 0.008846759826363947], [0.9910133714767443, 0.006504457968978363], [0.9963401167719553, 0.004147033260562468], [0.9993050417357722, 0.001783280721696433]];
var hr = [[0.012223698960615764, 0.024446180196262518], [0.03666379096873349, 0.024431569097850044], [0.06108196960413957, 0.02440235563384958], [0.08546364050451549, 0.024358557264690626], [0.10979423112764375, 0.024300200167971867], [0.13405919946118777, 0.02422731922281525], [0.15824404271422493, 0.024139957989019287], [0.18233430598533718, 0.024038168681024052], [0.2063155909020792, 0.023922012136703457], [0.23017356422666, 0.023791557781003402], [0.2538939664226943, 0.023646883584447616], [0.2774626201779044, 0.02348807601653591], [0.3008654388776772, 0.02331522999406276], [0.32408843502441337, 0.023128448824387027], [0.3471177285976355, 0.022927844143686846], [0.369939555349859, 0.02271353585023646], [0.39254027503326744, 0.022485652032744968], [0.414906379552275, 0.022244328893799764], [0.43702450103710416, 0.02198971066846049], [0.4588814198335522, 0.021721949538052076], [0.48046407240417205, 0.02144120553920846], [0.5017595591361445, 0.02114764646822135], [0.5227551520511755, 0.02084144778075115], [0.5434383024128103, 0.02052279248696007], [0.5637966482266181, 0.020191871042130043], [0.5838180216287631, 0.01984888123283086], [0.6034904561585486, 0.019494028058706602], [0.6228021939105849, 0.019127523609950944], [0.6417416925623075, 0.01874958694054471], [0.660297632272646, 0.01836044393733134], [0.6784589224477192, 0.017960327185008687], [0.6962147083695144, 0.017549475827117706], [0.7135543776835874, 0.01712813542311138], [0.7304675667419088, 0.016696557801589205], [0.746944166797062, 0.016255000909785187], [0.7629743300440948, 0.015803728659399347], [0.7785484755064119, 0.015343010768865144], [0.7936572947621933, 0.014873122602147314], [0.8082917575079137, 0.014394345004166847], [0.8224431169556439, 0.013906964132951985], [0.8361029150609068, 0.013411271288616333], [0.8492629875779689, 0.012907562739267348], [0.8619154689395485, 0.012396139543950923], [0.8740527969580318, 0.01187730737274028], [0.8856677173453972, 0.011351376324080417], [0.8967532880491582, 0.010818660739503076], [0.9073028834017568, 0.010279479015832158], [0.9173101980809605, 0.009734153415006806], [0.9267692508789478, 0.009183009871660874], [0.9356743882779164, 0.00862637779861675], [0.9440202878302202, 0.008064589890486059], [0.9518019613412644, 0.0074979819256347285], [0.9590147578536999, 0.006926892566898814], [0.9656543664319652, 0.006351663161707189], [0.9717168187471366, 0.005772637542865698], [0.9771984914639074, 0.00519016183267633], [0.9820961084357185, 0.004604584256702955], [0.9864067427245862, 0.004016254983738642], [0.9901278184917344, 0.0034255260409102157], [0.9932571129002129, 0.0028327514714579912], [0.9957927585349812, 0.0022382884309626186], [0.997733248625514, 0.0016425030186690294], [0.9990774599773758, 0.0010458126793403489], [0.9998248879471319, 44938096029209035e-20]];
function ur(t2, e, s3, n4) {
  const i = 0.5 * (n4 - s3), r = s3 + i, o = new n2(0);
  for (let a2 = 0, h2 = Math.trunc(t2 / 2); a2 < h2; ++a2) {
    let s4, n5;
    switch (t2) {
      case 4:
        s4 = nr[a2][0], n5 = nr[a2][1];
        break;
      case 8:
        s4 = ir[a2][0], n5 = ir[a2][1];
        break;
      case 16:
        s4 = rr[a2][0], n5 = rr[a2][1];
        break;
      case 32:
        s4 = or[a2][0], n5 = or[a2][1];
        break;
      case 64:
        s4 = ar[a2][0], n5 = ar[a2][1];
        break;
      case 128:
        s4 = hr[a2][0], n5 = hr[a2][1];
        break;
      default:
        throw new Error("Quadrature_integral: invalid n");
    }
    const h3 = st(-i, s4, r), u = st(i, s4, r);
    o.pe(e(h3) * n5), o.pe(e(u) * n5);
  }
  return o.getResult() * i;
}
var mr = class _mr extends Us2 {
  constructor(t2) {
    t2 ? t2.vd ? (super({ vd: t2.vd, bPolygon: true }), this.m_segmentBufferCTor = Pm) : t2.copy ? (super({ vd: t2.copy.getDescription(), bPolygon: true }), this.m_segmentBufferCTor = Pm, t2.copy.copyTo(this)) : t2.move ? (super({ move: t2.move }), this.m_segmentBufferCTor = Pm) : t2.envelope ? z("envelope constructor not impl") : b("bad arg to polygon constructor") : (super({ bPolygon: true }), this.m_segmentBufferCTor = Pm);
  }
  assignMove(t2) {
    return t2.copyTo(this), this;
  }
  assignCopy(t2) {
    return t2.copyTo(this), this;
  }
  getBoundary() {
    return $s2(this);
  }
  getExteriorRingCount() {
    return this.getOGCPolygonCount();
  }
  getGeometryType() {
    return _mr.type;
  }
  getDimension() {
    return 2;
  }
  createInstance() {
    return new _mr({ vd: this.getDescription() });
  }
  equals(t2, e) {
    return this.equalsBase(t2, e);
  }
};
function lr(t2, s3) {
  let n4, r = s3, o = null;
  switch (r || (o = g(t2) ? O2() : M(), r = o), t2) {
    case a.enumPoint:
      n4 = new se({ vd: r });
      break;
    case a.enumLine:
      n4 = new fm({ vd: r });
      break;
    case a.enumBezier:
      n4 = new ra({ vd: r });
      break;
    case a.enumEllipticArc:
      n4 = new qh({ vd: r });
      break;
    case a.enumRationalBezier2:
      n4 = new Dn({ vd: r });
      break;
    case a.enumBezier2:
      n4 = new An({ vd: r });
      break;
    case a.enumEnvelope:
      n4 = new he({ vd: r });
      break;
    case a.enumMultiPoint:
      n4 = new De({ vd: r });
      break;
    case a.enumPolyline:
      n4 = new Qs2({ vd: r });
      break;
    case a.enumPolygon:
      n4 = new mr({ vd: r });
      break;
    case a.enumMultipatch:
      z("multipatch not impl");
      break;
    case a.enumGeometryCollection:
      n4 = new cs2({ vd: r });
      break;
    default:
      P("Geometry.create");
  }
  return n4;
}
mr.type = a.enumPolygon;
var cr = z2;
var gr = -1;
var dr = 1;
var _r = class {
  constructor(t2) {
    this.m_shape = t2;
  }
  userSort(t2, e, s3) {
    this.m_shape.sortVerticesSimpleByYHelper(s3, t2, e);
  }
  getValue(t2) {
    return this.m_shape.getY(t2);
  }
};
function pr(t2) {
  return void 0 !== t2.parent;
}
var fr = class _fr {
  constructor(t2) {
    pr(t2) ? (this.m_parent = t2.parent, this.m_geometry = t2.geometry, this.m_path = t2.path, this.m_vertex = t2.vertex, this.m_firstVertex = t2.firstVertex, this.m_index = t2.selection ? 0 : t2.index, this.m_bSkipMultiPoints = t2.bSkipMultiPoints, this.m_selection = t2.selection, this.m_bOneGeom = t2.bOneGeom, this.m_bFirst = true) : (this.m_parent = t2.copy.m_parent, this.m_geometry = t2.copy.m_geometry, this.m_path = t2.copy.m_path, this.m_vertex = t2.copy.m_vertex, this.m_index = t2.copy.m_index, this.m_bSkipMultiPoints = t2.copy.m_bSkipMultiPoints, this.m_firstVertex = t2.copy.m_firstVertex, this.m_bFirst = true, this.m_selection = t2.copy.m_selection, this.m_bOneGeom = t2.copy.m_bOneGeom);
  }
  moveToNextHelper() {
    for (this.m_path = this.m_parent.getNextPath(this.m_path), this.m_index = 0; this.m_geometry !== gr; ) {
      for (; this.m_path !== gr; this.m_path = this.m_parent.getNextPath(this.m_path)) if (this.m_vertex = this.m_parent.getFirstVertex(this.m_path), this.m_firstVertex = this.m_vertex, this.m_vertex !== gr) return this.m_vertex;
      if (this.m_bOneGeom) return gr;
      if (this.m_geometry = this.m_parent.getNextGeometry(this.m_geometry), this.m_geometry === gr) break;
      this.m_bSkipMultiPoints && !h(this.m_parent.getGeometryType(this.m_geometry)) || (this.m_path = this.m_parent.getFirstPath(this.m_geometry));
    }
    return gr;
  }
  nextSelection() {
    for (; this.m_index < this.m_parent.m_selectedVertices.length; ) {
      const t2 = this.m_parent.m_selectedVertices[this.m_index++];
      if (t2 !== gr && (this.m_path = this.m_parent.getPathFromVertex(t2), !this.m_bOneGeom || this.m_geometry === this.m_parent.getGeometryFromPath(this.m_path))) return this.m_geometry = this.m_parent.getGeometryFromPath(this.m_path), t2;
    }
    return gr;
  }
  next() {
    return this.m_selection ? this.nextSelection() : this.m_bFirst ? (this.m_bFirst = false, this.m_vertex) : this.m_vertex !== gr ? (this.m_vertex = this.m_parent.getNextVertex(this.m_vertex), this.m_index++, this.m_vertex !== gr && this.m_vertex !== this.m_firstVertex ? this.m_vertex : this.moveToNextHelper()) : gr;
  }
  currentGeometry() {
    return this.m_geometry;
  }
  currentPath() {
    return this.m_path;
  }
  static create_(t2, e, s3, n4, i, r, o, a2, h2) {
    return new _fr({ parent: t2, geometry: e, path: s3, vertex: n4, firstVertex: i, index: r, bSkipMultiPoints: o, selection: a2, bOneGeom: h2 });
  }
};
var Pr = class {
  constructor(t2) {
    this.parentage = t2;
  }
  equals(t2) {
    return this.parentage === t2.parentage;
  }
};
var yr = class _yr {
  setPrevPath(t2, e) {
    this.m_pathIndexList.setField(t2, 1, e);
  }
  setNextPath(t2, e) {
    this.m_pathIndexList.setField(t2, 2, e);
  }
  setPathFlags(t2, e) {
    this.m_pathIndexList.setField(t2, 6, e);
  }
  getPathFlags(t2) {
    return this.m_pathIndexList.getField(t2, 6);
  }
  setPathGeometry(t2, e) {
    this.m_pathIndexList.setField(t2, 7, e);
  }
  getPathIndex(t2) {
    return this.m_pathIndexList.getField(t2, 0);
  }
  setNextGeometry(t2, e) {
    this.m_geometryIndexList.setField(t2, 1, e);
  }
  setPrevGeometry(t2, e) {
    this.m_geometryIndexList.setField(t2, 0, e);
  }
  getGeometryIndex(t2) {
    return this.m_geometryIndexList.getField(t2, 7);
  }
  setFirstPath(t2, e) {
    this.m_geometryIndexList.setField(t2, 3, e);
  }
  setLastPath(t2, e) {
    this.m_geometryIndexList.setField(t2, 4, e);
  }
  newGeometry(t2) {
    const e = this.m_geometryIndexList.newElement();
    return this.m_geometryIndexList.setField(e, 2, t2), this.m_geometryIndexList.setField(e, 5, 0), this.m_geometryIndexList.setField(e, 6, 0), this.m_geometryIndexList.setField(e, 7, this.m_geometryIndexList.elementToIndex(e)), e;
  }
  freeGeometry(t2) {
    this.m_geometryIndexList.deleteElement(t2);
  }
  newPath(t2) {
    const e = this.m_pathIndexList.newElement(), s3 = this.m_pathIndexList.elementToIndex(e);
    if (this.m_pathIndexList.setField(e, 0, s3), this.m_pathIndexList.setField(e, 3, 0), this.m_pathIndexList.setField(e, 6, 0), this.setPathGeometry(e, t2), s3 >= this.m_pathAreas.length) {
      const t3 = Math.trunc(s3 < 16 ? 16 : 3 * s3 / 2);
      this.m_pathAreas.length = t3, this.m_pathLengths.length = t3;
    }
    return this.m_pathAreas[s3] = 0, this.m_pathLengths[s3] = 0, this.m_pathCount++, e;
  }
  freePath(t2) {
    this.m_pathIndexList.deleteElement(t2), this.m_pathCount--;
  }
  newVertex(t2) {
    const e = this.m_vertexIndexList.newElement(), s3 = t2 >= 0 ? t2 : this.m_vertexIndexList.elementToIndex(e);
    if (this.m_vertexIndexList.setField(e, 0, s3), t2 < 0) {
      if (s3 >= this.m_vertices.getPointCount()) {
        const t3 = Math.trunc(s3 < 16 ? 16 : 3 * s3 / 2);
        this.m_vertices.reserveRounded(t3), this.m_vertices.resizeNoInit(t3), null !== this.m_segments && (this.m_segments.length = t3), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0);
      }
      this.m_segments && (this.m_segments[s3] = null);
    }
    return this.m_pointCount++, e;
  }
  freeVertex(t2) {
    this.unselect(t2);
    const e = this.getVertexIndex(t2);
    this.m_vertexIndexList.deleteElement(t2), this.m_pointCount--;
    for (let s3 = 0, n4 = this.m_indices.length; s3 < n4; s3++) {
      if (s3 === this.m_selectionIndex) continue;
      const t3 = this.m_indices[s3];
      null !== t3 && t3.size() > e && t3.write(e, -1);
    }
    this.m_weights && this.m_weights.size() > e && this.m_weights.write(e, 1), this.m_ranks && this.m_ranks.size() > e && this.m_ranks.write(e, dr), this.m_segmentWeights && this.m_segmentWeights.size() > e && this.m_segmentWeights.write(e, 1), this.m_segmentRanks && this.m_segmentRanks.size() > e && this.m_segmentRanks.write(e, dr), this.m_segments && this.setSegmentToIndex(e, null);
  }
  insertVertex_(t2, e, s3, n4) {
    this.m_hasForceSetEnvelope = 0;
    const i = e !== gr ? this.getPrevVertex(e) : this.getLastVertex(t2), r = i !== gr ? this.getNextVertex(i) : gr, o = this.newVertex(null === s3 ? this.m_pointCount : -1), a2 = this.getVertexIndex(o);
    null !== s3 && this.m_vertices.setPointByValNoCurves(a2, s3), this.setPathToVertex(o, t2), this.setNextVertex(o, r), this.setPrevVertex(o, i), r !== gr && this.setPrevVertex(r, o), i !== gr && this.setNextVertex(i, o);
    const h2 = this.isClosedPath(t2), u = this.getFirstVertex(t2);
    e === gr && this.setLastVertex(t2, o), e === u && (h2 && n4 && u !== gr || this.setFirstVertex(t2, o)), h2 && r === gr && (this.setNextVertex(o, o), this.setPrevVertex(o, o)), this.setPathSize(t2, this.getPathSize(t2) + 1);
    const m = this.getGeometryFromPath(t2);
    return this.setGeometryVertexCount(m, this.getPointCount(m) + 1), o;
  }
  getHelperPoint() {
    return this.m_helperPoint || (this.m_helperPoint = new se({ vd: this.m_vertices.getDescription() }), this.m_helperPoint.setXYCoords(0, 0)), this.m_helperPoint;
  }
  addMultiPoint(t2, e) {
    const s3 = this.createGeometry(t2.getGeometryType(), t2.getDescription());
    return this.appendMultiPoint(s3, t2, e), s3;
  }
  addPoint_(t2, e) {
    const s3 = this.createGeometry(a.enumMultiPoint, t2.getDescription());
    return this.appendPoint(s3, t2, e), s3;
  }
  appendMultiPath_(t2, e) {
    if (e.isEmpty()) return;
    const s3 = e.getImpl();
    this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + s3.getPointCount()), this.m_verticesMp.addPoints(e, 0, s3.getPointCount()), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0);
    const n4 = null !== this.m_segments || null !== s3.getSegmentFlagsStreamRef();
    this.m_vertexIndexList.setCapacity(this.m_vertexIndexList.size() + s3.getPointCount()), this.m_pathIndexList.setCapacity(this.m_pathIndexList.size() + s3.getPathCount());
    for (let i = 0, r = s3.getPathCount(); i < r; i++) {
      if (0 === s3.getPathSize(i)) continue;
      const e2 = this.insertPath(t2, gr);
      this.setClosedPath(e2, s3.isClosedPath(i));
      for (let t3 = s3.getPathStart(i), r2 = s3.getPathEnd(i); t3 < r2; t3++) {
        const i2 = this.insertVertex_(e2, gr, null, false);
        if (n4) {
          const e3 = this.getVertexIndex(i2);
          if (1 & s3.getSegmentFlags(t3)) this.setSegmentToIndex(e3, null);
          else {
            const n5 = new Pm();
            s3.querySegment(t3, n5, true), this.setSegmentToIndex(e3, n5.releaseSegment());
          }
        }
      }
      s3.isStrongPathStart(i) && this.setStrongPathStart(e2, true), s3.isStrongPathEnd(i) && this.setStrongPathEnd(e2, true);
    }
  }
  addMultiPath(t2, e) {
    const s3 = this.createGeometry(t2.getGeometryType(), t2.getDescription());
    return t2.getGeometryType() === a.enumPolygon && this.setFillRule(s3, t2.getFillRule()), this.appendMultiPath(s3, t2, e), s3;
  }
  appendMultiPathPolyline(t2, e, s3) {
    const n4 = e.getImpl(), i = null !== this.m_segments || null !== n4.getSegmentFlagsStreamRef(), r = new n3();
    e.queryEnvelope(r);
    {
      const r2 = s3.clone();
      let o = n4.getPointCount();
      const a2 = n4.getAccelerators();
      if (a2 && a2.getQuadTree()) {
        o = a2.getQuadTree().getIntersectionCount(r2, 0, n4.getPointCount() + 1);
      }
      if (o < e.getPointCount()) {
        if (0 === o) return;
        const s4 = n4.queryLimitedSegmentIterator(r2);
        let a3 = -1, h2 = -100, u = -1, m = 0, l2 = -1, c = gr, g2 = false, d = s4.nextSegment();
        if (null !== d) for (; ; d = s4.nextSegment()) {
          let r3 = null === d;
          const o2 = null !== d ? s4.getPathIndex() : a3, _ = null !== d ? s4.getStartPointIndex() : h2;
          if (r3 || (a3 === o2 && h2 + 1 === _ ? m++ : r3 = true), r3) {
            if (-1 !== l2) {
              let t3 = -1, s5 = -1;
              if (m === u) {
                this.setClosedPath(c, g2);
                const i2 = n4.getPathEnd(a3);
                this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + i2 - l2), this.m_verticesMp.addPoints(e, l2, i2), s5 = n4.getPathSize(a3), t3 = i2 - 1;
              } else if (!g2 || h2 + 1 < n4.getPathEnd(a3)) this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + h2 + 2 - l2), this.m_verticesMp.addPoints(e, l2, h2 + 2), s5 = h2 - l2 + 2, t3 = h2;
              else {
                this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + h2 + 2 - l2), this.m_verticesMp?.addPoints(e, l2, h2 + 1), t3 = h2, s5 = h2 - l2 + 1;
                const i2 = n4.getPathStart(a3);
                this.m_verticesMp.addPoints(e, i2, i2 + 1), s5 += 1;
              }
              this.m_xyStream = this.m_vertices.getAttributeStreamRef(0);
              for (let e2 = 0, r4 = l2; e2 < s5; e2++, r4++) {
                const e3 = this.insertVertex_(c, gr, null, false);
                if (i) {
                  const s6 = this.getVertexIndex(e3);
                  if (1 & n4.getSegmentFlags(r4) || r4 > t3) this.setSegmentToIndex(s6, null);
                  else {
                    const t4 = new Pm();
                    n4.getSegmentBuffer(r4, t4, true), this.setSegmentToIndex(s6, t4.releaseSegment());
                  }
                }
              }
            }
            if (null === d) break;
            m = 1, l2 = _, a3 !== o2 ? (c = this.insertPath(t2, gr), this.setClosedPath(c, false), u = n4.getSegmentCountPath(o2), g2 = n4.isClosedPath(o2), a3 = o2) : c = this.insertPath(t2, gr);
          }
          h2 = _;
        }
        return;
      }
    }
    this.appendMultiPath_(t2, e);
  }
  appendMultiPathPolygon(t2, e, n4) {
    const i = e.getImpl(), r = null !== this.m_segments || null !== i.getSegmentFlagsStreamRef(), o = n3.constructEmpty();
    e.queryEnvelope(o), n(n4.isIntersecting(o) && !n4.containsEnvelope(o));
    let a2 = n3.construct(Number.NEGATIVE_INFINITY, n4.ymin, Number.POSITIVE_INFINITY, n4.ymax), h2 = n3.construct(n4.xmin, Number.NEGATIVE_INFINITY, n4.xmax, Number.POSITIVE_INFINITY);
    const u = i.getAccelerators();
    if (u && u.getQuadTree()) {
      const t3 = u.getQuadTree(), e2 = t3.getIntersectionCount(a2, 0, 0);
      e2 > t3.getIntersectionCount(h2, 0, e2 + 1) && (h2 = Pt(a2, a2 = h2));
    } else a2.height() > h2.width() && (h2 = Pt(a2, a2 = h2));
    const m = [], l2 = i.queryLimitedSegmentIterator(a2);
    let c = -1, g2 = -100, d = -1, _ = 0, p2 = -1, f2 = -1, P4 = gr, y2 = true, x4 = l2.nextSegment();
    if (null !== x4) for (; ; x4 = l2.nextSegment()) {
      let n5 = null === x4;
      const o2 = null !== x4 ? l2.getPathIndex() : c, a3 = null !== x4 ? l2.getStartPointIndex() : g2;
      if (n5 || (o2 === c ? g2 + 1 === a3 ? _++ : n5 = true : (n5 = c >= 0, c < 0 && (c = o2, d = i.getSegmentCountPath(c), p2 = a3, P4 = gr, _ = 1))), n5) {
        if (!(0 === m.length && d === _)) {
          0 !== m.length && m[0].first === p2 || (this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + 1), this.m_verticesMp.addPoints(e, p2, p2 + 1), -1 === f2 && (f2 = p2), P4 === gr && (P4 = this.insertPath(t2, gr), this.setClosedPath(P4, true)), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0), this.insertVertex_(P4, gr, null, false));
          for (const { first: n6, second: o3 } of m) {
            -1 === f2 && (f2 = n6);
            let a4 = -1, h3 = -1;
            const u2 = n6 + o3 - 1;
            if (o3 === d) {
              const t3 = u2 + 1;
              h3 = t3 - n6, this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + h3), this.m_verticesMp.addPoints(e, n6, t3), a4 = u2, n(1 === m.length);
            } else if (u2 + 1 < i.getPathEnd(c)) {
              const t3 = u2 + 2;
              h3 = t3 - n6, this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + h3), this.m_verticesMp.addPoints(e, n6, t3), a4 = u2;
            } else {
              const t3 = i.getPathStart(c), s3 = t3 !== f2 ? 1 : 0, r2 = u2 + 1;
              h3 = r2 - n6 + s3, this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + (r2 - n6) + s3), this.m_verticesMp.addPoints(e, n6, r2), a4 = u2, s3 > 0 && this.m_verticesMp?.addPoints(e, t3, t3 + 1);
            }
            this.m_xyStream = this.m_vertices.getAttributeStreamRef(0), P4 === gr && (P4 = this.insertPath(t2, gr), this.setClosedPath(P4, true));
            for (let t3 = 0, e2 = n6; t3 < h3; t3++, e2++) {
              const t4 = this.insertVertex_(P4, gr, null, false);
              if (r) {
                const s3 = this.getVertexIndex(t4);
                if (1 & i.getSegmentFlags(e2) || e2 > a4) this.setSegmentToIndex(s3, null);
                else {
                  const t5 = new Pm();
                  i.getSegmentBuffer(e2, t5, true), this.setSegmentToIndex(s3, t5.releaseSegment());
                }
              }
            }
          }
          if (0 === m.length || m.at(-1).first + m.at(-1).second !== p2 + _) {
            let t3 = p2 + _;
            t3 === e.getPathEnd(c) && (t3 = e.getPathStart(c)), f2 !== t3 && (this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + 1), this.m_verticesMp.addPoints(e, t3, t3 + 1), this.insertVertex_(P4, gr, null, false));
          }
        }
        m.length = 0, y2 = true, o2 !== c && (c = o2, d = i.getSegmentCountPath(c), P4 = gr, f2 = -1), p2 = a3, _ = 1;
      }
      if (!x4) break;
      {
        const t3 = n3.constructEmpty();
        x4.queryLooseEnvelope(t3), h2.isIntersecting(t3) ? (y2 ? m.push($t(a3, 1)) : m.at(-1).second++, y2 = false) : y2 = true;
      }
      g2 = a3;
    }
  }
  appendMultiPath(t2, e, s3) {
    if (void 0 === s3) return void this.appendMultiPath_(t2, e);
    if (e.isEmpty()) return;
    const n4 = e.getGeometryType() === a.enumPolygon, r = n3.constructEmpty();
    e.queryEnvelope(r), s3.isIntersecting(r) && (!s3.containsEnvelope(r) && e.getPointCount() > 10 ? n4 ? this.appendMultiPathPolygon(t2, e, s3) : this.appendMultiPathPolyline(t2, e, s3) : this.appendMultiPath_(t2, e));
  }
  appendPoint(t2, e, s3) {
    if (e.isEmpty()) return;
    if (void 0 !== s3 && !s3.contains(e.getXY())) return;
    this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + 1), this.m_verticesMp.add(e), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0), this.m_vertexIndexList.setCapacity(this.m_vertexIndexList.size() + 1);
    const n4 = this.insertPath(t2, gr);
    this.insertVertex_(n4, gr, null, false);
  }
  appendMultiPoint_(t2, e) {
    this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + e.getPointCount()), this.m_verticesMp.addPoints(e, 0, e.getPointCount()), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0), this.m_vertexIndexList.setCapacity(this.m_vertexIndexList.size() + e.getPointCount());
    const s3 = this.insertPath(t2, gr);
    for (let n4 = 0, i = e.getPointCount(); n4 < i; n4++) this.insertVertex_(s3, gr, null, false);
  }
  appendMultiPoint(t2, e, s3) {
    if (void 0 === s3) return void this.appendMultiPoint_(t2, e);
    const n4 = e.getAttributeStreamRef(0);
    let i = 0;
    for (let u = 0, m = e.getPointCount(); u < m; u++) {
      const t3 = n4.readPoint2D(2 * u);
      s3.contains(t3) && i++;
    }
    this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + i);
    let r = -1, o = -1, a2 = 0;
    for (let u = 0, m = e.getPointCount(); u < m; u++) {
      const t3 = n4.readPoint2D(2 * u);
      s3.contains(t3) ? (-1 === r && (r = u, o = u), o++) : r >= 0 && (this.m_verticesMp.addPoints(e, r, o - r), r = -1, a2++);
    }
    if (r > 0 && (this.m_verticesMp.addPoints(e, r, o - r), a2++), !a2) return;
    this.m_xyStream = this.m_vertices.getAttributeStreamRef(0), this.m_vertexIndexList.setCapacity(this.m_vertexIndexList.size() + i);
    const h2 = this.insertPath(t2, gr);
    for (let u = 0, m = e.getPointCount(); u < m; u++) {
      const t3 = n4.readPoint2D(2 * u);
      s3.contains(t3) && this.insertVertex_(h2, gr, null, false);
    }
  }
  splitSegmentForward(t2, s3, n4, r, o) {
    const a2 = this.getNextVertex(t2);
    a2 === gr && P("Edit_shape.split_segment_forward_");
    const h2 = this.getHelperPoint(), u = this.getPathFromVertex(t2);
    let m = t2;
    const l2 = this.hasSegmentParentage();
    for (let e = 0, c = s3.getResultSegmentCount(n4); e < c; e++) {
      const t3 = this.getVertexIndex(m), r2 = this.getNextVertex(m), g2 = s3.getResultSegment(n4, e);
      let d = null;
      if (g2.getGeometryType() !== a.enumLine && (d = g2.clone(), d.dropAllAttributes()), 0 === e && (g2.queryStart(h2), this.setSegmentToIndex(t3, null), this.setPointEx(m, h2, s3.getResultSegmentStartPointRank(n4, e), s3.getResultSegmentStartPointWeight(n4, e), o)), this.setSegmentRank(m, s3.getResultSegmentInteriorRank(n4, e)), this.setSegmentWeight(m, s3.getResultSegmentInteriorWeight(n4, e)), l2) {
        const t4 = s3.getResultSegmentSegmentParentage(n4, e), i = s3.getResultSegmentStartPointIsBreak(n4, e);
        this.setSegmentParentageAndBreak(m, t4, i);
      }
      if (g2.queryEnd(h2), e < c - 1) {
        this.setSegmentToIndex(t3, d);
        const i = this.insertVertex(u, r2, h2);
        this.setWeight(i, s3.getResultSegmentEndPointWeight(n4, e)), this.setRank(i, s3.getResultSegmentEndPointRank(n4, e)), this.select(i), m = i;
      } else {
        this.setPointEx(a2, h2, s3.getResultSegmentEndPointRank(n4, e), s3.getResultSegmentEndPointWeight(n4, e), o);
        const i = s3.getResultSegmentEndPointIsBreak(n4, e);
        this.setSegmentParentageBreakVertex(a2, i), this.setSegmentToIndex(t3, d);
      }
    }
  }
  splitSegmentBackward(t2, s3, n4, r, o) {
    const a2 = this.getNextVertex(t2);
    a2 === gr && P("Edit_shape.split_segment_backward_");
    const h2 = this.getHelperPoint(), u = this.getPathFromVertex(t2);
    let m = t2;
    const l2 = this.hasSegmentParentage();
    for (let e = 0, c = s3.getResultSegmentCount(n4); e < c; e++) {
      const t3 = c - e - 1, r2 = this.getVertexIndex(m), g2 = this.getNextVertex(m), d = s3.getResultSegment(n4, t3);
      let _ = null;
      if (d.getGeometryType() !== a.enumLine && (_ = d.clone(), _.reverse(), _.dropAllAttributes()), 0 === e && (d.queryEnd(h2), this.setSegmentToIndex(r2, null), this.setPointEx(m, h2, s3.getResultSegmentEndPointRank(n4, t3), s3.getResultSegmentEndPointWeight(n4, t3), o), this.setSegmentParentageAndBreak(m, s3.getResultSegmentSegmentParentage(n4, t3), s3.getResultSegmentEndPointIsBreak(n4, t3))), d.getGeometryType() === a.enumLine ? this.setSegmentToIndex(r2, null) : this.setSegmentToIndex(r2, _), this.setSegmentRank(m, s3.getResultSegmentInteriorRank(n4, t3)), this.setSegmentWeight(m, s3.getResultSegmentInteriorWeight(n4, t3)), d.queryStart(h2), e < c - 1) {
        const e2 = this.insertVertex(u, g2, h2);
        this.setWeight(e2, s3.getResultSegmentStartPointWeight(n4, t3)), this.setRank(e2, s3.getResultSegmentStartPointRank(n4, t3)), this.select(e2), m = e2, l2 && this.setSegmentParentageAndBreak(e2, s3.getResultSegmentSegmentParentage(n4, t3), s3.getResultSegmentEndPointIsBreak(n4, t3));
      } else this.setPointEx(a2, h2, s3.getResultSegmentStartPointRank(n4, t3), s3.getResultSegmentStartPointWeight(n4, t3), o);
    }
  }
  selected_(t2) {
    return this.getUserIndex(t2, this.m_selectionIndex) >= 0;
  }
  allocateIndex(t2 = true) {
    if (this.m_deletedIndices.length) {
      const e = this.m_deletedIndices.pop();
      return t2 && e.setRange(-1, 0, e.size()), e;
    }
    return t2 ? J2(0, -1) : J2(0);
  }
  recycleUserIndex(t2) {
    this.m_deletedIndices.push(t2);
  }
  allocatePathIndex() {
    if (this.m_deletedPathIndices.length) {
      const t2 = this.m_deletedPathIndices.at(-1);
      return this.m_deletedPathIndices.pop(), t2;
    }
    return J2(0);
  }
  recyclePathUserIndex(t2) {
    this.m_deletedPathIndices.push(t2);
  }
  peelALoop_(t2, e, s3) {
    const n4 = this.getNextVertex(t2), i = this.getNextVertex(e), r = this.getVertexIndex(t2), o = this.getVertexIndex(e);
    if (this.setNextVertex(t2, i), this.setPrevVertex(i, t2), this.setNextVertex(e, n4), this.setPrevVertex(n4, e), this.m_segments) {
      const t3 = this.getSegmentFromIndex(r), e2 = this.getSegmentFromIndex(o);
      this.setSegmentToIndex(o, null), this.setSegmentToIndex(r, e2), this.setSegmentToIndex(o, t3);
    }
    if (this.hasSegmentParentage()) {
      let s4 = this.getSegmentParentage(e), n5 = this.getSegmentParentage(t2);
      -1 === s4 && -1 === n5 || (n5 = Pt(s4, s4 = n5), this.setSegmentParentageAndBreak(t2, n5), this.setSegmentParentageAndBreak(e, s4));
    }
    if (s3) {
      const e2 = this.getPathFromVertex(t2), s4 = this.getGeometryFromPath(e2), r2 = [false], o2 = this.insertClosedPath(s4, gr, n4, this.getFirstVertex(e2), r2);
      r2[0] && this.setFirstVertex(e2, i);
      let a2 = this.getPathSize(e2);
      return a2 -= this.getPathSize(o2), this.setPathSize(e2, a2), o2;
    }
    return gr;
  }
  sortVerticesSimpleByYHelper(t2, e, s3) {
    t2.sort(e, s3, (t3, e2) => {
      let s4 = this.compareVerticesSimpleY(t3, e2);
      if (0 === s4) {
        const n4 = this.getPathInternalIndexFromVertex(t3), i = this.getPathInternalIndexFromVertex(e2);
        s4 = n4 < i ? -1 : n4 > i ? 1 : 0;
      }
      return s4;
    });
  }
  sortVerticesSimpleByYHelper3D(t2, e, n4) {
    n(0);
  }
  constructor() {
    this.m_verticesMp = null, this.m_vertices = null, this.m_xyStream = null, this.m_vertexDescription = null, this.m_segments = null, this.m_weights = null, this.m_ranks = null, this.m_segmentWeights = null, this.m_segmentRanks = null, this.m_indices = [], this.m_deletedIndices = [], this.m_pathAreas = [], this.m_pathLengths = [], this.m_pathindices = [], this.m_deletedPathIndices = [], this.m_geometryIndices = [], this.m_selectedVertices = [], this.m_helperPoint = null, this.m_forceSetEnvelope = G2.constructEmpty(), this.m_hasForceSetEnvelope = 0, this.m_workPoint2D = mi.getNAN(), this.m_workPoint2_2D = mi.getNAN(), this.m_curveStitcher = null, this.m_pathCount = 0, this.m_pointCount = 0, this.m_firstGeometry = gr, this.m_lastGeometry = gr, this.m_vertexIndexList = new mt(5), this.m_pathIndexList = new mt(8), this.m_geometryIndexList = new mt(8), this.m_bHasAttributes = false, this.m_selectedCount = 0, this.m_selectionIndex = -1, this.m_selection = false, this.m_bucketSort = new at(), this.m_segmentParentageIndex = -1;
  }
  getTotalPointCount() {
    return this.m_pointCount;
  }
  getEnvelope2D(t2) {
    if (0 !== this.m_hasForceSetEnvelope) return new n3(this.m_forceSetEnvelope.xmin, this.m_forceSetEnvelope.ymin, this.m_forceSetEnvelope.xmax, this.m_forceSetEnvelope.ymax);
    const e = this.hasCurves(), s3 = n3.constructEmpty(), n4 = this.queryVertexIterator();
    let i = true;
    for (let r = n4.next(); r !== gr; r = n4.next()) {
      if (i ? s3.merge(this.getXY(r)) : s3.mergeNe(this.getXY(r)), e) {
        const t3 = this.getSegment(r);
        if (null !== t3) {
          const e2 = n3.constructEmpty();
          t3.queryLooseEnvelope(e2), s3.mergeEnvelope2D(e2);
        }
      }
      i = false;
    }
    return s3;
  }
  getEnvelope3D(t2) {
    return n(0), G2.constructEmpty();
  }
  forceSetEnvelope2D(t2) {
    this.m_hasForceSetEnvelope = 1, this.m_forceSetEnvelope.setCoords(t2.xmin, t2.ymin, 0, t2.xmax, t2.ymax, 0);
  }
  forceSetEnvelope3D(t2) {
    n(0);
  }
  forgetForceSetEnvelope() {
    this.m_hasForceSetEnvelope = 0;
  }
  getGeometryCount() {
    return this.m_geometryIndexList.size();
  }
  addGeometry(t2, s3) {
    const n4 = t2.getGeometryType();
    if (h(n4)) return this.addMultiPath(t2, s3);
    if (n4 === a.enumMultiPoint) return this.addMultiPoint(t2, s3);
    if (n4 === a.enumPoint) return this.addPoint_(t2, s3);
    if (n4 === a.enumEnvelope) {
      const e = new mr();
      return e.addEnvelope(t2, false), this.addMultiPath(e, s3);
    }
    P("");
  }
  appendGeometry(t2, s3) {
    this.mergeVertexDescription(s3.getDescription());
    const n4 = s3.getGeometryType();
    h(n4) ? this.appendMultiPath(t2, s3) : n4 !== a.enumMultiPoint ? P("") : this.appendMultiPoint(t2, s3);
  }
  assignRankToGeometryVertices(t2, e) {
    e < dr && (e = dr);
    const s3 = this.queryVertexIterator();
    for (let n4 = s3.next(); n4 !== gr; n4 = s3.next()) this.setRank(n4, e), this.setSegmentRank(n4, e);
  }
  collapseAllGeometriesToFirst() {
    this.collapseGeometriesToFirst(a.enumUnknown);
  }
  collapseGeometriesToFirst(t2) {
    this.dbgVerifyVertexCounts();
    let e = gr, s3 = -1, n4 = -1;
    for (let r = this.getFirstGeometry(); r !== gr; ) {
      if (t2 === a.enumUnknown || this.getGeometryType(r) === t2) {
        if (e === gr) {
          e = r, s3 = this.getPathCount(e), n4 = this.getPointCount(e), r = this.getNextGeometry(r);
          continue;
        }
        for (let s4 = this.getFirstPath(r); s4 !== gr; s4 = this.getNextPath(s4)) this.setPathGeometry(s4, e);
        s3 += this.getPathCount(r), n4 += this.getPointCount(r);
        const t3 = this.getLastPath(e), i = this.getFirstPath(r);
        t3 !== gr ? this.setNextPath(t3, i) : this.setFirstPath(e, i), i !== gr && (this.setPrevPath(i, t3), this.setLastPath(e, this.getLastPath(r))), this.setFirstPath(r, gr), this.setLastPath(r, gr);
        const o = r;
        r = this.getNextGeometry(r), this.setGeometryVertexCount(o, 0), this.removeGeometry(o);
        continue;
      }
      r = this.getNextGeometry(r);
    }
    return e !== gr && (this.setGeometryVertexCount(e, n4), this.setGeometryPathCount(e, s3), this.dbgVerifyVertexCounts()), e;
  }
  setFillRule(t2, e) {
    let s3 = this.m_geometryIndexList.getField(t2, 2);
    s3 &= -134217729, s3 |= 1 === e ? 134217728 : 0, this.m_geometryIndexList.setField(t2, 2, s3);
  }
  getFillRule(t2) {
    return 134217728 & this.m_geometryIndexList.getField(t2, 2) ? 1 : 0;
  }
  setGeometryModified(t2, e) {
    let s3 = this.m_geometryIndexList.getField(t2, 2);
    !!(67108864 & s3) !== e && (s3 &= -67108865, s3 |= e ? 67108864 : 0, this.m_geometryIndexList.setField(t2, 2, s3));
  }
  getGeometryModified(t2) {
    return !!(67108864 & this.m_geometryIndexList.getField(t2, 2));
  }
  setGeometryModifiedWithVertex(t2, e) {
    const s3 = this.getPathFromVertex(t2), n4 = this.getGeometryFromPath(s3);
    this.setGeometryModified(n4, e);
  }
  getGeometryModifiedWithVertex(t2) {
    const e = this.getPathFromVertex(t2), s3 = this.getGeometryFromPath(e);
    return this.getGeometryModified(s3);
  }
  swapGeometry(t2, e) {
    const s3 = this.getFirstPath(t2), n4 = this.getFirstPath(e), i = this.getLastPath(t2), r = this.getLastPath(e);
    for (let c = this.getFirstPath(t2); c !== gr; c = this.getNextPath(c)) this.setPathGeometry(c, e);
    for (let c = this.getFirstPath(e); c !== gr; c = this.getNextPath(c)) this.setPathGeometry(c, t2);
    this.setFirstPath(t2, n4), this.setFirstPath(e, s3), this.setLastPath(t2, r), this.setLastPath(e, i);
    const o = this.getPointCount(t2), a2 = this.getPathCount(t2), h2 = this.getPointCount(e), u = this.getPathCount(e);
    this.setGeometryVertexCount(t2, h2), this.setGeometryVertexCount(e, o), this.setGeometryPathCount(t2, u), this.setGeometryPathCount(e, a2);
    const m = this.m_geometryIndexList.getField(t2, 2), l2 = this.m_geometryIndexList.getField(e, 2);
    this.m_geometryIndexList.setField(t2, 2, l2), this.m_geometryIndexList.setField(e, 2, m);
  }
  addPathFromMultiPath(t2, e, s3) {
    const n4 = this.createGeometry(s3 ? a.enumPolygon : a.enumPolyline, t2.getDescription()), r = t2.getImpl();
    if (t2.getPathSize(e) < 2) return n4;
    this.m_vertices.reserveRounded(this.m_vertices.getPointCount() + t2.getPathSize(e)), this.m_verticesMp.addPoints(t2, t2.getPathStart(e), r.getPathEnd(e)), this.m_xyStream = this.m_vertices.getAttributeStreamRef(0);
    const o = this.insertPath(n4, gr);
    this.setClosedPath(o, r.isClosedPath(e) || s3);
    const a2 = null !== this.m_segments || null !== r.getSegmentFlagsStreamRef();
    for (let i = r.getPathStart(e), h2 = r.getPathEnd(e); i < h2; i++) {
      const t3 = this.insertVertex_(o, gr, null, false);
      if (a2) {
        const e2 = this.getVertexIndex(t3);
        if (1 & r.getSegmentFlags(i)) this.setSegmentToIndex(e2, null);
        else {
          const t4 = new Pm();
          r.querySegment(i, t4, true), this.setSegmentToIndex(e2, t4.releaseSegment());
        }
      }
    }
    return r.isStrongPathStart(e) && this.setStrongPathStart(o, true), r.isStrongPathEnd(e) && this.setStrongPathEnd(o, true), n4;
  }
  getGeometry(t2) {
    const e = this.getGeometryType(t2), s3 = lr(e, this.m_verticesMp.getDescription()), n4 = this.getPointCount(t2);
    if (0 === n4) return s3;
    if (h(e)) {
      const e2 = s3.getImpl(), i = this.getPathCount(t2), r = J2(i + 1), o = K2(i + 1, 0), a2 = s3.getDescription(), h2 = this.hasCurves();
      for (let s4 = 0, u = a2.getAttributeCount(); s4 < u; s4++) {
        const h3 = a2.getSemantics(s4), u2 = cr.getComponentCount(h3), m = j2(h3, n4), l2 = this.m_vertices.getAttributeStreamRef(h3);
        let c = 0, g2 = 0, d = 0;
        for (let e3 = this.getFirstPath(t2); e3 !== gr; e3 = this.getNextPath(e3)) {
          let t3 = 0;
          this.isClosedPath(e3) && (t3 |= 1), this.isExterior(e3) && (t3 |= 8), this.isStrongPathStart(e3) && (t3 |= 2), this.isStrongPathEnd(e3) && (t3 |= 4), t3 && o.setBits(g2, t3);
          const s5 = this.getPathSize(e3);
          if (r.write(g2++, d), d += s5, 0 === h3) {
            const t4 = l2, s6 = m;
            let n5;
            for (let i2 = this.getFirstVertex(e3); c < d; i2 = this.getNextVertex(i2), c++) {
              const e4 = this.getVertexIndex(i2);
              n5 = t4.readPoint2D(2 * e4), s6.writePoint2D(2 * c, n5);
            }
          } else for (let n5 = this.getFirstVertex(e3); c < d; n5 = this.getNextVertex(n5), c++) {
            const t4 = this.getVertexIndex(n5);
            for (let e4 = 0; e4 < u2; e4++) {
              const s6 = l2.readAsDbl(t4 * u2 + e4);
              m.writeAsDbl(c * u2 + e4, s6);
            }
          }
        }
        e2.setAttributeStreamRef(h3, m), r.write(i, n4);
      }
      if (e2.setPathFlagsStreamRef(o), e2.setPathStreamRef(r), e2.notifyModifiedFlags(65535), h2) {
        let s4 = 0, n5 = 0;
        for (let i2 = this.getFirstPath(t2); i2 !== gr; i2 = this.getNextPath(i2)) {
          s4 += this.getPathSize(i2);
          for (let t3 = this.getFirstVertex(i2); n5 < s4; t3 = this.getNextVertex(t3)) {
            const s5 = this.getSegment(t3);
            null !== s5 && s5.isCurve() && e2.replaceSegment(n5, s5, true), n5++;
          }
        }
      }
    } else if (e === a.enumMultiPoint) {
      const e2 = s3.getImpl(), i = s3.getDescription();
      e2.reserve(n4), e2.resizeNoInit(n4);
      for (let s4 = 0, n5 = i.getAttributeCount(); s4 < n5; s4++) {
        const n6 = i.getSemantics(s4), r = cr.getComponentCount(n6), o = e2.getAttributeStreamRef(n6), a2 = this.m_vertices.getAttributeStreamRef(n6);
        let h2 = 0;
        const u = this.getFirstPath(t2), m = this.getPathSize(u);
        for (let t3 = this.getFirstVertex(u); h2 < m; t3 = this.getNextVertex(t3), h2++) {
          const e3 = this.getVertexIndex(t3);
          for (let t4 = 0; t4 < r; t4++) {
            const s5 = a2.readAsDbl(e3 * r + t4);
            o.writeAsDbl(h2 * r + t4, s5);
          }
        }
        e2.setAttributeStreamRef(n6, o);
      }
      e2.notifyModifiedFlags(65535);
    } else b("getGeometry");
    return s3;
  }
  queryPointGeometryOnly(t2, s3) {
    this.getGeometryType(t2) !== a.enumMultiPoint && P("get_point_geometry_only");
    const n4 = this.getPointCount(t2);
    if (n4 > 1 && P("get_point_geometry_only"), 0 === n4) return s3.assignVertexDescription(this.m_vertexDescription), void s3.setEmpty();
    const r = this.getFirstPath(t2), o = this.getFirstVertex(r);
    this.queryPoint(o, s3);
  }
  removeGeometry(t2) {
    for (let n4 = this.getFirstPath(t2); n4 !== gr; n4 = this.removePath(n4)) ;
    const e = this.getPrevGeometry(t2), s3 = this.getNextGeometry(t2);
    return e !== gr ? this.setNextGeometry(e, s3) : this.m_firstGeometry = s3, s3 !== gr ? this.setPrevGeometry(s3, e) : this.m_lastGeometry = e, this.freeGeometry(t2), s3;
  }
  createGeometry(t2, e) {
    void 0 === e && (e = M());
    const s3 = this.newGeometry(t2);
    return this.m_vertices || (this.m_verticesMp = new De({ vd: e }), this.m_vertices = this.m_verticesMp.getImpl()), this.mergeVertexDescription(e), this.m_firstGeometry === gr ? (this.m_firstGeometry = s3, this.m_lastGeometry = s3) : (this.setPrevGeometry(s3, this.m_lastGeometry), this.setNextGeometry(this.m_lastGeometry, s3), this.m_lastGeometry = s3), s3;
  }
  getFirstGeometry() {
    return this.m_firstGeometry;
  }
  getLastGeometry() {
    return this.m_lastGeometry;
  }
  getNextGeometry(t2) {
    return this.m_geometryIndexList.getField(t2, 1);
  }
  getPrevGeometry(t2) {
    return this.m_geometryIndexList.getField(t2, 0);
  }
  getGeometryType(t2) {
    return 16777215 & this.m_geometryIndexList.getField(t2, 2);
  }
  setGeometryUserIndex(t2, e, s3) {
    const n4 = this.m_geometryIndices[e], i = this.getGeometryIndex(t2);
    i >= n4.size() && n4.resize(Math.max(1.25 * i, 16), -1), n4.write(i, s3);
  }
  getGeometryUserIndex(t2, e) {
    const s3 = this.getGeometryIndex(t2), n4 = this.m_geometryIndices[e];
    return s3 < n4.size() ? n4.read(s3) : -1;
  }
  createGeometryUserIndex() {
    for (let e = 0; e < this.m_geometryIndices.length; e++) if (null === this.m_geometryIndices[e]) return this.m_geometryIndices[e] = J2(0), e;
    this.m_geometryIndices.push(J2(0));
    const t2 = this.m_geometryIndices.length - 1;
    return n(t2 >= 0 && t2 <= Number.MAX_SAFE_INTEGER), t2;
  }
  removeGeometryUserIndex(t2) {
    for (this.m_geometryIndices[t2] = null; this.m_geometryIndices.length > 0 && null === this.m_geometryIndices.at(-1); ) this.m_geometryIndices.pop();
  }
  getFirstPath(t2) {
    return this.m_geometryIndexList.getField(t2, 3);
  }
  getLastPath(t2) {
    return this.m_geometryIndexList.getField(t2, 4);
  }
  hasPointFeatures() {
    for (let t2 = this.getFirstGeometry(); t2 !== gr; t2 = this.getNextGeometry(t2)) if (!h(this.getGeometryType(t2))) return true;
    return false;
  }
  getPointCount(t2) {
    return this.m_geometryIndexList.getField(t2, 5);
  }
  getPathCount(t2) {
    return this.m_geometryIndexList.getField(t2, 6);
  }
  filterClosePoints(t2, e, n4, r, o) {
    const a2 = t2 * t2;
    let h2 = 0;
    const u = this.hasCurves(), m = this.hasSegmentParentage(), l2 = true;
    for (let g2 = o === gr ? this.getFirstGeometry() : o; g2 !== gr; g2 = o === gr ? this.getNextGeometry(g2) : gr) {
      const t3 = this.getGeometryType(g2);
      if (!h(t3)) continue;
      if (n4 && t3 !== a.enumPolygon) continue;
      const o2 = this.getGeometryType(g2) === a.enumPolygon;
      let d = this.getGeometryModified(g2);
      for (let n5 = this.getFirstPath(g2); n5 !== gr; ) {
        let t4 = 0;
        for (let e2 = this.getFirstVertex(n5); t4 < Math.trunc(this.getPathSize(n5) / 2); ) {
          const i2 = this.getNextVertex(e2);
          if (i2 === gr) break;
          const o3 = this.getXY(e2), c2 = this.getXY(i2);
          let _2 = mi.sqrDistance(o3, c2), p2 = true;
          do {
            if (_2 <= a2) {
              if (u) {
                const t5 = this.getSegment(e2);
                if (null !== t5) {
                  const e3 = t5.calculateLength2D();
                  if (_2 = e3 * e3, _2 > a2) break;
                }
              }
              if (0 === _2 ? 0 === h2 && (h2 = -1) : h2 = 1, i2 !== this.getLastVertex(n5)) {
                const t5 = m && (this.getSegmentParentageBreakVertex(e2) || this.getSegmentParentageBreakVertex(i2));
                if (this.transferAllDataToTheVertex(i2, e2, l2), this.removeVertex(i2, false), r && !d && (this.setGeometryModified(g2, true), d = true), m && e2 !== i2) {
                  this.setSegmentParentageBreakVertex(e2, t5);
                  const n6 = this.getNextVertex(e2);
                  n(n6 !== gr), this.isDiscontinuousSegmentParentage(n6) && this.setSegmentParentageBreakVertex(n6, true);
                }
              }
              p2 = false;
            }
          } while (0);
          p2 && (e2 = this.getNextVertex(e2)), t4++;
        }
        let i = this.getFirstVertex(n5);
        for (let e2 = this.isClosedPath(n5) ? i : this.getLastVertex(n5); this.getPathSize(n5) > 0; ) {
          const t5 = this.getPrevVertex(e2);
          if (t5 === gr) break;
          {
            const o3 = this.getXY(t5), c2 = this.getXY(e2);
            let _2 = mi.sqrDistance(o3, c2), p2 = true;
            do {
              if (_2 <= a2) {
                if (u) {
                  const e3 = this.getSegment(t5);
                  if (null !== e3) {
                    const t6 = e3.calculateLength2D();
                    if (_2 = t6 * t6, _2 > a2) break;
                  }
                }
                if (0 === _2 ? 0 === h2 && (h2 = -1) : h2 = 1, m) {
                  n(this.m_segmentParentageIndex >= 0);
                  const n6 = this.getUserIndex(e2, this.m_segmentParentageIndex);
                  this.transferAllDataToTheVertex(t5, e2, l2), this.setUserIndex(e2, this.m_segmentParentageIndex, n6);
                } else this.transferAllDataToTheVertex(t5, e2, l2);
                const o4 = m && (this.getSegmentParentageBreakVertex(e2) || this.getSegmentParentageBreakVertex(t5));
                this.removeVertex(t5, true), r && !d && (this.setGeometryModified(g2, true), d = true), m && t5 !== e2 && (o4 || this.isDiscontinuousSegmentParentage(e2)) && this.setSegmentParentageBreakVertex(e2, true), i === t5 && (i = this.getFirstVertex(n5)), p2 = false;
              }
            } while (0);
            if (p2 && (e2 = this.getPrevVertex(e2), e2 === i)) break;
          }
        }
        const c = this.getPathSize(n5);
        let _ = e && c < (o2 ? 3 : 2);
        _ && o2 && 2 === c && u && (_ = !this.pathHasCurves(n5)), _ ? (n5 = this.removePath(n5), 0 === h2 && (h2 = -1), r && !d && (this.setGeometryModified(g2, true), d = true)) : n5 = this.getNextPath(n5);
      }
    }
    return h2;
  }
  filterClosePoints3D(t2, e, n4, i, r, o) {
    return n(0), 0;
  }
  hasDegenerateSegments(t2) {
    for (let e = this.getFirstGeometry(); e !== gr; e = this.getNextGeometry(e)) if (h(this.getGeometryType(e))) for (let s3 = this.getFirstPath(e); s3 !== gr; ) {
      const e2 = this.getPathSize(s3);
      if (0 === e2) return true;
      let n4 = this.getFirstVertex(s3);
      for (let s4 = 0; s4 < e2; s4++) {
        const e3 = this.getNextVertex(n4);
        if (e3 === gr) break;
        const s5 = this.getVertexIndex(n4), i = this.getSegmentFromIndex(s5);
        let r = 0;
        if (null !== i) {
          if (r = i.calculateLowerLength2D(), r <= t2) {
            if (r = i.calculateUpperLength2D(), r <= t2) return true;
            if (r = i.calculateLength2D(), r <= t2) return true;
          }
        } else {
          const n5 = this.getVertexIndex(e3);
          if (r = this.m_vertices.getShortestDistance(s5, n5), r <= t2) return true;
        }
        n4 = e3;
      }
      s3 = this.getNextPath(s3);
    }
    return false;
  }
  hasDegenerateSegments3D(t2, e) {
    return n(0), false;
  }
  transferAllDataToTheVertex(t2, e, s3 = false) {
    const n4 = this.getVertexIndex(t2), i = this.getVertexIndex(e);
    if (s3) {
      let t3 = 1, e2 = 1;
      if (this.m_ranks && (t3 = this.getRankWithIndex(n4), e2 = this.getRankWithIndex(i)), t3 > e2 && this.setRankWithIndex(i, t3), t3 >= e2 && this.m_weights) {
        const s4 = this.getWeightWithIndex(n4), r2 = this.getWeightWithIndex(i);
        (t3 > e2 || s4 > r2) && this.setWeightWithIndex(i, s4);
      }
    } else {
      if (this.m_weights) {
        const t3 = this.getWeightWithIndex(n4);
        this.setWeightWithIndex(i, t3);
      }
      if (this.m_ranks) {
        const t3 = this.getRankWithIndex(n4);
        this.setRankWithIndex(i, t3);
      }
    }
    if (this.m_segmentWeights) {
      const t3 = this.getSegmentWeightWithIndex(n4);
      this.setSegmentWeightWithIndex(i, t3);
    }
    if (this.m_segmentRanks) {
      const t3 = this.getSegmentRankWithIndex(n4);
      this.setSegmentRankWithIndex(i, t3);
    }
    for (let o = 0, a2 = this.m_indices.length; o < a2; o++) if (o !== this.m_selectionIndex && null !== this.m_indices[o]) {
      const s4 = this.getUserIndex(t2, o);
      this.setUserIndex(e, o, s4);
    }
    const r = this.selected(t2);
    r !== this.selected(e) && (r ? this.select(e) : this.unselect(e));
  }
  splitSegmentAxisAware(t2, s3, n4, i, r) {
    let o = 0;
    const a2 = this.getNextVertex(t2);
    a2 === gr && P("");
    const h2 = this.getVertexIndex(t2), u = this.getVertexIndex(a2), m = this.getSegmentFromIndex(h2);
    let l2 = this.m_vertices.getShortestDistance(h2, u);
    const c = this.getPathFromVertex(t2), g2 = this.m_bHasAttributes;
    g2 && m && (l2 = m.calculateLength2D());
    const d = this.getSegmentParentage(t2), _ = this.getHelperPoint();
    if (m) {
      let t3 = 0, e = 0, r2 = gr;
      for (let p2 = 0; p2 < n4; p2++) {
        const n5 = s3[p2];
        if (t3 < n5 && n5 < 1) {
          const s4 = m.cut(t3, n5);
          if (null !== i && (p2 > 0 && s4.setStartXY(i[p2 - 1]), s4.setEndXY(i[p2]), s4.normalizeAfterEndpointChange(), e = p2), g2) {
            const t4 = l2 > 0 ? m.calculateSubLengthFromStart(n5) / l2 : 0;
            this.m_vertices.interpolateTwoVertices(h2, u, t4, _);
          }
          _.setXY(s4.getEndXY()), r2 = this.insertVertex(c, a2, _), o++;
          const f2 = this.getPrevVertex(r2), P4 = this.getVertexIndex(f2);
          this.setSegmentToIndex(P4, s4), -1 !== d && this.setSegmentParentageAndBreak(r2, d, false), t3 = n5;
        }
      }
      if (r2 !== gr) {
        const s4 = m.cut(t3, 1);
        null !== i && (s4.setStartXY(i[e]), s4.normalizeAfterEndpointChange());
        const n5 = this.getVertexIndex(r2);
        this.setSegmentToIndex(n5, s4);
      }
    } else {
      let t3 = 0;
      for (let e = 0; e < n4; e++) {
        const n5 = s3[e];
        if (t3 < n5 && n5 < 1) {
          this.m_vertices.interpolateTwoVertices(h2, u, n5, _);
          const t4 = this.insertVertex(c, a2, _);
          o++, -1 !== d && this.setSegmentParentageAndBreak(t4, d, false);
        }
        t3 = n5;
      }
    }
    return o;
  }
  splitSegment(t2, e, s3, n4 = null) {
    return this.splitSegmentAxisAware(t2, e, s3, n4, -1);
  }
  snapControlPoints(t2, s3, n4) {
    this.getNextVertex(t2) === gr && P("");
    let i = t2, r = false;
    for (let e = 0; e < s3; ++e) {
      const t3 = this.getVertexIndex(i), e2 = this.getSegmentFromIndex(t3);
      if (e2) {
        const t4 = e2.snapControlPoints(n4);
        r ||= t4;
      }
      i = this.getNextVertex(i);
    }
    return r;
  }
  snapControlPointsOnSelection(t2) {
    if (!this.hasCurves()) return false;
    let e = 0;
    const s3 = this.queryVertexIteratorOnSelection();
    for (let n4 = s3.next(); n4 !== gr; n4 = s3.next()) {
      const s4 = this.getVertexIndex(n4), i = this.getSegmentFromIndex(s4);
      i && (e |= i.snapControlPoints(t2) ? 1 : 0);
    }
    return 0 !== e;
  }
  calculateSubLength2D(t2, e, n4) {
    return n(0), 0;
  }
  setPoint(t2, e, s3) {
    if (this.setPointOnly(t2, e), null !== this.m_segments) {
      const n4 = this.getVertexIndex(t2), i = this.getSegmentFromIndex(n4);
      null !== i && (i.setStartXY(e.getXY()), i.normalizeAfterEndpointChange(), s3 && i.ensureXYMonotone());
      const r = this.getPrevVertex(t2);
      if (r !== gr) {
        const t3 = this.getVertexIndex(r), n5 = this.getSegmentFromIndex(t3);
        null !== n5 && (n5.setEndXY(e.getXY()), n5.normalizeAfterEndpointChange(), s3 && n5.ensureXYMonotone());
      }
    }
  }
  setPointEx(t2, e, s3, n4, i) {
    this.setPoint(t2, e, i);
    const r = this.getVertexIndex(t2);
    this.setWeightWithIndex(r, n4), this.setRankWithIndex(r, s3);
  }
  setPointOnly(t2, e) {
    const s3 = this.getVertexIndex(t2);
    this.m_vertices.setPointByValNoCurves(s3, e);
  }
  setPointOnlyEx(t2, e, n4, i) {
    n(0);
  }
  queryPoint(t2, e) {
    const s3 = this.getVertexIndex(t2);
    this.m_vertices.getPointByVal(s3, e);
  }
  setXY(t2, e) {
    this.setXYCoords(t2, e.x, e.y);
  }
  setXYCoords(t2, e, s3) {
    const n4 = this.getVertexIndex(t2);
    if (this.m_vertices?.setXYCoordsNoCurves(n4, e, s3), null !== this.m_segments) {
      const i = this.getSegmentFromIndex(n4);
      null !== i && (i.setStartXYCoords(e, s3), i.normalizeAfterEndpointChange());
      const r = this.getPrevVertex(t2);
      if (r !== gr) {
        const t3 = this.getVertexIndex(r), n5 = this.getSegmentFromIndex(t3);
        null != n5 && (n5.setEndXYCoords(e, s3), n5.normalizeAfterEndpointChange());
      }
    }
  }
  setXYMonotonic(t2, e, s3) {
    const n4 = this.getVertexIndex(t2);
    if (this.m_vertices.setXYCoordsNoCurves(n4, e, s3), null !== this.m_segments) {
      const i = this.getSegmentFromIndex(n4);
      if (null !== i) {
        const t3 = i.getEndXY();
        i.setCoordsForIntersector(new mi(e, s3), t3, false), i.ensureXYMonotone();
      }
      const r = this.getPrevVertex(t2);
      if (r !== gr) {
        const t3 = this.getVertexIndex(r), n5 = this.getSegmentFromIndex(t3);
        if (null !== n5) {
          const t4 = n5.getStartXY();
          n5.setCoordsForIntersector(t4, new mi(e, s3), false), n5.ensureXYMonotone();
        }
      }
    }
  }
  setXYMonotonicPoint2D(t2, e) {
    this.setXYMonotonic(t2, e.x, e.y);
  }
  queryXY(t2, e) {
    const s3 = this.getVertexIndex(t2);
    return this.m_vertices.queryXY(s3, e);
  }
  getXY(t2) {
    const e = this.getVertexIndex(t2);
    return this.m_vertices.getXY(e);
  }
  getXYWithIndex(t2) {
    return this.m_xyStream.readPoint2D(2 * t2);
  }
  static setSegDefault(t2, e, n4) {
    n(0);
  }
  setXYZ(t2, e, n4) {
    n(0);
  }
  setXYZCoords(t2, e, n4, i) {
    n(0);
  }
  queryXYZ(t2, e) {
    n(0);
  }
  getXYZ(t2) {
    return n(0), X.getNAN();
  }
  getXYZWithIndex(t2) {
    return n(0), X.getNAN();
  }
  mergeVertexDescription(t2) {
    this.m_verticesMp.mergeVertexDescription(t2), this.m_vertexDescription = this.m_verticesMp.getDescription(), this.m_bHasAttributes = this.m_vertexDescription.getAttributeCount() > 1;
  }
  addAttribute(t2) {
    n(0);
  }
  getAttributeAsDbl(t2, e, s3) {
    return this.m_vertices.getAttributeAsDbl(t2, this.getVertexIndex(e), s3);
  }
  queryAttributeAsDbl(t2, e, n4, i) {
    n(0);
  }
  setAttribute(t2, e, n4, i) {
    n(0);
  }
  setAttributeInt(t2, e, n4, i) {
    n(0);
  }
  getVertexDescription() {
    return this.m_vertexDescription;
  }
  getMinPathVertexY(t2) {
    return n(0), 0;
  }
  getVertexIndex(t2) {
    return this.m_vertexIndexList.getField(t2, 0);
  }
  getY(t2) {
    const e = this.getVertexIndex(t2);
    return this.m_vertices.queryXY(e, this.m_workPoint2D), this.m_workPoint2D.y;
  }
  getX(t2) {
    return this.getXY(t2).x;
  }
  isEqualXY(t2, e) {
    return this.queryXY(t2, this.m_workPoint2D), this.queryXY(e, this.m_workPoint2_2D), this.m_workPoint2D.isEqualPoint2D(this.m_workPoint2_2D);
  }
  isEqualXYPoint2D(t2, e) {
    return this.queryXY(t2, this.m_workPoint2D), this.m_workPoint2D.isEqualPoint2D(e);
  }
  isEqualXYZPoint3D(t2, e) {
    return n(0), false;
  }
  setWeight(t2, e) {
    e < 1 && (e = 1);
    const s3 = 1 === e;
    if (null == this.m_weights) {
      if (s3) return;
      this.m_weights = $2(this.m_vertices.getPointCount(), 1);
    }
    const n4 = this.getVertexIndex(t2);
    if (n4 >= this.m_weights.size()) {
      if (s3) return;
      this.m_weights.resize(n4 + 1, 1);
    }
    this.m_weights.write(n4, e);
  }
  setWeightWithIndex(t2, e) {
    e < 1 && (e = 1);
    const s3 = 1 === e;
    if (null === this.m_weights) {
      if (s3) return;
      this.m_weights = $2(this.m_vertices.getPointCount(), 1);
    }
    if (t2 >= this.m_weights.size()) {
      if (s3) return;
      this.m_weights.resize(t2 + 1, 1);
    }
    this.m_weights.write(t2, e);
  }
  getWeight(t2) {
    if (null === this.m_weights) return 1;
    const e = this.getVertexIndex(t2);
    return e >= this.m_weights.size() ? 1 : this.m_weights.read(e);
  }
  getWeightWithIndex(t2) {
    return null === this.m_weights || t2 >= this.m_weights.size() ? 1 : this.m_weights.read(t2);
  }
  getRank(t2) {
    if (null === this.m_ranks) return dr;
    const e = this.getVertexIndex(t2);
    return e >= this.m_ranks.size() ? dr : this.m_ranks.read(e);
  }
  getRankWithIndex(t2) {
    return null === this.m_ranks || t2 >= this.m_ranks.size() ? dr : this.m_ranks.read(t2);
  }
  setRank(t2, e) {
    e < dr && (e = dr);
    const s3 = e === dr;
    if (null === this.m_ranks) {
      if (s3) return;
      this.m_ranks = J2(this.m_vertices.getPointCount(), dr);
    }
    const n4 = this.getVertexIndex(t2);
    if (n4 >= this.m_ranks.size()) {
      if (s3) return;
      this.m_ranks.resize(n4 + 1, dr);
    }
    this.m_ranks.write(n4, e);
  }
  setRankWithIndex(t2, e) {
    e < dr && (e = dr);
    const s3 = e === dr;
    if (null === this.m_ranks) {
      if (s3) return;
      this.m_ranks = J2(this.m_vertices.getPointCount(), dr);
    }
    if (t2 >= this.m_ranks.size()) {
      if (s3) return;
      this.m_ranks.resize(t2 + 1, dr);
    }
    this.m_ranks.write(t2, e);
  }
  setSegmentWeight(t2, e) {
    e < 1 && (e = 1);
    const s3 = 1 === e;
    if (null === this.m_segmentWeights) {
      if (s3) return;
      this.m_segmentWeights = $2(this.m_vertices.getPointCount(), 1);
    }
    const n4 = this.getVertexIndex(t2);
    if (n4 >= this.m_segmentWeights.size()) {
      if (s3) return;
      this.m_segmentWeights.resize(n4 + 1, 1);
    }
    this.m_segmentWeights.write(n4, e);
  }
  setSegmentWeightWithIndex(t2, e) {
    e < 1 && (e = 1);
    const s3 = 1 === e;
    if (null == this.m_segmentWeights) {
      if (s3) return;
      this.m_segmentWeights = $2(this.m_vertices.getPointCount(), 1);
    }
    if (t2 >= this.m_segmentWeights.size()) {
      if (s3) return;
      this.m_segmentWeights.resize(t2 + 1, 1);
    }
    this.m_segmentWeights.write(t2, e);
  }
  getSegmentWeight(t2) {
    if (null === this.m_segmentWeights) return 1;
    const e = this.getVertexIndex(t2);
    return e >= this.m_segmentWeights.size() ? 1 : this.m_segmentWeights.read(e);
  }
  getSegmentWeightWithIndex(t2) {
    return null == this.m_segmentWeights || t2 >= this.m_segmentWeights.size() ? 1 : this.m_segmentWeights.read(t2);
  }
  getSegmentRank(t2) {
    if (null === this.m_segmentRanks) return _yr.st_defaultRank;
    const e = this.getVertexIndex(t2);
    return e >= this.m_segmentRanks.size() ? _yr.st_defaultRank : this.m_segmentRanks.read(e);
  }
  getSegmentRankWithIndex(t2) {
    return null === this.m_segmentRanks || t2 >= this.m_segmentRanks.size() ? dr : this.m_segmentRanks.read(t2);
  }
  setSegmentRank(t2, e) {
    e < dr && (e = dr);
    const s3 = e === dr;
    if (null === this.m_segmentRanks) {
      if (s3) return;
      this.m_segmentRanks = J2(this.m_vertices.getPointCount(), dr);
    }
    const n4 = this.getVertexIndex(t2);
    if (n4 >= this.m_segmentRanks.size()) {
      if (s3) return;
      this.m_segmentRanks.resize(n4 + 1, dr);
    }
    this.m_segmentRanks.write(n4, e);
  }
  setSegmentRankWithIndex(t2, e) {
    e < dr && (e = dr);
    const s3 = e === dr;
    if (null === this.m_segmentRanks) {
      if (s3) return;
      this.m_segmentRanks = J2(this.m_vertices.getPointCount(), dr);
    }
    if (t2 >= this.m_segmentRanks.size()) {
      if (s3) return;
      this.m_segmentRanks.resize(t2 + 1, dr);
    }
    this.m_segmentRanks.write(t2, e);
  }
  removeWeights() {
    this.m_weights = null, this.m_segmentWeights = null;
  }
  removeRanks() {
    this.m_ranks = null, this.m_segmentRanks = null;
  }
  setUserIndex(t2, e, s3) {
    const n4 = this.m_indices[e], i = this.getVertexIndex(t2);
    if (n4.size() <= i) {
      if (-1 === s3) return;
      n4.resize(this.m_vertices.getPointCount(), -1);
    }
    n4.write(i, s3);
  }
  getUserIndex(t2, e) {
    const s3 = this.getVertexIndex(t2), n4 = this.m_indices[e];
    if (s3 < n4.size()) {
      return n4.read(s3);
    }
    return -1;
  }
  addToUserIndex(t2, e, s3) {
    const n4 = this.m_indices[e], i = this.getVertexIndex(t2);
    n4.size() <= i && n4.resize(this.m_vertices.getPointCount(), -1);
    const r = n4.read(i);
    n4.write(i, r + s3);
  }
  createUserIndex() {
    for (let e = 0; e < this.m_indices.length; e++) if (null === this.m_indices[e]) return this.m_indices[e] = this.allocateIndex(), e;
    this.m_indices.push(this.allocateIndex());
    const t2 = this.m_indices.length - 1;
    return n(t2 >= 0 && t2 <= ds()), t2;
  }
  createUserIndexUninitialized() {
    for (let e = 0; e < this.m_indices.length; e++) if (null === this.m_indices[e]) return this.m_indices[e] = this.allocateIndex(false), e;
    this.m_indices.push(this.allocateIndex(false));
    const t2 = this.m_indices.length - 1;
    return n(t2 >= 0 && t2 <= Number.MAX_SAFE_INTEGER), t2;
  }
  fillUserIndexForGeometry(t2, e, s3) {
    const n4 = this.m_indices[e], i = n4.size();
    for (let r = this.getFirstPath(t2); r !== gr; r = this.getNextPath(r)) {
      let t3 = this.getFirstVertex(r);
      for (let e2 = 0, o = this.getPathSize(r); e2 < o; e2++, t3 = this.getNextVertex(t3)) {
        const e3 = this.getVertexIndex(t3);
        e3 < i && n4.write(e3, s3);
      }
    }
  }
  fillUserIndexForSelection(t2, e) {
    n(0);
  }
  removeUserIndex(t2) {
    for (this.recycleUserIndex(this.m_indices[t2]), this.m_indices[t2] = null; this.m_indices.length > 0 && null === this.m_indices[this.m_indices.length - 1]; ) this.m_indices.pop();
  }
  replaceCurveWithLine(t2) {
    if (null !== this.m_segments) {
      const e = this.getVertexIndex(t2);
      this.setSegmentToIndex(e, null);
    }
  }
  queryLineConnector(t2, e, s3 = false) {
    const n4 = this.getNextVertex(t2);
    if (n4 === gr) return false;
    if (!this.m_bHasAttributes || s3) {
      const s4 = this.getXY(t2);
      e.setStartXY(s4);
      const i = this.getXY(n4);
      e.setEndXY(i);
    } else {
      const s4 = new se({ vd: this.getVertexDescription() });
      this.queryPoint(t2, s4), e.setStart(s4), this.queryPoint(n4, s4), e.setEnd(s4);
    }
    return true;
  }
  queryLineConnector3D(t2, e, n4 = false) {
    return n(0), false;
  }
  hasCurves() {
    return null !== this.m_segments;
  }
  geometryHasCurves(t2) {
    return n(0), false;
  }
  pathHasCurves(t2) {
    if (!this.hasCurves()) return false;
    const e = this.getFirstVertex(t2);
    if (e === gr) return false;
    const s3 = this.getPathSize(t2);
    let n4 = e;
    for (let r = 0; r < s3; r++, n4 = this.getNextVertex(n4)) {
      const t3 = this.getSegment(n4);
      if (null !== t3 && t3.getGeometryType() !== a.enumLine) return true;
    }
    return false;
  }
  insertPath(t2, s3) {
    let n4 = gr;
    s3 !== gr ? (t2 !== this.getGeometryFromPath(s3) && P(""), n4 = this.getPrevPath(s3)) : n4 = this.getLastPath(t2);
    const i = this.newPath(t2);
    return s3 !== gr && this.setPrevPath(s3, i), this.setNextPath(i, s3), this.setPrevPath(i, n4), n4 !== gr ? this.setNextPath(n4, i) : this.setFirstPath(t2, i), s3 === gr && this.setLastPath(t2, i), this.setGeometryPathCount(t2, this.getPathCount(t2) + 1), i;
  }
  removePath(t2) {
    const e = this.getPrevPath(t2), s3 = this.getNextPath(t2), n4 = this.getGeometryFromPath(t2);
    return e !== gr ? this.setNextPath(e, s3) : this.setFirstPath(n4, s3), s3 !== gr ? this.setPrevPath(s3, e) : this.setLastPath(n4, e), this.clearPath(t2), this.setGeometryPathCount(n4, this.getPathCount(n4) - 1), this.freePath(t2), s3;
  }
  clearPath(t2) {
    const e = this.getFirstVertex(t2);
    if (e !== gr) {
      let s3 = e;
      for (let e2 = 0, i = this.getPathSize(t2); e2 < i; e2++) {
        const t3 = s3;
        s3 = this.getNextVertex(s3), this.freeVertex(t3);
      }
      const n4 = this.getGeometryFromPath(t2);
      this.setGeometryVertexCount(n4, this.getPointCount(n4) - this.getPathSize(t2));
    }
    this.setPathSize(t2, 0);
  }
  getNextPath(t2) {
    return this.m_pathIndexList.getField(t2, 2);
  }
  getPrevPath(t2) {
    return this.m_pathIndexList.getField(t2, 1);
  }
  getPathSize(t2) {
    return this.m_pathIndexList.getField(t2, 3);
  }
  isClosedPath(t2) {
    return !!(1 & this.getPathFlags(t2));
  }
  setClosedPath(t2, e) {
    if (this.isClosedPath(t2) === e) return;
    if (this.getPathSize(t2) > 0) {
      const s4 = this.getFirstVertex(t2), n4 = this.getLastVertex(t2);
      if (e) {
        this.setNextVertex(n4, s4), this.setPrevVertex(s4, n4);
        const t3 = this.getVertexIndex(n4);
        this.setSegmentToIndex(t3, null);
      } else {
        this.setNextVertex(n4, gr), this.setPrevVertex(s4, gr);
        const t3 = this.getVertexIndex(n4);
        this.setSegmentToIndex(t3, null);
      }
    }
    const s3 = (1 | this.getPathFlags(t2)) - 1;
    this.setPathFlags(t2, s3 | (e ? 1 : 0));
  }
  closeAllPaths(t2) {
    n(0);
  }
  isStrongPathStart(t2) {
    return !!(8 & this.getPathFlags(t2));
  }
  isStrongPathEnd(t2) {
    return !!(16 & this.getPathFlags(t2));
  }
  setStrongPathStart(t2, e) {
    const s3 = (8 | this.getPathFlags(t2)) - 8;
    this.setPathFlags(t2, s3 | (e ? 8 : 0));
  }
  setStrongPathEnd(t2, e) {
    const s3 = (16 | this.getPathFlags(t2)) - 16;
    this.setPathFlags(t2, s3 | (e ? 16 : 0));
  }
  getGeometryFromPath(t2) {
    return this.m_pathIndexList.getField(t2, 7);
  }
  isExterior(t2) {
    return !!(2 & this.getPathFlags(t2));
  }
  setExterior(t2, e) {
    const s3 = (2 | this.getPathFlags(t2)) - 2;
    this.setPathFlags(t2, s3 | (e ? 2 : 0));
  }
  getRingArea(t2) {
    if (this.isRingAreaValid(t2)) return this.m_pathAreas[this.getPathIndex(t2)];
    const e = this.getFirstVertex(t2);
    if (e === gr) return 0;
    const s3 = this.getXY(e), n4 = new n2(0), r = this.getPathSize(t2);
    if (r > 2) {
      const t3 = s3.clone(), i = t3.x, o2 = t3.y;
      let a2 = this.getNextVertex(e);
      const h2 = this.getXY(a2);
      a2 = this.getNextVertex(a2);
      const u = mi.getNAN();
      for (let e2 = 2; e2 < r; e2++, a2 = this.getNextVertex(a2)) this.queryXY(a2, u), n4.pe((u.x - t3.x) * (h2.y - o2)), t3.setCoordsPoint2D(h2), h2.setCoordsPoint2D(u);
      n4.pe((i - t3.x) * (h2.y - o2));
    }
    if (this.hasCurves()) {
      let t3 = e;
      for (let e2 = 0; e2 < r; e2++, t3 = this.getNextVertex(t3)) {
        const e3 = this.getSegment(t3);
        if (null === e3 || e3.getGeometryType() === a.enumLine) continue;
        const s4 = 2 * e3.calculateArea2DHelper();
        n4.pe(s4);
      }
    }
    this.setRingAreaValid(t2, true);
    const o = 0.5 * n4.getResult();
    return this.m_pathAreas[this.getPathIndex(t2)] = o, o;
  }
  getPathIndexInternal(t2) {
    return this.getPathIndex(t2);
  }
  getPathInternalIndexFromVertex(t2) {
    return this.getPathIndex(this.getPathFromVertex(t2));
  }
  setPathUserIndex(t2, e, s3) {
    const n4 = this.m_pathindices[e], i = this.getPathIndex(t2);
    n4.size() < this.m_pathAreas.length && n4.resize(this.m_pathAreas.length, -1), n4.write(i, s3);
  }
  getPathUserIndex(t2, e) {
    const s3 = this.getPathIndex(t2), n4 = this.m_pathindices[e];
    return s3 < n4.size() ? n4.read(s3) : -1;
  }
  createPathUserIndex() {
    for (let e = 0; e < this.m_pathindices.length; e++) if (null === this.m_pathindices[e]) return this.m_pathindices[e] = this.allocatePathIndex(), e;
    this.m_pathindices.push(this.allocatePathIndex());
    const t2 = this.m_pathindices.length - 1;
    return n(t2 >= 0 && t2 <= Number.MAX_SAFE_INTEGER), t2;
  }
  fillPathUserIndexForGeometry(t2, e, s3) {
    const n4 = this.m_pathindices[e], i = n4.size();
    for (let r = this.getFirstPath(t2); r !== gr; r = this.getNextPath(r)) {
      const t3 = this.getPathIndex(r);
      t3 < i && n4.write(t3, s3);
    }
  }
  removePathUserIndex(t2) {
    for (this.recyclePathUserIndex(this.m_pathindices[t2]), this.m_pathindices[t2] = null; this.m_pathindices.length > 0 && null === this.m_pathindices.at(-1); ) this.m_pathindices.pop();
  }
  movePath(t2, s3, n4) {
    if (n4 === gr && P(""), s3 === n4) return;
    const i = this.getNextPath(n4);
    let r = this.getPrevPath(n4);
    const o = this.getGeometryFromPath(n4);
    r === gr ? this.setFirstPath(o, i) : this.setNextPath(r, i), i === gr ? this.setLastPath(o, r) : this.setPrevPath(i, r), this.setGeometryVertexCount(o, this.getPointCount(o) - this.getPathSize(n4)), this.setGeometryPathCount(o, this.getPathCount(o) - 1), r = s3 === gr ? this.getLastPath(t2) : this.getPrevPath(s3), this.setPrevPath(n4, r), this.setNextPath(n4, s3), s3 === gr ? this.setLastPath(t2, n4) : this.setPrevPath(s3, n4), r === gr ? this.setFirstPath(t2, n4) : this.setNextPath(r, n4), this.setGeometryVertexCount(t2, this.getPointCount(t2) + this.getPathSize(n4)), this.setGeometryPathCount(t2, this.getPathCount(t2) + 1), this.setPathGeometry(n4, t2);
  }
  addVertex(t2, e) {
    this.m_vertices.getPointByVal(this.getVertexIndex(e), this.getHelperPoint());
    return this.insertVertex_(t2, gr, this.getHelperPoint(), false);
  }
  insertVertex(t2, e, s3) {
    return this.insertVertex_(t2, e, s3, true);
  }
  removeVertex(t2, e) {
    const s3 = this.getPathFromVertex(t2), n4 = this.getPrevVertex(t2), i = this.getNextVertex(t2);
    n4 !== gr && this.setNextVertex(n4, i);
    const r = this.getPathSize(s3);
    t2 === this.getFirstVertex(s3) && this.setFirstVertex(s3, r > 1 ? i : gr), i !== gr && this.setPrevVertex(i, n4), t2 === this.getLastVertex(s3) && this.setLastVertex(s3, r > 1 ? n4 : gr);
    if (this.hasCurves() && n4 !== gr && i !== gr) {
      const s4 = this.getVertexIndex(t2), r2 = this.getVertexIndex(n4), o2 = this.getVertexIndex(i);
      if (e) {
        const t3 = this.getSegmentFromIndex(r2);
        if (null !== t3) {
          const e2 = this.m_vertices.getXY(o2);
          t3.setEndXY(e2), t3.normalizeAfterEndpointChange();
        }
        this.setSegmentToIndex(s4, null);
      } else {
        const t3 = this.getSegmentFromIndex(s4);
        if (this.setSegmentToIndex(s4, null), null !== t3) {
          const e2 = this.m_vertices.getXY(r2);
          t3.setStartXY(e2), t3.normalizeAfterEndpointChange();
        }
        this.setSegmentToIndex(r2, t3);
      }
    }
    this.setPathSize(s3, r - 1);
    const o = this.getGeometryFromPath(s3);
    return this.setGeometryVertexCount(o, this.getPointCount(o) - 1), this.freeVertex(t2), i;
  }
  removeVertices(t2, e) {
    n(t2 !== e);
    const n4 = this.getPathFromVertex(t2), i = this.getPrevVertex(t2), r = this.getPrevVertex(e);
    i !== gr && this.setNextVertex(i, e);
    let o = this.getPathSize(n4);
    const a2 = this.getVertexIndex(t2);
    this.setSegmentToIndex(a2, null), this.setPrevVertex(e, i), this.setPrevVertex(t2, gr), this.setNextVertex(r, gr);
    let h2 = 0, u = t2;
    const m = this.getFirstVertex(n4);
    let l2 = false;
    for (; ; ) {
      const t3 = this.getNextVertex(u);
      if (l2 ||= m === u, this.freeVertex(u), h2++, u === r) break;
      u = t3;
    }
    o -= h2, l2 && this.setFirstVertex(n4, o > 0 ? e : gr), this.setPathSize(n4, o);
    const c = this.getGeometryFromPath(n4);
    this.setGeometryVertexCount(c, this.getPointCount(c) - h2);
  }
  getFirstVertex(t2) {
    return this.m_pathIndexList.getField(t2, 4);
  }
  getLastVertex(t2) {
    return this.m_pathIndexList.getField(t2, 5);
  }
  getNextVertex(t2) {
    return this.m_vertexIndexList.getField(t2, 2);
  }
  getPrevVertex(t2) {
    return this.m_vertexIndexList.getField(t2, 1);
  }
  getNextVertexEx(t2, e) {
    return e > 0 ? this.m_vertexIndexList.getField(t2, 2) : this.m_vertexIndexList.getField(t2, 1);
  }
  getPrevVertexEx(t2, e) {
    return e > 0 ? this.m_vertexIndexList.getField(t2, 1) : this.m_vertexIndexList.getField(t2, 2);
  }
  getPathFromVertex(t2) {
    return this.m_vertexIndexList.getField(t2, 3);
  }
  addPoint(t2, e) {
    return this.insertVertex_(t2, gr, e, false);
  }
  getGeometryFromVertex(t2) {
    return this.getGeometryFromPath(this.getPathFromVertex(t2));
  }
  replaceNaNs(t2, e) {
    this.m_vertexDescription.hasAttribute(t2) || b(""), this.m_vertices.replaceNaNs(t2, e);
  }
  removeNaNVertices() {
    for (let t2 = this.getFirstGeometry(); t2 !== gr; t2 = this.getNextGeometry(t2)) for (let e = this.getFirstPath(t2); e !== gr; e = this.getNextPath(e)) {
      let t3 = this.getFirstVertex(e);
      for (let s3 = 0, n4 = this.getPathSize(e); s3 < n4; s3++) t3 = this.getXY(t3).isFinite() ? this.getNextVertex(t3) : this.removeVertex(t3, true);
    }
  }
  queryVertexIterator(t2 = gr) {
    return this.queryVertexIteratorEx(false, t2);
  }
  queryVertexIteratorEx(t2, e = gr) {
    let s3 = gr, n4 = gr, i = gr, r = gr, o = 0, a2 = false;
    for (s3 = e !== gr ? e : this.getFirstGeometry(); s3 !== gr; s3 = this.getNextGeometry(s3)) if (!t2 || h(this.getGeometryType(s3))) {
      for (n4 = this.getFirstPath(s3); n4 !== gr; n4 = this.getNextPath(n4)) if (i = this.getFirstVertex(n4), r = i, o = 0, i !== gr) {
        a2 = true;
        break;
      }
      if (a2 || e !== gr) break;
    }
    return a2 || (s3 = gr), fr.create_(this, s3, n4, i, r, o, t2, false, e !== gr);
  }
  queryVertexIteratorOnSelection(t2 = gr) {
    return this.m_selection ? fr.create_(this, t2, gr, gr, gr, -1, false, true, t2 !== gr) : this.queryVertexIteratorEx(false, t2);
  }
  hasSelection() {
    return this.m_selection;
  }
  createEmptySelection() {
    n(0);
  }
  removeSelection() {
    this.m_selection && (this.m_selectedVertices.length = 0, this.removeUserIndex(this.m_selectionIndex), this.m_selectionIndex = -1, this.m_selection = false, this.m_selectedCount = 0);
  }
  select(t2) {
    return !!this.selected(t2) || (this.setUserIndex(t2, this.m_selectionIndex, this.m_selectedVertices.length), this.m_selectedVertices.push(t2), this.m_selectedCount++, false);
  }
  unselect(t2) {
    if (!this.m_selection) return;
    const e = this.getUserIndex(t2, this.m_selectionIndex);
    e >= 0 && (this.m_selectedVertices[e] = gr, this.setUserIndex(t2, this.m_selectionIndex, -1), this.m_selectedCount--);
  }
  selected(t2) {
    return !this.m_selection || this.selected_(t2);
  }
  getSelectedCount() {
    return this.m_selection ? this.m_selectedCount : this.getTotalPointCount();
  }
  createSelectionForCrackingAndClustering(t2, e) {
    return n(0), false;
  }
  peelALoop(t2, e) {
    this.peelALoop_(t2, e, false);
  }
  peelALoopIntoAPath(t2, e) {
    return this.peelALoop_(t2, e, true);
  }
  applyTransformation(t2) {
    if (this.m_verticesMp.applyTransformation(t2), null !== this.m_segments) for (let e = 0, s3 = this.m_segments.length; e < s3; e++) this.m_segments[e] && this.m_segments[e].applyTransformation(t2);
  }
  setGeometryType(t2, e) {
    this.m_geometryIndexList.setField(t2, 2, e);
  }
  splitSegmentWithIntersector(t2, e, s3, n4, i) {
    n4 ? this.splitSegmentForward(t2, e, s3, true, i) : this.splitSegmentBackward(t2, e, s3, true, i);
  }
  setPrevVertex(t2, e) {
    this.m_vertexIndexList.setField(t2, 1, e);
  }
  setNextVertex(t2, e) {
    this.m_vertexIndexList.setField(t2, 2, e);
  }
  setPathToVertex(t2, e) {
    this.m_vertexIndexList.setField(t2, 3, e);
  }
  setPathSize(t2, e) {
    this.m_pathIndexList.setField(t2, 3, e);
  }
  setFirstVertex(t2, e) {
    this.m_pathIndexList.setField(t2, 4, e);
  }
  setLastVertex(t2, e) {
    this.m_pathIndexList.setField(t2, 5, e);
  }
  getSegment(t2) {
    if (null != this.m_segments) {
      const e = this.getVertexIndex(t2);
      return this.getSegmentFromIndex(e);
    }
    return null;
  }
  isCurve(t2) {
    if (null === this.m_segments) return false;
    const e = this.getVertexIndex(t2);
    return this.m_segments.length > e && null !== this.m_segments[e];
  }
  querySegment(t2, e, s3 = true, n4 = false) {
    const i = this.getNextVertex(t2);
    if (i === gr) return false;
    const r = this.getSegment(t2);
    if (!r) return !s3 && (this.queryLineConnector(t2, e.createLine(), n4), true);
    if (e.copyFrom(r, true), n4) return true;
    if (this.m_vertexDescription.getAttributeCount() > 1) {
      const s4 = this.getHelperPoint();
      this.queryPoint(t2, s4), e.get().setStart(s4), this.queryPoint(i, s4), e.get().setEnd(s4);
    }
    return true;
  }
  getSegmentFromIndex(t2) {
    const e = null !== this.m_segments && this.m_segments.length > t2 ? this.m_segments[t2] : null;
    return e || null;
  }
  getAndClearSegmentFromIndex(t2) {
    const e = null !== this.m_segments && this.m_segments.length > t2 ? this.m_segments[t2] : null;
    return e || null;
  }
  setSegmentToIndex(t2, e) {
    if (this.m_hasForceSetEnvelope = 0, null === this.m_segments) {
      if (!e) return;
      this.m_segments = [], this.m_segments.length = this.m_vertices.getPointCount();
    }
    t2 >= this.m_segments.length && (this.m_segments.length = t2 + 1), this.m_segments[t2] = e;
  }
  setGeometryPathCount(t2, e) {
    this.m_geometryIndexList.setField(t2, 6, e);
  }
  setGeometryVertexCount(t2, e) {
    this.m_geometryIndexList.setField(t2, 5, e);
  }
  ringParentageCheckInternal(t2, e) {
    return n(0), false;
  }
  reverseRingInternal(t2) {
    const e = this.hasCurves(), s3 = this.hasSegmentParentage();
    let n4 = null, i = -1, r = t2;
    if (e) {
      const t3 = this.getVertexIndex(r);
      n4 = this.getAndClearSegmentFromIndex(t3);
    }
    s3 && (i = this.getSegmentParentage(r));
    do {
      const t3 = this.getPrevVertex(r), o = this.getNextVertex(r);
      if (this.setNextVertex(r, t3), this.setPrevVertex(r, o), e) {
        const t4 = this.getVertexIndex(o), e2 = this.getSegmentFromIndex(t4);
        n4 && n4.reverse(), this.setSegmentToIndex(t4, n4), n4 = e2;
      }
      if (s3) {
        const t4 = this.getSegmentParentage(o);
        this.setSegmentParentagePreserveBreak(o, i), i = t4;
      }
      r = o;
    } while (r !== t2);
    this.dbgVerifyIntegrity(t2);
  }
  setTotalPointCount(t2) {
    this.m_pointCount = t2;
  }
  removePathOnly(t2) {
    const e = this.getPrevPath(t2), s3 = this.getNextPath(t2), n4 = this.getGeometryFromPath(t2);
    e !== gr ? this.setNextPath(e, s3) : this.setFirstPath(n4, s3), s3 !== gr ? this.setPrevPath(s3, e) : this.setLastPath(n4, e), this.setFirstVertex(t2, gr), this.setLastVertex(t2, gr), this.freePath(t2);
  }
  insertClosedPath(t2, e, s3, n4, i) {
    const r = this.insertPath(t2, gr);
    let o = 0, a2 = s3;
    for (i[0] = false; ; ) {
      a2 === n4 && (i[0] = true), this.setPathToVertex(a2, r), o++;
      const t3 = this.getNextVertex(a2);
      if (t3 === s3) break;
      a2 = t3;
    }
    return this.setClosedPath(r, true), this.setPathSize(r, o), i[0] && (s3 = n4), this.setFirstVertex(r, s3), this.setLastVertex(r, this.getPrevVertex(s3)), this.setRingAreaValid(r, false), r;
  }
  findVertex2D(t2, e) {
    return n(0), 0;
  }
  findVertex3D(t2, e, n4) {
    return n(0), 0;
  }
  dbgVerifyMonotone() {
  }
  dbgCheckSelection() {
  }
  dbgVerifySegment(t2) {
  }
  dbgVerifyIntegrity(t2, e = true) {
  }
  dbgVerifyVertexCounts() {
  }
  dbgVerifyCurves() {
  }
  dbgDumpGeometry(t2, e) {
  }
  getNextNthVertex(t2, e) {
    if (0 === e) return t2;
    let s3 = t2;
    for (let n4 = 0; n4 < e; ++n4) if (s3 = e > 0 ? this.getNextVertex(s3) : this.getPrevVertex(s3), s3 === gr) return gr;
    return s3;
  }
  removeVertexInternal(t2, e) {
    const s3 = this.getPrevVertex(t2), n4 = this.getNextVertex(t2);
    s3 !== gr && this.setNextVertex(s3, n4), n4 !== gr && this.setPrevVertex(n4, s3);
    if (this.hasCurves() && s3 !== gr && n4 !== gr) {
      const i = this.getVertexIndex(t2), r = this.getVertexIndex(s3), o = this.getVertexIndex(n4);
      if (e) {
        const t3 = this.getSegmentFromIndex(r);
        if (null !== t3) {
          const e2 = this.m_vertices.getXY(o);
          t3.setEndXY(e2), t3.normalizeAfterEndpointChange();
        }
        this.setSegmentToIndex(i, null);
      } else {
        const t3 = this.getSegmentFromIndex(i);
        if (this.setSegmentToIndex(i, null), null !== t3) {
          const e2 = this.m_vertices.getXY(r);
          t3.setStartXY(e2), t3.normalizeAfterEndpointChange();
        }
        this.setSegmentToIndex(r, t3);
      }
    }
    return this.freeVertex(t2), n4;
  }
  isRingAreaValid(t2) {
    return !!(4 & this.getPathFlags(t2));
  }
  setRingAreaValid(t2, e) {
    const s3 = (4 | this.getPathFlags(t2)) - 4;
    this.setPathFlags(t2, s3 | (e ? 4 : 0));
  }
  compareVerticesSimpleY(t2, e) {
    return this.queryXY(t2, this.m_workPoint2D), this.queryXY(e, this.m_workPoint2_2D), this.m_workPoint2D.compare(this.m_workPoint2_2D);
  }
  compareVerticesSimpleY3D(t2, e) {
    return this.getXYZ(t2).compare(this.getXYZ(e));
  }
  compareVerticesSimpleX(t2, e) {
    return this.getXY(t2).compareX(this.getXY(e));
  }
  sortVerticesSimpleByYHeapMerge(t2, e) {
    n(0);
  }
  sortVerticesSimpleByY(t2, e, s3) {
    this.m_bucketSort.sort(t2, e, s3, new _r(this));
  }
  sortVerticesSimpleByX(t2, e, n4) {
    n(0);
  }
  sortVerticesSimpleByY3D(t2, e, n4) {
    n(0);
  }
  snapVertexForPoleClipping(t2, e) {
    const s3 = this.getPrevVertex(t2);
    s3 !== gr && this.replaceCurveWithLine(s3);
    this.getNextVertex(t2) !== gr && this.replaceCurveWithLine(t2);
    const n4 = new mi();
    this.queryXY(t2, n4), n4.y = e, this.setXY(t2, n4);
  }
  setSegmentParentageAndBreak(t2, e, n4 = true) {
    if (-1 === this.m_segmentParentageIndex) {
      if (-1 === e) return;
      this.m_segmentParentageIndex = this.createUserIndex();
    }
    e >= 0 && (n(e <= vs() >> 1), e <<= 1, e |= n4 ? 1 : 0), this.setUserIndex(t2, this.m_segmentParentageIndex, e);
  }
  setSegmentParentagePreserveBreak(t2, e) {
    if (n(e >= -1), -1 === this.m_segmentParentageIndex) {
      if (-1 === e) return;
      this.m_segmentParentageIndex = this.createUserIndex();
    }
    if (e >= 0) {
      n(e <= vs() >> 1), e <<= 1;
      e |= this.getSegmentParentageBreakVertex(t2) ? 1 : 0;
    }
    this.setUserIndex(t2, this.m_segmentParentageIndex, e);
  }
  getSegmentParentage(t2) {
    if (-1 === this.m_segmentParentageIndex) return -1;
    const e = this.getUserIndex(t2, this.m_segmentParentageIndex);
    return e < 0 ? e : e >> 1;
  }
  getOriginalSegmentInfo(t2) {
    if (-1 !== this.m_segmentParentageIndex) {
      const e = this.getSegmentParentage(t2);
      return new Pr(e);
    }
    return new Pr(-1);
  }
  setSegmentParentageBreakVertex(t2, e) {
    if (-1 === this.m_segmentParentageIndex) return;
    let s3 = this.getUserIndex(t2, this.m_segmentParentageIndex);
    s3 < 0 || !!(1 & s3) !== e && (e ? s3 |= 1 : s3 &= vs() >> 1 << 1, this.setUserIndex(t2, this.m_segmentParentageIndex, s3));
  }
  getSegmentParentageBreakVertex(t2) {
    if (-1 === this.m_segmentParentageIndex) return true;
    const e = this.getUserIndex(t2, this.m_segmentParentageIndex);
    return e < 0 || !!(1 & e);
  }
  isDiscontinuousSegmentParentage(t2) {
    const e = this.getPrevVertex(t2);
    if (e === gr) return false;
    return this.getSegmentParentage(e) !== this.getSegmentParentage(t2);
  }
  setCurveStitcherPointer(t2) {
    this.m_curveStitcher = t2;
  }
  hasSegmentParentage() {
    return -1 !== this.m_segmentParentageIndex;
  }
  deleteSegmentParentage() {
    -1 !== this.m_segmentParentageIndex && (this.removeUserIndex(this.m_segmentParentageIndex), this.m_segmentParentageIndex = -1), this.m_curveStitcher = null;
  }
  clearSegments() {
    this.m_segments = null;
  }
};
function xr(t2) {
  if (t2.isEmpty()) return new mr({ vd: t2.getDescription() });
  if (h(t2.getGeometryType()) && t2.hasNonLinearSegments()) return vr(t2);
  const e = t2.getImpl(), s3 = e.getPointCount();
  if (s3 <= 2) {
    if (1 === s3 || e.getXY(0).equals(e.getXY(1))) {
      const t3 = new se({ vd: e.getDescription() });
      return e.getPointByVal(0, t3), t3;
    }
    {
      const t3 = new se(), s4 = new Qs2({ vd: e.getDescription() });
      return e.getPointByVal(0, t3), s4.startPathPoint(t3), e.getPointByVal(1, t3), s4.lineToPoint(t3), s4;
    }
  }
  const n4 = e.getAttributeStreamRef(0), i = new Ar({ stream: n4, n: s3 });
  let r = 0, o = 1;
  const a2 = n4.readPoint2D(r << 1), h2 = new mi();
  for (; o < s3 && n4.queryPoint2D(o << 1, h2).equals(a2); ) o++;
  if (i.m_treeHull.addElement(r), o < s3) {
    i.m_treeHull.addBiggestElement(o);
    const t3 = new mi();
    for (let s4 = o + 1; s4 < e.getPointCount(); s4++) {
      n4.queryPoint2D(s4 << 1, t3);
      const e2 = i.treeHull(t3);
      -1 !== e2 && i.m_treeHull.setElement(e2, s4);
    }
  }
  const u = e.getDescription(), m = u.getAttributeCount() > 1, l2 = i.m_treeHull.size();
  let g2 = null;
  if (l2 >= 2) {
    g2 = l2 >= 3 ? new mr({ vd: u }) : new Qs2({ vd: u });
    const t3 = g2.getImpl();
    t3.reserve(i.m_treeHull.size()), t3.addPathPoint2D(null, 0, true);
    const s4 = new mi();
    for (let r2 = i.m_treeHull.getFirst(); -1 !== r2; r2 = i.m_treeHull.getNext(r2)) if (m) {
      const s5 = new se();
      e.getPointByVal(i.m_treeHull.getElement(r2), s5), t3.insertPoint(0, -1, s5);
    } else n4.queryPoint2D(i.m_treeHull.getElement(r2) << 1, s4), t3.insertPoint2D(0, -1, s4);
  } else if (m) {
    const t3 = new se({ vd: u });
    e.getPointByVal(i.m_treeHull.getElement(i.m_treeHull.getFirst()), t3), g2 = t3;
  } else {
    const t3 = n4.readPoint2D(i.m_treeHull.getElement(i.m_treeHull.getFirst()) << 1);
    g2 = new se(t3);
  }
  return g2;
}
function Cr(t2, e, s3, n4 = false) {
  if (e <= 262144) return Mr(t2, e, s3, n4);
  const i = new Ar({ points: t2, n: e }), r = 0;
  let o = 1;
  const a2 = t2[r];
  for (; o < e && t2[o].equals(a2); ) o++;
  if (i.m_treeHull.addElement(r), o < e) {
    i.m_treeHull.addBiggestElement(o);
    for (let s4 = o + 1; s4 < e; s4++) {
      const e2 = t2[s4], n5 = i.treeHull(e2);
      -1 !== n5 && i.m_treeHull.setElement(n5, s4);
    }
  }
  let h2 = 0;
  for (let u = i.m_treeHull.getFirst(); -1 !== u; u = i.m_treeHull.getNext(u)) s3[h2++] = i.m_treeHull.getElement(u);
  return h2;
}
function vr(t2) {
  n(t2.hasNonLinearSegments() && !t2.isEmpty());
  const e = new Ar();
  return e.addGeometry(t2), e.getBoundingGeometry();
}
function br(t2, s3, n4) {
  if ((s3 < 0 || s3 >= t2.getPathCount()) && P("path index"), t2.hasNonLinearSegmentsPath(s3)) return false;
  const i = t2.getImpl(), r = i.getPathStart(s3), o = i.getPathEnd(s3), a2 = !i.isClosedPath(s3) && i.isClosedPathInXYPlane(s3), h2 = i.getAttributeStreamRef(0), u = 2 * r;
  let m = 2 * o;
  if (a2 && (m -= 2), m - u < 6) return true;
  const l2 = h2.readPoint2D(u), c = h2.readPoint2D(u + 2), g2 = h2.readPoint2D(u + 4);
  if (!Yr(mi.orientationRobust(c, g2, l2))) return false;
  const d = c.clone(), _ = new mi();
  for (let e = u + 6; e < m; e += 2) {
    _.assign(c), c.assign(g2), h2.queryPoint2D(e, g2);
    if (!Yr(mi.orientationRobust(c, g2, l2))) return false;
    if (!Yr(mi.orientationRobust(d, g2, l2))) return false;
    if (!Yr(mi.orientationRobust(c, g2, _))) return false;
  }
  return true;
}
function Sr(t2, e, s3) {
  t2.setNAN(), e.setCoords(1, 0), s3.setCoords(0, 0);
}
function Er(t2, e, s3, n4, r) {
  if (Sr(s3, n4, r), t2.isEmpty()) return;
  if (t2.getGeometryType() === a.enumPoint) return void s3.assign(t2.getXY());
  const o = t2, a2 = o.getPointCount();
  0 !== a2 && (1 !== a2 ? Dr(o, a2, e, s3, n4, r) : s3.assign(o.getXY(0)));
}
function Dr(t2, e, s3, n4, i, r) {
  if (2 === e) {
    const e2 = t2.getXY(0), s4 = t2.getXY(1);
    n4.assign(e2.add(s4).mul(0.5));
    const o = s4.sub(e2);
    i = qr(o), r.setCoords(0.5 * o.length(), 0);
  } else {
    let o = Number.MAX_VALUE;
    const a2 = [0, 1, 0, 0], h2 = new Xt(4, 2);
    for (h2.set(0, 0, 0), h2.set(0, 1, 1), h2.set(1, 0, 1), h2.set(1, 1, 2); a2[0] < e; ++a2[0], Fr(h2, 0, e)) {
      a2[1] === a2[0] && (++a2[1], Fr(h2, 1, e));
      for (let s4 = 1; ; ++s4) {
        for (; ; ) {
          const n5 = Vr(t2.getXY(h2.get(0, 0)), t2.getXY(h2.get(0, 1)), t2.getXY(h2.get(s4, 0)), t2.getXY(h2.get(s4, 1)), 2 ^ s4);
          if (n5 > 0) break;
          if (++a2[s4], Fr(h2, s4, e), 0 === n5) break;
        }
        if (3 === s4) break;
        a2[s4 + 1] < a2[s4] && (a2[s4 + 1] = a2[s4], h2.set(s4 + 1, 0, h2.get(s4, 0)), h2.set(s4 + 1, 1, h2.get(s4, 1)));
      }
      const u = t2.getXY(h2.get(0, 0)).add(t2.getXY(h2.get(2, 0))).mul(0.5), m = qr(t2.getXY(h2.get(0, 1)).sub(t2.getXY(h2.get(0, 0)))), l2 = new mi();
      let c, g2;
      if (l2.x = Math.max(0, m.dotProduct(t2.getXY(h2.get(1, 0)).sub(t2.getXY(h2.get(3, 0))))), l2.y = Math.max(0, m.crossProduct(t2.getXY(h2.get(0, 0)).sub(t2.getXY(h2.get(2, 0))))), s3 ? (c = l2.x * l2.y, g2 = c < o) : (c = l2.y, g2 = c < o), g2) {
        o = c;
        const e2 = t2.getXY(h2.get(1, 0)), s4 = t2.getXY(h2.get(3, 0)), a3 = e2.add(s4).mul(0.5).sub(u);
        n4.assign(u.add(m.mul(m.dotProduct(a3)))), i.assign(m), r.assign(l2);
      }
    }
    r.mulThis(0.5), r.x < r.y && (r.y = Pt(r.x, r.x = r.y), i.leftPerpendicularThis());
  }
  i.y < 0 ? i.negateThis() : 0 === i.y && (i.x = 1);
}
yr.st_defaultRank = 1;
var wr = class {
  constructor(t2) {
    this.m_handleP = -1, this.m_handleQ = -1, this.m_currentSupport = -1, this.m_area = 0, this.m_bDone = true, n(0), this.m_convexHull = t2, this.m_function = this.done_;
  }
  next() {
    return n(0), false;
  }
  get_vertex_handle_p() {
    return n(0), 0;
  }
  get_vertex_handle_q() {
    return n(0), 0;
  }
  get_current_support() {
    return n(0), 0;
  }
  getNext(t2) {
    return n(0), 0;
  }
  getPrev(t2) {
    return n(0), 0;
  }
  intialize_() {
    return n(0), false;
  }
  increment_() {
    return n(0), false;
  }
  increment_q_() {
    return n(0), false;
  }
  increment_p_() {
    return n(0), false;
  }
  parallel_edge_with_q_support_() {
    return n(0), false;
  }
  parallel_edge_with_p_support_() {
    return n(0), false;
  }
  done_() {
    return n(0), false;
  }
};
var Ar = class _Ar {
  nullGetXY(t2) {
    return b("m_getXY is null"), {};
  }
  nullDeleteNode(t2) {
    b("m_deleteNode is null");
  }
  constructor(t2) {
    return this.m_treeHull = new pt(), this.m_shape = null, this.m_stream = null, this.m_points = null, this.m_geometryHandle = -1, this.m_pathHandle = -1, this.m_getXY = this.nullGetXY, this.m_deleteNode = this.nullDeleteNode, t2 ? t2.stream ? (this.m_treeHull.setCapacity(Math.min(20, t2.n)), this.m_stream = t2.stream, this.m_getXY = this.getXYStream, this.m_deleteNode = this.deleteNodeStream, this.m_points = null, this.m_geometryHandle = gr, void (this.m_pathHandle = gr)) : t2.points ? (this.m_treeHull.setCapacity(Math.min(20, t2.n)), this.m_points = t2.points, this.m_getXY = this.getXYPoints, this.m_deleteNode = this.deleteNodePoints, this.m_stream = null, this.m_geometryHandle = gr, void (this.m_pathHandle = gr)) : void C("unrecognized constructor parameter") : (this.m_treeHull.setCapacity(20), this.m_shape = new yr(), this.m_geometryHandle = this.m_shape.createGeometry(a.enumMultiPoint), this.m_pathHandle = this.m_shape.insertPath(this.m_geometryHandle, gr), this.m_getXY = this.getXYShape, this.m_deleteNode = this.deleteNodeShape, this.m_stream = null, void (this.m_points = null));
  }
  getXYShape(t2) {
    return this.m_shape.getXY(t2);
  }
  getXYStream(t2) {
    return this.m_stream.readPoint2D(t2 << 1);
  }
  getXYPoints(t2) {
    return n(0), new mi();
  }
  deleteNodeShape(t2) {
    const e = this.m_treeHull.getElement(t2);
    this.m_treeHull.deleteNode(t2), this.m_shape.removeVertex(e, false);
  }
  deleteNodeStream(t2) {
    this.m_treeHull.deleteNode(t2);
  }
  deleteNodePoints(t2) {
    n(0);
  }
  addGeometry(s3) {
    if (s3.isEmpty()) return;
    const n4 = s3.getGeometryType();
    if (n4 === a.enumGeometryCollection) {
      const t2 = s3;
      for (let e = 0, s4 = t2.getGeometryCount(); e < s4; e++) this.addGeometry(t2.getGeometry(e));
    } else y(n4) ? this.addMultiVertexGeometry(s3) : f(n4) ? this.addSegment(s3, false) : n4 === a.enumEnvelope ? this.addEnvelope(s3) : n4 === a.enumPoint ? this.addPoint(s3) : P("Convex_hull: geometry not supported");
  }
  getBoundingGeometry() {
    const t2 = new se(), e = this.m_treeHull.getFirst(), s3 = new mr({ vd: this.m_shape.getVertexDescription() });
    if (0 === this.m_treeHull.size()) return s3;
    s3.reserve(this.m_treeHull.size()), this.m_shape.queryPoint(this.m_treeHull.getElement(e), t2), s3.startPathPoint(t2);
    for (let n4 = this.m_treeHull.getNext(e); -1 !== n4; n4 = this.m_treeHull.getNext(n4)) this.m_shape.queryPoint(this.m_treeHull.getElement(n4), t2), s3.lineToPoint(t2);
    return s3;
  }
  getAntipodalPairsIterator() {
    return n(0), new wr(this);
  }
  getXY(t2) {
    return n(0), new mi();
  }
  getXYWithIndex(t2) {
    return n(0), new mi();
  }
  getFirst() {
    return n(0), 0;
  }
  getLast() {
    return n(0), 0;
  }
  getNext(t2) {
    return n(0), 0;
  }
  getPrev(t2) {
    return n(0), 0;
  }
  getVertexIndex(t2) {
    return n(0), 0;
  }
  getPointCount() {
    return n(0), 0;
  }
  addMultiVertexGeometry(t2) {
    const e = new se(), s3 = t2.getImpl(), n4 = new mi();
    for (let i = 0; i < t2.getPointCount(); i++) {
      s3.queryXY(i, n4);
      const r = this.addPoint2D(n4);
      if (-1 !== r) {
        t2.getPointByVal(i, e);
        const s4 = this.m_shape.addPoint(this.m_pathHandle, e);
        this.m_treeHull.setElement(r, s4);
      }
    }
    if (h(t2.getGeometryType())) {
      const e2 = t2;
      if (e2.hasNonLinearSegments()) {
        const t3 = e2.querySegmentIterator();
        for (; t3.nextPath(); ) for (; t3.hasNextSegment(); ) {
          const e3 = t3.nextCurve();
          null !== e3 && this.addSegment(e3, true);
        }
      }
    }
  }
  addEnvelope(t2) {
    const e = new se();
    for (let s3 = 0; s3 < 4; s3++) {
      const n4 = new mi();
      t2.queryCorner(s3, n4);
      const i = this.addPoint2D(n4);
      if (-1 !== i) {
        t2.queryCornerByVal(s3, e);
        const n5 = this.m_shape.addPoint(this.m_pathHandle, e);
        this.m_treeHull.setElement(i, n5);
      }
    }
  }
  static querySegmentControlPoints(t2, n4, r) {
    const o = t2.getGeometryType();
    if (n(o !== a.enumLine), o === a.enumEllipticArc) {
      const e = t2, s3 = 60 * Math.PI / 180, i = Math.abs(e.getSweepAngle());
      if (i > s3) {
        const t3 = Math.min(6, Math.ceil(i / s3)), r2 = 1 / t3, o2 = new Pm();
        e.queryStart(n4[0]);
        let a2 = 1;
        for (let s4 = 0; s4 < t3; s4++) {
          e.queryCut(s4 * r2, (s4 + 1) * r2, o2);
          const i2 = Ot(mi, 3);
          ku(o2.get(), i2);
          const h2 = mi.calculateLength(i2, 3), u = mi.calculateLength(i2, 2), m = h2 > 0 ? u / h2 : 0.5;
          s4 < t3 - 1 ? o2.get().queryEnd(n4[a2 + 1]) : e.queryEnd(n4[a2 + 1]), se.lerp(n4[a2 - 1], n4[a2 + 1], m, n4[a2]), n4[a2].setXY(i2[1]), a2 += 2;
        }
        return a2;
      }
      {
        const e2 = Ot(mi, 3);
        ku(t2, e2);
        const s4 = mi.calculateLength(e2, 3);
        t2.queryStart(n4[0]), t2.queryEnd(n4[2]);
        const i2 = mi.calculateLength(e2, 2), r2 = s4 > 0 ? i2 / s4 : 0.5;
        return se.lerp(n4[0], n4[2], r2, n4[1]), n4[1].setXY(e2[1]), 3;
      }
    }
    if (o === a.enumBezier) {
      const e = t2, s3 = Ot(mi, 4);
      e.queryControlPoints(s3);
      const i = mi.calculateLength(s3, 4), r2 = mi.calculateLength(s3, 2), o2 = mi.calculateLength(s3, 3);
      t2.queryStart(n4[0]), t2.queryEnd(n4[3]);
      const a2 = i > 0 ? r2 / i : 0.5;
      se.lerp(n4[0], n4[3], a2, n4[1]), n4[1].setXY(s3[1]);
      const h2 = i > 0 ? o2 / i : 0.5;
      return se.lerp(n4[0], n4[3], h2, n4[2]), n4[2].setXY(s3[2]), 4;
    }
    if (o === a.enumBezier2) {
      const e = t2, s3 = Ot(mi, 3);
      e.queryControlPoints(s3);
      const i = mi.calculateLength(s3, 3);
      t2.queryStart(n4[0]), t2.queryEnd(n4[2]);
      const r2 = mi.calculateLength(s3, 2), o2 = i > 0 ? r2 / i : 0.5;
      return se.lerp(n4[0], n4[2], o2, n4[1]), n4[1].setXY(s3[1]), 3;
    }
    if (o === a.enumRationalBezier2) {
      const e = t2, s3 = Ot(mi, 3);
      e.queryControlPoints(s3);
      const i = mi.calculateLength(s3, 3);
      t2.queryStart(n4[0]), t2.queryEnd(n4[2]);
      const r2 = mi.calculateLength(s3, 2), o2 = i > 0 ? r2 / i : 0.5;
      return se.lerp(n4[0], n4[2], o2, n4[1]), n4[1].setXY(s3[1]), 3;
    }
    P("Convex_hull: segment type not supported");
  }
  addSegment(t2, e) {
    if (!e) {
      const e2 = new se(), s3 = t2.getStartXY(), n4 = this.addPoint2D(s3);
      if (-1 !== n4) {
        t2.queryStart(e2);
        const s4 = this.m_shape.addPoint(this.m_pathHandle, e2);
        this.m_treeHull.setElement(n4, s4);
      }
      const i = t2.getEndXY(), r = this.addPoint2D(i);
      if (-1 !== r) {
        t2.queryEnd(e2);
        const s4 = this.m_shape.addPoint(this.m_pathHandle, e2);
        this.m_treeHull.setElement(r, s4);
      }
    }
    if (t2.isCurve()) {
      const e2 = Ot(se, 13);
      for (let s3 = 1, n4 = _Ar.querySegmentControlPoints(t2, e2, e2.length) - 1; s3 < n4; ++s3) {
        const t3 = e2[s3].getXY(), n5 = this.addPoint2D(t3);
        if (-1 !== n5) {
          const t4 = this.m_shape.addPoint(this.m_pathHandle, e2[s3]);
          this.m_treeHull.setElement(n5, t4);
        }
      }
    }
  }
  addPoint(t2) {
    const e = t2.getXY(), s3 = this.addPoint2D(e);
    if (-1 !== s3) {
      const e2 = this.m_shape.addPoint(this.m_pathHandle, t2);
      this.m_treeHull.setElement(s3, e2);
    }
  }
  addPoint2D(t2) {
    let e = -1;
    if (0 === this.m_treeHull.size()) return e = this.m_treeHull.addElement(-4), e;
    if (1 === this.m_treeHull.size()) {
      const s3 = this.m_treeHull.getElement(this.m_treeHull.getFirst()), n4 = this.m_shape.getXY(s3);
      return t2.equals(n4) || (e = this.m_treeHull.addBiggestElement(-5)), e;
    }
    return e = this.treeHull(t2), e;
  }
  treeHull(t2) {
    let e = -1;
    do {
      const s3 = this.m_treeHull.getFirst(), n4 = this.m_treeHull.getLast(), i = this.m_treeHull.getElement(s3), r = this.m_treeHull.getElement(n4), o = this.m_getXY(i), a2 = this.m_getXY(r), h2 = mi.orientationRobust(a2, t2, o);
      if (Yr(h2)) {
        e = this.m_treeHull.addBiggestElement(-1);
        const i2 = this.treeHullWalkBackward(t2, n4, s3);
        i2 !== s3 && this.treeHullWalkForward(t2, s3, this.m_treeHull.getPrev(i2));
        break;
      }
      if (Nr(h2)) {
        let i2 = this.m_treeHull.getRoot(), r2 = this.m_treeHull.getFirst(), a3 = this.m_treeHull.getLast(), h3 = -1, u = -1, m = -1;
        for (; r2 !== this.m_treeHull.getPrev(a3); ) {
          u = this.m_treeHull.getElement(i2);
          const e2 = this.m_getXY(u);
          Nr(mi.orientationRobust(e2, t2, o)) ? (a3 = i2, i2 = this.m_treeHull.getLeft(i2)) : (r2 = i2, i2 = this.m_treeHull.getRight(i2));
        }
        i2 = a3, h3 = r2, u = this.m_treeHull.getElement(i2), m = this.m_treeHull.getElement(h3);
        const l2 = this.m_getXY(u), c = this.m_getXY(m);
        if (h3 !== s3) {
          if (!Yr(mi.orientationRobust(c, t2, l2))) break;
        }
        e = this.m_treeHull.addElementAtPosition(h3, i2, -2, true, false), this.treeHullWalkForward(t2, i2, n4), this.treeHullWalkBackward(t2, h3, s3);
        break;
      }
      {
        const i2 = Xr(t2, a2, o);
        if (-1 === i2) {
          const i3 = this.m_treeHull.getPrev(n4);
          this.m_treeHull.deleteNode(n4), e = this.m_treeHull.addBiggestElement(-3), this.treeHullWalkBackward(t2, i3, s3);
        } else if (1 === i2) {
          const i3 = this.m_treeHull.getNext(s3);
          this.m_treeHull.deleteNode(s3), e = this.m_treeHull.addElementAtPosition(-1, i3, -3, true, false), this.treeHullWalkForward(t2, i3, n4);
        }
        break;
      }
    } while (0);
    return e;
  }
  treeHullWalkForward(t2, e, s3) {
    if (e === s3) return s3;
    let n4 = e, i = this.m_treeHull.getElement(n4), r = this.m_treeHull.getNext(n4);
    const o = this.m_getXY(i);
    for (; n4 !== s3 && this.m_treeHull.size() > 2; ) {
      const e2 = this.m_treeHull.getElement(r), s4 = this.m_getXY(e2);
      if (Yr(mi.orientationRobust(s4, t2, o))) break;
      const a2 = n4;
      n4 = r, i = e2, o.assign(s4), r = this.m_treeHull.getNext(n4), this.m_deleteNode(a2);
    }
    return n4;
  }
  treeHullWalkBackward(t2, e, s3) {
    if (e === s3) return s3;
    let n4 = e, i = this.m_treeHull.getElement(n4), r = this.m_treeHull.getPrev(n4);
    const o = this.m_getXY(i);
    for (; n4 !== s3 && this.m_treeHull.size() > 2; ) {
      const e2 = this.m_treeHull.getElement(r), s4 = this.m_getXY(e2);
      if (Yr(mi.orientationRobust(o, t2, s4))) break;
      const a2 = n4;
      n4 = r, i = e2, o.assign(s4), r = this.m_treeHull.getPrev(n4), this.m_deleteNode(a2);
    }
    return n4;
  }
};
function Tr(t2, e, s3) {
  const n4 = e.sub(t2), i = s3.sub(e);
  if (0 === n4.x) return i.x > 0 ? -1 : 0;
  if (0 === n4.y) return i.y > 0 ? 1 : i.y < 0 ? -1 : 0;
  const r = n4.crossProduct(i), o = 4 * Number.EPSILON * (Math.abs(i.x * n4.y) + Math.abs(i.y * n4.x));
  return r > o ? 1 : r < -o ? -1 : mi.orientationRobust(t2, e, s3);
}
function Ir(t2, e, s3) {
  const n4 = e.sub(t2), i = s3.sub(e);
  if (0 === n4.x) return i.x < 0 ? -1 : 0;
  if (0 === n4.y) return i.y > 0 ? -1 : i.y < 0 ? 1 : 0;
  const r = n4.crossProduct(i), o = 4 * Number.EPSILON * (Math.abs(i.x * n4.y) + Math.abs(i.y * n4.x));
  return r > o ? 1 : r < -o ? -1 : mi.orientationRobust(t2, e, s3);
}
function Mr(t2, e, s3, n4) {
  const i = new st2(0);
  for (let h2 = 0; h2 < e; h2++) i.add(h2);
  const r = { userSort(e2, s4, n5) {
    n5.sort(e2, s4, (e3, s5) => t2[e3].compareX(t2[s5]));
  }, getValue: (e2) => t2[e2].x };
  n4 || at.sortEx(i, 0, e, r);
  let o = 0;
  t: for (let h2 = 0; h2 < e; ++h2) {
    const e2 = i.read(h2);
    for (; o >= 2; ) {
      const n5 = s3[o - 2], r2 = s3[o - 1];
      if (t2[r2].equals(t2[e2])) {
        i.write(h2, -1);
        continue t;
      }
      if (!(Tr(t2[n5], t2[r2], t2[e2]) >= 0)) {
        r2 === i.read(h2 - 1) && i.write(h2 - 1, -1);
        break;
      }
      o--;
    }
    s3[o++] = e2, 2 === o && t2[e2].equals(t2[s3[0]]) && (i.write(1, -1), o--);
  }
  const a2 = o + 1;
  t: for (let h2 = e - 2; h2 >= 0; --h2) {
    const e2 = i.read(h2);
    if (!(e2 < 0)) {
      for (; o >= a2; ) {
        const n5 = s3[o - 2], i2 = s3[o - 1];
        if (t2[i2].equals(t2[e2])) continue t;
        if (!(Ir(t2[n5], t2[i2], t2[e2]) >= 0)) break;
        o--;
      }
      if (0 !== h2) {
        const n5 = s3[o - 1];
        s3[o++] = e2, t2[e2].equals(t2[n5]) && o--;
      }
    }
  }
  return o > 1 && t2[s3[0]].equals(t2[s3[o - 1]]) && o--, o;
}
function Yr(t2) {
  return t2 < 0;
}
function Nr(t2) {
  return t2 > 0;
}
function Xr(t2, e, s3) {
  let n4 = -1;
  if (e.y === s3.y) n4 = 0;
  else if (e.x === s3.x) n4 = 1;
  else {
    n4 = Math.abs(e.x - s3.x) >= Math.abs(e.y - s3.y) ? 0 : 1;
  }
  let i = -1;
  return i = e[n4] < s3[n4] ? t2[n4] < e[n4] ? -1 : s3[n4] < t2[n4] ? 1 : 0 : e[n4] < t2[n4] ? -1 : t2[n4] < s3[n4] ? 1 : 0, i;
}
function qr(t2) {
  return (t2 = t2.clone()).divThis(Math.max(Math.abs(t2.x), Math.abs(t2.y))), t2.normalize(), t2;
}
function Fr(t2, e, s3) {
  t2.inc(e, 0) === s3 && t2.set(e, 0, 0), t2.inc(e, 1) === s3 && t2.set(e, 1, 0);
}
function Vr(t2, s3, n4, i, r) {
  switch (r) {
    case 0:
      break;
    case 1:
      s3.rightPerpendicularThis(), t2.rightPerpendicularThis();
      break;
    case 2:
      s3.negateThis(), t2.negateThis();
      break;
    case 3:
      s3.leftPerpendicularThis(), t2.leftPerpendicularThis();
      break;
    default:
      P("");
  }
  return mi.orientationRobustEx(t2, s3, n4, i);
}
var Lr = class {
  constructor() {
    this.length = Number.NaN, this.specialPoints = [];
  }
  specialPointsCount() {
    return this.specialPoints.length;
  }
};
function Rr(t2) {
  return zr(t2.calculateUpperLength2D());
}
function zr(t2) {
  return 256 * Qs() * t2;
}
function Br(t2) {
  const e = mi.distance(t2.getStartXY(), t2.getEndXY()), s3 = t2.calculateUpperLength2D();
  return s3 - e <= 8 * Number.EPSILON * s3;
}
function kr(t2, e, s3 = false) {
  e[1].setCoords(t2.m_cp[0].x - t2.getStartX(), t2.m_cp[0].y - t2.getStartY()), e[1].mulThis(3), e[2].setCoords(t2.m_cp[1].x - t2.m_cp[0].x, t2.m_cp[1].y - t2.m_cp[0].y), e[2].mulThis(3), e[3] = t2.getEndXY().sub(t2.getStartXY()), e[3].subThis(e[2]), e[2].subThis(e[1]), s3 ? e[0].setCoords(0, 0) : e[0] = t2.getStartXY();
}
function Gr(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), jr(n4, e, s3);
}
function Wr(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), Zr(n4, e, s3);
}
function jr(t2, e, s3) {
  let n4 = t2[1].x;
  n4 -= t2[0].x, n4 *= 3;
  let i = t2[2].x;
  i -= t2[1].x, i *= 3;
  let r = t2[3].x;
  r -= t2[0].x, r -= i, i -= n4, e[3].setWithEps(r), e[2].setWithEps(i), e[1].setWithEps(n4), s3 ? e[0].set(0) : e[0].set(t2[0].x);
}
function Zr(t2, e, s3) {
  let n4 = t2[1].y;
  n4 -= t2[0].y, n4 *= 3;
  let i = t2[2].y;
  i -= t2[1].y, i *= 3;
  let r = t2[3].y;
  r -= t2[0].y, r -= i, i -= n4, e[3].setWithEps(r), e[2].setWithEps(i), e[1].setWithEps(n4), s3 ? e[0].set(0) : e[0].set(t2[0].y);
}
function Hr(t2, e, s3 = false) {
  const n4 = Ot(qe, 4);
  n4[0].assignPoint2D(t2[0]), n4[1].assignPoint2D(t2[1]), n4[2].assignPoint2D(t2[2]), n4[3].assignPoint2D(t2[3]), e[1].setCoords(n4[1].x.sub(n4[0].x), n4[1].y.sub(n4[0].y)), e[1].mulThis(si.constructInt32(3)), e[2].setCoords(n4[2].x.sub(n4[1].x), n4[2].y.sub(n4[1].y)), e[2].mulThis(si.constructInt32(3)), e[3] = n4[3].sub(n4[0]), e[3] = e[3].sub(e[2]), e[2] = e[2].sub(e[1]), s3 ? e[0].setCoords(ei, ei) : e[0] = n4[0].clone();
}
function Ur(t2, e, s3) {
  if (s3) {
    if (e < 0) return e;
    if (e > 1) return e - 1 + Ur(t2, 1, false);
  }
  if (t2.isDegenerate(0)) return 0;
  const n4 = 1 === e, i = Jr(t2);
  if (n4 && !Number.isNaN(i.length) && !Number.isNaN(i.length)) return i.length;
  const r = Rr(t2), o = r / t2.calculateUpperLength2D();
  let a2 = 0, h2 = 0;
  for (let u = 1, m = i.specialPointsCount(); u < m; u++) {
    const s4 = i.specialPoints[u];
    if (a2 += ta(t2, h2, Math.min(e, s4), o, r), e <= s4) break;
    h2 = s4;
  }
  return n4 && (i.length = a2), a2;
}
function Or(t2, e, s3) {
  const n4 = Ur(t2, 1, false);
  if (e <= 0) return e;
  if (e >= n4) return e - n4 + 1;
  const i = [0];
  return 1 !== en(new Ko(t2, e), x2.unit(), 1, i) && b(""), i[0];
}
function Qr(t2, s3, n4) {
  void 0 === n4 && (n4 = s3, s3 = 0);
  const i = new mi();
  if (s3 < 0 || n4 > 1) return i.setNAN(), i;
  if (s3 > n4 && P("calculate_sub_weightedCentroid"), s3 === n4 || t2.isDegenerate(0)) return i.setCoords(0, 0), i;
  const r = Jr(t2), o = Rr(t2), a2 = o / t2.calculateUpperLength2D();
  let h2 = s3, u = 0;
  for (let e = 1, m = r.specialPointsCount(); e < m; e++) if (s3 < r.specialPoints[e]) {
    u = e - 1;
    break;
  }
  i.setCoords(0, 0);
  for (let e = u + 1, m = r.specialPointsCount(); e < m; e++) {
    const s4 = Math.min(r.specialPoints[e], n4), u2 = ea(t2, h2, s4, a2, o);
    if (i.addThis(u2), h2 = s4, n4 <= r.specialPoints[e]) break;
  }
  return i.add(t2.getStartXY().mul(t2.calculateLength2D()));
}
function Jr(t2) {
  if (t2.m_cachedValues) return t2.m_cachedValues;
  const e = new Lr(), s3 = Ot(p, 8), n4 = Ot(mi, 4);
  t2.queryControlPoints(n4);
  const i = Zo(n4, s3);
  e.specialPoints = [];
  for (let r = 0; r < i; r++) e.specialPoints.push(s3[r].value());
  return $r(t2, e), e;
}
function Kr(t2) {
  let e = null;
  return e = t2.m_cachedValues, e;
}
function $r(t2, e) {
  t2.m_cachedValues = e;
}
function to(t2) {
  t2.m_cachedValues = null;
}
function eo(t2, e) {
  e.m_cachedValues = Pt(t2.m_cachedValues, t2.m_cachedValues = e.m_cachedValues);
}
function so(t2, e, s3, n4) {
  if (e.isEqual(t2.m_XStart, t2.m_YStart) && s3.isEqual(t2.m_XEnd, t2.m_YEnd)) return;
  const i = !!n4 && t2.isMonotoneQuickAndDirty(), r = new x3(), o = Ot(mi, 3);
  o[0].setCoords(t2.m_XStart, t2.m_YStart), o[2].setCoords(t2.m_XEnd, t2.m_YEnd);
  const a2 = new mi();
  a2.setSub(o[2], o[0]), a2.leftPerpendicularThis(), o[1].setAdd(o[0], a2);
  const h2 = Ot(mi, 3);
  h2[0].setCoordsPoint2D(e), h2[2].setCoordsPoint2D(s3), a2.setSub(h2[2], h2[0]), a2.leftPerpendicularThis(), h2[1].setAdd(h2[0], a2), r.setFromTwoTriangles(o, h2) ? r.transformPoints2D(t2.m_cp, 2, t2.m_cp) : (Y(e, s3, 1 / 3, t2.m_cp[0]), Y(e, s3, 2 / 3, t2.m_cp[1])), t2.changeEndPoints2D(e, s3), i && co(t2);
}
function no(t2, e, s3, n4, i) {
  return { tmin: t2, tmax: e, t: s3, d: n4, pt: i.clone() };
}
function io(t2, e, s3, n4) {
  const i = Ot(mi, 4);
  t2.queryControlPoints(i);
  const r = Yt(18, NaN), o = en(new Lo(i, e, NaN), x2.construct(s3, n4), 18, r), a2 = new mi();
  t2.queryCoord2D(s3, a2);
  let h2 = s3, u = mi.distance(a2, e);
  const m = new mi();
  t2.queryCoord2D(n4, m);
  const l2 = mi.distance(m, e);
  l2 < u && (u = l2, h2 = n4, a2.assign(m));
  for (let c = 0; c < o; c++) {
    t2.queryCoord2D(r[c], m);
    const s4 = mi.distance(m, e);
    s4 < u && (u = s4, h2 = r[c], a2.assign(m));
  }
  return no(s3, n4, h2, u, a2);
}
function ro(t2, e) {
  const n4 = Ot(p, 4);
  Gr(t2, n4, true);
  const i = Ot(p, 4);
  Wr(t2, i, true);
  const r = n4[3].clone(), o = n4[2].clone(), a2 = n4[1].clone(), h2 = i[3].clone(), u = i[2].clone(), m = i[1].clone(), l2 = o.mulE(a2).addE(u.mulE(m)).mul(4), c = o.mulE(o).mul(8).addE(r.mulE(a2).mul(12)).addE(u.mulE(u).mul(8).addE(h2.mulE(m).mul(12))), g2 = r.mulE(o).addE(h2.mulE(u)).mul(36), d = r.mulE(r).addE(h2.mulE(h2)).mul(36), _ = Ot(p, 3), p2 = _n(d, g2, c, l2, new x2(0, 1), false, _);
  if (n(p2 <= 3), p2 > 0) {
    const s3 = mo(t2, 1, 0).sqrLength(), n5 = mo(t2, 1, 1).sqrLength();
    let i2 = s3;
    e.set(0), i2 < n5 && (i2 = n5, e.set(1));
    for (let r2 = 0; r2 < p2; r2++) {
      const s4 = mo(t2, 1, _[r2].value()).sqrLength();
      s4 < i2 && (i2 = s4, e = _[r2]);
    }
  }
}
function oo(t2, e, s3, n4) {
  if (1 === e) {
    const e2 = 1 - s3, i = e2 * e2, r = s3 * s3, o = t2[1].sub(t2[0]), a2 = t2[2].sub(t2[1]), h2 = t2[3].sub(t2[2]), u = o.mul(i).add(a2.mul(2 * e2 * s3)).add(h2.mul(r));
    n4.assign(u.mul(3));
  } else if (2 === e) {
    const e2 = 1 - s3, i = t2[2].sub(t2[1]).sub(t2[1].sub(t2[0])), r = t2[3].sub(t2[2]).sub(t2[2].sub(t2[1])), o = i.mul(e2).add(r.mul(s3));
    n4.assign(o.mul(6));
  } else if (3 === e) {
    const e2 = t2[2].sub(t2[1]), s4 = t2[3].sub(e2.mul(3)).sub(t2[0]);
    n4.assign(s4.mul(6));
  } else n4.setCoords(0, 0);
}
function ao(t2, e, s3, n4) {
  {
    const e2 = w.subE(s3), i = e2.sqr(), r = s3.sqr(), o = t2[1].subE(t2[0]).mulE(i).addE(t2[2].subE(t2[1]).mulE(new p(2).mulE(e2).mulE(s3))).addE(t2[3].subE(t2[2]).mulE(r));
    n4.setE(o.mulE(new p(3)));
  }
}
function ho(t2, e, s3) {
  const n4 = new mi();
  return oo(t2, e, s3, n4), n4;
}
function uo(t2, e, s3) {
  const n4 = [Ne.constructPoint2D(t2[0]), Ne.constructPoint2D(t2[1]), Ne.constructPoint2D(t2[2]), Ne.constructPoint2D(t2[3])], i = new Ne();
  return ao(n4, e, s3, i), i;
}
function mo(t2, e, s3) {
  const n4 = Ot(mi, 4);
  return t2.queryControlPoints(n4), ho(n4, e, s3);
}
function lo(t2) {
  const e = t2.m_cp[0].sub(t2.getStartXY()), s3 = t2.m_cp[1].sub(t2.m_cp[0]), n4 = t2.getEndXY().sub(t2.getStartXY());
  e.mulThis(3), s3.mulThis(3), n4.subThis(s3), s3.subThis(e);
  return (3 * n4.x * (2 * s3.y + 5 * e.y) - 3 * n4.y * (2 * s3.x + 5 * e.x) + 10 * (s3.x * e.y - s3.y * e.x)) / 60;
}
function co(t2) {
  const e = Ot(mi, 4);
  t2.queryControlPoints(e);
  const s3 = go(e);
  return s3 && (t2.m_cp[0].setCoordsPoint2D(e[1]), t2.m_cp[1].setCoordsPoint2D(e[2]), t2.afterCompletedModification()), s3;
}
function go(t2) {
  return Ve(t2);
}
function _o(t2) {
  return Le(t2);
}
function po(t2, e, s3) {
  const n4 = new mi(), i = new mi(), r = new mi(), o = new mi(), a2 = new mi();
  e <= 0.5 ? (k2(2, t2[0], t2[1], e, n4), k2(2, t2[1], t2[2], e, i), k2(2, t2[2], t2[3], e, r), k2(2, n4, i, e, o), k2(2, i, r, e, a2), k2(2, o, a2, e, s3)) : (F(2, t2[0], t2[1], e, n4), F(2, t2[1], t2[2], e, i), F(2, t2[2], t2[3], e, r), F(2, n4, i, e, o), F(2, i, r, e, a2), F(2, o, a2, e, s3));
}
function fo(t2, e, n4, i) {
  n(e >= 0 && e <= 1);
  const r = new mi(), o = new mi(), a2 = new mi(), h2 = new mi(), u = new mi(), m = new mi();
  e <= 0.5 ? (k2(2, t2[0], t2[1], e, r), k2(2, t2[1], t2[2], e, o), k2(2, t2[2], t2[3], e, a2), k2(2, r, o, e, h2), k2(2, o, a2, e, u), k2(2, h2, u, e, m)) : (F(2, t2[0], t2[1], e, r), F(2, t2[1], t2[2], e, o), F(2, t2[2], t2[3], e, a2), F(2, r, o, e, h2), F(2, o, a2, e, u), F(2, h2, u, e, m));
  const l2 = t2[3].clone();
  n4 && (n4[0].assign(t2[0]), n4[1].assign(r), n4[2].assign(h2), n4[3].assign(m)), i && (i[0].assign(m), i[1].assign(u), i[2].assign(a2), i[3].assign(l2));
}
function Po(t2, e, n4, i) {
  if (n(e >= 0 && n4 <= 1 && e <= n4), e === n4) {
    const s3 = new mi();
    return yo(t2, e, s3), i[0].assign(s3), i[1].assign(s3), i[2].assign(s3), void i[3].assign(s3);
  }
  if (0 === e && 1 === n4) {
    for (let e2 = 0; e2 < 4; ++e2) i[e2].assign(t2[e2]);
    return;
  }
  const r = Ot(mi, 4);
  fo(t2, n4, r, null), fo(r, n4 > 0 ? e / n4 : 0, null, r), yo(t2, e, r[0]), yo(t2, n4, r[3]), i[0].setCoordsPoint2D(r[0]), i[1].setCoordsPoint2D(r[1]), i[2].setCoordsPoint2D(r[2]), i[3].setCoordsPoint2D(r[3]);
}
function yo(t2, e, s3, n4) {
  if (n4) {
    if (e < 0) {
      return void ps(new fm({ start: t2[0], end: t2[0].add(vo(t2, 0).getUnitVector()) }), e, s3);
    }
    if (e > 1) {
      return void ps(new fm({ start: t2[3], end: t2[3].add(vo(t2, 1).getUnitVector()) }), e - 1, s3);
    }
  }
  if (e <= 0.5) {
    const n5 = new mi();
    k2(2, t2[0], t2[1], e, n5);
    const i = new mi();
    k2(2, t2[1], t2[2], e, i);
    const r = new mi();
    k2(2, t2[2], t2[3], e, r);
    const o = new mi();
    k2(2, n5, i, e, o);
    const a2 = new mi();
    k2(2, i, r, e, a2), k2(2, o, a2, e, s3);
  } else {
    const n5 = new mi();
    F(2, t2[0], t2[1], e, n5);
    const i = new mi();
    F(2, t2[1], t2[2], e, i);
    const r = new mi();
    F(2, t2[2], t2[3], e, r);
    const o = new mi();
    F(2, n5, i, e, o);
    const a2 = new mi();
    F(2, i, r, e, a2), F(2, o, a2, e, s3);
  }
}
function xo(t2, e, s3) {
  if (e.value() <= 0.5) {
    const n4 = new Ne();
    O(2, Ne.constructPoint2D(t2[0]), Ne.constructPoint2D(t2[1]), e, n4);
    const i = new Ne();
    O(2, Ne.constructPoint2D(t2[1]), Ne.constructPoint2D(t2[2]), e, i);
    const r = new Ne();
    O(2, Ne.constructPoint2D(t2[2]), Ne.constructPoint2D(t2[3]), e, r);
    const o = new Ne();
    O(2, n4, i, e, o);
    const a2 = new Ne();
    O(2, i, r, e, a2), O(2, o, a2, e, s3);
  } else {
    const n4 = new Ne();
    G(2, Ne.constructPoint2D(t2[0]), Ne.constructPoint2D(t2[1]), e, n4);
    const i = new Ne();
    G(2, Ne.constructPoint2D(t2[1]), Ne.constructPoint2D(t2[2]), e, i);
    const r = new Ne();
    G(2, Ne.constructPoint2D(t2[2]), Ne.constructPoint2D(t2[3]), e, r);
    const o = new Ne();
    G(2, n4, i, e, o);
    const a2 = new Ne();
    G(2, i, r, e, a2), G(2, o, a2, e, s3);
  }
}
function Co(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), xo(n4, e, s3);
}
function vo(t2, e) {
  const s3 = Us(e, 0, 1);
  let n4 = ho(t2, 1, s3);
  return n4.isZero() && (n4 = ho(t2, 2, s3), n4.isZero() ? n4 = ho(t2, 3, s3) : 1 === s3 && n4.negateThis()), n4;
}
function bo(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), So(n4, e, s3);
}
function So(t2, e, s3) {
  e.value() < 0 && e.set(0, e.eps()), e.value() > 1 && e.set(1, e.eps()), s3.setE(uo(t2, 1, e));
}
function Eo(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Io(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function Do(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Mo(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function wo(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Yo(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function Ao(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== No(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function To(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Xo(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function Io(t2, e, s3, n4, i, r, o, a2, h2, u) {
  if (null !== i && (i.length = 0), null != r && (r.length = 0), null !== n4 && (n4.length = 0), s3.isDegenerate(0)) {
    const t3 = [0, 0, 0], a3 = e.intersectPoint(s3.getStartXY(), t3, o);
    if (a3 > 0) {
      if (null !== i) for (let e2 = 0; e2 < a3; e2++) i.push(t3[e2]);
      if (null !== r) for (let t4 = 0; t4 < a3; t4++) r.push(0);
      if (null != n4) for (let s4 = 0; s4 < a3; s4++) {
        const i2 = new mi();
        e.queryCoord2D(t3[s4], i2), n4.push(i2);
      }
    }
    return a3;
  }
  const m = os(e, s3);
  if (as(e, s3, o = Math.max(o, m))) return 0;
  const l2 = Ot(mi, 4);
  kr(e, l2);
  const c = s3.getEndXY();
  c.subThis(s3.getStartXY());
  const g2 = c.clone();
  g2.leftPerpendicularThis();
  let d = 3 * l2[3].dotProduct(g2), _ = 2 * l2[2].dotProduct(g2), p2 = l2[1].dotProduct(g2);
  const f2 = Yt(15, Number.NaN), P4 = Yt(15, Number.NaN);
  let y2 = nn(d, _, p2, x2.unit(), false, f2);
  y2 < 0 && (f2[0] = 0, f2[1] = 1, y2 = 2);
  let x4, C3 = 0;
  for (let S2 = 0, E = C3; S2 < y2; ++S2) {
    const t3 = e.getCoord2D(f2[S2 + E]);
    P4[C3] = s3.getClosestCoordinate(t3, false), mi.distance(t3, s3.getCoord2D(P4[C3])) <= o && (f2[C3] = f2[S2 + E], C3++);
  }
  if (l2[0].subThis(s3.getStartXY()), Math.abs(c.x) >= Math.abs(c.y)) {
    const t3 = c.y / c.x;
    d = l2[3].y - l2[3].x * t3, _ = l2[2].y - l2[2].x * t3, p2 = l2[1].y - l2[1].x * t3, x4 = l2[0].y - l2[0].x * t3;
  } else {
    const t3 = c.x / c.y;
    d = l2[3].x - l2[3].y * t3, _ = l2[2].x - l2[2].y * t3, p2 = l2[1].x - l2[1].y * t3, x4 = l2[0].x - l2[0].y * t3;
  }
  const v2 = e.getEndXY().equals(s3.getStartXY()) || e.getEndXY().equals(s3.getEndXY()), b2 = [0, 0, 0];
  y2 = rn(d, _, p2, x4, x2.unit(), v2, b2);
  for (let S2 = 0, E = C3; S2 < y2; ++S2) {
    f2[S2 + E] = b2[S2];
    const t3 = e.getCoord2D(f2[S2 + E]);
    P4[C3] = s3.getClosestCoordinate(t3, false);
    mi.distance(t3, s3.getCoord2D(P4[C3])) <= o && (f2[C3] = f2[S2 + E], C3++);
  }
  y2 = e.intersectPoint(s3.getStartXY(), b2, o);
  for (let S2 = 0; S2 < y2; S2++) f2[C3] = b2[S2], P4[C3++] = 0;
  y2 = e.intersectPoint(s3.getEndXY(), b2, o);
  for (let S2 = 0; S2 < y2; S2++) f2[C3] = b2[S2], P4[C3++] = 1;
  return 0 !== s3.intersectPoint(e.getStartXY(), b2, o) && (P4[C3] = b2[0], f2[C3++] = 0), 0 !== s3.intersectPoint(e.getEndXY(), b2, o) && (P4[C3] = b2[0], f2[C3++] = 1), 0 === C3 ? 0 : gm(t2, e, s3, f2, P4, C3, n4, i, r, o, a2, h2, u);
}
function Mo(t2, e, s3, n4, i, r, o, a2, h2, u) {
  if (Eu(s3)) {
    return Io(t2, e, new fm({ start: s3.getStartXY(), end: s3.getEndXY() }), n4, i, r, o, a2, h2, u);
  }
  const m = os(e, s3);
  if (as(e, s3, o = Math.max(o, m))) return 0;
  const l2 = [], c = [], g2 = [], d = Ot(mi, 4);
  {
    e.queryControlPoints(d);
    const t3 = Ot(mi, 4), n5 = new x3();
    s3.canonicToWorldTransformation(n5);
    const i2 = new x3();
    i2.setInvert(n5), i2.transformPoints2D(d, 4, t3);
    const r2 = Ot(qe, 4);
    Hr(t3, r2);
    const h3 = [r2[0].x, r2[1].x, r2[2].x, r2[3].x], u2 = [r2[0].y, r2[1].y, r2[2].y, r2[3].y], m2 = Ot(si, 3);
    m2[0].setDouble(s3.getSemiMinorAxis()), m2[0].sqrThis(), m2[1].setDouble(s3.getSemiMajorAxis()), m2[1].sqrThis(), m2[2].setThis(m2[0]), m2[2].mulThis(m2[1]), m2[2].negateThis();
    const _2 = Fn(h3, 3, u2, 3, null, 0, m2, true, x2.unit(), x2.unit(), c, a2);
    if (_2 > 0) {
      let t4 = 0;
      for (let n6 = 0; n6 < _2; n6++) {
        const i3 = new mi();
        e.queryCoord2D(c[n6], i3);
        const r3 = s3.getClosestCoordinate(i3, false), a3 = new mi();
        s3.queryCoord2D(r3, a3);
        mi.distance(i3, a3) <= o && (l2.push(i3.clone()), c[t4] = c[n6], g2.push(r3), t4++);
      }
      c.length = t4, l2.length = t4;
    }
  }
  const _ = [0, 1];
  for (let p2 = 0; p2 < 2; p2++) {
    const t3 = 0 === p2 ? s3.getStartXY() : s3.getEndXY(), e2 = [0];
    Ro(d, t3, x2.unit(), false, -1, 1, e2);
    const n5 = new mi();
    yo(d, e2[0], n5);
    mi.distance(t3, n5) <= o && (c.push(e2[0]), g2.push(_[p2]), l2.push(n5.clone()));
  }
  for (let p2 = 0; p2 < 2; p2++) {
    const t3 = [0, 3];
    {
      const e2 = s3.getClosestCoordinate(d[t3[p2]], false), n5 = new mi();
      s3.queryCoord2D(e2, n5);
      mi.distance(d[t3[p2]], n5) <= o && (c.push(_[p2]), g2.push(e2), l2.push(n5.clone()));
    }
  }
  return gm(t2, e, s3, c, g2, c.length, n4, i, r, o, a2, h2, u);
}
function Yo(t2, e, n4, i, r, o, a2, h2, u, m) {
  const l2 = Ot(mi, 4);
  e.queryControlPoints(l2);
  const c = Ot(mi, 4);
  if (n4.queryControlPoints(c), hs(l2, c, 4) < 0) return Yo(t2, n4, e, i, o, r, a2, h2, u, !m);
  const g2 = os(e, n4);
  if (as(e, n4, a2 = Math.max(a2, g2))) return 0;
  if (sa(e, n4, i, r, o, a2, h2, u, m)) return 2;
  const d = new x2(0, 1), _ = new x2(0, 1);
  {
    const t3 = new we();
    Vo(l2, new x2(0, 1), t3);
    const e2 = new we();
    Vo(c, new x2(0, 1), e2);
    const s3 = Math.max(t3.maxDim(), e2.maxDim());
    if (t3.inflate(3 * a2), e2.inflate(3 * a2), !t3.intersectW(e2)) return 0;
    if (t3.maxDim() < 0.1 * s3) {
      if (Qo(l2, t3, d), d.isEmpty()) return 0;
      if (Qo(c, t3, _), _.isEmpty()) return 0;
      Po(l2, d.vmin, d.vmax, l2), Po(c, _.vmin, _.vmax, c);
    }
  }
  const p2 = _m(l2, 3, c, 3, a2);
  if (0 === p2) return 0;
  const f2 = [], P4 = [], y2 = [];
  let x4 = false;
  if (-1 === p2) {
    const t3 = Ot(qe, 4);
    Hr(l2, t3);
    const e2 = [t3[0].x, t3[1].x, t3[2].x, t3[3].x], s3 = [t3[0].y, t3[1].y, t3[2].y, t3[3].y], n5 = Ot(qe, 4);
    Hr(c, n5);
    const i2 = [], r2 = [], o2 = Nn(e2, 3, s3, 3, null, 0, [n5[0].x, n5[1].x, n5[2].x, n5[3].x], 3, [n5[0].y, n5[1].y, n5[2].y, n5[3].y], 3, null, 0, true, x2.unit(), x2.unit(), i2, r2, u);
    if (o2 > 0) for (let h3 = 0; h3 < o2; h3++) {
      const t4 = new mi();
      yo(c, r2[h3], t4);
      const e3 = new mi();
      yo(l2, i2[h3], e3);
      mi.distance(e3, t4) <= a2 && (f2.push(e3.clone()), y2.push(r2[h3]), P4.push(i2[h3]));
    }
    else -1 === o2 && (x4 = true);
  }
  for (let s3 = 0; s3 < 2; s3++) {
    const t3 = 0 === s3 ? l2 : c, e2 = 0 === s3 ? c : l2;
    for (let n5 = 0; n5 < 2; n5++) {
      const i2 = 0 === n5 ? 0 : 3, r2 = [0];
      Ro(e2, t3[i2], x2.unit(), false, -1, 1, r2);
      const o2 = new mi();
      yo(e2, r2[0], o2);
      mi.distance(t3[i2], o2) <= a2 && (0 === s3 ? (P4.push(0 === i2 ? 0 : 1), y2.push(r2[0])) : (y2.push(0 === i2 ? 0 : 1), P4.push(r2[0])), f2.push(o2.clone()));
    }
  }
  if (0 === P4.length && x4) {
    const t3 = e.calculateUpperLength2D() > n4.calculateUpperLength2D();
    {
      const i2 = [0, 0];
      if (2 === Wo(t3 ? e : n4, i2, true) && (n(x2.unit().containsCoordinate(i2[0])), !x2.unit().containsCoordinate(i2[1]))) {
        const e2 = new mi();
        yo(t3 ? l2 : c, i2[0], e2);
        const s3 = [0, 0];
        1 === Ro(t3 ? c : l2, e2, x2.unit(), false, -1, 2, s3) && (f2.push(e2.clone()), P4.push(t3 ? i2[0] : s3[0]), y2.push(t3 ? s3[0] : i2[0]));
      }
    }
  }
  if (0 === P4.length) return 0;
  if (!d.equalsRange(0, 1)) for (let s3 = 0; s3 < P4.length; ++s3) P4[s3] = ra.recalculateParentT(d.vmin, d.vmax, P4[s3]);
  if (!_.equalsRange(0, 1)) for (let s3 = 0; s3 < y2.length; ++s3) y2[s3] = ra.recalculateParentT(_.vmin, _.vmax, y2[s3]);
  return gm(t2, e, n4, P4, y2, P4.length, i, r, o, a2, h2, u, m);
}
function No(t2, e, n4, i, r, o, a2, h2, u, m) {
  const l2 = os(e, n4);
  if (n4.isDegenerateToLineHelper(l2)) {
    const s3 = new fm({ start: n4.getStartXY(), end: n4.getEndXY() }), l3 = Io(t2, e, s3, i, r, o, a2, h2, u, m);
    if (o) for (let t3 = 0; t3 < l3; ++t3) {
      const e2 = s3.getCoord2D(o[t3]);
      o[t3] = n4.getClosestCoordinate(e2, false);
    }
    return l3;
  }
  if (as(e, n4, a2 = Math.max(a2, l2))) return 0;
  const c = Ot(mi, 4);
  e.queryControlPoints(c);
  const g2 = Ot(mi, 3);
  n4.queryControlPoints(g2);
  const d = new x2(0, 1), _ = new x2(0, 1), p2 = [0, 0, 0];
  n4.queryWeights(p2);
  const f2 = [1, Ph(p2), 1];
  {
    const t3 = new we();
    Vo(c, new x2(0, 1), t3);
    const e2 = new we();
    ja(g2, f2, new x2(0, 1), e2);
    const s3 = Math.max(t3.maxDim(), e2.maxDim());
    if (t3.inflate(3 * a2), e2.inflate(3 * a2), !t3.intersectW(e2)) return 0;
    if (t3.maxDim() < 0.1 * s3) {
      if (Qo(c, t3, d), d.isEmpty()) return 0;
      if (fh(g2, f2, t3, _), _.isEmpty()) return 0;
      Po(c, d.vmin, d.vmax, c), Ja(g2, f2, _.vmin, _.vmax, g2, f2);
    }
  }
  const P4 = _m(c, 3, g2, 2, a2);
  if (0 === P4) return 0;
  const y2 = [], x4 = [], C3 = [];
  if (-1 === P4) {
    const t3 = Ot(qe, 4);
    Hr(c, t3);
    const e2 = [t3[0].x, t3[1].x, t3[2].x, t3[3].x], s3 = [t3[0].y, t3[1].y, t3[2].y, t3[3].y], n5 = Ot(si, 3), i2 = Ot(si, 3), r2 = Ot(si, 3);
    uh(g2, f2, n5, i2, r2);
    const o2 = [], h3 = [], m2 = Nn(n5, 2, i2, 2, r2, 2, e2, 3, s3, 3, null, 0, true, x2.unit(), x2.unit(), h3, o2, u);
    if (m2 > 0) for (let u2 = 0; u2 < m2; u2++) {
      const t4 = new mi();
      yo(c, o2[u2], t4);
      const e3 = new mi();
      ph(g2, f2, h3[u2], e3);
      mi.distance(t4, e3) <= a2 && (y2.push(t4.clone()), x4.push(o2[u2]), C3.push(h3[u2]));
    }
  }
  for (let v2 = 0; v2 < 2; v2++) {
    let t3, e2;
    0 === v2 ? (t3 = c, e2 = g2) : (e2 = c, t3 = g2);
    for (let n5 = 0; n5 < 2; n5++) {
      const i2 = 0 === n5 ? 0 : t3.length - 1, r2 = [0], o2 = new mi();
      if (0 === v2) {
        const n6 = Ba(e2, f2, t3[i2], x2.unit(), false, -1, 1, r2);
        n(1 === n6), ph(e2, f2, r2[0], o2);
      } else {
        const n6 = Ro(e2, t3[i2], x2.unit(), false, -1, 1, r2);
        n(1 === n6), yo(e2, r2[0], o2);
      }
      mi.distance(t3[i2], o2) <= a2 && (0 === v2 ? (x4.push(0 === i2 ? 0 : 1), C3.push(r2[0])) : (C3.push(0 === i2 ? 0 : 1), x4.push(r2[0])), y2.push(o2.clone()));
    }
  }
  if (0 === x4.length) return 0;
  if (!d.equalsRange(0, 1)) for (let s3 = 0; s3 < x4.length; ++s3) x4[s3] = ra.recalculateParentT(d.vmin, d.vmax, x4[s3]);
  if (!_.equalsRange(0, 1)) for (let s3 = 0; s3 < C3.length; ++s3) C3[s3] = Dn.recalculateParentT(_.vmin, _.vmax, C3[s3]);
  for (let s3 = 0; s3 < C3.length; ++s3) C3[s3] = yh(p2, C3[s3]);
  return gm(t2, e, n4, x4, C3, x4.length, i, r, o, a2, h2, u, m);
}
function Xo(t2, e, n4, i, r, o, a2, h2, u, m) {
  const l2 = os(e, n4);
  if (as(e, n4, a2 = Math.max(a2, l2))) return 0;
  const c = Ot(mi, 4);
  e.queryControlPoints(c);
  const g2 = Ot(mi, 3);
  n4.queryControlPoints(g2);
  const d = _m(c, 3, g2, 2, a2);
  if (0 === d) return 0;
  const _ = [], p2 = [], f2 = [];
  if (-1 === d) {
    const t3 = Ot(qe, 4);
    Hr(c, t3);
    const s3 = [t3[0].x, t3[1].x, t3[2].x, t3[3].x], i2 = [t3[0].y, t3[1].y, t3[2].y, t3[3].y], r2 = Ot(qe, 3);
    ji(g2, r2);
    const o2 = Nn([r2[0].x, r2[1].x, r2[2].x], 2, [r2[0].y, r2[1].y, r2[2].y], 2, null, 0, s3, 3, i2, 3, null, 0, true, x2.unit(), x2.unit(), f2, p2, h2);
    if (o2 > 0) {
      let t4 = 0;
      for (let s4 = 0; s4 < o2; s4++) {
        const i3 = new mi();
        e.queryCoord2D(p2[s4], i3);
        const r3 = new mi();
        n4.queryCoord2D(f2[s4], r3);
        mi.distance(i3, r3) <= a2 && (_.push(i3.clone()), p2[t4] = p2[s4], f2[t4] = f2[s4], t4++);
      }
      p2.length = t4, _.length = t4;
    }
  }
  for (let P4 = 0; P4 < 2; P4++) {
    let t3, e2;
    0 === P4 ? (t3 = c, e2 = g2) : (e2 = c, t3 = g2);
    for (let n5 = 0; n5 < 2; n5++) {
      const i2 = 0 === n5 ? 0 : t3.length - 1, r2 = [0], o2 = new mi();
      if (0 === P4) bi(e2, t3[i2], r2), Zi(e2, r2[0], o2);
      else {
        const n6 = Ro(e2, t3[i2], x2.unit(), false, -1, 1, r2);
        n(1 === n6), yo(e2, r2[0], o2);
      }
      mi.distance(t3[i2], o2) <= a2 && (0 === P4 ? (p2.push(0 === i2 ? 0 : 1), f2.push(r2[0])) : (f2.push(0 === i2 ? 0 : 1), p2.push(r2[0])), _.push(o2.clone()));
    }
  }
  return gm(t2, e, n4, p2, f2, p2.length, i, r, o, a2, h2, u, m);
}
function qo(t2, e, i, r, o) {
  const a2 = new we();
  if (Fo(t2, x2.unit(), a2), a2.inflate(r), !a2.isIntersectingPoint2D(e)) return 0;
  const h2 = Jr(t2);
  let u = 0, m = h2.specialPoints[0];
  const l2 = [];
  for (let n4 = 1, c = h2.specialPoints.length; n4 < c; ++n4) {
    const i2 = h2.specialPoints[n4], r2 = io(t2, e, m, i2);
    if (0 === l2.length) l2.push(r2);
    else if (r2.t === r2.tmin) n(l2.at(-1).d <= r2.d), l2.at(-1).tmax = r2.tmax;
    else if (l2.at(-1).t === l2.at(-1).tmax) {
      n(l2.at(-1).d >= r2.d);
      const t3 = l2.at(-1).tmin;
      l2[l2.length - 1] = r2, l2.at(-1).tmin = t3;
    } else l2.push(r2);
    m = i2;
  }
  for (const s3 of l2) if (s3.d <= r) {
    const t3 = s3.t;
    i ? (u >= i.length && A(""), i[u] = t3, u++) : u++;
  }
  return u;
}
function Fo(t2, e, s3) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4), Vo(n4, e, s3);
}
function Vo(t2, e, s3) {
  if (e.equalsRange(0, 1)) return void s3.setFromPoints(t2, 4);
  const n4 = Ot(mi, 4);
  Po(t2, e.vmin, e.vmax, n4), s3.setFromPoints(n4, 4);
}
var Lo = class {
  constructor(t2, e, s3) {
    this.dbgCounter = 0, this.controlPoints = t2, this.point = e.clone(), this.maxDistance = s3;
  }
  getMaxDerivative() {
    return 6;
  }
  getValue(t2, e) {
    switch (t2) {
      case 0: {
        const t3 = new mi();
        yo(this.controlPoints, e, t3);
        const s3 = ho(this.controlPoints, 1, e);
        return 2 * t3.sub(this.point).dotProduct(s3);
      }
      case 1: {
        const t3 = new mi();
        yo(this.controlPoints, e, t3);
        const s3 = ho(this.controlPoints, 1, e), n4 = ho(this.controlPoints, 2, e);
        return 2 * (t3.sub(this.point).dotProduct(n4) + s3.dotProduct(s3));
      }
      case 2: {
        const t3 = new mi();
        yo(this.controlPoints, e, t3);
        const s3 = ho(this.controlPoints, 1, e), n4 = ho(this.controlPoints, 2, e), i = ho(this.controlPoints, 3, e);
        return 2 * (t3.sub(this.point).dotProduct(i) + 3 * s3.dotProduct(n4));
      }
      case 3: {
        const t3 = ho(this.controlPoints, 1, e), s3 = ho(this.controlPoints, 2, e), n4 = ho(this.controlPoints, 3, e);
        return 2 * (4 * t3.dotProduct(n4) + 3 * s3.sqrLength());
      }
      case 4: {
        const t3 = ho(this.controlPoints, 2, e), s3 = ho(this.controlPoints, 3, e);
        return 2 * (10 * t3.dotProduct(s3));
      }
      case 5: {
        const t3 = ho(this.controlPoints, 3, e);
        return 2 * (10 * t3.dotProduct(t3));
      }
      default:
        return 0;
    }
  }
  getError(t2) {
    return 0;
  }
  isInterestingInterval(t2, e) {
    if (t2 >= 0 && e <= 1) {
      const s3 = Ot(mi, 4);
      Po(this.controlPoints, t2, e, s3);
      const n4 = new we();
      if (n4.setFromPoints(s3, 4), Math.sqrt(n4.sqrMinDistance(this.point)) > this.maxDistance) return false;
    }
    return true;
  }
};
function Ro(t2, e, n4, i, r, o, a2) {
  D(x2.unit().contains(n4) && o > 0, "getClosestCoordinate"), (r < 0 || Number.isNaN(r)) && (r = Number.MAX_VALUE);
  const h2 = [], u = new mi();
  yo(t2, n4.vmin, u);
  let m = mi.distance(u, e);
  if (m <= r && h2.push(new mi(n4.vmin, m)), n4.vmin !== n4.vmax && (yo(t2, n4.vmax, u), m = mi.distance(u, e), m <= r && h2.push(new mi(n4.vmax, m))), n4.width() > 0) {
    const s3 = Yt(18, Number.NaN), i2 = en(new Lo(t2, e, r), n4, 18, s3);
    for (let n5 = 0; n5 < i2; n5++) yo(t2, s3[n5], u), m = mi.distance(u, e), m > r || h2.push(new mi(s3[n5], m));
  }
  if (i) {
    n(n4.equals(x2.unit()));
    {
      yo(t2, -1, u, true);
      const s3 = new mi();
      yo(t2, 0, s3);
      const n5 = new fm({ start: u, end: s3 }), i2 = n5.getClosestCoordinate(e, true);
      i2 < 1 && (u.assign(n5.getCoord2D(i2)), m = mi.distance(u, e), m <= r && h2.push(new mi(i2 - 1, m)));
    }
    {
      yo(t2, 2, u, true);
      const s3 = new mi();
      yo(t2, n4.vmax, s3);
      const i2 = new fm({ start: s3, end: u }), o2 = i2.getClosestCoordinate(e, true);
      o2 > 0 && (u.assign(i2.getCoord2D(o2)), m = mi.distance(u, e), m <= r && h2.push(new mi(1 + o2, m)));
    }
  }
  if (!h2.length) return 0;
  h2.sort((t3, e2) => t3.compare(e2));
  let l2 = 0;
  const c = h2[0].x;
  if (a2[l2++] = c, l2 < o) {
    const e2 = At(t2, 4, false).total(), s3 = h2[0].y;
    for (let t3 = 1, n5 = h2.length; t3 < n5; t3++) if (h2[t3].y > s3 + e2) {
      h2.length = t3;
      break;
    }
    h2.sort((t3, e3) => Ct(t3.x, e3.x)), l2 = 0, a2[l2++] = h2[0].x;
    for (let t3 = 1, n5 = h2.length; t3 < n5; t3++) h2[t3].x !== a2[l2 - 1] && l2 < o && (a2[l2++] = h2[t3].x);
  }
  return l2;
}
function zo(t2, e, s3, n4, i, r, o) {
  const a2 = Ot(mi, 4);
  return t2.queryControlPoints(a2), Ro(a2, e, s3, n4, i, r, o);
}
function Bo(t2) {
  return t2.getStartXY().norm(1) + t2.getEndXY().norm(1) + t2.m_cp[0].norm(1) + t2.m_cp[1].norm(1);
}
function ko(t2) {
  return t2[0].norm(1) + t2[1].norm(1) + t2[2].norm(1) + t2[3].norm(1);
}
function Go(t2, e, n4) {
  if (n(n4 >= 2), 2 === n4) {
    const s3 = new mi();
    Y(e[0], e[n4 - 1], 1 / 3, s3);
    const i2 = new mi();
    return Y(e[0], e[n4 - 1], 2 / 3, i2), void t2.construct(e[0], s3, i2, e[n4 - 1]);
  }
  const i = e[0], r = e[n4 - 1], o = [0, 0], a2 = zo(t2, i, x2.unit(), false, Number.NaN, 2, o), h2 = [0, 0], u = zo(t2, r, x2.unit(), false, Number.NaN, 2, h2), m = [];
  for (let s3 = 0; s3 < a2; s3++) for (let a3 = 0; a3 < u; a3++) {
    const u2 = o[s3], l3 = h2[a3], c2 = u2 > l3, g3 = (s4, o2) => {
      const a4 = Yt(n4 - 2, Number.NaN), h3 = () => {
        let t3 = 0;
        for (let s5 = 1, i2 = n4 - 1; s5 < i2; s5++) {
          t3 += mi.distance(e[s5 - 1], e[s5]);
          const n5 = t3;
          a4[s5 - 1] = n5;
        }
        t3 += mi.distance(e[n4 - 2], e[n4 - 1]), c2 && a4.reverse();
        for (let e2 = 1, s5 = n4 - 1; e2 < s5; e2++) a4[e2 - 1] /= t3, c2 && (a4[e2 - 1] = 1 - a4[e2 - 1]);
      };
      let m2 = false, g4 = false;
      {
        const e2 = new Pm();
        c2 ? (t2.queryCut(l3, u2, e2, true), s4.assign(e2.get().getControlPoint2()), o2.assign(e2.get().getControlPoint1())) : (t2.queryCut(u2, l3, e2, true), s4.assign(e2.get().getControlPoint1()), o2.assign(e2.get().getControlPoint2())), i.equals(s4) && (m2 = true), r.equals(o2) && (g4 = true);
      }
      h3();
      let d3 = Number.MAX_VALUE;
      const _2 = s4.clone(), p3 = o2.clone();
      for (let t3 = 0; t3 < 5; t3++) {
        d3 = na(true, false, i, _2, p3, r, m2, g4, a4, n4 - 2, e, n4);
      }
      for (let t3 = 0; t3 < 30; t3++) {
        const t4 = _2.clone();
        p3.clone();
        const s5 = na(true, true, i, _2, p3, r, m2, g4, a4, n4 - 2, e, n4);
        if (d3 <= s5 && t4.equals(_2) && t4.equals(p3)) break;
        d3 = s5;
      }
      h3();
      let f2 = false, P4 = Number.MAX_VALUE;
      const y2 = s4.clone(), x4 = o2.clone();
      for (let t3 = 0; t3 < 30; t3++) {
        const t4 = y2.clone();
        x4.clone();
        const s5 = na(f2, true, i, y2, x4, r, m2, g4, a4, n4 - 2, e, n4);
        if (P4 <= s5 && t4.equals(y2) && t4.equals(x4)) break;
        f2 = true, P4 = s5;
      }
      return P4 < d3 ? (s4.assign(y2), o2.assign(x4)) : (s4.assign(_2), o2.assign(p3), P4 = d3), P4;
    }, d2 = new mi(), _ = new mi(), p2 = [g3(d2, _), mi.distance(i, d2) + mi.distance(d2, _) + mi.distance(_, r), d2.x, d2.y, _.x, _.y];
    m.splice(m.length, 0, ...p2);
  }
  let l2 = m[0], c = m[1], g2 = 0;
  for (let s3 = 6; s3 < m.length; s3 += 6) m[s3] < l2 && (l2 = m[s3], c = m[s3 + 1], g2 = s3);
  let d = g2;
  for (let s3 = 0; s3 < m.length; s3 += 6) s3 !== g2 && m[s3 + 1] < c && Math.abs(l2 - m[s3]) < 10 * l2 && (c = m[s3 + 1], d = s3);
  t2.construct(i, new mi(m[d + 2], m[d + 3]), new mi(m[d + 4], m[d + 5]), r);
}
function Wo(t2, e, s3 = false) {
  const n4 = Ot(mi, 4);
  t2.queryControlPoints(n4);
  const i = Ot(qe, 4);
  let r, o, a2;
  Hr(n4, i, true);
  const h2 = i[3].x.isZero(), u = i[3].y.isZero();
  if (h2 || u) if (h2 && !u) {
    if (i[2].x.isZero()) return 0;
    r = i[1].x.div(i[2].x).negate(), o = i[2].y.div(i[3].y), a2 = i[1].y.div(i[3].y);
  } else {
    if (h2 || !u) return 0;
    if (i[2].y.isZero()) return 0;
    r = i[1].y.div(i[2].y).negate(), o = i[2].x.div(i[3].x), a2 = i[1].x.div(i[3].x);
  }
  else {
    i[2].x.divThis(i[3].x), i[1].x.divThis(i[3].x), i[2].y.divThis(i[3].y), i[1].y.divThis(i[3].y);
    const t3 = i[2].x.sub(i[2].y);
    if (t3.isZero()) return 0;
    r = i[1].x.sub(i[1].y).div(t3).negate(), o = i[2].x.clone(), a2 = i[1].x.clone();
  }
  if (!s3 && r.abs().value() > 2) return 0;
  const m = [0, 0], l2 = t2.getStartXY().equals(t2.getEndXY()), c = nn(1, -r.toDouble(), r.add(o).mul(r).add(a2).toDouble(), x2.unit(), l2, m);
  if (0 === c) return 0;
  if (m[0] >= 0 && m[0] <= 1) {
    const t3 = r.toDouble() - m[0];
    if (s3 || t3 >= 0 && t3 <= 1) return e[0] = m[0], e[1] = t3, e[0] > e[1] && (e[1] = Pt(e[0], e[0] = e[1])), 2;
  }
  if (2 === c && m[1] >= 0 && m[1] <= 1) {
    const t3 = r.toDouble() - m[1];
    if (s3 || t3 >= 0 && t3 <= 1) return e[0] = m[1], e[1] = t3, e[0] > e[1] && (e[1] = Pt(e[0], e[0] = e[1])), 2;
  }
  return 0;
}
function jo(t2, e, s3) {
  const n4 = t2[1].mulE(e[2]).subThisE(t2[2].mulE(e[1])), i = t2[1].mulE(e[3]).subThisE(t2[3].mulE(e[1])).mulThis(3), r = t2[2].mulE(e[3]).subThisE(t2[3].mulE(e[2])).mulThis(3), o = Ot(p, 2);
  let a2 = dn(r, i, n4, new x2(0, 1), false, o);
  a2 < 0 && (a2 = 0);
  let h2 = 0;
  for (let u = 0; u < a2; u++) Vs(o[u].value(), 0, 1) || (s3[h2].setE(o[u]), h2++);
  return h2;
}
function Zo(t2, e) {
  e[0].set(0);
  let n4 = 1;
  const i = Ot(p, 4);
  jr(t2, i, true);
  const r = Ot(p, 4);
  Zr(t2, r, true);
  {
    const t3 = i[3].mul(3), s3 = i[2].mul(2), r2 = i[1].clone(), o = Ot(p, 2);
    let a2 = dn(t3, s3, r2, new x2(0, 1), false, o);
    a2 < 0 && (a2 = 0);
    for (let i2 = 0; i2 < a2; i2++) Vs(o[i2].value(), 0, 1) || (e[n4] = o[i2], n4++);
  }
  {
    const t3 = r[3].mul(3), s3 = r[2].mul(2), i2 = r[1].clone(), o = Ot(p, 2);
    let a2 = dn(t3, s3, i2, new x2(0, 1), false, o);
    a2 < 0 && (a2 = 0);
    for (let r2 = 0; r2 < a2; r2++) Vs(o[r2].value(), 0, 1) || (e[n4] = o[r2], n4++);
  }
  if (n4 += jo(i, r, e.slice(n4)), e[n4].set(1), n4++, n4 > 2) {
    Zt(e, 0, n4, (t3, e2) => {
      const s4 = t3.value(), n5 = e2.value();
      return s4 < n5 ? -1 : s4 > n5 ? 1 : 0;
    });
    let s3 = 0;
    const i2 = e[0].clone();
    let r2 = 0;
    const o = ko(t2) * Qs(), a2 = new mi();
    po(t2, e[0].value(), a2);
    for (let h2 = 1; h2 < n4; h2++) {
      const n5 = new mi();
      if (po(t2, e[h2].value(), n5), e[h2].eq(i2) || n5.isEqualPoint2D(a2, o)) {
        if (0 !== s3) {
          if (0 === e[h2].eps()) i2.setE(e[h2]), r2 = 0;
          else if (0 !== r2) {
            const t3 = H(1 / e[h2].eps()), s4 = 1 / r2, n6 = t3 + s4;
            i2.set((e[h2].value() * t3 + i2.value() * s4) / n6), r2 = 1 / n6, i2.setError(Math.sqrt(r2));
          }
          e[s3].setE(i2), po(t2, i2.value(), a2);
        }
      } else s3++, e[s3].setE(e[h2]), i2.setE(e[h2]), po(t2, i2.value(), a2), r2 = H(e[h2].eps());
    }
    s3++, n4 = s3;
  }
  return 1 === n4 && (n4 = 2, e[1].set(1)), n(0 === e[0].value()), n(1 === e[n4 - 1].value()), n4;
}
function Ho(t2, e, s3, n4, i) {
  const r = Ot(p, 4), o = Ot(p, 3), a2 = new x2(0, 1);
  let h2 = 0;
  if (e) {
    if (Zr(t2, r, false), h2 = _n(r[3], r[2], r[1], r[0].sub(s3), a2, false, o), n4) for (let u = 0; u < h2; u++) {
      const e2 = new mi();
      yo(t2, o[u].value(), e2), n4[u] = e2.x;
    }
  } else if (jr(t2, r, false), h2 = _n(r[3], r[2], r[1], r[0].sub(s3), a2, false, o), n4) for (let u = 0; u < h2; u++) {
    const e2 = new mi();
    yo(t2, o[u].value(), e2), n4[u] = e2.y;
  }
  if (i) for (let u = 0; u < h2; u++) i[u] = o[u].value();
  else n4 && Zt(n4, 0, h2, Ct);
  return h2;
}
function Uo(t2, e, s3, n4) {
  const i = Oo(t2, e, s3, n4.getEnvelope2D());
  if (i.isEmpty()) return new x2(i);
  const r = Ot(mi, s3);
  for (let a2 = 0; a2 < s3; ++a2) n4.xyRot(t2[a2], r[a2]);
  const o = Oo(r, e, s3, n4.getRotatedEnvelope2D());
  return i.intersect(new x2(o)), new x2(i);
}
function Oo(t2, e, s3, n4) {
  const i = Ot(mi, s3);
  for (let a2 = 0; a2 < s3; ++a2) i[a2] = new mi(a2 / (s3 - 1), 0);
  const r = (t3, e2, s4, n5) => {
    const i2 = 0.1, r2 = new p(e2.x).subE(new p(t3.x)).divE(new p(e2.y).subE(new p(t3.y))).mulE(new p(s4).subE(new p(t3.y))).addE(new p(t3.x));
    if (r2.eps() > i2) {
      const n6 = (e2.x - t3.x) / (e2.y - t3.y) * (s4 - t3.y) + t3.x;
      r2.set(n6, Qs());
    }
    if (r2.lt(new p(0)) || r2.gt(new p(1))) return false;
    let o2 = r2.value() - r2.eps();
    o2 = Us(o2, 0, 1);
    let a2 = r2.value() + r2.eps();
    return a2 = Us(a2, 0, 1), n5.mergeCoordinate(o2), n5.mergeCoordinate(a2), true;
  }, o = [];
  {
    const e2 = (t3, e3) => {
      o.length = s3;
      const n5 = Cr(i, s3, o, true), a3 = new x2();
      a3.setEmpty();
      const h3 = (s4) => s4.y < t3 ? -1 : s4.y > e3 ? 1 : 0;
      let u = i[o[0]], m = h3(u);
      0 === m && a3.mergeCoordinate(u.x);
      for (let s4 = 1; s4 <= n5; ++s4) {
        const l2 = i[o[s4 % n5]], c = h3(l2);
        0 === c && a3.mergeCoordinate(l2.x);
        let g2 = 0;
        c !== m && (g2 = c * m === 0 ? 1 === c || 1 === m ? 2 : 1 : 3, 1 & g2 && r(u, l2, t3, a3), 2 & g2 && r(u, l2, e3, a3)), u = l2, m = c;
      }
      return a3;
    };
    for (let n5 = 0; n5 < s3; ++n5) i[n5].y = t2[n5].x;
    const a2 = e2(n4.xmin, n4.xmax);
    if (a2.isEmpty()) return new x2(a2);
    for (let n5 = 0; n5 < s3; ++n5) i[n5].y = t2[n5].y;
    const h2 = e2(n4.ymin, n4.ymax);
    return a2.intersect(new x2(h2)), new x2(a2);
  }
}
function Qo(t2, e, s3) {
  s3.setEmpty(), s3.merge(Uo(t2, null, 4, e));
}
function Jo(t2, e, s3) {
  s3.length = 0;
  {
    const e2 = new p();
    ro(t2, e2);
    const n5 = new Ne();
    if (bo(t2, e2, n5), n5.isZero()) return e2.isZero() || e2.eq(new p(1)) ? 0 : (s3.push(e2.value()), 1);
  }
  const n4 = Ot(p, 4);
  Gr(t2, n4, true);
  const i = Ot(p, 4);
  Wr(t2, i, true);
  const r = Ot(p, 6), o = n4[3].negate().mulE(i[1]).addE(n4[2].mulE(i[2]).mul(2)).addE(n4[1].mulE(i[3])), a2 = n4[3].negate().mulE(i[1]).subE(n4[2].mulE(i[2]).mul(2)).addE(n4[1].mulE(i[3])), h2 = n4[2].mulE(n4[2]).subE(i[2].mulE(i[2]));
  r[0] = i[1].mulE(i[1]).mulE(o).addE(n4[1].mulE(n4[1]).mulE(a2)).addE(n4[1].mulE(i[1]).mulE(h2).mul(2)).mul(6), r[1] = n4[2].mulE(i[1]).subE(n4[1].mulE(i[2])).mulE(n4[2].mulE(n4[2]).addE(n4[1].mulE(n4[3]).mul(2)).addE(i[2].mulE(i[2])).addE(i[1].mulE(i[3]).mul(2))).mul(24);
  const u = n4[1].mulE(i[2]).mulE(i[2]).mulE(i[3]), m = n4[2].mulE(n4[2]).mulE(n4[3]).mulE(i[1]).subE(u).mul(156), l2 = n4[3].mulE(i[1]).subE(n4[1].mulE(i[3])), c = n4[3].mulE(i[1]).subE(n4[1].mulE(i[3])), g2 = n4[1].mulE(n4[3]).mulE(c).addE(i[1].mulE(i[3]).mulE(l2)).mul(72), d = i[1].mulE(i[3]).subE(n4[1].mulE(n4[3])), _ = n4[2].mulE(i[2]).mulE(d).mul(120), p2 = n4[1].mulE(n4[2]).mulE(n4[2]).mulE(i[3]), f2 = n4[3].mulE(i[1]).mulE(i[2]).mulE(i[2]).subE(p2).mul(36);
  r[2] = m.addE(g2).addE(_).addE(f2);
  const P4 = n4[2].mulE(n4[3]).mulE(n4[3]).mulE(i[1]).subE(n4[1].mulE(i[2]).mulE(i[3]).mulE(i[3])).mul(360), y2 = n4[2].mulE(i[2]).mulE(n4[2].mulE(n4[3]).subE(i[2].mulE(i[3]))).addE(n4[3].mulE(i[2]).mulE(i[2]).mulE(i[2])).subE(n4[2].mulE(n4[2]).mulE(n4[2]).mulE(i[3])).mul(24), x4 = n4[2].mulE(i[1]).mulE(i[3]).mulE(i[3]).subE(n4[1].mulE(n4[3]).mulE(n4[3]).mulE(i[2])).mul(72), C3 = n4[3].mulE(i[3]).mulE(i[1].mulE(i[2]).subE(n4[1].mulE(n4[2]))).mul(288);
  r[3] = P4.addE(y2).addE(x4).addE(C3), r[4] = i[3].mulE(i[3]).addE(n4[3].mulE(n4[3])).mulE(n4[3].mulE(i[1]).subE(n4[1].mulE(i[3]))).mul(270).addE(n4[3].mulE(i[2]).subE(n4[2].mulE(i[3]))).mulE(n4[2].mulE(n4[3]).addE(i[2].mulE(i[3]))).mul(180), r[5] = n4[3].mulE(i[2]).subE(n4[2].mulE(i[3])).mulE(n4[3].mulE(n4[3]).addE(i[3].mulE(i[3]))).mul(216);
  const v2 = Ot(p, 5), b2 = pn(r, 5, new x2(0, 1), false, v2, 5);
  if (b2 > 0) {
    let n5 = Math.abs(t2.getCurvature(0)), i2 = 0;
    const r2 = Math.abs(t2.getCurvature(1));
    (r2 > n5 || !Number.isFinite(r2)) && (i2 = 1);
    for (let e2 = 0; e2 < b2; e2++) {
      const s4 = Math.abs(t2.getCurvature(v2[e2].value()));
      t2.getCoord2D(v2[e2].value()), (s4 > n5 || !Number.isFinite(s4)) && (n5 = s4, i2 = v2[e2].value());
    }
    if ((!Number.isFinite(n5) || 1 / n5 < e) && !Vs(i2, 0, 1)) {
      const e2 = t2.getCoord2D(i2);
      if (!e2.equals(t2.getStartXY()) && !e2.equals(t2.getEndXY())) return s3.push(i2), 1;
    }
  }
  if (!t2.isClosed()) {
    const e2 = [0, 0], n5 = Wo(t2, e2, false);
    for (let t3 = 0; t3 < n5; t3++) e2[t3] > 0 && e2[t3] < 1 && s3.push(e2[t3]);
    return s3.length;
  }
  return 0;
}
var Ko = class {
  constructor(t2, e) {
    this.b = t2, this.len = e;
  }
  getMaxDerivative() {
    return 1;
  }
  getValue(t2, e) {
    return 0 === t2 ? this.len - Ur(this.b, e, false) : 0;
  }
  getError(t2) {
    return 0;
  }
};
function $o(t2, e, n4, i, r, o, a2) {
  for (; ; ) {
    const h2 = mi.distance(e[0], e[3]), u = mi.distance(e[0], e[1]) + mi.distance(e[1], e[2]) + mi.distance(e[2], e[3]);
    if (u - h2 <= i + n4 * u) return t2 + Q(h2, u, 0.5);
    const m = (t3) => ho(e, 1, t3).length();
    {
      n(a2 < 12);
      let h3 = m(0), l3 = m(1);
      r[0] += 2, h3 > l3 && (l3 = Pt(h3, h3 = l3), e[3] = Pt(e[0], e[0] = e[3]), e[2] = Pt(e[1], e[1] = e[2]));
      let c2 = h3 / (h3 + l3), g3 = 1, d2 = u;
      for (; c2 < 1 / 32 && d2 >= 32 * (i + n4 * d2); ) {
        g3 /= 4;
        const t3 = m(g3);
        r[0]++, c2 = h3 / (t3 + h3);
        const s3 = new mi();
        if (yo(e, 0.5 * g3, s3), d2 = mi.distance(s3, e[0]), d2 <= i) {
          const t4 = new mi();
          yo(e, g3, t4), d2 += mi.distance(t4, s3);
        }
      }
      if (1 !== g3) {
        const s3 = Ot(mi, 4);
        fo(e, g3, e, s3), t2 = $o(t2, s3, n4, i, r, 0, a2 + 1), o++, a2++;
        continue;
      }
    }
    const l2 = 8;
    r[0] += l2;
    const c = ur(l2, m, 0, 1), g2 = 16;
    r[0] += g2;
    const d = ur(g2, m, 0, 1);
    let _ = Math.abs(c - d) > i + n4 * u;
    if (!_) return t2 + d;
    if (o < 3) {
      const s3 = Ot(mi, 4);
      fo(e, 0.5, e, s3), t2 = $o(t2, s3, n4, i, r, o + 1, a2 + 1), o++, a2++;
      continue;
    }
    const p2 = 32;
    r[0] += p2;
    const f2 = ur(p2, m, 0, 1);
    if (_ = Math.abs(d - f2) > i + n4 * u, !_) return t2 + f2;
    const P4 = 64;
    r[0] += P4;
    const y2 = ur(P4, m, 0, 1);
    if (_ = Math.abs(f2 - y2) > i + n4 * u, !_) return t2 + y2;
    const x4 = 128;
    r[0] += x4;
    const C3 = ur(x4, m, 0, 1);
    return _ = Math.abs(y2 - C3) > i + n4 * u, t2 + C3;
  }
}
function ta(t2, e, s3, n4, i) {
  if (s3 === e) return 0;
  const r = Ot(mi, 4);
  t2.queryControlPoints(r);
  const o = Ot(mi, 4);
  Po(r, e, s3, o);
  return $o(0, o, n4, i, [0], 0, 0);
}
function ea(t2, e, s3, n4, i) {
  let r = true;
  const o = Kn(5, e, s3, n4, i, (e2) => {
    const s4 = mo(t2, 1, e2);
    return (r ? t2.getCoordX(e2) - t2.getStartX() : t2.getCoordY(e2) - t2.getStartY()) * s4.length();
  });
  r = false;
  const a2 = Kn(5, e, s3, n4, i, (e2) => {
    const s4 = mo(t2, 1, e2);
    return (r ? t2.getCoordX(e2) - t2.getStartX() : t2.getCoordY(e2) - t2.getStartY()) * s4.length();
  });
  return new mi(o, a2);
}
function sa(t2, e, s3, n4, i, r, o, a2, h2) {
  const u = Ot(mi, 4);
  t2.queryControlPoints(u);
  const m = Ot(mi, 4);
  if (e.queryControlPoints(m), u[0].equals(m[0])) {
    if (u[1].equals(m[1]) && u[2].equals(m[2]) && u[3].equals(m[3])) return s3 && (s3.length = 0, s3.push(u[0]), s3.push(u[3])), n4 && (n4.length = 0, n4.push(0), n4.push(1)), i && (i.length = 0, i.push(0), i.push(1)), true;
    if (!u[0].equals(m[3])) return false;
  }
  return !!(u[0].equals(m[3]) && u[1].equals(m[2]) && u[2].equals(m[1]) && u[3].equals(m[0])) && (n4 && (n4.length = 0, n4.push(0), n4.push(1), h2 && (n4[1] = Pt(n4[0], n4[0] = n4[1]))), i && (i.length = 0, i.push(1), i.push(0), h2 && (i[1] = Pt(i[0], i[0] = i[1]))), s3 && (s3.length = 0, s3.push(u[0]), s3.push(u[3]), h2 && (s3[1] = Pt(s3[0], s3[0] = s3[1]))), true);
}
function na(t2, e, n4, i, r, o, a2, h2, u, m, l2, c) {
  n(m + 2 === c);
  let g2 = 0, d = 0, _ = 0, p2 = 0, f2 = 0, P4 = 0, y2 = 0;
  const x4 = (t3, e2) => {
    const s3 = 1 - e2, a3 = n4.mul($(s3)), h3 = i.mul(3 * e2 * s3 * s3), u2 = r.mul(3 * e2 * e2 * s3), m2 = o.mul($(e2));
    return a3.add(h3).add(u2).add(m2).sub(l2[t3]).sqrLength();
  };
  for (let s3 = 1, v2 = c - 1; s3 < v2; s3++) {
    let e2 = u[s3 - 1];
    if (t2) {
      s3 > 2 ? (e2 = Us(2 * u[s3 - 2] - u[s3 - 3], 0, 1), u[s3 - 1] = e2) : 2 === s3 && (e2 = Us(2 * u[s3 - 2], 0, 1), u[s3 - 1] = e2);
      const t3 = (t4, e3, s4) => {
        let a4 = -1;
        for (let h4 = 0; !(Math.abs(e3 - a4) < 1e-12) && 10 !== h4; h4++) {
          const h5 = e3 * e3, u2 = 1 - e3, m3 = u2 * u2, c3 = m3 * u2, g3 = n4.x - 2 * i.x + r.x, d2 = n4.x - 3 * i.x + 3 * r.x - o.x, _2 = n4.y - 2 * i.y + r.y, p3 = n4.y - 3 * i.y + 3 * r.y - o.y, f3 = n4.x - i.x - 2 * g3 * e3 + d2 * h5, P5 = -l2[t4].x + n4.x * c3 + e3 * (3 * i.x * m3 + e3 * (3 * r.x * u2 + o.x * e3)), y3 = n4.y - i.y - 2 * _2 * e3 + p3 * h5, x5 = -l2[t4].y + n4.y * c3 + e3 * (3 * i.y * m3 + e3 * (3 * r.y * u2 + o.y * e3)), C5 = -6 * (f3 * P5 + y3 * x5), v4 = 6 * (3 * H(f3) - (-2 * g3 + 2 * d2 * e3) * P5) + 6 * (3 * H(y3) - (-2 * _2 + 2 * p3 * e3) * x5);
          if (a4 = e3, 0 === v4) break;
          e3 = Us(e3 - C5 / v4, s4, 1);
        }
        return a4;
      };
      {
        const e3 = x4(s3, u[s3 - 1]);
        let n5 = t3(s3, u[s3 - 1], 0), i2 = x4(s3, n5);
        if (1.01 * e3 < i2) {
          const e4 = s3 > 1 ? u[s3 - 2] : 0, r2 = t3(s3, 0.3 * (u[s3 - 1] - e4) + e4, 0), o2 = x4(s3, r2);
          o2 < i2 && (i2 = o2, n5 = r2);
        }
        e3 > i2 && (u[s3 - 1] = n5);
      }
    }
    const a3 = u[s3 - 1], h3 = a3 * a3, m2 = h3 * a3, c2 = 1 - a3, C4 = c2 * c2, v3 = C4 * c2;
    g2 += 3 * h3 * C4 * C4, d += 3 * m2 * v3, _ += 3 * h3 * h3 * C4;
    const b2 = -(v3 * n4.x + m2 * o.x - l2[s3].x);
    p2 += b2 * a3 * C4, f2 += b2 * h3 * c2;
    const S2 = -(v3 * n4.y + m2 * o.y - l2[s3].y);
    P4 += S2 * a3 * C4, y2 += S2 * h3 * c2;
  }
  if (e) {
    const t3 = g2 * _ - d * d;
    Math.abs(t3) >= 1e-12 * (Math.abs(g2 * _) + Math.abs(d * d)) + 1e-10 ? (a2 || (i.x = (p2 * _ - f2 * d) / t3, i.y = (P4 * _ - y2 * d) / t3), h2 || (r.x = (g2 * f2 - d * p2) / t3, r.y = (g2 * y2 - d * P4) / t3)) : (Y(n4, o, 0.3, i), Y(n4, o, 0.6, r));
  }
  let C3 = 0;
  for (let s3 = 1, v2 = c - 1; s3 < v2; s3++) C3 += x4(s3, u[s3 - 1]);
  return C3;
}
var ia = z2;
var ra = class _ra extends ds2 {
  constructor(t2) {
    t2 && t2.cp ? (super({ start: t2.cp[0], end: t2.cp[3], vd: t2.vd }), this.m_cp = Ot(mi, 2), this.m_cp[0].assign(t2.cp[1]), this.m_cp[1].assign(t2.cp[2])) : void 0 === t2 || jt(t2, "vd") ? (super({ vd: t2?.vd, XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_cp = Ot(mi, 2), this.m_cp[0].setCoords(0, 0), this.m_cp[1].setCoords(0, 0)) : t2.from ? (super({ start: t2.from, end: t2.to, vd: t2.vd }), this.m_cp = Ot(mi, 2), this.m_cp[0].assign(t2.cp1), this.m_cp[1].assign(t2.cp2)) : (super({ XStart: 0, YStart: 0, XEnd: 0, YEnd: 0, vd: t2.vd }), b("unrecognized constructor params"), this.m_cp = Ot(mi, 2), this.m_cp[0].setCoords(0, 0), this.m_cp[1].setCoords(0, 0)), this.m_cachedValues = 0;
  }
  getBoundary() {
    return $s2(this);
  }
  construct(t2, e, s3, n4) {
    this.m_XStart = t2.x, this.m_YStart = t2.y, this.m_XEnd = n4.x, this.m_YEnd = n4.y, this.m_cp[0].assign(e), this.m_cp[1].assign(s3), this.afterCompletedModification();
  }
  constructPoints(t2) {
    this.m_XStart = t2[0].x, this.m_YStart = t2[0].y, this.m_XEnd = t2[3].x, this.m_YEnd = t2[3].y, this.m_cp[0].assign(t2[1]), this.m_cp[1].assign(t2[2]), this.afterCompletedModification();
  }
  constructFromQuadratic(t2) {
    const e = Ot(mi, 4);
    $i(t2, e), this.constructPoints(e);
  }
  constructFromQuadraticSegment(t2) {
    this.dropAllAttributes(), this.assignVertexDescription(t2.getDescription()), this.m_XStart = t2.getStartX(), this.m_YStart = t2.getStartY(), this.m_XEnd = t2.getEndX(), this.m_YEnd = t2.getEndY(), L(2, t2.getStartXY(), t2.getControlPoint1(), 2 / 3, this.m_cp[0]), L(2, t2.getControlPoint1(), t2.getEndXY(), 1 / 3, this.m_cp[1]), this.afterCompletedModification(), ns(this, t2);
  }
  getGeometryType() {
    return a.enumBezier;
  }
  queryEnvelope(t2) {
    if (2 !== t2.m_EnvelopeType) return void n(0);
    if (t2.setCoords(this.getStartXY()), t2.mergeNe(this.getEndXY()), t2.contains(this.m_cp[0]) && t2.contains(this.m_cp[1])) return;
    const e = Kr(this);
    if (null !== e) {
      const s3 = new mi();
      for (const n5 of e.specialPoints) this.queryCoord2D(n5, s3), t2.mergeNe(s3);
      return;
    }
    const n4 = Ot(p, 8), i = Ot(mi, 4);
    this.queryControlPoints(i);
    const r = Zo(i, n4), o = new mi();
    for (let s3 = 1; s3 < r - 1; s3++) this.queryCoord2D(n4[s3].value(), o), t2.mergeNe(o);
  }
  applyTransformation(t2) {
    if (1 === t2.m_TransformationType) {
      const e = Ot(mi, 4);
      return this.queryControlPoints(e), t2.transformPoints2D(e, 4, e), this.setStartXY(e[0]), this.m_cp[0].assign(e[1]), this.m_cp[1].assign(e[2]), this.setEndXY(e[3]), void to(this);
    }
    n(0);
  }
  createInstance() {
    return new _ra({ vd: this.m_description });
  }
  calculateLength2D() {
    return Ur(this, 1, false);
  }
  calculateLowerLength2D() {
    return mi.distance(this.getStartXY(), this.getEndXY());
  }
  calculateUpperLength2D() {
    return mi.distance(this.getStartXY(), this.m_cp[0]) + mi.distance(this.m_cp[0], this.m_cp[1]) + mi.distance(this.getEndXY(), this.m_cp[1]);
  }
  queryCoord2D(t2, e) {
    return this.queryCoord2DExtends(t2, e, true);
  }
  queryCoord2DMP(t2, e) {
    n(0);
  }
  queryCoord2DExtends(t2, e, s3) {
    const n4 = Ot(mi, 4);
    this.queryControlPoints(n4), yo(n4, t2, e, s3);
  }
  queryCoord2DE(t2, e) {
    Co(this, t2, e);
  }
  getCoordX(t2) {
    if (t2 < 0 || t2 > 1) {
      const e2 = new mi();
      return this.queryCoord2DExtends(t2, e2, true), e2.x;
    }
    const e = Q(this.getStartX(), this.m_cp[0].x, t2), s3 = Q(this.m_cp[0].x, this.m_cp[1].x, t2), n4 = Q(this.m_cp[1].x, this.getEndX(), t2), i = Q(e, s3, t2), r = Q(s3, n4, t2);
    return Q(i, r, t2);
  }
  getCoordY(t2) {
    if (t2 < 0 || t2 > 1) {
      const e2 = new mi();
      return this.queryCoord2DExtends(t2, e2, true), e2.y;
    }
    const e = Q(this.getStartY(), this.m_cp[0].y, t2), s3 = Q(this.m_cp[0].y, this.m_cp[1].y, t2), n4 = Q(this.m_cp[1].y, this.getEndY(), t2), i = Q(e, s3, t2), r = Q(s3, n4, t2);
    return Q(i, r, t2);
  }
  cut(t2, e, s3) {
    const n4 = new Pm();
    return this.queryCut(t2, e, n4, s3), n4.releaseSegment();
  }
  queryCut(t2, e, s3, n4) {
    const i = s3.createCubicBezier();
    if (this.cutBezierIgnoreAttributes(t2, e, i), n4) return;
    i.assignVertexDescription(this.m_description);
    const r = this.m_description.getAttributeCount();
    if (r > 1) {
      for (let e2 = 1; e2 < r; e2++) {
        const s4 = this.m_description.getSemantics(e2), n5 = ia.getComponentCount(s4);
        for (let e3 = 0; e3 < n5; e3++) {
          const n6 = this.getAttributeAsDbl(t2, s4, e3);
          i.setStartAttribute(s4, e3, n6);
        }
      }
      for (let t3 = 1; t3 < r; t3++) {
        const s4 = this.m_description.getSemantics(t3), n5 = ia.getComponentCount(s4);
        for (let t4 = 0; t4 < n5; t4++) {
          const n6 = this.getAttributeAsDbl(e, s4, t4);
          i.setEndAttribute(s4, t4, n6);
        }
      }
    }
  }
  queryDerivative(t2, e) {
    bo(this, t2, e);
  }
  cutBezierIgnoreAttributes(t2, s3, n4) {
    (t2 < 0 || s3 > 1 || t2 > s3) && P("Cubic_bezier.cut_bezier_ignore_attributes");
    const i = Ot(mi, 4);
    this.queryControlPoints(i);
    const r = Ot(mi, 4);
    Po(i, t2, s3, r), n4.setControlPoints(r);
  }
  splitBezierIgnoreAttributes(t2, s3, n4) {
    this === s3 && this === n4 && P("Cubic_bezier.split_bezier_ignore_attributes");
    const i = Ot(mi, 4);
    this.queryControlPoints(i);
    const r = Ot(mi, 4), o = Ot(mi, 4);
    fo(i, t2, r, o), s3 && s3.setControlPoints(r), n4 && n4.setControlPoints(o);
  }
  getAttributeAsDbl(t2, e, s3) {
    if (0 === e) return 0 === s3 ? this.getCoordX(t2) : this.getCoordY(t2);
    if (0 === t2) return this.getStartAttributeAsDbl(e, s3);
    if (1 === t2) return this.getEndAttributeAsDbl(e, s3);
    const n4 = this.getStartAttributeAsDbl(e, s3), i = this.getEndAttributeAsDbl(e, s3), r = this.calculateLength2D(), o = r > 0 ? this.tToLength(t2) / r : 0, a2 = ia.getInterpolation(e);
    return It(a2, n4, i, o, ia.getDefaultValue(e));
  }
  getClosestCoordinate(t2, e) {
    const s3 = [Number.NaN];
    return zo(this, t2, x2.unit(), e, -1, 1, s3), s3[0];
  }
  getClosestCoordinateOnInterval(t2, e, s3 = -1) {
    const n4 = [Number.NaN];
    return 0 === zo(this, t2, e, false, s3, 1, n4) ? Number.NaN : n4[0];
  }
  getYMonotonicParts(t2, e = false) {
    return this.getMonotonicParts(t2, e);
  }
  getMonotonicParts(t2, n4) {
    t2.length < 2 && P("");
    const i = Jr(this);
    if (2 === i.specialPointsCount() && this.isMonotoneQuickAndDirty()) return 0;
    let r = 0;
    n(t2.length >= i.specialPointsCount() - 1);
    for (let e = 1, s3 = i.specialPointsCount(); e < s3; ++e) this.queryCut(i.specialPoints[e - 1], i.specialPoints[e], t2[r], n4), r++;
    for (let e = 0; e < r; ++e) {
      co(t2[e].get());
    }
    return r;
  }
  intersectionWithAxis2D(t2, e, s3, n4) {
    const i = Ot(mi, 4);
    return this.queryControlPoints(i), Ho(i, t2, e, s3, n4);
  }
  intersectionOfYMonotonicWithAxisX(t2, e) {
    if (this.m_YStart === this.m_YEnd) return t2 === this.m_YStart ? e : Number.NaN;
    if (t2 === this.m_YStart) return this.m_XStart;
    if (t2 === this.m_YEnd) return this.m_XEnd;
    const n4 = [0, 0], i = this.intersectionWithAxis2D(true, t2, n4, null);
    return n(2 !== i), -1 === i ? e : n4[0];
  }
  isCurve() {
    return true;
  }
  isDegenerate(t2) {
    return ze(this, t2);
  }
  isDegenerate3D(t2, e) {
    return n(0), false;
  }
  queryLooseEnvelope(t2) {
    if (2 === t2.m_EnvelopeType) return t2.setCoords({ pt: this.getStartXY() }), t2.mergeNe(this.m_cp[0]), t2.mergeNe(this.m_cp[1]), void t2.mergeNe(this.getEndXY());
    n(0);
  }
  clone(t2) {
    const e = this.createInstance();
    return this.copyTo(e), e;
  }
  queryInterval(t2, e) {
    if (0 === t2) {
      const t3 = n3.constructEmpty();
      this.queryEnvelope(t3);
      const s3 = x2.constructEmpty();
      return 0 === e ? t3.queryIntervalX(s3) : t3.queryIntervalY(s3), s3;
    }
    return super.queryInterval(t2, e);
  }
  queryLooseEnvelopeOnInterval(t2, e) {
    const s3 = Ot(mi, 4);
    this.queryControlPoints(s3), Po(s3, t2.vmin, t2.vmax, s3), e.setFromPoints(s3, 4);
  }
  changeEndPoints2D(t2, e) {
    if (t2.isEqual(this.m_XStart, this.m_YStart) && e.isEqual(this.m_XEnd, this.m_YEnd)) return;
    const s3 = this.m_cp[0].isEqual(this.m_XStart, this.m_YStart), n4 = this.m_cp[0].isEqual(this.m_XEnd, this.m_YEnd), i = this.m_cp[1].isEqual(this.m_XStart, this.m_YStart), r = this.m_cp[1].isEqual(this.m_XEnd, this.m_YEnd);
    this.setStartXY(t2), this.setEndXY(e), s3 ? this.m_cp[0].setCoordsPoint2D(t2) : n4 && this.m_cp[0].setCoordsPoint2D(e), r ? this.m_cp[1].setCoordsPoint2D(e) : i && this.m_cp[1].setCoordsPoint2D(t2), this.normalizeAfterEndpointChange();
  }
  tToLength(t2) {
    return Ur(this, t2, true);
  }
  lengthToT(t2) {
    return Or(this, t2);
  }
  calculateWeightedAreaCentroid2D(t2) {
    const e = Ot(mi, 4);
    kr(this, e);
    const s3 = e[3], n4 = e[2], i = e[1], r = new mi();
    r.x = (5 * s3.x * s3.x * (7 * n4.y + 16 * i.y) + s3.x * (-35 * s3.y * n4.x + 40 * n4.x * n4.y - 80 * s3.y * i.x + 140 * n4.x * i.y + 112 * i.x * i.y) - 2 * (s3.y * (20 * n4.x * n4.x + 70 * n4.x * i.x + 56 * i.x * i.x) - 7 * (4 * n4.x + 5 * i.x) * (-n4.y * i.x + n4.x * i.y))) / 840, r.y = (-5 * s3.y * s3.y * (7 * n4.x + 16 * i.x) + s3.y * (5 * s3.x * (7 * n4.y + 16 * i.y) - 4 * (10 * n4.x * n4.y + 35 * n4.y * i.x + 28 * i.x * i.y)) + 2 * (-7 * (4 * n4.y + 5 * i.y) * (n4.y * i.x - n4.x * i.y) + s3.x * (20 * n4.y * n4.y + 70 * n4.y * i.y + 56 * i.y * i.y))) / 840;
    const o = lo(this);
    return r.x += (e[0].x - t2.x) * o, r.y += (e[0].y - t2.y) * o, r;
  }
  calculateWeightedCentroid2D() {
    const t2 = new mi();
    return this.isDegenerate(0) ? (t2.setCoords(0, 0), t2) : Br(this) ? (t2.assign(this.getCoord2D(0.5).mul(this.calculateLength2D())), t2) : (t2.assign(Qr(this, 1)), t2);
  }
  getControlPoint1() {
    return this.m_cp[0].clone();
  }
  setControlPoint1(t2) {
    this.m_cp[0].setCoordsPoint2D(t2), this.afterCompletedModification();
  }
  getControlPoint2() {
    return this.m_cp[1].clone();
  }
  setControlPoint2(t2) {
    this.m_cp[1].setCoordsPoint2D(t2), this.afterCompletedModification();
  }
  queryControlPoints(t2) {
    t2[0].assign(this.getStartXY()), t2[1].assign(this.m_cp[0]), t2[2].assign(this.m_cp[1]), t2[3].assign(this.getEndXY());
  }
  queryControlPointsHelper(t2) {
    return this.queryControlPoints(t2), 4;
  }
  setControlPoints(t2) {
    for (let s3 = 0; s3 < 4; s3++) t2[s3].isNAN() && P("NAN control points in bezier are not supported");
    this.m_XStart = t2[0].x, this.m_YStart = t2[0].y, this.m_cp[0].setCoordsPoint2D(t2[1]), this.m_cp[1].setCoordsPoint2D(t2[2]), this.m_XEnd = t2[3].x, this.m_YEnd = t2[3].y, this.afterCompletedModification();
  }
  getTangent(t2) {
    const e = Ot(mi, 4);
    return this.queryControlPoints(e), vo(e, t2);
  }
  getDerivative(t2) {
    const e = Ot(mi, 4);
    return this.queryControlPoints(e), ho(e, 1, t2);
  }
  getCurvature(t2) {
    const e = mo(this, 1, t2), s3 = mo(this, 2, t2), n4 = e.sqrLength();
    if (0 === n4) return Number.NaN;
    e.divThis(Math.sqrt(n4));
    return e.crossProduct(s3) / n4;
  }
  isIntersectingPoint(t2, e, s3) {
    if (s3 && (t2.equals(this.getStartXY()) || t2.equals(this.getEndXY()))) return false;
    const n4 = new n3();
    if (this.queryLooseEnvelope(n4), n4.inflateCoords(e, e), !n4.contains(t2)) return false;
    const i = this.getClosestCoordinate(t2, false), r = new mi();
    this.queryCoord2D(i, r);
    return mi.distance(r, t2) <= e;
  }
  isIntersectingPoint3D(t2, e, n4, i, r = 1) {
    return n(0), false;
  }
  isMonotoneQuickAndDirty() {
    const t2 = Ot(mi, 4);
    return this.queryControlPoints(t2), _o(t2);
  }
  getMonotonicPartParams(t2, n4) {
    const i = Jr(this), r = i.specialPointsCount();
    if (n(ms.s_maxMonotonicPartParams >= r), !n4) return i.specialPointsCount();
    t2 < r && P("");
    for (let e = 0; e < r; e++) n4[e] = i.specialPoints[e];
    return r;
  }
  normalizeAfterEndpointChange() {
    return false;
  }
  orientBottomUp() {
    if (this.m_YEnd < this.m_YStart || this.m_YEnd === this.m_YStart && this.m_XEnd < this.m_XStart) {
      this.m_XEnd = Pt(this.m_XStart, this.m_XStart = this.m_XEnd), this.m_YEnd = Pt(this.m_YStart, this.m_YStart = this.m_YEnd);
      for (let t2 = 0, e = this.m_description.getTotalComponentCount() - 2; t2 < e; t2++) this.m_attributes[t2 + e] = Pt(this.m_attributes[t2], this.m_attributes[t2] = this.m_attributes[t2 + e]);
      this.m_cp[1] = Pt(this.m_cp[0], this.m_cp[0] = this.m_cp[1]), this.m_cachedValues = null;
    }
  }
  findMinDeriv() {
    const t2 = new p();
    return ro(this, t2), t2.value();
  }
  isLine() {
    return false;
  }
  isDegenerateToLineHelper(t2) {
    const e = Ot(mi, 4);
    this.queryControlPoints(e);
    const s3 = e[3].sub(e[0]), n4 = s3.length();
    if (mi.distance(e[0], e[1]) + mi.distance(e[2], e[1]) + mi.distance(e[2], e[3]) - n4 > t2) return false;
    const i = t2;
    let r = e[1].clone();
    r.subThis(e[0]);
    let o = Math.abs(r.crossProduct(s3)) / n4;
    return !(o > i) && (r = e[2].clone(), r.subThis(e[1]), o = Math.abs(r.crossProduct(s3)) / n4, !(o > i));
  }
  copyIgnoreAttributes(t2) {
    const e = Ot(mi, 4);
    this.queryControlPoints(e), t2.setControlPoints(e);
  }
  calculateArea2DHelper() {
    return lo(this);
  }
  absNorm() {
    return Bo(this);
  }
  queryEnvelopeW(t2, e) {
    Fo(this, t2, e);
  }
  setSegmentFromCoordsForStitcher(t2, e) {
    Go(this, t2, e);
  }
  writeInBufferStream(t2, e) {
    const s3 = new Float64Array(4);
    return this.writeInBuffer_(s3), t2.writeRangeFromArray(e, s3.length, s3, true, 1), e + s3.length;
  }
  writeInBuffer_(t2) {
    return t2[0] = this.m_cp[0].x, t2[1] = this.m_cp[0].y, t2[2] = this.m_cp[1].x, t2[3] = this.m_cp[1].y, 4;
  }
  readFromBufferStream(t2, e) {
    const s3 = new Float64Array(4);
    t2.queryRange(e, s3.length, s3, true, 1), this.readFromBuffer_(s3);
  }
  readFromBuffer_(t2) {
    this.m_cp = Ot(mi, 2), this.m_cp[0].x = t2[0], this.m_cp[0].y = t2[1], this.m_cp[1].x = t2[2], this.m_cp[1].y = t2[3], this.m_cachedValues = null;
  }
  snapControlPoints(t2) {
    const e = Ot(mi, 4);
    this.queryControlPoints(e);
    const s3 = (e2, s4, n5) => {
      let i2 = false;
      if (mi.sqrDistance(e2, n5) <= t2) {
        i2 = !e2.equals(n5), e2.setCoordsPoint2D(n5);
        mi.sqrDistance(s4, n5) <= t2 && (i2 ||= !s4.equals(n5), s4.setCoordsPoint2D(n5));
      }
      return i2;
    }, n4 = s3(e[1], e[2], e[0]), i = s3(e[2], e[1], e[3]);
    return (n4 || i) && this.setControlPoints(e), n4 || i;
  }
  needsSnapControlPoints(t2) {
    if (!t2) return false;
    const e = Ot(mi, 4);
    this.queryControlPoints(e);
    const s3 = (e2, s4, n5) => {
      let i2 = false;
      if (mi.sqrDistance(e2, n5) <= t2) {
        i2 = !e2.equals(n5), e2.setCoordsPoint2D(n5);
        mi.sqrDistance(s4, n5) <= t2 && (i2 ||= !s4.equals(n5), s4.setCoordsPoint2D(n5));
      }
      return i2;
    }, n4 = s3(e[1], e[2], e[0]), i = s3(e[2], e[1], e[3]);
    return n4 || i;
  }
  calculateSpecialPointsForCracking(t2, e) {
    return Jo(this, t2, e);
  }
  ensureXYMonotone() {
    return co(this);
  }
  setCoordsForIntersector(t2, e, s3) {
    so(this, t2, e, s3);
  }
  copyToImpl(t2) {
    const e = t2;
    e.m_cp[0].assign(this.m_cp[0]), e.m_cp[1].assign(this.m_cp[1]), $r(e, Kr(this));
  }
  reverseImpl() {
    this.m_cp[1] = Pt(this.m_cp[0], this.m_cp[0] = this.m_cp[1]);
  }
  equalsImpl(t2) {
    const e = t2, s3 = 0, n4 = 1;
    return !!this.m_cp[0].equals(e.m_cp[s3]) && !!this.m_cp[1].equals(e.m_cp[n4]);
  }
  equalsImplTol(t2, e) {
    const s3 = t2, n4 = 0, i = 1;
    return !!this.m_cp[0].isEqualPoint2D(s3.m_cp[n4], e) && !!this.m_cp[1].isEqualPoint2D(s3.m_cp[i], e);
  }
  swapImpl(t2) {
    const e = t2;
    e.m_cp[0] = Pt(this.m_cp[0], this.m_cp[0] = e.m_cp[0]), e.m_cp[1] = Pt(this.m_cp[1], this.m_cp[1] = e.m_cp[1]), eo(this, e);
  }
  afterCompletedModification() {
    to(this);
  }
  isIntersecting(t2, e, s3) {
    return 0 !== om(false, this, t2, e, s3);
  }
  intersect(t2, e, s3, n4, i) {
    return mm(false, this, t2, e, s3, n4, i);
  }
  intersectPoint(t2, e, s3) {
    return qo(this, t2, e, s3);
  }
  endPointModified() {
    to(this);
  }
  clearEndPointModified() {
  }
};
ra.type = a.enumBezier;
var oa = class {
  constructor() {
    this.length = Number.NaN, this.area = Number.NaN, this.centroidX = Number.NaN, this.centroidY = 0, this.specialPoints = [], this.specialPointsLength = [];
  }
  specialPointsCount() {
    return this.specialPoints.length;
  }
};
function aa(t2, e, n4, i, r, o, a2, h2) {
  for (; ; ) {
    const u = mi.distance(e[0], e[2]), m = mi.distance(e[0], e[1]) + mi.distance(e[1], e[2]);
    if (m - u <= r + i * m) return t2 + Q(u, m, 0.5);
    const l2 = Ot(mi, 4), c = (t3) => {
      Pa(e, n4, 1, t3, l2);
      return l2[1].length();
    };
    if (0 === a2 && h2 < 8) {
      n(h2 < 8);
      let u2 = c(0), l3 = c(1);
      o[0] += 2, u2 > l3 && (l3 = Pt(u2, u2 = l3), e[2] = Pt(e[0], e[0] = e[2]), n4[2] = Pt(n4[0], n4[0] = n4[2]));
      let g3 = u2 / (u2 + l3), d2 = 1, _2 = m;
      for (; g3 < 1 / 32 && _2 >= r + i * _2; ) {
        d2 /= 4;
        const t3 = c(d2);
        o[0]++, g3 = u2 / (t3 + u2);
        const s3 = new mi();
        if (ph(e, n4, 0.5 * d2, s3), _2 = mi.distance(s3, e[0]), _2 <= r) {
          const t4 = new mi();
          ph(e, n4, d2, t4), _2 += mi.distance(t4, s3);
        }
      }
      if (1 !== d2) {
        const s3 = Ot(mi, 3), u3 = [0, 0, 0];
        Qa(e, n4, d2, e, n4, s3, u3), t2 = aa(t2, s3, u3, i, r, o, 0, h2 + 1), a2++, h2++;
        continue;
      }
    }
    let g2 = false;
    const d = 8;
    o[0] += d;
    const _ = ur(d, c, 0, 1), p2 = 16;
    o[0] += p2;
    const f2 = ur(p2, c, 0, 1);
    if (g2 = Math.abs(_ - f2) > r + i * m, !g2) return t2 + f2;
    if (a2 < 8 && h2 < 9) {
      const s3 = Ot(mi, 3), u2 = [0, 0, 0];
      Qa(e, n4, 0.5, e, n4, s3, u2), t2 = aa(t2, s3, u2, i, r, o, a2 + 1, h2 + 1), a2++, h2++;
      continue;
    }
    const P4 = 32;
    o[0] += P4;
    const y2 = ur(P4, c, 0, 1);
    if (g2 = Math.abs(f2 - y2) > r + i * m, !g2) return t2 + y2;
    const x4 = 64;
    o[0] += x4;
    const C3 = ur(x4, c, 0, 1);
    if (g2 = Math.abs(y2 - C3) > r + i * m, !g2) return t2 + C3;
    const v2 = 128;
    o[0] += v2;
    const b2 = ur(v2, c, 0, 1);
    return g2 = Math.abs(C3 - b2) > r + i * m, t2 + b2;
  }
}
function ha(t2, e, s3, n4, i) {
  if (s3 === e) return 0;
  const r = Ot(mi, 3), o = [0, 0, 0];
  t2.queryControlPoints(r), t2.queryWeights(o);
  const a2 = [0, 0, 0], h2 = Ot(mi, 3);
  Ja(r, o, e, s3, h2, a2);
  return aa(0, h2, a2, n4, i, [0], 0, 0);
}
var ua = class {
  constructor(t2, e, s3) {
    this.controlPoints = Qt(t2, 3), this.weights = [0, 0, 0], Dt(this.weights, e, 0, 0, 3), this.point = s3.clone();
  }
  getMaxDerivative() {
    return 3;
  }
  getValue(t2, e) {
    if (0 === t2) {
      const t3 = new mi();
      ph(this.controlPoints, this.weights, e, t3);
      const s3 = Ot(mi, 4);
      Pa(this.controlPoints, this.weights, 1, e, s3);
      return 2 * t3.sub(this.point).dotProduct(s3[1]);
    }
    if (1 === t2) {
      const t3 = new mi();
      ph(this.controlPoints, this.weights, e, t3);
      const s3 = Ot(mi, 4);
      Pa(this.controlPoints, this.weights, 2, e, s3);
      return 2 * (t3.sub(this.point).dotProduct(s3[2]) + s3[1].dotProduct(s3[1]));
    }
    if (2 === t2) {
      const t3 = new mi();
      ph(this.controlPoints, this.weights, e, t3);
      const s3 = Ot(mi, 4);
      Pa(this.controlPoints, this.weights, 3, e, s3);
      return 2 * (t3.sub(this.point).dotProduct(s3[3]) + 3 * s3[1].dotProduct(s3[2]));
    }
    return 0;
  }
  getError(t2) {
    return n(0), 0;
  }
};
function ma(t2, e, s3, n4) {
  const i = ka(0, 0, 0, 0, mi.getNAN()), r = Yt(18, Number.NaN), o = Ot(mi, 3);
  t2.queryControlPoints(o), o[2].subThis(e), o[1].subThis(e), o[0].subThis(e);
  const a2 = [0, 0, 0];
  t2.queryWeights(a2);
  const h2 = [1, Ph(a2), 1], u = xh(a2, s3), m = xh(a2, n4), l2 = en(new ua(o, h2, new mi(0, 0)), x2.construct(u, m), 18, r);
  ph(o, h2, u, i.pt), i.t = u, i.d = mi.distance(i.pt, new mi(0, 0));
  const c = new mi();
  ph(o, h2, m, c);
  const g2 = mi.distance(c, new mi(0, 0));
  g2 < i.d && (i.d = g2, i.t = m, i.pt.assign(c));
  for (let d = 0; d < l2; d++) {
    ph(o, h2, r[d], c);
    const t3 = mi.distance(c, new mi(0, 0));
    t3 < i.d && (i.d = t3, i.t = yh(a2, r[d]), i.pt.assign(c));
  }
  return i;
}
function la(t2, e, s3, n4, i) {
  let r = true;
  const o = Ot(mi, 4), a2 = Kn(5, e, s3, n4, i, (e2) => {
    fa(t2, 1, e2, o);
    return (r ? t2.getCoordX(e2) - t2.getStartX() : t2.getCoordY(e2) - t2.getStartY()) * o[1].length();
  });
  r = false;
  const h2 = Kn(5, e, s3, n4, i, (e2) => {
    fa(t2, 1, e2, o);
    return (r ? t2.getCoordX(e2) - t2.getStartX() : t2.getCoordY(e2) - t2.getStartY()) * o[1].length();
  });
  return new mi(a2, h2);
}
function ca(t2) {
  t2.m_cachedValues = null;
}
function ga(t2, e) {
  e.m_cachedValues = Pt(t2.m_cachedValues, t2.m_cachedValues = e.m_cachedValues);
}
function da(t2) {
  if (t2.m_cachedValues) return t2.m_cachedValues;
  const e = new oa(), s3 = Ot(mi, 3);
  t2.queryControlPoints(s3);
  const n4 = [0, 0, 0];
  return t2.queryWeights(n4), _a(s3, n4, e.specialPoints), Ra(t2, e), e;
}
function _a(t2, e, s3) {
  if (0 === e[1]) return s3.length = 0, s3.push(0), void s3.push(1);
  const n4 = Ot(p, 8);
  n4[0].set(0);
  let i = 1;
  {
    const s4 = new p(t2[1].x).subThis(t2[0].x).mulThis(e[1]).mulThis(e[0]), r = new p(t2[2].x).subThis(t2[0].x).mulThis(e[2]).mulThis(e[0]), o = s4.subE(r).addThisE(new p(t2[2].x).subThis(t2[1].x).mulThis(e[2]).mulThis(e[1]));
    r.subThisE(s4.mul(2));
    const a2 = Ot(p, 2);
    let h2 = dn(o, r, s4, new x2(0, 1), false, a2);
    h2 < 0 && (h2 = 0);
    for (let t3 = 0; t3 < h2; t3++) Vs(a2[t3].value(), 0, 1) || (n4[i] = a2[t3], i++);
  }
  {
    const s4 = new p(t2[1].y).subThis(t2[0].y).mulThis(e[1]).mulThis(e[0]), r = new p(t2[2].y).subThis(t2[0].y).mulThis(e[2]).mulThis(e[0]), o = s4.subE(r).addThisE(new p(t2[2].y).subThis(t2[1].y).mulThis(e[2]).mulThis(e[1]));
    r.subThisE(s4.mul(2));
    const a2 = Ot(p, 2);
    let h2 = dn(o, r, s4, new x2(0, 1), false, a2);
    h2 < 0 && (h2 = 0);
    for (let t3 = 0; t3 < h2; t3++) Vs(a2[t3].value(), 0, 1) || (n4[i] = a2[t3], i++);
  }
  if (n4[i].set(1), i++, i > 2) {
    Zt(n4, 0, i, (t4, e3) => Ct(t4.value(), e3.value()));
    let t3 = 0, e2 = n4[0].value(), s4 = 1;
    for (let r = 1; r < i; r++) n4[r].eq(n4[r - 1]) ? (e2 += n4[r].value(), s4++) : (s4 > 1 && (e2 /= s4, n4[t3].set(e2)), t3++, n4[t3] = n4[r], e2 = n4[r].value(), s4 = 1);
    t3++, i = t3;
  }
  n4[0].set(0), n4[i - 1].set(1), s3.length = i;
  for (let r = 0; r < i; r++) s3[r] = n4[r].value();
}
function pa(t2, e, s3) {
  if (s3) {
    if (e < 0) return e;
    if (e > 1) return e - 1 + pa(t2, 1, false);
  }
  if (t2.isDegenerate(0)) return 0;
  const n4 = 1 === e, i = da(t2);
  if (n4 && !Number.isNaN(i.length)) return i.length;
  const r = qa(t2), o = r / t2.calculateUpperLength2D();
  let a2 = 0, h2 = 0;
  for (let u = 1, m = i.specialPointsCount(); u < m; u++) {
    const s4 = i.specialPoints[u];
    if (a2 += ha(t2, h2, Math.min(e, s4), o, r), e <= s4) break;
    h2 = s4;
  }
  return n4 && (i.length = a2), a2;
}
function fa(t2, e, s3, n4) {
  const i = Ot(mi, 3);
  t2.queryControlPoints(i);
  const r = [0, 0, 0];
  t2.queryWeights(r), Pa(i, r, e, s3, n4);
}
function Pa(t2, e, s3, n4, i) {
  const r = [t2[0], t2[1], t2[2]], o = [e[0], e[1], e[2]], a2 = Ot(mi, 4);
  ya(r, o, s3, n4, a2);
  for (let h2 = 0; h2 <= s3; h2++) i[h2].setCoords(a2[h2].x, a2[h2].y);
}
function ya(t2, e, n4, i, r) {
  n(n4 > 0);
  const o = [t2[0].clone(), t2[1].clone(), t2[2].clone()];
  if (!o[0].isZero()) {
    for (let t3 = 1; t3 < 3; ++t3) o[t3].subThis(o[0]);
    o[0].setCoords(0, 0);
  }
  const a2 = xa(o, e, 0, i), u = va(e, 0, i), m = a2.divide(u);
  if (r[0].assign(m), 0 === n4) return;
  const l2 = [e[1] * e[0], e[2] * e[0] * 0.5, e[1] * e[2]], c = [t2[1].sub(t2[0]), t2[2].sub(t2[0]), t2[2].sub(t2[1])], g2 = u * u, d = xa(c, l2, 0, i).mul(2).divide(g2);
  if (r[1].assign(d), 1 === n4) return;
  const _ = va(e, 1, i), p2 = 2 * u * _, f2 = xa(c, l2, 1, i).mul(2).sub(d.mul(p2)).divide(g2);
  if (r[2].assign(f2), 2 === n4) return;
  const P4 = xa(c, l2, 2, i).mul(2), y2 = 2 * (_ * _ + u * va(e, 2, i)), x4 = P4.sub(f2.mul(p2).mul(2)).sub(d.mul(y2)).divide(g2);
  r[3].assign(x4), 3 !== n4 && b("");
}
function xa(t2, e, s3, n4) {
  if (0 === s3) {
    if (n4 <= 0.5) {
      const s4 = new mi();
      k2(2, t2[0].mul(e[0]), t2[1].mul(e[1]), n4, s4);
      const i = new mi();
      k2(2, t2[1].mul(e[1]), t2[2].mul(e[2]), n4, i);
      const r = new mi();
      return k2(2, s4, i, n4, r), r;
    }
    {
      const s4 = new mi();
      F(2, t2[0].mul(e[0]), t2[1].mul(e[1]), n4, s4);
      const i = new mi();
      F(2, t2[1].mul(e[1]), t2[2].mul(e[2]), n4, i);
      const r = new mi();
      return F(2, s4, i, n4, r), r;
    }
  }
  if (1 === s3) {
    const s4 = t2[1].mul(e[1]), i = s4.sub(t2[0].mul(e[0])).mul(1 - n4).add(t2[2].mul(e[2]).sub(s4).mul(n4));
    return i.mulThis(2), i;
  }
  if (2 === s3) {
    const s4 = t2[1].mul(e[1]), n5 = t2[2].mul(e[2]).sub(s4).sub(s4.sub(t2[0].mul(e[0])));
    return n5.mulThis(2), n5;
  }
  b("");
}
function Ca(t2, e, s3, n4) {
  if (n4.toDouble() <= 0.5) {
    const s4 = new Ne();
    O(2, t2[0].mulE(e[0]), t2[1].mulE(e[1]), n4, s4);
    const i = new Ne();
    O(2, t2[1].mulE(e[1]), t2[2].mulE(e[2]), n4, i);
    const r = new Ne();
    return O(2, s4, i, n4, r), r;
  }
  {
    const s4 = new Ne();
    G(2, t2[0].mulE(e[0]), t2[1].mulE(e[1]), n4, s4);
    const i = new Ne();
    G(2, t2[1].mulE(e[1]), t2[2].mulE(e[2]), n4, i);
    const r = new Ne();
    return G(2, s4, i, n4, r), r;
  }
}
function va(t2, e, s3) {
  if (0 === e) {
    const e2 = Q(t2[0], t2[1], s3), n4 = Q(t2[1], t2[2], s3);
    return Q(e2, n4, s3);
  }
  if (1 === e) {
    return 2 * ((1 - s3) * (t2[1] - t2[0]) + (t2[2] - t2[1]) * s3);
  }
  if (2 === e) {
    return 2 * (t2[2] - t2[1] - (t2[1] - t2[0]));
  }
  b("");
}
function ba(t2, e, s3) {
  if (s3.toDouble() <= 0.5) {
    const e2 = A2(t2[0], t2[1], s3), n4 = A2(t2[1], t2[2], s3);
    return A2(e2, n4, s3);
  }
  {
    const e2 = P2(t2[0], t2[1], s3), n4 = P2(t2[1], t2[2], s3);
    return P2(e2, n4, s3);
  }
}
function Sa(t2, e, s3, n4, i) {
  const r = [Ne.constructPoint2D(t2[0]), Ne.constructPoint2D(t2[1]), Ne.constructPoint2D(t2[2])];
  r[2].subThisE(r[0]), r[1].subThisE(r[0]), r[0].setCoords(0, 0);
  Ea(r, [new p(e[0]), new p(e[1]), new p(e[2])], s3, n4, i);
}
function Ea(t2, e, n4, i, r) {
  n(n4 > 0);
  const o = [t2[0].clone(), t2[1].clone(), t2[2].clone()];
  if (!o[0].isZero()) {
    for (let t3 = 1; t3 < 3; ++t3) o[t3].subThisE(o[0]);
    o[0] = Ne.constructCoords(0, 0);
  }
  const a2 = Ca(o, e, 0, i), h2 = ba(e, 0, i), u = a2.divE(h2);
  r[0].setE(u);
  const m = [e[1].mulE(e[0]), e[2].mulE(e[0]).mul(0.5), e[1].mulE(e[2])], l2 = Ca([t2[1].subE(t2[0]), t2[2].subE(t2[0]), t2[2].subE(t2[1])], m, 0, i).mul(2), c = h2.sqr(), g2 = l2.divE(c);
  r[1].setE(g2);
}
function Da(t2, e, s3) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4);
  const i = Yt(3, Number.NaN);
  t2.queryWeights(i), wa(n4, i, e, s3);
}
function wa(t2, e, s3, n4) {
  s3.value() < 0 && s3.set(0, s3.eps()), s3.value() > 1 && s3.set(1, s3.eps());
  const i = Ot(Ne, 4);
  Sa(t2, e, 1, s3, i), n4.setE(i[1]);
}
function Aa(t2, e, s3) {
  const n4 = Us(s3, 0, 1), i = Ot(mi, 4);
  if (Pa(t2, e, 3, n4, i), i[1].isZero()) {
    if (i[2].isZero()) return i[3];
    {
      const t3 = i[2].clone();
      return 1 === n4 && t3.negateThis(), t3;
    }
  }
  return i[1];
}
var Ta = class {
  constructor(t2, e) {
    this.len = 0, this.b = t2, this.len = e;
  }
  getMaxDerivative() {
    return 1;
  }
  getValue(t2, e) {
    return 0 === t2 ? this.len - pa(this.b, e, false) : 0;
  }
  getError(t2) {
    return n(0), 0;
  }
};
function Ia(t2, e, s3) {
  const n4 = pa(t2, 1, false);
  if (e <= 0) return e;
  if (e >= n4) return e - n4 + 1;
  const i = [0];
  return 1 !== en(new Ta(t2, e), x2.unit(), 1, i) && b(""), i[0];
}
function Ma(t2) {
  const e = Ot(mi, 3), s3 = [0, 0, 0];
  return t2.queryControlPoints(e), t2.queryWeights(s3), Ya(e, s3);
}
function Ya(t2, e) {
  const n4 = Ph(e);
  if (1 === n4) {
    return Pi(t2);
  }
  if (0 === n4) return 0;
  const i = [new mi(0, 0), t2[1].sub(t2[0]), t2[2].sub(t2[0])], r = i[1].crossProduct(i[2]);
  if (n4 < 1) {
    n(n4 > 0);
    const t3 = 1 - n4;
    let e2;
    if (t3 < 0.01) e2 = -1 / 3 + t3 * (2 / 15 + t3 * (3 / 35 + t3 * (16 / 315 + t3 * (20 / 693 + t3 * (16 / 1001 + t3 * (56 / 6435))))));
    else {
      const s3 = t3 * (1 + n4), i2 = Math.atan2(Math.sqrt(t3), Math.sqrt(1 + n4));
      e2 = n4 * (0.5 * n4 - J(s3) * i2) / s3;
    }
    return r * e2;
  }
  {
    const t3 = (n4 - 1) * (n4 + 1);
    return 0.25 * n4 / Math.pow(t3, 1.5) * (-2 * n4 * Math.sqrt(t3) * r - 4 * i[1].y * i[2].x * Math.atanh(Math.sqrt((n4 - 1) / (n4 + 1))) - i[1].x * i[2].y * Math.log(2 * n4 * (n4 - Math.sqrt(t3)) - 1));
  }
}
function Na(t2, e) {
  const n4 = Ph(e);
  if (1 === n4) {
    const e2 = Ot(mi, 3);
    Bi(t2, e2);
    const s3 = e2[2].clone(), n5 = e2[1].clone(), i2 = new mi(), r2 = s3.y * n5.x - s3.x * n5.y;
    return i2.x = -(4 * s3.x + 5 * n5.x) * r2 / 60, i2.y = -(4 * s3.y + 5 * n5.y) * r2 / 60, i2;
  }
  if (0 === n4) return new mi(0, 0);
  n(n4 > 0);
  const i = t2[1].sub(t2[0]), r = t2[2].sub(t2[0]);
  if (n4 < 1) {
    const t3 = Math.sqrt(1 - n4), e2 = Math.sqrt(1 + n4), s3 = (i.y * r.x - i.x * r.y) * n4 / Math.pow(t3 * e2, 5) / 12, o = Math.atan2(t3, e2), a2 = n4 * t3 * e2, h2 = n4 * n4, u = i.mul(2 * (2 + h2)), m = r.mul(2 * h2 - 5), l2 = u.add(m).mul(a2), c = r.sub(i.mul(2 * h2)).mul(6 * o);
    return l2.add(c).mul(s3);
  }
  {
    const t3 = Math.sqrt(n4 - 1), e2 = Math.sqrt(n4 + 1), s3 = (i.y * r.x - i.x * r.y) * n4 / Math.pow(t3 * e2, 5) / 12, o = Math.atanh(t3 / e2), a2 = n4 * t3 * e2, h2 = n4 * n4, u = i.mul(4).sub(r.mul(5)), m = i.add(r).mul(2 * h2), l2 = u.add(m).mul(a2), c = r.sub(i.mul(2 * h2)).mul(6 * o);
    return l2.add(c).mul(s3);
  }
}
function Xa(t2) {
  const e = Ot(mi, 3), s3 = [0, 0, 0];
  return t2.queryControlPoints(e), t2.queryWeights(s3), Na(e, s3);
}
function qa(t2) {
  return Fa(t2.calculateUpperLength2D());
}
function Fa(t2) {
  return 256 * Qs() * t2;
}
function Va(t2) {
  if (0 === t2.m_weights[1]) return true;
  const e = mi.distance(t2.getStartXY(), t2.getEndXY()), s3 = t2.calculateUpperLength2D();
  return s3 - e <= 8 * Number.EPSILON * s3;
}
function La(t2) {
  return t2.m_cachedValues;
}
function Ra(t2, e) {
  t2.m_cachedValues = e;
}
function za(t2, e, s3, n4, i) {
  const r = Ot(mi, 3);
  t2.queryControlPoints(r);
  const o = [0, 0, 0];
  t2.queryWeights(o);
  const a2 = [0];
  return 1 === Ba(r, o, e, x2.unit(), n4, i, 1, a2) ? a2[0] : Number.NaN;
}
function Ba(t2, e, n4, i, r, o, a2, h2) {
  D(x2.unit().contains(i) && a2 > 0, ""), (o < 0 || Number.isNaN(o)) && (o = Number.MAX_VALUE);
  const u = new Array(3);
  for (let s3 = 0; s3 < 3; ++s3) u[s3] = t2[s3].sub(n4);
  const m = Ph(e), l2 = qe.constructPoint2D(u[0]), c = qe.constructPoint2D(u[1]), g2 = qe.constructPoint2D(u[2]), d = si.constructDouble(m), p2 = d.clone();
  p2.ldexpThis(1);
  const f2 = l2.dotProduct(c.sub(l2)).mul(d), P4 = d.mul(d.addDouble(2)), y2 = g2.sub(c.mul(P4.ldexp(1))), x4 = c.sqrLength().mul(d.mul(d).ldexp(1)).add(l2.sqrLength().mul(d.ldexp(2).subDouble(1))).add(l2.dotProduct(y2)), C3 = g2.sub(c.mul(p2)).add(l2.mul(p2.subDouble(1))), v2 = c.mul(d).sub(l2).dotProduct(C3).mulDouble(3), b2 = c.dotProduct(g2).mul(d.subDouble(3).mul(d)).ldexp(1), S2 = c.sqrLength().mul(d.mul(d).ldexp(2)), E = l2.sqrLength().mul(d.ldexp(2).subDouble(3)), D3 = l2.dotProduct(g2.sub(c.mul(d.mulDouble(3).subDouble(1)).mul(d))).ldexp(1), w3 = g2.sqrLength().addThis(b2).addThis(S2).addThis(E).addThis(D3), A4 = l2.add(g2).sub(c.mul(p2)), T3 = d.subDouble(1), I2 = g2.sub(l2).dotProduct(A4).mul(T3), M2 = new mi(0, 0), Y3 = [];
  let N2 = new mi();
  ph(u, e, i.vmin, N2);
  let X2 = mi.distance(N2, M2);
  if (X2 <= o && Y3.push(new mi(i.vmin, X2)), i.vmin !== i.vmax && (ph(u, e, i.vmax, N2), X2 = mi.distance(N2, M2), X2 <= o && Y3.push(new mi(i.vmax, X2))), i.width() > 0) {
    const t3 = u[2].isZero(), s3 = Ot(si, 4), n5 = zn(I2, w3, v2, x4, f2, 58, i, t3, s3);
    for (let r2 = 0; r2 < n5; r2++) {
      if (!i.containsExclusiveCoordinate(s3[r2].toDouble())) continue;
      let t4 = s3[r2].toDouble();
      t4 = yh(e, t4);
      const n6 = new mi();
      ph(u, e, t4, n6), X2 = mi.distance(n6, M2), X2 <= o && Y3.push(new mi(t4, X2));
    }
  }
  if (r) {
    n(i.equals(x2.unit()));
    {
      ph(u, e, -1, N2, true);
      const t3 = new mi();
      ph(u, e, 0, t3);
      const s3 = new fm({ start: N2, end: t3 }), n5 = s3.getClosestCoordinate(M2, true);
      n5 < 1 && (N2 = s3.getCoord2D(n5), X2 = mi.distance(N2, M2), X2 <= o && Y3.push(new mi(n5 - 1, X2)));
    }
    {
      ph(u, e, 2, N2, true);
      const t3 = new mi();
      ph(u, e, i.vmax, t3);
      const s3 = new fm({ start: t3, end: N2 }), n5 = s3.getClosestCoordinate(M2, true);
      n5 > 0 && (N2 = s3.getCoord2D(n5), X2 = mi.distance(N2, M2), X2 <= o && Y3.push(new mi(1 + n5, X2)));
    }
  }
  if (!Y3.length) return 0;
  Y3.sort((t3, e2) => t3.compare(e2));
  let q2 = 0;
  const F3 = Y3[0].x;
  if (h2[q2++] = F3, q2 < a2) {
    const t3 = At(u, 4, false).total(), e2 = Y3[0].y;
    for (let s3 = 1, n5 = Y3.length; s3 < n5; s3++) if (Y3[s3].y > e2 + t3) {
      Y3.length = s3;
      break;
    }
    Y3.sort((t4, e3) => Ct(t4.x, e3.x)), q2 = 0, h2[q2++] = Y3[0].x;
    for (let s3 = 1, n5 = Y3.length; s3 < n5; s3++) Y3[s3].x !== h2[q2 - 1] && q2 < a2 && (h2[q2++] = Y3[s3].x);
  }
  return q2;
}
function ka(t2, e, s3, n4, i) {
  return { tmin: t2, tmax: e, t: s3, d: n4, pt: i.clone() };
}
function Ga(t2, e, n4, i, r) {
  const o = new we();
  if (Wa(t2, x2.unit(), o), o.inflate(i), !o.isIntersectingPoint2D(e)) return 0;
  const a2 = da(t2);
  let h2 = 0;
  const u = [];
  let m = a2.specialPoints[0];
  for (let l2 = 1, c = a2.specialPoints.length; l2 < c; ++l2) {
    const n5 = a2.specialPoints[l2], i2 = ma(t2, e, m, n5);
    if (0 === u.length) u.push(i2);
    else if (i2.t === i2.tmin) n(u.at(-1).d <= i2.d), u.at(-1).tmax = i2.tmax;
    else if (u.at(-1).t === u.at(-1).tmax) {
      n(u.at(-1).d >= i2.d);
      const t3 = u.at(-1).tmin;
      u[u.length - 1] = i2, u.at(-1).tmin = t3;
    } else u.push(i2);
    m = n5;
  }
  for (const s3 of u) if (s3.d <= i) {
    const t3 = s3.t;
    n4 ? (n4[h2] = t3, h2++) : h2++;
  }
  return h2;
}
function Wa(t2, e, s3) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4);
  const i = [0, 0, 0];
  t2.queryWeights(i), ja(n4, i, e, s3);
}
function ja(t2, e, s3, n4) {
  if (s3.equalsRange(0, 1)) return void n4.setFromPoints(t2, 3);
  const i = Ot(mi, 3), r = [0, 0, 0];
  Ja(t2, e, s3.vmin, s3.vmax, i, r), n4.setFromPoints(i, 3);
}
function Za(t2) {
  const e = fs(t2[0].y, t2[1].y), s3 = fs(t2[1].y, t2[2].y);
  if (e >= 0 && s3 >= 0 || e <= 0 && s3 <= 0) {
    const e2 = fs(t2[0].x, t2[1].x), s4 = fs(t2[1].x, t2[2].x);
    if (e2 >= 0 && s4 >= 0 || e2 <= 0 && s4 <= 0) return true;
  }
  return false;
}
function Ha(t2) {
  const e = Ot(mi, 3);
  t2.queryControlPoints(e);
  const s3 = Ua(e);
  return s3 && (t2.m_cp.setCoordsPoint2D(e[1]), t2.afterCompletedModification()), s3;
}
function Ua(t2) {
  let e = false;
  for (let s3 = 0; s3 < 2; s3++) {
    const n4 = fs(t2[0][s3], t2[2][s3]);
    n4 > 0 ? (fs(t2[0][s3], t2[1][s3]) < 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[2][s3]) < 0 && (t2[1][s3] = t2[2][s3], e = true)) : n4 < 0 ? (fs(t2[0][s3], t2[1][s3]) > 0 && (t2[1][s3] = t2[0][s3], e = true), fs(t2[1][s3], t2[2][s3]) > 0 && (t2[1][s3] = t2[2][s3], e = true)) : t2[1][s3] !== t2[0][s3] && (t2[1][s3] = t2[0][s3], e = true);
  }
  return e;
}
function Oa(t2, s3, n4) {
  void 0 === n4 && (n4 = s3, s3 = 0);
  const i = new mi();
  if (s3 < 0 || n4 > 1) return i.setNAN(), i;
  if (s3 > n4 && P("calculate_sub_weighted_centroid"), s3 === n4 || t2.isDegenerate(0)) return i.setCoords(0, 0), i;
  const r = da(t2), o = qa(t2), a2 = o / t2.calculateUpperLength2D();
  let h2 = s3, u = 0;
  for (let e = 1, m = r.specialPointsCount(); e < m; e++) if (s3 < r.specialPoints[e]) {
    u = e - 1;
    break;
  }
  i.setCoords(0, 0);
  for (let e = u + 1, m = r.specialPointsCount(); e < m; e++) {
    const s4 = Math.min(r.specialPoints[e], n4), u2 = la(t2, h2, s4, a2, o);
    if (i.addThis(u2), h2 = s4, n4 <= r.specialPoints[e]) break;
  }
  return i.add(t2.getStartXY().mul(t2.calculateLength2D()));
}
function Qa(t2, e, n4, i, r, o, a2) {
  n(n4 >= 0 && n4 <= 1 && i !== o && r !== a2), n(e[0] > 0 && e[2] > 0 && e[1] >= 0);
  const h2 = [1, Ph(e), 1], u = xh(e, n4), m = Qt(t2, 3), l2 = Ot(X, 3);
  mh(m, h2, l2);
  const c = Ot(X, 3), g2 = Ot(X, 3);
  Ch(l2, u, i ? c : null, o ? g2 : null), vh(e, n4, r, a2);
  const d = Za(m);
  if (i) {
    for (let t3 = 0; t3 < 3; ++t3) _h(c[t3], i[t3]);
    Sh(m, i), d && Ua(i);
  }
  if (o) {
    for (let t3 = 0; t3 < 3; ++t3) _h(g2[t3], o[t3]);
    Sh(m, o), d && Ua(o);
  }
}
function Ja(t2, e, n4, i, r, o) {
  if (n(n4 >= 0 && i <= 1 && n4 <= i), n4 === i) {
    const s3 = new mi(), i2 = lh(t2, e, n4, s3);
    return bh(t2, s3), r[0].assign(s3), r[1].assign(s3), r[2].assign(s3), o[0] = i2, o[1] = i2, void (o[2] = i2);
  }
  if (0 === n4 && 1 === i) return r[0].assign(t2[0]), r[1].assign(t2[1]), r[2].assign(t2[2]), o[0] = e[0], o[1] = e[1], void (o[2] = e[2]);
  const a2 = Ot(X, 3);
  {
    const s3 = [1, Ph(e), 1], r2 = xh(e, n4), o2 = xh(e, i);
    mh(t2, s3, a2), Ch(a2, o2, a2, null);
    Ch(a2, r2 >= o2 ? 1 : r2 / o2, null, a2);
  }
  const h2 = [0, 0, 0];
  vh(e, i, h2, null), vh(h2, n4 / i, null, h2);
  const u = Za(t2), m = Ot(mi, 3);
  _h(a2[1], m[1]), ph(t2, e, n4, m[0]), ph(t2, e, i, m[2]), Sh(t2, m);
  for (let s3 = 0; s3 < 3; ++s3) r[s3].assign(m[s3]), o[s3] = h2[s3];
  u && Ua(r);
}
function Ka(t2, e, s3) {
  const n4 = Ph(e), i = [1, n4, 1], r = 4 * n4 / (3 * (1 + n4));
  s3[0].assign(t2[0]), s3[3].assign(t2[2]), Y(t2[0], t2[1], r, s3[1]), Y(t2[2], t2[1], r, s3[2]), new ra({ cp: s3 }), new Dn({ points: t2, weight: n4 });
  let o = 0, a2 = 0.1, h2 = 0;
  for (let u = 0; u < 9; u++, a2 += 0.1) {
    const e2 = new mi();
    ph(t2, i, a2, e2);
    const n5 = new mi();
    yo(s3, a2, n5);
    const r2 = mi.sqrDistance(e2, n5);
    r2 > o && (o = r2, h2 = a2);
  }
  {
    const e2 = new mi();
    ph(t2, i, h2, e2);
    const n5 = [0];
    Ro(s3, e2, x2.unit(), false, -1, 1, n5);
    const r2 = new mi();
    return yo(s3, n5[0], r2), o = mi.sqrDistance(e2, r2), Math.sqrt(o);
  }
}
function $a(t2, e, s3, n4) {
  if (e.isEqual(t2.m_XStart, t2.m_YStart) && s3.isEqual(t2.m_XEnd, t2.m_YEnd)) return;
  const i = !!n4 && t2.isMonotoneQuickAndDirty(), r = new x3(), o = Ot(mi, 3);
  o[0].setCoords(t2.m_XStart, t2.m_YStart), o[2].setCoords(t2.m_XEnd, t2.m_YEnd);
  const a2 = new mi();
  a2.setSub(o[2], o[0]), a2.leftPerpendicularThis(), o[1].setAdd(o[0], a2);
  const h2 = Ot(mi, 3);
  h2[0].setCoordsPoint2D(e), h2[2].setCoordsPoint2D(s3), a2.setSub(h2[2], h2[0]), a2.leftPerpendicularThis(), h2[1].setAdd(h2[0], a2), r.setFromTwoTriangles(o, h2) ? r.transformInPlace(t2.m_cp) : Y(e, s3, 0.5, t2.m_cp), t2.changeEndPoints2D(e, s3), i && Ha(t2);
}
function th(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== ih(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function eh(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== rh(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function sh(t2, e, s3, n4, i) {
  if (i) {
    const n5 = hm(e, s3);
    if (0 !== n5) {
      if (t2) {
        if (1 === n5) {
          if (e.m_weights[0] === s3.m_weights[0] && e.m_weights[1] === s3.m_weights[1] && e.m_weights[2] === s3.m_weights[2]) return 2;
        } else if (e.m_weights[0] === s3.m_weights[2] && e.m_weights[1] === s3.m_weights[1] && e.m_weights[2] === s3.m_weights[0]) return 2;
        return 4;
      }
      return 2;
    }
  } else if (Re(e, s3)) return 1;
  return 0 !== oh(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function nh(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return t2 ? 4 : 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== ah(t2, e, s3, null, null, null, n4, i ?? false, true, false) ? 4 : 0;
}
function ih(t2, e, n4, i, r, o, a2, h2, u, m) {
  if (null !== r && (r.length = 0), null !== o && (o.length = 0), null !== i && (i.length = 0), n4.isDegenerate(0)) {
    const t3 = [0, 0], s3 = e.intersectPoint(n4.getStartXY(), t3, a2);
    if (s3 > 0) {
      if (null !== r) for (let e2 = 0; e2 < s3; e2++) r.push(t3[e2]);
      if (null != o) for (let t4 = 0; t4 < s3; t4++) o.push(0);
      if (null != i) for (let n5 = 0; n5 < s3; n5++) {
        const s4 = new mi();
        e.queryCoord2D(t3[n5], s4), i.push(s4);
      }
    }
    return s3;
  }
  const l2 = os(e, n4);
  if (a2 = Math.max(a2, l2), e.isDegenerateToLineHelper(l2)) {
    const t3 = new fm({ start: e.getStartXY(), end: e.getEndXY() }), s3 = ws(t3, n4, i, r, o, a2, h2, m);
    if (r) for (let n5 = 0; n5 < s3; ++n5) {
      const s4 = t3.getCoord2D(r[n5]);
      r[n5] = e.getClosestCoordinate(s4, false);
    }
    return s3;
  }
  if (as(e, n4, a2)) return 0;
  const c = Ot(mi, 3);
  e.queryControlPoints(c);
  const g2 = [0, 0, 0];
  e.queryWeights(g2);
  const d = [1, Ph(g2), 1], _ = n4.getEndXY().sub(n4.getStartXY()), p2 = _.clone();
  p2.leftPerpendicularThis();
  const f2 = c[0].clone(), P4 = c[1].clone(), y2 = c[2].clone(), x4 = P4.sub(f2), C3 = y2.sub(f2), v2 = y2.sub(P4), b2 = d[0], S2 = d[1], E = d[2], D3 = b2 * S2, w3 = b2 * E, A4 = S2 * E, T3 = x4.dotProduct(p2) * D3, I2 = C3.dotProduct(p2) * w3;
  let M2 = T3, Y3 = I2 - 2 * T3, N2 = v2.dotProduct(p2) * A4 + I2 - I2;
  const X2 = Yt(13, Number.NaN), q2 = Yt(13, Number.NaN);
  let F3 = nn(N2, Y3, M2, x2.unit(), false, X2);
  F3 < 0 && (X2[0] = 0, X2[1] = 1, F3 = 2);
  let V3 = 0;
  for (let s3 = 0, k4 = V3; s3 < F3; ++s3) {
    const t3 = new mi();
    ph(c, d, X2[s3 + k4], t3), q2[V3] = n4.getClosestCoordinate(t3, false);
    mi.distance(t3, n4.getCoord2D(q2[V3])) <= a2 && (X2[V3] = X2[s3 + k4], V3++);
  }
  const L3 = Ot(mi, 3), R2 = Ot(mi, 3);
  if (e.queryControlPoints(R2), R2[0].subThis(n4.getStartXY()), R2[1].subThis(n4.getStartXY()), R2[2].subThis(n4.getStartXY()), hh(R2, d, L3, false), Math.abs(_.x) >= Math.abs(_.y)) {
    const t3 = _.y / _.x;
    N2 = L3[2].y - L3[2].x * t3, Y3 = L3[1].y - L3[1].x * t3, M2 = L3[0].y - L3[0].x * t3;
  } else {
    const t3 = _.x / _.y;
    N2 = L3[2].x - L3[2].y * t3, Y3 = L3[1].x - L3[1].y * t3, M2 = L3[0].x - L3[0].y * t3;
  }
  const z3 = e.getEndXY().equals(n4.getStartXY()) || e.getEndXY().equals(n4.getEndXY()), B2 = [0, 0];
  F3 = nn(N2, Y3, M2, x2.unit(), z3, B2);
  for (let s3 = 0, k4 = V3; s3 < F3; ++s3) {
    X2[s3 + k4] = B2[s3];
    const t3 = new mi();
    ph(c, d, X2[s3 + k4], t3), q2[V3] = n4.getClosestCoordinate(t3, false);
    mi.distance(t3, n4.getCoord2D(q2[V3])) <= a2 && (X2[V3] = X2[s3 + k4], V3++);
  }
  n(V3 < X2.length + 4);
  for (let s3 = 0; s3 < V3; s3++) X2[s3] = yh(g2, X2[s3]);
  F3 = e.intersectPoint(n4.getStartXY(), B2, a2);
  for (let s3 = 0; s3 < F3; s3++) X2[V3] = B2[s3], q2[V3++] = 0;
  F3 = e.intersectPoint(n4.getEndXY(), B2, a2);
  for (let s3 = 0; s3 < F3; s3++) X2[V3] = B2[s3], q2[V3++] = 1;
  F3 = n4.intersectPoint(e.getStartXY(), B2, a2);
  for (let s3 = 0; s3 < F3; s3++) q2[V3] = B2[s3], X2[V3++] = 0;
  F3 = n4.intersectPoint(e.getEndXY(), B2, a2);
  for (let s3 = 0; s3 < F3; s3++) q2[V3] = B2[s3], X2[V3++] = 1;
  return 0 === V3 ? 0 : gm(t2, e, n4, X2, q2, V3, i, r, o, a2, h2, u, m);
}
function rh(t2, e, s3, n4, i, r, o, a2, h2, u) {
  if (Eu(s3)) {
    return ih(t2, e, new fm({ start: s3.getStartXY(), end: s3.getEndXY() }), n4, i, r, o, a2, h2, u);
  }
  const m = os(e, s3);
  if (as(e, s3, o = Math.max(o, m))) return 0;
  const l2 = [], c = [], g2 = Ot(mi, 4);
  {
    e.queryControlPoints(g2);
    const t3 = Ot(mi, 4), n5 = new x3();
    s3.canonicToWorldTransformation(n5);
    const i2 = new x3();
    i2.setInvert(n5), i2.transformPoints2D(g2, 4, t3);
    const r2 = Ot(si, 3), h3 = Ot(si, 3), u2 = Ot(si, 3), m2 = [0, 0, 0];
    e.queryWeights(m2), uh(t3, m2, r2, h3, u2);
    const d2 = Ot(si, 3);
    d2[0].setDouble(s3.getSemiMinorAxis()), d2[0].sqrThis(), d2[1].setDouble(s3.getSemiMajorAxis()), d2[1].sqrThis(), d2[2].setThis(d2[0]), d2[2].mulThis(d2[1]), d2[2].negateThis();
    const _ = Fn(r2, 2, h3, 2, u2, 2, d2, true, x2.unit(), x2.unit(), l2, a2);
    if (_ > 0) {
      let t4 = 0;
      for (let n6 = 0; n6 < _; n6++) {
        const i3 = new mi();
        e.queryCoord2D(l2[n6], i3);
        const r3 = s3.getClosestCoordinate(i3, false), a3 = new mi();
        s3.queryCoord2D(r3, a3);
        mi.distance(i3, a3) <= o && (l2[t4] = l2[n6], c.push(r3), t4++);
      }
      l2.length = t4;
    }
  }
  const d = [0, 1];
  for (let _ = 0; _ < 2; _++) {
    const t3 = 0 === _ ? s3.getStartXY() : s3.getEndXY(), n5 = za(e, t3, x2.unit(), false, -1), i2 = new mi();
    e.queryCoord2D(n5, i2);
    mi.distance(t3, i2) <= o && (l2.push(n5), c.push(d[_]));
  }
  for (let _ = 0; _ < 2; _++) {
    const t3 = [0, 3];
    {
      const e2 = s3.getClosestCoordinate(g2[t3[_]], false), n5 = new mi();
      s3.queryCoord2D(e2, n5);
      mi.distance(g2[t3[_]], n5) <= o && (l2.push(d[_]), c.push(e2));
    }
  }
  return gm(t2, e, s3, l2, c, l2.length, n4, i, r, o, a2, h2, u);
}
function oh(t2, e, n4, i, r, o, a2, h2, u, m) {
  const l2 = Ot(mi, 3);
  e.queryControlPoints(l2);
  const c = Ot(mi, 3);
  if (n4.queryControlPoints(c), hs(l2, c, 3) < 0) return oh(t2, n4, e, i, o, r, a2, h2, u, !m);
  const g2 = os(e, n4);
  if (e.isDegenerateToLineHelper(g2)) {
    const s3 = new fm({ start: e.getStartXY(), end: e.getEndXY() }), l3 = ih(t2, n4, s3, i, o, r, a2, h2, u, !m);
    if (r) for (let t3 = 0; t3 < l3; ++t3) {
      const n5 = s3.getCoord2D(r[t3]);
      r[t3] = e.getClosestCoordinate(n5, false);
    }
    return l3;
  }
  if (n4.isDegenerateToLineHelper(g2)) {
    const s3 = new fm({ start: n4.getStartXY(), end: n4.getEndXY() }), l3 = ih(t2, e, s3, i, r, o, a2, h2, u, m);
    if (o) for (let t3 = 0; t3 < l3; ++t3) {
      const e2 = s3.getCoord2D(o[t3]);
      o[t3] = n4.getClosestCoordinate(e2, false);
    }
    return l3;
  }
  if (as(e, n4, a2 = Math.max(a2, g2))) return 0;
  const d = Yt(3, Number.NaN);
  e.queryWeights(d);
  const _ = Yt(3, Number.NaN);
  n4.queryWeights(_);
  const p2 = [1, Ph(d), 1], f2 = [1, Ph(_), 1], P4 = new x2(0, 1), y2 = new x2(0, 1);
  {
    const t3 = we.constructEmpty();
    ja(l2, p2, new x2(0, 1), t3);
    const e2 = we.constructEmpty();
    ja(c, f2, new x2(0, 1), e2);
    const s3 = Math.max(t3.maxDim(), e2.maxDim());
    if (t3.inflate(3 * a2), e2.inflate(3 * a2), !t3.intersectW(e2)) return 0;
    if (t3.maxDim() < 0.1 * s3) {
      if (fh(l2, p2, t3, P4), fh(c, f2, t3, y2), P4.isEmpty() || y2.isEmpty()) return 0;
      Ja(l2, p2, P4.vmin, P4.vmax, l2, p2), Ja(c, f2, y2.vmin, y2.vmax, c, f2);
    }
  }
  const x4 = _m(l2, 2, c, 2, a2);
  if (0 === x4) return 0;
  const C3 = [], v2 = [];
  if (-1 === x4) {
    const t3 = Ot(si, 3), e2 = Ot(si, 3), s3 = Ot(si, 3);
    uh(l2, p2, t3, e2, s3);
    const n5 = Ot(si, 3), i2 = Ot(si, 3), r2 = Ot(si, 3);
    uh(c, f2, n5, i2, r2);
    const o2 = [], g3 = [], d2 = Nn(t3, 2, e2, 2, s3, 2, n5, 2, i2, 2, r2, 2, true, x2.unit(), x2.unit(), o2, g3, h2, u, m);
    if (d2 > 0) for (let h3 = 0; h3 < d2; h3++) {
      const t4 = new mi();
      ph(c, f2, g3[h3], t4);
      const e3 = new mi();
      ph(l2, p2, o2[h3], e3);
      mi.distance(e3, t4) <= a2 && (C3.push(o2[h3]), v2.push(g3[h3]));
    }
  }
  for (let b2 = 0; b2 < 2; b2++) {
    let t3, e2, n5;
    0 === b2 ? (t3 = l2, e2 = c, n5 = f2) : (t3 = c, e2 = l2, n5 = p2);
    for (let i2 = 0; i2 < 2; i2++) {
      const r2 = 0 === i2 ? 0 : t3.length - 1, o2 = new mi(), h3 = [0], u2 = Ba(e2, n5, t3[r2], x2.unit(), false, -1, 1, h3);
      n(1 === u2), ph(e2, n5, h3[0], o2), mi.distance(t3[r2], o2) <= a2 && (0 === b2 ? (C3.push(0 === r2 ? 0 : 1), v2.push(h3[0])) : (v2.push(0 === r2 ? 0 : 1), C3.push(h3[0])));
    }
  }
  if (0 === C3.length) return 0;
  if (!P4.equalsRange(0, 1)) for (let s3 = 0; s3 < C3.length; ++s3) C3[s3] = Dn.recalculateParentT(P4.vmin, P4.vmax, C3[s3]);
  if (!y2.equalsRange(0, 1)) for (let s3 = 0; s3 < v2.length; ++s3) v2[s3] = Dn.recalculateParentT(y2.vmin, y2.vmax, v2[s3]);
  for (let s3 = 0; s3 < C3.length; ++s3) C3[s3] = yh(d, C3[s3]);
  for (let s3 = 0; s3 < v2.length; ++s3) v2[s3] = yh(_, v2[s3]);
  return gm(t2, e, n4, C3, v2, C3.length, i, r, o, a2, h2, u, m);
}
function ah(t2, e, s3, n4, i, r, o, a2, h2, u) {
  if (e.isLine()) {
    return Li(t2, s3, new fm({ start: e.getStartXY(), end: e.getEndXY() }), n4, r, i, o, a2, h2, !u);
  }
  if (s3.isLine()) {
    return ih(t2, e, new fm({ start: s3.getStartXY(), end: s3.getEndXY() }), n4, i, r, o, a2, h2, u);
  }
  const m = os(e, s3);
  if (as(e, s3, o = Math.max(o, m))) return 0;
  const l2 = Ot(mi, 3);
  e.queryControlPoints(l2);
  const c = Ot(mi, 3);
  s3.queryControlPoints(c);
  const g2 = _m(l2, 2, c, 2, o);
  if (0 === g2) return 0;
  const d = [], _ = [];
  if (-1 === g2) {
    const t3 = Ot(si, 3), n5 = Ot(si, 3), i2 = Ot(si, 3), r2 = [0, 0, 0];
    e.queryWeights(r2), uh(l2, r2, t3, n5, i2);
    const m2 = Ot(qe, 3);
    ji(c, m2);
    const g3 = Nn(t3, 2, n5, 2, i2, 2, [m2[0].x, m2[1].x, m2[2].x], 2, [m2[0].y, m2[1].y, m2[2].y], 2, null, 0, true, x2.unit(), x2.unit(), d, _, a2, h2, u);
    if (g3 > 0) {
      let t4 = 0;
      for (let n6 = 0; n6 < g3; n6++) {
        const i3 = new mi();
        s3.queryCoord2D(_[n6], i3);
        const r3 = new mi();
        e.queryCoord2D(d[n6], r3), mi.distance(r3, i3) <= o && (d[t4] = d[n6], _[t4] = _[n6], t4++);
      }
      d.length = t4, _.length = t4;
    }
  }
  for (let p2 = 0; p2 < 2; p2++) {
    let t3;
    t3 = 0 === p2 ? l2 : c;
    for (let n5 = 0; n5 < 2; n5++) {
      const i2 = 0 === n5 ? 0 : t3.length - 1;
      let r2;
      const a3 = new mi();
      0 === p2 ? (r2 = vi(s3, t3[i2], x2.unit(), false), s3.queryCoord2D(r2, a3)) : (r2 = za(e, t3[i2], x2.unit(), false, -1), e.queryCoord2D(r2, a3)), mi.distance(t3[i2], a3) <= o && (0 === p2 ? (d.push(0 === i2 ? 0 : 1), _.push(r2)) : (_.push(0 === i2 ? 0 : 1), d.push(r2)));
    }
  }
  return gm(t2, e, s3, d, _, d.length, n4, i, r, o, a2, h2, u);
}
function hh(t2, e, s3, n4 = false) {
  const i = Ot(mi, 3);
  n4 ? (i[0].setCoordsPoint2D(t2[0]), i[1].setCoordsPoint2D(t2[1]), i[1].subThis(i[0]), i[2].setCoordsPoint2D(t2[2]), i[2].subThis(i[0]), i[0].setCoords(0, 0)) : (i[0].setCoordsPoint2D(t2[0]), i[1].setCoordsPoint2D(t2[1]), i[2].setCoordsPoint2D(t2[2])), i[0].mulThis(e[0]), i[1].mulThis(e[1]), i[2].mulThis(e[2]), s3[1].setCoords(i[1].x - i[0].x, i[1].y - i[0].y), s3[2].setCoordsPoint2D(i[2].sub(i[1])), s3[2].subThis(s3[1]), s3[1].x *= 2, s3[1].y *= 2, s3[0].setCoordsPoint2D(i[0]);
}
function uh(t2, e, s3, n4, i) {
  const r = si.constructDouble(e[0]), o = si.constructDouble(e[1]), a2 = si.constructDouble(e[2]);
  s3[0].setDouble(t2[0].x), s3[0].mulThis(r), s3[1].setDouble(t2[1].x), s3[1].mulThis(o), s3[2].setDouble(t2[2].x), s3[2].mulThis(a2), s3[2].subThis(s3[1]), s3[1].subThis(s3[0]), s3[2].subThis(s3[1]), s3[1].ldexpThis(1), n4[0].setDouble(t2[0].y), n4[0].mulThis(r), n4[1].setDouble(t2[1].y), n4[1].mulThis(o), n4[2].setDouble(t2[2].y), n4[2].mulThis(a2), n4[2].subThis(n4[1]), n4[1].subThis(n4[0]), n4[2].subThis(n4[1]), n4[1].ldexpThis(1), i[0].setDouble(e[0]), i[1].setDouble(e[1]), i[2].setThis(i[1]), i[2].ldexpThis(1), i[2].negateThis(), i[2].addThis(i[0]), i[2].addDoubleThis(e[2]), i[1].subThis(i[0]), i[1].ldexpThis(1);
}
function mh(t2, e, s3) {
  for (let n4 = 0; n4 < 3; ++n4) s3[n4].setCoordsPoint2DZ(t2[n4].mul(e[n4]), e[n4]);
}
function lh(t2, e, s3, n4) {
  if (0 === s3) return n4.assign(t2[0]), e[0];
  if (1 === s3) return n4.assign(t2[2]), e[2];
  const i = [t2[0].x * e[0], t2[1].x * e[1], t2[2].x * e[2]], r = [t2[0].y * e[0], t2[1].y * e[1], t2[2].y * e[2]], o = [e[0], e[1], e[2]], a2 = s3;
  let h2, u, m;
  if (s3 <= 0.5) {
    const t3 = V(i[0], i[1], a2), e2 = V(i[1], i[2], a2);
    h2 = Q(t3, e2, a2);
    const s4 = V(r[0], r[1], a2), n5 = V(r[1], r[2], a2);
    u = Q(s4, n5, a2);
    const l2 = V(o[0], o[1], a2), c = V(o[1], o[2], a2);
    m = V(l2, c, a2);
  } else {
    const t3 = U(i[0], i[1], a2), e2 = U(i[1], i[2], a2);
    h2 = U(t3, e2, a2);
    const s4 = U(r[0], r[1], a2), n5 = U(r[1], r[2], a2);
    u = U(s4, n5, a2);
    const l2 = U(o[0], o[1], a2), c = U(o[1], o[2], a2);
    m = U(l2, c, a2);
  }
  return h2 /= m, u /= m, n4.setCoords(h2, u), bh(t2, n4), m;
}
function ch(t2, e, s3) {
  const n4 = Ot(mi, 3);
  t2.queryControlPoints(n4);
  const i = [0, 0, 0];
  t2.queryWeights(i);
  gh([Ne.constructPoint2D(n4[0]), Ne.constructPoint2D(n4[1]), Ne.constructPoint2D(n4[2])], [new p(i[0]), new p(i[1]), new p(i[2])], e, s3);
}
function gh(t2, e, s3, n4) {
  if (0 === s3.value()) return void n4.setE(t2[0]);
  if (1 === s3.value()) return void n4.setE(t2[2]);
  const i = [t2[0].x.mulE(e[0]), t2[1].x.mulE(e[1]), t2[2].x.mulE(e[2])], r = [t2[0].y.mulE(e[0]), t2[1].y.mulE(e[1]), t2[2].y.mulE(e[2])], o = [e[0].clone(), e[1].clone(), e[2].clone()], a2 = new p(), h2 = new p(), u = new p();
  if (s3.value() <= 0.5) {
    const t3 = A2(i[0], i[1], s3), e2 = A2(i[1], i[2], s3);
    a2.setE(A2(t3, e2, s3));
    const n5 = A2(r[0], r[1], s3), m2 = A2(r[1], r[2], s3);
    h2.setE(A2(n5, m2, s3));
    const l2 = A2(o[0], o[1], s3), c = A2(o[1], o[2], s3);
    u.setE(A2(l2, c, s3));
  } else {
    const t3 = P2(i[0], i[1], s3), e2 = P2(i[1], i[2], s3);
    a2.setE(P2(t3, e2, s3));
    const n5 = P2(r[0], r[1], s3), m2 = P2(r[1], r[2], s3);
    h2.setE(P2(n5, m2, s3));
    const l2 = P2(o[0], o[1], s3), c = P2(o[1], o[2], s3);
    u.setE(P2(l2, c, s3));
  }
  a2.divThisE(u), h2.divThisE(u);
  const m = new mi(a2.value(), h2.value());
  bh([t2[0].value(), t2[1].value(), t2[2].value()], m), n4.x.set(m.x, a2.eps()), n4.y.set(m.y, h2.eps());
}
function dh(t2, e, s3, n4) {
  const i = s3.lte(ni) ? si.lerpLo : si.lerpHi, [r, o, a2] = [e.map((e2, s4) => t2[s4].x.mul(e2)), e.map((e2, s4) => t2[s4].y.mul(e2)), e].map(([t3, e2, n5]) => i(i(t3, e2, s3), i(e2, n5, s3), s3)), h2 = new mi(r.divThis(a2).value(), o.divThis(a2).value());
  bh(t2.map((t3) => t3.asPoint2D()), h2), n4.x = si.constructDouble(h2.x), n4.y = si.constructDouble(h2.y);
}
function _h(t2, e) {
  return e.setCoords(t2.x / t2.z, t2.y / t2.z), t2.z;
}
function ph(t2, e, s3, n4, i) {
  if (i) {
    if (s3 < 0) {
      return void ps(new fm({ start: t2[0], end: t2[0].add(Aa(t2, e, 0).getUnitVector()) }), s3, n4);
    }
    if (s3 > 1) {
      return void ps(new fm({ start: t2[2], end: t2[2].add(Aa(t2, e, 1).getUnitVector()) }), s3 - 1, n4);
    }
  }
  lh(t2, e, s3, n4);
}
function fh(t2, e, s3, n4) {
  n4.setEmpty();
  const i = [];
  i.push(new x2(0, 1));
  const r = 0.5 * Math.max(s3.width(), s3.height());
  for (; i.length; ) {
    const o = i.at(-1);
    i.pop();
    const a2 = new we();
    if (ja(t2, e, o, a2), a2.isIntersectingW(s3)) {
      const t3 = Math.max(a2.width(), a2.height());
      if (s3.containsW(a2) || t3 <= r || o.width() < 1e-12) n4.merge(o);
      else {
        const t4 = o.getCenter();
        i.push(x2.construct(o.vmin, t4)), i.push(x2.construct(t4, o.vmax));
      }
    }
  }
}
function Ph(t2) {
  return t2[1] / Math.sqrt(t2[0] * t2[2]);
}
function yh(t2, e) {
  const s3 = Math.sqrt(t2[2] / t2[0]);
  return e / Q(s3, 1, e);
}
function xh(t2, e) {
  const s3 = Math.sqrt(t2[0] / t2[2]);
  return e / Q(s3, 1, e);
}
function Ch(t2, e, n4, i) {
  n(e >= 0 && e <= 1);
  new X().setCoordsPoint3D(t2[0]);
  new X().setCoordsPoint3D(t2[1]);
  new X().setCoordsPoint3D(t2[2]);
  const r = new X(), o = new X(), a2 = new X();
  L(3, t2[0], t2[1], e, r), L(3, t2[1], t2[2], e, o), L(3, r, o, e, a2);
  const h2 = t2[2].clone();
  n4 && (n4[0].assign(t2[0]), n4[1].assign(r), n4[2].assign(a2)), i && (i[0].assign(a2), i[1].assign(o), i[2].assign(h2));
}
function vh(t2, e, n4, i) {
  const r = [t2[0], t2[1], t2[2]];
  n(e >= 0 && e <= 1 && n4 !== i);
  const o = Q(r[0], r[1], e), a2 = Q(r[1], r[2], e), h2 = Q(o, a2, e);
  n4 && (n4[0] = r[0], n4[1] = o, n4[2] = h2), i && (i[0] = h2, i[1] = a2, i[2] = r[2]);
}
function bh(t2, e) {
  const s3 = x2.constructEmpty();
  s3.vmin = s3.vmax = t2[0].x, s3.mergeNeCoordinate(t2[1].x), s3.mergeNeCoordinate(t2[2].x), e.x = Us(e.x, s3.vmin, s3.vmax), s3.vmin = s3.vmax = t2[0].y, s3.mergeNeCoordinate(t2[1].y), s3.mergeNeCoordinate(t2[2].y), e.y = Us(e.y, s3.vmin, s3.vmax);
}
function Sh(t2, e) {
  const s3 = new x2();
  s3.vmin = s3.vmax = t2[0].x, s3.mergeNeCoordinate(t2[1].x), s3.mergeNeCoordinate(t2[2].x), e[0].x = Us(e[0].x, s3.vmin, s3.vmax), e[1].x = Us(e[1].x, s3.vmin, s3.vmax), e[2].x = Us(e[2].x, s3.vmin, s3.vmax), s3.vmin = s3.vmax = t2[0].y, s3.mergeNeCoordinate(t2[1].y), s3.mergeNeCoordinate(t2[2].y), e[0].y = Us(e[0].y, s3.vmin, s3.vmax), e[1].y = Us(e[1].y, s3.vmin, s3.vmax), e[2].y = Us(e[2].y, s3.vmin, s3.vmax);
}
var Eh = Jt / 180;
var Dh = 180 / Jt;
function wh(t2) {
  let e = t2;
  return e >= -360 && e < 720 ? (e < 0 ? e += 360 : e >= 360 && (e -= 360), e) : (e = ct(e, 360), e < 0 && (e += 360), e);
}
function Ah(t2) {
  let e = t2;
  return e = wh(e), e > 180 && (e -= 360), e;
}
function Th(t2) {
  return t2 * Eh;
}
function Ih(t2) {
  return t2 * Dh;
}
function Mh(t2) {
  const e = $s();
  let s3 = t2;
  return s3 >= -e && s3 < 2 * e ? (s3 < 0 && (s3 += e), s3 >= e && (s3 -= e), s3) : (s3 = ct(s3, e), s3 < 0 && (s3 += e), s3);
}
function Yh(t2) {
  const e = Hs();
  let s3 = t2;
  return s3 > -e && s3 <= e || (s3 = Mh(s3), s3 > e && (s3 -= $s())), s3;
}
function Nh(t2, e) {
  return Ah(e - t2);
}
var Xh = z2;
var qh = class _qh extends ds2 {
  constructor(t2) {
    if (void 0 === t2 || jt(t2, "vd")) return super({ vd: t2?.vd, XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_semiMajorAxis = 0, this.m_minorMajorRatio = 1, this.m_rotation = 0, this.m_cosr = 1, this.m_sinr = 0, this.m_center = new mi(0, 0), this.m_sweepAngle = 0, this.m_startAngle = 0, this.m_interior = new mi(0, 0), void (this.m_bits = 0);
    if (t2.copy) return super(t2), void (this !== t2.copy && (this.m_center = new mi(0, 0), this.m_interior = new mi(0, 0), t2.copy.copyToImpl(this)));
    if (t2.move) super(t2), this.m_semiMajorAxis = t2.move.m_semiMajorAxis, this.m_minorMajorRatio = t2.move.m_minorMajorRatio, this.m_rotation = t2.move.m_rotation, this.m_cosr = t2.move.m_cosr, this.m_sinr = t2.move.m_sinr, this.m_center = t2.move.m_center.clone(), this.m_sweepAngle = t2.move.m_sweepAngle, this.m_startAngle = t2.move.m_startAngle, this.m_interior = t2.move.m_interior.clone(), this.m_bits = t2.move.m_bits, this.m_cachedValues = t2.move.m_cachedValues, t2.move.m_cachedValues = null;
    else {
      if (t2.fromPoint) return super({ XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_center = new mi(0, 0), this.m_interior = new mi(0, 0), void this.constructCircularArcThreePoint(t2.fromPoint, t2.toPoint, t2.interiorPoint);
      if (t2.center) return super({ XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), this.m_center = new mi(0, 0), this.m_interior = new mi(0, 0), void this.constructCircleRadius(t2.radius, t2.center, t2.bIsCounterClockwise);
      if (t2.semiMajorAxis) return super({ XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 }), void this.constructEllipticArcEndPoints(t2.fromPoint, t2.toPoint, t2.semiMajorAxis, t2.minorMajorRatio, t2.axisXRotationRad, t2.bBigArc, t2.bIsCounterClockwise);
    }
  }
  getBoundary() {
    return $s2(this);
  }
  assignCopy(t2) {
    return this !== t2 && t2.copyTo(this), this;
  }
  constructCircleRadius(t2, e, s3 = false) {
    return this.constructEllipse(t2, 1, e, 0, s3), this.setProjectionBehavior(0), this.afterCompletedModification(), this;
  }
  constructCircleCenterAndPoint(t2, e, s3 = false) {
    const n4 = mi.distance(t2, e);
    return this.constructEllipticArcEndPointsCenter(e, e, n4, 1, 0, true, s3, t2), this.setProjectionBehavior(0), this.afterCompletedModification(), this;
  }
  constructTwoPointCircle(t2, e, s3 = false) {
    const n4 = mi.lerp(t2, e, 0.5);
    return this.constructCircleCenterAndPoint(n4, t2, s3), this;
  }
  constructLineEllipticArc(t2, e) {
    return Su(this, t2, e, 1), this;
  }
  constructLineCircularArc(t2, e) {
    return Su(this, t2, e, 0), this;
  }
  constructEllipse(t2, e, s3, n4, i = false) {
    this.m_semiMajorAxis = Math.abs(t2), this.m_minorMajorRatio = Math.abs(e), this.m_minorMajorRatio > 1 && (this.m_semiMajorAxis *= this.m_minorMajorRatio, this.m_minorMajorRatio = 1 / this.m_minorMajorRatio);
    const r = new mi(0, this.m_minorMajorRatio * this.m_semiMajorAxis), o = Math.cos(n4), a2 = Math.sin(n4);
    return r.rotateDirect(o, a2), r.addThis(s3), this.constructEllipticArcEndPointsCenter(r, r, this.m_semiMajorAxis, this.m_minorMajorRatio, n4, true, i, s3), this;
  }
  inflate(t2) {
    if (this.isDegenerateToLine()) return;
    let e = this.getSemiMinorAxis() + t2;
    if (e = e <= 0 ? 0 : (this.getSemiMajorAxis() + t2) / this.getSemiMajorAxis(), this.isCircular()) {
      const t3 = new x3();
      t3.setShiftCoords(-this.m_center.x, -this.m_center.y), t3.scale(e, e), t3.shiftCoords(this.m_center.x, this.m_center.y), this.applyTransformation(t3);
    } else {
      const t3 = new x3();
      this.canonicToWorldTransformation(t3);
      const s3 = t3.clone();
      s3.invertPreciseThis(), s3.scale(e, e), s3.multiply(t3), this.applyTransformation(s3);
    }
  }
  constructEnclosingCircle(t2, e, s3 = false) {
    return Zu(this, t2, e, s3), this;
  }
  constructThreePointCircle(t2, e, s3, n4 = false) {
    if (t2.equals(e) || e.equals(s3) || t2.equals(s3)) {
      const i = t2.clone(), r = e.clone(), o = s3.clone();
      return i.equals(r) && r.assign(o), this.constructTwoPointCircle(i, r, n4);
    }
    {
      const i = mi.calculateCircleCenterFromThreePoints(t2, e, s3);
      if (!i.isFinite() || !Number.isFinite(mi.distance(t2, i))) {
        const n5 = mi.distance(t2, e), i2 = mi.distance(t2, s3);
        this.constructLineCircularArc(t2, n5 >= i2 ? e : s3);
      }
      return this.constructCircleCenterAndPoint(i, t2, n4);
    }
  }
  constructCircularArcThreePoint(t2, e, s3) {
    const n4 = new p(t2.x), i = new p(e.x), r = new p(s3.x), o = new p(t2.y), a2 = new p(e.y), h2 = new p(s3.y), u = new p(0.5), m = i.subE(n4), l2 = a2.subE(o), c = r.subE(n4), g2 = h2.subE(o), d = m.mulE(g2).subThisE(l2.mulE(c));
    if (d.scaleError(10), d.isZero()) {
      if (!m.isZero() || !l2.isZero()) return Su(this, t2, e, 0), this;
      {
        const n5 = t2.clone().addThis(e).mulThis(0.5).addThis(s3).mulThis(0.5), i2 = s3.sub(n5).length();
        this.constructEllipticArcEndPointsCenter(t2, e, i2, 1, 0, true, false, n5), this.m_interior.assign(s3);
      }
      return this.setProjectionBehavior(0), this;
    }
    const _ = m.sqr().addThisE(l2.sqr()).mulThisE(u), p2 = c.sqr().addThisE(g2.sqr()).mulThisE(u), f2 = _.mulE(g2).subThisE(p2.mulE(l2)), P4 = m.mulE(p2).subThisE(c.mulE(_));
    f2.divThisE(d), P4.divThisE(d);
    const y2 = f2.sqr().addThisE(P4.sqr());
    y2.sqrtThis();
    const x4 = f2.addE(n4), C3 = P4.addE(o);
    let v2 = t2.x - x4.value(), b2 = t2.y - C3.value();
    const S2 = Math.atan2(b2, v2);
    v2 = e.x - x4.value(), b2 = e.y - C3.value();
    const E = Math.atan2(b2, v2);
    v2 = s3.x - x4.value(), b2 = s3.y - C3.value();
    const D3 = Math.atan2(b2, v2);
    let w3 = D3 - 2 * Hs();
    for (; w3 < S2; ) w3 += 2 * Hs();
    let A4 = E - 2 * Hs();
    for (; A4 < w3; ) A4 += 2 * Hs();
    let T3 = D3 + 2 * Hs();
    for (; T3 > S2; ) T3 -= 2 * Hs();
    let I2, M2 = E + 2 * Hs();
    for (; M2 > T3; ) M2 -= 2 * Hs();
    I2 = A4 - S2 < S2 - M2 ? A4 - S2 : M2 - S2;
    const Y3 = new mi(x4.value(), C3.value());
    return this.constructEllipticArcEndPointsCenter(t2, e, y2.value(), 1, 0, Math.abs(I2) > Hs(), I2 > 0, Y3), this.m_interior.assign(s3), this.setProjectionBehavior(0), this.afterCompletedModification(), this;
  }
  constructCircularArc(t2, e, s3, n4) {
    return this.constructEllipticArcGeneral(t2, 1, e, s3, n4, 0), this.setProjectionBehavior(0), this.afterCompletedModification(), this;
  }
  constructEllipticArcEndPoints(t2, e, s3, n4, i, r, o) {
    return bu(this, t2, e, s3, n4, i, r, o);
  }
  constructEllipticArcEndPointsCenter(t2, e, s3, n4, i, r, o, a2) {
    return bu(this, t2, e, s3, n4, i, r, o, a2);
  }
  constructEllipticArcGeneral(t2, e, s3, n4, i, r) {
    this.m_semiMajorAxis = Math.abs(t2), this.m_minorMajorRatio = Math.abs(e), this.m_minorMajorRatio > 1 && (this.m_semiMajorAxis *= this.m_minorMajorRatio, this.m_minorMajorRatio = 1 / this.m_minorMajorRatio);
    const o = Yh(r), a2 = Math.cos(o), h2 = Math.sin(o), u = new mi(this.m_semiMajorAxis, this.m_minorMajorRatio * this.m_semiMajorAxis), m = mi.getNAN(), l2 = Yh(n4);
    m.x = u.x * Math.cos(l2), m.y = u.y * Math.sin(l2), m.rotateDirect(a2, h2), m.addThis(s3);
    const c = js(i, $s());
    let g2 = c;
    Math.abs(g2) === $s() && (g2 = 0);
    const d = mi.getNAN();
    return d.x = u.x * Math.cos(l2 + g2), d.y = u.y * Math.sin(l2 + g2), d.rotateDirect(a2, h2), d.addThis(s3), this.constructEllipticArcEndPointsCenter(m, d, this.m_semiMajorAxis, this.m_minorMajorRatio, o, Math.abs(c) > Hs(), c > 0, s3);
  }
  constructEllipticArcAsNURB(t2, s3, n4, i) {
    (i >= 1 || i < 0) && P("construct_elliptic_arc_as_NURB: weight"), s3.isFinite() || P("construct_elliptic_arc_as_NURB: control_point");
    return Gu([t2, s3, n4], i * i, null, false, this), this;
  }
  constructCanonic(t2) {
    return this.assignCopy(t2), t2.isDegenerateToLine() || t2.m_center.isEqual(0, 0) && 0 === this.m_rotation || (this.m_XStart = t2.getSemiMajorAxis() * Math.cos(t2.m_startAngle), this.m_YStart = t2.getSemiMinorAxis() * Math.sin(t2.m_startAngle), this.m_XEnd = t2.getSemiMajorAxis() * Math.cos(t2.getEndAngle()), this.m_YEnd = t2.getSemiMinorAxis() * Math.sin(t2.getEndAngle()), this.m_center.setCoords(0, 0), this.m_rotation = 0, this.m_cosr = 1, this.m_sinr = 0, Uu(this), this.afterCompletedModification(), t2 !== this && ns(this, t2)), this;
  }
  isCircular() {
    return 1 === this.m_minorMajorRatio && 0 === this.m_rotation && !this.isDegenerateToLine();
  }
  isDegenerateToLineHelper(t2) {
    if (this.isLine()) return true;
    if (this.isMajor()) return false;
    const e = this.getEndXY().sub(this.getStartXY()).length();
    return !(this.calculateLength2D() - e > t2);
  }
  isDegenerateToLine() {
    return Eu(this);
  }
  getCenter() {
    return this.m_center.clone();
  }
  setCenter(t2) {
    if (!this.m_center.isNAN()) {
      const e = t2.sub(this.m_center);
      this.m_XStart += e.x, this.m_YStart += e.y, this.m_XEnd += e.x, this.m_YEnd += e.y, this.m_interior.addThis(e), this.m_center.assign(t2), this.endPointModified(), this.normalizeAfterEndpointChange();
    }
  }
  getAxisXRotation() {
    return this.m_rotation;
  }
  getSemiAxes() {
    return mi.construct(this.m_semiMajorAxis, this.m_semiMajorAxis * this.m_minorMajorRatio);
  }
  getSemiMajorAxis() {
    return this.m_semiMajorAxis;
  }
  getSemiMinorAxis() {
    return this.m_semiMajorAxis * this.m_minorMajorRatio;
  }
  getMinorMajorRatio() {
    return this.m_minorMajorRatio;
  }
  isClockwise() {
    return !qu(this);
  }
  isMajor() {
    return Vu(this);
  }
  getSweepAngle() {
    return this.m_sweepAngle;
  }
  getStartAngle() {
    return this.m_startAngle;
  }
  getEndAngle() {
    return this.m_startAngle + this.m_sweepAngle;
  }
  getGeometryType() {
    return a.enumEllipticArc;
  }
  queryEnvelope(t2) {
    if (4 === t2.m_EnvelopeType) {
      t2.setEmpty(), t2.assignVertexDescription(this.m_description);
      const e = n3.constructEmpty();
      this.queryEnvelope(e), t2.setEnvelope(e);
      for (let s3 = 1, n4 = this.m_description.getAttributeCount(); s3 < n4; s3++) {
        const e2 = this.m_description.getSemantics(s3);
        for (let n5 = 0, i = Xh.getComponentCount(e2); s3 < i; s3++) {
          const s4 = this.queryInterval(e2, n5);
          t2.setIntervalEnvelope(e2, n5, s4);
        }
      }
    } else 2 === t2.m_EnvelopeType ? $u(this, x2.unit(), t2) : z("3d not impl");
  }
  applyTransformation(t2) {
    Tu(this, t2, false, null, null);
  }
  createInstance() {
    return new _qh();
  }
  calculateLength2D() {
    return fu(this, 0, 1);
  }
  queryControlPointsHelper(t2) {
    b("");
  }
  queryCoord2D(t2, e) {
    if (Eu(this)) fs2(t2, this.getStartXY(), this.getEndXY(), e);
    else if (0 === t2) e.assign(mi.construct(this.m_XStart, this.m_YStart));
    else if (1 === t2) e.assign(mi.construct(this.m_XEnd, this.m_YEnd));
    else {
      const s3 = gu(this, t2), n4 = new mi(this.m_semiMajorAxis * Math.cos(s3), this.getSemiMinorAxis() * Math.sin(s3));
      n4.rotateDirect(this.m_cosr, this.m_sinr), n4.addThis(this.m_center), e.assign(n4);
    }
  }
  queryCoord2DE(t2, e) {
    iu(this, t2, e);
  }
  queryCoord2DMP(t2, e) {
    z("");
  }
  getCoordX(t2) {
    const e = new mi();
    return this.queryCoord2D(t2, e), e.x;
  }
  getCoordY(t2) {
    const e = new mi();
    return this.queryCoord2D(t2, e), e.y;
  }
  cut(t2, e, s3) {
    const n4 = new Pm();
    return this.queryCut(t2, e, n4, s3), n4.releaseSegment();
  }
  queryCut(t2, e, s3, n4) {
    const i = s3.createEllipticArc();
    n4 && i.dropAllAttributes();
    let r = 0 === t2 && 1 === e;
    if (r && !n4) return void this.copyTo(i);
    const o = mi.getNAN();
    this.queryCoord2D(t2, o);
    const a2 = mi.getNAN();
    if (this.queryCoord2D(e, a2), !r) {
      if (o.equals(a2)) e - t2 > 0.5 && this.isMajor() && this.isClosed() ? (r = true, t2 = 0, e = 1) : 1 === e ? t2 = e : e = t2;
      else if (t2 > 0 && o.isEqual(this.m_XStart, this.m_YStart) && (t2 = 0), e < 1 && a2.isEqual(this.m_XEnd, this.m_YEnd) && (e = 1), r = 0 === t2 && 1 === e, r && !n4) return void this.copyTo(i);
    }
    if (i.m_center.assign(this.m_center), i.m_semiMajorAxis = this.m_semiMajorAxis, i.m_minorMajorRatio = this.m_minorMajorRatio, i.m_interior.assign(this.m_interior), i.m_rotation = this.m_rotation, i.m_cosr = this.m_cosr, i.m_sinr = this.m_sinr, i.m_sweepAngle = this.m_sweepAngle, i.m_startAngle = this.m_startAngle, i.m_bits = this.m_bits, Ze(i, o.x, o.y), Ue(i, a2.x, a2.y), r) return void Mu(i, Pu(this));
    i.m_startAngle = gu(this, t2), i.m_sweepAngle = gu(this, e) - i.m_startAngle, i.m_startAngle = hu(i.m_startAngle), Fu(i, Math.abs(i.m_sweepAngle) > Hs()), n4 && i.assignVertexDescription(this.m_description), Uu(i), lu(i);
    const h2 = this.m_description.getAttributeCount();
    if (h2 > 1 && !n4) {
      for (let e2 = 1; e2 < h2; e2++) {
        const s4 = this.m_description.getSemantics(e2), n5 = Xh.getComponentCount(s4);
        for (let e3 = 0; e3 < n5; e3++) {
          const n6 = this.getAttributeAsDbl(t2, s4, e3);
          i.setStartAttribute(s4, e3, n6);
        }
      }
      for (let t3 = 1; t3 < h2; t3++) {
        const s4 = this.m_description.getSemantics(t3), n5 = Xh.getComponentCount(s4);
        for (let t4 = 0; t4 < n5; t4++) {
          const n6 = this.getAttributeAsDbl(e, s4, t4);
          i.setEndAttribute(s4, t4, n6);
        }
      }
    }
    i.afterCompletedModification();
  }
  queryDerivative(t2, e) {
    nm(this, t2, e);
  }
  cutArcIgnoreAttributes(t2, e, s3) {
    let n4 = 0 === t2 && 1 === e;
    const i = new mi();
    this.queryCoord2D(t2, i);
    const r = new mi();
    this.queryCoord2D(e, r), n4 || (i.equals(r) ? e - t2 > 0.5 && this.isMajor() && this.isClosed() ? (n4 = true, t2 = 0, e = 1) : 1 === e ? t2 = e : e = t2 : (t2 > 0 && i.isEqual(this.m_XStart, this.m_YStart) && (t2 = 0), e < 1 && r.isEqual(this.m_XEnd, this.m_YEnd) && (e = 1), n4 = 0 === t2 && 1 === e)), s3.m_center.assign(this.m_center), s3.m_semiMajorAxis = this.m_semiMajorAxis, s3.m_minorMajorRatio = this.m_minorMajorRatio, s3.m_interior.assign(this.m_interior), s3.m_rotation = this.m_rotation, s3.m_cosr = this.m_cosr, s3.m_sinr = this.m_sinr, s3.m_sweepAngle = this.m_sweepAngle, s3.m_startAngle = this.m_startAngle, s3.m_bits = this.m_bits, Ze(s3, i.x, i.y), Ue(s3, r.x, r.y), n4 ? Mu(s3, Pu(this)) : (s3.m_startAngle = gu(this, t2), s3.m_sweepAngle = gu(this, e) - s3.m_startAngle, s3.m_startAngle = hu(s3.m_startAngle), Fu(s3, Math.abs(s3.m_sweepAngle) > Math.PI), Uu(s3), s3.afterCompletedModification());
  }
  changeEndPoints2D(t2, e) {
    xu(this, t2, e, false);
  }
  getAttributeAsDbl(t2, e, s3) {
    if (0 === e) return 0 === s3 ? this.getCoordX(t2) : this.getCoordY(t2);
    if (0 === t2) return this.getStartAttributeAsDbl(e, s3);
    if (1 === t2) return this.getEndAttributeAsDbl(e, s3);
    const n4 = this.calculateLength2D(), i = n4 > 0 ? this.tToLength(t2) / n4 : 0, r = Xh.getInterpolation(e), o = this.getStartAttributeAsDbl(e, s3), a2 = this.getEndAttributeAsDbl(e, s3);
    return It(r, o, a2, i, Xh.getDefaultValue(e));
  }
  getClosestCoordinate(t2, e) {
    return tm(this, t2, x2.unit(), e);
  }
  getClosestCoordinateOnInterval(t2, e, s3 = -1) {
    return tm(this, t2, e, false);
  }
  getYMonotonicParts(t2, n4 = false) {
    t2.length < 2 && P("");
    const i = this.getSemiAxes(), r = Math.atan2(i.y * this.m_cosr, i.x * this.m_sinr), o = r + Hs(), a2 = Yt(3, Number.NaN);
    let h2 = 0;
    if (a2[0] = cu(this, r), a2[0] > 0 && a2[0] < 1 && h2++, a2[1] = cu(this, o), a2[1] > 0 && a2[1] < 1 && (a2[h2] = a2[1], h2++), 0 === h2) return 0;
    a2[h2] = 1, h2++, n(t2.length >= h2);
    let u = 0;
    for (let e = 0; e < h2; e++) {
      const s3 = a2[e];
      this.queryCut(u, s3, t2[e], n4), u = s3;
    }
    return h2;
  }
  getMonotonicParts(t2, n4) {
    if (t2.length < 4 && P(""), this.isDegenerateToLine()) return t2[0].createEllipticArc().assignCopy(this), n4 && t2[0].get().dropAllAttributes(), 1;
    const i = this.getSemiAxes(), r = Yt(4, Number.NaN);
    r[0] = Math.atan2(i.y * this.m_cosr, i.x * this.m_sinr), r[1] = r[0] + Hs(), r[2] = Math.atan2(-i.y * this.m_sinr, i.x * this.m_cosr), r[3] = r[2] + Hs();
    const o = Yt(5, Number.NaN);
    let a2 = 0;
    for (let e = 0; e < 4; e++) o[a2] = cu(this, r[e]), o[a2] > 0 && o[a2] < 1 && a2++;
    if (0 === a2) return 0;
    zt(o, a2), o[a2 - 1] < 1 && (o[a2] = 1, a2++), n(t2.length >= a2);
    let h2 = 0;
    for (let e = 0; e < a2; e++) {
      const s3 = o[e];
      this.queryCut(h2, s3, t2[e], n4), h2 = s3;
    }
    return a2;
  }
  intersectionWithAxis2D(t2, e, s3, n4) {
    if (Eu(this)) {
      return new fm({ start: this.getStartXY(), end: this.getEndXY() }).intersectionWithAxis2D(t2, e, s3, n4);
    }
    let i, r;
    const o = new p(e), a2 = this.getSemiAxes();
    if (t2) {
      if (e > this.m_center.y + a2.x || e < this.m_center.y - a2.x) return 0;
      i = new p(a2.x).mulThis(this.m_sinr), r = new p(a2.y).mulThis(this.m_cosr), o.subThis(this.m_center.y);
    } else {
      if (e > this.m_center.x + a2.x || e < this.m_center.x - a2.x) return 0;
      i = new p(a2.x).mulThis(this.m_cosr), r = new p(a2.y).mulThis(-this.m_sinr), o.subThis(this.m_center.x);
    }
    const h2 = i.sqr(), u = r.sqr(), m = h2.addE(u), l2 = r.mulE(o).mulThis(-2), c = o.sqr().subThisE(h2), g2 = l2.sqr().subThisE(m.mulE(c).mulThis(4)), d = i.mulE(o).mulThis(-2), _ = o.sqr().subThisE(u), p2 = d.sqr().subThisE(m.mulE(_).mulThis(4));
    let f2 = g2.eps() * Math.abs(p2.value()) <= p2.eps() * Math.abs(g2.value());
    f2 ? i.isZero() && (f2 = false) : r.isZero() && (f2 = true), f2 || (l2.setE(d), c.setE(_));
    const P4 = Ot(p, 2);
    let y2 = dn(m, l2, c, x2.construct(-1, 1), false, P4);
    if (0 === y2) return 0;
    const x4 = [0, 0];
    let C3 = 0;
    for (let v2 = 0; v2 < y2; v2++) {
      const t3 = new p(), e2 = new p();
      f2 ? (t3.setE(P4[v2]), e2.setE(o.subE(r.mulE(P4[v2])).divThisE(i))) : (e2.setE(P4[v2]), t3.setE(o.subE(i.mulE(P4[v2])).divThisE(r)));
      const s4 = cu(this, Math.atan2(t3.value(), e2.value()));
      s4 >= 0 && s4 <= 1 && (x4[C3] = s4, C3++);
    }
    return y2 = C3, 0 === y2 ? 0 : (2 === y2 && x4[0] > x4[1] && (x4[1] = Pt(x4[0], x4[0] = x4[1])), n4 && Dt(n4, x4, 0, 0, y2), s3 && (s3[0] = t2 ? this.getCoordX(x4[0]) : this.getCoordY(x4[0]), y2 > 1 && (s3[1] = t2 ? this.getCoordX(x4[1]) : this.getCoordY(x4[1]), !n4 && s3[0] > s3[1] && (s3[1] = Pt(s3[0], s3[0] = s3[1])))), y2);
  }
  intersectionOfYMonotonicWithAxisX(t2, e) {
    if (this.m_YStart === this.m_YEnd) return t2 === this.m_YStart ? e : Number.NaN;
    if (t2 === this.m_YStart) return this.m_XStart;
    if (t2 === this.m_YEnd) return this.m_XEnd;
    const s3 = [0, 0];
    return -1 === this.intersectionWithAxis2D(true, t2, s3, null) ? e : s3[0];
  }
  isCurve() {
    return true;
  }
  isDegenerate(t2) {
    return ze(this, t2);
  }
  isDegenerate3D(t2, e) {
    return n(0), false;
  }
  queryLooseEnvelope(t2) {
    3 !== t2.m_EnvelopeType ? this.queryLooseEnvelopeOnInterval(new x2(0, 1), t2) : z("3d not impl");
  }
  clone(t2) {
    const e = new _qh();
    return this.copyTo(e), e;
  }
  queryInterval(t2, e) {
    if (0 === t2) {
      if (Eu(this)) return 0 === e ? x2.construct(this.getStartX(), this.getEndX()) : x2.construct(this.getStartY(), this.getEndY());
      let t3;
      const s3 = this.getSemiAxes();
      t3 = 0 === e ? Math.atan2(-s3.y * this.m_sinr, s3.x * this.m_cosr) : Math.atan2(s3.y * this.m_cosr, s3.x * this.m_sinr);
      const n4 = t3 + Math.PI, i = [0, 0];
      i[0] = cu(this, t3), i[1] = cu(this, n4);
      const r = 0 === e ? x2.construct(this.getStartX(), this.getEndX()) : x2.construct(this.getStartY(), this.getEndY()), o = new mi();
      for (let a2 = 0; a2 < 2; a2++) {
        const t4 = i[a2];
        t4 > 0 && t4 < 1 && (this.queryCoord2D(t4, o), r.mergeNeCoordinate(0 === e ? o.x : o.y));
      }
      return r;
    }
    return super.queryInterval(t2, e);
  }
  queryLooseEnvelopeOnInterval(t2, e) {
    const s3 = new x2(0, 1);
    if (s3.intersect(t2), s3.isEmpty()) return void e.setEmpty();
    if (Eu(this)) return e.setCoords(this.getCoord2D(s3.vmin)), void e.mergeNe(this.getCoord2D(s3.vmax));
    const n4 = this.getCoord2D(s3.vmin), i = this.getCoord2D(s3.vmax);
    if (1 === this.m_minorMajorRatio && Math.abs(this.m_sweepAngle) * s3.width() <= Wt) {
      let t3 = mi.lerp(n4, i, 0.5);
      const s4 = t3.sub(this.m_center);
      return s4.normalize(), t3 = t3.add(s4.mul(0.5 * mi.distance(n4, i))), e.setCoords(n4), e.mergeNe(i), void e.mergeNe(t3);
    }
    $u(this, s3, e);
  }
  tToLength(t2) {
    return Eu(this) ? t2 * mi.distance(this.getStartXY(), this.getEndXY()) : 1 === this.m_minorMajorRatio ? Math.abs(this.getSweepAngle() * t2) * this.m_semiMajorAxis : Du(this, t2);
  }
  parametricAngleToT(t2) {
    return cu(this, t2);
  }
  tToParametricAngle(t2) {
    return gu(this, t2);
  }
  lengthToT(t2) {
    if (Eu(this)) {
      const e = mi.distance(this.getStartXY(), this.getEndXY());
      return 0 === e ? 0 : t2 / e;
    }
    if (1 === this.m_minorMajorRatio) {
      const e = Math.abs(this.getSweepAngle()) * this.m_semiMajorAxis;
      return 0 === e ? 0 : t2 / e;
    }
    return wu(this, t2);
  }
  calculateWeightedAreaCentroid2D(t2) {
    if (Eu(this)) {
      const t3 = new mi();
      return t3.setCoords(0, 0), t3;
    }
    const e = Hu(this), s3 = this.getStartXY().sub(this.m_center), n4 = this.getEndXY().sub(this.m_center), i = this.m_semiMajorAxis, r = this.getSemiMinorAxis(), o = this.m_startAngle + this.m_sweepAngle, a2 = new mi();
    a2.x = i * r * (i * this.m_cosr * (-Math.sin(o) + Math.sin(this.m_startAngle)) + r * (-Math.cos(o) + Math.cos(this.m_startAngle)) * this.m_sinr) / 3, a2.y = i * r * (r * (Math.cos(o) - Math.cos(this.m_startAngle)) * this.m_cosr + i * (-Math.sin(o) + Math.sin(this.m_startAngle)) * this.m_sinr) / 3;
    const h2 = n4.add(s3).mul(n4.crossProduct(s3) / 6);
    return a2.x -= h2.x, a2.y -= h2.y, a2.add(this.m_center.sub(t2).mul(e));
  }
  calculateWeightedCentroid2D() {
    const t2 = new mi();
    if (this.isDegenerate(0)) return t2.setCoords(0, 0), t2;
    if (Eu(this)) return t2.assign(this.getCoord2D(0.5).mul(this.calculateLength2D())), t2;
    let e = this.m_startAngle, s3 = this.m_startAngle + this.m_sweepAngle;
    if (s3 < e) {
      const t3 = e;
      e = s3, s3 = t3;
    }
    const n4 = Math.sin(e), i = Math.sin(s3), r = Math.cos(e), o = Math.cos(s3);
    if (1 === this.m_minorMajorRatio) {
      const e2 = this.getSemiMajorAxis(), s4 = e2 * e2, a2 = s4 * (i - n4), h2 = s4 * (r - o);
      t2.setCoords(a2, h2);
    } else {
      const e2 = this.getSemiMajorAxis(), s4 = this.getSemiMinorAxis(), a2 = e2 * e2, h2 = s4 * s4, u = e2 * s4, m = a2 - h2, l2 = m / h2, c = m / a2, g2 = Math.sqrt(l2), d = Math.sqrt(c), _ = 0.5 * u * (Math.asinh(g2 * i) / g2 + i * Math.sqrt(1 + l2 * i * i)) - 0.5 * u * (Math.asinh(g2 * n4) / g2 + n4 * Math.sqrt(1 + l2 * n4 * n4)), p2 = -0.5 * u * (Math.asin(d * o) / d + o * Math.sqrt(1 - c * o * o)) - -0.5 * u * (Math.asin(d * r) / d + r * Math.sqrt(1 - c * r * r));
      t2.setCoords(_, p2);
    }
    return t2.rotateDirect(this.m_cosr, this.m_sinr), t2.assign(t2.add(this.m_center.mul(this.calculateLength2D()))), t2;
  }
  isIntersectingPoint(t2, e, s3) {
    if (s3 && (t2.isEqualPoint2D(this.getStartXY()) || t2.isEqualPoint2D(this.getEndXY()))) return false;
    if (!Eu(this)) {
      const s4 = mi.distance(t2, this.m_center), n5 = this.getSemiAxes();
      if (s4 < n5.x - e || s4 > n5.y + e) return false;
    }
    const n4 = this.getClosestCoordinate(t2, false), i = new mi();
    this.queryCoord2D(n4, i);
    return mi.distance(i, t2) <= e;
  }
  isIntersectingPoint3D(t2, e, n4, i, r = 1) {
    return n(0), false;
  }
  getTangent(t2) {
    if (Eu(this)) return this.getEndXY().sub(this.getStartXY());
    {
      const e = gu(this, t2), s3 = new mi();
      return s3.setCoords(-this.m_semiMajorAxis * Math.sin(e), this.getSemiMinorAxis() * Math.cos(e)), this.m_rotation && s3.rotateDirect(this.m_cosr, this.m_sinr), s3.scale(this.getSweepAngle()), s3;
    }
  }
  getDerivative(t2) {
    if (Eu(this)) return this.getEndXY().sub(this.getStartXY());
    {
      const e = gu(this, t2), s3 = new mi();
      return s3.setCoords(-this.m_semiMajorAxis * Math.sin(e), this.getSemiMinorAxis() * Math.cos(e)), this.m_rotation && s3.rotateDirect(this.m_cosr, this.m_sinr), s3.scale(this.getSweepAngle()), s3;
    }
  }
  normalizeAfterEndpointChange() {
    return !!Ru(this) && (Eu(this) ? (zu(this), false) : Bu(this, false));
  }
  projectionBehavior() {
    return (4 & this.m_bits) >> 2;
  }
  setProjectionBehavior(t2) {
    this.m_bits = -5 & this.m_bits | t2 << 2;
  }
  convertToCanonic(t2) {
    const e = new mi(t2.x, t2.y);
    return e.subThis(this.m_center), e.rotateReverse(this.m_cosr, this.m_sinr), e;
  }
  convertFromCanonic(t2) {
    const e = new mi(t2.x, t2.y);
    return e.rotateDirect(this.m_cosr, this.m_sinr), e.addThis(this.m_center), e;
  }
  canonicToWorldTransformation(t2) {
    t2.setRotate(this.m_cosr, this.m_sinr), t2.shiftCoords(this.m_center.x, this.m_center.y);
  }
  getCurvature(t2) {
    const e = gu(this, t2), s3 = new mi(), n4 = this.getSemiMinorAxis();
    s3.setCoords(-this.m_semiMajorAxis * Math.sin(e), n4 * Math.cos(e));
    const i = new mi();
    i.setCoords(-this.m_semiMajorAxis * Math.cos(e), -n4 * Math.sin(e)), this.m_rotation && (s3.rotateDirect(this.m_cosr, this.m_sinr), i.rotateDirect(this.m_cosr, this.m_sinr));
    const r = s3.sqrLength();
    if (0 === r) return Number.NaN;
    const o = Math.sqrt(r);
    s3.divThis(o);
    return s3.crossProduct(i) / r;
  }
  getMonotonicPartParams(t2, s3) {
    const n4 = Yt(6, Number.NaN);
    n4[0] = 0;
    let i = 1;
    if (this.isDegenerateToLine()) n4[1] = 1, i = 2;
    else {
      const t3 = this.getSemiAxes(), e = Yt(4, Number.NaN);
      this.m_rotation ? (e[0] = Math.atan2(t3.y * this.m_cosr, t3.x * this.m_sinr), e[1] = e[0] + Math.PI, e[2] = Math.atan2(-t3.y * this.m_sinr, t3.x * this.m_cosr), e[3] = e[2] + Math.PI) : (e[0] = 0, e[1] = Math.PI, e[2] = 0.5 * Math.PI, e[3] = Ws());
      for (let s4 = 0; s4 < 4; s4++) {
        const t4 = cu(this, e[s4]);
        t4 > 0 && t4 < 1 && (n4[i] = t4, i++);
      }
      i > 2 && zt(n4, i), n4[i] = 1, i++;
    }
    if (s3) {
      t2 < i && P("");
      for (let t3 = 0; t3 < i; t3++) s3[t3] = n4[t3];
    }
    return i;
  }
  calculateLowerLength2D() {
    const t2 = mi.distance(this.getStartXY(), this.getEndXY());
    if (this.isDegenerateToLine()) return t2;
    const e = Math.abs(this.m_sweepAngle) * this.getSemiMinorAxis();
    return Math.max(e, t2);
  }
  calculateUpperLength2D() {
    const t2 = mi.distance(this.getStartXY(), this.getEndXY());
    if (this.isDegenerateToLine()) return t2;
    const e = Math.abs(this.m_sweepAngle) * this.getSemiMajorAxis();
    return Math.max(e, t2);
  }
  orientBottomUp() {
    if (this.m_YEnd < this.m_YStart || this.m_YEnd === this.m_YStart && this.m_XEnd < this.m_XStart) {
      this.m_XEnd = Pt(this.m_XStart, this.m_XStart = this.m_XEnd), this.m_YEnd = Pt(this.m_YStart, this.m_YStart = this.m_YEnd);
      for (let t2 = 0, e = this.m_description.getTotalComponentCount() - 2; t2 < e; t2++) this.m_attributes[t2 + e] = Pt(this.m_attributes[t2], this.m_attributes[t2] = this.m_attributes[t2 + e]);
      this.m_startAngle = this.m_startAngle + this.m_sweepAngle, this.m_sweepAngle = -this.m_sweepAngle;
    }
  }
  isLine() {
    return Eu(this);
  }
  copyIgnoreAttributes(t2) {
    t2.m_XStart = this.m_XStart, t2.m_YStart = this.m_YStart, t2.m_XEnd = this.m_XEnd, t2.m_YEnd = this.m_YEnd, t2.m_center.assign(this.m_center), t2.m_semiMajorAxis = this.m_semiMajorAxis, t2.m_minorMajorRatio = this.m_minorMajorRatio, t2.m_interior.assign(this.m_interior), t2.m_rotation = this.m_rotation, t2.m_cosr = this.m_cosr, t2.m_sinr = this.m_sinr, t2.m_sweepAngle = this.m_sweepAngle, t2.m_startAngle = this.m_startAngle, t2.m_bits = this.m_bits, Yu(t2);
  }
  calculateArea2DHelper() {
    return Hu(this);
  }
  absNorm() {
    let t2 = this.getStartXY().norm(1) + this.getEndXY().norm(1);
    return this.isDegenerateToLine() || (t2 += this.m_center.norm(1), t2 += this.m_semiMajorAxis), t2;
  }
  queryEnvelopeW(t2, e) {
    if (e.setCoords(this.getCoord2D(t2.vmin)), e.mergeNe(this.getCoord2D(t2.vmax)), Eu(this)) return;
    const s3 = this.getSemiAxes(), n4 = Yt(8, Number.NaN);
    {
      const t3 = Math.atan2(-s3.y * this.m_sinr, s3.x * this.m_cosr), e2 = t3 + Math.PI, i2 = Math.atan2(s3.y * this.m_cosr, s3.x * this.m_sinr), r = i2 + Math.PI;
      n4[0] = cu(this, t3), n4[1] = cu(this, e2), n4[2] = cu(this, i2), n4[3] = cu(this, r);
    }
    {
      const t3 = this.m_cosr + this.m_sinr, e2 = this.m_cosr - this.m_sinr, i2 = Math.atan2(-s3.y * t3, s3.x * e2), r = i2 + Math.PI, o = Math.atan2(s3.y * e2, s3.x * t3), a2 = o + Math.PI;
      n4[4] = cu(this, i2), n4[5] = cu(this, r), n4[6] = cu(this, o), n4[7] = cu(this, a2);
    }
    const i = mi.getNAN();
    for (let r = 0; r < 8; r++) {
      const s4 = n4[r];
      t2.containsExclusiveCoordinate(s4) && (this.queryCoord2D(s4, i), e.mergeNe(i));
    }
  }
  setSegmentFromCoordsForStitcher(t2, e) {
    Cu(this, t2, e);
  }
  writeInBufferStream(t2, e) {
    const s3 = new Float64Array(10);
    return s3[0] = this.m_bits, s3[1] = this.m_semiMajorAxis, s3[2] = this.m_minorMajorRatio, s3[3] = this.m_rotation, s3[4] = this.m_center.x, s3[5] = this.m_center.y, s3[6] = this.m_sweepAngle, s3[7] = this.m_startAngle, s3[8] = this.m_interior.x, s3[9] = this.m_interior.y, t2.writeRangeFromArray(e, s3.length, s3, true, 1), e + s3.length;
  }
  readFromBufferStream(t2, e) {
    const s3 = new Float64Array(10);
    t2.queryRange(e, s3.length, s3, true, 1), this.m_bits = s3[0], this.m_semiMajorAxis = s3[1], this.m_minorMajorRatio = s3[2], this.m_rotation = s3[3], this.m_center.x = s3[4], this.m_center.y = s3[5], this.m_sweepAngle = s3[6], this.m_startAngle = s3[7], this.m_interior.x = s3[8], this.m_interior.y = s3[9], this.m_cosr = Math.cos(this.m_rotation), this.m_sinr = Math.sin(this.m_rotation), this.m_cachedValues = null;
  }
  snapControlPoints(t2) {
    return false;
  }
  needsSnapControlPoints(t2) {
    return false;
  }
  calculateSpecialPointsForCracking(t2, e) {
    return b("should not1; be called"), 0;
  }
  ensureXYMonotone() {
    if (Eu(this)) return false;
    if (this.getStartXY().equals(this.getEndXY())) return Su(this, this.getStartXY(), this.getEndXY(), this.projectionBehavior()), true;
    const t2 = Ot(mi, 3);
    let e = ku(this, t2);
    if (Ua(t2)) {
      let s3 = false;
      if (0 === this.projectionBehavior()) {
        const n4 = new n3();
        n4.setCoords({ pt: t2[0] }), n4.mergeNe(t2[2]);
        const i = new mi();
        i.setSub(t2[2], t2[0]), i.leftPerpendicularThis(), i.normalize(), i.scale(mi.distance(t2[2], t2[0]));
        const r = mi.lerp(t2[2], t2[0], 0.5), o = r.sub(i), a2 = r.add(i);
        n4.clipLine(o, a2);
        const h2 = mi.getClosestCoordinate(o, a2, t2[1], false);
        t2[1] = mi.lerp(o, a2, h2);
        const u = t2[2].sub(t2[1]), m = t2[0].sub(t2[1]), l2 = u.crossProduct(m), c = u.dotProduct(m);
        e = Js() - Math.abs(0.5 * Math.atan2(l2, c)), s3 = true;
      }
      return Gu(t2, e * e, null, s3, this), true;
    }
    return false;
  }
  setCoordsForIntersector(t2, e, s3) {
    xu(this, t2, e, s3);
  }
  getInteriorPoint() {
    return this.m_interior.clone();
  }
  copyToImpl(t2) {
    const e = t2;
    e.m_center.assign(this.m_center), e.m_semiMajorAxis = this.m_semiMajorAxis, e.m_minorMajorRatio = this.m_minorMajorRatio, e.m_interior.assign(this.m_interior), e.m_rotation = this.m_rotation, e.m_cosr = this.m_cosr, e.m_sinr = this.m_sinr, e.m_sweepAngle = this.m_sweepAngle, e.m_startAngle = this.m_startAngle, e.m_bits = this.m_bits, Mu(e, Pu(this));
  }
  reverseImpl() {
    Xu(this, !qu(this)), lu(this), (0 !== this.projectionBehavior() || this.getStartXY().equals(this.getEndXY())) && Uu(this);
  }
  equalsImpl(t2) {
    const e = t2;
    if (this.m_bits !== e.m_bits) return false;
    if (this.m_semiMajorAxis !== e.m_semiMajorAxis) return false;
    if (this.m_minorMajorRatio !== e.m_minorMajorRatio) return false;
    if (!(this.m_center.isEqualPoint2D(e.m_center) || this.m_center.isNAN() && e.m_center.isNAN())) return false;
    if (this.m_rotation !== e.m_rotation) return false;
    if (!this.m_interior.equals(e.m_interior)) return false;
    const s3 = e.m_sweepAngle;
    if (this.m_sweepAngle !== s3) return false;
    const n4 = e.m_startAngle;
    return this.m_startAngle === n4;
  }
  equalsImplTol(t2, e) {
    const s3 = t2;
    if (this.m_bits !== s3.m_bits) return false;
    if (this.m_center.isNAN() && s3.m_center.isNAN()) return true;
    if (this.m_center.isNAN() !== s3.m_center.isNAN()) return false;
    if (!this.getSemiAxes().isEqualPoint2D(s3.getSemiAxes(), e)) return false;
    if (!this.m_center.isEqualPoint2D(s3.m_center, e)) return false;
    const n4 = Math.abs(Th(Ah(Ih(this.m_rotation - s3.m_rotation)))), i = Math.abs(Hs() - n4), r = Math.min(n4, i);
    if (this.m_semiMajorAxis * Math.abs(r) > e) return false;
    const o = this.getCoord2D(0.5), a2 = s3.getCoord2D(0.5);
    return !!o.isEqualPoint2D(a2, e);
  }
  swapImpl(t2) {
    const e = t2;
    this.m_center = Pt(e.m_center, e.m_center = this.m_center), this.m_semiMajorAxis = Pt(e.m_semiMajorAxis, e.m_semiMajorAxis = this.m_semiMajorAxis), this.m_minorMajorRatio = Pt(e.m_minorMajorRatio, e.m_minorMajorRatio = this.m_minorMajorRatio), this.m_interior = Pt(e.m_interior, e.m_interior = this.m_interior), this.m_rotation = Pt(e.m_rotation, e.m_rotation = this.m_rotation), this.m_cosr = Pt(e.m_cosr, e.m_cosr = this.m_cosr), this.m_sinr = Pt(e.m_sinr, e.m_sinr = this.m_sinr), this.m_sweepAngle = Pt(e.m_sweepAngle, e.m_sweepAngle = this.m_sweepAngle), this.m_startAngle = Pt(e.m_startAngle, e.m_startAngle = this.m_startAngle), this.m_bits = Pt(e.m_bits, e.m_bits = this.m_bits), Nu(this, e);
  }
  afterCompletedModification() {
    zu(this), Yu(this);
  }
  intersect(t2, e, s3, n4, i) {
    return mm(false, this, t2, e, s3, n4, i);
  }
  intersectPoint(t2, e, s3) {
    if (e.length < 2 && A(""), Eu(this)) {
      return new fm({ start: this.getStartXY(), end: this.getEndXY() }).intersectPoint(t2, e, s3);
    }
    {
      const e2 = mi.distance(t2, this.m_center);
      if (e2 > this.m_semiMajorAxis + s3 || e2 < this.getSemiMinorAxis() - s3) return 0;
    }
    const i = this.getClosestCoordinate(t2, false), r = mi.getNAN();
    return this.queryCoord2D(i, r), mi.distance(r, t2) <= s3 ? Vs(i, 0, 1) && (this.queryCoord2D(0 === i ? 1 : 0, r), mi.distance(r, t2) <= s3) ? (e && (e[0] = 0, e[1] = 1), 2) : (e && (e[0] = i), 1) : 0;
  }
  isIntersecting(t2, e, s3) {
    return 0 !== om(false, this, t2, e, s3);
  }
  endPointModified() {
    this.m_bits |= 8, Yu(this);
  }
  clearEndPointModified() {
    zu(this);
  }
};
function Vh(t2, e, s3, n4) {
  const i = [];
  return Rh(e, i), zh(t2, i, e, s3);
}
function Rh(t2, e) {
  e.length = t2;
  for (let s3 = 0; s3 < e.length; ++s3) e[s3] = s3;
  t2 > 3 && fe(t2, e);
}
function zh(t2, e, s3, n4, i) {
  let r = 0;
  const o = [0, 0, 0];
  let a2 = 0;
  const h2 = 3;
  let u = 0;
  for (let m = 0; m < h2; ++m) {
    let i2 = false;
    for (; u < s3; ) {
      const s4 = t2.at(e[u]);
      let l2 = 1;
      if (3 === r ? l2 = mi.inCircleRobust(t2.at(n4[0]), t2.at(n4[1]), t2.at(n4[2]), s4) : 2 === r ? l2 = mi.inCircleRobust3Point(t2.at(n4[0]), t2.at(n4[1]), s4) : 1 === r && s4.equals(t2.at(n4[0])) && (l2 = 0), l2 <= 0) {
        if (l2 < 0 && m + 1 < h2) {
          e[a2] = Pt(e[u], e[u] = e[a2]);
          for (let t3 = 0; t3 < r; t3++) if (n4[t3] === e[u]) {
            o[t3] = u;
            break;
          }
          a2++;
        }
        u++;
        continue;
      }
      i2 = true;
      let c = 0;
      for (let t3 = 0; t3 < r; t3++) o[t3] > u && (n4[c] = n4[t3], o[c] = o[t3], c++);
      r = c, n4[r] = e[u], o[r] = u, r++, r < 3 ? u = a2 : (1 === mi.orientationRobust(t2.at(n4[0]), t2.at(n4[1]), t2.at(n4[2])) && (n4[2] = Pt(n4[0], n4[0] = n4[2]), o[2] = Pt(o[0], o[0] = o[2])), u++);
    }
    if (!i2) break;
    if (m + 1 < h2) {
      a2 = 0;
      let s4 = false;
      for (let t3 = 0; t3 < r; t3++) for (let e2 = t3 + 1; e2 < r; e2++) o[t3] > o[e2] && (o[e2] = Pt(o[t3], o[t3] = o[e2]), n4[e2] = Pt(n4[t3], n4[t3] = n4[e2]), s4 = true);
      for (let t3 = 0; t3 < r; t3++) e[o[t3]] = Pt(e[t3], e[t3] = e[o[t3]]), o[t3] = t3;
      s4 && 3 === r && 1 === mi.orientationRobust(t2.at(n4[0]), t2.at(n4[1]), t2.at(n4[2])) && (n4[2] = Pt(n4[0], n4[0] = n4[2]), o[2] = Pt(o[0], o[0] = o[2]));
    }
    u = r;
  }
  return r;
}
function Bh(t2, e, s3, n4, i, r) {
  return new Zh(0, 0, 0, null, false, ds()).densifyEx(t2, e, s3, n4, false, r);
}
function Gh(t2, e, n4, r, o, h2, u, m) {
  h2 && (h2.length = 0), u && (u.length = 0);
  const l2 = t2.getGeometryType();
  if (l2 === a.enumLine) return h2 && (h2.push(t2.getStartXY()), h2.push(mi.getNAN()), h2.push(mi.getNAN()), h2.push(t2.getEndXY())), u && (u.push(0), u.push(1)), 1;
  if (l2 === a.enumBezier) {
    if (!r) return h2 && (h2.push(t2.getStartXY()), h2.push(t2.getControlPoint1()), h2.push(t2.getControlPoint2()), h2.push(t2.getEndXY())), u && (u.push(0), u.push(1)), 1;
    const e2 = Yt(9, Number.NaN);
    let s3 = t2.getMonotonicPartParams(e2.length, e2);
    if (e2.length = s3, s3 = Hh(t2, n4, e2), 2 === s3 && o && (e2[1] = 0.5, e2.push(1), s3 = 3), u && u.splice(0, 0, ...e2.slice(0, s3)), h2) {
      const n5 = new Pm();
      for (let i = 1; i < s3; i++) {
        const s4 = e2[i - 1], r2 = e2[i];
        t2.queryCut(s4, r2, n5, true);
        const o2 = n5.get();
        co(o2), 1 === i && h2.push(o2.getStartXY()), h2.push(o2.getControlPoint1()), h2.push(o2.getControlPoint2()), h2.push(o2.getEndXY());
      }
    }
    return s3 - 1;
  }
  if (l2 === a.enumEllipticArc) {
    const i = t2;
    if (i.isDegenerateToLine() || i.isDegenerate(0)) return h2 && (h2.push(t2.getStartXY()), h2.push(mi.getNAN()), h2.push(mi.getNAN()), h2.push(t2.getEndXY())), u && (u.push(0), u.push(1)), 1;
    if (r && (o || !i.isMonotoneQuickAndDirty())) {
      const a2 = Yt(6, Number.NaN);
      let m2 = i.getMonotonicPartParams(a2.length, a2);
      a2.length = m2, m2 = Hh(t2, n4, a2), 2 === m2 && o && (a2[1] = 0.5, a2.push(1), m2 = 3);
      let l3 = 0;
      if (m2 > 2) {
        const t3 = new Pm(), o2 = u || [];
        let c = 0;
        for (let g2 = 1; g2 < m2; g2++) {
          const d = a2[c], _ = a2[g2];
          if (i.queryCut(d, _, t3, true), t3.get().isDegenerate(0)) continue;
          const p2 = o2.length, f2 = Jh(1 === g2, t3.get(), e, n4, r, h2, u);
          n(f2 > 0), l3 += f2;
          const P4 = g2 === m2 - 1, y2 = a2[c], x4 = t3.get().getSweepAngle() / i.getSweepAngle();
          for (let t4 = p2, e2 = o2.length; t4 < e2; t4++) if (o2[t4] = !P4 || t4 + 1 < e2 ? y2 + o2[t4] * x4 : 1, h2) {
            const e3 = 3 * t4, s3 = i.getCoord2D(o2[t4]);
            if (h2[e3].setCoordsPoint2D(s3), e3 > 0) {
              go(h2.slice(e3 - 3));
            }
          }
          c = g2;
        }
        return l3;
      }
    }
    return Jh(true, i, e, n4, r, h2, u);
  }
  if (l2 === a.enumRationalBezier2) {
    const s3 = t2;
    if (r && (o || !s3.isMonotoneQuickAndDirty())) {
      const i = Yt(6, Number.NaN);
      let r2 = s3.getMonotonicPartParams(i.length, i);
      i.length = r2, r2 = Hh(t2, n4, i), 2 === r2 && o && (i[1] = 0.5, i.push(1), r2 = 3);
      let a2 = 0;
      if (r2 > 2) {
        const t3 = new Pm(), o2 = u || [];
        for (let m2 = 1; m2 < r2; m2++) {
          const l3 = i[m2 - 1], c = i[m2];
          s3.queryCut(l3, c, t3, true);
          const g2 = o2.length;
          a2 += $h(1 === m2, t3.get(), e, n4, false, h2, u);
          const d = m2 === r2 - 1, _ = i[m2 - 1];
          for (let t4 = g2, e2 = o2.length; t4 < e2; t4++) if (o2[t4] = !d || t4 + 1 < e2 ? _ + o2[t4] : 1, h2) {
            const e3 = 3 * t4, n5 = s3.getCoord2D(o2[t4]);
            if (h2[e3].setCoordsPoint2D(n5), e3 > 0) {
              Ti(h2.slice(e3 - 3));
            }
          }
        }
        return a2;
      }
    }
    return $h(true, s3, e, n4, r, h2, u);
  }
  if (l2 === a.enumBezier2) {
    const s3 = t2, i = Ot(mi, 3);
    s3.queryControlPoints(i);
    const a2 = new ra();
    a2.constructFromQuadratic(i);
    const m2 = Gh(a2, e, n4, r, o, h2, u);
    if (null != h2 && null != u) {
      const t3 = 3;
      for (let e2 = 1, n5 = 0; e2 < m2; ++e2, n5 += t3) {
        const i2 = new mi();
        s3.queryCoord2D(u[e2], i2);
        const o2 = h2[n5 + t3];
        if (!i2.equals(o2) && (h2[n5 + t3].setCoordsPoint2D(i2), r)) {
          go(h2.slice(n5, n5 + 4));
        }
      }
    }
    return m2;
  }
  z("");
}
function jh(t2, e, n4, r, o, a2, h2, u, m) {
  const l2 = t2.getGeometryType();
  if (a2 && (a2.length = 0, h2.length = 0), u && (u.length = 0), l2 === a.enumEllipticArc) {
    const e2 = t2;
    if (e2.isDegenerateToLine() || e2.isDegenerate(0)) return a2 && (a2.push(t2.getStartXY()), a2.push(mi.getNAN()), a2.push(t2.getEndXY()), h2.push(Number.NaN), h2.push(Number.NaN), h2.push(Number.NaN)), u && (u.push(0), u.push(1)), 1;
  }
  const c = Yt(9, Number.NaN);
  let g2;
  if (o) g2 = t2.getMonotonicPartParams(c.length, c), c.length = g2, g2 = Hh(t2, n4, c);
  else {
    if (g2 = 2, c[0] = 0, c[1] = 1, l2 === qh.type) {
      const e2 = t2.getSweepAngle();
      if (e2 > 0.9 * Math.PI) {
        const t3 = 2 * Math.PI / 3;
        Math.min(3, Math.trunc(e2 / t3 + 0.5)) > 2 ? (c[0] = 0, c[1] = 1 / 3, c[2] = 2 / 3, c[3] = 1, g2 = 4) : (c[0] = 0, c[1] = 0.5, c[2] = 1, g2 = 3);
      }
    } else n(l2 === Dn.type);
    c.length = g2;
  }
  if (2 === g2 && r && (c[1] = 0.5, c.push(1), g2 = 3), a2) {
    const e2 = new Pm();
    let s3 = 1;
    for (; s3 < g2; ) {
      const n5 = c[s3 - 1], r2 = c[s3];
      t2.queryCut(n5, r2, e2, true);
      const u2 = Ot(mi, 3), m2 = [1, 1, 1];
      if (l2 === a.enumEllipticArc) {
        const t3 = e2.get();
        if (Math.abs(t3.getSweepAngle()) > 0.9 * Math.PI) {
          const t4 = (r2 - n5) / 3;
          c.splice(s3, 0, n5 + t4), c.splice(s3 + 1, 0, n5 + 2 * t4), g2 += 2;
          continue;
        }
        m2[1] = ku(t3, u2);
      } else {
        const t3 = e2.get();
        t3.queryControlPoints(u2), t3.queryWeights(m2);
      }
      o && Ua(u2), 1 === s3 && (a2.push(u2[0].clone()), h2.push(m2[0])), a2.push(u2[1].clone()), a2.push(u2[2].clone()), h2.push(m2[1]), h2.push(m2[2]), s3++;
    }
  }
  return u && (u.length = g2, Dt(u, c, 0, 0, g2)), g2 - 1;
}
qh.type = a.enumEllipticArc;
var Zh = class _Zh {
  static constructDefault(t2) {
    return new _Zh(0, 0, 0, t2, false, ds());
  }
  constructor(t2, e, s3, n4, i, r) {
    this.m_segmentBuffer = null, this.m_dummyPoint = new se(), this.m_progressCounter = 0, this.m_progressTracker = n4, this.m_bSetDensifyFlag = i, this.m_maxLength = t2, this.m_maxDeviation = e, this.m_maxAngle = s3 > Js() ? Js() : s3, this.m_cosMaxAngle = Math.cos(this.m_maxAngle), this.m_bOnlyCurveDensify = this.m_maxAngle > 0 || this.m_maxDeviation > 0, this.m_maxSegmentsPerCurve = r, D(this.m_maxSegmentsPerCurve > 0, "this.m_maxSegmentsPerCurve > 0"), this.m_minStep = 1 / this.m_maxSegmentsPerCurve;
  }
  densify(t2) {
    return this.densifyGeom(t2);
  }
  densifySegment(t2, e) {
    this.densifySegmentEx(t2, null, true, false, e);
  }
  densifyEx(t2, e, s3, n4, i, r) {
    return this.m_maxLength = e, this.m_maxDeviation = s3, this.m_maxAngle = n4 > Js() ? Js() : n4, this.m_cosMaxAngle = Math.cos(this.m_maxAngle), this.m_bOnlyCurveDensify = this.m_maxAngle > 0 || this.m_maxDeviation > 0, this.m_bSetDensifyFlag = i, this.m_maxSegmentsPerCurve = r, D(this.m_maxSegmentsPerCurve > 0, "this.m_maxSegmentsPerCurve > 0"), this.m_minStep = 1 / this.m_maxSegmentsPerCurve, this.densifyGeom(t2);
  }
  densifyGeom(t2) {
    if (t2.isEmpty() || t2.getDimension() < 1) return t2;
    const e = t2.getGeometryType();
    return g(e) ? t2 : h(e) ? this.densifyMultiPath(t2) : f(e) ? this.densifySegmentImpl(t2) : e === a.enumEnvelope ? this.densifyEnvelope(t2) : void b("");
  }
  densifySegmentEx(t2, e, s3, n4, r) {
    const o = t2.getGeometryType();
    if (!(this.m_maxLength > 0 || this.m_bOnlyCurveDensify && o !== a.enumLine) && (!n4 || s3)) return void (e ? o === a.enumLine ? e.addSegment(t2, s3) : (s3 && (t2.queryStart(this.m_dummyPoint), e.startPathPoint(this.m_dummyPoint)), t2.queryEnd(this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint)) : (s3 && r.push(0), r.push(1)));
    if (o === a.enumBezier) return void this.densifyCubicBezier(t2, e, s3, n4, r);
    if (o === a.enumRationalBezier2) return void this.densifyRationalBezier2(t2, e, s3, n4, r);
    if (o === a.enumBezier2) return void this.densifyBezier2(t2, e, s3, n4, r);
    if (o === a.enumEllipticArc && !t2.isLine() && t2.getMinorMajorRatio() < 0.25) return void this.densifyEllipticArc(t2, e, s3, n4, r);
    let a2 = 1;
    this.m_maxLength > 0 && (a2 = this.calculateLengthSubdivisionStep(t2, this.m_maxLength)), this.m_maxDeviation > 0 && (a2 = Math.min(a2, this.calculateDeviationSubdivisionStep(t2, this.m_maxDeviation))), this.m_maxAngle > 0 && (a2 = Math.min(a2, this.calculateAngularSubdivisionStep(t2, this.m_maxAngle))), this.densifySegmentByLength(t2, a2, e, s3, n4, r);
  }
  densifyMultiPath(t2) {
    if (!t2.hasNonLinearSegments()) {
      if (1 === t2.getDescription().getAttributeCount()) return this.densifyMultiPathLinear(t2);
      if (!(this.m_maxLength > 0)) return t2;
    }
    const e = t2.createInstance();
    if (e.getGeometryType() === a.enumPolygon) {
      e.setFillRule(t2.getFillRule());
    }
    e.reserve(t2.getPointCount());
    const s3 = t2.getImpl().querySegmentIterator();
    for (; s3.nextPath(); ) {
      let t3 = true;
      for (; s3.hasNextSegment(); ) {
        const n4 = s3.nextSegment(), i = s3.isClosingSegment();
        this.densifySegmentEx(n4, e, t3, i, null), i && e.closePathWithLine(), t3 = false;
      }
    }
    return e;
  }
  densifySegmentImpl(t2) {
    const e = new Qs2({ vd: t2.getDescription() }), s3 = [0];
    return this.densifySegmentEx(t2, e, true, false, s3), e;
  }
  densifyEnvelope(t2) {
    const e = new mr({ vd: t2.getDescription() });
    e.addEnvelope(t2, false);
    const s3 = n3.constructEmpty();
    t2.queryEnvelope(s3);
    const n4 = s3.width(), i = s3.height();
    return !(this.m_maxLength > 0) || n4 <= this.m_maxLength && i <= this.m_maxLength ? e : this.densifyMultiPath(e);
  }
  densifyMultiPathLinear(t2) {
    if (!(this.m_maxLength > 0)) return t2;
    const e = t2.createInstance();
    if (e.getGeometryType() === a.enumPolygon) {
      e.setFillRule(t2.getFillRule());
    }
    e.reserve(t2.getPointCount());
    const s3 = e.getImpl(), n4 = t2.getImpl(), r = n4.getAttributeStreamRef(0), o = new fm();
    for (let i = 0, a2 = n4.getPathCount(); i < a2; i++) {
      const t3 = n4.isClosedPath(i);
      if (0 === n4.getPathSize(i)) continue;
      const a3 = n4.getPathStart(i), h2 = r.readPoint2D(2 * a3), u = h2.clone();
      s3.startPath(h2);
      for (let m = a3 + 1, l2 = n4.getPathEnd(i); m < l2; m++) {
        const t4 = r.readPoint2D(2 * m), n5 = mi.distance(u, t4);
        if (n5 > this.m_maxLength) {
          let e2 = Math.ceil(n5 / this.m_maxLength);
          e2 > ds() && (e2 = ds());
          const i2 = 1 / e2;
          let r2, a4, h3;
          u.compare(t4) < 0 ? (o.setStartXY(u), o.setEndXY(t4), r2 = 0, a4 = 1) : (o.setStartXY(t4), o.setEndXY(u), r2 = e2 - 2, a4 = -1);
          for (let t5 = 0, n6 = e2 - 1; t5 < n6; t5++, r2 += a4) {
            this.progress_(), h3 = i2 * (r2 + 1);
            const t6 = new mi();
            o.queryCoord2D(h3, t6), s3.lineTo(t6), this.m_bSetDensifyFlag && s3.setAttributeNoCurves(10, s3.getPointCount() - 1, 0, 1);
          }
        } else this.progress_();
        e.lineTo(t4), u.assign(t4);
      }
      if (t3) {
        const t4 = mi.distance(u, h2);
        if (t4 > this.m_maxLength) {
          const e2 = h2;
          let n5 = Math.ceil(t4 / this.m_maxLength);
          n5 > ds() && (n5 = ds());
          const i2 = 1 / n5;
          let r2, a4;
          u.compare(e2) < 0 ? (o.setStartXY(u), o.setEndXY(e2), r2 = 0, a4 = 1) : (o.setStartXY(e2), o.setEndXY(u), r2 = n5 - 2, a4 = -1);
          const m = new mi(0, 0);
          let l2;
          for (let t5 = 0, h3 = n5 - 1; t5 < h3; t5++, r2 += a4) this.progress_(), l2 = i2 * (r2 + 1), o.queryCoord2D(l2, m), s3.lineTo(m), this.m_bSetDensifyFlag && s3.setAttributeNoCurves(10, s3.getPointCount() - 1, 0, 1);
        }
        s3.closePathWithLine();
      }
    }
    return e;
  }
  densifySegmentByLength(t2, e, n4, r, o, h2) {
    n(t2.getGeometryType() !== a.enumBezier);
    let u = t2.getStartXY().compare(t2.getEndXY());
    if (0 === u && e < 1) {
      t2.getGeometryType() === a.enumEllipticArc ? u = t2.getSweepAngle() < 0 ? 1 : -1 : z("densify segment by length");
    }
    let m = 0;
    if (r && (n4 ? (t2.queryStart(this.m_dummyPoint), n4.startPathPoint(this.m_dummyPoint)) : h2.push(0), ++m), e * this.m_maxSegmentsPerCurve < 1 && (e = 1 / this.m_maxSegmentsPerCurve), e < 1) {
      this.m_segmentBuffer || (this.m_segmentBuffer = new Pm());
      let s3 = Math.ceil(1 / e);
      s3 > ds() && (s3 = ds()), e = 1 / s3, this.m_segmentBuffer.create(t2.getGeometryType());
      let i, r2, o2, a2 = t2;
      u < 0 ? (i = 0, r2 = 1) : (t2.copyTo(this.m_segmentBuffer.get()), this.m_segmentBuffer.get().reverse(), i = s3 - 2, r2 = -1, a2 = this.m_segmentBuffer.get());
      const l2 = s3 - 1;
      for (let t3 = 0; t3 < l2; t3++, i += r2) o2 = e * (i + 1), n4 ? (a2.queryCoord(o2, this.m_dummyPoint), n4.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== o2 && 0 !== o2 && n4.setAttribute(10, n4.getPointCount() - 1, 0, 1)) : h2.push(u > 0 ? 1 - o2 : o2), this.progress_();
      o2 = 1, m += l2;
    }
    (!o || o && r && m < 2) && (n4 ? (t2.queryEnd(this.m_dummyPoint), n4.lineToPoint(this.m_dummyPoint)) : h2.push(1));
  }
  densifyCubicBezier(t2, e, s3, n4, i) {
    const r = new ra();
    let o = t2;
    const a2 = t2.calculateUpperLength2D();
    let h2 = t2.getStartXY().compare(t2.getEndXY());
    if (0 === h2 && a2 > 0) {
      const e2 = Ot(mi, 4);
      t2.queryControlPoints(e2), h2 = e2[1].compare(e2[2]), 0 === h2 && (h2 = e2[1].compare(e2[0]));
    }
    h2 > 0 && (t2.copyTo(r), r.reverse(), o = r);
    let u = 0;
    s3 && (e ? (t2.queryStart(this.m_dummyPoint), e.startPathPoint(this.m_dummyPoint)) : i.push(0), ++u);
    const m = [], l2 = [], c = Math.trunc(Math.log2(this.m_maxSegmentsPerCurve));
    let g2 = true, d = 0;
    if (h2 > 0) for (m.push([o.getStartXY(), o.getControlPoint1(), o.getControlPoint2(), o.getEndXY(), new mi(0, 1)]), l2.push(0); m.length; ) {
      this.progress_();
      const t3 = m.at(-1), r2 = l2.at(-1), a3 = t3[4].x, h3 = t3[4].y;
      if (r2 < c && this.bezierNeedsSplit(t3)) {
        g2 && (d = o.findMinDeriv(), g2 = false);
        let e2 = 0.5 * (a3 + h3);
        Math.abs(d - e2) < 0.4 * (h3 - a3) && (e2 = d);
        const s4 = (e2 - a3) / (h3 - a3), n5 = t3[0].mul(1 - s4).add(t3[1].mul(s4)), i2 = t3[1].mul(1 - s4).add(t3[2].mul(s4)), u2 = t3[2].mul(1 - s4).add(t3[3].mul(s4)), c2 = n5.mul(1 - s4).add(i2.mul(s4)), _ = i2.mul(1 - s4).add(u2.mul(s4)), p2 = c2.mul(1 - s4).add(_.mul(s4)), f2 = t3[3];
        t3[1] = n5, t3[2] = c2, t3[3] = p2, t3[4].setCoords(a3, e2);
        const P4 = [p2, _, u2, f2, new mi(e2, h3)];
        m.push(P4), l2[l2.length - 1] = r2 + 1, l2.push(r2 + 1);
        continue;
      }
      m.pop(), l2.pop(), (m.length > 0 || !n4 || n4 && s3 && u < 2) && (e ? (o.queryCoord(a3, this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== a3 && 0 !== a3 && e.setAttribute(10, e.getPointCount() - 1, 0, 1)) : i.push(1 - a3), ++u);
    }
    else for (m.push([o.getStartXY(), o.getControlPoint1(), o.getControlPoint2(), o.getEndXY(), new mi(0, 1)]), l2.push(0); m.length; ) {
      this.progress_();
      const t3 = m.at(-1), r2 = l2.at(-1), a3 = t3[4].x, h3 = t3[4].y;
      if (r2 < c && this.bezierNeedsSplit(t3)) {
        g2 && (d = o.findMinDeriv(), g2 = false);
        let e2 = 0.5 * (a3 + h3);
        Math.abs(d - e2) < 0.4 * (h3 - a3) && (e2 = d);
        const s4 = (e2 - a3) / (h3 - a3), n5 = t3[0].mul(1 - s4).add(t3[1].mul(s4)), i2 = t3[1].mul(1 - s4).add(t3[2].mul(s4)), u2 = t3[2].mul(1 - s4).add(t3[3].mul(s4)), c2 = n5.mul(1 - s4).add(i2.mul(s4)), _ = i2.mul(1 - s4).add(u2.mul(s4)), p2 = c2.mul(1 - s4).add(_.mul(s4)), f2 = t3[0];
        t3[0] = p2, t3[1] = _, t3[2] = u2, t3[4].setCoords(e2, h3);
        const P4 = [f2, n5, c2, p2, new mi(a3, e2)];
        m.push(P4), l2[l2.length - 1] = r2 + 1, l2.push(r2 + 1);
        continue;
      }
      m.pop(), l2.pop(), (m.length > 0 || !n4 || n4 && s3 && u < 2) && (e ? (o.queryCoord(h3, this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== h3 && 0 !== h3 && e.setAttribute(10, e.getPointCount() - 1, 0, 1)) : i.push(h3), ++u);
    }
  }
  densifyRationalBezier2(t2, e, s3, n4, i) {
    const r = new Dn();
    let o = t2;
    const a2 = t2.calculateUpperLength2D();
    let h2 = t2.getStartXY().compare(t2.getEndXY());
    0 === h2 && a2 > 0 && (h2 = 0), h2 > 0 && (t2.copyTo(r), r.reverse(), o = r);
    let u = 0;
    s3 && (e ? (t2.queryStart(this.m_dummyPoint), e.startPathPoint(this.m_dummyPoint)) : i.push(0), ++u);
    const m = Math.trunc(Math.log2(this.m_maxSegmentsPerCurve)), l2 = new Dn(), c = [], g2 = [];
    for (c.push(new x2(0, 1)), g2.push(0); c.length; ) {
      this.progress_();
      const t3 = c.at(-1).clone(), r2 = g2.at(-1);
      if (r2 < m && this.rationalBezier2NeedsSplit(o, l2, t3.vmin, t3.vmax)) {
        const e2 = t3.getCenter();
        h2 > 0 ? (c.at(-1).vmax = e2, c.push(new x2(e2, t3.vmax))) : (c.at(-1).vmin = e2, c.push(new x2(t3.vmin, e2))), g2[g2.length - 1] = r2 + 1, g2.push(r2 + 1);
        continue;
      }
      if (c.pop(), g2.pop(), c.length > 0 || !n4 || n4 && s3 && u < 2) {
        const s4 = h2 > 0 ? t3.vmin : t3.vmax;
        e ? (o.queryCoord(s4, this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== s4 && 0 !== s4 && e.setAttribute(10, e.getPointCount() - 1, 0, 1)) : i.push(h2 > 0 ? 1 - s4 : s4), ++u;
      }
    }
  }
  densifyBezier2(t2, e, s3, n4, i) {
    const r = new An();
    let o = t2;
    const a2 = t2.calculateUpperLength2D();
    let h2 = t2.getStartXY().compare(t2.getEndXY());
    0 === h2 && a2 > 0 && (h2 = 0), h2 > 0 && (t2.copyTo(r), r.reverse(), o = r);
    let u = 0;
    s3 && (e ? (t2.queryStart(this.m_dummyPoint), e.startPathPoint(this.m_dummyPoint)) : i.push(0), ++u);
    const m = Math.ceil(Math.log2(this.m_maxSegmentsPerCurve)), l2 = new An(), c = [], g2 = [];
    for (c.push(new x2(0, 1)), g2.push(0); c.length; ) {
      this.progress_();
      const t3 = c.at(-1).clone(), r2 = g2.at(-1);
      if (r2 < m && this.bezier2NeedsSplit(o, l2, t3.vmin, t3.vmax)) {
        const e2 = t3.getCenter();
        h2 > 0 ? (c.at(-1).vmax = e2, c.push(new x2(e2, t3.vmax))) : (c.at(-1).vmin = e2, c.push(new x2(t3.vmin, e2))), g2[g2.length - 1] = r2 + 1, g2.push(r2 + 1);
        continue;
      }
      if (c.pop(), g2.pop(), c.length > 0 || !n4 || n4 && s3 && u < 2) {
        const s4 = h2 > 0 ? t3.vmin : t3.vmax;
        e ? (o.queryCoord(s4, this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== s4 && 0 !== s4 && e.setAttribute(10, e.getPointCount() - 1, 0, 1)) : i.push(h2 > 0 ? 1 - s4 : s4), ++u;
      }
    }
  }
  densifyEllipticArc(t2, e, s3, n4, i) {
    const r = new qh();
    let o = t2;
    const a2 = t2.calculateUpperLength2D();
    let h2 = t2.getStartXY().compare(t2.getEndXY());
    0 === h2 && a2 > 0 && (h2 = t2.isClockwise() ? 0 : 1), h2 > 0 && (t2.copyTo(r), r.reverse(), o = r);
    let u = 0;
    s3 && (e ? (t2.queryStart(this.m_dummyPoint), e.startPathPoint(this.m_dummyPoint)) : i.push(0), ++u);
    const m = Math.trunc(Math.log2(this.m_maxSegmentsPerCurve)), l2 = new qh(), c = [], g2 = [];
    for (c.push(new x2(0, 1)), g2.push(0); c.length; ) {
      this.progress_();
      const t3 = c.at(-1).clone(), r2 = g2.at(-1);
      if (r2 < m && this.ellipticArcNeedsSplit(o, l2, t3.vmin, t3.vmax)) {
        const e2 = t3.getCenter();
        h2 > 0 ? (c.at(-1).vmax = e2, c.push(new x2(e2, t3.vmax))) : (c.at(-1).vmin = e2, c.push(new x2(t3.vmin, e2))), g2[g2.length - 1] = r2 + 1, g2.push(r2 + 1);
        continue;
      }
      if (c.pop(), g2.pop(), c.length > 0 || !n4 || n4 && s3 && u < 2) {
        const s4 = h2 > 0 ? t3.vmin : t3.vmax;
        e ? (o.queryCoord(s4, this.m_dummyPoint), e.lineToPoint(this.m_dummyPoint), this.m_bSetDensifyFlag && 1 !== s4 && 0 !== s4 && e.setAttribute(10, e.getPointCount() - 1, 0, 1)) : i.push(h2 > 0 ? 1 - s4 : s4), ++u;
      }
    }
  }
  calculateLengthSubdivisionStep(t2, e) {
    const s3 = t2.calculateUpperLength2D();
    if (!t2.isCurve()) return s3 ? e / s3 : 1;
    if (t2.getGeometryType() === a.enumEllipticArc) {
      const n4 = t2;
      if (n4.isCircular() || n4.isDegenerate(0) || n4.isDegenerateToLine()) {
        let t3 = e / s3;
        return t3 < this.m_minStep && (t3 = this.m_minStep), t3;
      }
      return e / s3 * n4.getSemiAxes().y / n4.getSemiAxes().x;
    }
    t2.getGeometryType() === a.enumBezier && z(""), z("");
  }
  calculateDeviationSubdivisionStep(t2, e) {
    if (!t2.isCurve()) return 1;
    if (t2.getGeometryType() === a.enumEllipticArc) {
      const s3 = t2;
      if (s3.isDegenerate(0) || s3.isDegenerateToLine()) return 1;
      {
        const n4 = s3.getSemiMajorAxis(), i = 1 - e / n4;
        let r = Math.PI / 2;
        if (i > 0) {
          const t3 = 4 * Math.sqrt(e / n4 * 0.5);
          r = Math.min(Math.PI / 2, Math.abs(t3));
        }
        r = Math.max(r, 2 * Math.PI / this.m_maxSegmentsPerCurve);
        const o = r * n4;
        return this.calculateLengthSubdivisionStep(t2, o);
      }
    }
    z("");
  }
  calculateAngularSubdivisionStep(t2, e) {
    if (!t2.isCurve()) return 1;
    if (t2.getGeometryType() === a.enumEllipticArc) {
      const s3 = t2;
      return s3.isDegenerate(0) || s3.isDegenerateToLine() ? 1 : this.calculateLengthSubdivisionStep(t2, e * s3.getSemiMinorAxis());
    }
    z("");
  }
  rationalBezier2NeedsSplit(t2, e, s3, n4) {
    t2.cutBezierIgnoreAttributes(s3, n4, e);
    let i = false;
    if (this.m_maxLength > 0) {
      if (e.calculateUpperLength2D() > this.m_maxLength) return i = true, true;
    }
    const r = Ot(mi, 3);
    e.queryControlPoints(r);
    const o = [0, 0, 0];
    return e.queryWeights(o), !i && this.m_maxDeviation > 0 && (i = !_Zh.checkRationalBezier2MaxDeviation(r, o, this.m_maxDeviation)), !i && this.m_maxAngle > 0 && (i = !_Zh.checkRationalBezier2MaxAngle(r, o, this.m_cosMaxAngle)), i;
  }
  bezier2NeedsSplit(t2, e, s3, n4) {
    t2.cutBezierIgnoreAttributes(s3, n4, e);
    let i = false;
    if (this.m_maxLength > 0) {
      if (e.calculateUpperLength2D() > this.m_maxLength) return i = true, true;
    }
    const r = Ot(mi, 3);
    return e.queryControlPoints(r), !i && this.m_maxDeviation > 0 && (i = !_Zh.checkBezier2MaxDeviation(r, this.m_maxDeviation)), !i && this.m_maxAngle > 0 && (i = !_Zh.checkBezier2MaxAngle(r, this.m_cosMaxAngle)), i;
  }
  ellipticArcNeedsSplit(t2, e, s3, n4) {
    t2.cutArcIgnoreAttributes(s3, n4, e);
    let i = false;
    if (this.m_maxLength > 0) {
      if (e.calculateUpperLength2D() > this.m_maxLength) return i = true, true;
    }
    return !i && this.m_maxDeviation > 0 && (i = !_Zh.checkEllipticArcMaxDeviation(e, this.m_maxDeviation)), !i && this.m_maxAngle > 0 && (i = !_Zh.checkEllipticArcMaxAngle(e, this.m_cosMaxAngle)), i;
  }
  bezierNeedsSplit(t2) {
    let e = false;
    if (this.m_maxLength > 0) {
      if (mi.distance(t2[0], t2[1]) + mi.distance(t2[1], t2[2]) + mi.distance(t2[2], t2[3]) > this.m_maxLength) return e = true, true;
    }
    return !e && this.m_maxDeviation > 0 && (e = !_Zh.checkBezierMaxDeviation(t2, this.m_maxDeviation)), !e && this.m_maxAngle > 0 && (e = !_Zh.checkBezierMaxAngle(t2, this.m_cosMaxAngle)), e;
  }
  progress_() {
  }
  static checkBezierMaxDeviation(t2, e) {
    const s3 = t2[3].sub(t2[0]);
    if (s3.sqrLength() > 0) {
      const n4 = s3.clone();
      n4.leftPerpendicularThis(), n4.normalize();
      const i = n4.dotProduct(t2[0].sub(t2[1])), r = n4.dotProduct(t2[0].sub(t2[2]));
      if (Math.max(Math.abs(i), Math.abs(r)) <= e) {
        const e2 = new mi();
        yo(t2, 0.5, e2, false);
        const n5 = e2.sub(t2[0]).dotProduct(s3);
        return n5 >= 0 && n5 <= s3.sqrLength();
      }
      return false;
    }
    return Math.max(t2[0].sub(t2[1]).sqrLength(), t2[0].sub(t2[2]).sqrLength()) <= e * e;
  }
  static checkBezierMaxAngle(t2, e) {
    if (t2[0].equals(t2[3])) return !(!t2[0].equals(t2[1]) || !t2[1].equals(t2[2]));
    const s3 = t2[3].sub(t2[0]);
    s3.normalize();
    {
      const n4 = t2[1].sub(t2[0]), i = n4.dotProduct(s3);
      if (i < 0) return false;
      if (n4.length() * e > i) return false;
    }
    {
      const n4 = t2[2].sub(t2[0]), i = n4.dotProduct(s3);
      if (i < 0) return false;
      if (n4.length() * e > i) return false;
    }
    {
      const n4 = t2[2].sub(t2[1]), i = n4.dotProduct(s3);
      if (i < 0) return false;
      if (n4.length() * e > i) return false;
    }
    return true;
  }
  static checkRationalBezier2MaxDeviation(t2, e, s3) {
    if (0 === e[1]) return false;
    const n4 = t2[2].sub(t2[0]);
    if (n4.sqrLength() > 0) {
      const e2 = n4.clone();
      e2.leftPerpendicularThis(), e2.normalize();
      const i = e2.dotProduct(t2[0].sub(t2[1]));
      if (Math.abs(i) <= s3) {
        const e3 = t2[1].sub(t2[0]).dotProduct(n4);
        return e3 >= 0 && e3 <= n4.sqrLength();
      }
      return false;
    }
    return t2[0].sub(t2[1]).sqrLength() <= s3 * s3;
  }
  static checkRationalBezier2MaxAngle(t2, e, s3) {
    if (0 === e[1]) return false;
    if (t2[0].equals(t2[2])) return !!t2[0].equals(t2[1]);
    const n4 = t2[2].sub(t2[0]);
    n4.normalize();
    {
      const e2 = t2[1].sub(t2[0]), i = e2.dotProduct(n4);
      if (i < 0) return false;
      if (e2.length() * s3 > i) return false;
    }
    return true;
  }
  static checkBezier2MaxDeviation(t2, e) {
    const s3 = t2[2].sub(t2[0]);
    if (s3.sqrLength() > 0) {
      const n4 = s3.clone();
      n4.leftPerpendicularThis(), n4.normalize();
      const i = n4.dotProduct(t2[0].sub(t2[1]));
      if (Math.abs(i) <= e) {
        const e2 = t2[1].sub(t2[0]).dotProduct(s3);
        return e2 >= 0 && e2 <= s3.sqrLength();
      }
      return false;
    }
    return t2[0].sub(t2[1]).sqrLength() <= e * e;
  }
  static checkBezier2MaxAngle(t2, e) {
    if (t2[0].equals(t2[2])) return !!t2[0].equals(t2[1]);
    const s3 = t2[2].sub(t2[0]);
    s3.normalize();
    {
      const n4 = t2[1].sub(t2[0]), i = n4.dotProduct(s3);
      if (i < 0) return false;
      if (n4.length() * e > i) return false;
    }
    return true;
  }
  static checkEllipticArcMaxDeviation(t2, e) {
    if (Math.abs(t2.getSweepAngle()) < Math.PI) {
      const s4 = t2.getEndXY().sub(t2.getStartXY()), n5 = [0, 0];
      if (1 === em(t2, s4, n5)) {
        const s5 = t2.getCoord2D(n5[0]), i = mi.getClosestCoordinate(t2.getStartXY(), t2.getEndXY(), s5), r = new mi();
        Y(t2.getStartXY(), t2.getEndXY(), i, r);
        return mi.distance(s5, r) <= e;
      }
    }
    const s3 = t2.getCoord2D(0.5), n4 = new mi();
    Y(t2.getEndXY(), t2.getStartXY(), 0.5, n4);
    return mi.distance(s3, n4) <= e;
  }
  static checkEllipticArcMaxAngle(t2, e) {
    const s3 = t2.getTangent(0), n4 = t2.getTangent(1), i = s3.dotProduct(n4);
    return !(i < 0) && !(s3.length() * n4.length() * e > i);
  }
  static checkTypeForReplace(t2, e) {
    return t2.getGeometryType() === e && (e !== a.enumEllipticArc || t2.isCircular());
  }
};
function Hh(t2, e, s3) {
  const n4 = s3.length;
  if (e <= 0 || n4 <= 2) return n4;
  let i = 0;
  const r = Yt(n4 - 1, Number.NaN);
  for (let o = 1, a2 = n4; o < a2; o++) {
    const e2 = t2.tToLength(s3[o]);
    r[o - 1] = e2 - i, i = e2;
  }
  for (; r.length > 1; ) {
    const t3 = r.findIndex((t4) => t4 <= 2 * e);
    if (-1 === t3) break;
    let n5 = t3 + 1, i2 = t3 + 1;
    if (t3 > 0) {
      const e2 = t3 - 1;
      (i2 === r.length || r[e2] > r[i2]) && (i2 = e2, n5--);
    }
    r[i2] += r[t3], r.splice(t3, 1), s3.splice(n5, 1);
  }
  return s3.length;
}
function Jh(t2, e, s3, n4, i, r, o, a2) {
  const h2 = e.clone();
  h2.dropAllAttributes();
  const u = (t3, e2, s4, n5) => (e2 && (t3 && e2.push(n5.getStartXY()), e2.push(mi.getNAN()), e2.push(mi.getNAN()), e2.push(n5.getEndXY())), s4 && (t3 && s4.push(0), s4.push(1)), 1);
  if (h2.isDegenerateToLine() || h2.isDegenerate(0)) return u(t2, r, o, e);
  const m = h2.getStartXY(), l2 = h2.getEndXY(), c = h2.getSemiAxes(), g2 = new x3();
  if (h2.isCircular()) g2.setIdentity();
  else {
    const t3 = h2.getAxisXRotation();
    g2.setScaleCoords(1, h2.getMinorMajorRatio()), g2.rotateAngle(t3);
  }
  const d = h2.getCenter();
  g2.shift(d);
  const _ = g2.clone();
  _.invertThis(), h2.applyTransformation(_);
  const p2 = h2.getSweepAngle();
  if (0 === p2) return u(t2, r, o, e);
  const f2 = n3.constructEmpty();
  f2.setCoords({ center: d, width: 2 * c.x, height: 2 * c.x });
  const P4 = 0.05 * f2.calculateToleranceFromEnvelope(), y2 = Math.max(s3 / c.x, P4 / c.x);
  let x4 = 4 * Math.pow(y2 / 0.0741, 1 / 6);
  x4 = Math.min(x4, Math.PI / 2);
  const C3 = Mh(h2.getStartAngle());
  let v2 = p2 > 0 ? Math.floor(C3 / x4) : Math.ceil(C3 / x4);
  v2 *= x4;
  const b2 = p2 > 0 ? x4 : -x4;
  v2 + b2 === C3 && (v2 += b2);
  let S2 = 4 / 3 * Math.tan(Math.abs(x4) / 4);
  p2 > 0 && (S2 = -S2), o && t2 && o.push(0);
  const E = x4 / Math.abs(p2);
  let D3 = (v2 - C3) / p2;
  const w3 = m.clone(), A4 = new mi();
  h2.queryCoord2D(0, A4);
  const T3 = A4.clone(), I2 = 1 - 0.01 * E;
  let M2 = 0, Y3 = 0;
  for (; D3 < 1; ) {
    let s4;
    if (D3 += E, Y3 > 0 && D3 < I2) s4 = S2;
    else {
      D3 >= I2 && (D3 = 1);
      const t3 = (D3 - Y3) * p2;
      s4 = 4 / 3 * Math.tan(Math.abs(t3) / 4), p2 > 0 && (s4 = -s4);
    }
    h2.queryCoord2D(D3, A4);
    const a3 = new mi();
    g2.queryTransform(A4, a3);
    const u2 = e.getClosestCoordinate(a3, false);
    if (e.queryCoord2D(u2, a3), 1 !== D3 && (mi.distance(w3, a3) <= 2 * n4 || mi.distance(a3, l2) <= 2 * n4)) continue;
    w3.setCoordsPoint2D(a3);
    const c2 = Ot(mi, 4);
    c2[0].assign(T3), c2[3].assign(A4), c2[1].rightPerpendicularOther(T3), c2[1].scaleAddThis(s4, T3), c2[2].leftPerpendicularOther(A4), c2[2].scaleAddThis(s4, A4), g2.transformPoints2D(c2, 3, c2), c2[3].assign(a3), 0 === Y3 && c2[0].setCoordsPoint2D(m), 1 === D3 && c2[3].setCoordsPoint2D(l2), i && go(c2);
    let d2 = true;
    for (let t3 = 1; t3 < 4; t3++) if (!c2[t3].isEqualPoint2D(c2[0])) {
      d2 = false;
      break;
    }
    d2 || (o && o.push(u2), r && (0 === Y3 && t2 && r.push(c2[0].clone()), r.push(c2[1].clone()), r.push(c2[2].clone()), r.push(c2[3].clone())), M2++), Y3 = D3, T3.setCoordsPoint2D(A4);
  }
  return M2;
}
function $h(t2, e, s3, n4, i, r, o, a2) {
  e.clone().dropAllAttributes();
  const h2 = new n3();
  e.queryLooseEnvelope(h2);
  const u = 0.05 * h2.calculateToleranceFromEnvelope(), m = Math.max(s3, u);
  o && t2 && o.push(0);
  let l2 = 0;
  const c = Ot(mi, 3);
  e.queryControlPoints(c);
  const g2 = [0, 0, 0];
  e.queryWeights(g2);
  const d = [], _ = Yt(9, Number.NaN);
  let p2 = 0;
  i ? (p2 = e.getMonotonicPartParams(_.length, _), _.length = p2, p2 = Hh(e, n4, _)) : (_.length = 2, p2 = 2, _[0] = 0, _[1] = 1);
  let f2 = 0, P4 = t2;
  for (let y2 = 1; y2 < p2; y2++) {
    const t3 = _[y2];
    for (d.length = 0, d.push(t3), d.push(f2); d.length > 1; ) {
      const t4 = d.at(-1);
      d.pop();
      const e2 = d.at(-1), s4 = Ot(mi, 3), n5 = [0, 0, 0];
      Ja(c, g2, t4, e2, s4, n5);
      const i2 = Ot(mi, 4), a3 = Ka(s4, n5, i2), h3 = 16, u2 = d.length > h3;
      m >= a3 || u2 ? (o.push(e2), r && (P4 && (r.push(i2[0]), P4 = false), r.push(i2[1]), r.push(i2[2]), r.push(i2[3])), l2++) : (d.push(0.5 * (t4 + e2)), d.push(t4));
    }
    f2 = t3;
  }
  return l2;
}
function su() {
  return { e2: 0, completeE: 0 };
}
var nu = class {
  constructor(t2, e) {
    this.m_arc = t2, this.m_sqrChordLength = e;
  }
  getMaxDerivative() {
    return 1;
  }
  getValue(t2, e) {
    return 0 === t2 ? mi.sqrDistance(this.m_arc.getCoord2D(e), this.m_arc.getCoord2D(1 - e)) - this.m_sqrChordLength : 0;
  }
  getError(t2) {
    return 0;
  }
};
function iu(t2, e, s3) {
  if (Eu(t2)) {
    return void vs2(new fm({ start: t2.getStartXY(), end: t2.getEndXY() }), e, s3);
  }
  if (0 === e.value()) s3.set(t2.getStartXY());
  else if (1 === e.value()) s3.set(t2.getEndXY());
  else {
    const n4 = new p();
    du(t2, e, n4);
    const i = new p(), r = new p();
    p.st_cosAndSin(n4, i, r);
    const o = Ne.constructCoordsE(new p(t2.m_semiMajorAxis).mulThisE(i), new p(t2.m_semiMajorAxis).mulThis(t2.m_minorMajorRatio).mulThisE(r)), a2 = new p(t2.m_rotation);
    p.st_cosAndSin(a2, i, r), o.rotateDirect(i, r), o.addThisE(Ne.constructPoint2D(t2.m_center)), s3.setE(o);
  }
}
function ru(t2, e) {
  return t2.convertToCanonic(e);
}
function ou(t2, e) {
  const s3 = new x2(t2.getStartAngle(), t2.getEndAngle());
  s3.normalize();
  const n4 = $s(), i = ct(e, n4);
  if (i < s3.vmin) {
    let t3 = i + n4;
    for (; t3 < s3.vmin; ) t3 += n4;
    return s3.containsCoordinate(t3) ? t3 : s3.vmin - i < t3 - s3.vmax ? i : t3;
  }
  if (i > s3.vmax) {
    let t3 = i - n4;
    for (; t3 > s3.vmax; ) t3 -= n4;
    return s3.containsCoordinate(t3) || s3.vmin - t3 < i - s3.vmax ? t3 : i;
  }
  return i;
}
function au(t2, e, s3, n4) {
  let i = t2.m_startAngle, r = t2.m_sweepAngle;
  const o = 1e-12;
  for (; i > Hs(); ) i -= 2 * Hs();
  for (; i <= -Hs(); ) i += 2 * Hs();
  if (!Number.isNaN(e)) {
    for (; e > Hs(); ) e -= 2 * Hs();
    for (; e <= -Hs(); ) e += 2 * Hs();
    !s3 && e > i && (e -= 2 * Hs()), s3 && e < i && (e += 2 * Hs()), r = e - i, Math.abs(r) < o && !n4 && (r = s3 ? 2 * Hs() : -2 * Hs()), Math.abs(r) > 2 * Hs() - o && n4 && (r = 0);
  }
  Math.abs(r) > 2 * Hs() - o && (r = r >= 0 ? 2 * Hs() : -2 * Hs(), t2.setEndXY(t2.getStartXY())), Math.abs(r) < o && (r = 0, t2.setEndXY(t2.getStartXY())), n4 = Math.abs(r) <= Hs(), r && (s3 = r > 0), t2.m_startAngle = hu(i), t2.m_sweepAngle = r, Fu(t2, !n4), Xu(t2, s3);
}
function hu(t2) {
  let e = t2, s3 = false;
  return e <= -Hs() ? (e += $s(), s3 = true) : e > Hs() && (e -= $s(), s3 = true), e <= -Hs() ? (e = ct(e, $s()), e <= -Hs() && (e += $s()), s3 = true) : e > Hs() && (e = ct(e, $s()), e > Hs() && (e -= $s()), s3 = true), s3 && (e > Hs() || e <= -Hs()) && (e = Hs()), e;
}
function uu(t2, e, s3) {
  const n4 = s3, i = n4.getSemiAxes();
  let r = new mi(i.x * Math.cos(t2[0]), i.y * Math.sin(t2[0]));
  return r = n4.convertFromCanonic(r), mi.sqrDistance(r, n4.getStartXY());
}
function mu(t2, e, s3) {
  const n4 = s3, i = n4.getSemiAxes(), r = t2[0] + n4.getStartAngle();
  let o = new mi(i.x * Math.cos(r), i.y * Math.sin(r));
  return o = n4.convertFromCanonic(o), mi.sqrDistance(o, n4.getEndXY());
}
function lu(t2) {
  if (t2.m_center.isNAN()) return t2.m_startAngle = 0, void (t2.m_sweepAngle = 0);
  const e = t2.getStartXY(), s3 = t2.getEndXY(), n4 = e.equals(s3), i = Vu(t2), r = qu(t2), o = t2.projectionBehavior();
  if (n4) {
    const s4 = t2.convertToCanonic(e), n5 = new mi(t2.m_semiMajorAxis, t2.m_semiMajorAxis * t2.m_minorMajorRatio);
    s4.x /= n5.x, s4.y /= n5.y, t2.m_startAngle = hu(Math.atan2(s4.y, s4.x)), t2.m_sweepAngle = i ? r ? $s() : -$s() : 0;
  } else {
    const n5 = t2.convertToCanonic(e), a2 = new mi(t2.m_semiMajorAxis, t2.m_semiMajorAxis * t2.m_minorMajorRatio);
    n5.x /= a2.x, n5.y /= a2.y;
    const h2 = t2.convertToCanonic(s3);
    h2.x /= a2.x, h2.y /= a2.y, t2.m_startAngle = Math.atan2(n5.y, n5.x), t2.m_sweepAngle = mi.calculateAngle(n5, h2), r ? t2.m_sweepAngle < 0 && (t2.m_sweepAngle += $s()) : t2.m_sweepAngle > 0 && (t2.m_sweepAngle -= $s()), t2.m_startAngle = hu(t2.m_startAngle);
    let u = uu([t2.m_startAngle], 1, t2);
    if (u = Math.sqrt(u), u > 0.25 * rs(t2)) {
      const e2 = t2.m_startAngle - 1e-4, s4 = t2.m_startAngle + 1e-4, n6 = [0];
      on(uu, t2, 1, [t2.m_startAngle], [e2], [s4], 1e-14, n6), t2.m_startAngle = hu(n6[0]);
    }
    if (u = mu([t2.m_sweepAngle], 1, t2), u = Math.sqrt(u), u > 0.25 * rs(t2)) {
      const e2 = t2.m_sweepAngle - 1e-4, s4 = t2.m_sweepAngle + 1e-4, n6 = [0];
      on(mu, t2, 1, [t2.m_sweepAngle], [e2], [s4], 1e-14, n6), t2.m_sweepAngle = n6[0];
    }
    const m = Math.abs(t2.m_sweepAngle) > Hs();
    if (Fu(t2, m), i !== m && !i && Math.abs(t2.m_sweepAngle) > 1.5 * Hs()) return void Su(t2, e, s3, o);
    if (0 === t2.m_sweepAngle || r !== t2.m_sweepAngle > 0) return void Su(t2, e, s3, o);
  }
}
function cu(t2, e) {
  return (ou(t2, e) - t2.getStartAngle()) / t2.getSweepAngle();
}
function gu(t2, e) {
  return t2.m_startAngle + e * t2.m_sweepAngle;
}
function du(t2, e, s3) {
  s3.assign(new p(t2.m_startAngle).addE(e.mulE(new p(t2.m_sweepAngle))));
}
function _u(t2, e) {
  const s3 = new p(t2.m_cosr).sqrThis(), n4 = new p(t2.m_sinr).sqrThis(), i = new p(t2.m_minorMajorRatio), r = new p(1 / t2.m_minorMajorRatio), o = i.mulE(s3).addThisE(r.mulE(n4)), a2 = i.subE(r).mulThis(2 * t2.m_cosr * t2.m_sinr), h2 = i.mulE(n4).addThisE(r.mulE(s3));
  e[0] = o, e[1] = a2, e[2] = h2, e[3] = new p(-t2.m_semiMajorAxis).mulThis(t2.m_semiMajorAxis).mulThis(t2.m_minorMajorRatio);
}
function pu(t2, e) {
  const s3 = new Xe();
  s3.a11.setE(t2[0]), s3.a12 = p.st_mulByPower2(t2[1], 0.5), s3.a21.setE(s3.a12), s3.a22.setE(t2[2]);
  const n4 = [mi.getNAN(), mi.getNAN()], i = [new p(), new p()];
  s3.eigenSymmetric(i, n4);
  const r = t2[3].clone();
  r.negateThis(), r.invThis(), i[0].mulThisE(r), i[1].mulThisE(r), i[0].sqrtThis().invThis(), i[1].sqrtThis().invThis(), e.x = i[0].toDouble(), e.y = i[1].toDouble();
  return Math.atan2(n4[0].y, n4[0].x);
}
function fu(t2, e, s3) {
  if (Eu(t2)) return (s3 - e) * mi.distance(t2.getStartXY(), t2.getEndXY());
  if (1 === t2.m_minorMajorRatio) return Math.abs(t2.getSweepAngle() * (e - s3)) * t2.m_semiMajorAxis;
  const n4 = Du(t2, e);
  return Du(t2, s3) - n4;
}
function Pu(t2) {
  return t2.m_cachedValues;
}
function yu(t2) {
  if (t2.m_cachedValues) return t2.m_cachedValues;
  const e = su();
  return e.e2 = vu(t2), e.completeE = ft(e.e2), t2.m_cachedValues = e, e;
}
function xu(t2, e, s3, n4) {
  if (!e.isEqual(t2.m_XStart, t2.m_YStart) || !s3.isEqual(t2.m_XEnd, t2.m_YEnd)) {
    if (Eu(t2)) return t2.m_XStart = e.x, t2.m_YStart = e.y, t2.m_XEnd = s3.x, t2.m_YEnd = s3.y, Uu(t2), void t2.afterCompletedModification();
    if (n4 && Math.abs(t2.getSweepAngle()) <= 1.01 * Js()) {
      const n5 = Ot(mi, 3), i = ku(t2, n5);
      if (Za(n5)) {
        n5[0].assign(e), n5[2].assign(s3), Ua(n5);
        if (0 === t2.projectionBehavior()) {
          let e2 = 0, s4 = 2;
          mi.sqrDistance(n5[1], n5[0]) < mi.sqrDistance(n5[1], n5[2]) && (s4 = Pt(e2, e2 = s4));
          const i2 = n5[s4].sub(n5[e2]), r = i2.length();
          i2.divThis(r);
          const o = n5[1].sub(n5[e2]), a2 = o.length(), h2 = o.dotProduct(i2) / a2, u = o.crossProduct(i2) / a2, m = new mi();
          Y(n5[e2], n5[s4], 0.5, m);
          const l2 = 0.5 * r / u * Us(1 - h2, 0, 1), c = n5[1].side(n5[e2], n5[s4]), g2 = i2.clone();
          c ? g2.leftPerpendicularThis() : g2.rightPerpendicularThis();
          const d = m.sub(g2.mul(l2));
          t2.constructCircularArcThreePoint(n5[0], n5[2], d);
        } else Gu(n5, i * i, null, false, t2);
        return;
      }
    }
    0 === t2.projectionBehavior() ? im(t2, e, s3) : rm(t2, e, s3);
  }
}
function Cu(t2, e, s3) {
  const n4 = 0 === t2.projectionBehavior();
  if (s3 <= 2) return void Su(t2, e[0], e[s3 - 1], n4 ? 0 : 1);
  if (n4) {
    t2.constructCircularArcThreePoint(e[0], e[s3 - 1], e[Math.trunc(s3 / 2)]);
    const n5 = new mi();
    return t2.queryCoord2D(0.5, n5), void t2.m_interior.setCoordsPoint2D(n5);
  }
  const i = t2.getSemiMajorAxis(), r = t2.getMinorMajorRatio(), o = t2.getAxisXRotation(), a2 = t2.getCenter(), h2 = new Array(4);
  h2[0] = t2.isMajor(), h2[1] = !h2[0], h2[2] = h2[0], h2[3] = !h2[0];
  const u = new Array(4);
  u[0] = t2.isClockwise(), u[1] = u[0], u[2] = !u[0], u[3] = !u[0];
  const m = Math.trunc(s3 < 5 ? 1 : (s3 + 4) / 5), l2 = Ot(qh, 4), c = Yt(4, Number.NaN);
  let g2 = 0;
  for (let d = 0; d < 4; d++) {
    l2[d].constructEllipticArcEndPointsCenter(e[0], e[s3 - 1], i, r, o, h2[d], u[d], a2), c[d] = 0;
    let t3 = 0;
    for (let n5 = m; n5 < s3 - 1; n5 += m) {
      const s4 = l2[d].getClosestCoordinate(e[n5], false);
      c[d] += mi.sqrDistance(l2[d].getCoord2D(s4), e[n5]), t3++;
    }
    c[d] /= t3, c[d] < c[g2] && (g2 = d);
  }
  t2.assignCopy(l2[g2]);
}
function vu(t2) {
  return 1 - H(t2.m_minorMajorRatio);
}
function bu(t2, e, s3, n4, i, r, o, a2, h2) {
  return t2.m_bits = 0, t2.m_rotation = r, je(t2, e), He(t2, s3), t2.m_cosr = Math.cos(r), t2.m_sinr = Math.sin(r), Fu(t2, o), Xu(t2, a2), void 0 !== h2 ? t2.m_center.assign(h2) : t2.m_center.setNAN(), t2.setProjectionBehavior(1), t2.m_semiMajorAxis = n4, t2.m_minorMajorRatio = i, Bu(t2, void 0 === h2);
}
function Su(t2, e, s3, n4) {
  t2.m_bits = 0, t2.m_rotation = 0, je(t2, e), He(t2, s3), t2.m_interior.assign(e.add(s3).mul(0.5)), t2.m_startAngle = 0, t2.m_sweepAngle = 0, t2.m_cosr = 1, t2.m_sinr = 0, Fu(t2, false), Xu(t2, false), t2.m_center.setNAN(), t2.m_semiMajorAxis = 1, t2.m_minorMajorRatio = 0, t2.setProjectionBehavior(n4), t2.afterCompletedModification();
}
function Eu(t2) {
  return t2.m_center.isNAN();
}
function Du(t2, e) {
  if (0 === e) return 0;
  const s3 = yu(t2), n4 = gu(t2, e), i = Js(), r = Au(t2), o = _t(n4 + i, s3.e2, s3.completeE), a2 = t2.m_semiMajorAxis * (o - r);
  return Math.abs(a2);
}
function wu(t2, e) {
  if (Eu(t2)) {
    const s4 = mi.distance(t2.getStartXY(), t2.getEndXY());
    return 0 === s4 ? 0 : e / s4;
  }
  if (1 === t2.m_minorMajorRatio) {
    const s4 = Math.abs(t2.getSweepAngle() * t2.m_semiMajorAxis);
    return 0 === s4 ? 0 : e / s4;
  }
  if (0 === e) return 0;
  const s3 = t2.getSweepAngle();
  if (0 === s3) return 0.5;
  const n4 = yu(t2), i = Js(), r = Au(t2);
  s3 < 0 && (e = -e);
  const o = e / t2.m_semiMajorAxis + r;
  let a2 = vt(o, n4.e2, n4.completeE);
  a2 -= i, a2 -= t2.getStartAngle();
  return a2 / s3;
}
function Au(t2) {
  const e = yu(t2);
  return _t(t2.getStartAngle() + Js(), e.e2, e.completeE);
}
function Tu(t2, e, n4, i, r) {
  if (2 === e.m_TransformationType) return void n(0);
  if (n(!Ru(t2)), e.isIdentity() && (!i || i.equals(t2.getStartXY()) && r.equals(t2.getEndXY()))) return;
  Yu(t2);
  let o = mi.getNAN(), a2 = mi.getNAN();
  if (null === i ? (o.x = t2.m_XStart, o.y = t2.m_YStart, e.transformInPlace(o), a2.x = t2.m_XEnd, a2.y = t2.m_YEnd, e.transformInPlace(a2)) : (o = i, a2 = r), Eu(t2)) return t2.m_XStart = o.x, t2.m_YStart = o.y, t2.m_XEnd = a2.x, void (t2.m_YEnd = a2.y);
  const h2 = t2.m_center.clone();
  if (e.transformInPlace(h2), n4 || e.isUniformNoRotation()) {
    let s3 = qu(t2);
    e.isReflective() && (s3 = !s3);
    if (0 === t2.projectionBehavior()) {
      if (!o.equals(a2)) {
        const s4 = t2.m_interior.clone();
        return e.transformInPlace(s4), void t2.constructCircularArcThreePoint(o, a2, s4);
      }
      return void Iu(t2, o, a2, h2, s3, false);
    }
    const n5 = new mi(t2.m_cosr, t2.m_sinr);
    e.transformWithoutTranslateInPlace(n5);
    const i2 = Math.atan2(n5.y, n5.x), r2 = t2.getSemiAxes();
    e.transformWithoutTranslateInPlace(r2);
    const u = t2.m_center.clone();
    return e.transformInPlace(u), void t2.constructEllipticArcEndPointsCenter(o, a2, r2.x, r2.y / r2.x, i2, t2.isMajor(), s3, u);
  }
  {
    {
      const s4 = new Array(4);
      _u(t2, s4);
      const n6 = new Xe();
      n6.a11.setE(s4[0]), n6.a12.setE(s4[1]), n6.a12.mulThisByPower2(0.5), n6.a21.setE(n6.a12), n6.a22.setE(s4[2]);
      if (!n6.det().isZero()) {
        const i3 = new Xe();
        if (i3.a11.set(e.xx), i3.a12.set(e.xy), i3.a21.set(e.yx), i3.a22.set(e.yy), i3.invertThis()) {
          const r3 = i3.clone();
          r3.transposeThis();
          const u2 = n6.clone();
          u2.mulThis(i3), u2.mulLeftThis(r3);
          if (!u2.det().isZero()) {
            const n7 = Ot(p, 4);
            n7[0].setE(u2.a11), n7[1].setE(u2.a12), n7[1].mulThisByPower2(2), n7[2].setE(u2.a22), n7[3].setE(s4[3]);
            const i4 = mi.getNAN(), r4 = pu(n7, i4);
            let m = qu(t2);
            return e.isReflective() && (m = !m), void t2.constructEllipticArcEndPointsCenter(o, a2, i4.x, i4.y / i4.x, r4, t2.isMajor(), m, h2);
          }
        }
      }
    }
    const s3 = [mi.getNAN(), mi.getNAN(), mi.getNAN()];
    s3[0].setCoords(t2.getSemiMajorAxis(), 0), s3[0].rotateDirect(t2.m_cosr, t2.m_sinr), s3[1].setCoords(t2.getSemiMajorAxis(), t2.getSemiMinorAxis()), s3[1].rotateDirect(t2.m_cosr, t2.m_sinr), s3[2].setCoords(0, t2.getSemiMinorAxis()), s3[2].rotateDirect(t2.m_cosr, t2.m_sinr);
    let n5 = t2.isClockwise();
    n5 && (s3[2] = Pt(s3[0], s3[0] = s3[2]));
    const i2 = 0.5;
    e.transformWithoutTranslateArray(s3, 3, s3), e.isReflective() && (n5 = !n5);
    const r2 = new mi(0, 0), u = t2.createInstance();
    Gu(s3, i2, r2, false, u), t2.constructEllipticArcEndPointsCenter(o, a2, u.getSemiMajorAxis(), u.getMinorMajorRatio(), u.getAxisXRotation(), t2.isMajor(), !n5, h2);
  }
}
function Iu(t2, e, s3, n4, i, r) {
  const o = 0.5 * (n4.sub(e).length() + n4.sub(s3).length());
  t2.m_center.assign(n4), t2.m_startAngle = Math.atan2(e.y - t2.m_center.y, e.x - t2.m_center.x);
  au(t2, Math.atan2(s3.y - t2.m_center.y, s3.x - t2.m_center.x), i, r);
  const a2 = t2.constructEllipticArcEndPointsCenter(e, s3, o, 1, 0, Math.abs(t2.m_sweepAngle) > Math.PI, t2.m_sweepAngle > 0, n4);
  return t2.setProjectionBehavior(0), a2;
}
function Mu(t2, e) {
  t2.m_cachedValues = e;
}
function Yu(t2) {
  t2.m_cachedValues = null;
}
function Nu(t2, e) {
  e.m_cachedValues = Pt(t2.m_cachedValues, t2.m_cachedValues = e.m_cachedValues);
}
function Xu(t2, e) {
  const s3 = e ? 1 : 0;
  t2.m_bits = -2 & t2.m_bits | s3;
}
function qu(t2) {
  return !!(1 & t2.m_bits);
}
function Fu(t2, e) {
  const s3 = e ? 1 : 0;
  t2.m_bits = -3 & t2.m_bits | s3 << 1;
}
function Vu(t2) {
  return !!(2 & t2.m_bits);
}
function Lu(t2) {
  if (t2.m_center.isNAN()) return false;
  const e = 8, s3 = new Ne();
  s3.setWithEps(t2.getStartXY(), e), s3.subThisE(new Ne().setWithEps(t2.m_center, e));
  const n4 = new p();
  n4.setWithEps(t2.m_rotation, e);
  const i = new p(), r = new p();
  p.st_cosAndSin(n4, i, r), s3.rotateReverse(i, r);
  const o = new Ne();
  o.setWithEps(t2.getEndXY()), o.subThisE(Ne.constructPoint2D(t2.m_center)), o.rotateReverse(i, r);
  const a2 = new p();
  a2.setWithEps(t2.m_semiMajorAxis, e);
  const h2 = a2.clone(), u = new p();
  u.setWithEps(t2.m_minorMajorRatio), h2.mulThisE(u), s3.x.divThisE(a2), s3.y.divThisE(h2), o.x.divThisE(a2), o.y.divThisE(h2);
  const m = s3.x.sqr().addThisE(s3.y.sqr()).subThisE(w), l2 = o.x.sqr().addThisE(o.y.sqr()).subThisE(w);
  return !m.isZero() || !l2.isZero();
}
function Ru(t2) {
  return !!(8 & t2.m_bits);
}
function zu(t2) {
  t2.m_bits &= -9;
}
function Bu(t2, e) {
  zu(t2);
  const n4 = t2.getStartXY(), i = t2.getEndXY();
  let r = false;
  const o = Vu(t2), a2 = qu(t2), h2 = t2.projectionBehavior(), u = n4.equals(i);
  let m = 0 === t2.m_minorMajorRatio || 0 === t2.m_semiMajorAxis;
  if (Number.isNaN(t2.m_minorMajorRatio) && (0 === t2.m_semiMajorAxis ? t2.m_minorMajorRatio = 1 : v("NAN minor major ratio and non-zero major axis")), m ||= e ? u : t2.m_center.isNAN(), m) return Su(t2, n4, i, h2), true;
  t2.m_semiMajorAxis = Math.abs(t2.m_semiMajorAxis), t2.m_minorMajorRatio = Math.abs(t2.m_minorMajorRatio), t2.m_minorMajorRatio > 1 && (t2.m_semiMajorAxis *= t2.m_minorMajorRatio, t2.m_minorMajorRatio = 1 / t2.m_minorMajorRatio);
  const l2 = new mi(t2.m_semiMajorAxis, t2.m_semiMajorAxis * t2.m_minorMajorRatio);
  if (n(l2.y > 0 && l2.x >= l2.y), u) {
    const e2 = t2.convertToCanonic(n4);
    n(!l2.isZero()), e2.x /= l2.x, e2.y /= l2.y;
    const i2 = Math.sqrt(H(e2.x) + H(e2.y));
    if (r = 1 !== i2, t2.m_semiMajorAxis *= i2, l2.mulThis(i2), t2.m_startAngle = hu(Math.atan2(e2.y, e2.x)), !o) return t2.m_interior.assign(n4), t2.m_sweepAngle = 0, t2.afterCompletedModification(), r;
    t2.m_sweepAngle = a2 ? $s() : -$s();
  } else {
    let e2 = t2.m_center.isNAN() || Lu(t2);
    if (!e2) {
      const s3 = t2.convertToCanonic(n4);
      s3.x /= l2.x, s3.y /= l2.y;
      const r2 = new mi(1, 0);
      t2.m_startAngle = mi.calculateAngle(r2, s3);
      const o2 = t2.convertToCanonic(i);
      o2.x /= l2.x, o2.y /= l2.y, t2.m_sweepAngle = mi.calculateAngle(s3, o2), e2 = !ju(t2);
    }
    if (e2) {
      r = true;
      const e3 = n4.sub(i).mulThis(0.5);
      e3.rotateReverse(t2.m_cosr, t2.m_sinr);
      let s3 = H(e3.x / l2.x) + H(e3.y / l2.y);
      s3 > 1 && (s3 = Math.sqrt(s3), t2.m_semiMajorAxis *= s3, l2.mulThis(s3));
      const h3 = new mi(0, 0);
      {
        const t3 = l2.x * l2.x, s4 = l2.y * l2.y, n5 = t3 * e3.y * e3.y + s4 * e3.x * e3.x, i2 = t3 * s4 - n5;
        if (i2 > 0) {
          const t4 = Math.sqrt(i2 / n5);
          h3.setCoords(l2.x * e3.y / l2.y, -l2.y * e3.x / l2.x), h3.mulThis(t4), o === a2 && h3.negateThis();
        }
      }
      {
        const e4 = new mi(h3.x, h3.y);
        e4.rotateDirect(t2.m_cosr, t2.m_sinr), e4.addThis(n4.add(i).mulThis(0.5)), t2.m_center.assign(e4);
      }
    }
    if (lu(t2), !ju(t2)) return Su(t2, n4, i, h2), true;
  }
  return Uu(t2), t2.afterCompletedModification(), r;
}
function ku(t2, e) {
  n(Math.abs(t2.getSweepAngle()) < 15 * Math.PI / 16);
  const n4 = t2.getSemiMajorAxis(), i = t2.getSemiMinorAxis();
  let r;
  if (0 === n4) return e[0].setCoordsPoint2D(t2.getStartXY()), e[1].setCoordsPoint2D(t2.getStartXY()), e[2].setCoordsPoint2D(t2.getStartXY()), r = 1, r;
  if (0 === i) return e[0].setCoordsPoint2D(t2.getStartXY()), e[2].setCoordsPoint2D(t2.getEndXY()), e[1] = mi.lerp(e[0], e[2], 0.5), r = 1, r;
  const o = t2.getSweepAngle(), a2 = t2.getStartAngle(), h2 = a2 + o, u = new mi(-n4 * Math.sin(a2), i * Math.cos(a2)), m = new mi(-n4 * Math.sin(h2), i * Math.cos(h2));
  u.normalize(), m.normalize(), u.rotateDirect(t2.m_cosr, t2.m_sinr), m.rotateDirect(t2.m_cosr, t2.m_sinr), e[0].setCoordsPoint2D(t2.getStartXY()), e[2].setCoordsPoint2D(t2.getEndXY()), e[1].setSub(e[2], e[0]);
  const l2 = u.crossProduct(m);
  e[1].assign(u.mul(e[1].crossProduct(m) / l2)), e[1].addThis(e[0]);
  return r = Math.cos(0.5 * o), r;
}
function Gu(t2, e, n4, i, r) {
  if (i) {
    const s3 = 0.5, n5 = Math.sqrt(e), i2 = H(1 - s3) + 2 * n5 * s3 * (1 - s3) + H(s3), o2 = t2[0].mul(H(1 - s3)).add(t2[1].mul(2 * n5 * s3 * (1 - s3))).add(t2[2].mul(H(s3))).divThis(i2);
    return r.constructCircularArcThreePoint(t2[0], t2[2], o2), true;
  }
  const o = t2[0].sub(t2[1]), a2 = t2[2].sub(t2[1]), h2 = o.crossProduct(a2), u = o.dotProduct(a2), m = e;
  n(m <= 1), n(m > 0);
  const l2 = 0.5 / (1 - m), c = o.sqrLength(), g2 = u, d = a2.sqrLength(), _ = H(h2), p2 = o.sub(a2).sqrLength();
  if (0 === _) return Su(r, t2[0], t2[2], 1), false;
  if (u <= -Math.sqrt(c) * Math.sqrt(d)) return Su(r, t2[0], t2[2], 1), false;
  const f2 = [0, 0], P4 = new x2();
  P4.setInfinite();
  const y2 = nn(2 * _, -(p2 / m + 4 * g2), 2 * (1 - m) / m, P4, false, f2);
  if (0 === y2) return Su(r, t2[0], t2[2], 1), false;
  1 === y2 && (f2[1] = f2[0]);
  const x4 = Math.sqrt(l2 / f2[0]), C3 = Math.sqrt(l2 / f2[1]), v2 = 0.5 / m;
  let b2 = v2 - d * f2[0], S2 = v2 - c * f2[0];
  Math.abs(b2) > Math.abs(S2) ? S2 = g2 * f2[0] - v2 + 1 : b2 = g2 * f2[0] - v2 + 1;
  const E = o.mul(b2).add(a2.mul(S2)), D3 = E.norm(1) < 1e-15 * x4 ? 0 : Math.atan2(E.y, E.x) + Math.PI, w3 = o.add(a2), A4 = n4 ? n4.clone() : t2[1].add(w3.mul(l2)), T3 = t2[0].sub(A4), I2 = t2[2].sub(A4), M2 = T3.crossProduct(I2) < 0, Y3 = false;
  new qh();
  return r.constructEllipticArcEndPointsCenter(t2[0], t2[2], x4, C3 / x4, D3, Y3, !M2, A4);
}
function Wu(t2, e, s3, n4, i) {
  return Gu(t2, e, s3, n4, i);
}
function ju(t2) {
  const e = rs(t2);
  let s3 = false;
  {
    const n5 = new mi(t2.m_semiMajorAxis * Math.cos(t2.m_startAngle), t2.getSemiMinorAxis() * Math.sin(t2.m_startAngle));
    n5.rotateDirect(t2.m_cosr, t2.m_sinr), n5.addThis(t2.m_center);
    s3 = mi.distance(t2.getStartXY(), n5) > e;
  }
  let n4 = false;
  if (!s3) {
    const s4 = new mi(t2.m_semiMajorAxis * Math.cos(t2.m_startAngle + t2.m_sweepAngle), t2.getSemiMinorAxis() * Math.sin(t2.m_startAngle + t2.m_sweepAngle));
    s4.rotateDirect(t2.m_cosr, t2.m_sinr), s4.addThis(t2.m_center);
    n4 = mi.distance(t2.getEndXY(), s4) > e;
  }
  return !s3 && !n4;
}
function Zu(t2, s3, n4, i) {
  0 === n4 && P("construct_enclosing_circle");
  const r = [0, 0, 0], o = Vh(s3, n4, r);
  if (1 === o) t2.constructCircleRadius(0, s3[r[0]], i);
  else if (2 === o) {
    const e = mi.lerp(s3[r[0]], s3[r[1]], 0.5), n5 = mi.distance(s3[r[0]], e), o2 = mi.distance(s3[r[1]], e);
    t2.constructCircleRadius(Math.max(n5, o2), e, i);
  } else if (3 === o) {
    const e = mi.calculateCircleCenterFromThreePoints(s3[r[0]], s3[r[1]], s3[r[2]]), n5 = mi.distance(s3[r[0]], e), o2 = mi.distance(s3[r[1]], e), a2 = mi.distance(s3[r[2]], e);
    t2.constructCircleRadius(Math.max(n5, o2, a2), e, i);
  } else b("unexpected");
}
function Hu(t2) {
  if (Eu(t2)) return 0;
  if (t2.isDegenerate(0)) return 0;
  const e = t2.m_semiMajorAxis, s3 = t2.getSemiMinorAxis(), n4 = e * e + s3 * s3, i = t2.getStartAngle(), r = t2.getEndAngle(), o = t2.m_center.y - t2.m_YStart, a2 = t2.m_cosr, h2 = t2.m_sinr;
  let u = 1, m = 0;
  t2.m_rotation && (u = (a2 - h2) * (a2 + h2), m = 2 * a2 * h2);
  const l2 = ((-0.5 * (r - i) + 0.25 * u * (2 * Math.cos(r + i) * Math.sin(r - i))) * s3 + -2 * Math.sin(0.5 * (r + i)) * Math.sin(0.5 * (r - i)) * a2 * o) * e / n4;
  let c = 0;
  if (t2.m_rotation) {
    c = 0.125 * (-2 * Math.sin(r + i) * Math.sin(r - i)) * m - s3 * o / n4 * (2 * Math.cos(0.5 * (r + i)) * Math.sin(0.5 * (r - i))) * h2;
  }
  return n4 * (l2 + c) + -0.5 * (t2.m_XEnd - t2.m_XStart) * (t2.m_YEnd - t2.m_YStart);
}
function Uu(t2) {
  t2.queryCoord2D(0.5, t2.m_interior);
}
function Ou(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Ju(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function Qu(t2, e, s3, n4, i) {
  if (i) {
    if (0 !== hm(e, s3)) return 2;
  } else if (Re(e, s3)) return 1;
  return 0 !== Ku(t2, e, s3, null, null, null, n4, void 0 !== i && i, true, false) ? 4 : 0;
}
function Ju(t2, e, n4, i, r, o, a2, h2, u, m) {
  if (Eu(e)) {
    return ws(new fm({ start: e.getStartXY(), end: e.getEndXY() }), n4, i, r, o, a2, h2, m);
  }
  null !== r && (r.length = 0), null !== o && (o.length = 0), null !== i && (i.length = 0);
  const l2 = os(e, n4);
  if (as(e, n4, a2 = Math.max(l2, a2))) return 0;
  const c = n4.getStartXY();
  c.subThis(e.m_center);
  const g2 = n4.getEndXY();
  g2.subThis(e.m_center), c.rotateReverse(e.m_cosr, e.m_sinr), g2.rotateReverse(e.m_cosr, e.m_sinr);
  const d = g2.clone();
  d.subThis(c);
  const _ = e.m_semiMajorAxis, p2 = 1 / _, f2 = e.getSemiMinorAxis(), P4 = 1 / f2, y2 = d.clone();
  y2.leftPerpendicularThis();
  const x4 = Math.atan2(f2 * y2.y, _ * y2.x), C3 = Yt(16, Number.NaN), v2 = Yt(16, Number.NaN);
  let b2 = 0;
  const S2 = [x4, x4 + Math.PI];
  for (let s3 = 0; s3 < 2; ++s3) {
    const t3 = cu(e, S2[s3]);
    if (t3 >= 0 && t3 <= 1) {
      C3[b2] = t3;
      const s4 = e.getCoord2D(C3[b2]);
      v2[b2] = n4.getClosestCoordinate(s4, false), mi.distance(s4, n4.getCoord2D(v2[b2])) <= a2 && b2++;
    }
  }
  const E = c.x * p2, D3 = c.y * P4, w3 = d.x * p2, A4 = d.y * P4;
  let T3 = nn(w3 * w3 + A4 * A4, 2 * (E * w3 + D3 * A4), E * E + D3 * D3 - 1, x2.unit(), false, v2);
  n(T3 >= 0);
  for (let s3 = 0; s3 < T3; s3++) {
    const t3 = d.mul(v2[s3]).add(c);
    t3.x *= p2, t3.y *= P4;
    const i2 = cu(e, Math.atan2(t3.y, t3.x));
    if (i2 >= 0 && i2 <= 1) {
      C3[b2] = i2;
      const t4 = e.getCoord2D(i2);
      v2[b2] = n4.getClosestCoordinate(t4, false), mi.distance(t4, n4.getCoord2D(v2[b2])) <= a2 && b2++;
    }
  }
  n(b2 < C3.length + 4);
  const I2 = Yt(16, Number.NaN);
  T3 = e.intersectPoint(n4.getStartXY(), I2, a2);
  for (let s3 = 0; s3 < T3; s3++, b2++) C3[b2] = I2[s3], v2[b2] = 0;
  T3 = e.intersectPoint(n4.getEndXY(), I2, a2);
  for (let s3 = 0; s3 < T3; s3++, b2++) C3[b2] = I2[s3], v2[b2] = 1;
  T3 = n4.intersectPoint(e.getStartXY(), I2, a2);
  for (let s3 = 0; s3 < T3; s3++, b2++) C3[b2] = 0, v2[b2] = I2[s3];
  T3 = n4.intersectPoint(e.getEndXY(), I2, a2);
  for (let s3 = 0; s3 < T3; s3++, b2++) C3[b2] = 1, v2[b2] = I2[s3];
  return 0 === b2 ? 0 : gm(t2, e, n4, C3, v2, b2, i, r, o, a2, h2, u, m);
}
function Ku(t2, e, n4, i, r, o, a2, h2, u, m) {
  if (Eu(e)) {
    const s3 = new fm({ start: e.getStartXY(), end: e.getEndXY() });
    return Ju(t2, n4, s3, i, o, r, a2, h2, u, !m);
  }
  if (Eu(n4)) {
    const s3 = new fm({ start: n4.getStartXY(), end: n4.getEndXY() });
    return Ju(t2, e, s3, i, r, o, a2, h2, u, m);
  }
  const l2 = os(e, n4);
  a2 = Math.max(a2, l2);
  let c = false;
  {
    const t3 = e.getSemiAxes(), i2 = e.getCenter(), m2 = n4.getSemiAxes(), l3 = n4.getCenter(), g3 = mi.distance(l3, i2), d2 = t3.x + m2.x;
    if (g3 > d2 + a2) return 0;
    if (t3.y > m2.x) {
      if (g3 + m2.x + a2 < t3.y) return 0;
    } else if (m2.y > t3.x && g3 + t3.x + a2 < m2.y) return 0;
    if (u && !h2) {
      const i3 = 1 === e.m_minorMajorRatio && e.isClosed() && e.isMajor(), a3 = 1 === n4.m_minorMajorRatio && n4.isClosed() && n4.isMajor();
      if (i3 && a3 && (c = true, g3 <= d2)) {
        if (Math.max(t3.x, m2.x) <= Math.min(t3.x, m2.x) + g3) return n(!r && !o), 1;
      }
    }
  }
  if (!c && as(e, n4, a2)) return 0;
  const g2 = [], d = [], _ = false, p2 = false, f2 = jh(e, 0, 0, _, p2, g2, d, null), P4 = [], y2 = [], x4 = jh(n4, 0, 0, _, p2, P4, y2, null);
  if (1 === f2 && 1 === x4) {
    const t3 = new Dn({ points: g2, weights: d }), s3 = new Dn({ points: P4, weights: y2 }), l3 = [], c2 = [], _2 = oh(false, t3, s3, i, null === r ? null : l3, null === o ? null : c2, a2, h2, u, m);
    if (_2 > 0 && null !== r || null !== o) {
      r && (r.length = 0), o && (o.length = 0);
      for (let i2 = 0; i2 < _2; ++i2) {
        if (r) if (Vs(l3[i2], 0, 1)) r.push(l3[i2]);
        else {
          const s4 = t3.tToLength(l3[i2]), n5 = e.lengthToT(s4);
          r.push(n5);
        }
        if (o) if (Vs(c2[i2], 0, 1)) o.push(c2[i2]);
        else {
          const t4 = s3.tToLength(c2[i2]), e2 = n4.lengthToT(t4);
          o.push(e2);
        }
      }
    }
    return _2;
  }
  let C3 = [];
  const v2 = [];
  let b2 = 0;
  const S2 = u && !h2;
  for (let s3 = 0; s3 < f2; s3++) {
    const t3 = new Dn({ points: g2.slice(2 * s3, 2 * s3 + 3), weights: d.slice(2 * s3, 2 * s3 + 3) });
    let i2 = 0;
    for (let r2 = 0; r2 < x4; r2++) {
      v2.length <= r2 && v2.push(new Dn({ points: P4.slice(2 * r2, 2 * r2 + 3), weights: y2.slice(2 * r2, 2 * r2 + 3) }));
      const o2 = [], h3 = [], u2 = S2 ? null : o2, m2 = S2 ? null : h3, l3 = oh(false, t3, v2[r2], null, u2, m2, a2, false, S2, false);
      if (l3 > 0 && S2) return 1;
      for (let a3 = 0; a3 < l3; ++a3) {
        if (0 === o2[a3] && 0 === s3) o2[a3] = 0;
        else if (1 === o2[a3] && s3 === f2 - 1) o2[a3] = 1;
        else {
          const s4 = t3.tToLength(o2[a3]) + b2, n5 = e.lengthToT(s4);
          o2[a3] = n5;
        }
        if (0 === h3[a3] && 0 === r2) h3[a3] = 0;
        else if (1 === h3[a3] && r2 === x4 - 1) h3[a3] = 1;
        else {
          const t4 = v2[r2].tToLength(h3[a3]) + i2, e2 = n4.lengthToT(t4);
          h3[a3] = e2;
        }
        C3.push($t(o2[a3], h3[a3]));
      }
      i2 += v2[r2].calculateLength2D();
    }
    b2 += t3.calculateLength2D();
  }
  if (0 === C3.length) return 0;
  if (h2 && (C3 = C3.filter((t3) => !Vs(t3.first, 0, 1) || !Vs(t3.second, 0, 1) || !e.getCoord2D(t3.first).equals(n4.getCoord2D(t3.second)))), u) return C3.length;
  const E = [], D3 = [];
  for (const s3 of C3) E.push(s3.first), D3.push(s3.second);
  return gm(t2, e, n4, E, D3, E.length, i, r, o, a2, h2, u, m);
}
function $u(t2, e, s3) {
  if (s3.setCoords(t2.getCoord2D(e.vmin)), s3.mergeNe(t2.getCoord2D(e.vmax)), Eu(t2)) return;
  const n4 = t2.getSemiAxes(), i = [0, 0, 0, 0];
  {
    const e2 = Math.atan2(-n4.y * t2.m_sinr, n4.x * t2.m_cosr), s4 = e2 + Math.PI, r2 = Math.atan2(n4.y * t2.m_cosr, n4.x * t2.m_sinr), o = r2 + Math.PI;
    i[0] = cu(t2, e2), i[1] = cu(t2, s4), i[2] = cu(t2, r2), i[3] = cu(t2, o);
  }
  const r = new mi();
  for (let o = 0; o < 4; o++) {
    const n5 = i[o];
    e.containsExclusiveCoordinate(n5) && (t2.queryCoord2D(n5, r), s3.mergeNe(r));
  }
}
function tm(t2, e, n4, i, r) {
  if (0 === t2.m_semiMajorAxis) return n4.vmin;
  let o = mi.getNAN();
  t2.queryCoord2D(n4.vmin, o);
  let a2 = mi.getNAN();
  if (t2.queryCoord2D(n4.vmax, a2), Eu(t2)) {
    return new fm({ start: o, end: a2 }).getClosestCoordinate(e, i);
  }
  const h2 = ru(t2, e);
  if (o = ru(t2, o), a2 = ru(t2, a2), 1 === t2.m_minorMajorRatio) {
    if (h2.isEqual(0, 0)) return n4.vmin;
    const e2 = cu(t2, Math.atan2(h2.y, h2.x));
    if (i || n4.containsCoordinate(e2)) return e2;
    return mi.distance(h2, o) <= mi.distance(h2, a2) ? n4.vmin : n4.vmax;
  }
  const u = t2.getSemiMajorAxis(), m = t2.getSemiMinorAxis(), l2 = (u - m) * (u + m), c = H(l2), g2 = h2.x, d = h2.y, _ = H(m * d), p2 = m * l2 * d * 2, f2 = [new p(_), new p(p2), new p(c - H(u * g2) - _), new p(-p2), new p(-c)], P4 = Ot(p, 4), y2 = pn(f2, 4, new x2(-1, 1), false, P4, 4);
  let x4 = n4.vmin, C3 = mi.sqrDistance(h2, o);
  {
    const t3 = mi.sqrDistance(h2, a2);
    t3 < C3 && (x4 = n4.vmax, C3 = t3);
  }
  n(!i);
  let v2 = Yt(8, Number.NaN);
  for (let s3 = 0; s3 < y2; ++s3) {
    const e2 = P4[s3].value(), n5 = Math.sqrt(1 - e2 * e2), i2 = Math.atan2(e2, n5), r2 = Math.atan2(e2, -n5);
    v2[2 * s3] = cu(t2, i2), v2[2 * s3 + 1] = cu(t2, r2);
  }
  v2 = v2.slice(0, 2 * y2), qt(v2);
  for (let s3 = 0, b2 = 2 * y2; s3 < b2; ++s3) if (v2[s3] > n4.vmin && v2[s3] < n4.vmax) {
    const n5 = mi.sqrDistance(e, t2.getCoord2D(v2[s3]));
    C3 > n5 && (C3 = n5, x4 = v2[s3]);
  }
  return x4;
}
function em(t2, e, n4) {
  n(!Eu(t2));
  const i = new x3();
  i.setRotateAngle(-t2.getAxisXRotation());
  const r = new mi();
  i.queryTransform(e, r);
  const o = Math.atan2(-r.x * t2.getMinorMajorRatio(), r.y), a2 = o + Hs();
  let h2 = cu(t2, o), u = cu(t2, a2);
  u < h2 && (u = Pt(h2, h2 = u));
  let m = 0;
  return h2 >= 0 && h2 <= 1 && (n4[m++] = h2), u >= 0 && u <= 1 && (n4[m++] = u), m;
}
function sm(t2, e, s3) {
  return t2.m_semiMajorAxis === e.m_semiMajorAxis && (t2.isMajor() !== e.isMajor() && (!!t2.m_center.equals(e.m_center) && (t2.m_sinr === e.m_sinr && (t2.m_cosr === e.m_cosr && (t2.m_minorMajorRatio === e.m_minorMajorRatio && (s3 ? t2.isClockwise() !== e.isClockwise() : t2.isClockwise() === e.isClockwise()))))));
}
function nm(t2, e, s3) {
  if (Eu(t2)) s3.setE(Ne.constructPoint2D(t2.getEndXY()).subE(Ne.constructPoint2D(t2.getStartXY())));
  else {
    const n4 = new p();
    du(t2, e, n4);
    const i = new Ne();
    if (i.setCoordsE(new p(t2.m_semiMajorAxis).negate().mulE(new p().setSin(n4)), new p(t2.getSemiMinorAxis()).mulE(new p().setCos(n4))), t2.m_rotation) {
      const e2 = new p(t2.m_rotation);
      i.rotateDirect(new p().setCos(e2), new p().setSin(e2));
    }
    i.scaleThis(new p(t2.getSweepAngle())), s3.setE(i);
  }
}
function im(t2, e, s3, n4) {
  const i = t2.getStartXY(), r = t2.getEndXY(), o = i.equals(r), a2 = e.equals(s3);
  if (!o && !a2) {
    const n5 = new x3();
    n5.setShiftCoords(-t2.m_XStart, -t2.m_YStart);
    const o2 = mi.distance(e, s3), a3 = mi.distance(i, r), h3 = o2 / a3;
    n5.scale(h3, h3);
    const u2 = r.sub(i);
    u2.divThis(a3);
    const m2 = s3.sub(e);
    m2.divThis(o2);
    const l3 = u2.crossProduct(m2), c2 = m2.dotProduct(u2);
    return n5.rotate(c2, l3), n5.shiftCoords(e.x, e.y), void Tu(t2, n5, true, e, s3);
  }
  const h2 = new mi();
  if (t2.queryCoord2D(0.5, h2), a2) {
    if (o) {
      const n5 = t2.m_center.add(e.sub(i));
      t2.constructEllipticArcEndPointsCenter(e, s3, t2.getSemiMajorAxis(), 1, 0, true, !t2.isClockwise(), n5), t2.setProjectionBehavior(0);
    } else if (t2.isMajor()) {
      const n5 = h2.sub(e).getUnitVector().mul(2 * t2.getSemiMajorAxis()).add(e);
      t2.constructCircularArcThreePoint(e, s3, n5);
    } else t2.constructCircularArcThreePoint(e, s3, e);
    return;
  }
  const u = e.add(s3).mul(0.5), m = s3.sub(e);
  m.rightPerpendicularThis();
  const l2 = u.add(m), c = mi.getClosestCoordinate(u, l2, t2.getCenter(), true), g2 = new mi();
  Y(u, l2, c, g2);
  const d = mi.distance(e, g2);
  t2.constructEllipticArcEndPointsCenter(e, s3, d, 1, 0, true, !t2.isClockwise(), g2), t2.setProjectionBehavior(0);
}
function rm(t2, e, n4, i) {
  const r = t2.getStartXY(), o = t2.getEndXY(), a2 = r.equals(o), h2 = e.equals(n4);
  if (!a2 && !h2) {
    const s3 = new x3();
    return s3.initializeFromTwoPoints(r, o, e, n4), Tu(t2, s3, true, e, n4), t2.endPointModified(), void t2.normalizeAfterEndpointChange();
  }
  if (!t2.isMajor()) return void Su(t2, e, n4, 1);
  if (a2 && h2) {
    const s3 = t2.m_center.add(e.sub(r));
    return void t2.constructEllipticArcEndPointsCenter(e, n4, t2.getSemiMajorAxis(), t2.getMinorMajorRatio(), t2.getAxisXRotation(), true, !t2.isClockwise(), s3);
  }
  if (!a2) {
    const s3 = 0.5 * ($s() - Math.abs(t2.getSweepAngle())), i2 = (t2.getSweepAngle() + s3 * K(t2.getSweepAngle())) / t2.getSweepAngle(), r2 = new mi();
    t2.queryCoord2D(i2, r2), t2.constructEllipticArcEndPointsCenter(r2, r2, t2.getSemiMajorAxis(), t2.getMinorMajorRatio(), t2.getAxisXRotation(), true, !t2.isClockwise(), t2.getCenter());
    const o2 = t2.getCenter().add(e.sub(r2));
    return void t2.constructEllipticArcEndPointsCenter(e, n4, t2.getSemiMajorAxis(), t2.getMinorMajorRatio(), t2.getAxisXRotation(), true, !t2.isClockwise(), o2);
  }
  const u = mi.sqrDistance(e, n4);
  let m = 0.25, l2 = 0.75;
  if (u < mi.sqrDistance(t2.getCoord2D(0.25), t2.getCoord2D(0.75))) {
    const e2 = [0], n5 = en(new nu(t2, u), x2.construct(0, 0.25), 1, e2);
    n5 > 0 && (n(1 === n5), m = e2[0], l2 = 1 - e2[0]);
  }
  const c = t2.getCoord2D(m), g2 = t2.getCoord2D(l2);
  n(!c.equals(g2)), t2.constructEllipticArcEndPointsCenter(c, g2, t2.getSemiMajorAxis(), t2.getMinorMajorRatio(), t2.getAxisXRotation(), true, !t2.isClockwise(), t2.m_center), rm(t2, e, n4);
}
function om(t2, e, s3, n4, i) {
  return am(t2, false, e, s3, n4, i);
}
function am(t2, e, s3, n4, r, o) {
  const a2 = s3.getGeometryType(), u = n4.getGeometryType(), m = Math.max(r, os(s3, n4));
  if (a2 === a.enumLine && u === a.enumLine) return Ds(s3, n4, m, o);
  let l2 = s3, c = n4, g2 = s3.getStartXY(), d = s3.getEndXY();
  if (g2.compare(d) > 0 && (l2 = s3.clone().reverse()), g2 = n4.getStartXY(), d = n4.getEndXY(), g2.compare(d) > 0 && (c = n4.clone().reverse()), e) {
    if (s3.equals(n4)) return 2;
    if (We(s3, n4, m)) return 4;
  }
  switch (a2) {
    case a.enumLine:
      switch (u) {
        case a.enumEllipticArc:
          return Ou(t2, c, l2, m, o);
        case a.enumBezier:
          return Eo(t2, c, l2, m, o);
        case a.enumRationalBezier2:
          return th(t2, c, l2, m, o);
        case a.enumBezier2:
          return qi(t2, c, l2, m, o);
        default:
          b("");
      }
      break;
    case a.enumEllipticArc:
      switch (u) {
        case a.enumLine:
          return Ou(t2, l2, c, m, o);
        case a.enumEllipticArc:
          return Qu(t2, l2, c, m, o);
        case a.enumBezier:
          return Do(t2, c, l2, m, o);
        case a.enumRationalBezier2:
          return eh(t2, c, l2, m, o);
        case a.enumBezier2:
          return Fi(t2, c, l2, m, o);
        default:
          b("");
      }
      break;
    case a.enumBezier:
      switch (u) {
        case a.enumLine:
          return Eo(t2, l2, c, m, o);
        case a.enumEllipticArc:
          return Do(t2, l2, c, m, o);
        case a.enumBezier:
          return wo(t2, l2, c, m, o);
        case a.enumRationalBezier2:
          return Ao(t2, l2, c, m, o);
        case a.enumBezier2:
          return To(t2, l2, c, m, o);
        default:
          b("");
      }
      break;
    case a.enumRationalBezier2:
      switch (u) {
        case a.enumLine:
          return th(t2, l2, c, m, o);
        case a.enumEllipticArc:
          return eh(t2, l2, c, m, o);
        case a.enumBezier:
          return Ao(t2, c, l2, m, o);
        case a.enumRationalBezier2:
          return sh(t2, l2, c, m, o);
        case a.enumBezier2:
          return nh(t2, l2, c, m, o);
        default:
          b("");
      }
      break;
    case a.enumBezier2:
      switch (u) {
        case a.enumLine:
          return qi(t2, l2, c, m, o);
        case a.enumEllipticArc:
          return Fi(t2, l2, c, m, o);
        case a.enumBezier:
          return To(t2, c, l2, m, o);
        case a.enumRationalBezier2:
          return nh(t2, c, l2, m, o);
        case a.enumBezier2:
          return Vi(t2, l2, c, m, o);
        default:
          b("");
      }
      break;
    default:
      b("");
  }
}
function hm(t2, e, s3 = true) {
  if (!s3 && !um(t2, e)) return 0;
  const n4 = t2.isLine() && e.isLine();
  if (t2.getStartXY().equals(e.getStartXY()) && t2.getEndXY().equals(e.getEndXY())) {
    const s4 = 1;
    if (n4) return s4;
    const r = t2.getGeometryType();
    if (r !== e.getGeometryType()) return 0;
    if (r === a.enumBezier) {
      const n5 = t2, i = e;
      return n5.getControlPoint1().equals(i.getControlPoint1()) && n5.getControlPoint2().equals(i.getControlPoint2()) ? s4 : 0;
    }
    if (r === a.enumEllipticArc) {
      return sm(t2, e, false) ? s4 : 0;
    }
    if (r === a.enumRationalBezier2) {
      const n5 = t2, i = e;
      if (n5.getControlPoint1().equals(i.getControlPoint1()) && n5.getStandardFormWeight() === i.getStandardFormWeight()) return s4;
    } else if (r === a.enumBezier2) {
      const n5 = e;
      if (t2.getControlPoint1().equals(n5.getControlPoint1())) return s4;
    }
    return 0;
  }
  if (t2.getStartXY().equals(e.getEndXY()) && t2.getEndXY().equals(e.getStartXY())) {
    const s4 = -1;
    if (n4) return s4;
    const r = t2.getGeometryType();
    if (r !== e.getGeometryType()) return 0;
    if (r === a.enumBezier) {
      const n5 = t2, i = e;
      return n5.getControlPoint1().equals(i.getControlPoint2()) && n5.getControlPoint2().equals(i.getControlPoint1()) ? s4 : 0;
    }
    if (r === a.enumEllipticArc) {
      return sm(t2, e, true) ? s4 : -1;
    }
    if (r === a.enumRationalBezier2) {
      const n5 = t2, i = e;
      if (n5.getControlPoint1().equals(i.getControlPoint1()) && n5.getStandardFormWeight() === i.getStandardFormWeight()) return s4;
    } else if (r === a.enumBezier2) {
      const n5 = e;
      if (t2.getControlPoint1().equals(n5.getControlPoint1())) return s4;
    }
    return 0;
  }
  return 0;
}
function um(t2, e) {
  const s3 = t2.getGeometryType();
  return s3 === e.getGeometryType() && (s3 !== a.enumEllipticArc || t2.projectionBehavior() === e.projectionBehavior());
}
function mm(t2, s3, n4, r, o, a2, u) {
  !o && a2 && P("");
  const m = s3.getGeometryType(), l2 = n4.getGeometryType(), c = Math.max(u, os(s3, n4));
  if (r && (r.length = 0), o && (o.length = 0), a2 && (a2.length = 0), m === a.enumLine && l2 === a.enumLine) return ws(s3, n4, r, o, a2, c, false, false);
  let g2 = s3, d = n4, _ = s3.getStartXY(), p2 = s3.getEndXY(), f2 = false, P4 = false;
  _.compare(p2) > 0 && (g2 = s3.clone(true).reverse(), f2 = true), _ = n4.getStartXY(), p2 = n4.getEndXY(), _.compare(p2) > 0 && (d = n4.clone(true).reverse(), P4 = true);
  let y2 = 0;
  switch (m) {
    case a.enumLine:
      switch (l2) {
        case a.enumEllipticArc:
          y2 = Ju(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumBezier:
          y2 = Io(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumRationalBezier2:
          y2 = ih(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumBezier2:
          y2 = Li(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        default:
          b("");
      }
      break;
    case a.enumEllipticArc:
      switch (l2) {
        case a.enumLine:
          y2 = Ju(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumEllipticArc:
          y2 = Ku(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier:
          y2 = Mo(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumRationalBezier2:
          y2 = rh(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumBezier2:
          y2 = Ri(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        default:
          b("");
      }
      break;
    case a.enumRationalBezier2:
      switch (l2) {
        case a.enumLine:
          y2 = ih(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumEllipticArc:
          y2 = rh(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier:
          y2 = No(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumRationalBezier2:
          y2 = oh(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier2:
          y2 = ah(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        default:
          b("");
      }
      break;
    case a.enumBezier2:
      switch (l2) {
        case a.enumLine:
          y2 = Li(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumEllipticArc:
          y2 = Ri(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier:
          y2 = Xo(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumRationalBezier2:
          y2 = ah(t2, d, g2, r, a2, o, c, false, false, true);
          break;
        case a.enumBezier2:
          y2 = zi(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        default:
          b("");
      }
      break;
    case a.enumBezier:
      switch (l2) {
        case a.enumLine:
          y2 = Io(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumEllipticArc:
          y2 = Mo(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier:
          y2 = Yo(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumRationalBezier2:
          y2 = No(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        case a.enumBezier2:
          y2 = Xo(t2, g2, d, r, o, a2, c, false, false, false);
          break;
        default:
          b("");
      }
      break;
    default:
      b("");
  }
  if (f2) {
    if (o) {
      for (let t3 = 0; t3 < y2; t3++) o[t3] = 1 - o[t3];
      o.reverse();
    }
    r && r.reverse(), a2 && a2.reverse();
  }
  if (P4 && a2) for (let e = 0; e < y2; e++) a2[e] = 1 - a2[e];
  return y2;
}
function lm(t2, e, s3) {
  if (e === s3) return 0;
  e > s3 && (s3 = Pt(e, e = s3));
  return t2.cut(e, s3, true).calculateUpperLength2D();
}
function cm(t2, e, s3, n4, i) {
  const r = [], o = [], a2 = [];
  for (let u = 0, m = i; u < m; u++) r.push(t2.calculateSubLengthFromStart(s3[u])), o.push(e.calculateSubLengthFromStart(n4[u])), Vs(s3[u], 0, 1) && Vs(n4[u], 0, 1) && t2.getCoord2D(s3[u]).equals(e.getCoord2D(n4[u])) && a2.push(u);
  if (0 === a2.length || a2.length === i) return;
  a2.sort((t3, e2) => s3[t3] < s3[e2] ? -1 : s3[t3] > s3[e2] ? 1 : n4[t3] < n4[e2] ? -1 : n4[t3] > n4[e2] ? 1 : 0);
  let h2 = -1;
  for (const u of a2) {
    if (h2 >= 0 && s3[u] === s3[h2] && s3[u] === s3[h2]) {
      h2 = u;
      continue;
    }
    h2 = u;
    const a3 = [];
    a3.length = i;
    for (let t3 = 0; t3 < a3.length; ++t3) a3[t3] = t3;
    a3.sort((t3, e2) => {
      const s4 = r[u], n5 = o[u], i2 = r[t3] - s4, a4 = o[t3] - n5, h3 = i2 * i2 + a4 * a4, m = r[e2] - s4, l2 = o[e2] - n5, c = m * m + l2 * l2;
      return h3 < c ? -1 : h3 > c ? 1 : 0;
    });
    for (let r2 = 0; r2 < i; r2++) {
      const i2 = a3[r2];
      if (i2 === u || s3[i2] === s3[u] && n4[i2] === n4[u] || Vs(s3[i2], 0, 1) && Vs(n4[i2], 0, 1)) continue;
      const o2 = (s4, n5, i3, r3) => {
        const o3 = new Ne(), a4 = new p();
        a4.setWithEps(1);
        const h4 = new p();
        h4.set(n5, a4.eps()), t2.queryCoord2DE(h4, o3);
        const u2 = new Ne();
        t2.queryCoord2DE(new p(s4), u2);
        let m2 = false;
        return o3.eq(u2) && (h4.set(r3, a4.eps()), e.queryCoord2DE(h4, o3), e.queryCoord2DE(new p(i3), u2), m2 = o3.eq(u2)), !m2;
      }, h3 = mi.getNAN();
      t2.queryCoord2D(s3[i2], h3);
      const m = mi.getNAN();
      e.queryCoord2D(n4[i2], m);
      if (0 === mi.distance(h3, m) && o2(s3[u], s3[i2], n4[u], n4[i2])) break;
      const l2 = new x2(n4[i2], n4[u]);
      l2.normalizeNoNAN();
      const c = new x2(s3[i2], s3[u]);
      c.normalizeNoNAN();
      let g2 = -1, d = Number.POSITIVE_INFINITY, _ = Number.POSITIVE_INFINITY, p2 = s3[i2];
      h3.assign(t2.getCoord2D(p2));
      for (let r3 = 0; r3 < 5; r3++) {
        const r4 = e.getClosestCoordinateOnInterval(h3, l2, -1);
        m.assign(e.getCoord2D(r4));
        const a4 = mi.distance(h3, m);
        if (p2 = t2.getClosestCoordinateOnInterval(m, c, -1), p2 === s3[u] && r4 === n4[u]) {
          g2 = 1;
          break;
        }
        h3.assign(t2.getCoord2D(p2));
        const f2 = mi.distance(m, h3);
        if (!(f2 < _ && a4 < d)) {
          g2 = 0;
          break;
        }
        if (0 === f2 && 0 === a4) {
          o2(s3[u], s3[i2], n4[u], n4[i2]) ? (s3[i2] = p2, n4[i2] = r4, g2 = 0) : g2 = 1;
          break;
        }
        _ = f2, d = a4;
      }
      if (-1 === g2 && (g2 = Vs(s3[i2], 0, 1) || Vs(n4[i2], 0, 1) ? 0 : 1), 1 !== g2) break;
      s3[i2] = s3[u], n4[i2] = n4[u];
    }
  }
}
function gm(t2, e, s3, n4, i, r, o, a2, h2, u, m, l2, c) {
  if (!r) return 0;
  const g2 = (t3, e2) => {
    for (let s4 = 0; s4 < r; ++s4) {
      let n5 = e2[s4];
      if (Vs(n5, 0, 1)) {
        n5 = Xs(n5);
        continue;
      }
      const i2 = t3.getCoord2D(n5);
      n5 < 0.5 ? i2.equals(t3.getStartXY()) && lm(t3, 0, n5) <= rs(t3) && (e2[s4] = 0) : i2.equals(t3.getEndXY()) && lm(t3, n5, 1) <= rs(t3) && (e2[s4] = 1);
    }
  };
  g2(e, n4), g2(s3, i), cm(e, s3, n4, i, r);
  const d = [];
  for (let f2 = 0, P4 = r; f2 < P4; f2++) d.push(f2);
  const _ = (t3, e2) => c ? Rt(i[t3], n4[t3], i[e2], n4[e2]) : Rt(n4[t3], i[t3], n4[e2], i[e2]);
  if (d.length > 1) {
    d.sort(_);
    const t3 = Math.max(rs(e), rs(s3));
    let r2 = 0;
    for (let o2 = 1, a3 = d.length; o2 < a3; o2++) {
      const a4 = n4[d[r2]], h3 = n4[d[o2]], u2 = i[d[r2]], m2 = i[d[o2]];
      if (a4 !== h3 || u2 !== m2) {
        if (lm(e, a4, h3) <= t3 && lm(s3, u2, m2) <= t3 && !(Vs(a4, 0, 1) && Vs(u2, 0, 1) || Vs(h3, 0, 1) && Vs(m2, 0, 1))) {
          const t4 = mi.distance(e.getCoord2D(a4), s3.getCoord2D(u2)), n5 = mi.distance(e.getCoord2D(h3), s3.getCoord2D(m2));
          if (t4 <= n5) continue;
          if (n5 < t4) {
            d[r2] = d[o2];
            continue;
          }
          continue;
        }
        r2++, d[r2] = d[o2];
      }
    }
    if (d.length = r2 + 1, 1 === d.length && 0 !== d[0] && (n4[0] = n4[d[0]], i[0] = i[d[0]], d[0] = 0), d.length > 2) {
      const t4 = x2.constructEmpty(), r3 = x2.constructEmpty();
      t4.setCoords(n4[d[0]], n4[d.at(-1)]), r3.setCoords(i[d[0]], i[d.at(-1)]);
      let o2 = true;
      for (let e2 = 1, s4 = d.length - 1; e2 < s4; e2++) if (!t4.containsCoordinate(n4[d[e2]]) || !r3.containsCoordinate(i[d[e2]])) {
        o2 = false;
        break;
      }
      if (o2) {
        const n5 = [0.5, 0.2, 0.7, 0.1, 0.3, 0.4, 0.6, 0.8, 0.9];
        for (let i2 = 0; i2 < n5.length; i2++) {
          let a3 = Q(t4.vmin, t4.vmax, n5[i2]);
          const h3 = e.getCoord2D(a3);
          if (!s3.isCloserThanDistance(h3, r3, u)) {
            o2 = false;
            break;
          }
          a3 = Q(r3.vmin, r3.vmax, n5[i2]);
          const m2 = s3.getCoord2D(a3);
          if (!e.isCloserThanDistance(m2, t4, u)) {
            o2 = false;
            break;
          }
        }
      }
      o2 && (d[1] = d.at(-1), d.length = 2);
    }
  }
  if (1 === d.length && t2) {
    const t3 = 0, r2 = 0;
    Ge(e, s3, n4[0], i[0], u, 1, [t3], [r2]) && (d.push(1), n4[1] = t3, i[1] = r2, d.sort(_));
  }
  if (m && 1 === d.length) {
    let t3 = true;
    for (let r2 = 0, o2 = d.length; r2 < o2; r2++) {
      if (Vs(n4[d[r2]], 0, 1) && Vs(i[d[r2]], 0, 1)) {
        if (0 === mi.distance(e.getCoord2D(n4[d[r2]]), s3.getCoord2D(i[d[r2]]))) continue;
      }
      t3 = false;
      break;
    }
    if (t3) return 0;
  }
  let p2 = 0;
  for (let f2 = 0, P4 = d.length; f2 < P4; f2++) {
    if (a2 && a2.push(n4[d[f2]]), h2 && h2.push(i[d[f2]]), o) {
      const t3 = mi.getNAN();
      e.queryCoord2D(n4[d[f2]], t3), o.push(t3);
    }
    p2++;
  }
  return p2;
}
function dm(t2, e, s3, n4, i, r, o, a2, h2) {
  if (Vs(s3, 0, 1) && Vs(n4, 0, 1)) {
    if (0 === mi.distance(t2.getCoord2D(s3), e.getCoord2D(n4))) {
      const u = 1e-12, m = new Ne(), l2 = Number.EPSILON;
      if (t2.queryDerivative(new p(s3, l2), m), m.isTrueZero()) {
        const e2 = 1 === s3 ? -u : u;
        t2.queryDerivative(new p(s3, l2).add(e2), m);
      }
      1 === s3 && m.negateThis();
      const c = new Ne();
      if (e.queryDerivative(new p(n4, l2), c), c.isTrueZero()) {
        const t3 = 1 === s3 ? -u : u;
        e.queryDerivative(new p(n4, l2).add(t3), c);
      }
      1 === n4 && c.negateThis(), m.isZero() || m.normalize(), c.isZero() || c.normalize();
      const g2 = m.dotProduct(c), d = m.crossProduct(c);
      d.scaleError(3);
      const _ = () => {
        if (h2) return 1e-3;
        {
          const s4 = t2.calculateUpperLength2D(), n5 = e.calculateUpperLength2D();
          return Math.min(0.01 * i / Math.min(s4, n5), 1e-10);
        }
      };
      if (g2.ge(I) && (d.isZero() || Math.abs(d.value()) < _())) {
        return ke(t2, e, s3, n4, i, r, o, a2);
      }
    }
  }
  return 0;
}
function _m(t2, e, n4, i, r) {
  let o = -1, a2 = -1, h2 = -1, u = -1;
  {
    const s3 = [0, e], r2 = [e, 0], m = [0, i], l2 = [i, 0];
    for (let e2 = 0; e2 < 2 && -1 === o; ++e2) for (let i2 = 0; i2 < 2; ++i2) if (t2[s3[e2]].equals(n4[m[i2]])) {
      o = s3[e2], a2 = r2[e2], h2 = m[i2], u = l2[i2];
      break;
    }
  }
  if (-1 === o) {
    const s3 = new we();
    s3.setFromPoints(t2, e + 1);
    const o2 = new we();
    return o2.setFromPoints(n4, i + 1), o2.inflate(r), s3.isIntersectingW(o2) ? -1 : 0;
  }
  {
    const m = Yt(e + 1, Number.NaN), l2 = Cr(t2, e + 1, m);
    n(l2 > 1);
    let c = 0, g2 = 0;
    for (let t3 = 0; t3 < l2; ++t3) o === m[t3] && (g2 = t3, c++), a2 === m[t3] && c++;
    if (2 !== c) return -1;
    const d = Yt(i + 1, Number.NaN), _ = Cr(n4, i + 1, d);
    n(_ > 1), c = 0;
    let p2 = 0;
    for (let t3 = 0; t3 < _; ++t3) h2 === d[t3] && (p2 = t3, c++), u === d[t3] && c++;
    if (2 !== c) return -1;
    const f2 = t2[m[(g2 + l2 - 1) % l2]], P4 = t2[m[(g2 + 1) % l2]], y2 = n4[d[(p2 + _ - 1) % _]], x4 = n4[d[(p2 + 1) % _]], C3 = t2[o], v2 = [f2, P4, y2, x4], b2 = [0, 1, 2, 3];
    b2.sort((t3, e2) => mi.compareVectorsOrigin(C3, v2[t3], v2[e2]));
    let S2 = b2[0];
    for (let t3 = 1; t3 < 4; t3++) {
      if (b2[t3] !== (S2 + 1) % 4) return -1;
      S2 = b2[t3];
    }
    {
      const t3 = f2.sub(C3), e2 = x4.sub(C3), s3 = e2.dotProduct(t3);
      if (s3 > 0) {
        const n5 = e2.crossProduct(t3), i2 = Math.abs(Math.atan2(n5, s3)), o2 = i2 * t3.length(), a3 = i2 * e2.length();
        if (o2 <= r || a3 <= r) return -1;
      }
    }
    {
      const t3 = P4.sub(C3), e2 = y2.sub(C3), s3 = e2.dotProduct(t3);
      if (s3 > 0) {
        const n5 = e2.crossProduct(t3), i2 = Math.abs(Math.atan2(n5, s3)), o2 = i2 * t3.length(), a3 = i2 * e2.length();
        if (o2 <= r || a3 <= r) return -1;
      }
    }
    return 1;
  }
}
var pm = z2;
var fm = class _fm extends _s {
  constructor(t2) {
    super(t2 || { XStart: 0, YStart: 0, XEnd: 0, YEnd: 0 });
  }
  assignMove(t2) {
    return this !== t2 && (this.m_description = t2.m_description, t2.m_description = null, this.m_attributes = t2.m_attributes, t2.m_attributes = null, this.m_XStart = t2.m_XStart, t2.m_XStart = Number.NaN, this.m_YStart = t2.m_YStart, this.m_XEnd = t2.m_XEnd, t2.m_XEnd = Number.NaN, this.m_YEnd = t2.m_YEnd), this;
  }
  assignCopy(t2) {
    return this !== t2 && t2.copyTo(this), this;
  }
  calculateLowerLength3D() {
    return n(0), 0;
  }
  calculateUpperLength3D() {
    return n(0), 0;
  }
  changeEndPoints3D(t2, e) {
    n(0);
  }
  getClosestCoordinate3D(t2, e, n4) {
    return n(0), 0;
  }
  getBoundary() {
    return $s2(this);
  }
  getAttributeAsDbl(t2, e, s3) {
    if (0 === e) return 0 === s3 ? Ps(this, t2) : ys(this, t2);
    const n4 = pm.getInterpolation(e), i = this.getStartAttributeAsDbl(e, s3), r = this.getEndAttributeAsDbl(e, s3);
    return It(n4, i, r, t2, pm.getDefaultValue(e));
  }
  constructFromCoords(t2, e, s3, n4) {
    this.dropAllAttributes(), this.setStartXYCoords(t2, e), this.setEndXYCoords(s3, n4);
  }
  construct(t2, e) {
    this.dropAllAttributes(), this.setStartXY(t2), this.setEndXY(e);
  }
  construct3D(t2, e) {
    n(0);
  }
  constructPoint(t2, e) {
    this.assignVertexDescription(t2.getDescription()), this.mergeVertexDescription(e.getDescription()), this.setStart(t2), this.setEnd(e);
  }
  getGeometryType() {
    return _fm.type;
  }
  queryEnvelope(t2) {
    if (4 === t2.m_EnvelopeType) {
      t2.setEmpty(), t2.assignVertexDescription(this.m_description);
      const e = n3.constructEmpty();
      this.queryEnvelope(e), t2.setEnvelope(e);
      for (let s3 = 1, n4 = this.m_description.getAttributeCount(); s3 < n4; s3++) {
        const e2 = this.m_description.getSemantics(s3);
        for (let n5 = 0, i = pm.getComponentCount(e2); s3 < i; s3++) {
          const s4 = this.queryInterval(e2, n5);
          t2.setIntervalEnvelope(e2, n5, s4);
        }
      }
    } else 2 === t2.m_EnvelopeType ? t2.setCoords({ xmin: this.m_XStart, ymin: this.m_YStart, xmax: this.m_XEnd, ymax: this.m_YEnd }) : 3 === t2.m_EnvelopeType ? (t2.setEmpty(), t2.mergeCoords(this.m_XStart, this.m_YStart, es(this, 0, 1, 0)), t2.mergeCoords(this.m_XEnd, this.m_YEnd, es(this, 1, 1, 0))) : z("env type not impl");
  }
  applyTransformation(t2) {
    n(t2 instanceof x3);
    const e = new mi();
    e.x = this.m_XStart, e.y = this.m_YStart, t2.transformInPlace(e), this.m_XStart = e.x, this.m_YStart = e.y, e.x = this.m_XEnd, e.y = this.m_YEnd, t2.transformInPlace(e), this.m_XEnd = e.x, this.m_YEnd = e.y;
  }
  createInstance() {
    return new _fm({ vd: this.m_description });
  }
  calculateLength2D() {
    return Math.sqrt(qs(this));
  }
  calculateLength3D(t2) {
    return n(0), 0;
  }
  changeEndPoints2D(t2, e) {
    this.setStartXY(t2), this.setEndXY(e), this.normalizeAfterEndpointChange();
  }
  queryControlPointsHelper(t2) {
    return n(t2.length >= 2), t2[0] = this.getStartXY(), t2[1] = this.getEndXY(), 2;
  }
  queryCoord2D(t2, e) {
    return ps(this, t2, e);
  }
  queryCoord3D(t2, e) {
    n(0);
  }
  getCoordZ(t2) {
    return xs(this, t2);
  }
  queryCoord2DE(t2, e) {
    vs2(this, t2, e);
  }
  queryCoord2DMP(t2, e) {
    e.assignPoint2D(this.getStartXY());
    const s3 = qe.constructPoint2D(this.getEndXY());
    s3.subThis(e), s3.mulThis(si.constructDouble(t2)), e.addThis(s3);
  }
  getCoordX(t2) {
    return Ps(this, t2);
  }
  getCoordY(t2) {
    return ys(this, t2);
  }
  cut(t2, e, s3) {
    const n4 = new Pm();
    return this.queryCut(t2, e, n4, s3), n4.releaseSegment();
  }
  queryCut(t2, e, s3, n4) {
    const i = s3.createLine();
    n4 && i.assignVertexDescription(this.m_description);
    const r = mi.getNAN();
    if (ps(this, t2, r), i.setStartXYCoords(r.x, r.y), ps(this, e, r), i.setEndXYCoords(r.x, r.y), !n4) for (let o = 1, a2 = this.m_description.getAttributeCount(); o < a2; o++) {
      const s4 = this.m_description.getSemantics(o), n5 = pm.getComponentCount(s4);
      for (let r2 = 0; r2 < n5; r2++) {
        const n6 = this.getAttributeAsDbl(t2, s4, r2);
        i.setStartAttribute(s4, r2, n6);
        const o2 = this.getAttributeAsDbl(e, s4, r2);
        i.setEndAttribute(s4, r2, o2);
      }
    }
  }
  queryDerivative(t2, e) {
    Cs(this, t2, e);
  }
  getClosestCoordinate(t2, e) {
    return mi.getClosestCoordinate(this.getStartXY(), this.getEndXY(), t2, e);
  }
  getClosestCoordinateOnInterval(t2, e, s3 = -1) {
    const n4 = new mi();
    this.queryCoord2D(e.vmin, n4);
    const i = new mi();
    this.queryCoord2D(e.vmax, i);
    const r = mi.getClosestCoordinate(n4, i, t2, false);
    return ms.recalculateParentT(e.vmin, e.vmax, r);
  }
  intersectionOfYMonotonicWithAxisX(t2, e) {
    const s3 = this.m_YEnd - this.m_YStart;
    if (!s3) return t2 === this.m_YEnd ? e : Number.NaN;
    const n4 = (t2 - this.m_YStart) / s3;
    let i = Ps(this, n4);
    return 1 === n4 && (i = this.m_XEnd), i;
  }
  isCurve() {
    return false;
  }
  isMonotoneQuickAndDirty() {
    return true;
  }
  isDegenerate(t2) {
    const e = this.m_XStart - this.m_XEnd, s3 = this.m_YStart - this.m_YEnd;
    return Math.sqrt(e * e + s3 * s3) <= t2;
  }
  isDegenerate3D(t2, e) {
    return n(0), false;
  }
  queryLooseEnvelope(t2) {
    this.queryEnvelope(t2);
  }
  clone(t2) {
    const e = new _fm();
    return this.copyTo(e), e;
  }
  tToLength(t2) {
    return t2 * this.calculateLength2D();
  }
  lengthToT(t2) {
    const e = this.calculateLength2D();
    return 0 !== e ? t2 / e : 0;
  }
  calculateWeightedAreaCentroid2D(t2) {
    const e = new mi();
    return e.setCoords(0, 0), e;
  }
  calculateWeightedCentroid2D() {
    return this.getCoord2D(0.5).mul(this.calculateLength2D());
  }
  getTangent(t2) {
    const e = mi.getNAN();
    return e.setSub(this.getEndXY(), this.getStartXY()), e;
  }
  getDerivative(t2) {
    const e = new mi();
    return e.setSub(this.getEndXY(), this.getStartXY()), e;
  }
  getCurvature(t2) {
    return 0;
  }
  isIntersectingPoint(t2, e, s3) {
    return Ms(this, t2, e, s3) >= 0;
  }
  isIntersectingPoint3D(t2, e, n4, i, r = 1) {
    return n(0), false;
  }
  getYMonotonicParts(t2, e) {
    return 0;
  }
  getMonotonicParts(t2, e) {
    return 0;
  }
  getMonotonicPartParams(t2, s3) {
    return s3 && (t2 < 2 && P(""), s3[0] = 0, s3[1] = 1), 2;
  }
  intersectionWithAxis2D(t2, e, s3, n4) {
    if (t2) {
      const t3 = this.m_YEnd - this.m_YStart;
      if (!t3) return e === this.m_YEnd ? -1 : 0;
      const i = (e - this.m_YStart) / t3;
      return i < 0 || i > 1 ? 0 : (s3 && (s3[0] = Ps(this, i)), n4 && (n4[0] = i), 1);
    }
    {
      const t3 = this.m_XEnd - this.m_XStart;
      if (!t3) return e === this.m_XEnd ? -1 : 0;
      const i = (e - this.m_XStart) / t3;
      return i < 0 || i > 1 ? 0 : (s3 && (s3[0] = ys(this, i)), n4 && (n4[0] = i), 1);
    }
  }
  calculateUpperLength2D() {
    return this.calculateLength2D();
  }
  calculateLowerLength2D() {
    return this.calculateLength2D();
  }
  normalizeAfterEndpointChange() {
    return false;
  }
  queryLooseEnvelopeOnInterval(t2, e) {
    if (2 === e.m_EnvelopeType) {
      let s3 = Us(t2.vmin, 0, 1);
      const n4 = new mi();
      return this.queryCoord2D(s3, n4), e.setCoords({ pt: n4 }), s3 = Us(t2.vmax, 0, 1), this.queryCoord2D(s3, n4), void e.mergeNe(n4);
    }
    z("3d dst not impl");
  }
  orientBottomUp() {
    Es(this);
  }
  isLine() {
    return true;
  }
  isDegenerateToLineHelper(t2) {
    return true;
  }
  copyIgnoreAttributes(t2) {
    t2.setStartXY(this.getStartXY()), t2.setEndXY(this.getEndXY()), t2.normalizeAfterEndpointChange();
  }
  calculateArea2DHelper() {
    return 0;
  }
  absNormXYZ(t2) {
    return Ss2(this, t2);
  }
  absNorm() {
    return this.getStartXY().norm(1) + this.getEndXY().norm(1);
  }
  queryEnvelopeW(t2, e) {
    e.setCoords(this.getCoord2D(t2.vmin)), e.mergeNe(this.getCoord2D(t2.vmax));
  }
  setSegmentFromCoordsForStitcher(t2, e) {
    bs(this, t2[0], t2[e - 1]);
  }
  writeInBufferStream(t2, e) {
    return n(0), 0;
  }
  readFromBufferStream(t2, e) {
    n(0);
  }
  snapControlPoints(t2) {
    return false;
  }
  needsSnapControlPoints(t2) {
    return false;
  }
  calculateSpecialPointsForCracking(t2, e) {
    return 0;
  }
  ensureXYMonotone() {
    return false;
  }
  setCoordsForIntersector(t2, e, s3) {
    bs(this, t2, e);
  }
  static isIntersectingLineLine(t2, e, s3, n4) {
    return Ds(t2, e, s3, n4);
  }
  static isIntersectingLineLine_(t2, e, s3, n4) {
    return Ds(t2, e, s3, n4);
  }
  copyToImpl(t2) {
  }
  reverseImpl() {
  }
  equalsImpl(t2) {
    return true;
  }
  equalsImplTol(t2, e) {
    return true;
  }
  swapImpl(t2) {
  }
  afterCompletedModification() {
  }
  endPointModified() {
  }
  clearEndPointModified() {
  }
  intersect(t2, e, s3, n4, i) {
    return mm(false, this, t2, e, s3, n4, i);
  }
  intersectPoint(t2, e, s3) {
    e.length < 1 && A("");
    const i = Ms(this, t2, s3, false);
    return i >= 0 ? (e && (e[0] = i), 1) : 0;
  }
  isIntersecting(t2, e, s3) {
    return 0 !== om(false, this, t2, e, s3);
  }
};
fm.type = a.enumLine;
var Pm = class _Pm {
  constructor(t2) {
    this.m_seg = null, this.m_curves = null, this.m_lineBuffer = new fm(), this.m_mask = 0, this.m_active = 0, void 0 !== t2 && (t2.copy ? t2.copy.copyTo(this, false) : t2.move ? this.assignMove(t2.move) : t2.segment ? this.copyFrom(t2.segment, !!t2.bIgnoreAttributes) : b("bad constructor params"));
  }
  assignCopy(t2) {
    return t2 instanceof _Pm ? this !== t2 && t2.copyTo(this, false) : this.copyFrom(t2, false), this;
  }
  assignMove(t2) {
    if (t2 instanceof _Pm) {
      if (this === t2) return this;
      this.reset(), 1 & t2.m_mask && (this.m_lineBuffer = t2.m_lineBuffer, t2.m_lineBuffer = null, this.m_mask = 1), this.m_curves = t2.m_curves, this.m_mask = t2.m_mask, this.m_active = t2.m_active, t2.reset(), this.m_seg = this.activeSegment(), t2.m_seg = null;
    } else {
      if (this.m_seg === t2) return this;
      this.create(t2.getGeometryType()), this.m_seg.swap(t2);
    }
    return this;
  }
  activeSegment() {
    switch (this.m_active) {
      case 0:
        return null;
      case 1:
        return this.line();
      case 2:
        return this.arc();
      case 4:
        return this.bezier3();
      case 8:
        return this.bezier2();
      case 16:
        return this.rbezier2();
      default:
        b("");
    }
  }
  get() {
    return this.m_seg;
  }
  reset() {
    1 & this.m_mask && (this.m_lineBuffer = null), this.m_mask > 1 && (this.m_curves = null), this.m_mask = 0, this.m_active = 0;
  }
  empty() {
    return null === this.m_seg;
  }
  copyTo(t2, e) {
    this !== t2 && (this.empty() ? t2.m_seg = null : t2.copyFrom(this.m_seg, e));
  }
  copyToWithZ(t2, e) {
    n(0);
  }
  createImpl(t2) {
    switch (t2) {
      case a.enumLine:
        1 & this.m_mask || (this.m_lineBuffer = new fm(), this.m_mask |= 1, this.m_active = 1);
        break;
      case a.enumEllipticArc:
        2 & this.m_mask || (this.m_curves = new qh(), this.m_mask = 1 & this.m_mask | 2, this.m_active = 2);
        break;
      case a.enumBezier:
        4 & this.m_mask || (this.m_curves = new ra(), this.m_mask = 1 & this.m_mask | 4, this.m_active = 4);
        break;
      case a.enumBezier2:
        8 & this.m_mask || (this.m_curves = new An(), this.m_mask = 1 & this.m_mask | 8, this.m_active = 8);
        break;
      case a.enumRationalBezier2:
        16 & this.m_mask || (this.m_curves = new Dn(), this.m_mask = 1 & this.m_mask | 16, this.m_active = 16);
        break;
      default:
        P("");
    }
  }
  create(t2) {
    t2 === a.enumLine ? this.createLine() : t2 === a.enumEllipticArc ? this.createEllipticArc() : t2 === a.enumBezier ? this.createCubicBezier() : t2 === a.enumRationalBezier2 ? this.createQuadraticRationalBezier() : t2 === a.enumBezier2 ? this.createQuadraticBezier() : P("Segment_buffer.create");
  }
  copyFrom(t2, e) {
    this.m_seg !== t2 && (this.create(t2.getGeometryType()), e ? t2.copyIgnoreAttributes(this.m_seg) : t2.copyTo(this.m_seg));
  }
  copyFromWithZ(t2, e) {
    n(0);
  }
  line() {
    return this.m_lineBuffer;
  }
  arc() {
    return this.m_curves;
  }
  bezier3() {
    return this.m_curves;
  }
  bezier2() {
    return this.m_curves;
  }
  rbezier2() {
    return this.m_curves;
  }
  createLine() {
    return this.createImpl(a.enumLine), this.m_seg = this.line(), this.line();
  }
  createEllipticArc() {
    return this.createImpl(a.enumEllipticArc), this.m_seg = this.arc(), this.arc();
  }
  createCubicBezier() {
    return this.createImpl(a.enumBezier), this.m_seg = this.bezier3(), this.bezier3();
  }
  createQuadraticRationalBezier() {
    return this.createImpl(a.enumRationalBezier2), this.m_seg = this.rbezier2(), this.rbezier2();
  }
  createQuadraticBezier() {
    return this.createImpl(a.enumBezier2), this.m_seg = this.bezier2(), this.bezier2();
  }
  releaseSegment() {
    if (this.m_seg = null, 0 === this.m_active && b("releaseSegment"), 1 & this.m_active) {
      const t3 = this.line();
      return this.m_mask -= 1, this.m_active = 0, this.m_lineBuffer = null, t3;
    }
    let t2;
    return 2 & this.m_active ? t2 = this.arc() : 4 & this.m_active ? t2 = this.bezier3() : 8 & this.m_active ? t2 = this.bezier2() : 16 & this.m_active ? t2 = this.rbezier2() : b("releaseSegment"), this.m_mask -= this.m_active, this.m_active = 0, this.m_curves = null, t2;
  }
  equals(t2) {
    return t2 instanceof _Pm ? this === t2 || (this.empty() ? t2.empty() : !t2.empty() && this.get().equals(t2.get())) : (z("seg comparison not yet impl"), false);
  }
};

export {
  z2 as z,
  X,
  G2 as G,
  U2 as U,
  Q2 as Q,
  j2 as j,
  J2 as J,
  K2 as K,
  $2 as $,
  et,
  st2 as st,
  nt,
  at,
  mt,
  ct2 as ct,
  pt,
  gt2 as gt,
  xt,
  bt,
  Nt,
  It2 as It,
  Ct2 as Ct,
  Tt,
  Rt2 as Rt,
  qt2 as qt,
  wt2 as wt,
  Bt2 as Bt,
  zt2 as zt,
  Lt2 as Lt,
  St,
  Pt2 as Pt,
  Ht,
  Vt,
  kt,
  Mt,
  Ot2 as Ot,
  Yt2 as Yt,
  Xt2 as Xt,
  Gt,
  Ut,
  Zt2 as Zt,
  Qt2 as Qt,
  Jt2 as Jt,
  Kt,
  te,
  se,
  he,
  pe,
  fe,
  De,
  Ne,
  qe,
  Be,
  rs,
  ms,
  gs,
  Es,
  Rs,
  zs,
  Gs2 as Gs,
  Qs2 as Qs,
  Ks,
  $s2 as $s,
  Dn,
  Kn,
  mr,
  gr,
  fr,
  Pr,
  yr,
  xr,
  br,
  Er,
  Ar,
  ra,
  Ph,
  Th,
  Ih,
  Nh,
  qh,
  Bh,
  Gh,
  jh,
  Zh,
  au,
  gu,
  Iu,
  Ru,
  zu,
  Wu,
  om,
  am,
  hm,
  um,
  mm,
  dm,
  fm,
  Pm
};
//# sourceMappingURL=chunk-MKUY72VH.js.map
