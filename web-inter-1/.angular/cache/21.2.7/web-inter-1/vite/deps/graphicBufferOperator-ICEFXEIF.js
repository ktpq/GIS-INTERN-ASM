import {
  U
} from "./chunk-ANW2HCCQ.js";
import "./chunk-EYMUFQFP.js";
import "./chunk-EB4L4GPV.js";
import {
  Ge,
  Qe,
  Xe
} from "./chunk-AOQZWIJ3.js";
import "./chunk-B3YOBJ3Z.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-PEQTFUTW.js";
import "./chunk-55ANZSLC.js";
import {
  al
} from "./chunk-TTDA3WA3.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-QJ53E7LJ.js";
import {
  n
} from "./chunk-HDXHQWQ2.js";
import {
  j
} from "./chunk-VIRT6ASK.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  s
} from "./chunk-QLDYCH6C.js";
import "./chunk-U54DMEX7.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import {
  F
} from "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGraphicBuffer.js
var m = class {
  getOperatorType() {
    return 10111;
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
  executeMany(e, t2, r, i, n2, m3, o2, c2, h, a2, _) {
    if (h) {
      const h2 = new u(e, t2, r, i, n2, m3, o2, c2, _);
      return new al().executeMany(h2, t2, _, 2);
    }
    return new u(e, t2, r, i, n2, m3, o2, c2, _);
  }
};
var u = class extends s {
  constructor(e, t2, r, s3, m3, u2, o2, c2, h) {
    super(), this.m_currentUnionEnvelope2D = new n(), this.m_index = -1, this.m_dindex = -1, this.m_progressTracker = h, this.m_bufferer = new U(h), this.m_inputGeoms = e, this.m_spatialReference = t2, this.m_distances = r, this.m_maxDeviation = o2, this.m_maxVerticesInFullCircle = c2, this.m_joins = s3, this.m_caps = m3, this.m_miterLimit = u2;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    {
      let e;
      for (; e = this.m_inputGeoms.next(); ) return j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.m_dindex + 1 < this.m_distances.length && this.m_dindex++, this.buffer(e, this.m_distances[this.m_dindex]);
      return null;
    }
  }
  getGeometryID() {
    return this.m_index;
  }
  buffer(e, t2) {
    return this.m_bufferer.buffer(e, t2, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_maxDeviation, this.m_maxVerticesInFullCircle);
  }
};
var o = new m();
function c(t2, r, s3, i, n2, m3, u2, c2, h) {
  const a2 = o.executeMany(new t(t2), r, s3, i, n2, m3, u2, c2, h, 0, null);
  return Array.from(a2);
}

// node_modules/@arcgis/core/geometry/operators/json/graphicBufferOperator.js
var m2 = { round: 0, miter: 1, bevel: 2 };
var s2 = { round: 0, butt: 1, square: 2 };
function a(a2, u2, p, c2, f = {}) {
  let { miterLimit: l = 10, maxDeviation: j2 = NaN, maxVerticesInFullCircle: x = 96, union: v = false, unit: b } = f;
  const [d, y] = Xe(a2);
  if (b) {
    const r = Ge(a2);
    r && (u2 = u2.map((o2) => F(o2, b, r)), j2 && (j2 = F(j2, b, r)));
  }
  return c(d, y, u2, m2[p], s2[c2], l, j2, x, v).map((r) => Qe(r, y)).filter(N);
}
export {
  a as executeMany
};
//# sourceMappingURL=graphicBufferOperator-ICEFXEIF.js.map
