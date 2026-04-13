import {
  g
} from "./chunk-KMP54B7A.js";
import {
  l
} from "./chunk-WWA54NGL.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  f
} from "./chunk-NTFCNJJY.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/executeQueryJSON.js
async function s(r, o, e, s2) {
  const p = await n(r, o, e, s2);
  return g.fromJSON(p);
}
function n(t, s2, n2, p) {
  const u = f(t), i = __spreadValues({}, n2), m = R.from(s2);
  return l(u, m, m.sourceSpatialReference, i, p);
}

export {
  s,
  n
};
//# sourceMappingURL=chunk-6TQ3G4R6.js.map
