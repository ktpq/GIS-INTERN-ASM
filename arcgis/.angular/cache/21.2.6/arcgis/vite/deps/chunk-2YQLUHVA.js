import {
  w as w3
} from "./chunk-I7J4ZS2Y.js";
import {
  h,
  w
} from "./chunk-ZCK3VSUL.js";
import {
  C,
  E,
  M,
  w as w2
} from "./chunk-2HAOG6WI.js";
import {
  Qe,
  Ye
} from "./chunk-ZQAMXZ7F.js";

// node_modules/@arcgis/core/arcade/geometry/offset.js
var p = { round: 0, bevel: 1, miter: 2, square: 3 };
function u(t, m, f, p2, u2, a2) {
  m = h(w(f), t.spatialReference, m);
  const l = M(t), y = C(t), v = c(l, w2(y), m, p2, u2, a2);
  return E(v, y);
}
function a(t, o, n, s, i, p2) {
  o = h(w(n), t.spatialReference, o);
  const u2 = Ye(t), a2 = u2.getGeometry(), l = u2.getSpatialReference(), y = c(a2, l, o, s, i, p2);
  return Qe(y, l);
}
function c(e, r, o, n, s, i) {
  const m = w3(e, r, o, p[n], s, i);
  if (!m.isEmpty()) return m;
  {
    const m2 = e.clone();
    m2.reverseAllPaths();
    const f2 = w3(m2, r, -o, p[n], s, i);
    if (!f2.isEmpty()) return f2.reverseAllPaths(), f2;
  }
  const f = Math.abs(o) / 10, u2 = f / 10;
  let a2 = i;
  if ("round" === n && (a2 += u2), "bevel" === n || "square" === n) {
    const m2 = w3(e, r, o, p[n = "miter"], s, i);
    if (!m2.isEmpty()) return m2;
  }
  if ("miter" === n) {
    const m2 = w3(e, r, o, p[n = "round"], s, i);
    if (!m2.isEmpty()) return m2;
  }
  if ("round" === n) for (; a2 <= f; a2 += u2) {
    const i2 = w3(e, r, o, p[n], s, a2);
    if (!i2.isEmpty()) return i2;
  }
  return null;
}

export {
  u,
  a
};
//# sourceMappingURL=chunk-2YQLUHVA.js.map
