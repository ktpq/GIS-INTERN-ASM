import {
  c as c4,
  m as m4
} from "./chunk-GWOPGB7B.js";
import {
  c as c3
} from "./chunk-QFPVH664.js";
import {
  M as M2
} from "./chunk-MC4L6QKA.js";
import {
  J,
  O as O3,
  R,
  U,
  X,
  f,
  m as m3,
  q,
  v as v3,
  y as y3
} from "./chunk-T6SJ457A.js";
import {
  n as n4,
  o as o3,
  r as r7
} from "./chunk-47CFN4JI.js";
import {
  A,
  F,
  G as G2,
  I as I2,
  P,
  _ as _3,
  c as c2,
  o as o2,
  p as p2,
  u as u4,
  x as x2,
  y as y2
} from "./chunk-SGNC5H35.js";
import {
  n as n3,
  r as r6,
  u as u3
} from "./chunk-TVLXQ42J.js";
import {
  O as O2,
  j as j3,
  r as r5
} from "./chunk-OR24MDO6.js";
import {
  n,
  r as r3,
  t,
  u
} from "./chunk-KEY3YQEB.js";
import {
  m as m2
} from "./chunk-FH7ZMRUF.js";
import {
  j as j2
} from "./chunk-2YANO3UR.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import {
  M,
  h3 as h2,
  l,
  n as n2,
  p2 as p,
  u3 as u2,
  x
} from "./chunk-MC2OVSQ5.js";
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
  r as r4,
  v,
  z
} from "./chunk-5GPMO33J.js";
import {
  c,
  e as e4,
  i as i2,
  o,
  s as s3,
  v as v2
} from "./chunk-WSE2ZKFY.js";
import {
  r as r2,
  s
} from "./chunk-253Z6EVN.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  G
} from "./chunk-VHQJAPCR.js";
import {
  r
} from "./chunk-LD7VLL5E.js";
import {
  e
} from "./chunk-2KP24SU5.js";
import {
  i
} from "./chunk-XE7VYYSA.js";
import {
  L,
  O,
  h
} from "./chunk-XCN5EJK7.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var R2 = class {
  constructor(e7) {
    this.spatialReference = e7;
  }
  createVector() {
    return this._tag(n4());
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
  lerp(e7, t7, a2, i4) {
    return _2(i4, e7, t7, a2);
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
    return r4(r11, e7);
  }
  fromXYZ(e7) {
    return this._tag(r7(e7[0], e7[1]));
  }
  toXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], 0);
  }
  arrayToXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], 0);
  }
  pointToXYZ(e7, r11 = n()) {
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
    return this._tag(n());
  }
  pointToVector(e7) {
    return this._tag(r3(e7.x, e7.y, 0 === this._valueType ? e7.z : e7.m));
  }
  arrayToVector(e7) {
    return this._tag(r3(e7[0], e7[1], e7[2] || 0));
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
    const t7 = 0 === this._valueType, a2 = 1 === this._valueType;
    return r11.x = e7[0], r11.y = e7[1], r11.z = t7 ? e7[2] : void 0, r11.m = a2 ? e7[2] : void 0, r11.hasZ = t7, r11.hasM = a2, r11.spatialReference = this.spatialReference, r11;
  }
  lerp(e7, r11, t7, a2) {
    return I2(a2, e7, r11, t7);
  }
  addDelta(e7, r11, t7, a2) {
    e7[0] += r11, e7[1] += t7, 0 === this._valueType && (e7[2] += a2);
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
    return this._tag(u(e7));
  }
  copy(e7, r11) {
    return o2(r11, e7);
  }
  fromXYZ(e7, r11 = 0, t7 = 0) {
    return this._tag(r3(e7[0], e7[1], 0 === this._valueType ? e7.length > 2 ? e7[2] : r11 : t7));
  }
  toXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], 0 === this._valueType ? e7[2] : 0);
  }
  arrayToXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], 1 === this._valueType || e7.length < 3 ? 0 : e7[2]);
  }
  pointToXYZ(e7, r11 = n()) {
    return u4(r11, e7.x, e7.y, 0 === this._valueType ? e7.z ?? 0 : 0);
  }
  equals(e7, r11) {
    return F(e7, r11);
  }
  _tag(e7) {
    return e7;
  }
};
var z2 = class {
  constructor(e7) {
    this.spatialReference = e7;
  }
  createVector() {
    return this._tag(n3());
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
  lerp(e7, r11, t7, a2) {
    return j3(a2, e7, r11, t7);
  }
  addDelta(e7, r11, t7, a2) {
    e7[0] += r11, e7[1] += t7, e7[2] += a2;
  }
  distance(e7, r11) {
    return p2(M3(e7), M3(r11));
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
  toXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], e7[2]);
  }
  arrayToXYZ(e7, r11 = n()) {
    return u4(r11, e7[0], e7[1], e7.length < 3 ? 0 : e7[2]);
  }
  pointToXYZ(e7, r11 = n()) {
    return u4(r11, e7.x, e7.y, e7.z ?? 0);
  }
  equals(e7, r11) {
    return O2(e7, r11);
  }
  _tag(e7) {
    return e7;
  }
};
function M3(e7) {
  return e7;
}
function X2(e7) {
  return e7;
}
function Y(e7, r11, t7) {
  return e7 && r11 ? new z2(t7) : r11 ? new Z(1, t7) : e7 ? new Z(0, t7) : new R2(t7);
}

// node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js
function r8(o6, r11) {
  if (!r11.supported) return;
  let p4 = 1 / 0, e7 = -1 / 0;
  const u5 = r11.upperBoundX - r11.lowerBoundX;
  o6.forEach((o7) => {
    let n9 = o7.pos[0];
    for (; n9 < r11.lowerBoundX; ) n9 += u5;
    for (; n9 > r11.upperBoundX; ) n9 -= u5;
    p4 = Math.min(p4, n9), e7 = Math.max(e7, n9), o7.pos[0] = n9;
  });
  const n8 = e7 - p4;
  u5 - n8 < n8 && o6.forEach((o7) => {
    o7.pos[0] < 0 && (o7.pos[0] += u5);
  });
}
function p3(r11, p4) {
  const e7 = G(r11);
  return 1 === p4 && e7 ? { supported: true, lowerBoundX: e7.valid[0], upperBoundX: e7.valid[1] } : { supported: false, lowerBoundX: null, upperBoundX: null };
}

