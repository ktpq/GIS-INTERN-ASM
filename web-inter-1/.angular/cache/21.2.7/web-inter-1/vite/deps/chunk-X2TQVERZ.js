import {
  A,
  G,
  o
} from "./chunk-MQRKJL3K.js";

// node_modules/@arcgis/core/layers/support/editableLayers.js
function n(t) {
  return "object" == typeof t && null != t && "loaded" in t && true === t.loaded && "type" in t;
}
function e(e2) {
  return !(!n(e2) || !A(e2)?.operations?.supportsEditing || "editingEnabled" in e2 && !G(e2) || o(e2));
}

export {
  e
};
//# sourceMappingURL=chunk-X2TQVERZ.js.map
