import {
  S
} from "./chunk-HTRQFY6J.js";
import {
  I
} from "./chunk-5UBEW33K.js";
import "./chunk-2PUTFA4S.js";
import "./chunk-VLLAUUAX.js";
import "./chunk-UAORIXH6.js";
import "./chunk-KUGXR3ZP.js";
import "./chunk-4QKD47PD.js";
import "./chunk-PKOAIVK2.js";
import "./chunk-G7NP7Q4F.js";
import "./chunk-AR7ZBAWX.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-CN3LKCJ5.js";
import "./chunk-J5D74YXM.js";
import "./chunk-ETN7N3NT.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-TDTJD4MS.js";
import "./chunk-NLTI5Q5N.js";
import "./chunk-YXHAQAIT.js";
import "./chunk-2M42TJQH.js";
import "./chunk-5O2EVWNF.js";
import "./chunk-AK75FOMD.js";
import "./chunk-ICUJG4IU.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-BEEP3FKE.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-BCX2XT3K.js";
import "./chunk-PCKGNCDO.js";
import "./chunk-TO4LSEU2.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-S4XOMMCM.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-ULJA4TCB.js";
import {
  T,
  o
} from "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-QLC3W7PG.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-RTWZV6QR.js";
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
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
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
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  L,
  e,
  t,
  y
} from "./chunk-POW25PFR.js";
import {
  n2 as n
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-WN376O5G.js.map
