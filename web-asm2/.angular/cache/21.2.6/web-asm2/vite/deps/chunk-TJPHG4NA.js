import {
  O,
  d,
  p
} from "./chunk-Y4BJ3ED7.js";
import {
  R
} from "./chunk-ZEZJAXNN.js";
import {
  f
} from "./chunk-QWYKLNNR.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/executeForCount.js
function m(m3, p2, i2, s2) {
  return O(f(m3), R.from(p2), i2, s2);
}

// node_modules/@arcgis/core/rest/query/executeForExtent.js
async function m2(m3, e, i2) {
  const s2 = f(m3), u = await d(s2, R.from(e), __spreadValues({}, i2)), a = u.extent;
  return !a || isNaN(a.xmin) || isNaN(a.ymin) || isNaN(a.xmax) || isNaN(a.ymax) ? { count: u.count, extent: null } : { count: u.count, extent: z.fromJSON(a) };
}

// node_modules/@arcgis/core/rest/query/executeForIds.js
async function i(i2, n2, u, e) {
  const f2 = f(i2), m3 = await p(f2, R.from(n2), u, e);
  return m3.objectIds ?? s(m3.uniqueIds) ?? [];
}
function n(r) {
  return !Array.isArray(r[0]);
}
function s(r) {
  if (r) return n(r) ? r : r.map((r2) => JSON.stringify(r2));
}

export {
  m,
  m2,
  i
};
//# sourceMappingURL=chunk-TJPHG4NA.js.map
