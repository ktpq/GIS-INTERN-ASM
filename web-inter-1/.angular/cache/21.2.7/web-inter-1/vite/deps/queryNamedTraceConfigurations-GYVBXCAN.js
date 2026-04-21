import {
  c as c2
} from "./chunk-7MITK4BO.js";
import "./chunk-KGVYM7W7.js";
import "./chunk-DFNEH2UF.js";
import "./chunk-WA4JKPH3.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-7ZFYLJ6O.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
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
//# sourceMappingURL=queryNamedTraceConfigurations-GYVBXCAN.js.map
