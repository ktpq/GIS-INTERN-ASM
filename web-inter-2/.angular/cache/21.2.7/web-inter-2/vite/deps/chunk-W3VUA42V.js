import {
  E,
  F,
  I as I2,
  N as N2,
  O,
  P as P2,
  S as S2,
  S2 as S3,
  T,
  T2,
  a as a2,
  a2 as a3,
  c,
  c2,
  d,
  d2 as d3,
  e,
  f,
  f2,
  f3,
  f4 as f5,
  f5 as f6,
  h,
  h2,
  i as i3,
  k,
  l2 as l4,
  l3 as l5,
  l4 as l6,
  l5 as l7,
  m,
  m2,
  n as n4,
  o as o4,
  o2 as o5,
  o3 as o7,
  o4 as o8,
  p,
  r as r5,
  r2 as r6,
  s as s2,
  s2 as s3,
  s3 as s4,
  s4 as s5,
  s5 as s7,
  u as u4,
  u2 as u5,
  v as v2,
  x,
  y
} from "./chunk-44UE3RVE.js";
import {
  s2 as s6
} from "./chunk-VWCAENG5.js";
import {
  o as o6
} from "./chunk-IHDBO625.js";
import {
  h as h3
} from "./chunk-CZVOX5HE.js";
import {
  d as d2,
  p as p2,
  y as y2
} from "./chunk-FRAOLENO.js";
import {
  r as r2
} from "./chunk-FQP6WOBG.js";
import {
  i as i2
} from "./chunk-V3SSXFIC.js";
import {
  _ as _3
} from "./chunk-K3KNKCHY.js";
import {
  f as f4
} from "./chunk-3B4JA4VA.js";
import {
  r as r4
} from "./chunk-VOOLKODY.js";
import {
  _ as _2,
  l as l3
} from "./chunk-LJM2ZWSL.js";
import {
  J,
  nt
} from "./chunk-WLPGGM5I.js";
import {
  B as B2,
  I,
  L,
  _
} from "./chunk-PBTPKOC3.js";
import {
  s
} from "./chunk-VJCO7ZMT.js";
import {
  n as n3
} from "./chunk-JTTFG3NZ.js";
import {
  M,
  i
} from "./chunk-JXCCENBV.js";
import {
  r as r3
} from "./chunk-YORNLQGX.js";
import {
  at,
  o as o3,
  wt
} from "./chunk-3EE7FDFG.js";
import {
  n as n2
} from "./chunk-47CFN4JI.js";
import {
  u as u3
} from "./chunk-M6LQLIUB.js";
import {
  P
} from "./chunk-P3OSPFTR.js";
import {
  B,
  S,
  l as l2,
  o as o2,
  u,
  v
} from "./chunk-5GPMO33J.js";
import {
  u as u2
} from "./chunk-UXWT3ISO.js";
import {
  o
} from "./chunk-RTVKY37F.js";
import {
  a,
  l3 as l,
  n2 as n,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/ComputedAnimatedParams.js
function i4(i6) {
  let { pixelDimensions: t, texelDimensions: s9, baseSize: r9, referenceSize: n6, strokeWidth: o9, sizeRatio: f7 } = i6;
  if (t || (t = i6.sprite.sdf ? [0, 0] : [i6.sprite.width, i6.sprite.height]), s9 || (s9 = i6.sprite.sdf ? [0, 0] : t), null != i6.patternHeight) {
    const e3 = i6.patternHeight / t[1];
    t[1] *= e3, t[0] *= e3;
  }
  -1 === r9 && (r9 = t[1]), r9 = u2(r9), n6 = u2(n6), o9 = u2(o9);
  const p3 = (i6.sprite.sdfDecodeCoeff ?? 1) * f7;
  return __spreadProps(__spreadValues({}, i6), { pixelDimensions: t, texelDimensions: s9, baseSize: r9, referenceSize: n6, strokeWidth: o9, sdfDecodeCoeff: p3 });
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMarkerMeshWriter.js
var M2 = 64;
var g = 64;
var v3 = 2;
var w = class extends o4 {
  get vertexSpec() {
    return { createComputedParams: i4, optionalAttributes: { zoomRange: s4, value1Position2Value2: p, lineLength: k }, attributes: { id: y, bitset: f3, pos: F, offset: O.marker, uv: S2.marker, animationPointerAndBaseSizeAndReferenceSize: x, sizing: E, angle: N2 } };
  }
  _write(e3, i6, r9) {
    const s9 = this.evaluatedMeshParams.sprite, { textureBinding: n6 } = s9;
    e3.recordStart(this.instanceId, this.attributeLayout, n6);
    const o9 = i6.getDisplayId();
    if (this.shift && "esriGeometryPolyline" === i6.geometryType) {
      if (!r9) {
        const r10 = _2.fromFeatureSetReaderCIM(i6);
        r10 && this._writeParticles(e3, i6, r10);
      }
    } else if (null != this.evaluatedMeshParams.placement) this._writePlacedMarkers(e3, i6);
    else if ("esriGeometryPolygon" === i6.geometryType) {
      const t = i6.readCentroidForDisplay();
      if (!t) return;
      const [r10, s10] = t.coords;
      this._writeQuad(e3, o9, r10, s10);
    } else if ("esriGeometryPoint" === i6.geometryType) {
      const t = i6.readXForDisplay(), r10 = i6.readYForDisplay();
      this._writeQuad(e3, o9, t, r10);
    } else {
      const t = i6.readGeometryForDisplay();
      t && t.forEachVertex((t2, i7) => {
        this._writeQuad(e3, o9, t2, i7);
      });
    }
    e3.recordEnd();
  }
  _writePlacedMarkers(s9, n6) {
    const o9 = _2.fromFeatureSetReaderCIM(n6)?.clone();
    if (!o9) return;
    const a5 = -1, c4 = e.getPlacement(o9, a5, this.evaluatedMeshParams.placement, u2(1), s9.id);
    if (!c4) return;
    const l9 = n6.getDisplayId();
    let m3 = c4.next(), d5 = null;
    for (; null != m3; ) {
      const e3 = m3.tx, t = -m3.ty;
      if (Math.abs(e3) > r2 || Math.abs(t) > r2) {
        m3 = c4.next();
        continue;
      }
      const r9 = -m3.getAngle();
      s9.recordBounds(e3, t, M2, g), this.shift ? d5 && this._writeQuad(s9, l9, d5[0], d5[1], void 0, r9) : this._writeQuad(s9, l9, e3, t, void 0, r9), d5 = [e3, t], m3 = c4.next();
    }
  }
  _writeParticles(e3, t, i6) {
    const r9 = t.getDisplayId();
    for (; i6.nextPath(); ) {
      const t2 = [];
      for (; i6.nextPoint(); ) t2.push([i6.x, i6.y]);
      const s9 = _4(t2);
      let n6 = 0;
      for (let e4 = 1; e4 < t2.length; e4++) {
        const i7 = t2[e4][0] - t2[e4 - 1][0], r10 = t2[e4][1] - t2[e4 - 1][1], s10 = Math.sqrt(i7 * i7 + r10 * r10);
        n6 += s10;
      }
      const o9 = (t3) => {
        for (const i7 of s9) {
          const { a: s10, b: o10 } = i7;
          this._writeQuad(e3, r9, s10.position[0], s10.position[1], [s10.distance - t3, o10.position[0], o10.position[1], o10.distance - t3], this.evaluatedMeshParams.angleToLine ? Math.atan2(s10.direction[1], s10.direction[0]) : 0, n6, true);
        }
      }, { placement: a5 } = this.evaluatedMeshParams;
      if (!a5 || "placementTemplate" in a5 || "CIMMarkerPlacementOnVertices" === a5.type) {
        let e4;
        if (a5 && "CIMMarkerPlacementOnVertices" !== a5.type) e4 = a5.placementTemplate;
        else {
          e4 = [0];
          for (const t4 of s9) {
            const { a: i7, b: r10 } = t4, s10 = i7.position[0] - r10.position[0], n7 = i7.position[1] - r10.position[1], o10 = Math.sqrt(s10 * s10 + n7 * n7);
            e4.push(o10);
          }
        }
        let t3 = -1 * n6;
        for (; t3 < (1 + v3 / 2) * n6; ) for (const i7 of e4) t3 += i7, o9(t3);
      } else "CIMMarkerPlacementAtExtremities" === a5.type ? "JustBegin" === a5.extremityPlacement ? o9(1) : "JustEnd" === a5.extremityPlacement ? (o9(n6 - 1), o9(-1)) : "Both" === a5.extremityPlacement && (o9(1), o9(n6 - 1)) : "CIMMarkerPlacementOnLine" === a5.type && ("LineBeginning" === a5.relativeTo ? o9(1) : "LineEnd" === a5.relativeTo ? (o9(n6 - 1), o9(-1)) : "LineMiddle" === a5.relativeTo && o9(n6 / 2));
    }
  }
  _writeQuad(e3, t, i6, r9, n6, o9 = 0, a5 = 0, c4 = false) {
    const l9 = this.evaluatedMeshParams.sprite, { rect: m3 } = l9, d5 = m3.x + at, p3 = m3.y + at, h6 = m3.x + m3.width - at, u7 = m3.y + m3.height - at, f7 = e3.vertexCount();
    c4 || e3.recordBounds(i6, r9, M2, M2);
    const x4 = { texXmin: d5, texYmin: p3, texXmax: h6, texYmax: u7, value1Position2Value2: n6, angle: o9 / o6, lineLength: a5 };
    for (let s9 = 0; s9 < 4; s9++) this._writeVertex(e3, t, i6, r9, x4);
    e3.indexEnsureSize(6), e3.indexWrite(f7), e3.indexWrite(f7 + 1), e3.indexWrite(f7 + 2), e3.indexWrite(f7 + 1), e3.indexWrite(f7 + 3), e3.indexWrite(f7 + 2);
  }
};
function _4(e3) {
  const t = [];
  let i6 = 0;
  for (let r9 = 1; r9 < e3.length; r9++) {
    const s9 = e3[r9 - 1], n6 = e3[r9], o9 = n6[0] - s9[0], a5 = n6[1] - s9[1], c4 = Math.sqrt(o9 * o9 + a5 * a5), l9 = o9 / c4, m3 = a5 / c4;
    t.push({ a: { position: s9, distance: i6, direction: [l9, m3] }, b: { position: n6, distance: i6 + c4, direction: [l9, m3] } }), i6 += c4;
  }
  return t;
}
var b = class extends w {
  constructor() {
    super(...arguments), this.shift = false;
  }
};
var C = class extends w {
  constructor() {
    super(...arguments), this.shift = true;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedPolyMeshWriters.js
var j = class extends o4 {
  _write(t, s9, i6) {
    const r9 = i6 ?? _2.fromFeatureSetReaderCIM(s9);
    if (!r9) return;
    const n6 = this.evaluatedMeshParams.sprite, { textureBinding: o9 } = n6;
    t.recordStart(this.instanceId, this.attributeLayout, o9);
    const a5 = s9.getDisplayId();
    this._writePoly(t, a5, r9.asOptimized()), t.recordEnd();
  }
};
var S4 = class extends j {
  constructor() {
    super(...arguments), this.vertexSpec = { createComputedParams: i4, attributes: { id: y, bitset: f3, pos: F, offset: O.fill, tlbr: d, animationPointerAndBaseSizeAndReferenceSize: x, sizing: E }, optionalAttributes: { zoomRange: s4, value1Position2Value2: r6, lineLength: l5, angle: P2 } };
  }
  _writePoly(t, e3, i6) {
    const r9 = this._clip(i6);
    if (!r9) return;
    i6 = r9;
    const o9 = [], a5 = t.vertexCount();
    let h6;
    if (p2(o9, i6)) {
      if (0 === o9.length) return;
      h6 = 0;
      for (const s9 of o9) {
        const r10 = i6.coords[2 * s9], n6 = i6.coords[2 * s9 + 1];
        this._writeVertex(t, e3, r10, n6), h6++;
      }
    } else {
      const { coords: r10, lengths: n6 } = i6, o10 = f4(r10, n6);
      h6 = o10.vertexCount;
      for (let s9 = 0; s9 < o10.buffer.length / 2; s9++) {
        const i7 = o10.buffer[2 * s9], r11 = o10.buffer[2 * s9 + 1];
        this._writeVertex(t, e3, i7, r11);
      }
    }
    if (h6 > 0) {
      t.indexEnsureSize(h6);
      for (let e4 = 0; e4 < h6; e4++) t.indexWrite(e4 + a5);
    }
  }
  _clip(t) {
    const e3 = this.hasEffects;
    return d2(t, e3 ? 256 : 8);
  }
};
var T3 = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0, this.pathLength = 0;
  }
};
var A = 65535;
var R = class extends j {
  constructor() {
    super(...arguments), this.vertexSpec = { createComputedParams: i4, attributes: { id: y, bitset: f3, pos: F, offset: O.line, tlbr: d, animationPointerAndBaseSizeAndReferenceSize: x, sizing: E, accumulatedDistance: u4, normal: m2, segmentDirection: T }, optionalAttributes: { zoomRange: s4, value1Position2Value2: r6, lineLength: k, angle: h } }, this._tessParams = new d3(), this._currentWrite = new T3(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: A, textured: false }, this._lineLength = 0, this._lineTessellator = new _3((t, e3, s9, i6, r9, n6, o9, a5, h6, l9, m3) => this._writeTesselatedVertex(t, e3, s9, i6, r9, n6, o9, a5, h6, l9, m3, this._lineLength), this._writeTriangle.bind(this), false);
  }
  _writePoly(s9, i6, n6) {
    const o9 = 64, a5 = false, h6 = y2(_2.fromOptimized(n6, "esriGeometryPolyline"), o9);
    if (null == h6) return;
    const { _currentWrite: l9, _tessellationOptions: m3 } = this, { baseSize: u7, capType: c4, joinType: d5, miterLimit: f7 } = this.evaluatedMeshParams, p3 = u2(0.5 * u7);
    m3.halfWidth = p3, m3.capType = f(c4 || "Round"), m3.joinType = m(d5 || "Round"), m3.miterLimit = f7 || 2, l9.out = s9, l9.id = i6, l9.vertexCount = 0, l9.indexCount = 0, l9.vertexFrom = s9.vertexCount(), l9.vertexBounds = 1;
    for (const { line: t, start: e3, pathLength: r9 } of h6) {
      m3.initialDistance = e3 % A, l9.pathLength = r9, this._lineLength = 0;
      for (let e4 = 1; e4 < t.length; e4++) {
        const s10 = t[e4].x - t[e4 - 1].x, i7 = t[e4].y - t[e4 - 1].y;
        this._lineLength += Math.sqrt(s10 * s10 + i7 * i7);
      }
      this._lineTessellator.tessellate(t, m3, a5);
    }
  }
  _writeTesselatedVertex(t, e3, s9, i6, r9, n6, o9, a5, h6, l9, m3, u7) {
    const { out: c4, id: d5, vertexBounds: f7, pathLength: p3 } = this._currentWrite;
    return this.hasEffects && c4.recordBounds(t, e3, f7, f7), this._tessParams.extrusionOffsetX = o9, this._tessParams.extrusionOffsetY = a5, this._tessParams.normalX = h6, this._tessParams.normalY = l9, this._tessParams.directionX = r9, this._tessParams.directionY = n6, this._tessParams.distance = m3, this._tessParams.pathLength = p3, this._tessParams.lineLength = u7, this._writeVertex(c4, d5, t, e3, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t, e3, s9) {
    const { out: i6 } = this._currentWrite;
    i6.indexEnsureSize(3), i6.indexWrite(t), i6.indexWrite(e3), i6.indexWrite(s9), this._currentWrite.indexCount += 3;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js
function e2(t, e3, n6) {
  return t[0] = e3[0] - n6[0], t[1] = e3[1] - n6[1], t;
}
function n5(t, e3) {
  return Math.sqrt(t * t + e3 * e3);
}
function s8(t) {
  const e3 = n5(t[0], t[1]);
  t[0] /= e3, t[1] /= e3;
}
function i5(t, e3) {
  return n5(t[0] - e3[0], t[1] - e3[1]);
}
function r7(t, e3) {
  return t[e3 + 1];
}
function h4(t) {
  return t.length - 1;
}
function a4(t) {
  let e3 = 0;
  for (let n6 = 0; n6 < h4(t); n6++) e3 += d4(t, n6);
  return e3;
}
function d4(t, e3, n6 = 1) {
  let [s9, i6] = r7(t, e3);
  return [s9, i6] = [Math.round(s9), Math.round(i6)], Math.sqrt(s9 * s9 + i6 * i6) * n6;
}
var u6 = class _u {
  constructor(t, e3, n6, s9, i6) {
    this._segments = t, this._index = e3, this._distance = n6, this._xStart = s9, this._yStart = i6, this._done = false;
  }
  static create(t) {
    return new _u(t, 0, 0, t[0][0], t[0][1]);
  }
  clone() {
    return new _u(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t) {
    return this._index === t._index || t._index === this._index - 1 && (0 === this._distance || 1 === t._distance) || t._index === this._index + 1 && (1 === this._distance || 0 === t._distance);
  }
  leq(t) {
    return this._index < t._index || this._index === t._index && this._distance <= t._distance;
  }
  geq(t) {
    return this._index > t._index || this._index === t._index && this._distance >= t._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t = this.dy, e3 = (0 * t + -1 * -this.dx) / (1 * this.length);
    let n6 = Math.acos(e3);
    return t > 0 && (n6 = 2 * Math.PI - n6), n6;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t, dy: e3 } = this;
    return Math.sqrt(t * t + e3 * e3);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h4(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t, e3) {
    const n6 = this.backwardLength;
    if (t <= n6) return this._distance = (n6 - t) / this.length, this;
    let s9 = this.backwardLength;
    for (; this.prev(); ) {
      if (s9 + this.length > t) return this._seekBackwards(t - s9);
      s9 += this.length;
    }
    return this._distance = 0, e3 ? this : null;
  }
  seek(t, e3 = false) {
    if (t < 0) return this._seekBackwards(Math.abs(t), e3);
    if (t <= this.remainingLength) return this._distance = (this.backwardLength + t) / this.length, this;
    let n6 = this.remainingLength;
    for (; this.next(); ) {
      if (n6 + this.length > t) return this.seek(t - n6, e3);
      n6 += this.length;
    }
    return this._distance = 1, e3 ? this : null;
  }
};
function c3(e3, n6, s9, i6 = true) {
  const r9 = a4(e3), h6 = u6.create(e3), d5 = r9 / 2;
  if (!i6) return h6.seek(d5), void (h6.x < o3 && h6.y < o3 && h6.x >= 0 && h6.y >= 0 && s9(h6.clone(), 0, d5 + 0 * n6, r9));
  const c4 = Math.max((r9 - n6) / 2, 0), o9 = Math.floor(c4 / n6), _6 = d5 - o9 * n6;
  h6.seek(_6);
  for (let a5 = -o9; a5 <= o9; a5++) h6.x < o3 && h6.y < o3 && h6.x >= 0 && h6.y >= 0 && s9(h6.clone(), a5, d5 + a5 * n6, r9), h6.seek(n6);
}
function l8(t, e3) {
  const n6 = e3;
  for (let s9 = 0; s9 < t.length; s9++) {
    let e4 = t[s9];
    x2(e4, n6);
    const i6 = [];
    i6.push(e4[0]);
    for (let t2 = 1; t2 < e4.length; t2++) {
      const [n7, s10] = e4[t2 - 1], [r9, h6] = e4[t2], a5 = r9 - n7, d5 = h6 - s10;
      i6.push([a5, d5]);
    }
    t[s9] = i6, e4 = i6;
  }
  return t;
}
function x2(t, n6) {
  const r9 = 1e-6;
  if (n6 <= 0) return;
  const h6 = t.length;
  if (h6 < 3) return;
  const a5 = [];
  let d5 = 0;
  a5.push(0);
  for (let e3 = 1; e3 < h6; e3++) d5 += i5(t[e3], t[e3 - 1]), a5.push(d5);
  n6 = Math.min(n6, 0.2 * d5);
  const u7 = [];
  u7.push(t[0][0]), u7.push(t[0][1]);
  const c4 = t[h6 - 1][0], o9 = t[h6 - 1][1], _6 = e2([0, 0], t[0], t[1]);
  s8(_6), t[0][0] += n6 * _6[0], t[0][1] += n6 * _6[1], e2(_6, t[h6 - 1], t[h6 - 2]), s8(_6), t[h6 - 1][0] += n6 * _6[0], t[h6 - 1][1] += n6 * _6[1];
  for (let e3 = 1; e3 < h6; e3++) a5[e3] += n6;
  a5[h6 - 1] += n6;
  const l9 = 0.5 * n6;
  for (let e3 = 1; e3 < h6 - 1; e3++) {
    let s9 = 0, i6 = 0, d6 = 0;
    for (let h7 = e3 - 1; h7 >= 0 && !(a5[h7 + 1] < a5[e3] - l9); h7--) {
      const u8 = l9 + a5[h7 + 1] - a5[e3], c5 = a5[h7 + 1] - a5[h7], o10 = a5[e3] - a5[h7] < l9 ? 1 : u8 / c5;
      if (Math.abs(o10) < r9) break;
      const _7 = o10 * o10, x4 = o10 * u8 - 0.5 * _7 * c5, g2 = o10 * c5 / n6, f7 = t[h7 + 1], y4 = t[h7][0] - f7[0], k3 = t[h7][1] - f7[1];
      s9 += g2 / x4 * (f7[0] * o10 * u8 + 0.5 * _7 * (u8 * y4 - c5 * f7[0]) - _7 * o10 * c5 * y4 / 3), i6 += g2 / x4 * (f7[1] * o10 * u8 + 0.5 * _7 * (u8 * k3 - c5 * f7[1]) - _7 * o10 * c5 * k3 / 3), d6 += g2;
    }
    for (let u8 = e3 + 1; u8 < h6 && !(a5[u8 - 1] > a5[e3] + l9); u8++) {
      const h7 = l9 - a5[u8 - 1] + a5[e3], c5 = a5[u8] - a5[u8 - 1], o10 = a5[u8] - a5[e3] < l9 ? 1 : h7 / c5;
      if (Math.abs(o10) < r9) break;
      const _7 = o10 * o10, x4 = o10 * h7 - 0.5 * _7 * c5, g2 = o10 * c5 / n6, f7 = t[u8 - 1], y4 = t[u8][0] - f7[0], k3 = t[u8][1] - f7[1];
      s9 += g2 / x4 * (f7[0] * o10 * h7 + 0.5 * _7 * (h7 * y4 - c5 * f7[0]) - _7 * o10 * c5 * y4 / 3), i6 += g2 / x4 * (f7[1] * o10 * h7 + 0.5 * _7 * (h7 * k3 - c5 * f7[1]) - _7 * o10 * c5 * k3 / 3), d6 += g2;
    }
    u7.push(s9 / d6), u7.push(i6 / d6);
  }
  u7.push(c4), u7.push(o9);
  for (let e3 = 0, s9 = 0; e3 < h6; e3++) t[e3][0] = u7[s9++], t[e3][1] = u7[s9++];
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelMeshWriter.js
var F2 = 1;
var Z = 0;
var k2 = 128;
var R2 = o3 * o3 / 16;
var $ = P(() => import("./operatorIntersection-VB4AR6YO.js"));
var C2 = P(() => import("./FlatGeometry-ZDFGOERV.js"));
function E2(e3, t, r9) {
  return l(`${e3}${t}${r9}`);
}
function O2(e3, t, r9, s9, o9) {
  return l(`${e3}${t}${r9}${s9 * 2 ** (S3 - o9)}`);
}
function T4(e3, t, r9) {
  return l(`${e3}${t}${r9}`);
}
function W(e3, t, r9, s9, o9) {
  return l(`${e3}${o9}${t}${r9 * 2 ** (S3 - s9)}`);
}
var X = o((e3) => {
  let t = 0;
  if (0 === e3) return 1 / 0;
  for (; !(e3 % 2); ) t++, e3 /= 2;
  return t;
});
var Y = class extends v2 {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), $.getImportPromise(), C2.getImportPromise()]);
  }
  _write(e3, t, i6, r9, s9) {
    if (this._zoomLevel = r9 || 0, null != i6) throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (t.geometryType) {
      case "esriGeometryPoint": {
        const i7 = t.readXForDisplay(), r10 = t.readYForDisplay();
        this._writePoint(e3, i7, r10, 0, t);
        break;
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
        this._writePolygon(e3, t, s9);
        break;
      case "esriGeometryMultipoint": {
        let i7 = 0;
        const r10 = _2.fromFeatureSetReader(t);
        if (r10?.nextPath()) for (; r10.nextPoint(); ) this._writePoint(e3, r10.x, r10.y, i7++, t);
        break;
      }
      case "esriGeometryPolyline":
        this._writeLines(e3, t);
    }
  }
  _getMetricDir() {
    const { horizontalAlignment: e3, verticalAlignment: t } = this.evaluatedMeshParams;
    return ["center" === e3 ? 0 : "right" === e3 ? -1 : 1, "middle" === t ? 0 : "bottom" === t ? -1 : 1];
  }
  _createLineLabelMetric(e3, t, i6, r9, s9, o9) {
    const [n6, a5] = this._getMetricDir(), l9 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, c4 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, h6 = this.evaluatedMeshParams.labelClassId;
    return new h3(e3, h6, t, i6, r9, s9, n6, a5, l9, c4, o9);
  }
  _writePolygon(e3, t, i6) {
    const r9 = $.module, s9 = C2.module.constructFromFlatGeometry, o9 = t.readGeometryForDisplay(), n6 = t.readCentroidForDisplay()?.coords, a5 = o9?.area() || 0;
    if (!n6) return;
    const l9 = a5 >= R2;
    e3.requiresRefresh ||= l9;
    const c4 = s9(I(i6)), h6 = s9(I({ x: n6[0], y: n6[1] })), m3 = !!r9.execute(h6, c4, null);
    if (!o9 || !l9 || !m3) return void this._writePoint(e3, n6[0], n6[1], 0, t);
    const d5 = s9(B2("polygon", o9, null)), u7 = r9.execute(d5, c4, null);
    if (!u7) return void this._writePoint(e3, n6[0], n6[1], 0, t);
    const b2 = L(new _(u7.toFlatGeometry())), P4 = _2.fromOptimized(b2, "esriGeometryPolygon", 1), v5 = l3(P4) ?? n6;
    this._writePoint(e3, v5[0], v5[1], 0, t);
  }
  _writePoint(e3, t, i6, r9, s9) {
    if (t < 0 || t > o3 || i6 < 0 || i6 > o3) return;
    const o9 = this._getShaping();
    if (!o9) return;
    const n6 = s9.getDisplayId(), a5 = this.evaluatedMeshParams.labelClassId, l9 = E2(this.evaluatedMeshParams.layerId, s9.getObjectId(), r9), c4 = T4(s9.getObjectId(), a5, r9), [h6, m3] = this._getMetricDir(), d5 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, u7 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, f7 = this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 };
    e3.metricStart(new h3(n6, a5, l9, c4, t, i6, h6, m3, d5, u7, f7)), this._writeGlyphs(e3, n6, t, i6, o9, 0, f7, void 0, false), e3.metricBoxWrite(o9.boundsT), e3.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references) return null;
    for (const e3 of this._references) {
      const t = e3.getBoundsInfo();
      if (t) return t;
    }
    return null;
  }
  _writeLines(e3, t) {
    const { scaleInfo: i6, verticalAlignment: r9 } = this.evaluatedMeshParams, s9 = this.evaluatedMeshParams.repeatLabelDistance || 128, o9 = this._getShaping("middle");
    if (!o9) return;
    const n6 = (e4, t2, i7, r10) => this._placeSubdivGlyphs(e4, t2, i7, r10), a5 = (o9.bounds.width + s9) / (1 << F2);
    this._current = { out: e3, id: t.getDisplayId(), objId: t.getObjectId(), shaping: o9, zoomRange: s2(i6, this.getTileInfo()), referenceBounds: this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 }, offsetDirection: null, pathIndex: 0 }, this._verticalPlacement = "bottom" === r9 ? "above" : "top" === r9 ? "below" : null, this._verticalPlacement ? this._writeAboveAndBelowAlong(t, n6, a5) : this._writeCenterAlong(t, n6, a5);
  }
  _writeAboveAndBelowAlong(e3, t, i6) {
    const { repeatLabel: r9 } = this.evaluatedMeshParams, { shaping: s9 } = this._current, o9 = s9.bounds.halfHeight, n6 = e3.readGeometryForDisplay();
    if (!n6) return;
    const a5 = nt(n6, "esriGeometryPolyline", 1) ?? new s(), l9 = U(a5, o9), c4 = U(a5, -o9), h6 = J(c4, "esriGeometryPolyline", false, false), m3 = J(l9, "esriGeometryPolyline", false, false), d5 = l8(m3.paths, s9.bounds.width), u7 = l8(h6.paths, s9.bounds.width);
    this._current.offsetDirection = "above";
    for (let f7 = 0; f7 < d5.length; f7++) this._current.pathIndex = f7, c3(d5[f7], i6, t, !!r9);
    this._current.offsetDirection = "below";
    for (let f7 = 0; f7 < u7.length; f7++) this._current.pathIndex = f7, c3(u7[f7], i6, t, !!r9);
  }
  _writeCenterAlong(e3, t, i6) {
    const { repeatLabel: r9 } = this.evaluatedMeshParams, { shaping: s9 } = this._current, o9 = l8(e3.readLegacyGeometryForDisplay().paths, s9.bounds.width);
    for (let n6 = 0; n6 < o9.length; n6++) this._current.pathIndex = n6, c3(o9[n6], i6, t, !!r9);
  }
  _placeSubdivGlyphs(e3, t, i6, r9) {
    const { allowOverrun: s9, labelPosition: o9, repeatLabelDistance: n6, layerId: a5, labelClassId: l9 } = this.evaluatedMeshParams, { objId: c4, shaping: h6, pathIndex: m3 } = this._current, d5 = this._current.zoomRange[0], u7 = X(t), f7 = this._current.shaping.bounds.width / (1 << F2), g2 = Math.sqrt(n6 || k2) / (1 << F2), p3 = Math.min(i6, r9 - i6), _6 = h6.isMultiline ? S3 : Math.log2(p3 / (g2 + f7 / 2)), y4 = 0 === t ? _6 : Math.min(u7, _6), x4 = Math.max(d5, this._zoomLevel + F2 - y4), b2 = this._zoomLevel - x4, P4 = h6.bounds.width / 2 * 2 ** b2, v5 = O2(a5, c4, m3, t, this._zoomLevel), M3 = W(c4, m3, t, this._zoomLevel, l9);
    this._current.shaping.isMultiline ? 0 === t && this._placeStraight(e3, x4, v5, M3) : s9 && b2 < 0 ? this._placeStraightAlong(e3, d5, v5, M3) : "parallel" === o9 ? this._placeStraightAlong(e3, x4, v5, M3) : "curved" === o9 && this._placeCurved(e3, x4, P4, v5, M3);
  }
  _placeStraight(e3, t, i6, r9) {
    const { out: s9, id: o9, shaping: n6, referenceBounds: a5 } = this._current, { x: l9, y: c4 } = e3;
    s9.metricStart(this._createLineLabelMetric(o9, i6, r9, l9, c4)), s9.metricBoxWrite(n6.boundsT);
    const h6 = e3.angle * (180 / Math.PI) % 360, m3 = (e3.angle * (180 / Math.PI) + 180) % 360;
    if (!this._verticalPlacement || this._verticalPlacement === this._current.offsetDirection) {
      const e4 = { clipAngle: h6, mapAligned: true, isLineLabel: true, minZoom: t };
      this._writeGlyphs(s9, o9, l9, c4, n6, 0, a5, e4, false);
    }
    if (!this._verticalPlacement || this._verticalPlacement !== this._current.offsetDirection) {
      const e4 = { clipAngle: m3, mapAligned: true, isLineLabel: true, minZoom: t };
      this._writeGlyphs(s9, o9, l9, c4, n6, 0, a5, e4, false);
    }
    s9.metricEnd();
  }
  _placeCurved(e3, t, i6, r9, s9) {
    const { out: o9, id: n6 } = this._current;
    o9.metricStart(this._createLineLabelMetric(n6, r9, s9, e3.x, e3.y));
    const a5 = e3.clone(), l9 = e3.angle * (180 / Math.PI) % 360, c4 = (e3.angle * (180 / Math.PI) + 180) % 360;
    this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || (this._placeFirst(a5, t, 1, l9), this._placeBack(e3, a5, t, i6, 1, l9), this._placeForward(e3, a5, t, i6, 1, l9)), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || (this._placeFirst(a5, t, 0, c4), this._placeBack(e3, a5, t, i6, 0, c4), this._placeForward(e3, a5, t, i6, 0, c4)), o9.metricEnd();
  }
  _placeStraightAlong(e3, i6, n6, a5) {
    const { out: l9, id: c4, shaping: h6, zoomRange: m3, referenceBounds: u7 } = this._current, { boxBorderLineColor: f7, boxBackgroundColor: g2 } = this.evaluatedMeshParams, p3 = e3.clone(), _6 = e3.angle * (180 / Math.PI) % 360, y4 = (e3.angle * (180 / Math.PI) + 180) % 360, x4 = h6.glyphs.length > 0 && !(!f7 && !g2);
    if (l9.metricStart(this._createLineLabelMetric(c4, n6, a5, e3.x, e3.y)), x4) {
      const n7 = Math.max(i6, m3[0], 0), a6 = Math.min(S3, m3[1]), f8 = M(n3(), -e3.angle), g3 = { minZoom: n7, maxZoom: a6, clipAngle: _6, mapAligned: true, isLineLabel: true }, p4 = u2(this.evaluatedMeshParams.offsetX), x5 = u2(this.evaluatedMeshParams.offsetY);
      if (!this._verticalPlacement || this._verticalPlacement === this._current.offsetDirection) {
        const t = r3(p4, -1 * x5), [i7, r9] = h6.shapeBackground(i(n3(), f8, t));
        l9.recordStart(this.instanceId, this.attributeLayout, h6.glyphs[0].textureBinding), this._writeTextBox(l9, c4, e3.x, e3.y, r9, u7, g3), l9.recordEnd();
      }
      if (!this._verticalPlacement || this._verticalPlacement !== this._current.offsetDirection) {
        const t = r3(p4, x5), [i7, r9] = h6.shapeBackground(i(n3(), f8, t));
        g3.clipAngle = y4, l9.recordStart(this.instanceId, this.attributeLayout, h6.glyphs[0].textureBinding), this._writeTextBox(l9, c4, e3.x, e3.y, r9, u7, g3), l9.recordEnd();
      }
    }
    this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || this._placeFirst(p3, i6, 1, _6, true), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || this._placeFirst(p3, i6, 0, y4, true), l9.metricEnd();
  }
  _placeBack(e3, t, i6, r9, s9, o9) {
    const n6 = e3.clone();
    let a5 = e3.backwardLength + Z;
    for (; n6.prev() && !(a5 >= r9); ) this._placeOnSegment(n6, t, a5, i6, -1, s9, o9), a5 += n6.length + Z;
  }
  _placeForward(e3, t, i6, r9, s9, o9) {
    const n6 = e3.clone();
    let a5 = e3.remainingLength + Z;
    for (; n6.next() && !(a5 >= r9); ) this._placeOnSegment(n6, t, a5, i6, 1, s9, o9), a5 += n6.length + Z;
  }
  _placeFirst(e3, i6, s9, a5, l9 = false) {
    const { out: c4, id: h6, shaping: m3, zoomRange: u7, referenceBounds: f7 } = this._current, g2 = m3.glyphs, p3 = u2(this.evaluatedMeshParams.offsetX), _6 = u2(this.evaluatedMeshParams.offsetY), y4 = r3(p3, _6), x4 = M(n3(), -e3.angle);
    S(y4, y4, x4);
    for (const t of g2) {
      const r9 = t.x > m3.bounds.x ? s9 : 1 - s9, o9 = r9 * e3.remainingLength + (1 - r9) * e3.backwardLength, n6 = Math.abs(t.x + t.width / 2 - m3.bounds.x), d5 = Math.max(0, this._zoomLevel + Math.log2(n6 / (o9 + Z))), g3 = Math.max(i6, l9 ? 0 : d5);
      if (t.maxZoom = Math.min(u7[1], S3), t.angle = e3.angle + (1 - s9) * Math.PI, t.minZoom = Math.max(u7[0], g3), this._writeLineGlyph(c4, h6, e3.x, e3.y, t, a5, f7, true), (s9 || this._current.offsetDirection) && this._isVisible(t.minZoom, t.maxZoom)) {
        const e4 = new i2(t.bounds.x + y4[0], t.bounds.y + y4[1], t.bounds.width, t.bounds.height);
        c4.metricBoxWrite(e4);
      }
    }
  }
  _placeOnSegment(e3, i6, s9, a5, l9, c4, h6) {
    const { out: m3, id: u7, shaping: f7, referenceBounds: g2 } = this._current, p3 = f7.glyphs, _6 = e3.dx / e3.length, y4 = e3.dy / e3.length, x4 = { x: e3.x + s9 * -l9 * _6, y: e3.y + s9 * -l9 * y4 }, b2 = u2(this.evaluatedMeshParams.offsetX), P4 = u2(this.evaluatedMeshParams.offsetY), v5 = r3(b2, P4), M3 = M(n3(), -e3.angle);
    S(v5, v5, M3);
    for (const t of p3) {
      const i7 = t.x > f7.bounds.x ? c4 : 1 - c4;
      if (!(i7 && 1 === l9 || !i7 && -1 === l9)) continue;
      const r9 = Math.abs(t.x + t.width / 2 - f7.bounds.x), o9 = Math.max(0, this._zoomLevel + Math.log2(r9 / s9) - 0.1), n6 = Math.max(a5, this._zoomLevel + Math.log2(r9 / (s9 + e3.length + Z)));
      if (0 !== o9 && (t.angle = e3.angle + (1 - c4) * Math.PI, t.minZoom = n6, t.maxZoom = o9, this._writeLineGlyph(m3, u7, x4.x, x4.y, t, h6, g2, true), (c4 || this._current.offsetDirection) && this._isVisible(t.minZoom, t.maxZoom))) {
        const e4 = new i2(t.bounds.x + v5[0], t.bounds.y + v5[1], t.bounds.width, t.bounds.height);
        m3.metricBoxWrite(e4);
      }
    }
  }
  _writeLineGlyph(e3, t, i6, r9, s9, o9, n6, a5) {
    if (i6 < 0 || i6 > o3 || r9 < 0 || r9 > o3) return;
    e3.recordStart(this.instanceId, this.attributeLayout, s9.textureBinding);
    const { texcoords: l9, offsets: c4 } = s9, { fontSize: h6, haloSize: m3, outlineSize: d5 } = this._textMeshTransformProps, { sdfSize: u7, sdfRadius: f7 } = this.evaluatedMeshParams.glyphs;
    this._writeQuad(e3, t, i6, r9, { sdfSize: u7, sdfRadius: f7, texcoords: l9, offsets: c4, fontSize: h6, haloSize: m3, outlineSize: d5, color: a2(this.evaluatedMeshParams.color), isBackground: false, referenceBounds: n6, minZoom: Math.max(this._current.zoomRange[0], s9.minZoom), maxZoom: Math.min(this._current.zoomRange[1], s9.maxZoom), clipAngle: o9, mapAligned: a5, isLineLabel: true }), e3.recordEnd();
  }
  _packedZoom(e3) {
    return Math.floor(e3 * wt) / wt;
  }
  _isVisible(e3, t) {
    let i6 = Math.max(this._current.zoomRange[0], e3), r9 = Math.min(this._current.zoomRange[1], t);
    i6 = this._packedZoom(i6), r9 = this._packedZoom(r9);
    const s9 = this._packedZoom(this._zoomLevel);
    return i6 <= s9 && s9 <= r9;
  }
};
function U(e3, t) {
  const i6 = new s(), { coords: r9, lengths: s9 } = e3, o9 = n2(), n6 = n2(), d5 = n2(), f7 = n2(), g2 = n2(), p3 = n2(), _6 = 2;
  let y4 = 0;
  for (let u7 = 0; u7 < s9.length; u7++) {
    const e4 = s9[u7];
    for (let s10 = 0; s10 < e4; s10++) {
      const u8 = _6 * (s10 + y4 - 1), x4 = _6 * (s10 + y4), b2 = _6 * (s10 + y4 + 1);
      s10 > 0 ? o2(o9, r9[u8], r9[u8 + 1]) : o2(o9, 0, 0), o2(n6, r9[x4], r9[x4 + 1]), s10 < e4 - 1 ? o2(d5, r9[b2], r9[b2 + 1]) : o2(d5, 0, 0), 0 === s10 ? o2(f7, 0, 0) : (B(f7, n6, o9), v(f7, f7), o2(f7, f7[1], -f7[0])), s10 === e4 - 1 ? o2(g2, 0, 0) : (B(g2, d5, n6), v(g2, g2), o2(g2, g2[1], -g2[0])), u(p3, f7, g2), v(p3, p3);
      const P4 = p3[0] * g2[0] + p3[1] * g2[1];
      0 !== P4 && l2(p3, p3, P4), l2(p3, p3, t), i6.coords.push(n6[0] + p3[0], n6[1] + p3[1]);
    }
    i6.lengths.push(e4), y4 += e4;
  }
  return i6;
}

// node_modules/@arcgis/core/views/2d/layers/features/support/DictionaryValue.js
var r8 = class extends s6 {
  constructor(e3) {
    super(), this._value = e3;
  }
  resize(e3) {
  }
  read(e3, r9) {
    return this._value;
  }
  readWithDefault(e3, r9, t) {
    return this._value;
  }
  hasArcadeDependency(e3) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterInputEvaluator.js
var y3 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
async function h5(e3, r9, t, s9) {
  const { defaultValue: o9, valueExpressionInfo: a5, value: i6 } = r9;
  if (a5) {
    if ("dictionary-template" === a5.type) return __spreadProps(__spreadValues({}, r9), { computed: e3.createDictionaryTemplateField(a5, t), defaultValue: o9 });
    const { expression: i7 } = a5, n6 = await e3.createComputedField({ expression: i7 }, s9);
    return n6 ? __spreadProps(__spreadValues({}, r9), { computed: n6, defaultValue: o9 }) : null;
  }
  return __spreadProps(__spreadValues({}, r9), { computed: new r8(i6), defaultValue: o9 });
}
async function v4(e3, r9, t) {
  const { valueExpressionInfo: s9 } = r9, o9 = "dictionary-template" === s9.type ? e3.createDictionaryTemplateField(s9, t) : await e3.createComputedField({ expression: s9.expression });
  return o9 ? __spreadProps(__spreadValues({}, r9), { computed: o9 }) : null;
}
function P3(e3) {
  return "object" == typeof e3 && null != e3 && (!(!("valueExpressionInfo" in e3) || !e3.valueExpressionInfo) || "type" in e3 && "Process" === e3.type && "op" in e3 && "Random" === e3.op);
}
function _5(e3) {
  if (Array.isArray(e3)) {
    for (const r9 of e3) if (_5(r9)) return true;
  }
  if ("object" == typeof e3) {
    if (P3(e3)) return true;
    for (const r9 in e3) {
      if (_5(e3[r9])) return true;
    }
  }
  return false;
}
var I3 = class _I {
  static async create(r9, t, s9, o9) {
    const a5 = {}, i6 = /* @__PURE__ */ new Map(), m3 = /* @__PURE__ */ new Map(), f7 = /* @__PURE__ */ new Map(), l9 = /* @__PURE__ */ new Map(), d5 = /* @__PURE__ */ new Map(), u7 = /* @__PURE__ */ new Map();
    for (const y4 in s9) {
      const I4 = s9[y4];
      if (null != I4 && "object" == typeof I4) if (Array.isArray(I4)) {
        if ("object" == typeof I4[0]) throw new Error(`InternalError: Cannot handle ${y4}. Nested array params are not supported`);
        a5[y4] = I4;
      } else {
        if ("valueExpressionInfo" in I4) {
          if (I4.value) {
            a5[y4] = I4.value;
            continue;
          }
          const e3 = await v4(r9, I4, o9);
          if (!e3) {
            a5[y4] = I4.defaultValue;
            continue;
          }
          i6.set(y4, e3), a5[y4] = null;
          continue;
        }
        switch (I4.type) {
          case "cim-effect-infos":
            if (I4.effectInfos.some((e3) => e3.overrides.length)) {
              m3.set(y4, { effects: await Promise.all(I4.effectInfos.map(async (t2) => {
                const s10 = t2.overrides.map((e3) => h5(r9, e3, o9, false));
                return { effect: t2.effect, compiledOverrides: (await Promise.all(s10)).filter(N) };
              })) });
              break;
            }
            a5[y4] = I4.effectInfos.map((e3) => e3.effect);
            break;
          case "cim-marker-placement-param":
            I4.overrides.length && f7.set(y4, { placementInfo: I4, compiledOverrides: (await Promise.all(I4.overrides.map((e3) => h5(r9, e3, o9, false)))).filter(N) }), a5[y4] = I4.placement;
            break;
          case "text-rasterization-param": {
            if (I4.overrides.length) {
              const t2 = I4.overrides.map((e3) => h5(r9, e3, o9, I4.useLegacyLabelEvaluationRules ?? false));
              l9.set(y4, { compiledOverrides: (await Promise.all(t2)).filter(N), rasterizationParam: I4, objectIdToResourceId: /* @__PURE__ */ new Map() });
              continue;
            }
            const s10 = { type: "cim-rasterization-info", resource: I4.resource };
            a5[y4] = await t.fetchResourceImmediate(s10) ?? null;
            break;
          }
          case "sprite-rasterization-param": {
            if (I4.overrides.length) {
              const t2 = I4.overrides.map((e3) => h5(r9, e3, o9, false));
              l9.set(y4, { compiledOverrides: (await Promise.all(t2)).filter(N), rasterizationParam: I4, objectIdToResourceId: /* @__PURE__ */ new Map() });
              continue;
            }
            if ("animated" === I4.resource.type) {
              l9.set(y4, { compiledOverrides: [], rasterizationParam: I4, objectIdToResourceId: /* @__PURE__ */ new Map() });
              continue;
            }
            const s10 = { type: "cim-rasterization-info", resource: I4.resource };
            a5[y4] = await t.fetchResourceImmediate(s10) ?? null;
            break;
          }
          case "cim-marker-transform-param": {
            const { params: e3 } = I4;
            if (_5(e3)) {
              const t2 = { compiledMarkerInfos: [] };
              await Promise.all(e3.map(async (e4) => {
                const s10 = { props: {} };
                for (const t3 in e4) if (P3(e4[t3])) {
                  const a6 = await v4(r9, e4[t3], o9);
                  s10.compiledExpressionMap || (s10.compiledExpressionMap = /* @__PURE__ */ new Map());
                  const i7 = s10.compiledExpressionMap;
                  a6 && i7.set(t3, a6);
                } else s10.props[t3] = e4[t3];
                t2.compiledMarkerInfos.push(s10);
              })), d5.set(y4, t2);
            } else a5[y4] = { type: "cim-marker-transform-info", infos: e3 };
            break;
          }
          case "animation-params": {
            const { params: e3 } = I4, s10 = r5(e3);
            if (_5(s10)) {
              const e4 = await Promise.all(s10.map((e5) => c(e5, r9)));
              u7.set(y4, { params: e4, propertyIdToResourceId: /* @__PURE__ */ new Map(), key: y4 });
            } else {
              const e4 = s3(s10), r10 = await t.fetchResourceImmediate({ type: "animation-info", resource: e4 });
              null != r10 && "sprite" === r10.type && (a5[y4] = { dataRow: r10.rect.y, dataColumn: r10.rect.x });
            }
            break;
          }
          default:
            a5[y4] = I4;
        }
      }
      else a5[y4] = I4;
    }
    return new _I(s9, a5, i6, m3, f7, l9, d5, u7);
  }
  constructor(e3, r9, t, s9, a5, i6, n6, c4) {
    this.inputMeshParams = e3, this._resolvedMeshParams = r9, this._dynamicProperties = t, this._dynamicEffectProperties = s9, this._dynamicPlacementProperties = a5, this._dynamicAsyncProperties = i6, this._dynamicTransformProperties = n6, this._dynamicAsyncAnimations = c4, this.evaluator = (e4) => e4, this._arcadeDependencies = /* @__PURE__ */ new Set();
    for (const p3 of this._expressions()) u3(this._arcadeDependencies, p3);
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size || this._dynamicAsyncAnimations.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e3, s9, o9) {
    for (const i6 of this._dynamicAsyncProperties.values()) {
      const c4 = a(i6.rasterizationParam.resource);
      "animated" === i6.rasterizationParam.resource.type && i6.rasterizationParam.resource.randomizeStartTime && (c4.primitiveName = "__RESERVED__PRIMITIVE__NAME__", c4.startGroup = o5(s9.getObjectId() || 0));
      for (const { primitiveName: e4, propertyName: t, computed: a5, defaultValue: m3, valueExpressionInfo: f7 } of i6.compiledOverrides) try {
        const r9 = "animated" === i6.rasterizationParam.resource.type ? c4.primitiveName : e4;
        r4(c4, r9, t, a5, s9, o9, m3);
      } catch (n6) {
        y3().errorOnce(new r("invalid-arcade-expression", "Encountered an error when evaluating the arcade expression", { error: n6, valueExpressionInfo: f7 }));
      }
      const p3 = e3.enqueueRequest({ type: "cim-rasterization-info", resource: c4 });
      i6.objectIdToResourceId.set(s9.getObjectId(), p3);
    }
    for (const r9 of this._dynamicAsyncAnimations.values()) {
      const t = r9.params.map((e4) => l4(e4, s9, o9)).map(n4).map((e4) => e4.simplify()), a5 = a3(t), n6 = e3.enqueueRequest({ type: "animation-info", resource: a5 });
      r9.propertyIdToResourceId.set(s9.getObjectId() + "." + r9.key, n6);
    }
  }
  evaluateMeshParams(e3, r9, t) {
    for (const [s9, o9] of this._dynamicProperties.entries()) this._resolvedMeshParams[s9] = o9.computed.readWithDefault(r9, t, o9.defaultValue);
    for (const [s9, o9] of this._dynamicPlacementProperties.entries()) for (const { computed: e4, defaultValue: a5, propertyName: i6 } of o9.compiledOverrides) {
      const n6 = e4.readWithDefault(r9, t, a5);
      o9.placementInfo.placement[i6] = n6, this._resolvedMeshParams[s9] = o9.placementInfo.placement;
    }
    for (const [s9, o9] of this._dynamicEffectProperties.entries()) for (const e4 of o9.effects) {
      for (const { computed: s10, defaultValue: o10, propertyName: a5 } of e4.compiledOverrides) {
        const i6 = s10.readWithDefault(r9, t, o10);
        e4.effect[a5] = i6;
      }
      this._resolvedMeshParams[s9] = o9.effects.map((e5) => e5.effect);
    }
    for (const [s9, o9] of this._dynamicTransformProperties.entries()) {
      const e4 = { type: "cim-marker-transform-info", infos: [] };
      for (const s10 of o9.compiledMarkerInfos) {
        const o10 = __spreadValues({}, s10.props);
        if (s10.compiledExpressionMap) for (const [e5, a5] of s10.compiledExpressionMap) {
          const s11 = a5.computed.readWithDefault(r9, t, a5.defaultValue);
          o10[e5] = "number" == typeof s11 || "boolean" == typeof s11 ? s11 : a5.defaultValue;
        }
        e4.infos.push(o10);
      }
      this._resolvedMeshParams[s9] = e4;
    }
    for (const [s9, o9] of this._dynamicAsyncProperties.entries()) {
      const t2 = o9.objectIdToResourceId.get(r9.getObjectId());
      if (null == t2) continue;
      const a5 = e3.getResource(t2);
      this._resolvedMeshParams[s9] = a5;
    }
    for (const [s9, o9] of this._dynamicAsyncAnimations.entries()) {
      const t2 = o9.propertyIdToResourceId.get(r9.getObjectId() + "." + s9);
      if (null == t2) continue;
      const a5 = e3.getResource(t2);
      this._resolvedMeshParams[s9] = { dataRow: a5.rect.y, dataColumn: a5.rect.x };
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
  hasArcadeDependency(e3) {
    return this._arcadeDependencies.has(e3);
  }
  *_expressions() {
    for (const e3 of this._dynamicProperties.values()) yield e3.computed;
    for (const e3 of this._dynamicEffectProperties.values()) for (const r9 of e3.effects) for (const e4 of r9.compiledOverrides) yield e4.computed;
    for (const e3 of this._dynamicPlacementProperties.values()) for (const r9 of e3.compiledOverrides) yield r9.computed;
    for (const e3 of this._dynamicAsyncProperties.values()) for (const r9 of e3.compiledOverrides) yield r9.computed;
    for (const e3 of this._dynamicTransformProperties.values()) for (const r9 of e3.compiledMarkerInfos) if (null != r9.compiledExpressionMap) for (const e4 of r9.compiledExpressionMap.values()) yield e4.computed;
    for (const e3 of this._dynamicAsyncAnimations.values()) for (const r9 of e3.params) yield* f2(r9);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterRegistry.js
var x3 = class {
  async createMeshWriter(r9, e3, t, i6, s9) {
    const a5 = this._getMeshWriter(i6.techniqueType), o9 = await I3.create(r9, e3, i6.inputParams, s9), n6 = new a5(i6.id, o9, i6.optionalAttributes, t);
    return await n6.loadDependencies(), n6;
  }
  _getMeshWriter(d5) {
    switch (d5) {
      case 14:
        return c2;
      case 12:
        return s5;
      case 10:
        return h2;
      case 27:
        return o7;
      case 15:
        return u5;
      case 25:
        return f5;
      case 28:
        return o8;
      case 11:
        return f6;
      case 22:
        return I2;
      case 29:
        return s7;
      case 31:
        return v2;
      case 20:
        return T2;
      case 32:
        return l7;
      case 16:
        return l6;
      case 18:
        return i3;
      case 19:
        return Y;
      case 2:
        return b;
      case 3:
        return C;
      case 0:
        return S4;
      case 1:
        return R;
      default:
        throw new Error("Internal Error: Mesh writer not in the registry");
    }
  }
};

export {
  r8 as r,
  x3 as x
};
//# sourceMappingURL=chunk-W3VUA42V.js.map
