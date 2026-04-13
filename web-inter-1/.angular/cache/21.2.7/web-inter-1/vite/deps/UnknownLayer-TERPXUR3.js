import {
  _
} from "./chunk-KB2EHMQZ.js";
import "./chunk-VIFYHMCM.js";
import "./chunk-MQRKJL3K.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-MCLMCBJF.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import {
  b
} from "./chunk-I5YTT2EB.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-YY44XNLW.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import {
  F
} from "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/UnknownLayer.js
var l = class extends _(e(b)) {
  constructor(r2) {
    super(r2), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r2, o) => {
      F(() => {
        const r3 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let t = "Unknown layer type";
        r3 && (t += " " + r3), o(new r("layer:unknown-layer-type", t, { layerType: r3 }));
      });
    }));
  }
  read(r2, e2) {
    super.read({ resourceInfo: r2 }, e2);
  }
  write(r2, e2) {
    return null;
  }
};
__decorate([a({ readOnly: true })], l.prototype, "resourceInfo", void 0), __decorate([a({ type: ["show", "hide"] })], l.prototype, "listMode", void 0), __decorate([a({ json: { read: false }, readOnly: true, value: "unknown" })], l.prototype, "type", void 0), l = __decorate([c("esri.layers.UnknownLayer")], l);
var a2 = l;
export {
  a2 as default
};
//# sourceMappingURL=UnknownLayer-TERPXUR3.js.map
