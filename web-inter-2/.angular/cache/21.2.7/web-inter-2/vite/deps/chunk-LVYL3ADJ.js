import {
  L as L2,
  M,
  P,
  V,
  b as b5,
  d,
  f as f3,
  g as g2,
  k2 as k,
  m2,
  o as o4,
  p as p2,
  r,
  t3,
  z2
} from "./chunk-WJCJP4VV.js";
import {
  b as b4
} from "./chunk-VD5IUEGW.js";
import {
  L
} from "./chunk-WF6LRU5G.js";
import {
  v
} from "./chunk-LKG3X5EQ.js";
import {
  F
} from "./chunk-Z5YGVRV2.js";
import {
  e as e4,
  i as i3,
  n as n6,
  t as t2
} from "./chunk-BUWCRCXG.js";
import {
  b as b3,
  l as l4,
  n as n3,
  s as s4
} from "./chunk-IT4PSQQZ.js";
import {
  n2 as n5
} from "./chunk-GSU264RF.js";
import {
  N as N4,
  _ as _3,
  ct,
  i,
  j,
  m
} from "./chunk-USWA7LL5.js";
import {
  a as a2
} from "./chunk-Z2YPXSZR.js";
import {
  O as O2
} from "./chunk-7RAWFBKH.js";
import {
  n as n4
} from "./chunk-YCA3PF4Q.js";
import {
  f as f2,
  g
} from "./chunk-RNSOC4NC.js";
import {
  H,
  nt,
  rt
} from "./chunk-D2Z2HLWL.js";
import {
  s as s3
} from "./chunk-VJCO7ZMT.js";
import {
  N as N3,
  O,
  y as y3
} from "./chunk-LAMJQAGF.js";
import {
  i as i2
} from "./chunk-WGYRGOG2.js";
import {
  $,
  W,
  _ as _2,
  o as o3,
  tt
} from "./chunk-3EE7FDFG.js";
import {
  S
} from "./chunk-NGAI3WTZ.js";
import {
  _
} from "./chunk-GXLPH2D4.js";
import {
  o as o2
} from "./chunk-WWKLZ2P6.js";
import {
  l
} from "./chunk-M44GXGOJ.js";
import {
  e as e3
} from "./chunk-IO7CXLQO.js";
import {
  l as l2,
  u as u2
} from "./chunk-R3PBZCGD.js";
import {
  f
} from "./chunk-Z5I3WFZJ.js";
import {
  y as y2
} from "./chunk-DFCHXQYB.js";
import {
  e as e2,
  l as l3,
  n as n2,
  o,
  s as s2,
  u as u3
} from "./chunk-GM5PCDS3.js";
import {
  t
} from "./chunk-URLT4X25.js";
import {
  N as N2,
  b as b2,
  e,
  p,
  u,
  z
} from "./chunk-SH72BZH2.js";
import {
  G
} from "./chunk-LANOLZOB.js";
import {
  u as u4
} from "./chunk-UXWT3ISO.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  n,
  s,
  y
} from "./chunk-WARIPJQI.js";
import {
  has
} from "./chunk-6I475YAP.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/createGraphicSymbolMeshSchemas.js
async function u5(u6, f4, k2) {
  const b7 = [], d2 = { scaleInfo: r(u6), scaleExpression: null };
  for (const s5 of f4) switch (s5.type) {
    case "marker":
      if (s5.animationParams) {
        if (s5.animationParams.params.hasShiftAnimation) {
          b7.push(...f3(k2.instances.animatedMarkerShift, s5, b5, d2));
          break;
        }
        b7.push(...f3(k2.instances.animatedMarker, s5, b5, d2));
        break;
      }
      b7.push(...p2(k2.instances.marker, s5, b5, d2));
      break;
    case "fill":
      if (s5.animationParams) {
        b7.push(...m2(k2.instances.animatedPolygon, s5, b5, d2));
        break;
      }
      null == s5.spriteRasterizationParam ? b7.push(...z2(k2.instances.fill, s5, d2)) : b7.push(...d(k2.instances.complexFill, s5, false, d2));
      break;
    case "line":
      if (s5.animationParams) {
        if (s5.animationParams.params.hasShiftAnimation) {
          b7.push(...m2(k2.instances.animatedPolylineShift, s5, b5, d2));
          break;
        }
        b7.push(...m2(k2.instances.animatedPolyline, s5, b5, d2));
        break;
      }
      s5.spriteRasterizationParam ? b7.push(...P(k2.instances.texturedLine, s5, false, d2)) : b7.push(...M(k2.instances.line, s5, false, d2));
      break;
    case "text":
      b7.push(...L2(k2.instances.text, s5, b5, d2));
      break;
    case "gradientFill":
      b7.push(...g2(k2.instances.gradientFill, s5, d2));
      break;
    case "gradientStroke":
      b7.push(...k(k2.instances.gradientStroke, s5, d2));
      break;
    case "outlineFill":
      b7.push(...V(k2.instances.outlineFill, s5, d2));
  }
  return b7;
}

