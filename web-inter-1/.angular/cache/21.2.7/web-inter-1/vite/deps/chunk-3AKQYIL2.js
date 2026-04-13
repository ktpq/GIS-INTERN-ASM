import {
  s
} from "./chunk-AGQQQ6D2.js";
import {
  c
} from "./chunk-ZO27FAQA.js";
import {
  A,
  P,
  _,
  e as e2,
  o
} from "./chunk-SGNC5H35.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  n,
  t
} from "./chunk-KEY3YQEB.js";

// node_modules/@arcgis/core/geometry/support/ray.js
function b(i) {
  return i ? x2(t(i.origin), t(i.direction)) : x2(n(), n());
}
function x2(i, r2) {
  return { origin: i, direction: r2 };
}
function v(i, r2) {
  const t2 = O.get();
  return t2.origin = i, t2.direction = r2, t2;
}
function k(i, r2 = b()) {
  return S(i.origin, i.direction, r2);
}
function y(i, r2, t2 = b()) {
  return o(t2.origin, i), e2(t2.direction, r2, i), t2;
}
function S(i, r2, t2 = b()) {
  return o(t2.origin, i), o(t2.direction, r2), t2;
}
function q(i, r2) {
  const t2 = P(c.get(), _(c.get(), i.direction), e2(c.get(), r2, i.origin));
  return A(t2, t2);
}
var O = new s(() => b());
var U = n();
var z = n();
var A2 = n();
var B = e();

export {
  b,
  v,
  k,
  y,
  S,
  q
};
//# sourceMappingURL=chunk-3AKQYIL2.js.map
