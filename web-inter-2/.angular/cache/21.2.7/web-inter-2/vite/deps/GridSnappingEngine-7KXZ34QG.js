import {
  n as n2
} from "./chunk-44AXAMVN.js";
import {
  i
} from "./chunk-V7UWKHQ2.js";
import "./chunk-X4R43FDP.js";
import {
  g
} from "./chunk-ZZZRLTTC.js";
import "./chunk-UQ3VZPCJ.js";
import "./chunk-MC4L6QKA.js";
import "./chunk-UF3I2KBG.js";
import "./chunk-ESFGILEN.js";
import {
  f,
  l as l2
} from "./chunk-Z7VSM22T.js";
import {
  l,
  t,
  u as u2
} from "./chunk-G7OPXZFU.js";
import "./chunk-3VJWTPTP.js";
import "./chunk-LNYVQOBZ.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-U7TKBIZL.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-435JQ7DO.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-L553KULD.js";
import "./chunk-WYE7D4KB.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-IKCUBMQP.js";
import "./chunk-G2W4NJHG.js";
import "./chunk-XAOSXMFM.js";
import "./chunk-FX3Y4WSL.js";
import "./chunk-FCFPWHNO.js";
import {
  Y as Y2
} from "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-OMQXFXI3.js";
import {
  u
} from "./chunk-QWJMYWGU.js";
import "./chunk-UQACG6GI.js";
import "./chunk-HBTHIU55.js";
import "./chunk-6M5I3JU2.js";
import "./chunk-DMPSJLSK.js";
import "./chunk-TM2EVKRF.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import {
  H,
  Y
} from "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-DVV55TEN.js";
import {
  L
} from "./chunk-AAMBDXJU.js";
import "./chunk-ZBOTVMFN.js";
import "./chunk-LZSB6OIH.js";
import "./chunk-KGOQYI3F.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-U4R7X4DP.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-F6AS75CS.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import {
  N
} from "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=GridSnappingEngine-7KXZ34QG.js.map
