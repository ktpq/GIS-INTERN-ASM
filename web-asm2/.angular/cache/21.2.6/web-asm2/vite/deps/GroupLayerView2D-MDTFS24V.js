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
import {
  e,
  n
} from "./chunk-Q25A4AK6.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import {
  U,
  l
} from "./chunk-CD6IOUFB.js";
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
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends I {
  constructor(i2) {
    super(i2), this.type = "group", this.layerViews = new q();
  }
  destroy() {
    this.layerViews.removeAll();
  }
  _allLayerViewVisibility(i2) {
    this.layerViews.forEach((e2) => {
      e2.visible = i2;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i2) => this._layerViewsChangeHandler(i2)), l(() => this.layer?.visibilityMode, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, U), l(() => this.visible, (i2) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i2), () => {
      });
    }, U)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  get creatingLayerViews() {
    return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer) ?? false;
  }
  set layerViews(i2) {
    this._set("layerViews", n(i2, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i2, e2) => i2 + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some((i2) => i2.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i2) => i2._isOverridden("visible"));
  }
  _findLayerViewForLayer(i2) {
    return i2 && this.layerViews.find((e2) => e2.layer === i2);
  }
  _firstVisibleOnLayerOrder() {
    const i2 = this.layer.layers.find((i3) => {
      const e2 = this._findLayerViewForLayer(i3);
      return !!e2?.visible;
    });
    return i2 && this._findLayerViewForLayer(i2);
  }
  _applyExclusiveVisibility(i2) {
    null == i2 && null == (i2 = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i2 = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i2;
    });
  }
  _layerViewsChangeHandler(i2) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i3) => l(() => i3.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i3.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i3 : null)), U)).toArray(), "grouplayerview:visible");
    const e2 = i2.added[i2.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e2?.visible ? e2 : null));
  }
  _applyVisibility(i2, e2) {
    this._hasLayerViewVisibleOverrides() && ("inherited" === this.layer?.visibilityMode ? i2() : "exclusive" === this.layer?.visibilityMode && e2());
  }
};
__decorate([a({ readOnly: true })], h.prototype, "creatingLayerViews", null), __decorate([a({ cast: e })], h.prototype, "layerViews", null), __decorate([a({ readOnly: true })], h.prototype, "updatingProgress", null), __decorate([a()], h.prototype, "view", void 0), h = __decorate([c("esri.views.layers.GroupLayerView")], h);

// node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js
var i = class extends S(h) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, t) => this.container.addChildAt(e2.container, t));
  }
};
i = __decorate([c("esri.views.2d.layers.GroupLayerView2D")], i);
var s = i;
export {
  s as default
};
//# sourceMappingURL=GroupLayerView2D-MDTFS24V.js.map
