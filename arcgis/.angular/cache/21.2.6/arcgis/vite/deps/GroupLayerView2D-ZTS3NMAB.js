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
import {
  e,
  n
} from "./chunk-XK2FSQWW.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
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
  U,
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
import "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=GroupLayerView2D-ZTS3NMAB.js.map
