import {
  l3 as l
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/number.js
var n = new Float32Array(1);
var t = new Uint32Array(n.buffer);
function a(r2) {
  return n[0] = r2, t[0];
}
function h(r2) {
  return t[0] = r2, n[0];
}
function s(n2, t3) {
  return 65535 & n2 | t3 << 16;
}
function m(n2, t3, r2, u) {
  return 255 & n2 | (255 & t3) << 8 | (255 & r2) << 16 | u << 24;
}
function x(n2, t3) {
  return 255 & n2 | (255 & t3) << 8;
}
function A(n2) {
  const t3 = a(n2), r2 = t3 >>> 31;
  let u = t3 >>> 23 & 255, o2 = 8388607 & t3;
  return u -= 127, u > 15 ? r2 << 15 | 31744 : u < -25 ? 0 : (u < -14 && (o2 += 8388608, o2 /= 2 ** (-14 - u), u = -15), u += 15, o2 /= 8192, o2 = b(o2, 1023), r2 << 15 | u << 10 | o2);
}
function b(n2, t3) {
  const r2 = Math.floor(n2), u = n2 - r2;
  return r2 < t3 && (u > 0.5 || 0.5 === u && r2 % 2 == 1) ? r2 + 1 : r2;
}
function d(n2) {
  let t3 = n2 >>> 15, r2 = n2 >> 10 & 31, u = 1023 & n2;
  return t3 = t3 ? -1 : 1, r2 -= 15, u /= 1024, r2 > -15 ? u += 1 : r2 = -14, t3 * 2 ** r2 * u;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/utils.js
function t2(t3) {
  const r2 = t3.map(({ name: e, count: t4, type: r3 }) => `${e}.${t4}.${r3}`).join(",");
  return l(r2);
}
function r(e, t3, o2, a3, c, n2, s2) {
  if (e.primitiveName === t3) {
    let t4 = a3?.readWithDefault(c, n2, e[o2] && s2);
    return "text" === e.type && (t4 = t4.toString()), void (e[o2] = t4);
  }
  if ("type" in e && null != e.type) {
    if (e.effects) for (const i of e.effects) r(i, t3, o2, a3, c, n2, s2);
    switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e.symbolLayers) for (const i of e.symbolLayers) r(i, t3, o2, a3, c, n2, s2);
        break;
      case "CIMTextSymbol":
        e.symbol && r(e.symbol, t3, o2, a3, c, n2, s2);
        break;
      case "CIMHatchFill":
        e.lineSymbol && r(e.lineSymbol, t3, o2, a3, c, n2, s2);
        break;
      case "CIMPictureMarker":
      case "CIMCharacterMarker":
      case "CIMVectorMarker":
        if (e.markerPlacement && r(e.markerPlacement, t3, o2, a3, c, n2, s2), "CIMVectorMarker" === e.type && e.markerGraphics) for (const i of e.markerGraphics) r(i, t3, o2, a3, c, n2, s2), r(i.symbol, t3, o2, a3, c, n2, s2);
    }
  }
}
var o = 400;
function a2(e) {
  const t3 = Math.max(1.25 * e.width, 20);
  return null != e.effects && e.effects.length > 0 ? o : t3;
}

export {
  a,
  h,
  s,
  m,
  x,
  A,
  d,
  t2 as t,
  r,
  a2
};
//# sourceMappingURL=chunk-OM7G3C2G.js.map
