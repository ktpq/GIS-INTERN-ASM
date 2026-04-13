import {
  m as m2
} from "./chunk-7YXBCFCF.js";
import {
  s
} from "./chunk-OOSRFM7N.js";
import {
  u
} from "./chunk-DOVHXPQB.js";
import {
  q
} from "./chunk-4UWOVR5Y.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/IdentifyParameters.js
var a2;
var d = a2 = class extends n {
  static from(t) {
    return m(a2, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
  get sublayers() {
    return this._get("sublayers") ?? null;
  }
  set sublayers(t) {
    this._set("sublayers", m(q, t));
  }
};
__decorate([a({ type: Number, json: { write: true } })], d.prototype, "dpi", void 0), __decorate([a()], d.prototype, "floors", void 0), __decorate([a({ type: String, json: { write: true } })], d.prototype, "gdbVersion", void 0), __decorate([a({ types: s, json: { read: u, write: true } })], d.prototype, "geometry", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "geometryPrecision", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "height", void 0), __decorate([a({ type: Date })], d.prototype, "historicMoment", void 0), __decorate([r("historicMoment")], d.prototype, "writeHistoricMoment", null), __decorate([a({ type: [Number], json: { write: true } })], d.prototype, "layerIds", void 0), __decorate([a({ type: ["top", "visible", "all", "popup"], json: { write: true } })], d.prototype, "layerOption", void 0), __decorate([a({ type: z, json: { write: true } })], d.prototype, "mapExtent", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "maxAllowableOffset", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d.prototype, "returnFieldName", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d.prototype, "returnGeometry", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d.prototype, "returnM", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d.prototype, "returnUnformattedValues", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d.prototype, "returnZ", void 0), __decorate([a({ type: S, json: { write: true } })], d.prototype, "spatialReference", void 0), __decorate([a()], d.prototype, "sublayers", null), __decorate([a({ type: m2, json: { write: true } })], d.prototype, "timeExtent", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "tolerance", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "width", void 0), d = a2 = __decorate([c("esri.rest.support.IdentifyParameters")], d);
var c2 = d;

export {
  c2 as c
};
//# sourceMappingURL=chunk-TCXNGMY4.js.map
