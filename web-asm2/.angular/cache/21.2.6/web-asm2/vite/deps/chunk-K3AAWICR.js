import {
  s
} from "./chunk-HIVNEJHE.js";
import {
  C
} from "./chunk-YM62CGUL.js";
import {
  p
} from "./chunk-QK7JX7UE.js";

// node_modules/@arcgis/core/views/interactive/snapping/hints/CurveSnappingHint.js
var i = class _i extends s {
  constructor(t, r, s2 = 1) {
    super(false, s2), this.start = t, this.curve = r;
  }
  equals(s2) {
    return s2 instanceof _i && C(this.start, s2.start) && p(this.curve, s2.curve) && this.isDraped === s2.isDraped && this.domain === s2.domain;
  }
};

export {
  i
};
//# sourceMappingURL=chunk-K3AAWICR.js.map
