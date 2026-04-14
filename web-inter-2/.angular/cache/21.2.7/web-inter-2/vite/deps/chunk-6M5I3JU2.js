import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a2,
  c
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var p;
var l = new o({ upperLeft: "upper-left", lowerLeft: "lower-left" });
var m = p = class extends n {
  constructor(e) {
    super(e), this.extent = null, this.mode = "view", this.originPosition = "upper-left", this.tolerance = 1;
  }
  clone() {
    return new p(a({ extent: this.extent, mode: this.mode, originPosition: this.originPosition, tolerance: this.tolerance }));
  }
};
__decorate([a2({ type: z, json: { write: { overridePolicy() {
  return { enabled: "view" === this.mode };
} } } })], m.prototype, "extent", void 0), __decorate([a2({ type: ["view", "edit"], json: { write: true } })], m.prototype, "mode", void 0), __decorate([a2({ type: String, json: { read: l.read, write: l.write } })], m.prototype, "originPosition", void 0), __decorate([a2({ type: Number, json: { write: { overridePolicy() {
  return { enabled: "view" === this.mode };
} } } })], m.prototype, "tolerance", void 0), m = p = __decorate([c("esri.rest.support.QuantizationParameters")], m);

export {
  m
};
//# sourceMappingURL=chunk-6M5I3JU2.js.map
