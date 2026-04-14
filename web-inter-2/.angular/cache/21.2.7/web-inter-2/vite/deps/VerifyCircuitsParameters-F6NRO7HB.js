import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  m
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
//# sourceMappingURL=VerifyCircuitsParameters-F6NRO7HB.js.map
