import {
  S
} from "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=ExportCircuitsParameters-5GHMFHKO.js.map
