import {
  M,
  P2 as P,
  Z2 as Z,
  e,
  i
} from "./chunk-MWYV2T46.js";
import {
  p
} from "./chunk-HL5VRJDT.js";
import {
  Je,
  Ke,
  ge,
  oe,
  te,
  ve,
  z
} from "./chunk-M26DUV3M.js";
import {
  n as n2,
  o as o2
} from "./chunk-K3KADXMX.js";
import {
  n,
  o
} from "./chunk-UDRKO2UK.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  _,
  s
} from "./chunk-ONXOVX4W.js";
import {
  re
} from "./chunk-NR66QFNF.js";

// node_modules/@arcgis/core/arcade/geometry/functions.js
function P2(e2, n3, o3) {
  if (oe(e2, 2, 2, n3, o3), e2[0] instanceof s && e2[1] instanceof s) ;
  else if (e2[0] instanceof s && null === e2[1]) ;
  else if (e2[1] instanceof s && null === e2[0]) ;
  else if (null !== e2[0] || null !== e2[1]) throw new n2(n3, "InvalidParameter", o3);
}
function x(e2) {
  if ("polygon" !== e2.type && "polyline" !== e2.type && "extent" !== e2.type) return 0;
  let n3 = 1;
  if (e2.spatialReference.vcsWkid || e2.spatialReference.latestVcsWkid) {
    n3 = i(e2.spatialReference) / re(e2.spatialReference);
  }
  let t = 0;
  if ("polyline" === e2.type) for (const r of e2.paths) for (let e3 = 1; e3 < r.length; e3++) t += e(r[e3], r[e3 - 1], n3);
  else if ("polygon" === e2.type) for (const r of e2.rings) {
    for (let e3 = 1; e3 < r.length; e3++) t += e(r[e3], r[e3 - 1], n3);
    (r[0][0] !== r[r.length - 1][0] || r[0][1] !== r[r.length - 1][1] || void 0 !== r[0][2] && r[0][2] !== r[r.length - 1][2]) && (t += e(r[0], r[r.length - 1], n3));
  }
  else "extent" === e2.type && (t += 2 * e([e2.xmin, e2.ymin, 0], [e2.xmax, e2.ymin, 0], n3), t += 2 * e([e2.xmin, e2.ymin, 0], [e2.xmin, e2.ymax, 0], n3), t *= 2, t += 4 * Math.abs(z(e2.zmax, 0) * n3 - z(e2.zmin, 0) * n3));
  return t;
}
var I = (n3, o3, i2) => {
  if (i2 = Je(i2), oe(i2, 2, 2, n3, o3), null === i2[0]) return null;
  let c = i2[0];
  if ((o(i2[0]) || te(i2[0])) && (c = ve(i2[0], n3.spatialReference)), null === c) return null;
  if (!(c instanceof s)) throw new n2(n3, "InvalidParameter", o3);
  if (!(c instanceof y)) throw new n2(n3, "InvalidParameter", o3);
  if (!n(i2[1])) throw new n2(n3, "InvalidParameter", o3);
  const u = Z(c, i2[1]);
  return u ? p.convertObjectToArcadeDictionary(u, Ke(n3), false, true) : null;
};
var R = (n3, o3, i2) => {
  if (i2 = Je(i2), oe(i2, 2, 2, n3, o3), null === i2[0]) return null;
  let c = i2[0];
  if ((o(i2[0]) || te(i2[0])) && (c = ve(i2[0], n3.spatialReference)), null === c) return null;
  if (!(c instanceof s)) throw new n2(n3, "InvalidParameter", o3);
  if (!(c instanceof y)) throw new n2(n3, "InvalidParameter", o3);
  const u = i2[1];
  if (null === u) return null;
  if (!(u instanceof _)) throw new n2(n3, "InvalidParameter", o3);
  const m = P(c, u);
  return m ? p.convertObjectToArcadeDictionary(m, Ke(n3), false, true) : null;
};
var b = (n3, o3, i2) => {
  if (i2 = Je(i2), oe(i2, 2, 2, n3, o3), null === i2[0]) return null;
  let c = i2[0];
  if ((o(i2[0]) || te(i2[0])) && (c = ve(i2[0], n3.spatialReference)), null === c) return null;
  if (!(c instanceof s)) throw new n2(n3, "InvalidParameter", o3);
  if (!(c instanceof y)) throw new n2(n3, "InvalidParameter", o3);
  if (!n(i2[1])) throw new n2(n3, "InvalidParameter", o3);
  const u = M(c, i2[1]);
  return u ? p.convertObjectToArcadeDictionary(u, Ke(n3), false, true) : null;
};
var k = new o2(["geodesic", "great-elliptic", "loxodrome", "normal-section", "shape-preserving"]);
function D(e2) {
  return null == e2 ? "geodesic" : k.get(ge(e2));
}
var A = new o2(["geometric", "labelPoint"]);
function O(e2) {
  return null == e2 ? "geometric" : A.get(ge(e2));
}
var T = new o2(["round", "bevel", "miter", "square"]);
function z2(e2) {
  return null == e2 ? "round" : T.lookup(ge(e2)) ?? "round";
}

export {
  P2 as P,
  x,
  I,
  R,
  b,
  D,
  O,
  z2 as z
};
//# sourceMappingURL=chunk-EONEXCSY.js.map
