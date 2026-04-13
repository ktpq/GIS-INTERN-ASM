import {
  e
} from "./chunk-FVUWM462.js";
import {
  dt
} from "./chunk-5R5DKW26.js";
import {
  o
} from "./chunk-AOH3KBTD.js";
import {
  d
} from "./chunk-6EWCUMLH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var o2 = class extends e {
  constructor(n) {
    super(__spreadProps(__spreadValues({}, n), { constraint: new dt(n.targetPoint) })), this.originalTargetPoint = n.originalTargetPoint ?? d(n.targetPoint);
  }
  get hints() {
    return [new o(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  o2 as o
};
//# sourceMappingURL=chunk-PMIICJPH.js.map
