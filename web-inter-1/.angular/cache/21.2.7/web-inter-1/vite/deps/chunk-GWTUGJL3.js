import {
  t as t2
} from "./chunk-ZCPCMSQC.js";
import {
  B,
  C,
  c as c4,
  e,
  i,
  o as o4,
  r as r5,
  t,
  u as u3
} from "./chunk-Q6VKMTVL.js";
import {
  a as a3,
  n as n2
} from "./chunk-W4VDBVAM.js";
import {
  a2 as a4,
  d as d2,
  f2 as f,
  p as p3,
  s2
} from "./chunk-MTYBPPYA.js";
import {
  c as c3
} from "./chunk-N3BDLBGI.js";
import {
  M,
  N
} from "./chunk-EJ2RGS4X.js";
import {
  r as r4
} from "./chunk-L6ET72DF.js";
import {
  l,
  w
} from "./chunk-SQFVFI4F.js";
import {
  $ as $2,
  p as p2
} from "./chunk-DPTRJWGG.js";
import {
  V,
  b,
  m as m5,
  s
} from "./chunk-MC3F3FDB.js";
import {
  m as m3,
  m2 as m4,
  p
} from "./chunk-BLJGERYM.js";
import {
  u as u2
} from "./chunk-CZFHCURF.js";
import {
  $,
  x
} from "./chunk-QXDP3GXO.js";
import {
  P
} from "./chunk-F32PRJK5.js";
import {
  m
} from "./chunk-EK6IDC6N.js";
import {
  j
} from "./chunk-JXLQUNSA.js";
import {
  c2
} from "./chunk-MDVA2DB6.js";
import {
  m as m2
} from "./chunk-LFCO57WV.js";
import {
  u
} from "./chunk-ZC4RH2DW.js";
import {
  d
} from "./chunk-ON6HJSAD.js";
import {
  g
} from "./chunk-SWZYRYDU.js";
import {
  o as o3
} from "./chunk-UXWT3ISO.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  D,
  a3 as a2,
  c,
  o4 as o2,
  r3 as r2,
  r4 as r3
} from "./chunk-7ELXYOAW.js";
import {
  o
} from "./chunk-BVHAZAH7.js";
import {
  a,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/RasterJobHandler.js
var i2 = class {
  constructor() {
    this._workerThread = null, this._destroyed = false;
  }
  async initialize() {
    const e2 = await r4("RasterWorker");
    this._destroyed ? e2.close() : this._workerThread = e2;
  }
  destroy() {
    this._destroyed = true, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  async convertVectorFieldData(e2, r6) {
    a5(this._workerThread);
    const i4 = e2.pixelBlock.getTransferableObject().pixelBlock, s3 = await this._workerThread.invoke("convertVectorFieldData", { pixelBlock: i4, type: e2.dataType }, r6);
    return s3 ? new c3(s3) : null;
  }
  async convertPixelBlockToFeatures(e2, r6) {
    a5(this._workerThread);
    const t3 = await this._workerThread.invoke("convertPixelBlockToFeatures", { pixelBlock: e2.pixelBlock.toJSON(), extent: e2.extent.toJSON(), fieldNames: e2.fieldNames, skipFactor: e2.skipFactor, pixelIdOffset: e2.pixelIdOffset, imageRowSize: e2.imageRowSize }, r6), i4 = e2.extent.spatialReference?.toJSON();
    return t3.forEach((e3) => e3.geometry.spatialReference = i4), t3;
  }
  computeStatisticsHistograms(e2, r6) {
    a5(this._workerThread);
    const { transferList: t3, pixelBlock: i4 } = e2.pixelBlock.getTransferableObject();
    return r6?.transferPixelsToWorker && (r6 = __spreadProps(__spreadValues({}, r6), { transferList: t3 })), this._workerThread.invoke("computeStatisticsHistograms", __spreadProps(__spreadValues({}, e2), { pixelBlock: i4 }), r6);
  }
  async transformPixels(e2, r6) {
    a5(this._workerThread);
    const { transferList: i4, pixelBlock: s3 } = e2.pixelBlock.getTransferableObject();
    r6?.transferPixelsToWorker && (r6 = __spreadProps(__spreadValues({}, r6), { transferList: i4 }));
    const o5 = await this._workerThread.invoke("transformPixels", __spreadProps(__spreadValues({}, e2), { pixelBlock: s3 }), r6);
    return c3.fromJSON(o5);
  }
  async compositeBands(e2, r6) {
    a5(this._workerThread);
    const i4 = e2.pixelBlocks.map((e3) => e3?.getTransferableObject()), s3 = { pixelBlocks: i4.map((e3) => e3?.pixelBlock) };
    if (r6?.transferPixelsToWorker) {
      const e3 = i4.flatMap((e4) => e4?.transferList).filter((e4) => null != e4);
      r6 = __spreadProps(__spreadValues({}, r6), { transferList: e3 });
    }
    const o5 = await this._workerThread.invoke("compositeBands", s3, r6);
    return o5 ? c3.fromJSON(o5) : null;
  }
  async decode(e2, r6) {
    a5(this._workerThread);
    const i4 = await this._workerThread.invoke("decode", e2, __spreadProps(__spreadValues({}, r6), { transferList: [e2.data] }));
    return i4 ? new c3(i4) : null;
  }
  async symbolize(e2, r6) {
    a5(this._workerThread);
    const i4 = e2.pixelBlock?.getTransferableObject().pixelBlock, s3 = { extent: e2.extent?.toJSON(), pixelBlock: i4, simpleStretchParams: e2.simpleStretchParams, bandIds: e2.bandIds }, o5 = await this._workerThread.invoke("symbolize", s3, r6);
    return o5 ? new c3(o5) : null;
  }
  async highlightPixels(e2, r6) {
    a5(this._workerThread);
    const t3 = { pixelBlock: e2.pixelBlock?.toJSON(), renderedPixelBlock: e2.renderedPixelBlock?.toJSON(), highlightOptions: e2.highlightOptions }, i4 = await this._workerThread.invoke("highlightPixels", t3, r6);
    e2.renderedPixelBlock.pixels = i4.pixels, e2.renderedPixelBlock.mask = i4.mask, e2.renderedPixelBlock.maskIsAlpha = i4.maskIsAlpha;
  }
  async updateSymbolizer(e2, r6) {
    a5(this._workerThread);
    const t3 = e2?.rendererJSON?.histograms;
    await Promise.all(this._workerThread.broadcast("updateSymbolizer", { symbolizerJSON: e2.toJSON(), histograms: t3 }, r6));
  }
  async updateRasterFunction(e2, r6) {
    a5(this._workerThread), await Promise.all(this._workerThread.broadcast("updateRasterFunction", { rasterFunctionJSON: e2.toJSON() }, r6));
  }
  async process(e2, r6) {
    a5(this._workerThread);
    const i4 = await this._workerThread.invoke("process", { extent: e2.extent?.toJSON(), primaryPixelSizes: e2.primaryPixelSizes?.map((e3) => null != e3 ? e3.toJSON() : null), primaryPixelBlocks: e2.primaryPixelBlocks.map((e3) => e3?.getTransferableObject().pixelBlock), primaryRasterIds: e2.primaryRasterIds, parameters: e2.parameters }, r6);
    return i4 ? new c3(i4) : null;
  }
  async stretch(e2, r6) {
    if (a5(this._workerThread), !e2?.pixelBlock) return null;
    const i4 = { srcPixelBlock: e2.pixelBlock.getTransferableObject().pixelBlock, stretchParams: e2.stretchParams }, s3 = await this._workerThread.invoke("stretch", i4, r6);
    return s3 ? new c3(s3) : null;
  }
  async split(e2, r6) {
    if (a5(this._workerThread), !e2?.pixelBlock) return null;
    const i4 = { srcPixelBlock: e2.pixelBlock.getTransferableObject().pixelBlock, tileSize: e2.tileSize, maximumPyramidLevel: e2.maximumPyramidLevel, useBilinear: e2.useBilinear }, s3 = await this._workerThread.invoke("split", i4, r6);
    return s3 && s3.forEach((e3, r7) => {
      s3.set(r7, e3 ? c3.fromJSON(e3) : null);
    }), s3;
  }
  async clipTile(e2, r6) {
    if (a5(this._workerThread), !e2?.pixelBlock) return null;
    const i4 = e2.pixelBlock.getTransferableObject().pixelBlock, s3 = __spreadProps(__spreadValues({}, e2), { pixelBlock: i4 }), o5 = await this._workerThread.invoke("clipTile", s3, r6);
    return o5 ? c3.fromJSON(o5) : null;
  }
  async estimateStatisticsHistograms(e2, r6) {
    if (a5(this._workerThread), !e2?.pixelBlock) return null;
    const t3 = { srcPixelBlock: e2.pixelBlock.getTransferableObject().pixelBlock };
    return await this._workerThread.invoke("estimateStatisticsHistograms", t3, r6);
  }
  async mosaicAndTransform(e2, r6) {
    if (a5(this._workerThread), !e2?.srcPixelBlocks?.length) return { pixelBlock: null };
    const i4 = e2.srcPixelBlocks.map((e3) => e3?.getTransferableObject()), s3 = __spreadProps(__spreadValues({}, e2), { srcPixelBlocks: i4.map((e3) => e3?.pixelBlock) });
    if (r6?.transferPixelsToWorker) {
      const e3 = i4.flatMap((e4) => e4?.transferList).filter((e4) => null != e4);
      r6 = __spreadProps(__spreadValues({}, r6), { transferList: e3 });
    }
    const o5 = await this._workerThread.invoke("mosaicAndTransform", s3, r6);
    return { pixelBlock: o5.pixelBlock ? new c3(o5.pixelBlock) : null, localNorthDirections: o5.localNorthDirections };
  }
  async createFlowMesh(e2, r6) {
    a5(this._workerThread);
    const t3 = { buffer: e2.flowData.data.buffer, maskBuffer: e2.flowData.mask.buffer, width: e2.flowData.width, height: e2.flowData.height }, { meshType: i4, simulationSettings: s3, startInfo: o5 } = e2, l4 = await this._workerThread.invoke("createFlowMesh", { meshType: i4, flowData: t3, simulationSettings: s3, startInfo: o5 }, __spreadProps(__spreadValues({}, r6), { transferList: [t3.buffer, t3.maskBuffer] }));
    return { vertexData: new Float32Array(l4.vertexBuffer), indexData: new Uint32Array(l4.indexBuffer), pathData: new Float32Array(l4.pathBuffer) };
  }
  getProjectionOffsetGrid(e2, r6) {
    a5(this._workerThread);
    const t3 = null != e2.datumTransformation ? e2.datumTransformation.steps.map((e3) => ({ wkid: e3.wkid, wkt: e3.wkt, isInverse: e3.isInverse })) : null, i4 = null != e2.rasterTransform ? e2.rasterTransform.toJSON() : null, s3 = { projectedExtent: e2.projectedExtent.toJSON(), srcBufferExtent: e2.srcBufferExtent.toJSON(), pixelSize: e2.pixelSize, hasWrapAround: e2.hasWrapAround, spacing: e2.spacing, datumTransformationSteps: t3, rasterTransform: i4, isAdaptive: e2.isAdaptive, includeGCSGrid: e2.includeGCSGrid };
    return this._workerThread.invoke("getProjectionOffsetGrid", s3, r6);
  }
};
function a5(r6) {
  if (null == r6) throw new r("raster-jobhandler:no-connection", "no available worker connection");
}

// node_modules/@arcgis/core/renderers/FlowRenderer.js
var d3;
var m6 = new o({ flow_from: "flow-from", flow_to: "flow-to" });
var c5 = d3 = class extends m5(n) {
  constructor(t3) {
    super(t3), this.density = 0.8, this.color = new g([255, 255, 255, 1]), this.flowSpeed = 10, this.trailLength = 100, this.continuous = true, this.perturb = null, this.smoothing = 0, this.flowRepresentation = "flow-from", this.type = "flow", this.authoringInfo = null, this.legendOptions = null, this.trailCap = "butt", this.background = "none";
  }
  get maxPathLength() {
    return this._get("maxPathLength") ?? 200;
  }
  set maxPathLength(t3) {
    this._set("maxPathLength", t3);
  }
  get trailWidth() {
    return this._get("trailWidth") ?? 1.5;
  }
  set trailWidth(t3) {
    this._set("trailWidth", t3);
  }
  get visualVariables() {
    return super.visualVariables;
  }
  set visualVariables(t3) {
    super.visualVariables = t3;
  }
  clone() {
    const { density: t3, maxPathLength: e2, trailWidth: o5, flowSpeed: r6, trailLength: i4, smoothing: s3, flowRepresentation: n3, trailCap: p4, background: a8 } = this, l4 = this.color.clone(), u5 = (this.visualVariables || []).map((t4) => t4.clone()), h2 = this.authoringInfo?.clone(), m8 = this.legendOptions?.clone();
    return new d3({ density: t3, color: l4, maxPathLength: e2, trailWidth: o5, flowSpeed: r6, trailLength: i4, trailCap: p4, background: a8, smoothing: s3, flowRepresentation: n3, visualVariables: u5, authoringInfo: h2, legendOptions: m8 });
  }
  getSymbol(t3, e2) {
  }
  async getSymbolAsync(t3, e2) {
  }
  getSymbols() {
    return [];
  }
};
__decorate([a2({ type: Number, json: { write: true } })], c5.prototype, "density", void 0), __decorate([a2({ type: g, json: { type: [D], write: { allowNull: true } } })], c5.prototype, "color", void 0), __decorate([a2({ type: Number, cast: o3, json: { write: true } })], c5.prototype, "maxPathLength", null), __decorate([a2({ type: Number, cast: o3, json: { write: true } })], c5.prototype, "trailWidth", null), __decorate([a2({ type: Number, json: { write: true } })], c5.prototype, "flowSpeed", void 0), __decorate([a2({ type: Number, json: { write: true } })], c5.prototype, "trailLength", void 0), __decorate([a2()], c5.prototype, "continuous", void 0), __decorate([a2()], c5.prototype, "perturb", void 0), __decorate([a2({ type: Number, cast: o3, json: { write: false } })], c5.prototype, "smoothing", void 0), __decorate([a2({ type: m6.apiValues, json: { type: m6.jsonValues, read: { reader: m6.read }, write: { writer: m6.write } } })], c5.prototype, "flowRepresentation", void 0), __decorate([r2({ flowRenderer: "flow" }), a2({ json: { write: { isRequired: true } } })], c5.prototype, "type", void 0), __decorate([a2({ type: b, json: { write: true } })], c5.prototype, "authoringInfo", void 0), __decorate([a2({ type: u2, json: { write: true } })], c5.prototype, "legendOptions", void 0), __decorate([a2({ type: ["butt", "round"], json: { write: true } })], c5.prototype, "trailCap", void 0), __decorate([a2({ type: String, json: { origins: { "web-scene": { write: false } }, write: true } })], c5.prototype, "background", void 0), c5 = d3 = __decorate([c("esri.renderers.FlowRenderer")], c5);

// node_modules/@arcgis/core/renderers/support/ColormapInfo.js
var i3 = class extends n {
  constructor(o5) {
    super(o5), this.value = null, this.label = null, this.color = null;
  }
};
__decorate([a2({ type: Number, json: { write: { isRequired: true } } })], i3.prototype, "value", void 0), __decorate([a2({ type: String, json: { write: true } })], i3.prototype, "label", void 0), __decorate([a2({ type: g, json: { type: [D], write: { isRequired: true } } })], i3.prototype, "color", void 0), i3 = __decorate([c("esri.renderers.support.ColormapInfo")], i3);

// node_modules/@arcgis/core/renderers/RasterColormapRenderer.js
var c6;
var m7 = c6 = class extends n {
  constructor(o5) {
    super(o5), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(o5, r6) {
    if (!o5) return null;
    const t3 = 5 === o5[0].length, e2 = [...o5].sort((o6, r7) => o6[0] - r7[0]).map((o6) => i3.fromJSON({ value: o6[0], color: t3 ? o6.slice(1, 5) : o6.slice(1, 4).concat([255]), label: r6 ? r6[o6[0]] ?? "" : o6[0] }));
    return new c6({ colormapInfos: e2 });
  }
  static createFromColorramp(o5) {
    const r6 = B(o5);
    return c6.createFromColormap(r6);
  }
  clone() {
    return new c6({ colormapInfos: this.colormapInfos.map((o5) => o5.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos.map(({ value: o5, color: r6 }) => [o5, r6.r, r6.g, r6.b, r6.a > 1 ? r6.a : 255 * r6.a & 255]).sort((o5, r6) => o5[0] - r6[0]);
  }
};
__decorate([a2({ type: [i3], json: { write: { isRequired: true } } })], m7.prototype, "colormapInfos", void 0), __decorate([r2({ rasterColormap: "raster-colormap" }), a2({ json: { write: { isRequired: true } } })], m7.prototype, "type", void 0), m7 = c6 = __decorate([c("esri.renderers.RasterColormapRenderer")], m7);

// node_modules/@arcgis/core/renderers/RasterShadedReliefRenderer.js
var d4;
var c7 = d4 = class extends n {
  constructor(e2) {
    super(e2), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "traditional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(e2) {
    return p(e2);
  }
  clone() {
    return new d4({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, scalingType: this.scalingType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, colorRamp: a(this.colorRamp) });
  }
};
__decorate([a2({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "altitude", void 0), __decorate([a2({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "azimuth", void 0), __decorate([a2({ types: m4, json: { write: true } })], c7.prototype, "colorRamp", void 0), __decorate([o2("colorRamp")], c7.prototype, "readColorRamp", null), __decorate([a2({ type: ["traditional", "multi-directional"], json: { write: { isRequired: true } } })], c7.prototype, "hillshadeType", void 0), __decorate([a2({ type: Number, json: { write: true } })], c7.prototype, "pixelSizePower", void 0), __decorate([a2({ type: Number, json: { write: true } })], c7.prototype, "pixelSizeFactor", void 0), __decorate([a2({ type: ["none", "adjusted"], json: { write: { isRequired: true } } })], c7.prototype, "scalingType", void 0), __decorate([r2({ rasterShadedRelief: "raster-shaded-relief" }), a2({ json: { write: { isRequired: true } } })], c7.prototype, "type", void 0), __decorate([a2({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "zFactor", void 0), c7 = d4 = __decorate([c("esri.renderers.RasterShadedReliefRenderer")], c7);

// node_modules/@arcgis/core/renderers/RasterStretchRenderer.js
var d5;
var h = d5 = class extends n {
  constructor(t3) {
    super(t3), this.colorRamp = null, this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.histograms = null, this.customStatistics = null, this.useGamma = false, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t3) {
    if (t3) return p(t3);
  }
  readCustomStatistics(t3) {
    return t3?.map((t4) => ({ min: t4[0], max: t4[1], avg: t4[2], stddev: t4[3] }));
  }
  writeCustomStatistics(t3, e2, r6) {
    t3?.length && (e2[r6] = t3.map((t4) => [t4.min, t4.max, t4.avg ?? 0, t4.stddev ?? 1]));
  }
  readStretchType(t3, e2) {
    let r6 = e2.stretchType;
    return "number" == typeof r6 && (r6 = a3[r6]), n2.read(r6);
  }
  clone() {
    return new d5({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, customStatistics: a(this.customStatistics), gamma: a(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, colorRamp: a(this.colorRamp), histograms: a(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment });
  }
};
__decorate([a2({ types: m4, json: { write: true } })], h.prototype, "colorRamp", void 0), __decorate([o2("colorRamp")], h.prototype, "readColorRamp", null), __decorate([a2({ type: Boolean, json: { write: true } })], h.prototype, "computeGamma", void 0), __decorate([a2({ type: Boolean, json: { write: { target: "dra" }, read: { source: "dra" } } })], h.prototype, "dynamicRangeAdjustment", void 0), __decorate([a2({ type: [Number], json: { write: true } })], h.prototype, "gamma", void 0), __decorate([a2({ type: Number, json: { write: true } })], h.prototype, "maxPercent", void 0), __decorate([a2({ type: Number, json: { write: true } })], h.prototype, "minPercent", void 0), __decorate([a2({ type: Number, json: { write: true } })], h.prototype, "numberOfStandardDeviations", void 0), __decorate([a2({ type: Number, json: { read: { source: "max" }, write: { target: "max" } } })], h.prototype, "outputMax", void 0), __decorate([a2({ type: Number, json: { read: { source: "min" }, write: { target: "min" } } })], h.prototype, "outputMin", void 0), __decorate([a2({ type: Number, json: { write: true } })], h.prototype, "sigmoidStrengthLevel", void 0), __decorate([a2()], h.prototype, "histograms", void 0), __decorate([a2({ json: { type: [[Number]], name: "statistics", write: true } })], h.prototype, "customStatistics", void 0), __decorate([o2("customStatistics")], h.prototype, "readCustomStatistics", null), __decorate([r3("customStatistics")], h.prototype, "writeCustomStatistics", null), __decorate([a2({ type: Boolean, json: { write: true } })], h.prototype, "useGamma", void 0), __decorate([a2({ type: n2.apiValues, json: { type: n2.jsonValues, write: n2.write } })], h.prototype, "stretchType", void 0), __decorate([o2("stretchType", ["stretchType"])], h.prototype, "readStretchType", null), __decorate([r2({ rasterStretch: "raster-stretch" })], h.prototype, "type", void 0), h = d5 = __decorate([c("esri.renderers.RasterStretchRenderer")], h);

// node_modules/@arcgis/core/renderers/VectorFieldRenderer.js
var u4;
var S = /* @__PURE__ */ new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]);
var z = new o({ beaufort_ft: "beaufort-ft", beaufort_km: "beaufort-km", beaufort_kn: "beaufort-kn", beaufort_m: "beaufort-m", beaufort_mi: "beaufort-mi", classified_arrow: "classified-arrow", ocean_current_kn: "ocean-current-kn", ocean_current_m: "ocean-current-m", simple_scalar: "simple-scalar", single_arrow: "single-arrow", wind_speed: "wind-barb" });
var Z = new o({ flow_from: "flow-from", flow_to: "flow-to" });
var b2 = u4 = class extends m5(n) {
  constructor(e2) {
    super(e2), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(e2, M2) {
    return S.has(e2) ? s2.fromJSON(e2) : null;
  }
  readOutputUnit(e2, M2) {
    return S.has(e2) ? s2.fromJSON(e2) : null;
  }
  get styleRenderer() {
    const e2 = this.style, M2 = this.attributeField, i4 = this._createStyleRenderer(e2);
    return i4.field = M2, i4;
  }
  get visualVariables() {
    return super.visualVariables;
  }
  set visualVariables(e2) {
    super.visualVariables = e2;
  }
  get sizeVariables() {
    const e2 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "size" === M2.type && e2.push(M2);
    if (0 === e2.length) {
      const M2 = new V({ field: "Magnitude", minSize: 0.2 * this.symbolTileSize, maxSize: 0.8 * this.symbolTileSize });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  get rotationVariables() {
    const e2 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "rotation" === M2.type && e2.push(M2);
    if (0 === e2.length) {
      const M2 = new s({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  clone() {
    return new u4({ attributeField: this.attributeField, flowRepresentation: this.flowRepresentation, rotationType: this.rotationType, symbolTileSize: this.symbolTileSize, style: this.style, visualVariables: a(this.visualVariables), inputUnit: this.inputUnit, outputUnit: this.outputUnit });
  }
  async getGraphicsFromPixelData(e2, M2 = false, a8 = []) {
    const t3 = new Array(), I = a4(this.inputUnit, this.outputUnit), g2 = this.rotationVariables[0]?.rotationType || this.rotationType, r6 = M2 ? f(e2.pixelBlock, "vector-uv", g2, I) : p3(e2.pixelBlock, "vector-magdir", I);
    if (null == r6) return t3;
    const s3 = e2.extent, D2 = null != r6.mask && r6.mask.length > 0;
    let c8 = 0;
    const w2 = (s3.xmax - s3.xmin) / r6.width, y = (s3.ymax - s3.ymin) / r6.height;
    for (let l4 = 0; l4 < r6.height; l4++) for (let e3 = 0; e3 < r6.width; e3++, c8++) {
      let M3 = new _({ x: s3.xmin + e3 * w2 + w2 / 2, y: s3.ymax - l4 * y - y / 2, spatialReference: s3.spatialReference });
      M3 = (await P(M3))[0];
      const I2 = a8.some((e4) => e4.intersects(M3));
      if ((!D2 || r6.mask[c8]) && !I2) {
        const e4 = { Magnitude: r6.pixels[0][c8], Direction: r6.pixels[1][c8] }, a9 = new j({ geometry: new _({ x: M3.x, y: M3.y, spatialReference: s3.spatialReference }), attributes: e4 });
        a9.symbol = this._getVisualVariablesAppliedSymbol(a9), t3.push(a9);
      }
    }
    return t3;
  }
  getSymbol(e2, M2) {
  }
  async getSymbolAsync(e2, M2) {
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    return this.styleRenderer?.classBreakInfos;
  }
  getDefaultSymbol() {
    return this.styleRenderer?.defaultSymbol;
  }
  _getDefaultSymbol(e2) {
    return new u({ path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z", outline: new d({ width: 0 }), size: 20, color: e2 || new g([0, 92, 230]) });
  }
  _getVisualVariablesAppliedSymbol(e2) {
    if (!e2) return;
    const M2 = this.styleRenderer?.getSymbol(e2)?.clone(), i4 = this.sizeVariables, a8 = this.rotationVariables;
    if (i4 && i4.length && this.sizeVariables.forEach((i5) => M(M2, $([i5], e2))), a8 && a8.length) {
      const i5 = "flow-to" === this.flowRepresentation === ("ocean-current-kn" === this.style || "ocean-current-m" === this.style) ? 0 : 180;
      e2.attributes.Direction = e2.attributes.Direction + i5, this.rotationVariables.forEach((i6) => N(M2, x(i6, e2), i6.axis));
    }
    return M2;
  }
  _createStyleRenderer(e2) {
    let M2 = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (e2) {
      case "single-arrow":
        M2 = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        M2 = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        M2 = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        M2 = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        M2 = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        M2 = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        M2 = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        M2 = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        M2 = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        M2 = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        M2 = this._createClassifiedArrowRenderer();
    }
    return new w(M2);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    const e2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], i4 = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return { defaultSymbol: this._getDefaultSymbol(new g([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i4) };
  }
  _createBeaufortMeterRenderer() {
    const e2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], i4 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return { defaultSymbol: this._getDefaultSymbol(new g([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i4) };
  }
  _createBeaufortFeetRenderer() {
    const e2 = this._getDefaultSymbol(new g([214, 47, 39]));
    let i4 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const a8 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t3 = 3.28084;
    i4 = i4.map((e3) => e3 * t3);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i4, a8) };
  }
  _createBeaufortMilesRenderer() {
    const e2 = this._getDefaultSymbol(new g([214, 47, 39]));
    let i4 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const a8 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t3 = 2.23694;
    i4 = i4.map((e3) => e3 * t3);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i4, a8) };
  }
  _createBeaufortKilometersRenderer() {
    const e2 = this._getDefaultSymbol(new g([214, 47, 39]));
    let i4 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const a8 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t3 = 3.6;
    i4 = i4.map((e3) => e3 * t3);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i4, a8) };
  }
  _createCurrentMeterRenderer() {
    const e2 = [0, 0.5, 1, 1.5, 2], i4 = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new g([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i4) };
  }
  _createCurrentKnotsRenderer() {
    const e2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], i4 = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new g([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i4) };
  }
  _createClassifiedArrowRenderer() {
    const e2 = this._getDefaultSymbol(new g([56, 168, 0]));
    let i4 = [0, 1e-6, 3.5, 7, 10.5, 14];
    if (this.sizeVariables?.length) {
      const e3 = this.sizeVariables[0].minDataValue, M2 = this.sizeVariables[0].maxDataValue;
      if (null != e3 && null != M2) {
        const a9 = (M2 - e3) / 5;
        i4 = Array.from({ length: 5 }, (M3, i5) => e3 + a9 * i5), i4[5] = M2;
      }
    }
    const a8 = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i4, a8) };
  }
  _createSimpleScalarRenderer() {
    return { defaultSymbol: c2.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=", height: 20, width: 20, type: "esriPMS", angle: 0 }) };
  }
  _createWindBarbsRenderer() {
    const e2 = Array.from(Array(31).keys()).map((e3) => 5 * e3), M2 = [{ range: "0-5", path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "5-10", path: "M25 0 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "10-15", path: "M25 0 L25 40 L10 45 L25 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "15-20", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "20-25", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "25-30", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "30-35", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "35-40", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "40-45", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "45-50", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "50-55", path: "M25 0 L25 40 L10 40 L25 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "55-60", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "60-65", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "65-70", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "70-75", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "75-80", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "80-85", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "85-90", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "90-95", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "95-100", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "100-105", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "105-110", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "110-115", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "115-120", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "120-125", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "125-130", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "130-135", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "135-140", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "140-145", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "145-150", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }], i4 = c2.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC", height: 20, width: 20, type: "esriPMS", angle: 0 }), a8 = e2.map((a9, t3) => {
      let I;
      if (t3 !== e2.length - 1) if (0 === t3) I = { minValue: a9, maxValue: e2[t3 + 1], symbol: i4 };
      else {
        const i5 = c2.fromJSON({ type: "esriPMS", imageData: M2[t3].imageData, contentType: "image/svg+xml", height: 32, width: 32, angle: 0 });
        I = { minValue: a9, maxValue: e2[t3 + 1], symbol: i5 };
      }
      return new l(I);
    });
    return { defaultSymbol: i4, classBreakInfos: a8 };
  }
  _getClassBreaks(e2, i4) {
    return i4.map((i5, a8) => new l({ minValue: e2[a8], maxValue: e2[a8 + 1], symbol: this._getDefaultSymbol(new g(i5)) }));
  }
};
__decorate([a2({ type: ["Magnitude"], json: { write: true } })], b2.prototype, "attributeField", void 0), __decorate([a2({ type: Z.apiValues, json: { type: Z.jsonValues, read: { reader: Z.read }, write: { writer: Z.write } } })], b2.prototype, "flowRepresentation", void 0), __decorate([a2({ type: ["geographic", "arithmetic"], json: { write: true } })], b2.prototype, "rotationType", void 0), __decorate([a2({ type: z.apiValues, json: { type: z.jsonValues, read: { reader: z.read }, write: { writer: z.write } } })], b2.prototype, "style", void 0), __decorate([a2({ json: { write: true } })], b2.prototype, "symbolTileSize", void 0), __decorate([a2({ type: s2.apiValues, json: { type: s2.jsonValues, write: { writer: s2.write } } })], b2.prototype, "inputUnit", void 0), __decorate([o2("inputUnit")], b2.prototype, "readInputUnit", null), __decorate([a2({ type: s2.apiValues, json: { type: s2.jsonValues, read: { reader: s2.read }, write: { writer: s2.write } } })], b2.prototype, "outputUnit", void 0), __decorate([o2("outputUnit")], b2.prototype, "readOutputUnit", null), __decorate([r2({ vectorField: "vector-field" })], b2.prototype, "type", void 0), __decorate([a2({ type: w })], b2.prototype, "styleRenderer", null), __decorate([a2({ type: V })], b2.prototype, "sizeVariables", null), __decorate([a2({ type: s })], b2.prototype, "rotationVariables", null), b2 = u4 = __decorate([c("esri.renderers.VectorFieldRenderer")], b2);

// node_modules/@arcgis/core/renderers/support/rasterRendererHelper.js
var S2 = 0.25;
var k = m3.fromJSON({ type: "multipart", colorRamps: [{ algorithm: "esriCIELabAlgorithm", fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { algorithm: "esriCIELabAlgorithm", fromColor: [0, 255, 255], toColor: [255, 255, 0] }, { algorithm: "esriCIELabAlgorithm", fromColor: [255, 255, 0], toColor: [255, 0, 0] }] });
var L = m3.fromJSON(C[0]);
var F = /* @__PURE__ */ new Set(["scientific", "standard-time", "vector-uv", "vector-magdir", "vector-u", "vector-v", "vector-magnitude", "vector-direction"]);
function E(e2) {
  return e2.presetRenderers?.find(({ method: t3, value: n3 }) => "raster-function-template" === t3 ? n3 === e2.rasterFunctionName : "variable" === t3 && n3 === e2.variableName);
}
function q(e2, t3) {
  const { attributeTable: n3, colormap: a8 } = e2;
  if (o4(e2)) {
    const t4 = te(e2);
    if (null != t4) return t4;
  }
  if (t3?.rasterFunctionColorRamp) {
    const n4 = A(e2, t3);
    return n4.colorRamp = t3.rasterFunctionColorRamp, n4;
  }
  if (null != a8) {
    const t4 = X(e2);
    if (null != t4) return t4;
  }
  if (null != n3) {
    const t4 = _2(e2);
    if (null != t4) return t4;
  }
  return A(e2, t3);
}
function B2(e2, t3 = false) {
  const n3 = ["raster-stretch"];
  return u3(e2, t3) && n3.push("raster-colormap"), t(e2) && n3.push("unique-value"), r5(e2, t3) && n3.push("class-breaks"), e(e2) && n3.push("raster-shaded-relief"), o4(e2) && n3.push("vector-field"), i(e2) && n3.push("flow"), n3;
}
function z2(e2) {
  return t2(e2) && "Colormap" === e2.rasterFunction.functionName ? e2.rasterFunction.colorRamp : void 0;
}
function N2(e2, t3, n3) {
  const a8 = ["nearest", "bilinear", "cubic", "majority"], r6 = n3?.toLowerCase().replace("bicubic", "cubic"), l4 = a8.find((e3) => e3 === r6);
  if ("Map" === t3) return l4 ?? "bilinear";
  if ("standard-time" === e2.dataType) return l4 ?? "nearest";
  return "thematic" === e2.dataType || e2.attributeTable || e2.colormap ? "nearest" === l4 || "majority" === l4 ? l4 : "nearest" : l4 ?? "bilinear";
}
function A(e2, t3) {
  e2 = U(e2, t3?.variableName);
  const { bandCount: n3 } = e2;
  let { bandIds: a8, stretchType: r6 } = t3 || {};
  a8?.some((e3) => e3 >= n3) && (a8 = null);
  let l4 = e2.statistics, s3 = e2.histograms;
  n3 > 1 ? (a8 = a8?.length ? a8 : W(e2), l4 = null == l4 ? null : a8?.map((e3) => l4[e3]), s3 = null == s3 ? null : a8?.map((e3) => s3[e3])) : a8 = [0], null == r6 && (r6 = G(e2)), t3?.includeStatisticsInStretch && ("percent-clip" === r6 || "histogram-equalization" === r6) && e2.statistics?.length && (r6 = "min-max");
  let i4 = false;
  switch (r6) {
    case "none":
      i4 = false;
      break;
    case "percent-clip":
      i4 = !s3?.length;
      break;
    default:
      i4 = !l4?.length;
  }
  const { dataType: u5 } = e2, m8 = 1 === a8?.length && F.has(u5) ? k : null, c8 = new h({ stretchType: r6, dynamicRangeAdjustment: i4, colorRamp: m8, outputMin: 0, outputMax: 255, gamma: 1 === a8?.length ? [1] : [1, 1, 1], useGamma: false });
  return "percent-clip" === r6 ? c8.maxPercent = c8.minPercent = S2 : "standard-deviation" === r6 && (c8.numberOfStandardDeviations = 2), i4 || null == e2.multidimensionalInfo && !t3?.includeStatisticsInStretch || ("percent-clip" === r6 ? c8.histograms = s3 : "min-max" !== r6 && "standard-deviation" !== r6 || (c8.customStatistics = l4?.map((e3) => __spreadValues({}, e3)))), c8;
}
function U(e2, t3) {
  const { multidimensionalInfo: n3 } = e2;
  if (!t3 || !n3) return e2;
  const a8 = n3.variables.find((e3) => e3.name === t3);
  if (!a8) return e2;
  if (e2 = e2.clone(), a8) {
    const { statistics: t4, histograms: n4 } = a8;
    t4?.length && (e2.statistics = t4.map((e3) => ({ min: e3.min, max: e3.max, avg: e3.avg, stddev: e3.stddev }))), n4?.length && (e2.histograms = n4);
  }
  return e2;
}
function W(e2) {
  const t3 = e2.bandCount;
  if (1 === t3) return null;
  if (2 === t3) return [0];
  const { bandInfos: n3 } = e2;
  let a8;
  if (n3.length === t3) {
    const { red: e3, green: t4, blue: r6, nir: l4 } = O(n3);
    null != e3 && null != t4 && null != r6 ? a8 = [e3, t4, r6] : null != l4 && null != e3 && null != t4 && (a8 = [l4, e3, t4]);
  }
  return !a8 && t3 >= 3 && (a8 = [0, 1, 2]), a8;
}
function O(e2) {
  const t3 = {};
  for (let n3 = 0; n3 < e2.length; n3++) {
    const a8 = e2[n3].name.toLowerCase();
    "red" === a8 ? t3.red = n3 : "green" === a8 ? t3.green = n3 : "blue" === a8 ? t3.blue = n3 : "nearinfrared" !== a8 && "nearinfrared_1" !== a8 && "nir" !== a8 || (t3.nir = n3);
  }
  if (null == t3.blue || null == t3.green || null == t3.red || null == t3.nir) {
    const n3 = P2(e2);
    if (t3.blue ??= J(n3, 480), t3.green ??= J(n3, 550), t3.red ??= J(n3, 660), null == t3.nir) {
      const a8 = P2(e2, 800);
      t3.nir = J(a8, 810) ?? J(n3, 810);
    }
  }
  return t3;
}
function J(e2, t3, n3 = 60) {
  let a8, r6 = n3;
  for (const l4 of e2) {
    const e3 = Math.abs(l4.wavelength - t3);
    e3 <= r6 && (r6 = e3, a8 = l4.index);
  }
  return a8;
}
function P2(e2, t3) {
  return e2.map(({ name: e3, minWavelength: n3, maxWavelength: a8 }, r6) => {
    if (/thermal/i.test(e3) || /pan/i.test(e3)) return null;
    if (null != t3 && null != a8 && a8 < t3) return null;
    return { wavelength: null != n3 && null != a8 ? (n3 + a8) / 2 : n3 ?? a8 ?? 0, index: r6 };
  }).filter((e3) => null != e3);
}
function G(e2) {
  let t3 = "percent-clip";
  const { pixelType: n3, dataType: a8, histograms: r6, statistics: l4, multidimensionalInfo: s3 } = e2, i4 = F.has(a8) || "generic" === a8 && null != s3;
  return "u8" !== n3 || "processed" !== a8 && null != r6 && null != l4 ? "u8" === n3 || "elevation" === a8 || i4 ? t3 = "min-max" : null != r6 ? t3 = "percent-clip" : null != l4 && (t3 = "min-max") : t3 = "none", t3;
}
function _2(t3, n3, a8, r6) {
  if (!t(t3, n3)) return null;
  const { attributeTable: l4, statistics: s3 } = t3, i4 = H(l4, n3), o5 = Q(l4, "red"), m8 = Q(l4, "green"), f2 = Q(l4, "blue"), d7 = new b(), b3 = [], h2 = /* @__PURE__ */ new Set(), v = !!(o5 && m8 && f2);
  if (null != l4) l4.features.forEach((t4) => {
    const n4 = t4.attributes[i4.name];
    if (!h2.has(t4.attributes[i4.name]) && null != n4) {
      h2.add(n4);
      const a9 = v && ("single" === o5.type || "double" === o5.type) && ("single" === m8.type || "double" === m8.type) && ("single" === f2.type || "double" === f2.type) && !l4.features.some((e2) => e2.attributes[o5.name] > 1 || e2.attributes[m8.name] > 1 || e2.attributes[f2.name] > 1), r7 = a9 ? 255 : 1;
      b3.push(new p2({ value: t4.attributes[i4.name], label: t4.attributes[i4.name] + "", symbol: new m2({ style: "solid", outline: null, color: new g(v ? [t4.attributes[o5.name] * r7, t4.attributes[m8.name] * r7, t4.attributes[f2.name] * r7, 1] : [0, 0, 0, 0]) }) }));
    }
  });
  else if (s3?.[0]) for (let u5 = s3[0].min; u5 <= s3[0].max; u5++) b3.push(new p2({ value: u5, label: u5.toString(), symbol: new m2({ style: "solid", outline: null, color: new g([0, 0, 0, 0]) }) }));
  if (b3.sort((e2, t4) => e2.value && "string" == typeof e2.value.valueOf() ? 0 : e2.value > t4.value ? 1 : -1), !v) {
    const t4 = B(L, { numColors: b3.length });
    b3.forEach((n4, a9) => n4.symbol.color = new g(t4[a9].slice(1, 4))), d7.colorRamp = L;
  }
  if (a8 || r6) {
    const t4 = a8 || B(r6, { numColors: b3.length }).map((e2) => e2.slice(1));
    b3.forEach((n4, a9) => n4.symbol.color = new g(t4[a9])), d7.colorRamp = r6;
  }
  return new $2({ field: i4.name, uniqueValueInfos: b3, authoringInfo: d7 });
}
function H(e2, t3, n3) {
  let r6;
  return null != e2 ? (r6 = t3 ? e2.fields.find((e3) => t3.toLowerCase() === e3.name.toLowerCase()) : K(e2.fields), r6 || (n3 || (r6 = e2.fields.find((e3) => "string" === e3.type)), r6 || (r6 = Q(e2, "value")))) : r6 = new m({ name: "value" }), r6;
}
function K(e2) {
  let t3;
  for (let n3 = 0; n3 < e2.length; n3++) {
    const a8 = e2[n3].name.toLowerCase();
    if ("string" === e2[n3].type) {
      if (a8.startsWith("class")) {
        t3 = e2[n3];
        break;
      }
      null == t3 && (a8.endsWith("name") || a8.endsWith("type")) && (t3 = e2[n3]);
    }
  }
  return t3;
}
function Q(e2, t3) {
  return null == e2 ? null : e2.fields.find((e3) => e3.name.toLowerCase() === t3);
}
function X(e2) {
  if (!u3(e2)) return null;
  let t3;
  const { attributeTable: n3, colormap: a8 } = e2;
  if (null != n3) {
    const e3 = Q(n3, "value"), a9 = H(n3, null, true);
    "string" === a9.type && (t3 = {}, n3.features.forEach((n4) => {
      const r6 = n4.attributes;
      t3[r6[e3.name]] = a9 ? r6[a9.name] : r6[e3.name];
    }));
  }
  return m7.createFromColormap(a8, t3);
}
var ee = /* @__PURE__ */ new Map([["m/s", "meter-per-second"], ["km/h", "kilometer-per-hour"], ["knots", "knots"], ["ft/s", "feet-per-second"], ["mph", "mile-per-hour"]]);
function te(e2) {
  if (!o4(e2)) return null;
  let t3;
  if (null != e2.statistics && e2.statistics.length && ("vector-magdir" === e2.dataType || "vector-uv" === e2.dataType)) {
    const { minMagnitude: n4, maxMagnitude: a9 } = le(e2.dataType, e2.statistics);
    t3 = [new V({ field: "Magnitude", minSize: 10, maxSize: 40, minDataValue: n4, maxDataValue: a9 })];
  }
  const n3 = null != e2.multidimensionalInfo ? ee.get(e2.multidimensionalInfo.variables[0].unit) : void 0, a8 = new b2({ visualVariables: t3, inputUnit: n3, rotationType: "geographic" });
  return a8.visualVariables = [...a8.sizeVariables, ...a8.rotationVariables], a8;
}
function ne(e2) {
  return { color: e2.symbolLayers[0].material?.color, type: "esriSFS", style: "esriSFSSolid" };
}
function ae(e2) {
  if ("uniqueValue" === e2.type) {
    const t3 = e2.uniqueValueInfos, n3 = t3?.[0].symbol;
    return n3?.symbolLayers?.length && (e2.uniqueValueInfos = t3?.map((e3) => ({ value: e3.value, label: e3.label, symbol: e3.symbol ? ne(e3.symbol) : null }))), e2;
  }
  if ("classBreaks" === e2.type) {
    const t3 = e2.classBreakInfos, n3 = t3[0].symbol;
    return n3?.symbolLayers?.length && (e2.classBreakInfos = t3.map((e3) => ({ classMinValue: e3.classMinValue, classMaxValue: e3.classMaxValue, label: e3.label, symbol: e3.symbol ? ne(e3.symbol) : null }))), e2;
  }
  return e2;
}
function le(e2, t3) {
  let n3, a8;
  if ("vector-magdir" === e2) n3 = t3[0].min, a8 = t3[0].max;
  else {
    const e3 = t3[0].min, r6 = t3[0].max, l4 = t3[1].min, s3 = t3[1].max;
    n3 = 0, a8 = Math.max(Math.abs(e3), Math.abs(l4), Math.abs(r6), Math.abs(s3));
  }
  return { minMagnitude: n3, maxMagnitude: a8 };
}

// node_modules/@arcgis/core/layers/mixins/RasterJobHandlerMixin.js
var d6 = (d7) => {
  const c8 = d7;
  let h2 = class extends c8 {
    constructor() {
      super(...arguments), this._rasterJobHandlerConfig = { instance: null, refCount: 0, connectionPromise: null };
    }
    get _rasterJobHandler() {
      return this._rasterJobHandlerConfig.instance;
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandlerConfig.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandlerConfig.refCount--, this._rasterJobHandlerConfig.refCount <= 0 && this._shutdownJobHandler();
    }
    async convertVectorFieldData(e2, n3, r6) {
      if (null == e2) return null;
      const t3 = this._rasterJobHandler;
      return t3 ? t3.convertVectorFieldData({ pixelBlock: e2, dataType: n3 }, r6) : f(e2, n3);
    }
    async createFlowMesh(e2, n3) {
      const r6 = this._rasterJobHandler;
      return r6 ? r6.createFlowMesh(e2, n3) : c4(e2.meshType, e2.simulationSettings, e2.flowData, e2.startInfo, null != n3.signal ? n3.signal : new AbortController().signal);
    }
    async highlightPixels(e2, n3) {
      const r6 = this, { bandIds: o5 } = r6, s3 = "imagery" === r6.type ? r6.rasterInfo : r6.raster.rasterInfo, a8 = o5?.length ? o5 : W(s3), l4 = e2.highlightOptions.map((e3) => {
        const n4 = __spreadValues({}, e3), r7 = "bandId" in n4 ? [n4.bandId ?? 0] : [n4.xBandId, n4.yBandId];
        for (let t3 = 0; t3 < r7.length; t3++) {
          const e4 = r7[t3];
          if (null == e4) return;
          const n5 = a8?.length ? a8.indexOf(e4) : e4;
          if (n5 < 0 || n5 > 2) return;
          r7[t3] = n5;
        }
        return "bandId" in n4 ? n4.bandId = r7[0] : (n4.xBandId = r7[0], n4.yBandId = r7[1]), n4;
      }).filter((e3) => null != e3);
      if (0 === l4.length) return;
      const d8 = this._rasterJobHandler;
      d8 ? await d8.highlightPixels(__spreadProps(__spreadValues({}, e2), { highlightOptions: l4 }), n3) : d2(__spreadProps(__spreadValues({}, e2), { highlightOptions: l4 }));
    }
    _initJobHandler() {
      const { _rasterJobHandlerConfig: e2 } = this;
      if (e2.connectionPromise) return e2.connectionPromise;
      const n3 = new i2();
      return e2.connectionPromise = n3.initialize().then(() => {
        e2.instance = n3, this.notifyChange("_rasterJobHandler");
      }, () => {
      }), e2.connectionPromise;
    }
    _shutdownJobHandler() {
      const { _rasterJobHandlerConfig: e2 } = this;
      e2.instance?.destroy(), e2.instance = null, e2.connectionPromise = null, e2.refCount = 0, this.notifyChange("_rasterJobHandler"), this._cachedRendererJson = void 0;
    }
    async _updateSymbolizer(e2, n3, r6, t3) {
      const o5 = this._rasterJobHandlerConfig.instance;
      if (!o5) return;
      const s3 = ae(__spreadProps(__spreadValues({}, n3.toJSON()), { variableName: r6 }));
      JSON.stringify(this._cachedRendererJson) !== JSON.stringify(s3) && (t3 && (e2.rasterInfo = t3), e2.rendererJSON = s3, e2.bind(), await o5.updateSymbolizer(e2), this._cachedRendererJson = n3.toJSON());
    }
    async _symbolize(e2, n3) {
      const { pixelData: r6, bandIds: t3, simpleStretchParams: o5 } = e2, s3 = this._rasterJobHandler;
      if (s3) {
        const e3 = await s3.symbolize(__spreadProps(__spreadValues({}, r6), { simpleStretchParams: o5, bandIds: t3 }), n3);
        return { extent: r6.extent, pixelBlock: e3 };
      }
      const i4 = e2.symbolizer.symbolize(__spreadProps(__spreadValues({}, r6), { simpleStretchParams: o5, bandIds: t3 }));
      return { extent: r6.extent, pixelBlock: i4 };
    }
  };
  return __decorate([a2({ clonable: false })], h2.prototype, "_rasterJobHandler", null), __decorate([a2({ clonable: false })], h2.prototype, "_cachedRendererJson", void 0), __decorate([a2({ clonable: false })], h2.prototype, "_rasterJobHandlerConfig", void 0), h2 = __decorate([c("esri.layers.mixins.RasterJobHandlerMixin")], h2), h2;
};

export {
  c5 as c,
  m7 as m,
  c7 as c2,
  h,
  b2 as b,
  E,
  q,
  B2 as B,
  z2 as z,
  N2 as N,
  U,
  W,
  ae,
  i2 as i,
  d6 as d
};
//# sourceMappingURL=chunk-GWTUGJL3.js.map
