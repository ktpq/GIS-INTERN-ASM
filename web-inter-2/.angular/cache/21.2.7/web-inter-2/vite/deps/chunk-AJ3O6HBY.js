import {
  e
} from "./chunk-7IQ3RIWD.js";
import {
  Ut
} from "./chunk-UQ3VZPCJ.js";
import {
  s2 as s
} from "./chunk-ESFGILEN.js";
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
//# sourceMappingURL=chunk-AJ3O6HBY.js.map
