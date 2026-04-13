import {
  P as P2
} from "./chunk-JZVSUVFV.js";
import {
  i
} from "./chunk-PBNQPJNE.js";
import {
  o
} from "./chunk-F3EUMCMF.js";
import {
  Eh,
  Ma,
  al
} from "./chunk-XQTWTSU3.js";
import {
  Mt,
  Qs,
  Zh,
  br,
  bt,
  fm,
  gr,
  he,
  mr,
  qt,
  se,
  yr
} from "./chunk-MKUY72VH.js";
import {
  x
} from "./chunk-GAJDBZ5G.js";
import {
  n as n2
} from "./chunk-FZMMQS4X.js";
import {
  E,
  H,
  Ot,
  P,
  Yt,
  a,
  b,
  d,
  ds,
  f,
  g,
  kt,
  l,
  mi,
  n,
  p,
  z
} from "./chunk-U3KYTZUD.js";
import {
  s
} from "./chunk-S5K7KX5U.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/chunks/Bufferer-Dw9Qi4T1.js
var q;
function z2(e, t, s2, i2, n3, r) {
  return { m_from: e.clone(), m_to: t.clone(), m_center: s2.clone(), m_next: n3, m_type: i2 };
}
function j(e, t, s2, i2, n3) {
  return { m_from: e.clone(), m_to: t.clone(), m_next: s2, m_type: 4, m_center: new mi() };
}
!(function(e) {
  e[e.enumDummy = 256] = "enumDummy", e[e.enumLine = 1] = "enumLine", e[e.enumArc = 2] = "enumArc", e[e.enumMiter = 8] = "enumMiter", e[e.enumBevel = 16] = "enumBevel", e[e.enumJoinMask = 26] = "enumJoinMask", e[e.enumConnectionMask = 27] = "enumConnectionMask";
})(q || (q = {}));
var G = class extends s {
  constructor(e, t, s2, i2, n3, r, m, o2, a2, h) {
    super(), this.m_index = 0, this.m_bufferedPolygon = null, this.m_x = 0, this.m_y = 0, this.m_progressTracker = h, this.m_parent = e, this.m_mp = t, this.m_distance = s2, this.m_spatialReference = i2, this.m_densifyDist = o2, this.m_maxVertexInCompleteCircle = a2, this.m_joins = n3, this.m_caps = r, this.m_miterLimit = m;
  }
  next() {
    const e = new se();
    for (; ; ) {
      if (this.m_index === this.m_mp.getPointCount()) return null;
      if (1 === this.m_caps) return this.m_index = this.m_mp.getPointCount(), new mr({ vd: this.m_mp.getDescription() });
      if (this.m_mp.getPointByVal(this.m_index, e), this.m_index++, !e.isEmpty()) break;
    }
    let t, s2 = false;
    if (null === this.m_bufferedPolygon && (this.m_x = e.getX(), this.m_y = e.getY(), this.m_bufferedPolygon = this.m_parent.buffer(e, this.m_distance, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_densifyDist, this.m_maxVertexInCompleteCircle), s2 = true), t = this.m_index < this.m_mp.getPointCount() ? this.m_bufferedPolygon.clone() : this.m_bufferedPolygon, !s2) {
      const s3 = new x(), i2 = e.getX() - this.m_x, n3 = e.getY() - this.m_y;
      s3.setShiftCoords(i2, n3), t.applyTransformation(s3);
    }
    return Mt(t, 0), t;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var N = class extends s {
  constructor(e) {
    super(), this.m_currentPathIndex = 0, this.m_polyline = e;
  }
  next() {
    if (!this.m_polyline) return null;
    const e = this.m_polyline.getImpl(), t = e.getPathCount();
    if (this.m_currentPathIndex < t) {
      const t2 = this.m_currentPathIndex;
      if (this.m_currentPathIndex++, !e.isClosedPathInXYPlane(t2)) {
        let s3 = e.getXY(e.getPathEnd(t2) - 1);
        for (; this.m_currentPathIndex < e.getPathCount(); ) {
          const t3 = e.getXY(e.getPathStart(this.m_currentPathIndex));
          if (e.isClosedPathInXYPlane(this.m_currentPathIndex)) break;
          if (!t3.equals(s3)) break;
          s3 = e.getXY(e.getPathEnd(this.m_currentPathIndex) - 1), this.m_currentPathIndex++;
        }
      }
      if (0 === t2 && this.m_currentPathIndex === this.m_polyline.getPathCount()) {
        const e2 = this.m_polyline;
        return this.m_polyline = null, e2;
      }
      const s2 = new Qs({ vd: this.m_polyline.getDescription() });
      s2.addPath(this.m_polyline, t2, true);
      for (let i2 = t2 + 1; i2 < this.m_currentPathIndex; i2++) s2.addSegmentsFromPath(this.m_polyline, i2, 0, e.getSegmentCountPath(i2), false);
      return this.m_currentPathIndex === this.m_polyline.getPathCount() && (this.m_polyline = null), s2;
    }
    return null;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var O = class extends s {
  constructor(e, t, s2) {
    super(), this.m_geometry = null, this.m_index = 0, this.m_bufferer = e, this.m_geoms = t, this.m_index = 0, this.m_bFilter = s2;
  }
  next() {
    if (null === this.m_geometry && (this.m_index = 0, this.m_geometry = this.m_geoms.next(), !this.m_geometry)) return null;
    const e = this.m_geometry.getImpl();
    if (this.m_index < e.getPathCount()) {
      const e2 = this.m_index;
      this.m_index++;
      return this.m_bufferer.bufferPolylinePath(this.m_geometry, e2, this.m_bFilter);
    }
    return this.m_geometry = null, this.next();
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var J = class extends s {
  constructor(e) {
    super(), this.m_index = 0, this.m_bufferer = e;
  }
  next() {
    const e = this.m_bufferer.m_geometry;
    if (this.m_index < e.getPathCount()) {
      const t = this.m_index, s2 = e.calculateRingArea2D(this.m_index);
      for (n(s2 > 0), this.m_index++; this.m_index < e.getPathCount(); ) {
        if (e.calculateRingArea2D(this.m_index) > 0) break;
        this.m_index++;
      }
      let i2;
      return i2 = 0 === t && this.m_index === e.getPathCount() ? this.m_bufferer.bufferPolygonImpl(e, 0, e.getPathCount()) : this.m_bufferer.bufferPolygonImpl(e, t, this.m_index), i2;
    }
    return null;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var U = class {
  constructor(e) {
    this.m_geometry = null, this.m_bufferCommands = [], this.m_originalGeomType = a.enumUnknown, this.m_maxVertexInCompleteCircle = -1, this.m_circleTemplateSize = -1, this.m_oldCircleTemplateSize = 0, this.m_spatialReference = null, this.m_tolerance = new bt(0, 0), this.m_smallTolerance = new bt(0, 0), this.m_filterTolerance = 0, this.m_densifyDist = -1, this.m_distance = Number.NaN, this.m_absDistance = 0, this.m_absDistanceReversed = 0, this.m_dA = -1, this.m_miterLimit = 4, this.m_joins = 0, this.m_caps = 0, this.m_bRoundBuffer = true, this.m_bOutputLoops = true, this.m_bFilter = true, this.m_circleTemplate = [], this.m_leftStack = [], this.m_middleStack = [], this.m_helperLine1 = new fm(), this.m_helperLine2 = new fm(), this.m_helperArray = [], this.m_progressCounter = 0, this.m_densificator = Zh.constructDefault(e), this.m_progressTracker = e;
  }
  buffer(e, t, s2, l2, c, u, f2, _) {
    if (e || P("Geometry.Bufferer.Impl.Buffer"), f2 < 0 && P("Geometry.Bufferer.Impl.Buffer"), g(e.getGeometryType()) && z("Unsupported geometry type."), e.isEmpty()) return new mr({ vd: e.getDescription() });
    if (this.m_joins = l2, this.m_caps = c, this.m_bRoundBuffer = false, this.m_miterLimit = u, this.m_originalGeomType = e.getGeometryType(), d(this.m_originalGeomType) ? this.m_bRoundBuffer = 0 === this.m_joins : l(this.m_originalGeomType) ? this.m_bRoundBuffer = 0 === this.m_caps : p(this.m_originalGeomType) && (this.m_bRoundBuffer = 0 === this.m_joins && 0 === this.m_caps), this.m_bFilter = this.m_bRoundBuffer, this.m_geometry = i(e), this.m_geometry.isEmpty()) return new mr({ vd: e.getDescription() });
    const d2 = new n2();
    this.m_geometry.queryLooseEnvelope(d2), t > 0 && d2.inflateCoords(t, t), this.m_tolerance = qt(s2, d2, true), this.m_smallTolerance = qt(null, d2, true), _ <= 0 && (_ = 96), this.m_spatialReference = s2, this.m_distance = t, this.m_absDistance = Math.abs(this.m_distance), this.m_absDistanceReversed = 0 !== this.m_absDistance ? 1 / this.m_absDistance : 0, Number.isNaN(f2) || 0 === f2 ? f2 = 1e-5 * this.m_absDistance : f2 > 0.5 * this.m_absDistance && (f2 = 0.5 * this.m_absDistance), _ < 12 && (_ = 12);
    const p2 = Math.abs(t) * (1 - Math.cos(Math.PI / _));
    if (p2 > f2) f2 = p2;
    else if (0 !== t) {
      const e2 = Math.PI / Math.acos(1 - f2 / Math.abs(t));
      e2 < _ - 1 && (_ = Math.trunc(e2)) < 12 && (_ = 12, f2 = Math.abs(t) * (1 - Math.cos(Math.PI / _)));
    }
    this.m_densifyDist = f2, this.m_maxVertexInCompleteCircle = _, this.m_filterTolerance = this.m_bRoundBuffer ? Math.min(this.m_smallTolerance.total(), 0.25 * this.m_densifyDist) : 0, this.m_circleTemplateSize = this.calcN(), this.m_circleTemplateSize !== this.m_oldCircleTemplateSize && (this.m_circleTemplate.length = 0, this.m_oldCircleTemplateSize = this.m_circleTemplateSize), this.m_densifyDist > 0 && E(this.m_geometry) && (this.m_geometry = this.m_densificator.densifyEx(this.m_geometry, 0, this.m_densifyDist, 0, 0 !== this.m_joins, ds()));
    const b2 = this.bufferImpl();
    return this.m_geometry = null, b2;
  }
  generateCircleTemplate() {
    if (this.m_circleTemplate.length) return;
    const e = this.m_circleTemplateSize, t = Math.trunc((e + 3) / 4), s2 = 0.5 * Math.PI / t;
    this.m_dA = s2, this.m_circleTemplate = Ot(mi, 4 * t);
    const i2 = Math.cos(s2), n3 = Math.sin(s2), r = mi.construct(0, 1);
    for (let m = 0; m < t; m++) this.m_circleTemplate[m + 0 * t].setCoords(r.y, -r.x), this.m_circleTemplate[m + 1 * t].setCoords(-r.x, -r.y), this.m_circleTemplate[m + 2 * t].setCoords(-r.y, r.x), this.m_circleTemplate[m + 3 * t].setCoords(r.x, r.y), r.rotateReverse(i2, n3);
  }
  bufferImpl() {
    const e = this.m_geometry.getGeometryType();
    if (f(e)) {
      const e2 = new Qs({ vd: this.m_geometry.getDescription() });
      return e2.addSegment(this.m_geometry, true), this.m_geometry = e2, this.bufferImpl();
    }
    if (this.m_distance <= this.m_tolerance.total()) {
      if (!d(e)) return new mr({ vd: this.m_geometry.getDescription() });
      if (this.m_distance < 0) {
        const e2 = new n2();
        if (this.m_geometry.queryEnvelope(e2), e2.width() <= 2 * this.m_absDistance || e2.height() <= 2 * this.m_absDistance) return new mr({ vd: this.m_geometry.getDescription() });
      }
    }
    switch (this.m_geometry.getGeometryType()) {
      case a.enumPoint:
        return this.bufferPoint();
      case a.enumMultiPoint:
        return this.bufferMultiPoint();
      case a.enumPolyline:
        return this.bufferPolyline();
      case a.enumPolygon:
        return this.bufferPolygon();
      case a.enumEnvelope:
        return this.bufferEnvelope();
      default:
        b("");
    }
  }
  bufferPolyline() {
    if (this.isDegenerateGeometry(this.m_geometry)) {
      const e2 = new se();
      this.m_geometry.getPointByVal(0, e2);
      const t2 = new n2();
      return this.m_geometry.queryEnvelope(t2), e2.setXY(t2.getCenter()), this.bufferDegeneratePath(e2, true);
    }
    const e = this.m_geometry, t = this.m_geometry.getDescription();
    this.m_geometry = null;
    const s2 = new N(e);
    let i2, n3;
    i2 = 0 === this.m_joins ? new P2().executeMany(s2, 0.25 * this.m_densifyDist, false, this.m_progressTracker) : s2, n3 = this.m_bRoundBuffer ? new o().executeMany(i2, null, true, this.m_progressTracker) : i2;
    const r = new O(this, n3, this.m_bFilter), m = new al().executeMany(r, this.m_spatialReference, this.m_progressTracker, 2), o2 = new Eh().executeMany(m, this.m_spatialReference, false, this.m_progressTracker).next();
    return null !== o2 ? o2 : new mr({ vd: t });
  }
  bufferPolygon() {
    if (0 === this.m_distance) return this.m_geometry;
    this.generateCircleTemplate();
    const e = new Eh().execute(this.m_geometry, null, false, this.m_progressTracker);
    if (this.m_distance < 0) {
      if (this.m_geometry = e, this.m_geometry.isEmpty()) return this.m_geometry;
      const t = this.m_geometry, s2 = this.bufferPolygonImpl(t, 0, t.getPathCount());
      return new Eh().execute(s2, this.m_spatialReference, false, this.m_progressTracker);
    }
    {
      if (this.m_geometry = e, this.isDegenerateGeometry(this.m_geometry)) {
        const e2 = new se();
        this.m_geometry.getPointByVal(0, e2);
        const t2 = new n2();
        return this.m_geometry.queryEnvelope(t2), e2.setXY(t2.getCenter()), this.bufferDegeneratePath(e2, true);
      }
      const t = new J(this), s2 = new al().executeMany(t, this.m_spatialReference, this.m_progressTracker, 2), i2 = new Eh().executeMany(s2, this.m_spatialReference, false, this.m_progressTracker).next();
      return null !== i2 ? i2 : new mr({ vd: this.m_geometry.getDescription() });
    }
  }
  bufferPolygonImpl(e, t, s2) {
    const i2 = e, n3 = i2.getImpl();
    let r = new mr({ vd: e.getDescription() });
    for (let m = t; m < s2; m++) {
      if (n3.getPathSize(m) < 1) continue;
      const t2 = n3.calculateRingArea2D(m), s3 = new n2();
      if (n3.queryPathEnvelope(m, s3), this.m_distance > 0) if (t2 > 0) if (this.isDegeneratePath(n3, m)) {
        const e2 = new se();
        n3.getPointByVal(n3.getPathStart(m), e2), e2.setXY(s3.getCenter()), r.add(this.bufferDegeneratePath(e2, true), false);
      } else {
        const t3 = new Qs({ vd: e.getDescription() }), s4 = t3.getImpl();
        if (br(this.m_geometry, m)) {
          const e2 = this.bufferConvexPath(i2, m);
          r.add(e2, false);
        } else {
          this.bufferClosedPath(this.m_geometry, m, s4, this.m_bRoundBuffer, 1);
          const e2 = this.bufferCleanup(t3);
          r.add(e2, false);
        }
      }
      else {
        if (s3.width() + this.m_tolerance.total() <= 2 * this.m_absDistance || s3.height() + this.m_tolerance.total() <= 2 * this.m_absDistance) continue;
        const t3 = new Qs({ vd: e.getDescription() }), i3 = t3.getImpl();
        if (this.bufferClosedPath(this.m_geometry, m, i3, this.m_bRoundBuffer, 1), !t3.isEmpty()) {
          const e2 = s3, n4 = Math.max(1, this.m_absDistance), m2 = e2.clone();
          m2.inflateCoords(n4, n4), i3.addEnvelope(m2, false);
          const o2 = this.bufferCleanup(t3);
          r.reserve(r.getPointCount() + o2.getPointCount() - 4), ee(o2, r, m2, true);
        }
      }
      else if (t2 > 0) {
        if (s3.width() + this.m_tolerance.total() <= 2 * this.m_absDistance || s3.height() + this.m_tolerance.total() <= 2 * this.m_absDistance) continue;
        const t3 = new Qs({ vd: e.getDescription() }), i3 = t3.getImpl();
        if (this.bufferClosedPath(this.m_geometry, m, i3, this.m_bRoundBuffer, -1), !t3.isEmpty()) {
          const e2 = new n2();
          i3.queryLooseEnvelope(e2);
          const s4 = Math.max(1, this.m_absDistance), n4 = e2.clone();
          n4.inflateCoords(s4, s4), i3.addEnvelope(n4, false);
          ee(this.bufferCleanup(t3), r, n4, true);
        }
      } else {
        const t3 = new Qs({ vd: e.getDescription() }), s4 = t3.getImpl();
        this.bufferClosedPath(this.m_geometry, m, s4, this.m_bRoundBuffer, -1);
        const i3 = this.bufferCleanup(t3);
        for (let e2 = 0, n4 = i3.getPathCount(); e2 < n4; e2++) r.addPath(i3, e2, true);
      }
    }
    if (this.m_distance > 0) {
      if (r.getPathCount() > 1) {
        return this.bufferCleanup(r);
      }
      return H2(r);
    }
    {
      const e2 = new n2();
      if (r.queryLooseEnvelope(e2), r.isEmpty()) return H2(r);
      {
        const t2 = Math.max(1, this.m_absDistance), s3 = e2.clone();
        s3.inflateCoords(t2, t2), r.addEnvelope(s3, false);
        const i3 = this.bufferCleanup(r);
        r = new mr();
        const n4 = new mr({ vd: i3.getDescription() });
        return ee(i3, n4, s3, false), H2(n4);
      }
    }
  }
  bufferPoint() {
    return this.bufferPointImpl(this.m_geometry);
  }
  bufferPointImpl(e) {
    const t = new mr({ vd: e.getDescription() });
    return 0 === this.m_caps ? (this.addCircle(t.getImpl(), e), this.setStrongSimple(t)) : 2 === this.m_caps ? (this.addSquare(t.getImpl(), e), this.setStrongSimple(t)) : t;
  }
  bufferDegeneratePath(e, t) {
    const s2 = new mr({ vd: e.getDescription() });
    return t && 0 === this.m_joins || !t && 0 === this.m_caps ? (this.addCircle(s2.getImpl(), e), this.setStrongSimple(s2)) : t || 2 !== this.m_caps ? s2 : (this.addSquare(s2.getImpl(), e), this.setStrongSimple(s2));
  }
  bufferMultiPoint() {
    const e = new G(this, this.m_geometry, this.m_distance, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_densifyDist, this.m_maxVertexInCompleteCircle, this.m_progressTracker);
    return new al().executeMany(e, this.m_spatialReference, this.m_progressTracker, 2).next();
  }
  bufferEnvelope() {
    let e = new mr({ vd: this.m_geometry.getDescription() });
    if (this.m_distance <= 0) {
      if (0 === this.m_distance) e.addEnvelope(this.m_geometry, false), K(this.m_geometry, this.m_tolerance.total()) && (e = this.setStrongSimple(e));
      else {
        const t2 = new he();
        this.m_geometry.queryEnvelope(t2), t2.inflateCoords(this.m_distance, this.m_distance), e.addEnvelope(t2, false), K(t2, this.m_tolerance.total()) && (e = this.setStrongSimple(e));
      }
      return e;
    }
    if (1 === this.m_joins) {
      const t2 = new he({ copy: this.m_geometry });
      return t2.inflateCoords(this.m_absDistance, this.m_absDistance), e.addEnvelope(t2, false), e;
    }
    const t = this.m_geometry.clone();
    if (0 === t.width() || 0 === t.height()) {
      if (0 === t.width() && 0 === t.height()) {
        const e3 = new se({ vd: this.m_geometry.getDescription() });
        return t.queryCornerByVal(0, e3), this.m_geometry = e3, this.bufferImpl();
      }
      const e2 = new Qs({ vd: this.m_geometry.getDescription() }), s2 = new se();
      return t.queryCornerByVal(0, s2), e2.startPathPoint(s2), t.queryCornerByVal(2, s2), e2.lineToPoint(s2), this.m_geometry = e2, this.bufferImpl();
    }
    return e.addEnvelope(this.m_geometry, false), this.m_geometry = e, this.bufferConvexPath(e, 0);
  }
  bufferConvexPath(e, t) {
    this.generateCircleTemplate();
    const s2 = e.hasAttribute(10), i2 = new mr({ vd: e.getDescription() }), n3 = i2.getImpl();
    i2.reserve((this.m_circleTemplate.length / 10 + 4) * e.getPathSize(t));
    const r = new mi(), m = new mi(), o2 = new mi(), a2 = new mi(0, 0), h = new mi(), l2 = new mi(), u = e.getImpl(), f2 = e.getPathSize(t), _ = e.getPathStart(t);
    for (let g2 = 0, d2 = e.getPathSize(t); g2 < d2; g2++) {
      const e2 = u.getXY(_ + g2), t2 = u.getXY(_ + (g2 + 1) % f2), i3 = u.getXY(_ + (g2 + 2) % f2);
      h.setSub(t2, e2), 0 === h.length() && b("");
      const d3 = s2 && !!(1 & u.getAttributeAsInt(10, (g2 + 1) % f2, 0));
      h.normalize();
      const p2 = h.clone();
      h.leftPerpendicularThis(), h.scale(this.m_absDistance), r.setAdd(h, e2), m.setAdd(h, t2), 0 === g2 ? n3.startPath(r) : n3.lineTo(r), n3.lineTo(m), l2.setSub(i3, t2), 0 === l2.length() && b(""), l2.normalize();
      const b2 = l2.clone();
      l2.leftPerpendicularThis(), l2.scale(this.m_absDistance), o2.setAdd(l2, t2);
      let y = q.enumArc;
      const P3 = d3 ? 0 : this.m_joins;
      if (2 === P3) y = q.enumBevel;
      else if (1 === P3) {
        const e3 = -p2.crossProduct(b2);
        a2.setSub(p2, b2), a2.scale(this.m_absDistance / e3), a2.length() < this.m_miterLimit * this.m_absDistance ? (a2.addThis(t2), y = q.enumMiter) : y = q.enumBevel;
      } else a2.assign(t2);
      this.addJoin(y, n3, a2, m, o2, false, false);
    }
    return H2(i2);
  }
  bufferPolylinePath(e, t, s2) {
    this.generateCircleTemplate();
    const i2 = e, n3 = i2.getImpl();
    if (n3.getPathSize(t) < 1) return null;
    let r;
    if (r = this.m_bRoundBuffer ? n3.isClosedPathInXYPlane(t) : n3.isClosedPath(t), this.isDegeneratePath(n3, t) && this.m_distance > 0) {
      const e2 = new se();
      n3.getPointByVal(n3.getPathStart(t), e2);
      const s3 = new n2();
      return n3.queryPathEnvelope(t, s3), e2.setXY(s3.getCenter()), this.bufferDegeneratePath(e2, r);
    }
    const m = new Qs({ vd: e.getDescription() });
    m.reserve((Math.trunc(this.m_circleTemplate.length / 10) + 4) * n3.getPathSize(t));
    const o2 = m.getImpl();
    return r ? 2 !== this.bufferClosedPath(i2, t, o2, s2, 1) && this.bufferClosedPath(i2, t, o2, s2, -1) : this.bufferOpenPath(i2, t, o2, s2), this.bufferCleanup(m);
  }
  progress_() {
  }
  bufferCleanup(e, t = false) {
    const s2 = t ? this.m_tolerance : this.m_smallTolerance;
    return Ma(e, s2, true, !t, -1, this.m_progressTracker, 0, false);
  }
  calcN() {
    const e = 4;
    if (0 === this.m_densifyDist) return this.m_maxVertexInCompleteCircle;
    const t = 1 - this.m_densifyDist * Math.abs(this.m_absDistanceReversed);
    let s2 = e;
    return s2 = t < -1 ? e : 2 * Math.PI / Math.acos(t) + 0.5, s2 < e ? s2 = e : s2 > this.m_maxVertexInCompleteCircle && (s2 = this.m_maxVertexInCompleteCircle), Math.trunc(s2);
  }
  addJoin(e, t, s2, i2, n3, r, m) {
    if (this.generateCircleTemplate(), r && (t.startPath(i2), r = false), e === q.enumBevel) return void (m && t.lineTo(n3));
    if (e === q.enumMiter) {
      const e2 = s2.clone();
      return t.lineTo(e2), void (m && t.lineTo(n3));
    }
    const o2 = new mi();
    o2.setSub(i2, s2), o2.scale(this.m_absDistanceReversed);
    const a2 = new mi();
    a2.setSub(n3, s2), a2.scale(this.m_absDistanceReversed);
    let h = Math.atan2(o2.y, o2.x) / this.m_dA;
    h < 0 && (h = this.m_circleTemplate.length + h), h = this.m_circleTemplate.length - h;
    let l2 = Math.atan2(a2.y, a2.x) / this.m_dA;
    l2 < 0 && (l2 = this.m_circleTemplate.length + l2), l2 = this.m_circleTemplate.length - l2, l2 < h && (l2 += this.m_circleTemplate.length);
    let c = Math.trunc(l2), u = Math.ceil(h), f2 = this.m_circleTemplate[u % this.m_circleTemplate.length].clone();
    f2.scaleAddThis(this.m_absDistance, s2);
    const _ = 10 * this.m_tolerance.total();
    f2.sub(i2).length() < _ && (u += 1), f2 = this.m_circleTemplate[c % this.m_circleTemplate.length].clone(), f2.scaleAddThis(this.m_absDistance, s2), f2.sub(n3).length() < _ && (c -= 1);
    let g2 = c - u;
    g2++;
    for (let d2 = 0, p2 = u % this.m_circleTemplate.length; d2 < g2; d2++, p2 = (p2 + 1) % this.m_circleTemplate.length) f2 = this.m_circleTemplate[p2].clone(), f2.scaleAddThis(this.m_absDistance, s2), t.lineTo(f2), this.progress_();
    m && t.lineTo(n3);
  }
  bufferClosedPath(e, t, s2, i2, n3) {
    const r = new yr(), m = r.addPathFromMultiPath(e, t, true);
    return this.bufferClosedPathImpl(r, m, s2, i2, n3);
  }
  bufferClosedPathImpl(e, t, s2, i2, n3) {
    const r = e.getFirstVertex(e.getFirstPath(t)), m = new se();
    e.queryPoint(r, m), e.filterClosePoints(this.m_filterTolerance, false, false, false, -1);
    if (e.getPointCount(t) < 2) return n3 < 0 ? 0 : (this.m_bRoundBuffer && this.addCircle(s2, m), 2);
    n(e.getFirstPath(t) !== gr), n(e.getFirstVertex(e.getFirstPath(t)) !== gr);
    const o2 = e.getXY(e.getFirstVertex(e.getFirstPath(t))), a2 = new x();
    if (a2.setShift(o2.negate()), e.applyTransformation(a2), i2) {
      const i3 = $(e, t, n3, true, this.m_absDistance, this.m_filterTolerance, this.m_densifyDist);
      if (n(1 === i3), e.getPointCount(t) < 2) return n3 < 0 ? 0 : (this.addCircle(s2, m), 2);
    }
    const h = 0 !== this.m_joins && e.getVertexDescription().hasAttribute(10);
    this.m_bufferCommands.length = 0;
    const l2 = e.getFirstPath(t);
    let c = e.getFirstVertex(l2), f2 = 1 === n3 ? e.getPrevVertex(c) : e.getNextVertex(c), _ = 1 === n3 ? e.getNextVertex(c) : e.getPrevVertex(c), g2 = true;
    const p2 = new mi(), b2 = new mi(), y = new mi(), P3 = new mi(), C = new mi(), D = new mi(), w = new mi(), T = new mi(), v = this.m_absDistance, S = e.getPathSize(l2), I = new mi(0, 0);
    for (let u = 0; u < S; u++) {
      b2.assign(e.getXY(_)), g2 && (p2.assign(e.getXY(c)), y.assign(e.getXY(f2)), D.setSub(p2, y), D.normalize(), T.leftPerpendicularOther(D), T.scale(v), P3.setAdd(T, p2));
      const t2 = h && !!(1 & e.getAttributeAsDbl(10, c, 0));
      C.setSub(b2, p2), C.normalize(), w.leftPerpendicularOther(C), w.scale(v);
      const s3 = new mi();
      s3.setAdd(p2, w);
      const i3 = D.crossProduct(C), r2 = D.dotProduct(C);
      if (i3 < 0 || r2 < 0 && i3 < Math.abs(r2) * Number.EPSILON * 8) {
        let e2 = false;
        const n4 = t2 ? 0 : this.m_joins;
        if (1 === n4) {
          const t3 = -i3;
          I.setSub(D, C), I.scale(this.m_absDistance / t3), I.length() < this.m_miterLimit * this.m_absDistance && (I.addThis(p2), e2 = true), this.m_bufferCommands.push(z2(P3, s3, I, e2 ? q.enumMiter : q.enumBevel, this.m_bufferCommands.length + 1));
        } else this.m_bufferCommands.push(z2(P3, s3, p2, 0 === n4 ? q.enumArc : q.enumBevel, this.m_bufferCommands.length + 1));
      } else P3.equals(s3) || (this.m_bufferCommands.push(j(P3, p2, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(j(p2, s3, this.m_bufferCommands.length + 1)));
      const m2 = new mi();
      m2.setAdd(b2, w), this.m_bufferCommands.push(z2(s3, m2, p2, q.enumLine, this.m_bufferCommands.length + 1)), P3.setCoordsPoint2D(m2), T.setCoordsPoint2D(w), y.setCoordsPoint2D(p2), p2.setCoordsPoint2D(b2), D.setCoordsPoint2D(C), f2 = c, c = _, g2 = false, _ = 1 === n3 ? e.getNextVertex(c) : e.getPrevVertex(c);
    }
    return this.m_bufferCommands.at(-1).m_next = 0, this.processBufferCommands(s2), a2.setShift(o2), s2.applyTransformationToPath(a2, s2.getPathCount() - 1), 1;
  }
  bufferOpenPath(e, t, s2, i2) {
    if (this.m_bRoundBuffer) {
      const n4 = new Qs({ vd: e.getDescription() });
      return n4.addPath(e, t, false), n4.addSegmentsFromPath(e, t, 0, e.getSegmentCountPath(t), false), this.bufferClosedPath(n4, 0, s2, i2, 1);
    }
    let n3 = 0;
    const r = new Qs({ vd: e.getDescription() }), m = new mi(0, 0);
    {
      const i3 = new yr(), o3 = i3.addPathFromMultiPath(e, t, false), a3 = i3.getFirstVertex(i3.getFirstPath(o3)), h2 = new se();
      i3.queryPoint(a3, h2), m.assign(h2.getXY()), i3.filterClosePoints(0, false, false, false, -1);
      if (i3.getPointCount(o3) < 2) return this.m_bRoundBuffer && this.addCircle(s2, h2), 2;
      const l3 = i3.getGeometry(i3.getFirstGeometry());
      r.addPath(l3, 0, false), n3 = r.getPointCount() - 1, r.addSegmentsFromPath(l3, 0, 0, l3.getSegmentCountPath(0) - 1, false);
    }
    const o2 = new yr(), a2 = o2.addPathFromMultiPath(r, 0, true);
    n(o2.getFirstPath(a2) !== gr), n(o2.getFirstVertex(o2.getFirstPath(a2)) !== gr);
    const h = new x();
    h.setShift(m.negate()), o2.applyTransformation(h), this.m_bufferCommands.length = 0;
    const l2 = o2.getFirstPath(a2), c = 0 !== this.m_joins && o2.getVertexDescription().hasAttribute(10);
    let f2 = o2.getFirstVertex(l2), _ = o2.getPrevVertex(f2), g2 = o2.getNextVertex(f2), p2 = true;
    const b2 = new mi(), y = new mi(), P3 = new mi(), C = new mi(), D = new mi(), w = new mi(), T = new mi(), v = new mi(), S = this.m_absDistance, M = o2.getPathSize(l2), k = new mi(0, 0);
    for (let u = 0; u < M; u++) {
      let e2 = false;
      0 !== u && u !== n3 || (e2 = true), y.assign(o2.getXY(g2)), p2 && (b2.assign(o2.getXY(f2)), P3.assign(o2.getXY(_)), w.setSub(b2, P3), w.normalize(), v.leftPerpendicularOther(w), v.scale(S), C.setAdd(v, b2));
      const t2 = c && !!(1 & o2.getAttributeAsDbl(10, f2, 0));
      D.setSub(y, b2), D.normalize(), T.leftPerpendicularOther(D), T.scale(S);
      const s3 = new mi();
      s3.setAdd(b2, T);
      const i3 = w.crossProduct(D), r2 = w.dotProduct(D);
      if (i3 < 0 || r2 < 0 && i3 < Math.abs(r2) * Number.EPSILON * 8) if (e2) if (0 === this.m_caps) this.m_bufferCommands.push(z2(C, s3, b2, q.enumArc, this.m_bufferCommands.length + 1));
      else if (1 === this.m_caps) this.m_bufferCommands.push(z2(C, s3, b2, q.enumLine, this.m_bufferCommands.length + 1));
      else {
        const e3 = D.mul(this.m_absDistance).negate(), t3 = e3.clone();
        e3.addThis(C), t3.addThis(s3), this.m_bufferCommands.push(z2(C, e3, b2, q.enumLine, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(z2(e3, t3, b2, q.enumLine, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(z2(t3, s3, b2, q.enumLine, this.m_bufferCommands.length + 1));
      }
      else {
        let e3 = false;
        const n4 = t2 ? 0 : this.m_joins;
        if (1 === n4) {
          const t3 = -i3;
          k.setSub(w, D), k.scale(this.m_absDistance / t3), k.length() < this.m_miterLimit * this.m_absDistance && (k.addThis(b2), e3 = true), this.m_bufferCommands.push(z2(C, s3, k, e3 ? q.enumMiter : q.enumBevel, this.m_bufferCommands.length + 1));
        } else this.m_bufferCommands.push(z2(C, s3, b2, 0 === n4 ? q.enumArc : q.enumBevel, this.m_bufferCommands.length + 1));
      }
      else C.equals(s3) || (this.m_bufferCommands.push(j(C, b2, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(j(b2, s3, this.m_bufferCommands.length + 1)));
      const m2 = new mi();
      m2.setAdd(y, T), this.m_bufferCommands.push(z2(s3, m2, b2, q.enumLine, this.m_bufferCommands.length + 1)), C.setCoordsPoint2D(m2), v.setCoordsPoint2D(T), P3.setCoordsPoint2D(b2), b2.setCoordsPoint2D(y), w.setCoordsPoint2D(D), _ = f2, f2 = g2, p2 = false, g2 = o2.getNextVertex(f2);
    }
    return this.m_bufferCommands.at(-1).m_next = 0, this.processBufferCommands(s2), h.setShift(m), s2.applyTransformationToPath(h, s2.getPathCount() - 1), 1;
  }
  processBufferCommands(e) {
    const t = this.cleanupBufferCommands();
    let s2 = true, i2 = t + 1;
    for (let n3 = t; i2 !== t; n3 = i2) {
      const t2 = this.m_bufferCommands[n3];
      i2 = -1 !== t2.m_next ? t2.m_next : (n3 + 1) % this.m_bufferCommands.length, t2.m_type && (s2 && (e.startPath(t2.m_from), s2 = false), t2.m_type & q.enumJoinMask ? this.addJoin(t2.m_type, e, t2.m_center, t2.m_from, t2.m_to, false, true) : e.lineTo(t2.m_to));
    }
  }
  cleanupBufferCommands() {
    this.m_helperArray = Ot(mi, 9);
    let e = 0;
    for (let s2 = 0, i2 = this.m_bufferCommands.length; s2 < i2; ) {
      const t2 = this.m_bufferCommands[s2];
      if (t2.m_type & q.enumConnectionMask) {
        e = s2;
        break;
      }
      s2 = t2.m_next;
    }
    let t = e + 1;
    for (let s2 = e; t !== e; s2 = t) {
      const e2 = this.m_bufferCommands[s2];
      t = e2.m_next;
      let i2 = 1, n3 = null;
      for (; t !== s2 && (n3 = this.m_bufferCommands[t], !(n3.m_type & q.enumConnectionMask)); ) t = n3.m_next, i2++;
      if (1 !== i2 && (e2.m_type & n3.m_type) === q.enumLine) {
        this.m_helperLine1.setStartXY(e2.m_from), this.m_helperLine1.setEndXY(e2.m_to), this.m_helperLine2.setStartXY(n3.m_from), this.m_helperLine2.setEndXY(n3.m_to);
        1 === this.m_helperLine1.intersect(this.m_helperLine2, this.m_helperArray, null, null, this.m_smallTolerance.total()) && (e2.m_to.assign(this.m_helperArray[0]), n3.m_from.assign(this.m_helperArray[0]), e2.m_next = t);
      }
    }
    return e;
  }
  isDegeneratePath(e, t) {
    if (1 === e.getPathSize(t)) return true;
    if (0 === this.m_joins && 0 === this.m_caps) {
      const s2 = new n2();
      if (e.queryPathEnvelope(t, s2), Math.max(s2.width(), s2.height()) < 0.5 * this.m_densifyDist) return true;
    }
    return false;
  }
  isDegenerateGeometry(e) {
    if (0 === this.m_joins && 0 === this.m_caps) {
      const t = new n2();
      if (e.queryEnvelope(t), Math.max(t.width(), t.height()) < 0.5 * this.m_densifyDist) return true;
    }
    return false;
  }
  addCircle(e, t) {
    const s2 = t.getXY();
    if (0 !== this.m_circleTemplate.length) {
      let t2 = this.m_circleTemplate[0].clone();
      t2.scaleAddThis(this.m_absDistance, s2), e.startPath(t2);
      for (let i3 = 1, n4 = this.m_circleTemplate.length; i3 < n4; i3++) t2 = this.m_circleTemplate[i3].clone(), t2.scaleAddThis(this.m_absDistance, s2), e.lineTo(t2);
      return;
    }
    const i2 = this.m_circleTemplateSize, n3 = Math.trunc((i2 + 3) / 4), r = 0.5 * Math.PI / n3;
    e.reserve(4 * n3);
    const m = Math.cos(r), o2 = Math.sin(r);
    for (let a2 = 3; a2 >= 0; a2--) {
      const t2 = mi.construct(0, this.m_absDistance);
      switch (a2) {
        case 0:
          for (let i3 = 0; i3 < n3; i3++) e.lineToCoords(t2.x + s2.x, t2.y + s2.y), t2.rotateReverse(m, o2);
          break;
        case 1:
          for (let i3 = 0; i3 < n3; i3++) e.lineToCoords(-t2.y + s2.x, t2.x + s2.y), t2.rotateReverse(m, o2);
          break;
        case 2:
          for (let i3 = 0; i3 < n3; i3++) e.lineToCoords(-t2.x + s2.x, -t2.y + s2.y), t2.rotateReverse(m, o2);
          break;
        default:
          e.startPathCoords(t2.y + s2.x, -t2.x + s2.y);
          for (let i3 = 1; i3 < n3; i3++) t2.rotateReverse(m, o2), e.lineToCoords(t2.y + s2.x, -t2.x + s2.y);
      }
      this.progress_();
    }
  }
  addSquare(e, t) {
    const s2 = new he({ vd: t.getDescription() });
    s2.setCoords(t.getX(), t.getY(), t.getX(), t.getY()), s2.inflateCoords(this.m_absDistance, this.m_absDistance), e.addEnvelope(s2, false);
  }
  setStrongSimple(e) {
    return e.getImpl().setIsSimple(4, this.m_tolerance.total()), e.getImpl().updateOGCFlagsProtected(), e;
  }
};
function H2(e) {
  return Mt(e, 0), e;
}
function K(e, t) {
  return !!e.isEmpty() || Math.min(e.width(), e.height()) > t;
}
function Q(e, t, s2, i2, n3, r, m, o2) {
  const a2 = e.getXY(s2), h = e.getXY(i2);
  if (a2.equals(h)) return -1;
  const l2 = 0.25 * m, c = 0.25 * m, f2 = new mi();
  f2.setSub(h, a2);
  const _ = f2.length(), g2 = _ * _ * 0.25, d2 = r * r - g2;
  if (d2 <= g2) return -1;
  const p2 = Math.sqrt(d2);
  f2.normalize();
  const b2 = f2.clone();
  b2.rightPerpendicularThis();
  const y = g2 / p2, P3 = y <= c, C = mi.lerp(h, a2, 0.5), T = b2.clone(), v = y - l2;
  T.scaleAddThis(Math.max(0, v), C);
  b2.negate().scaleAddThis(p2, C);
  const S = 3.61 * H(r - c), I = T.sub(a2), M = T.sub(h);
  let E2 = false, V = 0;
  const k = Yt(64, 0);
  n(o2 === k.length);
  {
    for (let o3 = e.getPrevVertexEx(i2, n3); o3 !== s2; ) {
      if (1 === e.getUserIndex(o3, t)) return -1;
      if (e.getXY(o3).equals(h)) {
        const t2 = e.getPrevVertexEx(o3, n3);
        e.removeVertex(o3, false), o3 = t2;
        continue;
      }
      break;
    }
    const r2 = new mi(), m2 = a2.clone();
    k[V++] = 1;
    for (let o3 = e.getNextVertexEx(s2, n3); o3 !== i2; ) {
      if (1 === e.getUserIndex(o3, t)) return -1;
      const s3 = e.getXY(o3);
      if (s3.equals(m2)) {
        const t2 = e.getNextVertexEx(o3, n3);
        e.removeVertex(o3, false), o3 = t2;
        continue;
      }
      k[V++] = 0;
      const i3 = new mi();
      if (i3.setSub(s3, a2), i3.dotProduct(b2) < 0) return 0;
      (mi.sqrDistance(s3, a2) > S || mi.sqrDistance(s3, h) > S) && (E2 = true);
      let l3 = 0;
      s3.sub(a2).crossProduct(I) >= 0 && (l3 = 1);
      if (s3.sub(h).crossProduct(M) <= 0 && (l3 |= 2), 0 === l3) return 0;
      k[V - 1] = l3, r2.assign(m2), m2.assign(s3), o3 = e.getNextVertexEx(o3, n3);
    }
    if (1 === V) return 0;
    n(V < k.length), k[V++] = 2;
  }
  let R = true;
  for (let u = 1, x2 = 0; u < V; u++) if (k[u] !== k[u - 1] && (x2++, R = x2 < 3 && (1 === x2 && 3 === k[u] || 2 === x2 && 2 === k[u]), !R)) return 0;
  if (V > 2 && R && (3 === V || !E2)) {
    let t2 = 0, r2 = e.getNextVertexEx(s2, n3);
    for (P3 || (e.setXY(r2, T), r2 = e.getNextVertexEx(r2, n3)); r2 !== i2; ) {
      const s3 = e.getNextVertexEx(r2, n3);
      e.removeVertex(r2, false), r2 = s3, ++t2;
    }
    return t2;
  }
  if (n(3 !== V), E2 && V > 3) return 0;
  const B = a2.clone();
  let A = s2;
  const X = a2.clone();
  let Y = 1, F = -1, L = A, q2 = 0;
  for (V = 1; L !== i2; ) {
    L = e.getNextVertexEx(L, n3);
    const t2 = k[V++];
    if (0 === t2) {
      if (L === i2) break;
      continue;
    }
    const s3 = e.getXY(L);
    if (-1 !== F) {
      if (3 & (F & Y & t2)) {
        e.removeVertex(A, true), q2++, A = L, X.setCoordsPoint2D(s3), Y = t2;
        continue;
      }
      if (3 === Y && 0 !== F && 0 !== t2) {
        if (X.setCoordsPoint2D(T), P3 || X.equals(B)) {
          e.removeVertex(A, true), q2++, A = L, X.setCoordsPoint2D(s3), Y = t2;
          continue;
        }
        e.setXY(A, X);
      }
    }
    F = Y, B.setCoordsPoint2D(X), A = L, Y = t2, X.setCoordsPoint2D(s3);
  }
  return q2;
}
function W(e, t, s2, i2) {
  let n3 = -1;
  const r = new mi(), m = new mi(), o2 = new mi();
  for (let a2 = 0, h = e.getPathSize(i2), l2 = e.getFirstVertex(i2); a2 < h; ++a2) {
    -1 === n3 && (e.queryXY(l2, m), n3 = e.getPrevVertex(l2), -1 !== n3 && (e.queryXY(n3, r), o2.setSub(m, r), o2.normalize()));
    const s3 = e.getNextVertex(l2);
    if (-1 === s3) break;
    const i3 = e.getXY(s3), a3 = i3.sub(m);
    if (a3.normalize(), -1 !== n3) {
      a3.dotProduct(o2) < -0.99 && Math.abs(a3.crossProduct(o2)) < 1e-7 && e.setUserIndex(l2, t, 1);
    }
    n3 = l2, l2 = s3, r.assign(m), m.assign(i3), o2.assign(a3);
  }
}
function Z(s2, i2, n3, r, m, o2, a2) {
  const h = { stack: [], error: void 0, hasError: false };
  try {
    const t = s2.getFirstPath(i2), r2 = s2.createUserIndex();
    __addDisposableResource(h, kt(() => {
      s2.removeUserIndex(r2);
    }, false), false), W(s2, r2, i2, t);
    for (let e = 0; e < 100; ++e) {
      if (0 === s2.getPathSize(t)) return 1;
      let e2 = s2.getFirstVertex(t), i3 = s2.getPathSize(t);
      if (i3 < 3) return 1;
      s2.isClosedPath(t) || (i3 -= 1);
      const o3 = 64;
      let h2 = 0, l2 = false;
      for (let t2 = 0; t2 < i3 && e2 !== gr; t2++) {
        let c = 0, u = e2;
        for (let h3 = 1, l3 = Math.min(o3, i3 - t2); h3 < l3; h3++) if (u = s2.getNextVertexEx(u, n3), h3 > 1) {
          const t3 = Q(s2, r2, e2, u, n3, m, a2, o3);
          if (-1 === t3) break;
          c += t3, i3 -= t3;
        }
        if (h2 += c, l2 = c > 0, l2) {
          const t3 = s2.getPrevVertexEx(e2, n3);
          if (-1 !== t3) {
            e2 = t3, i3++;
            continue;
          }
        }
        e2 = s2.getNextVertexEx(e2, n3);
      }
      if (0 === h2) break;
    }
    return s2.filterClosePoints(o2, false, false, false, -1), 1;
  } catch (l2) {
    h.error = l2, h.hasError = true;
  } finally {
    __disposeResources(h);
  }
}
function $(e, t, s2, i2, n3, r, m) {
  return Z(e, t, s2, i2, n3, r, m);
}
function ee(e, t, s2, i2) {
  for (let n3 = 0, r = e.getPathCount(); n3 < r; n3++) {
    const r2 = e.getXY(e.getPathStart(n3));
    r2.x !== s2.xmin && r2.x !== s2.xmax && t.addPath(e, n3, i2);
  }
}

export {
  U
};
//# sourceMappingURL=chunk-4AKOATHO.js.map
