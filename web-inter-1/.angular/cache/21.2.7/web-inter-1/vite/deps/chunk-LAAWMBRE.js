import {
  e
} from "./chunk-RTVKY37F.js";
import {
  a as a2,
  d,
  u3 as u,
  w
} from "./chunk-WARIPJQI.js";
import {
  a,
  has,
  n2 as n,
  r3 as r,
  s2 as s
} from "./chunk-6I475YAP.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/support/jsonUtils.js
function t(t6) {
  return t6 && "object" == typeof t6 && "toJSON" in t6 && "function" == typeof t6.toJSON;
}

// node_modules/@arcgis/core/portal/support/urlUtils.js
var t2 = /^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i;
var e2 = { devext: { customBaseUrl: "mapsdevext.arcgis.com", portalHostname: "devext.arcgis.com" }, qaext: { customBaseUrl: "mapsqa.arcgis.com", portalHostname: "qaext.arcgis.com" }, www: { customBaseUrl: "maps.arcgis.com", portalHostname: "www.arcgis.com" } };
function s2(s5) {
  const a7 = s5?.match(t2);
  if (!a7) return null;
  const [, r4, c5, o] = a7;
  if (!r4) return null;
  let l3 = null, m6 = null, n6 = null;
  const { devext: u2, qaext: i3, www: p5 } = e2;
  if (c5) if (l3 = r4, o) switch (o.toLowerCase()) {
    case "devext":
      ({ customBaseUrl: m6, portalHostname: n6 } = u2);
      break;
    case "qa":
      ({ customBaseUrl: m6, portalHostname: n6 } = i3);
      break;
    default:
      return null;
  }
  else ({ customBaseUrl: m6, portalHostname: n6 } = p5);
  else switch (r4.toLowerCase()) {
    case "devext":
      ({ customBaseUrl: m6, portalHostname: n6 } = u2);
      break;
    case "qaext":
      ({ customBaseUrl: m6, portalHostname: n6 } = i3);
      break;
    case "www":
      ({ customBaseUrl: m6, portalHostname: n6 } = p5);
      break;
    default:
      return null;
  }
  return { customBaseUrl: m6, isPortal: false, portalHostname: n6, urlKey: l3 };
}
function a3(t6) {
  return !!t6 && /\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(t6);
}
function r2(t6) {
  const e7 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, s5 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, a7 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
  return e7.test(t6) ? t6 = t6.replace(e7, "https://www.arcgis.com") : s5.test(t6) ? t6 = t6.replace(s5, "https://devext.arcgis.com") : a7.test(t6) && (t6 = t6.replace(a7, "https://qaext.arcgis.com")), t6;
}

// node_modules/@arcgis/core/support/base64Utils.js
function t3(t6) {
  const n6 = atob(t6), r4 = new Uint8Array(n6.length);
  for (let e7 = 0; e7 < n6.length; e7++) r4[e7] = n6.charCodeAt(e7);
  return r4.buffer;
}
function n2(t6) {
  const n6 = new Uint8Array(t6);
  let r4 = "";
  for (let e7 = 0; e7 < n6.length; e7++) r4 += String.fromCharCode(n6[e7]);
  return btoa(r4);
}

