import {
  m
} from "./chunk-7V6QSUHG.js";
import {
  j
} from "./chunk-76B4KLE5.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  _,
  s
} from "./chunk-X2SNEXCL.js";
import {
  e,
  i,
  n,
  o,
  t
} from "./chunk-GM5PCDS3.js";

// node_modules/@arcgis/core/geometry/support/jsonUtils.js
function u2(y2) {
  return null == y2 ? null : y2 instanceof s ? y2 : t(y2) ? _.fromJSON(y2) : e(y2) ? y.fromJSON(y2) : o(y2) ? j.fromJSON(y2) : i(y2) ? m.fromJSON(y2) : n(y2) ? z.fromJSON(y2) : null;
}
var j2 = { esriGeometryPoint: _, esriGeometryPolyline: y, esriGeometryPolygon: j, esriGeometryEnvelope: z, esriGeometryMultipoint: m, esriGeometryMultiPatch: j };
function G(o2) {
  return o2 && j2[o2] || null;
}

export {
  u2 as u,
  G
};
//# sourceMappingURL=chunk-UIKAL3FG.js.map
