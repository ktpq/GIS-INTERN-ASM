import {
  r3 as r2
} from "./chunk-RNIOM5K5.js";
import {
  o as o2
} from "./chunk-2PUTFA4S.js";
import {
  t
} from "./chunk-DFV3CADO.js";
import {
  w
} from "./chunk-NDVSPA6Q.js";
import {
  e as e2,
  t as t2
} from "./chunk-2M42TJQH.js";
import {
  e
} from "./chunk-34R4ZB6J.js";
import {
  _
} from "./chunk-AFCXMSTT.js";
import {
  i
} from "./chunk-JNCFJPS4.js";
import {
  M,
  f,
  h,
  o
} from "./chunk-4F4IE6P5.js";
import {
  r
} from "./chunk-6BQZ6NJY.js";
import {
  u2 as u
} from "./chunk-POW25PFR.js";

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/core.js
var t3 = class {
  constructor(t5, s5) {
    this.sourceTile = s5, this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.featureIndex = 0, this.uniqueSymbol = null, this._colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = t5;
  }
  colliders() {
    return this._colliders;
  }
};
var s = class {
  constructor(t5) {
    this.parts = [{ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }, { startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }], this.show = false, this.lastShow = false, this.tileSymbols = [t5], this.id = t5.id;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/util.js
function o3(t5, e4, o7, l5) {
  return s2(t5, e4, o7.level, o7.col, l5.key.level, l5.key.col);
}
function l(t5, e4, o7, l5) {
  return s2(t5, e4, o7.level, o7.row, l5.level, l5.row);
}
function s2(t5, e4, o7, l5, s5, r6) {
  const i4 = o7 - s5;
  if (i4 >= 0) return (e4 >> i4) + (l5 - (r6 << i4)) * (t5 >> i4);
  const n5 = -i4;
  return e4 - (r6 - (l5 << n5)) * (t5 >> n5) << n5;
}
var r3 = class {
  constructor(t5, e4, o7) {
    this._rows = Math.ceil(e4 / o7), this._columns = Math.ceil(t5 / o7), this._cellSize = o7, this.cells = new Array(this._rows);
    for (let l5 = 0; l5 < this._rows; l5++) {
      this.cells[l5] = new Array(this._columns);
      for (let t6 = 0; t6 < this._columns; t6++) this.cells[l5][t6] = [];
    }
  }
  getCell(t5, e4) {
    const o7 = Math.min(Math.max(Math.floor(e4 / this._cellSize), 0), this._rows - 1), l5 = Math.min(Math.max(Math.floor(t5 / this._cellSize), 0), this._columns - 1);
    return this.cells[o7] && this.cells[o7][l5] || null;
  }
  getCellSpan(t5, e4, o7, l5) {
    return [Math.min(Math.max(Math.floor(t5 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(e4 / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(o7 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(l5 / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
};
function i2(t5, o7, l5, s5, r6, i4, n5) {
  const c3 = o7[s5++];
  for (let a5 = 0; a5 < c3; a5++) {
    const c4 = new t3(i4, n5);
    c4.xTile = o7[s5++], c4.yTile = o7[s5++], c4.hash = o7[s5++], c4.priority = o7[s5++], c4.featureIndex = o7[s5++];
    const a6 = o7[s5++], h4 = c4.colliders();
    for (let t6 = 0; t6 < a6; t6++) {
      const t7 = o7[s5++], e4 = o7[s5++], r7 = o7[s5++], i5 = o7[s5++], n6 = !!o7[s5++], c5 = o7[s5++], a7 = l5[s5++], u5 = l5[s5++], f3 = o7[s5++], m = o7[s5++];
      h4.push({ xTile: t7, yTile: e4, dxPixels: r7, dyPixels: i5, hard: n6, partIndex: c5, width: f3, height: m, minLod: a7, maxLod: u5 });
    }
    const u4 = t5[s5++];
    for (let e4 = 0; e4 < u4; e4++) c4.textVertexRanges.push([t5[s5++], t5[s5++]]);
    const f2 = t5[s5++];
    for (let e4 = 0; e4 < f2; e4++) c4.iconVertexRanges.push([t5[s5++], t5[s5++]]);
    r6.push(c4);
  }
  return s5;
}
function n(t5, e4, o7) {
  for (const [l5, s5] of t5.symbols) c(t5, e4, o7, s5, l5);
}
function c(t5, e4, o7, l5, s5) {
  const r6 = t5.layerData.get(s5);
  if (3 === r6.type) {
    for (const e5 of l5) {
      const l6 = e5.uniqueSymbol;
      let s6;
      if (e5.selectedForRendering) {
        const e6 = l6.parts[0], r7 = e6.startOpacity, i4 = e6.targetOpacity;
        t5.allSymbolsFadingOut = t5.allSymbolsFadingOut && 0 === i4;
        const n5 = o7 ? Math.floor(127 * r7) | i4 << 7 : i4 ? 255 : 0;
        s6 = n5 << 24 | n5 << 16 | n5 << 8 | n5;
      } else s6 = 0;
      for (const [t6, o8] of e5.iconVertexRanges) for (let e6 = t6; e6 < t6 + o8; e6 += 4) r6.iconOpacity[e6 / 4] = s6;
      if (e5.selectedForRendering) {
        const e6 = l6.parts[1], r7 = e6.startOpacity, i4 = e6.targetOpacity;
        t5.allSymbolsFadingOut = t5.allSymbolsFadingOut && 0 === i4;
        const n5 = o7 ? Math.floor(127 * r7) | i4 << 7 : i4 ? 255 : 0;
        s6 = n5 << 24 | n5 << 16 | n5 << 8 | n5;
      } else s6 = 0;
      for (const [t6, o8] of e5.textVertexRanges) for (let e6 = t6; e6 < t6 + o8; e6 += 4) r6.textOpacity[e6 / 4] = s6;
    }
    r6.lastOpacityUpdate = e4, r6.opacityChanged = true;
  }
}
function a(e4, o7, l5, s5) {
  const r6 = e4.colliders();
  let i4, n5, c3, a5;
  for (const h4 of r6) {
    if (e4.uniqueSymbol?.show && e4.uniqueSymbol.parts[h4.partIndex].show && (i4 = h4.xScreen - s5[0] + h4.dxScreen, n5 = h4.yScreen - s5[1] + h4.dyScreen, c3 = i4 + h4.width, a5 = n5 + h4.height, w(l5, o7.x, o7.y, i4, n5, c3, a5))) return true;
  }
  return false;
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/RenderBucket.js
var a2 = class {
  constructor(t5, e4) {
    this.layerUIDs = [], this.isDestroyed = false, this._mesh = null, this._data = t5;
    let s5 = 1;
    const r6 = new Uint32Array(t5);
    this.layerUIDs = [];
    const i4 = r6[s5++];
    for (let n5 = 0; n5 < i4; n5++) this.layerUIDs[n5] = r6[s5++];
    this.bufferDataOffset = s5, e4 && (this.layer = e4.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return null == this._data;
  }
  get offset() {
    return this.bufferDataOffset;
  }
  get data() {
    return this._data;
  }
  nullifyData() {
    this._data = null;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this._data = null, u(this._mesh), this.isDestroyed = true);
  }
};
var o4 = class extends a2 {
  constructor(t5, e4) {
    super(t5, e4), this.type = 2, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const s5 = new Uint32Array(t5);
    let r6 = this.bufferDataOffset;
    this.lineIndexStart = s5[r6++], this.lineIndexCount = s5[r6++];
    const i4 = s5[r6++];
    if (i4 > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let t6 = 0; t6 < i4; t6++) {
        const t7 = s5[r6++], e5 = s5[r6++], i5 = s5[r6++];
        this.patternMap.set(t7, [e5, i5]);
      }
    }
    this.bufferDataOffset = r6;
  }
  get usedMemory() {
    return this.data?.byteLength ?? 0;
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
  }
  getMesh(t5) {
    if (this._mesh) return this._mesh;
    const e4 = this.data;
    if (!e4) return;
    const s5 = this.layer, r6 = s5.getPaintProperty("line-pattern"), a5 = void 0 !== r6, o7 = a5 && r6.isDataDriven;
    let h4 = false;
    if (!a5) {
      const t6 = s5.getPaintProperty("line-dasharray");
      h4 = void 0 !== t6 && t6.isDataDriven;
    }
    const u4 = this.patternMap, l5 = [];
    if (u4 && (o7 || h4)) for (const [i4, n5] of u4) l5.push({ group: 0, start: n5[0], count: n5[1] });
    else l5.push({ group: 0, start: this.lineIndexStart, count: this.lineIndexCount });
    const f2 = new Uint32Array(e4), y3 = new Int32Array(f2.buffer);
    let c3 = this.bufferDataOffset;
    const d = f2[c3++], p = new Int32Array(y3.buffer, 4 * c3, d);
    c3 += d;
    const g = f2[c3++], m = new Uint32Array(f2.buffer, 4 * c3, g), I = this.layer.lineMaterial.geometryLayout;
    if (!I) return;
    const x = { vertex: { geometryVB: { data: p, layout: I } }, index: { geometryIB: { data: m } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: l5 };
    return this._mesh = new o2(t5, x), this.nullifyData(), this._mesh;
  }
};
var h2 = class extends a2 {
  constructor(t5, e4) {
    super(t5, e4), this.type = 1, this._outlineMesh = null, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const s5 = new Uint32Array(t5);
    let r6 = this.bufferDataOffset;
    this.fillIndexStart = s5[r6++], this.fillIndexCount = s5[r6++], this.outlineIndexStart = s5[r6++], this.outlineIndexCount = s5[r6++];
    const i4 = s5[r6++];
    if (i4 > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let t6 = 0; t6 < i4; t6++) {
        const t7 = s5[r6++], e5 = s5[r6++], i5 = s5[r6++];
        this.patternMap.set(t7, [e5, i5]);
      }
    }
    this.bufferDataOffset = r6;
  }
  get usedMemory() {
    return this.data?.byteLength ?? 0;
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    u(this._outlineMesh);
  }
  getMesh(t5, e4) {
    if (0 === e4.value && this._mesh) return this._mesh;
    if (1 === e4.value && this._outlineMesh) return this._outlineMesh;
    if (!this.data) return null;
    const s5 = new Uint32Array(this.data), r6 = new Int32Array(s5.buffer);
    let a5 = 0, o7 = 0, h4 = 0, u4 = 0, l5 = this.bufferDataOffset;
    const f2 = s5[l5++];
    a5 = l5, l5 += f2;
    const y3 = s5[l5++];
    o7 = l5, l5 += y3;
    const c3 = s5[l5++];
    h4 = l5, l5 += c3;
    const d = s5[l5++];
    u4 = l5;
    const p = this.layer;
    if (y3 > 0) {
      const e5 = p.fillMaterial, h5 = new Int32Array(r6.buffer, 4 * a5, f2), u5 = new Uint32Array(s5.buffer, 4 * o7, y3), l6 = { vertex: { geometryVB: { data: h5, layout: e5.geometryLayout } }, index: { geometryIB: { data: u5 } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: [{ group: 0, start: this.fillIndexStart, count: this.fillIndexCount }] };
      this._mesh = new o2(t5, l6);
    }
    if (d > 0) {
      const e5 = p.outlineMaterial, a6 = new Int32Array(r6.buffer, 4 * h4, c3), o8 = new Uint32Array(s5.buffer, 4 * u4, d), l6 = { vertex: { geometryVB: { data: a6, layout: e5.geometryLayout } }, index: { geometryIB: { data: o8 } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: [{ group: 0, start: this.outlineIndexStart, count: this.outlineIndexCount }] };
      this._outlineMesh = new o2(t5, l6);
    }
    return this.nullifyData(), 0 === e4.value ? this._mesh : this._outlineMesh;
  }
};
var u2 = class extends a2 {
  constructor(t5, e4, i4) {
    super(t5, e4), this.type = 3, this.iconPerPageElementsMap = /* @__PURE__ */ new Map(), this.glyphPerPageElementsMap = /* @__PURE__ */ new Map(), this.isIconSDF = false, this.opacityChanged = false, this.lastOpacityUpdate = 0, this.symbols = [], this._textMesh = null;
    const n5 = new Uint32Array(t5), a5 = new Int32Array(t5), o7 = new Float32Array(t5);
    let h4 = this.bufferDataOffset;
    this.isIconSDF = !!n5[h4++];
    const u4 = n5[h4++], l5 = n5[h4++], f2 = n5[h4++], y3 = new e(u4, l5, f2, 0), c3 = n5[h4++];
    for (let s5 = 0; s5 < c3; s5++) {
      const t6 = n5[h4++], e5 = n5[h4++], s6 = n5[h4++];
      this.iconPerPageElementsMap.set(t6, [e5, s6]);
    }
    const d = n5[h4++];
    for (let s5 = 0; s5 < d; s5++) {
      const t6 = n5[h4++], e5 = n5[h4++], s6 = n5[h4++];
      this.glyphPerPageElementsMap.set(t6, [e5, s6]);
    }
    const p = n5[h4++], g = n5[h4++];
    this.iconOpacity = new Int32Array(p), this.textOpacity = new Int32Array(g), h4 = i2(n5, a5, o7, h4, this.symbols, i4, y3), this.bufferDataOffset = h4;
  }
  get usedMemory() {
    return (this.data?.byteLength ?? 0) + i(this.iconOpacity) + i(this.textOpacity);
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let t5 = 0;
    for (const e4 of this.iconPerPageElementsMap.values()) t5 += e4[1];
    for (const e4 of this.glyphPerPageElementsMap.values()) t5 += e4[1];
    return t5 / 3;
  }
  doDestroy() {
    this._textMesh = u(this._textMesh);
  }
  updateOpacityInfo() {
    if (!this.opacityChanged) return;
    this.opacityChanged = false;
    const t5 = this.iconOpacity, e4 = this._mesh?.vertexBuffers.get("opacity");
    e4 && t5.length > 0 && t5.byteLength === e4.usedMemory && e4.setSubData(t5, 0, 0, t5.length);
    const s5 = this.textOpacity, r6 = this._textMesh?.vertexBuffers.get("opacity");
    r6 && s5.length > 0 && s5.byteLength === r6.usedMemory && r6.setSubData(s5, 0, 0, s5.length);
  }
  getMesh(t5, e4) {
    if (0 === e4.value && this._mesh) return this._mesh;
    if (1 === e4.value && this._textMesh) return this._textMesh;
    let s5 = this.bufferDataOffset;
    if (!this.data) return null;
    const r6 = new Uint32Array(this.data), a5 = new Int32Array(r6.buffer), o7 = r6[s5++], h4 = s5;
    s5 += o7;
    const u4 = r6[s5++], l5 = s5;
    s5 += u4;
    const f2 = r6[s5++], y3 = s5;
    s5 += f2;
    const c3 = r6[s5++], d = s5;
    s5 += c3;
    const p = this.layer;
    if (this.iconPerPageElementsMap.size > 0) {
      const e5 = p.iconMaterial, s6 = [];
      for (const [t6, r7] of this.iconPerPageElementsMap) s6.push({ group: 0, start: r7[0], count: r7[1] });
      const f3 = new Int32Array(a5.buffer, 4 * h4, o7), y4 = new Uint32Array(r6.buffer, 4 * l5, u4), c4 = this.iconOpacity, d2 = e5.opacityLayout, g = { vertex: { geometry: { data: f3, layout: e5.geometryLayout }, opacity: { data: c4, layout: d2 } }, index: { geometryIB: { data: y4 } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: s6 };
      this._mesh = new o2(t5, g);
    }
    if (this.glyphPerPageElementsMap.size > 0) {
      const e5 = p.textMaterial, s6 = [];
      for (const [t6, r7] of this.glyphPerPageElementsMap) s6.push({ group: 0, start: r7[0], count: r7[1] });
      const o8 = new Int32Array(a5.buffer, 4 * y3, f2), h5 = new Uint32Array(r6.buffer, 4 * d, c3), u5 = this.textOpacity, l6 = e5.opacityLayout, g = { vertex: { geometry: { data: o8, layout: e5.geometryLayout }, opacity: { data: u5, layout: l6 } }, index: { geometryIB: { data: h5 } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: s6 };
      this._textMesh = new o2(t5, g);
    }
    return this.nullifyData(), 0 === e4.value ? this._mesh : this._textMesh;
  }
};
var l2 = class extends a2 {
  constructor(t5, e4) {
    super(t5, e4), this.type = 4, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const s5 = new Uint32Array(t5);
    let r6 = this.bufferDataOffset;
    this.circleIndexStart = s5[r6++], this.circleIndexCount = s5[r6++], this.bufferDataOffset = r6;
  }
  get usedMemory() {
    return this.data?.byteLength ?? 0;
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
  }
  getMesh(t5) {
    if (this._mesh) return this._mesh;
    if (!this.data) return;
    const e4 = new Uint32Array(this.data), s5 = new Int32Array(e4.buffer);
    let r6 = this.bufferDataOffset;
    const a5 = e4[r6++], o7 = new Int32Array(s5.buffer, 4 * r6, a5);
    r6 += a5;
    const h4 = e4[r6++], u4 = new Uint32Array(e4.buffer, 4 * r6, h4), l5 = this.layer.circleMaterial.geometryLayout;
    if (!l5) return;
    const f2 = { vertex: { geometryVB: { data: o7, layout: l5 } }, index: { geometryIB: { data: u4 } }, groups: [{ index: "geometryIB", primitive: _.TRIANGLES }], parts: [{ group: 0, start: this.circleIndexStart, count: this.circleIndexCount }] };
    return this._mesh = new o2(t5, f2), this._mesh;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js
var t4 = 32;
var c2 = 1.5;
var e3 = 200;

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTile.js
var y = class _y extends r2 {
  constructor(e4, t5, s5, r6, a5, o7, h4, n5 = null) {
    super(e4, t5, s5, r6, a5, o7, t, t), this.styleRepository = h4, this._owner = n5, this.type = "vector-tile", this._referenced = 1, this._hasSymbolBuckets = false, this._usedMemory = 256, this.layerData = /* @__PURE__ */ new Map(), this.status = "loading", this.allSymbolsFadingOut = false, this.lastOpacityUpdate = 0, this.symbols = /* @__PURE__ */ new Map(), this.isCoverage = false, this.neededForCoverage = false, this.decluttered = false, this.parentTile = null, this.childrenTiles = /* @__PURE__ */ new Set(), this.featureIndex = null, this.triangleCount = 0, this._processed = false, this.id = e4.id;
  }
  get styleLayerUIDs() {
    return Array.from(this.layerData.keys());
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < e3;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < e3);
  }
  get wasRequested() {
    return "errored" === this.status || "loaded" === this.status || "reloading" === this.status;
  }
  setData(e4) {
    this.changeDataImpl(e4), this.requestRender(), this.ready(), this._processed = true;
  }
  deleteLayerData(e4) {
    let t5 = false;
    for (const s5 of e4) {
      const e5 = this.layerData.get(s5);
      e5 && (this._usedMemory -= e5.usedMemory, 3 === e5.type && this.symbols.delete(s5) && (t5 = true), e5.destroy(), this.layerData.delete(s5));
    }
    this._owner?.updateTileSize(this), t5 && (this.featureIndex?.clear(), this.emit("symbols-changed")), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerData.size > 0;
  }
  hasFeatures() {
    const e4 = this.layerData.values();
    for (const t5 of e4) if (t5.hasData()) return true;
    return false;
  }
  dispose() {
    "unloaded" !== this.status && (_y._destroyRenderBuckets(this.layerData), this.layerData.clear(), this.featureIndex = null, this._usedMemory = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    0 === --this._referenced && (this._owner?.onDisposeTile(this), this.dispose(), this.stage = null);
  }
  retain() {
    ++this._referenced;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get usedMemoryPerReference() {
    return this._usedMemory / (this._referenced || 1);
  }
  changeDataImpl(e4) {
    this.featureIndex?.clear();
    let t5 = false;
    if (e4) {
      const { bucketsWithData: s5, emptyBuckets: r6 } = e4, a5 = this._createRenderBuckets(s5);
      if (r6 && r6.byteLength > 0) {
        const e5 = new Uint32Array(r6);
        for (const t6 of e5) this._deleteLayerData(t6);
      }
      for (const [e5, i4] of a5) this._deleteLayerData(e5), 3 === i4.type && (this.symbols.set(e5, i4.symbols), t5 = true), this._usedMemory += i4.usedMemory, this.layerData.set(e5, i4);
      this._owner?.updateTileSize(this);
    }
    this._hasSymbolBuckets = false;
    for (const s5 of this.layerData.values()) 3 === s5.type && (this._hasSymbolBuckets = true);
    t5 && this.emit("symbols-changed");
  }
  attachWithContext(e4) {
    this.stage = { context: e4, trashDisplayObject(e5) {
      e5.processDetach();
    }, untrashDisplayObject: () => false };
  }
  setTransform(a5) {
    super.setTransform(a5);
    const i4 = this.resolution / (a5.resolution * a5.pixelRatio), o7 = this.width / this.rangeX * i4, h4 = this.height / this.rangeY * i4, n5 = [0, 0];
    a5.toScreen(n5, [this.x, this.y]);
    const l5 = this.transforms.tileUnitsToPixels;
    o(l5), M(l5, l5, n5), h(l5, l5, Math.PI * a5.rotation / 180), f(l5, l5, [o7, h4, 1]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e2(), tileMat3: e2(), tileUnitsToPixels: e2() };
  }
  static _destroyRenderBuckets(e4) {
    if (!e4) return;
    const t5 = /* @__PURE__ */ new Set();
    for (const s5 of e4.values()) t5.has(s5) || (s5.destroy(), t5.add(s5));
    e4.clear();
  }
  _createRenderBuckets(e4) {
    const t5 = /* @__PURE__ */ new Map(), s5 = /* @__PURE__ */ new Map();
    for (const r6 of e4) {
      const e5 = this._deserializeBucket(r6, s5);
      for (const s6 of e5.layerUIDs) t5.set(s6, e5);
    }
    return t5;
  }
  _deserializeBucket(e4, t5) {
    let s5 = t5.get(e4);
    if (s5) return s5;
    switch (new Uint32Array(e4)[0]) {
      case 1:
        s5 = new h2(e4, this.styleRepository);
        break;
      case 2:
        s5 = new o4(e4, this.styleRepository);
        break;
      case 3:
        s5 = new u2(e4, this.styleRepository, this);
        break;
      case 4:
        s5 = new l2(e4, this.styleRepository);
    }
    return t5.set(e4, s5), s5;
  }
  _deleteLayerData(e4) {
    if (!this.layerData.has(e4)) return;
    const t5 = this.layerData.get(e4);
    this._usedMemory -= t5.usedMemory, t5.destroy(), this.layerData.delete(e4);
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/CollisionJob.js
var s3 = class {
  constructor(s5, o7, n5, i4, l5, c3) {
    this._symbols = s5, this._styleRepository = i4, this._zoom = l5, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = /* @__PURE__ */ new Map(), this._allNeededMatrices = /* @__PURE__ */ new Map(), this._gridIndex = new r3(o7, n5, t4), this._si = Math.sin(Math.PI * c3 / 180), this._co = Math.cos(Math.PI * c3 / 180), i4.cachedStyles && (this._styleProps = i4.cachedStyles);
    for (const t5 of s5) for (const r6 of t5.symbols) this._allNeededMatrices.has(r6.tile) || this._allNeededMatrices.set(r6.tile, t2(r6.tile.transforms.tileUnitsToPixels));
  }
  work(e4) {
    const t5 = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const r6 = this._symbols[this._currentLayerCursor], s5 = this._getProperties(r6.styleLayerUID), o7 = this._styleRepository.layerContexts?.get(r6.styleLayerUID);
      for (; this._currentSymbolCursor < r6.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - t5 > e4) return false;
        const n5 = r6.symbols[this._currentSymbolCursor];
        if (!n5.uniqueSymbol?.show) continue;
        const i4 = this._computeCoordinates(n5, s5, o7), l5 = n5.uniqueSymbol;
        if (!l5.show) continue;
        const { iconAllowOverlap: c3, textAllowOverlap: h4 } = s5;
        for (const e5 of i4) {
          if (!e5.enabled) continue;
          const t6 = l5.parts[e5.partIndex];
          if (!t6.show) continue;
          !(e5.partIndex ? h4 : c3) && this._doesCollide(e5) && (e5.hard ? l5.show = false : t6.show = false);
        }
        l5.show && this._insertColliders(l5.parts, i4, s5);
      }
    }
    return true;
  }
  _insertColliders(e4, t5, r6) {
    const { iconIgnorePlacement: s5, textIgnorePlacement: o7 } = r6;
    for (const n5 of t5) {
      if (!n5.enabled) continue;
      if (n5.partIndex ? o7 : s5) continue;
      if (!e4[n5.partIndex].show) continue;
      const t6 = n5.xScreen + n5.dxScreen, r7 = n5.yScreen + n5.dyScreen, i4 = t6 + n5.width, l5 = r7 + n5.height, [c3, h4, a5, d] = this._gridIndex.getCellSpan(t6, r7, i4, l5);
      for (let e5 = h4; e5 <= d; e5++) for (let t7 = c3; t7 <= a5; t7++) {
        this._gridIndex.cells[e5][t7].push(n5);
      }
    }
  }
  _computeCoordinates(e4, t5, r6) {
    const { iconRotationAlignment: s5, textRotationAlignment: o7, iconTranslate: n5, iconTranslateAnchor: i4, textTranslate: l5, textTranslateAnchor: c3 } = t5, h4 = this._si, a5 = this._co, d = this._zoom, y3 = this._allNeededMatrices.get(e4.tile), u4 = e4.uniqueSymbol, x = e4.colliders(r6);
    let _2 = 0;
    for (const f2 of x) {
      const [e5, t6] = 0 === f2.partIndex ? n5 : l5, r7 = 0 === f2.partIndex ? i4 : c3, u5 = f2.minLod <= d && d <= f2.maxLod;
      _2 += u5 ? 0 : 1, f2.enabled = u5, f2.xScreen = f2.xTile * y3[0] + f2.yTile * y3[3] + y3[6], f2.yScreen = f2.xTile * y3[1] + f2.yTile * y3[4] + y3[7], 0 === r7 ? (f2.xScreen += a5 * e5 - h4 * t6, f2.yScreen += h4 * e5 + a5 * t6) : (f2.xScreen += e5, f2.yScreen += t6), 1 === (0 === f2.partIndex ? s5 : o7) ? (f2.dxScreen = f2.dxPixels, f2.dyScreen = f2.dyPixels) : (f2.dxScreen = a5 * (f2.dxPixels + f2.width / 2) - h4 * (f2.dyPixels + f2.height / 2) - f2.width / 2, f2.dyScreen = h4 * (f2.dxPixels + f2.width / 2) + a5 * (f2.dyPixels + f2.height / 2) - f2.height / 2);
    }
    return x.length > 0 && _2 === x.length && u4 && (u4.show = false), x;
  }
  _getProperties(e4) {
    const t5 = this._styleProps.get(e4);
    if (t5) return t5;
    const r6 = this._styleRepository.getLayerStyleProperties?.(e4, this._zoom);
    return this._styleProps.set(e4, r6), r6;
  }
  _doesCollide(e4) {
    const t5 = e4.xScreen + e4.dxScreen, r6 = e4.yScreen + e4.dyScreen, s5 = t5 + e4.width, o7 = r6 + e4.height, [n5, i4, l5, c3] = this._gridIndex.getCellSpan(t5, r6, s5, o7);
    for (let h4 = i4; h4 <= c3; h4++) for (let i5 = n5; i5 <= l5; i5++) {
      const n6 = this._gridIndex.cells[h4][i5];
      for (const i6 of n6) {
        if (null != i6.labelId && null != e4.labelId && i6.labelId === e4.labelId) continue;
        const n7 = i6.xScreen + i6.dxScreen, l6 = i6.yScreen + i6.dyScreen, c4 = n7 + i6.width, h5 = l6 + i6.height;
        if (!(s5 < n7 || t5 > c4 || o7 < l6 || r6 > h5)) return true;
      }
    }
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolDeclutterer.js
function o5(e4) {
  return (e4.uniqueSymbol?.show && e4.uniqueSymbol?.lastShow) ?? false;
}
function i3(e4, t5) {
  if (e4.priority - t5.priority) return e4.priority - t5.priority;
  if (o5(e4) && !o5(t5)) return -1;
  if (o5(t5) && !o5(e4)) return 1;
  const i4 = e4.tile.key, s5 = t5.tile.key;
  return i4.world - s5.world ? i4.world - s5.world : i4.level - s5.level ? i4.level - s5.level : i4.row - s5.row ? i4.row - s5.row : i4.col - s5.col ? i4.col - s5.col : e4.xTile - t5.xTile ? e4.xTile - t5.xTile : e4.yTile - t5.yTile;
}
var s4 = class {
  get running() {
    return this._running;
  }
  constructor(e4, t5, o7, i4, s5, r6, n5, l5) {
    this.selectionMode = e4, this._visibleTiles = t5, this._symbolRepository = o7, this._styleRepository = i4, this._createCollisionJob = s5, this._assignTileSymbolsOpacity = r6, this._symbolLayerSorter = n5, this._isLayerVisible = l5, this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  setScreenSize(e4, t5) {
    this._screenWidth === e4 && this._screenHeight === t5 || this.restart(), this._screenWidth = e4, this._screenHeight = t5;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  continue(e4) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const t5 = performance.now();
      if (!this._selectionJob.work(e4)) return false;
      if (this._selectionJobCompleted = true, 0 === (e4 = Math.max(0, e4 - (performance.now() - t5)))) return false;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const t5 = performance.now();
      if (!this._collisionJob.work(e4)) return false;
      if (this._collisionJobCompleted = true, 0 === (e4 = Math.max(0, e4 - (performance.now() - t5)))) return false;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const t5 = performance.now();
      if (!this._opacityJob.work(e4)) return false;
      if (this._opacityJobCompleted = true, 0 === (e4 = Math.max(0, e4 - (performance.now() - t5)))) return false;
    }
    return this._running = false, true;
  }
  _getFilteredByLayer() {
    let e4;
    if (this._styleRepository?.layerContexts) for (const t5 of this._symbolRepository.uniqueSymbols) {
      const o7 = this._styleRepository.layerContexts?.get(t5.styleLayerUID);
      if (o7?.attributeView) for (const i4 of t5.uniqueSymbols) {
        e4 ??= /* @__PURE__ */ new Map(), e4.get(t5.styleLayerUID) || e4.set(t5.styleLayerUID, /* @__PURE__ */ new Set());
        const s5 = e4.get(t5.styleLayerUID);
        o7.isFeatureFiltered(i4.id) && s5.add(i4.id);
      }
    }
    return e4;
  }
  _resetSelection() {
    for (let e4 = 0; e4 < this._symbolRepository.uniqueSymbols.length; e4++) {
      const t5 = this._symbolRepository.uniqueSymbols[e4];
      for (let e5 = 0; e5 < t5.uniqueSymbols.length; e5++) {
        const o7 = t5.uniqueSymbols[e5];
        for (const e6 of o7.tileSymbols) e6.selectedForRendering = false;
      }
    }
  }
  _createSelectionJob() {
    const e4 = "feature-tile" === this.selectionMode ? n2 : l3, t5 = this._symbolRepository.uniqueSymbols;
    this._resetSelection();
    const o7 = [];
    let s5 = 0, r6 = 0;
    const c3 = this._isLayerVisible, y3 = this._getFilteredByLayer(), a5 = this._styleRepository?.layerContexts;
    function h4(n5) {
      let l5;
      const h5 = performance.now();
      for (; r6 < t5.length; r6++, s5 = 0) {
        const i4 = t5[r6], u5 = i4.styleLayerUID, f2 = y3?.get(u5);
        let b = 0;
        if (a5) {
          b = a5.get(u5).layerOrder;
        }
        if (!c3(u5)) {
          o7[r6] || (o7[r6] = { styleLayerUID: u5, layerOrder: b, symbols: [] });
          continue;
        }
        o7[r6] ||= { styleLayerUID: u5, symbols: [], layerOrder: b };
        const m = o7[r6];
        for (; s5 < i4.uniqueSymbols.length; s5++) {
          if (l5 = i4.uniqueSymbols[s5], s5 % 100 == 99 && performance.now() - h5 > n5) return false;
          if (l5.lastShow = l5.show, l5.id && f2?.has(l5.id)) {
            l5.show = false, l5.parts[0].show = false, l5.parts[1].show = false;
            continue;
          }
          const t6 = e4(l5);
          if (t6) {
            t6.selectedForRendering = true, m.symbols.push(t6), l5.show = true;
            for (const e5 of l5.parts) e5.show = true;
          } else l5.show = false;
        }
      }
      for (const e5 of o7) e5.symbols.sort(i3);
      return o7.sort((e5, t6) => t6.layerOrder - e5.layerOrder), true;
    }
    const u4 = this._symbolLayerSorter;
    return { work: h4, get sortedSymbols() {
      return o7.sort(u4);
    } };
  }
  _createOpacityJob() {
    const t5 = this._assignTileSymbolsOpacity, o7 = this._visibleTiles;
    let i4 = 0;
    function s5(e4, o8) {
      for (const t6 of e4.symbols.values()) r4(t6, o8);
      t5(e4, o8);
      for (const t6 of e4.childrenTiles) s5(t6, o8);
    }
    return { work(r6) {
      const n5 = performance.now();
      for (; i4 < o7.length; i4++) {
        if (performance.now() - n5 > r6) return false;
        const l5 = o7[i4];
        if (null != l5.parentTile) continue;
        const c3 = performance.now();
        l5 instanceof y ? s5(l5, c3) : t5(l5, c3);
      }
      return true;
    } };
  }
};
function r4(e4, o7) {
  for (const i4 of e4) {
    const e5 = i4.uniqueSymbol;
    for (const i5 of e5.parts) {
      const s5 = i5.targetOpacity > 0.5 ? 1 : -1;
      i5.startOpacity += s5 * ((o7 - i5.startTime) / e3), i5.startOpacity = Math.min(Math.max(i5.startOpacity, 0), 1), i5.startTime = o7, i5.targetOpacity = e5.show && i5.show ? 1 : 0;
    }
  }
}
function n2(e4) {
  let t5 = null, o7 = null, i4 = null;
  for (const s5 of e4.tileSymbols) {
    const e5 = s5.tile;
    e5.isReady && e5.isCoverage ? t5 = s5 : e5.isReady ? o7 = s5 : e5.rendering && (i4 = s5);
  }
  return t5 ?? o7 ?? i4;
}
function l3(e4) {
  let t5 = null, o7 = false, i4 = false;
  for (const s5 of e4.tileSymbols) if (!i4 || !o7) {
    const e5 = s5.tile;
    (!t5 || e5.isCoverage || e5.neededForCoverage && !o7) && (t5 = s5, (e5.neededForCoverage || e5.isCoverage) && (i4 = true), e5.isCoverage && (o7 = true));
  }
  return i4 ? t5 : null;
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolRepository.js
var o6 = class _o {
  static fromSymbols(e4, t5) {
    let s5 = e4.length;
    if (s5 >= n3) {
      let i4 = t5;
      do {
        i4 /= 2, s5 /= 4;
      } while (s5 > r5 && i4 > y2);
      const n5 = new r3(t5, t5, i4);
      for (const t6 of e4) n5.getCell(t6.xTile, t6.yTile).push(t6);
      return new _o(t5, e4, n5);
    }
    return new _o(t5, e4, null);
  }
  constructor(e4, t5, s5) {
    this.tileCoordRange = e4, this._symbols = t5, this._index = s5;
  }
  addSymbols(e4) {
    for (const t5 of e4) this._symbols.push(t5);
    if (this._index) for (const t5 of e4) this._index.getCell(t5.xTile, t5.yTile).push(t5);
  }
  removeSymbols(e4) {
    const t5 = new Set(e4);
    if (this._symbols = this._symbols.filter((e5) => !t5.has(e5)), this._index) for (const s5 of this._index.cells) for (let e5 = 0; e5 < s5.length; e5++) s5[e5] = s5[e5].filter((e6) => !t5.has(e6));
  }
  getSymbols() {
    return this._symbols;
  }
  getCandidate(e4, t5, s5, i4) {
    if (!this._index) {
      for (const l6 of this._symbols) if (s5 === l6.hash && Math.abs(e4 - l6.xTile) <= i4 && Math.abs(t5 - l6.yTile) <= i4) return l6;
      return null;
    }
    const l5 = this._index.getCellSpan(e4 - i4, t5 - i4, e4 + i4, t5 + i4), [o7, n5, r6, y3] = l5;
    for (let a5 = n5; a5 <= y3; a5++) for (let l6 = o7; l6 <= r6; l6++) {
      const o8 = this._index.cells[a5][l6];
      for (const l7 of o8) if (s5 === l7.hash && Math.abs(e4 - l7.xTile) <= i4 && Math.abs(t5 - l7.yTile) <= i4) return l7;
    }
    return null;
  }
};
var n3 = 32;
var r5 = 8;
var y2 = 64;
var a3 = 20;
var u3 = class {
  constructor(e4, t5) {
    this.tileCoordRange = e4, this._visibleTiles = t5, this._indexMapByTile = /* @__PURE__ */ new Map(), this._uniqueSymbolsByStyleLayerId = /* @__PURE__ */ new Map();
  }
  get uniqueSymbols() {
    return null == this._uniqueSymbolLayerArray && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  registerVectorTile(e4, t5) {
    const s5 = this._ensureIndexMap(e4), i4 = t5?.values() ?? s5.keys();
    for (const l5 of i4) {
      const e5 = s5.get(l5);
      e5 && (this._removeSymbols(l5, e5.getSymbols()), s5.delete(l5));
    }
    this._addSymbols(e4.key, s5, e4.symbols), this._invalidate();
  }
  unregisterVectorTile(e4) {
    this._removeTile(e4), this._invalidate();
  }
  registerFeatureTile(e4) {
    this._ensureIndexMap(e4), this._invalidate();
  }
  unregisterFeatureTile(e4) {
    this._removeTile(e4), this._invalidate();
  }
  insertFeatureTileMetrics(e4, t5) {
    const s5 = this._indexMapByTile.get(e4);
    if (!s5) throw new Error(`tile ${e4.id} not registered!`);
    this._addSymbols(e4.key, s5, h3(t5)), this._invalidate();
  }
  removeFeatureTileMetrics(e4, t5) {
    const s5 = this._indexMapByTile.get(e4);
    if (!s5) return;
    const i4 = h3(t5);
    for (const [l5, o7] of s5.entries()) {
      const e5 = i4.get(l5);
      e5 && (o7.removeSymbols(e5), this._removeSymbols(l5, e5));
    }
    this._invalidate();
  }
  deleteStyleLayers(e4) {
    for (const t5 of this._indexMapByTile.values()) for (const s5 of e4) {
      const e5 = t5.get(s5);
      e5 && (this._removeSymbols(s5, e5.getSymbols()), t5.delete(s5));
    }
    this._invalidate();
  }
  querySymbols(e4, s5, i4, l5) {
    const o7 = [];
    for (const [n5, r6] of this._uniqueSymbolsByStyleLayerId.entries()) for (const l6 of r6) {
      const r7 = l6.tileSymbols.find((e5) => e5.selectedForRendering);
      r7 && a(r7, e4, s5, i4) && o7.push({ vtlSymbol: r7, styleLayerUID: n5, tileKey: r7.tile.key });
    }
    return o7;
  }
  _ensureIndexMap(e4) {
    let t5 = this._indexMapByTile.get(e4);
    return t5 || (t5 = /* @__PURE__ */ new Map(), this._indexMapByTile.set(e4, t5)), t5;
  }
  _invalidate() {
    this._uniqueSymbolLayerArray = null;
  }
  _addSymbols(e4, t5, s5) {
    for (const [i4, l5] of s5) {
      let e5 = t5.get(i4);
      e5 ? e5.addSymbols(l5) : (e5 = o6.fromSymbols(l5, this.tileCoordRange), t5.set(i4, e5));
    }
    this._updateUniqueSymbols(e4, s5);
  }
  _removeTile(e4) {
    const t5 = this._indexMapByTile.get(e4);
    if (t5) {
      for (const [e5, s5] of t5.entries()) this._removeSymbols(e5, s5.getSymbols());
      this._indexMapByTile.delete(e4), this._invalidate();
    }
  }
  _removeSymbols(e4, t5) {
    for (const s5 of t5) {
      const t6 = s5.uniqueSymbol;
      if (t6) {
        if (t6.tileSymbols = t6.tileSymbols.filter((e5) => e5 !== s5), 0 === t6.tileSymbols.length) {
          const s6 = this._uniqueSymbolsByStyleLayerId.get(e4);
          s6.delete(t6), 0 === s6.size && this._uniqueSymbolsByStyleLayerId.delete(e4);
        }
        s5.uniqueSymbol = null;
      }
    }
  }
  _updateUniqueSymbols(t5, s5) {
    if (0 !== s5.size) {
      for (const e4 of this._visibleTiles) e4.parentTile || e4.key.world !== t5.world || e4.key.level === t5.level && !e4.key.equals(t5) || this._matchSymbols(e4, t5, s5);
      for (const [t6, i4] of s5) for (const s6 of i4) if (!s6.uniqueSymbol) {
        s6.uniqueSymbol = new s(s6);
        let i5 = this._uniqueSymbolsByStyleLayerId.get(t6);
        i5 || (i5 = /* @__PURE__ */ new Set(), this._uniqueSymbolsByStyleLayerId.set(t6, i5)), i5.add(s6.uniqueSymbol);
      }
    }
  }
  _matchSymbols(e4, t5, l5) {
    if (e4.key.level > t5.level) {
      const s5 = e4.key.level - t5.level;
      if (e4.key.row >> s5 !== t5.row || e4.key.col >> s5 !== t5.col) return;
    }
    if (t5.level > e4.key.level) {
      const s5 = t5.level - e4.key.level;
      if (t5.row >> s5 !== e4.key.row || t5.col >> s5 !== e4.key.col) return;
    }
    const o7 = /* @__PURE__ */ new Map();
    for (const [n5, r6] of l5) {
      const l6 = [], y3 = e4.key.level < t5.level ? 1 : 1 << Math.abs(e4.key.level - t5.level), u4 = this._indexMapByTile.get(e4), h4 = u4?.get(n5);
      if (h4) for (const o8 of r6) {
        if (o8.uniqueSymbol) continue;
        const n6 = o3(this.tileCoordRange, o8.xTile, t5, e4.key), r7 = l(this.tileCoordRange, o8.yTile, t5, e4.key), u5 = -a3, f2 = this.tileCoordRange + a3;
        if (!(n6 >= u5 && n6 < f2 && r7 >= u5 && r7 < f2)) {
          l6.push(o8);
          continue;
        }
        const m = h4.getCandidate(n6, r7, o8.hash, y3), c3 = m?.uniqueSymbol;
        c3 ? (o8.uniqueSymbol = c3, c3.tileSymbols.push(o8)) : l6.push(o8);
      }
      l6.length > 0 && o7.set(n5, l6);
    }
    for (const s5 of e4.childrenTiles || []) this._matchSymbols(s5, t5, o7);
  }
  _createUniqueSymbolLayerArray() {
    const e4 = this._uniqueSymbolsByStyleLayerId, t5 = new Array(e4.size);
    let s5, i4 = 0;
    for (const [l5, o7] of e4) {
      const e5 = new Array(o7.size);
      s5 = 0;
      for (const t6 of o7) e5[s5++] = t6;
      t5[i4] = { styleLayerUID: l5, uniqueSymbols: e5 }, i4++;
    }
    return t5;
  }
};
function h3(e4) {
  const t5 = /* @__PURE__ */ new Map();
  for (const s5 of e4) {
    const e5 = s5.labelClassId;
    let i4 = t5.get(e5);
    i4 || (i4 = [], t5.set(e5, i4)), i4.push(s5);
  }
  return t5;
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolFader.js
var l4 = 0.5;
var a4 = 1e-6;
var n4 = class {
  constructor(e4, s5, l5, n5, c3, h4 = c2) {
    this.styleRepository = s5, this._declutterBudget = h4, this._tileToHandle = /* @__PURE__ */ new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._offsetFromScreenCenter = [0, 0], this._completed = false, this._fading = r(false);
    const y3 = (t5, e5, i4) => this._createCollisionJob(t5, e5, i4), _2 = (t5) => {
      const e5 = this.styleRepository.getStyleLayerByUID?.(t5);
      if (e5) {
        if (this._zoom + a4 < e5.minzoom || this._zoom - a4 >= e5.maxzoom) return false;
        const t6 = e5.getLayoutProperty?.("visibility");
        if (t6 && 1 === t6.getValue()) return false;
      }
      const i4 = this.styleRepository.layerContexts?.get(t5);
      return false !== i4?.effectiveVisible;
    }, u4 = (t5, e5) => (this.styleRepository.getStyleLayerByUID?.(t5.styleLayerUID)?.z ?? 0) - (this.styleRepository.getStyleLayerByUID?.(e5.styleLayerUID)?.z ?? 0);
    this._symbolRepository = new u3(c3, n5), this._symbolDeclutterer = new s4(e4, n5, this._symbolRepository, this.styleRepository, y3, l5, u4, _2);
  }
  get symbolRepository() {
    return this._symbolRepository;
  }
  _createCollisionJob(t5, i4, s5) {
    return this.updateDecluttererViewState(), new s3(t5, i4, s5, this.styleRepository, this._zoom, this._viewState.rotation);
  }
  get fading() {
    return this._fading.value;
  }
  get decluttererOffset() {
    return this._offsetFromScreenCenter;
  }
  registerFeatureTile(t5) {
    this.symbolRepository ? (this.symbolRepository.registerFeatureTile(t5), this.restartDeclutter()) : console.error("InternalError: Symbol repository not yet initialized");
  }
  unregisterFeatureTile(t5) {
    this.symbolRepository ? (this._symbolRepository.unregisterFeatureTile(t5), this.restartDeclutter()) : console.error("InternalError: Symbol repository not yet initialized");
  }
  insertFeatureTileMetrics(t5, e4) {
    this.symbolRepository ? (this.symbolRepository.insertFeatureTileMetrics(t5, e4), this.restartDeclutter()) : console.error("InternalError: Symbol repository not yet initialized");
  }
  removeFeatureTileMetrics(t5, e4) {
    this.symbolRepository ? (this.symbolRepository.removeFeatureTileMetrics(t5, e4), this.restartDeclutter()) : console.error("InternalError: Symbol repository not yet initialized");
  }
  addTile(t5) {
    t5.decluttered = false, this._tileToHandle.set(t5, t5.on("symbols-changed", () => {
      this._symbolRepository.registerVectorTile(t5), this.restartDeclutter();
    })), this._symbolRepository.registerVectorTile(t5), this.restartDeclutter();
  }
  removeTile(t5) {
    const e4 = this._tileToHandle.get(t5);
    e4 && (this._symbolRepository.unregisterVectorTile(t5), this.restartDeclutter(), e4.remove(), this._tileToHandle.delete(t5));
  }
  update(t5, e4) {
    this._zoom = t5, this._viewState = { scale: e4.scale, rotation: e4.rotation, center: [e4.center[0], e4.center[1]], size: [e4.size[0], e4.size[1]] };
    const i4 = [0, 0];
    e4.toScreen(i4, e4.center);
    const s5 = [0, 0];
    return e4.toScreen(s5, this._declutterViewState.center), this._offsetFromScreenCenter[0] = i4[0] - s5[0], this._offsetFromScreenCenter[1] = i4[1] - s5[1], this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = false, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = false, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((t5) => t5.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(t5) {
    this._symbolRepository.deleteStyleLayers(t5);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this.updateDecluttererViewState(), this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(this._declutterBudget), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    null != this._stableNotificationHandle && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this._fading.value = false;
    }, (1 + l4) * e3);
  }
  _notifyUnstable() {
    null != this._stableNotificationHandle && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this._fading.value = true;
  }
  updateDecluttererViewState() {
    this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._offsetFromScreenCenter[0] = 0, this._offsetFromScreenCenter[1] = 0;
  }
};

export {
  e3 as e,
  n,
  y,
  n4 as n2
};
//# sourceMappingURL=chunk-XRKPNYQ7.js.map
