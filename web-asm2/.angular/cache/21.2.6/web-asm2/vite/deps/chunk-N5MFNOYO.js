import {
  s as s3
} from "./chunk-DGLA2VDA.js";
import {
  u as u2
} from "./chunk-CYNA6F3U.js";
import {
  o as o2
} from "./chunk-SPY6G63G.js";
import {
  m as m2
} from "./chunk-ZKQBZGUV.js";
import {
  l,
  z as z2
} from "./chunk-IDR4SUAQ.js";
import {
  l as l2
} from "./chunk-IL4FQAB7.js";
import {
  _ as _2
} from "./chunk-XQWWS2MW.js";
import {
  g
} from "./chunk-SNVXOKVA.js";
import {
  e
} from "./chunk-SWNARI4F.js";
import {
  y
} from "./chunk-DJHTC3GB.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import {
  u
} from "./chunk-SLHRVNEB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  A,
  S,
  m,
  q,
  s
} from "./chunk-ZILR7JK7.js";
import {
  _,
  c as c2,
  h
} from "./chunk-X7TQ4MJH.js";
import {
  S as S2
} from "./chunk-YDHIJ7J4.js";
import {
  re
} from "./chunk-DHNLUBWZ.js";
import {
  A as A3
} from "./chunk-4X5LQ2UO.js";
import {
  A as A2,
  f2
} from "./chunk-5AVTDH3Y.js";
import {
  a3 as a,
  c,
  o4 as o
} from "./chunk-GUGGSMY4.js";
import {
  f2 as f,
  s as s2,
  t2 as t
} from "./chunk-2DNVIDFH.js";
import {
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/LercDecoder.js
var r2 = class extends o2 {
  constructor(e2 = null) {
    super("LercWorker", "_decode", { _decode: (e3) => [e3.buffer] }, e2, { strategy: "dedicated" }), this.schedule = e2, this.ref = 0;
  }
  decode(e2, r3, t3) {
    return e2 && 0 !== e2.byteLength ? this.invoke({ buffer: e2, options: r3 }, t3) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t2.forEach((e2, r3) => {
      e2 === this && t2.delete(r3);
    }), this.destroy());
  }
};
var t2 = /* @__PURE__ */ new Map();
function s4(e2 = null) {
  let s5 = t2.get(e2);
  return s5 || (null != e2 ? (s5 = new r2((r3) => e2.immediate.schedule(r3)), t2.set(e2, s5)) : (s5 = new r2(), t2.set(null, s5))), ++s5.ref, s5;
}

