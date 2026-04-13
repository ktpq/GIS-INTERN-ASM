import {
  $,
  B,
  D,
  F,
  M,
  N,
  d,
  h,
  j,
  p,
  w,
  x,
  y
} from "./chunk-VWW4CN57.js";
import {
  g
} from "./chunk-OU7IBCXM.js";
import {
  a
} from "./chunk-MXBCSABZ.js";

// node_modules/@arcgis/core/core/quantityFormatUtils.js
function L(r, e, a2, i = 2, n = "abbr") {
  return p(r, g(e, a2).value, a2, i, n);
}
function M2(r, e, i, n = 2, u = "abbr") {
  return D(r, g(e, i).value, i, n, u);
}
function w2(r, t, e = 2, a2 = "abbr") {
  return x(r, t.value, t.unit, e, a2);
}
function I(r, t, e = 2, a2 = "abbr") {
  return F(r, t.value, t.unit, e, a2);
}
function V(r, t, e = 2, a2 = "abbr") {
  return y(r, t.value, t.unit, e, a2);
}
function y2(r, t, e = 2, a2 = "abbr") {
  return d(r, t.value, t.unit, e, a2);
}
function R(r, t, e = 2, a2 = "abbr") {
  return B(r, t.value, t.unit, e, a2);
}
function D2(r, t, e = 2, a2 = "abbr") {
  return h(r, t.value, t.unit, e, a2);
}
function A(r, t, e = 2, a2 = "abbr") {
  return M(r, t.value, t.unit, e, a2);
}
function T(r, t, e = 2, a2 = "abbr") {
  return $(r, t.value, t.unit, e, a2);
}
function k(r, t, e = 2, a2 = "abbr") {
  return j(r, t.value, t.unit, e, a2);
}
function q(r, t, e = 2, a2 = "abbr") {
  return w(r, t.value, t.unit, e, a2);
}
function F2(t, a2, i, n = a, u = true) {
  return N(t.value, t.unit, t.rotationType, a2, i, n, u);
}
function U2(r, t, e, a2, i = "abbr") {
  switch (a2 = a2 ?? 2, e) {
    case "imperial":
      return D2(r, t, a2, i);
    case "metric":
      return w2(r, t, a2, i);
    default:
      return L(r, t, e, a2, i);
  }
}
function z(r, t, e, a2 = 2, i = "abbr") {
  switch (e) {
    case "imperial":
      return A(r, t, a2, i);
    case "metric":
      return I(r, t, a2, i);
    default:
      return M2(r, t, e, a2, i);
  }
}
function B2(r, t, e, a2 = 2, i = "abbr") {
  switch (e) {
    case "imperial":
      return T(r, t, a2, i);
    case "metric":
      return V(r, t, a2, i);
    default:
      return L(r, t, e, a2, i);
  }
}
function E(r, t, e, a2 = 2, i = "abbr") {
  switch (e) {
    case "imperial":
      return k(r, t, a2, i);
    case "metric":
      return y2(r, t, a2, i);
    default:
      return M2(r, t, e, a2, i);
  }
}
function G(r, t, e, a2 = 2, i = "abbr") {
  switch (e) {
    case "imperial":
      return q(r, t, a2, i);
    case "metric":
      return R(r, t, a2, i);
    default:
      return L(r, t, e, a2, i);
  }
}

export {
  F2 as F,
  U2 as U,
  z,
  B2 as B,
  E,
  G
};
//# sourceMappingURL=chunk-46RYNYCK.js.map
