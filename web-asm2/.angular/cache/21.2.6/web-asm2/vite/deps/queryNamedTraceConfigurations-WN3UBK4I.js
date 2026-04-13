import {
  c as c2
} from "./chunk-KZ3HICLT.js";
import "./chunk-U3A3UR6Y.js";
import "./chunk-CR2FSXZK.js";
import "./chunk-SWNARI4F.js";
import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-VSDCDWT5.js";
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

// node_modules/@arcgis/core/rest/networks/support/QueryNamedTraceConfigurationsResult.js
var a2 = class extends n {
  constructor(r) {
    super(r), this.namedTraceConfigurations = [];
  }
};
__decorate([a({ type: [c2], json: { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } } })], a2.prototype, "namedTraceConfigurations", void 0), a2 = __decorate([c("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")], a2);

// node_modules/@arcgis/core/rest/networks/queryNamedTraceConfigurations.js
async function e(e2, n2, g) {
  const i = f2(e2), l = n2.toJSON();
  n2.globalIds && n2.globalIds.length > 0 && (l.globalIds = JSON.stringify(n2.globalIds)), n2.creators && n2.creators.length > 0 && (l.creators = JSON.stringify(n2.creators)), n2.tags && n2.tags.length > 0 && (l.tags = JSON.stringify(n2.tags)), n2.names && n2.names.length > 0 && (l.names = JSON.stringify(n2.names));
  const m = __spreadProps(__spreadValues({}, l), { f: "json" }), f3 = u(__spreadValues(__spreadValues({}, i.query), m)), u2 = s(f3, __spreadProps(__spreadValues({}, g), { method: "post" })), c3 = `${i.path}/traceConfigurations/query`, { data: p } = await f(c3, u2);
  return a2.fromJSON(p);
}
export {
  e as queryNamedTraceConfigurations
};
//# sourceMappingURL=queryNamedTraceConfigurations-WN3UBK4I.js.map
