import {
  h
} from "./chunk-7HEBNF6D.js";
import {
  r as r3
} from "./chunk-UYNYIOPC.js";
import {
  o
} from "./chunk-QOY7P5Z5.js";
import {
  t as t2
} from "./chunk-7U4LQW5Y.js";
import {
  e as e2
} from "./chunk-2DDOBC4Y.js";
import {
  R,
  _
} from "./chunk-AFCXMSTT.js";
import {
  g
} from "./chunk-WYBA72UW.js";
import {
  e,
  t
} from "./chunk-IRE2Q6SD.js";
import {
  r as r2
} from "./chunk-LHMCLOXR.js";
import {
  s
} from "./chunk-K3RYWESQ.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3,
  c
} from "./chunk-GUGGSMY4.js";
import {
  a as a2
} from "./chunk-E7T52Q27.js";
import {
  $
} from "./chunk-2DNVIDFH.js";
import {
  a,
  has,
  n2 as n
} from "./chunk-6SPQI6I6.js";
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

// node_modules/@arcgis/core/layers/effects/EffectView.js
var l = -1;
var h2 = class extends b {
  constructor(t3) {
    super(t3), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = has("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t3) {
    if (this._get("effect") !== (t3 = t3 || "")) {
      this._set("effect", t3);
      try {
        this._transitionTo(a4(t3));
      } catch (e4) {
        this._transitionTo([]), n.getLogger(this).warn("Invalid Effect", { effect: t3, error: e4 });
      }
    }
  }
  get final() {
    return this._final;
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t3) {
    this._updateForScale(t3);
  }
  get transitioning() {
    return null !== this._to;
  }
  canTransitionTo(t3) {
    try {
      return this.scale > 0 && u(this._current, a4(t3), this.scale);
    } catch {
      return false;
    }
  }
  transitionStep(t3, e4) {
    this._applyTimeTransition(t3), this._updateForScale(e4);
  }
  endTransition() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t3) {
    this.scale > 0 && u(this._current, t3, this.scale) ? (this._final = t3, this._to = a(t3), _2(this._current, this._to, this.scale), this._from = a(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t3), this._set("effects", this._current[0] ? a(this._current[0].effects) : []);
  }
  _applyTimeTransition(t3) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t3;
    const e4 = Math.min(1, this._time / this.duration);
    for (let s3 = 0; s3 < this._current.length; s3++) {
      const t4 = this._current[s3], i = this._from[s3], r5 = this._to[s3];
      t4.scale = p(i.scale, r5.scale, e4);
      for (let s4 = 0; s4 < t4.effects.length; s4++) {
        const n3 = t4.effects[s4], c2 = i.effects[s4], f = r5.effects[s4];
        n3.interpolate(c2, f, e4);
      }
    }
    1 === e4 && (this._current = this._final, this._set("effects", this._current[0] ? a(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t3) {
    if (this._set("scale", t3), 0 === this._current.length) return;
    const e4 = this._current, s3 = this._current.length - 1;
    let i, r5, n3 = 1;
    if (1 === e4.length || t3 >= e4[0].scale) r5 = i = e4[0].effects;
    else if (t3 <= e4[s3].scale) r5 = i = e4[s3].effects;
    else for (let c2 = 0; c2 < s3; c2++) {
      const s4 = e4[c2], f = e4[c2 + 1];
      if (s4.scale >= t3 && f.scale <= t3) {
        n3 = (t3 - s4.scale) / (f.scale - s4.scale), i = s4.effects, r5 = f.effects;
        break;
      }
    }
    for (let c2 = 0; c2 < this.effects.length; c2++) {
      this.effects[c2].interpolate(i[c2], r5[c2], n3);
    }
  }
};
function a4(t3) {
  const e4 = g(t3) || [];
  return m(e4) ? [{ scale: l, effects: e4 }] : e4;
}
function u(t3, e4, s3) {
  if (!t3[0]?.effects || !e4[0]?.effects) return true;
  return !((t3[0]?.scale === l || e4[0]?.scale === l) && (t3.length > 1 || e4.length > 1) && s3 <= 0) && t(t3[0].effects, e4[0].effects);
}
function _2(t3, e4, s3) {
  const i = t3.length > e4.length ? t3 : e4, r5 = t3.length > e4.length ? e4 : t3, n3 = r5[r5.length - 1], c2 = n3?.scale ?? s3, f = n3?.effects ?? [];
  for (let o4 = r5.length; o4 < i.length; o4++) r5.push({ scale: c2, effects: [...f] });
  for (let h3 = 0; h3 < i.length; h3++) r5[h3].scale = r5[h3].scale === l ? s3 : r5[h3].scale, i[h3].scale = i[h3].scale === l ? s3 : i[h3].scale, e(r5[h3].effects, i[h3].effects);
}
function p(t3, e4, s3) {
  return t3 + (e4 - t3) * s3;
}
function m(t3) {
  const e4 = t3[0];
  return !!e4 && "type" in e4;
}
__decorate([a3()], h2.prototype, "_to", void 0), __decorate([a3()], h2.prototype, "duration", void 0), __decorate([a3({ value: "" })], h2.prototype, "effect", null), __decorate([a3({ readOnly: true })], h2.prototype, "effects", void 0), __decorate([a3({ readOnly: true })], h2.prototype, "final", null), __decorate([a3({ readOnly: true })], h2.prototype, "hasEffects", null), __decorate([a3({ value: 0 })], h2.prototype, "scale", null), __decorate([a3({ readOnly: true })], h2.prototype, "transitioning", null), h2 = __decorate([c("esri.layers.effects.EffectView")], h2);

// node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js
var r4 = class extends b {
  constructor(t3) {
    super(t3), this.computedOpacity = 1, this.computedVisible = true, this.opacity = 1, this.visible = true, this._fadeOutResolver = null, this._fadeInResolver = null;
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
  transitionStep(t3, e4) {
    const i = has("mapview-transitions-duration"), s3 = i ? 1 / i : 0;
    if (0 === s3) this.computedOpacity = this.opacity, this.computedVisible = this.visible;
    else {
      const e5 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, i2 = this.computedOpacity;
      if (i2 === e5) this.computedVisible = this.visible;
      else {
        const o4 = t3 * s3;
        this.computedOpacity = i2 > e5 ? Math.max(e5, i2 - o4) : Math.min(e5, i2 + o4), this.computedVisible = this.computedOpacity > 0;
      }
    }
    this.transitioning || (this._fadeInResolver?.(), this._fadeOutResolver?.(), this._fadeOutResolver = this._fadeInResolver = null);
  }
};
__decorate([a3()], r4.prototype, "computedOpacity", void 0), __decorate([a3()], r4.prototype, "computedVisible", void 0), __decorate([a3()], r4.prototype, "opacity", void 0), __decorate([a3()], r4.prototype, "visible", void 0), __decorate([a3()], r4.prototype, "transitioning", null), __decorate([a3()], r4.prototype, "_fadeOutResolver", void 0), __decorate([a3()], r4.prototype, "_fadeInResolver", void 0), r4 = __decorate([c("esri.views.2d.engine.transitions.FadeTransition")], r4);

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/definitions.js
var T = { [R.BYTE]: 1, [R.UNSIGNED_BYTE]: 1, [R.SHORT]: 2, [R.UNSIGNED_SHORT]: 2, [R.HALF_FLOAT]: 2, [R.INT]: 4, [R.UNSIGNED_INT]: 4, [R.FLOAT]: 4 };

// node_modules/@arcgis/core/views/2d/engine/webgl/meshing/Mesh.js
var o2 = class {
  constructor(r5, t3) {
    this._boundPart = null, this.vertexBuffers = /* @__PURE__ */ new Map(), this.indexBuffers = /* @__PURE__ */ new Map(), this.groups = [];
    for (const e4 in t3.vertex) {
      const { data: s3, layout: o4 } = t3.vertex[e4], n3 = new r3(r5, o4, s3);
      this.vertexBuffers.set(e4, n3);
    }
    for (const s3 in t3.index) {
      const { data: i } = t3.index[s3], o4 = o.createIndex(r5, 35044, i);
      this.indexBuffers.set(s3, o4);
    }
    for (const e4 of t3.groups) this.groups.push(__spreadProps(__spreadValues({}, e4), { vertexArrays: /* @__PURE__ */ new Map() }));
    this.parts = t3.parts;
  }
  bind(e4, s3, i) {
    if (null == e4.gl) return void (this._boundPart = null);
    this._boundPart = i;
    const { group: o4 } = this.parts[this._boundPart], n3 = this.groups[o4];
    if (!n3) throw new Error(`Missing group ${o4}.`);
    let f = n3.vertexArrays.get(s3.stringHash);
    if (!f) {
      const { locations: i2, stringHash: o5 } = s3, a5 = r(new Set(i2.keys())), u2 = n3.index ? this.indexBuffers.get(n3.index) : null, h3 = /* @__PURE__ */ new Map();
      for (const [r5, e5] of this.vertexBuffers) {
        e5.layout.filter((r6) => a5.has(r6.name)).length > 0 && h3.set(r5, e5);
      }
      f = new h(e4, h3, u2, void 0, i2), n3.vertexArrays.set(o5, f);
    }
    e4.bindVAO(f);
  }
  draw(r5) {
    if (null == this._boundPart) throw new Error("Mesh.bind() has not been called.");
    const { start: e4, count: t3 } = this.parts[this._boundPart], { group: i } = this.parts[this._boundPart], { primitive: o4, index: n3 } = this.groups[i];
    if (n3) {
      const i2 = this.indexBuffers.get(n3);
      if (!i2) throw new Error(`Missing index buffer "${n3}".`);
      const { indexType: f } = i2;
      if (!f) throw new Error("Buffer type error.");
      r5.drawElements(o4, t3, f, e4 * T[f]);
    } else r5.drawArrays(o4, e4, t3);
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
  static create(e4, r5) {
    const i = [];
    let { stride: o4 } = r5;
    if (null == o4) {
      o4 = 0;
      for (const [e5, { count: i2, type: n3, offset: s3 }] of Object.entries(r5.layout)) {
        if (null != s3) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        o4 += i2 * T[n3];
      }
    }
    let a5 = 0;
    for (const [s3, { count: d, offset: f, type: m2, normalized: x }] of Object.entries(r5.layout)) {
      null != f && (a5 = f);
      const e5 = new t2(s3, d, m2, a5, o4, null != x && x, 0);
      i.push(e5), a5 += d * T[m2];
    }
    const l2 = { primitive: r5.primitive };
    null != r5.index && (l2.index = "indexData");
    let { count: u2 } = r5;
    if (null == u2 && (u2 = r5.index ? r5.index.length : r5.vertex.byteLength / o4, Math.floor(u2) !== u2)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${o4}.`);
    const c2 = { start: 0, count: u2, group: 0, primitive: r5.primitive }, p2 = { vertex: { vertexData: { data: r5.vertex, layout: i } }, parts: [c2], groups: [l2] };
    return null != r5.index && (p2.index = { indexData: { data: r5.index } }), new _s(e4, p2, r5.layout);
  }
  static createForShader(t3, e4) {
    return this.create(t3, e4);
  }
  static fromVertexStream(t3, e4) {
    return _s.create(t3, { primitive: _.TRIANGLE_STRIP, vertex: new Uint16Array(e4), layout: o3 });
  }
  constructor(t3, e4, r5) {
    super(t3, e4), this._spec = r5;
  }
  bind(t3, e4, r5 = 0) {
    super.bind(t3, e4, r5);
  }
};

// node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var e3 = class extends r2 {
  constructor() {
    super(...arguments), this._transitionables = null, this._clips = [], this._fadeTransition = null, this._isReady = false, this._opacity = 1, this.parent = null, this._stage = null, this._visible = true;
  }
  get computedOpacity() {
    return this._fadeTransition?.computedOpacity ?? this.opacity;
  }
  get clips() {
    return this._clips;
  }
  set clips(t3) {
    this._clips = t3, this.requestRender();
  }
  get effectiveVisible() {
    return this.visible && true === this.parent?.effectiveVisible;
  }
  get fadeTransitionEnabled() {
    return null !== this._fadeTransition;
  }
  set fadeTransitionEnabled(t3) {
    !this._fadeTransition && t3 ? (this._fadeTransition = new r4({ opacity: this.opacity, visible: this.visible }), this.addTransitionable(this._fadeTransition)) : this._fadeTransition && !t3 && (this.removeTransitionable(this._fadeTransition), this._fadeTransition = null);
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
  set opacity(t3) {
    this._opacity !== t3 && (this._opacity = Math.min(1, Math.max(t3, 0)), this._fadeTransition && (this._fadeTransition.opacity = this._opacity), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t3) {
    if (this._stage === t3) return;
    const i = this._stage;
    this._stage = t3, t3 ? this._stage?.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : i?.trashDisplayObject(this);
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
  set visible(t3) {
    this._visible !== t3 && (this._visible = t3, this._fadeTransition && (this._fadeTransition.visible = this._visible), this.requestRender());
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
  addTransitionable(t3) {
    this._transitionables ??= [], this._transitionables.push(t3), this.requestRender();
  }
  removeTransitionable(i) {
    i.endTransition(), this._transitionables && L(this._transitionables, i), this.requestRender();
  }
  fadeIn() {
    this.fadeTransitionEnabled = true;
    const t3 = this._fadeTransition.fadeIn();
    return this.opacity = 1, this.requestRender(), t3;
  }
  fadeOut() {
    this.fadeTransitionEnabled = true;
    const t3 = this._fadeTransition.fadeOut();
    return this.opacity = 0, this.requestRender(), t3;
  }
  endTransitions() {
    if (this._transitionables) {
      for (const t3 of this._transitionables) t3.endTransition();
      this.requestRender();
    }
  }
  beforeRender(t3) {
    this.transitionStep(t3.deltaTime, t3.state.scale), this.setTransform(t3.state);
  }
  afterRender(t3) {
    this.transitioning && this.requestRender();
  }
  remove() {
    this.parent?.removeChild(this);
  }
  setTransform(t3) {
  }
  processRender(t3) {
    this.stage && (this._fadeTransition?.computedVisible ?? this.visible) && this.doRender(t3);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this.endTransitions(), this.onDetach(), this.emit("detach");
  }
  isTransitioning() {
    return this._transitionables?.some((t3) => t3.transitioning) ?? false;
  }
  transitionStep(t3, i) {
    if (this._transitionables) for (const s3 of this._transitionables) s3.transitionStep(t3, i);
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t3) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
};

// node_modules/@arcgis/core/views/2d/engine/Container.js
var n2 = class extends e3 {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = false, this._children = [], this._childrenObservable = new s(), this._effectView = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e4) {
    this._blendMode = e4, this.requestRender();
  }
  get children() {
    return a2(this._childrenObservable), this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(e4) {
    this._clips = e4, this.children.forEach((t3) => t3.clips = e4);
  }
  get computedEffects() {
    return this._effectView?.effects ?? null;
  }
  get effect() {
    return this._effectView?.effect ?? "";
  }
  set effect(e4) {
    (this._effectView || e4) && (this._effectView || (this._effectView = new h2(), this.addTransitionable(this._effectView)), this._effectView.effect = e4, this.requestRender());
  }
  get highlightGradient() {
    return this._highlightGradient;
  }
  set highlightGradient(e4) {
    this._highlightGradient = e4, this.requestRender();
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((e4) => e4.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((e4) => e4.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((e4) => "blendMode" in e4 && e4.blendMode && "normal" !== e4.blendMode);
  }
  get isReady() {
    return this.children.every((e4) => e4.isReady);
  }
  get sortFunction() {
    return this._sortFunction;
  }
  set sortFunction(e4) {
    this._sortFunction = e4, e4 && (this._needsSort = true);
  }
  get usedMemory() {
    return this.children.reduce((e4, t3) => e4 + t3.usedMemory, 0);
  }
  doRender(e4) {
    const t3 = this.createRenderParams(e4), { painter: i } = t3;
    i.beforeRenderLayer(t3, this._clips?.length ? 255 : 0, this.computedOpacity), this.renderChildren(t3), i.afterRenderLayer(t3, this.computedOpacity);
  }
  addChild(e4) {
    return this.addChildAt(e4, this.children.length);
  }
  addChildAt(e4, t3 = this.children.length) {
    if (!e4) return e4;
    if (this.contains(e4)) return e4;
    this._needsSort = true;
    const i = e4.parent;
    return i && i !== this && i.removeChild(e4), t3 >= this.children.length ? this.children.push(e4) : this.children.splice(t3, 0, e4), this._childrenSet.add(e4), e4.parent = this, e4.stage = this.stage, this !== this.stage && (e4.clips = this.clips), this.requestRender(), this._childrenObservable.notify(), e4;
  }
  contains(t3) {
    return a2(this._childrenObservable), this._childrenSet.has(t3);
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = true;
    for (const e4 of this.children) this !== this.stage && (e4.clips = []), e4.stage = null, e4.parent = null;
    this.children.length = 0, this._childrenObservable.notify();
  }
  removeChild(e4) {
    return this.contains(e4) ? this.removeChildAt(this.children.indexOf(e4)) : e4;
  }
  removeChildAt(e4) {
    if (e4 < 0 || e4 >= this.children.length) return null;
    this._needsSort = true;
    const t3 = this.children.splice(e4, 1)[0];
    return this._childrenSet.delete(t3), this !== this.stage && (t3.clips = []), t3.stage = null, t3.parent = null, this._childrenObservable.notify(), t3;
  }
  beforeRender(e4) {
    super.beforeRender(e4), this.sortFunction && this._needsSort && (this.children.sort(this.sortFunction), this._needsSort = false, this._childrenObservable.notify());
    for (const t3 of this.children) t3.beforeRender(e4);
  }
  afterRender(e4) {
    super.afterRender(e4);
    for (const t3 of this.children) t3.afterRender(e4);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e2() };
  }
  onAttach() {
    super.onAttach();
    const e4 = this.stage;
    for (const t3 of this.children) t3.stage = e4;
  }
  onDetach() {
    super.onDetach();
    for (const e4 of this.children) e4.stage = null;
  }
  renderChildren(e4) {
    for (const t3 of this.children) t3.processRender(e4);
  }
  createRenderParams(e4) {
    return __spreadProps(__spreadValues({}, e4), { requireFBO: this.requiresDedicatedFBO, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: e4.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition, highlightGradient: this._highlightGradient || e4.highlightGradient });
  }
  isTransitioning() {
    return super.isTransitioning() || this.children.some((e4) => e4.transitioning);
  }
};

export {
  h2 as h,
  e3 as e,
  n2 as n,
  o2 as o,
  s2 as s
};
//# sourceMappingURL=chunk-JPEJPHSH.js.map
