import {
  I
} from "./chunk-CHPQVLYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";

// node_modules/@arcgis/core/rest/networks/support/utils.js
function t(t2) {
  return t2.map((t3) => {
    const i = t3.editedFeatures, a = S.fromJSON(i?.spatialReference);
    return i ? { layerId: t3.id, editedFeatures: I(i, a) } : null;
  }).filter((e) => null !== e);
}

export {
  t
};
//# sourceMappingURL=chunk-KK6IAFD5.js.map
