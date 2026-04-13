import {
  d as d2
} from "./chunk-DO4TP24W.js";
import {
  r as r4
} from "./chunk-CHATUDXF.js";
import {
  o as o3
} from "./chunk-HA6XPQQE.js";
import {
  c as c3
} from "./chunk-OW6NGBR6.js";
import {
  a as a3,
  d as d3,
  i as i4,
  r as r5
} from "./chunk-XOQ5QWWY.js";
import {
  o as o2
} from "./chunk-RN5EOLXT.js";
import {
  e as e3,
  l as l2
} from "./chunk-LOSFMTMN.js";
import {
  A,
  B,
  E as E2,
  F,
  U,
  Z,
  b,
  g,
  l,
  z
} from "./chunk-B3N4XLHQ.js";
import {
  i as i3
} from "./chunk-7MRJRWGA.js";
import {
  a as a2
} from "./chunk-NAAAH7RP.js";
import {
  C as C2,
  D
} from "./chunk-AFCXMSTT.js";
import {
  E,
  H as H2,
  I,
  P,
  R,
  _,
  a,
  c as c2,
  e as e2,
  o,
  u,
  v,
  x
} from "./chunk-YM62CGUL.js";
import {
  G,
  H
} from "./chunk-D4W5U2I5.js";
import {
  d,
  i as i2,
  k
} from "./chunk-GLXZFAAW.js";
import {
  r as r2,
  t as t2
} from "./chunk-XSQPGBLC.js";
import {
  n,
  r as r3,
  t as t3
} from "./chunk-MLBRAI7B.js";
import {
  e2 as e
} from "./chunk-GUGGSMY4.js";
import {
  r
} from "./chunk-TVMQ3GIS.js";
import {
  C,
  t2 as t
} from "./chunk-2DNVIDFH.js";
import {
  c2 as c,
  i2 as i,
  y2 as y
} from "./chunk-KWV5EQET.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
function e4(e6) {
  if (e6.length < y) return Array.from(e6);
  if (Array.isArray(e6)) return Float64Array.from(e6);
  if (!("BYTES_PER_ELEMENT" in e6)) return Array.from(e6);
  switch (e6.BYTES_PER_ELEMENT) {
    case 1:
      return Uint8Array.from(e6);
    case 2:
      return i(e6) ? l().from(e6) : c(e6) ? Uint16Array.from(e6) : Int16Array.from(e6);
    case 4:
      return Float32Array.from(e6);
    default:
      return Float64Array.from(e6);
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
var h = class _h {
  get center() {
    return r3(this._data[0], this._data[1], this._data[2]);
  }
  get radius() {
    return this._data[3];
  }
  get bbMin() {
    return r3(this._data[4], this._data[5], this._data[6]);
  }
  get bbMax() {
    return r3(this._data[7], this._data[8], this._data[9]);
  }
  constructor(t7, e6, h5) {
    this.primitiveIndices = t7, this._numIndexPerPrimitive = e6, this.position = h5, this._data = [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0], this._children = void 0, i3(t7.length >= 1), i3(3 === h5.size || 4 === h5.size);
    const { data: l7, size: d6, indices: c8 } = h5;
    i3(c8.length % this._numIndexPerPrimitive === 0), i3(c8.length >= t7.length * this._numIndexPerPrimitive);
    const m5 = t7.length;
    let _2 = d6 * c8[this._numIndexPerPrimitive * t7[0]];
    o4.clear(), o4.push(_2);
    const u5 = r3(l7[_2], l7[_2 + 1], l7[_2 + 2]), f4 = t3(u5);
    for (let i8 = 0; i8 < m5; ++i8) {
      const e7 = this._numIndexPerPrimitive * t7[i8];
      for (let t8 = 0; t8 < this._numIndexPerPrimitive; ++t8) {
        _2 = d6 * c8[e7 + t8], o4.push(_2);
        let i9 = l7[_2];
        u5[0] = Math.min(i9, u5[0]), f4[0] = Math.max(i9, f4[0]), i9 = l7[_2 + 1], u5[1] = Math.min(i9, u5[1]), f4[1] = Math.max(i9, f4[1]), i9 = l7[_2 + 2], u5[2] = Math.min(i9, u5[2]), f4[2] = Math.max(i9, f4[2]);
      }
    }
    for (let i8 = 0; i8 < 3; ++i8) this._data[4 + i8] = u5[i8], this._data[7 + i8] = f4[i8];
    const x4 = I(n(), this.bbMin, this.bbMax, 0.5);
    let P2 = 0.5 * Math.max(Math.max(f4[0] - u5[0], f4[1] - u5[1]), f4[2] - u5[2]), b5 = P2 * P2;
    for (let i8 = 0; i8 < o4.length; ++i8) {
      _2 = o4.at(i8);
      const t8 = l7[_2] - x4[0], e7 = l7[_2 + 1] - x4[1], r9 = l7[_2 + 2] - x4[2], s2 = t8 * t8 + e7 * e7 + r9 * r9;
      if (s2 <= b5) continue;
      const n4 = Math.sqrt(s2), a9 = 0.5 * (n4 - P2);
      P2 += a9, b5 = P2 * P2;
      const h6 = a9 / n4;
      x4[0] += t8 * h6, x4[1] += e7 * h6, x4[2] += r9 * h6;
    }
    this._data[3] = P2;
    for (let i8 = 0; i8 < 3; ++i8) this._data[0 + i8] = x4[i8];
    o4.clear();
  }
  getChildren() {
    if (this._children || v(this.bbMin, this.bbMax) <= 1) return this._children;
    const t7 = I(n(), this.bbMin, this.bbMax, 0.5), r9 = this.primitiveIndices.length, s2 = new Uint8Array(r9), a9 = new Array(8);
    for (let i8 = 0; i8 < 8; ++i8) a9[i8] = 0;
    const { data: o6, size: l7, indices: d6 } = this.position;
    for (let i8 = 0; i8 < r9; ++i8) {
      let e6 = 0;
      const r10 = this._numIndexPerPrimitive * this.primitiveIndices[i8];
      let n4 = l7 * d6[r10], h5 = o6[n4], c9 = o6[n4 + 1], m6 = o6[n4 + 2];
      for (let t8 = 1; t8 < this._numIndexPerPrimitive; ++t8) {
        n4 = l7 * d6[r10 + t8];
        const i9 = o6[n4], e7 = o6[n4 + 1], s3 = o6[n4 + 2];
        i9 < h5 && (h5 = i9), e7 < c9 && (c9 = e7), s3 < m6 && (m6 = s3);
      }
      h5 < t7[0] && (e6 |= 1), c9 < t7[1] && (e6 |= 2), m6 < t7[2] && (e6 |= 4), s2[i8] = e6, ++a9[e6];
    }
    let c8 = 0;
    for (let i8 = 0; i8 < 8; ++i8) a9[i8] > 0 && ++c8;
    if (c8 < 2) return;
    const m5 = new Array(8);
    for (let i8 = 0; i8 < 8; ++i8) m5[i8] = a9[i8] > 0 ? new Uint32Array(a9[i8]) : void 0;
    for (let i8 = 0; i8 < 8; ++i8) a9[i8] = 0;
    for (let i8 = 0; i8 < r9; ++i8) {
      const t8 = s2[i8];
      m5[t8][a9[t8]++] = this.primitiveIndices[i8];
    }
    this._children = new Array();
    for (let i8 = 0; i8 < 8; ++i8) void 0 !== m5[i8] && this._children.push(new _h(m5[i8], this._numIndexPerPrimitive, this.position));
    return this._children;
  }
  static prune() {
    o4.prune();
  }
};
var o4 = new r({ deallocator: null });

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryBaseInstance.js
var i5 = class {
  constructor(i8) {
    this.id = e(), this._attributes = /* @__PURE__ */ new Map();
    for (const [t7, r9] of i8) this._attributes.set(t7, __spreadProps(__spreadValues({}, r9), { indices: e3(r9.indices) }));
  }
  get attributes() {
    return this._attributes;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
function s(n4, o6) {
  if (!n4) return false;
  const { size: s2, data: c8, indices: f4 } = n4;
  u(o6, 0, 0, 0), u(u2, 0, 0, 0);
  let g2 = 0, d6 = 0;
  for (let p3 = 0; p3 < f4.length - 2; p3 += 3) {
    const n5 = f4[p3] * s2, h5 = f4[p3 + 1] * s2, j3 = f4[p3 + 2] * s2;
    u(l3, c8[n5], c8[n5 + 1], c8[n5 + 2]), u(a4, c8[h5], c8[h5 + 1], c8[h5 + 2]), u(m, c8[j3], c8[j3 + 1], c8[j3 + 2]);
    const x4 = d2(l3, a4, m);
    x4 ? (c2(l3, l3, a4), c2(l3, l3, m), x(l3, l3, 1 / 3 * x4), c2(o6, o6, l3), g2 += x4) : (c2(u2, u2, l3), c2(u2, u2, a4), c2(u2, u2, m), d6 += 3);
  }
  return (0 !== d6 || 0 !== g2) && (0 !== g2 ? (x(o6, o6, 1 / g2), true) : 0 !== d6 && (x(o6, u2, 1 / d6), true));
}
function c4(e6, n4) {
  if (!e6) return false;
  const { size: o6, data: i8, indices: s2 } = e6;
  u(n4, 0, 0, 0);
  let c8 = -1, f4 = 0;
  for (let t7 = 0; t7 < s2.length; t7++) {
    const e7 = s2[t7] * o6;
    c8 !== e7 && (n4[0] += i8[e7], n4[1] += i8[e7 + 1], n4[2] += i8[e7 + 2], f4++), c8 = e7;
  }
  return f4 > 1 && x(n4, n4, 1 / f4), f4 > 0;
}
function f(o6, i8, s2) {
  if (!o6) return false;
  u(s2, 0, 0, 0), u(u2, 0, 0, 0);
  let c8 = 0, f4 = 0;
  const { size: m5, data: g2, indices: d6 } = o6, p3 = d6.length - 1, h5 = p3 + (i8 ? 2 : 0);
  for (let t7 = 0; t7 < h5; t7 += 2) {
    const o7 = t7 < p3 ? t7 + 1 : 0, i9 = d6[t7 < p3 ? t7 : p3] * m5, h6 = d6[o7] * m5;
    l3[0] = g2[i9], l3[1] = g2[i9 + 1], l3[2] = g2[i9 + 2], a4[0] = g2[h6], a4[1] = g2[h6 + 1], a4[2] = g2[h6 + 2], x(l3, c2(l3, l3, a4), 0.5);
    const j3 = R(l3, a4);
    j3 > 0 ? (c2(s2, s2, x(l3, l3, j3)), c8 += j3) : 0 === c8 && (c2(u2, u2, l3), f4++);
  }
  return 0 !== c8 ? (x(s2, s2, 1 / c8), true) : 0 !== f4 && (x(s2, u2, 1 / f4), true);
}
var l3 = n();
var a4 = n();
var m = n();
var u2 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
var t4 = class {
  constructor() {
    this.uid = e();
  }
};
var c5 = class extends t4 {
  constructor(s2) {
    super(), this.highlightName = s2, this.channel = 0;
  }
};
var r6 = class extends t4 {
  constructor() {
    super(...arguments), this.channel = 1;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
var m2 = class _m extends i5 {
  constructor(t7, i8, e6 = null, s2 = 0, n4 = null, o6 = -1, h5) {
    super(i8), this.material = t7, this.mapPositions = e6, this.type = s2, this.olidColor = n4, this.edgeIndicesLength = o6, this.baseGeometry = h5, this._highlights = null, this._highlightOptionsCounts = null, this.visible = true, this._boundingInfo = null;
    const r9 = this.positionAttribute;
    null != r9 && this.edgeIndicesLength < 0 && (this.edgeIndicesLength = r9.indices.length);
  }
  instantiate(t7 = {}) {
    const i8 = new _m(t7.material || this.material, [], this.mapPositions, this.type, this.olidColor, this.edgeIndicesLength, this.baseGeometry);
    return this._attributes.forEach((t8, e6) => {
      t8.exclusive = false, i8._attributes.set(e6, t8);
    }), i8._boundingInfo = this._boundingInfo, i8.transformation = t7.transformation || this.transformation, i8;
  }
  getMutableAttribute(t7) {
    let i8 = this._attributes.get(t7);
    return i8 && !i8.exclusive && (i8 = __spreadProps(__spreadValues({}, i8), { exclusive: true, data: e4(i8.data) }), this._attributes.set(t7, i8)), i8;
  }
  setAttributeData(t7, i8) {
    const e6 = this._attributes.get(t7);
    e6 ? this._attributes.set(t7, __spreadProps(__spreadValues({}, e6), { exclusive: true, data: i8 })) : a2() && console.warn(`Setting undefined attribute ${t7} data`);
  }
  get positionAttribute() {
    return this.attributes.get("position") ?? this.baseGeometry?.attributes.get("position");
  }
  get indexCount() {
    const t7 = this._attributes.values().next().value?.indices;
    return t7?.length ?? 0;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return this._boundingInfo ??= this._calculateBoundingInfo(), this._boundingInfo;
  }
  computeAttachmentOrigin(t7) {
    return !!(0 === this.type ? this._computeAttachmentOriginTriangles(t7) : 2 === this.type ? this._computeAttachmentOriginLines(t7) : this._computeAttachmentOriginPoints(t7)) && (null != this._transformation && E(t7, t7, this._transformation), true);
  }
  _computeAttachmentOriginTriangles(t7) {
    const i8 = this.positionAttribute;
    return s(i8, t7);
  }
  _computeAttachmentOriginLines(t7) {
    const i8 = this.positionAttribute;
    return f(i8, d4(this.material.parameters, i8), t7);
  }
  _computeAttachmentOriginPoints(t7) {
    const i8 = this.positionAttribute;
    return c4(i8, t7);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t7 = this.positionAttribute;
    if (!t7 || 0 === t7.indices.length) return null;
    const i8 = 0 === this.type ? 3 : 1;
    i3(t7.indices.length % i8 === 0, "Indexing error: " + t7.indices.length + " not divisible by " + i8);
    const e6 = l2(t7.indices.length / i8);
    return new h(e6, i8, t7);
  }
  get transformation() {
    return this._transformation ?? r2;
  }
  set transformation(e6) {
    this._transformation = e6 && e6 !== r2 ? t2(e6) : null;
  }
  get highlights() {
    return this._highlights || p;
  }
  get hasHighlights() {
    return (this._highlightOptionsCounts?.size ?? 0) > 0;
  }
  foreachHighlightOptions(t7) {
    this._highlightOptionsCounts?.forEach((i8, e6) => t7(e6));
  }
  allocateIdAndHighlight(t7) {
    const i8 = new c5(t7);
    return this.addHighlight(i8);
  }
  addHighlight(t7) {
    this._ensureHighlights().add(t7);
    const { highlightName: i8 } = t7, e6 = (this._highlightOptionsCounts?.get(i8) ?? 0) + 1;
    return this._ensureHighlightOptionsCounts().set(i8, e6), t7;
  }
  _ensureHighlights() {
    let t7 = this._highlights;
    return t7 || (t7 = /* @__PURE__ */ new Set(), this._highlights = t7), t7;
  }
  _ensureHighlightOptionsCounts() {
    let t7 = this._highlightOptionsCounts;
    return t7 || (t7 = /* @__PURE__ */ new Map(), this._highlightOptionsCounts = t7), t7;
  }
  removeHighlight(t7) {
    if (this._highlights?.delete(t7)) {
      const { highlightName: i8 } = t7, e6 = this._highlightOptionsCounts?.get(i8) ?? 0;
      e6 <= 1 ? this._highlightOptionsCounts?.delete(i8) : this._ensureHighlightOptionsCounts().set(i8, e6 - 1);
    }
  }
};
function d4(t7, i8) {
  return !(!("isClosed" in t7) || !t7.isClosed) && i8.indices.length > 2;
}
var p = /* @__PURE__ */ new Set();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var t5 = class {
  constructor(t7) {
    this._material = t7.material, this._techniques = t7.techniques, this._output = t7.output;
  }
  dispose() {
  }
  get _stippleTextures() {
    return this._techniques.context?.stippleTextures;
  }
  get _markerTextures() {
    return this._techniques.context?.markerTextures;
  }
  getTechnique(t7, e6) {
    return this._techniques.get(t7, this._material.getConfiguration(this._output, e6));
  }
  ensureResources(t7) {
    return 2;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
var r7 = class extends t5 {
  constructor(t7) {
    super(t7), this._numLoading = 0, this._disposed = false, this._textures = t7.textures, this.updateTexture(t7.textureId), this._acquire(t7.normalTextureId, (t8) => this._textureNormal = t8), this._acquire(t7.emissiveTextureId, (t8) => this._textureEmissive = t8), this._acquire(t7.occlusionTextureId, (t8) => this._textureOcclusion = t8), this._acquire(t7.metallicRoughnessTextureId, (t8) => this._textureMetallicRoughness = t8);
  }
  dispose() {
    super.dispose(), this._texture = t(this._texture), this._textureNormal = t(this._textureNormal), this._textureEmissive = t(this._textureEmissive), this._textureOcclusion = t(this._textureOcclusion), this._textureMetallicRoughness = t(this._textureMetallicRoughness), this._disposed = true;
  }
  ensureResources(t7) {
    return 0 === this._numLoading ? 2 : 1;
  }
  get textureBindParameters() {
    return new l4(this._texture?.texture ?? null, this._textureNormal?.texture ?? null, this._textureEmissive?.texture ?? null, this._textureOcclusion?.texture ?? null, this._textureMetallicRoughness?.texture ?? null);
  }
  updateTexture(e6) {
    null != this._texture && e6 === this._texture.id || (this._texture = t(this._texture), this._acquire(e6, (t7) => this._texture = t7));
  }
  _acquire(s2, i8) {
    if (null == s2) return void i8(null);
    const r9 = this._textures.acquire(s2);
    if (C(r9)) return ++this._numLoading, void r9.then((e6) => {
      if (this._disposed) return t(e6), void i8(null);
      i8(e6);
    }).finally(() => --this._numLoading);
    i8(r9);
  }
};
var u3 = class extends c3 {
  constructor(t7 = null) {
    super(), this.textureEmissive = t7;
  }
};
var l4 = class extends u3 {
  constructor(t7, e6, s2, i8, r9, u5, l7) {
    super(s2), this.texture = t7, this.textureNormal = e6, this.textureOcclusion = i8, this.textureMetallicRoughness = r9, this.scale = u5, this.normalTextureTransformMatrix = l7;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var a5 = class {
  constructor(e6, t7) {
    this.id = e(), this.supportsEdges = false, this._renderPriority = 0, this._parameters = new t7(), o3(this._parameters, e6), this.validateParameters(this._parameters);
  }
  get parameters() {
    return this._parameters;
  }
  update(r9) {
    return false;
  }
  setParameters(r9, e6 = true) {
    o3(this._parameters, r9) && (this.validateParameters(this._parameters), e6 && this._parametersChanged());
  }
  validateParameters(r9) {
  }
  shouldRender(r9) {
    return this.visible && this.isVisibleForOutput(r9.output) && (!this.parameters.isDecoration || r9.bind.decorations) && 0 !== (this.parameters.renderOccluded & r9.renderOccludedMask);
  }
  isVisibleForOutput(r9) {
    return true;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(r9) {
    r9 !== this._renderPriority && (this._renderPriority = r9, this._parametersChanged());
  }
  _parametersChanged() {
    this.repository?.materialChanged(this);
  }
  get renderOccludedFlags() {
    return this.visible ? this.parameters.renderOccluded : 0;
  }
  get testsTransparentRenderOrder() {
    return this.parameters.testsTransparentRenderOrder;
  }
  get hasEmissions() {
    return false;
  }
  getConfiguration(r9, s2, i8 = new r4()) {
    return i8.output = r9, i8.hasEmission = s2.hasEmission && o2(r9), i8.oitPass = s2.oitPass, i8.hasHighlightMixTexture = 8 === r9 && null != s2.highlightMixTexture, i8;
  }
};
var n2 = class extends c3 {
  constructor() {
    super(...arguments), this.renderOccluded = 1, this.testsTransparentRenderOrder = 0, this.isDecoration = false;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js
var a6 = class {
  constructor(n4 = 0, t7 = false, i8 = true) {
    this.tolerance = n4, this.isVerticalRay = t7, this.normalRequired = i8;
  }
};
var l5 = i2();
function h2(t7, i8, o6, e6, c8, s2) {
  if (!t7.visible) return;
  const f4 = H2(F2, e6, o6), r9 = (n4, t8, i9) => s2(n4, i9, t8), { tolerance: l7 } = i8, h5 = new a6(l7, false, i8.options.normalRequired);
  if (t7.boundingInfo) i3(0 === t7.type), p2(t7.boundingInfo, o6, f4, l7, c8, h5, r9);
  else {
    const n4 = t7.positionAttribute, i9 = n4.indices;
    V(o6, f4, 0, i9.length / 3, i9, n4.data, n4.stride, c8, h5, r9);
  }
}
var m3 = n();
function p2(n4, t7, i8, o6, e6, c8, r9) {
  if (null == n4) return;
  const u5 = U2(i8, m3);
  if (d(l5, n4.bbMin), k(l5, n4.bbMax), null != e6 && e6.applyToAabb(l5), k2(l5, t7, u5, o6)) {
    const { primitiveIndices: s2, position: f4 } = n4, u6 = s2 ? s2.length : f4.indices.length / 3;
    if (u6 > D2) {
      const s3 = n4.getChildren();
      if (void 0 !== s3) {
        for (const n5 of s3) p2(n5, t7, i8, o6, e6, c8, r9);
        return;
      }
    }
    T(t7, i8, 0, u6, f4.indices, f4.data, f4.stride, s2, e6, c8, r9);
  }
}
var b2 = n();
function M(t7, i8, o6, e6, c8, s2, f4, r9, u5) {
  const { data: a9, stride: l7 } = s2;
  V(t7, H2(F2, i8, t7), o6, e6, c8, a9, l7, f4, r9, u5);
}
function d5(n4, t7, i8, o6) {
  if (!i8.visible) return;
  const e6 = (n5, t8, i9) => o6(n5, i9, t8), { boundingInfo: c8 } = i8;
  if (c8) {
    const { bbMin: i9, bbMax: o7 } = c8;
    if (n4 < i9[0] || n4 > o7[0] || t7 < i9[1] || t7 > o7[1]) return;
  }
  const s2 = i8.positionAttribute, f4 = s2.indices;
  x2(n4, t7, 0, f4.length / 3, f4, s2, e6);
}
function x2(n4, t7, i8, o6, e6, c8, s2) {
  const { data: f4, stride: r9 } = c8;
  for (let u5 = i8; u5 < o6; ++u5) {
    const i9 = 3 * u5, o7 = r9 * e6[i9], c9 = r9 * e6[i9 + 1], a9 = r9 * e6[i9 + 2], l7 = f4[o7 + 0] - n4, h5 = f4[o7 + 1] - t7, m5 = f4[c9 + 0] - n4, p3 = f4[c9 + 1] - t7, b5 = f4[a9 + 0] - n4, M3 = f4[a9 + 1] - t7, d6 = b5 * p3 - M3 * m5, x4 = l7 * M3 - h5 * b5, g2 = m5 * h5 - p3 * l7;
    (d6 < 0 || x4 < 0 || g2 < 0) && (d6 > 0 || x4 > 0 || g2 > 0) || s2(0, u5, null);
  }
}
function T(n4, t7, i8, o6, e6, c8, s2, f4, r9, u5, a9) {
  const l7 = n4[0], h5 = n4[1], m5 = n4[2], p3 = t7[0], M3 = t7[1], d6 = t7[2], { normalRequired: x4 } = u5;
  for (let g2 = i8; g2 < o6; ++g2) {
    const n5 = f4[g2], t8 = 3 * n5, i9 = s2 * e6[t8];
    let o7 = c8[i9], u6 = c8[i9 + 1], y2 = c8[i9 + 2];
    const q2 = s2 * e6[t8 + 1];
    let T2 = c8[q2], V2 = c8[q2 + 1], v3 = c8[q2 + 2];
    const R3 = s2 * e6[t8 + 2];
    let j3 = c8[R3], A4 = c8[R3 + 1], B4 = c8[R3 + 2];
    null != r9 && ([o7, u6, y2] = r9.applyToVertex(o7, u6, y2, g2), [T2, V2, v3] = r9.applyToVertex(T2, V2, v3, g2), [j3, A4, B4] = r9.applyToVertex(j3, A4, B4, g2));
    const w2 = T2 - o7, C3 = V2 - u6, U3 = v3 - y2, k4 = j3 - o7, z4 = A4 - u6, D3 = B4 - y2, F4 = M3 * D3 - z4 * d6, G3 = d6 * k4 - D3 * p3, H3 = p3 * z4 - k4 * M3, J = w2 * F4 + C3 * G3 + U3 * H3;
    if (Math.abs(J) <= E3) continue;
    const K = l7 - o7, L = h5 - u6, N2 = m5 - y2, O = K * F4 + L * G3 + N2 * H3;
    if (J > 0) {
      if (O < 0 || O > J) continue;
    } else if (O > 0 || O < J) continue;
    const P2 = L * U3 - C3 * N2, Q = N2 * w2 - U3 * K, S2 = K * C3 - w2 * L, W = p3 * P2 + M3 * Q + d6 * S2;
    if (J > 0) {
      if (W < 0 || O + W > J) continue;
    } else if (W > 0 || O + W < J) continue;
    const X = (k4 * P2 + z4 * Q + D3 * S2) / J;
    if (X >= 0) {
      a9(X, n5, x4 ? I2(w2, C3, U3, k4, z4, D3, b2) : null);
    }
  }
}
function V(o6, e6, c8, s2, f4, r9, u5, a9, l7, h5) {
  const m5 = e6, p3 = G2, b5 = Math.abs(m5[0]), M3 = Math.abs(m5[1]), d6 = Math.abs(m5[2]), x4 = b5 >= M3 ? b5 >= d6 ? 0 : 2 : M3 >= d6 ? 1 : 2, g2 = x4, y2 = m5[g2] < 0 ? 2 : 1, q2 = (x4 + y2) % 3, T2 = (x4 + (3 - y2)) % 3, V2 = m5[q2] / m5[g2], I3 = m5[T2] / m5[g2], B4 = 1 / m5[g2], w2 = v2, C3 = R2, U3 = j, { normalRequired: k4 } = l7;
  for (let v3 = c8; v3 < s2; ++v3) {
    const e7 = 3 * v3, c9 = u5 * f4[e7];
    u(p3[0], r9[c9 + 0], r9[c9 + 1], r9[c9 + 2]);
    const s3 = u5 * f4[e7 + 1];
    u(p3[1], r9[s3 + 0], r9[s3 + 1], r9[s3 + 2]);
    const l8 = u5 * f4[e7 + 2];
    u(p3[2], r9[l8 + 0], r9[l8 + 1], r9[l8 + 2]), a9 && (o(p3[0], a9.applyToVertex(p3[0][0], p3[0][1], p3[0][2], v3)), o(p3[1], a9.applyToVertex(p3[1][0], p3[1][1], p3[1][2], v3)), o(p3[2], a9.applyToVertex(p3[2][0], p3[2][1], p3[2][2], v3))), H2(w2, p3[0], o6), H2(C3, p3[1], o6), H2(U3, p3[2], o6);
    const m6 = w2[q2] - V2 * w2[g2], b6 = w2[T2] - I3 * w2[g2], M4 = C3[q2] - V2 * C3[g2], d7 = C3[T2] - I3 * C3[g2], x5 = U3[q2] - V2 * U3[g2], y3 = U3[T2] - I3 * U3[g2], R3 = x5 * d7 - y3 * M4, j3 = m6 * y3 - b6 * x5, z4 = M4 * b6 - d7 * m6;
    if ((R3 < 0 || j3 < 0 || z4 < 0) && (R3 > 0 || j3 > 0 || z4 > 0)) continue;
    const D3 = R3 + j3 + z4;
    if (0 === D3) continue;
    const E4 = R3 * (B4 * w2[g2]) + j3 * (B4 * C3[g2]) + z4 * (B4 * U3[g2]);
    if (E4 * Math.sign(D3) < 0) continue;
    const F4 = E4 / D3;
    if (F4 >= 0) {
      h5(F4, v3, k4 ? A2(p3) : null);
    }
  }
}
var v2 = n();
var R2 = n();
var j = n();
function I2(n4, i8, c8, s2, f4, r9, u5) {
  return u(B2, n4, i8, c8), u(w, s2, f4, r9), P(u5, B2, w), _(u5, u5), u5;
}
function A2(t7) {
  return H2(B2, t7[1], t7[0]), H2(w, t7[2], t7[0]), P(b2, B2, w), _(b2, b2), b2;
}
var B2 = n();
var w = n();
function U2(n4, i8) {
  return u(i8, 1 / n4[0], 1 / n4[1], 1 / n4[2]);
}
function k2(n4, t7, i8, o6) {
  return z2(n4, t7, i8, o6, 1 / 0);
}
function z2(n4, t7, i8, o6, e6) {
  const c8 = (n4[0] - o6 - t7[0]) * i8[0], s2 = (n4[3] + o6 - t7[0]) * i8[0];
  let f4 = Math.min(c8, s2), r9 = Math.max(c8, s2);
  const u5 = (n4[1] - o6 - t7[1]) * i8[1], a9 = (n4[4] + o6 - t7[1]) * i8[1];
  if (r9 = Math.min(r9, Math.max(u5, a9)), r9 < 0) return false;
  if (f4 = Math.max(f4, Math.min(u5, a9)), f4 > r9) return false;
  const l7 = (n4[2] - o6 - t7[2]) * i8[2], h5 = (n4[5] + o6 - t7[2]) * i8[2];
  return r9 = Math.min(r9, Math.max(l7, h5)), !(r9 < 0) && (f4 = Math.max(f4, Math.min(l7, h5)), !(f4 > r9) && f4 < e6);
}
var D2 = 1e3;
var E3 = 1e-7;
var F2 = n();
var G2 = [n(), n(), n()];

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
function m4(e6, t7, f4, o6 = 1) {
  const { data: r9, indices: i8 } = e6, s2 = t7.typedBuffer, n4 = t7.typedBufferStride, c8 = i8.length;
  if (f4 *= n4, 1 === o6) for (let l7 = 0; l7 < c8; ++l7) s2[f4] = r9[i8[l7]], f4 += n4;
  else for (let l7 = 0; l7 < c8; ++l7) {
    const e7 = r9[i8[l7]];
    for (let t8 = 0; t8 < o6; t8++) s2[f4] = e7, f4 += n4;
  }
}
function b3(e6, t7, f4) {
  const { data: o6, indices: r9 } = e6, i8 = t7.typedBuffer, s2 = t7.typedBufferStride, n4 = r9.length;
  f4 *= s2;
  for (let c8 = 0; c8 < n4; ++c8) {
    const e7 = 2 * r9[c8];
    i8[f4] = o6[e7], i8[f4 + 1] = o6[e7 + 1], f4 += s2;
  }
}
function B3(e6, t7, f4, o6 = 1) {
  const { data: r9, indices: i8 } = e6, s2 = t7.typedBuffer, n4 = t7.typedBufferStride, c8 = i8.length;
  if (f4 *= n4, 1 === o6) for (let l7 = 0; l7 < c8; ++l7) {
    const e7 = 3 * i8[l7];
    s2[f4] = r9[e7], s2[f4 + 1] = r9[e7 + 1], s2[f4 + 2] = r9[e7 + 2], f4 += n4;
  }
  else for (let l7 = 0; l7 < c8; ++l7) {
    const e7 = 3 * i8[l7];
    for (let t8 = 0; t8 < o6; ++t8) s2[f4] = r9[e7], s2[f4 + 1] = r9[e7 + 1], s2[f4 + 2] = r9[e7 + 2], f4 += n4;
  }
}
function h3(e6, t7, f4, o6 = 1) {
  const { data: r9, indices: i8 } = e6, s2 = t7.typedBuffer, n4 = t7.typedBufferStride, c8 = i8.length;
  if (f4 *= n4, 1 === o6) for (let l7 = 0; l7 < c8; ++l7) {
    const e7 = 4 * i8[l7];
    s2[f4] = r9[e7], s2[f4 + 1] = r9[e7 + 1], s2[f4 + 2] = r9[e7 + 2], s2[f4 + 3] = r9[e7 + 3], f4 += n4;
  }
  else for (let l7 = 0; l7 < c8; ++l7) {
    const e7 = 4 * i8[l7];
    for (let t8 = 0; t8 < o6; ++t8) s2[f4] = r9[e7], s2[f4 + 1] = r9[e7 + 1], s2[f4 + 2] = r9[e7 + 2], s2[f4 + 3] = r9[e7 + 3], f4 += n4;
  }
}
function F3(e6, t7, f4) {
  const o6 = e6.typedBuffer, r9 = e6.typedBufferStride;
  t7 *= r9;
  for (let i8 = 0; i8 < f4; ++i8) o6[t7] = 0, o6[t7 + 1] = 0, o6[t7 + 2] = 0, o6[t7 + 3] = 0, t7 += r9;
}
function z3(e6, t7, f4, o6, r9 = 1) {
  if (!t7) return void B3(e6, f4, o6, r9);
  const { data: s2, indices: n4 } = e6, c8 = f4.typedBuffer, l7 = f4.typedBufferStride, d6 = n4.length, u5 = t7[0], a9 = t7[1], p3 = t7[2], g2 = t7[4], y2 = t7[5], m5 = t7[6], b5 = t7[8], h5 = t7[9], F4 = t7[10], v3 = t7[12], w2 = t7[13], z4 = t7[14];
  o6 *= l7;
  let S2 = 0, k4 = 0, N2 = 0;
  const $2 = H(t7) ? (e7) => {
    S2 = s2[e7] + v3, k4 = s2[e7 + 1] + w2, N2 = s2[e7 + 2] + z4;
  } : (e7) => {
    const t8 = s2[e7], f5 = s2[e7 + 1], o7 = s2[e7 + 2];
    S2 = u5 * t8 + g2 * f5 + b5 * o7 + v3, k4 = a9 * t8 + y2 * f5 + h5 * o7 + w2, N2 = p3 * t8 + m5 * f5 + F4 * o7 + z4;
  };
  if (1 === r9) for (let i8 = 0; i8 < d6; ++i8) $2(3 * n4[i8]), c8[o6] = S2, c8[o6 + 1] = k4, c8[o6 + 2] = N2, o6 += l7;
  else for (let i8 = 0; i8 < d6; ++i8) {
    $2(3 * n4[i8]);
    for (let e7 = 0; e7 < r9; ++e7) c8[o6] = S2, c8[o6 + 1] = k4, c8[o6 + 2] = N2, o6 += l7;
  }
}
function S(e6, t7, f4, o6, s2 = 1) {
  if (!t7) return void B3(e6, f4, o6, s2);
  const { data: n4, indices: c8 } = e6, l7 = t7, d6 = f4.typedBuffer, u5 = f4.typedBufferStride, a9 = c8.length, p3 = l7[0], g2 = l7[1], y2 = l7[2], m5 = l7[4], b5 = l7[5], h5 = l7[6], F4 = l7[8], v3 = l7[9], w2 = l7[10], z4 = !G(l7), S2 = 1e-6, k4 = 1 - S2;
  o6 *= u5;
  let N2 = 0, $2 = 0, x4 = 0;
  const A4 = H(l7) ? (e7) => {
    N2 = n4[e7], $2 = n4[e7 + 1], x4 = n4[e7 + 2];
  } : (e7) => {
    const t8 = n4[e7], f5 = n4[e7 + 1], o7 = n4[e7 + 2];
    N2 = p3 * t8 + m5 * f5 + F4 * o7, $2 = g2 * t8 + b5 * f5 + v3 * o7, x4 = y2 * t8 + h5 * f5 + w2 * o7;
  };
  if (1 === s2) if (z4) for (let r9 = 0; r9 < a9; ++r9) {
    A4(3 * c8[r9]);
    const e7 = N2 * N2 + $2 * $2 + x4 * x4;
    if (e7 < k4 && e7 > S2) {
      const t8 = 1 / Math.sqrt(e7);
      d6[o6] = N2 * t8, d6[o6 + 1] = $2 * t8, d6[o6 + 2] = x4 * t8;
    } else d6[o6] = N2, d6[o6 + 1] = $2, d6[o6 + 2] = x4;
    o6 += u5;
  }
  else for (let r9 = 0; r9 < a9; ++r9) A4(3 * c8[r9]), d6[o6] = N2, d6[o6 + 1] = $2, d6[o6 + 2] = x4, o6 += u5;
  else for (let r9 = 0; r9 < a9; ++r9) {
    if (A4(3 * c8[r9]), z4) {
      const e7 = N2 * N2 + $2 * $2 + x4 * x4;
      if (e7 < k4 && e7 > S2) {
        const t8 = 1 / Math.sqrt(e7);
        N2 *= t8, $2 *= t8, x4 *= t8;
      }
    }
    for (let e7 = 0; e7 < s2; ++e7) d6[o6] = N2, d6[o6 + 1] = $2, d6[o6 + 2] = x4, o6 += u5;
  }
}
function k3(e6, t7, f4, o6, i8 = 1) {
  if (!t7) return void h3(e6, f4, o6, i8);
  const { data: s2, indices: n4 } = e6, c8 = t7, l7 = f4.typedBuffer, d6 = f4.typedBufferStride, u5 = n4.length, a9 = c8[0], p3 = c8[1], g2 = c8[2], y2 = c8[4], m5 = c8[5], b5 = c8[6], B4 = c8[8], F4 = c8[9], v3 = c8[10], w2 = !G(c8), z4 = 1e-6, S2 = 1 - z4;
  if (o6 *= d6, 1 === i8) for (let r9 = 0; r9 < u5; ++r9) {
    const e7 = 4 * n4[r9], t8 = s2[e7], f5 = s2[e7 + 1], i9 = s2[e7 + 2], c9 = s2[e7 + 3];
    let u6 = a9 * t8 + y2 * f5 + B4 * i9, h5 = p3 * t8 + m5 * f5 + F4 * i9, k4 = g2 * t8 + b5 * f5 + v3 * i9;
    if (w2) {
      const e8 = u6 * u6 + h5 * h5 + k4 * k4;
      if (e8 < S2 && e8 > z4) {
        const t9 = 1 / Math.sqrt(e8);
        u6 *= t9, h5 *= t9, k4 *= t9;
      }
    }
    l7[o6] = u6, l7[o6 + 1] = h5, l7[o6 + 2] = k4, l7[o6 + 3] = c9, o6 += d6;
  }
  else for (let r9 = 0; r9 < u5; ++r9) {
    const e7 = 4 * n4[r9], t8 = s2[e7], f5 = s2[e7 + 1], c9 = s2[e7 + 2], u6 = s2[e7 + 3];
    let h5 = a9 * t8 + y2 * f5 + B4 * c9, k4 = p3 * t8 + m5 * f5 + F4 * c9, N2 = g2 * t8 + b5 * f5 + v3 * c9;
    if (w2) {
      const e8 = h5 * h5 + k4 * k4 + N2 * N2;
      if (e8 < S2 && e8 > z4) {
        const t9 = 1 / Math.sqrt(e8);
        h5 *= t9, k4 *= t9, N2 *= t9;
      }
    }
    for (let r10 = 0; r10 < i8; ++r10) l7[o6] = h5, l7[o6 + 1] = k4, l7[o6 + 2] = N2, l7[o6 + 3] = u6, o6 += d6;
  }
}
function N(e6, t7, f4, o6, r9 = 1) {
  const { data: i8, indices: s2 } = e6, n4 = f4.typedBuffer, c8 = f4.typedBufferStride, l7 = s2.length;
  if (o6 *= c8, t7 === i8.length && 4 === t7) {
    n4[o6] = i8[0], n4[o6 + 1] = i8[1], n4[o6 + 2] = i8[2], n4[o6 + 3] = i8[3];
    const e7 = new Uint32Array(f4.typedBuffer.buffer, f4.start), t8 = c8 / 4, s3 = e7[o6 /= 4];
    o6 += t8;
    const d6 = l7 * r9;
    for (let f5 = 1; f5 < d6; ++f5) e7[o6] = s3, o6 += t8;
    return;
  }
  if (1 !== r9) if (4 !== t7) for (let d6 = 0; d6 < l7; ++d6) {
    const e7 = 3 * s2[d6];
    for (let t8 = 0; t8 < r9; ++t8) n4[o6] = i8[e7], n4[o6 + 1] = i8[e7 + 1], n4[o6 + 2] = i8[e7 + 2], n4[o6 + 3] = 255, o6 += c8;
  }
  else for (let d6 = 0; d6 < l7; ++d6) {
    const e7 = 4 * s2[d6];
    for (let t8 = 0; t8 < r9; ++t8) n4[o6] = i8[e7], n4[o6 + 1] = i8[e7 + 1], n4[o6 + 2] = i8[e7 + 2], n4[o6 + 3] = i8[e7 + 3], o6 += c8;
  }
  else {
    if (4 === t7) {
      for (let e7 = 0; e7 < l7; ++e7) {
        const t8 = 4 * s2[e7];
        n4[o6] = i8[t8], n4[o6 + 1] = i8[t8 + 1], n4[o6 + 2] = i8[t8 + 2], n4[o6 + 3] = i8[t8 + 3], o6 += c8;
      }
      return;
    }
    for (let e7 = 0; e7 < l7; ++e7) {
      const t8 = 3 * s2[e7];
      n4[o6] = i8[t8], n4[o6 + 1] = i8[t8 + 1], n4[o6 + 2] = i8[t8 + 2], n4[o6 + 3] = 255, o6 += c8;
    }
  }
}
function $(e6, t7, f4) {
  const { data: o6, indices: r9 } = e6, i8 = t7.typedBuffer, s2 = t7.typedBufferStride, n4 = r9.length, c8 = o6[0];
  f4 *= s2;
  for (let l7 = 0; l7 < n4; ++l7) i8[f4] = c8, f4 += s2;
}
function x3(o6, r9, i8, s2) {
  e2(A3, o6, r9);
  const n4 = Math.max(Math.sqrt(a(A3)), 1e-4);
  x(A3, A3, 1 / n4), i8[s2++] = A3[0], i8[s2++] = A3[1], i8[s2++] = A3[2], i8[s2++] = n4;
}
var A3 = n();
function M2(e6, t7, f4, o6, r9 = 1) {
  const i8 = t7.typedBuffer, s2 = t7.typedBufferStride;
  if (o6 *= s2, 1 === r9) for (let n4 = 0; n4 < f4; ++n4) i8[o6] = e6[0], i8[o6 + 1] = e6[1], i8[o6 + 2] = e6[2], i8[o6 + 3] = e6[3], o6 += s2;
  else for (let n4 = 0; n4 < f4; ++n4) for (let t8 = 0; t8 < r9; ++t8) i8[o6] = e6[0], i8[o6 + 1] = e6[1], i8[o6 + 2] = e6[2], i8[o6 + 3] = e6[3], o6 += s2;
}
function j2(e6, t7, f4, o6, r9, i8, n4) {
  let c8 = { numItems: 0, numVerticesPerItem: 0 };
  for (const l7 of f4.fields.keys()) {
    const f5 = e6.get(l7), d6 = f5?.indices;
    if (f5 && d6) "position" === l7 && (c8 = { numItems: 1, numVerticesPerItem: d6.length }), q(l7, f5, o6, r9, i8, n4);
    else if ("olidColor" === l7 && null != t7) {
      const f6 = e6.get("position")?.indices;
      if (f6) {
        const e7 = f6.length;
        M2(t7, i8.getField(l7, z), e7, n4);
      }
    }
  }
  return c8;
}
function q(e6, t7, f4, o6, r9, i8) {
  switch (e6) {
    case "position": {
      i3(3 === t7.size);
      const o7 = r9.getField(e6, U);
      i3(!!o7, `No buffer view for ${e6}`), z3(t7, f4, o7, i8);
      break;
    }
    case "normal": {
      i3(3 === t7.size);
      const f5 = r9.getField(e6, U);
      i3(!!f5, `No buffer view for ${e6}`), S(t7, o6, f5, i8);
      break;
    }
    case "normalCompressed":
    case "profileRight":
    case "profileUp": {
      i3(2 === t7.size);
      const f5 = r9.getField(e6, Z);
      i3(!!f5, `No buffer view for ${e6}`), b3(t7, f5, i8);
      break;
    }
    case "uv0": {
      i3(2 === t7.size);
      const f5 = r9.getField(e6, E2) ?? r9.getField(e6, A);
      i3(!!f5, `No buffer view for ${e6}`), b3(t7, f5, i8);
      break;
    }
    case "uvi": {
      i3(2 === t7.size);
      const f5 = r9.getField(e6, Z);
      i3(!!f5, `No buffer view for ${e6}`), b3(t7, f5, i8);
      break;
    }
    case "color":
    case "symbolColor": {
      const f5 = r9.getField(e6, z);
      i3(!!f5, `No buffer view for ${e6}`), i3(3 === t7.size || 4 === t7.size), N(t7, t7.size, f5, i8);
      break;
    }
    case "colorFeatureAttribute":
    case "opacityFeatureAttribute":
    case "sizeFeatureAttribute": {
      const f5 = r9.getField(e6, B) ?? r9.getField(e6, B);
      i3(!!f5, `No buffer view for ${e6}`), i3(1 === t7.size), $(t7, f5, i8);
      break;
    }
    case "tangent": {
      i3(4 === t7.size);
      const o7 = r9.getField(e6, F);
      i3(!!o7, `No buffer view for ${e6}`), k3(t7, f4, o7, i8);
      break;
    }
    case "profileVertexAndNormal": {
      i3(4 === t7.size);
      const f5 = r9.getField(e6, g) ?? r9.getField(e6, F);
      i3(!!f5, `No buffer view for ${e6}`), h3(t7, f5, i8);
      break;
    }
    case "profileAuxData": {
      i3(3 === t7.size);
      const f5 = r9.getField(e6, b) ?? r9.getField(e6, U);
      i3(!!f5, `No buffer view for ${e6}`), B3(t7, f5, i8);
      break;
    }
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var r8 = class {
  constructor(t7) {
    this.layout = t7;
  }
  elementCount(t7) {
    return t7.get("position").indices.length;
  }
  write(r9, e6, i8, n4, o6, s2) {
    return j2(i8, n4, this.layout, r9, e6, o6, s2);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var c6 = i4(1, 0, 1, 771);
function f2(e6, n4 = false) {
  switch (e6) {
    case 0:
      return n4 ? r5 : a3;
    case 1:
      return c6;
    case 2:
    case 3:
      return null;
  }
}
function l6(e6) {
  if (e6.draped) return null;
  switch (e6.oitPass) {
    case 0:
    case 2:
      return e6.writeDepth ? d3 : null;
    case 1:
    case 3:
      return null;
  }
}
function o5(e6, n4 = 513) {
  return { func: 0 === e6 || 2 === e6 ? n4 : 515 };
}
var a7 = { factor: -1, units: -2 };
var i6 = 5e5;
function b4({ oitPass: e6, enableOffset: n4 }) {
  return n4 && 1 === e6 ? a7 : null;
}
function h4(t7, r9) {
  const u5 = { buffers: 1 === t7 ? [D, C2] : [D] };
  return r9 && u5.buffers.push(D + u5.buffers.length), u5.buffers.length > 1 ? u5 : null;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var a8 = { func: 513 };
var n3 = { func: 519 };
var f3 = { mask: 255 };
var i7 = { mask: 0 };
var c7 = { function: { func: 519, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 0 } };
var t6 = { function: { func: 519, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 7681 } };
var u4 = { function: { func: 514, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 7680 } };
var e5 = { function: { func: 517, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 7680 } };

export {
  i5 as i,
  c5 as c,
  r6 as r,
  m2 as m,
  t5 as t,
  r7 as r2,
  l4 as l,
  a5 as a,
  n2 as n,
  a6 as a2,
  h2 as h,
  M,
  d5 as d,
  k2 as k,
  m4 as m2,
  b3 as b,
  h3 as h2,
  F3 as F,
  z3 as z,
  S,
  N,
  $,
  x3 as x,
  M2,
  j2 as j,
  q,
  r8 as r3,
  f2 as f,
  l6 as l2,
  o5 as o,
  a7 as a3,
  i6 as i2,
  b4 as b2,
  h4 as h3,
  a8 as a4,
  n3 as n2,
  f3 as f2,
  i7 as i3,
  c7 as c2,
  t6 as t2,
  u4 as u,
  e5 as e
};
//# sourceMappingURL=chunk-VKSQOFHE.js.map
