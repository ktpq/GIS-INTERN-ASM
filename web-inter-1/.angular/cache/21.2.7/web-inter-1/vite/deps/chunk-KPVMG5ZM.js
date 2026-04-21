import {
  r
} from "./chunk-X6CJS2LR.js";
import {
  H,
  K
} from "./chunk-5MDFQFDX.js";
import {
  __objRest
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/fetchService.js
var t = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function n(t2, n2) {
  const _a = n2 || {}, { loadContext: s2 } = _a, c2 = __objRest(_a, ["loadContext"]), o2 = s2 ? await s2.fetchServiceMetadata(t2, c2) : await r(t2, c2), y2 = K();
  l(o2), i(o2);
  const u2 = { serviceJSON: o2, preferredHost: y2 };
  if ((o2.currentVersion ?? 0) < 10.5) return u2;
  const f = `${H() ?? t2}/layers`, L = s2 ? await s2.fetchServiceMetadata(f, c2) : await r(f, c2);
  return l(L), i(L), u2.layersJSON = { layers: L.layers, tables: L.tables }, u2;
}
function s(e) {
  const { type: r2 } = e;
  return !!r2 && t.has(r2);
}
function c(e) {
  return "Table" === e.type;
}
function i(e) {
  e.layers = e.layers?.filter(s), e.tables = e.tables?.filter(c);
}
function o(e) {
  e.type ||= "Feature Layer";
}
function y(e) {
  e.type ||= "Table";
}
function l(e) {
  e.layers?.forEach(o), e.tables?.forEach(y);
}
function u(e) {
  switch (e) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}

export {
  n,
  u
};
//# sourceMappingURL=chunk-KPVMG5ZM.js.map
