import {
  p as p2
} from "./chunk-XDB4VVVR.js";
import {
  r
} from "./chunk-6R3QVCJR.js";
import {
  qe
} from "./chunk-DPC4S3UO.js";
import {
  g
} from "./chunk-KMP54B7A.js";
import {
  b as b2,
  g as g2
} from "./chunk-SCB6GXME.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  e as e2
} from "./chunk-JTZ7OXNS.js";
import {
  j
} from "./chunk-PF33M5XM.js";
import {
  o
} from "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  p
} from "./chunk-E4TLNY2F.js";
import {
  h,
  l as l2
} from "./chunk-M44GXGOJ.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  L,
  y
} from "./chunk-WARIPJQI.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations/resources.js
var o2 = { fromGlobalId: "fromglobalid", fromNetworkSourceId: "fromnetworksourceid", fromTerminalId: "fromterminalid", toGlobalId: "toglobalid", toNetworkSourceId: "tonetworksourceid", toTerminalId: "toterminalid", associationType: "associationtype", globalId: "globalid", status: "status", isContentVisible: "iscontentvisible", percentAlong: "percentalong", assetGroup: "assetgroup", assetType: "assettype" };

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/getFeatureTitle.js
function t(t2) {
  const { attributes: l3, sourceLayer: n } = t2;
  if (!l3 || !n) return "";
  const e4 = "displayField" in n ? n.displayField : null, i = null != e4 ? l3[e4] : null, r2 = null != i ? i.toString() : null, u = t2.getObjectId()?.toString();
  return r2 || u || "";
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/FeatureUtilityNetworkAssociationsViewModel.js
var I = 100;
var v = class extends l(o(b)) {
  constructor(t2) {
    super(t2), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.networkSourceIdsInUse = /* @__PURE__ */ new Set(), this.source = "popup", this.description = null, this.graphic = null, this.layer = null, this.map = null, this.featureCount = 0, this.associationTypes = null, this.showAllEnabled = false, this.title = null, this.attachmentsFeatureCount = 0, this.structureFeatureCount = 0, this.contentFeatureCount = 0, this.containerFeatureCount = 0, this.connectivityFeatureCount = 0, this._queryOpenAssociationType = async () => {
      this.activeAssociationType && await this._queryDebounced(this.activeAssociationType);
    }, this._cancelQuery = () => {
      const { _queryAbortController: t3 } = this;
      t3 && t3.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: t3 } = this;
      t3 && t3.abort(), this._queryFeatureCountAbortController = null;
    }, this._queryController = async (t3) => {
      this._cancelQuery();
      const e4 = new AbortController();
      this._queryAbortController = e4, await y(this._query(t3)), this._queryAbortController === e4 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const t3 = new AbortController();
      this._queryFeatureCountAbortController = t3, await y(this._queryFeatureCount()), this._queryFeatureCountAbortController === t3 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryDebounced = L(this._queryController, I), this._queryFeatureCountDebounced = L(this._queryFeatureCountController, I);
  }
  initialize() {
    this.addHandles([l2(() => [this.graphic, this.layer, this.map, this.associationTypes, this.objectId, this.globalId, this.canQuery], () => {
      this.refresh();
    }, h), l2(() => this.activeAssociationType, (t2) => {
      this._queryDebounced(t2);
    }, h)]);
  }
  destroy() {
    this._cancelQuery(), this._cancelQueryFeatureCount(), this._destroyAssociatedFeatureViewModels();
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.query?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && !!this.associationTypes && "string" == typeof this.globalId;
  }
  get canQuery() {
    const t2 = this.layer?.capabilities?.query;
    return !!this.associationTypes && "string" == typeof this.globalId && !!t2?.supportsPagination;
  }
  set displayCount(t2) {
    const e4 = 0, o3 = 3;
    this._set("displayCount", Math.max(t2 ?? o3, e4));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get globalId() {
    return (this.globalIdField && this.graphic?.attributes?.[this.globalIdField]) ?? null;
  }
  get globalIdField() {
    const { layer: t2 } = this;
    return t2?.globalIdField;
  }
  get activeAssociationType() {
    return this._get("activeAssociationType");
  }
  set activeAssociationType(t2) {
    t2 && !this.associationTypes.includes(t2) || this._set("activeAssociationType", t2);
  }
  get state() {
    const { _queryAbortController: t2, _queryFeatureCountAbortController: e4, _queryPageAbortController: o3, canQuery: r2, _loaded: s, canLoad: i, source: a2 } = this;
    return e4 || i && !s ? "loading" : t2 || o3 ? "querying" : !r2 || "popup" === a2 && 0 === this.featureCount ? "disabled" : "ready";
  }
  get utilityNetwork() {
    const { layer: t2, map: e4 } = this;
    if (!t2?.loaded || !e4) return null;
    const o3 = b2(t2) ? t2.parent : t2;
    return qe(e4, o3);
  }
  get attachmentsAssociations() {
    return this._get("attachmentsAssociations") || new q();
  }
  get structureAssociations() {
    return this._get("structureAssociations") || new q();
  }
  get contentAssociations() {
    return this._get("contentAssociations") || new q();
  }
  get containerAssociations() {
    return this._get("containerAssociations") || new q();
  }
  get connectivityAssociations() {
    return this._get("connectivityAssociations") || new q();
  }
  get associationFeatures() {
    return this._get("associationFeatures") || new e2();
  }
  get associationViewModels() {
    return this._get("associationViewModels") || /* @__PURE__ */ new Map();
  }
  async refresh() {
    await this._queryFeatureCountDebounced(), await this._queryOpenAssociationType();
  }
  getFeatureCountForAssociationType(t2) {
    switch (t2) {
      case "attachment":
        return this.attachmentsFeatureCount;
      case "structure":
        return this.structureFeatureCount;
      case "content":
        return this.contentFeatureCount;
      case "container":
        return this.containerFeatureCount;
      case "connectivity":
        return this.connectivityFeatureCount;
    }
  }
  _destroyAssociatedFeatureViewModels() {
    this.associationViewModels.forEach((t2) => t2.destroyAll());
  }
  async _loadUtiltyNetworks() {
    const t2 = this.map;
    if (!t2) return;
    await Promise.allSettled(t2.utilityNetworks?.map(async (t3) => {
      await t3.load();
    }) ?? []);
    const e4 = this.utilityNetwork;
    if (e4) {
      const o3 = (t3) => {
        if ("layerId" in t3 && e4.isUtilityLayer(t3)) {
          const o4 = null != t3.layerId ? e4.getSourceIdByLayerId(t3.layerId) : null;
          null != o4 && this.networkSourceIdsInUse.add(o4);
        }
      };
      this._set("networkSourceIdsInUse", /* @__PURE__ */ new Set()), t2.allLayers.forEach(o3), t2.allTables.forEach(o3);
    }
  }
  async _findLayersBySourceId(t2) {
    const { utilityNetwork: e4, map: o3 } = this, r2 = (t3) => {
      const o4 = t3;
      if (!t3.url) return false;
      if (o4.layerId === s) {
        return t3.url.replace(/\/\d+$/, "") === e4?.featureServiceUrl;
      }
      return false;
    };
    await e4?.load();
    const s = e4.getLayerIdBySourceId(t2), i = o3.allLayers.filter(r2), a2 = o3.allTables.filter(r2), n = i.concat(a2).toArray();
    return await Promise.allSettled(n.map((t3) => t3.load())), n;
  }
  _clearAssociations() {
    this.attachmentsAssociations.removeAll(), this.structureAssociations.removeAll(), this.contentAssociations.removeAll(), this.containerAssociations.removeAll(), this.connectivityAssociations.removeAll();
  }
  _clearFeatures() {
    this.associationFeatures.forEach((t2) => t2.removeAll()), this.associationFeatures.clear();
  }
  _getAssociationsByType(t2) {
    switch (t2) {
      case "attachment":
        return this.attachmentsAssociations;
      case "structure":
        return this.structureAssociations;
      case "connectivity":
        return this.connectivityAssociations;
      case "container":
        return this.containerAssociations;
      case "content":
        return this.contentAssociations;
    }
  }
  async _queryLayer(t2, e4, o3, r2, s) {
    const i = this._getFeatureQueryWhereClause(t2, e4, o3, r2), a2 = new R({ where: i, outFields: ["*"], cacheHint: this.supportsCacheHint }), n = g.fromJSON(await r(t2, a2, s));
    return n.features.forEach((e5) => {
      e5.layer = e5.sourceLayer = g2(t2) ? t2.findSublayerForFeature(e5) : t2;
    }), n.features;
  }
  async _createAssociationFeatureObjects(t2, e4, o3, r2, s, i) {
    if (0 === t2.length) return [];
    const a2 = /* @__PURE__ */ new Map();
    for (const [c2, l3] of e4) {
      const t3 = await this._findLayersBySourceId(c2);
      for (const e5 of t3) {
        (await this._queryLayer(e5, l3, r2, s, i)).forEach((t4) => {
          if ("popup" === this.source ? t4.sourceLayer && t4.getEffectivePopupTemplate() : !!t4.sourceLayer) {
            const o4 = a2.get(t4.attributes[e5.globalIdField]) ?? [];
            o4.push(t4), a2.set(t4.attributes[e5.globalIdField], o4);
          }
        });
      }
    }
    const n = [];
    return await Promise.all(t2.toArray().map(async (t3) => {
      const { fromNetworkElement: e5, toNetworkElement: r3 } = t3, s2 = e5.globalId === o3 ? r3 : e5, i2 = a2.get(s2.globalId) ?? [];
      await Promise.all(i2.map(async (e6) => {
        const o4 = null != s2?.terminalId ? this.utilityNetwork?.getTerminalById(s2.terminalId)?.name : void 0, r4 = e6.sourceLayer && "getFeatureTitle" in e6.sourceLayer && await e6.sourceLayer.getFeatureTitle(e6) || t(e6);
        n.push({ title: r4, feature: e6, association: t3, terminalName: o4 });
      }));
    })), n;
  }
  _parseFeatureObjects(t2, e4) {
    const o3 = /* @__PURE__ */ new Map();
    t2.forEach((t3) => {
      const e5 = t3?.feature, r2 = e5.sourceLayer;
      e(o3, r2, () => new q()).add(t3);
    });
    for (const [r2, s] of o3) this._sortFeatureObjectsByTitle(s), e4.set(r2, s);
  }
  _sortFeatureObjectsByTitle(t2) {
    t2.sort(this._compareByFeatureTitle);
  }
  _compareByFeatureTitle(t2, e4) {
    return t2.title.localeCompare(e4.title, void 0, { numeric: true });
  }
  async _queryAssociations(t2) {
    const { layer: e4, globalId: o3, associationTypes: r2, utilityNetwork: s, canQuery: i } = this;
    if (await Promise.allSettled([e4?.load(), s?.load()]), this._clearAssociations(), !(i && e4 && r2 && s && o3)) return;
    const a2 = b2(e4) ? e4.parent : e4, n = new p2({ globalId: o3, networkSourceId: s.getSourceIdByLayerId(a2.layerId) }), c2 = /* @__PURE__ */ new Set();
    r2.forEach((t3) => {
      switch (t3.type) {
        case "attachment":
        case "structure":
          c2.add("attachment");
          break;
        case "container":
        case "content":
          c2.add("containment");
          break;
        case "connectivity":
          c2.add("connectivity"), c2.add("junction-junction-connectivity"), c2.add("junction-edge-from-connectivity"), c2.add("junction-edge-midspan-connectivity"), c2.add("junction-edge-to-connectivity");
      }
    });
    const l3 = await s?.queryAssociations({ elements: [n], types: Array.from(c2) }, { signal: t2?.signal }), u = /* @__PURE__ */ new Map(), y2 = /* @__PURE__ */ new Map();
    r2.forEach((t3) => {
      y2.set(t3.type, t3), u.set(t3.type, []);
    }), l3.forEach((t3) => {
      const { toNetworkElement: e5, fromNetworkElement: r3 } = t3;
      switch (t3.associationType) {
        case "connectivity":
        case "junction-junction-connectivity":
        case "junction-edge-from-connectivity":
        case "junction-edge-midspan-connectivity":
        case "junction-edge-to-connectivity":
          if (r3?.globalId === o3) {
            if (this._shouldDiscardNetworkElement(e5, "connectivity", y2)) break;
            u.get("connectivity")?.push(e5.globalId);
          } else {
            if (this._shouldDiscardNetworkElement(r3, "connectivity", y2)) break;
            u.get("connectivity")?.push(r3.globalId);
          }
          this.connectivityAssociations.add(t3);
          break;
        case "containment":
          if (r3?.globalId === o3) {
            if (this._shouldDiscardNetworkElement(e5, "content", y2)) break;
            u.get("content")?.push(e5.globalId), this.contentAssociations.add(t3);
          } else {
            if (this._shouldDiscardNetworkElement(r3, "container", y2)) break;
            u.get("container")?.push(r3.globalId), this.containerAssociations.add(t3);
          }
          break;
        case "attachment":
          if (r3?.globalId === o3) {
            if (this._shouldDiscardNetworkElement(e5, "attachment", y2)) break;
            u.get("attachment")?.push(e5.globalId), this.attachmentsAssociations.add(t3);
          } else {
            if (this._shouldDiscardNetworkElement(r3, "structure", y2)) break;
            u.get("structure")?.push(r3.globalId), this.structureAssociations.add(t3);
          }
      }
    });
    const d = r2.map(async (e5) => {
      const { associatedNetworkSourceId: o4, associatedAssetGroup: r3, associatedAssetType: s2 } = e5, i2 = u.get(e5.type), a3 = null != r3 ? await this._countAssociatedFeatures(o4, i2, r3, s2, t2) : i2.length;
      switch (e5.type) {
        case "attachment":
          this._set("attachmentsFeatureCount", a3);
          break;
        case "structure":
          this._set("structureFeatureCount", a3);
          break;
        case "content":
          this._set("contentFeatureCount", a3);
          break;
        case "container":
          this._set("containerFeatureCount", a3);
          break;
        case "connectivity":
          this._set("connectivityFeatureCount", a3);
      }
    });
    await Promise.allSettled(d);
  }
  async _countAssociatedFeatureCount(t2, e4, o3, r2, s) {
    const i = this._getFeatureQueryWhereClause(t2, e4, o3, r2);
    return t2.queryFeatureCount({ where: i, outFields: ["*"], returnGeometry: false }, { signal: s?.signal });
  }
  async _countAssociatedFeatures(t2, e4, o3, r2, s) {
    if (0 === e4.length) return 0;
    const i = (await this._findLayersBySourceId(t2)).map(async (t3) => this._countAssociatedFeatureCount(t3, e4, o3, r2, s));
    return (await Promise.all(i)).reduce((t3, e5) => t3 + e5, 0);
  }
  async _queryAssociatedFeatures(t2, e4) {
    const { layer: o3, globalId: r2, associationTypes: s, utilityNetwork: i, canQuery: a2, associationFeatures: n } = this;
    if (await Promise.allSettled([o3?.load(), i?.load()]), !(a2 && o3 && s && i)) return;
    const c2 = this._getAssociationsByType(t2.type), { associatedAssetGroup: l3, associatedAssetType: u } = t2, y2 = /* @__PURE__ */ new Map();
    c2.forEach((t3) => {
      const { fromNetworkElement: e5, toNetworkElement: o4 } = t3, { networkSourceId: s2, elementGlobalId: i2 } = e5.globalId === r2 ? { networkSourceId: o4.networkSourceId, elementGlobalId: o4.globalId } : { networkSourceId: e5.networkSourceId, elementGlobalId: e5.globalId }, a3 = y2.get(s2) || [];
      a3.push(i2), y2.set(s2, a3);
    });
    const d = await this._createAssociationFeatureObjects(c2, y2, r2, l3, u, e4);
    this._parseFeatureObjects(d, n);
  }
  async _queryFeatureCount() {
    await this._loadUtiltyNetworks();
    const { _queryFeatureCountAbortController: t2, canQuery: e4 } = this;
    e4 ? (await this._queryAssociations(t2), this._set("featureCount", this.attachmentsFeatureCount + this.structureFeatureCount + this.contentFeatureCount + this.containerFeatureCount + this.connectivityFeatureCount)) : this._set("featureCount", 0);
  }
  async _query(t2) {
    if (!t2) return;
    await this._loadUtiltyNetworks();
    const { _queryAbortController: e4 } = this;
    this._destroyAssociatedFeatureViewModels(), this._clearFeatures(), 0 !== this.featureCount && (this.destroyed || await this._queryAssociatedFeatures(t2, { signal: e4?.signal }));
  }
  _shouldDiscardNetworkElement(t2, e4, o3) {
    if (!t2) return false;
    const { networkSourceIdsInUse: r2 } = this, { networkSourceId: s } = t2, i = o3.get(e4)?.associatedNetworkSourceId, a2 = r2.has(s);
    return null != i && i !== s || !a2;
  }
  _getFeatureQueryWhereClause(t2, e4, o3, r2) {
    const s = t2.globalIdField, i = t2.fieldsIndex.get(o2.assetGroup), a2 = t2.fieldsIndex.get(o2.assetType), n = null != o3, c2 = null != r2;
    return [s ? p(s, e4) : null, n ? `(${i?.name} = ${o3})` : null, n && c2 ? `(${a2?.name} = ${r2})` : null].filter(Boolean).join(" AND ");
  }
};
__decorate([a()], v.prototype, "_loaded", void 0), __decorate([a()], v.prototype, "_queryAbortController", void 0), __decorate([a()], v.prototype, "_queryPageAbortController", void 0), __decorate([a()], v.prototype, "_queryFeatureCountAbortController", void 0), __decorate([a({ readOnly: true })], v.prototype, "supportsCacheHint", null), __decorate([a({ readOnly: true })], v.prototype, "canLoad", null), __decorate([a({ readOnly: true })], v.prototype, "canQuery", null), __decorate([a()], v.prototype, "networkSourceIdsInUse", void 0), __decorate([a({ constructOnly: true })], v.prototype, "source", void 0), __decorate([a()], v.prototype, "description", void 0), __decorate([a({ value: 3 })], v.prototype, "displayCount", null), __decorate([a({ type: j })], v.prototype, "graphic", void 0), __decorate([a()], v.prototype, "layer", void 0), __decorate([a()], v.prototype, "map", void 0), __decorate([a({ readOnly: true })], v.prototype, "objectId", null), __decorate([a({ readOnly: true })], v.prototype, "objectIdField", null), __decorate([a({ readOnly: true })], v.prototype, "globalId", null), __decorate([a({ readOnly: true })], v.prototype, "globalIdField", null), __decorate([a()], v.prototype, "featureCount", void 0), __decorate([a()], v.prototype, "associationTypes", void 0), __decorate([a()], v.prototype, "activeAssociationType", null), __decorate([a()], v.prototype, "showAllEnabled", void 0), __decorate([a()], v.prototype, "state", null), __decorate([a()], v.prototype, "title", void 0), __decorate([a({ readOnly: true })], v.prototype, "utilityNetwork", null), __decorate([a({ readOnly: true })], v.prototype, "attachmentsFeatureCount", void 0), __decorate([a({ readOnly: true })], v.prototype, "structureFeatureCount", void 0), __decorate([a({ readOnly: true })], v.prototype, "attachmentsAssociations", null), __decorate([a({ readOnly: true })], v.prototype, "structureAssociations", null), __decorate([a({ readOnly: true })], v.prototype, "contentFeatureCount", void 0), __decorate([a({ readOnly: true })], v.prototype, "containerFeatureCount", void 0), __decorate([a({ readOnly: true })], v.prototype, "contentAssociations", null), __decorate([a({ readOnly: true })], v.prototype, "containerAssociations", null), __decorate([a({ readOnly: true })], v.prototype, "connectivityFeatureCount", void 0), __decorate([a({ readOnly: true })], v.prototype, "connectivityAssociations", null), __decorate([a({ readOnly: true })], v.prototype, "associationFeatures", null), __decorate([a({ readOnly: true })], v.prototype, "associationViewModels", null), v = __decorate([c("esri.widgets.support.UtilityNetworkAssociations.FeatureUtilityNetworkAssociationsViewModel")], v);

// node_modules/@arcgis/core/widgets/support/globalCss.js
var e3 = { anchor: "esri-widget__anchor", anchorDisabled: "esri-widget__anchor--disabled", button: "esri-button", buttonDisabled: "esri-button--disabled", buttonHalf: "esri-button--half", buttonSecondary: "esri-button--secondary", buttonSmall: "esri-button--small", buttonTertiary: "esri-button--tertiary", buttonThird: "esri-button--third", disabled: "esri-disabled", empty: "esri-widget__content--empty", emptyIllustration: "esri-widget__content-illustration--empty", heading: "esri-widget__heading", hidden: "esri-hidden", input: "esri-input", interactive: "esri-interactive", loader: "esri-widget__loader", loaderAnimation: "esri-widget__loader-animation", loaderText: "esri-widget__loader-text", menu: "esri-menu", menuHeader: "esri-menu__header", menuItem: "esri-menu__list-item", menuItemActive: "esri-menu__list-item--active", menuItemFocus: "esri-menu__list-item--focus", menuList: "esri-menu__list", panel: "esri-widget--panel", panelHeightOnly: "esri-widget--panel-height-only", primaryTick: "primary-tick", primaryTickAmPm: "primary-tick__ampm", primaryTickLabel: "primary-tick__label", primaryTickLabelKeepAll: "primary-tick__label--keep-all", rotating: "esri-rotating", secondaryTick: "secondary-tick", select: "esri-select", table: "esri-widget__table", widget: "esri-widget", widgetButton: "esri-widget--button", widgetButtonActive: "esri-widget--button-active", widgetDisabled: "esri-widget--disabled" };

export {
  v,
  e3 as e
};
//# sourceMappingURL=chunk-VVZ4EXVP.js.map
