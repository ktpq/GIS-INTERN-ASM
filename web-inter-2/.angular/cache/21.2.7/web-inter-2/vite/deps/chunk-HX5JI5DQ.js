import {
  C,
  E,
  M
} from "./chunk-BHZILIII.js";
import {
  o
} from "./chunk-6YNOGQRZ.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  F
} from "./chunk-JC2AZ2NN.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorDensify.js
var e = new o();
function t2(r, n, t3, o3) {
  return e.execute(r, n, t3, o3, null);
}
function o2(n, t3, o3, u3) {
  const s2 = e.executeMany(new t(n), t3, o3, u3, null);
  return Array.from(s2);
}
function u() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/chunks/densifyOperator.js
function p(e2, s2, a = {}) {
  let { maxAngleInDegrees: p2 = 0, maxDeviation: u3 = 0, unit: c2 } = a;
  const l2 = C(e2);
  return c2 && (s2 = F(s2, c2, l2), u3 && (u3 = F(u3, c2, l2))), E(t2(M(e2), s2, u3, s(p2)), l2);
}
function u2(o3, a, p2 = {}) {
  let { maxAngleInDegrees: u3 = 0, maxDeviation: c2 = 0, unit: l2 } = p2;
  const f = o3.map(M), x = C(o3);
  return l2 && (a = F(a, l2, x), c2 && (c2 = F(c2, l2, x))), o2(f, a, c2, s(u3)).map((e2) => E(e2, x)).filter(N);
}
var c = u();
var l = Object.freeze(Object.defineProperty({ __proto__: null, execute: p, executeMany: u2, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  p,
  u2 as u,
  c,
  l
};
//# sourceMappingURL=chunk-HX5JI5DQ.js.map
