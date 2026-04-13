import {
  B as B2,
  k,
  q,
  w,
  z
} from "./chunk-KRQGBKAD.js";
import {
  y
} from "./chunk-IDOYDUWX.js";
import {
  e as e2
} from "./chunk-UFNIHRKY.js";
import {
  B,
  P,
  h
} from "./chunk-IRS5H2YE.js";
import {
  e
} from "./chunk-XNNZ2U24.js";
import {
  n as n2,
  r,
  t,
  u
} from "./chunk-KEY3YQEB.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
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
//# sourceMappingURL=chunk-ODBHVRWF.js.map
