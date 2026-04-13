import {
  o
} from "./chunk-XF32GIOT.js";
import {
  c
} from "./chunk-OW6NGBR6.js";
import {
  o as o2
} from "./chunk-I6GYMHIK.js";
import {
  s
} from "./chunk-DGIEJ3OR.js";
import {
  r
} from "./chunk-7EJ3JKOB.js";
import {
  e
} from "./chunk-ALI26FYX.js";
import {
  t
} from "./chunk-QLAEYQER.js";

// node_modules/@arcgis/core/chunks/OverlayCompositing.glsl.js
var n = class extends c {
  constructor() {
    super(...arguments), this.overlayIndex = 0, this.opacity = 1;
  }
};
function d() {
  const t2 = new s();
  return t2.include(o2), t2.fragment.uniforms.add(new e("tex", (e2) => e2.texture)), t2.fragment.uniforms.add(new o("overlayIdx", (e2) => e2.overlayIndex)), t2.fragment.uniforms.add(new r("opacity", (e2) => e2.opacity)), t2.fragment.main.add(t`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`), t2;
}
var l = Object.freeze(Object.defineProperty({ __proto__: null, OverlayCompositingPassParameters: n, build: d }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  d,
  l
};
//# sourceMappingURL=chunk-R24HNODV.js.map
