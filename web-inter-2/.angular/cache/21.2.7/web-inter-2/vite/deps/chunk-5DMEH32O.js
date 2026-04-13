import {
  t
} from "./chunk-X4R43FDP.js";
import {
  dt
} from "./chunk-AYS5CQ25.js";
import {
  n
} from "./chunk-UF3I2KBG.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/IntersectionSnappingCandidate.js
var n2 = class extends t {
  constructor(i, s, n3, r) {
    super(i, new dt(i), r, 3), this.first = s, this.second = n3;
  }
  get hints() {
    return this.first.targetPoint = this.targetPoint, this.second.targetPoint = this.targetPoint, [...this.first.hints, ...this.second.hints, new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  n2 as n
};
//# sourceMappingURL=chunk-5DMEH32O.js.map
