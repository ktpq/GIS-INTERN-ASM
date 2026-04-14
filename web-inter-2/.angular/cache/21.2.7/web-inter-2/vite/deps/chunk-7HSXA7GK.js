import {
  c as c2,
  g as g2,
  h,
  j as j3,
  l,
  p as p3,
  p2 as p4,
  s,
  u
} from "./chunk-M75CAYMU.js";
import {
  E,
  N,
  U,
  W,
  ae,
  i,
  q,
  z as z2
} from "./chunk-NABOZJHB.js";
import {
  Z
} from "./chunk-4D4PTJH2.js";
import {
  D as D3,
  b,
  g,
  n as n2,
  p as p2,
  v,
  y as y2
} from "./chunk-IJOPR7BF.js";
import {
  t
} from "./chunk-ZCPCMSQC.js";
import {
  D as D2
} from "./chunk-HU2XX7D3.js";
import {
  p,
  r as r3
} from "./chunk-7RARBLIZ.js";
import {
  O as O2
} from "./chunk-LZILQUKZ.js";
import {
  H,
  Q,
  j as j2
} from "./chunk-QITH4MVW.js";
import {
  a as a2
} from "./chunk-GO4B55V5.js";
import {
  k
} from "./chunk-DBQB4ORW.js";
import {
  O
} from "./chunk-OW6LIBYB.js";
import {
  z
} from "./chunk-IQZJUZUB.js";
import {
  g as g3
} from "./chunk-EE4SGCNH.js";
import {
  y
} from "./chunk-PX67TG6P.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  G
} from "./chunk-LANOLZOB.js";
import {
  C,
  f2 as f
} from "./chunk-RVKOLALF.js";
import {
  D,
  a3 as a,
  c,
  m,
  o4 as o,
  r3 as r2
} from "./chunk-JM4CKTH2.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/raster/datasets/FunctionRaster.js
var p5 = 40;
var m2 = class extends Z {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  async fetchPixels(t2, e, r4, i2 = {}) {
    const { rasters: s2, rasterIds: a3 } = this.primaryRasters;
    let l2 = false;
    const { interpolation: c3 } = i2, p6 = this.rasterFunction.flatWebGLFunctionChain?.hasFocalFunction;
    !i2.requestRawData && p6 && (l2 = 1 === s2.length && !i2.skipRasterFunction, i2 = __spreadProps(__spreadValues({}, i2), { interpolation: "bilinear", requestRawData: l2 })), i2.requestRawData && s2.length > 1 && !this.hasUniqueSourceStorageInfo && (l2 = false, i2 = __spreadProps(__spreadValues({}, i2), { requestRawData: false }));
    const m3 = s2.map((s3) => s3.fetchPixels(t2, e, r4, i2)), u3 = await Promise.all(m3), h3 = u3.map((t3) => t3.pixelBlock), f2 = l2 || i2.requestRawData ? u3.map((t3) => t3.srcTilePixelSize) : null;
    if (i2.skipRasterFunction || h3.every((t3) => null == t3)) return u3[0];
    const d = u3.find((t3) => null != t3.pixelBlock)?.extent ?? t2;
    let y3 = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: d, primaryPixelBlocks: h3, primaryPixelSizes: f2, primaryRasterIds: a3, parameters: this.processParameters }) : this.rasterFunction.process({ extent: d, primaryPixelBlocks: h3, primaryPixelSizes: f2, primaryRasterIds: a3 }, this.processParameters);
    const { transformGrid: g4 } = u3[0];
    if (!l2 || null == y3 || null == g4) {
      const t3 = i2.noClip ? null : this.getClippingGeometry(d.spatialReference);
      return !i2.noClip && null != y3 && t3 && (y3 = await r3(y3, d, t3)), __spreadProps(__spreadValues({}, u3[0]), { pixelBlock: y3 });
    }
    const x = { rows: g4.spacing[0], cols: g4.spacing[1] };
    let R;
    if (this.rasterJobHandler) {
      R = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [y3], srcMosaicSize: { width: y3.width, height: y3.height }, destDimension: { width: e, height: r4 }, coefs: g4.coefficients, sampleSpacing: x, projectDirections: false, gcsGrid: null, isUV: false, interpolation: c3, alignmentInfo: void 0, blockWidths: null }, i2)).pixelBlock;
    } else R = O(y3, { width: e, height: r4 }, g4.coefficients, x, c3);
    const w = i2.noClip ? null : this.getClippingGeometry(t2.spatialReference);
    return i2.noClip || null == R || null == w || (R = await r3(R, t2, w)), { extent: t2, srcExtent: u3[0].srcExtent, pixelBlock: R };
  }
  getClippingGeometry(t2) {
    const e = this._clippingGeometry.get("0");
    if (!t2 || !e) return e;
    const r4 = h2(t2);
    let i2 = this._clippingGeometry.get(r4);
    return null != i2 || (i2 = t2.equals(e.spatialReference) ? e : Q(e, t2), this._clippingGeometry.set(r4, i2)), i2;
  }
  async _open(t2) {
    const { rasterFunction: r4 } = this;
    r4.isRoot = true, this.primaryRasters?.rasters?.length ? r4.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = r4.getPrimaryRasters(), this.rasterJobHandler && this.primaryRasters.rasters?.forEach((t3) => t3.rasterJobHandler = this.rasterJobHandler));
    const { rasters: i2, rasterIds: s2 } = this.primaryRasters, a3 = i2.map((e) => e.rasterInfo ? void 0 : e.open(t2));
    await Promise.all(a3);
    const o2 = i2.map(({ rasterInfo: t3 }) => t3), n3 = r4.bind({ rasterInfos: o2, rasterIds: s2 });
    if (r4.rawSourceRasterInfos = o2, !n3.success || 0 === o2.length) throw new r("raster-function:open", `cannot bind the function: ${n3.error ?? ""}`);
    const l2 = "Table" === r4.functionName ? r4 : r4.functionArguments?.raster;
    "Table" === l2?.functionName && (r4.rasterInfo.attributeTable = g3.fromJSON(l2.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const p6 = o2[0];
    this.hasUniqueSourceStorageInfo = 1 === o2.length || o2.slice(1).every((t3) => u2(t3, p6)), this.set("sourceJSON", i2[0].sourceJSON), this.set("rasterInfo", r4.rasterInfo), await this._updateClipGeometry();
  }
  async syncJobHandler() {
    return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction);
  }
  async _updateClipGeometry() {
    const t2 = this.rasterFunction.getClippingGeometries()[0];
    let e = t2?.clippingGeometry;
    if (e && "inside" === t2.clippingType) {
      const { extent: t3 } = this.rasterInfo, r4 = await import("./densifyOperator-JJL7LD23.js"), i2 = await import("./differenceOperator-5U25CPY6.js");
      let a3 = r4.execute(j.fromExtent(t3), 2 * (t3.width + t3.height) / p5);
      a3 = Q(a3, e.spatialReference), e = i2.execute(a3, e);
    }
    this._clippingGeometry.clear(), e && this._clippingGeometry.set("0", e);
  }
};
function u2(t2, e) {
  const { storageInfo: r4, pixelSize: i2, spatialReference: s2, extent: a3 } = t2, { storageInfo: o2, pixelSize: n3, spatialReference: l2, extent: c3 } = e;
  return i2.x === n3.x && i2.y === n3.y && s2.equals(l2) && a3.equals(c3) && r4.blockHeight === o2.blockHeight && r4.blockWidth === o2.blockWidth && r4.maximumPyramidLevel === o2.maximumPyramidLevel && r4.firstPyramidLevel === o2.firstPyramidLevel && r4.pyramidBlockWidth === o2.pyramidBlockWidth && r4.pyramidBlockHeight === o2.pyramidBlockHeight && r4.pyramidScalingFactor === o2.pyramidScalingFactor;
}
function h2(t2) {
  return String(t2.wkid ?? t2.wkt ?? t2.wkt2);
}
__decorate([a({ type: String, json: { write: true } })], m2.prototype, "datasetFormat", void 0), __decorate([a()], m2.prototype, "tileType", void 0), __decorate([a()], m2.prototype, "rasterFunction", void 0), __decorate([a()], m2.prototype, "processParameters", void 0), __decorate([a()], m2.prototype, "primaryRasters", void 0), m2 = __decorate([c("esri.layers.raster.datasets.FunctionRaster")], m2);

