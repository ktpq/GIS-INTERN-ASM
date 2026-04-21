import {
  o
} from "./chunk-HIVGPE4F.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/support/actions/ActionBase.js
var r = class extends o(b) {
  constructor(t) {
    super(t), this.active = false, this.className = null, this.disabled = false, this.icon = null, this.id = null, this.indicator = false, this.title = null, this.type = null, this.visible = true;
  }
};
__decorate([a()], r.prototype, "active", void 0), __decorate([a()], r.prototype, "className", void 0), __decorate([a()], r.prototype, "disabled", void 0), __decorate([a()], r.prototype, "icon", void 0), __decorate([a()], r.prototype, "id", void 0), __decorate([a()], r.prototype, "indicator", void 0), __decorate([a()], r.prototype, "title", void 0), __decorate([a()], r.prototype, "type", void 0), __decorate([a()], r.prototype, "visible", void 0), r = __decorate([c("esri.support.actions.ActionBase")], r);
var p = r;

// node_modules/@arcgis/core/support/actions/ActionButton.js
var o2;
var r2 = o2 = class extends p {
  constructor(t) {
    super(t), this.image = null, this.type = "button";
  }
  clone() {
    return new o2({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image });
  }
};
__decorate([a()], r2.prototype, "image", void 0), r2 = o2 = __decorate([c("esri.support.actions.ActionButton")], r2);
var a2 = r2;

// node_modules/@arcgis/core/support/actions/ActionToggle.js
var o3;
var a3 = o3 = class extends p {
  constructor(i) {
    super(i), this.image = null, this.type = "toggle", this.value = false;
  }
  clone() {
    return new o3({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image, value: this.value });
  }
};
__decorate([a()], a3.prototype, "image", void 0), __decorate([a()], a3.prototype, "value", void 0), a3 = o3 = __decorate([c("esri.support.actions.ActionToggle")], a3);
var r3 = a3;

export {
  p,
  a2 as a,
  r3 as r
};
//# sourceMappingURL=chunk-2FYYEMZJ.js.map
