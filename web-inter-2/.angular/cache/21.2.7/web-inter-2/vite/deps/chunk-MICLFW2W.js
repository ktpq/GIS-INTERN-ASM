import {
  _
} from "./chunk-BBSGTC44.js";
import {
  s
} from "./chunk-S7BA7ETJ.js";
import {
  e as e2
} from "./chunk-YSPDI6P3.js";
import {
  b as b2,
  m
} from "./chunk-5GPMO33J.js";
import {
  B,
  u as u2
} from "./chunk-FVU6XCMJ.js";
import {
  b,
  n2 as n
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  u2 as u
} from "./chunk-PQFEWUZC.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/2d/tiling/TileQueue.js
var l = [0, 0];
var h = class extends b {
  constructor(e3) {
    super(e3), this._keyToItem = /* @__PURE__ */ new Map(), this._tilesByScale = /* @__PURE__ */ new Map(), this.concurrency = 6;
  }
  initialize() {
    const { concurrency: e3, process: t2, scheduler: s2, priority: o2 } = this;
    this._queue = new _({ concurrency: e3, scheduler: s2, priority: o2, process: (e4, s3) => {
      const o3 = this._keyToItem.get(e4);
      return t2(o3, { signal: s3 });
    }, peeker: (e4) => this._peek(e4) });
  }
  destroy() {
    this.clear(), this._queue = u(this._queue);
  }
  get length() {
    return this._queue ? this._queue.length : 0;
  }
  abort(e3) {
    const t2 = "string" == typeof e3 ? e3 : e3.id;
    this._queue.abort(t2);
  }
  clear() {
    this._queue.clear(), this._keyToItem.clear(), this._tilesByScale.clear();
  }
  has(e3) {
    return "string" == typeof e3 ? this._keyToItem.has(e3) : this._keyToItem.has(e3.id);
  }
  pause() {
    this._queue.pause();
  }
  push(e3) {
    const t2 = e3.key.id;
    if (this._queue.has(t2)) return this._queue.get(t2);
    const o2 = this._queue.push(t2), r2 = this.tileInfoView.getTileScale(e3.key), i2 = e(this._tilesByScale, r2, () => /* @__PURE__ */ new Set()), c3 = () => {
      i2.delete(e3.key), 0 === i2.size && this._tilesByScale.delete(r2), this._keyToItem.delete(t2);
    };
    return i2.add(e3.key), this._keyToItem.set(t2, e3), o2.then(c3, c3), o2;
  }
  reset() {
    this._queue.reset();
  }
  resume() {
    this._queue.resume();
  }
  _peek(e3) {
    if (!this.state) return e3.values().next().value;
    const t2 = /* @__PURE__ */ new Set();
    for (const r2 of e3) t2.add(this._keyToItem.get(r2).key);
    const s2 = this.state.scale;
    let o2, i2 = Number.POSITIVE_INFINITY;
    for (const [c3, u3] of this._tilesByScale) {
      if (n(u3, (e4) => t2.has(e4))) {
        const e4 = Math.abs(c3 - s2);
        e4 < i2 && (o2 = u3, i2 = e4);
      }
    }
    return this._getClosestTileKey(o2, e3).id;
  }
  _getClosestTileKey(e3, t2) {
    const s2 = this.tileInfoView, o2 = this.state.center;
    let r2, i2 = Number.POSITIVE_INFINITY;
    for (const c3 of e3) if (t2.has(c3.id)) {
      s2.getTileCoords(l, c3);
      const e4 = m(l, o2);
      e4 < i2 && (i2 = e4, r2 = c3);
    }
    return r2;
  }
};
__decorate([a({ constructOnly: true })], h.prototype, "concurrency", void 0), __decorate([a({ constructOnly: true })], h.prototype, "priority", void 0), __decorate([a({ constructOnly: true })], h.prototype, "process", void 0), __decorate([a({ constructOnly: true })], h.prototype, "scheduler", void 0), __decorate([a()], h.prototype, "state", void 0), __decorate([a({ constructOnly: true })], h.prototype, "tileInfoView", void 0), h = __decorate([c("esri.views.2d.tiling.TileQueue")], h);
var a2 = h;

