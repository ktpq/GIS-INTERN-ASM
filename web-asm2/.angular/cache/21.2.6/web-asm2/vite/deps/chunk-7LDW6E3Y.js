import {
  M,
  q,
  v
} from "./chunk-4256WDOP.js";
import {
  a as a2
} from "./chunk-52ORZUGM.js";
import {
  Al,
  Cc,
  Dc,
  Hu,
  I,
  Ps,
  Rg,
  Vc,
  Wl,
  Wo,
  Xl,
  cs,
  ds,
  mg,
  qh,
  ql
} from "./chunk-XQTWTSU3.js";
import {
  Lt,
  Pm,
  X,
  mr
} from "./chunk-MKUY72VH.js";
import {
  x as x2
} from "./chunk-GAJDBZ5G.js";
import {
  n as n2
} from "./chunk-FZMMQS4X.js";
import {
  $t,
  P,
  Pt,
  a,
  b,
  ct,
  h,
  mi,
  n,
  w,
  x2 as x
} from "./chunk-U3KYTZUD.js";
import {
  t
} from "./chunk-GBACRMDK.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/chunks/OperatorShapePreservingDensify.js
var o = class {
  getOperatorType() {
    return 10317;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, r, t2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, o2, n3, s, u) {
    return new a2(e, t2, 4, o2, n3, s, u);
  }
  execute(r, o2, n3, s, u, a3) {
    const c = new t([r]), m = this.executeMany(c, o2, n3, s, u, a3).next();
    return m || b("null output"), m;
  }
};

