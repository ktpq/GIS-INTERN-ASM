import {
  y
} from "./chunk-HAPSASFY.js";
import {
  O
} from "./chunk-VHQJAPCR.js";

// node_modules/@arcgis/core/views/support/geodesicMeasurementUtils.js
function r(r2) {
  return y(r2) || O(r2);
}
function t(o, r2, t2, ...i) {
  return y(o) ? r2.apply(void 0, i) : o.isWebMercator ? t2.apply(void 0, i) : null;
}

export {
  r,
  t
};
//# sourceMappingURL=chunk-CVCXGMBS.js.map
