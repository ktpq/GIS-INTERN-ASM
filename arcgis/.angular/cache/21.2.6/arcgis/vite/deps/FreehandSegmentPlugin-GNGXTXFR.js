import {
  n
} from "./chunk-6OPXXNEA.js";
import "./chunk-BEEP3FKE.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  U,
  l,
  w
} from "./chunk-55ZAYF5P.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/plugins/FreehandSegmentPlugin.js
var p = /* @__PURE__ */ Symbol("primary-vertex");
var o = class extends n {
  constructor() {
    super(...arguments), this.completeOnDragEnd = true, this.snappingBehavior = "never";
  }
  get _effectiveSnappingEnabled() {
    return "when-not-capturing" === this.snappingBehavior && !this._interactiveHandle?.dragging;
  }
  get helpMessageKey() {
    return this._interactiveHandle?.dragging ? "freehandEnd" : "freehandStart";
  }
  start(e) {
    super.start(e);
    const { session: a2, positionOfLastUserInput: r } = e;
    if (r && a2.appendOrReplacePoint(p, r), !this._interactiveHandle) {
      const a3 = this._effectiveSnappingEnabled;
      this._interactiveHandle = e.createInteractiveHandle({ defaultCaptureMode: "capture-when-engaged", snappingEnabled: a3, selfSnappingEnabled: a3 }, { disableDefaultXYFields: true }), this.addHandles([l(() => [!!this._interactiveHandle?.dragging, this._effectiveSnappingEnabled], ([t, n2], i) => {
        const a4 = !!i?.[0], r2 = this._interactiveHandle;
        r2 && (r2.snappingEnabled = n2, r2.selfSnappingEnabled = n2), this.completeOnDragEnd && !t && a4 && e.requestComplete();
      }, w), l(() => this._interactiveHandle?.outputMapPosition, (e2) => {
        e2 && !this._isComplete && this._session?.appendOrReplacePoint(p, e2, { forceAppend: !!this._interactiveHandle?.dragging });
      }, U)], this._ownHandlesKey);
    }
  }
};
__decorate([a()], o.prototype, "_interactiveHandle", void 0), __decorate([a()], o.prototype, "_effectiveSnappingEnabled", null), __decorate([a()], o.prototype, "completeOnDragEnd", void 0), __decorate([a()], o.prototype, "snappingBehavior", void 0), __decorate([a()], o.prototype, "helpMessageKey", null), o = __decorate([c("esri.views.draw.plugins.FreehandSegmentPlugin")], o);
export {
  o as FreehandSegmentPlugin
};
//# sourceMappingURL=FreehandSegmentPlugin-GNGXTXFR.js.map
