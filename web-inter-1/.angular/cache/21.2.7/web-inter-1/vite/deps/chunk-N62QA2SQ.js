import {
  C,
  M,
  w
} from "./chunk-H2NJYVO6.js";
import {
  Wm,
  ir,
  sr,
  zm
} from "./chunk-TTDA3WA3.js";

// node_modules/@arcgis/core/chunks/relateOperator.js
var u = class {
  supportsCurves() {
    return true;
  }
  getOperatorType() {
    return 1;
  }
  execute(r, t, a, s, o) {
    return sr(r, t, a, s, o);
  }
  isValidDE9IM(e) {
    return 0 === ir(e);
  }
  accelerateGeometry(e, r, a) {
    return zm(e, r, a);
  }
  canAccelerateGeometry(e) {
    return Wm(e);
  }
};
var c = new u();
function p(e) {
  const r = C(e);
  return c.accelerateGeometry(M(e), w(r), 1);
}
function i(e, r, t) {
  return c.execute(M(e), M(r), w(e.spatialReference), t, null);
}
function l(e) {
  return c.isValidDE9IM(e);
}
var m = c.supportsCurves();
var f = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: p, execute: i, isValidDE9IM: l, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  p,
  i,
  l,
  m,
  f
};
//# sourceMappingURL=chunk-N62QA2SQ.js.map
