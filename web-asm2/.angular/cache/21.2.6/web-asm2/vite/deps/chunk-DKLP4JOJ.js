import {
  i,
  l as l2
} from "./chunk-OXLOQNKI.js";
import {
  p
} from "./chunk-ESHFEOYZ.js";
import {
  l
} from "./chunk-5W2KFO6C.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import {
  x
} from "./chunk-SKQFZRJZ.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/GraphicsLayer.js
var h = class extends p(l(b)) {
  constructor(e) {
    super(e), this.elevationInfo = null, this.graphics = new i(), this.screenSizePerspectiveEnabled = true, this.type = "graphics", this.internal = false;
  }
  destroy() {
    this.removeAll(), this.graphics.destroy();
  }
  get loaded() {
    return super.loaded;
  }
  add(e) {
    return this.graphics.add(e), this;
  }
  addMany(e) {
    return this.graphics.addMany(e), this;
  }
  removeAll() {
    return this.graphics.removeAll(), this;
  }
  remove(e) {
    this.graphics.remove(e);
  }
  removeMany(e) {
    this.graphics.removeMany(e);
  }
  graphicChanged(e) {
    this.emit("graphic-update", e);
  }
};
__decorate([a({ type: x })], h.prototype, "elevationInfo", void 0), __decorate([a(l2(i, "graphics"))], h.prototype, "graphics", void 0), __decorate([a({ type: ["show", "hide"] })], h.prototype, "listMode", void 0), __decorate([a()], h.prototype, "screenSizePerspectiveEnabled", void 0), __decorate([a({ readOnly: true })], h.prototype, "type", void 0), __decorate([a({ constructOnly: true })], h.prototype, "internal", void 0), h = __decorate([c("esri.layers.GraphicsLayer")], h);

export {
  h
};
//# sourceMappingURL=chunk-DKLP4JOJ.js.map
