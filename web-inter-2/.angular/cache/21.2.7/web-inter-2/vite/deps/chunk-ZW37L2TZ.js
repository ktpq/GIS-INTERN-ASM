import {
  C,
  E,
  M,
  w
} from "./chunk-U4T2ASIN.js";
import {
  Km
} from "./chunk-6YNOGQRZ.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorDifference.js
var r = new Km();
function t2(n2, e, t3) {
  return r.execute(n2, e, t3, null);
}
function o(e, t3, o2) {
  const s2 = r.executeMany(new t(e), new t([t3]), o2, null);
  return Array.from(s2);
}
function s() {
  return r.supportsCurves();
}

// node_modules/@arcgis/core/chunks/differenceOperator.js
function n(r2, t3) {
  const n2 = C(r2);
  return E(t2(M(r2), M(t3), w(n2)), n2);
}
function u(e, t3) {
  const n2 = e.map(M), u2 = C(e);
  return o(n2, M(t3), w(u2)).map((e2) => E(e2, u2));
}
var c = s();
var m = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, executeMany: u, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  u,
  c,
  m
};
//# sourceMappingURL=chunk-ZW37L2TZ.js.map
