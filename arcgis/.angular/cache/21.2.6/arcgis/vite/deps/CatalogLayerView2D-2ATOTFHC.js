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
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=CatalogLayerView2D-2ATOTFHC.js.map
