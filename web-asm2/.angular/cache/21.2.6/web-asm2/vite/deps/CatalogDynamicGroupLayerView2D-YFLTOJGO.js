import {
  S
} from "./chunk-LQAXBSUN.js";
import {
  I
} from "./chunk-5F5EEEPA.js";
import "./chunk-JPEJPHSH.js";
import "./chunk-LE7L5AWJ.js";
import "./chunk-7HEBNF6D.js";
import "./chunk-UYNYIOPC.js";
import "./chunk-QOY7P5Z5.js";
import "./chunk-2ZM4WQIE.js";
import "./chunk-YOINB67K.js";
import "./chunk-ETN7N3NT.js";
import "./chunk-SPI5RLJQ.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-QCEMOJ33.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-ZSAPXY7T.js";
import "./chunk-Z5FUIBSR.js";
import "./chunk-2DDOBC4Y.js";
import "./chunk-OAK4TACJ.js";
import "./chunk-D4W2QISB.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-NAAAH7RP.js";
import "./chunk-PCKGNCDO.js";
import "./chunk-GHG4ULKJ.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-SGJIDPMU.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-WYBA72UW.js";
import "./chunk-IRE2Q6SD.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import {
  T,
  o
} from "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import {
  q
} from "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import {
  L,
  e,
  t,
  y
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
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
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-YFLTOJGO.js.map
