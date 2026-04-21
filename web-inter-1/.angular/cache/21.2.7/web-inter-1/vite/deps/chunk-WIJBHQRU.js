import {
  c as c7,
  g as g2,
  i as i3,
  u as u5
} from "./chunk-XNQ46IBO.js";
import {
  t as t2
} from "./chunk-SHJQJRXT.js";
import {
  e as e3
} from "./chunk-UG5WN3NE.js";
import {
  h as h4,
  m as m4
} from "./chunk-NHXXXISU.js";
import {
  r as r5,
  s as s2
} from "./chunk-BNW2PSKP.js";
import {
  n as n6
} from "./chunk-CZMKFPK4.js";
import {
  i as i2
} from "./chunk-HFSNW7LO.js";
import {
  o
} from "./chunk-D5AGPHYX.js";
import {
  e as e4
} from "./chunk-2X5HWIJG.js";
import {
  a as a4
} from "./chunk-MNFWQFAC.js";
import {
  r as r4
} from "./chunk-5A66PGSK.js";
import {
  c as c6,
  n as n4,
  n2 as n5
} from "./chunk-DP2PTG4E.js";
import {
  c as c5
} from "./chunk-5AR533LE.js";
import {
  d as d3,
  x as x2,
  y as y3
} from "./chunk-GFDC56CO.js";
import {
  p as p3
} from "./chunk-I22OGKPP.js";
import {
  g,
  h as h3,
  p as p2,
  y as y2
} from "./chunk-MY4KRETZ.js";
import {
  h as h2
} from "./chunk-K7QCGVDB.js";
import {
  i,
  k
} from "./chunk-YP7OFZOK.js";
import {
  n as n3
} from "./chunk-YTAOLVM3.js";
import {
  c as c3
} from "./chunk-IXCAA3KK.js";
import {
  f as f2
} from "./chunk-6AURJHXX.js";
import {
  c as c4
} from "./chunk-KRGMLSA4.js";
import {
  h
} from "./chunk-TXF5FFQH.js";
import {
  w as w3
} from "./chunk-5MDFQFDX.js";
import {
  w as w2
} from "./chunk-AP2NAWWU.js";
import {
  F,
  H,
  V,
  sn,
  tn
} from "./chunk-QBEV3F3C.js";
import {
  j as j2
} from "./chunk-JXLQUNSA.js";
import {
  d as d2,
  n as n2,
  x
} from "./chunk-FAG2TZ7O.js";
import {
  u as u4
} from "./chunk-TKPO3PT4.js";
import {
  m as m3
} from "./chunk-LFCO57WV.js";
import {
  r as r3
} from "./chunk-XYIHFHUH.js";
import {
  e as e2,
  m as m2
} from "./chunk-WSE2ZKFY.js";
import {
  u as u3
} from "./chunk-ZC4RH2DW.js";
import {
  d
} from "./chunk-ON6HJSAD.js";
import {
  E
} from "./chunk-DMD5CGVA.js";
import {
  T
} from "./chunk-VHQJAPCR.js";
import {
  U,
  a as a2,
  f,
  j,
  l,
  w
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  l as l3
} from "./chunk-LD7VLL5E.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3,
  c as c2,
  l2,
  m2 as m
} from "./chunk-7ELXYOAW.js";
import {
  a,
  c,
  e2 as e,
  p,
  r,
  s,
  t,
  u2 as u,
  u3 as u2,
  y
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r2
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

// node_modules/@arcgis/core/views/3d/interactive/editingTools/isSupportedObjectUtils.js
function e5(e7) {
  switch (e7) {
    case 0:
      break;
    case 1:
      return "not owned by a graphics layer";
    case 2:
      return "no geometry";
    case 3:
      return "the geometry type is not supported";
    case 4:
      return "the symbol type is not supported";
  }
  return "";
}

// node_modules/@arcgis/core/views/3d/interactive/editingTools/reshape/isSupportedObject.js
function r6(r8) {
  return t3(r8).result;
}
function t3(r8) {
  if (r8.graphic && "graphics" !== r8.graphic.layer?.type) return { result: 1 };
  if (!r8.operations) return { result: 2 };
  const t4 = r8.operations.data.type, e7 = r8.operations.data.geometry;
  return "point" === t4 || "mesh" === t4 || "polyline" === t4 || "polygon" === t4 ? { result: 0, geometry: e7 } : { result: 3 };
}

// node_modules/@arcgis/core/views/3d/interactive/editingTools/transform/isSupportedGraphic.js
function e6(e7) {
  if ("graphics" !== e7.layer?.type) return 1;
  if (null == e7.geometry) return 2;
  switch (e7.geometry.type) {
    case "point":
      break;
    case "polygon":
    case "polyline":
    case "multipoint":
    case "extent":
    case "mesh":
      return 0;
    default:
      return 3;
  }
  const t4 = null != e7.symbol && "point-3d" === e7.symbol.type && e7.symbol.symbolLayers;
  return t4 && t4.some((e8) => "object" === e8.type) ? 0 : 4;
}

// node_modules/@arcgis/core/views/interactive/snapping/candidates/dehydrated/DehydratedVertexSnappingCandidate.js
var o2 = class {
  constructor(o4, r8, s3, i5) {
    this.objectId = o4, this.layer = r8, this.targetPoint = y2(s3, i5);
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/SnappingManager.js
var z = class extends l3 {
  constructor(e7) {
    super(e7), this.options = new u5(), this._engineCache = /* @__PURE__ */ new Map(), this._loadTask = null, this._engines = [], this._currentMainCandidate = null, this._currentOtherActiveCandidates = [], this._currentSnappedType = 0, this._currentSpatialReference = null;
  }
  initialize() {
    this.addHandles([l(() => {
      const { distance: e7, touchSensitivityMultiplier: t4, effectiveSelfEnabled: n8, effectiveFeatureEnabled: i5, effectiveGridEnabled: s3 } = this.options;
      return { selfEnabled: n8, featureEnabled: i5, gridEnabled: "2d" === this.view.type && s3, viewReady: this.view.ready, viewSpatialReference: this.view.spatialReference, distance: e7, touchSensitivityMultiplier: t4 };
    }, (e7, n8) => {
      n8 && (this.doneSnapping(), this.emit("changed")), this._loadTask?.abort(), this._loadTask = w2((t4) => this._updateEngines(e7, n8, t4));
    }, w), l(() => this.options, (e7) => {
      for (const t4 of this._engines) t4.options = e7;
    }, U)]);
  }
  destroy() {
    this._loadTask?.abort(), this._destroyEngines();
  }
  get updating() {
    return this._engines.some((e7) => e7.updating) || !this._loadTask?.finished;
  }
  _destroyEngines() {
    this._engineCache.forEach((e7) => e7.destroy()), this._engineCache.clear(), this._engines = [];
  }
  async _updateEngines(e7, t4, n8) {
    if (!e7.viewReady) return void this._destroyEngines();
    t4?.viewSpatialReference !== e7.viewSpatialReference && this._destroyEngines();
    const i5 = this._engineCache, s3 = await Promise.allSettled([e7.featureEnabled && !i5.has("feature") ? this._createFeatureSnappingEngine(n8) : void 0, e7.selfEnabled && !i5.has("self") ? this._createSelfSnappingEngine(n8) : void 0, e7.gridEnabled && !i5.has("grid") ? this._createGridSnappingEngine(n8) : void 0]);
    if (n8.aborted) for (const a7 of s3) "fulfilled" === a7.status && a7.value?.engine.destroy();
    else {
      for (const e8 of s3) "fulfilled" === e8.status && e8.value && i5.set(e8.value.type, e8.value.engine);
      this._engines = Array.from(i5.values());
    }
  }
  async _createSelfSnappingEngine(e7) {
    const [{ SelfSnappingEngine: t4 }, n8] = await Promise.all([import("./SelfSnappingEngine-BI7MMEWX.js"), g2()]);
    return s(e7), { type: "self", engine: new t4({ view: this.view, options: this.options, geodesicLengthMeasurementUtils: n8 }) };
  }
  async _createGridSnappingEngine(e7) {
    const { view: t4 } = this;
    if ("2d" !== t4.type) return;
    const { GridSnappingEngine: n8 } = await import("./GridSnappingEngine-3MOZ4DL5.js");
    return s(e7), { type: "grid", engine: new n8({ view: t4, options: this.options }) };
  }
  async _createFeatureSnappingEngine(e7) {
    const { FeatureSnappingEngine: t4 } = await import("./FeatureSnappingEngine-4GLYXEA3.js");
    s(e7);
    const { view: n8, options: i5 } = this, { spatialReference: a7 } = n8;
    return { type: "feature", engine: new t4({ view: n8, options: i5, spatialReference: a7 }) };
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const { distance: e7, touchSensitivityMultiplier: t4 } = this.options, n8 = e7 * t4;
    return n8 * n8;
  }
  getVertexCandidates() {
    const e7 = this._currentSpatialReference;
    if (!e7) return [];
    const t4 = /* @__PURE__ */ new Set();
    this._currentMainCandidate && V2(t4, this._currentMainCandidate);
    for (const n8 of this._currentOtherActiveCandidates) V2(t4, n8);
    return Array.from(t4).map((t5) => new o2(t5.objectId, t5.layer, t5.originalTargetPoint, e7));
  }
  snap(e7) {
    return k2(e7) ? this._snapMultiPoint(e7) : this._snapSinglePoint(e7);
  }
  update(e7) {
    const { point: t4, context: i5 } = e7;
    this._removeVisualization();
    const s3 = this._currentMainCandidate;
    if (null == s3) return t4;
    const a7 = this._selectUpdateInput(e7);
    if (null == a7) return t4;
    const { spatialReference: r8 } = i5;
    if (!r8.equals(this._currentSpatialReference)) throw new r2("snapping:mismatched-spatial-reference", "Cannot update with the given spatial reference, as the current snapping candidates are in a different spatial reference.");
    const o4 = H(a7, r8);
    if (null == o4) return t4;
    const { view: p6 } = this, { elevationInfo: d5, visualizer: c8 } = i5, l5 = [], u7 = h3(o4, p6, d5), S = s3.constraint.closestTo(u7);
    if (!this._arePointsWithinScreenThreshold(u7, S, i5) || !U2(s3, i5.drawConstraints)) return this._resetSnappingState(), t4;
    s3.targetPoint = p2(S), l5.push(...s3.hints);
    for (const n8 of this._currentOtherActiveCandidates) U2(n8, i5.drawConstraints) && !Z(s3, n8) && (n8.targetPoint = p2(S), l5.push(...n8.hints));
    return null != c8 && this.addHandles(c8.draw(l5, { spatialReference: r8, elevationInfo: D(i5), view: p6, selfSnappingZ: i5.selfSnappingZ }), O), g(S, p6, t4, i5);
  }
  doneSnapping() {
    this._removeVisualization(), this._resetSnappingState();
  }
  _selectUpdateInput({ point: e7, scenePoint: t4 }) {
    switch (this._currentSnappedType) {
      case 0:
        return e7;
      case 1:
        return t4;
    }
  }
  _resetSnappingState() {
    this._currentMainCandidate = null, this._currentOtherActiveCandidates = [], this._currentSnappedType = 0, this._currentSpatialReference = null;
  }
  _removeVisualization() {
    this.removeHandles(O);
  }
  async _snapSinglePoint({ point: e7, context: t4, signal: n8 }) {
    const { view: i5 } = this, { elevationInfo: s3 } = t4, a7 = h3(e7, i5, s3), r8 = await this._fetchCandidates(a7, 3, t4, n8);
    return this._createSnapResult(a7, 0, r8, i5, e7, t4, n8);
  }
  async _snapMultiPoint({ point: e7, scenePoint: t4, context: n8, signal: i5 }) {
    const { view: s3 } = this, { coordinateHelper: a7, elevationInfo: r8, spatialReference: o4 } = n8;
    await sn(t4.spatialReference, o4);
    const p6 = H(t4, o4), d5 = h3(p6, s3, r8), c8 = await this._fetchCandidates(d5, 1, n8, i5);
    if (c8.length > 0) {
      const e8 = await this._fetchCandidates(d5, 2, n8, i5);
      return this._createSnapResult(d5, 1, [...c8, ...e8], s3, p6, n8, i5);
    }
    const u7 = h3(e7, s3, r8), g4 = await this._fetchCandidates(u7, 2, n8, i5);
    return this._createSnapResult(u7, 0, g4, s3, { z: a7.hasZ() && e7.hasZ ? e7.z ?? 0 : void 0, m: a7.hasM() && e7.hasM ? e7.m ?? 0 : void 0 }, n8, i5);
  }
  async _fetchCandidates(e7, t4, n8, i5) {
    return (await Promise.all(this._engines.map((s3) => s3.fetchCandidates(e7, t4, n8, i5)))).flat();
  }
  _createSnapResult(e7, t4, n8, i5, s3, r8, o4) {
    return { get valid() {
      return !a(o4);
    }, apply: () => {
      const { spatialReference: a7 } = r8, { snappedPoint: o5, hints: p6 } = this._processCandidates(e7, t4, n8, r8);
      return this._removeVisualization(), null != r8.visualizer && this.addHandles(r8.visualizer.draw(p6, { spatialReference: a7, elevationInfo: k, view: i5, selfSnappingZ: r8.selfSnappingZ }), O), g(o5, i5, s3, r8);
    } };
  }
  _processCandidates(e7, t4, n8, i5) {
    if (n8.length < 1) return this.doneSnapping(), { snappedPoint: e7, hints: [] };
    this._currentSnappedType !== t4 && this._resetSnappingState(), y3(e7, n8);
    const s3 = this._currentMainCandidate;
    if (null != s3) {
      const a7 = A(s3, n8);
      if (a7 >= 0) {
        if (!(n8[a7] instanceof n6)) return this._intersectWithOtherCandidates(a7, n8, e7, t4, i5);
        if (this._arePointsWithinScreenThreshold(e7, s3.targetPoint, i5)) return this._updateSnappingCandidate(s3, t4, n8, i5);
      }
    }
    return this._intersectWithOtherCandidates(0, n8, e7, t4, i5);
  }
  _intersectWithOtherCandidates(e7, t4, n8, i5, s3) {
    const { coordinateHelper: a7 } = s3, r8 = t4[e7], o4 = [];
    for (let p6 = 0; p6 < t4.length; ++p6) {
      if (p6 === e7) continue;
      const i6 = t4[p6], s4 = r8.constraint.intersect(i6.constraint);
      if (s4) for (const e8 of s4.closestPoints(r8.targetPoint)) o4.push([new n6(p2(e8), r8, i6, i6.isDraped), this._squaredScreenDistance(n8, e8, a7)]);
    }
    return o4.length > 0 && (o4.sort((e8, t5) => e8[1] - t5[1]), o4[0][1] < this._squaredPointProximityThreshold(s3.pointer)) ? this._updateSnappingCandidate(o4[0][0], i5, t4, s3) : U2(r8, s3.drawConstraints) ? this._updateSnappingCandidate(r8, i5, t4, s3) : { snappedPoint: n8, hints: [] };
  }
  _updateSnappingCandidate(e7, t4, n8, i5) {
    this.doneSnapping(), this._currentMainCandidate = e7, this._currentSnappedType = t4, this._currentSpatialReference = i5.spatialReference;
    const s3 = this._currentMainCandidate.targetPoint, a7 = [];
    a7.push(...e7.hints);
    for (const r8 of n8) {
      if (Z(e7, r8)) {
        this._currentOtherActiveCandidates.push(r8);
        continue;
      }
      const t5 = r8.constraint.closestTo(s3);
      this._squaredScreenDistance(t5, s3, i5.coordinateHelper) < I() && (r8.targetPoint = s3, this._currentOtherActiveCandidates.push(r8), a7.push(...r8.hints));
    }
    return { snappedPoint: s3, hints: a7 };
  }
  _squaredPointProximityThreshold(e7) {
    return "touch" === e7 ? this._squaredTouchProximityThreshold : this._squaredMouseProximityThreshold;
  }
  _arePointsWithinScreenThreshold(e7, t4, n8) {
    return this._squaredScreenDistance(e7, t4, n8.coordinateHelper) < this._squaredPointProximityThreshold(n8.pointer);
  }
  _squaredScreenDistance(e7, t4, n8) {
    return d3(this._toScreen(e7, n8), this._toScreen(t4, n8));
  }
  _toScreen(e7, t4) {
    return s2(e7, t4.spatialReference, k, this.view);
  }
  get test() {
  }
};
__decorate([a3({ constructOnly: true })], z.prototype, "view", void 0), __decorate([a3()], z.prototype, "options", void 0), __decorate([a3({ readOnly: true })], z.prototype, "updating", null), __decorate([a3()], z.prototype, "_loadTask", void 0), __decorate([a3()], z.prototype, "_engines", void 0), __decorate([a3()], z.prototype, "_squaredMouseProximityThreshold", null), __decorate([a3()], z.prototype, "_squaredTouchProximityThreshold", null), z = __decorate([c2("esri.views.interactive.snapping.SnappingManager")], z);
var O = "visualization-handle";
function I() {
  return p3.satisfiesConstraintScreenThreshold * p3.satisfiesConstraintScreenThreshold;
}
function U2(e7, t4) {
  return !t4 || null == t4.direction && null == t4.distance || !(e7 instanceof e4 || e7 instanceof a4 || e7 instanceof i2 || e7 instanceof h4 || e7 instanceof m4) && (!(e7 instanceof r5) || null == t4.direction && 1 === e7.selfSnappingType);
}
function A(e7, t4) {
  return e7 instanceof n6 ? H2(t4, e7.first) >= 0 && H2(t4, e7.second) >= 0 ? 0 : -1 : H2(t4, e7);
}
function H2(e7, t4) {
  let n8 = -1;
  for (let i5 = 0; i5 < e7.length; ++i5) if (t4.constraint.equals(e7[i5].constraint)) {
    n8 = i5;
    break;
  }
  return n8;
}
function k2(e7) {
  return null != e7.scenePoint;
}
function D({ coordinateHelper: e7, elevationInfo: t4 }) {
  return e7.hasZ() ? k : t4;
}
function V2(e7, t4) {
  t4 instanceof n6 && (V2(e7, t4.first), V2(e7, t4.second)), t4 instanceof o && null != t4.layer && e7.add(t4);
}
function Z(e7, t4) {
  return e7 instanceof n6 ? t4.constraint.equals(e7.first.constraint) || t4.constraint.equals(e7.second.constraint) : t4.constraint.equals(e7.constraint);
}

// node_modules/@arcgis/core/widgets/Sketch/adapters/layer/GraphicsLayerAdapter.js
var o3 = class {
  constructor(e7) {
    this.layer = e7;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  add(e7) {
    this.layer.add(e7);
  }
  addMany(e7) {
    this.layer.addMany(e7);
  }
  onGraphicsChange(e7) {
    const { layer: a7 } = this;
    return a2(() => a7.graphics, "change", (r8) => e7(r8));
  }
  has(e7) {
    return e7.layer === this.layer;
  }
  remove(e7) {
    this.layer.remove(e7);
  }
  removeMany(e7) {
    this.layer.removeMany(e7);
  }
  removeAll() {
    this.layer.removeAll();
  }
};
__decorate([a3()], o3.prototype, "elevationInfo", null);

// node_modules/@arcgis/core/widgets/Sketch/adapters/layer/MapNotesLayerAdapter.js
var a5 = class {
  constructor(e7) {
    this.layer = e7;
  }
  get elevationInfo() {
  }
  add(e7, r8) {
    const t4 = this._getSublayerForCreateTool(r8) ?? this._getSublayerForGraphic(e7);
    t4?.add(e7);
  }
  addMany(e7, r8) {
    if (r8) {
      const t4 = this._getSublayerForCreateTool(r8);
      if (t4) return void t4.addMany(e7);
    }
    e7.forEach((e8) => this._getSublayerForGraphic(e8)?.add(e8));
  }
  onGraphicsChange(e7) {
    const { layer: o4 } = this;
    if (o4.sublayers?.length) return t(o4.sublayers?.toArray().map((r8) => a2(() => r8.graphics, "change", (r9) => e7(r9))));
  }
  has(e7) {
    const { layer: r8 } = this;
    return e7.layer === r8 || e7.sourceLayer === r8 || !!r8.sublayers?.some((r9) => e7.layer === r9 || e7.sourceLayer === r9);
  }
  remove(e7) {
    this._getSublayerForGraphic(e7)?.remove(e7);
  }
  removeMany(e7) {
    e7.forEach((e8) => this._getSublayerForGraphic(e8)?.remove(e8));
  }
  removeAll() {
    this.layer.sublayers?.forEach((e7) => e7.removeAll());
  }
  _getSublayerForCreateTool(e7) {
    const { layer: r8 } = this;
    switch (e7) {
      case "point":
        return r8.pointLayer;
      case "polyline":
        return r8.polylineLayer;
      case "polygon":
        return r8.polygonLayer;
      case "multipoint":
        return r8.multipointLayer;
      case "text":
        return r8.textLayer;
    }
  }
  _getSublayerForGraphic(e7) {
    const { layer: r8 } = this;
    if (e7?.geometry) switch (e7.geometry.type) {
      case "point":
        return "text" === e7.symbol?.type ? r8.textLayer : r8.pointLayer;
      case "polyline":
        return r8.polylineLayer;
      case "polygon":
        return r8.polygonLayer;
      case "multipoint":
        return r8.multipointLayer;
    }
  }
};
__decorate([a3()], a5.prototype, "elevationInfo", null);

// node_modules/@arcgis/core/widgets/Sketch/support/sketchUtils.js
function n7(e7, t4) {
  if ("freehandPolygon" === t4 || "freehandPolyline" === t4) return "freehand";
  return e7 ?? ("rectangle" === t4 || "circle" === t4 ? "hybrid" : "click");
}
function r7(e7) {
  switch (e7) {
    case "freehandPolygon":
      return "polygon";
    case "freehandPolyline":
      return "polyline";
    case "text":
      return "point";
    default:
      return e7;
  }
}
function u6(e7) {
  if (e7.length > 1) return false;
  const t4 = e7.at(0)?.geometry;
  return "point" === t4?.type || "multipoint" === t4?.type && t4.points.length < 2;
}
function l4(e7) {
  return "string" == typeof e7 ? e7 : e7.find((e8) => e8?.legacyCreateTool)?.legacyCreateTool ?? e7.at(0)?.geometryType;
}
function p4(n8) {
  if ("point" === n8.type || "mesh" === n8.type) return false;
  if (n8 && "multipoint" === n8.type && n8.points.length > 0) return false;
  if (n8 && "polyline" === n8.type) {
    return !m2(n8).some((e7) => e7.length > 1);
  }
  if (n8 && "polygon" === n8.type) {
    if (n8.rings.some((e7) => e7.length >= 3)) return false;
    if (n8.curveRings?.some((e7) => e7.length >= 3 || 2 === e7.length && !e2(e7[1]))) return false;
  }
  return true;
}

// node_modules/@arcgis/core/widgets/Sketch/support/OperationHandle.js
var i4 = class extends l3 {
  constructor(e7) {
    super(e7), this.cancelled = false, this.history = { undo: [], redo: [] }, this.type = null;
  }
  get tool() {
    const { activeComponent: e7 } = this;
    if (!e7) return null;
    switch (e7.type) {
      case "graphic-mover":
      case "move-3d":
        return "move";
      case "box":
      case "transform-3d":
        return "transform";
      case "reshape":
      case "reshape-3d":
        return "reshape";
      case "draw-2d":
        return "text" === e7.graphicSymbol?.type ? "text" : e7.geometryType;
      case "draw-3d":
        return e7.geometryType;
      case "draw-2.0":
        return l4(e7.pluginStack.toArray().map((e8) => e8?.configuration).filter(N)) ?? null;
    }
    return null;
  }
  addToHistory(e7) {
    this.history.redo = [], this.history.undo.push(e7);
  }
  resetHistory() {
    this.history.redo = [], this.history.undo = [];
  }
  canUndo() {
    return this.history.undo.length > 0;
  }
  canRedo() {
    return this.history.redo.length > 0;
  }
  complete() {
    const { activeComponent: e7 } = this;
    e7 && "reset" in e7 ? e7.reset() : e7 && "complete" in e7 && e7.mostUpstreamPlugin && e7.complete(e7.mostUpstreamPlugin), this.onEnd(), this.emit("complete");
  }
  cancel() {
    this.cancelled = true;
    const { activeComponent: e7 } = this;
    e7 && "reset" in e7 && e7.reset(), this.onEnd(), this.emit("complete");
  }
  refreshComponent() {
    const e7 = this.activeComponent;
    e7 && ("box" !== e7.type && "reshape" !== e7.type && "graphic-mover" !== e7.type || e7.refresh());
  }
  set undo(e7) {
    this._set("undo", () => {
      this.canUndo() && e7();
    });
  }
  set redo(e7) {
    this._set("redo", () => {
      this.canRedo() && e7();
    });
  }
};
__decorate([a3()], i4.prototype, "activeComponent", void 0), __decorate([a3()], i4.prototype, "cancelled", void 0), __decorate([a3()], i4.prototype, "history", void 0), __decorate([a3()], i4.prototype, "tool", null), __decorate([a3()], i4.prototype, "type", void 0), __decorate([a3()], i4.prototype, "canUndo", null), __decorate([a3()], i4.prototype, "canRedo", null), __decorate([a3()], i4.prototype, "onEnd", void 0), __decorate([a3()], i4.prototype, "undo", null), __decorate([a3()], i4.prototype, "redo", null), __decorate([a3()], i4.prototype, "toggleTool", void 0), __decorate([a3()], i4.prototype, "addToSelection", void 0), __decorate([a3()], i4.prototype, "removeFromSelection", void 0), i4 = __decorate([c2("esri.widgets.Sketch.support.OperationHandle")], i4);
var p5 = class extends i4 {
};
__decorate([a3()], p5.prototype, "activeComponent", void 0), p5 = __decorate([c2("esri.widgets.Sketch.support.OperationHandle.CreateOperationHandle")], p5);
var a6 = class extends i4 {
};
__decorate([a3()], a6.prototype, "activeComponent", void 0), a6 = __decorate([c2("esri.widgets.Sketch.support.OperationHandle.UpdateOperationHandle")], a6);
var d4 = class extends i4 {
};
__decorate([a3()], d4.prototype, "activeComponent", void 0), d4 = __decorate([c2("esri.widgets.Sketch.support.OperationHandle.DrawToolOperationHandle")], d4);

// node_modules/@arcgis/core/widgets/Sketch/support/PluginManager.js
var g3 = class extends b {
  constructor(e7) {
    super(e7), this._pluginLoadPromise = null, this._pluginConstructors = null;
  }
  get _simplePointPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-leaf-point");
    return { uniqueId: e7, localizationKey: "leaf-point-segment", kind: ["vertex"], geometryType: "point", icon: "line-straight", legacyCreateTool: "point", create: () => this._createPlugin(e7), [Symbol.toStringTag]: "Point" };
  }
  get _hybridSegmentPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-freehand");
    return __spreadProps(__spreadValues({}, this._simplePointPlugin), { create: () => {
      const i5 = this._createPlugin(e7);
      return i5.completeOnDragEnd = true, i5.snappingBehavior = "when-not-capturing", i5;
    }, [Symbol.toStringTag]: "Hybrid Segment" });
  }
  get _pointLikeFreehandSegmentPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-freehand");
    return __spreadProps(__spreadValues({}, this._simplePointPlugin), { create: () => {
      const i5 = this._createPlugin(e7);
      return i5.completeOnDragEnd = true, i5.snappingBehavior = "when-not-capturing", i5;
    }, [Symbol.toStringTag]: "Freehand Segment" });
  }
  get _effectiveConfiguredDrawingMode() {
    return this.sketchViewModel?.defaultCreateOptions?.mode ?? "click";
  }
  get _effectivePointLikePlugin() {
    switch (this._effectiveConfiguredDrawingMode) {
      case "hybrid":
        return this._hybridSegmentPlugin;
      case "freehand":
        return this._pointLikeFreehandSegmentPlugin;
      default:
        return this._simplePointPlugin;
    }
  }
  get _simplePointPluginRoot() {
    return __spreadProps(__spreadValues({}, this._simplePointPlugin), { icon: "pin", localizationKey: "root-point", create: () => {
      const e7 = this._createPlugin(this._simplePointPlugin.uniqueId);
      return e7.enableHelpMessages = true, e7;
    } });
  }
  get _textPointPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-text-point");
    return { uniqueId: e7, localizationKey: "root-text", kind: ["vertex"], geometryType: "point", icon: "add-text", legacyCreateTool: "text", create: () => this._createPlugin(e7), [Symbol.toStringTag]: "Text" };
  }
  get _multipointPlugin() {
    const e7 = __spreadProps(__spreadValues({}, this._simplePointPlugin), { localizationKey: "leaf-point", icon: "point", hidden: true }), i5 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-multipoint");
    return { uniqueId: i5, localizationKey: "root-multipoint", kind: ["part"], geometryType: "multipoint", icon: "pins", legacyCreateTool: "multipoint", excludedViews: ["3d"], create: () => this._createPlugin(i5), availableDownstreamPlugins: [e7], defaultDownstreamPlugin: e7, [Symbol.toStringTag]: "Multipoint" };
  }
  get _freehandPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-freehand");
    return { uniqueId: e7, localizationKey: "leaf-freehand", kind: ["vertex", "section", "part"], geometryType: "polyline", icon: "freehand", legacyCreateTool: "freehandPolyline", create: () => {
      const i5 = this._createPlugin(e7);
      return i5.completeOnDragEnd = true, i5.snappingBehavior = "when-not-capturing", i5;
    }, [Symbol.toStringTag]: "Freehand" };
  }
  get _bezierPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-bezier-segment");
    return { uniqueId: e7, localizationKey: "leaf-bezier", kind: ["vertex", "section"], geometryType: "point", curveTypes: ["cubic-bezier"], icon: "bezier-curve", excludedViews: ["3d"], create: () => this._createPlugin(e7), [Symbol.toStringTag]: "Bezier" };
  }
  get _endpointArcPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-circular-arc-segment-end-first");
    return { uniqueId: e7, localizationKey: "leaf-endpoint-arc", kind: ["vertex", "section"], geometryType: "point", curveTypes: ["circular-arc"], icon: "end-point-arc-segment", excludedViews: ["3d"], create: () => {
      const i5 = this._createPlugin(e7);
      return i5.arcDrawingMode = "end-first", i5;
    }, availableDownstreamPlugins: [], [Symbol.toStringTag]: "Endpoint Arc" };
  }
  get _interiorArcPlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-circular-arc-segment-interior-first");
    return { uniqueId: e7, localizationKey: "leaf-circular-arc", kind: ["vertex", "section"], geometryType: "point", curveTypes: ["circular-arc"], icon: "arc-segment", excludedViews: ["3d"], create: () => {
      const i5 = this._createPlugin(e7);
      return i5.arcDrawingMode = "interior-first", i5;
    }, availableDownstreamPlugins: [], [Symbol.toStringTag]: "Interior Arc" };
  }
  get _singlePartPolylinePlugin() {
    const e7 = this.sketch?.visibleElements.createTools, i5 = !this._isExcludedByAvailableCreateTools("freehandPolyline") && false !== e7?.freehandPolyline, l5 = !this._isExcludedByAvailableCreateTools("polyline") && false !== e7?.polyline, n8 = "freehand" === this._effectiveConfiguredDrawingMode && i5 ? this._simplePointPlugin : this._effectivePointLikePlugin, o4 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-polyline");
    return { uniqueId: o4, localizationKey: "root-polyline", kind: ["section", "part"], geometryType: "polyline", legacyCreateTool: "polyline", icon: l5 ? "line" : "freehand", create: () => this._createPlugin(o4), availableDownstreamPlugins: l5 ? [n8, i5 ? this._freehandPlugin : null, this._bezierPlugin, this._interiorArcPlugin, this._endpointArcPlugin].filter(N) : [i5 ? this._freehandPlugin : null].filter(N), defaultDownstreamPlugin: l5 ? n8 : this._freehandPlugin, [Symbol.toStringTag]: "Polyline" };
  }
  get _singlePartPolygonPlugin() {
    const e7 = this.sketch?.visibleElements.createTools, i5 = !this._isExcludedByAvailableCreateTools("freehandPolygon") && false !== e7?.freehandPolygon, l5 = !this._isExcludedByAvailableCreateTools("polygon") && false !== e7?.polygon, n8 = "freehand" === this._effectiveConfiguredDrawingMode && i5 ? this._simplePointPlugin : this._effectivePointLikePlugin, o4 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-polygon");
    return { uniqueId: o4, localizationKey: "root-polygon", kind: ["section", "part"], geometryType: "polygon", legacyCreateTool: "polygon", icon: l5 ? "polygon" : "freehand-area", create: () => this._createPlugin(o4), availableDownstreamPlugins: l5 ? [n8, i5 ? this._freehandPlugin : null, this._bezierPlugin, this._interiorArcPlugin, this._endpointArcPlugin].filter(N) : [i5 ? this._freehandPlugin : null].filter(N), defaultDownstreamPlugin: l5 ? n8 : this._freehandPlugin, [Symbol.toStringTag]: "Polygon" };
  }
  get _rectanglePlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-rectangle");
    return { uniqueId: e7, localizationKey: "root-rectangle", kind: ["part"], geometryType: "polygon", icon: "rectangle", legacyCreateTool: "rectangle", create: () => this._createPlugin(e7), [Symbol.toStringTag]: "Rectangle" };
  }
  get _circlePlugin() {
    const e7 = /* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-ellipse");
    return { uniqueId: e7, localizationKey: "root-circle", kind: ["part"], geometryType: "polygon", icon: "circle", legacyCreateTool: "circle", create: () => {
      const i5 = this._createPlugin(e7);
      return i5.shapeType = "circle", i5.defaultUniform = true, i5.defaultCentered = true, i5;
    }, [Symbol.toStringTag]: "Circle" };
  }
  set sketch(e7) {
    this._set("sketch", e7);
  }
  set sketchViewModel(e7) {
    this._overrideIfSome("sketchViewModel", e7);
  }
  get sketchViewModel() {
    return this.sketch?.viewModel;
  }
  get effectiveRootPoint() {
    const e7 = this.sketch?.visibleElements.createTools;
    return false !== e7?.point && !this._isExcludedByAvailableCreateTools("point") ? this._simplePointPluginRoot : null;
  }
  get effectiveRootText() {
    const e7 = this.sketch?.visibleElements.createTools;
    return false !== e7?.text && !this._isExcludedByAvailableCreateTools("text") ? this._textPointPlugin : null;
  }
  get effectiveRootMultipoint() {
    const e7 = this.sketch?.visibleElements.createTools;
    return false !== e7?.multipoint && !this._isExcludedByAvailableCreateTools("multipoint") && "3d" !== this.sketchViewModel?.view?.type ? this._multipointPlugin : null;
  }
  get effectiveRootPolyline() {
    const e7 = this.sketch?.visibleElements.createTools, i5 = !this._isExcludedByAvailableCreateTools("polyline") && false !== e7?.polyline, t4 = !this._isExcludedByAvailableCreateTools("freehandPolyline") && false !== e7?.freehandPolyline;
    return i5 || t4 ? this._singlePartPolylinePlugin : null;
  }
  get effectiveRootPolygon() {
    const e7 = this.sketch?.visibleElements.createTools, i5 = !this._isExcludedByAvailableCreateTools("polygon") && false !== e7?.polygon, t4 = !this._isExcludedByAvailableCreateTools("freehandPolygon") && false !== e7?.freehandPolygon;
    return i5 || t4 ? this._singlePartPolygonPlugin : null;
  }
  get effectiveRootRectangle() {
    const e7 = this.sketch?.visibleElements.createTools;
    return false !== e7?.rectangle && !this._isExcludedByAvailableCreateTools("rectangle") ? this._rectanglePlugin : null;
  }
  get effectiveRootCircle() {
    const e7 = this.sketch?.visibleElements.createTools;
    return false !== e7?.circle && !this._isExcludedByAvailableCreateTools("circle") ? this._circlePlugin : null;
  }
  get availablePlugins() {
    const e7 = [this.effectiveRootPoint, this.effectiveRootText, this.effectiveRootMultipoint, this.effectiveRootPolyline, this.effectiveRootPolygon, this.effectiveRootRectangle, this.effectiveRootCircle].filter(N), i5 = this.sketch?.availableCreateTools;
    if (!i5) return e7;
    const l5 = (e8) => {
      if (!e8.legacyCreateTool) return Number.MAX_SAFE_INTEGER;
      const t4 = i5.indexOf(e8.legacyCreateTool);
      return -1 === t4 ? Number.MAX_SAFE_INTEGER : t4;
    };
    return e7.map((e8, i6) => ({ plugin: e8, index: i6, order: l5(e8) })).sort((e8, i6) => e8.order - i6.order || e8.index - i6.index).map(({ plugin: e8 }) => e8);
  }
  get loaded() {
    return null != this._pluginConstructors;
  }
  getPluginsEquivalentToCreateTool(e7, i5) {
    switch (e7) {
      case "text":
        return [this._textPointPlugin];
      case "point":
        return [this._simplePointPluginRoot];
      case "rectangle":
        return [this._rectanglePlugin];
      case "circle":
        return [this._circlePlugin];
      case "freehandPolyline":
        return [this._singlePartPolylinePlugin, this._freehandPlugin];
      case "freehandPolygon":
        return [this._singlePartPolygonPlugin, this._freehandPlugin];
      case "polyline":
        if ("freehand" === i5) {
          const e8 = this.sketch?.viewModel?.defaultCreateOptions?.mode;
          return "freehand" !== e8 ? [this._singlePartPolylinePlugin, this._freehandPlugin] : [this._singlePartPolylinePlugin, this._effectivePointLikePlugin];
        }
        return "hybrid" === i5 ? [this._singlePartPolylinePlugin, this._hybridSegmentPlugin] : [this._singlePartPolylinePlugin, this._simplePointPlugin];
      case "polygon":
        if ("freehand" === i5) {
          const e8 = this.sketch?.viewModel?.defaultCreateOptions?.mode;
          return "freehand" !== e8 ? [this._singlePartPolygonPlugin, this._freehandPlugin] : [this._singlePartPolygonPlugin, this._effectivePointLikePlugin];
        }
        return "hybrid" === i5 ? [this._singlePartPolygonPlugin, this._hybridSegmentPlugin] : [this._singlePartPolygonPlugin, this._simplePointPlugin];
      case "multipoint":
        return [this._multipointPlugin];
      default:
        return null;
    }
  }
  getDrawingModeEquivalentToPluginStack(e7) {
    const i5 = e7.at(-1);
    if (i5 === this._freehandPlugin) return "freehand";
    return i5 === this._hybridSegmentPlugin || i5 === this._rectanglePlugin || i5 === this._circlePlugin ? "hybrid" : "click";
  }
  async makeRenderer(e7 = {}) {
    const i5 = this.sketchViewModel;
    if (!i5?.view) return null;
    const { abortOptions: t4, useTextSymbol: l5, customSymbol: n8 } = e7;
    return "2d" === i5.view.type ? await this._makeDrawToolRenderer2D({ view: i5.view, svm: i5, useTextSymbol: l5, customSymbol: n8, abortOptions: t4 }) : await this._makeDrawToolRenderer3D({ view: i5.view, svm: i5, useTextSymbol: l5, abortOptions: t4 });
  }
  async loadPlugins() {
    if (!this.loaded) return this._pluginLoadPromise || (this._pluginLoadPromise = (async () => {
      const [{ PointPlugin: e7 }, { MultipointPlugin: i5 }, { PolylinePlugin: t4 }, { PolygonPlugin: l5 }, { FreehandSegmentPlugin: n8 }, { BezierSegmentPlugin: o4 }, { CircularArcSegmentPlugin: r8 }, { ShapePlugin: s3 }] = await Promise.all([import("./PointPlugin-VI5YAZLT.js"), import("./MultipointPlugin-UWZFJKCU.js"), import("./PolylinePlugin-XQNIZKFV.js"), import("./PolygonPlugin-K5XD6CGO.js"), import("./FreehandSegmentPlugin-C6WZUAT2.js"), import("./BezierSegmentPlugin-DQRHFJLJ.js"), import("./CircularArcSegmentPlugin-3U5ULNFW.js"), import("./ShapePlugin-DMQODSHK.js")]);
      this._pluginConstructors = /* @__PURE__ */ new Map([[/* @__PURE__ */ Symbol.for("esri-builtin-plugin-leaf-point"), e7], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-text-point"), e7], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-multipoint"), i5], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-freehand"), n8], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-bezier-segment"), o4], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-circular-arc-segment-end-first"), r8], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-circular-arc-segment-interior-first"), r8], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-polyline"), t4], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-polygon"), l5], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-rectangle"), s3], [/* @__PURE__ */ Symbol.for("esri-builtin-plugin-simple-ellipse"), s3]]);
    })().catch((e7) => {
      throw this._pluginLoadPromise = null, e7;
    })), this._pluginLoadPromise;
  }
  _isExcludedByAvailableCreateTools(e7) {
    return !!this.sketch && !this.sketch.availableCreateTools?.includes(e7);
  }
  _createPlugin(e7) {
    const i5 = this._pluginConstructors?.get(e7);
    if (!i5) throw new r2("Sketch:PluginManager", "Plugin implementations are not loaded. Call loadPlugins() before creating plugins.");
    return new i5();
  }
  async _makeDrawToolRenderer2D(e7) {
    const { DrawToolRenderer2D: i5 } = await import("./DrawToolRenderer2D-UIW72RUT.js"), { view: t4, svm: l5, useTextSymbol: n8, abortOptions: o4 } = e7;
    s(o4);
    const s3 = n8 ? l5.textSymbol ?? l5.pointSymbol : l5.pointSymbol, a7 = new i5({ symbolOverrides: { polyline: { outputGeometry: { default: e7.customSymbol ?? l5.polylineSymbol }, outline: { active: l5.activeLineSymbol ?? void 0 } }, polygon: { outputGeometry: { default: e7.customSymbol ?? l5.activeFillSymbol ?? l5.polygonSymbol } }, point: { outputGeometry: { default: e7.customSymbol ?? s3 }, vertex: { default: l5.vertexSymbol, active: l5.activeVertexSymbol ?? void 0 } } }, view: t4 }), u7 = this._setupSymbolWatcher(a7, l5, !!n8, !!e7.customSymbol);
    return a7.addHandles(u7), a7;
  }
  async _makeDrawToolRenderer3D(e7) {
    const { view: i5, svm: t4, useTextSymbol: l5, abortOptions: n8 } = e7;
    return n.getLogger(this).warnOnce("Using DrawToolRenderer2D in 3D view. A 3D-specific implementation of DrawToolRenderer is not yet available."), this._makeDrawToolRenderer2D({ view: i5, svm: t4, useTextSymbol: l5, abortOptions: n8 });
  }
  _setupSymbolWatcher(e7, i5, t4, l5) {
    const o4 = (i6, t5, l6) => (n8, o5) => {
      n8 !== o5 && e7.overrideSymbol({ symbol: n8, geometryType: i6, role: t5, state: l6 });
    }, r8 = [l(() => i5.activeLineSymbol, o4("polyline", "outline", "active")), l(() => i5.vertexSymbol, o4("point", "vertex")), l(() => i5.activeVertexSymbol, o4("point", "vertex", "active"))];
    return l5 || r8.push(l(() => i5.polylineSymbol, o4("polyline", "outputGeometry")), l(() => i5.activeFillSymbol ?? i5.polygonSymbol, o4("polygon", "outputGeometry")), l(() => t4 ? i5.textSymbol ?? i5.pointSymbol : i5.pointSymbol, o4("point", "outputGeometry"))), t(r8);
  }
};
__decorate([m()], g3.prototype, "_simplePointPlugin", null), __decorate([m()], g3.prototype, "_hybridSegmentPlugin", null), __decorate([m()], g3.prototype, "_pointLikeFreehandSegmentPlugin", null), __decorate([m()], g3.prototype, "_effectiveConfiguredDrawingMode", null), __decorate([m()], g3.prototype, "_effectivePointLikePlugin", null), __decorate([m()], g3.prototype, "_simplePointPluginRoot", null), __decorate([m()], g3.prototype, "_textPointPlugin", null), __decorate([m()], g3.prototype, "_multipointPlugin", null), __decorate([m()], g3.prototype, "_freehandPlugin", null), __decorate([m()], g3.prototype, "_bezierPlugin", null), __decorate([m()], g3.prototype, "_endpointArcPlugin", null), __decorate([m()], g3.prototype, "_interiorArcPlugin", null), __decorate([m()], g3.prototype, "_singlePartPolylinePlugin", null), __decorate([m()], g3.prototype, "_singlePartPolygonPlugin", null), __decorate([m()], g3.prototype, "_rectanglePlugin", null), __decorate([m()], g3.prototype, "_circlePlugin", null), __decorate([m()], g3.prototype, "sketch", null), __decorate([m()], g3.prototype, "sketchViewModel", null), __decorate([m()], g3.prototype, "effectiveRootPoint", null), __decorate([m()], g3.prototype, "effectiveRootText", null), __decorate([m()], g3.prototype, "effectiveRootMultipoint", null), __decorate([m()], g3.prototype, "effectiveRootPolyline", null), __decorate([m()], g3.prototype, "effectiveRootPolygon", null), __decorate([m()], g3.prototype, "effectiveRootRectangle", null), __decorate([m()], g3.prototype, "effectiveRootCircle", null), __decorate([m()], g3.prototype, "availablePlugins", null), __decorate([m()], g3.prototype, "loaded", null), g3 = __decorate([l2("esri.widgets.Sketch.support.PluginManager")], g3);

