import {
  d,
  e,
  o2
} from "./chunk-FMMQYU6V.js";
import {
  f,
  o
} from "./chunk-GUDGGK5U.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOLID.glsl.js
function e2(e3, n2) {
  e3.include(d, n2), e3.include(f, n2), e3.fragment.include(e);
  const { output: f2, oitPass: u, hasEmission: m, discardInvisibleFragments: d2, oitPremultipliedAlpha: p, snowCover: c } = n2, g = 9 === f2, C = o(f2) && 1 === u, h = o(f2) && 2 === u, v = o(f2) && 1 !== u;
  let b = 0;
  (v || C) && e3.outputs.add("fragColor", "vec4", b++), m && e3.outputs.add("fragEmission", "vec4", b++), C && e3.outputs.add("fragAlpha", "float", b++), e3.fragment.code.add(t`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${n(c, ", float snow")}) {
      ${n(g, "finalColor.a = 1.0;")}
      ${n(d2, `if (finalColor.a < ${t.float(o2)}) { discard; }`)}

      ${n(C, `${n(p, "fragColor = finalColor;", "fragColor = premultiplyAlpha(finalColor);")}
           fragAlpha = finalColor.a;`)}
      ${n(h && p && d2, "finalColor.rgb /= finalColor.a;")}
      ${n(v, "fragColor = finalColor;")}
      ${n(m, `fragEmission = ${n(c, "mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);", "finalColor.a * getEmissions(emissiveSymbolColor);")}`)}
      calculateOcclusionAndOutputHighlight();
      ${n(g, "outputObjectAndLayerIdColor();")}
    }
  `);
}

export {
  e2 as e
};
//# sourceMappingURL=chunk-5K3UFOJ3.js.map
