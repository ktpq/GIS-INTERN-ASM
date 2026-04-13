import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import {
  o
} from "./chunk-47Z5HJ52.js";
import {
  S
} from "./chunk-4HQQF57Z.js";

// node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var r = { 102100: { maxX: 20037508342788905e-9, minX: -20037508342788905e-9, plus180Line: new y({ paths: [[[20037508342788905e-9, -20037508342788905e-9], [20037508342788905e-9, 20037508342788905e-9]]], spatialReference: S.WebMercator }), minus180Line: new y({ paths: [[[-20037508342788905e-9, -20037508342788905e-9], [-20037508342788905e-9, 20037508342788905e-9]]], spatialReference: S.WebMercator }) }, 4326: { maxX: 180, minX: -180, plus180Line: new y({ paths: [[[180, -180], [180, 180]]], spatialReference: S.WGS84 }), minus180Line: new y({ paths: [[[-180, -180], [-180, 180]]], spatialReference: S.WGS84 }) } };
function i(e, n) {
  return Math.ceil((e - n) / (2 * n));
}
function s(e, n) {
  const t = o2(e);
  for (const r2 of t) for (const e2 of r2) e2[0] += n;
  return e;
}
function o2(e) {
  return o(e) ? e.rings : e.paths;
}

export {
  r,
  i,
  s,
  o2 as o
};
//# sourceMappingURL=chunk-55DFFBOE.js.map
