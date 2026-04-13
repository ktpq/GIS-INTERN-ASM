import {
  m,
  p
} from "./chunk-CE5DK2OJ.js";
import {
  g
} from "./chunk-H3GWORLU.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/imageService/fetchRasterInfo.js
async function m2(m3, f4, c2) {
  const d2 = f2(m3), { rasterFunction: p2, sourceJSON: h } = f4 || {}, g2 = p2 ? JSON.stringify(p2.rasterFunctionDefinition || p2) : null, x = u(__spreadProps(__spreadValues({}, d2.query), { renderingRule: g2, f: "json" })), y = s(x, c2);
  m3 = d2.path;
  const v = h || await f(m3, y).then((e) => e.data), b = v.hasRasterAttributeTable ? f(`${m3}/rasterAttributeTable`, y) : null, S2 = v.hasColormap ? f(`${m3}/colormap`, y) : null, V = v.hasHistograms ? f(`${m3}/histograms`, y) : null, D = v.currentVersion >= 10.3 ? f(`${m3}/keyProperties`, y) : null, I = v.hasMultidimensions ? f(`${m3}/multidimensionalInfo`, y) : null, T = v.currentVersion >= 10.81 ? f(`${m3}/statistics`, y) : null, R = await Promise.allSettled([b, S2, V, D, I, T]), j = z.fromJSON(v.extent), w = Math.ceil(j.width / v.pixelSizeX - 0.1), M = Math.ceil(j.height / v.pixelSizeY - 0.1), N = S.fromJSON(v.spatialReference || v.extent.spatialReference), O = "fulfilled" === R[0].status ? R[0].value?.data : null, C = O?.features?.length ? g.fromJSON(O) : null, J = "fulfilled" === R[1].status ? R[1].value?.data.colormap : null, k = J?.length ? J : null, P = "fulfilled" === R[2].status ? R[2].value?.data.histograms : null, $ = P?.[0]?.counts?.length ? P : null, z2 = "fulfilled" === R[3].status ? R[3].value?.data ?? {} : {}, F = "fulfilled" === R[4].status ? R[4].value?.data.multidimensionalInfo : null, E = F?.variables?.length ? F : null;
  E && E.variables.forEach((e) => {
    e.statistics?.length && e.statistics.forEach((e2) => {
      e2.avg = e2.mean, e2.stddev = e2.standardDeviation;
    }), e.dimensions?.forEach((e2) => {
      "StdTime" !== e2.name || e2.recurring || e2.unit || (e2.unit = "ISO8601");
    });
  });
  let H = null;
  const L = "fulfilled" === R[5].status ? R[5].value?.data.statistics : null;
  if (L && L.length === v.bandCount) H = L.map((e) => ({ avg: e.mean, count: e.count, max: e.max, median: e.median, min: e.min, mode: e.mode, stddev: e.standardDeviation, sum: e.sum }));
  else if (v.minValues && v.minValues.length === v.bandCount) {
    H = [];
    for (let e = 0; e < v.minValues.length; e++) H.push({ min: v.minValues[e], max: v.maxValues[e], avg: v.meanValues[e], stddev: v.stdvValues[e] });
  }
  const { defaultVariable: A, serviceDataType: q } = v;
  A && A !== z2.DefaultVariable && (z2.DefaultVariable = A), q?.includes("esriImageServiceDataTypeVector") && !q.includes(z2.DataType) && (z2.DataType = q.replace("esriImageServiceDataType", ""));
  let B = v.noDataValue;
  v.noDataValues?.length && v.noDataValues.some((e) => e !== B) && (B = v.noDataValues);
  const W = v.transposeInfo ? new p({ blockWidth: 256, blockHeight: 256, pyramidBlockWidth: 256, pyramidBlockHeight: 256, pyramidScalingFactor: 2, compression: "lerc", origin: new _({ x: v.extent.xmin, y: v.extent.ymax, spatialReference: N }), firstPyramidLevel: 1, maximumPyramidLevel: Math.max(0, Math.round(Math.log(Math.max(w, M)) / Math.LN2 - 8)), transposeInfo: v.transposeInfo }) : void 0;
  return new m({ width: w, height: M, bandCount: v.bandCount, extent: z.fromJSON(v.extent), spatialReference: N, pixelSize: new _({ x: v.pixelSizeX, y: v.pixelSizeY, spatialReference: N }), pixelType: v.pixelType.toLowerCase(), statistics: H, attributeTable: C, colormap: k, histograms: $, keyProperties: z2, noDataValue: B, multidimensionalInfo: E, storageInfo: W });
}
function f3(e, t, a) {
  return m2(e, { sourceJSON: t }, a);
}
function c(e, t, a) {
  return m2(e, { rasterFunction: t }, a);
}
function d(e, t) {
  e.attributeTable || (t.hasRasterAttributeTable = false), e.histograms || (t.hasHistograms = false), e.colormap || (t.hasColormap = false), e.multidimensionalInfo || (t.hasMultidimensions = false);
}

export {
  f3 as f,
  c,
  d
};
//# sourceMappingURL=chunk-3NW3Z64E.js.map
