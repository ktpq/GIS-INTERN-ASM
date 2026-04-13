import {
  L
} from "./chunk-GJJLUE6L.js";
import {
  t
} from "./chunk-AV7PXSEU.js";
import {
  f
} from "./chunk-DHIQ5CF2.js";
import {
  b,
  p,
  u
} from "./chunk-SLHRVNEB.js";

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
//# sourceMappingURL=chunk-5XSOLVCE.js.map
