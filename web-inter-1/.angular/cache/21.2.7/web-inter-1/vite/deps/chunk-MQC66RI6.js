import {
  e
} from "./chunk-A76BR3U7.js";
import {
  a
} from "./chunk-BJFGDIZJ.js";
import {
  n,
  t
} from "./chunk-BBPD3RSJ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js
function i(i2, { occlusionPass: d, terrainDepthTest: a2, cullAboveTerrain: n2 }) {
  const { vertex: s, fragment: p, varyings: h } = i2;
  if (!a2) return s.code.add("void forwardViewPosDepth(vec3 pos) {}"), void p.code.add(`${d ? "bool" : "void"} discardByTerrainDepth() { ${n(d, "return false;")}}`);
  h.add("viewPosDepth", "float", { invariant: true }), s.code.add("void forwardViewPosDepth(vec3 pos) {\n    viewPosDepth = pos.z;\n  }"), p.include(a), p.uniforms.add(new e("terrainDepthTexture", (e2) => e2.terrainDepth?.attachment)).code.add(t`
    ${d ? "bool" : "void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${d ? "return viewPosDepth < linearDepth && depth < 1.0;" : `if(viewPosDepth ${n2 ? ">" : "<="} linearDepth) discard;`}
    }`);
}

export {
  i
};
//# sourceMappingURL=chunk-MQC66RI6.js.map
