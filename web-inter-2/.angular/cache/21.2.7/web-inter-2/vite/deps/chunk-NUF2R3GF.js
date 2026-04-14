import {
  f,
  l,
  p
} from "./chunk-CPFTZQN3.js";
import {
  C,
  M,
  X,
  w
} from "./chunk-BHZILIII.js";
import {
  F
} from "./chunk-JC2AZ2NN.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/chunks/bufferOperator.js
function i(e, o, s = {}) {
  const { unit: i2 } = s, m2 = C(e);
  return i2 && (o = F(o, i2, m2)), X(f(M(e), w(m2), o), m2);
}
function m(t, s, i2 = {}) {
  let { maxDeviation: m2 = NaN, maxVerticesInFullCircle: c2 = 96, union: f3 = false, unit: l2 } = i2;
  const x = C(t);
  l2 && (s = s.map((e) => F(e, l2, x)), m2 && (m2 = F(m2, l2, x)));
  const j = t.map(M);
  return l(j, w(x), s, m2, c2, f3).map((e) => X(e, x)).filter(N);
}
var c = p();
var f2 = Object.freeze(Object.defineProperty({ __proto__: null, execute: i, executeMany: m, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  i,
  m,
  c,
  f2 as f
};
//# sourceMappingURL=chunk-NUF2R3GF.js.map
