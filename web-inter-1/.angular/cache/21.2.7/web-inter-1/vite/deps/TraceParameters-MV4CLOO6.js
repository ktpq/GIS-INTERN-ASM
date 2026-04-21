import {
  p
} from "./chunk-KGVYM7W7.js";
import {
  n as n2
} from "./chunk-MB5U7Y4F.js";
import {
  a as a2
} from "./chunk-DFNEH2UF.js";
import "./chunk-7ZFYLJ6O.js";
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
//# sourceMappingURL=TraceParameters-MV4CLOO6.js.map
