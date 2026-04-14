import {
  C,
  M,
  w
} from "./chunk-BHZILIII.js";
import {
  Lm,
  kr
} from "./chunk-6YNOGQRZ.js";

// node_modules/@arcgis/core/chunks/equalsOperator.js
var a = class extends Lm {
  getOperatorType() {
    return 2;
  }
  execute(e, t, o, s) {
    return kr(e, t, o, 3, s);
  }
};
var n = new a();
function u(e) {
  const r = C(e);
  return n.accelerateGeometry(M(e), w(r), 1);
}
function c(e, r) {
  return n.execute(M(e), M(r), w(e.spatialReference), null);
}
var p = n.supportsCurves();
var l = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: u, execute: c, supportsCurves: p }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  c,
  p,
  l
};
//# sourceMappingURL=chunk-ERSXKPFP.js.map
