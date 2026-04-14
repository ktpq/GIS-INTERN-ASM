import {
  t
} from "./chunk-YJDLYSXS.js";
import {
  e as e3
} from "./chunk-2XCVIFX5.js";
import {
  e as e2
} from "./chunk-K37WI5OC.js";
import {
  r
} from "./chunk-3PQD3FB4.js";
import {
  i as i2
} from "./chunk-64IPP4Z5.js";
import {
  u
} from "./chunk-SGNC5H35.js";
import {
  i
} from "./chunk-IRS5H2YE.js";
import {
  a,
  n
} from "./chunk-KEY3YQEB.js";
import {
  e
} from "./chunk-XNNZ2U24.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js
var t2 = class extends i2 {
  constructor(r2, t3, o) {
    super(r2, "mat4", 2, (s, e4, m) => s.setUniformMatrix4fv(r2, t3(e4, m), o));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
function d(r2, i3) {
  i3.instancedDoublePrecision ? r2.constants.add("cameraPosition", "vec3", a) : r2.uniforms.add(new e2("cameraPosition", (r3, i4) => u(v, i4.camera.viewInverseTransposeMatrix[3] - r3.origin[0], i4.camera.viewInverseTransposeMatrix[7] - r3.origin[1], i4.camera.viewInverseTransposeMatrix[11] - r3.origin[2])));
}
function f(i3, o) {
  if (!o.instancedDoublePrecision) return void i3.uniforms.add(new t("proj", (r2) => r2.camera.projectionMatrix), new t2("view", (i4, e4) => i(l, e4.camera.viewMatrix, i4.origin)), new e2("localOrigin", (r2) => r2.origin));
  const a2 = ({ camera: r2 }) => u(v, r2.viewInverseTransposeMatrix[3], r2.viewInverseTransposeMatrix[7], r2.viewInverseTransposeMatrix[11]);
  i3.uniforms.add(new t("proj", (r2) => r2.camera.projectionMatrix), new t("view", (i4) => i(l, i4.camera.viewMatrix, a2(i4))), new e3("localOrigin", (r2) => a2(r2)));
}
var l = e();
var v = n();
function p(r2) {
  r2.uniforms.add(new t("viewNormal", (r3) => r3.camera.viewInverseTransposeMatrix));
}
function w(r2) {
  r2.uniforms.add(new r("pixelRatio", (r3) => r3.camera.pixelRatio / r3.overlayStretch));
}

export {
  t2 as t,
  d,
  f,
  p,
  w
};
//# sourceMappingURL=chunk-WVZRCHFC.js.map
