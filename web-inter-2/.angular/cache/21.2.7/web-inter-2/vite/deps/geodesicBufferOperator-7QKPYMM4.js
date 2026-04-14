import {
  c,
  i,
  s,
  u
} from "./chunk-NU7Z52JV.js";
import {
  e
} from "./chunk-BDFU63AY.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import {
  N as N2
} from "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
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
    const [e2] = await Promise.all([import("./jsonConverter-MJFW5HG4.js"), u()]);
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
//# sourceMappingURL=geodesicBufferOperator-7QKPYMM4.js.map
