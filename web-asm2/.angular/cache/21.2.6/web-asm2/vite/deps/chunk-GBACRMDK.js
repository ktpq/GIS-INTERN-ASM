import {
  s
} from "./chunk-S5K7KX5U.js";

// node_modules/@arcgis/core/chunks/SimpleGeometryCursor.js
var t = class extends s {
  constructor(e) {
    super(), this.m_iGeom = -1, this.m_aGeoms = e ? e.slice() : [];
  }
  next() {
    if (this.m_iGeom < this.m_aGeoms.length - 1) {
      const e = this.m_aGeoms[++this.m_iGeom];
      return this.m_aGeoms[this.m_iGeom] = null, e;
    }
    return null;
  }
  tock() {
    return false;
  }
  getGeometryID() {
    return this.m_iGeom;
  }
  getRank() {
    return 1;
  }
};

export {
  t
};
//# sourceMappingURL=chunk-GBACRMDK.js.map
