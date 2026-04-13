import {
  p,
  s
} from "./chunk-U3A3UR6Y.js";
import {
  a as a2
} from "./chunk-CR2FSXZK.js";
import {
  e
} from "./chunk-SWNARI4F.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  o4 as o
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/networks/support/NamedTraceConfiguration.js
var d = class extends e(b) {
  constructor(r) {
    super(r), this.globalId = null, this.title = null, this.traceConfiguration = null, this.creationDate = null, this.creator = null, this.description = null, this.minStartingPoints = null, this.resultTypes = [], this.tags = [], this.traceType = null;
  }
  readTraceConfiguration(r, e2) {
    return void 0 !== r.tierName ? p.fromJSON(r) : s.fromJSON(r);
  }
};
__decorate([a({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "id" }, write: { target: "id", isRequired: true } }, service: { read: { source: "globalId" }, write: { target: "globalId", isRequired: true } } }, read: false } })], d.prototype, "globalId", void 0), __decorate([a({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "title" }, write: { target: "title", isRequired: true } }, service: { read: { source: "name" }, write: { target: "name", isRequired: true } } }, read: false } })], d.prototype, "title", void 0), __decorate([a({ type: s, json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "traceConfiguration", void 0), __decorate([o("service", "traceConfiguration")], d.prototype, "readTraceConfiguration", null), __decorate([a({ type: Date, json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "creationDate", void 0), __decorate([a({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "creator", void 0), __decorate([a({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "description", void 0), __decorate([a({ type: ["none", "one", "many"], json: { origins: { service: { read: { source: "minNumStartingPoints" }, write: { target: "minNumStartingPoints" } } }, read: false } })], d.prototype, "minStartingPoints", void 0), __decorate([a({ json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "resultTypes", void 0), __decorate([a({ type: [String], json: { origins: { service: { read: true, write: true } }, read: false } })], d.prototype, "tags", void 0), __decorate([a({ type: a2.apiValues, json: { type: a2.jsonValues, origins: { service: { read: a2.read, write: a2.write } }, read: false } })], d.prototype, "traceType", void 0), d = __decorate([c("esri.networks.support.NamedTraceConfiguration")], d);
var c2 = d;

export {
  c2 as c
};
//# sourceMappingURL=chunk-KZ3HICLT.js.map
