import {
  q
} from "./chunk-5NZ3FCSW.js";
import {
  B
} from "./chunk-MQRKJL3K.js";
import {
  r
} from "./chunk-NNUIV2NH.js";
import {
  D,
  h,
  v
} from "./chunk-ATDSWCPU.js";
import {
  i,
  m
} from "./chunk-YZDX62BD.js";
import {
  d
} from "./chunk-XPGSGU2C.js";

// node_modules/@arcgis/core/renderers/support/numberUtils.js
var n = /^-?(\d+)(\.(\d+))?$/i;
function e(t, n2) {
  return t - n2;
}
function r2(t, n2) {
  let e2, r3;
  return e2 = Number(t.toFixed(n2)), e2 < t ? r3 = e2 + 1 / 10 ** n2 : (r3 = e2, e2 -= 1 / 10 ** n2), e2 = Number(e2.toFixed(n2)), r3 = Number(r3.toFixed(n2)), [e2, r3];
}
function o(t, n2, e2, r3, o2) {
  const i3 = l(t, n2, e2, r3), u3 = null == i3.previous || i3.previous <= o2, c3 = null == i3.next || i3.next <= o2;
  return u3 && c3 || i3.previous + i3.next <= 2 * o2;
}
function i2(t) {
  const e2 = String(t), r3 = e2.match(n);
  if (r3?.[1]) return { integer: r3[1].split("").length, fractional: r3[3] ? r3[3].split("").length : 0 };
  if (e2.toLowerCase().includes("e")) {
    const t2 = e2.split("e"), n2 = t2[0], r4 = t2[1];
    if (n2 && r4) {
      const t3 = Number(n2);
      let e3 = Number(r4);
      const o2 = e3 > 0;
      o2 || (e3 = Math.abs(e3));
      const l2 = i2(t3);
      return o2 ? (l2.integer += e3, e3 > l2.fractional ? l2.fractional = 0 : l2.fractional -= e3) : (l2.fractional += e3, e3 > l2.integer ? l2.integer = 1 : l2.integer -= e3), l2;
    }
  }
  return { integer: 0, fractional: 0 };
}
function l(t, n2, e2, r3) {
  const o2 = { previous: null, next: null };
  if (null != e2) {
    const r4 = t - e2, i3 = n2 - e2 - r4;
    o2.previous = Math.floor(Math.abs(100 * i3 / r4));
  }
  if (null != r3) {
    const e3 = r3 - t, i3 = r3 - n2 - e3;
    o2.next = Math.floor(Math.abs(100 * i3 / e3));
  }
  return o2;
}
function u(t, n2 = {}) {
  const l2 = t.slice(), { tolerance: u3 = 2, strictBounds: c3 = false, indexes: s2 = l2.map((t2, n3) => n3) } = n2;
  s2.sort(e);
  for (let e2 = 0; e2 < s2.length; e2++) {
    const t2 = s2[e2], n3 = l2[t2], a = 0 === t2 ? null : l2[t2 - 1], f2 = t2 === l2.length - 1 ? null : l2[t2 + 1], g2 = i2(n3).fractional;
    if (g2) {
      let i3, s3 = 0, m3 = false;
      for (; s3 <= g2 && !m3; ) {
        const t3 = r2(n3, s3);
        i3 = c3 && 0 === e2 ? t3[1] : t3[0], m3 = o(n3, i3, a, f2, u3), s3++;
      }
      m3 && (l2[t2] = i3);
    }
  }
  return l2;
}
var c = { maximumFractionDigits: 20 };
function s(n2) {
  return h(n2, c);
}

