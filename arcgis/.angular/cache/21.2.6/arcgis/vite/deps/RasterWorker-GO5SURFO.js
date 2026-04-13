import {
  D as D2
} from "./chunk-M43QRNPM.js";
import "./chunk-A5UQ4KS4.js";
import {
  O as O2
} from "./chunk-ABQNU46J.js";
import {
  c as c3
} from "./chunk-VZC5IMT2.js";
import "./chunk-IX44BN2R.js";
import {
  a as a2,
  s as s2,
  y as y2
} from "./chunk-HUUVC2OQ.js";
import {
  j as j2,
  re
} from "./chunk-WOXSKAPR.js";
import {
  R
} from "./chunk-CE5DK2OJ.js";
import {
  k as k2,
  y
} from "./chunk-MWIAVIAY.js";
import "./chunk-7OCQ7ECD.js";
import {
  D,
  E,
  O,
  S,
  d,
  f2 as f,
  j,
  k,
  s,
  u as u2,
  z as z2
} from "./chunk-LU2QJRDL.js";
import {
  c as c2
} from "./chunk-Q75NH6CE.js";
import "./chunk-7WUX5YIS.js";
import "./chunk-CW3EW7KK.js";
import {
  u
} from "./chunk-ARRYQO7C.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import {
  a
} from "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-LA4TOQGW.js";
import "./chunk-BHNYDRJD.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  c,
  r3 as r
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/raster/functions/pixelTransformUtils.js
function r2(t, e, r3) {
  const a5 = t.length, s5 = c2.createEmptyBand(r3, a5);
  for (let n2 = 0; n2 < a5; n2++) if (e[n2]) {
    const r4 = t[n2];
    r4 <= 0 ? e[n2] = 0 : s5[n2] = Math.log(r4);
  }
  return s5;
}
function a3(e, r3, a5, s5) {
  const i2 = e.length, o2 = c2.createEmptyBand(a5, i2), [l, c4] = u(a5), f3 = s5?.lambda ?? 0, m = s5?.shift ?? 0, h = 0 === f3;
  for (let t = 0; t < i2; t++) if (r3[t]) {
    const n2 = e[t];
    if (n2 <= 0) r3[t] = 0;
    else if (h) o2[t] = Math.log(n2 + m);
    else {
      const e2 = ((n2 + m) ** f3 - 1) / f3;
      o2[t] = Math.max(l, Math.min(e2, c4));
    }
  }
  return o2;
}
function s3(t, e, r3) {
  const a5 = t.length, s5 = c2.createEmptyBand(r3, a5);
  for (let n2 = 0; n2 < a5; n2++) if (e[n2]) {
    const r4 = t[n2];
    r4 < 0 ? e[n2] = 0 : s5[n2] = Math.sqrt(r4);
  }
  return s5;
}
function i(e, r3, a5) {
  const s5 = e.length, i2 = c2.createEmptyBand(a5, s5), [o2, l] = u(a5);
  for (let t = 0; t < s5; t++) if (!r3 || r3[t]) {
    const n2 = 1 / e[t];
    i2[t] = i2[t] = Math.max(o2, Math.min(n2, l));
  }
  return i2;
}
function o(t, o2, l) {
  const { width: c4, height: f3, pixels: m } = t;
  let h = [];
  h = t.bandMasks ? t.bandMasks.map((t2) => new Uint8Array(t2)) : m.map(() => t.mask ? new Uint8Array(t.mask) : new Uint8Array(c4 * f3).fill(255));
  const p = "f32", u3 = m.map((t2, e) => {
    switch (o2) {
      case "log":
        return r2(t2, h[e], p);
      case "sqrt":
        return s3(t2, h[e], p);
      case "inverse":
        return i(t2, h[e], p);
      case "box-cox":
        return a3(t2, h[e], p, l);
      default:
        return t2;
    }
  }), d2 = "inverse" === o2, g = d2 ? t.mask : 1 === h.length ? h[0] : k(h), x = d2 ? t.bandMasks : 1 === h.length ? void 0 : h;
  return new c2({ width: c4, height: f3, pixelType: p, bandMasks: x, mask: g, pixels: u3 });
}

// node_modules/@arcgis/core/layers/raster/transforms/IdentityTransform.js
var s4;
var a4 = s4 = class extends s2 {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new s4();
  }
};
__decorate([r({ IdentityXform: "identity" })], a4.prototype, "type", void 0), a4 = s4 = __decorate([c("esri.layers.raster.transforms.IdentityTransform")], a4);

