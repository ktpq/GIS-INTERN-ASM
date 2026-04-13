import {
  has
} from "./chunk-6SPQI6I6.js";

// node_modules/@arcgis/core/core/MemCache.js
var t = -3;
var s = t - 1;
var e = !!has("esri-tests-disable-gpu-memory-measurements");
var h = class {
  get size() {
    return this._size;
  }
  constructor(t2 = 10485760) {
    this._maxSize = t2, this._db = /* @__PURE__ */ new Map(), this._size = 0, this._hit = 0, this._miss = 0, this._users = /* @__PURE__ */ new Map(), this._sizeLimits = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.clearAll(), this._sizeLimits.clear(), this._users.clear(), this._db.clear();
  }
  register(t2) {
    this._users.set(t2.id.slice(0, -1), t2);
  }
  deregister(t2) {
    this.clear(t2), this._sizeLimits.delete(t2), this._users.delete(t2.id.slice(0, -1));
  }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(t2) {
    this._maxSize = Math.max(t2, -1), this._checkSize();
  }
  getSize(t2, s2) {
    const e2 = this._db.get(t2.id + s2);
    return e2?.size ?? 0;
  }
  put(i, h2, r2, o, n2) {
    h2 = i.id + h2;
    const a = this._db.get(h2);
    if (a && (this._size -= a.size, i.size -= a.size, this._db.delete(h2), a.entry !== r2 && this._notifyRemove(h2, a.entry, a.size, 0)), o > this._maxSize) return void this._notifyRemove(h2, r2, o, 0);
    if (void 0 === r2) return void console.warn("Refusing to cache undefined entry ");
    if (!o || o < 0) return e || console.warn(`Refusing to cache entry with size ${o} for key ${h2}`), void this._notifyRemove(h2, r2, 0, 0);
    const c = 1 + Math.max(n2, s) - t;
    this._db.set(h2, new _(r2, o, c)), this._size += o, i.size += o, this._checkSize();
  }
  updateSize(t2, s2) {
    s2 = t2.id + s2;
    const e2 = this._db.get(s2);
    if (!e2) return;
    this._size -= e2.size, t2.size -= e2.size;
    let i = e2.entry.usedMemory;
    for (; i > this._maxSize; ) {
      const t3 = this._notifyRemove(s2, e2.entry, i, 1);
      if (!(null != t3 && t3 > 0)) return void this._db.delete(s2);
      i = t3;
    }
    e2.size = i, this._size += i, t2.size += i, this._checkSize();
  }
  pop(t2, s2) {
    s2 = t2.id + s2;
    const e2 = this._db.get(s2);
    if (e2) return this._size -= e2.size, t2.size -= e2.size, this._db.delete(s2), ++this._hit, e2.entry;
    ++this._miss;
  }
  get(t2, s2) {
    s2 = t2.id + s2;
    const e2 = this._db.get(s2);
    if (void 0 !== e2) return this._db.delete(s2), e2.lives = e2.lifetime, this._db.set(s2, e2), ++this._hit, e2.entry;
    ++this._miss;
  }
  peek(t2, s2) {
    const e2 = this._db.get(t2.id + s2);
    return e2 ? ++this._hit : ++this._miss, e2?.entry;
  }
  get performanceInfo() {
    const s2 = { Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB", "Hit rate": Math.round(100 * this._getHitRate()) + "%", Entries: this._db.size.toString() }, e2 = {}, i = new Array();
    this._db.forEach((t2, s3) => {
      const h3 = t2.lifetime;
      i[h3] = (i[h3] || 0) + t2.size, this._users.forEach((i2) => {
        const { id: h4, name: r3 } = i2;
        if (s3.startsWith(h4)) {
          const s4 = e2[r3] || 0;
          e2[r3] = s4 + t2.size;
        }
      });
    });
    const h2 = {};
    this._users.forEach((t2) => {
      const s3 = t2.name;
      if ("hitRate" in t2 && "number" == typeof t2.hitRate && !isNaN(t2.hitRate) && t2.hitRate > 0) {
        const i2 = e2[s3] || 0;
        e2[s3] = i2, h2[s3] = Math.round(100 * t2.hitRate) + "%";
      } else h2[s3] = "0%";
    });
    const r2 = Object.keys(e2);
    r2.sort((t2, s3) => e2[s3] - e2[t2]), r2.forEach((t2) => s2[t2] = Math.round(e2[t2] / 2 ** 20) + "MB / " + h2[t2]);
    for (let o = i.length - 1; o >= 0; --o) {
      const e3 = i[o];
      e3 && (s2["Priority " + (o + t - 1)] = Math.round(e3 / this._size * 100) + "%");
    }
    return s2;
  }
  resetStats() {
    this._hit = this._miss = 0, this._users.forEach((t2) => t2.resetHitRate());
  }
  clear(t2) {
    const s2 = t2.id;
    this._db.forEach((t3, e2) => {
      e2.startsWith(s2) && (this._size -= t3.size, this._db.delete(e2), this._notifyRemove(e2, t3.entry, t3.size, 0));
    }), t2.size = 0;
  }
  clearAll() {
    this._db.forEach((t2, s2) => this._notifyRemove(s2, t2.entry, t2.size, 0)), this._users.forEach((t2) => t2.size = 0), this._size = 0, this._db.clear();
  }
  *values(t2) {
    for (const [s2, e2] of this._db) s2.startsWith(t2.id) && (yield e2.entry);
  }
  _getHitRate() {
    return this._hit / (this._hit + this._miss);
  }
  _notifyRemove(t2, s2, e2, i) {
    const h2 = this._users.get(t2.split(n)[0])?.removeFunc, r2 = h2?.(s2, i, e2);
    return "number" == typeof r2 ? r2 : null;
  }
  _checkSize() {
    this._sizeLimits.forEach((t2, s2) => this._checkSizeLimits(t2, s2)), this._checkSizeLimits(this.maxSize);
  }
  setMaxSize(t2, s2) {
    null == s2 || s2 <= 0 ? this._sizeLimits.delete(t2) : this._sizeLimits.set(t2, s2);
  }
  _checkSizeLimits(t2, s2) {
    const e2 = s2 ?? this;
    if (e2.size <= t2) return;
    const i = s2?.id;
    let h2 = true;
    for (; h2; ) {
      h2 = false;
      for (const [r2, o] of this._db) if (0 === o.lifetime && (!i || r2.startsWith(i))) {
        const i2 = s2 ?? this._users.get(r2.split(n)[0]);
        if (this._purgeItem(r2, o, i2), e2.size <= 0.9 * t2) return;
        h2 ||= this._db.has(r2);
      }
    }
    for (const [r2, o] of this._db) if (!i || r2.startsWith(i)) {
      const i2 = s2 ?? this._users.get(r2.split(n)[0]);
      if (this._purgeItem(r2, o, i2), e2.size <= 0.9 * t2) return;
    }
  }
  _purgeItem(t2, s2, e2) {
    if (this._db.delete(t2), s2.lives <= 1) {
      this._size -= s2.size, e2 && (e2.size -= s2.size);
      const i = this._notifyRemove(t2, s2.entry, s2.size, 1);
      null != i && i > 0 && (this._size += i, e2 && (e2.size += i), s2.lives = s2.lifetime, s2.size = i, this._db.set(t2, s2));
    } else --s2.lives, this._db.set(t2, s2);
  }
};
var r = new h(0);
var _ = class {
  constructor(t2, s2, e2) {
    this.entry = t2, this.size = s2, this.lifetime = e2, this.lives = e2;
  }
};
var n = ":";

export {
  t,
  h
};
//# sourceMappingURL=chunk-WE5AL7RH.js.map
