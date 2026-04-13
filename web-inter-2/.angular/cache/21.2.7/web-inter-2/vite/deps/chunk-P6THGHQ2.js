import {
  r as r2
} from "./chunk-RGDBUGZ7.js";
import {
  r as r4
} from "./chunk-S5BCOYYN.js";
import {
  o
} from "./chunk-2NJHQJKV.js";
import {
  u
} from "./chunk-ENZONGCU.js";
import {
  e as e2
} from "./chunk-IKX55ZVR.js";
import {
  d as d2
} from "./chunk-XDXLNPDB.js";
import {
  e as e5
} from "./chunk-EJQEZ7UU.js";
import {
  i as i5
} from "./chunk-MQC66RI6.js";
import {
  a,
  e as e4,
  h,
  i as i3
} from "./chunk-O2ZZHYLF.js";
import {
  d,
  f
} from "./chunk-MVL65WZK.js";
import {
  e as e3
} from "./chunk-G7BSCBR2.js";
import {
  r as r3
} from "./chunk-3PQD3FB4.js";
import {
  s
} from "./chunk-WBF67J46.js";
import {
  i as i4
} from "./chunk-64IPP4Z5.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";
import {
  i as i2
} from "./chunk-BXFSKL77.js";
import {
  Q
} from "./chunk-NPUCBGFZ.js";
import {
  r
} from "./chunk-GDMLFOX7.js";
import {
  i
} from "./chunk-OKL2JLQU.js";
import {
  e2 as e
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/TextureBackedBufferFields.glsl.js
function a2(t2) {
  switch (t2.elementType) {
    case "float":
      switch (t2.elementCount) {
        case 1:
          return t`float`;
        case 2:
          return t`vec2`;
        case 3:
          return t`vec3`;
        case 4:
          return t`vec4`;
        case 9:
          return t`mat3`;
        default:
          t2.elementCount;
      }
      break;
    case "int":
      switch (t2.elementCount) {
        case 1:
          return t`int`;
        case 2:
          return t`ivec2`;
        case 3:
          return t`ivec3`;
        case 4:
          return t`ivec4`;
        case 9:
          throw new Error("Invalid element count 9 for type int");
        default:
          t2.elementCount;
      }
      break;
    case "uint":
      switch (t2.elementCount) {
        case 1:
          return t`uint`;
        case 2:
          return t`uvec2`;
        case 3:
          return t`uvec3`;
        case 4:
          return t`uvec4`;
        case 9:
          throw new Error("Invalid element count 9 for type uint");
        default:
          t2.elementCount;
      }
      break;
    default:
      t2.elementType;
  }
  throw new Error("unsupported field");
}
var r5 = new r3("const_NaN", () => NaN, { supportsNaN: true });
var c = class extends a {
  constructor(t2) {
    super(), this.supportNaN = t2;
  }
};
function p(t2, n3) {
  const e7 = n3?.supportNaN;
  e7 && (t2.uniforms.add(r5), t2.code.add(t`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)), t2.code.add(t`
    mediump float unpackHalf2x8(highp uint bits0, highp uint bits1) {
      highp uint halfBits = (bits1 << 8u) | bits0;
      ${n(e7, t`
        if (bitsEncodeFloat16NaN(halfBits)) {
          return const_NaN;
        }`)}
      return unpackHalf2x16(halfBits).x;
    }`);
}
function l(t2, n3) {
  const e7 = n3?.supportNaN;
  e7 && (t2.uniforms.add(r5), t2.code.add(t`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)), t2.code.add(t`
    highp float unpackFloat4x8(highp uint bits0, highp uint bits1, highp uint bits2, highp uint bits3) {
      highp uint floatBits = (bits3 << 24u) |(bits2 << 16u) | (bits1 << 8u) | bits0;
      ${n(e7, t`
        if (bitsEncodeFloat32NaN(floatBits)) {
          return const_NaN;
        }`)}
      return uintBitsToFloat(floatBits);
    }`);
}
function h2(t2) {
  const { fieldType: n3 } = t2;
  return `${(0, f2[n3])(d3(t2))}`;
}
__decorate([i3()], c.prototype, "supportNaN", void 0);
var f2 = { u8: (t2) => t`${t2[0]}`, unorm8: (t2) => t`float(${t2[0]})/255.0`, vec4unorm8: (t2) => t`vec4(${`${t2[0]}, ${t2[1]}, ${t2[2]}, ${t2[3]}`})/255.0`, f16: r ? (t2) => t`unpackHalf2x8(${`${t2[0]}, ${t2[1]}`})` : (t2) => t`unpackFloat4x8(${`${t2[0]}, ${t2[1]}, ${t2[2]}, ${t2[3]}`})`, f32: (t2) => t`unpackFloat4x8(${`${t2[0]}, ${t2[1]}, ${t2[2]}, ${t2[3]}`})`, vec4u8: (t2) => t`uvec4(${`${t2[0]}, ${t2[1]}, ${t2[2]}, ${t2[3]}`})`, mat3f32: (t2) => {
  const n3 = t2.reduce((t3, n4) => {
    const e7 = t3.at(-1);
    return null == e7 || e7.length >= 4 ? t3.push([n4]) : e7.push(n4), t3;
  }, new Array()).map((t3) => t`unpackFloat4x8(${`${t3[0]}, ${t3[1]}, ${t3[2]}, ${t3[3]}`})`);
  return t`mat3(${n3.join(",\n")})`;
} };
function d3(t2) {
  const { startTexel: n3, byteOffset: e7, texelByteStride: i9, byteSize: u4 } = t2;
  let s4 = n3, a5 = e7 % i9;
  const r6 = new Array();
  for (let c4 = 0; c4 < u4; ++c4) {
    const t3 = t`texel${t.int(s4)}.${m[a5]}`;
    r6.push(t3), ++a5, a5 >= i9 && (a5 = 0, ++s4);
  }
  return r6;
}
var m = ["x", "y", "z", "w"];

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/TextureBackedBuffer.glsl.js
var c2 = new c(true);
var s2 = new c(false);
var u2 = class {
  constructor(t2) {
    this.moduleId = e(), this.namespace = `_tbb_${this.moduleId}_`;
    const { itemIndexAttribute: o2, bufferUniform: d4, layout: n3 } = t2, i9 = t2.fieldFilter ?? (() => true), r6 = t2.enableNaNSupport ? c2 : s2;
    this.TextureBackedBufferModule = (e7, t3) => f3(this.namespace, e7, t3, o2, d4, n3, i9, r6), this.getTextureAttribute = l2(this.namespace);
  }
};
function f3(e7, t2, c4, s4, u4, f6, l3, h4) {
  const { vertex: $ } = t2;
  $.include(l, h4), $.include(p, h4);
  const x3 = `${e7}tbbStride`, p2 = `${e7}TextureBackedBufferItemData`, g2 = `${e7}fetchTextureBackedBufferItemData`, b2 = m2(e7);
  for (const o2 of [x3, p2, g2, b2]) i(o2.length < 1024, "Identifiers do not have a valid length");
  $.constants.add(x3, "uint", f6.texelStride), $.uniforms.add(u4);
  const I = new Array();
  for (const o2 of f6.fields.values()) l3(o2.name, c4) && I.push(o2);
  if (0 === I.length) return;
  const B = [];
  for (let o2 = 0; o2 < f6.texelStride; ++o2) B.push(false);
  for (const o2 of I) for (let e8 = 0; e8 < o2.numTexels; ++e8) B[o2.startTexel + e8] = true;
  $.code.add(t`
  struct ${p2} {`);
  for (const o2 of I) $.code.add(t`\t${a2(o2)} ${o2.name};`);
  $.code.add(t`};`), $.code.add(t`
  ${p2} ${g2}(highp uint itemIndex) {
    ${p2} itemData;
    highp uint index = itemIndex * ${x3};
    highp uint rowWidth = uint(textureSize(${u4.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);
  for (let o2 = 0; o2 < B.length; ++o2) false !== B[o2] && $.code.add(t`lowp uvec4 texel${t.int(o2)} = texelFetch(${u4.name}, ivec2(coordX + ${t.int(o2)}, coordY), 0);`);
  for (const o2 of I) $.code.add(t`itemData.${o2.name} = ${h2(o2)};`);
  $.code.add(t`return itemData;
}`), $.code.add(t`${p2} ${b2};`), $.main.add(t`${b2} = ${g2}(${s4});`);
}
function l2(e7) {
  const t2 = m2(e7);
  return (e8) => t`${t2}.${e8}`;
}
function m2(e7) {
  return `${e7}ItemData`;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DUintDrawUniform.js
var e6 = class extends i4 {
  constructor(r6, e7) {
    super(r6, "usampler2D", 2, (s4, o2, t2) => s4.bindTexture(r6, e7(o2, t2)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/PatternTechniqueConfiguration.js
var s3 = class extends r2 {
  constructor() {
    super(...arguments), this.cullFace = 0, this.style = 0, this.hasVertexColors = false, this.polygonOffset = false, this.hasOccludees = false, this.enableOffset = true, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.hasVVColor = false, this.draped = false, this.textureCoordinateType = 0, this.emissionSource = 0, this.discardInvisibleFragments = true, this.writeDepth = true, this.occlusionPass = false, this.hasVVInstancing = false, this.hasVVSize = false, this.hasVVOpacity = false, this.overlayEnabled = false, this.snowCover = false;
  }
};
function i6(t2, e7, o2, s4) {
  return t2.draped ? null : t2.hasVVColor ? s4 : t2.hasVertexColors ? o2 : e7;
}
__decorate([i3({ count: 3 })], s3.prototype, "cullFace", void 0), __decorate([i3({ count: 6 })], s3.prototype, "style", void 0), __decorate([i3()], s3.prototype, "hasVertexColors", void 0), __decorate([i3()], s3.prototype, "polygonOffset", void 0), __decorate([i3()], s3.prototype, "hasOccludees", void 0), __decorate([i3()], s3.prototype, "enableOffset", void 0), __decorate([i3()], s3.prototype, "terrainDepthTest", void 0), __decorate([i3()], s3.prototype, "cullAboveTerrain", void 0), __decorate([i3()], s3.prototype, "hasVVColor", void 0), __decorate([i3()], s3.prototype, "draped", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/PatternLayouts.js
function n2(r6) {
  const o2 = Q().vec3f("position").vec4f("uvMapSpace");
  return r6.draped ? r6.hasVVColor ? o2.f32("colorFeatureAttribute") : r6.hasVertexColors && o2.vec4u8("color", { glNormalized: true }) : o2.u32("textureElementIndex", { integer: true }), e2() && o2.vec4u8("olidColor"), o2.freeze();
}
var u3 = [{ type: "mat3f32", name: "boundingRect" }];
var f4 = new i2(u3);
var i7 = new i2([...u3, { type: "vec4unorm8", name: "color" }]);
var a3 = new i2([...u3, { type: "f32", name: "colorFeatureAttribute" }]);
function c3(e7) {
  return i6(e7, f4, i7, a3);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/PatternTextureBuffer.glsl.js
var f5 = new e6("componentTextureBuffer", (e7) => e7.textureBuffer);
var i8 = new u2({ layout: f4, itemIndexAttribute: "textureElementIndex", bufferUniform: f5 });
var m3 = new u2({ layout: i7, itemIndexAttribute: "textureElementIndex", bufferUniform: f5 });
var a4 = new u2({ layout: a3, itemIndexAttribute: "textureElementIndex", bufferUniform: f5, enableNaNSupport: true });
function x(e7) {
  return i6(e7, i8, m3, a4);
}

// node_modules/@arcgis/core/chunks/Pattern.glsl.js
var g = 0.70710678118;
var w = g;
var h3 = 0.08715574274;
var b = 10;
var x2 = 1;
function y(y2) {
  const j2 = x(y2), C = null != j2, T = new s();
  C && T.include(j2.TextureBackedBufferModule, y2);
  const { vertex: V, fragment: P, attributes: $, varyings: R } = T, A = 8 === y2.output;
  f(V, y2), T.include(o);
  let L = "";
  C ? (y2.hasVVColor && (L = j2.getTextureAttribute("colorFeatureAttribute")), y2.hasVertexColors ? (T.varyings.add("vColor", "vec4"), T.vertex.code.add(t`void forwardVertexColor() { vColor = ${j2.getTextureAttribute("color")}; }`)) : T.vertex.code.add(t`void forwardVertexColor() {}`), $.add("textureElementIndex", "uint")) : (T.include(r4, y2), y2.hasVVColor && ($.add("colorFeatureAttribute", "float"), L = "colorFeatureAttribute")), T.include(u, y2), T.include(d2, y2), T.fragment.include(h, y2), T.include(e5, y2), T.include(i5, y2), y2.draped && V.uniforms.add(new r3("worldToScreenRatio", (e7) => 1 / e7.screenToPCSRatio)), $.add("position", "vec3"), $.add("uvMapSpace", "vec4"), y2.hasVertexColors || R.add("vColor", "vec4"), R.add("vpos", "vec3", { invariant: true }), R.add("vuv", "vec2"), V.uniforms.add(new e3("uColor", (e7) => e7.color));
  const D = 3 === y2.style || 4 === y2.style || 5 === y2.style;
  return D && V.code.add(t`
      const mat2 rotate45 = mat2(${t.float(g)}, ${t.float(-w)},
                                 ${t.float(w)}, ${t.float(g)});
    `), !y2.draped && C && (d(V, y2), V.uniforms.add(new r3("worldToScreenPerDistanceRatio", (e7) => 1 / e7.camera.perScreenPixelRatio)), V.code.add(t`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`), V.code.add(t`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`), V.code.add(t`
      float boundingRectDistanceToCamera() {
        vec3 center = ${j2.getTextureAttribute("boundingRect")}[0];
        vec3 halfU = ${j2.getTextureAttribute("boundingRect")}[1];
        vec3 halfV = ${j2.getTextureAttribute("boundingRect")}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${t.float(h3)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)), V.code.add(t`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${n(D, " * rotate45")};
      vec2 uvCellOrigin = uvMapSpace.zw ${n(D, " * rotate45")};

      ${n(!y2.draped, t`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${t.float(b)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `), V.main.add(t`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${y2.hasVertexColors ? "vColor *= uColor;" : y2.hasVVColor ? t`vColor = uColor * interpolateVVColor(${L});` : "vColor = uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `), P.include(e4), y2.draped && P.uniforms.add(new r3("texelSize", (e7) => 1 / e7.camera.pixelRatio)), A || (P.code.add(t`
      const float lineWidth = ${t.float(x2)};
      const float spacing = ${t.float(b)};
      const float spacingINV = ${t.float(1 / b)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `), y2.draped || P.code.add(t`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)), P.main.add(t`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${n(!A, t`color.a *= ${S(y2)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `), T;
}
function S(e7) {
  function o2(o3) {
    return e7.draped ? t`coverage(vuv.${o3}, texelSize)` : t`sampleAA(vuv.${o3})`;
  }
  switch (e7.style) {
    case 3:
    case 0:
      return o2("y");
    case 4:
    case 1:
      return o2("x");
    case 5:
    case 2:
      return t`1.0 - (1.0 - ${o2("x")}) * (1.0 - ${o2("y")})`;
    default:
      return "0.0";
  }
}
var j = Object.freeze(Object.defineProperty({ __proto__: null, build: y }, Symbol.toStringTag, { value: "Module" }));

export {
  s3 as s,
  n2 as n,
  c3 as c,
  y,
  j
};
//# sourceMappingURL=chunk-P6THGHQ2.js.map