// node_modules/@arcgis/core/layers/raster/transforms/utils.js
var n = { GCSShiftXform: a2, IdentityXform: a4, PolynomialXform: y2 };
function f2(r3) {
  const o2 = r3?.type;
  if (!o2) return null;
  const t = n[r3?.type];
  if (t) {
    const o3 = new t();
    return o3.read(r3), o3;
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/RasterWorker.js
function N(e) {
  if (!e) return { result: null, transferList: [] };
  const { pixelBlock: r3, transferList: t } = e.getTransferableObject();
  return { result: r3, transferList: t };
}
var J = class {
  convertVectorFieldData(e) {
    const r3 = c2.fromJSON(e.pixelBlock), t = N(f(r3, e.type));
    return Promise.resolve(t);
  }
  convertPixelBlockToFeatures(r3) {
    const t = z2({ pixelBlock: c2.fromJSON(r3.pixelBlock), extent: z.fromJSON(r3.extent), fieldNames: r3.fieldNames, skipFactor: r3.skipFactor, skipSpatialReference: true, pixelIdOffset: r3.pixelIdOffset, imageRowSize: r3.imageRowSize });
    return Promise.resolve(t);
  }
  transformPixels(e) {
    const r3 = c2.fromJSON(e.pixelBlock), t = o(r3, e.transformType, e.transformParameters);
    return Promise.resolve(N(t));
  }
  computeStatisticsHistograms(e) {
    const r3 = c2.fromJSON(e.pixelBlock), t = k2(r3, { histogramSize: e.histogramSize, includeSkewnessKurtosis: e.includeSkewnessKurtosis });
    return Promise.resolve(t);
  }
  compositeBands(e) {
    const r3 = e.pixelBlocks.map((e2) => e2 && c2.fromJSON(e2)), t = N(s(r3));
    return Promise.resolve(t);
  }
  async decode(e) {
    return N(await R(e.data, e.options));
  }
  symbolize(r3) {
    const t = r3.pixelBlock ? c2.fromJSON(r3.pixelBlock) : null, s5 = r3.extent ? z.fromJSON(r3.extent) : null, o2 = N(this.symbolizer.symbolize(__spreadProps(__spreadValues({}, r3), { pixelBlock: t, extent: s5 })));
    return Promise.resolve(o2);
  }
  highlightPixels(e) {
    const r3 = c2.fromJSON(e.pixelBlock), t = c2.fromJSON(e.renderedPixelBlock);
    return d({ pixelBlock: r3, renderedPixelBlock: t, highlightOptions: e.highlightOptions }), Promise.resolve(t.toJSON());
  }
  async updateSymbolizer(e) {
    this.symbolizer = O2.fromJSON(e.symbolizerJSON), e.histograms && "rasterStretch" === this.symbolizer?.rendererJSON.type && (this.symbolizer.rendererJSON.histograms = e.histograms);
  }
  async updateRasterFunction(e) {
    this.rasterFunction = D2(e.rasterFunctionJSON);
  }
  async process(t) {
    return N(this.rasterFunction.process({ extent: z.fromJSON(t.extent), primaryPixelBlocks: t.primaryPixelBlocks.map((e) => null != e ? c2.fromJSON(e) : null), primaryPixelSizes: t.primaryPixelSizes?.map((e) => null != e ? _.fromJSON(e) : null), primaryRasterIds: t.primaryRasterIds }, t.parameters));
  }
  stretch(e) {
    const r3 = N(this.symbolizer.simpleStretch(c2.fromJSON(e.srcPixelBlock), e.stretchParams));
    return Promise.resolve(r3);
  }
  estimateStatisticsHistograms(e) {
    const r3 = y(c2.fromJSON(e.srcPixelBlock));
    return Promise.resolve(r3);
  }
  split(e) {
    const r3 = E(c2.fromJSON(e.srcPixelBlock), e.tileSize, e.maximumPyramidLevel ?? 0, false === e.useBilinear), t = [];
    let s5;
    return r3 && (s5 = /* @__PURE__ */ new Map(), r3.forEach((e2, r4) => {
      if (e2) {
        const { pixelBlock: o2, transferList: i2 } = e2.getTransferableObject();
        s5.set(r4, o2), i2.forEach((e3) => {
          t.includes(e3) || t.push(e3);
        });
      }
    })), Promise.resolve({ result: s5, transferList: t });
  }
  clipTile(e) {
    const r3 = c2.fromJSON(e.pixelBlock), t = N(D(__spreadProps(__spreadValues({}, e), { pixelBlock: r3 })));
    return Promise.resolve(t);
  }
  async mosaicAndTransform(e) {
    const r3 = e.srcPixelBlocks.map((e2) => e2 ? new c2(e2) : null), t = S(r3, e.srcMosaicSize, { blockWidths: e.blockWidths, alignmentInfo: e.alignmentInfo, clipOffset: e.clipOffset, clipSize: e.clipSize });
    let s5, o2 = t;
    e.coefs && (o2 = O(t, e.destDimension, e.coefs, e.sampleSpacing, e.interpolation)), e.projectDirections && e.gcsGrid && (s5 = j(e.destDimension, e.gcsGrid), o2 = u2(o2, e.isUV ? "vector-uv" : "vector-magdir", s5));
    const { result: i2, transferList: n2 } = N(o2);
    return { result: { pixelBlock: i2, localNorthDirections: s5 }, transferList: n2 };
  }
  async createFlowMesh(e, r3) {
    const t = { data: new Float32Array(e.flowData.buffer), mask: new Uint8Array(e.flowData.maskBuffer), width: e.flowData.width, height: e.flowData.height }, { vertexData: s5, indexData: o2, pathData: i2 } = await c3(e.meshType, e.simulationSettings, t, e.startInfo, r3.signal);
    return { result: { vertexBuffer: s5.buffer, indexBuffer: o2.buffer, pathBuffer: i2.buffer }, transferList: [s5.buffer, o2.buffer] };
  }
  async getProjectionOffsetGrid(r3) {
    const s5 = z.fromJSON(r3.projectedExtent), o2 = z.fromJSON(r3.srcBufferExtent);
    let i2 = null;
    r3.datumTransformationSteps?.length && (i2 = new a({ steps: r3.datumTransformationSteps })), await j2();
    const n2 = r3.rasterTransform ? f2(r3.rasterTransform) : null;
    return re(__spreadProps(__spreadValues({}, r3), { projectedExtent: s5, srcBufferExtent: o2, datumTransformation: i2, rasterTransform: n2 }));
  }
};
export {
  J as default
};
//# sourceMappingURL=RasterWorker-GO5SURFO.js.map
