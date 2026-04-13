import {
  M
} from "./chunk-RMATTWBS.js";
import {
  ke
} from "./chunk-66OU277M.js";

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
//# sourceMappingURL=chunk-7FU7UPOQ.js.map
