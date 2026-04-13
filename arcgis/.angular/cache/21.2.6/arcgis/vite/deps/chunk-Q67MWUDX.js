import {
  a as a4,
  b2,
  c2 as c5,
  f as f2,
  f2 as f3,
  h,
  h3 as h2,
  l2,
  o as o3,
  r2 as r5,
  r3 as r7,
  t2 as t4
} from "./chunk-3OHQAA5F.js";
import {
  r as r6
} from "./chunk-E3U6G23Z.js";
import {
  r as r8
} from "./chunk-KUGXR3ZP.js";
import {
  K
} from "./chunk-6G53VZA7.js";
import {
  z as z2
} from "./chunk-CJPED4WO.js";
import {
  c as c3,
  n as n3
} from "./chunk-KGJ4TWSO.js";
import {
  o as o4
} from "./chunk-UBZUT3ED.js";
import {
  i2 as i4
} from "./chunk-HA6XPQQE.js";
import {
  O,
  f,
  g as g2,
  t as t3
} from "./chunk-NR2AFGUW.js";
import {
  e as e6
} from "./chunk-CCQMWYD3.js";
import {
  i as i3,
  o2 as o5
} from "./chunk-NVQAZNDV.js";
import {
  c as c4,
  u as u3,
  w
} from "./chunk-SRLJYNHD.js";
import {
  o as o2,
  r as r4,
  t as t2
} from "./chunk-RN5EOLXT.js";
import {
  g
} from "./chunk-KEB6LZZ5.js";
import {
  Q,
  t
} from "./chunk-GM4J4SMK.js";
import {
  F,
  S,
  z
} from "./chunk-B3N4XLHQ.js";
import {
  i as i2
} from "./chunk-7MRJRWGA.js";
import {
  A,
  C,
  N,
  _,
  a as a3,
  e as e5,
  o,
  u as u2,
  x
} from "./chunk-YM62CGUL.js";
import {
  c as c2
} from "./chunk-D4W5U2I5.js";
import {
  r as r3
} from "./chunk-IXOUFXRS.js";
import {
  a as a2,
  e as e2,
  n,
  r as r2
} from "./chunk-MLBRAI7B.js";
import {
  e as e4
} from "./chunk-XSQPGBLC.js";
import {
  i
} from "./chunk-PMKUQ7UU.js";
import {
  n as n2,
  s,
  u
} from "./chunk-4F4IE6P5.js";
import {
  e as e3
} from "./chunk-EF6HOWDG.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import {
  e,
  l,
  r2 as r
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/BackedBufferObject.js
var r9 = class {
  constructor(r10, i5, s3) {
    this.elementSize = i5.stride, this._buffer = new r8(r10, t(i5, 1)), this.resize(s3);
  }
  destroy() {
    this._buffer.dispose();
  }
  get capacity() {
    return this._capacity;
  }
  get array() {
    return this._array;
  }
  get buffer() {
    return this._buffer;
  }
  get usedMemory() {
    return this._array.byteLength + this._buffer.usedMemory;
  }
  copyRange(e7, t6, r10, i5 = 0) {
    const s3 = new Uint8Array(this.array, e7 * this.elementSize, (t6 - e7) * this.elementSize);
    new Uint8Array(r10.array, i5 * this.elementSize).set(s3);
  }
  transferAll() {
    this._buffer.setData(this._array);
  }
  transferRange(e7, t6) {
    const r10 = e7 * this.elementSize, i5 = t6 * this.elementSize;
    this._buffer.setSubData(new Uint8Array(this._array), r10, r10, i5);
  }
  resize(e7) {
    const t6 = e7 * this.elementSize, r10 = new ArrayBuffer(t6);
    this._array && (e7 >= this._capacity ? new Uint8Array(r10).set(new Uint8Array(this._array)) : new Uint8Array(r10).set(new Uint8Array(this._array).subarray(0, e7 * this.elementSize))), this._array = r10, this._buffer.setSize(t6), this._capacity = e7;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/InstanceData.js
var T = class {
  constructor(t6) {
    this.localTransform = t6.localTransform, this.globalTransform = t6.globalTransform, this.modelOrigin = t6.modelOrigin, this.model = t6.instanceModel, this.modelNormal = t6.instanceModelNormal, this.modelScaleFactors = t6.modelScaleFactors, this.boundingSphere = t6.boundingSphere, this.featureAttribute = t6.getField("instanceFeatureAttribute", F), this.color = t6.getField("instanceColor", z), this.olidColor = t6.getField("instanceOlidColor", z), this.state = t6.getField("state", S), this.lodLevel = t6.getField("lodLevel", S);
  }
};
var F2 = class extends b {
  constructor(t6, e7) {
    super(t6), this.events = new i(), this._capacity = 0, this._size = 0, this._next = 0, this._highlightOptionsMap = /* @__PURE__ */ new Map(), this._highlightOptionsMapPrev = /* @__PURE__ */ new Map(), this._layout = S2(e7), this._capacity = A2, this._buffer = this._layout.createBuffer(this._capacity), this._view = new T(this._buffer);
  }
  get capacity() {
    return this._capacity;
  }
  get size() {
    return this._size;
  }
  get view() {
    return this._view;
  }
  addInstance() {
    this._size + 1 > this._capacity && this._grow();
    const t6 = this._findSlot();
    return this._view.state.set(t6, 1), this._size++, this.events.emit("instances-changed"), t6;
  }
  removeInstance(t6) {
    const e7 = this._view.state;
    i2(t6 >= 0 && t6 < this._capacity && !!(1 & e7.get(t6)), "invalid instance handle"), this._getStateFlag(t6, 18) ? this._setStateFlags(t6, 32) : this.freeInstance(t6), this.events.emit("instances-changed");
  }
  freeInstance(t6) {
    const e7 = this._view.state;
    i2(t6 >= 0 && t6 < this._capacity && !!(1 & e7.get(t6)), "invalid instance handle"), e7.set(t6, 0), this._size--;
  }
  setLocalTransform(t6, e7, i5 = true) {
    this._view.localTransform.setMat(t6, e7), i5 && this.updateModelTransform(t6);
  }
  getLocalTransform(t6, e7) {
    this._view.localTransform.getMat(t6, e7);
  }
  setGlobalTransform(t6, e7, i5 = true) {
    this._view.globalTransform.setMat(t6, e7), i5 && this.updateModelTransform(t6);
  }
  getGlobalTransform(t6, e7) {
    this._view.globalTransform.getMat(t6, e7);
  }
  updateModelTransform(t6) {
    const e7 = this._view, i5 = x2, s3 = j;
    e7.localTransform.getMat(t6, C2), e7.globalTransform.getMat(t6, L);
    const a5 = c2(L, L, C2);
    u2(i5, a5[12], a5[13], a5[14]), e7.modelOrigin.setVec(t6, i5), n2(s3, a5), e7.model.setMat(t6, s3);
    const r10 = g(x2, a5);
    r10.sort(), e7.modelScaleFactors.set(t6, 0, r10[1]), e7.modelScaleFactors.set(t6, 1, r10[2]), s(s3, s3), u(s3, s3), e7.modelNormal.setMat(t6, s3), this._setStateFlags(t6, 64), this.events.emit("instance-transform-changed", { index: t6 });
  }
  getModelTransform(t6, e7) {
    const i5 = this._view;
    i5.model.getMat(t6, j), i5.modelOrigin.getVec(t6, x2), e7[0] = j[0], e7[1] = j[1], e7[2] = j[2], e7[3] = 0, e7[4] = j[3], e7[5] = j[4], e7[6] = j[5], e7[7] = 0, e7[8] = j[6], e7[9] = j[7], e7[10] = j[8], e7[11] = 0, e7[12] = x2[0], e7[13] = x2[1], e7[14] = x2[2], e7[15] = 1;
  }
  applyShaderTransformation(t6, e7) {
    null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t6, e7);
  }
  getCombinedModelTransform(t6, e7) {
    return this.getModelTransform(t6, e7), null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t6, e7), e7;
  }
  getCombinedLocalTransform(t6, e7) {
    this._view.localTransform.getMat(t6, e7), null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t6, e7);
  }
  getCombinedMaxScaleFactor(t6) {
    let e7 = this._view.modelScaleFactors.get(t6, 1);
    return null != this.shaderTransformation && (this.shaderTransformation.scaleFactor(x2, this, t6), e7 *= Math.max(x2[0], x2[1], x2[2])), e7;
  }
  getCombinedMedianScaleFactor(t6) {
    let e7 = this._view.modelScaleFactors.get(t6, 0);
    return null != this.shaderTransformation && (this.shaderTransformation.scaleFactor(x2, this, t6), e7 *= w2(x2[0], x2[1], x2[2])), e7;
  }
  getModel(t6, e7) {
    this._view.model.getMat(t6, e7);
  }
  setFeatureAttribute(t6, e7) {
    this._view.featureAttribute?.setVec(t6, e7);
  }
  getFeatureAttribute(t6, e7) {
    this._view.featureAttribute?.getVec(t6, e7);
  }
  setColor(t6, e7) {
    this._view.color?.setVec(t6, e7);
  }
  setObjectAndLayerIdColor(t6, e7) {
    this._view.olidColor?.setVec(t6, e7);
  }
  setVisible(t6, e7) {
    e7 !== this.getVisible(t6) && (this._setStateFlag(t6, 4, e7), this.events.emit("instance-visibility-changed", { index: t6 }));
  }
  getVisible(t6) {
    return this._getStateFlag(t6, 4);
  }
  setHighlight(t6, e7) {
    const { _highlightOptionsMap: i5 } = this, s3 = i5.get(t6);
    e7 ? e7 !== s3 && (i5.set(t6, e7), this._setStateFlag(t6, 8, true), this.events.emit("instance-highlight-changed")) : s3 && (i5.delete(t6), this._setStateFlag(t6, 8, false), this.events.emit("instance-highlight-changed"));
  }
  get highlightOptionsMap() {
    return this._highlightOptionsMap;
  }
  getHighlightStateFlag(t6) {
    return this._getStateFlag(t6, 8);
  }
  geHighlightOptionsPrev(t6) {
    const e7 = this._highlightOptionsMapPrev.get(t6) ?? null;
    return this._highlightOptionsMapPrev.delete(t6), e7;
  }
  getHighlightName(t6) {
    const e7 = this.highlightOptionsMap.get(t6) ?? null;
    return e7 ? this._highlightOptionsMapPrev.set(t6, e7) : this._highlightOptionsMapPrev.delete(t6), e7;
  }
  getState(t6) {
    return this._view.state.get(t6);
  }
  getLodLevel(t6) {
    return this._view.lodLevel.get(t6);
  }
  countFlags(t6) {
    let e7 = 0;
    for (let i5 = 0; i5 < this._capacity; ++i5) {
      this.getState(i5) & t6 && ++e7;
    }
    return e7;
  }
  _setStateFlags(t6, e7) {
    const i5 = this._view.state;
    e7 = i5.get(t6) | e7, i5.set(t6, e7);
  }
  _clearStateFlags(t6, e7) {
    const i5 = this._view.state;
    e7 = i5.get(t6) & ~e7, i5.set(t6, e7);
  }
  _setStateFlag(t6, e7, i5) {
    i5 ? this._setStateFlags(t6, e7) : this._clearStateFlags(t6, e7);
  }
  _getStateFlag(t6, e7) {
    return !!(this._view.state.get(t6) & e7);
  }
  _grow() {
    this._capacity = Math.max(A2, Math.floor(this._capacity * e)), this._buffer = this._layout.createBuffer(this._capacity).copyFrom(this._buffer), this._view = new T(this._buffer);
  }
  _findSlot() {
    const t6 = this._view.state;
    let e7 = this._next;
    for (; 1 & t6.get(e7); ) e7 = e7 + 1 === this._capacity ? 0 : e7 + 1;
    return this._next = e7 + 1 === this._capacity ? 0 : e7 + 1, e7;
  }
};
function w2(t6, e7, i5) {
  return Math.max(Math.min(t6, e7), Math.min(Math.max(t6, e7), i5));
}
__decorate([a({ constructOnly: true })], F2.prototype, "shaderTransformation", void 0), __decorate([a()], F2.prototype, "_size", void 0), __decorate([a({ readOnly: true })], F2.prototype, "size", null), F2 = __decorate([c("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")], F2);
var y = Q().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");
function S2(t6) {
  return O2(y.clone(), t6).u8("state").u8("lodLevel");
}
function O2(t6, e7) {
  return e7.instancedFeatureAttribute && t6.vec4f("instanceFeatureAttribute"), e7.instancedColor && t6.vec4u8("instanceColor"), e6() && t6.vec4u8("instanceOlidColor"), t6;
}
var x2 = n();
var j = e3();
var C2 = e4();
var L = e4();
var A2 = 64;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/RenderInstanceData.js
var c6 = class {
  constructor(t6) {
    this.model = t6.instanceModel, this.modelNormal = t6.instanceModelNormal, this.modelOriginHi = t6.instanceModelOriginHi, this.modelOriginLo = t6.instanceModelOriginLo, this.featureAttribute = t6.getField("instanceFeatureAttribute", F), this.color = t6.getField("instanceColor", z), this.olidColor = t6.getField("instanceOlidColor", z);
  }
};
var o6 = class {
  constructor(t6, i5) {
    this._rctx = t6, this._layout = i5, this._headIndex = 0, this._tailIndex = 0, this._firstIndex = null, this._captureFirstIndex = true, this._updating = false, this._prevHeadIndex = 0, this._resized = false, this._capacity = 1;
  }
  destroy() {
    this._buffer && this._buffer.destroy();
  }
  get buffer() {
    return this._buffer.buffer;
  }
  get view() {
    return this._view;
  }
  get capacity() {
    return this._capacity;
  }
  get size() {
    const t6 = this._headIndex, i5 = this._tailIndex;
    return t6 >= i5 ? t6 - i5 : t6 + this._capacity - i5;
  }
  get isEmpty() {
    return this._headIndex === this._tailIndex;
  }
  get isFull() {
    return this._tailIndex === (this._headIndex + 1) % this._capacity;
  }
  get headIndex() {
    return this._headIndex;
  }
  get tailIndex() {
    return this._tailIndex;
  }
  get firstIndex() {
    return this._firstIndex;
  }
  get usedMemory() {
    return this._buffer?.usedMemory ?? 0;
  }
  reset() {
    this._headIndex = 0, this._tailIndex = 0, this._firstIndex = null;
  }
  startUpdateCycle() {
    this._captureFirstIndex = true;
  }
  beginUpdate() {
    i2(!this._updating, "already updating"), this._updating = true, this._prevHeadIndex = this._headIndex;
  }
  endUpdate() {
    i2(this._updating, "not updating"), this.size < l * this.capacity && this._shrink(), this._resized ? (this._buffer.transferAll(), this._resized = false) : this._transferRange(this._prevHeadIndex, this._headIndex), this._updating = false;
  }
  allocateHead() {
    i2(this._updating, "not updating"), this.isFull && this._grow();
    const t6 = this.headIndex;
    return this._captureFirstIndex && (this._firstIndex = t6, this._captureFirstIndex = false), this._incrementHead(), i2(this._headIndex !== this._tailIndex, "invalid pointers"), t6;
  }
  freeTail() {
    i2(this._updating, "not updating"), i2(this.size > 0, "invalid size");
    const t6 = this._tailIndex === this._firstIndex;
    this._incrementTail(), t6 && (this._firstIndex = this._tailIndex);
  }
  _grow() {
    const t6 = Math.max(A2, Math.floor(this._capacity * e));
    this._resize(t6);
  }
  _shrink() {
    const t6 = Math.max(A2, Math.floor(this._capacity * r));
    this._resize(t6);
  }
  _resize(t6) {
    if (i2(this._updating, "not updating"), t6 === this._capacity) return;
    const i5 = new r9(this._rctx, this._layout, t6);
    if (this._buffer) {
      this._firstIndex && (this._firstIndex = (this._firstIndex + this._capacity - this._tailIndex) % this._capacity);
      const t7 = this.size, e7 = this._compactInstances(i5);
      i2(e7 === t7, "invalid compaction"), this._buffer.destroy(), this._tailIndex = 0, this._headIndex = e7, this._prevHeadIndex = 0;
    }
    this._resized = true, this._capacity = t6, this._buffer = i5, this._view = new c6(this._layout.createView(this._buffer.array));
  }
  _compactInstances(t6) {
    const i5 = this._headIndex, e7 = this._tailIndex;
    return e7 < i5 ? (this._buffer.copyRange(e7, i5, t6), i5 - e7) : e7 > i5 ? (this._buffer.copyRange(e7, this._capacity, t6), i5 > 0 && this._buffer.copyRange(0, i5, t6, this._capacity - e7), i5 + (this._capacity - e7)) : 0;
  }
  _incrementHead(t6 = 1) {
    this._headIndex = (this._headIndex + t6) % this._capacity;
  }
  _incrementTail(t6 = 1) {
    this._tailIndex = (this._tailIndex + t6) % this._capacity;
  }
  _transferRange(t6, i5) {
    t6 < i5 ? this._buffer.transferRange(t6, i5) : t6 > i5 && (i5 > 0 && this._buffer.transferRange(0, i5), this._buffer.transferRange(t6, this._capacity));
  }
};
var f4 = Q().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");
function u4(t6) {
  return O2(f4.clone(), t6);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
var A3 = class extends n3 {
  constructor() {
    super(...arguments), this.isSchematic = false, this.usePBR = false, this.mrrFactors = o4, this.hasVertexColors = false, this.hasSymbolColors = false, this.doubleSided = false, this.doubleSidedType = "normal", this.cullFace = 2, this.instanced = false, this.instancedFeatureAttribute = false, this.instancedColor = false, this.instanceColorEncodesAlphaIgnore = false, this.emissiveStrengthFromSymbol = 0, this.emissiveStrengthKHR = 1, this.emissiveSource = 1, this.emissiveBaseColor = a2, this.instancedDoublePrecision = false, this.normalType = 0, this.receiveShadows = true, this.receiveAmbientOcclusion = true, this.castShadows = true, this.ambient = e2(0.2, 0.2, 0.2), this.diffuse = e2(0.8, 0.8, 0.8), this.externalColor = r3(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = n(), this.hasSlicePlane = false, this.offsetTransparentBackfaces = false, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.modelTransformation = null, this.drivenOpacity = false, this.writeDepth = true, this.customDepthTest = 0, this.textureAlphaMode = 0, this.textureAlphaCutoff = o5, this.textureAlphaPremultiplied = false, this.renderOccluded = 1, this.testsTransparentRenderOrder = 0, this.isDecoration = false;
  }
  get hasVVSize() {
    return !!this.vvSize;
  }
  get hasVVColor() {
    return !!this.vvColor;
  }
  get hasVVOpacity() {
    return !!this.vvOpacity;
  }
};
var M = class extends c3 {
  constructor() {
    super(...arguments), this.origin = n(), this.slicePlaneLocalOrigin = this.origin;
  }
};
var R = class extends g2 {
  constructor(e7, t6) {
    let i5 = t(k(t6));
    t6.instanced && t6.instancedDoublePrecision && (i5 = i5.concat(t(u4(t6)))), super(e7, t6, i5), this.shader = new t3(K, () => import("./DefaultMaterial.glsl-5WYPZFU6.js"));
  }
  _makePipeline(e7, t6) {
    const { oitPass: i5, output: s3, hasEmission: r10, transparent: o7, cullFace: l3, customDepthTest: n4, hasOccludees: c7 } = e7;
    return w({ blending: o2(s3) && o7 ? f2(i5) : null, culling: F3(e7) ? c4(l3) : null, depthTest: o3(i5, z3(n4)), depthWrite: l2(e7), drawBuffers: f(s3, h2(i5, r10)), colorWrite: u3, stencilWrite: c7 ? f3 : null, stencilTest: c7 ? t6 ? t4 : c5 : null, polygonOffset: b2(e7) });
  }
  initializePipeline(e7) {
    return this._occludeePipelineState = this._makePipeline(e7, true), this._makePipeline(e7, false);
  }
  getPipeline(e7, t6) {
    return t6 ? this._occludeePipelineState : super.getPipeline(e7);
  }
};
function z3(e7) {
  switch (e7) {
    case 1:
      return 515;
    case 0:
    case 3:
      return 513;
    case 2:
      return 516;
  }
}
function F3(e7) {
  return 0 !== e7.cullFace || !e7.hasSlicePlane && (!e7.transparent && !e7.doubleSidedMode);
}
function k(e7) {
  const t6 = Q().vec3f("position");
  return 1 === e7.normalType ? t6.vec2i16("normalCompressed", { glNormalized: true }) : t6.vec3f("normal"), e7.hasVertexTangents && t6.vec4f("tangent"), e7.hasTextures && t6.vec2f16("uv0"), e7.hasVertexColors && t6.vec4u8("color", { glNormalized: true }), e7.hasSymbolColors && t6.vec4u8("symbolColor"), !e7.instanced && e6() && t6.vec4u8("olidColor"), t6;
}
R = __decorate([c("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")], R);

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js
var s2 = class extends r6 {
  constructor(e7) {
    super(), this.spherical = e7, this.alphaDiscardMode = 1, this.doubleSidedMode = 0, this.pbrMode = 0, this.cullFace = 0, this.normalType = 0, this.customDepthTest = 0, this.emissionSource = 0, this.hasVertexColors = false, this.hasSymbolColors = false, this.hasVerticalOffset = false, this.hasColorTexture = false, this.hasMetallicRoughnessTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.hasScreenSizePerspective = false, this.hasVertexTangents = false, this.hasOccludees = false, this.instanced = false, this.instancedDoublePrecision = false, this.hasModelTransformation = false, this.offsetBackfaces = false, this.hasVVSize = false, this.hasVVColor = false, this.receiveShadows = false, this.receiveAmbientOcclusion = false, this.textureAlphaPremultiplied = false, this.instancedFeatureAttribute = false, this.instancedColor = false, this.writeDepth = true, this.transparent = false, this.enableOffset = true, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.snowCover = false, this.hasColorTextureTransform = false, this.hasEmissionTextureTransform = false, this.hasNormalTextureTransform = false, this.hasOcclusionTextureTransform = false, this.hasMetallicRoughnessTextureTransform = false, this.occlusionPass = false, this.useCustomDTRExponentForWater = false, this.useFillLights = true, this.draped = false;
  }
  get textureCoordinateType() {
    return this.hasTextures ? 1 : 0;
  }
  get hasTextures() {
    return this.hasColorTexture || this.hasNormalTexture || this.hasMetallicRoughnessTexture || 3 === this.emissionSource || this.hasOcclusionTexture;
  }
  get hasVVInstancing() {
    return this.instanced;
  }
  get discardInvisibleFragments() {
    return this.transparent;
  }
};
__decorate([i3({ count: 4 })], s2.prototype, "alphaDiscardMode", void 0), __decorate([i3({ count: 3 })], s2.prototype, "doubleSidedMode", void 0), __decorate([i3({ count: 7 })], s2.prototype, "pbrMode", void 0), __decorate([i3({ count: 3 })], s2.prototype, "cullFace", void 0), __decorate([i3({ count: 3 })], s2.prototype, "normalType", void 0), __decorate([i3({ count: 3 })], s2.prototype, "customDepthTest", void 0), __decorate([i3({ count: 8 })], s2.prototype, "emissionSource", void 0), __decorate([i3()], s2.prototype, "hasVertexColors", void 0), __decorate([i3()], s2.prototype, "hasSymbolColors", void 0), __decorate([i3()], s2.prototype, "hasVerticalOffset", void 0), __decorate([i3()], s2.prototype, "hasColorTexture", void 0), __decorate([i3()], s2.prototype, "hasMetallicRoughnessTexture", void 0), __decorate([i3()], s2.prototype, "hasOcclusionTexture", void 0), __decorate([i3()], s2.prototype, "hasNormalTexture", void 0), __decorate([i3()], s2.prototype, "hasScreenSizePerspective", void 0), __decorate([i3()], s2.prototype, "hasVertexTangents", void 0), __decorate([i3()], s2.prototype, "hasOccludees", void 0), __decorate([i3()], s2.prototype, "instanced", void 0), __decorate([i3()], s2.prototype, "instancedDoublePrecision", void 0), __decorate([i3()], s2.prototype, "hasModelTransformation", void 0), __decorate([i3()], s2.prototype, "offsetBackfaces", void 0), __decorate([i3()], s2.prototype, "hasVVSize", void 0), __decorate([i3()], s2.prototype, "hasVVColor", void 0), __decorate([i3()], s2.prototype, "receiveShadows", void 0), __decorate([i3()], s2.prototype, "receiveAmbientOcclusion", void 0), __decorate([i3()], s2.prototype, "textureAlphaPremultiplied", void 0), __decorate([i3()], s2.prototype, "instancedFeatureAttribute", void 0), __decorate([i3()], s2.prototype, "instancedColor", void 0), __decorate([i3()], s2.prototype, "writeDepth", void 0), __decorate([i3()], s2.prototype, "transparent", void 0), __decorate([i3()], s2.prototype, "enableOffset", void 0), __decorate([i3()], s2.prototype, "terrainDepthTest", void 0), __decorate([i3()], s2.prototype, "cullAboveTerrain", void 0), __decorate([i3()], s2.prototype, "snowCover", void 0), __decorate([i3()], s2.prototype, "hasColorTextureTransform", void 0), __decorate([i3()], s2.prototype, "hasEmissionTextureTransform", void 0), __decorate([i3()], s2.prototype, "hasNormalTextureTransform", void 0), __decorate([i3()], s2.prototype, "hasOcclusionTextureTransform", void 0), __decorate([i3()], s2.prototype, "hasMetallicRoughnessTextureTransform", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js
var t5 = class extends R {
  constructor() {
    super(...arguments), this.shader = new t3(z2, () => import("./RealisticTree.glsl-53JDRLA3.js"));
  }
};
t5 = __decorate([c("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")], t5);

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js
var R2 = class extends a4 {
  constructor(e7, r10) {
    super(e7, P), this.materialType = "default", this.supportsEdges = true, this.intersectDraped = void 0, this.produces = /* @__PURE__ */ new Map([[2, (e8) => (t2(e8) || r4(e8)) && !this.transparent], [4, (e8) => (t2(e8) || r4(e8)) && this.transparent && this.parameters.writeDepth], [9, (e8) => (t2(e8) || r4(e8)) && this.transparent && !this.parameters.writeDepth]]), this._layout = k(this.parameters), this._configuration = new s2(r10.spherical);
  }
  isVisibleForOutput(e7) {
    return 3 !== e7 && 5 !== e7 && 4 !== e7 || this.parameters.castShadows;
  }
  get visible() {
    const { layerOpacity: e7, colorMixMode: r10, opacity: t6, externalColor: s3 } = this.parameters;
    return e7 * ("replace" === r10 ? 1 : t6) * ("ignore" === r10 || isNaN(s3[3]) ? 1 : s3[3]) >= o5;
  }
  get _hasEmissiveBase() {
    return !!this.parameters.emissiveTextureId || !C(this.parameters.emissiveBaseColor, a2);
  }
  get hasEmissions() {
    return this.parameters.emissiveStrength > 0 && (0 === this.parameters.emissiveSource && this._hasEmissiveBase || 1 === this.parameters.emissiveSource);
  }
  getConfiguration(e7, r10) {
    const { parameters: t6, _configuration: s3 } = this, { treeRendering: i5, doubleSided: a5, doubleSidedType: o7 } = t6;
    return super.getConfiguration(e7, r10, this._configuration), s3.hasNormalTexture = t6.hasNormalTexture, s3.hasColorTexture = t6.hasColorTexture, s3.hasMetallicRoughnessTexture = t6.hasMetallicRoughnessTexture, s3.hasOcclusionTexture = t6.hasOcclusionTexture, s3.hasVertexTangents = !i5 && t6.hasVertexTangents, s3.instanced = t6.instanced, s3.instancedDoublePrecision = t6.instancedDoublePrecision, s3.hasVVColor = !!t6.vvColor, s3.hasVVSize = !!t6.vvSize, s3.hasVerticalOffset = null != t6.verticalOffset, s3.hasScreenSizePerspective = null != t6.screenSizePerspective, s3.hasSlicePlane = t6.hasSlicePlane, s3.alphaDiscardMode = t6.textureAlphaMode, s3.normalType = i5 ? 0 : t6.normalType, s3.transparent = this.transparent, s3.writeDepth = t6.writeDepth, s3.customDepthTest = t6.customDepthTest ?? 0, s3.hasOccludees = r10.hasOccludees, s3.cullFace = t6.hasSlicePlane ? 0 : t6.cullFace, s3.cullAboveTerrain = r10.cullAboveTerrain, s3.hasModelTransformation = !i5 && null != t6.modelTransformation, s3.hasVertexColors = t6.hasVertexColors, s3.hasSymbolColors = t6.hasSymbolColors, s3.doubleSidedMode = i5 ? 2 : a5 && "normal" === o7 ? 1 : a5 && "winding-order" === o7 ? 2 : 0, s3.instancedFeatureAttribute = t6.instancedFeatureAttribute, s3.instancedColor = t6.instancedColor, o2(e7) ? (s3.terrainDepthTest = r10.terrainDepthTest, s3.receiveShadows = t6.receiveShadows, s3.receiveAmbientOcclusion = t6.receiveAmbientOcclusion && null != r10.ssao) : (s3.terrainDepthTest = false, s3.receiveShadows = s3.receiveAmbientOcclusion = false), s3.textureAlphaPremultiplied = !!t6.textureAlphaPremultiplied, s3.pbrMode = t6.usePBR ? t6.isSchematic ? 2 : 1 : 0, s3.emissionSource = t6.emissionSource, s3.offsetBackfaces = !(!this.transparent || !t6.offsetTransparentBackfaces), s3.enableOffset = r10.enableOffset, s3.snowCover = r10.snowCover > 0, s3.hasColorTextureTransform = !!t6.colorTextureTransformMatrix, s3.hasNormalTextureTransform = !!t6.normalTextureTransformMatrix, s3.hasEmissionTextureTransform = !!t6.emissiveTextureTransformMatrix, s3.hasOcclusionTextureTransform = !!t6.occlusionTextureTransformMatrix, s3.hasMetallicRoughnessTextureTransform = !!t6.metallicRoughnessTextureTransformMatrix, s3;
  }
  intersect(e7, u5, c7, h3, m, p) {
    if (null != this.parameters.verticalOffset) {
      const e8 = c7.camera;
      u2(N2, u5[12], u5[13], u5[14]);
      let p2 = null;
      switch (c7.viewingMode) {
        case 1:
          p2 = _(_2, N2);
          break;
        case 2:
          p2 = o(_2, I);
      }
      const d = e5(z4, N2, e8.eye), f5 = a3(d), T2 = x(d, d, 1 / f5);
      let x3 = null;
      this.parameters.screenSizePerspective && (x3 = A(p2, T2));
      const g3 = i4(e8, f5, this.parameters.verticalOffset, x3 ?? 0, this.parameters.screenSizePerspective, null);
      x(p2, p2, g3), N(B, p2, c7.transform.inverseRotation), h3 = e5(A4, h3, B), m = e5(V, m, B);
    }
    h(e7, c7, h3, m, O(c7.verticalOffset), p);
  }
  createGLMaterial(e7) {
    return new D(e7);
  }
  createBufferWriter() {
    return new r7(this._layout);
  }
  get transparent() {
    return j2(this.parameters);
  }
};
var D = class extends r5 {
  constructor(e7) {
    super(__spreadValues(__spreadValues({}, e7), e7.material.parameters));
  }
  beginSlot(e7) {
    this._material.setParameters({ receiveShadows: e7.shadowMap.enabled });
    const t6 = this._material.parameters;
    this.updateTexture(t6.textureId);
    const s3 = e7.camera.viewInverseTransposeMatrix;
    return u2(t6.origin, s3[3], s3[7], s3[11]), this._material.setParameters(this.textureBindParameters), this.getTechnique(t6.treeRendering ? t5 : R, e7);
  }
};
var P = class extends A3 {
  constructor() {
    super(...arguments), this.treeRendering = false, this.hasVertexTangents = false;
  }
  get hasNormalTexture() {
    return !this.treeRendering && !!this.normalTextureId;
  }
  get hasColorTexture() {
    return !!this.textureId;
  }
  get hasMetallicRoughnessTexture() {
    return !this.treeRendering && !!this.metallicRoughnessTextureId;
  }
  get hasOcclusionTexture() {
    return !this.treeRendering && !!this.occlusionTextureId;
  }
  get emissiveStrength() {
    return this.emissiveStrengthFromSymbol * this.emissiveStrengthKHR;
  }
  get emissionSource() {
    return this.treeRendering ? 0 : null != this.emissiveTextureId && 0 === this.emissiveSource ? 3 : 0 === this.emissiveSource ? 2 : 1;
  }
  get hasTextures() {
    return this.hasColorTexture || this.hasNormalTexture || this.hasMetallicRoughnessTexture || 3 === this.emissionSource || this.hasOcclusionTexture;
  }
};
function j2(e7) {
  const { drivenOpacity: r10, opacity: t6, externalColor: s3, layerOpacity: i5, texture: a5, textureId: o7, textureAlphaMode: n4, colorMixMode: l3 } = e7, u5 = s3[3];
  return r10 || t6 < 1 && "replace" !== l3 || u5 < 1 && "ignore" !== l3 || i5 < 1 || (null != a5 || null != o7) && 1 !== n4 && 2 !== n4 && "replace" !== l3;
}
var A4 = n();
var V = n();
var I = r2(0, 0, 1);
var _2 = n();
var B = n();
var N2 = n();
var z4 = n();

export {
  F2 as F,
  o6 as o,
  u4 as u,
  M,
  R2 as R
};
//# sourceMappingURL=chunk-Q67MWUDX.js.map
