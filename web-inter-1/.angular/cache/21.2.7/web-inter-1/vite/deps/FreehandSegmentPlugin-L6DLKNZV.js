import {
  n
} from "./chunk-KBZ7E6F2.js";
import "./chunk-KI7SNQFW.js";
import {
  U,
  l,
  w
} from "./chunk-M44GXGOJ.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=FreehandSegmentPlugin-L6DLKNZV.js.map
