import {
  s
} from "./chunk-JUFM4AUZ.js";
import {
  e as e2,
  v as v2
} from "./chunk-2KMOKZFG.js";
import "./chunk-XDB4VVVR.js";
import "./chunk-TCXSSBTP.js";
import "./chunk-UNVU5SCE.js";
import "./chunk-QHBLS42O.js";
import "./chunk-XMY5AADF.js";
import {
  O,
  c as c2
} from "./chunk-LF5BUL3H.js";
import {
  v,
  x
} from "./chunk-YJ3MZFAR.js";
import "./chunk-7H3HYUBR.js";
import {
  e
} from "./chunk-JTZ7OXNS.js";
import "./chunk-6R3QVCJR.js";
import "./chunk-EE4SGCNH.js";
import "./chunk-YK5DPRSK.js";
import "./chunk-VCFT2RFZ.js";
import "./chunk-4V776ICJ.js";
import "./chunk-F6XZYXKM.js";
import "./chunk-ZKGNDXUQ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-DVV7T3XR.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-I7B74Y7B.js";
import {
  h,
  w
} from "./chunk-IZTHTQPX.js";
import "./chunk-VBPD3MAX.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-MVS4RVUO.js";
import "./chunk-A7E2EM2O.js";
import "./chunk-QXUZD2G5.js";
import "./chunk-A65L2IOA.js";
import "./chunk-TEGVFVAJ.js";
import "./chunk-YZDX62BD.js";
import "./chunk-FQ4W5OTG.js";
import "./chunk-RC57P4JN.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-OOTSAG75.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-BGBXZWYV.js";
import "./chunk-DMOCO4H5.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-HJMMRQXJ.js";
import {
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OIICDJNU.js";
import "./chunk-PKBHGDEY.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-DNJ342E3.js";
import "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  i3 as i
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
    return c2({ icon: () => import("./calcite-icon-VXSOFU5M.js"), loader: () => import("./calcite-loader-3HRSMTEQ.js"), notice: () => import("./calcite-notice-R5JZWVKU.js") });
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
    return c2({ chip: () => import("./calcite-chip-EGCKSNNT.js"), icon: () => import("./calcite-icon-VXSOFU5M.js"), list: () => import("./calcite-list-TF2V7JDO.js"), "list-item": () => import("./calcite-list-item-B7J3TKW6.js"), tooltip: () => import("./calcite-tooltip-IRNQMOXL.js") });
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
    const { default: s2 } = await import("./Feature-NW5ZVBEA.js");
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
//# sourceMappingURL=FeatureUtilityNetworkAssociationList-HMZSAW2A.js.map
