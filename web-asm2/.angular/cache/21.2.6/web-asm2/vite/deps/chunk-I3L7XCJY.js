import {
  s
} from "./chunk-RBWNMEXD.js";
import {
  p
} from "./chunk-2DDOBC4Y.js";
import {
  c
} from "./chunk-GUGGSMY4.js";
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
//# sourceMappingURL=chunk-I3L7XCJY.js.map
