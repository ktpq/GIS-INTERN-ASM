import {
  C,
  t
} from "./chunk-FQRFY6GH.js";
import "./chunk-3LZB5PLU.js";
import {
  d,
  e,
  f,
  i,
  p as p2,
  q as q2,
  s,
  u
} from "./chunk-S22GYE6C.js";
import {
  e as e2
} from "./chunk-UM6VM6JA.js";
import {
  O,
  c as c2
} from "./chunk-YHDV72OA.js";
import {
  b as b2,
  m as m2,
  v,
  w as w2,
  x
} from "./chunk-XJEMOC6M.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-O7ARSPVE.js";
import "./chunk-I7B74Y7B.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-56NUZKCZ.js";
import "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-SIEFVWAL.js";
import {
  a as a3,
  p,
  r as r2
} from "./chunk-2FYYEMZJ.js";
import {
  o as o2
} from "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  a,
  h,
  l
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  l as l2
} from "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c,
  m3 as m,
  o,
  w
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
import {
  n2 as n,
  r
} from "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/TableList/css.js
var t2 = "esri-table-list";
var i2 = `${t2}__item`;
var o3 = { base: t2, actionMenu: `${t2}__action-menu`, actionGroup: `${t2}__action-group`, filterNoResults: `${t2}__filter-no-results`, item: i2, itemContentBottom: `${i2}-content-bottom`, itemMessage: `${i2}-message`, itemActionIcon: `${i2}-action-icon`, itemActionImage: `${i2}-action-image`, itemTemporaryIcon: `${i2}-temporary-icon`, publishing: `${t2}__publishing`, statusIndicator: `${t2}__status-indicator` };

// node_modules/@arcgis/core/widgets/TableList/ListItemPanel.js
var l3 = class extends o2(O) {
  constructor(t4, e3) {
    super(t4, e3), this.content = null, this.flowEnabled = false, this.image = null, this.listItem = null, this.open = false, this.visible = true;
  }
  get disabled() {
    return !(this.content && this.listItem);
  }
  set disabled(t4) {
    this._overrideIfSome("disabled", t4);
  }
  get icon() {
    const { image: t4 } = this, e3 = this._getFirstWidget();
    return this._get("icon") ?? (!t4 && e3 ? e3.icon : null);
  }
  set icon(t4) {
    this._overrideIfSome("icon", t4);
  }
  get title() {
    return this._get("title") || (this._getFirstWidget()?.label ?? "");
  }
  set title(t4) {
    this._override("title", t4);
  }
  render() {
    return x("div", { class: "esri-list-item-panel" }, this._renderContents());
  }
  _renderContent(t4) {
    const { disabled: e3, open: i3 } = this;
    return t4 && !e3 && i3 ? "string" == typeof t4 ? x("div", { innerHTML: t4, key: t4 }) : b2(t4) ? x("div", { key: "content-widget" }, t4.render()) : t4 instanceof HTMLElement ? x("div", { afterCreate: this._attachToNode, bind: t4, key: "content-element" }) : null : null;
  }
  _renderContents() {
    const { content: t4, open: e3 } = this;
    return e3 ? Array.isArray(t4) ? t4.map((t5) => this._renderContent(t5)) : this._renderContent(t4) : null;
  }
  _attachToNode(t4) {
    t4.appendChild(this);
  }
  _getWidget(t4) {
    return b2(t4) ? t4 : null;
  }
  _getFirstWidget() {
    const { content: t4 } = this;
    return Array.isArray(t4) ? t4.map((t5) => this._getWidget(t5)).find((t5) => t5) : this._getWidget(t4);
  }
};
__decorate([a2()], l3.prototype, "content", void 0), __decorate([a2()], l3.prototype, "disabled", null), __decorate([a2()], l3.prototype, "flowEnabled", void 0), __decorate([a2()], l3.prototype, "icon", null), __decorate([a2()], l3.prototype, "image", void 0), __decorate([a2()], l3.prototype, "listItem", void 0), __decorate([a2()], l3.prototype, "open", void 0), __decorate([a2()], l3.prototype, "title", null), __decorate([a2()], l3.prototype, "visible", void 0), l3 = __decorate([c("esri.widgets.TableList.ListItemPanel")], l3);

