import {
  A,
  M as M2,
  k as k5,
  n as n3,
  p as p3,
  q as q2,
  z as z2
} from "./chunk-NDURMDDB.js";
import {
  g
} from "./chunk-6OYHMEDH.js";
import {
  D as D3,
  Q,
  S,
  V as V2,
  Y as Y2,
  e as e5,
  k as k7,
  l as l5,
  o as o3,
  t as t3,
  t2 as t4,
  v as v3,
  w as w4,
  w2 as w5,
  x as x5
} from "./chunk-VHJQPLN7.js";
import {
  y as y4
} from "./chunk-ZVQV55BP.js";
import {
  E,
  J2 as J,
  O,
  V,
  i as i5,
  k as k6
} from "./chunk-SDOE5QPS.js";
import {
  c as c5,
  c2 as c6
} from "./chunk-65MKQ3XA.js";
import {
  k as k8,
  x as x6
} from "./chunk-CQOVZL5D.js";
import {
  R,
  T,
  U as U2,
  b as b2,
  j as j4,
  k as k4,
  v as v2
} from "./chunk-TVBKEIR3.js";
import {
  v
} from "./chunk-ZOTSQHAY.js";
import {
  f as f3
} from "./chunk-4B3WLR4E.js";
import {
  x as x4
} from "./chunk-FM35QW7Y.js";
import {
  D as D4,
  K
} from "./chunk-ADOFT7OC.js";
import {
  ge
} from "./chunk-5R5DKW26.js";
import {
  x as x7
} from "./chunk-ZDEYOCQG.js";
import {
  h as h2
} from "./chunk-DKLP4JOJ.js";
import {
  I,
  a as a5,
  c as c4,
  i as i4,
  k as k3,
  x as x3,
  y as y3
} from "./chunk-MWXSARGP.js";
import {
  t as t2
} from "./chunk-MXAZZ5UX.js";
import {
  a as a4,
  u as u4
} from "./chunk-EKWZXCJ3.js";
import {
  t
} from "./chunk-52KYWONX.js";
import {
  D as D2,
  f as f2,
  k as k2,
  m,
  z
} from "./chunk-YUTAX525.js";
import {
  c as c3
} from "./chunk-Q6DYSTEJ.js";
import {
  n as n2
} from "./chunk-3EN5CV4O.js";
import {
  e as e4
} from "./chunk-4LHOFC4O.js";
import {
  h
} from "./chunk-GHG4ULKJ.js";
import {
  D,
  p
} from "./chunk-43RE4NFD.js";
import {
  Y,
  c as c2,
  p as p2,
  u as u3,
  x as x2
} from "./chunk-YM62CGUL.js";
import {
  y as y2
} from "./chunk-UAMJLSJM.js";
import {
  w as w3
} from "./chunk-OCXIU36X.js";
import {
  H
} from "./chunk-DOW7IE32.js";
import {
  x
} from "./chunk-SKQFZRJZ.js";
import {
  j as j3
} from "./chunk-TV7JW3IK.js";
import {
  a as a3,
  n,
  r as r2
} from "./chunk-MLBRAI7B.js";
import {
  U,
  j,
  l as l3,
  w as w2
} from "./chunk-CD6IOUFB.js";
import {
  M,
  e as e3,
  f,
  j as j2,
  k,
  l as l4,
  o as o2,
  u as u2
} from "./chunk-EFJUSEVJ.js";
import {
  q
} from "./chunk-4UWOVR5Y.js";
import {
  i as i3,
  l as l2
} from "./chunk-LHMCLOXR.js";
import {
  i
} from "./chunk-QWNB5I7T.js";
import {
  r
} from "./chunk-ZILR7JK7.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import {
  re,
  te
} from "./chunk-DHNLUBWZ.js";
import {
  b,
  i2
} from "./chunk-SG23UZYK.js";
import {
  a3 as a2,
  c,
  w
} from "./chunk-GUGGSMY4.js";
import {
  L,
  e,
  e2,
  l2 as l,
  o2 as o,
  u2 as u,
  y
} from "./chunk-2DNVIDFH.js";
import {
  a
} from "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/undoredo/UndoRedoError.js
var r3 = { UndoRedoUpdating: "Cannot perform operation whilst undo redo is updating", UndoInvalidError: "There are no items to Undo", RedoInvalidError: "There are no items to Redo", ApplyInvalidError: "Cannot apply an item that is already applied" };
var o4 = class extends Error {
  constructor() {
    super(r3.UndoRedoUpdating), this.type = "undo-redo-updating-error";
  }
};
var e6 = class extends Error {
  constructor() {
    super(r3.UndoInvalidError), this.type = "undo-redo-undo-error";
  }
};
var d = class extends Error {
  constructor() {
    super(r3.RedoInvalidError), this.type = "undo-redo-redo-error";
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
    this._stack.splice(this._stackPosition + 1, this._stack.length - this._stackPosition).forEach((t6) => t6.destroy());
  }
  _drainStack() {
    this._stack.drain((t6) => t6.destroy()), this._stackPosition = -1;
  }
  async undo() {
    if (!this.hasUndo) throw new e6();
    if (this.updating) throw new o4();
    const t6 = this._stack.getItemAt(this._stackPosition);
    t6 && await this._updatingHandles.addPromise((async () => {
      await t6.executeUndoRedoOperation(1), --this._stackPosition, t6.canRedo || this._truncateForwardStack();
    })());
  }
  async redo() {
    if (!this.hasRedo) throw new d();
    if (this.updating) throw new o4();
    const t6 = this._stack.getItemAt(this._stackPosition + 1);
    if (!t6) throw new d();
    await this._updatingHandles.addPromise((async () => {
      await t6.executeUndoRedoOperation(2), ++this._stackPosition;
    })());
  }
  peekUndo() {
    if (this.canUndo) return this._stack.getItemAt(this._stackPosition);
  }
  peekRedo() {
    if (this.canRedo) return this._stack.getItemAt(this._stackPosition + 1);
  }
  async inject(t6) {
    if (this.updating) throw new o4();
    await this._updatingHandles.addPromise((async () => {
      0 === t6.status && await t6.executeUndoRedoOperation(0), t6.canUndo ? (this._stack.splice(this._stackPosition + 1, 0, t6), this._stackPosition++) : this._stackPosition > -1 && (this._stack.splice(0, this._stackPosition + 1).forEach((t7) => t7.destroy()), this._stackPosition = -1);
    })());
  }
  async add(t6) {
    if (this.updating) throw new o4();
    await this._updatingHandles.addPromise((async () => {
      0 === t6.status && await t6.executeUndoRedoOperation(0), this._stackPosition >= -1 && this._truncateForwardStack(), t6.canUndo ? (this._stack.push(t6), this._stackPosition = this._stack.length - 1) : this._drainStack();
    })());
  }
  async removeTagged(t6, s6 = false) {
    if (this.updating && !s6) return;
    await j(() => !this.updating);
    const a7 = new q();
    for (let i7 = 0; i7 < this._stack.length; i7++) {
      const s7 = this._stack.getItemAt(i7);
      s7 && (s7.tag === t6 ? (s7.destroy(), i7 === this._stackPosition && (this._stackPosition = a7.length - 1)) : a7.push(s7));
    }
    this._stack = a7, this._stackPosition > a7.length - 1 && (this._stackPosition = a7.length - 1);
  }
  async clear(t6 = false) {
    if (this.updating && !t6) throw new o4();
    await j(() => !this.updating), this._drainStack();
  }
};
__decorate([a2()], h3.prototype, "_stack", void 0), __decorate([a2()], h3.prototype, "_stackPosition", void 0), __decorate([a2()], h3.prototype, "updating", null), __decorate([a2({ readOnly: true })], h3.prototype, "canUndo", null), __decorate([a2({ readOnly: true })], h3.prototype, "hasUndo", null), __decorate([a2({ readOnly: true })], h3.prototype, "canRedo", null), __decorate([a2({ readOnly: true })], h3.prototype, "hasRedo", null), h3 = __decorate([c("esri.UndoRedo")], h3);

// node_modules/@arcgis/core/views/draw/support/CreateOperationGeometry.js
var l6 = class {
  constructor() {
    this.committedVertices = null, this.cursorVertex = null, this.full = null, this.outline = null, this.cursorEdge = null, this.circle = null, this.rectangle = null;
  }
};