// node_modules/@arcgis/core/core/urlUtils.js
var l = () => n.getLogger("esri.core.urlUtils");
var c = s.request;
var f = "esri/config: esriConfig.request.proxyUrl is not set.";
var a4 = /^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i;
var h = /^\s*http:/i;
var p = /^\s*https:/i;
var m = /^\s*file:/i;
var d2 = /:\d+$/;
var y = /^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;
var g = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$");
var $ = new RegExp("^((([^[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^[:]*))(:([0-9]+))?$");
var x = class {
  constructor(t6 = "") {
    this.uri = t6, this.scheme = null, this.authority = null, this.path = null, this.query = null, this.fragment = null, this.user = null, this.password = null, this.host = null, this.port = null;
    let n6 = this.uri.match(g);
    this.scheme = n6[2] || (n6[1] ? "" : null), this.authority = n6[4] || (n6[3] ? "" : null), this.path = n6[5], this.query = n6[7] || (n6[6] ? "" : null), this.fragment = n6[9] || (n6[8] ? "" : null), null != this.authority && (n6 = this.authority.match($), this.user = n6[3] || null, this.password = n6[4] || null, this.host = n6[6] || n6[7], this.port = n6[9] || null);
  }
  toString() {
    return this.uri;
  }
};
var w2 = {};
var U = new x(s.applicationUrl);
var O = U;
var R = b();
var q = R;
var C = () => O;
var j = () => q;
function b() {
  const t6 = O.path, n6 = t6.slice(0, t6.lastIndexOf("/") + 1);
  return `${`${O.scheme}://${O.host}${null != O.port ? `:${O.port}` : ""}`}${n6}`;
}
function I(t6) {
  if (!t6) return null;
  const n6 = { path: null, query: null }, e7 = new x(t6), r4 = t6.indexOf("?");
  return null === e7.query ? n6.path = t6 : (n6.path = t6.slice(0, r4), n6.query = W(e7.query)), e7.fragment && (n6.hash = e7.fragment, null === e7.query && (n6.path = n6.path.slice(0, n6.path.length - (e7.fragment.length + 1)))), n6;
}
function W(t6) {
  const n6 = t6.split("&"), e7 = {};
  for (const r4 of n6) {
    if (!r4) continue;
    const t7 = r4.indexOf("=");
    let n7, o;
    t7 < 0 ? (n7 = decodeURIComponent(r4), o = "") : (n7 = decodeURIComponent(r4.slice(0, t7)), o = decodeURIComponent(r4.slice(t7 + 1)));
    let s5 = e7[n7];
    "string" == typeof s5 && (s5 = e7[n7] = [s5]), Array.isArray(s5) ? s5.push(o) : e7[n7] = o;
  }
  return e7;
}
function A(t6, n6) {
  return t6 ? n6 && "function" == typeof n6 ? Object.keys(t6).map((e7) => encodeURIComponent(e7) + "=" + encodeURIComponent(n6(e7, t6[e7]))).join("&") : Object.keys(t6).map((e7) => {
    const r4 = t6[e7];
    if (null == r4) return "";
    const s5 = encodeURIComponent(e7) + "=", i3 = n6?.[e7];
    return i3 ? s5 + encodeURIComponent(i3(r4)) : Array.isArray(r4) ? r4.map((t7) => t(t7) ? s5 + encodeURIComponent(JSON.stringify(t7)) : s5 + encodeURIComponent(t7)).join("&") : t(r4) ? s5 + encodeURIComponent(JSON.stringify(r4)) : s5 + encodeURIComponent(r4);
  }).filter((t7) => t7).join("&") : "";
}
function v(t6 = false) {
  let n6, r4 = c.proxyUrl;
  if ("string" == typeof t6) {
    n6 = mt(t6);
    const e7 = H(t6);
    e7 && (r4 = e7.proxyUrl);
  } else n6 = !!t6;
  if (!r4) throw l().warn(f), new r("urlUtils:proxy-not-set", f);
  n6 && wt() && (r4 = $t(r4));
  return I(r4);
}
function P(t6, n6 = false) {
  const e7 = H(t6);
  let r4, o;
  if (e7) {
    const t7 = E(e7.proxyUrl);
    r4 = t7.path, o = t7.query ? W(t7.query) : null;
  } else if (n6) {
    const n7 = v(t6);
    r4 = n7.path, o = n7.query;
  }
  if (r4) {
    const n7 = I(t6);
    t6 = r4 + "?" + n7.path;
    const e8 = A(__spreadValues(__spreadValues({}, o), n7.query));
    e8 && (t6 = `${t6}?${e8}`);
  }
  return t6;
}
var k = { path: "", query: "" };
function E(t6) {
  const n6 = t6.indexOf("?");
  return -1 !== n6 ? (k.path = t6.slice(0, n6), k.query = t6.slice(n6 + 1)) : (k.path = t6, k.query = null), k;
}
function S(t6) {
  return t6 = (t6 = Ut(t6 = Ct(t6 = E(t6).path), true)).toLowerCase();
}
function B(t6) {
  const n6 = { proxyUrl: t6.proxyUrl, urlPrefix: S(t6.urlPrefix) }, e7 = c.proxyRules, r4 = n6.urlPrefix;
  let o = e7.length;
  for (let s5 = 0; s5 < e7.length; s5++) {
    const t7 = e7[s5].urlPrefix;
    if (r4.startsWith(t7)) {
      if (r4.length === t7.length) return -1;
      o = s5;
      break;
    }
    t7.startsWith(r4) && (o = s5 + 1);
  }
  return e7.splice(o, 0, n6), o;
}
function H(t6) {
  const n6 = c.proxyRules, e7 = S(t6);
  for (let r4 = 0; r4 < n6.length; r4++) if (e7.startsWith(n6[r4].urlPrefix)) return n6[r4];
}
function T(t6, n6) {
  if (!t6 || !n6) return false;
  t6 = J(t6), n6 = J(n6);
  const e7 = s2(t6), r4 = s2(n6);
  return null != e7 && null != r4 ? e7.portalHostname === r4.portalHostname : null == e7 && null == r4 && F(t6, n6, true);
}
function D(t6, n6) {
  return t6 = J(t6), n6 = J(n6), Ut(t6) === Ut(n6);
}
function J(t6) {
  const n6 = (t6 = K(t6)).indexOf("/sharing");
  return n6 > 0 ? t6.slice(0, n6) : t6.replace(/\/+$/, "");
}
function N2(t6, n6 = c.interceptors) {
  const e7 = (n7) => n7 instanceof RegExp ? n7.test(t6) : "string" == typeof n7 ? t6.startsWith(n7) : null == n7;
  if (n6) {
    for (const r4 of n6) if (Array.isArray(r4.urls)) {
      if (r4.urls.some(e7)) return r4;
    } else if (e7(r4.urls)) return r4;
  }
  return null;
}
function F(t6, n6, e7 = false) {
  if (!t6 || !n6) return false;
  const r4 = Pt(t6), o = Pt(n6);
  return !(!e7 && r4.scheme !== o.scheme) && (null != r4.host && null != o.host && (r4.host.toLowerCase() === o.host.toLowerCase() && r4.port === o.port));
}
function M(t6) {
  if ("string" == typeof t6) {
    if (!Y(t6)) return true;
    t6 = Pt(t6);
  }
  if (F(t6, O)) return true;
  const n6 = c.trustedServers || [];
  for (let e7 = 0; e7 < n6.length; e7++) {
    const r4 = Q(n6[e7]);
    for (let n7 = 0; n7 < r4.length; n7++) if (F(t6, r4[n7])) return true;
  }
  return false;
}
function Q(t6) {
  return w2[t6] || (pt(t6) || ht(t6) ? w2[t6] = [new x(_(t6))] : w2[t6] = [new x(`http://${t6}`), new x(`https://${t6}`)]), w2[t6];
}
function _(t6, n6 = q, e7) {
  return ht(t6) ? e7?.preserveProtocolRelative ? t6 : "http" === O.scheme && O.authority === X(t6).slice(2) ? `http:${t6}` : `https:${t6}` : pt(t6) ? t6 : V(t6.startsWith("/") ? Ot(n6) : n6, t6);
}
function G(t6, n6 = q, e7) {
  if (null == t6 || !Y(t6)) return t6;
  const r4 = K(t6), o = r4.toLowerCase(), s5 = K(n6).toLowerCase().replace(/\/+$/, ""), i3 = e7 ? K(e7).toLowerCase().replace(/\/+$/, "") : null;
  if (i3 && !s5.startsWith(i3)) return t6;
  const u2 = (t7, n7, e8) => -1 === (e8 = t7.indexOf(n7, e8)) ? t7.length : e8;
  let l3 = u2(o, "/", o.indexOf("//") + 2), c5 = -1;
  for (; o.slice(0, l3 + 1) === s5.slice(0, l3) + "/" && (c5 = l3 + 1, l3 !== o.length); ) l3 = u2(o, "/", l3 + 1);
  if (-1 === c5) return t6;
  if (i3 && c5 < i3.length) return t6;
  t6 = r4.slice(c5);
  const f6 = s5.slice(c5 - 1).replaceAll(/[^/]+/g, "").length;
  if (f6 > 0) for (let a7 = 0; a7 < f6; a7++) t6 = `../${t6}`;
  else t6 = `./${t6}`;
  return t6;
}
function K(t6) {
  return t6 = It(t6 = Lt(t6 = bt(t6 = _(t6 = t6.trim()))));
}
function V(...t6) {
  const e7 = t6.filter(N);
  if (!e7?.length) return;
  const r4 = [];
  if (Y(e7[0])) {
    const t7 = e7[0], n6 = t7.indexOf("//");
    -1 !== n6 && (r4.push(t7.slice(0, n6 + 1)), yt(e7[0]) && (r4[0] += "/"), e7[0] = t7.slice(n6 + 2));
  } else e7[0].startsWith("/") && r4.push("");
  const o = e7.reduce((t7, n6) => n6 ? t7.concat(n6.split("/")) : t7, []);
  for (let n6 = 0; n6 < o.length; n6++) {
    const t7 = o[n6];
    ".." === t7 && r4.length > 0 && ".." !== r4[r4.length - 1] ? r4.pop() : (!t7 && n6 === o.length - 1 || t7 && ("." !== t7 || 0 === r4.length)) && r4.push(t7);
  }
  return r4.join("/");
}
function X(t6, n6 = false) {
  if (null == t6 || Z(t6) || tt(t6)) return null;
  let e7 = t6.indexOf("://");
  if (-1 === e7 && ht(t6)) e7 = 2;
  else {
    if (-1 === e7) return null;
    e7 += 3;
  }
  const r4 = t6.indexOf("/", e7);
  return -1 !== r4 && (t6 = t6.slice(0, r4)), n6 && (t6 = Ut(t6, true)), t6;
}
function Y(t6) {
  return ht(t6) || pt(t6);
}
function Z(t6) {
  return null != t6 && t6.startsWith("blob:");
}
function tt(t6) {
  return null != t6 && t6.startsWith("data:");
}
function nt(t6) {
  const n6 = ot(t6);
  return n6?.isBase64 ? t3(n6.data) : null;
}
function et(t6) {
  return n2(t6).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
var rt = /^data:(.*?)(;base64)?,(.*)$/;
function ot(t6) {
  const n6 = t6.match(rt);
  if (!n6) return null;
  const [, e7, r4, o] = n6;
  return { mediaType: e7, isBase64: !!r4, data: o };
}
function st(t6) {
  return t6.isBase64 ? `data:${t6.mediaType};base64,${t6.data}` : `data:${t6.mediaType},${t6.data}`;
}
async function it(t6) {
  return (await fetch(t6)).blob();
}
function ut(t6) {
  const n6 = nt(t6);
  if (!n6) return null;
  const e7 = ot(t6);
  return new Blob([n6], { type: e7.mediaType });
}
function ht(t6) {
  return null != t6 && t6.startsWith("/") && "/" === t6[1];
}
function pt(t6) {
  return null != t6 && a4.test(t6);
}
function mt(t6) {
  return null != t6 && p.test(t6) || "https" === O.scheme && ht(t6);
}
function dt(t6) {
  return null != t6 && h.test(t6) || "http" === O.scheme && ht(t6);
}
function yt(t6) {
  return null != t6 && m.test(t6);
}
function $t(t6) {
  return ht(t6) ? `https:${t6}` : t6.replace(h, "https:");
}
function xt() {
  return "http" === O.scheme;
}
function wt() {
  return "https" === O.scheme;
}
function Ut(t6, n6 = false) {
  return ht(t6) ? t6.slice(2) : (t6 = t6.replace(a4, ""), n6 && t6.length > 1 && t6.startsWith("/") && "/" === t6[1] && (t6 = t6.slice(2)), t6);
}
function Ot(t6) {
  const n6 = t6.indexOf("//"), e7 = t6.indexOf("/", n6 + 2);
  return -1 === e7 ? t6 : t6.slice(0, e7);
}
function Rt(t6) {
  let n6 = 0;
  if (Y(t6)) {
    const e8 = t6.indexOf("//");
    -1 !== e8 && (n6 = e8 + 2);
  }
  const e7 = t6.lastIndexOf("/");
  return e7 < n6 ? t6 : t6.slice(0, e7 + 1);
}
function qt(t6, n6) {
  if (!t6) return "";
  const e7 = I(t6).path.replace(/\/+$/, ""), r4 = e7.slice(e7.lastIndexOf("/") + 1);
  if (!n6?.length) return r4;
  const o = new RegExp(`\\.(${n6.join("|")})$`, "i");
  return r4.replace(o, "");
}
function Ct(t6) {
  return t6.endsWith("/") ? t6 : `${t6}/`;
}
function jt(t6) {
  return t6.replace(/\/+$/, "");
}
function bt(t6) {
  if (/^https?:\/\//i.test(t6)) {
    const n6 = E(t6);
    t6 = (t6 = n6.path.replaceAll(/\/{2,}/g, "/")).replace("/", "//"), n6.query && (t6 += `?${n6.query}`);
  }
  return t6;
}
function Lt(t6) {
  return t6.replace(/^(https?:\/\/)(arcgis\.com)/i, "$1www.$2");
}
function It(t6) {
  const n6 = c.httpsDomains;
  if (!dt(t6)) return t6;
  const e7 = t6.indexOf("/", 7);
  let r4;
  if (r4 = -1 === e7 ? t6 : t6.slice(0, e7), r4 = r4.toLowerCase().slice(7), d2.test(r4)) {
    if (!r4.endsWith(":80")) return t6;
    r4 = r4.slice(0, -3), t6 = t6.replace(":80", "");
  }
  return xt() && r4 === O.authority && !y.test(t6) || (wt() && r4 === O.authority || n6 && n6.some((t7) => r4 === t7 || r4.endsWith(`.${t7}`)) || wt() && !H(t6)) && (t6 = $t(t6)), t6;
}
function Wt(t6, n6, e7) {
  if (!(n6 && e7 && t6 && Y(t6))) return t6;
  const r4 = t6.indexOf("//"), o = t6.indexOf("/", r4 + 2), s5 = t6.indexOf(":", r4 + 2), i3 = Math.min(o < 0 ? t6.length : o, s5 < 0 ? t6.length : s5);
  if (t6.slice(r4 + 2, i3).toLowerCase() !== n6.toLowerCase()) return t6;
  return `${t6.slice(0, r4 + 2)}${e7}${t6.slice(i3)}`;
}
function At(t6, n6) {
  const e7 = new URL(t6);
  return e7.host = n6, e7.port && !d2.test(n6) && (e7.port = ""), e7.toString();
}
function vt(t6) {
  return new URL(t6).host;
}
function Pt(t6) {
  return "string" == typeof t6 ? new x(_(t6)) : (t6.scheme || (t6.scheme = O.scheme), t6);
}
function kt(t6) {
  return Nt.test(t6);
}
function Et(t6, n6) {
  const e7 = I(t6), r4 = Object.keys(e7.query || {});
  return r4.length > 0 && n6 && n6.warn("removeQueryParameters()", `Url query parameters are not supported, the following parameters have been removed: ${r4.join(", ")}.`), e7.path;
}
function St(t6, n6, e7) {
  const r4 = I(t6), o = r4.query || {};
  return o[n6] = String(e7), `${r4.path}?${A(o)}`;
}
function Bt(t6, n6) {
  if (!n6) return t6;
  const e7 = I(t6), r4 = e7.query || {};
  for (const [s5, i3] of Object.entries(n6)) null != i3 && (r4[s5] = i3);
  const o = A(r4);
  return o ? `${e7.path}?${o}` : e7.path;
}
function Tt(t6) {
  if (null == t6) return null;
  const n6 = t6.match(Jt);
  return n6 ? n6[2] : null;
}
function zt(t6) {
  if (null == t6) return null;
  const n6 = t6.match(Jt);
  return n6 ? { path: n6[1], extension: n6[2] } : { path: t6, extension: null };
}
async function Dt(t6) {
  if ("string" == typeof t6) {
    return ot(t6) ?? { data: t6 };
  }
  return new Promise((n6, e7) => {
    const r4 = new FileReader();
    r4.readAsDataURL(t6), r4.onload = () => n6(ot(r4.result)), r4.onerror = (t7) => e7(t7);
  });
}
var Jt = /([^.]*)\.([^/]*)$/;
var Nt = /(^data:image\/svg|\.svg$)/i;

// node_modules/@arcgis/core/support/revision.js
var e3 = "20260408";
var c2 = "42814086fee36c824cdfe45c9030212c4e8e8ff2";

// node_modules/@arcgis/core/kernel.js
Symbol.dispose ??= /* @__PURE__ */ Symbol("Symbol.dispose"), Symbol.asyncDispose ??= /* @__PURE__ */ Symbol("Symbol.asyncDispose");
var e4 = "5.0";
var s3;
var r3 = e4;
function i(o) {
  s3 = o;
}
function t4(e7) {
  const r4 = s3?.findCredential(e7);
  return r4?.token ? St(e7, "token", r4.token) : e7;
}
r3 = "5.0.16", has("host-webworker") || globalThis.$arcgis || Object.defineProperty(globalThis, "$arcgis", { configurable: false, enumerable: true, writable: false, value: {} }), has("host-webworker");

// node_modules/@arcgis/core/chunks/persistableUrlUtils.js
function p2(e7, s5) {
  const o = s5?.url?.path;
  if (e7 && o && (e7 = _(e7, o, { preserveProtocolRelative: true }), s5.portalItem && s5.readResourcePaths)) {
    const t6 = G(e7, s5.portalItem.itemUrl);
    null != t6 && t6.startsWith(U2) && s5.readResourcePaths.push(s5.portalItem.resourceFromPath(t6).path);
  }
  return (e7 = I2(e7, s5?.portal)) && d3.test(e7) ? R2(e7) : e7;
}
function m2(e7, n6, a7 = 0) {
  if (null == (e7 = e7 && d3.test(e7) ? w3(e7) : e7)) return e7;
  !Y(e7) && n6?.blockedRelativeUrls && n6.blockedRelativeUrls.push(e7);
  let c5 = _(e7);
  if (n6) {
    const t6 = n6.verifyItemRelativeUrls?.rootPath || n6.url?.path;
    if (t6) {
      const s5 = I2(t6, n6.portal), o = I2(c5, n6.portal);
      c5 = G(o, s5, s5);
      null != c5 && c5 !== o && c5 !== e7 && n6.verifyItemRelativeUrls && n6.verifyItemRelativeUrls.writtenUrls.push(c5);
    }
  }
  return c5 = x2(c5, n6?.portal), Y(c5) && (c5 = K(c5)), n6?.resources && n6?.portalItem && !Y(c5) && !tt(c5) && 0 === a7 && n6.resources.toKeep.push({ resource: n6.portalItem.resourceFromPath(c5), compress: false }), c5;
}
function f2(e7, t6, r4) {
  return p2(e7, r4);
}
function h2(e7, t6, r4, s5) {
  const o = m2(e7, s5);
  void 0 !== o && (t6[r4] = o);
}
var d3 = /\/items\/([^/]+)\/resources\/(.*)/;
var U2 = "./resources/";
function v2(e7) {
  const t6 = e7?.match(d3) ?? null;
  return t6?.[1] ?? null;
}
function g2(e7) {
  const t6 = e7?.match(d3) ?? null;
  if (null == t6) return null;
  const r4 = t6[2], s5 = r4.lastIndexOf("/");
  if (-1 === s5) {
    const { path: e8, extension: t7 } = zt(r4);
    return { prefix: null, filename: e8, extension: t7 };
  }
  const { path: o, extension: l3 } = zt(r4.slice(s5 + 1));
  return { prefix: r4.slice(0, s5), filename: o, extension: l3 };
}
function x2(e7, t6) {
  return t6 && !t6.isPortal && t6.urlKey && t6.customBaseUrl ? Wt(e7, `${t6.urlKey}.${t6.customBaseUrl}`, t6.portalHostname) : e7;
}
function I2(e7, t6) {
  if (!t6 || t6.isPortal || !t6.urlKey || !t6.customBaseUrl) return e7;
  const r4 = `${t6.urlKey}.${t6.customBaseUrl}`, s5 = C();
  return F(s5, `${s5.scheme}://${r4}`) ? Wt(e7, t6.portalHostname, r4) : Wt(e7, r4, t6.portalHostname);
}
function R2(t6) {
  if (!t6) return t6 || null;
  let r4 = t6;
  return r4 && s3 && !s3.findCredential(r4) && (r4 = r2(r4), r4 = r4.replace(/^https?:\/\/www\.arcgis\.com/, "https://cdn.arcgis.com"), r4 = r4.replace(/^https?:\/\/devext\.arcgis\.com/, "https://cdndev.arcgis.com"), r4 = r4.replace(/^https?:\/\/qaext\.arcgis\.com/, "https://cdnqa.arcgis.com")), r4;
}
function w3(t6) {
  if (!t6) return t6 || null;
  let r4 = t6;
  return r4 = r4.replace(/^https?:\/\/cdn\.arcgis\.com/, "https://www.arcgis.com"), r4 = r4.replace(/^https?:\/\/cdndev\.arcgis\.com/, "https://devext.arcgis.com"), r4 = r4.replace(/^https?:\/\/cdnqa\.arcgis\.com/, "https://qaext.arcgis.com"), r4 && s3 && !s3.findCredential(r4) && (r4 = r2(r4)), r4;
}
var y2 = Object.freeze(Object.defineProperty({ __proto__: null, ensureMainOnlineDomain: x2, fromCDNUrl: w3, fromJSON: p2, itemIdFromResourceUrl: v2, prefixAndFilenameFromResourceUrl: g2, read: f2, toCDNUrl: R2, toJSON: m2, write: h2 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var a5 = { mapserver: "MapServer", imageserver: "ImageServer", featureserver: "FeatureServer", knowledgegraphserver: "KnowledgeGraphServer", sceneserver: "SceneServer", streamserver: "StreamServer", vectortileserver: "VectorTileServer", "3dtilesserver": "3DTilesServer", videoserver: "VideoServer" };
var c3 = Object.values(a5);
var v3 = new RegExp(`^(?<path>(?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(?<serviceTitle>.+?)\\/(?<serverType>${c3.join("|")})(?:\\/exts\\/(?<soeTitle>.+?)\\/(?<soeServerType>${c3.join("|")}))?)(?:\\/(?:layers))?(?:\\/(?<sublayer>\\d+))?`, "i");
var p3 = new RegExp(`^(?<path>(?:https?:)?\\/\\/\\S+?\\/(?<serviceTitle>[^/\\n]+)\\/(?<serverType>${c3.join("|")}))(?:\\/(?:layers))?(?:\\/(?<sublayer>\\d+))?`, "i");
var f3 = /(.*?)\/(?:layers\/)?(\d+)\/?$/i;
function d4(e7) {
  return v3.test(e7);
}
function m3(r4) {
  if (null == r4) return null;
  const t6 = I(r4), s5 = t6?.path.match(v3) || t6?.path.match(p3);
  if (!s5) return null;
  const { path: n6, serviceTitle: l3, serverType: i3, soeTitle: o, soeServerType: u2, sublayer: c5 } = s5.groups ?? {}, f6 = o || l3, d6 = f6.indexOf("/");
  return { title: y3(-1 !== d6 ? f6.slice(d6 + 1) : f6), serverType: a5[(u2 || i3).toLowerCase()], sublayer: null != c5 && "" !== c5 ? parseInt(c5, 10) : null, url: { path: n6 } };
}
function h3(r4) {
  const t6 = I(r4).path.match(f3);
  return t6 ? { serviceUrl: t6[1], sublayerId: Number(t6[2]) } : null;
}
function y3(e7) {
  return (e7 = e7.replaceAll(/\s*[/_]+\s*/g, " "))[0].toUpperCase() + e7.slice(1);
}
function w4(e7, r4) {
  const t6 = [];
  if (e7) {
    const r5 = m3(e7);
    null != r5 && r5.title && t6.push(r5.title);
  }
  if (r4) {
    const e8 = y3(r4);
    t6.push(e8);
  }
  if (2 === t6.length) {
    if (t6[0].toLowerCase().includes(t6[1].toLowerCase())) return t6[0];
    if (t6[1].toLowerCase().includes(t6[0].toLowerCase())) return t6[1];
  }
  return t6.join(" - ");
}
var g3 = ["services", "features", "tiles", "elevation3d", "basemaps3d"];
function S2(e7) {
  let t6 = X(e7, true);
  return !!t6 && (t6 = t6.toLowerCase(), !!t6.endsWith(".arcgis.com") && (!!g3.some((e8) => t6.startsWith(e8)) || /^[a-z\d-]+\.svcs[a-z\d-]*\./.test(t6)));
}
function T2(e7) {
  return a3(e7) && b2(e7);
}
function b2(e7) {
  const t6 = X(e7);
  return !!t6 && t6.toLowerCase().endsWith(".arcgis.com");
}
function C2(e7, r4) {
  return e7 ? jt(Et(e7, r4)) : e7;
}
function L(r4) {
  let { url: t6 } = r4;
  if (!t6) return { url: t6 };
  t6 = Et(t6, r4.logger);
  const l3 = I(t6), i3 = m3(l3.path);
  let o;
  if (null != i3) null != i3.sublayer && null == r4.layer.layerId && (o = i3.sublayer), t6 = i3.url.path;
  else if (r4.nonStandardUrlAllowed) {
    const e7 = h3(l3.path);
    null != e7 && (t6 = e7.serviceUrl, o = e7.sublayerId);
  }
  return { url: jt(t6), layerId: o };
}
function j2(e7, r4, s5, n6, l3) {
  h2(r4, n6, "url", l3), n6.url && null != e7.layerId && (n6.url = V(n6.url, s5, e7.layerId.toString()));
}
function I3(e7) {
  if (!e7) return false;
  const r4 = e7.toLowerCase(), t6 = r4.includes("/services/"), s5 = r4.includes("/mapserver/wmsserver"), n6 = r4.includes("/imageserver/wmsserver"), l3 = r4.includes("/wmsserver");
  return t6 && (s5 || n6 || l3);
}
function U3(e7) {
  if (!e7) return false;
  const r4 = new x(_(e7)), t6 = r4.authority?.toLowerCase();
  return "server.arcgisonline.com" === t6 || "services.arcgisonline.com" === t6;
}

// node_modules/@arcgis/core/request/config.js
var e5 = { corsServers: ["https://server.arcgisonline.com", "https://services.arcgisonline.com"], beforeFetch: void 0, afterFetch: void 0, isForeignWorker: false };

// node_modules/@arcgis/core/request/cors.js
function n3(r4) {
  s.request.crossOriginNoCorsDomains || (s.request.crossOriginNoCorsDomains = {});
  const t6 = s.request.crossOriginNoCorsDomains;
  for (let o of r4) o = o.toLowerCase(), /^https?:\/\//.test(o) ? t6[X(o) ?? ""] = 0 : (t6[X("http://" + o) ?? ""] = 0, t6[X("https://" + o) ?? ""] = 0);
}
function i2(e7) {
  const n6 = s.request.crossOriginNoCorsDomains;
  if (n6) {
    let o = X(e7);
    if (o) return o = o.toLowerCase(), !F(o, C()) && n6[o] < Date.now() - 36e5;
  }
  return false;
}
async function c4(r4) {
  const t6 = I(r4);
  r4 = t6.path, "json" === t6.query?.f && (r4 += "?f=json");
  try {
    await fetch(r4, { mode: "no-cors", credentials: "include" });
  } catch {
  }
  const n6 = s.request.crossOriginNoCorsDomains, i3 = X(r4);
  n6 && i3 && (n6[i3.toLowerCase()] = Date.now());
}

// node_modules/@arcgis/core/request/ImageWithType.js
var e6 = class {
  constructor(e7, n6) {
    this.element = e7, this.type = "image+type", this.isOpaque = "image/jpeg" === n6;
  }
};
function n4(e7) {
  if (e7.byteLength < 2) return "unknown";
  const n6 = new Uint8Array(e7, 0, e7.byteLength);
  return 137 === n6[0] && 80 === n6[1] ? "image/png" : 71 === n6[0] && 73 === n6[1] ? "image/gif" : 66 === n6[0] && 77 === n6[1] ? "image/bmp" : 255 === n6[0] && 216 === n6[1] ? "image/jpeg" : "unknown";
}

// node_modules/@arcgis/core/request/loadImage.js
function t5(t6, n6, o = false, i3) {
  return new Promise((s5, l3) => {
    if (a2(i3)) return void l3(u());
    let a7 = () => {
      v4(), l3(new Error(`Unable to load ${n6}`));
    }, d6 = async () => {
      const e7 = t6;
      try {
        await e7.decode();
      } catch {
      }
      v4(), s5(e7);
    }, c5 = () => {
      if (!t6) return;
      const e7 = t6;
      v4(), e7.src = "", l3(u());
    };
    const v4 = () => {
      t6 && (t6.removeEventListener("error", a7), t6.removeEventListener("load", d6), a7 = null, d6 = null, t6 = null, i3?.removeEventListener("abort", c5), c5 = null, o && URL.revokeObjectURL(n6));
    };
    i3?.addEventListener("abort", c5), t6.addEventListener("error", a7), t6.addEventListener("load", d6);
  });
}

// node_modules/@arcgis/core/request/preferredHosts.js
var s4 = /* @__PURE__ */ new Map();
function n5(t6, n6) {
  const p5 = n6?.preferredHost;
  if (!p5 || F(t6, `https://${p5}`, true)) return;
  const u2 = m3(t6);
  if (!u2 || "FeatureServer" !== u2.serverType || a3(t6)) return;
  const a7 = u2.url.path.toLowerCase();
  s4.has(a7) || s4.set(a7, p5);
}
function p4(r4) {
  const o = m3(r4)?.url.path.toLowerCase();
  if (!o) return r4;
  const n6 = s4.get(o);
  return n6 ? At(r4, n6) : r4;
}

// node_modules/@arcgis/core/request/process.js
var L2 = "FormData" in globalThis;
var E2 = /* @__PURE__ */ new Set([499, 498, 403, 401]);
var U4 = /* @__PURE__ */ new Set(["COM_0056", "COM_0057", "SB_0008"]);
var A2 = [/\/arcgis\/tokens/i, /\/sharing(\/rest)?\/generatetoken/i, /\/rest\/info/i];
async function P2(r4) {
  let s5, o;
  await H2(r4);
  try {
    do {
      [s5, o] = await I4(r4);
    } while (!await W2(r4, s5, o));
  } catch (u2) {
    const e7 = _2("request:server", u2, r4.parameters, s5);
    throw e7.details.ssl = r4.useSSL, r4.interceptor?.error?.(e7), e7;
  }
  const a7 = r4.parameters.url;
  if (o) if (/\/sharing\/rest\/(accounts|portals)\/self/i.test(a7)) {
    if (!r4.hasToken && !r4.credentialToken && o.user?.username && !M(a7)) {
      const t6 = X(a7, true);
      t6 && s.request.trustedServers.push(t6);
    }
    Array.isArray(o.authorizedCrossOriginNoCorsDomains) && n3(o.authorizedCrossOriginNoCorsDomains);
  } else {
    "json" === (r4.parameters.requestOptions.responseType || "json") && n5(a7, o);
  }
  const n6 = r4.credential;
  if (n6 && s3) {
    const e7 = s3.findServerInfo(n6.server);
    let r5 = e7?.owningSystemUrl;
    if (r5) {
      r5 = r5.replace(/\/?$/, "/sharing");
      const e8 = s3.findCredential(r5, n6.userId);
      e8 && -1 === s3._getIdenticalSvcIdx(r5, e8) && e8.resources.unshift(r5);
    }
  }
  return { data: o, getAllHeaders: s5 ? () => Array.from(s5.headers) : G2, getHeader: s5 ? (e7) => s5.headers.get(e7) : G2, httpStatus: s5?.status ?? 200, requestOptions: r4.parameters.requestOptions, ssl: r4.useSSL, url: r4.parameters.url };
}
async function H2(r4) {
  const s5 = r4.parameters.url, o = r4.parameters.requestOptions, a7 = r4.controller.signal, i3 = o.body;
  let l3 = null, u2 = null;
  if (L2 && "HTMLFormElement" in globalThis && (i3 instanceof FormData ? l3 = i3 : i3 instanceof HTMLFormElement && (l3 = new FormData(i3))), "string" == typeof i3 && (u2 = i3), r4.fetchOptions = { cache: o.cacheMode ?? (o.cacheBust ? "no-cache" : "default"), credentials: "same-origin", headers: o.headers || {}, keepalive: o.keepAlive ?? false, method: "head" === o.method ? "HEAD" : "GET", mode: "cors", priority: o.priority ?? s.request.priority, redirect: "follow", signal: a7 }, (l3 || u2) && (r4.fetchOptions.body = l3 || u2), (e5.isForeignWorker || "anonymous" === o.authMode) && (r4.useIdentity = false), r4.hasToken = !!(/token=/i.test(s5) || o.query?.token || l3?.get("token")), !r4.hasToken) {
    const { getApiKey: e7, getSessionToken: t6 } = await import("./apiKeyUtils-2BMRIH6X.js"), a8 = await t6(s5) ?? e7(s5);
    a8 && (o.query ??= {}, o.query.token = a8, r4.hasToken = true);
  }
  if (r4.useIdentity && !r4.hasToken && !r4.credential && !r4.credentialToken && !N3(s5) && !a2(a7)) {
    let e7;
    "immediate" === o.authMode ? (await R3(), e7 = await s3.getCredential(s5, { signal: a7 })) : "no-prompt" === o.authMode ? (await R3(), e7 = await s3.getCredential(s5, { prompt: false, signal: a7 }).catch(() => {
    })) : s3 && (e7 = s3.findCredential(s5)), e7 && (r4.credential = e7, r4.credentialToken = e7.token, r4.useSSL = !!e7.ssl);
  }
}
async function I4(r4) {
  let s5 = r4.parameters.url, o = p4(s5);
  const n6 = r4.parameters.requestOptions, k2 = r4.fetchOptions ?? {}, x3 = Z(s5) || tt(s5), j3 = n6.responseType ?? "json", E3 = "image" === j3 && n6.imageWithType, U5 = x3 ? 0 : null != n6.timeout ? n6.timeout : s.request.timeout;
  let A3 = false;
  if (!x3) {
    r4.useSSL && (s5 = $t(s5));
    let a7 = __spreadValues({}, n6.query);
    r4.credentialToken && (a7.token = r4.credentialToken);
    let l3 = A(a7);
    has("esri-url-encodes-apostrophe") && (l3 = l3.replaceAll("'", "%27"));
    const u2 = o.length + 1 + l3.length;
    let c5;
    A3 = "delete" === n6.method || "post" === n6.method || "put" === n6.method || !!n6.body || u2 > s.request.maxUrlLength;
    const g4 = n6.useProxy || !!H(s5);
    if (g4) {
      const t6 = v(s5);
      c5 = t6.path, !A3 && c5.length + 1 + u2 > s.request.maxUrlLength && (A3 = true), t6.query && (a7 = __spreadValues(__spreadValues({}, t6.query), a7));
    }
    if ("HEAD" === k2.method && (A3 || g4)) {
      if (A3) {
        if (u2 > s.request.maxUrlLength) throw _2("request:invalid-parameters", new Error("URL exceeds maximum length"), r4.parameters);
        throw _2("request:invalid-parameters", new Error("cannot use POST request when method is 'head'"), r4.parameters);
      }
      if (g4) throw _2("request:invalid-parameters", new Error("cannot use proxy when method is 'head'"), r4.parameters);
    }
    if (A3 ? (k2.method = "delete" === n6.method ? "DELETE" : "put" === n6.method ? "PUT" : "POST", n6.body ? s5 = Bt(s5, a7) : (k2.body = A(a7), k2.headers || (k2.headers = {}), k2.headers["Content-Type"] = "application/x-www-form-urlencoded")) : s5 = Bt(s5, a7), g4 && (r4.useProxy = true, s5 = `${c5}?${s5}`), a7.token && L2 && k2.body instanceof FormData && !a3(s5) && k2.body.set("token", a7.token), n6.hasOwnProperty("withCredentials")) r4.withCredentials = n6.withCredentials;
    else if (!F(s5, C())) {
      if (M(s5)) r4.withCredentials = true;
      else if (s3) {
        const e7 = s3.findServerInfo(s5);
        e7?.webTierAuth && (r4.withCredentials = true);
      }
    }
    r4.withCredentials && (k2.credentials = "include", i2(s5) && await c4(A3 ? Bt(s5, a7) : s5)), o = p4(s5);
  }
  let P3, H3, R4 = 0, N4 = false;
  U5 > 0 && (R4 = setTimeout(() => {
    N4 = true, r4.controller.abort();
  }, U5));
  try {
    if ("native-request-init" === n6.responseType) H3 = k2, H3.url = o, n6.signal ? H3.signal = n6.signal : delete H3.signal;
    else if ("image" !== n6.responseType || "default" !== k2.cache || k2.keepalive || "GET" !== k2.method || A3 || B2(n6.headers) || !x3 && !r4.useProxy && s.request.proxyUrl && !F2(s5)) {
      if (await e5.beforeFetch?.(s5, k2), P3 = await fetch(o, k2), await e5.afterFetch?.(P3), r4.useProxy || D2(s5), "native" === n6.responseType) H3 = P3;
      else if ("HEAD" !== k2.method) if (P3.ok) {
        switch (j3) {
          case "array-buffer":
            H3 = await P3.arrayBuffer();
            break;
          case "blob":
            H3 = await P3.blob();
            break;
          case "image":
            H3 = await (E3 ? P3.arrayBuffer() : P3.blob());
            break;
          default:
            H3 = await P3.text();
        }
        if (R4 && (clearTimeout(R4), R4 = 0), "json" === j3 || "xml" === j3 || "document" === j3) if (H3) switch (j3) {
          case "json":
            H3 = JSON.parse(H3);
            break;
          case "xml":
            H3 = $2(H3, "application/xml");
            break;
          case "document":
            H3 = $2(H3, "text/html");
        }
        else H3 = null;
        if (H3) {
          if (("array-buffer" === j3 || "blob" === j3) && H3["blob" === j3 ? "size" : "byteLength"] <= 750) try {
            const e7 = await new Response(H3).json();
            e7.error && (H3 = e7);
          } catch {
          }
          if (E3 && H3 instanceof ArrayBuffer) {
            const e7 = n4(H3);
            if ("unknown" === e7) return n6.responseType = "image", await I4(r4);
            H3 = await P3.blob(), H3 = await M2(URL.createObjectURL(H3), r4, true), H3 = new e6(H3, e7);
          }
          "image" === j3 && H3 instanceof Blob && (H3 = await M2(URL.createObjectURL(H3), r4, true));
        }
      } else {
        H3 = await P3.text();
        try {
          H3 = JSON.parse(H3);
        } catch {
        }
      }
    } else H3 = await M2(o, r4);
  } catch (W3) {
    if ("AbortError" === W3.name) {
      if (N4) throw K2();
      throw u("Request canceled");
    }
    if (!(!P3 && W3 instanceof TypeError && s.request.proxyUrl) || n6.body || "delete" === n6.method || "head" === n6.method || "post" === n6.method || "put" === n6.method || r4.useProxy || F2(s5)) throw W3;
    r4.redoRequest = true, B({ proxyUrl: s.request.proxyUrl, urlPrefix: X(s5) ?? "" });
  } finally {
    R4 && clearTimeout(R4);
  }
  return [P3, H3];
}
function M2(t6, r4, s5 = false) {
  const o = r4.controller.signal, a7 = new Image();
  return r4.withCredentials ? a7.crossOrigin = "use-credentials" : a7.crossOrigin = "anonymous", a7.alt = "", a7.fetchPriority = s.request.priority, a7.src = t6, t5(a7, t6, s5, o);
}
function D2(e7) {
  const t6 = X(e7);
  t6 && !e5.corsServers.includes(t6) && e5.corsServers.push(t6);
}
function F2(e7) {
  const t6 = X(e7);
  return !t6 || t6.endsWith(".arcgis.com") || e5.corsServers.includes(t6) || M(t6);
}
async function R3() {
  s3 || await import("./IdentityManager-KRK4DALP.js");
}
function N3(e7) {
  return A2.some((t6) => t6.test(e7));
}
function B2(e7) {
  if (e7) {
    for (const t6 of Object.getOwnPropertyNames(e7)) if (e7[t6]) return true;
  }
  return false;
}
function $2(e7, t6) {
  let r4;
  try {
    r4 = new DOMParser().parseFromString(e7, t6);
  } catch {
  }
  if (!r4 || r4.getElementsByTagName("parsererror").length) throw new SyntaxError("XML Parse error");
  return r4;
}
async function W2(e7, r4, s5) {
  if (e7.redoRequest) return e7.redoRequest = false, false;
  const o = e7.parameters.requestOptions;
  if (!r4 || "native" === o.responseType || "native-request-init" === o.responseType) return true;
  let a7, n6;
  if (s5 && (s5.error && "object" == typeof s5.error ? a7 = s5.error : "error" === s5.status && Array.isArray(s5.messages) && (a7 = __spreadValues({}, s5), a7[z] = s5, a7.details = s5.messages)), !a7 && !r4.ok) throw a7 = new Error(`Unable to load ${r4.url} status: ${r4.status}`), a7[z] = s5, a7;
  let i3, l3 = null;
  a7 && (n6 = Number(a7.code), l3 = a7.hasOwnProperty("subcode") ? Number(a7.subcode) : null, i3 = a7.messageCode, i3 = i3?.toUpperCase());
  const u2 = o.authMode;
  if (403 === n6 && (4 === l3 || a7.message?.toLowerCase().includes("ssl") && !a7.message.toLowerCase().includes("permission"))) {
    if (!e7.useSSL) return e7.useSSL = true, false;
  } else if (!e7.hasToken && e7.useIdentity && ("no-prompt" !== u2 || 498 === n6) && void 0 !== n6 && E2.has(n6) && !N3(e7.parameters.url) && (403 !== n6 || (!i3 || !U4.has(i3)) && (null == l3 || 2 === l3 && e7.credentialToken))) {
    await R3();
    try {
      const r5 = await s3.getCredential(e7.parameters.url, { error: _2("request:server", a7, e7.parameters), credential: e7.credential, prompt: "no-prompt" !== u2, signal: e7.controller.signal, token: e7.credentialToken });
      return e7.credential = r5, e7.credentialToken = r5.token, e7.useSSL = e7.useSSL || r5.ssl, false;
    } catch (c5) {
      if ("no-prompt" === u2) return e7.credential = void 0, e7.credentialToken = void 0, false;
      a7 = c5;
    }
  }
  if (a7) throw a7;
  return true;
}
function _2(e7, t6, n6, i3) {
  let l3;
  const u2 = { url: n6.url, requestOptions: n6.requestOptions, getAllHeaders: G2, getHeader: G2, ssl: false };
  if (t6 instanceof r) return t6.details ? (t6.details = a(t6.details), t6.details.url = n6.url, t6.details.requestOptions = n6.requestOptions) : t6.details = u2, t6;
  if (t6) {
    const e8 = i3 && (() => Array.from(i3.headers)), r4 = i3 && ((e9) => i3.headers.get(e9)), s5 = i3?.status, o = t6.message;
    o && (l3 = o), e8 && r4 && (u2.getAllHeaders = e8, u2.getHeader = r4), u2.httpStatus = (null != t6.httpCode ? t6.httpCode : t6.code) || s5 || 0, u2.subCode = t6.subcode, u2.messageCode = t6.messageCode, "string" == typeof t6.details ? (u2.messages = [t6.details], l3 ??= t6.details) : (u2.messages = t6.details, l3 ??= u2.messages?.[0]), u2.raw = z in t6 ? t6[z] : t6;
  }
  return l3 ??= "Error", d(t6) ? u() : new r(e7, l3, u2);
}
var z = /* @__PURE__ */ Symbol();
var G2 = () => null;
var J2 = "Timeout exceeded";
function K2() {
  return new Error(J2);
}
function X2(e7) {
  return "object" == typeof e7 && !!e7 && "message" in e7 && e7.message === J2;
}

// node_modules/@arcgis/core/request/queue.js
async function a6(t6) {
  const s5 = f4(t6.parameters.url);
  if (!s5) return null;
  const { QueueProcessor: c5, SharedConcurrency: i3 } = await import("./QueueProcessor-JY3FPKH7.js");
  return e(l2, s5.origin, () => {
    const r4 = (s5.isHosted ? has("request-queue-concurrency-hosted") : has("request-queue-concurrency-non-hosted")) ?? 4;
    return m4 ??= new i3(has("request-queue-concurrency-global") ?? 50), new c5({ concurrency: r4, sharedConcurrency: m4, process: (r5) => {
      if (a2(r5.parameters.requestOptions)) throw _2("", u("Request canceled"), r5.parameters);
      return P2(r5);
    } });
  });
}
var l2 = /* @__PURE__ */ new Map();
var m4;
function f4(r4) {
  let e7, o = false;
  return "string" == typeof r4 ? (e7 = X(r4, true), o = S2(r4)) : (e7 = r4.origin, o = S2(r4.toString())), null == e7 ? null : new y4(e7, o);
}
var y4 = class {
  constructor(r4, e7) {
    this.origin = r4, this.isHosted = e7;
  }
};

// node_modules/@arcgis/core/request.js
async function f5(e7, r4) {
  e7 instanceof URL && (e7 = e7.toString());
  const u2 = tt(e7), l3 = Z(e7);
  l3 || u2 || (e7 = K(e7));
  const f6 = { url: e7, requestOptions: __spreadValues({}, r4) };
  r4?.query && (f6.requestOptions.query = r4?.query instanceof URLSearchParams ? W(r4.query.toString().replaceAll("+", " ")) : r4?.query);
  const b3 = (e8) => ({ data: e8, getAllHeaders: q2, getHeader: q2, httpStatus: 200, requestOptions: f6.requestOptions, url: f6.url }), g4 = N2(e7, m5.internalInterceptors);
  if (g4) {
    const e8 = await w5(g4, f6);
    if (null != e8) return b3(e8);
  }
  let O2 = N2(e7);
  if (O2) {
    const e8 = await w5(O2, f6);
    if (null != e8) return b3(e8);
    O2.after || O2.error || (O2 = null);
  }
  if (e7 = f6.url, "image" === (r4 = f6.requestOptions).responseType && (has("host-webworker") || has("host-node"))) throw _2("request:invalid-parameters", new Error("responseType 'image' is not supported in Web Workers or Node environment"), f6);
  if ("head" === r4.method) {
    if (r4.body) throw _2("request:invalid-parameters", new Error("body parameter cannot be set when method is 'head'"), f6);
    if (u2 || l3) throw _2("request:invalid-parameters", new Error("data and blob URLs are not supported for method 'head'"), f6);
  }
  if (await h4(), d5) return d5.execute(e7, r4);
  const j3 = new AbortController(), v4 = w(r4, () => j3.abort()), k2 = { controller: j3, credential: void 0, credentialToken: void 0, fetchOptions: void 0, hasToken: false, interceptor: O2, parameters: f6, redoRequest: false, useIdentity: m5.useIdentity, useProxy: false, useSSL: false, withCredentials: false }, S3 = r4.useQueue ? y5(k2) : P2(k2), E3 = await S3.finally(() => v4?.remove());
  return O2?.after?.(E3), E3;
}
var d5;
var m5 = s.request;
var q2 = () => null;
async function h4() {
  has("host-webworker") && (!d5 && globalThis.invokeStaticMessage ? d5 = await import("./request-EBGHOCBV.js") : e5.isForeignWorker = true);
}
async function w5(e7, t6) {
  if (null != e7.responseData) return e7.responseData;
  if (e7.headers && (t6.requestOptions.headers = __spreadValues(__spreadValues({}, t6.requestOptions.headers), e7.headers)), e7.query && (t6.requestOptions.query = __spreadValues(__spreadValues({}, t6.requestOptions.query), e7.query)), e7.before) {
    let s5, n6;
    try {
      n6 = await e7.before(t6);
    } catch (o) {
      s5 = _2("request:interceptor", o, t6);
    }
    if ((n6 instanceof Error || n6 instanceof r) && (s5 = _2("request:interceptor", n6, t6)), s5) throw e7.error && e7.error(s5), s5;
    return n6;
  }
}
async function y5(e7) {
  const r4 = await a6(e7);
  return r4 ? r4.push(e7) : P2(e7);
}

export {
  t,
  s2 as s,
  a3 as a,
  r2 as r,
  t3 as t2,
  x,
  j,
  I,
  W,
  A,
  P,
  H,
  T,
  D,
  N2 as N,
  F,
  _,
  G,
  K,
  V,
  X,
  Y,
  Z,
  tt,
  nt,
  et,
  ot,
  st,
  it,
  ut,
  ht,
  mt,
  $t,
  Rt,
  qt,
  Ct,
  jt,
  At,
  vt,
  kt,
  St,
  Bt,
  Tt,
  Dt,
  e3 as e,
  c2 as c,
  e4 as e2,
  s3 as s2,
  r3 as r2,
  i,
  t4 as t3,
  t5 as t4,
  p2 as p,
  m2 as m,
  f2 as f,
  h2 as h,
  v2 as v,
  g2 as g,
  x2,
  R2 as R,
  y2 as y,
  d4 as d,
  m3 as m2,
  h3 as h2,
  y3 as y2,
  w4 as w,
  S2 as S,
  T2,
  C2 as C,
  L,
  j2,
  I3 as I2,
  U3 as U,
  X2,
  f5 as f2
};
//# sourceMappingURL=chunk-LAAWMBRE.js.map
