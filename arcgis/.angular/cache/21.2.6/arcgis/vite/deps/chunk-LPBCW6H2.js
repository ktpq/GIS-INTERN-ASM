import {
  v
} from "./chunk-J6S2XDA4.js";
import {
  s
} from "./chunk-M5IWHRCT.js";
import {
  P,
  a,
  e
} from "./chunk-YM62CGUL.js";
import {
  n,
  t
} from "./chunk-MLBRAI7B.js";

// node_modules/@arcgis/core/geometry/support/triangle.js
function j(t2) {
  return t2 ? { p0: t(t2.p0), p1: t(t2.p1), p2: t(t2.p2) } : { p0: n(), p1: n(), p2: n() };
}
function S(t2, e2, r) {
  const n2 = e2[0] - t2[0], o2 = e2[1] - t2[1], c3 = r[0] - t2[0], p = r[1] - t2[1];
  return 0.5 * Math.abs(n2 * p - o2 * c3);
}
function d(t2, o2, c3) {
  return e(M, o2, t2), e(y, c3, t2), 0.5 * a(P(M, M, y));
}
var k = new s(v);
var w = new s(() => j());
var M = n();
var y = n();

export {
  S,
  d
};
//# sourceMappingURL=chunk-LPBCW6H2.js.map
