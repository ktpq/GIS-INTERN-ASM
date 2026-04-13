import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  o
} from "./chunk-SZXJF3IE.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/OrderByInfo.js
var i;
var n2 = new o({ asc: "ascending", desc: "descending" });
var p = class extends n {
  static {
    i = this;
  }
  constructor(e) {
    super(e), this.field = null, this.valueExpression = null, this.order = "ascending";
  }
  clone() {
    return new i({ field: this.field, valueExpression: this.valueExpression, order: this.order });
  }
};
__decorate([a({ type: String, json: { write: true } })], p.prototype, "field", void 0), __decorate([a({ type: String, json: { write: true, origins: { "web-scene": { read: false, write: false } } } })], p.prototype, "valueExpression", void 0), __decorate([a({ type: n2.apiValues, json: { type: n2.jsonValues, read: n2.read, write: n2.write } })], p.prototype, "order", void 0), p = i = __decorate([c("esri.layers.support.OrderByInfo")], p);

export {
  p
};
//# sourceMappingURL=chunk-URA3RGOK.js.map
