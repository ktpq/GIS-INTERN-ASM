import {
  d,
  f as f2,
  h,
  i,
  m as m2,
  x
} from "./chunk-P45VGIGO.js";
import {
  C as C3,
  n as n3,
  r as r2,
  s as s2,
  y as y2
} from "./chunk-YJM5XEQD.js";
import {
  n as n4,
  t
} from "./chunk-7L3OWZWB.js";
import {
  $,
  C as C2,
  H,
  O as O2,
  ce,
  fe,
  ie,
  j as j2,
  ne,
  re
} from "./chunk-XELHAIWJ.js";
import {
  R,
  p
} from "./chunk-L3BK5XDF.js";
import {
  O,
  S as S2,
  j,
  l2,
  s,
  u as u2
} from "./chunk-QIW5SGHS.js";
import {
  g
} from "./chunk-PJZ2JORO.js";
import {
  u
} from "./chunk-Y6TGJABT.js";
import {
  l,
  z as z2
} from "./chunk-IDR4SUAQ.js";
import {
  y
} from "./chunk-DJHTC3GB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  C,
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n as n2
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c,
  m
} from "./chunk-GUGGSMY4.js";
import {
  L,
  w
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/raster/datasets/BaseRaster.js
var X = 8;
var K = 256;
var Y = 0;
var Z = class extends n2 {
  constructor() {
    super(...arguments), this._tileFetchQueue = new u({ concurrency: 32, process: (e2, t3) => this.fetchRawTile(e2.pyramidLevel, e2.row, e2.col, __spreadProps(__spreadValues({}, e2.options), { signal: t3 })) }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = true, this.rasterInfo = null, this.ioConfig = { sampling: "closest" }, this.rawBlockRegistryIds = [], this.refresh = L(async (e2) => {
      await this._openPromise;
      const t3 = await this._refresh(e2);
      return t3.dataChanged && f2(this.rasterId, this.rawBlockRegistryIds), t3;
    });
  }
  normalizeCtorArgs(e2) {
    return e2?.ioConfig && (e2 = __spreadProps(__spreadValues({}, e2), { ioConfig: __spreadValues({ resolution: null, bandIds: null, sampling: "closest", tileInfo: z2.create() }, e2.ioConfig) })), e2;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: e2 } = this, t3 = $(e2.spatialReference);
    return null != t3 && e2.extent.width >= t3 / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: e2 } = this.rasterInfo;
    return null == e2 || "gcs-shift" === e2.type;
  }
  set rasterJobHandler(e2) {
    this._set("rasterJobHandler", e2), t(this) && this.primaryRasters?.rasters?.forEach((t3) => t3.rasterJobHandler = e2);
  }
  get rasterId() {
    return this.url || "rasterId-" + Y++;
  }
  set url(e2) {
    this._set("url", C(e2, n.getLogger(this)));
  }
  async open(e2) {
    return this._openPromise ??= j2().then(() => this._open(e2)), this._openPromise;
  }
  async fetchTile(e2, t3, r4, o2 = {}) {
    const n6 = o2.tileInfo || this.rasterInfo.storageInfo.tileInfo, s3 = this.getTileExtentFromTileInfo(e2, t3, r4, n6);
    if (!s3) throw new r("imagery-tile:out-of-bounds", "Level for fetch tile out of range");
    return o2 = __spreadValues({ noClip: true }, o2), this.fetchPixels(s3, n6.size[0], n6.size[1], o2);
  }
  async identify(e2, t3 = {}) {
    e2 = m(_, e2).clone().normalize();
    const { multidimensionalDefinition: i3, timeExtent: r4 } = t3, { rasterInfo: o2 } = this, { hasMultidimensionalTranspose: n6, multidimensionalInfo: s3 } = o2;
    let { transposedVariableName: l4 } = t3;
    const a2 = null != s3 && n6 && (null != r4 || y2(i3));
    if (a2 && !l4) {
      l4 = null != i3 && i3.length > 0 ? i3[0].variableName ?? void 0 : s3.variables[0].name, t3 = __spreadProps(__spreadValues({}, t3), { transposedVariableName: l4 });
    }
    t3 = this._getRequestOptionsWithSliceId(t3);
    const { spatialReference: c3, extent: h2 } = o2, { datumTransformation: d2 } = t3;
    let y3 = O2(e2, c3, d2);
    if (!h2.intersects(y3)) return { location: y3, value: null };
    if (null != o2.transform) {
      const e3 = o2.transform.inverseTransform(y3);
      if (!o2.nativeExtent.intersects(e3)) return { location: e3, value: null };
      y3 = e3;
    }
    let g2 = 0;
    const I = null != l4 && null != s3 && o2.hasMultidimensionalTranspose;
    if (t(this)) {
      const e3 = this.primaryRasters.rasters[0];
      if (I) return e3.identify(y3, t3);
      const { pixelSize: r5 } = o2, n7 = 3, s4 = r5.x * n7 / 2, l5 = r5.y * n7 / 2, a3 = new z({ xmin: y3.x - s4, xmax: y3.x + s4, ymin: y3.y - l5, ymax: y3.y + l5, spatialReference: c3 }), f3 = { interpolation: "nearest", multidimensionalDefinition: i3, sliceId: t3.sliceId, bandIds: t3.bandIds }, { pixelBlock: m3 } = await e3.fetchPixels(a3, n7, n7, f3), { pixelBlock: h3 } = await this.fetchPixels(a3, n7, n7, f3);
      if (null == m3) return { location: y3, value: null };
      const p2 = Math.floor(n7 * n7 * 0.5), d3 = !m3.mask || m3.mask[p2] ? m3.pixels.map((e4) => e4[p2]) : null;
      let x2;
      return null != h3 && (x2 = !h3.mask || h3.mask[p2] ? h3.pixels.map((e4) => e4[p2]) : void 0), { location: y3, value: d3, processedValue: x2, pyramidLevel: 0 };
    }
    if (!I) {
      if (t3.srcResolution) {
        g2 = fe(t3.srcResolution, o2, this.ioConfig.sampling).pyramidLevel;
      } else if (g2 = await this.computeBestPyramidLevelForLocation(e2, t3), null == g2) return { location: y3, value: null };
    }
    const R2 = this.identifyPixelLocation(y3, g2, null, I);
    if (null === R2) return { location: y3, value: null };
    const { row: w2, col: S3, rowOffset: k, colOffset: b, blockWidth: T } = R2, v = await this._fetchRawTile(g2, w2, S3, t3);
    if (!v?.pixels?.length) return { location: y3, value: null };
    const P = k * T + b;
    return this._processIdentifyResult(v, { srcLocation: y3, position: P, pyramidLevel: g2, useTransposedTile: !!I, requestSomeSlices: a2, identifyOptions: t3 });
  }
  async fetchPixels(e2, t3, i3, r4 = {}) {
    e2 = ce(e2), r4 = this._getRequestOptionsWithSliceId(r4);
    const { _hasNoneOrGCSShiftTransform: o2 } = this;
    if (r4.requestRawData && o2) return this._fetchPixels(e2, t3, i3, r4);
    const n6 = $(e2.spatialReference), s3 = ne(e2);
    if (null == n6 || 0 === s3 || 1 === s3 && this._isGlobalWrappableSource && o2) return this._fetchPixels(e2, t3, i3, r4);
    if (s3 >= 3) return { extent: e2, pixelBlock: null };
    const l4 = [], { xmin: a2, xmax: c3 } = e2, f3 = Math.round(n6 / (c3 - a2) * t3), m3 = f3 - Math.round((n6 / 2 - a2) / (c3 - a2) * t3);
    let h2 = 0;
    const p2 = [];
    for (let g2 = 0; g2 <= s3; g2++) {
      const o3 = new z({ xmin: 0 === g2 ? a2 : -n6 / 2, xmax: g2 === s3 ? c3 - n6 * g2 : n6 / 2, ymin: e2.ymin, ymax: e2.ymax, spatialReference: e2.spatialReference }), d3 = 0 === g2 ? f3 - m3 : g2 === s3 ? t3 - h2 : f3;
      h2 += d3, p2.push(d3);
      const x3 = r4.disableWrapAround && g2 > 0 ? null : this._fetchPixels(o3, d3, i3, r4);
      l4.push(x3);
    }
    const d2 = (await Promise.all(l4)).map((e3) => e3?.pixelBlock);
    let x2 = null;
    const y3 = { width: t3, height: i3 };
    if (this.rasterJobHandler) {
      x2 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: d2, srcMosaicSize: y3, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: p2 }, r4)).pixelBlock;
    } else x2 = S2(d2, y3, { blockWidths: p2 });
    return { extent: e2, srcExtent: H(e2, this.rasterInfo.spatialReference, r4.datumTransformation), pixelBlock: x2 };
  }
  async fetchRawPixels(e2, t3, i3, r4 = {}) {
    t3 = { x: Math.floor(t3.x), y: Math.floor(t3.y) };
    const o2 = await this._fetchRawTiles(e2, t3, i3, r4), { nativeExtent: n6, nativePixelSize: s3, storageInfo: l4 } = this.rasterInfo, a2 = 2 ** e2, c3 = s3.x * a2, f3 = s3.y * a2, m3 = new z({ xmin: n6.xmin + c3 * t3.x, xmax: n6.xmin + c3 * (t3.x + i3.width - 1), ymin: n6.ymax - f3 * (t3.y + i3.height - 1), ymax: n6.ymax - f3 * t3.y, spatialReference: n6.spatialReference });
    if (!o2) return { extent: m3, srcExtent: m3, pixelBlock: null };
    const { pixelBlocks: h2, mosaicSize: p2 } = o2;
    if (1 === h2.length && null != h2[0] && h2[0].width === i3.width && h2[0].height === i3.height) return { extent: m3, srcExtent: m3, pixelBlock: o2.pixelBlocks[0] };
    const d2 = e2 > 0 ? l4.pyramidBlockWidth : l4.blockWidth, x2 = e2 > 0 ? l4.pyramidBlockHeight : l4.blockHeight, y3 = { x: t3.x % d2, y: t3.y % x2 };
    let g2;
    if (this.rasterJobHandler) {
      g2 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: h2, srcMosaicSize: p2, destDimension: i3, clipOffset: y3, clipSize: i3, coefs: null, sampleSpacing: null, interpolation: r4.interpolation, alignmentInfo: null, blockWidths: null }, r4)).pixelBlock;
    } else g2 = S2(h2, p2, { clipOffset: y3, clipSize: i3 });
    return { extent: m3, srcExtent: m3, pixelBlock: g2 };
  }
  fetchRawTile(e2, t3, r4, o2) {
    throw new r("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(e2) {
    return H(this.rasterInfo.extent, e2);
  }
  decodePixelBlock(e2, t3) {
    return !this.rasterJobHandler || t3.useCanvas ? R(e2, t3) : this.rasterJobHandler.decode({ data: e2, options: t3 });
  }
  async request(e2, i3, r4 = 0) {
    const { customFetchParameters: o2 } = this.ioConfig, { range: n6, query: s3, headers: l4 } = i3;
    r4 = r4 ?? i3.retryCount ?? this.ioConfig.retryCount;
    const a2 = n6 ? { Range: `bytes=${n6.from}-${n6.to}` } : null;
    try {
      return await f(e2, __spreadProps(__spreadValues({}, i3), { query: __spreadValues(__spreadValues({}, s3), o2), headers: __spreadValues(__spreadValues({}, l4), a2) }));
    } catch (c3) {
      if (r4 > 0) return r4--, this.request(e2, i3, r4);
      throw c3;
    }
  }
  getSliceIndex(e2) {
    const { multidimensionalInfo: t3 } = this.rasterInfo;
    return null == t3 || null == e2 || 0 === e2.length ? null : C3(e2, t3);
  }
  getTileExtentFromTileInfo(e2, t3, i3, r4) {
    const o2 = r4.lodAt(e2);
    return o2 ? this.getTileExtent({ x: o2.resolution, y: o2.resolution }, t3, i3, r4.origin, r4.spatialReference, r4.size) : null;
  }
  updateTileInfo() {
    const { storageInfo: e2, spatialReference: t3, extent: i3, pixelSize: r4 } = this.rasterInfo, { pyramidResolutions: o2 } = e2;
    if (!e2.tileInfo) {
      const n6 = [], s3 = e2.maximumPyramidLevel || 0;
      let l4 = (r4.x + r4.y) / 2, a2 = 1 / 0.0254 * 96 * l4;
      for (let e3 = 0; e3 <= s3 && (n6.unshift(new l({ level: s3 - e3, resolution: l4, scale: a2 })), e3 !== s3); e3++) if (o2) {
        const t4 = (o2[e3].x + o2[e3].y) / 2;
        a2 *= t4 / l4, l4 = t4;
      } else l4 *= 2, a2 *= 2;
      const c3 = new _({ x: i3.xmin, y: i3.ymax, spatialReference: t3 });
      e2.tileInfo = new z2({ origin: c3, size: [e2.blockWidth, e2.blockHeight], spatialReference: t3, lods: n6 }), e2.isVirtualTileInfo = true;
    }
  }
  createRemoteDatasetStorageInfo(e2, t3 = 512, i3 = 512, r4) {
    const { width: o2, height: n6, nativeExtent: s3, pixelSize: l4, spatialReference: a2 } = e2, c3 = new _({ x: s3.xmin, y: s3.ymax, spatialReference: a2 });
    null == r4 && (r4 = Math.max(0, Math.round(Math.log(Math.max(o2, n6)) / Math.LN2 - 8)));
    const f3 = this.computeBlockBoundary(s3, 512, 512, { x: s3.xmin, y: s3.ymax }, [l4], r4);
    e2.storageInfo = new p({ blockWidth: t3, blockHeight: i3, pyramidBlockWidth: t3, pyramidBlockHeight: i3, origin: c3, firstPyramidLevel: 1, maximumPyramidLevel: r4, blockBoundary: f3 });
  }
  async computeBestPyramidLevelForLocation(e2, t3 = {}) {
    return 0;
  }
  computeBlockBoundary(e2, t3, i3, r4, o2, n6 = 0, s3 = 2) {
    if (1 === o2.length && n6 > 0) {
      o2 = [...o2];
      let { x: e3, y: t4 } = o2[0];
      for (let i4 = 0; i4 < n6; i4++) e3 *= s3, t4 *= s3, o2.push({ x: e3, y: t4 });
    }
    const l4 = [], { x: a2, y: c3 } = r4;
    for (let f3 = 0; f3 < o2.length; f3++) {
      const { x: r5, y: n7 } = o2[f3];
      l4.push({ minCol: Math.floor((e2.xmin - a2 + 0.1 * r5) / t3 / r5), maxCol: Math.floor((e2.xmax - a2 - 0.1 * r5) / t3 / r5), minRow: Math.floor((c3 - e2.ymax + 0.1 * n7) / i3 / n7), maxRow: Math.floor((c3 - e2.ymin - 0.1 * n7) / i3 / n7) });
    }
    return l4;
  }
  getPyramidPixelSize(e2) {
    const { nativePixelSize: t3 } = this.rasterInfo, { pyramidResolutions: i3, pyramidScalingFactor: r4 } = this.rasterInfo.storageInfo;
    if (0 === e2) return t3;
    if (null != i3 && i3.length) return i3[e2 - 1];
    const o2 = r4 ** e2;
    return { x: t3.x * o2, y: t3.y * o2 };
  }
  identifyPixelLocation(e2, t3, i3, r4) {
    const { spatialReference: o2, nativeExtent: n6, storageInfo: s3 } = this.rasterInfo, { maximumPyramidLevel: l4, origin: a2, transposeInfo: c3 } = s3, f3 = r4 && null != c3 ? c3.tileSize[0] : s3.blockWidth, u4 = r4 && null != c3 ? c3.tileSize[1] : s3.blockHeight, m3 = O2(e2, o2, i3);
    if (!n6.intersects(m3)) return null;
    if (t3 < 0 || t3 > l4) return null;
    const h2 = this.getPyramidPixelSize(t3), { x: p2, y: d2 } = h2, x2 = (a2.y - m3.y) / d2 / u4, y3 = (m3.x - a2.x) / p2 / f3, g2 = Math.min(u4 - 1, Math.floor((x2 - Math.floor(x2)) * u4)), I = Math.min(f3 - 1, Math.floor((y3 - Math.floor(y3)) * f3));
    return { pyramidLevel: t3, row: Math.floor(x2), col: Math.floor(y3), rowOffset: g2, colOffset: I, blockWidth: f3, srcLocation: m3 };
  }
  getTileExtent(e2, t3, i3, r4, o2, n6) {
    const [s3, l4] = n6, a2 = r4.x + i3 * s3 * e2.x, c3 = a2 + s3 * e2.x, f3 = r4.y - t3 * l4 * e2.y, m3 = f3 - l4 * e2.y;
    return new z({ xmin: a2, xmax: c3, ymin: m3, ymax: f3, spatialReference: o2 });
  }
  getBlockWidthHeight(e2) {
    return { blockWidth: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(e2, t3, i3) {
    const r4 = this.rasterInfo.storageInfo.blockBoundary[e2];
    return !r4 || r4.maxRow < t3 || r4.maxCol < i3 || r4.minRow > t3 || r4.minCol > i3;
  }
  updateImageSpaceRasterInfo(e2) {
    const { pixelSize: t3 } = e2, { width: i3, height: r4 } = e2, o2 = S.WebMercator;
    e2.spatialReference = o2, e2.extent = e2.nativeExtent = new z({ xmin: -0.5, ymax: 0.5, xmax: i3 - 0.5, ymin: 0.5 - r4, spatialReference: o2 }), e2.isPseudoSpatialReference = true, e2.transform = null, e2.pixelSize = new _({ x: 1, y: 1, spatialReference: o2 });
    const { extent: n6, storageInfo: s3 } = e2;
    if (s3) {
      s3.origin = new _({ x: n6.xmin, y: n6.ymax, spatialReference: o2 });
      const { pyramidResolutions: i4, tileInfo: r5 } = s3;
      if (i4 && i4.forEach((e3) => {
        e3.x /= t3.x, e3.y /= t3.y;
      }), r5) {
        r5.origin = s3.origin;
        const t4 = (e2.nativePixelSize.x + e2.nativePixelSize.y) / 2;
        r5.lods.forEach((e3, i5) => {
          e3.resolution = t4 * 2 ** i5, e3.scale = 96 * e3.resolution / 0.0254;
        });
      }
    }
  }
  async _refresh(e2) {
    return { dataChanged: true };
  }
  async _fetchPixels(e2, t3, i3, r4 = {}) {
    let o2 = ne(e2);
    if (o2 >= 2) return { extent: e2, pixelBlock: null };
    const n6 = this._getSourceDataInfo(e2, t3, i3, r4), { pyramidLevel: s3, srcResolution: l4, srcExtent: a2, srcWidth: c3, srcHeight: f3, ul: u4 } = n6;
    if (0 === c3 || 0 === f3) return { extent: e2, srcExtent: a2, pixelBlock: null };
    const { rasterInfo: h2 } = this, p2 = h2.transform, d2 = "gcs-shift" === p2?.type, x2 = null != $(e2.spatialReference);
    !d2 && x2 || (o2 = ne(n6.srcExtent, d2));
    const y3 = await this._fetchRawTiles(s3, u4, { width: c3, height: f3, wrapCount: o2 }, r4);
    if (!y3) return { extent: e2, srcExtent: a2, pixelBlock: null };
    const g2 = h2.storageInfo, I = s3 > 0 ? g2.pyramidBlockWidth : g2.blockWidth, R2 = s3 > 0 ? g2.pyramidBlockHeight : g2.blockHeight;
    let { x: w2, y: S3 } = h2.pixelSize;
    if (s3 > 0) {
      const { pyramidResolutions: e3, pyramidScalingFactor: t4 } = g2;
      if (null != e3 && e3[s3 - 1]) ({ x: w2, y: S3 } = e3[s3 - 1]);
      else {
        const e4 = t4 ** s3;
        w2 *= e4, S3 *= e4;
      }
    }
    const k = h2.spatialReference, b = new _({ x: w2, y: S3, spatialReference: k }), T = I === c3 && R2 === f3 && u4.x % I === 0 && u4.y % R2 === 0, v = new _({ x: (e2.xmax - e2.xmin) / t3, y: (e2.ymax - e2.ymin) / i3, spatialReference: e2.spatialReference }), P = !e2.spatialReference.equals(k), C4 = k.isGeographic ? 1e-9 : 1e-4, { datumTransformation: z3 } = r4;
    if (!P && T && 1 === y3.pixelBlocks.length && I === t3 && R2 === i3 && ee(l4, v, C4)) return { extent: e2, srcExtent: a2, srcTilePixelSize: b, pixelBlock: y3.pixelBlocks[0] };
    const L2 = x2 && null != $(a2.spatialReference) && this._hasNoneOrGCSShiftTransform, E = r4.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    E && !this.rasterJobHandler && await j2();
    const D = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: e2, srcBufferExtent: y3.extent, pixelSize: v.toJSON(), datumTransformation: z3, rasterTransform: p2, hasWrapAround: o2 > 0 || L2, isAdaptive: false !== this.ioConfig.optimizeProjectionAccuracy, includeGCSGrid: E }, r4) : re({ projectedExtent: e2, srcBufferExtent: y3.extent, pixelSize: v, datumTransformation: z3, rasterTransform: p2, hasWrapAround: o2 > 0 || L2, isAdaptive: false, includeGCSGrid: E });
    let A;
    const q = !r4.requestRawData, G = { rows: D.spacing[0], cols: D.spacing[1] }, J = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(s3, y3.extent.xmin) : void 0, { pixelBlocks: N, mosaicSize: V, isPartiallyFilled: U } = y3;
    let Q = null;
    if (this.rasterJobHandler) {
      const e3 = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: N, srcMosaicSize: V, destDimension: q ? { width: t3, height: i3 } : null, coefs: q ? D.coefficients : null, sampleSpacing: q ? G : null, projectDirections: E, gcsGrid: E ? D.gcsGrid : null, isUV: "vector-uv" === this.rasterInfo.dataType, interpolation: r4.interpolation, alignmentInfo: J, blockWidths: null }, r4);
      ({ pixelBlock: A, localNorthDirections: Q } = e3);
    } else {
      const e3 = S2(N, V, { alignmentInfo: J });
      A = q ? O(e3, { width: t3, height: i3 }, D.coefficients, G, r4.interpolation) : e3, E && D.gcsGrid && (Q = j({ width: t3, height: i3 }, D.gcsGrid), A = u2(A, this.rasterInfo.dataType, Q));
    }
    return r4.requestRawData || E ? { extent: e2, srcExtent: a2, srcTilePixelSize: b, pixelBlock: A, transformGrid: D, localNorthDirections: Q, isPartiallyFilled: U } : { extent: e2, srcExtent: a2, srcTilePixelSize: b, pixelBlock: A };
  }
  async _fetchRawTiles(e2, t3, i3, r4) {
    const { origin: o2, blockBoundary: n6 } = this.rasterInfo.storageInfo, { blockWidth: s3, blockHeight: l4 } = this.getBlockWidthHeight(e2);
    let { x: a2, y: c3 } = t3, { width: f3, height: m3, wrapCount: h2 } = i3;
    const p2 = this._getRasterTileAlignmentInfo(e2, 0);
    r4.buffer && (a2 -= r4.buffer.cols, c3 -= r4.buffer.rows, f3 += 2 * r4.buffer.cols, m3 += 2 * r4.buffer.rows);
    let d2 = 0, x2 = 0, y3 = 0;
    if (h2 && null != p2) {
      ({ worldColumnCountFromOrigin: x2, originColumnOffset: y3, rightPadding: d2 } = p2);
      x2 * p2.blockWidth - d2 >= a2 + f3 && (d2 = 0);
    }
    const g2 = Math.floor(a2 / s3), I = Math.floor(c3 / l4), R2 = Math.floor((a2 + f3 + d2 - 1) / s3), w2 = Math.floor((c3 + m3 + d2 - 1) / l4), S3 = n6[e2];
    if (!S3) return null;
    const { minRow: k, minCol: b, maxCol: T, maxRow: v } = S3;
    if (0 === h2 && (w2 < k || R2 < b || I > v || g2 > T)) return null;
    const P = new Array();
    let B = false;
    const _2 = null == this.ioConfig.allowPartialFill ? r4.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let u4 = I; u4 <= w2; u4++) for (let t4 = g2; t4 <= R2; t4++) {
      let i4 = t4;
      if (!r4.disableWrapAround && h2 && null != p2 && x2 <= t4 && (i4 = t4 - x2 - y3), u4 >= k && i4 >= b && v >= u4 && T >= i4) {
        const t5 = this._fetchRawTile(e2, u4, i4, r4);
        _2 ? P.push(new Promise((e3) => {
          t5.then((t6) => e3(t6)).catch(() => {
            B = true, e3(null);
          });
        })) : P.push(t5);
      } else P.push(Promise.resolve(null));
    }
    if (0 === P.length) return null;
    const M = await Promise.all(P), C4 = { height: (w2 - I + 1) * l4, width: (R2 - g2 + 1) * s3 }, { spatialReference: W } = this.rasterInfo, H2 = this.getPyramidPixelSize(e2), { x: z3, y: L2 } = H2;
    return { extent: new z({ xmin: o2.x + g2 * s3 * z3, xmax: o2.x + (R2 + 1) * s3 * z3, ymin: o2.y - (w2 + 1) * l4 * L2, ymax: o2.y - I * l4 * L2, spatialReference: W }), pixelBlocks: M, mosaicSize: C4, isPartiallyFilled: B };
  }
  _fetchRawTile(e2, t3, i3, r4) {
    const { storageInfo: o2 } = this.rasterInfo, n6 = null != o2.transposeInfo && !!r4.transposedVariableName;
    if (!n6) {
      const r5 = o2.blockBoundary[e2];
      if (!r5) return Promise.resolve(null);
      const { minRow: n7, minCol: s3, maxCol: l5, maxRow: a3 } = r5;
      if (t3 < n7 || i3 < s3 || t3 > a3 || i3 > l5) return Promise.resolve(null);
    }
    const l4 = n6 ? r4.transposeVariableName : r4.sliceId, a2 = o2.isBsqTile ? r4.bandIds : null, c3 = i(this.rasterId, l4, a2), f3 = `${e2}/${t3}/${i3}`;
    let u4 = h(c3, r4.registryId, f3);
    if (null == u4) {
      const n7 = new AbortController(), s3 = r4.bandIds?.slice();
      if (s3?.length && o2.isBsqTile) {
        const o3 = new Set(s3), l5 = [], a3 = Array.from(o3);
        for (const s4 of a3) l5.push(this._tileFetchQueue.push({ pyramidLevel: e2, row: t3, col: i3, options: __spreadProps(__spreadValues({}, r4), { bandIds: [s4] }) }, { signal: n7.signal }));
        u4 = Promise.all(l5).then((e3) => {
          if (e3.some((e4) => null == e4)) return null;
          if (a3.length !== s3.length) {
            const t4 = [];
            for (const i4 of s3) {
              let r5 = e3[a3.indexOf(i4)];
              t4.includes(r5) && (r5 = r5.clone()), t4.push(r5);
            }
            e3 = t4;
          }
          return this.rasterJobHandler ? this.rasterJobHandler.compositeBands({ pixelBlocks: e3 }, { signal: n7.signal, transferPixelsToWorker: true }) : s(e3);
        });
      } else u4 = this._tileFetchQueue.push({ pyramidLevel: e2, row: t3, col: i3, options: r4 }, { signal: n7.signal });
      x(c3, r4.registryId, f3, u4, n7), u4.catch(() => d(c3, r4.registryId, f3));
    }
    return r4.signal && w(r4, () => {
      m2(c3, r4.registryId, f3);
    }), u4;
  }
  _computeMagDirValues(e2) {
    const { bandCount: t3, dataType: i3 } = this.rasterInfo;
    if (!(2 === t3 && "vector-magdir" === i3 || "vector-uv" === i3) || 2 !== e2?.length || !e2[0]?.length) return null;
    const r4 = e2[0].length;
    if ("vector-magdir" === i3) {
      const t4 = e2[1].map((e3) => (e3 + 360) % 360);
      return [e2[0], t4];
    }
    const [o2, n6] = e2, s3 = [], l4 = [];
    for (let a2 = 0; a2 < r4; a2++) {
      const [e3, t4] = l2([o2[a2], n6[a2]]);
      s3.push(e3), l4.push(t4);
    }
    return [s3, l4];
  }
  _getRasterTileAlignmentInfo(e2, t3) {
    return null == this._rasterTileAlignmentInfo && (this._rasterTileAlignmentInfo = ie(this.rasterInfo)), null == this._rasterTileAlignmentInfo.pyramidsInfo ? null : __spreadValues({ startX: t3, halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform }, this._rasterTileAlignmentInfo.pyramidsInfo[e2]);
  }
  _getSourceDataInfo(e2, t3, i3, r4 = {}) {
    const o2 = { datumTransformation: r4.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    r4.srcResolution && (o2.srcResolution = r4.srcResolution, this._updateSourceDataInfo(e2, o2));
    const n6 = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: s3, srcHeight: l4, pyramidLevel: a2 } = o2, c3 = s3 / t3, f3 = l4 / i3, u4 = a2 < n6 && c3 * f3 >= 16, h2 = a2 === n6 && this._requireTooManySrcTiles(s3, l4, t3, i3);
    if (u4 || h2 || (0 === s3 || 0 === l4)) {
      const s4 = new _({ x: (e2.xmax - e2.xmin) / t3, y: (e2.ymax - e2.ymin) / i3, spatialReference: e2.spatialReference });
      let l5 = C2(s4, this.rasterInfo.spatialReference, e2, o2.datumTransformation);
      const h3 = !l5 || r4.srcResolution && l5.x + l5.y < r4.srcResolution.x + r4.srcResolution.y;
      if (u4 && r4.srcResolution && h3) {
        const e3 = Math.round(Math.log(Math.max(c3, f3)) / Math.LN2) - 1;
        if (n6 - a2 + 3 >= e3) {
          const t4 = 2 ** e3;
          l5 = { x: r4.srcResolution.x * t4, y: r4.srcResolution.y * t4 };
        }
      }
      l5 && (o2.srcResolution = l5, this._updateSourceDataInfo(e2, o2));
    }
    return this._requireTooManySrcTiles(o2.srcWidth, o2.srcHeight, t3, i3) && (o2.srcWidth = 0, o2.srcHeight = 0), o2;
  }
  _requireTooManySrcTiles(e2, t3, i3, r4) {
    const { tileInfo: o2 } = this.rasterInfo.storageInfo, n6 = Math.ceil(e2 / o2.size[0]) * Math.ceil(t3 / o2.size[1]), s3 = e2 / i3, l4 = t3 / r4, a2 = Math.max(1, (i3 + r4) / 1024);
    return n6 >= K * a2 || s3 > X || l4 > X;
  }
  _updateSourceDataInfo(e2, t3) {
    t3.srcWidth = 0, t3.srcHeight = 0;
    const { rasterInfo: i3 } = this, r4 = i3.spatialReference, { srcResolution: o2, datumTransformation: n6 } = t3, { pyramidLevel: s3, pyramidResolution: l4, excessiveReading: a2 } = fe(o2, i3, this.ioConfig.sampling);
    if (a2) return;
    let c3 = t3.srcExtent || H(e2, r4, n6);
    if (null == c3) return;
    const f3 = i3.transform;
    f3 && (c3 = f3.inverseTransform(c3)), t3.srcExtent = c3;
    const { origin: u4 } = i3.storageInfo, { width: m3, height: h2, ul: p2 } = n4(c3, u4, l4, s3);
    t3.pyramidLevel = s3, t3.pyramidResolution = l4, t3.srcWidth = m3, t3.srcHeight = h2, t3.ul = p2;
  }
  _getRequestOptionsWithSliceId(e2) {
    return null != this.rasterInfo.multidimensionalInfo && null == e2.sliceId && (e2 = __spreadProps(__spreadValues({}, e2), { sliceId: this.getSliceIndex(e2.multidimensionalDefinition) })), e2;
  }
  _processIdentifyResult(e2, t3) {
    const { srcLocation: i3, position: r4, pyramidLevel: o2, useTransposedTile: n6 } = t3, s3 = e2.pixels[0].length / e2.width / e2.height;
    if (!(!e2.mask || e2.mask[r4])) return { location: i3, value: null };
    const { multidimensionalInfo: l4 } = this.rasterInfo;
    if (null == l4 || !n6) {
      const t4 = e2.pixels.map((e3) => e3[r4]), n7 = { location: i3, value: t4, pyramidLevel: o2 }, s4 = this._computeMagDirValues(t4.map((e3) => [e3]));
      return s4?.length && (n7.magdirValue = s4.map((e3) => e3[0])), n7;
    }
    let a2 = e2.pixels.map((e3) => e3.slice(r4 * s3, r4 * s3 + s3)), c3 = this._computeMagDirValues(a2);
    const { requestSomeSlices: f3, identifyOptions: u4 } = t3;
    let m3 = s2(l4, u4.transposedVariableName);
    if (f3) {
      const e3 = r2(m3, u4.multidimensionalDefinition, u4.timeExtent);
      a2 = a2.map((t4) => e3.map((e4) => t4[e4])), c3 = c3?.map((t4) => e3.map((e4) => t4[e4])), m3 = e3.map((e4) => m3[e4]);
    }
    const h2 = e2.noDataValues || this.rasterInfo.noDataValue, p2 = { pixels: a2, pixelType: e2.pixelType };
    let d2;
    null != h2 && (g(p2, h2), d2 = p2.mask);
    return { location: i3, value: null, dataSeries: m3.map((e3, t4) => {
      const i4 = { value: 0 === d2?.[t4] ? null : a2.map((e4) => e4[t4]), multidimensionalDefinition: e3.multidimensionalDefinition.map((e4) => new n3(__spreadProps(__spreadValues({}, e4), { isSlice: true }))) };
      return c3?.length && (i4.magdirValue = [c3[0][t4], c3[1][t4]]), i4;
    }), pyramidLevel: o2 };
  }
};
function ee(e2, t3, i3) {
  return Math.abs(e2.x - t3.x) < i3 && Math.abs(e2.y - t3.y) < i3;
}
__decorate([a()], Z.prototype, "_rasterTileAlignmentInfo", void 0), __decorate([a()], Z.prototype, "_tileFetchQueue", void 0), __decorate([a({ readOnly: true })], Z.prototype, "_isGlobalWrappableSource", null), __decorate([a({ readOnly: true })], Z.prototype, "_hasNoneOrGCSShiftTransform", null), __decorate([a()], Z.prototype, "_openPromise", void 0), __decorate([a()], Z.prototype, "rasterJobHandler", null), __decorate([a({ readOnly: true })], Z.prototype, "rasterId", null), __decorate([a(y)], Z.prototype, "url", null), __decorate([a({ type: String, json: { write: true } })], Z.prototype, "datasetName", void 0), __decorate([a({ type: String, json: { write: true } })], Z.prototype, "datasetFormat", void 0), __decorate([a()], Z.prototype, "hasUniqueSourceStorageInfo", void 0), __decorate([a()], Z.prototype, "rasterInfo", void 0), __decorate([a()], Z.prototype, "ioConfig", void 0), __decorate([a()], Z.prototype, "sourceJSON", void 0), __decorate([a()], Z.prototype, "rawBlockRegistryIds", void 0), Z = __decorate([c("esri.layers.raster.datasets.BaseRaster")], Z);

