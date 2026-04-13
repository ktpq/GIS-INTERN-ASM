import {
  r as r6
} from "./chunk-Z2CMAZH3.js";
import {
  i as i3
} from "./chunk-MAQLWMTQ.js";
import {
  a2,
  e as e7,
  e2 as e8,
  f as f2,
  m,
  o as o6,
  o2 as o7,
  t as t4
} from "./chunk-MTA5G55A.js";
import {
  r as r5
} from "./chunk-E2CUBQF7.js";
import {
  o as o4
} from "./chunk-BN3BS6PJ.js";
import {
  e as e10
} from "./chunk-K2OVZMBS.js";
import {
  d as d2
} from "./chunk-GMM4AUKC.js";
import {
  i as i2
} from "./chunk-ZSOEZT3A.js";
import {
  d as d3,
  e as e9,
  h,
  o2 as o5
} from "./chunk-I7H7E43T.js";
import {
  d,
  f
} from "./chunk-EIMKOHBU.js";
import {
  e as e3
} from "./chunk-IP46ETCC.js";
import {
  e as e2
} from "./chunk-YXR2ZZI3.js";
import {
  t as t3
} from "./chunk-U5UDUOV3.js";
import {
  e as e4
} from "./chunk-HIHV37EE.js";
import {
  o as o3
} from "./chunk-RN5EOLXT.js";
import {
  e as e6
} from "./chunk-WSV5PQIB.js";
import {
  r as r2
} from "./chunk-6NVAPYAK.js";
import {
  r as r4
} from "./chunk-4QE2CR6M.js";
import {
  a
} from "./chunk-OGWMG3Q3.js";
import {
  e
} from "./chunk-UCQU6LZ5.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  r as r3
} from "./chunk-7EJ3JKOB.js";
import {
  e as e5
} from "./chunk-ALI26FYX.js";
import {
  i
} from "./chunk-EQBT6655.js";
import {
  t as t2
} from "./chunk-QLAEYQER.js";
import {
  n as n2
} from "./chunk-ULRT2MRD.js";
import {
  n
} from "./chunk-IXOUFXRS.js";
import {
  o as o2
} from "./chunk-XA4KTSOB.js";
import {
  r
} from "./chunk-MLBRAI7B.js";
import {
  o
} from "./chunk-EFJUSEVJ.js";
import {
  t
} from "./chunk-EWPZDMTE.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/FoamRendering.glsl.js
function t5(t6) {
  t6.code.add(t2`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`);
}
function n3(t6) {
  t6.code.add(t2`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js
function u(t6) {
  t6.fragment.uniforms.add(new e5("texWaveNormal", (e13) => e13.waveNormal), new e5("texWavePerturbation", (e13) => e13.wavePerturbation), new e3("waveParams", (e13) => o2(c, e13.waveStrength, e13.waveTextureRepeat, e13.flowStrength, e13.flowOffset)), new e6("waveDirection", (t7) => o(n4, t7.waveDirection[0] * t7.waveVelocity, t7.waveDirection[1] * t7.waveVelocity))), t6.fragment.include(t5), t6.fragment.code.add(t2`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`);
}
var c = n();
var n4 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceReflections.glsl.js
function d4(d5, n5) {
  if (!n5.screenSpaceReflections) return;
  const c2 = d5.fragment;
  c2.include(a), c2.uniforms.add(new e("nearFar", (e13) => e13.camera.nearFar), new e4("depthMap", (e13) => e13.depth?.attachment), new t3("proj", (e13) => e13.camera.projectionMatrix), new r2("invResolutionHeight", (e13) => 1 / e13.camera.height), new t3("reprojectionMatrix", (e13) => e13.ssr.reprojectionMatrix)).code.add(t2`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${n5.highStepCount ? "150" : "75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/LookupCloudsFromTextureArray.glsl.js
function e11(e13) {
  e13.fragment.uniforms.add(new r2("cloudAbsorption", (r7) => r7.clouds.absorption), new r2("cloudCoverage", (r7) => r7.clouds.coverage)).code.add(t2`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DArrayBindUniform.js
var e12 = class extends i {
  constructor(r7, e13) {
    super(r7, "sampler2DArray", 0, (s2, o8) => s2.bindTexture(r7, e13(o8)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl.js
function m3(t6) {
  const a3 = t6.fragment;
  a3.constants.add("radiusCloudsSquared", "float", C).code.add(t2`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`), a3.uniforms.add(new r2("radiusCurvatureCorrection", ({ clouds: o8 }) => o8.parallax.radiusCurvatureCorrection)).code.add(t2`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`), a3.code.add(t2`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`), t4(a3), o7(a3), a3.constants.add("RIM_COLOR", "vec3", r(0.28, 0.175, 0.035)), a3.constants.add("sunsetTransitionFactor", "float", 0.3), a3.constants.add("rimScattering", "float", 140), a3.constants.add("backlightFactor", "float", 0.2), a3.constants.add("backlightScattering", "float", 10), a3.constants.add("backlightTransition", "float", 0.3), a3.code.add(t2`vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
float upDotLight = dot(cameraPosition, mainLightDirection);
float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), sunsetTransitionFactor), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, rimScattering)) * scatteringMod;
float additionalLight = backlightFactor * pow(dirDotLight, backlightScattering) * (1. - pow(sunsetTransition, backlightTransition)) ;
return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
}`), t6.include(e11), a3.uniforms.add(new r5("readChannelsRG", (o8) => 0 === o8.clouds.readChannels), new e12("cubeMap", (o8) => o8.clouds.data?.cubeMap?.colorTexture)).code.add(t2`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`), a3.uniforms.add(new e2("anchorPoint", (o8) => o8.clouds.parallax.anchorPoint), new e2("anchorPointNew", (o8) => o8.clouds.parallaxNew.anchorPoint), new t3("rotationClouds", (o8) => o8.clouds.parallax.transform), new t3("rotationCloudsNew", (o8) => o8.clouds.parallaxNew.transform), new r2("cloudsOpacity", (o8) => o8.clouds.opacity), new r2("fadeFactor", (o8) => o8.clouds.fadeFactor), new r5("crossFade", (o8) => 3 === o8.clouds.fadeState)).code.add(t2`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`);
}
var C = (t.radius + i3) ** 2;

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterColor.glsl.js
function m4(m5, v) {
  const u2 = m5.fragment;
  u2.include(a2, v), u2.include(r4), u2.include(n3), v.cloudReflections && m5.include(m3), m5.include(d4, v), u2.include(e8, v), u2.constants.add("fresnelSky", "vec3", [0.02, 1, 15]), u2.constants.add("fresnelMaterial", "vec2", [0.02, 0.1]), u2.constants.add("roughness", "float", 0.015), u2.constants.add("foamIntensityExternal", "float", 1.7), u2.constants.add("ssrIntensity", "float", 0.65), u2.constants.add("ssrHeightFadeStart", "float", e7), u2.constants.add("ssrHeightFadeEnd", "float", o6), u2.constants.add("waterDiffusion", "float", 0.92), u2.constants.add("waterSeaColorMod", "float", 0.8), u2.constants.add("correctionViewingPowerFactor", "float", 0.4), u2.constants.add("skyZenitColor", "vec3", [0.52, 0.68, 0.9]), u2.constants.add("skyColor", "vec3", [0.67, 0.79, 0.9]), u2.constants.add("cloudFresnelModifier", "vec2", [1.2, 0.01]), u2.code.add(t2`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`), u2.uniforms.add(new r2("lightingSpecularStrength", (e13) => e13.lighting.mainLight.specularStrength), new r2("lightingEnvironmentStrength", (e13) => e13.lighting.mainLight.environmentStrength)), u2.code.add(t2`vec3 getWaterColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`), v.cloudReflections && u2.uniforms.add(new r2("cloudsOpacity", (e13) => e13.clouds.opacity)).code.add(t2`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`), v.screenSpaceReflections ? u2.uniforms.add(new t3("view", (e13) => e13.camera.viewMatrix), new e4("lastFrameColorTexture", (e13) => e13.ssr.lastFrameColor?.getTexture()), new r2("fadeFactorSSR", (e13) => e13.ssr.fadeFactor)).code.add(t2`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`) : u2.code.add(t2`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`), v.cloudReflections ? v.screenSpaceReflections ? u2.code.add(t2`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`) : u2.code.add(t2`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`) : u2.code.add(t2`return waterRenderedColor;
}`);
}

// node_modules/@arcgis/core/chunks/Water.glsl.js
function L(L2) {
  const C3 = new s(), { vertex: P, fragment: x, varyings: S } = C3, { output: O, draped: D, receiveShadows: M } = L2;
  f(P, L2), C3.include(o4), C3.attributes.add("position", "vec3"), C3.attributes.add("uv0", "vec2");
  const _ = new e3("waterColor", (e13) => e13.color);
  if (S.add("vpos", "vec3", { invariant: true }), P.uniforms.add(_), o3(O)) {
    if (D) return P.main.add(t2`
      if (waterColor.a < ${t2.float(o5)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`), x.uniforms.add(_), x.main.add(t2`fragColor = waterColor;`), C3;
    C3.include(r6, L2), S.add("vuv", "vec2"), S.add("vnormal", "vec3"), S.add("vtbnMatrix", "mat3"), P.main.add(t2`
      if (waterColor.a < ${t2.float(o5)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`);
  }
  switch (C3.include(f2, L2), C3.include(i2, L2), O) {
    case 0:
      x.include(m, { pbrMode: 0, lightingSphericalHarmonicsOrder: 2 }), C3.include(u), C3.include(m4, L2), x.include(h, L2), C3.include(e10, L2), x.include(e9), d(x, L2), t4(x), o7(x), x.uniforms.add(_, new r3("timeElapsed", ({ timeElapsed: e13 }) => e13), P.uniforms.get("view"), P.uniforms.get("localOrigin")).main.add(t2`
        discardBySlice(vpos);
        discardByTerrainDepth();
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${M ? t2`1.0 - readShadowMap(vpos, linearDepth)` : "1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getWaterColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOLID(applySlice(fragColor, vpos), final.rgb);`);
      break;
    case 2:
      C3.include(r6, L2), C3.include(u, L2), x.include(h, L2), S.add("vuv", "vec2"), P.main.add(t2`
        if (waterColor.a < ${t2.float(o5)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`), x.uniforms.add(new r3("timeElapsed", ({ timeElapsed: e13 }) => e13)).main.add(t2`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);
      break;
    case 8:
      C3.include(d3, L2), P.main.add(t2`
        if (waterColor.a < ${t2.float(o5)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`), x.include(h, L2), x.main.add(t2`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);
      break;
    case 9:
      C3.include(d2, L2), P.main.add(t2`
        if (waterColor.a < ${t2.float(o5)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`), x.include(h, L2), x.main.add(t2`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);
  }
  return C3;
}
var C2 = Object.freeze(Object.defineProperty({ __proto__: null, build: L }, Symbol.toStringTag, { value: "Module" }));

export {
  L,
  C2 as C
};
//# sourceMappingURL=chunk-JHWXF2GJ.js.map
