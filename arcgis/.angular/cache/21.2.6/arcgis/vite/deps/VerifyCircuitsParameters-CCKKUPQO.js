import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  m
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
//# sourceMappingURL=VerifyCircuitsParameters-CCKKUPQO.js.map
