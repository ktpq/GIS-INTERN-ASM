import {
  A as A2,
  B,
  C as C2,
  H,
  J as J2,
  w as w2
} from "./chunk-FYIJMRN5.js";
import {
  c as c6,
  m as m4
} from "./chunk-EOYDGCDN.js";
import {
  M as M3,
  w
} from "./chunk-EIUKCZCW.js";
import {
  M as M2
} from "./chunk-MC4L6QKA.js";
import {
  c as c5
} from "./chunk-7XC2ACJQ.js";
import {
  F as F2
} from "./chunk-ES4OWHGF.js";
import {
  J,
  O as O3,
  R,
  U,
  X,
  f as f2,
  m as m3,
  q,
  v as v3,
  y as y3
} from "./chunk-L553KULD.js";
import {
  C,
  c as c4,
  f,
  g,
  k as k2,
  p as p3,
  s as s4,
  z as z2
} from "./chunk-H7U52OP3.js";
import {
  A,
  F,
  G as G2,
  I as I2,
  P,
  _ as _3,
  c as c3,
  o as o2,
  p as p2,
  u as u4,
  x as x2,
  y as y2
} from "./chunk-SGNC5H35.js";
import {
  n as n5,
  o as o3,
  r as r7
} from "./chunk-47CFN4JI.js";
import {
  n as n4,
  r as r6,
  u as u3
} from "./chunk-TVLXQ42J.js";
import {
  O as O2,
  j as j3,
  r as r5
} from "./chunk-OR24MDO6.js";
import {
  n
} from "./chunk-Z3PP4SLW.js";
import {
  n as n3,
  r as r4,
  t,
  u as u2
} from "./chunk-KEY3YQEB.js";
import {
  r
} from "./chunk-PM52Q5K4.js";
import {
  m as m2
} from "./chunk-7V6QSUHG.js";
import {
  j as j2
} from "./chunk-76B4KLE5.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  M,
  h3 as h2,
  l,
  n as n2,
  p2 as p,
  u3 as u,
  x
} from "./chunk-LKZBFHT4.js";
import {
  s as s2
} from "./chunk-6U5MFJUS.js";
import {
  e as e3
} from "./chunk-EQVY5WGD.js";
import {
  I,
  T,
  _ as _2,
  e as e2,
  j,
  k,
  m,
  r as r3,
  v,
  z
} from "./chunk-5GPMO33J.js";
import {
  _
} from "./chunk-X2SNEXCL.js";
import {
  c as c2,
  e as e4,
  i as i2,
  o,
  s as s3,
  v as v2
} from "./chunk-URLT4X25.js";
import {
  G
} from "./chunk-ZTEDLWCB.js";
import {
  r as r2,
  s
} from "./chunk-253Z6EVN.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  e
} from "./chunk-PQFEWUZC.js";
import {
  i
} from "./chunk-TX75HZKJ.js";
import {
  L,
  O,
  h
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var R2 = class {
  constructor(e7) {
    this.spatialReference = e7;
  }
  createVector() {
    return this._tag(n5());
  }
  pointToVector(e7) {
    return this._tag(r7(e7.x, e7.y));
  }
  arrayToVector(e7) {
    return this._tag(r7(e7[0], e7[1]));
  }
  vectorToArray(e7) {
    return [e7[0], e7[1]];
  }
  pointToArray(e7) {
    return [e7.x, e7.y];
  }
  vectorToPoint(e7, r11 = new _()) {
    if (e7) return r11.x = e7[0], r11.y = e7[1], r11.z = void 0, r11.m = void 0, r11.spatialReference = this.spatialReference, r11;
  }
  arrayToPoint(e7, r11 = new _()) {
    return r11.x = e7[0], r11.y = e7[1], r11.z = void 0, r11.m = void 0, r11.spatialReference = this.spatialReference, r11;
  }
  vectorToDehydratedPoint(e7, r11) {
    if (e7) return r11 ??= { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }, r11.x = e7[0], r11.y = e7[1], r11.z = void 0, r11.m = void 0, r11.hasZ = false, r11.hasM = false, r11.spatialReference = this.spatialReference, r11;
  }
  lerp(e7, t7, a4, i4) {
    return _2(i4, e7, t7, a4);
  }
  addDelta(e7, r11, t7) {
    e7[0] += r11, e7[1] += t7;
  }
  distance(r11, t7) {
    return m(r11, t7);
  }
  getZ(e7, r11 = void 0) {
    return r11;
  }
  hasZ() {
    return false;
  }
  getM(e7, r11 = void 0) {
    return r11;
  }
  hasM() {
    return false;
  }
  clone(e7) {
    return this._tag(o3(e7));
  }
  copy(e7, r11) {
    return r3(r11, e7);
  }
  fromXYZ(e7) {
    return this._tag(r7(e7[0], e7[1]));
  }
  toXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], 0);
  }
  arrayToXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], 0);
  }
  pointToXYZ(e7, r11 = n3()) {
    return u4(r11, e7.x, e7.y, 0);
  }
  equals(e7, r11) {
    return T(e7, r11);
  }
  _tag(e7) {
    return e7;
  }
};
var Z = class {
  constructor(e7, r11) {
    this._valueType = e7, this.spatialReference = r11;
  }
  createVector() {
    return this._tag(n3());
  }
  pointToVector(e7) {
    return this._tag(r4(e7.x, e7.y, 0 === this._valueType ? e7.z : e7.m));
  }
  arrayToVector(e7) {
    return this._tag(r4(e7[0], e7[1], e7[2] || 0));
  }
  vectorToArray(e7) {
    return [e7[0], e7[1], e7[2]];
  }
  pointToArray(e7) {
    return 0 === this._valueType ? [e7.x, e7.y, e7.z] : [e7.x, e7.y, e7.m];
  }
  vectorToPoint(e7, r11 = new _()) {
    if (e7) return r11.x = e7[0], r11.y = e7[1], r11.z = 0 === this._valueType ? e7[2] : void 0, r11.m = 1 === this._valueType ? e7[2] : void 0, r11.spatialReference = this.spatialReference, r11;
  }
  arrayToPoint(e7, r11 = new _()) {
    return r11.x = e7[0], r11.y = e7[1], r11.z = 0 === this._valueType ? e7[2] : void 0, r11.m = 1 === this._valueType ? e7[2] : void 0, r11.spatialReference = this.spatialReference, r11;
  }
  vectorToDehydratedPoint(e7, r11) {
    if (!e7) return;
    r11 ??= { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" };
    const t7 = 0 === this._valueType, a4 = 1 === this._valueType;
    return r11.x = e7[0], r11.y = e7[1], r11.z = t7 ? e7[2] : void 0, r11.m = a4 ? e7[2] : void 0, r11.hasZ = t7, r11.hasM = a4, r11.spatialReference = this.spatialReference, r11;
  }
  lerp(e7, r11, t7, a4) {
    return I2(a4, e7, r11, t7);
  }
  addDelta(e7, r11, t7, a4) {
    e7[0] += r11, e7[1] += t7, 0 === this._valueType && (e7[2] += a4);
  }
  distance(r11, t7) {
    return 0 === this._valueType ? p2(r11, t7) : m(X2(r11), X2(t7));
  }
  getZ(e7, r11 = void 0) {
    return 0 === this._valueType ? e7[2] : r11;
  }
  hasZ() {
    return 0 === this._valueType;
  }
  getM(e7, r11 = void 0) {
    return 1 === this._valueType ? e7[2] : r11;
  }
  hasM() {
    return 1 === this._valueType;
  }
  clone(e7) {
    return this._tag(u2(e7));
  }
  copy(e7, r11) {
    return o2(r11, e7);
  }
  fromXYZ(e7, r11 = 0, t7 = 0) {
    return this._tag(r4(e7[0], e7[1], 0 === this._valueType ? e7.length > 2 ? e7[2] : r11 : t7));
  }
  toXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], 0 === this._valueType ? e7[2] : 0);
  }
  arrayToXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], 1 === this._valueType || e7.length < 3 ? 0 : e7[2]);
  }
  pointToXYZ(e7, r11 = n3()) {
    return u4(r11, e7.x, e7.y, 0 === this._valueType ? e7.z ?? 0 : 0);
  }
  equals(e7, r11) {
    return F(e7, r11);
  }
  _tag(e7) {
    return e7;
  }
};
var z3 = class {
  constructor(e7) {
    this.spatialReference = e7;
  }
  createVector() {
    return this._tag(n4());
  }
  pointToVector(e7) {
    return this._tag(r6(e7.x, e7.y, e7.z, e7.m));
  }
  arrayToVector(e7) {
    return this._tag(r6(e7[0], e7[1], e7[2] || 0, e7[3] || 0));
  }
  vectorToArray(e7) {
    return [e7[0], e7[1], e7[2], e7[3]];
  }
  pointToArray(e7) {
    return [e7.x, e7.y, e7.z, e7.m];
  }
  vectorToPoint(e7, r11 = new _()) {
    return r11.x = e7[0], r11.y = e7[1], r11.z = e7[2], r11.m = e7[3], r11.spatialReference = this.spatialReference, r11;
  }
  arrayToPoint(e7, r11 = new _()) {
    return r11.x = e7[0], r11.y = e7[1], r11.z = e7[2], r11.m = e7[3], r11.spatialReference = this.spatialReference, r11;
  }
  vectorToDehydratedPoint(e7, r11) {
    if (e7) return r11 ??= { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }, r11.x = e7[0], r11.y = e7[1], r11.z = e7[2], r11.m = e7[3], r11.hasZ = true, r11.hasM = true, r11.spatialReference = this.spatialReference, r11;
  }
  lerp(e7, r11, t7, a4) {
    return j3(a4, e7, r11, t7);
  }
  addDelta(e7, r11, t7, a4) {
    e7[0] += r11, e7[1] += t7, e7[2] += a4;
  }
  distance(e7, r11) {
    return p2(M4(e7), M4(r11));
  }
  getZ(e7) {
    return e7[2];
  }
  hasZ() {
    return true;
  }
  getM(e7) {
    return e7[3];
  }
  hasM() {
    return true;
  }
  clone(e7) {
    return this._tag(u3(e7));
  }
  copy(e7, r11) {
    return r5(r11, e7);
  }
  fromXYZ(e7, r11 = 0, t7 = 0) {
    return this._tag(r6(e7[0], e7[1], e7.length > 2 ? e7[2] : r11, t7));
  }
  toXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], e7[2]);
  }
  arrayToXYZ(e7, r11 = n3()) {
    return u4(r11, e7[0], e7[1], e7.length < 3 ? 0 : e7[2]);
  }
  pointToXYZ(e7, r11 = n3()) {
    return u4(r11, e7.x, e7.y, e7.z ?? 0);
  }
  equals(e7, r11) {
    return O2(e7, r11);
  }
  _tag(e7) {
    return e7;
  }
};
function M4(e7) {
  return e7;
}
function X2(e7) {
  return e7;
}
function Y(e7, r11, t7) {
  return e7 && r11 ? new z3(t7) : r11 ? new Z(1, t7) : e7 ? new Z(0, t7) : new R2(t7);
}

