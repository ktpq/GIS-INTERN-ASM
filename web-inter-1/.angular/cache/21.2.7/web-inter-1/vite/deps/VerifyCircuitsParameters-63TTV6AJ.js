import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  m
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
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/circuits/support/VerifyCircuitsParameters.js
var s;
var n2 = s = class extends n {
  static from(t) {
    return m(s, t);
  }
  constructor(t) {
    super(t), this.allCircuits = false, this.circuitNames = null, this.continueOnFailure = false, this.domainNetworkName = null, this.forceVerify = false, this.gdbVersion = null, this.sessionId = null, this.synthesizeGeometries = false;
  }
};
__decorate([a({ json: { type: Boolean, write: true } })], n2.prototype, "allCircuits", void 0), __decorate([a({ json: { type: [String], write: { writer: (t, e) => e.circuits = JSON.stringify(t ?? []) }, read: { source: "circuits" } } })], n2.prototype, "circuitNames", void 0), __decorate([a({ json: { type: Boolean, write: true } })], n2.prototype, "continueOnFailure", void 0), __decorate([a({ type: String, json: { write: true } })], n2.prototype, "domainNetworkName", void 0), __decorate([a({ json: { type: Boolean, write: true } })], n2.prototype, "forceVerify", void 0), __decorate([a({ type: String, json: { write: true } })], n2.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], n2.prototype, "sessionId", void 0), __decorate([a({ type: Boolean, json: { write: true } })], n2.prototype, "synthesizeGeometries", void 0), n2 = s = __decorate([c("esri.rest.networks.circuits.support.VerifyCircuitsParameters")], n2);
var p = n2;
export {
  p as default
};
//# sourceMappingURL=VerifyCircuitsParameters-63TTV6AJ.js.map
