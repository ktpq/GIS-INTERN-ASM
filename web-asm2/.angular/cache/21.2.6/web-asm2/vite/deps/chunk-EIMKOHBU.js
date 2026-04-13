import {
  e as e3
} from "./chunk-YXR2ZZI3.js";
import {
  t
} from "./chunk-U5UDUOV3.js";
import {
  e as e2
} from "./chunk-KJJXUXUA.js";
import {
  r
} from "./chunk-6NVAPYAK.js";
import {
  i as i2
} from "./chunk-EQBT6655.js";
import {
  u
} from "./chunk-YM62CGUL.js";
import {
  i
} from "./chunk-D4W5U2I5.js";
import {
  e
} from "./chunk-XSQPGBLC.js";
import {
  a,
  n
} from "./chunk-MLBRAI7B.js";

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
//# sourceMappingURL=chunk-EIMKOHBU.js.map
