import {
  r
} from "./chunk-F64KOS5H.js";
import {
  u
} from "./chunk-5LQ33R73.js";
import {
  d
} from "./chunk-GMM4AUKC.js";
import {
  o
} from "./chunk-BN3BS6PJ.js";
import {
  e as e3
} from "./chunk-LCUSEJL3.js";
import {
  i
} from "./chunk-ZSOEZT3A.js";
import {
  e as e2,
  h
} from "./chunk-NVQAZNDV.js";
import {
  f
} from "./chunk-FHQ7QQBR.js";
import {
  e
} from "./chunk-IP46ETCC.js";
import {
  s
} from "./chunk-SADF36VT.js";
import {
  t
} from "./chunk-QLAEYQER.js";

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
//# sourceMappingURL=chunk-I7TLIJ7C.js.map
