import {
  C,
  M
} from "./chunk-2HAOG6WI.js";
import {
  N,
  de,
  re
} from "./chunk-66OU277M.js";

// node_modules/@arcgis/core/chunks/areaOperator.js
function n(n2, s2 = {}) {
  const { unit: u2 } = s2;
  let i = M(n2).calculateArea2D();
  if (i && u2) {
    const o = C(n2);
    if (o.isGeographic) throw new Error("Unable to convert from an angular area unit to a linear area unit.");
    const s3 = de(o);
    s3 !== u2 && (s3 ? i = N(i, s3, u2) : (i = Math.sqrt(i), i *= re(o), i **= 2, i = N(i, "square-meters", u2)));
  }
  return i;
}
var s = true;
var u = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, supportsCurves: s }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  s,
  u
};
//# sourceMappingURL=chunk-D75VTCRQ.js.map
