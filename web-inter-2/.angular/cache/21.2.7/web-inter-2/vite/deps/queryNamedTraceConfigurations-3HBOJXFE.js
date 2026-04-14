import {
  c as c2
} from "./chunk-II6BUIQK.js";
import "./chunk-7SC3OYEY.js";
import "./chunk-X7HOEUCF.js";
import "./chunk-ATR3ATPI.js";
import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-F6AS75CS.js";
import "./chunk-GF53CKBB.js";
import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
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
//# sourceMappingURL=queryNamedTraceConfigurations-3HBOJXFE.js.map
