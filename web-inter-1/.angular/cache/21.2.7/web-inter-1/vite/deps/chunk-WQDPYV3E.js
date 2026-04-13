import {
  S,
  y as y2
} from "./chunk-5GUODJ3Q.js";
import {
  s
} from "./chunk-IIY7ORCT.js";
import {
  p
} from "./chunk-XDB4VVVR.js";
import {
  m
} from "./chunk-FMIKVU3Q.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/circuits/support/CircuitTraceResult.js
var u = class extends n {
  constructor(t) {
    super(t), this.circuit = null, this.geometry = null, this.path = null;
  }
  readCircuit(t, r2) {
    return S.fromJSON(r2);
  }
};
__decorate([a({ json: { type: S, write: true, read: { source: ["name", "globalId", "isSectioned", "sectionOrder", "startLocation", "stopLocation", "sections", "subcircuits", "lastVerifiedTime", "lastExportedTime", "circuitType", "status"] } } })], u.prototype, "circuit", void 0), __decorate([o("circuit")], u.prototype, "readCircuit", null), __decorate([a({ type: y, json: { write: true } })], u.prototype, "geometry", void 0), __decorate([a({ type: y2, json: { write: true } })], u.prototype, "path", void 0), u = __decorate([c("esri.rest.networks.circuits.support.CircuitTraceResult")], u);
var a2 = u;

// node_modules/@arcgis/core/rest/networks/support/AggregatedGeometry.js
var n2 = class extends n {
  constructor(o2) {
    super(o2), this.line = null, this.multipoint = null, this.polygon = null;
  }
};
__decorate([a({ type: y, json: { write: true }, readOnly: true })], n2.prototype, "line", void 0), __decorate([a({ type: m, json: { read: { source: "point" }, write: { target: "point" } }, readOnly: true })], n2.prototype, "multipoint", void 0), __decorate([a({ type: j, json: { write: true }, readOnly: true })], n2.prototype, "polygon", void 0), n2 = __decorate([c("esri.rest.networks.support.AggregatedGeometry")], n2);
var l = n2;

// node_modules/@arcgis/core/rest/networks/support/FunctionResult.js
var s2 = class extends n {
  constructor(t) {
    super(t), this.functionType = null, this.networkAttributeName = null, this.result = null;
  }
};
__decorate([a({ type: ["add", "subtract", "average", "count", "min", "max"], json: { write: true }, readOnly: true })], s2.prototype, "functionType", void 0), __decorate([a({ type: String, json: { write: true }, readOnly: true })], s2.prototype, "networkAttributeName", void 0), __decorate([a({ type: Number, json: { write: true }, readOnly: true })], s2.prototype, "result", void 0), s2 = __decorate([c("esri.rest.networks.support.FunctionResult")], s2);
var n3 = s2;

// node_modules/@arcgis/core/rest/networks/support/TraceResult.js
var d = class extends n {
  constructor(e) {
    super(e), this.aggregatedGeometry = null, this.circuits = null, this.elements = null, this.globalFunctionResults = null, this.kFeaturesForKNNFound = false, this.paths = null, this.startingPointsIgnored = false, this.warnings = null;
  }
  readNetworkElements(e, t) {
    return null != t.elements && Array.isArray(t.elements) ? t.elements.map((e2) => "firstUnit" in e2 && "lastUnit" in e2 ? new s(__spreadValues({}, e2)) : new p(__spreadValues({}, e2))) : [];
  }
  writeNetworkElements(e, t) {
    t.elements = e.map((e2) => e2.toJSON());
  }
};
__decorate([a({ type: l, json: { write: true }, readOnly: true })], d.prototype, "aggregatedGeometry", void 0), __decorate([a({ type: [a2], json: { write: true }, readOnly: true })], d.prototype, "circuits", void 0), __decorate([a({ type: [p], json: { write: true }, readOnly: true })], d.prototype, "elements", void 0), __decorate([o("elements")], d.prototype, "readNetworkElements", null), __decorate([r("elements")], d.prototype, "writeNetworkElements", null), __decorate([a({ type: [n3], json: { write: true }, readOnly: true })], d.prototype, "globalFunctionResults", void 0), __decorate([a({ type: Boolean, json: { write: true }, readOnly: true })], d.prototype, "kFeaturesForKNNFound", void 0), __decorate([a({ type: [y2], json: { write: true }, readOnly: true })], d.prototype, "paths", void 0), __decorate([a({ type: Boolean, json: { write: true }, readOnly: true })], d.prototype, "startingPointsIgnored", void 0), __decorate([a({ type: [String], json: { write: true }, readOnly: true })], d.prototype, "warnings", void 0), d = __decorate([c("esri.rest.networks.support.TraceResult")], d);

export {
  d
};
//# sourceMappingURL=chunk-WQDPYV3E.js.map
