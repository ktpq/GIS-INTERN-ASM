import {
  o
} from "./chunk-ATAVJUYF.js";
import {
  s
} from "./chunk-HOSXEWC2.js";
import {
  B,
  L,
  b
} from "./chunk-6OEUF57J.js";
import {
  r as r2
} from "./chunk-QCEMOJ33.js";
import {
  e
} from "./chunk-JNCFJPS4.js";
import {
  D,
  i as i2
} from "./chunk-GLXZFAAW.js";
import {
  y
} from "./chunk-OOSRFM7N.js";
import {
  i
} from "./chunk-LHMCLOXR.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/FlatFeature.js
var s2 = class _s {
  constructor(t = null, e2 = {}, r3, i3, s3 = 0) {
    this.geometry = t, this.attributes = e2, this.centroid = r3, this.objectId = i3, this.displayId = s3;
  }
  weakClone() {
    return new _s(this.geometry, this.attributes, this.centroid, this.objectId, this.displayId);
  }
  clone() {
    return new _s(this.geometry?.clone(), __spreadValues({}, this.attributes), this.centroid?.clone(), this.objectId, this.displayId);
  }
  get usedMemory() {
    return 128 + e(this.attributes) + (this.geometry?.usedMemory ?? 0);
  }
  ensureCentroid(t) {
    return this.centroid ??= r2(this.geometry && L(this.geometry)), this.centroid;
  }
};

// node_modules/@arcgis/core/layers/graphics/data/flatFeatureQueryEngineAdapter.js
var m = { getObjectId: (t) => t.objectId, getAttributes: (t) => t.attributes, getAttribute: (t, e2) => t.attributes[e2], cloneWithGeometry: (t, m3, i3) => new s2(B(y.fromJSON(i3), m3), t.attributes, null, t.objectId), getGeometry: (e2) => e2.geometry && L(e2.geometry), getGeometryWithCurves: (t) => t.geometry, getCentroid: (t, e2) => t.ensureCentroid(e2) };

// node_modules/@arcgis/core/layers/graphics/data/FlatFeatureStore.js
var h = i2();
var m2 = class {
  constructor(e2, t, s3) {
    this.geometryType = e2, this.hasZ = t, this.hasM = s3, this._boundsStore = new o(), this._featuresById = /* @__PURE__ */ new Map(), this._usedMemory = 0, this.events = new i(), this.featureAdapter = m;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    const e2 = this._featuresById.size;
    let t = 0;
    return this._featuresById.forEach(({ geometry: e3 }) => {
      t += e3 ? e3.vertexCount : 0;
    }), { featureCount: e2, vertexCount: t };
  }
  getFullExtent(e2) {
    if (null == this.fullBounds) return null;
    const [t, r3, s3, o2] = this.fullBounds;
    return { xmin: t, ymin: r3, xmax: s3, ymax: o2, spatialReference: s(e2) };
  }
  add(e2) {
    this._add(e2), this._emitChanged();
  }
  addMany(e2) {
    for (const t of e2) this._add(t);
    this._emitChanged();
  }
  upsertMany(t) {
    const r3 = t.map((e2) => this._upsert(e2));
    return this._emitChanged(), r3.filter(N);
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged(), this._usedMemory = 0;
  }
  removeById(e2) {
    const t = this._featuresById.get(e2);
    return t ? (this._remove(t), this._emitChanged(), t) : null;
  }
  removeManyById(e2) {
    this._boundsStore.invalidateIndex();
    for (const t of e2) {
      const e3 = this._featuresById.get(t);
      e3 && this._remove(e3);
    }
    this._emitChanged();
  }
  forEachBounds(e2, t) {
    for (const r3 of e2) {
      const e3 = this._boundsStore.get(r3.objectId);
      e3 && t(D(h, e3));
    }
  }
  getFeature(e2) {
    return this._featuresById.get(e2);
  }
  has(e2) {
    return this._featuresById.has(e2);
  }
  forEach(e2) {
    this._featuresById.forEach((t) => e2(t));
  }
  forEachInBounds(e2, t) {
    this._boundsStore.forEachInBounds(e2, (e3) => {
      t(this._featuresById.get(e3));
    });
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(e2) {
    if (!e2) return;
    const r3 = e2.objectId;
    if (null == r3) return void n.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature", "feature id is missing", { feature: e2 }));
    const i3 = this._featuresById.get(r3);
    let u;
    if (i3 ? (e2.displayId = i3.displayId, u = this._boundsStore.get(r3) ?? void 0, this._boundsStore.delete(r3), this._usedMemory -= this.estimateFeatureUsedMemory?.(i3) ?? 0) : this.onFeatureAdd?.(e2), !e2.geometry) return this._boundsStore.set(r3, null), void this._featuresById.set(r3, e2);
    this._boundsStore.set(r3, b(e2.geometry, u)), this._featuresById.set(r3, e2), this._usedMemory += this.estimateFeatureUsedMemory?.(e2) ?? 0;
  }
  _upsert(e2) {
    const r3 = e2?.objectId;
    if (null == r3) return n.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature", "feature id is missing", { feature: e2 })), null;
    const i3 = this._featuresById.get(r3);
    if (!i3) return this._add(e2), e2;
    this._usedMemory -= this.estimateFeatureUsedMemory?.(i3) ?? 0;
    const { geometry: u, attributes: a } = e2;
    for (const t in a) i3.attributes[t] = a[t];
    return u && (i3.geometry = u, this._boundsStore.set(r3, b(u) ?? null)), this._usedMemory += this.estimateFeatureUsedMemory?.(i3) ?? 0, i3;
  }
  _remove(e2) {
    null != this.onFeatureRemove && this.onFeatureRemove(e2);
    const t = e2.objectId;
    return this._boundsStore.delete(t), this._featuresById.delete(t), this._usedMemory -= this.estimateFeatureUsedMemory?.(e2) ?? 0, e2;
  }
};

export {
  s2 as s,
  m2 as m
};
//# sourceMappingURL=chunk-PQ64UBR5.js.map
