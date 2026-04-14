import {
  u as u2
} from "./chunk-C6ERGRA2.js";
import {
  s as s2
} from "./chunk-IC4VMYLB.js";
import {
  f as f2,
  s,
  u
} from "./chunk-F77L3CIW.js";
import {
  f2 as f
} from "./chunk-RVKOLALF.js";
import {
  n as n2
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c as c2
} from "./chunk-JM4CKTH2.js";
import {
  c,
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsResult.js
var i = class extends n2 {
  constructor(o) {
    super(o), this.associations = [];
  }
};
__decorate([a({ type: [u2], json: { write: true } })], i.prototype, "associations", void 0), i = __decorate([c2("esri.rest.networks.support.QueryAssociationsResult")], i);

// node_modules/@arcgis/core/rest/networks/queryAssociations.js
function a2(e) {
  const { returnDeletes: t, elements: o, gdbVersion: n3, moment: s3 } = e.toJSON();
  return { returnDeletes: t, elements: JSON.stringify(o.map((e2) => ({ globalId: e2.globalId, networkSourceId: e2.networkSourceId, terminalId: e2.terminalId }))), types: JSON.stringify(e.types.map((e2) => s2.toJSON(e2))).replaceAll('"connectivity"', '"junctionJunctionConnectivity"'), gdbVersion: n3, moment: s3 ?? Date.now() };
}
async function p(r, p2, m) {
  const u3 = f2(r), l = __spreadProps(__spreadValues({}, a2(p2)), { f: "json" }), y = u(__spreadValues(__spreadValues({}, u3.query), l)), d = s(y, __spreadProps(__spreadValues({}, m), { method: "post" })), f3 = `${u3.path}/associations/query`, { data: g } = await f(f3, d), j = i.fromJSON(g);
  return p2.types.includes("connectivity") && c(n.getLogger("esri/rest/networks/support/QueryAssociationsParameters"), "types", { replacement: "Please use 'junction-junction-connectivity' instead of 'connectivity'.", see: "https://arcg.is/11Tr8a#types", version: "4.29", warnOnce: true }), j;
}

export {
  p
};
//# sourceMappingURL=chunk-LR22WFUY.js.map
