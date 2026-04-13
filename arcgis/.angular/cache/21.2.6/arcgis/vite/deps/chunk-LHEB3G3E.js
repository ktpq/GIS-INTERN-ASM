import {
  G
} from "./chunk-4YKWF6M6.js";
import {
  u
} from "./chunk-47Z5HJ52.js";

// node_modules/@arcgis/core/rest/geometryService/utils.js
function o(e) {
  return { geometryType: u(e[0]), geometries: e.map((t) => t.toJSON()) };
}
function r(t, o2, r2) {
  const n = G(o2);
  return t.map((t2) => {
    const e = n.fromJSON(t2);
    return e.spatialReference = r2, e;
  });
}

export {
  o,
  r
};
//# sourceMappingURL=chunk-LHEB3G3E.js.map
