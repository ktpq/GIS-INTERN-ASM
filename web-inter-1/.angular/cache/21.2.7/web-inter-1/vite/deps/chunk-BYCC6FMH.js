import {
  Z,
  e as e2,
  i as i2,
  n as n4,
  o,
  t as t2,
  u as u3
} from "./chunk-JLPH755A.js";
import {
  d,
  f
} from "./chunk-DIISHOOG.js";
import {
  C as C3,
  n as n3
} from "./chunk-MRXFF6FU.js";
import {
  a as a2,
  y as y2
} from "./chunk-SP4GEAB6.js";
import {
  C,
  G,
  H,
  L,
  N as N2,
  Y,
  e,
  k,
  m,
  p,
  r as r2,
  r2 as r3,
  t,
  v
} from "./chunk-WTBH6WXQ.js";
import {
  k as k2,
  v as v2,
  y
} from "./chunk-ZSR6FDBF.js";
import {
  C as C2,
  D,
  E
} from "./chunk-MTYBPPYA.js";
import {
  c as c2
} from "./chunk-N3BDLBGI.js";
import {
  i
} from "./chunk-RNLQ7ZEK.js";
import {
  T
} from "./chunk-7ZWMKFVI.js";
import {
  z as z2
} from "./chunk-ES2UPZO6.js";
import {
  g as g2
} from "./chunk-KNE7SVYH.js";
import {
  g
} from "./chunk-SWZYRYDU.js";
import {
  u as u2
} from "./chunk-UJPIJ3ZF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  I as I2
} from "./chunk-VHQJAPCR.js";
import {
  I
} from "./chunk-TPFIN626.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  j,
  n2,
  u3 as u
} from "./chunk-2KP24SU5.js";
import {
  has,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/raster/datasets/covJSONParser.js
function i3(e3) {
  return ["x", "e", "east", "long", "longitude"].includes(e3.toLowerCase());
}
function r4(e3) {
  return ["y", "n", "west", "lat", "latitude"].includes(e3.toLowerCase());
}
function o2(e3) {
  const { axes: l } = e3.domain, s = Object.keys(l), a3 = [], o3 = [];
  let u7 = -1, m4 = -1, c5 = [];
  for (let t4 = 0; t4 < s.length; t4++) {
    const e4 = s[t4];
    i3(e4) ? u7 = t4 : r4(e4) && (m4 = t4);
    const n6 = l[e4], d6 = [];
    if ("values" in n6) {
      n6.values.forEach((e6) => d6.push("string" == typeof e6 ? new Date(e6).getTime() : e6));
      const e5 = d6[1] - d6[0];
      a3.push([d6[0] - 0.5 * e5, d6[d6.length - 1] + 0.5 * e5]), o3.push(e5);
    } else {
      const { start: e5, stop: t5, num: l2 } = n6, s2 = (t5 - e5) / (l2 - 1);
      a3.push([e5 - 0.5 * s2, t5 + 0.5 * s2]), o3.push(s2);
      for (let n7 = 0; n7 < l2; n7++) d6.push(e5 + s2 * n7);
    }
    c5.push({ name: e4, values: d6, extent: [d6[0], d6[d6.length - 1]] });
  }
  u7 > -1 && -1 === m4 ? m4 = 0 === u7 ? 1 : 0 : m4 > -1 && -1 === u7 ? u7 = 0 === m4 ? 1 : 0 : -1 === m4 && -1 === u7 && (u7 = 0, m4 = 1), c5 = c5.filter((e4, t4) => !(t4 === u7 || t4 === m4));
  const { referencing: d5 } = e3.domain, f4 = d5.find((e4) => e4.coordinates.includes(s[u7])).system.id, p5 = f4?.slice(f4.lastIndexOf("/") + 1), h3 = null == p5 || "CRS84" === p5 ? 4326 : Number(p5), g4 = new S({ wkid: h3 }), [b3, y4] = a3[u7], [x3, j2] = a3[m4], v5 = new z({ xmin: b3, xmax: y4, ymin: x3, ymax: j2, spatialReference: g4 });
  return { width: Math.round(v5.width / o3[u7]), height: Math.round(v5.height / o3[m4]), extent: v5, dimensions: c5 };
}
function u4(e3) {
  const t4 = u2();
  return t4 ? e3[t4] ?? Object.values(e3)[0] : Object.values(e3)[0];
}
function m2() {
  return Math.round(255 * Math.random());
}
function c3(t4) {
  const n6 = {}, { parameters: l } = t4;
  if (!l) return n6;
  for (const [s, a3] of Object.entries(l)) {
    const { type: t5, description: l2, unit: i4, categoryEncoding: r6, observedProperty: o3 } = a3;
    if ("Parameter" === t5 && (n6[s] = {}, l2 && (n6[s].description = u4(l2)), i4 && (n6[s].unit = i4.label ? u4(i4.label) : null, n6[s].symbol = i4.symbol?.value), r6)) {
      const t6 = Object.entries(r6).map((e3, t7) => ({ OID: t7, Value: Number(e3[1]), ClassName: e3[0].slice(e3[0].lastIndexOf("/") + 1), Count: 1 }));
      let l3 = false;
      o3?.categories?.length && (o3.categories.forEach((n7) => {
        if (!n7.id) return;
        const s2 = n7.id.slice(n7.id.lastIndexOf("/") + 1), a5 = t6.find((e3) => e3.ClassName === s2);
        if (!a5) return;
        const i5 = n7.label ? u4(n7.label) : null;
        if (a5.Label = i5, n7.preferredColor) {
          const t7 = g.fromHex(n7.preferredColor);
          t7 && (l3 = true, a5.Red = t7.r, a5.Green = t7.g, a5.Blue = t7.b);
        }
      }), l3 && t6.forEach((e3) => {
        null == e3.Red && (e3.Red = m2(), e3.Green = m2(), e3.Blue = m2());
      }));
      const a4 = { objectIdFieldName: "", fields: [{ name: "OID", type: "esriFieldTypeOID", alias: "OID", domain: null }, { name: "Value", type: "esriFieldTypeInteger", alias: "Value", domain: null }, { name: "Count", type: "esriFieldTypeDouble", alias: "Count", domain: null }, { name: "ClassName", type: "esriFieldTypeString", alias: "ClassName", domain: null, length: 50 }, { name: "Label", type: "esriFieldTypeString", alias: "Label", domain: null, length: 50 }], features: t6.map((e3) => ({ attributes: e3 })) };
      l3 && a4.fields.push({ name: "Red", type: "esriFieldTypeInteger", alias: "Red", domain: null }, { name: "Green", type: "esriFieldTypeInteger", alias: "Green", domain: null }, { name: "Blue", type: "esriFieldTypeInteger", alias: "Blue", domain: null }), n6[s].attributeTable = a4;
    }
  }
  return n6;
}
function d2(e3) {
  let t4 = Number.MAX_VALUE, n6 = -Number.MAX_VALUE;
  for (let l = 0; l < e3.length; l++) {
    const s = e3[l];
    null != s && (s < t4 && (t4 = s), s > n6 && (n6 = s));
  }
  return i(t4, n6);
}
function f2(e3, t4, n6) {
  const l = e3.map((e4, n7) => ({ name: e4, count: t4[n7] })).sort((e4, t5) => e4.name > t5.name ? -1 : 1), s = (a3 = 1, (e4) => a3 *= e4.count);
  var a3;
  const i4 = [...l.slice(1), { name: "", count: 1 }].reverse().map(s).reverse();
  let r6 = 0;
  for (let o3 = e3.length - 1; o3 >= 0; o3--) {
    r6 += i4[l.findIndex(({ name: t5 }) => t5 === e3[o3])] * (n6 % t4[o3]), n6 = Math.floor(n6 / t4[o3]);
  }
  return r6;
}
function p2(e3) {
  const { width: t4, height: n6, extent: l, dimensions: s } = o2(e3), { ranges: i4 } = e3, r6 = Object.keys(i4).sort((e4, t5) => e4 < t5 ? -1 : 1), u7 = [];
  for (let a3 = 0; a3 < r6.length; a3++) {
    const e4 = r6[a3];
    s?.length && u7.push({ name: e4, dimensions: s });
  }
  const m4 = c3(e3);
  u7.forEach((e4) => m4[e4.name] && Object.assign(e4, m4[e4.name]));
  const p5 = u7.length ? { variables: u7 } : void 0, h3 = [];
  for (let o3 = 0; o3 < r6.length; o3++) {
    const e4 = r6[o3], { values: l2, dataType: u8, axisNames: m5, shape: c5 } = i4[e4], p6 = c5.length > 2 ? o3 * c5.slice(0, -2).reduce((e5, t5) => e5 * t5) : 0, g5 = m5.slice(0, -2), b3 = c5.slice(0, -2), y4 = "float" === u8 ? "f32" : d2(l2), x3 = t4 * n6, j2 = l2.length / x3;
    for (let i5 = 0; i5 < j2; i5++) {
      const e5 = c2.createEmptyBand(y4, x3), r7 = new Uint8Array(x3).fill(255);
      let u9 = false;
      const m6 = i5 * x3;
      for (let t5 = 0; t5 < x3; t5++) {
        const n7 = l2[m6 + t5];
        null == n7 ? (r7[t5] = 0, u9 = true) : e5[t5] = n7;
      }
      if (0 === o3 || s?.length) {
        const l3 = new c2({ width: t4, height: n6, mask: u9 ? r7 : null, pixels: [e5], pixelType: y4 });
        if (l3.updateStatistics(), s?.length) {
          h3[f2(g5, b3, i5) + p6] = l3;
        } else h3.push(l3);
      } else {
        const t5 = h3[i5];
        t5.pixels.push(e5), u9 ? t5.mask && (t5.mask = c2.combineBandMasks([t5.mask, r7])) : t5.mask = u9 ? r7 : null;
      }
    }
  }
  const g4 = Object.values(m4).find((e4) => e4.attributeTable)?.attributeTable;
  return { extent: l, pixelBlocks: h3, multidimensionalInfo: p5, attributeTable: g4, bandNames: p5 ? void 0 : r6 };
}

// node_modules/@arcgis/core/layers/raster/datasets/InMemoryRaster.js
var f3 = class extends Z {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.source = null;
  }
  get url() {
    return "";
  }
  fetchRawTile(t4, e3, i4, s = {}) {
    if (!this._pixelBlockTiles) {
      const { rasterInfo: a4 } = this, [o3, r6] = a4.storageInfo.tileInfo.size, { sliceId: l } = s, { pixelBlocks: n6 } = this.source, p5 = { pixelBlock: null == l ? n6[0] : n6[l], useBilinear: "thematic" !== a4.dataType, tileSize: { width: o3, height: r6 }, level: t4, row: e3, col: i4 }, c5 = this.rasterJobHandler ? this.rasterJobHandler.clipTile(p5, s) : D(p5);
      return Promise.resolve(c5);
    }
    const a3 = this._pixelBlockTiles.get(`${t4}/${e3}/${i4}`);
    return Promise.resolve(a3);
  }
  async _open(t4) {
    const e3 = this.source, { pixelBlocks: i4, attributeTable: s, statistics: a3, histograms: l, name: n6, nativeExtent: m4, transform: p5, colormap: c5 } = e3, u7 = i4[0], { width: h3, height: f4, pixelType: x3 } = u7, y4 = e3.extent ?? new z({ xmin: -0.5, ymin: 0.5, xmax: h3 - 0.5, ymax: f4 - 0.5, spatialReference: new S({ wkid: 3857 }) }), g4 = e3.isPseudoSpatialReference ?? !e3.extent, b3 = { x: y4.width / h3, y: y4.height / f4 }, I5 = __spreadValues({}, e3.keyProperties);
    e3.dataType && (I5.DataType = e3.dataType), e3.bandInfos && (I5.BandProperties = e3.bandInfos.map((t5) => t5.toJSON())), s && (I5.DataType = "Thematic");
    const v5 = new m({ width: h3, height: f4, pixelType: x3, extent: y4, nativeExtent: m4, attributeTable: s, colormap: c5, transform: p5, pixelSize: b3, spatialReference: y4.spatialReference, bandCount: u7.pixels.length, keyProperties: I5, multidimensionalInfo: e3.multidimensionalInfo, statistics: a3, isPseudoSpatialReference: g4, histograms: l });
    this.ioConfig.skipMapInfo && this.updateImageSpaceRasterInfo(v5), this.createRemoteDatasetStorageInfo(v5, 512, 512), this._set("rasterInfo", v5), this.updateTileInfo(), v5.multidimensionalInfo ? await this._buildMDimStats(e3.pixelBlocks, v5.multidimensionalInfo) : await this._buildInMemoryRaster(u7, { width: 512, height: 512 }, t4), v5.multidimensionalInfo || (this.source = null), this.datasetName = n6;
  }
  async _buildInMemoryRaster(t4, s, a3) {
    const { rasterInfo: o3 } = this, r6 = o3.storageInfo.maximumPyramidLevel ?? 0, l = "thematic" !== o3.dataType, n6 = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: t4, tileSize: s, maximumPyramidLevel: r6, useBilinear: l }, a3) : Promise.resolve(E(t4, s, r6, l)), m4 = null != o3.statistics, u7 = null != o3.histograms, h3 = this.ioConfig.skipStatistics || m4 ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: t4 }, a3) : Promise.resolve(y(t4)), d5 = await j([n6, h3]);
    if (!d5[0].value && d5[1].value) throw new r("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = d5[0].value, m4 || (o3.statistics = d5[1].value?.statistics), u7 || (o3.histograms = d5[1].value?.histograms);
  }
  async _buildMDimStats(t4, e3, i4) {
    for (let s = 0; s < e3.variables.length; s++) {
      const a3 = e3.variables[s];
      if (a3.statistics) continue;
      const o3 = a3.dimensions.map((t5) => new n3({ variableName: a3.name, dimensionName: t5.name, values: [t5.values?.[0] ?? t5.extent?.[0]], isSlice: true })), r6 = C3(o3, e3), l = null == r6 ? null : t4[r6];
      if (null == l) continue;
      const m4 = this.rasterJobHandler ? await this.rasterJobHandler.computeStatisticsHistograms({ pixelBlock: l }, i4) : k2(l);
      a3.statistics = m4.statistics, a3.histograms || (a3.histograms = m4.histograms);
    }
  }
};
__decorate([a({ type: String, json: { write: true } })], f3.prototype, "datasetFormat", void 0), __decorate([a()], f3.prototype, "source", void 0), __decorate([a()], f3.prototype, "url", null), f3 = __decorate([c("esri.layers.raster.datasets.InMemoryRaster")], f3);
var x = f3;

