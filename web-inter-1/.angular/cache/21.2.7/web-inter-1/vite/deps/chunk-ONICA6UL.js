import {
  A,
  k as k2,
  p as p2,
  q,
  z
} from "./chunk-QS744SZT.js";
import {
  S,
  V,
  Y,
  e as e3,
  w as w2
} from "./chunk-VTKZ74CB.js";
import {
  k as k3,
  x as x2
} from "./chunk-CATAT6ZJ.js";
import {
  a as a3,
  u as u2
} from "./chunk-72HKR67W.js";
import {
  c as c2
} from "./chunk-UKLHBUGA.js";
import {
  c as c3
} from "./chunk-5AR533LE.js";
import {
  ge
} from "./chunk-NFUHF2IU.js";
import {
  x as x3
} from "./chunk-GFDC56CO.js";
import {
  i as i3,
  k,
  x
} from "./chunk-YP7OFZOK.js";
import {
  t
} from "./chunk-DPFYRE7L.js";
import {
  e as e2
} from "./chunk-52AG2HN3.js";
import {
  D,
  p
} from "./chunk-DSHA5S57.js";
import {
  h
} from "./chunk-TXF5FFQH.js";
import {
  y as y2
} from "./chunk-JIY5IMLE.js";
import {
  H
} from "./chunk-QBEV3F3C.js";
import {
  i as i2
} from "./chunk-UXWT3ISO.js";
import {
  r
} from "./chunk-253Z6EVN.js";
import {
  l as l2,
  w
} from "./chunk-6CYBR6FP.js";
import {
  i,
  l as l3
} from "./chunk-LD7VLL5E.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c
} from "./chunk-7ELXYOAW.js";
import {
  L,
  e2 as e,
  l2 as l,
  o3 as o,
  u2 as u,
  y
} from "./chunk-2KP24SU5.js";
import {
  a
} from "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/drawingModes.js
var e4 = "click";

// node_modules/@arcgis/core/views/draw/LegacyDrawManipulator.js
var s = class extends b {
  constructor(o2) {
    super(o2), this.events = new i(), this.interactive = true, this.selectable = false, this.cursor = null, this.grabbable = true;
  }
  intersectionDistance(o2, e5) {
    return 0;
  }
  attach() {
  }
  detach() {
  }
  onElevationChange() {
  }
  onViewChange() {
  }
};
__decorate([a2()], s.prototype, "interactive", void 0), __decorate([a2()], s.prototype, "selectable", void 0), __decorate([a2()], s.prototype, "cursor", void 0), __decorate([a2()], s.prototype, "grabbing", void 0), __decorate([a2()], s.prototype, "grabbable", void 0), __decorate([a2()], s.prototype, "consumesClicks", void 0), __decorate([a2()], s.prototype, "grabbableForEvent", void 0), __decorate([a2()], s.prototype, "dragging", void 0), __decorate([a2()], s.prototype, "hovering", void 0), __decorate([a2()], s.prototype, "selected", void 0), s = __decorate([c("esri.views.draw.LegacyDrawManipulator")], s);

