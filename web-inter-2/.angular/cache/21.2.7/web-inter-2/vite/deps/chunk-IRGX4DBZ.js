import {
  c,
  l,
  s
} from "./chunk-3PLUKWC5.js";
import {
  f,
  m,
  u as u2
} from "./chunk-AHEHRQEH.js";
import {
  b as b2
} from "./chunk-3ELL5H57.js";
import {
  b,
  i,
  u
} from "./chunk-NIB6ADTM.js";
import {
  n as n2
} from "./chunk-ZEWMLOOY.js";
import {
  f2
} from "./chunk-ZRWCUWWK.js";
import {
  n2 as n,
  r,
  r3 as r2,
  t
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/intl/substitute.js
var i2 = () => n.getLogger("esri.intl.substitute");
function s2(t2, r4, n3 = {}) {
  const { format: o2 = {} } = n3;
  return r(t2, (t3) => u3(t3, r4, o2));
}
function u3(t2, e, n3) {
  let o2, i4;
  const s4 = t2.indexOf(":");
  if (-1 === s4 ? o2 = t2.trim() : (o2 = t2.slice(0, s4).trim(), i4 = t2.slice(s4 + 1).trim()), !o2) return "";
  const u4 = t(o2, e);
  if (null == u4) return "";
  const m2 = (i4 ? n3?.[i4] : null) ?? n3?.[o2];
  return m2 ? c2(u4, m2) : i4 ? a(u4, i4) : f3(u4);
}
function c2(t2, r4) {
  switch (r4.type) {
    case "date":
      return b2(t2, r4.intlOptions);
    case "number":
      return c(t2, r4.intlOptions);
    default:
      return i2().warn("missing format descriptor for key {key}"), f3(t2);
  }
}
function a(t2, r4) {
  switch (r4.toLowerCase()) {
    case "dateformat":
      return b2(t2);
    case "numberformat":
      return c(t2);
    default:
      return i2().warn(`inline format is unsupported since 4.12: ${r4}`), /^(dateformat|datestring)/i.test(r4) ? b2(t2) : /^numberformat/i.test(r4) ? c(t2) : f3(t2);
  }
}
function f3(t2) {
  switch (typeof t2) {
    case "string":
      return t2;
    case "number":
      return c(t2);
    case "boolean":
      return "" + t2;
    default:
      return t2 instanceof Date ? b2(t2) : "";
  }
}

// node_modules/@arcgis/core/intl/t9n.js
async function r3(e, r4, s4, i4) {
  const a3 = r4.exec(s4);
  if (!a3) throw new r2("esri-intl:invalid-bundle", `Bundle id "${s4}" is not compatible with the pattern "${r4}"`);
  const c3 = a3[1] ? `${a3[1]}/` : "", l3 = a3[2], w2 = m(i4), h2 = `${c3}${l3}.json`, u4 = w2 ? `${c3}${l3}_${w2}.json` : h2;
  let d;
  try {
    d = await o(e(u4));
  } catch (f5) {
    if (u4 === h2) throw new r2("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, { error: f5 });
    try {
      d = await o(e(h2));
    } catch (f6) {
      throw new r2("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, { error: f6 });
    }
  }
  return d;
}
async function o(t2) {
  if (null != a2.fetchBundleAsset) return a2.fetchBundleAsset(t2);
  const n3 = await f2(t2, { responseType: "text" });
  return JSON.parse(n3.data);
}
var s3 = class {
  constructor({ base: e = "", pattern: t2, location: n3 = new URL(window.location.href) }) {
    let r4;
    r4 = "string" == typeof n3 ? (e2) => new URL(e2, new URL(n3, window.location.href)).href : n3 instanceof URL ? (e2) => new URL(e2, n3).href : n3, this.pattern = "string" == typeof t2 ? new RegExp(`^${t2}`) : t2, this.getAssetUrl = r4, e = e ? e.endsWith("/") ? e : e + "/" : "", this.matcher = new RegExp(`^${e}(?:(.*)\\/)?(.*)$`);
  }
  fetchMessageBundle(e, t2) {
    return r3(this.getAssetUrl, this.matcher, e, t2);
  }
};
function i3(e) {
  return new s3(e);
}
var a2 = {};

// node_modules/@arcgis/core/intl.js
var v = s;
var D = l;
var I = i3;
var N2 = f;
var h = c;
var z = i;
var C = u;
var R = b;
var k = u2;
var w = s2;
k(I({ pattern: "esri/", location: n2 }));

export {
  v,
  D,
  N2 as N,
  h,
  z,
  C,
  R,
  w
};
//# sourceMappingURL=chunk-IRGX4DBZ.js.map
