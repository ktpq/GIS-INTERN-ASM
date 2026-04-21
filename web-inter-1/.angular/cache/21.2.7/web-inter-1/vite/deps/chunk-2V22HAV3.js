import {
  g
} from "./chunk-XT6ZTIMI.js";
import {
  D,
  w
} from "./chunk-ZJ3ZBR2Y.js";
import {
  i
} from "./chunk-4UFQ4VTC.js";
import {
  l
} from "./chunk-LD7VLL5E.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/layers/graphics/GraphicState.js
var e = class extends l {
  constructor(r) {
    super(r), this.tracking = false, this.displaying = false, this.error = null, this.isDraped = false;
  }
};
__decorate([a({ constructOnly: true })], e.prototype, "graphic", void 0), __decorate([a()], e.prototype, "tracking", void 0), __decorate([a()], e.prototype, "displaying", void 0), __decorate([a()], e.prototype, "error", void 0), __decorate([a()], e.prototype, "isDraped", void 0), e = __decorate([c("esri.views.3d.layers.graphics.GraphicState")], e);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/MovePointTooltipInfo.js
var l2 = class extends g(i) {
  constructor(t) {
    super(t), this.type = "move-point", this.allFields.forEach((t2) => {
      t2.lockable = false, t2.setActual(null);
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
__decorate([a()], l2.prototype, "allFields", null), l2 = __decorate([c("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")], l2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/SelectedVertexTooltipInfo.js
var p = class extends g(i) {
  constructor(t) {
    super(t), this.type = "selected-vertex", this.area = D(), this.totalLength = w(), this.geometryType = "polyline", this.allFields.forEach((t2) => {
      t2.lockable = false, t2.setActual(null);
    });
  }
  get allFields() {
    const { longitude: t, latitude: e2, x: o, y: l3, elevation: i2, area: r, totalLength: s, geometryType: p2 } = this;
    return [t, e2, o, l3, i2, ..."multipoint" === p2 ? [] : ["polygon" === p2 ? r : s]];
  }
};
__decorate([a()], p.prototype, "geometryType", void 0), __decorate([a()], p.prototype, "allFields", null), p = __decorate([c("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")], p);

export {
  e,
  l2 as l,
  p
};
//# sourceMappingURL=chunk-2V22HAV3.js.map
