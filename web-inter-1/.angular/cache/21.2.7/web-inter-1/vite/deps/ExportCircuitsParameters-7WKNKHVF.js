import {
  S
} from "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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

// node_modules/@arcgis/core/rest/networks/circuits/support/ExportCircuitsParameters.js
var n2;
var l = n2 = class extends n {
  static from(t) {
    return m(n2, t);
  }
  constructor(t) {
    super(t), this.circuitNames = null, this.resultTypes = null, this.exportAcknowledgement = false, this.moment = null, this.outSpatialReference = null, this.domainNetworkName = null, this.gdbVersion = null, this.sessionId = null;
  }
  writeOutSR(t, e, r2) {
    if (null != t) {
      const { wkid: o, latestWkid: i, wkt: s, wkt2: p } = t;
      e[r2] = JSON.stringify({ wkid: o ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p ?? void 0 });
    }
  }
};
__decorate([a({ json: { type: [String], write: { writer: (t, e) => e.circuits = JSON.stringify(t ?? []) }, read: { source: "circuits" } } })], l.prototype, "circuitNames", void 0), __decorate([a({ json: { type: [Object], write: { writer: (t, e) => e.resultTypes = JSON.stringify(t ?? []) } } })], l.prototype, "resultTypes", void 0), __decorate([a({ json: { type: Boolean, write: true } })], l.prototype, "exportAcknowledgement", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (t, e) => {
  e.moment = t ? t.getTime() : null;
} } } })], l.prototype, "moment", void 0), __decorate([a({ type: S, json: { write: { allowNull: true, target: "outSR" } } })], l.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], l.prototype, "writeOutSR", null), __decorate([a({ type: String, json: { write: true } })], l.prototype, "domainNetworkName", void 0), __decorate([a({ type: String, json: { write: true } })], l.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], l.prototype, "sessionId", void 0), l = n2 = __decorate([c("esri.rest.networks.circuits.support.ExportCircuitsParameters")], l);
var u = l;
export {
  u as default
};
//# sourceMappingURL=ExportCircuitsParameters-7WKNKHVF.js.map
