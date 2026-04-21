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

// node_modules/@arcgis/core/views/layers/support/ClipArea.js
var t = class extends n {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
__decorate([a({ readOnly: true })], t.prototype, "version", null), t = __decorate([c("esri.views.layers.support.ClipArea")], t);

// node_modules/@arcgis/core/views/layers/support/ClipRect.js
var i;
var s = i = class extends t {
  constructor(t2) {
    super(t2), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new i({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
__decorate([a({ type: [Number, String], json: { write: true } })], s.prototype, "left", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s.prototype, "right", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s.prototype, "top", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s.prototype, "bottom", void 0), s = i = __decorate([c("esri.views.layers.support.ClipRect")], s);

export {
  t,
  s
};
//# sourceMappingURL=chunk-3QRB5MAM.js.map
