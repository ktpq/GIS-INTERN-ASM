import {
  c2 as c,
  f as f2,
  f2 as f3,
  i,
  p,
  r,
  t as t2
} from "./chunk-HYRNAP2G.js";
import {
  e as e4,
  f as f4,
  n as n4,
  p as p2,
  t2 as t3,
  v
} from "./chunk-LN22S5O6.js";
import {
  f as f5,
  n as n3,
  o2 as o4,
  p as p3,
  t as t4
} from "./chunk-BLTY4WXI.js";
import {
  l
} from "./chunk-QVWRNZWA.js";
import {
  r as r3
} from "./chunk-S5BCOYYN.js";
import {
  o as o2
} from "./chunk-2NJHQJKV.js";
import {
  n as n2
} from "./chunk-KEBK24XG.js";
import {
  i as i3
} from "./chunk-BK42CVYK.js";
import {
  l as l2,
  r as r2,
  u
} from "./chunk-YQF7MUQ6.js";
import {
  i as i2
} from "./chunk-MQC66RI6.js";
import {
  e as e5
} from "./chunk-NXCIQSSR.js";
import {
  h,
  o2 as o3
} from "./chunk-TNOTTK2Z.js";
import {
  d,
  f
} from "./chunk-WVZRCHFC.js";
import {
  e as e2
} from "./chunk-G7BSCBR2.js";
import {
  d as d2,
  o
} from "./chunk-WCPXG3SO.js";
import {
  e
} from "./chunk-4XVNKYD7.js";
import {
  s
} from "./chunk-MJI3LDNH.js";
import {
  r as r4
} from "./chunk-MXJ2L5AE.js";
import {
  e as e3
} from "./chunk-VI2OV3K7.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
function _(_2) {
  const z2 = new s(), { attributes: U, vertex: W, fragment: H, varyings: G } = z2, { output: q, offsetBackfaces: J, pbrMode: K, snowCover: Q, spherical: X } = _2, Y = 1 === K || 2 === K;
  if (f(W, _2), U.add("position", "vec3"), G.add("vpos", "vec3", { invariant: true }), z2.include(u, _2), z2.include(p, _2), z2.include(n2, _2), z2.include(i2, _2), !o(q)) return z2.include(f3, _2), z2;
  d(z2.vertex, _2), z2.include(r, _2), z2.include(o2), J && z2.include(c), G.add("vNormalWorld", "vec3"), G.add("localvpos", "vec3", { invariant: true }), z2.include(d2, _2), z2.include(i, _2), z2.include(t2, _2), z2.include(r3, _2), W.include(r2), W.include(l2), W.uniforms.add(new e2("externalColor", (e6) => e6.externalColor, { supportsNaN: true })), G.add("vcolorExt", "vec4"), z2.include(_2.instancedDoublePrecision ? p3 : f5, _2), W.main.add(t`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${t.int(l.ignore)} && vcolorExt.a < ${t.float(o3)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${n(J, "offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);", "basePosition;")}
  `);
  const { hasColorTexture: Z, hasColorTextureTransform: ee } = _2;
  return H.include(v, _2), H.include(t3, _2), z2.include(f2, _2), H.include(h, _2), z2.include(e5, _2), d(H, _2), t4(H), p2(H), f4(H), H.uniforms.add(W.uniforms.get("localOrigin"), W.uniforms.get("view"), new e("ambient", (e6) => e6.ambient), new e("diffuse", (e6) => e6.diffuse), new r4("opacity", (e6) => e6.opacity), new r4("layerOpacity", (e6) => e6.layerOpacity)), Z && H.uniforms.add(new e3("tex", (e6) => e6.texture)), z2.include(n4, _2), H.include(n3, _2), H.include(i3), H.include(e4, _2), o4(H), H.main.add(t`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${Z ? `texture(tex, ${ee ? "colorUV" : "vuv0"})` : " vec4(1.0)"};
      ${n(Z, `${n(_2.textureAlphaPremultiplied, "texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${_2.hasVertexColors ? t`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);` : t`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${X ? "normalize(vpos + localOrigin)" : "vec3(0.0, 0.0, 1.0)"};

      ${n(Q, "vec3 faceNormal = screenDerivativeNormal(vpos);\n         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);\n         albedo = mix(albedo, vec3(1), snow);")}

      ${t`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${Y ? t`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${n(Q, "mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);` : t`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${n(Q, ", 1.0")});`), z2;
}
var z = Object.freeze(Object.defineProperty({ __proto__: null, build: _ }, Symbol.toStringTag, { value: "Module" }));

export {
  _,
  z
};
//# sourceMappingURL=chunk-DMYFH6NJ.js.map
