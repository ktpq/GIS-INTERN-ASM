import {
  o,
  re
} from "./chunk-JC2AZ2NN.js";
import {
  m
} from "./chunk-253Z6EVN.js";

// node_modules/@arcgis/core/geometry/support/scaleUtils.js
var e = 96;
function i(n, i2) {
  const u2 = i2 || n.extent, o2 = n.width, c = re(u2?.spatialReference);
  return u2 && o2 ? u2.width / o2 * c * o * e : 0;
}
function u(n, i2) {
  return n / (re(i2) * o * e);
}
function d(n, t, r) {
  return I(n, t) && a(n, r);
}
function I(t, r) {
  return 0 === r || m(t, r) || t < r;
}
function a(t, r) {
  return 0 === r || m(t, r) || t > r;
}
function p(t, r) {
  if (m(t, r)) return 0;
  return (t || Number.POSITIVE_INFINITY) > (r || Number.POSITIVE_INFINITY) ? 1 : -1;
}

export {
  i,
  u,
  d,
  p
};
//# sourceMappingURL=chunk-QWJMYWGU.js.map
