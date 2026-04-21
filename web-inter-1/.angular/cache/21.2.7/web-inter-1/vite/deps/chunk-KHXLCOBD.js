import {
  q
} from "./chunk-EEIMB7C6.js";
import {
  c
} from "./chunk-WRWVENVU.js";
import {
  o
} from "./chunk-4YOIFLLS.js";
import {
  T
} from "./chunk-VHQJAPCR.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js
function n(n2, i) {
  const p = q(n2, c.absolute);
  if (!p) return null;
  let s = p.position;
  return T(n2.spatialReference, i) || (s = new Float64Array(p.position.length), o(p.position, n2.spatialReference, 0, s, i, 0)) ? s : null;
}

export {
  n
};
//# sourceMappingURL=chunk-KHXLCOBD.js.map
