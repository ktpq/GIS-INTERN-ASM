import {
  r as r7
} from "./chunk-MUVLGTZ5.js";
import {
  c2 as c,
  d,
  f as f2,
  f2 as f3,
  i,
  p,
  r as r2,
  t as t3
} from "./chunk-VMQRP2S7.js";
import {
  e as e7,
  f as f4,
  n as n4,
  p as p2,
  t2 as t4,
  v
} from "./chunk-KCGZIYQP.js";
import {
  f as f5,
  n as n3,
  o2 as o4,
  p as p3
} from "./chunk-IBKGTAEY.js";
import {
  l
} from "./chunk-QVWRNZWA.js";
import {
  n as n2
} from "./chunk-47K4ZEK6.js";
import {
  r as r4
} from "./chunk-S5BCOYYN.js";
import {
  o as o2
} from "./chunk-C4QC2ZP6.js";
import {
  i as i3
} from "./chunk-OK5ISLCT.js";
import {
  l as l2,
  r as r3,
  u
} from "./chunk-BGM57X3D.js";
import {
  e as e8
} from "./chunk-5K3UFOJ3.js";
import {
  i as i2
} from "./chunk-MQC66RI6.js";
import {
  t as t2
} from "./chunk-5XSBUEI5.js";
import {
  h,
  o2 as o3
} from "./chunk-FMMQYU6V.js";
import {
  d as d2,
  f
} from "./chunk-ZCX44DZQ.js";
import {
  e as e2
} from "./chunk-G7BSCBR2.js";
import {
  d as d3,
  o,
  r2 as r6
} from "./chunk-GUDGGK5U.js";
import {
  e
} from "./chunk-4XVNKYD7.js";
import {
  e as e4
} from "./chunk-R2BJ6EDL.js";
import {
  e as e6
} from "./chunk-CRZWOWJQ.js";
import {
  e as e5
} from "./chunk-G3O4MMNO.js";
import {
  s
} from "./chunk-WBF67J46.js";
import {
  r as r5
} from "./chunk-MXJ2L5AE.js";
import {
  e as e3
} from "./chunk-VI2OV3K7.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";
import {
  a
} from "./chunk-47CFN4JI.js";
import {
  r
} from "./chunk-EQVY5WGD.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js
function l3(e9, t6) {
  return i4(e9, t6);
}
function i4(l4, c2) {
  const i6 = l4.fragment, { hasVertexTangents: u2, doubleSidedMode: x, hasNormalTexture: T, textureCoordinateType: g, bindType: f6, hasNormalTextureTransform: v2 } = c2;
  u2 ? (l4.attributes.add("tangent", "vec4"), l4.varyings.add("vTangent", "vec4"), 2 === x ? i6.code.add(t`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : i6.code.add(t`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : i6.code.add(t`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`), T && 0 !== g && (l4.include(r6, c2), i6.uniforms.add(1 === f6 ? new e3("normalTexture", (e9) => e9.textureNormal) : new e6("normalTexture", (e9) => e9.textureNormal)), v2 && (i6.uniforms.add(1 === f6 ? new e5("scale", (e9) => e9.scale ?? a) : new e4("scale", (e9) => e9.scale ?? a)), i6.uniforms.add(new t2("normalTextureTransformMatrix", (t6) => t6.normalTextureTransformMatrix ?? r))), i6.code.add(t`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`), v2 && i6.code.add(t`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`), i6.code.add(t`return tangentSpace * rawNormal;
}`));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js
function a2(a3, s3) {
  s3.hasColorTextureTransform ? (a3.varyings.add("colorUV", "vec2"), a3.vertex.uniforms.add(new t2("colorTextureTransformMatrix", (e9) => e9.colorTextureTransformMatrix ?? r)).code.add(t`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : a3.vertex.code.add(t`void forwardColorUV(){}`);
}
function s2(a3, s3) {
  s3.hasNormalTextureTransform && 0 !== s3.textureCoordinateType ? (a3.varyings.add("normalUV", "vec2"), a3.vertex.uniforms.add(new t2("normalTextureTransformMatrix", (e9) => e9.normalTextureTransformMatrix ?? r)).code.add(t`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : a3.vertex.code.add(t`void forwardNormalUV(){}`);
}
function i5(a3, s3) {
  s3.hasEmissionTextureTransform && 0 !== s3.textureCoordinateType ? (a3.varyings.add("emissiveUV", "vec2"), a3.vertex.uniforms.add(new t2("emissiveTextureTransformMatrix", (e9) => e9.emissiveTextureTransformMatrix ?? r)).code.add(t`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : a3.vertex.code.add(t`void forwardEmissiveUV(){}`);
}
function d4(a3, s3) {
  s3.hasOcclusionTextureTransform && 0 !== s3.textureCoordinateType ? (a3.varyings.add("occlusionUV", "vec2"), a3.vertex.uniforms.add(new t2("occlusionTextureTransformMatrix", (e9) => e9.occlusionTextureTransformMatrix ?? r)).code.add(t`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : a3.vertex.code.add(t`void forwardOcclusionUV(){}`);
}
function t5(a3, s3) {
  s3.hasMetallicRoughnessTextureTransform && 0 !== s3.textureCoordinateType ? (a3.varyings.add("metallicRoughnessUV", "vec2"), a3.vertex.uniforms.add(new t2("metallicRoughnessTextureTransformMatrix", (e9) => e9.metallicRoughnessTextureTransformMatrix ?? r)).code.add(t`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : a3.vertex.code.add(t`void forwardMetallicRoughnessUV(){}`);
}

// node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
function J(J2) {
  const K2 = new s(), { attributes: Q, vertex: X, fragment: Y, varyings: Z } = K2, { output: ee, normalType: re, offsetBackfaces: oe, spherical: ie, snowCover: ae, pbrMode: le, textureAlphaPremultiplied: se, instancedDoublePrecision: ne, hasVertexColors: te, hasVertexTangents: de, hasColorTexture: ce, hasNormalTexture: ge, hasNormalTextureTransform: me, hasColorTextureTransform: ue } = J2;
  if (f(X, J2), Q.add("position", "vec3"), Z.add("vpos", "vec3", { invariant: true }), K2.include(u, J2), K2.include(p, J2), K2.include(n2, J2), K2.include(a2, J2), !o(ee)) return K2.include(f3, J2), K2;
  K2.include(s2, J2), K2.include(i5, J2), K2.include(d4, J2), K2.include(t5, J2), d2(X, J2), K2.include(r2, J2), K2.include(o2);
  const ve = 0 === re || 1 === re;
  return ve && oe && K2.include(c), K2.include(l3, J2), K2.include(d, J2), K2.include(t3, J2), Z.add("vPositionLocal", "vec3"), K2.include(d3, J2), K2.include(i, J2), K2.include(r4, J2), X.uniforms.add(new e2("externalColor", (e9) => e9.externalColor, { supportsNaN: true })), Z.add("vcolorExt", "vec4"), K2.include(i2, J2), X.include(r3), X.include(l2), K2.include(ne ? p3 : f5, J2), X.main.add(t`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${n(ve, "vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${n(de, "vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${n(ve && oe, "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${t.int(l.ignore)} && vcolorExt.a < ${t.float(o3)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `), Y.include(v, J2), Y.include(t4, J2), K2.include(f2, J2), Y.include(h, J2), K2.include(e8, J2), d2(Y, J2), Y.uniforms.add(X.uniforms.get("localOrigin"), new e("ambient", (e9) => e9.ambient), new e("diffuse", (e9) => e9.diffuse), new r5("opacity", (e9) => e9.opacity), new r5("layerOpacity", (e9) => e9.layerOpacity)), ce && Y.uniforms.add(new e3("tex", (e9) => e9.texture)), K2.include(n4, J2), Y.include(n3, J2), Y.include(i3), K2.include(r7, J2), Y.include(e7, J2), p2(Y), f4(Y), o4(Y), Y.main.add(t`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ce ? t`
            vec4 texColor = texture(tex, ${ue ? "colorUV" : "vuv0"});
            ${n(se, "texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);` : t`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${2 === re ? t`vec3 normal = screenDerivativeNormal(vPositionLocal);` : t`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${n(te, "vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${n(te, "vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${ge ? `mat3 tangentSpace = computeTangentSpace(${de ? "normal" : "normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${me ? "normalUV" : "vuv0"});` : "vec3 shadingNormal = normal;"}
    vec3 normalGround = ${ie ? "normalize(posWorld);" : "vec3(0.0, 0.0, 1.0);"}

    ${n(ae, t`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${1 === le || 2 === le ? t`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${n(ae, "mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);` : t`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${n(ae, ", snow")});
  `), K2;
}
var K = Object.freeze(Object.defineProperty({ __proto__: null, build: J }, Symbol.toStringTag, { value: "Module" }));

export {
  J,
  K
};
//# sourceMappingURL=chunk-GUR4JLUT.js.map
