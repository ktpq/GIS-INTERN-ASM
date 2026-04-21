import {
  g,
  u
} from "./chunk-PCF4TS5X.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/renderers/support/rendererConversion.js
function t(r2) {
  return null == r2 || "simple" === r2.type || "unique-value" === r2.type || "class-breaks" === r2.type || "dictionary" === r2.type || "heatmap" === r2.type;
}
function s(r2, n) {
  if (null == r2) return null;
  if (!t(r2)) return new r("renderer-conversion-3d:unsupported-renderer", `Unsupported renderer of type '${r2.type}'`, { renderer: r2 });
  switch (r2.type) {
    case "simple":
      return u2(r2, n);
    case "unique-value":
      return a(r2, n);
    case "class-breaks":
      return i(r2, n);
    case "dictionary":
    case "heatmap":
      return null;
  }
  return null;
}
function l(r2, n) {
  if (!n) return null;
  if (Array.isArray(n) || (n = [n]), n.length > 0) {
    const o = n.map((r3) => r3.details.symbol.type || r3.details.symbol.declaredClass).filter((r3) => !!r3);
    o.sort();
    const t2 = new Array();
    return o.forEach((r3, e) => {
      0 !== e && r3 === o[e - 1] || t2.push(r3);
    }), new r("renderer-conversion-3d:unsupported-symbols", `Renderer contains symbols (${t2.join(", ")}) which are not supported in 3D`, { renderer: r2, symbolErrors: n });
  }
  return null;
}
function u2(r2, e) {
  const t2 = __spreadProps(__spreadValues(__spreadValues({}, g), e), { cimFallbackEnabled: true });
  return l(r2, u(r2.symbol, t2).error);
}
function a(e, t2) {
  const s2 = __spreadProps(__spreadValues(__spreadValues({}, g), t2), { cimFallbackEnabled: true }), u3 = e.uniqueValueInfos?.map((r2) => u(r2.symbol, s2).error).filter(N), a2 = u(e.defaultSymbol, s2);
  return a2.error && u3?.unshift(a2.error), l(e, u3);
}
function i(e, t2) {
  const s2 = __spreadProps(__spreadValues(__spreadValues({}, g), t2), { cimFallbackEnabled: true }), u3 = e.classBreakInfos.map((r2) => u(r2.symbol, s2).error).filter(N), a2 = u(e.defaultSymbol, s2);
  return a2.error && u3.unshift(a2.error), l(e, u3);
}

export {
  t,
  s
};
//# sourceMappingURL=chunk-PCIXS4PU.js.map
