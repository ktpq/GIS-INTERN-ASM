import {
  v
} from "./chunk-YK5DPRSK.js";
import {
  c,
  p,
  u as u3
} from "./chunk-LAMJQAGF.js";
import {
  e as e3,
  i
} from "./chunk-IILQWSIB.js";
import {
  S,
  b2 as b,
  c as c3,
  d as d2,
  f,
  f2,
  j,
  n,
  p as p2,
  w,
  w2
} from "./chunk-FQ4W5OTG.js";
import {
  c2
} from "./chunk-RC57P4JN.js";
import {
  u as u2
} from "./chunk-QNJTKKZK.js";
import {
  q
} from "./chunk-DVLEZ3TT.js";
import {
  m
} from "./chunk-PKBHGDEY.js";
import {
  u
} from "./chunk-DNJ342E3.js";
import {
  d
} from "./chunk-XPGSGU2C.js";
import {
  g
} from "./chunk-EKLJIMB3.js";
import {
  e as e2
} from "./chunk-UXWT3ISO.js";
import {
  s3 as s
} from "./chunk-JM4CKTH2.js";
import {
  e,
  r3 as r
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/symbols/support/defaults3D.js
var w3 = w.fromSimpleMarkerSymbol(p);
var S2 = b.fromSimpleLineSymbol(u3);
var b2 = f.fromSimpleFillSymbol(c);
var j2 = new n({ symbolLayers: new q([new d2({ material: { color: e3 }, edges: new p2({ size: e2(1), color: new g(i) }) })]) });
var L = new b({ symbolLayers: new q([new j({ material: { color: new g([0, 0, 0]) }, size: e2(1) })]) });
var D = new f({ symbolLayers: new q([new d2({ outline: { color: new g([0, 0, 0]), size: e2(1) } })]) });
function d3(o) {
  if (null == o) return null;
  switch (o.type) {
    case "mesh":
      return j2;
    case "point":
    case "multipoint":
      return w3;
    case "polyline":
      return S2;
    case "polygon":
    case "extent":
      return b2;
  }
  return null;
}

// node_modules/@arcgis/core/symbols/support/symbolConversion.js
var S3 = "#useCIMFallbackSymbology()";
var g2 = { retainId: false, ignoreDrivers: false, hasLabelingContext: true };
function u4(u6, d4 = g2) {
  if (!u6) return { symbol: null };
  const { retainId: D2 = g2.retainId, ignoreDrivers: M = g2.ignoreDrivers, hasLabelingContext: j3 = g2.hasLabelingContext, retainCIM: C = g2.retainCIM, cimFallbackEnabled: I = g2.cimFallbackEnabled } = d4;
  let k = null;
  if (S(u6)) k = u6.clone();
  else if ("web-style" === u6.type) k = u6.clone();
  else if ("cim" === u6.type) {
    const e4 = u6.data?.symbol?.type;
    switch (e4) {
      case "CIMPointSymbol":
        k = C ? u6.clone() : w.fromCIMSymbol(u6);
        break;
      case "CIMLineSymbol":
        I && (k = L.clone(), d4?.logWarning?.(S3, "Unsupported CIM line symbology converted to fallback 3D line symbology"));
        break;
      case "CIMPolygonSymbol":
        I && (k = D.clone(), d4?.logWarning?.(S3, "Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"));
    }
    if (!k) return { error: new r("symbol-conversion:unsupported-cim-symbol", `CIM symbol of type '${e4 || "unknown"}' is unsupported in 3D`, { symbol: u6 }) };
  } else if (u6 instanceof d) k = b.fromSimpleLineSymbol(u6);
  else if (u6 instanceof u) k = w.fromSimpleMarkerSymbol(u6);
  else if (u6 instanceof c2) k = w.fromPictureMarkerSymbol(u6);
  else if (u6 instanceof m) k = d4.geometryType && "mesh" === d4.geometryType ? n.fromSimpleFillSymbol(u6) : f.fromSimpleFillSymbol(u6);
  else {
    if (!(u6 instanceof u2)) return { error: new r("symbol-conversion:unsupported-2d-symbol", `2D symbol of type '${u6.type || u6.declaredClass}' is unsupported in 3D`, { symbol: u6 }) };
    k = j3 ? f2.fromTextSymbol(u6) : w.fromTextSymbol(u6);
  }
  return D2 && k && "cim" !== k.type && (k.id = u6.id), !M || "cim" === k.type || k instanceof c3 || k.symbolLayers.forEach((o) => o.ignoreDrivers = true), { symbol: k };
}

// node_modules/@arcgis/core/symbols/support/jsonUtils.js
function s2(o, n2, r2, t) {
  const l = p3(o, {}, { context: t, isLabelSymbol: false });
  null != l && e(r2, l, n2);
}
function u5(e4, o, n2, r2) {
  const t = p3(e4, {}, { context: r2, isLabelSymbol: true });
  null != t && (o[n2] = t);
}
function m2(e4) {
  return S(e4) || e4 instanceof c3;
}
function y(e4) {
  return "polygon-3d" === e4?.type || "line-3d" === e4?.type;
}
function p3(e4, n2, t) {
  if (null == e4) return null;
  const { context: l, isLabelSymbol: s3 } = t, u6 = l?.origin;
  if ("web-scene" === u6 && !m2(e4)) {
    const o = u4(e4, { retainCIM: true, hasLabelingContext: s3 });
    return null != o.symbol ? o.symbol.write(n2, l) : (s(l, e4, "Use 3D symbology instead when working with WebScene and SceneView", { error: o.error }), null);
  }
  return v(l?.layer) && y(e4) ? (s(l, e4, `unsupported in layers of type ${l?.layer?.declaredClass}`), null) : ("web-map" === u6 || "portal-item" === u6 && !v(l?.layer)) && m2(e4) ? (s(l, e4, "Use 2D symbology and CIMSymbol instead when working with MapView"), null) : e4.write(n2, l);
}
function a(e4, o) {
  return w2(e4, null, o);
}

export {
  d3 as d,
  g2 as g,
  u4 as u,
  s2 as s,
  u5 as u2,
  a
};
//# sourceMappingURL=chunk-ESNAUA3I.js.map
