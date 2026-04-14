import {
  n
} from "./chunk-KBZ7E6F2.js";
import "./chunk-KI7SNQFW.js";
import {
  h,
  l
} from "./chunk-M44GXGOJ.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import {
  i
} from "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
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
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/plugins/BezierSegmentPlugin.js
var d = /* @__PURE__ */ Symbol("left-vertex");
var u = /* @__PURE__ */ Symbol("right-vertex");
var _2 = /* @__PURE__ */ Symbol("cp1");
var P = /* @__PURE__ */ Symbol("cp2");
var m = /* @__PURE__ */ Symbol("endpoint");
var f = /* @__PURE__ */ Symbol("anchor");
var y2 = class extends n {
  constructor() {
    super(...arguments), this._controlPoint1LineId = /* @__PURE__ */ Symbol(), this._controlPoint2LineId = /* @__PURE__ */ Symbol(), this._mirroredCp2VisualId = /* @__PURE__ */ Symbol(), this.enableSplineBehavior = true, this.state = "placing-anchor";
  }
  get helpMessageKey() {
    switch (this.state) {
      case "placing-control-point-1":
        return "curveBezierControlPoint1";
      case "placing-endpoint":
        return "curvePlaceEndPoint";
      case "placing-control-point-2":
        return "curveBezierControlPoint2";
      default:
        return "point";
    }
  }
  get test() {
    return { computeCurve: this._computeCurve.bind(this), recomputeAndApply: this._recomputeAndApply.bind(this), cp1LineSymbol: this._controlPoint1LineId, cp2LineSymbol: this._controlPoint2LineId, controlPointId: this._mirroredCp2VisualId };
  }
  start(t, e2) {
    super.start(t, e2);
    const o = t.session;
    o.preserveSharedRedoAfterOperation = true, this.ownPlacedLeftAnchor = e2?.ownPlacedLeftAnchor, this.leftAnchor = o.getInformationAboutPoint(-1, -1)?.point;
    let n2 = e2?.state;
    if (!this.leftAnchor && this.ownPlacedLeftAnchor ? (this.leftAnchor = this.ownPlacedLeftAnchor, o.appendOrReplacePoint(d, this.leftAnchor), o?.groupGeometryChanges()) : this.leftAnchor && "placing-anchor" === e2?.state && (n2 = "placing-control-point-1", this.ownPlacedLeftAnchor = null), this.state = this.leftAnchor ? n2 ?? "placing-control-point-1" : "placing-anchor", this.controlPoint1 = e2?.controlPoint1, this.endPoint = e2?.endPoint, this.controlPoint2 = e2?.controlPoint2, this.enableSplineBehavior && "placing-control-point-1" === this.state && !n2) {
      const t2 = o.getInformationAboutPoint(-1, -1);
      if (t2?.curveInfo && i(t2.curveInfo)) {
        const [e3, n3] = t2.curveInfo.b[2], { spatialReference: i2 } = t2.point, r2 = new _({ x: e3, y: n3, spatialReference: i2 }), s = C(t2.point, r2);
        this.controlPoint1 = s, o?.pushUndoStep(this._captureState()), this.state = "placing-endpoint", o?.pushUndoStep(this._captureState());
      }
    }
    this.addHandles([l(() => this._anchorCursor?.outputMapPosition, (t2) => {
      t2 && (this.leftAnchor = this.ownPlacedLeftAnchor = t2, this._session?.appendOrReplacePoint(d, t2));
    }), l(() => this._cp1Cursor?.outputMapPosition, (t2) => {
      t2 && (this.controlPoint1 = t2, this._recomputeAndApply());
    }), l(() => this._endpointCursor?.outputMapPosition, (t2) => {
      t2 && (this.endPoint = t2, this._recomputeAndApply());
    }), l(() => this._cp2Cursor?.outputMapPosition, (t2) => {
      t2 && (this.controlPoint2 = t2, this._recomputeAndApply());
    })], this._ownHandlesKey), this._applyState(this.state), this._setupRendering(t);
  }
  completeStep() {
    if (this._isComplete) return;
    const t = this._session?.peekUndoStep();
    if (t) {
      const e2 = this._captureState();
      t && t.state === e2?.state && (t.controlPoint1 = e2.controlPoint1, t.controlPoint2 = e2.controlPoint2, t.endPoint = e2.endPoint, t.leftAnchor = e2.leftAnchor);
    } else this._session?.pushUndoStep(this._captureState());
    try {
      switch (this._session.preserveSharedRedoAfterOperation = false, this.state) {
        case "placing-anchor":
          this._applyState(this.state = "placing-control-point-1");
          break;
        case "placing-control-point-1":
          this._applyState(this.state = "placing-endpoint");
          break;
        case "placing-endpoint":
          this._applyState(this.state = "placing-control-point-2");
          break;
        case "placing-control-point-2":
          this._context?.requestComplete();
      }
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
    const e2 = this._session;
    if (!e2) throw new r("drawTool:invalid-state", "Bezier: attempted to apply state while context invalid");
    switch (e2.automaticRestart = false, this.removeHandles(_2), this.removeHandles(m), this.removeHandles(P), this.removeHandles(f), t) {
      case "placing-anchor":
        e2.automaticRestart = true, this._setupAnchorCursor();
        break;
      case "placing-control-point-1": {
        const { ownPlacedLeftAnchor: t2 } = this;
        e2.automaticRestart = !t2, t2 && e2.groupGeometryChanges(), this._setupCP1Cursor();
        break;
      }
      case "placing-endpoint":
        this._setupCP1Cursor(), this._setupEndpointCursor();
        break;
      case "placing-control-point-2":
        this._setupCP1Cursor(), this._setupEndpointCursor(), this._setupCP2Cursor();
    }
  }
  _setupAnchorCursor() {
    this._anchorCursor = this._context.createInteractiveHandle({ defaultCaptureMode: "capture-always", inputMapPosition: this._context.positionOfLastUserInput, role: "primary", selfSnappingEnabled: false, snappingEnabled: true }), this.addHandles(e(() => {
      this._anchorCursor && (this._context?.removeInteractiveHandle(this._anchorCursor), this._anchorCursor = null);
    }), f);
  }
  _setupCP1Cursor() {
    const t = "placing-control-point-1" === this.state ? "capture-always" : "grabbable-object";
    this._cp1Cursor = this._context.createInteractiveHandle({ defaultCaptureMode: t, inputMapPosition: "capture-always" === t ? void 0 : this.controlPoint1, role: "secondary", selfSnappingEnabled: false, snappingEnabled: true }), this.addHandles(e(() => {
      this._cp1Cursor && (this._context?.removeInteractiveHandle(this._cp1Cursor), this._cp1Cursor = null);
    }), _2);
  }
  _setupEndpointCursor() {
    const t = "placing-endpoint" === this.state ? "capture-always" : "grabbable-object";
    this._endpointCursor = this._context.createInteractiveHandle({ defaultCaptureMode: t, inputMapPosition: "capture-always" === t ? void 0 : this.endPoint ?? this.controlPoint1, role: "primary", selfSnappingEnabled: true, snappingEnabled: true }), this.addHandles(e(() => {
      this._endpointCursor && (this._context?.removeInteractiveHandle(this._endpointCursor), this._endpointCursor = null);
    }), m);
  }
  _setupCP2Cursor() {
    const t = "placing-control-point-2" === this.state ? "capture-always" : "grabbable-object";
    this._cp2Cursor = this._context.createInteractiveHandle({ defaultCaptureMode: t, inputMapPosition: "capture-always" === t ? void 0 : this.controlPoint2 ?? this.endPoint ?? this._context.positionOfLastUserInput, role: "secondary", selfSnappingEnabled: false, snappingEnabled: true }), this.addHandles(e(() => {
      this._cp2Cursor && (this._context?.removeInteractiveHandle(this._cp2Cursor), this._cp2Cursor = null);
    }), P);
  }
  _computeCurve() {
    const { leftAnchor: t, controlPoint1: e2, endPoint: o, controlPoint2: n2, state: i2 } = this;
    return t ? "placing-control-point-1" === i2 && e2 ? g(e2, e2, e2) : "placing-endpoint" === i2 && e2 && o ? g(o, e2, o) : e2 && o && n2 ? g(o, e2, n2, { flipControlPoint2: true }) : null : null;
  }
  _recomputeAndApply() {
    const t = this._computeCurve();
    t && this._session?.appendOrReplaceCurve(u, t);
  }
  _setupRendering(t) {
    t.addOrUpdateVisual(this._controlPoint1LineId, { role: "constructionLine", state: "idle" }), t.addOrUpdateVisual(this._controlPoint2LineId, { role: "constructionLine", state: "idle" }), t.addOrUpdateVisual(this._mirroredCp2VisualId, { role: "controlPoint", state: "idle" }), this.addHandles([l(() => [this.controlPoint1, this.controlPoint2, this.endPoint, this.leftAnchor], ([e2, o, n2, i2]) => {
      const { state: r2 } = this;
      if (i2 && e2 && "placing-control-point-1" !== r2 && "placing-anchor" !== r2) {
        const o2 = new y({ paths: [[[i2.x, i2.y], [e2.x, e2.y]]], spatialReference: i2.spatialReference });
        t.addOrUpdateVisual(this._controlPoint1LineId, { geometry: o2 });
      } else t.addOrUpdateVisual(this._controlPoint1LineId, { geometry: null });
      if (o && n2 && i2) {
        const e3 = C(n2, o), i3 = new y({ paths: [[[o.x, o.y], [e3.x, e3.y]]], spatialReference: o.spatialReference });
        t.addOrUpdateVisual(this._controlPoint2LineId, { geometry: i3 }), t.addOrUpdateVisual(this._mirroredCp2VisualId, { geometry: e3 });
      } else t.addOrUpdateVisual(this._controlPoint2LineId, { geometry: null }), t.addOrUpdateVisual(this._mirroredCp2VisualId, { geometry: null });
    }, h)], this._ownHandlesKey);
  }
  _captureState() {
    const { state: t, controlPoint1: e2, controlPoint2: o, endPoint: n2, leftAnchor: i2, ownPlacedLeftAnchor: r2 } = this;
    return { state: t, controlPoint1: e2, endPoint: n2, controlPoint2: o, leftAnchor: i2, ownPlacedLeftAnchor: r2 };
  }
};
function g(t, o, n2, i2) {
  const r2 = [t.x, t.y, t.z, t.m].filter(N), s = i2?.flipControlPoint2 ? C(t, n2) : n2;
  return { b: [r2, [o.x, o.y], [s.x, s.y]] };
}
function C(t, e2) {
  const { x: o, y: n2, spatialReference: i2 } = t, { x: r2, y: s } = e2;
  return new _({ x: o + (o - r2), y: n2 + (n2 - s), spatialReference: i2 });
}
__decorate([a()], y2.prototype, "_anchorCursor", void 0), __decorate([a()], y2.prototype, "_cp1Cursor", void 0), __decorate([a()], y2.prototype, "_endpointCursor", void 0), __decorate([a()], y2.prototype, "_cp2Cursor", void 0), __decorate([a()], y2.prototype, "enableSplineBehavior", void 0), __decorate([a()], y2.prototype, "state", void 0), __decorate([a()], y2.prototype, "helpMessageKey", null), __decorate([a()], y2.prototype, "controlPoint1", void 0), __decorate([a()], y2.prototype, "controlPoint2", void 0), __decorate([a()], y2.prototype, "endPoint", void 0), __decorate([a()], y2.prototype, "leftAnchor", void 0), __decorate([a()], y2.prototype, "ownPlacedLeftAnchor", void 0), y2 = __decorate([c("esri.views.draw.plugins.BezierSegmentPlugin")], y2);
export {
  y2 as BezierSegmentPlugin,
  g as createBezier,
  C as mirrorControlPoint
};
//# sourceMappingURL=BezierSegmentPlugin-OLJXK5AQ.js.map