// node_modules/@arcgis/core/views/2d/tiling/TileCache.js
var t = class {
  constructor(e3, t2, i2) {
    this.maxSize = e3, this._tilingScheme = t2, this._removedFunc = i2, this._tilePerId = /* @__PURE__ */ new Map(), this._tileKeysPerLevel = [];
  }
  clear() {
    if (this._removedFunc) for (const e3 of this._tilePerId.values()) this._removedFunc(e3);
    this._tilePerId.clear(), this._tileKeysPerLevel = [];
  }
  has(e3) {
    return this._tilePerId.has(e3);
  }
  get(e3) {
    return this._tilePerId.get(e3);
  }
  pop(e3) {
    const t2 = this._tilePerId.get(e3);
    if (!t2) return;
    const r2 = t2.key.level, s2 = this._tileKeysPerLevel[r2];
    i(this._tilePerId, e3);
    for (let i2 = 0; i2 < s2.length; i2++) if (s2[i2].id === e3) {
      s2.splice(i2, 1);
      break;
    }
    return t2.visible = true, t2;
  }
  add(e3) {
    e3.visible = false;
    const t2 = e3.key, i2 = t2.id;
    if (this._tilePerId.has(i2)) return;
    this._tilePerId.set(i2, e3);
    const r2 = t2.level;
    this._tileKeysPerLevel[r2] || (this._tileKeysPerLevel[r2] = []), this._tileKeysPerLevel[r2].push(t2);
  }
  prune(e3, t2, i2) {
    let r2 = this._tilePerId.size;
    if (r2 <= this.maxSize) return;
    let s2 = this._tileKeysPerLevel.length - 1;
    for (; r2 > this.maxSize && s2 >= 0; ) s2 !== e3 && (r2 = this._pruneAroundCenterTile(r2, t2, i2, s2)), s2--;
    r2 > this.maxSize && (r2 = this._pruneAroundCenterTile(r2, t2, i2, e3));
  }
  _pruneAroundCenterTile(t2, i2, r2, s2) {
    const l2 = this._tileKeysPerLevel[s2];
    if (!l2 || 0 === l2.length) return t2;
    const { size: h3, origin: n2 } = this._tilingScheme, o2 = r2 * h3[0], _2 = r2 * h3[1], c3 = [0, 0], d = [0, 0];
    for (l2.sort((t3, r3) => (c3[0] = n2.x + o2 * (t3.col + 0.5), c3[1] = n2.y - _2 * (t3.row + 0.5), d[0] = n2.x + o2 * (r3.col + 0.5), d[1] = n2.y - _2 * (r3.row + 0.5), b2(c3, i2) - b2(d, i2))); l2.length > 0; ) {
      const e3 = l2.pop();
      if (this._removeTile(e3.id), --t2 === this.maxSize) break;
    }
    return t2;
  }
  _removeTile(e3) {
    const t2 = this._tilePerId.get(e3);
    this._removedFunc && t2 && this._removedFunc(t2), i(this._tilePerId, e3);
  }
};
function i(e3, t2) {
  e3.delete(t2);
}

