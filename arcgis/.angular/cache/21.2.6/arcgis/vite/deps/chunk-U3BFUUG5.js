import {
  p,
  u
} from "./chunk-GIWQXMFP.js";
import {
  e
} from "./chunk-NY4DWVPM.js";
import {
  a as a2
} from "./chunk-W3KPPCSW.js";
import {
  F
} from "./chunk-DNCZTJNI.js";
import {
  m
} from "./chunk-4QSSUPBC.js";
import {
  a3 as a,
  c,
  o3 as o
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var a3 = { type: Boolean, json: { read: { source: "timeAnimation" }, write: { target: "timeAnimation", layerContainerTypes: a2 } } };
var l = (r) => {
  const l2 = r;
  let u2 = class extends l2 {
    constructor() {
      super(...arguments), this.timeExtent = null, this.timeOffset = null, this.useViewTime = true;
    }
    readOffset(t, e2) {
      const o2 = e2.timeInfo.exportOptions;
      if (!o2) return null;
      const r2 = o2.timeOffset, i = e.fromJSON(o2.timeOffsetUnits);
      return r2 && i ? new p({ value: r2, unit: i }) : null;
    }
    get timeInfo() {
      return this._get("timeInfo");
    }
    set timeInfo(t) {
      F(t, this.fieldsIndex), this._set("timeInfo", t);
    }
  };
  return __decorate([a({ type: m, json: { write: false } })], u2.prototype, "timeExtent", void 0), __decorate([a({ type: p })], u2.prototype, "timeOffset", void 0), __decorate([o("service", "timeOffset", ["timeInfo.exportOptions"])], u2.prototype, "readOffset", null), __decorate([a({ value: null, type: u, json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], u2.prototype, "timeInfo", null), __decorate([a(a3)], u2.prototype, "useViewTime", void 0), u2 = __decorate([c("esri.layers.mixins.TemporalLayer")], u2), u2;
};

export {
  a3 as a,
  l
};
//# sourceMappingURL=chunk-U3BFUUG5.js.map
