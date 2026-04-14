import {
  n2
} from "./chunk-I7L4VBHX.js";
import {
  m
} from "./chunk-4K54FG2U.js";
import {
  i as i2,
  o2 as o,
  o3 as o2
} from "./chunk-5I7F4YUD.js";
import {
  E2 as E,
  h
} from "./chunk-2RCOXHZQ.js";
import {
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q
} from "./chunk-3EE7FDFG.js";
import {
  i
} from "./chunk-IO7CXLQO.js";
import {
  has,
  n2 as n,
  r3 as r
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js
var f = () => n.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");
var b = class {
  constructor(t, e, i5) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s2, pixelType: r3, textureOnly: a } = t, n4 = i2(r3);
    this.blockIndex = i5, this.pixelType = r3, this.size = e, this.textureOnly = a, a || (this.data = new n4(s2)), this._resetRange();
  }
  destroy() {
    this._texture?.dispose();
    for (const t in this._fbos) {
      const e = this._fbos[t];
      e && ("0" === t && e.detachColorTexture(), e.dispose()), this._fbos[t] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t = new h(this.size);
    return t.wrapMode = 33071, t.samplingMode = 9728, t.dataType = this.pixelType, t;
  }
  get usedMemory() {
    return null != this.data ? i(this.data) : 0;
  }
  setData(t, e, i5) {
    const s2 = o(t), r3 = this.data, a = s2 * this.texelSize + e;
    !r3 || a >= r3.length || (r3[a] = i5, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t, e) {
    if (null == this.data) return null;
    const i5 = o(t) * this.texelSize + e;
    return !this.data || i5 >= this.data.length ? null : this.data[i5];
  }
  getTexture(t) {
    return this._texture ?? this._initTexture(t);
  }
  getFBO(t, e = 0) {
    if (!this._fbos[e]) {
      const i5 = 0 === e ? this.getTexture(t) : this._textureDesc;
      this._fbos[e] = new m(t, i5);
    }
    return this._fbos[e];
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(e, i5) {
    try {
      const s2 = this.dirtyStart, r3 = this.dirtyEnd;
      if (!this.hasDirty) return;
      has("esri-2d-update-debug") && console.debug(`Version[${i5}] AttributeStoreView.updateTexture`, { start: s2, end: r3, firstBytes: new Uint8Array(this.data.buffer.slice(0, 16)), block: this }), this._resetRange();
      const a = this.data.buffer, n4 = this.getTexture(e), u = 4, h2 = (s2 - s2 % this.size) / this.size, o3 = (r3 - r3 % this.size) / this.size, d = h2, l = this.size, g = o3, _ = h2 * this.size * u, c = (l + g * this.size) * u - _, x = i2(this.pixelType), b2 = new x(a, _ * x.BYTES_PER_ELEMENT, c), m3 = this.size, T = g - d + 1;
      if (T > this.size) return void f().error(new r("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
      n4.updateData(0, 0, d, m3, T, b2);
    } catch (s2) {
    }
  }
  update(t) {
    const { data: e, start: i5, end: s2 } = t;
    if (null != e && null != this.data) {
      const s3 = this.data, r3 = i5 * this.texelSize;
      for (let i6 = 0; i6 < e.length; i6++) {
        const a = 1 << i6 % this.texelSize;
        t.layout & a && (s3[r3 + i6] = e[i6]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i5), this.dirtyEnd = Math.max(this.dirtyEnd, s2);
  }
  resize(t, e) {
    const i5 = this.size;
    if (this.size = e, this.textureOnly) return void (i5 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = i2(this.pixelType);
    this.destroy(), this.data = new s2(t.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t) {
    const e = new E(t, this._textureDesc, this.data ?? void 0);
    if (null != this._lastTexture && this._fbos[0]) {
      const i5 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r3 = this._lastTexture.descriptor.dataType, a = this._lastTexture.descriptor.pixelFormat, n4 = this.getFBO(t), u = o2(r3), h2 = new (i2(r3))(new ArrayBuffer(i5 * s2 * u * this.texelSize)), o3 = t.getBoundFramebufferObject(), { x: d, y: l, width: _, height: c } = t.getViewport();
      t.bindFramebuffer(n4), n4.readPixels(0, 0, i5, s2, a, r3, h2), e.updateData(0, 0, 0, 2 * i5, s2 / 2, h2), t.setViewport(d, l, _, c), t.bindFramebuffer(o3);
    }
    return this.destroy(), this._texture = e, this._texture;
  }
};
var m2 = class {
  constructor() {
    this.size = 0, this._pendingAttributeUpdates = [], this._version = 0, this._epoch = 0, this._locked = false;
  }
  get locked() {
    return this._locked;
  }
  get usedMemory() {
    let t = 0;
    for (const e of this._data ?? []) null != e && (t += e.usedMemory);
    return t;
  }
  _initialize(t) {
    if (!t) throw new Error("InternalError: initArgs must be defined");
    const e = t.blockDescriptors;
    if (this.size = t.blockSize, has("esri-2d-update-debug") && console.debug("AttributeStoreView.initialize", { message: t }), null == this._data) this._data = e.map((t2, e2) => null != t2 ? new b(t2, this.size, e2) : null);
    else for (let i5 = 0; i5 < this._data.length; i5++) {
      const t2 = this._data[i5], s2 = e[i5];
      null != s2 && (null == t2 ? this._data[i5] = new b(s2, this.size, i5) : t2.resize(s2, this.size));
    }
  }
  destroy() {
    for (const t of this._data ?? []) t?.destroy();
    this._defaultTexture?.dispose(), this._defaultTexture = null, this._pendingAttributeUpdates = [];
  }
  isEmpty() {
    return null == this._data;
  }
  getBlock(t) {
    if (null == this._data) return null;
    return this._data[t];
  }
  setLabelMinZoom(t, e) {
    this.setData(t, 0, 1, e);
  }
  setLocalTimeOrigin(t, e) {
    this.setData(t, 7, 0, e);
  }
  getLabelMinZoom(t) {
    return this.getData(t, 0, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, 0, 0, 0);
  }
  getVisualVariableData(t, e) {
    return this.getData(t, 3, e, 0);
  }
  getData(t, e, i5, s2) {
    if (!this._data) return 0;
    const r3 = this._data[e];
    if (null == r3) return 0;
    const a = r3.getData(t, i5);
    return null != a ? a : s2;
  }
  setData(t, e, i5, s2) {
    this._data[e].setData(t, i5, s2);
  }
  lockTextureUploads() {
    this._locked = true;
  }
  unlockTextureUploads() {
    this._locked = false, this.update();
  }
  requestUpdate(t) {
    this._version = t.version, this._pendingAttributeUpdates.push(t), has("esri-2d-update-debug") && console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`, { message: t });
  }
  get currentEpoch() {
    return this._epoch;
  }
  get hasPendingUpdates() {
    return this._pendingAttributeUpdates.length > 0;
  }
  update() {
    if (this._locked) return;
    const t = this._pendingAttributeUpdates;
    this._pendingAttributeUpdates = [];
    for (const e of t) {
      const { blockData: t2, initArgs: i5, sendUpdateEpoch: s2, version: r3 } = e;
      has("esri-2d-update-debug") && console.debug(`Version[${this._version}] Epoch[${s2}] AttributeStoreView.applyUpdate`), this._version = r3, this._epoch = s2, null != i5 && this._initialize(i5);
      const a = this._data;
      for (let e2 = 0; e2 < t2.length; e2++) {
        const i6 = t2[e2], s3 = a[e2];
        null != s3 && null != i6 && (has("esri-2d-update-debug") && console.debug(`Version[${this._version}] CpuBlock[${e2}] AttributeStoreView.update`, { block: i6 }), s3.update(i6));
      }
    }
  }
  getUniforms(t) {
    return { filterFlags: { texture: this._getTexture(t, 0), unit: J }, animation: { texture: this._getTexture(t, 1), unit: K }, gpgpu: { texture: this._getTexture(t, 2), unit: P }, localTimeOrigin: { texture: this._getTexture(t, 7), unit: Q }, visualVariableData: { texture: this._getTexture(t, 3), unit: L }, dataDriven0: { texture: this._getTexture(t, 4), unit: M }, dataDriven1: { texture: this._getTexture(t, 5), unit: N }, dataDriven2: { texture: this._getTexture(t, 6), unit: O }, size: this.size };
  }
  _getTexture(t, e) {
    const i5 = this._data?.[e];
    return i5 ? (i5.updateTexture(t, this._version), i5.getTexture(t)) : this._getDefaultTexture(t);
  }
  _getDefaultTexture(t) {
    if (null == this._defaultTexture) {
      const e = new h(1);
      e.wrapMode = 33071, e.samplingMode = 9728, this._defaultTexture = new E(t, e, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/AFeatureContainer.js
var i3 = 60;
var s = class extends n2 {
  constructor(e) {
    super(e), this._statisticsByLevel = /* @__PURE__ */ new Map(), this._entityIndex = /* @__PURE__ */ new Map(), this.attributeView = new m2();
  }
  destroy() {
    super.destroy(), this.children.forEach((t) => t.destroy()), this.removeAllChildren(), this.attributeView.destroy();
  }
  doRender(t) {
    t.context.capabilities.enable("textureFloatLinear"), super.doRender(t);
  }
  get hasAnimations() {
    for (const t of this.children) if (t.hasAnimations) return true;
    return false;
  }
  _reindexAndUpdateFeaturesIfNeeded() {
    if (this.hasAnimations && (this._reindexFeatures(), 0 !== this.attributeView.size)) for (const t of this._entityIndex.values()) t.dirty && (this.attributeView.setData(t.displayId, 7, 0, t.firstIndexed), t.dirty = false);
  }
  restartAnimation(t) {
    const e = this._entityIndex.get(t);
    if (!e) return;
    const i5 = performance.now() / 1e3;
    e.firstIndexed = i5, e.dirty = true;
  }
  restartAllAnimations() {
    const t = performance.now() / 1e3;
    for (const [e, i5] of this._entityIndex) i5.firstIndexed = t, i5.dirty = true;
  }
  _reindexFeatures() {
    const t = performance.now() / 1e3;
    for (const e of this.children) for (const i5 of e.entityIds) {
      const { objectId: e2 } = i5;
      let s2 = this._entityIndex.get(e2);
      s2 || (s2 = { objectId: e2, displayId: 0, firstIndexed: t, lastIndexed: 0, dirty: true }, this._entityIndex.set(e2, s2)), s2.lastIndexed = t, s2.displayId = i5.displayId;
    }
    for (const [e, s2] of this._entityIndex) t - s2.lastIndexed > i3 && this._entityIndex.delete(e);
  }
  _updateAttributeView() {
    this.attributeView.update(), this._reindexAndUpdateFeaturesIfNeeded();
  }
  createRenderParams(t) {
    const e = super.createRenderParams(t);
    return e.attributeView = this.attributeView, e.instanceStore = this._instanceStore, e.statisticsByLevel = this._statisticsByLevel, e;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/instanceIdUtils.js
function n3(n4) {
  return n4;
}
function r2(n4) {
  return n4;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueInstance.js
var i4 = class {
  constructor(t, i5, e) {
    this._instanceId = t, this.techniqueRef = i5, this._input = e;
  }
  get instanceId() {
    return n3(this._instanceId);
  }
  createMeshInfo(i5) {
    return { id: n3(this._instanceId), techniqueType: this.techniqueRef.type, inputParams: i5, optionalAttributes: this._input.optionalAttributes };
  }
  getInput() {
    return this._input;
  }
  setInput(t) {
    this._input = t;
  }
};

export {
  s,
  r2 as r,
  i4 as i
};
//# sourceMappingURL=chunk-PYXMUOUL.js.map
