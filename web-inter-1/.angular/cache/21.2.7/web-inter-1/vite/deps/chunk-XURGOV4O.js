import {
  Oh
} from "./chunk-TTDA3WA3.js";
import {
  P,
  b,
  j,
  z
} from "./chunk-VIRT6ASK.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  s
} from "./chunk-QLDYCH6C.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticDensifyByLength.js
var o = class {
  getOperatorType() {
    return 10310;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t2, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, r, s2, n) {
    return new a(e, r, s2, t2, -1, -1, n);
  }
  execute(e, r, s2, n, i) {
    const o2 = new t([e]), a2 = this.executeMany(o2, r, s2, n, i).next();
    return a2 || b("null output"), a2;
  }
};
var a = class extends s {
  constructor(e, t2, n, i, m, o2, a2) {
    super(), this.m_progressTracker = a2, o2 > 0 && z(""), 4 !== n && m > 0 && z(""), t2 || P("");
    0 === t2.getCoordinateSystemType() && P(""), i > 0 || m > 0 || P(""), this.m_index = -1, this.m_inputGeoms = e, this.m_spatialReference = t2, this.m_curveType = n, this.m_maxLengthMeters = i, this.m_maxDeviationMeters = m, this.m_maxAngle = o2;
  }
  next() {
    {
      let e;
      for (; e = this.m_inputGeoms.next(); ) return j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.geodeticDensify(e);
      return null;
    }
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  geodeticDensify(e) {
    return Oh(e, this.m_spatialReference, this.m_curveType, this.m_maxLengthMeters, this.m_maxDeviationMeters, this.m_progressTracker);
  }
};

export {
  o,
  a
};
//# sourceMappingURL=chunk-XURGOV4O.js.map
