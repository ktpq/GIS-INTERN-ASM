import {
  L
} from "./chunk-WECCAEIW.js";
import {
  t
} from "./chunk-IR2HLRVY.js";
import {
  f
} from "./chunk-N7K4YSHO.js";
import {
  b,
  p,
  u
} from "./chunk-FVU6XCMJ.js";

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
//# sourceMappingURL=chunk-QRDGMF3J.js.map
