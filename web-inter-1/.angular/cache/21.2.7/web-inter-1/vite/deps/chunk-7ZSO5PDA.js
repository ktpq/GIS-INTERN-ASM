import {
  e
} from "./chunk-SJQX4XJZ.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js
function i(i2) {
  i2.include(e), i2.code.add(t`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t.int(1)}) {
        return allMixed;
      }
      if (mode == ${t.int(2)}) {
        return internalMixed;
      }
      if (mode == ${t.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${t.int(2)}) {
        return internalMixed;
      }
      if (mode == ${t.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}

export {
  i
};
//# sourceMappingURL=chunk-7ZSO5PDA.js.map
