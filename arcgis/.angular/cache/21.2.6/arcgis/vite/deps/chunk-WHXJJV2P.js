import {
  e
} from "./chunk-U5STUEXZ.js";
import {
  o
} from "./chunk-6FZWHX7U.js";
import {
  s
} from "./chunk-IJ4QR3D5.js";
import {
  ut
} from "./chunk-CN3LKCJ5.js";
import {
  D,
  i as i2
} from "./chunk-IBGMUXG6.js";
import {
  i
} from "./chunk-PMKUQ7UU.js";
import {
  u
} from "./chunk-SVWIACQP.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  N
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js
var m = i2();
var f = class {
  constructor(e2) {
    this.geometryInfo = e2, this._boundsStore = new o(), this._featuresById = /* @__PURE__ */ new Map(), this._usedMemory = 0, this.events = new i(), this.featureAdapter = e;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    let e2 = 0;
    return this._featuresById.forEach((t) => {
      null != t.geometry && t.geometry.coords && (e2 += t.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e2 / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  getFullExtent(e2) {
    if (null == this.fullBounds) return null;
    const [t, r2, s2, o2] = this.fullBounds;
    return { xmin: t, ymin: r2, xmax: s2, ymax: o2, spatialReference: s(e2) };
  }
  add(e2) {
    this._add(e2), this._emitChanged();
  }
  addMany(e2) {
    for (const t of e2) this._add(t);
    this._emitChanged();
  }
  upsertMany(t) {
    const r2 = t.map((e2) => this._upsert(e2));
    return this._emitChanged(), r2.filter(N);
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
    for (const r2 of e2) {
      const e3 = this._boundsStore.get(r2.objectId);
      e3 && t(D(m, e3));
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
    const r2 = e2.objectId;
    if (null == r2) return void n.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature", "feature id is missing", { feature: e2 }));
    const o2 = this._featuresById.get(r2);
    let i3;
    if (o2 ? (e2.displayId = o2.displayId, i3 = this._boundsStore.get(r2), this._boundsStore.delete(r2), this._usedMemory -= this.estimateFeatureUsedMemory?.(o2) ?? 0) : null != this.onFeatureAdd && this.onFeatureAdd(e2), !e2.geometry?.coords?.length) return this._boundsStore.set(r2, null), void this._featuresById.set(r2, e2);
    i3 = ut(null != i3 ? i3 : u(), e2.geometry), null != i3 && this._boundsStore.set(r2, i3), this._featuresById.set(r2, e2), this._usedMemory += this.estimateFeatureUsedMemory?.(e2) ?? 0;
  }
  _upsert(e2) {
    const r2 = e2?.objectId;
    if (null == r2) return n.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature", "feature id is missing", { feature: e2 })), null;
    const o2 = this._featuresById.get(r2);
    if (!o2) return this._add(e2), e2;
    this._usedMemory -= this.estimateFeatureUsedMemory?.(o2) ?? 0;
    const { geometry: i3, attributes: a } = e2;
    for (const t in a) o2.attributes[t] = a[t];
    return i3 && (o2.geometry = i3, this._boundsStore.set(r2, ut(u(), i3) ?? null)), this._usedMemory += this.estimateFeatureUsedMemory?.(o2) ?? 0, o2;
  }
  _remove(e2) {
    null != this.onFeatureRemove && this.onFeatureRemove(e2);
    const t = e2.objectId;
    return this._boundsStore.delete(t), this._featuresById.delete(t), this._usedMemory -= this.estimateFeatureUsedMemory?.(e2) ?? 0, e2;
  }
};

export {
  f
};
//# sourceMappingURL=chunk-WHXJJV2P.js.map
