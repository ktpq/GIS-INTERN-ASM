import {
  t
} from "./chunk-5PPT2IRZ.js";
import {
  L
} from "./chunk-SLQLDNYL.js";
import {
  f
} from "./chunk-NNANCYKT.js";
import {
  b,
  p,
  u
} from "./chunk-SVWIACQP.js";

// node_modules/@arcgis/core/symbols/support/densifyForPreview.js
function n(t2, o, r, e) {
  const { height: n2, width: p2 } = e ?? m(t2), u2 = Math.min(p2 / o, n2 / r) * t();
  return L(t2, { maxDeviation: u2 });
}
function m(i) {
  const s = f(u(), i);
  return { width: p(s), height: b(s) };
}

export {
  n
};
//# sourceMappingURL=chunk-PMRV77BT.js.map