// node_modules/@arcgis/core/widgets/Sketch/SketchViewModel.js
var ge = { defaultZ: 0 };
var ye = { reshapeOptions: { edgeOperation: "split", shapeOperation: "move", vertexOperation: "move", enableCreateCurveFromStraightEdge: true }, enableMoveAllGraphics: true, enableRotation: true, enableScaling: true, multipleSelectionEnabled: true, preserveAspectRatio: false, toggleToolOnClick: true, enableZ: true, highlightOptions: { enabled: true, name: c4 }, tool: "transform" };
var ve = /* @__PURE__ */ Symbol();
var fe = /* @__PURE__ */ Symbol();
var _e = class extends l3 {
  constructor(e7) {
    super(e7), this._defaultSnappingManager = null, this._internalGraphicsLayer = new h2({ listMode: "hide", internal: true, title: "SVM Internal" }), this._pluginManager = new g3({ sketchViewModel: this }), this._operationHandle = null, this._updatingHandles = new h(), this._viewHandlesKey = "viewHandles", this.activeFillSymbol = null, this.activeLineSymbol = null, this.activeVertexSymbol = null, this.allowDeleteKey = true, this.layer = null, this.pointSymbol = new u3({ style: "circle", size: 6, color: [255, 255, 255], outline: { color: [50, 50, 50], width: 1 } }), this.polygonSymbol = new m3({ color: [150, 150, 150, 0.2], outline: { color: [50, 50, 50], width: 2 } }), this.polylineSymbol = new d({ color: [130, 130, 130, 1], width: 2 }), this.meshSymbol = new n2({ symbolLayers: new q([new d2()]) }), this.updateGraphics = new q(), this.updateOnGraphicClick = true, this.creationMode = "single", this.vertexSymbol = new u3({ style: "circle", size: 6, color: [255, 255, 255], outline: { color: [50, 50, 50], width: 1 } }), this.sketchOptions = new c6(), this.useLegacyCreateTools = true, this._moduleLoaderAbortController = null, this._viewReadyAbortController = null, this._sketchContinuationFlag = false, this._onLayerAdapterChange = async () => {
      const { _layerAdapter: e8 } = this;
      if (this.removeHandles(fe), !e8) return;
      const t4 = [e8.onGraphicsChange((e9) => this._onLayerGraphicsChangeCallback(e9)), l(() => e8.elevationInfo, (e9) => {
        e9 !== this._internalGraphicsLayer.elevationInfo && (this.cancel(), this._internalGraphicsLayer && (this._internalGraphicsLayer.elevationInfo = e9));
      }, w)].filter(N);
      this.addHandles(t4, fe);
    }, this._originalPopupEnabled = null, this.defaultCreateOptions = ge, this.defaultUpdateOptions = ye, this.snappingOptions = e7?.snappingManager?.options ?? e7?.snappingOptions ?? new u5(), this.textSymbol = new u4({ text: "text" });
  }
  initialize() {
    this._updatingHandles.addPromise(this._setupAdvancedDrawToolIntegrationMaybe()), this.addHandles([a2(() => this.view?.map?.layers, "change", (e7) => {
      this.layer && e7.removed.includes(this.layer) && this.cancel();
    }), l(() => this._layerAdapter, () => this._onLayerAdapterChange(), w), l(() => this.view, (e7) => {
      this._defaultSnappingManager = u(this._defaultSnappingManager), e7 && (this.snappingManager || (this._defaultSnappingManager = new z({ view: e7, options: this.snappingOptions })), "2d" === e7.type ? (import("./editingTools-ZTI3GPDS.js"), this._updatingHandles.addPromise(this._setupAdvancedDrawToolIntegrationMaybe())) : "3d" === e7.type && (import("./editingTools-MAVHAYGS.js"), import("./GraphicsLayerView3D-UENY7FO3.js")));
    }, w), l(() => this.view?.spatialReference, (e7, t4) => {
      e7 && t4 && !e7.equals(t4) && this.cancel();
    })]), x2(this);
  }
  destroy() {
    this.cancel(), this._removeDefaultLayer(), this._defaultSnappingManager = u(this._defaultSnappingManager), this._set("snappingManager", null), this._set("view", null), this._updatingHandles.destroy(), this._pluginManager?.destroy(), this.emit("destroy");
  }
  get _layerAdapter() {
    const { layer: e7 } = this;
    switch (e7?.type) {
      case "graphics":
        return new o3(e7);
      case "map-notes":
        return new a5(e7);
      default:
        return null;
    }
  }
  get activeTool() {
    return this._operationHandle?.tool ?? null;
  }
  get activeCreateToolDrawMode() {
    const e7 = this._operationHandle;
    if ("create" === e7?.type && e7.activeComponent && "mode" in e7.activeComponent) return e7.activeComponent.mode;
    if ("draw-2.0" === e7?.activeComponent?.type) {
      const t4 = e7.activeComponent.pluginStack.map((e8) => e8.configuration).filter(N).toArray();
      if (t4.length > 0) return this._pluginManager?.getDrawingModeEquivalentToPluginStack(t4);
    }
    return null;
  }
  get activeTooltip() {
    const { activeComponent: e7, destroyed: t4 } = this, o4 = !t4 && e7 && "tooltip" in e7 ? e7.tooltip : null;
    return o4?.visible ? o4 : null;
  }
  get activeComponent() {
    return this._operationHandle?.activeComponent ?? null;
  }
  get createGraphic() {
    return null == this.activeComponent || "draw-3d" !== this.activeComponent.type && "draw-2d" !== this.activeComponent.type ? this._get("createGraphic") : this.activeComponent.graphic;
  }
  get defaultCreateOptions() {
    return this._get("defaultCreateOptions");
  }
  set defaultCreateOptions(e7) {
    this._set("defaultCreateOptions", __spreadValues(__spreadValues({}, ge), e7));
  }
  get defaultUpdateOptions() {
    return this._get("defaultUpdateOptions");
  }
  set defaultUpdateOptions(e7) {
    this._set("defaultUpdateOptions", __spreadProps(__spreadValues(__spreadValues({}, ye), e7), { reshapeOptions: __spreadValues(__spreadValues({}, ye.reshapeOptions), e7?.reshapeOptions), highlightOptions: __spreadValues(__spreadValues({}, ye.highlightOptions), e7?.highlightOptions) }));
  }
  get labelOptions() {
    return this.sketchOptions.labels;
  }
  set labelOptions(e7) {
    this.sketchOptions.labels = e7;
  }
  get textSymbol() {
    return this._get("textSymbol");
  }
  set textSymbol(e7) {
    this._set("textSymbol", e7);
  }
  get snappingOptions() {
    return this.snappingManager?.options ?? this._get("snappingOptions");
  }
  set snappingOptions(e7) {
    null != this._defaultSnappingManager && (this._defaultSnappingManager.options = e7), this._set("snappingOptions", e7);
  }
  get snappingManager() {
    return this._isOverridden("snappingManager") && this._get("snappingManager"), this._defaultSnappingManager;
  }
  set snappingManager(e7) {
    if (e7) this._isOverridden("snappingManager") || (this._defaultSnappingManager = u(this._defaultSnappingManager)), this._override("snappingManager", e7);
    else {
      const { view: e8 } = this;
      !this._defaultSnappingManager && e8 && (this._defaultSnappingManager = new z({ options: this.snappingOptions, view: e8 })), this._clearOverride("snappingManager");
    }
  }
  get state() {
    const e7 = !(!this.view?.ready || !this.layer), t4 = this._operationHandle;
    return e7 && t4 ? "active" : e7 ? "ready" : "disabled";
  }
  get tooltipOptions() {
    return this.sketchOptions.tooltips;
  }
  set tooltipOptions(e7) {
    this.sketchOptions.tooltips = e7;
  }
  get updating() {
    return !!(this._updatingHandles.updating || this.snappingManager?.updating || this.drawTool?.updating);
  }
  get valueOptions() {
    return this.sketchOptions.values;
  }
  set valueOptions(e7) {
    this.sketchOptions.values = e7;
  }
  get view() {
    return this._get("view");
  }
  set view(e7) {
    const t4 = this._get("view");
    if (t4) {
      const { container: e8, map: o5 } = t4;
      e8 && this._clearCursor(), o5?.remove(this._internalGraphicsLayer), this.removeHandles(this._viewHandlesKey), this.cancel();
    }
    const o4 = "view-ready";
    this.removeHandles(o4), e7 && this.addHandles(f(() => e7.ready, (t5) => {
      this.removeHandles(this._viewHandlesKey), t5 && this.addHandles(this._generateViewHandles(e7), this._viewHandlesKey);
    }, w), o4), this._set("view", e7), this._updatingHandles.addPromise(this._setupAdvancedDrawToolIntegrationMaybe());
  }
  get isUsingLegacyCreateTools() {
    return this.useLegacyCreateTools || "2d" !== this.view?.type;
  }
  get pluginManager() {
    return this._pluginManager;
  }
  get drawTool() {
    return "draw-2.0" !== this.activeComponent?.type ? null : this.activeComponent;
  }
  get rootPlugins() {
    return this._pluginManager?.availablePlugins;
  }
  set rootPlugins(e7) {
    this._overrideIfSome("rootPlugins", e7);
  }
  get effectiveAvailablePlugins() {
    if (this.isUsingLegacyCreateTools) return null;
    const e7 = this.view?.type ?? "2d", { firstPluginWithSwappableLeaf: t4 } = this;
    return t4 ? t4.availableDownstreamPlugins.filter((t5) => !t5.excludedViews?.includes(e7)) : this.rootPlugins?.filter((t5) => !t5.excludedViews?.includes(e7)).filter(N) ?? [];
  }
  get firstPluginWithSwappableLeaf() {
    const e7 = this.view?.type ?? "2d", t4 = this.drawTool?.pluginStack.toArray().map((e8) => e8.configuration).findLast((t5) => null != t5 && !t5.hidden && t5.availableDownstreamPlugins && t5.availableDownstreamPlugins.filter((t6) => !t6.excludedViews?.includes(e7))?.length > 1);
    return t4;
  }
  get multiplePluginsActive() {
    return !!this.drawTool && this.drawTool.pluginStack.length > 1;
  }
  addGraphic(e7) {
    this._layerAdapter?.add(e7);
  }
  addGraphics(e7) {
    this._layerAdapter?.addMany(e7);
  }
  hasGraphic(e7) {
    return !!this._layerAdapter?.has(e7);
  }
  removeGraphic(e7) {
    this._layerAdapter?.remove(e7);
  }
  removeGraphics(e7) {
    this._layerAdapter?.removeMany(e7);
  }
  removeAllGraphics() {
    this._layerAdapter?.removeAll();
  }
  cancel() {
    this._moduleLoaderAbortController = e(this._moduleLoaderAbortController), this._viewReadyAbortController = e(this._viewReadyAbortController), this._sketchContinuationFlag = true, this._operationHandle?.cancel();
  }
  complete() {
    this._operationHandle?.complete();
  }
  delete() {
    const { state: e7, updateGraphics: t4 } = this;
    if ("active" === e7 && t4.length) {
      const { activeTool: e8 } = this, o4 = t4.toArray();
      this.removeGraphics(o4), this.cancel(), this._emitDeleteEvent({ graphics: o4, tool: e8 });
    }
  }
  duplicate() {
    if ("active" === this.state && this.updateGraphics.length) {
      const e7 = this.updateGraphics.map((e8) => e8.clone()).toArray();
      return this.addGraphics(e7), this.emit("duplicate", { graphics: e7, type: "duplicate" }), e7;
    }
    return [];
  }
  async create(e7, t4) {
    this.cancel(), await this._waitViewReady();
    const { view: o4, layer: i5 } = this;
    if (!o4 || "disabled" === this.state) throw i5 || this._logMissingLayer(), u2();
    if (null != o4.activeTool && (o4.activeTool = null), !e7) return void this._logError("sketch:missing-parameter", "Missing parameter 'tool'.");
    t2(o4, this._internalGraphicsLayer);
    const a7 = await this._updatingHandles.addPromise(this._setupCreateOperation(e7, t4));
    if (null == a7 || this.destroyed) return void o4.map?.remove(this._internalGraphicsLayer);
    const r8 = l4(e7), s3 = () => {
      if (a7 === this._operationHandle) {
        const o5 = this.createGraphic, i6 = this._operationHandle.cancelled;
        if (this._operationHandle.destroy(), this._operationHandle = null, this._set("createGraphic", null), this.view?.map?.remove(this._internalGraphicsLayer), a7.cancelled || null == o5 || this.addGraphic(o5), this._sketchContinuationFlag = false, this.emit("create", { graphic: o5, state: i6 ? "cancel" : "complete", tool: r8 ?? "point", toolEventInfo: null, type: "create" }), i6 || this._sketchContinuationFlag) return;
        const { creationMode: s4 } = this;
        if ("continuous" === s4) {
          if (t4?.geometryToPlace) return;
          this._updatingHandles.addPromise(y(this.create(e7, t4)));
        } else "update" === s4 && o5 && this._updatingHandles.addPromise(y(this.update([o5])));
      }
    };
    a7.on("complete", s3), this._operationHandle = a7, o4.ready && o4.focus();
  }
  async place(e7, t4) {
    return await e7.load(), this.create("mesh", __spreadValues({ mode: "click", hasZ: e7.hasZ, geometryToPlace: e7 }, t4));
  }
  async update(e7, t4) {
    this.cancel(), await this._waitViewReady();
    const { layer: o4, view: i5, state: a7 } = this;
    if (!i5 || "disabled" === a7) throw o4 || this._logMissingLayer(), u2();
    null != i5.activeTool && (i5.activeTool = null);
    const r8 = Array.isArray(e7) ? e7 : [e7];
    if (null == e7 || !r8?.length) return void this._logError("sketch:missing-parameter", "Missing parameter 'graphics'.");
    if (r8.some((e8) => this.hasGraphic(e8) ? null == e8.geometry && (this._logError("sketch:invalid-parameter", "Parameter 'graphics' contains one or more graphics with an unsupported geometry."), true) : (this._logError("sketch:invalid-parameter", "Parameter 'graphics' contains one or more graphics missing from the supplied GraphicsLayer."), true))) return;
    const s3 = await this._updatingHandles.addPromise(this._setupUpdateOperation(r8, t4));
    this.destroyed || null == s3 || Ce(s3) || (t2(i5, this._internalGraphicsLayer), this._setUpdateOperationHandle(s3, t4), this.emit("update", { graphics: r8, state: "start", aborted: false, tool: s3.tool, toolEventInfo: null, type: "update" }));
  }
  async _updateSpatialReference(e7) {
    const t4 = this.view;
    if (t4) {
      e7 = Array.isArray(e7) ? e7 : [e7];
      for (const o4 of e7) null == o4.geometry || "mesh" === o4.geometry.type || T(o4.geometry.spatialReference, t4.spatialReference) || (tn(o4.geometry.spatialReference, t4.spatialReference) || V() || await F(), o4.geometry = H(o4.geometry, t4.spatialReference));
    } else this._logMissingView();
  }
  undo() {
    this.canUndo() && this._operationHandle?.undo();
  }
  redo() {
    this.canRedo() && this._operationHandle?.redo();
  }
  canUndo() {
    return !!this._operationHandle?.canUndo();
  }
  canRedo() {
    return !!this._operationHandle?.canRedo();
  }
  toggleUpdateTool() {
    this._operationHandle?.toggleTool();
  }
  async _getFirstHit(e7) {
    const t4 = this.view;
    if (!t4) return this._logMissingView(), null;
    if ("2d" === t4.type) {
      const o5 = [];
      t4.map.allLayers.forEach((e8) => {
        "vector-tile" !== e8.type && "imagery" !== e8.type || o5.push(e8);
      });
      const i6 = await t4.hitTest(e7, { exclude: o5 });
      return r4(i6.results);
    }
    const o4 = [t4.map.ground];
    t4.map.allLayers.forEach((e8) => {
      w3(e8) && o4.push(e8);
    });
    const i5 = await t4.hitTest(e7, { exclude: o4 });
    if (i5.results.length > 0) {
      const e8 = i5.results[0];
      if (null != e8 && "graphic" === e8.type && e8.graphic && (!i5.ground.mapPoint || t4.map.ground.opacity < 1 || i5.ground.distance - (e8.distance ?? 0) > -Math.min(3 * i5.ground.distance, "global" === t4.viewingMode ? E(t4.renderCoordsHelper.spatialReference).radius / t4.renderCoordsHelper.unitInMeters : Number.POSITIVE_INFINITY))) return e8;
    }
    return null;
  }
  _generateViewHandles(e7) {
    return [e7.on("immediate-click", async (e8) => {
      const t4 = "active" === this.state && "create" === this._operationHandle?.type;
      "disabled" !== this.state && !t4 && this.updateOnGraphicClick && await this._updatingHandles.addPromise(this._handleImmediateClick(e8));
    }, f2.WIDGET)];
  }
  async _handleImmediateClick(e7) {
    const t4 = await e7.defer(() => this._getFirstHit(n3(e7)));
    let o4 = null;
    if (null != t4) {
      const i5 = t4.graphic;
      this.updateGraphics.includes(i5) || this.hasGraphic(i5) ? (e7.stopPropagation(), o4 = i5) : "2d" !== this.view?.type || this._isComponentGraphic(i5) || "active" !== this.state || this.cancel();
    } else "active" === this.state && this.cancel();
    null == o4 || this.updateGraphics.includes(o4) || await this.update([o4], __spreadProps(__spreadValues({}, this.defaultUpdateOptions), { reshapeOptions: __spreadValues({}, this.defaultUpdateOptions.reshapeOptions) }));
  }
  async _setupCreateOperation(e7, t4) {
    const o4 = this.view;
    if (!o4) return this._logMissingView(), null;
    const i5 = __spreadValues(__spreadValues({ hasZ: "3d" === o4.type }, this.defaultCreateOptions), t4), a7 = "string" == typeof e7 ? this.pluginManager?.getPluginsEquivalentToCreateTool(e7, i5.mode) : e7, r8 = l4(e7);
    if (a7 && !this.isUsingLegacyCreateTools) {
      const e8 = await this._setupDrawTool(a7, i5, r8 ?? "polyline");
      if (e8) return this._setupDrawToolOperationHandle(e8, r8 ?? "point");
    }
    if (!r8) return null;
    const s3 = await this._setupDrawGraphicTool(r8, o4, i5);
    return null == s3 ? null : (o4.tools.add(s3), o4.activeTool = s3, this._setupCreateOperationHandle(s3, r8));
  }
  async _setupDrawGraphicTool(e7, t4, o4) {
    if ("multipoint" === e7 && "3d" === t4.type) return this._logError("sketch:create", "Multipoint geometries are not supported in SceneView."), null;
    if (!t4) return this._logMissingView(), null;
    const { cursor: i5, defaultZ: a7, hasZ: r8, geometryToPlace: s3, graphicProperties: n8, mode: p6, preserveAspectRatio: l5 } = o4, h5 = n7(p6, e7), c8 = r7(e7), d5 = o4?.optionsPerTool?.has(e7) ? o4.optionsPerTool.get(e7) : {}, u7 = d5?.preserveAspectRatio ?? l5 ?? "rectangle" !== e7, m5 = __spreadValues({ centered: "rectangle" !== e7 && !("circle" === e7 && !u7), cursor: i5, defaultZ: a7, forceUniformSize: u7, graphicProperties: __spreadProps(__spreadValues({}, n8), { attributes: __spreadValues({}, n8?.attributes) }), geometryToPlace: s3, geometryType: c8, mode: h5, graphicSymbol: o4.graphicSymbol ?? this._getGraphicSymbolFromTool(e7), hasZ: r8, snappingManager: this.snappingManager, snapToScene: false, view: t4 }, d5);
    return "2d" === t4.type ? this._makeDrawGraphicTool2D(m5) : this._makeDrawGraphicTool3D(m5);
  }
  async _makeDrawGraphicTool2D(e7) {
    const [t4, o4, i5] = await Promise.all([this._requireModule(import("./editingTools-ZTI3GPDS.js")), i3(), c7()]);
    return Ce(t4) || this.destroyed ? null : new t4.module.DrawGraphicTool2D(__spreadProps(__spreadValues({}, e7), { activeVertexSymbol: this.activeVertexSymbol, regularVerticesSymbol: this.vertexSymbol, activeLineSymbol: this.activeLineSymbol, activeFillSymbol: Ge(e7.geometryType) ? this.activeFillSymbol : null, sketchOptions: this.sketchOptions, automaticAreaMeasurementUtils: o4, automaticLengthMeasurementUtils: i5 }));
  }
  async _makeDrawGraphicTool3D(e7) {
    const [t4, o4, i5] = await Promise.all([this._requireModule(import("./editingTools-MAVHAYGS.js")), i3(), c7()]);
    return Ce(t4) || this.destroyed ? null : new t4.module.DrawGraphicTool3D(__spreadProps(__spreadValues({}, e7), { elevationInfo: this._layerAdapter?.elevationInfo, snapToScene: true, sketchOptions: this.sketchOptions, automaticAreaMeasurementUtils: o4, automaticLengthMeasurementUtils: i5 }));
  }
  _setupCreateOperationHandle(e7, t4) {
    const o4 = this.view;
    if (!o4) return this._logMissingView(), null;
    let i5 = null;
    const a7 = e7.forceUniformSize, r8 = e7.centered, n8 = [o4.on("key-down", (t5) => {
      if (t5.key === c3.pan) t5.stopPropagation(), t5.repeat || (e7.enabled = false);
      else if (t5.key === c3.complete) t5.stopPropagation(), e7.completeCreateOperation();
      else if (t5.key !== c3.vertexAdd || t5.repeat) t5.key === c3.undo ? (t5.stopPropagation(), p6.undo()) : t5.key === c3.redo ? (t5.stopPropagation(), p6.redo()) : t5.key !== c3.constraint || "rectangle" !== e7.geometryType && "circle" !== e7.geometryType || t5.repeat ? t5.key === c3.center && (t5.repeat || (e7.centered = !r8, t5.stopPropagation())) : (e7.forceUniformSize = !a7, t5.stopPropagation());
      else {
        const o5 = e7.drawOperation.geometryType;
        "polyline" !== o5 && "polygon" !== o5 && "multipoint" !== o5 || (t5.stopPropagation(), e7.drawOperation.commitStagedVertex());
      }
    }, f2.WIDGET), o4.on("key-up", (t5) => {
      t5.key === c3.pan ? e7.enabled = true : t5.key !== c3.constraint || "rectangle" !== e7.geometryType && "circle" !== e7.geometryType ? t5.key === c3.center && (e7.centered = r8, t5.stopPropagation()) : (e7.forceUniformSize = a7, t5.stopPropagation());
    }, f2.WIDGET), e7.on("vertex-add", (t5) => {
      switch (i5 = null == i5 ? "start" : "active", t5.operation) {
        case "apply":
          this.emit("create", { graphic: e7.graphic, state: i5, tool: this.activeTool, toolEventInfo: t5, type: "create" });
          break;
        case "undo":
          this._emitUndoEvent({ graphics: [e7.graphic], tool: e7.geometryType });
          break;
        case "redo":
          this._emitRedoEvent({ graphics: [e7.graphic], tool: e7.geometryType });
      }
    }), e7.on("cursor-update", (t5) => {
      e7.drawOperation.numCommittedVertices > 0 && this.emit("create", { graphic: e7.graphic, state: "active", tool: this.activeTool, toolEventInfo: { coordinates: t5.vertices[0].coordinates, type: "cursor-update" }, type: "create" });
    }), e7.on("vertex-remove", (t5) => {
      switch (t5.operation) {
        case "apply":
          this.emit("create", { graphic: e7.graphic, state: "active", tool: this.activeTool, toolEventInfo: t5, type: "create" });
          break;
        case "undo":
          this._emitUndoEvent({ graphics: [e7.graphic], tool: e7.geometryType });
          break;
        case "redo":
          this._emitRedoEvent({ graphics: [e7.graphic], tool: e7.geometryType });
      }
    }), e7.on("complete", (e8) => {
      this._set("createGraphic", e8.graphic), i5 = "complete", e8.aborted ? p6 && p6.cancel() : p6 && p6.complete();
    }), l(() => this._getGraphicSymbolFromTool(t4), (t5) => {
      e7.graphicSymbol = t5;
    })], p6 = new p5({ activeComponent: e7, type: "create", onEnd: () => {
      r(n8), o4.tools?.remove(e7);
    }, undo: () => {
      e7.canUndo && e7.undo();
    }, redo: () => {
      e7.canRedo && e7.redo();
    }, canUndo: () => e7.canUndo, canRedo: () => e7.canRedo });
    return p6;
  }
  _setupDrawToolOperationHandle(e7, t4) {
    const i5 = this.view;
    if (!i5) return this._logMissingView(), null;
    let a7 = null;
    const r8 = [i5.on("key-down", (t5) => {
      t5.key === c3.pan && (t5.stopPropagation(), t5.repeat || (e7.editable = false));
    }, f2.WIDGET), i5.on("key-up", (t5) => {
      t5.key === c3.pan && (e7.editable = true);
    }, f2.WIDGET), e7.on("before-vertex-add", (t5) => {
      const o4 = e7.mostUpstreamPlugin?.configuration;
      if (o4 && "legacyCreateTool" in o4 && ("point" === o4?.legacyCreateTool || "text" === o4.legacyCreateTool)) {
        const e8 = t5.detail.originalEvent;
        return void (e8 && "key" in e8 && e8.key === c3.vertexAdd && t5.preventDefault());
      }
    }), e7.on("before-complete", (t5) => {
      const o4 = e7.getGeometryIfCompleted();
      (!o4 || p4(o4)) && t5.preventDefault();
    }), e7.on(["vertex-add", "vertex-remove"], (i6) => {
      switch (this.createGraphic && (this.createGraphic.geometry = e7.getGeometryIfCompleted()), a7 = null == a7 && "vertex-remove" !== i6.type ? "start" : "active", i6.operation) {
        case "apply":
          this.emit("create", { graphic: this.createGraphic, state: a7, tool: this.activeTool, toolEventInfo: i6, type: "create" });
          break;
        case "undo":
          this._emitUndoEvent({ graphics: [this.createGraphic].filter(N), tool: t4 });
          break;
        case "redo":
          this._emitRedoEvent({ graphics: [this.createGraphic].filter(N), tool: t4 });
      }
    }), e7.on("cursor-update", (t5) => {
      this.createGraphic && (this.createGraphic.geometry = e7.unprocessedGeometry), (t5.vertices[0]?.vertexIndex > 0 || t5.vertices[0]?.componentIndex > 0) && this.emit("create", { graphic: this.createGraphic, state: "active", tool: this.activeTool, toolEventInfo: { coordinates: t5.vertices[0].coordinates, type: "cursor-update" }, type: "create" });
    }), e7.on("complete", ({ geometry: e8 }) => {
      const t5 = this.createGraphic;
      t5 && e8 && (t5.geometry = e8), n8.complete();
    })], n8 = new d4({ activeComponent: e7, type: "create", onEnd: () => {
      r(r8), i5.tools.remove(e7);
    }, undo: () => e7.undo(), redo: () => e7.redo(), canUndo: () => e7.canUndo, canRedo: () => e7.canRedo });
    return r8.push(e7.on("cancel", () => n8.cancel())), n8;
  }
  _getGraphicSymbolFromTool(e7) {
    switch (e7) {
      case "point":
      case "multipoint":
        return this.pointSymbol;
      case "polyline":
      case "freehandPolyline":
        return this.polylineSymbol;
      case "circle":
      case "rectangle":
      case "polygon":
      case "freehandPolygon":
        return this.polygonSymbol;
      case "mesh":
        return this.meshSymbol;
      case "text":
        return this.textSymbol;
    }
  }
  async _setupUpdateOperation(e7, t4) {
    const { view: o4 } = this;
    if (!o4) return this._logMissingView(), null;
    const i5 = __spreadProps(__spreadValues(__spreadValues({}, this.defaultUpdateOptions), t4), { reshapeOptions: __spreadValues(__spreadValues({}, this.defaultUpdateOptions.reshapeOptions), t4?.reshapeOptions), highlightOptions: __spreadValues(__spreadValues({}, this.defaultUpdateOptions.highlightOptions), t4?.highlightOptions) });
    let a7 = i5.tool ?? ye.tool;
    if (this.removeGraphics(e7), this.addGraphics(e7), "3d" === o4.type) {
      if (0 === e7.length) return null;
      switch (a7) {
        case "move":
          return this._setupMove3DOperation(e7, i5, o4, a7);
        case "reshape":
          return e7.length > 1 ? (this._logError("sketch:reshape-multiple", "Reshape operation does not support multiple graphics."), null) : this._setupReshape3DOperation(e7[0], i5, o4);
        case "transform":
          return this._setupGraphicTransform3DOperation(e7, i5, o4);
      }
    }
    switch (a7) {
      case "move":
        return this._setupMove2DOperation(e7, i5, o4);
      case "reshape":
        return e7.length > 1 ? (this._logError("sketch:reshape-multiple", "Reshape operation does not support multiple graphics."), null) : this._setupTransformOrReshape2DOperation(e7, a7, i5, o4);
      case "transform":
        return u6(e7) && (a7 = "reshape"), this._setupTransformOrReshape2DOperation(e7, a7, i5, o4);
    }
  }
  async _setupMove3DOperation(e7, t4, o4, i5, a7 = false) {
    const [r8, n8] = await Promise.all([this._requireModule(import("./editingTools-MAVHAYGS.js")), c7()]);
    if (Ce(r8)) return r8;
    const { ManipulatedObject3DGraphic: p6, MoveTool3D: l5 } = r8.module, h5 = /* @__PURE__ */ new Map(), c8 = () => {
      h5.forEach((e8) => e8.destroy()), h5.clear();
    };
    for (const s3 of e7) {
      const e8 = new p6({ view: o4, graphic: s3 }), t5 = e3(e8);
      if (0 !== t5) return c8(), this._logError("sketch:move", `Move operation not supported for provided graphic(s) (${e5(t5)}).`), null;
      h5.set(s3, e8);
    }
    const d5 = new l5({ view: o4, enableZ: t4.enableZ, snappingManager: this.snappingManager, sketchOptions: this.sketchOptions, autoLengthMeasurementUtils: n8 });
    o4.tools.add(d5), d5.objects.addMany(Array.from(h5.values())), a7 || this.updateGraphics.addMany(e7);
    const u7 = [], m5 = new a6({ activeComponent: d5, tool: i5, type: "update", onEnd: () => {
      r(u7), Ae(o4, d5), c8();
    }, undo: () => {
      Ee(this.view, d5), Te(m5, this.updateGraphics.toArray()), this._emitUndoEvent({ graphics: this.updateGraphics.toArray(), tool: i5 });
    }, redo: () => {
      Oe(m5, this.updateGraphics.toArray()), this._emitRedoEvent({ graphics: this.updateGraphics.toArray(), tool: i5 });
    }, addToSelection: (e8) => {
      this.updateGraphics.push(e8);
      const t5 = new p6({ view: o4, graphic: e8 });
      h5.set(e8, t5), d5.objects.push(t5), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" });
    }, removeFromSelection: (e8) => {
      const t5 = this.updateGraphics.indexOf(e8);
      if (m5.history.undo.forEach((e9) => e9.updates.splice(t5, 1)), m5.history.redo.forEach((e9) => e9.updates.splice(t5, 1)), this.updateGraphics.remove(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" }), 0 === this.updateGraphics.length) return void m5.complete();
      const o5 = h5.get(e8);
      o5 && (d5.objects.remove(o5), o5.destroy(), h5.delete(e8));
    }, toggleTool: async () => {
      if (1 !== this.updateGraphics.length || false === t4.toggleToolOnClick) return;
      if ("transform" !== i5) return;
      const e8 = this.updateGraphics.at(0), a8 = await this._updatingHandles.addPromise(this._setupReshape3DOperation(e8, t4, o4, true));
      a8 && !Ce(a8) && (m5.onEnd(), m5.destroy(), this._setUpdateOperationHandle(a8, t4));
    } });
    return u7.push(...this._getHandlesForComponent(m5, t4), o4.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(m5, e8, t4), f2.WIDGET), o4.on("key-down", (e8) => {
      this._getCommonUpdateOperationKeyDownHandlers(m5, e8);
    }, f2.WIDGET)), m5;
  }
  _setupGraphicTransform3DOperation(e7, t4, o4, i5 = false) {
    if (1 === e7.length && 0 === e6(e7[0])) {
      const a7 = e7[0], r8 = a7.geometry;
      if (null != r8 && ("point" === r8.type || "mesh" === r8.type)) return this._setupPointTransform3DOperation(a7, t4, o4);
      if (null != r8 && ("polygon" === r8.type || "polyline" === r8.type)) return this._setupPolyTransform3DOperation(a7, t4, o4, i5);
    }
    return this._setupMove3DOperation(e7, t4, o4, "transform", i5);
  }
  async _setupPointTransform3DOperation(e7, t4, o4) {
    const i5 = "transform", { enableRotation: a7, enableScaling: r8, enableZ: n8 } = t4, p6 = await this._requireModule(import("./editingTools-MAVHAYGS.js"));
    if (Ce(p6)) return p6;
    const { TransformTool3D: l5, ManipulatedObject3DGraphic: h5 } = p6.module, c8 = new h5({ graphic: e7, view: o4 }), d5 = new l5({ object: c8, view: o4, enableRotation: a7, enableScaling: r8, enableZ: n8, snappingManager: this.snappingManager, sketchOptions: this.sketchOptions });
    o4.tools.add(d5), this.updateGraphics.add(e7);
    const u7 = [], m5 = new a6({ activeComponent: d5, tool: i5, type: "update", onEnd: () => {
      r(u7), Ae(o4, d5), c8.destroy();
    }, undo: () => {
      Ee(this.view, d5), Te(m5, this.updateGraphics.toArray()), this._emitUndoEvent({ graphics: this.updateGraphics.toArray(), tool: i5 });
    }, redo: () => {
      Oe(m5, this.updateGraphics.toArray()), this._emitRedoEvent({ graphics: this.updateGraphics.toArray(), tool: i5 });
    }, addToSelection: async (e8) => {
      this.updateGraphics.add(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" }), m5.onEnd(), m5.destroy();
      const i6 = await this._updatingHandles.addPromise(this._setupMove3DOperation(this.updateGraphics.toArray(), t4, o4, "transform", true));
      Ce(i6) || this._setUpdateOperationHandle(i6, t4);
    }, removeFromSelection: (e8) => {
      this.updateGraphics.remove(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" }), m5.complete();
    }, toggleTool: () => {
    } });
    return u7.push(...this._getHandlesForComponent(m5, t4), o4.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(m5, e8, t4), f2.WIDGET), o4.on("key-down", (e8) => {
      this._getCommonUpdateOperationKeyDownHandlers(m5, e8);
    }, f2.WIDGET)), m5;
  }
  async _setupPolyTransform3DOperation(e7, t4, o4, i5 = false) {
    const a7 = "transform", { enableRotation: r8, enableScaling: n8, enableZ: p6, preserveAspectRatio: l5 } = t4, [h5, c8] = await Promise.all([this._requireModule(import("./editingTools-MAVHAYGS.js")), c7()]);
    if (Ce(h5)) return h5;
    const { ManipulatedObject3DGraphic: d5, ExtentTransformTool: u7 } = h5.module, m5 = this.view?.inputManager?.isModifierKeyDown(c3.constraint), g4 = new d5({ view: o4, graphic: e7 }), y4 = new u7({ object: g4, view: o4, enableRotation: r8, enableScaling: n8, enableZ: p6, preserveAspectRatio: !!l5 != !!m5, sketchOptions: this.sketchOptions, automaticLengthMeasurementUtils: c8 });
    o4.tools.add(y4), i5 || this.updateGraphics.add(e7);
    const v = [], f3 = new a6({ activeComponent: y4, tool: a7, type: "update", onEnd: () => {
      r(v), Ae(o4, y4), g4.destroy();
    }, canUndo: () => !y4.destroyed && y4.canUndo, undo: () => {
      y4.destroyed || (y4.undo(), this._emitUndoEvent({ graphics: this.updateGraphics.toArray(), tool: a7 }));
    }, canRedo: () => !y4.destroyed && y4.canRedo, redo: () => {
      y4.destroyed || (y4.redo(), this._emitRedoEvent({ graphics: this.updateGraphics.toArray(), tool: a7 }));
    }, addToSelection: async (e8) => {
      this.updateGraphics.add(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" }), f3.onEnd(), f3.destroy();
      const i6 = await this._updatingHandles.addPromise(this._setupMove3DOperation(this.updateGraphics.toArray(), t4, o4, "transform", true));
      Ce(i6) || this._setUpdateOperationHandle(i6, t4);
    }, removeFromSelection: (e8) => {
      this.updateGraphics.remove(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" }), f3.complete();
    }, toggleTool: async () => {
      if (1 !== this.updateGraphics.length || false === t4.toggleToolOnClick) return;
      const i6 = await this._updatingHandles.addPromise(this._setupReshape3DOperation(e7, t4, o4, true));
      i6 && !Ce(i6) && (f3.onEnd(), f3.destroy(), this._setUpdateOperationHandle(i6, t4));
    } });
    return v.push(...this._getHandlesForComponent(f3, t4), o4.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(f3, e8, t4), f2.WIDGET), o4.on("key-down", (e8) => this._getCommonUpdateOperationKeyDownHandlers(f3, e8), f2.WIDGET), o4.on("key-down", (e8) => {
      e8.key !== c3.constraint || e8.repeat || (y4.preserveAspectRatio = !y4.preserveAspectRatio, e8.stopPropagation());
    }, f2.WIDGET), o4.on("key-up", (e8) => {
      e8.key === c3.constraint && (y4.preserveAspectRatio = !y4.preserveAspectRatio, e8.stopPropagation());
    }, f2.WIDGET)), f3;
  }
  async _setupMove2DOperation(e7, t4, o4) {
    const i5 = "move";
    this.updateGraphics.addMany(e7), await this._updatingHandles.addPromise(this._updateSpatialReference(e7));
    const a7 = await this._updatingHandles.addPromise(this._getGraphicMover(e7, t4, o4));
    if (Ce(a7)) return a7;
    const r8 = new a6({ activeComponent: a7, tool: i5, type: "update", onEnd: () => {
      this._clearCursor(), r(l5), r(p6), a7.destroy(), this._internalGraphicsLayer?.removeMany([...this.updateGraphics.toArray()]);
    }, undo: () => {
      const e8 = this.updateGraphics.toArray();
      Te(r8, e8), r8.refreshComponent(), this._emitUndoEvent({ graphics: e8, tool: i5 });
    }, redo: () => {
      const e8 = this.updateGraphics.toArray();
      Oe(r8, e8), r8.refreshComponent(), this._emitRedoEvent({ graphics: e8, tool: i5 });
    }, addToSelection: async (e8) => {
      await this._updatingHandles.addPromise(this._updateSpatialReference(e8)), this.updateGraphics.push(e8), a7.graphics = this.updateGraphics.toArray(), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" });
    }, removeFromSelection: (e8) => {
      const t5 = this.updateGraphics.indexOf(e8);
      r8.history.undo.forEach((e9) => e9.updates.splice(t5, 1)), r8.history.redo.forEach((e9) => e9.updates.splice(t5, 1)), this.updateGraphics.remove(e8);
      const o5 = this.updateGraphics.toArray();
      this.emit("update", { graphics: o5, state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" }), 0 !== this.updateGraphics.length ? a7.graphics = o5 : r8.complete();
    } });
    let n8 = false;
    const p6 = [o4.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(r8, e8, t4), f2.WIDGET), o4.on("key-down", (e8) => {
      this._getCommonUpdateOperationKeyDownHandlers(r8, e8), e8.key !== c3.constraint || e8.repeat || (n8 = true, a7.enableMoveAllGraphics = !a7.enableMoveAllGraphics);
    }, f2.WIDGET), o4.on("key-up", (e8) => {
      e8.key === c3.constraint && n8 && (n8 = false, a7.enableMoveAllGraphics = !a7.enableMoveAllGraphics);
    }, f2.WIDGET)], l5 = this._getHandlesForComponent(r8, t4);
    return r8;
  }
  async _setupReshape3DOperation(e7, t4, o4, i5 = false) {
    const a7 = "reshape", [r8, n8, p6] = await Promise.all([this._requireModule(import("./editingTools-MAVHAYGS.js")), i3(), c7()]);
    if (Ce(r8)) return r8;
    const { ManipulatedObject3DGraphic: l5, ReshapeTool3D: h5 } = r8.module, c8 = new l5({ view: o4, graphic: e7 }), d5 = r6(c8);
    if (0 !== d5) return c8.destroy(), this._logError("sketch:reshape", `Reshape operation not supported for provided graphic(s) (${e5(d5)}).`), null;
    const u7 = t4.reshapeOptions, m5 = new h5({ view: o4, object: c8, enableZVertex: t4.enableZ && "move" === u7?.vertexOperation, enableZShape: t4.enableZ && "move" === u7?.shapeOperation, enableMoveObject: "move" === u7?.shapeOperation || "move-xy" === u7?.shapeOperation, enableMidpoints: "split" === u7?.edgeOperation, enableEdgeOffset: "offset" === u7?.edgeOperation, snappingManager: this.snappingManager, sketchOptions: this.sketchOptions, automaticAreaMeasurementUtils: n8, automaticLengthMeasurementUtils: p6 });
    o4.tools.add(m5), i5 || this.updateGraphics.add(c8.graphic);
    const g4 = [], y4 = new a6({ activeComponent: m5, tool: a7, type: "update", onEnd: () => {
      r(g4), Ae(o4, m5), c8.destroy();
    }, canUndo: () => !m5.destroyed && m5.canUndo, undo: () => {
      m5.destroyed || (m5.undo(), this._emitUndoEvent({ graphics: this.updateGraphics.toArray(), tool: a7 }));
    }, canRedo: () => !m5.destroyed && m5.canRedo, redo: () => {
      m5.destroyed || (m5.redo(), this._emitRedoEvent({ graphics: this.updateGraphics.toArray(), tool: a7 }));
    }, addToSelection: async (e8) => {
      this.updateGraphics.add(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" }), y4.onEnd(), y4.destroy();
      const i6 = await this._updatingHandles.addPromise(this._setupMove3DOperation(this.updateGraphics.toArray(), t4, o4, "transform", true));
      Ce(i6) || this._setUpdateOperationHandle(i6, t4);
    }, removeFromSelection: (e8) => {
      this.updateGraphics.remove(e8), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" }), y4.complete();
    }, toggleTool: async () => {
      if (false === t4.toggleToolOnClick) return;
      y4.onEnd(), y4.destroy();
      const e8 = await this._updatingHandles.addPromise(this._setupGraphicTransform3DOperation(this.updateGraphics.toArray(), t4, o4, true));
      Ce(e8) || this._setUpdateOperationHandle(e8, t4);
    } });
    return g4.push(...this._getHandlesForComponent(y4, t4), o4.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(y4, e8, t4), f2.WIDGET), o4.on("key-down", (e8) => {
      this._getCommonUpdateOperationKeyDownHandlers(y4, e8);
    }, f2.WIDGET)), y4;
  }
  async _setupTransformOrReshape2DOperation(e7, t4, o4, i5) {
    this.updateGraphics.addMany(e7), await this._updatingHandles.addPromise(this._updateSpatialReference(e7));
    const a7 = await this._updatingHandles.addPromise("transform" === t4 ? this._getBox(e7, o4, i5) : this._getReshape(e7, o4, i5));
    if (Ce(a7)) return a7;
    const r8 = new a6({ activeComponent: a7, type: "update", onEnd: () => {
      r(p6), r(n8), r8.activeComponent && !r8.activeComponent.destroyed && r8.activeComponent.destroy(), this._internalGraphicsLayer.removeMany(this.updateGraphics.toArray());
    }, undo: () => {
      Te(r8, this.updateGraphics.toArray()), r8.refreshComponent(), this._emitUndoEvent({ graphics: this.updateGraphics.toArray(), tool: r8.tool });
    }, redo: () => {
      Oe(r8, this.updateGraphics.toArray()), r8.refreshComponent(), this._emitRedoEvent({ graphics: this.updateGraphics.toArray(), tool: r8.tool });
    }, addToSelection: async (e8) => {
      let t5 = r8.activeComponent;
      if ("reshape" === t5?.type) {
        const t6 = [...this.updateGraphics, e8];
        this.updateGraphics.removeAll(), r8.onEnd(), r8.destroy();
        const a8 = await this._updatingHandles.addPromise(this._setupTransformOrReshape2DOperation(t6, "transform", o4, i5));
        if (Ce(a8)) return;
        this._setUpdateOperationHandle(a8, o4);
      } else this.updateGraphics.add(e8), t5.graphics = this.updateGraphics.toArray(), t5.refresh(), r8.resetHistory();
      this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [e8], removed: [], type: "selection-change" }, type: "update" });
    }, removeFromSelection: (e8) => {
      const t5 = this.updateGraphics.indexOf(e8);
      r8.history.undo.forEach((e9) => e9.updates.splice(t5, 1)), r8.history.redo.forEach((e9) => e9.updates.splice(t5, 1)), this.updateGraphics.remove(e8);
      const o5 = this.updateGraphics.toArray();
      0 === o5.length ? r8.complete() : u6(o5) ? r8.toggleTool() : r8.activeComponent.graphics = o5, this.emit("update", { graphics: o5, state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: [], removed: [e8], type: "selection-change" }, type: "update" });
    }, toggleTool: async () => {
      if (this.updateGraphics.length > 1) return;
      const e8 = this.updateGraphics.at(0), t5 = e8.geometry;
      if (null != t5 && ("reshape" === r8.tool && "point" === t5.type || "transform" === r8.tool && "extent" === t5.type)) return;
      let a8 = null;
      "transform" === r8.tool ? a8 = await this._updatingHandles.addPromise(this._getReshape([e8], o4, i5)) : "reshape" === r8.tool && (a8 = await this._updatingHandles.addPromise(this._getBox([e8], o4, i5))), Ce(a8) || (r8.activeComponent?.destroy(), r8.activeComponent = a8, r8.activeComponent && (r(p6), p6 = this._getHandlesForComponent(r8, o4)));
    } }), n8 = [i5.on("immediate-click", (e8) => this._getCommonUpdateOperationClickHandlers(r8, e8, o4), f2.WIDGET), i5.on("key-down", (e8) => {
      if (this._getCommonUpdateOperationKeyDownHandlers(r8, e8), e8.key === c3.constraint && !e8.repeat && r8) {
        const e9 = r8.activeComponent;
        "box" === e9?.type && (e9.preserveAspectRatio = !e9.preserveAspectRatio);
      }
    }, f2.WIDGET), i5.on("key-up", (e8) => {
      if (e8.key === c3.constraint && r8) {
        const e9 = r8.activeComponent;
        "box" === e9?.type && (e9.preserveAspectRatio = !e9.preserveAspectRatio);
      }
    }, f2.WIDGET)];
    let p6 = this._getHandlesForComponent(r8, o4);
    return r8;
  }
  async _getGraphicMover(e7, t4, o4) {
    const { enableMoveAllGraphics: i5, highlightOptions: a7 } = t4, r8 = await this._requireModule(import("./GraphicMover-JOVKDCK3.js"));
    return Ce(r8) ? r8 : new r8.module.default({ enableMoveAllGraphics: i5, highlightName: a7?.name, highlightsEnabled: !!a7?.enabled, indicatorsEnabled: false, graphics: e7, view: o4, callbacks: { onGraphicMoveStart: ({ dx: e8, dy: t5, graphic: o5 }) => {
      this._displayCursor("grabbing"), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: "move-start" }, type: "update" });
    }, onGraphicMove: ({ dx: e8, dy: t5, graphic: o5 }) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: "move" }, type: "update" }), onGraphicMoveStop: ({ dx: e8, dy: t5, graphic: o5 }) => {
      this._displayCursor("pointer"), this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: "move-stop" }, type: "update" });
    }, onGraphicPointerOver: () => this._displayCursor("move"), onGraphicPointerOut: () => this._clearCursor() } });
  }
  async _getBox(e7, t4, o4) {
    const { enableRotation: i5, enableScaling: a7, highlightOptions: r8, preserveAspectRatio: s3 } = t4, [n8, p6] = await Promise.all([this._requireModule(import("./Box-OF4ZOK7X.js")), c7()]);
    if (Ce(n8)) return n8;
    const l5 = this.view?.inputManager?.isModifierKeyDown(c3.constraint);
    return new n8.module.default({ graphics: e7, enableRotation: i5, enableScaling: a7, highlightName: r8?.name, highlightsEnabled: !!r8?.enabled, preserveAspectRatio: !!s3 != !!l5, layer: this._internalGraphicsLayer, view: o4, sketchOptions: this.sketchOptions, automaticLengthMeasurementUtils: p6, callbacks: { onMoveStart: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onMove: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onMoveStop: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onScaleStart: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onScale: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onScaleStop: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onRotateStart: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onRotate: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onRotateStop: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }) } });
  }
  async _getReshape(e7, t4, o4) {
    const { highlightOptions: i5, reshapeOptions: a7 } = t4, r8 = "split" === a7?.edgeOperation, s3 = "move" === a7?.shapeOperation, n8 = !!a7?.enableCreateCurveFromStraightEdge, [p6, l5, h5] = await Promise.all([this._requireModule(import("./Reshape-2DVGVB5J.js")), i3(), c7()]);
    return Ce(p6) ? p6 : new p6.module.default({ enableMidpoints: r8, enableMovement: s3, enableCurveOnMidpoint: n8, graphic: e7[0], highlightName: i5?.name, highlightsEnabled: !!i5?.enabled, layer: this._internalGraphicsLayer, snappingManager: this.snappingManager, sketchOptions: this.sketchOptions, automaticAreaMeasurementUtils: l5, automaticLengthMeasurementUtils: h5, view: o4, callbacks: { onReshapeStart: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onReshape: (e8) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadValues({}, e8), type: "update" }), onReshapeStop: ({ mover: e8, type: t5 }) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8, type: t5 }, type: "update" }), onMoveStart: ({ dx: e8, dy: t5, mover: o5, type: i6 }) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: i6 }, type: "update" }), onMove: ({ dx: e8, dy: t5, mover: o5, type: i6 }) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: i6 }, type: "update" }), onMoveStop: ({ dx: e8, dy: t5, mover: o5, type: i6 }) => this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8, dy: t5, mover: o5, type: i6 }, type: "update" }), onVertexAdd: ({ added: e8, type: t5, vertices: o5 }) => {
      const i6 = e8.map((e9) => r3(e9.geometry));
      this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { added: i6, vertices: o5, type: t5 }, type: "update" });
    }, onVertexRemove: ({ removed: e8, type: t5, vertices: o5 }) => {
      const i6 = e8.map((e9) => r3(e9.geometry));
      this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { removed: i6, vertices: o5, type: t5 }, type: "update" });
    } } });
  }
  _getHandlesForComponent(e7, t4) {
    const o4 = e7.activeComponent;
    if (!o4) return [];
    switch (o4.type) {
      case "graphic-mover":
        return [o4.on("graphic-click", ({ graphic: o5, viewEvent: i5 }) => {
          i5.native?.shiftKey && t4.multipleSelectionEnabled && (i5.stopPropagation(), e7.removeFromSelection(o5));
        }), o4.on("graphic-move-start", (t5) => e7.addToHistory(Me(t5.allGraphics)))];
      case "box":
        return [o4.on("graphic-click", (o5) => this._onTransformOrReshape2DGraphicClick(e7, t4, o5)), o4.on("move-start", (t5) => e7.addToHistory(Me(t5.graphics))), o4.on("rotate-start", (t5) => e7.addToHistory(Me(t5.graphics))), o4.on("scale-start", (t5) => e7.addToHistory(Me(t5.graphics)))];
      case "reshape":
        return [o4.on("graphic-click", (o5) => this._onTransformOrReshape2DGraphicClick(e7, t4, o5)), o4.on("move-start", (t5) => e7.addToHistory(Me([t5.mover]))), o4.on("reshape-start", (t5) => e7.addToHistory(Me([t5.graphic]))), o4.on("vertex-add", (t5) => e7.addToHistory(Me([t5.oldGraphic]))), o4.on("vertex-remove", (t5) => e7.addToHistory(Me([t5.oldGraphic])))];
      case "move-3d":
        return [o4.events.on("record-undo", ({ updates: t5 }) => {
          e7.addToHistory({ updates: t5 });
        }), o4.events.on("move-start", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: 0, dy: 0, mover: e8.objects.length > 0 ? e8.objects[0].graphic : null, type: "move-start" }, type: "update" });
        }), o4.events.on("move", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: e8.dx, dy: e8.dy, mover: e8.objects.length > 0 ? e8.objects[0].graphic : null, type: "move" }, type: "update" });
        }), o4.events.on("move-stop", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { dx: 0, dy: 0, mover: e8.objects.length > 0 ? e8.objects[0].graphic : null, type: "move-stop" }, type: "update" });
        }), o4.events.on("immediate-click", (o5) => {
          o5.shiftKey ? this._toggleSelection([o5.object.graphic], e7, t4) : e7.toggleTool();
        })];
      case "transform-3d":
        return [o4.events.on("record-undo", ({ updates: t5 }) => {
          e7.addToHistory({ updates: t5 });
        }), o4.events.on("translate-start", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, dx: e8.dxScreen, dy: e8.dyScreen, type: "move-start" }, type: "update" });
        }), o4.events.on("translate-stop", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, dx: e8.dxScreen, dy: e8.dyScreen, type: "move-stop" }, type: "update" });
        }), o4.events.on("rotate-start", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, angle: e8.angle, type: "rotate-start" }, type: "update" });
        }), o4.events.on("rotate-stop", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, angle: e8.angle, type: "rotate-stop" }, type: "update" });
        }), o4.events.on("scale-start", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, xScale: e8.xScale, yScale: e8.yScale, type: "scale-start" }, type: "update" });
        }), o4.events.on("scale-stop", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, xScale: e8.xScale, yScale: e8.yScale, type: "scale-stop" }, type: "update" });
        }), o4.events.on("translate", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, dx: e8.dxScreen, dy: e8.dyScreen, type: "move" }, type: "update" });
        }), o4.events.on("rotate", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, angle: e8.angle, type: "rotate" }, type: "update" });
        }), o4.events.on("scale", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: { mover: e8.object.graphic, xScale: e8.xScale, yScale: e8.yScale, type: "scale" }, type: "update" });
        }), o4.events.on("immediate-click", (o5) => {
          o5.shiftKey ? this._toggleSelection([o5.object.graphic], e7, t4) : e7.toggleTool();
        })];
      case "reshape-3d":
        return [o4.events.on("reshape", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadProps(__spreadValues({}, e8), { mover: e8.object.graphic }), type: "update" });
        }), o4.events.on("move", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: __spreadProps(__spreadValues({}, e8), { mover: e8.object.graphic }), type: "update" });
        }), o4.events.on("vertex-add", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: e8, type: "update" });
        }), o4.events.on("vertex-remove", (e8) => {
          this.emit("update", { graphics: this.updateGraphics.toArray(), state: "active", aborted: false, tool: this.activeTool, toolEventInfo: e8, type: "update" });
        }), o4.events.on("immediate-click", (o5) => {
          o5.shiftKey ? this._toggleSelection([o5.object.graphic], e7, t4) : e7.toggleTool();
        })];
    }
  }
  _onTransformOrReshape2DGraphicClick(e7, t4, o4) {
    const { graphic: i5, viewEvent: a7 } = o4;
    return a7.native?.shiftKey && this.hasGraphic(i5) ? (a7.stopPropagation(), e7.removeFromSelection(i5)) : t4.toggleToolOnClick ? (a7.stopPropagation(), e7.toggleTool()) : void 0;
  }
  _setUpdateOperationHandle(e7, t4) {
    this._operationHandle = e7;
    const o4 = this.view?.map;
    this._disablePopup(t4);
    const i5 = () => {
      if (e7 === this._operationHandle) {
        const i6 = this.updateGraphics.toArray(), a7 = this._operationHandle.tool;
        this._operationHandle.destroy(), this._operationHandle = null, this._internalGraphicsLayer.removeMany(this.updateGraphics.toArray()), this.updateGraphics.removeAll(), o4 && o4.remove(this._internalGraphicsLayer), this._restorePopup(t4), this.emit("update", { graphics: i6, state: "complete", aborted: e7.cancelled, tool: a7, toolEventInfo: null, type: "update" });
      }
    };
    e7.on("complete", i5);
  }
  async _getCommonUpdateOperationClickHandlers(e7, t4, o4) {
    const i5 = n3(t4), a7 = await t4.defer(() => this._getFirstHit(i5));
    if (null == a7) return void e7.complete();
    if (t4.native.shiftKey && this._toggleSelection([a7.graphic], e7, o4)) return void t4.stopPropagation();
    this.updateGraphics.includes(a7.graphic) ? t4.stopPropagation() : e7.complete();
  }
  _toggleSelection(e7, t4, o4) {
    const i5 = !!o4.multipleSelectionEnabled;
    return e7.some((e8) => null != e8 && (!(!i5 || !this.hasGraphic(e8)) && (this.updateGraphics.includes(e8) ? t4.removeFromSelection(e8) : t4.addToSelection(e8), true)));
  }
  _getCommonUpdateOperationKeyDownHandlers(e7, t4) {
    if (!e7) return;
    const o4 = t4.key;
    o4 === c3.undo && e7.canUndo() ? (t4.stopPropagation(), e7.undo()) : o4 === c3.redo && e7.canRedo() ? (t4.stopPropagation(), e7.redo()) : o4 === c3.cancel ? (t4.stopPropagation(), e7.cancel()) : this.allowDeleteKey && c3.delete.includes(o4) && this._onDeleteKey(t4);
  }
  _onDeleteKey(e7) {
    this._operationHandle && "update" === this._operationHandle.type && null != this.activeComponent && (e7.stopPropagation(), this.delete());
  }
  _removeDefaultLayer() {
    this._internalGraphicsLayer && (this.view?.map?.remove(this._internalGraphicsLayer), this._internalGraphicsLayer = u(this._internalGraphicsLayer));
  }
  _isComponentGraphic(e7) {
    const { activeComponent: t4 } = this;
    return !(!e7 || null == t4) && (e7.attributes?.esriSketchTool || "draw-2d" === t4.type && t4.graphic === e7 || ("box" === t4.type || "reshape" === t4.type) && t4.isUIGraphic(e7));
  }
  _clearCursor() {
    this.removeHandles(ve);
  }
  _displayCursor(e7) {
    this.removeHandles(ve), this.view?.container && null != e7 && this.addHandles(this.view.acquireCursor(e7, "high"), ve);
  }
  _logError(e7, t4, o4) {
    n.getLogger(this).error(new r2(e7, t4, o4));
  }
  async _requireModule(e7) {
    const t4 = new AbortController();
    this._moduleLoaderAbortController = t4;
    const o4 = await e7;
    return this._moduleLoaderAbortController !== t4 || t4.signal.aborted ? { requireError: "aborted" } : { module: o4 };
  }
  _emitUndoEvent(e7) {
    this.emit("undo", __spreadProps(__spreadValues({}, e7), { type: "undo" }));
  }
  _emitRedoEvent(e7) {
    this.emit("redo", __spreadProps(__spreadValues({}, e7), { type: "redo" }));
  }
  _emitDeleteEvent(e7) {
    this.emit("delete", __spreadProps(__spreadValues({}, e7), { type: "delete" }));
  }
  _onLayerGraphicsChangeCallback(e7) {
    if (null != this._operationHandle) {
      const { updateGraphics: t4 } = this;
      for (const o4 of e7.removed) if (t4.includes(o4)) {
        if (!(t4.length > 1)) {
          this._operationHandle.cancel();
          break;
        }
        this._operationHandle.removeFromSelection(o4);
      }
    }
  }
  async _setupAdvancedDrawToolIntegrationMaybe() {
    this.isUsingLegacyCreateTools || this.pluginManager.loaded || await this.pluginManager.loadPlugins();
  }
  async _setupDrawTool(e7, o4, i5) {
    if (this.isUsingLegacyCreateTools || !this._pluginManager) return null;
    const a7 = this.view, r8 = await import("./DrawTool-NWJAOCS3.js");
    await this.pluginManager.loadPlugins();
    const s3 = await this.pluginManager.makeRenderer({ customSymbol: o4.graphicSymbol, useTextSymbol: "text" === i5 }), p6 = new r8.DrawTool({ view: a7, elevationInfo: this._layerAdapter?.elevationInfo ?? i("3d" === a7.type), hasZ: !!o4.hasZ, sketchOptions: this.sketchOptions, renderer: s3, defaultZ: o4.defaultZ ?? 0, directionOptions: o4.directionOptions, snappingManager: this.snappingManager, enableVertexVisuals: "rectangle" !== i5 && "circle" !== i5 });
    p6.addHandles(c(s3));
    const l5 = new j2(__spreadProps(__spreadValues({}, o4.graphicProperties), { attributes: __spreadValues({}, o4.graphicProperties?.attributes), symbol: o4.graphicSymbol ?? this._getGraphicSymbolFromTool(i5) }));
    return o4.graphicSymbol || p6.addHandles(l(() => this._getGraphicSymbolFromTool(i5), (e8) => l5.symbol = e8)), this._set("createGraphic", l5), a7.addAndActivateTool(p6), p6.begin(e7), p6;
  }
  get test() {
  }
  wait() {
    return j(() => !this.updating);
  }
  _disablePopupEnabled(e7) {
    return "3d" !== this.view?.type || this.updateOnGraphicClick || (e7?.toggleToolOnClick ?? false);
  }
  _disablePopup(e7) {
    this._disablePopupEnabled(e7) && this.view && null == this._originalPopupEnabled && (this._originalPopupEnabled = this.view.popupEnabled, this.view.popupEnabled = false);
  }
  _restorePopup(e7) {
    this._disablePopupEnabled(e7) && this.view && null != this._originalPopupEnabled && (this.view.popupEnabled = this._originalPopupEnabled, this._originalPopupEnabled = null);
  }
  async _waitViewReady() {
    const e7 = this.view;
    e7 ? (e(this._viewReadyAbortController), this._viewReadyAbortController = new AbortController(), await p(j(() => e7?.ready), this._viewReadyAbortController.signal)) : this._logMissingView();
  }
  _logMissingView() {
    this._logError("sketch:missing-property", we("view"));
  }
  _logMissingLayer() {
    this._logError(be, we("layer"));
  }
};
__decorate([a3()], _e.prototype, "_defaultSnappingManager", void 0), __decorate([a3()], _e.prototype, "_layerAdapter", null), __decorate([a3()], _e.prototype, "_pluginManager", void 0), __decorate([a3()], _e.prototype, "_operationHandle", void 0), __decorate([a3({ readOnly: true })], _e.prototype, "_updatingHandles", void 0), __decorate([a3({ readOnly: true })], _e.prototype, "activeTool", null), __decorate([a3({ readOnly: true })], _e.prototype, "activeCreateToolDrawMode", null), __decorate([a3()], _e.prototype, "activeTooltip", null), __decorate([a3({ types: x })], _e.prototype, "activeFillSymbol", void 0), __decorate([a3()], _e.prototype, "activeLineSymbol", void 0), __decorate([a3()], _e.prototype, "activeVertexSymbol", void 0), __decorate([a3()], _e.prototype, "allowDeleteKey", void 0), __decorate([a3({ readOnly: true })], _e.prototype, "createGraphic", null), __decorate([a3()], _e.prototype, "defaultCreateOptions", null), __decorate([a3()], _e.prototype, "defaultUpdateOptions", null), __decorate([a3({ type: c5, nonNullable: true })], _e.prototype, "labelOptions", null), __decorate([a3()], _e.prototype, "layer", void 0), __decorate([a3({ types: x })], _e.prototype, "pointSymbol", void 0), __decorate([a3({ types: x })], _e.prototype, "polygonSymbol", void 0), __decorate([a3({ types: x })], _e.prototype, "polylineSymbol", void 0), __decorate([a3()], _e.prototype, "meshSymbol", void 0), __decorate([a3({ type: u4 })], _e.prototype, "textSymbol", null), __decorate([a3({ type: u5, nonNullable: true })], _e.prototype, "snappingOptions", null), __decorate([a3()], _e.prototype, "snappingManager", null), __decorate([a3({ readOnly: true })], _e.prototype, "state", null), __decorate([a3({ type: n4, nonNullable: true })], _e.prototype, "tooltipOptions", null), __decorate([a3({ readOnly: true })], _e.prototype, "updateGraphics", void 0), __decorate([a3()], _e.prototype, "updateOnGraphicClick", void 0), __decorate([a3()], _e.prototype, "updating", null), __decorate([a3()], _e.prototype, "creationMode", void 0), __decorate([a3({ type: n5, nonNullable: true })], _e.prototype, "valueOptions", null), __decorate([a3({ types: x })], _e.prototype, "vertexSymbol", void 0), __decorate([a3({ value: null })], _e.prototype, "view", null), __decorate([a3({ constructOnly: true, type: c6 })], _e.prototype, "sketchOptions", void 0), __decorate([a3()], _e.prototype, "useLegacyCreateTools", void 0), __decorate([a3()], _e.prototype, "isUsingLegacyCreateTools", null), __decorate([a3()], _e.prototype, "pluginManager", null), __decorate([a3()], _e.prototype, "drawTool", null), __decorate([a3()], _e.prototype, "rootPlugins", null), __decorate([a3()], _e.prototype, "effectiveAvailablePlugins", null), __decorate([a3()], _e.prototype, "firstPluginWithSwappableLeaf", null), __decorate([a3()], _e.prototype, "multiplePluginsActive", null), _e = __decorate([c2("esri.widgets.Sketch.SketchViewModel")], _e);
var be = "sketch:missing-property";
var we = (e7) => `Property '${e7}' is missing on SketchViewModel.`;
function Ge(e7) {
  return "polygon" === e7 || "rectangle" === e7 || "circle" === e7;
}
function Te(e7, t4) {
  Se("undo", e7.history.undo, e7.history.redo, t4);
}
function Oe(e7, t4) {
  Se("redo", e7.history.redo, e7.history.undo, t4);
}
function Se(e7, t4, o4, i5) {
  const a7 = t4.pop();
  if (!a7) return;
  const r8 = a7.updates, s3 = [];
  i5.forEach((t5, o5) => {
    const i6 = r8[o5];
    null != i6 && ("geometry" in i6 && null != i6.geometry && (s3.push({ geometry: t5.geometry }), t5.geometry = i6.geometry), "symbol" in i6 && null != i6.symbol && (s3.push({ symbol: t5.symbol }), t5.symbol = i6.symbol), "undo" in i6 && (s3.push(i6), i6[e7](t5)));
  }), o4.push({ updates: s3 });
}
function Ee(e7, t4) {
  null != e7 && t4.hasGrabbedManipulators && (e7.activeTool = null);
}
function Me(e7) {
  return { updates: e7.map(({ geometry: e8 }) => "mesh" === e8?.type ? { geometry: e8.cloneShallow() } : { geometry: e8 }) };
}
function Ae(e7, t4) {
  e7.tools?.remove(t4), t4.destroyed || t4.destroy();
}
function Ce(e7) {
  return "requireError" in e7 && "aborted" === e7.requireError;
}

export {
  _e
};
//# sourceMappingURL=chunk-WIJBHQRU.js.map
