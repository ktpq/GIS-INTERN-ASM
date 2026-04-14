import {
  G2 as G,
  Me,
  N,
  V,
  x
} from "./chunk-JC2AZ2NN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/quantity.js
function l(n, t) {
  return { type: x(t), value: n, unit: t };
}
function c(n) {
  return { value: n };
}
function f(n, t) {
  return { type: x(t), value: n, unit: t };
}
function s(n, t) {
  return { type: x(t), value: n, unit: t };
}
function p(n, t, e = "arithmetic") {
  return { type: x(t), value: n, unit: t, rotationType: e };
}
function g(n, u) {
  const t = m(n, u);
  return "angle" === n.type ? p(t, u, n.rotationType) : l(t, u);
}
function m(u, t) {
  return N(u.value, u.unit, t);
}
function d(u, t) {
  return null == u ? t : null == t || u.value > N(t.value, t.unit, u.unit) ? u : t;
}
function j2(n, u) {
  return null == n ? null : __spreadProps(__spreadValues({}, n), { value: n.value * u });
}
function q(n, u, t) {
  if (u === t) return n;
  switch (t) {
    case "arithmetic":
    case "geographic":
      return 90 - n;
  }
}
function w(n, u) {
  return g(n, V(n.value, n.unit, u));
}
function x2(n, u) {
  return g(n, B(n, u));
}
function B(n, u) {
  const e = Me(u);
  return G(n.value, n.unit, e);
}
function U(n, u) {
  return g(n, G(n.value, n.unit, u));
}
var k = f(0, "meters");
var z = s(0, "square-meters");
var A = p(0, "radians");
var C = p(0, "degrees");
var D = p(0, "degrees", "geographic");

export {
  c,
  f,
  s,
  p,
  g,
  m,
  d,
  j2 as j,
  q,
  w,
  x2 as x,
  U,
  k,
  z,
  C,
  D
};
//# sourceMappingURL=chunk-H7U52OP3.js.map
