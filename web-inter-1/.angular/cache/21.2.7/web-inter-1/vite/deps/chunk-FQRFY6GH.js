import {
  a as a2,
  c as c4
} from "./chunk-3LZB5PLU.js";
import {
  N,
  k,
  l,
  r,
  t,
  w as w3,
  y
} from "./chunk-S22GYE6C.js";
import {
  O,
  c as c2
} from "./chunk-YHDV72OA.js";
import {
  w,
  x
} from "./chunk-XJEMOC6M.js";
import {
  w as w2
} from "./chunk-DA25W2D5.js";
import {
  c as c3,
  o
} from "./chunk-56NUZKCZ.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/widgets/LayerList/LayerListItem.js
var _;
var I = class extends O {
  static {
    _ = this;
  }
  constructor(e) {
    super(e), this.dragEnabled = false, this.listModeDisabled = false, this.parent = null, this.parentTitles = null, this.viewModel = null, this._onActionMenuOpen = (e2) => {
      this.item.actionsOpen = e2.currentTarget.open;
    }, this._setTooltipReference = (e2) => {
      this.onTooltipReferenceChange?.(this.item.layer?.uid, e2);
    }, this._removeTooltipReference = () => {
      this.onTooltipReferenceChange?.(this.item.layer?.uid, null);
    };
  }
  loadDependencies() {
    return c2({ "action-group": () => import("./calcite-action-group-JWLCLMBV.js"), "action-menu": () => import("./calcite-action-menu-AHBDEK66.js"), action: () => import("./calcite-action-EB7V3T34.js"), icon: () => import("./calcite-icon-6UYXZHFB.js"), "list-item": () => import("./calcite-list-item-HIYDKA7X.js"), list: () => import("./calcite-list-6DLENFMV.js"), notice: () => import("./calcite-notice-NS6DRQIM.js") });
  }
  static {
    this.vnodeSelector = "calcite-list-item";
  }
  render() {
    const e = this.parentTitles ?? [], { _title: t3, item: i, activeItem: n, selectionMode: o2, selectedItems: s, messages: l2, parent: a3, css: r2, dragDisabled: c5 } = this, d = "visibleAtCurrentTimeExtent" in i && "layerInvisibleAtTime" in l2 && !i.visibleAtCurrentTimeExtent ? `${t3} (${l2.layerInvisibleAtTime})` : "visibleAtCurrentScale" in i && "layerInvisibleAtScale" in l2 && !i.visibleAtCurrentScale ? `${t3} (${l2.layerInvisibleAtScale})` : t3, p = "parent" in i && "catalog" === i.parent?.layer?.type, { layer: m } = i, u = "visibleAtCurrentScale" in i && !i.visibleAtCurrentScale || "visibleAtCurrentTimeExtent" in i && !i.visibleAtCurrentTimeExtent;
    return x("calcite-list-item", { afterCreate: (e2) => this._focusSelectedDragEl(e2, i), afterUpdate: (e2) => this._focusSelectedDragEl(e2, i), class: this.classes(r2.item, "itemActive" in r2 && { [r2.itemActive]: n === i }), "data-item": i, "data-layer-id": m?.id, dragDisabled: !i.sortable || p || c5, expanded: "open" in i && i.open, id: m?.uid, key: `list-item-${m?.uid}`, label: t3, metadata: { parentTitles: e, _title: t3 }, selected: "none" !== o2 && s.includes(i), title: d, unavailable: u, value: m?.uid, onCalciteListItemSelect: (e2) => "visible" in i && this._handleCalciteListItemSelect(e2, i, a3), onCalciteListItemToggle: (e2) => "open" in i && this._handleCalciteListItemToggle(e2, i) }, this._renderedCatalogFootprintIcon, this._renderedCatalogDynamicIcon, this._renderedItemStatus, this._renderedItemToggle, this._renderedCatalogSelectNode, this._renderedItemTemporaryIcon, this._renderedChildList, this._renderedItemMessage, this._renderedPanel, this._renderedPanelAction, this._renderedActions);
  }
  get _title() {
    const { messages: e } = this;
    return this.item.title || ("untitledTable" in e ? e.untitledTable : e.untitledLayer);
  }
  get _renderedItemStatus() {
    const { item: e, parent: t3, visibleElements: i, css: n } = this;
    if (!i.statusIndicators) return null;
    const { publishing: o2 } = e, s = "updating" in e && e.updating && !t3, l2 = "connectionStatus" in e ? e.connectionStatus : void 0, a3 = !!l2;
    return x("calcite-icon", { class: this.classes(n.statusIndicator, { [n.publishing]: o2 }, "updating" in n && { [n.updating]: s }, "connectionStatus" in n && { [n.connectionStatus]: a3 }, "connectionStatusConnected" in n && { [n.connectionStatusConnected]: a3 && "connected" === l2 }), icon: r({ connectionStatus: l2, publishing: o2 }), key: "layer-item-status", scale: "s", slot: "content-end" });
  }
  get _renderedItemTemporaryIcon() {
    const { item: e, visibleElements: t3, css: i } = this, { layer: n } = e, s = "temporaryLayerIndicators" in t3 && t3.temporaryLayerIndicators, l2 = "temporaryTableIndicators" in t3 && t3.temporaryTableIndicators, a3 = n && "persistenceEnabled" in n && (o(n) || !n.persistenceEnabled);
    return (s || l2) && a3 ? x("calcite-icon", { class: i.itemTemporaryIcon, icon: "temporary", key: "temporary-icon", scale: "s", slot: "content-start", title: this.messages.temporary }) : null;
  }
  get _renderedItemToggle() {
    const { _title: e, item: i, parent: n, messages: o2, visibilityAppearance: s, css: l2 } = this;
    if (!("visible" in i && "layerVisibility" in o2 && "showLayer" in o2 && "hideLayer" in o2 && "visibleToggle" in l2 && s)) return null;
    const { visible: a3 } = i, r2 = this._getParentVisibilityMode(n);
    if ("inherited" === r2) return null;
    const c5 = t({ visible: a3, exclusive: "exclusive" === r2, visibilityAppearance: s }), d = "checkbox" === s, p = o2.layerVisibility, m = w2(a3 ? o2.hideLayer : o2.showLayer, { layerName: e });
    return x("calcite-action", { class: l2.visibleToggle, icon: d ? c5 : void 0, key: "visibility-toggle", label: m, onclick: () => this._toggleVisibility(i, n), slot: d ? "actions-start" : "actions-end", text: p, title: m }, d ? null : x("calcite-icon", { class: this.classes({ [l2.visibleIcon]: "exclusive" !== r2 && a3 }), icon: c5, scale: "s" }));
  }
  get _renderedPanel() {
    const { panel: e } = this.item;
    return !e?.open || e.disabled || e.flowEnabled ? null : x("div", { class: this.css.itemContentBottom, key: `content-panel-${e.uid}`, slot: "content-bottom" }, e.render());
  }
  get _renderedPanelAction() {
    const { panel: e } = this.item;
    if (!e?.visible) return null;
    const { open: t3, title: i, disabled: n } = e;
    return x("calcite-action", { active: t3, disabled: n, icon: a2(e), key: `action-${e.uid}`, onclick: () => this._togglePanel(e), slot: "actions-end", text: i ?? "", title: i ?? void 0 }, this._renderFallbackIcon(e));
  }
  get _renderedActions() {
    switch (this._actionsCount) {
      case 0:
        return null;
      case 1:
        return this._singleAction;
      default:
        return this._renderedActionMenu;
    }
  }
  get _renderedActionMenu() {
    const { item: e, messagesCommon: t3 } = this, i = t3.options;
    return x("calcite-action-menu", { appearance: "transparent", key: "item-action-menu", label: t3.menu, open: e.actionsOpen, overlayPositioning: "fixed", placement: "bottom-end", slot: "actions-end", onCalciteActionMenuOpen: this._onActionMenuOpen }, x("calcite-action", { icon: "ellipsis", slot: "trigger", text: i, title: i }), this._renderedActionMenuContent);
  }
  get _renderedActionMenuContent() {
    return this._filteredSections.toArray().map((e) => x("calcite-action-group", { key: `action-section-${e.uid}` }, e.toArray().map((e2) => this._renderAction({ action: e2, textEnabled: true }))));
  }
  get _renderedCatalogFootprintIcon() {
    const { css: e } = this, t3 = this.item.layer, i = "catalog-footprint" === t3?.type, n = "sublayer" === t3?.type && c3(t3, "footprints");
    return "itemCatalogIcon" in e && (i || n) ? x("calcite-icon", { class: e.itemCatalogIcon, icon: "footprint", key: "footprint", scale: "s", slot: "content-start" }) : null;
  }
  get _renderedCatalogDynamicIcon() {
    const { css: e } = this, t3 = this.item.layer, i = "catalog-dynamic-group" === t3?.type, n = "sublayer" === t3?.type && c3(t3, "layers-in-view");
    return "itemCatalogIcon" in e && (i || n) ? x("calcite-icon", { class: e.itemCatalogIcon, icon: "catalog-dataset", key: "catalog-dataset", scale: "s", slot: "content-start" }) : null;
  }
  get _renderedCatalogSelectNode() {
    const { _title: e, item: t3, visibleElements: i } = this;
    if (!("visible" in t3)) return;
    const { layer: n } = t3, o2 = "catalog-dynamic-group" === n?.type;
    return "catalogLayerList" in i && i.catalogLayerList && o2 ? x("calcite-action", { disabled: !n.visible, icon: "chevron-right", iconFlipRtl: true, onclick: () => this._triggerOnCatalogOpen(t3), slot: "actions-end", text: e }) : null;
  }
  get _renderedChildList() {
    const { dragEnabled: e, item: t3, rootGroupUid: i, listModeDisabled: n, selectionMode: o2, displayMode: s } = this;
    if (!("children" in t3)) return;
    const l2 = [...this.parentTitles ?? [], t3.title], { children: a3, layer: r2 } = t3, c5 = "catalog-dynamic-group" !== r2?.type && w3(t3), u = !n && l(r2), g = "group" === r2?.type, y2 = !u && !c5 && e && g, h = !!e && ("childrenSortable" in t3 && t3.childrenSortable && y(t3));
    return c5 || y2 ? x("calcite-list", { canPull: (e2) => !!this.canMove && this.canMove(e2, "pull"), canPut: (e2) => !!this.canMove && this.canMove(e2, "put"), "data-item": t3, "data-layer-type": i, displayMode: s, dragEnabled: h, group: g ? i : `${i}-${r2?.uid}`, key: `child-list-${r2?.uid}`, label: t3.title, selectionAppearance: "border", selectionMode: o2 }, a3?.filter((e2) => !e2.hidden && (this.visibleElements.errors || !e2.error)).toArray().map((e2) => this._renderItem(e2, t3, l2)), this._renderedTablesItem) : null;
  }
  get _hasTables() {
    const { layerTablesEnabled: e } = this, t3 = this.item.layer;
    if (!e || !t3) return false;
    switch (t3.type) {
      case "knowledge-graph":
        return e.includes(t3.type) && "tables" in t3 && !!t3.tables?.length;
      case "map-image":
      case "tile":
        return e.includes(t3.type) && "subtables" in t3 && !!t3.subtables?.length;
      default:
        return false;
    }
  }
  get _renderedTablesItem() {
    const { item: e, messages: t3, css: i } = this, { layer: n } = e;
    return "itemTableIcon" in i && "visible" in e && "tables" in t3 && this._hasTables ? x("calcite-list-item", { class: i.item, "data-layer-id": n?.id, dragDisabled: true, key: `list-item-table-list-tables-${n?.uid}`, label: t3.tables, title: t3.tables, onCalciteListItemSelect: () => this._triggerOnTablesOpen(e) }, x("calcite-icon", { class: i.itemTableIcon, icon: "table", scale: "s", slot: "content-start" }), x("calcite-icon", { flipRtl: true, icon: "chevron-right", scale: "s", slot: "content-end" })) : null;
  }
  get _renderedItemMessage() {
    const { item: e, messages: t3, css: i } = this;
    return e.error ? x("div", { class: i.itemMessage, key: "esri-layer-list__error", slot: "content-bottom" }, x("calcite-notice", { icon: "exclamation-mark-triangle", kind: "warning", open: true, scale: "s", width: "full" }, x("div", { slot: "message" }, "tableError" in t3 ? t3.tableError : t3.layerError))) : "incompatible" in e && e.incompatible && "layerIncompatible" in t3 ? x("div", { class: i.itemMessage, key: "esri-layer-list__incompatible", slot: "content-bottom" }, x("calcite-notice", { afterCreate: this._setTooltipReference, afterRemoved: this._removeTooltipReference, bind: this, icon: "exclamation-mark-triangle", kind: "warning", open: true, scale: "s", tabIndex: 0, width: "full" }, x("div", { slot: "message" }, t3.layerIncompatible))) : null;
  }
  get _singleAction() {
    return this._renderAction({ action: k(this._filteredSections), textEnabled: false });
  }
  get _filteredSections() {
    return this.item.actionsSections.map((e) => e.filter((e2) => e2.visible));
  }
  get _actionsCount() {
    return this.item.actionsSections.reduce((e, t3) => e + t3.length, 0);
  }
  _renderAction(e) {
    const { item: t3 } = this, { action: i, textEnabled: n } = e;
    if (!i) return null;
    const { active: o2, disabled: s, title: a3, type: r2, indicator: c5 } = i;
    return x("calcite-action", { active: "toggle" === r2 && i.value, "data-action-id": i.id, disabled: s, icon: a2(i), indicator: c5, key: `action-${i.uid}`, loading: o2, onclick: () => this._triggerAction(t3, i), slot: n ? void 0 : "actions-end", text: a3 ?? "", textEnabled: n, title: a3 ?? void 0 }, this._renderFallbackIcon(i));
  }
  _renderFallbackIcon(e) {
    const { css: t3 } = this, { icon: i } = e, n = "className" in e ? e.className : void 0;
    if (i) return null;
    const o2 = "image" in e ? e.image : void 0, s = { [t3.itemActionIcon]: !!n, [t3.itemActionImage]: !!o2 };
    return n && (s[n] = true), o2 || n ? x("span", { "aria-hidden": "true", class: this.classes(t3.itemActionIcon, s), key: "icon", styles: c4(o2) }) : null;
  }
  _renderItem(e, t3, i = []) {
    return x(_, { activeItem: this.activeItem, canMove: this.canMove, css: this.css, displayMode: this.displayMode, dragEnabled: this.dragEnabled, item: e, key: `layerListItem-${e.layer?.uid}`, layerTablesEnabled: this.layerTablesEnabled, listModeDisabled: this.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, parent: t3, parentTitles: i, rootGroupUid: this.rootGroupUid, selectedDragItemLayerUid: this.selectedDragItemLayerUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibilityAppearance: this.visibilityAppearance, visibleElements: this.visibleElements, onAction: this.onAction, onCatalogOpen: this.onCatalogOpen, onPanelOpen: this.onPanelOpen, onSelectedDragItemLayerUidChange: this.onSelectedDragItemLayerUidChange, onTablesOpen: this.onTablesOpen, onTooltipReferenceChange: this.onTooltipReferenceChange });
  }
  _triggerAction(e, t3) {
    t3 && e && ("toggle" === t3.type && (t3.value = !t3.value), this.onAction(t3, e));
  }
  _triggerOnTablesOpen(e) {
    e && this.onTablesOpen && this.onTablesOpen(e);
  }
  _triggerOnCatalogOpen(e) {
    e && this.onCatalogOpen?.(e);
  }
  _focusSelectedDragEl(e, t3) {
    this.selectedDragItemLayerUid === t3.layer?.uid && (w(e), this.onSelectedDragItemLayerUidChange?.(null));
  }
  _handleCalciteListItemToggle(e, t3) {
    e.stopPropagation(), t3.open = e.target.expanded;
  }
  _getParentVisibilityMode(e) {
    return e && "visibilityMode" in e ? e.visibilityMode : null;
  }
  _handleCalciteListItemSelect(e, t3, i) {
    if (N(e.target) !== t3) return;
    const n = this._getParentVisibilityMode(i);
    "none" === this.selectionMode && "inherited" !== n && this._toggleVisibility(t3, i);
  }
  _togglePanel(e) {
    e.open = !e.open, e.open && this.onPanelOpen();
  }
  _toggleVisibility(e, t3) {
    if (!e || !("visible" in e)) return;
    "exclusive" === this._getParentVisibilityMode(t3) && e.visible || (e.visible = !e.visible);
  }
};
__decorate([a()], I.prototype, "activeItem", void 0), __decorate([a()], I.prototype, "canMove", void 0), __decorate([a()], I.prototype, "css", void 0), __decorate([a()], I.prototype, "displayMode", void 0), __decorate([a()], I.prototype, "dragEnabled", void 0), __decorate([a()], I.prototype, "dragDisabled", void 0), __decorate([a()], I.prototype, "item", void 0), __decorate([a()], I.prototype, "layerTablesEnabled", void 0), __decorate([a()], I.prototype, "listModeDisabled", void 0), __decorate([a()], I.prototype, "messages", void 0), __decorate([a()], I.prototype, "messagesCommon", void 0), __decorate([a()], I.prototype, "onAction", void 0), __decorate([a()], I.prototype, "onPanelOpen", void 0), __decorate([a()], I.prototype, "onCatalogOpen", void 0), __decorate([a()], I.prototype, "onTablesOpen", void 0), __decorate([a()], I.prototype, "onSelectedDragItemLayerUidChange", void 0), __decorate([a()], I.prototype, "onTooltipReferenceChange", void 0), __decorate([a()], I.prototype, "parent", void 0), __decorate([a()], I.prototype, "parentTitles", void 0), __decorate([a()], I.prototype, "rootGroupUid", void 0), __decorate([a()], I.prototype, "selectionMode", void 0), __decorate([a()], I.prototype, "selectedItems", void 0), __decorate([a()], I.prototype, "selectedDragItemLayerUid", void 0), __decorate([a()], I.prototype, "visibleElements", void 0), __decorate([a()], I.prototype, "visibilityAppearance", void 0), __decorate([a()], I.prototype, "_title", null), __decorate([a()], I.prototype, "_renderedItemStatus", null), __decorate([a()], I.prototype, "_renderedItemTemporaryIcon", null), __decorate([a()], I.prototype, "_renderedItemToggle", null), __decorate([a()], I.prototype, "_renderedPanel", null), __decorate([a()], I.prototype, "_renderedPanelAction", null), __decorate([a()], I.prototype, "_renderedActions", null), __decorate([a()], I.prototype, "_renderedActionMenu", null), __decorate([a()], I.prototype, "_renderedActionMenuContent", null), __decorate([a()], I.prototype, "_renderedCatalogFootprintIcon", null), __decorate([a()], I.prototype, "_renderedCatalogDynamicIcon", null), __decorate([a()], I.prototype, "_renderedCatalogSelectNode", null), __decorate([a()], I.prototype, "_renderedChildList", null), __decorate([a()], I.prototype, "_hasTables", null), __decorate([a()], I.prototype, "_renderedTablesItem", null), __decorate([a()], I.prototype, "_renderedItemMessage", null), __decorate([a()], I.prototype, "_singleAction", null), __decorate([a()], I.prototype, "_filteredSections", null), __decorate([a()], I.prototype, "_actionsCount", null), I = _ = __decorate([c("esri.widgets.LayerList.LayerListItem")], I);
var C = I;

// node_modules/@arcgis/core/widgets/support/listUtils.js
var t2 = ["label", "description", "metadata"];

export {
  C,
  t2 as t
};
//# sourceMappingURL=chunk-FQRFY6GH.js.map
