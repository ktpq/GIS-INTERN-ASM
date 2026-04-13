import {
  n as n2
} from "./chunk-UCHUTHRV.js";
import {
  i
} from "./chunk-YGCOMTPF.js";
import "./chunk-EWB3NJAR.js";
import "./chunk-5R5DKW26.js";
import "./chunk-G6Z7GZKS.js";
import {
  g
} from "./chunk-ZDEYOCQG.js";
import "./chunk-KSCPKQCW.js";
import "./chunk-HIVNEJHE.js";
import {
  f,
  l as l2
} from "./chunk-6EWCUMLH.js";
import {
  l,
  t,
  u as u2
} from "./chunk-VVEITFQJ.js";
import "./chunk-OZ4UTONJ.js";
import "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-JU72IZ4F.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-ZRQNE4ME.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-G4CWCLTJ.js";
import "./chunk-52KYWONX.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-2TISYHLG.js";
import "./chunk-KEB6LZZ5.js";
import "./chunk-UMSS7GXZ.js";
import "./chunk-2M6ICGTQ.js";
import "./chunk-LILFPAOD.js";
import "./chunk-IPN2TOMU.js";
import "./chunk-WAFJ2OD3.js";
import {
  Y as Y2
} from "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-FPTKPNJ2.js";
import "./chunk-USGU6VDK.js";
import "./chunk-ZEZJAXNN.js";
import "./chunk-Q7JGI6PX.js";
import "./chunk-HYDNVC4V.js";
import "./chunk-RE2NBV4F.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import {
  H,
  Y
} from "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-L244Y4DX.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-D4W5U2I5.js";
import {
  u
} from "./chunk-ZPD3CEEC.js";
import {
  L
} from "./chunk-PC2SGWGS.js";
import "./chunk-GGPUIFVP.js";
import "./chunk-EH727TX6.js";
import "./chunk-QWYKLNNR.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-OOSRFM7N.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-QWNB5I7T.js";
import {
  s
} from "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import {
  N
} from "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=GridSnappingEngine-NMT4KGSD.js.map