// node_modules/@arcgis/core/chunks/GeodeticDistanceCalculator-Ce-woMPw.js
function Y() {
  return new n2();
}
var k = class {
  [Symbol.dispose]() {
    this.m_peR1.destroy(), this.m_peR2.destroy(), this.m_peR3.destroy(), this.m_peR1 = null, this.m_peR2 = null, this.m_peR3 = null;
  }
  constructor(t2, e, i) {
    this.m_peR1 = new Cc(), this.m_peR2 = new Cc(), this.m_peR3 = new Cc(), void 0 !== t2 ? this.reset(t2, e, i) : this.reset(1, 0, 1);
  }
  reset(t2, e, i) {
    this.m_a = t2, this.m_e2 = e, this.m_b = this.m_a * Math.sqrt(1 - this.m_e2), this.m_unitToDegree = i, this.m_unitToRad = 0.017453292519943295 * i, this.m_u180 = 180 / this.m_unitToDegree, this.m_u360 = 360 / this.m_unitToDegree;
  }
  calculateBbox(t2, e, i, s) {
    const n3 = this.m_peR1, o2 = this.m_peR2, a3 = this.m_peR3;
    Dc.geodeticDistance(this.m_a, this.m_e2, t2 * this.m_unitToRad, e * this.m_unitToRad, i * this.m_unitToRad, s * this.m_unitToRad, a3, n3, o2, 0);
    const m = Math.cos(n3.val), r = Math.cos(o2.val + 3.141592653589793), u = e * this.m_unitToRad, h2 = Vc.phiToEta(this.m_e2, u), c = Math.sin(n3.val) * Math.cos(h2);
    let l = e;
    if (m * r < 0) {
      const t3 = m < 0 ? -1 : 1, e2 = Math.acos(Math.abs(c)) * t3;
      l = Vc.etaToPhi(this.m_e2, e2) / this.m_unitToRad;
    }
    let p = ct((i - t2) * this.m_unitToRad, 2 * Math.PI);
    Math.abs(p) > Math.PI && (p = p > 0 ? p - 2 * Math.PI : p + 2 * Math.PI), p /= this.m_unitToRad, i = t2 + p;
    const d = Y();
    return d.xmin = Math.min(t2, i), d.xmax = Math.max(t2, i), d.ymin = Math.min(e, s), d.ymin = Math.min(d.ymin, l), d.ymax = Math.max(e, s), d.ymax = Math.max(d.ymax, l), d;
  }
  minDistanceGeodesic(t2, e) {
    const i = O(t2), s = O(e);
    if (i && s) return this.lowerDistanceGeodetic_(t2.xmin, t2.ymin, e.xmin, e.ymin);
    const n3 = this.normalizeGeodesic_(e, t2);
    return U(t2, n3) ? t2.ymin >= n3.ymax ? this.minDistanceGeodesicUpDown_(t2, n3) : n3.ymin >= t2.ymax ? this.minDistanceGeodesicUpDown_(n3, t2) : t2.xmin > n3.xmax ? this.minDistanceGeodesicLeftRight_(n3, t2) : this.minDistanceGeodesicLeftRight_(t2, n3) : 0;
  }
  normalizeGeodesic_(t2, e) {
    const i = t2.clone(), s = t2.clone();
    let n3 = V(i, e);
    if (0 === n3) return i;
    for (; s.xmax > e.xmin; ) {
      s.xmin -= this.m_u360, s.xmax -= this.m_u360;
      const t3 = V(s, e);
      if (t3 < n3 && (i.assign(s), n3 = t3, 0 === n3)) return i;
    }
    for (s.assign(t2); s.xmin < e.xmax; ) {
      s.xmin += this.m_u360, s.xmax += this.m_u360;
      const t3 = V(s, e);
      if (t3 < n3 && (i.assign(s), n3 = t3, 0 === n3)) return i;
    }
    return i;
  }
  lowerDistanceGeodetic_(t2, e, i, s) {
    const n3 = this.m_peR1;
    {
      const o2 = this.m_b * this.m_b / this.m_a, a3 = Vc.phiToPhig(this.m_e2, this.m_unitToRad * e), m = Vc.phiToPhig(this.m_e2, this.m_unitToRad * s);
      Dc.geodeticDistance(o2, 0, this.m_unitToRad * t2, a3, this.m_unitToRad * i, m, n3, null, null, 0);
    }
    return n3.val;
  }
  minDistanceGeodesicUpDown_(t2, e) {
    if (e.xmin <= t2.xmin ? e.xmax >= t2.xmin : t2.xmax >= e.xmin) return this.lowerDistanceGeodetic_(0, t2.ymin, 0, e.ymax);
    if (e.xmin > t2.xmax) {
      const i = this.lowerDistanceGeodeticSegMeridional_(t2.xmax, t2.ymin, t2.ymax, e.xmin, e.ymin, e.ymax);
      if (e.xmax - t2.xmin < this.m_u180) return i;
      const s = this.lowerDistanceGeodeticSegMeridional_(t2.xmin, t2.ymin, t2.ymax, e.xmax, e.ymin, e.ymax);
      return Math.min(i, s);
    }
    {
      const i = this.lowerDistanceGeodeticSegMeridional_(t2.xmin, t2.ymin, t2.ymax, e.xmax, e.ymin, e.ymax);
      if (t2.xmax - e.xmin < this.m_u180) return i;
      const s = this.lowerDistanceGeodeticSegMeridional_(t2.xmax, t2.ymin, t2.ymax, e.xmin, e.ymin, e.ymax);
      return Math.min(i, s);
    }
  }
  minDistanceGeodesicLeftRight_(t2, e) {
    let i = Math.abs(t2.xmax - e.xmin);
    for (; i > this.m_u180; ) i -= this.m_u360;
    let s = Math.abs(t2.xmin - e.xmax);
    for (; s > this.m_u180; ) s -= this.m_u360;
    return Math.abs(i) <= Math.abs(s) ? this.minDistanceGeodesicLeftRightNormalized_(t2, e) : this.minDistanceGeodesicLeftRightNormalized_(e, t2);
  }
  minDistanceGeodesicLeftRightNormalized_(t2, e) {
    let i, s;
    return i = this.lowerDistanceGeodetic_(t2.xmax, t2.ymin, e.xmin, e.ymin), t2.ymin >= e.ymin && t2.ymin <= e.ymax && (s = this.lowerDistanceGeodeticPtMeridional_(t2.xmax, t2.ymin, e.xmin, e.ymin, e.ymax), i = Math.min(i, s)), e.ymin >= t2.ymin && e.ymin <= t2.ymax && (s = this.lowerDistanceGeodeticPtMeridional_(e.xmin, e.ymin, t2.xmax, t2.ymin, t2.ymax), i = Math.min(i, s)), s = this.lowerDistanceGeodetic_(t2.xmax, t2.ymax, e.xmin, e.ymax), i = Math.min(i, s), t2.ymax >= e.ymin && t2.ymax <= e.ymax && (s = this.lowerDistanceGeodeticPtMeridional_(t2.xmax, t2.ymax, e.xmin, e.ymin, e.ymax), i = Math.min(i, s)), e.ymax >= t2.ymin && e.ymax <= t2.ymax && (s = this.lowerDistanceGeodeticPtMeridional_(e.xmin, e.ymax, t2.xmax, t2.ymin, t2.ymax), i = Math.min(i, s)), i;
  }
  lowerDistanceGeodeticSegMeridional_(t2, e, i, s, n3, o2) {
    let a3 = this.lowerDistanceGeodeticPtMeridional_(t2, e, s, n3, o2);
    const m = this.lowerDistanceGeodeticPtMeridional_(t2, i, s, n3, o2);
    let r = this.lowerDistanceGeodeticPtMeridional_(s, n3, t2, e, i);
    const u = this.lowerDistanceGeodeticPtMeridional_(s, o2, t2, e, i);
    return a3 = Math.min(a3, m), r = Math.min(r, u), Math.min(a3, r);
  }
  lowerDistanceGeodeticPtMeridional_(t2, e, i, s, n3) {
    const o2 = this.m_b * this.m_b / this.m_a, a3 = Vc.phiToPhig(this.m_e2, this.m_unitToRad * e), m = Vc.phiToPhig(this.m_e2, this.m_unitToRad * s), r = Vc.phiToPhig(this.m_e2, this.m_unitToRad * n3), u = this.m_peR1, h2 = this.m_peR2;
    Dc.geodeticDistance(o2, 0, this.m_unitToRad * i, m, this.m_unitToRad * t2, a3, u, null, null, 0), Dc.geodeticDistance(o2, 0, this.m_unitToRad * i, r, this.m_unitToRad * t2, a3, h2, null, null, 0);
    const c = ds(1, 0, new mi(this.m_unitToRad * t2, a3)), l = ds(1, 0, new mi(this.m_unitToRad * i, m)), d = ds(1, 0, new mi(this.m_unitToRad * i, r));
    let g = new X();
    g.setCrossProductVector(l, d);
    const x3 = l.dotProduct(d);
    if (g.length() < 1568e-13) return x3 >= 0 ? Math.min(u.val, h2.val) : 0;
    g = g.getUnitVector();
    let y = new X();
    if (y.setCrossProductVector(g, c), y.length() < 1568e-13) {
      return Math.min(u.val, h2.val) - 1e-5 * o2;
    }
    y = y.getUnitVector();
    let P2 = c.sub(g.mul(c.dotProduct(g)));
    {
      const e2 = new X();
      e2.setCrossProductVector(l, P2);
      const i2 = new X();
      i2.setCrossProductVector(P2, d);
      let s2 = g.dotProduct(e2) > 0 && g.dotProduct(i2) > 0;
      if (s2 || (P2.negateThis(), e2.setCrossProductVector(l, P2), i2.setCrossProductVector(P2, d), s2 = g.dotProduct(e2) > 0 && g.dotProduct(i2) > 0), s2) {
        P2 = P2.getUnitVector();
        const e3 = Ps(1, 0, P2), i3 = this.m_peR3;
        Dc.geodeticDistance(o2, 0, this.m_unitToRad * t2, a3, e3.x, e3.y, i3, null, null, 0);
        const s3 = Math.min(u.val, h2.val);
        return Math.min(s3, i3.val);
      }
    }
    return Math.min(u.val, h2.val);
  }
};
function O(t2) {
  return t2.xmin === t2.xmax && t2.ymin === t2.ymax;
}
function U(t2, e) {
  return e.xmax < t2.xmin || e.xmin > t2.xmax || e.ymax < t2.ymin || e.ymin > t2.ymax;
}
function V(t2, e) {
  let i, s = 0;
  return i = t2.xmin - e.xmax, i > s && (s = i), i = e.xmin - t2.xmax, i > s && (s = i), s;
}
var L = class {
};
function j(t2) {
  return { outPoint: void 0 === t2 ? new mi() : t2.clone() };
}
function z(t2, e) {
  t2.outPoint.assign(e.outPoint);
}
function H() {
  return new n2();
}
var W = class {
  constructor(t2, e, i, s, n3 = 0, o2 = 4) {
    this.m_ptDistFrom = new mi(), this.m_segStartPt = new mi(), this.m_segEndPt = new mi(), this.m_geodeticLength = new Cc(), this.m_az12 = new Cc(), this.m_minGeodeticDist = new Cc(), this.m_segStartPt3d = new X(), this.m_segEndPt3d = new X(), this.m_sr = s, this.m_distCurveType = n3, this.m_segCurveType = o2, this.m_inputGCS = this.m_sr.getGCS(), this.m_rpu = this.m_inputGCS.getUnit().getUnitToBaseFactor(), this.m_bIsPannablePcs = 2 === this.m_sr.getCoordinateSystemType() && this.m_sr.isPannable();
    const a3 = Hu();
    this.m_inputGCS.querySpheroidData(a3), this.m_a = a3.majorSemiAxis, this.m_eSquared = a3.e2, this.setPointDistFrom(t2), this.setSegmentEndPoints(e, i);
  }
  setSegmentEndPoints(t2, e) {
    this.m_segStartPt.assign(t2), this.m_segEndPt.assign(e), this.m_bIsPannablePcs || (this.m_segStartPt.mulThis(this.m_rpu), this.m_segEndPt.mulThis(this.m_rpu)), 2 === this.m_segCurveType && (this.m_segStartPt3d.assign(ds(this.m_a, this.m_eSquared, this.m_segStartPt)), this.m_segEndPt3d.assign(ds(this.m_a, this.m_eSquared, this.m_segEndPt))), this.calculateAndUpdateSegmentLength();
  }
  setPointDistFrom(t2) {
    this.m_ptDistFrom.assign(t2), this.m_ptDistFrom.scale(this.m_rpu);
  }
  setSegmentCurveType(t2) {
    this.m_segCurveType = t2;
  }
  setDistanceCurveType(t2) {
    this.m_distCurveType = t2;
  }
  makeFunctor() {
    return (i) => {
      let s;
      switch (this.m_segCurveType) {
        case 0:
        case 1:
        case 3: {
          const o2 = { stack: [], error: void 0, hasError: false };
          try {
            const e = __addDisposableResource(o2, new Cc(), false), n3 = __addDisposableResource(o2, new Cc(), false);
            Dc.geodeticCoordinate(this.m_a, this.m_eSquared, this.m_segStartPt.x, this.m_segStartPt.y, this.m_geodeticLength.val * i, this.m_az12.val, e, n3, this.m_segCurveType), s = new mi(e.val, n3.val);
            break;
          } catch (n3) {
            o2.error = n3, o2.hasError = true;
          } finally {
            __disposeResources(o2);
          }
        }
        case 2: {
          const t2 = X.lerp(this.m_segStartPt3d, this.m_segEndPt3d, i);
          s = Ps(this.m_a, this.m_eSquared, t2);
          break;
        }
        case 4:
          s = mi.lerp(this.m_segStartPt, this.m_segEndPt, i), this.m_bIsPannablePcs && (mg(this.m_sr, 0, [s], 1), s.mulThis(this.m_rpu));
          break;
        default:
          b("Invalid curve type");
      }
      return Dc.geodeticDistance(this.m_a, this.m_eSquared, this.m_ptDistFrom.x, this.m_ptDistFrom.y, s.x, s.y, this.m_minGeodeticDist, null, null, this.m_distCurveType), this.m_minGeodeticDist.val;
    };
  }
  calculateAndUpdateSegmentLength() {
    switch (this.m_segCurveType) {
      case 0:
      case 2:
      case 1:
      case 3:
        Dc.geodeticDistance(this.m_a, this.m_eSquared, this.m_segStartPt.x, this.m_segStartPt.y, this.m_segEndPt.x, this.m_segEndPt.y, this.m_geodeticLength, this.m_az12, null, this.m_segCurveType);
        break;
      case 4:
        this.m_geodeticLength.val = mi.distance(this.m_segStartPt, this.m_segEndPt);
        break;
      default:
        b("Invalid curve type");
    }
  }
  [Symbol.dispose]() {
    this.m_geodeticLength[Symbol.dispose](), this.m_az12[Symbol.dispose](), this.m_minGeodeticDist[Symbol.dispose]();
  }
};
function Z() {
  return new L();
}
var $ = class {
  [Symbol.dispose]() {
    this.m_envHelper[Symbol.dispose]();
  }
  constructor(t2, e, i, s, n3) {
    this.m_boxGeomA = H(), this.m_boxGeomB = H(), this.m_envGeomA = new n2(), this.m_envGeomB = new n2(), this.m_progressCounter = 0, this.m_transformPCS2GCS = null, this.m_segmentBoxesA = /* @__PURE__ */ new Map(), this.m_segmentBoxesB = /* @__PURE__ */ new Map(), this.m_boundaryPtsA = [], this.m_boundaryPtsB = [], this.m_scaleToRadians = new x2(), this.m_scaleToDegrees = new x2(), this.m_inputSR = t2, this.m_distCurveType = e, this.m_progressTracker = i, this.m_maxDistance = s, this.m_maxDeviation = n3, this.m_inputGCS = t2.getGCS(), this.m_peGeogcs = this.m_inputGCS.getPECoordSys(), this.m_tolerance = 0;
    const o2 = Hu();
    this.m_inputGCS.querySpheroidData(o2), this.m_a = o2.majorSemiAxis, this.m_eSquared = o2.e2, this.m_rpu = this.m_inputGCS.getUnit().getUnitToBaseFactor(), this.m_envHelper = new k(this.m_a, this.m_eSquared, 1), 4 === this.m_distCurveType && (this.m_distCurveType = 0), this.m_boxGeomA.setEmpty(), this.m_boxGeomB.setEmpty(), this.m_envGeomA.setEmpty(), this.m_envGeomB.setEmpty(), this.m_bIsPannablePcs = 2 === this.m_inputSR.getCoordinateSystemType() && this.m_inputSR.isPannable();
  }
  progress(t2 = false) {
  }
  calculate(t2, e, i, s) {
    const n3 = j(), o2 = j();
    if (t2.queryEnvelope(this.m_envGeomA), e.queryEnvelope(this.m_envGeomB), this.checkGeometriesIntersect(t2, e, n3, o2)) return i && z(i, n3), s && z(s, o2), 0;
    const a3 = this.prepareGeometry(t2);
    if (a3.isEmpty()) return Number.NaN;
    const m = this.prepareGeometry(e);
    if (m.isEmpty()) return Number.NaN;
    this.m_tolerance = this.computeTolerance(a3, m);
    const r = this._ExecuteBruteForce(a3, m, n3, o2);
    return r >= this.m_maxDistance ? Number.NaN : (i && (this.prepareOutput(n3), z(i, n3)), s && (this.prepareOutput(o2), z(s, o2)), r);
  }
  createDistanceFunctor(t2, e, i) {
    const s = new W(t2, e, i, this.m_inputSR, this.m_distCurveType);
    return this.m_bIsPannablePcs || 1 === this.m_inputSR.getCoordinateSystemType() || s.setSegmentCurveType(2), s;
  }
  _NormalizeAndProject(t2) {
    if (this.m_inputSR.isPannable() && (t2 = new qh().foldInto360Range(t2, this.m_inputSR)), 2 === this.m_inputSR.getCoordinateSystemType()) {
      const e = Rg(this.m_inputSR, this.m_inputGCS, null);
      t2 = new qh().execute(t2, e, this.m_progressTracker);
    }
    return t2;
  }
  _ExecuteBruteForce(t2, e, n3, o2) {
    switch (t2.getGeometryType()) {
      case a.enumPoint:
        return this.calculateDistanceGeodeticPointGeometry(t2, e, n3, o2);
      case a.enumMultiPoint:
        return this.calculateDistanceGeodeticMultipointGeometry(t2, e, n3, o2);
      case a.enumPolyline:
      case a.enumPolygon:
      case a.enumEnvelope:
        return this.calculateDistanceGeodeticMultipathGeometry(t2, e, n3, o2);
      default:
        P("");
    }
  }
  calculateDistanceGeodeticPointGeometry(t2, e, n3, o2) {
    switch (e.getGeometryType()) {
      case a.enumPoint:
        return this.calculateDistanceGeodeticPointPoint(t2, e, n3, o2);
      case a.enumMultiPoint:
        return this.calculateDistanceGeodeticPointMultipoint(t2, e, n3, o2);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.calculateDistanceGeodeticPointMultipath(t2, e, n3, o2);
      default:
        P("");
    }
  }
  calculateDistanceGeodeticPointPoint(i, s, n3, o2) {
    const a3 = { stack: [], error: void 0, hasError: false };
    try {
      const e = i.getXY();
      e.scale(this.m_rpu);
      const m = s.getXY();
      m.scale(this.m_rpu), n3.outPoint.assign(e), o2.outPoint.assign(m);
      const r = __addDisposableResource(a3, new Cc(), false);
      return Dc.geodeticDistance(this.m_a, this.m_eSquared, e.x, e.y, m.x, m.y, r, null, null, this.m_distCurveType), r.val;
    } catch (m) {
      a3.error = m, a3.hasError = true;
    } finally {
      __disposeResources(a3);
    }
  }
  calculateDistanceGeodeticPointMultipoint(i, s, n3, o2) {
    const a3 = { stack: [], error: void 0, hasError: false };
    try {
      this.computeEnvelopesAndBoxes(i, s);
      const e = this.estimateMinimumDistance(n3, o2);
      let m = e < this.m_maxDistance ? e : this.m_maxDistance;
      const r = i.getXY();
      r.scale(this.m_rpu), n3.outPoint.assign(r);
      const u = ds(this.m_a, this.m_eSquared, r), h2 = new mi(), c = s.getImpl(), d = __addDisposableResource(a3, new Cc(), false), g = c.getPointCount();
      for (let t2 = 0; t2 < g; ++t2) {
        c.queryXY(t2, h2), h2.scale(this.m_rpu);
        const e2 = ds(this.m_a, this.m_eSquared, h2);
        if (!(X.distance(u, e2) > m) && (!(this.m_envHelper.minDistanceGeodesic(this.m_boxGeomA, this.m_boxGeomB) > m) && (Dc.geodeticDistance(this.m_a, this.m_eSquared, r.x, r.y, h2.x, h2.y, d, null, null, this.m_distCurveType), d.val < m && (m = d.val, o2.outPoint = h2, 0 === m)))) return m;
      }
      return m === this.m_maxDistance ? Number.POSITIVE_INFINITY : m;
    } catch (m) {
      a3.error = m, a3.hasError = true;
    } finally {
      __disposeResources(a3);
    }
  }
  calculateDistanceGeodeticPointMultipath(i, s, o2, a3) {
    const m = { stack: [], error: void 0, hasError: false };
    try {
      const e = new mi(), r = new mi();
      e.assign(i.getXY()), r.assign(i.getXY()), o2.outPoint.assign(r.mul(this.m_rpu)), this.m_bIsPannablePcs && Wl(this.m_inputSR, [e], 1, false), this.computeEnvelopesAndBoxes(i, s);
      const u = this.estimateMinimumDistance(o2, a3);
      let h2 = u < this.m_maxDistance ? u : this.m_maxDistance;
      const c = s.getImpl(), l = new mi(0, 0), _ = new mi(0, 0), p = [1], g = this.canUseSpatialTree(i, s), x3 = Z();
      g && this.buildSpatialTree(x3, s);
      const y = H();
      y.setCoords({ xmin: r.x, ymin: r.y, xmax: r.x, ymax: r.y });
      const P2 = __addDisposableResource(m, this.createDistanceFunctor(r, l, _), false), S = c.querySegmentIterator();
      if (S.stripAttributes(), g) n(0);
      else for (; S.nextPath(); ) for (; S.hasNextSegment(); ) {
        const t2 = S.nextSegment(), i2 = this.findOrComputeBoxSegment(S.getStartPointIndex(), t2, this.m_segmentBoxesB);
        if (this.m_envHelper.minDistanceGeodesic(y, i2) > h2) continue;
        const s2 = this.calculateDistanceGeodeticPointSegment(e, r, t2, p, P2);
        if (s2.second < h2 && (this.updateOutputSegment(a3, t2, s2.first), h2 = s2.second, 0 === h2)) return 0;
      }
      return h2 === this.m_maxDistance ? Number.POSITIVE_INFINITY : h2;
    } catch (r) {
      m.error = r, m.hasError = true;
    } finally {
      __disposeResources(m);
    }
  }
  calculateDistanceGeodeticMultipointGeometry(t2, e, n3, o2) {
    switch (e.getGeometryType()) {
      case a.enumPoint:
        return this.calculateDistanceGeodeticPointMultipoint(e, t2, o2, n3);
      case a.enumMultiPoint:
        return this.calculateDistanceGeodeticMultipointMultipoint(t2, e, n3, o2);
      case a.enumPolyline:
      case a.enumPolygon:
      case a.enumEnvelope:
        return this.calculateDistanceGeodeticMultipointMultipath(t2, e, n3, o2);
      default:
        P("");
    }
  }
  calculateDistanceGeodeticMultipointMultipoint(i, s, n3, o2) {
    const a3 = { stack: [], error: void 0, hasError: false };
    try {
      const e = __addDisposableResource(a3, new Cc(), false);
      this.computeEnvelopesAndBoxes(i, s);
      const m = this.estimateMinimumDistance(n3, o2);
      let r = m < this.m_maxDistance ? m : this.m_maxDistance;
      const u = new mi(), h2 = new mi(), c = i.getImpl(), d = s.getImpl(), g = H(), x3 = c.getPointCount(), y = d.getPointCount();
      for (let t2 = 0; t2 < x3; ++t2) {
        if (u.assign(c.getXY(t2)), g.setCoords({ xmin: u.x, ymin: u.y, xmax: u.x, ymax: u.y }), this.m_envHelper.minDistanceGeodesic(g, this.m_boxGeomB) > r) continue;
        u.scale(this.m_rpu);
        const i2 = ds(this.m_a, this.m_eSquared, u);
        for (let t3 = 0; t3 < y; ++t3) {
          h2.assign(d.getXY(t3)), h2.scale(this.m_rpu);
          const s2 = ds(this.m_a, this.m_eSquared, h2);
          if (!(X.distance(i2, s2) >= r) && (Dc.geodeticDistance(this.m_a, this.m_eSquared, u.x, u.y, h2.x, h2.y, e, null, null, this.m_distCurveType), e.val < r && (n3.outPoint.assign(u), o2.outPoint.assign(h2), r = e.val, 0 === r))) return r;
        }
      }
      return r === this.m_maxDistance ? Number.POSITIVE_INFINITY : r;
    } catch (m) {
      a3.error = m, a3.hasError = true;
    } finally {
      __disposeResources(a3);
    }
  }
  calculateDistanceGeodeticMultipointMultipath(i, s, o2, a3) {
    const m = { stack: [], error: void 0, hasError: false };
    try {
      const e = s.getImpl().querySegmentIterator();
      e.stripAttributes(), this.computeEnvelopesAndBoxes(i, s);
      const r = this.estimateMinimumDistance(o2, a3);
      let u = r < this.m_maxDistance ? r : this.m_maxDistance;
      const h2 = new mi(), c = new mi(0, 0), l = new mi(0, 0), _ = new mi(0, 0), p = [0], g = H(), x3 = __addDisposableResource(m, this.createDistanceFunctor(c, l, _), false), y = Z(), P2 = this.canUseSpatialTree(i, s);
      P2 && this.buildSpatialTree(y, s);
      const S = i.getPointCount();
      for (let t2 = 0; t2 < S; ++t2) if (h2.assign(i.getXY(t2)), c.assign(i.getXY(t2)), this.m_bIsPannablePcs && Wl(this.m_inputSR, [h2], 1, false), g.setCoords({ xmin: c.x, ymin: c.y, xmax: c.x, ymax: c.y }), !(this.m_envHelper.minDistanceGeodesic(g, this.m_boxGeomB) > u)) if (x3.setPointDistFrom(c), P2) n(0);
      else {
        for (; e.nextPath(); ) for (; e.hasNextSegment(); ) {
          const t3 = e.nextSegment();
          if (this.m_envHelper.minDistanceGeodesic(g, this.findOrComputeBoxSegment(e.getStartPointIndex(), t3, this.m_segmentBoxesB)) > u) continue;
          const i2 = this.calculateDistanceGeodeticPointSegment(h2, c, t3, p, x3);
          if (i2.second < u && (o2.outPoint.assign(c.mul(this.m_rpu)), this.updateOutputSegment(a3, t3, i2.first), u = i2.second, 0 === u)) return 0;
        }
        e.resetToFirstPath();
      }
      return u === this.m_maxDistance ? Number.POSITIVE_INFINITY : u;
    } catch (r) {
      m.error = r, m.hasError = true;
    } finally {
      __disposeResources(m);
    }
  }
  calculateDistanceGeodeticMultipathGeometry(t2, e, n3, o2) {
    switch (e.getGeometryType()) {
      case a.enumPoint:
        return this.calculateDistanceGeodeticPointMultipath(e, t2, o2, n3);
      case a.enumMultiPoint:
        return this.calculateDistanceGeodeticMultipointMultipath(e, t2, o2, n3);
      case a.enumPolyline:
      case a.enumPolygon:
      case a.enumEnvelope:
        return this.calculateDistanceGeodeticMultipathMultipath(t2, e, n3, o2);
      default:
        P("");
    }
  }
  calculateDistanceGeodeticMultipathMultipath(t2, e, i, s) {
    const n3 = [t2], o2 = [e], a3 = this.swapGeometries(n3, o2), m = n3[0], r = o2[0];
    this.computeEnvelopesAndBoxes(n3[0], o2[0]);
    const u = this.estimateMinimumDistance(i, s), h2 = this.calculateDistanceGeodeticMultipathMultipath_(m, r, i, s, u);
    return a3 && (s.outPoint = Pt(i.outPoint, i.outPoint = s.outPoint)), h2;
  }
  calculateDistanceGeodeticMultipathMultipath_(i, s, o2, a3, m = Number.MAX_VALUE) {
    const u = { stack: [], error: void 0, hasError: false };
    try {
      let e = m;
      const h2 = new mi(0, 0), c = new mi(), l = new mi(0, 0), _ = new mi(), p = new mi(0, 0), d = new mi(), y = new mi(), P2 = new mi(), S = [new mi()], f = [0], D = [0], G = H(), v2 = H(), T = __addDisposableResource(u, this.createDistanceFunctor(p, h2, l), false), b2 = Z(), w2 = this.canUseSpatialTree(i, s);
      w2 && this.buildSpatialTree(b2, s);
      const E = s.querySegmentIterator();
      E.stripAttributes();
      const R = new Pm(), I2 = M(i);
      for (let t2 = 0; t2 < I2.length; ++t2) {
        const s2 = I2[t2];
        i.getSegmentBuffer(s2, R, true);
        const m2 = R.get();
        if (G.assign(this.findOrComputeBoxSegment(s2, m2, this.m_segmentBoxesA)), w2) n(0);
        else {
          if (p.assign(m2.getStartXY()), d.assign(m2.getStartXY()), y.assign(m2.getEndXY()), P2.assign(m2.getEndXY()), this.m_bIsPannablePcs && (mg(this.m_inputSR, 0, [d], 1), mg(this.m_inputSR, 0, [P2], 1)), this.m_envHelper.minDistanceGeodesic(G, this.m_boxGeomB) > e) continue;
          for (; E.nextPath(); ) {
            for (; E.hasNextSegment(); ) {
              const t3 = E.nextSegment();
              if (h2.assign(t3.getStartXY()), c.assign(t3.getStartXY()), l.assign(t3.getEndXY()), _.assign(t3.getEndXY()), m2.intersect(t3, S, f, D, this.m_tolerance)) return this.updateOutputSegment(o2, m2, f[0]), this.updateOutputSegment(a3, t3, D[0]), 0;
              if (this.m_bIsPannablePcs && (mg(this.m_inputSR, 0, [c], 1), mg(this.m_inputSR, 0, [_], 1)), v2.assign(this.findOrComputeBoxPoint(E.getStartPointIndex(), c, _, this.m_segmentBoxesB)), this.m_envHelper.minDistanceGeodesic(G, v2) > e) continue;
              T.setSegmentEndPoints(h2, l), T.setPointDistFrom(d);
              let i2 = cs(T.makeFunctor(), 0, 1, 1e-10);
              if (i2.second < e && (o2.outPoint.assign(d.mul(this.m_rpu)), this.updateOutputSegment(a3, t3, i2.first), e = i2.second, 0 === e)) break;
              if (T.setPointDistFrom(P2), i2 = cs(T.makeFunctor(), 0, 1, 1e-10), i2.second < e && (o2.outPoint.assign(P2.mul(this.m_rpu)), this.updateOutputSegment(a3, t3, i2.first), e = i2.second, 0 === e)) break;
              if (T.setSegmentEndPoints(p, y), T.setPointDistFrom(c), i2 = cs(T.makeFunctor(), 0, 1, 1e-10), i2.second < e && (this.updateOutputSegment(o2, m2, i2.first), a3.outPoint.assign(c.mul(this.m_rpu)), e = i2.second, 0 === e)) break;
              if (T.setPointDistFrom(_), i2 = cs(T.makeFunctor(), 0, 1, 1e-10), i2.second < e && (this.updateOutputSegment(o2, m2, i2.first), a3.outPoint.assign(_.mul(this.m_rpu)), e = i2.second, 0 === e)) break;
            }
            if (0 === e) return 0;
          }
          E.resetToFirstPath();
        }
      }
      return e === this.m_maxDistance ? Number.POSITIVE_INFINITY : e;
    } catch (h2) {
      u.error = h2, u.hasError = true;
    } finally {
      __disposeResources(u);
    }
  }
  calculateDistanceGeodeticPointSegment(t2, e, i, s, n3) {
    const o2 = i.getStartXY(), a3 = i.getEndXY();
    return i.intersectPoint(t2, s, this.m_tolerance) ? $t(s[0], 0) : (n3.setPointDistFrom(e), n3.setSegmentEndPoints(o2, a3), cs(n3.makeFunctor(), 0, 1, 1e-10));
  }
  prepareGeometry(t2) {
    let e = t2.clone();
    const i = t2.getGeometryType();
    if (i === a.enumPoint || i === a.enumMultiPoint) return this._NormalizeAndProject(e);
    if (i === a.enumEnvelope && (e = this.envelopeToPolygon(e)), this.m_inputSR.isPannable()) return this.prepareGeometryPannable(e, 4);
    if (2 === this.m_inputSR.getCoordinateSystemType()) {
      if (e = Xl(e, this.m_inputSR, 0, null), e.isEmpty()) return e;
      e = new o().execute(e, this.m_inputSR, 5e4, this.m_maxDeviation / 2, 0, null);
      const t3 = this.m_inputSR.getSRToGCSTransform();
      return new qh().execute(e, t3, this.m_progressTracker);
    }
    const n3 = new n2();
    e.queryLooseEnvelope(n3);
    const o2 = this.m_inputSR.getPannableExtent();
    if (n3.ymin < o2.ymin || n3.ymax > o2.ymax) {
      const t3 = new n2(n3.xmin - 1, o2.ymin, n3.xmax + 1, o2.ymax);
      if (e = new I().execute(e, t3, this.m_inputSR, this.m_progressTracker), e.isEmpty()) return e;
    }
    return n3.width() > 2 * o2.width() ? (e = ql(e, -2 * o2.width(), 2 * o2.width(), this.m_inputSR, true, 0, true, this.m_progressTracker), e) : e;
  }
  prepareGeometryPannable(t2, e) {
    const i = new n2();
    t2.queryEnvelope(i);
    const s = this.m_inputSR.getPannableExtent();
    if (s.containsEnvelope(i)) return t2;
    const n3 = new x();
    s.queryIntervalX(n3);
    const o2 = new x();
    return i.queryIntervalX(o2), t2 = n3.contains(o2) ? Al(t2, this.m_inputSR) : new qh().foldInto360RangeGeodetic(t2, this.m_inputSR, e);
  }
  prepareOutput(t2) {
    t2.outPoint.scale(1 / this.m_rpu), 2 === this.m_inputSR.getCoordinateSystemType() && Wl(this.m_inputSR, [t2.outPoint], 1, false);
  }
  updateOutputSegment(t2, e, i) {
    e.queryCoord2D(i, t2.outPoint), this.m_bIsPannablePcs && mg(this.m_inputSR, 0, [t2.outPoint], 1), t2.outPoint.mulThis(this.m_rpu);
  }
  computeTolerance(t2, e) {
    t2.queryEnvelope(this.m_envGeomA), e.queryEnvelope(this.m_envGeomB);
    const i = new n2(this.m_envGeomA);
    return i.mergeEnvelope2D(this.m_envGeomB), Lt(null, i);
  }
  envelopeToPolygon(t2) {
    const e = new mr();
    return e.addEnvelope(t2, false), e;
  }
  computeEnvelopesAndBoxes(t2, e) {
    t2.queryEnvelope(this.m_envGeomA), e.queryEnvelope(this.m_envGeomB), this.m_boxGeomA = this.computeBoxGeometry(t2, this.m_boundaryPtsA, this.m_segmentBoxesA), this.m_boxGeomB = this.computeBoxGeometry(e, this.m_boundaryPtsB, this.m_segmentBoxesB);
  }
  computeBoxGeometry(t2, e, i) {
    switch (t2.getGeometryType()) {
      case a.enumPoint:
        return this.computeBoxPoint(t2, e);
      case a.enumMultiPoint:
        return this.computeBoxMultiPoint(t2, e);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.computeBoxMultiPath(t2, e, i);
      default:
        b("Invalid geometry type");
    }
  }
  computeBoxPoint(t2, e) {
    const i = t2.getXY();
    e.length = 0, e.push(i.mul(this.m_rpu));
    const s = H();
    return s.setCoords({ xmin: i.x, ymin: i.y, xmax: i.x, ymax: i.y }), s;
  }
  computeBoxMultiPoint(t2, e) {
    let i = true;
    for (let n3 = 0; n3 < t2.getPointCount(); ++n3) {
      const s2 = t2.getXY(n3);
      if (i) {
        e.length = 0;
        for (let t3 = 0; t3 < 4; ++t3) e.push(s2.clone());
        i = false;
      }
      s2.x < e[0].x && e[0].assign(s2), s2.y > e[1].y && e[1].assign(s2), s2.x > e[2].x && e[2].assign(s2), s2.y < e[3].y && e[3].assign(s2);
    }
    for (let n3 = 0; n3 < e.length; ++n3) e[n3].mulThis(this.m_rpu);
    const s = H();
    return t2.queryEnvelope(s), s;
  }
  computeBoxMultiPath(t2, e, i) {
    let s = true;
    const n3 = H();
    n3.setEmpty();
    const o2 = t2.querySegmentIterator();
    for (o2.stripAttributes(); o2.nextPath(); ) for (; o2.hasNextSegment(); ) {
      const t3 = o2.nextSegment(), a3 = t3.getStartXY(), m = t3.getEndXY();
      if (this.m_bIsPannablePcs && (mg(this.m_inputSR, 0, [a3], 1), mg(this.m_inputSR, 0, [m], 1)), s) {
        for (let t4 = 0; t4 < 4; ++t4) e.push(a3.clone());
        s = false;
      }
      a3.x < e[0].x && e[0].assign(a3), a3.y > e[1].y && e[1].assign(a3), a3.x > e[2].x && e[2].assign(a3), a3.y < e[3].y && e[3].assign(a3), m.x < e[0].x && e[0].assign(m), m.y > e[1].y && e[1].assign(m), m.x > e[2].x && e[2].assign(m), m.y < e[3].y && e[3].assign(m);
      const r = this.findOrComputeBoxPoint(o2.getStartPointIndex(), a3, m, i);
      n3.mergeEnvelope2D(r);
    }
    for (let a3 = 0; a3 < e.length; ++a3) e[a3].mulThis(this.m_rpu);
    return n3;
  }
  findOrComputeBoxSegment(t2, e, i) {
    if (!i.has(t2)) {
      let s = H();
      if (e.queryEnvelope(s), this.m_bIsPannablePcs) {
        const t3 = mi.construct(s.xmin, s.ymin), e2 = mi.construct(s.xmax, s.ymax);
        mg(this.m_inputSR, 0, [t3], 1), mg(this.m_inputSR, 0, [e2], 1), s = this.m_envHelper.calculateBbox(t3.x, t3.y, e2.x, e2.y);
      }
      return i.set(t2, s), s;
    }
    return i.get(t2);
  }
  findOrComputeBoxPoint(t2, e, i, s) {
    if (!s.has(t2)) {
      let n3 = H();
      return n3.setCoords({ xmin: e.x, ymin: e.y, xmax: i.x, ymax: i.y }), this.m_bIsPannablePcs && (n3 = this.m_envHelper.calculateBbox(n3.xmin, n3.ymin, n3.xmax, n3.ymax)), s.set(t2, n3), n3;
    }
    return s.get(t2);
  }
  estimateMinimumDistance(i, s) {
    const n3 = { stack: [], error: void 0, hasError: false };
    try {
      const e = (t2) => ds(this.m_a, this.m_eSquared, t2), o2 = this.m_boundaryPtsA.map(e), a3 = this.m_boundaryPtsB.map(e);
      let m = Number.MAX_VALUE, r = 0, u = 0;
      for (let t2 = 0; t2 < o2.length; ++t2) for (let e2 = 0; e2 < a3.length; ++e2) {
        const i2 = X.distance(o2[t2], a3[e2]);
        i2 < m && (m = i2, r = t2, u = e2);
      }
      i.outPoint.assign(this.m_boundaryPtsA[r]), s.outPoint.assign(this.m_boundaryPtsB[u]);
      const h2 = __addDisposableResource(n3, new Cc(), false);
      return Dc.geodeticDistance(this.m_a, this.m_eSquared, this.m_boundaryPtsA[r].x, this.m_boundaryPtsA[r].y, this.m_boundaryPtsB[u].x, this.m_boundaryPtsB[u].y, h2, null, null, this.m_distCurveType), h2.val;
    } catch (o2) {
      n3.error = o2, n3.hasError = true;
    } finally {
      __disposeResources(n3);
    }
  }
  swapGeometries(t2, e) {
    return w(t2[0]) > w(e[0]) && (e[0] = Pt(t2[0], t2[0] = e[0]), this.m_envGeomB = Pt(this.m_envGeomA, this.m_envGeomA = this.m_envGeomB), true);
  }
  canUseSpatialTree(t2, e) {
    return false;
  }
  checkGeometriesIntersect(t2, e, i, n3) {
    let o2 = t2.getGeometryType(), a3 = e.getGeometryType();
    if (this.m_envGeomA.isIntersecting(this.m_envGeomB)) {
      if (o2 === a.enumPoint && 2 === e.getDimension()) {
        const s = [0], o3 = [t2.getXY()];
        if (Wo(e, o3, 1, this.m_tolerance, s), 0 !== s[0]) return i.outPoint.assign(o3[0]), n3.outPoint.assign(o3[0]), true;
      } else if (a3 === a.enumPoint && 2 === t2.getDimension()) {
        const s = [2], o3 = [e.getXY()];
        if (Wo(t2, o3, 1, this.m_tolerance, s), 0 !== s[0]) return i.outPoint.assign(o3[0]), n3.outPoint.assign(o3[0]), true;
      }
      if (o2 === a.enumMultiPoint && 2 === e.getDimension()) return this.multipointIntersectsArea(t2, e, i, n3);
      if (a3 === a.enumMultiPoint && 2 === t2.getDimension()) return this.multipointIntersectsArea(e, t2, n3, i);
      let r, u, h2 = t2, c = e;
      if (o2 === a.enumEnvelope && (r = this.envelopeToPolygon(t2), h2 = r, o2 = a.enumPolygon), a3 === a.enumEnvelope && (u = this.envelopeToPolygon(e), c = u, a3 = a.enumPolygon), h(o2) && h(a3)) {
        const t3 = h2.querySegmentIterator(), e2 = c.querySegmentIterator(), s = v(), o3 = v();
        if (q(h2, c, t3, e2, s, o3)) return i.outPoint.assign(s.outPoint), n3.outPoint.assign(s.outPoint), true;
      }
    }
    return false;
  }
  multipointIntersectsArea(t2, e, i, s) {
    const n3 = t2.getPointCount();
    for (let o2 = 0; o2 < n3; ++o2) {
      const n4 = [2], a3 = t2.getXY(o2);
      if (Wo(e, [a3], 1, this.m_tolerance, n4), 0 !== n4[0]) return i.outPoint.assign(a3), s.outPoint.assign(a3), true;
    }
    return false;
  }
  getNearestNeighbourVisitor(t2, e, i, s, o2, a3, m) {
    return n(0), {};
  }
  buildSpatialTree(t2, e) {
    n(0);
  }
};

export {
  j,
  W,
  $
};
//# sourceMappingURL=chunk-7LDW6E3Y.js.map
