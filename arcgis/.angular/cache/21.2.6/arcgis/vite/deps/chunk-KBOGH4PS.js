import {
  C,
  M
} from "./chunk-2HAOG6WI.js";
import {
  O2 as O
} from "./chunk-66OU277M.js";

// node_modules/@arcgis/core/chunks/lengthOperator.js
function r(r2, s2 = {}) {
  const { unit: n2 } = s2;
  let u = M(r2).calculateLength2D();
  if (u && n2) {
    const t = C(r2);
    u = O(u, t, n2);
  }
  return u;
}
var s = true;
var n = Object.freeze(Object.defineProperty({ __proto__: null, execute: r, supportsCurves: s }, Symbol.toStringTag, { value: "Module" }));

export {
  r,
  s,
  n
};
//# sourceMappingURL=chunk-KBOGH4PS.js.map
