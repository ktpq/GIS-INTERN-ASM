import {
  o,
  t,
  u
} from "./chunk-YDGQ5FMO.js";
import {
  C,
  E,
  M
} from "./chunk-Z23LLMA3.js";
import {
  F
} from "./chunk-NR66QFNF.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/chunks/generalizeOperator.js
function u2(e, o2, s = {}) {
  const { removeDegenerateParts: u3 = false, unit: i2 } = s, m2 = C(e);
  return i2 && (o2 = F(o2, i2, m2)), E(t(M(e), o2, u3), m2);
}
function i(t2, s, u3 = {}) {
  const { removeDegenerateParts: i2 = false, unit: m2 } = u3, c2 = t2.map(M), f = C(t2);
  return m2 && (s = F(s, m2, f)), o(c2, s, i2).map((e) => E(e, f)).filter(N);
}
var m = u();
var c = Object.freeze(Object.defineProperty({ __proto__: null, execute: u2, executeMany: i, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  i,
  m,
  c
};
//# sourceMappingURL=chunk-U5DVENQS.js.map
