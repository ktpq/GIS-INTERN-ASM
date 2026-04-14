import {
  t as t2
} from "./chunk-X4R43FDP.js";
import {
  Lt,
  Rt
} from "./chunk-UQ3VZPCJ.js";
import {
  i
} from "./chunk-2MZ5GMWO.js";
import {
  r
} from "./chunk-WWLONSVS.js";
import {
  s2
} from "./chunk-ESFGILEN.js";
import {
  c as c2,
  s
} from "./chunk-Z7VSM22T.js";
import {
  C,
  I,
  c,
  e
} from "./chunk-SGNC5H35.js";
import {
  n,
  t
} from "./chunk-KEY3YQEB.js";
import {
  m
} from "./chunk-5GPMO33J.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/ParallelLineSnappingCandidate.js
var h = class extends t2 {
  constructor({ referenceLine: i2, lineStart: a, targetPoint: f, isDraped: d }) {
    const h2 = t(a), { left: o, right: g } = i2;
    e(h2, c(h2, h2, g), o), super(f, new Rt(a, c2(h2)), d, 2), this._referenceLines = [{ edge: i2, fadeLeft: true, fadeRight: true }];
  }
  get hints() {
    return [new s2(0, this.constraint.start, this.targetPoint, this.isDraped, this.domain), new i(this.constraint.start, this.targetPoint, this.isDraped, this.domain), ...this._referenceLines.map((e2) => new s2(1, e2.edge.left, e2.edge.right, this.isDraped, this.domain, e2.fadeLeft, e2.fadeRight))];
  }
  addReferenceLine(e2) {
    const t3 = { edge: e2, fadeLeft: true, fadeRight: true };
    this._referenceLines.forEach((r2) => {
      C(e2.right, r2.edge.left) && (r2.fadeLeft = false, t3.fadeRight = false), C(e2.right, r2.edge.right) && (r2.fadeRight = false, t3.fadeRight = false), C(e2.left, r2.edge.right) && (r2.fadeRight = false, t3.fadeLeft = false), C(e2.left, r2.edge.left) && (r2.fadeLeft = false, t3.fadeLeft = false);
    }), this._referenceLines.push(t3);
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleTriangleSnappingCandidate.js
var m2 = class extends t2 {
  constructor({ targetPoint: e2, point1: p, point2: a, isDraped: m3 }) {
    super(e2, new Lt(c2(I(n(), p, a, 0.5)), 0.5 * m(s(p), s(a))), m3, 2), this._p1 = p, this._p2 = a;
  }
  get hints() {
    return [new s2(1, this.targetPoint, this._p1, this.isDraped, this.domain), new s2(1, this.targetPoint, this._p2, this.isDraped, this.domain), new r(this._p1, this.targetPoint, this._p2, this.isDraped, this.domain)];
  }
};

export {
  h,
  m2 as m
};
//# sourceMappingURL=chunk-2TBV7KA5.js.map
