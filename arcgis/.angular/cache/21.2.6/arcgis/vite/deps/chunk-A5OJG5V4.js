import {
  p
} from "./chunk-GRTVQTEC.js";
import {
  G,
  Q,
  U,
  h,
  i,
  te,
  ue
} from "./chunk-R4SZFRNU.js";
import {
  n as n2
} from "./chunk-N7U7MERC.js";
import {
  e,
  n,
  o
} from "./chunk-TPJLJ32L.js";
import {
  b
} from "./chunk-FJ25BHAS.js";

// node_modules/@arcgis/core/arcade/containerUtils.js
var m = { point: ["hasZ", "hasM", "spatialReference", "type", "x", "y", "z", "m"], multipoint: ["hasZ", "hasM", "spatialReference", "type", "points"], polyline: ["hasZ", "hasM", "spatialReference", "type", "paths"], polygon: ["hasZ", "hasM", "spatialReference", "type", "rings"], extent: ["hasZ", "hasM", "spatialReference", "type", "xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"] };
function p2(e2) {
  return m[e2.type];
}
function y(e2, t, l, a) {
  const r = g(e2, t);
  if (r === w) throw new n2(l, "InvalidMemberAccessKey", a);
  return r;
}
var w = /* @__PURE__ */ Symbol("keyNotFound");
var d = 0;
function g(n3, a) {
  switch (a = a.toLowerCase()) {
    case "hasz":
      return n3.hasZ ?? false;
    case "hasm":
      return n3.hasM ?? false;
    case "spatialreference": {
      let t = n3.spatialReference._arcadeCacheId;
      null != t || b.isFrozen(n3.spatialReference) || (d++, n3.spatialReference._arcadeCacheId = d, t = d);
      const l = new p({ __proto__: null, wkt: n3.spatialReference.wkt, wkid: n3.spatialReference.wkid });
      return null != t && (l._arcadeCacheId = "SPREF" + t.toString()), l;
    }
  }
  switch (n3.type) {
    case "extent":
      switch (a) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax":
          return n3[a] ?? null;
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (a) {
        case "rings": {
          let e2 = n3.cache._arcadeCacheId;
          return null == e2 && (d++, e2 = d, n3.cache._arcadeCacheId = e2), new h(n3.rings, n3.spatialReference, true === n3.hasZ, true === n3.hasM, e2);
        }
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (a) {
        case "x":
        case "y":
        case "z":
        case "m":
          return n3[a] ?? null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (a) {
        case "paths": {
          let e2 = n3.cache._arcadeCacheId;
          return null == e2 && (d++, e2 = d, n3.cache._arcadeCacheId = e2), new h(n3.paths, n3.spatialReference, true === n3.hasZ, true === n3.hasM, e2);
        }
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (a) {
        case "points": {
          let e2 = n3.cache._arcadeCacheId;
          return null == e2 && (d++, e2 = d, n3.cache._arcadeCacheId = e2), new i(n3.points, n3.spatialReference, true === n3.hasZ, true === n3.hasM, e2, 1);
        }
        case "type":
          return "Multipoint";
      }
  }
  return w;
}
function b2(e2, n3) {
  let t, l = e2;
  if (null == l) return null;
  if (o(n3)) t = n3;
  else if (te(n3)) t = n3.toArray();
  else {
    if (null == n3) return null;
    t = [n3];
  }
  for (const a of t) if (l = x(l, a), null == l) return null;
  return l;
}
function I(e2) {
  return !!ue(e2) || (o(e2) ? 0 === e2.length : te(e2) ? 0 === e2.length() : !!Q(e2) && e2.isEmpty());
}
function x(n3, t) {
  if (null == n3) return null;
  if (n3 instanceof p || Q(n3)) return e(t) && n3.hasField(t) ? n3.field(t) : null;
  if (U(n3)) {
    if (!e(t)) return null;
    const e2 = g(n3, t);
    return e2 === w ? null : e2;
  }
  return o(n3) || e(n3) ? n(t) && Number.isInteger(t) ? (t < 0 && (t = n3.length + t), t >= n3.length || t < 0 ? null : n3[t]) : null : te(n3) ? n(t) && Number.isInteger(t) ? (t < 0 && (t = n3.length() + t), t >= n3.length() || t < 0 ? null : n3.get(t)) : null : G(n3) && e(t) && n3.hasGlobal(t) ? n3.global(t) : null;
}
function M(t, l) {
  if (null == t) throw new n2(null, "MemberOfNull", null);
  if (t instanceof p || Q(t)) {
    if (e(l)) return t.field(l);
    throw new n2(null, "InvalidMemberAccessKey", null);
  }
  if (U(t)) {
    if (e(l)) return y(t, l, null, null);
    throw new n2(null, "InvalidMemberAccessKey", null);
  }
  if (o(t) || e(t)) {
    if (n(l) && Number.isInteger(l)) {
      if (l < 0 && (l = t.length + l), l >= t.length || l < 0) throw new n2(null, "OutOfBounds", null);
      return t[l];
    }
    throw new n2(null, "InvalidMemberAccessKey", null);
  }
  if (te(t)) {
    if (n(l) && Number.isInteger(l)) {
      if (l < 0 && (l = t.length() + l), l >= t.length() || l < 0) throw new n2(null, "OutOfBounds", null);
      return t.get(l);
    }
    throw new n2(null, "InvalidMemberAccessKey", null);
  }
  if (G(t)) {
    if (e(l)) return t.global(l);
    throw new n2(null, "InvalidMemberAccessKey", null);
  }
  throw new n2(null, "InvalidMemberAccessKey", null);
}

export {
  p2 as p,
  y,
  b2 as b,
  I,
  x,
  M
};
//# sourceMappingURL=chunk-A5OJG5V4.js.map