// node_modules/@arcgis/core/views/draw/support/helpMessageUtils.js
function e7(e9, i7, a7) {
  if (null == e9) return "noTool";
  switch (e9) {
    case "point":
      return n4();
    case "multipoint":
      return "multipoint";
    case "polyline":
      return r4(i7, a7);
    case "polygon":
      return t5(i7, a7);
    case "rectangle":
    case "circle":
      return l7(i7, a7);
    default:
      return;
  }
}
function n4(e9) {
  return "point";
}
function r4(e9, n5) {
  const r5 = null != e9 && "polyline" === e9.type && e9.paths.length ? e9.paths[0].length : 0;
  return "freehand" === n5 ? r5 < 2 ? "freehandStart" : "freehandEnd" : r5 < 2 ? "polylineZeroVertices" : "polylineOneVertex";
}
function t5(e9, n5) {
  const r5 = null != e9 && "polygon" === e9.type && e9.rings.length ? e9.rings[0].length : 0;
  if (r5 < 3) switch (n5) {
    case "freehand":
      return "freehandStart";
    case "hybrid":
      return "polygonZeroVerticesHybrid";
    default:
      return "polygonZeroVertices";
  }
  else if (r5 < 4) return "freehand" === n5 ? "freehandEnd" : "polygonOneVertex";
  return "polygonTwoVertices";
}
function l7(e9, n5) {
  if ((null != e9 && "polygon" === e9.type && e9.rings.length ? e9.rings[0].length : 0) < 3) switch (n5) {
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
function s(o5, s6) {
  const h6 = o5?.geometry;
  if (!o5 || "mesh" !== h6?.type || !s6) return;
  const { renderCoordsHelper: f6, elevationProvider: p8 } = s6, { camera: u6 } = s6.state, { extent: d5 } = h6, { center: x10, spatialReference: g5 } = d5, v7 = re(g5), j7 = te(g5), z6 = re(f6.spatialReference), R4 = d5.width * v7, b4 = d5.height * j7, y7 = (d5.zmax ?? 0) * j7, C2 = y7 - (d5.zmin ?? 0) * j7, w7 = Math.max(R4, b4, C2) / z6, { x: M5, y: P3 } = x10, S6 = x10.z ?? 0;
  u3(l8, M5, P3, S6), f6.toRenderCoords(l8, g5, l8);
  const T4 = w7 / u6.computeScreenPixelSizeAt(l8);
  if (T4 > Math.min(u6.width, u6.height) / u6.pixelRatio * a6) return "meshTooClose";
  if (T4 < m2) return "meshTooFar";
  const U6 = c4(o5), { absoluteZ: A4 } = y3(M5, P3, y7, g5, s6, U6);
  return A4 < (p8.getElevation(M5, P3, S6, g5, "ground") ?? 0) * j7 + C2 * c7 ? "meshUnderground" : "mesh";
}
var m2 = 20;
var a6 = 1;
var c7 = 0.1;
var l8 = n();

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawCircleTooltipInfo.js
var p4 = class extends i5 {
  constructor(o5) {
    super(o5), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = z;
  }
  get allFields() {
    return [];
  }
};
__decorate([a2()], p4.prototype, "type", void 0), __decorate([a2()], p4.prototype, "radius", void 0), __decorate([a2()], p4.prototype, "xSize", void 0), __decorate([a2()], p4.prototype, "ySize", void 0), __decorate([a2()], p4.prototype, "area", void 0), __decorate([a2()], p4.prototype, "helpMessage", void 0), __decorate([a2()], p4.prototype, "allFields", null), p4 = __decorate([c("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")], p4);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawMeshTooltipInfo.js
var p5 = class extends g(i5) {
  constructor(t6) {
    super(t6), this.type = "draw-mesh", this.orientation = k7({ lockable: false }), this.scale = Q({ lockable: false });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation, this.orientation, this.scale];
  }
};
__decorate([a2()], p5.prototype, "helpMessage", void 0), __decorate([a2()], p5.prototype, "allFields", null), p5 = __decorate([c("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")], p5);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawMultipointTooltipInfo.js
var s2 = class extends g(i5) {
  constructor(t6) {
    super(t6), this.type = "draw-multipoint";
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
__decorate([a2()], s2.prototype, "helpMessage", void 0), __decorate([a2()], s2.prototype, "allFields", null), s2 = __decorate([c("esri.views.interactive.tooltip.infos.DrawMultipointTooltipInfo")], s2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPointTooltipInfo.js
var s3 = class extends g(i5) {
  constructor(t6) {
    super(t6), this.type = "draw-point";
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
__decorate([a2()], s3.prototype, "helpMessage", void 0), __decorate([a2()], s3.prototype, "allFields", null), s3 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")], s3);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolygonTooltipInfo.js
var d2 = class extends g(i5) {
  constructor(t6) {
    super(t6), this.type = "draw-polygon", this.direction = v3(), this.distance = x5(), this.area = D3(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.area];
  }
};
__decorate([a2()], d2.prototype, "xyMode", void 0), __decorate([a2()], d2.prototype, "helpMessage", void 0), __decorate([a2()], d2.prototype, "allFields", null), d2 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")], d2);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawPolylineTooltipInfo.js
var p6 = class extends g(i5) {
  constructor(t6) {
    super(t6), this.type = "draw-polyline", this.direction = v3(), this.distance = x5(), this.totalLength = w4(), this.xyMode = "direction-distance";
  }
  get allFields() {
    return [this.direction, this.distance, this.longitude, this.latitude, this.x, this.y, this.elevation, this.totalLength];
  }
};
__decorate([a2()], p6.prototype, "helpMessage", void 0), __decorate([a2()], p6.prototype, "xyMode", void 0), __decorate([a2()], p6.prototype, "allFields", null), p6 = __decorate([c("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")], p6);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/DrawRectangleTooltipInfo.js
var s4 = class extends i5 {
  constructor(o5) {
    super(o5), this.type = "draw-rectangle", this.xSize = k2, this.ySize = k2, this.area = z;
  }
  get allFields() {
    return [];
  }
};
__decorate([a2()], s4.prototype, "type", void 0), __decorate([a2()], s4.prototype, "xSize", void 0), __decorate([a2()], s4.prototype, "ySize", void 0), __decorate([a2()], s4.prototype, "area", void 0), __decorate([a2()], s4.prototype, "helpMessage", void 0), __decorate([a2()], s4.prototype, "allFields", null), s4 = __decorate([c("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")], s4);

// node_modules/@arcgis/core/views/draw/support/tooltipUtils.js
function D5(e9, t6) {
  return { point: new s3({ sketchOptions: t6, viewType: e9 }), multipoint: new s2({ sketchOptions: t6, viewType: e9 }), polyline: new p6({ sketchOptions: t6, viewType: e9 }), polygon: new d2({ sketchOptions: t6, viewType: e9 }), mesh: new p5({ sketchOptions: t6, viewType: e9 }), rectangle: new s4({ sketchOptions: t6 }), circle: new p4({ sketchOptions: t6 }) };
}
function j5(e9) {
  const { directionOptions: t6, geometryType: o5, sketchOptions: n5, tooltipInfos: i7 } = e9, r5 = (t7) => {
    const o6 = $(e9).mode, n6 = i7[t7].elevation;
    "relative-to-ground" === o6 || "relative-to-scene" === o6 || "on-the-ground" === o6 ? n6.lock(ee(e9)) : n6.unlock();
  }, a7 = (e10) => {
    if (t6) {
      const o6 = i7[e10].direction;
      o6.committed = t6.angle, o6.unlockOnVertexPlacement = false, n5.values.directionMode = t6.mode;
    }
  };
  switch (o5) {
    case "polygon":
    case "polyline":
      r5(o5), a7(o5);
      break;
    case "point":
    case "mesh":
      r5(o5);
  }
}
function T2(e9, t6) {
  const { drawOperation: o5, view: n5 } = t6, i7 = U3(t6), r5 = $(t6);
  if ("2d" === n5.type || !e9 || "absolute-height" !== r5.mode || 1 !== o5?.numCommittedVertices || !i7 || "draw-polyline" !== i7.type && "draw-polygon" !== i7.type || i7.elevation.locked) return;
  const [a7, c8, s6] = e9, l9 = W(a7, c8, s6, r5, t6);
  null != l9 && i7.elevation.lock(l9);
}
function P(e9) {
  U3(e9)?.allFields.forEach((e10) => {
    e10.unlockOnVertexPlacement && e10.unlock();
  });
}
function U3({ geometryType: e9, graphic: t6, tooltipInfos: o5 }) {
  return t6?.geometry?.type !== b3[e9] ? "circle" === e9 || "rectangle" === e9 ? o5[e9] : null : o5[e9];
}
var b3 = { point: "point", multipoint: "multipoint", mesh: "mesh", polyline: "polyline", polygon: "polygon", circle: "polygon", rectangle: "polygon", freehandPolygon: "polygon", freehandPolyline: "polyline", text: "point" };
function I2(e9, t6, o5) {
  switch (e9?.type) {
    case "draw-point":
      V3(e9, t6);
      break;
    case "draw-multipoint":
      G(e9, t6);
      break;
    case "draw-polyline":
      z3(e9, t6);
      break;
    case "draw-polygon":
      F(e9, t6);
      break;
    case "draw-rectangle":
      H2(e9, t6);
      break;
    case "draw-circle":
      q3(e9, t6);
      break;
    case "draw-mesh":
      S2(e9, t6);
  }
  o5.addPromise(L2(e9, t6)).catch(() => {
  });
}
var L2 = L(async (e9, t6) => {
  switch (e9?.type) {
    case "draw-polygon":
      return await A2(e9, t6);
    case "draw-rectangle":
      return await R2(e9, t6);
    case "draw-circle":
      return await X(e9, t6);
  }
});
function V3(e9, t6) {
  const o5 = t6.graphic?.geometry;
  "point" === o5?.type && (Z(e9, t6), e9.helpMessage = e7("point", o5, t6.drawOperation.drawingMode));
}
function G(e9, t6) {
  const o5 = t6.graphic?.geometry;
  "multipoint" === o5?.type && (Z(e9, t6), e9.helpMessage = e7("multipoint", o5, t6.drawOperation.drawingMode));
}
function S2(e9, t6) {
  const { graphic: o5, view: n5 } = t6, i7 = o5?.geometry;
  "3d" !== n5.type || i7 && "mesh" !== i7.type || (Z(e9, t6), i7 && k6(e9, i7), e9.helpMessage = s(o5, n5));
}
function Z(e9, t6) {
  const { drawOperation: o5, view: n5, sketchOptions: i7 } = t6, { cursorVertex: r5, hasZ: a7 } = o5;
  e9.sketchOptions = i7, e9.viewType = n5.type, e9.setLocationFromPoint(r5, _2(t6)), e9.setElevationFromPoint(r5, { hasZ: a7 }), o5.constraints = r5 ? { context: te2(r5, t6), x: e9.x.committed, y: e9.y.committed, longitude: e9.longitude.committed, latitude: e9.latitude.committed, elevation: e9.elevation.committed, distance: null, direction: null } : void 0;
}
function z3(e9, t6) {
  const { createOperationGeometry: n5, drawOperation: i7, automaticLengthMeasurementUtils: r5 } = t6, a7 = null != n5 ? n5.full : null;
  a7 && "polyline" !== a7.type || (C(e9, t6), e9.totalLength.actual = i7.lastVertex ? (a7 ? r5.autoLength2D(a7) : null) ?? k2 : null, e9.helpMessage = e7("polyline", a7, t6.drawOperation.drawingMode));
}
function F(e9, t6) {
  const { createOperationGeometry: o5 } = t6, n5 = null != o5 ? o5.full : null;
  n5 && "polygon" !== n5.type || (C(e9, t6), e9.helpMessage = e7("polygon", n5, t6.drawOperation.drawingMode));
}
async function A2(e9, t6) {
  const { createOperationGeometry: o5, drawOperation: n5 } = t6, i7 = null != o5 ? o5.full : null;
  i7 && "polygon" !== i7.type || (n5.lastVertex ? e9.area.actual = i7 ? await t6.automaticAreaMeasurementUtils.autoArea2D(i7) ?? z : z : e9.area.actual = null);
}
var B = w(_);
function C(e9, t6) {
  const { drawOperation: n5, sketchOptions: r5, view: a7, automaticLengthMeasurementUtils: c8 } = t6, { cursorVertex: s6, lastVertex: l9, secondToLastVertex: p8, hasZ: u6 } = n5, m5 = r5.values.effectiveDirectionMode;
  e9.sketchOptions = r5, e9.viewType = a7.type;
  const d5 = l9 && s6 ? c8.autoDistanceBetweenPoints2D(B(l9), B(s6)) ?? k2 : null;
  e9.distance.actual = d5, e9.distance.readOnly = null == l9;
  const f6 = null !== l9 && ("absolute" === m5 || p8);
  if (e9.direction.actual = null, e9.direction.readOnly = !f6, f6 && s6) {
    const t7 = x4(p8, l9, s6, m5);
    e9.direction.actual = t7 ?? D2;
  }
  e9.setLocationFromPoint(s6, _2(t6)), e9.setElevationFromPoint(s6, { hasZ: u6 });
  const y7 = E2(l9, t6);
  e9.xyMode = y7, e9.direction.visible = "direction-distance" === y7, e9.distance.visible = "direction-distance" === y7, e9.effectiveX.visible = "coordinates" === y7, e9.effectiveY.visible = "coordinates" === y7;
  const g5 = s6 ?? l9;
  n5.constraints = g5 ? { context: te2(g5, t6), x: e9.x.committed, y: e9.y.committed, longitude: e9.longitude.committed, latitude: e9.latitude.committed, elevation: e9.elevation.committed, distance: e9.distance.committed, direction: e9.direction.committed } : void 0;
}
function E2(e9, { sketchOptions: t6 }) {
  const o5 = t6.tooltips.xyMode;
  return "auto" === o5 ? e9 ? "direction-distance" : "coordinates" : o5;
}
function H2(e9, t6) {
  e9.sketchOptions = t6.sketchOptions, e9.xSize = J2(t6), e9.ySize = K2(t6), e9.helpMessage = e7("rectangle", t6.graphic?.geometry, t6.drawOperation.drawingMode);
}
async function R2(e9, t6) {
  e9.area = await Y3(t6);
}
function q3(e9, t6) {
  const { forceUniformSize: o5, sketchOptions: n5 } = t6;
  e9.sketchOptions = n5, e9.radius = o5 ? N2(t6) : null, e9.xSize = o5 ? null : J2(t6), e9.ySize = o5 ? null : K2(t6), e9.helpMessage = e7("circle", t6.graphic?.geometry, t6.drawOperation.drawingMode);
}
async function X(e9, t6) {
  e9.area = await Y3(t6);
}
async function Y3({ createOperationGeometry: e9, automaticAreaMeasurementUtils: t6 }) {
  const o5 = e9?.full;
  return "polygon" !== o5?.type ? z : await t6.autoArea2D(o5) ?? z;
}
function J2({ createOperationGeometry: e9, automaticLengthMeasurementUtils: t6 }) {
  const n5 = e9?.rectangle?.midpoints;
  return (null != n5 ? t6.autoDistanceBetweenPoints2D(n5.left, n5.right) : null) ?? k2;
}
function K2({ createOperationGeometry: e9, automaticLengthMeasurementUtils: t6 }) {
  const n5 = e9?.rectangle?.midpoints;
  return (null != n5 ? t6.autoDistanceBetweenPoints2D(n5.top, n5.bottom) : null) ?? k2;
}
function N2({ createOperationGeometry: e9, automaticLengthMeasurementUtils: t6 }) {
  return (null != e9?.circle?.center && null != e9.circle.edge ? t6.autoDistanceBetweenPoints2D(e9.circle.center, e9.circle.edge) : null) ?? k2;
}
function Q2(e9) {
  const { geometryType: o5, tooltipInfos: n5 } = e9;
  switch (o5) {
    case "point":
    case "multipoint":
    case "mesh":
    case "polyline":
    case "polygon": {
      const i7 = n5[o5].elevation.committed;
      if (!i7) return;
      return m(i7, "meters") / te(_2(e9));
    }
    default:
      return;
  }
}
function W(e9, t6, o5, n5, i7) {
  const { view: r5, drawOperation: a7 } = i7;
  if ("3d" !== r5.type || !a7) return;
  o5 ??= 0;
  const c8 = _2(i7), s6 = $(i7), l9 = I(r5, e9, t6, o5, c8, s6, n5);
  return y4(l9, c8) ?? ee(i7);
}
function $(e9) {
  return e9.drawOperation.elevationInfo ?? k3;
}
function _2(e9) {
  return e9.drawOperation.coordinateHelper.spatialReference;
}
function ee(e9) {
  const t6 = te(_2(e9));
  return f2(e9.defaultZ * t6, "meters");
}
function te2(e9, t6) {
  return M2(e9, t6.view, _2(t6), $(t6), t6.drawOperation.coordinateHelper.hasZ(), t6.sketchOptions.values.effectiveDirectionMode);
}

// node_modules/@arcgis/core/views/draw/DrawGraphicTool.js
var E3 = class extends n3 {
  constructor(t6) {
    super(t6), this._graphic = null, this._coordinateFormatterLoadTask = null, this._createOperationGeometry = null, this.defaultZ = 0, this.directionOptions = null, this.elevationLockOnVertexAddDisabled = false, this.geometryType = null, this.hasZ = true, this.geometryToPlace = null, this.snappingManager = null, this.snapToScene = false, this.sketchOptions = new c6(), this._updatingHandles = new h();
  }
  initialize() {
    const { view: t6 } = this;
    this.internalGraphicsLayer = new h2({ listMode: "hide", internal: true, title: "DrawGraphicTool layer" }), this.view.map.layers.add(this.internalGraphicsLayer);
    const e9 = this.drawOperation = this.makeDrawOperation();
    this.tooltipInfos = D5(t6.type, this.sketchOptions);
    const o5 = V(() => ({ view: t6, options: this.sketchOptions.tooltips }));
    this.tooltip = o5, j5(this._tooltipsContext), this._coordinateFormatterLoadTask = w3(() => E()), this.addHandles([e9.on("vertex-add", (t7) => this.onVertexAdd(t7)), e9.on("vertex-remove", (t7) => this.onVertexRemove(t7)), e9.on("vertex-update", (t7) => this.onVertexUpdate(t7)), e9.on("cursor-update", (t7) => this.onCursorUpdate(t7)), e9.on("cursor-remove", () => this._updateGraphic()), e9.on("complete", (t7) => this.onComplete(t7)), this._coordinateFormatterLoadTask, o5.on("paste", (t7) => J(t7, this.activeTooltipInfo)), l3(() => this.cursor, (t7) => {
      e9.cursor = t7;
    }, w2), i2(() => {
      const { activeTooltipInfo: t7, sketchOptions: e10 } = this;
      I2(t7, this._tooltipsContext, this._updatingHandles), o5.info = e10.tooltips.effectiveEnabled ? t7 : null;
    }), i2(() => {
      e9.constraintZ = Q2(this._tooltipsContext);
    }, U)]), this.finishToolCreation(), e9.initializePointer();
  }
  destroy() {
    this.drawOperation = u(this.drawOperation), this.tooltip = u(this.tooltip), this._destroyAllVisualizations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = u(this.internalGraphicsLayer), this._updatingHandles.destroy(), this._set("view", null);
  }
  get _drawSpatialReference() {
    return this.drawOperation.coordinateHelper.spatialReference;
  }
  get _tooltipsContext() {
    const { defaultZ: t6, directionOptions: e9, drawOperation: o5, forceUniformSize: i7, geometryType: r5, graphic: s6, sketchOptions: n5, tooltipInfos: a7, view: l9, automaticAreaMeasurementUtils: p8, automaticLengthMeasurementUtils: c8 } = this;
    return { createOperationGeometry: this._createOperationGeometry, defaultZ: t6, directionOptions: e9, drawOperation: o5, forceUniformSize: i7, geometryType: r5, graphic: s6, sketchOptions: n5, tooltipInfos: a7, view: l9, automaticAreaMeasurementUtils: p8, automaticLengthMeasurementUtils: c8 };
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(t6) {
    this._set("centered", t6), this._updateGraphic();
  }
  get cursor() {
    return this._get("cursor");
  }
  set cursor(t6) {
    this._set("cursor", t6);
  }
  set enabled(t6) {
    this.drawOperation.interactive = t6, this._set("enabled", t6);
  }
  set forceUniformSize(t6) {
    this._set("forceUniformSize", t6), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(t6) {
    this._set("graphicSymbol", t6), null != this._graphic && (this._graphic.symbol = t6);
  }
  set mode(t6) {
    const e9 = this.drawOperation;
    e9 && (e9.drawingMode = t6), this._set("mode", t6);
  }
  get updating() {
    return (this._updatingHandles.updating || this.drawOperation?.updating) ?? false;
  }
  get undoRedo() {
    const { view: { type: t6, map: e9 } } = this;
    return "2d" === t6 && e9 && "undoRedo" in e9 && e9.undoRedo instanceof h3 ? e9.undoRedo : null;
  }
  set undoRedo(t6) {
    this._override("undoRedo", t6);
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(t6) {
    this.destroyed || O(t6, this.tooltip) || this.drawOperation.onInputEvent(t6);
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
  _createOrUpdateGraphic(t6) {
    if (null != this._graphic) return this.updateGraphicGeometry(t6), this._graphic;
    const o5 = new j3(__spreadProps(__spreadValues({}, this.graphicProperties), { symbol: this.graphicSymbol }));
    return this._graphic = o5, this.updateGraphicGeometry(t6), this.internalGraphicsLayer.add(o5), this.addHandles(this.initializeGraphic(o5)), this.notifyChange("graphic"), this.addHandles(e(() => {
      this.internalGraphicsLayer.remove(o5), this._graphic === o5 && (this._graphic = null);
    }), I3), o5;
  }
  updateGraphicGeometry(t6) {
    this._graphic.geometry = t6;
  }
  _getCreateOperationGeometry(t6 = { operationComplete: false }) {
    if (null == this.drawOperation) return;
    const { coordinateHelper: e9, view: o5, visualizationCursorVertex: i7, lastVertex: r5, committedVertices: s6, geometryIncludingUncommittedVertices: n5, numCommittedVertices: a7 } = this.drawOperation;
    if (!(a7 > 0 || null != i7)) return;
    const l9 = t6.operationComplete ? s6 : n5, p8 = l9.length, c8 = null != i7 ? e9.pointToArray(i7) : null, d5 = this._drawSpatialReference, h6 = "3d" === o5.type && "global" === o5.viewingMode, u6 = new l6();
    u6.committedVertices = s6, u6.cursorVertex = c8;
    const { geometryType: x10 } = this;
    switch (x10) {
      case "point":
      case "mesh":
        u6.full = e9.arrayToPoint(l9[0]);
        break;
      case "multipoint":
        u6.full = p8 > 0 ? R(l9, d5) : null;
        break;
      case "polyline":
      case "polygon":
        p8 > 0 && (u6.full = "polygon" === x10 ? T([l9], d5, h6, true) : j4([l9], d5, h6), u6.cursorEdge = null != c8 && r5 && !a4(i7, r5) ? j4([[c8, e9.pointToArray(r5)]], d5, h6) : null, u6.outline = p8 > 1 ? u6.full : null);
        break;
      case "circle":
      case "rectangle": {
        if (u6.committedVertices = u6.cursorVertex = null, !p8) break;
        const e10 = v(o5, l9[0]), i8 = l9[0], r6 = e10.makeMapPoint(i8[0] + F2 * o5.resolution, i8[1]);
        "circle" === x10 ? 1 === p8 && t6.operationComplete ? u6.circle = v2([i8, r6], e10, true) : 2 === p8 && (this.forceUniformSize ? u6.circle = v2(l9, e10, this.centered) : u6.rectangle = k4(l9, e10, this.centered)) : 1 === p8 && t6.operationComplete ? u6.rectangle = b2([i8, r6], e10, true) : 2 === p8 && (u6.rectangle = this.forceUniformSize ? b2(l9, e10, this.centered) : U2(l9, e10, this.centered)), u6.full = null != u6.circle ? u6.circle.geometry : u6.rectangle?.geometry, u6.outline = "polygon" === u6.full?.type ? u6.full : null;
        break;
      }
      default:
        return null;
    }
    return u6;
  }
  initializeGraphic(t6) {
    return e();
  }
  onComplete(t6) {
    if (!this.drawOperation) return;
    this._updateGraphic();
    let e9 = null;
    if (this.drawOperation.isCompleted) {
      const t7 = this._getCreateOperationGeometry({ operationComplete: true });
      null != t7 && (e9 = this._createOrUpdateGraphic(t7.full));
    }
    this._createOperationGeometry = null, this.emit("complete", __spreadValues({ graphic: e9 }, t6));
  }
  onCursorUpdate(t6) {
    this._updateGraphic(), this.emit("cursor-update", t6);
  }
  onDeactivate() {
    const { drawOperation: t6 } = this;
    t6 && (t6.isCompleted || t6.cancel());
  }
  onOutlineChanged(t6) {
    return e();
  }
  onCursorEdgeChanged(t6) {
    return e();
  }
  onVertexAdd(t6) {
    P(this._tooltipsContext), this._updateGraphic(), this.elevationLockOnVertexAddDisabled || T2(t6.vertices.at(0)?.coordinates, this._tooltipsContext), this.emit("vertex-add", t6);
  }
  onVertexRemove(t6) {
    P(this._tooltipsContext), this._updateGraphic(), this.emit("vertex-remove", t6);
  }
  onVertexUpdate(t6) {
    this._updateGraphic(), this.emit("vertex-update", t6);
  }
  _updateGraphic() {
    const t6 = this._getCreateOperationGeometry();
    this._createOperationGeometry = t6, null != t6 ? (null != t6.cursorEdge ? this.addHandles(this.onCursorEdgeChanged(t6.cursorEdge), M3.activeEdge) : this.removeHandles(M3.activeEdge), null != t6.outline ? this.addHandles(this.onOutlineChanged(t6.outline), M3.outline) : this.removeHandles(M3.outline), null != t6.committedVertices ? this.addHandles(this.onRegularVerticesChanged(t6.committedVertices), M3.regularVertices) : this.removeHandles(M3.regularVertices), null != t6.cursorVertex ? this.addHandles(this.onActiveVertexChanged(t6.cursorVertex), M3.activeVertex) : this.removeHandles(M3.activeVertex), null != t6.full ? this._createOrUpdateGraphic(t6.full) : this.removeHandles(I3)) : this._destroyAllVisualizations();
  }
  get activeTooltipInfo() {
    return this._coordinateFormatterLoadTask?.finished ? U3(this._tooltipsContext) : null;
  }
};
__decorate([a2()], E3.prototype, "_coordinateFormatterLoadTask", void 0), __decorate([a2()], E3.prototype, "_createOperationGeometry", void 0), __decorate([a2()], E3.prototype, "_tooltipsContext", null), __decorate([a2({ value: true })], E3.prototype, "centered", null), __decorate([a2()], E3.prototype, "cursor", null), __decorate([a2({ nonNullable: true })], E3.prototype, "defaultZ", void 0), __decorate([a2({ constructOnly: true })], E3.prototype, "directionOptions", void 0), __decorate([a2()], E3.prototype, "drawOperation", void 0), __decorate([a2()], E3.prototype, "elevationLockOnVertexAddDisabled", void 0), __decorate([a2({ value: true })], E3.prototype, "enabled", null), __decorate([a2({ value: true })], E3.prototype, "forceUniformSize", null), __decorate([a2({ constructOnly: true })], E3.prototype, "geometryType", void 0), __decorate([a2()], E3.prototype, "graphic", null), __decorate([a2({ constructOnly: true })], E3.prototype, "graphicProperties", void 0), __decorate([a2()], E3.prototype, "graphicSymbol", null), __decorate([a2({ constructOnly: true })], E3.prototype, "hasZ", void 0), __decorate([a2({ constructOnly: true })], E3.prototype, "geometryToPlace", void 0), __decorate([a2()], E3.prototype, "mode", null), __decorate([a2()], E3.prototype, "snappingManager", void 0), __decorate([a2()], E3.prototype, "snapToScene", void 0), __decorate([a2()], E3.prototype, "tooltip", void 0), __decorate([a2()], E3.prototype, "tooltipInfos", void 0), __decorate([a2({ constructOnly: true, type: c6 })], E3.prototype, "sketchOptions", void 0), __decorate([a2()], E3.prototype, "updating", null), __decorate([a2({ constructOnly: true, nonNullable: true })], E3.prototype, "view", void 0), __decorate([a2({ constructOnly: true })], E3.prototype, "automaticAreaMeasurementUtils", void 0), __decorate([a2({ constructOnly: true })], E3.prototype, "automaticLengthMeasurementUtils", void 0), __decorate([a2({ constructOnly: true })], E3.prototype, "undoRedo", null), __decorate([a2()], E3.prototype, "activeTooltipInfo", null), E3 = __decorate([c("esri.views.draw.DrawGraphicTool")], E3);
var I3 = /* @__PURE__ */ Symbol("create-operation-graphic");
var M3 = { outline: /* @__PURE__ */ Symbol("outline-visual"), regularVertices: /* @__PURE__ */ Symbol("regular-vertices-visual"), activeVertex: /* @__PURE__ */ Symbol("active-vertex-visual"), activeEdge: /* @__PURE__ */ Symbol("active-edge-visual") };
function D6(t6) {
  switch (t6) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return t6;
    case "circle":
    case "rectangle":
      return "segment";
    case "mesh":
      return "point";
  }
}
var F2 = 48;

// node_modules/@arcgis/core/views/interactive/dragEventPipeline.js
function i6(t6, n5) {
  let e9 = null, r5 = null;
  return (a7) => {
    if ("cancel" === a7.action) return void (null != r5 && (r5.execute({ action: "cancel" }), e9 = null, r5 = null));
    const o5 = { action: a7.action, screenStart: a7.start, screenEnd: a7.screenPoint };
    "start" === a7.action && null == e9 && (e9 = new D7(), r5 = new D7(), n5(t6, e9, r5, a7.pointerType, o5)), null != e9 && e9.execute(o5), "end" === a7.action && null != e9 && (e9 = null, r5 = null);
  };
}
function p7(t6, n5) {
  return t6.events.on("drag", i6(t6, n5));
}
function m3(t6, n5) {
  const e9 = [t6.x, t6.y, t6.z ?? 0], r5 = n5, a7 = [Math.cos(r5), Math.sin(r5)], o5 = Math.sqrt(a7[0] * a7[0] + a7[1] * a7[1]);
  if (0 === o5) return null;
  a7[0] /= o5, a7[1] /= o5;
  const l9 = (t7) => {
    const n6 = (t7.x - e9[0]) * a7[0] + (t7.y - e9[1]) * a7[1];
    t7.x = e9[0] + n6 * a7[0], t7.y = e9[1] + n6 * a7[1];
  };
  return (t7) => (l9(t7.mapStart), l9(t7.mapEnd), __spreadProps(__spreadValues({}, t7), { axis: a7 }));
}
function f4(t6) {
  let n5 = null;
  const e9 = j6();
  return (r5) => {
    if ("start" === r5.action && (n5 = y5(t6, r5.mapStart.spatialReference)), null == n5) return null;
    const a7 = e9(r5);
    if (!a7) return null;
    const { translationX: o5, translationY: l9, translationZ: c8 } = a7;
    return n5.move(o5, l9, c8, r5.action), a7;
  };
}
function d3(t6, n5) {
  return null == t6 ? null : t6.spatialReference.equals(n5) ? t6.clone() : H(t6, n5);
}
function y5(t6, n5) {
  const e9 = t6.operations;
  if (!e9) return null;
  const r5 = e9.data.geometry, l9 = k8(n5);
  if (r5.spatialReference.equals(l9)) return x8(t6, e9, () => {
  });
  if ("mesh" !== r5.type) {
    const n6 = d3(r5, l9);
    if (null == n6) return null;
    const o5 = r5.spatialReference, c8 = S.fromGeometry(n6, e9.viewingMode);
    return x8(t6, c8, () => {
      const t7 = c8.data.geometry, n7 = H(t7, o5);
      e9.trySetGeometry(n7);
    });
  }
  if (c3(r5)) {
    const n6 = d3(r5.origin, l9);
    if (!n6) return null;
    const o5 = r5.spatialReference, c8 = S.fromGeometry(n6, e9.viewingMode);
    return x8(t6, e9, () => {
      const t7 = H(c8.data.geometry, o5), n7 = t7.x - r5.origin.x, l10 = t7.y - r5.origin.y, s6 = (t7.z ?? 0) - (r5.origin.z ?? 0);
      e9.move(n7, l10, s6);
    });
  }
  return null;
}
function x8(t6, n5, e9) {
  let r5 = 0, a7 = 0, o5 = 0;
  return { move: (l9, c8, s6, u6) => {
    "start" === u6 && (r5 = 0, a7 = 0, o5 = 0);
    const i7 = l9 - r5, p8 = c8 - a7, m5 = s6 - o5;
    n5.move(i7, p8, m5), r5 += i7, a7 += p8, o5 += m5, e9(), "end" === u6 && t6.endInteraction?.();
  } };
}
function E4(t6, n5 = null, e9) {
  let r5 = null;
  const o5 = null == n5 || t6.spatialReference?.equals(n5) ? (t7) => t7 : (t7) => null != t7 ? H(t7, n5) : t7, l9 = __spreadValues({ exclude: [] }, e9);
  return (n6) => {
    if ("start" === n6.action && (r5 = o5(t6.toMap(n6.screenStart, l9))), null == r5) return null;
    const e10 = o5(t6.toMap(n6.screenEnd, l9));
    return null != e10 ? __spreadProps(__spreadValues({}, n6), { mapStart: r5, mapEnd: e10 }) : null;
  };
}
function S3(n5) {
  const e9 = n5.map((t6) => f4(t6)).filter(N), r5 = j6();
  return (t6) => {
    const n6 = r5(t6);
    return e9.forEach((n7) => n7(t6)), n6;
  };
}
function g2(t6) {
  const n5 = t6.operations?.createResetState();
  return (t7) => (n5?.remove(), t7);
}
function v4(t6) {
  const n5 = t6.map((t7) => g2(t7)).filter((t7) => null != t7);
  return (t7) => (n5.forEach((n6) => n6(t7)), t7);
}
function z4() {
  let t6 = 0, n5 = 0, e9 = 0;
  return (r5) => {
    "start" === r5.action && (t6 = r5.mapStart.x, n5 = r5.mapStart.y, e9 = r5.mapStart.z ?? 0);
    const a7 = r5.mapEnd.x - t6, o5 = r5.mapEnd.y - n5, l9 = (r5.mapEnd.z ?? 0) - e9;
    return t6 = r5.mapEnd.x, n5 = r5.mapEnd.y, e9 = r5.mapEnd.z, __spreadProps(__spreadValues({}, r5), { mapDeltaX: a7, mapDeltaY: o5, mapDeltaZ: l9, mapDeltaSpatialReference: r5.mapStart.spatialReference });
  };
}
function j6() {
  let t6 = 0, n5 = 0, e9 = 0;
  return (r5) => {
    "start" === r5.action && (t6 = r5.mapStart.x, n5 = r5.mapStart.y, e9 = r5.mapStart.z ?? 0);
    const a7 = r5.mapEnd.x - t6, o5 = r5.mapEnd.y - n5, l9 = (r5.mapEnd.z ?? 0) - e9;
    return __spreadProps(__spreadValues({}, r5), { translationX: a7, translationY: o5, translationZ: l9 });
  };
}
function M4() {
  let t6 = 0, n5 = 0;
  return (e9) => {
    "start" === e9.action && (t6 = e9.screenStart.x, n5 = e9.screenStart.y);
    const r5 = e9.screenEnd.x - t6, a7 = e9.screenEnd.y - n5;
    return t6 = e9.screenEnd.x, n5 = e9.screenEnd.y, __spreadProps(__spreadValues({}, e9), { screenDeltaX: r5, screenDeltaY: a7 });
  };
}
function R3(t6, n5) {
  let a7 = null, o5 = 0, l9 = 0;
  return (c8) => {
    if ("start" === c8.action && (a7 = t6.toScreen?.(n5), null != a7 && (a7.x < 0 || a7.x > t6.width || a7.y < 0 || a7.y > t6.height ? a7 = null : (o5 = c8.screenStart.x - a7.x, l9 = c8.screenStart.y - a7.y))), null == a7) return null;
    const s6 = r(c8.screenEnd.x - o5, 0, t6.width), u6 = r(c8.screenEnd.y - l9, 0, t6.height), i7 = i(s6, u6);
    return c8.screenStart = a7, c8.screenEnd = i7, c8;
  };
}
var w6 = () => {
};
var D7 = class _D {
  constructor() {
    this.execute = w6;
  }
  next(t6, n5 = new _D()) {
    return null != t6 && (this.execute = (e9) => {
      const r5 = t6(e9);
      null != r5 && n5.execute(r5);
    }), n5;
  }
};
function U4(t6, n5, e9 = []) {
  if ("2d" === t6.type) return (t7) => t7;
  let r5 = null;
  return (a7) => {
    "start" === a7.action && (r5 = t6.toMap(a7.screenStart, { exclude: e9 }), null != r5 && (r5.z = x3(r5, t6, n5)));
    const o5 = t6.toMap(a7.screenEnd, { exclude: e9 });
    null != o5 && (o5.z = x3(o5, t6, n5));
    const l9 = null != r5 && null != o5 ? { sceneStart: r5, sceneEnd: o5 } : null;
    return __spreadProps(__spreadValues({}, a7), { scenePoints: l9 });
  };
}
function G2(t6, n5, e9) {
  const r5 = n5.elevationProvider.getElevation(t6.x, t6.y, t6.z ?? 0, t6.spatialReference, "scene") ?? 0, a7 = x6(t6);
  return a7.z = r5, a7.hasZ = true, a7.z = x3(a7, n5, e9), a7;
}
function q4(t6, n5) {
  if ("2d" === t6.type) return (t7) => t7;
  let e9 = null;
  return (r5) => {
    "start" === r5.action && (e9 = G2(r5.mapStart, t6, n5));
    const a7 = G2(r5.mapEnd, t6, n5), o5 = null != e9 && null != a7 ? { sceneStart: e9, sceneEnd: a7 } : null;
    return __spreadProps(__spreadValues({}, r5), { scenePoints: o5 });
  };
}

// node_modules/@arcgis/core/views/interactive/snapping/SnappingDragPipelineStep.js
function f5({ predicate: o5 = () => true, snappingManager: i7, snappingContext: a7, updatingHandles: u6, useZ: p8 = true }) {
  const c8 = new D7();
  if (null == i7) return { snappingStep: [y6, c8], cancelSnapping: y6 };
  let f6, Z3 = null, j7 = null, z6 = null;
  const T4 = () => {
    Z3 = e2(Z3), i7.doneSnapping(), j7?.frameTask.remove(), j7 = null, f6 = l(f6), z6 = null;
  }, k10 = d4(i7, p8, c8);
  let w7 = null, I4 = null, U6 = null;
  return { snappingStep: [(n5) => {
    if (!o5(n5)) return n5;
    const { action: e9 } = n5;
    if ("start" === e9) {
      const { info: e10 } = n5, t6 = m4(i7.view);
      if (j7 = g3(a7, n5, t6), j7.context.selfSnappingZ = null, !p8 && null != e10) {
        const n6 = S4(a7.coordinateHelper, e10.handle.part);
        null != n6 && (j7.context.selfSnappingZ = { value: n6, elevationInfo: a7.elevationInfo ?? k3 });
      }
    }
    if (null != j7) {
      const { context: o6, originalScenePos: a8, originalPos: l9 } = j7, { mapEnd: s6, mapStart: c9, scenePoints: d5 } = n5, m5 = x9(l9, v5(s6, c9)), g5 = v5(c9, l9), S6 = __spreadProps(__spreadValues({}, n5), { action: "update" }), y7 = j7.context, T5 = P2(a8, d5), C2 = i7.update({ point: m5, scenePoint: T5, context: o6 });
      if (U6 = C2, h4(s6, C2, g5, p8), w7 = m5, I4 = T5, "end" !== e9) {
        const { frameTask: n6 } = j7;
        null == Z3 && (Z3 = new AbortController()), z6 = (e10) => {
          u6.addPromise(y(k10({ frameTask: n6, event: S6, context: y7, point: m5, scenePoint: T5, delta: g5, getLastState: () => ({ point: w7, scenePoint: I4, updatePoint: e10.forceUpdate ? null : U6 }) }, Z3.signal)));
        }, z6({ forceUpdate: false }), null == f6 && (f6 = l3(() => i7.options.effectiveEnabled, () => z6?.({ forceUpdate: true })));
      }
    }
    return "end" === e9 && T4(), n5;
  }, c8], cancelSnapping: (n5) => (T4(), n5) };
}
function d4(n5, e9, t6) {
  return L(async ({ frameTask: o5, point: r5, scenePoint: a7, context: l9, event: s6, delta: u6, getLastState: p8 }, c8) => {
    const f6 = await o5.schedule(() => n5.snap({ point: r5, scenePoint: a7, context: l9, signal: c8 }), c8);
    if (f6.valid) {
      let a8 = await o5.schedule(() => f6.apply(), c8);
      const d5 = p8();
      null != d5.point && r5 !== d5.point && (a8 = n5.update({ point: d5.point, scenePoint: d5.scenePoint, context: l9 })), null != d5.updatePoint && a4(a8, d5.updatePoint) || (h4(s6.mapEnd, a8, u6, e9), t6.execute(s6));
    }
  });
}
function m4(n5) {
  return "3d" === n5.type ? n5.resourceController.scheduler.registerTask(p.SNAPPING) : D;
}
function g3(n5, e9, t6) {
  return { context: new e5({ editGeometryOperations: n5.editGeometryOperations, elevationInfo: n5.elevationInfo, pointer: n5.pointer, vertexHandle: null != e9.info ? e9.info.handle : null, excludeFeature: n5.excludeFeature, feature: n5.feature, visualizer: n5.visualizer }), originalPos: null != e9.snapOrigin ? n5.coordinateHelper.vectorToDehydratedPoint(e9.snapOrigin) : e9.mapStart, originalScenePos: null != e9.scenePoints ? e9.scenePoints.sceneStart : null, frameTask: t6 };
}
function x9(n5, [e9, t6, o5]) {
  const r5 = x6(n5);
  return r5.x += e9, r5.y += t6, r5.hasZ && (r5.z += o5), r5;
}
function P2(n5, e9) {
  return null == n5 || null == e9 ? null : x9(n5, v5(e9.sceneEnd, e9.sceneStart));
}
function v5(n5, e9) {
  const t6 = n5.hasZ && e9.hasZ ? n5.z - e9.z : 0;
  return [n5.x - e9.x, n5.y - e9.y, t6];
}
function h4(n5, e9, [t6, o5, r5], i7) {
  n5.x = e9.x + t6, n5.y = e9.y + o5, i7 && n5.hasZ && e9.hasZ && (n5.z = e9.z + r5);
}
function S4(n5, e9) {
  if (!n5.hasZ()) return null;
  const t6 = e9.vertices;
  let o5 = null;
  for (const r5 of t6) {
    const e10 = n5.getZ(r5.pos);
    if (null != o5 && null != e10 && Math.abs(e10 - o5) > 1e-6) return null;
    null == o5 && (o5 = e10);
  }
  return o5;
}
function y6(n5) {
  return n5;
}

// node_modules/@arcgis/core/views/draw/drawingModes.js
var e8 = "click";

// node_modules/@arcgis/core/views/draw/LegacyDrawManipulator.js
var s5 = class extends b {
  constructor(o5) {
    super(o5), this.events = new i3(), this.interactive = true, this.selectable = false, this.cursor = null, this.grabbable = true;
  }
  intersectionDistance(o5, e9) {
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
__decorate([a2()], s5.prototype, "interactive", void 0), __decorate([a2()], s5.prototype, "selectable", void 0), __decorate([a2()], s5.prototype, "cursor", void 0), __decorate([a2()], s5.prototype, "grabbing", void 0), __decorate([a2()], s5.prototype, "grabbable", void 0), __decorate([a2()], s5.prototype, "consumesClicks", void 0), __decorate([a2()], s5.prototype, "grabbableForEvent", void 0), __decorate([a2()], s5.prototype, "dragging", void 0), __decorate([a2()], s5.prototype, "hovering", void 0), __decorate([a2()], s5.prototype, "selected", void 0), s5 = __decorate([c("esri.views.draw.LegacyDrawManipulator")], s5);

// node_modules/@arcgis/core/views/draw/DrawOperation.js
var k9 = "crosshair";
var Z2 = "progress";
var L3 = /* @__PURE__ */ Symbol();
var U5 = /* @__PURE__ */ Symbol();
var A3 = class extends l2 {
  constructor(t6) {
    super(t6), this._createOperationCompleted = false, this._hideDefaultCursor = false, this._pointerDownStates = new e4(), this._stagedScreenPoint = null, this._stagedPointerType = null, this._updatingHandles = new h(), this._stagedPointerId = null, this.constraintsEnabled = false, this.constraints = void 0, this._getPointConstraint = t2(q2), this._getPolylineOrPolygonConstraint = t2(z2), this.constraintZ = null, this.defaultZ = null, this.isDraped = true, this.labelOptions = new c5(), this.cursor = null, this.loading = false, this.snapToSceneEnabled = null, this.firstVertex = null, this.lastVertex = null, this.secondToLastVertex = null, null == t6.elevationInfo && (this.elevationInfo = i4(!!t6.hasZ));
  }
  initializePointer() {
    const t6 = this.view.inputManager?.latestPointerInfo;
    null != t6 && "touch" !== t6.type && this._updatePointer(t6.location, t6.id, t6.type);
  }
  initialize() {
    const { geometryType: t6, view: e9 } = this, i7 = e9.spatialReference, r5 = "viewingMode" in e9.state ? e9.state.viewingMode : 2, s6 = "segment" === t6 || "multipoint" === t6 ? "polyline" : t6;
    this.coordinateHelper = Y2(this.hasZ, this.hasM, i7), this._editGeometryOperations = new S(new w5(s6, this.coordinateHelper), r5), this._snappingOperation = new p3({ view: e9 }), this.addHandles([l3(() => ({ stagedPoint: this._snappingOperation.stagedPoint, constraint: this._constraint }), ({ stagedPoint: t7, constraint: e10 }, i8) => {
      const { snappingOptions: n5 } = this;
      n5 && (n5.forceDisabled = null != e10 && ge(e10));
      if (null != i8 && t7 === i8.stagedPoint && e10 !== i8.constraint) return this._onKeyboardBasedChange();
      this._processCursor(t7 ?? this._screenToMap(this._stagedScreenPoint));
    }, { equals: (t7, e10) => t7.stagedPoint === e10.stagedPoint && o(t7.constraint, e10.constraint) }), l3(() => this.view.viewpoint, (t7, e10) => {
      t7 && e10 && y2(t7, e10) && this._onKeyboardBasedChange();
    })]), this._activePart = new V2(i7, r5), this._editGeometryOperations.data.parts.push(this._activePart);
    const a7 = this.segmentLabels;
    null != a7 && (a7.context = { view: e9, editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, labelOptions: this.labelOptions, automaticLengthMeasurementUtils: this.automaticLengthMeasurementUtils }, this.addHandles(l3(() => this.labelOptions.enabled, (t7) => {
      a7.visible = t7;
    }, w2))), this.addHandles(this._editGeometryOperations.on(["vertex-add", "vertex-update", "vertex-remove"], (t7) => {
      const e10 = t7.vertices.map((t8) => ({ componentIndex: 0, vertexIndex: t8.index, coordinates: this.coordinateHelper.vectorToArray(t8.pos) })), i8 = e10.map((t8) => t8.coordinates), n5 = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.getFirstVertex()?.pos) ?? null;
      a4(n5, this.firstVertex) || (this.firstVertex = n5);
      const r6 = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.getLastVertex()?.pos) ?? null;
      a4(r6, this.lastVertex) || (this.lastVertex = r6);
      const s7 = this.coordinateHelper.vectorToDehydratedPoint(this._activePart.segments.at(-1)?.leftVertex?.pos) ?? null;
      switch (a4(s7, this.secondToLastVertex) || (this.secondToLastVertex = s7), this._processCursor(this.cursorVertex), t7.type) {
        case "vertex-add":
          this.emit(t7.type, __spreadProps(__spreadValues({}, t7), { added: i8, vertices: e10 }));
          break;
        case "vertex-update":
          this.emit(t7.type, __spreadProps(__spreadValues({}, t7), { updated: i8, vertices: e10 }));
          break;
        case "vertex-remove":
          this.emit(t7.type, __spreadProps(__spreadValues({}, t7), { removed: i8, vertices: e10 }));
      }
    }));
    const c8 = this._manipulator = new s5({ consumesClicks: false, grabbableForEvent: (t7) => "click" !== this.drawingMode || "touch" === t7.pointerType && this._snappingEnabled && 1 === this._pointerDownStates.size });
    this.manipulators.add(c8), c8.grabbable = "point" !== t6 && "multipoint" !== t6, this.addHandles([c8.events.on("immediate-click", (t7) => this._onImmediateClick(t7)), c8.events.on("immediate-double-click", (t7) => this._onImmediateDoubleClick(t7)), l3(() => this.drawingMode, () => {
      this.removeHandles(L3), this.addHandles(this._createManipulatorDragPipeline(c8), L3);
    }, w2), l3(() => ({ effectiveCursor: this.effectiveCursor }), ({ effectiveCursor: t7 }) => {
      c8.cursor = t7;
    }, w2)]), x7(this, () => {
      const t7 = this.view.inputManager.latestPointerInfo?.type ?? "mouse", e10 = this._getSnappingContext(t7);
      if (null != this.snappingManager) {
        const t8 = this._snappingOperation.snapAgainNearPreviousMapPoint(this.snappingManager, e10);
        this._updatingHandles.addPromise(y(t8));
      }
    });
  }
  destroy() {
    u(this.segmentLabels), u(this._snappingOperation), this._editGeometryOperations = u(this._editGeometryOperations), this._updatingHandles.destroy();
  }
  get _isDragging() {
    const { _stagedPointerId: t6, _manipulator: e9 } = this;
    return null != t6 && this._pointerDownStates.has(t6) || e9.grabbing || !e9.interactive;
  }
  get _snappingEnabled() {
    return null != this.snappingManager && this.snappingManager.options.effectiveEnabled;
  }
  get _requiresScenePoint() {
    const t6 = this._updateAndGetEffectiveDrawSurface();
    return "3d" === this.view.type && this.drawSurface !== t6;
  }
  get canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  get canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  get committedVertices() {
    return this._activePart.vertices.map((t6) => this.coordinateHelper.vectorToArray(t6.pos));
  }
  get _constraint() {
    const { constraints: t6, constraintsEnabled: e9 } = this;
    if (t6 && e9) switch (this.geometryType) {
      case "point":
      case "multipoint":
        return this._getPointConstraint(t6);
      case "polygon":
      case "polyline":
        return this._getPolylineOrPolygonConstraint(this.lastVertex, this.secondToLastVertex, t6);
    }
  }
  set drawingMode(t6) {
    this._set("drawingMode", t6 ?? e8);
  }
  get effectiveCursor() {
    return this.loading ? Z2 : this._hideDefaultCursor ? null : this.cursor || k9;
  }
  get interactive() {
    return this._manipulator.interactive;
  }
  set interactive(t6) {
    this._manipulator.interactive = t6;
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
    const { cursorVertex: t6, lastVertex: e9, firstVertex: i7, geometryType: n5 } = this;
    return "polygon" === n5 && u4(t6, i7) || u4(t6, e9) ? null : t6;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get geometryIncludingUncommittedVertices() {
    const { committedVertices: t6, committableVertex: e9, coordinateHelper: i7 } = this, n5 = t6.slice();
    return null != e9 && n5.push(i7.pointToArray(e9)), n5;
  }
  cancel() {
    this.complete({ aborted: true });
  }
  commitStagedVertex() {
    this._snappingOperation.abort();
    const { committableVertex: t6 } = this;
    null != t6 && this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t6), this._activePart);
  }
  complete(t6) {
    const e9 = t6?.aborted || false;
    this._snappingOperation.abort(), this.snappingManager?.doneSnapping();
    const { geometryType: i7, numCommittedVertices: n5 } = this, r5 = "multipoint" === i7 && 0 === n5 || "polyline" === i7 && n5 < 2 || "polygon" === i7 && n5 < 3;
    "segment" !== i7 && "point" !== i7 || this.commitStagedVertex(), this._createOperationCompleted = !r5, (this.isCompleted || e9) && (this._stagedScreenPoint = null, this._stagedPointerId = null, this._stagedPointerType = null, this._processCursor(null), this.emit("complete", { vertices: this.committedVertices.map((t7, e10) => ({ componentIndex: 0, vertexIndex: e10, coordinates: t7 })), aborted: e9, type: "complete" }));
  }
  onInputEvent(t6) {
    switch (t6.type) {
      case "pointer-down":
        this._pointerDownStates.add(t6.pointerId);
        break;
      case "pointer-up":
        this._pointerDownStates.delete(t6.pointerId);
    }
    switch (t6.type) {
      case "pointer-move":
        return this._onPointerMove(t6);
      case "hold":
        return this._onHold(t6);
    }
  }
  redo() {
    this._editGeometryOperations.redo();
  }
  undo() {
    null != this.snappingManager && this.snappingManager.doneSnapping(), this._editGeometryOperations.undo();
  }
  _processCursor(t6) {
    const e9 = a(this.cursorVertex), n5 = a(t6), r5 = n5 && (this._updateAndGetEffectiveDrawSurface()?.constrainZ(n5) ?? n5), s6 = this._snapToClosingVertex(r5), o5 = this._applyConstraints(s6);
    u4(e9, o5) || (this._set("cursorVertex", o5), this.segmentLabels?.set("stagedVertex", null != o5 ? this.coordinateHelper.pointToVector(o5) : null), null == o5 || "mouse" !== this._stagedPointerType ? this.emit("cursor-remove") : this.emit("cursor-update", { updated: null, vertices: [{ componentIndex: 0, vertexIndex: this._activePart.vertices.length, coordinates: this.coordinateHelper.pointToArray(o5) }], operation: "apply", type: "vertex-update" }));
  }
  _snapToClosingVertex(t6) {
    if (null == t6 || this._isDragging || "polygon" !== this.geometryType || this.numCommittedVertices <= 2) return t6;
    const e9 = this._mapToScreen(t6);
    if (!e9) return t6;
    const i7 = this._activePart;
    return this._vertexWithinPointerDistance(i7.vertices[0].pos, e9) ? this.firstVertex : this._vertexWithinPointerDistance(i7.vertices.at(-1).pos, e9) ? this.lastVertex : t6;
  }
  _createManipulatorDragPipeline(t6) {
    switch (this.drawingMode) {
      case "click":
        return this._createManipulatorDragPipelineClick(t6);
      case "freehand":
        return this._createManipulatorDragPipelineFreehand(t6);
      case "hybrid":
        return this._createManipulatorDragPipelineHybrid(t6);
    }
  }
  _createManipulatorDragPipelineClick(t6) {
    return p7(t6, (t7, e9, i7, n5) => {
      const r5 = "touch" === n5 && this._snappingEnabled;
      if (this.isCompleted || !r5) return;
      const { snappingStep: s6, cancelSnapping: o5 } = f5({ predicate: () => r5, snappingManager: this.snappingManager, snappingContext: new e5({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, feature: this.graphic, pointer: n5, visualizer: this.snappingVisualizer, drawConstraints: this.constraints }), updatingHandles: this._updatingHandles, useZ: !this._requiresScenePoint });
      i7 = i7.next((t8) => (r5 && null != this.snappingManager && this.snappingManager.doneSnapping(), t8)).next(o5), e9.next(this._screenToMapDragEventStep()).next((t8) => ("start" === t8.action && (this._processCursor(t8.mapStart), ("segment" === this.geometryType || r5 && !this.numCommittedVertices) && this.commitStagedVertex()), t8)).next(U4(this.view, this.elevationInfo)).next(...s6).next((t8) => (r5 && (this._processCursor(t8.mapEnd), "end" === t8.action && this.commitStagedVertex()), t8)).next((t8) => ("end" === t8.action && ("mouse" !== this._stagedPointerType && this._snappingOperation.abort(), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete()), t8));
    });
  }
  _createManipulatorDragPipelineFreehand(t6) {
    return p7(t6, (t7, e9) => {
      this.isCompleted || e9.next(this._screenToMapDragEventStep()).next((t8) => ("start" === t8.action && (this._snappingOperation.abort(), null == this.committableVertex && this._processCursor(t8.mapStart), "segment" === this.geometryType && this.commitStagedVertex()), t8)).next((t8) => {
        switch (t8.action) {
          case "start":
          case "update":
            this._processCursor(t8.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            this.complete();
        }
        return t8;
      });
    });
  }
  _createManipulatorDragPipelineHybrid(t6) {
    return p7(t6, (t7, e9) => {
      this.isCompleted || e9.next(this._screenToMapDragEventStep()).next((t8) => ("start" === t8.action && (this._snappingOperation.abort(), this.addHandles(this._editGeometryOperations.createUndoGroup(), U5), this._processCursor(t8.mapStart), this.commitStagedVertex()), t8)).next((t8) => {
        switch (t8.action) {
          case "start":
          case "update":
            this._processCursor(t8.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            "mouse" !== this._stagedPointerType && this._snappingOperation.abort(), this.removeHandles(U5), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete();
        }
        return t8;
      });
    });
  }
  get _drawAtFixedElevation() {
    const { constraintsEnabled: t6, constraintZ: e9, geometryType: i7, numCommittedVertices: n5 } = this;
    return t6 ? null != e9 || "segment" === i7 && n5 > 0 : ("segment" === i7 || "polygon" === i7) && n5 > 0;
  }
  _updateAndGetEffectiveDrawSurface() {
    const { constraintsEnabled: t6, coordinateHelper: e9, drawSurface: i7, elevationDrawSurface: n5, snapToSceneEnabled: r5 } = this;
    if (null == n5) return i7;
    if (!this.hasZ) return n5.defaultZ = null, n5;
    const s6 = this.elevationInfo?.mode;
    let o5 = this.defaultZ, a7 = t6 || "absolute-height" === s6;
    if (null != r5 && (a7 = r5), "on-the-ground" === s6 && (a7 = false), this._drawAtFixedElevation) {
      o5 = (t6 ? this.constraintZ : null) ?? e9.getZ(this._activePart.vertices[0].pos), a7 = false;
    }
    return a7 ? i7 : (n5.defaultZ = o5, n5);
  }
  _mapToScreen(t6) {
    return this._updateAndGetEffectiveDrawSurface()?.mapToScreen(t6);
  }
  _onHold(t6) {
    this._snappingOperation.abort(), "click" === this.drawingMode && "touch" === t6.pointerType && this._snappingEnabled && this._processCursor(t6.mapPoint), t6.stopPropagation();
  }
  _onImmediateClick(t6) {
    if (!("mouse" === t6.pointerType && 2 === t6.button || this._manipulator.dragging)) try {
      const { drawingMode: e9, geometryType: i7 } = this;
      this._stagedPointerType = t6.pointerType, this._stagedScreenPoint = t6.screenPoint;
      const n5 = this._screenToMap(t6.screenPoint);
      if (null == n5) return;
      if (null == n5 || "freehand" === e9 && "point" !== i7 && "multipoint" !== i7) return;
      if (this._snappingEnabled && null != this.cursorVertex || this._processCursor(n5), null == this.committableVertex) return void this.complete();
      this.commitStagedVertex(), "mouse" !== t6.pointerType && this._processCursor(null), ("freehand" === e9 && "multipoint" !== this.geometryType || "point" === i7 || "segment" === i7 && 2 === this.numCommittedVertices || "segment" === i7 && "hybrid" === e9 && 1 === this.numCommittedVertices) && this.complete();
    } finally {
      t6.stopPropagation();
    }
  }
  _onImmediateDoubleClick(t6) {
    this._manipulator.dragging || "point" === this.geometryType || (this.complete(), t6.stopPropagation());
  }
  _onPointerMove(t6) {
    const e9 = i(t6.x, t6.y);
    this._updatePointer(e9, t6.pointerId, t6.pointerType) && t6.stopPropagation();
  }
  _updatePointer(t6, e9, i7) {
    return this._stagedScreenPoint = t6, this._stagedPointerType = i7, this._stagedPointerId = e9, this._isDragging ? (this._snappingOperation.abort(), false) : (this._processCursorMovementRelativeToSurface(t6, i7), true);
  }
  _onKeyboardBasedChange() {
    "mouse" === this._stagedPointerType && this._stagedScreenPoint && null != this._stagedPointerId && !this._isDragging ? this._processCursorMovementRelativeToSurface(this._stagedScreenPoint, this._stagedPointerType) : this._snappingOperation.abort();
  }
  _processCursorMovementRelativeToSurface(t6, e9) {
    const i7 = this._snappingOperation, n5 = this._screenToMap(t6), r5 = this._requiresScenePoint ? this.drawSurface?.screenToMap(t6) : null;
    if (null == n5) return this._hideDefaultCursor = true, this._processCursor(null), void i7.abort();
    this._hideDefaultCursor = false;
    const s6 = this.snappingManager;
    if (null == s6) return this._processCursor(n5), void i7.abort();
    const a7 = this._getSnappingContext(e9);
    this._updatingHandles.addPromise(y(i7.snap({ point: n5, scenePoint: r5 }, s6, a7)));
  }
  _applyConstraints(t6) {
    const { _constraint: e9, constraints: i7 } = this;
    if (!t6 || !i7 || !e9) return t6;
    const { context: n5 } = i7, r5 = k5(t6, n5), s6 = r5 ? e9.closestTo(r5) : void 0;
    if (!s6) return t6;
    const o5 = A(s6, t6, n5), a7 = "2d" === this.view.type || "absolute-height" !== n5.elevationInfo.mode;
    return null != o5 && a7 && null != this.constraintZ && this.hasZ && (o5.z = this.constraintZ), o5;
  }
  _screenToMap(t6) {
    return t6 ? this._updateAndGetEffectiveDrawSurface()?.screenToMap(t6) : null;
  }
  _screenToMapDragEventStep() {
    let t6 = null;
    return (e9) => {
      if ("start" === e9.action && (t6 = this._screenToMap(e9.screenStart)), null == t6) return null;
      const i7 = this._screenToMap(e9.screenEnd);
      return null != i7 ? __spreadProps(__spreadValues({}, e9), { mapStart: t6, mapEnd: i7 }) : null;
    };
  }
  _vertexWithinPointerDistance(t6, e9) {
    const i7 = 25, n5 = this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t6));
    return null != n5 && z5(n5, e9, i7);
  }
  _getSnappingContext(t6) {
    const e9 = this._drawAtFixedElevation ? this.elevationDrawSurface?.defaultZ : null;
    return new e5({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, pointer: t6, feature: this.graphic, visualizer: this.snappingVisualizer, selfSnappingZ: null != e9 ? { value: e9, elevationInfo: this.elevationInfo } : null, drawConstraints: this.constraints });
  }
};
function z5(t6, e9, i7) {
  const n5 = t6.x - e9.x, r5 = t6.y - e9.y;
  return n5 * n5 + r5 * r5 <= i7;
}
__decorate([a2()], A3.prototype, "_hideDefaultCursor", void 0), __decorate([a2()], A3.prototype, "_stagedPointerId", void 0), __decorate([a2()], A3.prototype, "_isDragging", null), __decorate([a2()], A3.prototype, "_snappingOperation", void 0), __decorate([a2()], A3.prototype, "_snappingEnabled", null), __decorate([a2({ constructOnly: true })], A3.prototype, "graphic", void 0), __decorate([a2()], A3.prototype, "constraintsEnabled", void 0), __decorate([a2()], A3.prototype, "constraints", void 0), __decorate([a2()], A3.prototype, "_constraint", null), __decorate([a2()], A3.prototype, "constraintZ", void 0), __decorate([a2()], A3.prototype, "defaultZ", void 0), __decorate([a2()], A3.prototype, "isDraped", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "automaticLengthMeasurementUtils", void 0), __decorate([a2({ value: e8 })], A3.prototype, "drawingMode", null), __decorate([a2({ constructOnly: true })], A3.prototype, "elevationDrawSurface", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "elevationInfo", void 0), __decorate([a2({ constructOnly: true, type: c5 })], A3.prototype, "labelOptions", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "geometryType", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "hasM", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "hasZ", void 0), __decorate([a2()], A3.prototype, "cursor", void 0), __decorate([a2()], A3.prototype, "effectiveCursor", null), __decorate([a2()], A3.prototype, "loading", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "manipulators", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "drawSurface", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "segmentLabels", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "snappingManager", void 0), __decorate([a2({ constructOnly: true })], A3.prototype, "snappingVisualizer", void 0), __decorate([a2()], A3.prototype, "snapToSceneEnabled", void 0), __decorate([a2({ readOnly: true })], A3.prototype, "cursorVertex", null), __decorate([a2({ readOnly: true })], A3.prototype, "visualizationCursorVertex", null), __decorate([a2()], A3.prototype, "committableVertex", null), __decorate([a2()], A3.prototype, "firstVertex", void 0), __decorate([a2()], A3.prototype, "lastVertex", void 0), __decorate([a2()], A3.prototype, "secondToLastVertex", void 0), __decorate([a2()], A3.prototype, "updating", null), __decorate([a2({ constructOnly: true })], A3.prototype, "view", void 0), A3 = __decorate([c("esri.views.draw.DrawOperation")], A3);

// node_modules/@arcgis/core/views/interactive/GraphicManipulator.js
var u5 = class extends b {
  set graphic(t6) {
    this._circleCollisionCache = null, this._originalSymbol = t6.symbol, this._set("graphic", t6), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const { layer: t6 } = this.graphic, e9 = t6 && "elevationInfo" in t6 ? t6.elevationInfo : null, i7 = a5(this.graphic), o5 = e9 ? e9.offset : 0;
    return new x({ mode: i7, offset: o5 });
  }
  set focusedSymbol(t6) {
    t6 !== this._get("focusedSymbol") && (this._set("focusedSymbol", t6), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(t6) {
    t6 !== this._get("grabbing") && (this._set("grabbing", t6), this._updateGraphicSymbol());
  }
  set hovering(t6) {
    t6 !== this._get("hovering") && (this._set("hovering", t6), this._updateGraphicSymbol());
  }
  set selected(t6) {
    t6 !== this._get("selected") && (this._set("selected", t6), this._updateGraphicSymbol(), this.events.emit("select-changed", { action: t6 ? "select" : "deselect" }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  constructor(t6) {
    super(t6), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.consumesClicks = true, this.events = new i3(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(t6) {
    const e9 = this.graphic;
    if (false === e9.visible) return null;
    const i7 = e9.geometry;
    if (null == i7) return null;
    const o5 = this._get("focusedSymbol"), s6 = null != o5 ? o5 : e9.symbol;
    return "2d" === this.view.type ? this._intersectDistance2D(this.view, t6, i7, s6) : this._intersectDistance3D(this.view, t6, e9);
  }
  attach() {
    this.attachSymbolChanged(), null != this.layer && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), null != this.layer && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = l3(() => this.graphic?.symbol, (t6) => {
      null != t6 && t6 !== this.focusedSymbol && t6 !== this._originalSymbol && (this._originalSymbol = t6, this._focused && null != this.focusedSymbol && (this.graphic.symbol = this.focusedSymbol));
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
  _intersectDistance2D(t6, e9, i7, o5) {
    const { cache: s6, result: l9 } = f3(t6, e9, i7, o5, this._circleCollisionCache) ?? {};
    return this._circleCollisionCache = s6, l9 ?? null;
  }
  _intersectDistance3D(t6, e9, i7) {
    const o5 = t6.toMap(e9, { include: [i7] });
    return o5 && n2(o5, g4, t6.renderSpatialReference) ? p2(g4, t6.state.camera.eye) : null;
  }
};
__decorate([a2({ constructOnly: true, nonNullable: true })], u5.prototype, "graphic", null), __decorate([a2()], u5.prototype, "elevationInfo", null), __decorate([a2({ constructOnly: true, nonNullable: true })], u5.prototype, "view", void 0), __decorate([a2({ value: null })], u5.prototype, "focusedSymbol", null), __decorate([a2({ constructOnly: true })], u5.prototype, "layer", void 0), __decorate([a2()], u5.prototype, "interactive", void 0), __decorate([a2()], u5.prototype, "selectable", void 0), __decorate([a2()], u5.prototype, "grabbable", void 0), __decorate([a2({ value: false })], u5.prototype, "grabbing", null), __decorate([a2()], u5.prototype, "dragging", void 0), __decorate([a2()], u5.prototype, "hovering", null), __decorate([a2({ value: false })], u5.prototype, "selected", null), __decorate([a2()], u5.prototype, "cursor", void 0), u5 = __decorate([c("esri.views.interactive.GraphicManipulator")], u5);
var g4 = n();

// node_modules/@arcgis/core/views/interactive/editGeometry/support/editPlaneUtils.js
function V4(o5, i7) {
  return E5(o5, i7, false);
}
function T3(o5, i7) {
  return E5(o5, i7, true);
}
function E5(o5, i7, r5) {
  if (o5 instanceof t3) {
    if (o5.operation instanceof t4) return h5(o5.operation, i7, r5), true;
    if (o5.operation instanceof o3) return v6(o5.operation, i7, r5), true;
    if (o5.operation instanceof l5) return F3(o5.operation, i7, r5), true;
  }
  return false;
}
function h5(o5, i7, r5 = false) {
  const t6 = r5 ? -1 : 1, s6 = r2(t6 * o5.dx, t6 * o5.dy, t6 * o5.dz);
  c2(i7.origin, i7.origin, s6), K(i7);
}
function v6(o5, i7, r5 = false) {
  const t6 = r5 ? -o5.angle : o5.angle;
  Y(i7.basis1, i7.basis1, a3, t6), Y(i7.basis2, i7.basis2, a3, t6), K(i7);
}
function F3(o5, i7, r5 = false) {
  const t6 = r5 ? 1 / o5.factor1 : o5.factor1, s6 = r5 ? 1 / o5.factor2 : o5.factor2;
  x2(i7.basis1, i7.basis1, t6), x2(i7.basis2, i7.basis2, s6), k(i7.origin, i7.origin, o5.origin, o5.axis1, t6), k(i7.origin, i7.origin, o5.origin, o5.axis2, s6), K(i7);
}
function S5(a7, m5, g5, p8, u6 = false) {
  p8 || (p8 = D4());
  const N3 = o2(t.get(), a7[1], -a7[0]), d5 = o2(t.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), x10 = o2(t.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), j7 = t.get(), V5 = m5.allVerticesUnordered;
  V5.forEach(({ pos: s6 }) => {
    o2(j7, j2(a7, s6), j2(N3, s6)), f(d5, d5, j7), M(x10, x10, j7);
  });
  const T4 = 1e-6, E6 = o2(t.get(), x10[0] - d5[0] < T4 ? g5 / 2 : 0, x10[1] - d5[1] < T4 ? g5 / 2 : 0);
  e3(d5, d5, E6), u2(x10, x10, E6);
  const h6 = u6 ? V5.reduce((o5, i7) => o5 + (i7.pos[2] ?? 0), 0) / V5.length : 0;
  return l4(p8.basis1, a7, (x10[0] - d5[0]) / 2), l4(p8.basis2, N3, (x10[1] - d5[1]) / 2), u3(p8.origin, d5[0] * a7[0] + d5[1] * N3[0], d5[0] * a7[1] + d5[1] * N3[1], h6), c2(p8.origin, p8.origin, p8.basis1), c2(p8.origin, p8.origin, p8.basis2), K(p8), p8;
}

export {
  E3 as E,
  D6 as D,
  p7 as p,
  m3 as m,
  f4 as f,
  E4 as E2,
  S3 as S,
  g2 as g,
  v4 as v,
  z4 as z,
  M4 as M,
  R3 as R,
  D7 as D2,
  U4 as U,
  q4 as q,
  f5 as f2,
  A3 as A,
  u5 as u,
  V4 as V,
  T3 as T,
  S5 as S2
};
//# sourceMappingURL=chunk-5SJMZJD2.js.map
