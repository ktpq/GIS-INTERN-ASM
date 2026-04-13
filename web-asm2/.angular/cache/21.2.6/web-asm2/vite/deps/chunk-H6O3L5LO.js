import {
  g
} from "./chunk-Q5KXJ6ZA.js";
import {
  l
} from "./chunk-Y4BJ3ED7.js";
import {
  R
} from "./chunk-ZEZJAXNN.js";
import {
  f
} from "./chunk-QWYKLNNR.js";
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
//# sourceMappingURL=chunk-H6O3L5LO.js.map
