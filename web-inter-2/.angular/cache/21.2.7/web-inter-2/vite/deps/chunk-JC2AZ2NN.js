import {
  e,
  s,
  t
} from "./chunk-FZD4GVUW.js";
import {
  A,
  T,
  U,
  f,
  r,
  w
} from "./chunk-ZTEDLWCB.js";
import {
  i
} from "./chunk-TIEYANBR.js";

// node_modules/@arcgis/core/geometry/ellipsoidUtils.js
function u(n) {
  return { wkt: `GEOCCS["Spherical geocentric",
    DATUM["Not specified",
      SPHEROID["Sphere",${n.radius},0]],
    PRIMEM["Greenwich",0.0,
      AUTHORITY["EPSG","8901"]],
    UNIT["m",1.0],
    AXIS["Geocentric X",OTHER],
    AXIS["Geocentric Y",EAST],
    AXIS["Geocentric Z",NORTH]
  ]` };
}
var S = u(t);
var T2 = u(e);
var G = u(s);
var I = { wkt: `GEOCCS["WGS 84",
  DATUM["WGS_1984",
    SPHEROID["WGS 84",${t.radius},298.257223563,
      AUTHORITY["EPSG","7030"]],
    AUTHORITY["EPSG","6326"]],
  PRIMEM["Greenwich",0,
    AUTHORITY["EPSG","8901"]],
  UNIT["m",1.0,
    AUTHORITY["EPSG","9001"]],
  AXIS["Geocentric X",OTHER],
  AXIS["Geocentric Y",OTHER],
  AXIS["Geocentric Z",NORTH],
  AUTHORITY["EPSG","4978"]
]` };
var p = T2.wkt.toUpperCase();
var s2 = G.wkt.toUpperCase();
function E(e2) {
  if (null != e2 && U(e2)) {
    const r2 = e2.wkid, i2 = e2.wkt2 ?? e2.wkt;
    if (w(r2)) return e;
    const u2 = i2?.toUpperCase();
    if (i2 && u2 === p) return e;
    if (f(r2) || u2 && u2 === s2) return s;
  }
  return t;
}
var f2 = Math.cos(Math.PI / 16 / 16);
function R(e2) {
  return w(e2) ? e : f(e2) ? s : t;
}
function A2(n) {
  return T(n, S);
}
function O(n) {
  return A2(n) || T(n, T2) || T(n, G);
}
function U2(n) {
  return !(H(n) || w2(n));
}
function H(n) {
  return w(n?.wkid) || T(n, T2);
}
function w2(n) {
  return f(n?.wkid) || T(n, G);
}

