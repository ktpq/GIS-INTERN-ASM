import {
  e
} from "./chunk-KJJXUXUA.js";
import {
  e as e2
} from "./chunk-AJT4UREC.js";
import {
  e as e4
} from "./chunk-EZT77IH3.js";
import {
  r as r2
} from "./chunk-4QE2CR6M.js";
import {
  r
} from "./chunk-7EJ3JKOB.js";
import {
  e as e3
} from "./chunk-ALI26FYX.js";
import {
  i
} from "./chunk-EQBT6655.js";
import {
  n,
  t
} from "./chunk-QLAEYQER.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
function n2(n3) {
  return 3 === n3 || 4 === n3 || 5 === n3;
}
function r3(r6) {
  return n2(r6) || 6 === r6 || 7 === r6;
}
function t2(n3) {
  return x(n3) || 2 === n3;
}
function u(n3) {
  return 8 === n3 || 9 === n3;
}
function e5(n3) {
  return o(n3) || u(n3);
}
function o(n3) {
  return 0 === n3;
}
function c(n3) {
  return o(n3) || 9 === n3;
}
function p(n3) {
  return o(n3) || u(n3);
}
function x(n3) {
  return p(n3) || a(n3);
}
function a(n3) {
  return 1 === n3;
}
function b(n3) {
  return a(n3) || r3(n3);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
function d(d3, r6) {
  switch (r6.textureCoordinateType) {
    case 1:
      return d3.attributes.add("uv0", "vec2"), d3.varyings.add("vuv0", "vec2"), void d3.vertex.code.add(t`void forwardTextureCoordinates() { vuv0 = uv0; }`);
    case 2:
      return d3.attributes.add("uv0", "vec2"), d3.attributes.add("uvRegion", "vec4"), d3.varyings.add("vuv0", "vec2"), d3.varyings.add("vuvRegion", "vec4"), void d3.vertex.code.add(t`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      r6.textureCoordinateType;
    case 0:
      return void d3.vertex.code.add(t`void forwardTextureCoordinates() {}`);
    case 3:
      return;
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js
var r4 = class extends i {
  constructor(o2, r6, s) {
    super(o2, "float", 2, (t3, e7, f2) => t3.setUniform1f(o2, r6(e7, f2), s));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js
function e6(e7) {
  e7.fragment.code.add(t`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js
function r5(r6, u2) {
  const { textureCoordinateType: l } = u2;
  if (0 === l || 3 === l) return;
  r6.include(d, u2);
  const s = 2 === l;
  s && r6.include(e6), r6.fragment.code.add(t`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${s ? "textureAtlasLookup(tex, uv, vuvRegion)" : "texture(tex, uv)"};
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var d2 = 1;
function f(u2, f2) {
  if (!o(f2.output)) return;
  u2.fragment.include(r2);
  const { emissionSource: c2, hasEmissiveTextureTransform: x2, bindType: g } = f2, p2 = 3 === c2 || 4 === c2 || 5 === c2;
  p2 && (u2.include(r5, f2), u2.fragment.uniforms.add(1 === g ? new e3("texEmission", (e7) => e7.textureEmissive) : new e4("texEmission", (e7) => e7.textureEmissive)));
  const h = 2 === c2 || p2;
  h && u2.fragment.uniforms.add(1 === g ? new e2("emissiveBaseColor", (e7) => e7.emissiveBaseColor) : new e("emissiveBaseColor", (e7) => e7.emissiveBaseColor));
  const T = 0 !== c2;
  T && !(7 === c2 || 6 === c2 || 4 === c2 || 5 === c2) && u2.fragment.uniforms.add(1 === g ? new r("emissiveStrength", (e7) => e7.emissiveStrength ?? 0) : new r4("emissiveStrength", (e7) => e7.emissiveStrength ?? 0));
  const w = 7 === c2, C = 5 === c2, b2 = 1 === c2 || 6 === c2 || w;
  u2.fragment.code.add(t`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${h ? C ? "emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)" : "vec4(emissiveBaseColor, 1.0)" : b2 ? w ? "emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)" : "vec4(linearizeGamma(symbolColor), 1.0)" : "vec4(0.0)"};
      ${n(p2, `${n(C, `if(emissiveSource == 0) {
              vec4 emissiveFromTex = textureLookup(texEmission, ${x2 ? "emissiveUV" : "vuv0"});
              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);
           }`, `vec4 emissiveFromTex = textureLookup(texEmission, ${x2 ? "emissiveUV" : "vuv0"});
           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}
        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${n(T, `emissions.rgb *= emissiveStrength * ${t.float(d2)};`)}
      return emissions;
    }
  `);
}

export {
  r3 as r,
  t2 as t,
  u,
  e5 as e,
  o,
  c,
  p,
  x,
  a,
  b,
  d,
  r5 as r2,
  f
};
//# sourceMappingURL=chunk-RN5EOLXT.js.map
