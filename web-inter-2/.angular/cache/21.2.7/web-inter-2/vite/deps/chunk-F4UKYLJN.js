import {
  o,
  s,
  t,
  u
} from "./chunk-VOSUM7PR.js";
import {
  C,
  E,
  M,
  w
} from "./chunk-BHZILIII.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/chunks/intersectionOperator.js
function u2(e) {
  const t2 = C(e);
  return t(M(e), w(t2));
}
function i(e, r) {
  const o2 = C(e);
  return E(o(M(e), M(r), w(o2)), o2);
}
function m(r, t2) {
  const s2 = r.map(M), u3 = C(r);
  return u(s2, M(t2), w(u3), 7).map((e) => E(e, u3)).filter(N);
}
var f = s();
var l = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: u2, execute: i, executeMany: m, supportsCurves: f }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  i,
  m,
  f,
  l
};
//# sourceMappingURL=chunk-F4UKYLJN.js.map
