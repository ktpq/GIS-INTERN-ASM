import {
  r
} from "./chunk-S5BCOYYN.js";
import {
  o
} from "./chunk-2NJHQJKV.js";
import {
  e as e2
} from "./chunk-NXCIQSSR.js";
import {
  h
} from "./chunk-TNOTTK2Z.js";
import {
  f
} from "./chunk-WVZRCHFC.js";
import {
  e
} from "./chunk-G7BSCBR2.js";
import {
  s
} from "./chunk-MJI3LDNH.js";
import {
  t
} from "./chunk-BBPD3RSJ.js";

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
//# sourceMappingURL=chunk-SPCMKUPW.js.map
