import {
  t
} from "./chunk-MHKOJKLF.js";
import "./chunk-LGKAX6EZ.js";
import "./chunk-ODBHVRWF.js";
import "./chunk-KRQGBKAD.js";
import "./chunk-IDOYDUWX.js";
import "./chunk-UFNIHRKY.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TTRHBDVK.js";
import "./chunk-SGNC5H35.js";
import "./chunk-OR24MDO6.js";
import "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-N7QYCMB5.js";
import "./chunk-75MOJZ4V.js";
import "./chunk-YDL4QMG6.js";
import "./chunk-YZDX62BD.js";
import "./chunk-BS2V2OFQ.js";
import "./chunk-TX6LXUDP.js";
import "./chunk-L3KMIFH7.js";
import "./chunk-YAY7KCP6.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-PJDZXW5F.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
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
import "./chunk-YY44XNLW.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-TNGHAIJZ.js";
import "./chunk-2RBIX73A.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
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
import {
  f2 as f
} from "./chunk-LAAWMBRE.js";
import "./chunk-PKBHGDEY.js";
import "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m,
  o4 as o
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/circuits/support/ExportCircuitsResult.js
var c2;
var u2 = c2 = class extends n {
  static from(r) {
    return m(c2, r);
  }
  constructor(r) {
    super(r), this.circuits = null, this.moment = null, this.exceededTransferLimit = false, this.serviceEdits = null;
  }
  readServiceEdits(r, e) {
    return t(r);
  }
};
__decorate([a({ json: { type: [Object] } })], u2.prototype, "circuits", void 0), __decorate([a({ type: Date })], u2.prototype, "moment", void 0), __decorate([a({ type: Boolean, json: { type: Boolean, write: true } })], u2.prototype, "exceededTransferLimit", void 0), __decorate([a({ type: [Object] })], u2.prototype, "serviceEdits", void 0), __decorate([o("serviceEdits")], u2.prototype, "readServiceEdits", null), u2 = c2 = __decorate([c("esri.rest.networks.circuits.support.ExportCircuitsResult")], u2);

// node_modules/@arcgis/core/rest/networks/circuits/exportCircuits.js
async function i(i2, u3, e) {
  const m2 = f2(i2), a2 = __spreadProps(__spreadValues({}, u3.toJSON()), { f: "json" }), n2 = u(__spreadValues(__spreadValues({}, m2.query), a2)), c3 = s(n2, __spreadProps(__spreadValues({}, e), { method: "post", authMode: "no-prompt" })), f3 = `${m2.path}/circuits/export`, { data: j } = await f(f3, c3);
  return u2.fromJSON(j);
}
export {
  i as exportCircuits
};
//# sourceMappingURL=exportCircuits-LMM7EA5L.js.map
