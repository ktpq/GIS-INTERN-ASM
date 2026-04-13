import {
  s
} from "./chunk-JPKBSWIO.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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

// node_modules/@arcgis/core/rest/networks/circuits/support/QueryCircuitsParameters.js
var p;
var l = p = class extends n {
  static from(t) {
    return m(p, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionId = null, this.moment = null, this.domainNetworkName = null, this.circuits = null, this.location = null, this.locationType = null, this.returnConsumerCircuits = false, this.resultTypes = null;
  }
  writeLocation(t, o) {
    null != t && (o.sourceId = t.sourceId, o.globalId = t.globalId, o.firstUnit = t.firstUnit, o.lastUnit = t.lastUnit);
  }
};
__decorate([a({ type: String, json: { write: true } })], l.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], l.prototype, "sessionId", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t ? t.getTime() : null;
} } } })], l.prototype, "moment", void 0), __decorate([a({ type: String, json: { write: true } })], l.prototype, "domainNetworkName", void 0), __decorate([a({ type: [String], json: { write: true } })], l.prototype, "circuits", void 0), __decorate([a({ type: s, json: { write: true } })], l.prototype, "location", void 0), __decorate([r("location")], l.prototype, "writeLocation", null), __decorate([a({ type: String, json: { write: true } })], l.prototype, "locationType", void 0), __decorate([a({ type: Boolean, json: { write: true } })], l.prototype, "returnConsumerCircuits", void 0), __decorate([a({ type: [String], json: { write: true } })], l.prototype, "resultTypes", void 0), l = p = __decorate([c("esri.rest.networks.circuits.support.QueryCircuitsParameters")], l);
var u = l;
export {
  u as default
};
//# sourceMappingURL=QueryCircuitsParameters-U7OAPHSC.js.map
