import {
  S
} from "./chunk-FUZM6OPU.js";
import "./chunk-VMMJQHU4.js";
import "./chunk-JPKBSWIO.js";
import "./chunk-IIY7ORCT.js";
import "./chunk-IC4VMYLB.js";
import "./chunk-XDB4VVVR.js";
import {
  f as f2,
  s,
  u
} from "./chunk-F77L3CIW.js";
import "./chunk-XSX3KZ7M.js";
import "./chunk-S7EWNSTO.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-OIICDJNU.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import {
  f2 as f
} from "./chunk-RVKOLALF.js";
import "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
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
//# sourceMappingURL=queryCircuits-2XGPDMYV.js.map