// node_modules/@arcgis/core/layers/raster/datasets/CovJSONRaster.js
var p3 = class extends Z {
  constructor() {
    super(...arguments), this.datasetFormat = "CovJSON";
  }
  fetchRawTile(e3, t4, r6, s = {}) {
    return this._inMemoryRaster.fetchRawTile(e3, t4, r6, s);
  }
  async _open(e3) {
    const { extent: t4, pixelBlocks: r6, multidimensionalInfo: s, attributeTable: a3, bandNames: i4 } = await this._fetchData(e3), { statistics: o3, histograms: n6 } = k2(r6[0]), p5 = i4?.map((e4) => ({ BandName: e4 })), h3 = { DataType: a3 ? "Thematic" : s ? "Scientific" : "Generic", BandProperties: p5 }, d5 = new x({ source: { extent: t4, pixelBlocks: r6, attributeTable: a3 ? g2.fromJSON(a3) : null, multidimensionalInfo: s, statistics: o3, histograms: n6, keyProperties: h3, isPseudoSpatialReference: false } });
    await d5.open(), this._inMemoryRaster = d5;
    const u7 = this.source ? "" : this.url.slice(this.url.lastIndexOf("/") + 1);
    this._set("datasetName", u7.slice(0, u7.indexOf("."))), this._set("rasterInfo", d5.rasterInfo);
  }
  async _fetchData(e3) {
    const r6 = this.source ?? (await this.request(this.url, { signal: e3?.signal })).data, s = "imagery-tile-layer:open-coverage-json";
    if ("coverage" !== r6.type?.toLowerCase() || "grid" !== r6.domain?.domainType?.toLowerCase()) throw new r(s, "Only coverage with Grid domain type is supported");
    if (!r6.ranges) throw new r(s, "Missing ranges in the grid coverage data");
    if (!r6.domain.referencing?.length) throw new r(s, "Missing domain referencing in the grid coverage data");
    const a3 = Object.values(r6.ranges);
    for (let n6 = 0; n6 < a3.length; n6++) {
      const { axisNames: e4, shape: r7, type: l, values: c5 } = a3[n6];
      if (!("ndarray" === l.toLowerCase() && c5?.length && e4?.length && r7?.length)) throw new r(s, "Only ranges with valid NdArray, axisNames, shape, and inline values are supported");
      if (!(i3(e4[e4.length - 1]) && r4(e4[e4.length - 2]))) throw new r(s, "Only row-major ordered pixel values are supported. X axis must be the last axis.");
    }
    return p2(r6);
  }
};
__decorate([a({ type: String, json: { write: true } })], p3.prototype, "datasetFormat", void 0), __decorate([a({ constructOnly: true })], p3.prototype, "source", void 0), p3 = __decorate([c("esri.layers.raster.datasets.CovJSONRaster")], p3);
var h = p3;

