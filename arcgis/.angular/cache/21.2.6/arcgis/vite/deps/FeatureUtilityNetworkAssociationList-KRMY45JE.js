import {
  s
} from "./chunk-GHJG43QY.js";
import {
  v as v2
} from "./chunk-5UA6OBP7.js";
import "./chunk-JC7XDG6V.js";
import "./chunk-GOI7BN2L.js";
import "./chunk-FR4Y7EWL.js";
import "./chunk-5XBFAIUN.js";
import "./chunk-H3GWORLU.js";
import "./chunk-L3NTTNVH.js";
import "./chunk-QEI2MEKM.js";
import "./chunk-PYMCJBOT.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
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
import "./chunk-U5JSZZKS.js";
import "./chunk-HRIRTSFQ.js";
import "./chunk-PPIEL5GF.js";
import "./chunk-FCVEMPGG.js";
import "./chunk-S4XOMMCM.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-D5MS4RFG.js";
import "./chunk-UOTNWVQN.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MK2KB2KA.js";
import "./chunk-NIXSIW3X.js";
import "./chunk-DZN3R4UM.js";
import "./chunk-OD52MENG.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-ZPAQA4G3.js";
import "./chunk-WLCIR5JN.js";
import "./chunk-OFIL7BYT.js";
import "./chunk-M3PLR22U.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-QU4UZ7C2.js";
import "./chunk-HKOFZI3I.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import {
  v,
  x
} from "./chunk-VMH5X3M4.js";
import "./chunk-NRIYMVEQ.js";
import "./chunk-OWMNTHDK.js";
import "./chunk-T6F4SXOT.js";
import "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-U3CRXBTW.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-DHP63IFT.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import {
  h,
  w
} from "./chunk-DESITEXU.js";
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
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
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
  i3 as i
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-K65EA25C.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/UtilityNetworkAssociationList.js
var l2 = "esri-utility-network-association-list";
var p = { featureObserver: `${l2}__feature-observer`, limitNoticeContainer: `${l2}__limit-notice-container`, loadingContainer: `${l2}__loading-container` };
var m = class extends O {
  constructor(e3, t) {
    super(e3, t), this._isFeatureCountNoticeOpen = true, this._observer = new IntersectionObserver(([e4]) => {
      e4?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this._observerNode = null, this.featuresPerPage = 50, this.headingLevel = 5, this.maxFeatureCount = 1e3, this.messagesFeature = null, this.messagesCommon = null, this.selectedLayer = null, this.tooltipReferenceMap = new e(), this.viewModel = new v2();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ icon: () => import("./calcite-icon-ICSG7HN4.js"), loader: () => import("./calcite-loader-T4MHPK6O.js"), notice: () => import("./calcite-notice-LV7BXQCP.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  get associatedFeatureCount() {
    const e3 = this.viewModel.associationViewModels, t = this.selectedLayer ? e3.get(this.selectedLayer) : null;
    return t ? t.length : 0;
  }
  set currentFeaturePage(e3) {
    const { featuresPerPage: t, associatedFeatureCount: o } = this, i2 = Math.ceil(o / t) || 1, r = Math.max(Math.min(e3, i2), 1);
    this._set("currentFeaturePage", r);
  }
  get currentFeaturePage() {
    return this._get("currentFeaturePage") ?? 1;
  }
  get endIndex() {
    const { currentFeaturePage: e3, featuresPerPage: t, maxFeatureCount: o } = this;
    return Math.min(e3 * t, o);
  }
  renderConnectivityIcon(e3, t) {
    const { tooltipReferenceMap: o } = this;
    let i2;
    switch (e3) {
      case "junction-edge-from-connectivity":
        i2 = "connection-end-left";
        break;
      case "junction-edge-to-connectivity":
        i2 = "connection-end-right";
        break;
      case "junction-edge-midspan-connectivity":
        i2 = "connection-middle";
        break;
      default:
        i2 = "connection-to-connection";
    }
    return x("calcite-icon", { afterCreate: (e4) => o.set(t, e4), afterRemoved: () => o.delete(t), icon: i2, scale: "s", slot: "content-start" });
  }
  renderFeatureCountWarning() {
    const { associatedFeatureCount: e3, maxFeatureCount: o, messagesFeature: i2 } = this;
    return e3 > o ? x("calcite-notice", { class: this._isFeatureCountNoticeOpen ? p.limitNoticeContainer : void 0, closable: true, icon: "information", kind: "info", open: true, scale: "s", width: "full", onCalciteNoticeBeforeOpen: () => this._isFeatureCountNoticeOpen = true, onCalciteNoticeClose: () => this._isFeatureCountNoticeOpen = false }, x("div", { slot: "title" }, i2.associationsLimitNoticeTitle), x("div", { slot: "message" }, w(i2.associationsLimitNoticeMessage, { number: o }))) : null;
  }
  renderFeatureObserver() {
    return x("div", { afterCreate: this._onObserverCreate, bind: this, class: p.featureObserver, key: "feature-observer" });
  }
  renderLoading() {
    return x("div", { class: p.loadingContainer, key: "loading-container" }, this.renderLoadingIcon());
  }
  renderLoadingIcon() {
    return x("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  getConnectivityTooltip(e3) {
    const { messagesFeature: t } = this;
    switch (e3) {
      case "connectivity":
      case "junction-junction-connectivity":
        return t.associationsJunctionJunction;
      case "junction-edge-from-connectivity":
        return t.associationsJunctionEdgeFrom;
      case "junction-edge-midspan-connectivity":
        return t.associationsJunctionEdgeMidspan;
      case "junction-edge-to-connectivity":
        return t.associationsJunctionEdgeTo;
      default:
        return "";
    }
  }
  setUpObserver() {
    this.addHandles(l(() => this._observerNode, () => this._onObserverChange()));
  }
  _increaseFeaturePage() {
    this.currentFeaturePage++;
  }
  _onObserverChange() {
    this._observerNode && this._observer.unobserve(this._observerNode);
    const { state: e3, showAllEnabled: t } = this.viewModel;
    this._observerNode && "ready" === e3 && t && this._observer.observe(this._observerNode);
  }
  _onObserverCreate(e3) {
    this._observerNode = e3;
  }
};
__decorate([a()], m.prototype, "_observer", void 0), __decorate([a()], m.prototype, "_observerNode", void 0), __decorate([a()], m.prototype, "associatedFeatureCount", null), __decorate([a()], m.prototype, "currentFeaturePage", null), __decorate([a()], m.prototype, "endIndex", null), __decorate([a()], m.prototype, "featuresPerPage", void 0), __decorate([a()], m.prototype, "headingLevel", void 0), __decorate([a()], m.prototype, "maxFeatureCount", void 0), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], m.prototype, "messagesFeature", void 0), __decorate([a(), v("esri/t9n/common")], m.prototype, "messagesCommon", void 0), __decorate([a()], m.prototype, "selectedLayer", void 0), __decorate([a()], m.prototype, "tooltipReferenceMap", void 0), __decorate([a({ type: v2 })], m.prototype, "viewModel", void 0), m = __decorate([c("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")], m);

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/formatPercentAlong.js
function n(n4) {
  const { percentAlong: r } = n4;
  return null == r ? "" : h(r, { style: "percent", maximumFractionDigits: 2 });
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivity.js
function n2(n4) {
  const { associationType: t } = n4;
  return "connectivity" === t || "junction-junction-connectivity" === t || "junction-edge-from-connectivity" === t || "junction-edge-midspan-connectivity" === t || "junction-edge-to-connectivity" === t;
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivityMidspan.js
function n3(n4) {
  return "junction-edge-midspan-connectivity" === n4.associationType;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociationList.js
var h2;
var w2 = "esri-feature-utility-network-associations";
var y = { base: w2, listItemHidden: `${w2}__list-item--hidden` };
var f = "nested";
var b = h2 = class extends m {
  constructor(e3, t) {
    super(e3, t), this.description = null, this.flowItems = null, this.flowType = "feature-utility-network-association-type", this.listType = null, this.parentFeatureViewModel = null, this.title = null, this.viewModel = new v2(), this.visibleElements = new s();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ chip: () => import("./calcite-chip-IDNPJPXB.js"), icon: () => import("./calcite-icon-ICSG7HN4.js"), list: () => import("./calcite-list-C3K3UNHH.js"), "list-item": () => import("./calcite-list-item-EMWTYT2C.js"), tooltip: () => import("./calcite-tooltip-AGB6SHP6.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  render() {
    const e3 = this.viewModel.associationViewModels, { state: t, showAllEnabled: i2 } = this.viewModel, { state: s2 } = this.parentFeatureViewModel ?? {};
    return x("div", { class: this.classes(y.base, e2.widget) }, "loading" === t || "querying" === t || "loading" === s2 ? this.renderLoading() : i2 && this.selectedLayer ? x("calcite-list", { displayMode: f, filterEnabled: true, filterLabel: this.messagesFeature.associationFilterPlaceholder, filterPlaceholder: this.messagesFeature.associationFilterPlaceholder, label: this.selectedLayer?.title ?? this.messagesCommon.untitled }, this.renderFeatureCountWarning(), this._renderAssociatedFeatureListPage(), this.renderFeatureObserver()) : x("calcite-list", { displayMode: f, label: this.selectedLayer?.title ?? this.messagesCommon.untitled }, Array.from(e3.keys(), (t2) => this._renderTypeList(t2, e3.get(t2)))));
  }
  _showAllAssociations(e3) {
    const { flowItems: t, viewModel: i2, description: s2 } = this;
    if (!t || !e3) return;
    i2.showAllEnabled = true;
    const o = new h2({ selectedLayer: e3, title: e3?.title, flowItems: t, parentFeatureViewModel: this.parentFeatureViewModel, featureVisibleElements: this.featureVisibleElements, description: s2, visibleElements: new s({ title: false, description: false }), viewModel: i2 });
    t.push(o);
  }
  _renderAssociatedFeatureListPage() {
    const e3 = this.viewModel.associationViewModels.get(this.selectedLayer).slice(0, this.endIndex);
    return [...this._renderTooltips(e3), ...this._renderAssociatedFeatureList(e3)];
  }
  _renderItemTooltip(e3) {
    const { tooltipReferenceMap: t } = this;
    return n2(e3.association) ? x("calcite-tooltip", { key: `tooltip-${e3.featureViewModel.uid}`, overlayPositioning: "fixed", referenceElement: t.get(e3.featureViewModel.uid), topLayerDisabled: this.topLayerDisabled }, this.getConnectivityTooltip(e3.association.associationType)) : null;
  }
  _renderAssociatedFeature(e3) {
    const { featureViewModel: t, title: s2 } = e3, o = "loading" === t.state, l3 = this._findFlowItem(t), r = l3 < 0 && this._isParentFeature(t), n4 = r || l3 >= 0;
    return x("calcite-list-item", { class: o ? y.listItemHidden : void 0, description: i(e3.terminalName ?? ""), key: `associated-feature-type-${t.uid}`, label: i(s2), onCalciteListItemSelect: () => this._handleFeatureClick(r, l3, t) }, n2(e3.association) ? this.renderConnectivityIcon(e3.association.associationType, e3.featureViewModel.uid) : null, n3(e3.association) ? x("calcite-chip", { label: n(e3.association), scale: "s", slot: "content-end" }, n(e3.association)) : null, this._renderChevronIconNode(n4));
  }
  async _selectAssociation(e3) {
    const { flowItems: t, featureVisibleElements: i2 } = this;
    if (!t) return;
    e3.abilities = { utilityNetworkAssociationsContent: true };
    const { default: s2 } = await import("./Feature-KIH3OUJN.js");
    t.push(new s2({ flowItems: t, flowType: "feature-association", viewModel: e3, visibleElements: i2 }));
  }
  _handleFeatureClick(e3, t, i2) {
    if (e3) this.flowItems.drain((e4) => {
      "showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy();
    });
    else if (t < 0 || !this.flowItems) this._selectAssociation(i2);
    else for (; this.flowItems.length > t + 1; ) {
      const e4 = this.flowItems.pop();
      e4 && ("showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy());
    }
  }
  _featureViewModelMatch(e3, t) {
    const i2 = e3.graphic, s2 = i2?.layer;
    let o = null;
    "subtype-sublayer" === s2?.type && s2.parent ? o = s2.parent.globalIdField ?? null : s2 && "globalIdField" in s2 && (o = s2.globalIdField);
    const l3 = o ? i2?.attributes[o] : null, r = t.graphic, n4 = r?.layer;
    let a2 = null;
    "subtype-sublayer" === n4?.type && n4.parent ? a2 = n4.parent.globalIdField ?? null : n4 && "globalIdField" in n4 && (a2 = n4.globalIdField);
    const c3 = a2 ? r?.attributes[a2] : null;
    return l3 && c3 && l3 === c3;
  }
  _isParentFeature(e3) {
    const t = this.flowItems?.getItemAt(0);
    if (!t) return false;
    const i2 = t.parentFeatureViewModel;
    return this._featureViewModelMatch(i2, e3);
  }
  _findFlowItem(e3) {
    return this.flowItems?.findIndex((t) => {
      if ("feature-association" !== t.flowType) return false;
      const i2 = t.viewModel;
      return this._featureViewModelMatch(i2, e3);
    }) ?? -1;
  }
  _renderTooltips(e3) {
    return e3.toArray().map((e4) => this._renderItemTooltip(e4));
  }
  _renderAssociatedFeatureList(e3) {
    return e3.toArray().map((e4) => this._renderAssociatedFeature(e4));
  }
  _renderChevronIconNode(e3) {
    return x("calcite-icon", { flipRtl: true, icon: e3 ? "move-up" : "chevron-right", scale: "s", slot: "content-end" });
  }
  _renderTypeList(e3, i2) {
    const { messagesFeature: s2 } = this, { displayCount: o } = this.viewModel, l3 = i2.slice(0, o), r = l3.length < i2.length;
    return x("calcite-list-item", { expanded: true, key: "show-all", label: e3.title, value: e3.id }, x("calcite-chip", { label: String(i2.length), scale: "s", slot: "content-end" }, i2.length), x("calcite-list", { group: e3.id, label: e3.title ?? "" }, [this._renderTooltips(l3), this._renderAssociatedFeatureList(l3)], r ? x("calcite-list-item", { description: w(s2?.numberRecords, { number: i2.length.toString() }), key: "show-all-item", label: s2.showAll, onCalciteListItemSelect: () => this._showAllAssociations(e3) }, x("calcite-icon", { icon: "list", scale: "s", slot: "content-end" })) : null));
  }
};
__decorate([a()], b.prototype, "description", void 0), __decorate([a()], b.prototype, "featureVisibleElements", void 0), __decorate([a()], b.prototype, "flowItems", void 0), __decorate([a()], b.prototype, "flowType", void 0), __decorate([a()], b.prototype, "listType", void 0), __decorate([a()], b.prototype, "parentFeatureViewModel", void 0), __decorate([a()], b.prototype, "title", void 0), __decorate([a({ type: v2 })], b.prototype, "viewModel", void 0), __decorate([a({ type: s, nonNullable: true })], b.prototype, "visibleElements", void 0), b = h2 = __decorate([c("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")], b);
var v3 = b;
export {
  v3 as default
};
//# sourceMappingURL=FeatureUtilityNetworkAssociationList-KRMY45JE.js.map
