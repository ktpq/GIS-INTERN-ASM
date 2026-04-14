import {
  Jc,
  Lc,
  Og,
  Rg,
  Wg,
  Yg,
  t_,
  zc
} from "./chunk-UOKS5I7T.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import {
  n
} from "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/support/projectionTransformation.js
function p(c, p2, m) {
  let u, l;
  if (m?.geographicTransformation) {
    if (m.geographicTransformation.steps?.length) {
      const s = new t_();
      s.setInputSpatialReference(c), s.setOutputSpatialReference(p2);
      for (const e of m.geographicTransformation.steps) {
        let r;
        r = e.wkid ? Lc(e.wkid, e.isInverse) : zc(e.wkt, e.isInverse), s.add(r);
      }
      u = s.create();
    } else u = Jc();
    if (m.extendedParams) {
      l = Wg();
      const { densificationStep: e } = m.extendedParams;
      null != e && (l.densificationStep = e);
    }
  } else if (m?.areaOfInterestExtent) return Yg(c, p2, f(m.areaOfInterestExtent));
  return u ? Rg(c, p2, u, l) : Og(c, p2);
}
function f(e) {
  return n.construct(e.xmin, e.ymin, e.xmax, e.ymax);
}
export {
  p as createProjectionTransformation
};
//# sourceMappingURL=projectionTransformation-MEIMWBJM.js.map
