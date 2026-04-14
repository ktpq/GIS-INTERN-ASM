import {
  d as d3,
  l,
  n as n3
} from "./chunk-KKMAO6YQ.js";
import {
  s as s3
} from "./chunk-GXSEOZH6.js";
import {
  u
} from "./chunk-YQF7MUQ6.js";
import {
  d
} from "./chunk-XDXLNPDB.js";
import {
  i as i2
} from "./chunk-MQC66RI6.js";
import {
  i,
  s,
  t as t2
} from "./chunk-4J2HN4VJ.js";
import {
  d as d2,
  e as e6,
  o2,
  w
} from "./chunk-TNOTTK2Z.js";
import {
  w as w2
} from "./chunk-WVZRCHFC.js";
import {
  e
} from "./chunk-G7BSCBR2.js";
import {
  e as e2
} from "./chunk-A76BR3U7.js";
import {
  e as e4
} from "./chunk-G3O4MMNO.js";
import {
  e as e5
} from "./chunk-M43V4H4A.js";
import {
  a as a2
} from "./chunk-BJFGDIZJ.js";
import {
  s as s2
} from "./chunk-MJI3LDNH.js";
import {
  r as r2
} from "./chunk-MXJ2L5AE.js";
import {
  e as e3
} from "./chunk-VI2OV3K7.js";
import {
  n as n2,
  t
} from "./chunk-BBPD3RSJ.js";
import {
  n
} from "./chunk-47CFN4JI.js";
import {
  a
} from "./chunk-TVLXQ42J.js";
import {
  o,
  r
} from "./chunk-5GPMO33J.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js
function i3(i4, t3) {
  const { vertex: s4, fragment: p } = i4;
  i4.include(i2, t3), s4.include(l), s4.main.add(t`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`), p.main.add(t`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`);
}

