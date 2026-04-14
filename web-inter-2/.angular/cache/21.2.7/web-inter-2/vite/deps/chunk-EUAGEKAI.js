import {
  q
} from "./chunk-MKBJIUUZ.js";
import {
  c
} from "./chunk-BZX2IS72.js";
import {
  o
} from "./chunk-OCN6JBSQ.js";
import {
  T
} from "./chunk-ZTEDLWCB.js";

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
//# sourceMappingURL=chunk-EUAGEKAI.js.map
