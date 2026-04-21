import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyResult.js
var s = class extends n {
  constructor(e) {
    super(e), this.moment = null, this.fullUpdate = false, this.validateErrorsCreated = false, this.exceededTransferLimit = null, this.serviceEdits = null, this.discoveredSubnetworks = null;
  }
};
__decorate([a({ type: Date, json: { type: Number, write: { writer: (e, t) => {
  t.moment = e ? e.getTime() : null;
} } } })], s.prototype, "moment", void 0), __decorate([a({ type: Boolean, json: { write: true } })], s.prototype, "fullUpdate", void 0), __decorate([a({ type: Boolean, json: { write: true } })], s.prototype, "validateErrorsCreated", void 0), __decorate([a({ type: Boolean, json: { write: true } })], s.prototype, "exceededTransferLimit", void 0), __decorate([a({ type: [Object], json: { write: true } })], s.prototype, "serviceEdits", void 0), __decorate([a({ type: [Object], json: { write: true } })], s.prototype, "discoveredSubnetworks", void 0), s = __decorate([c("esri.rest.networks.support.ValidateNetworkTopologyResult")], s);
var i = s;

export {
  i
};
//# sourceMappingURL=chunk-NUH223BD.js.map
