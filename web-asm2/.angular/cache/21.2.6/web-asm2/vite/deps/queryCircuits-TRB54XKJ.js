import {
  S
} from "./chunk-JUD2NJ54.js";
import "./chunk-A3PBLCOS.js";
import "./chunk-CR64HCKH.js";
import "./chunk-HF43L7YV.js";
import "./chunk-CR2FSXZK.js";
import "./chunk-C6QDEXLA.js";
import "./chunk-NF4WV2F4.js";
import "./chunk-UUYI3HVY.js";
import "./chunk-J5XU3PTN.js";
import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=queryCircuits-TRB54XKJ.js.map
