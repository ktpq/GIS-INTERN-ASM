import {
  s
} from "./chunk-X7HOEUCF.js";
import {
  p
} from "./chunk-KFUUHWZV.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  m
} from "./chunk-XCGM4D6U.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsParameters.js
var n2;
var m2 = n2 = class extends n {
  static from(e) {
    return m(n2, e);
  }
  constructor(e) {
    super(e), this.returnDeletes = false, this.elements = [], this.types = [], this.gdbVersion = null, this.moment = null;
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], m2.prototype, "returnDeletes", void 0), __decorate([a({ type: [p], json: { write: true } })], m2.prototype, "elements", void 0), __decorate([a({ type: [s.apiValues], json: { type: s.jsonValues, read: s.read, write: s.write } })], m2.prototype, "types", void 0), __decorate([a({ type: String, json: { write: true } })], m2.prototype, "gdbVersion", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (e, t) => {
  t.moment = e?.getTime();
} } } })], m2.prototype, "moment", void 0), m2 = n2 = __decorate([c("esri.rest.networks.support.QueryAssociationsParameters")], m2);

export {
  m2 as m
};
//# sourceMappingURL=chunk-4VTNLLZP.js.map
