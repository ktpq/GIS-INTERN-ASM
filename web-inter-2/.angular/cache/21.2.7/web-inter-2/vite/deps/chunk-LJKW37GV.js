import {
  g
} from "./chunk-CLQKOCYA.js";
import {
  j
} from "./chunk-TE5PBIJT.js";
import {
  l
} from "./chunk-F6AS75CS.js";
import {
  a3 as a2,
  c,
  o4 as o
} from "./chunk-XCGM4D6U.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
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
//# sourceMappingURL=chunk-LJKW37GV.js.map
