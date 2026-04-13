import {
  h as h2
} from "./chunk-UAORIXH6.js";
import {
  r as r3
} from "./chunk-KUGXR3ZP.js";
import {
  o
} from "./chunk-4QKD47PD.js";
import {
  t
} from "./chunk-7U4LQW5Y.js";
import {
  h
} from "./chunk-J5D74YXM.js";
import {
  e
} from "./chunk-2M42TJQH.js";
import {
  R,
  _
} from "./chunk-AFCXMSTT.js";
import {
  r as r2
} from "./chunk-PMKUQ7UU.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c
} from "./chunk-LV7AMIAU.js";
import {
  s
} from "./chunk-FMPS52FS.js";
import {
  a
} from "./chunk-E73BLMZG.js";
import {
  $
} from "./chunk-POW25PFR.js";
import {
  has
} from "./chunk-IDI4VM7T.js";
import {
  L,
  r
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js
var r4 = class extends b {
  constructor(t2) {
    super(t2), this.computedOpacity = 1, this.computedVisible = true, this.opacity = 1, this.visible = true, this._fadeOutResolver = null, this._fadeInResolver = null;
  }
  get transitioning() {
    return (this._fadeOutResolver || !this.visible ? 0 : this.opacity) !== this.computedOpacity;
  }
  endTransition() {
    this._fadeInResolver?.(), this._fadeOutResolver?.(), this._fadeInResolver = this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0;
  }
  fadeIn() {
    return this._fadeInResolver || (this.opacity = 1, this.computedOpacity = 0, this._fadeOutResolver?.(), this._fadeOutResolver = null, this._fadeInResolver = $()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this.opacity = 0, this._fadeInResolver?.(), this._fadeInResolver = null, this._fadeOutResolver = $()), this._fadeOutResolver.promise;
  }
  transitionStep(t2, e3) {
    const i = has("mapview-transitions-duration"), s3 = i ? 1 / i : 0;
    if (0 === s3) this.computedOpacity = this.opacity, this.computedVisible = this.visible;
    else {
      const e4 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, i2 = this.computedOpacity;
      if (i2 === e4) this.computedVisible = this.visible;
      else {
        const o4 = t2 * s3;
        this.computedOpacity = i2 > e4 ? Math.max(e4, i2 - o4) : Math.min(e4, i2 + o4), this.computedVisible = this.computedOpacity > 0;
      }
    }
    this.transitioning || (this._fadeInResolver?.(), this._fadeOutResolver?.(), this._fadeOutResolver = this._fadeInResolver = null);
  }
};
__decorate([a2()], r4.prototype, "computedOpacity", void 0), __decorate([a2()], r4.prototype, "computedVisible", void 0), __decorate([a2()], r4.prototype, "opacity", void 0), __decorate([a2()], r4.prototype, "visible", void 0), __decorate([a2()], r4.prototype, "transitioning", null), __decorate([a2()], r4.prototype, "_fadeOutResolver", void 0), __decorate([a2()], r4.prototype, "_fadeInResolver", void 0), r4 = __decorate([c("esri.views.2d.engine.transitions.FadeTransition")], r4);

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/definitions.js
var T = { [R.BYTE]: 1, [R.UNSIGNED_BYTE]: 1, [R.SHORT]: 2, [R.UNSIGNED_SHORT]: 2, [R.HALF_FLOAT]: 2, [R.INT]: 4, [R.UNSIGNED_INT]: 4, [R.FLOAT]: 4 };

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/Mesh.js
var o2 = class {
  constructor(r5, t2) {
    this._boundPart = null, this.vertexBuffers = /* @__PURE__ */ new Map(), this.indexBuffers = /* @__PURE__ */ new Map(), this.groups = [];
    for (const e3 in t2.vertex) {
      const { data: s3, layout: o4 } = t2.vertex[e3], n2 = new r3(r5, o4, s3);
      this.vertexBuffers.set(e3, n2);
    }
    for (const s3 in t2.index) {
      const { data: i } = t2.index[s3], o4 = o.createIndex(r5, 35044, i);
      this.indexBuffers.set(s3, o4);
    }
    for (const e3 of t2.groups) this.groups.push(__spreadProps(__spreadValues({}, e3), { vertexArrays: /* @__PURE__ */ new Map() }));
    this.parts = t2.parts;
  }
  bind(e3, s3, i) {
    if (null == e3.gl) return void (this._boundPart = null);
    this._boundPart = i;
    const { group: o4 } = this.parts[this._boundPart], n2 = this.groups[o4];
    if (!n2) throw new Error(`Missing group ${o4}.`);
    let f = n2.vertexArrays.get(s3.stringHash);
    if (!f) {
      const { locations: i2, stringHash: o5 } = s3, a3 = r(new Set(i2.keys())), u = n2.index ? this.indexBuffers.get(n2.index) : null, h3 = /* @__PURE__ */ new Map();
      for (const [r5, e4] of this.vertexBuffers) {
        e4.layout.filter((r6) => a3.has(r6.name)).length > 0 && h3.set(r5, e4);
      }
      f = new h2(e3, h3, u, void 0, i2), n2.vertexArrays.set(o5, f);
    }
    e3.bindVAO(f);
  }
  draw(r5) {
    if (null == this._boundPart) throw new Error("Mesh.bind() has not been called.");
    const { start: e3, count: t2 } = this.parts[this._boundPart], { group: i } = this.parts[this._boundPart], { primitive: o4, index: n2 } = this.groups[i];
    if (n2) {
      const i2 = this.indexBuffers.get(n2);
      if (!i2) throw new Error(`Missing index buffer "${n2}".`);
      const { indexType: f } = i2;
      if (!f) throw new Error("Buffer type error.");
      r5.drawElements(o4, t2, f, e3 * T[f]);
    } else r5.drawArrays(o4, e3, t2);
  }
  unbind(r5) {
    this._boundPart = null, r5.bindVAO(null);
  }
  destroy() {
    this.groups.forEach(({ vertexArrays: r5 }) => r5.forEach((r6) => r6.disposeVAOOnly())), this.vertexBuffers.forEach((r5) => r5.dispose()), this.indexBuffers.forEach((r5) => r5.dispose());
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/SimpleMesh.js
var o3 = { position: { type: R.SHORT, count: 2 } };
var s2 = class _s extends o2 {
  static create(e3, r5) {
    const i = [];
    let { stride: o4 } = r5;
    if (null == o4) {
      o4 = 0;
      for (const [e4, { count: i2, type: n2, offset: s3 }] of Object.entries(r5.layout)) {
        if (null != s3) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        o4 += i2 * T[n2];
      }
    }
    let a3 = 0;
    for (const [s3, { count: d, offset: f, type: m, normalized: x }] of Object.entries(r5.layout)) {
      null != f && (a3 = f);
      const e4 = new t(s3, d, m, a3, o4, null != x && x, 0);
      i.push(e4), a3 += d * T[m];
    }
    const l = { primitive: r5.primitive };
    null != r5.index && (l.index = "indexData");
    let { count: u } = r5;
    if (null == u && (u = r5.index ? r5.index.length : r5.vertex.byteLength / o4, Math.floor(u) !== u)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${o4}.`);
    const c2 = { start: 0, count: u, group: 0, primitive: r5.primitive }, p = { vertex: { vertexData: { data: r5.vertex, layout: i } }, parts: [c2], groups: [l] };
    return null != r5.index && (p.index = { indexData: { data: r5.index } }), new _s(e3, p, r5.layout);
  }
  static createForShader(t2, e3) {
    return this.create(t2, e3);
  }
  static fromVertexStream(t2, e3) {
    return _s.create(t2, { primitive: _.TRIANGLE_STRIP, vertex: new Uint16Array(e3), layout: o3 });
  }
  constructor(t2, e3, r5) {
    super(t2, e3), this._spec = r5;
  }
  bind(t2, e3, r5 = 0) {
    super.bind(t2, e3, r5);
  }
};

// node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var e2 = class extends r2 {
  constructor() {
    super(...arguments), this._transitionables = null, this._clips = [], this._fadeTransition = null, this._isReady = false, this._opacity = 1, this.parent = null, this._stage = null, this._visible = true;
  }
  get computedOpacity() {
    return this._fadeTransition?.computedOpacity ?? this.opacity;
  }
  get clips() {
    return this._clips;
  }
  set clips(t2) {
    this._clips = t2, this.requestRender();
  }
  get effectiveVisible() {
    return this.visible && true === this.parent?.effectiveVisible;
  }
  get fadeTransitionEnabled() {
    return null !== this._fadeTransition;
  }
  set fadeTransitionEnabled(t2) {
    !this._fadeTransition && t2 ? (this._fadeTransition = new r4({ opacity: this.opacity, visible: this.visible }), this.addTransitionable(this._fadeTransition)) : this._fadeTransition && !t2 && (this.removeTransitionable(this._fadeTransition), this._fadeTransition = null);
  }
  get inFadeTransition() {
    return this._fadeTransition?.transitioning ?? false;
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(t2) {
    this._opacity !== t2 && (this._opacity = Math.min(1, Math.max(t2, 0)), this._fadeTransition && (this._fadeTransition.opacity = this._opacity), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t2) {
    if (this._stage === t2) return;
    const i = this._stage;
    this._stage = t2, t2 ? this._stage?.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : i?.trashDisplayObject(this);
  }
  get transforms() {
    return null == this._transforms && (this._transforms = this._createTransforms()), this._transforms;
  }
  get transitioning() {
    return this.isTransitioning();
  }
  get usedMemory() {
    return 0;
  }
  get visible() {
    return this._visible;
  }
  set visible(t2) {
    this._visible !== t2 && (this._visible = t2, this._fadeTransition && (this._fadeTransition.visible = this._visible), this.requestRender());
  }
  get hasLabels() {
    return false;
  }
  get hasHighlight() {
    return false;
  }
  get hasBlending() {
    return false;
  }
  addTransitionable(t2) {
    this._transitionables ??= [], this._transitionables.push(t2), this.requestRender();
  }
  removeTransitionable(i) {
    i.endTransition(), this._transitionables && L(this._transitionables, i), this.requestRender();
  }
  fadeIn() {
    this.fadeTransitionEnabled = true;
    const t2 = this._fadeTransition.fadeIn();
    return this.opacity = 1, this.requestRender(), t2;
  }
  fadeOut() {
    this.fadeTransitionEnabled = true;
    const t2 = this._fadeTransition.fadeOut();
    return this.opacity = 0, this.requestRender(), t2;
  }
  endTransitions() {
    if (this._transitionables) {
      for (const t2 of this._transitionables) t2.endTransition();
      this.requestRender();
    }
  }
  beforeRender(t2) {
    this.transitionStep(t2.deltaTime, t2.state.scale), this.setTransform(t2.state);
  }
  afterRender(t2) {
    this.transitioning && this.requestRender();
  }
  remove() {
    this.parent?.removeChild(this);
  }
  setTransform(t2) {
  }
  processRender(t2) {
    this.stage && (this._fadeTransition?.computedVisible ?? this.visible) && this.doRender(t2);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this.endTransitions(), this.onDetach(), this.emit("detach");
  }
  isTransitioning() {
    return this._transitionables?.some((t2) => t2.transitioning) ?? false;
  }
  transitionStep(t2, i) {
    if (this._transitionables) for (const s3 of this._transitionables) s3.transitionStep(t2, i);
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t2) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
};

// node_modules/@arcgis/core/views/2d/engine/Container.js
var n = class extends e2 {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = false, this._children = [], this._childrenObservable = new s(), this._effectView = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e3) {
    this._blendMode = e3, this.requestRender();
  }
  get children() {
    return a(this._childrenObservable), this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(e3) {
    this._clips = e3, this.children.forEach((t2) => t2.clips = e3);
  }
  get computedEffects() {
    return this._effectView?.effects ?? null;
  }
  get effect() {
    return this._effectView?.effect ?? "";
  }
  set effect(e3) {
    (this._effectView || e3) && (this._effectView || (this._effectView = new h(), this.addTransitionable(this._effectView)), this._effectView.effect = e3, this.requestRender());
  }
  get highlightGradient() {
    return this._highlightGradient;
  }
  set highlightGradient(e3) {
    this._highlightGradient = e3, this.requestRender();
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((e3) => e3.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((e3) => e3.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((e3) => "blendMode" in e3 && e3.blendMode && "normal" !== e3.blendMode);
  }
  get isReady() {
    return this.children.every((e3) => e3.isReady);
  }
  get sortFunction() {
    return this._sortFunction;
  }
  set sortFunction(e3) {
    this._sortFunction = e3, e3 && (this._needsSort = true);
  }
  get usedMemory() {
    return this.children.reduce((e3, t2) => e3 + t2.usedMemory, 0);
  }
  doRender(e3) {
    const t2 = this.createRenderParams(e3), { painter: i } = t2;
    i.beforeRenderLayer(t2, this._clips?.length ? 255 : 0, this.computedOpacity), this.renderChildren(t2), i.afterRenderLayer(t2, this.computedOpacity);
  }
  addChild(e3) {
    return this.addChildAt(e3, this.children.length);
  }
  addChildAt(e3, t2 = this.children.length) {
    if (!e3) return e3;
    if (this.contains(e3)) return e3;
    this._needsSort = true;
    const i = e3.parent;
    return i && i !== this && i.removeChild(e3), t2 >= this.children.length ? this.children.push(e3) : this.children.splice(t2, 0, e3), this._childrenSet.add(e3), e3.parent = this, e3.stage = this.stage, this !== this.stage && (e3.clips = this.clips), this.requestRender(), this._childrenObservable.notify(), e3;
  }
  contains(t2) {
    return a(this._childrenObservable), this._childrenSet.has(t2);
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = true;
    for (const e3 of this.children) this !== this.stage && (e3.clips = []), e3.stage = null, e3.parent = null;
    this.children.length = 0, this._childrenObservable.notify();
  }
  removeChild(e3) {
    return this.contains(e3) ? this.removeChildAt(this.children.indexOf(e3)) : e3;
  }
  removeChildAt(e3) {
    if (e3 < 0 || e3 >= this.children.length) return null;
    this._needsSort = true;
    const t2 = this.children.splice(e3, 1)[0];
    return this._childrenSet.delete(t2), this !== this.stage && (t2.clips = []), t2.stage = null, t2.parent = null, this._childrenObservable.notify(), t2;
  }
  beforeRender(e3) {
    super.beforeRender(e3), this.sortFunction && this._needsSort && (this.children.sort(this.sortFunction), this._needsSort = false, this._childrenObservable.notify());
    for (const t2 of this.children) t2.beforeRender(e3);
  }
  afterRender(e3) {
    super.afterRender(e3);
    for (const t2 of this.children) t2.afterRender(e3);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
  onAttach() {
    super.onAttach();
    const e3 = this.stage;
    for (const t2 of this.children) t2.stage = e3;
  }
  onDetach() {
    super.onDetach();
    for (const e3 of this.children) e3.stage = null;
  }
  renderChildren(e3) {
    for (const t2 of this.children) t2.processRender(e3);
  }
  createRenderParams(e3) {
    return __spreadProps(__spreadValues({}, e3), { requireFBO: this.requiresDedicatedFBO, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: e3.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition, highlightGradient: this._highlightGradient || e3.highlightGradient });
  }
  isTransitioning() {
    return super.isTransitioning() || this.children.some((e3) => e3.transitioning);
  }
};

export {
  e2 as e,
  n,
  o2 as o,
  s2 as s
};
//# sourceMappingURL=chunk-2PUTFA4S.js.map
