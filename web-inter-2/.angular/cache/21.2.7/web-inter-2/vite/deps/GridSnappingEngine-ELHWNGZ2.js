import {
  n as n2
} from "./chunk-5DMEH32O.js";
import {
  i
} from "./chunk-RPKBARV3.js";
import "./chunk-X4R43FDP.js";
import {
  g
} from "./chunk-D5QI2AIV.js";
import "./chunk-AYS5CQ25.js";
import "./chunk-MC4L6QKA.js";
import "./chunk-UF3I2KBG.js";
import "./chunk-ESFGILEN.js";
import {
  f,
  l as l2
} from "./chunk-ZV255XC4.js";
import {
  l,
  t,
  u as u2
} from "./chunk-FLNUAFOO.js";
import "./chunk-OYBI3GFG.js";
import "./chunk-KWGDYBY5.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-HGNFIVPY.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-T6SJ457A.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-A7BPJYHN.js";
import "./chunk-W5EVP3CM.js";
import "./chunk-V4VVCJGU.js";
import "./chunk-DK2YM2IG.js";
import "./chunk-H6BWPWXH.js";
import {
  u
} from "./chunk-HLZH52F6.js";
import "./chunk-7EZH3JAM.js";
import "./chunk-VCFT2RFZ.js";
import "./chunk-4V776ICJ.js";
import "./chunk-F6XZYXKM.js";
import "./chunk-ZKGNDXUQ.js";
import {
  L
} from "./chunk-NGAI3WTZ.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-EM42ND2E.js";
import "./chunk-NTFCNJJY.js";
import "./chunk-MXBCSABZ.js";
import {
  Y as Y2
} from "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import {
  H,
  Y
} from "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-PXICZPXV.js";
import "./chunk-HY6H36LC.js";
import "./chunk-WRETNREX.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import {
  N
} from "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=GridSnappingEngine-ELHWNGZ2.js.map
