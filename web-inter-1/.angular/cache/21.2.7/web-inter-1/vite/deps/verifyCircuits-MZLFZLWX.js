import {
  t
} from "./chunk-ZQPNKVGK.js";
import "./chunk-SA5VTERZ.js";
import "./chunk-2M6DJG7I.js";
import "./chunk-Q65CRSH6.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-SGNC5H35.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-OR24MDO6.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-JXLQUNSA.js";
import "./chunk-XWU2ZKWF.js";
import "./chunk-QKDZ43GD.js";
import "./chunk-UKSB452I.js";
import "./chunk-7PBHIAQH.js";
import "./chunk-FAG2TZ7O.js";
import "./chunk-MDVA2DB6.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-VWG26L3C.js";
import "./chunk-6PVP32FV.js";
import "./chunk-TKPO3PT4.js";
import "./chunk-7LBYAQE7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-LFCO57WV.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
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
import "./chunk-ZC4RH2DW.js";
import "./chunk-ON6HJSAD.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-2FYYEMZJ.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  o4 as o
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
//# sourceMappingURL=verifyCircuits-MZLFZLWX.js.map
