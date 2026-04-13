import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m
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
//# sourceMappingURL=VerifyCircuitsParameters-2K5Z7NCL.js.map
