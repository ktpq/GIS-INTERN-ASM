import {
  m
} from "./chunk-7V6QSUHG.js";
import {
  j
} from "./chunk-76B4KLE5.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  _,
  s
} from "./chunk-X2SNEXCL.js";
import {
  i,
  o
} from "./chunk-TIEYANBR.js";

// node_modules/@arcgis/core/geometry/support/typeUtils.js
var y2 = i()({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon" });
var m2 = i()({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryEnvelope: "extent", mesh: "mesh" });
var s2 = { base: s, key: "type", typeMap: { extent: z, multipoint: m, point: _, polyline: y, polygon: j } };
var u = new o({ esriGeometryBezier3Curve: "cubic-bezier", esriGeometryCircularArc: "circular-arc", esriGeometryEllipticArc: "elliptic-arc" }, { ignoreUnknown: true });
function c(e) {
  return "point" === e.type;
}
function G(e) {
  return "multipoint" === e.type;
}
function f(e) {
  return "polygon" === e.type;
}
function P(e) {
  return "polyline" === e.type;
}

export {
  y2 as y,
  m2 as m,
  s2 as s,
  u,
  c,
  G,
  f,
  P
};
//# sourceMappingURL=chunk-U4R7X4DP.js.map