// node_modules/@arcgis/core/layers/raster/datasets/pamParser.js
function u5(e3, t4) {
  if (!e3 || !t4) return null;
  const n6 = [];
  for (let r6 = 0; r6 < e3.length; r6++) n6.push(e3[r6]), n6.push(t4[r6]);
  return n6;
}
function c4(e3) {
  const t4 = e2(e3, "GeodataXform"), n6 = d3(o(t4, "SpatialReference/WKID") || t2(t4, "SpatialReference/WKT"));
  if ("typens:PolynomialXform" !== t4.getAttribute("xsi:type")) return { spatialReference: n6, transform: null };
  const r6 = o(t4, "PolynomialOrder") ?? 1, a3 = u3(t4, "CoeffX/Double"), c5 = u3(t4, "CoeffY/Double"), m4 = u3(t4, "InverseCoeffX/Double"), p5 = u3(t4, "InverseCoeffY/Double"), S5 = u5(a3, c5), C4 = u5(m4, p5);
  return { spatialReference: n6, transform: S5 && C4 && S5.length && C4.length ? new y2({ spatialReference: n6, polynomialOrder: r6, forwardCoefficients: S5, inverseCoefficients: C4 }) : null };
}
function m3(e3) {
  const t4 = o(e3, "NoDataValue"), n6 = e2(e3, "Histograms/HistItem"), r6 = o(n6, "HistMin"), o3 = o(n6, "HistMax"), f4 = o(n6, "BucketCount"), u7 = t2(n6, "HistCounts")?.split("|").map((e4) => Number(e4));
  let c5, m4, d5, p5;
  n4(e3, "Metadata/MDI").forEach((e4) => {
    const t5 = Number(e4.textContent ?? e4.nodeValue);
    switch (e4.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        c5 = t5;
        break;
      case "STATISTICS_MAXIMUM":
        m4 = t5;
        break;
      case "STATISTICS_MEAN":
        d5 = t5;
        break;
      case "STATISTICS_STDDEV":
        p5 = t5;
    }
  });
  const S5 = o(e3, "Metadata/SourceBandIndex");
  return { noDataValue: t4, histogram: u7?.length && null != r6 && null != o3 ? { min: r6, max: o3, size: f4 || u7.length, counts: u7 } : null, sourceBandIndex: S5, statistics: null != c5 && null != m4 ? { min: c5, max: m4, avg: d5, stddev: p5 } : null };
}
function d3(e3) {
  if (!e3) return null;
  let r6 = Number(e3);
  if (!isNaN(r6) && 0 !== r6) return new S({ wkid: r6 });
  if (e3 = String(e3).trim(), I2(e3)) return new S({ wkt2: e3 });
  const s = e3.toUpperCase();
  if (s.startsWith("COMPD_CS")) {
    if (!s.includes("VERTCS") || !s.includes("GEOGCS") && !s.startsWith("PROJCS")) return null;
    const n6 = s.indexOf("VERTCS"), a3 = s.indexOf("PROJCS"), i4 = a3 > -1 ? a3 : s.indexOf("GEOGCS");
    if (-1 === i4) return null;
    const l = e3.slice(i4, e3.lastIndexOf("]", n6) + 1).trim(), o3 = e3.slice(n6, e3.lastIndexOf("]")).trim();
    r6 = p4(l);
    const f4 = new S(r6 ? { wkid: r6 } : { wkt: l }), u7 = p4(o3);
    return u7 && (f4.vcsWkid = u7), f4;
  }
  return s.startsWith("GEOGCS") || s.startsWith("PROJCS") ? (r6 = p4(e3), new S(0 !== r6 ? { wkid: r6 } : { wkt: e3 })) : null;
}
function p4(e3) {
  const t4 = e3.replaceAll("]", "[").replaceAll('"', "").split("[").map((e4) => e4.trim()).filter((e4) => "" !== e4), n6 = t4[t4.length - 1].split(","), r6 = n6[0]?.toLowerCase();
  if (("epsg" === r6 || "esri" === r6) && e3.endsWith('"]]')) {
    const e4 = Number(n6[1]);
    if (!isNaN(e4) && 0 !== e4) return e4;
  }
  return 0;
}
function S2(t4) {
  if ("pamdataset" !== t4?.documentElement.tagName?.toLowerCase()) return {};
  const n6 = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  t4.documentElement.childNodes.forEach((e3) => {
    if (1 === e3.nodeType) {
      if (i2(e3, "SRS")) {
        if (!n6.spatialReference) {
          const t5 = t2(e3);
          n6.spatialReference = d3(t5);
        }
      } else if (i2(e3, "Metadata")) if ("xml:ESRI" === e3.getAttribute("domain")) {
        const { spatialReference: t5, transform: r6 } = c4(e3);
        n6.transform = r6, n6.spatialReference || (n6.spatialReference = t5);
      } else {
        n4(e3, "MDI").forEach((e4) => n6.metadata[e4.getAttribute("key")] = t2(e4));
      }
      else if (i2(e3, "PAMRasterBand")) {
        const t5 = m3(e3);
        null != t5.sourceBandIndex && null == n6.rasterBands[t5.sourceBandIndex] ? n6.rasterBands[t5.sourceBandIndex] = t5 : n6.rasterBands.push(t5);
      }
    }
  });
  const i4 = n6.rasterBands;
  if (i4.length) {
    const t5 = !!i4[0].statistics;
    n6.statistics = t5 ? i4.map((e3) => e3.statistics).filter(N) : null;
    const r6 = !!i4[0].histogram;
    n6.histograms = r6 ? i4.map((e3) => e3.histogram).filter(N) : null;
  }
  return n6;
}

// node_modules/@arcgis/core/layers/raster/datasets/ImageAuxRaster.js
var h2 = class extends Z {
  fetchRawTile(t4, e3, s, r6 = {}) {
    return this._inMemoryRaster.fetchRawTile(t4, e3, s, r6);
  }
  async _open(t4) {
    const e3 = await this._fetchData(t4);
    let { spatialReference: s, statistics: r6, histograms: a3, transform: o3 } = await this._fetchAuxiliaryData(t4);
    const l = !s;
    l && (s = new S({ wkid: 3857 })), a3?.length && null == r6 && (r6 = v2(a3));
    const { width: f4, height: p5 } = e3;
    let u7 = new z({ xmin: -0.5, ymin: 0.5 - p5, xmax: f4 - 0.5, ymax: 0.5, spatialReference: s });
    const h3 = o3 ? o3.forwardTransform(u7) : u7;
    let d5 = true;
    if (o3) {
      const t5 = o3.forwardCoefficients;
      d5 = t5 && 0 === t5[1] && 0 === t5[2], d5 && (o3 = null, u7 = h3);
    }
    const w2 = new x({ source: { extent: h3, nativeExtent: u7, transform: o3, pixelBlocks: [e3], statistics: r6, histograms: a3, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: l }, ioConfig: { sampling: "closest", skipStatistics: true } });
    this.ioConfig.skipMapInfo && (w2.ioConfig.skipMapInfo = true), await w2.open(), w2.source = null, this._set("rasterInfo", w2.rasterInfo), this._inMemoryRaster = w2;
  }
  async _fetchData(t4) {
    const { data: s } = await this.request(this.url, { responseType: "array-buffer", signal: t4?.signal }), r6 = L(s).toUpperCase();
    if ("JPG" !== r6 && "PNG" !== r6 && "GIF" !== r6 && "BMP" !== r6) throw new r("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", r6);
    const a3 = r6.toLowerCase(), o3 = "gif" === a3 || "bmp" === a3 || !has("ios"), i4 = await this.decodePixelBlock(s, { format: a3, useCanvas: o3, hasNoZlibMask: true });
    if (null == i4) throw new r("image-aux-raster:open", "the data cannot be decoded");
    return i4;
  }
  async _fetchAuxiliaryData(t4) {
    const e3 = t4?.signal, { skipExtensions: a3 = [], skipMapInfo: o3 } = this.ioConfig, i4 = o3 || a3.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: e3 }), n6 = this.datasetFormat, l = "JPG" === n6 ? "jgw" : "PNG" === n6 ? "pgw" : "BMP" === n6 ? "bpw" : null, m4 = l && a3.includes(l) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + l, { responseType: "text", signal: e3 }), p5 = await j([i4, m4]);
    if (e3?.aborted) throw u();
    const c5 = S2(p5[0].value?.data);
    if (!c5.transform) {
      const t5 = p5[1].value ? p5[1].value.data.split("\n").slice(0, 6).map((t6) => Number(t6)) : null;
      c5.transform = 6 === t5?.length ? new y2({ forwardCoefficients: [t5[4], t5[5], t5[0], -t5[1], t5[2], -t5[3]] }) : null;
    }
    return c5;
  }
};
__decorate([a({ type: String, json: { write: true } })], h2.prototype, "datasetFormat", void 0), h2 = __decorate([c("esri.layers.raster.datasets.ImageAuxRaster")], h2);
var d4 = h2;

