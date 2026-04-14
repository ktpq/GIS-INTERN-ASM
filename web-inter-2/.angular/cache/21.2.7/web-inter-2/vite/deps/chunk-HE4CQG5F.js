import {
  l
} from "./chunk-CW3E2W4A.js";
import {
  R
} from "./chunk-HBTHIU55.js";
import {
  f
} from "./chunk-KGOQYI3F.js";
import {
  g
} from "./chunk-CLQKOCYA.js";
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
//# sourceMappingURL=chunk-HE4CQG5F.js.map
