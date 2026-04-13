import {
  e as e3
} from "./chunk-KJEM2HRG.js";
import {
  e as e2
} from "./chunk-BEJRYYIA.js";
import {
  i
} from "./chunk-JNCFJPS4.js";
import {
  h,
  l
} from "./chunk-CD6IOUFB.js";
import {
  A,
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a2,
  c
} from "./chunk-GUGGSMY4.js";
import {
  y as y2
} from "./chunk-IQN5O5FG.js";
import {
  r as r2
} from "./chunk-TVMQ3GIS.js";
import {
  a as a3,
  d,
  e,
  u3 as u,
  w
} from "./chunk-2DNVIDFH.js";
import {
  a,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  y2 as y
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/UintArray.js
function n(n3, e4 = false) {
  return n3 <= y ? e4 ? new Array(n3).fill(0) : new Array(n3) : new Uint32Array(n3);
}

// node_modules/@arcgis/core/layers/support/Tilemap.js
var l2 = class _l {
  constructor(t) {
    s(t);
    const { location: i2, data: l3 } = t;
    this.location = Object.freeze(a(i2));
    const r4 = this.location.width, n3 = this.location.height;
    let h2 = true, c2 = true;
    const m = Math.ceil(r4 * n3 / 32), f2 = n(m);
    let w3 = 0;
    for (let e4 = 0; e4 < l3.length; e4++) {
      const t2 = e4 % 32;
      l3[e4] ? (c2 = false, f2[w3] |= 1 << t2) : h2 = false, 31 === t2 && ++w3;
    }
    c2 ? (this._availability = "unavailable", this.byteSize = 40) : h2 ? (this._availability = "available", this.byteSize = 40) : (this._availability = f2, this.byteSize = 40 + i(f2));
  }
  getAvailability(t, i2) {
    if ("unavailable" === this._availability || "available" === this._availability) return this._availability;
    const e4 = (t - this.location.top) * this.location.width + (i2 - this.location.left), a4 = e4 % 32, o = e4 >> 5, l3 = this._availability;
    return o < 0 || o > l3.length ? "unknown" : l3[o] & 1 << a4 ? "available" : "unavailable";
  }
  static fromDefinition(e4, a4) {
    const o = e4.service.request || f, { row: r4, col: s2, width: h2, height: c2 } = e4, m = { query: { f: "json" } };
    return a4 = a4 ? __spreadValues(__spreadValues({}, m), a4) : m, o(n2(e4), a4).then((t) => t.data).catch((t) => {
      if (422 === t?.details?.httpStatus) return { location: { top: r4, left: s2, width: h2, height: c2 }, valid: true, data: new Array(h2 * c2).fill(0) };
      throw t;
    }).then((t) => {
      if (t.location && (t.location.top !== r4 || t.location.left !== s2 || t.location.width !== h2 || t.location.height !== c2)) throw new r("tilemap:location-mismatch", "Tilemap response for different location than requested", { response: t, definition: { top: r4, left: s2, width: h2, height: c2 } });
      return _l.fromJSON(t);
    });
  }
  static fromJSON(t) {
    return Object.freeze(new _l(t));
  }
};
function r3(t) {
  return `${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;
}
function n2(t) {
  let i2;
  if (t.service.tileServers?.length) {
    const e5 = t.service.tileServers;
    i2 = `${e5 && e5.length ? e5[t.row % e5.length] : t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;
  } else i2 = `${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;
  const e4 = t.service.query;
  return e4 && (i2 = `${i2}?${e4}`), i2;
}
function s(t) {
  if (!t?.location) throw new r("tilemap:missing-location", "Location missing from tilemap response");
  if (false === t.valid) throw new r("tilemap:invalid", "Tilemap response was marked as invalid");
  if (!t.data) throw new r("tilemap:missing-data", "Data missing from tilemap response");
  if (!Array.isArray(t.data)) throw new r("tilemap:data-mismatch", "Data must be an array of numbers");
  if (t.data.length !== t.location.width * t.location.height) throw new r("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
}

// node_modules/@arcgis/core/layers/support/TilemapCache.js
var g;
function w2(e4, t, i2) {
  return new r("tile-map:tile-unavailable", "Tile is not available", { level: e4, row: t, col: i2 });
}
var T = class extends b {
  static {
    g = this;
  }
  constructor(e4) {
    super(e4), this._pendingTilemapRequests = {}, this.request = f, this.size = 32, this._prefetchingEnabled = true;
  }
  initialize() {
    this._tilemapCache = new e2(2097152), this.addHandles(l(() => {
      const { layer: e4 } = this;
      return [e4?.parsedUrl, e4?.tileServers, e4?.apiKey, e4?.customParameters];
    }, () => this._initializeTilemapDefinition(), h));
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.layer.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.layer.tileInfo.lods[this.layer.tileInfo.lods.length - 1].level;
  }
  getAvailability(e4, t, i2) {
    if (!this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD) return "unavailable";
    const r4 = this._tilemapFromCache(e4, t, i2, this._tmpTilemapDefinition);
    return r4 ? r4.getAvailability(t, i2) : "unknown";
  }
  fetchAvailability(e4, t, i2, r4) {
    return !this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD ? Promise.reject(w2(e4, t, i2)) : this._fetchTilemap(e4, t, i2, r4).catch((e5) => e5).then((r5) => {
      if (r5 instanceof l2) {
        const s2 = r5.getAvailability(t, i2);
        if ("unavailable" === s2) throw w2(e4, t, i2);
        return s2;
      }
      if (d(r5)) throw r5;
      return "unknown";
    });
  }
  fetchAvailabilityUpsample(e4, t, i2, r4, s2) {
    r4.level = e4, r4.row = t, r4.col = i2;
    const l3 = this.layer.tileInfo;
    l3.updateTileInfo(r4);
    const o = this.fetchAvailability(e4, t, i2, s2).catch((e5) => {
      if (d(e5)) throw e5;
      if (l3.upsampleTile(r4)) return this.fetchAvailabilityUpsample(r4.level, r4.row, r4.col, r4, s2);
      throw e5;
    });
    return this._fetchAvailabilityUpsamplePrefetch(e4, t, i2, s2, o), o;
  }
  async _fetchAvailabilityUpsamplePrefetch(e4, t, i2, r4, l3) {
    if (!this._prefetchingEnabled) return;
    const o = `prefetch-${e4}-${t}-${i2}`;
    if (this.hasHandles(o)) return;
    const a4 = new AbortController();
    l3.then(() => a4.abort(), () => a4.abort());
    let c2 = false;
    const h2 = e(() => {
      c2 || (c2 = true, a4.abort());
    });
    if (this.addHandles(h2, o), await y2(10, a4.signal).catch(() => {
    }), c2 || (c2 = true, this.removeHandles(o)), a3(a4)) return;
    const p = new e3(e4, t, i2), f2 = __spreadProps(__spreadValues({}, r4), { signal: a4.signal }), u2 = this.layer.tileInfo;
    for (let s2 = 0; g._prefetches.length < g._maxPrefetch && u2.upsampleTile(p); ++s2) {
      const e5 = this.fetchAvailability(p.level, p.row, p.col, f2);
      g._prefetches.push(e5);
      const t2 = () => {
        g._prefetches.removeUnordered(e5);
      };
      e5.then(t2, t2);
    }
  }
  static {
    this._maxPrefetch = 4;
  }
  static {
    this._prefetches = new r2({ initialSize: g._maxPrefetch });
  }
  static cleanupTilemapCache() {
    this._prefetches.prune();
  }
  _fetchTilemap(e4, t, i2, s2) {
    if (!this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD) return Promise.reject(new r("tilemap-cache:level-unavailable", `Level ${e4} is unavailable in the service`));
    const l3 = this._tmpTilemapDefinition, o = this._tilemapFromCache(e4, t, i2, l3);
    if (o) return Promise.resolve(o);
    const a4 = s2?.signal;
    return s2 = __spreadProps(__spreadValues({}, s2), { signal: null }), new Promise((e5, t2) => {
      w(a4, () => t2(u()));
      const i3 = r3(l3);
      let r4 = this._pendingTilemapRequests[i3];
      if (!r4) {
        r4 = l2.fromDefinition(l3, s2).then((e7) => (this._tilemapCache.put(i3, e7, e7.byteSize), e7));
        const e6 = () => {
          delete this._pendingTilemapRequests[i3];
        };
        this._pendingTilemapRequests[i3] = r4, r4.then(e6, e6);
      }
      r4.then(e5, t2);
    });
  }
  _initializeTilemapDefinition() {
    if (!this.layer.parsedUrl) return;
    const { parsedUrl: e4, apiKey: t, customParameters: i2 } = this.layer;
    this._tilemapCache.clear(), this._tmpTilemapDefinition = { service: { url: e4.path, query: A(__spreadProps(__spreadValues(__spreadValues({}, e4.query), i2), { token: t ?? e4.query?.token })), tileServers: this.layer.tileServers, request: this.request }, width: this.size, height: this.size, level: 0, row: 0, col: 0 };
  }
  _tilemapFromCache(e4, t, i2, r4) {
    r4.level = e4, r4.row = t - t % this.size, r4.col = i2 - i2 % this.size;
    const s2 = r3(r4);
    return this._tilemapCache.get(s2);
  }
  get test() {
  }
};
__decorate([a2({ constructOnly: true })], T.prototype, "layer", void 0), __decorate([a2({ constructOnly: true })], T.prototype, "minLOD", void 0), __decorate([a2({ constructOnly: true })], T.prototype, "maxLOD", void 0), __decorate([a2({ constructOnly: true })], T.prototype, "request", void 0), __decorate([a2({ constructOnly: true })], T.prototype, "size", void 0), T = g = __decorate([c("esri.layers.support.TilemapCache")], T);

export {
  T
};
//# sourceMappingURL=chunk-U625QJDA.js.map
