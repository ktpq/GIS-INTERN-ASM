import {
  t
} from "./chunk-X4R43FDP.js";
import {
  Rt
} from "./chunk-AYS5CQ25.js";
import {
  s2 as s
} from "./chunk-ESFGILEN.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js
var i = class extends t {
  constructor({ lineStart: n, lineEnd: i2, targetPoint: s2, isDraped: r }) {
    super(s2, new Rt(n, i2), r, 2), this._referenceLineHint = new s(2, n, i2, r, this.domain);
  }
  get hints() {
    return [this._referenceLineHint, new s(0, this._lineEndClosestToTarget(), this.targetPoint, this.isDraped, this.domain)];
  }
  _lineEndClosestToTarget() {
    return this.constraint.closestEndTo(this.targetPoint);
  }
};

export {
  i
};
//# sourceMappingURL=chunk-RPKBARV3.js.map