// node_modules/@arcgis/core/layers/raster/datasets/ImageServerRaster.js
var g3 = class extends Z {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async fetchRawTile(e3, t4, i4, s = {}) {
    const { storageInfo: r6, extent: a3 } = this.rasterInfo, { transposeInfo: l } = r6, n6 = null != l && !!s.transposedVariableName;
    if (this._slices && !n6 && null == s.sliceId) return null;
    const o3 = n6 ? 0 : r6.maximumPyramidLevel - e3 + this._levelOffset, c5 = `${this.url}/tile/${o3}/${t4}/${i4}`, u7 = __spreadValues(__spreadValues({}, this._slices ? n6 ? { variable: s.transposedVariableName } : { sliceId: s.sliceId || 0 } : null), s.refreshParameters);
    let h3, f4;
    if (r6.isBsqTile) {
      const e4 = (s.bandIds?.length ? s.bandIds : [0, 1, 2]).map((e5) => this.request(c5, { query: __spreadProps(__spreadValues({}, u7), { bandId: e5 }), responseType: "array-buffer", signal: s.signal })), t5 = await Promise.all(e4), i5 = t5.map((e5) => e5.data.byteLength).reduce((e5, t6) => e5 + t6), r7 = new Uint8Array(i5);
      f4 = [];
      let a4 = 0;
      for (const { data: s2 } of t5) f4.push(a4), r7.set(new Uint8Array(s2), a4), a4 += s2.byteLength;
      h3 = r7.buffer;
    } else {
      h3 = (await this.request(c5, { query: u7, responseType: "array-buffer", signal: s.signal })).data;
    }
    if (!h3) return null;
    const p5 = n6 ? l.tileSize : r6.tileInfo.size, d5 = await this.decodePixelBlock(h3, { width: p5[0], height: p5[1], planes: f4?.length, offsets: f4, pixelType: null, isPoint: "Elevation" === this.tileType, returnInterleaved: n6, noDataValue: this.rasterInfo.noDataValue });
    if (null == d5) return null;
    const y4 = r6.blockBoundary[e3];
    if ("jpg" !== r6.compression || i4 > y4.minCol && i4 < y4.maxCol && t4 > y4.minRow && t4 < y4.maxRow) return d5;
    const { origin: x3, blockWidth: g4, blockHeight: v5 } = r6, { x: S5, y: I5 } = this.getPyramidPixelSize(e3), w2 = Math.round((a3.xmin - x3.x) / S5) % g4, b3 = Math.round((a3.xmax - x3.x) / S5) % g4 || g4, T2 = Math.round((x3.y - a3.ymax) / I5) % v5, M = Math.round((x3.y - a3.ymin) / I5) % v5 || v5, _2 = i4 === y4.minCol ? w2 : 0, j2 = t4 === y4.minRow ? T2 : 0, O = i4 === y4.maxCol ? b3 : g4, R = t4 === y4.maxRow ? M : v5;
    return C2(d5, { x: _2, y: j2 }, { width: O - _2, height: R - j2 }), d5;
  }
  getSliceIndex(e3) {
    if (!this._slices || null == e3 || 0 === e3.length) return null;
    const t4 = e3;
    for (let i4 = 0; i4 < this._slices.length; i4++) {
      const e4 = this._slices[i4].multidimensionalDefinition;
      if (e4.length === t4.length && !e4.some((e5) => {
        const i5 = t4.find((t5) => e5.variableName === t5.variableName && t5.dimensionName === e5.dimensionName);
        if (!i5) return true;
        return (Array.isArray(e5.values[0]) ? `${e5.values[0][0]}-${e5.values[0][1]}` : e5.values[0]) !== (Array.isArray(i5.values[0]) ? `${i5.values[0][0]}-${i5.values[0][1]}` : i5.values[0]);
      })) return i4;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(e3, t4) {
    const i4 = this.request(this.url + "/statistics", { query: { variable: e3, f: "json" }, signal: t4 }).then((e4) => e4.data?.statistics), s = this.request(this.url + "/histograms", { query: { variable: e3, f: "json" }, signal: t4 }).then((e4) => e4.data?.histograms), r6 = await Promise.all([i4, s]);
    return r6[0] && r6[0].forEach((e4) => {
      e4.avg = e4.mean, e4.stddev = e4.standardDeviation;
    }), r6[1]?.[0]?.counts?.length || (r6[1] = null), { statistics: r6[0] || null, histograms: r6[1] || null };
  }
  async computeBestPyramidLevelForLocation(e3, t4 = {}) {
    if (!this._tilemapCache) return 0;
    let i4 = this.identifyPixelLocation(e3, 0, t4.datumTransformation);
    if (null === i4) return null;
    let s = 0;
    const { maximumPyramidLevel: r6 } = this.rasterInfo.storageInfo;
    let a3 = r6 - s + this._levelOffset;
    const l = i4.srcLocation;
    for (; a3 >= 0; ) {
      try {
        if ("available" === await this._tilemapCache.fetchAvailability(a3, i4.row, i4.col, t4)) break;
      } catch {
      }
      if (a3--, s++, i4 = this.identifyPixelLocation(l, s, t4.datumTransformation), null === i4) return null;
    }
    return -1 === a3 || null == i4 ? null : s;
  }
  async _open(e3) {
    const r6 = e3?.signal, a3 = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: r6 });
    a3.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const l = a3.data;
    if (this.sourceJSON = l, !l) throw new r("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!l.tileInfo) throw new r("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const n6 = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = l.cacheType, null == this.tileType && (n6.includes(l.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : "lerc" === l.tileInfo.format.toLowerCase() ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = l.name?.slice(l.name.indexOf("/") + 1) ?? "";
    const o3 = await this._fetchRasterInfo({ signal: r6 });
    if (null == o3) throw new r("image-server-raster:open", "cannot initialize image service");
    d(o3, l);
    const c5 = "Map" === this.tileType ? v3(l.tileInfo, l) : z2.fromJSON(l.tileInfo);
    n2(c5);
    const [m4, u7] = this._computeMinMaxLOD(o3, c5), { extent: h3, pixelSize: x3 } = o3, g4 = 1e-3 * Math.min(x3.x, x3.y);
    (x3.x !== x3.y || Math.abs(m4.resolution - x3.x) > g4) && (x3.x = x3.y = m4.resolution, o3.width = Math.ceil((h3.xmax - h3.xmin) / x3.x - 0.1), o3.height = Math.ceil((h3.ymax - h3.ymin) / x3.y - 0.1));
    const I5 = m4.level - u7.level, [w2, b3] = c5.size, T2 = [], M = [], { lods: _2 } = c5;
    _2.forEach((e4, t4) => {
      e4.level >= u7.level && e4.level <= m4.level && T2.push({ x: e4.resolution, y: e4.resolution }), t4 < _2.length - 1 && M.push(Math.round(10 * e4.resolution / _2[t4 + 1].resolution) / 10);
    }), T2.sort((e4, t4) => e4.x - t4.x);
    const j2 = this.computeBlockBoundary(h3, w2, b3, c5.origin, T2, I5), O = T2.length > 1 ? T2.slice(1) : null;
    let R;
    l.transposeInfo && (R = { tileSize: [l.transposeInfo.rows, l.transposeInfo.cols], packetSize: o3.keyProperties?._yxs.PacketSize ?? 0 });
    const z3 = M.length <= 1 || M.length >= 3 && M.slice(0, -1).every((e4) => e4 === M[0]) ? M[0] ?? 2 : Math.round(10 / (u7.resolution / m4.resolution) ** (-1 / I5)) / 10, N3 = !!l.bsq && "Raster" === this.tileType;
    if (o3.storageInfo = new p({ blockWidth: c5.size[0], blockHeight: c5.size[1], pyramidBlockWidth: c5.size[0], pyramidBlockHeight: c5.size[1], pyramidResolutions: O, pyramidScalingFactor: z3, compression: c5.format, origin: c5.origin, firstPyramidLevel: 1, maximumPyramidLevel: I5, tileInfo: c5, isBsqTile: N3, transposeInfo: R, blockBoundary: j2 }), S3(o3), this._set("rasterInfo", o3), l.capabilities.toLowerCase().includes("tilemap")) {
      const e4 = { tileInfo: o3.storageInfo.tileInfo, parsedUrl: I(this.url), url: this.url, tileServers: [] };
      this._tilemapCache = new T({ layer: e4 });
    }
  }
  async _fetchRasterInfo(e3) {
    const t4 = this.sourceJSON;
    if ("Map" === this.tileType) {
      const e4 = t4.fullExtent || t4.extent, i5 = Math.ceil((e4.xmax - e4.xmin) / t4.pixelSizeX - 0.1), s2 = Math.ceil((e4.ymax - e4.ymin) / t4.pixelSizeY - 0.1), r7 = S.fromJSON(t4.spatialReference || e4.spatialReference), a4 = new _({ x: t4.pixelSizeX, y: t4.pixelSizeY, spatialReference: r7 });
      return new m({ width: i5, height: s2, bandCount: 3, extent: z.fromJSON(e4), spatialReference: r7, pixelSize: a4, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const i4 = __spreadProps(__spreadValues({}, e3), { query: __spreadProps(__spreadValues({}, this.ioConfig.customFetchParameters), { f: "json" }) }), s = f(this.url, this.sourceJSON, i4), r6 = t4.hasMultidimensions ? this.request(`${this.url}/slices`, i4).then((e4) => e4.data?.slices).catch(() => null) : null, a3 = await Promise.all([s, r6]);
    return this._slices = a3[1], a3[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e3 } = this;
    e3.minScale && e3.minScale < 0 && (e3.minScale = 0), e3.maxScale && e3.maxScale < 0 && (e3.maxScale = 0);
  }
  _computeMinMaxLOD(e3, t4) {
    const { pixelSize: i4 } = e3, s = 0.5 / e3.width * i4.x, { lods: r6 } = t4, a3 = t4.lodAt(Math.max.apply(null, r6.map((e4) => e4.level))), l = t4.lodAt(Math.min.apply(null, r6.map((e4) => e4.level))), { tileType: n6 } = this;
    if ("Map" === n6) return this._levelOffset = r6[0].level, [a3, l];
    if ("Raster" === n6) {
      return [r6.find((e4) => e4.resolution === i4.x) ?? a3, l];
    }
    const { minScale: o3, maxScale: c5 } = this.sourceJSON;
    let m4 = a3;
    c5 > 0 && (m4 = r6.find((e4) => Math.abs(e4.scale - c5) < s), m4 || (m4 = r6.filter((e4) => e4.scale > c5).sort((e4, t5) => e4.scale > t5.scale ? 1 : -1)[0] ?? a3));
    let u7 = l;
    return o3 > 0 && (u7 = r6.find((e4) => Math.abs(e4.scale - o3) < s) ?? l, this._levelOffset = u7.level - l.level), [m4, u7];
  }
};
function v3(e3, t4) {
  if (!e3) return null;
  const { minScale: i4, maxScale: s, minLOD: r6, maxLOD: a3 } = t4;
  if (null != r6 && null != a3) return z2.fromJSON(__spreadProps(__spreadValues({}, e3), { lods: e3.lods.filter(({ level: e4 }) => null != e4 && e4 >= r6 && e4 <= a3) }));
  if (0 !== i4 && 0 !== s) {
    const t5 = (e4) => Math.round(1e4 * e4) / 1e4, r7 = i4 ? t5(i4) : 1 / 0, a4 = s ? t5(s) : -1 / 0;
    return z2.fromJSON(__spreadProps(__spreadValues({}, e3), { lods: e3.lods.filter((e4) => {
      const i5 = t5(e4.scale);
      return i5 <= r7 && i5 >= a4;
    }) }));
  }
  return z2.fromJSON(e3);
}
function S3(e3) {
  const { extent: t4, spatialReference: i4 } = e3;
  t4.xmin > -1 && t4.xmax > 181 && i4?.wkid && i4.isGeographic && (e3.nativeExtent = e3.extent, e3.transform = new a2(), e3.extent = e3.transform.forwardTransform(t4));
}
__decorate([a({ type: String, json: { write: true } })], g3.prototype, "datasetFormat", void 0), __decorate([a()], g3.prototype, "tileType", void 0), g3 = __decorate([c("esri.layers.raster.datasets.ImageServerRaster")], g3);
var I3 = g3;

// node_modules/@arcgis/core/layers/raster/datasets/MRFRaster.js
var y3 = /* @__PURE__ */ new Map();
y3.set("Byte", "u8"), y3.set("Int8", "s8"), y3.set("UInt8", "u8"), y3.set("Int16", "s16"), y3.set("UInt16", "u16"), y3.set("Int32", "s32"), y3.set("UInt32", "u32"), y3.set("Float32", "f32"), y3.set("Float64", "f32"), y3.set("Double64", "f32");
var x2 = /* @__PURE__ */ new Map();
x2.set("none", { blobExtension: ".til", isOneSegment: true, decoderFormat: "bip" }), x2.set("lerc", { blobExtension: ".lrc", isOneSegment: false, decoderFormat: "lerc" }), x2.set("deflate", { blobExtension: ".pzp", isOneSegment: true, decoderFormat: "deflate" }), x2.set("jpeg", { blobExtension: ".pjg", isOneSegment: true, decoderFormat: "jpg" }), x2.set("qb3", { blobExtension: ".pq3", isOneSegment: true, decoderFormat: "qb3" });
var b = class extends Z {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async fetchRawTile(t4, e3, s, r6 = {}) {
    const { blockWidth: o3, blockHeight: i4, blockBoundary: a3 } = this.rasterInfo.storageInfo, n6 = a3[t4];
    if (!n6 || n6.maxRow < e3 || n6.maxCol < s || n6.minRow > e3 || n6.minCol > s) return null;
    const { bandCount: l, pixelType: f4 } = this.rasterInfo, { ranges: c5, actualTileWidth: h3, actualTileHeight: p5 } = this._getTileLocation(t4, e3, s);
    if (!c5 || 0 === c5.length) return null;
    if (c5.some((t5) => t5.from > t5.to)) {
      const t5 = new Uint8Array(o3 * i4);
      return new c2({ width: o3, height: i4, pixels: void 0, mask: t5, validPixelCount: 0 });
    }
    const { bandIds: m4 } = this.ioConfig, g4 = this._getBandSegmentCount(), d5 = [];
    let y4 = 0;
    for (y4 = 0; y4 < g4; y4++) m4 && !m4.includes(y4) || d5.push(this.request(this._files.data, { range: { from: c5[y4].from, to: c5[y4].to }, responseType: "array-buffer", signal: r6.signal }));
    const b3 = await Promise.all(d5), w2 = b3.map((t5) => t5.data.byteLength).reduce((t5, e4) => t5 + e4), I5 = new Uint8Array(w2), A = [];
    let R = 0;
    for (y4 = 0; y4 < g4; y4++) A.push(R), I5.set(new Uint8Array(b3[y4].data), R), R += b3[y4].data.byteLength;
    const F = x2.get(this.rasterInfo.storageInfo.compression).decoderFormat, S5 = await this.decodePixelBlock(I5.buffer, { width: o3, height: i4, format: F, planes: m4?.length || l, offsets: A, pixelType: f4 }).catch(() => null);
    if (null == S5) return null;
    let { noDataValue: _2 } = this.rasterInfo;
    if (null != _2 && "lerc" !== F && !S5.mask && (_2 = _2[0], null != _2)) {
      const t5 = S5.width * S5.height, e4 = new Uint8Array(t5);
      if (Math.abs(_2) > 1e24) for (y4 = 0; y4 < t5; y4++) Math.abs((S5.pixels[0][y4] - _2) / _2) > 1e-6 && (e4[y4] = 1);
      else for (y4 = 0; y4 < t5; y4++) S5.pixels[0][y4] !== _2 && (e4[y4] = 1);
      S5.mask = e4;
    }
    let M = 0, k4 = 0;
    if (h3 !== o3 || p5 !== i4) {
      let t5 = S5.mask;
      if (t5) for (y4 = 0; y4 < i4; y4++) if (k4 = y4 * o3, y4 < p5) for (M = h3; M < o3; M++) t5[k4 + M] = 0;
      else for (M = 0; M < o3; M++) t5[k4 + M] = 0;
      else for (t5 = new Uint8Array(o3 * i4), S5.mask = t5, y4 = 0; y4 < p5; y4++) for (k4 = y4 * o3, M = 0; M < h3; M++) t5[k4 + M] = 1;
    }
    return S5;
  }
  async _open(t4) {
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e3 = t4 ? t4.signal : null, s = await this.request(this.url, { responseType: "xml", signal: e3 }), { rasterInfo: r6, files: o3 } = this._parseHeader(s.data), { skipMapInfo: i4, skipExtensions: a3 = [] } = this.ioConfig;
    if (!a3.includes("aux.xml") && !i4) {
      const e4 = await this._fetchAuxiliaryData(t4);
      null != e4 && (r6.statistics = e4.statistics ?? r6.statistics, r6.histograms = e4.histograms, e4.histograms && null == r6.statistics && (r6.statistics = v2(e4.histograms)));
    }
    i4 && this.updateImageSpaceRasterInfo(r6), this._set("rasterInfo", r6), this._files = o3;
    const n6 = await this.request(o3.index, { responseType: "array-buffer", signal: e3 });
    this._storageIndex = w(n6.data);
    const { blockWidth: l, blockHeight: f4 } = this.rasterInfo.storageInfo, c5 = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: h3, height: p5 } = this.rasterInfo, u7 = [], g4 = this._getBandSegmentCount();
    let d5 = 0, y4 = -1;
    for (; d5 < this._storageIndex.length; ) {
      y4++;
      const t5 = Math.ceil(h3 / l / c5 ** y4) - 1, e4 = Math.ceil(p5 / f4 / c5 ** y4) - 1;
      d5 += (t5 + 1) * (e4 + 1) * g4 * 4, u7.push({ maxRow: e4, maxCol: t5, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = u7, y4 > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = y4), this.updateTileInfo();
  }
  _getBandSegmentCount() {
    return x2.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(t4, e3, s) {
    const { blockWidth: r6, blockHeight: o3, pyramidScalingFactor: i4 } = this.rasterInfo.storageInfo, { width: a3, height: n6 } = this.rasterInfo, l = this._getBandSegmentCount();
    let f4, c5, h3, p5 = 0, m4 = 0;
    for (h3 = 0; h3 < t4; h3++) m4 = i4 ** h3, f4 = Math.ceil(a3 / r6 / m4), c5 = Math.ceil(n6 / o3 / m4), p5 += f4 * c5;
    m4 = i4 ** t4, f4 = Math.ceil(a3 / r6 / m4), c5 = Math.ceil(n6 / o3 / m4), p5 += e3 * f4 + s, p5 *= 4 * l;
    const u7 = this._storageIndex.subarray(p5, p5 + 4 * l);
    let g4 = 0, d5 = 0;
    const y4 = [];
    for (let x3 = 0; x3 < l; x3++) g4 = u7[4 * x3] * 2 ** 32 + u7[4 * x3 + 1], d5 = g4 + u7[4 * x3 + 2] * 2 ** 32 + u7[4 * x3 + 3] - 1, y4.push({ from: g4, to: d5 });
    return { ranges: y4, actualTileWidth: s < f4 - 1 ? r6 : Math.ceil(a3 / m4) - r6 * (f4 - 1), actualTileHeight: e3 < c5 - 1 ? o3 : Math.ceil(n6 / m4) - o3 * (c5 - 1) };
  }
  _parseHeader(t4) {
    const s = e2(t4, "MRF_META/Raster");
    if (!s) throw new r("mrf:open", "not a valid MRF format");
    const r6 = e2(s, "Size"), n6 = parseInt(r6.getAttribute("x"), 10), f4 = parseInt(r6.getAttribute("y"), 10), p5 = parseInt(r6.getAttribute("c"), 10), m4 = (t2(s, "Compression") || "none").toLowerCase();
    if (!x2.has(m4)) throw new r("mrf:open", "currently does not support compression " + m4);
    const u7 = t2(s, "DataType") || "UInt8", b3 = y3.get(u7);
    if (null == b3) throw new r("mrf:open", "currently does not support pixel type " + u7);
    const w2 = e2(s, "PageSize"), I5 = parseInt(w2.getAttribute("x"), 10), A = parseInt(w2.getAttribute("y"), 10), R = e2(s, "DataValues");
    let F, S5;
    R && (S5 = R.getAttribute("NoData"), null != S5 && (F = S5.trim().split(" ").map((t5) => parseFloat(t5))));
    if (e2(t4, "MRF_META/CachedSource")) throw new r("mrf:open", "currently does not support MRF referencing other data files");
    const _2 = e2(t4, "MRF_META/GeoTags"), M = e2(_2, "BoundingBox");
    let k4, T2 = false;
    if (null != M) {
      const t5 = parseFloat(M.getAttribute("minx")), e3 = parseFloat(M.getAttribute("miny")), s2 = parseFloat(M.getAttribute("maxx")), r7 = parseFloat(M.getAttribute("maxy")), i4 = t2(_2, "Projection") || "";
      let n7 = S.WGS84;
      if ("LOCAL_CS[]" !== i4) if (i4.toLowerCase().startsWith("epsg:")) {
        const t6 = Number(i4.slice(5));
        isNaN(t6) || 0 === t6 || (n7 = new S({ wkid: t6 }));
      } else n7 = d3(i4) ?? S.WGS84;
      else T2 = true, n7 = new S({ wkid: 3857 });
      k4 = new z(t5, e3, s2, r7), k4.spatialReference = n7;
    } else T2 = true, k4 = new z({ xmin: -0.5, ymin: 0.5 - f4, xmax: n6 - 0.5, ymax: 0.5, spatialReference: new S({ wkid: 3857 }) });
    const C4 = e2(t4, "MRF_META/Rsets"), j2 = parseInt(C4?.getAttribute("scale") || "2", 10), B = k4.spatialReference, U = new p({ origin: new _({ x: k4.xmin, y: k4.ymax, spatialReference: B }), blockWidth: I5, blockHeight: A, pyramidBlockWidth: I5, pyramidBlockHeight: A, compression: m4, pyramidScalingFactor: j2 }), E3 = new _({ x: k4.width / n6, y: k4.height / f4, spatialReference: B }), L2 = new m({ width: n6, height: f4, extent: k4, isPseudoSpatialReference: T2, spatialReference: B, bandCount: p5, pixelType: b3, pixelSize: E3, noDataValue: F, storageInfo: U }), P = t2(t4, "datafile"), W = t2(t4, "IndexFile");
    return { rasterInfo: L2, files: { mrf: this.url, index: W || this.url.replace(".mrf", ".idx"), data: P || this.url.replace(".mrf", x2.get(m4).blobExtension) } };
  }
  async _fetchAuxiliaryData(t4) {
    try {
      const { data: e3 } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: t4?.signal });
      return S2(e3);
    } catch {
      return null;
    }
  }
};
function w(t4) {
  if (t4.byteLength % 16 > 0) throw new Error("invalid array buffer must be multiples of 16");
  let e3, s, r6, o3, i4, a3;
  if (r3) {
    for (s = new Uint8Array(t4), o3 = new ArrayBuffer(t4.byteLength), r6 = new Uint8Array(o3), i4 = 0; i4 < t4.byteLength / 4; i4++) for (a3 = 0; a3 < 4; a3++) r6[4 * i4 + a3] = s[4 * i4 + 3 - a3];
    e3 = new Uint32Array(o3);
  } else e3 = new Uint32Array(t4);
  return e3;
}
__decorate([a()], b.prototype, "_files", void 0), __decorate([a()], b.prototype, "_storageIndex", void 0), __decorate([a({ type: String, json: { write: true } })], b.prototype, "datasetFormat", void 0), b = __decorate([c("esri.layers.raster.datasets.MRFRaster")], b);
var I4 = b;

// node_modules/@arcgis/core/layers/raster/datasets/DBFParser.js
function t3(e3) {
  const t4 = e3.fields, r6 = e3.records, n6 = t4.some((e4) => "oid" === e4.name.toLowerCase()) ? "OBJECTID" : "OID", i4 = [{ name: n6, type: "esriFieldTypeOID", alias: "OID" }].concat(t4.map((e4) => ({ name: e4.name, type: "esriFieldType" + e4.typeName, alias: e4.name }))), a3 = i4.map((e4) => e4.name), s = [];
  let o3 = 0, l = 0;
  return r6.forEach((e4) => {
    const t5 = {};
    for (t5[n6] = o3++, l = 1; l < a3.length; l++) t5[a3[l]] = e4[l - 1];
    s.push({ attributes: t5 });
  }), { displayFieldName: "", fields: i4, features: s };
}
var r5 = class {
  static get supportedVersions() {
    return [5];
  }
  static parse(r6) {
    const n6 = new DataView(r6), i4 = 3 & n6.getUint8(0);
    if (3 !== i4) return { header: { version: i4 }, recordSet: null };
    const a3 = n6.getUint32(4, true), s = n6.getUint16(8, true), o3 = n6.getUint16(10, true), l = { version: i4, recordCount: a3, headerByteCount: s, recordByteCount: o3 };
    let p5 = 32;
    const d5 = [], g4 = [];
    let h3;
    if (3 === i4) {
      for (; 13 !== n6.getUint8(p5); ) h3 = String.fromCharCode(n6.getUint8(p5 + 11)).trim(), d5.push({ name: r2(new Uint8Array(r6, p5, 11)), type: h3, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(h3)], length: n6.getUint8(p5 + 16) }), p5 += 32;
      if (p5 += 1, d5.length > 0) for (; g4.length < a3 && r6.byteLength - p5 > o3; ) {
        const t4 = [];
        32 === n6.getUint8(p5) ? (p5 += 1, d5.forEach((n7) => {
          if ("C" === n7.type) t4.push(r2(new Uint8Array(r6, p5, n7.length)).trim());
          else if ("N" === n7.type) t4.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(r6, p5, n7.length)).trim(), 10));
          else if ("F" === n7.type) t4.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(r6, p5, n7.length)).trim()));
          else if ("D" === n7.type) {
            const e3 = String.fromCharCode.apply(null, new Uint8Array(r6, p5, n7.length)).trim();
            t4.push(new Date(parseInt(e3.slice(0, 4), 10), parseInt(e3.slice(4, 6), 10) - 1, parseInt(e3.slice(6, 8), 10)));
          }
          p5 += n7.length;
        }), g4.push(t4)) : p5 += o3;
      }
    }
    return { header: l, fields: d5, records: g4, recordSet: t3({ fields: d5, records: g4 }) };
  }
};

