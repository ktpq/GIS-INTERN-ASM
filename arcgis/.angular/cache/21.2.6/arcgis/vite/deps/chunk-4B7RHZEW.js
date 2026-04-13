import {
  C,
  M,
  w
} from "./chunk-2HAOG6WI.js";
import {
  jm
} from "./chunk-XQTWTSU3.js";

// node_modules/@arcgis/core/chunks/containsOperator.js
var s = new jm();
function a(e) {
  const a2 = C(e);
  return s.accelerateGeometry(M(e), w(a2), 1);
}
function n(e, r) {
  return s.execute(M(e), M(r), w(e.spatialReference), null);
}
var c = s.supportsCurves();
var p = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a, execute: n, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  n,
  c,
  p
};
//# sourceMappingURL=chunk-4B7RHZEW.js.map
