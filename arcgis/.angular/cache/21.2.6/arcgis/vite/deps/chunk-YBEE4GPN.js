import {
  html,
  unsafeStatic
} from "./chunk-HTNA2KGQ.js";
import {
  e
} from "./chunk-QKNXLOOO.js";
import {
  f,
  i3 as i,
  r2 as r
} from "./chunk-IDI4VM7T.js";
import {
  classes
} from "./chunk-6YAOADHH.js";
import {
  nothing2 as nothing,
  safeClassMap
} from "./chunk-K65EA25C.js";

// node_modules/@arcgis/core/applications/Components/stringUtils.js
function a(r3, e2) {
  return r(r3, e2);
}
function i2(r3) {
  return i(r3);
}
function o(r3, t) {
  return f(r3, t);
}

// node_modules/@arcgis/map-components/dist/chunks/heading.js
function L({ level: n, class: a2, id: t, children: o2, excludeGlobalCss: s }) {
  const e2 = r2(n), c = `h${e2}`, i3 = unsafeStatic(c);
  return html`<${i3} .ariaLevel=${String(e2)} class=${safeClassMap(classes(s ? a2 : e.heading, a2))} id=${t ?? nothing} role=heading>${o2}</${i3}>`;
}
function h(n, a2, t) {
  return Math.min(Math.max(n, a2), t);
}
function r2(n) {
  return h(Math.ceil(n), 1, 6);
}

export {
  a,
  i2 as i,
  o,
  L
};
//# sourceMappingURL=chunk-YBEE4GPN.js.map
