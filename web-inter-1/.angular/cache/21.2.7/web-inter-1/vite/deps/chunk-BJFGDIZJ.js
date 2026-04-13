import {
  e
} from "./chunk-FSLFKRK7.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";
import {
  n
} from "./chunk-47CFN4JI.js";
import {
  o
} from "./chunk-5GPMO33J.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js
function a(e2) {
  e2.uniforms.add(new e("zProjectionMap", (e3) => d(e3.camera))), e2.code.add(t`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`), e2.code.add(t`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`), e2.code.add(t`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`), e2.code.add(t`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`);
}
function d(t2) {
  const r = t2.projectionMatrix;
  return o(c, r[14], r[10]);
}
var c = n();

export {
  a
};
//# sourceMappingURL=chunk-BJFGDIZJ.js.map
