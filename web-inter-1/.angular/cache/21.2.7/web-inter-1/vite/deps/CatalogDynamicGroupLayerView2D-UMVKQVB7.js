import {
  S
} from "./chunk-ODLEE4BR.js";
import {
  I
} from "./chunk-5KV73MIO.js";
import "./chunk-3K5KLKJL.js";
import "./chunk-QYKDJLGK.js";
import "./chunk-3CNOFERI.js";
import "./chunk-XQEXCDWC.js";
import "./chunk-P4A4DSDY.js";
import "./chunk-KQNX6YU5.js";
import "./chunk-ADPYU6GX.js";
import "./chunk-NUKEMAQ3.js";
import "./chunk-3CTDWY66.js";
import "./chunk-XPFTEEP5.js";
import "./chunk-NIOT37JE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-XKXL36MC.js";
import "./chunk-V2SUAMGW.js";
import "./chunk-RVILGR2W.js";
import "./chunk-MZZNMZJG.js";
import "./chunk-KJSHXJQO.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-IODIHRP7.js";
import "./chunk-KRGMLSA4.js";
import "./chunk-KY6VK7AR.js";
import "./chunk-TXF5FFQH.js";
import "./chunk-47CFN4JI.js";
import "./chunk-55ANZSLC.js";
import "./chunk-GAFIIT3P.js";
import "./chunk-SUVDIL6O.js";
import "./chunk-OUD4F5KK.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-U54DMEX7.js";
import "./chunk-3QRB5MAM.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
import {
  T,
  o
} from "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import {
  L,
  e,
  t,
  y
} from "./chunk-2KP24SU5.js";
import {
  n2 as n
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-UMVKQVB7.js.map