// node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js
function O(e7) {
  const i4 = new s2();
  if (i4.include(d3, e7), i4.vertex.include(w, e7), e7.occlusionPass) return i4.include(i3, e7), i4;
  const { output: O2, oitPass: L2, hasOcclusionTexture: U2, signedDistanceFieldEnabled: M2, useVisibilityPixel: _, pixelSnappingEnabled: q, hasEmission: H, hasScreenSizePerspective: R, debugDrawLabelBorder: k, hasVVSize: E, hasVVColor: I, hasRotation: G, occludedFragmentFade: J, sampleSignedDistanceFieldTexelCenter: K } = e7;
  i4.include(s), i4.include(u, e7), i4.include(d, e7), _ && i4.include(n3);
  const { vertex: N, fragment: Q } = i4;
  Q.include(e6), i4.varyings.add("vcolor", "vec4"), i4.varyings.add("vtc", "vec2"), i4.varyings.add("vsize", "vec2");
  const W = 8 === O2, X = W && _;
  X && i4.varyings.add("voccluded", "float"), N.uniforms.add(new e5("viewport", (e8) => e8.camera.fullViewport), new e4("screenOffset", (e8, i5) => o(B, 2 * e8.screenOffset[0] * i5.camera.pixelRatio, 2 * e8.screenOffset[1] * i5.camera.pixelRatio)), new e4("anchorPosition", (e8) => F(e8)), new e("materialColor", ({ color: e8 }) => e8), new r2("materialRotation", (e8) => e8.rotation), new e3("tex", (e8) => e8.texture)), w2(N), M2 && (N.uniforms.add(new e("outlineColor", (e8) => e8.outlineColor)), Q.uniforms.add(new e("outlineColor", (e8) => D(e8) ? e8.outlineColor : a), new r2("outlineSize", (e8) => D(e8) ? e8.outlineSize : 0))), q && N.include(l), R && (t2(N), i(N)), k && i4.varyings.add("debugBorderCoords", "vec4"), i4.attributes.add("uv0", "vec2"), i4.attributes.add("uvi", "vec4"), i4.attributes.add("color", "vec4"), i4.attributes.add("size", "vec2"), i4.attributes.add("rotation", "float"), (E || I) && i4.attributes.add("featureAttribute", "vec4"), N.main.add(t`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${s3};
      return;
    }

    vec2 inputSize;
    ${n2(R, t`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`, t`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${n2(E, t`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${n2(_, t`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${n2(k, "debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
          return;
        }
      `)}
    ${n2(X, t`voccluded = visible ? 0.0 : 1.0;`)}
  `);
  const Y = t`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${T})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${n2(G, t`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `, Z = q ? M2 ? t`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;` : t`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}` : t`posProj += quadOffset;`;
  N.main.add(t`
    ${Y}
    ${I ? "vcolor = interpolateVVColor(featureAttribute.y) * materialColor;" : "vcolor = color * materialColor;"}

    ${n2(9 === O2, t`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${t.float(o2)};
    ${n2(M2, `alphaDiscard = alphaDiscard && outlineColor.a < ${t.float(o2)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${Z}
      gl_Position = posProj;
    }

    vtc = uv;

    ${n2(k, t`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `), Q.uniforms.add(new e3("tex", (e8) => e8.texture)), J && !W && (Q.include(a2), Q.uniforms.add(new e2("depthMap", (e8) => e8.mainDepth), new r2("occludedOpacity", (e8) => e8.occludedFragmentOpacity?.value ?? 1))), U2 && Q.uniforms.add(new e2("texOcclusion", (e8) => e8.hudOcclusion?.attachment));
  const ee = k ? t`(isBorder > 0.0 ? 0.0 : ${t.float(o2)})` : t.float(o2), oe = t`
    ${n2(k, t`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${n2(K, t`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${M2 ? t`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${ee} ||
          fillPixelColor.a + outlinePixelColor.a < ${t.float(o2)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${n2(!W, t`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${ee}) {
          discard;
        }

        ${n2(!W, t`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      ` : t`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${ee}) {
            discard;
          }
          ${n2(!W, t`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${n2(J && !W, t`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${t.float(1 - V)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${n2(U2, t`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${n2(!W && k, t`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${n2(2 === L2, t`
    if (fragColor.a < ${t.float(o2)}) {
      discard;
    }`)}
  `;
  switch (O2) {
    case 0:
      i4.outputs.add("fragColor", "vec4", 0), H && i4.outputs.add("fragEmission", "vec4", 1), 1 === L2 && i4.outputs.add("fragAlpha", "float", H ? 2 : 1), Q.main.add(t`
        ${oe}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${n2(2 === L2, t`fragColor.rgb /= fragColor.a;`)}
        ${n2(H, t`fragEmission = vec4(0.0);`)}
        ${n2(1 === L2, t`fragAlpha = fragColor.a;`)}`);
      break;
    case 9:
      Q.main.add(t`
        ${oe}
        outputObjectAndLayerIdColor();`);
      break;
    case 8:
      i4.include(d2, e7), Q.main.add(t`
        ${oe}
        outputHighlight(${n2(X, t`voccluded == 1.0`, t`false`)});`);
  }
  return i4;
}
function D(e7) {
  return e7.outlineColor[3] > 0 && e7.outlineSize > 0;
}
function F(o3) {
  return o3.textureIsSignedDistanceField ? L(o3.anchorPosition, o3.distanceFieldBoundingBox, B) : r(B, o3.anchorPosition), B;
}
var B = n();
function L(e7, i4, r3) {
  o(r3, e7[0] * (i4[2] - i4[0]) + i4[0], e7[1] * (i4[3] - i4[1]) + i4[1]);
}
var V = 0.08;
var U = 32e3;
var T = t.float(U);
var M = Object.freeze(Object.defineProperty({ __proto__: null, build: O, calculateAnchorPosition: F, fullUV: U }, Symbol.toStringTag, { value: "Module" }));

export {
  O,
  F,
  U,
  M
};
//# sourceMappingURL=chunk-5RORMZO5.js.map
