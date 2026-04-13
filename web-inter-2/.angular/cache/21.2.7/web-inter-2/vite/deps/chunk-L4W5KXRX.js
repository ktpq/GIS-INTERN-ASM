import {
  p as p2
} from "./chunk-WJIHX4EX.js";
import {
  e as e4
} from "./chunk-G7BSCBR2.js";
import {
  e as e3
} from "./chunk-2XCVIFX5.js";
import {
  e as e2
} from "./chunk-4XVNKYD7.js";
import {
  e as e5
} from "./chunk-G3O4MMNO.js";
import {
  r
} from "./chunk-3PQD3FB4.js";
import {
  o as o3
} from "./chunk-R34RTRTR.js";
import {
  s as s2
} from "./chunk-WBF67J46.js";
import {
  r as r2
} from "./chunk-MXJ2L5AE.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";
import {
  j
} from "./chunk-KWFC3D4K.js";
import {
  U,
  v
} from "./chunk-T6SJ457A.js";
import {
  E,
  P,
  _,
  a,
  c,
  e,
  o as o2,
  p
} from "./chunk-SGNC5H35.js";
import {
  n as n3
} from "./chunk-47CFN4JI.js";
import {
  n as n2
} from "./chunk-TVLXQ42J.js";
import {
  z
} from "./chunk-OR24MDO6.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  o
} from "./chunk-5GPMO33J.js";
import {
  s
} from "./chunk-253Z6EVN.js";

// node_modules/@arcgis/core/chunks/Laserline.glsl.js
var A = s(6);
function j2(e6) {
  const i = new s2();
  i.include(o3), i.include(p2, e6);
  const t2 = i.fragment;
  if (e6.lineVerticalPlaneEnabled || e6.heightManifoldEnabled) if (t2.uniforms.add(new r2("maxPixelDistance", (i2, t3) => e6.heightManifoldEnabled ? 2 * t3.camera.computeScreenPixelSizeAt(i2.heightManifoldTarget) : 2 * t3.camera.computeScreenPixelSizeAt(i2.lineVerticalPlaneSegment.origin))), t2.code.add(t`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`), e6.spherical) {
    const e7 = (e8, i3, t3) => E(e8, i3.heightManifoldTarget, t3.camera.viewMatrix), i2 = (e8, i3) => E(e8, [0, 0, 0], i3.camera.viewMatrix);
    t2.uniforms.add(new e4("heightManifoldOrigin", (t3, r3) => (e7(R, t3, r3), i2(G, r3), e(G, G, R), _(U2, G), U2[3] = a(G), U2)), new e3("globalOrigin", (e8) => i2(R, e8)), new r2("cosSphericalAngleThreshold", (e8, i3) => 1 - Math.max(2, p(i3.camera.eye, e8.heightManifoldTarget) * i3.camera.perRenderPixelRatio) / a(e8.heightManifoldTarget))), t2.code.add(t`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`);
  } else t2.code.add(t`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);
  if (e6.pointDistanceEnabled && (t2.uniforms.add(new r2("maxPixelDistance", (e7, i2) => 2 * i2.camera.computeScreenPixelSizeAt(e7.pointDistanceTarget))), t2.code.add(t`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)), e6.intersectsLineEnabled && t2.uniforms.add(new r("perScreenPixelRatio", (e7) => e7.camera.perScreenPixelRatio)).code.add(t`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`), (e6.lineVerticalPlaneEnabled || e6.intersectsLineEnabled) && t2.code.add(t`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`), t2.main.add(t`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`), e6.heightManifoldEnabled) {
    t2.uniforms.add(new e5("angleCutoff", (e7) => V(e7)), new e4("heightPlane", (e7, i3) => I(e7.heightManifoldTarget, e7.renderCoordsHelper.worldUpAtPosition(e7.heightManifoldTarget, R), i3.camera.viewMatrix)));
    const i2 = e6.spherical ? t`normalize(globalOrigin - pos)` : t`heightPlane.xyz`;
    t2.main.add(t`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i2})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`);
  }
  return e6.pointDistanceEnabled && (t2.uniforms.add(new e5("angleCutoff", (e7) => V(e7)), new e4("pointDistanceSphere", (e7, i2) => y(e7, i2))), t2.main.add(t`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)), e6.lineVerticalPlaneEnabled && (t2.uniforms.add(new e5("angleCutoff", (e7) => V(e7)), new e4("lineVerticalPlane", (e7, i2) => O(e7, i2)), new e2("lineVerticalStart", (e7, i2) => E2(e7, i2)), new e2("lineVerticalEnd", (e7, i2) => z2(e7, i2))), t2.main.add(t`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)), e6.intersectsLineEnabled && (t2.uniforms.add(new e5("angleCutoff", (e7) => V(e7)), new e2("intersectsLineStart", (e7, i2) => E(R, e7.lineStartWorld, i2.camera.viewMatrix)), new e2("intersectsLineEnd", (e7, i2) => E(R, e7.lineEndWorld, i2.camera.viewMatrix)), new e2("intersectsLineDirection", (e7, i2) => (o2(U2, e7.intersectsLineSegment.vector), U2[3] = 0, _(R, z(U2, U2, i2.camera.viewMatrix)))), new r2("intersectsLineRadius", (e7) => e7.intersectsLineRadius)), t2.main.add(t`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)), t2.main.add(t`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`), i;
}
function V(t2) {
  return o(T, Math.cos(t2.angleCutoff), Math.cos(Math.max(0, t2.angleCutoff - s(2))));
}
function y(e6, i) {
  return E(_2, e6.pointDistanceOrigin, i.camera.viewMatrix), _2[3] = p(e6.pointDistanceOrigin, e6.pointDistanceTarget), _2;
}
function O(e6, i) {
  const t2 = j(e6.lineVerticalPlaneSegment, 0.5, R), n4 = e6.renderCoordsHelper.worldUpAtPosition(t2, F), o4 = _(G, e6.lineVerticalPlaneSegment.vector), r3 = P(R, n4, o4);
  return _(r3, r3), I(e6.lineVerticalPlaneSegment.origin, r3, i.camera.viewMatrix);
}
function E2(e6, i) {
  const t2 = o2(R, e6.lineVerticalPlaneSegment.origin);
  return e6.renderCoordsHelper.setAltitude(t2, 0), E(t2, t2, i.camera.viewMatrix);
}
function z2(e6, i) {
  const t2 = c(R, e6.lineVerticalPlaneSegment.origin, e6.lineVerticalPlaneSegment.vector);
  return e6.renderCoordsHelper.setAltitude(t2, 0), E(t2, t2, i.camera.viewMatrix);
}
function I(e6, i, t2) {
  return E(W, e6, t2), o2(U2, i), U2[3] = 0, z(U2, U2, t2), U(W, U2, H);
}
var T = n3();
var R = n();
var U2 = n2();
var F = n();
var G = n();
var W = n();
var H = v();
var _2 = n2();
var B = Object.freeze(Object.defineProperty({ __proto__: null, build: j2, defaultAngleCutoff: A }, Symbol.toStringTag, { value: "Module" }));

export {
  A,
  j2 as j,
  B
};
//# sourceMappingURL=chunk-L4W5KXRX.js.map
