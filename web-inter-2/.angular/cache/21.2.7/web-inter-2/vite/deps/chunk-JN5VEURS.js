import {
  e
} from "./chunk-Q4EMEKGU.js";
import {
  dt
} from "./chunk-AYS5CQ25.js";
import {
  o
} from "./chunk-JRYX6JST.js";
import {
  d
} from "./chunk-ZV255XC4.js";
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
//# sourceMappingURL=chunk-JN5VEURS.js.map
