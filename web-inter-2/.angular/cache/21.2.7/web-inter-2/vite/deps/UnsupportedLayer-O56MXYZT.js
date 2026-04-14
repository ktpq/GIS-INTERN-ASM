import {
  _
} from "./chunk-BZNIQO2Y.js";
import "./chunk-OTOTHRZE.js";
import "./chunk-YK5DPRSK.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-TDVHS7EW.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import {
  b
} from "./chunk-DVV7T3XR.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-OOTSAG75.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OIICDJNU.js";
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

// node_modules/@arcgis/core/layers/UnsupportedLayer.js
var l = class extends _(e(b)) {
  constructor(e2) {
    super(e2), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e2, o) => {
      F(() => {
        const e3 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let t = "Unsupported layer type";
        e3 && (t += " " + e3), o(new r("layer:unsupported-layer-type", t, { layerType: e3 }));
      });
    }));
  }
  read(e2, r2) {
    const o = { resourceInfo: e2 };
    null != e2.id && (o.id = e2.id), null != e2.title && (o.title = e2.title), super.read(o, r2);
  }
  write(e2, r2) {
    return Object.assign(e2 || {}, this.resourceInfo, { id: this.id });
  }
};
__decorate([a({ readOnly: true })], l.prototype, "resourceInfo", void 0), __decorate([a({ type: ["show", "hide"] })], l.prototype, "listMode", void 0), __decorate([a({ type: Boolean, readOnly: false })], l.prototype, "persistenceEnabled", void 0), __decorate([a({ json: { read: false }, readOnly: true, value: "unsupported" })], l.prototype, "type", void 0), l = __decorate([c("esri.layers.UnsupportedLayer")], l);
var d = l;
export {
  d as default
};
//# sourceMappingURL=UnsupportedLayer-O56MXYZT.js.map
