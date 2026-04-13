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
import "./chunk-M44GXGOJ.js";
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

// node_modules/@arcgis/core/views/2d/layers/KnowledgeGraphLayerView2D.js
var n2 = class extends S(I) {
  constructor(e2) {
    super(e2), this.layerViews = new q();
  }
  set layerViews(e2) {
    this._set("layerViews", n(e2, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((e2, t) => e2 + t.updatingProgress, 0) / this.layerViews.length;
  }
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
__decorate([a({ cast: e })], n2.prototype, "layerViews", null), __decorate([a({ readOnly: true })], n2.prototype, "updatingProgress", null), n2 = __decorate([c("esri.views.2d.layers.KnowledgeGraphLayerView2D")], n2);
var h = n2;
export {
  h as default
};
//# sourceMappingURL=KnowledgeGraphLayerView2D-I6GCKQYU.js.map
