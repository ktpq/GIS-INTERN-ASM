import {
  a as a3,
  b as b3,
  d,
  p as p2,
  u as u2,
  x as x2
} from "./chunk-VFGNTT7R.js";
import {
  O
} from "./chunk-JD65H4ML.js";
import {
  b as b2,
  x
} from "./chunk-VMH5X3M4.js";
import {
  a as a2,
  p,
  r
} from "./chunk-U3CRXBTW.js";
import {
  o as o2
} from "./chunk-QLC3W7PG.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  m3 as m
} from "./chunk-LV7AMIAU.js";
import {
  h,
  l
} from "./chunk-55ZAYF5P.js";
import {
  o
} from "./chunk-XUZBRFKA.js";
import {
  u2 as u
} from "./chunk-POW25PFR.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/widgets/LayerList/ListItemPanel.js
var g = class extends o2(O) {
  constructor(e, t) {
    super(e, t), this._legend = null, this.content = null, this.flowEnabled = false, this.image = null, this.listItem = null, this.open = false, this.visible = true;
  }
  initialize() {
    this.addHandles([l(() => this._canCreateLegend, () => this._createLegend(), h), l(() => [this._legend, this._legendOptions], () => this._updateLegend(), h)]);
  }
  destroy() {
    this._legend = u(this._legend);
  }
  get _canCreateLegend() {
    const { content: e, listItem: t } = this;
    if (!t) return false;
    const n = "legend";
    return e === n || null != e && !!Array.isArray(e) && e.includes(n);
  }
  get _legendOptions() {
    const { listItem: e, _legendLayerInfo: t } = this, n = e?.view;
    return t && n ? { view: n, layerInfos: [t] } : {};
  }
  get _legendLayerInfo() {
    const e = this.listItem?.layer;
    if (!e || "subtype-sublayer" === e.type) return null;
    const t = x2(e) ? e : null, n = "map-layer" === t?.source?.type ? t.source : null, i = "layer" in e && e.layer, r2 = "";
    return n && i ? { layer: i, title: r2, sublayerIds: [n.mapLayerId] } : { layer: e, title: r2 };
  }
  get disabled() {
    const { listItem: e, _legend: t, content: n } = this;
    return !e || !(Array.isArray(n) && n.length > 1) && (!!t && (!t.activeLayerInfos?.length || !e.visibleAtCurrentScale || !e.visible));
  }
  set disabled(e) {
    this._overrideIfSome("disabled", e);
  }
  get icon() {
    const { image: e } = this, t = this._getFirstWidget();
    return this._get("icon") ?? (!e && t ? t.icon : null);
  }
  set icon(e) {
    this._overrideIfSome("icon", e);
  }
  get title() {
    return this._get("title") || (this._getFirstWidget()?.label ?? "");
  }
  set title(e) {
    this._override("title", e);
  }
  render() {
    return x("div", { class: "esri-list-item-panel" }, this._renderContents());
  }
  _renderContent(e) {
    const { _legend: t, disabled: n, open: i } = this;
    return e && !n && i ? "legend" === e && t ? x("div", { key: "legend-widget" }, t.render()) : "string" == typeof e ? x("div", { innerHTML: e, key: e }) : b2(e) ? x("div", { key: "content-widget" }, e.render()) : e instanceof HTMLElement ? x("div", { afterCreate: this._attachToNode, bind: e, key: "content-element" }) : null : null;
  }
  _renderContents() {
    const { content: e, open: t } = this;
    return t ? Array.isArray(e) ? e.map((e2) => this._renderContent(e2)) : this._renderContent(e) : null;
  }
  async _createLegend() {
    if (u(this._legend), this._legend = null, !this._canCreateLegend) return;
    const { default: e } = await import("./Legend-NTPAPTIQ.js"), t = new e(this._legendOptions);
    this._legend = t;
  }
  _attachToNode(e) {
    e.appendChild(this);
  }
  _updateLegend() {
    const e = this._legend;
    e && e.set(this._legendOptions);
  }
  _getWidget(e) {
    return "legend" === e ? this._legend : b2(e) ? e : null;
  }
  _getFirstWidget() {
    const { content: e } = this;
    return Array.isArray(e) ? e.map((e2) => this._getWidget(e2)).find((e2) => e2) : this._getWidget(e);
  }
};
__decorate([a()], g.prototype, "_legend", void 0), __decorate([a()], g.prototype, "_canCreateLegend", null), __decorate([a()], g.prototype, "_legendOptions", null), __decorate([a()], g.prototype, "_legendLayerInfo", null), __decorate([a()], g.prototype, "content", void 0), __decorate([a()], g.prototype, "disabled", null), __decorate([a()], g.prototype, "flowEnabled", void 0), __decorate([a()], g.prototype, "icon", null), __decorate([a()], g.prototype, "image", void 0), __decorate([a()], g.prototype, "listItem", void 0), __decorate([a()], g.prototype, "open", void 0), __decorate([a()], g.prototype, "title", null), __decorate([a()], g.prototype, "visible", void 0), g = __decorate([c("esri.widgets.LayerList.ListItemPanel")], g);
var c2 = g;

