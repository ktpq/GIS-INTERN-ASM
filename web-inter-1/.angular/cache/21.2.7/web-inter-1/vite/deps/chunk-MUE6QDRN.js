import {
  J
} from "./chunk-CPNUUDDA.js";
import {
  e
} from "./chunk-473S3KQM.js";
import {
  DateTime,
  IANAZone
} from "./chunk-HTVDNBEG.js";

// node_modules/@arcgis/core/core/timeUtils.js
var r = { milliseconds: 1, seconds: 1e3, minutes: 6e4, hours: 36e5, days: 864e5, weeks: 6048e5, months: 26784e5, years: 31536e6, decades: 31536e7, centuries: 31536e8, unknown: NaN };
function o(r2, o2, i2, c2 = e) {
  if ("unknown" === i2) return r2;
  const u = new IANAZone(J(c2)), a = DateTime.fromJSDate(r2, { zone: u }), l = "decades" === i2 || "centuries" === i2 ? "year" : T(i2);
  return "decades" === i2 && (o2 *= 10), "centuries" === i2 && (o2 *= 100), a.plus({ [l]: o2 }).toJSDate();
}
function i(e2, n, t = "milliseconds") {
  const s = e2.getTime(), r2 = m(n, t, "milliseconds");
  return new Date(s + r2);
}
function c(r2, o2, i2 = e) {
  if ("unknown" === o2) return r2;
  const c2 = new IANAZone(J(i2)), u = DateTime.fromJSDate(r2, { zone: c2 });
  if ("decades" === o2 || "centuries" === o2) {
    const e2 = u.startOf("year"), { year: n } = e2, t = n - n % ("decades" === o2 ? 10 : 100);
    return e2.set({ year: t }).toJSDate();
  }
  const a = T(o2);
  return u.startOf(a).toJSDate();
}
function m(e2, n, t) {
  if (0 === e2) return 0;
  return e2 * r[n] / r[t];
}
function g(e2, n) {
  return e2 && n ? e2.intersection(n) : e2 || n;
}
function T(e2) {
  switch (e2) {
    case "milliseconds":
      return "millisecond";
    case "seconds":
      return "second";
    case "minutes":
      return "minute";
    case "hours":
      return "hour";
    case "days":
      return "day";
    case "weeks":
      return "week";
    case "months":
      return "month";
    case "years":
      return "year";
  }
}

export {
  r,
  o,
  i,
  c,
  m,
  g
};
//# sourceMappingURL=chunk-MUE6QDRN.js.map
