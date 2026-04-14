import {
  S
} from "./chunk-KBP4WTYN.js";
import {
  I
} from "./chunk-ISFI5GOW.js";
import "./chunk-6MANOION.js";
import "./chunk-4K54FG2U.js";
import "./chunk-37QETD6G.js";
import "./chunk-6CCMIJI6.js";
import "./chunk-SKNYMK4U.js";
import "./chunk-FRAOLENO.js";
import "./chunk-3B4JA4VA.js";
import "./chunk-3CTDWY66.js";
import "./chunk-CAH3J23O.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-WLPGGM5I.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-SRVOEZ6S.js";
import "./chunk-3H73AEHH.js";
import "./chunk-AJJ6USJB.js";
import "./chunk-LJCFV5JW.js";
import "./chunk-AQC7ZMZB.js";
import "./chunk-2RCOXHZQ.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-ZWIQBT42.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-XCLLMA7R.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-B55MAW2I.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-W34UF4X5.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-WEURYJAU.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import {
  T,
  o
} from "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-L5CCICKP.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import {
  q
} from "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-6XF5AJ25.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  L,
  e,
  t,
  y
} from "./chunk-PQFEWUZC.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var u = /* @__PURE__ */ Symbol();
var m = class extends I {
  constructor() {
    super(...arguments), this.layerViews = new q(), this._debouncedUpdate = L(async () => {
      const { layer: e2, parent: r } = this, t2 = r?.footprintLayerView;
      let i2 = [];
      const s = this._createQuery();
      if (s && t2) {
        const { features: r2 } = await t2.queryFeatures(s);
        this.suspended || (i2 = r2.map((r3) => e2.acquireLayer(r3)));
      }
      this.removeHandles(u), this.addHandles(i2, u);
    });
  }
  get creatingLayerViews() {
    return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer) ?? false;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layer.updating || this.layerViews.some((e2) => e2.updating);
  }
  enableLayerUpdates() {
    return t([this._updatingHandles.addWhen(() => false === this.parent?.footprintLayerView?.dataUpdating, () => this.updateLayers()), this._updatingHandles.add(() => [this.layer.maximumVisibleSublayers, this.layer.parent?.orderBy, this.parent?.footprintLayerView?.filter, this.parent?.footprintLayerView?.timeExtent, this.suspended], () => this.updateLayers()), e(() => this.removeHandles(u))]);
  }
  updateLayers() {
    this.suspended ? this.removeHandles(u) : this._updatingHandles.addPromise(y(this._debouncedUpdate()).catch((e2) => {
      n.getLogger(this).error(e2);
    }));
  }
  _createQuery() {
    const e2 = this.parent?.footprintLayerView, r = this.layer?.parent;
    if (!e2 || !r || r.destroyed) return null;
    const { layer: { maximumVisibleSublayers: t2 }, view: { scale: i2 } } = this;
    if (!t2) return null;
    const { itemTypeField: s, itemSourceField: a2, itemNameField: o3, minScaleField: l, maxScaleField: p, objectIdField: y2, orderBy: u2 } = r, m2 = o(`${l} IS NULL OR ${i2} <= ${l} OR ${l} = 0`, `${p} IS NULL OR ${i2} >= ${p}`), h = u2?.find((e3) => e3.field && !e3.valueExpression), c2 = e2.createQuery();
    return c2.returnGeometry = false, c2.num = t2, c2.outFields = [y2, a2, o3], c2.where = o(c2.where, m2), null != this.unsupportedItemTypes && (c2.where = o(c2.where, T(s, this.unsupportedItemTypes))), h?.field && (c2.orderByFields = [`${h.field} ${"descending" === h.order ? "DESC" : "ASC"}`], c2.outFields.push(h.field)), c2;
  }
};
__decorate([a({ readOnly: true })], m.prototype, "creatingLayerViews", null), __decorate([a()], m.prototype, "layer", void 0), __decorate([a()], m.prototype, "layerViews", void 0), __decorate([a({ readOnly: true })], m.prototype, "unsupportedItemTypes", void 0), __decorate([a()], m.prototype, "parent", void 0), __decorate([a({ readOnly: true })], m.prototype, "isUpdating", null), m = __decorate([c("esri.views.layers.CatalogDynamicGroupLayerView")], m);

// node_modules/@arcgis/core/views/2d/layers/CatalogDynamicGroupLayerView2D.js
var i = class extends S(m) {
  constructor() {
    super(...arguments), this.unsupportedItemTypes = ["Scene Service"], this.layerViews = new q();
  }
  attach() {
    this.addAttachHandles([this.layerViews.on("after-changes", () => this._updateStageChildren()), this.enableLayerUpdates()]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
    this.updateLayers();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, t2) => this.container.addChildAt(e2.container, t2));
  }
};
i = __decorate([c("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], i);
var o2 = i;
export {
  o2 as default
};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-LP7YFHBH.js.map
