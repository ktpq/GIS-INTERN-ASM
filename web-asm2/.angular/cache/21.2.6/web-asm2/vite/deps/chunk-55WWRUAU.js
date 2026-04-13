import {
  i as i2,
  n as n2,
  o2 as o,
  r2
} from "./chunk-WF3B26ZC.js";
import {
  m
} from "./chunk-JIM7FQZ6.js";
import {
  e,
  t
} from "./chunk-YJLDUHU6.js";
import {
  e as e2,
  n as n3,
  r as r3,
  r2 as r4,
  t as t2
} from "./chunk-OTSIUC5Q.js";
import {
  h,
  l as l2
} from "./chunk-HOSXEWC2.js";
import {
  w
} from "./chunk-TMEOMGUP.js";
import {
  Nt,
  V
} from "./chunk-PCKGNCDO.js";
import {
  N as N2
} from "./chunk-AFCXMSTT.js";
import {
  c
} from "./chunk-N7DF7CMI.js";
import {
  p
} from "./chunk-PZHHE5EW.js";
import {
  h as h2,
  u as u2
} from "./chunk-3UZX244W.js";
import {
  y as y2
} from "./chunk-UAMJLSJM.js";
import {
  a,
  s
} from "./chunk-K3VHKD6G.js";
import {
  R
} from "./chunk-ZEZJAXNN.js";
import {
  i
} from "./chunk-JNCFJPS4.js";
import {
  v
} from "./chunk-GLXZFAAW.js";
import {
  Fe,
  Ie,
  y
} from "./chunk-WUSMTFBU.js";
import {
  c as c2
} from "./chunk-RJMYNJ36.js";
import {
  f
} from "./chunk-DHIQ5CF2.js";
import {
  u
} from "./chunk-SLHRVNEB.js";
import {
  N,
  b
} from "./chunk-TUCZDNFG.js";
import {
  has,
  l3 as l,
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js
var t3 = 1.25;
var r5 = class {
  get length() {
    return this._pos;
  }
  constructor(t5, r12) {
    this._pos = 0;
    const e4 = r12 ? this._roundToNearest(r12, t5.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(e4), this._buffer = new t5(this._array), this._ctor = t5, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(t5, r12) {
    const e4 = Math.round(t5);
    return 1 === r12 ? e4 : e4 + (r12 - e4 % r12);
  }
  _ensureSize(r12) {
    if (this._pos + r12 >= this._buffer.length) {
      const e4 = this._roundToNearest((this._array.byteLength + r12 * this._buffer.BYTES_PER_ELEMENT) * t3, this._buffer.BYTES_PER_ELEMENT), s6 = new ArrayBuffer(e4), i5 = new this._ctor(s6);
      i5.set(this._buffer, 0), this._array = s6, this._buffer = i5, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t5) {
    this._ensureSize(t5);
  }
  writeF32(t5) {
    this._ensureSize(1);
    const r12 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t5, this._pos++, r12;
  }
  push(t5) {
    this._ensureSize(1);
    const r12 = this._pos;
    return this._buffer[this._pos++] = t5, r12;
  }
  writeFixed(t5) {
    this._buffer[this._pos++] = t5;
  }
  setValue(t5, r12) {
    this._buffer[t5] = r12;
  }
  i1616Add(t5, r12, e4) {
    this._i16View[2 * t5] += r12, this._i16View[2 * t5 + 1] += e4;
  }
  getValue(t5) {
    return this._buffer[t5];
  }
  getValueF32(t5) {
    return new Float32Array(this._array, 4 * t5, 1)[0];
  }
  incr(t5) {
    if (this._buffer.length < t5) throw new Error("Increment index overflows the target buffer");
    this._buffer[t5]++;
  }
  decr(t5) {
    this._buffer[t5]--;
  }
  writeRegion(t5) {
    this._ensureSize(t5.length);
    const r12 = this._pos;
    return this._buffer.set(t5, this._pos), this._pos += t5.length, r12;
  }
  writeManyFrom(t5, r12, e4) {
    this._ensureSize(e4 - r12);
    for (let s6 = r12; s6 !== e4; s6++) this.writeFixed(t5._buffer[s6]);
  }
  buffer() {
    const t5 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t5;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(t5) {
    this._pos = t5;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexDataWriter.js
var e3 = 6;
var i3 = 4;
var r6 = class {
  constructor(r12, s6, n7 = 0) {
    const c5 = e3 * n7 * Uint32Array.BYTES_PER_ELEMENT, h4 = i3 * n7 * s6.stride, u3 = s6.stride / 4, _3 = s6.attributes.find((t5) => "pos" === t5.name || "position" === t5.name);
    if (!_3) throw new Error("InternalError: Unable to find position attribute");
    this.layout = __spreadProps(__spreadValues({}, s6), { position: _3 }), this._indices = new r5(Uint32Array, c5), this._vertices = new r5(Uint32Array, h4), this._metrics = new r5(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = u3, this._instanceId = r12;
  }
  serialize(t5) {
    const e4 = this._indices.buffer(), i5 = this._vertices.buffer(), r12 = this._metrics.length ? this._metrics.buffer() : null;
    return t5.push(e4, i5), { instanceId: this._instanceId, layout: this.layout, indices: e4, vertices: i5, metrics: r12 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(t5) {
    this._vertices.ensureSize(t5);
  }
  indexEnsureSize(t5) {
    this._indices.ensureSize(t5);
  }
  writeIndex(t5) {
    this._indices.push(t5);
  }
  writeVertex(t5) {
    this._vertices.push(t5);
  }
  writeVertexRegion(t5) {
    this._vertices.writeRegion(t5);
  }
  writeVertexF32(t5) {
    this._vertices.writeF32(t5);
  }
  writeMetric(t5) {
    this._metrics.incr(this._metricCountOffset), t5.serialize(this._metrics);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js
var n4 = class {
  constructor(e4, r12 = 0) {
    this._id = e4, this._sizeHint = r12, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._didEntityStart = false, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = { metric: null, writer: null, start: 0, sortKey: 0, instanceId: 0, layoutHash: 0, indexStart: 0, vertexStart: 0, textureKey: 0, metricBoxLenPointer: 0 }, this._requiresRefresh = false, this._entities = new r5(Uint32Array, this._sizeHint * e.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const t5 = new Array(), e4 = [], r12 = this._entities.buffer();
    for (const i5 of this._instanceIdToVertexData.values()) e4.push(i5.serialize(t5));
    return { message: { data: e4, entities: r12 }, transferList: t5 };
  }
  get requiresRefresh() {
    return this._requiresRefresh;
  }
  set requiresRefresh(t5) {
    this._requiresRefresh = t5;
  }
  vertexStart() {
    return this._current.vertexStart ?? 0;
  }
  vertexCount() {
    return this._current.writer?.vertexCount ?? 0;
  }
  indexCount() {
    return this._current.writer?.indexCount ?? 0;
  }
  vertexEnsureSize(t5) {
    this._current.writer.vertexEnsureSize(t5);
  }
  indexEnsureSize(t5) {
    this._current.writer.indexEnsureSize(t5);
  }
  vertexWrite(t5) {
    this._current.writer.writeVertex(t5);
  }
  vertexWriteRegion(t5) {
    this._current.writer.writeVertexRegion(t5);
  }
  vertexWriteF32(t5) {
    this._current.writer.writeVertexF32(t5);
  }
  recordBounds(t5, e4, r12, i5) {
  }
  indexWrite(t5) {
    this._current.writer.writeIndex(t5);
  }
  metricStart(t5) {
    this._current.metric = t5, this._current.metric.recordStart = this.recordCount();
  }
  metricEnd() {
    const t5 = this._current.writer;
    this._current.metric && (this._current.metric.recordCount = this.recordCount() - this._current.metric.recordStart), this._current.metric?.bounds.length && this._current.metric?.recordCount ? (t5.writeMetric(this._current.metric), this._current.metric = null) : this._current.metric = null;
  }
  metricBoxWrite(t5) {
    this._current.metric.bounds.push(t5);
  }
  entityStart(t5, e4 = t5) {
    this._entityIdIndex = this._entities.push(t5), this._entitySortKeyIndex = this._entities.writeF32(e4), this._entityRecordCountOffset = this._entities.push(0), this._didEntityStart = true;
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    if (!this._didEntityStart) return;
    0 === this.entityRecordCount() ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset), this._didEntityStart = false;
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(t5, e4, r12 = 0) {
    this._current.writer = this._getVertexWriter(t5, e4), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = t5, this._current.layoutHash = e4.hash, this._current.textureKey = r12;
  }
  recordEnd(t5 = 0) {
    const r12 = this._current.vertexStart, i5 = this._current.writer.vertexCount - r12;
    if (!i5) return false;
    const n7 = this._current.indexStart, s6 = this._current.writer.indexCount - n7;
    return this._recordIndexStart = n7, this._recordIndexCount = s6, this._recordVertexStart = r12, this._recordVertexCount = i5, this._entities.incr(this._entityRecordCountOffset), t.write(this._entities, this._current.instanceId, this._current.textureKey, n7, s6, r12, i5, t5), true;
  }
  copyLast(t5, r12) {
    const i5 = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), t.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, i5, this._recordVertexCount, 0);
    const n7 = this._current.writer.indexWriter, s6 = this._current.writer.vertexWriter, c5 = this._recordIndexStart + this._recordIndexCount, u3 = this._recordVertexCount;
    for (let e4 = this._recordIndexStart; e4 !== c5; e4++) {
      const t6 = n7.getValue(e4);
      n7.push(t6 + u3);
    }
    const o3 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, h4 = this._recordVertexStart * o3, _3 = (this._recordVertexStart + this._recordVertexCount) * o3;
    for (let e4 = h4; e4 !== _3; e4++) {
      const t6 = s6.getValue(e4);
      s6.push(t6);
    }
    const d3 = this._current.writer.layout.position, a4 = d3.packPrecisionFactor ?? 1, x2 = d3.offset / Uint32Array.BYTES_PER_ELEMENT, y4 = t5 * a4, f3 = r12 * a4;
    for (let e4 = i5 * o3; e4 <= s6.length; e4 += o3) s6.i1616Add(e4 + x2, y4, f3);
  }
  copyLastFrom(t5, e4, r12) {
    const i5 = t5._entities.getValue(t5._entityIdIndex);
    if (i5 !== this._entities.getValue(this._entityIdIndex)) {
      const e5 = t5._entities.getValueF32(t5._entitySortKeyIndex);
      this.entityStart(i5, e5);
    }
    this.recordStart(t5._current.instanceId, t5._current.writer.layout, t5._current.textureKey);
    const n7 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, s6 = this._current.vertexStart, c5 = t5._current.vertexStart - s6, u3 = this._current.writer.indexWriter, o3 = this._current.writer.vertexWriter, h4 = t5._current.writer.indexWriter, _3 = t5._current.writer.vertexWriter;
    for (let S = t5._current.indexStart; S !== h4.length; S++) {
      const t6 = h4.getValue(S);
      u3.push(t6 - c5);
    }
    for (let S = t5._current.vertexStart * n7; S !== _3.length; S++) {
      const t6 = _3.getValue(S);
      o3.push(t6);
    }
    const d3 = this._current.writer.layout.position, a4 = d3.packPrecisionFactor ?? 1, x2 = d3.offset / Uint32Array.BYTES_PER_ELEMENT, y4 = e4 * a4, f3 = r12 * a4;
    for (let S = s6 * n7; S <= o3.length; S += n7) o3.i1616Add(S + x2, y4, f3);
    this.recordEnd();
  }
  _getVertexWriter(t5, e4) {
    const i5 = this._instanceIdToVertexData;
    return i5.has(t5) || i5.set(t5, new r6(t5, e4, this._sizeHint)), i5.get(t5);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/urlUtils.js
function r7(r12) {
  return "url" in r12 && "urlHash" in r12 ? __spreadProps(__spreadValues({}, r12), { url: "" }) : r12;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/AResourceProxy.js
var s2 = class {
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/ResourceProxy.js
var s3 = class extends s2 {
  constructor(e4) {
    super(), this._fetcher = e4, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._controller.abort();
  }
  get _abortOptions() {
    return { signal: this._controller.signal };
  }
  enqueueRequest(r12) {
    const s6 = r7(r12.resource), o3 = l(JSON.stringify(s6));
    return this._pendingIds.has(o3) || (this._pendingIds.add(o3), this._pendingRequests.push(__spreadProps(__spreadValues({}, r12), { resourceId: o3 }))), o3;
  }
  async fetchEnqueuedResources() {
    const e4 = this._pendingRequests;
    if (this._pendingIds.clear(), this._pendingRequests = [], 0 === e4.length) return;
    const t5 = await this._fetcher.fetch(e4, this._abortOptions);
    for (let r12 = 0; r12 < t5.length; r12++) {
      const s6 = e4[r12].resourceId;
      this._resourceIdToResource.set(s6, t5[r12]);
    }
  }
  async fetchResourceImmediate(e4) {
    const t5 = await this._fetcher.fetch([e4]);
    if (1 !== t5.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
    return t5[0];
  }
  async fetchDictionaryResourceImmediate(e4) {
    const t5 = await this._fetcher.fetchDictionary([e4]);
    if (1 !== t5.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
    return t5[0];
  }
  getResource(e4) {
    return this._resourceIdToResource.get(e4);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/AComputedField.js
var s4 = class {
  destroy() {
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/CachedField.js
var r8 = class extends s4 {
  constructor(e4) {
    super(), this._field = e4;
  }
  resize(e4) {
    throw new Error("Method not implemented.");
  }
  read(e4, r12) {
    return e4.readAttribute(this._field);
  }
  readWithDefault(e4, r12) {
    return e4.readAttribute(this._field);
  }
  hasArcadeDependency(e4) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedExpression.js
function c3(e4, t5) {
  const r12 = 43758.5453 * Math.sin(12.9898 * e4 + 78.233 * t5);
  return r12 - Math.floor(r12);
}
var i4 = class _i extends s4 {
  static async create(r12, s6) {
    const a4 = await h2(r12, s6.spatialReference), c5 = l(r12);
    return new _i(a4, c5);
  }
  constructor(e4, t5) {
    super(), this._compiled = e4, this._cacheKey = t5;
  }
  resize(e4) {
  }
  read(e4, t5) {
    return this.hasArcadeDependency("scale") || "system" !== t5.$view.timeZone ? n3(this._compiled, e4, t5) : this._readCached(e4, t5);
  }
  readWithDefault(e4, t5, r12) {
    return this.hasArcadeDependency("scale") || "system" !== t5.$view.timeZone ? t2(this._compiled, e4, t5, r12) : this._readWithDefaultCached(e4, t5, r12);
  }
  hasArcadeDependency(e4) {
    return this._compiled?.references(e4) ?? false;
  }
  _getCacheKey(e4) {
    if (!this._compiled?.references("timeProperties")) return this._cacheKey;
    const { currentStart: t5, currentEnd: r12 } = e4.$view.timeProperties;
    return this._cacheKey + c3(t5 ?? 1, r12 ?? 1);
  }
  _readCached(e4, t5) {
    if (e4.setCache(this._getCacheKey(t5)), e4.hasCachedValue()) return e4.getCachedValue();
    const s6 = n3(this._compiled, e4, t5);
    return e4.setCachedValue(s6), s6;
  }
  _readWithDefaultCached(e4, t5, r12) {
    if (e4.setCache(this._getCacheKey(t5)), e4.hasCachedValue()) return e4.getCachedValue();
    const a4 = t2(this._compiled, e4, t5, r12);
    return e4.setCachedValue(a4), a4;
  }
};

// node_modules/@arcgis/core/layers/support/labelFormatUtils.js
function h3(e4, r12) {
  if (null == e4) return "";
  const t5 = r12.domain;
  if (t5) {
    if ("codedValue" === t5.type || "coded-value" === t5.type) {
      const r13 = e4;
      for (const e5 of t5.codedValues) if (e5.code === r13) return e5.name;
    } else if ("range" === t5.type) {
      const { max: n7, min: o3 } = y(r12), a4 = +e4;
      if (null != o3 && null != n7 && o3 <= a4 && a4 <= n7) return t5.name;
    }
  }
  let u3 = e4;
  return Ie(r12) ? u3 = b(u3, N("short-date")) : Fe(r12) && (u3 = c(+u3)), u3 || "";
}

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedLegacyLabelExpression.js
var a2 = class _a extends s4 {
  static async create(t5, s6) {
    const l5 = p(t5);
    return new _a((e4) => l5.replaceAll(/{[^}]*}/g, (t6) => {
      const s7 = t6.slice(1, -1), a4 = e4.metadata.fieldsIndex.get(s7);
      if (null == a4) return t6;
      const l6 = e4.readAttribute(s7);
      return null == l6 ? "" : h3(l6, a4);
    }));
  }
  constructor(r12) {
    super(), this._evaluator = r12;
  }
  resize(r12) {
  }
  read(r12, e4) {
    return this._evaluator(r12);
  }
  readWithDefault(r12, e4, s6) {
    const a4 = this._evaluator(r12);
    return r3(a4) ? s6 : a4;
  }
  hasArcadeDependency(r12) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/DictionaryTemplate.js
var r9 = class extends s4 {
  constructor(e4, s6) {
    super(), this._template = e4, this._parts = a(e4.template, s6);
  }
  resize(t5) {
  }
  read(t5, s6) {
    return s(t5, this._parts, this._template.textCase);
  }
  readWithDefault(t5, s6, r12) {
    return s(t5, this._parts, this._template.textCase);
  }
  hasArcadeDependency(t5) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/NormalizedField.js
var r10 = class extends s4 {
  constructor(e4, r12) {
    super(), this._field = e4, this._normalizationInfo = r12;
  }
  resize(e4) {
    throw new Error("Method not implemented.");
  }
  read(e4, r12) {
    return this._readNormalized(e4);
  }
  readWithDefault(e4, r12) {
    return this._readNormalized(e4);
  }
  hasArcadeDependency(e4) {
    return false;
  }
  _readNormalized(e4) {
    const r12 = e4.readAttribute(this._field);
    if (null == r12) return null;
    const { normalizationField: t5, normalizationTotal: i5, normalizationType: o3 } = this._normalizationInfo, a4 = e4.readAttribute(t5);
    switch (o3 ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a4 ? a4 ? r12 / a4 : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(r12) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return i5 ? r12 / i5 * 100 : null;
    }
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js
var n5 = () => n.getLogger("esri.views.2d.layers.FeatureLayerView2D");
var o2 = { getAttribute: (r12, e4) => r12.readAttribute(e4) };
async function a3(e4, a4) {
  try {
    const s6 = await c2(e4, a4);
    return s6.isStandardized || n5().error(new r("sql-parse-error", "expression is not standardized", { where: e4 })), (t5, a5) => {
      const i5 = t5.readArcadeFeature();
      try {
        return s6.testFeatureCompiled(i5, o2, a5.currentUser);
      } catch (u3) {
        return n5().warn(new r("sql-runtime-error", "Encountered an error when evaluating where clause", { where: e4, error: u3 })), true;
      }
    };
  } catch (s6) {
    return n5().warn(new r("sql-runtime-error", "Encountered an error when evaluating where clause", { where: e4, error: s6 })), (r12) => true;
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedAttributeStorage.js
var c4 = () => n.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage");
var m2 = 4294967295;
function p2(t5, e4, s6) {
  if (!(t5.length > e4)) for (; t5.length <= e4; ) t5.push(s6);
}
var l3 = class {
  constructor(t5) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = t5;
  }
  createBitset() {
    const t5 = this._bitsets.length;
    return this._bitsets.push(e2.create(this._allocatedSize, n2)), t5 + 1;
  }
  createDictionaryTemplateField(t5, e4) {
    return new r9(t5, e4);
  }
  async createComputedField(e4, s6 = false) {
    if (e4.expression) try {
      if (!this.compilationOptions) throw new Error("InternalError: Compilation options not defined");
      if (s6) return await a2.create(e4.expression, this.compilationOptions);
      return await i4.create(e4.expression, this.compilationOptions);
    } catch (u3) {
      const s7 = new r("featurelayer", "Failed to compile arcade expression", { error: u3, expression: e4.expression });
      return c4().error(s7), null;
    }
    if (e4.normalizationType || e4.normalizationField) return new r10(e4.field, e4);
    if (e4.field) return new r8(e4.field);
    const i5 = new r("featurelayer", "Unable to create computed field. No expression or field found", { info: e4 });
    return c4().error(i5), null;
  }
  async createWhereClause(t5) {
    return t5 ? a3(t5, this.compilationOptions.fields) : null;
  }
  getBitset(t5) {
    return this._bitsets[t5 - 1];
  }
  getComputedNumeric(t5, e4) {
    return this.getComputedNumericAtIndex(t5 & n2, 0);
  }
  setComputedNumeric(t5, e4, s6) {
    return this.setComputedNumericAtIndex(t5 & n2, s6, 0);
  }
  getComputedString(t5, e4) {
    return this.getComputedStringAtIndex(t5 & n2, 0);
  }
  setComputedString(t5, e4, s6) {
    return this.setComputedStringAtIndex(t5 & n2, 0, s6);
  }
  getComputedNumericAtIndex(t5, e4) {
    const s6 = t5 & n2;
    return this._ensureNumeric(e4, s6), this._numerics[e4][s6];
  }
  setComputedNumericAtIndex(t5, e4, s6) {
    const r12 = t5 & n2;
    this._ensureNumeric(e4, r12), this._numerics[e4][r12] = s6;
  }
  getPackedChunkId(t5) {
    const e4 = t5 & n2;
    return this._ensureInstanceId(e4), this._instanceIds[e4];
  }
  setPackedChunkId(t5, e4) {
    const s6 = t5 & n2;
    this._ensureInstanceId(s6), this._instanceIds[s6] = e4;
  }
  getComputedStringAtIndex(t5, e4) {
    const s6 = t5 & n2;
    return this._ensureString(e4, s6), this._strings[e4][s6];
  }
  setComputedStringAtIndex(t5, e4, s6) {
    const r12 = t5 & n2;
    this._ensureString(e4, r12), this._strings[e4][r12] = s6;
  }
  getXMin(t5) {
    return this._bounds[4 * (t5 & n2)];
  }
  getYMin(t5) {
    return this._bounds[4 * (t5 & n2) + 1];
  }
  getXMax(t5) {
    return this._bounds[4 * (t5 & n2) + 2];
  }
  getYMax(t5) {
    return this._bounds[4 * (t5 & n2) + 3];
  }
  setBounds(t5, e4, s6 = false) {
    const r12 = t5 & n2;
    if (!s6 && !this._dirtyBitset.has(t5)) return this._bounds[4 * r12] !== m2;
    this._dirtyBitset.unset(t5);
    const n7 = e4.readGeometryWorldSpace();
    if (p2(this._bounds, 4 * r12 + 4, 0), !n7 || !n7.coords.length) return this._bounds[4 * r12] = m2, this._bounds[4 * r12 + 1] = m2, this._bounds[4 * r12 + 2] = m2, this._bounds[4 * r12 + 3] = m2, false;
    let o3 = 1 / 0, u3 = 1 / 0, d3 = -1 / 0, h4 = -1 / 0;
    return n7.forEachVertex((t6, e5) => {
      o3 = Math.min(o3, t6), u3 = Math.min(u3, e5), d3 = Math.max(d3, t6), h4 = Math.max(h4, e5);
    }), this._bounds[4 * r12] = o3, this._bounds[4 * r12 + 1] = u3, this._bounds[4 * r12 + 2] = d3, this._bounds[4 * r12 + 3] = h4, true;
  }
  getBounds(t5, e4) {
    const i5 = this.getXMin(e4), r12 = this.getYMin(e4), n7 = this.getXMax(e4), o3 = this.getYMax(e4);
    return v(t5, i5, r12, n7, o3), i5 !== m2;
  }
  _ensureNumeric(t5, e4) {
    this._numerics[t5] || (this._numerics[t5] = []);
    p2(this._numerics[t5], e4, 0);
  }
  _ensureInstanceId(t5) {
    p2(this._instanceIds, t5, 0);
  }
  _ensureString(t5, e4) {
    this._strings[t5] || (this._strings[t5] = []);
    p2(this._strings[t5], e4, null);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilterEvaluator.js
var m3 = 1;
var d2 = 2;
var p3 = class _p {
  constructor(t5) {
    this._geometryBounds = u(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = t5;
  }
  static async create(t5) {
    const e4 = new _p(t5);
    return await e4.update(t5.filterJSON, t5.spatialReference), e4;
  }
  get hash() {
    return this._hash;
  }
  check(t5, e4) {
    return this._applyFilter(t5, e4);
  }
  invalidate() {
    this._idToVisibility.forEach((t5, e4) => {
      this._idToVisibility.set(e4, 0);
    });
  }
  setKnownIds(t5) {
    for (const e4 of t5) this._idToVisibility.set(e4, m3);
  }
  setTrue(t5) {
    const e4 = [], i5 = [], r12 = new Set(t5);
    return this._idToVisibility.forEach((t6, s6) => {
      const o3 = !!(this._idToVisibility.get(s6) & m3), a4 = r12.has(s6);
      !o3 && a4 ? e4.push(s6) : o3 && !a4 && i5.push(s6), this._idToVisibility.set(s6, a4 ? m3 | d2 : 0);
    }), { show: e4, hide: i5 };
  }
  createQuery() {
    const { geometry: t5, spatialRel: e4, where: i5, timeExtent: r12, objectIds: s6 } = this;
    return R.fromJSON({ geometry: t5, spatialRel: e4, where: i5, timeExtent: r12, objectIds: s6 });
  }
  async update(t5, e4) {
    this._hash = JSON.stringify(t5);
    const i5 = await w(t5, null, e4);
    await Promise.all([this._setGeometryFilter(i5), this._setIdFilter(i5), this._setAttributeFilter(i5), this._setTimeFilter(i5)]);
  }
  async _setAttributeFilter(t5) {
    if (!t5?.where) return this._clause = null, void (this.where = null);
    this._clause = await a3(t5.where, this._serviceInfo.fieldsIndex), this.where = t5.where;
  }
  _setIdFilter(t5) {
    this._idsToShow = t5?.objectIds && new Set(t5.objectIds), this._idsToHide = t5?.hiddenIds && new Set(t5.hiddenIds), this.objectIds = t5?.objectIds;
  }
  async _setGeometryFilter(t5) {
    if (!t5?.geometry) return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const e4 = t5.geometry, i5 = t5.spatialRel ?? "esriSpatialRelIntersects", s6 = await h(i5, e4, this._serviceInfo.geometryType);
    f(this._geometryBounds, e4), this._spatialQueryOperator = s6, this.geometry = e4, this.spatialRel = i5;
  }
  _setTimeFilter(i5) {
    if (this.timeExtent = this._timeOperator = null, i5?.timeExtent) {
      if (!this._serviceInfo.timeInfo) {
        const r12 = new r("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i5.timeExtent);
        return void n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(r12);
      }
      this.timeExtent = i5.timeExtent, this._timeOperator = l2(this._serviceInfo.timeInfo, i5.timeExtent, r4.Shared);
    }
  }
  _applyFilter(t5, e4) {
    return this._filterByGeometry(t5) && this._filterById(t5) && this._filterByTime(t5) && this._filterByExpression(t5, e4);
  }
  _filterByExpression(t5, e4) {
    return !this.where || this._clause(t5, e4);
  }
  _filterById(t5) {
    return (!this._idsToHide?.size || !this._idsToHide.has(t5.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(t5.getObjectId()));
  }
  _filterByGeometry(t5) {
    if (!this.geometry) return true;
    const e4 = t5.readGeometryWorldSpace();
    return !!e4 && this._spatialQueryOperator(e4);
  }
  _filterByTime(t5) {
    return null == this._timeOperator || this._timeOperator(t5);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js
var n6 = (n7, l5) => n7 && ((...n8) => l5.warn("DEBUG:", ...n8)) || (() => null);
var l4 = false;

// node_modules/@arcgis/core/views/2d/layers/features/support/DisplayIdGenerator.js
var s5 = class {
  constructor(e4) {
    this.data = e4, this._referenceCount = 0;
  }
  static {
    this.estimatedMemory = 20;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return 0 === this._referenceCount;
  }
};
var r11 = class {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  get usedMemory() {
    let t5 = 0;
    return t5 += i(this._freeIdsGenerationA), t5 += i(this._freeIdsGenerationB), t5 += this._objectIdToDisplayId.size * (s5.estimatedMemory + 8), t5;
  }
  createIdForObjectId(e4) {
    let r12 = this._objectIdToDisplayId.get(e4);
    return r12 ? r12.increment() : (r12 = new s5(r2(this._getFreeId(), false)), r12.increment(), this._objectIdToDisplayId.set(e4, r12)), r12.data;
  }
  releaseIdForObjectId(e4) {
    const t5 = this._objectIdToDisplayId.get(e4);
    t5 && (t5.decrement(), t5.empty() && (this._objectIdToDisplayId.delete(e4), this._freeIds.push(t5.data)));
  }
  getDisplayIdForObjectId(e4) {
    const t5 = this._objectIdToDisplayId.get(e4);
    return null != t5 ? t5.data : null;
  }
  releaseAll() {
    for (const e4 of this._objectIdToDisplayId.values()) this._freeIds.push(e4.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/AttributeStore.js
function g(t5, e4) {
  if (!t5 || !e4) return t5;
  switch (e4) {
    case "radius":
    case "distance":
      return 2 * t5;
    case "diameter":
    case "width":
      return t5;
    case "area":
      return Math.sqrt(t5);
  }
  return t5;
}
var f2 = () => n.getLogger("esri.views.layers.2d.features.support.AttributeStore");
var _2 = n6(l4, f2());
var y3 = { sharedArrayBuffer: has("esri-shared-array-buffer"), atomics: has("esri-atomics") };
var m4 = class {
  constructor(t5, e4, i5) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: s6, layout: r12, textureOnly: a4 } = e4;
    this.textureOnly = a4 || false, this.pixelType = s6, this.layout = r12, this._resetRange(), this.size = t5, this.isLocal = i5, a4 || (this.data = this._initData(s6, t5));
  }
  get usedMemory() {
    return this.data?.byteLength ?? 0;
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(t5, e4) {
    const i5 = this.data;
    for (let s6 = 0; s6 < this.size * this.size; s6++) i5[s6 * this.texelSize + t5] &= ~e4;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t5, e4) {
    const i5 = this.data;
    for (let s6 = 0; s6 < this.size * this.size; s6++) i5[s6 * this.texelSize + t5] |= 255 & e4;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t5, e4, i5) {
    const s6 = this.data;
    for (const r12 of i5) s6[r12 * this.texelSize + t5] |= e4, this.dirtyStart = Math.min(this.dirtyStart, r12), this.dirtyEnd = Math.max(this.dirtyEnd, r12);
  }
  setComponentTexel(t5, e4, i5) {
    this.data[i5 * this.texelSize + t5] |= e4, this.dirtyStart = Math.min(this.dirtyStart, i5), this.dirtyEnd = Math.max(this.dirtyEnd, i5);
  }
  unsetComponentTexel(t5, e4, i5) {
    this.data[i5 * this.texelSize + t5] &= ~e4, this.dirtyStart = Math.min(this.dirtyStart, i5), this.dirtyEnd = Math.max(this.dirtyEnd, i5);
  }
  getData(t5, e4) {
    const i5 = o(t5);
    return this.data[i5 * this.texelSize + e4];
  }
  setData(t5, e4, i5) {
    const s6 = o(t5), r12 = 1 << e4;
    0 !== (this.layout & r12) ? null != this.data && (this.data[s6 * this.texelSize + e4] = i5, this.dirtyStart = Math.min(this.dirtyStart, s6), this.dirtyEnd = Math.max(this.dirtyEnd, s6)) : f2().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(t5) {
    if (this.size = t5, !this.textureOnly) {
      const e4 = this._initData(this.pixelType, t5), i5 = this.data;
      e4.set(i5), this.data = e4;
    }
  }
  toMessage() {
    const t5 = this.dirtyStart, e4 = this.dirtyEnd, i5 = this.texelSize;
    if (t5 > e4) return null;
    this._resetRange();
    const s6 = !this.isLocal, r12 = this.pixelType, a4 = this.layout, n7 = this.data;
    return { start: t5, end: e4, data: s6 && n7.slice(t5 * i5, (e4 + 1) * i5) || null, pixelType: r12, layout: a4 };
  }
  _initData(t5, e4) {
    const i5 = ArrayBuffer, s6 = i2(t5), r12 = new s6(new i5(e4 * e4 * 4 * s6.BYTES_PER_ELEMENT));
    for (let a4 = 0; a4 < r12.length; a4 += 4) r12[a4 + 1] = 255;
    return r12;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
};
var b2 = class {
  constructor(t5) {
    this._client = t5, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = Nt, this._idsToHighlight = /* @__PURE__ */ new Map(), this._arcadeDependencies = /* @__PURE__ */ new Set(), this._initialized = false, this.version = 0, this._idGenerator = new r11(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (null != this._blockDescriptors) return;
    const t5 = N2.FLOAT;
    _2(`Creating AttributeStore ${y3.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: N2.UNSIGNED_BYTE, layout: 1 }, { pixelType: N2.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: N2.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: t5, layout: 15 }, { pixelType: t5, layout: 15 }, { pixelType: t5, layout: 15 }, { pixelType: t5, layout: 15 }, { pixelType: N2.FLOAT, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get usedMemory() {
    let t5 = 0;
    for (const e4 of this._blocks) e4 && (t5 += e4.usedMemory);
    return t5 += this._idGenerator.usedMemory, t5;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(t5) {
    return this._idGenerator.createIdForObjectId(t5);
  }
  releaseDisplayIdForObjectId(t5) {
    return this._idGenerator.releaseIdForObjectId(t5);
  }
  getDisplayIdForObjectId(t5) {
    return this._idGenerator.getDisplayIdForObjectId(t5);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  hasArcadeDependency(t5) {
    return this._arcadeDependencies.has(t5);
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  async update(t5, e4, s6, r12 = 0) {
    const a4 = y2(this._schema, t5);
    if (this.version = r12, a4 && (has("esri-2d-update-debug") && console.debug(`Version[${r12}] AttributeStore.update`, { changed: a4 }), this._schema = t5, this._attributeComputeInfo = null, this._initialize(), null != t5)) if (s6 && (this._filters = await Promise.all(t5.filters.map((t6) => t6 ? p3.create({ geometryType: s6.geometryType, hasM: false, hasZ: false, timeInfo: s6.timeInfo, fieldsIndex: s6.fieldsIndex, spatialReference: s6.outSpatialReference, filterJSON: t6 }) : null))), "multi" !== t5.type) this._attributeComputeInfo = { type: "feature", map: /* @__PURE__ */ new Map() }, await Promise.all(t5.bindings.map(async (t6) => {
      const i5 = await this._bind(e4, t6);
      this._updateReferences(i5);
    }));
    else {
      this._attributeComputeInfo = { type: "multi", keyField: t5.keyField, map: /* @__PURE__ */ new Map() };
      for (const i5 in t5.bindings) {
        const s7 = t5.bindings[i5];
        await Promise.all(s7.map(async (t6) => {
          const s8 = await this._bind(e4, t6, parseInt(i5, 10));
          this._updateReferences(s8);
        }));
      }
    }
  }
  setHighlight(t5, e4) {
    let i5 = null;
    0 === t5.length && 0 === e4.length && (i5 = this._getBlock(0), i5.unsetComponentAllTexels(0, (1 << V) - 1));
    for (const { displayId: s6, highlightFlags: r12 } of t5) {
      if (null == s6 || -1 === s6) continue;
      i5 || (i5 = this._getBlock(0), i5.unsetComponentAllTexels(0, (1 << V) - 1));
      const t6 = o(s6);
      i5.setComponent(0, r12, [t6]);
    }
    this._idsToHighlight.clear();
    for (const { objectId: s6, highlightFlags: r12 } of t5) this._idsToHighlight.set(s6, r12);
    for (const { objectId: s6, highlightFlags: r12 } of e4) this._idsToHighlight.set(s6, r12);
  }
  setData(t5, e4, i5, s6) {
    const r12 = o(t5);
    this._ensureSizeForTexel(r12), this._getBlock(e4).setData(t5, i5, s6);
  }
  getData(t5, e4, i5) {
    return this._getBlock(e4).getData(t5, i5);
  }
  getHighlightFlags(t5) {
    return this._idsToHighlight.get(t5) || 0;
  }
  unsetAttributeData(t5) {
    const e4 = o(t5);
    this._getBlock(0).setData(e4, 0, 0);
  }
  referencesScale() {
    const t5 = this._attributeComputeInfo;
    if (!t5) return false;
    if ("multi" === t5.type) {
      for (const e4 of t5.map.values()) for (const { field: t6 } of e4.values()) if (t6?.hasArcadeDependency("scale")) return true;
    } else for (const { field: e4 } of t5.map.values()) if (e4?.hasArcadeDependency("scale")) return true;
    return false;
  }
  setAttributeData(t5, e4, i5, s6) {
    const r12 = o(t5);
    this._ensureSizeForTexel(r12), this._getBlock(0).setData(r12, 0, this.getFilterFlags(e4, s6));
    const a4 = this._attributeComputeInfo, o3 = 1, h4 = 4;
    let d3 = null;
    a4 && (d3 = "multi" === a4.type ? a4.map.get(e4.readAttribute(a4.keyField)) : a4.map, d3?.size && d3.forEach((t6, s7) => {
      const a5 = s7 * o3 % h4, n7 = Math.floor(s7 * o3 / h4), d4 = this._getBlock(n7 + 3);
      let c5 = t6.field?.read(e4, i5);
      t6.valueRepresentation && (c5 = g(c5, t6.valueRepresentation));
      (null === c5 || isNaN(c5) || c5 === 1 / 0 || c5 === -1 / 0) && (c5 = m), d4.setData(r12, a5, c5);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  sendUpdates() {
    const t5 = this._blocks.map((t6) => null != t6 ? t6.toMessage() : null), e4 = this._getInitArgs();
    has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), this._client.update({ initArgs: e4, blockData: t5, version: this.version, sendUpdateEpoch: this._epoch }), this._epoch += 1, has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(t5) {
    for (; t5 >= this._size * this._size; ) if (this._expand()) return;
  }
  async _bind(t5, e4, i5) {
    const s6 = await t5.createComputedField(e4), { valueRepresentation: r12 } = e4, a4 = this._attributeComputeInfo;
    if ("multi" === a4.type) {
      const t6 = a4.map.get(i5) ?? /* @__PURE__ */ new Map();
      t6.set(e4.binding, { field: s6, valueRepresentation: r12 }), a4.map.set(i5, t6);
    } else a4.map.set(e4.binding, { field: s6, valueRepresentation: r12 });
    return s6;
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = true, this._getBlock(1), this._getBlock(2), this._getBlock(7), { blockSize: this._size, blockDescriptors: this._blocks.map((t5) => null != t5 ? { textureOnly: t5.textureOnly, buffer: t5.buffer, pixelType: t5.pixelType } : null) });
  }
  _getBlock(t5) {
    const e4 = this._blocks[t5];
    if (null != e4) return e4;
    _2(`Initializing AttributeBlock at index ${t5}`);
    const i5 = new m4(this._size, this._blockDescriptors[t5], this._client.isLocal);
    return this._blocks[t5] = i5, this._initialized = false, i5;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const t5 = this._size <<= 1;
      _2("Expanding block size to", t5, this._blocks);
      for (const e4 of this._blocks) e4?.expand(t5);
      return this._initialized = false, this._size = t5, 0;
    }
    return f2().error(new r("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  _updateReferences(t5) {
    u2(this._arcadeDependencies, t5);
  }
  isVisible(t5) {
    return !!(this._getBlock(0).getData(t5, 0) & 1 << V);
  }
  getFilterFlags(t5, e4) {
    let i5 = 0;
    for (let r12 = 0; r12 < this._filters.length; r12++) {
      const s7 = !!(1 << r12), a4 = this._filters[r12];
      i5 |= (!s7 || null == a4 || a4.check(t5, e4) ? 1 : 0) << r12;
    }
    let s6 = 0;
    if (this._idsToHighlight.size) {
      const e5 = t5.getObjectId();
      s6 = this.getHighlightFlags(e5);
    }
    return i5 << V | s6;
  }
};

export {
  n4 as n,
  r7 as r,
  s3 as s,
  s4 as s2,
  l3 as l,
  p3 as p,
  b2 as b
};
//# sourceMappingURL=chunk-55WWRUAU.js.map
