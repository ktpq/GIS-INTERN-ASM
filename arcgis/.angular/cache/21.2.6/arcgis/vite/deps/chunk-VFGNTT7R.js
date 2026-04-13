import {
  a as a2,
  c as c4
} from "./chunk-ARSDIJPA.js";
import {
  O,
  c as c2
} from "./chunk-JD65H4ML.js";
import {
  w,
  x
} from "./chunk-VMH5X3M4.js";
import {
  c as c3,
  o
} from "./chunk-T6F4SXOT.js";
import {
  w as w2
} from "./chunk-DESITEXU.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/widgets/LayerList/support/layerListUtils.js
var n = { hide: "hide", hideChildren: "hide-children" };
var i = 10;
var e = 2;
function t({ exclusive: n2, visible: i2, visibilityAppearance: e2 }) {
  const t3 = "checkbox" === e2;
  return i2 ? n2 ? "circle-f" : t3 ? "check-square-f" : "view-visible" : n2 ? "circle" : t3 ? "square" : "view-hide";
}
function r({ connectionStatus: n2, publishing: i2 }) {
  return n2 ? "connected" === n2 ? "beacon" : "offline" : i2 ? "square" : "bullet-point";
}
function l(i2) {
  return i2?.listMode === n.hideChildren;
}
function u(n2) {
  return n2?.listMode ?? void 0;
}
function o2(n2) {
  return null != n2 && "minScale" in n2 && null != n2.minScale ? n2.minScale : void 0;
}
function c5(n2) {
  return null != n2 && "maxScale" in n2 && null != n2.maxScale ? n2.maxScale : void 0;
}
function a3(n2) {
  if (!n2) return "inherited";
  const i2 = S(x2(n2) ? n2.layer : n2);
  return null != i2 ? i2 ? "independent" : "inherited" : "visibilityMode" in n2 && null != n2.visibilityMode ? n2.visibilityMode : "independent";
}
function s(n2) {
  n2?.removeMany(n2.filter((n3) => n3?.destroyed));
}
function d(n2) {
  if (n2 && (!("type" in n2) || "wmts" !== n2.type)) return "sublayers" in n2 ? "sublayers" : "layers" in n2 ? "layers" : void 0;
}
function f(n2, i2) {
  n2 && (n2.filterPredicate = i2 ? (n3) => i2(N(n3)) : void 0);
}
function y(n2) {
  const i2 = (n2?.layer && x2(n2.layer) ? n2.layer.layer : void 0) ?? n2?.layer;
  return !!i2 && ("catalog" !== i2.type && (M(i2) ?? true));
}
function p(i2) {
  return u(i2) !== n.hide;
}
function b(n2, i2) {
  if (!n2 || null == i2 || isNaN(i2)) return false;
  const e2 = o2(n2), t3 = c5(n2), r2 = null != e2 && !isNaN(e2) && e2 > 0 && i2 > e2, l2 = null != t3 && !isNaN(t3) && t3 > 0 && i2 < t3;
  return r2 || l2;
}
function v(n2, i2) {
  n2?.sort((n3, e2) => {
    const t3 = "uid" in n3 ? i2.indexOf(n3.uid) : -1, r2 = "uid" in e2 ? i2.indexOf(e2.uid) : -1;
    return t3 > r2 ? -1 : t3 < r2 ? 1 : 0;
  });
}
function h(n2, i2) {
  const e2 = n2?.layer;
  if (!e2) return;
  const t3 = d(e2);
  if (!t3) return;
  let r2;
  "layers" === t3 && "layers" in e2 ? r2 = e2.layers : "sublayers" === t3 && "sublayers" in e2 && (r2 = e2.sublayers), v(r2, i2);
}
function m(n2) {
  const i2 = n2?.layer;
  return i2 && "layers" in i2 ? i2.layers : null;
}
function x2(n2) {
  return null != n2 && "layer" in n2 && null != n2.layer;
}
function S(n2) {
  const i2 = g(n2);
  return null != i2 && "supportsSublayerVisibility" in i2 ? i2.supportsSublayerVisibility : void 0;
}
function M(n2) {
  const i2 = g(n2);
  return null != i2 && "supportsDynamicLayers" in i2 ? i2.supportsDynamicLayers : void 0;
}
function g(n2) {
  return n2 && "capabilities" in n2 && null != n2.capabilities && "exportMap" in n2.capabilities ? n2.capabilities.exportMap : void 0;
}
function N(n2) {
  return n2?.["data-item"];
}
function q(n2) {
  return n2?.getAttribute("data-layer-type");
}
function w3(n2) {
  const { children: i2, error: e2 } = n2, t3 = "incompatible" in n2 && n2.incompatible;
  return !!i2?.filter((n3) => !n3.hidden).length && !e2 && !t3;
}
function k(n2) {
  for (const i2 of n2) for (const n3 of i2) if ("button" === n3.type || "toggle" === n3.type) return n3;
}

