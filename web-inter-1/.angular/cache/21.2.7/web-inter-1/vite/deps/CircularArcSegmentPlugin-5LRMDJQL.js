import {
  n
} from "./chunk-KBZ7E6F2.js";
import {
  u
} from "./chunk-RXV2ABVA.js";
import "./chunk-KI7SNQFW.js";
import {
  r as r2
} from "./chunk-DFCHXQYB.js";
import "./chunk-URLT4X25.js";
import {
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
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
import {
  e2 as e
} from "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/plugins/CircularArcSegmentPlugin.js
var c2 = /* @__PURE__ */ Symbol("left-anchor-vertex");
var h = /* @__PURE__ */ Symbol("right-vertex");
var l2 = /* @__PURE__ */ Symbol("anchor");
var d = /* @__PURE__ */ Symbol("endpoint");
var u2 = /* @__PURE__ */ Symbol("interior-point");
var _ = class extends n {
  constructor() {
    super(...arguments), this.arcDrawingMode = "interior-first", this.state = "placing-anchor";
  }
  get helpMessageKey() {
    switch (this.state) {
      case "placing-interior":
        return "curveInteriorPoint";
      case "placing-endpoint":
        return "curvePlaceEndPoint";
      default:
        return "point";
    }
  }
  get test() {
    return { state: this.state, captureState: () => this._captureState() };
  }
  start(t, e2) {
    super.start(t, e2);
    const i = t.session;
    i.preserveSharedRedoAfterOperation = true, this.ownPlacedLeftAnchor = e2?.ownPlacedLeftAnchor, this.leftAnchor = i.getInformationAboutPoint(-1, -1)?.point;
    let n2 = e2?.state;
    !this.leftAnchor && this.ownPlacedLeftAnchor ? (this.leftAnchor = this.ownPlacedLeftAnchor, i.appendOrReplacePoint(c2, this.leftAnchor), i?.groupGeometryChanges()) : this.leftAnchor && "placing-anchor" === e2?.state && (n2 = this._getNextState("placing-anchor"), this.ownPlacedLeftAnchor = null), this.state = this.leftAnchor ? n2 ?? this._getNextState("placing-anchor") : "placing-anchor", this.interiorPoint = e2?.interiorPoint, this.endpoint = e2?.endpoint, this.addHandles([l(() => this._anchorCursor?.outputMapPosition, (t2) => {
      t2 && (this.leftAnchor = this.ownPlacedLeftAnchor = t2, this._session?.appendOrReplacePoint(c2, t2));
    }), l(() => this._interiorPointCursor?.outputMapPosition, (t2) => {
      t2 && (this.interiorPoint = t2, this._recomputeAndApply());
    }), l(() => this._endpointCursor?.outputMapPosition, (t2) => {
      t2 && (this.endpoint = t2, this._recomputeAndApply());
    })], this._ownHandlesKey), this._applyState(this.state);
  }
  async completeStep() {
    if (this._isComplete) return;
    if (!this._isCurrentStepValid()) return;
    const t = this._session?.peekUndoStep();
    if (t) {
      const e2 = this._captureState();
      t && t.state === e2.state && (t.leftAnchor = e2.leftAnchor, t.interiorPoint = e2.interiorPoint, t.endpoint = e2.endpoint);
    } else this._session?.pushUndoStep(this._captureState());
    "placing-anchor" === this.state && this.ownPlacedLeftAnchor && this._session?.groupGeometryChanges();
    try {
      this._session.preserveSharedRedoAfterOperation = false;
      const t2 = this._getNextState(this.state);
      null === t2 ? this._context?.requestComplete() : this._applyState(this.state = t2);
    } finally {
      this._session.preserveSharedRedoAfterOperation = true;
    }
    this._session?.pushUndoStep(this._captureState());
  }
  beforeAttachPlugin(t) {
    return { useStandaloneSession: true };
  }
  suspend() {
    return this._captureState();
  }
  _applyState(t) {
    const i = this._session;
    if (!i) throw new r("drawTool:invalid-state", "Circular Arc: attempted to apply state while context invalid");
    this.removeHandles(l2), this.removeHandles(d), this.removeHandles(u2), i.automaticRestart = this._computeAutomaticRestart(), "placing-anchor" !== t ? ("placing-interior" !== t && "interior-first" !== this.arcDrawingMode || this._setupInteriorPointCursor(), "placing-endpoint" !== t && "end-first" !== this.arcDrawingMode || this._setupEndpointCursor()) : this._setupAnchorCursor();
  }
  _setupAnchorCursor() {
    this._anchorCursor = this._context.createInteractiveHandle({ defaultCaptureMode: "capture-always", inputMapPosition: this._context.positionOfLastUserInput, role: "primary", selfSnappingEnabled: false, snappingEnabled: true }), this.addHandles(e(() => {
      this._anchorCursor && (this._context?.removeInteractiveHandle(this._anchorCursor), this._anchorCursor = null);
    }), l2);
  }
  _setupInteriorPointCursor() {
    const t = "placing-interior" === this.state ? "capture-always" : "grabbable-object";
    this._interiorPointCursor = this._context.createInteractiveHandle({ defaultCaptureMode: t, inputMapPosition: "capture-always" === t ? void 0 : this.interiorPoint ?? this.endpoint, role: "secondary", selfSnappingEnabled: false, snappingEnabled: true }), this.addHandles(e(() => {
      this._interiorPointCursor && (this._context?.removeInteractiveHandle(this._interiorPointCursor), this._interiorPointCursor = null);
    }), u2);
  }
  _setupEndpointCursor() {
    const t = "placing-endpoint" === this.state ? "capture-always" : "grabbable-object";
    this._endpointCursor = this._context.createInteractiveHandle({ defaultCaptureMode: t, inputMapPosition: "capture-always" === t ? void 0 : this.endpoint ?? this.interiorPoint, role: "primary", selfSnappingEnabled: true, snappingEnabled: true }), this.addHandles(e(() => {
      this._endpointCursor && (this._context?.removeInteractiveHandle(this._endpointCursor), this._endpointCursor = null);
    }), d);
  }
  _captureState() {
    const { state: t, endpoint: e2, interiorPoint: i, leftAnchor: r3, ownPlacedLeftAnchor: n2 } = this;
    return { state: t, endpoint: e2, interiorPoint: i, leftAnchor: r3, ownPlacedLeftAnchor: n2 };
  }
  _computeAutomaticRestart() {
    return "placing-anchor" === this.state || ("placing-interior" === this.state ? "interior-first" === this.arcDrawingMode && !this.ownPlacedLeftAnchor : "end-first" === this.arcDrawingMode && !this.ownPlacedLeftAnchor);
  }
  _makeCurve() {
    const { interiorPoint: t, endpoint: e2 } = this;
    if (!t && !e2) return null;
    const i = e2 ?? t, r3 = r2(t ?? e2);
    return { c: [r2(i), g(r3)] };
  }
  _recomputeAndApply() {
    const t = this._makeCurve();
    t && this._session?.appendOrReplaceCurve(h, t);
  }
  _isCurrentStepValid() {
    const { interiorPoint: t, endpoint: e2, leftAnchor: i } = this;
    return "placing-interior" === this.state ? !!t && ((!i || !u(t, i)) && !(e2 && u(t, e2))) : "placing-endpoint" === this.state ? !!e2 && !(t && u(e2, t)) : "placing-anchor" !== this.state || null != this.ownPlacedLeftAnchor;
  }
  _getNextState(t) {
    switch (t) {
      case "placing-anchor":
        return "interior-first" === this.arcDrawingMode ? "placing-interior" : "placing-endpoint";
      case "placing-interior":
        return "interior-first" === this.arcDrawingMode ? "placing-endpoint" : null;
      case "placing-endpoint":
        return "end-first" === this.arcDrawingMode ? "placing-interior" : null;
    }
  }
};
function g(t) {
  return 2 === t.length ? t : [t[0] ?? 0, t[1] ?? 0];
}
__decorate([a()], _.prototype, "_anchorCursor", void 0), __decorate([a()], _.prototype, "_endpointCursor", void 0), __decorate([a()], _.prototype, "_interiorPointCursor", void 0), __decorate([a()], _.prototype, "arcDrawingMode", void 0), __decorate([a()], _.prototype, "interiorPoint", void 0), __decorate([a()], _.prototype, "endpoint", void 0), __decorate([a()], _.prototype, "leftAnchor", void 0), __decorate([a()], _.prototype, "ownPlacedLeftAnchor", void 0), __decorate([a()], _.prototype, "state", void 0), __decorate([a()], _.prototype, "helpMessageKey", null), _ = __decorate([c("esri.views.draw.plugins.CircularArcSegmentPlugin")], _);
export {
  _ as CircularArcSegmentPlugin
};
//# sourceMappingURL=CircularArcSegmentPlugin-5LRMDJQL.js.map
