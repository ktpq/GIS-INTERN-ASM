import {
  v
} from "./chunk-QK7JX7UE.js";
import {
  O,
  te
} from "./chunk-DHNLUBWZ.js";
import {
  T
} from "./chunk-4X5LQ2UO.js";

// node_modules/@arcgis/core/geometry/support/zscale.js
function r(o, n, t) {
  const e = i(n, t);
  if (1 !== e) switch (o) {
    case "point":
    case "esriGeometryPoint":
      return (o2) => s(o2, e);
    case "polyline":
    case "esriGeometryPolyline":
      return (o2) => c(o2, e);
    case "polygon":
    case "esriGeometryPolygon":
      return (o2) => f(o2, e);
    case "multipoint":
    case "esriGeometryMultipoint":
      return (o2) => l(o2, e);
    case "extent":
    case "esriGeometryEnvelope":
      return (o2) => u(o2, e);
    default:
      return;
  }
}
function i(e, r2) {
  if (null == e || null == r2 || r2.vcsWkid || T(e, r2) || O(e) || O(r2)) return 1;
  return te(e) / te(r2);
}
function s(o, n) {
  null != o?.z && (o.z *= n);
}
function f(o, n) {
  if (o) {
    if (o.curveRings) for (const t of o.curveRings) for (const o2 of t) {
      const t2 = v(o2);
      t2.length > 2 && (t2[2] *= n);
    }
    if (o.rings) for (const t of o.rings) for (const o2 of t) o2.length > 2 && (o2[2] *= n);
  }
}
function c(o, n) {
  if (o) {
    if (o.curvePaths) for (const t of o.curvePaths) for (const o2 of t) {
      const t2 = v(o2);
      t2.length > 2 && (t2[2] *= n);
    }
    if (o.paths) for (const t of o.paths) for (const o2 of t) o2.length > 2 && (o2[2] *= n);
  }
}
function l(o, n) {
  if (o) for (const t of o.points) t.length > 2 && (t[2] *= n);
}
function u(o, n) {
  o && null != o.zmin && null != o.zmax && (o.zmin *= n, o.zmax *= n);
}

export {
  r,
  i
};
//# sourceMappingURL=chunk-JGXIJ3X5.js.map
