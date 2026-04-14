import {
  o
} from "./chunk-N3PJ65QA.js";
import {
  s2 as s
} from "./chunk-4FZZ6VNL.js";

// node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js
var s2 = class extends s {
  constructor() {
    super(...arguments), this._hasCrossfade = false, this._bitmapTechnique = null;
  }
  get requiresDedicatedFBO() {
    return super.requiresDedicatedFBO || this._hasCrossfade;
  }
  beforeRender(e) {
    super.beforeRender(e), this._manageFade();
  }
  onAttach() {
    super.onAttach(), this._bitmapTechnique = new o();
  }
  onDetach() {
    super.onDetach(), this._bitmapTechnique?.shutdown(), this._bitmapTechnique = null;
  }
  renderChildren(e) {
    super.renderChildren(e), this.visible && 1 === e.drawPhase && null != this._bitmapTechnique && this._bitmapTechnique.render(e, { bitmaps: this.children });
  }
  _manageFade() {
    this.children.reduce((e, i) => e + (i.inFadeTransition ? 1 : 0), 0) >= 2 ? (this.children.forEach((e) => e.blendFunction = "additive"), this._hasCrossfade = true) : (this.children.forEach((e) => e.blendFunction = "standard"), this._hasCrossfade = false);
  }
};

export {
  s2 as s
};
//# sourceMappingURL=chunk-XSKSFX2Z.js.map
