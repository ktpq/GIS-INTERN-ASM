import {
  hh,
  ih
} from "./chunk-UOKS5I7T.js";
import {
  P,
  b,
  j
} from "./chunk-VIRT6ASK.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  s
} from "./chunk-QLDYCH6C.js";

// node_modules/@arcgis/core/chunks/OperatorSimplifyOGC.js
var o = class {
  getOperatorType() {
    return 10104;
  }
  accelerateGeometry(e, r, t2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  isSimple(e, r, t2, s2, i) {
    return 5 === ih(e, r, t2, s2, i);
  }
  executeMany(e, r, t2, s2) {
    return new u(e, r, t2, s2);
  }
  execute(e, t2, s2, m) {
    const n = new t([e]), o2 = this.executeMany(n, t2, s2, m).next();
    return o2 || b("null output"), o2;
  }
};
var u = class extends s {
  constructor(e, r, s2, i) {
    super(), e || P(""), this.m_progressTracker = i, this.m_bForceSimplify = s2, this.m_index = -1, this.m_inputGeometryCursor = e, this.m_spatialReference = r;
  }
  next() {
    const e = this.m_inputGeometryCursor.next();
    return e ? (j(e), this.m_index = this.m_inputGeometryCursor.getGeometryID(), this.simplify(e)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return false;
  }
  getRank() {
    return 1;
  }
  simplify(e) {
    e || P("");
    return hh(e, this.m_spatialReference, this.m_bForceSimplify, this.m_progressTracker);
  }
};

export {
  o
};
//# sourceMappingURL=chunk-V74XPDBD.js.map
