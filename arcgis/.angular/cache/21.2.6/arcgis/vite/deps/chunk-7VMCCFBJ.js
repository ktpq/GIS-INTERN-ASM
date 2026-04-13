import {
  B as B2,
  k,
  q,
  w,
  z
} from "./chunk-Z2AEQM3R.js";
import {
  y
} from "./chunk-LW5ZVONF.js";
import {
  e as e2
} from "./chunk-C6P3JIAK.js";
import {
  B,
  P,
  h
} from "./chunk-D4W5U2I5.js";
import {
  n as n2,
  r,
  t,
  u
} from "./chunk-MLBRAI7B.js";
import {
  l
} from "./chunk-NSJQHJ2B.js";
import {
  e
} from "./chunk-XSQPGBLC.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/support/MeshTransform.js
var A = class extends l(n) {
  constructor(t2) {
    super(t2), this.translation = n2(), this.rotationAxis = u(B2), this.rotationAngle = 0, this.scale = r(1, 1, 1);
  }
  get rotation() {
    return q(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t2) {
    this.rotationAxis = t(k(t2)), this.rotationAngle = w(t2);
  }
  get localMatrix() {
    const t2 = e();
    return y(N, k(this.rotation), z(this.rotation)), P(t2, N, this.translation, this.scale), t2;
  }
  get localMatrixInverse() {
    return h(e(), this.localMatrix);
  }
  equals(t2) {
    return this === t2 || null != t2 && B(this.localMatrix, t2.localMatrix);
  }
};
__decorate([a({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "translation", void 0), __decorate([a({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "rotationAxis", void 0), __decorate([a({ type: Number, nonNullable: true, json: { write: true } })], A.prototype, "rotationAngle", void 0), __decorate([a({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "scale", void 0), __decorate([a()], A.prototype, "rotation", null), __decorate([a()], A.prototype, "localMatrix", null), __decorate([a()], A.prototype, "localMatrixInverse", null), A = __decorate([c("esri.geometry.support.MeshTransform")], A);
var N = e2();

export {
  A
};
//# sourceMappingURL=chunk-7VMCCFBJ.js.map
