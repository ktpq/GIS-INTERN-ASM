import {
  m
} from "./chunk-75I3MNCT.js";
import {
  j
} from "./chunk-4L5TCIUQ.js";
import {
  y3 as y
} from "./chunk-DHIQ5CF2.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  _,
  s
} from "./chunk-X7TQ4MJH.js";
import {
  i,
  o
} from "./chunk-W5GOZNVR.js";

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
//# sourceMappingURL=chunk-OOSRFM7N.js.map
