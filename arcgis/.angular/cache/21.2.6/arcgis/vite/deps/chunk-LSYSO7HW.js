import {
  o,
  s,
  t,
  u
} from "./chunk-XLMMYZM6.js";
import {
  C,
  E,
  M,
  w
} from "./chunk-2HAOG6WI.js";

// node_modules/@arcgis/core/chunks/simplifyOperator.js
function u2(r) {
  const t2 = C(r);
  return E(t(M(r), w(t2), false), t2);
}
function i(e) {
  const t2 = e.map(M), o2 = C(e);
  return u(t2, w(o2), false).map((e2) => E(e2, o2));
}
function c(e) {
  return o(M(e), w(C(e)), false);
}
var m = s();
var f = Object.freeze(Object.defineProperty({ __proto__: null, execute: u2, executeMany: i, isSimple: c, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  c,
  f
};
//# sourceMappingURL=chunk-LSYSO7HW.js.map
