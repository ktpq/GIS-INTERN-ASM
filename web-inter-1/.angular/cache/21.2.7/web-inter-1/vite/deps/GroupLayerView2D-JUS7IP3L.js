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
import {
  e,
  n
} from "./chunk-3Y2ZRVZS.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
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
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  U,
  l
} from "./chunk-6CYBR6FP.js";
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
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=GroupLayerView2D-JUS7IP3L.js.map