// node_modules/@arcgis/core/widgets/LayerList/ListItem.js
var C;
var w = q.ofType({ key: "type", defaultKeyValue: "button", base: p, typeMap: { button: a2, toggle: r } });
var _ = q.ofType(w);
var S = "layer";
var M = "child-list-mode";
var P = "hide";
var O2 = C = class extends o2(b) {
  constructor(e) {
    super(e), this.actionsSections = new _(), this.actionsOpen = false, this.checkPublishStatusEnabled = false, this.children = new (q.ofType(C))(), this.childrenSortable = true, this.hidden = false, this.layer = null, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.open = false, this.parent = null, this.view = null;
  }
  initialize() {
    if (this.addHandles([l(() => [this.layer, this.layer?.listMode, this.listModeDisabled], () => this._watchLayerProperties(this.layer), h), l(() => this.checkPublishStatusEnabled, (e) => this._updateChildrenPublishing(e), h), l(() => this.view, (e) => this._updateChildrenView(e), h), l(() => this.panel, (e) => this._setListItemOnPanel(e), h)]), "function" == typeof this.listItemCreatedFunction) {
      const e = { item: this };
      this.listItemCreatedFunction.call(null, e);
    }
  }
  destroy() {
    this.panel?.destroy(), this.children.destroyAll(), this.view = null;
  }
  get connectionStatus() {
    const { layerView: e, publishing: t } = this;
    if (!t && e && "connectionStatus" in e) return e.connectionStatus;
  }
  get error() {
    return this.layer?.loadError;
  }
  get incompatible() {
    const { layerView: e } = this;
    return !(!e || !("spatialReferenceSupported" in e)) && !e.spatialReferenceSupported;
  }
  get layerView() {
    const { layer: e, view: t } = this;
    if (!e || !t || "sublayer" === e.type) return null;
    const i = "subtype-sublayer" === e.type ? e.parent : e;
    return t.allLayerViews.find((e2) => e2.layer === i) ?? null;
  }
  set panel(e) {
    const t = this._get("panel");
    e !== t && e && t?.destroy(), this._set("panel", e);
  }
  castPanel(e) {
    return this.panel?.open && !e.hasOwnProperty("open") && (e.open = true), e ? new c2(e) : null;
  }
  get sortable() {
    return "knowledge-graph-sublayer" !== this.layer?.type && this._get("sortable");
  }
  set sortable(e) {
    this._set("sortable", e);
  }
  get title() {
    const e = o(this, "layer.layer");
    return (!e || e && o(this, "layer.layer.loaded")) && o(this, "layer.title") || o(this, "layer.attributes.title") || "";
  }
  set title(e) {
    this._override("title", e);
  }
  get publishing() {
    const { layer: e, checkPublishStatusEnabled: t } = this;
    return !!(t && e && "publishingInfo" in e && "publishing" === e.publishingInfo?.status);
  }
  get updating() {
    const { layerView: e, connectionStatus: t, layer: i, publishing: s } = this;
    return !s && !t && (e ? e.updating : "loading" === i?.loadStatus || false);
  }
  get visible() {
    return !!this.layer?.visible;
  }
  set visible(e) {
    const t = this.layer;
    t && (t.visible = e);
  }
  get visibleAtCurrentScale() {
    return this.layerView?.visibleAtCurrentScale ?? !b3(this.layer, this.view?.scale);
  }
  get visibleAtCurrentTimeExtent() {
    return this.layerView?.visibleAtCurrentTimeExtent ?? true;
  }
  get visibilityMode() {
    return a3(this.layer);
  }
  clone() {
    return new C({ actionsSections: this.actionsSections.clone(), actionsOpen: this.actionsOpen, checkPublishStatusEnabled: this.checkPublishStatusEnabled, children: this.children.clone(), childrenSortable: this.childrenSortable, hidden: this.hidden, layer: this.layer, listItemCreatedFunction: this.listItemCreatedFunction, listModeDisabled: this.listModeDisabled, open: this.open, panel: this.panel, parent: this.parent, sortable: this.sortable, title: this.title, view: this.view, visible: this.visible });
  }
  _setListItemOnPanel(e) {
    e && (e.listItem = this);
  }
  _updateChildrenPublishing(e) {
    this.children?.forEach((t) => t.checkPublishStatusEnabled = e);
  }
  _updateChildrenView(e) {
    const t = this.children;
    t && t.forEach((t2) => t2.view = e);
  }
  _createChildren(e) {
    const { listModeDisabled: t, children: i } = this, s = e.filter((e2) => !i.some((t2) => t2.layer === e2));
    i.addMany(this._createChildItems(s, t));
  }
  _destroyChildren(e) {
    const { children: t } = this, i = t.filter((t2) => !!t2.layer && !e.includes(t2.layer));
    t.destroyMany(i);
  }
  _sortChildren(e) {
    this.children.sort((t, i) => e.indexOf(i.layer) - e.indexOf(t.layer));
  }
  _destroyAllChildren() {
    this.removeHandles(M), this.children.destroyAll();
  }
  _watchChildLayerListMode(e) {
    this.removeHandles(M), this.listModeDisabled || this.addHandles(e.toArray().map((t) => l(() => t.listMode, () => this._compileChildren(e))), M);
  }
  _compileChildren(e) {
    const t = this.listModeDisabled ? e : e?.filter((e2) => u2(e2) !== P);
    e?.length ? (this._createChildren(t), this._destroyChildren(t), this._sortChildren(t), this._watchChildLayerListMode(e)) : this._destroyAllChildren();
  }
  _watchSublayerChanges(e) {
    e && this.addHandles(e.on("change", () => this._compileChildren(e)), S);
  }
  _initializeChildLayers(e) {
    this._compileChildren(e), this._watchSublayerChanges(e);
  }
  _createChildItems(e, t) {
    return e.reverse().map((e2) => t || p2(e2) ? new C({ layer: e2, checkPublishStatusEnabled: this.checkPublishStatusEnabled, listItemCreatedFunction: this.listItemCreatedFunction, listModeDisabled: this.listModeDisabled, parent: this, view: this.view }) : null).filter(N);
  }
  _watchLayerProperties(e) {
    if (this.removeHandles(S), this.removeHandles(M), !e) return;
    if ("hide-children" === (!this.listModeDisabled && u2(e))) return void this.children.destroyAll();
    const t = d(e);
    t && this.addHandles(l(() => e[t], (i) => {
      e.hasOwnProperty(t) && this._initializeChildLayers(i);
    }, h), S);
  }
};
__decorate([a({ type: _ })], O2.prototype, "actionsSections", void 0), __decorate([a()], O2.prototype, "actionsOpen", void 0), __decorate([a()], O2.prototype, "checkPublishStatusEnabled", void 0), __decorate([a({ type: q.ofType(O2) })], O2.prototype, "children", void 0), __decorate([a()], O2.prototype, "childrenSortable", void 0), __decorate([a({ readOnly: true })], O2.prototype, "connectionStatus", null), __decorate([a({ readOnly: true })], O2.prototype, "error", null), __decorate([a()], O2.prototype, "hidden", void 0), __decorate([a({ readOnly: true })], O2.prototype, "incompatible", null), __decorate([a()], O2.prototype, "layer", void 0), __decorate([a({ readOnly: true })], O2.prototype, "layerView", null), __decorate([a()], O2.prototype, "listItemCreatedFunction", void 0), __decorate([a({ nonNullable: true })], O2.prototype, "listModeDisabled", void 0), __decorate([a()], O2.prototype, "open", void 0), __decorate([a({ type: c2 })], O2.prototype, "panel", null), __decorate([m("panel")], O2.prototype, "castPanel", null), __decorate([a()], O2.prototype, "parent", void 0), __decorate([a({ value: true })], O2.prototype, "sortable", null), __decorate([a()], O2.prototype, "title", null), __decorate([a({ readOnly: true })], O2.prototype, "publishing", null), __decorate([a({ readOnly: true })], O2.prototype, "updating", null), __decorate([a()], O2.prototype, "view", void 0), __decorate([a()], O2.prototype, "visible", null), __decorate([a({ readOnly: true })], O2.prototype, "visibleAtCurrentScale", null), __decorate([a({ readOnly: true })], O2.prototype, "visibleAtCurrentTimeExtent", null), __decorate([a({ readOnly: true })], O2.prototype, "visibilityMode", null), O2 = C = __decorate([c("esri.widgets.LayerList.ListItem")], O2);
var I = O2;

export {
  I
};
//# sourceMappingURL=chunk-FOZVXV3L.js.map