// node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js
function r8(o6, r11) {
  if (!r11.supported) return;
  let p5 = 1 / 0, e7 = -1 / 0;
  const u5 = r11.upperBoundX - r11.lowerBoundX;
  o6.forEach((o7) => {
    let n11 = o7.pos[0];
    for (; n11 < r11.lowerBoundX; ) n11 += u5;
    for (; n11 > r11.upperBoundX; ) n11 -= u5;
    p5 = Math.min(p5, n11), e7 = Math.max(e7, n11), o7.pos[0] = n11;
  });
  const n10 = e7 - p5;
  u5 - n10 < n10 && o6.forEach((o7) => {
    o7.pos[0] < 0 && (o7.pos[0] += u5);
  });
}
function p4(r11, p5) {
  const e7 = G(r11);
  return 1 === p5 && e7 ? { supported: true, lowerBoundX: e7.valid[0], upperBoundX: e7.valid[1] } : { supported: false, lowerBoundX: null, upperBoundX: null };
}

// node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js
var f3 = class {
  constructor(t7) {
    this.part = t7, this.leftSegment = null, this.rightSegment = null, this.type = "vertex", this.index = null;
  }
  get pos() {
    return this._pos;
  }
  set pos(t7) {
    this._pos = t7, this.part.unnormalizeVertexPositions();
  }
};
var m5 = class {
  constructor(t7, e7, r11) {
    this.part = t7, this.leftVertex = e7, this.rightVertex = r11, this.type = "line", e7.rightSegment = this, r11.leftSegment = this;
  }
  toCurveOrCoordinate() {
    return [...this.rightVertex.pos];
  }
};
var d = class {
  constructor(t7, e7, r11, i4) {
    this.part = t7, this.leftVertex = e7, this.rightVertex = r11, this.curveDefinition = i4, this.type = "bezier", e7.rightSegment = this, r11.leftSegment = this;
  }
  toCurveOrCoordinate() {
    return { b: [[...this.rightVertex.pos], [...this.curveDefinition.controlPoint1], [...this.curveDefinition.controlPoint2]] };
  }
};
var v4 = class {
  constructor(t7, e7, r11, i4) {
    this.part = t7, this.leftVertex = e7, this.rightVertex = r11, this.curveDefinition = i4, this.type = "circular-arc", e7.rightSegment = this, r11.leftSegment = this;
  }
  toCurveOrCoordinate() {
    const t7 = this.rightVertex.pos, { interiorPoint: e7 } = this.curveDefinition;
    return { c: [[...t7], [...e7]] };
  }
};
var y4 = class {
  constructor(t7, e7, r11, i4) {
    this.part = t7, this.leftVertex = e7, this.rightVertex = r11, this.curveDefinition = i4, this.type = "elliptic-arc-4", e7.rightSegment = this, r11.leftSegment = this;
  }
  toCurveOrCoordinate() {
    const t7 = this.rightVertex.pos, { centerPoint: e7, sweep: r11, orientation: i4 } = this.curveDefinition;
    return { a: [[...t7], [...e7], r11, i4] };
  }
};
var x3 = class {
  constructor(t7, e7, r11, i4) {
    this.part = t7, this.leftVertex = e7, this.rightVertex = r11, this.curveDefinition = i4, this.type = "elliptic-arc-7", e7.rightSegment = this, r11.leftSegment = this;
  }
  toCurveOrCoordinate() {
    const t7 = this.rightVertex.pos, { centerPoint: e7, sweep: r11, orientation: i4, rotation: s9, semiMajorAxisLength: n10, minorMajorAxisRatio: o6 } = this.curveDefinition;
    return { a: [[...t7], e7, r11, i4, s9, n10, o6] };
  }
};
var V = class {
  constructor(t7, e7, r11 = false) {
    this._spatialReference = t7, this._viewingMode = e7, this.autoClose = r11, this.vertices = [], this.segments = [], this.index = null;
  }
  unnormalizeVertexPositions() {
    this.vertices.length <= 1 || r8(this.vertices, p4(this._spatialReference, this._viewingMode));
  }
  updateVertexIndex(t7, e7) {
    const { vertices: r11 } = this;
    if (0 === r11.length) return;
    const i4 = r11[0];
    let s9 = null, n10 = t7, o6 = e7;
    do {
      s9 = n10, s9.index = o6++, n10 = s9.rightSegment ? s9.rightSegment.rightVertex : null;
    } while (null != n10 && n10 !== i4);
    s9.leftSegment && s9 !== r11[r11.length - 1] && this.swapVertices(r11.indexOf(s9), r11.length - 1);
  }
  getFirstVertex() {
    return this.vertices.at(0);
  }
  getLastVertex() {
    return this.vertices.at(-1);
  }
  isClosed() {
    return null != this.getFirstVertex()?.leftSegment;
  }
  swapVertices(t7, e7) {
    const { vertices: r11 } = this, i4 = r11[t7];
    r11[t7] = r11[e7], r11[e7] = i4;
  }
  *iterateVertices() {
    const t7 = this.getFirstVertex();
    let e7 = t7;
    if (e7) do {
      yield e7, e7 = e7.rightSegment?.rightVertex;
    } while (e7 !== t7 && null != e7);
  }
};
var w3 = class _w extends r {
  constructor(t7, e7) {
    super(), this.type = t7, this.coordinateHelper = e7, this._geometry = null, this._dirty = true, this.parts = [];
  }
  get geometry() {
    if (this._dirty) {
      switch (this.type) {
        case "point":
          this._geometry = this._toPoint();
          break;
        case "multipoint":
          this._geometry = this._toMultipoint();
          break;
        case "polyline":
          this._geometry = this._toPolyline();
          break;
        case "polygon":
          this._geometry = this._toPolygon();
          break;
        case "mesh":
          break;
        default:
          this.type;
      }
      this._dirty = false;
    }
    return this._geometry;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
  get allVerticesUnordered() {
    return Array.from(this.iterateVerticesUnordered());
  }
  *iterateVerticesUnordered() {
    for (const t7 of this.parts) for (const e7 of t7.vertices) yield e7;
  }
  get allVertices() {
    return Array.from(this.iterateVertices());
  }
  *iterateVertices() {
    for (const t7 of this.parts) yield* t7.iterateVertices();
  }
  notifyChanges(t7) {
    this._dirty = true, this.emit("change", t7);
  }
  getPartialGeometry(t7, e7, r11) {
    const { parts: i4, hasCurves: s9 } = S(this, { startingVertex: t7, endingVertexInclusive: e7, geometryType: r11 });
    return C3(i4, s9, r11, this.coordinateHelper);
  }
  _toPoint() {
    const { parts: t7, coordinateHelper: e7 } = this;
    return t7.at(0)?.vertices.length ? e7.vectorToPoint(t7[0].vertices[0].pos) : null;
  }
  _toMultipoint() {
    const t7 = [], { coordinateHelper: e7, parts: r11, spatialReference: s9 } = this;
    for (const i4 of r11) {
      const r12 = i4.getFirstVertex();
      r12 && t7.push(e7.arrayToVector(r12.pos));
    }
    return new m2({ hasM: e7.hasM(), hasZ: e7.hasZ(), spatialReference: s9, points: t7 });
  }
  _toPolyline() {
    const t7 = [];
    let e7 = false;
    for (const r11 of this.parts) {
      if (r11.vertices.length < 1) continue;
      const i4 = r11.vertices[0], s9 = [];
      s9.push(i4.pos);
      let n10 = i4.rightSegment;
      for (; n10; ) e7 ||= "line" !== n10.type, s9.push(n10.toCurveOrCoordinate()), n10 = n10.rightVertex.rightSegment;
      t7.push(s9);
    }
    return new y({ paths: e7 ? void 0 : t7, curvePaths: e7 ? t7 : void 0, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  _toPolygon() {
    const e7 = [];
    let r11 = false;
    for (const i4 of this.parts) {
      if (i4.vertices.length < 1) continue;
      const s9 = i4.vertices[0], n10 = [];
      n10.push(s9.pos);
      let a4 = s9.rightSegment;
      for (; a4 && (r11 ||= "line" !== a4.type, n10.push(a4.toCurveOrCoordinate()), a4 = a4.rightVertex.rightSegment, a4?.leftVertex !== s9); ) ;
      if (i4.autoClose && n10.length > 1) {
        const e8 = n10.at(-1), r12 = v2(n10[0]), i5 = v2(e8);
        2 === n10.length && e4(e8) || h(r12, i5) || n10.push(r12);
      }
      e7.push(n10);
    }
    return new j2({ rings: r11 ? void 0 : e7, curveRings: r11 ? e7 : void 0, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  static fromGeometry(t7, e7, r11) {
    const i4 = t7.spatialReference, s9 = Y(t7.hasZ, t7.hasM, i4), n10 = new _w(t7.type, s9);
    switch (t7.type) {
      case "polygon":
        R3(n10, t7, e7, r11?.allowCurves ?? false);
        break;
      case "polyline":
        M5(n10, t7, e7, r11?.allowCurves ?? false);
        break;
      case "point":
        b2(n10, t7, e7);
        break;
      case "multipoint":
        H2(n10, t7, e7);
        break;
      case "mesh":
        b2(n10, t7.origin, e7), n10._geometry = t7, n10._dirty = false;
    }
    return n10;
  }
};
function P2(t7, e7, r11, i4) {
  const s9 = new f3(t7);
  t7.vertices.push(s9);
  const n10 = v2(i4);
  return s9.pos = e7.arrayToVector(n10), s9.index = t7.vertices.length - 1, r11 && t7.segments.push(_4(t7, r11, s9, i4)), s9;
}
function _4(t7, e7, r11, i4) {
  if (e4(i4)) return new m5(t7, e7, r11);
  if (i2(i4)) {
    const [, s10, n11] = i4.b;
    return new d(t7, e7, r11, { controlPoint1: [...s10], controlPoint2: [...n11] });
  }
  if (c2(i4)) {
    const [, s10] = i4.c;
    return new v4(t7, e7, r11, { interiorPoint: [...s10] });
  }
  if (o(i4)) {
    const [, s10, n11, o7] = i4.a;
    return new y4(t7, e7, r11, { centerPoint: [...s10], sweep: n11, orientation: o7 });
  }
  const [, s9, n10, o6, p5, g2, u5] = i4.a;
  return new x3(t7, e7, r11, { centerPoint: [...s9], sweep: n10, orientation: o6, rotation: p5, semiMajorAxisLength: g2, minorMajorAxisRatio: u5 });
}
function C3(t7, e7, r11, h3) {
  const { spatialReference: a4 } = h3;
  if ("point" === r11) {
    const e8 = t7.at(0)?.at(0);
    return e8 ? h3.arrayToPoint(v2(e8)) : null;
  }
  return "polygon" === r11 ? new j2({ rings: e7 ? void 0 : t7, curveRings: e7 ? t7 : void 0, spatialReference: a4, hasZ: h3.hasZ(), hasM: h3.hasM() }) : "multipoint" === r11 ? new m2({ spatialReference: a4, points: t7.flatMap((t8) => t8.map((t9) => v2(t9))), hasM: h3.hasM(), hasZ: h3.hasZ() }) : new y({ paths: e7 ? void 0 : t7, curvePaths: e7 ? t7 : void 0, spatialReference: a4, hasZ: h3.hasZ(), hasM: h3.hasM() });
}
function S(r11, i4) {
  const s9 = "polygon" === (i4?.geometryType ?? r11.type), n10 = [];
  let a4 = false, c7 = false, l4 = false;
  for (const p5 of r11.parts) {
    let r12 = null;
    if (l4) break;
    if (p5.vertices.length < 1) continue;
    if (i4?.startingVertex) {
      if (p5 !== i4.startingVertex.part && !c7) continue;
      c7 = true;
    }
    const g2 = p5 === i4?.startingVertex?.part ? i4.startingVertex : p5.vertices.at(0), u5 = [];
    if (O(u5, g2?.pos), g2 === i4?.endingVertexInclusive) {
      l4 = true, r12 = g2, n10.push(u5);
      break;
    }
    let f4 = g2?.rightSegment;
    for (; f4; ) {
      if (a4 ||= "line" !== f4.type, u5.push(f4.toCurveOrCoordinate()), r12 = f4.rightVertex, f4.rightVertex === i4?.endingVertexInclusive) {
        l4 = true;
        break;
      }
      if (f4 = f4.rightVertex.rightSegment, f4?.leftVertex === g2) break;
    }
    const m8 = u5.at(-1), d2 = p5.getFirstVertex(), v6 = p5.getLastVertex();
    s9 && p5.autoClose && m8 && r12 === v6 && g2 === d2 && (u5.length > 2 || 2 === u5.length && !e4(m8)) && g2?.pos && !h(v2(m8), g2.pos) && u5.push([...g2.pos]), n10.push(u5);
  }
  return { parts: n10, hasCurves: a4 };
}
function R3(e7, r11, i4, s9) {
  const n10 = r11.spatialReference, h3 = e7.coordinateHelper, { rings: a4, curveRings: c7 } = r11, l4 = c7 && s9 ? c7 : a4;
  for (let p5 = 0; p5 < l4.length; ++p5) {
    const r12 = l4[p5], s10 = new V(n10, i4);
    if (s10.index = p5, e7.parts.push(s10), r12.length < 1) continue;
    let a5 = null, c8 = null;
    for (let t7 = 0; t7 < r12.length - 1; ++t7) c8 = P2(s10, h3, c8, r12[t7]), a5 ??= c8;
    r12.length > 1 && h(v2(r12[r12.length - 1]), a5?.pos) ? c8 && a5 && s10.segments.push(_4(s10, c8, a5, r12[r12.length - 1])) : c8 = P2(s10, h3, c8, r12[r12.length - 1]);
  }
}
function M5(t7, e7, r11, i4) {
  const s9 = e7.spatialReference, n10 = t7.coordinateHelper, { curvePaths: o6, paths: h3 } = e7, a4 = o6 && i4 ? o6 : h3;
  for (let c7 = 0; c7 < a4.length; ++c7) {
    const e8 = a4[c7], i5 = new V(s9, r11);
    if (i5.index = c7, t7.parts.push(i5), e8.length < 1) continue;
    let o7 = null;
    for (let t8 = 0; t8 < e8.length; ++t8) o7 = P2(i5, n10, o7, e8[t8]);
  }
}
function b2(t7, e7, r11) {
  const i4 = e7.spatialReference, s9 = t7.coordinateHelper, n10 = new V(i4, r11);
  n10.index = 0;
  const o6 = new f3(n10);
  o6.index = 0, o6.pos = s9.pointToVector(e7), n10.vertices.push(o6), t7.parts.push(n10);
}
function H2(t7, e7, r11) {
  const i4 = e7.spatialReference, { coordinateHelper: s9, parts: n10 } = t7, o6 = e7.points.map((t8) => s9.arrayToVector(t8));
  for (let h3 = 0; h3 < o6.length; h3++) {
    const t8 = new V(i4, r11);
    t8.index = h3, n10.push(t8);
    const e8 = new f3(t8);
    e8.pos = o6[h3], e8.index = 0, t8.vertices.push(e8);
  }
}
function k3(t7) {
  return "mesh" === t7.type;
}
function Z2(t7, e7) {
  if (t7.type !== e7.type) return false;
  if (t7.parts.length !== e7.parts.length) return false;
  for (let s9 = 0; s9 < t7.parts.length; s9++) {
    const r12 = t7.parts[s9], i5 = e7.parts[s9];
    if (r12.vertices.length !== i5.vertices.length) return false;
  }
  const r11 = t7.allVertices, i4 = e7.allVertices;
  for (let s9 = 0; s9 < r11.length; s9++) {
    const t8 = r11[s9].leftSegment?.type, e8 = i4[s9].leftSegment?.type;
    if (t8 !== e8) return false;
  }
  return true;
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/AppendVertex.js
var r9 = class {
  constructor(e7, t7, i4) {
    this._editGeometry = e7, this._part = t7, this._posOrCurveDef = i4, this._addedVertex = null, this._originalSegment = null, this._left = null, this._right = null, this._partAdded = false;
  }
  apply() {
    let r11 = "redo";
    const { _part: d2, _editGeometry: n10, _posOrCurveDef: l4 } = this;
    if (null == this._addedVertex && (r11 = "apply", this._addedVertex = new f3(d2)), !n10.parts.includes(d2)) {
      this._partAdded = true;
      const e7 = n10.parts.at(-1)?.index ?? -1;
      d2.index = e7 + 1, n10.parts.push(d2);
    }
    const h3 = d2.getLastVertex(), a4 = n10.coordinateHelper.arrayToVector(v2(l4));
    if (null == h3) d2.vertices.push(this._addedVertex), this._addedVertex.pos = a4, this._addedVertex.index = 0;
    else {
      let e7 = null;
      h3.rightSegment && (this._originalSegment = h3.rightSegment, e7 = this._originalSegment.rightVertex, d2.segments.splice(d2.segments.indexOf(this._originalSegment), 1)), d2.vertices.push(this._addedVertex), this._addedVertex.pos = a4, this._left ??= _4(d2, h3, this._addedVertex, l4), d2.segments.push(this._left), h3.rightSegment = this._left, null != this._originalSegment && null != e7 && (this._right ??= new m5(this._part, this._addedVertex, e7), d2.segments.push(this._right), e7.leftSegment = this._right), d2.updateVertexIndex(this._addedVertex, h3.index + 1);
    }
    this._editGeometry.notifyChanges({ operation: r11, addedVertices: [this._addedVertex], addedParts: this._partAdded ? [d2] : void 0 });
  }
  undo() {
    const { _addedVertex: e7, _part: t7, _left: i4, _right: s9, _originalSegment: r11 } = this;
    null != e7 && (t7.vertices.splice(t7.vertices.indexOf(e7), 1), null != i4 && (t7.segments.splice(t7.segments.indexOf(i4), 1), i4.leftVertex.rightSegment = null), null != s9 && (t7.segments.splice(t7.segments.indexOf(s9), 1), s9.rightVertex.leftSegment = null), null != r11 && (t7.segments.push(r11), r11.leftVertex.rightSegment = r11, r11.rightVertex.leftSegment = r11), null != i4 ? t7.updateVertexIndex(i4.leftVertex, i4.leftVertex.index) : t7.updateVertexIndex(e7, 0), this._partAdded && this._editGeometry.parts.splice(this._editGeometry.parts.indexOf(this._part)), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [e7], removedParts: this._partAdded ? [t7] : void 0 }));
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/UpdateVertices.js
var t2 = class _t {
  constructor(t7, e7, i4) {
    this._editGeometry = t7, this._vertices = e7, this.operation = i4, this._undone = false;
  }
  _notifyChanges(t7) {
    this._editGeometry.parts.forEach((t8) => t8.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: t7, updatedVertices: this._vertices });
  }
  apply() {
    this._vertices.forEach((t7) => this.operation.apply(t7)), this._notifyChanges(this._undone ? "redo" : "apply");
  }
  undo() {
    this._vertices.forEach((t7) => this.operation.undo(t7)), this._undone = true, this._notifyChanges("undo");
  }
  canAccumulate(t7) {
    if (this._undone || t7._vertices.length !== this._vertices.length) return false;
    for (let e7 = 0; e7 < t7._vertices.length; ++e7) if (t7._vertices[e7] !== this._vertices[e7]) return false;
    return this.operation.canAccumulate(t7.operation);
  }
  accumulate(e7) {
    return !!(e7 instanceof _t && this.canAccumulate(e7)) && (this._vertices.forEach((t7) => this.operation.accumulate(t7, e7.operation)), this.operation.accumulateParams(e7.operation), this._notifyChanges("apply"), true);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/RemoveVertices.js
var t3 = class {
  constructor(e7, t7, r11 = 0) {
    this._editGeometry = e7, this._vertices = t7, this._minNumberOfVertices = r11, this.removedVertices = null;
  }
  apply() {
    let e7 = "redo";
    if (null == this.removedVertices) {
      const t7 = this.removedVertices = [];
      this._vertices.forEach((e8) => {
        const r11 = this._removeVertex(e8);
        null != r11 && t7.push(r11);
      }), e7 = "apply";
    } else this.removedVertices.forEach((e8) => {
      this._removeVertex(e8.removedVertex);
    });
    this._editGeometry.notifyChanges({ operation: e7, removedVertices: this._vertices });
  }
  undo() {
    this.removedVertices?.forEach((e7) => {
      this._undoRemoveVertex(e7);
    }), this._editGeometry.notifyChanges({ operation: "undo", addedVertices: this._vertices });
  }
  accumulate() {
    return false;
  }
  _removeVertex(t7) {
    const r11 = t7.part;
    if (r11.vertices.length <= this._minNumberOfVertices) return null;
    const s9 = { removedVertex: t7, createdSegment: null }, i4 = t7.leftSegment, n10 = t7.rightSegment;
    return r11.vertices.splice(r11.vertices.indexOf(t7), 1), i4 && (r11.segments.splice(r11.segments.indexOf(i4), 1), i4.leftVertex.rightSegment = null), n10 && (r11.segments.splice(r11.segments.indexOf(n10), 1), n10.rightVertex.leftSegment = null), 0 === t7.index && n10 && this._vertices.length > 0 && r11.swapVertices(r11.vertices.indexOf(n10.rightVertex), 0), i4 && n10 && (s9.createdSegment = new m5(r11, i4.leftVertex, n10.rightVertex), r11.segments.push(s9.createdSegment)), n10 && r11.updateVertexIndex(n10.rightVertex, n10.rightVertex.index - 1), s9;
  }
  _undoRemoveVertex(e7) {
    const t7 = e7.removedVertex, r11 = e7.removedVertex.part, s9 = t7.leftSegment, i4 = t7.rightSegment;
    e7.createdSegment && r11.segments.splice(r11.segments.indexOf(e7.createdSegment), 1), r11.vertices.push(t7), s9 && (r11.segments.push(s9), s9.leftVertex.rightSegment = s9), i4 && (r11.segments.push(i4), i4.rightVertex.leftSegment = i4), r11.updateVertexIndex(t7, t7.index);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitSegment.js
var n6 = class {
  constructor(e7, t7, r11) {
    this._editGeometry = e7, this._segment = t7, this._t = r11, this.createdVertex = null, this._createdLeftEdge = null, this._createdRightEdge = null;
  }
  apply() {
    let n10 = "redo";
    const g2 = this._editGeometry.coordinateHelper, l4 = this._segment, p5 = l4.part, u5 = l4.leftVertex, m8 = l4.rightVertex;
    p5.segments.splice(p5.segments.indexOf(l4), 1);
    const f4 = [];
    switch (null == this.createdVertex && (n10 = "apply", this.createdVertex = new f3(p5)), l4.type) {
      case "line":
        f4.push(g2.lerp(u5.pos, m8.pos, this._t, g2.createVector()));
        break;
      case "bezier": {
        const t7 = l4.toCurveOrCoordinate();
        f4.push(...M(u5.pos, t7, this._t));
        break;
      }
      case "circular-arc": {
        const e7 = l4.toCurveOrCoordinate(), s9 = l(u5.pos, e7);
        f4.push(...u(s9, e7, this._t));
        break;
      }
      case "elliptic-arc-4": {
        const e7 = l4.toCurveOrCoordinate(), t7 = h2(u5.pos, e7);
        f4.push(...n2(t7, e7, this._t));
        break;
      }
      case "elliptic-arc-7": {
        const e7 = l4.toCurveOrCoordinate(), t7 = p(u5.pos, e7);
        f4.push(...x(t7, e7, this._t));
        break;
      }
    }
    p5.vertices.push(this.createdVertex), this.createdVertex.pos = g2.arrayToVector(v2(f4[0])), f4.length > 1 && (m8.pos = g2.arrayToVector(v2(f4[1]))), null == this._createdLeftEdge && (this._createdLeftEdge = _4(p5, u5, this.createdVertex, f4[0])), this._createdLeftEdge.leftVertex.leftSegment ? p5.segments.push(this._createdLeftEdge) : p5.segments.unshift(this._createdLeftEdge), u5.rightSegment = this._createdLeftEdge, null == this._createdRightEdge && (this._createdRightEdge = _4(p5, this.createdVertex, m8, f4.at(1) ?? m8.pos)), p5.segments.push(this._createdRightEdge), m8.leftSegment = this._createdRightEdge, p5.updateVertexIndex(this.createdVertex, u5.index + 1), this._editGeometry.notifyChanges({ operation: n10, addedVertices: [this.createdVertex] });
  }
  undo() {
    if (null == this.createdVertex || null == this._createdLeftEdge || null == this._createdRightEdge) return null;
    const e7 = this._segment, t7 = e7.part, { leftSegment: r11, rightSegment: s9 } = this.createdVertex, i4 = r11?.leftVertex, c7 = s9?.rightVertex;
    t7.vertices.splice(t7.vertices.indexOf(this.createdVertex), 1), t7.segments.splice(t7.segments.indexOf(this._createdLeftEdge), 1), t7.segments.splice(t7.segments.indexOf(this._createdRightEdge), 1), e7.leftVertex.leftSegment ? t7.segments.push(e7) : t7.segments.unshift(e7), i4 && (i4.rightSegment = e7), c7 && (c7.leftSegment = e7), i4 && t7.updateVertexIndex(i4, i4.index), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this.createdVertex] });
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js
var a2 = class _a {
  constructor(e7, t7, i4) {
    this._editGeometry = e7, this._vertex = t7, this._pos = i4;
  }
  apply() {
    const e7 = null == this._originalPosition;
    e7 && (this._originalPosition = this._vertex.leftSegment?.toCurveOrCoordinate() ?? this._vertex.pos), this._apply(e7 ? "apply" : "redo");
  }
  undo() {
    const t7 = this._vertex.leftSegment;
    t7 && this._originalPosition && this._replaceEdge(t7, this._vertex, this._originalPosition), this._vertex.pos = this._editGeometry.coordinateHelper.arrayToVector(v2(this._originalPosition)), this._editGeometry.notifyChanges({ operation: "undo", updatedVertices: [this._vertex] });
  }
  accumulate(e7) {
    return e7 instanceof _a && e7._vertex === this._vertex && (this._pos = e7._pos, this._apply("apply"), true);
  }
  _apply(n10) {
    this._vertex.pos = this._editGeometry.coordinateHelper.arrayToVector(v2(this._pos));
    const a4 = this._pos, c7 = this._vertex.leftSegment;
    switch (c7?.type) {
      case void 0:
        break;
      case "line":
        e4(a4) || this._replaceEdge(c7, this._vertex, a4);
        break;
      case "bezier":
        i2(a4) ? (c7.curveDefinition.controlPoint1 = a4.b[1], c7.curveDefinition.controlPoint2 = a4.b[2]) : this._replaceEdge(c7, this._vertex, a4);
        break;
      case "circular-arc":
        c2(a4) ? c7.curveDefinition.interiorPoint = a4.c[1] : this._replaceEdge(c7, this._vertex, a4);
        break;
      case "elliptic-arc-4":
        o(a4) ? (c7.curveDefinition.centerPoint = a4.a[1], c7.curveDefinition.sweep = a4.a[2], c7.curveDefinition.orientation = a4.a[3]) : this._replaceEdge(c7, this._vertex, a4);
        break;
      case "elliptic-arc-7":
        s3(a4) ? (c7.curveDefinition.centerPoint = a4.a[1], c7.curveDefinition.sweep = a4.a[2], c7.curveDefinition.orientation = a4.a[3], c7.curveDefinition.rotation = a4.a[4], c7.curveDefinition.semiMajorAxisLength = a4.a[5], c7.curveDefinition.minorMajorAxisRatio = a4.a[6]) : this._replaceEdge(c7, this._vertex, a4);
    }
    this._editGeometry.parts.forEach((e7) => e7.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: n10, updatedVertices: [this._vertex] });
  }
  _replaceEdge(e7, t7, i4) {
    const r11 = this._vertex.part, o6 = e7 ? r11.segments.indexOf(e7) : -1;
    if (o6 > -1 && e7.leftVertex) {
      const s9 = _4(r11, e7.leftVertex, t7, i4);
      this._vertex.part.segments.splice(o6, 1, s9);
    }
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/ClosePart.js
var r10 = class {
  constructor(e7, t7) {
    this._editGeometry = e7, this._part = t7, this._createdSegment = null;
  }
  apply() {
    let e7 = "redo";
    const { _part: r11 } = this;
    if (null == this._createdSegment) {
      e7 = "apply";
      const n10 = r11.getFirstVertex(), i4 = r11.getLastVertex();
      if (r11.isClosed() || r11.vertices.length < 2 || null == n10 || null == i4) return;
      if (2 === r11.vertices.length && "line" === i4.leftSegment?.type) return;
      this._createdSegment = new m5(this._part, i4, n10);
    }
    this._createdSegment.leftVertex.rightSegment = this._createdSegment, this._createdSegment.rightVertex.leftSegment = this._createdSegment, r11.segments.push(this._createdSegment), this._editGeometry.notifyChanges({ operation: e7 });
  }
  undo() {
    const { _part: t7, _createdSegment: r11, _editGeometry: n10 } = this;
    null != r11 && (L(t7.segments, r11), r11.leftVertex.rightSegment = null, r11.rightVertex.leftSegment = null, n10.notifyChanges({ operation: "undo" }));
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/AddOrUpdatePart.js
var s5 = class _s {
  constructor(t7, e7, i4, s9) {
    this._editGeometry = t7, this._positions = e7, this._part = i4, this._viewingMode = s9, this._addedPart = null, this._originalPositions = null, this._hasApplied = false;
  }
  get part() {
    return this._addedPart;
  }
  apply() {
    const s9 = this._editGeometry, r11 = s9.parts, o6 = this._part;
    if (!this._hasApplied && o6 && r11.includes(o6)) {
      const e7 = o6.getFirstVertex(), i4 = o6.getLastVertex();
      this._originalPositions = S(s9, { startingVertex: e7, endingVertexInclusive: i4 }).parts[0];
    }
    const n10 = this._addedPart ?? this._part ?? (this._addedPart = new V(s9.spatialReference, this._viewingMode, "polygon" === s9.type));
    r11.includes(n10) || (r11.push(n10), n10.index = r11.length - 1);
    const a4 = n10.vertices.slice(), d2 = [];
    n10.segments.length = 0, n10.vertices.length = 0;
    let p5 = null;
    for (const t7 of this._positions) p5 = P2(n10, s9.coordinateHelper, p5, t7), d2.push(p5);
    this._hasApplied = true, s9.notifyChanges({ operation: this._hasApplied ? "redo" : "apply", addedVertices: d2, removedVertices: a4, addedParts: this._addedPart ? [this._addedPart] : void 0 });
  }
  undo() {
    if (!this._hasApplied) return;
    const { _editGeometry: t7, _addedPart: e7 } = this;
    if (e7) {
      const i4 = t7.parts.indexOf(e7);
      if (-1 !== i4) return t7.parts.splice(i4, 1), void t7.notifyChanges({ operation: "undo", removedVertices: e7.vertices.slice(), removedParts: [e7] });
    }
    const s9 = this._part;
    if (!s9 || !t7.parts.includes(s9) || !this._originalPositions) return;
    const r11 = Array.from(s9.iterateVertices()), o6 = [];
    s9.vertices.length = 0, s9.segments.length = 0;
    let n10 = null;
    for (const a4 of this._positions) n10 = P2(s9, t7.coordinateHelper, n10, a4), o6.push(n10);
    t7.notifyChanges({ operation: "undo", addedVertices: o6, removedVertices: r11 });
  }
  accumulate(t7) {
    return t7 instanceof _s && null != t7._part && (t7._part === this._addedPart || t7._part === this._part) && (this._positions = t7._positions, this.apply(), true);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveMesh.js
var t4 = class _t {
  constructor(t7, e7, i4, s9) {
    this._editGeometry = t7, this.dx = e7, this.dy = i4, this.dz = s9, this._firstTime = true;
  }
  apply() {
    const t7 = this._firstTime ? "apply" : "redo";
    this._firstTime = false, this._apply(t7, this.dx, this.dy, this.dz);
  }
  undo() {
    this._apply("undo", -this.dx, -this.dy, -this.dz);
  }
  accumulate(e7) {
    const i4 = this._editGeometry.geometry;
    return e7 instanceof _t && e7._editGeometry.geometry === i4 && (this._apply("apply", e7.dx, e7.dy, e7.dz), this.dx += e7.dx, this.dy += e7.dy, this.dz += e7.dz, true);
  }
  _apply(t7, e7, i4, s9) {
    const o6 = this._editGeometry.geometry;
    o6.offset(e7, i4, s9);
    const d2 = this._editGeometry.parts[0].getFirstVertex();
    if (!d2) return;
    const r11 = this._editGeometry.coordinateHelper;
    d2.pos = r11.pointToVector(o6.origin), this._editGeometry.notifyChanges({ operation: t7, updatedVertices: [d2] });
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js
var t5 = class _t {
  constructor(t7, e7, i4, c7) {
    this._helper = t7, this.dx = e7, this.dy = i4, this.dz = c7;
  }
  _move(t7, i4, c7, s9) {
    this._helper.addDelta(t7.pos, i4, c7, s9), e5(t7.leftSegment, i4, c7);
  }
  apply(t7) {
    this._move(t7, this.dx, this.dy, this.dz);
  }
  undo(t7) {
    this._move(t7, -this.dx, -this.dy, -this.dz);
  }
  canAccumulate(e7) {
    return e7 instanceof _t;
  }
  accumulate(t7, e7) {
    this._move(t7, e7.dx, e7.dy, e7.dz);
  }
  accumulateParams(t7) {
    this.dx += t7.dx, this.dy += t7.dy, this.dz += t7.dz;
  }
};
function e5(t7, e7, i4) {
  switch (t7?.type) {
    case null:
    case void 0:
    case "line":
      return;
    case "bezier": {
      const { controlPoint1: c7, controlPoint2: s9 } = t7.curveDefinition;
      c7[0] += e7, c7[1] += i4, s9[0] += e7, s9[1] += i4;
      break;
    }
    case "circular-arc": {
      const { interiorPoint: c7 } = t7.curveDefinition;
      c7[0] += e7, c7[1] += i4;
      break;
    }
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      const { centerPoint: c7 } = t7.curveDefinition;
      c7[0] += e7, c7[1] += i4;
    }
  }
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js
var M6 = class _M {
  get plane() {
    return this._plane;
  }
  get requiresSplitEdgeLeft() {
    return !this._left.isOriginalDirection;
  }
  get requiresSplitEdgeRight() {
    return !this._right.isOriginalDirection;
  }
  get edgeDirection() {
    return this._edgeDirection;
  }
  constructor(t7, i4, e7, s9 = 0, n10 = 0) {
    this._helper = t7, this._planeType = i4, this._edge = e7, this.distance = s9, this._plane = v3(), this._offsetPlane = v3(), this._minDistance = -1 / 0, this._maxDistance = 1 / 0, this._selectedArrow = 1, 0 === n10 && this._initialize();
  }
  _initialize() {
    this._initializeNeighbors(), this._initializePlane(), this._initializeDistanceConstraints();
  }
  _initializeNeighbors() {
    const t7 = this._toXYZ(this._edge.leftVertex.pos), i4 = this._toXYZ(this._edge.leftVertex.leftSegment?.leftVertex?.pos), e7 = this._toXYZ(this._edge.rightVertex.pos), s9 = this._toXYZ(this._edge.rightVertex.rightSegment?.rightVertex?.pos);
    this._edgeDirection = G2(n3(), t7, e7), i4 ? (this._left = this._computeNeighbor(t7, i4, this._edgeDirection), this._right = this._computeNeighbor(e7, s9, this._edgeDirection, this._left)) : (this._right = this._computeNeighbor(e7, s9, this._edgeDirection), this._left = this._computeNeighbor(t7, i4, this._edgeDirection, this._right));
  }
  _toXYZ(t7) {
    return null != t7 ? this._helper.toXYZ(t7) : null;
  }
  _pointToXYZ(t7) {
    return this._toXYZ(this._helper.pointToVector(t7));
  }
  _computeNeighbor(t7, i4, e7, s9) {
    const n10 = n3();
    if (i4) {
      G2(n10, t7, i4);
      const s10 = !this._passesBisectingAngleThreshold(n10, e7);
      return { start: t7, end: i4, direction: s10 ? this._bisectVectorsPerpendicular(e7, n10) : n10, isOriginalDirection: !s10 };
    }
    return this._helper.hasZ() ? s9 && (P(n10, e7, s9.direction), P(n10, n10, e7), _3(n10, n10), Math.sign(n10[1]) !== Math.sign(e7[0]) && x2(n10, n10, -1)) : u4(n10, -e7[1], e7[0], 0), { start: t7, end: i4, direction: n10, isOriginalDirection: true };
  }
  _passesBisectingAngleThreshold(t7, i4) {
    const e7 = Math.abs(f2(i4, t7));
    return e7 >= z4 && e7 <= Math.PI - z4;
  }
  _bisectVectorsPerpendicular(t7, i4) {
    const e7 = A(t7, i4) < 0 ? t7 : y2(n3(), t7), s9 = Math.abs(A(e7, i4));
    if (!(s9 < A3 || s9 > 1 - A3)) return this._bisectDirection(e7, i4);
    const n10 = P(n3(), e7, [0, 0, 1]);
    return _3(n10, n10);
  }
  _bisectDirection(t7, i4) {
    const e7 = c3(n3(), t7, i4);
    return _3(e7, e7);
  }
  _initializePlane() {
    const t7 = this._computeNormalDirection(this._left), i4 = this._computeNormalDirection(this._right);
    A(t7, i4) < 0 && y2(i4, i4), U(this._left.start, this._bisectDirection(t7, i4), this._plane);
  }
  _computeNormalDirection(t7) {
    const i4 = P(n3(), t7.direction, this._edgeDirection);
    _3(i4, i4);
    const e7 = P(n3(), this._edgeDirection, i4);
    return 1 === this._planeType && (e7[2] = 0), _3(e7, e7);
  }
  _initializeDistanceConstraints() {
    null == this._left.end || this.requiresSplitEdgeLeft || this._updateDistanceConstraint(X(this._plane, this._left.end)), null == this._right.end || this.requiresSplitEdgeRight || this._updateDistanceConstraint(X(this._plane, this._right.end)), this._updateIntersectDistanceConstraint(this._plane);
  }
  _updateDistanceConstraint(t7) {
    t7 <= 0 && (this._minDistance = Math.max(this._minDistance, t7)), t7 >= 0 && (this._maxDistance = Math.min(this._maxDistance, t7));
  }
  _updateIntersectDistanceConstraint(t7) {
    const i4 = y3(t7), h3 = this._edgeDirection, o6 = c3(n3(), this._left.start, this._left.direction), a4 = c3(n3(), this._right.start, this._right.direction), _5 = this._pointInBasis2D(n5(), i4, h3, this._left.start), l4 = this._pointInBasis2D(n5(), i4, h3, o6), p5 = this._pointInBasis2D(n5(), i4, h3, this._right.start), d2 = this._pointInBasis2D(n5(), i4, h3, a4), [m8] = M2({ start: l4, end: _5, type: 1 }, { start: d2, end: p5, type: 1 });
    if (!m8) return;
    const u5 = e2(n5(), _5, l4);
    v(u5, u5);
    const D2 = e2(n5(), m8, l4), x5 = j(u5, D2), V2 = c3(n3(), o6, x2(n3(), this._left.direction, -x5)), N = X(t7, V2);
    this._updateDistanceConstraint(N);
  }
  _pointInBasis2D(t7, i4, e7, s9) {
    return t7[0] = m3(i4, s9), t7[1] = m3(e7, s9), t7;
  }
  _offset(t7, i4) {
    Number.isFinite(this._minDistance) && (i4 = Math.max(this._minDistance, i4)), Number.isFinite(this._maxDistance) && (i4 = Math.min(this._maxDistance, i4)), q(this._offsetPlane, this._plane), this._offsetPlane[3] -= i4;
    const e7 = (t8, i5, e8) => null != i5 && J(this._offsetPlane, t8, c3(n3(), t8, i5), e8), s9 = n3();
    (t7 === this._edge.leftVertex ? e7(this._left.start, this._left.direction, s9) : e7(this._right.start, this._right.direction, s9)) && this._helper.copy(this._helper.fromXYZ(s9, void 0, this._helper.getM(t7.pos)), t7.pos);
  }
  selectArrowFromStartPoint(t7) {
    this._selectedArrow = O3(this.plane, this._pointToXYZ(t7)) ? 1 : -1;
  }
  get selectedArrow() {
    return this._selectedArrow;
  }
  signedDistanceToPoint(t7) {
    return X(this.plane, this._pointToXYZ(t7));
  }
  clampedStartAndEnd(i4) {
    const e7 = this._helper.toXYZ(this._helper.pointToVector(i4)), s9 = R(this._plane, e7, n3()), n10 = X(this._plane, e7), r11 = r2(n10, this._minDistance, this._maxDistance);
    return I2(e7, s9, e7, r11 / n10), { start: s9, end: e7 };
  }
  apply(t7) {
    this._offset(t7, this.distance);
  }
  undo(t7) {
    this._offset(t7, 0);
  }
  canAccumulate(t7) {
    return t7 instanceof _M && this._edge.leftVertex.index === t7._edge.leftVertex.index && this._edge.rightVertex.index === t7._edge.rightVertex.index && this._edge.part === t7._edge.part && this._maybeEqualsVec3(this._left.direction, t7._left.direction) && this._maybeEqualsVec3(this._right.direction, t7._right.direction) && F(y3(this._plane), y3(t7._plane));
  }
  accumulate(t7, i4) {
    const e7 = this._plane[3] - i4._plane[3] + i4.distance;
    this._offset(t7, e7);
  }
  accumulateParams(t7) {
    const i4 = t7.distance - t7._plane[3];
    this.distance = i4 + this._plane[3];
  }
  clone() {
    const t7 = new _M(this._helper, this._planeType, this._edge, this.distance, 1);
    return q(t7._plane, this._plane), q(t7._offsetPlane, this._offsetPlane), t7._maxDistance = this._maxDistance, t7._minDistance = this._minDistance, t7._left = this._cloneNeighbor(this._left), t7._right = this._cloneNeighbor(this._right), t7._edgeDirection = o2(n3(), this._edgeDirection), t7;
  }
  _maybeEqualsVec3(t7, i4) {
    return null == t7 && null == i4 || null != t7 && null != i4 && F(t7, i4);
  }
  _cloneNeighbor({ start: t7, end: i4, direction: e7, isOriginalDirection: s9 }) {
    return { start: o2(n3(), t7), end: null != i4 ? o2(n3(), i4) : null, direction: o2(n3(), e7), isOriginalDirection: s9 };
  }
};
var z4 = s(15);
var A3 = 1e-3;

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js
var o4 = class _o {
  constructor(t7, e7, i4 = 0) {
    this.origin = t7, this.angle = e7, this._accumulationType = i4;
  }
  _rotate(t7, i4) {
    I(t7.pos, t7.pos, this.origin, i4), n7(t7.leftSegment, this.origin, i4);
  }
  apply(t7) {
    this._rotate(t7, this.angle);
  }
  undo(t7) {
    this._rotate(t7, -this.angle);
  }
  canAccumulate(e7) {
    return e7 instanceof _o && h(this.origin, e7.origin);
  }
  accumulate(t7, e7) {
    const i4 = 1 === e7._accumulationType;
    this._rotate(t7, i4 ? e7.angle - this.angle : e7.angle);
  }
  accumulateParams(t7) {
    const e7 = 1 === t7._accumulationType;
    this.angle = e7 ? t7.angle : this.angle + t7.angle;
  }
};
function n7(t7, o6, n10) {
  switch (t7?.type) {
    case null:
    case void 0:
    case "line":
      return;
    case "bezier": {
      const { controlPoint1: i4, controlPoint2: r11 } = t7.curveDefinition;
      return I(i4, i4, o6, n10), void I(r11, r11, o6, n10);
    }
    case "circular-arc": {
      const { interiorPoint: i4 } = t7.curveDefinition;
      return void I(i4, i4, o6, n10);
    }
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      const r11 = t7.leftVertex.pos, a4 = I([0, 0], [r11[0], r11[1]], o6, -n10), c7 = t7.toCurveOrCoordinate(), [, s9, l4, u5, p5, g2, m8] = c5(a4, c7, o6, n10).a;
      if ("elliptic-arc-4" === t7.type) {
        const e7 = t7.curveDefinition;
        e7.centerPoint = [...s9], e7.sweep = l4, e7.orientation = u5;
      } else {
        const e7 = t7.curveDefinition;
        e7.centerPoint = [...s9], e7.sweep = l4, e7.orientation = u5, e7.rotation = p5, e7.semiMajorAxisLength = g2, e7.minorMajorAxisRatio = m8;
      }
    }
  }
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js
var l2 = class _l {
  constructor(t7, i4, r11, o6, e7 = 0) {
    this.origin = t7, this.axis1 = i4, this.factor1 = r11, this.factor2 = o6, this._accumulationType = e7, this.axis2 = r7(i4[1], -i4[0]);
  }
  _scale({ pos: t7, leftSegment: i4 }, o6, a4) {
    const e7 = i4?.toCurveOrCoordinate(), { origin: s9, axis1: c7, axis2: n10 } = this;
    k(t7, t7, s9, c7, o6), k(t7, t7, s9, n10, a4), m6(i4, s9, c7, n10, o6, a4, e7);
  }
  apply(t7) {
    this._scale(t7, this.factor1, this.factor2);
  }
  undo(t7) {
    this._scale(t7, 1 / this.factor1, 1 / this.factor2);
  }
  canAccumulate(i4) {
    return i4 instanceof _l && h(this.origin, i4.origin) && h(this.axis1, i4.axis1);
  }
  accumulate(t7, i4) {
    1 === i4._accumulationType ? this._scale(t7, i4.factor1 / this.factor1, i4.factor2 / this.factor2) : this._scale(t7, i4.factor1, i4.factor2);
  }
  accumulateParams(t7) {
    const i4 = 1 === t7._accumulationType;
    this.factor1 = i4 ? t7.factor1 : this.factor1 * t7.factor1, this.factor2 = i4 ? t7.factor2 : this.factor2 * t7.factor2;
  }
};
function m6(t7, a4, l4, m8, h3, p5, u5) {
  switch (t7?.type) {
    case null:
    case void 0:
    case "line":
      return;
    case "bezier": {
      const { controlPoint1: i4, controlPoint2: o6 } = t7.curveDefinition;
      k(i4, i4, a4, l4, h3), k(i4, i4, a4, m8, p5), k(o6, o6, a4, l4, h3), k(o6, o6, a4, m8, p5);
      break;
    }
    case "circular-arc":
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      if (!u5) return;
      const r11 = t7.leftVertex.pos, x5 = c6(a4[0], a4[1], l4[0], l4[1], m8[0], m8[1], h3, p5), g2 = s2(e3(), x5), j5 = g2 ? z(n5(), [r11[0], r11[1]], g2) : r11, [, y6, _5, v6, b3, d2, A4] = m4(u5, [j5[0], j5[1]], t7, a4, l4, m8, h3, p5).a;
      if ("elliptic-arc-7" === t7.type) {
        const i4 = t7.curveDefinition;
        i4.centerPoint = y6, i4.sweep = _5, i4.orientation = v6, i4.rotation = b3, i4.semiMajorAxisLength = d2, i4.minorMajorAxisRatio = A4;
      } else {
        const i4 = new x3(t7.part, t7.leftVertex, t7.rightVertex, { centerPoint: y6, sweep: _5, orientation: v6, rotation: b3, semiMajorAxisLength: d2, minorMajorAxisRatio: A4 });
        t7.part.segments.splice(t7.part.segments.indexOf(t7), 1, i4);
      }
      return;
    }
  }
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetAllVertexPositions.js
var i3 = class _i {
  constructor(t7, e7) {
    this._editGeometry = t7, this._newPositions = [], this._newSegments = [];
    for (const { pos: i4, leftSegment: n10 } of e7.allVertices) this._newPositions.push(i4), this._newSegments.push(s6(n10));
  }
  apply() {
    const t7 = null == this._originalPositions ? "apply" : "redo";
    if (!this._originalPositions) {
      const t8 = this._editGeometry.coordinateHelper;
      this._originalPositions = [], this._originalSegments = [];
      for (const { pos: e7, leftSegment: i4 } of this._editGeometry.iterateVertices()) this._originalPositions.push(t8.clone(e7)), this._originalSegments.push(s6(i4));
    }
    this._apply(t7, this._newPositions, this._newSegments);
  }
  undo() {
    this._originalPositions && this._originalSegments && this._apply("undo", this._originalPositions, this._originalSegments);
  }
  accumulate(t7) {
    return t7 instanceof _i && (this._newPositions = t7._newPositions, this._newSegments = t7._newSegments, this._apply("apply", this._newPositions, this._newSegments), true);
  }
  _apply(e7, i4, o6) {
    const r11 = this._editGeometry.coordinateHelper, l4 = this._editGeometry.allVertices, h3 = [];
    for (let a4 = 0; a4 < l4.length; a4++) {
      const e8 = l4[a4], p5 = i4[a4], _5 = o6[a4];
      h(e8.pos, p5) && n8(s6(e8.leftSegment), _5) || (h3.push(l4[a4]), r11.copy(p5, e8.pos), e8.leftSegment && "curveDefinition" in e8.leftSegment && _5 && (e8.leftSegment.curveDefinition = __spreadValues({}, _5)));
    }
    this._editGeometry.parts.forEach((t7) => t7.unnormalizeVertexPositions()), h3.length && this._editGeometry.notifyChanges({ operation: e7, updatedVertices: h3 });
  }
};
function s6(t7) {
  if (t7 && "line" !== t7.type) return __spreadValues({}, t7.curveDefinition);
}
function n8(t7, i4) {
  return null == t7 && null == i4 || !!t7 && !!i4 && !i(t7, i4);
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js
var t6;
var s7 = /* @__PURE__ */ Symbol();
var o5 = class {
  static {
    t6 = s7;
  }
  constructor(s9) {
    this._operations = [], this._closed = false, this[t6] = true, s9 && (this._operations = s9, this._closed = true);
  }
  close() {
    this._closed = true;
  }
  apply() {
    for (const t7 of this._operations) t7.apply();
  }
  undo() {
    for (let t7 = this._operations.length - 1; t7 >= 0; t7--) this._operations[t7].undo();
  }
  accumulate(t7) {
    if (this._closed) return false;
    const s9 = this._operations.length ? this._operations[this._operations.length - 1] : null;
    return s9 && s9.accumulate(t7) || (this._operations.push(t7), t7.apply()), true;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js
var S2 = class _S extends r {
  constructor(e7, t7, r11 = false) {
    super(), this.data = e7, this.viewingMode = t7, this.allowCurves = r11, this._undoStack = [], this._redoStack = [], this.disableDefaultRedoBehavior = false, this._listener = this.data.on("change", (e8) => {
      e8.addedVertices && this.emit("vertex-add", { type: "vertex-add", vertices: e8.addedVertices, operation: e8.operation }), e8.removedVertices && this.emit("vertex-remove", { type: "vertex-remove", vertices: e8.removedVertices, operation: e8.operation }), e8.updatedVertices && this.emit("vertex-update", { type: "vertex-update", vertices: e8.updatedVertices, operation: e8.operation });
    });
  }
  destroy() {
    super.destroy(), this._listener.remove();
  }
  splitSegment(e7, t7) {
    return this._apply(new n6(this.data, e7, t7));
  }
  updateVertices(e7, t7, r11 = 1) {
    return this._apply(new t2(this.data, e7, t7), r11);
  }
  move(e7, t7, r11, s9 = 1) {
    return k3(this.data) ? this._apply(new t4(this.data, e7, t7, r11), s9) : this.moveVertices(this.data.allVerticesUnordered, e7, t7, r11, s9);
  }
  moveVertices(e7, t7, r11, s9, i4 = 1) {
    return k3(this.data) ? this._apply(new t4(this.data, t7, r11, s9), i4) : this.updateVertices(e7, new t5(this.data.coordinateHelper, t7, r11, s9), i4);
  }
  scale(e7, t7, r11, o6, s9 = 1, i4 = 0) {
    return this.scaleVertices(this.data.allVerticesUnordered, e7, t7, r11, o6, s9, i4);
  }
  scaleVertices(e7, t7, r11, o6, s9, i4 = 1, a4 = 0) {
    return this.updateVertices(e7, new l2(t7, r11, o6, s9, a4), i4);
  }
  rotate(e7, t7, r11 = 1, o6 = 0) {
    return this.rotateVertices(this.data.allVerticesUnordered, e7, t7, r11, o6);
  }
  rotateVertices(e7, t7, r11, o6 = 1, s9 = 0) {
    return this.updateVertices(e7, new o4(t7, r11, s9), o6);
  }
  removeVertices(e7) {
    return this._apply(new t3(this.data, e7, this._minNumVerticesPerType));
  }
  appendVertex(e7, t7, r11) {
    return t7 ??= new V(this.data.spatialReference, this.viewingMode, r11), this._apply(new r9(this.data, t7, e7));
  }
  appendVertexToFirstPart(e7) {
    const t7 = this.data.parts.at(0);
    return t7 ? this._apply(new r9(this.data, t7, e7)) : null;
  }
  addOrUpdatePart(e7, t7) {
    return this._apply(new s5(this.data, e7, t7, this.viewingMode));
  }
  setVertexPosition(e7, t7) {
    return this._apply(new a2(this.data, e7, t7));
  }
  offsetEdge(e7, t7, r11, o6 = 1) {
    return this.updateVertices([t7.leftVertex, t7.rightVertex], new M6(this.data.coordinateHelper, e7, t7, r11), o6);
  }
  trySetGeometry(e7, t7 = 1) {
    const { data: r11 } = this, { coordinateHelper: s9 } = r11;
    if (r11.type !== e7.type || !r11.spatialReference.equals(e7.spatialReference) || s9.hasZ() !== e7.hasZ || s9.hasM() !== e7.hasM || k3(r11)) return;
    const n10 = w3.fromGeometry(e7, this.viewingMode, { allowCurves: this.allowCurves });
    return Z2(r11, n10) ? this.overwriteGeometryDataInPlace(n10, t7) : void 0;
  }
  overwriteGeometryDataInPlace(e7, t7 = 1) {
    return this._apply(new i3(this.data, e7), t7);
  }
  createResetState() {
    if (k3(this.data)) return this._createResetStateMesh();
    const e7 = this.data.geometry.clone();
    return e(() => this.trySetGeometry(e7));
  }
  closePart(e7) {
    return this.data.parts.includes(e7) ? this._apply(new r10(this.data, e7)) : null;
  }
  canRemoveVertex(e7) {
    return e7.vertices.length > this._minNumVerticesPerType;
  }
  createUndoGroup() {
    const e7 = new o5();
    return this._apply(e7), e(() => e7.close());
  }
  groupOperations(e7) {
    const t7 = [], { _undoStack: r11 } = this;
    for (; r11.length > 0; ) {
      const o6 = r11.at(-1);
      if (!o6 || !e7(o6)) break;
      r11.pop(), t7.push(o6);
    }
    if (t7.length > 0) {
      const e8 = new o5(t7.reverse());
      return this.recordUndo(e8, true), { group: e8, operations: t7 };
    }
    return null;
  }
  recordUndo(e7, t7) {
    const r11 = this.canUndo;
    this._undoStack.push(e7), t7 && this.resetRedoStack(), this.emit("can-redo-change", { type: "can-redo-change", canRedo: this.canRedo }), r11 !== this.canUndo && this.emit("can-undo-change", { type: "can-undo-change", canUndo: this.canUndo });
  }
  recordRedo(e7) {
    if (this.disableDefaultRedoBehavior) return;
    const t7 = this.canRedo;
    this._redoStack.push(e7), t7 || this.emit("can-redo-change", { type: "can-redo-change", canRedo: true });
  }
  undo() {
    if (this._undoStack.length > 0) {
      const e7 = this.canUndo, t7 = this._undoStack.pop();
      return t7.undo(), this.recordRedo(t7), e7 !== this.canUndo && this.emit("can-undo-change", { type: "can-undo-change", canUndo: this.canUndo }), t7;
    }
    return null;
  }
  redo() {
    if (this._redoStack.length > 0) {
      const e7 = this._redoStack.pop();
      return e7.apply(), this.recordUndo(e7, false), e7;
    }
    return null;
  }
  resetRedoStack() {
    this.disableDefaultRedoBehavior || (this._redoStack = [], this.emit("redo-reset", { type: "redo-reset" }));
  }
  undoHas(e7) {
    return this._undoStack.includes(e7);
  }
  get canUndo() {
    return this._undoStack.length > 0;
  }
  get canRedo() {
    return this._redoStack.length > 0;
  }
  get lastOperation() {
    return this._undoStack.length > 0 ? this._undoStack[this._undoStack.length - 1] : null;
  }
  get nextOperation() {
    return this._redoStack.length > 0 ? this._redoStack[this._redoStack.length - 1] : null;
  }
  get test() {
    return { undoLength: this._undoStack.length, redoLength: this._redoStack.length };
  }
  get _minNumVerticesPerType() {
    switch (this.data.type) {
      case "point":
        return 1;
      case "polyline":
        return 2;
      case "polygon":
        return 3;
      default:
        return 0;
    }
  }
  _apply(e7, t7 = 1) {
    return 0 !== t7 && this.lastOperation?.accumulate(e7) || (e7.apply(), this.recordUndo(e7, true)), e7;
  }
  _createResetStateMesh() {
    if (!k3(this.data)) return e();
    const e7 = this.data.geometry, { vertexSpace: s9 } = e7;
    if (s9.origin) {
      const o6 = t(s9.origin);
      return e(() => {
        e7.vertexSpace.origin = o6;
      });
    }
    const i4 = e7.vertexAttributes.clonePositional();
    return e(() => {
      e7.vertexAttributes = i4, e7.vertexAttributesChanged();
    });
  }
  static fromGeometry(e7, t7, r11) {
    return new _S(w3.fromGeometry(e7, t7, r11), t7, r11?.allowCurves);
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/SnappingContext.js
var e6 = class {
  constructor(e7) {
    this.vertexHandle = null, this.excludeFeature = null, this.visualizer = null, this.suppressSelfSnapping = false, this.selfSnappingZ = null, this.drawConstraints = null, this.editGeometryOperations = e7.editGeometryOperations, this.elevationInfo = e7.elevationInfo, this.pointer = e7.pointer, this.vertexHandle = e7.vertexHandle, this.excludeFeature = e7.excludeFeature, this.feature = e7.feature, this.visualizer = e7.visualizer, this.selfSnappingZ = e7.selfSnappingZ, this.drawConstraints = e7.drawConstraints, this.suppressSelfSnapping = e7.suppressSelfSnapping;
  }
  get coordinateHelper() {
    return this.editGeometryOperations.data.coordinateHelper;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
};

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipField.js
var s8 = class extends b {
  constructor(t7) {
    super(t7), this.actual = null, this.lockable = true, this.id = n(), this.inputValue = null, this.name = null, this.readOnly = false, this.suffix = null, this.visible = true, this.invalid = false, this.unlockOnVertexPlacement = true, this.displayOrder = 0;
  }
  get committed() {
    return this.lockable ? this._get("committed") : null;
  }
  set committed(t7) {
    this.lockable && this._set("committed", t7);
  }
  get dirty() {
    return null != this.inputValue;
  }
  get lockDisabled() {
    return null == this.actual && !this.dirty && !this.locked;
  }
  get locked() {
    return this.lockable && null != this.committed;
  }
  onInput(t7) {
    this.inputValue = t7, this.invalid = false;
  }
  onCommit(t7, l4, i4) {
    this.lockable ? this._onCommitLockable(t7, i4) : this._onCommitNonLockable(i4), this.invalid && "commit-and-exit" === t7 || i4.onCommit(l4, t7);
  }
  _onCommitLockable(t7, l4) {
    const { inputValue: i4, locked: o6 } = this;
    o6 && n9(i4) ? this.unlock() : ("commit-and-exit" === t7 && !o6 || null != i4) && this._parseInputAndLock(l4);
  }
  _onCommitNonLockable(t7) {
    const { inputValue: l4 } = this;
    n9(l4) ? this.lockable ? this.setActual(null) : this.clearInputValue() : null != l4 && this._parseInputAndSetActual(t7);
  }
  applyValue(t7) {
    this.lockable ? this.lock(t7) : this.setActual(t7);
  }
  clearInputValue() {
    this.inputValue = null, this.invalid = false;
  }
  setActual(t7) {
    this.actual = t7, this.clearInputValue();
  }
  lock(t7) {
    this.lockable && (this.committed = t7 ?? this.actual, this.clearInputValue());
  }
  unlock() {
    this.lockable && (this.committed = null, this.clearInputValue());
  }
  toggleLock(t7) {
    this.lockable && (this.locked ? this.unlock() : this._parseInputAndLock(t7));
  }
  getSuffix(t7) {
    const { suffix: l4 } = this;
    return "function" == typeof l4 ? l4(t7) : l4;
  }
  getFormattedValue(t7) {
    const { actual: l4, committed: i4, format: o6 } = this;
    return null != i4 ? o6(i4, t7) : null != l4 ? o6(l4, t7) : null;
  }
  getRawDisplayValue(t7) {
    const { actual: l4, committed: i4, inputValue: o6 } = this;
    return null != o6 ? o6 : this.lockable && null != i4 ? this.formatForInputMode(i4, t7) : null != l4 ? this.formatForInputMode(l4, t7) : null;
  }
  _parseInputAndSetActual(t7) {
    const { inputValue: l4 } = this;
    if (null == l4 || n9(l4)) return this.setActual(null);
    const i4 = this.parse(l4, t7);
    null != i4 ? this.setActual(i4) : this.invalid = true;
  }
  _parseInputAndLock(t7) {
    const { inputValue: l4, actual: i4 } = this;
    if (n9(l4)) return this.unlock();
    if (null == l4) return this.lock(i4);
    const o6 = this.parse(l4, t7);
    null != o6 ? this.lock(o6) : this.invalid = true;
  }
};
function n9(t7) {
  return null != t7 && "" === t7.trim();
}
__decorate([a()], s8.prototype, "actual", void 0), __decorate([a()], s8.prototype, "committed", null), __decorate([a()], s8.prototype, "dirty", null), __decorate([a()], s8.prototype, "lockDisabled", null), __decorate([a()], s8.prototype, "format", void 0), __decorate([a()], s8.prototype, "formatForInputMode", void 0), __decorate([a()], s8.prototype, "lockable", void 0), __decorate([a()], s8.prototype, "locked", null), __decorate([a()], s8.prototype, "id", void 0), __decorate([a()], s8.prototype, "inputValue", void 0), __decorate([a()], s8.prototype, "name", void 0), __decorate([a()], s8.prototype, "parse", void 0), __decorate([a()], s8.prototype, "readOnly", void 0), __decorate([a()], s8.prototype, "suffix", void 0), __decorate([a()], s8.prototype, "title", void 0), __decorate([a()], s8.prototype, "visible", void 0), __decorate([a()], s8.prototype, "invalid", void 0), __decorate([a()], s8.prototype, "unlockOnVertexPlacement", void 0), __decorate([a()], s8.prototype, "displayOrder", void 0), s8 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipField")], s8);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldElevation.js
var l3 = class extends s8 {
  constructor(t7) {
    super(t7), this.showAsZ = false;
  }
  normalizeCtorArgs(t7) {
    const i4 = (t8) => t8.inputUnitInfos.verticalLength.unit;
    return __spreadValues({ name: "elevation", actual: k2, parse: B({ createQuantity: (t8, o6) => f(t8, i4(o6)) }), format: (t8, o6) => o6.formatters.verticalLength(t8), formatForInputMode: (t8, o6) => o6.formatters.scalar(g(t8, i4(o6))), suffix: (t8) => t8.inputUnitInfos.verticalLength.abbreviation, title: (t8) => t8.messages.sketch[this.showAsZ ? "z" : "elevation"], unlockOnVertexPlacement: false }, t7);
  }
};
__decorate([a()], l3.prototype, "showAsZ", void 0), l3 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], l3);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldOrientation.js
var m7 = class extends s8 {
  constructor(t7) {
    super(t7), this.precision = 1;
  }
  normalizeCtorArgs(t7) {
    const i4 = (t8) => t8.inputUnitInfos.angle.unit;
    return __spreadValues({ name: "orientation", actual: null, parse: B({ createQuantity: (t8, o6) => p3(t8, i4(o6), "geographic"), sanitize: C2 }), format: (t8) => {
      const r11 = M3(t8);
      return F2(r11, "geographic", this.precision);
    }, formatForInputMode: (t8, r11) => {
      const o6 = M3(t8);
      return r11.formatters.scalar(o6);
    }, suffix: (t8) => t8.inputUnitInfos.angle.abbreviation, title: (t8) => t8.messages.sketch.orientation }, t7);
  }
};
__decorate([a()], m7.prototype, "precision", void 0), m7 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")], m7);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldSize.js
var a3 = class extends s8 {
  constructor(t7) {
    super(t7), this.precision = null;
  }
  normalizeCtorArgs(t7) {
    const i4 = (t8) => t8.inputUnitInfos.length.unit;
    return __spreadValues({ name: "size", actual: null, parse: B({ createQuantity: (t8, o6) => f(t8, i4(o6)) }), format: (t8, o6) => o6.formatters.length(t8), formatForInputMode: (t8, r11) => r11.formatters.scalar(g(t8, i4(r11))), suffix: (t8) => t8.inputUnitInfos.length.abbreviation, title: (t8) => t8.messages.sketch.size }, t7);
  }
};
__decorate([a()], a3.prototype, "precision", void 0), a3 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldSize")], a3);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/fields.js
function v5(e7) {
  const a4 = (t7) => t7.inputUnitInfos.angle.unit, r11 = (t7) => t7.sketchOptions.values.effectiveDirectionMode;
  return new s8(__spreadValues({ name: "direction", actual: C, parse: B({ createQuantity: (t7, e8) => p3(t7, a4(e8), "geographic"), sanitize: C2 }), format: (t7, e8) => {
    const a5 = r11(e8), n10 = w(t7, a5);
    switch (a5) {
      case "absolute":
        return e8.formatters.direction(n10);
      case "relative":
        return e8.formatters.directionRelative(n10);
      case "relative-bilateral":
        return e8.formatters.directionRelativeBilateral(n10);
    }
  }, formatForInputMode: (t7, e8) => {
    const i4 = w(t7, r11(e8));
    return e8.formatters.scalar(g(i4, a4(e8)));
  }, suffix: (t7) => t7.inputUnitInfos.angle.abbreviation, title: (t7) => {
    const e8 = r11(t7), { absolute: a5, relative: n10 } = t7.messages.sketch.direction;
    switch (e8) {
      case "absolute":
        return a5;
      case "relative":
      case "relative-bilateral":
        return n10;
    }
  } }, e7));
}
function y5(t7) {
  const e7 = (t8) => t8.inputUnitInfos.length.unit;
  return new s8(__spreadValues({ name: t7?.name ?? "distance", actual: k2, parse: B({ createQuantity: (t8, a4) => f(Math.max(t8, 0), e7(a4)) }), format: (t8, e8) => e8.formatters.length(t8), formatForInputMode: (t8, a4) => a4.formatters.scalar(g(t8, e7(a4))), suffix: (t8) => t8.inputUnitInfos.length.abbreviation, title: (t8) => t8.messages.sketch.distance }, t7));
}
function U2(t7) {
  const e7 = (t8) => t8.inputUnitInfos.length.unit;
  return new s8(__spreadValues({ name: t7?.name ?? "radius", actual: k2, parse: B({ createQuantity: (t8, a4) => f(Math.max(t8, 0), e7(a4)) }), format: (t8, e8) => e8.formatters.length(t8), formatForInputMode: (t8, a4) => a4.formatters.scalar(g(t8, e7(a4))), suffix: (t8) => t8.inputUnitInfos.length.abbreviation, title: (t8) => t8.messages.sketch.radius }, t7));
}
function w4(t7) {
  return y5(__spreadValues({ format: (t8, e7) => e7.formatters.totalLength(t8), title: (t8) => t8.messages.sketch.totalLength, readOnly: true }, t7));
}
function x4(t7) {
  return y5(__spreadValues({}, t7));
}
function F3(t7) {
  const e7 = (t8) => t8.inputUnitInfos.length.unit;
  return y5(__spreadProps(__spreadValues({}, t7), { parse: B({ createQuantity: (t8, a4) => f(t8, e7(a4)) }), format: (t8, e8) => e8.formatters.lengthRelative(t8) }));
}
function M7(t7) {
  return new l3(t7);
}
function k4(t7) {
  return new m7(t7);
}
function j4(t7) {
  return new a3(t7);
}
function Q(t7) {
  return q2("scale", __spreadValues({ name: "scale", actual: null, parse: B({ createQuantity: (t8) => c4(Math.abs(t8)) }) }, t7));
}
function D(t7) {
  const e7 = (t8) => t8.inputUnitInfos.area.unit;
  return new s8(__spreadValues({ name: "area", actual: z2, parse: B({ createQuantity: (t8, a4) => s4(t8, e7(a4)) }), format: (t8, e8) => e8.formatters.area(t8), formatForInputMode: (t8, a4) => a4.formatters.scalar(g(t8, e7(a4))), suffix: (t8) => t8.inputUnitInfos.area.abbreviation, title: (t8) => t8.messages.sketch.area, readOnly: true }, t7));
}
function O4(e7) {
  return new s8(__spreadValues({ name: "x", actual: C, parse: H, format: (t7, e8) => e8.formatters.longitudeDecimalDegrees(t7), formatForInputMode: (t7) => w2(t7), suffix: (t7) => t7.inputUnitInfos.angle.abbreviation, title: (t7) => t7.messages.sketch.longitude }, e7));
}
function T2(e7) {
  return new s8(__spreadValues({ name: "y", actual: C, parse: J2, format: (t7, e8) => e8.formatters.latitudeDecimalDegrees(t7), formatForInputMode: (t7) => A2(t7), suffix: (t7) => t7.inputUnitInfos.angle.abbreviation, title: (t7) => t7.messages.sketch.latitude }, e7));
}
function R4(t7) {
  return q2("x", __spreadValues({ name: "x" }, t7));
}
function z5(t7) {
  return q2("y", __spreadValues({ name: "y" }, t7));
}
function L2(t7) {
  return new s8(__spreadValues({ actual: c4(0), parse: B({ createQuantity: (t8) => c4(t8) }), format: (t8, e7) => e7.formatters.scalar(t8), formatForInputMode: (t8, e7) => e7.formatters.scalar(t8), title: (t8) => t8.messages.sketch.scale }, t7));
}
function q2(t7, e7) {
  return L2(__spreadValues({ title: (e8) => e8.messages.sketch[t7] }, e7));
}

export {
  s8 as s,
  v5 as v,
  y5 as y,
  U2 as U,
  w4 as w,
  x4 as x,
  F3 as F,
  M7 as M,
  k4 as k,
  j4 as j,
  Q,
  D,
  O4 as O,
  T2 as T,
  R4 as R,
  z5 as z,
  L2 as L,
  Y,
  V,
  w3 as w2,
  t2 as t,
  t5 as t2,
  M6 as M2,
  o4 as o,
  l2 as l,
  o5 as o2,
  S2 as S,
  e6 as e
};
//# sourceMappingURL=chunk-JPISRVQN.js.map
