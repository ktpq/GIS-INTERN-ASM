import {
  g
} from "./chunk-XT6ZTIMI.js";
import {
  M as M2,
  n as n3
} from "./chunk-QS744SZT.js";
import {
  D as D2,
  Q,
  k as k6,
  v as v3,
  w as w4,
  x as x4
} from "./chunk-ZJ3ZBR2Y.js";
import {
  l as l3,
  o as o2,
  t as t2,
  t2 as t3
} from "./chunk-VTKZ74CB.js";
import {
  E,
  J2 as J,
  O,
  V,
  i as i3,
  k as k5
} from "./chunk-4UFQ4VTC.js";
import {
  R,
  T,
  U as U2,
  b as b2,
  j as j4,
  k as k4,
  v as v2
} from "./chunk-6OZEDU5Y.js";
import {
  v
} from "./chunk-3IEFDVPE.js";
import {
  f as f3
} from "./chunk-3BA3TRUD.js";
import {
  x as x3
} from "./chunk-SHQIZYMW.js";
import {
  D as D3,
  K
} from "./chunk-3DBAJXKJ.js";
import {
  a as a3
} from "./chunk-72HKR67W.js";
import {
  y as y2
} from "./chunk-IDLF62WL.js";
import {
  c as c4
} from "./chunk-DP2PTG4E.js";
import {
  h as h2
} from "./chunk-K7QCGVDB.js";
import {
  I,
  a as a4,
  c as c3,
  k as k3,
  y
} from "./chunk-YP7OFZOK.js";
import {
  D,
  f as f2,
  k as k2,
  m,
  z
} from "./chunk-EASH2KMP.js";
import {
  t
} from "./chunk-MXHLIIX3.js";
import {
  n as n2
} from "./chunk-QOQBWURX.js";
import {
  h
} from "./chunk-TXF5FFQH.js";
import {
  Y,
  c as c2,
  p,
  u as u3,
  x
} from "./chunk-SGNC5H35.js";
import {
  x as x2
} from "./chunk-TMW4JZMV.js";
import {
  w as w3
} from "./chunk-AP2NAWWU.js";
import {
  j as j3
} from "./chunk-JXLQUNSA.js";
import {
  a as a2,
  n,
  r
} from "./chunk-KEY3YQEB.js";
import {
  M,
  e as e2,
  f,
  j as j2,
  k,
  l as l2,
  o,
  u as u2
} from "./chunk-5GPMO33J.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  re,
  te
} from "./chunk-DMD5CGVA.js";
import {
  U,
  j,
  l,
  w
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  i as i2
} from "./chunk-LD7VLL5E.js";
import {
  b,
  i2 as i
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  w as w2
} from "./chunk-7ELXYOAW.js";
import {
  L,
  e,
  u2 as u
} from "./chunk-2KP24SU5.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/undoredo/UndoRedoError.js
var r2 = { UndoRedoUpdating: "Cannot perform operation whilst undo redo is updating", UndoInvalidError: "There are no items to Undo", RedoInvalidError: "There are no items to Redo", ApplyInvalidError: "Cannot apply an item that is already applied" };
var o3 = class extends Error {
  constructor() {
    super(r2.UndoRedoUpdating), this.type = "undo-redo-updating-error";
  }
};
var e3 = class extends Error {
  constructor() {
    super(r2.UndoInvalidError), this.type = "undo-redo-undo-error";
  }
};
var d = class extends Error {
  constructor() {
    super(r2.RedoInvalidError), this.type = "undo-redo-redo-error";
  }
};

