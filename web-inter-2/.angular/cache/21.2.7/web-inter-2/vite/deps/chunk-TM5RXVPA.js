import {
  q
} from "./chunk-BJNDU6LU.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
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
//# sourceMappingURL=chunk-TM5RXVPA.js.map
