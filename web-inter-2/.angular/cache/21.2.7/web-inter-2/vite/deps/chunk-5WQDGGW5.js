import {
  t
} from "./chunk-S6SCJS2P.js";
import {
  C,
  M,
  w
} from "./chunk-BHZILIII.js";

// node_modules/@arcgis/core/chunks/intersectsOperator.js
var s = new t();
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
//# sourceMappingURL=chunk-5WQDGGW5.js.map
