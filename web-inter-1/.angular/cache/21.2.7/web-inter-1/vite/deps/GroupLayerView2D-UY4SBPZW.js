import {
  S
} from "./chunk-NV4W3IZM.js";
import {
  I
} from "./chunk-BO6Y6UDX.js";
import "./chunk-6BM7NLJV.js";
import "./chunk-YJDCNXCC.js";
import "./chunk-HKJEWSCU.js";
import "./chunk-L7NRTQ6W.js";
import "./chunk-YCBJHP4A.js";
import "./chunk-YSIMJNFC.js";
import "./chunk-XWKU6EOL.js";
import "./chunk-3CTDWY66.js";
import "./chunk-WJFQP6L2.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-VJ4IUU3V.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-BBD6674H.js";
import "./chunk-RXSPO6GY.js";
import "./chunk-LWSMHEIS.js";
import "./chunk-2H4UKOQP.js";
import "./chunk-AVF3K4T4.js";
import "./chunk-T7SNP64P.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-KI7SNQFW.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-JTZ7OXNS.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-ZVRAKVBJ.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  e,
  n
} from "./chunk-L3KMIFH7.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
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
import "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import {
  U,
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-LAAWMBRE.js";
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
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=GroupLayerView2D-UY4SBPZW.js.map
