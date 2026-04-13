import {
  t
} from "./chunk-VXOLKQAF.js";
import "./chunk-N3LNBXBI.js";
import "./chunk-7VMCCFBJ.js";
import "./chunk-Z2AEQM3R.js";
import "./chunk-LW5ZVONF.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-YM62CGUL.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-D5MS4RFG.js";
import "./chunk-UOTNWVQN.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MK2KB2KA.js";
import "./chunk-NIXSIW3X.js";
import "./chunk-DZN3R4UM.js";
import "./chunk-OD52MENG.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-ZPAQA4G3.js";
import "./chunk-WLCIR5JN.js";
import "./chunk-OFIL7BYT.js";
import "./chunk-M3PLR22U.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-QU4UZ7C2.js";
import "./chunk-HKOFZI3I.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-U3CRXBTW.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  o3 as o
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
//# sourceMappingURL=verifyCircuits-W2VZUI4J.js.map
