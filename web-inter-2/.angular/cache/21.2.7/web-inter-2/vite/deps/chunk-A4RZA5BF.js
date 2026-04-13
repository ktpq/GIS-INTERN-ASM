import {
  _,
  x
} from "./chunk-2F6BRQJJ.js";

// node_modules/@arcgis/core/support/basemapUtils.js
function c(e, r2) {
  const t = e.allLayerViews.find((e2) => e2.uid === r2);
  return t?.layer.parent === e.map?.basemap;
}
function m(e) {
  return !!e?.baseLayers.concat(e.referenceLayers).some(d);
}
function d(e) {
  if (S(e.url)) return true;
  if ("vector-tile" === e.type) for (const r2 in e.sourceNameToSource) {
    const t = e.sourceNameToSource[r2];
    if (S(t?.sourceUrl)) return true;
  }
  return false;
}
var L = /^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;
function S(e) {
  if (!e) return false;
  const r2 = new x(_(e));
  return !!r2.authority && L.test(r2.authority);
}

export {
  c,
  m,
  d
};
//# sourceMappingURL=chunk-A4RZA5BF.js.map
