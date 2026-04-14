import {
  t
} from "./chunk-KK6IAFD5.js";
import "./chunk-CHPQVLYR.js";
import "./chunk-V7VHUXCE.js";
import "./chunk-Q65CRSH6.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import {
  f as f2,
  s,
  u
} from "./chunk-F77L3CIW.js";
import "./chunk-SGNC5H35.js";
import "./chunk-OR24MDO6.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-QXUZD2G5.js";
import "./chunk-A65L2IOA.js";
import "./chunk-TEGVFVAJ.js";
import "./chunk-YZDX62BD.js";
import "./chunk-FQ4W5OTG.js";
import "./chunk-RC57P4JN.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-OOTSAG75.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-BGBXZWYV.js";
import "./chunk-DMOCO4H5.js";
import "./chunk-UDRKO2UK.js";
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
import "./chunk-PKBHGDEY.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
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
import {
  f2 as f
} from "./chunk-RVKOLALF.js";
import "./chunk-DNJ342E3.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/support/CircuitVerifyResult.js
var p = class extends n {
  constructor(r) {
    super(r), this.error = null, this.geometry = null, this.name = null;
  }
};
__decorate([a({ type: Object })], p.prototype, "error", void 0), __decorate([a({ type: y })], p.prototype, "geometry", void 0), __decorate([a({ type: String })], p.prototype, "name", void 0), p = __decorate([c("esri.rest.networks.circuits.support.CircuitVerifyResult")], p);
var i = p;

// node_modules/@arcgis/core/rest/networks/circuits/support/VerifyCircuitsResult.js
var c2 = class extends n {
  constructor(e2) {
    super(e2), this.circuits = [], this.moment = null, this.exceededTransferLimit = false, this.serviceEdits = null;
  }
  readServiceEdits(e2, t2) {
    return t(e2);
  }
};
__decorate([a({ type: [i], json: { type: [i], write: true } })], c2.prototype, "circuits", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (e2, t2) => {
  t2.moment = e2 ? e2.getTime() : null;
} } } })], c2.prototype, "moment", void 0), __decorate([a({ type: Boolean, json: { type: Boolean, write: true } })], c2.prototype, "exceededTransferLimit", void 0), __decorate([a({ type: [Object], json: { type: [Object], write: true } })], c2.prototype, "serviceEdits", void 0), __decorate([o("serviceEdits")], c2.prototype, "readServiceEdits", null), c2 = __decorate([c("esri.rest.networks.circuits.support.VerifyCircuitsResult")], c2);

// node_modules/@arcgis/core/rest/networks/circuits/verifyCircuits.js
async function e(e2, p2, u2) {
  const m = f2(e2), f3 = __spreadProps(__spreadValues({}, p2.toJSON()), { f: "json" }), a2 = u(__spreadValues(__spreadValues({}, m.query), f3)), n2 = s(a2, __spreadProps(__spreadValues({}, u2), { method: "post", authMode: "no-prompt" })), c3 = `${m.path}/circuits/verify`, { data: j } = await f(c3, n2);
  return c2.fromJSON(j);
}
export {
  e as verifyCircuits
};
//# sourceMappingURL=verifyCircuits-3ZNZM437.js.map
