import {
  q
} from "./chunk-PZZJHOHX.js";
import {
  c
} from "./chunk-BUAZREZX.js";
import {
  o
} from "./chunk-XWIC4KUB.js";
import {
  T
} from "./chunk-TIZ3VJFS.js";

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
//# sourceMappingURL=chunk-KNH23XRA.js.map
