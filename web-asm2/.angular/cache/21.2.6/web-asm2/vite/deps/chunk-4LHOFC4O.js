import {
  s
} from "./chunk-K3RYWESQ.js";
import {
  a
} from "./chunk-E7T52Q27.js";

// node_modules/@arcgis/core/core/ReactiveSet.js
var e = class {
  constructor(t) {
    this._observable = new s(), this._notifyPending = false, this._batchDepth = 0, this._set = new Set(t);
  }
  get size() {
    return a(this._observable), this._set.size;
  }
  add(t) {
    const s2 = this._set.size;
    return this._set.add(t), this._set.size !== s2 && this._notify(), this;
  }
  batch(t) {
    try {
      this._batchDepth++, t();
    } finally {
      this._batchDepth--, this._notifyPending && 0 === this._batchDepth && (this._notifyPending = false, this._notify());
    }
  }
  clear() {
    this._set.size > 0 && (this._set.clear(), this._notify());
  }
  delete(t) {
    const s2 = this._set.delete(t);
    return s2 && this._notify(), s2;
  }
  entries() {
    return a(this._observable), this._set.entries();
  }
  forEach(s2, e2) {
    a(this._observable), this._set.forEach((t, i) => s2.call(e2, t, i, this), e2);
  }
  has(s2) {
    return a(this._observable), this._set.has(s2);
  }
  keys() {
    return a(this._observable), this._set.keys();
  }
  values() {
    return a(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return a(this._observable), this._set[Symbol.iterator]();
  }
  [Symbol.dispose]() {
    this._observable.destroy();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
  _notify() {
    this._batchDepth > 0 ? this._notifyPending = true : this._observable.notify();
  }
};

export {
  e
};
//# sourceMappingURL=chunk-4LHOFC4O.js.map
