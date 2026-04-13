import {
  m
} from "./chunk-FMIKVU3Q.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  _,
  s
} from "./chunk-ONXOVX4W.js";
import {
  i,
  o
} from "./chunk-SZXJF3IE.js";

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
//# sourceMappingURL=chunk-WRETNREX.js.map
