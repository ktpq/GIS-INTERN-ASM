import {
  r
} from "./chunk-F64KOS5H.js";
import {
  o
} from "./chunk-BN3BS6PJ.js";
import {
  e as e2
} from "./chunk-K2OVZMBS.js";
import {
  h
} from "./chunk-I7H7E43T.js";
import {
  f
} from "./chunk-EIMKOHBU.js";
import {
  e
} from "./chunk-IP46ETCC.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  t
} from "./chunk-QLAEYQER.js";

// node_modules/@arcgis/core/chunks/NativeLine.glsl.js
function a(a2) {
  const d2 = new s(), { vertex: g, fragment: c, varyings: m } = d2;
  return d2.fragment.include(h, a2), d2.include(o), d2.include(r, a2), d2.include(e2, a2), f(g, a2), d2.attributes.add("position", "vec3"), m.add("vpos", "vec3", { invariant: true }), g.main.add(t`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`), a2.hasVertexColors || c.uniforms.add(new e("constantColor", (e3) => e3.color)), c.main.add(t`
    discardBySlice(vpos);
    vec4 color = ${a2.hasVertexColors ? "vColor" : "constantColor"};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `), d2;
}
var d = Object.freeze(Object.defineProperty({ __proto__: null, build: a }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  d
};
//# sourceMappingURL=chunk-PAJS63XX.js.map
