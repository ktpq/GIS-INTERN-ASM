import {
  e as e3
} from "./chunk-WSV5PQIB.js";
import {
  c
} from "./chunk-UQ5UY5HU.js";
import {
  r
} from "./chunk-6NVAPYAK.js";
import {
  r as r3
} from "./chunk-4QE2CR6M.js";
import {
  a
} from "./chunk-OGWMG3Q3.js";
import {
  e
} from "./chunk-UCQU6LZ5.js";
import {
  o as o2
} from "./chunk-I6GYMHIK.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  r as r2
} from "./chunk-7EJ3JKOB.js";
import {
  e as e2
} from "./chunk-ALI26FYX.js";
import {
  t
} from "./chunk-QLAEYQER.js";
import {
  n
} from "./chunk-ULRT2MRD.js";
import {
  o
} from "./chunk-EFJUSEVJ.js";

// node_modules/@arcgis/core/chunks/SSAO.glsl.js
var m = 16;
function v() {
  const r4 = new s(), v2 = r4.fragment;
  return r4.include(o2), r4.include(c), v2.include(a), v2.include(r3), v2.uniforms.add(new r("radius", (e4) => p(e4.camera))).code.add(t`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`), v2.code.add(t`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), r4.outputs.add("fragOcclusion", "float"), v2.uniforms.add(new e2("normalMap", (e4) => e4.normalTexture), new e2("depthMap", (e4) => e4.depthTexture), new r2("projScale", (e4) => e4.projScale), new e2("rnm", (e4) => e4.noiseTexture), new e3("rnmScale", (r5, t2) => o(g, t2.camera.fullWidth / r5.noiseTexture.descriptor.width, t2.camera.fullHeight / r5.noiseTexture.descriptor.height)), new r2("intensity", (e4) => e4.intensity), new e("screenSize", (r5) => o(g, r5.camera.fullWidth, r5.camera.fullHeight))).main.add(t`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${t.int(m)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${t.int(m)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `), r4;
}
function p(e4) {
  return Math.max(10, 20 * e4.computeScreenPixelSizeAtDist(Math.abs(4 * e4.relativeElevation)));
}
var g = n();
var h = Object.freeze(Object.defineProperty({ __proto__: null, build: v, getRadius: p }, Symbol.toStringTag, { value: "Module" }));

export {
  v,
  p,
  h
};
//# sourceMappingURL=chunk-2N6VFVUI.js.map