// node_modules/@arcgis/core/views/3d/terrain/TilingScheme.js
var g2 = 12;
var f3 = class _f {
  constructor(e2) {
    const t3 = _f.checkUnsupported(e2);
    if (null != t3) throw t3;
    const i = e2;
    this.spatialReference = i.spatialReference, this._isWebMercator = this.spatialReference.isWebMercator, this._isGCS = A3(this.spatialReference), this.origin = [i.origin.x, i.origin.y], this.pixelSize = i.size[0], this.dpi = i.dpi;
    const s5 = i.lods.reduce((e3, t4) => (t4.level < e3.minLod.level && (e3.minLod = t4), e3.max = Math.max(e3.max, t4.level), e3), { minLod: i.lods[0], max: -1 / 0 }), r3 = s5.minLod, l4 = 2 ** r3.level;
    let n = r3.resolution * l4, o3 = r3.scale * l4;
    this.levels = new Array(s5.max + 1);
    for (let a2 = 0; a2 < this.levels.length; a2++) this.levels[a2] = { resolution: n, scale: o3, tileSize: [n * i.size[0], n * i.size[1]] }, n /= 2, o3 /= 2;
  }
  clone() {
    return new _f(this.toTileInfo());
  }
  toTileInfo() {
    return new z2({ dpi: this.dpi, origin: new _({ x: this.origin[0], y: this.origin[1], spatialReference: this.spatialReference }), size: [this.pixelSize, this.pixelSize], spatialReference: this.spatialReference, lods: this.levels.map((e2, t3) => new l({ level: t3, scale: e2.scale, resolution: e2.resolution })) });
  }
  getExtent(e2, t3, i, s5) {
    const r3 = this.levels[e2], l4 = r3.tileSize[0], n = r3.tileSize[1];
    s5[0] = this.origin[0] + i * l4, s5[2] = this.origin[0] + (i + 1) * l4, s5[3] = this.origin[1] - t3 * n, s5[1] = this.origin[1] - (t3 + 1) * n;
  }
  convertExtentToRadians(e2, i) {
    this._isWebMercator ? (i[0] = c2(e2[0]), i[1] = h(e2[1]), i[2] = c2(e2[2]), i[3] = h(e2[3])) : this._isGCS && (i[0] = s(e2[0]), i[1] = s(e2[1]), i[2] = s(e2[2]), i[3] = s(e2[3]));
  }
  getExtentGeometry(e2, t3, i, s5 = new z()) {
    return this.getExtent(e2, t3, i, v), s5.spatialReference = this.spatialReference, s5.xmin = v[0], s5.ymin = v[1], s5.xmax = v[2], s5.ymax = v[3], s5.zmin = void 0, s5.zmax = void 0, s5;
  }
  ensureMaxLod(e2) {
    if (null == e2) return false;
    let t3 = false;
    for (; this.levels.length <= e2; ) {
      const { resolution: e3, scale: i } = this.levels[this.levels.length - 1], s5 = e3 / 2 * this.pixelSize;
      this.levels.push({ resolution: e3 / 2, scale: i / 2, tileSize: [s5, s5] }), t3 = true;
    }
    return t3;
  }
  capMaxLod(e2) {
    this.levels.length > e2 + 1 && (this.levels.length = e2 + 1);
  }
  getMaxLod() {
    return this.levels.length - 1;
  }
  scaleAtLevel(e2) {
    return this.levels[0].scale / 2 ** e2;
  }
  levelAtScale(e2) {
    const t3 = this.levels[0].scale;
    return e2 >= t3 ? 0 : Math.log(t3 / e2) * Math.LOG2E;
  }
  resolutionAtLevel(e2) {
    return this.levels[0].resolution / 2 ** e2;
  }
  compatibleWith(e2, t3 = 1 / 0) {
    if (_f.checkUnsupported(e2)) return false;
    const s5 = new _f(e2);
    if (!s5.spatialReference.equals(this.spatialReference)) return false;
    if (s5.pixelSize !== this.pixelSize) return false;
    const r3 = Math.min(this.levels.length - 1, s5.levels.length - 1, t3), l4 = this.levels[r3].resolution;
    let n = 0.5 * l4;
    if (!m(s5.origin[0], this.origin[0], n) || !m(s5.origin[1], this.origin[1], n)) return false;
    return n = 0.5 * l4 / 2 ** r3 / this.pixelSize * g2, m(l4, s5.levels[r3].resolution, n);
  }
  rootTilesInExtent(e2, t3 = null, i = 1 / 0) {
    const s5 = new Array(), r3 = this.levels[0].tileSize;
    if (null == e2 || 0 === r3[0] || 0 === r3[1]) return s5;
    _f.computeRowColExtent(e2, r3, this.origin, v);
    let l4 = v[1], n = v[3], o3 = v[0], a2 = v[2];
    const h2 = a2 - o3, c4 = n - l4;
    if (h2 * c4 > i) {
      const e3 = Math.floor(Math.sqrt(i));
      c4 > e3 && (l4 = l4 + Math.floor(0.5 * c4) - Math.floor(0.5 * e3), n = l4 + e3), h2 > e3 && (o3 = o3 + Math.floor(0.5 * h2) - Math.floor(0.5 * e3), a2 = o3 + e3);
    }
    for (let m4 = l4; m4 < n; m4++) for (let e3 = o3; e3 < a2; e3++) s5.push([0, m4, e3]);
    return null != t3 && (t3[0] = this.origin[0] + o3 * r3[0], t3[1] = this.origin[1] - n * r3[1], t3[2] = this.origin[0] + a2 * r3[0], t3[3] = this.origin[1] - l4 * r3[1]), s5;
  }
  static computeRowColExtent(e2, t3, i, s5) {
    const r3 = 1e-3 * (e2[2] - e2[0] + (e2[3] - e2[1]));
    s5[0] = Math.max(0, Math.floor((e2[0] + r3 - i[0]) / t3[0])), s5[2] = Math.max(0, Math.ceil((e2[2] - r3 - i[0]) / t3[0])), s5[1] = Math.max(0, Math.floor((i[1] - e2[3] + r3) / t3[1])), s5[3] = Math.max(0, Math.ceil((i[1] - e2[1] - r3) / t3[1]));
  }
  static isPowerOfTwo(e2) {
    const t3 = e2.lods, i = t3[0].resolution * 2 ** t3[0].level;
    return !t3.some((e3) => !A(e3.resolution, i / 2 ** e3.level));
  }
  static hasGapInLevels(e2) {
    const t3 = e2.lods.map((e3) => e3.level);
    t3.sort((e3, t4) => e3 - t4);
    for (let i = 1; i < t3.length; i++) if (t3[i] !== t3[0] + i) return true;
    return false;
  }
  static tileSizeSupported(e2) {
    const t3 = e2.size[1];
    return t3 === e2.size[0] && !(t3 & t3 - 1) && t3 >= 128 && t3 <= 512;
  }
  static hasOriginPerLODs(e2) {
    const t3 = e2.origin;
    return e2.lods.some((e3) => null != e3.origin && (e3.origin[0] !== t3.x || e3.origin[1] !== t3.y));
  }
  static getMissingTileInfoError() {
    return new r("tilingscheme:tile-info-missing", "Tiling scheme must have tiling information");
  }
  static checkUnsupported(t3) {
    return null == t3 ? x() : t3.lods.length < 1 ? new r("tilingscheme:generic", "Tiling scheme must have at least one level") : _f.isPowerOfTwo(t3) ? _f.hasGapInLevels(t3) ? new r("tilingscheme:gaps", "Tiling scheme levels must not have gaps between min and max level") : _f.tileSizeSupported(t3) ? _f.hasOriginPerLODs(t3) ? new r("tilingscheme:multiple-origin", "Tiling scheme levels must not have their own origin") : null : new r("tilingscheme:tile-size", "Tiles must be square and size must be one of [128, 256, 512]") : new r("tilingscheme:power-of-two", "Tiling scheme must be power of two");
  }
  static fromExtent(e2, t3) {
    const i = e2[2] - e2[0], s5 = e2[3] - e2[1], l4 = re(t3), o3 = 1.2 * Math.max(i, s5), a2 = 256, h2 = o3 / a2, c4 = h2 * l4 * (96 / 0.0254), m4 = new _f(new z2({ size: [a2, a2], origin: new _({ x: e2[0] - 0.5 * (o3 - i), y: e2[3] + 0.5 * (o3 - s5) }), lods: [new l({ level: 0, resolution: h2, scale: c4 })], spatialReference: t3 }));
    return m4.ensureMaxLod(20), m4;
  }
  static makeWebMercatorAuxiliarySphere(e2) {
    const t3 = new _f(_f.WebMercatorAuxiliarySphereTileInfo);
    return t3.ensureMaxLod(e2), t3;
  }
  static makeGCSWithTileSize(e2, t3 = 256, i = 16) {
    const s5 = 256 / t3, r3 = new _f(new z2({ size: [t3, t3], origin: new _({ x: -180, y: 90, spatialReference: e2 }), spatialReference: e2, lods: [new l({ level: 0, resolution: 0.703125 * s5, scale: 295497598570834e-6 * s5 })] }));
    return r3.ensureMaxLod(i), r3;
  }
  static {
    this.WebMercatorAuxiliarySphereTileInfo = new z2({ size: [256, 256], origin: new _({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: S2.WebMercator }), spatialReference: S2.WebMercator, lods: [new l({ level: 0, resolution: 156543.03392800014, scale: 591657527591555e-6 })] });
  }
  static {
    this.WebMercatorAuxiliarySphere = _f.makeWebMercatorAuxiliarySphere(19);
  }
  get test() {
  }
};
function x() {
  return new r("tilingscheme:tile-info-missing", "Tiling scheme must have tiling information");
}
var v = u();