// node_modules/@arcgis/core/widgets/LayerList/LayerListItem.js
var _;
var I = class extends O {
  static {
    _ = this;
  }
  constructor(e2) {
    super(e2), this.dragEnabled = false, this.listModeDisabled = false, this.parent = null, this.parentTitles = null, this.viewModel = null, this._onActionMenuOpen = (e3) => {
      this.item.actionsOpen = e3.currentTarget.open;
    }, this._setTooltipReference = (e3) => {
      this.onTooltipReferenceChange?.(this.item.layer?.uid, e3);
    }, this._removeTooltipReference = () => {
      this.onTooltipReferenceChange?.(this.item.layer?.uid, null);
    };
  }
  loadDependencies() {
    return c2({ "action-group": () => import("./calcite-action-group-WPKYKJ3I.js"), "action-menu": () => import("./calcite-action-menu-RFZMBWCV.js"), action: () => import("./calcite-action-V2C6NDEN.js"), icon: () => import("./calcite-icon-ICSG7HN4.js"), "list-item": () => import("./calcite-list-item-EMWTYT2C.js"), list: () => import("./calcite-list-C3K3UNHH.js"), notice: () => import("./calcite-notice-LV7BXQCP.js") });
  }
  static {
    this.vnodeSelector = "calcite-list-item";
  }
  render() {
    const e2 = this.parentTitles ?? [], { _title: t3, item: i2, activeItem: n2, selectionMode: o3, selectedItems: s2, messages: l2, parent: a4, css: r2, dragDisabled: c6 } = this, d2 = "visibleAtCurrentTimeExtent" in i2 && "layerInvisibleAtTime" in l2 && !i2.visibleAtCurrentTimeExtent ? `${t3} (${l2.layerInvisibleAtTime})` : "visibleAtCurrentScale" in i2 && "layerInvisibleAtScale" in l2 && !i2.visibleAtCurrentScale ? `${t3} (${l2.layerInvisibleAtScale})` : t3, p2 = "parent" in i2 && "catalog" === i2.parent?.layer?.type, { layer: m2 } = i2, u2 = "visibleAtCurrentScale" in i2 && !i2.visibleAtCurrentScale || "visibleAtCurrentTimeExtent" in i2 && !i2.visibleAtCurrentTimeExtent;
    return x("calcite-list-item", { afterCreate: (e3) => this._focusSelectedDragEl(e3, i2), afterUpdate: (e3) => this._focusSelectedDragEl(e3, i2), class: this.classes(r2.item, "itemActive" in r2 && { [r2.itemActive]: n2 === i2 }), "data-item": i2, "data-layer-id": m2?.id, dragDisabled: !i2.sortable || p2 || c6, expanded: "open" in i2 && i2.open, id: m2?.uid, key: `list-item-${m2?.uid}`, label: t3, metadata: { parentTitles: e2, _title: t3 }, selected: "none" !== o3 && s2.includes(i2), title: d2, unavailable: u2, value: m2?.uid, onCalciteListItemSelect: (e3) => "visible" in i2 && this._handleCalciteListItemSelect(e3, i2, a4), onCalciteListItemToggle: (e3) => "open" in i2 && this._handleCalciteListItemToggle(e3, i2) }, this._renderedCatalogFootprintIcon, this._renderedCatalogDynamicIcon, this._renderedItemStatus, this._renderedItemToggle, this._renderedCatalogSelectNode, this._renderedItemTemporaryIcon, this._renderedChildList, this._renderedItemMessage, this._renderedPanel, this._renderedPanelAction, this._renderedActions);
  }
  get _title() {
    const { messages: e2 } = this;
    return this.item.title || ("untitledTable" in e2 ? e2.untitledTable : e2.untitledLayer);
  }
  get _renderedItemStatus() {
    const { item: e2, parent: t3, visibleElements: i2, css: n2 } = this;
    if (!i2.statusIndicators) return null;
    const { publishing: o3 } = e2, s2 = "updating" in e2 && e2.updating && !t3, l2 = "connectionStatus" in e2 ? e2.connectionStatus : void 0, a4 = !!l2;
    return x("calcite-icon", { class: this.classes(n2.statusIndicator, { [n2.publishing]: o3 }, "updating" in n2 && { [n2.updating]: s2 }, "connectionStatus" in n2 && { [n2.connectionStatus]: a4 }, "connectionStatusConnected" in n2 && { [n2.connectionStatusConnected]: a4 && "connected" === l2 }), icon: r({ connectionStatus: l2, publishing: o3 }), key: "layer-item-status", scale: "s", slot: "content-end" });
  }
  get _renderedItemTemporaryIcon() {
    const { item: e2, visibleElements: t3, css: i2 } = this, { layer: n2 } = e2, s2 = "temporaryLayerIndicators" in t3 && t3.temporaryLayerIndicators, l2 = "temporaryTableIndicators" in t3 && t3.temporaryTableIndicators, a4 = n2 && "persistenceEnabled" in n2 && (o(n2) || !n2.persistenceEnabled);
    return (s2 || l2) && a4 ? x("calcite-icon", { class: i2.itemTemporaryIcon, icon: "temporary", key: "temporary-icon", scale: "s", slot: "content-start", title: this.messages.temporary }) : null;
  }
  get _renderedItemToggle() {
    const { _title: e2, item: i2, parent: n2, messages: o3, visibilityAppearance: s2, css: l2 } = this;
    if (!("visible" in i2 && "layerVisibility" in o3 && "showLayer" in o3 && "hideLayer" in o3 && "visibleToggle" in l2 && s2)) return null;
    const { visible: a4 } = i2, r2 = this._getParentVisibilityMode(n2);
    if ("inherited" === r2) return null;
    const c6 = t({ visible: a4, exclusive: "exclusive" === r2, visibilityAppearance: s2 }), d2 = "checkbox" === s2, p2 = o3.layerVisibility, m2 = w2(a4 ? o3.hideLayer : o3.showLayer, { layerName: e2 });
    return x("calcite-action", { class: l2.visibleToggle, icon: d2 ? c6 : void 0, key: "visibility-toggle", label: m2, onclick: () => this._toggleVisibility(i2, n2), slot: d2 ? "actions-start" : "actions-end", text: p2, title: m2 }, d2 ? null : x("calcite-icon", { class: this.classes({ [l2.visibleIcon]: "exclusive" !== r2 && a4 }), icon: c6, scale: "s" }));
  }
  get _renderedPanel() {
    const { panel: e2 } = this.item;
    return !e2?.open || e2.disabled || e2.flowEnabled ? null : x("div", { class: this.css.itemContentBottom, key: `content-panel-${e2.uid}`, slot: "content-bottom" }, e2.render());
  }
  get _renderedPanelAction() {
    const { panel: e2 } = this.item;
    if (!e2?.visible) return null;
    const { open: t3, title: i2, disabled: n2 } = e2;
    return x("calcite-action", { active: t3, disabled: n2, icon: a2(e2), key: `action-${e2.uid}`, onclick: () => this._togglePanel(e2), slot: "actions-end", text: i2 ?? "", title: i2 ?? void 0 }, this._renderFallbackIcon(e2));
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
    const { item: e2, messagesCommon: t3 } = this, i2 = t3.options;
    return x("calcite-action-menu", { appearance: "transparent", key: "item-action-menu", label: t3.menu, open: e2.actionsOpen, overlayPositioning: "fixed", placement: "bottom-end", slot: "actions-end", onCalciteActionMenuOpen: this._onActionMenuOpen }, x("calcite-action", { icon: "ellipsis", slot: "trigger", text: i2, title: i2 }), this._renderedActionMenuContent);
  }
  get _renderedActionMenuContent() {
    return this._filteredSections.toArray().map((e2) => x("calcite-action-group", { key: `action-section-${e2.uid}` }, e2.toArray().map((e3) => this._renderAction({ action: e3, textEnabled: true }))));
  }
  get _renderedCatalogFootprintIcon() {
    const { css: e2 } = this, t3 = this.item.layer, i2 = "catalog-footprint" === t3?.type, n2 = "sublayer" === t3?.type && c3(t3, "footprints");
    return "itemCatalogIcon" in e2 && (i2 || n2) ? x("calcite-icon", { class: e2.itemCatalogIcon, icon: "footprint", key: "footprint", scale: "s", slot: "content-start" }) : null;
  }
  get _renderedCatalogDynamicIcon() {
    const { css: e2 } = this, t3 = this.item.layer, i2 = "catalog-dynamic-group" === t3?.type, n2 = "sublayer" === t3?.type && c3(t3, "layers-in-view");
    return "itemCatalogIcon" in e2 && (i2 || n2) ? x("calcite-icon", { class: e2.itemCatalogIcon, icon: "catalog-dataset", key: "catalog-dataset", scale: "s", slot: "content-start" }) : null;
  }
  get _renderedCatalogSelectNode() {
    const { _title: e2, item: t3, visibleElements: i2 } = this;
    if (!("visible" in t3)) return;
    const { layer: n2 } = t3, o3 = "catalog-dynamic-group" === n2?.type;
    return "catalogLayerList" in i2 && i2.catalogLayerList && o3 ? x("calcite-action", { disabled: !n2.visible, icon: "chevron-right", iconFlipRtl: true, onclick: () => this._triggerOnCatalogOpen(t3), slot: "actions-end", text: e2 }) : null;
  }
  get _renderedChildList() {
    const { dragEnabled: e2, item: t3, rootGroupUid: i2, listModeDisabled: n2, selectionMode: o3, displayMode: s2 } = this;
    if (!("children" in t3)) return;
    const l2 = [...this.parentTitles ?? [], t3.title], { children: a4, layer: r2 } = t3, c6 = "catalog-dynamic-group" !== r2?.type && w3(t3), u2 = !n2 && l(r2), g2 = "group" === r2?.type, y2 = !u2 && !c6 && e2 && g2, h2 = !!e2 && ("childrenSortable" in t3 && t3.childrenSortable && y(t3));
    return c6 || y2 ? x("calcite-list", { canPull: (e3) => !!this.canMove && this.canMove(e3, "pull"), canPut: (e3) => !!this.canMove && this.canMove(e3, "put"), "data-item": t3, "data-layer-type": i2, displayMode: s2, dragEnabled: h2, group: g2 ? i2 : `${i2}-${r2?.uid}`, key: `child-list-${r2?.uid}`, label: t3.title, selectionAppearance: "border", selectionMode: o3 }, a4?.filter((e3) => !e3.hidden && (this.visibleElements.errors || !e3.error)).toArray().map((e3) => this._renderItem(e3, t3, l2)), this._renderedTablesItem) : null;
  }
  get _hasTables() {
    const { layerTablesEnabled: e2 } = this, t3 = this.item.layer;
    if (!e2 || !t3) return false;
    switch (t3.type) {
      case "knowledge-graph":
        return e2.includes(t3.type) && "tables" in t3 && !!t3.tables?.length;
      case "map-image":
      case "tile":
        return e2.includes(t3.type) && "subtables" in t3 && !!t3.subtables?.length;
      default:
        return false;
    }
  }
  get _renderedTablesItem() {
    const { item: e2, messages: t3, css: i2 } = this, { layer: n2 } = e2;
    return "itemTableIcon" in i2 && "visible" in e2 && "tables" in t3 && this._hasTables ? x("calcite-list-item", { class: i2.item, "data-layer-id": n2?.id, dragDisabled: true, key: `list-item-table-list-tables-${n2?.uid}`, label: t3.tables, title: t3.tables, onCalciteListItemSelect: () => this._triggerOnTablesOpen(e2) }, x("calcite-icon", { class: i2.itemTableIcon, icon: "table", scale: "s", slot: "content-start" }), x("calcite-icon", { flipRtl: true, icon: "chevron-right", scale: "s", slot: "content-end" })) : null;
  }
  get _renderedItemMessage() {
    const { item: e2, messages: t3, css: i2 } = this;
    return e2.error ? x("div", { class: i2.itemMessage, key: "esri-layer-list__error", slot: "content-bottom" }, x("calcite-notice", { icon: "exclamation-mark-triangle", kind: "warning", open: true, scale: "s", width: "full" }, x("div", { slot: "message" }, "tableError" in t3 ? t3.tableError : t3.layerError))) : "incompatible" in e2 && e2.incompatible && "layerIncompatible" in t3 ? x("div", { class: i2.itemMessage, key: "esri-layer-list__incompatible", slot: "content-bottom" }, x("calcite-notice", { afterCreate: this._setTooltipReference, afterRemoved: this._removeTooltipReference, bind: this, icon: "exclamation-mark-triangle", kind: "warning", open: true, scale: "s", tabIndex: 0, width: "full" }, x("div", { slot: "message" }, t3.layerIncompatible))) : null;
  }
  get _singleAction() {
    return this._renderAction({ action: k(this._filteredSections), textEnabled: false });
  }
  get _filteredSections() {
    return this.item.actionsSections.map((e2) => e2.filter((e3) => e3.visible));
  }
  get _actionsCount() {
    return this.item.actionsSections.reduce((e2, t3) => e2 + t3.length, 0);
  }
  _renderAction(e2) {
    const { item: t3 } = this, { action: i2, textEnabled: n2 } = e2;
    if (!i2) return null;
    const { active: o3, disabled: s2, title: a4, type: r2, indicator: c6 } = i2;
    return x("calcite-action", { active: "toggle" === r2 && i2.value, "data-action-id": i2.id, disabled: s2, icon: a2(i2), indicator: c6, key: `action-${i2.uid}`, loading: o3, onclick: () => this._triggerAction(t3, i2), slot: n2 ? void 0 : "actions-end", text: a4 ?? "", textEnabled: n2, title: a4 ?? void 0 }, this._renderFallbackIcon(i2));
  }
  _renderFallbackIcon(e2) {
    const { css: t3 } = this, { icon: i2 } = e2, n2 = "className" in e2 ? e2.className : void 0;
    if (i2) return null;
    const o3 = "image" in e2 ? e2.image : void 0, s2 = { [t3.itemActionIcon]: !!n2, [t3.itemActionImage]: !!o3 };
    return n2 && (s2[n2] = true), o3 || n2 ? x("span", { "aria-hidden": "true", class: this.classes(t3.itemActionIcon, s2), key: "icon", styles: c4(o3) }) : null;
  }
  _renderItem(e2, t3, i2 = []) {
    return x(_, { activeItem: this.activeItem, canMove: this.canMove, css: this.css, displayMode: this.displayMode, dragEnabled: this.dragEnabled, item: e2, key: `layerListItem-${e2.layer?.uid}`, layerTablesEnabled: this.layerTablesEnabled, listModeDisabled: this.listModeDisabled, messages: this.messages, messagesCommon: this.messagesCommon, parent: t3, parentTitles: i2, rootGroupUid: this.rootGroupUid, selectedDragItemLayerUid: this.selectedDragItemLayerUid, selectedItems: this.selectedItems, selectionMode: this.selectionMode, visibilityAppearance: this.visibilityAppearance, visibleElements: this.visibleElements, onAction: this.onAction, onCatalogOpen: this.onCatalogOpen, onPanelOpen: this.onPanelOpen, onSelectedDragItemLayerUidChange: this.onSelectedDragItemLayerUidChange, onTablesOpen: this.onTablesOpen, onTooltipReferenceChange: this.onTooltipReferenceChange });
  }
  _triggerAction(e2, t3) {
    t3 && e2 && ("toggle" === t3.type && (t3.value = !t3.value), this.onAction(t3, e2));
  }
  _triggerOnTablesOpen(e2) {
    e2 && this.onTablesOpen && this.onTablesOpen(e2);
  }
  _triggerOnCatalogOpen(e2) {
    e2 && this.onCatalogOpen?.(e2);
  }
  _focusSelectedDragEl(e2, t3) {
    this.selectedDragItemLayerUid === t3.layer?.uid && (w(e2), this.onSelectedDragItemLayerUidChange?.(null));
  }
  _handleCalciteListItemToggle(e2, t3) {
    e2.stopPropagation(), t3.open = e2.target.expanded;
  }
  _getParentVisibilityMode(e2) {
    return e2 && "visibilityMode" in e2 ? e2.visibilityMode : null;
  }
  _handleCalciteListItemSelect(e2, t3, i2) {
    if (N(e2.target) !== t3) return;
    const n2 = this._getParentVisibilityMode(i2);
    "none" === this.selectionMode && "inherited" !== n2 && this._toggleVisibility(t3, i2);
  }
  _togglePanel(e2) {
    e2.open = !e2.open, e2.open && this.onPanelOpen();
  }
  _toggleVisibility(e2, t3) {
    if (!e2 || !("visible" in e2)) return;
    "exclusive" === this._getParentVisibilityMode(t3) && e2.visible || (e2.visible = !e2.visible);
  }
};
__decorate([a()], I.prototype, "activeItem", void 0), __decorate([a()], I.prototype, "canMove", void 0), __decorate([a()], I.prototype, "css", void 0), __decorate([a()], I.prototype, "displayMode", void 0), __decorate([a()], I.prototype, "dragEnabled", void 0), __decorate([a()], I.prototype, "dragDisabled", void 0), __decorate([a()], I.prototype, "item", void 0), __decorate([a()], I.prototype, "layerTablesEnabled", void 0), __decorate([a()], I.prototype, "listModeDisabled", void 0), __decorate([a()], I.prototype, "messages", void 0), __decorate([a()], I.prototype, "messagesCommon", void 0), __decorate([a()], I.prototype, "onAction", void 0), __decorate([a()], I.prototype, "onPanelOpen", void 0), __decorate([a()], I.prototype, "onCatalogOpen", void 0), __decorate([a()], I.prototype, "onTablesOpen", void 0), __decorate([a()], I.prototype, "onSelectedDragItemLayerUidChange", void 0), __decorate([a()], I.prototype, "onTooltipReferenceChange", void 0), __decorate([a()], I.prototype, "parent", void 0), __decorate([a()], I.prototype, "parentTitles", void 0), __decorate([a()], I.prototype, "rootGroupUid", void 0), __decorate([a()], I.prototype, "selectionMode", void 0), __decorate([a()], I.prototype, "selectedItems", void 0), __decorate([a()], I.prototype, "selectedDragItemLayerUid", void 0), __decorate([a()], I.prototype, "visibleElements", void 0), __decorate([a()], I.prototype, "visibilityAppearance", void 0), __decorate([a()], I.prototype, "_title", null), __decorate([a()], I.prototype, "_renderedItemStatus", null), __decorate([a()], I.prototype, "_renderedItemTemporaryIcon", null), __decorate([a()], I.prototype, "_renderedItemToggle", null), __decorate([a()], I.prototype, "_renderedPanel", null), __decorate([a()], I.prototype, "_renderedPanelAction", null), __decorate([a()], I.prototype, "_renderedActions", null), __decorate([a()], I.prototype, "_renderedActionMenu", null), __decorate([a()], I.prototype, "_renderedActionMenuContent", null), __decorate([a()], I.prototype, "_renderedCatalogFootprintIcon", null), __decorate([a()], I.prototype, "_renderedCatalogDynamicIcon", null), __decorate([a()], I.prototype, "_renderedCatalogSelectNode", null), __decorate([a()], I.prototype, "_renderedChildList", null), __decorate([a()], I.prototype, "_hasTables", null), __decorate([a()], I.prototype, "_renderedTablesItem", null), __decorate([a()], I.prototype, "_renderedItemMessage", null), __decorate([a()], I.prototype, "_singleAction", null), __decorate([a()], I.prototype, "_filteredSections", null), __decorate([a()], I.prototype, "_actionsCount", null), I = _ = __decorate([c("esri.widgets.LayerList.LayerListItem")], I);
var C = I;

// node_modules/@arcgis/core/widgets/support/listUtils.js
var t2 = ["label", "description", "metadata"];

export {
  i,
  e,
  u,
  a3 as a,
  s,
  d,
  f,
  p,
  b,
  v,
  h,
  m,
  x2 as x,
  N,
  q,
  C,
  t2 as t
};
//# sourceMappingURL=chunk-VFGNTT7R.js.map
