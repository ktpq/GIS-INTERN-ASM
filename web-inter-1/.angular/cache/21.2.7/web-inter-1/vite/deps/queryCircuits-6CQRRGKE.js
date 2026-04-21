import {
  S
} from "./chunk-WEIXVQMN.js";
import "./chunk-MB5U7Y4F.js";
import "./chunk-FCLQUEEM.js";
import "./chunk-2PCRFCAO.js";
import "./chunk-DFNEH2UF.js";
import "./chunk-F7D7NEYB.js";
import "./chunk-7RZXJMGY.js";
import "./chunk-RR67MZES.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
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
import "./chunk-LD7VLL5E.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/circuits/support/QueryCircuitsResult.js
var e = class extends n {
  constructor(r) {
    super(r), this.circuits = null, this.circuitNames = null;
  }
};
__decorate([a({ type: [S], json: { write: true } })], e.prototype, "circuits", void 0), __decorate([a({ type: [String], json: { write: true } })], e.prototype, "circuitNames", void 0), e = __decorate([c("esri.rest.networks.circuits.support.QueryCircuitsResult")], e);

// node_modules/@arcgis/core/rest/networks/circuits/queryCircuits.js
async function u2(u3, e2, c2) {
  const p = f2(u3), n2 = e2.toJSON();
  e2.circuits && (n2.circuits = JSON.stringify(e2.circuits)), e2.resultTypes && (n2.resultTypes = JSON.stringify(e2.resultTypes));
  const m = __spreadProps(__spreadValues({}, n2), { f: "json" }), y = u(__spreadValues(__spreadValues({}, p.query), m)), f3 = s(y, __spreadProps(__spreadValues({}, c2), { method: "post", authMode: "no-prompt" })), a2 = `${p.path}/circuits/query`, { data: l } = await f(a2, f3);
  return e.fromJSON(l);
}
export {
  u2 as queryCircuits
};
//# sourceMappingURL=queryCircuits-6CQRRGKE.js.map
