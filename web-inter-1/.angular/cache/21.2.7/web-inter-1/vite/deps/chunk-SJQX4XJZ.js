import {
  e as e4
} from "./chunk-A76BR3U7.js";
import {
  l
} from "./chunk-SFRKVYJX.js";
import {
  c as c2
} from "./chunk-TGURFMYB.js";
import {
  e as e3
} from "./chunk-K37WI5OC.js";
import {
  i as i2
} from "./chunk-64IPP4Z5.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";
import {
  E,
  c,
  e as e2,
  u
} from "./chunk-SGNC5H35.js";
import {
  i
} from "./chunk-IRS5H2YE.js";
import {
  a,
  n
} from "./chunk-KEY3YQEB.js";
import {
  e
} from "./chunk-XNNZ2U24.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  h
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js
var s = class {
  constructor(t2) {
    this._bits = [...t2];
  }
  equals(s3) {
    return h(this._bits, s3.bits);
  }
  get code() {
    return this._code ??= String.fromCharCode(...this._bits), this._code;
  }
  get bits() {
    return this._bits;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
var a2 = class extends c2 {
  constructor() {
    super(), this._parameterBits = this._parameterBits?.map(() => 0) ?? [], this._parameterNames ??= [];
  }
  get key() {
    return this._key ??= new s(this._parameterBits), this._key;
  }
  decode(e9 = this.key) {
    const t2 = this._parameterBits;
    this._parameterBits = [...e9.bits];
    const r2 = this._parameterNames.map((e10) => `    ${e10}: ${this[e10]}`).join("\n");
    return this._parameterBits = t2, r2;
  }
};
function i3(t2 = {}) {
  return (r2, a3) => {
    r2.hasOwnProperty("_parameterNames") || Object.defineProperty(r2, "_parameterNames", { value: r2._parameterNames?.slice() ?? [], configurable: true, writable: true }), r2.hasOwnProperty("_parameterBits") || Object.defineProperty(r2, "_parameterBits", { value: r2._parameterBits?.slice() ?? [0], configurable: true, writable: true }), r2._parameterNames.push(a3);
    const i5 = t2.count || 2, s3 = Math.ceil(Math.log2(i5)), o3 = r2._parameterBits;
    let n2 = 0;
    for (; o3[n2] + s3 > 16; ) n2++, n2 >= o3.length && o3.push(0);
    const p = o3[n2], m2 = (1 << s3) - 1 << p;
    o3[n2] += s3, t2.count ? Object.defineProperty(r2, a3, { get() {
      return (this._parameterBits[n2] & m2) >> p;
    }, set(r3) {
      const i6 = this._parameterBits[n2];
      if ((i6 & m2) >> p !== r3) {
        if (this._key = null, this._parameterBits[n2] = i6 & ~m2 | +r3 << p & m2, "number" != typeof r3) throw new r("internal:invalid-shader-configuration", `Configuration value for ${a3} must be a number, got ${typeof r3}`);
        if (null == t2.count) throw new r("internal:invalid-shader-configuration", `Configuration value for ${a3} must provide a count option`);
      }
    } }) : Object.defineProperty(r2, a3, { get() {
      return !!((this._parameterBits[n2] & m2) >> p);
    }, set(t3) {
      const r3 = this._parameterBits[n2];
      if (!!((r3 & m2) >> p) !== t3 && (this._key = null, this._parameterBits[n2] = r3 & ~m2 | +t3 << p, "boolean" != typeof t3)) throw new r("internal:invalid-shader-configurationx", `Configuration value for ${a3} must be boolean, got ${typeof t3}`);
    } });
  };
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutputConfiguration.js
var i4 = class extends a2 {
  constructor() {
    super(...arguments), this.output = 0, this.hasEmission = false;
  }
};
__decorate([i3({ count: 10 })], i4.prototype, "output", void 0), __decorate([i3()], i4.prototype, "hasEmission", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoubleConfiguration.js
var s2 = class extends i4 {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = false, this.hasModelTransformation = false;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
var m = class extends s2 {
  constructor() {
    super(...arguments), this.hasSlicePlane = false, this.hasSliceTranslatedView = false;
  }
};
__decorate([i3()], m.prototype, "hasSlicePlane", void 0);
function h2(e9, s3) {
  g(e9, s3, new e3("slicePlaneOrigin", (e10, i5) => x(s3, e10, i5)), new e3("slicePlaneBasis1", (e10, i5) => O(s3, e10, i5, i5.slicePlane?.basis1)), new e3("slicePlaneBasis2", (e10, i5) => O(s3, e10, i5, i5.slicePlane?.basis2)));
}
function w(e9, s3) {
  B(e9, s3, new e3("slicePlaneOrigin", (e10, i5) => x(s3, e10, i5)), new e3("slicePlaneBasis1", (e10, i5) => O(s3, e10, i5, i5.slicePlane?.basis1)), new e3("slicePlaneBasis2", (e10, i5) => O(s3, e10, i5, i5.slicePlane?.basis2)));
}
var S = t`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`;
function B(e9, s3, ...i5) {
  s3.hasSlicePlane ? (e9.uniforms.add(...i5), e9.code.add(S)) : e9.code.add("bool rejectBySlice(vec3 pos) { return false; }");
}
function g(e9, s3, ...i5) {
  e9.constants.add("groundSliceOpacity", "float", 0.2), B(e9, s3, ...i5), s3.hasSlicePlane ? e9.code.add("\n    void discardBySlice(vec3 pos) {\n      if (rejectBySlice(pos)) {\n        discard;\n      }\n    }\n\n    vec4 applySliceOutline(vec4 color, vec3 pos) {\n      SliceFactors factors = calculateSliceFactors(pos);\n\n      factors.front /= 2.0 * fwidth(factors.front);\n      factors.side0 /= 2.0 * fwidth(factors.side0);\n      factors.side1 /= 2.0 * fwidth(factors.side1);\n      factors.side2 /= 2.0 * fwidth(factors.side2);\n      factors.side3 /= 2.0 * fwidth(factors.side3);\n\n      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth\n      if (sliceByFactors(factors)) {\n        return color;\n      }\n\n      float outlineFactor = (1.0 - step(0.5, factors.front))\n        * (1.0 - step(0.5, factors.side0))\n        * (1.0 - step(0.5, factors.side1))\n        * (1.0 - step(0.5, factors.side2))\n        * (1.0 - step(0.5, factors.side3));\n\n      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);\n    }\n\n    vec4 applySlice(vec4 color, vec3 pos) {\n      return sliceEnabled() ? applySliceOutline(color, pos) : color;\n    }\n  ") : e9.code.add(t`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`);
}
function y(e9, s3, i5) {
  return e9.instancedDoublePrecision ? u(D, i5.camera.viewInverseTransposeMatrix[3], i5.camera.viewInverseTransposeMatrix[7], i5.camera.viewInverseTransposeMatrix[11]) : s3.slicePlaneLocalOrigin;
}
function F(e9, s3) {
  return null != e9 ? e2(L, s3.origin, e9) : s3.origin;
}
function j(e9, i5, a3) {
  return e9.hasSliceTranslatedView ? null != i5 ? i(T, a3.camera.viewMatrix, i5) : a3.camera.viewMatrix : null;
}
function x(e9, s3, i5) {
  if (null == i5.slicePlane) return a;
  const a3 = y(e9, s3, i5), o3 = F(a3, i5.slicePlane), c3 = j(e9, a3, i5);
  return null != c3 ? E(L, o3, c3) : o3;
}
function O(e9, s3, i5, c3) {
  if (null == c3 || null == i5.slicePlane) return a;
  const r2 = y(e9, s3, i5), t2 = F(r2, i5.slicePlane), f = j(e9, r2, i5);
  return null != f ? (c(M, c3, t2), E(L, t2, f), E(M, M, f), e2(M, M, L)) : c3;
}
var D = n();
var L = n();
var M = n();
var T = e();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2BindUniform.js
var e6 = class extends i2 {
  constructor(r2, e9) {
    super(r2, "ivec2", 0, (o3, s3) => o3.setUniform2iv(r2, e9(s3)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerBindUniform.js
var o = class extends i2 {
  constructor(r2, o3) {
    super(r2, "int", 0, (s3, t2) => s3.setUniform1i(r2, o3(t2)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DUintBindUniform.js
var e7 = class extends i2 {
  constructor(r2, e9) {
    super(r2, "usampler2D", 0, (s3, o3) => s3.bindTexture(r2, e9(o3)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
function d(d2, o3) {
  const { fragment: u2 } = d2, { output: r2, draped: c3, hasHighlightMixTexture: n2 } = o3;
  8 === r2 ? (u2.uniforms.add(new o("highlightLevel", (i5) => i5.highlightLevel ?? 0), new e6("highlightMixOrigin", (i5) => i5.highlightMixOrigin)), d2.outputs.add("fragHighlight", "uvec2", 0), d2.include(l), n2 ? u2.uniforms.add(new e7("highlightMixTexture", (i5) => i5.highlightMixTexture)).code.add(t`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`) : u2.code.add(t`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`), c3 ? u2.code.add(t`bool isHighlightOccluded() {
return false;
}`) : u2.uniforms.add(new e4("depthTexture", (i5) => i5.mainDepth)).code.add(t`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`), u2.code.add(t`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)) : u2.code.add(t`void calculateOcclusionAndOutputHighlight() {}`);
}

// node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var o2 = 1 / 255.5;

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js
function e8(e9) {
  e9.code.add(t`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
}

export {
  a2 as a,
  i3 as i,
  m,
  h2 as h,
  w,
  o,
  d,
  o2,
  e8 as e
};
//# sourceMappingURL=chunk-SJQX4XJZ.js.map
