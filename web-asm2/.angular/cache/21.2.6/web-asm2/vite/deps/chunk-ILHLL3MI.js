import {
  o
} from "./chunk-BN3BS6PJ.js";
import {
  e as e4
} from "./chunk-K2OVZMBS.js";
import {
  i
} from "./chunk-ZSOEZT3A.js";
import {
  e as e3,
  h
} from "./chunk-I7H7E43T.js";
import {
  d,
  f,
  p
} from "./chunk-EIMKOHBU.js";
import {
  e as e2
} from "./chunk-IP46ETCC.js";
import {
  e
} from "./chunk-AJT4UREC.js";
import {
  r
} from "./chunk-6NVAPYAK.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  r as r2
} from "./chunk-7EJ3JKOB.js";
import {
  n as n2,
  t
} from "./chunk-QLAEYQER.js";
import {
  n
} from "./chunk-IXOUFXRS.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl.js
function n3(n4, c) {
  if (!c.screenSizeEnabled) return;
  const t2 = n4.vertex;
  d(t2, c), t2.uniforms.add(new r("perScreenPixelRatio", (e5) => e5.camera.perScreenPixelRatio), new r2("screenSizeScale", (e5) => e5.screenSizeScale)).code.add(t`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`);
}

// node_modules/@arcgis/core/chunks/ShadedColorMaterial.glsl.js
function w(e5) {
  const w2 = new s();
  w2.include(o), w2.include(n3, e5), w2.fragment.include(h, e5), w2.include(e4, e5), w2.include(i, e5);
  const { vertex: u2, fragment: b2 } = w2;
  return b2.include(e3), f(u2, e5), b2.uniforms.add(new e2("uColor", (e6) => e6.color)), w2.attributes.add("position", "vec3"), w2.varyings.add("vWorldPosition", "vec3"), e5.screenSizeEnabled && w2.attributes.add("offset", "vec3"), e5.shadingEnabled && (p(u2), w2.attributes.add("normal", "vec3"), w2.varyings.add("vViewNormal", "vec3"), b2.uniforms.add(new e("shadingDirection", (e6) => e6.shadingDirection)), b2.uniforms.add(new e2("shadedColor", (e6) => f2(e6.shadingTint, e6.color)))), u2.main.add(t`
    vWorldPosition = ${e5.screenSizeEnabled ? t`screenSizeScaling(offset, position)` : t`position`};
    ${n2(e5.shadingEnabled, t`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `), b2.main.add(t`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e5.shadingEnabled ? t`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);` : t`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`), w2;
}
function f2(e5, o2) {
  const r3 = 1 - e5[3], i2 = e5[3] + o2[3] * r3;
  return 0 === i2 ? (u[3] = i2, u) : (u[0] = (e5[0] * e5[3] + o2[0] * o2[3] * r3) / i2, u[1] = (e5[1] * e5[3] + o2[1] * o2[3] * r3) / i2, u[2] = (e5[2] * e5[3] + o2[2] * o2[3] * r3) / i2, u[3] = o2[3], u);
}
var u = n();
var b = Object.freeze(Object.defineProperty({ __proto__: null, build: w }, Symbol.toStringTag, { value: "Module" }));

export {
  w,
  b
};
//# sourceMappingURL=chunk-ILHLL3MI.js.map
