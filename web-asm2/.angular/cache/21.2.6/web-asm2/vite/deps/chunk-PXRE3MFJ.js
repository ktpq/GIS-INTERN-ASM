import {
  c
} from "./chunk-OW6NGBR6.js";
import {
  e
} from "./chunk-AJT4UREC.js";
import {
  o
} from "./chunk-I6GYMHIK.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  e as e2
} from "./chunk-ALI26FYX.js";
import {
  t
} from "./chunk-QLAEYQER.js";
import {
  r
} from "./chunk-MLBRAI7B.js";

// node_modules/@arcgis/core/chunks/Texture.glsl.js
var a = class extends c {
  constructor() {
    super(...arguments), this.color = r(1, 1, 1);
  }
};
function n() {
  const e3 = new s();
  return e3.include(o), e3.fragment.uniforms.add(new e2("tex", (e4) => e4.texture), new e("uColor", (e4) => e4.color)).main.add(t`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`), e3;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, TexturePassParameters: a, build: n }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  n,
  m
};
//# sourceMappingURL=chunk-PXRE3MFJ.js.map
