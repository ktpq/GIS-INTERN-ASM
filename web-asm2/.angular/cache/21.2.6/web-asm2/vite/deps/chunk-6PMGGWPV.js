import {
  f2 as f,
  w
} from "./chunk-PBNUMATE.js";
import {
  B
} from "./chunk-4F4IE6P5.js";
import {
  e,
  n
} from "./chunk-EF6HOWDG.js";
import {
  c
} from "./chunk-QK7JX7UE.js";

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/curveOperationUtils.js
function m(r, t, o, m2, p, u, l, a) {
  const f2 = t ?? o.leftVertex.pos, n2 = c(r) ? f(f2, r) : r, [g, j, v, x, y, h, U] = n2.a, b = y ?? 0, A = h ?? Math.hypot(g[0] - j[0], g[1] - j[1]), M = U ?? 1, V = c2(m2[0], m2[1], p[0], p[1], u[0], u[1], l, a);
  return w(f2, { a: [g, j, v, x, b, A, M] }, V);
}
function c2(e2, s, i, m2, c3, p, u, l) {
  const a = n(1, 0, 0, 0, 1, 0, -e2, -s, 1), f2 = u - 1, n2 = n(i * i * f2 + 1, m2 * i * f2, 0, i * m2 * f2, m2 * m2 * f2 + 1, 0, 0, 0, 1), g = l - 1, j = n(c3 * c3 * g + 1, p * c3 * g, 0, c3 * p * g, p * p * g + 1, 0, 0, 0, 1), v = n(1, 0, 0, 0, 1, 0, e2, s, 1), x = e();
  return B(x, n2, a), B(x, j, x), B(x, v, x), x;
}

export {
  m,
  c2 as c
};
//# sourceMappingURL=chunk-6PMGGWPV.js.map
