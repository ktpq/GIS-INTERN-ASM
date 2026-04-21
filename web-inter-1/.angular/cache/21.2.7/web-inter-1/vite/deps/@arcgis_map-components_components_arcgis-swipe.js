import {
  s
} from "./chunk-3QRB5MAM.js";
import {
  e,
  s as s2,
  v
} from "./chunk-CJQDSLJX.js";
import {
  l
} from "./chunk-N4A2F7D5.js";
import "./chunk-6TJKPIZ2.js";
import {
  usePropertyChange
} from "./chunk-PQURDETH.js";
import {
  classes
} from "./chunk-6YAOADHH.js";
import {
  LitElement,
  createEvent,
  createRef,
  css,
  html,
  nothing2 as nothing,
  ref,
  safeClassMap,
  safeStyleMap
} from "./chunk-SIEFVWAL.js";
import {
  h,
  l as l2
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  m
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Swipe/SwipeViewModel.js
function p(i, t) {
  const e2 = 10 ** t;
  return Math.round(i * e2) / e2;
}
var c2 = { left: 0, right: 0, top: 0, bottom: 0 };
var g = class extends b {
  constructor(i) {
    super(i), this._leadingClips = /* @__PURE__ */ new Map(), this._trailingClips = /* @__PURE__ */ new Map(), this.direction = "horizontal", this.max = 100, this.min = 0, this.precision = 4, this.step = 0.5, this.stepMultiplier = 10, this.view = null, this.leadingLayers = new q(), this.trailingLayers = new q();
  }
  initialize() {
    this.addHandles([l2(() => [this.view, this.view?.ready, this.position, this.direction], () => this._clipLayers(), h), l2(() => this.leadingLayers.toArray(), () => this._clipLeadingLayers(), h), l2(() => this.trailingLayers.toArray(), () => this._clipTrailingLayers(), h)]);
  }
  destroy() {
    this._removeExistingClips();
  }
  get leadingLayers() {
    return this._get("leadingLayers");
  }
  set leadingLayers(i) {
    this._set("leadingLayers", m(q, i));
  }
  get position() {
    return 25;
  }
  set position(i) {
    const { precision: t, min: e2, max: r2 } = this;
    this._set("position", p(Math.max(Math.min(i, r2), e2), t));
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  get trailingLayers() {
    return this._get("trailingLayers");
  }
  set trailingLayers(i) {
    this._set("trailingLayers", m(q, i));
  }
  _clipLayers() {
    this._clipLeadingLayers(), this._clipTrailingLayers();
  }
  _clipLeadingLayers() {
    this._removeClips("leading");
    const { leadingLayers: i } = this;
    i.forEach((i2) => this._clipLayer({ layer: i2, type: "leading" }));
  }
  _clipTrailingLayers() {
    this._removeClips("trailing");
    const { trailingLayers: i } = this;
    i.forEach((i2) => this._clipLayer({ layer: i2, type: "trailing" }));
  }
  async _getLayerView(i) {
    const { view: t } = this;
    if (!i || !t) return null;
    const e2 = await t.whenLayerView(i);
    return "clips" in e2 ? e2 : null;
  }
  _getVerticalClipRect(i) {
    const { position: t } = this;
    return "leading" === i ? new s(__spreadProps(__spreadValues({}, c2), { bottom: 100 - t + "%" })) : "trailing" === i ? new s(__spreadProps(__spreadValues({}, c2), { top: `${t}%` })) : null;
  }
  _getHorizontalClipRect(i) {
    const { position: t } = this;
    return "leading" === i ? new s(__spreadProps(__spreadValues({}, c2), { right: 100 - t + "%" })) : "trailing" === i ? new s(__spreadProps(__spreadValues({}, c2), { left: `${t}%` })) : null;
  }
  _getClipRect(i) {
    const { direction: t } = this;
    return "vertical" === t ? this._getVerticalClipRect(i) : "horizontal" === t ? this._getHorizontalClipRect(i) : null;
  }
  async _clipLayer(i) {
    const { _leadingClips: t, _trailingClips: e2 } = this, { layer: r2, type: s3 } = i, l3 = "trailing" === s3 ? e2 : "leading" === s3 ? t : null, n = await this._getLayerView(r2);
    if (!(n && "clips" in n && l3 && n.hasOwnProperty("clips"))) return;
    const o = l3.get(n);
    o && n.clips.remove(o);
    const a2 = this._getClipRect(s3);
    a2 && (l3.set(n, a2), n.clips.add(a2));
  }
  _removeClips(i) {
    const { _leadingClips: t, _trailingClips: e2 } = this, r2 = "trailing" === i ? e2 : "leading" === i ? t : null;
    r2 && (r2.forEach((i2, t2) => {
      t2 && t2.hasOwnProperty("clips") && t2.clips.remove(i2);
    }), r2.clear());
  }
  _removeExistingClips() {
    this._removeClips("leading"), this._removeClips("trailing");
  }
};
__decorate([a()], g.prototype, "direction", void 0), __decorate([a({ nonNullable: true })], g.prototype, "leadingLayers", null), __decorate([a({ readOnly: true })], g.prototype, "max", void 0), __decorate([a({ readOnly: true })], g.prototype, "min", void 0), __decorate([a()], g.prototype, "position", null), __decorate([a()], g.prototype, "precision", void 0), __decorate([a({ readOnly: true })], g.prototype, "state", null), __decorate([a()], g.prototype, "step", void 0), __decorate([a()], g.prototype, "stepMultiplier", void 0), __decorate([a({ nonNullable: true })], g.prototype, "trailingLayers", null), __decorate([a()], g.prototype, "view", void 0), g = __decorate([c("esri.widgets.Swipe.SwipeViewModel")], g);
var h2 = g;

// node_modules/@arcgis/map-components/dist/chunks/legacyIcon.js
var r = {
  dragHorizontal: "esri-icon-drag-horizontal",
  dragVertical: "esri-icon-drag-vertical"
};

// node_modules/@arcgis/map-components/dist/components/arcgis-swipe/customElement.js
var S = css`:host{position:absolute;margin:0;background:transparent!important;padding:0;width:100%;height:100%;overflow:hidden;user-select:none;--arcgis-internal-swipe-handle-color-background: var(--calcite-color-background);--arcgis-internal-swipe-divider-color-background: var(--calcite-color-background)}.root{width:100%;height:100%;overflow:hidden;user-select:none}.root,.arcgis-ui .root{pointer-events:none!important}.container{position:absolute;z-index:1;margin:0;outline:0;border:0;padding:0;overflow:hidden;pointer-events:auto;touch-action:none;outline-color:transparent}.horizontal .container{margin-left:calc(var(--calcite-spacing-xxxl) / 2 * -1);cursor:col-resize;height:100%}.vertical .container{margin-top:calc(var(--calcite-spacing-xxxl) / 2 * -1);cursor:row-resize;width:100%}.disabled .container{cursor:default;pointer-events:none}.divider{position:absolute;background-color:var(--arcgis-internal-swipe-divider-color-background)}.horizontal .divider{top:0;left:calc(var(--calcite-spacing-xxxl) / 2);margin-left:calc(var(--calcite-border-width-lg) * .5 * -1);border-right:var(--calcite-border-width-sm) solid var(--calcite-color-border-1);border-left:var(--calcite-border-width-sm) solid var(--calcite-color-border-1);width:var(--calcite-border-width-lg);height:100%}.vertical .divider{top:calc(var(--calcite-spacing-xxxl) / 2);left:0;margin-top:calc(var(--calcite-border-width-lg) * .5 * -1);border-top:var(--calcite-border-width-sm) solid var(--calcite-color-border-1);border-bottom:var(--calcite-border-width-sm) solid var(--calcite-color-border-1);width:100%;height:var(--calcite-border-width-lg)}.handle{display:flex;position:relative;align-items:center;justify-content:center;border:var(--calcite-border-width-sm) solid var(--calcite-color-border-1);border-radius:var(--calcite-corner-radius-round);background-color:var(--arcgis-internal-swipe-handle-color-background);width:var(--calcite-spacing-xxxl);height:var(--calcite-spacing-xxxl);color:var(--calcite-color-text-3)}.handle-hidden{visibility:hidden}.vertical .handle{rotate:90deg}.handle-icon{position:relative;z-index:2}.handle-icon:before{content:"|||";color:inherit}.horizontal .handle{top:calc(50% - calc(var(--calcite-spacing-xxxl) / 2))}.vertical .handle{left:calc(50% - calc(var(--calcite-spacing-xxxl) / 2))}.container:focus .handle,.container:focus .divider{outline:inset 2px var(--calcite-color-focus, var(--calcite-color-focus, var(--calcite-color-brand)))}.container:focus .handle{outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}`;
var k = v(h2);
var z = class extends LitElement {
  constructor() {
    super(...arguments), this._container = null, this._containerRef = createRef(), this._swiping = false, this._positionChanged = false, this.messages = s2({}), this._pointerOffset = 0, this.viewModel = k(this), this._onContainerPointerDown = (i) => {
      i.preventDefault();
      const { _container: e2 } = this;
      e2 && document.activeElement !== this.el && e2.focus(), this._swiping = true, this._calculatePointerOffset(i);
    }, this.view = this.viewModel.view, this.autoDestroyDisabled = false, this.direction = this.viewModel.direction, this.disabled = false, this.endLayers = this.viewModel.trailingLayers, this.hideDivider = false, this.hideHandle = false, this.icon = "compare", this.label = this.messages.componentLabel, this.position = this.viewModel.position, this.startLayers = this.viewModel.leadingLayers, this.state = this.viewModel.state, this.arcgisPropertyChange = usePropertyChange()("state"), this.arcgisReady = createEvent(), this.arcgisSwipeChange = createEvent(), this.arcgisSwipeInput = createEvent();
  }
  static {
    this.properties = { view: 0, autoDestroyDisabled: 5, direction: 3, disabled: 7, endLayers: 0, hideDivider: 7, hideHandle: 7, icon: 1, label: 1, leadingLayers: 0, messageOverrides: 0, position: 9, startLayers: 0, swipePosition: 9, referenceElement: 1, state: 32, trailingLayers: 0 };
  }
  static {
    this.styles = S;
  }
  get leadingLayers() {
    return this.startLayers;
  }
  set leadingLayers(i) {
    this.startLayers = i;
  }
  get swipePosition() {
    return this.position;
  }
  set swipePosition(i) {
    this.position = i;
  }
  get trailingLayers() {
    return this.endLayers;
  }
  set trailingLayers(i) {
    this.endLayers = i;
  }
  async destroy() {
    await this.manager.destroy();
  }
  loaded() {
    this.listenOn(document, "pointermove", this._onContainerPointerMove), this.listenOn(document, "pointerup", this._onContainerPointerUp);
  }
  _calculatePointerOffset(i) {
    const { direction: e2 } = this, t = this._containerRef.value, r2 = (e2 === "vertical" ? t.clientHeight : t.clientWidth) / 2, o = t.getBoundingClientRect(), n = i.clientX - o.left, c3 = i.clientY - o.top;
    this._pointerOffset = e2 === "vertical" ? c3 - r2 : n - r2;
  }
  _onContainerPointerUp(i) {
    this._swiping && (i.preventDefault(), this._positionChanged && (this.arcgisSwipeChange.emit(), this._positionChanged = false), this._swiping = false);
  }
  _onContainerPointerMove(i) {
    if (!this._swiping)
      return;
    i.preventDefault();
    const { _pointerOffset: e2, el: t, direction: r2 } = this, { clientX: o, clientY: n } = i, { top: c3, left: s3, width: a2, height: l3 } = t.getBoundingClientRect(), f = r2 === "vertical" ? l3 : a2, h3 = (r2 === "vertical" ? n - c3 - e2 : o - s3 - e2) / f * 100;
    this.position !== h3 && (this.position = h3, this._positionChanged = true, this.arcgisSwipeInput.emit());
  }
  _getKeyPosition(i) {
    const { key: e2 } = i, { position: t } = this, { max: r2, min: o, step: n, stepMultiplier: c3, direction: s3 } = this.viewModel, a2 = n * c3;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(e2) && (i.preventDefault(), i.stopPropagation()), s3 === "vertical" ? e2 === "ArrowDown" || e2 === "ArrowRight" : e2 === "ArrowUp" || e2 === "ArrowRight") {
      const p2 = i.shiftKey ? a2 : n;
      return t + p2;
    }
    if (s3 === "vertical" ? e2 === "ArrowUp" || e2 === "ArrowLeft" : e2 === "ArrowDown" || e2 === "ArrowLeft") {
      const p2 = i.shiftKey ? a2 : n;
      return t - p2;
    }
    return e2 === "Home" ? o : e2 === "End" ? r2 : (s3 === "vertical" ? e2 === "PageDown" : e2 === "PageUp") ? t + a2 : (s3 === "vertical" ? e2 === "PageUp" : e2 === "PageDown") ? t - a2 : null;
  }
  _onContainerKeyDown(i) {
    const e2 = this._getKeyPosition(i);
    typeof e2 == "number" && this.position !== e2 && (this.position = e2, this.arcgisSwipeInput.emit(), this.arcgisSwipeChange.emit());
  }
  render() {
    const { state: i, direction: e2 } = this.viewModel, t = i === "disabled" || this.disabled, r2 = {
      [e.disabled]: t,
      disabled: t,
      vertical: e2 === "vertical",
      horizontal: e2 === "horizontal"
    };
    return html`<div class=${safeClassMap(classes("root", e.widget, r2))}>${i === "disabled" ? null : this._renderContainer()}</div>`;
  }
  _renderHandle() {
    const { direction: i } = this.viewModel, { hideHandle: e2 } = this, t = {
      [r.dragHorizontal]: i === "vertical",
      [r.dragVertical]: i === "horizontal"
    }, r2 = classes("handle", !!e2 && "handle-hidden");
    return html`<div class=${safeClassMap(r2)} role=presentation><span aria-hidden=true class=${safeClassMap(classes("handle-icon", t))}></span></div>`;
  }
  _renderDivider() {
    return this.hideDivider ? null : html`<div class="divider" role=presentation></div>`;
  }
  _renderContent() {
    return [this._renderDivider(), this._renderHandle()];
  }
  _renderContainer() {
    const { disabled: i, viewModel: e2 } = this, { max: t, min: r2, direction: o, position: n } = e2, c3 = this.label ?? this.messages.dragLabel ?? "", s3 = `${n}%`, a2 = {
      top: o === "vertical" ? s3 : void 0,
      left: o === "vertical" ? void 0 : s3
    }, l3 = this._renderContent();
    return i ? html`<div class="container" role=presentation style=${safeStyleMap(a2)}>${l3}</div>` : html`<div @pointerdown=${this._onContainerPointerDown} .ariaLabel=${c3} .ariaOrientation=${o} .ariaValueMax=${`${t}`} .ariaValueMin=${`${r2}`} .ariaValueNow=${`${n}`} .ariaValueText=${s3} class="container" @keydown=${this._onContainerKeyDown} role=slider style=${safeStyleMap(a2)} tabindex=0 title=${c3 ?? nothing} touch-action=none ${ref(this._containerRef)}>${l3}</div>`;
  }
};
l("arcgis-swipe", z);
export {
  z as ArcgisSwipe
};
//# sourceMappingURL=@arcgis_map-components_components_arcgis-swipe.js.map
