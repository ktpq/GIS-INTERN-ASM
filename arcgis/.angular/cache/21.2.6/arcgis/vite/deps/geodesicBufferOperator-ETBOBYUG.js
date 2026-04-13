import {
  c,
  i,
  s,
  u
} from "./chunk-5C74QG5K.js";
import {
  e
} from "./chunk-RTOTWOSZ.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import {
  N as N2
} from "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/json/geodesicBufferOperator.js
var a;
var m;
var c2;
function u2() {
  return !!a && s();
}
async function p() {
  if (!u2()) {
    const [e2] = await Promise.all([import("./jsonConverter-DOVZN2UO.js"), u()]);
    a = e2.fromGeometries, m = e2.fromGeometry, c2 = e2.toGeometry;
  }
}
function f(e2, r, i2 = {}) {
  let { curveType: s2 = "geodesic", maxDeviation: a2 = NaN, unit: u3 } = i2;
  u3 && (r = N2(r, u3, "meters"), a2 && (a2 = N2(a2, u3, "meters")));
  const p2 = m(e2), f2 = p2.getSpatialReference();
  return c2(c(p2.getGeometry(), f2, e[s2], r, a2), f2);
}
function l(r, o, s2 = {}) {
  let { curveType: m2 = "geodesic", maxDeviation: u3 = NaN, union: p2 = false, unit: f2 } = s2;
  f2 && (o = o.map((e2) => N2(e2, f2, "meters")), u3 && (u3 = N2(u3, f2, "meters")));
  const [l2, y] = a(r);
  return i(l2, y, e[m2], o, u3, p2).map((e2) => c2(e2, y)).filter(N);
}
export {
  f as execute,
  l as executeMany,
  u2 as isLoaded,
  p as load
};
//# sourceMappingURL=geodesicBufferOperator-ETBOBYUG.js.map
