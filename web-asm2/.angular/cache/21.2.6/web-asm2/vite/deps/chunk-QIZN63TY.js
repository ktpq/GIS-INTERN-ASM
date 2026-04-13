import {
  d,
  l,
  n as n3
} from "./chunk-TNDDM3EH.js";
import {
  i
} from "./chunk-B7QM3DGS.js";
import {
  e as e6
} from "./chunk-K2OVZMBS.js";
import {
  w
} from "./chunk-I7H7E43T.js";
import {
  e as e2
} from "./chunk-IP46ETCC.js";
import {
  e as e3
} from "./chunk-HIHV37EE.js";
import {
  e as e4
} from "./chunk-WSV5PQIB.js";
import {
  e as e5
} from "./chunk-IBVWG56S.js";
import {
  a as a2
} from "./chunk-OGWMG3Q3.js";
import {
  e
} from "./chunk-UCQU6LZ5.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  r
} from "./chunk-7EJ3JKOB.js";
import {
  n as n2,
  t
} from "./chunk-QLAEYQER.js";
import {
  n
} from "./chunk-ULRT2MRD.js";
import {
  a
} from "./chunk-IXOUFXRS.js";
import {
  o
} from "./chunk-EFJUSEVJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl.js
function r2(r3) {
  r3.include(a2), r3.uniforms.add(new e3("geometryDepthTexture", (e7) => e7.geometryDepth?.attachment)), r3.code.add(t`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`);
}

// node_modules/@arcgis/core/chunks/LineCallout.glsl.js
function w2(i2) {
  const w3 = new s(), { vertex: x2, fragment: z } = w3, { terrainDepthTest: y } = i2;
  return x2.include(l), w3.include(d, i2), w3.vertex.include(w, i2), i2.hudDepth || w3.include(e6, i2), w3.attributes.add("uv0", "vec2"), x2.uniforms.add(new e5("viewport", (e7) => e7.camera.fullViewport), new r("lineSize", (e7, i3) => e7.size > 0 ? Math.max(1, e7.size) * i3.camera.pixelRatio : 0), new e("pixelToNDC", (i3) => o(b, 2 / i3.camera.fullViewport[2], 2 / i3.camera.fullViewport[3])), new r("borderSize", (e7, i3) => e7.borderColor ? i3.camera.pixelRatio : 0), new e4("screenOffset", (i3, r3) => o(b, i3.horizontalScreenOffset * r3.camera.pixelRatio, 0))), w3.varyings.add("coverageSampling", "vec4"), w3.varyings.add("lineSizes", "vec2"), y && w3.varyings.add("depth", "float"), i2.useVisibilityPixel && w3.include(n3), i2.hasScreenSizePerspective && i(x2), x2.main.add(t`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${n2(i2.useVisibilityPixel, t`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${i2.hasScreenSizePerspective ? t`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);` : "vec2 screenOffsetScaled = screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${n2(y, "depth = posView.z;")}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${n2(i2.hudDepth, i2.hudDepthAlignStart ? "endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);" : "startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i2.hasScreenSizePerspective ? t`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);` : t`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`), z.uniforms.add(new e2("uColor", (e7) => e7.color ?? a), new e2("borderColor", (e7) => e7.borderColor ?? a)), y && (z.include(r2, i2), z.uniforms.add(new e("inverseViewport", (e7) => e7.inverseViewport))), z.main.add(t`
    ${n2(y, "if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }")}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${n2(i2.hudDepth, t`
    if (max(coverage.x, coverage.y) < ${t.float(u)}) discard;`, t`
    vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
    outputColorHighlightOLID(vec4(finalRgb, finalAlpha), finalRgb);`)}`), w3;
}
var u = 0.5;
var b = n();
var x = Object.freeze(Object.defineProperty({ __proto__: null, build: w2 }, Symbol.toStringTag, { value: "Module" }));

export {
  w2 as w,
  x
};
//# sourceMappingURL=chunk-QIZN63TY.js.map
