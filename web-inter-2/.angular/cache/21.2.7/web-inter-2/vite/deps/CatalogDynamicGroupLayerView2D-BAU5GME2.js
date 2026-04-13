import {
  S
} from "./chunk-CK3MKKLI.js";
import {
  I
} from "./chunk-POZP57IY.js";
import "./chunk-6BM7NLJV.js";
import "./chunk-YJDCNXCC.js";
import "./chunk-HKJEWSCU.js";
import "./chunk-L7NRTQ6W.js";
import "./chunk-YCBJHP4A.js";
import "./chunk-TVZ2UN2Q.js";
import "./chunk-FXR4KJCD.js";
import "./chunk-3CTDWY66.js";
import "./chunk-RNSOC4NC.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-D2Z2HLWL.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-BBD6674H.js";
import "./chunk-AE5T726W.js";
import "./chunk-LWSMHEIS.js";
import "./chunk-2H4UKOQP.js";
import "./chunk-AVF3K4T4.js";
import "./chunk-T7SNP64P.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-KI7SNQFW.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-ZVRAKVBJ.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-JTZ7OXNS.js";
import "./chunk-737A5DQP.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import {
  T,
  o
} from "./chunk-E4TLNY2F.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-IO7CXLQO.js";
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
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
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
import {
  L,
  e2 as e,
  t2 as t,
  y
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-BAU5GME2.js.map
