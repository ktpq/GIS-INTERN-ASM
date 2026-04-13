import {
  I
} from "./chunk-FOZVXV3L.js";
import {
  C,
  N,
  f,
  i,
  s,
  t,
  u
} from "./chunk-VFGNTT7R.js";
import "./chunk-ARSDIJPA.js";
import {
  e as e2
} from "./chunk-TWPRJEIK.js";
import {
  O,
  c as c2
} from "./chunk-JD65H4ML.js";
import {
  e
} from "./chunk-BCX2XT3K.js";
import "./chunk-J5XU3PTN.js";
import {
  m,
  v,
  w,
  x
} from "./chunk-VMH5X3M4.js";
import "./chunk-NRIYMVEQ.js";
import "./chunk-OWMNTHDK.js";
import "./chunk-T6F4SXOT.js";
import "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-U3CRXBTW.js";
import {
  o
} from "./chunk-QLC3W7PG.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import {
  l as l2
} from "./chunk-PMKUQ7UU.js";
import "./chunk-DHP63IFT.js";
import "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  a,
  h,
  l
} from "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import {
  n2 as n,
  r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-K65EA25C.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/CatalogLayerList/CatalogLayerListViewModel.js
var n2 = { layerListMode: "layer-list-mode" };
var m2 = "hide";
var h2 = q.ofType(I);
var y = class extends l2 {
  constructor(t3) {
    super(t3), this.catalogItems = new h2(), this.checkPublishStatusEnabled = false, this.catalogLayer = null, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.view = null;
  }
  initialize() {
    this.addHandles([l(() => [this.catalogLayer?.loaded, this.view?.ready], () => this._compileList(), h), a(() => this.catalogLayer?.dynamicGroupLayer.layers, "change", () => this._compileList()), l(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList())]);
  }
  destroy() {
    this.view = null, this._removeAllItems();
  }
  get state() {
    const { view: t3, catalogLayer: e4 } = this;
    return t3?.ready && e4?.loaded ? "ready" : t3 && e4 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.catalogItems.flatten((t3) => t3.children).length;
  }
  triggerAction(t3, e4) {
    t3 && !t3.disabled && this.emit("trigger-action", { action: t3, item: e4 });
  }
  _createListItem(t3) {
    const { view: e4, listItemCreatedFunction: s2, checkPublishStatusEnabled: i3, listModeDisabled: o2 } = this;
    return new I({ checkPublishStatusEnabled: i3, listModeDisabled: o2, layer: t3, listItemCreatedFunction: s2, view: e4 });
  }
  _removeAllItems() {
    this.catalogItems.destroyAll();
  }
  _getViewableLayers(t3) {
    return t3 ? this.listModeDisabled ? t3 : t3.filter((t4) => u(t4) !== m2) : void 0;
  }
  _watchLayersListMode(t3) {
    this.removeHandles(n2.layerListMode), t3 && !this.listModeDisabled && this.addHandles(l(() => t3.filter((t4) => "listMode" in t4).map((t4) => t4.listMode).toArray(), () => this._compileList()), n2.layerListMode);
  }
  _compileList() {
    const { catalogLayer: t3 } = this;
    if (!t3?.loaded) return;
    const e4 = t3?.dynamicGroupLayer.layers;
    this._watchLayersListMode(e4);
    const s2 = this._getViewableLayers(e4);
    s2?.length ? (this._createNewItems(s2), this._removeItems(s2), this._sortItems(s2)) : this._removeAllItems();
  }
  _createNewItems(t3) {
    const { catalogItems: e4 } = this;
    t3.forEach((t4) => {
      e4.some((e5) => e5.layer === t4) || e4.add(this._createListItem(t4));
    });
  }
  _removeItems(t3) {
    const { catalogItems: e4 } = this, s2 = [];
    e4.forEach((e5) => {
      e5 && t3?.includes(e5.layer) || s2.push(e5);
    }), e4.destroyMany(s2);
  }
  _sortItems(t3) {
    const { catalogItems: e4 } = this;
    e4.sort((e5, s2) => {
      const i3 = t3.indexOf(e5.layer), o2 = t3.indexOf(s2.layer);
      return i3 > o2 ? -1 : i3 < o2 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
};
__decorate([a2({ type: h2 })], y.prototype, "catalogItems", void 0), __decorate([a2()], y.prototype, "checkPublishStatusEnabled", void 0), __decorate([a2()], y.prototype, "catalogLayer", void 0), __decorate([a2()], y.prototype, "listItemCreatedFunction", void 0), __decorate([a2({ nonNullable: true })], y.prototype, "listModeDisabled", void 0), __decorate([a2({ readOnly: true })], y.prototype, "state", null), __decorate([a2()], y.prototype, "totalItems", null), __decorate([a2()], y.prototype, "view", void 0), y = __decorate([c("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")], y);

// node_modules/@arcgis/core/widgets/CatalogLayerList/CatalogLayerListVisibleElements.js
var r2 = class extends b {
  constructor(o2) {
    super(o2), this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "closeButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "collapseButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "errors", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "filter", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "flow", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "heading", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "statusIndicators", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "temporaryLayerIndicators", void 0), r2 = __decorate([c("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")], r2);

// node_modules/@arcgis/core/widgets/CatalogLayerList/css.js
var t2 = "esri-catalog-layer-list";
var i2 = `${t2}__item`;
var e3 = { base: t2, actionMenu: `${t2}__action-menu`, actionGroup: `${t2}__action-group`, filterNoResults: `${t2}__filter-no-results`, item: i2, itemActive: `${i2}--active`, itemContentBottom: `${i2}-content-bottom`, itemMessage: `${i2}-message`, itemActionIcon: `${i2}-action-icon`, itemActionImage: `${i2}-action-image`, itemTemporaryIcon: `${i2}-temporary-icon`, itemTableIcon: `${i2}-table-icon`, statusIndicator: `${t2}__status-indicator`, publishing: `${t2}__publishing`, updating: `${t2}__updating`, connectionStatus: `${t2}__connection-status`, connectionStatusConnected: `${t2}__connection-status--connected`, visibleToggle: `${t2}__visible-toggle`, visibleIcon: `${t2}__visible-icon` };

// node_modules/@arcgis/core/widgets/CatalogLayerList.js
var T;
var P = q.ofType(I);
var A = "nested";
var E = T = class extends o(O) {
  constructor(e4, i3) {
    super(e4, i3), this._rootListEl = null, this._activeItem = null, this._tooltipReferenceMap = new e(), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._focusLayerFlowItem = null, this._layerListMap = new e(), this._rootGroupUid = `operational-${this.uid}`, this._openedLayersController = null, this.catalogLayerList = null, this.catalogOptions = null, this.collapsed = false, this.filterPlaceholder = "", this.filterPredicate = null, this.filterText = "", this.headingLevel = 2, this.knowledgeGraphOptions = null, this.layerTablesEnabled = new q(["knowledge-graph"]), this.mapImageOptions = null, this.messages = null, this.messagesCommon = null, this.minFilterItems = i, this.openedLayers = new q(), this.openedLayerLists = new q(), this.selectedItems = new P(), this.selectionMode = "none", this.tableList = null, this.tileOptions = null, this.viewModel = new y(), this.visibilityAppearance = "default", this.visibleElements = new r2(), this._onTablesOpen = (e5) => {
      this.onTablesOpen ? this.onTablesOpen(e5) : (this.openedLayers.push(e5.layer), this._focusLayerFlowItem = e5.layer?.uid);
    }, this._onCatalogOpen = (e5) => {
      this.onCatalogOpen ? this.onCatalogOpen(e5) : (this.openedLayers.push(e5.layer?.parent), this._focusLayerFlowItem = e5.layer?.uid);
    }, this._onPanelOpen = () => {
      this._focusPanelFlowItem = true;
    }, this._onTooltipReferenceChange = (e5, t3) => {
      t3 ? this._tooltipReferenceMap.set(e5, t3) : this._tooltipReferenceMap.delete(e5);
    }, this._onTriggerAction = (e5, t3) => {
      this.triggerAction(e5, t3);
    }, this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e5) => {
      if ("default" !== this.visibilityAppearance) return;
      const t3 = Array.from(e5.composedPath()).find((e6) => e6.classList?.contains(e3.item));
      this._activeItem = N(t3);
    }, this.announceDeprecation = () => {
      r(n.getLogger(this), "Catalog Layer List", "arcgis-catalog-layer-list", { version: "5.0" });
    };
  }
  initialize() {
    this.addHandles([a(() => this.openedLayers, "change", () => this._handleOpenedLayersChange(), h), a(() => this.viewModel.catalogItems, "change", () => s(this.selectedItems), h), l(() => [this.filterPredicate, this._rootListEl], () => f(this._rootListEl, this.filterPredicate))]);
  }
  loadDependencies() {
    return c2({ button: () => import("./calcite-button-4OFNIJC3.js"), flow: () => import("./calcite-flow-SCVXR4PY.js"), "flow-item": () => import("./calcite-flow-item-KIPFKVAB.js"), list: () => import("./calcite-list-C3K3UNHH.js"), notice: () => import("./calcite-notice-LV7BXQCP.js"), tooltip: () => import("./calcite-tooltip-AGB6SHP6.js") });
  }
  destroy() {
    this._destroyOpenedLayerLists(), this._tooltipReferenceMap.clear();
  }
  get _filterEnabled() {
    return this.viewModel.totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get _visibleItems() {
    return this.catalogItems?.filter((e4) => !e4.hidden && (this.visibleElements.errors || !e4.error));
  }
  get _openedPanelItems() {
    return this._visibleItems.flatten((e4) => e4.children).filter(({ hidden: e4, panel: t3 }) => !e4 && t3?.open && !t3.disabled && t3.flowEnabled);
  }
  get _renderedOpenLayerFlowItems() {
    const { openedLayers: e4 } = this;
    return e4.toArray().map((t3, o2) => this._renderLayerFlowItem(t3, o2 === e4.length - 1));
  }
  get catalogItems() {
    return this.viewModel.catalogItems;
  }
  set catalogItems(e4) {
    this.viewModel.catalogItems = e4;
  }
  get catalogLayer() {
    return this.viewModel.catalogLayer;
  }
  set catalogLayer(e4) {
    this.viewModel.catalogLayer = e4;
  }
  get icon() {
    return "catalog-dataset";
  }
  set icon(e4) {
    this._overrideIfSome("icon", e4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e4) {
    this.viewModel.listItemCreatedFunction = e4;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  triggerAction(e4, t3) {
    return this.viewModel.triggerAction(e4, t3);
  }
  render() {
    const e4 = this.viewModel?.state, t3 = { [e2.hidden]: "loading" === e4, [e2.disabled]: "disabled" === e4 };
    return x("div", { class: this.classes(e3.base, e2.widget, e2.panel, t3) }, this._renderItemTooltips(), this._renderItems());
  }
  async _createFlowList(e4, t3) {
    const { _layerListMap: o2 } = this, i3 = o2.get(e4);
    if (i3) return i3;
    const s2 = "catalog" === e4.type ? this._createCatalogLayerList(e4) : await this._createTableList(e4);
    return t3.aborted || o2.set(e4, s2), s2;
  }
  async _handleOpenedLayersChange() {
    const { _layerListMap: e4, openedLayers: t3, openedLayerLists: o2 } = this;
    this._openedLayersController?.abort();
    const i3 = new AbortController(), { signal: s2 } = i3;
    this._openedLayersController = i3, e4.forEach((o3, i4) => {
      t3.includes(i4) || (o3.destroy(), e4.delete(i4));
    });
    const l3 = await Promise.all(t3.map((e5) => this._createFlowList(e5, s2)));
    if (s2.aborted) return;
    o2.removeAll(), o2.addMany(l3);
    const a3 = o2.at(-1);
    a3 ? "catalogLayer" in a3 ? (this._set("catalogLayerList", a3), this._set("tableList", null)) : (this._set("catalogLayerList", null), this._set("tableList", a3)) : (this._set("catalogLayerList", null), this._set("tableList", null));
  }
  _destroyOpenedLayerLists() {
    this.openedLayerLists.destroyAll(), this.openedLayers.removeAll(), this._layerListMap.forEach((e4) => e4.destroy()), this._layerListMap.clear();
  }
  _renderItemTooltip(e4) {
    const { _tooltipReferenceMap: t3, messages: o2 } = this;
    return e4?.layer ? x("calcite-tooltip", { key: `tooltip-${e4.layer.uid}`, overlayPositioning: "fixed", referenceElement: t3.get(e4.layer.uid), topLayerDisabled: this.topLayerDisabled }, o2.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e4) {
    return e4.incompatible ? this._renderItemTooltip(e4) : e4.children?.filter((e5) => !e5.hidden).toArray().map((e5) => this._renderItemTooltipNodes(e5));
  }
  _renderItemTooltips() {
    return this._visibleItems?.toArray().map((e4) => this._renderItemTooltipNodes(e4));
  }
  _renderNoItemsMessage() {
    return x("div", { slot: "message" }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return x("div", { class: e3.itemMessage, key: "esri-layer-list__no-items" }, x("calcite-notice", { icon: "information", kind: "info", open: true, width: "full" }, this._renderNoItemsMessage()));
  }
  _renderPanelFlowItems() {
    const { _openedPanelItems: e4, openedLayers: t3 } = this;
    return e4.toArray().map(({ title: o2, panel: i3 }, s2) => {
      const l3 = () => this._handlePanelFlowItemBack(i3);
      return x("calcite-flow-item", { afterCreate: this._focusPanelFlowItemNode, afterUpdate: this._focusPanelFlowItemNode, bind: this, description: o2, heading: i3.title, headingLevel: this.headingLevel, key: `flow-panel-${i3.uid}`, selected: !t3.length && s2 === e4.length - 1, onCalciteFlowItemBack: (e5) => {
        e5.preventDefault(), l3();
      } }, i3.render(), x("calcite-button", { appearance: "transparent", onclick: l3, slot: "footer-start", width: "full" }, this.messagesCommon.back));
    });
  }
  _handlePanelFlowItemBack(e4) {
    e4.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e4) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, w(e4));
  }
  _focusPanelFlowItemNode(e4) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, w(e4));
  }
  _renderItems() {
    const { visible: e4, collapsed: t3, _visibleItems: o2, _filterEnabled: i3, _rootGroupUid: s2, visibleElements: { closeButton: l3, collapseButton: a3, heading: r3, flow: n3 }, selectionMode: p, filterText: d, filterPlaceholder: c3, messages: m3, openedLayers: h3, _openedPanelItems: u2 } = this, g = [x("calcite-flow-item", { afterCreate: this._focusRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, closable: l3, closed: !e4, collapsed: t3, collapsible: a3, heading: r3 ? m3.widgetLabel : void 0, headingLevel: this.headingLevel, key: "root-flow-item", selected: !h3.length && !u2.length, onCalciteFlowItemClose: () => this.visible = false }, o2?.length ? null : this._renderNoItems(), x("calcite-list", { afterCreate: (e5) => {
      this._rootListEl = e5, e5.addEventListener("focusin", this._setActiveItem), e5.addEventListener("focusout", this._clearActiveItem);
    }, afterRemoved: (e5) => {
      this._rootListEl = null, e5.removeEventListener("focusin", this._setActiveItem), e5.removeEventListener("focusout", this._clearActiveItem);
    }, "data-layer-type": s2, displayMode: A, filterEnabled: i3, filterPlaceholder: c3, filterProps: t, filterText: i3 ? d : "", group: s2, key: "root-list", label: m3.widgetLabel, onmouseleave: this._clearActiveItem, onmouseover: this._setActiveItem, selectionAppearance: "border", selectionMode: p, onCalciteListChange: (e5) => this._handleCalciteListChange(e5), onCalciteListFilter: (e5) => this.filterText = e5.currentTarget?.filterText ?? "" }, o2.toArray().map((e5) => this._renderItem(e5)), i3 ? x("div", { class: e3.filterNoResults, slot: "filter-no-results" }, x("calcite-notice", { kind: "info", open: true, width: "full" }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(), this._renderedOpenLayerFlowItems];
    return e4 ? n3 ? x("calcite-flow", { key: "root-flow" }, g) : g : null;
  }
  _focusLayerFlowItemNode(e4) {
    this._focusLayerFlowItem === e4.dataset.layerUid && (this._focusLayerFlowItem = null, w(e4));
  }
  _renderLayerFlowItem(e4, t3) {
    const { messages: o2, openedLayers: i3 } = this, s2 = e4.title || this.messages.untitledLayer;
    return x("calcite-flow-item", { afterCreate: this._focusLayerFlowItemNode, afterUpdate: this._focusLayerFlowItemNode, bind: this, "data-layer-uid": e4.uid, description: s2, heading: o2["catalog" === e4.type ? "catalogLayers" : "tables"], headingLevel: this.headingLevel, key: `flow-layer-list-${e4.uid}`, selected: t3, onCalciteFlowItemBack: (e5) => {
      e5.preventDefault(), i3.pop();
      const t4 = i3.at(-1);
      t4 ? this._focusLayerFlowItem = t4.uid : this._focusRootFlowItem = true;
    } }, this._layerListMap.get(e4)?.render());
  }
  _createCatalogLayerList(e4) {
    const { headingLevel: t3, catalogOptions: o2, view: i3, filterPlaceholder: s2, listItemCreatedFunction: l3, minFilterItems: a3, selectionMode: r3, visibilityAppearance: n3, onCatalogOpen: p, onTablesOpen: d } = this;
    return new T(__spreadProps(__spreadValues({ headingLevel: t3, view: i3, filterPlaceholder: s2, listItemCreatedFunction: l3, minFilterItems: a3, selectionMode: r3, visibilityAppearance: n3 }, o2), { catalogLayer: e4, onCatalogOpen: p, onTablesOpen: d }));
  }
  _getTableListParams(e4) {
    switch (e4.type) {
      case "knowledge-graph":
        return __spreadProps(__spreadValues({}, this.knowledgeGraphOptions), { tables: e4.tables });
      case "map-image":
        return __spreadProps(__spreadValues({}, this.mapImageOptions), { tables: e4.subtables });
      case "tile":
        return __spreadProps(__spreadValues({}, this.tileOptions), { tables: e4.subtables });
      default:
        return null;
    }
  }
  async _createTableList(e4) {
    const { default: t3 } = await import("./TableList-XED3KFBH.js"), { headingLevel: o2, selectionMode: i3 } = this;
    return new t3(__spreadValues({ headingLevel: o2, selectionMode: i3 }, this._getTableListParams(e4)));
  }
  _renderItem(e4, t3, o2) {
    return x(C, { activeItem: this._activeItem, css: e3, displayMode: A, dragEnabled: false, item: e4, key: `layerListItem-${e4.layer?.uid}`, layerTablesEnabled: this.layerTablesEnabled, listModeDisabled: this.viewModel.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, parent: t3, parentTitles: o2, rootGroupUid: this._rootGroupUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibilityAppearance: this.visibilityAppearance, visibleElements: this.visibleElements, onAction: this._onTriggerAction, onCatalogOpen: this._onCatalogOpen, onPanelOpen: this._onPanelOpen, onTablesOpen: this._onTablesOpen, onTooltipReferenceChange: this._onTooltipReferenceChange });
  }
  _handleCalciteListChange(e4) {
    const { selectionMode: t3, selectedItems: o2 } = this;
    if ("none" === t3) return;
    const i3 = e4.target.selectedItems.map((e5) => N(e5)).filter(Boolean);
    o2.removeAll(), o2.addMany(i3);
  }
};
__decorate([a2()], E.prototype, "_rootListEl", void 0), __decorate([a2()], E.prototype, "_activeItem", void 0), __decorate([a2()], E.prototype, "_tooltipReferenceMap", void 0), __decorate([a2()], E.prototype, "_focusRootFlowItem", void 0), __decorate([a2()], E.prototype, "_focusPanelFlowItem", void 0), __decorate([a2()], E.prototype, "_focusLayerFlowItem", void 0), __decorate([a2()], E.prototype, "_layerListMap", void 0), __decorate([a2()], E.prototype, "_filterEnabled", null), __decorate([a2()], E.prototype, "_visibleItems", null), __decorate([a2()], E.prototype, "_openedPanelItems", null), __decorate([a2()], E.prototype, "_renderedOpenLayerFlowItems", null), __decorate([a2()], E.prototype, "catalogItems", null), __decorate([a2()], E.prototype, "catalogLayer", null), __decorate([a2({ readOnly: true })], E.prototype, "catalogLayerList", void 0), __decorate([a2()], E.prototype, "catalogOptions", void 0), __decorate([a2()], E.prototype, "collapsed", void 0), __decorate([a2()], E.prototype, "filterPlaceholder", void 0), __decorate([a2()], E.prototype, "filterPredicate", void 0), __decorate([a2()], E.prototype, "filterText", void 0), __decorate([a2()], E.prototype, "headingLevel", void 0), __decorate([a2()], E.prototype, "icon", null), __decorate([a2()], E.prototype, "knowledgeGraphOptions", void 0), __decorate([a2()], E.prototype, "label", null), __decorate([a2()], E.prototype, "layerTablesEnabled", void 0), __decorate([a2()], E.prototype, "listItemCreatedFunction", null), __decorate([a2()], E.prototype, "mapImageOptions", void 0), __decorate([a2(), v("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")], E.prototype, "messages", void 0), __decorate([a2(), v("esri/t9n/common")], E.prototype, "messagesCommon", void 0), __decorate([a2()], E.prototype, "minFilterItems", void 0), __decorate([a2({ readOnly: true })], E.prototype, "openedLayers", void 0), __decorate([a2({ readOnly: true })], E.prototype, "openedLayerLists", void 0), __decorate([a2()], E.prototype, "onCatalogOpen", void 0), __decorate([a2()], E.prototype, "onTablesOpen", void 0), __decorate([a2({ type: P })], E.prototype, "selectedItems", void 0), __decorate([a2()], E.prototype, "selectionMode", void 0), __decorate([a2({ readOnly: true })], E.prototype, "tableList", void 0), __decorate([a2()], E.prototype, "tileOptions", void 0), __decorate([a2()], E.prototype, "view", null), __decorate([m("trigger-action"), a2({ type: y })], E.prototype, "viewModel", void 0), __decorate([a2()], E.prototype, "visibilityAppearance", void 0), __decorate([a2({ type: r2, nonNullable: true })], E.prototype, "visibleElements", void 0), E = T = __decorate([c("esri.widgets.CatalogLayerList")], E);
var k = E;
export {
  k as default
};
//# sourceMappingURL=CatalogLayerList-G25CFU6P.js.map
