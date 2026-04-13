import {
  a,
  c,
  s,
  s2,
  u
} from "./chunk-YODMBH6F.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import "./chunk-Q4O6WBUP.js";
import "./chunk-QK7JX7UE.js";
import {
  r
} from "./chunk-47Z5HJ52.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
    const [e, o] = await Promise.all([import("./jsonConverter-DOVZN2UO.js"), import("./projectionTransformation-ZXJM5OC6.js"), c()]);
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
//# sourceMappingURL=projectOperator-PKLTVZQY.js.map
