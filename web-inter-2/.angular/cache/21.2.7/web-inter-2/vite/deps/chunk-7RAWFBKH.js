import {
  _ as _2,
  l
} from "./chunk-UE257RAE.js";
import {
  C,
  J,
  X,
  at,
  lt,
  mt,
  nt,
  o,
  r as r2,
  s as s2
} from "./chunk-D2Z2HLWL.js";
import {
  s
} from "./chunk-VJCO7ZMT.js";
import {
  a,
  i as i3
} from "./chunk-WOCPFOF3.js";
import {
  _
} from "./chunk-GXLPH2D4.js";
import {
  i,
  m,
  r
} from "./chunk-5QF2VDYR.js";
import {
  u
} from "./chunk-XJP3RSS7.js";
import {
  e,
  t
} from "./chunk-473S3KQM.js";
import {
  i as i2,
  n as n2
} from "./chunk-IO7CXLQO.js";
import {
  v
} from "./chunk-PWZ6VVYN.js";
import {
  has,
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js
var e2 = class _e {
  static fromBuffer(t3, r5) {
    return new _e(t3, r5);
  }
  static create(t3, r5 = 4294967295) {
    const s3 = new Uint32Array(Math.ceil(t3 / 32));
    return new _e(s3, r5);
  }
  constructor(t3, e3) {
    this._mask = 0, this._buf = t3, this._mask = e3;
  }
  _getIndex(t3) {
    return Math.floor(t3 / 32);
  }
  get usedMemory() {
    return i2(this._buf);
  }
  has(t3) {
    const e3 = this._mask & t3;
    return !!(this._buf[this._getIndex(e3)] & 1 << e3 % 32);
  }
  hasRange(t3, e3) {
    let r5 = t3, s3 = e3;
    for (; r5 % 32 && r5 !== s3; ) {
      if (this.has(r5)) return true;
      r5++;
    }
    for (; s3 % 32 && r5 !== s3; ) {
      if (this.has(r5)) return true;
      s3--;
    }
    if (r5 === s3) return false;
    for (let i4 = r5 / 32; i4 !== s3 / 32; i4++) {
      if (this._buf[i4]) return true;
    }
    return false;
  }
  set(t3) {
    const e3 = this._mask & t3, r5 = this._getIndex(e3), s3 = 1 << e3 % 32;
    this._buf[r5] |= s3;
  }
  setRange(t3, e3) {
    let r5 = t3, s3 = e3;
    for (; r5 % 32 && r5 !== s3; ) this.set(r5++);
    for (; s3 % 32 && r5 !== s3; ) this.set(s3--);
    if (r5 !== s3) for (let i4 = r5 / 32; i4 !== s3 / 32; i4++) this._buf[i4] = 4294967295;
  }
  unset(t3) {
    const e3 = this._mask & t3, r5 = this._getIndex(e3), s3 = 1 << e3 % 32;
    this._buf[r5] &= 4294967295 ^ s3;
  }
  resize(t3) {
    const e3 = this._buf, r5 = new Uint32Array(Math.ceil(t3 / 32));
    r5.set(e3), this._buf = r5;
  }
  or(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] |= t3._buf[e3];
    return this;
  }
  and(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] &= t3._buf[e3];
    return this;
  }
  xor(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] ^= t3._buf[e3];
    return this;
  }
  ior(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] |= ~t3._buf[e3];
    return this;
  }
  iand(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] &= ~t3._buf[e3];
    return this;
  }
  ixor(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] ^= ~t3._buf[e3];
    return this;
  }
  any() {
    for (let t3 = 0; t3 < this._buf.length; t3++) if (this._buf[t3]) return true;
    return false;
  }
  copy(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) this._buf[e3] = t3._buf[e3];
    return this;
  }
  clone() {
    return new _e(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t3 = 0; t3 < this._buf.length; t3++) this._buf[t3] = 0;
    return this;
  }
  forEachSet(t3) {
    for (let e3 = 0; e3 < this._buf.length; e3++) {
      let r5 = this._buf[e3], s3 = 32 * e3;
      if (r5) for (; r5; ) {
        1 & r5 && t3(s3), r5 >>>= 1, s3++;
      }
    }
  }
  countSet() {
    let t3 = 0;
    return this.forEachSet((e3) => {
      t3++;
    }), t3;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetCache.js
var a2 = class {
  constructor(t3) {
    this._valid = e2.create(t3), this._data = new Array(t3);
  }
  get usedMemory() {
    let s3 = this._valid.usedMemory;
    if (this._data.length > 0) {
      const a3 = "string" == typeof this._data[0] ? 64 : n2;
      s3 += this._data.length * a3;
    }
    return s3;
  }
  has(t3) {
    return this._valid.has(t3);
  }
  set(t3, s3) {
    this._valid.set(t3), this._data[t3] = s3;
  }
  get(t3) {
    return this._data[t3];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js
var x = has("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5];
var D = x[0];
var T = x[1];
var F = x[2];
var I = x[3];
var A = has("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4];
var S = A[0];
var B = A[1];
var j = A[2];
var G = has("featurelayer-simplify-mobile-factor") ?? 2;
var C2 = has("esri-mobile");
var v2 = 4294967295;
function M(e3, t3, r5) {
  if (!(e3.length > t3)) for (; e3.length <= t3; ) e3.push(r5);
}
var O = class {
  constructor(e3) {
    this.metadata = e3, this.type = "FeatureSetReader", this._overrides = null, this._postQueryFilteredIds = /* @__PURE__ */ new Set(), this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  destroy() {
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  getAreaSimplificationThreshold(e3, t3) {
    let r5 = 1;
    const s3 = C2 ? G : 1;
    t3 > 4e6 ? r5 = j * s3 : t3 > 1e6 ? r5 = B * s3 : t3 > 5e5 ? r5 = S * s3 : t3 > 1e5 && (r5 = s3);
    let i4 = 0;
    return e3 > 4e3 ? i4 = I * r5 : e3 > 2e3 ? i4 = F * r5 : e3 > 100 ? i4 = T : e3 > 15 && (i4 = D), i4;
  }
  getBounds(e3) {
    M(this._boundsBuffer, 4 * this.getIndex() + 4, 0);
    const t3 = this.getBoundsXMin();
    if (t3 === v2 || !isFinite(t3)) return false;
    if (0 === this.getBoundsXMin()) {
      const t4 = this.readGeometryWorldSpace();
      if (t4?.isPoint && 0 === t4.coords[0] && 0 === t4.coords[1]) return v(e3, 0, 0, 0, 0), true;
      if (!t4) return this.setBoundsXMin(v2), false;
      let r6 = 1 / 0, s4 = 1 / 0, i5 = -1 / 0, a4 = -1 / 0;
      return t4.forEachVertex((e4, t5) => {
        r6 = Math.min(r6, e4), s4 = Math.min(s4, t5), i5 = Math.max(i5, e4), a4 = Math.max(a4, t5);
      }), this.setBoundsXMin(r6), this.setBoundsYMin(s4), this.setBoundsXMax(i5), this.setBoundsYMax(a4), v(e3, r6, s4, i5, a4), true;
    }
    const r5 = this.getBoundsXMin(), s3 = this.getBoundsYMin(), i4 = this.getBoundsXMax(), a3 = this.getBoundsYMax();
    return v(e3, r5, s3, i4, a3), true;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e3) {
    this._boundsBuffer[4 * this.getIndex()] = e3;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e3) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e3;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e3) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e3;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e3) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e3;
  }
  readAttributeAsTimestamp(e3) {
    const t3 = this.readAttribute(e3);
    return "string" == typeof t3 ? new Date(t3).getTime() : "number" == typeof t3 || null == t3 ? t3 : null;
  }
  readAttribute(e3, t3 = false) {
    const r5 = this._readAttribute(e3, t3);
    if (void 0 !== r5) return r5;
    for (const s3 of this._joined) {
      s3.setIndex(this.getIndex());
      const r6 = s3._readAttribute(e3, t3);
      if (void 0 !== r6) return r6;
    }
  }
  readAttributes() {
    const e3 = this._readAttributes();
    for (const t3 of this._joined) {
      t3.setIndex(this.getIndex());
      const r5 = t3._readAttributes();
      for (const t4 of Object.keys(r5)) e3[t4] = r5[t4];
    }
    return e3;
  }
  joinAttributes(e3) {
    this._joined.push(e3);
  }
  registerOverrides(e3) {
    this._overrides = e3;
  }
  withoutOverrides() {
    const e3 = this.copy();
    return e3._overrides = null, e3;
  }
  readOptimizedFeatureWorldSpace() {
    const e3 = this.readGeometryWorldSpace(), t3 = this.readAttributes(), r5 = this.readCentroidWorldSpace();
    return new o(e3, t3, r5, this.getObjectId(), this.getDisplayId());
  }
  readLegacyFeatureForDisplay() {
    const e3 = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e3 && { x: e3.coords[0], y: e3.coords[1] }) ?? null };
  }
  readLegacyFeatureWorldSpace() {
    const e3 = this.readCentroidWorldSpace();
    return { attributes: this.readAttributes(), geometry: this._readLegacyGeometryWorldSpace(), centroid: (e3 && { x: e3.coords[0], y: e3.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e3 = this.readGeometryForDisplay();
    return J(e3, this.geometryType, false, false);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e3 = this._readX(), t3 = this.getInTransform();
    return null == t3 ? e3 : e3 * t3.scale[0] + t3.translate[0];
  }
  readYWorldSpace() {
    const e3 = this._readY(), t3 = this.getInTransform();
    return null == t3 ? e3 : t3.translate[1] - e3 * t3.scale[1];
  }
  readGeometryForDisplay() {
    const e3 = this._readGeometryDeltaDecoded(true);
    if (!e3) {
      const e4 = this._createDeltaQuantizedGeometryFromServerCentroid();
      return e4 ? e4.deltaDecode() : null;
    }
    return e3;
  }
  readGeometryForDisplayTransformed(e3) {
    let t3 = this.readGeometryForDisplay();
    if (t3 && "esriGeometryPolyline" === this.metadata.geometryType && (t3 = nt(t3, this.metadata.geometryType, e3.scale[0])), t3 && (t3 = mt(t3, e3, this.metadata.geometryType)), !t3) {
      const t4 = this.readCentroidForDisplay();
      if (!t4) return null;
      const r5 = i3(e3, t4.coords[0]), s3 = a(e3, t4.coords[1]);
      return this._createDeltaQuantizedExtrudedGeometry(r5, s3).deltaDecode();
    }
    return t3;
  }
  readGeometryWorldSpace() {
    let e3 = this._readGeometry();
    if (e3 || (e3 = this._createDeltaQuantizedGeometryFromServerCentroid()), !e3) return null;
    const t3 = e3.clone(), r5 = this.getInTransform();
    return null != r5 && lt(t3, r5), t3;
  }
  readCentroidForDisplay() {
    const e3 = this.readGeometryForDisplay();
    return e3 ? this._computeDisplayCentroid(e3) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e3 = this.readGeometryForDisplay(), t3 = e3 ? this._computeDisplayCentroid(e3) : this._readServerCentroid();
    if (!t3) return null;
    const r5 = t3.clone(), s3 = this.getInTransform();
    return null != s3 && lt(r5, s3), r5;
  }
  setCache(e3) {
    let t3 = this._caches.get(e3);
    null == t3 && (t3 = new a2(this.getSize()), this._caches.set(e3, t3)), this._activeCache = t3;
  }
  setCachedValue(e3) {
    this._activeCache.set(this.getIndex(), e3);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  get underlyingMemory() {
    let e3 = 0;
    e3 += i2(this._boundsBuffer);
    for (const t3 of this._caches.values()) e3 += t3.usedMemory;
    return e3;
  }
  _readGeometryDeltaDecoded(e3) {
    const t3 = this._readGeometry(e3);
    return "esriGeometryPoint" !== this.geometryType && t3 && this.getInTransform() ? t3.deltaDecode() : t3;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e3) {
    this._contextTimeZone = e3;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e3) {
    return this.fields.has(e3) || this._joined.some((t3) => t3.hasField(e3));
  }
  geometry() {
    const e3 = this.readGeometryWorldSpace(), t3 = J(e3, this.geometryType, this.hasZ, this.hasM), r5 = u(t3);
    if (r5) {
      if (!this.metadata.outSpatialReference) throw new Error("InternalError: Expected spatial reference to be defined");
      r5.spatialReference = this.metadata.outSpatialReference;
    }
    return r5;
  }
  autocastArcadeDate(t3, r5) {
    return r5 && r5 instanceof Date ? this.isUnknownDateTimeField(t3) ? m.unknownDateJSToArcadeDate(r5) : m.dateJSAndZoneToArcadeDate(r5, this.contextTimeZone ?? e) : r5;
  }
  isUnknownDateTimeField(e3) {
    return this.metadata.fieldsIndex.getTimeZone(e3) === t;
  }
  field(t3) {
    let i4 = this.fields.get(t3);
    if (i4) switch (i4.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return i.fromReader(this.readAttribute(t3, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return r.fromReader(this.readAttribute(t3, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(this.readAttribute(t3, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(t3, this.readAttribute(t3, true));
      default:
        return this.readAttribute(t3, false);
    }
    for (const o2 of this._joined) if (o2.setIndex(this.getIndex()), i4 = o2.fields.get(t3), i4) switch (i4.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return i.fromReader(o2._readAttribute(t3, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return r.fromReader(o2._readAttribute(t3, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(o2._readAttribute(t3, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(t3, o2._readAttribute(t3, true));
      default:
        return this.readAttribute(t3, false);
    }
    throw new Error(`Field ${t3} does not exist`);
  }
  setField(e3, t3) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e3) => e3.name);
  }
  isEmpty() {
    return this.fields.fields.length <= 0 && null == this.geometry();
  }
  castToText(e3 = false) {
    if (!e3) return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t3 = this.readLegacyFeatureForDisplay();
    if (!t3) return JSON.stringify(null);
    const r5 = { geometry: t3.geometry, attributes: __spreadValues({}, t3.attributes) };
    for (const s3 in r5.attributes) {
      const e4 = r5.attributes[s3];
      e4 instanceof Date && (r5.attributes[s3] = e4.getTime());
    }
    return JSON.stringify(r5);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e3 = null) {
    return { attributes: this._readAttributes(), geometry: true === e3?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null };
  }
  castAsJsonAsync(e3 = null, t3 = null) {
    return Promise.resolve(this.castAsJson(t3));
  }
  applyPostQueryFilter(e3) {
    if (this._postQueryFilteredIds.clear(), !e3) return;
    const t3 = this.getCursor();
    for (; t3.next(); ) {
      e3.check(t3, { currentUser: null }) || this._postQueryFilteredIds.add(t3.getObjectId());
    }
  }
  _getExists() {
    if (this._overrides) {
      const e3 = this.getObjectId();
      return !this._overrides.hasOverride(e3);
    }
    return !this._postQueryFilteredIds.has(this.getObjectId());
  }
  _computeDisplayCentroid(e3) {
    if (null == this.getInTransform()) return r2(e3);
    const t3 = _2.fromOptimized(e3, this.geometryType);
    t3.yFactor *= -1;
    const r5 = l(t3);
    return r5 ? isNaN(r5[0]) || isNaN(r5[1]) ? r2(e3) : (r5[1] *= -1, new s([], r5)) : null;
  }
  copyInto(e3) {
    e3._joined = this._joined, e3._overrides = this._overrides, e3._objectIdToIndex = this._objectIdToIndex, e3._boundsBuffer = this._boundsBuffer, e3._activeCache = this._activeCache, e3._caches = this._caches, e3._contextTimeZone = this._contextTimeZone, e3._postQueryFilteredIds = this._postQueryFilteredIds;
  }
  _readLegacyGeometryWorldSpace() {
    const e3 = this.readGeometryWorldSpace();
    return J(e3, this.geometryType, false, false);
  }
  _createDeltaQuantizedGeometryFromServerCentroid() {
    const e3 = this._readServerCentroid();
    if (!e3) return null;
    const [t3, r5] = e3.coords;
    return this._createDeltaQuantizedExtrudedGeometry(t3, r5);
  }
  _createDeltaQuantizedExtrudedGeometry(e3, t3) {
    return "esriGeometryPolyline" === this.geometryType ? this._createDeltaQuantizedExtrudedLine(e3, t3) : this._createDeltaQuantizedExtrudedQuad(e3, t3);
  }
  _createDeltaQuantizedExtrudedQuad(e3, t3) {
    return new s([5], [e3 - 1, t3, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createDeltaQuantizedExtrudedLine(e3, t3) {
    return new s([2], [e3 - 1, t3 + 1, 1, -1]);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderJSON.js
var u2 = class _u extends O {
  static fromFeatures(t3, r5) {
    const { geometryType: s3 } = r5, n4 = C([], t3, s3, false, false, r5.featureIdInfo);
    for (let e3 = 0; e3 < n4.length; e3++) n4[e3].displayId = t3[e3].displayId;
    return _u.fromOptimizedFeatures(n4, r5);
  }
  static fromFeatureSet(e3, r5) {
    const s3 = X(e3, r5.featureIdInfo);
    return _u.fromOptimizedFeatureSet(s3, r5);
  }
  static fromOptimizedFeatureSet(e3, t3) {
    const r5 = _u.fromOptimizedFeatures(e3.features, t3);
    return r5._exceededTransferLimit = e3.exceededTransferLimit, r5._transform = e3.transform, r5._fieldsIndex = new _(e3.fields), r5;
  }
  static fromOptimizedFeatures(e3, t3, r5) {
    const s3 = new _u(e3, t3);
    return s3._fieldsIndex = t3.fieldsIndex, s3._transform = r5, s3;
  }
  static empty(e3) {
    return new _u([], e3);
  }
  constructor(e3, t3) {
    super(t3), this._featureIndex = -1, this._exceededTransferLimit = false, this._fieldsIndex = null, this._geometryType = t3.geometryType, this._features = e3;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get usedMemory() {
    return this._current.usedMemory;
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getInTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let e3 = "";
    for (const t3 in this._current.attributes) e3 += this._current.attributes[t3];
    return e3;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e3) {
    this._featureIndex = e3;
  }
  getObjectId() {
    return this._current?.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e3) {
    this._current.displayId = e3;
  }
  copy() {
    const e3 = new _u(this._features, this.metadata);
    return this.copyInto(e3), e3;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); ) ;
    return this._featureIndex < this._features.length;
  }
  readGeometryArea() {
    return s2(this._current) ? at(this._current.geometry, 2) : 0;
  }
  _readX() {
    return s2(this._current) ? this._current.geometry.coords[0] : 0;
  }
  _readY() {
    return s2(this._current) ? this._current.geometry.coords[1] : 0;
  }
  _readGeometry() {
    return s2(this._current) ? this._current.geometry ?? null : null;
  }
  _readServerCentroid() {
    return this._current.centroid;
  }
  _readAttribute(e3, t3) {
    if (!this._fieldsIndex) {
      const t4 = this._current.attributes[e3];
      if (void 0 !== t4) return t4;
      const r6 = e3.toLowerCase();
      for (const e4 in this._current.attributes) if (e4.toLowerCase() === r6) return this._current.attributes[e4];
      return;
    }
    const r5 = this._fieldsIndex.get(e3);
    if (!r5) return;
    const s3 = this._current.attributes[r5.name];
    return null == s3 ? s3 : t3 && this.fields.isDateField(e3) ? new Date(s3) : s3;
  }
  _readAttributes() {
    return this._current.attributes;
  }
  copyInto(e3) {
    super.copyInto(e3), e3._featureIndex = this._featureIndex, e3._transform = this._transform, e3._fieldsIndex = this._fieldsIndex;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/FeatureStoreQueryAdapter.js
var r3 = class _r {
  static {
    this.Shared = new _r();
  }
  getObjectId(t3) {
    return t3.getObjectId();
  }
  getAttributes(t3) {
    return t3.readAttributes();
  }
  getAttribute(t3, e3) {
    return t3.readAttribute(e3);
  }
  getAttributeAsTimestamp(t3, e3) {
    return t3.readAttributeAsTimestamp(e3);
  }
  cloneWithGeometry(r5, a3, i4) {
    const s3 = r5.readAttributes(), d = new o(a3, s3, null, r5.getObjectId(), r5.getDisplayId()), u3 = u2.fromOptimizedFeatures([d], r5.metadata);
    return u3.setIndex(0), u3;
  }
  getGeometry(t3) {
    return t3.readGeometryWorldSpace();
  }
  getCentroid(t3, e3) {
    return t3.readCentroidForDisplay();
  }
};

// node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js
function n3(n4, r5, t3) {
  if (null == n4) return null;
  const u3 = r5.readArcadeFeature();
  r5.contextTimeZone = t3.$view?.timeZone;
  try {
    return n4.evaluate(u3, t3);
  } catch (a3) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", a3), null;
  }
}
function r4(e3) {
  return null == e3 || e3 === 1 / 0 || e3 === -1 / 0 || "number" == typeof e3 && isNaN(e3);
}
function t2(e3, n4, t3, u3) {
  if (null == e3) return null != u3 ? u3 : null;
  const a3 = n4.readArcadeFeature();
  n4.contextTimeZone = t3.$view?.timeZone;
  const o2 = e3.evaluate(a3, t3);
  return r4(o2) ? null != u3 ? u3 : null : o2;
}

export {
  n3 as n,
  r4 as r,
  t2 as t,
  e2 as e,
  a2 as a,
  O,
  u2 as u,
  r3 as r2
};
//# sourceMappingURL=chunk-7RAWFBKH.js.map
