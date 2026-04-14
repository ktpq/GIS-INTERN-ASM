import {
  M
} from "./chunk-SVOHOXAI.js";
import {
  s
} from "./chunk-QLM7B7H6.js";
import "./chunk-M6X4VILT.js";
import "./chunk-FBRVQN23.js";
import {
  i
} from "./chunk-LRT6SH3M.js";
import {
  S
} from "./chunk-DUYAG3MF.js";
import {
  I
} from "./chunk-55LMYHO2.js";
import "./chunk-SG6TQSIU.js";
import "./chunk-6BM7NLJV.js";
import "./chunk-YJDCNXCC.js";
import "./chunk-HKJEWSCU.js";
import "./chunk-L7NRTQ6W.js";
import "./chunk-YCBJHP4A.js";
import "./chunk-WBF67J46.js";
import "./chunk-EKP7MDUL.js";
import "./chunk-WFI3NR7T.js";
import "./chunk-3CTDWY66.js";
import "./chunk-APMZAVZP.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-D2Z2HLWL.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-BBD6674H.js";
import "./chunk-QAQFE6RT.js";
import "./chunk-LWSMHEIS.js";
import "./chunk-2H4UKOQP.js";
import "./chunk-AVF3K4T4.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-T7SNP64P.js";
import "./chunk-G7J4V5XH.js";
import "./chunk-RDVONU5Y.js";
import "./chunk-YORNLQGX.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-KI7SNQFW.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-IQZJUZUB.js";
import "./chunk-TRC3LPOE.js";
import "./chunk-JTZ7OXNS.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-ZVRAKVBJ.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
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
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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
  d
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var m = class extends i(S(I)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      d(t2) || n.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new s(), this.container.addChild(this._bitmapContainer), this._strategy = new M({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e, r) {
    return this.layer.fetchImageBitmap(t, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
__decorate([a()], m.prototype, "_strategy", void 0), m = __decorate([c("esri.views.2d.layers.BaseDynamicLayerView2D")], m);
var d2 = m;
export {
  d2 as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-HNCL46GN.js.map