// node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js
var a3 = class _a extends O2 {
  static from(e5, t5, r2) {
    return new _a(e5, t5, r2);
  }
  constructor(e5, t5, r2) {
    super(r2), this._items = e5, this._tile = t5, this._index = -1, this._cachedGeometry = null;
    const s5 = t5.lod;
    s5.wrap && (this._wrappingInfo = { worldSizeX: s5.worldSize[0] });
  }
  get _current() {
    return this._items[this._index];
  }
  getItem() {
    return this._current;
  }
  getZOrder() {
    return this._current.zOrder;
  }
  getMeshWriters() {
    return this._current.symbolResource?.symbolInfo.meshWriters ?? [];
  }
  hasField(e5) {
    return null != this._current.attributes[e5];
  }
  field(e5) {
    return this.readAttribute(e5);
  }
  get geometryType() {
    const e5 = u3(this._current.geometry);
    return "esriGeometryPoint" === e5 ? "esriGeometryMultipoint" : e5;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e5 = new _a(this._items, this._tile, this.metadata);
    return this.copyInto(e5), e5;
  }
  copyInto(e5) {
    super.copyInto(e5), e5._cachedGeometry = this._cachedGeometry, e5._index = this._index;
  }
  get fields() {
    throw new Error("Fields reading not supported to graphics.");
  }
  get hasFeatures() {
    return !!this._items.length;
  }
  get hasNext() {
    return this._index + 1 < this._items.length;
  }
  get exceededTransferLimit() {
    throw new Error("InternalError: exceededTransferLimit not implemented for graphics.");
  }
  get hasZ() {
    return l3(this._current.projectedGeometry);
  }
  get hasM() {
    return s2(this._current.projectedGeometry);
  }
  get usedMemory() {
    return this._current.usedMemory;
  }
  getInTransform() {
    return this._tile.transform;
  }
  getSize() {
    return this._items.length;
  }
  getAttributeHash() {
    let e5 = "";
    for (const t5 in this._current.attributes) e5 += this._current.attributes[t5];
    return e5;
  }
  getObjectId() {
    return this._items[this._index].objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e5) {
    throw new Error("InternalError: Setting displayId not supported for graphics.");
  }
  setIndex(e5) {
    this._index = e5;
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (this._cachedGeometry = null; ++this._index < this._items.length && !this._getExists(); ) ;
    return this._index < this._items.length;
  }
  readGeometryArea() {
    throw new Error("InternalError: readGeometryArea not supported for graphics.");
  }
  _readGeometry() {
    if (!this._cachedGeometry) {
      let e5 = H(this._current.projectedGeometry);
      if ("esriGeometryPolyline" === this.geometryType && (e5 = nt(e5, this.geometryType, this._tile.transform.scale[0])), this._cachedGeometry = rt(e5, this.geometryType, this._tile.transform), !this._cachedGeometry) return null;
      this._wrapGeometry(this._cachedGeometry);
    }
    return this._cachedGeometry;
  }
  _wrapGeometry(e5) {
    if (!this._wrappingInfo) return;
    const { worldSizeX: t5 } = this._wrappingInfo;
    if (e5.isPoint) return 1 === t5 ? (e5.coords.push(o3, 0), e5.coords.push(2 * -o3, 0), void e5.lengths.push(3)) : 2 === t5 ? (e5.coords.push(2 * o3, 0), e5.coords.push(4 * -o3, 0), void e5.lengths.push(3)) : void this._wrapVertex(e5.coords, 0, 2, t5);
    if ("esriGeometryMultipoint" !== this.geometryType) ;
    else {
      if (1 === t5) {
        const t6 = e5.coords.slice();
        t6[0] -= 512;
        const r2 = e5.coords.slice();
        r2[0] += 512, e5.coords.push(...t6, ...r2);
        const s5 = e5.lengths[0];
        return void e5.lengths.push(s5, s5);
      }
      this._wrapVertex(e5.coords, 0, 2, t5);
    }
  }
  _wrapVertex(e5, t5, r2, s5) {
    const i4 = t5 * r2, o5 = e5[i4];
    o5 < -o3 * (s5 - 2) ? e5[i4] = o5 + o3 * s5 : o5 > o3 * (s5 - 1) && (e5[i4] = o5 - o3 * s5);
  }
  _readX() {
    const e5 = this._readGeometry();
    return null != e5 ? e5.coords[0] : 0;
  }
  _readY() {
    const e5 = this._readGeometry();
    return null != e5 ? e5.coords[1] : 0;
  }
  _readServerCentroid() {
    switch (this.geometryType) {
      case "esriGeometryPolygon": {
        const e5 = l2(this._current.projectedGeometry), r2 = new s3([], e5, this.hasZ, false);
        return rt(r2, this.geometryType, this._tile.transform);
      }
      case "esriGeometryPolyline": {
        const t5 = this._current.projectedGeometry, r2 = u2(t5.paths, this.hasZ), s5 = new s3([], r2, this.hasZ, false);
        return rt(s5, this.geometryType, this._tile.transform);
      }
    }
    return null;
  }
  _readAttribute(e5, t5) {
    const r2 = this._current.attributes[e5];
    if (void 0 !== r2) return r2;
    const s5 = e5.toLowerCase();
    for (const i4 in this._current.attributes) if (i4.toLowerCase() === s5) return this._current.attributes[i4];
  }
  _readAttributes() {
    return this._current.attributes;
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js
var v2 = class _v {
  static fromGraphic(t5, e5, i4, s5) {
    return new _v(t5.geometry, e5, t5.attributes, t5.visible, t5.uid, t5.version, i4, s5);
  }
  constructor(t5, i4, s5, r2, o5, n7, m3, a4) {
    this.geometry = t5, this.symbol = i4, this.attributes = s5, this.visible = r2, this.objectId = o5, this._version = n7, this.zOrder = m3, this.displayId = a4, this.symbolBounds = N2(), this.prevSymbolBounds = N2(), this.size = [0, 0, 0, 0], this.geometryBounds = N2(), this._isDensificationDirty = false, this._densificationDeviation = 1 / 0;
  }
  get projectedGeometry() {
    return this._projectedGeometry;
  }
  get linearCIM() {
    return this.symbolResource?.symbolInfo.linearCIM;
  }
  get usedMemory() {
    return 128 + e3(this.attributes) + F(this.geometry);
  }
  get hasAnimations() {
    const { linearCIM: t5 } = this;
    return !!t5 && t5.some((t6) => "animationParams" in t6 && !!t6.animationParams);
  }
  get hasCurvedGeoemtry() {
    return null != this.geometry && "mesh" !== this.geometry.type && t(this.geometry);
  }
  update(t5, i4, s5) {
    return (this._version !== t5.version || this.zOrder !== s5 || this.symbol !== i4) && (this.prevSymbolBounds = this.symbolBounds, this.symbolBounds = N2(), this.zOrder = s5, this.geometry = t5.geometry, this.attributes = t5.attributes, this.symbol = i4, this.visible = t5.visible, this._version = t5.version, this.symbolResource = null, this._projectedGeometry = null, N2(this.geometryBounds), this._minDensificationDeviation = null, this._isDensificationDirty = true, true);
  }
  updateDensificationResolution(t5) {
    if (!this.hasCurvedGeoemtry) return false;
    const e5 = Math.max(D(t5), this._minDensificationDeviation ?? 0);
    return e5 !== this._densificationDeviation && (this._densificationDeviation = e5, this._isDensificationDirty = true, true);
  }
  async projectAndNormalize(t5) {
    let e5, o5 = this.geometry;
    if (o5 && o5.spatialReference && "mesh" !== o5.type && ("extent" === o5.type && (o5 = m(o5)), e5 = t(o5) ? L(o5, { maxSegmentLength: 1 / 0, minSegmentsPerCurve: n6() }) : o5.toJSON(), this._projectedGeometry = await j2(e5, o5.spatialReference, t5), f(this.geometryBounds, this._projectedGeometry), this.hasCurvedGeoemtry && null != this._projectedGeometry)) {
      const t6 = p(this.geometryBounds), e6 = b2(this.geometryBounds);
      this._minDensificationDeviation = b6(t6, e6);
    }
  }
  async densifyCurvedGeometryForDisplay(t5) {
    if (!this.hasCurvedGeoemtry || !this._isDensificationDirty) return;
    this._isDensificationDirty = false;
    const e5 = this.geometry;
    if (!e5 || !e5.spatialReference || "mesh" === e5.type) return;
    const i4 = t5.metersPerUnit / e5.spatialReference.metersPerUnit, s5 = this._densificationDeviation * i4, r2 = L(e5, { maxDeviation: s5, minSegmentsPerCurve: i3() });
    this._projectedGeometry = await j2(r2, e5.spatialReference, t5);
  }
};
async function j2(t5, e5, i4) {
  await f2(t5.spatialReference, i4);
  const s5 = a2(t5);
  if (!s5) return;
  const r2 = g(s5, e5, i4);
  return r2 && y2(r2), n2(r2) ? m(r2) : r2;
}
function D(t5) {
  return 2 ** Math.round(Math.log2(t5)) * t2();
}
function b6(t5, e5) {
  if (t5 > 0 && e5 > 0) {
    const i4 = Math.min(t5, e5) / 2, s5 = 2 * Math.PI / e4();
    return i4 * (1 - Math.cos(s5 / 2));
  }
  return null;
}

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicUpdateMessage.js
var t4 = class {
  constructor(t5, e5, d2) {
    this.added = t5, this.updated = e5, this.removed = d2;
  }
  hasAnyUpdate() {
    return !!(this.added.length || this.updated.length || this.removed.length);
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js
var p3 = 1e-5;
function _4(e5, t5) {
  return t5.zOrder - e5.zOrder;
}
var y4 = class {
  constructor(e5, t5, s5, o5, i4) {
    this._items = /* @__PURE__ */ new Map(), this._boundsDirty = false, this._outSpatialReference = e5, this._cimResourceManager = t5, this._hittestDrawHelper = new ct(t5), this._tileInfoView = s5, this._store = i4;
    const r2 = s5.getClosestInfoForScale(o5);
    this._resolution = this._tileInfoView.getTileResolution(r2.level);
  }
  destroy() {
    this._hittestDrawHelper.destroy();
  }
  items() {
    return this._items.values();
  }
  getItem(e5) {
    return this._items.get(e5);
  }
  async update(e5, t5, s5) {
    const o5 = [], i4 = [], r2 = [], n7 = /* @__PURE__ */ new Set(), m3 = [];
    let l5 = 0;
    const a4 = /* @__PURE__ */ new Set();
    for (const c2 of e5.items) {
      const e6 = c2.uid;
      if (a4.has(e6)) continue;
      a4.add(e6), l5++;
      const r3 = this._items.get(e6), u6 = t5(c2);
      if (n7.add(e6), r3) {
        const e7 = r3.update(c2, u6, l5), t6 = r3.updateDensificationResolution(this._resolution);
        e7 && m3.push(this._updateItem(r3, s5)), (e7 || t6) && i4.push(r3);
        continue;
      }
      const d2 = this._store.createDisplayIdForObjectId(e6), f4 = v2.fromGraphic(c2, u6, l5, d2);
      f4.updateDensificationResolution(this._resolution), m3.push(this._updateItem(f4, s5)), this._items.set(f4.objectId, f4), o5.push(f4);
    }
    for (const [c2, u6] of this._items.entries()) n7.has(c2) || (this._store.releaseDisplayIdForObjectId(c2), this._items.delete(c2), r2.push(u6));
    return await Promise.all(m3), this._index = null, new t4(o5, i4, r2);
  }
  updateLevel(e5) {
    if (this._resolution === e5) return false;
    this._index = null, this._boundsDirty = true, this._resolution = e5;
    for (const t5 of this.items()) if (t5.hasCurvedGeoemtry) return true;
    return false;
  }
  hitTest(e5, t5, i4, n7, m3) {
    const l5 = has("esri-mobile"), h = l5 ? $ : _2, f4 = h + (l5 ? 0 : tt);
    e5 = S(e5, this._tileInfoView.spatialReference);
    const p4 = n7 * window.devicePixelRatio * f4, y5 = u();
    y5[0] = e5 - p4, y5[1] = t5 - p4, y5[2] = e5 + p4, y5[3] = t5 + p4;
    const b7 = n7 * window.devicePixelRatio * h, I = u();
    I[0] = e5 - b7, I[1] = t5 - b7, I[2] = e5 + b7, I[3] = t5 + b7;
    const g3 = 0.5 * n7 * (f4 + i), w = this._searchIndex(e5 - g3, t5 - g3, e5 + g3, t5 + g3);
    if (!w || 0 === w.length) return [];
    const x = [], j3 = u(), S2 = u();
    for (const s5 of w) {
      if (!s5.visible) continue;
      const { geometryBounds: e6, symbolResource: t6 } = s5;
      this._getSymbolBounds(j3, t6, e6, S2, m3), S2[3] = S2[2] = S2[1] = S2[0] = 0, z(j3, y5) && x.push(s5);
    }
    if (0 === x.length) return [];
    const R = this._hittestDrawHelper, B = [];
    for (const s5 of x) {
      const { projectedGeometry: e6, symbolResource: t6 } = s5;
      if (!t6) continue;
      const { textInfo: o5, symbolInfo: i5 } = t6, r2 = i5.cimSymbol;
      R.hitTest(I, r2.symbol, e6, o5, m3, n7) && B.push(s5);
    }
    return B.sort(_4), B.map((e6) => e6.objectId);
  }
  queryItems(e5) {
    return 0 === this._items.size ? [] : this._searchForItems(e5);
  }
  clear() {
    this._items.clear(), this._index = null;
  }
  async _updateItem(e5, t5) {
    await e5.projectAndNormalize(this._outSpatialReference), await t5(e5);
    const { size: s5 } = e5;
    s5[0] = s5[1] = s5[2] = s5[3] = 0, this._getSymbolBounds(e5.symbolBounds, e5.symbolResource, e5.geometryBounds, e5.size, 0);
  }
  _searchIndex(e5, s5, o5, i4) {
    return this._boundsDirty && (this._items.forEach((e6) => this._getSymbolBounds(e6.symbolBounds, e6.symbolResource, e6.geometryBounds, e6.size, 0)), this._boundsDirty = false), this._index || (this._index = i2(9, (e6) => ({ minX: e6.symbolBounds[0], minY: e6.symbolBounds[1], maxX: e6.symbolBounds[2], maxY: e6.symbolBounds[3] })), this._index.load(Array.from(this._items.values()))), this._index.search({ minX: e5, minY: s5, maxX: o5, maxY: i4 });
  }
  _searchForItems(e5) {
    const t5 = this._tileInfoView.spatialReference, o5 = e5.bounds, i4 = G(t5);
    if (i4 && t5.isWrappable) {
      const [t6, r2] = i4.valid, n7 = Math.abs(o5[2] - r2) < p3, m3 = Math.abs(o5[0] - t6) < p3;
      if ((!n7 || !m3) && (n7 || m3)) {
        const i5 = e5.resolution;
        let m4;
        m4 = u(n7 ? [t6, o5[1], t6 + i5 * i, o5[3]] : [r2 - i5 * i, o5[1], r2, o5[3]]);
        const l5 = this._searchIndex(o5[0], o5[1], o5[2], o5[3]), a4 = this._searchIndex(m4[0], m4[1], m4[2], m4[3]);
        return [.../* @__PURE__ */ new Set([...l5, ...a4])];
      }
    }
    return this._searchIndex(o5[0], o5[1], o5[2], o5[3]);
  }
  _getSymbolBounds(t5, o5, r2, n7, m3) {
    if (!o5 || !o5.symbolInfo.linearCIM) return null;
    if (t5 || (t5 = u()), e(t5, r2), !n7 || 0 === n7[0] && 0 === n7[1] && 0 === n7[2] && 0 === n7[3]) {
      const { textInfo: t6, symbolInfo: s5 } = o5, i4 = s5.cimSymbol;
      n7 || (n7 = [0, 0, 0, 0]);
      const r3 = N4.getSymbolInflateSize(n7, i4.symbol, this._cimResourceManager, m3, t6);
      n7[0] = u4(r3[0]), n7[1] = u4(r3[1]), n7[2] = u4(r3[2]), n7[3] = u4(r3[3]);
    }
    const a4 = this._resolution, c2 = N4.safeSize(n7);
    return t5[0] -= c2 * a4, t5[1] -= c2 * a4, t5[2] += c2 * a4, t5[3] += c2 * a4, t5;
  }
};

// node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js
var F2 = class _F {
  static getOrCreate(e5, t5, s5) {
    let r2 = t5.get(e5.id);
    return r2 || (r2 = new _F(e5, s5), t5.set(e5.id, r2)), r2;
  }
  static fromItems(e5, t5, s5) {
    const r2 = new _F(e5, s5);
    for (const i4 of t5) r2.append(i4);
    return r2;
  }
  constructor(e5, t5) {
    this.tile = e5, this.metadata = t5, this.addedOrModified = [], this.removed = [], this.objectIdMap = null;
  }
  get reader() {
    return this._reader || (this._reader = a3.from(this.addedOrModified, this.tile, this.metadata)), this._reader;
  }
  append(e5) {
    this.addedOrModified.push(e5), e5.hasAnimations && (this.objectIdMap = this.objectIdMap || {}, this.objectIdMap[e5.displayId] = e5.objectId);
  }
};
var O3 = class extends o2(b) {
  constructor(e5) {
    super(e5), this._attached = false, this._tiles = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._hashToSymbolInfo = /* @__PURE__ */ new Map(), this._lastCleanup = performance.now(), this._cleanupRequired = true, this.lastUpdateId = -1, this.renderer = null, this._updateTracking = new n5({ debugName: "GraphicsView2D" }), this.updateRequested = false, this.defaultPointSymbolEnabled = true, this._commandQueue = new o4({ process: (e6) => {
      if ("update" === e6.type) return this._update();
      throw new Error("InternalError: Unsupported command");
    } }), this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this.container.destroy(), this.view = null, this.renderer = null, this._set("graphics", null), this._controller.abort(), this._graphicStore.clear(), this._graphicStore.destroy(), this._attributeStore = null, this._hashToSymbolInfo.clear(), this._updateTracking.destroy(), this._commandQueue.destroy();
  }
  _initAttributeStore() {
    this._storage = new l4({ spatialReference: this.view.spatialReference, fields: new _() }), this._attributeStore = new b3({ isLocal: true, update: (e6) => {
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`, { message: e6 }), this.container.attributeView.requestUpdate(e6), this.container.requestRender(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`, { message: e6 });
    } });
    const e5 = t3(null, []);
    this._attributeStore.update(e5, this._storage, null), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
  }
  initialize() {
    this._initAttributeStore(), this._metadata = n4.createGraphics(this.view.spatialReference), this._resourceProxy = new s4({ fetch: (e6) => Promise.all(e6.map((e7) => this.view.stage.textureManager.rasterizeItem(e7))), fetchDictionary: (e6) => {
      throw new Error("InternalError: Graphics do not support Dictionary requests");
    } }), this.addHandles([l(() => this._effectiveRenderer, () => this._pushUpdate()), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      this.addHandles([this.graphics.on("change", () => this._pushUpdate())]), this._graphicStore?.destroy(), this._graphicStore = new y4(this.view.spatialReference, this._cimResourceManager, this.view.featuresTilingScheme, this.view.state.scale, this._attributeStore), this._attached = true, this.requestUpdate(), this._pushUpdate();
    })]), this._updateTracking.addUpdateTracking("CommandQueue", this._commandQueue.updateTracking);
    const e5 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: e5, removed: [] });
  }
  get _effectiveRenderer() {
    return "function" == typeof this.renderer ? this.renderer() : this.renderer;
  }
  get _cimResourceManager() {
    return this.view.stage.textureManager.resourceManager;
  }
  get updating() {
    const e5 = !this._attached || this._updateTracking.updating;
    return has("esri-2d-log-updating") && console.log(`Updating GraphicsView2D: ${e5}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`), e5;
  }
  hitTest(e5) {
    if (!this.view || this.view.suspended) return [];
    const { resolution: t5, rotation: r2 } = this.view.state, i4 = this._graphicStore.hitTest(e5.x, e5.y, 2, t5, r2), o5 = new Set(i4), a4 = this.graphics.items.reduce((e6, t6) => (o5.has(t6.uid) && e6.set(t6.uid, t6), e6), /* @__PURE__ */ new Map());
    return i4.map((e6) => a4.get(e6)).filter(N);
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback()), this.notifyChange("updating");
  }
  processUpdate(e5) {
    this.updateRequested && (this.updateRequested = false, this.update(e5));
  }
  viewChange() {
    this.requestUpdate();
  }
  setHighlight(e5) {
    const t5 = [];
    for (const { objectId: s5, highlightFlags: r2 } of e5) {
      const e6 = this._graphicStore.getItem(s5)?.displayId;
      t5.push({ objectId: s5, highlightFlags: r2, displayId: e6 });
    }
    this._attributeStore.setHighlight(t5, e5), this._pushUpdate();
  }
  graphicUpdateHandler(e5) {
    this._pushUpdate();
  }
  update(e5) {
    this.updateRequested = false, this._attached && this._graphicStore.updateLevel(e5.state.resolution) && this.pushUpdate();
  }
  pushUpdate() {
    this._pushUpdate();
  }
  _pushUpdate() {
    y(this._commandQueue.push({ type: "update" }));
  }
  async _update() {
    try {
      if (has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView._update start`), this.graphics.destroyed) return;
      const e5 = await this._graphicStore.update(this.graphics, (e6) => this._getSymbolForGraphic(e6), (e6) => this._ensureSymbolResource(e6));
      for (const s5 of e5.updated) this.container.restartAnimation(s5.objectId);
      if (!e5.hasAnyUpdate()) return void this._attributeStore.sendUpdates();
      e5.removed.length && (this._cleanupRequired = true), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`, e5);
      const t5 = this._createTileMessages(e5);
      await this._densifyItemsForDisplay(t5), await this._fetchResources(t5), this._write(t5);
      for (const s5 of e5.added) this._setFilterState(s5);
      for (const s5 of e5.updated) this._setFilterState(s5);
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`, e5), this._attributeStore.sendUpdates(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`, e5);
    } catch (e5) {
    }
    this._cleanupSharedResources();
  }
  _createTileMessages(e5) {
    const t5 = /* @__PURE__ */ new Map();
    for (const s5 of e5.added) {
      const e6 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const r2 of e6) {
        F2.getOrCreate(r2, t5, this._metadata).append(s5);
      }
    }
    for (const s5 of e5.updated) {
      const e6 = this.view.graphicsTileStore.getIntersectingTiles(s5.prevSymbolBounds), r2 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const i4 of e6) {
        F2.getOrCreate(i4, t5, this._metadata).removed.push(s5.displayId);
      }
      for (const i4 of r2) {
        F2.getOrCreate(i4, t5, this._metadata).append(s5);
      }
    }
    for (const s5 of e5.removed) {
      const e6 = this.view.graphicsTileStore.getIntersectingTiles(s5.symbolBounds);
      for (const r2 of e6) {
        F2.getOrCreate(r2, t5, this._metadata).removed.push(s5.displayId);
      }
    }
    return Array.from(t5.values());
  }
  async _densifyItemsForDisplay(e5) {
    const t5 = /* @__PURE__ */ new Map();
    for (const s5 of e5) for (const e6 of s5.addedOrModified) t5.has(e6) || t5.set(e6, e6.densifyCurvedGeometryForDisplay(this.view.spatialReference));
    await Promise.all(t5.values());
  }
  async _fetchResources(e5) {
    const t5 = { timeZone: null, timeExtent: null };
    for (const { tile: s5, reader: r2 } of e5) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${s5.id}] GraphicsView fetchResources`, e5);
      const i4 = r2.getCursor();
      for (; i4.next(); ) for (const e6 of i4.getMeshWriters()) e6.enqueueRequest(this._resourceProxy, i4, s5.createArcadeEvaluationOptions(t5));
    }
    await this._resourceProxy.fetchEnqueuedResources();
  }
  _write(e5) {
    for (const t5 of e5) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t5.tile.id}] GraphicsView write`, t5);
      const e6 = this._writeMeshes(t5);
      let s5 = this._tiles.get(t5.tile.key);
      s5 || (s5 = this._createFeatureTile(t5.tile.key)), has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t5.tile.id}] GraphicsView onTileData`, t5), this.container.onTileData(s5, { type: "update", modify: e6, remove: t5.removed, end: false, attributeEpoch: this._attributeStore.epoch, objectIdMap: t5.objectIdMap }), this.container.requestRender();
    }
  }
  _writeMeshes(e5) {
    const t5 = { timeZone: null, timeExtent: null }, s5 = new n3(e5.tile.id), r2 = e5.reader.getCursor();
    for (; r2.next(); ) {
      s5.entityStart(r2.getDisplayId(), r2.getZOrder());
      for (const i4 of r2.getMeshWriters()) i4.write(s5, this._resourceProxy, r2, e5.tile.createArcadeEvaluationOptions(t5), e5.tile.level);
      s5.entityEnd();
    }
    return __spreadProps(__spreadValues({}, s5.serialize().message), { tileId: e5.tile.id, requiresRefresh: false });
  }
  _setFilterState(e5) {
    const t5 = e5.displayId, s5 = this._attributeStore.getHighlightFlags(e5.objectId);
    this._attributeStore.setData(t5, 0, 0, s5 | (e5.visible ? W : 0));
  }
  _getSymbolForGraphic(e5) {
    return null != e5.symbol ? e5.symbol : null != this._effectiveRenderer ? this._effectiveRenderer.getSymbol(e5) : this._getNullSymbol(e5);
  }
  async _ensureSymbolResource(e5) {
    if (!e5.symbol) return;
    const t5 = await this._getSymbolInfo(e5.symbol);
    if (!t5) return;
    const s5 = t5.linearCIM.filter((e6) => "text" === e6.type);
    if (s5.length > 0) {
      const r2 = await this._getTextResources(e5, s5);
      return void (e5.symbolResource = { symbolInfo: t5, textInfo: r2 });
    }
    e5.symbolResource = { symbolInfo: t5 };
  }
  _getSymbolInfo(e5) {
    const t5 = e5.hash();
    return this._hashToSymbolInfo.has(t5) || this._hashToSymbolInfo.set(t5, this._createSymbolInfo(t5, e5).catch((e6) => null)), this._hashToSymbolInfo.get(t5);
  }
  async _createSymbolInfo(e5, t5) {
    const s5 = await this._convertToCIMSymbol(t5), r2 = await this._createLinearCIM(s5);
    return { hash: e5, cimSymbol: s5, linearCIM: r2, meshWriters: await this._createMeshWriters(s5, r2) };
  }
  async _convertToCIMSymbol(e5) {
    const t5 = j(e5);
    return "web-style" === t5.type ? this._convertToCIMSymbol(await t5.fetchSymbol({ acceptedFormats: ["cim", "web"] })) : t5;
  }
  async _createLinearCIM(e5) {
    return await Promise.all(_3.fetchResources(e5.symbol, this._cimResourceManager, [])), this.view.stage.cimAnalyzer.analyzeSymbolReference(e5, false);
  }
  async _createMeshWriters(e5, t5) {
    s(this._controller.signal);
    const s5 = this.container.instanceStore, r2 = this.view.stage.meshWriterRegistry, i4 = await u5(e5, t5, s5);
    return Promise.all(i4.map((e6) => r2.createMeshWriter(this._storage, this._resourceProxy, { tileInfo: this.view.featuresTilingScheme.tileInfo }, e6, null)));
  }
  _onTileUpdate(e5) {
    if (e5.added && e5.added.length > 0) for (const t5 of e5.added) this._updateTracking.addPromise(this._addTile(t5));
    if (e5.removed && e5.removed.length > 0) for (const t5 of e5.removed) this._removeTile(t5.key);
  }
  _createFeatureTile(e5) {
    const t5 = this.view.featuresTilingScheme.getTileBounds(u(), e5), s5 = this.view.featuresTilingScheme.getTileResolution(e5.level), r2 = new b4(e5, s5, t5[0], t5[3]);
    return this._tiles.set(e5, r2), this.container.addChild(r2), r2;
  }
  async _addTile(e5) {
    if (!this._attached) return;
    const t5 = this._graphicStore.queryItems(e5);
    if (!t5.length) return;
    const s5 = this._createFeatureTile(e5.key), r2 = F2.fromItems(e5, t5, this._metadata);
    await this._densifyItemsForDisplay([r2]), await this._fetchResources([r2]);
    const i4 = this._writeMeshes(r2);
    s5.onMessage({ type: "append", append: i4, clear: false, end: true, attributeEpoch: this._attributeStore.epoch, objectIdMap: r2.objectIdMap });
  }
  _removeTile(e5) {
    if (!this._tiles.has(e5)) return;
    const t5 = this._tiles.get(e5);
    this.container.removeChild(t5), t5.destroy(), this._tiles.delete(e5);
  }
  _getNullSymbol(e5) {
    const t5 = e5.geometry;
    return t5 ? e2(t5) ? O : o(t5) || n2(t5) ? y3 : this.defaultPointSymbolEnabled ? N3 : null : this.defaultPointSymbolEnabled ? N3 : null;
  }
  async _getTextResources(e5, t5) {
    const s5 = new Array(), r2 = new Array();
    for (let i4 = 0; i4 < t5.length; i4++) {
      const o6 = t5[i4], { resource: a5, overrides: n8 } = o6.textRasterizationParam;
      if (n8?.length > 0) {
        const t6 = v.resolveSymbolOverrides({ type: "CIMSymbolReference", primitiveOverrides: n8, symbol: { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, size: a5.symbol.height, anchorPointUnits: "Relative", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: a5.symbol, textString: a5.textString }], scaleSymbolsProportionally: true, respectFrame: true }] } }, e5, this.view.spatialReference, null, u3(e5.projectedGeometry), null, null);
        t6.then((e6) => {
          const t7 = e6.symbolLayers[0], { textString: s6 } = t7.markerGraphics[0];
          r2.push({ type: "cim-rasterization-info", resource: { type: "text", textString: s6 || "", font: a5.font } }), o6.text = a5.textString = s6 || "";
        }), s5.push(t6);
      } else r2.push({ type: "cim-rasterization-info", resource: a5 });
    }
    s5.length > 0 && await Promise.all(s5);
    const o5 = r2.map((e6) => this.view.stage.textureManager.rasterizeItem(e6)), a4 = await Promise.all(o5);
    n(a4);
    const n7 = /* @__PURE__ */ new Map();
    for (let i4 = 0; i4 < t5.length; i4++) {
      const e6 = t5[i4];
      n7.set(e6.textRasterizationParam.resource.symbol, { text: e6.text, glyphMosaicItems: a4[i4] });
    }
    return n7;
  }
  _cleanupSharedResources() {
    if (!this._cleanupRequired) return;
    const e5 = performance.now();
    if (e5 - this._lastCleanup < 5e3) return;
    this._cleanupRequired = false, this._lastCleanup = e5;
    const t5 = /* @__PURE__ */ new Set();
    for (const r2 of this._graphicStore.items()) {
      const e6 = r2.symbolResource?.symbolInfo.hash;
      t5.add(e6);
    }
    const s5 = new Set(this._hashToSymbolInfo.keys());
    for (const r2 of s5.values()) t5.has(r2) || this._hashToSymbolInfo.delete(r2);
  }
};
__decorate([a()], O3.prototype, "_effectiveRenderer", null), __decorate([a({ constructOnly: true })], O3.prototype, "layerId", void 0), __decorate([a({ constructOnly: true })], O3.prototype, "requestUpdateCallback", void 0), __decorate([a()], O3.prototype, "container", void 0), __decorate([a({ constructOnly: true })], O3.prototype, "graphics", void 0), __decorate([a()], O3.prototype, "renderer", void 0), __decorate([a()], O3.prototype, "_updateTracking", void 0), __decorate([a()], O3.prototype, "updating", null), __decorate([a()], O3.prototype, "view", void 0), __decorate([a()], O3.prototype, "updateRequested", void 0), __decorate([a()], O3.prototype, "defaultPointSymbolEnabled", void 0), O3 = __decorate([c("esri.views.2d.layers.graphics.GraphicsView2D")], O3);

export {
  O3 as O
};
//# sourceMappingURL=chunk-LVYL3ADJ.js.map
