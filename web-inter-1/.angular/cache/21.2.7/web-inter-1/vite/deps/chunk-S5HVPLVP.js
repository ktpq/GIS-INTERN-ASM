import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var t;
var s = t = class extends n {
  constructor(e) {
    super(e), this.floorField = null, this.viewAllMode = false, this.viewAllLevelIds = new q();
  }
  clone() {
    return new t({ floorField: this.floorField, viewAllMode: this.viewAllMode, viewAllLevelIds: this.viewAllLevelIds });
  }
};
__decorate([a({ type: String, json: { write: { isRequired: true } } })], s.prototype, "floorField", void 0), __decorate([a({ json: { read: false, write: false } })], s.prototype, "viewAllMode", void 0), __decorate([a({ json: { read: false, write: false } })], s.prototype, "viewAllLevelIds", void 0), s = t = __decorate([c("esri.layers.support.LayerFloorInfo")], s);

export {
  s
};
//# sourceMappingURL=chunk-S5HVPLVP.js.map
