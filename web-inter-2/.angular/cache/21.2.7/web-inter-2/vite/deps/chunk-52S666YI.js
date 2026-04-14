import {
  e as e2
} from "./chunk-K6KUHFK2.js";
import {
  S as S2
} from "./chunk-NLL3NYBQ.js";
import {
  N,
  c
} from "./chunk-M756WYLA.js";
import {
  S,
  T2 as T
} from "./chunk-ZRWCUWWK.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  has
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/layers/support/relativeTimeQueryUtils.js
function s(e3, t) {
  if (!e3 || !has("featurelayer-relative-time-queries-enabled")) return 0;
  const r = T(e3);
  return S(e3) || r ? (t ?? 0) > 0 || r ? has("featurelayer-relative-time-queries-bin-window-public") ?? 1 : has("featurelayer-relative-time-queries-bin-window-private") ?? 60 : 0;
}
function u(e3) {
  return (has("featurelayer-relative-time-queries-enabled") ?? true) && f(e3);
}
function f(e3) {
  return null != e3 && /CURRENT_TIMESTAMP/gi.test(e3);
}
var l = /* @__PURE__ */ new WeakMap();
async function c2(e3, r) {
  if (!r || !f(r)) return [];
  const n = await c(r, e3);
  if (!n.isStandardized) return [];
  const i = y(n), o = new Set(i.map((e4) => e4.left.column));
  return Array.from(o);
}
async function p(e3, t, r) {
  (await c2(t, r)).length > 0 && await S2(e3, t, r);
}
async function m(e3, r, n, i = Date.now()) {
  if (!r || !n || !f(r)) return r;
  const o = await c(r, e3);
  if (!o.isStandardized) return r;
  const [a, s2] = d(i, n), u2 = y(o).flatMap((e4) => [{ replacement: "BETWEEN" === e4.operator ? a : s2, start: e4.right.value[0].left.location.start.offset, end: e4.right.value[0].left.location.end.offset }, { replacement: "BETWEEN" === e4.operator ? s2 : a, start: e4.right.value[1].location.start.offset, end: e4.right.value[1].location.end.offset }]).sort((e4, t) => t.start - e4.start);
  let l2 = r;
  for (const { replacement: t, start: f2, end: c3 } of u2) l2 = l2.slice(0, f2) + t + l2.slice(c3);
  return l2;
}
function y(t) {
  return e(l, t, () => E(t.parseTree));
}
function d(e3, t) {
  const n = 60 * t * 1e3, i = e3 - e3 % n, o = i + n;
  return [N(new Date(i), "date"), N(new Date(o), "date")];
}
function E(e3) {
  const t = [], r = { "binary-expression": (e4) => {
    "AND" === e4.operator || "OR" === e4.operator ? (e2(e4.left, r), e2(e4.right, r)) : w(e4) && t.push(e4);
  } };
  return e2(e3, r), t;
}
function w(e3) {
  return "binary-expression" === e3.type && ("BETWEEN" === e3.operator || "NOTBETWEEN" === e3.operator) && "column-reference" === e3.left.type && g(e3.right);
}
function g(e3) {
  if ("expression-list" !== e3.type || 2 !== e3.value.length) return false;
  const [t, r] = e3.value;
  return (h(t) || v(t)) && b(r);
}
function h(e3) {
  return "binary-expression" === e3.type && b(e3.left) && T2(e3.right);
}
function v(e3) {
  return "binary-expression" === e3.type && b(e3.left) && q(e3.right);
}
function b(e3) {
  return "current-time" === e3.type && "timestamp" === e3.mode;
}
function T2(e3) {
  return "interval" === e3.type;
}
function q(e3) {
  return "number" === e3.type;
}

export {
  s,
  u,
  c2 as c,
  p,
  m
};
//# sourceMappingURL=chunk-52S666YI.js.map
