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
import "./chunk-L5CCICKP.js";
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
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/layers/CatalogLayerView.js
var a2 = class extends I {
  constructor() {
    super(...arguments), this.layerViews = new q();
  }
  get dynamicGroupLayerView() {
    return this.layerViews.find((r) => r.layer === this.layer?.dynamicGroupLayer);
  }
  get footprintLayerView() {
    return this.layerViews.find((r) => r.layer === this.layer?.footprintLayer);
  }
  isUpdating() {
    return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
  }
};
__decorate([a()], a2.prototype, "layer", void 0), __decorate([a()], a2.prototype, "layerViews", void 0), __decorate([a({ readOnly: true })], a2.prototype, "dynamicGroupLayerView", null), __decorate([a({ readOnly: true })], a2.prototype, "footprintLayerView", null), a2 = __decorate([c("esri.views.layers.CatalogLayerView")], a2);

// node_modules/@arcgis/core/views/2d/layers/CatalogLayerView2D.js
var s = class extends S(a2) {
  constructor() {
    super(...arguments), this.layerViews = new q();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: true })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, t) => this.container.addChildAt(e.container, t));
  }
};
__decorate([a()], s.prototype, "layerViews", void 0), s = __decorate([c("esri.views.2d.layers.CatalogLayerView2D")], s);
var l = s;
export {
  l as default
};
//# sourceMappingURL=CatalogLayerView2D-Z7EL4VGJ.js.map
