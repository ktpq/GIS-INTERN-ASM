import {
  o
} from "./chunk-SPY6G63G.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import {
  y
} from "./chunk-2DNVIDFH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/support/MeasurementWorkerHandle.js
var n = class extends o {
  constructor() {
    super("MeasurementWorker", "geodeticArea", {}, void 0, { strategy: "distributed" });
  }
  async geodeticArea(t, e, n2) {
    const i = t.toJSON(), { area: r, centroid: a, length: s } = await this.invokeMethod("geodeticArea", { geometryJSON: i, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, n2);
    return { area: r, centroid: a ? _.fromJSON(a) : void 0, length: s };
  }
  geodeticLength(t, e, o2) {
    const n2 = t.toJSON();
    return this.invokeMethod("geodeticLength", { geometryJSON: n2, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, o2);
  }
  geodeticDistanceBetweenPoints(t, e, o2, n2) {
    const i = t.toJSON(), r = e.toJSON();
    return this.invokeMethod("geodeticDistanceBetweenPoints", { geometry1JSON: i, geometry2JSON: r, options: o2 }, n2);
  }
  preloadGeodetic() {
    y(this.broadcast(void 0, "preloadGeodetic"));
  }
  async area2D(t, e, n2) {
    const i = t.toJSON(), { area: r, centroid: a, length: s } = await this.invokeMethod("area2D", { geometryJSON: i, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, n2);
    return { area: r, centroid: a ? _.fromJSON(a) : void 0, length: s };
  }
  length2D(t, e, o2) {
    const n2 = t.toJSON();
    return this.invokeMethod("length2D", { geometryJSON: n2, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, o2);
  }
  distance2DBetweenPoints(t, e, o2, n2) {
    const i = t.toJSON(), r = e.toJSON();
    return this.invokeMethod("distance2DBetweenPoints", { geometry1JSON: i, geometry2JSON: r, options: o2 }, n2);
  }
  async areaHorizontal(t, e, n2) {
    const i = t.toJSON(), { area: r, centroid: a, length: s } = await this.invokeMethod("areaHorizontal", { geometryJSON: i, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, n2);
    return { area: r, centroid: a ? _.fromJSON(a) : void 0, length: s };
  }
  async autoArea2D(t, e, n2) {
    const i = t.toJSON(), { area: r, centroid: a, length: s } = await this.invokeMethod("autoArea2D", { geometryJSON: i, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, n2);
    return { area: r, centroid: a ? _.fromJSON(a) : void 0, length: s };
  }
  async autoLength2D(t, e, o2) {
    const n2 = t.toJSON();
    return this.invokeMethod("autoLength2D", { geometryJSON: n2, options: __spreadProps(__spreadValues({}, e), { stagedPoint: e?.stagedPoint?.toJSON() }) }, o2);
  }
  autoDistance2DBetweenPoints(t, e, o2, n2) {
    const i = t.toJSON(), r = e.toJSON();
    return this.invokeMethod("autoDistance2DBetweenPoints", { geometry1JSON: i, geometry2JSON: r, options: o2 }, n2);
  }
  autoSize2D(t, e, o2, n2, i, r) {
    const a = t.toJSON(), s = e.toJSON(), d = o2.toJSON(), g = n2.toJSON();
    return this.invokeMethod("autoSize2D", { topLeftJSON: a, topRightJSON: s, bottomRightJSON: d, bottomLeftJSON: g, options: i }, r);
  }
};

export {
  n
};
//# sourceMappingURL=chunk-7PKK4DLW.js.map
