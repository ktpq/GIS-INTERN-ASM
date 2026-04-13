import {
  a
} from "./chunk-M44GXGOJ.js";
import {
  c
} from "./chunk-JM4CKTH2.js";
import {
  d
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var i = (i2) => {
  const a2 = i2;
  let c2 = class extends a2 {
    initialize() {
      this.addHandles(a(() => this.layer, "refresh", (e) => {
        this.doRefresh(e.dataChanged).catch((e2) => {
          d(e2) || n.getLogger(this).error(e2);
        });
      }), "RefreshableLayerView");
    }
  };
  return c2 = __decorate([c("esri.views.layers.RefreshableLayerView")], c2), c2;
};

export {
  i
};
//# sourceMappingURL=chunk-LRT6SH3M.js.map
