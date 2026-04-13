import {
  c as c2
} from "./chunk-WNYGU26X.js";
import "./chunk-5L43CAGH.js";
import "./chunk-Y6DLVMLW.js";
import "./chunk-6I4LGQ74.js";
import "./chunk-NSJQHJ2B.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import "./chunk-IPJXMYTM.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
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
//# sourceMappingURL=queryNamedTraceConfigurations-AUJIMGYU.js.map
