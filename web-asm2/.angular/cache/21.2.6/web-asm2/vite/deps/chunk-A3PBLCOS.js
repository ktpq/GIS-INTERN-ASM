import {
  c as c2
} from "./chunk-CR2FSXZK.js";
import {
  l
} from "./chunk-DUGX5C7M.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/networks/support/TraceLocation.js
var s = class extends l(n) {
  constructor(t) {
    super(t), this.globalId = null, this.isFilterBarrier = false, this.percentAlong = null, this.terminalId = null, this.type = null, this.firstUnit = null, this.lastUnit = null, this.networkSourceId = null;
  }
};
__decorate([a({ type: String, json: { write: true } })], s.prototype, "globalId", void 0), __decorate([a({ type: Boolean, json: { write: true } })], s.prototype, "isFilterBarrier", void 0), __decorate([a({ type: Number, json: { write: true } })], s.prototype, "percentAlong", void 0), __decorate([a({ type: Number, json: { write: true } })], s.prototype, "terminalId", void 0), __decorate([a({ type: c2.apiValues, json: { type: c2.jsonValues, read: { reader: c2.read, source: "traceLocationType" }, write: { writer: c2.write, target: "traceLocationType" } } })], s.prototype, "type", void 0), __decorate([a({ type: Number, json: { write: true } })], s.prototype, "firstUnit", void 0), __decorate([a({ type: Number, json: { write: true } })], s.prototype, "lastUnit", void 0), __decorate([a({ type: Number })], s.prototype, "networkSourceId", void 0), s = __decorate([c("esri.rest.networks.support.TraceLocation")], s);
var n2 = s;

export {
  n2 as n
};
//# sourceMappingURL=chunk-A3PBLCOS.js.map
