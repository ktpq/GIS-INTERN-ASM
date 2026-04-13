import {
  c
} from "./chunk-TGURFMYB.js";
import {
  o
} from "./chunk-R34RTRTR.js";
import {
  a
} from "./chunk-BJFGDIZJ.js";
import {
  e
} from "./chunk-FSLFKRK7.js";
import {
  s
} from "./chunk-WBF67J46.js";
import {
  e as e2
} from "./chunk-VI2OV3K7.js";
import {
  r
} from "./chunk-MXJ2L5AE.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js
function a2(a3) {
  a3.code.add(t`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`), a3.code.add(t`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`);
}

// node_modules/@arcgis/core/chunks/Compositing.glsl.js
var m = class extends c {
  constructor() {
    super(...arguments), this.opacity = 1;
  }
};
function g(l) {
  const m2 = new s(), { blendEmissive: g2, blitMode: c3, hasOpacityFactor: f } = l;
  m2.include(o), m2.fragment.uniforms.add(new e2("tex", (e3) => e3.texture)), f && m2.fragment.uniforms.add(new r("opacity", (e3) => e3.opacity));
  const u = 3 === c3;
  return u && (m2.fragment.uniforms.add(new e("nearFar", (e3) => e3.camera.nearFar)), m2.fragment.include(a), m2.fragment.include(a2)), g2 && (m2.outputs.add("fragColor", "vec4", 0), m2.outputs.add("fragEmission", "vec4", 1)), m2.fragment.main.add(t`
    ${u ? t`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);` : t`
          fragColor = texture(tex, uv) ${f ? "* opacity" : ""};`}
    ${n(g2, "fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);")}`), m2;
}
var c2 = Object.freeze(Object.defineProperty({ __proto__: null, CompositingPassParameters: m, build: g }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  g,
  c2 as c
};
//# sourceMappingURL=chunk-3ITO5QW6.js.map
