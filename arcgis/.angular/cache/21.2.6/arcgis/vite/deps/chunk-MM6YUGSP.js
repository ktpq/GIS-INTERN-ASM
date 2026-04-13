import {
  s
} from "./chunk-QVEHS3MZ.js";
import {
  p
} from "./chunk-2M42TJQH.js";
import {
  c
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
var i = class extends s {
  get hasHighlight() {
    return this.children.some((r) => r.hasData);
  }
  renderChildren(r) {
    this.attributeView.update(), 16 === r.drawPhase && this.children.some((r2) => r2.hasData) && (super.renderChildren(r), r.context.setColorMask(true, true, true, true), p(r, false, (r2) => {
      this._renderChildren(r2, 1);
    }));
  }
};
i = __decorate([c("esri.views.2d.layers.graphics.HighlightGraphicContainer")], i);

export {
  i
};
//# sourceMappingURL=chunk-MM6YUGSP.js.map
