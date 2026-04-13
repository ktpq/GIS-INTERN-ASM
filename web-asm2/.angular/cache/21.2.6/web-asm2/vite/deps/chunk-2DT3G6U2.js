import {
  e
} from "./chunk-2DNVIDFH.js";

// node_modules/@arcgis/core/intl/locale.js
var e2;
var t;
var a = globalThis.esriConfig?.locale;
var o = globalThis.document?.documentElement;
function r() {
  const n = o?.getAttribute("lang"), e3 = globalThis.navigator?.language;
  return a ?? n ?? e3 ?? "en";
}
function i() {
  return void 0 === t && (t = r()), t;
}
var c = /^(?<language>[a-z]{2,3})(?:-(?<extlang>[a-z]{3}))?(?:-[A-Z][a-z]{3})?(?:-(?<region>[A-Z]{2}|\d{3}))?(?:-.*)?$/;
function u(n = i()) {
  return g(n)?.language;
}
function s(n = i()) {
  const e3 = g(n);
  return e3?.language && e3?.extlang ? n.replace(`${e3.language}-`, "") : n;
}
function g(n = i()) {
  return c.exec(n)?.groups;
}
var h = [];
function b(e3) {
  return h.push(e3), e(() => {
    h.splice(h.indexOf(e3), 1);
  });
}
var m = [];
function v(e3) {
  return m.push(e3), e(() => m.splice(m.indexOf(e3), 1));
}
function x() {
  const n = e2 ?? r();
  t !== n && ([...m].forEach((e3) => e3(n)), t = n, [...h].forEach((e3) => e3(n)));
}
if (globalThis.addEventListener?.("languagechange", x), o) {
  new MutationObserver(() => {
    x();
  }).observe(o, { attributeFilter: ["lang"] });
}

export {
  i,
  u,
  s,
  b,
  v
};
//# sourceMappingURL=chunk-2DT3G6U2.js.map
