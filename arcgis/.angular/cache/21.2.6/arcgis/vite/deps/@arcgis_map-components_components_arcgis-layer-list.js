import {
  I
} from "./chunk-FOZVXV3L.js";
import {
  C,
  N,
  e as e2,
  f,
  h as h2,
  i,
  m as m2,
  q as q2,
  s,
  t,
  u,
  v as v2
} from "./chunk-VFGNTT7R.js";
import "./chunk-ARSDIJPA.js";
import {
  e as e3
} from "./chunk-TDTJD4MS.js";
import {
  e as e4
} from "./chunk-TWPRJEIK.js";
import {
  O,
  c as c3
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
  l as l3
} from "./chunk-PMKUQ7UU.js";
import "./chunk-DHP63IFT.js";
import {
  AccessorController,
  getAccessorControllerBoundProperties,
  makeBinderProxy,
  reEmitEvent
} from "./chunk-2QNFPVEI.js";
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
  c as c2
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  c,
  l
} from "./chunk-7IP3DNCI.js";
import "./chunk-6BQZ6NJY.js";
import {
  a,
  h,
  l as l2
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
import {
  makeGenericController,
  proxyExports,
  usePropertyChange
} from "./chunk-HUOYETLD.js";
import "./chunk-6YAOADHH.js";
import {
  LitElement,
  createEvent,
  css,
  getControllersCount,
  isEsriInternalEnv,
  trackPropKey
} from "./chunk-K65EA25C.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/LayerList/css.js
var t2 = "esri-layer-list";
var i2 = `${t2}__item`;
var e5 = { base: t2, actionMenu: `${t2}__action-menu`, actionGroup: `${t2}__action-group`, filterNoResults: `${t2}__filter-no-results`, item: i2, itemActive: `${i2}--active`, itemContentBottom: `${i2}-content-bottom`, itemMessage: `${i2}-message`, itemActionIcon: `${i2}-action-icon`, itemActionImage: `${i2}-action-image`, itemTemporaryIcon: `${i2}-temporary-icon`, itemTableIcon: `${i2}-table-icon`, itemCatalogIcon: `${i2}-catalog-icon`, statusIndicator: `${t2}__status-indicator`, publishing: `${t2}__publishing`, updating: `${t2}__updating`, connectionStatus: `${t2}__connection-status`, connectionStatusConnected: `${t2}__connection-status--connected`, visibleToggle: `${t2}__visible-toggle`, visibleIcon: `${t2}__visible-icon` };

// node_modules/@arcgis/core/widgets/LayerList/LayerListViewModel.js
var m3 = { view: "view", viewLayers: "view-layers", mapLayers: "map-layers", layerViews: "layer-views", layerListMode: "layer-list-mode" };
var c4 = "hide";
var p = q.ofType(I);
var y = class extends l3 {
  constructor(e6) {
    super(e6), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.operationalItems = new p(), this.view = null;
  }
  initialize() {
    this.addHandles([l2(() => true === this.view?.ready, () => this._viewHandles(), h), l2(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList()), l2(() => e3(this.view) ? this.view.inGeographicLayout : null, () => this._compileList())], m3.view);
  }
  destroy() {
    this._removeAllItems(), this.view = null;
  }
  get state() {
    const { view: e6 } = this;
    return e6?.ready ? "ready" : e6 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.operationalItems.flatten((e6) => e6.children).length;
  }
  triggerAction(e6, t3) {
    e6 && !e6.disabled && this.emit("trigger-action", { action: e6, item: t3 });
  }
  moveListItem(e6, t3, s3, i3) {
    const a4 = e6?.layer;
    if (!a4 || "subtype-sublayer" === a4.type || "sublayer" === a4.type) return;
    const r4 = this.view?.map?.layers, l4 = t3 ? m2(t3) : r4, o2 = s3 ? m2(s3) : r4;
    if (!l4 || !o2) return;
    const { operationalItems: n2 } = this, h3 = t3?.children || n2, m4 = s3?.children || n2, c6 = o2.length - i3;
    e6.parent = s3 || null, h3.remove(e6), l4.remove(a4), m4.includes(e6) || m4.add(e6, c6), o2.includes(a4) || o2.add(a4, c6), this._compileList();
  }
  _createLayerViewHandles(e6) {
    this.removeHandles(m3.layerViews), this._compileList(), e6 && this.addHandles(e6.on("change", () => this._compileList()), m3.layerViews);
  }
  _createMapLayerHandles(e6) {
    this.removeHandles(m3.mapLayers), this._compileList(), e6 && this.addHandles(e6.on("change", () => this._compileList()), m3.mapLayers);
  }
  _createListItem(e6) {
    const { view: t3, listItemCreatedFunction: s3, checkPublishStatusEnabled: i3, listModeDisabled: a4 } = this;
    return new I({ checkPublishStatusEnabled: i3, listModeDisabled: a4, layer: e6, listItemCreatedFunction: s3, view: t3 });
  }
  _removeAllItems() {
    this.operationalItems.destroyAll();
  }
  _getViewableLayers(e6) {
    return e6 ? this.listModeDisabled ? e6 : e6.filter((e7) => u(e7) !== c4) : void 0;
  }
  _watchLayersListMode(e6) {
    this.removeHandles(m3.layerListMode), e6 && !this.listModeDisabled && this.addHandles(l2(() => e6.filter((e7) => "listMode" in e7).map((e7) => e7.listMode).toArray(), () => this._compileList()), m3.layerListMode);
  }
  _compileList() {
    const e6 = this.view?.map?.layers, t3 = e3(this.view) && !this.view.inGeographicLayout ? e6?.filter(({ type: e7 }) => "link-chart" === e7) : e6;
    this._watchLayersListMode(t3);
    const s3 = this._getViewableLayers(t3);
    s3?.length ? (this._createNewItems(s3), this._removeItems(s3), this._sortItems(s3)) : this._removeAllItems();
  }
  _createNewItems(e6) {
    const { operationalItems: t3 } = this;
    e6.forEach((e7) => {
      t3.some((t4) => t4.layer === e7) || t3.add(this._createListItem(e7));
    });
  }
  _removeItems(e6) {
    const { operationalItems: t3 } = this, s3 = [];
    t3.forEach((t4) => {
      t4 && e6 && e6.includes(t4.layer) || s3.push(t4);
    }), t3.destroyMany(s3);
  }
  _sortItems(e6) {
    const { operationalItems: t3 } = this;
    t3.sort((t4, s3) => {
      const i3 = e6.indexOf(t4.layer), a4 = e6.indexOf(s3.layer);
      return i3 > a4 ? -1 : i3 < a4 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
  _viewHandles() {
    const { view: e6 } = this;
    this.removeHandles([m3.mapLayers, m3.layerViews, m3.viewLayers]), e6?.ready ? this.addHandles([l2(() => this.view?.map?.allLayers, (e7) => this._createMapLayerHandles(e7), h), l2(() => this.view?.allLayerViews, (e7) => this._createLayerViewHandles(e7), h)], m3.viewLayers) : this._removeAllItems();
  }
};
__decorate([a2()], y.prototype, "checkPublishStatusEnabled", void 0), __decorate([a2()], y.prototype, "listItemCreatedFunction", void 0), __decorate([a2({ nonNullable: true })], y.prototype, "listModeDisabled", void 0), __decorate([a2({ type: p })], y.prototype, "operationalItems", void 0), __decorate([a2({ readOnly: true })], y.prototype, "state", null), __decorate([a2()], y.prototype, "totalItems", null), __decorate([a2()], y.prototype, "view", void 0), y = __decorate([c2("esri.widgets.LayerList.LayerListViewModel")], y);
var v3 = y;

// node_modules/@arcgis/core/widgets/LayerList/LayerListVisibleElements.js
var r2 = class extends b {
  constructor(o2) {
    super(o2), this.catalogLayerList = true, this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "catalogLayerList", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "closeButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "collapseButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "errors", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "filter", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "flow", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "heading", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "statusIndicators", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r2.prototype, "temporaryLayerIndicators", void 0), r2 = __decorate([c2("esri.widgets.LayerList.LayerListVisibleElements")], r2);
var s2 = r2;

// node_modules/@arcgis/core/widgets/LayerList.js
var D = q.ofType(I);
var R = "nested";
var k = class extends o(O) {
  constructor(e6, o2) {
    super(e6, o2), this._rootListEl = null, this._activeItem = null, this._tooltipReferenceMap = new e(), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._focusLayerFlowItem = null, this._layerListMap = new e(), this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `operational-${this.uid}`, this._openedLayersController = null, this.catalogLayerList = null, this.catalogOptions = null, this.collapsed = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterPredicate = null, this.filterText = "", this.headingLevel = 2, this.knowledgeGraphOptions = null, this.layerTablesEnabled = new q(["knowledge-graph"]), this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.mapImageOptions = null, this.messages = null, this.messagesCommon = null, this.minDragEnabledItems = e2, this.minFilterItems = i, this.openedLayers = new q(), this.openedLayerLists = new q(), this.selectedItems = new D(), this.selectionMode = "none", this.tableList = null, this.tileOptions = null, this.viewModel = new v3(), this.visibilityAppearance = "default", this.visibleElements = new s2(), this._canMove = ({ dragEl: e7, fromEl: t3, toEl: i3 }, o3) => {
      const s3 = "pull" === o3 ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l4 = N(e7);
      if (!l4?.sortable) return false;
      const r4 = N(t3), a4 = q2(t3), n2 = N(i3), d = q2(i3), p3 = !!a4 && !!d && a4 === d, c6 = { selected: l4, from: r4, to: n2 }, m4 = t3.group, h3 = i3.group, y2 = r4?.layer?.type ?? "", u2 = n2?.layer?.type ?? "", g2 = /* @__PURE__ */ new Set(["map-image", "catalog", "knowledge-graph"]), L = "sublayer";
      return m4 && h3 && "function" == typeof s3 ? s3.call(null, c6) : p3 && !g2.has(y2) && !g2.has(u2) && l4?.layer?.type !== L;
    }, this._onCatalogOpen = (e7) => {
      this.openedLayers.push(e7.layer?.parent), this._focusLayerFlowItem = e7.layer?.uid;
    }, this._onTablesOpen = (e7) => {
      this.openedLayers.push(e7.layer), this._focusLayerFlowItem = e7.layer?.uid;
    }, this._onPanelOpen = () => {
      this._focusPanelFlowItem = true;
    }, this._onTooltipReferenceChange = (e7, t3) => {
      t3 ? this._tooltipReferenceMap.set(e7, t3) : this._tooltipReferenceMap.delete(e7);
    }, this._onSelectedDragItemLayerUidChange = (e7) => {
      this._selectedDragItemLayerUid = e7;
    }, this._onTriggerAction = (e7, t3) => {
      this.triggerAction(e7, t3);
    }, this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e7) => {
      if ("default" !== this.visibilityAppearance) return;
      const t3 = Array.from(e7.composedPath()).find((e8) => e8.classList?.contains(e5.item));
      this._activeItem = N(t3);
    }, this._onCalciteListOrderChange = (e7) => {
      const { _lastDragDetail: t3 } = this, { toEl: i3, fromEl: o3, dragEl: s3, newIndex: l4 } = e7;
      if (o3 && i3 && !(t3?.newIndex === l4 && t3?.dragEl === s3 && t3?.toEl === i3 && t3?.fromEl === o3)) {
        if (this._lastDragDetail = e7, this._selectedDragItemLayerUid = s3.value, o3 === i3) {
          const e8 = Array.from(o3.children).filter((e9) => e9?.matches("calcite-list-item")).map((e9) => e9.value);
          return void this._sortLayers(o3, e8);
        }
        this._moveLayerFromChildList({ toEl: i3, fromEl: o3, dragEl: s3, newIndex: l4 });
      }
    }, this.announceDeprecation = () => {
      r(n.getLogger(this), "Layer List", "arcgis-layer-list", { version: "5.0" });
    };
  }
  initialize() {
    this.addHandles([a(() => this.openedLayers, "change", () => this._handleOpenedLayersChange(), h), a(() => this.viewModel.operationalItems, "change", () => s(this.selectedItems), h), l2(() => [this.filterPredicate, this._rootListEl], () => f(this._rootListEl, this.filterPredicate))]);
  }
  loadDependencies() {
    return c3({ button: () => import("./calcite-button-4OFNIJC3.js"), flow: () => import("./calcite-flow-SCVXR4PY.js"), "flow-item": () => import("./calcite-flow-item-KIPFKVAB.js"), list: () => import("./calcite-list-C3K3UNHH.js"), notice: () => import("./calcite-notice-LV7BXQCP.js"), tooltip: () => import("./calcite-tooltip-AGB6SHP6.js") });
  }
  destroy() {
    this._destroyOpenedLayerLists(), this._tooltipReferenceMap.clear();
  }
  get _totalItems() {
    return this.viewModel.operationalItems.flatten((e6) => e6.children.filter((e7) => "catalog-dynamic-group" !== e7.layer?.type)).length;
  }
  get _visibleItems() {
    return this.operationalItems?.filter((e6) => !e6.hidden && (this.visibleElements.errors || !e6.error));
  }
  get _openedPanelItems() {
    return this._visibleItems.flatten((e6) => e6.children).filter(({ hidden: e6, panel: t3 }) => !e6 && t3?.open && !t3.disabled && t3.flowEnabled);
  }
  get _dragEnabled() {
    return this._totalItems >= this.minDragEnabledItems && this.dragEnabled;
  }
  get _filterEnabled() {
    return this._totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get _renderedOpenLayerFlowItems() {
    const { openedLayers: e6 } = this;
    return e6.toArray().map((t3, i3) => this._renderLayerFlowItem(t3, i3 === e6.length - 1));
  }
  get icon() {
    return "layers";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e6) {
    this.viewModel.listItemCreatedFunction = e6;
  }
  get operationalItems() {
    return this.viewModel.operationalItems;
  }
  set operationalItems(e6) {
    this.viewModel.operationalItems = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  triggerAction(e6, t3) {
    return this.viewModel.triggerAction(e6, t3);
  }
  render() {
    const e6 = this.viewModel?.state, t3 = { [e4.hidden]: "loading" === e6, [e4.disabled]: "disabled" === e6 };
    return x("div", { class: this.classes(e5.base, e4.widget, e4.panel, t3) }, this._renderItemTooltips(), this._renderItems());
  }
  async _createFlowList(e6, t3) {
    const { _layerListMap: i3 } = this, o2 = i3.get(e6);
    if (o2) return o2;
    const s3 = "catalog" === e6.type ? await this._createCatalogLayerList(e6) : await this._createTableList(e6);
    return t3.aborted || i3.set(e6, s3), s3;
  }
  async _handleOpenedLayersChange() {
    const { _layerListMap: e6, openedLayers: t3, openedLayerLists: i3 } = this;
    this._openedLayersController?.abort();
    const o2 = new AbortController(), { signal: s3 } = o2;
    this._openedLayersController = o2, e6.forEach((i4, o3) => {
      t3.includes(o3) || (i4.destroy(), e6.delete(o3));
    });
    const l4 = await Promise.all(t3.map((e7) => this._createFlowList(e7, s3)));
    if (s3.aborted) return;
    i3.removeAll(), i3.addMany(l4);
    const r4 = i3.at(-1);
    r4 ? "catalogLayer" in r4 ? (this._set("catalogLayerList", r4), this._set("tableList", null)) : (this._set("catalogLayerList", null), this._set("tableList", r4)) : (this._set("catalogLayerList", null), this._set("tableList", null));
  }
  _destroyOpenedLayerLists() {
    this.openedLayerLists.destroyAll(), this.openedLayers.removeAll(), this._layerListMap.clear();
  }
  _renderItemTooltip(e6) {
    const { _tooltipReferenceMap: t3, messages: i3 } = this;
    return e6 ? x("calcite-tooltip", { key: `tooltip-${e6.layer?.uid}`, overlayPositioning: "fixed", referenceElement: t3.get(e6.layer?.uid), topLayerDisabled: this.topLayerDisabled }, i3.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e6) {
    return e6.incompatible ? this._renderItemTooltip(e6) : e6.children?.filter((e7) => !e7.hidden).toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _renderItemTooltips() {
    return this._visibleItems?.toArray().map((e6) => this._renderItemTooltipNodes(e6));
  }
  _renderNoItemsMessage() {
    return x("div", { slot: "message" }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return x("div", { class: e5.itemMessage, key: "esri-layer-list__no-items" }, x("calcite-notice", { icon: "information", kind: "info", open: true, width: "full" }, this._renderNoItemsMessage()));
  }
  async _createCatalogLayerList(e6) {
    const { default: t3 } = await import("./CatalogLayerList-G25CFU6P.js"), { headingLevel: i3, catalogOptions: o2, view: s3, filterPlaceholder: l4, listItemCreatedFunction: r4, minFilterItems: a4, selectionMode: n2, visibilityAppearance: d, _onCatalogOpen: p3, _onTablesOpen: c6, layerTablesEnabled: m4 } = this;
    return new t3(__spreadProps(__spreadValues({ headingLevel: i3, view: s3, filterPlaceholder: l4, listItemCreatedFunction: r4, minFilterItems: a4, selectionMode: n2, visibilityAppearance: d }, o2), { catalogLayer: e6, layerTablesEnabled: m4, onCatalogOpen: p3, onTablesOpen: c6 }));
  }
  _getTableListParams(e6) {
    switch (e6.type) {
      case "knowledge-graph":
        return __spreadProps(__spreadValues({}, this.knowledgeGraphOptions), { tables: e6.tables });
      case "map-image":
        return __spreadProps(__spreadValues({}, this.mapImageOptions), { tables: e6.subtables });
      case "tile":
        return __spreadProps(__spreadValues({}, this.tileOptions), { tables: e6.subtables });
      default:
        return null;
    }
  }
  async _createTableList(e6) {
    const { default: t3 } = await import("./TableList-XED3KFBH.js"), { headingLevel: i3, selectionMode: o2, dragEnabled: s3 } = this;
    return new t3(__spreadValues({ headingLevel: i3, selectionMode: o2, dragEnabled: s3 }, this._getTableListParams(e6)));
  }
  _renderLayerFlowItem(e6, t3) {
    const { messages: i3, openedLayers: o2 } = this, s3 = e6.title || this.messages.untitledLayer;
    return x("calcite-flow-item", { afterCreate: this._focusLayerFlowItemNode, afterUpdate: this._focusLayerFlowItemNode, bind: this, "data-layer-uid": e6.uid, description: s3, heading: i3["catalog" === e6.type ? "catalogLayers" : "tables"], headingLevel: this.headingLevel, key: `flow-layer-list-${e6.uid}`, selected: t3, onCalciteFlowItemBack: (e7) => {
      e7.preventDefault(), o2.pop();
      const t4 = o2.at(-1);
      t4 ? this._focusLayerFlowItem = t4.uid : this._focusRootFlowItem = true;
    } }, this._layerListMap.get(e6)?.render());
  }
  _renderPanelFlowItems() {
    const { _openedPanelItems: e6, openedLayers: t3 } = this;
    return e6.toArray().map(({ title: i3, panel: o2 }, s3) => {
      const l4 = () => this._handlePanelFlowItemBack(o2);
      return x("calcite-flow-item", { afterCreate: this._focusPanelFlowItemNode, afterUpdate: this._focusPanelFlowItemNode, bind: this, description: i3, heading: o2.title, headingLevel: this.headingLevel, key: `flow-panel-${o2.uid}`, selected: !t3.length && s3 === e6.length - 1, onCalciteFlowItemBack: (e7) => {
        e7.preventDefault(), l4();
      } }, o2.render(), x("calcite-button", { appearance: "transparent", onclick: l4, slot: "footer-start", width: "full" }, this.messagesCommon.back));
    });
  }
  _handlePanelFlowItemBack(e6) {
    e6.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e6) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, w(e6));
  }
  _focusLayerFlowItemNode(e6) {
    this._focusLayerFlowItem === e6.dataset.layerUid && (this._focusLayerFlowItem = null, w(e6));
  }
  _focusPanelFlowItemNode(e6) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, w(e6));
  }
  _renderItems() {
    const { visible: e6, collapsed: t3, _visibleItems: i3, _openedPanelItems: o2, _filterEnabled: s3, _rootGroupUid: l4, visibleElements: { closeButton: r4, collapseButton: a4, heading: n2, flow: d }, _dragEnabled: p3, selectionMode: c6, filterText: h3, openedLayers: y2, filterPlaceholder: u2, messages: g2 } = this, L = [x("calcite-flow-item", { afterCreate: this._focusRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, closable: r4, closed: !e6, collapsed: t3, collapsible: a4, heading: n2 ? g2.widgetLabel : void 0, headingLevel: this.headingLevel, key: "root-flow-item", selected: !y2.length && !o2.length, onCalciteFlowItemClose: () => this.visible = false }, i3?.length ? null : this._renderNoItems(), x("calcite-list", { afterCreate: (e7) => {
      this._rootListEl = e7, e7.addEventListener("focusin", this._setActiveItem), e7.addEventListener("focusout", this._clearActiveItem);
    }, afterRemoved: (e7) => {
      this._rootListEl = null, e7.removeEventListener("focusin", this._setActiveItem), e7.removeEventListener("focusout", this._clearActiveItem);
    }, canPull: (e7) => this._canMove(e7, "pull"), canPut: (e7) => this._canMove(e7, "put"), "data-layer-type": l4, displayMode: R, dragEnabled: p3, filterEnabled: s3, filterPlaceholder: u2, filterProps: t, filterText: s3 ? h3 : "", group: l4, key: "root-list", label: g2.widgetLabel, onmouseleave: this._clearActiveItem, onmouseover: this._setActiveItem, selectionAppearance: "border", selectionMode: c6, onCalciteListChange: (e7) => this._handleCalciteListChange(e7), onCalciteListDragEnd: (e7) => this._handleCalciteListDragEnd(e7.detail), onCalciteListFilter: (e7) => this.filterText = e7.currentTarget?.filterText ?? "", onCalciteListOrderChange: (e7) => this._onCalciteListOrderChange(e7.detail) }, i3.toArray().map((e7) => this._renderItem(e7)), s3 ? x("div", { class: e5.filterNoResults, slot: "filter-no-results" }, x("calcite-notice", { kind: "info", open: true, width: "full" }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(), this._renderedOpenLayerFlowItems];
    return e6 ? d ? x("calcite-flow", { key: "root-flow" }, L) : L : null;
  }
  _renderItem(e6, t3, i3) {
    return x(C, { activeItem: this._activeItem, canMove: this._canMove, css: e5, displayMode: R, dragEnabled: this.dragEnabled, item: e6, key: `layerListItem-${e6.layer?.uid}`, layerTablesEnabled: this.layerTablesEnabled, listModeDisabled: this.viewModel.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, parent: t3, parentTitles: i3, rootGroupUid: this._rootGroupUid, selectedDragItemLayerUid: this._selectedDragItemLayerUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibilityAppearance: this.visibilityAppearance, visibleElements: this.visibleElements, onAction: this._onTriggerAction, onCatalogOpen: this._onCatalogOpen, onPanelOpen: this._onPanelOpen, onSelectedDragItemLayerUidChange: this._onSelectedDragItemLayerUidChange, onTablesOpen: this._onTablesOpen, onTooltipReferenceChange: this._onTooltipReferenceChange });
  }
  _moveLayerFromChildList({ toEl: e6, fromEl: t3, dragEl: i3, newIndex: o2 }) {
    const s3 = N(i3), l4 = N(e6), r4 = N(t3);
    this.viewModel.moveListItem(s3, r4, l4, o2);
  }
  _handleCalciteListDragEnd(e6) {
    const { fromEl: t3, dragEl: i3, oldIndex: o2 } = e6;
    t3.insertBefore(i3, t3.children[o2]);
  }
  _sortLayers(e6, t3) {
    if (e6) if (e6 === this._rootListEl) v2(this.view?.map?.layers, t3);
    else {
      const i3 = N(e6);
      if (!i3) return;
      h2(i3, t3);
    }
  }
  _handleCalciteListChange(e6) {
    const { selectionMode: t3, selectedItems: i3 } = this;
    if ("none" === t3) return;
    const o2 = e6.target.selectedItems.map((e7) => N(e7)).filter(Boolean);
    i3.removeAll(), i3.addMany(o2);
  }
};
__decorate([a2()], k.prototype, "_rootListEl", void 0), __decorate([a2()], k.prototype, "_activeItem", void 0), __decorate([a2()], k.prototype, "_tooltipReferenceMap", void 0), __decorate([a2()], k.prototype, "_focusRootFlowItem", void 0), __decorate([a2()], k.prototype, "_focusPanelFlowItem", void 0), __decorate([a2()], k.prototype, "_focusLayerFlowItem", void 0), __decorate([a2()], k.prototype, "_layerListMap", void 0), __decorate([a2()], k.prototype, "_totalItems", null), __decorate([a2()], k.prototype, "_visibleItems", null), __decorate([a2()], k.prototype, "_openedPanelItems", null), __decorate([a2()], k.prototype, "_dragEnabled", null), __decorate([a2()], k.prototype, "_filterEnabled", null), __decorate([a2()], k.prototype, "_renderedOpenLayerFlowItems", null), __decorate([a2({ readOnly: true })], k.prototype, "catalogLayerList", void 0), __decorate([a2()], k.prototype, "catalogOptions", void 0), __decorate([a2()], k.prototype, "collapsed", void 0), __decorate([a2()], k.prototype, "dragEnabled", void 0), __decorate([a2()], k.prototype, "filterPlaceholder", void 0), __decorate([a2()], k.prototype, "filterPredicate", void 0), __decorate([a2()], k.prototype, "filterText", void 0), __decorate([a2()], k.prototype, "headingLevel", void 0), __decorate([a2()], k.prototype, "icon", null), __decorate([a2()], k.prototype, "knowledgeGraphOptions", void 0), __decorate([a2()], k.prototype, "label", null), __decorate([a2()], k.prototype, "layerTablesEnabled", void 0), __decorate([a2()], k.prototype, "listItemCanGiveFunction", void 0), __decorate([a2()], k.prototype, "listItemCanReceiveFunction", void 0), __decorate([a2()], k.prototype, "listItemCreatedFunction", null), __decorate([a2()], k.prototype, "mapImageOptions", void 0), __decorate([a2(), v("esri/widgets/LayerList/t9n/LayerList")], k.prototype, "messages", void 0), __decorate([a2(), v("esri/t9n/common")], k.prototype, "messagesCommon", void 0), __decorate([a2()], k.prototype, "minDragEnabledItems", void 0), __decorate([a2()], k.prototype, "minFilterItems", void 0), __decorate([a2({ readOnly: true })], k.prototype, "openedLayers", void 0), __decorate([a2({ readOnly: true })], k.prototype, "openedLayerLists", void 0), __decorate([a2()], k.prototype, "operationalItems", null), __decorate([a2()], k.prototype, "selectedItems", void 0), __decorate([a2()], k.prototype, "selectionMode", void 0), __decorate([a2({ readOnly: true })], k.prototype, "tableList", void 0), __decorate([a2()], k.prototype, "tileOptions", void 0), __decorate([a2()], k.prototype, "view", null), __decorate([m("trigger-action"), a2({ type: v3 })], k.prototype, "viewModel", void 0), __decorate([a2()], k.prototype, "visibilityAppearance", void 0), __decorate([a2({ type: s2, nonNullable: true })], k.prototype, "visibleElements", void 0), k = __decorate([c2("esri.widgets.LayerList")], k);
var j = k;

// node_modules/@arcgis/map-components/dist/chunks/useWidget.js
var I2 = (d, e6) => (t3) => C2(t3, d);
var p2 = class extends AccessorController {
  #o = /* @__PURE__ */ new Map();
  #e;
  #t;
  constructor(e6, t3) {
    super(e6, t3), new c(e6);
    const i3 = this, o2 = i3.instance;
    let n2 = o2.viewModel, l4 = o2.visibleElements;
    const r4 = new Proxy(this.exports, {
      get(s3, c6, h3) {
        return c6 === "viewModel" ? n2 : c6 === "visibleElements" ? l4 : Reflect.get(s3, c6, h3);
      }
    });
    if (i3.#t = o2, i3.instance = r4, i3.exports = r4, n2) {
      const s3 = {
        component: e6,
        get exports() {
          return i3.instance.viewModel;
        }
      };
      getAccessorControllerBoundProperties(i3).set("viewModel", "viewModel"), e6.addController(s3), n2 = makeBinderProxy(e6, new WeakRef(s3), getControllersCount(e6) - 1, n2, i3.#o);
    }
    i3.instance.visibleElements && (l4 = i3.#i(o2));
  }
  hostConnected() {
    this.instance = this.#t, super.hostConnected();
  }
  hostLoad() {
    this.#e = l2(() => this.component.el.view, (e6) => {
      const t3 = this.instance;
      !("view" in t3) && typeof t3.viewModel == "object" ? t3.viewModel.view = e6 : t3.view = e6, !("map" in t3) && typeof t3.viewModel == "object" ? t3.viewModel.map = e6?.map : t3.map = e6?.map;
    }, { sync: true, initial: true });
  }
  hostUpdate(e6) {
    e6.has("closed") && (this.instance.visible = !this.component.closed);
  }
  hostLoaded() {
    const { el: e6 } = this.component;
    e6.childElem ??= document.createElement("div"), e6.childElem.setAttribute("arcgis-widget-wrapped", ""), this.instance.container = e6.childElem, (this.component.el.shadowRoot ?? this.component.el).appendChild(this.instance.container), this.component.closed !== void 0 && this.onLifecycle(() => l2(() => this.instance.visible, (i3) => this.component.closed = !i3, { initial: true }));
  }
  #i(e6) {
    return new Proxy(e6.visibleElements, {
      get: (t3, i3) => {
        if (typeof i3 == "symbol" || i3 in Promise.prototype)
          return t3[i3];
        const o2 = [i3], n2 = this.#s(o2);
        return trackPropKey(this.component, (l4) => {
          const r4 = l4;
          this.component[r4] = false;
          let s3 = e6.visibleElements ?? {}, c6;
          for (const a4 of o2.slice(0, -1))
            if (typeof s3[a4] == "object" && s3[a4] !== null)
              s3 = s3[a4];
            else {
              c6 = !!s3[a4];
              break;
            }
          c6 === void 0 && (c6 = !!(s3[o2.slice(-1)[0]] ?? true));
          const f2 = r4.startsWith("hide") || r4.startsWith("show") ? r4.startsWith("hide") : c6;
          this.onUpdate((a4) => {
            if (a4.has(r4)) {
              const u2 = this.component[r4];
              this.#n(o2, u2, f2);
            }
          });
        }, n2);
      }
    });
  }
  #s(e6) {
    const t3 = new Proxy({}, {
      get: (i3, o2) => {
        const n2 = Reflect.get(i3, o2);
        return typeof o2 == "symbol" || o2 in Promise.prototype ? n2 : (e6.push(o2), t3);
      }
    });
    return t3;
  }
  #n(e6, t3, i3) {
    let o2 = this.instance.visibleElements ?? {};
    for (const l4 of e6.slice(0, -1))
      (typeof o2[l4] != "object" || o2[l4] === null) && (o2[l4] = {}), o2 = o2[l4];
    const n2 = !!(i3 ? !t3 : t3);
    o2[e6.at(-1)] = n2;
  }
  hostDestroy() {
    this.#e?.remove(), super.hostDestroy();
  }
};
isEsriInternalEnv() && (p2.devOnly$allowedPropNameMismatches = /* @__PURE__ */ new Set([
  "manager",
  "el",
  "multipleSortEnabled",
  // Deprecated
  "focusTrapEnabled",
  "focusTrapDisabled",
  // Deprecated
  "hideLastEditInfo"
]));
var C2 = proxyExports(p2);

// node_modules/@arcgis/map-components/dist/chunks/layer-list.js
var r3 = css`@keyframes esri-basemap-slide{0%{opacity:0;margin-top:0;margin-left:0}75%{opacity:0;margin-top:0;margin-left:0}to{opacity:1;margin-top:5px;margin-left:5px}}@keyframes esri-docking-animation{0%{opacity:0}25%{opacity:0}to{opacity:1}}@keyframes popup-intro-animation-down{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translate(0)}}@keyframes popup-intro-animation-up{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translate(0)}}@supports (-ms-ime-align: auto){.esri-slider__anchor:focus{outline:1px dotted #000}}@keyframes esri-spinner--start-animation{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes esri-spinner--finish-animation{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}@keyframes esri-spinner--rotate-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion){.esri-utility-network-trace__reset-prompt{animation:none!important}}@media(prefers-reduced-motion){.esri-popup--aligned-top-center,.esri-popup--aligned-top-left,.esri-popup--aligned-top-right,.esri-popup--aligned-bottom-center,.esri-popup--aligned-bottom-left,.esri-popup--aligned-bottom-right,.esri-popup--is-docked{animation:none!important}}@media(prefers-reduced-motion:reduce){.esri-fov-overlay{animation:none!important}}@keyframes esri-fade-in-down{0%{opacity:0;transform:translateY(-5px)}25%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translate(0)}}@keyframes esri-fade-in-up{0%{opacity:0;transform:translateY(5px)}25%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translate(0)}}@keyframes esri-fade-in{0%{opacity:0}25%{opacity:0}to{opacity:1}}@keyframes esri-fade-in-scale{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes looping-progresss-bar-ani{0%{width:0;left:0}20%{width:20%;left:0}80%{width:20%;left:80%}to{width:0;left:100%}}@keyframes esri-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes panel-advance{0%{opacity:0;transform:translate(50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-retreat{0%{opacity:0;transform:translate(-50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-advance--rtl{0%{opacity:0;transform:translate(-50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}@keyframes panel-retreat--rtl{0%{opacity:0;transform:translate(50px) scale(.99)}to{opacity:1;transform:translate(0) scale(1)}}.esri-widget__heading{color:var(--calcite-color-text-2);margin:0 0 .5rem;font-weight:var(--calcite-font-weight-semibold)}h1.esri-widget__heading{font-size:var(--calcite-font-size-xl)}h2.esri-widget__heading{font-size:var(--calcite-font-size-md)}h3.esri-widget__heading,h4.esri-widget__heading,h5.esri-widget__heading,h6.esri-widget__heading{font-size:var(--calcite-font-size)}.esri-widget{box-sizing:border-box;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget *,.esri-widget :before,.esri-widget :after{box-sizing:inherit}.esri-widget.esri-widget--disabled>*{opacity:.4;pointer-events:none}.esri-widget.esri-widget--compact{--esri-widget-padding-y: 0;--esri-widget-padding-x: 0}.esri-widget__anchor{color:var(--calcite-color-text-2)}.esri-widget__anchor:hover{color:var(--calcite-color-text-3)}.esri-widget__anchor:hover,.esri-widget__anchor:focus{text-decoration:underline}.esri-widget__anchor--disabled{opacity:.4;pointer-events:none}.esri-widget__header{background-color:var(--calcite-color-foreground-1);flex:1 0 100%;justify-content:space-between;align-items:center;width:100%;min-height:48px;padding:12px 0 12px 15px;display:flex}.esri-widget__heading{word-break:break-word}.esri-widget__header .esri-widget__heading{width:calc(100% - 48px);text-align:initial;color:var(--calcite-color-text-1);align-items:center;margin:0;padding:0;display:flex}.esri-widget__header-button{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);border:none;flex:0 0 48px;justify-content:center;align-self:stretch;align-items:center;width:48px;padding:0;display:flex}.esri-widget__footer{background-color:var(--calcite-color-foreground-1);justify-content:center;align-items:center;width:100%;min-height:48px;display:flex}.esri-widget__footer-pagination{color:var(--calcite-color-text-2);justify-content:space-between;align-items:center;display:flex}.esri-widget__footer-pagination-previous-button,.esri-widget__footer-pagination-next-button{cursor:pointer;background-color:var(--calcite-color-foreground-1);border:0;margin:0 7px;padding:12px 15px;transition:background-color .125s ease-in-out}.esri-widget__footer-pagination-previous-button:hover,.esri-widget__footer-pagination-previous-button:focus,.esri-widget__footer-pagination-next-button:hover,.esri-widget__footer-pagination-next-button:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1)}.esri-menu{visibility:hidden;z-index:1;background-clip:padding;background-color:var(--calcite-color-foreground-1);background-clip:padding-box;width:100%;max-height:0;margin:2px 0 0;padding:0;font-size:var(--calcite-font-size);line-height:var(--calcite-spacing-xl);position:absolute;top:100%;left:0;overflow:hidden;box-shadow:0 1px 2px #0000004d}.esri-menu .esri-menu__header{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse);padding:6px 12px}.esri-menu__list{margin:0;padding:0;list-style:none}.esri-menu__list-item{cursor:pointer;border-top:1px solid #adadad4d;border-left:3px solid #0000;padding:.8em 1em}.esri-menu__list-item [class^=esri-icon-],.esri-menu__list-item [class*=" esri-icon-"]{padding-right:2.8px}.esri-menu__list-item:first-child{border-top:none}.esri-menu__list-item--focus,.esri-menu__list-item:hover,.esri-menu__list-item:focus{background-color:var(--calcite-color-foreground-1)}.esri-menu__list-item:active{background-color:var(--calcite-color-foreground-current)}.esri-menu__list-item--active,.esri-menu__list-item--active:hover,.esri-menu__list-item--active:focus{background-color:var(--calcite-color-foreground-1);border-left-color:var(--calcite-color-brand)}.esri-widget__table{border-collapse:collapse;color:var(--calcite-color-text-1);border:none;width:100%;line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget__table tr:nth-child(odd){background-color:var(--calcite-color-transparent)}.esri-widget__table tr:nth-child(2n){background-color:var(--calcite-color-transparent-press)}.esri-widget__table tr a{color:var(--calcite-color-text-2)}.esri-widget__table tr a:hover,.esri-widget__table tr a:focus{color:var(--calcite-color-text-1)}.esri-widget__table tr td,.esri-widget__table tr th{vertical-align:top;word-break:break-word;padding:.5em .7em;font-size:var(--calcite-font-size-sm);font-weight:var(--calcite-font-weight-regular)}.esri-widget__table tr th{text-align:left;border-right:3px solid #0000000d;width:50%}.esri-widget__table tr td{width:50%}.esri-input{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1);border:1px solid #959595;font-size:var(--calcite-font-size)}.esri-input::-ms-clear{display:none}.esri-input::placeholder{opacity:1;color:var(--calcite-color-text-2)}.esri-input:placeholder-shown{text-overflow:ellipsis}.esri-input[type=text],.esri-input[type=password],.esri-input[type=number]{height:32px;padding:0 .5em}calcite-combobox.esri-input{border:none}.esri-widget__content--empty{text-align:center;color:var(--calcite-color-border-input);flex-flow:column wrap;align-items:center;padding:18px 22px;display:flex}.esri-widget__content--empty h1.esri-widget__heading,.esri-widget__content--empty h2.esri-widget__heading,.esri-widget__content--empty h3.esri-widget__heading,.esri-widget__content--empty h4.esri-widget__heading,.esri-widget__content--empty h5.esri-widget__heading{font-weight:var(--calcite-font-weight-regular)}.esri-widget__content-illustration--empty{width:128px;padding:1rem 0}.esri-widget__content-icon--empty{width:32px;padding:.5rem 0}.esri-select{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background:var(--calcite-color-foreground-1) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 32 32' width='32' height='32'%3E%3Cpath d='M8 11.207l-4-4V5.793l4 4 4-4v1.414z' fill='%23adadad' fillrule='nonzero'/%3E%3C/svg%3E") 100% no-repeat;border:1px solid #959595;border-radius:0;width:100%;height:32px;margin:0;padding:0 .5em;font-family:inherit;font-size:.85em;display:block}.esri-select[disabled]{cursor:auto}.esri-select::-ms-expand{display:none}.esri-disabled a,.esri-disabled [role=menu],.esri-disabled [role=checkbox],.esri-disabled [class^=esri-icon-],.esri-disabled [class*=" esri-icon-"]{color:var(--calcite-color-text-3)}.keynav-mode .esri-widget:focus,.keynav-mode .esri-widget :focus{z-index:1;outline-offset:2px;outline:2px solid #adadad}.esri-widget__loader-animation{border:.15em solid #adadad4d;border-top-color:var(--calcite-color-border-input);border-radius:100%;width:1em;height:1em;font-size:var(--calcite-font-size-md);animation:1.25s linear infinite esri-rotate;display:block;transform:translateZ(0)}:dir(rtl) .esri-widget__table th{text-align:right;border-left:3px solid #0000000d;border-right:none}:dir(rtl) .esri-select{background-position:0}:dir(rtl) .esri-menu__list-item{border-left:none;border-right:3px solid #0000}:dir(rtl) .esri-menu__list-item [class^=esri-icon-],:dir(rtl) .esri-menu__list-item [class*=" esri-icon-"]{padding-left:2px;padding-right:0}:dir(rtl) .esri-menu__list-item--active{border-right-color:var(--calcite-color-brand)}.esri-icon-font-fallback-text{clip:rect(0 0 0 0);width:1px;height:1px;position:absolute;overflow:hidden}.esri-rotating{animation:1.25s linear infinite esri-rotate;transform:translateZ(0)}.esri-clearfix:before,.esri-clearfix:after{content:" ";display:table}.esri-clearfix:after{clear:both}.esri-interactive{cursor:pointer}.esri-hidden{display:none!important}.esri-invisible{visibility:hidden!important}.esri-offscreen{position:absolute;top:-999em;left:-999em}.esri-match-height{flex-direction:column;flex:auto;display:flex;overflow:hidden}.esri-legend{overflow:hidden;overflow-y:auto}.esri-legend__message{padding:.5em 1em}.esri-legend__service{border-bottom:1px solid rgba(110,110,110,.3);padding:var(--esri-widget-padding);word-wrap:break-word}.esri-legend__service:last-child{border-bottom:none}.esri-legend__layer{margin-left:7px;overflow:auto}.esri-legend__group-layer-child{margin-left:7px;padding-right:0;padding-left:0}.esri-legend__layer-table{display:flex;flex-flow:column;margin-bottom:12px;width:100%}.esri-legend__layer-child-table{display:table;margin-bottom:12px;width:100%;border-collapse:collapse}.esri-legend__layer-body{margin-left:7px}.esri-legend__layer-row{display:flex}.esri-legend__layer-cell{padding:4px 0;min-width:100px;vertical-align:middle;word-break:break-word}.esri-legend__layer-cell--symbols{min-width:10px;text-align:center}.esri-legend--card__color-ramp-container{justify-content:center}.esri-legend__layer-table--size-ramp{display:table}.esri-legend__layer-table--size-ramp .esri-legend__layer-row{display:table-row}.esri-legend__layer-table--size-ramp .esri-legend__layer-cell{display:table-cell}.esri-legend__size-ramp~.esri-legend__layer-cell--info{width:80%;max-width:80%}.esri-legend__layer-cell--info{padding-right:7px;padding-left:7px;max-width:250px;word-break:normal;word-wrap:normal;font-size:var(--calcite-font-size-sm)}.esri-legend__imagery-layer-image--stretched{display:block;margin-bottom:-2px}.esri-legend__imagery-layer-cell--stretched{padding:0;vertical-align:top;line-height:1}.esri-legend__imagery-layer-info--stretched{padding:0 2px;vertical-align:top}.esri-legend__symbol{display:flex;justify-content:center}.esri-legend__layer-caption{display:table-caption;padding:6px 0;word-break:break-word}.esri-legend__ramp-labels{display:flex;flex-flow:column nowrap;justify-content:space-between}.esri-legend__ramps{margin-left:3px}.esri-legend__color-ramp{width:24px}.esri-legend__opacity-ramp{background-image:url(../base/images/transparent-bg.png)}.esri-legend__ramp-tick{position:absolute;right:1px;left:auto;border-top:1px solid rgba(110,110,110,.3);width:4px;line-height:0}.esri-legend__ramp-label{position:relative;padding:0 7px;line-height:1em;white-space:nowrap;font-size:var(--calcite-font-size-sm)}.esri-legend__ramp-label:before{display:block;position:absolute;top:.25em;right:100%;border-width:3px 4px 3px 0;border-style:solid;border-color:transparent rgba(50,50,50,.8) transparent transparent;width:0;height:0;content:""}.esri-legend__ramp-label:first-child{margin-top:-4px}.esri-legend__ramp-label:last-child{bottom:-3px}.esri-legend-layer-caption{display:table-caption;padding:6px 0}:dir(rtl) .esri-legend__ramp-label:before{right:auto;left:100%;border-width:3px 0 3px 4px;border-color:transparent transparent transparent rgba(50,50,50,.8)}:dir(rtl) .esri-legend__layer,:dir(rtl) .esri-legend__group-layer-child,:dir(rtl) .esri-legend__layer-body{margin-right:7px;margin-left:0;overflow:auto}:dir(rtl) .esri-legend__ramps{margin-right:3px;margin-left:auto}.esri-legend--card{display:flex;position:relative;transition:max-width .25s ease-in-out;background:#fff;overflow-x:auto}.esri-legend--card__section{white-space:pre-wrap;word-break:break-word;word-wrap:break-word;border-left:1px solid rgba(110,110,110,.3);padding:12px 15px;min-width:300px;overflow:auto;font-size:var(--calcite-font-size-sm)}.esri-legend--card__section:first-child{border-left:none}.esri-legend--card__message{padding:.5em 1em}.esri-legend--card__service-caption-container{border-bottom:1px solid rgba(110,110,110,.3);padding:12px 15px;height:45px;font-weight:var(--calcite-font-weight-semibold)}.esri-legend--card__service-caption-text{margin:0;padding-bottom:20px;overflow:auto}.esri-legend--card__layer-caption{margin-bottom:12px;padding:6px 0;font-weight:var(--calcite-font-weight-normal)}.esri-legend--card__service-content{display:flex;height:calc(100% - 45px)}.esri-legend--card__label-container{display:flex;flex-wrap:wrap}.esri-legend--card__relationship-label-container{display:flex;flex-direction:column}.esri-legend--card__relationship-label-container .esri-legend--card__layer-row{padding-bottom:.5em}.esri-legend--card__relationship-label-container .esri-legend--card__layer-row:last-child{padding-bottom:0}.esri-legend--card__relationship-section{border:none}.esri-legend--card__label-element{margin:.1em;padding:.5em 1em;min-width:4em;min-height:2.7em;text-align:center}.esri-legend--card__image-label{padding-right:7px;padding-left:7px}.esri-legend--card__layer-row,.esri-legend--card__size-ramp-container{display:flex;align-items:center}.esri-legend--card__size-ramp-preview{display:flex}.esri-legend--card__ramp-label{margin:0 .5em;white-space:nowrap}.esri-legend--card__pie-chart-ramp-preview{display:flex;justify-content:center}.esri-legend--card__interval-separator{text-align:center;font-size:.5em}.esri-legend--card__imagery-layer-image--stretched{display:block;margin-bottom:-2px}.esri-legend--card__symbol-container{position:relative}.esri-legend--card__interval-separators-container{position:absolute;top:50px;left:50%;transform:translate(-50%,-50%)}.esri-legend--card__carousel-title{margin:0}.esri-legend--card__service{border-left:1px solid rgba(110,110,110,.3);min-width:fit-content}.esri-legend--card__symbol{display:block;margin:auto}.esri-legend--stacked{display:flex;flex-direction:column;min-width:300px}.esri-legend--stacked .esri-legend--card__carousel{width:300px;max-height:420px}.esri-legend--stacked .esri-legend--card__carousel-item{max-height:388px}.esri-legend--stacked calcite-carousel-item[selected]{flex:1}.esri-legend--stacked .esri-legend--card__section{box-sizing:border-box;border:none;width:100%;min-width:unset;height:auto;overflow:auto}.esri-legend--stacked .esri-legend--card__size-ramp-row{flex-direction:column}.esri-legend--stacked .esri-legend--card__symbol-row{display:table-row;margin:5px 0;width:100%}.esri-legend--stacked .esri-legend--card__label-cell{display:table-cell;vertical-align:middle}.esri-legend--stacked .esri-legend--card__symbol-cell{display:table-cell;vertical-align:middle;text-align:center}.esri-legend--stacked .esri-legend--card__carousel-indicator-container{display:flex;justify-content:center;box-shadow:0 -1px #6e6e6e4d;width:300px;height:32px;overflow:auto}.esri-legend--stacked .esri-legend--card__carousel-indicator{display:flex;align-items:center;justify-content:center;cursor:pointer;width:16px;height:auto}.esri-legend--stacked .esri-legend--card__carousel-indicator:before{display:block;transition:background-color 125ms ease-in-out;border-radius:50%;box-shadow:0 0 0 1px #6e6e6e;background-color:transparent;width:10px;height:10px;content:""}.esri-legend--stacked .esri-legend--card__carousel-indicator:hover:before,.esri-legend--stacked .esri-legend--card__carousel-indicator--activated:before,.esri-legend--stacked .esri-legend--card__carousel-indicator--activated:hover:before{background-color:var(--calcite-color-text-3)}.esri-ui-corner{max-width:100%}.esri-ui-corner .esri-legend--card{max-height:420px}:dir(rtl) .esri-view-width-greater-than-small .esri-legend--card__section{border-right:1px solid rgba(110,110,110,.3);border-left:0}:dir(rtl) .esri-view-width-greater-than-small .esri-legend--card__section:first-child{border-right:none}.esri-relationship-ramp--diamond__container{display:flex;font-size:var(--calcite-font-size-sm)}.esri-relationship-ramp--diamond__left-column{align-self:center;padding-right:5px;max-width:85px;text-align:right}.esri-relationship-ramp--diamond__right-column{align-self:center;padding-left:5px;max-width:85px;text-align:left}.esri-relationship-ramp--diamond__middle-column{display:flex;flex-direction:column;text-align:center}.esri-relationship-ramp--diamond__middle-column--label{align-self:center;max-width:85px}.esri-relationship-ramp--diamond__middle-column--ramp{width:85px;height:85px}.esri-relationship-ramp--square__table{display:table;font-size:var(--calcite-font-size-sm)}.esri-relationship-ramp--square__table-row{display:table-row}.esri-relationship-ramp--square__table-cell{display:table-cell}.esri-relationship-ramp--square__table-label{max-width:95px}.esri-relationship-ramp--square__table-label--left-bottom{vertical-align:bottom;text-align:left}.esri-relationship-ramp--square__table-label--right-bottom{vertical-align:bottom;text-align:right}.esri-relationship-ramp--square__table-label--left-top{vertical-align:top;text-align:left}.esri-relationship-ramp--square__table-label--right-top{vertical-align:top;text-align:right}.esri-univariate-above-and-below-ramp__symbol{display:flex;align-items:center;justify-content:center}.esri-univariate-above-and-below-ramp__label{position:relative;margin-left:7px;line-height:1em;white-space:nowrap;font-size:var(--calcite-font-size-sm)}.esri-univariate-above-and-below-ramp__label:before{display:block;position:absolute;top:.45em;left:-19px;border-width:1px 0 0;border-style:solid;width:14px;height:0;content:""}.esri-univariate-above-and-below-ramp__label:first-child{top:-6px}.esri-univariate-above-and-below-ramp__label:last-child{bottom:-6px}.esri-univariate-above-and-below-ramp__color--card{position:relative}.esri-univariate-above-and-below-ramp__color--card:before{display:block;position:absolute;top:1px;border-right:1px solid #000;border-left:1px solid #000;width:100%;height:15px;content:""}:dir(rtl) .esri-univariate-above-and-below-ramp__label{margin-right:7px;margin-left:auto}:dir(rtl) .esri-univariate-above-and-below-ramp__label:before{right:-19px;left:auto}.esri-spike-ramp__container{display:flex;flex-direction:row;gap:var(--calcite-spacing-sm-plus);margin-left:var(--calcite-spacing-sm)}.esri-spike-ramp__preview-container{display:flex;position:relative;gap:var(--calcite-spacing-sm-plus);border-bottom:var(--calcite-border-width-sm) solid var(--calcite-color-border-2);padding:0 var(--calcite-spacing-xl)}.esri-spike-ramp__preview{display:flex;gap:var(--calcite-spacing-sm-plus);align-items:end}.esri-spike-ramp__symbol-preview{display:flex}.esri-spike-ramp__lines{display:flex;position:absolute;bottom:0}.esri-spike-ramp__labels-container{display:flex;position:relative;top:-5px;flex:1;min-width:120px}.esri-spike-ramp__label{position:relative;padding:0 7px;line-height:1em;word-break:break-all;font-size:var(--calcite-font-size-sm)}.esri-spike-ramp__label:before{display:block;position:absolute;top:.25em;right:100%;border-width:3px 4px 3px 0;border-style:solid;border-color:transparent rgba(50,50,50,.8) transparent transparent;width:0;height:0;content:""}.esri-item-list{width:100%}.esri-item-list__filter-container--sticky{z-index:1;position:sticky;top:0}.esri-item-list__group{margin-top:var(--calcite-spacing-md)}.esri-item-list__scroller{overflow-y:auto}.esri-ui .esri-item-list__scroller{z-index:0;position:relative}.esri-ui .esri-item-list__scroller--enabled{max-height:420px}.esri-item-list__group__header{color:var(--calcite-color-text-2);font-weight:var(--calcite-font-weight-medium)}.esri-item-list__list-item{cursor:pointer;min-height:var(--calcite-spacing-xxxl)}.esri-item-list__list-item[class^=esri-icon-],.esri-item-list__list-item[class*=" esri-icon-"]{padding-inline-end:2.8px}.esri-item-list__list-item--disabled{cursor:default}.esri-item-list__list-item-icon{justify-content:center;align-items:center;min-width:var(--calcite-spacing-xxxl);height:var(--calcite-spacing-xxxl);display:flex}.esri-item-list__list-item-icon span{line-height:0}.esri-thumbnail-preview{background-position:50%;width:22px;height:22px}.esri-item-list__no-matches-message{justify-content:center;align-items:center;height:96px;display:flex}.esri-layer-list{display:flex;width:100%}.esri-layer-list__filter-no-results{padding:var(--calcite-spacing-md) 15px}.esri-layer-list__item{--calcite-list-item-icon-center: 8.5px}.esri-layer-list__item-table-icon,.esri-layer-list__item-catalog-icon{margin-inline-end:0}.esri-layer-list__item-action-image{text-align:center;background-position:50%;background-repeat:no-repeat;background-size:contain;flex:0 0 var(--calcite-spacing-xl);width:var(--calcite-spacing-xl);height:var(--calcite-spacing-xl);font-size:var(--calcite-font-size)}.esri-layer-list__action-menu .esri-layer-list__action-group{display:none}.esri-layer-list__action-menu[open] .esri-layer-list__action-group{display:flex}.esri-layer-list__visible-icon{visibility:hidden}.esri-layer-list__item--active:hover>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon,.esri-layer-list__item--active:focus>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon,.esri-layer-list__item--active:focus-within>.esri-layer-list__visible-toggle>.esri-layer-list__visible-icon{visibility:visible}.esri-layer-list__status-indicator{visibility:hidden;color:var(--calcite-color-text-1);margin-inline:0}.esri-layer-list__publishing{visibility:visible;color:var(--calcite-color-text-2);transform-origin:var(--calcite-list-item-icon-center) var(--calcite-list-item-icon-center);animation:2s infinite esri-layer-list__publishing-anim}.esri-layer-list__updating{visibility:visible;animation:2s infinite esri-layer-list__updating-anim}.esri-layer-list__connection-status{visibility:visible;color:var(--calcite-color-status-warning);width:var(--calcite-spacing-xl);height:var(--calcite-spacing-xl);margin-inline:7px}.esri-layer-list__connection-status--connected{color:var(--calcite-color-status-success)}.esri-layer-list__item-content-bottom{margin:var(--calcite-spacing-md) 15px}.esri-layer-list__item-content-bottom .esri-legend__service{padding:0 0 var(--calcite-spacing-md)}.esri-layer-list__item-message{margin:var(--calcite-spacing-md) 15px}@keyframes esri-layer-list__updating-anim{0%,40%{color:var(--calcite-color-foreground-1)}50%,80%{color:var(--calcite-color-brand)}to{color:var(--calcite-color-foreground-1)}}@keyframes esri-layer-list__publishing-anim{0%,20%{transform:rotate(45deg)}80%,to{transform:rotate(135deg)}}`;

// node_modules/@arcgis/map-components/dist/chunks/useCloseEvent.js
var a3 = makeGenericController((e6, r4) => (r4.onLoaded(() => {
  const l4 = e6.el;
  e6.listenOn(l4.childElem, "calciteFlowItemClose", () => {
    e6.arcgisClose.emit(), e6.autoDestroyDisabled || e6.destroy();
  });
}), createEvent()));

// node_modules/@arcgis/map-components/dist/components/arcgis-layer-list/customElement.js
var g = I2(j);
var c5 = class extends LitElement {
  constructor() {
    super(...arguments), this.widget = g(this), this.viewModel = this.widget.viewModel, this.arcgisClose = a3(this), this.view = this.widget.view, this.autoDestroyDisabled = false, this.catalogOptions = this.widget.catalogOptions, this.closed = false, this.collapsed = this.widget.collapsed, this.dragEnabled = this.widget.dragEnabled, this.filterPlaceholder = this.widget.filterPlaceholder, this.filterPredicate = this.widget.filterPredicate, this.filterText = this.widget.filterText, this.headingLevel = this.widget.headingLevel, this.hideCatalogLayerList = this.widget.visibleElements.catalogLayerList, this.hideStatusIndicators = this.widget.visibleElements.statusIndicators, this.icon = this.widget.icon, this.knowledgeGraphOptions = this.widget.knowledgeGraphOptions, this.label = this.widget.label, this.listItemCreatedFunction = this.widget.listItemCreatedFunction, this.minDragEnabledItems = this.widget.minDragEnabledItems, this.minFilterItems = this.widget.minFilterItems, this.openedLayers = this.widget.openedLayers, this.selectedItems = this.widget.selectedItems, this.selectionMode = this.widget.selectionMode, this.showCloseButton = this.widget.visibleElements.closeButton, this.showCollapseButton = this.widget.visibleElements.collapseButton, this.showErrors = this.widget.visibleElements.errors, this.showFilter = this.widget.visibleElements.filter, this.showHeading = this.widget.visibleElements.heading, this.showTemporaryLayerIndicators = this.widget.visibleElements.temporaryLayerIndicators, this.state = this.viewModel.state, this.visibilityAppearance = this.widget.visibilityAppearance, this.arcgisPropertyChange = usePropertyChange()("state"), this.arcgisReady = createEvent(), this.arcgisTriggerAction = reEmitEvent(() => this.widget, "trigger-action");
  }
  static {
    this.properties = { view: 0, autoDestroyDisabled: 5, catalogLayerList: 32, catalogOptions: 0, closed: 5, collapsed: 7, dragEnabled: 5, filterPlaceholder: 1, filterPredicate: 0, filterText: 1, headingLevel: 9, hideCatalogLayerList: 5, hideStatusIndicators: 5, icon: 1, knowledgeGraphOptions: 0, label: 1, listItemCreatedFunction: 0, minDragEnabledItems: 9, minFilterItems: 9, openedLayers: 32, operationalItems: 32, referenceElement: 1, selectedItems: 0, selectionMode: 1, showCloseButton: 5, showCollapseButton: 5, showErrors: 5, showFilter: 5, showHeading: 5, showTemporaryLayerIndicators: 5, state: 32, tableList: 32, visibilityAppearance: 1 };
  }
  static {
    this.styles = r3;
  }
  get catalogLayerList() {
    return this.widget.catalogLayerList;
  }
  get operationalItems() {
    return this.widget.operationalItems;
  }
  get tableList() {
    return this.widget.tableList;
  }
  async destroy() {
    await this.manager.destroy();
  }
  async triggerAction(t3, e6) {
    this.widget?.triggerAction(t3, e6);
  }
};
l("arcgis-layer-list", c5);
export {
  c5 as ArcgisLayerList
};
//# sourceMappingURL=@arcgis_map-components_components_arcgis-layer-list.js.map
