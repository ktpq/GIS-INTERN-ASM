import {
  a,
  c,
  s,
  s2,
  u
} from "./chunk-NEG7AWOP.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-5T3LXRWY.js";
import {
  r
} from "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/json/projectOperator.js
var a2;
var i;
var p;
var c2;
var f;
var m;
function l() {
  return !!a2 && u();
}
async function u2() {
  if (!l()) {
    const [e, o] = await Promise.all([import("./jsonConverter-OXICAZ2O.js"), import("./projectionTransformation-OHGSNZUF.js"), c()]);
    a2 = e.fromGeometries, i = e.fromGeometry, p = e.fromSpatialReference, c2 = e.toGeometry, f = e.getSpatialReference, m = o.createProjectionTransformation;
  }
}
function j(o, t, r2) {
  const a3 = i(o), f2 = p(t), l2 = m(a3.getSpatialReference(), f2, r2), u3 = c2(a(a3.getGeometry(), l2), f2);
  return !r2?.zConversionDisabled && u3 && !r(u3) && o.spatialReference && s2([u3], o.spatialReference, t), u3;
}
function y(e, t, r2) {
  const [s3, i2] = a2(e), l2 = p(t), u3 = m(i2, l2, r2), j2 = s(s3, u3).map((e2) => c2(e2, l2));
  if (!r2?.zConversionDisabled && j2) {
    const o = f(e);
    o && s2(j2, o, t);
  }
  return j2;
}
export {
  j as execute,
  y as executeMany,
  l as isLoaded,
  u2 as load
};
//# sourceMappingURL=projectOperator-SVP3CL5U.js.map
