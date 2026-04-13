import {
  e
} from "./chunk-2H6CSSHD.js";
import {
  Ut
} from "./chunk-Q2X7B3G7.js";
import {
  s2 as s
} from "./chunk-HIVNEJHE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js
var e2 = class extends e {
  constructor(n) {
    super(__spreadProps(__spreadValues({}, n), { isDraped: true, constraint: new Ut(n.edgeStart, n.edgeEnd, n.getGroundElevation) }));
  }
  get hints() {
    return [new s(1, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  e2 as e
};
//# sourceMappingURL=chunk-IYF4C4OE.js.map
