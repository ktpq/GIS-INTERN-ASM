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
  c
} from "./chunk-OW6NGBR6.js";
import {
  s
} from "./chunk-SADF36VT.js";
import {
  r
} from "./chunk-7EJ3JKOB.js";
import {
  e
} from "./chunk-ALI26FYX.js";
import {
  n,
  t
} from "./chunk-QLAEYQER.js";

// node_modules/@arcgis/core/chunks/ImageMaterial.glsl.js
var v = class extends c {
};
function c2(g) {
  const v2 = new s(), { vertex: c3, fragment: m2, varyings: u } = v2, { output: w, perspectiveInterpolation: f2 } = g;
  return f(c3, g), v2.include(o), v2.include(i, g), v2.fragment.include(h, g), v2.fragment.code.add(t`void outputObjectAndLayerIdColor() {
    ${n(9 === w, "fragColor = vec4(0, 0, 0, 1);")}
    }`), v2.include(e3, g), v2.attributes.add("position", "vec3"), v2.attributes.add("uv0", "vec2"), f2 && v2.attributes.add("perspectiveDivide", "float"), c3.main.add(t`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${n(f2, "gl_Position *= perspectiveDivide;")}`), u.add("vpos", "vec3", { invariant: true }), u.add("vTexCoord", "vec2"), m2.include(e2), m2.uniforms.add(new r("opacity", (e4) => e4.opacity), new e("tex", (e4) => e4.texture)).main.add(t`discardBySlice(vpos);
discardByTerrainDepth();
vec4 finalColor = texture(tex, vTexCoord) * opacity;
outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`), v2;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, ImageMaterialPassParameters: v, build: c2 }, Symbol.toStringTag, { value: "Module" }));

export {
  v,
  c2 as c,
  m
};
//# sourceMappingURL=chunk-3AN2ZAMY.js.map
