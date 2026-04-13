import {
  i,
  s
} from "./chunk-B7QM3DGS.js";
import {
  d
} from "./chunk-FHQ7QQBR.js";
import {
  e
} from "./chunk-IP46ETCC.js";
import {
  t
} from "./chunk-QLAEYQER.js";
import {
  n
} from "./chunk-IXOUFXRS.js";
import {
  o
} from "./chunk-XA4KTSOB.js";
import {
  u
} from "./chunk-QWNB5I7T.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js
var a = class {
  constructor(r) {
    this.screenLength = u(r.screenLength), this.minWorldLength = r.minWorldLength ?? 0, this.maxWorldLength = r.maxWorldLength ?? 1 / 0;
  }
};
function n2(e2, r) {
  const t2 = e2.vertex;
  r.hasVerticalOffset ? (d2(t2), r.hasScreenSizePerspective && (e2.include(s), i(t2), d(e2.vertex, r)), t2.code.add(t`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical ? t`vec3 worldNormal = normalize(worldPos + localOrigin);` : t`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective ? t`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : t`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : t2.code.add(t`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
var f = n();
function d2(e2) {
  e2.uniforms.add(new e("verticalOffset", (e3, t2) => {
    const { minWorldLength: l, maxWorldLength: o2, screenLength: c } = e3.verticalOffset, i2 = Math.tan(0.5 * t2.camera.fovY) / (0.5 * t2.camera.fullViewport[3]), s2 = t2.camera.pixelRatio || 1;
    return o(f, c * s2, i2, l, o2);
  }));
}

export {
  a,
  n2 as n,
  d2 as d
};
//# sourceMappingURL=chunk-JO3FSXX4.js.map