// node_modules/@arcgis/core/views/interactive/dragEventPipeline.js
function i4(t2, n) {
  let e5 = null, r2 = null;
  return (a4) => {
    if ("cancel" === a4.action) return void (null != r2 && (r2.execute({ action: "cancel" }), e5 = null, r2 = null));
    const o2 = { action: a4.action, screenStart: a4.start, screenEnd: a4.screenPoint };
    "start" === a4.action && null == e5 && (e5 = new D2(), r2 = new D2(), n(t2, e5, r2, a4.pointerType, o2)), null != e5 && e5.execute(o2), "end" === a4.action && null != e5 && (e5 = null, r2 = null);
  };
}
function p3(t2, n) {
  return t2.events.on("drag", i4(t2, n));
}
function m(t2, n) {
  const e5 = [t2.x, t2.y, t2.z ?? 0], r2 = n, a4 = [Math.cos(r2), Math.sin(r2)], o2 = Math.sqrt(a4[0] * a4[0] + a4[1] * a4[1]);
  if (0 === o2) return null;
  a4[0] /= o2, a4[1] /= o2;
  const l4 = (t3) => {
    const n2 = (t3.x - e5[0]) * a4[0] + (t3.y - e5[1]) * a4[1];
    t3.x = e5[0] + n2 * a4[0], t3.y = e5[1] + n2 * a4[1];
  };
  return (t3) => (l4(t3.mapStart), l4(t3.mapEnd), __spreadProps(__spreadValues({}, t3), { axis: a4 }));
}
function f(t2) {
  let n = null;
  const e5 = j();
  return (r2) => {
    if ("start" === r2.action && (n = y3(t2, r2.mapStart.spatialReference)), null == n) return null;
    const a4 = e5(r2);
    if (!a4) return null;
    const { translationX: o2, translationY: l4, translationZ: c4 } = a4;
    return n.move(o2, l4, c4, r2.action), a4;
  };
}
function d(t2, n) {
  return null == t2 ? null : t2.spatialReference.equals(n) ? t2.clone() : H(t2, n);
}
function y3(t2, n) {
  const e5 = t2.operations;
  if (!e5) return null;
  const r2 = e5.data.geometry, l4 = k3(n);
  if (r2.spatialReference.equals(l4)) return x4(t2, e5, () => {
  });
  if ("mesh" !== r2.type) {
    const n2 = d(r2, l4);
    if (null == n2) return null;
    const o2 = r2.spatialReference, c4 = S.fromGeometry(n2, e5.viewingMode);
    return x4(t2, c4, () => {
      const t3 = c4.data.geometry, n3 = H(t3, o2);
      e5.trySetGeometry(n3);
    });
  }
  if (c2(r2)) {
    const n2 = d(r2.origin, l4);
    if (!n2) return null;
    const o2 = r2.spatialReference, c4 = S.fromGeometry(n2, e5.viewingMode);
    return x4(t2, e5, () => {
      const t3 = H(c4.data.geometry, o2), n3 = t3.x - r2.origin.x, l5 = t3.y - r2.origin.y, s2 = (t3.z ?? 0) - (r2.origin.z ?? 0);
      e5.move(n3, l5, s2);
    });
  }
  return null;
}
function x4(t2, n, e5) {
  let r2 = 0, a4 = 0, o2 = 0;
  return { move: (l4, c4, s2, u3) => {
    "start" === u3 && (r2 = 0, a4 = 0, o2 = 0);
    const i5 = l4 - r2, p4 = c4 - a4, m3 = s2 - o2;
    n.move(i5, p4, m3), r2 += i5, a4 += p4, o2 += m3, e5(), "end" === u3 && t2.endInteraction?.();
  } };
}
function E(t2, n = null, e5) {
  let r2 = null;
  const o2 = null == n || t2.spatialReference?.equals(n) ? (t3) => t3 : (t3) => null != t3 ? H(t3, n) : t3, l4 = __spreadValues({ exclude: [] }, e5);
  return (n2) => {
    if ("start" === n2.action && (r2 = o2(t2.toMap(n2.screenStart, l4))), null == r2) return null;
    const e6 = o2(t2.toMap(n2.screenEnd, l4));
    return null != e6 ? __spreadProps(__spreadValues({}, n2), { mapStart: r2, mapEnd: e6 }) : null;
  };
}
function S2(n) {
  const e5 = n.map((t2) => f(t2)).filter(N), r2 = j();
  return (t2) => {
    const n2 = r2(t2);
    return e5.forEach((n3) => n3(t2)), n2;
  };
}
function g(t2) {
  const n = t2.operations?.createResetState();
  return (t3) => (n?.remove(), t3);
}
function v(t2) {
  const n = t2.map((t3) => g(t3)).filter((t3) => null != t3);
  return (t3) => (n.forEach((n2) => n2(t3)), t3);
}
function z2() {
  let t2 = 0, n = 0, e5 = 0;
  return (r2) => {
    "start" === r2.action && (t2 = r2.mapStart.x, n = r2.mapStart.y, e5 = r2.mapStart.z ?? 0);
    const a4 = r2.mapEnd.x - t2, o2 = r2.mapEnd.y - n, l4 = (r2.mapEnd.z ?? 0) - e5;
    return t2 = r2.mapEnd.x, n = r2.mapEnd.y, e5 = r2.mapEnd.z, __spreadProps(__spreadValues({}, r2), { mapDeltaX: a4, mapDeltaY: o2, mapDeltaZ: l4, mapDeltaSpatialReference: r2.mapStart.spatialReference });
  };
}
function j() {
  let t2 = 0, n = 0, e5 = 0;
  return (r2) => {
    "start" === r2.action && (t2 = r2.mapStart.x, n = r2.mapStart.y, e5 = r2.mapStart.z ?? 0);
    const a4 = r2.mapEnd.x - t2, o2 = r2.mapEnd.y - n, l4 = (r2.mapEnd.z ?? 0) - e5;
    return __spreadProps(__spreadValues({}, r2), { translationX: a4, translationY: o2, translationZ: l4 });
  };
}
function M() {
  let t2 = 0, n = 0;
  return (e5) => {
    "start" === e5.action && (t2 = e5.screenStart.x, n = e5.screenStart.y);
    const r2 = e5.screenEnd.x - t2, a4 = e5.screenEnd.y - n;
    return t2 = e5.screenEnd.x, n = e5.screenEnd.y, __spreadProps(__spreadValues({}, e5), { screenDeltaX: r2, screenDeltaY: a4 });
  };
}
function R(t2, n) {
  let a4 = null, o2 = 0, l4 = 0;
  return (c4) => {
    if ("start" === c4.action && (a4 = t2.toScreen?.(n), null != a4 && (a4.x < 0 || a4.x > t2.width || a4.y < 0 || a4.y > t2.height ? a4 = null : (o2 = c4.screenStart.x - a4.x, l4 = c4.screenStart.y - a4.y))), null == a4) return null;
    const s2 = r(c4.screenEnd.x - o2, 0, t2.width), u3 = r(c4.screenEnd.y - l4, 0, t2.height), i5 = i2(s2, u3);
    return c4.screenStart = a4, c4.screenEnd = i5, c4;
  };
}
var w3 = () => {
};
var D2 = class _D {
  constructor() {
    this.execute = w3;
  }
  next(t2, n = new _D()) {
    return null != t2 && (this.execute = (e5) => {
      const r2 = t2(e5);
      null != r2 && n.execute(r2);
    }), n;
  }
};
function U(t2, n, e5 = []) {
  if ("2d" === t2.type) return (t3) => t3;
  let r2 = null;
  return (a4) => {
    "start" === a4.action && (r2 = t2.toMap(a4.screenStart, { exclude: e5 }), null != r2 && (r2.z = x(r2, t2, n)));
    const o2 = t2.toMap(a4.screenEnd, { exclude: e5 });
    null != o2 && (o2.z = x(o2, t2, n));
    const l4 = null != r2 && null != o2 ? { sceneStart: r2, sceneEnd: o2 } : null;
    return __spreadProps(__spreadValues({}, a4), { scenePoints: l4 });
  };
}
function G(t2, n, e5) {
  const r2 = n.elevationProvider.getElevation(t2.x, t2.y, t2.z ?? 0, t2.spatialReference, "scene") ?? 0, a4 = x2(t2);
  return a4.z = r2, a4.hasZ = true, a4.z = x(a4, n, e5), a4;
}
function q2(t2, n) {
  if ("2d" === t2.type) return (t3) => t3;
  let e5 = null;
  return (r2) => {
    "start" === r2.action && (e5 = G(r2.mapStart, t2, n));
    const a4 = G(r2.mapEnd, t2, n), o2 = null != e5 && null != a4 ? { sceneStart: e5, sceneEnd: a4 } : null;
    return __spreadProps(__spreadValues({}, r2), { scenePoints: o2 });
  };
}

