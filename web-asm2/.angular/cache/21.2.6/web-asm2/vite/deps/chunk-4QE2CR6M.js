import {
  t
} from "./chunk-QLAEYQER.js";
import {
  p
} from "./chunk-S3BACLSK.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js
function r(r2) {
  r2.constants.add("GAMMA", "float", p).constants.add("INV_GAMMA", "float", 1 / p).code.add(t`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`);
}

export {
  r
};
//# sourceMappingURL=chunk-4QE2CR6M.js.map
