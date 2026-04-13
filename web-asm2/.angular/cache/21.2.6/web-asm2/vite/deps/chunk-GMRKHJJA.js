import {
  q
} from "./chunk-YUTAX525.js";
import {
  c
} from "./chunk-N7DF7CMI.js";
import {
  a
} from "./chunk-JC7PAMG4.js";
import {
  r
} from "./chunk-ZILR7JK7.js";
import {
  $,
  L,
  N,
  Q,
  W,
  Y,
  z
} from "./chunk-DHNLUBWZ.js";
import {
  r2
} from "./chunk-6SPQI6I6.js";

// node_modules/@arcgis/core/core/unitFormatUtils.js
function g(t, n, r3) {
  return t.units[n][r3];
}
function p(t, n, r3, i = 2, o = "abbr") {
  return `${c(n, { minimumFractionDigits: i, maximumFractionDigits: i, signDisplay: n > 0 ? "never" : "exceptZero" })} ${g(t, r3, o)}`;
}
function D(t, n, r3, i = 2, o = "abbr") {
  return `${c(n, { minimumFractionDigits: i, maximumFractionDigits: i, signDisplay: "exceptZero" })} ${g(t, r3, o)}`;
}
function x(t, n, r3, i = 2, e = "abbr") {
  const u = L(n, r3);
  return p(t, N(n, r3, u), u, i, e);
}
function F(t, n, r3, i = 2, e = "abbr") {
  const u = L(n, r3);
  return D(t, N(n, r3, u), u, i, e);
}
function y(t, n, r3, i = 2, u = "abbr") {
  const s = Y(n, r3);
  return p(t, N(n, r3, s), s, i, u);
}
function d(t, n, r3, i = 2, u = "abbr") {
  const s = Y(n, r3);
  return D(t, N(n, r3, s), s, i, u);
}
function h(t, n, r3, i = 2, e = "abbr") {
  const u = W(n, r3);
  return p(t, N(n, r3, u), u, i, e);
}
function M(t, n, r3, i = 2, e = "abbr") {
  const u = W(n, r3);
  return D(t, N(n, r3, u), u, i, e);
}
function $2(t, n, r3, i = 2, e = "abbr") {
  const s = $(n, r3);
  return p(t, N(n, r3, s), s, i, e);
}
function j(t, n, r3, i = 2, e = "abbr") {
  const s = $(n, r3);
  return D(t, N(n, r3, s), s, i, e);
}
function B(t, n, r3, i = 2, e = "abbr") {
  const u = z(n, r3);
  return p(t, N(n, r3, u), u, i, e);
}
function w(t, n, r3, i = 2, e = "abbr") {
  const u = Q(n, r3);
  return p(t, N(n, r3, u), u, i, e);
}
var z2 = (t, n) => ({ style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: n, minimumFractionDigits: n, signDisplay: t > 0 ? "never" : "exceptZero" });
function N2(n, i, e, u, s, c2 = a, a2 = true) {
  let m = c2.normalize(q(N(n, i, "degrees"), e, u), 0, a2);
  const f = z2(m, s ?? 2);
  return m = q2(m, f), c(m, f);
}
var k = /* @__PURE__ */ new Map();
function q2(t, n) {
  const r3 = JSON.stringify(n);
  let i = k.get(r3);
  return i || (i = new Intl.NumberFormat("en-US", n), k.set(r3, i)), /^[-+]?360\.?0*°?$/.test(i.format(t)) ? 0 : t;
}
var C = ["B", "kB", "MB", "GB", "TB"];
function G(t, r3) {
  let o = 0 === (r3 = Math.round(r3)) ? 0 : Math.floor(Math.log(r3) / Math.log(1024));
  o = r(o, 0, C.length - 1);
  const e = c(r3 / 1024 ** o, { maximumFractionDigits: 2 });
  return r2(t.units.bytes[C[o]], { fileSize: e });
}

export {
  g,
  p,
  D,
  x,
  F,
  y,
  d,
  h,
  M,
  $2 as $,
  j,
  B,
  w,
  N2 as N,
  G
};
//# sourceMappingURL=chunk-GMRKHJJA.js.map
