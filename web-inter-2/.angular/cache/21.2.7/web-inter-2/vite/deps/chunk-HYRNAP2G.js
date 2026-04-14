import {
  a
} from "./chunk-LN22S5O6.js";
import {
  l,
  o2,
  r as r3
} from "./chunk-QVWRNZWA.js";
import {
  W,
  e as e2,
  i,
  o,
  t as t2,
  v
} from "./chunk-2NJHQJKV.js";
import {
  t as t4
} from "./chunk-LM7YZNQW.js";
import {
  c,
  e as e3,
  r as r2,
  u as u2
} from "./chunk-YQF7MUQ6.js";
import {
  d as d2
} from "./chunk-XDXLNPDB.js";
import {
  t as t3
} from "./chunk-5XSBUEI5.js";
import {
  d as d3,
  h,
  o2 as o4
} from "./chunk-TNOTTK2Z.js";
import {
  f,
  p
} from "./chunk-WVZRCHFC.js";
import {
  o as o3
} from "./chunk-OSUSFJ34.js";
import {
  e as e4
} from "./chunk-2XCVIFX5.js";
import {
  d
} from "./chunk-WCPXG3SO.js";
import {
  r as r4
} from "./chunk-MXJ2L5AE.js";
import {
  e as e5
} from "./chunk-VI2OV3K7.js";
import {
  n as n3,
  t
} from "./chunk-BBPD3RSJ.js";
import {
  u
} from "./chunk-SGNC5H35.js";
import {
  n as n2
} from "./chunk-TVLXQ42J.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  j
} from "./chunk-6U5MFJUS.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  r
} from "./chunk-XNNZ2U24.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
function r5(r7, o5) {
  switch (r7.fragment.code.add(t`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`), o5.normalType) {
    case 1:
      r7.attributes.add("normalCompressed", "vec2"), r7.vertex.code.add(t`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);
      break;
    case 0:
      r7.attributes.add("normal", "vec3"), r7.vertex.code.add(t`vec3 normalModel() {
return normal;
}`);
      break;
    default:
      o5.normalType;
    case 2:
    case 3:
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
function d4(o5, r7) {
  const { vertex: l3, varyings: e6 } = o5;
  switch (r7.normalType) {
    case 0:
    case 1: {
      o5.include(r5, r7), e6.add("vNormalWorld", "vec3"), e6.add("vNormalView", "vec3"), l3.uniforms.add(new t3("transformNormalViewFromGlobal", (o6) => o6.transformNormalViewFromGlobal));
      const { hasModelRotationScale: d5 } = r7;
      d5 && l3.uniforms.add(new t2("transformNormalGlobalFromModel", (o6) => o6.transformNormalGlobalFromModel)), l3.code.add(t`
        void forwardNormal() {
          vNormalWorld = ${n3(d5, t`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);
      break;
    }
    case 2:
      o5.vertex.code.add(t`void forwardNormal() {}`);
      break;
    default:
      r7.normalType;
    case 3:
  }
}
var n4 = class extends v {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = e();
  }
};
var c2 = class extends W {
  constructor() {
    super(...arguments), this.transformNormalGlobalFromModel = e(), this.toMapSpace = n2();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js
function c3(c5) {
  c5.vertex.code.add(t`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstanceColor.glsl.js
function t5(t6, a2) {
  a2.instancedColor ? (t6.attributes.add("instanceColor", "vec4"), t6.vertex.include(r2), t6.vertex.include(e3), t6.vertex.include(c), t6.vertex.code.add(t`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)) : t6.vertex.code.add(t`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js
var u3 = e();
function p2(r7, n5) {
  const { hasModelTransformation: g, instancedDoublePrecision: x, instanced: p3, output: f4, hasVertexTangents: w } = n5;
  g && (r7.vertex.uniforms.add(new t4("model", (e6) => e6.modelTransformation ?? r)), r7.vertex.uniforms.add(new t3("normalLocalOriginFromModel", (r8) => (j(u3, r8.modelTransformation ?? r), u3)))), p3 && x && (r7.attributes.add("instanceModelOriginHi", "vec3"), r7.attributes.add("instanceModelOriginLo", "vec3"), r7.attributes.add("instanceModel", "mat3"), r7.attributes.add("instanceModelNormal", "mat3"));
  const _ = r7.vertex;
  x && (_.include(e2, n5), _.uniforms.add(new e4("viewOriginHi", (e6) => o2(u(M, e6.camera.viewInverseTransposeMatrix[3], e6.camera.viewInverseTransposeMatrix[7], e6.camera.viewInverseTransposeMatrix[11]), M)), new e4("viewOriginLo", (e6) => r3(u(M, e6.camera.viewInverseTransposeMatrix[3], e6.camera.viewInverseTransposeMatrix[7], e6.camera.viewInverseTransposeMatrix[11]), M)))), _.code.add(t`
    vec3 getVertexInLocalOriginSpace() {
      return ${g ? x ? "(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz" : "(model * localPosition()).xyz" : x ? "instanceModel * localPosition().xyz" : "localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${x ? t`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), _.code.add(t`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${g ? x ? "normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)" : "normalLocalOriginFromModel * _normal.xyz" : x ? "instanceModelNormal * _normal.xyz" : "_normal.xyz"});
    }
    `), 2 === f4 && (p(_), _.code.add(t`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${g ? x ? "vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)" : "vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)" : x ? "vec4(instanceModelNormal * _normal.xyz, 1.0)" : "_normal"}).xyz);
    }
    `)), w && _.code.add(t`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${g ? x ? "return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);" : "return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);" : x ? "return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}
    }`);
}
var M = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js
function i2(i3, s) {
  i3.varyings.add("colorMixMode", "int"), i3.varyings.add("opacityMixMode", "int"), i3.vertex.uniforms.add(new o3("symbolColorMixMode", (o5) => l[o5.colorMixMode])), s.hasSymbolColors ? (i3.vertex.include(r2), i3.vertex.include(e3), i3.vertex.include(c), i3.attributes.add("symbolColor", "vec4"), i3.vertex.code.add(t`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)) : i3.vertex.code.add(t`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`), i3.vertex.code.add(t`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${t.int(l.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${t.int(l.ignore)} : symbolColorMixMode;
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js
function f2(o5, r7) {
  l2(o5, r7, new r4("textureAlphaCutoff", (o6) => o6.textureAlphaCutoff));
}
function l2(o5, t6, f4) {
  const s = o5.fragment, l3 = t6.alphaDiscardMode, u4 = 0 === l3;
  2 !== l3 && 3 !== l3 || s.uniforms.add(f4), s.code.add(t`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${1 === l3 ? "color.a = 1.0;" : `if (color.a < ${u4 ? t.float(o4) : "textureAlphaCutoff"}) {
              discard;
             } ${n3(2 === l3, "else { color.a = 1.0; }")}`}
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js
function f3(f4, g) {
  const { vertex: x, fragment: O, varyings: j2 } = f4, { hasColorTexture: h2, alphaDiscardMode: w } = g, V = h2 && 1 !== w, { output: C, normalType: b, hasColorTextureTransform: A } = g;
  switch (C) {
    case 1:
      f(x, g), f4.include(o), O.include(h, g), f4.include(d, g), V && O.uniforms.add(new e5("tex", (o5) => o5.texture)), x.main.add(t`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`), f4.include(f2, g), O.main.add(t`
        discardBySlice(vpos);
        ${n3(V, t`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 9:
      f(x, g), f4.include(o), f4.include(d, g), f4.include(u2, g), f4.include(a, g), O.include(h, g), f4.include(d2, g), i(f4), j2.add("depth", "float", { invariant: true }), V && O.uniforms.add(new e5("tex", (o5) => o5.texture)), x.main.add(t`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`), f4.include(f2, g), O.main.add(t`
        discardBySlice(vpos);
        ${n3(V, t`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${9 === C ? t`outputObjectAndLayerIdColor();` : t`outputDepth(depth);`}`);
      break;
    case 2: {
      f(x, g), f4.include(o), f4.include(r5, g), f4.include(d4, g), f4.include(d, g), f4.include(u2, g), V && O.uniforms.add(new e5("tex", (o6) => o6.texture)), 2 === b && j2.add("vPositionView", "vec3", { invariant: true });
      const o5 = 0 === b || 1 === b;
      x.main.add(t`
        vpos = getVertexInLocalOriginSpace();
        ${o5 ? t`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : t`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`), O.include(h, g), f4.include(f2, g), O.main.add(t`
        discardBySlice(vpos);
        ${n3(V, t`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${2 === b ? t`vec3 normal = screenDerivativeNormal(vPositionView);` : t`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);
      break;
    }
    case 8:
      f(x, g), f4.include(o), f4.include(d, g), f4.include(u2, g), V && O.uniforms.add(new e5("tex", (o5) => o5.texture)), x.main.add(t`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`), O.include(h, g), f4.include(f2, g), f4.include(d3, g), O.main.add(t`
        discardBySlice(vpos);
        ${n3(V, t`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`);
  }
}

export {
  r5 as r,
  d4 as d,
  n4 as n,
  c2 as c,
  c3 as c2,
  t5 as t,
  p2 as p,
  i2 as i,
  f2 as f,
  f3 as f2
};
//# sourceMappingURL=chunk-HYRNAP2G.js.map