// node_modules/@arcgis/core/views/interactive/snapping/SnappingDragPipelineStep.js
function f2({ predicate: o2 = () => true, snappingManager: i5, snappingContext: a4, updatingHandles: u3, useZ: p4 = true }) {
  const c4 = new D2();
  if (null == i5) return { snappingStep: [y4, c4], cancelSnapping: y4 };
  let f3, Z2 = null, j2 = null, z4 = null;
  const T = () => {
    Z2 = e(Z2), i5.doneSnapping(), j2?.frameTask.remove(), j2 = null, f3 = l(f3), z4 = null;
  }, k5 = d2(i5, p4, c4);
  let w4 = null, I = null, U3 = null;
  return { snappingStep: [(n) => {
    if (!o2(n)) return n;
    const { action: e5 } = n;
    if ("start" === e5) {
      const { info: e6 } = n, t2 = m2(i5.view);
      if (j2 = g2(a4, n, t2), j2.context.selfSnappingZ = null, !p4 && null != e6) {
        const n2 = S3(a4.coordinateHelper, e6.handle.part);
        null != n2 && (j2.context.selfSnappingZ = { value: n2, elevationInfo: a4.elevationInfo ?? k });
      }
    }
    if (null != j2) {
      const { context: o3, originalScenePos: a5, originalPos: l4 } = j2, { mapEnd: s2, mapStart: c5, scenePoints: d3 } = n, m3 = x5(l4, v2(s2, c5)), g3 = v2(c5, l4), S4 = __spreadProps(__spreadValues({}, n), { action: "update" }), y5 = j2.context, T2 = P(a5, d3), C = i5.update({ point: m3, scenePoint: T2, context: o3 });
      if (U3 = C, h2(s2, C, g3, p4), w4 = m3, I = T2, "end" !== e5) {
        const { frameTask: n2 } = j2;
        null == Z2 && (Z2 = new AbortController()), z4 = (e6) => {
          u3.addPromise(y(k5({ frameTask: n2, event: S4, context: y5, point: m3, scenePoint: T2, delta: g3, getLastState: () => ({ point: w4, scenePoint: I, updatePoint: e6.forceUpdate ? null : U3 }) }, Z2.signal)));
        }, z4({ forceUpdate: false }), null == f3 && (f3 = l2(() => i5.options.effectiveEnabled, () => z4?.({ forceUpdate: true })));
      }
    }
    return "end" === e5 && T(), n;
  }, c4], cancelSnapping: (n) => (T(), n) };
}
function d2(n, e5, t2) {
  return L(async ({ frameTask: o2, point: r2, scenePoint: a4, context: l4, event: s2, delta: u3, getLastState: p4 }, c4) => {
    const f3 = await o2.schedule(() => n.snap({ point: r2, scenePoint: a4, context: l4, signal: c4 }), c4);
    if (f3.valid) {
      let a5 = await o2.schedule(() => f3.apply(), c4);
      const d3 = p4();
      null != d3.point && r2 !== d3.point && (a5 = n.update({ point: d3.point, scenePoint: d3.scenePoint, context: l4 })), null != d3.updatePoint && a3(a5, d3.updatePoint) || (h2(s2.mapEnd, a5, u3, e5), t2.execute(s2));
    }
  });
}
function m2(n) {
  return "3d" === n.type ? n.resourceController.scheduler.registerTask(p.SNAPPING) : D;
}
function g2(n, e5, t2) {
  return { context: new e3({ editGeometryOperations: n.editGeometryOperations, elevationInfo: n.elevationInfo, pointer: n.pointer, vertexHandle: null != e5.info ? e5.info.handle : null, excludeFeature: n.excludeFeature, feature: n.feature, visualizer: n.visualizer }), originalPos: null != e5.snapOrigin ? n.coordinateHelper.vectorToDehydratedPoint(e5.snapOrigin) : e5.mapStart, originalScenePos: null != e5.scenePoints ? e5.scenePoints.sceneStart : null, frameTask: t2 };
}
function x5(n, [e5, t2, o2]) {
  const r2 = x2(n);
  return r2.x += e5, r2.y += t2, r2.hasZ && (r2.z += o2), r2;
}
function P(n, e5) {
  return null == n || null == e5 ? null : x5(n, v2(e5.sceneEnd, e5.sceneStart));
}
function v2(n, e5) {
  const t2 = n.hasZ && e5.hasZ ? n.z - e5.z : 0;
  return [n.x - e5.x, n.y - e5.y, t2];
}
function h2(n, e5, [t2, o2, r2], i5) {
  n.x = e5.x + t2, n.y = e5.y + o2, i5 && n.hasZ && e5.hasZ && (n.z = e5.z + r2);
}
function S3(n, e5) {
  if (!n.hasZ()) return null;
  const t2 = e5.vertices;
  let o2 = null;
  for (const r2 of t2) {
    const e6 = n.getZ(r2.pos);
    if (null != o2 && null != e6 && Math.abs(e6 - o2) > 1e-6) return null;
    null == o2 && (o2 = e6);
  }
  return o2;
}
function y4(n) {
  return n;
}

