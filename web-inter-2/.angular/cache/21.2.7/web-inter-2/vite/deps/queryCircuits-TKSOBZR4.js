import {
  S
} from "./chunk-TS2LJBSB.js";
import "./chunk-MH6FDVJZ.js";
import "./chunk-H565NKHI.js";
import "./chunk-PFVHU3CK.js";
import "./chunk-X7HOEUCF.js";
import "./chunk-KFUUHWZV.js";
import "./chunk-3V5B2XJ5.js";
import "./chunk-XH3ATY6S.js";
import "./chunk-Z3PP4SLW.js";
import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-L5CCICKP.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-GF53CKBB.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=queryCircuits-TKSOBZR4.js.map