// node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js
var f2 = class {
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
    const t7 = this.rightVertex.pos, { centerPoint: e7, sweep: r11, orientation: i4, rotation: s7, semiMajorAxisLength: n8, minorMajorAxisRatio: o6 } = this.curveDefinition;
    return { a: [[...t7], e7, r11, i4, s7, n8, o6] };
  }
};
var V = class {
  constructor(t7, e7, r11 = false) {
    this._spatialReference = t7, this._viewingMode = e7, this.autoClose = r11, this.vertices = [], this.segments = [], this.index = null;
  }
  unnormalizeVertexPositions() {
    this.vertices.length <= 1 || r8(this.vertices, p3(this._spatialReference, this._viewingMode));
  }
  updateVertexIndex(t7, e7) {
    const { vertices: r11 } = this;
    if (0 === r11.length) return;
    const i4 = r11[0];
    let s7 = null, n8 = t7, o6 = e7;
    do {
      s7 = n8, s7.index = o6++, n8 = s7.rightSegment ? s7.rightSegment.rightVertex : null;
    } while (null != n8 && n8 !== i4);
    s7.leftSegment && s7 !== r11[r11.length - 1] && this.swapVertices(r11.indexOf(s7), r11.length - 1);
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
var w = class _w extends r {
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
    const { parts: i4, hasCurves: s7 } = S(this, { startingVertex: t7, endingVertexInclusive: e7, geometryType: r11 });
    return C(i4, s7, r11, this.coordinateHelper);
  }
  _toPoint() {
    const { parts: t7, coordinateHelper: e7 } = this;
    return t7.at(0)?.vertices.length ? e7.vectorToPoint(t7[0].vertices[0].pos) : null;
  }
  _toMultipoint() {
    const t7 = [], { coordinateHelper: e7, parts: r11, spatialReference: s7 } = this;
    for (const i4 of r11) {
      const r12 = i4.getFirstVertex();
      r12 && t7.push(e7.arrayToVector(r12.pos));
    }
    return new m2({ hasM: e7.hasM(), hasZ: e7.hasZ(), spatialReference: s7, points: t7 });
  }
  _toPolyline() {
    const t7 = [];
    let e7 = false;
    for (const r11 of this.parts) {
      if (r11.vertices.length < 1) continue;
      const i4 = r11.vertices[0], s7 = [];
      s7.push(i4.pos);
      let n8 = i4.rightSegment;
      for (; n8; ) e7 ||= "line" !== n8.type, s7.push(n8.toCurveOrCoordinate()), n8 = n8.rightVertex.rightSegment;
      t7.push(s7);
    }
    return new y({ paths: e7 ? void 0 : t7, curvePaths: e7 ? t7 : void 0, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  _toPolygon() {
    const e7 = [];
    let r11 = false;
    for (const i4 of this.parts) {
      if (i4.vertices.length < 1) continue;
      const s7 = i4.vertices[0], n8 = [];
      n8.push(s7.pos);
      let a2 = s7.rightSegment;
      for (; a2 && (r11 ||= "line" !== a2.type, n8.push(a2.toCurveOrCoordinate()), a2 = a2.rightVertex.rightSegment, a2?.leftVertex !== s7); ) ;
      if (i4.autoClose && n8.length > 1) {
        const e8 = n8.at(-1), r12 = v2(n8[0]), i5 = v2(e8);
        2 === n8.length && e4(e8) || h(r12, i5) || n8.push(r12);
      }
      e7.push(n8);
    }
    return new j2({ rings: r11 ? void 0 : e7, curveRings: r11 ? e7 : void 0, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  static fromGeometry(t7, e7, r11) {
    const i4 = t7.spatialReference, s7 = Y(t7.hasZ, t7.hasM, i4), n8 = new _w(t7.type, s7);
    switch (t7.type) {
      case "polygon":
        R3(n8, t7, e7, r11?.allowCurves ?? false);
        break;
      case "polyline":
        M4(n8, t7, e7, r11?.allowCurves ?? false);
        break;
      case "point":
        b(n8, t7, e7);
        break;
      case "multipoint":
        H(n8, t7, e7);
        break;
      case "mesh":
        b(n8, t7.origin, e7), n8._geometry = t7, n8._dirty = false;
    }
    return n8;
  }
};
function P2(t7, e7, r11, i4) {
  const s7 = new f2(t7);
  t7.vertices.push(s7);
  const n8 = v2(i4);
  return s7.pos = e7.arrayToVector(n8), s7.index = t7.vertices.length - 1, r11 && t7.segments.push(_4(t7, r11, s7, i4)), s7;
}
function _4(t7, e7, r11, i4) {
  if (e4(i4)) return new m5(t7, e7, r11);
  if (i2(i4)) {
    const [, s8, n9] = i4.b;
    return new d(t7, e7, r11, { controlPoint1: [...s8], controlPoint2: [...n9] });
  }
  if (c(i4)) {
    const [, s8] = i4.c;
    return new v4(t7, e7, r11, { interiorPoint: [...s8] });
  }
  if (o(i4)) {
    const [, s8, n9, o7] = i4.a;
    return new y4(t7, e7, r11, { centerPoint: [...s8], sweep: n9, orientation: o7 });
  }
  const [, s7, n8, o6, p4, g, u5] = i4.a;
  return new x3(t7, e7, r11, { centerPoint: [...s7], sweep: n8, orientation: o6, rotation: p4, semiMajorAxisLength: g, minorMajorAxisRatio: u5 });
}
function C(t7, e7, r11, h3) {
  const { spatialReference: a2 } = h3;
  if ("point" === r11) {
    const e8 = t7.at(0)?.at(0);
    return e8 ? h3.arrayToPoint(v2(e8)) : null;
  }
  return "polygon" === r11 ? new j2({ rings: e7 ? void 0 : t7, curveRings: e7 ? t7 : void 0, spatialReference: a2, hasZ: h3.hasZ(), hasM: h3.hasM() }) : "multipoint" === r11 ? new m2({ spatialReference: a2, points: t7.flatMap((t8) => t8.map((t9) => v2(t9))), hasM: h3.hasM(), hasZ: h3.hasZ() }) : new y({ paths: e7 ? void 0 : t7, curvePaths: e7 ? t7 : void 0, spatialReference: a2, hasZ: h3.hasZ(), hasM: h3.hasM() });
}
function S(r11, i4) {
  const s7 = "polygon" === (i4?.geometryType ?? r11.type), n8 = [];
  let a2 = false, c5 = false, l3 = false;
  for (const p4 of r11.parts) {
    let r12 = null;
    if (l3) break;
    if (p4.vertices.length < 1) continue;
    if (i4?.startingVertex) {
      if (p4 !== i4.startingVertex.part && !c5) continue;
      c5 = true;
    }
    const g = p4 === i4?.startingVertex?.part ? i4.startingVertex : p4.vertices.at(0), u5 = [];
    if (O(u5, g?.pos), g === i4?.endingVertexInclusive) {
      l3 = true, r12 = g, n8.push(u5);
      break;
    }
    let f3 = g?.rightSegment;
    for (; f3; ) {
      if (a2 ||= "line" !== f3.type, u5.push(f3.toCurveOrCoordinate()), r12 = f3.rightVertex, f3.rightVertex === i4?.endingVertexInclusive) {
        l3 = true;
        break;
      }
      if (f3 = f3.rightVertex.rightSegment, f3?.leftVertex === g) break;
    }
    const m7 = u5.at(-1), d2 = p4.getFirstVertex(), v5 = p4.getLastVertex();
    s7 && p4.autoClose && m7 && r12 === v5 && g === d2 && (u5.length > 2 || 2 === u5.length && !e4(m7)) && g?.pos && !h(v2(m7), g.pos) && u5.push([...g.pos]), n8.push(u5);
  }
  return { parts: n8, hasCurves: a2 };
}
function R3(e7, r11, i4, s7) {
  const n8 = r11.spatialReference, h3 = e7.coordinateHelper, { rings: a2, curveRings: c5 } = r11, l3 = c5 && s7 ? c5 : a2;
  for (let p4 = 0; p4 < l3.length; ++p4) {
    const r12 = l3[p4], s8 = new V(n8, i4);
    if (s8.index = p4, e7.parts.push(s8), r12.length < 1) continue;
    let a3 = null, c6 = null;
    for (let t7 = 0; t7 < r12.length - 1; ++t7) c6 = P2(s8, h3, c6, r12[t7]), a3 ??= c6;
    r12.length > 1 && h(v2(r12[r12.length - 1]), a3?.pos) ? c6 && a3 && s8.segments.push(_4(s8, c6, a3, r12[r12.length - 1])) : c6 = P2(s8, h3, c6, r12[r12.length - 1]);
  }
}
function M4(t7, e7, r11, i4) {
  const s7 = e7.spatialReference, n8 = t7.coordinateHelper, { curvePaths: o6, paths: h3 } = e7, a2 = o6 && i4 ? o6 : h3;
  for (let c5 = 0; c5 < a2.length; ++c5) {
    const e8 = a2[c5], i5 = new V(s7, r11);
    if (i5.index = c5, t7.parts.push(i5), e8.length < 1) continue;
    let o7 = null;
    for (let t8 = 0; t8 < e8.length; ++t8) o7 = P2(i5, n8, o7, e8[t8]);
  }
}
function b(t7, e7, r11) {
  const i4 = e7.spatialReference, s7 = t7.coordinateHelper, n8 = new V(i4, r11);
  n8.index = 0;
  const o6 = new f2(n8);
  o6.index = 0, o6.pos = s7.pointToVector(e7), n8.vertices.push(o6), t7.parts.push(n8);
}
function H(t7, e7, r11) {
  const i4 = e7.spatialReference, { coordinateHelper: s7, parts: n8 } = t7, o6 = e7.points.map((t8) => s7.arrayToVector(t8));
  for (let h3 = 0; h3 < o6.length; h3++) {
    const t8 = new V(i4, r11);
    t8.index = h3, n8.push(t8);
    const e8 = new f2(t8);
    e8.pos = o6[h3], e8.index = 0, t8.vertices.push(e8);
  }
}
function k2(t7) {
  return "mesh" === t7.type;
}
function Z2(t7, e7) {
  if (t7.type !== e7.type) return false;
  if (t7.parts.length !== e7.parts.length) return false;
  for (let s7 = 0; s7 < t7.parts.length; s7++) {
    const r12 = t7.parts[s7], i5 = e7.parts[s7];
    if (r12.vertices.length !== i5.vertices.length) return false;
  }
  const r11 = t7.allVertices, i4 = e7.allVertices;
  for (let s7 = 0; s7 < r11.length; s7++) {
    const t8 = r11[s7].leftSegment?.type, e8 = i4[s7].leftSegment?.type;
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
    const { _part: d2, _editGeometry: n8, _posOrCurveDef: l3 } = this;
    if (null == this._addedVertex && (r11 = "apply", this._addedVertex = new f2(d2)), !n8.parts.includes(d2)) {
      this._partAdded = true;
      const e7 = n8.parts.at(-1)?.index ?? -1;
      d2.index = e7 + 1, n8.parts.push(d2);
    }
    const h3 = d2.getLastVertex(), a2 = n8.coordinateHelper.arrayToVector(v2(l3));
    if (null == h3) d2.vertices.push(this._addedVertex), this._addedVertex.pos = a2, this._addedVertex.index = 0;
    else {
      let e7 = null;
      h3.rightSegment && (this._originalSegment = h3.rightSegment, e7 = this._originalSegment.rightVertex, d2.segments.splice(d2.segments.indexOf(this._originalSegment), 1)), d2.vertices.push(this._addedVertex), this._addedVertex.pos = a2, this._left ??= _4(d2, h3, this._addedVertex, l3), d2.segments.push(this._left), h3.rightSegment = this._left, null != this._originalSegment && null != e7 && (this._right ??= new m5(this._part, this._addedVertex, e7), d2.segments.push(this._right), e7.leftSegment = this._right), d2.updateVertexIndex(this._addedVertex, h3.index + 1);
    }
    this._editGeometry.notifyChanges({ operation: r11, addedVertices: [this._addedVertex], addedParts: this._partAdded ? [d2] : void 0 });
  }
  undo() {
    const { _addedVertex: e7, _part: t7, _left: i4, _right: s7, _originalSegment: r11 } = this;
    null != e7 && (t7.vertices.splice(t7.vertices.indexOf(e7), 1), null != i4 && (t7.segments.splice(t7.segments.indexOf(i4), 1), i4.leftVertex.rightSegment = null), null != s7 && (t7.segments.splice(t7.segments.indexOf(s7), 1), s7.rightVertex.leftSegment = null), null != r11 && (t7.segments.push(r11), r11.leftVertex.rightSegment = r11, r11.rightVertex.leftSegment = r11), null != i4 ? t7.updateVertexIndex(i4.leftVertex, i4.leftVertex.index) : t7.updateVertexIndex(e7, 0), this._partAdded && this._editGeometry.parts.splice(this._editGeometry.parts.indexOf(this._part)), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [e7], removedParts: this._partAdded ? [t7] : void 0 }));
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
    const s7 = { removedVertex: t7, createdSegment: null }, i4 = t7.leftSegment, n8 = t7.rightSegment;
    return r11.vertices.splice(r11.vertices.indexOf(t7), 1), i4 && (r11.segments.splice(r11.segments.indexOf(i4), 1), i4.leftVertex.rightSegment = null), n8 && (r11.segments.splice(r11.segments.indexOf(n8), 1), n8.rightVertex.leftSegment = null), 0 === t7.index && n8 && this._vertices.length > 0 && r11.swapVertices(r11.vertices.indexOf(n8.rightVertex), 0), i4 && n8 && (s7.createdSegment = new m5(r11, i4.leftVertex, n8.rightVertex), r11.segments.push(s7.createdSegment)), n8 && r11.updateVertexIndex(n8.rightVertex, n8.rightVertex.index - 1), s7;
  }
  _undoRemoveVertex(e7) {
    const t7 = e7.removedVertex, r11 = e7.removedVertex.part, s7 = t7.leftSegment, i4 = t7.rightSegment;
    e7.createdSegment && r11.segments.splice(r11.segments.indexOf(e7.createdSegment), 1), r11.vertices.push(t7), s7 && (r11.segments.push(s7), s7.leftVertex.rightSegment = s7), i4 && (r11.segments.push(i4), i4.rightVertex.leftSegment = i4), r11.updateVertexIndex(t7, t7.index);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitSegment.js
var n5 = class {
  constructor(e7, t7, r11) {
    this._editGeometry = e7, this._segment = t7, this._t = r11, this.createdVertex = null, this._createdLeftEdge = null, this._createdRightEdge = null;
  }
  apply() {
    let n8 = "redo";
    const g = this._editGeometry.coordinateHelper, l3 = this._segment, p4 = l3.part, u5 = l3.leftVertex, m7 = l3.rightVertex;
    p4.segments.splice(p4.segments.indexOf(l3), 1);
    const f3 = [];
    switch (null == this.createdVertex && (n8 = "apply", this.createdVertex = new f2(p4)), l3.type) {
      case "line":
        f3.push(g.lerp(u5.pos, m7.pos, this._t, g.createVector()));
        break;
      case "bezier": {
        const t7 = l3.toCurveOrCoordinate();
        f3.push(...M(u5.pos, t7, this._t));
        break;
      }
      case "circular-arc": {
        const e7 = l3.toCurveOrCoordinate(), s7 = l(u5.pos, e7);
        f3.push(...u2(s7, e7, this._t));
        break;
      }
      case "elliptic-arc-4": {
        const e7 = l3.toCurveOrCoordinate(), t7 = h2(u5.pos, e7);
        f3.push(...n2(t7, e7, this._t));
        break;
      }
      case "elliptic-arc-7": {
        const e7 = l3.toCurveOrCoordinate(), t7 = p(u5.pos, e7);
        f3.push(...x(t7, e7, this._t));
        break;
      }
    }
    p4.vertices.push(this.createdVertex), this.createdVertex.pos = g.arrayToVector(v2(f3[0])), f3.length > 1 && (m7.pos = g.arrayToVector(v2(f3[1]))), null == this._createdLeftEdge && (this._createdLeftEdge = _4(p4, u5, this.createdVertex, f3[0])), this._createdLeftEdge.leftVertex.leftSegment ? p4.segments.push(this._createdLeftEdge) : p4.segments.unshift(this._createdLeftEdge), u5.rightSegment = this._createdLeftEdge, null == this._createdRightEdge && (this._createdRightEdge = _4(p4, this.createdVertex, m7, f3.at(1) ?? m7.pos)), p4.segments.push(this._createdRightEdge), m7.leftSegment = this._createdRightEdge, p4.updateVertexIndex(this.createdVertex, u5.index + 1), this._editGeometry.notifyChanges({ operation: n8, addedVertices: [this.createdVertex] });
  }
  undo() {
    if (null == this.createdVertex || null == this._createdLeftEdge || null == this._createdRightEdge) return null;
    const e7 = this._segment, t7 = e7.part, { leftSegment: r11, rightSegment: s7 } = this.createdVertex, i4 = r11?.leftVertex, c5 = s7?.rightVertex;
    t7.vertices.splice(t7.vertices.indexOf(this.createdVertex), 1), t7.segments.splice(t7.segments.indexOf(this._createdLeftEdge), 1), t7.segments.splice(t7.segments.indexOf(this._createdRightEdge), 1), e7.leftVertex.leftSegment ? t7.segments.push(e7) : t7.segments.unshift(e7), i4 && (i4.rightSegment = e7), c5 && (c5.leftSegment = e7), i4 && t7.updateVertexIndex(i4, i4.index), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this.createdVertex] });
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js
var a = class _a {
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
  _apply(n8) {
    this._vertex.pos = this._editGeometry.coordinateHelper.arrayToVector(v2(this._pos));
    const a2 = this._pos, c5 = this._vertex.leftSegment;
    switch (c5?.type) {
      case void 0:
        break;
      case "line":
        e4(a2) || this._replaceEdge(c5, this._vertex, a2);
        break;
      case "bezier":
        i2(a2) ? (c5.curveDefinition.controlPoint1 = a2.b[1], c5.curveDefinition.controlPoint2 = a2.b[2]) : this._replaceEdge(c5, this._vertex, a2);
        break;
      case "circular-arc":
        c(a2) ? c5.curveDefinition.interiorPoint = a2.c[1] : this._replaceEdge(c5, this._vertex, a2);
        break;
      case "elliptic-arc-4":
        o(a2) ? (c5.curveDefinition.centerPoint = a2.a[1], c5.curveDefinition.sweep = a2.a[2], c5.curveDefinition.orientation = a2.a[3]) : this._replaceEdge(c5, this._vertex, a2);
        break;
      case "elliptic-arc-7":
        s3(a2) ? (c5.curveDefinition.centerPoint = a2.a[1], c5.curveDefinition.sweep = a2.a[2], c5.curveDefinition.orientation = a2.a[3], c5.curveDefinition.rotation = a2.a[4], c5.curveDefinition.semiMajorAxisLength = a2.a[5], c5.curveDefinition.minorMajorAxisRatio = a2.a[6]) : this._replaceEdge(c5, this._vertex, a2);
    }
    this._editGeometry.parts.forEach((e7) => e7.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: n8, updatedVertices: [this._vertex] });
  }
  _replaceEdge(e7, t7, i4) {
    const r11 = this._vertex.part, o6 = e7 ? r11.segments.indexOf(e7) : -1;
    if (o6 > -1 && e7.leftVertex) {
      const s7 = _4(r11, e7.leftVertex, t7, i4);
      this._vertex.part.segments.splice(o6, 1, s7);
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
      const n8 = r11.getFirstVertex(), i4 = r11.getLastVertex();
      if (r11.isClosed() || r11.vertices.length < 2 || null == n8 || null == i4) return;
      if (2 === r11.vertices.length && "line" === i4.leftSegment?.type) return;
      this._createdSegment = new m5(this._part, i4, n8);
    }
    this._createdSegment.leftVertex.rightSegment = this._createdSegment, this._createdSegment.rightVertex.leftSegment = this._createdSegment, r11.segments.push(this._createdSegment), this._editGeometry.notifyChanges({ operation: e7 });
  }
  undo() {
    const { _part: t7, _createdSegment: r11, _editGeometry: n8 } = this;
    null != r11 && (L(t7.segments, r11), r11.leftVertex.rightSegment = null, r11.rightVertex.leftSegment = null, n8.notifyChanges({ operation: "undo" }));
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/AddOrUpdatePart.js
var s4 = class _s {
  constructor(t7, e7, i4, s7) {
    this._editGeometry = t7, this._positions = e7, this._part = i4, this._viewingMode = s7, this._addedPart = null, this._originalPositions = null, this._hasApplied = false;
  }
  get part() {
    return this._addedPart;
  }
  apply() {
    const s7 = this._editGeometry, r11 = s7.parts, o6 = this._part;
    if (!this._hasApplied && o6 && r11.includes(o6)) {
      const e7 = o6.getFirstVertex(), i4 = o6.getLastVertex();
      this._originalPositions = S(s7, { startingVertex: e7, endingVertexInclusive: i4 }).parts[0];
    }
    const n8 = this._addedPart ?? this._part ?? (this._addedPart = new V(s7.spatialReference, this._viewingMode, "polygon" === s7.type));
    r11.includes(n8) || (r11.push(n8), n8.index = r11.length - 1);
    const a2 = n8.vertices.slice(), d2 = [];
    n8.segments.length = 0, n8.vertices.length = 0;
    let p4 = null;
    for (const t7 of this._positions) p4 = P2(n8, s7.coordinateHelper, p4, t7), d2.push(p4);
    this._hasApplied = true, s7.notifyChanges({ operation: this._hasApplied ? "redo" : "apply", addedVertices: d2, removedVertices: a2, addedParts: this._addedPart ? [this._addedPart] : void 0 });
  }
  undo() {
    if (!this._hasApplied) return;
    const { _editGeometry: t7, _addedPart: e7 } = this;
    if (e7) {
      const i4 = t7.parts.indexOf(e7);
      if (-1 !== i4) return t7.parts.splice(i4, 1), void t7.notifyChanges({ operation: "undo", removedVertices: e7.vertices.slice(), removedParts: [e7] });
    }
    const s7 = this._part;
    if (!s7 || !t7.parts.includes(s7) || !this._originalPositions) return;
    const r11 = Array.from(s7.iterateVertices()), o6 = [];
    s7.vertices.length = 0, s7.segments.length = 0;
    let n8 = null;
    for (const a2 of this._positions) n8 = P2(s7, t7.coordinateHelper, n8, a2), o6.push(n8);
    t7.notifyChanges({ operation: "undo", addedVertices: o6, removedVertices: r11 });
  }
  accumulate(t7) {
    return t7 instanceof _s && null != t7._part && (t7._part === this._addedPart || t7._part === this._part) && (this._positions = t7._positions, this.apply(), true);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveMesh.js
var t4 = class _t {
  constructor(t7, e7, i4, s7) {
    this._editGeometry = t7, this.dx = e7, this.dy = i4, this.dz = s7, this._firstTime = true;
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
  _apply(t7, e7, i4, s7) {
    const o6 = this._editGeometry.geometry;
    o6.offset(e7, i4, s7);
    const d2 = this._editGeometry.parts[0].getFirstVertex();
    if (!d2) return;
    const r11 = this._editGeometry.coordinateHelper;
    d2.pos = r11.pointToVector(o6.origin), this._editGeometry.notifyChanges({ operation: t7, updatedVertices: [d2] });
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js
var t5 = class _t {
  constructor(t7, e7, i4, c5) {
    this._helper = t7, this.dx = e7, this.dy = i4, this.dz = c5;
  }
  _move(t7, i4, c5, s7) {
    this._helper.addDelta(t7.pos, i4, c5, s7), e5(t7.leftSegment, i4, c5);
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
      const { controlPoint1: c5, controlPoint2: s7 } = t7.curveDefinition;
      c5[0] += e7, c5[1] += i4, s7[0] += e7, s7[1] += i4;
      break;
    }
    case "circular-arc": {
      const { interiorPoint: c5 } = t7.curveDefinition;
      c5[0] += e7, c5[1] += i4;
      break;
    }
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      const { centerPoint: c5 } = t7.curveDefinition;
      c5[0] += e7, c5[1] += i4;
    }
  }
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js
var M5 = class _M {
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
  constructor(t7, i4, e7, s7 = 0, n8 = 0) {
    this._helper = t7, this._planeType = i4, this._edge = e7, this.distance = s7, this._plane = v3(), this._offsetPlane = v3(), this._minDistance = -1 / 0, this._maxDistance = 1 / 0, this._selectedArrow = 1, 0 === n8 && this._initialize();
  }
  _initialize() {
    this._initializeNeighbors(), this._initializePlane(), this._initializeDistanceConstraints();
  }
  _initializeNeighbors() {
    const t7 = this._toXYZ(this._edge.leftVertex.pos), i4 = this._toXYZ(this._edge.leftVertex.leftSegment?.leftVertex?.pos), e7 = this._toXYZ(this._edge.rightVertex.pos), s7 = this._toXYZ(this._edge.rightVertex.rightSegment?.rightVertex?.pos);
    this._edgeDirection = G2(n(), t7, e7), i4 ? (this._left = this._computeNeighbor(t7, i4, this._edgeDirection), this._right = this._computeNeighbor(e7, s7, this._edgeDirection, this._left)) : (this._right = this._computeNeighbor(e7, s7, this._edgeDirection), this._left = this._computeNeighbor(t7, i4, this._edgeDirection, this._right));
  }
  _toXYZ(t7) {
    return null != t7 ? this._helper.toXYZ(t7) : null;
  }
  _pointToXYZ(t7) {
    return this._toXYZ(this._helper.pointToVector(t7));
  }
  _computeNeighbor(t7, i4, e7, s7) {
    const n8 = n();
    if (i4) {
      G2(n8, t7, i4);
      const s8 = !this._passesBisectingAngleThreshold(n8, e7);
      return { start: t7, end: i4, direction: s8 ? this._bisectVectorsPerpendicular(e7, n8) : n8, isOriginalDirection: !s8 };
    }
    return this._helper.hasZ() ? s7 && (P(n8, e7, s7.direction), P(n8, n8, e7), _3(n8, n8), Math.sign(n8[1]) !== Math.sign(e7[0]) && x2(n8, n8, -1)) : u4(n8, -e7[1], e7[0], 0), { start: t7, end: i4, direction: n8, isOriginalDirection: true };
  }
  _passesBisectingAngleThreshold(t7, i4) {
    const e7 = Math.abs(f(i4, t7));
    return e7 >= z3 && e7 <= Math.PI - z3;
  }
  _bisectVectorsPerpendicular(t7, i4) {
    const e7 = A(t7, i4) < 0 ? t7 : y2(n(), t7), s7 = Math.abs(A(e7, i4));
    if (!(s7 < A2 || s7 > 1 - A2)) return this._bisectDirection(e7, i4);
    const n8 = P(n(), e7, [0, 0, 1]);
    return _3(n8, n8);
  }
  _bisectDirection(t7, i4) {
    const e7 = c2(n(), t7, i4);
    return _3(e7, e7);
  }
  _initializePlane() {
    const t7 = this._computeNormalDirection(this._left), i4 = this._computeNormalDirection(this._right);
    A(t7, i4) < 0 && y2(i4, i4), U(this._left.start, this._bisectDirection(t7, i4), this._plane);
  }
  _computeNormalDirection(t7) {
    const i4 = P(n(), t7.direction, this._edgeDirection);
    _3(i4, i4);
    const e7 = P(n(), this._edgeDirection, i4);
    return 1 === this._planeType && (e7[2] = 0), _3(e7, e7);
  }
  _initializeDistanceConstraints() {
    null == this._left.end || this.requiresSplitEdgeLeft || this._updateDistanceConstraint(X(this._plane, this._left.end)), null == this._right.end || this.requiresSplitEdgeRight || this._updateDistanceConstraint(X(this._plane, this._right.end)), this._updateIntersectDistanceConstraint(this._plane);
  }
  _updateDistanceConstraint(t7) {
    t7 <= 0 && (this._minDistance = Math.max(this._minDistance, t7)), t7 >= 0 && (this._maxDistance = Math.min(this._maxDistance, t7));
  }
  _updateIntersectDistanceConstraint(t7) {
    const i4 = y3(t7), h3 = this._edgeDirection, o6 = c2(n(), this._left.start, this._left.direction), a2 = c2(n(), this._right.start, this._right.direction), _5 = this._pointInBasis2D(n4(), i4, h3, this._left.start), l3 = this._pointInBasis2D(n4(), i4, h3, o6), p4 = this._pointInBasis2D(n4(), i4, h3, this._right.start), d2 = this._pointInBasis2D(n4(), i4, h3, a2), [m7] = M2({ start: l3, end: _5, type: 1 }, { start: d2, end: p4, type: 1 });
    if (!m7) return;
    const u5 = e2(n4(), _5, l3);
    v(u5, u5);
    const D = e2(n4(), m7, l3), x4 = j(u5, D), V2 = c2(n(), o6, x2(n(), this._left.direction, -x4)), N = X(t7, V2);
    this._updateDistanceConstraint(N);
  }
  _pointInBasis2D(t7, i4, e7, s7) {
    return t7[0] = m3(i4, s7), t7[1] = m3(e7, s7), t7;
  }
  _offset(t7, i4) {
    Number.isFinite(this._minDistance) && (i4 = Math.max(this._minDistance, i4)), Number.isFinite(this._maxDistance) && (i4 = Math.min(this._maxDistance, i4)), q(this._offsetPlane, this._plane), this._offsetPlane[3] -= i4;
    const e7 = (t8, i5, e8) => null != i5 && J(this._offsetPlane, t8, c2(n(), t8, i5), e8), s7 = n();
    (t7 === this._edge.leftVertex ? e7(this._left.start, this._left.direction, s7) : e7(this._right.start, this._right.direction, s7)) && this._helper.copy(this._helper.fromXYZ(s7, void 0, this._helper.getM(t7.pos)), t7.pos);
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
    const e7 = this._helper.toXYZ(this._helper.pointToVector(i4)), s7 = R(this._plane, e7, n()), n8 = X(this._plane, e7), r11 = r2(n8, this._minDistance, this._maxDistance);
    return I2(e7, s7, e7, r11 / n8), { start: s7, end: e7 };
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
    return q(t7._plane, this._plane), q(t7._offsetPlane, this._offsetPlane), t7._maxDistance = this._maxDistance, t7._minDistance = this._minDistance, t7._left = this._cloneNeighbor(this._left), t7._right = this._cloneNeighbor(this._right), t7._edgeDirection = o2(n(), this._edgeDirection), t7;
  }
  _maybeEqualsVec3(t7, i4) {
    return null == t7 && null == i4 || null != t7 && null != i4 && F(t7, i4);
  }
  _cloneNeighbor({ start: t7, end: i4, direction: e7, isOriginalDirection: s7 }) {
    return { start: o2(n(), t7), end: null != i4 ? o2(n(), i4) : null, direction: o2(n(), e7), isOriginalDirection: s7 };
  }
};
var z3 = s(15);
var A2 = 1e-3;

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js
var o4 = class _o {
  constructor(t7, e7, i4 = 0) {
    this.origin = t7, this.angle = e7, this._accumulationType = i4;
  }
  _rotate(t7, i4) {
    I(t7.pos, t7.pos, this.origin, i4), n6(t7.leftSegment, this.origin, i4);
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
function n6(t7, o6, n8) {
  switch (t7?.type) {
    case null:
    case void 0:
    case "line":
      return;
    case "bezier": {
      const { controlPoint1: i4, controlPoint2: r11 } = t7.curveDefinition;
      return I(i4, i4, o6, n8), void I(r11, r11, o6, n8);
    }
    case "circular-arc": {
      const { interiorPoint: i4 } = t7.curveDefinition;
      return void I(i4, i4, o6, n8);
    }
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      const r11 = t7.leftVertex.pos, a2 = I([0, 0], [r11[0], r11[1]], o6, -n8), c5 = t7.toCurveOrCoordinate(), [, s7, l3, u5, p4, g, m7] = c3(a2, c5, o6, n8).a;
      if ("elliptic-arc-4" === t7.type) {
        const e7 = t7.curveDefinition;
        e7.centerPoint = [...s7], e7.sweep = l3, e7.orientation = u5;
      } else {
        const e7 = t7.curveDefinition;
        e7.centerPoint = [...s7], e7.sweep = l3, e7.orientation = u5, e7.rotation = p4, e7.semiMajorAxisLength = g, e7.minorMajorAxisRatio = m7;
      }
    }
  }
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js
var l2 = class _l {
  constructor(t7, i4, r11, o6, e7 = 0) {
    this.origin = t7, this.axis1 = i4, this.factor1 = r11, this.factor2 = o6, this._accumulationType = e7, this.axis2 = r7(i4[1], -i4[0]);
  }
  _scale({ pos: t7, leftSegment: i4 }, o6, a2) {
    const e7 = i4?.toCurveOrCoordinate(), { origin: s7, axis1: c5, axis2: n8 } = this;
    k(t7, t7, s7, c5, o6), k(t7, t7, s7, n8, a2), m6(i4, s7, c5, n8, o6, a2, e7);
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
function m6(t7, a2, l3, m7, h3, p4, u5) {
  switch (t7?.type) {
    case null:
    case void 0:
    case "line":
      return;
    case "bezier": {
      const { controlPoint1: i4, controlPoint2: o6 } = t7.curveDefinition;
      k(i4, i4, a2, l3, h3), k(i4, i4, a2, m7, p4), k(o6, o6, a2, l3, h3), k(o6, o6, a2, m7, p4);
      break;
    }
    case "circular-arc":
    case "elliptic-arc-4":
    case "elliptic-arc-7": {
      if (!u5) return;
      const r11 = t7.leftVertex.pos, x4 = c4(a2[0], a2[1], l3[0], l3[1], m7[0], m7[1], h3, p4), g = s2(e3(), x4), j4 = g ? z(n4(), [r11[0], r11[1]], g) : r11, [, y5, _5, v5, b2, d2, A3] = m4(u5, [j4[0], j4[1]], t7, a2, l3, m7, h3, p4).a;
      if ("elliptic-arc-7" === t7.type) {
        const i4 = t7.curveDefinition;
        i4.centerPoint = y5, i4.sweep = _5, i4.orientation = v5, i4.rotation = b2, i4.semiMajorAxisLength = d2, i4.minorMajorAxisRatio = A3;
      } else {
        const i4 = new x3(t7.part, t7.leftVertex, t7.rightVertex, { centerPoint: y5, sweep: _5, orientation: v5, rotation: b2, semiMajorAxisLength: d2, minorMajorAxisRatio: A3 });
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
    for (const { pos: i4, leftSegment: n8 } of e7.allVertices) this._newPositions.push(i4), this._newSegments.push(s5(n8));
  }
  apply() {
    const t7 = null == this._originalPositions ? "apply" : "redo";
    if (!this._originalPositions) {
      const t8 = this._editGeometry.coordinateHelper;
      this._originalPositions = [], this._originalSegments = [];
      for (const { pos: e7, leftSegment: i4 } of this._editGeometry.iterateVertices()) this._originalPositions.push(t8.clone(e7)), this._originalSegments.push(s5(i4));
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
    const r11 = this._editGeometry.coordinateHelper, l3 = this._editGeometry.allVertices, h3 = [];
    for (let a2 = 0; a2 < l3.length; a2++) {
      const e8 = l3[a2], p4 = i4[a2], _5 = o6[a2];
      h(e8.pos, p4) && n7(s5(e8.leftSegment), _5) || (h3.push(l3[a2]), r11.copy(p4, e8.pos), e8.leftSegment && "curveDefinition" in e8.leftSegment && _5 && (e8.leftSegment.curveDefinition = __spreadValues({}, _5)));
    }
    this._editGeometry.parts.forEach((t7) => t7.unnormalizeVertexPositions()), h3.length && this._editGeometry.notifyChanges({ operation: e7, updatedVertices: h3 });
  }
};
function s5(t7) {
  if (t7 && "line" !== t7.type) return __spreadValues({}, t7.curveDefinition);
}
function n7(t7, i4) {
  return null == t7 && null == i4 || !!t7 && !!i4 && !i(t7, i4);
}

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js
var t6;
var s6 = /* @__PURE__ */ Symbol();
var o5 = class {
  static {
    t6 = s6;
  }
  constructor(s7) {
    this._operations = [], this._closed = false, this[t6] = true, s7 && (this._operations = s7, this._closed = true);
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
    const s7 = this._operations.length ? this._operations[this._operations.length - 1] : null;
    return s7 && s7.accumulate(t7) || (this._operations.push(t7), t7.apply()), true;
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
    return this._apply(new n5(this.data, e7, t7));
  }
  updateVertices(e7, t7, r11 = 1) {
    return this._apply(new t2(this.data, e7, t7), r11);
  }
  move(e7, t7, r11, s7 = 1) {
    return k2(this.data) ? this._apply(new t4(this.data, e7, t7, r11), s7) : this.moveVertices(this.data.allVerticesUnordered, e7, t7, r11, s7);
  }
  moveVertices(e7, t7, r11, s7, i4 = 1) {
    return k2(this.data) ? this._apply(new t4(this.data, t7, r11, s7), i4) : this.updateVertices(e7, new t5(this.data.coordinateHelper, t7, r11, s7), i4);
  }
  scale(e7, t7, r11, o6, s7 = 1, i4 = 0) {
    return this.scaleVertices(this.data.allVerticesUnordered, e7, t7, r11, o6, s7, i4);
  }
  scaleVertices(e7, t7, r11, o6, s7, i4 = 1, a2 = 0) {
    return this.updateVertices(e7, new l2(t7, r11, o6, s7, a2), i4);
  }
  rotate(e7, t7, r11 = 1, o6 = 0) {
    return this.rotateVertices(this.data.allVerticesUnordered, e7, t7, r11, o6);
  }
  rotateVertices(e7, t7, r11, o6 = 1, s7 = 0) {
    return this.updateVertices(e7, new o4(t7, r11, s7), o6);
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
    return this._apply(new s4(this.data, e7, t7, this.viewingMode));
  }
  setVertexPosition(e7, t7) {
    return this._apply(new a(this.data, e7, t7));
  }
  offsetEdge(e7, t7, r11, o6 = 1) {
    return this.updateVertices([t7.leftVertex, t7.rightVertex], new M5(this.data.coordinateHelper, e7, t7, r11), o6);
  }
  trySetGeometry(e7, t7 = 1) {
    const { data: r11 } = this, { coordinateHelper: s7 } = r11;
    if (r11.type !== e7.type || !r11.spatialReference.equals(e7.spatialReference) || s7.hasZ() !== e7.hasZ || s7.hasM() !== e7.hasM || k2(r11)) return;
    const n8 = w.fromGeometry(e7, this.viewingMode, { allowCurves: this.allowCurves });
    return Z2(r11, n8) ? this.overwriteGeometryDataInPlace(n8, t7) : void 0;
  }
  overwriteGeometryDataInPlace(e7, t7 = 1) {
    return this._apply(new i3(this.data, e7), t7);
  }
  createResetState() {
    if (k2(this.data)) return this._createResetStateMesh();
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
    if (!k2(this.data)) return e();
    const e7 = this.data.geometry, { vertexSpace: s7 } = e7;
    if (s7.origin) {
      const o6 = t(s7.origin);
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
    return new _S(w.fromGeometry(e7, t7, r11), t7, r11?.allowCurves);
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

export {
  Y,
  V,
  w,
  t2 as t,
  t5 as t2,
  M5 as M,
  o4 as o,
  l2 as l,
  o5 as o2,
  S2 as S,
  e6 as e
};
//# sourceMappingURL=chunk-VTKZ74CB.js.map
