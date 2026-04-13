import {
  a,
  i,
  m as m2
} from "./chunk-NIXSIW3X.js";
import {
  Fe,
  H,
  Ie,
  Te,
  we,
  xe
} from "./chunk-DNCZTJNI.js";
import {
  D,
  l2 as l,
  m2 as m
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/NumberFieldFormat.js
var s = { min: 0, max: 20 };
var p = 2;
var a2 = 0;
var m3 = "decimal";
var n = "auto";
var u = class extends a {
  constructor(t) {
    super(t), this.maximumFractionDigits = p, this.minimumFractionDigits = a2, this.style = m3, this.type = "number", this.useGrouping = n;
  }
};
__decorate([m({ type: D, nonNullable: true, range: s, json: { default: p, write: true } })], u.prototype, "maximumFractionDigits", void 0), __decorate([m({ type: D, nonNullable: true, range: s, json: { default: a2, write: true } })], u.prototype, "minimumFractionDigits", void 0), __decorate([m({ type: ["decimal"], nonNullable: true, json: { default: m3, write: true } })], u.prototype, "style", void 0), __decorate([m({ type: ["number"] })], u.prototype, "type", void 0), __decorate([m({ type: ["always", "auto", "never"], nonNullable: true, json: { default: n, write: true } })], u.prototype, "useGrouping", void 0), u = __decorate([l("esri.layers.support.NumberFieldFormat")], u);
var l2 = u;

// node_modules/@arcgis/core/layers/support/fieldFormatUtils.js
var c = { base: a, key: "type", errorContext: "field-configuration-field-format", typeMap: { "date-time": i, number: l2 } };
function m4(t, e) {
  const { format: n2 } = t;
  return e && d(e) ? n2 ? h(n2, e) : N(e, { hour12: "always", useGrouping: "always" }) : null;
}
function h(t, e) {
  const { dateFormat: n2 } = t;
  if (!e) return n2 ? g(t) : y(t);
  if (!d(e)) return;
  const r = { hour12: "always" };
  switch (e.type) {
    case "integer":
    case "small-integer":
    case "big-integer":
    case "long":
      return f(t);
    case "single":
    case "double":
      return y(t);
    case "date":
    case "timestamp-offset":
      return n2 ? g(t) : N(e, r);
    case "date-only":
      return n2 ? p2(t) : N(e);
    case "time-only":
      return n2 ? w(t) : N(e, r);
  }
}
function d(t) {
  return H(t) && (Fe(t) || Ie(t) || we(t) || Te(t) || xe(t));
}
function f(t) {
  return new l2({ useGrouping: t.digitSeparator ? "always" : "never" });
}
function y(t) {
  const e = f(t), { places: n2 } = t;
  return e.minimumFractionDigits = n2 ?? 0, e.maximumFractionDigits = n2 ?? 2, e;
}
function g(e) {
  return new i({ dateStyle: F(e), year: D2(e), month: $(e), timeStyle: b(e), hour12: S(e) });
}
function p2(e) {
  return new i({ dateStyle: F(e), year: D2(e), month: $(e) });
}
function w(e) {
  return new i({ timeStyle: b(e), hour12: S(e) });
}
function F(t) {
  const { dateFormat: e } = t;
  return e ? e.startsWith("short-date") ? "short" : e.startsWith("day-short-month-year") ? "medium" : e.startsWith("long-month-day-year") ? "long" : e.startsWith("long-date") ? "full" : null : null;
}
function S(t) {
  return t.dateFormat?.endsWith("-24") ? "never" : "always";
}
function $(t) {
  switch (t.dateFormat) {
    case "short-month-year":
      return "short";
    case "long-month-year":
      return "long";
    default:
      return null;
  }
}
function b(t) {
  const { dateFormat: e } = t;
  return e ? e.includes("short-time") ? "short" : e.includes("long-time") ? "medium" : null : null;
}
function D2(t) {
  switch (t.dateFormat) {
    case "short-month-year":
    case "long-month-year":
    case "year":
      return "numeric";
    default:
      return null;
  }
}
function x(t, e) {
  const n2 = "number" === t.type, r = "date-time" === t.type;
  if (!e) return n2 ? j(t) : r ? v(t) : null;
  if (d(e)) switch (e.type) {
    case "integer":
    case "small-integer":
    case "big-integer":
    case "long":
      return n2 ? G(t) : null;
    case "single":
    case "double":
      return n2 ? j(t) : null;
    case "date":
    case "timestamp-offset":
      return r ? v(t) : null;
    case "date-only":
      return r ? W(t) : null;
    case "time-only":
      return r ? k(t) : null;
  }
}
function G(t) {
  return new m2({ digitSeparator: "never" !== t.useGrouping });
}
function j(t) {
  const e = G(t);
  return e.places = t.maximumFractionDigits, e;
}
function v(t) {
  let e;
  const n2 = C(t), r = I(t), o = "never" === t.hour12 ? "24" : null, a3 = "numeric" === t.year ? "year" : null, u2 = M(t);
  return n2 && r && o ? e = `${n2}-${r}-${o}` : n2 && r ? e = `${n2}-${r}` : n2 ? e = n2 : a3 && u2 ? e = `${u2}-${a3}` : a3 && (e = a3), e ? new m2({ dateFormat: e }) : null;
}
function W(t) {
  let e;
  const n2 = C(t), r = "numeric" === t.year ? "year" : null, o = M(t);
  return n2 ? e = n2 : r && o ? e = `${o}-${r}` : r && (e = r), e ? new m2({ dateFormat: e }) : null;
}
function k(t) {
  let e;
  const n2 = I(t), r = "never" === t.hour12 ? "24" : null;
  return n2 && r ? e = `short-date-${n2}-${r}` : n2 && (e = `short-date-${n2}`), e ? new m2({ dateFormat: e }) : null;
}
function C(t) {
  switch (t.dateStyle) {
    case "short":
      return "short-date";
    case "medium":
      return "day-short-month-year";
    case "long":
      return "long-month-day-year";
    case "full":
      return "long-date";
    default:
      return;
  }
}
function I(t) {
  return t.timeStyle && ("short" === t.timeStyle ? "short-time" : "long-time");
}
function M(t) {
  switch (t.month) {
    case "short":
      return "short-month";
    case "long":
      return "long-month";
    default:
      return;
  }
}
function N(e, n2) {
  if (!d(e)) return;
  const r = n2?.useGrouping ?? "auto", o = n2?.hour12 ?? "auto";
  switch (e.type) {
    case "integer":
    case "small-integer":
    case "big-integer":
    case "long":
      return new l2({ minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: r });
    case "single":
    case "double":
      return new l2({ minimumFractionDigits: 0, maximumFractionDigits: 2, useGrouping: r });
    case "date":
    case "timestamp-offset":
      return new i({ dateStyle: "short", timeStyle: "short", hour12: o });
    case "date-only":
      return new i({ dateStyle: "short" });
    case "time-only":
      return new i({ timeStyle: "short", hour12: o });
  }
}

export {
  c,
  m4 as m,
  h,
  d,
  x,
  N
};
//# sourceMappingURL=chunk-MK2KB2KA.js.map
