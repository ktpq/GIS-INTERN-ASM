import {
  l,
  t,
  u as u2
} from "./chunk-Q4WKSAPY.js";
import {
  n as n2
} from "./chunk-CZMKFPK4.js";
import {
  i
} from "./chunk-HFSNW7LO.js";
import "./chunk-X4R43FDP.js";
import "./chunk-NFUHF2IU.js";
import "./chunk-MC4L6QKA.js";
import {
  g
} from "./chunk-GFDC56CO.js";
import "./chunk-UF3I2KBG.js";
import "./chunk-ESFGILEN.js";
import {
  f,
  l as l2
} from "./chunk-MY4KRETZ.js";
import "./chunk-HAPSASFY.js";
import "./chunk-YP7OFZOK.js";
import "./chunk-LDDM3CX4.js";
import "./chunk-WQBN2KKE.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-T6SJ457A.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-IBCQZ6GX.js";
import "./chunk-IXCAA3KK.js";
import "./chunk-6AURJHXX.js";
import "./chunk-7DIM55SH.js";
import "./chunk-RUNHW2N4.js";
import "./chunk-47CFN4JI.js";
import {
  Y as Y2
} from "./chunk-SGNC5H35.js";
import "./chunk-G2AJQACY.js";
import {
  u
} from "./chunk-PPQ45YK3.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-37CL2A4G.js";
import "./chunk-TSYJHA7W.js";
import "./chunk-2CBDH3OZ.js";
import "./chunk-UU3FW4SQ.js";
import "./chunk-X4YO53U7.js";
import "./chunk-YTCOBTMP.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import {
  H,
  Y
} from "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import {
  L
} from "./chunk-F32PRJK5.js";
import "./chunk-SQBU6SSQ.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-FNL3SIHY.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-6TJKPIZ2.js";
import "./chunk-7PBHIAQH.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import {
  N
} from "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import {
  n2 as n
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js
var w = class extends b {
  constructor(t2) {
    super(t2), this.options = null;
  }
  destroy() {
    this._set("options", null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    return this.grid?.rotateWithMap ? 0 : s(this.view.rotation ?? 0);
  }
  get gridRotation() {
    return s(this.grid?.rotation ?? 0);
  }
  get gridCenter() {
    const { spatialReference: t2, grid: e } = this;
    if (!e || !t2 || !Y(e.center.spatialReference, t2)) return null;
    try {
      const r = H(e.center, t2), i2 = t2.isWrappable && null != this.view?.center ? L(r.x, this.view.center.x, t2) : r.x;
      return l2(i2, r.y, r.z);
    } catch (i2) {
      return n.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.", i2), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: t2, grid: e } = this;
    if (!e || !t2) return 1;
    const { majorLineInterval: r, dynamicScaling: i2 } = e;
    return r < 1 ? null : l(r, t2, i2);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: t2 } = this;
    return t2 ? N(t2.spacing, t2.units, "meters") : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: t2 } = this;
    return null == t2 ? null : t2 * u(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: t2 } = this.view;
    return this.gridCenter ? u2(this.gridCenter[0], this.gridCenter[1], t2) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: t2, viewMetersPerPixel: e } = this;
    return e && t2 ? t2 / e : null;
  }
  get updating() {
    return null != this.grid && null != this.spatialReference && null == this.viewMetersPerSRUnit;
  }
  async fetchCandidates(t2, e, r) {
    const { options: i2, view: n3 } = this;
    if (!i2?.effectiveGridEnabled || !n3.grid || r.feature?.attributes && g in r.feature.attributes) return [];
    const o = r.coordinateHelper.arrayToPoint(t2), s2 = i2.distance * ("touch" === r.pointer ? i2.touchSensitivityMultiplier : 1);
    return this.fetchCandidatesSync(o, s2);
  }
  fetchCandidatesSync(t2, e) {
    const r = [], { grid: i2, effectiveViewRotation: n3, gridRotation: o, gridCenter: s2, viewMetersPerPixel: a2, viewMetersPerSRUnit: c2, offsetScaleFactor: u3, spatialReference: g2, gridMetersPerStride: f2, pixelsPerStride: m } = this;
    if (!(i2 && a2 && c2 && s2 && g2 && u3 && f2 && m)) return r;
    if (!i2.dynamicScaling && m < t) return r;
    if (!Y(t2.spatialReference, g2)) return r;
    const S = H(t2, g2), w2 = l2(S.x, S.y, S.z), x = P(w2, -o, s2, -n3), C = f2 / c2 * u3, U = M(x, C, s2), { shouldSnapX: b2, shouldSnapY: z } = R(U, x, e, a2, c2);
    if (!b2 && !z) return [];
    const E = l2((b2 ? U : x)[0], (z ? U : x)[1]), F = P(E, o, s2, n3), L2 = P(U, o, s2, n3);
    if (z) {
      const t3 = j(U, x, C, "y"), e2 = P(t3, o, s2, n3);
      r.push(new i({ lineStart: L2, lineEnd: e2, targetPoint: F, isDraped: false }));
    }
    if (b2) {
      const t3 = j(U, x, C, "x"), e2 = P(t3, o, s2, n3);
      r.push(new i({ lineStart: L2, lineEnd: e2, targetPoint: F, isDraped: false }));
    }
    return b2 && z && r.push(new n2(F, r[0], r[1], false)), r;
  }
};
__decorate([a({ constructOnly: true })], w.prototype, "view", void 0), __decorate([a()], w.prototype, "options", void 0), __decorate([a()], w.prototype, "grid", null), __decorate([a()], w.prototype, "effectiveViewRotation", null), __decorate([a()], w.prototype, "gridRotation", null), __decorate([a()], w.prototype, "gridCenter", null), __decorate([a()], w.prototype, "offsetScaleFactor", null), __decorate([a()], w.prototype, "spatialReference", null), __decorate([a()], w.prototype, "gridMetersPerStride", null), __decorate([a()], w.prototype, "viewMetersPerPixel", null), __decorate([a()], w.prototype, "viewMetersPerSRUnit", null), __decorate([a()], w.prototype, "pixelsPerStride", null), __decorate([a()], w.prototype, "updating", null), w = __decorate([c("esri.views.interactive.snapping.GridSnappingEngine")], w);
var P = (t2, e, r, i2) => {
  const n3 = f(t2[0], t2[1], t2[2]);
  return Y2(n3, Y2(n3, n3, r, e), r, i2);
};
var M = (t2, e, r) => {
  const i2 = (t2[0] - r[0]) / e, n3 = (t2[1] - r[1]) / e, o = Math.trunc(i2), s2 = Math.trunc(n3), a2 = Math.round(i2 % 1), l3 = Math.round(n3 % 1), p = r[0] + (o + a2) * e, c2 = r[1] + (s2 + l3) * e;
  return l2(p, c2);
};
var R = (t2, e, r, i2, n3) => {
  if (i2 <= 0) return { shouldSnapX: false, shouldSnapY: false };
  const o = (t2[0] - e[0]) / i2, s2 = (t2[1] - e[1]) / i2;
  return { shouldSnapX: Math.abs(o * n3) < r, shouldSnapY: Math.abs(s2 * n3) < r };
};
var j = (t2, e, r, i2) => {
  if ("y" === i2) {
    const i3 = e[0] > t2[0] ? 1 : -1;
    return l2(t2[0] + r * i3, t2[1]);
  }
  const n3 = e[1] > t2[1] ? 1 : -1;
  return l2(t2[0], t2[1] + r * n3);
};
export {
  w as GridSnappingEngine
};
//# sourceMappingURL=GridSnappingEngine-3MOZ4DL5.js.map
