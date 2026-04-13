import {
  a as a2
} from "./chunk-7HBQYB7N.js";
import {
  i2 as i
} from "./chunk-YNPTGDAS.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
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

// node_modules/@arcgis/core/layers/support/FeatureType.js
var n2 = class extends l(n) {
  constructor(o2) {
    super(o2), this.id = null, this.name = null, this.domains = null, this.templates = null;
  }
  readDomains(o2) {
    const r2 = {};
    for (const t of Object.keys(o2)) r2[t] = i(o2[t]);
    return r2;
  }
  writeDomains(o2, r2) {
    const t = {};
    for (const e of Object.keys(o2)) o2[e] && (t[e] = o2[e]?.toJSON());
    r2.domains = t;
  }
};
__decorate([a({ json: { write: true } })], n2.prototype, "id", void 0), __decorate([a({ json: { write: true } })], n2.prototype, "name", void 0), __decorate([a({ json: { write: true } })], n2.prototype, "domains", void 0), __decorate([o("domains")], n2.prototype, "readDomains", null), __decorate([r("domains")], n2.prototype, "writeDomains", null), __decorate([a({ type: [a2], json: { write: true } })], n2.prototype, "templates", void 0), n2 = __decorate([c("esri.layers.support.FeatureType")], n2);

export {
  n2 as n
};
//# sourceMappingURL=chunk-J2K7USJX.js.map