// node_modules/@arcgis/core/views/2d/tiling/TileStrategy.js
var o = new e2(0, 0, 0, 0);
var a3 = /* @__PURE__ */ new Map();
var h2 = [];
var c2 = [];
var r = class {
  constructor(e3) {
    this._previousScale = Number.POSITIVE_INFINITY, this.cachePolicy = "keep", this.coveragePolicy = "closest", this.resampling = true, this.tileIndex = /* @__PURE__ */ new Map(), this.tiles = [], this.buffer = 192, this.acquireTile = e3.acquireTile, this.releaseTile = e3.releaseTile, this.tileInfoView = e3.tileInfoView, null != e3.resampling && (this.resampling = e3.resampling), e3.cachePolicy && (this.cachePolicy = e3.cachePolicy), e3.coveragePolicy && (this.coveragePolicy = e3.coveragePolicy), null != e3.buffer && (this.buffer = e3.buffer), e3.cacheSize && (this._tileCache = new t(e3.cacheSize, this.tileInfoView, (e4) => {
      this.releaseTile(e4);
    }));
  }
  destroy() {
    this.tileIndex.clear();
  }
  update(e3) {
    const { resampling: i2, tileIndex: t2 } = this, { scale: l2, center: r2, resolution: n2 } = e3.state, { minScale: f, maxScale: d } = this.tileInfoView, u3 = !e3.stationary && l2 > this._previousScale;
    if (this._previousScale = l2, !i2 && (l2 > f || l2 < d)) return this.tiles.length = 0, void this.clear();
    const p = this.tileInfoView.getTileCoverage(e3.state, this.buffer, this.resampling, this.coveragePolicy);
    if (!p) return this.tiles.length = 0, void this.clear();
    const { spans: y, lodInfo: g } = p, { level: I } = g;
    this.tiles.length = 0, t2.forEach((e4) => e4.visible = true);
    let v = 0, m2 = 0;
    if (y.length > 0) for (const { row: s2, colFrom: h3, colTo: c3 } of y) for (let e4 = h3; e4 <= c3; e4++) {
      v++;
      const i3 = o.set(I, s2, g.normalizeCol(e4), g.getWorldForColumn(e4)).id;
      let l3 = t2.get(i3);
      if (l3) l3.isReady ? (a3.set(i3, l3), m2++) : u3 || this._addParentTile(i3, a3);
      else {
        if (this._tileCache?.has(i3)) {
          if (l3 = this._tileCache.pop(i3), this.tileIndex.set(i3, l3), l3.isReady) {
            a3.set(i3, l3), m2++;
            continue;
          }
        } else l3 = this.acquireTile(o), this.tileIndex.set(i3, l3);
        u3 || this._addParentTile(i3, a3);
      }
    }
    const T = m2 === v;
    for (const [s2, _2] of t2) {
      if (a3.has(s2)) continue;
      o.set(s2);
      const e4 = this.tileInfoView.intersects(p, o), i3 = "purge" === this.cachePolicy ? o.level !== I : o.level > I;
      !e4 || !u3 && T ? !i3 && e4 || h2.push(_2) : _2.isReady ? i3 && "purge" === this.cachePolicy && this._hasReadyAncestor(o, I) ? h2.push(_2) : c2.push(_2) : i3 && h2.push(_2);
    }
    for (const s2 of c2) s2.isReady && a3.set(s2.key.id, s2);
    for (const s2 of h2) this._tileCache ? this._tileCache.add(s2) : this.releaseTile(s2), t2.delete(s2.key.id);
    for (const s2 of a3.values()) this.tiles.push(s2);
    for (const s2 of t2.values()) a3.has(s2.key.id) || (s2.visible = false);
    this._tileCache?.prune(I, r2, n2), s.pool.release(p), c2.length = 0, h2.length = 0, a3.clear();
  }
  clear() {
    const { tileIndex: e3 } = this;
    for (const i2 of e3.values()) this.releaseTile(i2);
    e3.clear();
  }
  refresh(e3) {
    for (const i2 of this.tileIndex.values()) e3(i2);
    this._tileCache?.clear();
  }
  updateCacheSize(e3) {
    this._tileCache && (this._tileCache.maxSize = e3);
  }
  _addParentTile(e3, i2) {
    let t2 = e3, s2 = null;
    for (; t2 = this.tileInfoView.getTileParentId(t2), t2; ) if (this.tileIndex.has(t2)) {
      if (s2 = this.tileIndex.get(t2), s2?.isReady) {
        i2.has(s2.key.id) || i2.set(s2.key.id, s2);
        break;
      }
    } else if (this._tileCache?.has(t2) && (s2 = this._tileCache.pop(t2), this.tileIndex.set(t2, s2), s2?.isReady)) {
      i2.has(s2.key.id) || i2.set(s2.key.id, s2);
      break;
    }
  }
  _hasReadyAncestor(t2, s2) {
    const l2 = u2();
    this.tileInfoView.getTileBounds(l2, t2, true);
    for (const o2 of this.tileIndex.values()) if (o2.isReady && o2.key.level >= s2 && o2.key.level < t2.level) {
      const t3 = u2();
      if (this.tileInfoView.getTileBounds(t3, o2.key, true), B(t3, l2)) return true;
    }
    return false;
  }
};

export {
  a2 as a,
  r
};
//# sourceMappingURL=chunk-MICLFW2W.js.map