// node_modules/@arcgis/core/layers/raster/datasets/TIFFRaster.js
var S4 = (e3, t4) => e3.get(t4)?.values;
var b2 = (e3, t4) => e3.get(t4)?.values?.[0];
var E2 = class extends Z {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this._chunkSize = 10485760, this.datasetFormat = "TIFF";
  }
  async fetchRawTile(e3, t4, i4, r6 = {}) {
    if (!this._headerInfo?.isSupported || this.isBlockOutside(e3, t4, i4)) return null;
    const s = await this._fetchRawTiffTile(e3, t4, i4, false, r6);
    if (null != s && this._headerInfo.hasMaskBand) {
      const a3 = await this._fetchRawTiffTile(e3, t4, i4, true, r6);
      null != a3 && a3.pixels[0] instanceof Uint8Array && (s.mask = a3.pixels[0]);
    }
    return s;
  }
  async _open(e3) {
    const r6 = e3 ? e3.signal : null, { data: s } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: r6 });
    if (!s) throw new r("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
    const { littleEndian: a3, firstIFDPos: n6, isBigTiff: o3 } = H(s), f4 = [], l = { fileChunk: s, posIFD: n6, fileOffset: 0 };
    await this._readIFDs(f4, l, a3, o3 ? 8 : 4, r6);
    const { imageInfo: u7, rasterInfo: c5 } = k3(f4), m4 = G(f4), y4 = v(f4);
    if (this._headerInfo = __spreadValues({ littleEndian: a3, isBigTiff: o3, ifds: f4, pyramidIFDs: m4, maskIFDs: y4 }, u7), this._set("rasterInfo", c5), !u7.isSupported) throw new r("tiffraster:open", "this tiff is not supported: " + u7.message);
    if (!u7.tileWidth) throw new r("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    c5.isPseudoSpatialReference && n.getLogger(this).warn("The spatial reference for this tiff is unsupported. Only EPSG spatial reference codes and Esri WKTs are supported.");
    const g4 = f4[0].get("PREDICTOR")?.values?.[0], x3 = f4[0].get("SAMPLEFORMAT")?.values?.[0];
    if (3 === x3 && 2 === g4) throw new r("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floating point data");
    const { skipMapInfo: w2, skipExtensions: I5 = [] } = this.ioConfig;
    if (!I5.includes("aux.xml") && !w2) {
      const t4 = await this._fetchAuxiliaryMetaData(e3);
      null != t4 && v4(t4, c5);
    }
    I5.includes("vat.dbf") || 1 !== c5.bandCount || "u8" !== c5.pixelType || w2 || (c5.attributeTable = await this._fetchAuxiliaryTable(e3), null != c5.attributeTable && (c5.keyProperties.DataType = "thematic")), w2 && this.updateImageSpaceRasterInfo(c5), this.updateTileInfo();
  }
  async _validateOrFetchHeaderBuffer(e3, t4) {
    let { fileChunk: i4, fileOffset: r6, posIFD: s } = e3;
    if (s + 8 >= i4.byteLength || s < 0) {
      r6 = s + r6;
      i4 = (await this.request(this.url, { range: { from: r6, to: r6 + this._bufferSize }, responseType: "array-buffer", signal: t4 })).data, s = 0;
    }
    return { fileChunk: i4, fileOffset: r6, posIFD: s };
  }
  async _readIFDs(e3, i4, r6, s = 4, a3) {
    if (!i4.posIFD) return null;
    i4 = await this._validateOrFetchHeaderBuffer(i4, a3);
    const n6 = await this._readIFD(i4, r6, e, s, a3);
    if (!n6?.ifd) throw new r("tiffraster:open", "cannot parse tiff header. failed to open url " + this.url);
    if (e3.push(n6.ifd), !n6.nextIFD) return null;
    i4.posIFD = n6.nextIFD - i4.fileOffset, await this._readIFDs(e3, i4, r6, s, a3);
  }
  async _readIFD(e3, t4, i4 = e, r6 = 4, s) {
    let { fileChunk: a3, posIFD: n6, fileOffset: o3 } = e3;
    if (!e3.fileChunk) return null;
    const f4 = Y(a3, t4, n6, o3, i4, r6);
    if (f4.success) {
      const e4 = [];
      if (f4.ifd?.forEach((t5) => {
        t5.values || e4.push(t5);
      }), e4.length > 0 && await this._fillOffsets(e4, t4, f4.nextIFD, s), f4.ifd?.has("GEOKEYDIRECTORY")) {
        const e5 = f4.ifd.get("GEOKEYDIRECTORY"), i5 = e5?.values;
        if (i5 && i5.length > 4) {
          const r7 = i5[0] + "." + i5[1] + "." + i5[2];
          n6 = e5.valueOffset + 6 - o3;
          const f5 = await this._validateOrFetchHeaderBuffer({ fileChunk: a3, posIFD: n6, fileOffset: o3 }, s), l = await this._readIFD(f5, t4, t, 2, s);
          e5.data = l?.ifd, e5.data && e5.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [r7] });
        }
      }
      return f4;
    }
    if (f4.requiredBufferSize) {
      return a3 = (await this.request(this.url, { range: { from: o3, to: o3 + n6 + f4.requiredBufferSize + 8 }, responseType: "array-buffer", signal: s })).data, a3.byteLength < n6 + f4.requiredBufferSize ? null : (e3.fileChunk = a3, e3.fileOffset = o3, this._readIFD(e3, t4, i4, r6, s));
    }
    return null;
  }
  async _fillOffsets(e3, t4, i4, r6) {
    const s = e3.filter((e4) => null != e4.offlineOffsetSize);
    if (0 === s.length) return;
    const a3 = s.map((e4) => e4.offlineOffsetSize), n6 = Math.min.apply(null, a3.map((e4) => e4[0])), o3 = Math.max.apply(null, a3.map((e4) => e4[0] + e4[1]));
    let f4 = 1 === a3.length || o3 - n6 <= this._bufferSize;
    if (!f4 && a3.length > 1) {
      a3.sort((e4, t5) => e4[0] - t5[0]);
      f4 = a3.reduce((e4, t5) => e4 === t5[0] ? t5[0] + t5[1] : 0, a3[0][0]) === o3;
    }
    if (f4) {
      const e4 = await this._fetchOffsets(n6, Math.max(o3, n6 + this._bufferSize), r6);
      return void s.forEach((i5) => N2(e4, t4, i5, n6));
    }
    const l = s.map(async (e4) => {
      const i5 = e4.offlineOffsetSize, s2 = await this._fetchOffsets(i5[0], i5[1] + i5[0], r6);
      N2(s2, t4, e4, i5[0]);
    });
    await Promise.all(l);
  }
  async _fetchOffsets(e3, t4, i4) {
    const r6 = [], s = this._chunkSize, a3 = Math.ceil((t4 - e3) / s);
    let n6 = e3;
    for (let l = 0; l < a3; l++) r6.push(this.request(this.url, { range: { from: n6, to: l === a3 - 1 ? t4 : n6 + s - 1 }, responseType: "array-buffer", signal: i4 })), n6 += s;
    const o3 = await Promise.all(r6);
    if (1 === a3) return o3[0].data;
    const f4 = new Uint8Array(t4 - e3 + 1);
    for (let l = 0; l < a3; l++) f4.set(new Uint8Array(o3[l].data), l * s);
    return f4.buffer;
  }
  async _fetchRawTiffTile(e3, t4, i4, r6, s = {}) {
    const a3 = this._getTileLocation(e3, t4, i4, r6);
    if (!a3) return null;
    const { ranges: n6, actualTileWidth: o3, actualTileHeight: f4, ifd: l } = a3, u7 = n6.map((e4) => this.request(this.url, { range: e4, responseType: "array-buffer", signal: s.signal })), c5 = await Promise.all(u7), h3 = c5.map((e4) => e4.data.byteLength).reduce((e4, t5) => e4 + t5), p5 = 1 === c5.length ? c5[0].data : new ArrayBuffer(h3), d5 = [0], m4 = [0];
    if (c5.length > 1) {
      const e4 = new Uint8Array(p5);
      for (let t5 = 0, i5 = 0; t5 < c5.length; t5++) {
        const r7 = c5[t5].data;
        e4.set(new Uint8Array(r7), i5), d5[t5] = i5, i5 += r7.byteLength, m4[t5] = r7.byteLength;
      }
    }
    const { blockWidth: y4, blockHeight: g4 } = this.getBlockWidthHeight(e3), x3 = await this.decodePixelBlock(p5, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: l, offsets: d5, sizes: m4 }, width: y4, height: g4, planes: null, pixelType: null });
    if (null == x3) return null;
    if (o3 !== y4 || f4 !== g4) {
      let e4 = x3.mask;
      if (e4) for (let t5 = 0; t5 < g4; t5++) {
        const i5 = t5 * y4;
        if (t5 < f4) for (let t6 = o3; t6 < y4; t6++) e4[i5 + t6] = 0;
        else for (let t6 = 0; t6 < y4; t6++) e4[i5 + t6] = 0;
      }
      else {
        e4 = new Uint8Array(y4 * g4), x3.mask = e4;
        for (let t5 = 0; t5 < f4; t5++) {
          const i5 = t5 * y4;
          for (let t6 = 0; t6 < o3; t6++) e4[i5 + t6] = 1;
        }
      }
    }
    return x3;
  }
  _getTileLocation(e3, t4, i4, r6 = false) {
    const { firstPyramidLevel: s, blockBoundary: a3 } = this.rasterInfo.storageInfo, n6 = 0 === e3 ? 0 : e3 - (s - 1), { _headerInfo: o3 } = this;
    if (!o3) return null;
    const f4 = r6 ? o3.maskIFDs[n6] : 0 === n6 ? o3?.ifds[0] : o3?.pyramidIFDs[n6 - 1];
    if (!f4) return null;
    const l = C(f4, o3), u7 = S4(f4, "TILEOFFSETS");
    if (void 0 === u7) return null;
    const c5 = S4(f4, "TILEBYTECOUNTS"), { minRow: h3, minCol: p5, maxRow: d5, maxCol: m4 } = a3[n6];
    if (t4 > d5 || i4 > m4 || t4 < h3 || i4 < p5) return null;
    const y4 = b2(f4, "IMAGEWIDTH"), x3 = b2(f4, "IMAGELENGTH"), w2 = b2(f4, "TILEWIDTH"), I5 = b2(f4, "TILELENGTH"), T2 = [];
    if (l) {
      const { bandCount: e4 } = this.rasterInfo;
      for (let r7 = 0; r7 < e4; r7++) {
        const e5 = r7 * (d5 + 1) * (m4 + 1) + t4 * (m4 + 1) + i4;
        T2[r7] = { from: u7[e5], to: u7[e5] + c5[e5] - 1 };
      }
    } else {
      const e4 = t4 * (m4 + 1) + i4;
      T2.push({ from: u7[e4], to: u7[e4] + c5[e4] - 1 });
    }
    for (let g4 = 0; g4 < T2.length; g4++) if (null == T2[g4].from || !T2[g4].to || T2[g4].to < 0) return null;
    return { ranges: T2, ifd: f4, actualTileWidth: i4 === m4 && y4 % w2 || w2, actualTileHeight: t4 === d5 && x3 % I5 || I5 };
  }
  async _fetchAuxiliaryMetaData(e3) {
    try {
      const { data: t4 } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: e3?.signal });
      return S2(t4);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(e3) {
    try {
      const { data: t4 } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: e3?.signal }), i4 = r5.parse(t4);
      return i4?.recordSet ? g2.fromJSON(i4.recordSet) : null;
    } catch {
      return null;
    }
  }
};
function k3(e3) {
  const t4 = k(e3), { width: i4, height: r6, tileWidth: s, tileHeight: f4, planes: l, pixelType: u7, compression: h3, firstPyramidLevel: p5, maximumPyramidLevel: d5, pyramidBlockWidth: m4, pyramidBlockHeight: y4, pyramidResolutions: g4, tileBoundary: w2, affine: I5, metadata: T2 } = t4, F = t4.extent.spatialReference?.wkt || t4.extent.spatialReference?.wkid;
  let E3 = d3(F), k4 = !!t4.isPseudoGeographic;
  null == E3 && (k4 = true, E3 = new S({ wkid: 3857 }));
  const v5 = new z(__spreadProps(__spreadValues({}, t4.extent), { spatialReference: E3 })), D3 = new _(v5 ? { x: v5.xmin, y: v5.ymax, spatialReference: E3 } : { x: 0, y: 0 }), P = new p({ blockWidth: s, blockHeight: f4, pyramidBlockWidth: m4, pyramidBlockHeight: y4, compression: h3, origin: D3, firstPyramidLevel: p5, maximumPyramidLevel: d5, pyramidResolutions: g4, blockBoundary: w2 }), B = new _({ x: (v5.xmax - v5.xmin) / i4, y: (v5.ymax - v5.ymin) / r6, spatialReference: E3 }), z3 = T2 ? { BandProperties: T2.bandProperties, DataType: T2.dataType } : {};
  let C4 = null;
  const L2 = b2(e3[0], "PHOTOMETRICINTERPRETATION"), j2 = S4(e3[0], "COLORMAP");
  if (L2 <= 3 && j2?.length > 3 && j2.length % 3 == 0) {
    C4 = [];
    const e4 = j2.length / 3;
    for (let t5 = 0; t5 < e4; t5++) C4.push([t5, j2[t5] >>> 8, j2[t5 + e4] >>> 8, j2[t5 + 2 * e4] >>> 8]);
  }
  const A = new m({ width: i4, height: r6, bandCount: l, pixelType: u7, pixelSize: B, storageInfo: P, spatialReference: E3, isPseudoSpatialReference: k4, keyProperties: z3, extent: v5, colormap: C4, statistics: T2 ? T2.statistics : null });
  if (I5?.length && (A.nativeExtent = new z({ xmin: -0.5, ymin: 0.5 - r6, xmax: i4 - 0.5, ymax: 0.5, spatialReference: E3 }), A.transform = new y2({ polynomialOrder: 1, forwardCoefficients: [I5[2] + I5[0] / 2, I5[5] - I5[3] / 2, I5[0], I5[3], -I5[1], -I5[4]] }), A.extent = A.transform.forwardTransform(A.nativeExtent), A.pixelSize = new _({ x: (v5.xmax - v5.xmin) / i4, y: (v5.ymax - v5.ymin) / r6, spatialReference: E3 }), P.origin.x = -0.5, P.origin.y = 0.5), g4) {
    const { x: e4, y: t5 } = A.pixelSize;
    g4.forEach((i5) => {
      i5.x *= e4, i5.y *= t5;
    });
  }
  return { imageInfo: t4, rasterInfo: A };
}
function v4(e3, t4) {
  if (t4.statistics = e3.statistics ?? t4.statistics, t4.histograms = e3.histograms, e3.histograms && null == t4.statistics && (t4.statistics = v2(e3.histograms)), e3.transform && null == t4.transform) {
    t4.transform = e3.transform, t4.nativeExtent = t4.extent;
    const i4 = t4.transform.forwardTransform(t4.nativeExtent);
    t4.pixelSize = new _({ x: (i4.xmax - i4.xmin) / t4.width, y: (i4.ymax - i4.ymin) / t4.height, spatialReference: t4.spatialReference }), t4.extent = i4;
  }
  t4.isPseudoSpatialReference && e3.spatialReference && (t4.spatialReference = e3.spatialReference, t4.extent.spatialReference = t4.nativeExtent.spatialReference = t4.storageInfo.origin.spatialReference = t4.spatialReference);
}
__decorate([a()], E2.prototype, "_files", void 0), __decorate([a()], E2.prototype, "_headerInfo", void 0), __decorate([a()], E2.prototype, "_bufferSize", void 0), __decorate([a()], E2.prototype, "_chunkSize", void 0), __decorate([a({ type: String, json: { write: true } })], E2.prototype, "datasetFormat", void 0), E2 = __decorate([c("esri.layers.raster.datasets.TIFFRaster")], E2);
var D2 = E2;

