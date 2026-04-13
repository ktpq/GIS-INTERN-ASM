import {
  n as n3,
  r
} from "./chunk-3QLZQBWH.js";
import {
  l
} from "./chunk-DUGX5C7M.js";
import {
  n as n2
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a2,
  c,
  m3 as m
} from "./chunk-GUGGSMY4.js";
import {
  a,
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var p;
var u = p = class extends l(n2) {
  constructor(t) {
    super(t), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(t) {
    return n3(t, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, n.getLogger(this));
  }
  castPosition(t) {
    t && t instanceof Float32Array && n.getLogger(this).warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");
    return n3(t, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, n.getLogger(this));
  }
  castUv(t) {
    return n3(t, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, n.getLogger(this));
  }
  castNormal(t) {
    return n3(t, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, n.getLogger(this));
  }
  castTangent(t) {
    return n3(t, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, n.getLogger(this));
  }
  clonePositional() {
    const t = { position: a(this.position), normal: a(this.normal), tangent: a(this.tangent), uv: this.uv, color: this.color };
    return new p(t);
  }
  get usedMemory() {
    return this.position.byteLength + (this.uv?.byteLength ?? 0) + (this.normal?.byteLength ?? 0) + (this.tangent?.byteLength ?? 0) + (this.color?.byteLength ?? 0);
  }
};
__decorate([a2({ json: { write: r } })], u.prototype, "color", void 0), __decorate([m("color")], u.prototype, "castColor", null), __decorate([a2({ nonNullable: true, json: { write: r } })], u.prototype, "position", void 0), __decorate([m("position")], u.prototype, "castPosition", null), __decorate([a2({ json: { write: r } })], u.prototype, "uv", void 0), __decorate([m("uv")], u.prototype, "castUv", null), __decorate([a2({ json: { write: r } })], u.prototype, "normal", void 0), __decorate([m("normal")], u.prototype, "castNormal", null), __decorate([a2({ json: { write: r } })], u.prototype, "tangent", void 0), __decorate([m("tangent")], u.prototype, "castTangent", null), u = p = __decorate([c("esri.geometry.support.MeshVertexAttributes")], u);

export {
  u
};
//# sourceMappingURL=chunk-EDHLQYIY.js.map