// node_modules/@arcgis/core/views/3d/terrain/TerrainConst.js
var l3 = S(q / 10);
var m3 = u();
f3.WebMercatorAuxiliarySphere.getExtent(0, 0, 0, m3);
var c3 = u([-180, -90, 180, 90]);

// node_modules/@arcgis/core/layers/ElevationLayer.js
var j = class extends s3(l2(g(_2(e(b))))) {
  constructor(...e2) {
    super(...e2), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s4();
  }
  normalizeCtorArgs(e2, r3) {
    return "string" == typeof e2 ? __spreadValues({ url: e2 }, r3) : e2;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e2, r3) {
    const t3 = r3.capabilities && r3.capabilities.split(",").map((e3) => e3.toLowerCase().trim());
    if (!t3) return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t3.includes("tilemap") } };
  }
  readVersion(e2, r3) {
    let t3 = r3.currentVersion;
    return t3 || (t3 = 9.3), t3;
  }
  load(e2) {
    const r3 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e3) => {
      if (e3.typeKeywords) {
        for (let r4 = 0; r4 < e3.typeKeywords.length; r4++) if ("elevation 3d layer" === e3.typeKeywords[r4].toLowerCase()) return true;
      }
      throw new r("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e2).catch(f).then(() => this._fetchImageService(r3))), Promise.resolve(this);
  }
  fetchTile(e2, t3, i, o3) {
    const a2 = o3?.signal, s5 = { responseType: "array-buffer", signal: a2 }, p = { noDataValue: o3?.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e2, t3, i, o3)).then(() => f2(this.getTileUrl(e2, t3, i), s5)).then((e3) => this._lercDecoder.decode(e3.data, p, a2)).then((e3) => new u2(e3 ? new u2({ values: e3.pixelData, width: e3.width, height: e3.height, noDataValue: e3.noDataValue }) : { values: [], width: 0, height: 0, noDataValue: o3?.noDataValue ?? l3 }));
  }
  getTileUrl(e2, r3, t3) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o3 = A2(__spreadProps(__spreadValues({}, this.parsedUrl.query), { blankTile: !i && null }));
    return `${this.parsedUrl.path}/tile/${e2}/${r3}/${t3}${o3 ? "?" + o3 : ""}`;
  }
  async queryElevation(e2, r3) {
    const { query: t3 } = await import("./ElevationQuery-7Q6X56PH.js");
    return s2(r3), t3(this, e2, r3);
  }
  async createElevationSampler(e2, r3) {
    const { createSampler: t3 } = await import("./ElevationQuery-7Q6X56PH.js");
    return s2(r3), t3(this, e2, r3);
  }
  _fetchTileAvailability(e2, r3, t3, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e2, r3, t3, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(e2) {
    if (this.sourceJSON) return this.sourceJSON;
    const t3 = { query: __spreadValues({ f: "json" }, this.parsedUrl.query), responseType: "json", signal: e2 }, i = await f2(this.parsedUrl.path, t3);
    i.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[T];
  }
};
__decorate([a({ readOnly: true })], j.prototype, "capabilities", void 0), __decorate([o("service", "capabilities", ["capabilities"])], j.prototype, "readCapabilities", null), __decorate([a({ json: { read: { source: "copyrightText" } } })], j.prototype, "copyright", void 0), __decorate([a({ readOnly: true, type: m2 })], j.prototype, "heightModelInfo", void 0), __decorate([a({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], j.prototype, "path", void 0), __decorate([a({ type: ["show", "hide"] })], j.prototype, "listMode", void 0), __decorate([a({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], j.prototype, "minScale", void 0), __decorate([a({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], j.prototype, "maxScale", void 0), __decorate([a({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], j.prototype, "opacity", void 0), __decorate([a({ type: ["ArcGISTiledElevationServiceLayer"] })], j.prototype, "operationalLayerType", void 0), __decorate([a()], j.prototype, "sourceJSON", void 0), __decorate([a({ json: { read: false }, value: "elevation", readOnly: true })], j.prototype, "type", void 0), __decorate([a(y)], j.prototype, "url", void 0), __decorate([a()], j.prototype, "version", void 0), __decorate([o("version", ["currentVersion"])], j.prototype, "readVersion", null), j = __decorate([c("esri.layers.ElevationLayer")], j);
var T = /* @__PURE__ */ Symbol("default-fetch-tile");
j.prototype.fetchTile[T] = true;
var b2 = j;

export {
  b2 as b
};
//# sourceMappingURL=chunk-N5MFNOYO.js.map
