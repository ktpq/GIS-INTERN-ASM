import {
  e
} from "./chunk-TWPRJEIK.js";
import {
  p,
  x
} from "./chunk-VMH5X3M4.js";
import {
  r
} from "./chunk-ZILR7JK7.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/support/Heading.js
function i(_a, s) {
  var _b = _a, { level: r2, class: i2 } = _b, l2 = __objRest(_b, ["level", "class"]);
  const a = n(r2);
  return x(`h${a}`, __spreadProps(__spreadValues({}, l2), { "aria-level": String(a), class: p(e.heading, i2), role: "heading" }), s);
}
function n(t) {
  return r(Math.ceil(t), 1, 6);
}
function l(r2, t = 1) {
  return n(r2 + t);
}

export {
  i,
  l
};
//# sourceMappingURL=chunk-BVO7EO23.js.map
