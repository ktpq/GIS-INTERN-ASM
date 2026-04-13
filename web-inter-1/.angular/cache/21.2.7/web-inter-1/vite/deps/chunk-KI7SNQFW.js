import {
  U,
  a,
  f,
  l as l2
} from "./chunk-M44GXGOJ.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  l2 as l,
  m2 as m
} from "./chunk-JM4CKTH2.js";
import {
  F
} from "./chunk-HDFIZIZL.js";
import {
  e2 as e
} from "./chunk-WARIPJQI.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/core/support/UpdatingHandles.js
var h = class extends b {
  constructor() {
    super(...arguments), this.updating = false, this._handleId = 0, this._scheduleHandleId = 0, this._pendingPromises = /* @__PURE__ */ new Set();
  }
  destroy() {
    this.removeAll();
  }
  add(e2, s, t = {}) {
    return this._installWatch(e2, s, t, l2);
  }
  addWhen(e2, s, t = {}) {
    return this._installWatch(e2, s, t, f);
  }
  addOnCollectionChange(e2, s, { initial: i = false, final: n = false } = {}) {
    const r = ++this._handleId;
    return this.addHandles([a(e2, "after-changes", this._createSyncUpdatingCallback(), U), a(e2, "change", s, { onListenerAdd: i ? (e3) => s({ added: e3.toArray(), removed: [] }) : void 0, onListenerRemove: n ? (e3) => s({ added: [], removed: e3.toArray() }) : void 0 })], r), e(() => this.removeHandles(r));
  }
  addPromise(e2) {
    if (null == e2) return e2;
    const s = ++this._handleId;
    this.addHandles(e(() => {
      this._pendingPromises.delete(e2) && (0 !== this._pendingPromises.size || this.hasHandles(c) || this._set("updating", false));
    }), s), this._pendingPromises.add(e2), this._set("updating", true);
    const i = () => this.removeHandles(s);
    return e2.then(i, i), e2;
  }
  removeAll() {
    this._pendingPromises.clear(), this.removeAllHandles(), this._set("updating", false);
  }
  _installWatch(e2, s, i = {}, n) {
    const d = ++this._handleId;
    i.sync || this._installSyncUpdatingWatch(e2, d);
    const a2 = n(e2, s, i);
    return this.addHandles(a2, d), e(() => this.removeHandles(d));
  }
  _installSyncUpdatingWatch(e2, s) {
    const t = this._createSyncUpdatingCallback(), n = l2(e2, t, { sync: true, equals: () => false });
    return this.addHandles(n, s), n;
  }
  _createSyncUpdatingCallback() {
    return () => {
      this.removeHandles(c), ++this._scheduleHandleId;
      const e2 = this._scheduleHandleId;
      this._get("updating") || this._set("updating", true), this.addHandles(F(() => {
        e2 === this._scheduleHandleId && (this._set("updating", this._pendingPromises.size > 0), this.removeHandles(c));
      }), c);
    };
  }
};
__decorate([m({ readOnly: true })], h.prototype, "updating", void 0), h = __decorate([l("esri.core.support.UpdatingHandles")], h);
var c = -42;

export {
  h
};
//# sourceMappingURL=chunk-KI7SNQFW.js.map