// node_modules/@arcgis/core/layers/mixins/TiledImagery.js
var X = 1e3;
var Y = (Y2) => {
  const Z2 = Y2;
  let ee = class extends Z2 {
    constructor(...e) {
      super(...e), this._draRasterConfig = null, this._isConstructedFromFunctionRaster = false, this.bandIds = null, this.copyright = null, this.interpolation = null, this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = t(e[0]?.raster);
    }
    destroy() {
      this._draRasterConfig?.rasterJobHandler?.destroy(), this._shutdownJobHandler();
    }
    get fullExtent() {
      return this.serviceRasterInfo?.extent;
    }
    set multidimensionalDefinition(e) {
      this._set("multidimensionalDefinition", e), this.updateRenderer();
    }
    set rasterFunction(e) {
      "none" === e?.functionName?.toLowerCase() && (e = void 0), this._set("rasterFunction", e), this.updateRasterFunction();
    }
    set url(e) {
      this._set("url", C(e, n.getLogger(this)));
    }
    get renderer() {
      if ("imagery-tile" !== this.type) return this.internalRenderer;
      const { activePresetRendererName: e, presetRenderers: t2 } = this;
      if (e) {
        const r4 = t2?.find(({ name: t3 }) => t3 === e);
        return r4?.renderer.clone();
      }
      return this.internalRenderer;
    }
    set renderer(e) {
      "imagery-tile" === this.type && (this.activePresetRendererName = null), this.internalRenderer = e;
    }
    set internalRenderer(e) {
      null == e && null == this.rasterFunction ? this._configDefaultRenderer("override") : (this._set("internalRenderer", e), this.updateRenderer());
    }
    readRenderer(e, t2, r4) {
      const i2 = t2?.layerDefinition?.drawingInfo?.renderer;
      return c2(i2, r4) || void 0;
    }
    async computeStatisticsHistograms(e, t2) {
      await this.load(t2), e = m(j3, e).clone();
      const { serviceRasterInfo: i2 } = this;
      if (null == i2) throw new r("imagery-tile-mixin:compute-statistics-histograms", "serviceRasterInfo must be specified");
      const { geometry: n3 } = e;
      if (null == n3) throw new r("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let s2 = n3;
      const { spatialReference: o2 } = i2;
      if (!n3.spatialReference.equals(o2)) {
        await j2();
        const e2 = "extent" === n3.type ? H(n3, o2) : Q(n3, o2);
        if (null == e2) throw new r("imagery-tile-mixin:compute-statistics-histograms", "geometry cannot be projected to the data source");
        s2 = e2;
      }
      const u3 = e.pixelSize ?? new _({ x: i2.pixelSize.x, y: i2.pixelSize.y, spatialReference: o2 }), { extent: c3, width: m3, height: d } = p(i2, s2, u3), p6 = await this.fetchPixels(c3, m3, d, __spreadProps(__spreadValues({}, t2), { interpolation: "nearest" }));
      if (null == p6.pixelBlock) throw new r("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const h3 = await r3(p6.pixelBlock, c3, s2), f2 = this._rasterJobHandler;
      return f2 ? f2.computeStatisticsHistograms({ pixelBlock: h3 }, t2) : k(h3);
    }
    normalizeRasterFetchOptions(e) {
      const { multidimensionalInfo: t2 } = this.serviceRasterInfo ?? {};
      if (null == t2) return e;
      const r4 = g({ rasterInfo: this.raster.rasterInfo, multidimensionalDefinition: e.multidimensionalDefinition || this.multidimensionalDefinition, timeExtent: e.timeExtent ?? this.timeExtent, multidimensionalSubset: this.multidimensionalSubset });
      return __spreadProps(__spreadValues({}, e), { multidimensionalDefinition: r4, timeExtent: void 0 });
    }
    async updateRasterFunction() {
      return this.loaded && "imagery-tile" === this.type && (this.rasterFunction || this._cachedRasterFunctionJson) && JSON.stringify(this.rasterFunction) !== JSON.stringify(this._cachedRasterFunctionJson) ? (this._cachedRasterFunctionJson = this.rasterFunction?.toJSON(), this._rasterFunctionUpdatePromise = this._updateRasterFunction(), this._rasterFunctionUpdatePromise) : this._rasterFunctionUpdatePromise;
    }
    async updateRenderer() {
      const { loaded: e, symbolizer: t2, renderer: r4 } = this;
      if (!e || !t2 || !r4) return;
      const { rasterInfo: i2 } = this.raster, n3 = v(i2, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), s2 = n3?.name, o2 = U(i2, s2);
      return this._updateSymbolizer(t2, r4, s2, o2);
    }
    async applyRenderer(e, t2, r4) {
      const i2 = e?.pixelBlock;
      if (!(null != i2 && i2.pixels && i2.pixels.length > 0)) return null;
      await this.updateRenderer();
      const n3 = this.bandIds ?? [], { pixelBlock: s2 } = await this._symbolize({ pixelData: e, simpleStretchParams: t2, bandIds: n3, symbolizer: this.symbolizer }, r4);
      return s2;
    }
    getRawDisplayBandIds() {
      let { bandIds: e, raster: t2 } = this;
      if (this.rasterFunction && t(t2)) {
        const r4 = t2.rasterFunction.rawInputBandIds;
        e = e?.length && r4?.length && 1 !== t2.rasterInfo.bandCount ? e.map((e2) => r4[Math.min(e2, r4.length - 1)]) : r4;
      }
      return e && e.length > 3 && e.every((e2, t3) => e2 === t3) ? null : e;
    }
    getTileUrl(e, t2, r4) {
      return "RasterTileServer" === this.raster.datasetFormat ? `${this.url}/tile/${e}/${t2}/${r4}` : "";
    }
    getCompatibleTileInfo(e, t2, r4 = false) {
      if (!this.loaded || null == t2) return null;
      if (r4 && e.equals(this.spatialReference)) return this.tileInfo;
      const i2 = G(e);
      return z.create({ size: 256, spatialReference: e, origin: i2 ? { x: i2.origin[0], y: i2.origin[1] } : { x: t2.xmin, y: t2.ymax } });
    }
    getCompatibleFullExtent(e) {
      return this.loaded ? (this._compatibleFullExtent?.spatialReference.equals(e) || (this._compatibleFullExtent = this.raster.computeExtent(e)), this._compatibleFullExtent) : null;
    }
    async fetchTile(e, r4, i2, n3 = {}) {
      if (te(this), n3.requestAsImageElement) {
        const s3 = this.getTileUrl(e, r4, i2);
        return f(s3, { responseType: "image", query: __spreadValues(__spreadValues({}, this.refreshParameters), this.raster.ioConfig.customFetchParameters), signal: n3.signal }).then((e2) => e2.data);
      }
      const { serviceRasterInfo: s2 } = this;
      if (null != s2.multidimensionalInfo && null == (n3 = this.normalizeRasterFetchOptions(n3)).multidimensionalDefinition) {
        const t2 = n3.tileInfo || s2.storageInfo.tileInfo, o2 = this.raster.getTileExtentFromTileInfo(e, r4, i2, t2);
        if (o2) return { extent: o2, pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), "raster-shaded-relief" === this.renderer?.type && (n3 = __spreadProps(__spreadValues({}, n3), { buffer: { cols: 1, rows: 1 } })), n3 = __spreadProps(__spreadValues({}, n3), { refreshParameters: this.refreshParameters }), this.raster.fetchTile(e, r4, i2, n3);
    }
    async fetchPixels(e, t2, r4, i2 = {}) {
      if (null != this.serviceRasterInfo.multidimensionalInfo && null == (i2 = this.normalizeRasterFetchOptions(i2)).multidimensionalDefinition) return { extent: e, pixelBlock: null };
      await this._initJobHandler(), await this.updateRasterFunction(), t2 = Math.round(t2), r4 = Math.round(r4);
      const n3 = await this.raster.fetchPixels(e, t2, r4, i2);
      return i2.bandIds?.length && !this.raster.rasterInfo.storageInfo.isBsqTile && (n3.pixelBlock = n3.pixelBlock?.extractBands(i2.bandIds)), n3;
    }
    async getSamples(e, t2) {
      await this.load();
      const i2 = m(h, e).clone();
      if (i2.interpolation && "nearest" !== i2.interpolation) throw new r("imagery-tile-mixin:get-samples", "only nearest interpolation is currently supported");
      const n3 = i2.mosaicRule?.multidimensionalDefinition, s2 = __spreadProps(__spreadValues({}, t2), { multidimensionalDefinition: n3 }), o2 = (await this._getSampleLocations(i2)).map((e2) => this.identify(e2, s2).then((t3) => (t3.location = e2, t3))), l2 = (await Promise.all(o2)).flatMap((e2, t3) => this._convertRasterIdentifyResultToSample(e2, t3));
      return new p4({ samples: l2 });
    }
    async identify(e, t2 = {}) {
      await this.load();
      const i2 = m(_, e).clone().normalize(), { raster: n3, serviceRasterInfo: s2 } = this;
      if (null != s2?.multidimensionalInfo) {
        if (!(s2.hasMultidimensionalTranspose && !(!y2(t2.multidimensionalDefinition) && !t2.transposedVariableName)) && null == (t2 = this.normalizeRasterFetchOptions(t2)).multidimensionalDefinition) return { location: i2, value: null };
      }
      const o2 = this.multidimensionalSubset?.areaOfInterest;
      if (o2 && !o2.contains(i2)) throw new r("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      let u3;
      if (this.serviceRasterInfo?.storageInfo.isBsqTile) {
        const e2 = t(n3) ? this.getRawDisplayBandIds() : this.bandIds;
        u3 = e2?.length ? e2 : void 0;
      }
      return n3.identify(i2, __spreadProps(__spreadValues({}, t2), { bandIds: u3 }));
    }
    hasStandardTime() {
      const e = this.serviceRasterInfo?.multidimensionalInfo;
      if (null == e || "standard-time" !== this.serviceRasterInfo?.dataType) return false;
      const t2 = this.multidimensionalDefinition, r4 = t2?.[0]?.variableName;
      return e.variables.some((e2) => e2.name === r4 && (!t2?.[0].dimensionName || e2.dimensions.some((e3) => "StdTime" === e3.name)));
    }
    getStandardTimeValue(e) {
      return new Date(p2(e)).toISOString();
    }
    getMultidimensionalSubsetVariables(e) {
      const t2 = e ?? this.serviceRasterInfo?.multidimensionalInfo;
      return D3(this.multidimensionalSubset, t2);
    }
    async getDynamicRangeInputRaster() {
      if (!this.rasterFunction || !t(this.raster) || !this._cachedRasterFunctionJson) return null;
      const e = JSON.stringify(this._cachedRasterFunctionJson);
      if (this._draRasterConfig?.functionJson === e) return this._draRasterConfig;
      const t2 = this.raster.rasterFunction.queryRasterFunction((e2) => "Stretch" === e2.functionName && e2.functionArguments.dynamicRangeAdjustment);
      if (!t2) return null;
      const r4 = t2.toJSON(), i2 = this.raster.primaryRasters.rasters, n3 = t2.functionArguments.raster, s2 = r4.rasterFunctionArguments;
      if (!n3 || "object" != typeof n3 || !("functionName" in n3)) return this._draRasterConfig = { functionJson: e, raster: i2[0], functionArguments: s2, rasterJobHandler: this._draRasterConfig?.rasterJobHandler }, this._draRasterConfig;
      const o2 = { raster: i2[0] };
      i2.length > 1 && i2.forEach((e2) => o2[e2.url] = e2);
      const a3 = D2(n3.toJSON(), o2), l2 = new m2({ rasterFunction: a3 });
      await l2.open();
      let u3 = this._draRasterConfig?.rasterJobHandler;
      try {
        u3 || (u3 = new i(), await u3.initialize()), l2.rasterJobHandler = u3, await l2.syncJobHandler();
      } catch {
      }
      return this._draRasterConfig = { functionJson: e, raster: l2, functionArguments: s2, rasterJobHandler: u3 }, this._draRasterConfig;
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = b(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && t(this.raster) && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    async _initJobHandler() {
      if (!this._rasterJobHandler) return super._initJobHandler().then(async () => {
        if (!this._rasterJobHandler) return;
        te(this);
        const { raster: e } = this;
        e.rasterJobHandler = this._rasterJobHandler, t(e) && e.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
        }), this.renderer && this.updateRenderer();
      }).catch(() => {
      });
    }
    _shutdownJobHandler() {
      super._shutdownJobHandler(), this.raster && (this.raster.rasterJobHandler = null);
    }
    async _getSampleLocations(e) {
      const { geometry: t2 } = e;
      if ("point" === t2.type) return [t2];
      const { spatialReference: r4, type: i2 } = t2;
      if ("multipoint" === i2) return t2.points.map((e2) => new _({ x: e2[0], y: e2[1], spatialReference: r4 }));
      if ("polyline" === i2) {
        let i3 = t2;
        if (e.sampleCount || e.sampleDistance) {
          const r5 = await import("./densifyOperator-JJL7LD23.js"), n4 = (await import("./lengthOperator-DJGGVDJH.js")).execute(t2, { unit: "meters" }), s3 = Math.min(e.sampleCount || 100, X);
          let o3 = e.sampleDistance;
          if (!o3) {
            o3 = n4 / (s3 + (2 === i3.paths[0].length ? 1 : 0));
          }
          i3 = r5.execute(t2, o3, { unit: "meters" });
        }
        return i3.paths.flatMap((e2) => e2.map((e3) => new _({ x: e3[0], y: e3[1], spatialReference: r4 })));
      }
      const n3 = Math.min(e.sampleCount || 100, X), s2 = "extent" === t2.type, o2 = s2 ? t2 : t2.extent, a3 = Math.sqrt(o2.width * o2.height / n3), u3 = o2.height / a3, c3 = o2.width / a3, { xmin: m3, ymax: d } = o2, p6 = [];
      for (let h3 = 0; h3 < u3; h3++) for (let e2 = 0; e2 < c3; e2++) {
        const i3 = new _({ x: m3 + (e2 + 0.5) * a3, y: d - (h3 + 0.5) * a3, spatialReference: r4 });
        (s2 || t2.contains(i3)) && p6.push(i3);
      }
      return p6;
    }
    _configDefaultInterpolation() {
      if (null == this.interpolation) {
        te(this);
        const { raster: e } = this, t2 = N(e.rasterInfo, e.tileType, this.sourceJSON?.defaultResamplingMethod);
        this._set("interpolation", t2);
      }
    }
    _configDefaultRenderer(e = "no") {
      te(this);
      const { rasterInfo: t2 } = this.raster, r4 = v(t2, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), n3 = r4?.name, s2 = E({ variableName: n3, rasterFunctionName: this.rasterFunction?.functionName, presetRenderers: this.presetRenderers });
      if (!this.bandIds && t2.bandCount > 1 && (this.bandIds = s2?.bandIds ?? W(t2)), !this.renderer || "override" === e) {
        const e2 = z2(this.raster), r5 = s2?.renderer ?? q(t2, { bandIds: this.bandIds, variableName: n3, rasterFunctionColorRamp: e2 }), i2 = t2.statistics, o3 = i2 && i2.length > 0 ? i2[0] : null, a4 = o3?.max ?? 0, l3 = o3?.min ?? 0;
        "WCSServer" === this.raster.datasetFormat && "raster-stretch" === r5.type && (a4 > 1e24 || l3 < -1e24) && (r5.dynamicRangeAdjustment = true, r5.customStatistics = null, "none" === r5.stretchType && (r5.stretchType = "min-max")), this.renderer = r5;
      }
      const o2 = ae(__spreadProps(__spreadValues({}, this.renderer.toJSON()), { variableName: n3 })), a3 = U(t2, n3);
      this.symbolizer ? (this.symbolizer.rendererJSON = o2, this.symbolizer.rasterInfo = a3) : this.symbolizer = new O2({ rendererJSON: o2, rasterInfo: a3 });
      const l2 = this.symbolizer.bind();
      if (l2.success) {
        if ("auto" === e) {
          const { colormap: e2 } = this.raster.rasterInfo, t3 = this.renderer;
          if (null != e2 && "raster-colormap" === t3.type) {
            const e3 = q(this.raster.rasterInfo);
            JSON.stringify(e3) !== JSON.stringify(t3) && this._configDefaultRenderer("override");
          } else if ("raster-stretch" === t3.type) {
            const e3 = this.bandIds?.length, r5 = t3.customStatistics?.length;
            !t3.dynamicRangeAdjustment && r5 && e3 && r5 !== e3 && this._configDefaultRenderer("override");
          }
        }
      } else n.getLogger(this).warn("imagery-tile-mixin", l2.error || "The given renderer is not supported by the layer."), "auto" === e && this._configDefaultRenderer("override");
    }
    async _updateRasterFunction() {
      if (this._isConstructedFromFunctionRaster && t(this.raster)) {
        const e2 = this.raster.rasterFunction.toJSON();
        return void (!this.rasterFunction && e2 && this._set("rasterFunction", g2.fromJSON(e2)));
      }
      let e, t2 = this.raster, r4 = false;
      t(t2) ? (e = t2.primaryRasters.rasters, t2 = e[0], r4 = true) : e = [t2];
      const { rasterFunction: i2 } = this;
      if (i2) {
        const r5 = { raster: t2 };
        e.length > 1 && e.forEach((e2) => r5[e2.url] = e2);
        const n4 = D2(i2.functionDefinition?.toJSON() ?? i2.toJSON(), r5), s3 = new m2({ rasterFunction: n4 });
        s3.rasterJobHandler = this._rasterJobHandler, await s3.open(), this.raster = s3;
      } else this.raster = t2, await t2.open();
      if (this._cachedRendererJson = void 0, !r4 && !i2) return;
      const { bandIds: n3 } = this, { bandCount: s2 } = this.raster.rasterInfo, o2 = n3?.length ? n3.some((e2) => e2 >= s2) : s2 >= 3;
      n3 && (o2 || this.renderer && "raster-stretch" !== this.renderer.type) && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
    _convertRasterIdentifyResultToSample(e, t2) {
      const { rasterInfo: r4 } = this.raster, i2 = r4.storageInfo.pyramidScalingFactor ** (e.pyramidLevel ?? 0), n3 = (r4.pixelSize.x + r4.pixelSize.y) / 2 * i2;
      if (!e.dataSeries?.length) return [new s({ location: e.location, pixelValue: e.value, locationId: t2, resolution: n3 })];
      const s2 = [];
      return e.dataSeries.forEach(({ value: r5, multidimensionalDefinition: i3 }, o2) => {
        const a3 = { Variables: i3[0].variableName, Dimensions: i3.flatMap(({ dimensionName: e2 }) => e2).join(",") };
        for (const { dimensionName: e2, values: t3 } of i3) {
          a3[e2] = Array.isArray(t3[0]) ? t3[0][0] : t3[0];
          const r6 = t3[t3.length - 1];
          a3[`${e2}_Max`] = Array.isArray(r6) ? r6[r6.length - 1] : r6;
        }
        const l2 = new s({ location: e.location, pixelValue: r5, rasterId: o2, locationId: t2, resolution: n3, attributes: a3 });
        s2.push(l2);
      }), s2;
    }
  };
  function te(e) {
    if (!e.raster || !e.serviceRasterInfo) throw new r("imagery-tile", "no raster");
  }
  return __decorate([a({ clonable: false })], ee.prototype, "_cachedRasterFunctionJson", void 0), __decorate([a({ clonable: false })], ee.prototype, "_compatibleFullExtent", void 0), __decorate([a({ clonable: false })], ee.prototype, "_draRasterConfig", void 0), __decorate([a({ clonable: false })], ee.prototype, "_isConstructedFromFunctionRaster", void 0), __decorate([a({ clonable: false })], ee.prototype, "_rasterFunctionUpdatePromise", void 0), __decorate([a({ type: [D], json: { write: { overridePolicy() {
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || "0,1,2" !== this.bandIds?.join(",") };
  } } } })], ee.prototype, "bandIds", void 0), __decorate([a({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], ee.prototype, "copyright", void 0), __decorate([a({ json: { read: false } })], ee.prototype, "fullExtent", null), __decorate([a({ json: { write: { overridePolicy() {
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || "bilinear" !== this.interpolation };
  } } } }), r2(a2)], ee.prototype, "interpolation", void 0), __decorate([a()], ee.prototype, "ioConfig", void 0), __decorate([a({ type: [n2], json: { write: true } })], ee.prototype, "multidimensionalDefinition", null), __decorate([a({ type: u, json: { write: true } })], ee.prototype, "multidimensionalSubset", void 0), __decorate([a()], ee.prototype, "raster", void 0), __decorate([a({ type: g2 })], ee.prototype, "rasterFunction", null), __decorate([a()], ee.prototype, "serviceRasterInfo", void 0), __decorate([a()], ee.prototype, "sourceJSON", void 0), __decorate([a({ readOnly: true, type: S, json: { read: false } })], ee.prototype, "spatialReference", void 0), __decorate([a({ type: z })], ee.prototype, "tileInfo", void 0), __decorate([a(y)], ee.prototype, "url", null), __decorate([a({ types: l })], ee.prototype, "renderer", null), __decorate([a({ types: l, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    const e = "raster-stretch" === this.renderer?.type && "none" === this.renderer.stretchType && !this.renderer.useGamma;
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || !e };
  } }, origins: { "web-scene": { types: p3, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e) => ({ enabled: e && "vector-field" !== e.type }) } } } } })], ee.prototype, "internalRenderer", null), __decorate([o("internalRenderer")], ee.prototype, "readRenderer", null), __decorate([a({ clonable: false })], ee.prototype, "symbolizer", void 0), ee = __decorate([c("esri.layers.mixins.TiledImagery")], ee), ee;
};

export {
  m2 as m,
  Y
};
//# sourceMappingURL=chunk-7HSXA7GK.js.map
