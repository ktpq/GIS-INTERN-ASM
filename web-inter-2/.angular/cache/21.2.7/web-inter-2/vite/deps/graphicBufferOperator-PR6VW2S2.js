import {
  U
} from "./chunk-2CLAHPOQ.js";
import "./chunk-DEYOT4AD.js";
import "./chunk-HGL6L2CM.js";
import "./chunk-PEQTFUTW.js";
import {
  Ge,
  Qe,
  Xe
} from "./chunk-4VUAIFP7.js";
import "./chunk-PBTPKOC3.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-ZGNYH3YF.js";
import {
  al
} from "./chunk-6YNOGQRZ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import {
  n
} from "./chunk-HDXHQWQ2.js";
import {
  j
} from "./chunk-VIRT6ASK.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-IO7CXLQO.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  s
} from "./chunk-QLDYCH6C.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import {
  F
} from "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=graphicBufferOperator-PR6VW2S2.js.map
