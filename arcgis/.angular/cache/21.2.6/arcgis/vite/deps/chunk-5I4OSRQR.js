import {
  l
} from "./chunk-RTRCL4OY.js";
import {
  R
} from "./chunk-5XBFAIUN.js";
import {
  g
} from "./chunk-H3GWORLU.js";
import {
  f
} from "./chunk-TUNGPGHU.js";
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
//# sourceMappingURL=chunk-5I4OSRQR.js.map
