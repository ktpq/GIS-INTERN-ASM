import {
  m
} from "./chunk-OKJ7MV5V.js";
import {
  j
} from "./chunk-PF33M5XM.js";
import {
  g
} from "./chunk-EKLJIMB3.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
function n2(n3) {
  return n3 && "esri.renderers.visualVariables.SizeVariable" === n3.declaredClass;
}
function e(n3) {
  return null != n3 && !isNaN(n3) && isFinite(n3);
}
function i(n3) {
  return n3.valueExpression ? "expression" : n3.field && "string" == typeof n3.field ? "field" : "unknown";
}
function l(n3, e2) {
  const l3 = e2 || i(n3), a = n3.valueUnit || "unknown";
  return "unknown" === l3 ? "constant" : n3.stops ? "stops" : null != n3.minSize && null != n3.maxSize && null != n3.minDataValue && null != n3.maxDataValue ? "clamped-linear" : "unknown" === a ? null != n3.minSize && null != n3.minDataValue ? n3.minSize && n3.minDataValue ? "proportional" : "additive" : "identity" : "real-world-size";
}

// node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var s = () => n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils");
var o = (e2) => s().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e2}`);
var l2 = () => s().error("Use of arcade expressions requires an arcade context");
var c = new j();
var u = Math.PI;
var f = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
function p(e2, n3, t) {
  return d(e2, n3, t)?.output;
}
function d(n3, t, i2) {
  const a = "visualVariables" in n3 ? n3.visualVariables?.find((e2) => "color" === e2.type) : n3;
  if (!a) return;
  if ("esri.renderers.visualVariables.ColorVariable" !== a.declaredClass) return void o("ColorVariable");
  const s2 = "number" == typeof t, l3 = s2 ? null : t, c2 = l3?.attributes, u2 = a.field, { ipData: f2, hasExpression: p2 } = a.cache;
  if (!u2 && !p2) {
    const e2 = a.stops;
    return new I(a, e2 && e2[0] ? e2[0].color : void 0, void 0);
  }
  const d2 = h(a, t, i2), v2 = a.normalizationField, m3 = null != c2 && null != v2 ? parseFloat(c2[v2]) : void 0;
  let b2 = d2;
  if (null != b2 && (!v2 || s2 || !isNaN(m3) && 0 !== m3)) {
    e(m3) && !s2 && (b2 /= m3);
    const n4 = Z(b2, f2);
    if (n4) {
      const t2 = n4[0], r = n4[1], s3 = t2 === r ? a.stops[t2].color : g.blendColors(a.stops[t2].color, a.stops[r].color, n4[2], null != i2 ? i2.color : void 0);
      return new I(a, s3, d2);
    }
  }
  return new I(a, void 0, d2);
}
function h(e2, n3, t) {
  const i2 = "number" == typeof n3, r = i2 ? null : n3, a = r?.attributes;
  if (i2) return n3;
  const s2 = e2.field, { hasExpression: o2 } = e2.cache;
  if (!o2) return a?.[s2];
  if (null == t?.arcade) return void l2();
  const c2 = { viewingMode: t.viewingMode, scale: t.scale, spatialReference: t.spatialReference }, u2 = t.arcade.arcadeUtils, f2 = u2.getViewInfo(c2), p2 = u2.createExecContext(r, f2, t.timeZone);
  if (!e2.cache.compiledFunc) {
    const n4 = u2.createSyntaxTree(e2.valueExpression);
    e2.cache.compiledFunc = u2.createFunction(n4);
  }
  return u2.executeFunction(e2.cache.compiledFunc, p2);
}
function v(e2, n3, t) {
  return m2(e2, n3, t)?.output;
}
function m2(e2, n3, t) {
  const i2 = "visualVariables" in e2 ? e2.visualVariables?.find((e3) => "opacity" === e3.type) : e2;
  if (!i2) return;
  if ("esri.renderers.visualVariables.OpacityVariable" !== i2.declaredClass) return void o("OpacityVariable");
  const a = "number" == typeof n3, s2 = a ? null : n3, l3 = s2?.attributes, c2 = i2.field, { ipData: u2, hasExpression: f2 } = i2.cache;
  if (!c2 && !f2) {
    const e3 = i2.stops;
    return new I(i2, e3 && e3[0] ? e3[0].opacity : void 0, void 0);
  }
  const p2 = b(i2, n3, t), d2 = i2.normalizationField, h2 = null != l3 && null != d2 ? parseFloat(l3[d2]) : void 0;
  let v2 = p2;
  if (null != v2 && (!d2 || a || !isNaN(h2) && 0 !== h2)) {
    e(h2) && !a && (v2 /= h2);
    const e3 = Z(v2, u2);
    if (e3) {
      const n4 = e3[0], t2 = e3[1];
      if (n4 === t2) return new I(i2, i2.stops[n4].opacity, p2);
      const r = i2.stops[n4].opacity, a2 = i2.stops[t2].opacity;
      return new I(i2, r + (a2 - r) * e3[2], p2);
    }
  }
  return new I(i2, void 0, p2);
}
function b(e2, n3, t) {
  const i2 = "number" == typeof n3;
  if (i2) return n3;
  const r = i2 ? null : n3, a = r?.attributes, s2 = e2.field, { hasExpression: o2 } = e2.cache;
  if (!o2) return a?.[s2];
  if (null == t?.arcade) return void l2();
  const c2 = { viewingMode: t.viewingMode, scale: t.scale, spatialReference: t.spatialReference }, u2 = t.arcade.arcadeUtils, f2 = u2.getViewInfo(c2), p2 = u2.createExecContext(r, f2, t.timeZone);
  if (!e2.cache.compiledFunc) {
    const n4 = u2.createSyntaxTree(e2.valueExpression);
    e2.cache.compiledFunc = u2.createFunction(n4);
  }
  return u2.executeFunction(e2.cache.compiledFunc, p2);
}
function x(e2, n3, t) {
  return V(e2, n3, t)?.output;
}
function V(e2, n3, t) {
  const i2 = "visualVariables" in e2 ? e2.visualVariables?.find((e3) => "rotation" === e3.type) : e2;
  if (!i2) return;
  if ("esri.renderers.visualVariables.RotationVariable" !== i2.declaredClass) return void o("RotationVariable");
  const r = i2.axis || "heading", a = "heading" === r && "arithmetic" === i2.rotationType ? 90 : 0, s2 = "heading" === r && "arithmetic" === i2.rotationType ? -1 : 1, l3 = i2.field, { hasExpression: c2 } = i2.cache;
  if (!l3 && !c2) return;
  const u2 = w(i2, n3, t);
  let f2 = u2;
  return f2 = "number" != typeof f2 || isNaN(f2) ? null : a + s2 * f2, new I(i2, f2, u2);
}
function w(e2, n3, t) {
  const { hasExpression: i2 } = e2.cache;
  if ("number" == typeof n3) return n3;
  const r = n3?.attributes, a = e2.field;
  if (!i2) return r?.[a];
  if (null == t?.arcade) return void l2();
  const s2 = { viewingMode: t.viewingMode, scale: t.scale, spatialReference: t.spatialReference }, o2 = t.arcade.arcadeUtils, c2 = o2.getViewInfo(s2), u2 = o2.createExecContext(n3, c2, t.timeZone);
  if (!e2.cache.compiledFunc) {
    const n4 = o2.createSyntaxTree(e2.valueExpression);
    e2.cache.compiledFunc = o2.createFunction(n4);
  }
  return o2.executeFunction(e2.cache.compiledFunc, u2);
}
function y(e2, n3, t) {
  const i2 = "number" == typeof n3, a = i2 ? null : n3, s2 = a?.attributes;
  let o2 = i2 ? n3 : null;
  const { isScaleDriven: c2 } = e2.cache;
  let u2 = e2.cache.compiledFunc;
  if (c2) {
    const n4 = null != t ? t.scale : void 0, i3 = null != t ? t.view : void 0;
    o2 = null == n4 || "3d" === i3 ? g2(e2) : n4;
  } else if (!i2) switch (e2.inputValueType) {
    case "expression": {
      if (null == t?.arcade) return void l2();
      const n4 = { viewingMode: t.viewingMode, scale: t.scale, spatialReference: t.spatialReference }, i3 = t.arcade.arcadeUtils, r = i3.getViewInfo(n4), s3 = i3.createExecContext(a, r, t.timeZone);
      if (!u2) {
        const n5 = i3.createSyntaxTree(e2.valueExpression);
        u2 = i3.createFunction(n5), e2.cache.compiledFunc = u2;
      }
      o2 = i3.executeFunction(u2, s3);
      break;
    }
    case "field":
      s2 && (o2 = s2[e2.field]);
      break;
    case "unknown":
      o2 = null;
  }
  return e(o2) ? o2 : null;
}
function g2(e2) {
  let n3 = null, t = null;
  const i2 = e2.stops;
  return i2 ? (n3 = i2[0].value, t = i2[i2.length - 1].value) : (n3 = e2.minDataValue || 0, t = e2.maxDataValue || 0), (n3 + t) / 2;
}
function z(e2, n3, t) {
  return F(e2, n3, t)?.output;
}
function F(e2, n3, t) {
  const i2 = "visualVariables" in e2 ? e2.visualVariables?.find((e3) => "size" === e3.type) : e2;
  if (!i2) return;
  if ("esri.renderers.visualVariables.SizeVariable" !== i2.declaredClass) return void o("SizeVariable");
  const a = y(i2, n3, t);
  let s2 = a;
  if (null != s2 && "number" != typeof n3 && n3 && i2.normalizationField) {
    const e3 = n3.attributes, t2 = parseFloat(e3?.[i2.normalizationField]);
    if (!e(t2) || 0 === t2) return;
    s2 /= t2;
  }
  const l3 = N(s2, i2, n3, t, i2.cache.ipData);
  return new I(i2, null == l3 || isNaN(l3) ? void 0 : l3, a);
}
function S(e2, n3, t) {
  return null == e2 ? null : n2(e2) ? z(e2, n3, t) : e(e2) ? e2 : null;
}
function E(e2, n3, t) {
  return e(t) && e2 > t ? t : e(n3) && e2 < n3 ? n3 : e2;
}
function M(e2, n3, t, i2) {
  const r = S(n3.minSize, t, i2) || n3.minDataValue;
  return null == e2 && null == r ? null : (e2 ?? 0) + (r ?? 0);
}
function k(e2, n3, t) {
  const i2 = e2.stops;
  let r = i2?.length && i2[0].size;
  return null == r && (r = e2.minSize), S(r, n3, t);
}
function C(e2, n3, t, i2) {
  const r = S(n3.minSize, t, i2);
  if (null == e2) return r;
  const { minDataValue: a, maxDataValue: s2 } = n3;
  if (null == a || null == s2) return null;
  const o2 = (e2 - a) / (s2 - a), l3 = S(n3.maxSize, t, i2), c2 = null != i2 ? i2.shape : void 0;
  if (e2 <= a) return r;
  if (e2 >= s2) return l3;
  if (null == r || null == l3) return null;
  if ("area" === n3.scaleBy && c2) {
    const e3 = "circle" === c2, n4 = e3 ? u * (r / 2) ** 2 : r * r, t2 = n4 + o2 * ((e3 ? u * (l3 / 2) ** 2 : l3 * l3) - n4);
    return e3 ? 2 * Math.sqrt(t2 / u) : Math.sqrt(t2);
  }
  return r + o2 * (l3 - r);
}
function D(e2, n3, t, i2) {
  const r = S(n3.minSize, t, i2);
  if (null == e2 || null == r) return r;
  const a = null != i2 ? i2.shape : void 0, { minDataValue: s2 } = n3;
  if (null == s2) return null;
  const o2 = e2 / s2, l3 = S(n3.maxSize, t, i2);
  let c2 = null;
  return c2 = "circle" === a ? 2 * Math.sqrt(o2 * (r / 2) ** 2) : "square" === a || "diamond" === a || "image" === a ? Math.sqrt(o2 * r ** 2) : o2 * r, E(c2, r, l3);
}
function R(e2, n3, t, i2, r) {
  if (null == e2) return null;
  const [a, s2, o2] = Z(e2, r);
  if (a === s2) return S(n3.stops?.[a].size, t, i2);
  {
    const e3 = S(n3.stops?.[a].size, t, i2), r2 = S(n3.stops?.[s2].size, t, i2);
    return null == e3 || null == r2 ? null : e3 + (r2 - e3) * o2;
  }
}
function T(e2, n3, t, r) {
  const a = (r?.resolution ?? 1) * m[n3.valueUnit], s2 = S(n3.minSize, t, r), o2 = S(n3.maxSize, t, r), { valueRepresentation: l3 } = n3;
  if (null == e2) return s2;
  let c2 = null;
  return c2 = "area" === l3 ? 2 * Math.sqrt(e2 / u) / a : "radius" === l3 || "distance" === l3 ? 2 * e2 / a : e2 / a, E(c2, s2, o2);
}
function U(e2) {
  return e2;
}
function N(e2, n3, t, i2, r) {
  switch (n3.transformationType) {
    case "additive":
      return M(e2, n3, t, i2);
    case "constant":
      return k(n3, t, i2);
    case "clamped-linear":
      return C(e2, n3, t, i2);
    case "proportional":
      return D(e2, n3, t, i2);
    case "stops":
      return R(e2, n3, t, i2, r);
    case "real-world-size":
      return T(e2, n3, t, i2);
    case "identity":
      return U(e2);
    case "unknown":
      return null;
  }
}
function q(e2, n3, t) {
  const { isScaleDriven: i2 } = e2.cache;
  if (!(i2 && "3d" === t || n3)) return null;
  const r = { scale: n3, view: t };
  let a = S(e2.minSize, c, r), s2 = S(e2.maxSize, c, r);
  if (null != a || null != s2) {
    if (a > s2) {
      const e3 = s2;
      s2 = a, a = e3;
    }
    return { minSize: a, maxSize: s2 };
  }
}
function j2(e2, n3, t) {
  if (!e2.visualVariables) return;
  const i2 = [], r = [], a = [], s2 = [], o2 = [];
  for (const l3 of e2.visualVariables) switch (l3.type) {
    case "color":
      r.push(l3);
      break;
    case "opacity":
      a.push(l3);
      break;
    case "rotation":
      o2.push(l3);
      break;
    case "size":
      s2.push(l3);
  }
  return r.forEach((e3) => {
    const r2 = d(e3, n3, t);
    r2 && i2.push(r2);
  }), a.forEach((e3) => {
    const r2 = m2(e3, n3, t);
    r2 && i2.push(r2);
  }), o2.forEach((e3) => {
    const r2 = V(e3, n3, t);
    r2 && i2.push(r2);
  }), s2.forEach((e3) => {
    const r2 = F(e3, n3, t);
    r2 && i2.push(r2);
  }), i2;
}
var I = class {
  get type() {
    return this.variable.type;
  }
  constructor(e2, n3, t) {
    this.variable = e2, this.output = n3, this.input = t;
  }
};
function Z(e2, n3) {
  if (!n3) return;
  let t = 0, i2 = n3.length - 1;
  return n3.some((n4, r) => e2 < n4 ? (i2 = r, true) : (t = r, false)), [t, i2, (e2 - n3[t]) / (n3[i2] - n3[t])];
}
function $(e2, n3, t) {
  const i2 = ["proportional", "proportional", "proportional"];
  for (const r of e2) {
    const e3 = r.useSymbolValue ? "symbol-value" : z(r, n3, t) ?? "proportional";
    switch (r.axis) {
      case "width":
        i2[0] = e3;
        break;
      case "depth":
        i2[1] = e3;
        break;
      case "height":
        i2[2] = e3;
        break;
      case "width-and-depth":
        i2[0] = e3, i2[1] = e3;
        break;
      case "all":
      case void 0:
      case null:
        i2[0] = e3, i2[1] = e3, i2[2] = e3;
        break;
      default:
        r.axis;
    }
  }
  return i2;
}

export {
  n2 as n,
  i,
  l,
  f,
  p,
  v,
  x,
  z,
  S,
  N,
  q,
  j2 as j,
  I,
  $
};
//# sourceMappingURL=chunk-LFUQ4Y6G.js.map
