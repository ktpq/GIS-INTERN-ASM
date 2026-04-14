import {
  M
} from "./chunk-KYLXXMSB.js";
import {
  ke
} from "./chunk-JC2AZ2NN.js";

// node_modules/@arcgis/core/support/getDefaultUnitForView.js
function e(e2) {
  const n = "metric";
  if (!e2) return n;
  const { map: i } = e2, o = (i && "portalItem" in i ? i.portalItem?.portal : null) ?? M.getDefault();
  switch (o.user?.units ?? o.units) {
    case n:
      return n;
    case "english":
      return "imperial";
  }
  return ke(e2.spatialReference) ?? n;
}

export {
  e
};
//# sourceMappingURL=chunk-LAX4TFUD.js.map