// node_modules/@arcgis/core/UndoRedo.js
var h3 = class extends b {
  constructor() {
    super(...arguments), this._stack = new q(), this._stackPosition = -1, this._updatingHandles = new h();
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get canUndo() {
    return this.hasUndo && !this.updating;
  }
  get hasUndo() {
    return this._stackPosition >= 0;
  }
  get canRedo() {
    return this.hasRedo && !this.updating;
  }
  get hasRedo() {
    return this._stackPosition < this._stack.length - 1;
  }
  _truncateForwardStack() {
    this._stack.splice(this._stackPosition + 1, this._stack.length - this._stackPosition).forEach((t5) => t5.destroy());
  }
  _drainStack() {
    this._stack.drain((t5) => t5.destroy()), this._stackPosition = -1;
  }
  async undo() {
    if (!this.hasUndo) throw new e3();
    if (this.updating) throw new o3();
    const t5 = this._stack.getItemAt(this._stackPosition);
    t5 && await this._updatingHandles.addPromise((async () => {
      await t5.executeUndoRedoOperation(1), --this._stackPosition, t5.canRedo || this._truncateForwardStack();
    })());
  }
  async redo() {
    if (!this.hasRedo) throw new d();
    if (this.updating) throw new o3();
    const t5 = this._stack.getItemAt(this._stackPosition + 1);
    if (!t5) throw new d();
    await this._updatingHandles.addPromise((async () => {
      await t5.executeUndoRedoOperation(2), ++this._stackPosition;
    })());
  }
  peekUndo() {
    if (this.canUndo) return this._stack.getItemAt(this._stackPosition);
  }
  peekRedo() {
    if (this.canRedo) return this._stack.getItemAt(this._stackPosition + 1);
  }
  async inject(t5) {
    if (this.updating) throw new o3();
    await this._updatingHandles.addPromise((async () => {
      0 === t5.status && await t5.executeUndoRedoOperation(0), t5.canUndo ? (this._stack.splice(this._stackPosition + 1, 0, t5), this._stackPosition++) : this._stackPosition > -1 && (this._stack.splice(0, this._stackPosition + 1).forEach((t6) => t6.destroy()), this._stackPosition = -1);
    })());
  }
  async add(t5) {
    if (this.updating) throw new o3();
    await this._updatingHandles.addPromise((async () => {
      0 === t5.status && await t5.executeUndoRedoOperation(0), this._stackPosition >= -1 && this._truncateForwardStack(), t5.canUndo ? (this._stack.push(t5), this._stackPosition = this._stack.length - 1) : this._drainStack();
    })());
  }
  async removeTagged(t5, s5 = false) {
    if (this.updating && !s5) return;
    await j(() => !this.updating);
    const a6 = new q();
    for (let i4 = 0; i4 < this._stack.length; i4++) {
      const s6 = this._stack.getItemAt(i4);
      s6 && (s6.tag === t5 ? (s6.destroy(), i4 === this._stackPosition && (this._stackPosition = a6.length - 1)) : a6.push(s6));
    }
    this._stack = a6, this._stackPosition > a6.length - 1 && (this._stackPosition = a6.length - 1);
  }
  async clear(t5 = false) {
    if (this.updating && !t5) throw new o3();
    await j(() => !this.updating), this._drainStack();
  }
};
__decorate([a()], h3.prototype, "_stack", void 0), __decorate([a()], h3.prototype, "_stackPosition", void 0), __decorate([a()], h3.prototype, "updating", null), __decorate([a({ readOnly: true })], h3.prototype, "canUndo", null), __decorate([a({ readOnly: true })], h3.prototype, "hasUndo", null), __decorate([a({ readOnly: true })], h3.prototype, "canRedo", null), __decorate([a({ readOnly: true })], h3.prototype, "hasRedo", null), h3 = __decorate([c("esri.UndoRedo")], h3);

// node_modules/@arcgis/core/views/draw/support/CreateOperationGeometry.js
var l4 = class {
  constructor() {
    this.committedVertices = null, this.cursorVertex = null, this.full = null, this.outline = null, this.cursorEdge = null, this.circle = null, this.rectangle = null;
  }
};

// node_modules/@arcgis/core/views/draw/support/helpMessageUtils.js
function e4(e5, i4, a6) {
  if (null == e5) return "noTool";
  switch (e5) {
    case "point":
      return n4();
    case "multipoint":
      return "multipoint";
    case "polyline":
      return r3(i4, a6);
    case "polygon":
      return t4(i4, a6);
    case "rectangle":
    case "circle":
      return l5(i4, a6);
    default:
      return;
  }
}
function n4(e5) {
  return "point";
}
function r3(e5, n5) {
  const r4 = null != e5 && "polyline" === e5.type && e5.paths.length ? e5.paths[0].length : 0;
  return "freehand" === n5 ? r4 < 2 ? "freehandStart" : "freehandEnd" : r4 < 2 ? "polylineZeroVertices" : "polylineOneVertex";
}
function t4(e5, n5) {
  const r4 = null != e5 && "polygon" === e5.type && e5.rings.length ? e5.rings[0].length : 0;
  if (r4 < 3) switch (n5) {
    case "freehand":
      return "freehandStart";
    case "hybrid":
      return "polygonZeroVerticesHybrid";
    default:
      return "polygonZeroVertices";
  }
  else if (r4 < 4) return "freehand" === n5 ? "freehandEnd" : "polygonOneVertex";
  return "polygonTwoVertices";
}
function l5(e5, n5) {
  if ((null != e5 && "polygon" === e5.type && e5.rings.length ? e5.rings[0].length : 0) < 3) switch (n5) {
    case "freehand":
      return "freehandStart";
    case "click":
      return "shapeStartClick";
    default:
      return "shapeStartHybrid";
  }
  switch (n5) {
    case "freehand":
      return "freehandEnd";
    case "click":
      return "shapeEndClick";
    default:
      return "shapeEndHybrid";
  }
}

// node_modules/@arcgis/core/views/draw/support/helpMessageUtils3d.js
function s(o4, s5) {
  const h5 = o4?.geometry;
  if (!o4 || "mesh" !== h5?.type || !s5) return;
  const { renderCoordsHelper: f4, elevationProvider: p5 } = s5, { camera: u5 } = s5.state, { extent: d3 } = h5, { center: x5, spatialReference: g3 } = d3, v5 = re(g3), j6 = te(g3), z3 = re(f4.spatialReference), R3 = d3.width * v5, b4 = d3.height * j6, y3 = (d3.zmax ?? 0) * j6, C2 = y3 - (d3.zmin ?? 0) * j6, w5 = Math.max(R3, b4, C2) / z3, { x: M4, y: P2 } = x5, S3 = x5.z ?? 0;
  u3(l6, M4, P2, S3), f4.toRenderCoords(l6, g3, l6);
  const T4 = w5 / u5.computeScreenPixelSizeAt(l6);
  if (T4 > Math.min(u5.width, u5.height) / u5.pixelRatio * a5) return "meshTooClose";
  if (T4 < m2) return "meshTooFar";
  const U4 = c3(o4), { absoluteZ: A2 } = y(M4, P2, y3, g3, s5, U4);
  return A2 < (p5.getElevation(M4, P2, S3, g3, "ground") ?? 0) * j6 + C2 * c5 ? "meshUnderground" : "mesh";
}
var m2 = 20;
var a5 = 1;
var c5 = 0.1;
var l6 = n();

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawCircleTooltipInfo.js
var p2 = class extends i3 {
  constructor(o4) {
    super(o4), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = z;
  }
  get allFields() {
    return [];
  }
};
__decorate([a()], p2.prototype, "type", void 0), __decorate([a()], p2.prototype, "radius", void 0), __decorate([a()], p2.prototype, "xSize", void 0), __decorate([a()], p2.prototype, "ySize", void 0), __decorate([a()], p2.prototype, "area", void 0), __decorate([a()], p2.prototype, "helpMessage", void 0), __decorate([a()], p2.prototype, "allFields", null), p2 = __decorate([c("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")], p2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawMeshTooltipInfo.js
var p3 = class extends g(i3) {
  constructor(t5) {
    super(t5), this.type = "draw-mesh", this.orientation = k6({ lockable: false }), this.scale = Q({ lockable: false });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation, this.orientation, this.scale];
  }
};
__decorate([a()], p3.prototype, "helpMessage", void 0), __decorate([a()], p3.prototype, "allFields", null), p3 = __decorate([c("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")], p3);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawMultipointTooltipInfo.js
var s2 = class extends g(i3) {
  constructor(t5) {
    super(t5), this.type = "draw-multipoint";
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
__decorate([a()], s2.prototype, "helpMessage", void 0), __decorate([a()], s2.prototype, "allFields", null), s2 = __decorate([c("esri.views.interactive.tooltip.infos.DrawMultipointTooltipInfo")], s2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPointTooltipInfo.js
var s3 = class extends g(i3) {
  constructor(t5) {
    super(t5), this.type = "draw-point";
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
__decorate([a()], s3.prototype, "helpMessage", void 0), __decorate([a()], s3.prototype, "allFields", null), s3 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")], s3);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolygonTooltipInfo.js
var d2 = class extends g(i3) {
  constructor(t5) {
    super(t5), this.type = "draw-polygon", this.direction = v3(), this.distance = x4(), this.area = D2(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.area];
  }
};
__decorate([a()], d2.prototype, "xyMode", void 0), __decorate([a()], d2.prototype, "helpMessage", void 0), __decorate([a()], d2.prototype, "allFields", null), d2 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")], d2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolylineTooltipInfo.js
var p4 = class extends g(i3) {
  constructor(t5) {
    super(t5), this.type = "draw-polyline", this.direction = v3(), this.distance = x4(), this.totalLength = w4(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.totalLength];
  }
};
__decorate([a()], p4.prototype, "helpMessage", void 0), __decorate([a()], p4.prototype, "xyMode", void 0), __decorate([a()], p4.prototype, "allFields", null), p4 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")], p4);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawRectangleTooltipInfo.js
var s4 = class extends i3 {
  constructor(o4) {
    super(o4), this.type = "draw-rectangle", this.xSize = k2, this.ySize = k2, this.area = z;
  }
  get allFields() {
    return [];
  }
};
__decorate([a()], s4.prototype, "type", void 0), __decorate([a()], s4.prototype, "xSize", void 0), __decorate([a()], s4.prototype, "ySize", void 0), __decorate([a()], s4.prototype, "area", void 0), __decorate([a()], s4.prototype, "helpMessage", void 0), __decorate([a()], s4.prototype, "allFields", null), s4 = __decorate([c("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")], s4);

// node_modules/@arcgis/core/views/draw/support/tooltipUtils.js
function D4(e5, t5) {
  return { point: new s3({ sketchOptions: t5, viewType: e5 }), multipoint: new s2({ sketchOptions: t5, viewType: e5 }), polyline: new p4({ sketchOptions: t5, viewType: e5 }), polygon: new d2({ sketchOptions: t5, viewType: e5 }), mesh: new p3({ sketchOptions: t5, viewType: e5 }), rectangle: new s4({ sketchOptions: t5 }), circle: new p2({ sketchOptions: t5 }) };
}
function j5(e5) {
  const { directionOptions: t5, geometryType: o4, sketchOptions: n5, tooltipInfos: i4 } = e5, r4 = (t6) => {
    const o5 = $(e5).mode, n6 = i4[t6].elevation;
    "relative-to-ground" === o5 || "relative-to-scene" === o5 || "on-the-ground" === o5 ? n6.lock(ee(e5)) : n6.unlock();
  }, a6 = (e6) => {
    if (t5) {
      const o5 = i4[e6].direction;
      o5.committed = t5.angle, o5.unlockOnVertexPlacement = false, n5.values.directionMode = t5.mode;
    }
  };
  switch (o4) {
    case "polygon":
    case "polyline":
      r4(o4), a6(o4);
      break;
    case "point":
    case "mesh":
      r4(o4);
  }
}
function T2(e5, t5) {
  const { drawOperation: o4, view: n5 } = t5, i4 = U3(t5), r4 = $(t5);
  if ("2d" === n5.type || !e5 || "absolute-height" !== r4.mode || 1 !== o4?.numCommittedVertices || !i4 || "draw-polyline" !== i4.type && "draw-polygon" !== i4.type || i4.elevation.locked) return;
  const [a6, c6, s5] = e5, l7 = W(a6, c6, s5, r4, t5);
  null != l7 && i4.elevation.lock(l7);
}
function P(e5) {
  U3(e5)?.allFields.forEach((e6) => {
    e6.unlockOnVertexPlacement && e6.unlock();
  });
}
function U3({ geometryType: e5, graphic: t5, tooltipInfos: o4 }) {
  return t5?.geometry?.type !== b3[e5] ? "circle" === e5 || "rectangle" === e5 ? o4[e5] : null : o4[e5];
}
var b3 = { point: "point", multipoint: "multipoint", mesh: "mesh", polyline: "polyline", polygon: "polygon", circle: "polygon", rectangle: "polygon", freehandPolygon: "polygon", freehandPolyline: "polyline", text: "point" };
function I2(e5, t5, o4) {
  switch (e5?.type) {
    case "draw-point":
      V2(e5, t5);
      break;
    case "draw-multipoint":
      G(e5, t5);
      break;
    case "draw-polyline":
      z2(e5, t5);
      break;
    case "draw-polygon":
      F(e5, t5);
      break;
    case "draw-rectangle":
      H(e5, t5);
      break;
    case "draw-circle":
      q2(e5, t5);
      break;
    case "draw-mesh":
      S(e5, t5);
  }
  o4.addPromise(L2(e5, t5)).catch(() => {
  });
}
var L2 = L(async (e5, t5) => {
  switch (e5?.type) {
    case "draw-polygon":
      return await A(e5, t5);
    case "draw-rectangle":
      return await R2(e5, t5);
    case "draw-circle":
      return await X(e5, t5);
  }
});
function V2(e5, t5) {
  const o4 = t5.graphic?.geometry;
  "point" === o4?.type && (Z(e5, t5), e5.helpMessage = e4("point", o4, t5.drawOperation.drawingMode));
}
function G(e5, t5) {
  const o4 = t5.graphic?.geometry;
  "multipoint" === o4?.type && (Z(e5, t5), e5.helpMessage = e4("multipoint", o4, t5.drawOperation.drawingMode));
}
function S(e5, t5) {
  const { graphic: o4, view: n5 } = t5, i4 = o4?.geometry;
  "3d" !== n5.type || i4 && "mesh" !== i4.type || (Z(e5, t5), i4 && k5(e5, i4), e5.helpMessage = s(o4, n5));
}
function Z(e5, t5) {
  const { drawOperation: o4, view: n5, sketchOptions: i4 } = t5, { cursorVertex: r4, hasZ: a6 } = o4;
  e5.sketchOptions = i4, e5.viewType = n5.type, e5.setLocationFromPoint(r4, _2(t5)), e5.setElevationFromPoint(r4, { hasZ: a6 }), o4.constraints = r4 ? { context: te2(r4, t5), x: e5.x.committed, y: e5.y.committed, longitude: e5.longitude.committed, latitude: e5.latitude.committed, elevation: e5.elevation.committed, distance: null, direction: null } : void 0;
}
function z2(e5, t5) {
  const { createOperationGeometry: n5, drawOperation: i4, automaticLengthMeasurementUtils: r4 } = t5, a6 = null != n5 ? n5.full : null;
  a6 && "polyline" !== a6.type || (C(e5, t5), e5.totalLength.actual = i4.lastVertex ? (a6 ? r4.autoLength2D(a6) : null) ?? k2 : null, e5.helpMessage = e4("polyline", a6, t5.drawOperation.drawingMode));
}
function F(e5, t5) {
  const { createOperationGeometry: o4 } = t5, n5 = null != o4 ? o4.full : null;
  n5 && "polygon" !== n5.type || (C(e5, t5), e5.helpMessage = e4("polygon", n5, t5.drawOperation.drawingMode));
}
async function A(e5, t5) {
  const { createOperationGeometry: o4, drawOperation: n5 } = t5, i4 = null != o4 ? o4.full : null;
  i4 && "polygon" !== i4.type || (n5.lastVertex ? e5.area.actual = i4 ? await t5.automaticAreaMeasurementUtils.autoArea2D(i4) ?? z : z : e5.area.actual = null);
}
var B = w2(_);
function C(e5, t5) {
  const { drawOperation: n5, sketchOptions: r4, view: a6, automaticLengthMeasurementUtils: c6 } = t5, { cursorVertex: s5, lastVertex: l7, secondToLastVertex: p5, hasZ: u5 } = n5, m3 = r4.values.effectiveDirectionMode;
  e5.sketchOptions = r4, e5.viewType = a6.type;
  const d3 = l7 && s5 ? c6.autoDistanceBetweenPoints2D(B(l7), B(s5)) ?? k2 : null;
  e5.distance.actual = d3, e5.distance.readOnly = null == l7;
  const f4 = null !== l7 && ("absolute" === m3 || p5);
  if (e5.direction.actual = null, e5.direction.readOnly = !f4, f4 && s5) {
    const t6 = x3(p5, l7, s5, m3);
    e5.direction.actual = t6 ?? D;
  }
  e5.setLocationFromPoint(s5, _2(t5)), e5.setElevationFromPoint(s5, { hasZ: u5 });
  const y3 = E2(l7, t5);
  e5.xyMode = y3, e5.direction.visible = "direction-distance" === y3, e5.distance.visible = "direction-distance" === y3, e5.effectiveX.visible = "coordinates" === y3, e5.effectiveY.visible = "coordinates" === y3;
  const g3 = s5 ?? l7;
  n5.constraints = g3 ? { context: te2(g3, t5), x: e5.x.committed, y: e5.y.committed, longitude: e5.longitude.committed, latitude: e5.latitude.committed, elevation: e5.elevation.committed, distance: e5.distance.committed, direction: e5.direction.committed } : void 0;
}
function E2(e5, { sketchOptions: t5 }) {
  const o4 = t5.tooltips.xyMode;
  return "auto" === o4 ? e5 ? "direction-distance" : "coordinates" : o4;
}
function H(e5, t5) {
  e5.sketchOptions = t5.sketchOptions, e5.xSize = J2(t5), e5.ySize = K2(t5), e5.helpMessage = e4("rectangle", t5.graphic?.geometry, t5.drawOperation.drawingMode);
}
async function R2(e5, t5) {
  e5.area = await Y2(t5);
}
function q2(e5, t5) {
  const { forceUniformSize: o4, sketchOptions: n5 } = t5;
  e5.sketchOptions = n5, e5.radius = o4 ? N(t5) : null, e5.xSize = o4 ? null : J2(t5), e5.ySize = o4 ? null : K2(t5), e5.helpMessage = e4("circle", t5.graphic?.geometry, t5.drawOperation.drawingMode);
}
async function X(e5, t5) {
  e5.area = await Y2(t5);
}
async function Y2({ createOperationGeometry: e5, automaticAreaMeasurementUtils: t5 }) {
  const o4 = e5?.full;
  return "polygon" !== o4?.type ? z : await t5.autoArea2D(o4) ?? z;
}
function J2({ createOperationGeometry: e5, automaticLengthMeasurementUtils: t5 }) {
  const n5 = e5?.rectangle?.midpoints;
  return (null != n5 ? t5.autoDistanceBetweenPoints2D(n5.left, n5.right) : null) ?? k2;
}
function K2({ createOperationGeometry: e5, automaticLengthMeasurementUtils: t5 }) {
  const n5 = e5?.rectangle?.midpoints;
  return (null != n5 ? t5.autoDistanceBetweenPoints2D(n5.top, n5.bottom) : null) ?? k2;
}
function N({ createOperationGeometry: e5, automaticLengthMeasurementUtils: t5 }) {
  return (null != e5?.circle?.center && null != e5.circle.edge ? t5.autoDistanceBetweenPoints2D(e5.circle.center, e5.circle.edge) : null) ?? k2;
}
function Q2(e5) {
  const { geometryType: o4, tooltipInfos: n5 } = e5;
  switch (o4) {
    case "point":
    case "multipoint":
    case "mesh":
    case "polyline":
    case "polygon": {
      const i4 = n5[o4].elevation.committed;
      if (!i4) return;
      return m(i4, "meters") / te(_2(e5));
    }
    default:
      return;
  }
}
function W(e5, t5, o4, n5, i4) {
  const { view: r4, drawOperation: a6 } = i4;
  if ("3d" !== r4.type || !a6) return;
  o4 ??= 0;
  const c6 = _2(i4), s5 = $(i4), l7 = I(r4, e5, t5, o4, c6, s5, n5);
  return y2(l7, c6) ?? ee(i4);
}
function $(e5) {
  return e5.drawOperation.elevationInfo ?? k3;
}
function _2(e5) {
  return e5.drawOperation.coordinateHelper.spatialReference;
}
function ee(e5) {
  const t5 = te(_2(e5));
  return f2(e5.defaultZ * t5, "meters");
}
function te2(e5, t5) {
  return M2(e5, t5.view, _2(t5), $(t5), t5.drawOperation.coordinateHelper.hasZ(), t5.sketchOptions.values.effectiveDirectionMode);
}

// node_modules/@arcgis/core/views/draw/DrawGraphicTool.js
var E3 = class extends n3 {
  constructor(t5) {
    super(t5), this._graphic = null, this._coordinateFormatterLoadTask = null, this._createOperationGeometry = null, this.defaultZ = 0, this.directionOptions = null, this.elevationLockOnVertexAddDisabled = false, this.geometryType = null, this.hasZ = true, this.geometryToPlace = null, this.snappingManager = null, this.snapToScene = false, this.sketchOptions = new c4(), this._updatingHandles = new h();
  }
  initialize() {
    const { view: t5 } = this;
    this.internalGraphicsLayer = new h2({ listMode: "hide", internal: true, title: "DrawGraphicTool layer" }), this.view.map.layers.add(this.internalGraphicsLayer);
    const e5 = this.drawOperation = this.makeDrawOperation();
    this.tooltipInfos = D4(t5.type, this.sketchOptions);
    const o4 = V(() => ({ view: t5, options: this.sketchOptions.tooltips }));
    this.tooltip = o4, j5(this._tooltipsContext), this._coordinateFormatterLoadTask = w3(() => E()), this.addHandles([e5.on("vertex-add", (t6) => this.onVertexAdd(t6)), e5.on("vertex-remove", (t6) => this.onVertexRemove(t6)), e5.on("vertex-update", (t6) => this.onVertexUpdate(t6)), e5.on("cursor-update", (t6) => this.onCursorUpdate(t6)), e5.on("cursor-remove", () => this._updateGraphic()), e5.on("complete", (t6) => this.onComplete(t6)), this._coordinateFormatterLoadTask, o4.on("paste", (t6) => J(t6, this.activeTooltipInfo)), l(() => this.cursor, (t6) => {
      e5.cursor = t6;
    }, w), i(() => {
      const { activeTooltipInfo: t6, sketchOptions: e6 } = this;
      I2(t6, this._tooltipsContext, this._updatingHandles), o4.info = e6.tooltips.effectiveEnabled ? t6 : null;
    }), i(() => {
      e5.constraintZ = Q2(this._tooltipsContext);
    }, U)]), this.finishToolCreation(), e5.initializePointer();
  }
  destroy() {
    this.drawOperation = u(this.drawOperation), this.tooltip = u(this.tooltip), this._destroyAllVisualizations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = u(this.internalGraphicsLayer), this._updatingHandles.destroy(), this._set("view", null);
  }
  get _drawSpatialReference() {
    return this.drawOperation.coordinateHelper.spatialReference;
  }
  get _tooltipsContext() {
    const { defaultZ: t5, directionOptions: e5, drawOperation: o4, forceUniformSize: i4, geometryType: r4, graphic: s5, sketchOptions: n5, tooltipInfos: a6, view: l7, automaticAreaMeasurementUtils: p5, automaticLengthMeasurementUtils: c6 } = this;
    return { createOperationGeometry: this._createOperationGeometry, defaultZ: t5, directionOptions: e5, drawOperation: o4, forceUniformSize: i4, geometryType: r4, graphic: s5, sketchOptions: n5, tooltipInfos: a6, view: l7, automaticAreaMeasurementUtils: p5, automaticLengthMeasurementUtils: c6 };
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(t5) {
    this._set("centered", t5), this._updateGraphic();
  }
  get cursor() {
    return this._get("cursor");
  }
  set cursor(t5) {
    this._set("cursor", t5);
  }
  set enabled(t5) {
    this.drawOperation.interactive = t5, this._set("enabled", t5);
  }
  set forceUniformSize(t5) {
    this._set("forceUniformSize", t5), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(t5) {
    this._set("graphicSymbol", t5), null != this._graphic && (this._graphic.symbol = t5);
  }
  set mode(t5) {
    const e5 = this.drawOperation;
    e5 && (e5.drawingMode = t5), this._set("mode", t5);
  }
  get updating() {
    return (this._updatingHandles.updating || this.drawOperation?.updating) ?? false;
  }
  get undoRedo() {
    const { view: { type: t5, map: e5 } } = this;
    return "2d" === t5 && e5 && "undoRedo" in e5 && e5.undoRedo instanceof h3 ? e5.undoRedo : null;
  }
  set undoRedo(t5) {
    this._override("undoRedo", t5);
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(t5) {
    this.destroyed || O(t5, this.tooltip) || this.drawOperation.onInputEvent(t5);
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo(), 0 === this.drawOperation.numCommittedVertices && j5(this._tooltipsContext);
  }
  _destroyAllVisualizations() {
    this.removeHandles(M3.outline), this.removeHandles(M3.regularVertices), this.removeHandles(M3.activeVertex), this.removeHandles(M3.activeEdge), this.removeHandles(I3);
  }
  _createOrUpdateGraphic(t5) {
    if (null != this._graphic) return this.updateGraphicGeometry(t5), this._graphic;
    const o4 = new j3(__spreadProps(__spreadValues({}, this.graphicProperties), { symbol: this.graphicSymbol }));
    return this._graphic = o4, this.updateGraphicGeometry(t5), this.internalGraphicsLayer.add(o4), this.addHandles(this.initializeGraphic(o4)), this.notifyChange("graphic"), this.addHandles(e(() => {
      this.internalGraphicsLayer.remove(o4), this._graphic === o4 && (this._graphic = null);
    }), I3), o4;
  }
  updateGraphicGeometry(t5) {
    this._graphic.geometry = t5;
  }
  _getCreateOperationGeometry(t5 = { operationComplete: false }) {
    if (null == this.drawOperation) return;
    const { coordinateHelper: e5, view: o4, visualizationCursorVertex: i4, lastVertex: r4, committedVertices: s5, geometryIncludingUncommittedVertices: n5, numCommittedVertices: a6 } = this.drawOperation;
    if (!(a6 > 0 || null != i4)) return;
    const l7 = t5.operationComplete ? s5 : n5, p5 = l7.length, c6 = null != i4 ? e5.pointToArray(i4) : null, d3 = this._drawSpatialReference, h5 = "3d" === o4.type && "global" === o4.viewingMode, u5 = new l4();
    u5.committedVertices = s5, u5.cursorVertex = c6;
    const { geometryType: x5 } = this;
    switch (x5) {
      case "point":
      case "mesh":
        u5.full = e5.arrayToPoint(l7[0]);
        break;
      case "multipoint":
        u5.full = p5 > 0 ? R(l7, d3) : null;
        break;
      case "polyline":
      case "polygon":
        p5 > 0 && (u5.full = "polygon" === x5 ? T([l7], d3, h5, true) : j4([l7], d3, h5), u5.cursorEdge = null != c6 && r4 && !a3(i4, r4) ? j4([[c6, e5.pointToArray(r4)]], d3, h5) : null, u5.outline = p5 > 1 ? u5.full : null);
        break;
      case "circle":
      case "rectangle": {
        if (u5.committedVertices = u5.cursorVertex = null, !p5) break;
        const e6 = v(o4, l7[0]), i5 = l7[0], r5 = e6.makeMapPoint(i5[0] + F2 * o4.resolution, i5[1]);
        "circle" === x5 ? 1 === p5 && t5.operationComplete ? u5.circle = v2([i5, r5], e6, true) : 2 === p5 && (this.forceUniformSize ? u5.circle = v2(l7, e6, this.centered) : u5.rectangle = k4(l7, e6, this.centered)) : 1 === p5 && t5.operationComplete ? u5.rectangle = b2([i5, r5], e6, true) : 2 === p5 && (u5.rectangle = this.forceUniformSize ? b2(l7, e6, this.centered) : U2(l7, e6, this.centered)), u5.full = null != u5.circle ? u5.circle.geometry : u5.rectangle?.geometry, u5.outline = "polygon" === u5.full?.type ? u5.full : null;
        break;
      }
      default:
        return null;
    }
    return u5;
  }
  initializeGraphic(t5) {
    return e();
  }
  onComplete(t5) {
    if (!this.drawOperation) return;
    this._updateGraphic();
    let e5 = null;
    if (this.drawOperation.isCompleted) {
      const t6 = this._getCreateOperationGeometry({ operationComplete: true });
      null != t6 && (e5 = this._createOrUpdateGraphic(t6.full));
    }
    this._createOperationGeometry = null, this.emit("complete", __spreadValues({ graphic: e5 }, t5));
  }
  onCursorUpdate(t5) {
    this._updateGraphic(), this.emit("cursor-update", t5);
  }
  onDeactivate() {
    const { drawOperation: t5 } = this;
    t5 && (t5.isCompleted || t5.cancel());
  }
  onOutlineChanged(t5) {
    return e();
  }
  onCursorEdgeChanged(t5) {
    return e();
  }
  onVertexAdd(t5) {
    P(this._tooltipsContext), this._updateGraphic(), this.elevationLockOnVertexAddDisabled || T2(t5.vertices.at(0)?.coordinates, this._tooltipsContext), this.emit("vertex-add", t5);
  }
  onVertexRemove(t5) {
    P(this._tooltipsContext), this._updateGraphic(), this.emit("vertex-remove", t5);
  }
  onVertexUpdate(t5) {
    this._updateGraphic(), this.emit("vertex-update", t5);
  }
  _updateGraphic() {
    const t5 = this._getCreateOperationGeometry();
    this._createOperationGeometry = t5, null != t5 ? (null != t5.cursorEdge ? this.addHandles(this.onCursorEdgeChanged(t5.cursorEdge), M3.activeEdge) : this.removeHandles(M3.activeEdge), null != t5.outline ? this.addHandles(this.onOutlineChanged(t5.outline), M3.outline) : this.removeHandles(M3.outline), null != t5.committedVertices ? this.addHandles(this.onRegularVerticesChanged(t5.committedVertices), M3.regularVertices) : this.removeHandles(M3.regularVertices), null != t5.cursorVertex ? this.addHandles(this.onActiveVertexChanged(t5.cursorVertex), M3.activeVertex) : this.removeHandles(M3.activeVertex), null != t5.full ? this._createOrUpdateGraphic(t5.full) : this.removeHandles(I3)) : this._destroyAllVisualizations();
  }
  get activeTooltipInfo() {
    return this._coordinateFormatterLoadTask?.finished ? U3(this._tooltipsContext) : null;
  }
};
__decorate([a()], E3.prototype, "_coordinateFormatterLoadTask", void 0), __decorate([a()], E3.prototype, "_createOperationGeometry", void 0), __decorate([a()], E3.prototype, "_tooltipsContext", null), __decorate([a({ value: true })], E3.prototype, "centered", null), __decorate([a()], E3.prototype, "cursor", null), __decorate([a({ nonNullable: true })], E3.prototype, "defaultZ", void 0), __decorate([a({ constructOnly: true })], E3.prototype, "directionOptions", void 0), __decorate([a()], E3.prototype, "drawOperation", void 0), __decorate([a()], E3.prototype, "elevationLockOnVertexAddDisabled", void 0), __decorate([a({ value: true })], E3.prototype, "enabled", null), __decorate([a({ value: true })], E3.prototype, "forceUniformSize", null), __decorate([a({ constructOnly: true })], E3.prototype, "geometryType", void 0), __decorate([a()], E3.prototype, "graphic", null), __decorate([a({ constructOnly: true })], E3.prototype, "graphicProperties", void 0), __decorate([a()], E3.prototype, "graphicSymbol", null), __decorate([a({ constructOnly: true })], E3.prototype, "hasZ", void 0), __decorate([a({ constructOnly: true })], E3.prototype, "geometryToPlace", void 0), __decorate([a()], E3.prototype, "mode", null), __decorate([a()], E3.prototype, "snappingManager", void 0), __decorate([a()], E3.prototype, "snapToScene", void 0), __decorate([a()], E3.prototype, "tooltip", void 0), __decorate([a()], E3.prototype, "tooltipInfos", void 0), __decorate([a({ constructOnly: true, type: c4 })], E3.prototype, "sketchOptions", void 0), __decorate([a()], E3.prototype, "updating", null), __decorate([a({ constructOnly: true, nonNullable: true })], E3.prototype, "view", void 0), __decorate([a({ constructOnly: true })], E3.prototype, "automaticAreaMeasurementUtils", void 0), __decorate([a({ constructOnly: true })], E3.prototype, "automaticLengthMeasurementUtils", void 0), __decorate([a({ constructOnly: true })], E3.prototype, "undoRedo", null), __decorate([a()], E3.prototype, "activeTooltipInfo", null), E3 = __decorate([c("esri.views.draw.DrawGraphicTool")], E3);
var I3 = /* @__PURE__ */ Symbol("create-operation-graphic");
var M3 = { outline: /* @__PURE__ */ Symbol("outline-visual"), regularVertices: /* @__PURE__ */ Symbol("regular-vertices-visual"), activeVertex: /* @__PURE__ */ Symbol("active-vertex-visual"), activeEdge: /* @__PURE__ */ Symbol("active-edge-visual") };
function D5(t5) {
  switch (t5) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return t5;
    case "circle":
    case "rectangle":
      return "segment";
    case "mesh":
      return "point";
  }
}
var F2 = 48;

// node_modules/@arcgis/core/views/interactive/GraphicManipulator.js
var u4 = class extends b {
  set graphic(t5) {
    this._circleCollisionCache = null, this._originalSymbol = t5.symbol, this._set("graphic", t5), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const { layer: t5 } = this.graphic, e5 = t5 && "elevationInfo" in t5 ? t5.elevationInfo : null, i4 = a4(this.graphic), o4 = e5 ? e5.offset : 0;
    return new x2({ mode: i4, offset: o4 });
  }
  set focusedSymbol(t5) {
    t5 !== this._get("focusedSymbol") && (this._set("focusedSymbol", t5), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(t5) {
    t5 !== this._get("grabbing") && (this._set("grabbing", t5), this._updateGraphicSymbol());
  }
  set hovering(t5) {
    t5 !== this._get("hovering") && (this._set("hovering", t5), this._updateGraphicSymbol());
  }
  set selected(t5) {
    t5 !== this._get("selected") && (this._set("selected", t5), this._updateGraphicSymbol(), this.events.emit("select-changed", { action: t5 ? "select" : "deselect" }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  constructor(t5) {
    super(t5), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.consumesClicks = true, this.events = new i2(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(t5) {
    const e5 = this.graphic;
    if (false === e5.visible) return null;
    const i4 = e5.geometry;
    if (null == i4) return null;
    const o4 = this._get("focusedSymbol"), s5 = null != o4 ? o4 : e5.symbol;
    return "2d" === this.view.type ? this._intersectDistance2D(this.view, t5, i4, s5) : this._intersectDistance3D(this.view, t5, e5);
  }
  attach() {
    this.attachSymbolChanged(), null != this.layer && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), null != this.layer && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = l(() => this.graphic?.symbol, (t5) => {
      null != t5 && t5 !== this.focusedSymbol && t5 !== this._originalSymbol && (this._originalSymbol = t5, this._focused && null != this.focusedSymbol && (this.graphic.symbol = this.focusedSymbol));
    }, U);
  }
  detachSymbolChanged() {
    null != this._graphicSymbolChangedHandle && (this._graphicSymbolChangedHandle.remove(), this._graphicSymbolChangedHandle = null);
  }
  onElevationChange() {
  }
  onViewChange() {
  }
  _updateGraphicSymbol() {
    this.graphic.symbol = this._focused && null != this.focusedSymbol ? this.focusedSymbol : this._originalSymbol;
  }
  _resetGraphicSymbol() {
    this.graphic.symbol = this._originalSymbol;
  }
  _intersectDistance2D(t5, e5, i4, o4) {
    const { cache: s5, result: l7 } = f3(t5, e5, i4, o4, this._circleCollisionCache) ?? {};
    return this._circleCollisionCache = s5, l7 ?? null;
  }
  _intersectDistance3D(t5, e5, i4) {
    const o4 = t5.toMap(e5, { include: [i4] });
    return o4 && n2(o4, g2, t5.renderSpatialReference) ? p(g2, t5.state.camera.eye) : null;
  }
};
__decorate([a({ constructOnly: true, nonNullable: true })], u4.prototype, "graphic", null), __decorate([a()], u4.prototype, "elevationInfo", null), __decorate([a({ constructOnly: true, nonNullable: true })], u4.prototype, "view", void 0), __decorate([a({ value: null })], u4.prototype, "focusedSymbol", null), __decorate([a({ constructOnly: true })], u4.prototype, "layer", void 0), __decorate([a()], u4.prototype, "interactive", void 0), __decorate([a()], u4.prototype, "selectable", void 0), __decorate([a()], u4.prototype, "grabbable", void 0), __decorate([a({ value: false })], u4.prototype, "grabbing", null), __decorate([a()], u4.prototype, "dragging", void 0), __decorate([a()], u4.prototype, "hovering", null), __decorate([a({ value: false })], u4.prototype, "selected", null), __decorate([a()], u4.prototype, "cursor", void 0), u4 = __decorate([c("esri.views.interactive.GraphicManipulator")], u4);
var g2 = n();

// node_modules/@arcgis/core/views/interactive/editGeometry/support/editPlaneUtils.js
function V3(o4, i4) {
  return E4(o4, i4, false);
}
function T3(o4, i4) {
  return E4(o4, i4, true);
}
function E4(o4, i4, r4) {
  if (o4 instanceof t2) {
    if (o4.operation instanceof t3) return h4(o4.operation, i4, r4), true;
    if (o4.operation instanceof o2) return v4(o4.operation, i4, r4), true;
    if (o4.operation instanceof l3) return F3(o4.operation, i4, r4), true;
  }
  return false;
}
function h4(o4, i4, r4 = false) {
  const t5 = r4 ? -1 : 1, s5 = r(t5 * o4.dx, t5 * o4.dy, t5 * o4.dz);
  c2(i4.origin, i4.origin, s5), K(i4);
}
function v4(o4, i4, r4 = false) {
  const t5 = r4 ? -o4.angle : o4.angle;
  Y(i4.basis1, i4.basis1, a2, t5), Y(i4.basis2, i4.basis2, a2, t5), K(i4);
}
function F3(o4, i4, r4 = false) {
  const t5 = r4 ? 1 / o4.factor1 : o4.factor1, s5 = r4 ? 1 / o4.factor2 : o4.factor2;
  x(i4.basis1, i4.basis1, t5), x(i4.basis2, i4.basis2, s5), k(i4.origin, i4.origin, o4.origin, o4.axis1, t5), k(i4.origin, i4.origin, o4.origin, o4.axis2, s5), K(i4);
}
function S2(a6, m3, g3, p5, u5 = false) {
  p5 || (p5 = D3());
  const N2 = o(t.get(), a6[1], -a6[0]), d3 = o(t.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), x5 = o(t.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), j6 = t.get(), V4 = m3.allVerticesUnordered;
  V4.forEach(({ pos: s5 }) => {
    o(j6, j2(a6, s5), j2(N2, s5)), f(d3, d3, j6), M(x5, x5, j6);
  });
  const T4 = 1e-6, E5 = o(t.get(), x5[0] - d3[0] < T4 ? g3 / 2 : 0, x5[1] - d3[1] < T4 ? g3 / 2 : 0);
  e2(d3, d3, E5), u2(x5, x5, E5);
  const h5 = u5 ? V4.reduce((o4, i4) => o4 + (i4.pos[2] ?? 0), 0) / V4.length : 0;
  return l2(p5.basis1, a6, (x5[0] - d3[0]) / 2), l2(p5.basis2, N2, (x5[1] - d3[1]) / 2), u3(p5.origin, d3[0] * a6[0] + d3[1] * N2[0], d3[0] * a6[1] + d3[1] * N2[1], h5), c2(p5.origin, p5.origin, p5.basis1), c2(p5.origin, p5.origin, p5.basis2), K(p5), p5;
}

export {
  E3 as E,
  D5 as D,
  u4 as u,
  V3 as V,
  T3 as T,
  S2 as S
};
//# sourceMappingURL=chunk-FXZPLDHL.js.map
