import {
  e
} from "./chunk-2H6CSSHD.js";
import {
  dt
} from "./chunk-Q2X7B3G7.js";
import {
  o
} from "./chunk-AOH3KBTD.js";
import {
  d
} from "./chunk-FQA45FSP.js";
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
//# sourceMappingURL=chunk-CMIKMRJF.js.map
