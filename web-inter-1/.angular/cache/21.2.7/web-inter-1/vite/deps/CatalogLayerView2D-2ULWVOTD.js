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
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=CatalogLayerView2D-2ULWVOTD.js.map
