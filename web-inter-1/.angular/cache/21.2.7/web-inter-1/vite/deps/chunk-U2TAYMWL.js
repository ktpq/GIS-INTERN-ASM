import {
  A,
  G
} from "./chunk-5MDFQFDX.js";
import {
  o
} from "./chunk-56NUZKCZ.js";

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
//# sourceMappingURL=chunk-U2TAYMWL.js.map
