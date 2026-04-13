import {
  q
} from "./chunk-UH6VD2JG.js";
import {
  c
} from "./chunk-M3LOK5P4.js";
import {
  o
} from "./chunk-XASC6DGR.js";
import {
  T
} from "./chunk-4X5LQ2UO.js";

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
//# sourceMappingURL=chunk-ROVEMAZC.js.map
