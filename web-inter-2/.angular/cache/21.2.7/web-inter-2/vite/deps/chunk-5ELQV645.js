import {
  C,
  E,
  M,
  V,
  w
} from "./chunk-U4T2ASIN.js";
import {
  I
} from "./chunk-6YNOGQRZ.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorClip.js
var e = new I();
function t2(r, n, t3) {
  return e.execute(r, n, t3, null);
}
function o(n, t3, o2) {
  const u3 = e.executeMany(new t(n), t3, o2, null);
  return Array.from(u3);
}
function u() {
  return e.supportsCurves();
}

// node_modules/@arcgis/core/chunks/clipOperator.js
function u2(o2, r) {
  const u3 = C(o2), c2 = V(r).asEnvelope2D();
  return E(t2(M(o2), c2, w(u3)), u3);
}
function c(e2, r) {
  const u3 = e2.map(M), c2 = C(e2), m2 = V(r).asEnvelope2D();
  return o(u3, m2, w(c2)).map((e3) => E(e3, c2));
}
var m = u();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: u2, executeMany: c, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  c,
  m,
  i
};
//# sourceMappingURL=chunk-5ELQV645.js.map
