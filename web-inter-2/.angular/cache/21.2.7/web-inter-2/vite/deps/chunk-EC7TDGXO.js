import {
  D,
  U,
  h,
  m,
  r as r3,
  w,
  y
} from "./chunk-XWBLBUQP.js";
import {
  l
} from "./chunk-F6AS75CS.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  o4 as o,
  r3 as r,
  r4 as r2
} from "./chunk-XCGM4D6U.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/support/TravelMode.js
var b = class extends l(n) {
  constructor(t) {
    super(t), this.attributeParameterValues = null, this.description = null, this.distanceAttributeName = null, this.id = null, this.impedanceAttributeName = null, this.name = null, this.restrictionAttributeNames = null, this.simplificationTolerance = null, this.simplificationToleranceUnits = null, this.timeAttributeName = null, this.type = null, this.useHierarchy = null, this.uturnAtJunctions = null;
  }
  readId(t, e) {
    return e.id ?? e.itemId ?? null;
  }
  readRestrictionAttributes(t, e) {
    const { restrictionAttributeNames: r4 } = e;
    return null == r4 ? null : r4.map((t2) => w.fromJSON(t2));
  }
  writeRestrictionAttributes(t, e, r4) {
    null != t && (e[r4] = t.map((t2) => w.toJSON(t2)));
  }
};
__decorate([a({ type: [Object], json: { write: true } })], b.prototype, "attributeParameterValues", void 0), __decorate([a({ type: String, json: { write: true } })], b.prototype, "description", void 0), __decorate([r(y, { ignoreUnknown: false })], b.prototype, "distanceAttributeName", void 0), __decorate([a({ type: String, json: { write: true } })], b.prototype, "id", void 0), __decorate([o("id", ["id", "itemId"])], b.prototype, "readId", null), __decorate([r(D, { ignoreUnknown: false })], b.prototype, "impedanceAttributeName", void 0), __decorate([a({ type: String, json: { write: true } })], b.prototype, "name", void 0), __decorate([a({ type: [String], json: { write: true } })], b.prototype, "restrictionAttributeNames", void 0), __decorate([o("restrictionAttributeNames")], b.prototype, "readRestrictionAttributes", null), __decorate([r2("restrictionAttributeNames")], b.prototype, "writeRestrictionAttributes", null), __decorate([a({ type: Number, json: { write: { allowNull: true } } })], b.prototype, "simplificationTolerance", void 0), __decorate([r(r3)], b.prototype, "simplificationToleranceUnits", void 0), __decorate([r(U, { ignoreUnknown: false })], b.prototype, "timeAttributeName", void 0), __decorate([r(h)], b.prototype, "type", void 0), __decorate([a({ type: Boolean, json: { write: true } })], b.prototype, "useHierarchy", void 0), __decorate([r(m)], b.prototype, "uturnAtJunctions", void 0), b = __decorate([c("esri.rest.support.TravelMode")], b);

export {
  b
};
//# sourceMappingURL=chunk-EC7TDGXO.js.map