// node_modules/@arcgis/core/views/draw/DrawOperation.js
var k4 = "crosshair";
var Z = "progress";
var L2 = /* @__PURE__ */ Symbol();
var U2 = /* @__PURE__ */ Symbol();
var A2 = class extends l3 {
  constructor(t2) {
    super(t2), this._createOperationCompleted = false, this._hideDefaultCursor = false, this._pointerDownStates = new e2(), this._stagedScreenPoint = null, this._stagedPointerType = null, this._updatingHandles = new h(), this._stagedPointerId = null, this.constraintsEnabled = false, this.constraints = void 0, this._getPointConstraint = t(q), this._getPolylineOrPolygonConstraint = t(z), this.constraintZ = null, this.defaultZ = null, this.isDraped = true, this.labelOptions = new c3(), this.cursor = null, this.loading = false, this.snapToSceneEnabled = null, this.firstVertex = null, this.lastVertex = null, this.secondToLastVertex = null, null == t2.elevationInfo && (this.elevationInfo = i3(!!t2.hasZ));
  }
  initializePointer() {
    const t2 = this.view.inputManager?.latestPointerInfo;
    null != t2 && "touch" !== t2.type && this._updatePointer(t2.location, t2.id, t2.type);
  }
  initialize() {
    const { geometryType: t2, view: e5 } = this, i5 = e5.spatialReference, r2 = "viewingMode" in e5.state ? e5.state.viewingMode : 2, s2 = "segment" === t2 || "multipoint" === t2 ? "polyline" : t2;
    this.coordinateHelper = Y(this.hasZ, this.hasM, i5), this._editGeometryOperations = new S(new w2(s2, this.coordinateHelper), r2), this._snappingOperation = new p2({ view: e5 }), this.addHandles([l2(() => ({ stagedPoint: this._snappingOperation.stagedPoint, constraint: this._constraint }), ({ stagedPoint: t3, constraint: e6 }, i6) => {
      const { snappingOptions: n } = this;
      n && (n.forceDisabled = null != e6 && ge(e6));
      if (null != i6 && t3 === i6.stagedPoint && e6 !== i6.constraint) return this._onKeyboardBasedChange();
      this._processCursor(t3 ?? this._screenToMap(this._stagedScreenPoint));
    }, { equals: (t3, e6) => t3.stagedPoint === e6.stagedPoint && o(t3.constraint, e6.constraint) }), l2(() => this.view.viewpoint, (t3, e6) => {
      t3 && e6 && y2(t3, e6) && this._onKeyboardBasedChange();
    })]), this._activePart = new V(i5, r2), this._editGeometryOperations.data.parts.push(this._activePart);
    const a4 = this.segmentLabels;
    null != a4 && (a4.context = { view: e5, editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, labelOptions: this.labelOptions, automaticLengthMeasurementUtils: this.automaticLengthMeasurementUtils }, this.addHandles(l2(() => this.labelOptions.enabled, (t3) => {
      a4.visible = t3;
    }, w))), this.addHandles(this._editGeometryOperations.on(["vertex-add", "vertex-update", "vertex-remove"], (t3) => {
      const e6 = t3.vertices.map((t4) => ({ componentIndex: 0, vertexIndex: t4.index, coordinates: this.coordinateHelper.vectorToArray(t4.pos) })), i6 = e6.map((t4) => t4.coordinates), n = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.getFirstVertex()?.pos) ?? null;
      a3(n, this.firstVertex) || (this.firstVertex = n);
      const r3 = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.getLastVertex()?.pos) ?? null;
      a3(r3, this.lastVertex) || (this.lastVertex = r3);
      const s3 = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.segments.at(-1)?.leftVertex?.pos) ?? null;
      switch (a3(s3, this.secondToLastVertex) || (this.secondToLastVertex = s3), this._processCursor(this.cursorVertex), t3.type) {
        case "vertex-add":
          this.emit(t3.type, __spreadProps(__spreadValues({}, t3), { added: i6, vertices: e6 }));
          break;
        case "vertex-update":
          this.emit(t3.type, __spreadProps(__spreadValues({}, t3), { updated: i6, vertices: e6 }));
          break;
        case "vertex-remove":
          this.emit(t3.type, __spreadProps(__spreadValues({}, t3), { removed: i6, vertices: e6 }));
      }
    }));
    const c4 = this._manipulator = new s({ consumesClicks: false, grabbableForEvent: (t3) => "click" !== this.drawingMode || "touch" === t3.pointerType && this._snappingEnabled && 1 === this._pointerDownStates.size });
    this.manipulators.add(c4), c4.grabbable = "point" !== t2 && "multipoint" !== t2, this.addHandles([c4.events.on("immediate-click", (t3) => this._onImmediateClick(t3)), c4.events.on("immediate-double-click", (t3) => this._onImmediateDoubleClick(t3)), l2(() => this.drawingMode, () => {
      this.removeHandles(L2), this.addHandles(this._createManipulatorDragPipeline(c4), L2);
    }, w), l2(() => ({ effectiveCursor: this.effectiveCursor }), ({ effectiveCursor: t3 }) => {
      c4.cursor = t3;
    }, w)]), x3(this, () => {
      const t3 = this.view.inputManager.latestPointerInfo?.type ?? "mouse", e6 = this._getSnappingContext(t3);
      if (null != this.snappingManager) {
        const t4 = this._snappingOperation.snapAgainNearPreviousMapPoint(this.snappingManager, e6);
        this._updatingHandles.addPromise(y(t4));
      }
    });
  }
  destroy() {
    u(this.segmentLabels), u(this._snappingOperation), this._editGeometryOperations = u(this._editGeometryOperations), this._updatingHandles.destroy();
  }
  get _isDragging() {
    const { _stagedPointerId: t2, _manipulator: e5 } = this;
    return null != t2 && this._pointerDownStates.has(t2) || e5.grabbing || !e5.interactive;
  }
  get _snappingEnabled() {
    return null != this.snappingManager && this.snappingManager.options.effectiveEnabled;
  }
  get _requiresScenePoint() {
    const t2 = this._updateAndGetEffectiveDrawSurface();
    return "3d" === this.view.type && this.drawSurface !== t2;
  }
  get canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  get canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  get committedVertices() {
    return this._activePart.vertices.map((t2) => this.coordinateHelper.vectorToArray(t2.pos));
  }
  get _constraint() {
    const { constraints: t2, constraintsEnabled: e5 } = this;
    if (t2 && e5) switch (this.geometryType) {
      case "point":
      case "multipoint":
        return this._getPointConstraint(t2);
      case "polygon":
      case "polyline":
        return this._getPolylineOrPolygonConstraint(this.lastVertex, this.secondToLastVertex, t2);
    }
  }
  set drawingMode(t2) {
    this._set("drawingMode", t2 ?? e4);
  }
  get effectiveCursor() {
    return this.loading ? Z : this._hideDefaultCursor ? null : this.cursor || k4;
  }
  get interactive() {
    return this._manipulator.interactive;
  }
  set interactive(t2) {
    this._manipulator.interactive = t2;
  }
  get isCompleted() {
    return this._createOperationCompleted;
  }
  get numCommittedVertices() {
    return this._activePart.vertices.length;
  }
  get snappingOptions() {
    return null != this.snappingManager ? this.snappingManager.options : null;
  }
  get cursorVertex() {
    return this._get("cursorVertex");
  }
  get visualizationCursorVertex() {
    return "mouse" === this._stagedPointerType ? this.cursorVertex : null;
  }
  get committableVertex() {
    const { cursorVertex: t2, lastVertex: e5, firstVertex: i5, geometryType: n } = this;
    return "polygon" === n && u2(t2, i5) || u2(t2, e5) ? null : t2;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get geometryIncludingUncommittedVertices() {
    const { committedVertices: t2, committableVertex: e5, coordinateHelper: i5 } = this, n = t2.slice();
    return null != e5 && n.push(i5.pointToArray(e5)), n;
  }
  cancel() {
    this.complete({ aborted: true });
  }
  commitStagedVertex() {
    this._snappingOperation.abort();
    const { committableVertex: t2 } = this;
    null != t2 && this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t2), this._activePart);
  }
  complete(t2) {
    const e5 = t2?.aborted || false;
    this._snappingOperation.abort(), this.snappingManager?.doneSnapping();
    const { geometryType: i5, numCommittedVertices: n } = this, r2 = "multipoint" === i5 && 0 === n || "polyline" === i5 && n < 2 || "polygon" === i5 && n < 3;
    "segment" !== i5 && "point" !== i5 || this.commitStagedVertex(), this._createOperationCompleted = !r2, (this.isCompleted || e5) && (this._stagedScreenPoint = null, this._stagedPointerId = null, this._stagedPointerType = null, this._processCursor(null), this.emit("complete", { vertices: this.committedVertices.map((t3, e6) => ({ componentIndex: 0, vertexIndex: e6, coordinates: t3 })), aborted: e5, type: "complete" }));
  }
  onInputEvent(t2) {
    switch (t2.type) {
      case "pointer-down":
        this._pointerDownStates.add(t2.pointerId);
        break;
      case "pointer-up":
        this._pointerDownStates.delete(t2.pointerId);
    }
    switch (t2.type) {
      case "pointer-move":
        return this._onPointerMove(t2);
      case "hold":
        return this._onHold(t2);
    }
  }
  redo() {
    this._editGeometryOperations.redo();
  }
  undo() {
    null != this.snappingManager && this.snappingManager.doneSnapping(), this._editGeometryOperations.undo();
  }
  _processCursor(t2) {
    const e5 = a(this.cursorVertex), n = a(t2), r2 = n && (this._updateAndGetEffectiveDrawSurface()?.constrainZ(n) ?? n), s2 = this._snapToClosingVertex(r2), o2 = this._applyConstraints(s2);
    u2(e5, o2) || (this._set("cursorVertex", o2), this.segmentLabels?.set("stagedVertex", null != o2 ? this.coordinateHelper.pointToVector(o2) : null), null == o2 || "mouse" !== this._stagedPointerType ? this.emit("cursor-remove") : this.emit("cursor-update", { updated: null, vertices: [{ componentIndex: 0, vertexIndex: this._activePart.vertices.length, coordinates: this.coordinateHelper.pointToArray(o2) }], operation: "apply", type: "vertex-update" }));
  }
  _snapToClosingVertex(t2) {
    if (null == t2 || this._isDragging || "polygon" !== this.geometryType || this.numCommittedVertices <= 2) return t2;
    const e5 = this._mapToScreen(t2);
    if (!e5) return t2;
    const i5 = this._activePart;
    return this._vertexWithinPointerDistance(i5.vertices[0].pos, e5) ? this.firstVertex : this._vertexWithinPointerDistance(i5.vertices.at(-1).pos, e5) ? this.lastVertex : t2;
  }
  _createManipulatorDragPipeline(t2) {
    switch (this.drawingMode) {
      case "click":
        return this._createManipulatorDragPipelineClick(t2);
      case "freehand":
        return this._createManipulatorDragPipelineFreehand(t2);
      case "hybrid":
        return this._createManipulatorDragPipelineHybrid(t2);
    }
  }
  _createManipulatorDragPipelineClick(t2) {
    return p3(t2, (t3, e5, i5, n) => {
      const r2 = "touch" === n && this._snappingEnabled;
      if (this.isCompleted || !r2) return;
      const { snappingStep: s2, cancelSnapping: o2 } = f2({ predicate: () => r2, snappingManager: this.snappingManager, snappingContext: new e3({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, feature: this.graphic, pointer: n, visualizer: this.snappingVisualizer, drawConstraints: this.constraints }), updatingHandles: this._updatingHandles, useZ: !this._requiresScenePoint });
      i5 = i5.next((t4) => (r2 && null != this.snappingManager && this.snappingManager.doneSnapping(), t4)).next(o2), e5.next(this._screenToMapDragEventStep()).next((t4) => ("start" === t4.action && (this._processCursor(t4.mapStart), ("segment" === this.geometryType || r2 && !this.numCommittedVertices) && this.commitStagedVertex()), t4)).next(U(this.view, this.elevationInfo)).next(...s2).next((t4) => (r2 && (this._processCursor(t4.mapEnd), "end" === t4.action && this.commitStagedVertex()), t4)).next((t4) => ("end" === t4.action && ("mouse" !== this._stagedPointerType && this._snappingOperation.abort(), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete()), t4));
    });
  }
  _createManipulatorDragPipelineFreehand(t2) {
    return p3(t2, (t3, e5) => {
      this.isCompleted || e5.next(this._screenToMapDragEventStep()).next((t4) => ("start" === t4.action && (this._snappingOperation.abort(), null == this.committableVertex && this._processCursor(t4.mapStart), "segment" === this.geometryType && this.commitStagedVertex()), t4)).next((t4) => {
        switch (t4.action) {
          case "start":
          case "update":
            this._processCursor(t4.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            this.complete();
        }
        return t4;
      });
    });
  }
  _createManipulatorDragPipelineHybrid(t2) {
    return p3(t2, (t3, e5) => {
      this.isCompleted || e5.next(this._screenToMapDragEventStep()).next((t4) => ("start" === t4.action && (this._snappingOperation.abort(), this.addHandles(this._editGeometryOperations.createUndoGroup(), U2), this._processCursor(t4.mapStart), this.commitStagedVertex()), t4)).next((t4) => {
        switch (t4.action) {
          case "start":
          case "update":
            this._processCursor(t4.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            "mouse" !== this._stagedPointerType && this._snappingOperation.abort(), this.removeHandles(U2), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete();
        }
        return t4;
      });
    });
  }
  get _drawAtFixedElevation() {
    const { constraintsEnabled: t2, constraintZ: e5, geometryType: i5, numCommittedVertices: n } = this;
    return t2 ? null != e5 || "segment" === i5 && n > 0 : ("segment" === i5 || "polygon" === i5) && n > 0;
  }
  _updateAndGetEffectiveDrawSurface() {
    const { constraintsEnabled: t2, coordinateHelper: e5, drawSurface: i5, elevationDrawSurface: n, snapToSceneEnabled: r2 } = this;
    if (null == n) return i5;
    if (!this.hasZ) return n.defaultZ = null, n;
    const s2 = this.elevationInfo?.mode;
    let o2 = this.defaultZ, a4 = t2 || "absolute-height" === s2;
    if (null != r2 && (a4 = r2), "on-the-ground" === s2 && (a4 = false), this._drawAtFixedElevation) {
      o2 = (t2 ? this.constraintZ : null) ?? e5.getZ(this._activePart.vertices[0].pos), a4 = false;
    }
    return a4 ? i5 : (n.defaultZ = o2, n);
  }
  _mapToScreen(t2) {
    return this._updateAndGetEffectiveDrawSurface()?.mapToScreen(t2);
  }
  _onHold(t2) {
    this._snappingOperation.abort(), "click" === this.drawingMode && "touch" === t2.pointerType && this._snappingEnabled && this._processCursor(t2.mapPoint), t2.stopPropagation();
  }
  _onImmediateClick(t2) {
    if (!("mouse" === t2.pointerType && 2 === t2.button || this._manipulator.dragging)) try {
      const { drawingMode: e5, geometryType: i5 } = this;
      this._stagedPointerType = t2.pointerType, this._stagedScreenPoint = t2.screenPoint;
      const n = this._screenToMap(t2.screenPoint);
      if (null == n) return;
      if (null == n || "freehand" === e5 && "point" !== i5 && "multipoint" !== i5) return;
      if (this._snappingEnabled && null != this.cursorVertex || this._processCursor(n), null == this.committableVertex) return void this.complete();
      this.commitStagedVertex(), "mouse" !== t2.pointerType && this._processCursor(null), ("freehand" === e5 && "multipoint" !== this.geometryType || "point" === i5 || "segment" === i5 && 2 === this.numCommittedVertices || "segment" === i5 && "hybrid" === e5 && 1 === this.numCommittedVertices) && this.complete();
    } finally {
      t2.stopPropagation();
    }
  }
  _onImmediateDoubleClick(t2) {
    this._manipulator.dragging || "point" === this.geometryType || (this.complete(), t2.stopPropagation());
  }
  _onPointerMove(t2) {
    const e5 = i2(t2.x, t2.y);
    this._updatePointer(e5, t2.pointerId, t2.pointerType) && t2.stopPropagation();
  }
  _updatePointer(t2, e5, i5) {
    return this._stagedScreenPoint = t2, this._stagedPointerType = i5, this._stagedPointerId = e5, this._isDragging ? (this._snappingOperation.abort(), false) : (this._processCursorMovementRelativeToSurface(t2, i5), true);
  }
  _onKeyboardBasedChange() {
    "mouse" === this._stagedPointerType && this._stagedScreenPoint && null != this._stagedPointerId && !this._isDragging ? this._processCursorMovementRelativeToSurface(this._stagedScreenPoint, this._stagedPointerType) : this._snappingOperation.abort();
  }
  _processCursorMovementRelativeToSurface(t2, e5) {
    const i5 = this._snappingOperation, n = this._screenToMap(t2), r2 = this._requiresScenePoint ? this.drawSurface?.screenToMap(t2) : null;
    if (null == n) return this._hideDefaultCursor = true, this._processCursor(null), void i5.abort();
    this._hideDefaultCursor = false;
    const s2 = this.snappingManager;
    if (null == s2) return this._processCursor(n), void i5.abort();
    const a4 = this._getSnappingContext(e5);
    this._updatingHandles.addPromise(y(i5.snap({ point: n, scenePoint: r2 }, s2, a4)));
  }
  _applyConstraints(t2) {
    const { _constraint: e5, constraints: i5 } = this;
    if (!t2 || !i5 || !e5) return t2;
    const { context: n } = i5, r2 = k2(t2, n), s2 = r2 ? e5.closestTo(r2) : void 0;
    if (!s2) return t2;
    const o2 = A(s2, t2, n), a4 = "2d" === this.view.type || "absolute-height" !== n.elevationInfo.mode;
    return null != o2 && a4 && null != this.constraintZ && this.hasZ && (o2.z = this.constraintZ), o2;
  }
  _screenToMap(t2) {
    return t2 ? this._updateAndGetEffectiveDrawSurface()?.screenToMap(t2) : null;
  }
  _screenToMapDragEventStep() {
    let t2 = null;
    return (e5) => {
      if ("start" === e5.action && (t2 = this._screenToMap(e5.screenStart)), null == t2) return null;
      const i5 = this._screenToMap(e5.screenEnd);
      return null != i5 ? __spreadProps(__spreadValues({}, e5), { mapStart: t2, mapEnd: i5 }) : null;
    };
  }
  _vertexWithinPointerDistance(t2, e5) {
    const i5 = 25, n = this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t2));
    return null != n && z3(n, e5, i5);
  }
  _getSnappingContext(t2) {
    const e5 = this._drawAtFixedElevation ? this.elevationDrawSurface?.defaultZ : null;
    return new e3({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, pointer: t2, feature: this.graphic, visualizer: this.snappingVisualizer, selfSnappingZ: null != e5 ? { value: e5, elevationInfo: this.elevationInfo } : null, drawConstraints: this.constraints });
  }
};
function z3(t2, e5, i5) {
  const n = t2.x - e5.x, r2 = t2.y - e5.y;
  return n * n + r2 * r2 <= i5;
}
__decorate([a2()], A2.prototype, "_hideDefaultCursor", void 0), __decorate([a2()], A2.prototype, "_stagedPointerId", void 0), __decorate([a2()], A2.prototype, "_isDragging", null), __decorate([a2()], A2.prototype, "_snappingOperation", void 0), __decorate([a2()], A2.prototype, "_snappingEnabled", null), __decorate([a2({ constructOnly: true })], A2.prototype, "graphic", void 0), __decorate([a2()], A2.prototype, "constraintsEnabled", void 0), __decorate([a2()], A2.prototype, "constraints", void 0), __decorate([a2()], A2.prototype, "_constraint", null), __decorate([a2()], A2.prototype, "constraintZ", void 0), __decorate([a2()], A2.prototype, "defaultZ", void 0), __decorate([a2()], A2.prototype, "isDraped", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "automaticLengthMeasurementUtils", void 0), __decorate([a2({ value: e4 })], A2.prototype, "drawingMode", null), __decorate([a2({ constructOnly: true })], A2.prototype, "elevationDrawSurface", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "elevationInfo", void 0), __decorate([a2({ constructOnly: true, type: c3 })], A2.prototype, "labelOptions", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "geometryType", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "hasM", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "hasZ", void 0), __decorate([a2()], A2.prototype, "cursor", void 0), __decorate([a2()], A2.prototype, "effectiveCursor", null), __decorate([a2()], A2.prototype, "loading", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "manipulators", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "drawSurface", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "segmentLabels", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "snappingManager", void 0), __decorate([a2({ constructOnly: true })], A2.prototype, "snappingVisualizer", void 0), __decorate([a2()], A2.prototype, "snapToSceneEnabled", void 0), __decorate([a2({ readOnly: true })], A2.prototype, "cursorVertex", null), __decorate([a2({ readOnly: true })], A2.prototype, "visualizationCursorVertex", null), __decorate([a2()], A2.prototype, "committableVertex", null), __decorate([a2()], A2.prototype, "firstVertex", void 0), __decorate([a2()], A2.prototype, "lastVertex", void 0), __decorate([a2()], A2.prototype, "secondToLastVertex", void 0), __decorate([a2()], A2.prototype, "updating", null), __decorate([a2({ constructOnly: true })], A2.prototype, "view", void 0), A2 = __decorate([c("esri.views.draw.DrawOperation")], A2);

export {
  p3 as p,
  m,
  f,
  E,
  S2 as S,
  g,
  v,
  z2 as z,
  M,
  R,
  D2 as D,
  U,
  q2 as q,
  f2,
  A2 as A
};
//# sourceMappingURL=chunk-ONICA6UL.js.map
