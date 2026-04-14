import {
  i
} from "./chunk-OZD5VRZQ.js";
import {
  d,
  k
} from "./chunk-OU7IBCXM.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentRotateTooltipInfo.js
var i2 = class extends i {
  constructor(t) {
    super(t), this.type = "extent-rotate", this.angle = 0;
  }
};
__decorate([a()], i2.prototype, "type", void 0), __decorate([a()], i2.prototype, "angle", void 0), i2 = __decorate([c("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")], i2);

// node_modules/@arcgis/core/views/support/extentUtils.js
function e({ topLeft: e2, topRight: n, bottomRight: o, bottomLeft: i3, spatialReference: u, automaticLengthMeasurementUtils: { autoDistance2D: l } }) {
  const r = d(l(i3, o, u), l(e2, n, u));
  if (null == r) return null;
  const a2 = d(l(o, n, u), l(i3, e2, u));
  return null == a2 ? null : { xSize: r, ySize: a2 };
}

// node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentScaleTooltipInfo.js
var p = class extends i {
  constructor(t) {
    super(t), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = k, this.ySize = k;
  }
};
__decorate([a()], p.prototype, "type", void 0), __decorate([a()], p.prototype, "xScale", void 0), __decorate([a()], p.prototype, "yScale", void 0), __decorate([a()], p.prototype, "xSize", void 0), __decorate([a()], p.prototype, "ySize", void 0), p = __decorate([c("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")], p);

export {
  i2 as i,
  e,
  p
};
//# sourceMappingURL=chunk-JIISM4CH.js.map
