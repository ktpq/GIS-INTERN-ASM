import {
  e
} from "./chunk-UM6VM6JA.js";
import {
  p2 as p,
  x
} from "./chunk-XJEMOC6M.js";
import {
  r
} from "./chunk-253Z6EVN.js";
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
//# sourceMappingURL=chunk-GGZGOVV4.js.map
