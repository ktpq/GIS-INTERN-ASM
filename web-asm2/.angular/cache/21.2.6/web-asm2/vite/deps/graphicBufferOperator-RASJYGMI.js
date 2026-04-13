import {
  U
} from "./chunk-7ZFF7W64.js";
import "./chunk-F3EUMCMF.js";
import "./chunk-JZVSUVFV.js";
import "./chunk-PBNQPJNE.js";
import {
  Ge,
  Qe,
  Xe
} from "./chunk-M2QJWV42.js";
import "./chunk-6OEUF57J.js";
import {
  al
} from "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import "./chunk-S5FMCRBW.js";
import "./chunk-MKUY72VH.js";
import "./chunk-GAJDBZ5G.js";
import {
  n
} from "./chunk-FZMMQS4X.js";
import {
  j
} from "./chunk-U3KYTZUD.js";
import "./chunk-SEVWV2FY.js";
import {
  t
} from "./chunk-GBACRMDK.js";
import {
  s
} from "./chunk-S5K7KX5U.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import {
  F
} from "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=graphicBufferOperator-RASJYGMI.js.map
