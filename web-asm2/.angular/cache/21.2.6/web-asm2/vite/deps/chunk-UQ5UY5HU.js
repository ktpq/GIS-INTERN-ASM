import {
  e as e2
} from "./chunk-IBVWG56S.js";
import {
  e
} from "./chunk-UCQU6LZ5.js";
import {
  t
} from "./chunk-QLAEYQER.js";
import {
  n as n2
} from "./chunk-ULRT2MRD.js";
import {
  n
} from "./chunk-IXOUFXRS.js";
import {
  o as o2
} from "./chunk-XA4KTSOB.js";
import {
  o
} from "./chunk-EFJUSEVJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js
function c(r) {
  r.fragment.uniforms.add(new e2("projInfo", (r2) => n3(r2.camera))), r.fragment.uniforms.add(new e("zScale", (r2) => m(r2.camera))), r.fragment.code.add(t`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function n3(r) {
  const o3 = r.projectionMatrix;
  return 0 === o3[11] ? o2(s, 2 / (r.fullWidth * o3[0]), 2 / (r.fullHeight * o3[5]), (1 + o3[12]) / o3[0], (1 + o3[13]) / o3[5]) : o2(s, -2 / (r.fullWidth * o3[0]), -2 / (r.fullHeight * o3[5]), (1 - o3[8]) / o3[0], (1 - o3[9]) / o3[5]);
}
var s = n();
function m(o3) {
  return 0 === o3.projectionMatrix[11] ? o(l, 0, 1) : o(l, 1, 0);
}
var l = n2();

export {
  c
};
//# sourceMappingURL=chunk-UQ5UY5HU.js.map
