import {
  m
} from "./chunk-FH7ZMRUF.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import {
  _,
  s
} from "./chunk-YVKQ6DO2.js";
import {
  i,
  o
} from "./chunk-BVHAZAH7.js";

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
//# sourceMappingURL=chunk-7PBHIAQH.js.map
