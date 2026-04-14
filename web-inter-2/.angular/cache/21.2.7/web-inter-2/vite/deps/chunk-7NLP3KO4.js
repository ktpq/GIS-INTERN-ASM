import {
  c
} from "./chunk-BZX2IS72.js";
import {
  i
} from "./chunk-BPRFDKSL.js";
import {
  C
} from "./chunk-SGNC5H35.js";
import {
  _
} from "./chunk-X2SNEXCL.js";

// node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
function o(e) {
  return null == e.origin;
}
function t(e) {
  return null != e.origin;
}
function c2(e) {
  return t(e.vertexSpace);
}
function u(e, n) {
  if (!t(e)) return null;
  const [i2, o2, c3] = e.origin;
  return new _({ x: i2, y: o2, z: c3, spatialReference: n });
}
function l(e, r) {
  const { x: o2, y: t2, z: c3, spatialReference: u2 } = e, l2 = [o2, t2, c3 ?? 0];
  return "local" === (r?.vertexSpace ?? f(u2)) ? new i({ origin: l2 }) : new c({ origin: l2 });
}
function f(e) {
  return e.isGeographic || e.isWebMercator ? "local" : "georeferenced";
}
function a(r, n) {
  return r.type === n.type && (r.origin === n.origin || null != r.origin && null != n.origin && C(r.origin, n.origin));
}

export {
  o,
  t,
  c2 as c,
  u,
  l,
  a
};
//# sourceMappingURL=chunk-7NLP3KO4.js.map
