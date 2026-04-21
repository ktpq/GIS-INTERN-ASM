import {
  _
} from "./chunk-SGNC5H35.js";
import {
  r
} from "./chunk-253Z6EVN.js";
import {
  y2 as y
} from "./chunk-XCN5EJK7.js";

// node_modules/@arcgis/core/geometry/support/ShortArray.js
function t(n3) {
  return n3 <= y ? new Array(n3) : new Int16Array(n3);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js
function s(t2, r2, o, n3, a, e = 2) {
  const s2 = 1 / (Math.abs(o) + Math.abs(n3) + Math.abs(a)), c2 = o * s2, i = n3 * s2, f2 = a <= 0 ? (c2 >= 0 ? 1 : -1) * (1 - Math.abs(i)) : c2, h = a <= 0 ? (i >= 0 ? 1 : -1) * (1 - Math.abs(c2)) : i, u2 = r2 * e;
  t2[u2] = m(f2), t2[u2 + 1] = m(h);
}
function c(t2) {
  const r2 = t2.length / 3, o = t(2 * r2);
  let n3 = 0;
  for (let a = 0; a < r2; ++a) s(o, a, t2[n3++], t2[n3++], t2[n3++]);
  return o;
}
function f(t2, o, n3, a = 2) {
  const e = n3 * a, s2 = u(o[e]), c2 = u(o[e + 1]), i = 1 - Math.abs(s2) - Math.abs(c2);
  return t2[2] = i, i < 0 ? (t2[0] = (s2 >= 0 ? 1 : -1) * (1 - Math.abs(c2)), t2[1] = (c2 >= 0 ? 1 : -1) * (1 - Math.abs(s2))) : (t2[0] = s2, t2[1] = c2), _(t2, t2);
}
function m(r2) {
  return r(Math.round(32767 * r2), -32767, 32767);
}
function u(r2) {
  return r(r2 / 32767, -1, 1);
}

export {
  t,
  s,
  c,
  f
};
//# sourceMappingURL=chunk-DZB4TMG3.js.map
