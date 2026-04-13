import {
  e
} from "./chunk-XSQPGBLC.js";
import {
  m,
  y2 as y
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/geometry/support/DoubleArray.js
function e2(r) {
  return r <= y ? new Array(r).fill(0) : new Float64Array(r);
}
function o(n) {
  return (m(n) ? n.byteLength / 8 : n.length) <= y ? Array.from(n) : new Float64Array(n);
}
function i(r, t, n) {
  return Array.isArray(r) ? r.slice(t, t + n) : r.subarray(t, t + n);
}
function f(r) {
  return [...r];
}
function u(r) {
  const t = e();
  for (let n = 0; n < 16; ++n) t[n] = r[n];
  return t;
}

export {
  e2 as e,
  o,
  i,
  f,
  u
};
//# sourceMappingURL=chunk-DH7E4OJC.js.map
