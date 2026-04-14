import {
  b,
  h3 as h,
  l,
  p2 as p,
  q,
  s,
  u2 as u
} from "./chunk-LKZBFHT4.js";
import {
  c,
  e,
  i,
  o
} from "./chunk-URLT4X25.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/geometry/support/curves/closestPointOnCurve.js
function u2(u3, j, U) {
  if (e(j)) return s(u3, j, U);
  if (i(j)) {
    const t = b(u3, j, U)[0];
    if (null == t) throw new r("closestPointOnCurve:unexpected-error", "Failed to find close point on bezier curve");
    return t;
  }
  if (c(j)) {
    const r2 = l(u3, j);
    return u(r2, U);
  }
  if (o(j)) {
    const r2 = h(u3, j);
    return u(r2, U);
  }
  const v = p(u3, j);
  return q(v, U);
}

export {
  u2 as u
};
//# sourceMappingURL=chunk-IKCUBMQP.js.map
