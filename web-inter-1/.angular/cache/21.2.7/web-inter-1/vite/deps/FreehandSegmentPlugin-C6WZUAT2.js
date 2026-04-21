import {
  n
} from "./chunk-O3OH5LJH.js";
import "./chunk-TXF5FFQH.js";
import {
  U,
  l,
  w
} from "./chunk-6CYBR6FP.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=FreehandSegmentPlugin-C6WZUAT2.js.map