// node_modules/@arcgis/core/layers/raster/datasets/xmlUtilities.js
function n5(e2, t3) {
  if (!e2 || !t3) return [];
  let l4 = t3;
  t3.includes("/") ? (l4 = t3.slice(0, t3.indexOf("/")), t3 = t3.slice(t3.indexOf("/") + 1)) : t3 = "";
  const r4 = [];
  if (t3) {
    const u5 = n5(e2, l4);
    for (let e3 = 0; e3 < u5.length; e3++) {
      n5(u5[e3], t3).forEach((n6) => r4.push(n6));
    }
    return r4;
  }
  const u4 = e2.getElementsByTagNameNS("*", l4);
  if (!u4 || 0 === u4.length) return [];
  for (let n6 = 0; n6 < u4.length; n6++) r4.push(u4[n6] || u4.item(n6));
  return r4;
}
function e(t3, l4) {
  if (!t3 || !l4) return null;
  let r4 = l4;
  l4.includes("/") ? (r4 = l4.slice(0, l4.indexOf("/")), l4 = l4.slice(l4.indexOf("/") + 1)) : l4 = "";
  const u4 = n5(t3, r4);
  return u4.length > 0 ? l4 ? e(u4[0], l4) : u4[0] : null;
}
function t2(n6, t3 = null) {
  const l4 = t3 ? e(n6, t3) : n6;
  let r4;
  return l4 ? (r4 = l4.textContent || l4.nodeValue, r4 ? r4.trim() : null) : null;
}
function l3(e2, t3) {
  const l4 = n5(e2, t3), r4 = [];
  let u4;
  for (let n6 = 0; n6 < l4.length; n6++) u4 = l4[n6].textContent || l4[n6].nodeValue, u4 && (u4 = u4.trim(), "" !== u4 && r4.push(u4));
  return r4;
}
function r3(n6, e2 = null) {
  const l4 = t2(n6, e2);
  return l4?.split(" ").map((n7) => Number(n7)) ?? [];
}
function u3(n6, e2) {
  return l3(n6, e2).map((n7) => Number(n7));
}
function o(n6, e2) {
  const l4 = t2(n6, e2);
  return Number(l4);
}
function i2(n6, e2) {
  const t3 = n6?.nodeName?.toLowerCase(), l4 = e2.toLowerCase();
  return t3.slice(t3.lastIndexOf(":") + 1) === l4;
}
function c2(n6) {
  return n6.nodeName.slice(n6.nodeName.lastIndexOf(":") + 1);
}

export {
  Z,
  n5 as n,
  e,
  t2 as t,
  l3 as l,
  r3 as r,
  u3 as u,
  o,
  i2 as i,
  c2 as c
};
//# sourceMappingURL=chunk-S33MG65S.js.map
