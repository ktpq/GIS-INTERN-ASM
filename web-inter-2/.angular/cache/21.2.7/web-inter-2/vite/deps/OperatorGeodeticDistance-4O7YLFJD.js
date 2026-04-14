import {
  $,
  j as j2
} from "./chunk-JK2XD4KS.js";
import "./chunk-62ONSFDS.js";
import "./chunk-34KFHRHR.js";
import "./chunk-UOKS5I7T.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-HDXHQWQ2.js";
import {
  P,
  j
} from "./chunk-VIRT6ASK.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticDistance.js
var u = class {
  getOperatorType() {
    return 10316;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, r, t) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, r, t, o, a) {
    return this.executeEx(e, r, t, o, a, null, null, Number.NaN);
  }
  executeEx(u2, n, c, i, m, l, p, y) {
    const N = { stack: [], error: void 0, hasError: false };
    try {
      if (0 === c.getCoordinateSystemType() && P(""), j(u2), j(n), u2.isEmpty() || n.isEmpty()) return Number.NaN;
      Number.isNaN(y) && (y = Number.MAX_VALUE);
      const r = __addDisposableResource(N, new $(c, i, m, y, 1), false), E = j2(), x = j2(), b = r.calculate(u2, n, E, x);
      return l && l.outPoint.assign(E.outPoint), p && p.outPoint.assign(x.outPoint), b;
    } catch (E) {
      N.error = E, N.hasError = true;
    } finally {
      __disposeResources(N);
    }
  }
};
export {
  u as OperatorGeodeticDistance,
  j2 as makeOutput
};
//# sourceMappingURL=OperatorGeodeticDistance-4O7YLFJD.js.map
