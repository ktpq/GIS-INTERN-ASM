import {
  r
} from "./chunk-S5BCOYYN.js";
import {
  u
} from "./chunk-ENZONGCU.js";
import {
  d
} from "./chunk-XDXLNPDB.js";
import {
  o
} from "./chunk-2NJHQJKV.js";
import {
  e as e3
} from "./chunk-EJQEZ7UU.js";
import {
  i
} from "./chunk-MQC66RI6.js";
import {
  e as e2,
  h
} from "./chunk-O2ZZHYLF.js";
import {
  f
} from "./chunk-MVL65WZK.js";
import {
  e
} from "./chunk-G7BSCBR2.js";
import {
  s
} from "./chunk-WBF67J46.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
function u2(u3) {
  const v2 = new s(), { vertex: b, fragment: w, attributes: m, varyings: p } = v2, { hasVVColor: f2, hasVertexColors: h2 } = u3;
  return f(b, u3), v2.include(o), v2.include(r, u3), v2.include(u, u3), v2.include(d, u3), w.include(h, u3), v2.include(e3, u3), v2.include(i, u3), m.add("position", "vec3"), f2 && m.add("colorFeatureAttribute", "float"), h2 || p.add("vColor", "vec4"), p.add("vpos", "vec3", { invariant: true }), b.uniforms.add(new e("uColor", (e4) => e4.color)), b.main.add(t`
      vpos = position;
      forwardVertexColor();
      forwardObjectAndLayerIdColor();

      ${h2 ? "vColor *= uColor;" : f2 ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`), w.include(e2), w.main.add(t`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOLID(applySlice(vColor, vpos), vColor.rgb);`), v2;
}
var v = Object.freeze(Object.defineProperty({ __proto__: null, build: u2 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  v
};
//# sourceMappingURL=chunk-KO22MAKK.js.map
