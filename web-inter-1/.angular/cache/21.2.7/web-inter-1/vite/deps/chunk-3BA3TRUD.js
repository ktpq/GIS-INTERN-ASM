import {
  i
} from "./chunk-VLHLV4G6.js";
import {
  J
} from "./chunk-PJRPIIJV.js";
import {
  H,
  tn
} from "./chunk-QBEV3F3C.js";
import {
  b
} from "./chunk-5GPMO33J.js";
import {
  f,
  g,
  u
} from "./chunk-UXWT3ISO.js";

// node_modules/@arcgis/core/views/interactive/support/utils.js
function a(t) {
  let e = 0, s = 0, r = 0;
  return t ? ("cim" === t.type && t.data.symbol && "symbolLayers" in t.data.symbol && t.data.symbol.symbolLayers && t.data.symbol.symbolLayers.map((t2) => {
    "CIMVectorMarker" === t2.type && t2.anchorPoint && (Math.abs(t2.anchorPoint.x) > e && (e = t2.anchorPoint.x), Math.abs(t2.anchorPoint.y) > s && (s = t2.anchorPoint.y), null != t2.size && t2.size > r && (r = t2.size));
  }), e = u(e), s = u(s), r = u(r), { offsetX: e, offsetY: s, size: r }) : { offsetX: e, offsetY: s, size: r };
}
function f2(e, f3, c, u2, y) {
  if (null == (u2 = u2 || J(c))) return null;
  const p = 1;
  if ("point" === c.type && "cim" === u2.type && "CIMPointSymbol" === u2.data.symbol?.type && u2.data.symbol.symbolLayers) {
    const { offsetX: o, offsetY: r, size: n } = a(u2), i2 = g(f3, m), l = n / 2, y2 = e.toScreen(c), b2 = y2.x + o, P = y2.y + r;
    return b(i2, [b2, P]) < l * l ? { result: p } : null;
  }
  if ("point" !== c.type || "simple-marker" !== u2.type) return i(f3, c, e) ? { result: p } : null;
  if (null == y || !y.originalPoint.equals(c)) {
    const t = c, s = e.spatialReference;
    if (tn(t.spatialReference, s)) {
      const e2 = H(t, s);
      y = { originalPoint: t.clone(), mapPoint: e2, radiusPx: u(u2.size) };
    }
  }
  if (null != y) {
    const r = g(f3, m), n = e.toScreen?.(y.mapPoint);
    if (!n) return { result: null, cache: y };
    const i2 = y.radiusPx, l = n.x + u(u2.xoffset), a2 = n.y - u(u2.yoffset);
    return b(r, [l, a2]) < i2 * i2 ? { result: p, cache: y } : null;
  }
  return null;
}
var m = f();

export {
  a,
  f2 as f
};
//# sourceMappingURL=chunk-3BA3TRUD.js.map
