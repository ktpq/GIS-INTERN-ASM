import {
  n as n2
} from "./chunk-VWH64IUY.js";
import {
  p
} from "./chunk-5L43CAGH.js";
import {
  a as a2
} from "./chunk-Y6DLVMLW.js";
import "./chunk-NSJQHJ2B.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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

// node_modules/@arcgis/core/rest/networks/support/TraceParameters.js
var u;
var c2 = u = class extends n {
  static from(t) {
    return m(u, t);
  }
  constructor(t) {
    super(t), this.namedTraceConfigurationGlobalId = null, this.gdbVersion = null, this.traceLocations = [], this.moment = null, this.outSpatialReference = null, this.traceConfiguration = null, this.resultTypes = null, this.traceType = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r2, latestWkid: i, wkt: s, wkt2: p2 } = t;
      o[e] = JSON.stringify({ wkid: r2 ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p2 ?? void 0 });
    }
  }
};
__decorate([a({ type: String, json: { read: { source: "traceConfigurationGlobalId" }, write: { target: "traceConfigurationGlobalId" } } })], c2.prototype, "namedTraceConfigurationGlobalId", void 0), __decorate([a({ type: String, json: { write: true } })], c2.prototype, "gdbVersion", void 0), __decorate([a({ type: [n2], json: { write: true } })], c2.prototype, "traceLocations", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t ? t.getTime() : null;
} } } })], c2.prototype, "moment", void 0), __decorate([a({ type: S, json: { write: { allowNull: true, target: "outSR" } } })], c2.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], c2.prototype, "writeOutSR", null), __decorate([a({ type: p, json: { write: true } })], c2.prototype, "traceConfiguration", void 0), __decorate([a({ type: [Object], json: { write: true } })], c2.prototype, "resultTypes", void 0), __decorate([a({ type: a2.apiValues, json: { type: a2.jsonValues, read: a2.read, write: a2.write } })], c2.prototype, "traceType", void 0), c2 = u = __decorate([c("esri.rest.networks.support.TraceParameters")], c2);
var d = c2;
export {
  d as default
};
//# sourceMappingURL=TraceParameters-5KGWPNZG.js.map
