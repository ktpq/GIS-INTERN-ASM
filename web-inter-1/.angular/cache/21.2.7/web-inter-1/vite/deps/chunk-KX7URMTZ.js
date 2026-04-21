import {
  t
} from "./chunk-GR7CT3SX.js";
import {
  L
} from "./chunk-MVJHQN6D.js";
import {
  f
} from "./chunk-GTWJPBIK.js";
import {
  b,
  p,
  u
} from "./chunk-P7NLTDL7.js";

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
//# sourceMappingURL=chunk-KX7URMTZ.js.map
