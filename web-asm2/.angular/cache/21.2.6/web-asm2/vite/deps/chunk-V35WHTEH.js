import {
  g
} from "./chunk-Q5KXJ6ZA.js";
import {
  j
} from "./chunk-TV7JW3IK.js";
import {
  l
} from "./chunk-DUGX5C7M.js";
import {
  a3 as a2,
  c,
  o4 as o
} from "./chunk-GUGGSMY4.js";
import {
  a
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/AttributeBinsGraphic.js
var i;
var c2 = class extends j {
  static {
    i = this;
  }
  constructor(t) {
    super(t), this.stackedAttributes = null;
  }
  cloneShallow() {
    return new i(Object.assign({ stackedAttributes: this.stackedAttributes }, super.cloneShallow()));
  }
  toJSON() {
    return __spreadProps(__spreadValues({}, super.toJSON()), { stackedAttributes: a(this.stackedAttributes) });
  }
};
__decorate([a2()], c2.prototype, "stackedAttributes", void 0), c2 = i = __decorate([c("esri.AttributeBinsGraphic")], c2);

// node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js
var i2 = class extends l(g) {
  constructor(r) {
    super(r), this.features = [];
  }
  readFeatures(r, t) {
    return this.readFeaturesWithClass(r, t, c2);
  }
};
__decorate([a2({ type: [c2], json: { write: true } })], i2.prototype, "features", void 0), __decorate([o("features")], i2.prototype, "readFeatures", null), i2 = __decorate([c("esri.rest.support.AttributeBinsFeatureSet")], i2);

export {
  i2 as i
};
//# sourceMappingURL=chunk-V35WHTEH.js.map
