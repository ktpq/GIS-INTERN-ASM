import {
  $,
  j as j2
} from "./chunk-7LDW6E3Y.js";
import "./chunk-4256WDOP.js";
import "./chunk-52ORZUGM.js";
import "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import "./chunk-MKUY72VH.js";
import "./chunk-GAJDBZ5G.js";
import "./chunk-FZMMQS4X.js";
import {
  P,
  j
} from "./chunk-U3KYTZUD.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
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
//# sourceMappingURL=OperatorGeodeticDistance-W3L3DACD.js.map