// node_modules/@arcgis/core/core/units.js
var o = 39.37;
var m = t.radius * Math.PI / 200;
var f3 = /(?:LENGTH)?UNIT\[([^\]]+)]]$/i;
var d = r;
var U3 = /UNIT\[([^\]]+)]/i;
var b = /* @__PURE__ */ new Set([4305, 4807, 4810, 4811, 4812, 4816, 4819, 4821, 4901, 4902, 37225, 104025, 104026, 104139, 104140]);
var B = i()({ millimeter: "millimeters", centimeter: "centimeters", meter: "meters", meter_german: "german-meters", kilometer: "kilometers", decimeter: "decimeters", micrometer: "micrometers", nanometer: "nanometers", "50_kilometers": "50-kilometers", "150_kilometers": "150-kilometers", foot: "feet", foot_us: "us-feet", foot_clarke: "clarke-feet", fathom: "fathoms", nautical_mile: "nautical-miles", chain_us: "us-chains", link_us: "us-links", mile_us: "us-miles", yard_clarke: "clarke-yards", chain_clarke: "clarke-chains", link_clarke: "clarke-links", yard_sears: "sears-yards", foot_sears: "sears-feet", chain_sears: "sears-chains", link_sears: "sears-links", yard_benoit_1895_a: "benoit-1895-a-yards", foot_benoit_1895_a: "benoit-1895-a-feet", chain_benoit_1895_a: "benoit-1895-a-chains", link_benoit_1895_a: "benoit-1895-a-links", yard_benoit_1895_b: "benoit-1895-b-yards", foot_benoit_1895_b: "benoit-1895-b-feet", chain_benoit_1895_b: "benoit-1895-b-chains", link_benoit_1895_b: "benoit-1895-b-links", foot_1865: "1865-feet", foot_indian: "indian-feet", foot_indian_1937: "indian-1937-feet", foot_indian_1962: "indian-1962-feet", foot_indian_1975: "indian-1975-feet", yard_indian: "indian-yards", yard_indian_1937: "indian-1937-yards", yard_indian_1962: "indian-1962-yards", yard_indian_1975: "indian-1975-yards", statute_mile: "statute-miles", foot_gold_coast: "gold-coast-feet", foot_british_1936: "british-1936-feet", yard: "yards", chain: "chains", link: "links", yard_sears_1922_truncated: "sears-1922-truncated-yards", foot_sears_1922_truncated: "sears-1922-truncated-feet", chain_sears_1922_truncated: "sears-1922-truncated-chains", link_sears_1922_truncated: "sears-1922-truncated-links", yard_us: "us-yards", inch: "inches", inch_us: "us-inches", rod: "rods", rod_us: "us-rods", nautical_mile_us: "us-nautical-miles", nautical_mile_uk: "uk-nautical-miles", smoot: "smoots", vara_tx: "tx-vara", point: "points" });
var h = (e2) => e2 * e2;
var k = (e2) => e2 * e2 * e2;
var _ = { length: { baseUnit: "meters", units: { millimeters: { inBaseUnits: 1e-3 }, centimeters: { inBaseUnits: 0.01 }, meters: { inBaseUnits: 1 }, feet: { inBaseUnits: 0.3048 }, "us-feet": { inBaseUnits: 0.3048006096012192 }, "clarke-feet": { inBaseUnits: 0.3047972654 }, fathoms: { inBaseUnits: 1.8288 }, "nautical-miles": { inBaseUnits: 1852 }, "german-meters": { inBaseUnits: 1.0000135965 }, "us-chains": { inBaseUnits: 20.11684023368047 }, "us-links": { inBaseUnits: 0.2011684023368047 }, "us-miles": { inBaseUnits: 1609.347218694438 }, kilometers: { inBaseUnits: 1e3 }, "clarke-yards": { inBaseUnits: 0.9143917962 }, "clarke-chains": { inBaseUnits: 20.1166195164 }, "clarke-links": { inBaseUnits: 0.201166195164 }, "sears-yards": { inBaseUnits: 0.9143984146160287 }, "sears-feet": { inBaseUnits: 0.3047994715386762 }, "sears-chains": { inBaseUnits: 20.11676512155263 }, "sears-links": { inBaseUnits: 0.2011676512155263 }, "benoit-1895-a-yards": { inBaseUnits: 0.9143992 }, "benoit-1895-a-feet": { inBaseUnits: 0.3047997333333333 }, "benoit-1895-a-chains": { inBaseUnits: 20.1167824 }, "benoit-1895-a-links": { inBaseUnits: 0.201167824 }, "benoit-1895-b-yards": { inBaseUnits: 0.9143992042898124 }, "benoit-1895-b-feet": { inBaseUnits: 0.3047997347632708 }, "benoit-1895-b-chains": { inBaseUnits: 20.11678249437587 }, "benoit-1895-b-links": { inBaseUnits: 0.2011678249437587 }, "1865-feet": { inBaseUnits: 0.3048008333333334 }, "indian-feet": { inBaseUnits: 0.3047995102481469 }, "indian-1937-feet": { inBaseUnits: 0.30479841 }, "indian-1962-feet": { inBaseUnits: 0.3047996 }, "indian-1975-feet": { inBaseUnits: 0.3047995 }, "indian-yards": { inBaseUnits: 0.9143985307444408 }, "indian-1937-yards": { inBaseUnits: 0.91439523 }, "indian-1962-yards": { inBaseUnits: 0.9143988 }, "indian-1975-yards": { inBaseUnits: 0.9143985 }, miles: { inBaseUnits: 1609.344 }, "statute-miles": { inBaseUnits: 1609.344 }, "gold-coast-feet": { inBaseUnits: 0.3047997101815088 }, "british-1936-feet": { inBaseUnits: 0.3048007491 }, yards: { inBaseUnits: 0.9144 }, chains: { inBaseUnits: 20.1168 }, links: { inBaseUnits: 0.201168 }, "sears-1922-truncated-yards": { inBaseUnits: 0.914398 }, "sears-1922-truncated-feet": { inBaseUnits: 0.3047993333333334 }, "sears-1922-truncated-chains": { inBaseUnits: 20.116756 }, "sears-1922-truncated-links": { inBaseUnits: 0.20116756 }, "us-yards": { inBaseUnits: 0.9144018288036576 }, decimeters: { inBaseUnits: 0.1 }, inches: { inBaseUnits: 0.0254 }, "us-inches": { inBaseUnits: 0.0254000508001016 }, rods: { inBaseUnits: 5.0292 }, "us-rods": { inBaseUnits: 5.029210058420118 }, "us-nautical-miles": { inBaseUnits: 1853.248 }, "uk-nautical-miles": { inBaseUnits: 1853.184 }, smoots: { inBaseUnits: 1.7018 }, "tx-vara": { inBaseUnits: 0.8466683600033867 }, points: { inBaseUnits: 3527777777777778e-19 }, micrometers: { inBaseUnits: 1e-6 }, nanometers: { inBaseUnits: 1e-9 }, "50-kilometers": { inBaseUnits: 5e4 }, "150-kilometers": { inBaseUnits: 15e4 } } }, area: { baseUnit: "square-meters", units: { "square-millimeters": { inBaseUnits: h(1e-3) }, "square-centimeters": { inBaseUnits: h(0.01) }, "square-decimeters": { inBaseUnits: h(0.1) }, "square-meters": { inBaseUnits: 1 }, "square-kilometers": { inBaseUnits: h(1e3) }, "square-inches": { inBaseUnits: h(0.0254) }, "square-feet": { inBaseUnits: h(0.3048) }, "square-yards": { inBaseUnits: h(0.9144) }, "square-miles": { inBaseUnits: h(1609.344) }, "square-nautical-miles": { inBaseUnits: h(1852) }, "square-us-feet": { inBaseUnits: h(1200 / 3937) }, acres: { inBaseUnits: 15625e-7 * h(1609.344) }, ares: { inBaseUnits: 100 }, hectares: { inBaseUnits: 1e4 } } }, volume: { baseUnit: "liters", units: { liters: { inBaseUnits: 1 }, megaliters: { inBaseUnits: 1e6 }, gigaliters: { inBaseUnits: 1e9 }, "cubic-millimeters": { inBaseUnits: 1e3 * k(1e-3) }, "cubic-centimeters": { inBaseUnits: 1e3 * k(0.01) }, "cubic-decimeters": { inBaseUnits: 1e3 * k(0.1) }, "cubic-meters": { inBaseUnits: 1e3 }, "cubic-kilometers": { inBaseUnits: 1e3 * k(1e3) }, "cubic-inches": { inBaseUnits: 1e3 * k(0.0254) }, "cubic-feet": { inBaseUnits: 1e3 * k(0.3048) }, "cubic-yards": { inBaseUnits: 1e3 * k(0.9144) }, "cubic-miles": { inBaseUnits: 1e3 * k(1609.344) }, "cubic-us-feet": { inBaseUnits: 1e3 * k(1200 / 3937) } } }, angle: { baseUnit: "radians", units: { radians: { inBaseUnits: 1 }, degrees: { inBaseUnits: Math.PI / 180 } } } };
var q = (() => {
  const e2 = {};
  for (const s3 in _) for (const i2 in _[s3].units) e2[i2] = s3;
  return e2;
})();
function y(e2, s3, i2) {
  return e2 * _[i2].units[s3].inBaseUnits;
}
function p2(e2, s3, i2) {
  return e2 / _[i2].units[s3].inBaseUnits;
}
var g = ["inches", "feet", "yards", "miles", "nautical-miles", "us-feet", "millimeters", "centimeters", "decimeters", "meters", "kilometers"];
var w3 = ["square-inches", "square-feet", "square-yards", "square-miles", "square-nautical-miles", "square-us-feet", "square-millimeters", "square-centimeters", "square-decimeters", "square-meters", "square-kilometers", "acres", "ares", "hectares"];
var M = ["cubic-inches", "cubic-feet", "cubic-yards", "cubic-miles", "cubic-us-feet", "liters", "megaliters", "gigaliters", "cubic-millimeters", "cubic-centimeters", "cubic-decimeters", "cubic-meters", "cubic-kilometers"];
var S2 = ["metric", "imperial"];
var D = [...S2, ...w3];
var v = [...S2, ...g];
var C = [...S2, ...M];
var E2 = /* @__PURE__ */ new Map([["meters", "square-meters"], ["feet", "square-feet"], ["us-feet", "square-us-feet"]]);
function x(e2) {
  const s3 = q[e2];
  if (!s3) throw new Error("unknown type");
  return s3;
}
function j(e2, s3 = null) {
  return s3 = s3 || x(e2), _[s3].baseUnit === e2;
}
function N(e2, s3, i2) {
  if (s3 === i2) return e2;
  const t2 = x(s3);
  if (t2 !== x(i2)) throw new Error("incompatible units");
  const n = j(s3, t2) ? e2 : y(e2, s3, t2);
  return j(i2, t2) ? n : p2(n, i2, t2);
}
function O2(e2, s3, i2, t2 = false) {
  if (!t2 && A(s3)) throw new Error("Unable to convert from an angular unit to a linear unit.");
  const n = oe(s3);
  return n !== i2 && (e2 = n ? N(e2, n, i2) : N(e2 *= re(s3), "meters", i2)), e2;
}
function F(e2, s3, i2, t2 = false) {
  if (!t2 && A(i2)) throw new Error("Unable to convert from a linear unit to an angular unit.");
  const n = oe(i2);
  return s3 !== n && (e2 = n ? N(e2, s3, n) : N(e2, s3, "meters") / re(i2)), e2;
}
function J(e2) {
  switch (e2) {
    case "metric":
      return "meters";
    case "imperial":
      return "feet";
    default:
      return e2;
  }
}
function T3(e2) {
  return J(e2);
}
function K(e2) {
  switch (e2) {
    case "metric":
      return "square-meters";
    case "imperial":
      return "square-feet";
    default:
      return e2;
  }
}
function G2(e2, s3, i2) {
  switch (i2) {
    case "metric":
      return L(e2, s3);
    case "imperial":
      return W(e2, s3);
    default:
      return i2;
  }
}
function H2(e2, s3, i2) {
  switch (i2) {
    case "metric":
      return Y(e2, s3);
    case "imperial":
      return $(e2, s3);
    default:
      return i2;
  }
}
function L(e2, s3) {
  const i2 = N(e2, s3, "meters");
  return Math.abs(i2) < 3e3 ? "meters" : "kilometers";
}
function Y(e2, s3) {
  const i2 = N(e2, s3, "meters");
  return Math.abs(i2) < 1e5 ? "meters" : "kilometers";
}
function W(e2, s3) {
  const i2 = N(e2, s3, "feet");
  return Math.abs(i2) < 1e3 ? "feet" : "miles";
}
function $(e2, s3) {
  const i2 = N(e2, s3, "feet");
  return Math.abs(i2) < 1e5 ? "feet" : "miles";
}
function z(e2, s3) {
  const i2 = N(e2, s3, "square-meters");
  return Math.abs(i2) < 3e6 ? "square-meters" : "square-kilometers";
}
function Q(e2, s3) {
  const i2 = N(e2, s3, "square-feet");
  return Math.abs(i2) < 1e6 ? "square-feet" : "square-miles";
}
function V(e2, s3, i2) {
  switch (i2) {
    case "metric":
      return z(e2, s3);
    case "imperial":
      return Q(e2, s3);
    default:
      return i2;
  }
}
function se(e2, s3, i2) {
  return N(e2, s3, "meters") / (i2 * Math.PI / 180);
}
function ie(e2) {
  return B.fromJSON(e2.toLowerCase()) || null;
}
function te(e2) {
  return null == e2 || U2(e2) ? ae(e2, false) ?? 1 : 1;
}
function ne(e2) {
  return re(e2) >= E(e2).metersPerDegree ? "meters" : oe(e2);
}
function re(e2, s3 = t.metersPerDegree) {
  return ae(e2, true) ?? s3;
}
function ae(e2, s3 = false) {
  const i2 = e2?.wkid ?? null, t2 = e2?.wkt2 ?? e2?.wkt ?? null;
  let a = null;
  if (i2) {
    if (w(i2)) return e.metersPerDegree;
    if (f(i2)) return s.metersPerDegree;
    a = d.values[d[i2]], !a && s3 && b.has(i2) && (a = m);
  } else t2 && (be(t2) ? a = ue(f3.exec(t2), a) : Ue(t2) && (a = ue(U3.exec(t2), a)));
  return a;
}
function ce(e2) {
  return A(e2) ? 1 : re(e2);
}
function ue(e2, s3) {
  return e2?.[1] ? le(e2[1]) : s3;
}
function le(e2) {
  return parseFloat(e2.split(",")[1]);
}
function oe(e2) {
  const s3 = e2?.wkid ?? null, i2 = e2?.wkt2 ?? e2?.wkt ?? null;
  let t2 = null;
  if (s3) t2 = d.units[d[s3]];
  else if (i2) {
    const e3 = be(i2) ? f3 : Ue(i2) ? U3 : null;
    if (e3) {
      const s4 = e3.exec(i2);
      s4?.[1] && (t2 = he(s4[1]));
    }
  }
  return null != t2 ? ie(t2) : null;
}
function me(e2) {
  const s3 = oe(e2);
  return null != s3 && v.includes(s3) ? s3 : null;
}
function fe(e2) {
  const s3 = ne(e2);
  return null != s3 && v.includes(s3) ? s3 : null;
}
function de(e2) {
  const s3 = oe(e2);
  return null == s3 ? null : E2.get(s3);
}
function Ue(e2) {
  return /^GEOCCS/i.test(e2);
}
function be(e2) {
  return /^\s*(?:PROJCS|PROJCRS|PROJECTEDCRS)/i.test(e2);
}
var Be = 1e-7;
function he(e2) {
  const s3 = /[\\"']([^\\"']+)/.exec(e2);
  let i2 = s3?.[1];
  if (!i2 || !ie(i2)) {
    const s4 = le(e2);
    i2 = null;
    const t2 = d.values;
    for (let e3 = 0; e3 < t2.length; ++e3) if (Math.abs(s4 - t2[e3]) < Be) {
      i2 = d.units[e3];
      break;
    }
  }
  return i2;
}
function ke(e2) {
  const s3 = oe(e2);
  if (null == s3) return null;
  switch (s3) {
    case "feet":
    case "us-feet":
    case "clarke-feet":
    case "fathoms":
    case "nautical-miles":
    case "us-chains":
    case "us-links":
    case "us-miles":
    case "clarke-yards":
    case "clarke-chains":
    case "clarke-links":
    case "sears-yards":
    case "sears-feet":
    case "sears-chains":
    case "sears-links":
    case "benoit-1895-a-yards":
    case "benoit-1895-a-feet":
    case "benoit-1895-a-chains":
    case "benoit-1895-a-links":
    case "benoit-1895-b-yards":
    case "benoit-1895-b-feet":
    case "benoit-1895-b-chains":
    case "benoit-1895-b-links":
    case "1865-feet":
    case "indian-feet":
    case "indian-1937-feet":
    case "indian-1962-feet":
    case "indian-1975-feet":
    case "indian-yards":
    case "indian-1937-yards":
    case "indian-1962-yards":
    case "indian-1975-yards":
    case "statute-miles":
    case "gold-coast-feet":
    case "british-1936-feet":
    case "yards":
    case "chains":
    case "links":
    case "sears-1922-truncated-yards":
    case "sears-1922-truncated-feet":
    case "sears-1922-truncated-chains":
    case "sears-1922-truncated-links":
    case "us-yards":
    case "inches":
    case "us-inches":
    case "rods":
    case "us-rods":
    case "us-nautical-miles":
    case "uk-nautical-miles":
    case "smoots":
    case "tx-vara":
    case "points":
      return "imperial";
    case "millimeters":
    case "centimeters":
    case "meters":
    case "german-meters":
    case "kilometers":
    case "decimeters":
    case "micrometers":
    case "nanometers":
    case "50-kilometers":
    case "150-kilometers":
      return "metric";
  }
  return null;
}
var _e = { esriAcres: "acres", esriAres: "ares", esriHectares: "hectares", esriSquareCentimeters: "square-centimeters", esriSquareDecimeters: "square-decimeters", esriSquareFeet: "square-feet", esriSquareInches: "square-inches", esriSquareKilometers: "square-kilometers", esriSquareMeters: "square-meters", esriSquareMiles: "square-miles", esriSquareMillimeters: "square-millimeters", esriSquareUsFeet: "square-us-feet", esriSquareYards: "square-yards" };
var qe = { esriCentimeters: "centimeters", esriDecimeters: "decimeters", esriFeet: "feet", esriInches: "inches", esriKilometers: "kilometers", esriMeters: "meters", esriMiles: "miles", esriMillimeters: "millimeters", esriNauticalMiles: "nautical-miles", esriYards: "yards" };
var ye = { esriDUDecimalDegrees: "degrees", esriDURadians: "radians" };
var pe = i()(_e);
var ge = i()(qe);
var we = i()(ye);
function Me(e2) {
  switch (e2) {
    case "metric":
    case "ares":
    case "hectares":
      return "metric";
    case "imperial":
    case "acres":
      return "imperial";
    case "square-inches":
      return "inches";
    case "square-feet":
      return "feet";
    case "square-yards":
      return "yards";
    case "square-miles":
      return "miles";
    case "square-nautical-miles":
      return "nautical-miles";
    case "square-us-feet":
      return "us-feet";
    case "square-millimeters":
      return "millimeters";
    case "square-centimeters":
      return "centimeters";
    case "square-decimeters":
      return "decimeters";
    case "square-meters":
      return "meters";
    case "square-kilometers":
      return "kilometers";
  }
  throw new Error("unhandled area unit");
}

export {
  S,
  T2 as T,
  G,
  I,
  E,
  R,
  A2 as A,
  O,
  U2 as U,
  H,
  w2 as w,
  o,
  b,
  x,
  N,
  O2,
  F,
  J,
  T3 as T2,
  K,
  G2,
  H2,
  L,
  Y,
  W,
  $,
  z,
  Q,
  V,
  se,
  ie,
  te,
  ne,
  re,
  ae,
  ce,
  oe,
  me,
  fe,
  de,
  be,
  ke,
  pe,
  ge,
  we,
  Me
};
//# sourceMappingURL=chunk-JC2AZ2NN.js.map
