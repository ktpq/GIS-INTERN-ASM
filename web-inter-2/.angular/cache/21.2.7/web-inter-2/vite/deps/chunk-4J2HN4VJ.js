import {
  e
} from "./chunk-4XVNKYD7.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";
import {
  u
} from "./chunk-SGNC5H35.js";
import {
  n
} from "./chunk-KEY3YQEB.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js
function s(e2) {
  e2.vertex.code.add(t`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), e2.vertex.code.add(t`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`), e2.vertex.code.add(t`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`), e2.vertex.code.add(t`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), e2.vertex.code.add(t`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`), e2.vertex.code.add(t`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function t2(e2) {
  e2.uniforms.add(new e("screenSizePerspective", (e3) => o(e3.screenSizePerspective, e3.screenSizePerspectiveMinPixelReferenceSize)));
}
function i(e2) {
  e2.uniforms.add(new e("screenSizePerspectiveAlignment", (e3) => o(e3.screenSizePerspectiveAlignment || e3.screenSizePerspective, e3.screenSizePerspectiveAlignment ? null : e3.screenSizePerspectiveMinPixelReferenceSize)));
}
function o(r, a) {
  const c = null != a && null != r ? Math.min(r.minPixelSize / a, 1) : 0;
  return r ? u(n2, r.divisor, r.offset, c) : u(n2, 0, 0, 0);
}
var n2 = n();

export {
  s,
  t2 as t,
  i
};
//# sourceMappingURL=chunk-4J2HN4VJ.js.map