// node_modules/@arcgis/core/layers/raster/datasets/RasterFactory.js
var n5 = /* @__PURE__ */ new Map();
n5.set("MRF", { desc: "Meta Raster Format", constructor: I4 }), n5.set("TIFF", { desc: "GeoTIFF", constructor: D2 }), n5.set("RasterTileServer", { desc: "Raster Tile Server", constructor: I3 }), n5.set("JPG", { desc: "JPG Raster Format", constructor: d4 }), n5.set("PNG", { desc: "PNG Raster Format", constructor: d4 }), n5.set("GIF", { desc: "GIF Raster Format", constructor: d4 }), n5.set("BMP", { desc: "BMP Raster Format", constructor: d4 }), n5.set("CovJSON", { desc: "COVJSON Raster Format", constructor: h }), n5.set("MEMORY", { desc: "In Memory Raster Format", constructor: x });
var u6 = class {
  static get supportedFormats() {
    const t4 = /* @__PURE__ */ new Set();
    return n5.forEach((r6, e3) => t4.add(e3)), t4;
  }
  static async open(r6) {
    const { url: e3, ioConfig: s, source: o3, sourceJSON: a3 } = r6;
    let c5 = r6.datasetFormat ?? s?.datasetFormat;
    null == c5 && (e3.includes(".") ? c5 = e3.slice(e3.lastIndexOf(".") + 1).toUpperCase() : "coverage" === o3?.type?.toLowerCase() ? c5 = "CovJSON" : o3?.extent && o3.pixelblocks && (c5 = "MEMORY")), "OVR" === c5 || "TIF" === c5 ? c5 = "TIFF" : "JPG" === c5 || "JPEG" === c5 || "JFIF" === c5 ? c5 = "JPG" : "COVJSON" === c5 && (c5 = "CovJSON"), e3.toLowerCase().includes("/imageserver") && !e3.toLowerCase().includes("/wcsserver") && (c5 = "RasterTileServer");
    const u7 = { url: e3, source: o3, sourceJSON: a3, datasetFormat: c5, ioConfig: s ?? { bandIds: null, sampling: null } };
    if (Object.keys(u7).forEach((t4) => {
      null == u7[t4] && delete u7[t4];
    }), c5) {
      if (!this.supportedFormats.has(c5)) throw new r("rasterfactory:open", "not a supported format " + c5);
      if ("CRF" === c5) throw new r("rasterfactory:open", `cannot open raster: ${e3}`);
      const s2 = new (0, n5.get(c5).constructor)(u7);
      return await s2.open({ signal: r6.signal }), s2;
    }
    const i4 = Array.from(n5.keys()).filter((t4) => "CovJSON" !== t4 && "Memory" !== t4);
    let l = 0;
    const m4 = () => {
      if (c5 = i4[l++], !c5) return null;
      if ("CRF" === c5) return null;
      const t4 = new (0, n5.get(c5).constructor)(u7);
      return t4.open({ signal: r6.signal }).then(() => t4).catch(() => m4());
    };
    return m4();
  }
  static register(t4, r6, e3) {
    n5.has(t4.toUpperCase()) || n5.set(t4.toUpperCase(), { desc: r6, constructor: e3 });
  }
};

export {
  u6 as u
};
//# sourceMappingURL=chunk-BYCC6FMH.js.map