// node_modules/@arcgis/core/widgets/Legend/support/utils.js
var u2 = "<";
var f = ">";
function m2(t, e2, n2, i3) {
  let o2 = "";
  0 === e2 ? o2 = `${u2} ` : e2 === n2 && (o2 = `${f} `);
  const r3 = d2(t, i3);
  return null == r3 ? "" : o2 + r3;
}
function p(t) {
  const { format: e2, fieldFormat: n2 } = t || {};
  return "number" === n2?.type || !!e2 && null == e2.dateFormat && (null != e2.places || null != e2.digitSeparator);
}
function d2(i3, o2) {
  if (null == i3) return i3;
  const { fieldType: r3, format: l2, fieldFormat: s2, timeZoneOptions: u3 } = o2 || {};
  if (U(r3)) return q(i3, { fieldType: r3, format: l2?.dateFormat, fieldFormat: "date-time" === s2?.type ? s2 : void 0, timeZoneOptions: u3 });
  if ("string" == typeof i3 && p(o2)) {
    const t = Number(i3);
    isNaN(t) || (i3 = t);
  }
  if ("string" == typeof i3) return i3;
  const f2 = "number" === s2?.type ? v(s2) : l2 ? D(l2) : void 0;
  return f2 ? h(i3, f2) : s(i3);
}
var c2 = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];
async function g(t) {
  if (!("visualVariables" in t) || !t.visualVariables) return null;
  const e2 = t.visualVariables.find((t2) => "color" === t2.type);
  if (!e2) return null;
  let n2 = null, i3 = null;
  if (e2.stops) {
    if (1 === e2.stops.length) return e2.stops[0].color;
    n2 = e2.stops[0].value, i3 = e2.stops[e2.stops.length - 1].value;
  }
  const o2 = null != n2 && null != i3 ? n2 + (i3 - n2) / 2 : 0, { getColor: r3 } = await import("./visualVariableUtils-NNZDQAX2.js");
  return r3(e2, o2) ?? null;
}
async function w(t, e2) {
  const n2 = t.trailCap, i3 = t.trailWidth || 1, o2 = e2 || await g(t) || t.color;
  return new d({ cap: n2, color: o2, width: i3 });
}
function y(t, e2) {
  if (!e2) return null;
  if ("featureReduction" in t) switch (t.featureReduction?.type) {
    case "cluster":
    case "binning": {
      const n2 = t.featureReduction.fields.find(({ name: t2 }) => t2.toLowerCase() === e2.toLowerCase());
      return n2?.type ? n2 : n2 && "getField" in t ? t.getField(n2.onStatisticField) : null;
    }
  }
  return "getField" in t ? t.getField?.(e2) : null;
}
function I(t, e2) {
  const n2 = "popupTemplate" in t ? t.popupTemplate?.fieldInfos : null;
  if (n2?.length && e2) return n2.find((t2) => t2.fieldName?.toLowerCase() === e2.toLowerCase());
}
function F(t) {
  let e2 = 0, n2 = 0;
  return t.stops ? (e2 = t.stops?.at(0)?.value ?? e2, n2 = t.stops?.at(-1)?.value ?? n2) : "minDataValue" in t && "maxDataValue" in t && (e2 = t.minDataValue ?? e2, n2 = t.maxDataValue ?? n2), n2 - e2 > 2 * r.days ? "short-date" : "short-date-short-time";
}
function U(t) {
  return ["date", "date-only", "time-only", "timestamp-offset"].includes(t || "");
}
function h2(t, e2, n2) {
  const i3 = C(t, e2.field, n2);
  return i3 ? (U(i3.fieldType) && (i3.fieldConfigurationsContainer ? i3.fieldFormat ??= new i({ dateStyle: "short", timeStyle: "short-date-short-time" === F(e2) ? "short" : null }) : i3.format ??= new m({ dateFormat: F(e2) })), i3) : null;
}
function C(t, e2, n2) {
  const i3 = y(t, e2), o2 = i3?.name;
  if (!o2) return null;
  const l2 = i3?.type, a = B(t, { checkFeatureReduction: true });
  return { fieldType: l2, format: a ? null : I(t, o2)?.format, fieldFormat: a ? a.getFieldConfiguration(o2)?.fieldFormat : null, fieldConfigurationsContainer: a, timeZoneOptions: U(l2) ? { layerTimeZone: "preferredTimeZone" in t ? t.preferredTimeZone : null, viewTimeZone: n2, datesInUnknownTimezone: "datesInUnknownTimezone" in t && t.datesInUnknownTimezone } : null };
}
function V(t, e2) {
  if ("authoringInfo" in t) return t.authoringInfo?.visualVariables?.find(({ theme: t2 }) => t2 === e2);
}
function j(t, e2) {
  let n2 = null != t ? t : "";
  return null != e2 && e2 && (n2 = n2 ? "(" + n2 + ") AND (" + e2 + ")" : e2), n2;
}

export {
  i2 as i,
  l,
  u,
  u2,
  f,
  m2 as m,
  d2 as d,
  c2 as c,
  g,
  w,
  h2 as h,
  C,
  V,
  j
};
//# sourceMappingURL=chunk-UGNOWS7W.js.map
