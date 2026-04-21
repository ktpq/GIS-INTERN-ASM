import {
  g
} from "./chunk-SWZYRYDU.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  D,
  a3 as a,
  c,
  r4 as r
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var i;
var u = i = class extends n {
  constructor(r2) {
    super(r2), this.color = null, this.label = null, this.value = null;
  }
  writeValue(r2, o, e) {
    o[e] = r2 ?? 0;
  }
  clone() {
    return new i({ color: this.color && this.color.clone(), label: this.label, value: this.value });
  }
};
__decorate([a({ type: g, json: { type: [D], write: { isRequired: true } } })], u.prototype, "color", void 0), __decorate([a({ type: String, json: { write: true } })], u.prototype, "label", void 0), __decorate([a({ type: Number, json: { write: { writerEnsuresNonNull: true } } })], u.prototype, "value", void 0), __decorate([r("value")], u.prototype, "writeValue", null), u = i = __decorate([c("esri.renderers.visualVariables.support.ColorStop")], u);
var a2 = u;

export {
  a2 as a
};
//# sourceMappingURL=chunk-SJ6NAIRM.js.map
