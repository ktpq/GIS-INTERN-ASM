import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  F,
  P,
  r
} from "./chunk-KGE7V7CJ.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodesicBuffer.js
var o;
function s() {
  return !!o && r();
}
async function u() {
  if (!s()) {
    const [e, t2] = await Promise.all([import("./OperatorGeodesicBuffer-CTYWWJWO.js"), import("./SpatialReference-QMDBPWPX.js").then((e2) => e2.aP).then(({ injectPe: e2 }) => e2), P()]);
    o = new e.OperatorGeodesicBuffer(), t2(F);
  }
}
function c(e, r2, n, t2, s2) {
  return o.execute(e, r2, n, t2, s2, false, null);
}
function i(r2, n, t2, s2, u2, c2) {
  const i2 = o.executeMany(new t(r2), n, t2, s2, u2, false, c2, null);
  return Array.from(i2);
}
function a() {
  return o.supportsCurves();
}

export {
  s,
  u,
  c,
  i,
  a
};
//# sourceMappingURL=chunk-BGMOMGXK.js.map
