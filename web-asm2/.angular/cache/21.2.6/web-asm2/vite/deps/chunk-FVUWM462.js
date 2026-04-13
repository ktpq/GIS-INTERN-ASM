import {
  t
} from "./chunk-EWB3NJAR.js";
import {
  gt,
  mt,
  xe
} from "./chunk-5R5DKW26.js";
import {
  i
} from "./chunk-K3AAWICR.js";
import {
  s2 as s
} from "./chunk-HIVNEJHE.js";
import {
  e
} from "./chunk-QK7JX7UE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js
var e2 = class extends t {
  constructor({ targetPoint: t2, objectId: e3, constraint: r, isDraped: s2, layer: a2 }) {
    super(t2, r, s2, 1), this.objectId = e3, this.layer = a2;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js
var a = class extends e2 {
  constructor(s2) {
    const i2 = !s2.curve || e(s2.curve) ? new mt(s2.edgeStart, s2.edgeEnd) : new gt(s2.edgeStart, s2.curve);
    super(__spreadProps(__spreadValues({}, s2), { constraint: i2 }));
  }
  get hints() {
    return xe(this.constraint) ? [new i(this.constraint.start, this.constraint.curve, this.domain)] : [new s(1, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  e2 as e,
  a
};
//# sourceMappingURL=chunk-FVUWM462.js.map
