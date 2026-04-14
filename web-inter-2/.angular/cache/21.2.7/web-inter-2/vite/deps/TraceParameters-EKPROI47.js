import {
  n as n2
} from "./chunk-VMMJQHU4.js";
import {
  p
} from "./chunk-MSPMICG4.js";
import {
  a as a2
} from "./chunk-IC4VMYLB.js";
import "./chunk-NLVGGH5B.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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
//# sourceMappingURL=TraceParameters-EKPROI47.js.map
