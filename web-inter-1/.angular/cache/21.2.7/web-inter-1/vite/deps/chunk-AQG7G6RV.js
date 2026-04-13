import {
  u
} from "./chunk-GM5PCDS3.js";
import {
  d
} from "./chunk-LANOLZOB.js";

// node_modules/@arcgis/core/rest/query/operations/queryUtils.js
function i(e, t) {
  if (t && "extent" === e.type) return `${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;
  if (t && "point" === e.type) return `${e.x},${e.y}`;
  const i2 = e.toJSON();
  return delete i2.spatialReference, JSON.stringify(i2);
}
function n(n2, r2, a) {
  const { geometry: l } = n2, s = n2.compactGeometryEnabled ?? false, o = n2.toJSON();
  delete o.compactGeometryEnabled, delete o.defaultSpatialReferenceEnabled;
  const u2 = o;
  let d2, c, y;
  if (l && (c = l.spatialReference, y = d(c), u2.geometryType = u(l), u2.geometry = i(l, s), u2.inSR = y), o.groupByFieldsForStatistics && (u2.groupByFieldsForStatistics = o.groupByFieldsForStatistics.join(",")), o.objectIds) switch (a?.uniqueIdFields?.length) {
    case void 0:
      u2.objectIds = o.objectIds.join(",");
      break;
    case 1:
      u2.uniqueIds = JSON.stringify(o.objectIds), delete u2.objectIds;
      break;
    default:
      u2.uniqueIds = JSON.stringify(o.objectIds.map((e) => JSON.parse(e))), delete u2.objectIds;
  }
  if (o.orderByFields && (u2.orderByFields = o.orderByFields.join(",")), !o.outFields || !o.returnDistinctValues && (r2?.returnCountOnly || r2?.returnExtentOnly || r2?.returnIdsOnly) ? delete u2.outFields : o.outFields.includes("*") ? u2.outFields = "*" : u2.outFields = o.outFields.join(","), o.outSR ? (u2.outSR = d(o.outSR), d2 = n2.outSpatialReference) : l && (o.returnGeometry || o.returnCentroid) && (u2.outSR = u2.inSR, d2 = c), o.returnGeometry && delete o.returnGeometry, o.outStatistics && (u2.outStatistics = JSON.stringify(o.outStatistics)), o.fullText && (u2.fullText = JSON.stringify(o.fullText)), o.pixelSize && (u2.pixelSize = JSON.stringify(o.pixelSize)), o.quantizationParameters && (n2.defaultSpatialReferenceEnabled && null != c && null != n2.quantizationParameters?.extent && c.equals(n2.quantizationParameters.extent.spatialReference) && delete o.quantizationParameters.extent.spatialReference, u2.quantizationParameters = JSON.stringify(o.quantizationParameters)), o.parameterValues && (u2.parameterValues = JSON.stringify(o.parameterValues)), o.rangeValues && (u2.rangeValues = JSON.stringify(o.rangeValues)), o.dynamicDataSource && (u2.layer = JSON.stringify({ source: o.dynamicDataSource }), delete o.dynamicDataSource), o.timeExtent) {
    const e = o.timeExtent, { start: t, end: i2 } = e;
    null == t && null == i2 || (u2.time = t === i2 ? t : `${t ?? "null"},${i2 ?? "null"}`), delete o.timeExtent;
  }
  return n2.defaultSpatialReferenceEnabled && null != c && null != d2 && c.equals(d2) && (u2.defaultSR = u2.inSR, delete u2.inSR, delete u2.outSR), u2;
}
var r = "json";

export {
  n,
  r
};
//# sourceMappingURL=chunk-AQG7G6RV.js.map