// node_modules/@arcgis/core/widgets/TableList/ListItem.js
var _;
var g = "layer";
var v2 = "child-list-mode";
var P = "hide";
var I = q.ofType({ key: "type", defaultKeyValue: "button", base: p, typeMap: { button: a3, toggle: r2 } });
var S = q.ofType(I);
var M = _ = class extends o2(b) {
  constructor(t4) {
    super(t4), this.actionsSections = new S(), this.actionsOpen = false, this.checkPublishStatusEnabled = false, this.children = new (q.ofType(_))(), this.hidden = false, this.layer = null, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.open = false, this.parent = null, this.sortable = true;
  }
  initialize() {
    if (this.addHandles([l(() => [this.layer?.listMode, this.listModeDisabled], () => this._watchLayerProperties(this.layer), h), l(() => this.checkPublishStatusEnabled, (t4) => this._updateChildrenPublishing(t4), h), l(() => this.panel, (t4) => this._setListItemOnPanel(t4), h)]), "function" == typeof this.listItemCreatedFunction) {
      const t4 = { item: this };
      this.listItemCreatedFunction.call(null, t4);
    }
  }
  destroy() {
    this.panel?.destroy(), this.children.destroyAll();
  }
  get error() {
    return this.layer?.loadError;
  }
  set panel(t4) {
    const e3 = this._get("panel");
    t4 !== e3 && t4 && e3?.destroy(), this._set("panel", t4);
  }
  castPanel(t4) {
    return this.panel?.open && !t4.hasOwnProperty("open") && (t4.open = true), w(l3, t4);
  }
  get publishing() {
    const { layer: t4, checkPublishStatusEnabled: e3 } = this;
    return (e3 && t4 && "publishingInfo" in t4 && "publishing" === t4.publishingInfo?.status) ?? false;
  }
  get title() {
    const t4 = o(this, "layer.layer");
    return (!t4 || t4 && o(this, "layer.layer.loaded") ? this.layer?.title : null) ?? "";
  }
  set title(t4) {
    this._overrideIfSome("title", t4);
  }
  clone() {
    return new _({ actionsSections: this.actionsSections.clone(), actionsOpen: this.actionsOpen, checkPublishStatusEnabled: this.checkPublishStatusEnabled, children: this.children.clone(), hidden: this.hidden, layer: this.layer, listItemCreatedFunction: this.listItemCreatedFunction, listModeDisabled: this.listModeDisabled, open: this.open, panel: this.panel, parent: this.parent, sortable: this.sortable, title: this.title });
  }
  _updateChildrenPublishing(t4) {
    this.children?.forEach((e3) => e3.checkPublishStatusEnabled = t4);
  }
  _setListItemOnPanel(t4) {
    t4 && (t4.listItem = this);
  }
  _createChildItems(t4, e3) {
    return t4.reverse().map((t5) => e3 || p2(t5) ? new _({ layer: t5, checkPublishStatusEnabled: this.checkPublishStatusEnabled, listItemCreatedFunction: this.listItemCreatedFunction, listModeDisabled: this.listModeDisabled, parent: this }) : null).filter(N);
  }
  _createChildren(t4) {
    const { listModeDisabled: e3, children: i3 } = this, s2 = t4.reverse().filter((t5) => !i3.some((e4) => e4.layer === t5));
    i3.addMany(this._createChildItems(s2, e3));
  }
  _destroyChildren(t4) {
    const { children: e3 } = this, i3 = e3.filter((e4) => !!e4.layer && !t4.includes(e4.layer));
    e3.destroyMany(i3);
  }
  _sortChildren(t4) {
    this.children.sort((e3, i3) => t4.indexOf(i3.layer) - t4.indexOf(e3.layer));
  }
  _destroyAllChildren() {
    this.removeHandles(v2), this.children.destroyAll();
  }
  _compileChildren(t4) {
    const e3 = this.listModeDisabled ? t4 : t4?.filter((t5) => u(t5) !== P);
    t4?.length ? (this._createChildren(e3), this._destroyChildren(e3), this._sortChildren(e3), this._watchChildLayerListMode(t4)) : this._destroyAllChildren();
  }
  _watchChildLayerListMode(t4) {
    this.removeHandles(v2), this.listModeDisabled || this.addHandles(t4.toArray().map((e3) => l(() => e3.listMode, () => this._compileChildren(t4))), v2);
  }
  _watchSublayerChanges(t4) {
    t4 && this.addHandles(t4.on("change", () => this._compileChildren(t4)), g);
  }
  _initializeChildLayers(t4) {
    this._compileChildren(t4), this._watchSublayerChanges(t4);
  }
  _watchLayerProperties(t4) {
    if (this.removeHandles(g), this.removeHandles(v2), !t4) return;
    t4.load();
    if ("hide-children" === (!this.listModeDisabled && u(t4))) return void this.children.destroyAll();
    const e3 = d(t4);
    e3 && this.addHandles(l(() => t4[e3], (i3) => {
      t4.hasOwnProperty(e3) && this._initializeChildLayers(i3);
    }, h), g);
  }
};
__decorate([a2({ type: S })], M.prototype, "actionsSections", void 0), __decorate([a2()], M.prototype, "actionsOpen", void 0), __decorate([a2()], M.prototype, "checkPublishStatusEnabled", void 0), __decorate([a2({ type: q.ofType(M) })], M.prototype, "children", void 0), __decorate([a2({ readOnly: true })], M.prototype, "error", null), __decorate([a2()], M.prototype, "hidden", void 0), __decorate([a2()], M.prototype, "layer", void 0), __decorate([a2()], M.prototype, "listItemCreatedFunction", void 0), __decorate([a2({ nonNullable: true })], M.prototype, "listModeDisabled", void 0), __decorate([a2()], M.prototype, "open", void 0), __decorate([a2({ type: l3 })], M.prototype, "panel", null), __decorate([m("panel")], M.prototype, "castPanel", null), __decorate([a2()], M.prototype, "parent", void 0), __decorate([a2({ readOnly: true })], M.prototype, "publishing", null), __decorate([a2()], M.prototype, "sortable", void 0), __decorate([a2()], M.prototype, "title", null), M = _ = __decorate([c("esri.widgets.TableList.ListItem")], M);

// node_modules/@arcgis/core/widgets/TableList/TableListViewModel.js
var m3 = { map: "map", layerListMode: "layer-list-mode" };
var n2 = "hide";
var h2 = q.ofType(M);
var c3 = class extends l2 {
  constructor(t4) {
    super(t4), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.tableItems = new h2(), this.map = null;
  }
  initialize() {
    this.addHandles([l(() => [this.tables, this.map?.allTables.toArray()], () => this._compileList(), h), l(() => [this.map?.loaded, this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList())], m3.map);
  }
  destroy() {
    this._removeAllItems(), this.map = null, this.tables = null;
  }
  get tables() {
    return this.map?.allTables;
  }
  set tables(t4) {
    this._overrideIfSome("tables", t4);
  }
  get state() {
    const { map: t4, tables: e3 } = this;
    if (!t4) return e3 ? "ready" : "disabled";
    const s2 = t4?.loadStatus;
    return "string" == typeof s2 ? "loaded" === s2 ? "ready" : "loading" === s2 ? "loading" : "disabled" : "ready";
  }
  get totalItems() {
    return this.tableItems.length;
  }
  triggerAction(t4, e3) {
    t4 && !t4.disabled && this.emit("trigger-action", { action: t4, item: e3 });
  }
  _removeAllItems() {
    this.tableItems.destroyAll();
  }
  _getViewableTables(t4) {
    return t4 ? this.listModeDisabled ? t4 : t4.filter((t5) => u(t5) !== n2) : void 0;
  }
  _watchTablesListMode(t4) {
    this.removeHandles(m3.layerListMode), t4 && !this.listModeDisabled && this.addHandles(l(() => t4.filter((t5) => "listMode" in t5).map((t5) => t5.listMode).toArray(), () => this._compileList()), m3.layerListMode);
  }
  _compileList() {
    const { tables: t4 } = this;
    this._watchTablesListMode(t4);
    const e3 = this._getViewableTables(t4);
    e3?.length ? (this._createNewItems(e3), this._removeItems(e3), this._sortItems(e3)) : this._removeAllItems();
  }
  _createNewItems(t4) {
    const { tableItems: e3, listItemCreatedFunction: s2, checkPublishStatusEnabled: i3 } = this;
    t4.forEach((t5) => {
      e3.some((e4) => e4.layer === t5) || e3.add(new M({ checkPublishStatusEnabled: i3, layer: t5, listItemCreatedFunction: s2 }));
    });
  }
  _removeItems(t4) {
    const { tableItems: e3 } = this;
    e3.forEach((s2) => {
      if (!s2) return;
      const i3 = t4?.find((t5) => s2.layer === t5);
      i3 || (e3.remove(s2), s2.destroy());
    });
  }
  _sortItems(t4) {
    const { tableItems: e3 } = this;
    e3.sort((e4, s2) => {
      const i3 = t4.indexOf(e4.layer), l4 = t4.indexOf(s2.layer);
      return i3 > l4 ? -1 : i3 < l4 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
};
__decorate([a2()], c3.prototype, "checkPublishStatusEnabled", void 0), __decorate([a2()], c3.prototype, "listItemCreatedFunction", void 0), __decorate([a2({ nonNullable: true })], c3.prototype, "listModeDisabled", void 0), __decorate([a2({ type: h2, readOnly: true })], c3.prototype, "tableItems", void 0), __decorate([a2()], c3.prototype, "tables", null), __decorate([a2()], c3.prototype, "map", void 0), __decorate([a2({ readOnly: true })], c3.prototype, "state", null), __decorate([a2()], c3.prototype, "totalItems", null), c3 = __decorate([c("esri.widgets.TableList.TableListViewModel")], c3);

// node_modules/@arcgis/core/widgets/TableList/TableListVisibleElements.js
var r3 = class extends b {
  constructor(o4) {
    super(o4), this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryTableIndicators = false;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "closeButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "collapseButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "errors", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "filter", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "flow", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "heading", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "statusIndicators", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r3.prototype, "temporaryTableIndicators", void 0), r3 = __decorate([c("esri.widgets.TableList.TableListVisibleElements")], r3);

// node_modules/@arcgis/core/widgets/TableList/support/tableListUtils.js
function n3(n4) {
  return n4["data-item"];
}
function t3(n4, t4) {
  n4?.sort((n5, i3) => {
    const e3 = t4.indexOf(n5.uid), r4 = t4.indexOf(i3.uid);
    return e3 > r4 ? -1 : e3 < r4 ? 1 : 0;
  });
}

// node_modules/@arcgis/core/widgets/TableList.js
var T = "nested";
var U = q.ofType(M);
var j = class extends o2(O) {
  constructor(e3, t4) {
    super(e3, t4), this._rootListEl = null, this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `table-${this.uid}`, this.collapsed = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterPredicate = null, this.filterText = "", this.headingLevel = 2, this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.messages = null, this.messagesCommon = null, this.minDragEnabledItems = e, this.minFilterItems = i, this.selectedItems = new U(), this.selectionMode = "none", this.viewModel = new c3(), this.visibleElements = new r3(), this._canMove = ({ dragEl: e4, fromEl: t5, toEl: i3 }, o4) => {
      const s2 = "pull" === o4 ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l4 = n3(e4);
      if (!l4?.sortable) return false;
      const r4 = n3(t5), n4 = q2(t5), a4 = n3(i3), d2 = q2(i3), c4 = !!n4 && !!d2 && n4 === d2, m4 = { selected: l4, from: r4, to: a4 }, p3 = t5.group, h3 = i3.group;
      return p3 && h3 && "function" == typeof s2 ? s2.call(null, m4) : c4;
    }, this._onCalciteListOrderChange = (e4) => {
      const { _lastDragDetail: t5 } = this, { toEl: i3, fromEl: o4, dragEl: s2, newIndex: l4 } = e4;
      if (!o4 || !i3 || t5?.newIndex === l4 && t5?.dragEl === s2 && t5?.toEl === i3 && t5?.fromEl === o4) return;
      this._lastDragDetail = e4, this._selectedDragItemLayerUid = s2.value;
      const r4 = Array.from(o4.children).filter((e5) => e5?.matches("calcite-list-item")).map((e5) => e5.value);
      t3(this.map?.tables, r4);
    }, this._onSelectedDragItemLayerUidChange = (e4) => {
      this._selectedDragItemLayerUid = e4;
    }, this._onTriggerAction = (e4, t5) => {
      this.triggerAction(e4, t5);
    }, this._onPanelOpen = () => {
      this._focusPanelFlowItem = true;
    }, this.announceDeprecation = () => {
      r(n.getLogger(this), "Table List", "arcgis-table-list", { version: "5.0" });
    };
  }
  initialize() {
    this.addHandles([a(() => this.viewModel.tableItems, "change", () => s(this.selectedItems), h), l(() => [this.filterPredicate, this._rootListEl], () => f(this._rootListEl, this.filterPredicate))]);
  }
  loadDependencies() {
    return c2({ button: () => import("./calcite-button-2T75ADLD.js"), flow: () => import("./calcite-flow-VHXVODL7.js"), "flow-item": () => import("./calcite-flow-item-Z56HRFBR.js"), list: () => import("./calcite-list-6DLENFMV.js"), notice: () => import("./calcite-notice-NS6DRQIM.js") });
  }
  get _dragEnabled() {
    return this.viewModel.totalItems >= this.minDragEnabledItems && this.dragEnabled;
  }
  get _filterEnabled() {
    return this.viewModel.totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get _visibleItems() {
    return this.tableItems?.filter((e3) => !e3.hidden && (this.visibleElements.errors || !e3.error));
  }
  get _openedPanelItems() {
    return this._visibleItems.filter(({ hidden: e3, panel: t4 }) => !e3 && t4?.open && !t4.disabled && t4.flowEnabled);
  }
  get icon() {
    return "table";
  }
  set icon(e3) {
    this._overrideIfSome("icon", e3);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e3) {
    this._overrideIfSome("label", e3);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e3) {
    this.viewModel.listItemCreatedFunction = e3;
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e3) {
    this.viewModel.map = e3;
  }
  get tableItems() {
    return this.viewModel.tableItems;
  }
  get tables() {
    return this.viewModel.tables;
  }
  set tables(e3) {
    this.viewModel.tables = e3;
  }
  triggerAction(e3, t4) {
    return this.viewModel.triggerAction(e3, t4);
  }
  render() {
    const e3 = this.viewModel?.state, t4 = { [e2.hidden]: "loading" === e3, [e2.disabled]: "disabled" === e3 };
    return x("div", { class: this.classes(o3.base, e2.widget, e2.panel, t4) }, this._renderItems());
  }
  _renderNoItemsMessage() {
    return x("div", { slot: "message" }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return x("div", { class: o3.itemMessage, key: "esri-layer-list__no-items" }, x("calcite-notice", { icon: "information", kind: "info", open: true, width: "full" }, this._renderNoItemsMessage()));
  }
  _renderPanelFlowItems() {
    const { _openedPanelItems: e3 } = this;
    return e3.toArray().map(({ title: t4, panel: i3 }, o4) => {
      const s2 = () => this._handlePanelFlowItemBack(i3);
      return x("calcite-flow-item", { afterCreate: this._focusPanelFlowItemNode, afterUpdate: this._focusPanelFlowItemNode, bind: this, description: t4, heading: i3.title, headingLevel: this.headingLevel, key: `flow-panel-${i3.uid}`, selected: o4 === e3.length - 1, onCalciteFlowItemBack: (e4) => {
        e4.preventDefault(), s2();
      } }, i3.render(), x("calcite-button", { appearance: "transparent", onclick: s2, slot: "footer-start", width: "full" }, this.messagesCommon.back));
    });
  }
  _handlePanelFlowItemBack(e3) {
    e3.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e3) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, w2(e3));
  }
  _focusPanelFlowItemNode(e3) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, w2(e3));
  }
  _renderItems() {
    const { visible: e3, collapsed: t4, visibleElements: { closeButton: i3, collapseButton: o4, heading: s2, flow: l4 }, _dragEnabled: r4, _visibleItems: n4, _filterEnabled: a4, _rootGroupUid: d2, _openedPanelItems: c4, selectionMode: m4, messages: p3, filterPlaceholder: h3, filterText: u2 } = this, g2 = [x("calcite-flow-item", { afterCreate: this._focusRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, closable: i3, closed: !e3, collapsed: t4, collapsible: o4, heading: s2 ? p3.widgetLabel : void 0, headingLevel: this.headingLevel, key: "root-flow-item", selected: !c4.length, onCalciteFlowItemClose: () => this.visible = false }, n4?.length ? null : this._renderNoItems(), x("calcite-list", { afterCreate: (e4) => {
      this._rootListEl = e4;
    }, afterRemoved: () => {
      this._rootListEl = null;
    }, canPull: (e4) => this._canMove(e4, "pull"), canPut: (e4) => this._canMove(e4, "put"), "data-layer-type": d2, displayMode: T, dragEnabled: r4, filterEnabled: a4, filterPlaceholder: h3, filterProps: t, filterText: a4 ? u2 : "", group: d2, key: "root-list", label: p3.widgetLabel, selectionAppearance: "border", selectionMode: m4, onCalciteListChange: (e4) => this._handleCalciteListChange(e4), onCalciteListDragEnd: (e4) => this._handleCalciteListDragEnd(e4.detail), onCalciteListFilter: (e4) => this.filterText = e4.currentTarget?.filterText ?? "", onCalciteListOrderChange: (e4) => this._onCalciteListOrderChange(e4.detail) }, n4.toArray().map((e4) => this._renderItem(e4)), a4 ? x("div", { class: o3.filterNoResults, slot: "filter-no-results" }, x("calcite-notice", { kind: "info", open: true, width: "full" }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems()];
    return e3 ? l4 ? x("calcite-flow", { key: "root-flow" }, g2) : g2 : null;
  }
  _handleCalciteListDragEnd(e3) {
    const { fromEl: t4, dragEl: i3, oldIndex: o4 } = e3;
    t4.insertBefore(i3, t4.children[o4]);
  }
  _renderItem(e3) {
    return x(C, { canMove: this._canMove, css: o3, displayMode: T, dragEnabled: this.dragEnabled, item: e3, key: `layerListItem-${e3.layer.uid}`, listModeDisabled: this.viewModel.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, rootGroupUid: this._rootGroupUid, selectedDragItemLayerUid: this._selectedDragItemLayerUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibleElements: this.visibleElements, onAction: this._onTriggerAction, onPanelOpen: this._onPanelOpen, onSelectedDragItemLayerUidChange: this._onSelectedDragItemLayerUidChange });
  }
  _handleCalciteListChange(e3) {
    const { selectionMode: t4, selectedItems: i3 } = this;
    if ("none" === t4) return;
    const o4 = e3.target.selectedItems.map((e4) => n3(e4)).filter(Boolean);
    i3.removeAll(), i3.addMany(o4);
  }
};
__decorate([a2()], j.prototype, "_rootListEl", void 0), __decorate([a2()], j.prototype, "_focusRootFlowItem", void 0), __decorate([a2()], j.prototype, "_focusPanelFlowItem", void 0), __decorate([a2()], j.prototype, "_dragEnabled", null), __decorate([a2()], j.prototype, "_filterEnabled", null), __decorate([a2()], j.prototype, "_visibleItems", null), __decorate([a2()], j.prototype, "_openedPanelItems", null), __decorate([a2()], j.prototype, "collapsed", void 0), __decorate([a2()], j.prototype, "dragEnabled", void 0), __decorate([a2()], j.prototype, "filterPlaceholder", void 0), __decorate([a2()], j.prototype, "filterPredicate", void 0), __decorate([a2()], j.prototype, "filterText", void 0), __decorate([a2()], j.prototype, "headingLevel", void 0), __decorate([a2()], j.prototype, "icon", null), __decorate([a2()], j.prototype, "label", null), __decorate([a2()], j.prototype, "listItemCanGiveFunction", void 0), __decorate([a2()], j.prototype, "listItemCanReceiveFunction", void 0), __decorate([a2()], j.prototype, "listItemCreatedFunction", null), __decorate([a2()], j.prototype, "map", null), __decorate([a2(), v("esri/widgets/TableList/t9n/TableList")], j.prototype, "messages", void 0), __decorate([a2(), v("esri/t9n/common")], j.prototype, "messagesCommon", void 0), __decorate([a2()], j.prototype, "minDragEnabledItems", void 0), __decorate([a2()], j.prototype, "minFilterItems", void 0), __decorate([a2({ type: U })], j.prototype, "selectedItems", void 0), __decorate([a2()], j.prototype, "selectionMode", void 0), __decorate([a2({ readOnly: true })], j.prototype, "tableItems", null), __decorate([a2()], j.prototype, "tables", null), __decorate([m2("trigger-action"), a2({ type: c3 })], j.prototype, "viewModel", void 0), __decorate([a2({ type: r3, nonNullable: true })], j.prototype, "visibleElements", void 0), j = __decorate([c("esri.widgets.TableList")], j);
var k = j;
export {
  k as default
};
//# sourceMappingURL=TableList-Y2J2YN6S.js.map
