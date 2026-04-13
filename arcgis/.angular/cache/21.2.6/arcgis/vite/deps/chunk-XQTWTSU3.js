import {
  e
} from "./chunk-ZNBUMLFY.js";
import {
  $s,
  Be,
  Bh,
  Bt,
  Ct as Ct2,
  De,
  Dn,
  Es,
  G as G2,
  Gh,
  Gt as Gt2,
  Ht as Ht2,
  Ih,
  It,
  Jt,
  Ks,
  Kt as Kt2,
  Lt,
  Ne,
  Nh,
  Nt,
  Ot as Ot2,
  Ph,
  Pm,
  Pr,
  Pt as Pt2,
  Qs as Qs2,
  Qt,
  Rs,
  St as St2,
  Th,
  U as U2,
  Ut as Ut2,
  Vt as Vt2,
  Wu,
  X,
  Xt,
  Yt as Yt2,
  Zh,
  Zt,
  am,
  at,
  bt,
  ct as ct2,
  dm,
  et,
  fm,
  fr,
  gr,
  gs,
  gt,
  gu,
  he,
  hm,
  jh,
  kt as kt2,
  mm,
  mr,
  ms,
  mt,
  nt,
  om,
  pe,
  pt,
  qe,
  qh,
  qt as qt2,
  ra,
  rs as rs2,
  se,
  st,
  te,
  um,
  wt,
  xt,
  yr,
  z as z3,
  zs as zs2,
  zt
} from "./chunk-MKUY72VH.js";
import {
  x as x2
} from "./chunk-GAJDBZ5G.js";
import {
  n as n3
} from "./chunk-FZMMQS4X.js";
import {
  $t,
  A,
  As,
  B,
  B2,
  Bs,
  C,
  Ct,
  Ds,
  Dt,
  G,
  Gt,
  H,
  Ht,
  I,
  I2,
  K,
  Kt,
  L,
  Ls,
  N,
  Os,
  Ot,
  P,
  Ps,
  Pt,
  Q,
  Qs,
  R,
  R2,
  S,
  Ss,
  St,
  U,
  Us,
  Ut,
  Vt,
  Wt,
  Y,
  Ys,
  Yt,
  Zs,
  _s,
  a,
  ai,
  b,
  bs,
  ct,
  ds,
  f,
  h,
  hi,
  j,
  k,
  kt,
  l,
  ls,
  m,
  mi,
  n,
  n2,
  oi,
  p,
  p2,
  qs,
  qt,
  rs,
  si,
  vs,
  w,
  x2 as x,
  y,
  z,
  z2,
  zs
} from "./chunk-U3KYTZUD.js";
import {
  t
} from "./chunk-GBACRMDK.js";
import {
  s
} from "./chunk-S5K7KX5U.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/OperatorClip.js
function f2(e3, t2, s2, i2, n5) {
  return v(e3, t2, null, s2, i2, n5);
}
function v(e3, s2, o2, x3, p3, c) {
  const l2 = e3.getGeometryType();
  if (l2 === a.enumPoint) {
    const t2 = e3.getXY();
    return s2.contains(t2) ? e3 : e3.createInstance();
  }
  if (l2 === a.enumEnvelope) {
    const t2 = n3.constructEmpty();
    if (e3.queryEnvelope(t2), t2.intersect(s2)) {
      const s3 = e3.clone();
      return s3.setEnvelope(t2), s3;
    }
    return e3.createInstance();
  }
  if (e3.isEmpty()) return e3;
  if (s2.isEmpty()) return e3.createInstance();
  const _ = s2.clone();
  {
    const t2 = new n3();
    if (e3.queryLooseEnvelope(t2), _.containsEnvelope(t2)) return e3;
    if (!_.isIntersecting(t2)) return e3.createInstance();
    0 === p3 && (t2.intersect(_), t2.inflate(Math.max(0.1 * t2.maxDimension(), 1)), t2.intersect(_), _.assign(t2));
  }
  let u = x3;
  if ((null !== o2 || Number.isNaN(u)) && (u = qt2(o2, _, false).total()), l2 === a.enumGeometryCollection) {
    const t2 = e3, s3 = e3.createInstance();
    for (let e4 = 0, i2 = t2.getGeometryCount(); e4 < i2; e4++) {
      const i3 = t2.getGeometry(e4);
      if (i3.isEmpty()) continue;
      const n5 = f2(i3, _, u, p3, c);
      n5.isEmpty() || (n5 === i3 ? s3.addGeometry(n5.clone()) : s3.addGeometry(n5));
    }
    return s3;
  }
  y(l2) || P("Clip: geometry not supported");
  const g = e3.getImpl().getAccelerators();
  if (null !== g) {
    const e4 = g.getRasterizedGeometry();
    n(null === e4);
  }
  switch (l2) {
    case a.enumMultiPoint: {
      const t2 = e3;
      let s3;
      const i2 = t2.getPointCount(), n5 = t2.getImpl().getAttributeStreamRef(0);
      let h2 = 0;
      for (let e4 = 0; e4 < i2; e4++) {
        const i3 = n5.readPoint2D(2 * e4);
        _.contains(i3) || (0 === h2 && (s3 = t2.createInstance()), h2 < e4 && s3.addPoints(t2, h2, e4), h2 = e4 + 1);
      }
      return h2 > 0 && s3.addPoints(t2, h2, i2), 0 === h2 ? t2 : (n(null !== s3), s3);
    }
    case a.enumPolygon:
    case a.enumPolyline:
      return P2(e3, _, u, p3, c);
    default:
      b("");
  }
}
function d(e3, t2, s2, i2, n5, r) {
  const h2 = new E(t2, r), m2 = new n3();
  return e3.queryLooseEnvelope(m2), t2.containsEnvelope(m2) ? e3 : t2.isIntersecting(m2) ? h2.clipPolesOut(e3, n5) : e3.createInstance();
}
function P2(e3, t2, s2, i2, n5) {
  return new E(t2, n5).clipMultiPath2(e3, s2, i2);
}
var E = class _E {
  constructor(e3, t2) {
    this.m_shape = new yr(), this.m_geometry = gr, this.m_verticesOnExtentIndex = -1, this.m_verticesOnExtent = [], this.m_progressCounter = 0, this.m_extent = new n3(e3), this.m_progressTracker = t2;
  }
  progress_() {
  }
  clipMultiPath2(e3, t2, s2) {
    return e3.getGeometryType() === a.enumPolygon ? this.clipPolygonOrProjectedPolyline2(e3, s2) : this.clipPolyline(e3, t2);
  }
  clipPolygonOrProjectedPolyline2(e3, t2) {
    const s2 = e3.getGeometryType() === a.enumPolyline;
    if (0 === this.m_extent.width() || 0 === this.m_extent.height()) return e3.createInstance();
    const n5 = n3.constructEmpty();
    e3.queryLooseEnvelope(n5), this.m_geometry = s2 ? this.m_shape.addGeometry(e3) : this.m_shape.addGeometry(e3, this.m_extent);
    const h2 = n3.constructEmpty(), m2 = n3.constructEmpty(), o2 = new mi(), c = new mi(), g = Yt(9, Number.NaN), y2 = Yt(9, Number.NaN), f3 = Ot(mi, 9);
    let v2 = null;
    const d2 = new fm(), P3 = [];
    let I4 = false;
    for (let i2 = 0; !I4 && i2 < 4; i2++) {
      let e4 = false;
      const t3 = !!(1 & i2);
      let a2 = 0;
      switch (i2) {
        case 0:
          a2 = this.m_extent.xmin, e4 = n5.xmin <= a2 && n5.xmax >= a2;
          break;
        case 1:
          a2 = this.m_extent.ymin, e4 = n5.ymin <= a2 && n5.ymax >= a2;
          break;
        case 2:
          a2 = this.m_extent.xmax, e4 = n5.xmin <= a2 && n5.xmax >= a2;
          break;
        case 3:
          a2 = this.m_extent.ymax, e4 = n5.ymin <= a2 && n5.ymax >= a2;
      }
      if (e4) {
        I4 = true;
        for (let e5 = this.m_shape.getFirstPath(this.m_geometry); e5 !== gr; ) {
          let n6 = true, p3 = -1, l2 = -1;
          const _ = this.m_shape.getFirstVertex(e5);
          let u = _;
          do {
            this.progress_(), v2 = this.m_shape.getSegment(u);
            let e6 = v2;
            if (null === e6) {
              const t4 = this.m_shape.getNextVertex(u);
              if (t4 === gr) {
                n(s2), 0 === p3 && P3.push(u);
                break;
              }
              this.m_shape.queryXY(u, o2), d2.setStartXY(o2), this.m_shape.queryXY(t4, c), d2.setEndXY(c), e6 = d2;
            }
            e6.queryLooseEnvelope(h2);
            let _2 = _E.checkSegmentIntersection(h2, i2, a2);
            e6.isCurve() && 0 === _2 && e6.isCurve() && (d2.setStartXY(e6.getStartXY()), d2.setEndXY(e6.getEndXY()), this.m_shape.replaceCurveWithLine(u), e6 = d2, d2.queryEnvelope(h2), _2 = _E.checkSegmentIntersection(h2, i2, a2));
            let V3 = 0, X3 = gr;
            if (-1 === _2) {
              const s3 = e6.intersectionWithAxis2D(t3, a2, g, y2);
              if (s3 > 0) {
                let i3 = null;
                if (e6.isCurve()) {
                  i3 = f3, n(s3 <= 9);
                  for (let e7 = 0; e7 < s3; e7++) t3 ? f3[e7].setCoords(g[e7], a2) : f3[e7].setCoords(a2, g[e7]);
                  V3 = this.m_shape.splitSegmentAxisAware(u, y2, s3, i3, t3 ? 1 : 0);
                } else V3 = this.m_shape.splitSegmentAxisAware(u, y2, s3, null, -1);
              } else V3 = 0;
              V3 += 1;
              let h3 = u, x3 = this.m_shape.getNextVertex(h3);
              e6 = null;
              for (let e7 = 0; e7 < V3; e7++) {
                this.m_shape.queryXY(h3, o2), this.m_shape.queryXY(x3, c), v2 = this.m_shape.getSegment(h3);
                let e8 = v2;
                null === e8 && (d2.setStartXY(o2), d2.setEndXY(c), e8 = d2), e8.queryEnvelope(m2);
                let s4 = _E.checkSegmentIntersection(m2, i2, a2);
                if (e8.isCurve() && 0 === s4 && (this.m_shape.replaceCurveWithLine(h3), d2.setStartXY(o2), d2.setEndXY(c), e8 = d2, e8.queryEnvelope(m2), s4 = _E.checkSegmentIntersection(m2, i2, a2)), -1 === s4) {
                  if (t3) {
                    Math.abs(o2.y - a2) < Math.abs(c.y - a2) ? (o2.y = a2, this.m_shape.setXY(h3, o2)) : (c.y = a2, this.m_shape.setXY(x3, c));
                  } else {
                    Math.abs(o2.x - a2) < Math.abs(c.x - a2) ? (o2.x = a2, this.m_shape.setXY(h3, o2)) : (c.x = a2, this.m_shape.setXY(x3, c));
                  }
                  v2 = this.m_shape.getSegment(h3), e8 = v2, null === e8 && (d2.setStartXY(o2), d2.setEndXY(c), e8 = d2), e8.queryEnvelope(m2), s4 = _E.checkSegmentIntersection(m2, i2, a2), -1 === s4 && (s4 = _E.checkSegmentIntersectionLoose(m2, i2, a2));
                }
                const r = p3;
                p3 = s4, -1 === l2 && (l2 = p3), 0 === r && 1 === p3 || 1 === r && 0 === p3 || 0 === r && 0 === p3 && P3.push(h3), 1 === p3 && (I4 = false, n6 = false), h3 = x3, X3 = h3, x3 = this.m_shape.getNextVertex(x3);
              }
            }
            if (0 === V3) {
              const e7 = p3;
              p3 = _2, -1 === l2 && (l2 = p3), 0 === e7 && p3 >= 1 || e7 >= 1 && 0 === p3 || 0 === e7 && 0 === p3 && P3.push(u), 1 === p3 && (I4 = false, n6 = false), X3 = this.m_shape.getNextVertex(u);
            }
            if (u = X3, P3.length >= 256) {
              for (let e7 = 1, t4 = P3.length - 1; e7 < t4; e7++) {
                const t5 = P3[e7];
                s2 ? this.m_shape.snapVertexForPoleClipping(t5, a2) : this.m_shape.removeVertex(t5, false);
              }
              P3[1] = P3.at(-1), P3.length = 2;
            }
          } while (u !== _);
          if (!n6) {
            0 !== l2 || !s2 && 0 !== p3 && 2 !== p3 || P3.push(_);
            for (let e6 = 0, t4 = P3.length; e6 < t4; e6++) {
              const t5 = P3[e6];
              s2 ? this.m_shape.snapVertexForPoleClipping(t5, a2) : this.m_shape.removeVertex(t5, false);
            }
          }
          P3.length = 0, e5 = n6 || 0 === this.m_shape.getPathSize(e5) ? this.m_shape.removePath(e5) : this.m_shape.getNextPath(e5);
        }
      }
    }
    if (I4) return e3.createInstance();
    v2 = null, s2 ? this.removeSpikesAlongPoles() : this.resolveBoundaryOverlaps(), t2 > 0 && this.densifyAlongClipExtent(t2);
    const V2 = this.m_shape.getGeometry(this.m_geometry);
    if (V2.getGeometryType() === a.enumPolygon) {
      V2.setFillRule(e3.getFillRule());
    }
    return V2;
  }
  clipPolyline(e3, t2) {
    const s2 = n3.constructEmpty(), i2 = n3.constructEmpty(), n5 = Yt(9, Number.NaN), r = Yt(9, Number.NaN), h2 = new Pm();
    let m2 = e3;
    const o2 = n3.constructEmpty();
    e3.queryLooseEnvelope(o2);
    for (let a2 = 0; a2 < 4; a2++) {
      let t3 = false;
      const x3 = !!(1 & a2);
      let p3 = 0;
      switch (a2) {
        case 0:
          p3 = this.m_extent.xmin, t3 = o2.xmin <= p3 && o2.xmax >= p3;
          break;
        case 1:
          p3 = this.m_extent.ymin, t3 = o2.ymin <= p3 && o2.ymax >= p3;
          break;
        case 2:
          p3 = this.m_extent.xmax, t3 = o2.xmin <= p3 && o2.xmax >= p3;
          break;
        case 3:
          p3 = this.m_extent.ymax, t3 = o2.ymin <= p3 && o2.ymax >= p3;
      }
      if (!t3) continue;
      const c = m2;
      m2 = e3.createInstance();
      const l2 = c.getImpl().querySegmentIterator();
      l2.resetToFirstPath();
      const _ = new mi(), g = new mi();
      for (; l2.nextPath(); ) {
        let e4 = -1, t4 = true;
        for (; l2.hasNextSegment(); ) {
          this.progress_();
          const o3 = l2.nextSegment(), c2 = o3.isDegenerate(0);
          o3.queryLooseEnvelope(s2);
          const u = _E.checkSegmentIntersection(s2, a2, p3);
          if (-1 === u) {
            const s3 = o3.intersectionWithAxis2D(x3, p3, n5, r);
            let l3 = 0;
            _.assign(o3.getStartXY());
            for (let u2 = 0; u2 <= s3; u2++) {
              const y2 = u2 < s3 ? r[u2] : 1;
              if (l3 === y2) continue;
              o3.queryCut(l3, y2, h2, false);
              const f3 = h2.get();
              let v2 = false;
              if (f3.getStartXY().equals(_) || (f3.setStartXY(_), v2 = true), u2 < s3 && (x3 ? (g.x = n5[u2], g.y = p3) : (g.x = p3, g.y = n5[u2]), f3.getEndXY().equals(g) || (f3.setEndXY(g), v2 = true)), v2 && f3.normalizeAfterEndpointChange(), !c2 && f3.isDegenerate(0)) continue;
              f3.queryEnvelope(i2);
              let d2 = _E.checkSegmentIntersection(i2, a2, p3);
              if (-1 === d2) {
                const e5 = f3.getStartXY(), t5 = f3.getEndXY();
                if (v2 = false, x3) {
                  Math.abs(e5.y - p3) < Math.abs(t5.y - p3) ? (e5.y = p3, f3.setStartXY(e5), e5.equals(f3.getStartXY()) || (f3.setStartXY(e5), v2 = true)) : (t5.y = p3, t5.equals(f3.getEndXY()) || (f3.setEndXY(t5), v2 = true));
                } else {
                  Math.abs(e5.x - p3) < Math.abs(t5.x - p3) ? (e5.x = p3, e5.equals(f3.getStartXY()) || (f3.setStartXY(e5), v2 = true)) : (t5.x = p3, t5.equals(f3.getEndXY()) || (f3.setEndXY(t5), v2 = true));
                }
                v2 && f3.normalizeAfterEndpointChange(), f3.queryEnvelope(i2), d2 = _E.checkSegmentIntersection(i2, a2, p3), -1 === d2 && (d2 = _E.checkSegmentIntersectionLoose(i2, a2, p3));
              }
              _.assign(f3.getEndXY()), l3 = y2, e4 = d2, e4 >= 1 ? (m2.addSegment(f3, t4), t4 = false) : t4 = true;
            }
          } else e4 = u, e4 >= 1 ? (m2.addSegment(o3, t4), t4 = false) : t4 = true;
        }
      }
    }
    return m2;
  }
  static checkSegmentIntersection(e3, t2, s2) {
    switch (t2) {
      case 0:
        return e3.xmin < s2 && e3.xmax <= s2 ? 0 : e3.xmin >= s2 ? e3.xmax === s2 ? 2 : 1 : -1;
      case 1:
        return e3.ymin < s2 && e3.ymax <= s2 ? 0 : e3.ymin >= s2 ? e3.ymax === s2 ? 2 : 1 : -1;
      case 2:
        return e3.xmin >= s2 && e3.xmax > s2 ? 0 : e3.xmax <= s2 ? e3.xmin === s2 ? 2 : 1 : -1;
      case 3:
        return e3.ymin >= s2 && e3.ymax > s2 ? 0 : e3.ymax <= s2 ? e3.ymin === s2 ? 2 : 1 : -1;
    }
    return b(""), 0;
  }
  static checkSegmentIntersectionLoose(e3, t2, s2) {
    switch (t2) {
      case 0: {
        const t3 = Math.abs(e3.xmin - s2), i2 = Math.abs(e3.xmax - s2);
        return e3.xmin < s2 ? t3 > i2 ? 0 : 1 : (b(""), 1);
      }
      case 1: {
        const t3 = Math.abs(e3.ymin - s2), i2 = Math.abs(e3.ymax - s2);
        return e3.ymin < s2 ? t3 > i2 ? 0 : 1 : (b(""), 1);
      }
      case 2: {
        const t3 = Math.abs(e3.xmin - s2), i2 = Math.abs(e3.xmax - s2);
        return e3.xmax > s2 ? t3 < i2 ? 0 : 1 : (b(""), 1);
      }
      case 3: {
        const t3 = Math.abs(e3.ymin - s2), i2 = Math.abs(e3.ymax - s2);
        return e3.ymax > s2 ? t3 < i2 ? 0 : 1 : (b(""), 1);
      }
    }
    return b(""), 0;
  }
  resolveBoundaryOverlaps() {
    this.m_verticesOnExtentIndex = -1, this.splitSegments(false, this.m_extent.xmin), this.splitSegments(false, this.m_extent.xmax), this.splitSegments(true, this.m_extent.ymin), this.splitSegments(true, this.m_extent.ymax), this.m_verticesOnExtent.length = 0, this.m_verticesOnExtentIndex = this.m_shape.createUserIndex();
    const e3 = new mi();
    for (let t2 = this.m_shape.getFirstPath(this.m_geometry); t2 !== gr; t2 = this.m_shape.getNextPath(t2)) {
      let s2 = this.m_shape.getFirstVertex(t2);
      for (let i2 = 0, n5 = this.m_shape.getPathSize(t2); i2 < n5; i2++, s2 = this.m_shape.getNextVertex(s2)) this.progress_(), this.m_shape.queryXY(s2, e3), this.m_extent.xmin !== e3.x && this.m_extent.xmax !== e3.x && this.m_extent.ymin !== e3.y && this.m_extent.ymax !== e3.y || (this.m_shape.setUserIndex(s2, this.m_verticesOnExtentIndex, this.m_verticesOnExtent.length), this.m_verticesOnExtent.push(s2));
    }
    this.dbgCheckPathFirst(), this.resolveOverlaps(false, this.m_extent.xmin), this.dbgCheckPathFirst(), this.resolveOverlaps(false, this.m_extent.xmax), this.dbgCheckPathFirst(), this.resolveOverlaps(true, this.m_extent.ymin), this.dbgCheckPathFirst(), this.resolveOverlaps(true, this.m_extent.ymax), this.fixPaths();
  }
  densifyAlongClipExtent(e3) {
    const t2 = new mi(0, 0), s2 = new mi(0, 0), i2 = Yt(2048, Number.NaN);
    for (let n5 = this.m_shape.getFirstPath(this.m_geometry); n5 !== gr; n5 = this.m_shape.getNextPath(n5)) {
      const m2 = this.m_shape.getFirstVertex(n5);
      let a2 = m2;
      do {
        const n6 = this.m_shape.getNextVertex(a2);
        this.m_shape.queryXY(a2, t2);
        let m3 = -1;
        if (t2.x === this.m_extent.xmin ? (this.m_shape.queryXY(n6, s2), s2.x === this.m_extent.xmin && (m3 = 1)) : t2.x === this.m_extent.xmax && (this.m_shape.queryXY(n6, s2), s2.x === this.m_extent.xmax && (m3 = 1)), t2.y === this.m_extent.ymin ? (this.m_shape.queryXY(n6, s2), s2.y === this.m_extent.ymin && (m3 = 0)) : t2.y === this.m_extent.ymax && (this.m_shape.queryXY(n6, s2), s2.y === this.m_extent.ymax && (m3 = 0)), -1 === m3) {
          a2 = n6;
          continue;
        }
        if (this.isCurve(a2)) {
          a2 = n6;
          continue;
        }
        const o2 = t2.clone(), x3 = new mi(0, 0);
        if (m3) {
          const i3 = t2.y - this.m_extent.ymin;
          x3.y = K(s2.y - t2.y), o2.y = e3 * B2(Math.floor(Math.abs(i3) / e3), i3) + this.m_extent.ymin, x3.y < 0 && (o2.y += e3);
        } else {
          const i3 = t2.x - this.m_extent.xmin;
          x3.x = K(s2.x - t2.x), o2.x = e3 * B2(Math.floor(Math.abs(i3) / e3), i3) + this.m_extent.xmin, x3.x < 0 && (o2.x += e3);
        }
        const p3 = m3 ? s2.y - t2.y : s2.x - t2.x, c = Math.abs(p3);
        if (c / e3 > 65536 && b(""), c > 0) {
          const s3 = Math.trunc(c / e3) + 2;
          i2.length < s3 && (i2.length = s3);
          let n7 = 0;
          for (let h2 = 0; ; h2++) {
            const s4 = o2.add(x3.mul(h2 * e3)), a3 = (m3 ? s4.y - t2.y : s4.x - t2.x) / p3;
            if (a3 >= 1) break;
            a3 <= 0 || (n(n7 <= i2.length), i2[n7] = a3, n7++);
          }
          0 !== n7 && this.m_shape.splitSegment(a2, i2, n7);
        }
        a2 = n6;
      } while (a2 !== m2);
    }
  }
  splitSegments(e3, t2) {
    let s2 = -1;
    const i2 = new mi(), n5 = [];
    for (let _ = this.m_shape.getFirstPath(this.m_geometry); _ !== gr; _ = this.m_shape.getNextPath(_)) {
      let r2 = this.m_shape.getFirstVertex(_), h3 = gr;
      for (let m3 = 0, a3 = this.m_shape.getPathSize(_); m3 < a3; m3++, r2 = h3) if (this.progress_(), h3 = this.m_shape.getNextVertex(r2), this.m_shape.queryXY(r2, i2), (e3 ? i2.y === t2 : i2.x === t2) && (this.m_shape.queryXY(h3, i2), e3 ? i2.y === t2 : i2.x === t2)) {
        if (this.isCurve(r2)) continue;
        -1 === s2 && (s2 = this.m_shape.createUserIndex()), 1 !== this.m_shape.getUserIndex(r2, s2) && (n5.push(r2), this.m_shape.setUserIndex(r2, s2, 1)), 1 !== this.m_shape.getUserIndex(h3, s2) && (n5.push(h3), this.m_shape.setUserIndex(h3, s2, 1));
      }
    }
    if (-1 !== s2 && this.m_shape.removeUserIndex(s2), n5.length < 3) return;
    n5.sort((e4, t3) => this.compareVertices(e4, t3));
    const r = new mi(), h2 = new mi(), m2 = new mi();
    h2.setNAN();
    let a2 = -1;
    let o2 = [], p3 = [];
    const c = this.m_shape.createUserIndex(), l2 = this.m_shape.createUserIndex();
    for (let x3 = 0, _ = n5.length; x3 < _; x3++) {
      const s3 = n5[x3];
      if (this.m_shape.queryXY(s3, i2), !i2.isEqualPoint2D(h2)) {
        if (-1 === a2) {
          a2 = x3, h2.setCoordsPoint2D(i2);
          continue;
        }
        for (let i3 = a2; i3 < x3; i3++) {
          const s5 = n5[i3], m3 = this.m_shape.getNextVertex(s5), a3 = this.m_shape.getPrevVertex(s5);
          let x4 = false;
          this.m_shape.queryXY(m3, r), h2.compare(r) < 0 && (e3 ? r.y === t2 : r.x === t2) && (this.isCurve(s5) || (o2.push(s5), x4 = true, this.m_shape.setUserIndex(s5, l2, 1))), this.m_shape.queryXY(a3, r), h2.compare(r) < 0 && (e3 ? r.y === t2 : r.x === t2) && (this.isCurve(a3) || (x4 || o2.push(s5), this.m_shape.setUserIndex(s5, c, 1)));
        }
        for (let e4 = 0, t3 = o2.length; e4 < t3; e4++) {
          const t4 = o2[e4], s5 = this.m_shape.getUserIndex(t4, c), n6 = this.m_shape.getUserIndex(t4, l2);
          if (1 === s5) {
            const e5 = this.m_shape.getPrevVertex(t4);
            this.m_shape.queryXY(e5, m2);
            let s6 = 0;
            if (!m2.isEqualPoint2D(i2)) {
              const n7 = mi.distance(h2, m2);
              s6 = mi.distance(m2, i2) / n7, 0 === s6 ? s6 = Number.EPSILON : 1 === s6 && (s6 = 1 - Number.EPSILON), this.m_shape.splitSegment(e5, [s6], 1);
              const r2 = this.m_shape.getPrevVertex(t4);
              this.m_shape.setXY(r2, i2), p3.push(r2), this.m_shape.setUserIndex(r2, c, 1), this.m_shape.setUserIndex(r2, l2, -1);
            }
          }
          if (1 === n6) {
            const e5 = this.m_shape.getNextVertex(t4);
            this.m_shape.queryXY(e5, m2);
            let s6 = 0;
            if (!m2.isEqualPoint2D(i2)) {
              const e6 = mi.distance(h2, m2);
              s6 = mi.distance(h2, i2) / e6, 0 === s6 ? s6 = Number.EPSILON : 1 === s6 && (s6 = 1 - Number.EPSILON), this.m_shape.splitSegment(t4, [s6], 1);
              const n7 = this.m_shape.getNextVertex(t4);
              this.m_shape.setXY(n7, i2), p3.push(n7), this.m_shape.setUserIndex(n7, c, -1), this.m_shape.setUserIndex(n7, l2, 1);
            }
          }
        }
        const s4 = o2;
        o2 = p3, p3 = s4, p3.length = 0, a2 = x3, h2.setCoordsPoint2D(i2);
      }
    }
    this.m_shape.removeUserIndex(c), this.m_shape.removeUserIndex(l2);
  }
  resolveOverlaps(e3, t2) {
    const s2 = new mi(), i2 = [];
    let n5 = -1;
    for (let r = 0, o2 = this.m_verticesOnExtent.length; r < o2; r++) {
      this.progress_();
      const h3 = this.m_verticesOnExtent[r];
      if (h3 === gr) continue;
      const m3 = this.m_shape.getNextVertex(h3);
      if (this.m_shape.queryXY(h3, s2), (e3 ? s2.y === t2 : s2.x === t2) && (this.m_shape.queryXY(m3, s2), e3 ? s2.y === t2 : s2.x === t2)) {
        if (this.isCurve(h3)) continue;
        -1 === n5 && (n5 = this.m_shape.createUserIndex()), -2 !== this.m_shape.getUserIndex(h3, n5) && (i2.push(h3), this.m_shape.setUserIndex(h3, n5, -2)), -2 !== this.m_shape.getUserIndex(m3, n5) && (i2.push(m3), this.m_shape.setUserIndex(m3, n5, -2));
      }
    }
    if (0 === i2.length) return void (-1 !== n5 && this.m_shape.removeUserIndex(n5));
    n(-1 !== n5), i2.sort((e4, t3) => this.compareVertices(e4, t3));
    for (let r = 0, o2 = i2.length; r < o2; r++) {
      const e4 = i2[r];
      this.m_shape.setUserIndex(e4, n5, r);
    }
    const h2 = new mi(), m2 = new mi();
    m2.setNAN();
    let a2 = -1;
    for (let r = 0, o2 = i2.length; r < o2; r++) {
      this.progress_();
      const o3 = i2[r];
      if (o3 !== gr && (this.m_shape.queryXY(o3, s2), !s2.isEqualPoint2D(m2))) {
        if (-1 !== a2) for (; ; ) {
          let s3 = false;
          const o4 = r;
          for (let p3 = a2; p3 < o4; p3++) {
            const a3 = i2[p3];
            if (a3 === gr) continue;
            let o5 = gr;
            const c = this.m_shape.getNextVertex(a3);
            this.m_shape.queryXY(c, h2), m2.compare(h2) < 0 && (e3 ? h2.y === t2 : h2.x === t2) && (this.isCurve(a3) || (o5 = c));
            let l2 = gr;
            const _ = this.m_shape.getPrevVertex(a3);
            if (this.m_shape.queryXY(_, h2), m2.compare(h2) < 0 && (e3 ? h2.y === t2 : h2.x === t2) && (this.isCurve(_) || (l2 = _)), o5 === gr || l2 === gr) {
              if (o5 !== gr || l2 !== gr) {
                for (let c2 = p3 + 1; c2 < r; c2++) {
                  const r2 = i2[c2];
                  if (r2 === gr) continue;
                  const p4 = this.m_shape.getNextVertex(r2);
                  let _2 = gr;
                  this.m_shape.queryXY(p4, h2), m2.compare(h2) < 0 && (e3 ? h2.y === t2 : h2.x === t2) && (this.isCurve(r2) || (_2 = p4));
                  const u = this.m_shape.getPrevVertex(r2);
                  let g = gr;
                  if (this.m_shape.queryXY(u, h2), m2.compare(h2) < 0 && (e3 ? h2.y === t2 : h2.x === t2) && (this.isCurve(u) || (g = u)), _2 !== gr && g !== gr) {
                    this.beforeRemoveVertex(r2, i2, n5), this.m_shape.removeVertex(r2, false), this.beforeRemoveVertex(_2, i2, n5), this.m_shape.removeVertex(_2, false), s3 = true;
                    break;
                  }
                  if (o5 !== gr && g !== gr) {
                    this.removeOverlap(i2, a3, o5, r2, g, n5), s3 = true;
                    break;
                  }
                  if (l2 !== gr && _2 !== gr) {
                    this.removeOverlap(i2, r2, _2, a3, l2, n5), s3 = true;
                    break;
                  }
                }
                if (s3) break;
              }
            } else this.beforeRemoveVertex(a3, i2, n5), this.m_shape.removeVertex(a3, false), this.beforeRemoveVertex(o5, i2, n5), this.m_shape.removeVertex(o5, false), s3 = true;
          }
          if (!s3) break;
        }
        a2 = r, m2.setCoordsPoint2D(s2);
      }
    }
    this.m_shape.removeUserIndex(n5);
  }
  beforeRemoveVertex(e3, t2, s2) {
    let i2 = this.m_shape.getUserIndex(e3, s2);
    n(i2 >= 0), t2[i2] = gr, i2 = this.m_shape.getUserIndex(e3, this.m_verticesOnExtentIndex), n(i2 >= 0), this.m_verticesOnExtent[i2] = gr;
    const n5 = this.m_shape.getPathFromVertex(e3);
    if (n5 !== gr) {
      this.m_shape.getFirstVertex(n5) === e3 && (this.m_shape.setFirstVertex(n5, gr), this.m_shape.setLastVertex(n5, gr));
    }
  }
  removeOverlap(e3, t2, s2, i2, n5, r) {
    this.m_shape.setNextVertex(t2, i2), this.m_shape.setPrevVertex(i2, t2), this.m_shape.setPrevVertex(s2, n5), this.m_shape.setNextVertex(n5, s2), this.beforeRemoveVertex(i2, e3, r), this.m_shape.removeVertexInternal(i2, false), this.beforeRemoveVertex(n5, e3, r), this.m_shape.removeVertexInternal(n5, true);
  }
  removeSpikesAlongPoles() {
    this.removeSpikesOnPole(this.m_extent.ymin), this.removeSpikesOnPole(this.m_extent.ymax);
  }
  removeSpikesOnPole(e3) {
    for (let t2 = this.m_shape.getFirstPath(this.m_geometry); t2 !== gr; t2 = this.m_shape.getNextPath(t2)) {
      const s2 = this.m_shape.getPathSize(t2);
      if (s2 < 3) continue;
      let i2 = this.m_shape.getFirstVertex(t2);
      const n5 = new mi();
      this.m_shape.queryXY(i2, n5);
      let r = n5.y === e3 && !this.isCurve(i2);
      i2 = this.m_shape.getNextVertex(i2);
      const h2 = new mi();
      this.m_shape.queryXY(i2, h2);
      let m2 = h2.y === e3 && !this.isCurve(i2);
      i2 = this.m_shape.getNextVertex(i2);
      const a2 = new mi();
      for (let t3 = 0, o2 = s2 - 2; t3 < o2; t3++, i2 = this.m_shape.getNextVertex(i2)) {
        this.progress_(), this.m_shape.queryXY(i2, a2);
        const t4 = a2.y === e3;
        if (m2 && r && t4) {
          if ((h2.x - n5.x) * (a2.x - h2.x) <= 0) {
            this.m_shape.removeVertex(this.m_shape.getPrevVertex(i2), false), h2.setCoordsPoint2D(a2), m2 = t4 && !this.isCurve(i2);
            continue;
          }
        }
        n5.setCoordsPoint2D(h2), r = m2, h2.setCoordsPoint2D(a2), m2 = t4 && !this.isCurve(i2);
      }
    }
  }
  fixPaths() {
    for (let n5 = 0, r = this.m_verticesOnExtent.length; n5 < r; n5++) {
      const e4 = this.m_verticesOnExtent[n5];
      e4 !== gr && this.m_shape.setPathToVertex(e4, gr);
    }
    const e3 = this.m_shape.hasCurves();
    let t2 = 0, s2 = 0;
    for (let n5 = this.m_shape.getFirstPath(this.m_geometry); n5 !== gr; ) {
      const e4 = this.m_shape.getFirstVertex(n5);
      if (e4 === gr || n5 !== this.m_shape.getPathFromVertex(e4)) {
        const e5 = n5;
        n5 = this.m_shape.getNextPath(n5), this.m_shape.setFirstVertex(e5, gr), this.m_shape.removePathOnly(e5);
        continue;
      }
      let i3 = e4, r = 0;
      do {
        this.m_shape.setPathToVertex(i3, n5), r++, i3 = this.m_shape.getNextVertex(i3);
      } while (i3 !== e4);
      this.m_shape.setRingAreaValid(n5, false), this.m_shape.setLastVertex(n5, this.m_shape.getPrevVertex(e4)), this.m_shape.setPathSize(n5, r), s2 += r, t2++, n5 = this.m_shape.getNextPath(n5);
    }
    for (let n5 = 0, h2 = this.m_verticesOnExtent.length; n5 < h2; n5++) {
      let i3 = this.m_verticesOnExtent[n5];
      if (i3 === gr) continue;
      let h3 = this.m_shape.getPathFromVertex(i3);
      if (h3 !== gr) continue;
      h3 = this.m_shape.insertPath(this.m_geometry, gr);
      let m2 = false, a2 = 0;
      const o2 = i3;
      do {
        this.m_shape.setPathToVertex(i3, h3), a2++, e3 && a2 <= 2 && (m2 ||= this.isCurve(i3)), i3 = this.m_shape.getNextVertex(i3);
      } while (i3 !== o2);
      if (m2 ? 0 === a2 : a2 <= 2) {
        let e4 = this.m_shape.getUserIndex(o2, this.m_verticesOnExtentIndex);
        n(e4 >= 0), this.m_verticesOnExtent[e4] = gr;
        const t3 = this.m_shape.removeVertex(o2, false);
        2 === a2 && (e4 = this.m_shape.getUserIndex(t3, this.m_verticesOnExtentIndex), e4 >= 0 && (this.m_verticesOnExtent[e4] = gr), this.m_shape.removeVertex(t3, false));
        const s3 = h3;
        h3 = this.m_shape.getNextPath(h3), this.m_shape.setFirstVertex(s3, gr), this.m_shape.removePathOnly(s3);
        continue;
      }
      this.m_shape.setClosedPath(h3, true), this.m_shape.setPathSize(h3, a2), this.m_shape.setFirstVertex(h3, o2), this.m_shape.setLastVertex(h3, this.m_shape.getPrevVertex(o2)), this.m_shape.setRingAreaValid(h3, false), s2 += a2, t2++;
    }
    this.m_shape.setGeometryPathCount(this.m_geometry, t2), this.m_shape.setGeometryVertexCount(this.m_geometry, s2);
    let i2 = 0;
    for (let n5 = this.m_shape.getFirstGeometry(); n5 !== gr; n5 = this.m_shape.getNextGeometry(n5)) i2 += this.m_shape.getPointCount(n5);
    this.m_shape.setTotalPointCount(i2);
  }
  dbgCheckPathFirst() {
  }
  isCurve(e3) {
    return null !== this.m_shape.getSegment(e3);
  }
  compareVertices(e3, t2) {
    const s2 = new mi();
    this.m_shape.queryXY(e3, s2);
    const i2 = new mi();
    this.m_shape.queryXY(t2, i2);
    return s2.compare(i2);
  }
  clipPolesOut(e3, t2) {
    return this.clipPolygonOrProjectedPolyline2(e3, t2);
  }
};
var I3 = class {
  getOperatorType() {
    return 10004;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e3, t2, s2) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  executeMany(e3, t2, s2, i2) {
    return new V(e3, t2, s2, i2);
  }
  execute(e3, t2, s2, i2) {
    return X2(e3, t2, s2, i2);
  }
};
var V = class extends s {
  constructor(e3, s2, i2, n5) {
    super(), this.m_progressTracker = n5, this.m_index = -1, e3 || P(""), this.m_envelope = s2, this.m_inputGeometryCursor = e3, this.m_spatialRefImpl = i2, this.m_tolerance = qt2(i2, s2, false).total();
  }
  next() {
    let e3;
    return (e3 = this.m_inputGeometryCursor.next()) ? (j(e3), this.m_index = this.m_inputGeometryCursor.getGeometryID(), f2(e3, this.m_envelope, this.m_tolerance, 0, this.m_progressTracker)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
function X2(e3, t2, s2, i2) {
  return v(e3, t2, s2, Number.NaN, 0, i2);
}

// node_modules/@arcgis/core/chunks/OperatorDensify.js
var n4 = Zh;
var i = class extends s {
  constructor(e3, t2, r, s2, i2, o2) {
    super(), this.m_densificator = new n4(t2, r, s2, o2, false, i2), this.m_index = -1, this.m_inputGeoms = e3;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    let e3 = null;
    for (; e3 = this.m_inputGeoms.next(); ) return j(e3), this.m_index = this.m_inputGeoms.getGeometryID(), this.densify(e3);
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  densify(e3) {
    return this.m_densificator.densify(e3);
  }
};
var o = class {
  getOperatorType() {
    return 10202;
  }
  accelerateGeometry(e3, t2, r) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  executeMany(e3, t2, r, s2, n5, o2 = 12e3) {
    return new i(e3, t2, r, s2, o2, n5);
  }
  execute(e3, t2, s2, n5, i2, o2 = 12e3) {
    return Bh(e3, t2, s2, n5, i2, o2);
  }
};

// node_modules/@arcgis/core/chunks/SpatialReference.js
var ss = class _ss {
  constructor(e3) {
    if (this.m_geom = this.m_sr = null, e3) {
      if (e3.move) return this.m_geom = e3.move.m_geom, e3.move.m_geom = null, this.m_sr = e3.move.m_sr, void (e3.move.m_sr = null);
      if (e3.copy) return this.m_geom = e3.copy.m_geom ? e3.copy.m_geom.clone() : null, void (this.m_sr = e3.copy.m_sr);
      e3.geom && (this.m_geom = e3.geom), e3.sr && (this.m_sr = e3.sr);
    }
  }
  getGeometry() {
    return this.m_geom;
  }
  getSpatialReference() {
    return this.m_sr;
  }
  setGeometry(e3) {
    this.m_geom = e3;
  }
  setSpatialReference(e3) {
    this.m_sr = e3;
  }
  equals(e3, t2) {
    const s2 = e3;
    return !(!this.m_sr && s2.m_sr) && (!(this.m_sr && !s2.m_sr) && (!(!this.m_geom && s2.m_geom) && (!(this.m_geom && !s2.m_geom) && (!(this.m_sr && s2.m_sr && !this.m_sr.equals(s2.m_sr)) && !(this.m_geom && s2.m_geom && !this.m_geom.equals(s2.m_geom, t2))))));
  }
  clone() {
    let e3 = null;
    return this.m_geom && (e3 = this.m_geom.clone()), new _ss({ geom: e3, sr: this.m_sr });
  }
  hasGeom() {
    return !!this.m_geom;
  }
};
var ns = class {
  constructor(e3) {
    this.m_factor = 1, this.m_wkid = 0, this.m_peUnit = null, e3 && (this.m_peUnit = e3, this.m_factor = e3.getUnitFactor(), this.m_wkid = e3.getCode(), this.m_wkid < 0 && (this.m_wkid = 0));
  }
  getName() {
    return this.m_peUnit ? this.m_peUnit.getName() : "";
  }
  getID() {
    return this.m_wkid;
  }
  getConversionFactor(e3) {
    return this.getUnitType() !== e3.getUnitType() && P("unit type mismatch"), this.getUnitToBaseFactor() / e3.getUnitToBaseFactor();
  }
  getUnitToBaseFactor() {
    return this.m_factor;
  }
  getHashCode() {
    return As(Zs(this.getUnitType()), Zs(this.getUnitToBaseFactor()));
  }
  equals(e3) {
    return !!e3 && (this.getUnitType() === e3.getUnitType() && this.getUnitToBaseFactor() === e3.getUnitToBaseFactor() && this.getID() === e3.getID() && this.getName() === e3.getName());
  }
  static isValidWkid(e3) {
    return false;
  }
};
var rs3 = { 330: 104878, 500: 104879, 1300: 104899, 1450: 104986, 2230: 104988, 3800: 104978, 5e3: 104919, 6200: 104906, 8200: 104909, 9500: 104927, 9600: 104977, 1e4: [104911, 104936], 11e3: 104941, 11080: 104872, 11100: 104907, 12e3: 104920, 12400: 104995, 13e3: 104948, 14e3: [104923, 104989], 15e3: [104913, 104954], 15100: 104976, 16e3: [104926, 104931], 18e3: [104922, 104982], 21e3: 104947, 21500: 104877, 27e3: [104950, 104957], 29e3: 104964, 3e4: 104921, 31e3: 104949, 33e3: 104946, 4e4: [104914, 104967], 40600: 104897, 41900: 104937, 42e3: 104951, 43100: 104993, 49300: 104924, 50100: 104939, 54e3: 104955, 58200: 104981, 59500: 104930, 74e3: 104961, 77e3: 104956, 79e3: 104962, 83500: 104910, 85e3: 104917, 88800: 104934, 89200: 104985, 96e3: 104997, 104e3: 104963, 106500: 104898, 11e4: 104938, 133e3: 104932, 135e3: 104983, 17e4: 104965, 198200: 104987, 198630: 104935, 208e3: 104966, 235800: 104952, 249400: 104929, 252100: 104980, 255e3: 104973, 47e4: 104972, 529800: 104942, 531e3: 104996, 56e4: 104928, 561400: 104979, 578900: 104945, 584700: 104959, 593e3: 104970, 606e3: 104999, 718e3: 104933, 745700: 104984, 761400: 104953, 763500: 104994, 764e3: 104940, 788900: 104958, 1188300: 104998, 1195e3: 104969, 1352600: 104968, 1560800: 104874, 1562090: 104915, 1737400: 104903, 1821460: 104918, 1821490: 104876, 2409300: 104912, 2410300: 104873, 2439400: 104974, 2439700: 104900, 2575e3: 104943, 2631200: 104875, 2632345: 104916, 3393400: 104904, 3396190: [104905, 104971], 6051e3: 104901, 6051800: 104902, 637e4: 104128, 6370997: [4052, 37008], 6371e3: 4035, 6371007: 4047, 6371228: [4053, 10346], 6376045: [8042, 8043], 6376523: [4027, 4901, 4902], 6376896: 37007, 6378135: [4122, 4322, 4324, 4720, 4985, 4987], 6378136: [4740, 4923, 7678, 7680, 9474, 9475, 104017, 104018], 6378137: [3823, 3824, 3888, 3889, 4017, 4019, 4023, 4031, 4040, 4046, 4055, 4074, 4075, 4080, 4081, 4121, 4126, 4130, 4133, 4140, 4141, 4148, 4151, 4152, 4163, 4166, 4167, 4170, 4171, 4172, 4173, 4176, 4180, 4189, 4190, 4258, 4269, 4283, 4318, 4319, 4326, 4463, 4466, 4469, 4470, 4480, 4482, 4483, 4490, 4557, 4558, 4612, 4617, 4619, 4624, 4627, 4659, 4661, 4667, 4669, 4670, 4674, 4686, 4687, 4693, 4694, 4702, 4737, 4742, 4747, 4749, 4750, 4755, 4756, 4757, 4758, 4759, 4761, 4762, 4763, 4764, 4765, 4883, 4885, 4887, 4889, 4893, 4895, 4898, 4907, 4909, 4921, 4925, 4927, 4929, 4931, 4933, 4935, 4937, 4939, 4941, 4943, 4945, 4947, 4949, 4951, 4953, 4955, 4957, 4959, 4961, 4963, 4965, 4967, 4971, 4975, 4977, 4979, 4981, 4983, 4989, 4997, 4999, 5012, 5013, 5245, 5246, 5251, 5252, 5263, 5264, 5323, 5324, 5340, 5342, 5353, 5354, 5359, 5360, 5364, 5365, 5370, 5371, 5372, 5373, 5380, 5381, 5392, 5393, 5488, 5489, 5545, 5546, 5592, 5593, 5885, 5886, 6134, 6135, 6310, 6311, 6318, 6319, 6321, 6322, 6324, 6325, 6364, 6365, 6667, 6668, 6705, 6706, 6782, 6783, 6980, 6982, 6983, 6987, 6989, 6990, 7034, 7035, 7036, 7037, 7038, 7039, 7040, 7041, 7042, 7072, 7073, 7084, 7085, 7086, 7087, 7133, 7135, 7136, 7138, 7139, 7372, 7373, 7657, 7659, 7661, 7663, 7665, 7685, 7686, 7797, 7798, 7816, 7843, 7844, 7880, 7881, 7885, 7886, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7915, 7917, 7919, 7921, 7923, 7925, 7927, 7929, 7931, 8085, 8086, 8231, 8232, 8235, 8237, 8239, 8240, 8244, 8246, 8248, 8249, 8251, 8252, 8254, 8255, 8399, 8403, 8426, 8427, 8449, 8542, 8544, 8545, 8684, 8685, 8698, 8699, 8817, 8818, 8860, 8888, 8899, 8900, 8901, 8902, 8906, 8907, 8916, 8918, 8920, 8922, 8924, 8926, 8928, 8930, 8932, 8934, 8936, 8938, 8940, 8942, 8944, 8946, 8948, 8949, 8972, 8973, 8974, 8975, 8976, 8977, 8978, 8979, 8980, 8981, 8982, 8983, 8984, 8985, 8986, 8987, 8988, 8989, 8990, 8991, 8992, 8993, 8994, 8995, 8996, 8997, 8998, 8999, 9e3, 9002, 9003, 9005, 9006, 9008, 9009, 9011, 9012, 9013, 9014, 9016, 9017, 9018, 9019, 9053, 9054, 9055, 9056, 9057, 9059, 9060, 9061, 9062, 9063, 9064, 9065, 9066, 9067, 9068, 9069, 9071, 9072, 9074, 9075, 9139, 9140, 9147, 9148, 9152, 9153, 9183, 9184, 9293, 9294, 9299, 9308, 9309, 9332, 9333, 9364, 9372, 9379, 9380, 9384, 9453, 9469, 9470, 9546, 9547, 9695, 9696, 9701, 9702, 9739, 9754, 9755, 9758, 9763, 9776, 9777, 9778, 9779, 9781, 9782, 9783, 9784, 9866, 9871, 9939, 9964, 9969, 9974, 9989, 9990, 10175, 10177, 10178, 10185, 10191, 10196, 10204, 10209, 10214, 10219, 10224, 10229, 10237, 10272, 10277, 10283, 10284, 10298, 10299, 10300, 10304, 10305, 10307, 10309, 10310, 10311, 10312, 10327, 10328, 10413, 10414, 10468, 10474, 10475, 10570, 10571, 10605, 10606, 10623, 10628, 10638, 10639, 10670, 10671, 10672, 10673, 10689, 10690, 10724, 10725, 10738, 10739, 10761, 10762, 10780, 10781, 10784, 10785, 10790, 10791, 10799, 10800, 10830, 10831, 10849, 10860, 10909, 10910, 10940, 10941, 10951, 10952, 10955, 10956, 10958, 10959, 20033, 20040, 20041, 20045, 20046, 104009, 104010, 104011, 104012, 104013, 104014, 104015, 104016, 104019, 104020, 104021, 104022, 104024, 104027, 104028, 104030, 104031, 104033, 104048, 104049, 104050, 104100, 104107, 104108, 104110, 104111, 104114, 104115, 104116, 104117, 104118, 104119, 104120, 104121, 104122, 104123, 104124, 104129, 104133, 104134, 104137, 104141, 104142, 104143, 104144, 104145, 104179, 104180, 104181, 104182, 104183, 104184, 104185, 104186, 104199, 104220, 104221, 104223, 104257, 104258, 104259, 104260, 104286, 104287, 104602, 104613, 104644, 104645, 104646, 104647, 104653, 104804, 104896, 104991], 6378140: 4610, 6378145: [4025, 4276, 4760, 4891, 37001], 6378150: 37003, 6378155: [37004, 37207], 6378160: [3821, 4003, 4021, 4036, 4202, 4203, 4237, 4238, 4291, 4618, 4708, 5527, 37231, 104023, 104136], 6378166: 37002, 6378200: [4020, 4229, 4286, 4303, 4706], 6378245: [4024, 4147, 4164, 4178, 4179, 4191, 4200, 4205, 4214, 4284, 4317, 4555, 4676, 4677, 4678, 4991, 4993, 5560, 5561, 37257, 104135], 6378270: [4732, 37005, 37229], 6378273: [4054, 10345], 6378300: [4029, 4168, 4174], 6378388: [4022, 4123, 4153, 4154, 4158, 4159, 4160, 4161, 4165, 4181, 4182, 4183, 4184, 4185, 4192, 4194, 4195, 4196, 4199, 4204, 4207, 4208, 4215, 4218, 4221, 4224, 4225, 4230, 4231, 4233, 4235, 4236, 4247, 4248, 4249, 4254, 4255, 4259, 4264, 4265, 4271, 4272, 4274, 4285, 4287, 4288, 4292, 4297, 4309, 4311, 4313, 4316, 4472, 4475, 4611, 4614, 4615, 4616, 4621, 4622, 4623, 4625, 4626, 4628, 4629, 4630, 4631, 4632, 4633, 4636, 4637, 4639, 4641, 4642, 4643, 4644, 4645, 4646, 4658, 4660, 4662, 4663, 4664, 4665, 4668, 4672, 4673, 4684, 4688, 4689, 4690, 4691, 4692, 4698, 4704, 4705, 4707, 4709, 4710, 4711, 4712, 4714, 4715, 4716, 4718, 4719, 4721, 4722, 4724, 4725, 4727, 4728, 4729, 4730, 4733, 4734, 4735, 4739, 4741, 4753, 4754, 4802, 4803, 4806, 4809, 4810, 4823, 4824, 4900, 5524, 6883, 8428, 8430, 8431, 9248, 9251, 9253, 9403, 9893, 10158, 10249, 10252, 10635, 10636, 10735, 10736, 10758, 37e3, 37201, 37204, 37205, 37212, 37213, 37214, 37215, 37216, 37217, 37218, 37219, 37221, 37222, 37224, 37226, 37227, 37230, 37232, 37233, 37234, 37235, 37237, 37238, 37241, 37242, 37245, 37246, 37247, 37249, 37250, 37251, 37253, 37259, 104104, 104106, 104125, 104126, 104127, 104130, 104138, 104248], 6378523: 104786, 24764e3: 104960, 25559e3: 104944, 60268e3: 104925, 71492e3: 104908, 6957e5: 104975, 6377397155e-3: [3819, 3906, 4004, 4120, 4124, 4125, 4149, 4150, 4156, 4162, 4211, 4219, 4257, 4262, 4280, 4289, 4294, 4295, 4301, 4306, 4308, 4312, 4314, 4613, 4666, 4745, 4746, 4801, 4804, 4805, 4808, 4813, 4814, 4815, 4818, 4820, 4904, 5132, 5228, 5229, 5681, 5830, 8351, 9267, 10268, 10898, 37255, 104101, 104102, 104105, 104131, 104648, 104696, 104697, 104990, 104992], 6377563396e-3: [4001, 4188, 4277, 4278, 4279], 6377340189e-3: [4002, 4299, 4300], 6377492018e-3: [4005, 4273, 4817], 6377483865280418e-9: [4006, 4293], 6378293645208759e-9: [4007, 4157, 4302, 4738, 5464], 63782064e-1: [4008, 4127, 4128, 4129, 4135, 4136, 4137, 4138, 4139, 4169, 4216, 4242, 4253, 4267, 4608, 4609, 4638, 4675, 4683, 4695, 4717, 4723, 4726, 4995, 5451, 5467, 37220, 37239, 37243, 37252, 37260, 104e3, 104109, 104112, 104113, 104132], 6378450047e-3: [4009, 4268], 6378300789e-3: [4010, 4281], 63782492e-1: [4011, 4014, 4155, 4193, 4206, 4213, 4223, 4226, 4227, 4228, 4252, 4261, 4266, 4275, 4282, 4296, 4304, 4310, 4315, 4671, 4807, 4811, 4816, 4821, 37223, 37225, 104139, 104140, 104261, 104304], 6378249145e-3: [4012, 4013, 4132, 4134, 4142, 4143, 4175, 4197, 4198, 4201, 4209, 4210, 4212, 4220, 4222, 4232, 4234, 4246, 4250, 4251, 4256, 4260, 4263, 4270, 4305, 4307, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4620, 4679, 4680, 4696, 4697, 4699, 4700, 4701, 4703, 4713, 4731, 4736, 4743, 4744, 4812, 4819, 6881, 6882, 6892, 6894, 8694, 37206, 37208, 37211, 37228, 37240, 37254, 104025, 104026, 104032, 104103, 104305], 6377276345e-3: [4015, 4131, 4144, 4239, 4240, 4244, 4682, 5233, 6207, 37202, 104256, 104664, 104693], 6377298556e-3: [4016, 4298], 6377304063e-3: [4018, 4245], 63782983e-1: [4028, 4903], 63781362e-1: 4032, 63781363e-1: 4033, 6378249144808011e-9: [4034, 4241], 209229318e-1: [4042, 4243], 6377301243e-3: [4044, 4145, 37203], 6377299151e-3: [4045, 4146], 637701927e-2: [4657, 10256, 10260, 10265], 63783063696e-4: [4748, 4752], 6377295664e-3: [4751, 37006], 63781365e-1: [7682, 7683], 63710087714e-4: 104047, 6378418941e-3: [104700, 104726, 104760], 6378586581e-3: [104701, 104743], 6378505809e-3: 104702, 6378544823e-3: 104703, 6378490569e-3: 104704, 6378470757e-3: [104705, 104776], 6378403701e-3: [104706, 104750], 6378434181e-3: [104707, 104724, 104739, 104764], 6378454907e-3: 104708, 6378400653e-3: 104709, 6378567378e-3: 104710, 6378546957e-3: [104711, 104717, 104780], 6378476853e-3: [104712, 104736], 6378411321e-3: [104713, 104728], 6378647541e-3: [104714, 104715], 6378514953e-3: [104716, 104782], 6378421989e-3: [104718, 104770], 6378481425e-3: [104719, 104753, 104774, 104781], 6378518001e-3: [104720, 104725], 6378521049e-3: [104721, 104723, 104731, 104745, 104748], 6378464661e-3: 104722, 6378436619e-3: 104727, 6378574389e-3: [104729, 104730], 6378472281e-3: [104732, 104756], 6378498189e-3: [104733, 104746], 6378449421e-3: [104734, 104766], 6378525621e-3: [104735, 104754], 6378466185e-3: 104737, 6378496665e-3: 104738, 6378643579e-3: 104740, 6378559758e-3: 104741, 6378414369e-3: [104742, 104763, 104772], 6378441801e-3: 104744, 6378502761e-3: [104747, 104759, 104773, 104775], 6378617061e-3: 104749, 6378624681e-3: [104751, 104765], 6378468623e-3: 104752, 6378445763e-3: [104755, 104758, 104761], 6378670401e-3: 104757, 6378438753e-3: 104762, 6378543909e-3: 104767, 6378605783e-3: 104768, 6378540861e-3: 104769, 6378443325e-3: [104771, 104784], 6378548481e-3: 104777, 6378463746e-3: 104778, 6378426561e-3: 104779, 6378453688e-3: 104783, 6378530193e-3: 104785, 6378376271e-3: [104800, 104828], 637847192e-2: 104801, 6378472931e-3: 104802, 6378411351e-3: 104803, 6378380991e-3: 104805, 637841496e-2: 104806, 637834509e-2: [104807, 104819, 104844, 104870], 6378412542e-3: 104808, 6378470401e-3: 104809, 6378376331e-3: 104810, 6378379031e-3: 104811, 6378407621e-3: 104812, 6378376811e-3: [104813, 104827], 637831392e-2: 104814, 637841493e-2: 104815, 6378413021e-3: 104816, 6378380381e-3: 104817, 6378530851e-3: 104818, 6378591521e-3: 104820, 6378378881e-3: 104821, 6378408481e-3: [104822, 104832], 6378375601e-3: [104823, 104838], 6378408041e-3: 104824, 6378655071e-3: 104825, 6378409151e-3: 104826, 63783157e-1: [104829, 104840, 104845, 104851], 637828586e-2: [104830, 104835, 104859], 6378379301e-3: 104831, 6378560121e-3: 104833, 6378531821e-3: 104834, 63785006e-1: 104836, 6378376041e-3: 104837, 6378406601e-3: 104839, 6378438991e-3: 104841, 637834542e-2: 104842, 637859386e-2: 104843, 6378381271e-3: [104846, 104847], 6378413671e-3: 104848, 6378344377e-3: 104849, 6378563891e-3: 104850, 6378408091e-3: 104852, 6378377671e-3: 104853, 6378472751e-3: 104854, 6378412511e-3: 104855, 6378407281e-3: 104856, 6378534451e-3: 104857, 6378406051e-3: 104858, 6378532921e-3: 104860, 6378380091e-3: 104861, 6378408941e-3: 104862, 6378624171e-3: 104863, 6378377411e-3: 104864, 6378474591e-3: 104865, 6378407141e-3: 104866, 6378376871e-3: 104867, 6378375251e-3: 104868, 6378405971e-3: 104869, 6378437651e-3: 104871 };
function is() {
  for (const e3 in rs3) delete rs3[e3];
}
var os = class extends ns {
  constructor(e3) {
    if ("number" == typeof e3) return super(), this.m_factor = e3, void (this.m_wkid = 0);
    super(e3);
  }
  getUnitType() {
    return 1;
  }
  convertFromRadians(e3) {
    return e3 / this.getUnitToBaseFactor();
  }
  convertToRadians(e3) {
    return e3 * this.getUnitToBaseFactor();
  }
};
function as(e3) {
  return new bu();
}
function hs(e3) {
  return e3.getType() === bc.PE_TYPE_LINUNIT ? new bu(e3) : e3.getType() === bc.PE_TYPE_ANGUNIT ? new os(e3) : void P("peUnit");
}
function ms2(e3) {
  const t2 = Hc(null);
  return e3.getType() === bc.PE_TYPE_PROJCS || e3.getType() === bc.PE_TYPE_GEOGCS ? t2.reset(e3.getUnit()) : P("PE_coord_sys"), t2.get() || b("cannot create units from coord sys"), hs(t2.get());
}
var ls2 = class _ls {
  constructor(e3, t2, s2) {
    void 0 === e3 ? (this.x = new p2(), this.y = new p2(), this.z = new p2()) : e3 instanceof X ? (this.x = new p2(e3.x), this.y = new p2(e3.y), this.z = new p2(e3.z)) : e3 instanceof p2 ? (this.x = e3.clone(), this.y = t2.clone(), this.z = s2.clone()) : P("EPoint3D constructor");
  }
  dotProduct(e3) {
    return this.x.mulE(e3.x).addE(this.y.mulE(e3.y)).addE(this.z.mulE(e3.z));
  }
  crossProduct(e3) {
    return new _ls(this.y.mulE(e3.z).subE(this.z.mulE(e3.y)), this.z.mulE(e3.x).subE(this.x.mulE(e3.z)), this.x.mulE(e3.y).subE(this.y.mulE(e3.x)));
  }
  crossProductVector(e3) {
    const t2 = this.y.mulE(e3.z).subE(e3.y.mulE(this.z)), s2 = e3.x.mulE(this.z).subE(this.x.mulE(e3.z)), n5 = this.x.mulE(e3.y).subE(e3.x.mulE(this.y));
    return new _ls(t2, s2, n5);
  }
  sqrLength() {
    return this.x.mulE(this.x).addE(this.y.mulE(this.y)).addE(this.z.mulE(this.z));
  }
  length() {
    return this.sqrLength().sqrt();
  }
  static distance(e3, t2) {
    return e3.sub(t2).length();
  }
  negate() {
    return new _ls(this.x.negate(), this.y.negate(), this.z.negate());
  }
  add(e3) {
    return new _ls(this.x.addE(e3.x), this.y.addE(e3.y), this.z.addE(e3.z));
  }
  sub(e3) {
    return new _ls(this.x.subE(e3.x), this.y.subE(e3.y), this.z.subE(e3.z));
  }
  subThis(e3) {
    return this.x.subThisE(e3.x), this.y.subThisE(e3.y), this.z.subThisE(e3.z), this;
  }
  addThis(e3) {
    return this.x.addThisE(e3.x), this.y.addThisE(e3.y), this.z.addThisE(e3.z), this;
  }
  mul(e3) {
    return new _ls(this.x.mulE(e3), this.y.mulE(e3), this.z.mulE(e3));
  }
  div(e3) {
    return new _ls(this.x.divE(e3), this.y.divE(e3), this.z.divE(e3));
  }
  eq(e3) {
    return this.x.eq(e3.x) && this.y.eq(e3.y) && this.z.eq(e3.z);
  }
  isZero() {
    return this.x.isZero() && this.y.isZero() && this.z.isZero();
  }
  value() {
    return X.construct(this.x.value(), this.y.value(), this.z.value());
  }
};
var gs2 = class {
  constructor(e3) {
    if (this.m_origin = new X(), this.m_normal = new X(), this.m_axisX = new X(), this.m_axisY = new X(), !e3) return this.m_origin = new X(), this.m_normal = new X(0, 0, 1), this.m_axisX = new X(1, 0, 0), void (this.m_axisY = new X(0, 1, 0));
    e3.pt0 && e3.pt1 && e3.pt2 ? this.setFromPoints(e3.pt0, e3.pt1, e3.pt2) : n(0, `unimplemented constructor options ${JSON.stringify(e3)}`);
  }
  assign(e3) {
    return n(0), this;
  }
  set(e3, t2, s2, n5) {
    n(0);
  }
  setFromPoints(e3, t2, s2) {
    let n5 = t2.sub(e3);
    const r = s2.sub(e3);
    this.m_normal = n5.crossProductVector(r);
    let i2 = true;
    if (this.m_normal.isZero()) {
      if (i2 = false, n5.isZero() && (n5 = r), n5.isZero()) {
        const t3 = 0, s3 = 1;
        return this.m_normal.setCoords(t3, t3, s3), this.m_axisX.setCoords(s3, t3, t3), this.m_axisY.setCoords(t3, s3, t3), this.m_origin = e3, false;
      }
      this.m_axisX = n5.getUnitVector(), this.m_normal = this.m_axisX.createAPerpendicular();
    } else this.m_normal.normalizeThis(), this.m_axisX = n5.getUnitVector();
    return this.m_axisY = this.m_normal.crossProductVector(this.m_axisX), this.m_origin = e3, i2;
  }
  getCoord(e3, t2) {
    return n(0), {};
  }
  getCoord2D(e3) {
    return n(0), {};
  }
  getCoordX(e3, t2) {
    return n(0), 0;
  }
  getCoordY(e3, t2) {
    return n(0), 0;
  }
  getCoordZ(e3, t2) {
    return n(0), 0;
  }
  setPreferredAxisX(e3) {
    n(0);
  }
  getOrigin() {
    return n(0), {};
  }
  getNormal() {
    return n(0), {};
  }
  getAxisX() {
    return this.m_axisX.clone();
  }
  getAxisY() {
    return this.m_axisY.clone();
  }
  setAxisX(e3, t2 = false) {
    n(0);
  }
  setAxisY(e3, t2 = false) {
    n(0);
  }
  recalculateAxisY() {
    n(0);
  }
  setOrigin(e3) {
    n(0);
  }
  setNormal(e3, t2) {
    n(0);
  }
  intersect(e3, t2) {
    return n(0), false;
  }
  intersectLine(e3) {
    return n(0), 0;
  }
  intersectLineEx(e3, t2) {
    return n(0), 0;
  }
  closestCoordinate(e3) {
    const t2 = e3.sub(this.m_origin), s2 = new mi();
    return s2.x = t2.dotProduct(this.m_axisX), s2.y = t2.dotProduct(this.m_axisY), s2;
  }
  projectVector(e3) {
    return n(0), {};
  }
  signedDistance(e3) {
    return n(0), 0;
  }
  distance(e3) {
    return n(0), 0;
  }
};
function us(e3, t2) {
  return false;
}
function cs(e3, t2, s2, n5, r = 100, i2 = us) {
  let o2, a2, h2, m2, g, u, c, _, d2;
  n(n5 > 0);
  let p3, f3, x3, y2 = 0, P3 = 0;
  const E2 = Os();
  t2 > s2 && (s2 = Pt(t2, t2 = s2));
  const S2 = e3(t2), C2 = e3(s2);
  S2 < C2 ? (o2 = a2 = h2 = t2, m2 = g = u = S2) : (o2 = a2 = h2 = s2, m2 = g = u = C2);
  let I4 = 0;
  for (; I4 < r && (x3 = 0.5 * (s2 - t2), d2 = t2 + x3, p3 = n5 * (Math.abs(o2) + 0.25), f3 = 2 * p3, !(i2(o2, m2) || Math.abs(o2 - d2) <= f3 - x3)); ++I4) {
    if (Math.abs(P3) > p3) {
      const e4 = (o2 - a2) * (m2 - u);
      let n6 = (o2 - h2) * (m2 - g), r2 = (o2 - h2) * n6 - (o2 - a2) * e4;
      n6 = 2 * (n6 - e4), n6 > 0 && (r2 = -r2), n6 = Math.abs(n6);
      const i3 = P3;
      P3 = y2, Math.abs(r2) >= Math.abs(n6 * i3 * 0.5) || r2 <= n6 * (t2 - o2) || r2 >= n6 * (s2 - o2) ? (P3 = o2 >= d2 ? t2 - o2 : s2 - o2, y2 = Os() * P3) : (y2 = r2 / n6, _ = o2 + y2, (_ - t2 < f3 || s2 - _ < f3) && (y2 = d2 - o2 < 0 ? -Math.abs(p3) : Math.abs(p3)));
    } else P3 = o2 >= d2 ? t2 - o2 : s2 - o2, y2 = P3 * E2;
    _ = o2 + y2, c = e3(_), c < m2 ? (_ >= o2 ? t2 = o2 : s2 = o2, h2 = a2, a2 = o2, o2 = _, u = g, g = m2, m2 = c) : (_ < o2 ? t2 = _ : s2 = _, c <= g || a2 === o2 ? (h2 = a2, a2 = _, u = g, g = c) : (c <= u || h2 === o2 || h2 === a2) && (h2 = _, u = c));
  }
  return $t(o2, m2);
}
function _s2(e3, t2, s2) {
  if (e3 > s2) {
    e3 -= Math.ceil((e3 - s2) / Kt) * Kt;
  } else if (e3 < t2) {
    e3 += Math.ceil((t2 - e3) / Kt) * Kt;
  }
  return e3;
}
function ds2(e3, t2, s2) {
  return ps(e3, t2, s2, 0);
}
function ps(e3, t2, s2, n5) {
  const r = s2.x, i2 = s2.y;
  return xs(e3, t2, Math.cos(r), Math.sin(r), Math.cos(i2), Math.sin(i2), n5);
}
function fs(e3, t2, s2, n5, r, i2) {
  return xs(e3, t2, s2, n5, r, i2, 0);
}
function xs(e3, t2, s2, n5, r, i2, o2) {
  const a2 = e3 / Math.sqrt(1 - t2 * i2 * i2), h2 = a2 + o2, m2 = h2 * r * s2, l2 = h2 * r * n5, g = (a2 * (1 - t2) + o2) * i2;
  return X.construct(m2, l2, g);
}
function ys(e3, t2, s2) {
  const n5 = new p2(), r = new p2(), i2 = new p2(), o2 = new p2();
  n5.setCos(s2.x), r.setSin(s2.x), i2.setCos(s2.y), o2.setSin(s2.y);
  const a2 = o2.negate().mulE(o2.mul(t2)).add(1).sqrt(), h2 = new p2(e3).divE(a2), m2 = h2.mulE(i2).mulE(n5), l2 = h2.mulE(i2).mulE(r), g = h2.mul(1 - t2).mulE(o2);
  return new ls2(m2, l2, g);
}
function Ps2(e3, t2, s2) {
  const n5 = s2.x, r = s2.y, i2 = s2.z, o2 = Math.atan2(r, n5), a2 = Math.sqrt(n5 * n5 + r * r), h2 = Math.atan2(i2, (1 - t2) * a2);
  return mi.construct(o2, h2);
}
function Es2(e3, t2, s2) {
  const n5 = 1 - t2, r = e3 / Math.sqrt(H(s2.x) + H(s2.y) + H(s2.z) / n5);
  return s2.mul(r);
}
function Ss2(e3, t2, s2, n5, r) {
  const i2 = ds2(e3, t2, s2), o2 = ds2(e3, t2, n5);
  return Ps2(e3, t2, X.lerp(i2, o2, r));
}
function Cs(e3, t2, s2) {
  const n5 = new X();
  return n5.setCrossProductVector(t2, s2), Math.abs(Math.atan2(n5.length(), t2.dotProduct(s2))) * e3;
}
function Is(e3, t2, s2, n5, r) {
  const i2 = s2.getUnitVector(), o2 = n5.getUnitVector(), a2 = t2.getUnitVector(), h2 = new X();
  if (h2.setCrossProductVector(i2, o2), !h2.isZero()) {
    h2.normalizeThis();
    const t3 = a2.sub(h2.mul(h2.dotProduct(a2)));
    if (!t3.isZero()) {
      t3.normalizeThis();
      const s3 = i2.add(o2).mul(0.5);
      if (s3.dotProduct(t3) > s3.dotProduct(i2)) {
        const s4 = Math.abs(h2.dotProduct(a2)), n6 = Math.asin(s4);
        return r.assign(t3.getUnitVector().mul(e3)), n6 * e3;
      }
    }
  }
  const m2 = Cs(1, i2, a2), l2 = Cs(1, o2, a2);
  return m2 <= l2 ? (r.assign(s2), m2 * e3) : (r.assign(n5), l2 * e3);
}
function bs2(s2, n5, r, i2) {
  const o2 = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = __addDisposableResource(o2, new Cc(), false);
    return Dc.geodeticDistance(s2, n5, r.x, r.y, i2.x, i2.y, t2, null, null, bc.PE_LINETYPE_GEODESIC), t2.val;
  } catch (a2) {
    o2.error = a2, o2.hasError = true;
  } finally {
    __disposeResources(o2);
  }
}
function ws(e3, t2, s2, n5, r) {
  switch (n(s2.isFinite() && n5.isFinite()), r) {
    case 0:
      return bs2(e3, t2, s2, n5);
    case 1:
      return Ts(e3, t2, s2);
    case 2:
    case 3: {
      const r2 = ds2(e3, t2, s2), i2 = ds2(e3, t2, n5);
      return X.distance(r2, i2);
    }
    default:
      z("");
  }
}
function vs2(e3, t2, s2, n5, r, i2 = 0, o2) {
  if (2 === i2 || 3 === i2) return Ns(e3, t2, s2, n5, r, 3 === i2, o2);
  const a2 = Ps2(e3, t2, s2), h2 = (s3) => {
    const o3 = Ps2(e3, t2, X.lerp(n5, r, s3));
    return ws(e3, t2, a2, o3, i2);
  }, m2 = X.distance(n5, r);
  if (m2 > 0) {
    const s3 = Os2(e3, m2), { first: i3, second: a3 } = cs(h2, 0, 1, s3);
    return o2 && o2.assign(Es2(e3, t2, X.lerp(n5, r, i3))), $t(i3, a3);
  }
  {
    const e4 = h2(0);
    return o2 && o2.assign(n5), $t(0.5, e4);
  }
}
function Ns(e3, t2, s2, n5, r, i2 = false, o2) {
  const a2 = Es2(e3, t2, s2);
  if (i2) {
    const i3 = new gs2({ pt0: new X(0, 0, 0), pt1: n5, pt2: r }), h3 = i3.closestCoordinate(s2), m3 = i3.closestCoordinate(n5), l2 = i3.closestCoordinate(r), g = mi.getClosestCoordinate(m3, l2, h3), u = Es2(e3, t2, X.lerp(n5, r, g)), c = X.distance(u, a2);
    return o2 && o2.assign(u), $t(g, c);
  }
  const h2 = (s3) => {
    const i3 = Es2(e3, t2, X.lerp(n5, r, s3));
    return X.distance(i3, a2);
  }, m2 = X.distance(n5, r);
  if (m2 > 0) {
    const s3 = Os2(e3, m2), { first: i3, second: a3 } = cs(h2, 0, 1, s3);
    return o2 && o2.assign(Es2(e3, t2, X.lerp(n5, r, i3))), $t(i3, a3);
  }
  {
    const e4 = X.distance(s2, n5);
    return o2 && o2.assign(s2), $t(0.5, e4);
  }
}
function Ts(s2, n5, r, i2) {
  const o2 = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = __addDisposableResource(o2, new Cc(), false);
    return Dc.greatEllipticDistance(s2, n5, r.x, r.y, r.x, r.y, t2, null, null), t2.val;
  } catch (a2) {
    o2.error = a2, o2.hasError = true;
  } finally {
    __disposeResources(o2);
  }
}
function Gs(e3, t2, s2, n5, r) {
  if (Math.abs(s2.x - n5.x) > Math.PI) return Number.NaN;
  if (Math.abs(s2.y) > Wt || Math.abs(n5.y) > Wt) return Number.NaN;
  if ((Math.abs(s2.y) === Wt || Math.abs(n5.y) === Wt) && s2.x !== n5.x) return Number.NaN;
  const { first: i2, second: o2 } = R2(s2.x, n5.x);
  let a2 = r;
  a2 = _s2(a2, i2, o2);
  if (!x.construct(s2.x, n5.x).containsCoordinate(a2)) return Number.NaN;
  const h2 = Ne.constructPoint2D(s2), m2 = Ne.constructPoint2D(n5), l2 = ys(1, t2, h2), g = ys(1, t2, m2), u = l2.crossProductVector(g);
  if (u.z.isZero()) {
    return s2.y;
  }
  const c = u.x.divE(u.z.negate()), _ = u.y.divE(u.z.negate()), d2 = c.mulE(c).addE(_.mulE(_)).sqrt();
  if (d2.isZero() || c.isZero() && _.isZero()) {
    return s2.y;
  }
  const p3 = Math.atan2(_.value(), c.value());
  let f3 = Math.atan2(d2.value() * Math.cos(p3 - a2), 1 - t2);
  const x3 = ds2(1, t2, mi.construct(a2, f3)), y2 = X.construct(x3.x, x3.y, -x3.z), P3 = u.value().dotProduct(x3), E2 = u.value().dotProduct(y2);
  return Math.abs(E2) < Math.abs(P3) && (f3 = -f3), f3;
}
function Ds2(e3, t2, s2, n5, r, i2) {
  if (i2[0] = Number.NaN, i2[1] = Number.NaN, Math.abs(s2.x - n5.x) > Math.PI) return 0;
  if (Math.abs(s2.y) > Wt || Math.abs(n5.y) > Wt) return 0;
  if ((Math.abs(s2.y) === Wt || Math.abs(n5.y) === Wt) && s2.x !== n5.x) return 0;
  if (Math.abs(r) >= Wt) return 0;
  if (s2.y > 0 && n5.y > 0 && s2.y > r && n5.y > r || s2.y < 0 && n5.y < 0 && s2.y < r && n5.y < r) return 0;
  const o2 = Ne.constructPoint2D(s2), a2 = Ne.constructPoint2D(n5), h2 = ys(1, t2, o2), m2 = ys(1, t2, a2), l2 = h2.crossProductVector(m2);
  if (l2.z.isZero()) {
    return x.construct(s2.y, n5.y).containsCoordinate(r) ? (i2[0] = s2.x, 1) : 0;
  }
  const g = l2.x.divE(l2.z.negate()), u = l2.y.divE(l2.z.negate()), c = g.mulE(g).addE(u.mulE(u)).sqrt();
  if (c.isZero() || g.isZero() && u.isZero()) return 0 === r ? (i2[0] = s2.x, i2[1] = n5.x, 2) : 0;
  const _ = (1 - t2) * Math.tan(r) / c.value();
  if (Math.abs(_) > 1) return 0;
  const d2 = Math.acos(_), p3 = Math.atan2(u.value(), g.value()), f3 = p3 - d2;
  let x3 = p3 + d2;
  const y2 = Math.min(s2.x, n5.x), P3 = Math.max(s2.x, n5.x);
  _s2(f3, y2, P3), 0 !== r ? _s2(x3, y2, P3) : x3 = f3;
  let E2 = 0;
  return y2 <= f3 && f3 <= P3 && (i2[E2] = f3, E2++), x3 !== f3 && y2 <= x3 && x3 <= P3 && (i2[E2] = x3, E2++), E2;
}
function Vs(e3, t2) {
  t2[0] > 0.5 * Math.PI ? (e3[0] += Math.PI, t2[0] = Math.PI - t2[0]) : t2[0] < 0.5 * -Math.PI && (e3[0] -= Math.PI, t2[0] = -Math.PI - t2[0]), n(t2[0] >= 0.5 * -Math.PI && t2[0] <= 0.5 * Math.PI);
}
function Fs(e3, t2) {
  return e3 * Math.sqrt(1 - t2);
}
function Hs(e3) {
  return 1 - e3;
}
function ks(e3, t2, s2, n5, r) {
  n5 = Us(n5, -Wt, Wt), r = Us(r, -Wt, Wt);
  const i2 = Wt - 0.03;
  let o2;
  o2 = n5 > i2 && r > i2 || n5 < -i2 && r < -i2 ? As2(e3, n5, r) : Ms(e3, r) - Ms(e3, n5);
  return 0.5 * (s2 - t2) * o2 * Hs(e3);
}
function As2(e3, t2, s2) {
  let n5 = 1;
  if (t2 < 0 && (n5 = -1, t2 = -t2, s2 = -s2), 0 !== e3) {
    const r = e3 * e3, i2 = r * e3, o2 = [1, (1 + 11 * e3) / 12, (1 + 118 * e3 + 241 * r) / 360, (1 + 1089 * e3 + 10419 * r + 8651 * i2) / 20160, (1 + 9836 * e3 + 318246 * r + 1027436 * i2 + 458881 * (i2 * e3)) / 1814400], a2 = (t3) => {
      let s3 = 0;
      const n6 = H(t3) / (e3 - 1);
      for (let e4 = o2.length - 1; e4 >= 0; --e4) s3 = o2[e4] + s3 * n6;
      return s3 *= -H(t3 / (1 - e3)), s3;
    }, h2 = a2(Wt - t2);
    return (a2(Wt - s2) - h2) * n5;
  }
  {
    const e4 = Wt - t2, r = Wt - s2, i2 = -4 * H(Math.sin(e4 / 2));
    return (-4 * H(Math.sin(r / 2)) - i2) * n5;
  }
}
function Ms(e3, t2) {
  if (0 === t2) return 0;
  const s2 = Math.sin(t2);
  let n5 = s2, r = s2;
  if (0 !== e3) {
    n5 /= 1 - e3 * s2 * s2;
    const t3 = Math.sqrt(e3);
    r = s2 * z2(t3 * s2);
  }
  return n5 + r;
}
function Us2(e3, t2) {
  return e3 / Math.sqrt(1 - t2);
}
function qs2(e3, t2) {
  return (1 - t2) * e3;
}
function Bs2(e3, t2, s2) {
  const n5 = s2 / (2 * qs2(e3, t2)), r = n5 * n5;
  return s2 * (1 - r * (0.16666666666666666 - 0.008333333333333333 * r));
}
function Os2(e3, t2) {
  if (0 !== t2) {
    const s2 = e3 * rs() / t2;
    return Math.min(s2, 1e-10);
  }
  return 0;
}
var Ys2 = class _Ys {
  constructor(e3) {
    this.m_currentShift = 63n, this.m_currentElt = 0n, this.m_iCurrentElt = -1, this.m_parent = e3, this.m_aiSetElts = e3.m_bits.flatMap((e4, t2) => t2);
  }
  next() {
    if (this.m_currentShift++, 64n === this.m_currentShift) {
      if (this.m_iCurrentElt++, this.m_iCurrentElt === this.m_aiSetElts.length) return _Ys.npos();
      this.m_currentShift = 0n, this.m_currentElt = this.m_parent.m_bits[this.m_aiSetElts[this.m_iCurrentElt]];
    }
    for (; this.m_currentShift < 63n && !(this.m_currentElt & 1n << this.m_currentShift); ) this.m_currentShift++;
    return this.m_currentElt & 1n << this.m_currentShift ? 64 * this.m_aiSetElts[this.m_iCurrentElt] + Number(this.m_currentShift) : this.next();
  }
  static npos() {
    return Number.MAX_SAFE_INTEGER;
  }
};
function Rs2(e3) {
  return 1n << (0x3fn & BigInt(e3));
}
function Xs(e3) {
  return e3 >> 6;
}
var Ls2 = class {
  constructor(e3) {
    this.m_bits = [], void 0 !== e3 && e3.copy && (this.m_bits = e3.copy.m_bits.slice());
  }
  assignMove() {
    return this;
  }
  assignCopy() {
    return this;
  }
  hasBit(e3) {
    const t2 = Rs2(e3), s2 = Xs(e3);
    return void 0 !== this.m_bits[s2] && !!(this.m_bits[s2] & t2);
  }
  setBit(e3) {
    const t2 = Rs2(e3), s2 = Xs(e3);
    void 0 === this.m_bits[s2] && (this.m_bits[s2] = 0n), this.m_bits[s2] |= t2;
  }
  clearBit(e3) {
  }
  flipBit(e3) {
    const t2 = Rs2(e3), s2 = Xs(e3);
    return void 0 === this.m_bits[s2] && (this.m_bits[s2] = 0n), this.m_bits[s2] ^= t2, 0n !== (this.m_bits[s2] & t2);
  }
  clear() {
    this.m_bits.length = 0;
  }
  isZero() {
    let e3 = 0;
    return this.m_bits.forEach((t2) => {
      e3 |= t2 ? 2 : 1;
    }), !(2 & e3);
  }
  equals(e3) {
    if (this === e3) return true;
    if (this.m_bits.length !== e3.m_bits.length) return false;
    let t2 = 0;
    return this.m_bits.forEach((s2, n5) => {
      t2 |= s2 === e3.m_bits[n5] ? 2 : 1;
    }), !(1 & t2) && (e3.m_bits.forEach((e4, s2) => {
      t2 |= e4 === this.m_bits[s2] ? 2 : 1;
    }), !(1 & t2));
  }
  notEquals(e3) {
    return !this.equals(e3);
  }
  assignOr(e3) {
    return e3.m_bits.forEach((e4, t2) => {
      void 0 === this.m_bits[t2] ? this.m_bits[t2] = e4 : this.m_bits[t2] |= e4;
    }), this;
  }
  assignSubtract(e3) {
    return e3.m_bits.forEach((e4, t2) => {
      void 0 !== this.m_bits[t2] && (this.m_bits[t2] &= ~e4);
    }), this;
  }
  assignAnd(e3) {
    return e3.m_bits.forEach((e4, t2) => {
      void 0 !== this.m_bits[t2] && (this.m_bits[t2] &= e4);
    }), this;
  }
  assignXor(e3) {
    return e3.m_bits.forEach((e4, t2) => {
      void 0 === this.m_bits[t2] ? this.m_bits[t2] = e4 : this.m_bits[t2] ^= e4;
    }), this;
  }
  getHashCode() {
    return this.m_bits.reduce((e3, t2) => Ps(e3, t2), Zs(0));
  }
  getUnorderedBitIterator() {
    return new Ys2(this);
  }
};
var zs3 = class {
  constructor(e3, t2) {
    this.m_map = /* @__PURE__ */ new Map(), this.m_hf = e3, this.m_ef = t2;
  }
  add(e3) {
    const t2 = this.m_hf(e3);
    if (!this.m_map.has(t2)) return this.m_map.set(t2, e3), this;
    const s2 = this.m_map.get(t2);
    return s2 instanceof Array ? s2.find((t3) => this.m_ef(t3, e3)) || s2.push(e3) : this.m_ef(s2, e3) || this.m_map.set(t2, [s2, e3]), this;
  }
  clear() {
    this.m_map.clear();
  }
  delete(e3) {
    return false;
  }
  has(e3) {
    const t2 = this.m_hf(e3);
    if (!this.m_map.has(t2)) return false;
    const s2 = this.m_map.get(t2);
    return s2 instanceof Array ? void 0 !== s2.find((t3) => this.m_ef(t3, e3)) : this.m_ef(s2, e3);
  }
  get(e3) {
    const t2 = this.m_hf(e3), s2 = this.m_map.get(t2);
    if (void 0 !== s2) return s2 instanceof Array ? s2.find((t3) => this.m_ef(t3, e3)) : s2;
  }
  get size() {
    let e3 = 0;
    for (const t2 of this.m_map.values()) e3 += t2 instanceof Array ? t2.length : 1;
    return e3;
  }
  forEach(e3, t2) {
  }
  [Symbol.iterator]() {
    return (/* @__PURE__ */ new Set())[Symbol.iterator]();
  }
  entries() {
    return (/* @__PURE__ */ new Set()).entries();
  }
  keys() {
    return (/* @__PURE__ */ new Set()).keys();
  }
  values() {
    return (/* @__PURE__ */ new Set()).values();
  }
  get [Symbol.toStringTag]() {
    return "ValueSet";
  }
};
var Ws = class extends ct2 {
  constructor(e3) {
    super(), this.m_bufferLeft = new Pm(), this.m_bufferRight = new Pm(), this.m_intervalLeft = x.constructEmpty(), this.m_intervalRight = x.constructEmpty(), this.m_yScanline = Number.NaN, this.m_helper = e3;
  }
  compare(e3, t2, s2) {
    const n5 = t2, r = e3.getElement(s2);
    this.m_helper.querySegmentXY(n5, this.m_bufferLeft), this.m_helper.querySegmentXY(r, this.m_bufferRight);
    const i2 = this.m_bufferLeft.get(), o2 = this.m_bufferRight.get();
    if (this.m_intervalLeft.setCoords(i2.getStartX(), i2.getEndX()), this.m_intervalRight.setCoords(o2.getStartX(), o2.getEndX()), this.m_intervalLeft.vmax < this.m_intervalRight.vmin) return -1;
    if (this.m_intervalLeft.vmin > this.m_intervalRight.vmax) return 1;
    const a2 = i2.getStartY() === i2.getEndY(), h2 = o2.getStartY() === o2.getEndY();
    if (a2 || h2) {
      if (a2 && h2) return 0;
      if (i2.getStartY() === o2.getStartY() && i2.getStartX() === o2.getStartX()) return a2 ? 1 : -1;
      if (i2.getEndY() === o2.getEndY() && i2.getEndX() === o2.getEndX()) return a2 ? -1 : 1;
    }
    let m2 = i2.intersectionOfYMonotonicWithAxisX(this.m_yScanline, this.m_intervalLeft.vmin), l2 = o2.intersectionOfYMonotonicWithAxisX(this.m_yScanline, this.m_intervalRight.vmin);
    if (m2 === l2) {
      const e4 = i2.getEndY(), t3 = o2.getEndY(), s3 = Math.min(e4, t3);
      let n6 = 0.5 * (s3 + this.m_yScanline);
      n6 === this.m_yScanline && (n6 = s3), m2 = i2.intersectionOfYMonotonicWithAxisX(n6, this.m_intervalLeft.vmin), l2 = o2.intersectionOfYMonotonicWithAxisX(n6, this.m_intervalRight.vmin);
    }
    return m2 < l2 ? -1 : m2 > l2 ? 1 : 0;
  }
  setY(e3) {
    this.m_yScanline = e3;
  }
};
var js = class {
  constructor(e3) {
    this.m_segmentBuffer = new Pm(), this.m_point = mi.getNAN(), this.m_parent = e3;
  }
  setPointXY(e3) {
    this.m_point.assign(e3);
  }
  compare(e3, t2) {
    const s2 = e3.getElement(t2);
    this.m_parent.querySegmentXY(s2, this.m_segmentBuffer);
    const n5 = this.m_segmentBuffer.get(), r = new x();
    if (r.setCoords(n5.getStartX(), n5.getEndX()), this.m_point.x < r.vmin) return -1;
    if (this.m_point.x > r.vmax) return 1;
    const i2 = n5.intersectionOfYMonotonicWithAxisX(this.m_point.y, this.m_point.x);
    return this.m_point.x < i2 ? -1 : this.m_point.x > i2 ? 1 : 0;
  }
};
var Zs2;
var Ks2;
function Qs3(e3, t2) {
  return { parentage: e3, rank: t2 };
}
function Js(e3, t2) {
  const s2 = e3.length;
  if (s2 !== t2.length) return false;
  const n5 = e3[0].parentage;
  if (n5 !== t2[0].parentage) return false;
  if (-1 === n5) return true;
  for (let r = 1; r < s2; ++r) if (e3[r].parentage !== t2[r].parentage) return false;
  return true;
}
function $s2(e3, t2, s2) {
  s2.length = 0;
  let n5 = false;
  {
    let r = e3.getHalfEdgeVertexIterator(t2);
    for (; r !== gr; ) {
      const t3 = e3.getVertexFromVertexIterator(r), i2 = e3.getShape().getSegmentRank(t3), o2 = e3.getShape().getSegmentParentage(t3);
      n5 ||= o2 >= 0, s2.push(Qs3(o2, i2)), r = e3.incrementVertexIterator(r);
    }
  }
  {
    let r = e3.getHalfEdgeVertexIterator(e3.getHalfEdgeTwin(t2));
    for (; r !== gr; ) {
      const t3 = e3.getVertexFromVertexIterator(r), i2 = e3.getShape().getSegmentRank(t3), o2 = e3.getShape().getSegmentParentage(t3);
      n5 ||= o2 >= 0, s2.push(Qs3(o2, i2)), r = e3.incrementVertexIterator(r);
    }
  }
  n5 && s2.sort((e4, t3) => e4.rank > t3.rank ? -1 : e4.rank < t3.rank ? 1 : e4.parentage < t3.parentage ? -1 : e4.parentage > t3.parentage ? 1 : 0), -1 === s2[0].parentage && (s2.length = 1);
}
function en() {
  return new zs3((e3) => e3.getHashCode(), (e3, t2) => e3.equals(t2));
}
!(function(e3) {
  e3[e3.enumInputModeBuildGraph = 0] = "enumInputModeBuildGraph", e3[e3.enumInputModeSimplifyAlternate = 1] = "enumInputModeSimplifyAlternate", e3[e3.enumInputModeSimplifyWinding = 2] = "enumInputModeSimplifyWinding";
})(Zs2 || (Zs2 = {})), (function(e3) {
  e3[e3.enumSegmentParentageBreakNode = 1] = "enumSegmentParentageBreakNode", e3[e3.enumPathBreakNode = 2] = "enumPathBreakNode";
})(Ks2 || (Ks2 = {}));
var tn = class _tn {
  constructor() {
    this.m_shape = null, this.m_clusterData = new mt(8), this.m_clusterVertices = new mt(2), this.m_firstCluster = gr, this.m_lastCluster = gr, this.m_halfEdgeData = new mt(8), this.m_chainData = new mt(8), this.m_chainAreas = null, this.m_chainPerimeters = null, this.m_universeChain = -1, this.m_simplifiedGeometry = -1, this.m_edgeIndices = [], this.m_clusterIndices = [], this.m_chainIndices = [], this.m_bBuildGeometryParentageSets = false, this.m_chainBitSetIndex = -1, this.m_edgeBitSetIndex = -1, this.m_edgeBitSetIndexLeft = -1, this.m_emptyBitSet = null, this.m_geometryMapID = null, this.m_uniqueBitSets = null, this.m_chainBitSets = [], this.m_edgeBitSets = [], this.m_checkDirtyPlanesweepTolerance = Number.NaN, this.m_geometryIDIndex = -1, this.m_clusterIndex = -1, this.m_halfEdgeIndex = -1, this.m_tmpHalfEdgeParentageIndex = -1, this.m_tmpHalfEdgeParentageIndexLeft = -1, this.m_tmpHalfEdgeWindingNumberIndex = -1, this.m_tmpHalfEdgeOddEvenNumberIndex = -1, this.m_segmentParentageIndex = -1, this.m_segmentIndexHe = -1, this.m_clusterBreakNodeIndex = -1, this.m_universeGeomID = -1, this.m_pointCount = 0, this.m_progressCounter = 0, this.m_bBuildChains = true, this.m_bDirtyCheckFailed = false;
  }
  setCheckDirtyPlanesweepTolerance(e3) {
    this.m_checkDirtyPlanesweepTolerance = e3;
  }
  dirtyCheckFailed() {
    return this.m_bDirtyCheckFailed;
  }
  getShape() {
    return this.m_shape;
  }
  setEditShape(e3, t2, s2 = true, n5 = false) {
    n5 ? this.setEditShapeImpl3D_(e3, Zs2.enumInputModeBuildGraph, null, t2, false) : this.setEditShapeImpl_(e3, Zs2.enumInputModeBuildGraph, null, t2, s2);
  }
  setAndSimplifyEditShapeAlternate(e3, t2, s2 = null, n5 = false) {
    const r = [];
    r.push(t2), this.m_simplifiedGeometry = t2, n5 ? this.setEditShapeImpl3D_(e3, Zs2.enumInputModeSimplifyAlternate, r, s2, false) : this.setEditShapeImpl_(e3, Zs2.enumInputModeSimplifyAlternate, r, s2, e3.getGeometryType(t2) === a.enumPolygon);
  }
  setAndSimplifyEditShapeWinding(e3, t2, s2 = null) {
    const n5 = [];
    n5.push(t2), this.m_simplifiedGeometry = t2, this.setEditShapeImpl_(e3, Zs2.enumInputModeSimplifyWinding, n5, s2, true);
  }
  removeShape() {
    null !== this.m_shape && (-1 !== this.m_geometryIDIndex && (this.m_shape.removeGeometryUserIndex(this.m_geometryIDIndex), this.m_geometryIDIndex = -1), -1 !== this.m_clusterIndex && (this.m_shape.removeUserIndex(this.m_clusterIndex), this.m_clusterIndex = -1), -1 !== this.m_halfEdgeIndex && (this.m_shape.removeUserIndex(this.m_halfEdgeIndex), this.m_halfEdgeIndex = -1), -1 !== this.m_tmpHalfEdgeParentageIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndex), this.m_tmpHalfEdgeParentageIndex = -1), -1 !== this.m_tmpHalfEdgeParentageIndexLeft && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndexLeft), this.m_tmpHalfEdgeParentageIndexLeft = -1), -1 !== this.m_tmpHalfEdgeWindingNumberIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeWindingNumberIndex), this.m_tmpHalfEdgeWindingNumberIndex = -1), -1 !== this.m_tmpHalfEdgeOddEvenNumberIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeOddEvenNumberIndex), this.m_tmpHalfEdgeOddEvenNumberIndex = -1), -1 !== this.m_segmentParentageIndex && (this.deleteUserIndexForHalfEdges(this.m_segmentParentageIndex), this.m_segmentParentageIndex = -1), -1 !== this.m_segmentIndexHe && (this.deleteUserIndexForHalfEdges(this.m_segmentIndexHe), this.m_segmentIndexHe = -1), -1 !== this.m_clusterBreakNodeIndex && (this.deleteUserIndexForClusters(this.m_clusterBreakNodeIndex), this.m_clusterBreakNodeIndex = -1), this.deleteEdgeBitSets_(), this.deleteChainBitSets_(), this.m_emptyBitSet = null, this.m_geometryMapID = null, this.m_shape = null, this.m_clusterData.deleteAll(true), this.m_clusterVertices.deleteAll(true), this.m_firstCluster = gr, this.m_lastCluster = gr, this.m_halfEdgeData.deleteAll(true), this.m_edgeIndices.length = 0, this.m_clusterIndices.length = 0, this.m_chainIndices.length = 0, this.m_chainData.deleteAll(true), this.m_universeChain = gr, this.m_chainAreas = null);
  }
  getClusterHalfEdge(e3) {
    return this.m_clusterData.getField(e3, 2);
  }
  queryXY(e3, t2) {
    const s2 = this.getClusterVertexIndex_(e3);
    t2.assign(this.m_shape.getXYWithIndex(s2));
  }
  queryXYZ(e3, t2) {
    n(0);
  }
  getClusterParentage(e3) {
    return this.m_clusterData.getField(e3, 1);
  }
  getFirstCluster() {
    return this.m_firstCluster;
  }
  getPrevCluster(e3) {
    return this.m_clusterData.getField(e3, 3);
  }
  getNextCluster(e3) {
    return this.m_clusterData.getField(e3, 4);
  }
  getClusterChain(e3) {
    return this.m_clusterData.getField(e3, 6);
  }
  getClusterVertexIterator(e3) {
    return this.m_clusterData.getField(e3, 7);
  }
  incrementVertexIterator(e3) {
    return this.m_clusterVertices.getField(e3, 1);
  }
  getVertexFromVertexIterator(e3) {
    return this.m_clusterVertices.getField(e3, 0);
  }
  getClusterUserIndex(e3, t2) {
    const s2 = this.getClusterIndex_(e3), n5 = this.m_clusterIndices[t2];
    return n5.size() <= s2 ? -1 : n5.read(s2);
  }
  setClusterUserIndex(e3, t2, s2) {
    const n5 = this.getClusterIndex_(e3), r = this.m_clusterIndices[t2];
    r.size() <= n5 && r.resize(this.m_clusterData.size(), -1), r.write(n5, s2);
  }
  hasClusterUserIndexFlags(e3, t2, s2) {
    if (-1 === t2) return false;
    const n5 = this.getClusterUserIndex(e3, t2);
    return -1 !== n5 && 0 !== (s2 & n5);
  }
  setClusterUserIndexFlags(e3, t2, s2) {
    const n5 = this.getClusterIndex_(e3), r = this.m_clusterIndices[t2];
    r.size() <= n5 && r.resize(this.m_clusterData.size(), -1);
    let i2 = r.read(n5);
    -1 === i2 && (i2 = 0), r.write(n5, s2 | i2);
  }
  clearClusterUserIndexFlags(e3, t2, s2) {
    const n5 = this.getClusterIndex_(e3), r = this.m_clusterIndices[t2];
    r.size() <= n5 && r.resize(this.m_clusterData.size(), -1);
    let i2 = r.read(n5);
    -1 === i2 && (i2 = 0), r.write(n5, ~s2 & i2);
  }
  createUserIndexForClusters(e3 = -1) {
    const t2 = new st(this.m_clusterData.capacity(), e3);
    for (let s2 = 0, n5 = this.m_clusterIndices.length; s2 < n5; s2++) if (null === this.m_clusterIndices[s2]) return this.m_clusterIndices[s2] = t2, s2;
    this.m_clusterIndices.push(t2);
    return this.m_clusterIndices.length - 1;
  }
  deleteUserIndexForClusters(e3) {
    this.m_clusterIndices[e3] = null;
  }
  getHalfEdgeOrigin(e3) {
    return this.m_halfEdgeData.getField(e3, 1);
  }
  getHalfEdgeTo(e3) {
    return this.getHalfEdgeOrigin(this.getHalfEdgeTwin(e3));
  }
  getHalfEdgeTwin(e3) {
    return this.m_halfEdgeData.getField(e3, 4);
  }
  getHalfEdgePrev(e3) {
    return this.m_halfEdgeData.getField(e3, 5);
  }
  getHalfEdgeNext(e3) {
    return this.m_halfEdgeData.getField(e3, 6);
  }
  getHalfEdgeChain(e3) {
    return this.m_halfEdgeData.getField(e3, 2);
  }
  getHalfEdgeFaceParentage(e3) {
    return this.getChainParentage(this.getHalfEdgeChain(e3));
  }
  getHalfEdgeVertexIterator(e3) {
    return this.m_halfEdgeData.getField(e3, 7);
  }
  getHalfEdgeFromXY(e3, t2) {
    this.queryXY(this.getHalfEdgeOrigin(e3), t2);
  }
  getHalfEdgeToXY(e3, t2) {
    this.queryXY(this.getHalfEdgeTo(e3), t2);
  }
  isHalfEdgeCurve(e3) {
    if (-1 !== this.m_segmentIndexHe) {
      return -1 !== this.getHalfEdgeUserIndex(e3, this.m_segmentIndexHe);
    }
    return false;
  }
  getHalfEdgeFromXYZ(e3, t2) {
    n(0);
  }
  getHalfEdgeToXYZ(e3, t2) {
    n(0);
  }
  getHalfEdgeParentage(e3) {
    return this.m_halfEdgeData.getField(e3, 3) & _tn.c_EdgeParentageMask;
  }
  getHalfEdgeUserIndex(e3, t2) {
    const s2 = this.getHalfEdgeIndex_(e3), n5 = this.m_edgeIndices[t2];
    return n5.size() <= s2 ? -1 : n5.read(s2);
  }
  setHalfEdgeUserIndex(e3, t2, s2) {
    const n5 = this.getHalfEdgeIndex_(e3), r = this.m_edgeIndices[t2];
    r.size() <= n5 && r.resize(this.m_halfEdgeData.size(), -1), r.write(n5, s2);
  }
  createUserIndexForHalfEdges(e3) {
    void 0 === e3 && (e3 = -1);
    const t2 = new st(this.m_halfEdgeData.capacity(), e3);
    for (let n5 = 0, r = this.m_edgeIndices.length; n5 < r; n5++) if (null === this.m_edgeIndices[n5]) return this.m_edgeIndices[n5] = t2, n5;
    this.m_edgeIndices.push(t2);
    const s2 = this.m_edgeIndices.length - 1;
    return n(s2 >= 0 && s2 <= Number.MAX_SAFE_INTEGER), s2;
  }
  deleteUserIndexForHalfEdges(e3) {
    this.m_edgeIndices[e3] = null;
  }
  deleteEdgesBreakFaces_(e3) {
    for (let t2 = 0, s2 = e3.length; t2 < s2; t2++) {
      const s3 = e3[t2], n5 = this.getHalfEdgeChain(s3), r = this.getHalfEdgeTwin(s3), i2 = this.getHalfEdgeChain(r);
      this.setChainHalfEdge_(n5, gr), this.setChainHalfEdge_(i2, gr), this.updateVertexToHalfEdgeConnection_(s3, true), this.deleteEdgeImpl_(s3);
    }
  }
  doesHalfEdgeBelongToAPolygonInterior(e3, t2) {
    return n(0), false;
  }
  doesHalfEdgeBelongToAPolygonExterior(e3, t2) {
    return n(0), false;
  }
  doesHalfEdgeBelongToAPolygonBoundary(e3, t2) {
    return n(0), false;
  }
  doesHalfEdgeBelongToAPolylineInterior(e3, t2) {
    return n(0), false;
  }
  doesHalfEdgeBelongToAPolylineExterior(e3, t2) {
    return n(0), false;
  }
  doesClusterBelongToAPolygonInterior(e3, t2) {
    return n(0), false;
  }
  doesClusterBelongToAPolygonExterior(e3, t2) {
    return n(0), false;
  }
  doesClusterBelongToAPolygonBoundary(e3, t2) {
    return n(0), false;
  }
  getFirstChain() {
    return this.m_universeChain;
  }
  getChainHalfEdge(e3) {
    return this.m_chainData.getField(e3, 1);
  }
  getChainParentage(e3) {
    return this.m_chainData.getField(e3, 2);
  }
  getChainParent(e3) {
    return this.m_chainData.getField(e3, 3);
  }
  getChainFirstIsland(e3) {
    return this.m_chainData.getField(e3, 4);
  }
  getChainNextInParent(e3) {
    return this.m_chainData.getField(e3, 5);
  }
  getChainNext(e3) {
    return this.m_chainData.getField(e3, 7);
  }
  getChainArea(e3) {
    const t2 = this.getChainIndex_(e3);
    let s2 = this.m_chainAreas.read(t2);
    return Number.isNaN(s2) && (this.updateChainAreaAndPerimeter_(e3), s2 = this.m_chainAreas.read(t2)), s2;
  }
  getChainPerimeter(e3) {
    return n(0), 0;
  }
  getChainUserIndex(e3, t2) {
    const s2 = this.getChainIndex_(e3), n5 = this.m_chainIndices[t2];
    return n5.size() <= s2 ? -1 : n5.read(s2);
  }
  setChainUserIndex(e3, t2, s2) {
    const n5 = this.getChainIndex_(e3), r = this.m_chainIndices[t2];
    r.size() <= n5 && r.resize(this.m_chainData.size(), -1), r.write(n5, s2);
  }
  createUserIndexForChains() {
    const e3 = new st(this.m_chainData.capacity(), -1);
    for (let t2 = 0, s2 = this.m_chainIndices.length; t2 < s2; t2++) if (null === this.m_chainIndices[t2]) return this.m_chainIndices[t2] = e3, t2;
    this.m_chainIndices.push(e3);
    return this.m_chainIndices.length - 1;
  }
  deleteUserIndexForChains(e3) {
    this.m_chainIndices[e3] = null;
  }
  extractPolygonFromChainAndIslands(e3, t2, s2, n5) {
    const r = t2 === gr ? e3.createGeometry(a.enumPolygon) : t2, o2 = new Pm();
    this.extractPolygonPathFromChain_(e3, r, s2, n5, o2);
    for (let i2 = this.getChainFirstIsland(s2); i2 !== gr; i2 = this.getChainNextInParent(i2)) this.extractPolygonPathFromChain_(e3, r, i2, n5, o2);
    return r;
  }
  getGeometryID(e3) {
    const t2 = this.m_shape.getGeometryUserIndex(e3, this.m_geometryIDIndex);
    return n(t2 >= 0), 1 << Math.min(t2, 31);
  }
  getClusterFromVertex(e3) {
    return this.m_shape.getUserIndex(e3, this.m_clusterIndex);
  }
  getHalfEdgeFromVertex(e3) {
    return this.m_shape.getUserIndex(e3, this.m_halfEdgeIndex);
  }
  buildGeometryParentageSets() {
    this.m_bBuildGeometryParentageSets = true;
  }
  getChainBitSet(e3) {
    if (n(this.m_bBuildGeometryParentageSets), -1 === this.m_chainBitSetIndex) return this.getEmptySet();
    const t2 = this.getChainUserIndex(e3, this.m_chainBitSetIndex);
    n(t2 >= 0);
    let s2 = this.m_chainBitSets.at(t2);
    return s2 || (s2 = this.getEmptySet()), s2;
  }
  getChainBoundaryBitSet(e3) {
    n(this.m_bBuildGeometryParentageSets);
    const t2 = new Ls2(), s2 = (e4) => {
      const s3 = this.getChainHalfEdge(e4);
      let n5 = s3;
      do {
        const e5 = this.getEdgeBitSet_(n5);
        null !== e5 && t2.assignOr(e5);
        const s4 = this.getEdgeBitSet_(this.getHalfEdgeTwin(n5));
        null !== s4 && t2.assignOr(s4), n5 = this.getHalfEdgeNext(n5);
      } while (n5 !== s3);
    };
    s2(e3);
    for (let n5 = this.getChainFirstIsland(e3); n5 !== gr; n5 = this.getChainNextInParent(n5)) s2(e3);
    return t2;
  }
  getChainPolygons(e3) {
    return n(0), [];
  }
  getGeometriesFromBits(e3) {
    if (!this.m_bBuildGeometryParentageSets || null === e3) return [];
    if (null === this.m_geometryMapID) {
      this.m_geometryMapID = /* @__PURE__ */ new Map();
      for (let e4 = this.m_shape.getFirstGeometry(); e4 !== gr; e4 = this.m_shape.getNextGeometry(e4)) this.m_geometryMapID.set(this.m_shape.getGeometryUserIndex(e4, this.m_geometryIDIndex), e4);
    }
    const t2 = [], s2 = e3.getUnorderedBitIterator();
    for (let n5 = s2.next(); n5 !== Ys2.npos(); n5 = s2.next()) n(this.m_geometryMapID.has(n5)), t2.push(this.m_geometryMapID.get(n5));
    return t2;
  }
  getVertexDominant(e3, t2) {
    if (t2 === gr) return e3;
    const s2 = this.getClusterFromVertex(e3);
    return this.getVertexDominantFromCluster(s2, t2);
  }
  getVertexDominantFromCluster(e3, t2) {
    if (t2 !== gr) {
      let s2 = gr;
      for (let n5 = this.getClusterVertexIterator(e3); n5 !== gr; n5 = this.incrementVertexIterator(n5)) {
        const e4 = this.getVertexFromVertexIterator(n5);
        s2 === gr && (s2 = e4);
        const r = this.m_shape.getPathFromVertex(e4);
        if (this.m_shape.getGeometryFromPath(r) === t2) {
          s2 = e4;
          break;
        }
      }
      return s2;
    }
    {
      const t3 = this.getClusterVertexIterator(e3);
      if (t3 !== gr) {
        return this.getVertexFromVertexIterator(t3);
      }
      return gr;
    }
  }
  isBreakNode(e3) {
    return this.hasClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumSegmentParentageBreakNode);
  }
  setBreakNode(e3, t2) {
    n(-1 !== this.m_clusterBreakNodeIndex), t2 ? this.setClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumSegmentParentageBreakNode) : this.clearClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumSegmentParentageBreakNode);
  }
  isStrongPathNode(e3) {
    return this.hasClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumPathBreakNode);
  }
  setStrongPathNode(e3, t2) {
    if (-1 === this.m_clusterBreakNodeIndex) {
      if (!t2) return;
      this.m_clusterBreakNodeIndex = this.createUserIndexForClusters();
    }
    t2 ? this.setClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumPathBreakNode) : this.clearClusterUserIndexFlags(e3, this.m_clusterBreakNodeIndex, Ks2.enumPathBreakNode);
  }
  getSegmentParentage(e3) {
    if (-1 === this.m_segmentParentageIndex) return -1;
    const t2 = this.getHalfEdgeUserIndex(e3, this.m_segmentParentageIndex);
    return t2 >= 0 ? t2 : -1;
  }
  isCrossroadAhead(e3) {
    const t2 = this.getHalfEdgeNext(e3);
    if (this.isStrongPathNode(this.getHalfEdgeOrigin(t2))) return true;
    const s2 = this.getHalfEdgeTwin(t2), n5 = this.getHalfEdgeNext(s2);
    return e3 !== this.getHalfEdgeTwin(n5);
  }
  isCrossroadBehind(e3) {
    return n(0), false;
  }
  getHalfEdgeConnector(e3, t2) {
    const s2 = this.getClusterHalfEdge(e3);
    if (s2 === gr) return gr;
    let n5 = s2, r = gr, i2 = gr;
    do {
      if (this.getHalfEdgeTo(n5) === t2) return n5;
      if (r === gr) {
        if (r = this.getClusterHalfEdge(t2), r === gr) return gr;
        i2 = r;
      }
      if (this.getHalfEdgeTo(i2) === e3) return n5 = this.getHalfEdgeTwin(i2), n5;
      n5 = this.getHalfEdgeNext(this.getHalfEdgeTwin(n5)), i2 = this.getHalfEdgeNext(this.getHalfEdgeTwin(i2));
    } while (n5 !== s2 && i2 !== r);
    return gr;
  }
  querySegmentXY(e3, t2) {
    if (-1 !== this.m_segmentIndexHe) {
      let s3 = this.getHalfEdgeUserIndex(e3, this.m_segmentIndexHe);
      if (-1 !== s3) {
        if (-2 !== s3) {
          const e4 = this.m_shape.getSegmentFromIndex(s3);
          t2.copyFrom(e4, true);
        } else {
          s3 = this.getHalfEdgeUserIndex(this.getHalfEdgeTwin(e3), this.m_segmentIndexHe);
          const n6 = this.m_shape.getSegmentFromIndex(s3);
          t2.copyFrom(n6, true), t2.get().reverse();
        }
        return;
      }
    }
    t2.createLine();
    const s2 = t2.get(), n5 = mi.getNAN();
    this.getHalfEdgeFromXY(e3, n5), s2.setStartXY(n5), this.getHalfEdgeToXY(e3, n5), s2.setEndXY(n5);
  }
  isCurveEdge(e3) {
    if (-1 !== this.m_segmentIndexHe) {
      return -1 !== this.getHalfEdgeUserIndex(e3, this.m_segmentIndexHe);
    }
    return false;
  }
  compareEdgeAnglesCurveHelper_(e3, t2, s2) {
    const n5 = new Pm(), r = new Pm();
    this.querySegmentXY(e3, n5), this.querySegmentXY(t2, r);
    const i2 = n5.get(), o2 = r.get();
    if (i2.equals(o2)) return 0;
    const a2 = new mi();
    this.getHalfEdgeFromXY(e3, a2);
    const h2 = new mi();
    this.getHalfEdgeToXY(e3, h2);
    const m2 = new mi();
    this.getHalfEdgeToXY(t2, m2), n(!h2.isEqualPoint2D(m2));
    return Be(i2, o2);
  }
  compareEdgeAnglesHelper_(e3, t2, s2) {
    if (e3 === t2) return 0;
    if (this.isHalfEdgeCurve(e3) || this.isHalfEdgeCurve(t2)) return this.compareEdgeAnglesCurveHelper_(e3, t2, s2);
    const n5 = mi.getNAN();
    this.getHalfEdgeToXY(e3, n5);
    const r = mi.getNAN();
    if (this.getHalfEdgeToXY(t2, r), n5.isEqualPoint2D(r)) return 0;
    const i2 = mi.getNAN();
    this.getHalfEdgeFromXY(e3, i2);
    const o2 = mi.getNAN();
    o2.setSub(n5, i2);
    const a2 = mi.getNAN();
    if (a2.setSub(r, i2), !s2 || a2.y >= 0 && o2.y > 0) {
      return mi.compareVectors(o2, a2);
    }
    return 0;
  }
  compareEdgeAngles_(e3, t2) {
    return this.compareEdgeAnglesHelper_(e3, t2, false);
  }
  compareEdgeAnglesForPair_(e3, t2) {
    return this.compareEdgeAnglesHelper_(e3, t2, true);
  }
  compareEdgeAngles3D_(e3, t2) {
    return n(0), 0;
  }
  compareEdgeAnglesForPair3D_(e3, t2) {
    return n(0), 0;
  }
  dbgDumpChains_() {
  }
  dbgDumpChainToPolygon_(e3, t2) {
  }
  deleteEdgeInternal_(e3) {
    const t2 = this.getHalfEdgeChain(e3), s2 = this.getHalfEdgeTwin(e3), n5 = this.getHalfEdgeChain(s2);
    n(n5 === t2), n(e3 === this.getHalfEdgeNext(s2) || s2 === this.getHalfEdgeNext(e3));
    let r = this.getHalfEdgeNext(e3);
    r === s2 && (r = this.getHalfEdgeNext(r), r === e3 && (r = gr));
    const i2 = this.getChainIndex_(t2), o2 = this.m_chainAreas.read(i2);
    Number.isNaN(o2) || (this.setChainArea_(t2, Number.NaN), this.setChainPerimeter_(t2, Number.NaN));
    const a2 = this.getChainHalfEdge(t2);
    a2 !== e3 && a2 !== s2 || this.setChainHalfEdge_(t2, r), this.updateVertexToHalfEdgeConnection_(e3, true), this.deleteEdgeImpl_(e3);
  }
  getFirstUnvisitedHalfEdgeOnCluster_(e3, t2, s2) {
    let n5 = t2 !== gr ? t2 : this.getClusterHalfEdge(e3);
    if (n5 === gr) return gr;
    const r = n5;
    for (; ; ) {
      if (1 !== this.getHalfEdgeUserIndex(n5, s2)) return n5;
      const e4 = this.getHalfEdgeNext(this.getHalfEdgeTwin(n5));
      if (e4 === r) return gr;
      n5 = e4;
    }
  }
  removeSpikes_() {
    let e3 = false;
    const t2 = this.createUserIndexForHalfEdges();
    for (let s2 = this.getFirstCluster(); s2 !== gr; s2 = this.getNextCluster(s2)) {
      let n5 = gr;
      for (; ; ) {
        let r = this.getFirstUnvisitedHalfEdgeOnCluster_(s2, n5, t2);
        if (r === gr) break;
        n5 = this.getHalfEdgeNext(this.getHalfEdgeTwin(r));
        let i2 = r;
        for (; ; ) {
          const s3 = this.getHalfEdgeNext(i2), o2 = this.getHalfEdgePrev(i2), a2 = this.getHalfEdgeTwin(i2);
          if (o2 === a2) {
            if (this.deleteEdgeInternal_(i2), e3 = true, n5 !== i2 && n5 !== a2 || (n5 = gr), i2 === r || o2 === r) {
              if (r = s3, i2 === r || o2 === r) break;
              i2 = s3;
              continue;
            }
          } else this.setHalfEdgeUserIndex(i2, t2, 1);
          if (i2 = s3, i2 === r) break;
        }
      }
    }
    return this.deleteUserIndexForHalfEdges(t2), e3;
  }
  progress_(e3, t2 = false) {
  }
  newCluster_() {
    const e3 = this.m_clusterData.newElement();
    return this.m_clusterData.setField(e3, 1, 0), e3;
  }
  newHalfEdgePair_() {
    const e3 = this.m_halfEdgeData.newElement();
    this.m_halfEdgeData.setField(e3, 2, 0), this.m_halfEdgeData.setField(e3, 3, 0);
    const t2 = this.m_halfEdgeData.newElement();
    return this.m_halfEdgeData.setField(t2, 2, 0), this.m_halfEdgeData.setField(t2, 3, 0), this.setHalfEdgeTwin_(e3, t2), this.setHalfEdgeTwin_(t2, e3), e3;
  }
  newChain_() {
    const e3 = this.m_chainData.newElement();
    return this.m_chainData.setField(e3, 2, 0), e3;
  }
  deleteChain_(e3) {
    return n(0), 0;
  }
  getClusterIndex_(e3) {
    return this.m_clusterData.elementToIndex(e3);
  }
  setClusterVertexIterator_(e3, t2) {
    this.m_clusterData.setField(e3, 7, t2);
  }
  setClusterHalfEdge_(e3, t2) {
    this.m_clusterData.setField(e3, 2, t2);
  }
  setClusterParentage_(e3, t2) {
    this.m_clusterData.setField(e3, 1, t2);
  }
  setPrevCluster_(e3, t2) {
    this.m_clusterData.setField(e3, 3, t2);
  }
  setNextCluster_(e3, t2) {
    this.m_clusterData.setField(e3, 4, t2);
  }
  setClusterVertexIndex_(e3, t2) {
    this.m_clusterData.setField(e3, 5, t2);
  }
  getClusterVertexIndex_(e3) {
    return this.m_clusterData.getField(e3, 5);
  }
  setClusterChain_(e3, t2) {
    this.m_clusterData.setField(e3, 6, t2);
  }
  addClusterToExteriorChain_(e3, t2) {
    this.setClusterChain_(t2, e3);
  }
  getHalfEdgeIndex_(e3) {
    return this.m_halfEdgeData.elementToIndex(e3);
  }
  setHalfEdgeOrigin_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 1, t2);
  }
  setHalfEdgeTwin_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 4, t2);
  }
  setHalfEdgePrev_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 5, t2);
  }
  setHalfEdgeNext_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 6, t2);
  }
  setHalfEdgeChain_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 2, t2);
  }
  setHalfEdgeParentage_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 3, t2);
  }
  getHalfEdgeParentageMask_(e3) {
    return this.m_halfEdgeData.getField(e3, 3);
  }
  setHalfEdgeVertexIterator_(e3, t2) {
    this.m_halfEdgeData.setField(e3, 7, t2);
  }
  updateVertexToHalfEdgeConnectionHelper_(e3, t2) {
    const s2 = t2 ? gr : e3;
    for (let n5 = this.getHalfEdgeVertexIterator(e3); n5 !== gr; n5 = this.incrementVertexIterator(n5)) {
      const e4 = this.getVertexFromVertexIterator(n5);
      this.m_shape.setUserIndex(e4, this.m_halfEdgeIndex, s2);
    }
  }
  updateVertexToHalfEdgeConnection_(e3, t2) {
    e3 !== gr && (this.updateVertexToHalfEdgeConnectionHelper_(e3, t2), this.updateVertexToHalfEdgeConnectionHelper_(this.getHalfEdgeTwin(e3), t2));
  }
  getChainIndex_(e3) {
    return this.m_chainData.elementToIndex(e3);
  }
  setChainHalfEdge_(e3, t2) {
    this.m_chainData.setField(e3, 1, t2);
  }
  setChainParentage_(e3, t2) {
    this.m_chainData.setField(e3, 2, t2);
  }
  setChainParent_(e3, t2) {
    this.m_chainData.setField(e3, 3, t2);
    const s2 = this.getChainFirstIsland(t2);
    this.setChainNextInParent_(e3, s2), this.setChainFirstIsland_(t2, e3);
  }
  setChainFirstIsland_(e3, t2) {
    this.m_chainData.setField(e3, 4, t2);
  }
  setChainNextInParent_(e3, t2) {
    this.m_chainData.setField(e3, 5, t2);
  }
  setChainPrev_(e3, t2) {
    this.m_chainData.setField(e3, 6, t2);
  }
  setChainNext_(e3, t2) {
    this.m_chainData.setField(e3, 7, t2);
  }
  setChainArea_(e3, t2) {
    const s2 = this.getChainIndex_(e3);
    this.m_chainAreas.write(s2, t2);
  }
  setChainPerimeter_(e3, t2) {
    const s2 = this.getChainIndex_(e3);
    this.m_chainPerimeters.write(s2, t2);
  }
  updateChainAreaAndPerimeter_(e3) {
    const t2 = this.m_shape.hasCurves(), s2 = new n2(0), n5 = new n2(0), r = this.getChainHalfEdge(e3), i2 = mi.getNAN(), o2 = mi.getNAN(), a2 = mi.getNAN();
    this.getHalfEdgeFromXY(r, i2), o2.setCoordsPoint2D(i2);
    let h2 = r;
    do {
      this.getHalfEdgeToXY(h2, a2), t2 && this.isCurveEdge(h2) || n5.pe(mi.distance(o2, a2));
      this.getHalfEdgeChain(this.getHalfEdgeTwin(h2)) !== e3 && s2.pe((a2.x - i2.x - (o2.x - i2.x)) * (a2.y - i2.y + (o2.y - i2.y)) * 0.5), o2.setCoordsPoint2D(a2), h2 = this.getHalfEdgeNext(h2);
    } while (h2 !== r);
    if (t2) {
      const t3 = new Pm();
      h2 = r;
      do {
        this.getHalfEdgeToXY(h2, a2);
        const r2 = this.isCurveEdge(h2);
        r2 && (this.querySegmentXY(h2, t3), n5.pe(t3.get().calculateLength2D()));
        if (this.getHalfEdgeChain(this.getHalfEdgeTwin(h2)) !== e3 && r2) {
          const e4 = t3.get().calculateArea2DHelper();
          s2.pe(e4);
        }
        h2 = this.getHalfEdgeNext(h2);
      } while (h2 !== r);
    }
    const m2 = this.getChainIndex_(e3);
    this.m_chainAreas.write(m2, s2.getResult()), this.m_chainPerimeters.write(m2, n5.getResult());
  }
  getChainTopmostEdge_(e3) {
    return n(0), 0;
  }
  planeSweepParentage_(e3, t2) {
    const s2 = new Ws(this), n5 = new pt();
    n5.setCapacity(Math.trunc(this.m_pointCount / 2)), n5.setComparator(s2);
    const r = [], i2 = this.createUserIndexForHalfEdges();
    let o2 = null;
    const a2 = mi.getNAN();
    for (let h2 = this.getFirstCluster(); h2 !== gr; h2 = this.getNextCluster(h2)) {
      this.progress_(t2);
      const m2 = this.getClusterHalfEdge(h2);
      if (m2 !== gr) {
        if (r.length = 0, !this.tryOptimizedInsertion_(n5, i2, r, h2, m2)) {
          this.queryXY(h2, a2), s2.setY(a2.y);
          let e4 = m2;
          do {
            const t3 = this.getHalfEdgeUserIndex(e4, i2);
            -1 !== t3 && (n5.deleteNode(t3), this.setHalfEdgeUserIndex(e4, i2, mt.impossibleIndex2())), e4 = this.getHalfEdgeNext(this.getHalfEdgeTwin(e4));
          } while (m2 !== e4);
          e4 = m2;
          do {
            if (-1 === this.getHalfEdgeUserIndex(e4, i2)) {
              const t3 = n5.addElement(e4);
              r.push(t3);
            }
            e4 = this.getHalfEdgeNext(this.getHalfEdgeTwin(e4));
          } while (m2 !== e4);
        }
        for (let t3 = r.length - 1; t3 >= 0; t3--) {
          const s3 = r[t3], o3 = n5.getElement(s3), a3 = this.getHalfEdgeTwin(o3);
          this.setHalfEdgeUserIndex(a3, i2, s3), this.planeSweepParentagePropagateParentage_(n5, s3, e3);
        }
      } else if (this.getClusterChain(h2) === gr) {
        null === o2 && (o2 = new js(this)), this.queryXY(h2, a2), o2.setPointXY(a2);
        const e4 = n5.searchLowerBound(o2);
        let t3 = this.m_universeChain;
        if (-1 !== e4) {
          let s3 = n5.getElement(e4);
          this.getHalfEdgeChain(s3) === this.getHalfEdgeChain(this.getHalfEdgeTwin(s3)) && (s3 = this.getLeftSkipPolylines_(n5, e4)), s3 !== gr && (t3 = this.getHalfEdgeChain(s3));
        }
        this.addClusterToExteriorChain_(t3, h2);
      }
    }
    this.deleteUserIndexForHalfEdges(i2);
  }
  planeSweepParentagePropagateParentage_(e3, t2, s2) {
    const n5 = e3.getElement(t2), r = this.getHalfEdgeChain(n5);
    if (this.getChainParent(r) !== gr) return;
    const i2 = this.getLeftSkipPolylines_(e3, t2), o2 = this.getHalfEdgeTwin(n5), a2 = this.getHalfEdgeChain(o2);
    let h2 = this.getChainParent(r), m2 = this.getChainParent(a2);
    if (i2 === gr) h2 === gr && (a2 === r ? (this.setChainParent_(a2, this.m_universeChain), m2 = this.m_universeChain, h2 = m2) : (m2 === gr && (this.setChainParent_(a2, this.m_universeChain), m2 = this.m_universeChain), this.setChainParent_(r, a2), h2 = a2));
    else {
      const e4 = this.getHalfEdgeChain(i2);
      if (m2 === gr) {
        if (this.getChainArea(e4) <= 0) {
          const t3 = this.getChainParent(e4);
          this.setChainParent_(a2, t3), m2 = t3;
        } else this.setChainParent_(a2, e4), m2 = e4;
        a2 === r && (h2 = m2);
      }
    }
    h2 === gr && (this.trySetChainParentFromTwin_(r, a2), h2 = this.getChainParent(r)), n(h2 !== gr), s2 === Zs2.enumInputModeBuildGraph ? this.propagateParentageBuildGraph_(e3, t2, n5, i2) : s2 === Zs2.enumInputModeSimplifyWinding ? this.propagateParentageWinding_(e3, t2, n5, i2, o2, r, a2) : s2 === Zs2.enumInputModeSimplifyAlternate && this.propagateParentageAlternate_(e3, t2, n5, i2, o2, r, a2);
  }
  propagateParentageBuildGraph_(e3, t2, s2, n5) {
    let r, i2 = t2;
    n5 === gr ? (i2 = e3.getNext(i2), r = this.getHalfEdgeChain(s2)) : r = this.getHalfEdgeChain(n5);
    let o2 = null, a2 = this.getChainParentage(r);
    for (this.m_bBuildGeometryParentageSets && (o2 = this.getChainBitSet(r)); -1 !== i2; i2 = e3.getNext(i2)) {
      const t3 = e3.getElement(i2), s3 = this.getHalfEdgeTwin(t3);
      r = this.getHalfEdgeChain(t3);
      const n6 = this.getHalfEdgeChain(s3);
      if (this.m_bBuildGeometryParentageSets) {
        let e4 = this.getChainBitSet(n6);
        e4 = new Ls2({ copy: e4 }), e4.assignOr(o2), this.setChainBitSet_(n6, e4);
        let s4 = this.getChainBitSet(r);
        const i3 = this.getLeftEdgeBitSet_(t3), a3 = new Ls2({ copy: o2 });
        if (a3.assignSubtract(i3), a3.isZero()) break;
        s4 = new Ls2({ copy: s4 }), s4.assignOr(a3), this.setChainBitSet_(r, s4), o2 = s4;
      }
      const h2 = this.getChainParentage(n6), m2 = h2 | a2;
      m2 !== h2 && this.setChainParentage_(n6, m2);
      let l2 = this.getChainParentage(r);
      const g = a2 & ~this.getHalfEdgeUserIndex(t3, this.m_tmpHalfEdgeParentageIndexLeft);
      if (g && (l2 |= g, this.setChainParentage_(r, l2)), 0 === g) break;
      a2 = l2;
    }
  }
  propagateParentageWinding_(e3, t2, s2, n5, r, i2, o2) {
    if (i2 === o2) return;
    let a2 = this.getHalfEdgeUserIndex(s2, this.m_tmpHalfEdgeWindingNumberIndex);
    a2 += this.getHalfEdgeUserIndex(r, this.m_tmpHalfEdgeWindingNumberIndex);
    let h2 = 0;
    const m2 = [], g = [];
    g.push(0);
    for (let u = e3.getFirst(); u !== t2; u = e3.getNext(u)) {
      const t3 = e3.getElement(u), s3 = this.getHalfEdgeTwin(t3), n6 = this.getHalfEdgeChain(t3), r2 = this.getHalfEdgeChain(s3);
      if (n6 !== r2) {
        let e4 = this.getHalfEdgeUserIndex(t3, this.m_tmpHalfEdgeWindingNumberIndex);
        e4 += this.getHalfEdgeUserIndex(s3, this.m_tmpHalfEdgeWindingNumberIndex), h2 += e4;
        let i3 = false;
        0 !== m2.length && m2.at(-1) === r2 && (g.pop(), m2.pop(), i3 = true), n(this.getChainParent(r2) !== gr), i3 && this.getChainParent(r2) === n6 || (g.push(h2), m2.push(n6));
      }
    }
    if (h2 += a2, 0 !== m2.length && m2.at(-1) === o2 && (g.pop(), m2.pop()), 0 !== h2) {
      if (0 === g.at(-1)) {
        const e4 = this.m_simplifiedGeometry, t3 = this.getGeometryID(e4);
        this.setChainParentage_(i2, t3);
      }
    } else if (0 !== g.at(-1)) {
      const e4 = this.m_simplifiedGeometry, t3 = this.getGeometryID(e4);
      this.setChainParentage_(i2, t3);
    }
  }
  propagateParentageAlternate_(e3, t2, s2, n5, r, i2, o2) {
    const a2 = this.m_simplifiedGeometry, h2 = this.getGeometryID(a2);
    if (n5 === gr) {
      this.setChainParentage_(o2, this.m_universeGeomID);
      1 & this.getHalfEdgeUserIndex(s2, this.m_tmpHalfEdgeOddEvenNumberIndex) ? this.setChainParentage_(i2, h2) : this.setChainParentage_(i2, this.m_universeGeomID);
    } else {
      const e4 = this.getChainParentage(o2);
      if (0 === e4) {
        const e5 = this.getHalfEdgeChain(n5), t3 = this.getChainParentage(e5);
        this.setChainParentage_(o2, t3);
        1 & this.getHalfEdgeUserIndex(s2, this.m_tmpHalfEdgeOddEvenNumberIndex) ? this.setChainParentage_(i2, t3 === h2 ? this.m_universeGeomID : h2) : this.setChainParentage_(i2, t3);
      } else {
        1 & this.getHalfEdgeUserIndex(s2, this.m_tmpHalfEdgeOddEvenNumberIndex) ? this.setChainParentage_(i2, e4 === h2 ? this.m_universeGeomID : h2) : this.setChainParentage_(i2, e4);
      }
    }
  }
  tryOptimizedInsertion_(e3, t2, s2, n5, r) {
    let i2 = r, o2 = -1, a2 = gr, h2 = 0;
    do {
      if (2 === h2) return false;
      const e4 = this.getHalfEdgeUserIndex(i2, t2);
      if (-1 !== e4) {
        if (-1 !== o2) return false;
        o2 = e4;
      } else {
        if (a2 !== gr) return false;
        a2 = i2;
      }
      h2++, i2 = this.getHalfEdgeNext(this.getHalfEdgeTwin(i2));
    } while (r !== i2);
    return a2 !== gr && -1 !== o2 && (this.setHalfEdgeUserIndex(e3.getElement(o2), t2, mt.impossibleIndex2()), e3.setElement(o2, a2), s2.push(o2), true);
  }
  trySetChainParentFromTwin_(e3, t2) {
    const s2 = this.getChainArea(e3);
    if (0 === s2) return false;
    const n5 = this.getChainArea(t2);
    if (s2 > 0 && n5 < 0 || s2 < 0 && n5 > 0) return this.setChainParent_(e3, t2), true;
    {
      const s3 = this.getChainParent(t2);
      if (s3 !== gr) return this.setChainParent_(e3, s3), true;
    }
    return false;
  }
  createHalfEdges_(e3, t2) {
    this.m_halfEdgeIndex = this.m_shape.createUserIndex();
    for (let s2 = 0, n5 = t2.size(); s2 < n5; s2++) {
      const n6 = t2.read(s2), r = this.m_shape.getUserIndex(n6, this.m_clusterIndex), o2 = this.m_shape.getPathFromVertex(n6), a2 = this.m_shape.getGeometryFromPath(o2), m2 = this.m_shape.getGeometryType(a2);
      if (h(m2)) {
        const t3 = this.m_shape.getNextVertex(n6);
        if (t3 === gr) continue;
        const s3 = this.m_shape.getUserIndex(t3, this.m_clusterIndex);
        if (r === s3) continue;
        const o3 = this.newHalfEdgePair_(), h2 = this.getHalfEdgeTwin(o3), l2 = this.m_clusterVertices.newElement();
        this.m_clusterVertices.setField(l2, 0, n6), this.m_clusterVertices.setField(l2, 1, -1), this.setHalfEdgeVertexIterator_(o3, l2), this.m_shape.setUserIndex(n6, this.m_halfEdgeIndex, o3), this.setHalfEdgeOrigin_(o3, r);
        const g = this.getClusterHalfEdge(r);
        if (g === gr) this.setClusterHalfEdge_(r, o3), this.setHalfEdgePrev_(o3, h2), this.setHalfEdgeNext_(h2, o3);
        else {
          const e4 = this.getHalfEdgePrev(g);
          this.setHalfEdgePrev_(g, h2), this.setHalfEdgeNext_(h2, g), this.setHalfEdgeNext_(e4, o3), this.setHalfEdgePrev_(o3, e4);
        }
        this.setHalfEdgeOrigin_(h2, s3);
        const u = this.getClusterHalfEdge(s3);
        if (u === gr) this.setClusterHalfEdge_(s3, h2), this.setHalfEdgeNext_(o3, h2), this.setHalfEdgePrev_(h2, o3);
        else {
          const e4 = this.getHalfEdgePrev(u);
          this.setHalfEdgePrev_(u, o3), this.setHalfEdgeNext_(o3, u), this.setHalfEdgeNext_(e4, h2), this.setHalfEdgePrev_(h2, e4);
        }
        const c = this.getGeometryID(a2);
        if (e3 === Zs2.enumInputModeBuildGraph) {
          const e4 = m2 === a.enumPolygon ? c : 0;
          if (this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndex, 0), this.setHalfEdgeUserIndex(o3, this.m_tmpHalfEdgeParentageIndex, e4), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndexLeft, e4), this.setHalfEdgeUserIndex(o3, this.m_tmpHalfEdgeParentageIndexLeft, 0), this.m_bBuildGeometryParentageSets) {
            const e5 = new Ls2(), t4 = this.m_shape.getGeometryUserIndex(a2, this.m_geometryIDIndex);
            e5.setBit(t4), this.setEdgeBitSet_(o3, e5), this.setEdgeBitSet_(h2, null), this.setLeftEdgeBitSet_(h2, e5), this.setLeftEdgeBitSet_(o3, null);
          }
        } else if (e3 === Zs2.enumInputModeSimplifyWinding) {
          const e4 = this.m_shape.getXY(n6), s4 = this.m_shape.getXY(t3);
          let r2 = 0, i2 = 0;
          e4.compare(s4) < 0 ? r2 = 1 : i2 = -1, this.setHalfEdgeUserIndex(o3, this.m_tmpHalfEdgeWindingNumberIndex, r2), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeWindingNumberIndex, i2);
        } else e3 === Zs2.enumInputModeSimplifyAlternate && (this.setHalfEdgeUserIndex(o3, this.m_tmpHalfEdgeOddEvenNumberIndex, 1), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeOddEvenNumberIndex, 1));
        const _ = m2 === a.enumPolygon ? _tn.c_EdgeBitMask : 0;
        this.setHalfEdgeParentage_(o3, c | _), this.setHalfEdgeParentage_(h2, c | _);
      }
    }
    if (this.m_shape.hasCurves()) {
      this.m_segmentIndexHe = this.createUserIndexForHalfEdges();
      for (let e4 = 0, s2 = t2.size(); e4 < s2; e4++) {
        const s3 = t2.read(e4);
        if (this.m_shape.getSegment(s3)) {
          const e5 = this.m_shape.getUserIndex(s3, this.m_halfEdgeIndex);
          e5 !== gr && (this.setHalfEdgeUserIndex(e5, this.m_segmentIndexHe, this.m_shape.getVertexIndex(s3)), this.setHalfEdgeUserIndex(this.getHalfEdgeTwin(e5), this.m_segmentIndexHe, -2));
        }
      }
    }
  }
  mergeVertexListsOfEdges_(e3, t2) {
    {
      const s3 = this.getHalfEdgeVertexIterator(t2);
      if (s3 !== gr) {
        const n6 = this.getHalfEdgeVertexIterator(e3);
        this.m_clusterVertices.setField(s3, 1, n6), this.setHalfEdgeVertexIterator_(e3, s3), this.setHalfEdgeVertexIterator_(t2, gr);
      }
    }
    const s2 = this.getHalfEdgeTwin(e3), n5 = this.getHalfEdgeTwin(t2);
    {
      const e4 = this.getHalfEdgeVertexIterator(n5);
      if (e4 !== gr) {
        const t3 = this.getHalfEdgeVertexIterator(s2);
        this.m_clusterVertices.setField(e4, 1, t3), this.setHalfEdgeVertexIterator_(s2, e4), this.setHalfEdgeVertexIterator_(n5, gr);
      }
    }
    if (-1 !== this.m_segmentIndexHe) {
      let r = this.getHalfEdgeUserIndex(e3, this.m_segmentIndexHe);
      if (-1 !== r) {
        if (-2 === r) {
          const s3 = this.getHalfEdgeUserIndex(t2, this.m_segmentIndexHe);
          this.setHalfEdgeUserIndex(e3, this.m_segmentIndexHe, s3);
        }
        if (r = this.getHalfEdgeUserIndex(s2, this.m_segmentIndexHe), -2 === r) {
          const e4 = this.getHalfEdgeUserIndex(n5, this.m_segmentIndexHe);
          this.setHalfEdgeUserIndex(s2, this.m_segmentIndexHe, e4);
        }
      }
    }
  }
  sortHalfEdgesByAngle_(e3) {
    const t2 = [];
    for (let s2 = this.getFirstCluster(); s2 !== gr; s2 = this.getNextCluster(s2)) {
      t2.length = 0;
      const n5 = this.getClusterHalfEdge(s2);
      if (n5 !== gr) {
        let r = n5;
        do {
          t2.push(r), r = this.getHalfEdgeNext(this.getHalfEdgeTwin(r));
        } while (r !== n5);
        if (t2.length > 1) {
          let r2 = true;
          t2.length > 2 ? (t2.sort((e4, t3) => this.compareEdgeAngles_(e4, t3)), t2.push(t2[0])) : this.compareEdgeAnglesForPair_(t2[0], t2[1]) > 0 ? t2[1] = Pt(t2[0], t2[0] = t2[1]) : r2 = false;
          let i2 = t2[0], o2 = i2, a2 = this.getHalfEdgeTo(o2), h2 = this.getHalfEdgeTwin(o2), m2 = gr;
          for (let s3 = 1, n6 = t2.length; s3 < n6; s3++) {
            const n7 = t2[s3], r3 = this.getHalfEdgeTwin(n7), l2 = this.getHalfEdgeOrigin(r3);
            if (l2 !== a2 || n7 === o2) this.updateVertexToHalfEdgeConnection_(m2, false), m2 = gr, o2 = n7, a2 = l2, h2 = r3;
            else {
              if (e3 === Zs2.enumInputModeBuildGraph) {
                const e4 = this.getHalfEdgeParentageMask_(o2) | this.getHalfEdgeParentageMask_(n7);
                if (this.setHalfEdgeParentage_(o2, e4), this.setHalfEdgeParentage_(h2, e4), this.setHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeParentageIndex, this.getHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeParentageIndex) | this.getHalfEdgeUserIndex(n7, this.m_tmpHalfEdgeParentageIndex)), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndex, this.getHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndex) | this.getHalfEdgeUserIndex(r3, this.m_tmpHalfEdgeParentageIndex)), this.setHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeParentageIndexLeft, this.getHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeParentageIndexLeft) | this.getHalfEdgeUserIndex(n7, this.m_tmpHalfEdgeParentageIndexLeft)), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndexLeft, this.getHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeParentageIndexLeft) | this.getHalfEdgeUserIndex(r3, this.m_tmpHalfEdgeParentageIndexLeft)), this.m_bBuildGeometryParentageSets) {
                  let e5, t3, s4;
                  e5 = this.getEdgeBitSet_(o2), t3 = this.getEdgeBitSet_(n7), s4 = new Ls2({ copy: e5 }), s4.assignOr(t3), this.setEdgeBitSet_(o2, s4), e5 = this.getEdgeBitSet_(h2), t3 = this.getEdgeBitSet_(r3), s4 = new Ls2({ copy: e5 }), s4.assignOr(t3), this.setEdgeBitSet_(h2, s4), e5 = this.getLeftEdgeBitSet_(o2), t3 = this.getLeftEdgeBitSet_(n7), s4 = new Ls2({ copy: e5 }), s4.assignOr(t3), this.setLeftEdgeBitSet_(o2, s4), e5 = this.getLeftEdgeBitSet_(h2), t3 = this.getLeftEdgeBitSet_(r3), s4 = new Ls2({ copy: e5 }), s4.assignOr(t3), this.setLeftEdgeBitSet_(h2, s4);
                }
              } else if (-1 !== this.m_tmpHalfEdgeWindingNumberIndex) {
                const e4 = this.getHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeWindingNumberIndex) + this.getHalfEdgeUserIndex(n7, this.m_tmpHalfEdgeWindingNumberIndex), t3 = this.getHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeWindingNumberIndex) + this.getHalfEdgeUserIndex(r3, this.m_tmpHalfEdgeWindingNumberIndex);
                this.setHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeWindingNumberIndex, e4), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeWindingNumberIndex, t3);
              } else if (-1 !== this.m_tmpHalfEdgeOddEvenNumberIndex) {
                const e4 = this.getHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeOddEvenNumberIndex) + this.getHalfEdgeUserIndex(n7, this.m_tmpHalfEdgeOddEvenNumberIndex), t3 = this.getHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeOddEvenNumberIndex) + this.getHalfEdgeUserIndex(r3, this.m_tmpHalfEdgeOddEvenNumberIndex);
                this.setHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeOddEvenNumberIndex, e4), this.setHalfEdgeUserIndex(h2, this.m_tmpHalfEdgeOddEvenNumberIndex, t3);
              }
              this.mergeVertexListsOfEdges_(o2, n7), this.deleteEdgeImpl_(n7), m2 = o2, t2[s3] = gr, n7 === i2 && (t2[0] = gr, i2 = gr);
            }
          }
          if (this.updateVertexToHalfEdgeConnection_(m2, false), m2 = gr, !r2) {
            i2 = gr;
            for (let e4 = 0, s3 = t2.length; e4 < s3; e4++) {
              const s4 = t2[e4];
              if (s4 !== gr) {
                i2 = s4;
                break;
              }
            }
            n5 !== i2 && this.setClusterHalfEdge_(s2, i2);
            continue;
          }
          i2 = gr;
          for (let e4 = 0, s3 = t2.length; e4 < s3; e4++) {
            const s4 = t2[e4];
            if (s4 === gr) continue;
            if (i2 === gr) {
              i2 = s4, o2 = i2, a2 = this.getHalfEdgeTo(o2), h2 = this.getHalfEdgeTwin(o2);
              continue;
            }
            if (s4 === o2) continue;
            const n6 = this.getHalfEdgeTwin(s4), r3 = this.getHalfEdgeOrigin(n6);
            this.setHalfEdgeNext_(h2, s4), this.setHalfEdgePrev_(s4, h2), o2 = s4, a2 = r3, h2 = n6;
          }
          this.setClusterHalfEdge_(s2, i2);
        }
      }
    }
  }
  sortHalfEdgesByAngle3D_(e3) {
    n(0);
  }
  buildChains_(e3) {
    this.m_universeChain = this.newChain_(), this.setChainHalfEdge_(this.m_universeChain, gr);
    let t2 = this.m_universeChain;
    const s2 = this.createUserIndexForHalfEdges();
    for (let n5 = this.getFirstCluster(); n5 !== gr; n5 = this.getNextCluster(n5)) {
      const e4 = this.getClusterHalfEdge(n5);
      if (e4 !== gr) {
        let n6 = e4;
        do {
          if (1 !== this.getHalfEdgeUserIndex(n6, s2)) {
            const e5 = this.newChain_();
            this.setChainHalfEdge_(e5, n6), this.setChainPrev_(e5, t2), this.setChainNext_(t2, e5);
            let r = null;
            this.m_bBuildGeometryParentageSets && (r = new Ls2()), t2 = e5;
            let i2 = 0, o2 = n6;
            do {
              -1 !== this.m_tmpHalfEdgeParentageIndex && (i2 |= this.getHalfEdgeUserIndex(o2, this.m_tmpHalfEdgeParentageIndex)), this.m_bBuildGeometryParentageSets && r.assignOr(this.getEdgeBitSet_(o2)), this.setHalfEdgeChain_(o2, e5), this.setHalfEdgeUserIndex(o2, s2, 1), o2 = this.getHalfEdgeNext(o2);
            } while (o2 !== n6);
            this.m_bBuildGeometryParentageSets && this.setChainBitSet_(e5, r), this.setChainParentage_(e5, i2);
          }
          n6 = this.getHalfEdgeNext(this.getHalfEdgeTwin(n6));
        } while (n6 !== e4);
      }
    }
    this.m_chainAreas = new nt(this.m_chainData.size(), Number.NaN), this.m_chainPerimeters = new nt(this.m_chainData.size(), Number.NaN), this.setChainArea_(this.m_universeChain, Number.POSITIVE_INFINITY), this.setChainPerimeter_(this.m_universeChain, Number.POSITIVE_INFINITY), this.deleteUserIndexForHalfEdges(s2);
  }
  simplify_(e3) {
    n(0);
  }
  simplifyAlternate_() {
    n(0);
  }
  simplifyWinding_() {
    n(0);
  }
  setEditShapeImpl_(e3, t2, s2, n5, r) {
    this.removeShape(), this.m_bBuildChains = r, this.m_shape = e3, this.m_geometryIDIndex = this.m_shape.createGeometryUserIndex();
    let i2 = this.m_shape.getTotalPointCount();
    if (s2) {
      i2 = 0;
      for (let e4 = 0, t3 = s2.length; e4 < t3; e4++) i2 += this.m_shape.getPointCount(s2[e4]);
    }
    const o2 = new st(0);
    let a2 = 0, h2 = 0;
    {
      let e4 = null != s2 ? s2[0] : this.m_shape.getFirstGeometry(), t3 = 1;
      for (; e4 !== gr; ) {
        this.m_shape.setGeometryUserIndex(e4, this.m_geometryIDIndex, h2++);
        for (let t4 = this.m_shape.getFirstPath(e4); t4 !== gr; t4 = this.m_shape.getNextPath(t4)) {
          let e5 = this.m_shape.getFirstVertex(t4);
          for (let s3 = 0, n6 = this.m_shape.getPathSize(t4); s3 < n6; s3++) o2.add(e5), e5 = this.m_shape.getNextVertex(e5);
        }
        l(this.m_shape.getGeometryType(e4)) || (a2 += this.m_shape.getPathCount(e4)), null != s2 ? (e4 = t3 < s2.length ? s2[t3] : gr, t3++) : e4 = this.m_shape.getNextGeometry(e4);
      }
    }
    this.m_universeGeomID = 1 << Math.min(h2, 31), this.m_pointCount = o2.size(), this.m_shape.sortVerticesSimpleByY(o2, 0, this.m_pointCount), this.m_clusterVertices.setCapacity(this.m_pointCount), this.progress_(n5, true), this.m_clusterData.setCapacity(this.m_pointCount + 10), this.m_halfEdgeData.setCapacity(2 * this.m_pointCount + 32), this.m_chainData.setCapacity(Math.max(32, a2)), this.m_clusterIndex = this.m_shape.createUserIndex();
    const m2 = mi.getNAN();
    let l2 = 0;
    const u = mi.getNAN();
    for (let g = 0; g <= this.m_pointCount; g++) {
      if (g < this.m_pointCount) {
        const e4 = o2.read(g);
        this.m_shape.queryXY(e4, u);
      } else u.setNAN();
      if (!m2.isEqualPoint2D(u)) {
        if (l2 < g) {
          const e4 = this.newCluster_();
          let t3 = gr, s3 = -1;
          for (let n6 = l2; n6 < g; n6++) {
            s3 = o2.read(n6), this.m_shape.setUserIndex(s3, this.m_clusterIndex, e4);
            const r2 = this.m_clusterVertices.newElement();
            this.m_clusterVertices.setField(r2, 0, s3), this.m_clusterVertices.setField(r2, 1, t3), t3 = r2;
            const i3 = this.m_shape.getPathFromVertex(s3), a3 = this.m_shape.getGeometryFromPath(i3), h3 = this.getGeometryID(a3);
            this.setClusterParentage_(e4, this.getClusterParentage(e4) | h3);
          }
          this.setClusterVertexIterator_(e4, t3), this.setClusterVertexIndex_(e4, this.m_shape.getVertexIndex(s3)), this.m_lastCluster !== gr && this.setNextCluster_(this.m_lastCluster, e4), this.setPrevCluster_(e4, this.m_lastCluster), this.m_lastCluster = e4, this.m_firstCluster === gr && (this.m_firstCluster = e4);
        }
        l2 = g, m2.setCoordsPoint2D(u);
      }
    }
    if (this.m_shape.hasSegmentParentage()) {
      -1 === this.m_clusterBreakNodeIndex && (this.m_clusterBreakNodeIndex = this.createUserIndexForClusters());
      for (let e4 = 0; e4 < this.m_pointCount; e4++) {
        const t3 = o2.read(e4);
        if (this.m_shape.getSegmentParentageBreakVertex(t3)) {
          const e5 = this.getClusterFromVertex(t3);
          this.setBreakNode(e5, true);
        }
      }
    }
    this.progress_(n5, true);
    {
      let e4 = null != s2 ? s2[0] : this.m_shape.getFirstGeometry(), t3 = 1;
      for (; e4 !== gr; ) {
        for (let t4 = this.m_shape.getFirstPath(e4); t4 !== gr; t4 = this.m_shape.getNextPath(t4)) {
          if (this.m_shape.isStrongPathStart(t4)) {
            const e5 = this.m_shape.getFirstVertex(t4), s3 = this.getClusterFromVertex(e5);
            this.setStrongPathNode(s3, true);
          }
          if (this.m_shape.isStrongPathEnd(t4)) {
            const e5 = this.m_shape.isClosedPath(t4) ? this.m_shape.getFirstVertex(t4) : this.m_shape.getLastVertex(t4), s3 = this.getClusterFromVertex(e5);
            this.setStrongPathNode(s3, true);
          }
        }
        null != s2 ? (e4 = t3 < s2.length ? s2[t3] : gr, t3++) : e4 = this.m_shape.getNextGeometry(e4);
      }
    }
    if (t2 === Zs2.enumInputModeBuildGraph && (this.m_tmpHalfEdgeParentageIndex = this.createUserIndexForHalfEdges(), this.m_tmpHalfEdgeParentageIndexLeft = this.createUserIndexForHalfEdges()), t2 === Zs2.enumInputModeSimplifyWinding && (this.m_tmpHalfEdgeWindingNumberIndex = this.createUserIndexForHalfEdges()), t2 === Zs2.enumInputModeSimplifyAlternate && (this.m_tmpHalfEdgeOddEvenNumberIndex = this.createUserIndexForHalfEdges()), this.createHalfEdges_(t2, o2), this.dbgNavigate_(), this.sortHalfEdgesByAngle_(t2), !Number.isNaN(this.m_checkDirtyPlanesweepTolerance) && !this.checkStructureAfterDirtySweep_()) return this.m_bDirtyCheckFailed = true, void this.cleanSetEditShapeImpl_();
    this.buildChains_(t2), -1 !== this.m_tmpHalfEdgeParentageIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndex), this.m_tmpHalfEdgeParentageIndex = -1), this.m_bBuildChains && this.planeSweepParentage_(t2, n5), -1 !== this.m_tmpHalfEdgeParentageIndexLeft && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndexLeft), this.m_tmpHalfEdgeParentageIndexLeft = -1), this.dbgChkChainParents_(), this.dbgDumpChains_(), this.mergeSegmentParentage_(), this.dbgNavigate_(), this.dbgDumpChains_(), this.cleanSetEditShapeImpl_();
  }
  setEditShapeImpl3D_(e3, t2, s2, n5, r) {
    n(0);
  }
  cleanSetEditShapeImpl_() {
    -1 !== this.m_tmpHalfEdgeParentageIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndex), this.m_tmpHalfEdgeParentageIndex = -1), -1 !== this.m_tmpHalfEdgeParentageIndexLeft && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeParentageIndexLeft), this.m_tmpHalfEdgeParentageIndexLeft = -1), -1 !== this.m_tmpHalfEdgeWindingNumberIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeWindingNumberIndex), this.m_tmpHalfEdgeWindingNumberIndex = -1), -1 !== this.m_tmpHalfEdgeOddEvenNumberIndex && (this.deleteUserIndexForHalfEdges(this.m_tmpHalfEdgeOddEvenNumberIndex), this.m_tmpHalfEdgeOddEvenNumberIndex = -1);
  }
  cleanSetEditShapeImpl3D_() {
    n(0);
  }
  dbgNavigate_() {
  }
  dbgChkChainParents_() {
  }
  deleteEdgeImpl_(e3) {
    const t2 = this.getHalfEdgeNext(e3), s2 = this.getHalfEdgePrev(e3), n5 = this.getHalfEdgeTwin(e3), r = this.getHalfEdgeNext(n5), i2 = this.getHalfEdgePrev(n5);
    t2 !== n5 && (this.setHalfEdgeNext_(i2, t2), this.setHalfEdgePrev_(t2, i2)), s2 !== n5 && (this.setHalfEdgeNext_(s2, r), this.setHalfEdgePrev_(r, s2));
    const o2 = this.getHalfEdgeOrigin(e3);
    this.getClusterHalfEdge(o2) === e3 && (r !== e3 ? this.setClusterHalfEdge_(o2, r) : this.setClusterHalfEdge_(o2, gr));
    const a2 = this.getHalfEdgeOrigin(n5);
    this.getClusterHalfEdge(a2) === n5 && (t2 !== n5 ? this.setClusterHalfEdge_(a2, t2) : this.setClusterHalfEdge_(a2, gr)), this.m_halfEdgeData.deleteElement(e3), this.m_halfEdgeData.deleteElement(n5);
  }
  getLeftSkipPolylines_(e3, t2) {
    let s2 = t2;
    for (; ; ) {
      if (s2 = e3.getPrev(s2), -1 === s2) return gr;
      {
        const t3 = e3.getElement(s2);
        if (this.getHalfEdgeChain(t3) !== this.getHalfEdgeChain(this.getHalfEdgeTwin(t3))) return t3;
      }
    }
  }
  checkStructureAfterDirtySweep_() {
    const e3 = H(this.m_checkDirtyPlanesweepTolerance), t2 = new mi(), s2 = new mi(), n5 = new mi(), r = new mi(), i2 = new mi();
    for (let o2 = this.getFirstCluster(); o2 !== gr; o2 = this.getNextCluster(o2)) {
      const a2 = this.getClusterHalfEdge(o2);
      if (a2 !== gr) {
        let o3 = a2;
        this.getHalfEdgeFromXY(o3, t2), this.getHalfEdgeToXY(o3, s2), n5.setSub(s2, t2);
        let h2 = n5.sqrLength();
        do {
          const a3 = o3;
          if (o3 = this.getHalfEdgeNext(this.getHalfEdgeTwin(o3)), o3 !== a3) {
            this.getHalfEdgeToXY(o3, r), i2.setSub(r, t2);
            const a4 = i2.sqrLength(), m2 = i2.crossProduct(n5), l2 = m2 * m2 / (a4 * h2);
            if (Math.min(a4, h2) * l2 <= e3) {
              if (i2.dotProduct(n5) >= 0) return false;
            }
            n5.assign(i2), h2 = a4, s2.assign(r);
          }
        } while (o3 !== a2);
      }
    }
    return true;
  }
  extractPolygonPathFromChain_(e3, t2, s2, n5, r) {
    const i2 = this.m_shape.hasSegmentParentage(), o2 = this.getChainHalfEdge(s2);
    let a2 = o2, h2 = gr;
    const m2 = new se();
    do {
      const o3 = this.getHalfEdgeTwin(a2);
      if (this.getHalfEdgeChain(o3) !== s2) {
        let s3 = gr;
        const o4 = this.getHalfEdgeOrigin(a2);
        if (n5 === gr) {
          const e4 = this.getClusterVertexIterator(o4);
          s3 = this.getVertexFromVertexIterator(e4);
        } else for (let e4 = this.getClusterVertexIterator(o4); e4 !== gr; e4 = this.incrementVertexIterator(e4)) {
          const t3 = this.getVertexFromVertexIterator(e4);
          s3 === gr && (s3 = t3);
          const r2 = this.m_shape.getPathFromVertex(t3);
          if (this.m_shape.getGeometryFromPath(r2) === n5) {
            s3 = t3;
            break;
          }
        }
        let l2;
        if (h2 === gr && (h2 = e3.insertPath(t2, gr), e3.setClosedPath(h2, true)), this.m_shape === e3 ? l2 = e3.addVertex(h2, s3) : (this.m_shape.queryPoint(s3, m2), l2 = e3.addPoint(h2, m2)), this.isHalfEdgeCurve(a2) && (this.querySegmentXY(a2, r), e3.setSegmentToIndex(e3.getVertexIndex(l2), r.get().clone())), i2) {
          const t3 = this.getSegmentParentage(a2);
          e3.setSegmentParentageAndBreak(l2, t3, this.isBreakNode(o4));
        }
      }
      a2 = this.getHalfEdgeNext(a2);
    } while (a2 !== o2);
  }
  mergeSegmentParentage_() {
    if (!this.m_shape.hasSegmentParentage()) return;
    n(-1 !== this.m_clusterBreakNodeIndex), n(-1 === this.m_segmentParentageIndex);
    for (let n5 = this.getFirstCluster(); n5 !== gr; n5 = this.getNextCluster(n5)) {
      let e4 = 0;
      const t3 = this.getClusterHalfEdge(n5);
      if (t3 !== gr) {
        let s3 = t3;
        do {
          e4++, s3 = this.getHalfEdgeNext(this.getHalfEdgeTwin(s3));
        } while (s3 !== t3 && e4 < 3);
      }
      2 !== e4 && this.setBreakNode(n5, true);
    }
    let e3 = [], t2 = [];
    this.m_segmentParentageIndex = this.createUserIndexForHalfEdges();
    const s2 = this.createUserIndexForHalfEdges();
    for (let n5 = this.getFirstCluster(); n5 !== gr; n5 = this.getNextCluster(n5)) {
      const r = this.getClusterHalfEdge(n5);
      if (r !== gr) {
        let n6 = false, i2 = r;
        do {
          let r2 = i2;
          for (; -1 === this.getHalfEdgeUserIndex(r2, s2); ) {
            const i3 = this.getHalfEdgeNext(r2), o2 = this.getHalfEdgeTwin(r2);
            $s2(this, r2, t2);
            const a2 = t2.at(-1).parentage;
            if (!n6) {
              const t3 = this.getHalfEdgeOrigin(r2);
              if (!this.isBreakNode(t3)) {
                const t4 = this.getHalfEdgePrev(r2);
                r2 !== t4 && ($s2(this, t4, e3), n6 = true);
              }
            }
            if (n6 && !Js(t2, e3)) {
              const e4 = this.getHalfEdgeOrigin(r2);
              this.setBreakNode(e4, true);
            }
            e3 = Pt(t2, t2 = e3), n6 = true;
            const h2 = this.getHalfEdgeOrigin(i3);
            this.isBreakNode(h2) && (n6 = false), this.setHalfEdgeUserIndex(r2, this.m_segmentParentageIndex, a2), this.setHalfEdgeUserIndex(o2, this.m_segmentParentageIndex, a2), this.setHalfEdgeUserIndex(r2, s2, 1), this.setHalfEdgeUserIndex(o2, s2, 1), r2 = i3;
          }
          i2 = this.getHalfEdgeNext(this.getHalfEdgeTwin(i2));
        } while (i2 !== r);
      }
    }
    this.deleteUserIndexForHalfEdges(s2);
  }
  registerNewBitSet(e3) {
    if (null === this.m_uniqueBitSets && (this.m_uniqueBitSets = en(), this.m_uniqueBitSets.add(this.getEmptySet())), null === e3) return this.getEmptySet();
    return this.m_uniqueBitSets.has(e3) ? this.m_uniqueBitSets.get(e3) : (this.m_uniqueBitSets.add(e3), e3);
  }
  getLeftEdgeBitSet_(e3) {
    const t2 = this.getHalfEdgeUserIndex(e3, this.m_edgeBitSetIndexLeft);
    return n(t2 >= 0), n(this.m_edgeBitSets.at(t2)), this.m_edgeBitSets.at(t2);
  }
  getEdgeBitSet_(e3) {
    const t2 = this.getHalfEdgeUserIndex(e3, this.m_edgeBitSetIndex);
    return n(t2 >= 0), this.m_edgeBitSets.at(t2);
  }
  setEdgeBitSet_(e3, t2) {
    n(this.m_bBuildGeometryParentageSets), t2 = this.registerNewBitSet(t2), -1 === this.m_edgeBitSetIndex && (this.m_edgeBitSetIndex = this.createUserIndexForHalfEdges());
    const s2 = this.getHalfEdgeUserIndex(e3, this.m_edgeBitSetIndex);
    -1 !== s2 ? this.m_edgeBitSets[s2] = t2 : (this.setHalfEdgeUserIndex(e3, this.m_edgeBitSetIndex, this.m_edgeBitSets.length), this.m_edgeBitSets.push(t2));
  }
  setLeftEdgeBitSet_(e3, t2) {
    n(this.m_bBuildGeometryParentageSets), t2 = this.registerNewBitSet(t2), -1 === this.m_edgeBitSetIndexLeft && (this.m_edgeBitSetIndexLeft = this.createUserIndexForHalfEdges());
    const s2 = this.getHalfEdgeUserIndex(e3, this.m_edgeBitSetIndexLeft);
    -1 !== s2 ? this.m_edgeBitSets[s2] = t2 : (this.setHalfEdgeUserIndex(e3, this.m_edgeBitSetIndexLeft, this.m_edgeBitSets.length), this.m_edgeBitSets.push(t2));
  }
  setChainBitSet_(e3, t2) {
    n(this.m_bBuildGeometryParentageSets), t2 = this.registerNewBitSet(t2), -1 === this.m_chainBitSetIndex && (this.m_chainBitSetIndex = this.createUserIndexForChains());
    const s2 = this.getChainUserIndex(e3, this.m_chainBitSetIndex);
    -1 !== s2 ? this.m_chainBitSets[s2] = t2 : (this.setChainUserIndex(e3, this.m_chainBitSetIndex, this.m_chainBitSets.length), this.m_chainBitSets.push(t2));
  }
  getEmptySet() {
    return this.m_emptyBitSet || (this.m_emptyBitSet = new Ls2()), this.m_emptyBitSet;
  }
  deleteEdgeBitSets_() {
    -1 !== this.m_edgeBitSetIndex && (this.deleteUserIndexForHalfEdges(this.m_edgeBitSetIndex), this.m_edgeBitSetIndex = -1), -1 !== this.m_edgeBitSetIndexLeft && (this.deleteUserIndexForHalfEdges(this.m_edgeBitSetIndexLeft), this.m_edgeBitSetIndexLeft = -1), this.m_edgeBitSets.length = 0, this.m_uniqueBitSets = null;
  }
  deleteChainBitSets_() {
    -1 !== this.m_chainBitSetIndex && (this.deleteUserIndexForChains(this.m_chainBitSetIndex), this.m_chainBitSetIndex = -1, this.m_chainBitSets.length = 0);
  }
  dbgPrintEdge_(e3) {
  }
  dbgVerifyEdgeSegment(e3) {
  }
};
tn.c_EdgeParentageMask = ~(1 << 31), tn.c_EdgeBitMask = 1 << 31;
var sn = class _sn {
  freeNode_(e3) {
    this.m_listNodes.deleteElement(e3);
  }
  newNode_() {
    return this.m_listNodes.newElement();
  }
  freeList_(e3) {
    this.m_lists.deleteElement(e3);
  }
  newList_() {
    return this.m_lists.newElement();
  }
  Init_(e3) {
    n(0);
  }
  constructor(e3) {
    this.m_listNodes = new mt(2), this.m_listOfLists = _sn.st_nullNode(), this.m_bAllowNavigationBetweenLists = true, void 0 === e3 && (e3 = true), this.m_bAllowNavigationBetweenLists = e3, this.m_lists = new mt(this.m_bAllowNavigationBetweenLists ? 4 : 2);
  }
  createList() {
    const e3 = this.newList_();
    return this.m_bAllowNavigationBetweenLists && (this.m_lists.setField(e3, 3, this.m_listOfLists), this.m_listOfLists !== _sn.st_nullNode() && this.m_lists.setField(this.m_listOfLists, 2, e3), this.m_listOfLists = e3), e3;
  }
  deleteList(e3) {
    let t2 = this.getFirst(e3);
    for (; t2 !== _sn.st_nullNode(); ) {
      const e4 = t2;
      t2 = this.getNext(t2), this.freeNode_(e4);
    }
    if (this.m_bAllowNavigationBetweenLists) {
      const t3 = this.m_lists.getField(e3, 2), s2 = this.m_lists.getField(e3, 3);
      t3 !== _sn.st_nullNode() ? this.m_lists.setField(t3, 3, s2) : this.m_listOfLists = s2, s2 !== _sn.st_nullNode() && this.m_lists.setField(s2, 2, t3);
    }
    this.freeList_(e3);
  }
  reserveLists(e3) {
    this.m_lists.setCapacity(e3);
  }
  addElement(e3, t2) {
    this.m_lists.getField(e3, 0);
    const s2 = this.m_lists.getField(e3, 1), n5 = this.newNode_();
    return s2 !== _sn.st_nullNode() ? (this.m_listNodes.setField(s2, 1, n5), this.m_lists.setField(e3, 1, n5)) : (this.m_lists.setField(e3, 0, n5), this.m_lists.setField(e3, 1, n5)), this.m_listNodes.setField(n5, 0, t2), n5;
  }
  reserveNodes(e3) {
    this.m_listNodes.setCapacity(e3);
  }
  deleteElementDirect(e3, t2, s2) {
    t2 !== _sn.st_nullNode() ? (this.m_listNodes.setField(t2, 1, this.m_listNodes.getField(s2, 1)), this.m_lists.getField(e3, 1) === s2 && this.m_lists.setField(e3, 1, t2)) : (this.m_lists.setField(e3, 0, this.m_listNodes.getField(s2, 1)), this.m_lists.getField(e3, 1) === s2 && this.m_lists.setField(e3, 1, _sn.st_nullNode())), this.freeNode_(s2);
  }
  deleteElementSearch(e3, t2) {
    let s2 = -1, n5 = this.getFirst(e3);
    for (; n5 !== t2; ) s2 = n5, n5 = this.getNext(n5);
    this.deleteElementDirect(e3, s2, t2);
  }
  concatenateLists(e3, t2) {
    const s2 = this.m_lists.getField(e3, 1), n5 = this.m_lists.getField(t2, 0);
    if (n5 !== _sn.st_nullNode() && (s2 !== _sn.st_nullNode() ? (this.m_listNodes.setField(s2, 1, n5), this.m_lists.setField(e3, 1, this.m_lists.getField(t2, 1))) : (this.m_lists.setField(e3, 0, n5), this.m_lists.setField(e3, 1, this.m_lists.getField(t2, 1)))), this.m_bAllowNavigationBetweenLists) {
      const e4 = this.m_lists.getField(t2, 2), s3 = this.m_lists.getField(t2, 3);
      e4 !== _sn.st_nullNode() ? this.m_lists.setField(e4, 3, s3) : this.m_listOfLists = s3, s3 !== _sn.st_nullNode() && this.m_lists.setField(s3, 2, e4);
    }
    return this.freeList_(t2), e3;
  }
  getElement(e3) {
    return this.m_listNodes.getField(e3, 0);
  }
  getData(e3) {
    return this.getElement(e3);
  }
  setElement(e3, t2) {
    n(0);
  }
  getNext(e3) {
    return this.m_listNodes.getField(e3, 1);
  }
  getFirst(e3) {
    return this.m_lists.getField(e3, 0);
  }
  getFirstElement(e3) {
    const t2 = this.getFirst(e3);
    return this.getElement(t2);
  }
  static st_nullNode() {
    return -1;
  }
  clear() {
    this.m_listNodes.deleteAll(true), this.m_lists.deleteAll(true), this.m_listOfLists = _sn.st_nullNode();
  }
  isEmpty(e3) {
    return n(0), false;
  }
  getNodeCount() {
    return this.m_listNodes.size();
  }
  getListCount() {
    return this.m_lists.size();
  }
  getFirstList() {
    return this.m_listOfLists;
  }
  getNextList(e3) {
    return this.m_lists.getField(e3, 3);
  }
};
function nn(e3 = -1) {
  return { m_value: e3, m_line: new fm(), m_segment: null, m_segmentInfo: new Pr(-1), m_env: new x(0, 0), m_dxdy: 55555555, m_bHorizontal: false, m_bCurve: false };
}
var rn = 67;
var on = class extends ct2 {
  constructor(e3, t2, s2) {
    super(true), this.m_bIntersectionDetected = false, this.m_nonSimpleResult = new e(), this.m_tempSimpleEdge1 = nn(), this.m_tempSimpleEdge2 = nn(), this.m_prev1 = gr, this.m_prev2 = gr, this.m_vertex1 = gr, this.m_vertex2 = gr, this.m_currentNode = -1, this.m_prevX1 = Number.NaN, this.m_prevX2 = Number.NaN, this.m_prevY = Number.NaN, this.m_prevX = 0, this.m_sweepY = Number.NaN, this.m_sweepX = 0, this.m_ptSweep = new mi(), this.m_simpleEdgesCache = [], this.m_simpleEdgesRecycle = [], this.m_cOutstandingConstructedEdges = 0, this.m_shape = e3, this.m_bShapeHasSegments = this.m_shape.hasCurves(), this.m_tolerance = t2, this.m_tolerance10 = 10 * t2, this.m_bIsSimple = s2;
    const n5 = Math.trunc(Math.min(3 * e3.getTotalPointCount() / 2, rn)), r = Math.min(7, n5);
    this.m_simpleEdgesCache.length = r;
  }
  tryGetCachedEdge_(e3) {
    const t2 = this.m_simpleEdgesCache[(e3 & vs()) % this.m_simpleEdgesCache.length];
    return t2 && t2.m_value === e3 ? t2 : null;
  }
  tryDeleteCachedEdge_(e3) {
    const t2 = (e3 & vs()) % this.m_simpleEdgesCache.length, s2 = this.m_simpleEdgesCache[t2];
    s2 && s2.m_value === e3 && (this.m_simpleEdgesRecycle.push(s2), this.m_simpleEdgesCache[t2] = null);
  }
  tryCreateCachedEdge_(e3) {
    const t2 = (e3 & vs()) % this.m_simpleEdgesCache.length;
    let s2 = this.m_simpleEdgesCache[t2];
    return s2 ? null : (0 === this.m_simpleEdgesRecycle.length ? (s2 = nn(), this.m_cOutstandingConstructedEdges++) : s2 = this.m_simpleEdgesRecycle.pop(), s2.m_value = e3, this.m_simpleEdgesCache[t2] = s2, s2);
  }
  initSimpleEdge_(e3, t2) {
    this.m_bShapeHasSegments && this.initSimpleEdgeHelper_(e3, t2) || e3.m_bCurve || (this.m_shape.queryLineConnector(t2, e3.m_line, true), e3.m_segment = e3.m_line, e3.m_env.setCoordsNoNAN(e3.m_line.getStartX(), e3.m_line.getEndX()), e3.m_env.vmax += this.m_tolerance, e3.m_line.orientBottomUp(), e3.m_bHorizontal = e3.m_line.getEndY() === e3.m_line.getStartY(), e3.m_bHorizontal || (e3.m_dxdy = (e3.m_line.getEndX() - e3.m_line.getStartX()) / (e3.m_line.getEndY() - e3.m_line.getStartY())));
  }
  initSimpleEdgeHelper_(e3, t2) {
    if (e3.m_segment = this.m_shape.getSegment(t2), e3.m_segmentInfo = this.m_shape.getOriginalSegmentInfo(t2), e3.m_bCurve = null !== e3.m_segment, e3.m_bCurve) {
      const t3 = e3.m_segment.clone();
      return t3.orientBottomUp(), e3.m_segment = t3, e3.m_env = e3.m_segment.queryInterval(0, 0), e3.m_env.vmax += this.m_tolerance, true;
    }
    return false;
  }
  compareTwoSegments_(e3, t2) {
    const s2 = e3.getStartXY(), n5 = e3.getEndXY(), r = t2.getStartXY(), i2 = t2.getEndXY();
    if (this.m_ptSweep.setCoords(this.m_sweepX, this.m_sweepY), s2.isEqualPoint2D(r) && this.m_sweepY === s2.y) {
      this.m_ptSweep.assign(n5.compare(i2) < 0 ? n5 : i2);
      const s3 = e3.intersectionOfYMonotonicWithAxisX(this.m_ptSweep.y, this.m_ptSweep.x), r2 = t2.intersectionOfYMonotonicWithAxisX(this.m_ptSweep.y, this.m_ptSweep.x);
      if (Math.abs(s3 - r2) > this.m_tolerance) return s3 < r2 ? -1 : 1;
    }
    const o2 = s2.compare(r) < 0 ? r : s2, a2 = n5.compare(i2) < 0 ? n5 : i2;
    let h2 = 0, m2 = 0;
    for (let l2 = 1; l2 < 5; l2++) {
      Y(o2, a2, l2 / 5, this.m_ptSweep);
      const s3 = e3.intersectionOfYMonotonicWithAxisX(this.m_ptSweep.y, this.m_ptSweep.x), n6 = t2.intersectionOfYMonotonicWithAxisX(this.m_ptSweep.y, this.m_ptSweep.x), r2 = Math.abs(s3 - n6);
      r2 > h2 && (h2 = r2, m2 = s3 < n6 ? -1 : 1);
    }
    return 0 === m2 ? this.errorCracking() : m2;
  }
  compareNonHorizontal_(e3, t2) {
    if (e3.m_line.getStartY() === t2.m_line.getStartY() && e3.m_line.getStartX() === t2.m_line.getStartX()) return e3.m_line.getEndY() === t2.m_line.getEndY() && e3.m_line.getEndX() === t2.m_line.getEndX() ? this.m_bIsSimple ? this.errorCoincident() : 0 : this.compareNonHorizontalUpperEnd_(e3, t2);
    if (e3.m_line.getEndY() === t2.m_line.getEndY() && e3.m_line.getEndX() === t2.m_line.getEndX()) return this.compareNonHorizontalLowerEnd_(e3, t2);
    const s2 = this.compareNonHorizontalLowerEnd_(e3, t2), n5 = this.compareNonHorizontalUpperEnd_(e3, t2);
    return s2 < 0 && n5 < 0 ? -1 : s2 > 0 && n5 > 0 ? 1 : this.errorCracking();
  }
  compareHorizontal1Case1_(e3, t2) {
    if (e3.getEndX() > t2.getEndX()) {
      if (t2.getEndX() > t2.getStartX() && t2.getEndY() - t2.getStartY() < 2 * this.m_tolerance && e3.isIntersectingPoint(t2.getEndXY(), this.m_tolerance, true)) return this.errorCracking();
    } else {
      if ((t2.getEndY() - t2.getStartY()) / (t2.getEndX() - t2.getStartX()) * (e3.getEndX() - e3.getStartX()) < this.m_tolerance10 && t2.isIntersectingPoint(e3.getEndXY(), this.m_tolerance, true)) return this.errorCracking();
    }
    return 1;
  }
  compareHorizontal1Case2_(e3, t2) {
    if (e3.getStartX() < t2.getStartX()) {
      if (t2.getEndX() > t2.getStartX() && t2.getEndY() - t2.getStartY() < 2 * this.m_tolerance && e3.isIntersectingPoint(t2.getEndXY(), this.m_tolerance, true)) return this.errorCracking();
    } else {
      if ((t2.getEndY() - t2.getStartY()) / (t2.getEndX() - t2.getStartX()) * (e3.getStartX() - e3.getEndX()) < this.m_tolerance10 && t2.isIntersectingPoint(e3.getStartXY(), this.m_tolerance, true)) return this.errorCracking();
    }
    return -1;
  }
  compareHorizontal1Case3_(e3, t2) {
    const s2 = mi.getNAN();
    s2.setSub(t2.getEndXY(), t2.getStartXY()), s2.rightPerpendicularThis(), s2.normalize();
    const n5 = mi.getNAN();
    n5.setSub(e3.getStartXY(), t2.getStartXY());
    const r = mi.getNAN();
    r.setSub(e3.getEndXY(), t2.getStartXY());
    const i2 = n5.dotProduct(s2), o2 = r.dotProduct(s2), a2 = Math.abs(i2), h2 = Math.abs(o2);
    if (a2 < h2) {
      if (a2 < this.m_tolerance10 && t2.isIntersectingPoint(e3.getStartXY(), this.m_tolerance, true)) return this.errorCracking();
    } else if (h2 < this.m_tolerance10 && t2.isIntersectingPoint(e3.getEndXY(), this.m_tolerance, true)) return this.errorCracking();
    return i2 < 0 && o2 < 0 ? -1 : i2 > 0 && o2 > 0 ? 1 : this.errorCracking();
  }
  compareHorizontal1_(e3, t2) {
    return e3.getStartY() === t2.getStartY() && e3.getStartX() === t2.getStartX() ? this.compareHorizontal1Case1_(e3, t2) : e3.getEndY() === t2.getEndY() && e3.getEndX() === t2.getEndX() ? this.compareHorizontal1Case2_(e3, t2) : this.compareHorizontal1Case3_(e3, t2);
  }
  compareHorizontal2_(e3, t2) {
    return e3.getEndY() === t2.getEndY() && e3.getEndX() === t2.getEndX() && e3.getStartY() === t2.getStartY() && e3.getStartX() === t2.getStartX() ? this.m_bIsSimple ? this.errorCoincident() : 0 : this.errorCracking();
  }
  compareNonHorizontalLowerEnd_(e3, t2) {
    let s2 = 1;
    if (e3.m_line.getStartY() < t2.m_line.getStartY()) {
      s2 = -1;
      const n6 = e3;
      e3 = t2, t2 = n6;
    }
    const n5 = e3.m_line, r = t2.m_line, i2 = n5.getStartX() - r.getStartX(), o2 = t2.m_dxdy * (n5.getStartY() - r.getStartY()), a2 = this.m_tolerance10;
    return i2 < o2 - a2 ? -s2 : i2 > o2 + a2 ? s2 : r.isIntersectingPoint(n5.getStartXY(), this.m_tolerance, true) ? this.errorCracking() : i2 < o2 ? -s2 : s2;
  }
  compareNonHorizontalUpperEnd_(e3, t2) {
    let s2 = 1;
    if (t2.m_line.getEndY() < e3.m_line.getEndY()) {
      s2 = -1;
      const n6 = e3;
      e3 = t2, t2 = n6;
    }
    const n5 = e3.m_line, r = t2.m_line, i2 = n5.getEndX() - r.getStartX(), o2 = t2.m_dxdy * (n5.getEndY() - r.getStartY()), a2 = this.m_tolerance10;
    return i2 < o2 - a2 ? -s2 : i2 > o2 + a2 ? s2 : r.isIntersectingPoint(n5.getEndXY(), this.m_tolerance, true) ? this.errorCracking() : i2 < o2 ? -s2 : s2;
  }
  errorCoincident() {
    this.m_bIntersectionDetected = true;
    const e3 = 7;
    return this.m_nonSimpleResult = new e(e3, this.m_vertex1, this.m_vertex2), -1;
  }
  errorCracking() {
    if (this.m_bIntersectionDetected = true, this.m_bIsSimple) {
      const e3 = 6;
      this.m_nonSimpleResult = new e(e3, this.m_vertex1, this.m_vertex2);
    } else this.m_prev1 = gr, this.m_prev2 = gr, this.m_vertex1 = gr, this.m_vertex2 = gr;
    return -1;
  }
  compareSegments_(e3, t2, s2, n5) {
    if (s2.m_env.vmax < n5.m_env.vmin) return -1;
    if (n5.m_env.vmax < s2.m_env.vmin) return 1;
    if (!s2.m_bCurve && !n5.m_bCurve) {
      let e4 = s2.m_bHorizontal ? 1 : 0;
      return e4 |= n5.m_bHorizontal ? 2 : 0, 0 === e4 ? this.compareNonHorizontal_(s2, n5) : 1 === e4 ? this.compareHorizontal1_(s2.m_line, n5.m_line) : 2 === e4 ? -1 * this.compareHorizontal1_(n5.m_line, s2.m_line) : this.compareHorizontal2_(s2.m_line, n5.m_line);
    }
    if (this.m_bIntersectionDetected) return -1;
    const r = this.m_prevY === this.m_sweepY && this.m_prevX === this.m_sweepX;
    let i2, o2;
    if (r && e3 === this.m_prev1 ? i2 = this.m_prevX1 : (i2 = Number.NaN, this.m_prev1 = gr), r && t2 === this.m_prev2 ? o2 = this.m_prevX2 : (o2 = Number.NaN, this.m_prev2 = gr), this.m_prevY = this.m_sweepY, this.m_prevX = this.m_sweepX, Number.isNaN(i2)) {
      this.m_prev1 = e3;
      const t3 = s2.m_segment.intersectionOfYMonotonicWithAxisX(this.m_sweepY, this.m_sweepX);
      i2 = t3, this.m_prevX1 = t3;
    }
    if (Number.isNaN(o2)) {
      this.m_prev2 = t2;
      const e4 = n5.m_segment.intersectionOfYMonotonicWithAxisX(this.m_sweepY, this.m_sweepX);
      o2 = e4, this.m_prevX2 = e4;
    }
    const a2 = am(true, true, s2.m_segment, n5.m_segment, this.m_tolerance, true);
    return 0 !== a2 ? 2 === a2 ? this.m_bIsSimple ? this.errorCoincident() : s2.m_segmentInfo.equals(n5.m_segmentInfo) ? 0 : this.errorCracking() : this.errorCracking() : Math.abs(i2 - o2) <= this.m_tolerance ? this.compareTwoSegments_(s2.m_segment, n5.m_segment) : i2 < o2 ? -1 : i2 > o2 ? 1 : 0;
  }
  clearIntersectionDetectedFlag() {
    this.m_bIntersectionDetected = false;
  }
  intersectionDetected() {
    return this.m_bIntersectionDetected;
  }
  getLastComparedNode() {
    return this.m_currentNode;
  }
  getResult() {
    return this.m_nonSimpleResult;
  }
  setSweepY(e3, t2) {
    this.m_sweepY = e3, this.m_sweepX = t2, this.m_prev1 = gr, this.m_prev2 = gr, this.m_vertex1 = gr, this.m_vertex2 = gr;
  }
  compare(e3, t2, s2) {
    if (this.m_bIntersectionDetected) return -1;
    const n5 = e3.getElement(s2), r = t2;
    return this.m_currentNode = s2, this.compareSegments(r, r, n5, n5);
  }
  compareSegments(e3, t2, s2, n5) {
    let r = this.tryGetCachedEdge_(e3);
    null === r ? this.m_vertex1 === t2 ? r = this.m_tempSimpleEdge1 : (this.m_vertex1 = t2, r = this.tryCreateCachedEdge_(e3), null === r && (r = this.m_tempSimpleEdge1, this.m_tempSimpleEdge1.m_value = e3), this.initSimpleEdge_(r, t2)) : this.m_vertex1 = t2;
    let i2 = this.tryGetCachedEdge_(s2);
    return null === i2 ? this.m_vertex2 === n5 ? i2 = this.m_tempSimpleEdge2 : (this.m_vertex2 = n5, i2 = this.tryCreateCachedEdge_(s2), null === i2 && (i2 = this.m_tempSimpleEdge2, this.m_tempSimpleEdge2.m_value = s2), this.initSimpleEdge_(i2, n5)) : this.m_vertex2 = n5, this.compareSegments_(t2, n5, r, i2);
  }
  onDelete(e3) {
    this.tryDeleteCachedEdge_(e3);
  }
  onSet(e3) {
    this.tryDeleteCachedEdge_(e3);
  }
  onEndSearch(e3) {
    this.tryDeleteCachedEdge_(e3);
  }
  onAddUniqueElementFailed(e3) {
    this.tryDeleteCachedEdge_(e3);
  }
};
var an = class {
  constructor(e3, t2) {
    this.m_bIntersectionDetected = false, this.m_pointOfInterest = mi.getNAN(), this.m_line1 = new fm(), this.m_seg1 = null, this.m_env = x.constructEmpty(), this.m_vertex1 = -1, this.m_currentNode = -1, this.m_minDist = Number.MAX_VALUE, this.m_shape = e3, this.m_tolerance = t2;
  }
  getCurrentNode() {
    return this.m_currentNode;
  }
  clearIntersectionDetectedFlag() {
    this.m_bIntersectionDetected = false, this.m_minDist = Number.MAX_VALUE;
  }
  intersectionDetected() {
    return this.m_bIntersectionDetected;
  }
  setPoint(e3) {
    this.m_pointOfInterest.assign(e3);
  }
  compare(e3, t2) {
    const s2 = e3.getElement(t2);
    return this.compareVertex(e3, t2, s2);
  }
  compareVertex(e3, t2, n5) {
    let r, i2 = this.m_shape.getSegment(n5), o2 = true;
    if (null == i2) this.m_shape.queryLineConnector(n5, this.m_line1, true), this.m_env.setCoordsNoNAN(this.m_line1.getStartX(), this.m_line1.getEndX()), i2 = this.m_line1, r = this.m_line1.getStartY() === this.m_line1.getEndY();
    else {
      const e4 = n3.constructEmpty();
      i2.queryLooseEnvelope(e4), e4.queryIntervalX(this.m_env), r = 0 === e4.height(), o2 = false;
    }
    if (this.m_pointOfInterest.x + this.m_tolerance < this.m_env.vmin) return -1;
    if (this.m_pointOfInterest.x - this.m_tolerance > this.m_env.vmax) return 1;
    if (r) return this.m_currentNode = t2, this.m_bIntersectionDetected = true, 0;
    let a2 = 0;
    if (o2) {
      Es(this.m_line1);
      const e4 = this.m_line1.getStartXY(), t3 = new mi();
      t3.setSub(this.m_line1.getEndXY(), e4), t3.rightPerpendicularThis();
      const s2 = new mi();
      s2.setSub(this.m_pointOfInterest, e4), a2 = t3.dotProduct(s2), a2 /= t3.length();
    } else {
      a2 = i2.intersectionOfYMonotonicWithAxisX(this.m_pointOfInterest.y, this.m_pointOfInterest.x) - this.m_pointOfInterest.x;
    }
    if (a2 < 10 * -this.m_tolerance) return -1;
    if (a2 > 10 * this.m_tolerance) return 1;
    if (i2.isIntersectingPoint(this.m_pointOfInterest, this.m_tolerance)) {
      Math.abs(a2) < this.m_minDist && (this.m_currentNode = t2, this.m_minDist = a2), this.m_bIntersectionDetected = true;
    }
    return a2 < 0 ? -1 : a2 > 0 ? 1 : 0;
  }
};
var hn = class _hn {
  constructor(e3, t2) {
    this.m_lists = new sn(false), this.m_hash = t2, this.m_hashBuckets = new Int32Array(e3), this.m_hashBuckets.fill(_hn.st_nullNode()), this.m_bitFilter = new Int32Array(10 * e3 + 31 >> 5);
  }
  reserveElements(e3) {
    this.m_lists.reserveLists(Math.min(this.m_hashBuckets.length, e3)), this.m_lists.reserveNodes(e3);
  }
  addElement(e3, t2) {
    void 0 === t2 && (t2 = this.m_hash.getHash(e3));
    const s2 = t2 % (this.m_bitFilter.length << 5);
    this.m_bitFilter[s2 >> 5] |= 1 << (31 & s2);
    const n5 = t2 % this.m_hashBuckets.length;
    let r = this.m_hashBuckets[n5];
    r === sn.st_nullNode() && (r = this.m_lists.createList(), this.m_hashBuckets[n5] = r);
    return this.m_lists.addElement(r, e3);
  }
  deleteElement(e3, t2) {
    void 0 === t2 && (t2 = this.m_hash.getHash(e3));
    const s2 = t2 % this.m_hashBuckets.length, r = this.m_hashBuckets[s2];
    r === sn.st_nullNode() && P("");
    let i2 = this.m_lists.getFirst(r), o2 = sn.st_nullNode();
    for (; i2 !== sn.st_nullNode(); ) {
      const t3 = this.m_lists.getData(i2), n5 = this.m_lists.getNext(i2);
      t3 === e3 ? (this.m_lists.deleteElementDirect(r, o2, i2), this.m_lists.getFirst(r) === sn.st_nullNode() && (this.m_lists.deleteList(r), this.m_hashBuckets[s2] = sn.st_nullNode())) : o2 = i2, i2 = n5;
    }
  }
  getFirstInBucket(e3) {
    const t2 = e3 % (this.m_bitFilter.length << 5);
    if (!(this.m_bitFilter[t2 >> 5] & 1 << (31 & t2))) return sn.st_nullNode();
    const s2 = e3 % this.m_hashBuckets.length, n5 = this.m_hashBuckets[s2];
    return n5 === sn.st_nullNode() ? sn.st_nullNode() : this.m_lists.getFirst(n5);
  }
  getNextInBucket(e3) {
    return this.m_lists.getNext(e3);
  }
  findNode(e3) {
    const t2 = this.m_hash.getHash(e3);
    let s2 = this.getFirstInBucket(t2);
    for (; s2 !== sn.st_nullNode(); ) {
      const t3 = this.m_lists.getData(s2);
      if (this.m_hash.equal(t3, e3)) return s2;
      s2 = this.m_lists.getNext(s2);
    }
    return sn.st_nullNode();
  }
  deleteNode(e3) {
    const t2 = this.getElement(e3), s2 = this.m_hash.getHash(t2) % this.m_hashBuckets.length, r = this.m_hashBuckets[s2];
    r === sn.st_nullNode() && P(""), this.m_lists.deleteElementSearch(r, e3), this.m_lists.getFirst(r) === sn.st_nullNode() && (this.m_lists.deleteList(r), this.m_hashBuckets[s2] = sn.st_nullNode());
  }
  getElement(e3) {
    return this.m_lists.getData(e3);
  }
  static st_nullNode() {
    return sn.st_nullNode();
  }
  clear() {
    n(0);
  }
  size() {
    return this.m_lists.getNodeCount();
  }
  dbgPrintBucketHistogram() {
  }
};
function mn(e3, t2, s2, n5, r) {
  const i2 = new fn(r);
  return i2.m_shape = e3, i2.m_sqrTolerance = t2 * t2, i2.m_cellSize = 2 * t2, i2.m_invCellSize = 1 / i2.m_cellSize, i2.m_geometry = s2, i2.m_bTrackChanges = n5, i2.m_bHasSegmentParentage = e3.hasSegmentParentage(), i2.clusterNonReciprocal();
}
function ln(e3, t2, s2, n5, r) {
  const i2 = e3 - s2, o2 = t2 - n5;
  return i2 * i2 + o2 * o2 <= r;
}
function gn() {
  return { pt: new mi(), weight: 0, rank: 0, bMerged: false };
}
function un(e3, t2, s2, n5, r, i2) {
  const o2 = gn(), a2 = s2 + r;
  let h2 = false, m2 = e3.x;
  e3.x !== t2.x && (n5 === i2 && (m2 = (e3.x * s2 + t2.x * r) / a2), h2 = true);
  let l2 = e3.y;
  return e3.y !== t2.y && (n5 === i2 && (l2 = (e3.y * s2 + t2.y * r) / a2), h2 = true), n5 !== i2 ? n5 > i2 ? (o2.rank = n5, o2.weight = s2, o2.pt = e3) : (o2.rank = i2, o2.weight = r, o2.pt = t2) : (o2.pt.setCoords(m2, l2), o2.weight = a2, o2.rank = n5), o2.bMerged = h2, o2;
}
function cn(e3, t2, s2, n5, r, i2, o2, a2, h2) {
  const m2 = e3.equals(t2);
  if (n5 > i2) return o2.assignCopy(e3), h2[0] = n5, a2[0] = s2, m2;
  if (i2 > n5) return o2 = t2, h2[0] = i2, a2[0] = r, m2;
  o2.assignCopy(e3);
  const l2 = un(e3.getXY(), t2.getXY(), s2, n5, r, i2);
  return o2.setXY(l2.pt), a2[0] = l2.weight, h2[0] = l2.rank, m2;
}
function _n(e3, t2, s2, n5, r) {
  const i2 = new fn(r);
  return i2.m_shape = e3, i2.m_sqrTolerance = t2 * t2, i2.m_cellSize = 2 * t2, i2.m_invCellSize = 1 / i2.m_cellSize, i2.m_geometry = s2, i2.m_bTrackChanges = false, i2.needsClustering();
}
function dn(e3, t2) {
  const s2 = qs(e3);
  return zs(s2, t2);
}
var pn = class {
  constructor(e3, t2, s2, n5, r) {
    this.m_workPt = new mi(), this.m_shape = e3, this.m_sqrTolerance = s2, this.m_invCellSize = n5, this.m_origin = t2.clone(), this.m_hashValues = r;
  }
  getHash(e3) {
    return this.m_shape.getUserIndex(e3, this.m_hashValues);
  }
  calculateHashFromVertex(e3) {
    this.m_shape.queryXY(e3, this.m_workPt);
    const t2 = this.m_workPt.x - this.m_origin.x, s2 = Math.trunc(t2 * this.m_invCellSize + 0.5), n5 = this.m_workPt.y - this.m_origin.y;
    return dn(s2, Math.trunc(n5 * this.m_invCellSize + 0.5));
  }
  equal(e3, t2) {
    return n(0), false;
  }
};
var fn = class {
  constructor(e3) {
    this.m_origin = mi.getNAN(), this.m_sqrTolerance = 0, this.m_cellSize = 0, this.m_invCellSize = 0, this.m_geometry = gr, this.m_bucketArray = Yt(4, Number.NaN), this.m_bucketHash = Yt(4, Number.NaN), this.m_dbgCandidateCheckCount = 0, this.m_nsr = new e(), this.m_hashValues = -1, this.m_newClusters = -1, this.m_bTrackChanges = false, this.m_bHasSegmentParentage = false, this.m_shape = null, this.m_clusters = new sn(), this.m_hashFunction = null, this.m_hashTable = null, this.m_progressCounter = 0, this.m_progressTracker = e3;
  }
  progress_() {
  }
  collectClusterCandidates(e3, t2) {
    const s2 = mi.getNAN();
    this.m_shape.queryXY(e3, s2);
    const n5 = (s2.x - this.m_origin.x) * this.m_invCellSize, r = (s2.y - this.m_origin.y) * this.m_invCellSize, i2 = Math.trunc(n5), o2 = Math.trunc(r);
    let a2 = 0;
    for (let h2 = 0; h2 <= 1; h2 += 1) for (let e4 = 0; e4 <= 1; e4 += 1) {
      const t3 = dn(i2 + h2, o2 + e4), s3 = this.m_hashTable.getFirstInBucket(t3);
      s3 !== hn.st_nullNode() && (this.m_bucketArray[a2] = s3, this.m_bucketHash[a2] = t3, a2++);
    }
    for (let h2 = a2 - 1; h2 >= 1; h2--) {
      const e4 = this.m_bucketArray[h2];
      for (let t3 = h2 - 1; t3 >= 0; t3--) if (e4 === this.m_bucketArray[t3]) {
        this.m_bucketHash[t3] = -1, a2--, h2 !== a2 && (this.m_bucketHash[h2] = this.m_bucketHash[a2], this.m_bucketArray[h2] = this.m_bucketArray[a2]);
        break;
      }
    }
    for (let h2 = 0; h2 < a2; h2++) this.collectNearestNeighbourCandidates(e3, this.m_bucketHash[h2], s2, this.m_bucketArray[h2], t2);
  }
  collectNearestNeighbourCandidates(e3, t2, s2, n5, r) {
    const i2 = mi.getNAN();
    for (let o2 = n5; o2 !== hn.st_nullNode(); o2 = this.m_hashTable.getNextInBucket(o2)) {
      const n6 = this.m_hashTable.getElement(o2);
      e3 === n6 || -1 !== t2 && this.m_shape.getUserIndex(n6, this.m_hashValues) !== t2 || (this.m_shape.queryXY(n6, i2), ln(s2.x, s2.y, i2.x, i2.y, this.m_sqrTolerance) && r.push(o2));
    }
  }
  mergeClusters(e3, t2, s2) {
    let n5 = this.m_shape.getUserIndex(e3, this.m_newClusters);
    const r = this.m_shape.getUserIndex(t2, this.m_newClusters);
    -1 === n5 && (n5 = this.m_clusters.createList(), this.m_clusters.addElement(n5, e3), this.m_shape.setUserIndex(e3, this.m_newClusters, n5)), -1 === r ? this.m_clusters.addElement(n5, t2) : this.m_clusters.concatenateLists(n5, r), this.m_shape.setUserIndex(t2, this.m_newClusters, mt.impossibleIndex2());
    const i2 = this.mergeVertices(e3, t2);
    if (s2) {
      const t3 = this.m_hashFunction.calculateHashFromVertex(e3);
      this.m_shape.setUserIndex(e3, this.m_hashValues, t3);
    }
    return i2;
  }
  mergeVertices(e3, t2) {
    const s2 = mi.getNAN();
    this.m_shape.queryXY(e3, s2);
    const n5 = mi.getNAN();
    this.m_shape.queryXY(t2, n5);
    const r = this.m_shape.getRank(e3), i2 = this.m_shape.getRank(t2), o2 = this.m_shape.getWeight(e3), a2 = this.m_shape.getWeight(t2);
    let h2, m2, l2, g, u = false;
    if (r === i2 ? (h2 = r, m2 = o2 + a2, l2 = s2.x, s2.x !== n5.x && (l2 = (s2.x * o2 + n5.x * a2) / m2, u = true), g = s2.y, s2.y !== n5.y && (g = (s2.y * o2 + n5.y * a2) / m2, u = true)) : (r > i2 ? (l2 = s2.x, g = s2.y, m2 = o2, h2 = r) : (l2 = n5.x, g = n5.y, m2 = a2, h2 = i2), u = !s2.equals(n5)), u && (this.m_shape.setXYMonotonic(e3, l2, g), this.m_bTrackChanges && this.m_shape.setGeometryModifiedWithVertex(e3, true), this.m_bHasSegmentParentage)) {
      const s3 = this.m_shape.getSegmentParentageBreakVertex(e3) || this.m_shape.getSegmentParentageBreakVertex(t2);
      this.m_shape.setSegmentParentageBreakVertex(e3, s3), this.m_shape.setSegmentParentageBreakVertex(t2, s3);
    }
    return this.m_shape.setWeight(e3, m2), this.m_shape.setRank(e3, h2), u;
  }
  needsClustering() {
    const s2 = { stack: [], error: void 0, hasError: false };
    try {
      __addDisposableResource(s2, kt(() => {
        this.m_hashTable = null, this.m_hashFunction = null, this.m_shape.removeUserIndex(this.m_hashValues), this.m_shape.removeUserIndex(this.m_newClusters);
      }), false);
      const t2 = this.m_shape.getSelectedCount(), n5 = this.m_shape.getEnvelope2D(this.m_progressTracker);
      this.m_origin.assign(n5.getLowerLeft());
      const r = Math.max(n5.height(), n5.width()) / (ds() - 1);
      this.m_cellSize < r && (this.m_cellSize = r, this.m_invCellSize = 1 / this.m_cellSize), this.m_clusters.clear(), this.m_clusters.reserveLists(this.m_shape.getSelectedCount() / 3 + 1), this.m_clusters.reserveNodes(this.m_shape.getSelectedCount() / 3 + 1), this.m_hashValues = this.m_shape.createUserIndex(), this.m_newClusters = this.m_shape.createUserIndex(), this.m_hashFunction = new pn(this.m_shape, this.m_origin, this.m_sqrTolerance, this.m_invCellSize, this.m_hashValues), this.m_hashTable = new hn(4 * t2 / 3, this.m_hashFunction), this.m_hashTable.reserveElements(this.m_shape.getSelectedCount());
      let i2 = false;
      for (let e3 = 0; e3 < 2; e3++) {
        const t3 = [], s3 = this.m_shape.queryVertexIteratorOnSelection(this.m_geometry);
        for (let n6 = s3.next(); n6 !== gr; n6 = s3.next()) {
          if (this.progress_(), e3 > 0 && this.m_shape.getUserIndex(n6, this.m_newClusters) === mt.impossibleIndex2()) continue;
          let s4;
          if (0 === e3 ? (s4 = this.m_hashFunction.calculateHashFromVertex(n6), this.m_shape.setUserIndex(n6, this.m_hashValues, s4)) : s4 = this.m_shape.getUserIndex(n6, this.m_hashValues), this.collectClusterCandidates(n6, t3), 0 !== t3.length) {
            for (let e4 = 0, s5 = t3.length; e4 < s5; e4++) {
              this.progress_();
              const s6 = t3[e4], r2 = this.m_hashTable.getElement(s6);
              if (this.m_hashTable.deleteNode(s6), !this.m_shape.isEqualXY(n6, r2)) return this.m_nsr = new e(5, this.m_shape.getVertexIndex(n6), this.m_shape.getVertexIndex(r2)), i2 = true, i2;
              this.mergeClusters(n6, r2, false);
            }
            t3.length = 0;
          }
          0 === e3 && this.m_hashTable.addElement(n6, s4);
        }
      }
      return i2;
    } catch (n5) {
      s2.error = n5, s2.hasError = true;
    } finally {
      __disposeResources(s2);
    }
  }
  clusterNonReciprocal() {
    const e3 = this.m_shape.getSelectedCount(), t2 = this.m_shape.getEnvelope2D(this.m_progressTracker);
    this.m_origin = t2.getLowerLeft();
    const s2 = Math.max(t2.height(), t2.width()) / (ds() - 1);
    this.m_cellSize < s2 && (this.m_cellSize = s2, this.m_invCellSize = 1 / this.m_cellSize), this.m_clusters.clear(), this.m_clusters.reserveLists(Math.trunc(this.m_shape.getSelectedCount() / 3 + 1)), this.m_clusters.reserveNodes(Math.trunc(this.m_shape.getSelectedCount() / 3 + 1)), this.m_hashValues = this.m_shape.createUserIndex(), this.m_newClusters = this.m_shape.createUserIndex(), this.m_hashFunction = new pn(this.m_shape, this.m_origin, this.m_sqrTolerance, this.m_invCellSize, this.m_hashValues), this.m_hashTable = new hn(Math.trunc(4 * e3 / 3), this.m_hashFunction), this.m_hashTable.reserveElements(this.m_shape.getSelectedCount());
    let n5 = false;
    {
      const e4 = this.m_shape.queryVertexIteratorOnSelection(this.m_geometry);
      for (let t3 = e4.next(); t3 !== gr; t3 = e4.next()) {
        this.progress_();
        const e5 = this.m_hashFunction.calculateHashFromVertex(t3);
        this.m_shape.setUserIndex(t3, this.m_hashValues, e5), this.m_hashTable.addElement(t3, e5);
      }
    }
    {
      const e4 = [], t3 = this.m_shape.queryVertexIteratorOnSelection(this.m_geometry);
      for (let s3 = t3.next(); s3 !== gr; s3 = t3.next()) {
        if (this.m_shape.getUserIndex(s3, this.m_newClusters) === mt.impossibleIndex2()) continue;
        let t4 = this.m_shape.getUserIndex(s3, this.m_hashValues);
        this.m_hashTable.deleteElement(s3, t4);
        let r = false;
        for (; this.collectClusterCandidates(s3, e4), 0 !== e4.length; ) {
          let t5 = 0;
          for (let n6 = 0, r2 = e4.length; n6 < r2; n6++) {
            this.progress_();
            const i2 = e4[n6], o2 = this.m_hashTable.getElement(i2);
            this.m_hashTable.deleteNode(i2);
            const a2 = n6 + 1 === r2;
            t5 |= this.mergeClusters(s3, o2, a2) ? 1 : 0;
          }
          if (r ||= 0 !== t5, n5 ||= 0 !== t5, e4.length = 0, !t5) break;
        }
        r && (t4 = this.m_shape.getUserIndex(s3, this.m_hashValues)), this.m_hashTable.addElement(s3, t4);
      }
      e4.length = 0;
    }
    return n5 && this.applyClusterPositions_(), this.m_hashTable = null, this.m_hashFunction = null, this.m_shape.removeUserIndex(this.m_hashValues), this.m_shape.removeUserIndex(this.m_newClusters), n5;
  }
  applyClusterPositions_() {
    const e3 = mi.getNAN();
    for (let t2 = this.m_clusters.getFirstList(); t2 !== sn.st_nullNode(); t2 = this.m_clusters.getNextList(t2)) {
      let s2 = this.m_clusters.getFirst(t2);
      const n5 = this.m_clusters.getElement(s2);
      this.m_shape.queryXY(n5, e3);
      const r = this.m_shape.getRank(n5), i2 = this.m_shape.getWeight(n5);
      for (s2 = this.m_clusters.getNext(s2); s2 !== sn.st_nullNode(); s2 = this.m_clusters.getNext(s2)) {
        const t3 = this.m_clusters.getElement(s2);
        if (this.m_bTrackChanges ? this.m_shape.isEqualXYPoint2D(t3, e3) || (this.m_shape.setXYMonotonicPoint2D(t3, e3), this.m_shape.setGeometryModifiedWithVertex(t3, true)) : this.m_shape.setXYMonotonicPoint2D(t3, e3), this.m_bHasSegmentParentage) {
          const e4 = this.m_shape.getSegmentParentageBreakVertex(n5) || this.m_shape.getSegmentParentageBreakVertex(t3);
          this.m_shape.setSegmentParentageBreakVertex(n5, e4), this.m_shape.setSegmentParentageBreakVertex(t3, e4);
        }
        this.m_shape.setWeight(t3, i2), this.m_shape.setRank(t3, r);
      }
    }
  }
};
var xn = class _xn {
  constructor() {
    this.m_inputParts = [], this.m_resultParts1 = [], this.m_resultParts2 = [], this.m_resultSegments = [], this.m_freeSegments = [], this.m_inputSegments = [], this.m_param1 = [], this.m_param2 = [], this.m_tolerance = 0, this.m_toleranceZ = 0, this.m_point = new se(), this.m_pointWeight = 1, this.m_maxDensifyLimit = 0, this.m_pointRank = 0, this.m_changed1 = false, this.m_changed2 = false, this.m_adaptiveDensify = false;
  }
  clear() {
    this.freeAllResultSegments(), this.m_inputSegments.length = 0, this.m_inputParts.length = 0, this.m_resultParts1.length = 0, this.m_resultParts2.length = 0, this.m_param1.length = 0, this.m_param2.length = 0, this.m_adaptiveDensify = false, this.m_changed1 = false, this.m_changed2 = false;
  }
  newIntersectionPart_(e3, t2, s2, n5, r, i2, o2, a2, h2, m2) {
    return Pn(e3, t2, s2, n5, r, i2, o2, a2, h2, m2);
  }
  pushSegment(e3, t2, s2, n5, r, i2, o2, a2, h2, m2) {
    return this.m_inputParts.push(this.newIntersectionPart_(this.m_inputSegments.length, t2, s2, n5, r, i2, o2, a2, h2, m2)), this.m_inputSegments.push(e3), this.m_inputParts.length - 1;
  }
  getResultSegmentCount(e3) {
    return this.m_adaptiveDensify ? 0 === e3 ? this.m_param1.length - 1 : this.m_param2.length - 1 : 0 === e3 ? this.m_resultParts1.length : this.m_resultParts2.length;
  }
  getResultPart_(e3, t2) {
    return 0 === e3 ? this.m_resultParts1[t2] : this.m_resultParts2[t2];
  }
  getResultSegment(e3, t2) {
    return this.m_resultSegments[this.getResultPart_(e3, t2).segmentIndex].get();
  }
  getSegmentChanged(e3) {
    return 0 === e3 ? this.m_changed1 : this.m_changed2;
  }
  getResultSegmentStartPointWeight(e3, t2) {
    return this.getResultPart_(e3, t2).weightStart;
  }
  getResultSegmentStartPointRank(e3, t2) {
    return this.getResultPart_(e3, t2).rankStart;
  }
  getResultSegmentSegmentParentage(e3, t2) {
    return this.getResultPart_(e3, t2).segmentParentage;
  }
  getResultSegmentStartPointIsBreak(e3, t2) {
    return this.getResultPart_(e3, t2).u.bBreakStart;
  }
  getResultSegmentEndPointWeight(e3, t2) {
    return this.getResultPart_(e3, t2).weightEnd;
  }
  getResultSegmentEndPointRank(e3, t2) {
    return this.getResultPart_(e3, t2).rankEnd;
  }
  getResultSegmentEndPointIsBreak(e3, t2) {
    return this.getResultPart_(e3, t2).u.bBreakEnd;
  }
  getResultSegmentInteriorRank(e3, t2) {
    return this.getResultPart_(e3, t2).rankInterior;
  }
  getResultSegmentInteriorWeight(e3, t2) {
    return this.getResultPart_(e3, t2).weightInterior;
  }
  getResultPoint() {
    return this.m_point;
  }
  getResultPointWeight() {
    return this.m_pointWeight;
  }
  getResultPointRank() {
    return this.m_pointRank;
  }
  getResultPointChanged() {
    return this.m_changed2;
  }
  intersectLines(e3, t2) {
    2 !== this.m_inputSegments.length && b(""), this.m_changed1 = false, this.m_changed2 = false, this.m_tolerance = e3;
    const s2 = H(e3 * _xn.c_smallToleranceFactor);
    let n5 = false;
    const r = this.m_inputParts[0], i2 = this.m_inputParts[1], o2 = this.m_inputSegments[r.segmentIndex], h2 = this.m_inputSegments[i2.segmentIndex];
    if (t2 || 5 & om(true, o2, h2, e3, true)) {
      const t3 = mm(true, o2, h2, null, this.m_param1, this.m_param2, e3);
      0 === t3 && b("");
      const m2 = new Array(t3);
      for (let e4 = 0; e4 < t3; ++e4) m2[e4] = mi.getNAN();
      const l2 = new Float64Array(t3), g = new Int32Array(t3), u = new Array(t3), c = new Array(t3);
      for (let e4 = 0; e4 < t3; ++e4) u[e4] = En(), c[e4] = En();
      for (let e4 = 0; e4 < t3; e4++) {
        const t4 = this.m_param1[e4], a2 = this.m_param2[e4];
        let _2, d3 = r.rankInterior, p4 = r.weightInterior;
        0 === t4 ? (d3 = r.rankStart, p4 = r.weightStart, _2 = r.u.bBreakStart) : 1 === t4 ? (d3 = r.rankEnd, p4 = r.weightEnd, _2 = r.u.bBreakEnd) : (this.m_changed1 = true, _2 = false);
        let f4, x4 = i2.rankInterior, y3 = i2.weightInterior;
        0 === a2 ? (x4 = i2.rankStart, y3 = i2.weightStart, f4 = i2.u.bBreakStart) : 1 === a2 ? (x4 = i2.rankEnd, y3 = i2.weightEnd, f4 = i2.u.bBreakEnd) : (this.m_changed2 = true, f4 = false);
        const P4 = d3, E2 = x4;
        let S2 = 1, C2 = 0, I4 = mi.getNAN();
        if (P4 === E2) {
          const n6 = o2.getCoord2D(t4), r2 = h2.getCoord2D(a2);
          S2 = p4 + y3;
          C2 = d3, Y(n6, r2, y3 / S2, I4);
          const i3 = mi.sqrDistance(I4, n6), m3 = mi.sqrDistance(I4, r2);
          u[e4].bBigMove = i3 > s2, c[e4].bBigMove = m3 > s2, this.m_changed1 || n6.equals(I4) || (this.m_changed1 = true), this.m_changed2 || r2.equals(I4) || (this.m_changed2 = true);
        } else if (P4 > E2) {
          I4 = o2.getCoord2D(t4);
          const n6 = h2.getCoord2D(a2);
          S2 = p4, C2 = d3;
          const r2 = mi.sqrDistance(I4, n6);
          u[e4].bBigMove = false, c[e4].bBigMove = r2 > s2, this.m_changed2 || n6.equals(I4) || (this.m_changed2 = true);
        } else {
          I4 = h2.getCoord2D(a2), S2 = y3, C2 = x4;
          const n6 = o2.getCoord2D(t4), r2 = mi.sqrDistance(I4, n6);
          u[e4].bBigMove = r2 > s2, c[e4].bBigMove = false, this.m_changed1 || n6.equals(I4) || (this.m_changed1 = true);
        }
        m2[e4].assign(I4), l2[e4] = S2, g[e4] = C2, u[e4].bIsBreak = _2 || f4, c[e4].bIsBreak = _2 || f4, n5 ||= u[e4].bBigMove || c[e4].bBigMove;
      }
      const _ = r.rankInterior, d2 = r.weightInterior;
      let p3 = 0, f3 = -1;
      for (let s3 = 0; s3 <= t3; s3++) {
        const n6 = s3 < t3 ? this.m_param1[s3] : 1;
        if (n6 !== p3) {
          const i3 = this.allocResultSegment(), a2 = this.m_resultSegments[i3];
          let h3, c2, x4, y3;
          o2.queryCut(p3, n6, a2, false), a2.get().snapControlPoints(e3 * e3);
          let P4 = false, E2 = false, S2 = false, C2 = false, I4 = false, b2 = mi.getNAN(), w2 = mi.getNAN();
          -1 !== f3 ? (c2 = g[f3], h3 = l2[f3], P4 = u[f3].bBigMove, b2.assign(m2[f3]), S2 = u[f3].bIsBreak, I4 = true) : (h3 = r.weightStart, c2 = r.rankStart, b2 = a2.get().getStartXY(), S2 = r.u.bBreakStart), s3 < t3 ? (y3 = g[s3], x4 = l2[s3], E2 = u[s3].bBigMove, w2.assign(m2[s3]), C2 = u[s3].bIsBreak, I4 = true) : (x4 = r.weightEnd, y3 = r.rankEnd, w2 = a2.get().getEndXY(), C2 = r.u.bBreakEnd), I4 && a2.get().setCoordsForIntersector(b2, w2, true), this.m_resultParts1.push(this.newIntersectionPart_(i3, h3, c2, x4, y3, d2, _, S2, C2, r.segmentParentage));
          const v2 = this.m_resultParts1.at(-1);
          v2.u.bBigMoveStart = P4, v2.u.bBigMoveEnd = E2, p3 = n6, f3 = s3;
        } else -1 === f3 && (f3 = s3);
      }
      const x3 = Yt(t3, 0);
      for (let e4 = 0; e4 < t3; e4++) x3[e4] = e4;
      t3 > 2 ? (x3.sort((e4, t4) => this.m_param2[e4] < this.m_param2[t4] ? -1 : this.m_param2[e4] > this.m_param2[t4] ? 1 : 0), qt(this.m_param2)) : 2 === t3 && this.m_param2[0] > this.m_param2[1] && (this.m_param2[1] = Pt(this.m_param2[0], this.m_param2[0] = this.m_param2[1]), x3[1] = Pt(x3[0], x3[0] = x3[1]));
      const y2 = i2.rankInterior, P3 = i2.weightInterior;
      p3 = 0, f3 = -1;
      for (let s3 = 0; s3 <= t3; s3++) {
        const n6 = s3 < t3 ? this.m_param2[s3] : 1;
        if (n6 !== p3) {
          const r2 = this.allocResultSegment(), o3 = this.m_resultSegments[r2];
          let a2, u2, _2, d3;
          h2.queryCut(p3, n6, o3, false), o3.get().snapControlPoints(e3 * e3);
          let E2 = mi.getNAN(), S2 = mi.getNAN(), C2 = false, I4 = false, b2 = false, w2 = false, v2 = false;
          if (-1 !== f3) {
            const e4 = x3[f3];
            a2 = l2[e4], u2 = g[e4], E2.assign(m2[e4]), b2 = c[e4].bBigMove, C2 = c[e4].bIsBreak, v2 = true;
          } else a2 = i2.weightStart, u2 = i2.rankStart, E2 = o3.get().getStartXY(), C2 = i2.u.bBreakStart;
          if (s3 !== t3) {
            const e4 = x3[s3];
            _2 = l2[e4], d3 = g[e4], S2.assign(m2[e4]), w2 = c[e4].bBigMove, I4 = c[e4].bIsBreak, v2 = true;
          } else _2 = i2.weightEnd, d3 = i2.rankEnd, S2 = o3.get().getEndXY(), I4 = i2.u.bBreakEnd;
          v2 && o3.get().setCoordsForIntersector(E2, S2, true), this.m_resultParts2.push(this.newIntersectionPart_(r2, a2, u2, _2, d3, P3, y2, C2, I4, i2.segmentParentage));
          const N2 = this.m_resultParts2.at(-1);
          N2.u.bBigMoveStart = b2, N2.u.bBigMoveEnd = w2, p3 = n6, f3 = s3;
        } else -1 === f3 && (f3 = s3);
      }
      return n5 ? 3 : 2;
    }
    return 0;
  }
  intersectLines3D(e3, t2, s2, n5) {
    return n(0), 1;
  }
  intersect2D(e3, t2) {
    const s2 = this.m_inputParts[0], n5 = this.m_inputParts[1], r = this.m_inputSegments[s2.segmentIndex].getGeometryType(), o2 = this.m_inputSegments[n5.segmentIndex].getGeometryType();
    if (r !== a.enumLine || o2 !== a.enumLine) {
      return new bn(this).intersectCurves(e3, t2);
    }
    return this.intersectLines(e3, t2);
  }
  intersect2DEx(e3, t2, s2, n5, r) {
    this.m_point.assignCopy(t2), 1 !== this.m_inputSegments.length && b(""), this.m_tolerance = e3, this.m_changed1 = false, this.m_changed2 = false;
    const i2 = H(e3 * _xn.c_smallToleranceFactor);
    let o2 = false;
    const h2 = this.m_inputParts[0], m2 = this.m_inputSegments[h2.segmentIndex];
    if (r || m2.isIntersectingPoint(t2.getXY(), e3, true)) {
      this.m_param1 = Yt(16, Number.NaN);
      const r2 = m2.getClosestCoordinate(t2.getXY(), false);
      this.m_param1[0] = r2;
      let a2 = h2.rankInterior, l2 = h2.weightInterior;
      0 === r2 ? (a2 = h2.rankStart, l2 = h2.weightStart) : 1 === r2 ? (a2 = h2.rankEnd, l2 = h2.weightEnd) : this.m_changed1 = true;
      let g = a2;
      const u = s2, c = n5;
      g === u && m2.isCurve() && (g = u + 1);
      let _ = 1, d2 = 0;
      const p3 = new mi();
      if (g === u) {
        const e4 = m2.getCoord2D(r2), s3 = t2.getXY();
        _ = l2 + c, d2 = a2;
        Y(e4, s3, c / _, p3), this.m_changed1 || e4.equals(p3) || (this.m_changed1 = true), this.m_changed2 || s3.equals(p3) || (this.m_changed2 = true);
        o2 = mi.sqrDistance(p3, e4) > i2;
      } else if (g > u) p3.assign(m2.getCoord2D(r2)), _ = l2, d2 = a2, this.m_changed2 || p3.equals(t2.getXY()) || (this.m_changed2 = true);
      else {
        p3.assign(m2.getCoord2D(r2)), _ = c, d2 = u, this.m_changed1 || p3.equals(t2.getXY()) || (this.m_changed1 = true);
        o2 = mi.sqrDistance(p3, t2.getXY()) > i2;
      }
      let f3 = 0, x3 = -1;
      const y2 = 1;
      for (let t3 = 0; t3 <= y2; t3++) {
        const s3 = t3 < y2 ? this.m_param1[0] : 1;
        if (s3 !== f3) {
          const n6 = this.allocResultSegment(), r3 = this.m_resultSegments[n6];
          m2.queryCut(f3, s3, r3), r3.get().snapControlPoints(e3 * e3);
          let i3 = h2.weightStart, o3 = h2.weightEnd, a3 = h2.rankStart, l3 = h2.rankEnd;
          const g2 = h2.rankInterior, u2 = h2.weightInterior;
          let c2 = h2.u.bBreakStart, P3 = h2.u.bBreakEnd;
          -1 !== x3 && (i3 = _, a3 = d2, c2 = true, r3.get().setCoordsForIntersector(p3, r3.get().getEndXY(), true)), t3 !== y2 && (o3 = _, l3 = d2, P3 = true, r3.get().setCoordsForIntersector(r3.get().getStartXY(), p3, true)), f3 = s3, this.m_resultParts1.push(this.newIntersectionPart_(n6, i3, a3, o3, l3, u2, g2, c2, P3, h2.segmentParentage));
        }
        x3 = t3;
      }
      return this.m_point.setXY(p3), this.m_pointWeight = _, this.m_pointRank = d2, o2 ? 3 : 2;
    }
    return 0;
  }
  intersect3D(e3, t2, s2, n5) {
    return n(0), 1;
  }
  intersect3DEx(e3, t2, s2, n5, r, i2, o2) {
    return n(0), 1;
  }
  getTolerance() {
    return this.m_tolerance;
  }
  freeAllResultSegments() {
    this.m_resultSegments.length = 0, this.m_freeSegments.length = 0;
  }
  freeResultSegment(e3) {
    this.m_freeSegments.push(e3);
  }
  allocResultSegment() {
    if (this.m_freeSegments.length) {
      return this.m_freeSegments.pop();
    }
    const e3 = new Pm(), t2 = this.m_resultSegments.length;
    return this.m_resultSegments.push(e3), t2;
  }
  allocResultSegmentFromBuffer(e3) {
    if (this.m_freeSegments.length) {
      return this.m_freeSegments.pop();
    }
    const t2 = new Pm({ copy: e3 }), s2 = this.m_resultSegments.length;
    return this.m_resultSegments.push(t2), s2;
  }
  allocResultSegmentFromSegment(e3) {
    if (this.m_freeSegments.length) {
      return this.m_freeSegments.pop();
    }
    const t2 = new Pm({ segment: e3 }), s2 = this.m_resultSegments.length;
    return this.m_resultSegments.push(t2), s2;
  }
};
function yn(e3, t2) {
  return { bBigMoveStart: false, bBigMoveEnd: false, bBreakStart: e3, bBreakEnd: t2 };
}
function Pn(e3, t2, s2, n5, r, i2, o2, a2, h2, m2) {
  return { segmentIndex: e3, weightStart: t2, rankStart: s2, weightEnd: n5, rankEnd: r, weightInterior: i2, rankInterior: o2, segmentParentage: m2, u: yn(a2, h2) };
}
function En() {
  return { bBigMove: false, bIsBreak: false };
}
xn.maxWeight = 0.1 * Number.MAX_VALUE, xn.c_smallToleranceFactor = 0.01, xn.c_maxGeometryTypeToRankDelta = 8;
var Sn = class {
  constructor() {
    this.start = null, this.end = null, this.equalEdge = null, this.segmentIndex = -1, this.segmentParentage = -1, this.weight = 0, this.rank = 0;
  }
  hasSegment() {
    return this.segmentIndex >= 0;
  }
  transferAttributes(e3, t2, s2) {
    if (1 === t2.getDescription().getAttributeCount()) return;
    const n5 = e3.parent.m_resultSegments[this.segmentIndex].get().getStartXY(), r = e3.parent.m_resultSegments[this.segmentIndex].get().getEndXY(), i2 = new se();
    t2.queryStart(i2), s2 ? (i2.setXY(n5), e3.parent.m_resultSegments[this.segmentIndex].get().setStart(i2)) : (i2.setXY(r), e3.parent.m_resultSegments[this.segmentIndex].get().setEnd(i2)), t2.queryEnd(i2), s2 ? (i2.setXY(r), e3.parent.m_resultSegments[this.segmentIndex].get().setEnd(i2)) : (i2.setXY(n5), e3.parent.m_resultSegments[this.segmentIndex].get().setStart(i2));
  }
  copyFromWhenOverlap(e3, t2, s2) {
    this.equalEdge = t2, t2.equalEdge = this, this.segmentIndex = e3.parent.allocResultSegmentFromBuffer(e3.parent.m_resultSegments[t2.segmentIndex]), this.segmentParentage = t2.segmentParentage, this.weight = t2.weight, this.rank = t2.rank, s2 ? (this.start.copyFrom(t2.start), this.end.copyFrom(t2.end)) : (this.start.copyFrom(t2.end), this.end.copyFrom(t2.start), e3.parent.m_resultSegments[this.segmentIndex].get().reverse());
  }
  getEnd() {
    return this.end;
  }
  getNextInChain() {
    return this.end.nextInChain;
  }
  getPrevInChain() {
    return this.start.prevInChain;
  }
};
var Cn = class {
  constructor() {
    this.hash = 0, this.pt = new mi(), this.prevInChain = null, this.nextInChain = null, this.prevInHash = null, this.nextInHash = null, this.prevEqual = null, this.nextEqual = null, this.weight = 0, this.rank = 0, this.bBigMove = false, this.bIsBreak = false;
  }
  copyFrom(e3) {
    this.pt.assign(e3.pt), this.weight = e3.weight, this.rank = e3.rank, this.bBigMove = e3.bBigMove, this.bIsBreak = e3.bIsBreak;
  }
  nextNode() {
    return this.nextInChain ? this.nextInChain.end : null;
  }
  prevNode() {
    return this.prevInChain ? this.prevInChain.start : null;
  }
  equalListHead() {
    let e3 = this;
    for (; null !== e3.prevEqual; e3 = e3.prevEqual) ;
    return e3;
  }
};
function In(e3, t2, s2, n5) {
  return { edge1: e3, edge2: t2, recursion: s2, bIsIntersecting: n5 };
}
var bn = class {
  constructor(e3) {
    this.m_pairs = [], this.m_chainOrigin1 = null, this.m_chainOrigin2 = null, this.m_newNodes = [], this.m_hashTableOfEquals = [], this.m_hashTableOfEqualsSize = 0, this.m_origin = new mi(), this.m_cell = new mi(), this.parent = e3;
  }
  addSegment(e3, t2, s2, n5, r, i2, o2, a2, h2, m2, g) {
    const u = this.newNode(this.parent.m_resultSegments[e3].get().getStartXY(), s2, n5, h2), c = this.newNode(this.parent.m_resultSegments[e3].get().getEndXY(), r, i2, m2);
    this.newEdge(u, c, e3, o2, a2, g), null === this.m_chainOrigin1 ? this.m_chainOrigin1 = u : null === this.m_chainOrigin2 ? this.m_chainOrigin2 = u : n(0);
  }
  intersectCurvesHelper(e3, t2, s2, n5, r) {
    const o2 = this.getSegment(e3).get(), h2 = this.getSegment(t2).get();
    if (o2.isDegenerate(0) || h2.isDegenerate(0)) return 0;
    const m2 = this.tryOverlapIntersectCurves(e3, t2, s2, n5);
    if (0 !== m2) return m2;
    const g = H(0.01 * s2);
    let u = false, c = this.processSharpCorners(o2, h2, s2, r > 4);
    const _ = c > 0;
    if (!_) {
      if (!(n5 || 5 & am(true, false, o2, h2, s2, true))) return 0;
      c = mm(true, o2, h2, null, this.parent.m_param1, this.parent.m_param2, s2);
    }
    0 === c && b("");
    const d2 = o2.getGeometryType(), p3 = h2.getGeometryType(), f3 = Ot(mi, c), x3 = Ot(mi, c), y2 = Yt(c, Number.NaN), P3 = Yt(c, Number.NaN), E2 = Yt(c, Number.NaN), S2 = Yt(c, Number.NaN), C2 = Ut(En, c), I4 = Ut(En, c);
    let b2 = false, w2 = false;
    for (let i2 = 0; i2 < c; i2++) {
      const n6 = this.parent.m_param1[i2], r2 = this.parent.m_param2[i2];
      let a2 = e3.rank, m3 = e3.weight, l2 = true, c2 = false;
      0 === n6 ? (a2 = e3.start.rank, m3 = e3.start.weight, c2 = e3.start.bIsBreak) : 1 === n6 ? (a2 = e3.end.rank, m3 = e3.end.weight, c2 = e3.end.bIsBreak) : (b2 = true, l2 = false);
      let v3 = t2.rank, N3 = t2.weight, T2 = false, G4 = true;
      0 === r2 ? (v3 = t2.start.rank, N3 = t2.start.weight, T2 = t2.start.bIsBreak) : 1 === r2 ? (v3 = t2.end.rank, N3 = t2.end.weight, T2 = t2.end.bIsBreak) : (w2 = true, G4 = false);
      let D2 = a2, V3 = v3;
      if (D2 === V3 && (D2 *= xn.c_maxGeometryTypeToRankDelta, V3 *= xn.c_maxGeometryTypeToRankDelta, D2 += wn(d2, o2, false), V3 += wn(p3, h2, false)), l2 && G4 && V3 === D2) {
        const e4 = o2.getCoord2D(n6), t3 = h2.getCoord2D(r2);
        e4.equals(t3) && (V3 = D2 - 1);
      }
      let F2 = 1, H3 = 0, k3 = 1, A3 = 0;
      const M = new mi(), U3 = new mi(), q = o2.getCoord2D(n6), B3 = h2.getCoord2D(r2);
      if (_ && mi.distance(q, B3) > s2) M.setCoordsPoint2D(q), U3.setCoordsPoint2D(B3), F2 = m3, k3 = N3, H3 = a2, A3 = v3, C2[i2].bBigMove = false, I4[i2].bBigMove = false, c2 = true, T2 = true;
      else if (D2 === V3) {
        k3 = F2 = m3 + N3, A3 = H3 = a2;
        Y(q, B3, N3 / F2, M), U3.setCoordsPoint2D(M);
        const e4 = mi.sqrDistance(M, q), t3 = mi.sqrDistance(M, B3);
        C2[i2].bBigMove = e4 > g, I4[i2].bBigMove = t3 > g, b2 || q.equals(M) || (b2 = true), w2 || B3.equals(U3) || (w2 = true);
      } else if (D2 > V3) {
        M.setCoordsPoint2D(q), U3.setCoordsPoint2D(M), k3 = F2 = m3, A3 = H3 = a2;
        const e4 = mi.sqrDistance(M, B3);
        C2[i2].bBigMove = false, I4[i2].bBigMove = e4 > g, w2 || B3.equals(U3) || (w2 = true);
      } else {
        U3.setCoordsPoint2D(B3), M.setCoordsPoint2D(U3), k3 = F2 = N3, A3 = H3 = v3;
        const e4 = mi.sqrDistance(M, q);
        C2[i2].bBigMove = e4 > g, I4[i2].bBigMove = false, b2 || q.equals(M) || (b2 = true);
      }
      f3[i2].assign(M), x3[i2].assign(U3), y2[i2] = F2, P3[i2] = k3, E2[i2] = H3, S2[i2] = A3, C2[i2].bIsBreak = c2 || T2, I4[i2].bIsBreak = c2 || T2, u ||= C2[i2].bBigMove || I4[i2].bBigMove, i2 > 0 && (n6 !== this.parent.m_param1[i2 - 1] && r2 !== this.parent.m_param2[i2 - 1] || (E2[i2] <= E2[i2 - 1] ? (f3[i2].assign(x3[i2 - 1]), y2[i2] = P3[i2 - 1], E2[i2] = S2[i2 - 1], x3[i2].assign(x3[i2 - 1]), P3[i2] = P3[i2 - 1], S2[i2] = S2[i2 - 1], C2[i2].bBigMove ||= C2[i2 - 1].bBigMove, I4[i2].bBigMove ||= I4[i2 - 1].bBigMove, C2[i2].bIsBreak ||= C2[i2 - 1].bIsBreak, I4[i2].bIsBreak ||= I4[i2 - 1].bIsBreak) : (f3[i2 - 1].assign(f3[i2]), y2[i2 - 1] = y2[i2], E2[i2 - 1] = E2[i2], x3[i2 - 1].assign(x3[i2]), P3[i2 - 1] = P3[i2], S2[i2 - 1] = S2[i2], C2[i2 - 1].bBigMove ||= C2[i2].bBigMove, I4[i2 - 1].bBigMove ||= I4[i2].bBigMove, C2[i2 - 1].bIsBreak ||= C2[i2].bIsBreak, I4[i2 - 1].bIsBreak ||= I4[i2].bIsBreak)));
    }
    if (!(b2 || w2 || 2 !== c || d2 === a.enumLine && p3 === a.enumLine)) {
      if (this.processDoublyConnectedEdges(e3, t2, r + 1, s2)) return this.parent.m_changed1 = true, this.parent.m_changed2 = true, 2;
      n(0);
    }
    this.parent.m_changed1 ||= b2, this.parent.m_changed2 ||= w2;
    let v2 = e3, N2 = e3.end.weight, T = e3.end.rank, G3 = e3.end.bBigMove, D = e3.end.bIsBreak, V2 = 0, F = -1;
    for (let i2 = 0; i2 <= c; i2++) {
      const t3 = i2 < c ? this.parent.m_param1[i2] : 1;
      if (t3 !== V2) {
        const n6 = this.parent.allocResultSegment(), r2 = this.parent.m_resultSegments[n6];
        let a2, h3, m3, l2;
        o2.queryCut(V2, t3, r2, false), r2.get().snapControlPoints(s2 * s2);
        let g2 = false, u2 = false, _2 = false, d3 = false;
        const p4 = new mi(), x4 = new mi();
        -1 !== F ? (h3 = E2[F], a2 = y2[F], _2 = C2[F].bBigMove, g2 = C2[F].bIsBreak, p4.assign(f3[F])) : (a2 = e3.start.weight, h3 = e3.start.rank, _2 = e3.start.bBigMove, g2 = e3.start.bIsBreak, p4.assign(r2.get().getStartXY())), i2 < c ? (l2 = E2[i2], m3 = y2[i2], d3 = C2[i2].bBigMove, u2 = C2[i2].bIsBreak, x4.assign(f3[i2])) : (m3 = N2, l2 = T, d3 = G3, u2 = D, x4.assign(r2.get().getEndXY()));
        let P4 = v2;
        t3 < 1 && (this.splitEdgeInPlace(v2), P4 = v2.getNextInChain()), this.updateSegmentOnly(v2, n6), 0 === v2.start.hash || v2.start.pt.equals(p4) || (this.m_newNodes.push(v2.start), this.removeNodeFromHash(v2.start), v2.start.hash = 0), 0 === v2.end.hash || v2.end.pt.equals(x4) || (this.m_newNodes.push(v2.end), this.removeNodeFromHash(v2.end), v2.end.hash = 0), v2.start.pt.assign(p4), v2.end.pt.assign(x4), v2.start.bBigMove ||= _2, v2.end.bBigMove ||= d3, v2.start.bIsBreak ||= g2, v2.end.bIsBreak ||= u2, v2.start.weight = a2, v2.start.rank = h3, v2.end.weight = m3, v2.end.rank = l2, v2 = P4, V2 = t3, F = i2;
      } else -1 === F && (F = i2);
    }
    const H2 = v2.getNextInChain(), k2 = [];
    k2.length = c;
    for (let i2 = 0; i2 < c; i2++) k2[i2] = i2;
    c > 2 ? (k2.sort((e4, t3) => Ct(this.parent.m_param2[e4], this.parent.m_param2[t3])), this.parent.m_param2.sort(Ct)) : 2 === c && this.parent.m_param2[0] > this.parent.m_param2[1] && (this.parent.m_param2[1] = Pt(this.parent.m_param2[0], this.parent.m_param2[0] = this.parent.m_param2[1]), k2[1] = Pt(k2[0], k2[0] = k2[1])), v2 = t2, N2 = t2.end.weight, T = t2.end.rank, G3 = t2.end.bBigMove, D = t2.end.bIsBreak, V2 = 0, F = -1;
    for (let i2 = 0; i2 <= c; i2++) {
      const e4 = i2 < c ? this.parent.m_param2[i2] : 1;
      if (e4 !== V2) {
        const n6 = this.parent.allocResultSegment(), r2 = this.parent.m_resultSegments[n6];
        let o3, a2, m3, l2;
        h2.queryCut(V2, e4, r2, false), r2.get().snapControlPoints(s2 * s2);
        const g2 = new mi(), u2 = new mi();
        let _2 = false, d3 = false, p4 = false, f4 = false;
        if (-1 !== F) {
          const e5 = k2[F];
          o3 = P3[e5], a2 = S2[e5], g2.assign(x3[e5]), p4 = I4[e5].bBigMove, _2 = I4[e5].bIsBreak;
        } else o3 = t2.start.weight, a2 = t2.start.rank, p4 = t2.start.bBigMove, _2 = t2.start.bIsBreak, g2.assign(r2.get().getStartXY());
        if (i2 !== c) {
          const e5 = k2[i2];
          m3 = P3[e5], l2 = S2[e5], u2.assign(x3[e5]), f4 = I4[e5].bBigMove, d3 = I4[e5].bIsBreak;
        } else m3 = N2, l2 = T, f4 = G3, d3 = D, u2.assign(r2.get().getEndXY());
        let y3 = v2;
        e4 < 1 && (this.splitEdgeInPlace(v2), y3 = v2.getNextInChain()), this.updateSegmentOnly(v2, n6), 0 === v2.start.hash || v2.start.pt.equals(g2) || (this.m_newNodes.push(v2.start), this.removeNodeFromHash(v2.start), v2.start.hash = 0), 0 === v2.end.hash || v2.end.pt.equals(u2) || (this.m_newNodes.push(v2.end), this.removeNodeFromHash(v2.end), v2.end.hash = 0), v2.start.pt.assign(g2), v2.end.pt.assign(u2), v2.start.bBigMove ||= p4, v2.end.bBigMove ||= f4, v2.start.bIsBreak ||= _2, v2.end.bIsBreak ||= d3, v2.start.weight = o3, v2.start.rank = a2, v2.end.weight = m3, v2.end.rank = l2, v2 = y3, V2 = e4, F = i2;
      } else -1 === F && (F = i2);
    }
    const A2 = v2.getNextInChain();
    return this.postProcessResultPartsForCurves(e3, H2, t2, A2, r + 1), u ? 3 : 2;
  }
  intersectCurves(e3, t2) {
    2 !== this.parent.m_inputSegments.length && b(""), this.parent.m_changed1 = false, this.parent.m_changed2 = false, this.parent.m_tolerance = e3, this.m_hashTableOfEqualsSize = 0, this.m_hashTableOfEquals = Vt(16);
    const n5 = n3.constructEmpty();
    for (let o2 = 0; o2 < 2; o2++) {
      const e4 = this.parent.allocResultSegmentFromSegment(this.parent.m_inputSegments[this.parent.m_inputParts[o2].segmentIndex]), t3 = n3.constructEmpty();
      this.parent.m_inputSegments[this.parent.m_inputParts[o2].segmentIndex].queryLooseEnvelope(t3), n5.mergeEnvelope2D(t3);
      const r2 = this.parent.m_inputParts[o2];
      this.addSegment(e4, 0, r2.weightStart, r2.rankStart, r2.weightEnd, r2.rankEnd, r2.weightInterior, r2.rankInterior, r2.u.bBreakStart, r2.u.bBreakEnd, r2.segmentParentage);
    }
    n5.inflateCoords(100 * e3, 100 * e3), this.m_origin.assign(n5.getLowerLeft()), this.m_cell.setCoords(2 * e3, 2 * e3), this.m_pairs.push(In(this.m_chainOrigin1.nextInChain, this.m_chainOrigin2.nextInChain, 0, t2));
    let r = 0, i2 = true;
    for (; this.m_pairs.length; ) {
      const t3 = this.m_pairs.at(-1);
      this.m_pairs.pop(), n(t3.recursion >= 0), n(t3.recursion <= 256), this.clusterNodes(e3);
      const s2 = this.intersectCurvesHelper(t3.edge1, t3.edge2, e3, t3.bIsIntersecting, t3.recursion);
      i2 && (i2 = false, r = s2);
    }
    for (let s2 = 0; s2 < 2; s2++) {
      const e4 = 0 === s2 ? this.parent.m_resultParts1 : this.parent.m_resultParts2;
      for (let t3 = (0 === s2 ? this.m_chainOrigin1 : this.m_chainOrigin2).nextInChain; null != t3; t3 = t3.getNextInChain()) e4.push(this.parent.newIntersectionPart_(t3.segmentIndex, t3.start.weight, t3.start.rank, t3.end.weight, t3.end.rank, t3.weight, t3.rank, t3.start.bIsBreak, t3.end.bIsBreak, t3.segmentParentage)), e4.at(-1).u.bBigMoveStart = t3.start.bBigMove, e4.at(-1).u.bBigMoveEnd = t3.end.bBigMove;
    }
    return r;
  }
  tryOverlapIntersectCurves(e3, t2, s2, n5) {
    const r = this.parent.m_resultSegments[e3.segmentIndex].get(), i2 = this.parent.m_resultSegments[t2.segmentIndex].get(), o2 = r.getStartXY().equals(i2.getStartXY()) && r.getEndXY().equals(i2.getEndXY()), a2 = r.getStartXY().equals(i2.getEndXY()) && r.getEndXY().equals(i2.getStartXY());
    if (!o2 && !a2) return 0;
    const h2 = hm(r, i2, true);
    if (0 !== h2 && um(r, i2) && e3.segmentParentage === t2.segmentParentage) {
      let e4 = false;
      if (h2 > 0) e4 = r.equals(i2);
      else {
        n(-1 === h2);
        const t3 = new Pm({ segment: i2 });
        t3.get().reverse(), e4 = r.equals(t3.get());
      }
      if (e4) return 1;
    }
    const m2 = s2 * xn.c_smallToleranceFactor;
    let g = false;
    if (0 === h2) {
      const e4 = [0.5, 0.25, 0.75, 0.125, 0.375, 0.625, 0.875, 0.5625, 0.3125];
      for (let t3 = 0, n6 = e4.length; t3 < n6; ++t3) {
        const n7 = e4[t3], o3 = new mi();
        r.queryCoord2D(n7, o3);
        const a3 = i2.getClosestCoordinate(o3, false), h3 = new mi();
        i2.queryCoord2D(a3, h3);
        const l2 = mi.distance(o3, h3);
        if (l2 > s2) return 0;
        g ||= l2 > m2;
      }
      for (let t3 = 0, n6 = e4.length; t3 < n6; ++t3) {
        const n7 = e4[t3], o3 = new mi();
        i2.queryCoord2D(n7, o3);
        const a3 = r.getClosestCoordinate(o3, false), h3 = new mi();
        r.queryCoord2D(a3, h3);
        const l2 = mi.distance(o3, h3);
        if (l2 > s2) return 0;
        g ||= l2 > m2;
      }
    }
    let u = e3.rank, c = t2.rank;
    return u === c && (u *= xn.c_maxGeometryTypeToRankDelta, c *= xn.c_maxGeometryTypeToRankDelta, u += wn(r.getGeometryType(), r, true), c += wn(i2.getGeometryType(), i2, true)), u > c ? (t2.copyFromWhenOverlap(this, e3, o2), t2.transferAttributes(this, r, o2)) : c > u ? (e3.copyFromWhenOverlap(this, t2, o2), e3.transferAttributes(this, i2, o2)) : e3.segmentParentage <= t2.segmentParentage ? (e3.weight = e3.weight + t2.weight, t2.copyFromWhenOverlap(this, e3, o2), t2.transferAttributes(this, r, o2)) : (t2.weight = e3.weight + t2.weight, e3.copyFromWhenOverlap(this, t2, o2), e3.transferAttributes(this, i2, o2)), g ? 3 : 2;
  }
  postProcessResultPartsForCurves(e3, t2, s2, n5, r) {
    r === bs() && b("curve_helper");
    for (let i2 = e3; i2 !== t2; i2 = i2.getNextInChain()) this.updateSegmentToNodes(i2);
    for (let i2 = s2; i2 !== n5; i2 = i2.getNextInChain()) this.updateSegmentToNodes(i2);
    for (let i2 = e3; i2 !== t2; i2 = i2.getNextInChain()) {
      const e4 = i2.end.pt.sub(i2.start.pt);
      for (let t3 = s2; t3 !== n5; t3 = t3.getNextInChain()) {
        let s3 = 0;
        if (i2.start.pt.equals(t3.start.pt) && i2.end.pt.equals(t3.end.pt) ? s3 = 1 : i2.start.pt.equals(t3.end.pt) && i2.end.pt.equals(t3.start.pt) && (s3 = -1), !s3) {
          let s4 = i2.start.pt.equals(t3.start.pt) ? 1 : 0;
          if (s4 || (s4 = i2.end.pt.equals(t3.end.pt) ? 2 : 0, s4 || (s4 = i2.end.pt.equals(t3.start.pt) ? 3 : 0, s4 || (s4 = i2.start.pt.equals(t3.end.pt) ? 4 : 0))), s4) {
            const n7 = t3.end.pt.sub(t3.start.pt), o3 = e4.dotProduct(n7);
            let h3;
            switch (s4) {
              case 1:
              case 2:
                h3 = o3 > 0;
                break;
              case 3:
              case 4:
                h3 = o3 < 0;
                break;
              default:
                b("post_process_result_parts_for_curves_");
            }
            h3 && this.m_pairs.push(In(i2, t3, r, false));
          }
          continue;
        }
        const n6 = this.parent.m_resultSegments[i2.segmentIndex], o2 = this.parent.m_resultSegments[t3.segmentIndex], h2 = [0.5, 0.25, 0.75];
        for (let e5 = 0, t4 = h2.length; e5 < t4; ++e5) {
          const t5 = h2[e5], r2 = new mi();
          n6.get().queryCoord2D(t5, r2);
          const i3 = o2.get().getClosestCoordinate(r2, false), a2 = new mi();
          o2.get().queryCoord2D(i3, a2);
          if (mi.distance(r2, a2) > this.parent.m_tolerance) {
            s3 = 0;
            break;
          }
        }
        if (!s3) {
          this.m_pairs.push(In(i2, t3, r, false));
          continue;
        }
        for (let e5 = 0, t4 = h2.length; e5 < t4; ++e5) {
          const t5 = h2[e5], r2 = new mi();
          o2.get().queryCoord2D(t5, r2);
          const i3 = n6.get().getClosestCoordinate(r2, false), a2 = new mi();
          n6.get().queryCoord2D(i3, a2);
          if (mi.distance(r2, a2) > this.parent.m_tolerance) {
            s3 = 0;
            break;
          }
        }
        if (!s3) {
          this.m_pairs.push(In(i2, t3, r, false));
          continue;
        }
        i2.equalEdge = t3, t3.equalEdge = i2;
        let m2 = i2.rank, l2 = t3.rank;
        m2 === l2 && (m2 *= xn.c_maxGeometryTypeToRankDelta, l2 *= xn.c_maxGeometryTypeToRankDelta, m2 += wn(n6.get().getGeometryType(), n6.get(), true), l2 += wn(o2.get().getGeometryType(), o2.get(), true)), m2 > l2 || m2 === l2 && i2.segmentParentage <= t3.segmentParentage ? (n6.copyTo(o2, false), t3.segmentParentage = i2.segmentParentage, -1 === s3 && o2.get().reverse()) : (o2.copyTo(n6, false), i2.segmentParentage = t3.segmentParentage, -1 === s3 && n6.get().reverse());
        break;
      }
    }
    this.updateAttachedEdgesAfterNodeChange(e3.start), t2 && this.updateAttachedEdgesAfterNodeChange(t2.start), this.updateAttachedEdgesAfterNodeChange(s2.start), n5 && this.updateAttachedEdgesAfterNodeChange(n5.start);
  }
  processDoublyConnectedEdges(e3, t2, s2, n5) {
    s2 === bs() && b("curve_helper");
    const r = this.getSegment(e3).get(), i2 = this.getSegment(t2).get(), o2 = r.getStartXY().equals(i2.getStartXY()) && r.getEndXY().equals(i2.getEndXY()) ? 1 : r.getEndXY().equals(i2.getStartXY()) && r.getStartXY().equals(i2.getEndXY()) ? -1 : 0;
    if (0 !== o2) {
      const a2 = new Pm();
      r.queryCut(0, 0.5, a2), a2.get().snapControlPoints(n5 * n5);
      const h2 = new Pm();
      r.queryCut(0.5, 1, h2), h2.get().snapControlPoints(n5 * n5), this.splitEdgeInPlace(e3), e3.end.pt = a2.get().getEndXY(), e3.segmentIndex = this.parent.allocResultSegmentFromBuffer(a2), e3.getNextInChain().segmentIndex = this.parent.allocResultSegmentFromBuffer(h2);
      let m2 = i2.getClosestCoordinate(e3.end.pt, false);
      return Math.abs(m2 - 0.5) > 0.2 && (m2 = 0.5), i2.queryCut(0, m2, a2), a2.get().snapControlPoints(n5 * n5), i2.queryCut(m2, 1, h2), h2.get().snapControlPoints(n5 * n5), this.splitEdgeInPlace(t2), t2.end.pt = a2.get().getEndXY(), t2.segmentIndex = this.parent.allocResultSegmentFromBuffer(a2), t2.getNextInChain().segmentIndex = this.parent.allocResultSegmentFromBuffer(h2), o2 > 0 ? (this.m_pairs.push(In(e3, t2, s2, false)), this.m_pairs.push(In(e3.getNextInChain(), t2.getNextInChain(), s2, false))) : (this.m_pairs.push(In(e3, t2.getNextInChain(), s2, false)), this.m_pairs.push(In(e3.getNextInChain(), t2, s2, false))), true;
    }
    return false;
  }
  newNode(e3, t2, s2, n5) {
    const r = new Cn();
    return this.m_newNodes.push(r), r.pt = e3, r.rank = s2, r.weight = t2, r.bIsBreak = n5, r;
  }
  newEdge(e3, t2, s2, n5, r, i2) {
    const o2 = new Sn();
    return o2.start = e3, o2.end = t2, e3.nextInChain = o2, t2.prevInChain = o2, o2.segmentIndex = s2, o2.segmentParentage = i2, o2.rank = r, o2.weight = n5, o2;
  }
  splitEdgeInPlace(e3) {
    e3.segmentIndex = -1;
    const t2 = new Sn(), s2 = new Cn();
    this.m_newNodes.push(s2), s2.pt.setNAN(), s2.nextInChain = t2, s2.prevInChain = e3, s2.prevInHash = null, s2.nextInHash = null, s2.prevEqual = null, s2.nextEqual = null, s2.weight = e3.weight, s2.rank = e3.rank, s2.bIsBreak = false, s2.bBigMove = false, t2.start = s2, t2.segmentIndex = -1, t2.end = e3.end, t2.end.prevInChain = t2, t2.rank = e3.rank, t2.weight = e3.weight, t2.segmentParentage = e3.segmentParentage, e3.end = s2, e3.equalEdge && (e3.equalEdge.equalEdge = null), e3.equalEdge = null;
  }
  updateSegmentOnly(e3, t2) {
    e3.segmentIndex = t2;
  }
  updateAttachedEdgesAfterNodeChange(e3) {
    for (let t2 = e3.equalListHead(); null !== t2; t2 = t2.nextEqual) this.updateAttachedEdgesAfterNodeChangeImpl(t2);
  }
  updateAttachedEdgesAfterNodeChangeImpl(e3) {
    const t2 = e3.prevInChain;
    if (t2 && t2.hasSegment()) {
      const s3 = this.getSegment(t2).get();
      e3.pt.equals(s3.getEndXY()) || (s3.setCoordsForIntersector(t2.start.pt, t2.end.pt, false), s3.ensureXYMonotone());
    }
    const s2 = e3.nextInChain;
    if (s2 && s2.hasSegment()) {
      const t3 = this.getSegment(s2).get();
      e3.pt.equals(t3.getStartXY()) || (t3.setCoordsForIntersector(s2.start.pt, s2.end.pt, false), t3.ensureXYMonotone());
    }
  }
  updateSegmentToNodes(e3) {
    const t2 = this.getSegment(e3).get();
    e3.start.pt.equals(t2.getStartXY()) && e3.end.pt.equals(t2.getEndXY()) || (t2.setCoordsForIntersector(e3.start.pt, e3.end.pt, false), t2.ensureXYMonotone()), this.updateAttachedEdgesAfterNodeChange(e3.start), this.updateAttachedEdgesAfterNodeChange(e3.end);
  }
  getSegment(e3) {
    return this.parent.m_resultSegments[e3.segmentIndex];
  }
  clusterNodes(e3) {
    let t2 = false;
    const s2 = [], n5 = [], r = [];
    for (let i2 = 0, o2 = this.m_newNodes.length; i2 < o2; i2++) {
      const e4 = this.m_newNodes[i2];
      if (null === e4) continue;
      let t3 = e4;
      for (let s3 = i2 + 1; s3 < o2; s3++) {
        const n6 = this.m_newNodes[s3];
        null !== n6 && (e4.pt.equals(n6.pt) && (t3.nextInHash = n6, n6.prevInHash = t3, t3 = n6, this.m_newNodes[s3] = null));
      }
    }
    for (let i2 = 0, o2 = this.m_newNodes.length; i2 < o2; i2++) {
      const o3 = this.m_newNodes[i2];
      if (null == o3) continue;
      for (o3.hash = this.calculateHash(o3.pt); ; ) {
        const i3 = Vt(4), a3 = this.hashTableBinsToCheck(o3, i3);
        for (let t3 = 0; t3 < a3; t3++) if (null !== i3[t3]) for (let a4 = i3[t3]; null !== a4; ) {
          const t4 = a4.nextInHash;
          mi.distance(o3.pt, a4.pt) <= e3 && (s2.push(a4), this.removeNodeFromHash(a4), a4.hash = 0, r.push(a4), n5.push(a4)), a4 = t4;
        }
        let h3 = false;
        for (const e4 of s2) if (!o3.pt.equals(e4.pt)) {
          const s3 = un(o3.pt, e4.pt, o3.weight, o3.rank, e4.weight, e4.rank);
          o3.pt.assign(s3.pt), o3.weight = s3.weight, o3.rank = s3.rank, h3 = true, t2 = true;
        }
        if (s2.length = 0, !h3) break;
        o3.hash = this.calculateHash(o3.pt);
      }
      r.push(o3), n5.push(o3);
      for (let e4 = o3.nextInHash; null !== e4; ) {
        e4.prevInHash = null;
        const t3 = e4.nextInHash;
        e4.nextInHash = null, r.push(e4), n5.push(e4), e4 = t3;
      }
      const a2 = o3.hash;
      let h2 = null, m2 = null;
      for (const e4 of n5) o3 !== e4 && (e4.hash = a2, e4.pt.assign(o3.pt), e4.rank = o3.rank, e4.weight = o3.weight), e4.prevInHash = h2, h2 && (h2.nextInHash = e4), e4.prevEqual = m2, e4.nextEqual = null, m2 && (m2.nextEqual = e4), m2 = e4, h2 = e4;
      const l2 = a2 % this.m_hashTableOfEquals.length;
      h2.nextInHash = this.m_hashTableOfEquals[l2], null !== this.m_hashTableOfEquals[l2] && (this.m_hashTableOfEquals[l2].prevInHash = h2), this.m_hashTableOfEquals[l2] = n5[0], this.m_hashTableOfEqualsSize += n5.length, n5.length = 0, this.rehashIfNeeded();
    }
    if (this.m_newNodes.length = 0, t2) for (const i2 of r) this.updateAttachedEdgesAfterNodeChange(i2);
  }
  rehashIfNeeded() {
    if (2 * this.m_hashTableOfEqualsSize > this.m_hashTableOfEquals.length) {
      const e3 = this.m_hashTableOfEquals;
      this.m_hashTableOfEquals = Vt(2 * e3.length), this.m_hashTableOfEqualsSize = 0;
      for (const t2 of e3) {
        let e4 = t2;
        for (; e4; ) {
          const t3 = e4.nextInHash;
          e4.nextInHash = null, e4.prevInHash = null, this.addNodeToHashImpl(e4), e4 = t3;
        }
      }
    }
  }
  addNodeToHashImpl(e3) {
    const t2 = e3.hash % this.m_hashTableOfEquals.length, s2 = this.m_hashTableOfEquals[t2];
    e3.nextInHash = s2, null !== s2 && (s2.prevInHash = e3), this.m_hashTableOfEquals[t2] = e3, this.m_hashTableOfEqualsSize++;
  }
  removeNodeFromHash(e3) {
    const t2 = e3.hash % this.m_hashTableOfEquals.length, s2 = e3.prevInHash, n5 = e3.nextInHash;
    s2 ? s2.nextInHash = n5 : this.m_hashTableOfEquals[t2] = n5, n5 && (n5.prevInHash = s2), this.m_hashTableOfEqualsSize--, e3.prevInHash = null, e3.nextInHash = null;
  }
  hashTableBinsToCheck(e3, t2) {
    const s2 = (e3.pt.x - this.m_origin.x) / this.m_cell.x, n5 = (e3.pt.y - this.m_origin.y) / this.m_cell.y, r = ds() - 1, i2 = Math.round(Us(s2, -r, r)), o2 = Math.round(Us(n5, -r, r));
    let a2 = i2 | o2 << 32;
    a2 = Zs(a2), t2[0] = this.m_hashTableOfEquals[a2 % this.m_hashTableOfEquals.length];
    let h2 = i2 + 1 | o2 << 32;
    h2 = Zs(h2);
    let m2 = 1;
    t2[1] = this.m_hashTableOfEquals[h2 % this.m_hashTableOfEquals.length], t2[1] !== t2[0] && (m2 = 2);
    let l2 = i2 + 1 | o2 + 1 << 32;
    l2 = Zs(l2), t2[m2] = this.m_hashTableOfEquals[l2 % this.m_hashTableOfEquals.length];
    for (let u = 0; u < m2; u++) if (t2[m2] === t2[u]) {
      m2--;
      break;
    }
    m2++;
    let g = i2 | o2 + 1 << 32;
    g = Zs(g), t2[m2] = this.m_hashTableOfEquals[g % this.m_hashTableOfEquals.length];
    for (let u = 0; u < m2; u++) if (t2[m2] === t2[u]) {
      m2--;
      break;
    }
    return m2++, m2;
  }
  calculateHash(e3) {
    const t2 = (e3.x - this.m_origin.x) / this.m_cell.x, s2 = (e3.y - this.m_origin.y) / this.m_cell.y, n5 = ds() - 1;
    let r = Math.round(Us(t2, -n5, n5)) | Math.round(Us(s2, -n5, n5)) << 32;
    return r = Zs(r), 0 === r && (r = 1), r;
  }
  processSharpCorners(e3, t2, s2, n5) {
    if (this.parent.m_param1.length = 0, this.parent.m_param2.length = 0, e3.getStartXY().equals(t2.getStartXY())) {
      const r = [0, 0], i2 = [0, 0], o2 = dm(e3, t2, 0, 0, s2, 2, r, i2, n5);
      if (o2) {
        this.parent.m_param1.push(0), this.parent.m_param2.push(0);
        for (let e4 = 0; e4 < o2; e4++) this.parent.m_param1.push(r[e4]), this.parent.m_param2.push(i2[e4]);
        return o2 + 1;
      }
    }
    if (e3.getEndXY().equals(t2.getEndXY())) {
      const r = [0, 0], i2 = [0, 0], o2 = dm(e3, t2, 1, 1, s2, 2, r, i2, n5);
      if (o2) {
        for (let e4 = 0; e4 < o2; e4++) this.parent.m_param1.push(r[e4]), this.parent.m_param2.push(i2[e4]);
        return this.parent.m_param1.push(1), this.parent.m_param2.push(1), o2 + 1;
      }
    }
    if (e3.getStartXY().equals(t2.getEndXY())) {
      const r = [0, 0], i2 = [0, 0], o2 = dm(e3, t2, 0, 1, s2, 2, r, i2, n5);
      if (o2) {
        this.parent.m_param1.push(0), this.parent.m_param2.push(1);
        for (let e4 = 0; e4 < o2; e4++) this.parent.m_param1.push(r[e4]), this.parent.m_param2.push(i2[e4]);
        return o2 + 1;
      }
    }
    if (e3.getEndXY().equals(t2.getStartXY())) {
      const r = [0, 0], i2 = [0, 0], o2 = dm(e3, t2, 1, 0, s2, 2, r, i2, n5);
      if (o2) {
        for (let e4 = 0; e4 < o2; e4++) this.parent.m_param1.push(r[e4]), this.parent.m_param2.push(i2[e4]);
        return this.parent.m_param1.push(1), this.parent.m_param2.push(0), o2 + 1;
      }
    }
    return 0;
  }
};
function wn(e3, t2, s2) {
  let n5 = 0;
  switch (e3) {
    case a.enumLine:
      n5 = 0;
      break;
    case a.enumBezier:
      n5 = 2;
      break;
    case a.enumRationalBezier2:
      n5 = 3;
      break;
    case a.enumBezier2:
      n5 = 1;
      break;
    case a.enumEllipticArc:
      n5 = 0 === t2.projectionBehavior() ? 5 : 4;
      break;
    default:
      b("");
  }
  return s2 ? 5 - n5 : n5;
}
var vn = class extends on {
  constructor(e3) {
    super(e3.m_shape, e3.m_tolerance, false), this.m_parent = e3;
  }
  compare(e3, t2, s2) {
    if (this.m_bIntersectionDetected) return -1;
    const n5 = e3.getElement(s2), r = this.m_parent.getEdgeOriginVertices(t2), i2 = this.m_parent.m_edgeVertices.getFirstElement(r), o2 = this.m_parent.getEdgeOriginVertices(n5), a2 = this.m_parent.m_edgeVertices.getFirstElement(o2);
    return this.m_currentNode = s2, this.compareSegments(t2, i2, n5, a2);
  }
};
var Nn = class extends an {
  constructor(e3) {
    super(e3.m_shape, e3.m_tolerance), this.m_parent = e3;
  }
  compare(e3, t2) {
    if (this.m_bIntersectionDetected) return -1;
    const s2 = e3.getElement(t2), n5 = this.m_parent.getEdgeOriginVertices(s2), r = this.m_parent.m_edgeVertices.getFirstElement(n5);
    return this.m_currentNode = t2, this.compareVertex(e3, t2, r);
  }
};
var Tn = class extends ct2 {
  constructor(e3) {
    super(), this.pt1 = mi.getNAN(), this.pt2 = mi.getNAN(), this.m_shape = e3;
  }
  compare(e3, t2, s2) {
    this.m_shape.queryXY(t2, this.pt1);
    const n5 = e3.getElement(s2);
    return this.m_shape.queryXY(n5, this.pt2), this.pt1.compare(this.pt2);
  }
};
var Gn = class {
  constructor(e3) {
    this.m_point = mi.getNAN(), this.m_pt = mi.getNAN(), this.m_shape = e3;
  }
  setPoint(e3) {
    this.m_point.setCoordsPoint2D(e3);
  }
  compare(e3, t2) {
    const s2 = e3.getElement(t2);
    return this.m_shape.queryXY(s2, this.m_pt), this.m_point.compare(this.m_pt);
  }
};
var Dn2 = class {
  constructor(e3, t2) {
    this.m_shape = null, this.m_progressTracker = null, this.m_edges = new mt(8), this.m_clusters = new mt(5), this.m_clusterVertices = new sn(false), this.m_edgeVertices = new sn(false), this.m_helperPoint = new se(), this.m_eventQ = new pt(), this.m_sweepStructure = new pt(), this.m_bComplications = false, this.m_sweepComparator = null, this.m_tempEdgeBuffer = [], this.m_modifiedClusters = [], this.m_edgesToInsertInSweepStructure = [], this.m_prevNeighbour = -1, this.m_nextNeighbour = -1, this.m_bContinuingSegmentChainOptimization = false, this.m_progressCounter = 0, this.m_segmentIntersector = new xn(), this.m_segBuf1 = new Pm(), this.m_segBuf2 = new Pm(), this.m_sweepPoint = new mi(0, 0), this.m_tolerance = 0, this.m_toleranceSqr = 0, this.m_sweepPointCluster = -1, this.m_vertexClusterIndex = -1, this.m_bCracked = false, this.m_bSweepPointClusterWasModified = false, this.m_progressTracker = e3, this.m_bTrackChanges = t2;
  }
  hadComplications() {
    return this.m_bComplications;
  }
  sweep(e3, t2) {
    const s2 = new x2();
    s2.setSwapCoordinates(), e3.applyTransformation(s2), this.setEditShape_(e3), this.m_bCracked = false, this.m_tolerance = t2, this.m_toleranceSqr = t2 * t2;
    let n5 = this.sweepImpl_();
    return e3.applyTransformation(s2), n5 || (this.fillEventQueuePass2(), n5 = this.sweepImpl_() || n5), this.m_shape.removeUserIndex(this.m_vertexClusterIndex), this.m_shape = null, this.m_bCracked;
  }
  sweepVertical(e3, t2) {
    this.setEditShape_(e3), this.m_bCracked = false, this.m_tolerance = t2, this.m_toleranceSqr = t2 * t2, this.m_bComplications = false;
    let s2 = this.sweepImpl_();
    if (!this.m_bComplications) {
      const n5 = e3.filterClosePoints(t2, true, false, this.m_bTrackChanges, gr);
      this.m_bComplications = 1 === n5, s2 ||= 1 === n5;
    }
    return -1 !== this.m_vertexClusterIndex && (this.m_shape.removeUserIndex(this.m_vertexClusterIndex), this.m_vertexClusterIndex = -1), this.m_shape = null, s2;
  }
  getEdgeCluster(e3, t2) {
    return this.m_edges.getField(e3, 0 + t2);
  }
  setEdgeCluster_(e3, t2, s2) {
    this.m_edges.setField(e3, 0 + t2, s2);
  }
  getEdgeOriginVertices(e3) {
    return this.m_edges.getField(e3, 2);
  }
  setEdgeOriginVertices_(e3, t2) {
    this.m_edges.setField(e3, 2, t2);
  }
  getNextEdgeEx(e3, t2) {
    return this.m_edges.getField(e3, 3 + t2);
  }
  setNextEdgeEx_(e3, t2, s2) {
    this.m_edges.setField(e3, 3 + t2, s2);
  }
  getEdgeSweepNode(e3) {
    return this.m_edges.getField(e3, 7);
  }
  setEdgeSweepNode_(e3, t2) {
    this.m_edges.setField(e3, 7, t2);
  }
  getNextEdge(e3, t2) {
    const s2 = this.getEdgeEnd(e3, t2);
    return this.m_edges.getField(e3, 3 + s2);
  }
  setNextEdge_(e3, t2, s2) {
    const n5 = this.getEdgeEnd(e3, t2);
    this.m_edges.setField(e3, 3 + n5, s2);
  }
  getPrevEdge(e3, t2) {
    const s2 = this.getEdgeEnd(e3, t2);
    return this.m_edges.getField(e3, 5 + s2);
  }
  setPrevEdge_(e3, t2, s2) {
    const n5 = this.getEdgeEnd(e3, t2);
    this.m_edges.setField(e3, 5 + n5, s2);
  }
  getClusterVertices(e3) {
    return this.m_clusters.getField(e3, 0);
  }
  setClusterVertices_(e3, t2) {
    this.m_clusters.setField(e3, 0, t2);
  }
  getClusterSweepEdgeList(e3) {
    return this.m_clusters.getField(e3, 2);
  }
  setClusterSweepEdgeList_(e3, t2) {
    this.m_clusters.setField(e3, 2, t2);
  }
  getClusterFirstEdge(e3) {
    return this.m_clusters.getField(e3, 1);
  }
  setClusterFirstEdge_(e3, t2) {
    this.m_clusters.setField(e3, 1, t2);
  }
  getClusterEventQNode(e3) {
    return this.m_clusters.getField(e3, 3);
  }
  setClusterEventQNode_(e3, t2) {
    this.m_clusters.setField(e3, 3, t2);
  }
  newCluster_(e3) {
    const t2 = this.m_clusters.newElement(), s2 = this.m_clusterVertices.createList();
    return this.setClusterVertices_(t2, s2), e3 !== gr && (this.m_clusterVertices.addElement(s2, e3), this.m_shape.setUserIndex(e3, this.m_vertexClusterIndex, t2)), t2;
  }
  deleteCluster_(e3) {
    this.m_clusters.deleteElement(e3);
  }
  addVertexToCluster_(e3, t2) {
    const s2 = this.getClusterVertices(e3);
    this.m_clusterVertices.addElement(s2, t2), this.m_shape.setUserIndex(t2, this.m_vertexClusterIndex, e3);
  }
  newEdge_(e3) {
    const t2 = this.m_edges.newElement(), s2 = this.m_edgeVertices.createList();
    return this.setEdgeOriginVertices_(t2, s2), -1 !== e3 && this.m_edgeVertices.addElement(s2, e3), t2;
  }
  addVertexToEdge_(e3, t2) {
    const s2 = this.getEdgeOriginVertices(e3);
    this.m_edgeVertices.addElement(s2, t2);
  }
  deleteEdge_(e3) {
    this.m_edges.deleteElement(e3);
    const t2 = this.m_edgesToInsertInSweepStructure.findIndex((t3) => t3 === e3);
    t2 >= 0 && St(this.m_edgesToInsertInSweepStructure, t2);
  }
  addEdgeToCluster(e3, t2) {
    -1 === this.getEdgeCluster(e3, 0) ? this.setEdgeCluster_(e3, 0, t2) : -1 === this.getEdgeCluster(e3, 1) ? this.setEdgeCluster_(e3, 1, t2) : b(""), this.addEdgeToClusterImpl_(e3, t2);
  }
  addEdgeToClusterImpl_(e3, t2) {
    const s2 = this.getClusterFirstEdge(t2);
    if (-1 !== s2) {
      const n5 = this.getNextEdge(s2, t2);
      this.setPrevEdge_(n5, t2, e3), this.setNextEdge_(e3, t2, n5), this.setNextEdge_(s2, t2, e3), this.setPrevEdge_(e3, t2, s2);
    } else this.setPrevEdge_(e3, t2, e3), this.setNextEdge_(e3, t2, e3), this.setClusterFirstEdge_(t2, e3);
  }
  getEdgeEnd(e3, t2) {
    return this.getEdgeCluster(e3, 0) === t2 ? 0 : 1;
  }
  mergeClusters_(e3, t2) {
    this.dbgCheckCluster_(e3), this.dbgCheckCluster_(t2);
    const s2 = this.getClusterEventQNode(t2);
    -1 !== s2 && (this.m_eventQ.deleteNode(s2), this.setClusterEventQNode_(t2, -1));
    let n5 = this.getClusterFirstEdge(e3), r = this.getClusterFirstEdge(t2);
    if (-1 !== r) {
      let s3 = r, i3 = r, o3 = false;
      do {
        this.dbgCheckEdge_(s3), o3 = false;
        const n6 = this.getEdgeEnd(s3, t2), a2 = this.getNextEdgeEx(s3, n6);
        if (this.getEdgeCluster(s3, n6 + 1 & 1) === e3) {
          this.disconnectEdge_(s3);
          const e4 = this.getEdgeOriginVertices(s3);
          if (this.m_edgeVertices.deleteList(e4), this.deleteEdge_(s3), s3 === a2) {
            r = -1;
            break;
          }
          r === s3 && (r = this.getClusterFirstEdge(t2), i3 = a2, o3 = true);
        }
        s3 = a2;
      } while (s3 !== i3 || o3);
      if (-1 !== r) {
        do {
          const n6 = this.getEdgeEnd(s3, t2), r2 = this.getNextEdgeEx(s3, n6);
          this.setEdgeCluster_(s3, n6, e3), s3 = r2;
        } while (s3 !== i3);
        if (n5 = this.getClusterFirstEdge(e3), -1 !== n5) {
          const t3 = this.getNextEdge(n5, e3), s4 = this.getNextEdge(r, e3);
          t3 === n5 ? (this.setClusterFirstEdge_(e3, r), this.addEdgeToClusterImpl_(n5, e3), this.setClusterFirstEdge_(e3, n5)) : s4 === r && this.addEdgeToClusterImpl_(r, e3), this.setNextEdge_(r, e3, t3), this.setPrevEdge_(t3, e3, r), this.setNextEdge_(n5, e3, s4), this.setPrevEdge_(s4, e3, n5);
        } else this.setClusterFirstEdge_(e3, r);
      }
    }
    const i2 = this.getClusterVertices(e3), o2 = this.getClusterVertices(t2);
    for (let a2 = this.m_clusterVertices.getFirst(o2); -1 !== a2; a2 = this.m_clusterVertices.getNext(a2)) {
      const t3 = this.m_clusterVertices.getElement(a2);
      this.m_shape.setUserIndex(t3, this.m_vertexClusterIndex, e3);
    }
    this.m_clusterVertices.concatenateLists(i2, o2), this.deleteCluster_(t2), this.dbgCheckCluster_(e3);
  }
  mergeEdges_(e3, t2) {
    this.dbgCheckEdge_(e3), this.dbgCheckEdge_(t2);
    const s2 = this.getEdgeCluster(e3, 0), n5 = this.getEdgeCluster(e3, 1), r = this.getEdgeCluster(t2, 0), i2 = this.getEdgeCluster(t2, 1), o2 = this.getEdgeOriginVertices(e3), a2 = this.getEdgeOriginVertices(t2);
    if (this.m_edgeVertices.concatenateLists(o2, a2), t2 === this.getClusterFirstEdge(s2) && this.setClusterFirstEdge_(s2, e3), t2 === this.getClusterFirstEdge(n5) && this.setClusterFirstEdge_(n5, e3), this.disconnectEdge_(t2), this.deleteEdge_(t2), !(s2 === r && n5 === i2 || n5 === r && s2 === i2)) {
      const e4 = this.getClusterXY(s2), t3 = this.getClusterXY(r);
      e4.isEqualPoint2D(t3) ? (s2 !== r && this.mergeClusters_(s2, r), n5 !== i2 && this.mergeClusters_(n5, i2)) : (n5 !== r && this.mergeClusters_(n5, r), s2 !== i2 && this.mergeClusters_(s2, i2));
    }
    this.dbgCheckEdge_(e3);
  }
  disconnectEdge_(e3) {
    const t2 = this.getEdgeCluster(e3, 0), s2 = this.getEdgeCluster(e3, 1);
    this.disconnectEdgeFromCluster_(e3, t2), this.disconnectEdgeFromCluster_(e3, s2);
  }
  disconnectEdgeFromCluster_(e3, t2) {
    const s2 = this.getNextEdge(e3, t2), n5 = this.getPrevEdge(e3, t2), r = this.getClusterFirstEdge(t2);
    s2 !== e3 ? (this.setNextEdge_(n5, t2, s2), this.setPrevEdge_(s2, t2, n5), r === e3 && this.setClusterFirstEdge_(t2, s2)) : this.setClusterFirstEdge_(t2, -1);
  }
  applyIntersectorToEditShape_(e3, t2, s2) {
    let n5 = this.m_edgeVertices.getFirst(e3);
    const r = this.m_edgeVertices.getElement(n5), i2 = this.getClusterFromVertex(r), o2 = this.m_shape.getNextVertex(r), a2 = this.getClusterFromVertex(o2), h2 = this.m_shape.getXY(r), m2 = this.m_shape.getXY(o2);
    let l2 = false, g = false;
    const u = t2.getResultSegment(s2, 0).getStartXY(), c = t2.getResultSegment(s2, t2.getResultSegmentCount(s2) - 1).getEndXY();
    h2.equals(u) || (l2 = true), m2.equals(c) || (g = true), this.m_shape.splitSegmentWithIntersector(r, t2, s2, true, true);
    const _ = this.m_bTrackChanges && t2.getSegmentChanged(s2);
    for (_ && this.m_shape.setGeometryModifiedWithVertex(r, true), n5 = this.m_edgeVertices.getNext(n5); -1 !== n5; n5 = this.m_edgeVertices.getNext(n5)) {
      const e4 = this.m_edgeVertices.getElement(n5), r2 = this.getClusterFromVertex(e4) === i2;
      this.m_shape.splitSegmentWithIntersector(e4, t2, s2, r2, true), _ && this.m_shape.setGeometryModifiedWithVertex(e4, true);
    }
    if (l2 && this.updateClusterXY(true, i2, u, t2.getResultSegmentStartPointWeight(s2, 0), t2.getResultSegmentStartPointRank(s2, 0)), g) {
      const e4 = t2.getResultSegmentCount(s2) - 1;
      this.updateClusterXY(true, a2, c, t2.getResultSegmentEndPointWeight(s2, e4), t2.getResultSegmentEndPointRank(s2, e4));
    }
  }
  createEdgesAndClustersFromSplitEdge_(e3, t2, s2) {
    this.dbgCheckNewEdgesArray_();
    const n5 = this.getEdgeOriginVertices(e3), r = this.getEdgeCluster(e3, 0), i2 = this.getEdgeCluster(e3, 1);
    let o2 = this.newEdge_(-1);
    this.m_edgesToInsertInSweepStructure.push(o2);
    const a2 = mt.impossibleIndex3();
    this.setEdgeSweepNode_(o2, a2), this.m_tempEdgeBuffer.push(o2), this.addEdgeToCluster(o2, r);
    const h2 = t2.getResultSegmentCount(s2);
    for (let m2 = 1; m2 < h2; m2++) {
      const e4 = this.newCluster_(-1);
      this.m_modifiedClusters.push(e4), this.m_tempEdgeBuffer.push(e4), this.addEdgeToCluster(o2, e4);
      const t3 = this.newEdge_(-1);
      this.m_edgesToInsertInSweepStructure.push(t3), this.setEdgeSweepNode_(t3, a2), this.m_tempEdgeBuffer.push(t3), this.addEdgeToCluster(t3, e4), o2 = t3;
    }
    this.addEdgeToCluster(o2, i2);
    for (let m2 = this.m_edgeVertices.getFirst(n5); -1 !== m2; m2 = this.m_edgeVertices.getNext(m2)) {
      let e4 = this.m_edgeVertices.getElement(m2);
      if (this.getClusterFromVertex(e4) === r) {
        let t3 = 0;
        const s3 = this.m_tempEdgeBuffer.length;
        do {
          if (t3 > 0) {
            const s5 = this.m_tempEdgeBuffer[t3 - 1];
            this.addVertexToCluster_(s5, e4);
          }
          const s4 = this.m_tempEdgeBuffer[t3];
          t3 += 2, this.addVertexToEdge_(s4, e4), e4 = this.m_shape.getNextVertex(e4);
        } while (t3 < s3);
      } else {
        let t3 = this.m_tempEdgeBuffer.length - 1;
        do {
          if (t3 < this.m_tempEdgeBuffer.length - 2) {
            const s4 = this.m_tempEdgeBuffer[t3 + 1];
            this.addVertexToCluster_(s4, e4);
          }
          const s3 = this.m_tempEdgeBuffer[t3];
          t3 -= 2, this.addVertexToEdge_(s3, e4), e4 = this.m_shape.getNextVertex(e4);
        } while (t3 >= 0);
      }
    }
    this.m_tempEdgeBuffer.length = 0, this.dbgCheckNewEdgesArray_();
  }
  getVertexFromClusterIndex(e3) {
    const t2 = this.getClusterVertices(e3);
    return this.m_clusterVertices.getFirstElement(t2);
  }
  getClusterFromVertex(e3) {
    return this.m_shape.getUserIndex(e3, this.m_vertexClusterIndex);
  }
  processSplitHelper1_(e3, t2, s2) {
    const n5 = this.getEdgeCluster(t2, 0), r = this.getClusterXY(n5), i2 = this.getEdgeCluster(t2, 1), o2 = this.getClusterXY(i2), a2 = s2.getResultSegmentCount(e3);
    let h2 = s2.getResultSegment(e3, 0);
    const m2 = h2.getStartXY();
    if (!r.isEqualPoint2D(m2)) {
      if (!this.m_bComplications) {
        r.compare(this.m_sweepPoint) * m2.compare(this.m_sweepPoint) < 0 && (this.m_bComplications = true);
      }
      this.getAffectedEdges(n5, this.m_tempEdgeBuffer), this.m_modifiedClusters.push(n5);
    }
    if (!this.m_bComplications && a2 > 1) {
      const e4 = r.compare(o2), t3 = h2.getEndXY();
      (r.compare(t3) !== e4 || t3.compare(o2) !== e4 || t3.compare(this.m_sweepPoint) < 0) && (this.m_bComplications = true);
    }
    h2 = s2.getResultSegment(e3, a2 - 1);
    const l2 = h2.getEndXY();
    if (!o2.isEqualPoint2D(l2)) {
      if (!this.m_bComplications) {
        o2.compare(this.m_sweepPoint) * l2.compare(this.m_sweepPoint) < 0 && (this.m_bComplications = true);
      }
      this.getAffectedEdges(i2, this.m_tempEdgeBuffer), this.m_modifiedClusters.push(i2);
    }
    this.m_tempEdgeBuffer.push(t2);
    for (let g = 0, u = this.m_tempEdgeBuffer.length; g < u; g++) {
      const e4 = this.m_tempEdgeBuffer[g], s3 = this.getEdgeSweepNode(e4);
      mt.isValidElement(s3) && (this.m_sweepStructure.deleteNode(s3), this.setEdgeSweepNode_(e4, -1));
      const n6 = mt.impossibleIndex3();
      e4 !== t2 && this.getEdgeSweepNode(e4) !== n6 && (this.m_edgesToInsertInSweepStructure.push(e4), this.setEdgeSweepNode_(e4, n6));
    }
    this.m_tempEdgeBuffer.length = 0;
  }
  checkAndFixIntersection_(e3, t2) {
    const s2 = this.m_sweepStructure.getElement(e3);
    return this.m_sweepComparator.compare(this.m_sweepStructure, s2, t2), !!this.m_sweepComparator.intersectionDetected() && (this.m_sweepComparator.clearIntersectionDetectedFlag(), this.fixIntersection_(e3, t2), true);
  }
  fixIntersection_(e3, t2) {
    this.m_bCracked = true;
    const s2 = this.m_sweepStructure.getElement(e3), n5 = this.m_sweepStructure.getElement(t2);
    let r = null, i2 = null;
    const o2 = this.getEdgeOriginVertices(s2), a2 = this.m_edgeVertices.getFirstElement(o2), h2 = this.getEdgeOriginVertices(n5), m2 = this.m_edgeVertices.getFirstElement(h2);
    this.m_shape.querySegment(a2, this.m_segBuf1, false, false), r = this.m_segBuf1.get();
    const l2 = this.m_shape.getNextVertex(a2), g = this.m_shape.getWeight(a2), u = this.m_shape.getSegmentParentageBreakVertex(a2), c = this.m_shape.getWeight(l2), _ = this.m_shape.getSegmentParentageBreakVertex(l2), d2 = this.m_shape.getSegmentWeight(a2), p3 = this.m_shape.getRank(a2), f3 = this.m_shape.getRank(l2), x3 = this.m_shape.getSegmentRank(a2), y2 = this.m_shape.getSegmentParentage(a2);
    this.m_shape.querySegment(m2, this.m_segBuf2, false, false), i2 = this.m_segBuf2.get();
    const P3 = this.m_shape.getNextVertex(m2), E2 = this.m_shape.getWeight(m2), S2 = this.m_shape.getSegmentParentageBreakVertex(m2), C2 = this.m_shape.getWeight(P3), I4 = this.m_shape.getSegmentParentageBreakVertex(P3), b2 = this.m_shape.getSegmentWeight(m2), w2 = this.m_shape.getRank(m2), v2 = this.m_shape.getRank(P3), N2 = this.m_shape.getSegmentRank(m2), T = this.m_shape.getSegmentParentage(m2);
    this.m_segmentIntersector.pushSegment(r, g, p3, c, f3, d2, x3, u, _, y2), this.m_segmentIntersector.pushSegment(i2, E2, w2, C2, v2, b2, N2, S2, I4, T), 3 === this.m_segmentIntersector.intersect2D(this.m_tolerance, true) && (this.m_bComplications = true), this.splitEdge_(s2, n5, -1, this.m_segmentIntersector), this.m_segmentIntersector.clear();
  }
  fixIntersectionPointSegment_(e3, t2) {
    this.m_bCracked = true;
    const s2 = this.m_sweepStructure.getElement(t2);
    let n5 = null;
    const r = this.getEdgeOriginVertices(s2), i2 = this.m_edgeVertices.getFirstElement(r);
    this.m_shape.querySegment(i2, this.m_segBuf1, false, false), n5 = this.m_segBuf1.get();
    const o2 = this.m_shape.getNextVertex(i2), a2 = this.m_shape.getWeight(i2), h2 = this.m_shape.getSegmentParentageBreakVertex(i2), m2 = this.m_shape.getWeight(o2), l2 = this.m_shape.getSegmentParentageBreakVertex(o2), g = this.m_shape.getSegmentWeight(i2), u = this.m_shape.getRank(i2), c = this.m_shape.getRank(o2), _ = this.m_shape.getSegmentRank(i2), d2 = this.m_shape.getSegmentParentage(i2), p3 = this.getClusterFirstVertex(e3);
    this.m_segmentIntersector.pushSegment(n5, a2, u, m2, c, g, _, h2, l2, d2), this.m_shape.queryPoint(p3, this.m_helperPoint);
    const f3 = this.m_shape.getWeight(p3), x3 = this.m_shape.getRank(p3);
    this.m_segmentIntersector.intersect2DEx(this.m_tolerance, this.m_helperPoint, x3, f3, true), this.splitEdge_(s2, -1, e3, this.m_segmentIntersector), this.m_segmentIntersector.clear();
  }
  insertNewEdges_() {
    if (0 === this.m_edgesToInsertInSweepStructure.length) return true;
    this.dbgCheckNewEdgesArray_();
    let e3 = true, t2 = 0;
    const s2 = this.m_edgesToInsertInSweepStructure.length, n5 = Math.max(2 * s2 + 200, this.m_sweepStructure.size() + 200);
    for (; this.m_edgesToInsertInSweepStructure.length; ) {
      if (this.m_edgesToInsertInSweepStructure.length > Math.max(100, this.m_shape.getTotalPointCount()) || t2 > n5) {
        this.m_edgesToInsertInSweepStructure.length = 0, this.m_bComplications = true, e3 = false;
        break;
      }
      const s3 = this.m_edgesToInsertInSweepStructure.at(-1);
      this.m_edgesToInsertInSweepStructure.pop(), this.setEdgeSweepNode_(s3, -1);
      const r = this.isEdgeOnSweepLine_(s3);
      mt.isValidElement(r) ? (this.insertNewEdgeToSweepStructure_(s3, r), t2++) : r !== mt.impossibleIndex2() && (e3 = false), this.m_bContinuingSegmentChainOptimization = false;
    }
    return e3;
  }
  insertNewEdgeToSweepStructure_(e3, t2) {
    let s2;
    if (this.m_bContinuingSegmentChainOptimization ? (s2 = this.m_sweepStructure.addElementAtPosition(this.m_prevNeighbour, this.m_nextNeighbour, e3, true, true), this.m_bContinuingSegmentChainOptimization = false) : s2 = this.m_sweepStructure.addUniqueElement(e3), -1 === s2) {
      const t3 = this.m_sweepStructure.getDuplicateElement(), s3 = this.m_sweepStructure.getElement(t3);
      return this.mergeEdges_(s3, e3), false;
    }
    if (this.setEdgeSweepNode_(e3, s2), this.m_sweepComparator.intersectionDetected()) {
      this.m_sweepComparator.clearIntersectionDetectedFlag();
      const e4 = this.m_sweepComparator.getLastComparedNode();
      return this.m_prevNeighbour === e4 && (this.m_prevNeighbour = -1), this.m_nextNeighbour === e4 && (this.m_nextNeighbour = -1), this.fixIntersection_(e4, s2), true;
    }
    return false;
  }
  isEdgeOnSweepLine_(e3) {
    const t2 = this.getEdgeCluster(e3, 0), s2 = this.getEdgeCluster(e3, 1), n5 = this.getClusterXY(t2), r = this.getClusterXY(s2);
    if (mi.sqrDistance(n5, r) <= this.m_toleranceSqr) return this.m_bComplications = true, -1;
    const i2 = n5.compare(this.m_sweepPoint), o2 = r.compare(this.m_sweepPoint);
    return i2 <= 0 && o2 > 0 ? s2 : o2 <= 0 && i2 > 0 ? t2 : i2 > 0 && o2 > 0 ? mt.impossibleIndex2() : -1;
  }
  fillEventQueue() {
    const e3 = new st(0), t2 = this.m_shape.queryVertexIteratorOnSelection();
    for (let r = t2.next(); r !== gr; r = t2.next()) -1 !== this.m_shape.getUserIndex(r, this.m_vertexClusterIndex) && e3.add(r);
    this.m_shape.sortVerticesSimpleByY(e3, 0, e3.size()), this.progress_(true), this.m_eventQ.clear(), this.m_eventQ.setCapacity(e3.size()), this.m_eventQ.setComparator(new Tn(this.m_shape));
    const s2 = mi.getNAN();
    s2.setNAN();
    let n5 = -1;
    for (let r = 0, i2 = e3.size(); r < i2; r++) {
      const t3 = e3.read(r);
      if (this.m_shape.getXY(t3).isEqualPoint2D(s2)) {
        const e4 = this.m_shape.getUserIndex(t3, this.m_vertexClusterIndex);
        this.mergeClusters_(n5, e4);
        continue;
      }
      n5 = this.getClusterFromVertex(t3), this.m_shape.queryXY(t3, s2);
      const i3 = this.m_eventQ.addBiggestElement(t3);
      this.setClusterEventQNode_(n5, i3);
    }
  }
  fillEventQueuePass2() {
    const e3 = new st(0);
    for (let t2 = this.m_eventQ.getFirst(); -1 !== t2; t2 = this.m_eventQ.getNext(t2)) {
      const s2 = this.m_eventQ.getElement(t2);
      e3.add(s2);
    }
    this.m_eventQ.clear(), this.m_shape.sortVerticesSimpleByY(e3, 0, e3.size()), this.progress_(true);
    for (let t2 = 0, s2 = e3.size(); t2 < s2; t2++) {
      const s3 = e3.read(t2), n5 = this.getClusterFromVertex(s3), r = this.m_eventQ.addBiggestElement(s3);
      this.setClusterEventQNode_(n5, r);
    }
  }
  getAffectedEdges(e3, t2) {
    const s2 = this.getClusterFirstEdge(e3);
    if (-1 === s2) return;
    let n5 = s2;
    do {
      const s3 = this.getEdgeSweepNode(n5);
      mt.isValidElement(s3) && t2.push(n5), n5 = this.getNextEdge(n5, e3);
    } while (n5 !== s2);
  }
  updateClusterXY(e3, t2, s2, n5, r) {
    const i2 = this.getClusterVertices(t2);
    for (let o2 = this.m_clusterVertices.getFirst(i2); -1 !== o2; o2 = this.m_clusterVertices.getNext(o2)) {
      const t3 = this.m_clusterVertices.getElement(o2);
      this.m_shape.setXYMonotonicPoint2D(t3, s2), this.m_shape.setWeight(t3, n5), this.m_shape.setRank(t3, r), e3 && this.m_bTrackChanges && this.m_shape.setGeometryModifiedWithVertex(t3, true), this.m_shape.setSegmentParentageBreakVertex(t3, true);
    }
  }
  splitEdge_(e3, t2, s2, n5) {
    this.dbgCheckEdge_(e3), -1 !== t2 && this.dbgCheckEdge_(t2), this.disconnectEdge_(e3), -1 !== t2 && this.disconnectEdge_(t2), this.processSplitHelper1_(0, e3, n5), -1 !== t2 && this.processSplitHelper1_(1, t2, n5), -1 !== s2 && n5.getResultPointChanged() && this.m_modifiedClusters.push(s2);
    for (let o2 = 0, a2 = this.m_modifiedClusters.length; o2 < a2; o2++) {
      const e4 = this.m_modifiedClusters[o2], t3 = this.getClusterEventQNode(e4);
      -1 !== t3 && (this.m_eventQ.deleteNode(t3), this.setClusterEventQNode_(e4, -1));
    }
    const r = this.getEdgeOriginVertices(e3), i2 = -1 !== t2 ? this.getEdgeOriginVertices(t2) : -1;
    if (this.applyIntersectorToEditShape_(r, n5, 0), -1 !== i2) this.applyIntersectorToEditShape_(i2, n5, 1);
    else {
      const e4 = n5.getResultPoint().getXY();
      this.updateClusterXY(n5.getResultPointChanged(), s2, e4, n5.getResultPointWeight(), n5.getResultPointRank());
    }
    this.createEdgesAndClustersFromSplitEdge_(e3, n5, 0), -1 !== t2 && this.createEdgesAndClustersFromSplitEdge_(t2, n5, 1), this.m_edgeVertices.deleteList(r), this.deleteEdge_(e3), -1 !== t2 && (this.m_edgeVertices.deleteList(i2), this.deleteEdge_(t2));
    for (let o2 = 0, a2 = this.m_modifiedClusters.length; o2 < a2; o2++) {
      const e4 = this.m_modifiedClusters[o2];
      e4 === this.m_sweepPointCluster && (this.m_bSweepPointClusterWasModified = true);
      let t3 = this.getClusterEventQNode(e4);
      if (-1 === t3) {
        const s3 = this.getClusterFirstVertex(e4);
        if (t3 = this.m_eventQ.addUniqueElement(s3), -1 === t3) {
          const t4 = this.m_eventQ.getDuplicateElement(), s4 = this.m_eventQ.getElement(t4), n6 = this.getClusterFromVertex(s4);
          this.mergeClusters_(n6, e4);
        } else this.setClusterEventQNode_(e4, t3);
      }
    }
    this.m_modifiedClusters.length = 0;
  }
  getClusterXY(e3) {
    const t2 = this.getClusterFirstVertex(e3);
    return this.m_shape.getXY(t2);
  }
  getClusterFirstVertex(e3) {
    const t2 = this.getClusterVertices(e3);
    return this.m_clusterVertices.getFirstElement(t2);
  }
  dbgCheckEdge_(e3) {
  }
  dbgCheckCluster_(e3) {
  }
  dbgCheckNewEdgesArray_() {
  }
  dbgSaveSweepStructure_(e3) {
  }
  sweepImpl_() {
    this.progress_(true), this.m_bSweepPointClusterWasModified = false, this.m_sweepPointCluster = -1, null === this.m_sweepComparator && (this.m_sweepStructure.disableBalancing(), this.m_sweepComparator = new vn(this), this.m_sweepStructure.setComparator(this.m_sweepComparator));
    const e3 = [];
    let t2 = null, s2 = null;
    this.m_prevNeighbour = -1, this.m_nextNeighbour = -1, this.m_bContinuingSegmentChainOptimization = false;
    const n5 = mt.impossibleIndex2(), r = mt.impossibleIndex3();
    for (let i2 = this.m_eventQ.getFirst(); -1 !== i2; ) {
      this.progress_(), this.dbgCheckSweepStructure_(), this.m_bContinuingSegmentChainOptimization = false, this.m_prevNeighbour = -1, this.m_nextNeighbour = -1;
      const o2 = this.m_eventQ.getElement(i2);
      this.m_sweepPointCluster = this.getClusterFromVertex(o2), this.m_shape.queryXY(o2, this.m_sweepPoint), this.m_sweepComparator.setSweepY(this.m_sweepPoint.y, this.m_sweepPoint.x);
      let a2 = false;
      {
        const t3 = this.getClusterFirstEdge(this.m_sweepPointCluster);
        if (a2 = -1 === t3, !a2) {
          let s3 = t3;
          do {
            const t4 = this.getEdgeSweepNode(s3);
            -1 === t4 ? (this.m_edgesToInsertInSweepStructure.push(s3), this.setEdgeSweepNode_(s3, r)) : t4 !== r && e3.push(t4), s3 = this.getNextEdge(s3, this.m_sweepPointCluster);
          } while (s3 !== t3);
        }
      }
      if (!this.m_sweepStructure.isAutoBalancing() && (this.m_sweepStructure.getMaxDepthEver() > 4 || this.m_edgesToInsertInSweepStructure.length > 10) && this.m_sweepStructure.enableBalancing(), e3.length > 0) {
        this.m_bContinuingSegmentChainOptimization = 1 === e3.length && 1 === this.m_edgesToInsertInSweepStructure.length;
        for (let r2 = 0, i3 = e3.length; r2 < i3; r2++) {
          const t4 = this.m_sweepStructure.getElement(e3[r2]);
          this.setEdgeSweepNode_(t4, n5);
        }
        let t3 = n5, s3 = n5;
        for (let r2 = 0, i3 = e3.length; r2 < i3; r2++) {
          const i4 = e3[r2];
          if (t3 === n5) {
            const e4 = this.m_sweepStructure.getPrev(i4);
            if (-1 !== e4) {
              const s4 = this.m_sweepStructure.getElement(e4);
              this.getEdgeSweepNode(s4) !== n5 && (t3 = e4);
            } else t3 = -1;
          }
          if (s3 === n5) {
            const e4 = this.m_sweepStructure.getNext(i4);
            if (-1 !== e4) {
              const t4 = this.m_sweepStructure.getElement(e4);
              this.getEdgeSweepNode(t4) !== n5 && (s3 = e4);
            } else s3 = -1;
          }
          if (t3 !== n5 && s3 !== n5) break;
        }
        for (let n6 = 0, r2 = e3.length; n6 < r2; n6++) {
          const t4 = e3[n6], s4 = this.m_sweepStructure.getElement(t4);
          this.m_sweepStructure.deleteNode(t4), this.setEdgeSweepNode_(s4, -1);
        }
        e3.length = 0, this.m_prevNeighbour = t3, this.m_nextNeighbour = s3, -1 !== t3 && -1 !== s3 ? this.m_bContinuingSegmentChainOptimization || this.checkAndFixIntersection_(t3, s3) : -1 === t3 && -1 === s3 && (this.m_bContinuingSegmentChainOptimization = false);
      } else a2 && (null === t2 && (t2 = new Nn(this)), t2.setPoint(this.m_sweepPoint), this.m_sweepStructure.searchUpperBound(t2), t2.intersectionDetected() && (t2.clearIntersectionDetectedFlag(), this.fixIntersectionPointSegment_(this.m_sweepPointCluster, t2.getCurrentNode())));
      const h2 = this.m_bContinuingSegmentChainOptimization;
      !this.insertNewEdges_() && h2 && -1 !== this.m_prevNeighbour && -1 !== this.m_nextNeighbour && this.checkAndFixIntersection_(this.m_prevNeighbour, this.m_nextNeighbour), this.m_bSweepPointClusterWasModified ? (this.m_bSweepPointClusterWasModified = false, null === s2 && (s2 = new Gn(this.m_shape)), s2.setPoint(this.m_sweepPoint), i2 = this.m_eventQ.searchUpperBound(s2)) : i2 = this.m_eventQ.getNext(i2);
    }
    return this.m_bCracked;
  }
  setEditShape_(e3) {
    this.m_shape = e3, this.m_vertexClusterIndex = this.m_shape.createUserIndex(), this.m_edges.setCapacity(e3.getSelectedCount() + 32), this.m_clusters.setCapacity(e3.getSelectedCount()), this.m_clusterVertices.reserveLists(e3.getSelectedCount()), this.m_clusterVertices.reserveNodes(e3.getSelectedCount()), this.m_edgeVertices.reserveLists(e3.getSelectedCount() + 32), this.m_edgeVertices.reserveNodes(e3.getSelectedCount() + 32);
    for (let t2 = this.m_shape.getFirstGeometry(); t2 !== gr; t2 = this.m_shape.getNextGeometry(t2)) {
      if (h(this.m_shape.getGeometryType(t2))) for (let s2 = this.m_shape.getFirstPath(t2); s2 !== gr; s2 = this.m_shape.getNextPath(s2)) {
        const t3 = this.m_shape.getPathSize(s2), n5 = this.m_shape.getFirstVertex(s2);
        if (n5 === gr) continue;
        let r = this.m_shape.getNextVertex(n5);
        if (r === gr || r === n5) continue;
        let i2 = -1;
        e3.selected(n5) && (i2 = this.newCluster_(n5));
        let o2 = -1;
        -1 !== i2 && e3.selected(r) && (o2 = this.newEdge_(n5), this.addEdgeToCluster(o2, i2));
        let a2 = o2;
        for (let e4 = 0, s3 = t3 - 2; e4 < s3; e4++) {
          const e5 = this.m_shape.getNextVertex(r);
          let t4 = -1;
          if (this.m_shape.selected(r)) {
            const s4 = this.newCluster_(r);
            -1 !== a2 && this.addEdgeToCluster(a2, s4), this.m_shape.selected(e5) && (t4 = this.newEdge_(r), this.addEdgeToCluster(t4, s4));
          }
          a2 = t4, r = e5;
        }
        if (this.m_shape.isClosedPath(s2)) {
          const e4 = this.m_shape.getNextVertex(r);
          if (this.m_shape.selected(r)) {
            const t4 = this.newCluster_(r);
            if (-1 !== a2 && this.addEdgeToCluster(a2, t4), this.m_shape.selected(e4)) {
              const e5 = this.newEdge_(r);
              this.addEdgeToCluster(e5, t4), this.addEdgeToCluster(e5, i2);
            }
          }
        } else {
          let e4 = -1;
          this.m_shape.selected(r) && (e4 = this.newCluster_(r), -1 !== a2 && this.addEdgeToCluster(a2, e4));
        }
      }
      else for (let e4 = this.m_shape.getFirstPath(t2); e4 !== gr; e4 = this.m_shape.getNextPath(e4)) {
        let t3 = this.m_shape.getFirstVertex(e4);
        for (let s2 = 0, n5 = this.m_shape.getPathSize(e4); s2 < n5; s2++) this.m_shape.selected(t3) && this.newCluster_(t3), t3 = this.m_shape.getNextVertex(t3);
      }
    }
    this.fillEventQueue();
  }
  progress_(e3 = false) {
  }
  dbgCheckSweepStructure_() {
  }
};
function Vn(e3, t2, s2, n5) {
  s2 > 0 && mn(e3, s2, t2, false, n5);
  new Hn(n5).executeImpl_(e3, t2);
}
function Fn(e3, t2, s2) {
  return { vertex0: e3, vertex1: t2, dir: s2 };
}
var Hn = class {
  constructor(e3) {
    this.m_shape = null, this.m_spikes = [], this.m_points = new st(0), this.m_pointsIndex = -1, this.m_dissolvedEdges = 0, this.m_progressTracker = e3;
  }
  executeImpl_(e3, t2) {
    if (this.m_shape = e3, e3.getPathCount(t2) < 2 && e3.getPointCount(t2) < 6) return;
    this.m_points.resize(0);
    for (let l2 = e3.getFirstPath(t2); l2 !== gr; l2 = e3.getNextPath(l2)) {
      let t3 = e3.getFirstVertex(l2);
      for (let s3 = 0, n6 = e3.getPathSize(l2); s3 < n6; s3++, t3 = e3.getNextVertex(t3)) this.m_points.add(t3);
    }
    this.m_pointsIndex = e3.createUserIndex();
    for (let l2 = 0, g = this.m_points.size(); l2 < g; ++l2) e3.setUserIndex(this.m_points.read(l2), this.m_pointsIndex, l2);
    e3.sortVerticesSimpleByY(this.m_points, 0, this.m_points.size());
    let s2 = this.m_points.read(0);
    const n5 = e3.getXY(s2);
    let r = 1, i2 = 0;
    const o2 = [];
    for (let l2 = 1; l2 < this.m_points.size(); l2++) {
      const t3 = this.m_points.read(l2);
      if (t3 === gr) continue;
      if (-1 === e3.getUserIndex(t3, this.m_pointsIndex)) continue;
      const a3 = e3.getXY(t3);
      if (a3.isEqualPoint2D(n5)) r++;
      else {
        if (r > 1) {
          for (let t4 = i2; t4 < l2; t4++) {
            const s3 = this.m_points.read(t4);
            if (-1 === e3.getUserIndex(s3, this.m_pointsIndex)) continue;
            const r2 = e3.getNextVertex(s3), i3 = e3.getPrevVertex(s3);
            if (s3 !== r2 && !e3.isEqualXYPoint2D(r2, n5)) {
              const e4 = Fn(s3, r2, 1);
              o2.push(e4);
            }
            if (s3 !== i3 && i3 !== r2 && !e3.isEqualXYPoint2D(i3, n5)) {
              const e4 = Fn(s3, i3, -1);
              o2.push(e4);
            }
          }
          o2.length > 0 && this.processBunch_(o2, n5);
        }
        s2 = t3, n5.assign(a3), r = 1, i2 = l2;
      }
    }
    if (0 === this.m_dissolvedEdges) return e3.removeUserIndex(this.m_pointsIndex), void (this.m_pointsIndex = -1);
    let a2 = e3.getPointCount(t2);
    for (let l2 = 0; l2 < this.m_points.size(); l2++) {
      const t3 = this.m_points.read(l2);
      if (t3 === gr) continue;
      if (-1 !== e3.getUserIndex(t3, this.m_pointsIndex)) {
        e3.setUserIndex(t3, this.m_pointsIndex, -1);
        continue;
      }
      const s3 = e3.getPathFromVertex(t3);
      e3.getFirstVertex(s3) === t3 && e3.setFirstVertex(s3, gr), e3.freeVertex(t3), this.m_points.write(l2, gr), a2--;
    }
    const h2 = e3.createPathUserIndex();
    let m2 = e3.getPathCount(t2);
    for (let g = 0, u = this.m_points.size(); g < u; ++g) {
      if (this.m_points.read(g) === gr) continue;
      let s3 = this.m_points.read(g);
      if (-1 !== e3.getUserIndex(s3, this.m_pointsIndex)) continue;
      let n6 = e3.getPathFromVertex(s3), r2 = -1;
      if (2 === e3.getPathUserIndex(n6, h2)) {
        n6 = gr;
        for (let t3 = e3.getNextVertex(s3); t3 !== s3; t3 = e3.getNextVertex(t3)) {
          const r3 = e3.getPathFromVertex(t3);
          if (2 !== e3.getPathUserIndex(r3, h2)) {
            n6 = r3, s3 = t3;
            break;
          }
        }
        n6 === gr && (n6 = e3.insertPath(t2, gr), e3.setClosedPath(n6, true), m2++), n(n6 !== gr);
      }
      e3.setPathUserIndex(n6, h2, 2), r2 = e3.getFirstVertex(n6);
      let i3 = 0, o3 = false, a3 = s3;
      do {
        r2 === a3 && (o3 = true), e3.setUserIndex(a3, this.m_pointsIndex, 1);
        const t3 = e3.getPathFromVertex(a3);
        t3 !== n6 && (2 !== e3.getPathUserIndex(t3, h2) && (e3.setPathUserIndex(t3, h2, 1), e3.setFirstVertex(t3, gr)), e3.setPathToVertex(a3, n6)), i3++, a3 = e3.getNextVertex(a3);
      } while (a3 !== s3);
      o3 || e3.setFirstVertex(n6, s3), e3.setPathSize(n6, i3);
    }
    for (let l2 = e3.getFirstPath(t2); l2 !== gr; ) {
      const t3 = e3.getNextPath(l2);
      1 !== e3.getPathUserIndex(l2, h2) && e3.getFirstVertex(l2) !== gr || (e3.removePathOnly(l2), m2--), l2 = t3;
    }
    e3.setGeometryVertexCount(t2, a2), e3.setGeometryPathCount(t2, m2), e3.removePathUserIndex(h2), e3.removeUserIndex(this.m_pointsIndex), this.m_pointsIndex = -1, e3.dbgVerifyVertexCounts(), e3.filterClosePoints(0, true, false, false, t2);
  }
  processBunch_(e3, t2) {
    e3.sort((e4, s3) => {
      const n6 = this.m_shape.getXY(e4.vertex1).sub(t2), r2 = this.m_shape.getXY(s3.vertex1).sub(t2), i3 = mi.compareVectors(n6, r2);
      return 0 === i3 ? e4.dir < s3.dir ? -1 : 1 : i3;
    });
    let s2 = 0;
    const n5 = this.m_shape.getXY(e3[0].vertex1);
    let r = 1;
    const i2 = this.m_shape.hasCurves();
    for (let o2 = 1, a2 = e3.length; o2 < a2; o2++) {
      const t3 = this.m_shape.getXY(e3[o2].vertex1);
      if (!(t3.isEqualPoint2D(n5) && (r++, o2 + 1 < a2))) {
        if (2 === r) {
          const t4 = e3[s2], n6 = e3[s2 + 1], r2 = t4.dir;
          if (r2 !== n6.dir) {
            let e4 = true;
            if (i2 && (e4 = !this.m_shape.isCurve(1 === t4.dir ? t4.vertex0 : t4.vertex1) && !this.m_shape.isCurve(1 === n6.dir ? n6.vertex0 : n6.vertex1)), e4) {
              if (1 === r2) {
                const e5 = t4.vertex0, s3 = n6.vertex0;
                this.m_shape.setNextVertex(e5, s3), this.m_shape.setPrevVertex(s3, e5), this.m_shape.getPrevVertex(e5) === s3 && (this.m_shape.setUserIndex(e5, this.m_pointsIndex, -1), this.m_shape.setUserIndex(s3, this.m_pointsIndex, -1));
                const r3 = t4.vertex1, i3 = n6.vertex1;
                this.m_shape.setPrevVertex(r3, i3), this.m_shape.setNextVertex(i3, r3), this.m_shape.getNextVertex(r3) === i3 && (this.m_shape.setUserIndex(r3, this.m_pointsIndex, -1), this.m_shape.setUserIndex(i3, this.m_pointsIndex, -1));
              } else {
                const e5 = t4.vertex0, s3 = n6.vertex0;
                this.m_shape.setPrevVertex(e5, s3), this.m_shape.setNextVertex(s3, e5), this.m_shape.getNextVertex(e5) === s3 && (this.m_shape.setUserIndex(e5, this.m_pointsIndex, -1), this.m_shape.setUserIndex(s3, this.m_pointsIndex, -1));
                const r3 = t4.vertex1, i3 = n6.vertex1;
                this.m_shape.setNextVertex(r3, i3), this.m_shape.setPrevVertex(i3, r3), this.m_shape.getPrevVertex(r3) === i3 && (this.m_shape.setUserIndex(r3, this.m_pointsIndex, -1), this.m_shape.setUserIndex(i3, this.m_pointsIndex, -1));
              }
              this.m_dissolvedEdges += 2;
            }
          }
        }
        n5.assign(t3), s2 = o2, r = 1;
      }
    }
    e3.length = 0;
  }
};
function kn(e3) {
  for (let t2 = e3.getFirstGeometry(); t2 !== gr; t2 = e3.getNextGeometry(t2)) if (h(e3.getGeometryType(t2))) return true;
  return false;
}
function An(e3, t2, s2, n5) {
  if (!kn(e3)) return false;
  const r = new Bn(n5);
  r.m_shape = e3, r.m_tolerance = t2, r.m_bTrackChanges = s2;
  let i2 = false;
  const o2 = e3.hasCurves() ? 5 : 15;
  return i2 = e3.getTotalPointCount() < o2 ? r.crackBruteForce_() : r.crackerPlaneSweep_(), i2;
}
function Mn(e3, t2, s2, n5, r) {
  if (!kn(t2)) return false;
  let i2 = new Bn(r);
  if (i2.m_shape = t2, i2.m_tolerance = s2, i2.m_bAllowCoincident = e3, i2.m_bNeedsNonSimpleResult = null !== n5, i2.needsCrackingImpl_()) return n5 && n5.assign(i2.m_nonSimpleResult), true;
  const o2 = new x2();
  o2.setSwapCoordinates(), t2.applyTransformation(o2), i2 = new Bn(r), i2.m_shape = t2, i2.m_tolerance = s2, i2.m_bAllowCoincident = e3, i2.m_bNeedsNonSimpleResult = null !== n5;
  const a2 = i2.needsCrackingImpl_();
  return t2.applyTransformation(o2), !!a2 && (n5 && n5.assign(i2.m_nonSimpleResult), true);
}
function Un(e3, t2, s2, n5) {
  const r = t2.getGeometryType();
  if (h(r)) {
    return new Bn(n5).crackAWithBMultiPath_(e3, t2, s2);
  }
  z("crack_A_with_B");
}
function qn(e3, t2) {
  return { t: e3, index: t2 };
}
var Bn = class _Bn {
  crackBruteForce_() {
    let e3 = this.crackBruteForceImpl_();
    if (!e3 && this.m_shape.hasCurves()) {
      const t2 = new x2();
      t2.setSwapCoordinates(), this.m_shape.applyTransformation(t2), e3 = this.crackBruteForceImpl_(), this.m_shape.applyTransformation(t2);
    }
    return e3;
  }
  crackBruteForceImpl_() {
    let e3 = false;
    const t2 = new Pm(), n5 = new Pm(), r = n3.constructEmpty(), i2 = n3.constructEmpty(), o2 = false, a2 = new se(), h2 = new xn(), m2 = this.m_shape.getTotalPointCount(), u = m2 * m2 * 2, c = this.m_shape.queryVertexIteratorOnSelection();
    for (let s2 = c.next(); s2 !== gr; s2 = c.next()) {
      const m3 = this.m_shape.getGeometryType(c.currentGeometry());
      let _ = 1, d2 = 1, p3 = 1, f3 = 0, x3 = 0, y2 = 0;
      const P3 = this.m_shape.getSegmentParentage(s2);
      let E2 = false, S2 = false, C2 = null, I4 = false;
      if (l(m3)) _ = this.m_shape.getWeight(s2), f3 = this.m_shape.getRank(s2);
      else {
        if (C2 = this.getSegment_(s2, t2), null === C2) continue;
        const e4 = this.m_shape.getVertexIndex(s2);
        _ = this.m_shape.getWeightWithIndex(e4), f3 = this.m_shape.getRankWithIndex(e4), p3 = this.m_shape.getSegmentWeightWithIndex(e4), y2 = this.m_shape.getSegmentRankWithIndex(e4), E2 = this.m_shape.getSegmentParentageBreakVertex(s2);
        {
          const e5 = this.m_shape.getNextVertex(s2);
          d2 = this.m_shape.getWeight(e5), x3 = this.m_shape.getRank(e5), S2 = this.m_shape.getSegmentParentageBreakVertex(e5);
        }
        if (C2.queryLooseEnvelope(r), r.inflateCoords(this.m_tolerance, this.m_tolerance), C2.isDegenerate(this.m_tolerance)) {
          if (!C2.isDegenerate(0)) continue;
          I4 = true, C2 = null;
        }
      }
      const b2 = new fr({ copy: c });
      let w2 = b2.next();
      w2 !== gr && (w2 = b2.next());
      let v2 = 0;
      for (; w2 !== gr; w2 = b2.next()) {
        if (0 !== v2) {
          v2--;
          continue;
        }
        if (this.m_shape.getTotalPointCount() > u) return e3;
        this.progress_();
        const m4 = this.m_shape.getGeometryType(b2.currentGeometry());
        let N2 = null, T = false, G3 = 0, D = 0, V2 = 0, F = 0, H2 = 0, k2 = 0, A2 = false, M = false;
        const U3 = this.m_shape.getSegmentParentage(w2);
        if (l(m4)) G3 = this.m_shape.getWeight(w2), F = this.m_shape.getRank(w2);
        else {
          if (N2 = this.getSegment_(w2, n5), null === N2) continue;
          const e4 = this.m_shape.getVertexIndex(w2);
          G3 = this.m_shape.getWeightWithIndex(e4), F = this.m_shape.getRankWithIndex(e4), V2 = this.m_shape.getSegmentWeightWithIndex(e4), k2 = this.m_shape.getSegmentRankWithIndex(e4), A2 = this.m_shape.getSegmentParentageBreakVertex(w2);
          {
            const e5 = this.m_shape.getNextVertex(w2);
            D = this.m_shape.getWeight(e5), H2 = this.m_shape.getRank(e5), M = this.m_shape.getSegmentParentageBreakVertex(e5);
          }
          if (N2.queryLooseEnvelope(i2), N2.isDegenerate(this.m_tolerance)) {
            if (!N2.isDegenerate(0)) continue;
            T = true, N2 = null;
          }
        }
        let B3 = 0, O = 0;
        if (null !== C2 && null !== N2) {
          if (r.isIntersectingNe(i2)) {
            0 !== am(true, true, C2, N2, this.m_tolerance, true) && (h2.pushSegment(C2, _, f3, d2, x3, p3, y2, E2, S2, P3), h2.pushSegment(N2, G3, F, D, H2, V2, k2, A2, M, U3), h2.intersect2D(this.m_tolerance, true), e3 ||= h2.getSegmentChanged(0) || h2.getSegmentChanged(1), B3 = h2.getResultSegmentCount(0), O = h2.getResultSegmentCount(1), B3 + O > 0 && (this.m_shape.splitSegmentWithIntersector(s2, h2, 0, true, true), this.m_shape.splitSegmentWithIntersector(w2, h2, 1, true, true), this.m_bTrackChanges && (h2.getSegmentChanged(0) && this.m_shape.setGeometryModifiedWithVertex(s2, true), h2.getSegmentChanged(1) && this.m_shape.setGeometryModifiedWithVertex(w2, true))), O > 1 && (v2 += O - 1), h2.clear());
          }
        } else if (null !== C2) {
          const t3 = this.m_shape.getXY(w2);
          if (r.contains(t3)) {
            if (h2.pushSegment(C2, _, f3, d2, x3, p3, y2, E2, S2, P3), this.m_shape.queryPoint(w2, a2), h2.intersect2DEx(this.m_tolerance, a2, F, G3, o2), e3 ||= h2.getSegmentChanged(0) || h2.getResultPointChanged(), B3 = h2.getResultSegmentCount(0), B3 > 0) if (this.m_bTrackChanges && (h2.getSegmentChanged(0) && this.m_shape.setGeometryModifiedWithVertex(s2, true), h2.getSegmentChanged(1) && this.m_shape.setGeometryModifiedWithVertex(w2, true)), this.m_shape.splitSegmentWithIntersector(s2, h2, 0, true, true), T) {
              let e4 = gr;
              for (let t4 = this.m_shape.getNextVertex(w2); t4 !== gr && t4 !== w2 && (N2 = this.getSegment_(t4, n5), e4 = t4, null != N2 && N2.isDegenerate(0)); t4 = this.m_shape.getNextVertex(t4)) ;
              for (let t4 = w2; t4 !== gr && (this.m_shape.setPoint(t4, h2.getResultPoint(), true), t4 !== e4); t4 = this.m_shape.getNextVertex(t4)) ;
            } else this.m_shape.setPoint(w2, h2.getResultPoint(), true);
            h2.clear();
          }
        } else {
          if (null === N2) continue;
          {
            const t3 = this.m_shape.getXY(s2);
            if (i2.inflateCoords(this.m_tolerance, this.m_tolerance), i2.contains(t3)) {
              if (h2.pushSegment(N2, G3, F, D, H2, V2, k2, A2, M, U3), this.m_shape.queryPoint(s2, a2), h2.intersect2DEx(this.m_tolerance, a2, f3, _, o2), e3 ||= h2.getSegmentChanged(0) || h2.getResultPointChanged(), O = h2.getResultSegmentCount(0), O > 0) if (this.m_bTrackChanges && (h2.getSegmentChanged(0) && this.m_shape.setGeometryModifiedWithVertex(w2, true), h2.getSegmentChanged(1) && this.m_shape.setGeometryModifiedWithVertex(s2, true)), this.m_shape.splitSegmentWithIntersector(w2, h2, 0, true, true), v2 += O - 1, I4) {
                let e4 = gr;
                for (let t4 = this.m_shape.getNextVertex(s2); t4 !== gr && t4 !== s2 && (N2 = this.getSegment_(t4, n5), e4 = t4, null != N2 && N2.isDegenerate(0)); t4 = this.m_shape.getNextVertex(t4)) ;
                for (let t4 = s2; t4 !== gr && (this.m_shape.setPoint(t4, h2.getResultPoint(), true), t4 !== e4); t4 = this.m_shape.getNextVertex(t4)) ;
              } else this.m_shape.setPoint(s2, h2.getResultPoint(), true);
              h2.clear();
            }
          }
        }
        if (B3 + O !== 0 && 0 !== B3) {
          let e4 = false;
          for (; C2 = this.getSegment_(s2, t2), null != C2 && (C2.queryEnvelope(r), C2.isDegenerate(this.m_tolerance)); ) {
            if (!(B3 > 1)) {
              e4 = true;
              break;
            }
            s2 = c.next(), B3--, n(s2 !== gr);
          }
          if (e4) break;
        }
      }
    }
    return e3;
  }
  crackerPlaneSweep_() {
    return this.planesweep_();
  }
  planesweep_() {
    return new Dn2(this.m_progressTracker, this.m_bTrackChanges).sweep(this.m_shape, this.m_tolerance);
  }
  needsCrackingImpl_() {
    let e3 = false;
    const t2 = new st(0);
    t2.resize(this.m_shape.getSelectedCount());
    const s2 = this.m_shape.queryVertexIteratorOnSelection();
    for (let a2 = 0, g = s2.next(); g !== gr; ++a2, g = s2.next()) t2.write(a2, g);
    this.m_shape.sortVerticesSimpleByY(t2, 0, t2.size()), t2.add(gr);
    const n5 = this.m_shape.createUserIndex(), r = this.m_shape.createUserIndex();
    this.m_sweepComparator = new on(this.m_shape, this.m_tolerance, !this.m_bAllowCoincident), this.m_sweepStructure.setComparator(this.m_sweepComparator);
    let i2 = null;
    const o2 = [], h2 = [];
    let m2 = 0;
    const l2 = new mi();
    for (let g = t2.read(m2++); g !== gr; ) {
      this.m_shape.queryXY(g, l2);
      let s3 = false;
      do {
        let e4 = this.m_shape.getNextVertex(g), i3 = this.m_shape.getPrevVertex(g);
        s3 ||= e4 !== gr || i3 !== gr, e4 === gr || this.m_shape.selected(e4) || (e4 = gr), i3 === gr || this.m_shape.selected(i3) || (i3 = gr), e4 !== gr && this.m_shape.compareVerticesSimpleY(g, e4) < 0 && (h2.push(g), h2.push(e4)), i3 !== gr && this.m_shape.compareVerticesSimpleY(g, i3) < 0 && (h2.push(i3), h2.push(i3));
        const a2 = this.m_shape.getUserIndex(g, n5);
        -1 !== a2 && (o2.push(a2), this.m_shape.setUserIndex(g, n5, -1));
        const l3 = this.m_shape.getUserIndex(g, r);
        -1 !== l3 && (o2.push(l3), this.m_shape.setUserIndex(g, r, -1)), g = t2.read(m2++);
      } while (g !== gr && this.m_shape.isEqualXYPoint2D(g, l2));
      if (!s3 && (null === i2 && (i2 = new an(this.m_shape, this.m_tolerance)), i2.setPoint(l2), this.m_sweepStructure.searchUpperBound(i2), i2.intersectionDetected())) {
        e3 = true, this.m_bNeedsNonSimpleResult && (b("needsCrackingIMpl_"), this.m_nonSimpleResult = new e(6, -1, -1));
        break;
      }
      let u = 1 === o2.length && 2 === h2.length;
      const c = 32;
      o2.length > c && qt(o2);
      let _ = -1, d2 = -1;
      if (!u) for (let t3 = 0, n6 = o2.length; t3 < n6; t3++) {
        const s4 = o2[t3], n7 = this.m_sweepStructure.getPrev(s4);
        if (-1 !== n7 && -1 === o2.indexOf(n7)) if (-1 === _) _ = n7;
        else {
          if (e3 = true, !this.m_bNeedsNonSimpleResult) break;
          this.m_nonSimpleResult = new e(6, -1, -1);
        }
        const r2 = this.m_sweepStructure.getNext(s4);
        if (-1 !== r2 && -1 === o2.indexOf(r2)) if (-1 === d2) d2 = r2;
        else {
          if (e3 = true, !this.m_bNeedsNonSimpleResult) break;
          this.m_nonSimpleResult = new e(6, -1, -1);
        }
        if (-1 !== _ && -1 !== d2) break;
      }
      if (e3 && !this.m_bNeedsNonSimpleResult) break;
      if (this.m_sweepComparator.setSweepY(l2.y, l2.x), !u) {
        for (let e4 = 0, t3 = o2.length; e4 < t3; e4++) {
          const t4 = o2[e4];
          this.m_sweepStructure.deleteNode(t4);
        }
        o2.length = 0;
      }
      if (!u && -1 !== _ && -1 !== d2 && this.checkForIntersections_(_, d2)) {
        e3 = true, this.m_bNeedsNonSimpleResult && (this.m_nonSimpleResult = this.m_sweepComparator.getResult());
        break;
      }
      for (let t3 = 0, i3 = h2.length; t3 < i3; t3 += 2) {
        const s4 = h2[t3], i4 = h2[t3 + 1];
        let a2;
        if (u ? (a2 = this.m_sweepStructure.replaceElementAtPosition(o2[0], s4, true, true), o2.length = 0, u = false) : a2 = this.m_sweepStructure.addElement(s4), this.m_sweepComparator.intersectionDetected()) {
          this.m_bNeedsNonSimpleResult && (this.m_nonSimpleResult = this.m_sweepComparator.getResult()), e3 = true;
          break;
        }
        -1 === this.m_shape.getUserIndex(i4, n5) ? this.m_shape.setUserIndex(i4, n5, a2) : this.m_shape.setUserIndex(i4, r, a2);
      }
      if (e3) break;
      h2.length = 0;
    }
    return this.m_shape.removeUserIndex(n5), this.m_shape.removeUserIndex(r), e3;
  }
  checkForIntersections_(e3, t2) {
    const s2 = this.m_sweepStructure.getElement(e3);
    this.m_sweepComparator.compare(this.m_sweepStructure, s2, t2);
    const n5 = this.m_sweepComparator.intersectionDetected();
    return this.m_sweepComparator.clearIntersectionDetectedFlag(), n5;
  }
  getSegment_(e3, t2) {
    return _Bn.st_getSegment(this.m_shape, e3, t2);
  }
  static st_getSegment(e3, t2, s2) {
    return e3.querySegment(t2, s2, false, false) ? s2.get() : null;
  }
  dbgPrintSweepEdge(e3) {
  }
  dbgPrintSweepStructure() {
  }
  dbgSaveSweepStructure(e3 = null) {
  }
  dbgCheckSweepStructure() {
  }
  progress_(e3 = false) {
    this.m_progressCounter++;
  }
  crackAWithBMultiPath_(e3, t2, n5) {
    const r = n3.constructEmpty();
    e3.queryLooseEnvelope(r);
    const o2 = n3.constructEmpty();
    if (t2.queryLooseEnvelope(o2), o2.inflateCoords(n5, n5), !o2.isIntersecting(r)) return e3;
    const a2 = e3.getImpl(), h2 = a2.getAccelerators();
    let m2 = null, g = null;
    h2 && (g = h2.getQuadTree()), On(e3, w(t2)) && (m2 = Jt(a2, o2), g = m2);
    const u = g ? g.getIteratorForQT() : null, _ = t2.querySegmentIterator(), d2 = e3.querySegmentIterator(), p3 = Yt(15, Number.NaN), f3 = [];
    for (; _.nextPath(); ) for (; _.hasNextSegment(); ) {
      const e4 = _.nextSegment();
      if (g) {
        u.resetIterator(e4, n5);
        for (let t3 = u.next(); -1 !== t3; t3 = u.next()) {
          this.progress_();
          const s2 = g.getElement(t3);
          if (d2.resetToVertex(s2, -1), d2.hasNextSegment()) {
            const t4 = d2.nextSegment().intersect(e4, null, p3, null, n5);
            for (let e5 = 0; e5 < t4; e5++) {
              const t5 = p3[e5];
              if (0 === t5 || 1 === t5) continue;
              const s3 = qn(t5, d2.getStartPointIndex());
              f3.push(s3);
            }
          }
        }
      } else {
        const t3 = n3.constructEmpty();
        if (e4.queryLooseEnvelope(t3), t3.inflateCoords(n5, n5), !r.isIntersecting(t3)) continue;
        for (d2.resetToFirstPath(); d2.nextPath(); ) for (; d2.hasNextSegment(); ) {
          const r2 = d2.nextSegment(), i2 = n3.constructEmpty();
          if (r2.queryLooseEnvelope(i2), !i2.isIntersecting(t3)) continue;
          const o3 = r2.intersect(e4, null, p3, null, n5);
          for (let e5 = 0; e5 < o3; e5++) {
            const t4 = p3[e5];
            if (0 === t4 || 1 === t4) continue;
            const s2 = qn(t4, d2.getStartPointIndex());
            f3.push(s2);
          }
        }
      }
    }
    if (0 === f3.length) return e3;
    f3.sort((e4, t3) => e4.index < t3.index ? -1 : e4.index > t3.index ? 1 : e4.t < t3.t ? -1 : e4.t > t3.t ? 1 : 0);
    const x3 = e3.createInstance();
    if (x3.getGeometryType() === a.enumPolygon) {
      x3.setFillRule(e3.getFillRule());
    }
    for (d2.resetToFirstPath(); d2.nextPath() && !d2.hasNextSegment(); ) ;
    n(d2.hasNextSegment());
    let y2 = d2.nextSegment();
    const P3 = new Pm();
    let E2 = -1;
    for (let s2 = 0, i2 = f3.length; s2 < i2; ) {
      const e4 = f3[s2].index;
      let t3 = s2 + 1;
      for (; t3 < i2 && f3[t3].index === e4; ) ++t3;
      for (; d2.getStartPointIndex() < e4; ) {
        this.progress_();
        const e5 = d2.hasNextSegment(), t4 = d2.getPathIndex();
        if ((e5 || !d2.isClosingSegment() || d2.isCurve()) && (n(null !== y2), x3.addSegment(y2, E2 !== t4)), E2 = t4, !e5) {
          for (d2.isPathClosed(); d2.nextPath() && !d2.hasNextSegment(); ) ;
          n(d2.hasNextSegment());
        }
        y2 = d2.nextSegment();
      }
      let n6 = 0;
      for (let i3 = s2; i3 < t3; i3++) {
        const e5 = f3[i3].t;
        if (e5 === n6) continue;
        n(null !== y2), y2.queryCut(n6, e5, P3), n6 = e5;
        const t4 = d2.getPathIndex();
        x3.addSegment(P3.get(), E2 !== t4), E2 = t4;
      }
      const r2 = d2.hasNextSegment();
      if ((r2 || !d2.isClosingSegment() || d2.isCurve()) && (n(null != y2), y2.queryCut(n6, 1, P3), x3.addSegment(P3.get(), false)), r2) y2 = d2.nextSegment();
      else {
        for (; d2.nextPath() && !d2.hasNextSegment(); ) ;
        y2 = d2.hasNextSegment() ? d2.nextSegment() : null;
      }
      s2 = t3;
    }
    if (null !== y2) {
      const e4 = d2.getPathIndex();
      (d2.hasNextSegment() || !d2.isClosingSegment() || d2.isCurve()) && x3.addSegment(y2, E2 !== e4), E2 = e4;
    }
    let S2 = d2.hasNextSegment();
    for (; ; ) {
      if (!S2) {
        for (; d2.nextPath() && (S2 = d2.hasNextSegment(), !S2); ) ;
        if (!S2) break;
      }
      y2 = d2.nextSegment();
      const e4 = d2.getPathIndex();
      S2 = d2.hasNextSegment();
      (S2 || !d2.isClosingSegment() || d2.isCurve()) && x3.addSegment(y2, E2 !== e4), E2 = e4;
    }
    return x3;
  }
  constructor(e3) {
    this.m_shape = null, this.m_progressTracker = null, this.m_nonSimpleResult = new e(), this.m_tolerance = 0, this.m_sweepComparator = null, this.m_progressCounter = 0, this.m_bTrackChanges = false, this.m_bNeedsNonSimpleResult = false, this.m_bAllowCoincident = true, this.m_sweepStructure = new pt(), this.m_progressTracker = e3;
  }
};
function On(e3, t2) {
  const s2 = e3.getPointCount();
  if (s2 < 16) return false;
  const n5 = 1;
  return 2 * s2 + 1 * (Math.log(s2) / Math.log(2)) * t2 < n5 * s2 * t2;
}
Bn.s_bForceBruteForce = true;
var Yn = class {
  constructor(e3, t2) {
    this.m_monotoneParts = Ot(Pm, 16), this.m_xOrds = Yt(16, Number.NaN), this.m_inputPoint = mi.getNAN(), this.m_miny = 0, this.m_maxy = 0, this.m_windnum = 0, this.m_bAlternate = e3, this.m_tolerance = t2, this.m_toleranceSqr = t2 * t2, this.m_bTestBorder = t2 > 0, this.m_bBreak = false;
  }
  _DoOne(e3) {
    if (!this.m_bTestBorder && (this.m_bAlternate && this.m_inputPoint.equals(e3.getStartXY()) || this.m_inputPoint.equals(e3.getEndXY()))) return void (this.m_bBreak = true);
    if (e3.getStartY() === this.m_inputPoint.y && e3.getStartY() === e3.getEndY()) {
      if (this.m_bAlternate && !this.m_bTestBorder) {
        const t3 = Math.min(e3.getStartX(), e3.getEndX()), s3 = Math.max(e3.getStartX(), e3.getEndX());
        this.m_inputPoint.x > t3 && this.m_inputPoint.x < s3 && (this.m_bBreak = true);
      }
      return;
    }
    let t2 = false;
    const s2 = Math.max(e3.getStartX(), e3.getEndX());
    if (this.m_inputPoint.x > s2) t2 = true;
    else if (this.m_inputPoint.x >= Math.min(e3.getStartX(), e3.getEndX())) {
      const n5 = e3.intersectionOfYMonotonicWithAxisX(this.m_inputPoint.y, s2);
      t2 = !Number.isNaN(n5) && n5 <= this.m_inputPoint.x;
    }
    if (t2) {
      if (this.m_inputPoint.y === e3.getStartY()) {
        if (this.m_inputPoint.y < e3.getEndY()) return;
      } else if (this.m_inputPoint.y === e3.getEndY() && this.m_inputPoint.y < e3.getStartY()) return;
      this.m_bAlternate ? this.m_windnum ^= 1 : this.m_windnum += e3.getStartY() > e3.getEndY() ? 1 : -1;
    }
  }
  _Result() {
    return !!this.m_windnum;
  }
  testBorder(e3) {
    const t2 = e3.getClosestCoordinate(this.m_inputPoint, false), s2 = e3.getCoord2D(t2);
    return mi.sqrDistance(s2, this.m_inputPoint) <= this.m_toleranceSqr;
  }
  setInputPoint(e3) {
    this.m_inputPoint.setCoordsPoint2D(e3), this.m_miny = e3.y - this.m_tolerance, this.m_maxy = e3.y + this.m_tolerance;
  }
  processSegment(e3) {
    const t2 = e3.queryInterval(0, 1);
    if (t2.vmin > this.m_maxy || t2.vmax < this.m_miny) return false;
    if (this.m_bTestBorder && this.testBorder(e3)) return true;
    if (t2.vmin > this.m_inputPoint.y || t2.vmax < this.m_inputPoint.y) return false;
    let s2 = 0;
    if (e3.isCurve() && (0 === this.m_monotoneParts.length && (this.m_monotoneParts.length = 128), s2 = e3.getMonotonicParts(this.m_monotoneParts, true), n(this.m_monotoneParts.length >= s2)), s2 > 0) for (let n5 = 0; n5 < s2; n5++) {
      const e4 = this.m_monotoneParts[n5].get(), t3 = x.construct(e4.getStartY(), e4.getEndY());
      if (!(t3.vmin > this.m_inputPoint.y || t3.vmax < this.m_inputPoint.y) && (this._DoOne(e4), this.m_bBreak)) return true;
    }
    else if (this._DoOne(e3), this.m_bBreak) return true;
    return false;
  }
  result() {
    return n(0), 2;
  }
};
function Rn(e3, t2, n5, r) {
  const i2 = new n3();
  e3.queryLooseEnvelope(i2), i2.inflateCoords(r, r);
  const o2 = 0 === e3.getFillRule(), a2 = new Yn(o2, r);
  a2.setInputPoint(n5);
  const h2 = i2.clone();
  h2.xmax = n5.x + r, h2.ymin = n5.y - r, h2.ymax = n5.y + r;
  const m2 = e3.getImpl().querySegmentIterator(), l2 = t2.getIterator(h2, r);
  for (let s2 = l2.next(); -1 !== s2; s2 = l2.next()) if (m2.resetToVertex(t2.getElement(s2), -1), m2.hasNextSegment()) {
    const e4 = m2.nextSegment();
    if (a2.processSegment(e4)) return -1;
  }
  return a2._Result() ? 1 : 0;
}
function Xn(e3, t2, s2) {
  const n5 = 0 === e3.getFillRule(), r = new Yn(n5, s2);
  r.setInputPoint(t2);
  const i2 = e3.getImpl().querySegmentIterator();
  for (; i2.nextPath(); ) for (; i2.hasNextSegment(); ) {
    const e4 = i2.nextSegment();
    if (r.processSegment(e4)) return -1;
  }
  return r._Result() ? 1 : 0;
}
function Ln(e3, t2, s2) {
  return t2.isEmpty() ? 0 : zn(e3, t2.getXY(), s2);
}
function zn(e3, t2, n5) {
  if (e3.isEmpty()) return 0;
  const r = n3.constructEmpty();
  if (e3.queryLooseEnvelope(r), r.inflateCoords(n5, n5), !r.contains(t2)) return 0;
  const i2 = e3.getImpl().getAccelerators();
  if (i2) {
    i2.getRasterizedGeometry() && n(0);
    const s2 = i2.getQuadTree();
    if (s2) return Rn(e3, s2, t2, n5);
  }
  return Xn(e3, t2, n5);
}
function Wn(e3, t2) {
  const s2 = e3.getPointCount();
  if (s2 < 16) return false;
  const n5 = 1;
  return 2 * s2 + 1 * (Math.log(s2) / Math.log(2)) * t2 < n5 * s2 * t2;
}
function jn(e3, t2, s2, n5, r) {
  const i2 = new $n(r);
  return i2.m_shape = e3, i2.m_geometry = t2, i2.m_sortedVertices = s2, i2.m_bFixSelfTangency = n5, i2.fixRingOrientation_();
}
function Zn(e3, t2, s2) {
  const n5 = new $n(s2);
  return n5.m_shape = e3, n5.m_geometry = t2, n5.m_sortedVertices = null, n5.m_bFixSelfTangency = false, n5.fixRingOrientationForMp2sp_();
}
var Kn = class {
  getDirection_(e3) {
    return this.m_shape.getNextVertex(this.getEnd1(e3)) === this.getEnd2(e3);
  }
  getEnd_(e3) {
    const t2 = this.getEnd1(e3), s2 = this.getEnd2(e3);
    return this.m_shape.getNextVertex(t2) === s2 ? s2 : t2;
  }
  constructor(e3) {
    this.m_end1Nodes = [], this.m_end2Nodes = [], this.m_directions = [], this.m_shape = e3, this.m_firstFree = -1;
  }
  getSegment(e3) {
    return this.m_shape.getSegment(this.getStart(e3));
  }
  isBottomUp(e3) {
    let t2 = this.getEnd1(e3), s2 = this.getEnd2(e3);
    this.m_shape.getPrevVertex(t2) === s2 && (s2 = Pt(t2, t2 = s2));
    const n5 = mi.getNAN(), r = mi.getNAN();
    return this.m_shape.queryXY(t2, n5), this.m_shape.queryXY(s2, r), n(!n5.equals(r)), n5.y < r.y;
  }
  getStart(e3) {
    const t2 = this.getEnd1(e3), s2 = this.getEnd2(e3);
    return this.m_shape.getNextVertex(t2) === s2 ? t2 : s2;
  }
  getEnd1(e3) {
    return this.m_end1Nodes[e3];
  }
  getEnd2(e3) {
    return this.m_end2Nodes[e3];
  }
  freeEdge(e3) {
    this.m_end1Nodes[e3] = this.m_firstFree, this.m_firstFree = e3;
  }
  newEdge(e3) {
    if (-1 !== this.m_firstFree) {
      const t3 = this.m_firstFree;
      return this.m_firstFree = this.m_end1Nodes[t3], this.m_end1Nodes[t3] = e3, this.m_end2Nodes[t3] = this.m_shape.getNextVertex(e3), t3;
    }
    const t2 = this.m_end1Nodes.length;
    return this.m_end1Nodes.push(e3), this.m_end2Nodes.push(this.m_shape.getNextVertex(e3)), t2;
  }
  getShape() {
    return this.m_shape;
  }
  getPath(e3) {
    return this.m_shape.getPathFromVertex(this.getEnd1(e3));
  }
};
var Qn = class extends ct2 {
  constructor(e3) {
    super(), this.m_line1 = new fm(), this.m_line2 = new fm(), this.m_leftElm = -1, this.m_leftx = 0, this.m_seg1 = null, this.m_helper = e3;
  }
  compare(e3, t2, s2) {
    const n5 = e3.getElement(s2), r = this.m_helper.m_edges;
    let i2;
    if (this.m_leftElm === t2) i2 = this.m_leftx;
    else {
      if (this.m_seg1 = r.getSegment(t2), this.m_seg1) i2 = this.m_seg1.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0);
      else {
        r.getShape().queryLineConnector(r.getStart(t2), this.m_line1, true), this.m_seg1 = this.m_line1, i2 = this.m_line1.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0);
      }
      this.m_leftx = i2, this.m_leftElm = t2;
    }
    let o2, a2 = r.getSegment(n5);
    if (a2) o2 = a2.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0);
    else {
      r.getShape().queryLineConnector(r.getStart(n5), this.m_line2, true), a2 = this.m_line2, o2 = this.m_line2.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0);
    }
    if (i2 === o2) {
      const e4 = r.isBottomUp(t2), s3 = r.isBottomUp(n5), h2 = e4 ? this.m_seg1.getEndY() : this.m_seg1.getStartY(), m2 = s3 ? a2.getEndY() : a2.getStartY(), l2 = Math.min(h2, m2);
      let g = 0.5 * (l2 + this.m_helper.m_yScanline);
      g === this.m_helper.m_yScanline && (g = l2), i2 = this.m_seg1.intersectionOfYMonotonicWithAxisX(g, 0), o2 = a2.intersectionOfYMonotonicWithAxisX(g, 0), i2 === o2 && k("");
    }
    return i2 < o2 ? -1 : i2 > o2 ? 1 : 0;
  }
  reset() {
    this.m_leftElm = -1;
  }
};
var Jn = class {
  constructor(e3) {
    this.m_node = -1, this.m_index = 0, this.m_sortedVertices = e3.m_sortedVertices, this.m_sortedVerticesArray = e3.m_sortedVerticesArray, this.m_sortedVertices && (this.m_node = this.m_sortedVertices.getFirst(this.m_sortedVertices.getFirstList()));
  }
  next() {
    if (this.m_sortedVertices) {
      const e3 = this.m_node;
      if (-1 === e3) return gr;
      const t2 = this.m_sortedVertices.getData(e3);
      return this.m_node = this.m_sortedVertices.getNext(e3), t2;
    }
    if (this.m_index < this.m_sortedVerticesArray.size()) {
      const e3 = this.m_sortedVerticesArray.read(this.m_index);
      return this.m_index++, e3;
    }
    return gr;
  }
};
var $n = class {
  constructor(e3) {
    this.m_edges = null, this.m_shape = null, this.m_AET = new pt(), this.m_yScanline = 0, this.m_geometry = gr, this.m_unknownRingOrientationCount = -1, this.m_sortedVertices = null, this.m_sortedVerticesArray = null, this.m_unknownNodes = [], this.m_node1UserIndex = -1, this.m_node2UserIndex = -1, this.m_pathOrientationIndex = -1, this.m_pathParentageIndex = -1, this.m_pathParentsIndex = -1, this.m_progressCounter = 0, this.m_bFixSelfTangency = false, this.m_progressTracker = e3, this.m_AET.disableBalancing(), this.m_sweepComparator = new Qn(this), this.m_AET.setComparator(this.m_sweepComparator);
  }
  fixRingOrientation_() {
    const e3 = this.fixRingOrientationImplMain_();
    return -1 === this.m_pathOrientationIndex || this.fixRingOrientationImplSimplify_(), e3;
  }
  fixRingOrientationForMp2sp_() {
    return this.fixRingOrientationImplMain_(), -1 === this.m_pathOrientationIndex ? -1 : this.fixRingOrientationImplMp2sp_();
  }
  processBunchForRingOrientationTest_(e3) {
    return this.processBunchForRingOrientationTestOddEven_(e3);
  }
  processBunchForRingOrientationTestOddEven_(e3) {
    let t2 = false;
    if (this.m_edges || (this.m_edges = new Kn(this.m_shape)), this.m_unknownNodes.length = 0, this.processBunchForRingOrientationRemoveEdges_(e3), !this.m_AET.isAutoBalancing()) {
      let t3 = 0;
      for (let s2 = 0, n5 = e3.length; s2 < n5; s2++) {
        -1 !== e3[s2] && t3++;
      }
      (t3 > 10 || this.m_AET.getMaxDepthEver() > 4) && this.m_AET.enableBalancing();
    }
    for (let s2 = 0, n5 = e3.length; s2 < n5; s2++) {
      const t3 = e3[s2];
      t3 !== gr && this.insertEdge_(t3, -1);
    }
    for (let s2 = 0; s2 < this.m_unknownNodes.length && this.m_unknownRingOrientationCount > 0; s2++) {
      const e4 = this.m_unknownNodes[s2], n5 = this.m_AET.getElement(e4), r = this.m_edges.getPath(n5), i2 = this.m_shape.getPathUserIndex(r, this.m_pathOrientationIndex);
      let o2 = gr;
      if (0 === i2) {
        let s3 = this.m_AET.getPrev(e4), n6 = e4, r2 = false;
        for (; s3 !== pt.st_nullNode(); ) {
          const e5 = this.m_AET.getElement(s3), t3 = this.m_edges.getPath(e5);
          if (0 !== this.m_shape.getPathUserIndex(t3, this.m_pathOrientationIndex)) {
            o2 = t3;
            break;
          }
          n6 = s3, s3 = this.m_AET.getPrev(s3);
        }
        if (s3 === pt.st_nullNode()) r2 = true, s3 = n6;
        else {
          const e5 = this.m_AET.getElement(s3);
          r2 = this.m_edges.isBottomUp(e5), s3 = this.m_AET.getNext(s3), r2 = !r2;
        }
        do {
          const e5 = this.m_AET.getElement(s3), i3 = this.m_edges.getPath(e5);
          if (0 === this.m_shape.getPathUserIndex(i3, this.m_pathOrientationIndex)) {
            if (r2 !== this.m_edges.isBottomUp(e5)) {
              const e6 = this.m_shape.getFirstVertex(i3);
              this.m_shape.reverseRingInternal(e6), this.m_shape.setLastVertex(i3, this.m_shape.getPrevVertex(e6)), t2 = true;
            }
            if (this.m_shape.setPathUserIndex(i3, this.m_pathOrientationIndex, r2 ? 3 : 2), !r2) {
              let e6 = this.m_shape.getPathUserIndex(o2, this.m_pathOrientationIndex);
              2 === e6 ? (o2 = this.m_shape.getPathUserIndex(o2, this.m_pathParentsIndex), e6 = this.m_shape.getPathUserIndex(o2, this.m_pathOrientationIndex), n(3 === e6)) : n(3 === e6);
              const t3 = this.m_shape.getPathUserIndex(o2, this.m_pathParentageIndex);
              this.m_shape.setPathUserIndex(o2, this.m_pathParentageIndex, i3), this.m_shape.setPathUserIndex(i3, this.m_pathParentageIndex, t3), this.m_shape.setPathUserIndex(i3, this.m_pathParentsIndex, o2);
            }
            if (this.m_unknownRingOrientationCount--, !this.m_unknownRingOrientationCount) return t2;
          }
          o2 = i3, n6 = s3, s3 = this.m_AET.getNext(s3), r2 = !r2;
        } while (n6 !== e4);
      }
    }
    return t2;
  }
  processBunchForRingOrientationRemoveEdges_(e3) {
    for (let t2 = 0, s2 = e3.length; t2 < s2; t2++) {
      const s3 = e3[t2], n5 = this.m_shape.getUserIndex(s3, this.m_node1UserIndex), r = this.m_shape.getUserIndex(s3, this.m_node2UserIndex);
      if (-1 !== n5) {
        const e4 = this.m_AET.getElement(n5);
        this.m_edges.freeEdge(e4), this.m_shape.setUserIndex(s3, this.m_node1UserIndex, -1);
      }
      if (-1 !== r) {
        const e4 = this.m_AET.getElement(r);
        this.m_edges.freeEdge(e4), this.m_shape.setUserIndex(s3, this.m_node2UserIndex, -1);
      }
      let i2 = -1;
      -1 !== n5 && -1 !== r ? (this.m_AET.deleteNode(n5), this.m_AET.deleteNode(r), e3[t2] = gr) : i2 = -1 !== n5 ? n5 : r, -1 !== i2 && (this.insertEdge_(s3, i2) || this.m_AET.deleteNode(i2), e3[t2] = gr);
    }
  }
  dbgVerifyRingOrientation_() {
  }
  insertEdge_(e3, t2) {
    const s2 = mi.getNAN(), n5 = mi.getNAN();
    this.m_shape.queryXY(e3, s2);
    const r = this.m_shape.getNextVertex(e3);
    this.m_shape.queryXY(r, n5);
    let i2 = false;
    if (s2.y < n5.y) {
      i2 = true;
      const s3 = this.m_edges.newEdge(e3);
      let n6;
      -1 === t2 ? n6 = this.m_AET.addElement(s3) : (n6 = t2, this.m_AET.setElement(n6, s3));
      -1 === this.m_shape.getUserIndex(r, this.m_node1UserIndex) ? this.m_shape.setUserIndex(r, this.m_node1UserIndex, n6) : this.m_shape.setUserIndex(r, this.m_node2UserIndex, n6);
      const o3 = this.m_shape.getPathFromVertex(e3);
      0 === this.m_shape.getPathUserIndex(o3, this.m_pathOrientationIndex) && this.m_unknownNodes.push(n6);
    }
    const o2 = this.m_shape.getPrevVertex(e3);
    if (this.m_shape.queryXY(o2, n5), s2.y < n5.y) {
      i2 = true;
      const s3 = this.m_edges.newEdge(o2);
      let n6;
      -1 === t2 ? n6 = this.m_AET.addElement(s3) : (n6 = t2, this.m_AET.setElement(n6, s3));
      -1 === this.m_shape.getUserIndex(o2, this.m_node1UserIndex) ? this.m_shape.setUserIndex(o2, this.m_node1UserIndex, n6) : this.m_shape.setUserIndex(o2, this.m_node2UserIndex, n6);
      const r2 = this.m_shape.getPathFromVertex(e3);
      0 === this.m_shape.getPathUserIndex(r2, this.m_pathOrientationIndex) && this.m_unknownNodes.push(n6);
    }
    return i2;
  }
  fixRingSelfTangency_() {
    const e3 = [], t2 = [];
    let s2 = -1, n5 = -1;
    const r = new mi();
    let i2 = gr, o2 = gr, a2 = -1;
    const h2 = new Jn(this);
    for (let m2 = h2.next(); m2 !== gr; m2 = h2.next()) {
      const h3 = new mi();
      this.m_shape.queryXY(m2, h3);
      const l2 = this.m_shape.getPathFromVertex(m2);
      if (r.equals(h3) && o2 === l2) {
        if (-1 === n5 && (s2 = this.m_shape.createPathUserIndex(), this.m_shape.fillPathUserIndexForGeometry(this.m_geometry, s2, -1), n5 = this.m_shape.createUserIndex(), this.m_shape.fillUserIndexForGeometry(this.m_geometry, n5, -1)), -1 === a2) {
          a2 = t2.length, this.m_shape.setUserIndex(i2, n5, a2), t2.push(1);
          -1 === this.m_shape.getPathUserIndex(l2, s2) && (this.m_shape.setPathUserIndex(l2, s2, i2), e3.push(l2));
        }
        this.m_shape.setUserIndex(m2, n5, a2), t2[t2.length - 1]++;
      } else a2 = -1, r.assign(h3);
      i2 = m2, o2 = l2;
    }
    if (0 === e3.length) return false;
    n(-1 !== s2);
    for (let m2 = 0, l2 = e3.length; m2 < l2; m2++) {
      const r2 = e3[m2];
      let i3 = this.m_shape.getPathUserIndex(r2, s2);
      const o3 = this.m_shape.getUserIndex(i3, n5), a3 = [], h3 = [];
      a3.push(i3), h3.push(o3);
      for (let e4 = this.m_shape.getNextVertex(i3); e4 !== i3; e4 = this.m_shape.getNextVertex(e4)) {
        const s3 = e4, r3 = this.m_shape.getUserIndex(s3, n5);
        if (-1 !== r3) {
          if (0 === h3.length) {
            h3.push(r3), a3.push(s3);
            continue;
          }
          if (h3.at(-1) === r3) {
            const o4 = a3.at(-1);
            this.m_shape.peelALoopIntoAPath(o4, s3), this.m_shape.setUserIndex(e4, n5, -1), t2[r3]--, 1 === t2[r3] && (t2[r3] = 0, h3.pop(), a3.pop()), i3 = o4, e4 = o4;
          } else a3.push(e4), h3.push(r3);
        }
      }
    }
    return this.m_shape.removePathUserIndex(s2), this.m_shape.removeUserIndex(n5), this.m_shape.dbgVerifyVertexCounts(), true;
  }
  progress_(e3 = false) {
  }
  fixRingOrientationImplMain_() {
    const s2 = { stack: [], error: void 0, hasError: false };
    try {
      let t2, n5 = false;
      const r = __addDisposableResource(s2, kt(() => {
        this.m_sortedVerticesArray = null;
      }), false);
      if (null === this.m_sortedVertices) {
        const e3 = this.m_shape.getPointCount(this.m_geometry);
        t2 = new st(0);
        for (let s3 = this.m_shape.getFirstPath(this.m_geometry); s3 !== gr; s3 = this.m_shape.getNextPath(s3)) {
          let e4 = this.m_shape.getFirstVertex(s3);
          for (let n6 = 0, r2 = this.m_shape.getPathSize(s3); n6 < r2; n6++) t2.add(e4), e4 = this.m_shape.getNextVertex(e4);
        }
        this.m_shape.sortVerticesSimpleByY(t2, 0, e3), this.progress_(true), this.m_sortedVerticesArray = t2;
      } else r.bForget = true;
      if (this.m_bFixSelfTangency && (n5 = this.fixRingSelfTangency_()), 1 === this.m_shape.getPathCount(this.m_geometry)) {
        const e3 = this.m_shape.getFirstPath(this.m_geometry), t3 = this.m_shape.getRingArea(e3);
        if (this.m_shape.setExterior(e3, true), t3 < 0) {
          const t4 = this.m_shape.getFirstVertex(e3);
          return this.m_shape.reverseRingInternal(t4), this.m_shape.setLastVertex(e3, this.m_shape.getPrevVertex(t4)), true;
        }
        return false;
      }
      this.m_shape.dbgVerifyCurves(), this.m_pathOrientationIndex = this.m_shape.createPathUserIndex(), this.m_pathParentageIndex = this.m_shape.createPathUserIndex(), this.m_pathParentsIndex = this.m_shape.createPathUserIndex();
      for (let e3 = this.m_shape.getFirstPath(this.m_geometry); e3 !== gr; e3 = this.m_shape.getNextPath(e3)) this.m_shape.setPathUserIndex(e3, this.m_pathOrientationIndex, 0), this.m_shape.setPathUserIndex(e3, this.m_pathParentageIndex, -1), this.m_shape.setPathUserIndex(e3, this.m_pathParentsIndex, -1);
      const i2 = [];
      this.m_yScanline = Number.NaN;
      const o2 = mi.getNAN();
      this.m_unknownRingOrientationCount = this.m_shape.getPathCount(this.m_geometry), this.m_node1UserIndex = this.m_shape.createUserIndexUninitialized(), this.m_shape.fillUserIndexForGeometry(this.m_geometry, this.m_node1UserIndex, -1), this.m_node2UserIndex = this.m_shape.createUserIndexUninitialized(), this.m_shape.fillUserIndexForGeometry(this.m_geometry, this.m_node2UserIndex, -1);
      const a2 = new Jn(this);
      for (let e3 = a2.next(); e3 !== gr && (this.progress_(), this.m_shape.queryXY(e3, o2), o2.y !== this.m_yScanline && i2.length && (n5 = this.processBunchForRingOrientationTest_(i2) || n5, this.m_sweepComparator.reset(), i2.length = 0), i2.push(e3), this.m_yScanline = o2.y, 0 !== this.m_unknownRingOrientationCount); e3 = a2.next()) ;
      return this.m_unknownRingOrientationCount > 0 && (n5 = this.processBunchForRingOrientationTest_(i2) || n5, i2.length = 0), this.m_shape.removeUserIndex(this.m_node1UserIndex), this.m_shape.removeUserIndex(this.m_node2UserIndex), this.dbgVerifyRingOrientation_(), n5;
    } catch (n5) {
      s2.error = n5, s2.hasError = true;
    } finally {
      __disposeResources(s2);
    }
  }
  fixRingOrientationImplSimplify_() {
    const e3 = [];
    for (let t2 = this.m_shape.getFirstPath(this.m_geometry); t2 !== gr; ) if (this.progress_(), 3 === this.m_shape.getPathUserIndex(t2, this.m_pathOrientationIndex)) {
      this.m_shape.setExterior(t2, true);
      for (let r = this.m_shape.getPathUserIndex(t2, this.m_pathParentageIndex); r !== gr; ) {
        const s3 = this.m_shape.getPathUserIndex(r, this.m_pathParentageIndex);
        e3.push(r), this.m_shape.setExterior(r, false), this.m_shape.setPathUserIndex(r, this.m_pathParentageIndex, t2), r = s3;
      }
      let s2 = t2, n5 = e3.length;
      for (let e4 = this.m_shape.getNextPath(t2); n5 > 0 && e4 !== gr; e4 = this.m_shape.getNextPath(e4), --n5) {
        if (this.m_shape.getPathUserIndex(e4, this.m_pathParentageIndex) !== t2) {
          s2 = gr;
          break;
        }
        s2 = e4;
      }
      if (0 !== n5) {
        s2 = t2;
        for (let t3 = 0, n6 = e3.length; t3 < n6; t3++) {
          const n7 = e3[t3];
          this.m_shape.setPathUserIndex(n7, this.m_pathParentageIndex, U2), this.m_shape.movePath(this.m_geometry, this.m_shape.getNextPath(s2), n7), s2 = n7;
        }
      }
      e3.length = 0, t2 = this.m_shape.getNextPath(s2);
    } else t2 = this.m_shape.getNextPath(t2);
    this.m_shape.removePathUserIndex(this.m_pathOrientationIndex), this.m_shape.removePathUserIndex(this.m_pathParentageIndex), this.m_shape.removePathUserIndex(this.m_pathParentsIndex);
  }
  fixRingOrientationImplMp2sp_() {
    const e3 = this.m_shape.createPathUserIndex();
    let t2 = 0;
    const s2 = [];
    for (let n5 = this.m_shape.getFirstPath(this.m_geometry); n5 !== gr; ) if (this.progress_(), 3 === this.m_shape.getPathUserIndex(n5, this.m_pathOrientationIndex)) {
      this.m_shape.setExterior(n5, true), this.m_shape.setPathUserIndex(n5, e3, t2), t2++;
      for (let e4 = this.m_shape.getPathUserIndex(n5, this.m_pathParentageIndex); e4 !== gr; ) {
        const t3 = this.m_shape.getPathUserIndex(e4, this.m_pathParentageIndex);
        s2.push(e4), this.m_shape.setExterior(e4, false), this.m_shape.setPathUserIndex(e4, this.m_pathParentageIndex, n5), e4 = t3;
      }
      let r = n5, i2 = s2.length, o2 = t2;
      for (let t3 = this.m_shape.getNextPath(n5); i2 > 0 && t3 !== gr; t3 = this.m_shape.getNextPath(t3), --i2) {
        if (this.m_shape.getPathUserIndex(t3, this.m_pathParentageIndex) !== n5) {
          r = gr;
          break;
        }
        r = t3, this.m_shape.setPathUserIndex(t3, e3, -o2), o2++;
      }
      if (0 !== i2) {
        r = n5, o2 = t2;
        for (let t3 = 0, n6 = s2.length; t3 < n6; t3++) {
          const n7 = s2[t3];
          this.m_shape.setPathUserIndex(n7, e3, -o2), o2++, this.m_shape.setPathUserIndex(n7, this.m_pathParentageIndex, U2);
        }
        r = n5;
      }
      t2 = o2, s2.length = 0, n5 = this.m_shape.getNextPath(r);
    } else n5 = this.m_shape.getNextPath(n5);
    return this.m_shape.removePathUserIndex(this.m_pathOrientationIndex), this.m_shape.removePathUserIndex(this.m_pathParentageIndex), this.m_shape.removePathUserIndex(this.m_pathParentsIndex), e3;
  }
};
function er(e3, t2, s2, n5, r, i2) {
  const o2 = new tr(i2);
  return o2.m_shape = e3, o2.m_geometry = t2, o2.m_knownSimpleResult = s2, o2.m_bFixSelfTangency = n5, o2.m_polylineDegeneracies = r, o2.m_bHasSegmentParentage = e3.hasSegmentParentage(), o2.m_bHasSegments = e3.hasCurves(), o2.simplify_();
}
var tr = class {
  constructor(e3) {
    this.m_shape = null, this.m_geometry = gr, this.m_sortedVertices = new gt(), this.m_bunchEdgeEndPoints = [], this.m_bunchEdgeCenterPoints = [], this.m_bunchEdgeIndices = [], this.m_sorterSegmentBuffer1 = null, this.m_sorterSegmentBuffer2 = null, this.m_knownSimpleResult = -1, this.m_sortedVerticesListIndex = -1, this.m_polylineDegeneracies = gr, this.m_userIndexSortedIndexToVertex = -1, this.m_userIndexSortedAngleIndexToVertex = -1, this.m_nextVertexToProcess = -1, this.m_firstCoincidentVertex = -1, this.m_progressCounter = 0, this.m_bFixSelfTangency = false, this.m_bHasSegmentParentage = false, this.m_bHasSegments = false, this.m_progressTracker = e3;
  }
  compareAngles_(e3, t2) {
    return this.m_bHasSegments ? this.compareAnglesCurves_(e3, t2) : this.compareAnglesLines_(e3, t2);
  }
  compareAnglesLines_(e3, t2) {
    const s2 = this.m_bunchEdgeEndPoints[e3], n5 = new mi();
    this.m_shape.queryXY(s2, n5);
    const r = new mi(), i2 = this.m_bunchEdgeEndPoints[t2];
    if (this.m_shape.queryXY(i2, r), n5.equals(r)) return 0;
    const o2 = this.m_bunchEdgeCenterPoints[e3], a2 = new mi();
    this.m_shape.queryXY(o2, a2);
    const h2 = this.m_bunchEdgeCenterPoints[t2], m2 = new mi();
    this.m_shape.queryXY(h2, m2);
    const l2 = new mi();
    l2.setSub(n5, a2);
    const g = new mi();
    g.setSub(r, m2), (l2.isZero() || g.isZero()) && k("");
    return mi.compareVectors(l2, g);
  }
  compareAnglesCurves_(e3, t2) {
    const s2 = this.m_bunchEdgeEndPoints[e3], n5 = this.m_bunchEdgeEndPoints[t2], r = this.m_bunchEdgeCenterPoints[e3], i2 = this.m_bunchEdgeCenterPoints[t2], o2 = this.m_shape.getNextVertex(r) === s2, a2 = this.m_shape.getNextVertex(i2) === n5, h2 = o2 ? this.m_shape.isCurve(r) : this.m_shape.isCurve(s2), m2 = a2 ? this.m_shape.isCurve(i2) : this.m_shape.isCurve(n5);
    if (!h2 && !m2) return this.compareAnglesLines_(e3, t2);
    this.m_sorterSegmentBuffer1 || (this.m_sorterSegmentBuffer1 = new Pm()), this.m_sorterSegmentBuffer2 || (this.m_sorterSegmentBuffer2 = new Pm()), o2 ? this.m_shape.querySegment(r, this.m_sorterSegmentBuffer1, false, true) : (this.m_shape.querySegment(s2, this.m_sorterSegmentBuffer1, false, true), this.m_sorterSegmentBuffer1.get().reverse()), a2 ? this.m_shape.querySegment(i2, this.m_sorterSegmentBuffer2, false, true) : (this.m_shape.querySegment(n5, this.m_sorterSegmentBuffer2, false, true), this.m_sorterSegmentBuffer2.get().reverse());
    return Be(this.m_sorterSegmentBuffer1.get(), this.m_sorterSegmentBuffer2.get());
  }
  beforeRemoveVertex_(e3, t2) {
    const s2 = this.m_shape.getUserIndex(e3, this.m_userIndexSortedIndexToVertex);
    if (this.m_nextVertexToProcess === s2 && (this.m_nextVertexToProcess = this.m_sortedVertices.getNext(this.m_nextVertexToProcess)), this.m_firstCoincidentVertex === s2 && (this.m_firstCoincidentVertex = this.m_sortedVertices.getNext(this.m_firstCoincidentVertex)), this.m_sortedVertices.deleteElement(this.m_sortedVerticesListIndex, s2), this.removeAngleSortInfo_(e3), t2) {
      const t3 = this.m_shape.getPathFromVertex(e3);
      if (t3 !== gr) {
        if (this.m_shape.getFirstVertex(t3) === e3) {
          const s3 = this.m_shape.getNextVertex(e3);
          if (s3 !== e3) {
            if (this.m_shape.getPathFromVertex(s3) === t3) return void this.m_shape.setFirstVertex(t3, s3);
            {
              const s4 = this.m_shape.getPrevVertex(e3);
              if (s4 !== e3) {
                if (this.m_shape.getPathFromVertex(s4) === t3) return void this.m_shape.setFirstVertex(t3, s4);
              }
            }
          }
          this.m_shape.setFirstVertex(t3, gr), this.m_shape.setLastVertex(t3, gr);
        }
      }
    }
  }
  processBunch_() {
    let e3 = false;
    const t2 = new mi(0, 0);
    for (; ; ) {
      this.m_bunchEdgeEndPoints.length = 0, this.m_bunchEdgeCenterPoints.length = 0, this.m_bunchEdgeIndices.length = 0;
      let s2 = this.m_firstCoincidentVertex, n5 = 0, r = true;
      for (; s2 !== this.m_nextVertexToProcess; ) {
        const e4 = this.m_sortedVertices.getData(s2);
        r && (this.m_shape.queryXY(e4, t2), r = false);
        const i3 = this.m_shape.getPrevVertex(e4), o2 = this.m_shape.getNextVertex(e4);
        this.m_shape.getUserIndex(i3, this.m_userIndexSortedAngleIndexToVertex) !== U2 && (this.m_bunchEdgeEndPoints.push(i3), this.m_shape.setUserIndex(i3, this.m_userIndexSortedAngleIndexToVertex, U2), this.m_bunchEdgeCenterPoints.push(e4), this.m_bunchEdgeIndices.push(n5++));
        this.m_shape.getUserIndex(o2, this.m_userIndexSortedAngleIndexToVertex) !== U2 && (this.m_bunchEdgeEndPoints.push(o2), this.m_shape.setUserIndex(o2, this.m_userIndexSortedAngleIndexToVertex, U2), this.m_bunchEdgeCenterPoints.push(e4), this.m_bunchEdgeIndices.push(n5++)), s2 = this.m_sortedVertices.getNext(s2);
      }
      if (this.m_bunchEdgeEndPoints.length < 2) {
        1 === this.m_bunchEdgeEndPoints.length && this.m_shape.setUserIndex(this.m_bunchEdgeEndPoints[0], this.m_userIndexSortedAngleIndexToVertex, -1);
        break;
      }
      this.m_bunchEdgeIndices.sort((e4, t3) => this.compareAngles_(e4, t3));
      for (let e4 = 0, t3 = this.m_bunchEdgeIndices.length; e4 < t3; e4++) {
        const t4 = this.m_bunchEdgeIndices[e4], s3 = this.m_bunchEdgeEndPoints[t4];
        this.m_shape.setUserIndex(s3, this.m_userIndexSortedAngleIndexToVertex, e4);
      }
      const i2 = this.processCrossOvers_(t2);
      for (let e4 = 0, t3 = this.m_bunchEdgeIndices.length; e4 < t3; e4++) {
        const t4 = this.m_bunchEdgeIndices[e4];
        if (-1 === t4) continue;
        const s3 = this.m_bunchEdgeEndPoints[t4];
        this.m_shape.setUserIndex(s3, this.m_userIndexSortedAngleIndexToVertex, -1);
      }
      if (!i2) break;
      e3 = true;
    }
    return e3;
  }
  processCrossOvers_(e3) {
    let t2 = false, s2 = true;
    for (; s2; ) {
      s2 = false;
      let n5 = 0;
      -1 === this.m_bunchEdgeIndices[n5] && (n5 = this.getNextEdgeIndex_(n5));
      let r = this.getNextEdgeIndex_(n5);
      for (let i2 = 0, o2 = this.m_bunchEdgeIndices.length; i2 < o2 && -1 !== n5 && -1 !== r && n5 !== r; i2++) {
        const i3 = this.m_bunchEdgeIndices[n5], o3 = this.m_bunchEdgeIndices[r], a2 = this.m_bunchEdgeEndPoints[i3], h2 = this.m_bunchEdgeEndPoints[o3];
        let m2 = this.m_shape.getNextVertex(a2), l2 = false;
        this.m_shape.isEqualXYPoint2D(m2, e3) || (m2 = this.m_shape.getPrevVertex(a2), l2 = true);
        let g = this.m_shape.getNextVertex(h2), u = false;
        this.m_shape.isEqualXYPoint2D(g, e3) || (g = this.m_shape.getPrevVertex(h2), u = true);
        const c = l2 ? this.m_shape.getPrevVertex(m2) : this.m_shape.getNextVertex(m2), _ = u ? this.m_shape.getPrevVertex(g) : this.m_shape.getNextVertex(g);
        let d2 = false;
        (this.removeSpike_(m2) || this.removeSpike_(g) || this.removeSpike_(a2) || this.removeSpike_(h2) || this.removeSpike_(c) || this.removeSpike_(_)) && (d2 = true), m2 !== g && (!d2 && this.m_shape.isEqualXY(a2, h2) && (d2 = this.resolveOverlap_(l2, u, m2, a2, g, h2)), !d2 && this.m_shape.isEqualXY(c, _) && (d2 = this.resolveOverlap_(!l2, !u, m2, c, g, _)), !d2 && this.m_shape.isEqualXY(a2, _) && (d2 = this.resolveOverlap_(l2, !u, m2, a2, g, _)), !d2 && this.m_shape.isEqualXY(c, h2) && (d2 = this.resolveOverlap_(!l2, u, m2, c, g, h2))), d2 && (t2 = true), s2 ||= d2, n5 = d2 ? this.getNextEdgeIndex_(n5) : r, r = this.getNextEdgeIndex_(n5);
      }
    }
    if (!t2) {
      let s3 = 0;
      -1 === this.m_bunchEdgeIndices[s3] && (s3 = this.getNextEdgeIndex_(s3));
      let n5 = this.getNextEdgeIndex_(s3);
      for (let r = 0, i2 = this.m_bunchEdgeIndices.length; r < i2 && -1 !== s3 && -1 !== n5 && s3 !== n5; r++) {
        const r2 = this.m_bunchEdgeIndices[s3], i3 = this.m_bunchEdgeIndices[n5], o2 = this.m_bunchEdgeEndPoints[r2], a2 = this.m_bunchEdgeEndPoints[i3];
        let h2 = this.m_shape.getNextVertex(o2);
        this.m_shape.isEqualXYPoint2D(h2, e3) || (h2 = this.m_shape.getPrevVertex(o2));
        let m2 = this.m_shape.getNextVertex(a2);
        this.m_shape.isEqualXYPoint2D(m2, e3) || (m2 = this.m_shape.getPrevVertex(a2));
        const l2 = this.getDirection_(h2, o2), g = this.getDirection_(m2, a2), u = l2 ? this.m_shape.getPrevVertex(h2) : this.m_shape.getNextVertex(h2), c = g ? this.m_shape.getPrevVertex(m2) : this.m_shape.getNextVertex(m2), _ = this.detectAndResolveCrossOver_(l2, g, o2, h2, u, a2, m2, c);
        1 !== _ ? 0 === _ ? (s3 = this.getNextEdgeIndex_(s3), n5 = this.getNextEdgeIndex_(s3)) : (s3 = this.getPrevEdgeIndex_(s3), n5 = this.getNextEdgeIndex_(s3)) : t2 = true;
      }
    }
    return t2;
  }
  simplify_() {
    if (this.m_shape.getGeometryType(this.m_geometry) === a.enumPolygon && 1 === this.m_shape.getFillRule(this.m_geometry)) {
      new Ka(this.m_progressTracker).planarSimplifyNoCrackingAndCluster(this.m_bFixSelfTangency, this.m_shape, this.m_geometry, 0);
    }
    let e3 = false;
    this.m_userIndexSortedIndexToVertex = -1, this.m_userIndexSortedAngleIndexToVertex = -1, this.m_userIndexSortedAngleIndexToVertex = this.m_shape.createUserIndexUninitialized();
    const t2 = this.m_shape.getPointCount(this.m_geometry), s2 = new st(0);
    this.m_shape.dbgVerifyMonotone();
    for (let i2 = this.m_shape.getFirstPath(this.m_geometry); i2 !== gr; i2 = this.m_shape.getNextPath(i2)) {
      let e4 = this.m_shape.getFirstVertex(i2);
      for (let t3 = 0, n6 = this.m_shape.getPathSize(i2); t3 < n6; t3++) this.m_shape.setUserIndex(e4, this.m_userIndexSortedAngleIndexToVertex, -1), s2.add(e4), e4 = this.m_shape.getNextVertex(e4);
    }
    this.m_shape.sortVerticesSimpleByY(s2, 0, t2), this.progress_(true), this.m_userIndexSortedIndexToVertex = this.m_shape.createUserIndexUninitialized(), this.m_sortedVertices.reserveNodes(t2), this.m_sortedVerticesListIndex = this.m_sortedVertices.createList(0);
    for (let i2 = 0; i2 < t2; i2++) {
      const e4 = s2.read(i2), t3 = this.m_sortedVertices.addElement(this.m_sortedVerticesListIndex, e4);
      this.m_shape.setUserIndex(e4, this.m_userIndexSortedIndexToVertex, t3);
    }
    this.m_nextVertexToProcess = -1, this.cleanupSpikes_() && (e3 = true);
    let n5 = 0, r = false;
    do {
      r = false, this.m_nextVertexToProcess = -1, this.m_firstCoincidentVertex = this.m_sortedVertices.getFirst(this.m_sortedVerticesListIndex);
      const t3 = new mi(0, 0);
      this.m_firstCoincidentVertex !== gt.st_nullNode() && this.m_shape.queryXY(this.m_sortedVertices.getData(this.m_firstCoincidentVertex), t3);
      let s3 = 0, i2 = this.m_firstCoincidentVertex;
      for (; i2 !== gt.st_nullNode() && (i2 = this.m_sortedVertices.getNext(i2), i2 !== gt.st_nullNode()); ) {
        this.progress_();
        const e4 = this.m_sortedVertices.getData(i2), n6 = mi.getNAN();
        if (this.m_shape.queryXY(e4, n6), t3.equals(n6)) s3++;
        else {
          if (s3 > 0) {
            this.m_nextVertexToProcess = i2;
            const e5 = this.processBunch_();
            i2 = this.m_nextVertexToProcess, i2 !== gt.st_nullNode() && this.m_shape.queryXY(this.m_sortedVertices.getData(i2), n6), e5 && (r = true);
          }
          t3.setCoordsPoint2D(n6), this.m_firstCoincidentVertex = i2, s3 = 0;
        }
      }
      if (this.m_nextVertexToProcess = -1, s3 > 0) {
        this.processBunch_() && (r = true);
      }
      n5++ > 10 && b(""), r && this.fixOrphanVertices_(), this.cleanupSpikes_() && (r = true), e3 ||= r;
    } while (r);
    return this.m_shape.dbgVerifyMonotone(), this.m_shape.dbgVerifyCurves(), this.m_shape.removeUserIndex(this.m_userIndexSortedIndexToVertex), this.m_shape.removeUserIndex(this.m_userIndexSortedAngleIndexToVertex), e3 = jn(this.m_shape, this.m_geometry, this.m_sortedVertices, this.m_bFixSelfTangency, this.m_progressTracker) || e3, this.m_shape.dbgVerifyCurves(), e3;
  }
  getDirection_(e3, t2) {
    return this.m_shape.getNextVertex(t2) !== e3;
  }
  detectAndResolveCrossOver_(e3, t2, s2, n5, r, i2, o2, a2) {
    if (n5 === o2) return this.removeAngleSortInfo_(s2), this.removeAngleSortInfo_(i2), -1;
    const h2 = this.m_shape.getUserIndex(s2, this.m_userIndexSortedAngleIndexToVertex), m2 = this.m_shape.getUserIndex(r, this.m_userIndexSortedAngleIndexToVertex), l2 = this.m_shape.getUserIndex(i2, this.m_userIndexSortedAngleIndexToVertex), g = this.m_shape.getUserIndex(a2, this.m_userIndexSortedAngleIndexToVertex), u = Yt(8, Number.NaN), c = Yt(4, Number.NaN);
    u[0] = 0, c[0] = h2, u[1] = 0, c[1] = m2, u[2] = 1, c[2] = l2, u[3] = 1, c[3] = g;
    for (let d2 = 1; d2 < 4; d2++) {
      const e4 = c[d2], t3 = u[d2];
      let s3 = d2 - 1;
      for (; s3 >= 0 && c[s3] > e4; ) c[s3 + 1] = c[s3], u[s3 + 1] = u[s3], s3--;
      c[s3 + 1] = e4, u[s3 + 1] = t3;
    }
    let _ = 0;
    if (u[0] && (_ |= 1), u[1] && (_ |= 2), u[2] && (_ |= 4), u[3] && (_ |= 8), 5 !== _ && 10 !== _) return 0;
    if (e3 !== t2 && (a2 = Pt(i2, i2 = a2)), e3) this.m_shape.setNextVertex(a2, n5), this.m_shape.setPrevVertex(n5, a2), this.m_shape.setNextVertex(r, o2), this.m_shape.setPrevVertex(o2, r), this.m_bHasSegmentParentage && (this.m_shape.setSegmentParentageBreakVertex(n5, true), this.m_shape.setSegmentParentageBreakVertex(o2, true));
    else {
      if (this.m_shape.setPrevVertex(a2, n5), this.m_shape.setNextVertex(n5, a2), this.m_shape.setPrevVertex(r, o2), this.m_shape.setNextVertex(o2, r), this.m_bHasSegmentParentage) {
        const e4 = this.m_shape.getSegmentParentage(n5), t3 = this.m_shape.getSegmentParentage(o2);
        this.m_shape.setSegmentParentageAndBreak(n5, t3, true), this.m_shape.setSegmentParentageAndBreak(o2, e4, true);
      }
      if (this.m_bHasSegments) {
        const e4 = this.m_shape.getVertexIndex(n5), t3 = this.m_shape.getVertexIndex(o2), s3 = this.m_shape.getSegmentFromIndex(e4);
        this.m_shape.setSegmentToIndex(e4, null);
        const r2 = this.m_shape.getSegmentFromIndex(t3);
        this.m_shape.setSegmentToIndex(t3, null), this.m_shape.setSegmentToIndex(e4, r2), this.m_shape.setSegmentToIndex(t3, s3);
      }
    }
    return 1;
  }
  resolveOverlap_(e3, t2, s2, n5, r, i2) {
    return this.resolveOverlapOddEven_(e3, t2, s2, n5, r, i2);
  }
  resolveOverlapOddEven_(e3, t2, s2, n5, r, i2) {
    if (e3 !== t2) {
      e3 || (r = Pt(s2, s2 = r), i2 = Pt(n5, n5 = i2));
      const t3 = this.m_shape.getNextVertex(r), o2 = this.m_shape.getNextVertex(s2);
      if (this.m_shape.setNextVertex(s2, t3), this.m_shape.setPrevVertex(t3, s2), this.m_shape.setNextVertex(r, o2), this.m_shape.setPrevVertex(o2, r), this.m_bHasSegments) {
        const e4 = this.m_shape.getVertexIndex(s2), t4 = this.m_shape.getVertexIndex(r), n6 = this.m_shape.getSegmentFromIndex(e4);
        this.m_shape.setSegmentToIndex(e4, null);
        const i3 = this.m_shape.getSegmentFromIndex(t4);
        this.m_shape.setSegmentToIndex(t4, null), this.m_shape.setSegmentToIndex(e4, i3), this.m_shape.setSegmentToIndex(t4, n6);
      }
      if (this.m_bHasSegmentParentage) {
        const e4 = this.m_shape.getSegmentParentage(s2), t4 = this.m_shape.getSegmentParentage(r);
        this.m_shape.setSegmentParentageAndBreak(s2, t4, true), this.m_shape.setSegmentParentageAndBreak(r, e4, true), this.m_shape.setSegmentParentageBreakVertex(n5, true), this.m_shape.setSegmentParentageBreakVertex(i2, true);
      }
      this.removeSpike_(r);
    } else {
      const o2 = e3 ? s2 : n5, a2 = t2 ? r : i2, h2 = e3 ? n5 : s2, m2 = t2 ? i2 : r;
      let l2 = null;
      if (this.m_bHasSegments) {
        const e4 = this.m_shape.getVertexIndex(m2);
        l2 = this.m_shape.getSegmentFromIndex(e4), this.m_shape.setSegmentToIndex(e4, null);
        const t3 = this.m_shape.getVertexIndex(a2);
        this.m_shape.setSegmentToIndex(t3, null);
        const s3 = this.m_shape.getVertexIndex(o2);
        this.m_shape.setSegmentToIndex(s3, null);
      }
      let g = -1;
      this.m_bHasSegmentParentage && (g = this.m_shape.getSegmentParentage(m2));
      let u = false;
      this.m_shape.setNextVertex(o2, a2), this.m_shape.setNextVertex(a2, o2), this.m_shape.setPrevVertex(h2, m2), this.m_shape.setPrevVertex(m2, h2);
      let c = m2;
      for (; c !== a2; ) {
        const e4 = this.m_shape.getPrevVertex(c), t3 = this.m_shape.getNextVertex(c);
        if (this.m_shape.setPrevVertex(c, t3), this.m_shape.setNextVertex(c, e4), u ||= c === o2, this.m_bHasSegments && c !== o2) {
          const e5 = this.m_shape.getVertexIndex(t3), s3 = l2;
          l2 = this.m_shape.getSegmentFromIndex(e5), null !== s3 && s3.reverse(), this.m_shape.setSegmentToIndex(e5, s3);
        }
        if (this.m_bHasSegmentParentage) {
          const e5 = this.m_shape.getSegmentParentage(t3);
          this.m_shape.setSegmentParentagePreserveBreak(t3, g), g = e5;
        }
        c = t3;
      }
      let _ = null;
      if (!u) {
        const e4 = this.m_shape.getPrevVertex(a2), t3 = this.m_shape.getNextVertex(a2);
        if (this.m_shape.setPrevVertex(a2, t3), this.m_shape.setNextVertex(a2, e4), this.m_bHasSegments) {
          const e5 = this.m_shape.getVertexIndex(a2);
          _ = this.m_shape.getSegmentFromIndex(e5), this.m_shape.setSegmentToIndex(e5, null);
        }
      }
      let d2 = -1, p3 = -1;
      if (this.m_bHasSegmentParentage && (d2 = u ? this.m_shape.getSegmentParentage(o2) : this.m_shape.getSegmentParentage(a2), p3 = this.m_shape.getSegmentParentage(h2)), this.transferVertexData_(a2, o2), this.beforeRemoveVertex_(a2, true), this.m_shape.removeVertexInternal(a2, true), this.removeAngleSortInfo_(o2), this.transferVertexData_(m2, h2), this.beforeRemoveVertex_(m2, true), this.m_shape.removeVertexInternal(m2, true), this.removeAngleSortInfo_(h2), this.m_bHasSegmentParentage && (this.m_shape.setSegmentParentageAndBreak(o2, d2, true), this.m_shape.setSegmentParentageAndBreak(h2, p3, true)), _) {
        const e4 = this.m_shape.getVertexIndex(o2);
        this.m_shape.setSegmentToIndex(e4, _);
      }
    }
    return true;
  }
  cleanupSpikes_() {
    let e3 = false;
    for (let t2 = this.m_shape.getFirstPath(this.m_geometry); t2 !== gr; ) {
      const s2 = this.m_shape.getNextPath(t2);
      let n5 = this.m_shape.getFirstVertex(t2);
      for (let r = 0, i2 = this.m_shape.getPathSize(t2); r < i2 && i2 > 1; ) {
        this.progress_();
        const { v: s3, bModified: o2 } = this.checkAndCleanupSpike_(t2, n5);
        if (s3 === gr) break;
        o2 ? (e3 = true, n5 = s3, r = 0, i2 = this.m_shape.getPathSize(t2)) : (n5 = s3, r++);
      }
      t2 = s2;
    }
    return e3;
  }
  checkAndCleanupSpike_(e3, t2) {
    const s2 = { v: gr, bModified: false };
    let n5 = this.m_shape.getPrevVertex(t2), r = this.m_shape.getNextVertex(t2), i2 = gr, o2 = gr;
    for (; this.m_shape.isEqualXY(n5, r) && (i2 = n5, o2 = r, r !== t2); ) n5 = this.m_shape.getPrevVertex(n5), r = this.m_shape.getNextVertex(r);
    if (i2 === gr) return s2.v = r, s2;
    s2.bModified = true;
    for (let a2 = this.m_shape.getNextVertex(i2); this.beforeRemoveVertex_(a2, false), a2 !== o2; a2 = this.m_shape.getNextVertex(a2)) ;
    if (i2 === t2) return this.m_polylineDegeneracies !== gr ? this.m_shape.movePath(this.m_polylineDegeneracies, gr, e3) : this.m_shape.removePath(e3), s2.v = gr, s2;
    {
      const e4 = this.m_shape.peelALoopIntoAPath(i2, o2);
      this.m_polylineDegeneracies !== gr ? this.m_shape.movePath(this.m_polylineDegeneracies, gr, e4) : this.m_shape.removePath(e4);
    }
    return s2.v = i2, s2;
  }
  removeSpike_(e3) {
    let t2 = this.m_shape.getPrevVertex(e3), s2 = this.m_shape.getNextVertex(e3), n5 = gr, r = gr;
    for (; this.m_shape.isEqualXY(t2, s2) && (n5 = t2, r = s2, s2 !== e3); ) t2 = this.m_shape.getPrevVertex(t2), s2 = this.m_shape.getNextVertex(s2);
    if (n5 === gr) return false;
    if (this.m_shape.peelALoop(n5, r), this.m_bHasSegmentParentage && (this.m_shape.setSegmentParentageBreakVertex(n5, true), this.m_shape.setSegmentParentageBreakVertex(r, true)), this.removeAngleSortInfo_(n5), this.m_polylineDegeneracies === gr) for (let i2 = this.m_shape.getNextVertex(r); ; ) {
      const e4 = this.m_shape.getNextVertex(i2);
      if (this.removeAngleSortInfo_(i2), this.beforeRemoveVertex_(i2, true), this.m_shape.setSegmentToIndex(this.m_shape.getVertexIndex(i2), null), this.m_shape.removeVertexInternal(i2, false), i2 === r) break;
      i2 = e4;
    }
    else {
      for (let t3 = r; ; ) {
        const e5 = this.m_shape.getNextVertex(t3);
        if (this.removeAngleSortInfo_(t3), this.beforeRemoveVertex_(t3, false), t3 = e5, t3 === r) break;
      }
      const e4 = [false];
      this.m_shape.insertClosedPath(this.m_polylineDegeneracies, gr, r, r, e4);
    }
    return true;
  }
  fixOrphanVertices_() {
    let e3 = 0;
    for (let n5 = this.m_sortedVertices.getFirst(this.m_sortedVertices.getFirstList()); -1 !== n5; n5 = this.m_sortedVertices.getNext(n5)) {
      const e4 = this.m_sortedVertices.getData(n5);
      this.m_shape.setPathToVertex(e4, gr);
    }
    let t2 = 0;
    for (let n5 = this.m_shape.getFirstPath(this.m_geometry); n5 !== gr; ) {
      const s3 = this.m_shape.getFirstVertex(n5);
      if (s3 === gr || this.m_shape.getPathFromVertex(s3) !== gr) {
        const e4 = n5;
        n5 = this.m_shape.getNextPath(n5), this.m_shape.removePathOnly(e4);
        continue;
      }
      this.m_shape.setPathToVertex(s3, n5);
      let r = 1;
      for (let e4 = this.m_shape.getNextVertex(s3); e4 !== s3; e4 = this.m_shape.getNextVertex(e4)) this.m_shape.setPathToVertex(e4, n5), r++;
      this.m_shape.setRingAreaValid(n5, false), this.m_shape.setPathSize(n5, r), this.m_shape.setLastVertex(n5, this.m_shape.getPrevVertex(s3)), t2 += r, e3++, n5 = this.m_shape.getNextPath(n5);
    }
    for (let n5 = this.m_sortedVertices.getFirst(this.m_sortedVertices.getFirstList()); -1 !== n5; n5 = this.m_sortedVertices.getNext(n5)) {
      const s3 = this.m_sortedVertices.getData(n5);
      if (this.m_shape.getPathFromVertex(s3) !== gr) continue;
      const r = [false], i2 = this.m_shape.insertClosedPath(this.m_geometry, gr, s3, s3, r);
      t2 += this.m_shape.getPathSize(i2), e3++;
    }
    this.m_shape.setGeometryPathCount(this.m_geometry, e3), this.m_shape.setGeometryVertexCount(this.m_geometry, t2);
    let s2 = 0;
    for (let n5 = this.m_shape.getFirstGeometry(); n5 !== gr; n5 = this.m_shape.getNextGeometry(n5)) s2 += this.m_shape.getPointCount(n5);
    this.m_shape.setTotalPointCount(s2);
  }
  getNextEdgeIndex_(e3) {
    if (-1 === e3) return -1;
    for (let t2 = 0, s2 = this.m_bunchEdgeIndices.length - 1; t2 < s2; t2++) if (e3 = (e3 + 1) % this.m_bunchEdgeIndices.length, -1 !== this.m_bunchEdgeIndices[e3]) return e3;
    return -1;
  }
  getPrevEdgeIndex_(e3) {
    if (-1 === e3) return -1;
    for (let t2 = 0, s2 = this.m_bunchEdgeIndices.length - 1; t2 < s2; t2++) if (e3 = (this.m_bunchEdgeIndices.length + e3 - 1) % this.m_bunchEdgeIndices.length, -1 !== this.m_bunchEdgeIndices[e3]) return e3;
    return -1;
  }
  transferVertexData_(e3, t2) {
    const s2 = this.m_shape.getUserIndex(t2, this.m_userIndexSortedIndexToVertex), n5 = this.m_shape.getUserIndex(t2, this.m_userIndexSortedAngleIndexToVertex);
    this.m_shape.transferAllDataToTheVertex(e3, t2), this.m_shape.setUserIndex(t2, this.m_userIndexSortedIndexToVertex, s2), this.m_shape.setUserIndex(t2, this.m_userIndexSortedAngleIndexToVertex, n5);
  }
  removeAngleSortInfo_(e3) {
    const t2 = this.m_shape.getUserIndex(e3, this.m_userIndexSortedAngleIndexToVertex);
    -1 !== t2 && (this.m_bunchEdgeIndices[t2] = -1, this.m_shape.setUserIndex(e3, this.m_userIndexSortedAngleIndexToVertex, -1));
  }
  progress_(e3 = false) {
  }
};
function sr(e3, t2, r, o2, a2, h2 = true) {
  switch (ir(o2)) {
    case 0:
      break;
    case 1:
      P("relation string length has to be 9 characters");
      break;
    default:
      P("relation string");
  }
  if (h2) {
    const s2 = xr(o2, e3.getDimension(), t2.getDimension());
    if (0 !== s2) return kr(e3, t2, r, s2, a2);
  }
  let m2 = 0;
  if ("number" == typeof r) m2 = r;
  else {
    const n5 = n3.constructEmpty();
    e3.queryEnvelope(n5);
    const i2 = n3.constructEmpty();
    t2.queryEnvelope(i2);
    const o3 = n3.constructEmpty();
    o3.setCoords({ env2D: n5 }), o3.mergeEnvelope2D(i2), m2 = Lt(r, o3, false);
  }
  const l2 = Tr(e3, m2), g = Tr(t2, m2);
  if (l2.isEmpty() || g.isEmpty()) return fr2(l2, g, o2);
  const u = l2.getGeometryType(), c = g.getGeometryType();
  let _ = false;
  switch (u) {
    case a.enumPolygon:
      switch (c) {
        case a.enumPolygon:
          _ = or(l2, g, m2, o2, a2);
          break;
        case a.enumPolyline:
          _ = ar(l2, g, m2, o2, a2);
          break;
        case a.enumPoint:
          _ = ur(l2, g, m2, o2);
          break;
        case a.enumMultiPoint:
          _ = hr(l2, g, m2, o2, a2);
      }
      break;
    case a.enumPolyline:
      switch (c) {
        case a.enumPolygon:
          _ = ar(g, l2, m2, Gr(o2), a2);
          break;
        case a.enumPolyline:
          _ = mr2(l2, g, m2, o2, a2);
          break;
        case a.enumPoint:
          _ = cr(l2, g, m2, o2, a2);
          break;
        case a.enumMultiPoint:
          _ = lr(l2, g, m2, o2, a2);
      }
      break;
    case a.enumPoint:
      switch (c) {
        case a.enumPolygon:
          _ = ur(g, l2, m2, Gr(o2));
          break;
        case a.enumPolyline:
          _ = cr(g, l2, m2, Gr(o2), a2);
          break;
        case a.enumPoint:
          _ = dr(l2, g, m2, o2);
          break;
        case a.enumMultiPoint:
          _ = _r(g, l2, m2, Gr(o2));
      }
      break;
    case a.enumMultiPoint:
      switch (c) {
        case a.enumPolygon:
          _ = hr(g, l2, m2, Gr(o2), a2);
          break;
        case a.enumPolyline:
          _ = lr(g, l2, m2, Gr(o2), a2);
          break;
        case a.enumMultiPoint:
          _ = gr2(l2, g, m2, o2, a2);
          break;
        case a.enumPoint:
          _ = _r(l2, g, m2, o2);
      }
      break;
    default:
      _ = false;
  }
  return _;
}
function nr(e3, t2, n5, r) {
  const i2 = new vr();
  i2.resetMatrix_(), i2.setPredicates_("T*****F**"), i2.setAreaAreaPredicates_();
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  e3.queryEnvelope(o2), t2.queryEnvelope(a2);
  let h2 = false;
  if (qr(o2, a2, n5) && (i2.areaAreaDisjointPredicates_(e3, t2), h2 = true), h2 || Br(e3, t2), h2) {
    return pr(i2.m_matrix, i2.m_scl);
  }
  let m2 = new yr(), l2 = m2.addGeometry(e3), g = m2.addGeometry(t2), u = null, c = 0;
  if (e3.hasNonLinearSegments() || t2.hasNonLinearSegments()) {
    u = new fa();
    const e4 = _a(n5, m2.getEnvelope2D(r));
    c = pa(e4, 0), aa(m2, e4, n5, 12e3, u, null, r);
  }
  ya(m2, new bt(n5, 0).add(c), r, false, false);
  const _ = m2.getGeometry(g).getBoundary();
  if (m2.filterClosePoints(0, true, true, false, gr), er(m2, l2, -1, false, gr, r), 0 === m2.getPointCount(l2)) return false;
  er(m2, g, -1, false, gr, r), i2.setEditShape_(m2, r);
  const d2 = 0 === m2.getPointCount(g);
  if (!d2) {
    i2.computeMatrixTopoGraphHalfEdges_(l2, g), i2.m_topoGraph.removeShape();
    const e4 = pr(i2.m_matrix, i2.m_scl);
    if (!e4) return e4;
  }
  const p3 = m2.getGeometry(l2);
  m2 = new yr(), l2 = m2.addGeometry(p3), g = m2.addGeometry(_), i2.setEditShape_(m2, r), i2.m_predicateCount = 0, i2.resetMatrix_(), i2.setPredicates_(d2 ? "T*****F**" : "******F**"), i2.setAreaLinePredicates_(), i2.computeMatrixTopoGraphHalfEdges_(l2, g), i2.m_topoGraph.removeShape();
  return pr(i2.m_matrix, i2.m_scl);
}
function rr(e3, t2, n5, r) {
  const i2 = new vr();
  i2.resetMatrix_(), i2.setPredicates_("T*****F**"), i2.setAreaLinePredicates_();
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  e3.queryEnvelope(o2), t2.queryEnvelope(a2);
  let h2 = false;
  if (qr(o2, a2, n5) && (i2.areaLineDisjointPredicates_(e3, t2), h2 = true), h2 || Br(e3, t2), h2) {
    return pr(i2.m_matrix, i2.m_scl);
  }
  const m2 = new yr(), l2 = m2.addGeometry(e3), g = m2.addGeometry(t2);
  if (i2.setEditShapeCrackAndCluster_(m2, new bt(n5, 0), r), 0 === m2.getPointCount(l2)) return false;
  i2.computeMatrixTopoGraphHalfEdges_(l2, g), i2.m_topoGraph.removeShape();
  return pr(i2.m_matrix, i2.m_scl);
}
function ir(e3) {
  if (9 !== e3.length) return 1;
  for (let t2 = 0; t2 < 9; t2++) {
    const s2 = e3[t2];
    if ("*" !== s2 && "T" !== s2 && "F" !== s2 && "0" !== s2 && "1" !== s2 && "2" !== s2) return 2;
  }
  return 0;
}
function or(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setAreaAreaPredicates_();
  const a2 = n3.constructEmpty(), h2 = n3.constructEmpty();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.areaAreaDisjointPredicates_(e3, t2), m2 = true), m2 || Br(e3, t2), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.computeMatrixTopoGraphHalfEdges_(r2, a3), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function ar(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setAreaLinePredicates_();
  const a2 = n3.constructEmpty(), h2 = n3.constructEmpty();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.areaLineDisjointPredicates_(e3, t2), m2 = true), m2 || Br(e3, t2), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.m_clusterIndexB = o2.m_topoGraph.createUserIndexForClusters(), wr(a3, o2.m_topoGraph, o2.m_clusterIndexB), o2.computeMatrixTopoGraphHalfEdges_(r2, a3), o2.m_topoGraph.deleteUserIndexForClusters(o2.m_clusterIndexB), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function hr(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setAreaPointPredicates_();
  const a2 = n3.constructEmpty(), h2 = n3.constructEmpty();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.areaPointDisjointPredicates_(e3), m2 = true), m2 || Br(e3, t2), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.computeMatrixTopoGraphClusters_(r2, a3), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function mr2(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setLineLinePredicates_();
  const a2 = n3.constructEmpty(), h2 = n3.constructEmpty();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.lineLineDisjointPredicates_(e3, t2), m2 = true), m2 || Br(e3, t2), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.m_clusterIndexA = o2.m_topoGraph.createUserIndexForClusters(), o2.m_clusterIndexB = o2.m_topoGraph.createUserIndexForClusters(), wr(r2, o2.m_topoGraph, o2.m_clusterIndexA), wr(a3, o2.m_topoGraph, o2.m_clusterIndexB), o2.computeMatrixTopoGraphHalfEdges_(r2, a3), o2.m_topoGraph.deleteUserIndexForClusters(o2.m_clusterIndexA), o2.m_topoGraph.deleteUserIndexForClusters(o2.m_clusterIndexB), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function lr(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setLinePointPredicates_();
  const a2 = n3.constructEmpty(), h2 = n3.constructEmpty();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.linePointDisjointPredicates_(e3), m2 = true), m2 || Br(e3, t2), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.m_clusterIndexA = o2.m_topoGraph.createUserIndexForClusters(), wr(r2, o2.m_topoGraph, o2.m_clusterIndexA), o2.computeMatrixTopoGraphClusters_(r2, a3), o2.m_topoGraph.deleteUserIndexForClusters(o2.m_clusterIndexA), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function gr2(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setPointPointPredicates_();
  const a2 = new n3(), h2 = new n3();
  e3.queryEnvelope(a2), t2.queryEnvelope(h2);
  let m2 = false;
  if (qr(a2, h2, n5) && (o2.pointPointDisjointPredicates_(), m2 = true), !m2) {
    const s2 = new yr(), r2 = s2.addGeometry(e3), a3 = s2.addGeometry(t2);
    o2.setEditShapeCrackAndCluster_(s2, new bt(n5, 0), i2), o2.computeMatrixTopoGraphClusters_(r2, a3), o2.m_topoGraph.removeShape();
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function ur(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setAreaPointPredicates_();
  const a2 = n3.constructEmpty();
  e3.queryEnvelope(a2);
  const h2 = t2.getXY();
  let m2 = false;
  if (Or(h2, a2, n5) && (o2.areaPointDisjointPredicates_(e3), m2 = true), !m2) {
    const t3 = Lo(e3, h2, n5);
    if (1 === t3) o2.m_matrix[0] = 0, o2.m_matrix[2] = 2, o2.m_matrix[3] = -1, o2.m_matrix[5] = 1, o2.m_matrix[6] = -1;
    else if (2 === t3) {
      o2.m_matrix[6] = -1;
      if (0 !== e3.calculateArea2D()) o2.m_matrix[0] = -1, o2.m_matrix[3] = 0, o2.m_matrix[2] = 2, o2.m_matrix[5] = 1;
      else {
        o2.m_matrix[0] = 0, o2.m_matrix[3] = -1, o2.m_matrix[5] = -1;
        const t4 = n3.constructEmpty();
        e3.queryEnvelope(t4), o2.m_matrix[2] = t4.height() || t4.width() ? 1 : -1;
      }
    } else o2.areaPointDisjointPredicates_(e3);
  }
  return pr(o2.m_matrix, r);
}
function cr(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setLinePointPredicates_();
  const a2 = n3.constructEmpty();
  e3.queryEnvelope(a2);
  let h2 = false;
  if (Or(t2.getXY(), a2, n5) && (o2.linePointDisjointPredicates_(e3), h2 = true), !h2) {
    let s2 = null, r2 = false, a3 = false;
    if (o2.m_performPredicates[0] || o2.m_performPredicates[6]) {
      !kr(e3, t2, n5, 4, i2) ? (o2.m_performPredicates[0] && (s2 = $s(e3), a3 = !kr(s2, t2, n5, 4, i2), r2 = true, o2.m_matrix[0] = a3 ? -1 : 0), o2.m_matrix[6] = -1) : (o2.m_matrix[0] = -1, o2.m_matrix[6] = 0);
    }
    if (o2.m_performPredicates[3] && (null !== s2 && s2.isEmpty() ? o2.m_matrix[3] = -1 : (r2 || (null == s2 && (s2 = $s(e3)), a3 = !kr(s2, t2, n5, 4, i2), r2 = true), o2.m_matrix[3] = a3 ? 0 : -1)), o2.m_performPredicates[5]) if (null !== s2 && s2.isEmpty()) o2.m_matrix[5] = -1;
    else if (r2 && !a3) o2.m_matrix[5] = 0;
    else {
      null === s2 && (s2 = $s(e3));
      const r3 = kr(s2, t2, n5, 3, i2);
      o2.m_matrix[5] = r3 ? -1 : 0;
    }
    if (o2.m_performPredicates[2]) {
      if (0 !== e3.calculateLength2D()) o2.m_matrix[2] = 1;
      else {
        const s3 = new De({ vd: e3.getDescription() });
        s3.addPoints(e3, 0, e3.getPointCount());
        const r3 = kr(s3, t2, n5, 3, i2);
        o2.m_matrix[2] = r3 ? -1 : 0;
      }
    }
  }
  return pr(o2.m_matrix, o2.m_scl);
}
function _r(e3, t2, n5, r, i2) {
  const o2 = new vr();
  o2.resetMatrix_(), o2.setPredicates_(r), o2.setPointPointPredicates_();
  const a2 = n3.constructEmpty();
  e3.queryEnvelope(a2);
  const h2 = t2.getXY(), m2 = new mi();
  let l2 = false;
  if (Or(h2, a2, n5) && (o2.pointPointDisjointPredicates_(), l2 = true), !l2) {
    let t3 = false, s2 = true;
    const r2 = n5 * n5;
    for (let n6 = 0; n6 < e3.getPointCount() && (e3.queryXY(n6, m2), mi.sqrDistance(m2, h2) <= r2 ? t3 = true : s2 = false, !t3 || s2); n6++) ;
    t3 ? (o2.m_matrix[0] = 0, o2.m_matrix[2] = s2 ? -1 : 0, o2.m_matrix[6] = -1) : (o2.m_matrix[0] = -1, o2.m_matrix[2] = 0, o2.m_matrix[6] = 0);
  }
  return pr(o2.m_matrix, r);
}
function dr(e3, t2, s2, n5, r) {
  const i2 = e3.getXY(), o2 = t2.getXY(), a2 = Yt(9, -1);
  mi.sqrDistance(i2, o2) <= s2 * s2 ? a2[0] = 0 : (a2[2] = 0, a2[6] = 0), a2[8] = 2;
  return pr(a2, n5);
}
function pr(e3, t2) {
  for (let s2 = 0; s2 < 9; s2++) switch (t2[s2]) {
    case "T":
      if (-1 === e3[s2]) return false;
      break;
    case "F":
      if (-1 !== e3[s2]) return false;
      break;
    case "0":
      if (0 !== e3[s2]) return false;
      break;
    case "1":
      if (1 !== e3[s2]) return false;
      break;
    case "2":
      if (2 !== e3[s2]) return false;
  }
  return true;
}
function fr2(e3, t2, n5) {
  const r = Yt(9, -1);
  if (e3.isEmpty() && t2.isEmpty()) return pr(r, n5);
  let o2, a2 = false;
  e3.isEmpty() ? (o2 = t2, a2 = true) : o2 = e3, r[0] = -1, r[1] = -1, r[3] = -1, r[4] = -1, r[6] = -1, r[7] = -1, r[8] = 2;
  const m2 = o2.getGeometryType();
  if (h(m2)) if (m2 === a.enumPolygon) {
    if (0 !== o2.calculateArea2D()) r[2] = 2, r[5] = 1;
    else {
      r[5] = -1;
      const e4 = n3.constructEmpty();
      o2.queryEnvelope(e4), r[2] = e4.height() || e4.width() ? 1 : 0;
    }
  } else {
    const e4 = 0 !== o2.calculateLength2D();
    r[2] = e4 ? 1 : 0, r[5] = Ks(o2) ? 0 : -1;
  }
  else r[2] = 0, r[5] = -1;
  return a2 && Nr(r), pr(r, n5);
}
function xr(e3, t2, s2) {
  return yr2(e3) ? 3 : Pr2(e3) ? 4 : Er(e3, t2, s2) ? 8 : Sr(e3, t2, s2) ? 16 : Ir(e3) ? 64 : Cr(e3) ? 1 : br(e3, t2, s2) ? 32 : 0;
}
function yr2(e3) {
  return "T*F**FFF*" === e3;
}
function Pr2(e3) {
  return "FF*FF****" === e3;
}
function Er(e3, t2, s2) {
  return (0 !== t2 || 0 !== s2) && (2 === t2 && 2 === s2 ? "F***T****" === e3 : (2 === t2 || 1 === t2) && 0 === s2 && "F**T*****" === e3);
}
function Sr(e3, t2, s2) {
  return t2 > s2 ? "T*****T**" === e3 : 1 === t2 && 1 === s2 && "0********" === e3;
}
function Cr(e3) {
  return "T*****FF*" === e3;
}
function Ir(e3) {
  return "T**FF*FF*" === e3;
}
function br(e3, t2, s2) {
  return t2 === s2 && (1 !== t2 ? "T*T***T**" === e3 : "1*T***T**" === e3);
}
function wr(e3, t2, s2) {
  const n5 = t2.getGeometryID(e3);
  for (let r = t2.getFirstCluster(); r !== gr; r = t2.getNextCluster(r)) {
    if (0 === (t2.getClusterParentage(r) & n5)) continue;
    const e4 = t2.getClusterHalfEdge(r);
    if (e4 === gr) {
      t2.setClusterUserIndex(r, s2, 0);
      continue;
    }
    let i2 = e4, o2 = 0;
    do {
      const e5 = i2;
      0 !== (t2.getHalfEdgeParentage(e5) & n5) && o2++, i2 = t2.getHalfEdgeNext(t2.getHalfEdgeTwin(e5));
    } while (i2 !== e4);
    t2.setClusterUserIndex(r, s2, o2);
  }
}
var vr = class {
  nullFunc() {
    return b("should not be called"), false;
  }
  constructor() {
    this.m_clusterIndexA = -1, this.m_clusterIndexB = -1, this.m_visitedIndex = -1, this.m_topoGraph = new tn(), this.m_matrix = Yt(9, 0), this.m_maxDim = Yt(9, 0), this.m_performPredicates = Yt(9, false), this.m_scl = "", this.m_predicateCount = 0, this.m_predicatesHalfEdge = this.nullFunc, this.m_predicatesCluster = this.nullFunc;
  }
  resetMatrix_() {
    this.m_matrix.fill(-2), this.m_maxDim.fill(-2);
  }
  setPredicates_(e3) {
    this.m_scl = e3;
    for (let t2 = 0; t2 < 9; t2++) "*" !== this.m_scl[t2] ? (this.m_performPredicates[t2] = true, this.m_predicateCount++) : this.m_performPredicates[t2] = false;
  }
  setRemainingPredicatesToFalse_() {
    for (let e3 = 0; e3 < 9; e3++) this.m_performPredicates[e3] && -2 === this.m_matrix[e3] && (this.m_matrix[e3] = -1, this.m_performPredicates[e3] = false);
  }
  isPredicateKnown_(e3) {
    return -2 !== this.m_matrix[e3] && (-1 === this.m_matrix[e3] ? (this.m_performPredicates[e3] = false, this.m_predicateCount--, true) : "T" !== this.m_scl[e3] && "F" !== this.m_scl[e3] ? !(this.m_matrix[e3] < this.m_maxDim[e3]) && (this.m_performPredicates[e3] = false, this.m_predicateCount--, true) : (this.m_performPredicates[e3] = false, this.m_predicateCount--, true));
  }
  setAreaAreaPredicates_() {
    this.m_predicatesHalfEdge = this.areaAreaPredicates_, this.m_maxDim[0] = 2, this.m_maxDim[1] = 1, this.m_maxDim[2] = 2, this.m_maxDim[3] = 1, this.m_maxDim[4] = 1, this.m_maxDim[5] = 1, this.m_maxDim[6] = 2, this.m_maxDim[7] = 1, this.m_maxDim[8] = 2, this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  setAreaLinePredicates_() {
    this.m_predicatesHalfEdge = this.areaLinePredicates_, this.m_predicatesCluster = this.areaPointPredicates_, this.m_maxDim[0] = 1, this.m_maxDim[1] = 0, this.m_maxDim[2] = 2, this.m_maxDim[3] = 1, this.m_maxDim[4] = 0, this.m_maxDim[5] = 1, this.m_maxDim[6] = 1, this.m_maxDim[7] = 0, this.m_maxDim[8] = 2, this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  setLineLinePredicates_() {
    this.m_predicatesHalfEdge = this.lineLinePredicates_, this.m_predicatesCluster = this.linePointPredicates_, this.m_maxDim[0] = 1, this.m_maxDim[1] = 0, this.m_maxDim[2] = 1, this.m_maxDim[3] = 0, this.m_maxDim[4] = 0, this.m_maxDim[5] = 0, this.m_maxDim[6] = 1, this.m_maxDim[7] = 0, this.m_maxDim[8] = 2, this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  setAreaPointPredicates_() {
    this.m_predicatesCluster = this.areaPointPredicates_, this.m_maxDim[0] = 0, this.m_maxDim[1] = -1, this.m_maxDim[2] = 2, this.m_maxDim[3] = 0, this.m_maxDim[4] = -1, this.m_maxDim[5] = 1, this.m_maxDim[6] = 0, this.m_maxDim[7] = -1, this.m_maxDim[8] = 2, this.m_performPredicates[1] && (this.m_matrix[1] = -1, this.m_performPredicates[1] = false, this.m_predicateCount--), this.m_performPredicates[4] && (this.m_matrix[4] = -1, this.m_performPredicates[4] = false, this.m_predicateCount--), this.m_performPredicates[7] && (this.m_matrix[7] = -1, this.m_performPredicates[7] = false, this.m_predicateCount--), this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  setLinePointPredicates_() {
    this.m_predicatesCluster = this.linePointPredicates_, this.m_maxDim[0] = 0, this.m_maxDim[1] = -1, this.m_maxDim[2] = 1, this.m_maxDim[3] = 0, this.m_maxDim[4] = -1, this.m_maxDim[5] = 0, this.m_maxDim[6] = 0, this.m_maxDim[7] = -1, this.m_maxDim[8] = 2, this.m_performPredicates[1] && (this.m_matrix[1] = -1, this.m_performPredicates[1] = false, this.m_predicateCount--), this.m_performPredicates[4] && (this.m_matrix[4] = -1, this.m_performPredicates[4] = false, this.m_predicateCount--), this.m_performPredicates[7] && (this.m_matrix[7] = -1, this.m_performPredicates[7] = false, this.m_predicateCount--), this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  setPointPointPredicates_() {
    this.m_predicatesCluster = this.pointPointPredicates_, this.m_maxDim[0] = 0, this.m_maxDim[1] = -1, this.m_maxDim[2] = 0, this.m_maxDim[3] = -1, this.m_maxDim[4] = -1, this.m_maxDim[5] = -1, this.m_maxDim[6] = 0, this.m_maxDim[7] = -1, this.m_maxDim[8] = 2, this.m_performPredicates[1] && (this.m_matrix[1] = -1, this.m_performPredicates[1] = false, this.m_predicateCount--), this.m_performPredicates[3] && (this.m_matrix[3] = -1, this.m_performPredicates[3] = false, this.m_predicateCount--), this.m_performPredicates[4] && (this.m_matrix[4] = -1, this.m_performPredicates[4] = false, this.m_predicateCount--), this.m_performPredicates[5] && (this.m_matrix[5] = -1, this.m_performPredicates[5] = false, this.m_predicateCount--), this.m_performPredicates[7] && (this.m_matrix[7] = -1, this.m_performPredicates[7] = false, this.m_predicateCount--), this.m_performPredicates[8] && (this.m_matrix[8] = 2, this.m_performPredicates[8] = false, this.m_predicateCount--);
  }
  areaAreaDisjointPredicates_(e3, t2) {
    this.m_matrix[0] = -1, this.m_matrix[1] = -1, this.m_matrix[3] = -1, this.m_matrix[4] = -1, this.areaGeomContainsOrDisjointPredicates_(e3, this.m_performPredicates[2] ? 2 : -1, this.m_scl[2], this.m_performPredicates[5] ? 5 : -1, this.m_scl[5]), this.areaGeomContainsOrDisjointPredicates_(t2, this.m_performPredicates[6] ? 6 : -1, this.m_scl[6], this.m_performPredicates[7] ? 7 : -1, this.m_scl[7]);
  }
  areaGeomContainsOrDisjointPredicates_(e3, t2, n5, r, i2) {
    const o2 = -1 !== t2, a2 = -1 !== r;
    if (o2 || a2) {
      if (!("T" !== n5 && "F" !== n5 && o2 || "T" !== i2 && "F" !== i2 && a2) || 0 !== e3.calculateArea2D()) o2 && (this.m_matrix[t2] = 2), a2 && (this.m_matrix[r] = 1);
      else if (a2 && (this.m_matrix[r] = -1), o2) {
        const n6 = n3.constructEmpty();
        e3.queryEnvelope(n6), this.m_matrix[t2] = n6.height() || n6.width() ? 1 : 0;
      }
    }
  }
  areaAreaContainsPredicates_(e3) {
    this.m_matrix[2] = 2, this.m_matrix[3] = -1, this.m_matrix[4] = -1, this.m_matrix[5] = 1, this.m_matrix[6] = -1, this.m_matrix[7] = -1, this.areaGeomContainsOrDisjointPredicates_(e3, this.m_performPredicates[0] ? 0 : -1, this.m_scl[0], this.m_performPredicates[1] ? 1 : -1, this.m_scl[1]);
  }
  areaAreaWithinPredicates_(e3) {
    this.areaAreaContainsPredicates_(e3), Nr(this.m_matrix);
  }
  areaLineDisjointPredicates_(e3, t2) {
    if (this.m_matrix[0] = -1, this.m_matrix[1] = -1, this.m_matrix[3] = -1, this.m_matrix[4] = -1, this.m_performPredicates[6]) {
      const e4 = this.m_scl[6], s2 = "T" === e4 || "F" === e4 || 0 !== t2.calculateLength2D();
      this.m_matrix[6] = s2 ? 1 : 0;
    }
    if (this.m_performPredicates[7]) {
      const e4 = Ks(t2);
      this.m_matrix[7] = e4 ? 0 : -1;
    }
    this.areaGeomContainsOrDisjointPredicates_(e3, this.m_performPredicates[2] ? 2 : -1, this.m_scl[2], this.m_performPredicates[5] ? 5 : -1, this.m_scl[5]);
  }
  areaLineContainsPredicates_(e3, t2) {
    if (this.m_performPredicates[0]) {
      const e4 = this.m_scl[0], s2 = "T" === e4 || "F" === e4 || 0 !== t2.calculateLength2D();
      this.m_matrix[0] = s2 ? 1 : 0;
    }
    if (this.m_performPredicates[1]) {
      const e4 = Ks(t2);
      this.m_matrix[1] = e4 ? 0 : -1;
    }
    this.m_matrix[2] = 2, this.m_matrix[3] = -1, this.m_matrix[4] = -1, this.m_matrix[5] = 1, this.m_matrix[6] = -1, this.m_matrix[7] = -1;
  }
  areaPointDisjointPredicates_(e3) {
    this.m_matrix[0] = -1, this.m_matrix[3] = -1, this.m_matrix[6] = 0, this.areaGeomContainsOrDisjointPredicates_(e3, this.m_performPredicates[2] ? 2 : -1, this.m_scl[2], this.m_performPredicates[5] ? 5 : -1, this.m_scl[5]);
  }
  areaPointContainsPredicates_(e3) {
    this.m_matrix[0] = 0, this.m_matrix[2] = 2, this.m_matrix[3] = -1, this.m_matrix[5] = 1, this.m_matrix[6] = -1;
  }
  lineLineDisjointPredicates_(e3, t2) {
    if (this.m_matrix[0] = -1, this.m_matrix[1] = -1, this.m_matrix[3] = -1, this.m_matrix[4] = -1, this.m_performPredicates[2]) {
      const t3 = this.m_scl[2], s2 = "T" === t3 || "F" === t3 || 0 !== e3.calculateLength2D();
      this.m_matrix[2] = s2 ? 1 : 0;
    }
    if (this.m_performPredicates[5]) {
      const t3 = Ks(e3);
      this.m_matrix[5] = t3 ? 0 : -1;
    }
    if (this.m_performPredicates[6]) {
      const e4 = this.m_scl[6], s2 = "T" === e4 || "F" === e4 || 0 !== t2.calculateLength2D();
      this.m_matrix[6] = s2 ? 1 : 0;
    }
    if (this.m_performPredicates[7]) {
      const e4 = Ks(t2);
      this.m_matrix[7] = e4 ? 0 : -1;
    }
  }
  linePointDisjointPredicates_(e3) {
    if (this.m_matrix[0] = -1, this.m_matrix[3] = -1, this.m_performPredicates[2]) {
      const t2 = this.m_scl[2], s2 = "T" === t2 || "F" === t2 || 0 !== e3.calculateLength2D();
      this.m_matrix[2] = s2 ? 1 : 0;
    }
    if (this.m_performPredicates[5]) {
      const t2 = Ks(e3);
      this.m_matrix[5] = t2 ? 0 : -1;
    }
    this.m_matrix[6] = 0;
  }
  pointPointDisjointPredicates_() {
    this.m_matrix[0] = -1, this.m_matrix[2] = 0, this.m_matrix[6] = 0;
  }
  areaAreaPredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorAreaInteriorArea_(e3, t2, s2);
      const r = this.isPredicateKnown_(0);
      n5 &&= r;
    }
    if (this.m_performPredicates[1]) {
      this.interiorAreaBoundaryArea_(e3, t2, 1);
      const s3 = this.isPredicateKnown_(1);
      n5 &&= s3;
    }
    if (this.m_performPredicates[2]) {
      this.interiorAreaExteriorArea_(e3, t2, s2, 2);
      const r = this.isPredicateKnown_(2);
      n5 &&= r;
    }
    if (this.m_performPredicates[3]) {
      this.interiorAreaBoundaryArea_(e3, s2, 3);
      const t3 = this.isPredicateKnown_(3);
      n5 &&= t3;
    }
    if (this.m_performPredicates[4]) {
      this.boundaryAreaBoundaryArea_(e3, t2, s2);
      const r = this.isPredicateKnown_(4);
      n5 &&= r;
    }
    if (this.m_performPredicates[5]) {
      this.boundaryAreaExteriorArea_(e3, t2, s2, 5);
      const r = this.isPredicateKnown_(5);
      n5 &&= r;
    }
    if (this.m_performPredicates[6]) {
      this.interiorAreaExteriorArea_(e3, s2, t2, 6);
      const r = this.isPredicateKnown_(6);
      n5 &&= r;
    }
    if (this.m_performPredicates[7]) {
      this.boundaryAreaExteriorArea_(e3, s2, t2, 7);
      const r = this.isPredicateKnown_(7);
      n5 &&= r;
    }
    return n5;
  }
  areaLinePredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorAreaInteriorLine_(e3, t2, s2);
      const r = this.isPredicateKnown_(0);
      n5 &&= r;
    }
    if (this.m_performPredicates[1]) {
      this.interiorAreaBoundaryLine_(e3, t2, s2, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(1);
      n5 &&= r;
    }
    if (this.m_performPredicates[2]) {
      this.interiorAreaExteriorLine_(e3, t2, s2);
      const r = this.isPredicateKnown_(2);
      n5 &&= r;
    }
    if (this.m_performPredicates[3]) {
      this.boundaryAreaInteriorLine_(e3, t2, s2, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(3);
      n5 &&= r;
    }
    if (this.m_performPredicates[4]) {
      this.boundaryAreaBoundaryLine_(e3, t2, s2, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(4);
      n5 &&= r;
    }
    if (this.m_performPredicates[5]) {
      this.boundaryAreaExteriorLine_(e3, t2, s2);
      const r = this.isPredicateKnown_(5);
      n5 &&= r;
    }
    if (this.m_performPredicates[6]) {
      this.exteriorAreaInteriorLine_(e3, t2);
      const s3 = this.isPredicateKnown_(6);
      n5 &&= s3;
    }
    if (this.m_performPredicates[7]) {
      this.exteriorAreaBoundaryLine_(e3, t2, s2, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(7);
      n5 &&= r;
    }
    return n5;
  }
  lineLinePredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorLineInteriorLine_(e3, t2, s2, this.m_clusterIndexA, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(0);
      n5 &&= r;
    }
    if (this.m_performPredicates[1]) {
      this.interiorLineBoundaryLine_(e3, t2, s2, this.m_clusterIndexA, this.m_clusterIndexB, 1);
      const r = this.isPredicateKnown_(1);
      n5 &&= r;
    }
    if (this.m_performPredicates[2]) {
      this.interiorLineExteriorLine_(e3, t2, s2, 2);
      const r = this.isPredicateKnown_(2);
      n5 &&= r;
    }
    if (this.m_performPredicates[3]) {
      this.interiorLineBoundaryLine_(e3, s2, t2, this.m_clusterIndexB, this.m_clusterIndexA, 3);
      const r = this.isPredicateKnown_(3);
      n5 &&= r;
    }
    if (this.m_performPredicates[4]) {
      this.boundaryLineBoundaryLine_(e3, t2, s2, this.m_clusterIndexA, this.m_clusterIndexB);
      const r = this.isPredicateKnown_(4);
      n5 &&= r;
    }
    if (this.m_performPredicates[5]) {
      this.boundaryLineExteriorLine_(e3, t2, s2, this.m_clusterIndexA, 5);
      const r = this.isPredicateKnown_(5);
      n5 &&= r;
    }
    if (this.m_performPredicates[6]) {
      this.interiorLineExteriorLine_(e3, s2, t2, 6);
      const r = this.isPredicateKnown_(6);
      n5 &&= r;
    }
    if (this.m_performPredicates[7]) {
      this.boundaryLineExteriorLine_(e3, s2, t2, this.m_clusterIndexB, 7);
      const r = this.isPredicateKnown_(7);
      n5 &&= r;
    }
    return n5;
  }
  areaPointPredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorAreaInteriorPoint_(e3, t2);
      const s3 = this.isPredicateKnown_(0);
      n5 &&= s3;
    }
    if (this.m_performPredicates[2]) {
      this.interiorAreaExteriorPoint_(e3, t2);
      const s3 = this.isPredicateKnown_(2);
      n5 &&= s3;
    }
    if (this.m_performPredicates[3]) {
      this.boundaryAreaInteriorPoint_(e3, t2, s2);
      const r = this.isPredicateKnown_(3);
      n5 &&= r;
    }
    if (this.m_performPredicates[5]) {
      this.boundaryAreaExteriorPoint_(e3, t2);
      const s3 = this.isPredicateKnown_(5);
      n5 &&= s3;
    }
    if (this.m_performPredicates[6]) {
      this.exteriorAreaInteriorPoint_(e3, t2);
      const s3 = this.isPredicateKnown_(6);
      n5 &&= s3;
    }
    return n5;
  }
  linePointPredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorLineInteriorPoint_(e3, t2, s2, this.m_clusterIndexA);
      const r = this.isPredicateKnown_(0);
      n5 &&= r;
    }
    if (this.m_performPredicates[2]) {
      this.interiorLineExteriorPoint_(e3, t2, s2, this.m_clusterIndexA);
      const r = this.isPredicateKnown_(2);
      n5 &&= r;
    }
    if (this.m_performPredicates[3]) {
      this.boundaryLineInteriorPoint_(e3, t2, s2, this.m_clusterIndexA);
      const r = this.isPredicateKnown_(3);
      n5 &&= r;
    }
    if (this.m_performPredicates[5]) {
      this.boundaryLineExteriorPoint_(e3, t2, s2, this.m_clusterIndexA);
      const r = this.isPredicateKnown_(5);
      n5 &&= r;
    }
    if (this.m_performPredicates[6]) {
      this.exteriorLineInteriorPoint_(e3, t2, s2);
      const r = this.isPredicateKnown_(6);
      n5 &&= r;
    }
    return n5;
  }
  pointPointPredicates_(e3, t2, s2) {
    let n5 = true;
    if (this.m_performPredicates[0]) {
      this.interiorPointInteriorPoint_(e3, t2, s2);
      const r = this.isPredicateKnown_(0);
      n5 &&= r;
    }
    if (this.m_performPredicates[2]) {
      this.interiorPointExteriorPoint_(e3, t2, s2, 2);
      const r = this.isPredicateKnown_(2);
      n5 &&= r;
    }
    if (this.m_performPredicates[6]) {
      this.interiorPointExteriorPoint_(e3, s2, t2, 6);
      const r = this.isPredicateKnown_(6);
      n5 &&= r;
    }
    return n5;
  }
  interiorAreaInteriorArea_(e3, t2, s2) {
    if (2 === this.m_matrix[0]) return;
    const n5 = this.m_topoGraph.getHalfEdgeFaceParentage(e3);
    0 !== (n5 & t2) && 0 !== (n5 & s2) && (this.m_matrix[0] = 2);
  }
  interiorAreaBoundaryArea_(e3, t2, s2) {
    if (1 === this.m_matrix[s2]) return;
    const n5 = this.m_topoGraph.getHalfEdgeFaceParentage(e3), r = this.m_topoGraph.getHalfEdgeFaceParentage(this.m_topoGraph.getHalfEdgeTwin(e3));
    0 !== (n5 & t2) && 0 !== (r & t2) && (this.m_matrix[s2] = 1);
  }
  interiorAreaExteriorArea_(e3, t2, s2, n5) {
    if (2 === this.m_matrix[n5]) return;
    const r = this.m_topoGraph.getHalfEdgeFaceParentage(e3);
    0 !== (r & t2) && 0 === (r & s2) && (this.m_matrix[n5] = 2);
  }
  boundaryAreaBoundaryArea_(e3, t2, s2) {
    if (1 === this.m_matrix[4]) return;
    const n5 = this.m_topoGraph.getHalfEdgeParentage(e3);
    if (0 === (n5 & t2) || 0 === (n5 & s2)) {
      if (0 !== this.m_matrix[4] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
        const n6 = this.m_topoGraph.getHalfEdgeTo(e3), r = this.m_topoGraph.getClusterParentage(n6);
        if (0 !== (r & t2) && 0 !== (r & s2)) return void (this.m_matrix[4] = 0);
      }
    } else this.m_matrix[4] = 1;
  }
  boundaryAreaExteriorArea_(e3, t2, s2, n5) {
    if (1 === this.m_matrix[n5]) return;
    const r = this.m_topoGraph.getHalfEdgeFaceParentage(e3), i2 = this.m_topoGraph.getHalfEdgeFaceParentage(this.m_topoGraph.getHalfEdgeTwin(e3));
    0 === (r & s2) && 0 === (i2 & s2) && (this.m_matrix[n5] = 1);
  }
  interiorAreaInteriorLine_(e3, t2, s2) {
    if (1 === this.m_matrix[0]) return;
    const n5 = this.m_topoGraph.getHalfEdgeFaceParentage(e3), r = this.m_topoGraph.getHalfEdgeFaceParentage(this.m_topoGraph.getHalfEdgeTwin(e3));
    0 !== (n5 & t2) && 0 !== (r & t2) && (this.m_matrix[0] = 1);
  }
  interiorAreaBoundaryLine_(e3, t2, s2, n5) {
    if (0 !== this.m_matrix[1] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const r = this.m_topoGraph.getHalfEdgeTo(e3), i2 = this.m_topoGraph.getClusterParentage(r);
      if (0 === (i2 & t2)) {
        if (0 !== (this.m_topoGraph.getHalfEdgeFaceParentage(e3) & t2)) {
          const e4 = this.m_topoGraph.getClusterUserIndex(r, n5);
          if (0 !== (i2 & s2) && e4 % 2 != 0) return void (this.m_matrix[1] = 0);
        }
      }
    }
  }
  interiorAreaExteriorLine_(e3, t2, s2) {
    if (2 === this.m_matrix[2]) return;
    0 !== (this.m_topoGraph.getHalfEdgeParentage(e3) & t2) && (this.m_matrix[2] = 2);
  }
  boundaryAreaInteriorLine_(e3, t2, s2, n5) {
    if (1 === this.m_matrix[3]) return;
    const r = this.m_topoGraph.getHalfEdgeParentage(e3);
    if (0 === (r & t2) || 0 === (r & s2)) {
      if (0 !== this.m_matrix[3] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
        const r2 = this.m_topoGraph.getHalfEdgeTo(e3), i2 = this.m_topoGraph.getClusterParentage(r2);
        if (0 !== (i2 & t2)) {
          const e4 = this.m_topoGraph.getClusterUserIndex(r2, n5);
          if (0 !== (i2 & s2) && e4 % 2 == 0) return void (this.m_matrix[3] = 0);
        }
      }
    } else this.m_matrix[3] = 1;
  }
  boundaryAreaBoundaryLine_(e3, t2, s2, n5) {
    if (0 !== this.m_matrix[4] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const r = this.m_topoGraph.getHalfEdgeTo(e3), i2 = this.m_topoGraph.getClusterParentage(r);
      if (0 !== (i2 & t2)) {
        const e4 = this.m_topoGraph.getClusterUserIndex(r, n5);
        if (0 !== (i2 & s2) && e4 % 2 != 0) return void (this.m_matrix[4] = 0);
      }
    }
  }
  boundaryAreaExteriorLine_(e3, t2, s2) {
    if (1 === this.m_matrix[5]) return;
    const n5 = this.m_topoGraph.getHalfEdgeParentage(e3);
    0 !== (n5 & t2) && 0 === (n5 & s2) && (this.m_matrix[5] = 1);
  }
  exteriorAreaInteriorLine_(e3, t2) {
    if (1 === this.m_matrix[6]) return;
    const s2 = this.m_topoGraph.getHalfEdgeFaceParentage(e3), n5 = this.m_topoGraph.getHalfEdgeFaceParentage(this.m_topoGraph.getHalfEdgeTwin(e3));
    0 === (s2 & t2) && 0 === (n5 & t2) && (this.m_matrix[6] = 1);
  }
  exteriorAreaBoundaryLine_(e3, t2, s2, n5) {
    if (0 !== this.m_matrix[7] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const r = this.m_topoGraph.getHalfEdgeTo(e3), i2 = this.m_topoGraph.getClusterParentage(r);
      if (0 === (i2 & t2)) {
        if (0 === (this.m_topoGraph.getHalfEdgeFaceParentage(e3) & t2)) {
          const e4 = this.m_topoGraph.getClusterUserIndex(r, n5);
          if (0 !== (i2 & s2) && e4 % 2 != 0) return void (this.m_matrix[7] = 0);
        }
      }
    }
  }
  interiorLineInteriorLine_(e3, t2, s2, n5, r) {
    if (1 === this.m_matrix[0]) return;
    const i2 = this.m_topoGraph.getHalfEdgeParentage(e3);
    if (0 === (i2 & t2) || 0 === (i2 & s2)) {
      if (0 !== this.m_matrix[0] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
        const i3 = this.m_topoGraph.getHalfEdgeTo(e3), o2 = this.m_topoGraph.getClusterParentage(i3);
        if (0 !== (o2 & t2) && 0 !== (o2 & s2)) {
          const e4 = this.m_topoGraph.getClusterUserIndex(i3, n5), t3 = this.m_topoGraph.getClusterUserIndex(i3, r);
          if (e4 % 2 == 0 && t3 % 2 == 0) return void (this.m_matrix[0] = 0);
        }
      }
    } else this.m_matrix[0] = 1;
  }
  interiorLineBoundaryLine_(e3, t2, s2, n5, r, i2) {
    if (0 !== this.m_matrix[i2] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const o2 = this.m_topoGraph.getHalfEdgeTo(e3), a2 = this.m_topoGraph.getClusterParentage(o2);
      if (0 !== (a2 & t2) && 0 !== (a2 & s2)) {
        const e4 = this.m_topoGraph.getClusterUserIndex(o2, n5), t3 = this.m_topoGraph.getClusterUserIndex(o2, r);
        if (e4 % 2 == 0 && t3 % 2 != 0) return void (this.m_matrix[i2] = 0);
      }
    }
  }
  interiorLineExteriorLine_(e3, t2, s2, n5) {
    if (1 === this.m_matrix[n5]) return;
    const r = this.m_topoGraph.getHalfEdgeParentage(e3);
    0 !== (r & t2) && 0 === (r & s2) && (this.m_matrix[n5] = 1);
  }
  boundaryLineBoundaryLine_(e3, t2, s2, n5, r) {
    if (0 !== this.m_matrix[4] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const i2 = this.m_topoGraph.getHalfEdgeTo(e3), o2 = this.m_topoGraph.getClusterParentage(i2);
      if (0 !== (o2 & t2) && 0 !== (o2 & s2)) {
        const e4 = this.m_topoGraph.getClusterUserIndex(i2, n5), t3 = this.m_topoGraph.getClusterUserIndex(i2, r);
        if (e4 % 2 != 0 && t3 % 2 != 0) return void (this.m_matrix[4] = 0);
      }
    }
  }
  boundaryLineExteriorLine_(e3, t2, s2, n5, r) {
    if (0 !== this.m_matrix[r] && 1 !== this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgePrev(this.m_topoGraph.getHalfEdgeTwin(e3)), this.m_visitedIndex)) {
      const t3 = this.m_topoGraph.getHalfEdgeTo(e3);
      if (0 === (this.m_topoGraph.getClusterParentage(t3) & s2)) {
        if (this.m_topoGraph.getClusterUserIndex(t3, n5) % 2 != 0) return void (this.m_matrix[r] = 0);
      }
    }
  }
  interiorAreaInteriorPoint_(e3, t2) {
    if (0 === this.m_matrix[0]) return;
    if (0 === (this.m_topoGraph.getClusterParentage(e3) & t2)) {
      const s2 = this.m_topoGraph.getClusterChain(e3);
      if (0 !== (this.m_topoGraph.getChainParentage(s2) & t2)) return void (this.m_matrix[0] = 0);
    }
  }
  interiorAreaExteriorPoint_(e3, t2) {
    if (2 === this.m_matrix[2]) return;
    0 !== (this.m_topoGraph.getClusterParentage(e3) & t2) && (this.m_matrix[2] = 2);
  }
  boundaryAreaInteriorPoint_(e3, t2, s2) {
    if (0 === this.m_matrix[3]) return;
    const n5 = this.m_topoGraph.getClusterParentage(e3);
    0 === (n5 & t2) || 0 === (n5 & s2) || (this.m_matrix[3] = 0);
  }
  boundaryAreaExteriorPoint_(e3, t2) {
    if (1 === this.m_matrix[5]) return;
    0 !== (this.m_topoGraph.getClusterParentage(e3) & t2) && (this.m_matrix[5] = 1);
  }
  exteriorAreaInteriorPoint_(e3, t2) {
    if (0 === this.m_matrix[6]) return;
    if (0 === (this.m_topoGraph.getClusterParentage(e3) & t2)) {
      const s2 = this.m_topoGraph.getClusterChain(e3);
      if (0 === (this.m_topoGraph.getChainParentage(s2) & t2)) return void (this.m_matrix[6] = 0);
    }
  }
  interiorLineInteriorPoint_(e3, t2, s2, n5) {
    if (0 === this.m_matrix[0]) return;
    const r = this.m_topoGraph.getClusterParentage(e3);
    if (0 !== (r & t2) && 0 !== (r & s2)) {
      if (this.m_topoGraph.getClusterUserIndex(e3, n5) % 2 == 0) return void (this.m_matrix[0] = 0);
    }
  }
  interiorLineExteriorPoint_(e3, t2, s2, n5) {
    if (1 === this.m_matrix[2]) return;
    if (-1 === this.m_topoGraph.getClusterHalfEdge(e3)) {
      if (0 !== this.m_matrix[2]) {
        if (0 === (this.m_topoGraph.getClusterParentage(e3) & s2)) return void (this.m_matrix[2] = 0);
      }
    } else this.m_matrix[2] = 1;
  }
  boundaryLineInteriorPoint_(e3, t2, s2, n5) {
    if (0 === this.m_matrix[3]) return;
    const r = this.m_topoGraph.getClusterParentage(e3);
    if (0 !== (r & t2) && 0 !== (r & s2)) {
      if (this.m_topoGraph.getClusterUserIndex(e3, n5) % 2 != 0) return void (this.m_matrix[3] = 0);
    }
  }
  boundaryLineExteriorPoint_(e3, t2, s2, n5) {
    if (0 === this.m_matrix[5]) return;
    const r = this.m_topoGraph.getClusterParentage(e3);
    if (0 !== (r & t2) && 0 === (r & s2)) {
      if (this.m_topoGraph.getClusterUserIndex(e3, n5) % 2 != 0) return void (this.m_matrix[5] = 0);
    }
  }
  exteriorLineInteriorPoint_(e3, t2, s2) {
    if (0 === this.m_matrix[6]) return;
    const n5 = this.m_topoGraph.getClusterParentage(e3);
    0 !== (n5 & t2) || 0 === (n5 & s2) || (this.m_matrix[6] = 0);
  }
  interiorPointInteriorPoint_(e3, t2, s2) {
    if (0 === this.m_matrix[0]) return;
    const n5 = this.m_topoGraph.getClusterParentage(e3);
    0 === (n5 & t2) || 0 === (n5 & s2) || (this.m_matrix[0] = 0);
  }
  interiorPointExteriorPoint_(e3, t2, s2, n5) {
    if (0 === this.m_matrix[n5]) return;
    const r = this.m_topoGraph.getClusterParentage(e3);
    0 === (r & t2) || 0 !== (r & s2) || (this.m_matrix[n5] = 0);
  }
  computeMatrixTopoGraphHalfEdges_(e3, t2) {
    let s2 = false;
    const n5 = this.m_topoGraph.getGeometryID(e3), r = this.m_topoGraph.getGeometryID(t2);
    this.m_visitedIndex = this.m_topoGraph.createUserIndexForHalfEdges();
    for (let i2 = this.m_topoGraph.getFirstCluster(); i2 !== gr; i2 = this.m_topoGraph.getNextCluster(i2)) {
      const e4 = this.m_topoGraph.getClusterHalfEdge(i2);
      if (e4 === gr) {
        if (null !== this.m_predicatesCluster && (s2 = this.m_predicatesCluster(i2, n5, r), s2)) break;
        continue;
      }
      let t3 = e4;
      do {
        let e5 = t3;
        if (1 !== this.m_topoGraph.getHalfEdgeUserIndex(e5, this.m_visitedIndex)) do {
          if (s2 = this.m_predicatesHalfEdge(e5, n5, r), s2) break;
          this.m_topoGraph.setHalfEdgeUserIndex(e5, this.m_visitedIndex, 1), e5 = this.m_topoGraph.getHalfEdgeNext(e5);
        } while (e5 !== t3 && !s2);
        if (s2) break;
        t3 = this.m_topoGraph.getHalfEdgeNext(this.m_topoGraph.getHalfEdgeTwin(e5));
      } while (t3 !== e4);
      if (s2) break;
    }
    s2 || this.setRemainingPredicatesToFalse_(), this.m_topoGraph.deleteUserIndexForHalfEdges(this.m_visitedIndex);
  }
  computeMatrixTopoGraphClusters_(e3, t2) {
    let s2 = false;
    const n5 = this.m_topoGraph.getGeometryID(e3), r = this.m_topoGraph.getGeometryID(t2);
    for (let i2 = this.m_topoGraph.getFirstCluster(); i2 !== gr && (s2 = this.m_predicatesCluster(i2, n5, r), !s2); i2 = this.m_topoGraph.getNextCluster(i2)) ;
    s2 || this.setRemainingPredicatesToFalse_();
  }
  setEditShape_(e3, t2) {
    this.m_topoGraph.setEditShape(e3, t2);
  }
  setEditShapeCrackAndCluster_(e3, t2, s2) {
    let n5 = 0;
    if (e3.hasCurves()) {
      const r = new fa(), i2 = e3.getEnvelope2D(s2), o2 = _a(t2.total(), i2);
      n5 = pa(o2, 0), aa(e3, o2, t2.total(), 12e3, r, null, s2), r.clearStitcher(e3);
    }
    ya(e3, t2.add(n5), s2, false, false), e3.filterClosePoints(0, true, true, false, gr);
    for (let r = e3.getFirstGeometry(); r !== gr; r = e3.getNextGeometry(r)) e3.getGeometryType(r) === a.enumPolygon && er(e3, r, -1, false, gr, s2);
    this.setEditShape_(e3, s2);
  }
};
function Nr(e3) {
  const t2 = e3[1], s2 = e3[2], n5 = e3[5];
  e3[1] = e3[3], e3[2] = e3[6], e3[5] = e3[7], e3[3] = t2, e3[6] = s2, e3[7] = n5;
}
function Tr(e3, t2, n5) {
  const r = e3.getGeometryType();
  if (f(r)) {
    const t3 = new Qs2({ vd: e3.getDescription() });
    return t3.addSegment(e3, true), t3;
  }
  if (r === a.enumEnvelope) {
    const n6 = e3, r2 = n3.constructEmpty();
    if (e3.queryEnvelope(r2), r2.height() <= t2 && r2.width() <= t2) {
      const t3 = new se({ vd: e3.getDescription() });
      return n6.getCenter(t3), t3;
    }
    if (r2.height() <= t2 || r2.width() <= t2) {
      const t3 = new Qs2({ vd: e3.getDescription() }), s2 = new se();
      return n6.queryCornerByVal(0, s2), t3.startPathPoint(s2), n6.queryCornerByVal(2, s2), t3.lineToPoint(s2), t3;
    }
    const i2 = new mr({ vd: e3.getDescription() });
    return i2.addEnvelope(n6, false), i2;
  }
  return e3;
}
function Gr(e3) {
  return `${e3[0]}${e3[3]}${e3[6]}${e3[1]}${e3[4]}${e3[7]}${e3[2]}${e3[5]}${e3[8]}`;
}
var Dr = class {
  nullFunc() {
    return b("should not be called"), false;
  }
  constructor(e3, t2, n5, r = false) {
    this.m_bDone = false, this.m_tolerance = 0, this.m_elementHandle = -1, this.m_query = n3.constructEmpty(), this.m_envInter = n3.constructEmpty(), this.m_quadTree = null, this.m_intersector = null, this.m_function = this.nullFunc;
    const i2 = e3.getAccelerators();
    let o2 = null;
    null != i2 && (o2 = r ? i2.getQuadTreeForPaths() : i2.getQuadTree());
    const a2 = t2.getAccelerators();
    let m2 = null;
    if (null != a2 && (m2 = r ? a2.getQuadTreeForPaths() : a2.getQuadTree()), null === o2 && null === m2 && !r) {
      const r2 = e3.getPointCount(), i3 = t2.getPointCount();
      if (r2 > 10 && i3 > 10) {
        const a3 = n3.constructEmpty(), l2 = n3.constructEmpty(), g = n3.constructEmpty();
        e3.queryLooseEnvelope(a3), t2.queryLooseEnvelope(l2), a3.inflateCoords(n5, n5), l2.inflateCoords(n5, n5), g.setCoords({ env2D: a3 }), g.intersect(l2), r2 >= i3 ? o2 = h(e3.getGeometryType()) ? Jt(e3, g) : Kt2(e3, g) : m2 = h(t2.getGeometryType()) ? Jt(t2, g) : Kt2(t2, g);
      }
    }
    this.construct_(e3, o2, t2, m2, n5, r);
  }
  next() {
    if (this.m_bQuadTree) {
      if (this.m_bDone) return false;
      for (; this.m_function(); ) ;
      return !this.m_bDone;
    }
    return !!this.m_intersector && this.m_intersector.next();
  }
  getRedElement() {
    return this.m_bQuadTree ? this.m_bSwapElements ? this.m_quadTree.getElement(this.m_elementHandle) : h(this.m_queryType) ? this.m_bPaths ? this.m_pathIndex : this.m_segIter.getStartPointIndex() : this.m_pointIndex : this.m_bSwapElements ? this.m_intersector.getBlueElement(this.m_intersector.getHandleB()) : this.m_intersector.getRedElement(this.m_intersector.getHandleA());
  }
  getBlueElement() {
    return this.m_bQuadTree ? this.m_bSwapElements ? h(this.m_queryType) ? this.m_bPaths ? this.m_pathIndex : this.m_segIter.getStartPointIndex() : this.m_pointIndex : this.m_quadTree.getElement(this.m_elementHandle) : this.m_bSwapElements ? this.m_intersector.getRedElement(this.m_intersector.getHandleA()) : this.m_intersector.getBlueElement(this.m_intersector.getHandleB());
  }
  getRedEnvelope() {
    return this.m_bPaths || C(""), this.m_bQuadTree ? this.m_bSwapElements ? this.m_quadTree.getElementExtent(this.m_elementHandle) : this.m_query : this.m_bSwapElements ? this.m_intersector.getBlueEnvelope(this.m_intersector.getHandleB()) : this.m_intersector.getRedEnvelope(this.m_intersector.getHandleA());
  }
  getBlueEnvelope() {
    return this.m_bPaths || C(""), this.m_bQuadTree ? this.m_bSwapElements ? this.m_query : this.m_quadTree.getElementExtent(this.m_elementHandle) : this.m_bSwapElements ? this.m_intersector.getRedEnvelope(this.m_intersector.getHandleA()) : this.m_intersector.getBlueEnvelope(this.m_intersector.getHandleB());
  }
  construct_(e3, t2, n5, r, o2, a2) {
    const m2 = n3.constructEmpty(), l2 = n3.constructEmpty();
    e3.queryLooseEnvelope(m2), n5.queryLooseEnvelope(l2), m2.inflateCoords(o2, o2), l2.inflateCoords(o2, o2), this.m_envInter.setCoords({ env2D: m2 }), this.m_envInter.intersect(l2), this.m_multiVertexImplA = e3, this.m_multiVertexImplB = n5;
    const g = e3.getGeometryType(), u = n5.getGeometryType();
    this.m_bPaths = a2, this.m_pathIndex = -1, this.m_pointIndex = -1, this.m_bSwapElements = false, this.m_queryType = a.enumUnknown, this.m_bQuadTree = false, null !== t2 && (this.m_bDone = false, this.m_tolerance = o2, this.m_quadTree = t2, this.m_qtIter = this.m_quadTree.getIteratorForQT(), this.m_bQuadTree = true, this.m_bSwapElements = true, h(u) ? (this.m_queryType = u, this.m_function = this.nextPath_, a2 ? this.m_pathIndex = n5.getPathCount() : this.m_segIter = n5.querySegmentIterator()) : (this.m_queryType = u, this.m_function = this.nextPoint_, this.m_pointIndex = n5.getPointCount())), this.m_bQuadTree || null !== r && (this.m_bDone = false, this.m_tolerance = o2, this.m_quadTree = r, this.m_qtIter = this.m_quadTree.getIteratorForQT(), this.m_bQuadTree = true, this.m_bSwapElements = false, h(g) ? (this.m_queryType = g, this.m_function = this.nextPath_, a2 ? this.m_pathIndex = e3.getPathCount() : this.m_segIter = e3.querySegmentIterator()) : (this.m_queryType = g, this.m_function = this.nextPoint_, this.m_pointIndex = e3.getPointCount())), this.m_bQuadTree || (a2 && h(g) && h(u) ? this.m_intersector = Ut2(e3, n5, o2) : h(g) && h(u) ? (this.m_intersector = Gt2(e3, n5, o2), this.m_bSwapElements = false) : h(g) && !h(u) ? (this.m_intersector = Zt(e3, n5, o2), this.m_bSwapElements = false) : !h(g) && h(u) ? (this.m_intersector = Zt(n5, e3, o2), this.m_bSwapElements = true) : (this.m_intersector = Qt(e3, n5, o2), this.m_bSwapElements = false));
  }
  nextPath_() {
    return this.m_bPaths ? -1 === --this.m_pathIndex ? (this.m_bDone = true, false) : (this.m_bSwapElements ? this.m_multiVertexImplB.queryPathEnvelope(this.m_pathIndex, this.m_query) : this.m_multiVertexImplA.queryPathEnvelope(this.m_pathIndex, this.m_query), this.m_qtIter.resetIterator(this.m_query, this.m_tolerance), this.m_function = this.iterate_, true) : this.m_segIter.nextPath() ? (this.m_function = this.nextSegment_, true) : (this.m_bDone = true, false);
  }
  nextSegment_() {
    if (!this.m_segIter.hasNextSegment()) return this.m_function = this.nextPath_, true;
    const e3 = this.m_segIter.nextSegment(), t2 = new n3();
    return e3.queryLooseEnvelope(t2), !t2.isIntersecting(this.m_envInter) || (this.m_qtIter.resetIterator(e3, this.m_tolerance), this.m_function = this.iterate_, true);
  }
  nextPoint_() {
    if (-1 === --this.m_pointIndex) return this.m_bDone = true, false;
    const e3 = new mi();
    if (this.m_bSwapElements) {
      const t2 = this.m_multiVertexImplB.getXY(this.m_pointIndex);
      e3.setCoordsPoint2D(t2);
    } else {
      const t2 = this.m_multiVertexImplA.getXY(this.m_pointIndex);
      e3.setCoordsPoint2D(t2);
    }
    return !this.m_envInter.contains(e3) || (this.m_qtIter.resetIterator(n3.construct(e3.x, e3.y, e3.x, e3.y), this.m_tolerance), this.m_function = this.iterate_, true);
  }
  iterate_() {
    return this.m_elementHandle = this.m_qtIter.next(), -1 === this.m_elementHandle && (h(this.m_queryType) ? (this.m_function = this.m_bPaths ? this.nextPath_ : this.nextSegment_, true) : (this.m_function = this.nextPoint_, true));
  }
};
function Vr(e3) {
  return 2 === e3 ? 1 : 1 === e3 ? 2 : 128 === e3 ? 64 : 64 === e3 ? 128 : e3;
}
function Fr(e3, t2, n5) {
  let r;
  if (e3 instanceof oc || null === e3) {
    const i2 = n3.constructEmpty();
    i2.setCoords({ pt: t2 }), i2.mergeEnvelope2D(n5), r = Lt(e3, i2, false);
  } else r = e3;
  return r;
}
function Hr(e3, t2, n5) {
  let r;
  if (e3 instanceof oc || null === e3) {
    const i2 = n3.constructEmpty();
    i2.setCoords({ env2D: t2 }), i2.mergeEnvelope2D(n5), r = Lt(e3, i2, false);
  } else r = e3;
  return r;
}
function kr(e3, t2, n5, a2, h2) {
  if (e3.isEmpty() || t2.isEmpty()) return 4 === a2;
  j(e3), j(t2);
  let m2 = e3.getGeometryType(), l2 = t2.getGeometryType();
  if (m2 === a.enumEnvelope) {
    if (l2 === a.enumEnvelope) return Ar(e3, t2, n5, a2);
    if (l2 === a.enumPoint) return Mr(t2, e3, n5, Vr(a2));
  } else if (m2 === a.enumPoint) {
    if (l2 === a.enumEnvelope) return Mr(e3, t2, n5, a2);
    if (l2 === a.enumPoint) return Ur(e3, t2, n5, a2);
  }
  const g = n3.constructEmpty();
  e3.queryEnvelope(g);
  const u = n3.constructEmpty();
  t2.queryEnvelope(u);
  const c = Hr(n5, g, u);
  if (qr(g, u, c)) return 4 === a2;
  let _ = false, d2 = null, p3 = null, f3 = null, x3 = null;
  switch (f(m2) ? (d2 = new Qs2({ vd: e3.getDescription() }), d2.addSegment(e3, true), f3 = d2, m2 = a.enumPolyline) : f3 = e3, f(l2) ? (p3 = new Qs2({ vd: t2.getDescription() }), p3.addSegment(t2, true), x3 = p3, l2 = a.enumPolyline) : x3 = t2, m2 !== a.enumEnvelope && l2 !== a.enumEnvelope ? (f3.getDimension() < x3.getDimension() || m2 === a.enumPoint && l2 === a.enumMultiPoint) && (a2 = Vr(a2)) : m2 !== a.enumPolygon && l2 !== a.enumEnvelope && (a2 = Vr(a2)), m2) {
    case a.enumPolygon:
      switch (l2) {
        case a.enumPolygon:
          _ = Yr(f3, x3, c, a2, h2);
          break;
        case a.enumPolyline:
          _ = Rr(f3, x3, c, a2, h2);
          break;
        case a.enumPoint:
          _ = Xr(f3, x3, c, a2);
          break;
        case a.enumMultiPoint:
          _ = Lr(f3, x3, c, a2);
          break;
        case a.enumEnvelope:
          _ = zr(f3, x3, c, a2, h2);
      }
      break;
    case a.enumPolyline:
      switch (l2) {
        case a.enumPolygon:
          _ = Rr(x3, f3, c, a2, h2);
          break;
        case a.enumPolyline:
          _ = Wr(f3, x3, c, a2, h2);
          break;
        case a.enumPoint:
          _ = jr(f3, x3, c, a2);
          break;
        case a.enumMultiPoint:
          _ = Zr(f3, x3, c, a2);
          break;
        case a.enumEnvelope:
          _ = Kr(f3, x3, c, a2, h2);
      }
      break;
    case a.enumPoint:
      switch (l2) {
        case a.enumPolygon:
          _ = Xr(x3, f3, c, a2);
          break;
        case a.enumPolyline:
          _ = jr(x3, f3, c, a2);
          break;
        case a.enumMultiPoint:
          _ = Jr(x3, f3, c, a2);
      }
      break;
    case a.enumMultiPoint:
      switch (l2) {
        case a.enumPolygon:
          _ = Lr(x3, f3, c, a2);
          break;
        case a.enumPolyline:
          _ = Zr(x3, f3, c, a2);
          break;
        case a.enumMultiPoint:
          _ = Qr(f3, x3, c, a2);
          break;
        case a.enumPoint:
          _ = Jr(f3, x3, c, a2);
          break;
        case a.enumEnvelope:
          _ = $r(f3, x3, c, a2);
      }
      break;
    case a.enumEnvelope:
      switch (l2) {
        case a.enumPolygon:
          _ = zr(x3, f3, c, a2, h2);
          break;
        case a.enumPolyline:
          _ = Kr(x3, f3, c, a2, h2);
          break;
        case a.enumMultiPoint:
          _ = $r(x3, f3, c, a2);
      }
  }
  return _;
}
function Ar(e3, t2, n5, r, i2) {
  if (e3.isEmpty() || t2.isEmpty()) return 4 === r;
  const o2 = n3.constructEmpty();
  e3.queryEnvelope(o2);
  const a2 = n3.constructEmpty();
  t2.queryEnvelope(a2);
  const h2 = Hr(n5, o2, a2);
  switch (r) {
    case 4:
      return qr(o2, a2, h2);
    case 2:
      return go(a2, o2, h2, false);
    case 128:
      return go(a2, o2, h2, true);
    case 1:
      return go(o2, a2, h2, false);
    case 64:
      return go(o2, a2, h2, true);
    case 3:
      return ho(o2, a2, h2);
    case 8:
      return mo(o2, a2, h2);
    case 32:
      return lo(o2, a2, h2);
    case 16:
      return false;
  }
  return false;
}
function Mr(e3, t2, n5, r, i2) {
  if (e3.isEmpty() || t2.isEmpty()) return 4 === r;
  const o2 = e3.getXY(), a2 = n3.constructEmpty();
  t2.queryEnvelope(a2);
  const h2 = Fr(n5, o2, a2);
  switch (r) {
    case 4:
      return Or(o2, a2, h2);
    case 2:
    case 128:
      return ao(o2, a2, h2);
    case 1:
    case 64:
      return false;
    case 3:
      return io(o2, a2, h2);
    case 8:
      return oo(o2, a2, h2);
  }
  return false;
}
function Ur(e3, t2, n5, r, i2) {
  if (e3.isEmpty() || t2.isEmpty()) return 4 === r;
  const o2 = e3.getXY(), a2 = t2.getXY();
  let h2;
  if (n5 instanceof oc || null === n5) {
    const e4 = n3.constructEmpty();
    e4.setCoords({ pt: o2 }), e4.merge(a2), h2 = Lt(n5, e4, false);
  } else h2 = n5;
  switch (r) {
    case 4:
      return no(o2, a2, h2);
    case 2:
    case 128:
      return ro(a2, o2, h2);
    case 1:
    case 64:
      return ro(o2, a2, h2);
    case 3:
      return so(o2, a2, h2);
  }
  return false;
}
function qr(e3, t2, n5) {
  const r = n3.constructEmpty();
  return r.setCoords({ env2D: t2 }), r.inflateCoords(n5, n5), !e3.isIntersecting(r);
}
function Br(e3, t2, s2, n5 = false) {
  const r = e3.getGeometryType(), i2 = t2.getGeometryType();
  if (y(r)) {
    const t3 = e3.getImpl().getAccelerators();
    if (null !== t3) {
      const e4 = t3.getRasterizedGeometry();
      n(null === e4);
    }
  }
  if (y(i2)) {
    const e4 = t2.getImpl().getAccelerators();
    if (null !== e4) {
      const t3 = e4.getRasterizedGeometry();
      n(null === t3);
    }
  }
  return 0;
}
function Or(e3, t2, n5, r) {
  const i2 = n3.constructEmpty();
  return i2.setCoords({ env2D: t2 }), i2.inflateCoords(n5, n5), !i2.contains(e3);
}
function Yr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return ti(e3, t2, s2);
    case 2:
      return ri(t2, e3, s2, r);
    case 128:
      return ii(t2, e3, s2);
    case 1:
      return ri(e3, t2, s2, r);
    case 64:
      return ii(e3, t2, s2);
    case 3:
      return ei(e3, t2, s2, r);
    case 8:
      return si2(e3, t2, s2);
    case 32:
      return ni(e3, t2, s2, r);
  }
  return false;
}
function Rr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return oi2(e3, t2, s2);
    case 1:
      return mi2(e3, t2, s2, r);
    case 64:
      return li(e3, t2, s2);
    case 8:
      return ai2(e3, t2, s2, r);
    case 16:
      return hi2(e3, t2, s2);
  }
  return false;
}
function Xr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return gi(e3, t2, s2);
    case 1:
    case 64:
      return ci(e3, t2, s2);
    case 8:
      return ui(e3, t2, s2);
  }
  return false;
}
function Lr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return _i(e3, t2, s2);
    case 1:
      return fi(e3, t2, s2, false);
    case 64:
      return fi(e3, t2, s2, true);
    case 8:
      return di(e3, t2, s2);
    case 16:
      return pi(e3, t2, s2);
  }
  return false;
}
function zr(e3, t2, s2, n5, r) {
  if (yi(e3, t2, s2)) return 4 === n5;
  if (4 === n5) return false;
  switch (n5) {
    case 2:
      return Si(e3, t2, s2, false);
    case 128:
      return Si(e3, t2, s2, true);
    case 1:
      return Ci(e3, t2, s2, false, r);
    case 64:
      return Ci(e3, t2, s2, true, r);
    case 3:
      return xi(e3, t2, s2, r);
    case 8:
      return Pi(e3, t2, s2, r);
    case 32:
      return Ei(e3, t2, s2, r);
    case 16:
      return false;
  }
  return false;
}
function Wr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return bi(e3, t2, s2);
    case 2:
      return Ti(t2, e3, s2, r);
    case 128:
      return Gi(t2, e3, s2, r);
    case 1:
      return Ti(e3, t2, s2, r);
    case 64:
      return Gi(e3, t2, s2, r);
    case 3:
      return Ii(e3, t2, s2, r);
    case 8:
      return wi(e3, t2, s2, r);
    case 32:
      return Ni(e3, t2, s2, r);
    case 16:
      return vi(e3, t2, s2, r);
  }
  return false;
}
function jr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return Di(e3, t2, s2);
    case 1:
    case 64:
      return Fi(e3, t2, s2);
    case 8:
      return Vi(e3, t2, s2);
  }
  return false;
}
function Zr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return Hi(e3, t2, s2);
    case 1:
    case 64:
      return Mi(e3, t2, s2);
    case 8:
      return ki(e3, t2, s2);
    case 16:
      return Ai(e3, t2, s2);
  }
  return false;
}
function Kr(e3, t2, s2, n5, r) {
  if (qi(e3, t2, s2)) return 4 === n5;
  if (4 === n5) return false;
  switch (n5) {
    case 2:
      return Oi(e3, t2, s2, false);
    case 128:
      return Oi(e3, t2, s2, true);
    case 1:
    case 64:
    case 32:
      return false;
    case 3:
      return Ui(e3, t2, s2);
    case 8:
      return Bi(e3, t2, s2, r);
    case 16:
      return Yi(e3, t2, s2);
  }
  return false;
}
function Qr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return Xi(e3, t2, s2);
    case 2:
    case 128:
      return zi(t2, e3, s2);
    case 1:
    case 64:
      return zi(e3, t2, s2);
    case 3:
      return Ri(e3, t2, s2);
    case 32:
      return Li(e3, t2, s2);
  }
  return false;
}
function Jr(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return ji(e3, t2, s2);
    case 2:
    case 128:
      return Zi(e3, t2, s2);
    case 1:
    case 64:
      return Ki(e3, t2, s2);
    case 3:
      return Wi(e3, t2, s2);
  }
  return false;
}
function $r(e3, t2, s2, n5, r) {
  switch (n5) {
    case 4:
      return Ji(e3, t2, s2);
    case 2:
      return eo(e3, t2, s2, false);
    case 128:
      return eo(e3, t2, s2, true);
    case 1:
    case 64:
      return false;
    case 3:
      return Qi(e3, t2, s2);
    case 8:
      return $i(e3, t2, s2);
    case 16:
      return to(e3, t2, s2);
  }
  return false;
}
function ei(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), !ho(i2, o2, n5)) return false;
  if (Br(e3, t2), yo(e3, t2, n5)) return true;
  const a2 = e3.calculateLength2D(), h2 = t2.calculateLength2D(), m2 = Math.max(e3.getPointCount(), t2.getPointCount());
  if (Math.abs(a2 - h2) > 4 * m2 * n5) return false;
  if (e3.hasNonLinearSegments() || t2.hasNonLinearSegments()) {
    return sr(e3, t2, n5, "**F**FFF*", r, false);
  }
  return So(e3, t2, n5, true);
}
function ti(e3, t2, s2, n5) {
  Br(e3, t2, s2, true);
  return 1 === uo(e3, t2, s2, true);
}
function si2(e3, t2, s2, n5) {
  return Br(e3, t2), Go(e3, t2, s2, null);
}
function ni(e3, t2, s2, n5) {
  return Br(e3, t2), Do(e3, t2, s2, n5);
}
function ri(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!po(i2, o2, n5) && (Br(e3, t2), Vo(e3, t2, n5, r));
}
function ii(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!po(i2, o2, n5) && (Br(e3, t2), 2 === uo(e3, t2, n5, false));
}
function oi2(e3, t2, s2, n5) {
  Br(e3, t2, s2, true);
  return 1 === uo(e3, t2, s2, true);
}
function ai2(e3, t2, s2, n5) {
  return Br(e3, t2), Fo(e3, t2, s2, n5);
}
function hi2(e3, t2, s2, n5) {
  return Br(e3, t2), Ho(e3, t2, s2, null);
}
function mi2(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!po(i2, o2, n5) && (Br(e3, t2), ko(e3, t2, n5, r));
}
function li(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!po(i2, o2, n5) && (Br(e3, t2), 2 === uo(e3, t2, n5, false));
}
function gi(e3, t2, s2, n5) {
  return 0 === Xo(e3, t2, s2);
}
function ui(e3, t2, s2, n5) {
  return Mo(e3, t2.getXY(), s2);
}
function ci(e3, t2, s2, n5) {
  return Ao(e3, t2.getXY(), s2);
}
function _i(e3, t2, s2, n5, r) {
  Br(e3, t2);
  return 1 === co(e3, t2, s2);
}
function di(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = n3.constructEmpty();
  e3.queryEnvelope(i2), i2.inflateCoords(n5, n5);
  const o2 = new mi();
  let a2 = false;
  const h2 = e3.getImpl(), m2 = new mr();
  let l2 = e3, g = false;
  for (let s2 = 0; s2 < t2.getPointCount(); s2++) {
    if (t2.queryXY(s2, o2), i2.contains(o2)) {
      const e4 = Lo(l2, o2, n5);
      if (2 === e4) a2 = true;
      else if (1 === e4) return false;
    }
    g || (!Wn(e3, t2.getPointCount() - 1) || null !== h2.getAccelerators() && null !== h2.getAccelerators().getQuadTree() ? l2 = e3 : (e3.copyTo(m2), m2.getImpl().buildQuadTreeAccelerator(1), l2 = m2), g = true);
  }
  return !!a2;
}
function pi(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = new n3(), o2 = new n3(), a2 = new n3();
  e3.queryEnvelope(i2), t2.queryEnvelope(a2), o2.setCoords({ env2D: i2 }), o2.inflateCoords(n5, n5);
  let h2 = false, m2 = false;
  const l2 = new mi(), g = e3.getImpl(), u = new mr();
  let c = e3, _ = false;
  for (let s2 = 0; s2 < t2.getPointCount(); s2++) {
    if (t2.queryXY(s2, l2), o2.contains(l2)) {
      const e4 = Lo(c, l2, n5);
      0 === e4 ? m2 = true : 1 === e4 && (h2 = true);
    } else m2 = true;
    if (h2 && m2) return true;
    _ || (!Wn(e3, t2.getPointCount() - 1) || null !== g.getAccelerators() && null !== g.getAccelerators().getQuadTree() ? c = e3 : (e3.copyTo(u), u.getImpl().buildQuadTreeAccelerator(1), c = u), _ = true);
  }
  return false;
}
function fi(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(a2), !po(o2, a2, n5)) return false;
  Br(e3, t2);
  let h2 = false;
  const m2 = new mi(), l2 = e3.getImpl(), g = new mr();
  let u = e3, c = false;
  for (let s2 = 0; s2 < t2.getPointCount(); s2++) {
    if (t2.queryXY(s2, m2), !o2.contains(m2)) return false;
    const i3 = Lo(u, m2, n5);
    if (1 === i3) h2 = true;
    else if (0 === i3) return false;
    if (r && 2 === i3) return false;
    c || (!Wn(e3, t2.getPointCount() - 1) || null !== l2.getAccelerators() && null !== l2.getAccelerators().getQuadTree() ? u = e3 : (e3.copyTo(g), g.getImpl().buildQuadTreeAccelerator(1), u = g), c = true);
  }
  return h2;
}
function xi(e3, t2, n5, r) {
  const i2 = new n3(), o2 = new n3();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), !ho(i2, o2, n5)) return false;
  const a2 = new mr();
  return a2.addEnvelope(t2, false), ei(e3, a2, n5, r);
}
function yi(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), po(o2, i2, n5)) return false;
  return 0 === Lo(e3, o2.getLowerLeft(), 0) && (!o2.contains(e3.getXY(0)) && !To(e3, o2, n5));
}
function Pi(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = new n3(), o2 = new n3();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), po(o2, i2, n5)) return false;
  if (o2.height() <= n5 || o2.width() <= n5) return false;
  const a2 = new mr();
  return a2.addEnvelope(t2, false), Go(e3, a2, n5, r);
}
function Ei(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = new n3(), o2 = new n3();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), po(o2, i2, n5)) return false;
  if (o2.height() <= n5 || o2.width() <= n5) return false;
  const a2 = new mr();
  return a2.addEnvelope(t2, false), Do(e3, a2, n5, r);
}
function Si(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  return e3.queryEnvelope(o2), t2.queryEnvelope(a2), r ? fo(a2, o2, n5) : po(a2, o2, n5);
}
function Ci(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(a2), !po(o2, a2, n5)) return false;
  Br(e3, t2);
  const h2 = new mr();
  return h2.addEnvelope(t2, false), r ? 2 === uo(e3, h2, n5, false) : Vo(e3, h2, n5, i2);
}
function Ii(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), !ho(i2, o2, n5)) return false;
  if (Br(e3, t2), yo(e3, t2, n5)) return true;
  if (e3.hasNonLinearSegments() || t2.hasNonLinearSegments()) {
    return sr(e3, t2, n5, "**F**FFF*", r, false);
  }
  return So(e3, t2, n5, false);
}
function bi(e3, t2, s2, n5) {
  Br(e3, t2);
  const r = e3.getImpl(), i2 = t2.getImpl();
  return !new Dr(r, i2, s2, true).next() || !Io(e3, t2, s2);
}
function wi(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = [], o2 = bo(e3, t2, n5, i2);
  if (-2 === o2) {
    const i3 = n3.constructEmpty(), o3 = n3.constructEmpty(), a3 = n3.constructEmpty();
    let h3, m3;
    if (e3.queryEnvelope(i3), t2.queryEnvelope(o3), i3.inflateCoords(1e3 * n5, 1e3 * n5), o3.inflateCoords(1e3 * n5, 1e3 * n5), a3.setCoords({ env2D: i3 }), a3.intersect(o3), e3.getPointCount() > 10) {
      if (h3 = f2(e3, a3, n5, 0, r), h3.isEmpty()) return false;
    } else h3 = e3;
    if (t2.getPointCount() > 10) {
      if (m3 = f2(t2, a3, n5, 0, r), m3.isEmpty()) return false;
    } else m3 = t2;
    return sr(h3, m3, n5, "F********", r, false);
  }
  if (0 !== o2) return false;
  const a2 = new De();
  for (let s2 = 0; s2 < i2.length; s2 += 2) {
    const e4 = i2[s2], t3 = i2[s2 + 1];
    a2.addXY(e4, t3);
  }
  const h2 = e3.getBoundary(), m2 = t2.getBoundary();
  return h2.addPoints(m2, 0, m2.getPointCount()), !h2.isEmpty() && zi(h2, a2, n5);
}
function vi(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = [], o2 = bo(e3, t2, n5, i2);
  if (-2 === o2) {
    const i3 = n3.constructEmpty(), o3 = n3.constructEmpty(), a3 = n3.constructEmpty();
    let h3, m3;
    if (e3.queryEnvelope(i3), t2.queryEnvelope(o3), i3.inflateCoords(1e3 * n5, 1e3 * n5), o3.inflateCoords(1e3 * n5, 1e3 * n5), a3.setCoords({ env2D: i3 }), a3.intersect(o3), e3.getPointCount() > 10) {
      if (h3 = f2(e3, a3, n5, 0, r), h3.isEmpty()) return false;
    } else h3 = e3;
    if (t2.getPointCount() > 10) {
      if (m3 = f2(t2, a3, n5, 0, r), m3.isEmpty()) return false;
    } else m3 = t2;
    return sr(h3, m3, n5, "0********", r, false);
  }
  if (0 !== o2) return false;
  const a2 = new De();
  for (let s2 = 0; s2 < i2.length; s2 += 2) {
    const e4 = i2[s2], t3 = i2[s2 + 1];
    a2.addXY(e4, t3);
  }
  const h2 = e3.getBoundary(), m2 = t2.getBoundary();
  return h2.addPoints(m2, 0, m2.getPointCount()), !!h2.isEmpty() || !zi(h2, a2, n5);
}
function Ni(e3, t2, n5, r) {
  Br(e3, t2);
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  e3.queryEnvelope(i2), t2.queryEnvelope(o2);
  const a2 = xo(i2, o2, n5), h2 = xo(o2, i2, n5), m2 = e3.hasNonLinearSegments(), l2 = t2.hasNonLinearSegments(), g = bo(e3, t2, n5, null);
  if (-1 === g) return false;
  if (1 === g) {
    if (a2 && h2) return true;
    if (!m2 && !l2) return a2 && !h2 ? !Co(t2, e3, n5, false) : h2 && !a2 ? !Co(e3, t2, n5, false) : !Co(e3, t2, n5, false) && !Co(t2, e3, n5, false);
  }
  const u = n3.constructEmpty(), c = n3.constructEmpty(), _ = n3.constructEmpty();
  let d2, p3;
  u.setCoords({ env2D: i2 }), u.inflateCoords(1e3 * n5, 1e3 * n5), c.setCoords({ env2D: o2 }), c.inflateCoords(1e3 * n5, 1e3 * n5), _.setCoords({ env2D: u }), _.intersect(c);
  let f3 = "";
  if (f3 += "1*", a2) {
    if (t2.getPointCount() > 10) {
      if (p3 = f2(t2, _, n5, 0, r), p3.isEmpty()) return false;
    } else p3 = t2;
    f3 += "****";
  } else p3 = t2, f3 += "T***";
  if (h2) {
    if (e3.getPointCount() > 10) {
      if (d2 = f2(e3, _, n5, 0, r), d2.isEmpty()) return false;
    } else d2 = e3;
    f3 += "***";
  } else d2 = e3, f3 += "T**";
  return sr(d2, p3, n5, f3, r, false);
}
function Ti(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), !po(i2, o2, n5)) return false;
  if (Br(e3, t2), e3.hasNonLinearSegments() || t2.hasNonLinearSegments()) {
    return sr(e3, t2, n5, "******FF*", r, false);
  }
  return Co(t2, e3, n5, false);
}
function Gi(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), !po(i2, o2, n5)) return false;
  Br(e3, t2);
  return sr(e3, t2, n5, "T**FF*FF*", r, false);
}
function Di(e3, t2, s2, n5) {
  Br(e3, t2);
  return !vo(e3, t2.getXY(), s2);
}
function Vi(e3, t2, s2, n5) {
  Br(e3, t2);
  return qo(e3, t2.getXY(), s2);
}
function Fi(e3, t2, s2, n5) {
  Br(e3, t2);
  return No(e3, t2.getXY(), s2);
}
function Hi(e3, t2, s2, n5) {
  return Br(e3, t2), !wo(e3, t2, s2, false);
}
function ki(e3, t2, s2, n5) {
  Br(e3, t2);
  const r = e3.getImpl(), i2 = t2.getImpl(), o2 = new De(), a2 = new Dr(r, i2, s2, false), h2 = r.querySegmentIterator();
  let m2 = false;
  for (; a2.next(); ) {
    const e4 = a2.getRedElement(), t3 = a2.getBlueElement();
    h2.resetToVertex(e4, -1);
    const n6 = h2.nextSegment(), r2 = i2.getXY(t3);
    n6.isIntersectingPoint(r2, s2) && (m2 = true, o2.addPoint2D(r2));
  }
  if (!m2) return false;
  const l2 = e3.getBoundary();
  return !l2.isEmpty() && zi(l2, o2, s2);
}
function Ai(e3, t2, s2, n5) {
  Br(e3, t2);
  const r = e3.getImpl(), i2 = t2.getImpl(), o2 = i2.getPointCount(), a2 = Yt(o2, false), h2 = new Dr(r, i2, s2, false), m2 = r.querySegmentIterator();
  let l2 = false;
  for (; h2.next(); ) {
    const e4 = h2.getRedElement(), t3 = h2.getBlueElement();
    m2.resetToVertex(e4, -1);
    const n6 = m2.nextSegment(), r2 = i2.getXY(t3);
    n6.isIntersectingPoint(r2, s2) && (l2 = true, a2[t3] = true);
  }
  if (!l2) return false;
  let g = false;
  for (let _ = 0; _ < o2; _++) if (!a2[_]) {
    g = true;
    break;
  }
  if (!g) return false;
  const u = e3.getBoundary();
  if (u.isEmpty()) return true;
  const c = new De();
  for (let _ = 0; _ < o2; _++) a2[_] && c.addPoint2D(i2.getXY(_));
  return !zi(u, c, s2);
}
function Mi(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(a2), !po(o2, a2, n5)) return false;
  Br(e3, t2);
  const h2 = wo(e3, t2, n5, true);
  if (!h2) return h2;
  const m2 = e3.getBoundary();
  return m2.isEmpty() ? h2 : !zi(m2, t2, n5);
}
function Ui(e3, t2, n5, r) {
  const i2 = new n3(), o2 = new n3();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !(o2.height() > n5 && o2.width() > n5) && ho(i2, o2, n5);
}
function qi(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  e3.queryEnvelope(i2), t2.queryEnvelope(o2);
  const a2 = Bo(o2, i2, n5);
  return 0 === a2 ? !To(e3, o2, n5) : 4 === a2;
}
function Bi(e3, t2, n5, r) {
  const o2 = new n3(), h2 = new n3();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(h2), h2.height() <= n5 || h2.width() <= n5) return false;
  const m2 = new n3(), l2 = new n3();
  if (m2.setCoords({ env2D: h2 }), l2.setCoords({ env2D: h2 }), m2.inflateCoords(n5, n5), l2.inflateCoords(-n5, -n5), l2.containsEnvelope(o2) || !o2.isIntersecting(m2)) return false;
  const g = e3.getImpl().querySegmentIterator();
  g.stripAttributes();
  const u = e3.getImpl().getAccelerators();
  let c = null, _ = null;
  null !== u && (c = u.getQuadTree(), null !== c && (_ = c.getIterator(h2, n5))), _ || g.nextPath() || b("relational_operations");
  let d2 = false, p3 = null;
  const f3 = new mi(), x3 = new mi(), y2 = e3.hasNonLinearSegments();
  let P3 = false;
  for (; ; ) {
    if (null !== _) {
      const e4 = _.next();
      if (-1 === e4) break;
      g.resetToVertex(c.getElement(e4), -1), p3 = g.nextSegment();
    } else {
      for (; !g.hasNextSegment() && g.nextPath(); ) ;
      if (!g.hasNextSegment()) break;
      p3 = g.nextSegment();
    }
    if (y2 && p3.getGeometryType() !== a.enumLine) {
      const e4 = new n3();
      if (p3.queryEnvelope(e4), l2.containsEnvelope(e4)) return false;
      if (m2.isIntersecting(e4)) {
        P3 = true;
        break;
      }
    } else {
      f3.assign(p3.getStartXY()), x3.assign(p3.getEndXY());
      let e4 = l2.clipLine(f3, x3);
      if (0 !== e4) return false;
      d2 || (e4 = m2.clipLine(f3, x3), 0 !== e4 && (d2 = true));
    }
  }
  if (!P3) return d2;
  const E2 = new mr();
  return E2.addEnvelope(h2, false), ai2(E2, e3, n5, r);
}
function Oi(e3, t2, n5, r, o2) {
  const h2 = n3.constructEmpty(), m2 = n3.constructEmpty();
  if (e3.queryEnvelope(h2), t2.queryEnvelope(m2), m2.height() <= n5 || m2.width() <= n5) return false;
  if (r) return fo(m2, h2, n5);
  if (!po(m2, h2, n5)) return false;
  const l2 = n3.constructEmpty();
  l2.setCoords({ env2D: m2 }), l2.inflateCoords(-n5, -n5);
  const g = n3.constructEmpty();
  if (g.setCoords({ env2D: m2 }), g.inflateCoords(n5, n5), l2.containsEnvelope(h2)) return true;
  const u = e3.getImpl().querySegmentIterator();
  u.stripAttributes(), u.nextPath() || b("relational_operations");
  let c, _, d2, p3, f3, x3, y2 = false;
  const P3 = e3.hasNonLinearSegments();
  for (P3 && (d2 = new fm(), p3 = new fm(), f3 = new fm(), x3 = new fm(), l2.querySide(0, d2), l2.querySide(1, p3), l2.querySide(2, f3), l2.querySide(3, x3)); ; ) {
    for (; !u.hasNextSegment() && u.nextPath(); ) ;
    if (!u.hasNextSegment()) break;
    const e4 = u.nextSegment();
    if (P3 && e4.getGeometryType() !== a.enumLine) {
      if (e4.isIntersecting(d2, n5)) {
        y2 = true;
        break;
      }
      if (e4.isIntersecting(p3, n5)) {
        y2 = true;
        break;
      }
      if (e4.isIntersecting(f3, n5)) {
        y2 = true;
        break;
      }
      if (e4.isIntersecting(x3, n5)) {
        y2 = true;
        break;
      }
    } else {
      c = e4.getStartXY(), _ = e4.getEndXY();
      if (0 !== l2.clipLine(c, _)) {
        y2 = true;
        break;
      }
    }
  }
  return y2;
}
function Yi(e3, t2, n5, r) {
  const o2 = new n3(), a2 = new n3();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(a2), a2.height() <= n5 || a2.width() <= n5) return false;
  const h2 = new n3();
  if (h2.setCoords({ env2D: a2 }), h2.inflateCoords(n5, n5), h2.containsEnvelope(o2)) return false;
  const m2 = true, g = new n3();
  if (g.setCoords({ env2D: a2 }), g.inflateCoords(-n5, -n5), !g.isIntersecting(o2)) return false;
  const u = e3.getImpl().querySegmentIterator();
  u.stripAttributes();
  const c = e3.getImpl().getAccelerators();
  let _ = null, d2 = null;
  if (null !== c && (_ = c.getQuadTree(), null !== _ && (d2 = _.getIterator(a2, n5))), !d2) {
    const e4 = u.nextPath();
    n(e4);
  }
  let p3 = false, f3 = null;
  const x3 = new mi(), y2 = new mi();
  let P3 = null, E2 = null, S2 = null, C2 = null;
  for (e3.hasNonLinearSegments() && (P3 = new fm(), E2 = new fm(), S2 = new fm(), C2 = new fm(), g.querySide(0, P3), g.querySide(1, E2), g.querySide(2, S2), g.querySide(3, C2)); ; ) {
    if (null !== d2) {
      const e4 = d2.next();
      if (-1 === e4) break;
      u.resetToVertex(_.getElement(e4), -1), f3 = u.nextSegment();
    } else {
      for (; !u.hasNextSegment() && u.nextPath(); ) ;
      if (!u.hasNextSegment()) break;
      f3 = u.nextSegment();
    }
    if (f3.getGeometryType() === a.enumLine) {
      x3.assign(f3.getStartXY()), y2.assign(f3.getEndXY());
      if (0 !== g.clipLine(x3, y2)) {
        p3 = true;
        break;
      }
    } else {
      if (P3.isIntersecting(f3, n5)) {
        p3 = true;
        break;
      }
      if (E2.isIntersecting(f3, n5)) {
        p3 = true;
        break;
      }
      if (S2.isIntersecting(f3, n5)) {
        p3 = true;
        break;
      }
      if (C2.isIntersecting(f3, n5)) {
        p3 = true;
        break;
      }
    }
  }
  return p3 && m2;
}
function Ri(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!ho(i2, o2, n5) && (!!Po(e3, t2, n5) || Eo(e3, t2, n5, false, true, false));
}
function Xi(e3, t2, s2, n5) {
  const r = e3, i2 = t2, o2 = new Dr(r, i2, s2, false), a2 = s2 * s2, h2 = new mi(), m2 = new mi();
  for (; o2.next(); ) {
    const e4 = o2.getRedElement(), t3 = o2.getBlueElement();
    if (r.queryXY(e4, h2), i2.queryXY(t3, m2), mi.sqrDistance(h2, m2) <= a2) return false;
  }
  return true;
}
function Li(e3, t2, s2, n5) {
  return Eo(e3, t2, s2, false, false, true);
}
function zi(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !!po(i2, o2, n5) && Eo(t2, e3, n5, true, false, false);
}
function Wi(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), ho(i2, o2, n5);
}
function ji(e3, t2, s2, n5) {
  return Uo(e3, t2.getXY(), s2);
}
function Zi(e3, t2, s2, n5) {
  return Wi(e3, t2, s2);
}
function Ki(e3, t2, s2, n5) {
  return !ji(e3, t2, s2);
}
function Qi(e3, t2, n5, r) {
  const i2 = new n3(), o2 = new n3();
  return e3.queryEnvelope(i2), t2.queryEnvelope(o2), !(o2.height() > n5 || o2.width() > n5) && ho(i2, o2, n5);
}
function Ji(e3, t2, n5, r) {
  const i2 = n3.constructEmpty(), o2 = n3.constructEmpty();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), po(o2, i2, n5)) return false;
  const a2 = n3.constructEmpty();
  a2.setCoords({ env2D: o2 }), a2.inflateCoords(n5, n5);
  const h2 = new mi();
  for (let s2 = 0; s2 < e3.getPointCount(); s2++) if (e3.queryXY(s2, h2), a2.contains(h2)) return false;
  return true;
}
function $i(e3, t2, n5, r) {
  const i2 = new n3(), o2 = new n3(), a2 = new n3();
  if (t2.queryEnvelope(i2), i2.height() <= n5 || i2.width() <= n5) return false;
  o2.setCoords({ env2D: i2 }), a2.setCoords({ env2D: i2 }), o2.inflateCoords(n5, n5), a2.inflateCoords(-n5, -n5);
  const h2 = new mi();
  let m2 = false;
  for (let s2 = 0; s2 < e3.getPointCount(); s2++) if (e3.queryXY(s2, h2), o2.contains(h2)) {
    if (a2.containsExclusive(h2)) return false;
    m2 = true;
  }
  return m2;
}
function eo(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty(), a2 = n3.constructEmpty();
  if (e3.queryEnvelope(o2), t2.queryEnvelope(a2), a2.height() <= n5 || a2.width() <= n5) return false;
  if (r) return fo(a2, o2, n5);
  if (!po(a2, o2, n5)) return false;
  let h2 = false;
  const m2 = n3.constructEmpty(), l2 = n3.constructEmpty();
  m2.setCoords({ env2D: a2 }), l2.setCoords({ env2D: a2 }), m2.inflateCoords(-n5, -n5), l2.inflateCoords(n5, n5);
  const g = new mi();
  for (let s2 = 0; s2 < e3.getPointCount(); s2++) {
    if (e3.queryXY(s2, g), !l2.contains(g)) return false;
    m2.containsExclusive(g) && (h2 = true);
  }
  return h2;
}
function to(e3, t2, n5, r) {
  const i2 = new n3(), o2 = new n3();
  if (e3.queryEnvelope(i2), t2.queryEnvelope(o2), po(o2, i2, n5)) return false;
  if (o2.height() <= n5 || o2.width() <= n5) return false;
  const a2 = new n3(), h2 = new n3();
  a2.setCoords({ env2D: o2 }), a2.inflateCoords(-n5, -n5), h2.setCoords({ env2D: o2 }), h2.inflateCoords(n5, n5);
  const m2 = new mi();
  let l2 = false, g = false;
  for (let s2 = 0; s2 < e3.getPointCount(); s2++) if (e3.queryXY(s2, m2), !l2 && a2.containsExclusive(m2) && (l2 = true), g || h2.contains(m2) || (g = true), l2 && g) return true;
  return false;
}
function so(e3, t2, s2, n5) {
  return mi.sqrDistance(e3, t2) <= s2 * s2;
}
function no(e3, t2, s2, n5) {
  return mi.sqrDistance(e3, t2) > s2 * s2;
}
function ro(e3, t2, s2, n5) {
  return so(e3, t2, s2);
}
function io(e3, t2, n5, r) {
  const i2 = new n3();
  return i2.setCoords({ pt: e3 }), ho(i2, t2, n5);
}
function oo(e3, t2, n5, r) {
  if (t2.height() <= n5 || t2.width() <= n5) return false;
  const i2 = new n3(), o2 = new n3();
  return i2.setCoords({ env2D: t2 }), i2.inflateCoords(n5, n5), !!i2.contains(e3) && (o2.setCoords({ env2D: t2 }), o2.inflateCoords(-n5, -n5), !o2.containsExclusive(e3));
}
function ao(e3, t2, n5, r) {
  if (t2.height() <= n5 || t2.width() <= n5) return false;
  const i2 = n3.constructEmpty();
  i2.setCoords({ env2D: t2 }), i2.inflateCoords(-n5, -n5);
  return i2.containsExclusive(e3);
}
function ho(e3, t2, s2, n5) {
  return po(e3, t2, s2) && po(t2, e3, s2);
}
function mo(e3, t2, n5, r) {
  if (e3.height() <= n5 || e3.width() <= n5 || t2.height() <= n5 || t2.width() <= n5) return false;
  const i2 = new n3();
  return i2.setCoords({ env2D: e3 }), i2.inflateCoords(-n5, -n5), i2.intersect(t2), !(!i2.isEmpty() && i2.height() > n5 && i2.width() > n5) && (i2.setCoords({ env2D: e3 }), i2.inflateCoords(n5, n5), i2.intersect(t2), !i2.isEmpty());
}
function lo(e3, t2, n5, r) {
  if (e3.height() <= n5 || e3.width() <= n5 || t2.height() <= n5 || t2.width() <= n5) return false;
  if (po(e3, t2, n5)) return false;
  if (po(t2, e3, n5)) return false;
  const i2 = new n3();
  return i2.setCoords({ env2D: e3 }), i2.inflateCoords(-n5, -n5), i2.intersect(t2), !i2.isEmpty() && (i2.height() > n5 || i2.width() > n5);
}
function go(e3, t2, n5, r, i2) {
  if (e3.height() <= n5 || e3.width() <= n5) return false;
  if (r) return fo(e3, t2, n5);
  if (!po(e3, t2, n5)) return false;
  const o2 = n3.constructEmpty();
  return o2.setCoords({ env2D: e3 }), o2.inflateCoords(-n5, -n5), o2.intersect(t2), !o2.isEmpty();
}
function uo(e3, t2, n5, r, o2) {
  const a2 = new mi(), h2 = new mi(), m2 = n3.constructEmpty(), l2 = n3.constructEmpty(), g = e3.getImpl(), u = t2.getImpl(), c = u.getGeometryType(), _ = new Dr(g, u, n5, true);
  if (!_.next()) return 1;
  if (Io(e3, t2, n5)) return r ? 4 : 0;
  const d2 = new mr();
  let p3 = e3;
  const f3 = new mr();
  let x3 = null;
  c === a.enumPolygon && (x3 = t2);
  const y2 = c === a.enumPolygon ? Yt(g.getPathCount(), false) : [], P3 = Yt(u.getPathCount(), false);
  let E2 = false, S2 = false, C2 = false, I4 = false, b2 = false, w2 = false;
  do {
    if (C2 && b2 || I4 && w2) break;
    if (C2 && I4) break;
    const s2 = _.getRedElement(), o3 = _.getBlueElement();
    if (!P3[o3] && (h2.assign(t2.getXY(t2.getPathStart(o3))), m2.setCoords({ env2D: _.getRedEnvelope() }), m2.inflateCoords(n5, n5), m2.contains(h2))) {
      if (0 !== Lo(p3, h2, 0)) {
        if (I4 = true, r) return 4;
      } else w2 = true;
      P3[o3] = true;
    }
    if (c === a.enumPolygon && !y2[s2] && (a2.assign(e3.getXY(e3.getPathStart(s2))), l2.setCoords({ env2D: _.getBlueEnvelope() }), l2.inflateCoords(n5, n5), l2.contains(a2))) {
      if (0 !== Lo(x3, a2, 0)) {
        if (C2 = true, r) return 4;
      } else b2 = true;
      y2[s2] = true;
    }
    if (E2 || (!Wn(e3, t2.getPathCount() - 1) || null !== g.getAccelerators() && null !== g.getAccelerators().getQuadTree() ? p3 = e3 : (e3.copyTo(d2), d2.getImpl().buildQuadTreeAccelerator(1), p3 = d2), E2 = true), c === a.enumPolygon && !S2) {
      const s3 = t2;
      !Wn(s3, e3.getPathCount() - 1) || null !== u.getAccelerators() && null !== u.getAccelerators().getQuadTree() ? x3 = t2 : (s3.copyTo(f3), f3.getImpl().buildQuadTreeAccelerator(1), x3 = f3), S2 = true;
    }
  } while (_.next());
  if (!C2 && !I4) return 1;
  if (!b2 || !w2) {
    if (c === a.enumPolygon) {
      for (let e4 = 0, t3 = g.getPathCount(); e4 < t3; e4++) if (!y2[e4]) {
        b2 = true;
        break;
      }
    }
    for (let e4 = 0, t3 = u.getPathCount(); e4 < t3; e4++) if (!P3[e4]) {
      w2 = true;
      break;
    }
  }
  return C2 && b2 || I4 && w2 || C2 && I4 ? 4 : I4 ? 2 : 3;
}
function co(e3, t2, n5, r, i2) {
  const o2 = n3.constructEmpty();
  e3.queryEnvelope(o2), o2.inflateCoords(n5, n5);
  const a2 = new mi(), h2 = e3.getImpl(), m2 = new mr();
  let l2 = e3, g = false, u = false, c = false;
  for (let s2 = 0; s2 < t2.getPointCount(); s2++) {
    if (t2.queryXY(s2, a2), o2.contains(a2)) {
      const e4 = Lo(l2, a2, n5);
      if (1 === e4) return u = true, 4;
      if (2 === e4) return 4;
      c = true;
    } else c = true;
    g || (!Wn(e3, t2.getPointCount() - 1) || null !== h2.getAccelerators() && null != h2.getAccelerators().getQuadTree() ? l2 = e3 : (e3.copyTo(m2), m2.getImpl().buildQuadTreeAccelerator(1), l2 = m2), g = true);
  }
  return u ? c ? 4 : 2 : 1;
}
function _o(e3, t2, n5, r, o2) {
  r[0] = false;
  const a2 = e3.getImpl(), h2 = t2.getImpl(), m2 = a2.querySegmentIterator(), g = h2.querySegmentIterator(), u = [0, 0], c = [0, 0], _ = new Dr(a2, h2, n5);
  let d2 = false;
  for (; _.next(); ) {
    const e4 = _.getRedElement(), t3 = _.getBlueElement();
    m2.resetToVertex(e4, -1), g.resetToVertex(t3, -1);
    const s2 = m2.nextSegment(), i2 = g.nextSegment();
    let o3 = 0;
    if (Oo(s2, i2) ? !d2 && i2.isIntersecting(s2, n5) && (d2 = true) : o3 = i2.intersect(s2, null, c, u, n5), 0 !== o3 && (d2 = true, 1 === o3)) {
      const e5 = u[0], t4 = c[0];
      if (e5 > 0 && e5 < 1 && t4 > 0 && t4 < 1) return r[0] = true, false;
    }
  }
  if (!d2) {
    r[0] = true;
    const o3 = n3.constructEmpty();
    e3.queryEnvelope(o3), o3.inflateCoords(n5, n5);
    const m3 = new mr();
    let g2 = e3, u2 = false;
    for (let n6 = 0, r2 = t2.getPathCount(); n6 < r2; n6++) if (t2.getPathSize(n6) > 0) {
      const r3 = n3.constructEmpty();
      if (t2.queryPathEnvelope(n6, r3), !o3.isIntersecting(r3)) return false;
      {
        const e4 = zn(g2, t2.getXY(t2.getPathStart(n6)), 0);
        if (n(-1 !== e4), 0 === e4) return false;
      }
      u2 || (!Wn(e3, t2.getPathCount() - 1) || null !== a2.getAccelerators() && null !== a2.getAccelerators().getQuadTree() ? g2 = e3 : (e3.copyTo(m3), m3.getImpl().buildQuadTreeAccelerator(1), g2 = m3), u2 = true);
    }
    if (1 === e3.getPathCount() || t2.getGeometryType() === a.enumPolyline) return true;
    const c2 = t2, _2 = n3.constructEmpty();
    c2.queryEnvelope(_2), _2.inflateCoords(n5, n5);
    const d3 = new mr();
    let p3 = c2, f3 = false;
    for (let t3 = 0, n6 = e3.getPathCount(); t3 < n6; t3++) if (e3.getPathSize(t3) > 0) {
      const n7 = n3.constructEmpty();
      if (e3.queryPathEnvelope(t3, n7), _2.isIntersecting(n7)) {
        const s2 = zn(p3, e3.getXY(e3.getPathStart(t3)), 0);
        if (n(-1 !== s2), 1 === s2) return false;
      }
      f3 || (!Wn(c2, e3.getPathCount() - 1) || null !== h2.getAccelerators() && null !== h2.getAccelerators().getQuadTree() ? p3 = c2 : (c2.copyTo(d3), d3.getImpl().buildQuadTreeAccelerator(1), p3 = d3), f3 = true);
    }
    return true;
  }
  return false;
}
function po(e3, t2, n5) {
  const r = n3.constructEmpty();
  return r.setCoords({ env2D: e3 }), r.inflateCoords(n5, n5), r.containsEnvelope(t2);
}
function fo(e3, t2, n5) {
  const r = n3.constructEmpty();
  return r.setCoords({ env2D: t2 }), r.inflateCoords(n5, n5), e3.containsExclusiveEnvelope(r);
}
function xo(e3, t2, n5) {
  const r = n3.constructEmpty();
  return r.setCoords({ env2D: t2 }), r.inflateCoords(n5, n5), !r.contains(e3.getLowerLeft()) || (!r.contains(e3.getLowerRight()) || (!r.contains(e3.getUpperLeft()) || !r.contains(e3.getUpperRight())));
}
function yo(e3, t2, s2, n5) {
  if (e3.getPathCount() !== t2.getPathCount() || e3.getPointCount() !== t2.getPointCount()) return false;
  if (e3.hasNonLinearSegments() || t2.hasNonLinearSegments()) return e3.equals(t2);
  const r = new mi(), i2 = new mi();
  let o2 = true;
  const a2 = s2 * s2;
  for (let h2 = 0; h2 < e3.getPathCount(); h2++) {
    if (e3.getPathEnd(h2) !== t2.getPathEnd(h2)) {
      o2 = false;
      break;
    }
    for (let s3 = e3.getPathStart(h2); s3 < t2.getPathEnd(h2); s3++) if (e3.queryXY(s3, r), t2.queryXY(s3, i2), mi.sqrDistance(r, i2) > a2) {
      o2 = false;
      break;
    }
    if (!o2) break;
  }
  return !!o2;
}
function Po(e3, t2, s2, n5) {
  if (e3.getPointCount() !== t2.getPointCount()) return false;
  const r = new mi(), i2 = new mi();
  let o2 = true;
  const a2 = s2 * s2;
  for (let h2 = 0; h2 < e3.getPointCount(); h2++) if (e3.queryXY(h2, r), t2.queryXY(h2, i2), mi.sqrDistance(r, i2) > a2) {
    o2 = false;
    break;
  }
  return !!o2;
}
function Eo(e3, t2, s2, n5, r, i2, o2) {
  const a2 = e3.getImpl(), h2 = t2.getImpl(), m2 = a2.getPointCount(), l2 = h2.getPointCount(), g = Yt(m2, false), u = r || i2 ? Yt(l2, false) : [], c = s2 * s2, _ = new Dr(a2, h2, s2);
  for (; _.next(); ) {
    const e4 = _.getRedElement(), t3 = _.getBlueElement(), s3 = a2.getXY(e4), n6 = h2.getXY(t3);
    mi.sqrDistance(s3, n6) <= c && (g[e4] = true, (r || i2) && (u[t3] = true));
  }
  let d2 = false, p3 = false;
  for (let y2 = 0; y2 < m2; y2++) {
    const e4 = g[y2];
    if (d2 ||= !e4, p3 ||= e4, (r || n5) && d2) return false;
  }
  if (n5) return true;
  let f3 = false, x3 = false;
  for (let y2 = 0; y2 < l2; y2++) {
    const e4 = u[y2];
    if (f3 ||= !e4, x3 ||= e4, r && f3) return false;
  }
  return !!r || d2 && p3 && f3 && x3;
}
function So(e3, t2, s2, n5) {
  return Co(e3, t2, s2, n5) && Co(t2, e3, s2, n5);
}
function Co(e3, t2, n5, r) {
  if (N(e3), N(t2), t2.isEmpty()) return false;
  let i2 = true;
  const o2 = Yt(2, Number.NaN), h2 = Yt(2, Number.NaN), m2 = [], l2 = new Ro();
  let g;
  const u = n3.constructEmpty(), c = n3.constructEmpty(), _ = n3.constructEmpty();
  e3.queryEnvelope(u), t2.queryEnvelope(c), u.inflateCoords(n5, n5), c.inflateCoords(n5, n5), _.setCoords({ env2D: u }), _.intersect(c);
  const d2 = e3.getImpl().querySegmentIterator(), p3 = t2.getImpl().querySegmentIterator(), f3 = t2.getImpl().getAccelerators();
  let x3 = null, P3 = null, E2 = null, S2 = null;
  if (null !== f3 && (x3 = f3.getQuadTree(), P3 = f3.getQuadTreeForPaths(), null !== P3 && (S2 = P3.getIteratorForQT())), null === x3) {
    const s2 = e3.getPointCount(), n6 = t2.getPointCount();
    s2 > 10 && n6 > 10 && (x3 = Jt(t2.getImpl(), _));
  }
  for (null !== x3 && (E2 = x3.getIteratorForQT()); d2.nextPath(); ) for (; d2.hasNextSegment(); ) {
    let e4 = d2.nextSegment();
    if (e4.queryEnvelope(u), !u.isIntersecting(_)) return i2 = false, false;
    if (null !== S2 && (S2.resetIterator(u, n5), -1 === S2.next())) continue;
    let t3 = 0, s2 = null;
    if (null != E2) E2.resetIterator(e4, n5);
    else if (p3.resetToFirstPath(), !p3.nextPath()) return i2 = false, false;
    do {
      if (t3 = 0, null !== E2) {
        const r2 = E2.next();
        if (-1 === r2) return i2 = false, false;
        p3.resetToVertex(x3.getElement(r2), -1), s2 = p3.nextSegment(), t3 = e4.intersect(s2, null, o2, h2, n5);
      } else {
        for (; !p3.hasNextSegment(); ) if (!p3.nextPath()) return i2 = false, false;
        s2 = p3.nextSegment(), s2.queryEnvelope(c), c.inflateCoords(n5, n5), u.isIntersecting(c) && (t3 = e4.intersect(s2, null, o2, h2, n5));
      }
    } while (2 !== t3 || 0 !== o2[0] || r && !(h2[0] <= h2[1]));
    let f4 = Number.NaN, y2 = false;
    do {
      let r2 = false;
      if (1 === o2[1]) {
        if (!d2.hasNextSegment()) {
          y2 = true;
          break;
        }
        e4 = d2.nextSegment(), r2 = true;
      }
      if (1 === h2[1] && h2[0] <= h2[1]) {
        if (-1 === f4) break;
        if (f4 = 1, !p3.hasNextSegment()) break;
        s2 = p3.nextSegment(), r2 = true;
      }
      if (0 === h2[1] && h2[0] > h2[1]) {
        if (1 === f4) break;
        if (Number.isNaN(f4)) {
          if (!p3.hasPreviousSegment()) break;
          p3.previousSegment(), f4 = -1;
        }
        if (!p3.hasPreviousSegment()) break;
        s2 = p3.previousSegment(), r2 = true;
      }
      if (!r2) break;
      t3 = e4.intersect(s2, null, o2, h2, n5);
    } while (2 === t3 && (!r || h2[0] <= h2[1]));
    if (y2) continue;
    const P4 = e4.calculateLength2D();
    e4.queryEnvelope(u), m2.length = 0, l2.m_overlapEvents.length = 0;
    let C2 = false, I4 = false, b2 = 0;
    const w2 = Lt(null, u, true);
    for (null !== E2 ? E2.resetIterator(e4, n5) : (p3.resetToFirstPath(), p3.nextPath() || b("relational_operations")); ; ) {
      if (t3 = 0, null !== E2) {
        const r2 = E2.next();
        if (-1 === r2) break;
        p3.resetToVertex(x3.getElement(r2), -1), s2 = p3.nextSegment(), t3 = e4.intersect(s2, null, o2, h2, n5);
      } else {
        for (; !p3.hasNextSegment() && p3.nextPath(); ) ;
        if (!p3.hasNextSegment()) break;
        s2 = p3.nextSegment(), s2.queryEnvelope(c), c.inflateCoords(n5, n5), u.isIntersecting(c) && (t3 = e4.intersect(s2, null, o2, h2, n5));
      }
      if (2 === t3 && (!r || h2[0] <= h2[1])) {
        const e5 = d2.getStartPointIndex(), t4 = d2.getPathIndex(), s3 = p3.getStartPointIndex(), r2 = p3.getPathIndex();
        if (g = Yo(e5, t4, o2[0], o2[1], s3, r2, h2[0], h2[1]), l2.m_overlapEvents.push(g), m2.push(m2.length), !(C2 || g.m_scalarA0 < b2 && g.m_scalarA1 < b2)) {
          if (0 === b2 && P4 * (g.m_scalarA0 - b2) > n5) C2 = true;
          else if (0 !== b2 && P4 * (g.m_scalarA0 - b2) > w2) C2 = true;
          else if (b2 = g.m_scalarA1, P4 * (1 - b2) <= n5 || 1 === b2) {
            I4 = true;
            break;
          }
        }
      }
    }
    if (!I4) {
      if (!C2) return i2 = false, false;
      m2.length > 1 && m2.sort((e5, t4) => l2.compareOverlapEvents(e5, t4)), b2 = 0;
      for (let e5 = 0; e5 < l2.m_overlapEvents.length; e5++) if (g = l2.m_overlapEvents[m2[e5]], !(g.m_scalarA0 < b2 && g.m_scalarA1 < b2)) {
        if (0 === b2 && P4 * (g.m_scalarA0 - b2) > n5) return i2 = false, false;
        if (0 !== b2 && P4 * (g.m_scalarA0 - b2) > w2) return i2 = false, false;
        if (b2 = g.m_scalarA1, P4 * (1 - b2) <= n5 || 1 === b2) break;
      }
      if (P4 * (1 - b2) > n5) return i2 = false, false;
      m2.length = 0, l2.m_overlapEvents.length = 0;
    }
  }
  return i2;
}
function Io(e3, t2, s2) {
  const n5 = e3.getImpl(), r = t2.getImpl(), i2 = n5.querySegmentIterator(), o2 = r.querySegmentIterator(), a2 = new Dr(n5, r, s2);
  for (; a2.next(); ) {
    const e4 = a2.getRedElement(), t3 = a2.getBlueElement();
    i2.resetToVertex(e4, -1), o2.resetToVertex(t3, -1);
    const n6 = i2.nextSegment();
    if (o2.nextSegment().isIntersecting(n6, s2)) return true;
  }
  return false;
}
function bo(e3, t2, s2, n5) {
  const r = e3.getImpl(), i2 = t2.getImpl(), o2 = r.querySegmentIterator(), a2 = i2.querySegmentIterator(), h2 = Yt(2, Number.NaN), m2 = new Dr(r, i2, s2);
  let l2 = false, g = -1;
  for (; m2.next(); ) {
    const e4 = m2.getRedElement(), t3 = m2.getBlueElement();
    o2.resetToVertex(e4, -1), a2.resetToVertex(t3, -1);
    const r2 = o2.nextSegment(), i3 = a2.nextSegment();
    let u = 0;
    if (Oo(r2, i3)) {
      if (i3.isIntersecting(r2, s2)) return -2;
    } else u = r2.intersect(i3, null, h2, null, s2);
    if (u) {
      if (2 === u) {
        const e5 = r2.calculateLength2D(), t4 = h2[0];
        if (e5 * (h2[1] - t4) > s2) return g = 1, g;
        l2 = true;
      } else if (g = 0, n5) {
        const e5 = h2[0], t4 = new mi();
        r2.queryCoord2D(e5, t4), n5.push(t4.x), n5.push(t4.y);
      }
    }
  }
  return l2 ? -2 : g;
}
function wo(e3, t2, s2, n5) {
  const r = e3.getImpl(), i2 = t2, o2 = i2.getPointCount(), a2 = n5 ? Yt(o2, false) : [], h2 = new Dr(r, i2, s2, false), m2 = r.querySegmentIterator();
  for (; h2.next(); ) {
    const e4 = h2.getRedElement(), t3 = h2.getBlueElement();
    m2.resetToVertex(e4, -1);
    const r2 = m2.nextSegment(), o3 = i2.getXY(t3);
    if (r2.isIntersectingPoint(o3, s2)) {
      if (!n5) return true;
      a2[t3] = true;
    }
  }
  if (!n5) return false;
  for (let l2 = 0; l2 < o2; l2++) if (!a2[l2]) return false;
  return true;
}
function vo(e3, t2, n5) {
  const r = new mi(), i2 = n5 * n5, o2 = e3.querySegmentIterator(), a2 = e3.getImpl().getAccelerators();
  if (null !== a2) {
    const e4 = a2.getQuadTree();
    if (null !== e4) {
      const a3 = n3.constructEmpty();
      a3.setCoords({ pt: t2 });
      const h3 = e4.getIterator(a3, n5);
      for (let s2 = h3.next(); -1 !== s2; s2 = h3.next()) if (o2.resetToVertex(e4.getElement(s2), -1), o2.hasNextSegment()) {
        const e5 = o2.nextSegment(), s3 = e5.getClosestCoordinate(t2, false);
        if (e5.queryCoord2D(s3, r), mi.sqrDistance(t2, r) <= i2) return true;
      }
      return false;
    }
  }
  const h2 = n3.constructEmpty();
  for (; o2.nextPath(); ) for (; o2.hasNextSegment(); ) {
    const e4 = o2.nextSegment();
    if (e4.queryEnvelope(h2), h2.inflateCoords(n5, n5), !h2.contains(t2)) continue;
    const s2 = e4.getClosestCoordinate(t2, false);
    if (e4.queryCoord2D(s2, r), mi.sqrDistance(t2, r) <= i2) return true;
  }
  return false;
}
function No(e3, t2, s2) {
  return vo(e3, t2, s2) && !qo(e3, t2, s2);
}
function To(e3, t2, n5, r) {
  const o2 = e3.querySegmentIterator(), a2 = e3.getImpl().getAccelerators(), h2 = e3.hasNonLinearSegments();
  let m2 = null, l2 = null, g = null, u = null;
  if (null !== a2) {
    const e4 = a2.getQuadTree();
    if (null !== e4) {
      const r2 = e4.getIterator(t2, n5);
      h2 && (m2 = new fm(), l2 = new fm(), g = new fm(), u = new fm(), t2.querySide(0, m2), t2.querySide(1, l2), t2.querySide(2, g), t2.querySide(3, u));
      const a3 = n3.constructEmpty();
      a3.setCoords({ env2D: t2 }), a3.inflateCoords(n5, n5);
      for (let s2 = r2.next(); -1 !== s2; s2 = r2.next()) if (o2.resetToVertex(e4.getElement(s2), -1), o2.hasNextSegment()) {
        const e5 = o2.nextSegment();
        if (e5.getGeometryType() === a.enumLine) {
          const t3 = e5.getStartXY(), s3 = e5.getEndXY();
          if (a3.clipLine(t3, s3)) return true;
          continue;
        }
        if (t2.contains(e5.getStartXY()) || t2.contains(e5.getEndXY())) return true;
        if (e5.isIntersecting(m2, n5)) return true;
        if (e5.isIntersecting(l2, n5)) return true;
        if (e5.isIntersecting(g, n5)) return true;
        if (e5.isIntersecting(u, n5)) return true;
      }
      return false;
    }
  }
  if (h2) {
    m2 = new fm(), l2 = new fm(), g = new fm(), u = new fm(), t2.querySide(0, m2), t2.querySide(1, l2), t2.querySide(2, g), t2.querySide(3, u);
    const s2 = e3.querySegmentIterator();
    for (; s2.nextPath(); ) for (; s2.hasNextSegment(); ) {
      const e4 = s2.nextSegment();
      if (t2.contains(e4.getStartXY()) || t2.contains(e4.getEndXY())) return true;
      if (e4.isIntersecting(m2, n5)) return true;
      if (e4.isIntersecting(l2, n5)) return true;
      if (e4.isIntersecting(g, n5)) return true;
      if (e4.isIntersecting(u, n5)) return true;
    }
  } else {
    const r2 = n3.constructEmpty();
    r2.setCoords({ env2D: t2 }), r2.inflateCoords(n5, n5);
    const i2 = e3.getImpl(), o3 = i2.getAttributeStreamRef(0), a3 = new mi();
    for (let e4 = 0, t3 = i2.getPathCount(); e4 < t3; e4++) {
      let t4 = true;
      const s2 = new mi(), n6 = new mi(), h3 = new mi(), m3 = i2.getPathStart(e4), l3 = new mi();
      for (let g2 = m3, u2 = i2.getPathEnd(e4); g2 < u2; g2++) if (t4) o3.queryPoint2D(2 * g2, s2), l3.assign(s2), t4 = false;
      else {
        if (o3.queryPoint2D(2 * g2, a3), n6.setCoordsPoint2D(s2), h3.setCoordsPoint2D(a3), r2.clipLine(n6, h3)) return true;
        s2.assign(a3);
      }
      if (i2.isClosedPath(e4) && !t4 && (n6.setCoordsPoint2D(s2), h3.setCoordsPoint2D(l3), r2.clipLine(n6, h3))) return true;
    }
  }
  return false;
}
function Go(e3, t2, n5, r) {
  const i2 = e3.getImpl(), o2 = t2.getImpl(), a2 = [0], h2 = Vt2(i2.getIsSimple(0, a2)) && Vt2(o2.getIsSimple(0, a2)), m2 = i2.querySegmentIterator(), l2 = o2.querySegmentIterator(), g = Yt(2, 0), u = Yt(2, 0), c = new Dr(i2, o2, n5);
  let _ = false;
  for (; c.next(); ) {
    const e4 = c.getRedElement(), t3 = c.getBlueElement();
    m2.resetToVertex(e4, -1), l2.resetToVertex(t3, -1);
    const s2 = m2.nextSegment(), r2 = l2.nextSegment();
    let i3 = 0;
    if (Oo(s2, r2)) {
      if (r2.isIntersecting(s2, n5)) {
        _ = true;
        break;
      }
    } else i3 = r2.intersect(s2, null, u, g, n5);
    if (2 === i3) {
      const e5 = g[0], t4 = g[1], r3 = s2.calculateLength2D();
      if (h2 && (t4 - e5) * r3 > n5) return false;
      _ = true;
    } else if (i3) {
      const e5 = g[0], t4 = u[0];
      if (e5 > 0 && e5 < 1 && t4 > 0 && t4 < 1) return false;
      _ = true;
    }
  }
  if (!_) return false;
  const d2 = n3.constructEmpty(), p3 = n3.constructEmpty(), f3 = n3.constructEmpty();
  let x3, y2;
  if (e3.queryEnvelope(d2), t2.queryEnvelope(p3), d2.inflateCoords(1e3 * n5, 1e3 * n5), p3.inflateCoords(1e3 * n5, 1e3 * n5), f3.setCoords({ env2D: d2 }), f3.intersect(p3), e3.getPointCount() > 10) {
    if (x3 = f2(e3, f3, n5, 0, r), x3.isEmpty()) return false;
  } else x3 = e3;
  if (t2.getPointCount() > 10) {
    if (y2 = f2(t2, f3, n5, 0, r), y2.isEmpty()) return false;
  } else y2 = t2;
  return sr(x3, y2, n5, "F********", r, false);
}
function Do(e3, t2, n5, r) {
  const i2 = e3.getImpl(), o2 = t2.getImpl(), a2 = [0], h2 = Vt2(i2.getIsSimple(0, a2)) && Vt2(o2.getIsSimple(0, a2)), m2 = n3.constructEmpty(), l2 = n3.constructEmpty(), g = n3.constructEmpty();
  e3.queryEnvelope(m2), t2.queryEnvelope(l2);
  let u = false;
  const c = xo(m2, l2, n5), _ = xo(l2, m2, n5), d2 = i2.querySegmentIterator(), p3 = o2.querySegmentIterator(), f3 = Yt(2, Number.NaN), x3 = Yt(2, Number.NaN), y2 = new Dr(i2, o2, n5);
  for (; y2.next(); ) {
    const e4 = y2.getRedElement(), t3 = y2.getBlueElement();
    d2.resetToVertex(e4, -1), p3.resetToVertex(t3, -1);
    const s2 = d2.nextSegment(), r2 = p3.nextSegment();
    let i3 = 0;
    if (Oo(s2, r2)) {
      if (r2.isIntersecting(s2, n5)) break;
    } else i3 = r2.intersect(s2, null, x3, f3, n5);
    if (2 === i3) {
      const e5 = f3[0], t4 = f3[1], r3 = s2.calculateLength2D();
      if (h2 && (t4 - e5) * r3 > n5 && (u = true, c && _)) return true;
    } else if (i3) {
      const e5 = f3[0], t4 = x3[0];
      if (e5 > 0 && e5 < 1 && t4 > 0 && t4 < 1) return true;
    }
  }
  const P3 = n3.constructEmpty(), E2 = n3.constructEmpty();
  let S2, C2;
  P3.setCoords({ env2D: m2 }), P3.inflateCoords(1e3 * n5, 1e3 * n5), E2.setCoords({ env2D: l2 }), E2.inflateCoords(1e3 * n5, 1e3 * n5), g.setCoords({ env2D: P3 }), g.intersect(E2);
  let I4 = "";
  if (I4 += u ? "**" : "T*", c) {
    if (t2.getPointCount() > 10) {
      if (C2 = f2(t2, g, n5, 0, r), C2.isEmpty()) return false;
    } else C2 = t2;
    I4 += "****";
  } else C2 = t2, I4 += "T***";
  if (_) {
    if (e3.getPointCount() > 10) {
      if (S2 = f2(e3, g, n5, 0, r), S2.isEmpty()) return false;
    } else S2 = e3;
    I4 += "***";
  } else S2 = e3, I4 += "T**";
  return sr(S2, C2, n5, I4, r, false);
}
function Vo(e3, t2, n5, r) {
  const i2 = [false], o2 = _o(e3, t2, n5, i2);
  if (i2[0]) return o2;
  const a2 = n3.constructEmpty();
  let h2;
  if (t2.queryEnvelope(a2), a2.inflateCoords(1e3 * n5, 1e3 * n5), e3.getPointCount() > 10) {
    if (h2 = f2(e3, a2, n5, 0, r), h2.isEmpty()) return false;
  } else h2 = e3;
  return nr(h2, t2, n5, r);
}
function Fo(e3, t2, n5, r) {
  const i2 = e3.getImpl(), o2 = t2.getImpl(), a2 = i2.querySegmentIterator(), h2 = o2.querySegmentIterator(), m2 = Yt(2, Number.NaN), l2 = Yt(2, Number.NaN), g = new Dr(i2, o2, n5);
  let u = false;
  for (; g.next(); ) {
    const e4 = g.getRedElement(), t3 = g.getBlueElement();
    a2.resetToVertex(e4, -1), h2.resetToVertex(t3, -1);
    const s2 = a2.nextSegment(), r2 = h2.nextSegment();
    let i3 = 0;
    if (Oo(s2, r2) ? !u && r2.isIntersecting(s2, n5) && (u = true) : i3 = r2.intersect(s2, null, l2, m2, n5), 2 === i3) u = true;
    else if (i3) {
      const e5 = m2[0], t4 = l2[0];
      if (e5 > 0 && e5 < 1 && t4 > 0 && t4 < 1) return false;
      u = true;
    }
  }
  if (!u) return false;
  const c = n3.constructEmpty(), _ = n3.constructEmpty(), d2 = n3.constructEmpty();
  let p3, f3;
  if (e3.queryEnvelope(c), t2.queryEnvelope(_), c.inflateCoords(1e3 * n5, 1e3 * n5), _.inflateCoords(1e3 * n5, 1e3 * n5), d2.setCoords({ env2D: c }), d2.intersect(_), e3.getPointCount() > 10) {
    if (p3 = f2(e3, d2, n5, 0, r), p3.isEmpty()) return false;
  } else p3 = e3;
  if (t2.getPointCount() > 10) {
    if (f3 = f2(t2, d2, n5, 0, r), f3.isEmpty()) return false;
  } else f3 = t2;
  return sr(p3, f3, n5, "F********", r, false);
}
function Ho(e3, t2, n5, r) {
  const i2 = e3.getImpl(), o2 = t2.getImpl(), a2 = i2.querySegmentIterator(), h2 = o2.querySegmentIterator(), m2 = Yt(2, Number.NaN), l2 = Yt(2, Number.NaN), g = new Dr(i2, o2, n5);
  let u = false;
  for (; g.next(); ) {
    const e4 = g.getRedElement(), t3 = g.getBlueElement();
    a2.resetToVertex(e4, -1), h2.resetToVertex(t3, -1);
    const s2 = a2.nextSegment(), r2 = h2.nextSegment();
    let i3 = 0;
    if (Oo(s2, r2) ? !u && r2.isIntersecting(s2, n5) && (u = true) : i3 = r2.intersect(s2, null, l2, m2, n5), 2 === i3) u = true;
    else if (i3) {
      const e5 = m2[0], t4 = l2[0];
      if (e5 > 0 && e5 < 1 && t4 > 0 && t4 < 1) return true;
      u = true;
    }
  }
  if (!u) return false;
  const c = n3.constructEmpty(), _ = n3.constructEmpty(), d2 = n3.constructEmpty(), p3 = n3.constructEmpty(), f3 = n3.constructEmpty();
  if (e3.queryEnvelope(c), t2.queryEnvelope(_), xo(_, c, n5)) {
    let s2, i3;
    if (d2.setCoords({ env2D: c }), d2.inflateCoords(1e3 * n5, 1e3 * n5), p3.setCoords({ env2D: _ }), p3.inflateCoords(1e3 * n5, 1e3 * n5), f3.setCoords({ env2D: d2 }), f3.intersect(p3), e3.getPointCount() > 10) {
      if (s2 = f2(e3, f3, n5, 0, r), s2.isEmpty()) return false;
    } else s2 = e3;
    if (t2.getPointCount() > 10) {
      if (i3 = f2(t2, f3, n5, 0, r), i3.isEmpty()) return false;
    } else i3 = t2;
    return sr(s2, i3, n5, "T********", r, false);
  }
  return sr(e3, t2, n5, "T*****T**", r, false);
}
function ko(e3, t2, n5, r) {
  const i2 = [false], o2 = _o(e3, t2, n5, i2);
  if (i2[0]) return o2;
  const a2 = n3.constructEmpty();
  let h2;
  if (t2.queryEnvelope(a2), a2.inflateCoords(1e3 * n5, 1e3 * n5), e3.getPointCount() > 10) {
    if (h2 = f2(e3, a2, n5, 0, r), h2.isEmpty()) return false;
  } else h2 = e3;
  return rr(h2, t2, n5, r);
}
function Ao(e3, t2, s2, n5) {
  return 1 === Lo(e3, t2, s2);
}
function Mo(e3, t2, s2, n5) {
  return 2 === Lo(e3, t2, s2);
}
function Uo(e3, t2, s2, n5) {
  const r = new mi(), i2 = s2 * s2;
  for (let o2 = 0; o2 < e3.getPointCount(); o2++) if (e3.queryXY(o2, r), mi.sqrDistance(r, t2) <= i2) return false;
  return true;
}
function qo(e3, t2, s2) {
  const n5 = e3.getBoundary();
  return !n5.isEmpty() && !Uo(n5, t2, s2);
}
function Bo(e3, t2, n5) {
  const r = n3.constructEmpty();
  return r.setCoords({ env2D: e3 }), r.inflateCoords(n5, n5), r.containsEnvelope(t2) ? 1073741824 : r.isIntersecting(t2) ? e3.isIntersecting(t2) ? e3.xmin < t2.xmin && t2.xmax < e3.xmax ? t2.ymin < e3.ymin && t2.ymax > e3.ymax ? 0 : 1073741824 : e3.ymin < t2.ymin && t2.ymax < e3.ymax ? t2.xmin < e3.xmin && t2.xmax > e3.xmax ? 0 : 1073741824 : 0 : 0 : 4;
}
function Oo(e3, t2) {
  return e3.getGeometryType() !== a.enumLine || t2.getGeometryType() !== a.enumLine;
}
function Yo(e3, t2, s2, n5, r, i2, o2, a2) {
  return { m_ivertexA: e3, m_ipathA: t2, m_scalarA0: s2, m_scalarA1: n5, m_ivertexB: r, m_ipathB: i2, m_scalarB0: o2, m_scalarB1: a2 };
}
var Ro = class {
  constructor() {
    this.m_overlapEvents = [];
  }
  compareOverlapEvents(e3, t2) {
    const s2 = this.m_overlapEvents[e3], n5 = this.m_overlapEvents[t2];
    if (s2.m_ipathA < n5.m_ipathA) return -1;
    if (s2.m_ipathA === n5.m_ipathA) {
      if (s2.m_ivertexA < n5.m_ivertexA) return -1;
      if (s2.m_ivertexA === n5.m_ivertexA) {
        if (s2.m_scalarA0 < n5.m_scalarA0) return -1;
        if (s2.m_scalarA0 === n5.m_scalarA0) {
          if (s2.m_scalarA1 < n5.m_scalarA1) return -1;
          if (s2.m_scalarA1 === n5.m_scalarA1 && s2.m_ivertexB < n5.m_ivertexB) return -1;
        }
      }
    }
    return 1;
  }
};
function Xo(e3, t2, s2) {
  const n5 = Ln(e3, t2, s2);
  return n5 ? 1 === n5 ? 1 : 2 : 0;
}
function Lo(e3, t2, s2) {
  const n5 = zn(e3, t2, s2);
  return n5 ? 1 === n5 ? 1 : 2 : 0;
}
function zo(e3, t2, s2, n5, r) {
  for (let i2 = 0; i2 < s2; i2++) r[i2] = Lo(e3, t2[i2], n5);
}
function Wo(e3, t2, n5, r, o2) {
  if (e3.getGeometryType() === a.enumPolygon) zo(e3, t2, n5, r, o2);
  else if (e3.getGeometryType() === a.enumEnvelope) {
    const i2 = n3.constructEmpty();
    e3.queryEnvelope(i2), Zo(i2, t2, n5, r, o2);
  } else C("");
}
function jo(e3, t2, s2, n5, r) {
  const a2 = e3.getGeometryType();
  a2 === a.enumPolyline ? $o(e3, t2, s2, n5, r) : f(a2) ? Jo() : C("");
}
function Zo(e3, t2, s2, n5, r) {
  if (e3.isEmpty()) {
    for (let e4 = 0; e4 < s2; e4++) r[e4] = 0;
    return;
  }
  const i2 = e3.clone();
  i2.inflateCoords(0.5 * -n5, 0.5 * -n5);
  const o2 = e3.clone();
  o2.inflateCoords(0.5 * n5, 0.5 * n5);
  for (let a2 = 0; a2 < s2; a2++) i2.contains(t2[a2]) ? r[a2] = 1 : o2.contains(t2[a2]) ? r[a2] = 2 : r[a2] = 0;
}
function Ko(e3) {
  if (e3.isEmpty()) return 0;
  switch (e3.getGeometryType()) {
    case a.enumMultiPoint:
      return e3.getImpl().getPointCount();
    case a.enumPolyline:
      return e3.getImpl().getPathCount();
    case a.enumPolygon:
      return e3.getImpl().getOGCPolygonCount();
    case a.enumGeometryCollection:
      return e3.getGeometryCount();
  }
  return 1;
}
function Qo(e3, t2, s2) {
  if (s2.reset(), t2 < 3) return;
  const n5 = e3[0].clone(), r = n5.x, i2 = n5.y, o2 = e3[1].clone(), a2 = new mi();
  for (let h2 = 2; h2 < t2; h2++) a2.assign(e3[h2]), s2.pe((a2.x - n5.x) * (o2.y - i2)), n5.assign(o2), o2.assign(a2);
  s2.pe((r - n5.x) * (o2.y - i2));
}
function Jo(e3, t2, s2, n5, r) {
  n(0);
}
function $o(e3, t2, n5, r, i2) {
  const o2 = e3.getImpl(), a2 = o2.getAccelerators();
  let h2 = null;
  a2 && (h2 = a2.getRasterizedGeometry());
  let m2 = n5;
  for (let s2 = 0; s2 < n5; s2++) i2[s2] = 1, h2 && n(0);
  if (m2) {
    if (a2) {
      let e5 = null;
      null !== a2 && null !== a2.getQuadTree() && (e5 = a2.getQuadTree());
      const h3 = o2.getPointCount();
      if (null === e5 && h3 > 20 && h3 * n5 > 4 * h3 + Math.log(h3) * n5 && (e5 = Jt(o2)), e5) {
        let a3 = null;
        const h4 = o2.querySegmentIterator(), l2 = new n3();
        for (let s2 = 0; s2 < n5 && m2; s2++) if (1 === i2[s2]) {
          l2.setCoords(t2[s2]), null === a3 ? a3 = e5.getIterator(l2, r) : a3.resetIterator(l2, r);
          let n6 = -1;
          for (let o3 = a3.next(); -1 !== o3; o3 = a3.next()) {
            h4.resetToVertex(e5.getElement(o3), n6), n6 = h4.getPathIndex();
            if (h4.nextSegment().isIntersectingPoint(t2[s2], r)) {
              i2[s2] = 2, m2--;
              break;
            }
            i2[s2] = 0;
          }
        }
        return;
      }
    }
    const e4 = o2.querySegmentIterator();
    for (; e4.nextPath() && m2; ) for (; e4.hasNextSegment() && m2; ) {
      const s2 = e4.nextSegment();
      for (let e5 = 0; e5 < n5 && m2; e5++) 1 === i2[e5] && s2.isIntersectingPoint(t2[e5], r) && (i2[e5] = 2, m2--);
    }
  }
  for (let s2 = 0; s2 < n5; s2++) 1 === i2[s2] && (i2[s2] = 0);
}
function ea(e3, t2, s2, n5, r) {
  const i2 = rs2(t2), o2 = Math.max(4 * i2, s2);
  return new oa(t2, null, o2, Number.NaN, r).approximateWithCirclesImpl(e3, n5);
}
function ta() {
  return Number.isNaN(this.radius.value());
}
function sa() {
  return { ptStart: new mi(), ptEnd: new mi(), center: new Ne(), radius: new p2(), fcenter: new qe(), fradius2: new si(), maxError: Number.NaN, isLine: ta };
}
var na = 5;
var ra2 = 1 / 8;
function ia(e3, t2, s2, n5) {
  return { pt: e3.clone(), t: t2, err: s2, checkCount: n5 };
}
var oa = class _oa {
  constructor(e3, t2, s2, n5, r) {
    this.m_left = e3, this.m_tracker = r, this.m_eps = s2, this.m_trackerCounter = 0, this.m_tolerance = n5, this.m_circleCheckCounter = 0, this.m_bReversedLeft = false, this.m_leftArc = sa();
  }
  closeToCircularArc(e3, t2, s2, n5, r, i2) {
    if (this.m_circleCheckCounter++, i2.maxError = 0, !_oa.checkSweepAngle(e3, t2)) return false;
    if (i2.ptStart.setCoordsPoint2D(s2), i2.ptEnd.setCoordsPoint2D(r), e3.isCircular()) {
      const t3 = e3;
      return i2.fradius2 = si.constructDouble(t3.getSemiMajorAxis()).mulDouble(t3.getSemiMajorAxis()), i2.radius.set(t3.getSemiMajorAxis()), i2.fcenter.assignPoint2D(t3.getCenter()), i2.center.set(t3.getCenter()), true;
    }
    const o2 = i2.ptEnd.sub(i2.ptStart).clone();
    o2.leftPerpendicularThis(), o2.normalize();
    if (Math.abs(o2.dotProduct(n5.sub(i2.ptStart))) <= this.m_eps) return !!this.confirmIsLine(i2, o2) && (i2.radius.set(Number.NaN), i2.center.setCoords(0, 0), true);
    {
      const s3 = i2.ptEnd.sub(i2.ptStart), r2 = n5.sub(i2.ptStart), o3 = s3.crossProduct(r2);
      if (0 === o3) return false;
      const a3 = 0.5 * s3.sqrLength(), h3 = 0.5 * r2.sqrLength();
      let m3 = a3 * r2.y - h3 * s3.y;
      m3 /= o3;
      let l3 = s3.x * h3 - r2.x * a3;
      l3 /= o3;
      const g2 = Math.sqrt(m3 * m3 + l3 * l3);
      if (4 * Number.EPSILON * g2 > this.m_eps) return false;
      const u2 = m3 + i2.ptStart.x, c2 = l3 + i2.ptStart.y;
      i2.radius.set(g2), i2.center.setCoords(u2, c2);
      const _2 = this.maxCircleApproximationError(e3, t2, i2);
      if (_2 > this.m_eps) return i2.maxError = _2, false;
    }
    const a2 = new qe().assignPoint2D(i2.ptStart), h2 = new qe().assignPoint2D(i2.ptEnd).sub(a2), m2 = new qe().assignPoint2D(n5).sub(a2), l2 = h2.crossProduct(m2);
    if (l2.isZero()) return false;
    const g = h2.sqrLength().mulDouble(0.5), u = m2.sqrLength().mulDouble(0.5), c = g.mul(m2.y).sub(u.mul(h2.y)), _ = h2.x.mul(u).sub(m2.x.mul(g)), d2 = c.mul(c).add(_.mul(_)), p3 = l2.clone();
    p3.invertThis(), i2.fradius2 = d2.mul(p3).mul(p3), i2.fcenter.setCoords(c.mul(p3).add(a2.x), _.mul(p3).add(a2.y)), i2.center.setWithEps(i2.fcenter.asPoint2D()), i2.radius.setWithEps(Math.sqrt(i2.fradius2.toDouble()));
    const f3 = Ne.constructPoint2D(i2.ptStart).subE(i2.center), x3 = Ne.constructPoint2D(i2.ptEnd).subE(i2.center);
    if (!f3.dotProduct(x3).gt(I2)) return false;
    const y2 = this.maxCircleApproximationError(e3, t2, i2);
    return i2.maxError = y2, y2 <= this.m_eps;
  }
  static checkSweepAngle(e3, t2) {
    if (e3.getGeometryType() === a.enumEllipticArc) {
      const s2 = e3, n5 = gu(s2, t2.vmin), r = gu(s2, t2.vmax);
      return !(Math.abs(r - n5) > 0.5 * Wt);
    }
    return true;
  }
  confirmIsLine(e3, t2) {
    const s2 = e3.ptEnd.sub(e3.ptStart);
    return !(Math.abs(t2.dotProduct(s2.mul(0.25))) > this.m_eps) && !(Math.abs(t2.dotProduct(s2.mul(0.75))) > this.m_eps);
  }
  maxCircleApproximationError(e3, t2, s2) {
    const n5 = [0.25, 0.75], r = [0.1, 0.25, 0.75, 0.9];
    let o2, a2;
    e3.getGeometryType() === a.enumEllipticArc ? (o2 = n5, a2 = n5.length) : (o2 = r, a2 = r.length);
    let h2 = 0;
    for (let i2 = 0; i2 < a2; ++i2) {
      const n6 = new mi();
      e3.queryCoord2D(Q(t2.vmin, t2.vmax, o2[i2]), n6);
      const r2 = n6.sub(s2.center.value()).length(), a3 = Math.abs(r2 - s2.radius.value());
      a3 > h2 && (h2 = a3);
    }
    return h2;
  }
  approximateWithCirclesImpl(e3, t2) {
    let s2 = 1;
    t2 && t2.push(0);
    const n5 = Yt(9, Number.NaN);
    let r;
    e3 ? r = this.m_left.getMonotonicPartParams(n5.length, n5) : (n5[0] = 0, n5[1] = 1, r = 2);
    const i2 = [], o2 = [], a2 = new mi(0, 0);
    for (let h2 = 1; h2 < r; h2++) {
      const e4 = new x(n5[h2 - 1], n5[h2]);
      for (this.m_bReversedLeft = !_oa.goodOrientation(this.m_left, e4), this.m_bReversedLeft ? (i2.push(ia(a2, e4.vmin, 0, 0)), i2.push(ia(a2, e4.vmax, 0, 0))) : (i2.push(ia(a2, e4.vmax, 0, 0)), i2.push(ia(a2, e4.vmin, 0, 0))), i2[0].pt = this.m_left.getCoord2D(i2[0].t), i2[1].pt = this.m_left.getCoord2D(i2[1].t); i2.length > 1; ) {
        this.progress_();
        const e5 = i2.at(-1);
        let n6 = e5.checkCount, r2 = e5.err;
        const a3 = e5.pt.clone(), h3 = e5.t, m2 = i2[i2.length - 2].t, l2 = 0.5 * (h3 + m2), g = this.m_left.getCoord2D(l2);
        if (r2 <= this.m_eps || n6 >= na) {
          const e6 = new x();
          if (e6.setCoords(h3, m2), this.closeToCircularArc(this.m_left, e6, a3, g, i2[i2.length - 2].pt, this.m_leftArc)) {
            t2 && (this.m_bReversedLeft ? o2.push(h3) : t2.push(m2)), s2++, i2.pop();
            continue;
          }
          n6 = 0, r2 = this.m_leftArc.maxError;
        }
        e5.t = l2, e5.pt.setCoordsPoint2D(g), r2 *= ra2, n6++, e5.err = r2, e5.checkCount = n6, i2.push(ia(a3, h3, r2, n6));
      }
      this.m_bReversedLeft && t2 && (t2.length = t2.length + o2.length, Dt(t2, o2.reverse(), t2.length - o2.length, 0, o2.length), o2.length = 0), i2.length = 0;
    }
    return s2;
  }
  approximateWithCirclesImplPolyline(e3) {
    const t2 = new Qs2(), s2 = [];
    if (!this.approximateWithCirclesImpl(true, s2)) return t2;
    let n5 = 0;
    const r = this.m_left.getStartXY();
    t2.startPath(r);
    for (let i2 = 1; i2 < s2.length; ++i2) if (e3) t2.lineTo(this.m_left.getCoord2D(s2[i2]));
    else {
      const e4 = new mi();
      this.m_left.queryCoord2D(s2[i2], e4);
      const o2 = new mi();
      this.m_left.queryCoord2D(0.5 * (s2[i2] + n5), o2);
      const a2 = new qh();
      a2.constructCircularArcThreePoint(r, e4, o2), t2.addSegment(a2, false), r.assign(e4), n5 = s2[i2];
    }
    return t2;
  }
  static goodOrientation(e3, t2) {
    const s2 = e3.getCoord2D(t2.vmin), n5 = e3.getCoord2D(t2.vmax);
    return s2.compare(n5) < 0;
  }
  progress_(e3 = false) {
  }
};
function aa(e3, t2, s2, n5, r, i2, o2) {
  ma(e3, t2, s2, r, i2, o2), Ca(e3, s2, o2);
}
function ha(e3, t2, s2, n5) {
  if (!h(e3.getGeometryType())) return e3;
  const r = e3.getImpl();
  if (!r.hasNonLinearSegments()) return e3;
  const o2 = e3.createInstance();
  if (o2.getGeometryType() === a.enumPolygon) {
    o2.setFillRule(e3.getFillRule());
  }
  new yr();
  const a2 = new se(), m2 = new Pm(), l2 = [], g = [], u = [], c = e3.getDescription().getAttributeCount() > 1, _ = r.querySegmentIterator();
  for (; _.nextPath(); ) {
    let e4 = true;
    for (; _.hasNextSegment(); ) {
      const n6 = _.isClosingSegment(), r2 = _.nextSegment();
      if (!r2.isCurve()) {
        o2.addSegment(r2, e4, n6), e4 = false;
        continue;
      }
      let h2, d2 = false;
      const p3 = true, f3 = true;
      switch (r2.getGeometryType()) {
        case a.enumEllipticArc:
        case a.enumRationalBezier2:
          h2 = jh(r2, t2, s2, p3, f3, g, u, l2), d2 = true;
          break;
        default:
          h2 = Gh(r2, t2, s2, true, p3, g, l2);
      }
      const x3 = d2 ? 2 : 3;
      g[1].isNAN() ? (m2.createLine(), m2.get().construct(g[0], g[x3])) : d2 ? (m2.createQuadraticRationalBezier(), m2.get().constructArrayWeights(g, u)) : (m2.createCubicBezier(), m2.get().constructPoints(g)), c && e4 && (r2.queryCoord(l2[0], a2), m2.get().setStart(a2)), c && (r2.queryCoord(l2[1], a2), m2.get().setEnd(a2)), o2.addSegment(m2.get(), e4, n6 && 1 === h2), e4 = false;
      for (let e5 = 1, t3 = h2, s3 = x3; e5 < t3; ++e5, s3 += x3) g[s3 + 1].isNAN() ? (m2.createLine(), m2.get().construct(g[s3], g[s3 + x3])) : d2 ? (m2.createQuadraticRationalBezier(), m2.get().constructArrayWeights(g.slice(s3), u.slice(s3))) : (m2.createCubicBezier(), m2.get().constructPoints(g.slice(s3))), c && (r2.queryCoord(l2[e5 + 1], a2), m2.get().setEnd(a2)), o2.addSegment(m2.get(), false, n6 && e5 + 1 === t3);
    }
  }
  return o2;
}
function ma(e3, t2, s2, n5, r, i2) {
  e3.hasCurves() ? (e3.setCurveStitcherPointer(n5), n5.m_impl = new xa(i2, false, null), n5.m_impl.buildMonotonicCurveParentage(e3, t2, s2, r)) : n5.m_impl = null;
}
function la(e3, t2, s2, n5, r, i2, o2, a2) {
  e3.hasCurves() ? (e3.setCurveStitcherPointer(i2), i2.m_impl = new xa(a2, true, r), i2.m_impl.buildMonotonicCurveParentage(e3, t2, s2, o2), Ca(e3, s2, a2)) : i2.m_impl = null;
}
function ga(e3) {
  if (!e3.hasSegmentParentage()) return;
  const t2 = e3.queryVertexIteratorOnSelection();
  for (let s2 = t2.next(); s2 !== gr; s2 = t2.next()) if (!e3.getSegmentParentageBreakVertex(s2)) {
    e3.getPathFromVertex(s2);
    const t3 = e3.getPrevVertex(s2), n5 = t3 !== gr ? e3.getSegmentParentage(t3) : -1, r = e3.getSegmentParentage(s2);
    -1 !== r && -1 !== n5 && r !== n5 && e3.setSegmentParentageBreakVertex(s2, true);
  }
}
function ua(e3) {
  if (!e3.hasSegmentParentage()) return;
  ga(e3);
  const t2 = new st(0), s2 = e3.queryVertexIteratorOnSelection();
  for (let o2 = s2.next(); o2 !== gr; o2 = s2.next()) t2.add(o2);
  if (0 === t2.size()) return;
  e3.sortVerticesSimpleByY(t2, 0, t2.size()), t2.add(gr);
  const n5 = mi.getNAN();
  e3.queryXY(t2.read(0), n5);
  let r = 0;
  const i2 = mi.getNAN();
  for (let o2 = 1, a2 = t2.size(); o2 < a2; o2++) {
    {
      const s3 = t2.read(o2);
      s3 !== gr ? e3.queryXY(s3, i2) : i2.setNAN();
    }
    if (!i2.isEqualPoint2D(n5)) {
      if (o2 - r > 1) {
        let s3 = false;
        for (let n6 = r; n6 < o2; ++n6) {
          const r2 = t2.read(n6);
          if (e3.getSegmentParentageBreakVertex(r2)) {
            s3 = true;
            break;
          }
        }
        if (!s3) {
          const n6 = (t3, s4, n7) => {
            const r2 = e3.getPrevVertex(t3), i4 = e3.getNextVertex(t3);
            r2 !== gr ? s4.assign(e3.getXY(r2)) : s4.setNAN(), i4 !== gr ? n7.assign(e3.getXY(i4)) : n7.setNAN();
          }, i3 = new mi(), a3 = new mi();
          n6(t2.read(r), i3, a3);
          for (let e4 = r + 1; e4 < o2; ++e4) {
            const r2 = t2.read(e4);
            if (r2 === gr) continue;
            const o3 = new mi(), h2 = new mi();
            n6(r2, o3, h2);
            const m2 = (e5, t3) => !!(e5.equals(t3) || e5.isNAN() && t3.isNAN());
            if (!(m2(o3, i3) && m2(h2, a3) || m2(h2, i3) && m2(o3, a3))) {
              s3 = true;
              break;
            }
          }
        }
        if (s3) for (let n6 = r; n6 < o2; ++n6) e3.setSegmentParentageBreakVertex(t2.read(n6), true);
      }
      n5.setCoordsPoint2D(i2), r = o2;
    }
  }
}
function ca(e3, t2) {
  let s2 = t2.isEmpty() ? e3 : qt2(null, t2, true).total();
  return s2 > e3 && (s2 = e3), 0.125 * s2;
}
function _a(e3, t2) {
  return t2 || (t2 = n3.constructEmpty()), ca(e3, t2);
}
function da(e3, t2) {
  return 0.125 * e3;
}
function pa(e3, t2) {
  return 3 * e3 + 3 * t2;
}
var fa = class {
  constructor() {
    this.m_impl = null;
  }
  stitchCurves(e3, t2, s2, n5) {
    this.m_impl && (this.m_impl.stitchCurves(e3, t2, s2), n5 && this.clearStitcher(e3));
  }
  clearStitcher(e3) {
    this.m_impl && (this.m_impl.clearStitcher(e3), this.m_impl = null);
  }
  getOriginalVertexIndex(e3, t2) {
    return this.m_impl.getOriginalVertexIndex(e3, t2);
  }
  getOriginalSegmentTypeInfo(e3) {
    return this.m_impl.getOriginalSegmentTypeInfo(e3);
  }
};
var xa = class _xa {
  constructor(e3, t2, s2) {
    this.m_originalPlanarSegments = [], this.m_progressTracker = null, this.m_nsr = null, this.m_progressTracker = e3, this.m_nsr = s2, this.m_tolerance = 0, this.m_originalVertexIndex = -1, this.m_type = 1, this.m_progressCounter = 0, this.m_bIsSimple = t2, this.m_densificationDeviation = NaN, this.m_maxSegmentsPerCurve = -1;
  }
  buildMonotonicCurveParentage(e3, t2, s2, n5) {
    const r = false, o2 = true;
    if (!e3.hasCurves()) return;
    n(!e3.hasSegmentParentage()), this.m_originalPlanarSegments.length = 0, this.m_bIsSimple && (this.m_originalVertexIndex = e3.createUserIndex()), this.m_tolerance = s2;
    const a2 = new se(), h2 = new Pm(), m2 = [], g = [], u = [];
    for (let c = e3.getFirstGeometry(); c !== gr; c = e3.getNextGeometry(c)) for (let n6 = e3.getFirstPath(c); n6 !== gr; n6 = e3.getNextPath(n6)) {
      let c2 = e3.getPathSize(n6), _ = e3.getFirstVertex(n6), d2 = 0, p3 = -1;
      for (let f3 = 0; f3 < c2; f3++) {
        let x3 = e3.getNextVertex(_);
        if (!e3.querySegment(_, h2, true, false)) {
          _ = x3;
          continue;
        }
        if (0 === d2) {
          p3 = e3.getVertexIndex(_);
          const t3 = _xa.regularizeCurve(e3, h2.get(), _, s2);
          if (t3 >= 0) {
            this.m_nsr && 0 === this.m_nsr.m_reason && this.m_nsr.assign(new e(13, p3, -1)), d2 = t3, c2 = e3.getPathSize(n6), x3 = e3.getNextVertex(_);
            const s3 = e3.querySegment(_, h2, true, false);
            n(s3);
          }
        } else d2--;
        const y2 = e3.getVertexIndex(_);
        let P3;
        -1 !== this.m_originalVertexIndex && e3.setUserIndex(_, this.m_originalVertexIndex, p3), e3.setSegmentToIndex(y2, null);
        let E2 = false;
        switch (h2.get().getGeometryType()) {
          case a.enumEllipticArc:
          case a.enumRationalBezier2:
            P3 = jh(h2.get(), t2, s2, r, o2, g, u, m2), E2 = true;
            break;
          default: {
            const e4 = !this.m_bIsSimple || !h2.get().isMonotoneQuickAndDirty();
            P3 = Gh(h2.get(), t2, s2, e4, r, g, m2);
          }
        }
        const S2 = this.m_originalPlanarSegments.length;
        if (e3.setSegmentParentageAndBreak(_, S2, true), !g[1].isNAN()) {
          let t3 = null;
          t3 = E2 ? new Dn({ points: g, weights: u }) : new ra({ cp: g }), t3.snapControlPoints(s2 * s2), e3.setSegmentToIndex(y2, t3);
        }
        const C2 = E2 ? 2 : 3;
        for (let t3 = 1, r2 = P3, i2 = C2; t3 < r2; ++t3, i2 += C2) {
          h2.get().queryCoord(m2[t3], a2);
          const r3 = e3.insertVertex(n6, x3, a2);
          if (-1 !== this.m_originalVertexIndex && e3.setUserIndex(r3, this.m_originalVertexIndex, p3), !g[i2 + 1].isNAN()) if (E2) {
            const t4 = new Dn({ points: g.slice(i2), weights: u.slice(i2) });
            t4.snapControlPoints(s2 * s2), e3.setSegmentToIndex(e3.getVertexIndex(r3), t4);
          } else {
            const t4 = new ra({ cp: g.slice(i2) });
            t4.snapControlPoints(s2 * s2), e3.setSegmentToIndex(e3.getVertexIndex(r3), t4);
          }
          e3.setSegmentParentageAndBreak(r3, S2, false);
        }
        P3 > 1 && (f3 += P3 - 1, c2 = e3.getPathSize(n6)), this.m_originalPlanarSegments.push(h2.releaseSegment()), _ = x3;
      }
    }
  }
  buildLinearSegmentParentage(e3, t2, s2, n5, r) {
    if (this.m_type = 0, this.m_densificationDeviation = t2, this.m_maxSegmentsPerCurve = n5, !e3.hasCurves()) return;
    n(!e3.hasSegmentParentage()), this.m_tolerance = s2, this.m_originalPlanarSegments = [], this.m_bIsSimple && (this.m_originalVertexIndex = e3.createUserIndex());
    const i2 = new se(), o2 = new Pm(), a2 = new Zh(0, t2, 0, this.m_progressTracker, false, n5), h2 = [];
    for (let m2 = e3.getFirstGeometry(); m2 !== gr; m2 = e3.getNextGeometry(m2)) for (let t3 = e3.getFirstPath(m2); t3 !== gr; t3 = e3.getNextPath(t3)) {
      let n6 = e3.getPathSize(t3), r2 = e3.getFirstVertex(t3);
      for (let m3 = 0; m3 < n6; m3++) {
        let m4 = e3.getNextVertex(r2);
        if (!e3.querySegment(r2, o2, true, false)) {
          r2 = m4;
          continue;
        }
        if (_xa.regularizeCurve(e3, o2.get(), r2, s2) >= 0) {
          n6 = e3.getPathSize(t3), m4 = e3.getNextVertex(r2);
          const s3 = e3.querySegment(r2, o2, true, false);
          n(s3);
        }
        const g = e3.getVertexIndex(r2);
        -1 !== this.m_originalVertexIndex && e3.setUserIndex(r2, this.m_originalVertexIndex, g), e3.setSegmentToIndex(g, null), h2.length = 0, a2.densifySegment(o2.get(), h2), this.progress_();
        const u = this.m_originalPlanarSegments.length;
        e3.setSegmentParentageAndBreak(r2, u, true);
        for (let s3 = 1, n7 = h2.length - 1; s3 < n7; ++s3) {
          o2.get().queryCoord(h2[s3], i2);
          const n8 = e3.insertVertex(t3, m4, i2);
          e3.setSegmentParentageAndBreak(n8, u, false), -1 !== this.m_originalVertexIndex && e3.setUserIndex(n8, this.m_originalVertexIndex, g);
        }
        this.m_originalPlanarSegments.push(o2.releaseSegment()), r2 = m4;
      }
    }
    e3.clearSegments();
  }
  stitchCurves(e3, t2, s2) {
    _xa.st_stitchCurvesImpl(this, e3, t2, s2, false);
  }
  clearStitcher(e3) {
    this.m_originalPlanarSegments.length = 0, -1 !== this.m_originalVertexIndex && (e3.removeUserIndex(this.m_originalVertexIndex), this.m_originalVertexIndex = -1), e3.deleteSegmentParentage();
  }
  static st_verifyParentage(e3) {
    _xa.st_stitchCurvesImpl(null, e3, gr, 0, true);
  }
  getOriginalVertexIndex(e3, t2) {
    return -1 !== this.m_originalVertexIndex && t2 !== gr ? e3.getUserIndex(t2, this.m_originalVertexIndex) : -1;
  }
  getOriginalSegmentTypeInfo(e3) {
    if (-1 !== e3) {
      const t2 = this.m_originalPlanarSegments[e3];
      switch (t2.getGeometryType()) {
        case a.enumEllipticArc:
          return 0 === t2.projectionBehavior() ? 0 : 1;
        case a.enumBezier:
          return 2;
        case a.enumBezier2:
          return 3;
        case a.enumLine:
          return -1;
        case a.enumRationalBezier2:
          return 4;
        default:
          z("");
      }
    }
    return -1;
  }
  progress_(e3 = false) {
    this.m_progressCounter++;
  }
  processSpanSmartTe_(e3, t2, s2, n5, r, i2, o2) {
    if (t2 === s2 && 0 === n5) return n(e3.getNextVertex(t2) === gr), e3.setSegmentToIndex(e3.getVertexIndex(t2), null), void e3.setSegmentParentageAndBreak(t2, -1);
    const a2 = e3.getNextVertex(t2), h2 = e3.getXY(t2), m2 = e3.getXY(s2);
    let g, u = 0;
    {
      let t3 = 2, r2 = h2;
      for (let n6 = a2; n6 !== s2; n6 = e3.getNextVertex(n6)) {
        const s3 = e3.getXY(n6);
        u += mi.distance(s3, r2), r2 = s3, t3++;
      }
      u += mi.distance(m2, r2), n(t3 === n5);
    }
    if (null === r) return e3.setSegmentToIndex(e3.getVertexIndex(t2), null), void e3.removeVertices(a2, s2);
    const c = o2;
    let _ = r.getClosestCoordinate(h2, false), d2 = r.getClosestCoordinate(m2, false);
    const p3 = r.calculateLength2D();
    let f3 = r.tToLength(_), x3 = r.tToLength(d2);
    const y2 = Math.abs(f3) > 10 * c && Math.abs(f3 - p3) > 10 * c, P3 = Math.abs(x3) > 10 * c && Math.abs(x3 - p3) > 10 * c, E2 = (e4) => {
      const t3 = e4.calculateLength2D();
      return Math.abs(t3 - u) > Math.max(0.2 * u, 4 * c) ? null : e4;
    };
    let S2 = r.isClosed();
    if (!S2) {
      const e4 = mi.distance(r.getStartXY(), r.getEndXY());
      e4 <= c && p3 > 5 * e4 && (S2 = true);
    }
    if (S2) {
      let i3, o3, a3 = new mi();
      if (2 === n5) a3 = mi.lerp(h2, m2, 0.5), i3 = r.getClosestCoordinate(a3, false), o3 = r.tToLength(i3);
      else {
        let s3 = e3.getNextNthVertex(t2, (n5 - 1) / 2);
        a3 = e3.getXY(s3), i3 = r.getClosestCoordinate(a3, false), o3 = r.tToLength(i3);
        let h3 = Math.abs(o3) > 10 * c && Math.abs(o3 - p3) > 10 * c;
        if (!h3 && (n5 - 1 >= 4 && (s3 = e3.getNextNthVertex(t2, (n5 - 1) / 4), i3 = r.getClosestCoordinate(a3, false), o3 = r.tToLength(i3), h3 = Math.abs(o3) > 10 * c && Math.abs(o3 - p3) > 10 * c), !h3)) return;
      }
      let u2 = false;
      const S3 = f3 === x3;
      if (S3) {
        const s3 = 0;
        let i4 = 2, o4 = 4;
        n5 - 1 <= 4 && (i4 = s3 + 1, o4 = s3 + 2);
        const a4 = h2, m3 = e3.getXY(e3.getNextNthVertex(t2, i4)), l2 = e3.getXY(e3.getNextNthVertex(t2, o4));
        u2 = -mi.orientationNonRobust(a4, m3, l2) * K(r.calculateArea2DHelper()) > 0;
      } else P3 ? y2 ? u2 = o3 > f3 : o3 < x3 ? (f3 = 0, _ = 0) : (f3 = p3, _ = 1) : o3 > f3 ? (x3 = p3, d2 = 1) : (x3 = 0, d2 = 0);
      if (S3) g = r.clone(), g.dropAllAttributes(), u2 || g.reverse(), n(h2.equals(m2));
      else {
        let e4 = false;
        _ > d2 && (e4 = true, [_, d2] = [d2, _]), g = r.cut(_, d2, true), g.getDescription().getAttributeCount(), e4 && g.reverse();
      }
      g.setCoordsForIntersector(h2, m2, false), g = E2(g), g && (this.removeSpanBetween(e3, t2, s2), e3.setSegmentToIndex(e3.getVertexIndex(t2), g));
    } else if (y2 || P3) {
      if (!y2 || !P3) {
        if (mi.distance(r.getStartXY(), r.getEndXY()) < 10 * c) {
          const n7 = [$t(_, d2), $t(_, d2), $t(_, d2)];
          y2 ? (n7[1].second = 0, n7[2].second = 1) : (n7[1].first = 1, n7[2].first = 0);
          const i3 = [null, null, null], o3 = [0, 0, 0];
          let a3 = Number.MAX_VALUE, l2 = 0;
          for (let e4 = 0; e4 < 3; e4++) {
            let t3 = false;
            if (n7[e4].first > n7[e4].second) {
              t3 = true;
              const s4 = n7[e4].first;
              n7[e4].first = n7[e4].second, n7[e4].second = s4;
            }
            i3[e4] = r.cut(n7[e4].first, n7[e4].second, true), i3[e4].dropAllAttributes(), t3 && i3[e4].reverse(), i3[e4].setCoordsForIntersector(h2, m2, false), o3[e4] = i3[e4].calculateLength2D();
            const s3 = Math.abs(u - o3[e4]);
            s3 < a3 && (a3 = s3, l2 = e4);
          }
          return g = i3[l2], g = E2(g), void (g && (this.removeSpanBetween(e3, t2, s2), e3.setSegmentToIndex(e3.getVertexIndex(t2), g)));
        }
      }
      let n6 = false;
      _ > d2 && (n6 = true, [_, d2] = [d2, _]), g = r.cut(_, d2, true), g.dropAllAttributes(), n6 && g.reverse(), g.setCoordsForIntersector(h2, m2, false), g = E2(g), g && (this.removeSpanBetween(e3, t2, s2), e3.setSegmentToIndex(e3.getVertexIndex(t2), g));
    } else {
      if (g = r.clone(), g.dropAllAttributes(), f3 > x3 && g.reverse(), u < Math.max(0.75 * p3, p3 - this.m_densificationDeviation * (n5 - 1))) {
        const e4 = _ > d2 ? d2 : _, t3 = g.tToLength(e4) + u;
        let s3 = g.lengthToT(t3);
        s3 = Us(s3, e4, 1), g = g.cut(e4, s3, true);
      }
      g.setCoordsForIntersector(h2, m2, false), g = E2(g), g && (this.removeSpanBetween(e3, t2, s2), e3.setSegmentToIndex(e3.getVertexIndex(t2), g));
    }
  }
  processSpanCurves_(e3, t2, s2, n5, r, i2, o2) {
    if (t2 === s2 && 0 === n5) return n(e3.getNextVertex(t2) === gr), e3.setSegmentToIndex(e3.getVertexIndex(t2), null), void e3.setSegmentParentageAndBreak(t2, -1);
    const a2 = e3.getNextVertex(t2);
    {
      let t3 = 2;
      for (let n6 = a2; n6 !== s2; n6 = e3.getNextVertex(n6)) t3++;
      n(t3 === n5);
    }
    if (null === r) return e3.setSegmentToIndex(e3.getVertexIndex(t2), null), void e3.removeVertices(a2, s2);
    const h2 = e3.getXY(t2), m2 = e3.getXY(s2);
    if (r.isClosed()) {
      if (h2.isEqualPoint2D(m2) && h2.isEqualPoint2D(r.getStartXY())) {
        let a3;
        if (a3 = this.verifySegmentFitnessCurves(e3, t2, s2, n5, r, i2, o2)) {
          const n6 = r.clone();
          return n6.dropAllAttributes(), a3 < 0 && n6.reverse(), this.removeSpanBetween(e3, t2, s2), void e3.setSegmentToIndex(e3.getVertexIndex(t2), n6);
        }
      }
    } else if (h2.isEqualPoint2D(r.getStartXY())) {
      if (m2.isEqualPoint2D(r.getEndXY())) {
        const a3 = r.clone();
        a3.dropAllAttributes();
        const h3 = this.verifySegmentFitnessCurves(e3, t2, s2, n5, a3, i2, o2);
        if (h3) return n(h3 > 0), this.removeSpanBetween(e3, t2, s2), void e3.setSegmentToIndex(e3.getVertexIndex(t2), a3);
      }
    } else if (m2.isEqualPoint2D(r.getStartXY()) && h2.isEqualPoint2D(r.getEndXY())) {
      const a3 = r.getReversed();
      a3.dropAllAttributes();
      const h3 = this.verifySegmentFitnessCurves(e3, t2, s2, n5, a3, i2, o2);
      if (h3) return n(h3 > 0), this.removeSpanBetween(e3, t2, s2), void e3.setSegmentToIndex(e3.getVertexIndex(t2), a3);
    }
    this.processSpanSplitSegmentCurves(e3, t2, s2, n5, r, i2, o2);
  }
  processSpan_(e3, t2, s2, n5, r, i2, o2) {
    return 0 === this.m_type ? void this.processSpanSmartTe_(e3, t2, s2, n5, r, i2, o2) : void this.processSpanCurves_(e3, t2, s2, n5, r, i2, o2);
  }
  processSpanSplitSegmentCurves(e3, t2, s2, n5, r, i2, o2) {
    if (r.isLine()) return;
    if (this.fitSegmentToSpanCurves(e3, t2, s2, n5, r, i2, o2)) return;
    const a2 = o2 * o2;
    let h2 = n5, m2 = t2;
    const l2 = e3.getXY(t2);
    let g = r.getClosestCoordinate(l2, false);
    const u = r.getCoord2D(g);
    let c = false;
    const _ = mi.sqrDistance(l2, u);
    if (_ > a2) {
      const n6 = e3.getNextVertex(t2);
      if (this.approximateSpanSectionCurves(e3, t2, r, i2, o2), n6 === s2) return;
      m2 = n6, c = true, h2 -= 1;
    }
    let d2 = s2;
    const p3 = e3.getXY(s2);
    g = r.getClosestCoordinate(p3, false);
    const f3 = r.getCoord2D(g);
    let x3 = false;
    const y2 = mi.sqrDistance(p3, f3);
    if (y2 > a2) {
      const t3 = e3.getPrevVertex(s2);
      if (this.approximateSpanSectionCurves(e3, t3, r, i2, o2), t3 === m2) return;
      d2 = t3, x3 = true, h2 -= 1;
    }
    if ((c || x3) && this.fitSegmentToSpanCurves(e3, m2, d2, h2, r, i2, o2)) return;
    let P3 = false;
    if (!c && _ > 0) {
      const s3 = e3.getNextVertex(t2);
      if (this.approximateSpanSectionCurves(e3, t2, r, i2, o2), s3 === d2) return;
      m2 = s3, c = true, P3 = true, h2 -= 1;
    }
    if (!x3 && y2 > 0) {
      const t3 = e3.getPrevVertex(s2);
      if (this.approximateSpanSectionCurves(e3, t3, r, i2, o2), t3 === m2) return;
      d2 = t3, x3 = true, P3 = true, h2 -= 1;
    }
    if (P3 && this.fitSegmentToSpanCurves(e3, m2, d2, h2, r, i2, o2)) return;
    let E2 = m2;
    for (; ; ) {
      const t3 = e3.getNextVertex(E2);
      if (this.approximateSpanSectionCurves(e3, E2, r, i2, o2), E2 = t3, E2 === d2) return;
    }
  }
  fitSegmentToSpanCurves(e3, t2, s2, n5, r, i2, o2) {
    const a2 = [];
    a2.push(e3.getXY(t2));
    let h2 = t2;
    const m2 = new Pm();
    for (; ; ) {
      e3.querySegment(h2, m2, false, true);
      const t3 = [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9, 1];
      let r2 = 0;
      for (const e4 of t3) {
        (2 === n5 || 1 & r2) && a2.push(m2.get().getCoord2D(e4)), r2++;
      }
      if (h2 = e3.getNextVertex(h2), h2 === s2) break;
    }
    const l2 = (() => {
      let e4 = a2[0].compare(a2.at(-1));
      if (0 === e4) {
        const t3 = new n2(0);
        Qo(a2, a2.length, t3), e4 = t3.getResult() >= 0 ? -1 : 1;
      }
      return e4 > 0;
    })();
    l2 && a2.reverse();
    const g = r.clone();
    if (g.dropAllAttributes(), l2 && g.reverse(), g.setSegmentFromCoordsForStitcher(a2, a2.length), l2 && g.reverse(), g.snapControlPoints(this.m_tolerance * this.m_tolerance), this.verifySegmentFitnessCurves(e3, t2, s2, n5, g, i2, o2)) {
      this.removeSpanBetween(e3, t2, s2);
      const n6 = e3.getVertexIndex(t2);
      return e3.setSegmentToIndex(n6, g), true;
    }
    return false;
  }
  approximateSpanSectionCurves(e3, t2, s2, n5, r) {
    const o2 = new Pm();
    if (!e3.querySegment(t2, o2, true, false)) return;
    const h2 = s2.getGeometryType();
    if (h2 !== o2.get().getGeometryType()) {
      if (h2 === a.enumEllipticArc) {
        if (o2.get().getGeometryType() !== a.enumRationalBezier2) return;
        if (0 === s2.projectionBehavior()) {
          const s3 = [];
          ea(false, o2.get(), r, s3, this.m_progressTracker);
          const n6 = e3.getNextVertex(t2), i2 = e3.getPathFromVertex(t2), a2 = new se();
          let h3 = t2;
          for (let t3 = 1, r2 = s3.length; t3 < r2; t3++) {
            const r3 = s3[t3], m2 = o2.get().getCoord2D(s3[t3 - 1]), l2 = o2.get().getCoord2D(Q(s3[t3 - 1], r3, 0.5));
            o2.get().queryCoord(r3, a2);
            const g = a2.getXY(), u = new qh();
            u.constructCircularArcThreePoint(m2, g, l2);
            let c = gr;
            r3 < 1 && (c = e3.insertVertex(i2, n6, a2)), e3.setSegmentToIndex(e3.getVertexIndex(h3), u), h3 = c;
          }
          return;
        }
        {
          const s3 = Ot(mi, 3);
          o2.get().queryControlPoints(s3);
          const n6 = [0, 0, 0];
          o2.get().queryWeights(n6);
          const r2 = Ph(n6), i2 = new qh();
          return Wu(s3, r2 * r2, null, false, i2), void e3.setSegmentToIndex(e3.getVertexIndex(t2), i2);
        }
      }
      b("approximate_span_section_");
    }
  }
  verifySegmentFitnessCurves(e3, t2, s2, n5, r, i2, o2) {
    const a2 = e3.getXY(t2), h2 = e3.getXY(s2);
    if (!a2.isEqualPoint2D(r.getStartXY()) || !h2.isEqualPoint2D(r.getEndXY())) return 0;
    let m2 = 0;
    if (r.isClosed()) {
      const e4 = r.getCoord2D(0.1).sub(a2);
      m2 = r.getCoord2D(0.7).sub(a2).crossProduct(e4) >= 0 ? 1 : -1;
    }
    const l2 = Yt(ms.s_maxMonotonicPartParams, Number.NaN);
    let g = r.getMonotonicPartParams(l2.length, l2);
    g--;
    const u = new fm(), c = [1, 0.5, 0.75, 0.25];
    let _ = 0, d2 = t2;
    const p3 = a2.clone();
    for (; ; ) {
      const t3 = e3.getNextVertex(d2);
      let n6 = e3.getSegment(d2);
      null === n6 && (e3.queryLineConnector(d2, u, true), n6 = u);
      for (let e4 = t3 === s2 ? 1 : 0; e4 < c.length; e4++) {
        const t4 = n6.getCoord2D(c[e4]);
        if (!r.isCloserThanDistance(t4, x.unit(), o2)) return 0;
      }
      if (g > 1) for (let e4 = 1; e4 < g; ) {
        const t4 = r.getCoord2D(l2[e4]);
        n6.isCloserThanDistance(t4, x.unit(), o2) ? (l2[g - 1] = Pt(l2[e4], l2[e4] = l2[g - 1]), g--) : e4++;
      }
      if (m2) {
        const e4 = n6.getCoord2D(0.25);
        _ += e4.sub(a2).crossProduct(p3.sub(a2)), p3.assign(e4), e4.assign(n6.getCoord2D(0.75)), _ += e4.sub(a2).crossProduct(p3.sub(a2)), p3.assign(e4);
      }
      if (d2 = t3, d2 === s2) return g > 1 ? 0 : m2 ? _ < 0 ? -m2 : m2 : 1;
    }
  }
  removeSpanBetween(e3, t2, s2) {
    e3.setSegmentToIndex(e3.getVertexIndex(t2), null);
    const n5 = e3.getNextVertex(t2);
    n5 !== s2 && e3.removeVertices(n5, s2);
  }
  static st_stitchCurvesImpl(e3, t2, s2, n5, r) {
    if (!t2.hasSegmentParentage()) return;
    ga(t2);
    let i2 = s2 === gr ? t2.getFirstGeometry() : s2;
    for (; i2 !== gr; ) if (p(t2.getGeometryType(i2))) {
      for (let s3 = t2.getFirstPath(i2); s3 !== gr; s3 = t2.getNextPath(s3)) {
        let i3 = t2.getPathSize(s3);
        const o2 = t2.isClosedPath(s3);
        o2 && (i3 += 1);
        let a2 = t2.getFirstVertex(s3);
        const h2 = t2.getSegmentParentage(a2);
        if (o2) {
          if (-1 !== h2 && !t2.getSegmentParentageBreakVertex(a2)) {
            let e4 = t2.getPrevVertex(a2);
            const s4 = a2;
            for (let n6 = 0; ; n6++) {
              const r2 = t2.getSegmentParentage(e4);
              if (h2 !== r2) {
                n(-1 === r2);
                break;
              }
              if (a2 = e4, t2.getSegmentParentageBreakVertex(e4)) break;
              if (e4 === s4) {
                a2 = s4, t2.setSegmentParentageBreakVertex(a2, true);
                break;
              }
              e4 = t2.getPrevVertex(e4), n(n6 < i3);
            }
          }
        } else n(-1 === h2 || t2.getSegmentParentageBreakVertex(a2));
        let m2 = a2;
        for (let s4 = 0; s4 < i3 && m2 !== gr; ) {
          const o3 = t2.getSegmentParentage(m2);
          if (-1 === o3) {
            if (s4++, m2 = t2.getNextVertex(m2), m2 === a2) break;
            continue;
          }
          let h3 = 0, g = gr;
          const u = m2;
          h3 = 1;
          let c = t2.getNextVertex(u);
          for (; s4 < i3 && c !== gr; ) {
            s4++, g = c, h3++;
            const e4 = t2.getSegmentParentage(c);
            if (-1 === e4 || t2.getSegmentParentageBreakVertex(c)) break;
            n(e4 === o3), c = t2.getNextVertex(c);
          }
          if (g === gr) {
            n(0);
            break;
          }
          if (!r) {
            const s5 = e3.m_originalPlanarSegments[o3];
            e3.processSpan_(t2, u, g, h3, s5, o3, n5);
          }
          if (m2 = g, m2 === a2) break;
        }
      }
      if (s2 !== gr) break;
      i2 = t2.getNextGeometry(i2);
    } else i2 = s2 === gr ? t2.getNextGeometry(i2) : gr;
  }
  static st_stitchCurvesFromLinesImpl(e3, t2, s2, n5, r) {
    let i2 = s2 === gr ? t2.getFirstGeometry() : s2;
    for (; i2 !== gr; ) {
      for (let s3 = t2.getFirstPath(i2); s3 !== gr; s3 = t2.getNextPath(s3)) {
        let i3 = t2.getPathSize(s3);
        t2.isClosedPath(s3) && (i3 += 1);
        let o2 = true, a2 = false;
        const h2 = t2.getFirstVertex(s3);
        let m2 = h2;
        for (let s4 = 0; s4 < i3 && m2 !== gr; ) {
          let g = t2.getSegmentParentage(m2);
          if (-1 === g || o2) {
            o2 = false, s4++, m2 = t2.getNextVertex(m2), a2 = true;
            continue;
          }
          let u, c, _ = 0;
          if (a2 ? (u = t2.getPrevVertex(m2), c = m2, n(u !== gr), n(c !== u), n(-1 === t2.getSegmentParentage(u) || h2 === u)) : (u = m2, c = t2.getNextVertex(u), s4++, n(c !== gr), n(c !== u), g = t2.getSegmentParentage(c)), _ = 2, a2 = false, -1 === g || t2.getSegmentParentageBreakVertex(c)) {
            m2 = c;
            continue;
          }
          let d2 = t2.getNextVertex(c);
          for (s4++; s4 < i3 && d2 !== gr; ) {
            c = d2, _++;
            const e4 = t2.getSegmentParentage(d2);
            if (-1 === e4 || t2.getSegmentParentageBreakVertex(d2)) break;
            n(e4 === g), s4++, d2 = t2.getNextVertex(d2);
          }
          if (!r) {
            const s5 = e3.m_originalPlanarSegments[g];
            e3.processSpan_(t2, u, c, _, s5, g, n5);
          }
          m2 = c;
        }
      }
      if (s2 !== gr) break;
      i2 = t2.getNextGeometry(i2);
    }
  }
  static st_stitchCurvesFromCurvesImpl(e3, t2, s2, n5, r) {
    let i2 = s2 === gr ? t2.getFirstGeometry() : s2;
    for (; i2 !== gr; ) if (p(t2.getGeometryType(i2))) {
      for (let s3 = t2.getFirstPath(i2); s3 !== gr; s3 = t2.getNextPath(s3)) {
        let i3 = t2.getPathSize(s3);
        const o2 = t2.isClosedPath(s3);
        o2 && (i3 += 1);
        let a2 = t2.getFirstVertex(s3);
        if (o2) {
          if (-1 !== t2.getSegmentParentage(a2)) {
            let e4 = a2;
            for (let n6 = 0; !t2.getSegmentParentageBreakVertex(e4); n6++) {
              if (n6 === i3) {
                a2 = t2.getFirstVertex(s3), t2.setSegmentParentageBreakVertex(e4, true);
                break;
              }
              e4 = t2.getPrevVertex(e4);
            }
          }
        } else n(-1 === t2.getSegmentParentage(a2) || t2.getSegmentParentageBreakVertex(a2));
        let h2 = a2;
        for (let s4 = 0; s4 < i3 && h2 !== gr; ) {
          const o3 = t2.getSegmentParentage(h2);
          if (-1 === o3) {
            s4++, h2 = t2.getNextVertex(h2);
            continue;
          }
          let a3 = 0, m2 = gr;
          const g = h2;
          a3 = 1;
          let u = t2.getNextVertex(g);
          for (; s4 < i3 && u !== gr; ) {
            s4++, m2 = u, a3++;
            const e4 = t2.getSegmentParentage(u);
            if (-1 === e4 || t2.getSegmentParentageBreakVertex(u)) break;
            n(e4 === o3), u = t2.getNextVertex(u);
          }
          if (m2 === gr) break;
          if (!r) {
            const s5 = e3.m_originalPlanarSegments[o3];
            e3.processSpan_(t2, g, m2, a3, s5, o3, n5);
          }
          h2 = m2;
        }
      }
      if (s2 !== gr) break;
      i2 = t2.getNextGeometry(i2);
    } else i2 = s2 === gr ? t2.getNextGeometry(i2) : gr;
  }
  static regularizeCurve(e3, t2, s2, n5) {
    let r = t2.snapControlPoints(n5 * n5);
    if (r) {
      const n6 = e3.getVertexIndex(s2), r2 = t2.clone();
      e3.setSegmentToIndex(n6, r2);
    }
    if (t2.getGeometryType() === ra.type) {
      const i2 = [], o2 = t2.calculateSpecialPointsForCracking(n5, i2);
      if (o2 > 0) {
        const a2 = [];
        if (o2 > 1) {
          for (let e4 = 0; e4 < o2; e4++) if (a2.push(t2.getCoord2D(i2[e4])), e4 > 0) {
            const t3 = (Math.abs(a2[e4].x) + Math.abs(a2[e4].y)) * Ls(), s3 = mi.distance(a2[e4 - 1], a2[e4]);
            if (s3 < t3 && s3 > 0) {
              const t4 = new mi();
              Y(a2[e4 - 1], a2[e4], 0.5, t4), a2[e4 - 1] = t4, a2[e4] = t4;
            }
          }
        }
        e3.splitSegment(s2, i2, o2), r = e3.snapControlPoints(s2, o2 + 1, n5 * n5) || r;
        for (let t3 = 0; t3 < o2; t3++) s2 = e3.getNextVertex(s2), e3.setSegmentParentageBreakVertex(s2, true);
        return o2;
      }
    }
    return r ? 0 : -1;
  }
};
function ya(e3, t2, s2, n5, r) {
  return new ba(e3, s2, t2, n5, r).do_();
}
function Pa(e3, t2, s2) {
  const n5 = Pt2(e3);
  return ln(t2.getX(), t2.getY(), s2.getX(), s2.getY(), H(n5));
}
function Ea(e3, t2, s2 = 1, n5 = 1, r = 1, i2 = 1) {
  if (n5 > i2) return e3;
  if (i2 > n5) return t2;
  const o2 = [0], a2 = [0], h2 = new se();
  return cn(e3, t2, s2, n5, r, i2, h2, a2, o2), h2;
}
function Sa(e3, t2, s2) {
  const n5 = Pt2(t2), r = Ht2(t2);
  return !!_n(e3, n5, gr, null, s2) || Mn(true, e3, r, null, s2);
}
function Ca(e3, t2, s2) {
  return ba.fixCurveTwoPointLoops(e3, t2, s2);
}
function Ia(e3) {
  return Pt2(e3);
}
var ba = class _ba {
  constructor(e3, t2, s2, n5, r) {
    this.m_shape = e3, this.m_progressTracker = t2, this.m_tolerance = s2, this.m_bFilterDegenerateSegments = n5, this.m_bTrackChanges = r, this.m_progressCounter = 0;
  }
  do_() {
    const e3 = new bt(this.m_tolerance.tolerance, this.m_tolerance.resolution), t2 = 1e-5, s2 = 1e-6, n5 = Ia(e3);
    let r = Ht2(e3);
    const i2 = r * (1 + t2);
    r *= 1 + s2;
    let o2 = false;
    const h2 = this.m_shape.getTotalPointCount() + 10 > 30 ? 1e3 : (this.m_shape.getTotalPointCount() + 10) * (this.m_shape.getTotalPointCount() + 10), m2 = this.m_shape.hasPointFeatures();
    for (let l2 = 0; ; l2++) {
      this.m_shape.dbgCheckSelection(), l2 > h2 && b("crack_and_cluster_iteration_exceeded"), this.m_shape.dbgVerifyMonotone();
      let e4 = -1;
      0 === l2 && (e4 = this.firstCrack_(), o2 ||= e4 > 0);
      const t3 = this.cluster_(n5);
      if (this.m_shape.dbgVerifyMonotone(), o2 ||= t3, this.m_bFilterDegenerateSegments) {
        const e5 = 0 !== this.m_shape.filterClosePoints(n5, true, false, this.m_bTrackChanges, gr);
        o2 ||= e5, this.m_shape.dbgVerifyMonotone();
      }
      const s3 = this.m_shape.snapControlPointsOnSelection(i2 * i2);
      o2 ||= s3, this.m_shape.dbgCheckSelection();
      let g = false;
      if ((0 === l2 && -1 === e4 || m2 || Mn(true, this.m_shape, r, null, this.m_progressTracker)) && (g = this.crack_(i2), o2 ||= g, this.m_shape.dbgVerifyMonotone()), !g && !_ba.fixCurveTwoPointLoops(this.m_shape, n5, this.m_progressTracker)) {
        this.m_shape.dbgVerifyMonotone();
        break;
      }
    }
    return o2 && ua(this.m_shape), o2;
  }
  cluster_(e3) {
    return mn(this.m_shape, e3, gr, this.m_bTrackChanges, this.m_progressTracker);
  }
  crack_(e3) {
    return An(this.m_shape, e3, this.m_bTrackChanges, this.m_progressTracker);
  }
  static fixCurveTwoPointLoops(e3, t2, s2) {
    if (!e3.hasCurves()) return false;
    e3.dbgVerifyCurves();
    const n5 = e3.createUserIndexUninitialized(), r = new st(0), i2 = e3.queryVertexIteratorOnSelection();
    for (let l2 = i2.next(); l2 !== gr; l2 = i2.next()) r.add(l2), e3.setUserIndex(l2, n5, -1);
    if (0 === r.size()) return false;
    r.add(gr), e3.sortVerticesSimpleByY(r, 0, r.size() - 1);
    let o2 = 0;
    const a2 = e3.getXY(r.read(o2)), h2 = new mi(Number.NaN, Number.NaN), m2 = [];
    for (let l2 = 1, g = r.size(); l2 < g; ++l2) {
      const t3 = r.read(l2), s3 = t3 !== gr ? e3.getXY(t3) : h2;
      if (s3.equals(a2)) continue;
      const i3 = [];
      for (let h3 = o2; h3 < l2; h3++) {
        const t4 = r.read(h3), s4 = e3.getPrevVertex(t4);
        if (s4 !== gr && -1 === e3.getUserIndex(s4, n5)) {
          const t5 = wa(e3.getXY(s4), e3.getSegment(s4));
          0 !== mi.sqrDistance(a2, t5.otherPt) && (t5.vert = s4, t5.dir = -1, i3.push(t5)), e3.setUserIndex(s4, n5, 1);
        }
        const o3 = e3.getNextVertex(t4);
        if (o3 !== gr && -1 === e3.getUserIndex(t4, n5)) {
          const s5 = wa(e3.getXY(o3), e3.getSegment(t4));
          0 !== mi.sqrDistance(a2, s5.otherPt) && (s5.vert = t4, s5.dir = 1, i3.push(s5)), e3.setUserIndex(t4, n5, 1);
        }
      }
      if (i3.length > 1) {
        i3.sort((e5, t5) => Ta(e5, t5));
        const e4 = wa(h2.clone(), null);
        i3.push(e4);
        let t4 = 0;
        for (let s4 = 1, n6 = i3.length; s4 < n6; s4++) if (!i3[s4].otherPt.equals(i3[s4 - 1].otherPt)) {
          if (s4 - t4 > 1 && null !== i3[t4].seg) {
            let e5 = false;
            const n7 = t4;
            for (let r2 = t4 + 1; r2 < s4; r2++) if (!va(i3[n7], i3[r2])) {
              e5 = true;
              break;
            }
            if (e5) for (let r2 = t4; r2 < s4 && null !== i3[r2].seg; r2++) m2.push(i3[r2].vert);
          }
          t4 = s4;
        }
      }
      o2 = l2, a2.setCoordsPoint2D(s3);
    }
    for (const g of m2) {
      const s3 = e3.getSegment(g);
      n(null !== s3);
      const n6 = e3.getXY(g), r2 = e3.getXY(e3.getNextVertex(g));
      if (mi.distance(n6, r2) < 3 * t2) e3.setSegmentToIndex(e3.getVertexIndex(g), null);
      else {
        const t3 = s3.lengthToT(0.5 * s3.calculateLength2D());
        e3.splitSegment(g, [t3], 1);
      }
    }
    return e3.removeUserIndex(n5), m2.length > 0;
  }
  firstCrack_() {
    const e3 = this.m_shape.getEnvelope2D(this.m_progressTracker), t2 = qt2(null, e3, true).total();
    if (4 * t2 < this.m_tolerance.total()) {
      let e4 = false;
      const s2 = 1.1 * t2, n5 = t2, r = this.cluster_(s2);
      e4 ||= r;
      let i2 = 0;
      this.m_bFilterDegenerateSegments && (i2 = this.m_shape.filterClosePoints(0, true, false, this.m_bTrackChanges, gr));
      const o2 = this.crack_(n5);
      return e4 ||= o2, e4 ? 1 : i2 ? 2 : 0;
    }
    return -1;
  }
  progress_(e3 = false) {
    this.m_progressCounter++, !e3 && 4095 & this.m_progressCounter || (this.m_progressCounter = 0);
  }
};
function wa(e3, t2) {
  return { otherPt: e3, seg: t2, vert: -1, dir: 0 };
}
function va(e3, t2) {
  if (n(e3.otherPt.equals(t2.otherPt)), null === e3.seg) return null === t2.seg;
  if (null === t2.seg) return false;
  const s2 = e3.seg.getGeometryType();
  if (s2 !== t2.seg.getGeometryType()) return false;
  if (s2 === a.enumBezier) {
    const s3 = e3.seg, n5 = t2.seg;
    let r = s3.getControlPoint1(), i2 = s3.getControlPoint2();
    -1 === e3.dir && (i2 = Pt(r, r = i2));
    let o2 = n5.getControlPoint1(), a2 = n5.getControlPoint2();
    return -1 === t2.dir && (a2 = Pt(o2, o2 = a2)), r.equals(o2) && i2.equals(a2);
  }
  if (s2 === a.enumRationalBezier2) {
    const s3 = e3.seg, n5 = t2.seg, r = s3.getControlPoint1(), i2 = n5.getControlPoint1();
    if (!r.equals(i2)) return false;
    const o2 = [0, 0, 0];
    s3.queryWeights(o2), -1 === e3.dir && (o2[2] = Pt(o2[0], o2[0] = o2[2]));
    const a2 = [0, 0, 0];
    return n5.queryWeights(a2), -1 === t2.dir && (a2[2] = Pt(a2[0], a2[0] = a2[2])), o2[0] === a2[0] && o2[1] === a2[1] && o2[2] === a2[2];
  }
  b("");
}
function Na(e3, t2) {
  if (null === e3.seg || null === t2.seg) return null !== e3.seg ? -1 : null !== t2.seg ? 1 : 0;
  const s2 = e3.seg.getGeometryType(), n5 = t2.seg.getGeometryType();
  return s2 < n5 ? -1 : s2 > n5 ? 1 : 0;
}
function Ta(e3, t2) {
  const s2 = e3.otherPt.compare(t2.otherPt);
  return 0 !== s2 ? s2 : Na(e3, t2);
}
var Ga = h;
var Da = f;
var Va = m;
function Fa(e3) {
  switch (e3) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 0:
      return 0;
    default:
      n(0, "unrecognized cut side");
  }
  return 3;
}
function Ha() {
  return { unsplitBehavior: 0, allCrossRoadsImpassable: false, ogcRule: false };
}
function ka(e3, t2, s2, n5) {
  return new Ka(n5).autoCompleteImpl(e3, t2, s2);
}
function Aa(e3, t2, s2, n5, r, o2, a2) {
  const h2 = new Ka(r);
  h2.m_bOGCOutput = true;
  const m2 = e3.getGeometryType() === a.enumPolygon && 1 === e3.getFillRule() && !Vt2(n5);
  return h2.planarSimplifyImpl_(e3, t2, m2, s2, n5, r, o2, a2);
}
function Ma(e3, t2, s2, n5, r, i2, o2, a2) {
  return new Ka(i2).planarSimplifyImpl_(e3, t2, s2, n5, r, i2, o2, a2);
}
function Ua(e3, t2, s2, n5) {
  const r = new Ka(n5), i2 = new yr(), o2 = i2.addGeometry(t2), a2 = r.planarSimplifyNoCrackingAndCluster(e3, i2, o2, s2);
  n(a2, "planar_simplify_no_cracking_and_cluster");
  return i2.getGeometry(o2);
}
function qa(e3, t2, s2, n5, r, i2, o2) {
  return n(0), {};
}
function Ba(e3, t2, s2, n5) {
  return n(0), {};
}
function Oa(e3, t2, s2) {
  return Ja(e3, t2, s2);
}
function Ya(e3, t2, n5, r) {
  if (e3.isEmpty() || t2.isEmpty() || e3.getDimension() > t2.getDimension()) return $a(eh(e3), e3, t2, "-");
  const o2 = new n3();
  e3.queryEnvelope(o2);
  const a2 = new n3();
  t2.queryEnvelope(a2);
  const h2 = new n3();
  h2.setCoords({ env2D: o2 }), h2.mergeEnvelope2D(a2);
  const m2 = qt2(n5, h2, true), l2 = a2.clone(), g = Pt2(m2);
  if (l2.inflateCoords(g, g), !o2.isIntersecting(l2)) return $a(eh(e3), e3, t2, "-");
  const u = new Ka(r), c = new yr(), _ = c.addGeometry(eh(e3)), d2 = c.addGeometry(eh(t2));
  let p3 = 0, f3 = 0, x3 = null;
  if (c.hasCurves()) {
    x3 = new fa();
    const e4 = c.getEnvelope2D(r);
    f3 = da(m2.total());
    const t3 = _a(m2.total(), e4);
    p3 = pa(t3, f3), aa(c, t3, m2.total(), 12e3, x3, null, r);
  }
  u.setEditShapeCrackAndCluster(c, m2.add(p3));
  const y2 = u.difference(_, d2);
  null !== x3 && x3.stitchCurves(c, y2, f3, true);
  const P3 = $a(c.getGeometry(y2), e3, t2, "-");
  return Ga(P3.getGeometryType()) && (P3.getImpl().setIsSimple(4, m2.total()), P3.getGeometryType() === a.enumPolygon && P3.getImpl().updateOGCFlagsProtected()), P3;
}
function Ra(e3, t2, n5, r) {
  if (e3.getDimension() > t2.getDimension()) return $a(eh(e3), e3, t2, "^");
  if (e3.getDimension() < t2.getDimension()) return $a(eh(t2), e3, t2, "^");
  if (e3.isEmpty()) return $a(eh(t2), e3, t2, "^");
  if (t2.isEmpty()) return $a(eh(e3), e3, t2, "^");
  const o2 = new n3();
  e3.queryEnvelope(o2);
  const a2 = new n3();
  t2.queryEnvelope(a2);
  const h2 = new n3();
  h2.setCoords({ env2D: o2 }), h2.mergeEnvelope2D(a2);
  const m2 = qt2(n5, h2, true), l2 = new Ka(r), g = new yr(), u = g.addGeometry(eh(e3)), c = g.addGeometry(eh(t2));
  let _ = 0, d2 = null;
  if (g.hasCurves()) {
    d2 = new fa();
    const e4 = g.getEnvelope2D(r);
    _ = da(m2.total());
    aa(g, _a(m2.total(), e4), m2.total(), 12e3, d2, null, r);
  }
  l2.setEditShapeCrackAndCluster(g, m2);
  const p3 = l2.symmetricDifference(u, c);
  null !== d2 && d2.stitchCurves(g, p3, _, true);
  const f3 = $a(g.getGeometry(p3), e3, t2, "^");
  return Ga(f3.getGeometryType()) && (f3.getImpl().setIsSimple(4, m2.total()), f3.getGeometryType() === a.enumPolygon && f3.getImpl().updateOGCFlagsProtected()), f3;
}
function Xa(e3, t2, s2) {
  return Qa(e3, t2, s2, true);
}
function La(e3, t2, s2) {
  return e3.isEmpty() || t2.isEmpty() ? e3.createInstance() : Pa(s2, e3, t2) ? new se({ copy: Ea(e3, t2) }) : e3.createInstance();
}
function za(e3, t2, n5, r) {
  const o2 = n3.constructEmpty();
  e3.queryEnvelope(o2);
  const a2 = n3.constructEmpty();
  t2.queryEnvelope(a2);
  const h2 = n3.constructEmpty();
  h2.setCoords({ env2D: o2 }), h2.mergeEnvelope2D(a2);
  const m2 = qt2(n5, h2, true), l2 = new n3(a2), g = Pt2(m2);
  if (l2.inflateCoords(g, g), !o2.isIntersecting(l2)) {
    if (e3.getDimension() <= t2.getDimension()) return $a(eh(e3.createInstance()), e3, t2, "&");
    if (e3.getDimension() > t2.getDimension()) return $a(eh(t2.createInstance()), e3, t2, "&");
  }
  const u = new Ka(r), c = new yr(), _ = c.addGeometry(eh(e3)), d2 = c.addGeometry(eh(t2));
  let p3 = 0, f3 = 0, x3 = null;
  if (c.hasCurves()) {
    x3 = new fa();
    const e4 = c.getEnvelope2D(r);
    f3 = da(m2.total());
    const t3 = _a(m2.total(), e4);
    p3 = pa(t3, f3), aa(c, t3, m2.total(), 12e3, x3, null, r);
  }
  u.setEditShapeCrackAndCluster(c, m2.add(p3));
  const y2 = u.intersection(_, d2);
  null !== x3 && x3.stitchCurves(c, y2, f3, true);
  const P3 = $a(c.getGeometry(y2), e3, t2, "&");
  return Ga(P3.getGeometryType()) && (P3.getImpl().setIsSimple(4, m2.total()), P3.getGeometryType() === a.enumPolygon && P3.getImpl().updateOGCFlagsProtected()), P3;
}
function Wa(e3, t2, n5, r) {
  const o2 = new Array(3), a2 = n3.constructEmpty();
  e3.queryEnvelope(a2);
  const h2 = n3.constructEmpty();
  t2.queryEnvelope(h2);
  const m2 = n3.constructEmpty();
  m2.setCoords({ env2D: a2 }), m2.mergeEnvelope2D(h2);
  const l2 = qt2(n5, m2, true), g = new n3(h2), u = Pt2(l2);
  if (g.inflateCoords(u, u), !a2.isIntersecting(g)) {
    if (e3.getDimension() <= t2.getDimension()) {
      const s2 = $a(eh(e3.createInstance()), e3, t2, "&");
      return o2[s2.getDimension()] = s2, o2;
    }
    if (e3.getDimension() > t2.getDimension()) {
      const s2 = $a(eh(t2.createInstance()), e3, t2, "&");
      return o2[s2.getDimension()] = s2, o2;
    }
  }
  const c = new Ka(r), _ = new yr(), d2 = _.addGeometry(eh(e3)), p3 = _.addGeometry(eh(t2));
  let f3 = 0, x3 = 0, y2 = null;
  if (_.hasCurves()) {
    y2 = new fa();
    const e4 = _.getEnvelope2D(r);
    x3 = da(l2.total());
    const t3 = _a(l2.total(), e4);
    f3 = pa(t3, x3), aa(_, t3, l2.total(), 12e3, y2, null, r);
  }
  c.setEditShapeCrackAndCluster(_, l2.add(f3)), _.dbgVerifyCurves();
  const P3 = c.intersectionEx(d2, p3);
  for (const s2 of P3) {
    null !== y2 && y2.stitchCurves(_, s2, x3, false);
    const n6 = $a(_.getGeometry(s2), e3, t2, "&");
    Ga(n6.getGeometryType()) && (n6.getImpl().setIsSimple(4, l2.total()), n6.getGeometryType() === a.enumPolygon && n6.getImpl().updateOGCFlagsProtected()), o2[n6.getDimension()] = n6;
  }
  return null !== y2 && y2.clearStitcher(_), o2;
}
function ja(e3, t2, s2, r, i2, o2 = false) {
  0 === t2 && P("not enough geometries to dissolve");
  let a2 = 0;
  for (let n5 = 0, d2 = t2; n5 < d2; n5++) a2 = Math.max(e3[n5].getDimension(), a2);
  if (2 === a2 || 1 === a2) return new Ka(r).dissolveMultiPaths_(a2, false, e3, t2, s2, i2, o2);
  let h2 = 0, m2 = -1;
  for (let n5 = 0, d2 = t2; n5 < d2; n5++) e3[n5].getDimension() === a2 && (-1 === m2 && (m2 = n5), e3[n5].isEmpty() || (m2 = n5, h2++));
  if (h2 < 2) return eh(e3[m2]);
  const l2 = G2.constructEmpty(), g = new yr();
  let u = gr;
  for (let n5 = 0, d2 = t2; n5 < d2; n5++) if (e3[n5].getDimension() === a2 && !e3[n5].isEmpty()) {
    u === gr ? u = g.addGeometry(eh(e3[n5])) : g.appendGeometry(u, eh(e3[n5]));
    const t3 = G2.constructEmpty();
    e3[n5].queryLooseEnvelope(t3), l2.mergeEnv3D(t3);
  }
  const c = qt2(s2, l2.getEnvelope2D(), true), _ = new Ka(r);
  if (o2) {
    const e4 = wt(s2, l2.getEnvelopeZs(), true);
    return _.planarSimplify3DImpl_(g, c, e4, 0, true);
  }
  return _.m_bOGCOutput = true, _.planarSimplifyMultiPoints(g, c, false, -1);
}
function Za(e3, t2, s2, r, i2, o2 = false) {
  t2 < 2 && P("not enough geometries to dissolve");
  let a2 = 0;
  for (let n5 = 0, p3 = t2; n5 < p3; n5++) a2 = Math.max(e3[n5].getDimension(), a2);
  if (2 === a2 || 1 === a2) return new Ka(r).dissolveMultiPaths_(a2, true, e3, t2, s2, i2, o2);
  const h2 = G2.constructEmpty(), m2 = new yr();
  let l2 = gr, g = 0, u = -1;
  for (let n5 = 0, p3 = t2; n5 < p3; n5++) if (e3[n5].getDimension() === a2 && (-1 === u && (u = n5), !e3[n5].isEmpty())) {
    u = n5, l2 === gr ? l2 = m2.addGeometry(eh(e3[n5])) : m2.appendGeometry(l2, eh(e3[n5]));
    const t3 = G2.constructEmpty();
    e3[n5].queryLooseEnvelope(t3), h2.mergeEnv3D(t3), g++;
  }
  if (g < 2) return eh(e3[u]);
  const c = 0 === a2 ? s2 : null, _ = qt2(c, h2.getEnvelope2D(), true), d2 = new Ka(r);
  if (o2) {
    const e4 = wt(c, h2.getEnvelopeZs(), true);
    return d2.m_bOGCOutput = true, d2.planarSimplify3DImpl_(m2, _, e4, 0, true);
  }
  return d2.planarSimplifyMultiPoints(m2, _, true, -1);
}
var Ka = class {
  constructor(e3) {
    this.m_topoGraph = null, this.m_maskLookup = [], this.m_dummyPt1 = mi.getNAN(), this.m_dummyPt2 = mi.getNAN(), this.m_fromEdgeForPolylines = gr, this.m_progressCounter = 0, this.m_bOGCOutput = false, this.m_progressTracker = e3;
  }
  linesToPolygonsImpl(e3, t2) {
    let s2 = 0, n5 = 0, r = null;
    if (e3.hasCurves()) {
      r = new fa();
      const i3 = e3.getEnvelope2D(this.m_progressTracker);
      n5 = da(t2.total());
      const o3 = _a(t2.total(), i3);
      s2 = pa(o3, n5), aa(e3, o3, t2.total(), 12e3, r, null, this.m_progressTracker);
    }
    this.setEditShapeCrackAndCluster(e3, t2.add(s2));
    const i2 = this.m_topoGraph.createUserIndexForChains(), o2 = this.m_topoGraph.getFirstChain();
    this.m_topoGraph.setChainUserIndex(o2, i2, 1);
    for (let h2 = this.m_topoGraph.getChainFirstIsland(o2); h2 !== gr; h2 = this.m_topoGraph.getChainNextInParent(h2)) this.m_topoGraph.setChainUserIndex(h2, i2, 1);
    const a2 = [];
    for (let h2 = this.m_topoGraph.getFirstChain(); h2 !== gr; h2 = this.m_topoGraph.getChainNext(h2)) {
      if (1 === this.m_topoGraph.getChainUserIndex(h2, i2)) continue;
      this.m_topoGraph.setChainUserIndex(h2, i2, 1);
      for (let e4 = this.m_topoGraph.getChainFirstIsland(h2); e4 !== gr; e4 = this.m_topoGraph.getChainNextInParent(e4)) this.m_topoGraph.setChainUserIndex(e4, i2, 1);
      if (0 === this.m_topoGraph.getChainArea(h2)) continue;
      const t3 = this.m_topoGraph.extractPolygonFromChainAndIslands(e3, gr, h2, gr);
      null != r && r.stitchCurves(e3, t3, n5, false);
      const s3 = e3.getGeometry(t3);
      a2.push(s3);
    }
    return new t(a2);
  }
  autoCompleteImpl(e3, t2, s2) {
    let n5 = 0, r = 0, i2 = null;
    if (e3.hasCurves()) {
      i2 = new fa();
      const t3 = e3.getEnvelope2D(this.m_progressTracker);
      r = da(s2.total());
      const o3 = _a(s2.total(), t3);
      n5 = pa(o3, r), aa(e3, o3, s2.total(), 12e3, i2, null, this.m_progressTracker);
    }
    this.setEditShapeCrackAndCluster(e3, s2.add(n5));
    const o2 = this.m_topoGraph.getGeometryID(t2), a2 = this.m_topoGraph.createUserIndexForChains(), h2 = this.m_topoGraph.getFirstChain();
    this.m_topoGraph.setChainUserIndex(h2, a2, 1);
    for (let l2 = this.m_topoGraph.getChainFirstIsland(h2); l2 !== gr; l2 = this.m_topoGraph.getChainNextInParent(l2)) this.m_topoGraph.setChainUserIndex(l2, a2, 1);
    const m2 = [];
    for (let l2 = this.m_topoGraph.getFirstChain(); l2 !== gr; l2 = this.m_topoGraph.getChainNext(l2)) {
      if (1 === this.m_topoGraph.getChainUserIndex(l2, a2)) continue;
      this.m_topoGraph.setChainUserIndex(l2, a2, 1);
      for (let e4 = this.m_topoGraph.getChainFirstIsland(l2); e4 !== gr; e4 = this.m_topoGraph.getChainNextInParent(e4)) this.m_topoGraph.setChainUserIndex(e4, a2, 1);
      if (0 !== this.m_topoGraph.getChainParentage(l2)) continue;
      const t3 = this.m_topoGraph.getChainHalfEdge(l2);
      let s3 = t3, n6 = false;
      do {
        const e4 = this.m_topoGraph.getHalfEdgeTwin(s3);
        if (this.m_topoGraph.getHalfEdgeChain(e4) !== l2 && 0 !== (this.m_topoGraph.getHalfEdgeParentage(s3) & o2)) {
          n6 = true;
          break;
        }
        s3 = this.m_topoGraph.getHalfEdgeNext(s3);
      } while (s3 !== t3);
      if (!n6) continue;
      if (0 === this.m_topoGraph.getChainArea(l2)) continue;
      const h3 = this.m_topoGraph.extractPolygonFromChainAndIslands(e3, gr, l2, gr);
      null !== i2 && i2.stitchCurves(e3, h3, r, false);
      const g = e3.getGeometry(h3);
      m2.push(g);
    }
    return new t(m2);
  }
  setEditShape(e3, t2 = false) {
    null === this.m_topoGraph && (this.m_topoGraph = new tn()), this.m_topoGraph.setEditShape(e3, this.m_progressTracker, true, t2);
  }
  setEditShapeCrackAndCluster(e3, t2) {
    ya(e3, t2, this.m_progressTracker, true, false);
    for (let s2 = e3.getFirstGeometry(); s2 !== gr; s2 = e3.getNextGeometry(s2)) e3.getGeometryType(s2) === a.enumPolygon && er(e3, s2, -1, this.m_bOGCOutput, gr, this.m_progressTracker);
    this.setEditShape(e3);
  }
  setHalfEdgeOrientations_(e3, t2) {
    const s2 = this.m_topoGraph.getShape();
    for (let n5 = s2.getFirstGeometry(); n5 !== gr; n5 = s2.getNextGeometry(n5)) if (n5 === t2) for (let t3 = s2.getFirstPath(n5); t3 !== gr; t3 = s2.getNextPath(t3)) {
      let n6 = s2.getFirstVertex(t3);
      if (n6 === gr) continue;
      let r = s2.getNextVertex(n6);
      for (; r !== gr; ) {
        const t4 = this.m_topoGraph.getClusterFromVertex(n6), i2 = this.m_topoGraph.getClusterFromVertex(r), o2 = this.m_topoGraph.getHalfEdgeConnector(t4, i2);
        if (o2 !== gr) {
          const t5 = this.m_topoGraph.getHalfEdgeTwin(o2);
          this.m_topoGraph.setHalfEdgeUserIndex(o2, e3, 1), this.m_topoGraph.setHalfEdgeUserIndex(t5, e3, 2);
        }
        n6 = r, r = s2.getNextVertex(n6);
      }
    }
  }
  flushVertices_(e3, t2) {
    const s2 = this.m_topoGraph.getShape(), n5 = s2.hasSegmentParentage(), r = new Pm(), i2 = s2.insertPath(e3, gr);
    t2.push(t2[0]);
    const o2 = t2.length;
    let a2 = gr;
    for (let h2 = 0; h2 < o2; h2++) {
      const e4 = t2[h2];
      if (a2 = s2.addVertex(i2, e4), !n5) continue;
      const m2 = this.m_topoGraph.getClusterFromVertex(e4);
      if (h2 > 0 && this.m_topoGraph.isBreakNode(m2) && s2.setSegmentParentageBreakVertex(a2, true), h2 < o2 - 1) {
        const e5 = this.m_topoGraph.getHalfEdgeConnector(m2, this.m_topoGraph.getClusterFromVertex(t2[h2 + 1])), n6 = this.m_topoGraph.getSegmentParentage(e5);
        s2.setSegmentParentageAndBreak(a2, n6, h2 > 0 || this.m_topoGraph.isBreakNode(m2)), this.m_topoGraph.isHalfEdgeCurve(e5) && (this.m_topoGraph.querySegmentXY(e5, r), s2.setSegmentToIndex(s2.getVertexIndex(a2), r.get().clone()));
      }
    }
    if (n5) {
      const e4 = this.m_topoGraph.getClusterFromVertex(t2[o2 - 1]);
      this.m_topoGraph.isBreakNode(e4) && s2.setSegmentParentageBreakVertex(a2, true);
    }
    s2.setClosedPath(i2, true);
  }
  processPolygonCuts_(e3, t2, s2, n5) {
    const r = this.m_topoGraph.getGeometryID(s2), o2 = this.m_topoGraph.getGeometryID(n5), a2 = [], h2 = this.m_topoGraph.getShape(), m2 = this.m_topoGraph.createUserIndexForHalfEdges();
    for (let l2 = this.m_topoGraph.getFirstCluster(); l2 !== gr; l2 = this.m_topoGraph.getNextCluster(l2)) {
      const s3 = this.m_topoGraph.getClusterHalfEdge(l2);
      if (s3 === gr) continue;
      let n6 = s3;
      do {
        if (1 !== this.m_topoGraph.getHalfEdgeUserIndex(n6, m2)) {
          let s4 = n6, l3 = n6, g = false, u = 0;
          do {
            if (this.m_topoGraph.setHalfEdgeUserIndex(s4, m2, 1), !g) {
              if (0 !== (this.m_topoGraph.getHalfEdgeParentage(s4) & o2)) {
                0 !== (this.m_topoGraph.getHalfEdgeFaceParentage(s4) & r) && (l3 = s4, g = true);
              }
            }
            if (g) {
              const t3 = this.m_topoGraph.getHalfEdgeOrigin(s4), n7 = this.m_topoGraph.getClusterVertexIterator(t3), r2 = this.m_topoGraph.getVertexFromVertexIterator(n7);
              if (a2.push(r2), -1 !== e3) {
                if (0 !== (this.m_topoGraph.getHalfEdgeParentage(s4) & o2)) {
                  u |= this.m_topoGraph.getHalfEdgeUserIndex(s4, e3);
                }
              }
            }
            s4 = this.m_topoGraph.getHalfEdgeNext(s4);
          } while (s4 !== l3);
          if (g && this.m_topoGraph.getChainArea(this.m_topoGraph.getHalfEdgeChain(l3)) > 0) {
            const e4 = h2.createGeometry(a.enumPolygon);
            this.flushVertices_(e4, a2), -1 !== t2 && h2.setGeometryUserIndex(e4, t2, u);
          }
          a2.length = 0;
        }
        n6 = this.m_topoGraph.getHalfEdgeNext(this.m_topoGraph.getHalfEdgeTwin(n6));
      } while (n6 !== s3);
    }
    this.m_topoGraph.deleteUserIndexForHalfEdges(m2);
  }
  cutPolygonPolyline_(e3, t2, s2, n5) {
    this.m_topoGraph.removeSpikes_();
    let r = -1;
    -1 !== e3 && (r = this.m_topoGraph.createUserIndexForHalfEdges(), this.setHalfEdgeOrientations_(r, s2)), this.processPolygonCuts_(r, e3, t2, s2), -1 !== r && (this.m_topoGraph.deleteUserIndexForHalfEdges(r), r = -1);
    const i2 = this.m_topoGraph.getShape();
    for (let o2 = i2.getFirstGeometry(); o2 !== gr; o2 = i2.getNextGeometry(o2)) o2 !== t2 && o2 !== s2 && n5.push(o2);
    n5.sort((e4, t3) => {
      const s3 = i2.getFirstPath(e4), n6 = i2.getRingArea(s3), r2 = i2.getFirstPath(t3), o2 = i2.getRingArea(r2);
      return n6 < o2 ? -1 : n6 > o2 ? 1 : 0;
    });
  }
  cut(e3, t2, s2, n5, r) {
    const i2 = this.m_topoGraph.getShape().getGeometryType(s2), o2 = this.m_topoGraph.getShape().getGeometryType(n5), h2 = m(i2), m2 = m(o2);
    if (2 !== h2 || 1 !== m2) {
      if (1 === h2 && 1 === m2) {
        return void new sh(this, e3, t2, s2, n5, r).Do();
      }
      b("");
    } else this.cutPolygonPolyline_(t2, s2, n5, r);
  }
  progress_(e3 = false) {
  }
  isGoodParentage(e3) {
    return e3 >= 0 && e3 < this.m_maskLookup.length && this.m_maskLookup[e3];
  }
  normalizeInputGeometry(e3) {
    const t2 = e3.getGeometryType();
    if (t2 === a.enumEnvelope) {
      const t3 = new mr({ vd: e3.getDescription() });
      return e3.isEmpty() || t3.addEnvelope(e3, false), t3;
    }
    if (t2 === a.enumPoint) {
      const t3 = new De({ vd: e3.getDescription() });
      return e3.isEmpty() || t3.add(e3), t3;
    }
    if (f(t2)) {
      const t3 = new Qs2({ vd: e3.getDescription() });
      return e3.isEmpty() || t3.addSegment(e3, true), t3;
    }
    return t2 !== a.enumMultiPoint && t2 !== a.enumPolyline && t2 !== a.enumPolygon && P("Unexpected geometry type"), e3;
  }
  dissolveNonSimplePolygons(e3, t2, s2, n5) {
    n(t2 > 0);
    const r = new yr();
    let i2 = 0, o2 = -1;
    for (let a2 = 0, h2 = t2; a2 < h2; a2++) 2 === e3[a2].getDimension() && (-1 === o2 && (o2 = a2), e3[a2].isEmpty() || (i2++, r.addGeometry(e3[a2])));
    return 0 === i2 ? (n(o2 >= 0), this.normalizeInputGeometry(e3[o2])) : this.planarSimplifyPolygons(r, s2, true, false, -1, true);
  }
  dissolveMultiPaths_(e3, t2, n5, r, a2, m2, g) {
    n(e3 >= 1 && e3 <= 2), n(r > 0);
    const u = 8 & m2 ? 1 : 2, _ = G2.constructEmpty();
    let d2 = 0, p3 = -1, f3 = true;
    for (let s2 = 0, o2 = r; s2 < o2; s2++) if (n5[s2].getDimension() === e3 && (-1 === p3 && (p3 = s2), !n5[s2].isEmpty())) {
      p3 = s2, d2++;
      const t3 = G2.constructEmpty();
      if (n5[s2].queryLooseEnvelope(t3), _.mergeEnv3D(t3), 2 === e3 && f3 && n5[s2].getGeometryType() === a.enumPolygon) if (16 & m2) {
        const e4 = [0], t4 = n5[s2].getImpl().getIsSimple(0, e4), r2 = this.m_bOGCOutput ? 5 === t4 : Yt2(t4);
        f3 &&= r2;
      } else {
        const e4 = kt2(n5[s2], 0);
        f3 &&= e4;
      }
    }
    if (d2 < 2 && (n(p3 >= 0), 0 === d2 || !(16 & m2))) return this.normalizeInputGeometry(n5[p3]);
    if (!f3) {
      const e4 = qt2(t2 ? null : a2, _.getEnvelope2D(), true);
      return this.dissolveNonSimplePolygons(n5, r, e4, m2);
    }
    const x3 = n5.slice(0, r), y2 = qt2(a2, _.getEnvelope2D(), true), P3 = 10 * Pt2(y2);
    let E2 = new bt(0, 0);
    if (g && (E2 = wt(a2, _.getEnvelopeZs(), true)), 1 === d2 && 1 === e3 && 2 === u && !t2) return g ? qa() : this.m_bOGCOutput ? Aa(x3[p3], y2, false, -1, this.m_progressTracker, u, false) : Ma(x3[p3], y2, false, false, -1, this.m_progressTracker, u, false);
    const S2 = new xt();
    S2.startConstruction();
    let C2 = 2 === e3 ? 3 : 4, I4 = 0;
    for (let c = 0, w2 = r; c < w2; c++) {
      if (x3[c].getDimension() !== e3 || x3[c].isEmpty()) continue;
      let n6 = x3[c].getGeometryType();
      if (n6 !== a.enumEnvelope) {
        if (f(n6) ? (x3[c] = this.normalizeInputGeometry(x3[c]), n6 = a.enumPolyline) : n(h(n6)), 1 === e3) {
          n(n6 === a.enumPolyline);
          let e4 = -1;
          if (g) n(0, "3d not implemented yet");
          else {
            const t3 = [0];
            e4 = x3[c].getImpl().getIsSimple(y2.total(), t3);
          }
          if (this.m_bOGCOutput ? 5 !== e4 : !Yt2(e4)) if (t2) C2 = -1;
          else {
            g ? n(0, "3d not implemented yet") : this.m_bOGCOutput ? x3[c] = Aa(x3[c], y2, false, -1, this.m_progressTracker, u, false) : x3[c] = Ma(x3[c], y2, false, false, -1, this.m_progressTracker, u, false);
            const e5 = [0];
            n(Yt2(x3[c].getImpl().getIsSimple(y2.total(), e5)));
          }
        } else {
          n(n6 === a.enumPolygon);
          const e4 = [0], t3 = x3[c].getImpl().getIsSimple(0, e4);
          n(Vt2(t3));
        }
        const r2 = x3[c].getImpl();
        for (let e4 = 0, t3 = r2.getPathCount(); e4 < t3; e4++) {
          const t4 = n3.constructEmpty();
          r2.queryLoosePathEnvelope(e4, t4), t4.inflateCoords(P3, P3), S2.addEnvelope(I4, t4), I4++;
        }
      } else {
        n(n6 === a.enumEnvelope);
        const e4 = n3.constructEmpty();
        x3[c].queryLooseEnvelope(e4), e4.inflateCoords(P3, P3), S2.addEnvelope(I4, e4), I4++, C2 = -1;
      }
    }
    S2.endConstruction();
    const b2 = I4, v2 = Yt(b2, -2147483647), N2 = Yt(b2, -1);
    let G3 = 0;
    p3 = -1, I4 = 0;
    for (let s2 = 0, o2 = r; s2 < o2; s2++) {
      if (x3[s2].getDimension() !== e3) continue;
      if (-1 === p3 && (p3 = s2), x3[s2].isEmpty()) continue;
      p3 = s2, G3++;
      const t3 = x3[s2].getGeometryType();
      if (h(t3)) {
        for (let e4 = 0, t4 = x3[s2].getPathCount(); e4 < t4; e4++) N2[I4] = s2, v2[I4] = -e4 - 1, I4++;
      } else n(t3 === a.enumEnvelope), N2[I4] = s2, v2[I4] = -1, I4++;
    }
    if (G3 < 2 && 2 === e3) return n(p3 >= 0), this.normalizeInputGeometry(x3[p3]);
    let D = b2;
    for (; S2.next() && D > 0; ) {
      this.progress_();
      const e4 = S2.getHandleA(), t3 = S2.getHandleB(), s2 = S2.getElement(e4), n6 = S2.getElement(t3);
      N2[s2] !== N2[n6] && (v2[s2] < 0 && (D--, v2[s2] = -(v2[s2] + 1)), v2[n6] < 0 && (D--, v2[n6] = -(v2[n6] + 1)));
    }
    const F = new yr();
    let H2 = false, k2 = 0;
    for (let s2 = 0, o2 = r; s2 < o2; s2++) {
      if (x3[s2].getDimension() !== e3 || x3[s2].isEmpty()) continue;
      const t3 = x3[s2].getGeometryType(), n6 = k2;
      let r2 = 0, o3 = 0;
      const a3 = h(t3) ? x3[s2] : null;
      for (let e4 = n6, i2 = v2.length; e4 < i2 && N2[e4] === s2; e4++) v2[e4] >= 0 && (r2++, o3 += a3 ? a3.getPathSize(v2[e4]) : w(x3[s2])), k2++;
      if (o3 > 0.95 * w(x3[s2])) {
        F.addGeometry(this.normalizeInputGeometry(x3[s2]));
        for (let e4 = n6; e4 < k2; e4++) v2[e4] < 0 && (v2[e4] = -(v2[e4] + 1));
      } else {
        if (0 === r2) {
          H2 = true;
          continue;
        }
        {
          H2 = true, n(h(t3)), n(null != a3);
          const e4 = new mr({ vd: x3[s2].getDescription() }), r3 = new Qs2({ vd: x3[s2].getDescription() }), o4 = t3 === a.enumPolygon ? e4 : r3;
          for (let t4 = n6; t4 < k2; t4++) v2[t4] >= 0 && o4.addPath(a3, v2[t4], true);
          F.addGeometry(o4);
        }
      }
    }
    let A2;
    if (F.getFirstGeometry() !== gr) {
      const s2 = 2 === e3, n6 = t2 ? qt2(null, _.getEnvelope2D(), true) : y2;
      let r2 = new bt(0, 0);
      if (g && (r2 = t2 ? wt(null, _.getEnvelopeZs(), true) : E2), 2 === e3 && !(2 & m2)) {
        F.collapseAllGeometriesToFirst();
        let e4 = 0, t3 = null;
        if (F.hasCurves() && !F.hasSegmentParentage()) {
          t3 = new fa();
          const s3 = F.getEnvelope2D(this.m_progressTracker);
          e4 = da(n6.total());
          aa(F, _a(n6.total(), s3), n6.total(), 12e3, t3, null, this.m_progressTracker);
        }
        Vn(F, F.getFirstGeometry(), n6.total(), this.m_progressTracker), null !== t3 && t3.stitchCurves(F, gr, e4, true);
      }
      if (g) A2 = this.planarSimplify3DImpl_(F, n6, r2, u, true);
      else if (2 === e3) A2 = this.planarSimplifyPolygons(F, n6, s2, t2, -1, false);
      else {
        const e4 = Ha();
        e4.ogcRule = this.m_bOGCOutput, e4.allCrossRoadsImpassable = true, e4.unsplitBehavior = u, A2 = this.planarSimplifyPolylines(F, n6, t2, e4, -1);
      }
      if (!H2) {
        const e4 = [0];
        C2 = A2.getImpl().getIsSimple(n6.total(), e4);
      }
    } else n(H2), n(p3 >= 0), A2 = 2 === e3 ? new mr({ vd: x3[p3].getDescription() }) : new Qs2({ vd: x3[p3].getDescription() });
    if (H2) {
      let e4 = 0;
      for (let t3 = 0, s2 = v2.length; t3 < s2; t3++) {
        const s3 = N2[t3];
        if (!(s3 < 0) && v2[t3] < 0) {
          const n6 = x3[s3].getGeometryType(), r2 = h(n6) ? x3[s3] : null;
          if (r2) {
            const s4 = -(v2[t3] + 1);
            e4 += r2.getPathSize(s4);
          } else e4 += 4;
        }
      }
      A2.reserve(A2.getPointCount() + e4);
      for (let t3 = 0, s2 = v2.length; t3 < s2; t3++) {
        const e5 = N2[t3];
        if (!(e5 < 0) && v2[t3] < 0) {
          const s3 = x3[e5].getGeometryType(), n6 = h(s3) ? x3[e5] : null;
          if (n6) {
            const e6 = -(v2[t3] + 1);
            A2.addPath(n6, e6, true);
          } else s3 === a.enumEnvelope ? A2.addEnvelope(x3[e5], false) : (n(f(s3)), A2.addSegment(x3[e5], true));
        }
      }
    }
    let M = 0;
    if (2 === e3 ? -1 !== C2 && (C2 = 3, M = t2 ? 0 : y2.total()) : (n(1 === e3), t2 || -1 === C2 || (M = y2.total())), g || A2.getImpl().setIsSimple(C2, M), !t2 && H2) if (2 === e3) {
      if (!g) return new Eh().execute(A2, a2, false, this.m_progressTracker);
      n(0, "3d not yet implemented");
    } else 1 === e3 && 1 !== u && (A2 = g ? Ba() : Ua(this.m_bOGCOutput, A2, u, this.m_progressTracker), A2.getImpl().setIsSimple(C2, M));
    return A2;
  }
  dissolveTopoGraphCommonEdges_() {
    const e3 = this.m_topoGraph.createUserIndexForHalfEdges(), t2 = [];
    for (let s2 = this.m_topoGraph.getFirstCluster(); s2 !== gr; s2 = this.m_topoGraph.getNextCluster(s2)) {
      const n5 = this.m_topoGraph.getClusterHalfEdge(s2);
      let r = n5;
      if (n5 !== gr) do {
        this.progress_();
        if (1 !== this.m_topoGraph.getHalfEdgeUserIndex(r, e3)) {
          const s3 = this.m_topoGraph.getHalfEdgeTwin(r);
          this.m_topoGraph.setHalfEdgeUserIndex(s3, e3, 1), this.m_topoGraph.setHalfEdgeUserIndex(r, e3, 1);
          const n6 = this.m_topoGraph.getHalfEdgeFaceParentage(r);
          if (this.isGoodParentage(n6)) {
            const e4 = this.m_topoGraph.getHalfEdgeFaceParentage(s3);
            this.isGoodParentage(e4) && t2.push(r);
          }
        }
        r = this.m_topoGraph.getHalfEdgeNext(this.m_topoGraph.getHalfEdgeTwin(r));
      } while (r !== n5);
    }
    this.m_topoGraph.deleteUserIndexForHalfEdges(e3), this.m_topoGraph.deleteEdgesBreakFaces_(t2);
  }
  chooseVertexByOrder(e3, t2, s2, n5) {
    let r = vs(), i2 = gr;
    for (let a2 = this.m_topoGraph.getClusterVertexIterator(e3); a2 !== gr; a2 = this.m_topoGraph.incrementVertexIterator(a2)) {
      const e4 = this.m_topoGraph.getVertexFromVertexIterator(a2), n6 = t2.getUserIndex(e4, s2);
      n6 >= 0 && n6 < r && (r = n6, i2 = e4);
    }
    n(i2 !== gr);
    let o2 = t2.getUserIndex(i2, n5);
    return o2 > 0 && (t2.setUserIndex(i2, n5, --o2), 0 === o2 && t2.setUserIndex(i2, s2, -1)), i2;
  }
  chooseVertexFromCluster_(e3, t2) {
    return this.m_topoGraph.getVertexDominantFromCluster(e3, t2);
  }
  chooseVertexFromVertexCluster_(e3, t2) {
    return this.m_topoGraph.getVertexDominant(e3, t2);
  }
  collectPolygonPathsPreservingFrom_(e3, t2, s2, n5, r) {
    const o2 = this.m_topoGraph.getShape();
    if (o2.getGeometryType(e3) !== a.enumPolygon) return;
    const a2 = o2.hasSegmentParentage(), h2 = new Pm();
    for (let i2 = o2.getFirstPath(e3); i2 !== gr; i2 = o2.getNextPath(i2)) {
      const e4 = o2.getFirstVertex(i2);
      this.m_topoGraph.getClusterFromVertex(e4);
      const m2 = this.m_topoGraph.getHalfEdgeFromVertex(e4);
      if (m2 === gr) continue;
      const l2 = this.m_topoGraph.getHalfEdgeUserIndex(m2, s2);
      if (1 === l2 || 2 === l2) continue;
      const g = this.m_topoGraph.getHalfEdgeFaceParentage(m2);
      if (!this.isGoodParentage(g)) {
        this.m_topoGraph.setHalfEdgeUserIndex(m2, s2, 2);
        continue;
      }
      this.m_topoGraph.setHalfEdgeUserIndex(m2, s2, 1);
      const u = o2.insertPath(t2, gr);
      o2.setClosedPath(u, true);
      let c = m2, _ = e4, d2 = this.m_topoGraph.getClusterFromVertex(_), p3 = 1;
      do {
        this.progress_();
        const e5 = this.chooseVertexFromVertexCluster_(_, r), t3 = o2.addVertex(u, e5);
        if (this.m_topoGraph.isHalfEdgeCurve(c) && (this.m_topoGraph.querySegmentXY(c, h2), o2.setSegmentToIndex(o2.getVertexIndex(t3), h2.get().clone())), a2) {
          const e6 = this.m_topoGraph.getSegmentParentage(c);
          o2.setSegmentParentageAndBreak(t3, e6, this.m_topoGraph.isBreakNode(d2));
        }
        let i3, m3;
        -1 !== n5 && this.m_topoGraph.setClusterUserIndex(d2, n5, 1), this.m_topoGraph.setHalfEdgeUserIndex(c, s2, 1), c = this.m_topoGraph.getHalfEdgeNext(c);
        do {
          i3 = 1 === p3 ? o2.getNextVertex(_) : o2.getPrevVertex(_), m3 = i3 !== gr ? this.m_topoGraph.getClusterFromVertex(i3) : gr;
        } while (m3 === d2);
        const l3 = this.m_topoGraph.getHalfEdgeOrigin(c);
        if (l3 !== m3) {
          do {
            i3 = 1 === p3 ? o2.getPrevVertex(_) : o2.getNextVertex(_), m3 = i3 !== gr ? this.m_topoGraph.getClusterFromVertex(i3) : gr;
          } while (m3 === d2);
          if (l3 !== m3) {
            m3 = l3;
            const e6 = this.m_topoGraph.getClusterVertexIterator(m3);
            i3 = this.m_topoGraph.getVertexFromVertexIterator(e6);
          } else p3 = -p3;
        }
        d2 = m3, _ = i3;
      } while (c !== m2);
    }
  }
  topoOperationPolygonPolygonHelper_(e3, t2, s2, n5, r, i2) {
    this.progress_(true), e3 !== gr && this.collectPolygonPathsPreservingFrom_(e3, s2, r, i2, n5), t2 !== gr && this.collectPolygonPathsPreservingFrom_(t2, s2, r, i2, n5);
    const o2 = new Pm(), a2 = this.m_topoGraph.getShape();
    a2.dbgVerifyCurves();
    const h2 = a2.hasSegmentParentage();
    for (let m2 = this.m_topoGraph.getFirstCluster(); m2 !== gr; m2 = this.m_topoGraph.getNextCluster(m2)) {
      const e4 = this.m_topoGraph.getClusterHalfEdge(m2);
      if (e4 === gr) continue;
      let t3 = e4;
      do {
        this.progress_();
        const e5 = this.m_topoGraph.getHalfEdgeUserIndex(t3, r);
        if (1 !== e5 && 2 !== e5) {
          const e6 = this.m_topoGraph.getHalfEdgeFaceParentage(t3);
          if (this.isGoodParentage(e6)) {
            const e7 = a2.insertPath(s2, gr);
            a2.setClosedPath(e7, true);
            let m3 = t3;
            do {
              const t4 = this.m_topoGraph.getHalfEdgeVertexIterator(m3);
              let s3 = gr;
              if (t4 !== gr) s3 = this.m_topoGraph.getVertexFromVertexIterator(t4);
              else {
                const e8 = this.m_topoGraph.getHalfEdgeVertexIterator(this.m_topoGraph.getHalfEdgeTwin(m3));
                s3 = this.m_topoGraph.getVertexFromVertexIterator(e8), s3 = a2.getNextVertex(s3);
              }
              const l2 = this.chooseVertexFromVertexCluster_(s3, n5), g = a2.addVertex(e7, l2);
              if (h2) {
                const e8 = this.m_topoGraph.getSegmentParentage(m3), t5 = this.m_topoGraph.getHalfEdgeOrigin(m3);
                a2.setSegmentParentageAndBreak(g, e8, this.m_topoGraph.isBreakNode(t5));
              }
              if (this.m_topoGraph.isHalfEdgeCurve(m3) && (this.m_topoGraph.querySegmentXY(m3, o2), a2.setSegmentToIndex(a2.getVertexIndex(g), o2.get().clone())), this.m_topoGraph.setHalfEdgeUserIndex(m3, r, 1), -1 !== i2) {
                const e8 = this.m_topoGraph.getClusterFromVertex(l2);
                this.m_topoGraph.setClusterUserIndex(e8, i2, 1);
              }
              m3 = this.m_topoGraph.getHalfEdgeNext(m3);
            } while (m3 !== t3);
          } else this.m_topoGraph.setHalfEdgeUserIndex(t3, r, 2);
        }
        t3 = this.m_topoGraph.getHalfEdgeNext(this.m_topoGraph.getHalfEdgeTwin(t3));
      } while (t3 !== e4);
    }
  }
  topoOperationPolygonPolygon_(e3, t2, s2, n5 = false) {
    this.dissolveTopoGraphCommonEdges_();
    const r = this.m_topoGraph.getShape(), o2 = r.createGeometry(a.enumPolygon), a2 = this.m_topoGraph.createUserIndexForHalfEdges();
    return this.topoOperationPolygonPolygonHelper_(e3, t2, o2, s2, a2, -1), this.m_topoGraph.deleteUserIndexForHalfEdges(a2), n5 || er(r, o2, 3, this.m_bOGCOutput, gr, this.m_progressTracker), o2;
  }
  topoOperationPolyline_(e3, t2) {
    const s2 = Ha();
    return s2.allCrossRoadsImpassable = false, s2.ogcRule = t2, s2.unsplitBehavior = 0, this.topoOperationPolylineSimplifyOrPolylineTopoHelper_(gr, e3, false, s2).first;
  }
  topoOperationMultiPoint_() {
    const e3 = this.m_topoGraph.getShape(), t2 = e3.createGeometry(a.enumMultiPoint), s2 = e3.insertPath(t2, gr);
    for (let n5 = this.m_topoGraph.getFirstCluster(); n5 !== gr; n5 = this.m_topoGraph.getNextCluster(n5)) {
      const t3 = this.m_topoGraph.getClusterParentage(n5);
      if (this.isGoodParentage(t3)) {
        let t4 = gr;
        for (let s3 = this.m_topoGraph.getClusterVertexIterator(n5); s3 !== gr; s3 = this.m_topoGraph.incrementVertexIterator(s3)) {
          const n6 = this.m_topoGraph.getVertexFromVertexIterator(s3);
          t4 === gr && (t4 = n6);
          const r = e3.getGeometryFromPath(e3.getPathFromVertex(n6)), i2 = this.m_topoGraph.getGeometryID(r);
          if (this.isGoodParentage(i2)) {
            t4 = n6;
            break;
          }
        }
        e3.addVertex(s2, t4);
      }
    }
    return t2;
  }
  intersection(e3, t2) {
    const s2 = this.m_topoGraph.getShape().getGeometryType(e3), n5 = this.m_topoGraph.getShape().getGeometryType(t2), r = m(s2), i2 = m(n5), o2 = this.m_topoGraph.getGeometryID(e3), h2 = this.m_topoGraph.getGeometryID(t2);
    n(o2 >= 0), n(h2 >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = 1 + (o2 | h2), this.m_maskLookup[o2 | h2] = true;
    let m2 = gr;
    return this.m_topoGraph.getShape().getVertexDescription().getAttributeCount() > 1 && (m2 = e3), 2 === r && 2 === i2 ? this.topoOperationPolygonPolygon_(e3, t2, m2) : 1 === r && i2 > 0 || 1 === i2 && r > 0 ? this.topoOperationPolyline_(m2, this.m_bOGCOutput) : 0 === r || 0 === i2 ? this.topoOperationMultiPoint_() : void b("");
  }
  topoOperationPolygonPolygonEx(e3, t2, s2) {
    const n5 = this.m_topoGraph.getShape(), r = n5.createGeometry(a.enumPolygon), o2 = n5.createGeometry(a.enumPolyline), a2 = n5.createGeometry(a.enumMultiPoint);
    this.dissolveTopoGraphCommonEdges_();
    let h2 = gr;
    const m2 = this.m_topoGraph.createUserIndexForHalfEdges(), l2 = this.m_topoGraph.createUserIndexForClusters();
    n5.dbgVerifyCurves(), this.topoOperationPolygonPolygonHelper_(e3, t2, r, s2, m2, l2), n5.dbgVerifyCurves();
    const g = n5.hasSegmentParentage(), u = new Pm();
    for (let i2 = this.m_topoGraph.getFirstCluster(); i2 !== gr; i2 = this.m_topoGraph.getNextCluster(i2)) {
      const e4 = this.m_topoGraph.getClusterHalfEdge(i2);
      if (e4 === gr) continue;
      let t3 = e4;
      do {
        let e5 = this.m_topoGraph.getHalfEdgeUserIndex(t3, m2), r2 = this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgeTwin(t3), m2), a3 = e5 | r2;
        if (2 === a3) {
          let h3 = this.m_topoGraph.getHalfEdgeParentage(t3);
          if (this.isGoodParentage(h3)) {
            const c2 = n5.insertPath(o2, gr);
            let _ = t3;
            const d2 = this.chooseVertexFromCluster_(i2, s2);
            let p3 = n5.addVertex(c2, d2);
            if (g) {
              const e6 = this.m_topoGraph.getSegmentParentage(t3), s3 = this.m_topoGraph.getHalfEdgeOrigin(t3);
              n5.setSegmentParentageAndBreak(p3, e6, this.m_topoGraph.isBreakNode(s3));
            }
            this.m_topoGraph.isHalfEdgeCurve(t3) && (this.m_topoGraph.querySegmentXY(t3, u), n5.setSegmentToIndex(n5.getVertexIndex(p3), u.get().clone())), this.m_topoGraph.setClusterUserIndex(i2, l2, 1);
            do {
              this.progress_();
              const i3 = this.m_topoGraph.getHalfEdgeTo(_), o3 = this.chooseVertexFromCluster_(i3, s2);
              if (p3 = n5.addVertex(c2, o3), g) {
                const e6 = this.m_topoGraph.getSegmentParentage(t3), s3 = this.m_topoGraph.getHalfEdgeOrigin(t3);
                n5.setSegmentParentageAndBreak(p3, e6, this.m_topoGraph.isBreakNode(s3));
              }
              if (this.m_topoGraph.setHalfEdgeUserIndex(_, m2, 1), this.m_topoGraph.setHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgeTwin(_), m2, 1), this.m_topoGraph.setClusterUserIndex(i3, l2, 1), _ = this.m_topoGraph.getHalfEdgeNext(_), e5 = this.m_topoGraph.getHalfEdgeUserIndex(_, m2), r2 = this.m_topoGraph.getHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgeTwin(_), m2), a3 = e5 | r2, 2 !== a3) break;
              if (h3 = this.m_topoGraph.getHalfEdgeParentage(_), !this.isGoodParentage(h3)) {
                this.m_topoGraph.setHalfEdgeUserIndex(_, m2, 1), this.m_topoGraph.setHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgeTwin(_), m2, 1);
                break;
              }
              this.m_topoGraph.isHalfEdgeCurve(t3) && _ !== t3 && (this.m_topoGraph.querySegmentXY(t3, u), n5.setSegmentToIndex(n5.getVertexIndex(p3), u.get().clone()));
            } while (_ !== t3);
          } else this.m_topoGraph.setHalfEdgeUserIndex(t3, m2, 1), this.m_topoGraph.setHalfEdgeUserIndex(this.m_topoGraph.getHalfEdgeTwin(t3), m2, 1);
        }
        t3 = this.m_topoGraph.getHalfEdgeNext(this.m_topoGraph.getHalfEdgeTwin(t3));
      } while (t3 !== e4);
    }
    for (let i2 = this.m_topoGraph.getFirstCluster(); i2 !== gr; i2 = this.m_topoGraph.getNextCluster(i2)) {
      this.progress_();
      if (1 === this.m_topoGraph.getClusterUserIndex(i2, l2)) continue;
      const e4 = this.m_topoGraph.getClusterParentage(i2);
      if (this.isGoodParentage(e4)) {
        h2 === gr && (h2 = n5.insertPath(a2, gr));
        const e5 = this.m_topoGraph.getClusterVertexIterator(i2);
        let t3 = gr;
        if (e5 !== gr) {
          t3 = this.m_topoGraph.getVertexFromVertexIterator(e5);
          const r2 = this.chooseVertexFromVertexCluster_(t3, s2);
          n5.addVertex(h2, r2);
        }
      }
    }
    this.m_topoGraph.deleteUserIndexForClusters(l2), this.m_topoGraph.deleteUserIndexForHalfEdges(m2), n5.dbgVerifyCurves(), er(n5, r, 3, this.m_bOGCOutput, gr, this.m_progressTracker);
    const c = [gr, gr, gr];
    return c[0] = a2, c[1] = o2, c[2] = r, c;
  }
  topoOperationPolylinePolylineOrPolygonEx(e3, t2) {
    const s2 = Ha();
    return s2.allCrossRoadsImpassable = false, s2.ogcRule = t2, s2.unsplitBehavior = 0, this.topoOperationPolylineSimplifyOrPolylineTopoHelper_(gr, e3, true, s2);
  }
  topoOperationMultiPoint() {
    const e3 = this.m_topoGraph.getShape(), t2 = e3.createGeometry(a.enumMultiPoint), s2 = e3.insertPath(t2, gr);
    for (let n5 = this.m_topoGraph.getFirstCluster(); n5 !== gr; n5 = this.m_topoGraph.getNextCluster(n5)) {
      const t3 = this.m_topoGraph.getClusterParentage(n5);
      if (this.isGoodParentage(t3)) {
        let t4 = gr;
        for (let s3 = this.m_topoGraph.getClusterVertexIterator(n5); s3 !== gr; s3 = this.m_topoGraph.incrementVertexIterator(s3)) {
          const n6 = this.m_topoGraph.getVertexFromVertexIterator(s3);
          t4 === gr && (t4 = n6);
          const r = e3.getGeometryFromPath(e3.getPathFromVertex(n6)), i2 = this.m_topoGraph.getGeometryID(r);
          if (this.isGoodParentage(i2)) {
            t4 = n6;
            break;
          }
        }
        e3.addVertex(s2, t4);
      }
    }
    return t2;
  }
  intersectionEx(e3, t2) {
    const s2 = this.m_topoGraph.getShape().getGeometryType(e3), n5 = this.m_topoGraph.getShape().getGeometryType(t2), r = Va(s2), i2 = Va(n5), o2 = this.m_topoGraph.getGeometryID(e3), h2 = this.m_topoGraph.getGeometryID(t2);
    n(o2 >= 0), n(h2 >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = 1 + (o2 | h2), this.m_maskLookup[o2 | h2] = true;
    let m2 = gr;
    if (this.m_topoGraph.getShape().getVertexDescription().getAttributeCount() > 1 && (m2 = e3), 2 === r && 2 === i2) return this.topoOperationPolygonPolygonEx(e3, t2, m2);
    if (1 === r && i2 > 0 || 1 === i2 && r > 0) {
      const { first: e4, second: t3 } = this.topoOperationPolylinePolylineOrPolygonEx(m2, this.m_bOGCOutput);
      return [t3, e4];
    }
    if (0 === r || 0 === i2) {
      const e4 = [];
      return e4.push(this.topoOperationMultiPoint()), e4;
    }
    b("");
  }
  getCombinedHalfEdgeParentage(e3) {
    return this.m_topoGraph.getHalfEdgeParentage(e3) | this.m_topoGraph.getHalfEdgeFaceParentage(e3) | this.m_topoGraph.getHalfEdgeFaceParentage(this.m_topoGraph.getHalfEdgeTwin(e3));
  }
  prevailingDirection(e3, t2) {
    const s2 = this.getCombinedHalfEdgeParentage(t2), n5 = this.m_topoGraph.getHalfEdgeOrigin(t2), r = this.m_topoGraph.getHalfEdgeTo(t2);
    let i2 = 0, o2 = 0;
    for (let a2 = this.m_topoGraph.getClusterVertexIterator(n5); a2 !== gr; a2 = this.m_topoGraph.incrementVertexIterator(a2)) {
      const n6 = this.m_topoGraph.getVertexFromVertexIterator(a2), h2 = e3.getPathFromVertex(n6), m2 = e3.getGeometryFromPath(h2), l2 = this.m_topoGraph.getGeometryID(m2), g = e3.getFirstVertex(h2), u = 0 !== (l2 & s2);
      u && g === n6 && (this.m_fromEdgeForPolylines = t2);
      const c = e3.getNextVertex(n6);
      if (c !== gr && this.m_topoGraph.getClusterFromVertex(c) === r) {
        if (i2++, u) {
          if (this.m_fromEdgeForPolylines === gr && g === c) {
            const e4 = this.m_topoGraph.getHalfEdgeNext(t2);
            this.isGoodParentage(this.getCombinedHalfEdgeParentage(e4)) && (this.m_fromEdgeForPolylines = e4);
          }
          o2++;
        }
      } else {
        const s3 = e3.getPrevVertex(n6);
        if (s3 !== gr && this.m_topoGraph.getClusterFromVertex(s3) === r && (i2--, u)) {
          if (this.m_fromEdgeForPolylines === gr && g === s3) {
            const e4 = this.m_topoGraph.getHalfEdgeNext(t2);
            this.isGoodParentage(this.getCombinedHalfEdgeParentage(e4)) && (this.m_fromEdgeForPolylines = e4);
          }
          o2--;
        }
      }
    }
    this.m_topoGraph.queryXY(n5, this.m_dummyPt1), this.m_topoGraph.queryXY(r, this.m_dummyPt2);
    return (0 !== o2 ? o2 : i2) * mi.distance(this.m_dummyPt1, this.m_dummyPt2);
  }
  tryMoveThroughCrossroadBackwards(e3, t2) {
    const s2 = this.m_topoGraph.getHalfEdgePrev(e3), n5 = this.m_topoGraph.getHalfEdgeTwin(s2);
    if (!t2) {
      if (this.m_topoGraph.isStrongPathNode(this.m_topoGraph.getHalfEdgeOrigin(e3))) return gr;
      const t3 = this.m_topoGraph.getHalfEdgeTwin(e3);
      if (n5 === this.m_topoGraph.getHalfEdgeNext(t3)) return s2;
    }
    let r = n5, i2 = gr;
    for (; r !== e3; ) {
      const e4 = this.getCombinedHalfEdgeParentage(r);
      if (this.isGoodParentage(e4)) {
        if (i2 !== gr) return gr;
        i2 = this.m_topoGraph.getHalfEdgeTwin(r);
      }
      r = this.m_topoGraph.getHalfEdgeTwin(this.m_topoGraph.getHalfEdgePrev(r));
    }
    return i2;
  }
  tryMoveThroughCrossroadForward(e3, t2) {
    const s2 = this.m_topoGraph.getHalfEdgeNext(e3), n5 = this.m_topoGraph.getHalfEdgeTwin(s2);
    if (!t2) {
      const t3 = this.m_topoGraph.getHalfEdgeTwin(e3);
      if (this.m_topoGraph.isStrongPathNode(this.m_topoGraph.getHalfEdgeOrigin(t3))) return gr;
      if (n5 === this.m_topoGraph.getHalfEdgePrev(t3)) return s2;
    }
    let r = n5, i2 = gr;
    for (; r !== e3; ) {
      const e4 = this.getCombinedHalfEdgeParentage(r);
      if (this.isGoodParentage(e4)) {
        if (i2 !== gr) return gr;
        i2 = this.m_topoGraph.getHalfEdgeTwin(r);
      }
      r = this.m_topoGraph.getHalfEdgeTwin(this.m_topoGraph.getHalfEdgeNext(r));
    }
    return i2;
  }
  isOnALoop(e3, t2) {
    let s2 = e3;
    const n5 = 2 * this.m_topoGraph.getShape().getTotalPointCount() + 10;
    for (let r = 0; r < n5; r++) {
      if (1 === this.m_topoGraph.getHalfEdgeUserIndex(s2, t2)) return false;
      const n6 = this.m_topoGraph.getHalfEdgeNext(s2);
      if (n6 === this.m_topoGraph.getHalfEdgeTwin(s2)) return false;
      if (s2 = n6, s2 === e3) return true;
    }
    b("is_on_a_loop_");
  }
  restorePolylineParts(e3, t2, s2, n5, r, i2, o2, a2, h2, m2) {
    n(r === gr && i2 >= 0 && o2 >= 0 || -1 === i2 && -1 === o2), n(-1 === a2 && 1 !== m2.unsplitBehavior || -1 !== a2 && 1 === m2.unsplitBehavior);
    const g = m2.ogcRule, u = m2.allCrossRoadsImpassable, c = 1 === m2.unsplitBehavior, _ = 0 === m2.unsplitBehavior, d2 = this.m_topoGraph.getShape(), p3 = d2.hasSegmentParentage();
    let f3 = e3, x3 = this.m_topoGraph.getHalfEdgeTwin(f3);
    const y2 = new Pm();
    this.m_fromEdgeForPolylines = gr;
    let P3 = this.prevailingDirection(d2, f3), E2 = f3, S2 = gr, C2 = false, I4 = false, b2 = false;
    if (!c) for (; ; ) {
      const t3 = this.m_topoGraph.getHalfEdgePrev(f3);
      if (t3 === x3) {
        b2 = true;
        break;
      }
      const n6 = this.m_topoGraph.getHalfEdgeNext(x3);
      if (this.m_topoGraph.isStrongPathNode(this.m_topoGraph.getHalfEdgeOrigin(n6))) {
        C2 = true;
        break;
      }
      if (this.m_topoGraph.getHalfEdgeTwin(t3) !== n6) {
        if (u) {
          C2 = true;
          break;
        }
        if (f3 = this.tryMoveThroughCrossroadBackwards(f3, true), f3 === gr) {
          C2 = true;
          break;
        }
        x3 = this.m_topoGraph.getHalfEdgeTwin(f3);
      } else f3 = t3, x3 = n6;
      if (1 === this.m_topoGraph.getHalfEdgeUserIndex(f3, s2)) {
        b2 = true;
        break;
      }
      if (f3 === e3) {
        S2 = e3, I4 = true;
        break;
      }
      const r2 = this.getCombinedHalfEdgeParentage(f3);
      if (!this.isGoodParentage(r2)) break;
      E2 = f3, P3 += this.prevailingDirection(d2, f3);
    }
    if (S2 === gr) {
      for (f3 = e3, x3 = this.m_topoGraph.getHalfEdgeTwin(f3), S2 = f3; ; ) {
        const e4 = this.m_topoGraph.getHalfEdgeNext(f3), t4 = this.m_topoGraph.isStrongPathNode(this.m_topoGraph.getHalfEdgeOrigin(e4));
        if (t4) {
          C2 = true;
          break;
        }
        if (e4 === x3) {
          b2 = true;
          break;
        }
        if (-1 !== a2) {
          const e5 = this.m_topoGraph.getHalfEdgeOrigin(x3);
          if (1 === this.m_topoGraph.getClusterUserIndex(e5, a2)) {
            C2 = true;
            break;
          }
        }
        const n6 = this.m_topoGraph.getHalfEdgePrev(x3);
        if (this.m_topoGraph.getHalfEdgeTwin(e4) !== n6) {
          if (t4 || u) {
            C2 = true;
            break;
          }
          if (f3 = this.tryMoveThroughCrossroadForward(f3, true), f3 === gr) {
            C2 = true;
            break;
          }
          x3 = this.m_topoGraph.getHalfEdgeTwin(f3);
        } else f3 = e4, x3 = n6;
        if (1 === this.m_topoGraph.getHalfEdgeUserIndex(f3, s2)) {
          b2 = true;
          break;
        }
        const r2 = this.getCombinedHalfEdgeParentage(f3);
        if (!this.isGoodParentage(r2)) break;
        S2 = f3, P3 += this.prevailingDirection(d2, f3);
      }
      const t3 = this.m_topoGraph.getHalfEdgeOrigin(E2);
      I4 = this.m_topoGraph.getHalfEdgeTo(S2) === t3;
    } else if (this.m_fromEdgeForPolylines !== gr) {
      E2 = e3, S2 = this.tryMoveThroughCrossroadBackwards(E2, false), n(S2 !== gr);
      const t3 = this.m_topoGraph.getHalfEdgeTwin(E2);
      this.m_topoGraph.getHalfEdgeNext(t3);
    }
    let w2 = I4;
    I4 || b2 || h2 && (w2 = this.isOnALoop(e3, s2), w2 || (w2 = this.isOnALoop(x3, s2)));
    const v2 = P3 >= 0;
    let N2 = false;
    w2 && C2 && (I4 ? (N2 = g, v2 && (N2 || c || _) && E2 !== e3 && (n(!c), E2 = e3, N2 = false)) : (c || v2 && _) && (E2 = e3));
    let T = 0;
    for (f3 = E2; x3 = this.m_topoGraph.getHalfEdgeTwin(f3), this.m_topoGraph.setHalfEdgeUserIndex(f3, s2, 1), this.m_topoGraph.setHalfEdgeUserIndex(x3, s2, 1), T++, f3 !== S2; ) f3 = u ? this.m_topoGraph.getHalfEdgeNext(f3) : this.tryMoveThroughCrossroadForward(f3, false);
    v2 || (S2 = Pt(E2, E2 = S2), S2 = this.m_topoGraph.getHalfEdgeTwin(S2), E2 = this.m_topoGraph.getHalfEdgeTwin(E2));
    let G3 = d2.insertPath(t2, gr);
    f3 = E2;
    const D = this.m_topoGraph.getHalfEdgeOrigin(E2);
    let V2;
    V2 = -1 !== i2 ? this.chooseVertexByOrder(D, d2, i2, o2) : this.chooseVertexFromCluster_(D, r), this.m_topoGraph.isStrongPathNode(D) && d2.setStrongPathStart(G3, true);
    let F = d2.addVertex(G3, V2), H2 = F;
    -1 !== n5 && this.m_topoGraph.setClusterUserIndex(D, n5, 1);
    let A2 = 0;
    const M = N2 ? Math.trunc((T + 1) / 2) : -1;
    let U3 = gr, B3 = true, O = gr;
    for (; ; ) {
      if (p3) {
        const e5 = this.m_topoGraph.getSegmentParentage(f3), t3 = this.m_topoGraph.getHalfEdgeOrigin(f3);
        d2.setSegmentParentageAndBreak(H2, e5, B3 || this.m_topoGraph.isBreakNode(t3));
      }
      B3 = false, this.m_topoGraph.isHalfEdgeCurve(f3) && (this.m_topoGraph.querySegmentXY(f3, y2), d2.setSegmentToIndex(d2.getVertexIndex(H2), y2.get().clone())), U3 !== gr && -1 !== o2 && d2.addToUserIndex(U3, o2, -1);
      const e4 = u ? this.m_topoGraph.getHalfEdgeNext(f3) : this.tryMoveThroughCrossroadForward(f3, false), s3 = this.m_topoGraph.getHalfEdgeTo(f3);
      let a3;
      if (a3 = -1 !== i2 ? this.chooseVertexByOrder(s3, d2, i2, o2) : this.chooseVertexFromCluster_(s3, r), F = d2.addVertex(G3, a3), O = s3, -1 !== n5 && this.m_topoGraph.setClusterUserIndex(s3, n5, 1), p3 && this.m_topoGraph.isBreakNode(s3) && d2.setSegmentParentageBreakVertex(F, true), U3 = a3, A2++, N2 && A2 === M && (G3 = d2.insertPath(t2, gr), F = d2.addVertex(G3, a3), B3 = true, -1 !== o2 && d2.addToUserIndex(a3, o2, -1), U3 = gr), f3 === S2) break;
      f3 = e4, H2 = F;
    }
    O !== gr && this.m_topoGraph.isStrongPathNode(O) && d2.setStrongPathEnd(G3, true);
  }
  topoOperationPolylineSimplify_(e3, t2) {
    return this.topoOperationPolylineSimplifyOrPolylineTopoHelper_(e3, gr, false, t2).first;
  }
  topoOperationPolylineSimplifyOrPolylineTopoHelper_(e3, t2, s2, n5) {
    n(t2 === gr || e3 === gr);
    const r = this.m_topoGraph.getShape(), o2 = (t3) => t3 = e3 === gr ? t3 === gr ? r.getFirstGeometry() : r.getNextGeometry(t3) : t3 === gr ? e3 : gr, a2 = r.createGeometry(a.enumPolyline);
    let h2 = -1;
    s2 && (h2 = this.m_topoGraph.createUserIndexForClusters());
    const m2 = this.m_topoGraph.createUserIndexForHalfEdges(), g = t2 === gr ? r.createUserIndex() : -1, u = t2 === gr ? r.createUserIndex() : -1;
    let c = -1;
    if (1 === n5.unsplitBehavior) {
      c = this.m_topoGraph.createUserIndexForClusters();
      for (let e4 = o2(gr); e4 !== gr; e4 = o2(e4)) for (let t3 = r.getFirstPath(e4); t3 !== gr; t3 = r.getNextPath(t3)) {
        {
          const e5 = r.getFirstVertex(t3), s3 = this.m_topoGraph.getClusterFromVertex(e5);
          this.m_topoGraph.setClusterUserIndex(s3, c, 1);
        }
        if (!r.isClosedPath(t3)) {
          const e5 = r.getLastVertex(t3), s3 = this.m_topoGraph.getClusterFromVertex(e5);
          this.m_topoGraph.setClusterUserIndex(s3, c, 1);
        }
      }
    }
    if (t2 === gr) {
      let e4 = 0;
      for (let t3 = o2(gr); t3 !== gr; t3 = o2(t3)) for (let s3 = r.getFirstPath(t3); s3 !== gr; s3 = r.getNextPath(s3)) {
        if (r.isClosedPath(s3)) {
          let t4 = r.getFirstVertex(s3);
          for (let n6 = 0, i2 = r.getPathSize(s3); n6 < i2; n6++, t4 = r.getNextVertex(t4)) r.setUserIndex(t4, g, e4++), r.setUserIndex(t4, u, 2);
        } else {
          const t4 = r.getFirstVertex(s3);
          r.setUserIndex(t4, g, e4++), r.setUserIndex(t4, u, 1);
          let n6 = r.getNextVertex(t4);
          for (let i2 = 1, o3 = r.getPathSize(s3) - 1; i2 < o3; ++i2) r.setUserIndex(n6, g, e4++), r.setUserIndex(n6, u, 2), n6 = r.getNextVertex(n6);
          r.setUserIndex(n6, g, e4++), r.setUserIndex(n6, u, 1);
        }
      }
    }
    for (let i2 = o2(gr); i2 !== gr; i2 = o2(i2)) for (let e4 = r.getFirstPath(i2); e4 !== gr; e4 = r.getNextPath(e4)) {
      let s3 = r.getFirstVertex(e4);
      for (let i3 = 0, o3 = r.getPathSize(e4); i3 < o3; i3++, s3 = r.getNextVertex(s3)) {
        const e5 = this.m_topoGraph.getHalfEdgeFromVertex(s3);
        if (e5 === gr) continue;
        if (1 === this.m_topoGraph.getHalfEdgeUserIndex(e5, m2)) continue;
        const r2 = this.getCombinedHalfEdgeParentage(e5);
        if (this.isGoodParentage(r2)) {
          const s4 = 0 === i3;
          this.restorePolylineParts(e5, a2, m2, h2, t2, g, u, c, s4, n5);
        }
      }
    }
    let _ = gr;
    if (s2) {
      _ = r.createGeometry(a.enumMultiPoint);
      let e4 = gr;
      for (let s3 = this.m_topoGraph.getFirstCluster(); s3 !== gr; s3 = this.m_topoGraph.getNextCluster(s3)) {
        this.progress_();
        if (1 !== this.m_topoGraph.getClusterUserIndex(s3, h2)) {
          const n6 = this.m_topoGraph.getClusterParentage(s3);
          if (this.isGoodParentage(n6)) {
            e4 === gr && (e4 = r.insertPath(_, gr));
            const n7 = this.m_topoGraph.getClusterVertexIterator(s3);
            if (n7 !== gr) {
              let i2;
              this.m_topoGraph.getVertexFromVertexIterator(n7), i2 = -1 !== g ? this.chooseVertexByOrder(s3, r, g, u) : this.chooseVertexFromCluster_(s3, t2), r.addVertex(e4, i2);
            }
          }
        }
      }
    }
    return -1 !== u && r.removeUserIndex(u), -1 !== g && r.removeUserIndex(g), -1 !== h2 && r.removeUserIndex(h2), this.m_topoGraph.deleteUserIndexForHalfEdges(m2), $t(a2, _);
  }
  difference(e3, t2) {
    const s2 = this.m_topoGraph.getShape().getGeometryType(e3), n5 = this.m_topoGraph.getShape().getGeometryType(t2), r = m(s2), i2 = m(n5);
    if (r > i2) return e3;
    const o2 = this.m_topoGraph.getGeometryID(e3), h2 = this.m_topoGraph.getGeometryID(t2);
    if (this.m_maskLookup.length = 0, this.m_maskLookup.length = 1 + (o2 | h2), this.m_maskLookup[o2] = true, 2 === r && 2 === i2) {
      let s3 = gr;
      return this.m_topoGraph.getShape().getVertexDescription().getAttributeCount() > 1 && (s3 = e3), this.topoOperationPolygonPolygon_(e3, t2, s3);
    }
    if (1 === r && 2 === i2) {
      const t3 = Ha();
      return t3.allCrossRoadsImpassable = false, t3.ogcRule = this.m_bOGCOutput, t3.unsplitBehavior = 0, this.topoOperationPolylineSimplifyOrPolylineTopoHelper_(e3, gr, false, t3).first;
    }
    if (1 === r && 1 === i2) {
      const t3 = Ha();
      return t3.allCrossRoadsImpassable = true, t3.ogcRule = this.m_bOGCOutput, t3.unsplitBehavior = 0, this.topoOperationPolylineSimplifyOrPolylineTopoHelper_(e3, gr, false, t3).first;
    }
    if (0 === r) return this.topoOperationMultiPoint_();
    b("");
  }
  symmetricDifference(e3, t2) {
    const s2 = this.m_topoGraph.getShape().getGeometryType(e3), n5 = this.m_topoGraph.getShape().getGeometryType(t2), r = Va(s2), i2 = Va(n5), o2 = this.m_topoGraph.getGeometryID(e3), h2 = this.m_topoGraph.getGeometryID(t2);
    return n(o2 >= 0), n(h2 >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = 1 + (o2 | h2), this.m_maskLookup[o2] = true, this.m_maskLookup[o2] = true, this.m_maskLookup[h2] = true, 2 === r && 2 === i2 ? this.topoOperationPolygonPolygon_(e3, t2, gr) : 1 === r && 1 === i2 ? this.topoOperationPolyline_(gr, this.m_bOGCOutput) : 0 === r && 0 === i2 ? this.topoOperationMultiPoint() : void b("");
  }
  planarSimplifyNoCrackingAndCluster(e3, t2, s2, n5) {
    this.m_bOGCOutput = e3, this.m_topoGraph = new tn();
    const r = t2.getFillRule(s2), o2 = t2.getGeometryType(s2);
    if (1 !== r || o2 === a.enumMultiPoint ? this.m_topoGraph.setAndSimplifyEditShapeAlternate(t2, s2, this.m_progressTracker) : this.m_topoGraph.setAndSimplifyEditShapeWinding(t2, s2, this.m_progressTracker), this.m_topoGraph.dirtyCheckFailed()) return false;
    this.m_topoGraph.setCheckDirtyPlanesweepTolerance(Number.NaN);
    const h2 = this.m_topoGraph.getGeometryID(s2);
    if (n(h2 >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = h2 + 1, this.m_maskLookup[h2] = true, t2.getGeometryType(s2) === a.enumPolygon || 1 === r && t2.getGeometryType(s2) !== a.enumMultiPoint) {
      t2.setFillRule(s2, 0);
      const i2 = this.topoOperationPolygonPolygon_(s2, gr, gr);
      if (t2.swapGeometry(i2, s2), t2.removeGeometry(i2), 1 === r && this.m_bOGCOutput) return this.planarSimplifyNoCrackingAndCluster(e3, t2, s2, n5);
    } else if (t2.getGeometryType(s2) === a.enumPolyline) {
      const e4 = Ha();
      e4.ogcRule = this.m_bOGCOutput, e4.allCrossRoadsImpassable = true, e4.unsplitBehavior = n5;
      const r2 = this.topoOperationPolylineSimplify_(t2.getFirstGeometry(), e4);
      t2.swapGeometry(r2, s2), t2.removeGeometry(r2);
    } else if (t2.getGeometryType(s2) === a.enumMultiPoint) {
      const e4 = this.topoOperationMultiPoint_();
      t2.swapGeometry(e4, s2), t2.removeGeometry(e4);
    } else b("");
    return true;
  }
  unsplitPolylineExact(e3) {
    return n(0), new Qs2();
  }
  planarSimplifyPolylines(e3, t2, s2, n5, r) {
    for (let _ = e3.getFirstGeometry(); _ !== gr; _ = e3.getNextGeometry(_)) {
      const t3 = e3.getGeometryType(_);
      n(t3 === a.enumPolyline);
    }
    let o2 = 0, a2 = 0, h2 = null;
    if (e3.hasCurves() && !e3.hasSegmentParentage()) {
      h2 = new fa();
      const s3 = e3.getEnvelope2D(this.m_progressTracker);
      a2 = da(t2.total());
      const n6 = _a(t2.total(), s3);
      o2 = pa(n6, a2), aa(e3, n6, t2.total(), 12e3, h2, null, this.m_progressTracker);
    }
    {
      const s3 = Ia(t2.add(o2));
      e3.filterClosePoints(s3, false, false, false, gr);
    }
    if (this.m_topoGraph = new tn(), 4 !== r && 5 !== r) if (null === h2 && s2) {
      const n6 = new Dn2(this.m_progressTracker, false);
      n6.sweepVertical(e3, t2.total()), n6.hadComplications() ? (ya(e3, t2, this.m_progressTracker, true, false), s2 = false) : this.m_topoGraph.setCheckDirtyPlanesweepTolerance(t2.total());
    } else ya(e3, t2.add(o2), this.m_progressTracker, true, false), s2 = false;
    else s2 = false;
    e3.removeSelection(), e3.collapseAllGeometriesToFirst();
    const m2 = e3.getFirstGeometry();
    if (this.m_topoGraph.setAndSimplifyEditShapeAlternate(e3, m2, this.m_progressTracker), this.m_topoGraph.dirtyCheckFailed()) return n(s2 && null === h2), this.m_topoGraph.removeShape(), this.m_topoGraph = null, this.planarSimplifyPolylines(e3, t2, false, n5, -1);
    this.m_topoGraph.setCheckDirtyPlanesweepTolerance(Number.NaN);
    const g = this.m_topoGraph.getGeometryID(m2);
    n(g >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = g + 1, this.m_maskLookup[g] = true;
    const u = this.topoOperationPolylineSimplify_(e3.getFirstGeometry(), n5);
    null !== h2 && h2.stitchCurves(e3, u, a2, true);
    const c = e3.getGeometry(u);
    return s2 || c.getImpl().setIsSimple(4, t2.total()), c;
  }
  planarSimplifyMultiPoints(e3, t2, s2, n5) {
    for (let m2 = e3.getFirstGeometry(); m2 !== gr; m2 = e3.getNextGeometry(m2)) {
      const t3 = e3.getGeometryType(m2);
      n(t3 === a.enumMultiPoint);
    }
    this.m_topoGraph = new tn(), 4 !== n5 && 5 !== n5 ? (ya(e3, t2, this.m_progressTracker, true, false), s2 = false) : s2 = false, e3.removeSelection(), e3.collapseAllGeometriesToFirst();
    const r = e3.getFirstGeometry();
    if (this.m_topoGraph.setAndSimplifyEditShapeAlternate(e3, r, this.m_progressTracker), this.m_topoGraph.dirtyCheckFailed()) return n(s2), this.m_topoGraph.removeShape(), this.m_topoGraph = null, this.planarSimplifyMultiPoints(e3, t2, false, -1);
    this.m_topoGraph.setCheckDirtyPlanesweepTolerance(Number.NaN);
    const o2 = this.m_topoGraph.getGeometryID(r);
    n(o2 >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = o2 + 1, this.m_maskLookup[o2] = true;
    const a2 = this.topoOperationMultiPoint(), h2 = e3.getGeometry(a2);
    return s2 || h2.getImpl().setIsSimple(4, t2.total()), h2;
  }
  planarSimplifyPolygons(e3, t2, s2, n5, r, o2) {
    for (let f3 = e3.getFirstGeometry(); f3 !== gr; f3 = e3.getNextGeometry(f3)) {
      const t3 = e3.getGeometryType(f3);
      n(t3 === a.enumPolygon || t3 === a.enumPolyline && s2);
    }
    let a2 = 0, h2 = 0, m2 = null;
    if (e3.hasCurves() && !e3.hasSegmentParentage()) {
      m2 = new fa();
      const s3 = e3.getEnvelope2D(this.m_progressTracker);
      h2 = da(t2.total());
      const n6 = _a(t2.total(), s3);
      a2 = pa(n6, h2), aa(e3, n6, t2.total(), 12e3, m2, null, this.m_progressTracker);
    }
    if (o2) {
      ya(e3, t2.add(a2), this.m_progressTracker, true, false);
      for (let t3 = e3.getFirstGeometry(); t3 !== gr; t3 = e3.getNextGeometry(t3)) e3.getGeometryType(t3) === a.enumPolygon && er(e3, t3, -1, false, gr, this.m_progressTracker);
    }
    if (this.m_topoGraph = new tn(), o2 || 4 === r || 5 === r) n5 = false;
    else if (null === m2 && n5) {
      const s3 = new Dn2(this.m_progressTracker, false);
      s3.sweepVertical(e3, t2.total()), s3.hadComplications() ? (ya(e3, t2, this.m_progressTracker, true, false), n5 = false) : this.m_topoGraph.setCheckDirtyPlanesweepTolerance(t2.total());
    } else ya(e3, t2.add(a2), this.m_progressTracker, true, false), n5 = false;
    e3.removeSelection(), e3.collapseAllGeometriesToFirst();
    const g = e3.getFirstGeometry();
    if (s2 ? this.m_topoGraph.setAndSimplifyEditShapeWinding(e3, g, this.m_progressTracker) : this.m_topoGraph.setAndSimplifyEditShapeAlternate(e3, g, this.m_progressTracker), this.m_topoGraph.dirtyCheckFailed()) return n(n5 && null === m2), this.m_topoGraph.removeShape(), this.m_topoGraph = null, this.planarSimplifyPolygons(e3, t2, s2, false, -1, false);
    this.m_topoGraph.setCheckDirtyPlanesweepTolerance(Number.NaN);
    const u = this.m_topoGraph.getGeometryID(g);
    n(u >= 0), this.m_maskLookup.length = 0, this.m_maskLookup.length = u + 1, this.m_maskLookup[u] = true, e3.setFillRule(g, 0);
    const c = this.m_bOGCOutput && s2, _ = c;
    let d2 = this.topoOperationPolygonPolygon_(g, gr, gr, _);
    if (c) {
      this.m_topoGraph.removeShape(), this.m_topoGraph = null, e3.removeGeometry(g), this.m_topoGraph = new tn(), this.m_topoGraph.setAndSimplifyEditShapeAlternate(e3, d2, this.m_progressTracker);
      d2 = this.topoOperationPolygonPolygon_(d2, gr, gr, false);
    }
    null !== m2 && m2.stitchCurves(e3, d2, h2, true);
    const p3 = e3.getGeometry(d2);
    return p3.setFillRule(0), n5 ? p3.getImpl().setIsSimple(3, 0) : (p3.getImpl().setIsSimple(4, t2.total()), p3.getImpl().updateOGCFlagsProtected()), p3;
  }
  planarSimplify3DImpl_(e3, t2, s2, n5, r) {
    return n(0), {};
  }
  planarSimplifyImpl_(e3, t2, s2, n5, r, o2, h2, m2) {
    if (e3.isEmpty()) return e3.clone();
    const l2 = e3.getGeometryType(), g = new yr(), u = g.addGeometry(e3);
    if (Vt2(r) && l2 === a.enumPolygon && (s2 = false, g.setFillRule(u, 0)), m2 && (e3.hasAttribute(1) && g.replaceNaNs(1, 0), g.removeNaNVertices()), l2 === a.enumPolygon || l2 === a.enumPolyline && s2) return this.planarSimplifyPolygons(g, t2, s2, n5, r, false);
    if (l2 === Qs2.type) {
      const e4 = Ha();
      return e4.allCrossRoadsImpassable = true, e4.ogcRule = this.m_bOGCOutput, e4.unsplitBehavior = h2, this.planarSimplifyPolylines(g, t2, n5, e4, r);
    }
    if (l2 === a.enumMultiPoint) return this.planarSimplifyMultiPoints(g, t2, n5, r);
    b("what else?");
  }
};
function Qa(e3, t2, s2, n5) {
  if (e3.isEmpty()) return e3.createInstance();
  if (t2.isEmpty()) return n5 ? e3.createInstance() : new se({ copy: e3 });
  const r = [new mi()], i2 = [0], o2 = 2 === t2.getDimension();
  return 1 !== t2.getDimension() && 2 !== t2.getDimension() && b(""), r[0] = e3.getXY(), o2 ? Wo(t2, r, 1, s2.total(), i2) : jo(t2, r, 1, s2.total(), i2), 0 === i2[0] ? e3.createInstance() : e3;
}
function Ja(e3, t2, s2, n5) {
  const r = e3.createInstance(), i2 = Ot(mi, 100), o2 = new Array(100), h2 = e3.getPointCount();
  let m2 = true;
  const l2 = 2 === t2.getDimension();
  1 !== t2.getDimension() && 2 !== t2.getDimension() && b("");
  for (let a2 = 0; a2 < h2; ) {
    const n6 = e3.queryCoordinates(i2, i2.length, a2, -1) - a2;
    l2 ? Wo(t2, i2, n6, s2.total(), o2) : jo(t2, i2, n6, s2.total(), o2);
    let h3 = 0;
    for (let t3 = 0; t3 < n6; t3++) {
      0 === o2[t3] && (m2 && (m2 = false, r.addPoints(e3, 0, a2)), h3 !== t3 && r.addPoints(e3, a2 + h3, a2 + t3), h3 = t3 + 1);
    }
    m2 || h3 === n6 || r.addPoints(e3, a2 + h3, a2 + n6), a2 += n6;
  }
  return m2 ? e3 : r;
}
function $a(e3, t2, s2, n5) {
  const r = e3.getGeometryType();
  if (r === a.enumEnvelope) {
    const t3 = new mr({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.addEnvelope(e3, false), t3;
  }
  if (r === a.enumPoint && ("|" === n5 || "^" === n5)) {
    const t3 = new De({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.add(e3), t3;
  }
  if (r === a.enumLine) {
    const t3 = new Qs2({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.addSegment(e3, true), t3;
  }
  if (r === a.enumMultiPoint && "-" === n5 && t2.getGeometryType() === a.enumPoint) {
    const t3 = new se({ vd: e3.getDescription() });
    return e3.isEmpty() || e3.getPointByVal(0, t3), t3;
  }
  if (r === a.enumMultiPoint && "&" === n5 && t2.getGeometryType() === a.enumPoint) {
    const t3 = new se({ vd: e3.getDescription() });
    return e3.isEmpty() || e3.getPointByVal(0, t3), t3;
  }
  return e3;
}
function eh(e3) {
  const t2 = e3.getGeometryType();
  if (t2 === a.enumEnvelope) {
    const t3 = new mr({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.addEnvelope(e3, false), t3;
  }
  if (t2 === a.enumPoint) {
    const t3 = new De({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.add(e3), t3;
  }
  if (Da(t2)) {
    const t3 = new Qs2({ vd: e3.getDescription() });
    return e3.isEmpty() || t3.addSegment(e3, true), t3;
  }
  return t2 !== a.enumMultiPoint && t2 !== a.enumPolyline && t2 !== a.enumPolygon && P("Unexpected geometry type"), e3;
}
function th(e3, t2, s2, n5) {
  const r = s2 === gr ? e3.getClusterHalfEdge(t2) : s2;
  let i2 = r;
  n(e3.getHalfEdgeOrigin(r) === t2);
  do {
    n5(i2), i2 = e3.getHalfEdgeNext(e3.getHalfEdgeTwin(i2));
  } while (i2 !== r);
}
var sh = class {
  constructor(e3, t2, s2, n5, r, i2) {
    this.m_rParent = e3, this.m_rTopoGraph = e3.m_topoGraph, this.m_rShape = this.m_rTopoGraph.getShape(), this.m_IDCuttee = this.m_rTopoGraph.getGeometryID(n5), this.m_IDCutter = this.m_rTopoGraph.getGeometryID(r), this.m_IDBoth = this.m_IDCuttee | this.m_IDCutter, this.m_bConsiderTouch = t2, this.m_sideIndex = s2, this.m_cuttee = n5, this.m_cutter = r, this.m_rCutHandles = i2, this.m_cutteeBreadcrumbsIndex = this.m_rShape.createUserIndexUninitialized(), this.m_clusterParentageIndex = this.m_rShape.createUserIndexUninitialized();
    for (let o2 = this.m_rShape.getFirstPath(this.m_cuttee); o2 !== gr; o2 = this.m_rShape.getNextPath(o2)) {
      let e4 = 0;
      const t3 = this.m_rShape.getPathSize(o2);
      for (let s3 = this.m_rShape.getFirstVertex(o2); e4 < t3; e4++, s3 = this.m_rShape.getNextVertex(s3)) this.m_rShape.setUserIndex(s3, this.m_clusterParentageIndex, this.m_rTopoGraph.getClusterParentage(this.m_rTopoGraph.getClusterFromVertex(s3)));
    }
  }
  Do() {
    this.cutPolylinePolyline_(), this.m_rShape.removeUserIndex(this.m_cutteeBreadcrumbsIndex), this.m_rShape.removeUserIndex(this.m_clusterParentageIndex);
  }
  setTbd(e3) {
    return 8 | e3;
  }
  classifyStandardCut(e3, t2, s2, n5) {
    const r = this.m_rShape.getPrevVertex(e3), i2 = this.m_rShape.getNextVertex(e3), o2 = r === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(r)), a2 = i2 === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(i2)), h2 = this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(s2)), m2 = this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(n5));
    let l2 = 1, g = 32, u = 32;
    if (th(this.m_rTopoGraph, t2, m2, (e4) => {
      e4 === h2 && (l2 = 2), e4 === o2 && (g = l2), e4 === a2 && (u = l2);
    }), this.m_bConsiderTouch) 32 !== g && this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex) | g), 32 !== u && this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex) | u);
    else {
      if (32 === g || 32 === u) return 1;
      if (g === u && !(o2 === h2 || o2 === m2 || a2 === h2 || a2 === m2)) return 1;
      this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex) | g), this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex) | u);
    }
    return 0;
  }
  classifyTouchCut(e3, t2, s2, n5) {
    const r = this.m_rShape.getPrevVertex(e3), i2 = this.m_rShape.getNextVertex(e3), o2 = r === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(r)), a2 = i2 === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(i2)), h2 = s2 === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(s2)), m2 = n5 === gr ? gr : this.m_rTopoGraph.getHalfEdgeConnector(t2, this.m_rTopoGraph.getClusterFromVertex(n5));
    if (!this.m_bConsiderTouch) {
      let t3;
      return (t3 = h2 === o2 || m2 === o2) ? this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex))) : (t3 = h2 === a2 || m2 === a2) && this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex))), t3 ? 0 : 1;
    }
    if (o2 === gr) return this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex))), 0;
    if (a2 === gr) return this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex))), 0;
    if (o2 === a2) return this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex))), this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex))), 0;
    if (m2 !== gr) {
      if (o2 === m2) return this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex))), 0;
      if (a2 === m2) return this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex))), 0;
      let s3 = 1;
      th(this.m_rTopoGraph, t2, m2, (t3) => {
        if (t3 === o2) {
          const e4 = this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex) | s3;
          this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, e4), s3 = 2;
        } else if (t3 === a2) {
          const t4 = this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex) | s3;
          this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, t4), s3 = 2;
        }
      });
    } else {
      if (o2 === h2) return this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex))), 0;
      if (a2 === h2) return this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, this.setTbd(this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex))), 0;
      let s3 = 2;
      th(this.m_rTopoGraph, t2, h2, (t3) => {
        if (t3 === o2) {
          const e4 = this.m_rShape.getUserIndex(r, this.m_cutteeBreadcrumbsIndex) | s3;
          this.m_rShape.setUserIndex(r, this.m_cutteeBreadcrumbsIndex, e4), s3 = 1;
        } else if (t3 === a2) {
          const t4 = this.m_rShape.getUserIndex(e3, this.m_cutteeBreadcrumbsIndex) | s3;
          this.m_rShape.setUserIndex(e3, this.m_cutteeBreadcrumbsIndex, t4), s3 = 1;
        }
      });
    }
    return 0;
  }
  classifyCutVertex(e3, t2) {
    let s2 = 0, n5 = 0;
    for (let r = this.m_rTopoGraph.getClusterVertexIterator(t2); r !== gr; r = this.m_rTopoGraph.incrementVertexIterator(r)) {
      const i2 = this.m_rTopoGraph.getVertexFromVertexIterator(r);
      if (this.m_rShape.getGeometryFromVertex(i2) === this.m_cutter) {
        n5++;
        const r2 = this.m_rShape.getPrevVertex(i2), o2 = this.m_rShape.getNextVertex(i2);
        s2 += r2 === gr || o2 === gr ? this.classifyTouchCut(e3, t2, r2, o2) : this.classifyStandardCut(e3, t2, r2, o2);
      }
    }
    n5 && s2 === n5 && !this.m_bConsiderTouch && this.m_rShape.setUserIndex(e3, this.m_clusterParentageIndex, this.m_IDCuttee);
  }
  cutPolylinePolyline_() {
    this.m_rShape.getGeometryType(this.m_cuttee), this.m_rShape.getGeometryType(this.m_cutter), this.m_rParent.m_maskLookup.length = 0, this.m_rParent.m_maskLookup.length = this.m_IDBoth + 1, this.m_rParent.m_maskLookup[this.m_IDBoth] = true;
    for (let i2 = this.m_rShape.getFirstPath(this.m_cuttee); i2 !== gr; i2 = this.m_rShape.getNextPath(i2)) {
      const e4 = this.m_rShape.getPathSize(i2);
      let t3 = this.m_rShape.getFirstVertex(i2);
      for (let s3 = 0; s3 < e4; ++s3, t3 = this.m_rShape.getNextVertex(t3)) this.m_rShape.setUserIndex(t3, this.m_cutteeBreadcrumbsIndex, 0);
      t3 = this.m_rShape.getFirstVertex(i2);
      for (let s3 = 0; s3 < e4; ++s3, t3 = this.m_rShape.getNextVertex(t3)) {
        const e5 = this.m_rTopoGraph.getClusterFromVertex(t3);
        this.m_rTopoGraph.getClusterParentage(e5) === this.m_IDBoth && this.classifyCutVertex(t3, e5);
      }
    }
    const e3 = (e4, t3) => {
      let s3 = this.m_rShape.getUserIndex(e4, this.m_cutteeBreadcrumbsIndex);
      const n6 = this.m_rTopoGraph.getHalfEdgeConnector(this.m_rTopoGraph.getClusterFromVertex(e4), this.m_rTopoGraph.getClusterFromVertex(t3));
      return (this.m_rTopoGraph.getHalfEdgeParentage(n6) & this.m_IDBoth) === this.m_IDBoth && (s3 |= 4), s3;
    };
    for (let i2 = this.m_rShape.getFirstPath(this.m_cuttee); i2 !== gr; i2 = this.m_rShape.getNextPath(i2)) {
      let t3 = this.m_rShape.getFirstVertex(i2);
      const s3 = this.m_rShape.isClosedPath(i2), n6 = this.m_rShape.getPathSize(i2) + (s3 ? 1 : 0);
      let r2 = 1, o3 = 32;
      for (let i3 = this.m_rShape.getNextVertex(t3); r2 < n6; ++r2, t3 = i3, i3 = this.m_rShape.getNextVertex(i3)) {
        const s4 = e3(t3, i3);
        this.m_rShape.getUserIndex(t3, this.m_clusterParentageIndex) === this.m_IDBoth && (o3 = s4), 32 !== o3 && this.m_rShape.setUserIndex(t3, this.m_cutteeBreadcrumbsIndex, o3 | s4);
      }
      t3 = this.m_rShape.getLastVertex(i2);
      let a2 = 32;
      r2 = 1;
      for (let i3 = this.m_rShape.getPrevVertex(t3); r2 < n6; ++r2, t3 = i3, i3 = this.m_rShape.getPrevVertex(i3)) {
        const s4 = e3(i3, t3);
        this.m_rShape.getUserIndex(t3, this.m_clusterParentageIndex) === this.m_IDBoth && (a2 = s4), 32 !== a2 && this.m_rShape.setUserIndex(i3, this.m_cutteeBreadcrumbsIndex, a2 | s4);
      }
    }
    let t2 = gr, s2 = gr, n5 = 32;
    const r = this.m_rShape.hasSegmentParentage(), o2 = new Pm();
    for (let a2 = this.m_rShape.getFirstPath(this.m_cuttee); a2 !== gr; a2 = this.m_rShape.getNextPath(a2)) {
      const e4 = this.m_rShape.isClosedPath(a2), h2 = this.m_rShape.getPathSize(a2) + (e4 ? 1 : 0);
      let m2 = 1, l2 = this.m_rShape.getFirstVertex(a2), g = gr, u = true;
      for (let a3 = this.m_rShape.getNextVertex(l2); m2 < h2; ++m2, a3 = this.m_rShape.getNextVertex(a3)) {
        let e5 = this.m_rShape.getUserIndex(l2, this.m_cutteeBreadcrumbsIndex);
        8 === e5 ? e5 = 3 : (e5 &= -9, 4 & e5 ? e5 = 4 : 3 & ~e5 || (e5 = 3)), e5 !== n5 ? (t2 !== gr && (g = this.m_rShape.addVertex(s2, l2), r && this.m_rTopoGraph.isBreakNode(this.m_rTopoGraph.getClusterFromVertex(l2)) && this.m_rShape.setSegmentParentageBreakVertex(g, true), this.m_rCutHandles.push(t2), this.m_rShape.setGeometryUserIndex(t2, this.m_sideIndex, n5)), t2 = this.m_rShape.createGeometry(a.enumPolyline), s2 = this.m_rShape.insertPath(t2, gr), n5 = e5, u = true) : this.m_rShape.getUserIndex(l2, this.m_clusterParentageIndex) === this.m_IDBoth && 4 !== e5 && (g = this.m_rShape.addVertex(s2, l2), r && this.m_rTopoGraph.isBreakNode(this.m_rTopoGraph.getClusterFromVertex(l2)) && this.m_rShape.setSegmentParentageBreakVertex(g, true), s2 = this.m_rShape.insertPath(t2, gr), u = true), g = this.m_rShape.addVertex(s2, l2);
        const h3 = this.m_rTopoGraph.getClusterFromVertex(l2);
        !u && r && this.m_rTopoGraph.isBreakNode(h3) && this.m_rShape.setSegmentParentageBreakVertex(g, true);
        const m3 = this.m_rTopoGraph.getHalfEdgeFromVertex(l2);
        if (r) {
          const e6 = this.m_rTopoGraph.getSegmentParentage(m3);
          this.m_rShape.setSegmentParentageAndBreak(g, e6, u || this.m_rTopoGraph.isBreakNode(h3));
        }
        this.m_rTopoGraph.isHalfEdgeCurve(m3) && (this.m_rTopoGraph.querySegmentXY(m3, o2), this.m_rShape.setSegmentToIndex(this.m_rShape.getVertexIndex(g), o2.get().clone())), l2 = a3, u = false;
      }
      g = this.m_rShape.addVertex(s2, l2), r && this.m_rTopoGraph.isBreakNode(this.m_rTopoGraph.getClusterFromVertex(l2)) && this.m_rShape.setSegmentParentageBreakVertex(g, true), this.m_rCutHandles.push(t2), this.m_rShape.setGeometryUserIndex(t2, this.m_sideIndex, n5), t2 = gr, s2 = gr, n5 = 32;
    }
  }
};
function nh(e3, t2, s2) {
  return new Ka(s2).linesToPolygonsImpl(e3, t2);
}
function rh(e3, t2, n5, r, h2) {
  if (r && (r.m_reason = 0, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), e3.isEmpty()) return 5;
  const m2 = e3.getGeometryType();
  if (m2 === a.enumPoint) return mh(e3, r);
  const l2 = zt(t2, e3, false).total();
  if (m2 === a.enumEnvelope) {
    const t3 = e3, n6 = new n3();
    return t3.queryEnvelope(n6), n6.isDegenerate(l2) ? (r && (r.m_reason = 4, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), 0) : 5;
  }
  if (f(m2)) {
    const s2 = e3, i2 = new Qs2({ vd: s2.getDescription() });
    return i2.addSegment(s2, true), oh(i2, t2, n5, r, h2);
  }
  const g = [0], u = e3.getImpl().getIsSimple(l2, g);
  let c = n5 ? -1 : u;
  if (Yt2(c) || 0 === c) return c;
  const _ = new Ph2(e3, t2, c, h2, false);
  m2 === a.enumMultiPoint || m2 === a.enumPolyline || m2 === a.enumPolygon ? c = _.isSimplePlanarImpl() : b("");
  return e3.getImpl().setIsSimple(c, l2), r && r.assign(_.m_nonSimpleResult), c;
}
function ih(e3, t2, n5, r, h2) {
  if (r && (r.m_reason = 0, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), e3.isEmpty()) return 5;
  const m2 = e3.getGeometryType();
  if (m2 === a.enumPoint) return mh(e3, r);
  const l2 = zt(t2, e3, false).total();
  if (m2 === a.enumEnvelope) {
    const t3 = e3, n6 = new n3();
    return t3.queryEnvelope(n6), n6.isDegenerate(l2) ? (r && (r.m_reason = 4, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), 0) : 5;
  }
  if (f(m2)) {
    const s2 = e3, i2 = new Qs2({ vd: s2.getDescription() });
    return i2.addSegment(s2, true), ih(i2, t2, n5, r, h2);
  }
  I(m2), y(m2) || z("OGC simplify is not implemented for this geometry type");
  const g = [0], u = e3.getImpl().getIsSimple(l2, g);
  let c = n5 ? -1 : u;
  if (5 === c || 0 === c) return c;
  const _ = new Ph2(e3, t2, c, h2, true);
  m2 === a.enumMultiPoint || m2 === a.enumPolyline || m2 === a.enumPolygon ? (c = _.isSimplePlanarImpl(), Yt2(c) && (c = 5)) : b("");
  return e3.getImpl().setIsSimple(c, l2), r && r.assign(_.m_nonSimpleResult), c;
}
function oh(e3, t2, n5, r, h2) {
  if (r && (r.m_reason = 0, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), e3.isEmpty()) return 5;
  const m2 = e3.getGeometryType();
  if (m2 === a.enumPoint) return mh(e3, r);
  const l2 = zt(t2, e3, false).total();
  if (m2 === a.enumEnvelope) {
    const t3 = e3, n6 = n3.constructEmpty();
    return t3.queryEnvelope(n6), n6.isDegenerate(l2) ? (r && (r.m_reason = 4, r.m_vertexIndex1 = -1, r.m_vertexIndex2 = -1), 0) : 5;
  }
  if (f(m2)) {
    const s2 = e3, i2 = new Qs2({ vd: s2.getDescription() });
    return i2.addSegment(s2, true), oh(i2, t2, n5, r, h2);
  }
  const g = [0], u = e3.getImpl().getIsSimple(l2, g);
  let c = n5 ? -1 : u;
  if (-1 !== c) return c;
  const _ = new Ph2(e3, t2, c, h2, false);
  return m2 === a.enumMultiPoint ? c = _.multipointIsSimpleAsFeature() : m2 === a.enumPolyline ? c = _.polylineIsSimpleAsFeature() : m2 === a.enumPolygon ? c = _.polygonIsSimpleAsFeature() : b(""), e3.getImpl().setIsSimple(c, l2), r && r.assign(_.m_nonSimpleResult), c;
}
function ah(e3, t2, n5, r) {
  if (e3.isEmpty()) return e3;
  const h2 = e3.getGeometryType();
  if (h2 === a.enumPoint) {
    const t3 = new e();
    if (mh(e3, t3), 3 === t3.m_reason) {
      const t4 = e3.clone();
      return t4.replaceNaNs(1, 0), t4;
    }
    return 2 === t3.m_reason ? e3.createInstance() : e3;
  }
  if (h2 === a.enumEnvelope) {
    const n6 = zt(t2, e3, true).total(), r2 = e3, i2 = n3.constructEmpty();
    return r2.queryEnvelope(i2), i2.isDegenerate(n6) ? r2.createInstance() : e3;
  }
  if (f(h2)) {
    const s2 = e3, i2 = new Qs2({ vd: s2.getDescription() });
    return i2.addSegment(s2, true), ah(i2, t2, n5, r);
  }
  I(h2);
  const m2 = zt(t2, e3, false).total(), l2 = [0], g = e3.getImpl().getIsSimple(m2, l2), u = n5 ? -1 : g;
  if (Yt2(u)) {
    if (h2 === a.enumPolygon && 0 !== e3.getFillRule()) {
      const t3 = e3.clone();
      return t3.setFillRule(0), t3;
    }
    return e3;
  }
  if ((h2 === a.enumMultiPoint || h2 === a.enumPolyline) && u >= 1) return e3;
  const c = new Ph2(e3, t2, u, r, false);
  let _;
  return h2 === a.enumMultiPoint ? _ = c.multipointSimplifyAsFeature() : h2 === a.enumPolyline ? _ = c.polylineSimplifyAsFeature() : h2 === a.enumPolygon ? _ = c.polygonSimplifyAsFeature() : b(""), _;
}
function hh(e3, t2, n5, r) {
  if (e3.isEmpty()) return e3;
  const a2 = e3.getGeometryType();
  if (a2 === a.enumPoint) {
    const t3 = new e();
    if (mh(e3, t3), 3 === t3.m_reason) {
      const t4 = e3.clone();
      return t4.replaceNaNs(1, 0), t4;
    }
    return 2 === t3.m_reason ? e3.createInstance() : e3;
  }
  if (a2 === a.enumEnvelope) {
    const n6 = e3, r2 = new n3();
    n6.queryEnvelope(r2);
    const i2 = zt(t2, e3, true).total();
    return r2.isDegenerate(i2) ? n6.createInstance() : e3;
  }
  if (f(a2)) {
    const s2 = e3, i2 = new Qs2({ vd: s2.getDescription() });
    return i2.addSegment(s2, true), hh(i2, t2, n5, r);
  }
  I(a2), y(a2) || z("OGC simplify is not implemented for this geometry type");
  const h2 = zt(t2, e3, false).total(), m2 = [0], l2 = e3.getImpl().getIsSimple(h2, m2), g = n5 ? -1 : l2;
  if (5 === g) {
    if (a2 === a.enumPolygon && 0 !== e3.getFillRule()) {
      const t3 = e3.clone();
      return t3.setFillRule(0), t3;
    }
    return e3;
  }
  return Aa(e3, zt(t2, e3, true), false, g, r, 0, true);
}
function mh(e3, t2) {
  const s2 = e3.getX(), n5 = e3.getY();
  if (!Number.isFinite(s2) || !Number.isFinite(n5)) return t2 && (t2.m_reason = 2, t2.m_vertexIndex1 = -1, t2.m_vertexIndex2 = -1), 0;
  if (e3.hasAttribute(1)) {
    const s3 = e3.getZ();
    if (!Number.isFinite(s3)) return t2 && (t2.m_reason = Number.isNaN(s3) ? 3 : 2, t2.m_vertexIndex1 = -1, t2.m_vertexIndex2 = -1), 0;
  }
  return 5;
}
var lh = class {
  constructor() {
    this.m_segment = null, this.m_vertexIndex = -1, this.m_pathIndex = -1, this.m_flags = 0;
  }
  setReversed(e3) {
    this.m_flags &= -2, this.m_flags = this.m_flags | (e3 ? 1 : 0);
  }
  getReversed() {
    return !!(1 & this.m_flags);
  }
  getRightSide() {
    return this.getReversed() ? 0 : 1;
  }
};
function gh() {
  return { x: -1, y: -1, ipath: -1, ivertex: -1, ipolygon: -1 };
}
function uh(e3, t2, s2, n5, r) {
  return { x: e3, y: t2, ipath: s2, ivertex: n5, ipolygon: r };
}
function ch(e3, t2) {
  return e3.x === t2.x && e3.y === t2.y && e3.ipath === t2.ipath && e3.ivertex === t2.ivertex && e3.ipolygon === t2.ipolygon;
}
function _h(e3, t2) {
  e3.x = t2.x, e3.y = t2.y, e3.ipath = t2.ipath, e3.ivertex = t2.ivertex, e3.ipolygon = t2.ipolygon;
}
function dh() {
  return { x: -1, y: -1, ipath: -1, ivertex: -1, bBoundary: false, bEndPoint: false };
}
function ph(e3, t2, s2, n5, r, i2) {
  return { x: e3, y: t2, ipath: s2, ivertex: n5, bBoundary: r, bEndPoint: i2 };
}
function fh(e3, t2) {
  e3.x = t2.x, e3.y = t2.y, e3.ipath = t2.ipath, e3.ivertex = t2.ivertex, e3.bBoundary = t2.bBoundary, e3.bEndPoint = t2.bEndPoint;
}
var xh = class extends ct2 {
  constructor(e3) {
    super(), this.m_helper = e3;
  }
  compare(e3, t2, s2) {
    const n5 = e3.getElement(s2), r = this.m_helper.m_xy.read(2 * t2) - this.m_helper.m_xy.read(2 * n5);
    return r < 0 ? -1 : r > 0 ? 1 : 0;
  }
};
var yh = class extends ct2 {
  constructor(e3) {
    super(), this.m_helper = e3;
  }
  compare(e3, t2, s2) {
    const n5 = e3.getElement(s2), r = this.m_helper.m_edges[t2], i2 = this.m_helper.m_edges[n5], o2 = r.getReversed(), a2 = i2.getReversed();
    let h2 = r.m_segment.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0), m2 = i2.m_segment.intersectionOfYMonotonicWithAxisX(this.m_helper.m_yScanline, 0);
    if (h2 === m2) {
      const e4 = o2 ? r.m_segment.getStartY() : r.m_segment.getEndY(), t3 = a2 ? i2.m_segment.getStartY() : i2.m_segment.getEndY(), s3 = Math.min(e4, t3);
      let n6 = 0.5 * (s3 - this.m_helper.m_yScanline) + this.m_helper.m_yScanline;
      n6 === this.m_helper.m_yScanline && (n6 = s3), h2 = r.m_segment.intersectionOfYMonotonicWithAxisX(n6, 0), m2 = i2.m_segment.intersectionOfYMonotonicWithAxisX(n6, 0);
    }
    return h2 < m2 ? -1 : h2 > m2 ? 1 : 0;
  }
};
var Ph2 = class _Ph {
  constructor(e3, t2, s2, n5, r) {
    this.m_multiVertexGeom = null, this.m_edges = [], this.m_freeEdges = [], this.m_lineEdgesRecycle = [], this.m_newEdges = [], this.m_recycledSegIter = null, this.m_crossOverHelperList = new gt(), this.m_progressTracker = null, this.m_progressCounter = 0, this.m_AET = new pt(), this.m_xyToNode1 = null, this.m_xyToNode2 = null, this.m_pathOrientations = null, this.m_pathParentage = null, this.m_xy = null, this.m_pairs = [], this.m_pairIndices = null, this.m_pathsForOGCTests = [], this.m_curveStitcher = null, this.m_editShape = null, this.m_multiPathStitcher = null, this.m_nonSimpleResult = new e(), this.m_progressCounter = 0, this.m_progressTracker = n5, this.m_geometry = e3, this.m_knownSimpleResult = s2, this.m_sr = t2;
    const i2 = zt(t2, e3, false);
    this.m_toleranceIsSimple = i2, this.m_toleranceIsSimpleClustering = Pt2(i2), this.m_toleranceIsSimpleCracking = Ht2(i2), this.m_toleranceSimplify = zt(t2, e3, true), this.m_description = this.m_geometry.getDescription(), this.m_attributeCount = this.m_description.getAttributeCount(), this.m_bOGCRestrictions = r, this.m_bPlanarSimplify = this.m_bOGCRestrictions, this.m_unknownOrientationPathCount = -1, this.m_yScanline = 0, this.m_progressCounter = 0;
  }
  isSimplePlanarImpl() {
    if (this.m_bPlanarSimplify = true, !this.checkStructure()) return 0;
    const e3 = this.m_geometry.getGeometryType();
    return h(e3) && !this.checkDegenerateSegments(false) ? 0 : this._CheckClustering() ? h(e3) ? this._CheckCracking() ? this.m_geometry.getGeometryType() === a.enumPolyline ? this.checkSelfIntersectionsPolylinePlanar() ? 4 : 0 : this._CheckSelfIntersections() ? this._CheckValidRingOrientation() : 0 : 0 : 5 : 0;
  }
  isSimplePlanarImpl3D() {
    return n(0), 7;
  }
  generateSortedPairs(e3) {
    let t2 = null;
    h(e3.getGeometryType()) && (t2 = e3);
    const s2 = (this.m_bPlanarSimplify || this.m_bOGCRestrictions) && null !== t2, n5 = e3.getPointCount();
    this.m_xy = e3.getAttributeStreamRef(0), this.m_pairs.length = 0, this.m_pairIndices = new st(0), s2 && (this.m_pathsForOGCTests.length = 0);
    let r = 0;
    for (let a2 = 0; a2 < n5; a2++) if (this.m_pairs.push(2 * a2), this.m_pairs.push(2 * a2 + 1), this.m_pairIndices.add(2 * a2), this.m_pairIndices.add(2 * a2 + 1), s2) {
      for (; a2 >= t2.getPathEnd(r); ) r++;
      this.m_pathsForOGCTests.push(r);
    }
    const i2 = new at(), o2 = { parent: this, workPt: new mi(), userSort(e4, t3, n6) {
      n6.sort(e4, t3, (e5, t4) => this.parent.compareVerticesForPlanarClustering(e5, t4, s2));
    }, getValue(e4) {
      const t3 = this.parent.m_pairs[e4], s3 = t3 >> 1;
      this.parent.m_xy.queryPoint2D(2 * s3, this.workPt);
      return this.workPt.y + (1 & t3 ? this.parent.m_toleranceIsSimpleClustering : -this.parent.m_toleranceIsSimpleClustering);
    } };
    i2.sort(this.m_pairIndices, 0, 2 * n5, o2);
  }
  _TestToleranceDistancePlanar(e3, t2) {
    const s2 = this.m_xy.read(2 * e3), n5 = this.m_xy.read(2 * e3 + 1), r = this.m_xy.read(2 * t2), i2 = this.m_xy.read(2 * t2 + 1);
    if (!!ln(s2, n5, r, i2, this.m_toleranceIsSimpleClustering * this.m_toleranceIsSimpleClustering)) {
      if (0 === this.m_geometry.getDimension()) return false;
      return s2 === r && n5 === i2;
    }
    return true;
  }
  checkStructure() {
    const e3 = this.m_geometry.getGeometryType();
    if (h(e3)) {
      const e4 = this.m_geometry.getImpl(), t2 = this.m_geometry.getGeometryType() === a.enumPolygon ? 3 : 2;
      for (let s2 = 0, n5 = e4.getPathCount(); s2 < n5; s2++) if (e4.getPathSize(s2) < t2) {
        if (e4.hasNonLinearSegments() && e4.hasNonLinearSegmentsPath(s2) && e4.getPathSize(s2) > 0) continue;
        return this.m_nonSimpleResult = new e(1, s2, 0), false;
      }
    }
    if (y(e3)) {
      const e4 = this.m_geometry.getImpl(), t2 = e4.getAttributeStreamRef(0);
      for (let s2 = 0, n5 = e4.getPointCount(); s2 < n5; s2++) {
        if (!t2.readPoint2D(2 * s2).isFinite()) return this.m_nonSimpleResult = new e(2, s2, 0), false;
      }
      if (this.m_geometry.hasAttribute(1)) {
        const t3 = e4.getAttributeStreamRef(1);
        for (let s2 = 0, n5 = e4.getPointCount(); s2 < n5; s2++) {
          const e5 = t3.read(s2);
          if (!Number.isFinite(e5)) return Number.isNaN(e5) ? this.m_nonSimpleResult = new e(3, s2, 0) : this.m_nonSimpleResult = new e(2, s2, 0), false;
        }
      }
    }
    return true;
  }
  checkDegenerateSegments(e3) {
    const t2 = this.m_geometry.getImpl(), s2 = t2.querySegmentIterator(), n5 = t2.hasAttribute(1), r = n5 ? Bt(this.m_sr, t2, false).total() : 0, i2 = t2.hasNonLinearSegments(), o2 = this.m_toleranceIsSimple.total();
    for (; s2.nextPath(); ) for (; s2.hasNextSegment(); ) {
      const t3 = s2.nextSegment();
      let a2 = t3.calculateLowerLength2D();
      if (!(a2 > o2) && !(i2 && t3.isCurve() && (a2 = t3.calculateLength2D(), a2 > o2))) {
        if (e3 && n5) {
          const e4 = t3.getStartAttributeAsDbl(1, 0), s3 = t3.getEndAttributeAsDbl(1, 0);
          if (Math.abs(s3 - e4) > r) continue;
        }
        return this.m_nonSimpleResult = new e(4, s2.getStartPointIndex(), -1), false;
      }
    }
    return true;
  }
  checkDegenerateSegments3D() {
    return n(0), false;
  }
  _CheckClustering() {
    const e3 = this.m_geometry.getImpl();
    this.generateSortedPairs(e3);
    const t2 = e3.getPointCount();
    this.m_AET.clear(), this.m_AET.setComparator(new xh(this)), this.m_AET.setCapacity(t2);
    for (let s2 = 0, n5 = 2 * t2; s2 < n5; s2++) {
      this.progress_();
      const e4 = this.m_pairIndices.read(s2), t3 = this.m_pairs[e4], n6 = t3 >> 1;
      if (1 & t3) {
        const e5 = this.m_AET.search(n6), t4 = this.m_AET.getPrev(e5), s3 = this.m_AET.getNext(e5);
        if (this.m_AET.deleteNode(e5), t4 !== pt.st_nullNode() && s3 !== pt.st_nullNode() && !this._TestToleranceDistancePlanar(this.m_AET.getElement(t4), this.m_AET.getElement(s3))) return this.m_nonSimpleResult = new e(5, this.m_AET.getElement(t4), this.m_AET.getElement(s3)), false;
      } else {
        const e5 = this.m_AET.addElement(n6), t4 = this.m_AET.getPrev(e5);
        if (t4 !== pt.st_nullNode() && !this._TestToleranceDistancePlanar(this.m_AET.getElement(t4), n6)) return this.m_nonSimpleResult = new e(5, n6, this.m_AET.getElement(t4)), false;
        const s3 = this.m_AET.getNext(e5);
        if (s3 !== pt.st_nullNode() && !this._TestToleranceDistancePlanar(this.m_AET.getElement(s3), n6)) return this.m_nonSimpleResult = new e(5, n6, this.m_AET.getElement(s3)), false;
      }
    }
    return true;
  }
  _CheckCracking() {
    const e3 = this.m_geometry.getImpl(), t2 = e3.getPointCount();
    return !e3.hasNonLinearSegments() && t2 < 10 ? this._CheckCrackingBrute() : this._CheckCrackingPlanesweep();
  }
  _CheckCrackingPlanesweep() {
    if (this.m_editShape = new yr(), this.m_editShape.addGeometry(this.m_geometry), this.m_editShape.hasCurves()) {
      this.m_curveStitcher = new fa();
      const e4 = n3.constructEmpty();
      this.m_geometry.queryEnvelope(e4);
      const t2 = _a(this.m_toleranceSimplify.total(), e4), n5 = new e();
      if (la(this.m_editShape, t2, this.m_toleranceSimplify.total(), 12e3, n5, this.m_curveStitcher, null, this.m_progressTracker), 0 !== n5.m_reason) return this.m_editShape = null, this.m_nonSimpleResult.assign(n5), false;
    }
    const e3 = new e();
    return Mn(false, this.m_editShape, this.m_toleranceIsSimpleCracking, e3, this.m_progressTracker) ? (null != this.m_curveStitcher ? (e3.m_vertexIndex1 = this.m_curveStitcher.getOriginalVertexIndex(this.m_editShape, e3.m_vertexIndex1), e3.m_vertexIndex2 = this.m_curveStitcher.getOriginalVertexIndex(this.m_editShape, e3.m_vertexIndex2), this.m_curveStitcher = null) : (e3.m_vertexIndex1 = this.m_editShape.getVertexIndex(e3.m_vertexIndex1), e3.m_vertexIndex2 = this.m_editShape.getVertexIndex(e3.m_vertexIndex2)), this.m_editShape = null, this.m_nonSimpleResult.assign(e3), false) : (null == this.m_curveStitcher && (this.m_editShape = null), true);
  }
  _CheckCrackingBrute() {
    const e3 = this.m_geometry.getImpl(), t2 = e3.querySegmentIterator(), s2 = e3.querySegmentIterator();
    for (; t2.nextPath(); ) for (; t2.hasNextSegment(); ) {
      const e4 = t2.nextSegment();
      if (!t2.isLastSegmentInPath() || !t2.isLastPath()) {
        s2.resetTo(t2);
        do {
          for (; s2.hasNextSegment(); ) {
            const n5 = s2.nextSegment(), r = om(true, e4, n5, this.m_toleranceIsSimpleCracking, true);
            if (r) {
              const e5 = 2 === r ? 7 : 6;
              return this.m_nonSimpleResult = new e(e5, t2.getStartPointIndex(), s2.getStartPointIndex()), false;
            }
          }
        } while (s2.nextPath());
      }
    }
    return true;
  }
  _CheckSelfIntersections() {
    let e3 = this.m_geometry.getImpl();
    null !== this.m_curveStitcher && (this.m_multiPathStitcher = this.m_editShape.getGeometry(this.m_editShape.getFirstGeometry()), e3 = this.m_multiPathStitcher.getImpl(), this.generateSortedPairs(e3)), this.m_edges.length = 0, this.m_lineEdgesRecycle.length = 0, this.m_recycledSegIter = e3.querySegmentIterator(), this.m_recycledSegIter.setCirculator(true);
    const t2 = [], s2 = e3.getPointCount();
    let n5 = Number.NaN, r = 0;
    for (let i2 = 0, o2 = 2 * s2; i2 < o2; i2++) {
      this.progress_();
      const e4 = this.m_pairIndices.read(i2), s3 = this.m_pairs[e4];
      if (1 & s3) continue;
      const o3 = s3 >> 1, a2 = this.m_xy.read(2 * o3), h2 = this.m_xy.read(2 * o3 + 1);
      if (t2.length && (a2 !== n5 || h2 !== r)) {
        if (!this.processBunchForSelfIntersectionTest(t2)) return false;
        t2.length = 0;
      }
      t2.push(o3), n5 = a2, r = h2;
    }
    return !!this.processBunchForSelfIntersectionTest(t2);
  }
  checkSelfIntersectionsPolylinePlanar() {
    const e3 = this.m_geometry.getImpl(), t2 = [];
    for (let o2 = 0, a2 = e3.getPathCount(); o2 < a2; o2++) t2.push(e3.isClosedPathInXYPlane(o2));
    const s2 = dh();
    let n5, r, i2;
    {
      const o2 = this.m_pairIndices.read(0), a2 = this.m_pairs[o2] >> 1, h2 = this.m_xy.readPoint2D(2 * a2), m2 = this.m_pathsForOGCTests[a2];
      n5 = t2[m2], r = e3.getPathStart(m2), i2 = e3.getPathEnd(m2) - 1, s2.bEndPoint = a2 === r || a2 === i2, this.m_bOGCRestrictions ? s2.bBoundary = !n5 && s2.bEndPoint : s2.bBoundary = s2.bEndPoint, s2.ipath = m2, s2.x = h2.x, s2.y = h2.y, s2.ivertex = a2;
    }
    for (let o2 = 1, a2 = this.m_pairIndices.size(); o2 < a2; o2++) {
      const a3 = this.m_pairIndices.read(o2), h2 = this.m_pairs[a3];
      if (1 & h2) continue;
      const m2 = h2 >> 1, l2 = this.m_xy.readPoint2D(2 * m2), g = this.m_pathsForOGCTests[m2];
      let u;
      g !== s2.ipath && (n5 = t2[g], r = e3.getPathStart(g), i2 = e3.getPathEnd(g) - 1);
      const c = m2 === r || m2 === i2;
      u = this.m_bOGCRestrictions ? !n5 && c : c;
      const _ = ph(l2.x, l2.y, g, m2, u, c);
      if (_.x === s2.x && _.y === s2.y) {
        if (this.m_bOGCRestrictions) {
          if (!(_.bBoundary && s2.bBoundary || _.ipath === s2.ipath && _.bEndPoint && s2.bEndPoint)) return this.m_nonSimpleResult = new e(10, _.ivertex, s2.ivertex), false;
        } else if (!_.bEndPoint || !s2.bEndPoint) return this.m_nonSimpleResult = new e(7, _.ivertex, s2.ivertex), false;
      }
      fh(s2, _);
    }
    return true;
  }
  checkSelfIntersectionsPolylinePlanar3D(e3) {
    return n(0), false;
  }
  checkSelfIntersectionsPolygonsOGC() {
    const e3 = this.m_geometry.getImpl(), t2 = [];
    let s2 = -1, n5 = false;
    for (let l2 = 0, g = e3.getPathCount(); l2 < g; l2++) e3.isExteriorRingOGC(l2) && (n5 = false, s2++, l2 < g - 1 && (e3.isExteriorRingOGC(l2 + 1) || (n5 = true))), t2.push(n5 ? s2 : -1);
    const r = gh();
    {
      const e4 = this.m_pairIndices.read(0), s3 = this.m_pairs[e4] >> 1, n6 = this.m_xy.readPoint2D(2 * s3), i3 = this.m_pathsForOGCTests[s3];
      r.ipath = i3, r.x = n6.x, r.y = n6.y, r.ivertex = s3, r.ipolygon = t2[i3];
    }
    const i2 = [];
    for (let l2 = 1, g = this.m_pairIndices.size(); l2 < g; l2++) {
      const e4 = this.m_pairIndices.read(l2), s3 = this.m_pairs[e4];
      if (1 & s3) continue;
      const n6 = s3 >> 1, o3 = this.m_xy.readPoint2D(2 * n6), a3 = this.m_pathsForOGCTests[n6], h3 = uh(o3.x, o3.y, a3, n6, t2[a3]);
      if (h3.x === r.x && h3.y === r.y) {
        if (h3.ipath === r.ipath) return this.m_nonSimpleResult = new e(11, h3.ivertex, r.ivertex), false;
        t2[h3.ipath] >= 0 && t2[h3.ipath] === t2[r.ipath] && (0 !== i2.length && ch(i2.at(-1), r) || i2.push(__spreadValues({}, r)), i2.push(h3));
      }
      _h(r, h3);
    }
    if (0 === i2.length) return true;
    const o2 = new gt(true);
    t2.fill(-1);
    let a2 = -1;
    const h2 = new mi();
    for (let l2 = 0, g = i2.length; l2 < g; l2++) {
      const e4 = i2[l2];
      e4.x === h2.x && e4.y === h2.y || (a2 = o2.createList(0), h2.x = e4.x, h2.y = e4.y);
      let s3 = t2[e4.ipath];
      -1 === s3 && (s3 = o2.createList(2), t2[e4.ipath] = s3), o2.addElement(s3, a2), o2.addElement(a2, s3);
    }
    const m2 = [];
    for (let l2 = o2.getFirstList(); -1 !== l2; l2 = o2.getNextList(l2)) {
      const e4 = o2.getListData(l2);
      if (1 & e4 || !(2 & e4)) continue;
      let s3 = -1;
      for (m2.push(l2), m2.push(-1); m2.length; ) {
        const e5 = m2.at(-1);
        m2.pop();
        const t3 = m2.at(-1);
        m2.pop();
        const n6 = o2.getListData(t3);
        if (1 & n6) {
          s3 = 2 & n6 ? t3 : e5;
          break;
        }
        o2.setListData(t3, 1 | n6);
        for (let s4 = o2.getFirst(t3); -1 !== s4; s4 = o2.getNext(s4)) {
          const n7 = o2.getData(s4);
          n7 !== e5 && (m2.push(n7), m2.push(t3));
        }
      }
      if (-1 !== s3) {
        const e5 = t2.indexOf(s3);
        return this.m_nonSimpleResult = new e(12, e5, -1), false;
      }
    }
    return true;
  }
  _CheckValidRingOrientation() {
    const e3 = null !== this.m_multiPathStitcher ? this.m_multiPathStitcher.getImpl() : this.m_geometry.getImpl();
    if (e3.calculateArea2D() <= 0) return this.m_nonSimpleResult = new e(8, 1 === e3.getPathCount() ? 1 : -1, -1), 0;
    if (1 === e3.getPathCount()) return this.m_bOGCRestrictions && !this.checkSelfIntersectionsPolygonsOGC() ? 0 : 4;
    this.m_pathOrientations = new et(e3.getPathCount(), 0), this.m_pathParentage = new st(e3.getPathCount(), -1);
    let t2 = -1, s2 = 0;
    for (let i2 = 0, o2 = e3.getPathCount(); i2 < o2; i2++) {
      const n6 = e3.calculateRingArea2D(i2);
      if (this.m_pathOrientations.write(i2, n6 < 0 ? 0 : 8), n6 > 0) t2 = i2, s2 = n6;
      else {
        if (0 === n6) return this.m_nonSimpleResult = new e(8, i2, -1), 0;
        if ((t2 < 0 || s2 < Math.abs(n6)) && (this.m_nonSimpleResult = new e(9, i2, -1), this.m_bOGCRestrictions)) return 0;
        this.m_pathParentage.write(i2, t2);
      }
    }
    this.m_unknownOrientationPathCount = e3.getPathCount(), this.m_newEdges.length = 0;
    const n5 = e3.getPointCount();
    this.m_yScanline = Number.NaN;
    const r = [];
    this.m_xyToNode1 = new st(n5, pt.st_nullNode()), this.m_xyToNode2 = new st(n5, pt.st_nullNode()), this.m_freeEdges.length = 0, this.m_AET.clear(), this.m_AET.setComparator(new yh(this));
    for (let i2 = 0, o2 = 2 * n5; this.m_unknownOrientationPathCount > 0 && i2 < o2; i2++) {
      const e4 = this.m_pairIndices.read(i2), t3 = this.m_pairs[e4];
      if (1 & t3) continue;
      const s3 = t3 >> 1, n6 = this.m_xy.read(2 * s3 + 1);
      if (n6 !== this.m_yScanline && r.length) {
        if (!this.processBunchForRingOrientationTest(r)) return 0;
        r.length = 0;
      }
      r.push(s3), this.m_yScanline = n6;
    }
    return this.m_unknownOrientationPathCount > 0 && !this.processBunchForRingOrientationTest(r) ? 0 : this.m_bOGCRestrictions ? 0 !== this.m_nonSimpleResult.m_reason ? 0 : this.checkSelfIntersectionsPolygonsOGC() ? 5 : 0 : 0 === this.m_nonSimpleResult.m_reason ? 4 : 3;
  }
  processBunchForSelfIntersectionTest(e3) {
    if (1 === e3.length) return true;
    for (let o2 = 0, a2 = e3.length; o2 < a2; o2++) {
      const t3 = e3[o2];
      this.m_recycledSegIter.resetToVertex(t3, -1);
      const s3 = this.m_recycledSegIter.previousSegment();
      this.m_edges.push(this.createEdge(s3, t3, this.m_recycledSegIter.getPathIndex(), true)), this.m_recycledSegIter.nextSegment();
      const n6 = this.m_recycledSegIter.nextSegment();
      this.m_edges.push(this.createEdge(n6, t3, this.m_recycledSegIter.getPathIndex(), false));
    }
    this.m_edges.sort((e4, t3) => this.edgeAngleCompare(e4, t3));
    let t2 = this.m_crossOverHelperList.getFirstList();
    -1 === t2 && (t2 = this.m_crossOverHelperList.createList(0)), this.m_crossOverHelperList.reserveNodes(this.m_edges.length);
    for (let o2 = 0, a2 = this.m_edges.length; o2 < a2; o2++) this.m_crossOverHelperList.addElement(t2, o2);
    let s2 = true, n5 = -1, r = -1;
    for (; s2; ) {
      s2 = false;
      let e4 = this.m_crossOverHelperList.getFirst(t2);
      if (-1 === e4) break;
      let i3 = this.m_crossOverHelperList.getNext(e4);
      for (; -1 !== i3; ) {
        const o2 = this.m_crossOverHelperList.getData(e4), a2 = this.m_crossOverHelperList.getData(i3);
        if (n5 = this.m_edges[o2].m_vertexIndex, r = this.m_edges[a2].m_vertexIndex, n5 !== r) e4 = i3, i3 = this.m_crossOverHelperList.getNext(e4);
        else if (s2 = true, this.m_crossOverHelperList.deleteElement(t2, e4), e4 = this.m_crossOverHelperList.getPrev(i3), i3 = this.m_crossOverHelperList.deleteElement(t2, i3), -1 === i3 || -1 === e4) break;
      }
    }
    const i2 = this.m_crossOverHelperList.getListSize(t2);
    if (this.m_crossOverHelperList.clear(t2), i2 > 0) return this.m_nonSimpleResult = new e(7, n5, r), false;
    for (let o2 = 0, a2 = e3.length; o2 < a2; o2++) this.recycleEdge(this.m_edges[o2]);
    return this.m_edges.length = 0, true;
  }
  processBunchForRingOrientationTest(e3) {
    for (let t2 = 0, s2 = e3.length; t2 < s2; t2++) {
      const s3 = e3[t2];
      let n5 = this.m_xyToNode1.read(s3);
      if (n5 !== pt.st_nullNode()) {
        const e4 = this.m_AET.getElement(n5);
        this.m_freeEdges.push(e4), this.m_AET.deleteNode(n5), this.recycleEdge(this.m_edges[e4]), this.m_edges[e4] = null, this.m_xyToNode1.write(s3, pt.st_nullNode());
      }
      if (n5 = this.m_xyToNode2.read(s3), n5 !== pt.st_nullNode()) {
        const e4 = this.m_AET.getElement(n5);
        this.m_freeEdges.push(e4), this.m_AET.deleteNode(n5), this.recycleEdge(this.m_edges[e4]), this.m_edges[e4] = null, this.m_xyToNode2.write(s3, pt.st_nullNode());
      }
    }
    for (let t2 = 0, s2 = e3.length; t2 < s2; t2++) {
      const s3 = e3[t2];
      this.m_recycledSegIter.resetToVertex(s3, -1);
      const n5 = this.m_recycledSegIter.previousSegment();
      if (n5.getStartY() > n5.getEndY()) {
        const e4 = this.m_recycledSegIter.getStartPointIndex(), t3 = this.createEdge(n5, s3, this.m_recycledSegIter.getPathIndex(), true);
        let r2;
        this.m_freeEdges.length > 0 ? (r2 = this.m_freeEdges.at(-1), this.m_freeEdges.pop(), this.m_edges[r2] = t3) : (r2 = this.m_edges.length, this.m_edges.push(t3));
        const i2 = this.m_AET.addElement(r2);
        this.m_xyToNode1.read(e4) === pt.st_nullNode() ? this.m_xyToNode1.write(e4, i2) : this.m_xyToNode2.write(e4, i2), 3 & this.m_pathOrientations.read(this.m_recycledSegIter.getPathIndex()) || this.m_newEdges.push(i2);
      }
      this.m_recycledSegIter.nextSegment();
      const r = this.m_recycledSegIter.nextSegment();
      if (r.getStartY() < r.getEndY()) {
        const e4 = this.m_recycledSegIter.getEndPointIndex(), t3 = this.createEdge(r, s3, this.m_recycledSegIter.getPathIndex(), false);
        let n6;
        this.m_freeEdges.length > 0 ? (n6 = this.m_freeEdges.at(-1), this.m_freeEdges.pop(), this.m_edges[n6] = t3) : (n6 = this.m_edges.length, this.m_edges.push(t3));
        const i2 = this.m_AET.addElement(n6);
        this.m_xyToNode1.read(e4) === pt.st_nullNode() ? this.m_xyToNode1.write(e4, i2) : this.m_xyToNode2.write(e4, i2), 3 & this.m_pathOrientations.read(this.m_recycledSegIter.getPathIndex()) || this.m_newEdges.push(i2);
      }
    }
    for (let t2 = 0, s2 = this.m_newEdges.length; t2 < s2 && this.m_unknownOrientationPathCount > 0; t2++) {
      const e4 = this.m_newEdges[t2], s3 = this.m_AET.getElement(e4), n5 = this.m_edges[s3].m_pathIndex;
      if (!(3 & this.m_pathOrientations.read(n5))) {
        let t3 = -1, s4 = this.m_AET.getPrev(e4), n6 = e4, r = 0;
        {
          let e5 = -1, i2 = null, o2 = -1, a2 = 0;
          for (; s4 !== pt.st_nullNode() && (e5 = this.m_AET.getElement(s4), i2 = this.m_edges[e5], o2 = i2.m_pathIndex, a2 = this.m_pathOrientations.read(o2), !(3 & a2)); ) n6 = s4, s4 = this.m_AET.getPrev(s4);
          s4 === pt.st_nullNode() ? (r = 1, s4 = n6) : (t3 = 1 == (3 & a2) ? o2 : this.m_pathParentage.read(o2), r = i2.getRightSide() ? 0 : 1, s4 = this.m_AET.getNext(s4));
        }
        do {
          const e5 = this.m_AET.getElement(s4), i2 = this.m_edges[e5], o2 = i2.m_pathIndex;
          let a2 = this.m_pathOrientations.read(o2);
          if (!(3 & a2)) {
            if (r !== i2.getRightSide()) return this.m_nonSimpleResult = new e(8, o2, -1), false;
            const e6 = r && !i2.getReversed() ? 1 : 2;
            if (a2 = -4 & a2 | e6, this.m_pathOrientations.write(o2, a2), 2 === e6 && 0 === this.m_nonSimpleResult.m_reason) {
              const e7 = this.m_pathParentage.read(o2);
              if (e7 !== t3 && (this.m_nonSimpleResult = new e(9, o2, e7), this.m_bOGCRestrictions)) return false;
            }
            if (this.m_unknownOrientationPathCount--, !this.m_unknownOrientationPathCount) return true;
          }
          t3 = 1 == (3 & a2) ? o2 : this.m_pathParentage.read(o2), n6 = s4, s4 = this.m_AET.getNext(s4), r = r ? 0 : 1;
        } while (n6 !== e4);
      }
    }
    return this.m_newEdges.length = 0, true;
  }
  createEdge(e3, t2, s2, n5) {
    let r;
    return e3.getGeometryType() === a.enumLine ? r = this.createEdgeLine(e3) : (r = new lh(), r.m_segment = e3.clone()), r.m_vertexIndex = t2, r.m_pathIndex = s2, r.m_flags = 0, r.setReversed(n5), r;
  }
  createEdgeLine(e3) {
    let t2;
    return this.m_lineEdgesRecycle.length > 0 ? (t2 = this.m_lineEdgesRecycle.at(-1), this.m_lineEdgesRecycle.pop(), e3.copyTo(t2.m_segment)) : (t2 = new lh(), t2.m_segment = e3.clone()), t2;
  }
  recycleEdge(e3) {
    e3.m_segment.getGeometryType() === a.enumLine && this.m_lineEdgesRecycle.push(e3);
  }
  static isShortSegment(e3, t2, s2, n5) {
    let r = e3.calculateLowerLength2D();
    if (r <= s2) {
      let i2 = true;
      if (e3.isCurve() && (r = e3.calculateLength2D(), i2 = r <= s2), i2) {
        if (t2) {
          let t3 = e3.getEndAttributeAsDbl(1, 0);
          Number.isNaN(t3) && (t3 = 0);
          let s3 = e3.getStartAttributeAsDbl(1, 0);
          return Number.isNaN(s3) && (s3 = 0), Math.abs(s3 - t3) <= n5;
        }
        return true;
      }
      return false;
    }
    return false;
  }
  static isShortSegmentPoints(e3, t2, s2, n5, r) {
    if (s2) {
      const s3 = e3.getXYZ(), i2 = t2.getXYZ();
      return Ot2(s3, i2, n5, r);
    }
    {
      const s3 = e3.getXY(), r2 = t2.getXY();
      return mi.sqrDistance(s3, r2) <= n5 * n5;
    }
  }
  removeDegenerateSegmentsFromCurvedPath(e3, t2, s2, n5) {
    const r = e3.hasAttribute(1), i2 = e3.querySegmentIterator();
    i2.resetToPath(t2), n(i2.nextPath());
    const o2 = this.m_toleranceSimplify.total();
    let a2 = false, h2 = true;
    const m2 = new se(), g = new se(), u = new mi();
    for (; i2.hasNextSegment(); ) {
      this.progress_();
      const e4 = i2.nextSegment();
      if (_Ph.isShortSegment(e4, r, o2, s2)) if (a2) {
        if (e4.queryEnd(g), _Ph.isShortSegmentPoints(m2, g, r, o2, s2)) continue;
        h2 && (n5.startPathPoint(m2), h2 = false), e4.queryEnd(m2), n5.lineToPoint(m2), a2 = false;
      } else u.assign(e4.getStartXY()), e4.queryStart(m2), a2 = true;
      else if (a2) if (e4.isCurve()) {
        const t3 = e4.clone();
        if (t3.setCoordsForIntersector(u, e4.getEndXY(), false), t3.setStart(m2), _Ph.isShortSegment(t3, r, o2, s2)) continue;
        n5.addSegment(t3, h2), h2 = false, a2 = false;
      } else {
        if (e4.queryEnd(g), _Ph.isShortSegmentPoints(m2, g, r, o2, s2)) continue;
        h2 && (n5.startPathPoint(m2), h2 = false), n5.lineToPoint(g), a2 = false;
      }
      else n5.addSegment(e4, h2), h2 = false;
    }
    if (h2) return;
    if (!a2) return;
    e3.isClosedPath(t2) ? e3.getPointByVal(e3.getPathStart(t2), m2) : e3.getPointByVal(e3.getPathEnd(t2) - 1, m2);
    const c = n5.querySegmentIterator();
    c.resetToLastPath(), c.resetToLastSegment();
    const _ = n5.getDescription().getAttributeCount() > 1;
    for (n(c.previousPath()); c.hasPreviousSegment(); ) {
      const e4 = c.previousSegment();
      if (e4.isCurve()) {
        const t3 = e4.clone();
        if (t3.setCoordsForIntersector(e4.getStartXY(), m2.getXY(), false), !_Ph.isShortSegment(t3, r, o2, s2)) {
          _ && t3.setEnd(m2);
          const e5 = c.getEndPointIndex();
          for (let t4 = n5.getPointCount() - 1; t4 >= e5; t4--) n5.removePoint(t4);
          return void n5.addSegment(t3, false);
        }
      } else if (e4.queryStart(g), !_Ph.isShortSegmentPoints(g, m2, r, o2, s2)) {
        const e5 = c.getEndPointIndex();
        for (let t3 = n5.getPointCount() - 1; t3 >= e5; t3--) n5.removePoint(t3);
        return void n5.lineToPoint(m2);
      }
    }
    n5.removePath(n5.getPathCount() - 1);
  }
  multipointIsSimpleAsFeature() {
    if (!this.checkStructure()) return 0;
    const e3 = this.m_geometry.getImpl();
    this.m_multiVertexGeom = e3;
    const t2 = e3.getPointCount(), s2 = Yt(t2, 0);
    for (let n5 = 0; n5 < t2; n5++) s2[n5] = n5;
    s2.sort((e4, t3) => this.compareVerticesMultiPoint(e4, t3));
    for (let n5 = 1; n5 < t2; n5++) if (0 === this.compareVerticesMultiPoint(s2[n5 - 1], s2[n5])) return this.m_nonSimpleResult = new e(5, s2[n5 - 1], s2[n5]), 0;
    return 1;
  }
  polylineIsSimpleAsFeature() {
    return this.checkStructure() && this.checkDegenerateSegments(true) ? 1 : 0;
  }
  polygonIsSimpleAsFeature() {
    return this.isSimplePlanarImpl();
  }
  multipointSimplifyAsFeature() {
    let e3 = this.m_geometry.getImpl();
    const t2 = _Ph.hasNanZs(e3);
    let s2, n5 = this.m_geometry;
    t2 && (s2 = this.m_geometry.clone(), e3 = s2.getImpl(), s2.replaceNaNs(1, z3.getDefaultValue(1)), n5 = s2), this.m_multiVertexGeom = e3;
    const r = e3.getPointCount(), i2 = Yt(r, 0);
    for (let g = 0; g < r; g++) i2[g] = g;
    i2.sort((e4, t3) => this.compareVerticesMultiPoint(e4, t3));
    const o2 = new Array(r);
    o2.fill(false);
    let a2 = -1;
    for (let g = 0; g < r; g++) {
      const t3 = i2[g];
      e3.getXY(t3).isFinite() && ((a2 < 0 || 0 !== this.compareVerticesMultiPoint(a2, t3)) && (o2[t3] = true), a2 = t3);
    }
    const h2 = this.m_geometry.createInstance();
    let m2 = 0, l2 = 0;
    for (let g = 0; g < r; g++) o2[g] ? l2 = g + 1 : (m2 < l2 && h2.addPoints(n5, m2, l2), m2 = g + 1);
    return m2 < l2 && h2.addPoints(n5, m2, l2), h2.getImpl().setIsSimple(1, this.m_toleranceSimplify.total()), h2;
  }
  polylineSimplifyAsFeature() {
    const e3 = this.m_geometry.getImpl(), t2 = e3.querySegmentIterator(), s2 = e3.querySegmentIterator(), n5 = this.m_geometry.createInstance(), r = this.m_geometry, i2 = e3.hasAttribute(1), o2 = i2 ? Bt(this.m_sr, e3, true).total() : 0, a2 = [], h2 = [];
    let m2 = null;
    i2 && (m2 = e3.getAttributeStreamRef(1));
    const l2 = new se(), g = e3.hasNonLinearSegments(), u = this.m_toleranceSimplify.total();
    for (; t2.nextPath(); ) {
      if (s2.nextPath(), e3.getPathSize(t2.getPathIndex()) < 2) continue;
      if (g && e3.hasNonLinearSegmentsPath(t2.getPathIndex())) {
        this.removeDegenerateSegmentsFromCurvedPath(e3, t2.getPathIndex(), o2, n5);
        continue;
      }
      s2.resetToLastSegment();
      let c = 0, _ = 0, d2 = true, p3 = true;
      for (; t2.hasNextSegment(); ) {
        this.progress_();
        const n6 = t2.nextSegment(), r2 = s2.previousSegment();
        if (t2.getStartPointIndex() > s2.getStartPointIndex()) break;
        if (d2) {
          const s3 = t2.getStartPointIndex();
          e3.getXY(s3).isNAN() || (d2 = false, a2.push(s3));
        }
        if (p3) {
          const t3 = s2.getEndPointIndex();
          e3.getXY(t3).isNAN() || (h2.push(t3), p3 = false);
        }
        if (!d2) {
          const s3 = a2.at(-1), r3 = t2.getEndPointIndex();
          if (r3 - s3 > 1) {
            const t3 = new mi();
            t3.setSub(e3.getXY(s3), e3.getXY(r3)), c = t3.length();
          } else c = n6.calculateLength2D();
          if (c > u) a2.push(r3), c = 0;
          else if (i2) {
            let e4 = m2.read(s3);
            Number.isNaN(e4) && (e4 = 0);
            let t3 = m2.read(r3);
            Number.isNaN(t3) && (t3 = 0), Math.abs(t3 - e4) > o2 && (a2.push(r3), c = 0);
          }
        }
        if (!p3) {
          const t3 = h2.at(-1), n7 = s2.getStartPointIndex();
          if (n7 - t3 > 1) {
            const s3 = new mi();
            s3.setSub(e3.getXY(t3), e3.getXY(n7)), _ = s3.length();
          } else _ = r2.calculateLength2D();
          if (_ > u) h2.push(n7), _ = 0;
          else if (i2) {
            let e4 = m2.read(t3);
            Number.isNaN(e4) && (e4 = 0);
            let s3 = m2.read(n7);
            Number.isNaN(s3) && (s3 = 0), Math.abs(s3 - e4) > o2 && (h2.push(n7), _ = 0);
          }
        }
      }
      if (a2.length > 0 && h2.length > 0 && (a2.at(-1) < h2.at(-1) ? a2.length > h2.length ? a2.pop() : h2.pop() : (a2.at(-1) === h2.at(-1) || h2.pop(), h2.pop())), h2.length + a2.length >= 2) {
        let e4 = false;
        for (let t3 = 0, s3 = a2.length; t3 < s3; t3++) r.getPointByVal(a2[t3], l2), e4 ? n5.lineToPoint(l2) : (n5.startPathPoint(l2), e4 = true);
        for (let t3 = h2.length - 1; t3 > 0; t3--) r.getPointByVal(h2[t3], l2), e4 ? n5.lineToPoint(l2) : (n5.startPathPoint(l2), e4 = true);
        r.isClosedPath(t2.getPathIndex()) ? n5.closePathWithLine() : h2.length > 0 && (r.getPointByVal(h2[0], l2), n5.lineToPoint(l2));
      }
      a2.length = 0, h2.length = 0;
    }
    return i2 && n5.replaceNaNs(1, 0), n5.getImpl().setIsSimple(1, u), n5;
  }
  polygonSimplifyAsFeature() {
    return this.simplifyPlanar();
  }
  simplifyPlanar() {
    if (1 === this.m_geometry.getFillRule() && !Vt2(this.m_knownSimpleResult)) return Ma(this.m_geometry, this.m_toleranceSimplify, true, false, this.m_knownSimpleResult, this.m_progressTracker, 0, true);
    const e3 = new yr();
    if (e3.addGeometry(this.m_geometry), this.m_geometry.hasAttribute(1) && e3.replaceNaNs(1, 0), e3.removeNaNVertices(), 0 !== e3.getTotalPointCount()) {
      let t3 = null, n5 = 0, r = 0;
      if (e3.hasCurves()) {
        t3 = new fa();
        const i2 = n3.constructEmpty();
        this.m_geometry.queryEnvelope(i2);
        const o2 = _a(this.m_toleranceSimplify.total(), i2);
        n5 = da(this.m_toleranceSimplify.total()), r = pa(o2, n5), aa(e3, o2, this.m_toleranceSimplify.total(), 12e3, t3, null, this.m_progressTracker);
      }
      if (!Vt2(this.m_knownSimpleResult)) {
        ya(e3, this.m_toleranceSimplify.add(r), this.m_progressTracker, true, false);
      }
      this.m_geometry.getGeometryType() === a.enumPolygon && er(e3, e3.getFirstGeometry(), this.m_knownSimpleResult, false, -1, this.m_progressTracker), null !== t3 && t3.stitchCurves(e3, e3.getFirstGeometry(), n5, true);
    }
    const t2 = e3.getGeometry(e3.getFirstGeometry());
    return t2.getGeometryType() === a.enumPolygon && (t2.getImpl().updateOGCFlagsProtected(), t2.setFillRule(0)), t2.getImpl().setIsSimple(4, this.m_toleranceSimplify.total()), t2;
  }
  progress_() {
  }
  static hasNanZs(e3) {
    if (e3.hasAttribute(1)) {
      const t2 = e3.getAttributeStreamRef(1);
      for (let s2 = 0, n5 = e3.getPointCount(); s2 < n5; s2++) {
        const e4 = t2.read(s2);
        if (Number.isNaN(e4)) return true;
      }
    }
    return false;
  }
  compareVerticesForPlanarClustering(e3, t2, s2) {
    if (e3 === t2) return 0;
    const n5 = this.m_pairs[e3], r = this.m_pairs[t2], i2 = n5 >> 1, o2 = r >> 1, a2 = this.m_xy.readPoint2D(2 * i2);
    a2.y += 1 & n5 ? this.m_toleranceIsSimpleClustering : -this.m_toleranceIsSimpleClustering;
    const h2 = this.m_xy.readPoint2D(2 * o2);
    h2.y += 1 & r ? this.m_toleranceIsSimpleClustering : -this.m_toleranceIsSimpleClustering;
    const m2 = a2.compare(h2);
    if (0 === m2 && s2) {
      const e4 = this.m_pathsForOGCTests[i2] - this.m_pathsForOGCTests[o2];
      return K(e4);
    }
    return m2;
  }
  compareVerticesMultiPoint(e3, t2) {
    if (e3 === t2) return 0;
    const s2 = this.m_multiVertexGeom.getXY(e3), n5 = this.m_multiVertexGeom.getXY(t2), r = !s2.isFinite(), i2 = !n5.isFinite();
    if (r || i2) return r < i2 ? -1 : r > i2 ? 1 : 0;
    if (s2.y < n5.y) return -1;
    if (s2.y > n5.y) return 1;
    if (s2.x < n5.x) return -1;
    if (s2.x > n5.x) return 1;
    for (let o2 = 1; o2 < this.m_attributeCount; o2++) {
      const s3 = this.m_description.getSemantics(o2), n6 = z3.getComponentCount(s3);
      for (let r2 = 0; r2 < n6; r2++) {
        const n7 = this.m_multiVertexGeom.getAttributeAsDbl(s3, e3, r2), i3 = this.m_multiVertexGeom.getAttributeAsDbl(s3, t2, r2), o3 = _s(n7, i3);
        if (0 !== o3) return o3;
      }
    }
    return 0;
  }
  edgeAngleCompare(e3, t2) {
    if (e3 === t2) return 0;
    const s2 = e3.m_segment.getTangent(e3.getReversed() ? 1 : 0);
    e3.getReversed() && s2.negateThis();
    const n5 = t2.m_segment.getTangent(t2.getReversed() ? 1 : 0);
    t2.getReversed() && n5.negateThis();
    const r = s2.getQuarter(), i2 = n5.getQuarter();
    if (i2 === r) {
      const e4 = s2.crossProduct(n5);
      return e4 < 0 ? 1 : e4 > 0 ? -1 : 0;
    }
    return r < i2 ? -1 : 1;
  }
};
var Eh = class {
  getOperatorType() {
    return 10103;
  }
  accelerateGeometry(e3, t2, s2) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  isSimpleAsFeature(e3, t2, s2, n5, r) {
    const i2 = oh(e3, t2, s2, n5, r);
    return Xt(e3.getGeometryType(), i2);
  }
  isSimplePlanarDONOTUSE(e3, t2, s2, n5, r) {
    const i2 = rh(e3, t2, s2, n5, r);
    return Yt2(i2);
  }
  executeMany(e3, t2, s2, n5) {
    return new Sh(e3, t2, s2, n5);
  }
  execute(e3, t2, s2, n5) {
    const r = new t([e3]), i2 = this.executeMany(r, t2, s2, n5).next();
    return i2 || b("null geometry"), i2;
  }
};
var Sh = class extends s {
  constructor(e3, t2, s2, n5) {
    super(), this.m_progressTracker = n5, this.m_bForceSimplify = s2, this.m_index = -1, this.m_inputGeometryCursor = e3, this.m_spatialReference = t2;
  }
  next() {
    const e3 = this.m_inputGeometryCursor.next();
    return e3 ? (this.m_index = this.m_inputGeometryCursor.getGeometryID(), this.simplify(e3)) : null;
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
  simplify(e3) {
    if (e3 || P(""), e3.getGeometryType() === a.enumGeometryCollection) {
      const t2 = gs(e3, -1), s2 = new Eh().executeMany(t2, this.m_spatialReference, this.m_bForceSimplify, this.m_progressTracker), n5 = e3.createInstance();
      for (let e4 = s2.next(); null != e4; e4 = s2.next()) n5.addGeometry(e4);
      return n5;
    }
    return ah(e3, this.m_spatialReference, this.m_bForceSimplify, this.m_progressTracker);
  }
};
function Ch(e3, t2, n5) {
  const r = new n3();
  e3.queryEnvelope(r);
  const o2 = new n3();
  t2.queryEnvelope(o2);
  const a2 = new n3(o2);
  if (a2.inflate(2 * n5), !a2.isIntersecting(r)) return 4;
  const h2 = e3.getGeometryType(), m2 = t2.getGeometryType();
  if (h2 === a.enumEnvelope && r.containsEnvelope(a2)) return 1;
  if (m2 === a.enumEnvelope) {
    const e4 = new n3(r);
    if (e4.inflate(2 * n5), o2.containsEnvelope(e4)) return 2;
  }
  return 0;
}
var Ih2 = class _Ih {
  constructor(e3, t2, s2, n5) {
    this.m_intersectorGeom = null, this.m_sr = null, this.m_dimensionMask = -1, this.m_progressTracker = null, this.m_intersectorGeomType = a.enumUnknown, this.m_geomIntersectorEmptyGeom = null, this.m_intersectorGeom = e3, this.m_sr = t2, this.m_dimensionMask = s2, this.m_progressTracker = n5, this.m_intersectorGeomType = e3.getGeometryType();
  }
  intersect(e3) {
    const t2 = this.tryFastImplementation(e3);
    if (null !== t2) return t2;
    const n5 = Ct2(this.m_intersectorGeom, e3), r = qt2(this.m_sr, n5, true).total(), i2 = n3.constructEmpty();
    this.m_intersectorGeom.queryEnvelope(i2);
    const o2 = n3.constructEmpty();
    e3.queryEnvelope(o2), i2.inflateCoords(2 * r, 2 * r), i2.intersect(o2), i2.inflateCoords(100 * r, 100 * r);
    const a2 = 0;
    let h2 = f2(this.m_intersectorGeom, i2, a2, 0, this.m_progressTracker), m2 = f2(e3, i2, a2, 0, this.m_progressTracker);
    return e3.getDimension() > this.m_intersectorGeom.getDimension() && (h2 = Pt(m2, m2 = h2)), za(m2, h2, this.m_sr, this.m_progressTracker);
  }
  intersectEx(e3) {
    const t2 = this.tryFastImplementation(e3);
    if (null !== t2) {
      const s2 = [];
      return s2.length = 3, s2[t2.getDimension()] = t2, this.prepareVector(e3.getDescription(), this.m_dimensionMask, s2);
    }
    const n5 = Ct2(this.m_intersectorGeom, e3), r = qt2(this.m_sr, n5, true).total(), i2 = n3.constructEmpty();
    this.m_intersectorGeom.queryEnvelope(i2);
    const o2 = n3.constructEmpty();
    e3.queryEnvelope(o2), i2.inflateCoords(2 * r, 2 * r), i2.intersect(o2), i2.inflateCoords(100 * r, 100 * r);
    const a2 = 0;
    let h2 = f2(this.m_intersectorGeom, i2, a2, 0, this.m_progressTracker), m2 = f2(e3, i2, a2, 0, this.m_progressTracker);
    e3.getDimension() > this.m_intersectorGeom.getDimension() && (h2 = Pt(m2, m2 = h2));
    const l2 = Wa(m2, h2, this.m_sr, this.m_progressTracker);
    return this.prepareVector(e3.getDescription(), this.m_dimensionMask, l2);
  }
  init(e3, t2, s2, n5 = null) {
    n(0);
  }
  static intersectPoints(e3, t2, s2) {
    const n5 = Ct2(e3, t2);
    return La(e3, t2, qt2(s2, n5, true));
  }
  tryFastImplementation(e3) {
    const t2 = e3.getGeometryType();
    if (this.m_intersectorGeomType === a.enumPoint && t2 === a.enumPoint) {
      const t3 = _Ih.intersectPoints(e3, this.m_intersectorGeom, this.m_sr);
      if (-1 !== this.m_dimensionMask) {
        const e4 = new De({ vd: t3.getDescription() });
        return t3.isEmpty() || e4.add(t3), e4;
      }
      return t3;
    }
    if (t2 === a.enumEnvelope && this.m_intersectorGeomType === a.enumEnvelope && (-1 === this.m_dimensionMask || 4 === this.m_dimensionMask)) {
      const t3 = e3, s2 = this.m_intersectorGeom, n6 = new he({ copy: t3 });
      return n6.intersect(s2), n6;
    }
    const n5 = Ct2(e3, this.m_intersectorGeom), r = qt2(this.m_sr, n5, true), o2 = e3.isEmpty(), h2 = this.m_intersectorGeom.isEmpty();
    let m2 = o2 || h2;
    if (!m2) {
      const t3 = Ch(this.m_intersectorGeom, e3, r.total());
      if (4 === t3) m2 = true;
      else {
        if (2 & t3) return this.m_intersectorGeom;
        if (1 & t3) return e3;
      }
    }
    if (m2) {
      const s2 = m(t2), n6 = m(this.m_intersectorGeomType);
      return s2 < n6 ? _Ih.ReturnEmpty(e3, o2) : s2 > n6 || 0 === s2 && t2 === a.enumMultiPoint && this.m_intersectorGeomType === a.enumPoint ? this.ReturnEmptyIntersector() : _Ih.ReturnEmpty(e3, o2);
    }
    if (t2 === a.enumEnvelope && 0 === m(this.m_intersectorGeomType) || this.m_intersectorGeomType === a.enumEnvelope && 0 === m(t2)) {
      const n6 = t2 === a.enumEnvelope ? e3 : this.m_intersectorGeom, o3 = t2 === a.enumEnvelope ? this.m_intersectorGeom : e3, a2 = n3.constructEmpty();
      return n6.queryEnvelope(a2), f2(o3, a2, r.total(), 0, this.m_progressTracker);
    }
    if (0 === m(t2) && m(this.m_intersectorGeomType) > 0 || m(t2) > 0 && 0 === m(this.m_intersectorGeomType)) {
      if (t2 === a.enumMultiPoint) return Oa(e3, this.m_intersectorGeom, r);
      if (t2 === a.enumPoint) return Xa(e3, this.m_intersectorGeom, r);
      if (this.m_intersectorGeomType === a.enumMultiPoint) return Oa(this.m_intersectorGeom, e3, r);
      if (this.m_intersectorGeomType === a.enumPoint) return Xa(this.m_intersectorGeom, e3, r);
      b("");
    }
    return null;
  }
  ReturnEmptyIntersector() {
    return null === this.m_geomIntersectorEmptyGeom && (this.m_geomIntersectorEmptyGeom = this.m_intersectorGeom.createInstance()), this.m_geomIntersectorEmptyGeom;
  }
  static ReturnEmpty(e3, t2) {
    return t2 ? e3 : e3.createInstance();
  }
  prepareVector(e3, t2, s2) {
    let n5 = 0;
    return 1 & t2 ? (s2[0] || (s2[0] = new De({ vd: e3 })), n5++) : s2.shift(), 2 & t2 ? (s2[n5] || (s2[n5] = new Qs2({ vd: e3 })), n5++) : s2.splice(n5, 1), 4 & t2 ? s2[n5] || (s2[n5] = new mr({ vd: e3 })) : s2.splice(n5, 1), new t(s2);
  }
};
var bh = class extends s {
  constructor(e3, t2, s2, r, i2) {
    super(), this.m_smallCursor = null, this.m_progressTracker = r, this.m_geomIntersector = t2.next(), this.m_intersector = new Ih2(this.m_geomIntersector, s2, i2, r), this.m_index = -1, this.m_inputGeoms = e3, this.m_dimensionMask = i2, -1 !== this.m_dimensionMask && (this.m_dimensionMask <= 0 || this.m_dimensionMask > 7) && P("bad dimension mask");
  }
  next() {
    if (!this.m_geomIntersector) return null;
    let e3;
    if (null !== this.m_smallCursor) {
      if (e3 = this.m_smallCursor.next(), e3) return e3;
      this.m_smallCursor = null;
    }
    for (; e3 = this.m_inputGeoms.next(); ) {
      if (j(e3), this.m_index = this.m_inputGeoms.getGeometryID(), -1 === this.m_dimensionMask) {
        return this.m_intersector.intersect(e3);
      }
      this.m_smallCursor = this.m_intersector.intersectEx(e3);
      return this.m_smallCursor.next();
    }
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
var wh = class {
  getOperatorType() {
    return 1e4;
  }
  accelerateGeometry(e3, t2, s2) {
    if (!this.canAccelerateGeometry(e3)) return false;
    zt(t2, e3, true);
    let n5 = 0;
    return e3.getGeometryType() !== a.enumPolygon && e3.getGeometryType() !== a.enumPolyline || !Rs(e3) || 0 === s2 || (n5 |= e3.getImpl().buildQuadTreeAccelerator(s2) ? 1 : 0), !!n5;
  }
  canAccelerateGeometry(e3) {
    return Rs(e3);
  }
  supportsCurves() {
    return true;
  }
  executeMany(e3, t2, s2, n5, r = -1) {
    return new bh(e3, t2, s2, n5, r);
  }
  execute(e3, t2, s2, n5) {
    if (e3.getGeometryType() === a.enumPoint && t2.getGeometryType() === a.enumPoint) return Ih2.intersectPoints(e3, t2, s2);
    const r = new t([e3]), o2 = new t([t2]), h2 = this.executeMany(r, o2, s2, n5, -1).next();
    return h2 || b("null output"), h2;
  }
};
function vh(e3, t2, s2) {
  return t2.m_projector.project(e3, s2);
}
function Nh2(e3, t2, s2, n5, r) {
  e3.m_projector.transformInPlaceZ(t2, null, s2, n5, null, r);
  const i2 = n5.slice(0, s2).filter((e4) => !e4.isNAN());
  for (let o2 = 0, a2 = i2.length; o2 < a2; ++o2) n5[o2].assign(i2[o2]);
  return i2.length;
}
function Th2(e3, t2, s2, n5, r) {
  return e3.m_projector.transformInPlaceZ(t2, null, s2, n5, null, r);
}
function Gh2(e3, t2, r, a2) {
  if (e3 && t2 && t2.isPannable() || P("fold_into_360_range_geodetic"), e3.isEmpty()) return e3;
  if (4 === r) return Dh(e3, t2, a2);
  let m2 = e3;
  const l2 = m2.getGeometryType();
  if (h(l2)) {
    m2 = Al(e3, t2);
    const n5 = new n3();
    m2.queryEnvelope(n5);
    const i2 = qt2(t2, n5, false).total(), o2 = t2.getPannableExtent();
    let a3 = Math.floor((n5.xmin - o2.xmin) / o2.width()) * o2.width() + o2.xmin, h2 = m2;
    for (; a3 < n5.xmax; ) a3 > n5.xmin + i2 && a3 < n5.xmax - i2 && (h2 = Hl(h2, t2, r, true, a3)), a3 += o2.width();
    m2 = h2;
  } else {
    if (l2 === a.enumEnvelope) {
      const e4 = new mr({ vd: m2.getDescription() });
      return e4.addEnvelope(m2, false), Gh2(e4, t2, r, a2);
    }
    if (f(l2)) {
      const e4 = new Qs2({ vd: m2.getDescription() });
      return e4.addSegment(m2, true), Gh2(e4, t2, r, a2);
    }
  }
  return Dh(m2, t2, a2);
}
function Dh(e3, t2, s2) {
  if (e3 && t2 && t2.isPannable() || P(""), e3.isEmpty()) return e3;
  let r;
  const a2 = e3.getGeometryType();
  if (a2 === a.enumEnvelope) {
    const t3 = new mr({ vd: e3.getDescription() });
    t3.addEnvelope(e3, false), r = t3;
  } else if (f(a2)) {
    const t3 = new Qs2({ vd: e3.getDescription() });
    t3.addSegment(e3, true), r = t3;
  } else r = e3;
  const h2 = Al(r, t2);
  return h2.isEmpty() ? h2 : vl(h2, t2, 0, h2 !== e3, 0, s2);
}
function Vh(e3, t2, s2) {
  if (!t2.isPannable() || e3.isEmpty()) return e3;
  const n5 = t2.getPannableExtent().width(), r = 0.5 * n5, i2 = e3.queryInterval(0, 0);
  if (i2.width() < r || !y(e3.getGeometryType())) {
    if (Number.isNaN(s2)) return e3;
    const t3 = i2.getCenter();
    if (Math.abs(t3 - s2) <= r) return e3;
    {
      const r2 = new x2(), i3 = S((s2 - t3) / n5) * n5;
      r2.setShiftCoords(i3, 0);
      const o3 = e3.clone();
      return o3.applyTransformation(r2), o3;
    }
  }
  const o2 = e3.getGeometryType(), a2 = e3, m2 = a2.getAttributeStreamRef(0), l2 = e3.clone(), g = l2.getAttributeStreamRef(0);
  let u = 0, c = 0, _ = 0, d2 = h(o2) ? 0 : -1;
  const p3 = x.constructEmpty();
  let f3 = false;
  for (let x3 = 0, y2 = a2.getPointCount(); x3 < y2; x3++) {
    const e4 = m2.read(2 * x3);
    x3 === c && (h(o2) ? (0 === d2 && Number.isNaN(s2) && (f3 = true), d2 > 0 && Number.isNaN(s2) && (s2 = p3.getCenter(), f3 = false), c = a2.getPathEnd(d2), d2++) : c = a2.getPointCount(), Number.isNaN(s2) ? _ = e4 : (_ = s2, u = 0));
    let t3 = e4 - _;
    Math.abs(t3) > r && (t3 = S(t3 / n5) * n5, u -= t3, Math.abs(u) < 0.1 * n5 && (u = 0));
    const i3 = e4 + u;
    g.write(2 * x3, i3), f3 && p3.mergeCoordinate(i3), _ = e4;
  }
  return l2.notifyModified(), l2;
}
var Fh = "missing implementation";
function Hh(e3, t2, n5, r) {
  const i2 = t2.getCoordinateSystemType();
  if (0 === i2) {
    const s2 = new ac();
    return t2.queryPrecisionDescriptor(s2), kh(e3, s2, t2, n5);
  }
  let o2 = e3;
  2 !== r && 3 !== r || !t2.isPannable() || (o2 = Dh(o2, t2, n5));
  const h2 = new ac();
  if (t2.queryPrecisionDescriptor(h2), o2 = kh(o2, h2, t2, n5), 0 === r || o2.isEmpty()) return o2;
  if (1 === i2) {
    if (1 === r) {
      const e4 = new n3();
      o2.queryLooseEnvelope(e4);
      const r2 = t2.getPannableExtent(), i3 = 0.01 * r2.width();
      return r2.xmin = e4.xmin - i3, r2.xmax = e4.xmax + i3, new I3().execute(o2, r2, t2, n5);
    }
    return o2;
  }
  if (2 === i2) {
    const e4 = t2.getPCSHorizon();
    if (1 === r || 2 === r) {
      const s2 = new wh().execute(o2, e4, t2, n5);
      return s2 === e4 ? s2.clone() : s2;
    }
    return o2;
  }
  if (3 === i2) return o2;
  b(Fh);
}
function kh(e3, t2, s2, n5) {
  const r = t2.getXYGridRange(), i2 = e3.hasAttribute(1), o2 = e3.hasAttribute(2);
  let a2 = new x(), h2 = new x();
  i2 && (a2 = t2.getZGridRange()), o2 && (h2 = t2.getMGridRange());
  let m2 = new I3().execute(e3, r, s2, n5);
  if (i2) {
    const t3 = m2.queryInterval(1, 0);
    a2.contains(t3) || (e3 === m2 && (m2 = m2.clone()), te(m2, a2, 1, 0));
  }
  if (o2) {
    const t3 = m2.queryInterval(2, 0);
    h2.contains(t3) || (e3 === m2 && (m2 = m2.clone()), te(m2, h2, 2, 0));
  }
  return m2;
}
var Ah = class {
  constructor(e3) {
    this.m_inputPCSHorizonClipOption = 0, this.m_outputPCSHorizonClipOption = 0, this.m_bDontGeonormalizePolygon = false, this.m_bClipOutCurvedPoles = false, this.m_bNormalizeOutputGeometry = false, this.m_bDontHackPolesInGeogToGeog = false, this.m_centralMeridianOfOutputGCS = 0, this.m_densificationStepInput = 0, e3 || P(""), this.m_projTransform = e3, this.m_bClipOutCurvedPoles = false;
    const t2 = this.m_projTransform.getExtendedParamsImpl();
    this.m_bNormalizeOutputGeometry = t2.normalizeResultGeometry, this.m_bNormalizeOutputGeometry && (t2.legacyHorizonClipping ? this.m_bNormalizeOutputGeometry = false : this.m_projTransform.getOutputSR().isPannable() || (this.m_bNormalizeOutputGeometry = false)), t2.clipWithInputHorizon ? (this.m_inputPCSHorizonClipOption = 0, !t2.legacyHorizonClipping && this.m_projTransform.getInputSR().isPannable() && (this.m_inputPCSHorizonClipOption = this.m_bNormalizeOutputGeometry ? 4 : 2)) : this.m_inputPCSHorizonClipOption = 1, t2.clipWithOutputHorizon ? (this.m_outputPCSHorizonClipOption = 0, !t2.legacyHorizonClipping && this.m_projTransform.getOutputSR().isPannable() && (this.m_outputPCSHorizonClipOption = this.m_bNormalizeOutputGeometry ? 4 : 2)) : this.m_outputPCSHorizonClipOption = 1, this.m_centralMeridianOfOutputGCS = t2.centralMeridianOfOutputGCS, this.m_densificationStepInput = t2.densificationStep;
    const s2 = this.m_projTransform.getExtendedParamsInternal();
    this.m_bDontGeonormalizePolygon = s2.hasFlag(2147483648), this.m_bDontHackPolesInGeogToGeog = s2.hasFlag(1073741824), this.m_bClipOutCurvedPoles = s2.hasFlag(536870912);
  }
  project(e3, t2) {
    if (this.m_projTransform.isIdentity() || e3.isEmpty()) return e3;
    const s2 = e3.getGeometryType();
    if (s2 === a.enumPoint) return this.projectPoint(e3, t2);
    const n5 = this.m_projTransform.getInputSR().getCoordinateSystemType(), r = this.m_projTransform.getOutputSR().getCoordinateSystemType(), o2 = this.m_projTransform.getInputSR(), h2 = this.m_projTransform.getOutputSR();
    if (0 === n5 && n5 === r) {
      const t3 = Uh(o2, h2), s3 = e3.clone();
      return s3.applyTransformation(t3), s3;
    }
    switch (s2) {
      case a.enumPolyline:
      case a.enumPolygon:
        return this.projectMultiPath(e3, t2);
      case a.enumMultiPoint:
        return this.projectMultiPoint(e3, t2);
      case a.enumEnvelope:
        return this.projectEnvelope(e3, t2);
      case a.enumGeometryCollection:
        return this.projectGeometryCollection(e3, t2);
      default:
        b("");
    }
  }
  projectPoint(e3, t2) {
    const s2 = [e3.getXY()];
    let n5, r = null;
    (n5 = e3.hasAttribute(1)) && (r = [e3.getZ()]), this.transformInPlaceZ(s2, r, 1, s2, r, null);
    const i2 = e3.clone();
    return i2.setXY(s2[0]), n5 && i2.setZ(r[0]), i2;
  }
  projectMultiPoint(e3, t2) {
    let s2 = new De({ copy: e3 });
    const n5 = this.m_projTransform.getInputSR(), r = this.m_projTransform.getOutputSR(), i2 = n5.getCoordinateSystemType(), o2 = r.getCoordinateSystemType();
    if (3 === i2 && n(0), s2 = Xl(s2, n5, this.m_inputPCSHorizonClipOption, t2), s2.isEmpty()) return s2;
    2 === i2 && $l(n5, 0, s2), gg(this.m_projTransform, s2, false);
    let a2 = 0;
    3 === o2 && n(0);
    const h2 = 2 === o2;
    return h2 ? a2 = r.getCentralMeridian() : Number.isNaN(this.m_centralMeridianOfOutputGCS) || (a2 = this.m_centralMeridianOfOutputGCS), h2 && 0 !== this.m_outputPCSHorizonClipOption || (s2 = vl(s2, Zu(r), a2, false, 0, t2)), h2 && (s2 = Sl(s2, r, this.m_outputPCSHorizonClipOption, t2), Kl(r, s2, this.m_bNormalizeOutputGeometry), s2.isEmpty()), s2;
  }
  projectMultiPath(e3, t2) {
    const s2 = e3.getGeometryType();
    return s2 === a.enumPolygon ? this.projectPolygon(e3, t2) : s2 === a.enumPolyline ? this.projectPolyline(e3, t2) : void b("project_multi_path_");
  }
  projectEnvelope(e3, t2) {
    this.m_projTransform.getInputSR(), this.m_projTransform.getOutputSR();
    const s2 = this.m_projTransform.isVertical() && e3.hasAttribute(1);
    let n5 = x.constructEmpty();
    if (s2 && (n5 = e3.queryInterval(1, 0)), n5.width() > 0) {
      const s3 = e3.clone();
      s3.setInterval(1, 0, n5.vmin, n5.vmin);
      const r = this.projectEnvelopeHelper(s3, t2);
      s3.setInterval(1, 0, n5.vmax, n5.vmax);
      const i2 = this.projectEnvelopeHelper(s3, t2);
      return r.merge(i2), r;
    }
    return this.projectEnvelopeHelper(e3, t2);
  }
  projectPolygon(e3, t2) {
    n(e3.getGeometryType() === a.enumPolygon), n(!this.m_projTransform.isIdentity()), n(!e3.isEmpty());
    const n5 = this.m_projTransform.getInputSR(), r = this.m_projTransform.getOutputSR(), o2 = n5.getCoordinateSystemType(), a2 = r.getCoordinateSystemType(), h2 = new mr({ copy: e3 });
    3 === o2 && n(0), 3 === a2 && n(0);
    const m2 = 2 === o2, g = 2 === a2, u = m2 ? n5.getGCS() : n5, c = g ? r.getGCS() : r, _ = !g && !this.m_bDontHackPolesInGeogToGeog;
    let d2 = false, p3 = Xl(h2, n5, this.m_inputPCSHorizonClipOption, t2);
    if (p3.isEmpty()) return p3;
    let f3 = this.m_densificationStepInput;
    const x3 = !Number.isNaN(f3);
    let y2;
    x3 && (p3 = new o().execute(p3, f3, 0, 0, t2));
    let P3 = g ? r.getPCSInfo() : null, E2 = Number.NaN;
    m2 && (E2 = n5.getCentralMeridian());
    const S2 = null !== r.getGCSSplitLines();
    if (this.m_bDontGeonormalizePolygon) {
      const e4 = p3;
      if (m2 && (hg(n5, E2, e4), x3)) {
        const e5 = n5.getUnitsPerMillimeter();
        f3 *= n5.getGCS().getUnitsPerMillimeter() / e5;
      }
      if (cg(this.m_projTransform, e4, _), x3) {
        const e5 = n5.getGCS().getUnitsPerMillimeter();
        f3 *= r.getGCS().getUnitsPerMillimeter() / e5;
      }
      y2 = e4;
    } else {
      let e4 = new Qs2({ vd: p3.getDescription() });
      if (e4.addAndExplicitlyOpenAllPaths(p3, false), m2) {
        if (hg(n5, E2, e4), x3) {
          const e5 = n5.getUnitsPerMillimeter();
          f3 *= n5.getGCS().getUnitsPerMillimeter() / e5;
        }
        if (this.m_bClipOutCurvedPoles) {
          const r2 = n5.getPCSInfo(), i3 = r2.getSouthPoleGeometry() === Nc.PE_POLE_LINE_CURVED, o4 = r2.getNorthPoleGeometry() === Nc.PE_POLE_LINE_CURVED;
          if (i3 || o4) {
            const n6 = n3.constructEmpty();
            e4.queryLooseEnvelope(n6), n6.inflateCoords(1, 1);
            const r3 = 89.9999 * u.getOneDegreeGCSUnit();
            i3 && (n6.ymin = -r3), o4 && (n6.ymax = r3), e4 = d(e4, n6, u, 0, 0, t2);
          }
        }
      }
      if (cg(this.m_projTransform, e4, _), x3) {
        const e5 = Zu(n5).getUnitsPerMillimeter();
        f3 *= Zu(r).getUnitsPerMillimeter() / e5;
      }
      let i2 = Number.NaN;
      g ? (P3 = r.getPCSInfo(), i2 = r.getCentralMeridian()) : Number.isNaN(this.m_centralMeridianOfOutputGCS) || (i2 = this.m_centralMeridianOfOutputGCS);
      let o3 = Mh(n5) | Mh(r), a3 = 10 * c.getTolerance(0);
      this.m_bDontHackPolesInGeogToGeog && (o3 = 3, a3 = 10 * c.getTolerance(0)), y2 = Vl(p3, n5, e4, c, i2, t2, o3, a3, this.m_bNormalizeOutputGeometry), o3 = 0;
    }
    if (S2 && (n(!r.isPannable()), y2 = cl(y2, r, t2)), g) {
      if (!d2) {
        const e4 = c.getPannableExtent().width();
        if (y2.queryInterval(0, 0).width() >= e4 - 10 * c.getTolerance(0)) {
          const e5 = P3.getNorthPoleLocation(), t3 = P3.getSouthPoleLocation(), s2 = P3.getNorthPoleGeometry(), n6 = P3.getSouthPoleGeometry();
          let r2 = 0;
          s2 === Nc.PE_POLE_POINT && e5 !== Nc.PE_POLE_OUTSIDE_BOUNDARY && (r2 = 1), n6 === Nc.PE_POLE_POINT && t3 !== Nc.PE_POLE_OUTSIDE_BOUNDARY && (r2 |= 2), d2 ||= 0 !== r2;
        }
      }
      y2 = Sl(y2, r, this.m_outputPCSHorizonClipOption, t2), x3 && (y2 = new o().execute(y2, f3, 0, 0, t2)), Jl(r, y2, this.m_bNormalizeOutputGeometry);
    }
    return y2.isEmpty() || d2 && (y2 = new Eh().execute(y2, r, false, t2)), y2;
  }
  projectPolyline(e3, t2) {
    n(e3.getGeometryType() === a.enumPolyline), n(!this.m_projTransform.isIdentity()), n(!e3.isEmpty());
    const s2 = this.m_projTransform.getInputSR(), n5 = this.m_projTransform.getOutputSR(), r = s2.getCoordinateSystemType(), o2 = n5.getCoordinateSystemType(), a2 = new Qs2({ copy: e3 });
    3 === r && n(0), 3 === o2 && n(0);
    const h2 = 2 === r, m2 = 2 === o2;
    h2 && s2.getGCS();
    const g = m2 ? n5.getGCS() : n5, u = !m2 && !this.m_bDontHackPolesInGeogToGeog;
    let c = Xl(a2, s2, this.m_inputPCSHorizonClipOption, t2);
    if (c.isEmpty()) return c;
    let _ = Number.NaN;
    h2 && (_ = s2.getCentralMeridian());
    const d2 = null !== n5.getGCSSplitLines();
    let p3 = this.m_densificationStepInput;
    const f3 = !Number.isNaN(p3);
    let x3;
    if (f3 && (c = new o().execute(c, p3, 0, 0, t2)), this.m_bDontGeonormalizePolygon) {
      if (h2 && (hg(s2, _, c), f3)) {
        const e4 = s2.getUnitsPerMillimeter();
        p3 *= s2.getGCS().getUnitsPerMillimeter() / e4;
      }
      if (cg(this.m_projTransform, c, u), f3) {
        const e4 = s2.getGCS().getUnitsPerMillimeter();
        p3 *= n5.getGCS().getUnitsPerMillimeter() / e4;
      }
      x3 = c;
    } else {
      const e4 = new Qs2({ vd: c.getDescription() });
      if (e4.addAndExplicitlyOpenAllPaths(c, false), h2 && (hg(s2, _, e4), f3)) {
        const e5 = s2.getUnitsPerMillimeter();
        p3 *= s2.getGCS().getUnitsPerMillimeter() / e5;
      }
      if (cg(this.m_projTransform, e4, u), f3) {
        const e5 = s2.getGCS().getUnitsPerMillimeter();
        p3 *= n5.getGCS().getUnitsPerMillimeter() / e5;
      }
      let r2 = Number.NaN;
      m2 ? r2 = n5.getCentralMeridian() : Number.isNaN(this.m_centralMeridianOfOutputGCS) || (r2 = this.m_centralMeridianOfOutputGCS);
      let i2 = Mh(s2) | Mh(n5), o3 = 10 * g.getTolerance(0);
      this.m_bDontHackPolesInGeogToGeog && (i2 = 3, o3 = 0), x3 = Fl(c, s2, e4, g, r2, t2, i2, o3, this.m_bNormalizeOutputGeometry), i2 = 0;
    }
    return d2 && (n(!n5.isPannable()), x3 = cl(x3, n5, t2)), m2 && (x3 = Sl(x3, n5, this.m_outputPCSHorizonClipOption, t2), f3 && (x3 = new o().execute(x3, p3, 0, 0, t2)), Jl(n5, x3, this.m_bNormalizeOutputGeometry)), x3.isEmpty(), x3;
  }
  projectGeometryCollection(e3, t2) {
    return n(0), {};
  }
  projectEnvelopeHelper(e3, t2) {
    const n5 = (e3.height() + e3.width()) / 400;
    if (0 !== n5) {
      const r = new o().execute(e3, n5, 0, 0, t2), i2 = this.projectMultiPath(r, t2), o2 = new he({ vd: e3.getDescription() });
      if (i2.isEmpty()) {
        const n6 = Math.min(e3.height(), e3.width()), i3 = zt(this.m_projTransform.getInputSR(), e3, true).total();
        if (n6 > 100 * i3) {
          const e4 = n3.constructEmpty(), t3 = qt2(this.m_projTransform.getOutputSR(), e4, true).total(), r2 = this.m_projTransform.getInputSR().getOneMeter() / this.m_projTransform.getOutputSR().getOneMeter();
          if (n6 > 100 * Math.max(i3, t3 * r2)) return o2;
        }
        const a2 = new Qs2();
        a2.addAndExplicitlyOpenAllPaths(r, false);
        this.projectMultiPath(a2, t2).queryEnvelope(o2);
        const h2 = new De({ vd: e3.getDescription() });
        h2.reserve(4);
        const m2 = new se();
        for (let t3 = 0; t3 < 4; t3++) e3.queryCornerByVal(t3, m2), h2.add(m2);
        const l2 = this.projectMultiPoint(h2, t2), g = new he();
        return l2.queryEnvelope(g), o2.merge(g), o2;
      }
      return i2.queryEnvelope(o2), o2;
    }
    {
      const s2 = e3.getCenterXY(), n6 = new se(s2), r = this.projectPoint(n6, t2), i2 = new he({ vd: e3.getDescription() });
      if (r.isEmpty()) i2.setEmpty();
      else {
        e3.copyTo(i2);
        const t3 = r.getXY();
        i2.setCoords(t3.x, t3.y, t3.x, t3.y);
      }
      return i2;
    }
  }
  transformInPlace(e3, t2, s2, n5) {
    return n(0), 0;
  }
  transformInPlaceZ(e3, t2, s2, n5, r, i2) {
    if (this.m_projTransform.isIdentity()) return e3 !== n5 && Gt(n5, e3, s2), t2 !== r && Dt(r, t2, 0, 0, s2), s2;
    const o2 = this.m_projTransform, a2 = o2.getInputSR(), h2 = o2.getOutputSR(), m2 = a2.getCoordinateSystemType(), g = h2.getCoordinateSystemType();
    if (0 === m2 && m2 === g) {
      return Uh(a2, h2).transformPoints2D(e3, s2, n5), o2.isVertical() && n(0), s2;
    }
    3 === m2 && z("image: transform_in_place_"), 3 === g && z("image: transform_in_place_"), Ll(e3, s2, n5, a2, this.m_inputPCSHorizonClipOption), r !== t2 && Dt(r, t2, 0, 0, s2), 2 === m2 && mg(a2, 0, n5, s2), fg(this.m_projTransform, n5, r, s2, false);
    let u = 0;
    const c = 2 === g;
    c ? u = h2.getCentralMeridian() : Number.isNaN(this.m_centralMeridianOfOutputGCS) || (u = this.m_centralMeridianOfOutputGCS), c && 0 !== this.m_outputPCSHorizonClipOption || Nl(n5, s2, h2.getGCS(), u), c && (wl(n5, s2, h2, this.m_outputPCSHorizonClipOption), Wl(h2, n5, s2, false));
    let _ = s2;
    for (let l2 = 0; l2 < s2; ++l2) n5[l2].isNAN() && (r && (r[l2] = Number.NaN), _--);
    return _;
  }
};
function Mh(e3) {
  if (2 !== e3.getCoordinateSystemType()) return 0;
  let t2 = 0;
  const s2 = e3.getPCSInfo(), n5 = s2.getNorthPoleLocation(), r = s2.getSouthPoleLocation(), i2 = s2.getNorthPoleGeometry(), o2 = s2.getSouthPoleGeometry();
  return i2 === Nc.PE_POLE_POINT && n5 !== Nc.PE_POLE_OUTSIDE_BOUNDARY && (t2 = 1), o2 === Nc.PE_POLE_POINT && r !== Nc.PE_POLE_OUTSIDE_BOUNDARY && (t2 |= 2), t2;
}
function Uh(e3, t2) {
  const s2 = e3.getHorzUnitFactor(), n5 = t2.getHorzUnitFactor();
  let r = 1, i2 = 1;
  const o2 = 20015077 / 180;
  1 === e3.getUnit().getUnitType() && (r = o2), 1 === t2.getUnit().getUnitType() && (i2 = o2);
  const a2 = s2 / n5 * (r !== i2 ? r / i2 : 1), h2 = new x2();
  return h2.setScaleCoords(a2, a2), h2;
}
var qh2 = class {
  getOperatorType() {
    return 10300;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e3, t2, s2) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  executeMany(e3, t2, s2) {
    return !t2 || t2.isIdentity() ? e3 : new Bh2(e3, t2, s2);
  }
  execute(e3, t2, s2) {
    return t2.isIdentity() ? e3 : vh(e3, t2, s2);
  }
  transform(e3, t2, s2, n5, r = true) {
    return r ? Nh2(e3, t2, s2, n5, null) : Th2(e3, t2, s2, n5, null);
  }
  transform3D(e3, t2, s2, n5, r = true) {
    return n(0), 0;
  }
  foldInto360Range(e3, t2) {
    return Dh(e3, t2, null);
  }
  foldInto360RangeGeodetic(e3, t2, s2) {
    return Gh2(e3, t2, s2, null);
  }
  normalizeGeometryEx(e3, t2, s2, n5, r = 0) {
    return Tm(e3, t2, s2, n5, r);
  }
  normalizeGeometry(e3, t2, s2) {
    return Vh(e3, t2, s2);
  }
  clipToSpatialReference(e3, t2, s2, n5 = 0) {
    return Hh(e3, t2, s2, n5);
  }
};
var Bh2 = class extends s {
  constructor(e3, t2, s2) {
    super(), this.m_projTrans = t2, this.m_progressTracker = s2, this.m_index = -1, e3 || P(""), this.m_inputGeoms = e3;
  }
  next() {
    const e3 = this.m_inputGeoms.next();
    return null != e3 ? (N(e3), j(e3), this.m_index = this.m_inputGeoms.getGeometryID(), vh(e3, this.m_projTrans, this.m_progressTracker)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
function Oh(e3, t2, s2, a2, m2, u, c = false) {
  e3 || P("Geometry.Geodetic_densify.densify");
  let _ = e3.getGeometryType();
  if (j(e3), e3.isEmpty() || l(_)) return e3;
  const d2 = new Wh();
  d2.m_sr = t2, d2.m_gcs = t2.getGCS(), d2.m_transform = d2.m_gcs !== t2 ? t2.getSRToGCSTransform() : null, d2.m_progressTracker = u;
  const p3 = Hu();
  let f3, x3, y2;
  if (d2.m_gcs.querySpheroidData(p3), d2.m_a = p3.majorSemiAxis, d2.m_eSquared = p3.e2, d2.m_rpu = d2.m_gcs.getUnit().getUnitToBaseFactor(), d2.m_gcsTolerance = d2.m_gcs.getTolerance(0), d2.m_radTolerance = d2.m_gcsTolerance * d2.m_rpu, d2.m_maxLength = a2, d2.m_maxDeviation = m2, d2.m_curveType = s2, _ === a.enumEnvelope) {
    const t3 = new mr({ vd: e3.getDescription() });
    t3.addEnvelope(e3, false), f3 = t3, _ = a.enumPolygon;
  } else if (f(_)) {
    const t3 = new Qs2({ vd: e3.getDescription() });
    t3.addSegment(e3, true), f3 = t3, _ = a.enumPolyline;
  } else f3 = e3;
  if (4 !== d2.m_curveType) {
    if (n(h(_)), x3 = d2.replaceCurvesWithLinesAndProjectToGCSAsMultiPoint_(f3), x3.isEmpty()) return x3;
    x3 = Yh(d2.m_rpu, x3);
    let e4 = d2.geodeticDensify(x3);
    c || (e4 = new qh2().foldInto360RangeGeodetic(e4, d2.m_gcs, d2.m_curveType)), y2 = d2.m_transform && !d2.m_transform.isIdentity() ? new qh2().execute(e4, d2.m_transform.getInverse(), u) : e4;
  } else {
    let e4;
    if (n(h(_)), t2.isPannable()) e4 = Al(f3, t2);
    else {
      const s3 = t2.getPCSHorizon();
      e4 = new wh().execute(f3, s3, t2, u), e4 === s3 && (e4 = s3.clone());
    }
    if (x3 = e4, x3.isEmpty()) return x3;
    y2 = d2.shapePreservingDensify(x3);
  }
  return y2;
}
function Yh(e3, t2) {
  const n5 = new n3();
  if (t2.queryLooseEnvelope(n5), n5.width() * e3 < Math.PI) return t2;
  let r = false;
  const i2 = t2.querySegmentIterator(), o2 = new mi(), a2 = new mi();
  for (; i2.nextPath(); ) for (; i2.hasNextSegment(); ) {
    const t3 = i2.nextSegment();
    if (o2.setCoordsPoint2D(t3.getStartXY()), a2.setCoordsPoint2D(t3.getEndXY()), o2.scale(e3), a2.scale(e3), Math.abs(o2.x - a2.x) > Math.PI) {
      if (!Xh(o2, a2)) {
        r = true;
        break;
      }
      if (Math.abs(o2.x - a2.x) > 2 * Math.PI) {
        r = true;
        break;
      }
    }
  }
  if (!r) return t2;
  const h2 = t2.createInstance();
  h2.reserve(t2.getPointCount());
  const m2 = t2.getDescription().getAttributeCount() > 1, l2 = new mi(), g = new mi(), u = new mi(0, 0), c = new mi(0, 0), _ = new se();
  for (i2.resetToFirstPath(); i2.nextPath(); ) {
    let t3 = Number.NaN, s2 = 0;
    for (; i2.hasNextSegment(); ) {
      const n6 = i2.nextSegment();
      o2.setCoordsPoint2D(n6.getStartXY()), a2.setCoordsPoint2D(n6.getEndXY()), o2.scale(e3), a2.scale(e3), Number.isNaN(t3) ? (s2 = im(o2.x, Number.NaN, s2), u.setCoordsPoint2D(o2)) : u.setCoordsPoint2D(c), t3 = u.x;
      if (Xh(o2, a2)) {
        if (a2.x - o2.x > 2 * Math.PI) for (; a2.x - o2.x > 2 * Math.PI; ) a2.x -= 2 * Math.PI;
        else if (a2.x - o2.x < 2 * -Math.PI) for (; a2.x - o2.x < 2 * -Math.PI; ) a2.x += 2 * Math.PI;
        s2 = im(a2.x, Number.NaN, s2), c.setCoordsPoint2D(a2);
      } else l2.setCoordsPoint2D(a2), gm(l2), s2 = im(l2.x, t3, s2), c.setCoords(s2 + l2.x, l2.y);
      if (Math.abs(c.x - a2.x) < 0.5 && c.setCoordsPoint2D(a2), m2) {
        n6.queryCoord(0, _), g.setCoordsPoint2D(u), g.scale(1 / e3), _.setXY(g);
        i2.isFirstSegmentInPath() ? h2.startPathPoint(_) : h2.lineToPoint(_), i2.isLastSegmentInPath() && !i2.isPathClosed() && (n6.queryCoord(1, _), g.setCoordsPoint2D(c), g.scale(1 / e3), _.setXY(g), h2.lineToPoint(_));
      } else {
        i2.isFirstSegmentInPath() && h2.insertPath2D(-1, null, 0, 0, true);
        const t4 = h2.getPathCount() - 1;
        g.setCoordsPoint2D(u), g.scale(1 / e3), h2.insertPoint2D(t4, -1, g), i2.isLastSegmentInPath() && !i2.isPathClosed() && (g.setCoordsPoint2D(c), g.scale(1 / e3), h2.insertPoint2D(t4, -1, g));
      }
    }
  }
  return h2;
}
function Rh(e3, t2, s2, n5, r, i2, o2, a2, h2, m2, l2, g) {
  const u = new mi(), c = new mi(), _ = n5.compare(r) > 0;
  nm(_, n5, r, u, c);
  const d2 = Kh(e3, t2, s2, u, c, i2, o2, a2, h2, m2, null, l2, g);
  return _ && sm(h2, m2, null, l2), d2;
}
function Xh(e3, t2) {
  return !(!Pc(e3.y, Wt) || !Pc(t2.y, Wt)) || !(!Pc(e3.y, -Wt) || !Pc(t2.y, -Wt));
}
function Lh(e3, t2) {
  return !(!Pc(e3.y, Wt) || Pc(t2.y, Wt)) || !(!Pc(e3.y, -Wt) || Pc(t2.y, -Wt));
}
function zh(e3, t2) {
  return !(!Pc(t2.y, Wt) || Pc(e3.y, Wt)) || !(!Pc(t2.y, -Wt) || Pc(e3.y, -Wt));
}
var Wh = class {
  constructor() {
    this.m_sr = null, this.m_gcs = null, this.m_transform = null, this.m_progressTracker = null, this.m_a = 0, this.m_eSquared = 0, this.m_rpu = 0, this.m_gcsTolerance = 0, this.m_radTolerance = 0, this.m_maxLength = 0, this.m_maxDeviation = 0, this.m_curveType = 0;
  }
  geodeticDensify(e3) {
    const t2 = e3.createInstance(), s2 = e3.querySegmentIterator(), n5 = [], r = [], i2 = new Pm(), o2 = e3.getDescription().getAttributeCount() > 1;
    for (; s2.nextPath(); ) {
      const e4 = [0];
      for (; s2.hasNextSegment(); ) {
        const a2 = s2.nextSegment(), h2 = a2.getStartXY(), m2 = a2.getEndXY();
        h2.scale(this.m_rpu), m2.scale(this.m_rpu);
        const l2 = new mi(), g = new mi(), u = h2.compare(m2) > 0;
        nm(u, h2, m2, l2, g), n5.length = 0, r.length = 0, this.m_maxLength > 0 ? Kh(this.m_a, this.m_eSquared, this.m_curveType, l2, g, this.m_maxLength, this.m_maxDeviation, this.m_radTolerance, null, null, o2 ? r : null, n5, e4) : Qh(), u && sm(null, null, o2 ? r : null, n5), n5[0].setCoordsPoint2D(a2.getStartXY()), n5.at(-1).setCoordsPoint2D(a2.getEndXY());
        const c = 1 / this.m_rpu;
        for (let e5 = 1, t3 = n5.length - 1; e5 < t3; e5++) n5[e5].scale(c);
        if (o2) {
          const e5 = rm(u, a2, i2);
          Zh2(s2.isFirstSegmentInPath(), s2.isLastSegmentInPath() && !s2.isPathClosed(), a2, e5, r, n5, t2);
        } else jh2(s2.isFirstSegmentInPath(), s2.isLastSegmentInPath() && !s2.isPathClosed(), n5, t2);
      }
    }
    return t2;
  }
  shapePreservingDensify(e3) {
    const t2 = e3.createInstance(), s2 = e3.querySegmentIterator(), n5 = [], r = [], i2 = new Pm(), o2 = e3.getDescription().getAttributeCount() > 1;
    for (; s2.nextPath(); ) for (; s2.hasNextSegment(); ) {
      const e4 = s2.nextSegment(), a2 = e4.getStartXY(), h2 = e4.getEndXY(), m2 = a2.compare(h2) > 0, l2 = rm(m2, e4, i2);
      n5.length = 0, r.length = 0, tm(this.m_a, this.m_eSquared, this.m_rpu, l2, this.m_sr, this.m_maxLength, this.m_maxDeviation, o2 ? r : null, n5), m2 && sm(null, null, o2 ? r : null, n5), o2 ? Zh2(s2.isFirstSegmentInPath(), s2.isLastSegmentInPath() && !s2.isPathClosed(), e4, l2, r, n5, t2) : jh2(s2.isFirstSegmentInPath(), s2.isLastSegmentInPath() && !s2.isPathClosed(), n5, t2);
    }
    return t2;
  }
  replaceCurvesWithLinesAndProjectToGCSAsMultiPoint_(e3) {
    const t2 = e3.hasNonLinearSegments();
    if ((!this.m_transform || this.m_transform.isIdentity()) && (e3 = Al(e3, this.m_gcs), !t2)) return e3;
    const s2 = e3.createInstance();
    s2.reserveParts(e3.getPointCount(), e3.getPathCount());
    for (let n5 = 0, r = e3.getPathCount(); n5 < r; ++n5) {
      let t3 = new De();
      const r2 = e3.getPathStart(n5), i2 = e3.getPathEnd(n5);
      t3.addPoints(e3, r2, i2);
      const o2 = e3.isClosedPath(n5);
      let a2 = false;
      if (o2 && i2 - r2 === 1 && e3.hasNonLinearSegmentsPath(n5)) {
        const s3 = new se();
        e3.getPointByVal(r2, s3), t3.add(s3), a2 = true;
      }
      if (this.m_transform && !this.m_transform.isIdentity()) {
        if (o2 && !a2) {
          const s3 = new se();
          e3.getPointByVal(r2, s3), t3.add(s3);
        }
        if (t3 = new qh2().execute(t3, this.m_transform, this.m_progressTracker), o2 && t3.getPointCount() > 1) {
          const e4 = t3.getXY(0), s3 = t3.getXY(t3.getPointCount() - 1);
          e4.equals(s3) && t3.removePoint(t3.getPointCount() - 1);
        }
      }
      t3.getPointCount() > 1 && (s2.addPathMultiPoint(t3, 0, -1, true), o2 && s2.closePathWithLine());
    }
    return s2;
  }
};
function jh2(e3, t2, s2, n5) {
  e3 && n5.insertPath2D(-1, null, 0, 0, true);
  const r = n5.getPathCount() - 1;
  n5.insertPointsFromPoints(r, -1, s2, 0, s2.length - 1, true), t2 && n5.insertPoint2D(r, -1, s2.at(-1));
}
function Zh2(e3, t2, s2, n5, r, i2, o2) {
  o2.reserve(o2.getPointCount() + i2.length - 1);
  const a2 = new se();
  if (s2.queryStart(a2), e3 ? o2.startPathPoint(a2) : o2.lineToPoint(a2), i2.length > 2) {
    const e4 = n5.calculateLength2D();
    for (let t3 = 1; t3 < i2.length - 1; t3++) {
      const s3 = n5.lengthToT(r[t3] * e4);
      n5.queryCoord(s3, a2), a2.setXY(i2[t3]), o2.lineToPoint(a2);
    }
  }
  t2 && (s2.queryEnd(a2), o2.lineToPoint(a2));
}
function Kh(s2, n5, r, i2, o2, a2, h2, m2, l2, g, u, c, _) {
  const d2 = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = __addDisposableResource(d2, new Cc(), false), p3 = __addDisposableResource(d2, new Cc(), false), f3 = __addDisposableResource(d2, new Cc(), false);
    Dc.geodeticDistance(s2, n5, i2.x, i2.y, o2.x, o2.y, f3, t2, p3, r);
    const x3 = f3.val, y2 = t2.val, P3 = p3.val;
    let E2 = y2, S2 = P3;
    E2 < 0 && (E2 += 2 * Math.PI), S2 < 0 && (S2 += 2 * Math.PI), l2 && (l2[0] = E2), g && (g[0] = S2);
    let C2 = Number.NaN, I4 = Number.NaN;
    if (null !== u) {
      const e3 = Vc.q90(s2, n5), t3 = Vc.q(s2, n5, i2.y);
      C2 = (e3 - t3) / x3, I4 = (e3 + t3) / x3;
    }
    const b2 = Lh(i2, o2), w2 = zh(i2, o2), v2 = b2 || w2, N2 = mm2(i2, o2, m2), T = __addDisposableResource(d2, new Ht(new Cc(), new Cc()), false), G3 = new mi(), D = new mi(), V2 = new mi();
    _[0] = im(i2.x, Number.NaN, _[0]);
    let F = _[0];
    if (x3 <= a2) return c.push(i2.clone()), _[0] = im(o2.x, Number.NaN, _[0]), null != u && u.push(0), v2 ? (b2 && om2(i2, o2, u, c), w2 && am2(i2, o2, u, c)) : N2 ? hm2(i2, o2, y2, C2, I4, u, c) : h2 > 0 && (D.setCoords(i2.x - F, i2.y), G3.setCoords(o2.x - _[0], o2.y), F = Jh()), c.push(o2.clone()), x3;
    const H2 = 1 + Math.ceil(x3 / a2), k2 = x3 / (H2 - 1), A2 = new mi();
    c.push(i2.clone()), A2.setCoordsPoint2D(i2), D.setCoords(i2.x - _[0], i2.y), null !== u && u.push(0);
    for (let e3 = 1; e3 < H2; e3++) {
      let t3;
      if (e3 < H2 - 1) {
        const o3 = e3 * k2;
        Dc.geodeticCoordinate(s2, n5, i2.x, i2.y, o3, y2, T.at(0), T.at(1), r), G3.setCoords(T.at(0).val, T.at(1).val), _[0] = im(G3.x, A2.x, _[0]), V2.setCoords(_[0] + G3.x, G3.y), t3 = e3 / (H2 - 1);
      } else _[0] = im(o2.x, Number.NaN, _[0]), G3.setCoords(o2.x - _[0], o2.y), V2.setCoordsPoint2D(o2), t3 = 1;
      v2 ? (1 === e3 && b2 && om2(i2, V2, u, c), e3 === H2 - 1 && w2 && am2(A2, o2, u, c)) : N2 ? lm(A2, V2, m2) && (i2.x < o2.x ? A2.x > V2.x && (_[0] += 2 * Math.PI, V2.setCoords(_[0] + G3.x, G3.y)) : A2.x < V2.x && (_[0] -= 2 * Math.PI, V2.setCoords(_[0] + G3.x, G3.y)), hm2(A2, V2, y2, C2, I4, u, c)) : h2 > 0 && Jh(), c.push(V2.clone()), null != u && u.push(t3), A2.setCoordsPoint2D(V2), D.setCoordsPoint2D(G3), F = _[0];
    }
    return x3;
  } catch (p3) {
    d2.error = p3, d2.hasError = true;
  } finally {
    __disposeResources(d2);
  }
}
function Qh(e3, t2, s2, n5, r, i2, o2, a2, h2, m2) {
  n(0);
}
function Jh(e3, t2, s2, n5, r, i2, o2, a2, h2, m2, g, u, c, _, d2) {
  return n(0), 0;
}
function $h(e3, t2, s2, n5) {
  const r = ds2(e3, t2, s2), i2 = ds2(e3, t2, n5);
  return X.distance(r, i2);
}
function em(e3, t2, s2, n5, r, i2, o2, a2) {
  const h2 = new Array(), m2 = Ot(Array, 8);
  let g = 2, u = r.getCoord2D(i2);
  m2[0][0] = u.x, m2[0][1] = u.y, u = r.getCoord2D(o2), m2[1][0] = u.x, m2[1][1] = u.y;
  const c = (e4) => {
    if (null !== s2) {
      const t3 = wc.projToGeog(s2, e4, m2);
      n(t3 === e4);
    }
    for (const t3 of m2) t3[0] *= n5, t3[1] *= n5;
  };
  c(2), h2.push(ds2(e3, t2, new mi(m2[0][0], m2[0][1]))), h2.push(ds2(e3, t2, new mi(m2[1][0], m2[1][1])));
  let _ = X.distance(h2[0], h2[1]);
  if (_ > a2) return _;
  let d2 = 0;
  for (g = 3; g <= 17; ) {
    const s3 = 1 / (g - 1);
    let n6 = 0;
    for (let e4 = 1; e4 < g; ++e4) if (1 & e4) {
      const t3 = Q(i2, o2, e4 * s3);
      r.queryCoord2D(t3, u), m2[n6][0] = u.x, m2[n6][1] = u.y, n6++;
    }
    c(n6);
    let p3 = 1;
    for (let r2 = 0; r2 < n6; ++r2) h2.splice(p3, 0, ds2(e3, t2, new mi(m2[r2][0], m2[r2][1]))), p3++;
    p3 = 0;
    let f3 = h2[p3];
    p3++;
    let x3 = 0;
    for (; p3 !== h2.length; ++p3) {
      const e4 = h2[p3];
      x3 += X.distance(f3, e4), f3 = e4;
    }
    if (x3 > a2) return x3;
    if (d2 = x3 - _, n(d2 >= 0 || Math.abs(d2) < 1e-14 * x3), d2 < 0 && (d2 = 0), _ = x3, x3 + d2 <= a2) return x3 + d2;
    g = 2 * g - 1;
  }
  return _ + d2;
}
function tm(e3, t2, s2, n5, r, i2, o2, a2, h2) {
  const m2 = n5.isCurve(), g = Fs(e3, t2) * Math.PI * 179 / 180;
  let u = i2;
  i2 > 0 && !(i2 > g) || (u = g);
  const c = o2, _ = c > 0;
  let d2 = Number.NaN;
  _ && (d2 = Bs2(e3, t2, c));
  const p3 = 1 === r.getCoordinateSystemType();
  let f3 = null;
  p3 || (f3 = r.getPECoordSys());
  const x3 = r.getTolerance(0), y2 = n5.getStartXY(), P3 = n5.getEndXY(), E2 = new mi(), S2 = new mi();
  if (p3) E2.setCoordsPoint2D(y2), E2.scale(s2), S2.setCoordsPoint2D(P3), S2.scale(s2);
  else {
    const e4 = [y2.x, y2.y, P3.x, P3.y];
    wc.projToGeog(f3, 2, e4), E2.setCoords(e4[0], e4[1]), E2.scale(s2), S2.setCoords(e4[2], e4[3]), S2.scale(s2);
  }
  let C2 = 0, I4 = 0;
  const b2 = [], w2 = [], v2 = [];
  b2.push(P3.clone()), w2.push(S2.clone()), v2.push(1), h2.push(y2.clone()), null !== a2 && a2.push(I4);
  const N2 = r.isPannable(), T = y2.clone(), G3 = [0.5, 0.33333333333333337, 0.6666666666666666, 0.16666666666666669, 0.8333333333333333];
  let D = 5;
  m2 || (_ ? (G3[0] = 0.5, G3[1] = 0.25, G3[2] = 0.75, D = 3) : D = 1), n(u > 0);
  const V2 = (e4) => {
    if (e4 = e4.clone(), null !== f3) {
      const t3 = [e4.x, e4.y];
      wc.projToGeog(f3, 1, t3), e4.setCoords(t3[0], t3[1]);
    }
    return e4.scale(s2), e4;
  };
  for (; w2.length > 0; ) {
    const i3 = b2.at(-1).clone();
    S2.assign(w2.at(-1));
    const o3 = v2.at(-1);
    let g2 = false, c2 = Number.NaN;
    const y3 = em(e3, t2, f3, s2, n5, I4, o3, u);
    let P4 = u >= y3 && Math.abs(E2.y - S2.y) < 0.9 * Math.PI;
    p3 && P4 && (P4 = Math.abs(E2.x - S2.x) < 0.9 * Math.PI);
    const F = new mi(), H2 = new mi();
    let k2 = false;
    if (!_ && P4 && P4 && (k2 = true), n5.calculateSubLength(I4, o3) <= x3 && (k2 = true), !k2) for (let a3 = 0; a3 < D; a3++) {
      const h3 = Q(I4, o3, G3[a3]), u2 = new mi();
      n5.queryCoord2D(h3, u2);
      const f4 = V2(u2);
      if (0 === a3 && (c2 = h3, F.setCoordsPoint2D(u2), H2.setCoordsPoint2D(f4), !P4)) {
        g2 = true;
        break;
      }
      if (n(_), p3 && Math.abs(E2.x - f4.x) >= Math.PI) {
        g2 = true;
        break;
      }
      let x4 = new mi(), y4 = new mi();
      m2 ? (x4 = mi.lerp(T, i3, G3[a3]), y4 = V2(x4)) : (x4 = u2.clone(), y4 = f4.clone());
      const C3 = Ss2(e3, t2, E2, S2, G3[a3]), b3 = C3.clone();
      if (p3 ? (b3.x /= s2, b3.y /= s2) : (b3.x /= s2, b3.y /= s2, Th2(r.getGCSToSRTransform(), [b3], 1, [b3], null)), b3.isNAN()) {
        const s3 = ds2(e3, t2, f4), n6 = ds2(e3, t2, E2), r2 = ds2(e3, t2, S2), { second: i4 } = vs2(e3, t2, s3, n6, r2, 2, null);
        if (i4 > d2) {
          g2 = true;
          break;
        }
      } else {
        if (N2) {
          const e4 = r.getPannableExtent().width(), t3 = Q(n5.getStartX(), n5.getEndX(), 0.5);
          for (; b3.x < t3 - 0.5 * e4; ) b3.x += e4;
          for (; b3.x >= t3 + 0.5 * e4; ) b3.x -= e4;
        }
        const s3 = n5.getClosestCoordinateOnInterval(b3, new x(I4, o3), -1);
        let i4 = n5.getCoord2D(s3);
        i4 = V2(i4);
        let a4 = $h(e3, t2, i4, C3);
        if (a4 > d2) {
          if (a4 < 4 * d2) {
            const s4 = ds2(e3, t2, i4), n6 = ds2(e3, t2, E2), r2 = ds2(e3, t2, S2), { second: o4 } = vs2(e3, t2, s4, n6, r2, 2, null);
            a4 = o4;
          }
          if (a4 > d2) {
            g2 = true;
            break;
          }
        } else if (m2) {
          let s4 = ds2(e3, t2, f4);
          const n6 = ds2(e3, t2, E2), r2 = ds2(e3, t2, S2);
          let { second: i5 } = vs2(e3, t2, s4, n6, r2, 3, null);
          if (i5 <= d2) {
            s4 = ds2(e3, t2, y4);
            const { second: o4 } = vs2(e3, t2, s4, n6, r2, 3, null);
            i5 = o4;
          }
          if (i5 > d2) {
            g2 = true;
            break;
          }
        }
      }
    }
    g2 ? (b2.push(F.clone()), w2.push(H2.clone()), v2.push(c2)) : (b2.pop(), w2.pop(), v2.pop(), h2.push(i3.clone()), C2 += y3, null !== a2 && a2.push(C2), T.setCoordsPoint2D(i3), E2.setCoordsPoint2D(S2), I4 = o3);
  }
  if (null !== a2) {
    const e4 = 1 / C2;
    for (let t3 = 0; t3 < a2.length; t3++) a2[t3] *= e4;
  }
}
function sm(e3, t2, s2, n5) {
  if (n5.reverse(), null !== s2 && s2.reverse(), e3) {
    const s3 = e3[0], n6 = t2[0];
    e3[0] = n6, t2[0] = s3;
  }
}
function nm(e3, t2, s2, n5, r) {
  e3 ? (n5.setCoordsPoint2D(s2), r.setCoordsPoint2D(t2)) : (n5.setCoordsPoint2D(t2), r.setCoordsPoint2D(s2));
}
function rm(e3, t2, s2) {
  return e3 ? (s2.create(t2.getGeometryType()), t2.copyTo(s2.get()), s2.get().reverse(), s2.get()) : t2;
}
function im(e3, t2, s2) {
  if (Number.isNaN(t2)) {
    for (; s2 - e3 > Math.PI; ) s2 -= 2 * Math.PI;
    for (; e3 - s2 > Math.PI; ) s2 += 2 * Math.PI;
    return s2;
  }
  return s2 + e3 - t2 > Math.PI ? s2 -= 2 * Math.PI : t2 - (s2 + e3) > Math.PI && (s2 += 2 * Math.PI), s2;
}
function om2(e3, t2, s2, n5) {
  if (e3.y > 0) {
    const r = new mi();
    r.setCoords(t2.x, Wt), Pc(e3.x, r.x) || Pc(t2.y, r.y) || (n5.push(r), null !== s2 && s2.push(0));
  } else {
    const r = new mi();
    r.setCoords(t2.x, -Wt), Pc(e3.x, r.x) || Pc(t2.y, r.y) || (n5.push(r), null !== s2 && s2.push(0));
  }
}
function am2(e3, t2, s2, n5) {
  if (t2.y > 0) {
    const r = new mi();
    r.setCoords(e3.x, Wt), Pc(t2.x, r.x) || Pc(e3.y, r.y) || (n5.push(r), null !== s2 && s2.push(1));
  } else {
    const r = new mi();
    r.setCoords(e3.x, -Wt), Pc(t2.x, r.x) || Pc(e3.y, r.y) || (n5.push(r), null !== s2 && s2.push(1));
  }
}
function hm2(e3, t2, s2, n5, r, i2, o2) {
  if (Sc(s2)) {
    if (Wt - e3.y > 0) {
      const t3 = new mi();
      t3.setCoords(e3.x, Wt), o2.push(t3), null !== i2 && i2.push(n5);
    }
    if (Wt - t2.y > 0) {
      const e4 = new mi();
      e4.setCoords(t2.x, Wt), o2.push(e4), null !== i2 && i2.push(n5);
    }
  } else {
    if (Wt + e3.y > 0) {
      const t3 = new mi();
      t3.setCoords(e3.x, -Wt), o2.push(t3), null !== i2 && i2.push(r);
    }
    if (Wt + t2.y > 0) {
      const e4 = new mi();
      e4.setCoords(t2.x, -Wt), o2.push(e4), null !== i2 && i2.push(r);
    }
  }
}
function mm2(e3, t2, s2) {
  return !(!lm(e3, t2, s2) || Pc(e3.y, Wt) || Pc(e3.y, -Wt) || Pc(t2.y, Wt) || Pc(t2.y, -Wt));
}
function lm(e3, t2, s2) {
  return Math.abs(Math.abs(e3.x - t2.x) - Math.PI) <= s2;
}
function gm(e3) {
  if (e3.x < -Math.PI) for (; e3.x < -Math.PI; ) e3.x += 2 * Math.PI;
  else if (e3.x > Math.PI) for (; e3.x > Math.PI; ) e3.x -= 2 * Math.PI;
}
function um2(s2, n5, r, i2) {
  const o2 = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = [r.x], a2 = [r.y - i2], h2 = [r.x], m2 = [r.y + i2];
    Vs(t2, a2), Vs(h2, m2);
    const l2 = __addDisposableResource(o2, new Cc(), false), g = __addDisposableResource(o2, new Cc(), false);
    Dc.greatEllipticDistance(s2, n5, r.x, r.y, t2[0], a2[0], l2, null, null), Dc.greatEllipticDistance(s2, n5, r.x, r.y, h2[0], m2[0], g, null, null);
    return Math.min(l2.val, g.val);
  } catch (a2) {
    o2.error = a2, o2.hasError = true;
  } finally {
    __disposeResources(o2);
  }
}
function cm(e3, t2, n5, r, i2) {
  const o2 = new n3();
  n5.queryEnvelope(o2);
  const a2 = zt(null, n5, true).total();
  if (t2.xmin - o2.xmin <= a2 && o2.xmax - t2.xmax <= a2) return n5;
  const h2 = t2.width();
  let m2 = 0;
  for (; t2.xmin + m2 * h2 < o2.xmin; ) m2++;
  for (; t2.xmin + m2 * h2 > o2.xmin; ) m2--;
  const l2 = m2 * h2, g = new x2();
  g.setShiftCoords(-l2, 0);
  const u = n5;
  u.applyTransformation(g);
  const c = new n3();
  u.queryEnvelope(c);
  let _ = null;
  if (c.xmax > t2.xmax) {
    let n6 = 0;
    const r2 = new n3();
    r2.setCoords({ env2D: t2 }), r2.ymin -= 1, r2.ymax += 1;
    let o3 = u;
    for (; r2.xmin < c.xmax; ) {
      c.xmax > r2.xmax && (o3 = Hl(o3, e3, 2, true, r2.xmax));
      const s2 = It(o3, r2), a3 = qt2(null, s2, true).total(), m3 = f2(o3, r2, a3, Number.NaN, i2);
      null === _ ? _ = m3 === o3 ? m3.clone() : m3 : (g.setShiftCoords(-n6 * h2, 0), m3.applyTransformation(g), _.add(m3, false)), n6++, r2.xmin = r2.xmax, r2.xmax = t2.xmax + n6 * h2;
    }
  } else _ = u;
  return _;
}
var _m = class {
  constructor(e3, t2) {
    this.m_basisX = new X(), this.m_basisY = new X(), this.m_normal = new X(), n(1 === e3.getCoordinateSystemType()), this.m_gcs = e3;
    const s2 = Hu();
    e3.querySpheroidData(s2), this.m_a = s2.majorSemiAxis, this.m_e2 = s2.e2, this.m_rpu = e3.getUnit().getUnitToBaseFactor(), this.m_curvCenterRad = t2.mul(this.m_rpu);
    const n5 = this.m_curvCenterRad.x, r = this.m_curvCenterRad.y, i2 = Math.cos(n5), o2 = Math.sin(n5), a2 = Math.cos(r), h2 = Math.sin(r);
    this.m_cartCenter3D = fs(this.m_a, this.m_e2, i2, o2, a2, h2), this.m_normal.setCoordsPoint3D(this.m_cartCenter3D), this.m_d = this.m_cartCenter3D.length(), this.m_normal.divThis(this.m_d), X.selectRightHandedBasisFromNormal(this.m_normal, this.m_basisX, this.m_basisY), this.m_northPolePcs = this.projectPoint(mi.construct(0, 0.5 * Math.PI / this.m_rpu)), this.m_southPolePcs = this.projectPoint(mi.construct(0, 0.5 * -Math.PI / this.m_rpu));
  }
  project(e3) {
    const t2 = e3.getGeometryType();
    if (y(t2)) {
      N(e3);
      const t3 = e3;
      return this.projectMultiVertex(t3);
    }
    P("Gnomonic.project");
  }
  unproject(e3, t2, s2) {
    const r = e3.getGeometryType();
    if (y(r)) {
      N(e3);
      let n5 = e3;
      const o2 = [];
      if (r === a.enumPolygon) {
        const e4 = n5.getPathCount();
        for (let t3 = 0; t3 < e4; t3++) {
          const e5 = n5.calculateRingArea2D(t3);
          o2.push(e5);
        }
      }
      return this.unprojectMultiVertex(t2, n5), h(r) ? (Cm(this.m_gcs, 0, n5), dm2(o2, this.m_gcs, 0, n5, s2)) : n5 = vl(n5, this.m_gcs, 0, true, 0, s2), n5;
    }
    P("Gnomonic.unproject");
  }
  projectPoint(e3) {
    const t2 = e3.mul(this.m_rpu), s2 = ds2(this.m_a, this.m_e2, t2), n5 = this.m_normal.dotProduct(s2);
    if (n5 <= 0) return mi.construct(Number.NaN, Number.NaN);
    const r = this.m_d / n5, i2 = s2.mul(r).sub(this.m_cartCenter3D), o2 = new mi();
    return o2.x = this.m_basisX.dotProduct(i2), o2.y = this.m_basisY.dotProduct(i2), o2;
  }
  unprojectPoint(e3) {
    const t2 = this.m_cartCenter3D.add(this.m_basisX.mul(e3.x).add(this.m_basisY.mul(e3.y)));
    return Ps2(this.m_a, this.m_e2, t2).divide(this.m_rpu);
  }
  projectMultiVertex(e3) {
    const t2 = e3.getImpl();
    let s2 = true;
    const n5 = new mi(), r = new mi();
    for (let i2 = 0, o2 = t2.getPointCount(); i2 < o2; i2++) t2.queryXY(i2, n5), n5.y * this.m_rpu > 0.5 * Math.PI ? r.assign(this.m_northPolePcs) : n5.y * this.m_rpu < 0.5 * -Math.PI ? r.assign(this.m_southPolePcs) : r.assign(this.projectPoint(n5)), t2.setXYNoCurves(i2, r), r.isNAN() && (s2 = false);
    return t2.notifyModifiedFlags(2001), s2;
  }
  unprojectMultiVertex(e3, t2) {
    const s2 = t2.getImpl(), n5 = e3 * e3, r = !this.m_northPolePcs.isNAN(), i2 = !this.m_southPolePcs.isNAN();
    for (let o2 = 0, a2 = s2.getPointCount(); o2 < a2; o2++) {
      const e4 = s2.getXY(o2);
      let t3 = new mi();
      r && mi.sqrDistance(e4, this.m_northPolePcs) <= n5 ? (t3.setCoords(this.m_curvCenterRad.x, 0.5 * Math.PI), t3.scale(1 / this.m_rpu)) : i2 && mi.sqrDistance(e4, this.m_southPolePcs) <= n5 ? (t3.setCoords(this.m_curvCenterRad.x, 0.5 * -Math.PI), t3.scale(1 / this.m_rpu)) : t3 = this.unprojectPoint(e4), s2.setXYNoCurves(o2, t3);
    }
    s2.notifyModifiedFlags(2001);
  }
};
function dm2(e3, t2, n5, r, o2) {
  const a2 = r.getGeometryType(), h2 = t2.getPannableExtent();
  let m2 = r, l2 = false, g = false;
  if (a2 === a.enumPolygon) {
    const r2 = new n3(), i2 = mi.construct(n5, 0);
    r2.setCoords({ env2D: h2 }), r2.centerAt(i2), l2 = pm(e3, t2, r2, m2, o2);
    const a3 = Sm(t2, r2, m2, o2);
    a3 !== m2 && (g = true), m2 = a3;
  } else m2 = new qh2().foldInto360RangeGeodetic(m2, t2, 2);
  a2 === a.enumPolygon && (l2 || g) && (m2 = new Eh().execute(m2, t2, false, o2)), m2 !== r && (r.setEmpty(), r.add(m2, false));
}
function pm(e3, t2, s2, n5, r) {
  const i2 = fm2(s2, n5), o2 = xm(e3, t2, s2, n5, r);
  return i2 || o2;
}
function fm2(e3, t2) {
  const n5 = new n3();
  t2.queryEnvelope(n5);
  const r = Pc(e3.ymax, n5.ymax), i2 = Pc(e3.ymin, n5.ymin), o2 = r || i2;
  return !!o2 && (ym(e3, t2), o2);
}
function xm(e3, t2, s2, n5, r) {
  const i2 = [], o2 = [], a2 = 0.5 * s2.width();
  for (let g = 0; g < n5.getPathCount(); g++) {
    const h3 = n5.getXY(n5.getPathStart(g)), m3 = n5.getXY(n5.getPathEnd(g) - 1), l3 = e3[g] < 0;
    if (Math.abs(h3.x - m3.x) > a2) {
      const e4 = Pm2(l3, t2, s2, g, n5, r);
      i2.push(e4), o2.push(g);
    } else if (!l3) {
      if (n5.calculateRingArea2D(g) < 0) {
        const e4 = Em(t2, s2, g, n5, r);
        i2.push(e4), o2.push(g);
      }
    }
  }
  if (0 === i2.length) return false;
  const h2 = new mr({ vd: n5.getDescription() });
  let m2 = 0, l2 = o2[m2];
  for (let g = 0; g < n5.getPathCount(); g++) g === l2 ? (h2.add(i2[m2], false), m2++, m2 < o2.length && (l2 = o2[m2])) : h2.addPath(n5, g, true);
  return n5.setEmpty(), n5.add(h2, false), true;
}
function ym(e3, t2) {
  const n5 = new mr(), r = new n3();
  for (let s2 = 0; s2 < t2.getPathCount(); s2++) {
    t2.queryPathEnvelope(s2, r);
    let i2 = Pc(e3.ymax, r.ymax), o2 = Pc(e3.ymin, r.ymin);
    if (!(i2 || o2)) {
      n5.addPath(t2, s2, true);
      continue;
    }
    n5.insertPath2D(-1, null, 0, 0, true);
    const a2 = t2.getPathStart(s2), h2 = t2.getPathEnd(s2), m2 = h2 - a2;
    let l2 = -1;
    for (l2 = a2; l2 < h2; l2++) {
      const s3 = t2.getXY(l2);
      if (i2 = Pc(e3.ymax, s3.y), o2 = Pc(e3.ymin, s3.y), !i2 && !o2) break;
    }
    let g = l2, u = false, c = Number.NaN;
    do {
      const r2 = t2.getXY(g);
      i2 = Pc(e3.ymax, r2.y), o2 = Pc(e3.ymin, r2.y);
      const h3 = a2 + (g + 1 - a2) % m2;
      if (i2 || o2) {
        let i3 = mi.construct(c, r2.y);
        n5.insertPoint2D(s2, -1, i3);
        const o3 = t2.getXY(h3), a3 = Pc(e3.ymax, o3.y), m3 = Pc(e3.ymin, o3.y);
        a3 || m3 || (i3 = mi.construct(o3.x, r2.y), u ? n5.setXYNoCurves(n5.getPointCount() - 1, i3) : n5.insertPoint2D(s2, -1, i3)), u = true;
      } else n5.insertPoint2D(s2, -1, r2), c = r2.x, u = false;
      g = h3;
    } while (g !== l2);
  }
  t2.setEmpty(), t2.add(n5, false);
}
function Pm2(e3, t2, n5, r, i2, o2) {
  const a2 = new mr(), h2 = new mr(), m2 = new x2(), l2 = i2.getXY(i2.getPathStart(r)), g = i2.getXY(i2.getPathEnd(r) - 1), u = n5.width(), c = 0.5 * u, _ = new n3();
  i2.queryEnvelope(_);
  const d2 = Math.ceil(_.width() / u) + 1;
  let p3, f3;
  l2.x > g.x ? (p3 = -u, f3 = e3 ? n5.ymin : n5.ymax) : (p3 = u, f3 = e3 ? n5.ymax : n5.ymin), m2.setShiftCoords(p3, 0), a2.addPath(i2, r, true), h2.add(a2, false);
  const x3 = new se();
  for (let s2 = 0; s2 < d2; s2++) h2.applyTransformation(m2), h2.getPointByVal(0, x3), a2.lineToPoint(x3), a2.addSegmentsFromPath(h2, 0, 0, h2.getSegmentCount() - 1, false);
  const y2 = a2.getXY(0), P3 = a2.getXY(a2.getPointCount() - 1);
  y2.y = f3, P3.y = f3, a2.lineTo(P3);
  const E2 = new mi();
  for (E2.setCoordsPoint2D(P3), E2.x -= 0.5 * p3; Math.abs(E2.x - y2.x) > c; ) a2.lineTo(E2), E2.x -= 0.5 * p3;
  a2.lineTo(y2);
  const S2 = n5.getCenter().x, C2 = new n3();
  a2.queryEnvelope(C2);
  let I4 = 0;
  const b2 = C2.getCenter().x;
  b2 - S2 > c ? I4 = -Math.ceil((b2 - S2 - c) / u) : S2 - b2 > c && (I4 = Math.ceil((S2 - b2 - c) / u)), 0 !== I4 && (m2.setShiftCoords(I4 * u, 0), a2.applyTransformation(m2));
  const w2 = new yr(), v2 = w2.addGeometry(a2);
  kl(w2, v2, t2, 0, 2, true, n5.xmin), kl(w2, v2, t2, 0, 2, true, n5.xmax);
  const N2 = w2.getGeometry(v2), G3 = It(N2, n5);
  G3.inflateCoords(0, 1);
  const D = qt2(null, G3, true);
  return f2(N2, n5, D.total(), Number.NaN, o2);
}
function Em(e3, t2, n5, r, i2) {
  const o2 = t2.width(), a2 = 0.5 * o2, h2 = t2.getCenter().x, m2 = new n3();
  r.queryPathEnvelope(n5, m2);
  let l2, g = 0, u = m2.getCenter().x;
  if (u - h2 > a2 ? g = -Math.ceil((u - h2 - a2) / o2) : h2 - u > a2 && (g = Math.ceil((h2 - u - a2) / o2)), 0 !== g) {
    const e4 = new x2();
    e4.setShiftCoords(g * o2, 0), r.getImpl().applyTransformationToPath(e4, n5), r.queryPathEnvelope(n5, m2), u = m2.getCenter().x;
  }
  const c = new n3();
  t2.containsExclusiveEnvelope(m2) ? (l2 = false, c.setCoords({ env2D: t2 })) : (l2 = true, c.setCoords({ env2D: t2 }), c.xmin -= o2, c.xmax += o2);
  let _ = r.createInstance();
  _.addPathPoint2D(null, 0, true);
  const d2 = new mi();
  if (d2.setCoords(c.xmin, c.ymin), _.insertPoint2D(0, -1, d2), d2.setCoords(c.xmin, c.ymax), _.insertPoint2D(0, -1, d2), d2.setCoords(0.5 * (c.xmin + c.xmax), c.ymax), _.insertPoint2D(0, -1, d2), d2.setCoords(c.xmax, c.ymax), _.insertPoint2D(0, -1, d2), d2.setCoords(c.xmax, c.ymin), _.insertPoint2D(0, -1, d2), d2.setCoords(0.5 * (c.xmin + c.xmax), c.ymin), _.insertPoint2D(0, -1, d2), l2) {
    _.addPath(r, n5, true);
    const s2 = new x2();
    u < h2 ? s2.setShiftCoords(o2, 0) : s2.setShiftCoords(-o2, 0), r.getImpl().applyTransformationToPath(s2, n5), _.addPath(r, n5, true);
    const a3 = new yr(), m3 = a3.addGeometry(_);
    kl(a3, m3, e3, 0, 2, true, t2.xmin), kl(a3, m3, e3, 0, 2, true, t2.xmax), _ = a3.getGeometry(m3);
    const l3 = It(_, t2);
    l3.inflateCoords(0, 1);
    const g2 = qt2(null, l3, true).total();
    _ = f2(_, t2, g2, Number.NaN, i2);
  } else _.addPath(r, n5, true);
  return _;
}
function Sm(e3, t2, n5, r) {
  const i2 = new n3();
  n5.queryEnvelope(i2);
  const o2 = zt(null, n5, true).total();
  if (t2.xmin - i2.xmin <= o2 && i2.xmax - t2.xmax <= o2) return n5;
  const a2 = n5.createInstance();
  let h2 = n5.createInstance();
  const m2 = new n3(), l2 = n5.getPathCount();
  for (let s2 = 0; s2 < l2; s2++) n5.queryPathEnvelope(s2, m2), t2.xmin - m2.xmin <= o2 && m2.xmax - t2.xmax <= o2 ? a2.addPath(n5, s2, true) : (h2.setEmpty(), h2.addPath(n5, s2, true), h2 = cm(e3, t2, h2, true, r), a2.add(h2, true));
  return a2;
}
function Cm(e3, t2, s2) {
  const n5 = e3.getPannableExtent(), r = mi.construct(t2, 0);
  n5.centerAt(r);
  const i2 = n5.width(), o2 = 0.5 * i2, a2 = new mi();
  a2.setNAN();
  let h2 = Number.NaN;
  for (let m2 = 0; m2 < s2.getPathCount(); m2++) for (let e4 = s2.getPathStart(m2); e4 < s2.getPathEnd(m2); e4++) {
    const t3 = s2.getXY(e4), r2 = Pc(t3.y, n5.ymax) || Pc(n5.ymin, t3.y);
    e4 === s2.getPathStart(m2) ? (a2.setNAN(), h2 = 0) : a2.isNAN() || r2 || (h2 = Im(t3.x, a2.x, o2, i2, h2)), t3.x += h2, s2.setXYNoCurves(e4, t3), r2 || a2.setCoordsPoint2D(t3);
  }
  s2.getImpl().notifyModifiedFlags(2001);
}
function Im(e3, t2, s2, n5, r) {
  return r + e3 - t2 > s2 ? r -= n5 : t2 - (r + e3) > s2 && (r += n5), r;
}
function bm(e3, t2, s2, n5, r, i2) {
  const o2 = t2.getAttributeStreamRef(0), a2 = t2.getPointCount();
  let h2 = false;
  const m2 = new mi();
  for (let P3 = 0; P3 < a2; ++P3) {
    if (o2.queryPoint2D(2 * P3, m2), 1 & i2 && m2.y >= s2) {
      h2 = true;
      break;
    }
    if (2 & i2 && m2.y <= -s2) {
      h2 = true;
      break;
    }
  }
  if (!h2) return false;
  let l2 = false;
  e3 && (l2 = t2.getImpl().isClosedPathInXYPlane(0));
  const g = new yr(), u = g.addGeometry(t2), c = g.getFirstPath(u);
  let _ = -1, d2 = true;
  const p3 = new mi(), f3 = new se();
  let x3 = gr;
  const y2 = Gm * r / 360;
  for (let P3 = g.getFirstVertex(c); P3 !== gr; P3 = g.getNextVertex(P3)) {
    g.queryXY(P3, m2);
    let e4 = 1 & i2 && m2.y >= s2 ? 1 : 0;
    if (e4 |= 2 & i2 && m2.y <= -s2 ? 2 : 0, _ > 0 && _ !== e4) {
      if (p3.x !== m2.x) {
        const e5 = g.getPrevVertex(P3);
        g.queryPoint(e5, f3);
        const t3 = g.insertVertex(c, P3, f3);
        p3.x = m2.x, g.setXY(t3, p3);
      }
      if (l2) {
        let e5 = x3 !== gr ? g.getNextVertex(x3) : g.getFirstVertex(c);
        const t3 = g.getPrevVertex(P3);
        for (; e5 !== t3; ) e5 = g.removeVertex(e5, false);
        if (x3 !== gr) {
          const e6 = g.getXY(x3), s3 = g.getXY(t3);
          if (Math.abs(e6.x - s3.x) > y2) {
            g.queryPoint(x3, f3);
            const n6 = g.insertVertex(c, t3, f3);
            e6.x = Q(e6.x, s3.x, 0.5), g.setXY(n6, e6);
          }
        }
      }
      x3 = gr;
    }
    if (e4 && (m2.y = B2(n5, m2.y), g.setXY(P3, m2), !d2 && _ !== e4)) if (m2.x !== p3.x) {
      g.queryPoint(P3, f3);
      const e5 = g.insertVertex(c, P3, f3);
      g.setXYCoords(e5, p3.x, m2.y), x3 = e5;
    } else x3 = P3;
    _ = e4, p3.assign(m2), d2 = false;
  }
  if (l2) {
    if (x3 !== gr) {
      let e5 = g.getNextVertex(x3);
      for (; e5 !== gr; ) e5 = g.removeVertex(e5, false);
    }
    const e4 = g.getFirstVertex(c);
    let t3 = g.getLastVertex(c);
    const s3 = g.getXY(e4), n6 = g.getXY(t3);
    if (!s3.equals(n6) && (g.queryPoint(e4, f3), t3 = g.insertVertex(c, gr, f3), Math.abs(s3.x - n6.x) > y2)) {
      const e5 = g.insertVertex(c, t3, f3);
      s3.x = Q(s3.x, n6.x, 0.5), g.setXY(e5, s3);
    }
  }
  return t2.assignCopy(g.getGeometry(u)), true;
}
function wm(e3, t2) {
  let s2 = new mr({ vd: e3 });
  s2.addEnvelope(t2, false);
  const n5 = t2.width() / 180;
  return s2 = new o().execute(s2, n5, 0, 0, null), s2;
}
function vm(e3, t2) {
  const s2 = e3.getPannableExtent();
  return Number.isNaN(t2) || s2.centerAtCoords(t2, 0), s2;
}
function Nm(e3, t2, s2) {
  const n5 = Hu();
  t2.querySpheroidData(n5);
  const r = t2.getGCS() !== t2 ? t2.getSRToGCSTransform() : null, i2 = Ot(mi, 100), o2 = new X(0, 0, 0), a2 = e3.getPointCount(), h2 = t2.getGCS().getUnit().getUnitToBaseFactor();
  for (let u = 0, c = a2; u < c; ) {
    const t3 = Math.min(100, c - u);
    e3.queryCoordinates(i2, t3, u, u + t3), r && new qh2().transform(r, i2, t3, i2, false);
    for (let e4 = 0; e4 < t3; e4++) {
      if (i2[e4].isNAN()) continue;
      i2[e4].scale(h2);
      const t4 = ds2(n5.majorSemiAxis, n5.e2, i2[e4]);
      o2.addThis(t4);
    }
    u += t3;
  }
  const m2 = Ps2(n5.majorSemiAxis, n5.e2, o2);
  m2.scale(1 / h2);
  const l2 = e3;
  if (!new _m(t2.getGCS(), m2).project(l2)) return 0;
  s2.length = e3.getPathCount();
  const g = l2.calculateArea2D() < 0;
  for (let u = 0, c = e3.getPathCount(); u < c; u++) {
    const e4 = l2.calculateRingArea2D(u), t3 = g ? e4 < 0 : e4 > 0;
    s2[u] = t3;
  }
  return g ? -1 : 1;
}
function Tm(e3, t2, s2, n5, r) {
  if (!t2.isPannable() || e3.isEmpty()) return e3;
  const o2 = e3.getGeometryType();
  o2 === a.enumGeometryCollection && z("not yet impl for geometry collection");
  const h2 = t2.getPannableExtent();
  Number.isNaN(s2) && (s2 = h2.getCenterX());
  const m2 = h2.width(), l2 = 0.5 * m2, g = r > 0, u = e3.queryInterval(0, 0);
  if (!g && u.width() < l2 || !y(e3.getGeometryType())) {
    const t3 = u.getCenter();
    if (Math.abs(t3 - s2) <= l2) return e3;
    {
      const n6 = new x2(), r2 = S((s2 - t3) / m2) * m2;
      n6.setShiftCoords(r2, 0);
      const i2 = e3.clone();
      return i2.applyTransformation(n6), i2;
    }
  }
  if (o2 === a.enumPolygon) {
    let i2 = new Qs2({ vd: e3.getDescription() });
    i2.addAndExplicitlyOpenAllPaths(e3, false), g && (i2 = Oh(i2, t2, 2, r, Number.NaN, null, true));
    const o3 = [];
    if (!n5) {
      {
        let s3 = e3;
        g && (s3 = new mr(), s3.add(i2, false));
        const n6 = Nm(e3, t2, o3);
        if (n6) n6 < 0 && i2.reverseAllPaths();
        else {
          const e4 = s3.getPathCount();
          for (let t3 = 0; t3 < e4; t3++) o3.push(s3.calculateRingArea2D(t3) > 0);
        }
      }
      n5 = o3;
    }
    return new Dm(null, n5, i2, null, t2, s2, 3, 0, null).geoNormalizePolygonGeometry(true);
  }
  if (o2 === a.enumPolyline) {
    let n6 = new Qs2({ vd: e3.getDescription() });
    n6.addAndExplicitlyOpenAllPaths(e3, false), g && (n6 = Oh(n6, t2, 2, r, Number.NaN, null, true));
    return new Dm(null, null, n6, null, t2, s2, 3, 0, null).geoNormalizePolylineGeometry(true);
  }
  if (o2 === a.enumMultiPoint) {
    const t3 = e3, n6 = t3.getAttributeStreamRef(0);
    let r2, i2 = null, o3 = s2, a2 = 0;
    const h3 = 0.1 * m2;
    for (let s3 = 0, g2 = t3.getPointCount(); s3 < g2; s3++) {
      const t4 = n6.read(2 * s3);
      let g3 = t4 - o3;
      if (Math.abs(g3) > l2 && (g3 = S(g3 / m2) * m2, a2 -= g3, Math.abs(a2) < h3 && (a2 = 0)), 0 !== a2) {
        i2 || (r2 = e3.clone(), i2 = r2.getAttributeStreamRef(0));
        const n7 = t4 + a2;
        i2.write(2 * s3, n7);
      }
      o3 = t4;
    }
    return i2 ? (r2.notifyModified(), r2) : e3;
  }
  b("");
}
var Gm = 210;
var Dm = class {
  constructor(e3, t2, s2, n5, r, i2, o2, a2, h2) {
    this.m_bAdjustedAtPoles = 0, this.m_inputPoly = s2, this.m_progressTracker = h2, this.m_originalGeometry = e3, this.m_originalSR = n5, this.m_polygonRingFlags = t2, this.m_pannableSR = r, this.m_poleSnappingTolerance = a2, this.m_poleFlags = o2, this.m_bAdjustedAtPoles = 0, this.m_pannableExtent = vm(this.m_pannableSR, i2), this.m_centralLongitude = Number.isNaN(i2) ? this.m_pannableExtent.getCenterX() : i2, this.m_width360 = this.m_pannableExtent.width(), this.m_degree = this.m_width360 / 360, this.m_GCSLargeDelta = Gm * this.m_degree, n(null === this.m_originalGeometry && null === this.m_originalSR || null !== this.m_originalGeometry && null !== this.m_originalSR);
  }
  geonormalizeRing(e3, t2, s2, n5, r, i2, o2) {
    let h2 = s2;
    const m2 = new Qs2({ vd: this.m_inputPoly.getDescription() });
    m2.addPath(this.m_inputPoly, e3, true), 0 !== this.m_poleFlags && (this.m_bAdjustedAtPoles |= bm(true, m2, this.m_pannableExtent.ymax - this.m_poleSnappingTolerance, this.m_pannableExtent.ymax, this.m_pannableExtent.width(), this.m_poleFlags) ? 1 : 0, this.m_bAdjustedAtPoles && (h2 = false));
    let g = -1;
    h2 && (g = this.m_originalGeometry.getPathStart(e3));
    const u = m2.getAttributeStreamRef(0), c = m2.getPointCount();
    let _ = 0, d2 = u.read(0), p3 = 0;
    const f3 = 3 * this.m_pannableSR.getTolerance(0);
    let x3 = false;
    const y2 = new mi(), P3 = new mi();
    let E2 = false;
    const S2 = m2.hasNonLinearSegments(), C2 = new mi();
    for (let l2 = 1; l2 < c; ++l2) {
      u.queryPoint2D(2 * l2, C2);
      const e4 = C2.x;
      let t3 = e4 + _;
      const s3 = t3 - d2;
      if (C2.x = t3, Math.abs(s3) > this.m_GCSLargeDelta) {
        if (h2) {
          const e5 = g + l2 - 1, t4 = g + (l2 + 1 < c ? l2 : 0), r2 = i2.read(2 * e5), o3 = (i2.read(2 * t4) - r2) * n5;
          Math.abs(s3 - o3) > 1 * this.m_degree && (h2 = false);
        }
        if (!h2) {
          _ -= B2(this.m_width360, t3 - d2), t3 = e4 + _, ++p3, E2 = 0 !== _, C2.x = t3;
        }
      } else x3 || Nt(y2, P3, C2, f3) && (x3 = true);
      E2 && (S2 && b("error in geonormalize_ring_ for curves"), u.write(2 * l2, t3)), d2 = t3, y2.setCoordsPoint2D(P3), P3.setCoordsPoint2D(C2);
    }
    p3 && m2.notifyModified();
    const I4 = m2.getXY(0), b2 = m2.getXY(c - 1);
    if (mi.distance(I4, b2) < f3) {
      const e4 = this.finalizeGeoNormalizeClosedRing(m2, x3, r);
      o2.add(e4, false);
    } else {
      if (t2 < 0) if (null !== this.m_originalGeometry) {
        n(null !== this.m_originalGeometry);
        t2 = this.m_originalGeometry.calculateRingArea2D(e3) > 0 ? 1 : 0;
      } else t2 = 1;
      const s3 = this.finalizeGeoNormalizeOpenedRing(t2 > 0, m2);
      o2.add(s3, false);
    }
  }
  geoNormalizePolygonGeometry(e3) {
    n(this.m_originalSR && this.m_originalGeometry || !this.m_originalGeometry && !this.m_originalSR), n(this.m_pannableSR.isPannable());
    let t2 = null, n5 = Number.NaN;
    const r = !!this.m_originalSR && this.m_originalSR.isPannable();
    r && (t2 = this.m_originalGeometry.getAttributeStreamRef(0), n5 = this.m_width360 / this.m_originalSR.getPannableExtent().width()), this.m_bAdjustedAtPoles = 0;
    const i2 = new mr({ vd: this.m_inputPoly.getDescription() });
    for (let s2 = 0, l2 = this.m_inputPoly.getPathCount(); s2 < l2; ++s2) {
      const o3 = this.m_polygonRingFlags ? this.m_polygonRingFlags[s2] ? 1 : 0 : -1;
      this.geonormalizeRing(s2, o3, r, n5, e3, t2, i2);
    }
    const o2 = this.m_pannableSR.getTolerance(0), a2 = this.m_pannableExtent.width() / 180;
    Ol(i2, this.m_pannableExtent, 0.1 * o2, false);
    const h2 = n3.constructEmpty();
    if (h2.setCoords({ env2D: this.m_pannableExtent }), e3) {
      let e4 = true;
      for (let t3 = 0; t3 < 2; t3++) {
        e4 = true;
        const t4 = n3.constructEmpty();
        for (let s2 = 0, n6 = i2.getPathCount(); s2 < n6; s2++) if (i2.queryPathEnvelope(s2, t4), !(h2.xmin <= t4.xmin && h2.xmax >= t4.xmax || t4.xmin >= h2.xmax || t4.xmax <= h2.xmin)) {
          e4 = false;
          break;
        }
        if (e4) break;
        h2.move(0.5 * this.m_width360, 0);
      }
      e4 || h2.setCoords({ env2D: this.m_pannableExtent });
    }
    let m2 = f2(i2, h2, o2, a2, this.m_progressTracker), g = i2 !== m2;
    const u = this.m_originalGeometry ? this.m_originalGeometry.calculateArea2D() : 1, c = m2.calculateArea2D();
    let _ = 0;
    if (c > 0 && u < 0) _ = 1;
    else if (c <= 0 && u > 0) if (0 === c) {
      if (this.m_originalSR) {
        let e4 = Number.NaN;
        2 === this.m_originalSR.getCoordinateSystemType() ? e4 = this.m_originalSR.getPCSHorizon().calculateArea2D() : 1 === this.m_originalSR.getCoordinateSystemType() && (e4 = this.m_originalSR.getPannableExtent().getArea()), u > 0.99 * e4 && (_ = -1);
      }
    } else _ = -1;
    if (0 !== _) {
      const e4 = wm(m2.getDescription(), h2);
      e4.add(m2, false), g = true, m2 = e4;
    }
    return g && (m2 = new Eh().execute(m2, this.m_pannableSR, false, this.m_progressTracker)), m2;
  }
  geoNormalizePolylineGeometry(e3) {
    n(this.m_pannableSR.isPannable());
    let t2 = null;
    const n5 = this.m_originalSR && this.m_originalSR.isPannable();
    let r = 1;
    n5 && (n(this.m_originalGeometry), r = this.m_width360 / this.m_originalSR.getPannableExtent().width(), t2 = this.m_originalGeometry.getAttributeStreamRef(0));
    const i2 = this.m_pannableExtent.width(), o2 = i2 * Qs() * 4;
    let h2 = e3, m2 = Number.NaN;
    const g = x.constructEmpty();
    this.m_bAdjustedAtPoles = 0;
    let u = new Qs2({ vd: this.m_inputPoly.getDescription() });
    for (let d2 = 0, p3 = this.m_inputPoly.getPathCount(); d2 < p3; ++d2) {
      let e4 = n5;
      const c2 = new Qs2({ vd: this.m_inputPoly.getDescription() });
      c2.addPath(this.m_inputPoly, d2, true);
      const _2 = this.m_inputPoly.isClosedPath(d2);
      0 !== this.m_poleFlags && (this.m_bAdjustedAtPoles |= bm(_2, c2, this.m_pannableExtent.ymax - this.m_poleSnappingTolerance, this.m_pannableExtent.ymax, i2, this.m_poleFlags) ? 1 : 0, this.m_bAdjustedAtPoles && (e4 = false));
      let p4 = -1;
      const f3 = c2.getPointCount();
      let x3 = false;
      e4 && (p4 = this.m_originalGeometry.getPathStart(d2), x3 = this.m_originalGeometry.isClosedPath(d2));
      const y2 = c2.getAttributeStreamRef(0);
      let P3 = 0, E2 = y2.read(0), S2 = 0;
      const C2 = new mi(), I4 = new mi();
      let b2 = false;
      const v2 = c2.hasNonLinearSegments(), N2 = new mi();
      for (let s2 = 1; s2 < f3; ++s2) {
        y2.queryPoint2D(2 * s2, N2);
        const n6 = N2.x;
        let i3 = n6 + P3;
        const o3 = i3 - E2;
        if (N2.x = i3, Math.abs(o3) > this.m_GCSLargeDelta) {
          if (e4) {
            const n7 = p4 + s2 - 1;
            let i4 = p4;
            (!x3 || s2 + 1 < f3) && (i4 += s2);
            const a2 = t2.read(2 * n7), h3 = (t2.read(2 * i4) - a2) * r;
            Math.abs(o3 - h3) > 1 * this.m_degree && (e4 = false);
          }
          if (!e4) {
            P3 -= B2(this.m_width360, i3 - E2), i3 = n6 + P3, ++S2, b2 = 0 !== P3, N2.x = i3;
          }
        }
        b2 && (v2 && b("error in geonormalize_ring_ for curves"), y2.write(2 * s2, i3)), E2 = i3, C2.setCoordsPoint2D(I4), I4.setCoordsPoint2D(N2);
      }
      if (S2 && c2.notifyModified(), h2) {
        let e5 = false;
        if (!c2.isEmpty()) {
          const t3 = n3.constructEmpty();
          if (c2.queryEnvelope(t3), t3.width() >= i2 || t3.ymin <= this.m_pannableExtent.ymin || t3.ymax >= this.m_pannableExtent.ymax) e5 = true;
          else {
            if (Number.isNaN(m2)) {
              const e6 = this.m_centralLongitude - 0.5 * i2;
              m2 = t3.xmin, m2 += Math.round((e6 - t3.xmin) / i2) * i2, m2 > e6 && (m2 -= i2), n(m2 <= e6), m2 < e6 && (m2 += i2), n(m2 >= e6);
            }
            let s2 = Math.round((m2 - t3.xmin) / i2) * i2;
            if (t3.xmin + s2 > m2 + o2 && (s2 -= i2), t3.xmin + s2 < m2 - o2 && (s2 += i2), g.mergeCoordinate(t3.xmin + s2), g.mergeCoordinate(t3.xmax + s2), e5 = g.width() >= i2, !e5) {
              const e6 = new x2();
              e6.setShiftCoords(s2, 0), c2.applyTransformation(e6);
            }
          }
        }
        u.add(c2, false), e5 && (u = (() => {
          const e6 = new Qs2({ vd: u.getDescription() });
          for (let t3 = 0, s2 = u.getPathCount(); t3 < s2; ++t3) {
            const s3 = new Qs2({ vd: u.getDescription() });
            s3.addPath(u, t3, true);
            const n6 = vl(s3, this.m_pannableSR, this.m_centralLongitude, true, 0, this.m_progressTracker);
            e6.add(n6, false);
          }
          return e6;
        })(), h2 = false);
      } else {
        const e5 = vl(c2, this.m_pannableSR, this.m_centralLongitude, true, 0, this.m_progressTracker);
        u.add(e5, false);
      }
    }
    if (h2) return u;
    const c = this.m_pannableSR.getTolerance(0), _ = this.m_pannableExtent.width() / 180;
    Ol(u, this.m_pannableExtent, 0.1 * c, false);
    return f2(u, this.m_pannableExtent, c, _, this.m_progressTracker);
  }
  finalizeGeoNormalizeOpenedRing(e3, t2) {
    const n5 = t2.getPointCount(), r = t2.getXY(0), i2 = t2.getXY(n5 - 1);
    {
      const e4 = Math.abs(i2.x - r.x), t3 = Math.round(e4 / this.m_width360) * this.m_width360;
      n(Math.abs(e4 - t3) < this.m_pannableSR.getTolerance(0));
    }
    const o2 = K(i2.x - r.x), a2 = n3.constructEmpty();
    t2.queryLooseEnvelope(a2);
    const h2 = this.m_pannableExtent.getCenterX();
    let m2 = 0, g = h2 - this.m_width360, u = h2 + this.m_width360;
    if (o2 >= 0) {
      let e4 = Math.ceil((g - a2.xmin) / this.m_width360);
      for (e4 *= this.m_width360; g > a2.xmin + e4; ) e4 += this.m_width360;
      for (; g < a2.xmax + e4; ) e4 -= this.m_width360;
      for (m2 = e4, a2.width() > 720 && (u = g + 360 * Math.ceil(a2.width() / 360)); u < a2.xmax; ) u += this.m_width360;
    } else {
      let e4 = Math.ceil((u - a2.xmax) / this.m_width360);
      for (e4 *= this.m_width360; u < a2.xmax + e4; ) e4 -= this.m_width360;
      for (; u > a2.xmin + e4; ) e4 += this.m_width360;
      for (m2 = e4, a2.width() > 720 && (g = u - 360 * Math.ceil(a2.width() / 360)); g > a2.xmin; ) g -= this.m_width360;
    }
    const c = Math.round(Math.abs(i2.x - r.x) / this.m_width360) * this.m_width360, _ = o2 * c, d2 = a2.clone();
    d2.move(m2, 0);
    const p3 = new mi(0, 0), f3 = new x2();
    f3.setShiftCoords(m2, 0), t2.applyTransformation(f3);
    const x3 = new Qs2({ vd: t2.getDescription() });
    x3.add(t2, false), p3.assign(t2.getXY(n5 - 1));
    let y2 = 0, P3 = x3.getXY(0).x;
    for (; o2 > 0 ? d2.xmax < u : d2.xmin > g; ) d2.move(_, 0), f3.xd = _, t2.applyTransformation(f3), P3 += _, this.m_pannableExtent.xmin <= P3 && this.m_pannableExtent.xmax >= P3 && (y2 = x3.getPointCount() - 1), t2.setXY(0, p3), p3.assign(t2.getXY(n5 - 1)), x3.addSegmentsFromPath(t2, 0, 0, n5 - 1, false);
    const E2 = new mr({ vd: x3.getDescription() });
    E2.add(x3, false);
    const S2 = x3.getXY(0), C2 = x3.getXY(x3.getPointCount() - 1), I4 = o2 < 0 ? e3 : !e3, b2 = E2.getPointCount() - 1;
    if (I4) {
      const e4 = new mi(C2.x, this.m_pannableExtent.ymax);
      E2.lineTo(e4);
      const t3 = new mi(this.m_pannableExtent.getCenterX(), this.m_pannableExtent.ymax);
      E2.lineTo(t3);
      const s2 = new mi(S2.x, this.m_pannableExtent.ymax);
      E2.lineTo(s2);
    } else {
      const e4 = new mi(C2.x, this.m_pannableExtent.ymin);
      E2.lineTo(e4);
      const t3 = new mi(this.m_pannableExtent.getCenterX(), this.m_pannableExtent.ymin);
      E2.lineTo(t3);
      const s2 = new mi(S2.x, this.m_pannableExtent.ymin);
      E2.lineTo(s2);
    }
    if (E2.interpolateAttributesPath(0, b2, 0), E2.getImpl().changeRingStartPoint(y2), c > this.m_width360) {
      const e4 = new mr({ copy: E2 });
      f3.setShiftCoords(this.m_width360, 0), e4.applyTransformation(f3), E2.add(e4, false);
    }
    return E2;
  }
  finalizeGeoNormalizeClosedRing(e3, t2, n5) {
    const r = new mr({ vd: e3.getDescription() });
    r.add(e3, false);
    const o2 = () => {
      const e4 = r.getPointCount() - 2;
      return r.getSegmentType(e4) !== a.enumLine;
    };
    if (r.hasNonLinearSegments() && o2()) {
      const e4 = new Pm(), t3 = r.getPointCount() - 2;
      r.getSegmentBuffer(t3, e4, false), r.removePointFromPath(0, t3 + 1), r.closeLastPathWithSegment(e4.get());
    } else r.removePointFromPath(0, r.getPointCount() - 1);
    const a2 = n3.constructEmpty();
    r.queryLooseEnvelope(a2);
    let h2 = Math.ceil((this.m_pannableExtent.xmin - a2.xmin) / this.m_width360);
    for (h2 *= this.m_width360; this.m_pannableExtent.xmin > a2.xmin + h2; ) h2 += this.m_width360;
    for (; this.m_pannableExtent.xmin < a2.xmax + h2; ) h2 -= this.m_width360;
    if (h2 += this.m_width360, 0 !== h2) {
      a2.move(h2, 0);
      const e4 = new x2();
      e4.setShiftCoords(h2, 0), r.applyTransformation(e4);
    }
    if (this.m_pannableExtent.xmin <= a2.xmin && this.m_pannableExtent.xmax >= a2.xmax) {
      if (t2) {
        const e5 = r.calculateArea2D(), t3 = new Eh().execute(r, this.m_pannableSR, true, this.m_progressTracker);
        if (t3 !== r) {
          const s2 = t3.calculateArea2D();
          K(e5) !== K(s2) && t3.reverseAllPaths(), r.assignMove(t3);
        }
      }
      let e4;
      if (e4 = new mr(n5 ? { copy: r } : { move: r }), n5) for (; a2.xmin < this.m_pannableExtent.xmax; ) {
        a2.move(this.m_width360, 0);
        const t3 = new x2();
        t3.setShiftCoords(this.m_width360, 0), r.applyTransformation(t3), e4.add(r, false);
      }
      return e4;
    }
    let m2 = new mr({ vd: e3.getDescription() });
    m2.add(r, false);
    const l2 = t2 || a2.width() > this.m_width360 - 10 * this.m_pannableSR.getTolerance(0);
    for (; a2.xmin < this.m_pannableExtent.xmax; ) {
      a2.move(this.m_width360, 0);
      const e4 = new x2();
      e4.setShiftCoords(this.m_width360, 0), r.applyTransformation(e4), m2.add(r, false);
    }
    if (l2) {
      const e4 = m2.calculateArea2D();
      m2.setFillRule(1), m2 = new Eh().execute(m2, this.m_pannableSR, true, this.m_progressTracker);
      const t3 = m2.calculateArea2D();
      K(e4) !== K(t3) && m2.reverseAllPaths();
    }
    return m2;
  }
  geonormalize_ring_(e3, t2, s2, n5, r, i2, o2) {
    n(0);
  }
};
function Vm(e3) {
  n(0);
  const t2 = ou(e3), s2 = new km();
  return s2.setVertProj_(t2), s2;
}
function Fm(e3, t2 = true) {
  return n(0), {};
}
function Hm(e3) {
  return Su();
}
var km = class {
  constructor() {
    this.m_hashCode = 0, this.m_peVertSysVal = null, this.m_verticalUnit = new bu(), this.m_verticalShift = 0, this.m_userVerticalWKID = 0, this.m_bIsDepth = false;
  }
  getType() {
    return n(0), 0;
  }
  getID() {
    return n(0), 0;
  }
  getLatestID() {
    return this.m_peVertSysVal ? this.m_peVertSysVal.getLatestID() : 0;
  }
  getOldID() {
    return this.m_peVertSysVal ? this.m_peVertSysVal.getOldID() : 0;
  }
  getText() {
    return n(0), "";
  }
  getTextExtended(e3) {
    return n(0), "";
  }
  getText2(e3) {
    return n(0), "";
  }
  getUnit() {
    return n(0), {};
  }
  equals(e3) {
    return n(0), false;
  }
  equalForProjection(e3) {
    return n(0), false;
  }
  getPeVertcsCopy() {
    return n(0), {};
  }
  getOneMeter() {
    return 1 / this.m_verticalUnit.getUnitToBaseFactor();
  }
  getUnitToBaseFactor() {
    return n(0), 0;
  }
  isDepth() {
    return n(0), false;
  }
  getVerticalShift() {
    return n(0), 0;
  }
  isCustomWkid() {
    return !!this.m_peVertSysVal && this.m_peVertSysVal.isCustomWkid();
  }
  getHashCode() {
    return this.m_hashCode;
  }
  setVertProj_(e3) {
    this.m_peVertSysVal = e3;
  }
  getPEVerticalCoordSys() {
    return this.m_peVertSysVal ? this.m_peVertSysVal.m_peVertcs : null;
  }
};
function Am(e3, t2, s2, n5, r) {
  if (e3.equals(t2)) return false;
  if (n5) {
    let s3 = 1, i3 = 0, o3 = 1, a2 = 1, h2 = 0, m2 = 1;
    Number.isNaN(e3.m_heightMetersPerUnit) || (s3 = e3.m_heightMetersPerUnit, i3 = e3.m_heightZ0, o3 = e3.m_heightSign, a2 = t2.m_heightMetersPerUnit, h2 = t2.m_heightZ0, m2 = t2.m_heightSign);
    const l2 = o3 * m2 * s3 / a2;
    for (let e4 = 0; e4 < r; e4++) n5[e4] = (n5[e4] - i3) * l2 + h2;
  }
  let i2 = 1, o2 = 0;
  if (Number.isNaN(e3.m_XYToRadians) || (i2 = e3.m_XYToRadians / t2.m_XYToRadians, o2 = e3.m_PrimeMeridianDegrees - t2.m_PrimeMeridianDegrees, 0 !== o2 && (o2 = Th(o2), o2 /= t2.m_XYToRadians)), Array.isArray(s2)) {
    const e4 = s2;
    for (let t3 = 0; t3 < r; t3++) e4[t3][0] = e4[t3][0] * i2 + o2, e4[t3][1] = e4[t3][1] * i2;
  } else {
    const e4 = s2;
    for (let t3 = 0; t3 < r; t3++) {
      const s3 = t3 << 1;
      e4[s3] = e4[s3] * i2 + o2, e4[s3 + 1] = e4[s3 + 1] * i2;
    }
  }
  return true;
}
function Mm() {
  return { m_heightMetersPerUnit: 0, m_heightSign: 0, m_heightZ0: 0, m_XYToRadians: 0, m_PrimeMeridianDegrees: 0, assign(e3) {
    this.m_heightMetersPerUnit = e3.m_heightMetersPerUnit, this.m_heightSign = e3.m_heightSign, this.m_heightZ0 = e3.m_heightZ0, this.m_XYToRadians = e3.m_XYToRadians, this.m_PrimeMeridianDegrees = e3.m_PrimeMeridianDegrees;
  }, equals(e3) {
    return ls(this.m_heightSign, e3.m_heightSign) && ls(this.m_heightMetersPerUnit, e3.m_heightMetersPerUnit) && ls(this.m_heightZ0, e3.m_heightZ0) && ls(this.m_XYToRadians, e3.m_XYToRadians) && ls(this.m_PrimeMeridianDegrees, e3.m_PrimeMeridianDegrees);
  }, initFromGcsAndVcsPe(e3, t2) {
    this.m_heightSign = 1, this.m_heightMetersPerUnit = Number.NaN, this.m_heightZ0 = 0, this.m_XYToRadians = Number.NaN, this.m_PrimeMeridianDegrees = Number.NaN, t2 && n(0), e3 && (this.m_XYToRadians = e3.getUnit().getUnitFactor(), this.m_PrimeMeridianDegrees = e3.getPrimem().getLongitude());
  }, initFromGcsAndVcs(e3, t2) {
    const s2 = e3 ? e3.getPECoordSys() : null, n5 = t2 ? t2.getPEVerticalCoordSys() : null;
    this.initFromGcsAndVcsPe(s2, n5);
  }, processUnitParams(e3) {
    Number.isNaN(this.m_heightMetersPerUnit) && (this.m_heightMetersPerUnit = e3.m_heightMetersPerUnit, this.m_heightSign = e3.m_heightSign, this.m_heightZ0 = e3.m_heightZ0), Number.isNaN(this.m_XYToRadians) && (this.m_XYToRadians = e3.m_XYToRadians, this.m_PrimeMeridianDegrees = e3.m_PrimeMeridianDegrees);
  } };
}
var Um = class {
  constructor(e3) {
    this.m_constantsLoaded = -1, this.m_isUsable = -1, this.m_inputSR = null, this.m_outputSR = null, this.m_inputSRHorz = null, this.m_outputSRHorz = null, this.m_inputVCS = null, this.m_outputVCS = null, this.m_hashCode = 0, this.m_areaOfUse = new he(), this.m_inputUnitParams = Mm(), this.m_outputUnitParams = Mm(), n(e3), this.m_geogTran = e3, this.m_vertTran = null, this.m_latestID = Ic.getCode(this.m_geogTran), this.m_latestID < 0 && (this.m_latestID = 0);
    const t2 = this.m_geogTran.getGeogcs1();
    Ic.getCode(t2);
    const s2 = this.m_geogTran.getGeogcs2();
    Ic.getCode(s2), this.initUnitParams();
  }
  getLatestId() {
    return this.m_latestID;
  }
  getText() {
    return this.m_geogTran ? this.m_geogTran.toString() : (n(0), "");
  }
  getGeogtran() {
    return this.m_geogTran;
  }
  getVerttran() {
    return null;
  }
  loadConstants(e3) {
    let t2 = this.m_constantsLoaded;
    if (-1 === t2) {
      if (!e3) {
        this.m_geogTran || b("vcs not impl");
        const t3 = this.m_geogTran.getParameters();
        null !== t3[bc.PE_PARM_ND] && (e3 = 0 === t3[bc.PE_PARM_ND].getValue());
      }
      t2 = this.m_geogTran.loadConstants() ? 1 : 0, this.m_constantsLoaded = t2;
    }
    return 0 !== t2;
  }
  isUsable() {
    let e3 = this.m_isUsable;
    return -1 === e3 && (this.m_geogTran ? this.m_isUsable = e3 = this.m_geogTran ? 1 : 0 : this.m_isUsable = e3 = this.m_vertTran ? 1 : 0), 1 === e3;
  }
  getInputSr(e3) {
    return this.updateSrs(), e3 ? this.m_inputSR : this.m_inputSRHorz;
  }
  getOutputSr(e3) {
    return this.updateSrs(), e3 ? this.m_outputSR : this.m_outputSRHorz;
  }
  getHashCode() {
    let e3 = this.m_hashCode;
    return 0 === e3 && (e3 = this.m_latestID > 0 ? Zs(this.m_latestID) : Ds(this.getText()), 0 === e3 && (e3 = 345), this.m_hashCode = e3), e3;
  }
  isGeogtran() {
    return null !== this.m_geogTran;
  }
  prepareOrThrow() {
  }
  getName() {
    return this.isGeogtran() ? this.getGeogtran().getName() : (z("vcs not impl"), "");
  }
  updateSrs() {
    if (this.m_inputSR || this.m_inputVCS) return;
    let e3, t2, s2, n5, r, i2;
    if (this.m_geogTran) {
      const o2 = this.m_geogTran.getGeogcs1(), a2 = ru(o2), h2 = this.m_geogTran.getGeogcs2(), m2 = ru(h2);
      let l2 = -1, g = -1;
      l2 = a2.getVcsCode(), g = m2.getVcsCode(), s2 = Ru(o2, null, null, 1), n5 = Ru(h2, null, null, 1), l2 > 0 && g > 0 ? (r = Vm(l2), i2 = Vm(g), e3 = zu(), t2 = zu()) : (e3 = s2, t2 = n5);
    } else n(0);
    this.m_inputSR || this.m_inputVCS || (this.m_inputSR = e3, this.m_outputSR = t2, this.m_inputSRHorz = s2, this.m_outputSRHorz = n5, this.m_inputVCS = r, this.m_outputVCS = i2);
  }
  initUnitParams() {
    if (this.m_inputUnitParams.m_heightSign = 1, this.m_inputUnitParams.m_heightMetersPerUnit = Number.NaN, this.m_inputUnitParams.m_heightZ0 = 0, this.m_outputUnitParams.m_heightSign = 1, this.m_outputUnitParams.m_heightMetersPerUnit = Number.NaN, this.m_outputUnitParams.m_heightZ0 = 0, this.m_inputUnitParams.m_XYToRadians = Number.NaN, this.m_inputUnitParams.m_PrimeMeridianDegrees = Number.NaN, this.m_outputUnitParams.m_XYToRadians = Number.NaN, this.m_outputUnitParams.m_PrimeMeridianDegrees = Number.NaN, this.m_vertTran) n(0);
    else if (this.m_geogTran) {
      const e3 = this.m_geogTran;
      let t2 = e3.getGeogcs1();
      this.m_inputUnitParams.m_XYToRadians = t2.getUnit().getUnitFactor(), this.m_inputUnitParams.m_PrimeMeridianDegrees = t2.getPrimem().getLongitude(), t2 = e3.getGeogcs2(), this.m_outputUnitParams.m_XYToRadians = t2.getUnit().getUnitFactor(), this.m_outputUnitParams.m_PrimeMeridianDegrees = t2.getPrimem().getLongitude();
    }
  }
};
function qm(e3, t2, s2, n5, r, i2, o2) {
  let a2 = null;
  if (t2) {
    a2 = t2.getPEVerticalCoordSys();
  }
  let h2 = null;
  if (e3) {
    h2 = e3.getPECoordSys();
  }
  let m2 = null;
  if (n5) {
    m2 = n5.getPEVerticalCoordSys();
  }
  let l2 = null;
  if (s2) {
    l2 = s2.getPECoordSys();
  }
  if (!(h2 || a2 || l2 || m2)) return false;
  const g = Mm();
  g.initFromGcsAndVcsPe(h2, a2);
  const u = Mm();
  return u.initFromGcsAndVcsPe(l2, m2), Am(g, u, r, i2, o2);
}
function Bm(e3, t2, s2, n5, r, i2, o2, a2) {
  const h2 = t2, m2 = e3, l2 = Mm();
  l2.initFromGcsAndVcsPe(m2, h2), a2.assign(n5 ? s2.m_outputUnitParams : s2.m_inputUnitParams), a2.processUnitParams(l2), l2.processUnitParams(a2), o2 > 0 && Am(l2, a2, r, i2, o2);
}
function Om(e3, t2, s2, n5, r, i2, o2, a2) {
  const h2 = Mm();
  h2.assign(s2 ? t2.m_inputUnitParams : t2.m_outputUnitParams), h2.processUnitParams(e3);
  let m2 = null, l2 = null;
  if (n5) {
    l2 = n5.getPECoordSys();
  }
  const g = Mm();
  g.initFromGcsAndVcsPe(l2, m2), g.processUnitParams(h2), h2.processUnitParams(g), a2 > 0 && Am(h2, g, i2, o2, a2);
}
function Ym(e3, t2, s2, n5, r, i2, o2, a2, h2) {
  const m2 = Mm(), l2 = Mm();
  m2.assign(s2 ? t2.m_inputUnitParams : t2.m_outputUnitParams), l2.assign(r ? n5.m_outputUnitParams : n5.m_inputUnitParams), m2.processUnitParams(e3), l2.processUnitParams(m2), m2.processUnitParams(l2), a2 > 0 && Am(m2, l2, i2, o2, a2), h2.assign(l2);
}
function Rm(e3, t2, s2, n5, r, i2, o2) {
  const a2 = t2.getVerttran(), h2 = t2.getGeogtran();
  if (o2.assign(s2 ? t2.m_inputUnitParams : t2.m_outputUnitParams), o2.processUnitParams(e3), i2 > 0) {
    t2.prepareOrThrow();
    const e4 = s2 ? bc.PE_TRANSFORM_2_TO_1 : bc.PE_TRANSFORM_1_TO_2;
    a2 ? dg() : pg(h2, i2, n5, r, e4);
  }
}
function Xm(e3, t2, s2, n5, r) {
  const i2 = e3.getVerttran(), o2 = e3.getGeogtran();
  if (r > 0) {
    e3.prepareOrThrow();
    const a2 = t2 ? bc.PE_TRANSFORM_2_TO_1 : bc.PE_TRANSFORM_1_TO_2;
    i2 ? dg() : pg(o2, r, s2, n5, a2);
  }
}
var Lm = class {
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e3, t2, s2) {
    return zm(e3, t2, s2);
  }
  canAccelerateGeometry(e3) {
    return Wm(e3);
  }
};
function zm(e3, t2, s2) {
  if (!Wm(e3)) return false;
  St2(t2, e3, false);
  let n5 = 0;
  const r = e3.getGeometryType();
  return h(r) && Rs(e3) && 0 !== s2 && (n5 |= e3.getImpl().buildQuadTreeAccelerator(s2) ? 1 : 0), h(r) && zs2(e3) && 0 !== s2 && (n5 |= e3.getImpl().buildQuadTreeForPathsAccelerator(s2) ? 1 : 0), n5 > 0;
}
function Wm(e3) {
  return Rs(e3) || zs2(e3);
}
var jm = class extends Lm {
  getOperatorType() {
    return 8;
  }
  execute(e3, t2, s2, n5) {
    return kr(e3, t2, s2, 1, n5);
  }
};
function Zm(e3, t2, r, a2) {
  if (e3.isEmpty() || t2.isEmpty()) return e3;
  const h2 = e3.getDimension(), m2 = t2.getDimension();
  if (h2 > m2) return e3;
  const l2 = e3.getGeometryType(), g = t2.getGeometryType(), u = new n3(), c = new n3(), _ = new n3();
  e3.queryEnvelope(u), t2.queryEnvelope(c), _.setCoords({ env2D: u }), _.mergeEnvelope2D(c);
  const d2 = qt2(r, _, true), p3 = Pt2(d2), f3 = new n3();
  if (f3.setCoords({ env2D: u }), f3.inflateCoords(p3, p3), !f3.isIntersecting(c)) return e3;
  if (1 === h2 && 2 === m2) {
    const s2 = ol(e3, t2, g, r, a2);
    if (s2) return s2;
  }
  if (l2 === a.enumPoint) {
    let s2;
    switch (f(g) ? (s2 = new Qs2({ vd: t2.getDescription() }), s2.addSegment(t2, true)) : s2 = t2, g) {
      case a.enumPolygon:
        return Jm(e3, s2, d2);
      case a.enumPolyline:
        return $m(e3, s2, d2);
      case a.enumMultiPoint:
        return el(e3, s2, d2);
      case a.enumEnvelope:
        return tl(e3, s2, d2);
      case a.enumPoint:
        return sl(e3, s2, d2);
      default:
        P("invalid shape type");
    }
  } else if (l2 === a.enumMultiPoint) switch (g) {
    case a.enumPolygon:
      return nl(e3, t2, d2);
    case a.enumEnvelope:
      return rl(e3, t2, d2);
    case a.enumPoint:
      return il(e3, t2, d2);
  }
  const x3 = new n3(u);
  x3.inflate(100 * d2.total());
  return Ya(e3, f2(t2, x3, 0, 0, a2), r, a2);
}
var Km = class {
  getOperatorType() {
    return 10002;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e3, t2, s2) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  executeMany(e3, t2, s2, n5) {
    return new Qm(e3, t2, s2, n5);
  }
  execute(e3, t2, s2, n5) {
    return this.executeMany(new t([e3]), new t([t2]), s2, n5).next();
  }
};
var Qm = class extends s {
  constructor(e3, t2, s2, n5) {
    super(), this.m_progressTracker = n5, this.m_index = -1, this.m_inputGeoms = e3, this.m_spatialReference = s2;
    const r = t2.next();
    this.m_geomSubtractor = r || new mr();
  }
  next() {
    const e3 = this.m_inputGeoms.next();
    return e3 ? (j(e3), L(e3), this.m_index = this.m_inputGeoms.getGeometryID(), Zm(e3, this.m_geomSubtractor, this.m_spatialReference, this.m_progressTracker)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
function Jm(e3, t2, s2, n5) {
  return 0 === Xo(t2, e3, s2.total()) ? e3 : e3.createInstance();
}
function $m(e3, t2, n5, r) {
  const i2 = e3.getXY(), o2 = t2.querySegmentIterator(), a2 = Pt2(n5), h2 = a2 * a2;
  for (; o2.nextPath(); ) for (; o2.hasNextSegment(); ) {
    const t3 = o2.nextSegment(), r2 = new n3();
    if (t3.queryEnvelope(r2), r2.inflateCoords(a2, a2), !r2.contains(i2)) continue;
    if (t3.isIntersectingPoint(i2, n5.total())) return e3.createInstance();
    let m2 = t3.getStartXY();
    if (mi.sqrDistance(i2, m2) <= h2) return e3.createInstance();
    if (m2 = t3.getEndXY(), mi.sqrDistance(i2, m2) <= h2) return e3.createInstance();
  }
  return e3;
}
function el(e3, t2, s2, n5) {
  const r = t2.getImpl().getAttributeStreamRef(0), i2 = t2.getPointCount(), o2 = e3.getXY(), a2 = Pt2(s2), h2 = a2 * a2, m2 = new mi();
  for (let l2 = 0; l2 < i2; l2++) {
    r.queryPoint2D(2 * l2, m2);
    if (mi.sqrDistance(m2, o2) <= h2) return e3.createInstance();
  }
  return e3;
}
function tl(e3, t2, n5, r) {
  const i2 = new n3();
  t2.queryEnvelope(i2), i2.inflate(n5.total());
  const o2 = e3.getXY();
  return i2.contains(o2) ? e3.createInstance() : e3;
}
function sl(e3, t2, s2, n5) {
  const r = Pt2(s2), i2 = r * r, o2 = e3.getXY(), a2 = t2.getXY();
  return mi.sqrDistance(o2, a2) <= i2 ? e3.createInstance() : e3;
}
function nl(e3, t2, n5, r) {
  const i2 = new n3();
  t2.queryEnvelope(i2), i2.inflate(n5.total());
  const o2 = e3.getPointCount();
  let a2 = false;
  const h2 = Yt(o2, false), m2 = new mi();
  for (let s2 = 0; s2 < o2; s2++) {
    if (e3.queryXY(s2, m2), !i2.contains(m2)) continue;
    0 !== Lo(t2, m2, n5.total()) && (a2 = true, h2[s2] = true);
  }
  if (!a2) return e3;
  const l2 = e3.createInstance();
  for (let s2 = 0; s2 < o2; s2++) h2[s2] || l2.addPoints(e3, s2, s2 + 1);
  return l2;
}
function rl(e3, t2, n5, r) {
  const i2 = new n3();
  t2.queryEnvelope(i2), i2.inflate(n5.total());
  const o2 = e3.getPointCount();
  let a2 = false;
  const h2 = Yt(o2, false), m2 = new mi();
  for (let s2 = 0; s2 < o2; s2++) e3.queryXY(s2, m2), i2.contains(m2) && (a2 = true, h2[s2] = true);
  if (!a2) return e3;
  const l2 = e3.createInstance();
  for (let s2 = 0; s2 < o2; s2++) h2[s2] || l2.addPoints(e3, s2, s2 + 1);
  return l2;
}
function il(e3, t2, s2, n5) {
  const r = e3.getImpl().getAttributeStreamRef(0), i2 = e3.getPointCount(), o2 = t2.getXY();
  let a2 = false;
  const h2 = Yt(i2, false), m2 = Pt2(s2), l2 = m2 * m2, g = new mi();
  for (let c = 0; c < i2; c++) {
    r.queryPoint2D(2 * c, g);
    mi.sqrDistance(g, o2) <= l2 && (a2 = true, h2[c] = true);
  }
  if (!a2) return e3;
  const u = e3.createInstance();
  for (let c = 0; c < i2; c++) h2[c] || u.addPoints(e3, c, c + 1);
  return u;
}
function ol(e3, t2, n5, r, o2) {
  const a2 = new he();
  e3.queryEnvelope(a2);
  const h2 = new n3();
  t2.queryEnvelope(h2), a2.merge(h2);
  const m2 = 0.1 * a2.width(), l2 = 0.1 * a2.height();
  a2.inflateCoords(m2, l2);
  const g = new mr();
  g.addEnvelope(a2, false);
  const u = g.getImpl();
  if (n5 === a.enumPolygon) {
    const e4 = t2.getImpl();
    u.add(e4, true);
  } else u.addEnvelope(t2, true);
  return new Ih2(g, r, -1, o2).tryFastImplementation(e3);
}
var al = class {
  getOperatorType() {
    return 10001;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e3, t2, s2) {
    return false;
  }
  canAccelerateGeometry(e3) {
    return false;
  }
  executeMany(e3, t2, s2, n5 = 0) {
    return new gl(e3, t2, s2, n5);
  }
  execute(e3, t2, s2, n5) {
    const r = new t([e3, t2]), i2 = new gl(r, s2, n5, 0).next();
    return i2 || b("null output"), i2;
  }
};
function hl() {
  return { geom: null, vertexCount: -1, bUnioned: false, location: new mi() };
}
function ml(e3, t2) {
  return mi.compareZorder(e3.location, t2.location) ? -1 : e3.location.equals(t2.location) ? 0 : 1;
}
var ll = class {
  constructor() {
    this.binVertexCount = 0, this.geometries = [];
  }
  addPair(e3) {
    this.binVertexCount += e3.vertexCount, this.geometries.push(e3);
  }
  sort() {
    this.geometries.sort((e3, t2) => ml(e3, t2));
  }
  geomCount() {
    return this.geometries.length;
  }
  geomPairs() {
    return this.geometries;
  }
  clear() {
    this.binVertexCount = 0, this.geometries.length = 0;
  }
  getBinVertexCount() {
    return this.binVertexCount;
  }
};
var gl = class _gl extends s {
  constructor(e3, t2, s2, n5, r = false) {
    super(), this.m_index = -1, this.m_currentDim = -1, this.m_bDone = false, this.m_unionBins = [], this.m_readyGeoms = Vt(4), this.m_dimGeomCounts = Yt(4, 0), this.m_addedGeoms = 0, this.m_maxDimension = -1, this.m_bHadGeometry = Yt(4, false), this.m_complexUnionGeoms = Vt(4), this.m_totalNonEmptyGeomCounters = Yt(4, 0), this.m_progressTracker = s2, this.m_bUnionAllDimensions = !!(4 & n5), this.m_bPreserveAllPathEnds = !!(8 & n5), this.m_inputGeoms = e3, this.m_spatialReference = t2, this.m_options = n5, this.m_bIs3D = r;
  }
  next() {
    if (this.m_bDone && this.m_currentDim === this.m_maxDimension) return null;
    for (; !this.step_(); ) ;
    if (-1 === this.m_maxDimension) return null;
    if (this.m_bUnionAllDimensions) {
      if (-1 === this.m_currentDim) {
        for (let e3 = 0; e3 <= this.m_maxDimension; e3++) if (this.m_bHadGeometry[e3]) {
          this.m_complexUnionGeoms[e3] = this.getResultGeometry(e3);
          for (let t2 = e3 + 1; t2 <= this.m_maxDimension; t2++) this.m_complexUnionGeoms[t2] = this.getResultGeometry(t2), this.m_bHadGeometry[t2] && !this.m_complexUnionGeoms[t2].isEmpty() && (this.m_bIs3D ? n(0) : this.m_complexUnionGeoms[e3] = new Km().execute(this.m_complexUnionGeoms[e3], this.m_complexUnionGeoms[t2], this.m_spatialReference, this.m_progressTracker));
        }
      }
      for (; this.m_currentDim++, (this.m_currentDim > this.m_maxDimension || this.m_currentDim < 0) && b(""), !this.m_bHadGeometry[this.m_currentDim]; ) ;
      if (this.m_index++, 0 === this.m_currentDim && this.m_complexUnionGeoms[this.m_currentDim].getGeometryType() === a.enumPoint) {
        const e3 = new De({ vd: this.m_complexUnionGeoms[this.m_currentDim].getDescription() });
        return this.m_complexUnionGeoms[this.m_currentDim].isEmpty() || e3.add(this.m_complexUnionGeoms[this.m_currentDim]), e3;
      }
      return this.m_complexUnionGeoms[this.m_currentDim];
    }
    return this.m_index = 0, this.m_currentDim = this.m_maxDimension, this.getResultGeometry(this.m_maxDimension);
  }
  getGeometryID() {
    return this.m_index;
  }
  getRank() {
    return 1;
  }
  tock() {
    return this.step_();
  }
  getResultGeometry(e3) {
    return this.m_readyGeoms[e3];
  }
  finishDim(e3, t2, s2) {
    let n5 = t2;
    if (!s2) return 16 & this.m_options ? (n5 = ja([n5], 1, this.m_spatialReference, this.m_progressTracker, this.m_options, this.m_bIs3D), n5) : n5;
    if (1 & this.m_options) return n5;
    if (1 === e3) {
      if (!(8 & this.m_options) && (!!(16 & this.m_options) || this.m_totalNonEmptyGeomCounters[e3] > 1)) {
        n5 = ja([n5], 1, this.m_spatialReference, this.m_progressTracker, 16 | this.m_options, this.m_bIs3D);
        const e4 = [0], t3 = n5.getImpl().getIsSimple(0, e4);
        n(this.m_bIs3D || Yt2(t3));
      } else 1 === this.m_totalNonEmptyGeomCounters[e3] && (this.m_bIs3D ? n(0) : n5 = new Eh().execute(n5, this.m_spatialReference, false, this.m_progressTracker));
    } else this.m_bIs3D ? n(0) : n5 = new Eh().execute(n5, this.m_spatialReference, false, this.m_progressTracker);
    if (0 === e3 && n5.getGeometryType() === a.enumPoint) {
      const e4 = new De({ vd: n5.getDescription() });
      n5.isEmpty() || e4.add(n5), n5 = e4;
    }
    return n5;
  }
  static getLevel(e3) {
    const t2 = 4, s2 = w(e3);
    let n5 = s2 > 0 ? (Math.log(s2) - Math.log(32)) / Math.log(t2) : 0;
    return n5 < 0 && (n5 = 0), Math.floor(n5);
  }
  step_() {
    if (this.m_bDone) return true;
    let e3;
    if (this.m_inputGeoms ? (e3 = this.m_inputGeoms.next(), null === e3 ? (this.m_bDone = true, this.m_inputGeoms = null) : (this.checkAndThrow(e3), e3.isEmpty() || this.m_totalNonEmptyGeomCounters[e3.getDimension()]++)) : e3 = null, null !== e3) {
      const t2 = e3.getDimension();
      this.m_bHadGeometry[t2] = true, (t2 >= this.m_maxDimension || this.m_bUnionAllDimensions) && (this.addGeom(t2, false, e3), t2 > this.m_maxDimension && !this.m_bUnionAllDimensions && this.removeAllBinsWithLowerDimension(t2));
    }
    if (this.m_addedGeoms > 0) for (let t2 = 0; t2 <= this.m_maxDimension; t2++) {
      for (; this.m_dimGeomCounts[t2] > 1; ) {
        const e4 = this.collectGeometriesToUnion(t2);
        if (null === e4) break;
        {
          let s2;
          s2 = 1 & this.m_options ? ja(e4, e4.length, this.m_spatialReference, this.m_progressTracker, this.m_options, this.m_bIs3D) : Za(e4, e4.length, this.m_spatialReference, this.m_progressTracker, 8 | this.m_options, this.m_bIs3D), this.addGeom(t2, true, s2);
        }
      }
      if (this.m_bDone && (n(this.m_dimGeomCounts[t2] <= 1), 0 !== this.m_dimGeomCounts[t2])) {
        const e4 = this.m_unionBins[t2].entries().next().value, s2 = e4[1].geomPairs()[0].geom, n5 = e4[1].geomPairs()[0].bUnioned;
        this.m_unionBins[t2].clear(), this.m_readyGeoms[t2] = this.finishDim(t2, s2, n5);
      }
    }
    return this.m_bDone;
  }
  addGeom(e3, t2, n5) {
    const r = hl();
    r.geom = n5;
    const i2 = w(n5);
    r.vertexCount = i2;
    const o2 = n3.constructEmpty();
    n5.queryEnvelope(o2), r.location = i2 > 0 ? o2.getCenter() : new mi(0, 0);
    const a2 = _gl.getLevel(n5);
    if (e3 + 1 > this.m_unionBins.length) for (; this.m_unionBins.length < Math.max(2, e3 + 1); ) this.m_unionBins.push(/* @__PURE__ */ new Map());
    let h2 = null;
    const m2 = this.m_unionBins[e3].get(a2);
    m2 && (h2 = m2), null === h2 && (h2 = new ll(), this.m_unionBins[e3].set(a2, h2)), r.bUnioned = t2, h2.addPair(r), this.m_dimGeomCounts[e3]++, this.m_addedGeoms++, this.m_maxDimension = Math.max(this.m_maxDimension, e3);
  }
  removeAllBinsWithLowerDimension(e3) {
    for (let t2 = 0; t2 < e3; t2++) this.m_unionBins[t2].clear(), this.m_addedGeoms -= this.m_dimGeomCounts[t2], this.m_dimGeomCounts[t2] = 0;
  }
  collectGeometriesToUnion(e3) {
    if (1 & this.m_options && !this.m_bDone) return null;
    let t2 = null;
    const s2 = [];
    for (const n5 of this.m_unionBins[e3].keys()) s2.push(n5);
    qt(s2);
    for (let n5 = 0; n5 < s2.length; n5++) {
      if (-1 === s2[n5]) continue;
      const r = this.m_unionBins[e3].get(s2[n5]);
      {
        const i2 = 5e3, o2 = 4, a2 = r.getBinVertexCount() > i2 && r.geomCount() >= o2;
        if (this.m_bDone || a2) {
          for (let r2 = 0; r2 < n5; r2++) {
            if (-1 === s2[r2]) continue;
            const n6 = this.m_unionBins[e3].get(s2[r2]);
            n6.sort(), this.m_dimGeomCounts[e3] -= n6.geomCount(), this.m_addedGeoms -= n6.geomCount();
            for (const e4 of n6.geomPairs()) t2 || (t2 = new Array()), t2.push(e4.geom);
            n6.clear(), this.m_unionBins[e3].delete(s2[r2]), s2[r2] = -1;
          }
          r.sort(), this.m_dimGeomCounts[e3] -= r.geomCount(), this.m_addedGeoms -= r.geomCount();
          for (const e4 of r.geomPairs()) t2 || (t2 = new Array()), t2.push(e4.geom);
          if (r.clear(), this.m_unionBins[e3].delete(s2[n5]), s2[n5] = -1, !this.m_bDone) break;
        }
      }
    }
    return t2;
  }
  checkAndThrow(e3) {
    this.m_bIs3D && (e3.getDimension() > 1 && B(), e3.hasAttribute(1) || P("Geometry must have Zs")), j(e3);
  }
};
var ul = class extends Lm {
  getOperatorType() {
    return 3;
  }
  execute(e3, t2, s2, n5 = null) {
    return kr(e3, t2, s2, 4, n5);
  }
};
function cl(e3, t2, n5) {
  const r = t2.getGCSSplitLines();
  if (null === r) return e3;
  const i2 = t2.getGCS(), o2 = i2.getPannableExtent().width(), a2 = n3.constructEmpty();
  e3.queryLooseEnvelope(a2);
  const h2 = x.constructEmpty();
  a2.queryIntervalX(h2);
  const m2 = r.querySegmentIterator();
  let l2 = null;
  const g = new x2();
  for (; m2.nextPath(); ) for (; m2.hasNextSegment(); ) {
    const e4 = m2.nextSegment(), t3 = e4.queryInterval(0, 0), s2 = x.constructEmpty();
    s2.setCoordsFromEnvelope(t3);
    let n6 = 0;
    for (; s2.vmax > h2.vmin; ) s2.move(-o2), n6--;
    for (; s2.vmin <= h2.vmax; ) {
      if (s2.isIntersecting(h2)) {
        null === l2 && (l2 = new Qs2());
        const t4 = new fm({ start: e4.getStartXY(), end: e4.getEndXY() });
        0 !== n6 && (g.setShiftCoords(n6 * o2, 0), t4.applyTransformation(g)), l2.addSegment(t4, true);
      }
      s2.move(o2), ++n6;
    }
  }
  if (null !== l2) {
    const t3 = zt(i2, l2, true);
    return Un(e3, l2, Pt2(t3), n5);
  }
  return e3;
}
function _l(e3, t2, s2) {
  let n5 = e3.getName();
  return sc(n5) || (s2 || t2 > 0 ? (n5 = e3.toString(bc.PE_STR_NAME_CANON | bc.PE_STR_AUTH_NONE), n5 = yl(n5)) : n5 = e3.toString(bc.PE_STR_AUTH_TOP)), n5;
}
function dl(e3, t2, s2, n5) {
  return n(0), "";
}
function pl(e3, t2 = -1) {
  if ((t2 > 1 || t2 < -1) && P("verbosity"), -1 === t2) return e3.toString();
  {
    const s2 = 0 === t2 ? bc.PE_STR_AUTH_TOP : bc.PE_STR_AUTH_ALL;
    return e3.toString(s2);
  }
}
function fl(e3, t2) {
  (t2 > 1 || t2 < -1) && P("verbosity");
  let s2 = bc.PE_STR_FMT_WKT2;
  return -1 !== t2 && (s2 |= 0 === t2 ? bc.PE_STR_AUTH_TOP : bc.PE_STR_AUTH_ALL), e3.toString(s2);
}
function xl(e3) {
  return n(0), "";
}
function yl(e3) {
  return e3.toLocaleUpperCase("en-US");
}
function Pl(e3, t2, s2) {
  const r = e3.getPCSHorizon();
  if (r.getGeometryType() === a.enumPolygon) {
    const n5 = e3.getDefaultPrecisionSR().getTolerance(0), i2 = r;
    for (let e4 = 0; e4 < s2; e4++) 1 !== Lo(i2, t2[e4], n5) && t2[e4].setNAN();
    return;
  }
  if (r.getGeometryType() === a.enumEnvelope) {
    const e4 = r;
    for (let n5 = 0; n5 < s2; n5++) e4.contains(t2[n5]) || t2[n5].setNAN();
    return;
  }
  P("");
}
function El(e3, t2, s2, n5) {
  for (let r = 0; r < t2; r++) {
    if (e3[r].y < s2.ymin || e3[r].y > s2.ymax) {
      e3[r].setNAN();
      continue;
    }
    const t3 = e3[r].x;
    e3[r].x = Gl(t3, s2, n5);
  }
}
function Sl(e3, t2, n5, r) {
  if (e3.isEmpty() || 1 === n5) return e3;
  const o2 = e3.getGeometryType();
  if (o2 === a.enumPoint) {
    const s2 = e3, r2 = s2.getXY();
    return 0 === wl([r2], 1, t2, n5) || r2.isNAN() ? s2.setEmpty() : s2.setXY(r2), e3;
  }
  if (o2 === a.enumMultiPoint) {
    const s2 = e3, r2 = e3.createInstance(), i2 = s2.getPointCount();
    r2.reserve(i2);
    const o3 = s2.getAttributeStreamRef(0), a2 = s2.getDescription().getAttributeCount() > 1, h2 = new se(), m3 = Float64Array.from(o3.getArray());
    if (wl(m3, i2, t2, n5) > 0) for (let e4 = 0, t3 = 2 * i2; e4 < t3; e4 += 2) Number.isNaN(m3[e4]) || (a2 ? (s2.getPointByVal(e4 >> 1, h2), h2.setXYCoords(m3[e4], m3[e4 + 1]), r2.add(h2)) : r2.addXY(m3[e4], m3[e4 + 1]));
    return r2;
  }
  let m2 = e3;
  const l2 = t2.getOneDegreeGCSUnit(), g = 90 * l2, u = 180 * l2, c = 360 * l2, _ = t2.getCentralMeridian(), d2 = 0.5 * l2, p3 = n3.constructEmpty();
  m2.queryEnvelope(p3);
  const f3 = t2.getGCSHorizon(), x3 = t2.getGCSHorisonIsInclusive(), y2 = f3.getGeometryType() === a.enumEnvelope, P3 = n3.constructEmpty();
  f3.queryEnvelope(P3);
  const E2 = t2.getGCS();
  if (2 !== n5 && 4 !== n5 || (P3.xmin = _ - u, P3.xmax = P3.xmin + c), 4 === n5) {
    if (!(p3.width() > c - l2)) {
      const e4 = n3.constructEmpty();
      e4.setCoords({ xmin: p3.xmin - l2, ymin: P3.ymin, xmax: p3.xmax + l2, ymax: P3.ymax }), m2 = new I3().execute(m2, e4, E2, r);
      let t3 = Math.floor((_ - p3.getCenterX()) / c);
      for (p3.move(t3 * c, 0); p3.xmin > P3.xmax; ) t3 -= 1, p3.move(-c, 0);
      for (; p3.xmin < P3.xmin; ) t3 += 1, p3.move(c, 0);
      if (0 !== t3) {
        const e5 = new x2();
        e5.setShiftCoords(t3 * c, 0), m2.applyTransformation(e5);
      }
      return m2;
    }
    n5 = 2;
  }
  if (2 === n5 && (P3.xmin = _ - u, P3.xmax = P3.xmin + c), p3.ymin < -g || p3.ymax > g) {
    const e4 = n3.constructEmpty();
    if (e4.setCoords({ xmin: p3.xmin - l2, ymin: -g, xmax: p3.xmax + l2, ymax: g }), m2 = new I3().execute(m2, e4, E2, r), m2.isEmpty()) return m2;
    m2.queryEnvelope(p3);
  }
  if (x3 && (P3.ymax < p3.ymin || P3.ymin > p3.ymax)) return m2.createInstance();
  p3.width() > c && (m2 = ql(m2, _ - u, c, E2, true, 0, true, r), m2.queryEnvelope(p3));
  let S2 = Ul(p3.xmin, p3.xmax, P3.xmin, P3.xmax, c);
  if (0 !== S2 && p3.move(S2, 0), p3.xmax > P3.xmax || p3.xmin < P3.xmin) {
    if (p3.xmax > P3.xmax) for (; p3.xmin >= P3.xmax; ) p3.move(-c, 0), S2 -= c;
    for (; p3.xmin < P3.xmax - c; ) p3.move(c, 0), S2 += c;
  }
  const C2 = St2(E2, f3, false);
  if (0 !== S2) {
    const e4 = new x2();
    e4.setShiftCoords(S2, 0), m2.applyTransformation(e4), S2 = 0;
  }
  if (x3) {
    if (y2 && P3.containsEnvelope(p3)) return m2;
    const e4 = new Array(2);
    for (let t3 = 0; t3 < 2; t3++) {
      let s2;
      if (y2 ? s2 = h(o2) ? f2(m2, P3, C2, d2, r) : f2(m2, P3, C2, 0, r) : (s2 = new wh().execute(m2, f3, E2, r), s2 === f3 && (s2 = s2.clone())), P3.xmin <= p3.xmin && P3.xmax >= p3.xmax) return s2;
      if (P3.xmin >= p3.xmin && P3.xmax <= p3.xmax) return s2;
      if (e4[t3] = s2, 0 === t3) {
        p3.move(-c, 0);
        const e5 = new x2();
        e5.setShiftCoords(-c, 0), m2.applyTransformation(e5);
      }
    }
    return h(o2) ? e4[0].add(e4[1], false) : b("intersect_with_GCS_horizon: unexpected geometry type"), e4[0];
  }
  {
    if (P3.ymax < p3.ymin || P3.ymin > p3.ymax) return m2;
    let e4 = 0;
    for (; !m2.isEmpty() && p3.xmax > P3.xmin; ) {
      if (0 !== e4) {
        const t3 = new x2();
        t3.setShiftCoords(e4, 0), m2.applyTransformation(t3);
      }
      if (!new ul().execute(m2, f3, E2, r)) {
        m2 = new Km().execute(m2, f3, E2, r), f3 === m2 && (m2 = m2.clone());
      }
      if (0 !== e4) {
        const t3 = new x2();
        t3.setShiftCoords(-e4, 0), m2.applyTransformation(t3);
      }
      e4 -= c, p3.move(-c, 0);
    }
    return m2;
  }
}
function Cl(s2, n5, r, i2, o2, a2) {
  const h2 = { stack: [], error: void 0, hasError: false };
  try {
    if (2 === a2) {
      return Gs(s2, n5, r, i2, o2);
    }
    if (Math.abs(r.x - i2.x) >= Math.PI || !Fg(r.x, i2.x, o2)) return Number.NaN;
    r.x > i2.x && (i2 = Pt(r, r = i2));
    const t2 = __addDisposableResource(h2, new Cc(), false), m2 = __addDisposableResource(h2, new Cc(), false), l2 = __addDisposableResource(h2, new Cc(), false), g = r.clone();
    Dc.geodeticDistance(s2, n5, r.x, r.y, i2.x, i2.y, m2, t2, null, a2);
    const u = m2.val;
    let c = 0, _ = 1;
    for (; u * (_ - c) > 1e-12 * s2; ) {
      const e3 = 0.5 * (c + _);
      if (Dc.geodeticCoordinate(s2, n5, r.x, r.y, u * e3, t2.val, m2, l2, a2), g.x = m2.val, g.y = l2.val, g.x === o2) return g.y;
      if (Fg(r.x, g.x, o2)) _ = e3;
      else {
        if (!Fg(i2.x, g.x, o2)) return Number.NaN;
        c = e3;
      }
    }
    return g.y;
  } catch (m2) {
    h2.error = m2, h2.hasError = true;
  } finally {
    __disposeResources(h2);
  }
}
function Il(e3, t2) {
  let s2;
  if (Array.isArray(e3)) {
    const n5 = e3;
    s2 = new Float64Array(2 * t2);
    for (let e4 = 0, r = 0; e4 < t2; e4++, r += 2) s2[r] = n5[e4].x, s2[r + 1] = n5[e4].y;
  } else s2 = e3;
  return s2;
}
function bl(e3, t2, s2, n5) {
  for (let r = 0, i2 = 0; r < n5; r++, i2 += 2) t2[s2 + r].x = e3[i2], t2[s2 + r].y = e3[i2 + 1];
}
function wl(e3, t2, n5, r) {
  if (0 === t2 || 1 === r) return t2;
  const o2 = Il(e3, t2);
  if (2 === r) {
    const s2 = n5.getPannableExtentInGCS();
    let r2 = t2;
    for (let e4 = 0, n6 = 2 * t2; e4 < n6; e4 += 2) (o2[e4 + 1] > s2.ymax || o2[e4 + 1] < s2.ymin) && (o2[e4] = Number.NaN, r2--);
    return r2 ? (Bl(o2, t2, s2.xmin, s2.width(), true), e3 !== o2 && bl(o2, e3, 0, t2), r2) : (e3 !== o2 && bl(o2, e3, 0, t2), 0);
  }
  const a2 = n5.getOneDegreeGCSUnit(), h2 = 90 * a2, m2 = 180 * a2, l2 = 360 * a2;
  let g = t2;
  for (let s2 = 0, i2 = 2 * t2; s2 < i2; s2 += 2) (o2[s2 + 1] > h2 || o2[s2 + 1] < -h2) && (o2[s2] = Number.NaN, g--);
  if (!g) return e3 !== o2 && bl(o2, e3, 0, t2), 0;
  const u = n3.constructEmpty();
  u.setFromPoints(o2, t2);
  const c = n5.getGCSHorizon(), _ = n5.getGCSHorisonIsInclusive(), d2 = c.getGeometryType() === a.enumEnvelope, p3 = n3.constructEmpty();
  if (c.queryEnvelope(p3), _ && (p3.ymax < u.ymin || p3.ymin > u.ymax)) return e3 !== o2 && bl(o2, e3, 0, t2), 0;
  if (_) {
    if (Bl(o2, t2, p3.getCenterX() - m2, l2, true), g = t2, d2) for (let e4 = 0, s2 = 2 * t2; e4 < s2; e4 += 2) p3.containsCoords(o2[e4], o2[e4 + 1]) || (o2[e4] = Number.NaN, g--);
    else {
      const e4 = St2(n5.getGCS(), c, false), s2 = new mi();
      for (let n6 = 0, r2 = 2 * t2; n6 < r2; n6 += 2) {
        s2.setCoords(o2[n6], o2[n6 + 1]);
        0 !== Lo(c, s2, e4) || (o2[n6] = Number.NaN, g--);
      }
    }
  } else {
    Bl(o2, t2, -m2, l2, true), g = t2;
    const e4 = St2(n5.getGCS(), c, false), s2 = new mi();
    for (let n6 = 0, r2 = 2 * t2; n6 < r2; n6 += 2) {
      s2.setCoords(o2[n6], o2[n6 + 1]), s2.isNAN() && g--;
      const t3 = Ml(s2.x, p3.xmin, p3.xmax, l2);
      s2.x += t3;
      0 !== Lo(c, s2, e4) && (o2[n6] = Number.NaN, g--);
    }
  }
  return e3 !== o2 && bl(o2, e3, 0, t2), g;
}
function vl(e3, t2, s2, r, i2, o2) {
  if (t2.isPannable() || P("fold_into_360_degree_range"), e3.isEmpty()) return e3;
  let a2, h2;
  if (2 === t2.getCoordinateSystemType()) {
    const e4 = t2.getPannableExtent();
    h2 = e4.xmin, a2 = e4.width();
  } else {
    const e4 = t2.getOneDegreeGCSUnit();
    a2 = 360 * e4, h2 = s2 - 180 * e4;
  }
  return ql(e3, h2, a2, t2, r, i2, true, o2);
}
function Nl(e3, t2, s2, n5) {
  let r, i2;
  if (2 === s2.getCoordinateSystemType()) {
    const e4 = s2.getPannableExtent();
    r = e4.xmin, i2 = e4.width();
  } else {
    const e4 = s2.getOneDegreeGCSUnit();
    i2 = 360 * e4, r = n5 - 180 * e4;
  }
  Bl(e3, t2, r, i2);
}
function Tl(e3, t2) {
  const s2 = t2.width();
  let n5 = ct(e3 - t2.vmin, s2);
  n5 < 0 && (n5 += s2);
  return t2.snapClip(n5 + t2.vmin);
}
function Gl(e3, t2, s2) {
  return e3 > t2.xmax && e3 - t2.xmax < s2 ? t2.xmax : e3 < t2.xmin && t2.xmin - e3 < s2 ? t2.xmin : e3;
}
function Dl(e3, t2, s2) {
  if (e3[0] < t2.vmin || e3[0] > t2.vmax || s2 && e3[0] === t2.vmax) {
    const s3 = t2.width();
    return e3[0] += Math.ceil((t2.vmin - e3[0]) / s3) * s3, e3[0] = t2.snapClip(e3[0]), true;
  }
  return false;
}
function Vl(e3, t2, s2, n5, r, i2, o2, a2, h2) {
  return new Dm(e3, null, s2, t2, n5, r, o2, a2, i2).geoNormalizePolygonGeometry(h2);
}
function Fl(e3, t2, s2, n5, r, i2, o2, a2, h2) {
  return new Dm(e3, null, s2, t2, n5, r, o2, a2, i2).geoNormalizePolylineGeometry(h2);
}
function Hl(e3, t2, s2, n5, r) {
  const i2 = new yr(), o2 = i2.addGeometry(e3);
  return kl(i2, o2, t2, St2(t2, e3, false), s2, n5, r), i2.getGeometry(o2);
}
function kl(s2, n5, r, i2, o2, a2, h2) {
  const m2 = { stack: [], error: void 0, hasError: false };
  try {
    n(Uu()), r.isPannable() || C("insert_geodetic_points");
    const t2 = r.getPannableExtent(), g = r.getGCS(), u = Hu();
    g.querySpheroidData(u);
    const c = g.getUnit().getUnitToBaseFactor(), _ = u.majorSemiAxis, d2 = u.e2;
    let f3 = 0;
    const x3 = new x();
    t2.queryIntervalX(x3);
    let y2 = null;
    const P3 = Yt(4, Number.NaN);
    2 === r.getCoordinateSystemType() ? (y2 = r.getPECoordSys(), a2 ? (P3[0] = Tl(h2, x3), P3[1] = t2.getCenterY(), wc.projToGeog(y2, 1, P3), f3 = P3[0] * c) : (P3[0] = t2.getCenterX(), P3[1] = h2, wc.projToGeog(y2, 1, P3), f3 = P3[1] * c)) : f3 = h2 * c, a2 || 0 === f3 || 2 === o2 || C("insert_geodetic_points: 1");
    const E2 = __addDisposableResource(m2, new Cc(), false), S2 = new mi(), C2 = new mi(), I4 = new mi(), b2 = new mi(), w2 = new mi(), v2 = new mi();
    for (let e3 = s2.getFirstPath(n5); e3 !== gr; e3 = s2.getNextPath(e3)) {
      const t3 = s2.getFirstVertex(e3);
      s2.queryXY(t3, I4);
      let n6 = false;
      const m3 = s2.getNextVertex(t3);
      for (let e4 = m3; e4 !== gr; e4 = s2.getNextVertex(e4)) {
        if (e4 === m3) {
          if (n6) break;
          n6 = true;
        }
        if (s2.queryXY(e4, b2), a2 && (i2 < h2 - I4.x && b2.x - h2 > i2 || i2 < h2 - b2.x && I4.x - h2 > i2) || !a2 && (0 !== h2 || i2 < -I4.y && b2.y > i2 || i2 < -b2.y && I4.y > i2)) do {
          if (Math.abs(I4.x - b2.x) >= 0.5 * x3.width()) break;
          2 === r.getCoordinateSystemType() ? (P3[0] = Tl(I4.x, x3), P3[1] = I4.y, P3[2] = Tl(b2.x, x3), P3[3] = b2.y, ag(y2, 2, P3, 0), w2.x = P3[0] * c, w2.y = P3[1] * c, v2.y = P3[3] * c) : (w2.x = I4.x * c, w2.y = I4.y * c, v2.y = b2.y * c), v2.x = (b2.x - I4.x) * Math.PI * 2 / x3.width() + w2.x;
          let t4 = 0;
          const n7 = Ot(mi, 2);
          if (a2) {
            if (C2.x = f3, C2.y = Cl(_, d2, w2, v2, f3, o2), Number.isNaN(C2.y)) break;
            n7[0] = C2, t4 = 1;
          } else if (2 === o2) {
            const e5 = [0, 0];
            if (t4 = Ds2(_, d2, w2, v2, f3, e5), !t4) break;
            n7[0].x = e5[0], n7[0].y = f3, 2 === t4 && (n7[1].x = e5[1], n7[1].y = f3);
          } else {
            if (C2.x = Hg(_, d2, w2, v2, o2), Number.isNaN(C2.x)) break;
            C2.y = 0, n7[0] = C2, t4 = 1;
          }
          let i3 = -1;
          for (let m4 = 0; m4 < t4; m4++) {
            Dc.geodeticDistance(_, d2, w2.x, w2.y, v2.x, v2.y, E2, null, null, o2);
            const t5 = E2.val;
            Dc.geodeticDistance(_, d2, w2.x, w2.y, n7[m4].x, n7[m4].y, E2, null, null, o2);
            const l2 = E2.val;
            2 === r.getCoordinateSystemType() ? (P3[0] = n7[m4].x / c, P3[1] = n7[m4].y / c, wc.geogToProj(y2, 1, P3), a2 ? (S2.y = P3[1], S2.x = h2) : (S2.x = kg(P3[0], I4.x, b2.x, x3), S2.y = h2)) : a2 ? (S2.x = h2, S2.y = n7[m4].y / c) : (S2.x = kg(n7[m4].x / c, I4.x, b2.x, x3), S2.y = h2);
            const g2 = t5 > 0 ? Us(l2 / t5, 0, 1) : 0.5;
            if (0 === g2 || 1 === g2) continue;
            if (i3 > g2) continue;
            const u2 = s2.getPrevVertex(e4);
            s2.splitSegment(u2, [g2], 1);
            const p3 = s2.getNextVertex(u2);
            s2.setXYCoords(p3, S2.x, S2.y), i3 = g2;
          }
        } while (0);
        I4.setCoordsPoint2D(b2);
      }
    }
  } catch (g) {
    m2.error = g, m2.hasError = true;
  } finally {
    __disposeResources(m2);
  }
}
function Al(e3, t2) {
  n(t2.isPannable());
  const n5 = t2.getPannableExtent();
  if (e3.getGeometryType() === a.enumPoint) {
    const t3 = e3.getY();
    return n5.ymin <= t3 && t3 <= n5.ymax ? e3 : e3.createInstance();
  }
  const r = n3.constructEmpty();
  e3.queryEnvelope(r);
  const o2 = n3.constructEmpty();
  o2.setCoords({ env2D: n5 }), o2.xmin = r.xmin, o2.xmax = r.xmax, o2.inflateCoords(0.01 * o2.height(), 0);
  const a2 = Lt(t2, r, false);
  let h2;
  return h2 = o2.containsEnvelope(r) ? e3 : f2(e3, o2, a2, 0, null), h2;
}
function Ml(e3, t2, s2, n5) {
  return S((0.5 * (s2 + t2) - e3) / n5) * n5;
}
function Ul(e3, t2, s2, n5, r) {
  if (e3 >= s2 && t2 <= n5) return 0;
  return Ml(0.5 * (t2 + e3), s2, n5, r);
}
function ql(e3, t2, n5, r, o2, a2, h2, m2) {
  const l2 = e3.getGeometryType(), g = x.constructEmpty();
  g.setCoords(t2, t2 + n5);
  const u = [0];
  if (l2 === a.enumPoint) {
    const t3 = e3;
    if (u[0] = t3.getX(), Dl(u, g, h2)) {
      const t4 = o2 ? e3 : e3.clone();
      return t4.setX(u[0]), t4;
    }
    return e3;
  }
  const c = n3.constructEmpty();
  if (e3.queryEnvelope(c), c.isEmpty()) return e3;
  if (l2 === a.enumMultiPoint) {
    const t3 = o2 ? e3 : e3.clone(), s2 = t3.getImpl(), n6 = s2.getAttributeStreamRef(0), r2 = 2 * s2.getPointCount();
    let i2 = false;
    for (let e4 = 0; e4 < r2; e4 += 2) u[0] = n6.read(e4), Dl(u, g, h2) && (n6.write(e4, u[0]), i2 = true);
    return i2 && s2.notifyModifiedFlags(2001), t3;
  }
  const _ = x.constructEmpty();
  if (c.queryIntervalX(_), g.contains(_)) return g.vmax, _.vmax, e3;
  const d2 = n3.constructEmpty();
  if (d2.setCoords({ env2D: c }), 0 === _.width()) {
    let t3 = _.vmin;
    t3 += Math.ceil((g.vmin - t3) / n5) * n5, t3 = g.snapClip(t3);
    const s2 = o2 ? e3 : e3.clone();
    return s2.setAttributeBasic(0, 0, t3), s2;
  }
  if (l2 === a.enumEnvelope) {
    const t3 = o2 ? e3 : e3.clone();
    return c.intersect(d2), t3.setEnvelope(c), t3;
  }
  const p3 = 0.1 * Math.max(c.height(), c.width()) * 1;
  d2.inflateCoords(0, p3);
  let f3 = e3;
  const x3 = r.getTolerance(0), y2 = new x2();
  for (; ; ) {
    const e4 = Math.floor((_.vmin - t2) / n5), s2 = Math.ceil((_.vmax - t2) / n5);
    if (!(s2 - e4 > 3)) break;
    {
      const o3 = Math.floor(0.5 * (s2 + e4));
      d2.xmin = c.xmin - p3, d2.xmax = t2 + n5 * o3;
      const h3 = f2(f3, d2, x3, a2, m2);
      d2.xmin = d2.xmax, d2.xmax = c.xmax + p3;
      const g2 = f2(f3, d2, x3, a2, m2);
      y2.setShiftCoords((o3 - s2) * n5, 0), g2.applyTransformation(y2), l2 === a.enumPolygon ? f3 = new al().execute(h3, g2, r, m2) : (f3 = h3, f3.add(g2, false)), f3.queryEnvelope(c), c.queryIntervalX(_);
    }
  }
  d2.xmin = t2, d2.xmax = t2 + n5;
  const P3 = n3.constructEmpty();
  P3.setCoords({ env2D: d2 }), P3.inflateCoords(x3, 0);
  const E2 = Math.floor((c.xmin - d2.xmin) / n5) * n5;
  let S2;
  E2 ? (d2.move(E2, 0), y2.setShiftCoords(-E2, 0)) : y2.setIdentity(), S2 = l2 === a.enumPolyline ? new Qs2({ vd: f3.getDescription() }) : new mr({ vd: f3.getDescription() });
  const C2 = n3.constructEmpty(), I4 = n3.constructEmpty();
  for (; c.xmax > d2.xmin; ) {
    const e4 = f2(f3, d2, x3, 0, m2);
    e4.queryEnvelope(I4);
    let t3 = false;
    t3 = l2 === a.enumPolyline ? !e4.isEmpty() && (I4.width() > x3 || I4.height() > x3) : !e4.isEmpty() && (l2 !== a.enumPolygon || I4.width() > x3), t3 && (e4.applyTransformation(y2), e4.queryEnvelope(I4), S2.queryEnvelope(C2), C2.inflateCoords(x3, x3), C2.isIntersecting(I4) && l2 === a.enumPolygon ? S2 = new al().execute(S2, e4, r, m2) : S2.add(e4, false)), d2.move(n5, 0), y2.shiftCoords(-n5, 0);
  }
  return S2;
}
function Bl(e3, t2, s2, n5, r = true) {
  const i2 = new x();
  i2.setCoords(s2, s2 + n5);
  const o2 = [0];
  if (Array.isArray(e3)) {
    const s3 = e3;
    for (let e4 = 0; e4 < t2; e4++) i2.containsRightExclusive(s3[e4].x) || (o2[0] = s3[e4].x, Dl(o2, i2, r), s3[e4].x = o2[0]);
  } else {
    const s3 = e3;
    for (let e4 = 0; e4 < t2; e4++) {
      const t3 = e4 << 1;
      i2.containsRightExclusive(s3[t3]) || (o2[0] = s3[t3], Dl(o2, i2, r), s3[t3] = o2[0]);
    }
  }
}
function Ol(e3, t2, n5, r = true) {
  if (e3.isEmpty()) return;
  const o2 = e3.getGeometryType();
  if (!r || o2 !== a.enumPolygon) if (y(o2)) {
    let s2 = false;
    if (h(o2) && e3.hasNonLinearSegments()) {
      const r2 = e3.getImpl(), i2 = r2.getAttributeStreamRef(0), o3 = r2.getSegmentFlagsStreamRef();
      n(null !== o3);
      for (let e4 = 0, a2 = r2.getPathCount(); e4 < a2; e4++) {
        let a3 = true;
        const h2 = r2.isClosedPath(e4), m2 = r2.getPathEnd(e4);
        if (h2 && r2.getPathSize(e4) > 0) {
          a3 = 1 === (31 & o3.read(m2 - 1));
        }
        for (let l2 = r2.getPathStart(e4); l2 < m2; l2++) {
          if (1 === (31 & o3.read(l2))) {
            if (a3) {
              const e5 = i2.read(2 * l2), r3 = Gl(e5, t2, n5);
              r3 !== e5 && (s2 = true, i2.write(2 * l2, r3));
            }
            a3 = true;
          } else a3 = false;
        }
      }
    } else {
      const r2 = e3.getImpl(), i2 = r2.getAttributeStreamRef(0);
      for (let e4 = 0, o3 = r2.getPointCount(); e4 < o3; e4++) {
        const r3 = i2.read(2 * e4), o4 = Gl(r3, t2, n5);
        o4 !== r3 && (s2 = true, i2.write(2 * e4, o4));
      }
    }
    s2 && e3.getImpl().notifyModifiedFlags(2001);
  } else if (o2 === a.enumEnvelope) {
    const r2 = e3, i2 = n3.constructEmpty();
    r2.queryEnvelope(i2), i2.xmin = Gl(i2.xmin, t2, n5), i2.xmax = Gl(i2.xmax, t2, n5), r2.setEnvelope(i2);
  } else if (o2 === a.enumPoint) {
    const s2 = e3;
    s2.setX(Gl(s2.getX(), t2, n5));
  } else b("");
}
function Yl(e3, t2, s2) {
  const n5 = new mi();
  return n5.x = Gl(e3.x, t2, s2), n5.y = e3.y, n5;
}
function Rl(e3, t2) {
  if (t2.isEmpty()) return 0;
  const n5 = e3.getPECoordSys();
  if (n5.getProjection().getCode() === bc.PE_PRJ_AZIMUTHAL_EQUIDISTANT) {
    const r = Hu();
    e3.querySpheroidData(r);
    const i2 = n5.getParameters();
    if (null === i2[bc.PE_PARM_LAM0]) return 0;
    if (null === i2[bc.PE_PARM_PHI0]) return 0;
    const o2 = [i2[bc.PE_PARM_LAM0].getValue(), i2[bc.PE_PARM_PHI0].getValue()];
    wc.geogToProj(n5, 1, o2);
    const a2 = new mi(o2[0], o2[1]), h2 = n3.constructEmpty();
    t2.queryEnvelope(h2);
    const m2 = Ot(mi, 4);
    h2.queryCorners(m2);
    let l2 = 0;
    const g = e3.getOneMeter();
    let u = Math.max(r.majorSemiAxis, r.minorSemiAxis) * Math.PI, c = Math.min(r.majorSemiAxis, r.minorSemiAxis) * Math.PI;
    c -= u / 180, u *= g, c *= g;
    for (let e4 = 0; e4 < 4; e4++) {
      const t3 = mi.distance(m2[e4], a2);
      if (t3 > u) l2++;
      else if (t3 > c) return -1;
    }
    if (0 === l2) return 1;
    if (4 === l2) {
      const e4 = n3.constructEmpty();
      return e4.setCoords({ center: a2, width: u, height: u }), h2.isIntersectingNe(e4) ? -1 : 0;
    }
    return -1;
  }
  return -1;
}
function Xl(e3, t2, n5, r) {
  const o2 = e3.getGeometryType();
  n(o2 === a.enumPolygon || o2 === a.enumPolyline || o2 === a.enumMultiPoint);
  const a2 = t2.getCoordinateSystemType();
  if (2 === a2) {
    let a3 = e3;
    if (0 === n5) {
      const n6 = Rl(t2, e3);
      if (0 === n6) return e3.createInstance();
      if (1 === n6) return e3;
      const o3 = t2.getPCSHorizon(), h2 = o3.getGeometryType(), m2 = t2.getDefaultPrecisionSR();
      if (h2 === a.enumEnvelope) {
        const n7 = n3.constructEmpty();
        o3.queryEnvelope(n7);
        const i2 = Lt(m2, n7, false);
        a3 = f2(e3, n7, i2, 5e4 * t2.getOneMeterPCSUnit(), r);
      } else new jm().execute(o3, e3, m2, r) || (a3 = new wh().execute(a3, o3, m2, r), a3 === o3 && (a3 = a3.clone()));
    } else if (t2.isPannable()) {
      const e4 = n3.constructEmpty();
      a3.queryEnvelope(e4);
      const h2 = t2.getPannableExtent();
      h2.containsEnvelope(e4) || (Ol(a3, h2, t2.getTolerance(0)), 2 !== n5 && 4 !== n5 || (a3 = Al(a3, t2)), 4 !== n5 ? a3 = vl(a3, t2, 0, true, 1e5 * t2.getOneMeterPCSUnit(), r) : o2 === a.enumPolygon && e4.width() > 2 * h2.width() && (a3 = ql(a3, -2 * h2.width(), 2 * h2.width(), t2, true, 0, true, r)));
    }
    return a3;
  }
  if (n(1 === a2), o2 === a.enumMultiPoint) return Ol(e3, t2.getPannableExtent(), t2.getTolerance(0)), e3;
  {
    const n6 = n3.constructEmpty();
    e3.queryEnvelope(n6);
    let a3 = e3;
    const h2 = t2.getPannableExtent();
    if (n6.ymin < h2.ymin || n6.ymax > h2.ymax) {
      const e4 = Math.max(1, n6.calculateToleranceFromEnvelope()), i2 = new n3(n6.xmin - e4, h2.ymin, n6.xmax + e4, h2.ymax);
      if (a3 = new I3().execute(a3, i2, t2, r), a3.isEmpty()) return a3;
    }
    return o2 === a.enumPolygon && n6.width() > 2 * h2.width() && (a3 = ql(a3, -2 * h2.width(), 2 * h2.width(), t2, true, 0, true, r)), a3;
  }
}
function Ll(e3, t2, s2, n5, r, i2) {
  const o2 = n5.getCoordinateSystemType();
  if (2 === o2) {
    if (0 === r) s2 !== e3 && Gt(s2, e3, t2), Pl(n5, s2, t2);
    else if (s2 !== e3 && Gt(s2, e3, t2), n5.isPannable()) {
      const e4 = n5.getTolerance(0);
      El(s2, t2, n5.getPannableExtent(), e4), Nl(s2, t2, n5, 0);
    }
  } else {
    n(1 === o2);
    const r2 = n5.getTolerance(0), i3 = n5.getPannableExtent();
    for (let n6 = 0; n6 < t2; n6++) s2[n6].assign(Yl(e3[n6], i3, r2));
  }
}
function zl(e3, t2) {
  const s2 = t2.getPointCount();
  if (!s2) return;
  const n5 = t2.getImpl(), r = n5.getAttributeStreamRef(0), i2 = e3;
  wc.geogToProj(i2, s2, r.getArray()), n5.notifyModifiedFlags(2001);
}
function Wl(e3, t2, s2, n5) {
  if (!s2) return;
  const r = e3.getPECoordSys();
  if (1 === s2) {
    if (t2[0].isNAN()) return;
    const s3 = [t2[0].x, t2[0].y];
    if (wc.geogToProj(r, 1, s3), n5) {
      const { first: n6, second: r2 } = e3.m_peCoordSysVal.getGeogToProjFactors();
      s3[0] = n6 * (t2[0].x - e3.getCentralMeridian()) + r2;
    }
    return void t2[0].setCoords(s3[0], s3[1]);
  }
  const i2 = e3.isPannable(), o2 = i2 ? e3.getPannableExtent().width() : 0, a2 = 179 * o2 / 360;
  let h2 = 0;
  i2 && (h2 = e3.getCentralMeridian());
  const m2 = 256, l2 = new Float64Array(2 * m2);
  for (let g = 0; g < s2; ) {
    for (let e4 = g; e4 < s2 && t2[e4].isNAN(); ++e4) g++;
    let u = Math.min(m2, s2 - g);
    if (u > 0) {
      for (let e4 = 1, s3 = g + 1; e4 < u; ++e4, ++s3) if (t2[s3].isNAN()) {
        u = e4;
        break;
      }
      for (let e4 = 0; e4 < u; ++e4) {
        const s3 = e4 << 1;
        l2[s3] = t2[g + e4].x, l2[s3 + 1] = t2[g + e4].y;
      }
      if (wc.geogToProj(r, u, l2), n5) {
        const { first: s3, second: n6 } = e3.m_peCoordSysVal.getGeogToProjFactors();
        for (let e4 = 0; e4 < u; ++e4) {
          l2[e4 << 1] = s3 * (t2[g + e4].x - h2) + n6;
        }
      }
      if (i2) for (let e4 = 0, s3 = g; e4 < u; e4++, s3++) {
        const n6 = e4 << 1, r2 = l2[n6], i3 = K(r2), m3 = t2[s3].x - h2;
        i3 * K(m3) < 0 && Math.abs(r2) > a2 && (l2[n6] -= i3 * o2);
      }
      bl(l2, t2, g, u), g += u;
    }
  }
}
function jl(e3, t2, s2, n5) {
  const r = e3.getSRToGCSTransform();
  return new qh2().transform(r, t2, s2, n5, false);
}
function Zl(e3, t2, n5, r) {
  const i2 = new De({ vd: t2.getDescription() });
  let o2;
  i2.addPoints(t2, 0, -1), o2 = new qh2().execute(i2, e3, r);
  const a2 = t2.getPointCount();
  if (n5.setEmpty(), e3.getInputSR().isPannable()) {
    if (a2 !== o2.getPointCount()) return false;
    const r2 = new n3();
    t2.queryEnvelope(r2);
    const i3 = new n3();
    o2.queryEnvelope(i3);
    const h2 = r2.width(), m2 = i3.width();
    if (0 !== h2 && 0 !== m2) {
      const t3 = m2 / h2, s2 = e3.getOutputSR().getPannableExtent().width() / e3.getInputSR().getPannableExtent().width();
      if (Math.abs(t3 / s2 - 1) > 1e-10) return false;
    } else if (0 !== h2 || 0 !== m2) return false;
    n5.add(t2, false);
    for (let e4 = 0; e4 < a2; e4++) {
      const t3 = o2.getXY(e4);
      n5.setXY(e4, t3);
    }
    return true;
  }
  return false;
}
function Kl(e3, t2, s2) {
  n(!s2 || e3.isPannable());
  const n5 = t2.getPointCount();
  if (!n5) return;
  const r = t2.getImpl(), i2 = r.getAttributeStreamRef(0), o2 = e3.getPECoordSys();
  let a2 = 0;
  const h2 = i2.readRange(0, 2 * n5);
  let m2 = () => {
    wc.geogToProj(o2, n5, h2);
  };
  const g = e3.isPannable() && !s2, u = g ? e3.getPannableExtent().width() : 0, c = 179 * u / 360;
  if (e3.isPannable() && (a2 = e3.getCentralMeridian(), s2)) {
    const t3 = e3.m_peCoordSysVal.getGeogToProjFactors(), s3 = t3.first, r2 = t3.second;
    m2 = () => {
      wc.geogToProj(o2, n5, h2);
      for (let e4 = 0; e4 < n5; e4++) {
        const t4 = e4 << 1, n6 = i2.read(t4), o3 = s3 * (n6 - a2) + r2;
        h2[t4] = o3;
      }
    };
  }
  if (m2(), g) for (let l2 = 0; l2 < n5; l2++) {
    const e4 = l2 << 1, t3 = h2[e4], s3 = K(t3), n6 = i2.read(e4) - a2;
    s3 * K(n6) < 0 && Math.abs(t3) > c && (h2[e4] += -s3 * u);
  }
  i2.writeRangeFromArray(0, 2 * n5, h2, true, 1), r.notifyModifiedFlags(2001);
}
function Ql(e3, t2, s2) {
  switch (t2.getGeometryType()) {
    case a.enumLine:
      return void Ig(e3, t2, s2);
    case a.enumBezier:
      return void Gg(e3, t2, s2);
    case a.enumEllipticArc:
      return void wg(e3, t2, s2);
    case a.enumBezier2:
      return void Dg();
    case a.enumRationalBezier2:
      return void Vg();
    default:
      b("");
  }
}
function Jl(e3, t2, s2) {
  if (!t2.hasNonLinearSegments()) return void Kl(e3, t2, s2);
  if (n(!s2 || e3.isPannable()), t2.isEmpty()) return;
  const n5 = 0, r = e3.getPECoordSys(), i2 = e3.isPannable(), o2 = i2 ? e3.getPannableExtent().width() : 0, a2 = 179 * o2 / 360;
  let h2 = 0;
  i2 && (h2 = e3.getCentralMeridian());
  const m2 = t2.createInstance();
  m2.reserveParts(t2.getPointCount(), t2.getPathCount());
  const g = t2.getImpl(), u = new Pm();
  for (let l2 = 0, c = t2.getPathCount(); l2 < c; ++l2) if (g.hasNonLinearSegmentsPath(l2)) {
    let t3 = true, n6 = -1;
    const r2 = g.getPathStart(l2), i3 = r2 + g.getSegmentCountPath(l2);
    g.isClosedPath(l2) && (n6 = i3 - 1);
    const o3 = new mi();
    for (let a3 = r2; a3 < i3; ++a3) {
      if (g.getSegmentBuffer(a3, u, false), Ql(e3, u.get(), s2), !t3) {
        u.get().getStartXY().equals(o3) || u.get().moveTo(o3);
      }
      if (a3 !== n6) m2.addSegment(u.get(), t3);
      else {
        if (t3) {
          const e4 = new se();
          u.get().queryStart(e4), m2.startPathPoint(e4);
        }
        m2.closeLastPathWithSegment(u.get());
      }
      o3.assign(u.get().getEndXY()), t3 = false;
    }
  } else {
    const e4 = 1024;
    let s3, u2 = g.getPathSize(l2), c2 = Math.min(u2, e4);
    m2.insertPath(-1, t2, l2, true);
    const _ = g.getAttributeStreamRef(0), d2 = m2.getAttributeStreamRef(0);
    for (let t3 = g.getPathStart(l2), m3 = g.getPathEnd(l2); t3 < m3; ) {
      if (s3 = _.readRange(t3, c2), wc.geogToProj(r, c2, s3), i2) for (let e5 = 0; e5 < c2; e5++) {
        const t4 = e5 << 1, r2 = s3[t4], i3 = K(r2), m4 = _.read(2 * (n5 + e5)) - h2;
        i3 * K(m4) < 0 && Math.abs(r2) > a2 && (s3[t4] += -i3 * o2);
      }
      d2.writeRangeFromArray(t3, c2, s3, true, 1), t3 += c2, u2 -= c2, c2 = Math.min(u2, e4);
    }
  }
  t2.assignMove(m2);
}
function $l(e3, t2, s2) {
  const n5 = 1e3;
  let r = s2.getPointCount();
  if (!r) return;
  const i2 = s2.getImpl(), o2 = i2.getAttributeStreamRef(0);
  let a2 = Math.min(r, n5), h2 = 0;
  const m2 = e3.getPECoordSys();
  Number.isNaN(t2) && (t2 = 0);
  const l2 = e3.isPannable(), g = e3.getOneDegreeGCSUnit(), u = 360 * g, c = 179 * g;
  let _;
  for (; r; ) {
    if (_ = o2.readRange(2 * h2, 2 * a2), ag(m2, a2, _, t2), l2) for (let e4 = 0; e4 < a2; e4++) {
      const s3 = e4 << 1, n6 = _[s3] - t2, r2 = K(n6), i3 = o2.read(2 * (h2 + e4));
      r2 * K(i3) < 0 && Math.abs(n6) > c && (_[s3] += -r2 * u);
    }
    o2.writeRangeFromArray(2 * h2, 2 * a2, _, true, 1), h2 += a2, r -= a2, a2 = Math.min(r, n5);
  }
  i2.notifyModifiedFlags(2001);
}
function eg(e3, t2, s2) {
  switch (s2.getGeometryType()) {
    case a.enumLine:
      return void tg(e3, t2, s2);
    case a.enumBezier:
      return void rg(e3, t2, s2);
    case a.enumEllipticArc:
      return void sg(e3, t2, s2);
    case a.enumBezier2:
      return void ig();
    case a.enumRationalBezier2:
      return void og();
    default:
      b("");
  }
}
function tg(e3, t2, s2) {
  const n5 = [s2.getStartXY(), s2.getEndXY()];
  mg(e3, t2, n5, 2), s2.setStartXY(n5[0]), s2.setEndXY(n5[1]), s2.normalizeAfterEndpointChange();
}
function sg(e3, t2, s2) {
  if (0 === s2.projectionBehavior()) ng(e3, t2, s2);
  else {
    const n5 = s2.isClosed() && s2.isMajor(), r = [s2.getStartXY(), n5 ? s2.getCenter() : s2.getEndXY()], i2 = [r[0].clone(), r[1].clone()];
    vg(e3, t2, i2, 2);
    const o2 = new x2();
    o2.initializeFromTwoPointsArray(r, i2), s2.applyTransformation(o2);
    const a2 = n5 ? 0 : 1;
    s2.setCoordsForIntersector(i2[0], i2[a2], false);
  }
}
function ng(e3, t2, s2) {
  Ng(false, e3, t2, s2, false);
}
function rg(e3, t2, s2) {
  const n5 = Ot(mi, 4);
  s2.queryControlPoints(n5), vg(e3, t2, n5, 4), s2.setControlPoints(n5);
}
function ig(e3, t2, s2) {
  n(0);
}
function og(e3, t2, s2) {
  n(0);
}
function ag(e3, t2, s2, n5) {
  const r = wc.projToGeogCenter(e3, t2, s2, n5);
  for (let i2 = 0; i2 < t2; ++i2) {
    const e4 = i2 << 1;
    n(Number.isFinite(s2[e4] + s2[e4 + 1]));
  }
  return r;
}
function hg(e3, t2, s2) {
  if (!s2.hasNonLinearSegments()) return void $l(e3, t2, s2);
  if (s2.isEmpty()) return;
  const n5 = e3.getPECoordSys();
  Number.isNaN(t2) && (t2 = 0);
  const r = e3.isPannable(), i2 = e3.getOneDegreeGCSUnit(), o2 = 360 * i2, a2 = 179 * i2, h2 = s2.createInstance();
  h2.reserveParts(s2.getPointCount(), s2.getPathCount());
  const m2 = s2.getImpl(), l2 = new Pm();
  for (let g = 0, u = s2.getPathCount(); g < u; ++g) if (m2.hasNonLinearSegmentsPath(g)) {
    let s3 = true, n6 = -1;
    const r2 = m2.getPathStart(g), i3 = r2 + m2.getSegmentCountPath(g);
    m2.isClosedPath(g) && (n6 = i3 - 1);
    const o3 = new mi();
    for (let a3 = r2; a3 < i3; ++a3) {
      if (m2.getSegmentBuffer(a3, l2, false), eg(e3, t2, l2.get()), !s3) {
        l2.get().getStartXY().equals(o3) || l2.get().moveTo(o3);
      }
      if (a3 !== n6) h2.addSegment(l2.get(), s3);
      else {
        if (s3) {
          const e4 = new se();
          l2.get().queryStart(e4), h2.startPathPoint(e4);
        }
        h2.closeLastPathWithSegment(l2.get());
      }
      o3.assign(l2.get().getEndXY()), s3 = false;
    }
  } else {
    const e4 = 1e3;
    let i3, l3 = m2.getPathSize(g), u2 = Math.min(l3, e4);
    h2.insertPath(-1, s2, g, true);
    const c = m2.getAttributeStreamRef(0), _ = h2.getAttributeStreamRef(0);
    for (let s3 = m2.getPathStart(g), h3 = m2.getPathEnd(g); s3 < h3; ) {
      if (i3 = c.readRange(2 * s3, 2 * u2), ag(n5, u2, i3, t2), r) for (let e5 = 0; e5 < u2; e5++) {
        const n6 = e5 << 1, r2 = i3[n6] - t2, h4 = K(r2), m3 = c.read(2 * s3);
        h4 * K(m3) < 0 && Math.abs(r2) > a2 && (i3[n6] += -h4 * o2);
      }
      _.writeRangeFromArray(2 * s3, 2 * u2, i3, true, 1), s3 += u2, l3 -= u2, u2 = Math.min(l3, e4);
    }
  }
  s2.assignMove(h2);
}
function mg(e3, t2, s2, n5) {
  const r = e3.getPECoordSys();
  Number.isNaN(t2) && (t2 = 0);
  const i2 = e3.isPannable(), o2 = e3.getOneDegreeGCSUnit(), a2 = 360 * o2, h2 = 179 * o2, m2 = 256, l2 = new Float64Array(2 * m2);
  for (let g = 0; g < n5; ) {
    for (let t3 = g; t3 < n5 && s2[t3].isNAN(); ++t3) g++;
    let e4 = Math.min(m2, n5 - g);
    if (e4 > 0) {
      for (let t3 = 1, n6 = g + 1; t3 < e4; ++t3, ++n6) if (s2[n6].isNAN()) {
        e4 = t3;
        break;
      }
      for (let t3 = 0; t3 < e4; t3++) {
        const e5 = t3 << 1;
        l2[e5] = s2[g + t3].x, l2[e5 + 1] = s2[g + t3].y;
      }
      if (ag(r, e4, l2, t2), i2) for (let n6 = 0, r2 = g; n6 < e4; ++n6, ++r2) {
        const e5 = n6 << 1, i3 = s2[r2].x, o3 = l2[e5] - t2, m3 = K(o3);
        m3 * K(i3) < 0 && Math.abs(o3) > h2 && (l2[e5] -= m3 * a2);
      }
      for (let t3 = 0; t3 < e4; t3++) {
        const e5 = t3 << 1;
        s2[g + t3].x = l2[e5], s2[g + t3].y = l2[e5 + 1];
      }
      g += e4;
    }
  }
}
function lg(e3, t2, s2, n5) {
  n(0);
}
function gg(e3, t2, s2) {
  let n5 = t2.getPointCount();
  if (!n5) return false;
  const r = t2.getImpl(), i2 = r.getAttributeStreamRef(0);
  let o2 = null;
  const a2 = e3.getInputSR(), h2 = e3.getOutputSR();
  a2.getVCS(), h2.getVCS();
  const m2 = a2.getOneDegreeGCSUnit(), l2 = h2.getOneDegreeGCSUnit(), g = e3.isVertical();
  g && t2.hasAttribute(1) && (o2 = r.getAttributeStreamRef(1));
  const u = e3.getDatumTransformation(), c = !!u && 1 === u.getType();
  if (c || null === o2 || (lg(o2.getArray()), o2 = null), !u || 0 === u.count()) {
    const e4 = a2.getGcsUnitFactor() / h2.getGcsUnitFactor(), t3 = (a2.getPrimeMeridian() - h2.getPrimeMeridian()) * l2, s3 = -90 * m2, o3 = 90 * m2;
    let g2 = 0;
    const u2 = i2.getArray(), c2 = [0];
    for (let r2 = 1, i3 = 2 * n5; r2 < i3; ) c2[0] = u2[r2], g2 |= Ys(c2, s3, o3) ? 1 : 0, u2[r2] = c2[0], r2 += 2;
    if (0 !== t3 || 1 !== e4) {
      g2 = 1;
      const s4 = i2.getArray();
      for (let r2 = 0, i3 = 2 * n5; r2 < i3; ) {
        let n6 = s4[r2];
        n6 *= e4, n6 += t3, s4[r2] = n6, s4[r2 + 1] *= e4, r2 += 2;
      }
    }
    return 0 !== g2 && r.notifyModifiedFlags(2001), !!g2;
  }
  const _ = 1e3;
  let d2 = Math.min(n5, _);
  const p3 = Yt(d2, Number.NaN), f3 = Yt(d2, Number.NaN);
  let x3 = null;
  null !== o2 && (x3 = new Float64Array(d2));
  let y2 = 0, P3 = Number.NaN, E2 = Number.NaN;
  const S2 = 360 * l2, C2 = l2 / m2;
  s2 && (E2 = 90 * l2, P3 = 89.9 * m2, f3.fill(0));
  let I4 = true, b2 = 0;
  for (; n5; ) {
    let e4 = false;
    const t3 = i2.readRange(2 * y2, 2 * d2);
    for (let s3 = 0; s3 < d2; s3++) p3[s3] = t3[s3 << 1];
    if (s2) for (let s3 = 0; s3 < d2; s3++) {
      const n6 = 1 + (s3 << 1), r3 = Math.abs(t3[n6]) - P3;
      if (r3 > 0) {
        const i3 = t3[n6];
        t3[n6] = B2(P3, i3), f3[s3] = B2(r3, i3), e4 = true;
      }
    }
    const r2 = t3[0];
    if (c) {
      const e5 = u;
      x3 && o2.queryRange(y2, d2, x3, true, 1), e5.transform(false, t3, x3, d2), x3 && o2.writeRangeFromArray(y2, d2, x3, true, 1);
    } else {
      u.transform(false, t3, d2);
    }
    I4 && (b2 = t3[0] - C2 * r2, I4 = false);
    for (let s3 = 0; s3 < d2; s3++) {
      const e5 = s3 << 1, n6 = t3[e5] - p3[s3] * C2 - b2;
      Math.abs(n6) > 200 && (t3[e5] += n6 > 0 ? -S2 : S2);
    }
    if (e4) {
      for (let e5 = 0; e5 < d2; e5++) if (f3[e5]) {
        const s3 = 1 + (e5 << 1);
        t3[s3] += C2 * f3[e5], t3[s3] > E2 ? t3[s3] = E2 : t3[s3] < -E2 && (t3[s3] = -E2);
      }
      f3.fill(0);
    }
    i2.writeRangeFromArray(2 * y2, 2 * d2, t3, true, 1), g && o2 && o2.writeRangeFromArray(y2, d2, x3, true, 1), y2 += d2, n5 -= d2, d2 = Math.min(n5, _);
  }
  return r.notifyModifiedFlags(2001), true;
}
function ug(e3, t2, s2) {
  switch (t2.getGeometryType()) {
    case a.enumLine:
      return xg(e3, t2, s2);
    case a.enumBezier:
      return Eg(e3, t2, s2);
    case a.enumEllipticArc:
      return yg(e3, t2, s2);
    case a.enumBezier2:
      return Sg();
    case a.enumRationalBezier2:
      return Cg();
    default:
      b("");
  }
}
function cg(e3, t2, s2) {
  if (!t2.hasNonLinearSegments()) return gg(e3, t2, s2);
  if (t2.isEmpty()) return false;
  const n5 = t2.createInstance();
  n5.reserveParts(t2.getPointCount(), t2.getPathCount());
  const r = t2.getImpl(), i2 = new Pm();
  for (let o2 = 0, a2 = t2.getPathCount(); o2 < a2; ++o2) {
    let t3 = true, a3 = -1;
    const h2 = r.getPathStart(o2), m2 = h2 + r.getSegmentCountPath(o2);
    r.isClosedPath(o2) && (a3 = m2 - 1);
    const l2 = new mi();
    for (let o3 = h2; o3 < m2; ++o3) {
      if (r.getSegmentBuffer(o3, i2, false), ug(e3, i2.get(), s2), !t3) {
        i2.get().getStartXY().equals(l2) || i2.get().moveTo(l2);
      }
      if (o3 !== a3) n5.addSegment(i2.get(), t3);
      else {
        if (t3) {
          const e4 = new se();
          i2.get().queryStart(e4), n5.startPathPoint(e4);
        }
        n5.closeLastPathWithSegment(i2.get());
      }
      l2.assign(i2.get().getEndXY()), t3 = false;
    }
  }
  return t2.assignMove(n5), true;
}
function _g(e3, t2, s2, n5, r, i2) {
  if (e3.isIdentityGeogToGeog()) {
    const s3 = 90 * e3.getInputSR().getOneDegreeGCSUnit();
    let r2 = 0;
    const i3 = [0];
    for (let e4 = 0; e4 < n5; e4++) i3[0] = t2[e4].y, r2 |= Ys(i3, -s3, s3) ? 1 : 0, t2[e4].y = i3[0];
    return r2;
  }
  const o2 = e3.getInputSR(), a2 = e3.getOutputSR(), h2 = o2.getVCS(), m2 = a2.getVCS(), l2 = o2.getOneDegreeGCSUnit(), g = 90 * l2, u = a2.getOneDegreeGCSUnit(), c = e3.isVertical(), _ = e3.getDatumTransformation(), d2 = !!_ && 1 === _.getType();
  if (c || (s2 = null), !_ || 0 === _.count()) {
    let e4 = 0;
    const r2 = [0];
    for (let s3 = 0; s3 < n5; s3++) r2[0] = t2[s3].y, e4 |= Ys(r2, -g, g) ? 1 : 0, t2[s3].y = r2[0];
    return e4 |= qm(o2.getGCS(), h2, a2.getGCS(), m2, t2, s2, n5) ? 1 : 0, e4;
  }
  d2 || null === s2 || lg();
  const p3 = 1024;
  let f3 = Math.min(n5, p3);
  const x3 = Yt(f3, Number.NaN), y2 = Yt(f3, Number.NaN);
  let P3 = 0, E2 = Number.NaN, S2 = Number.NaN;
  const C2 = 360 * u, I4 = u / l2;
  r && (S2 = 90 * u, E2 = 89.9 * l2);
  let b2 = true, w2 = 0, v2 = n5;
  for (; v2; ) {
    let e4 = false;
    for (let s3 = 0; s3 < f3; s3++) x3[s3] = t2[s3 + P3].x;
    if (r) for (let s3 = 0; s3 < f3; s3++) {
      const n7 = Math.abs(t2[s3 + P3].y) - E2;
      if (n7 > 0) {
        const r2 = t2[s3 + P3].y;
        t2[s3 + P3].y = B2(E2, r2), y2[s3] = B2(n7, r2), e4 = true;
      }
    }
    const n6 = t2[0].x;
    if (d2) {
      _.transform(false, t2, s2, f3);
    } else {
      _.transform(false, t2, f3);
    }
    b2 && (w2 = t2[0].x - I4 * n6, b2 = false);
    for (let s3 = 0; s3 < f3; s3++) {
      const e5 = t2[P3 + s3].x - x3[s3] * I4 - w2;
      Math.abs(e5) > 200 && (e5 > 0 ? t2[P3 + s3].x -= C2 : t2[P3 + s3].x += C2);
    }
    if (e4) {
      for (let e5 = 0; e5 < f3; e5++) y2[e5] && (t2[P3 + e5].y += I4 * y2[e5], t2[P3 + e5].y > S2 ? t2[P3 + e5].y = S2 : t2[P3 + e5].y < -S2 && (t2[P3 + e5].y = -S2));
      y2.fill(0, 0, f3);
    }
    P3 += f3, v2 -= f3, f3 = Math.min(v2, p3);
  }
  return 1;
}
function dg(e3, t2, s2, n5, r) {
  return n(0), 0;
}
function pg(e3, t2, s2, n5, r) {
  n(null === n5), n(t2 < 2147483647);
  const i2 = Array.isArray(s2);
  let o2;
  o2 = i2 ? ai(s2) : s2;
  const a2 = vc.geogToGeog(e3, t2, o2, null, r);
  return i2 && hi(o2, s2), a2;
}
function fg(e3, t2, s2, n5, r, i2) {
  let o2 = 0, a2 = true, h2 = 0;
  for (let m2 = 0; m2 < n5; ++m2) t2[m2].isNAN() ? a2 || (o2 |= _g(e3, t2.slice(h2, m2 - h2), s2 ? s2.slice(h2, m2 - h2) : null, m2 - h2, r), h2 = m2, a2 = true) : a2 && (h2 = m2, a2 = false);
  return a2 || (o2 |= _g(e3, 0 === h2 ? t2 : t2.slice(h2), s2 ? 0 === h2 ? s2 : s2.slice(h2) : null, n5 - h2, r)), 0 !== o2;
}
function xg(e3, t2, s2) {
  const n5 = [t2.getStartXY(), t2.getEndXY()], r = [0, 0];
  let i2 = null;
  t2.hasAttribute(1) && (i2 = r, i2[0] = t2.getAttributeAsDbl(0, 1, 0), i2[1] = t2.getAttributeAsDbl(1, 1, 0));
  const o2 = fg(e3, n5, i2, 2, s2);
  return t2.setStartXY(n5[0]), t2.setEndXY(n5[1]), i2 && (t2.setStartAttribute(1, 0, i2[0]), t2.setEndAttribute(1, 0, i2[1])), t2.normalizeAfterEndpointChange(), o2;
}
function yg(e3, t2, s2) {
  if (0 === t2.projectionBehavior()) return Pg(e3, t2, s2);
  const n5 = t2.getStartXY().equals(t2.getEndXY()), r = Ot(mi, 3), i2 = Ot(mi, 3), o2 = [0, 0, 0];
  let a2 = null;
  r[0].assign(t2.getStartXY()), r[1].assign(n5 ? t2.getCenter() : t2.getEndXY());
  let h2 = false;
  t2.hasAttribute(1) && (a2 = o2, a2[0] = t2.getAttributeAsDbl(0, 1, 0), a2[1] = t2.getAttributeAsDbl(1, 1, 0), a2[2] = Q(a2[0], a2[1], 0.5), n5 && (a2[1] = a2[2])), i2[0].setCoordsPoint2D(r[0]), i2[1].setCoordsPoint2D(r[1]);
  const m2 = new x2();
  if (n5 || t2.isDegenerateToLine()) h2 = fg(e3, i2, a2, 2, s2), m2.initializeFromTwoPoints(r[0], r[1], i2[0], i2[1]);
  else {
    const n6 = new mi();
    t2.queryCoord2D(0.5, n6), r[2].setCoordsPoint2D(n6), i2[2].setCoordsPoint2D(n6), h2 = fg(e3, i2, a2, 3, s2), m2.setFromTwoTriangles(r, i2);
  }
  return m2.isIdentity() || (t2.applyTransformation(m2), t2.setStartXY(i2[0]), t2.setEndXY(n5 ? i2[0] : i2[1]), t2.normalizeAfterEndpointChange()), a2 && (t2.setStartAttribute(1, 0, a2[0]), t2.setEndAttribute(1, 0, n5 ? a2[0] : a2[1])), h2;
}
function Pg(e3, t2, s2) {
  const n5 = [t2.getStartXY(), t2.getEndXY(), t2.getInteriorPoint(), t2.getCenter()];
  let r = 4;
  t2.isDegenerateToLine() && (r = 2);
  const i2 = [0, 0, 0, 0];
  let o2 = null;
  if (t2.hasAttribute(1)) {
    o2 = i2, o2[0] = t2.getAttributeAsDbl(0, 1, 0), o2[1] = t2.getAttributeAsDbl(1, 1, 0);
    const e4 = Q(o2[0], o2[1], 0.5);
    o2[2] = e4, o2[3] = e4;
  }
  const a2 = t2.getStartXY().equals(t2.getEndXY()) && !t2.isDegenerateToLine(), h2 = fg(e3, n5, o2, r, s2);
  return a2 ? t2.constructCircleCenterAndPoint(n5[3], n5[0], !t2.isClockwise()) : t2.isDegenerateToLine() ? t2.constructLineCircularArc(n5[0], n5[1]) : t2.constructCircularArcThreePoint(n5[0], n5[1], n5[2]), o2 && (t2.setStartAttribute(1, 0, o2[0]), t2.setEndAttribute(1, 0, o2[1])), h2;
}
function Eg(e3, t2, s2) {
  const n5 = Ot(mi, 4);
  t2.queryControlPoints(n5);
  const r = [0, 0, 0, 0];
  let i2 = null;
  t2.hasAttribute(1) && (i2 = r, i2[0] = t2.getAttributeAsDbl(0, 1, 0), i2[3] = t2.getAttributeAsDbl(1, 1, 0), i2[1] = Q(i2[0], i2[3], 0.5), i2[2] = i2[1]);
  const o2 = fg(e3, n5, i2 || null, n5.length, s2);
  return t2.setControlPoints(n5), i2 && (t2.setStartAttribute(1, 0, i2[0]), t2.setEndAttribute(1, 0, i2[3])), t2.normalizeAfterEndpointChange(), o2;
}
function Sg(e3, t2, s2) {
  return n(0), false;
}
function Cg(e3, t2, s2) {
  return n(0), false;
}
function Ig(e3, t2, s2) {
  const n5 = [t2.getStartXY(), t2.getEndXY()];
  Wl(e3, n5, 2, s2), t2.setStartXY(n5[0]), t2.setEndXY(n5[1]), t2.normalizeAfterEndpointChange();
}
function bg(e3, t2, s2, n5) {
  Wl(e3, t2, s2, n5);
}
function wg(e3, t2, s2) {
  if (0 === t2.projectionBehavior()) Tg(e3, t2, s2);
  else {
    const n5 = t2.isClosed() && t2.isMajor(), r = [t2.getStartXY(), n5 ? t2.getCenter() : t2.getEndXY()], i2 = [r[0].clone(), r[1].clone()];
    bg(e3, i2, 2, s2);
    const o2 = new x2();
    o2.initializeFromTwoPointsArray(r, i2), t2.applyTransformation(o2);
    const a2 = n5 ? 0 : 1;
    t2.setCoordsForIntersector(i2[0], i2[a2], false);
  }
}
function vg(e3, t2, n5, r) {
  mg(e3, t2, n5, r);
  const i2 = new n3();
  i2.setFromPoints(n5, r);
  const o2 = e3.getOneDegreeGCSUnit(), a2 = 360 * o2, h2 = 180 * o2;
  if (i2.width() > h2) {
    for (let e4 = 0; e4 < r; e4++) for (; n5[e4].x < t2; ) n5[e4].x += a2;
    if (i2.setFromPoints(n5, r), i2.xmax > h2 + t2) for (let e4 = 0; e4 < r; e4++) n5[e4].x -= a2;
  }
}
function Ng(e3, t2, s2, n5, r) {
  const i2 = Ot(mi, 3);
  let o2 = 0, a2 = false, h2 = false;
  const m2 = n5.isDegenerateToLine();
  m2 ? (i2[0].assign(n5.getStartXY()), i2[1].assign(n5.getEndXY()), i2[2].setCoords(0, 0), o2 = 2) : n5.isClosed() && n5.isMajor() ? (a2 = true, h2 = !n5.isClockwise(), i2[0].assign(n5.getStartXY()), i2[1].assign(n5.getCenter()), i2[2].setCoords(0, 0), o2 = 2) : (i2[0].assign(n5.getStartXY()), i2[1].assign(n5.getEndXY()), i2[2].assign(n5.getInteriorPoint()), o2 = 3), e3 ? bg(t2, i2, o2, r) : vg(t2, s2, i2, o2), m2 ? n5.constructLineCircularArc(i2[0], i2[1]) : a2 ? n5.constructCircleCenterAndPoint(i2[1], i2[0], h2) : n5.constructCircularArcThreePoint(i2[0], i2[1], i2[2]);
}
function Tg(e3, t2, s2) {
  Ng(true, e3, 0, t2, s2);
}
function Gg(e3, t2, s2) {
  const n5 = Ot(mi, 4);
  t2.queryControlPoints(n5), bg(e3, n5, 4, s2), t2.setControlPoints(n5);
}
function Dg(e3, t2, s2) {
  n(0);
}
function Vg(e3, t2, s2) {
  n(0);
}
function Fg(e3, t2, s2) {
  const n5 = Ih(e3), r = Ih(t2), i2 = Nh(n5, r), o2 = Nh(n5, Ih(s2));
  return 0 === o2 || (i2 > 0 && o2 > 0 && o2 <= i2 || i2 < 0 && o2 < 0 && o2 >= i2);
}
function Hg(s2, n5, r, i2, o2) {
  const a2 = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = r.clone(), h2 = i2.clone();
    if (2 === o2) {
      const e3 = [0, 0];
      return Ds2(s2, n5, t2, h2, 0, e3), e3[0];
    }
    if (t2.y > h2.y) {
      const e3 = new mi();
      e3.assign(t2), t2.assign(h2), h2.assign(e3);
    }
    const m2 = __addDisposableResource(a2, new Cc(), false), g = __addDisposableResource(a2, new Cc(), false), u = __addDisposableResource(a2, new Cc(), false), c = new x();
    if (c.setCoords(t2.y, h2.y), !c.containsCoordinate(0) || Math.abs(t2.x - h2.x) >= Math.PI) return Number.NaN;
    if (t2.x === h2.x) return t2.x;
    Dc.geodeticDistance(s2, n5, t2.x, t2.y, h2.x, h2.y, g, m2, null, o2);
    const _ = g.val;
    let d2 = 0, p3 = 1;
    const f3 = t2.clone();
    for (; _ * (p3 - d2) > 1e-12 * s2; ) {
      const e3 = 0.5 * (d2 + p3);
      if (Dc.geodeticCoordinate(s2, n5, t2.x, t2.y, _ * e3, m2.val, g, u, o2), f3.x = g.val, f3.y = u.val, c.setCoords(t2.y, f3.y), 0 === f3.y) return f3.x;
      if (c.containsCoordinate(0)) p3 = e3;
      else {
        if (c.setCoords(h2.y, f3.y), !c.containsCoordinate(0)) return n(false), Number.NaN;
        d2 = e3;
      }
    }
    return f3.x;
  } catch (h2) {
    a2.error = h2, a2.hasError = true;
  } finally {
    __disposeResources(a2);
  }
}
function kg(e3, t2, s2, n5) {
  const r = new x();
  r.setCoords(t2, s2);
  const i2 = n5.width();
  let o2 = Math.floor((e3 - t2) / i2) * i2 + e3;
  const a2 = r.getCenter();
  for (; Math.abs(o2 - a2) > Math.abs(o2 + i2 - a2); ) o2 += i2;
  return o2;
}
var Ag = class extends s {
  constructor() {
    super(), this.m_geometryDeque = [], this.m_index = -1;
  }
  next() {
    if (this.m_geometryDeque.length > 0) {
      this.m_index++;
      const e3 = this.m_geometryDeque[0];
      return this.m_geometryDeque.shift(), e3;
    }
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tick(e3) {
    this.m_geometryDeque.push(e3);
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
function Mg(e3, t2) {
  return e3 === t2 || null !== e3 && null !== t2 && (e3.m_csType === t2.m_csType && (0 === e3.m_WKID && 0 === t2.m_WKID ? e3.m_hashCode === t2.m_hashCode && e3.m_canonicalWkt === t2.m_canonicalWkt : e3.m_WKID === t2.m_WKID));
}
function Ug(e3, t2) {
  return e3 === t2 || null !== e3 && null !== t2 && (e3.m_csType === t2.m_csType && (0 === e3.m_WKID && 0 === t2.m_WKID ? 1 === e3.m_csType ? e3.m_peCoordSys.isEqual(t2.m_peCoordSys) : e3.m_peCoordSys === t2.m_peCoordSys : e3.m_WKID === t2.m_WKID));
}
var qg = class {
  constructor(e3, t2 = true) {
    this.m_PCSHorizon = null, this.m_GCSHorizon = null, this.m_GCSSplitLines = null, this.m_bGCSHorisonIsInclusive = false, this.m_oneMeterPCS = 0, this.m_oneDegreeGCS = 0, this.m_gcsUnitFactor = 0, this.m_northPole = mi.getNAN(), this.m_southPole = mi.getNAN(), this.m_polesUpdated = 0, this.m_domain = n3.constructEmpty(), this.m_primeMeridian = Number.NaN, this.m_geogToProjFactor = 1, this.m_geogToProjOffset = 0, this.m_geogToProjFactorsUpdated = 0, this.m_oneMillimeter = 0, this.m_centralMeridian = 0, this.m_pPCSInfoNoDomain = null, this.m_oldWKID = -1973, this.m_vcsWKID = -1, this.m_bIsPannable = false, this.m_bCached = false, this.m_pannableExtent = n3.constructEmpty(), this.m_pannableExtentGCS = n3.constructEmpty(), this.m_areaOfUse = null, this.m_canonicalWkt = "", this.m_peCoordSys = e3, this.m_WKID = Ic.getCode(e3), this.m_WKID <= 0 ? (this.m_WKID = 0, this.m_canonicalWkt = _l(e3, 0, true), this.m_hashCode = Ds(this.m_canonicalWkt)) : this.m_hashCode = Ss(this.m_WKID);
    const r = this.m_peCoordSys.getType();
    this.m_csType = r === bc.PE_TYPE_PROJCS ? 2 : 1, n(r === bc.PE_TYPE_PROJCS || r === bc.PE_TYPE_GEOGCS), r === bc.PE_TYPE_PROJCS && (e3.loadConstants() || P("PeProjcs.loadConstants failed"));
    const i2 = r === bc.PE_TYPE_GEOGCS ? this.m_peCoordSys : this.m_peCoordSys.getGeogcs();
    r !== bc.PE_TYPE_GEOGCS && Ic.getCode(i2), this.m_unit = ms2(e3), this.m_primeMeridian = i2.getPrimem().getLongitude();
    {
      const e4 = i2.getUnit().getUnitFactor();
      this.m_gcsUnitFactor = e4;
      let t3 = Math.PI / (180 * e4);
      Math.abs(t3 - 1) < 1e-10 && (t3 = 1), this.m_oneDegreeGCS = t3;
    }
    if (r === bc.PE_TYPE_PROJCS) {
      const e4 = this.m_peCoordSys, t3 = e4.getUnit().getUnitFactor();
      this.m_oneMeterPCS = 1 / t3, this.m_oneMillimeter = 1e-3 / t3, this.m_pPCSInfoNoDomain = Nc.generate(e4, Nc.PE_PCSINFO_OPTION_NONE), this.m_pPCSInfoNoDomain || b("cannot create pcs info"), this.m_bIsPannable = this.m_pPCSInfoNoDomain.isPannableRectangle(), this.m_centralMeridian = this.m_pPCSInfoNoDomain.getCentralMeridian();
    } else {
      this.m_bIsPannable = true, this.m_polesUpdated = 1, this.m_oneMeterPCS = 0;
      const e4 = 1 / i2.getUnit().getUnitFactor(), t3 = i2.getDatum().getSpheroid().getAxis();
      this.m_oneMillimeter = 1e-3 / t3 * e4, this.m_centralMeridian = 0;
    }
    this.m_bIsPannable && (this.updateGCSHorizon(), this.updatePCSHorizon(), this.updatePoles(), this.updateDomain(), this.updatePannableExtent(), this.updatePannableExtentGCS());
  }
  [Symbol.dispose]() {
  }
  getHashCode() {
    return this.m_hashCode;
  }
  getPCSHorizonPannable() {
    return this.m_PCSHorizon;
  }
  getGCSHorizonPannable() {
    return this.m_GCSHorizon;
  }
  getPCSInfo() {
    return n(this.m_pPCSInfoNoDomain), this.m_pPCSInfoNoDomain;
  }
  getCentralMeridian() {
    return this.m_centralMeridian;
  }
  updateGCSHorizon() {
    if (this.m_peCoordSys.getType() !== bc.PE_TYPE_PROJCS) return;
    let e3 = true;
    const t2 = this.m_peCoordSys, n5 = t2.getGeogcs(), r = t2.horizonGcsGenerate();
    if (!r) return;
    n(r.length > 0);
    const i2 = r[0].getNump(), o2 = r[0].getKind();
    let a2, h2;
    e3 = r[0].getInclusive() > 0;
    const m2 = this.getOneDegreeGCSUnit(), g = 90 * m2, u = 360 * m2, c = 370 * m2, _ = 180 * m2 * bc.PE_HORIZON_DELTA / Math.PI, d2 = n3.constructEmpty();
    let p3 = null;
    if (i2 > 1) {
      for (let s2 = 1; s2 < i2; s2++) if (r[s2].getKind() === bc.PE_HORIZON_LINE) {
        p3 || (p3 = new Qs2());
        const e4 = r[s2].getCoord();
        p3.startPathCoords(e4[0][0], e4[0][1]), p3.lineToCoords(e4[1][0], e4[1][1]);
      }
    }
    if (o2 === bc.PE_HORIZON_RECT) {
      const t3 = r[0].getCoord();
      if (d2.setFromPoints([new mi(t3[0][0], t3[0][1]), new mi(t3[1][0], t3[1][1])], 2), Math.abs(d2.ymax - g) < 1e-7 * _ && (d2.ymax = g), Math.abs(d2.ymin + g) < 1e-7 * _ && (d2.ymin = -g), d2.width() > c) {
        const e4 = -400 * m2, t4 = e4 + 5 * u;
        d2.setCoords({ xmin: e4, ymin: d2.ymin, xmax: t4, ymax: d2.ymax });
      }
      const s2 = new he({ env2D: d2 });
      this.m_GCSHorizon || (this.m_GCSHorizon = s2, this.m_bGCSHorisonIsInclusive = e3);
    } else {
      let t3 = this.getPCSInfo().isGcsHorizonMultiOverlap();
      const o3 = Ru(n5, null, null, 1), c2 = [], _2 = new x();
      for (let e4 = 0; e4 < i2; e4++) {
        if (r[e4].getKind() !== bc.PE_HORIZON_POLY) continue;
        a2 = r[e4].getSize();
        const t4 = r[e4].getCoord(), n6 = n3.constructEmpty();
        n6.setFromPoints(oi(t4), a2), c2.push(new x(n6.xmin, n6.xmax)), n6.width(), _2.merge(c2.at(-1));
      }
      let d3 = false;
      const f3 = new x();
      _2.width() > u && c2.length > 1 ? (f3.vmin = this.getCentralMeridian() - u, f3.vmax = f3.vmin + 2 * u, d3 = true, t3 = true) : (f3.vmin = _2.vmin, f3.vmax = f3.vmin + u);
      const x3 = (e4) => {
        let t4 = 0;
        for (; c2[e4].vmin + t4 < f3.vmin; ) t4 += u;
        for (; c2[e4].vmax + t4 - u > f3.vmin; ) t4 -= u;
        return t4;
      };
      let y2 = new mr();
      if (t3) {
        const e4 = new Ag(), t4 = new al().executeMany(e4, o3, null);
        for (let s2 = 0; s2 < i2; s2++) {
          if (r[s2].getKind() !== bc.PE_HORIZON_POLY) continue;
          a2 = r[s2].getSize();
          const n6 = r[s2].getCoord();
          h2 = r[s2].getInclusive() > 0;
          const i3 = new mr();
          if (i3.addPathPoint2D(oi(n6), a2 - 1, true), d3) {
            const t5 = x3(s2), n7 = c2[s2].clone();
            n7.move(t5);
            let r2 = t5;
            const o4 = new x2();
            do {
              o4.setShiftCoords(r2, 0);
              const t6 = i3.clone();
              t6.applyTransformation(o4), e4.tick(t6), e4.tock(), r2 += u, n7.move(u);
            } while (n7.vmin < f3.vmax);
          } else e4.tick(i3), t4.tock();
        }
        y2 = t4.next();
      } else {
        y2 = new mr();
        for (let t4 = 0; t4 < i2; t4++) {
          if (r[t4].getKind() !== bc.PE_HORIZON_POLY) continue;
          a2 = r[t4].getSize();
          const s2 = r[t4].getCoord();
          if (h2 = r[t4].getInclusive() > 0, n(h2 === e3), d3) {
            const e4 = new mr();
            e4.addPathPoint2D(oi(s2), a2 - 1, true);
            const n6 = x3(t4), r2 = c2[t4].clone();
            r2.move(n6);
            let i3 = n6;
            const o4 = new x2();
            do {
              if (0 !== i3) {
                o4.setShiftCoords(i3, 0);
                const t5 = new mr({ copy: e4 });
                t5.applyTransformation(o4), y2.addPath(t5, 0, true);
              } else y2.addPath(e4, 0, true);
              i3 += u, r2.move(u);
            } while (r2.vmin < f3.vmax);
          } else y2.addPathPoint2D(oi(s2), a2 - 1, true);
        }
      }
      d3 && (y2 = new I3().execute(y2, new n3(f3.vmin, -g - m2, f3.vmax, g + m2), o3, null)), e3 ? new wh().accelerateGeometry(y2, o3, 1) : new Km().accelerateGeometry(y2, o3, 1), new ul().accelerateGeometry(y2, o3, 1), null === this.m_GCSHorizon && (this.m_GCSHorizon = y2, this.m_bGCSHorisonIsInclusive = e3, this.m_GCSSplitLines = p3);
    }
  }
  updateAreaOfUse() {
    return null;
  }
  updatePCSHorizon() {
    if (this.m_peCoordSys.getType() !== bc.PE_TYPE_PROJCS) return;
    const e3 = this.m_peCoordSys.horizonPcsGenerate();
    if (!e3) return;
    let t2;
    this.getPCSInfo();
    const n5 = e3[0].getKind();
    e3[0].getInclusive();
    const r = n3.constructEmpty(), i2 = e3[0].getNump();
    let o2 = false;
    if (n5 === bc.PE_HORIZON_RECT) {
      const s2 = e3[0].getCoord();
      r.setFromPoints(oi(s2), 2), t2 = new he({ env2D: r });
    } else {
      let s2 = -1;
      for (let t3 = 0; t3 < i2; t3++) e3[t3].getKind() === bc.PE_HORIZON_POLY && (s2 = t3);
      n(s2 >= 0);
      const n6 = e3[s2].getSize() - 1, r2 = e3[s2].getCoord(), a2 = new mr();
      t2 = a2, a2.addPathPoint2D(oi(r2), n6, true), o2 = true;
    }
    if (this.getPCSInfo().isDensificationNeeded()) {
      n(n5 !== bc.PE_HORIZON_RECT);
      const e4 = 1e5 * this.getOneMeterPCSUnit();
      t2 = new o().execute(t2, e4, 0, 0, null);
    }
    if (o2) {
      {
        const e4 = new he();
        t2.queryEnvelope(e4), t2.calculateArea2D(), t2.calculateLength2D(), t2.getExteriorRingCount();
      }
      new wh().accelerateGeometry(t2, null, 1);
    }
    null === this.m_PCSHorizon && (this.m_PCSHorizon = t2);
  }
  updatePannableExtent() {
    const e3 = this.m_peCoordSys.getType();
    if (e3 === bc.PE_TYPE_PROJCS) {
      const e4 = this.m_peCoordSys, t2 = this.getPCSInfo().getCentralMeridian(), n5 = e4.getGeogcs();
      n5 || b("");
      const r = [t2 + 1 / n5.getUnit().getUnitFactor() * Math.PI, 0];
      wc.geogToProj(e4, 1, r);
      const i2 = r[0], o2 = e4.getParameters()[bc.PE_PARM_X0].getValue(), h2 = this.getPCSHorizon(), m2 = n3.constructEmpty();
      h2.queryEnvelope(m2);
      const l2 = Math.abs(i2 - o2), g = l2 + o2, u = -1 * l2 + o2, c = m2.ymax, _ = m2.ymin;
      this.m_pannableExtent.setCoords({ xmin: u, ymin: _, xmax: g, ymax: c });
    } else if (e3 === bc.PE_TYPE_GEOGCS) {
      const e4 = 1 / this.m_peCoordSys.getUnit().getUnitFactor() * Math.PI;
      this.m_pannableExtent.setCoords({ xmin: -e4, ymin: -e4 / 2, xmax: e4, ymax: e4 / 2 });
    } else b("");
  }
  updatePannableExtentGCS() {
    const e3 = this.m_peCoordSys.getType();
    if (e3 === bc.PE_TYPE_PROJCS) {
      const e4 = this.m_peCoordSys, t2 = this.m_centralMeridian, n5 = e4.getGeogcs();
      n5 || b("");
      const r = 1 / n5.getUnit().getUnitFactor() * Math.PI, i2 = this.getGCSHorizon(), o2 = n3.constructEmpty();
      i2.queryEnvelope(o2), this.m_pannableExtentGCS.setCoords({ xmin: t2 - r, ymin: o2.ymin, xmax: t2 + r, ymax: o2.ymax });
    } else if (e3 === bc.PE_TYPE_GEOGCS) {
      const e4 = 1 / this.m_peCoordSys.getUnit().getUnitFactor() * Math.PI;
      this.m_pannableExtentGCS.setCoords({ xmin: -e4, ymin: -e4 / 2, xmax: e4, ymax: e4 / 2 });
    } else b("");
  }
  updateDomain() {
    if (1 === this.m_csType) {
      const e3 = 400 * this.getOneDegreeGCSUnit();
      this.m_domain = n3.construct(-e3, -e3, e3, e3);
    } else {
      n(2 === this.m_csType);
      const e3 = Nc.generate(this.m_peCoordSys, Nc.PE_PCSINFO_OPTION_DOMAIN);
      e3 || b("generate pcs info failed");
      const t2 = new n3(e3.getDomainMinx(), e3.getDomainMiny(), e3.getDomainMaxx(), e3.getDomainMaxy());
      this.m_domain.isEmpty() && this.m_domain.setCoords({ env2D: t2 });
    }
  }
  updatePoles() {
    if (this.m_peCoordSys.getType() === bc.PE_TYPE_PROJCS) {
      const e3 = 90 * this.getOneDegreeGCSUnit(), t2 = [[0, e3], [0, -e3]];
      wc.geogToProj(this.m_peCoordSys, 2, t2);
      const s2 = this.getPCSInfo().getNorthPoleLocation() !== Nc.PE_POLE_OUTSIDE_BOUNDARY, n5 = this.getPCSInfo().getSouthPoleLocation() !== Nc.PE_POLE_OUTSIDE_BOUNDARY;
      this.m_polesUpdated || (s2 && this.m_northPole.setCoords(t2[0][0], t2[0][1]), n5 && this.m_southPole.setCoords(t2[1][0], t2[1][1]), this.m_polesUpdated = 1);
    } else this.m_polesUpdated = 1;
  }
  updateGeogToProjFactors() {
    if (this.m_peCoordSys.getType() === bc.PE_TYPE_PROJCS) {
      const e3 = this.getOneDegreeGCSUnit(), t2 = this.m_pPCSInfoNoDomain.getCentralMeridian(), s2 = [0, 0, 0, 0];
      s2[0] = t2, s2[1] = 0, s2[2] = t2 + e3, s2[3] = 0;
      const n5 = wc.geogToProj(this.m_peCoordSys, 2, s2);
      n(2 === n5);
      const r = (s2[2] - s2[0]) / e3, i2 = s2[0];
      0 === this.m_geogToProjFactorsUpdated && (this.m_geogToProjFactor = r, this.m_geogToProjOffset = i2, this.m_geogToProjFactorsUpdated = 1);
    } else this.m_geogToProjFactorsUpdated = 1;
  }
  getOneMeterPCSUnit() {
    return this.m_oneMeterPCS;
  }
  getOneDegreeGCSUnit() {
    return this.m_oneDegreeGCS;
  }
  getGcsUnitFactor() {
    return this.m_gcsUnitFactor;
  }
  getUnitsPerMillimeter() {
    return this.m_oneMillimeter;
  }
  getGCSSplitLines() {
    return this.m_bIsPannable ? null : (this.m_GCSHorizon || this.updateGCSHorizon(), this.m_GCSSplitLines);
  }
  getGCSHorizon() {
    return this.m_bIsPannable ? this.getGCSHorizonPannable() : (null !== this.m_GCSHorizon || this.updateGCSHorizon(), this.m_GCSHorizon);
  }
  getGCSHorisonIsInclusive() {
    return this.m_bIsPannable || this.getGCSHorizon(), this.m_bGCSHorisonIsInclusive;
  }
  getPCSHorizon() {
    return this.m_bIsPannable ? this.getPCSHorizonPannable() : (null !== this.m_PCSHorizon || this.updatePCSHorizon(), this.m_PCSHorizon);
  }
  getPole(e3) {
    return this.m_bIsPannable || 0 !== this.m_polesUpdated || this.updatePoles(), e3 ? this.m_southPole : this.m_northPole;
  }
  getGeogToProjFactors() {
    return 0 === this.m_geogToProjFactorsUpdated && this.updateGeogToProjFactors(), $t(this.m_geogToProjFactor, this.m_geogToProjOffset);
  }
  getDomainXY() {
    if (this.m_bIsPannable) return this.m_domain.clone();
    let e3 = false;
    return e3 = this.m_domain.isEmpty(), e3 && this.updateDomain(), this.m_domain.clone();
  }
  getPrimeMeridian() {
    return this.m_primeMeridian;
  }
  getLatestID() {
    return this.m_WKID;
  }
  getOldID() {
    let e3 = this.m_oldWKID;
    if (e3 < 0) {
      if (e3 = 0, this.m_WKID > 0) {
        const t2 = [0], s2 = [0];
        qc(this.m_peCoordSys.getType(), this.m_WKID, t2, s2) || b("query_code_change"), e3 = t2[0];
      }
      this.m_oldWKID = e3;
    }
    return e3;
  }
  isCustomWkid() {
    return false;
  }
  isPannable() {
    return this.m_bIsPannable;
  }
  getPannableExtent() {
    return this.m_pannableExtent.clone();
  }
  getPannableExtentGCS() {
    return this.m_pannableExtentGCS.clone();
  }
  getAreaOfUse() {
    return null !== this.m_areaOfUse ? this.m_areaOfUse : this.updateAreaOfUse();
  }
  getVcsCode() {
    return 0;
  }
  saveMemory() {
  }
  getCSType() {
    return this.m_csType;
  }
  getUnit() {
    return this.m_unit;
  }
  setCached() {
    this.m_bCached = true;
  }
  getCached() {
    return this.m_bCached;
  }
  static equal(e3, t2) {
    return false;
  }
  static equal_for_projection(e3, t2) {
    return false;
  }
};
var Bg = class {
  constructor(e3, t2 = true) {
    this.m_oneMeter = 0, this.m_WKID = -1, this.m_oldWKID = -1, this.m_canonicalWkt = "not yet implemented", this.m_model = 0, this.m_unit = new bu(), this.m_cached = false;
  }
  setCached(e3 = true) {
    this.m_cached = e3;
  }
  getCached() {
    return this.m_cached;
  }
  getOneMeterUnit() {
    return 0;
  }
  getLatestID() {
    return this.m_WKID;
  }
  getOldID() {
    let e3 = this.m_oldWKID;
    return e3 < 0 && (e3 = 0, this.m_WKID > 0 && (e3 = this.m_WKID), this.m_oldWKID = e3), e3;
  }
  getModel() {
    return 0;
  }
  isCustomWkid() {
    return false;
  }
  getVerticalUnit() {
    return this.m_unit;
  }
  static equal(e3, t2) {
    return false;
  }
  static equal_for_projection(e3, t2) {
    return false;
  }
};
function Og(e3, t2, n5) {
  return Yg(e3, t2, n3.constructEmpty());
}
function Yg(e3, t2, s2, n5) {
  return Xg(true, e3, t2, s2);
}
function Rg(e3, t2, s2, n5) {
  return Lg(true, e3, t2, s2, n5);
}
function Xg(e3, t2, s2, n5, r) {
  Uu() || G("cannot create projection transformation");
  return t2.hasVCS() && s2.hasVCS() ? jg() : Zg(t2, s2, n5);
}
function Lg(e3, t2, s2, n5, r, i2) {
  return Uu() || G("cannot create projection transformation"), new eu(e3 ? 2 : 1, t2, s2, n5, r, i2);
}
function zg(e3, t2, s2, r, i2, o2 = false) {
  t2 && s2 || P(""), Uu() || G("cannot obtain geotransformation list");
  if (1 === e3 && t2.hasVCS() && s2.hasVCS()) return z("hv xform not impl"), [];
  {
    const e4 = Qc(t2, s2, r, i2, o2), n5 = [];
    for (const t3 of e4) n5.push(t3);
    return n5;
  }
}
function Wg() {
  return { centralMeridianOfOutputGCS: Number.NaN, densificationStep: Number.NaN, clipWithInputHorizon: true, clipWithOutputHorizon: true, legacyHorizonClipping: false, normalizeResultGeometry: false, equals(e3) {
    return ls(this.centralMeridianOfOutputGCS, e3.centralMeridianOfOutputGCS) && ls(this.densificationStep, e3.densificationStep) && this.clipWithInputHorizon === e3.clipWithInputHorizon && this.clipWithOutputHorizon === e3.clipWithOutputHorizon && this.legacyHorizonClipping === e3.legacyHorizonClipping && this.normalizeResultGeometry === e3.normalizeResultGeometry;
  } };
}
function jg(e3, t2, s2, n5) {
  return n(0), {};
}
function Zg(e3, t2, r, i2) {
  e3 && t2 || P("!inputSR || !outputSR");
  const o2 = e3.getLatestID(), a2 = t2.getLatestID();
  if (3857 === o2 && 4326 === a2) {
    if (e3.m_bDefaultDescriptor && t2.m_bDefaultDescriptor) return pu();
  } else if (4326 === o2 && 3857 === a2 && e3.m_bDefaultDescriptor && t2.m_bDefaultDescriptor) return fu();
  const h2 = n3.constructEmpty();
  h2.setCoords({ env2D: r });
  const m2 = e3.getCoordinateSystemType(), l2 = t2.getCoordinateSystemType();
  if (0 === m2 || 0 === l2) return Kg(e3, t2);
  const g = e3.getGCS().getLatestID(), u = t2.getGCS().getLatestID();
  if (g > 0 && g === u) return Kg(e3, t2);
  const c = new mu(e3, t2, r);
  {
    const e4 = gu2(c);
    if (e4) return e4;
  }
  const _ = zg(0, e3, t2, h2, 1, true);
  return uu(c, Kg(e3, t2, _.length ? _[0] : void 0));
}
function Kg(e3, t2, s2, n5, r) {
  return new eu(1, e3, t2, s2, n5, r);
}
function Qg() {
  return { flagsMask: 0, setFlag(e3, t2) {
    t2 ? this.flagsMask |= e3 : this.flagsMask &= ~e3;
  }, hasFlag(e3) {
    return 0 !== (this.flagsMask & e3);
  } };
}
function Jg() {
  return { m_extendedParams: Wg(), m_extendedParamsInternal: Qg() };
}
function $g() {
  return Jg();
}
var eu = class _eu {
  constructor(e3, t2, s2, r, i2, o2) {
    let a2, h2;
    this.m_datumTran = null, this.m_bIdentity = true, this.m_bIdentityGeogToGeog = true, this.m_bVertical = false, this.m_bNormalize = false, t2 && s2 || P("!inputSR || !outputSR"), r && 0 === r.getType() && (r.m_bReadOnly = true), this.m_bNormalize = false, 1 !== e3 && (a2 = t2.getVCS(), h2 = s2.getVCS(), this.m_bVertical = null != a2 && null != h2), this.m_inputSR = t2, this.m_outputSR = s2, this.m_bIdentity = false, this.m_bIdentityGeogToGeog = false, n(!this.m_params), i2 && (this.m_params = Jg(), this.m_params.m_extendedParams = i2), o2 && (this.m_params || (this.m_params = Jg()), this.m_params.m_extendedParamsInternal = o2);
    let m2 = false;
    const g = null != r, u = t2.getCoordinateSystemType(), c = s2.getCoordinateSystemType();
    if (s2.isPannable() && 0 !== u && i2) {
      const e4 = i2.centralMeridianOfOutputGCS;
      if (!Number.isNaN(e4) && s2.isPannable()) {
        const t3 = s2.getPannableExtent(), n5 = t3.getCenterX();
        if (n5 !== e4) {
          const s3 = Math.ceil(t3.width());
          e4 + s3 !== n5 + s3 && (m2 = true);
        }
      }
    }
    const _ = i2 && i2.normalizeResultGeometry;
    if (t2.equals(s2)) return this.m_bIdentity = !m2, this.m_bIdentityGeogToGeog = true, void this.updateProjector();
    const d2 = !g && t2.equalForProjection(s2, this.m_bVertical);
    this.m_bIdentity = d2 && !m2, this.m_bIdentity ? this.m_bIdentityGeogToGeog = true : 0 !== u && 0 !== c && (_ && this.m_outputSR.isPannable() && (this.m_bNormalize = _), this.m_datumTran = r || null, this.m_bIdentityGeogToGeog = (!this.m_datumTran || 0 === this.m_datumTran.count()) && this.m_inputSR.getGCS().equalForProjection(this.m_outputSR.getGCS(), this.m_bVertical)), this.updateProjector();
  }
  getInputSR() {
    return this.m_inputSR;
  }
  getOutputSR() {
    return this.m_outputSR;
  }
  getDatumTransformation() {
    return this.m_datumTran;
  }
  getInverse() {
    const e3 = new _eu(1, this.m_outputSR, this.m_inputSR, this.m_datumTran?.createInverse());
    return e3.m_bIdentity = this.m_bIdentity, e3.m_bVertical = this.m_bVertical, e3.m_bIdentityGeogToGeog = this.m_bIdentityGeogToGeog, e3.updateProjector(), e3;
  }
  isIdentity() {
    return this.m_bIdentity;
  }
  getExtendedParams() {
    return this.m_params ? this.m_params.m_extendedParams : $g().m_extendedParams;
  }
  equals(e3) {
    return n(0), false;
  }
  isVertical() {
    return this.m_bVertical;
  }
  isMatchingTransformation(e3, t2) {
    return n(0), false;
  }
  getGeographicTransformations() {
    return this.m_datumTran;
  }
  getExtendedParamsImpl() {
    return this.m_params ? this.m_params.m_extendedParams : $g().m_extendedParams;
  }
  getExtendedParamsInternal() {
    return this.m_params ? this.m_params.m_extendedParamsInternal : $g().m_extendedParamsInternal;
  }
  isIdentityGeogToGeog() {
    return this.m_bIdentityGeogToGeog;
  }
  normalizeOutput() {
    return this.m_bNormalize;
  }
  updateProjector() {
    this.m_projector = new Ah(this);
  }
};
var tu = /* @__PURE__ */ new Map();
var su = /* @__PURE__ */ new Map();
var nu = /* @__PURE__ */ new Map();
function ru(e3) {
  let t2 = e3.getCode();
  if (t2 > 0) {
    const e4 = Iu(t2);
    return e4 || Cu(Ic.coordsys(t2));
  }
  const s2 = e3.getName();
  if (su.has(s2)) {
    const t3 = su.get(s2);
    if (t3 && t3.deref()) {
      const s3 = t3.deref();
      if (s3.m_peCoordSys.isEqual(e3)) return s3;
    }
  }
  return t2 = Ic.getCode(e3), Cu(t2 > 0 ? Ic.coordsys(t2) : e3);
}
function iu(e3) {
  e3 <= 0 && R(e3);
  {
    const t3 = Iu(e3);
    if (t3) return t3;
  }
  const t2 = Hc(Ic.coordsys(e3));
  t2.get() || R(e3);
  const s2 = Cu(t2.release());
  return s2.getLatestID() !== e3 && tu.set(e3, new WeakRef(s2)), s2;
}
function ou(e3) {
  const t2 = new Bg({}, true);
  return t2.m_WKID = e3, t2;
}
function au(e3) {
  const t2 = Hc(Ic.fromString(bc.PE_TYPE_COORDSYS, e3));
  return t2.get() || U(e3), ru(t2.release());
}
function hu(e3) {
  su.delete(e3.m_peCoordSys.getName()), nu.delete(_l(e3.m_peCoordSys, 0, false));
}
var mu = class {
  constructor(e3, t2, s2) {
    this.m_hashCode = -1, e3 && (this.m_inputSR = e3, this.m_outputSR = t2, this.m_env = s2.clone(), this.m_hashCode = this.m_inputSR.getHashCode(), this.m_hashCode = As(this.m_hashCode, this.m_outputSR.getHashCode()), this.m_env.isEmpty() || (this.m_hashCode = As(this.m_hashCode, Bs(this.m_env.xmin)), this.m_hashCode = As(this.m_hashCode, Bs(this.m_env.xmax)), this.m_hashCode = As(this.m_hashCode, Bs(this.m_env.ymin)), this.m_hashCode = As(this.m_hashCode, Bs(this.m_env.ymax))));
  }
  getHashCode() {
    return this.m_hashCode;
  }
  equals(e3) {
    return !(this.m_inputSR && !e3.m_inputSR || !this.m_inputSR && e3.m_inputSR) && (this.m_env.equals(e3.m_env) && this.m_inputSR.equals(e3.m_inputSR) && this.m_outputSR.equals(e3.m_outputSR));
  }
  clear() {
    this.m_inputSR = void 0, this.m_outputSR = void 0, this.m_hashCode = -1, this.m_env = void 0;
  }
};
var lu = /* @__PURE__ */ new Map();
function gu2(e3) {
  if (lu.has(e3.getHashCode())) return lu.get(e3.getHashCode());
}
function uu(e3, t2) {
  return lu.set(e3.getHashCode(), t2), t2;
}
var cu;
var _u;
var du;
function pu() {
  return cu || (cu = Rg(hc(), lc())), cu;
}
function fu() {
  return _u || (_u = pu().getInverse()), _u;
}
function xu() {
  return du || (du = Ic.unit(9001)), du;
}
function yu(e3) {
  return null !== Hc(Ic.coordsys(e3)).get();
}
var Pu = /* @__PURE__ */ new Map();
function Eu(e3) {
  if (Pu.has(e3)) return Pu.get(e3);
  {
    const t2 = yu(e3);
    return Pu.set(e3, t2), t2;
  }
}
function Su(e3) {
  return false;
}
function Cu(e3) {
  const t2 = Hc(e3), s2 = e3.getCode();
  if (s2 > 0) {
    const e4 = Iu(s2);
    if (e4) return e4;
  }
  const n5 = e3.getName();
  let r = su.get(n5);
  if (r) {
    const t3 = r.deref();
    if (t3 && t3.m_peCoordSys.isEqual(e3)) return t3;
  }
  const i2 = new qg(t2.release());
  if (s2 > 0) return i2.setCached(), tu.set(s2, new WeakRef(i2)), su.set(n5, new WeakRef(i2)), i2;
  const o2 = _l(e3, 0, false);
  if (r = nu.get(o2), r) {
    const e4 = r.deref();
    if (e4) return e4;
  }
  return i2.setCached(), nu.set(o2, new WeakRef(i2)), i2;
}
function Iu(e3) {
  const t2 = tu.get(e3);
  if (t2) return t2.deref();
}
var bu = class extends ns {
  constructor(e3) {
    return void 0 === e3 ? (super(), this.m_wkid = 9001, void (this.m_peUnit = null)) : "number" == typeof e3 ? (super(), this.m_factor = e3, void (this.m_wkid = 0)) : (super(e3), void (e3 || (this.m_factor = 1, this.m_wkid = 9001, this.m_peUnit = xu())));
  }
  getUnitType() {
    return 0;
  }
  convertFromMeters(e3) {
    return e3 / this.getUnitToBaseFactor();
  }
  convertToMeters(e3) {
    return e3 * this.getUnitToBaseFactor();
  }
};
var wu = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function vu(e3, t2, s2) {
  const n5 = Yt(t2, "R");
  let r = 0, i2 = 0;
  for (let o2 = 0; o2 < t2; o2++) {
    let s3 = e3[r] >> i2 & 31;
    if (i2 += 5, i2 > 31) {
      const t3 = 37 - i2;
      s3 &= (1 << t3) - 1, i2 -= 32, r++, s3 |= (e3[r] & (1 << i2) - 1) << t3;
    }
    const a2 = wu[s3];
    n5[t2 - 1 - o2] = a2;
  }
  return s2 > t2 ? n5.push(..."0".repeat(s2 - t2)) : s2 < t2 && (n5.length = s2), n5.join("");
}
function Nu(e3, t2, s2, n5, r) {
  n(n5 >> 5 < r.length);
  let i2 = t2, o2 = s2;
  for (let a2 = n5; a2 >= 0; a2 -= 2) {
    const t3 = 31 & a2, s3 = 0.5 * (o2 + i2);
    e3 >= s3 ? (r[a2 >> 5] |= 1 << t3, i2 = s3) : o2 = s3;
  }
}
var Tu = /* @__PURE__ */ new Set();
var Gu = 2147483645n;
var Du = 9007199254740990n;
var Vu = "operation is not supported for unknown coordinate systems";
var Fu;
function Hu() {
  return { majorSemiAxis: 0, e2: 0, minorSemiAxis: 0, flattening: 0, isSphere() {
    return 0 === this.e2;
  } };
}
function ku(e3, t2, s2) {
  e3.majorSemiAxis = t2, e3.minorSemiAxis = t2 * (1 - s2), e3.e2 = s2 * (2 - s2), e3.flattening = s2;
}
function Au(e3) {
  if (Ic) return;
  Uc(e3);
  const t2 = Tu;
  Tu = null, t2.forEach((e4) => {
    const t3 = e4.deref();
    t3 && t3.attachToPe();
  });
}
function Mu(e3) {
  Mc(e3);
}
function Uu() {
  return !!Ic;
}
function qu() {
  return !!kc;
}
function Bu() {
  return !!Ic || !!kc;
}
function Ou(e3, t2, s2) {
  return n(Bu()), dc(e3, void 0 === t2 ? 0 : t2, null, false);
}
function Yu(e3, t2) {
  n(Bu());
  const s2 = new oc();
  let n5;
  return Uu() ? (n5 = au(e3), s2.setHorzProj_(n5), s2.m_vertcs = null, s2.m_userWKID = n5.getLatestID()) : (n5 = Ac(e3), s2.m_unit = n5.isPCS ? new bu(n5.metersOrRadiansPerUnit) : new os(n5.metersOrRadiansPerUnit)), uc(s2.m_precisionDescriptor, n5, null, 1), s2.m_bDefaultDescriptor = true, s2.m_userWKT = e3, s2.calculateHashCode(), s2.initDbgName(), s2;
}
function Ru(e3, t2, s2, n5, r = true) {
  let i2 = null;
  return t2 && (i2 = Fm(t2, r)), Xu(e3, i2, s2, n5, r);
}
function Xu(e3, t2, s2, r, i2) {
  e3 || P("!PE_coord_sys");
  const o2 = new oc();
  let a2;
  return a2 = i2 ? ru(e3) : new qg(e3, false), uc(o2.m_precisionDescriptor, a2, t2, r), o2.m_bDefaultDescriptor = true, o2.setHorzProj_(a2), o2.m_vertcs = t2, o2.m_userWKID = a2.getLatestID(), o2.calculateHashCode(), o2.initDbgName(), o2;
}
function Lu(e3, t2, s2 = false) {
  3 === e3.getCoordinateSystemType() && P("image spatial reference cannot be altered");
  const r = new oc(), i2 = e3;
  return r.m_peCoordSysVal = i2.m_peCoordSysVal, r.m_vertcs = i2.m_vertcs, r.m_unit = i2.m_unit, r.m_precisionDescriptor.assign(t2), r.m_localZToXYFactor = i2.m_localZToXYFactor, (Number.isNaN(r.m_precisionDescriptor.m_falseX) || Number.isNaN(r.m_precisionDescriptor.m_falseY)) && (r.m_precisionDescriptor.m_falseX = i2.m_precisionDescriptor.m_falseX, r.m_precisionDescriptor.m_falseY = i2.m_precisionDescriptor.m_falseY), r.m_precisionDescriptor.snapPrecision(), r.m_precisionDescriptor.fixTolerance(), r.m_userWKID = i2.m_userWKID, r.m_precisionDescriptor.equals(i2.m_precisionDescriptor) ? r.m_bDefaultDescriptor = i2.m_bDefaultDescriptor : r.m_bDefaultDescriptor = false, s2 && (r.m_bDefaultDescriptor = true), r.calculateHashCode(), r.initDbgName(), r;
}
function zu(e3, t2, s2) {
  return {};
}
function Wu2(e3, t2, s2) {
  void 0 === t2 && (t2 = 1), (t2 <= 0 || !Number.isFinite(t2)) && P(""), e3 || 1 === t2 || P("null Unit has to have z_to_xy_factor equal to 1");
  const r = new oc();
  r.m_unit = e3;
  const i2 = e3 || new bu(9001);
  return _c(r.m_precisionDescriptor, i2, null, 1), r.m_bDefaultDescriptor = true, Number.isNaN(r.m_precisionDescriptor.m_falseX) && P("NAN false X/Y are not allowed here"), r.m_localZToXYFactor = t2, r.calculateHashCode(), r.initDbgName(), r;
}
function ju(e3, t2) {
  return e3.snapGeometry(t2);
}
function Zu(e3) {
  const t2 = e3.getCoordinateSystemType();
  return 1 === t2 ? e3 : (3 === t2 && n(0), e3.getGCS());
}
function Ku(e3) {
  return n(Bu()), qu() ? Bc(e3) : Eu(e3);
}
function Qu(s2) {
  if (Uu()) {
    const r = { stack: [], error: void 0, hasError: false };
    try {
      return null !== __addDisposableResource(r, Ic.fromString(bc.PE_TYPE_COORDSYS, s2, true), false);
    } catch (n5) {
      r.error = n5, r.hasError = true;
    } finally {
      __disposeResources(r);
    }
  }
  try {
    return Ac(s2), true;
  } catch (r) {
  }
  return false;
}
var Ju;
function $u() {
  return Ju || (Ju = (() => {
    const e3 = Math.trunc(Math.random() * ds()), t2 = Date.now();
    return `|abba_000|${e3.toString(16)}|${t2.toString(16)}|`;
  })()), Ju;
}
!(function(e3) {
  e3[e3.utmDefault = 0] = "utmDefault", e3[e3.utmNorthSouth = 1] = "utmNorthSouth";
})(Fu || (Fu = {}));
var ec = 0;
function tc(e3 = "") {
  let t2 = `${$u()}${ec++}`;
  return "" !== e3 && (t2 += `|${e3}`), t2;
}
function sc(e3) {
  return e3.startsWith($u());
}
var nc;
var rc;
var ic;
var oc = class e2 {
  destroy() {
    hu(this.m_peCoordSysVal), 1 === this.getCoordinateSystemType() || 2 === this.getCoordinateSystemType() ? this.getPECoordSys().destroy() : b("SpatialReference.destroy");
  }
  constructor() {
    this.m_vertcs = null, this.m_peCoordSysVal = null, this.m_userWKID = 0, this.m_userWKT = null, this.m_geogSpatialReference = null, this.m_srToGcs = null, this.m_gcsToSr = null, this.m_defaultPrecisionSR = null, this.m_localZToXYFactor = -1, this.m_precisionDescriptor = new ac(), this.m_hashCode = 0, this.m_bDefaultDescriptor = false, gc(this.m_precisionDescriptor), Tu && Tu.add(new WeakRef(this));
  }
  attachToPe() {
    (this.m_userWKID > 0 ? Ou(this.m_userWKID) : Yu(this.m_userWKT)).copyTo(this, false);
  }
  copyTo(e3, t2 = true) {
    (t2 || e3.m_bDefaultDescriptor) && (e3.m_bDefaultDescriptor = this.m_bDefaultDescriptor, e3.m_precisionDescriptor.assign(this.m_precisionDescriptor)), e3.m_defaultPrecisionSR = null, e3.m_gcsToSr = this.m_gcsToSr, e3.m_geogSpatialReference = this.m_geogSpatialReference, e3.m_hashCode = this.m_hashCode, e3.m_localZToXYFactor = this.m_localZToXYFactor, e3.m_peCoordSysVal = this.m_peCoordSysVal, e3.m_srToGcs = this.m_srToGcs, e3.m_userWKID = this.m_userWKID, e3.m_userWKT = this.m_userWKT, e3.m_vertcs = this.m_vertcs, e3.m_unit = this.m_unit;
  }
  getHashCode() {
    return this.m_hashCode;
  }
  getHashCodeHorizontal() {
    let e3 = 0;
    return e3 = this.m_peCoordSysVal ? this.m_peCoordSysVal.getHashCode() : this.m_unit ? this.m_unit.getHashCode() : 305419891, e3;
  }
  updateTransform(e3) {
    if (1 === this.getCoordinateSystemType()) return Rg(this, this, null);
    let t2 = e3 ? this.m_srToGcs : this.m_gcsToSr;
    if (t2) return t2;
    const s2 = this.getGCS(), n5 = this;
    t2 = e3 ? Rg(n5, s2, null) : Rg(s2, n5, null);
    const r = t2, i2 = e3 ? this.m_srToGcs : this.m_gcsToSr;
    return i2 || (e3 ? this.m_srToGcs = r : this.m_gcsToSr = r, t2);
  }
  getHashCodeVertical() {
    return this.m_vertcs ? this.m_vertcs.getHashCode() : 0;
  }
  calculateHashCode() {
    let e3 = this.getHashCodeHorizontal();
    const t2 = this.getHashCodeVertical(), s2 = this.m_precisionDescriptor.getHashCode();
    e3 = As(e3, t2), this.m_hashCode = As(e3, s2);
  }
  initDbgName() {
  }
  setHorzProj_(e3) {
    this.m_peCoordSysVal = e3, this.m_unit = this.m_peCoordSysVal.getUnit();
  }
  getTolerance(e3 = 0) {
    return this.m_precisionDescriptor.getTolerance(e3);
  }
  getResolution(e3 = 0) {
    return this.m_precisionDescriptor.getResolution(e3);
  }
  getPECoordSys() {
    return this.m_peCoordSysVal ? this.m_peCoordSysVal.m_peCoordSys : null;
  }
  getPCSInfo() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPCSInfo();
  }
  getCentralMeridian() {
    if (this.throwIfNotGCSOrPCS(), 1 === this.getCoordinateSystemType()) return 0;
    return this.getPCSInfo().getCentralMeridian();
  }
  getCoordinateSystemType() {
    const e3 = this.getPECoordSys();
    if (e3) {
      switch (e3.getType()) {
        case bc.PE_TYPE_GEOGCS:
          return 1;
        case bc.PE_TYPE_PROJCS:
          return 2;
        default:
          return 0;
      }
    } else {
      if ((this.m_userWKID > 0 || this.m_userWKT) && this.m_unit instanceof bu) return 2;
      if (this.m_unit instanceof os) return 1;
    }
    return 0;
  }
  getID() {
    return this.m_userWKID;
  }
  getLatestID() {
    return this.m_peCoordSysVal ? this.m_peCoordSysVal.getLatestID() : this.m_userWKID;
  }
  getOldID() {
    return this.m_peCoordSysVal ? this.m_peCoordSysVal.getOldID() : this.m_userWKID;
  }
  getVerticalID() {
    return z("vcs not implemented"), 0;
  }
  getLatestVerticalID() {
    return this.m_vertcs ? this.m_vertcs.getLatestID() : 0;
  }
  getOldVerticalID() {
    return z("vcs not implemented"), 0;
  }
  getPEVerticalCoordSys() {
    return null;
  }
  getPole(e3) {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPole(e3);
  }
  getText() {
    const e3 = this.getPECoordSys();
    return e3 ? pl(e3) : this.m_userWKT ?? "";
  }
  getTextExtended(e3) {
    const t2 = this.getPECoordSys();
    return t2 ? this.getPEVerticalCoordSys() ? dl(null, t2, this.getPEVerticalCoordSys()) : pl(t2, e3) : this.m_userWKT ?? "";
  }
  getText2(e3 = -1) {
    const t2 = this.getPECoordSys();
    return t2 ? fl(t2, e3) : this.m_userWKT ?? "";
  }
  getUnit() {
    return this.m_unit;
  }
  getUnitsPerMillimeter() {
    return this.m_peCoordSysVal ? this.m_peCoordSysVal.getUnitsPerMillimeter() : this.m_unit instanceof bu ? 1e-3 / this.m_unit.getUnitToBaseFactor() : this.m_unit instanceof os ? 1e-3 / (Ac(this.m_userWKT ?? this.m_userWKID).semiMajor * this.m_unit.getUnitToBaseFactor()) : (C("sr object not in valid state"), 0);
  }
  getAuthorityName() {
    return this.getPECoordSys() ? xl() : "";
  }
  getVerticalUnit() {
    return z("vcs not implemented"), {};
  }
  getVCS() {
    return this.m_vertcs;
  }
  hasVCS() {
    return false;
  }
  getGCSHorisonIsInclusive() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getGCSHorisonIsInclusive();
  }
  getGCSHorizon() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getGCSHorizon();
  }
  getGCS() {
    const e3 = this.getCoordinateSystemType();
    if (0 === e3) C(Vu);
    else {
      if (1 === e3) return this;
      3 === e3 && C("image cs not supported");
    }
    if (this.m_geogSpatialReference) return this.m_geogSpatialReference;
    let t2;
    if (this === hc() || this === mc()) t2 = lc();
    else {
      n(this.m_peCoordSysVal);
      const e4 = this.m_peCoordSysVal.m_peCoordSys.getGeogcs();
      e4 || b(""), t2 = Ru(e4, this.m_vertcs, null, this.m_precisionDescriptor.getPrecision(), this.m_peCoordSysVal.getCached());
    }
    return this.m_geogSpatialReference ? t2 = this.m_geogSpatialReference : this.m_geogSpatialReference = t2, t2;
  }
  getGCSSplitLines() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getGCSSplitLines();
  }
  toGCS(e3, t2) {
    if (0 === e3.length) return 0;
    e3.length > t2.length && P("coordsSrc.size() > coordsDst.size()");
    const s2 = this.getCoordinateSystemType();
    if (0 === s2 && C(Vu), 1 === s2) return Gt(t2, e3, e3.length), e3.length;
    n(this.m_peCoordSysVal);
    const r = this.getSRToGCSTransform();
    return new qh2().transform(r, e3, e3.length, t2);
  }
  toGeohash(e3, t2 = 8) {
    const s2 = e3.clone();
    s2.scale(9102 === this.getGCS().getUnit().getID() ? 1 : this.getGCS().getUnit().getUnitToBaseFactor() / Math.PI * 180), s2.x < -180 ? (s2.x = ct(s2.x, 360), s2.x < -180 && (s2.x += 360)) : s2.x > 180 && (s2.x = ct(s2.x, 360), s2.x > 180 && (s2.x -= 360)), s2.y > 90 && (s2.y = 90), s2.y < -90 && (s2.y = -90);
    const n5 = 5 * t2, r = new Uint32Array(4);
    Nu(s2.x, -180, 180, n5 - 1, r), Nu(s2.y, -90, 90, n5 - 2, r);
    return vu(r, t2, t2);
  }
  isPannable() {
    const e3 = this.getCoordinateSystemType();
    return 0 !== e3 && 3 !== e3 && (n(this.m_peCoordSysVal), this.m_peCoordSysVal.isPannable());
  }
  getPannableExtent() {
    return this.isPannable() || P("!is_pannable"), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPannableExtent();
  }
  getPannableExtentInGCS() {
    return this.isPannable() || P("!is_pannable"), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPannableExtentGCS();
  }
  throwIfNotGCSOrPCS() {
    const e3 = this.getCoordinateSystemType();
    1 !== e3 && 2 !== e3 && P("Not a GCS or PCS");
  }
  getDomainXY() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getDomainXY();
  }
  getFullWorldExtent() {
    return this.throwIfNotGCSOrPCS(), this.isPannable() ? this.getPannableExtent() : this.getDomainXY();
  }
  queryPrecisionDescriptor(e3) {
    if (e3.assign(this.m_precisionDescriptor), Number.isNaN(e3.m_falseX)) if (Uu() || G("cannot query precision descriptor"), n(null !== this.m_peCoordSysVal), 2 !== this.m_precisionDescriptor.m_precision) {
      const t2 = this.m_peCoordSysVal.getDomainXY();
      e3.m_falseX = t2.xmin, e3.m_falseY = t2.ymin;
    } else e3.m_falseX = -Number.MAX_VALUE, e3.m_falseY = -Number.MAX_VALUE;
  }
  queryPrecisionDescriptorWithoutFalseXY(e3) {
    e3.assign(this.m_precisionDescriptor), e3.m_falseX = Number.NaN, e3.m_falseY = Number.NaN;
  }
  queryDefaultPrecisionDescriptorWithoutFalseXY(e3) {
    if (this.m_bDefaultDescriptor) e3.assign(this.m_precisionDescriptor);
    else {
      const t2 = this.getCoordinateSystemType();
      0 === t2 ? _c(e3, this.m_unit, this.m_vertcs, this.m_precisionDescriptor.getPrecision()) : 3 === t2 ? z("image cs") : uc(e3, this.m_peCoordSysVal, this.m_vertcs, this.m_precisionDescriptor.getPrecision());
    }
    e3.m_falseX = Number.NaN, e3.m_falseY = Number.NaN;
  }
  horizontalEqual(e3) {
    return Mg(this.m_peCoordSysVal, e3.m_peCoordSysVal);
  }
  verticalEqual(e3) {
    return null !== this.m_vertcs == (null !== e3.m_vertcs) && (!this.m_vertcs || this.m_vertcs.equals(e3.m_vertcs));
  }
  equals(e3) {
    const t2 = e3;
    if (this === t2) return true;
    if (!this.horizontalEqual(t2) || !this.verticalEqual(t2)) return false;
    if (!t2.m_peCoordSysVal) {
      if (n(!this.m_peCoordSysVal), null !== this.m_unit != (null !== t2.m_unit)) return false;
      if (this.m_unit && !this.m_unit.equals(t2.m_unit)) return false;
      if (this.m_localZToXYFactor !== t2.m_localZToXYFactor) return false;
    }
    if (!this.m_bDefaultDescriptor || !t2.m_bDefaultDescriptor) {
      if (this.m_peCoordSysVal) {
        if (!this.m_precisionDescriptor.equalsWithoutFalseXY(t2.m_precisionDescriptor)) return false;
        n(t2.m_peCoordSysVal);
        let e4 = this.m_precisionDescriptor.m_falseX, s2 = this.m_precisionDescriptor.m_falseY;
        if (Number.isNaN(e4)) {
          const t3 = this.m_peCoordSysVal.getDomainXY();
          e4 = t3.xmin, s2 = t3.ymin;
        }
        let n5 = t2.m_precisionDescriptor.m_falseX, r = t2.m_precisionDescriptor.m_falseY;
        if (Number.isNaN(n5)) {
          const e5 = t2.m_peCoordSysVal.getDomainXY();
          n5 = e5.xmin, r = e5.ymin;
        }
        return e4 === n5 && s2 === r;
      }
      return this.m_precisionDescriptor.equals(t2.m_precisionDescriptor);
    }
    return true;
  }
  equalForProjection(e3, t2) {
    if (this === e3) return true;
    const s2 = this.getCoordinateSystemType(), n5 = e3.getCoordinateSystemType();
    if (0 === s2 || 0 === n5) return 0 === s2 && 0 === n5 ? (!t2 || this.getZToXYFactor() === e3.getZToXYFactor()) && (!this.getUnit() || !e3.getUnit() || this.getUnit().equals(e3.getUnit())) : 3 !== s2 && 3 !== n5 && (null === this.getUnit() || null === e3.getUnit() || (!t2 || this.getZToXYFactor() === e3.getZToXYFactor()) && this.getUnit().equals(e3.getUnit()));
    if (s2 !== n5) return false;
    if (3 === s2) return this.equals(e3);
    if (Ug(this.m_peCoordSysVal, e3.m_peCoordSysVal)) {
      if (!t2) return true;
      if (null !== this.m_vertcs == (null !== e3.m_vertcs)) return !this.m_vertcs || this.m_vertcs.equalForProjection(e3.m_vertcs);
    }
    return false;
  }
  equalHorizontal(e3) {
    return this.horizontalEqual(e3);
  }
  equalVertical(e3) {
    return n(0), false;
  }
  equalVerticalVCS(e3) {
    return n(0), false;
  }
  convergenceAngle(e3) {
    return n(0), 0;
  }
  getPeCoordsysCopy() {
    if (this.m_peCoordSysVal) {
      const e3 = this.m_peCoordSysVal.m_peCoordSys;
      return e3 || b("cannot clone coord sys"), e3;
    }
    return null;
  }
  getPeVertcsCopy() {
    return n(0), 0;
  }
  throwIfLocal() {
    0 === this.getCoordinateSystemType() && P(Vu);
  }
  getPrimeMeridian() {
    return this.throwIfLocal(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPrimeMeridian();
  }
  getSRToGCSTransform() {
    return this.updateTransform(true);
  }
  getGCSToSRTransform() {
    return this.updateTransform(false);
  }
  getOneMeter() {
    return 1e3 * this.getUnitsPerMillimeter();
  }
  getOneMeterPCSUnit() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getOneMeterPCSUnit();
  }
  getDefaultPrecisionSR() {
    if (this.m_bDefaultDescriptor) return this;
    if (null === this.m_defaultPrecisionSR) {
      const e3 = new ac();
      this.queryDefaultPrecisionDescriptorWithoutFalseXY(e3), this.m_defaultPrecisionSR = Lu(this, e3, true);
    }
    return this.m_defaultPrecisionSR;
  }
  getPCSHorizon() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getPCSHorizon();
  }
  getHorzUnitFactor() {
    return this.m_unit ? this.m_unit.getUnitToBaseFactor() : 1;
  }
  querySpheroidData(e3) {
    this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal);
    const t2 = this.getGCS().getPECoordSys().getDatum().getSpheroid(), s2 = t2.getFlattening();
    ku(e3, t2.getAxis(), s2);
  }
  getAreaOfUse() {
    0 === this.getCoordinateSystemType() && C(""), n(this.m_peCoordSysVal);
    const e3 = this.m_peCoordSysVal.getAreaOfUse();
    return null === e3 ? new ss() : new ss({ geom: e3.clone(), sr: Ou(4326) });
  }
  getZToXYFactor() {
    return 1;
  }
  isCustomWkid() {
    return false;
  }
  getOneDegreeGCSUnit() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getOneDegreeGCSUnit();
  }
  getGcsUnitFactor() {
    return this.throwIfNotGCSOrPCS(), n(this.m_peCoordSysVal), this.m_peCoordSysVal.getGcsUnitFactor();
  }
  snapGeometry(e3) {
    if (e3.isEmpty()) return false;
    if (2 === this.m_precisionDescriptor.getPrecision()) return false;
    const t2 = e3.getGeometryType();
    if (y(t2)) return this.snapMultiVertex_(e3);
    if (t2 === a.enumPoint) return this.snapPoint_(e3);
    if (t2 === a.enumEnvelope) return this.snapEnvelope_(e3);
    if (f(t2)) return this.snapSegment_(e3);
    if (t2 === a.enumGeometryCollection) {
      const t3 = e3;
      let s2 = false;
      for (let e4 = 0, n5 = t3.getGeometryCount(); e4 < n5; ++e4) s2 = this.snapGeometry(t3.getGeometry(e4)) || s2;
      return s2;
    }
    b("what else?");
  }
  snapMultiVertex_(e3) {
    if (n(!e3.isEmpty()), n(2 !== this.m_precisionDescriptor.getPrecision()), h(e3.getGeometryType())) {
      const t3 = e3;
      if (t3.hasNonLinearSegments()) return this.snapGeometryWithCurves_(t3);
    }
    const t2 = e3.getImpl(), s2 = t2.getDescription();
    let n5 = false;
    for (let r = 0, i2 = s2.getAttributeCount(); r < i2; r++) {
      const e4 = s2.getSemantics(r), i3 = t2.getAttributeStreamRef(e4);
      n5 = this.snapAttributes(e4, i3, 0, t2.getPointCount()) || n5;
    }
    return n5 && t2.notifyModifiedFlags(2001), n5;
  }
  snapPoint_(e3) {
    return false;
  }
  snapEnvelope_(e3) {
    return false;
  }
  snapSegment_(e3) {
    n(!e3.isEmpty()), n(2 !== this.m_precisionDescriptor.getPrecision());
    const t2 = new ac();
    this.queryPrecisionDescriptor(t2);
    const s2 = e3.getStartXY(), n5 = new mi();
    n5.x = pc(s2.x, t2.getFalseX(), t2.getGridUnitsXY()), n5.y = pc(s2.y, t2.getFalseY(), t2.getGridUnitsXY());
    let r = !n5.equals(s2);
    const i2 = e3.getEndXY(), o2 = new mi();
    o2.x = pc(i2.x, t2.getFalseX(), t2.getGridUnitsXY()), o2.y = pc(i2.y, t2.getFalseY(), t2.getGridUnitsXY()), r ||= !o2.equals(i2), r && e3.changeEndPoints2D(n5, o2);
    const a2 = (t3, s3, n6) => {
      let r2 = false;
      {
        const i3 = e3.getStartAttributeAsDbl(t3, 0), o3 = pc(i3, s3, n6), a3 = !ls(o3, i3);
        r2 ||= a3, a3 && e3.setStartAttribute(t3, 0, o3);
      }
      {
        const i3 = e3.getEndAttributeAsDbl(t3, 0), o3 = pc(i3, s3, n6), a3 = !ls(o3, i3);
        r2 ||= a3, a3 && e3.setEndAttribute(t3, 0, o3);
      }
      return r2;
    };
    let h2 = r ? 1 : 0;
    return e3.hasAttribute(1) && (h2 |= a2(1, t2.getFalseZ(), t2.getGridUnitsZ()) ? 1 : 0), e3.hasAttribute(2) && (h2 |= a2(2, t2.getFalseM(), t2.getGridUnitsM()) ? 1 : 0), !!h2;
  }
  snapGeometryWithCurves_(e3) {
    n(!e3.isEmpty()), n(2 !== this.m_precisionDescriptor.getPrecision());
    const t2 = e3.createInstance(), s2 = new Pm();
    let n5 = 0;
    for (let r = 0, i2 = e3.getPathCount(); r < i2; ++r) {
      const i3 = e3.getSegmentCountPath(r);
      if (0 === i3) {
        if (t2.addPath(e3, r, true), 1 === t2.getPathSize(r)) {
          const e4 = new se();
          t2.getPointByVal(t2.getPointCount() - 1, e4), n5 |= this.snapGeometry(e4) ? 1 : 0, t2.setPointByVal(t2.getPointCount() - 1, e4);
        }
        continue;
      }
      const o2 = e3.isClosedPath(r);
      for (let a2 = 0, h2 = o2 ? i3 - 1 : i3; a2 < h2; ++a2) e3.getSegmentFromPath(r, a2, s2, false), n5 |= this.snapGeometry(s2.get()) ? 1 : 0, t2.addSegment(s2.get(), 0 === a2);
      o2 && (e3.getSegmentFromPath(r, i3 - 1, s2, false), n5 |= this.snapGeometry(s2.get()) ? 1 : 0, 1 === i3 ? t2.addPathFromClosedSegment(s2.get(), false) : t2.closeLastPathWithSegment(s2.get()));
    }
    return n5 && t2.copyTo(e3), !!n5;
  }
  snapAttributes(t2, s2, n5, r) {
    let i2 = false;
    const o2 = new ac();
    if (this.queryPrecisionDescriptor(o2), 0 === t2) {
      const t3 = s2;
      for (let s3 = n5; s3 < r; s3++) {
        const n6 = t3.read(2 * s3), r2 = e2.s_SnapValue(n6, o2.getFalseX(), o2.getGridUnitsXY()), a2 = t3.read(2 * s3 + 1), h2 = e2.s_SnapValue(a2, o2.getFalseY(), o2.getGridUnitsXY());
        i2 = i2 || r2 !== n6 || h2 !== a2, i2 && (t3.write(2 * s3, r2), t3.write(2 * s3 + 1, h2));
      }
    } else if (1 === t2) {
      const t3 = s2;
      for (let s3 = n5; s3 < r; s3++) {
        const n6 = t3.read(s3), r2 = e2.s_SnapValue(n6, o2.getFalseZ(), o2.getGridUnitsZ());
        i2 = i2 || !ls(r2, n6), i2 && t3.write(s3, r2);
      }
    } else if (2 === t2) {
      const t3 = s2;
      for (let s3 = n5; s3 < r; s3++) {
        const n6 = t3.read(s3), r2 = e2.s_SnapValue(n6, o2.getFalseM(), o2.getGridUnitsM());
        i2 = i2 || !ls(r2, n6), i2 && t3.write(s3, r2);
      }
    }
    return i2;
  }
  static s_SnapValue(e3, t2, s2) {
    return S((e3 - t2) * s2) / s2 + t2;
  }
};
var ac = class _ac {
  constructor() {
    const e3 = Du, t2 = 1e-4, s2 = 1e-3, n5 = t2 * Number(e3) * 0.5;
    this.m_precision = 1, this.m_falseX = -n5, this.m_falseY = -n5, this.m_unitsXY = Number(e3) / (2 * n5), this.m_falseM = -1e5, this.m_unitsM = 1 / t2, this.m_falseZ = -1e5, this.m_unitsZ = 1 / t2, this.m_toleranceXY = s2, this.m_toleranceM = s2, this.m_toleranceZ = s2;
  }
  getHashCode() {
    let e3 = 7777, t2 = 7777;
    return t2 = As(t2, this.m_falseM), t2 = As(t2, this.m_unitsM), e3 = As(e3, this.m_unitsXY), t2 = As(t2, this.m_toleranceXY), e3 = As(e3, this.m_falseZ), t2 = As(t2, this.m_toleranceZ), e3 = As(e3, this.m_unitsZ), t2 = As(t2, this.m_toleranceM), e3 = As(e3, this.m_precision), As(e3, t2);
  }
  clone() {
    const e3 = new _ac();
    return e3.m_falseX = this.m_falseX, e3.m_falseY = this.m_falseY, e3.m_unitsXY = this.m_unitsXY, e3.m_falseZ = this.m_falseZ, e3.m_unitsZ = this.m_unitsZ, e3.m_falseM = this.m_falseM, e3.m_unitsM = this.m_unitsM, e3.m_toleranceXY = this.m_toleranceXY, e3.m_toleranceZ = this.m_toleranceZ, e3.m_toleranceM = this.m_toleranceM, e3.m_precision = this.m_precision, e3;
  }
  assign(e3) {
    return this.m_falseX = e3.m_falseX, this.m_falseY = e3.m_falseY, this.m_unitsXY = e3.m_unitsXY, this.m_falseZ = e3.m_falseZ, this.m_unitsZ = e3.m_unitsZ, this.m_falseM = e3.m_falseM, this.m_unitsM = e3.m_unitsM, this.m_toleranceXY = e3.m_toleranceXY, this.m_toleranceZ = e3.m_toleranceZ, this.m_toleranceM = e3.m_toleranceM, this.m_precision = e3.m_precision, this;
  }
  initialize2D(e3, t2) {
  }
  getTolerance(e3) {
    switch (e3) {
      case 0:
        return this.m_toleranceXY;
      case 1:
        return this.m_toleranceZ;
      case 2:
        return this.m_toleranceM;
      default:
        return 0;
    }
  }
  getResolution(e3) {
    if (2 === this.m_precision) return 0;
    switch (e3) {
      case 0:
        return 1 / this.m_unitsXY;
      case 1:
        return 1 / this.m_unitsZ;
      case 2:
        return 1 / this.m_unitsM;
      default:
        return 0;
    }
  }
  getFalseX() {
    return this.m_falseX;
  }
  getFalseY() {
    return this.m_falseY;
  }
  getFalseZ() {
    return this.m_falseZ;
  }
  getFalseM() {
    return this.m_falseM;
  }
  getGridUnitsXY() {
    return this.m_unitsXY;
  }
  getGridUnitsZ() {
    return this.m_unitsZ;
  }
  getGridUnitsM() {
    return this.m_unitsM;
  }
  getPrecision() {
    return this.m_precision;
  }
  static getLimit32() {
    return 2147483645;
  }
  static getLimit64() {
    return 9007199254740990n;
  }
  static getLimitFloat() {
    return 0;
  }
  getXYGridRange() {
    const e3 = new n3();
    switch (this.m_precision) {
      case 0:
        {
          const t2 = _ac.getLimit32() / this.getGridUnitsXY();
          e3.setCoords({ xmin: this.getFalseX(), ymin: this.getFalseY(), xmax: this.getFalseX() + t2, ymax: this.getFalseY() + t2 });
        }
        break;
      case 1:
        {
          const t2 = Number(_ac.getLimit64()) / this.getGridUnitsXY();
          e3.setCoords({ xmin: this.getFalseX(), ymin: this.getFalseY(), xmax: this.getFalseX() + t2, ymax: this.getFalseY() + t2 });
        }
        break;
      case 2:
        e3.setCoords({ xmin: -Number.MAX_VALUE, ymin: -Number.MAX_VALUE, xmax: Number.MAX_VALUE, ymax: Number.MAX_VALUE });
        break;
      default:
        e3.setEmpty(), b("");
    }
    return e3;
  }
  getZGridRange() {
    const e3 = new x();
    switch (this.m_precision) {
      case 0:
        {
          const t2 = _ac.getLimit32() / this.getGridUnitsZ();
          e3.setCoords(this.getFalseZ(), this.getFalseZ() + t2);
        }
        break;
      case 1:
        {
          const t2 = Number(_ac.getLimit64()) / this.getGridUnitsZ();
          e3.setCoords(this.getFalseZ(), this.getFalseZ() + t2);
        }
        break;
      case 2:
        e3.setCoords(-Number.MAX_VALUE, Number.MAX_VALUE);
        break;
      default:
        e3.setEmpty(), b("");
    }
    return e3;
  }
  getMGridRange() {
    const e3 = new x();
    switch (this.m_precision) {
      case 0:
        {
          const t2 = _ac.getLimit32() / this.getGridUnitsM();
          e3.setCoords(this.getFalseM(), this.getFalseM() + t2);
        }
        break;
      case 1:
        {
          const t2 = Number(_ac.getLimit64()) / this.getGridUnitsM();
          e3.setCoords(this.getFalseM(), this.getFalseM() + t2);
        }
        break;
      case 2:
        e3.setCoords(-Number.MAX_VALUE, Number.MAX_VALUE);
        break;
      default:
        e3.setEmpty(), b("");
    }
    return e3;
  }
  setTolerance(e3, t2) {
    switch (t2 < 0 && P("tol < 0"), Number.isFinite(t2) || P("tol is not finite"), e3) {
      case 0:
        this.m_toleranceXY = t2;
        break;
      case 1:
        this.m_toleranceZ = t2;
        break;
      case 2:
        this.m_toleranceM = t2;
        break;
      default:
        P("cannot set tolerance for this attribute");
    }
  }
  setGridParams(e3, t2, s2) {
    Number.isFinite(e3) && Number.isFinite(t2) && Number.isFinite(s2) || P("grid params are not finite"), s2 < 1 && P("grid units cannot be smaller than 1.0"), this.m_falseX = e3, this.m_falseY = t2, this.m_unitsXY = s2;
  }
  setZParams(e3, t2) {
    Number.isFinite(e3) && Number.isFinite(t2) || P("grid params are not finite"), t2 < 1 && P("grid units cannot be smaller than 1.0"), this.m_falseZ = e3, this.m_unitsZ = t2;
  }
  setMParams(e3, t2) {
    Number.isFinite(e3) && Number.isFinite(t2) || P("grid params are not finite"), t2 < 1 && P("grid units cannot be smaller than 1.0"), this.m_falseM = e3, this.m_unitsM = t2;
  }
  setPrecision(e3) {
  }
  equals(e3) {
    return this === e3 || ls(this.m_falseX, e3.m_falseX) && ls(this.m_falseY, e3.m_falseY) && this.equalsWithoutFalseXY(e3);
  }
  snapPrecision() {
    if (2 === this.m_precision) return;
    const e3 = (e4, t3, s2, n5) => {
      if (!Number.isFinite(t3) || !Number.isFinite(s2)) return s2;
      if (s2 < 1) return 1;
      if (!n5) return s2;
      const r = Number(e4) / s2;
      return Math.trunc((t3 + r - t3) * s2) > e4 && (s2 = e4 / (t3 + r - t3)), Math.max(1, s2);
    }, t2 = Number(0 === this.m_precision ? Gu : Du);
    this.m_unitsXY = e3(t2, this.m_falseX, this.m_unitsXY, true), this.m_unitsXY = e3(t2, this.m_falseY, this.m_unitsXY, true), this.m_unitsZ = e3(t2, this.m_falseZ, this.m_unitsZ, false), this.m_unitsM = e3(t2, this.m_falseM, this.m_unitsM, false);
  }
  verifyPrecision() {
    if (2 === this.m_precision) return true;
    const e3 = (e4, t3, s2, n5) => {
      if (s2 < 1) return false;
      if (!Number.isFinite(t3) || !Number.isFinite(s2)) return false;
      if (!n5) return true;
      const r = Number(e4) / s2;
      return !(BigInt((t3 + r - t3) * s2) > e4);
    }, t2 = 0 === this.m_precision ? Gu : Du;
    return !!e3(t2, this.m_falseX, this.m_unitsXY, true) && (!!e3(t2, this.m_falseY, this.m_unitsXY, true) && (!!e3(t2, this.m_falseZ, this.m_unitsZ, false) && !!e3(t2, this.m_falseM, this.m_unitsM, false)));
  }
  fixTolerance() {
    2 !== this.m_precision && (this.m_toleranceXY = Math.max(2 / this.m_unitsXY, this.m_toleranceXY), this.m_toleranceZ = Math.max(2 / this.m_unitsZ, this.m_toleranceZ), this.m_toleranceM = Math.max(2 / this.m_unitsM, this.m_toleranceM), (Number.isNaN(this.m_falseX) || Number.isNaN(this.m_falseY)) && (this.m_falseX = this.m_falseY = Number.NaN));
  }
  equalsWithoutFalseXY(e3) {
    return this === e3 || this.m_unitsXY === e3.m_unitsXY && this.m_falseZ === e3.m_falseZ && this.m_unitsZ === e3.m_unitsZ && this.m_falseM === e3.m_falseM && this.m_unitsM === e3.m_unitsM && this.m_toleranceXY === e3.m_toleranceXY && this.m_toleranceZ === e3.m_toleranceZ && this.m_toleranceM === e3.m_toleranceM && this.m_precision === e3.m_precision;
  }
  setBestXyDomainFromEnvelope(e3, t2) {
  }
  setBestZDomainFromZRange(e3, t2, s2) {
  }
  setBestMDomainFromMRange(e3, t2, s2) {
  }
};
function hc() {
  return (!nc || Uu() && null === nc.getPECoordSys()) && (nc = dc(3857, 0, null, true)), nc;
}
function mc() {
  return (!rc || Uu() && null === rc.getPECoordSys()) && (rc = dc(102100, 0, null, true)), rc;
}
function lc() {
  return (!ic || Uu() && null === ic.getPECoordSys()) && (ic = dc(4326, 0, null, true)), ic;
}
function gc(e3) {
  e3.m_falseX = 0, e3.m_falseY = 0, e3.m_unitsXY = 1, e3.m_falseZ = 0, e3.m_unitsZ = 1, e3.m_falseM = 0, e3.m_unitsM = 1, e3.m_toleranceXY = 100 * Qs(), e3.m_toleranceZ = 100 * Qs(), e3.m_toleranceM = 100 * Qs(), e3.m_precision = 2;
}
function uc(e3, t2, s2, r) {
  const i2 = t2 instanceof qg;
  gc(e3), e3.m_precision = r, e3.m_falseX = Number.NaN, e3.m_falseY = Number.NaN;
  const o2 = 1e-4, a2 = 1e-3, h2 = i2 ? t2.m_csType : t2.isPCS ? 2 : 1;
  if (1 === h2) {
    const s3 = (0 === r ? 1 / 18e5 : 1e-9) * (i2 ? t2.getOneDegreeGCSUnit() : Math.PI / t2.metersOrRadiansPerUnit / 180);
    e3.m_unitsXY = 1 / s3;
  } else if (2 === h2) {
    const s3 = (0 === r ? a2 : o2) * (i2 ? t2.getOneMeterPCSUnit() : 1 / t2.metersOrRadiansPerUnit);
    e3.m_unitsXY = 1 / s3;
  } else P("unrecognized cs type");
  e3.m_falseM = -1e5, e3.m_unitsM = 1 / (0 === r ? a2 : o2), e3.m_unitsM = Math.max(1, e3.m_unitsM), e3.m_unitsXY = Math.max(1, e3.m_unitsXY);
  let m2 = 0, l2 = 0;
  0 !== r && 1 !== r || (m2 = 2 / e3.m_unitsXY, l2 = 2 / e3.m_unitsM), e3.m_toleranceXY = Math.max(m2, i2 ? t2.getUnitsPerMillimeter() : 2 === h2 ? 1e-3 / t2.metersOrRadiansPerUnit : 1e-3 / (t2.semiMajor * t2.metersOrRadiansPerUnit)), e3.m_toleranceM = Math.max(a2, l2), cc(e3, s2);
}
function cc(e3, t2) {
  const s2 = 1e-4, n5 = 1e-3;
  if (e3.m_falseZ = -1e5, t2) {
    const r2 = (0 === e3.m_precision ? n5 : s2) * t2.getOneMeter();
    e3.m_unitsZ = 1 / r2;
  } else e3.m_unitsZ = 1 / (0 === e3.m_precision ? n5 : s2);
  e3.m_unitsZ = Math.max(1, e3.m_unitsZ);
  let r = 0;
  0 !== e3.m_precision && 1 !== e3.m_precision || (r = 2 / e3.m_unitsZ), e3.m_toleranceZ = Math.max(t2 ? t2.getOneMeter() * n5 : n5, r);
}
function _c(e3, t2, s2, n5) {
  gc(e3), e3.m_precision = n5;
  const r = 0 === n5 ? Gu : Du, i2 = 1e-4, o2 = 1e-3;
  let a2 = 1, h2 = 1, m2 = 1e-3;
  t2 && (h2 = t2.getUnitToBaseFactor()), t2 && 1 === t2.getUnitType() ? (a2 = 400 * Math.PI / 180, m2 = 8983152841195215e-24 * Math.PI / 180 / h2) : (a2 = (0 === n5 ? o2 : i2) * Number(r) * 0.5, m2 = o2 / h2), a2 /= h2, e3.m_falseX = -a2, e3.m_falseY = -a2, e3.m_unitsXY = Number(r) / (2 * a2), e3.m_falseM = -1e5, e3.m_unitsM = 1 / (0 === n5 ? o2 : i2), e3.m_unitsM = Math.max(1, e3.m_unitsM), e3.snapPrecision();
  let l2 = 0, g = 0;
  0 !== e3.m_precision && 1 !== e3.m_precision || (g = 2 / e3.m_unitsM, l2 = 2 / e3.m_unitsXY), e3.m_toleranceXY = Math.max(l2, m2), e3.m_toleranceM = Math.max(o2, g), cc(e3, s2);
}
function dc(e3, t2, s2, n5) {
  if (!n5 && t2 <= 0) {
    if (3857 === e3) return hc();
    if (102100 === e3) return mc();
    if (4326 === e3) return lc();
  }
  const r = new oc();
  let i2, o2 = null;
  return Uu() ? (i2 = iu(e3), t2 > 0 ? o2 = null : t2 = 0, r.setHorzProj_(i2), r.m_vertcs = o2) : (i2 = Ac(e3), r.m_unit = i2.isPCS ? new bu(i2.metersOrRadiansPerUnit) : new os(i2.metersOrRadiansPerUnit)), uc(r.m_precisionDescriptor, i2, o2, 1), r.m_bDefaultDescriptor = true, r.m_userWKID = e3, r.calculateHashCode(), r.initDbgName(), r;
}
function pc(e3, t2, s2) {
  return S((e3 - t2) * s2) / s2 + t2;
}
var fc = null;
var xc = 3552713678800501e-30;
function yc(e3, t2, s2) {
  return e3 === t2 || Math.abs(e3 - t2) <= s2 * (1 + (Math.abs(e3) + Math.abs(t2)) / 2);
}
function Pc(e3, t2) {
  return yc(e3, t2, xc);
}
function Ec(e3, t2) {
  return 0 === e3 || Math.abs(e3) <= t2;
}
function Sc(e3) {
  return Ec(e3, xc);
}
var Cc;
var Ic;
var bc;
var wc;
var vc;
var Nc;
var Tc;
var Gc;
var Dc;
var Vc;
var Fc;
function Hc(e3) {
  return { _this: e3, get() {
    return this._this;
  }, reset(e4) {
    this._this = e4;
  }, release() {
    const e4 = this._this;
    return this._this = null, e4;
  } };
}
var kc = null;
function Ac(e3) {
  n(kc);
  const t2 = kc(e3);
  return t2.semiMajor = t2.isPCS ? Number.NaN : Rc(e3), t2;
}
function Mc(e3) {
  kc = e3, n(kc);
}
function Uc(e3) {
  const t2 = e3;
  Ic = t2.PeFactory, n(Ic), Fc = t2.PeGCSExtent, n(Fc), Dc = t2.PeLineType, n(Dc), Vc = t2.PeMath, n(Vc), Cc = t2.PeDouble, n(Cc), bc = t2.PeDefs, n(bc), wc = t2.PeCSTransformations, n(wc), vc = t2.PeGTTransformations, n(vc), Nc = t2.PePCSInfo, n(Nc), Tc = t2.PeGTlistExtended, n(Tc), Ic.initialize(), Gc = t2.PeGTlistExtendedEntry, n(Gc), bc.PE_TYPE_ANGUNIT = 512, bc.PE_STR_AUTH_ALL = 2, Nc.PE_POLE_LINE_STRAIGHT = 2, Nc.PE_POLE_LINE_CURVED = 3, bc.PE_PARM_LAM0 = 2, bc.PE_PARM_PHI0 = 6, bc.PE_PRJ_AZIMUTHAL_EQUIDISTANT = 43032, bc.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA = 43033, bc.PE_PRJ_ALBERS = 43007, bc.PE_PRJ_CYLINDRICAL_EQAREA = 43034, bc.PE_TYPE_VERTCS = 8, bc.PE_LINETYPE_GEODESIC = 0, bc.PE_LINETYPE_LOXODROME = 1, bc.PE_LINETYPE_GREAT_ELLIPTIC = 2, bc.PE_LINETYPE_NORMAL_SECTION = 3, Tc.PE_GTLIST_OPTS_USABLE = 1, kc = null;
}
function qc(e3, t2, s2, n5) {
  return t2 <= 0 ? (s2[0] = 0, n5[0] = 0, false) : (s2[0] = t2, n5[0] = t2, true);
}
function Bc(e3) {
  n(qu());
  return !!kc(e3).isPCS || Oc(e3);
}
function Oc(e3) {
  return Ic && C("pe has been loaded. no-pe methods should not be used at this point."), fc || Xc(), fc.has(e3);
}
var Yc = /(?:ELLIPSOID|SPHEROID)\["(?:\w|[-()])+",(\d+\.\d+)/;
function Rc(e3) {
  if (Ic && C("pe has been loaded. no-pe methods should not be used at this point."), "string" == typeof e3) {
    const t2 = e3.match(Yc);
    t2 && 2 === t2.length || P("bad gcs wkt");
    const s2 = Number.parseFloat(t2[1]);
    return Number.isFinite(s2) || P("bad gcs wkt"), s2;
  }
  return fc || Xc(), fc.has(e3) || C("gcs wkid not found"), fc.get(e3);
}
function Xc() {
  fc = /* @__PURE__ */ new Map();
  for (const e3 in rs3) {
    const t2 = Number.parseFloat(e3), s2 = rs3[e3];
    if (Array.isArray(s2)) for (const e4 of s2) fc.set(e4, t2);
    else fc.set(s2, t2);
  }
  is();
}
function Lc(e3, t2) {
  const s2 = Ic.geogtran(e3);
  s2 || R(e3);
  return new Kc(s2, t2);
}
function zc(e3, t2) {
  const s2 = Ic.fromString(bc.PE_TYPE_GEOGTRAN, e3);
  s2 || U(e3);
  return new Kc(s2, t2);
}
function Wc(e3, t2) {
  return new Kc(e3, t2);
}
var jc = Zs(0);
var Zc = Zs(1);
var Kc = class _Kc {
  constructor(e3, t2) {
    if (e3 instanceof _Kc) return this.m_geogTranWrapper = e3.m_geogTranWrapper, this.m_bInverted = t2 ? !e3.m_bInverted : e3.m_bInverted, void (this.m_hashCode = As(this.m_geogTranWrapper.getHashCode(), this.m_bInverted ? Zc : jc));
    this.m_geogTranWrapper = new Um(e3), this.m_bInverted = t2, this.m_hashCode = As(this.m_geogTranWrapper.getHashCode(), this.m_bInverted ? Zc : jc);
  }
  getID() {
    return this.m_geogTranWrapper.getLatestId();
  }
  getLatestID() {
    return this.m_geogTranWrapper.getLatestId();
  }
  getText() {
    return this.m_geogTranWrapper.getText();
  }
  getTextExtended(e3) {
    if (!this.m_geogTranWrapper.getGeogtran()) return "";
    if (-1 === e3) return this.m_geogTranWrapper.getGeogtran().toString();
    {
      const t2 = 0 === e3 ? bc.PE_STR_AUTH_TOP : bc.PE_STR_AUTH_ALL;
      return this.m_geogTranWrapper.getGeogtran().toString(t2);
    }
  }
  getText2(e3 = -1) {
    let t2 = bc.PE_STR_FMT_WKT2;
    return -1 !== e3 && (t2 |= 0 === e3 ? bc.PE_STR_AUTH_TOP : bc.PE_STR_AUTH_ALL), this.m_geogTranWrapper.getGeogtran().toString(t2);
  }
  getName() {
    return this.m_geogTranWrapper && this.m_geogTranWrapper.getGeogtran() ? this.m_geogTranWrapper.getGeogtran().getName() : "";
  }
  getInputSpatialReference() {
    return this.m_bInverted ? this.m_geogTranWrapper.getOutputSr(false) : this.m_geogTranWrapper.getInputSr(false);
  }
  getOutputSpatialReference() {
    return this.m_bInverted ? this.m_geogTranWrapper.getInputSr(false) : this.m_geogTranWrapper.getOutputSr(false);
  }
  getInverse() {
    return new _Kc(this, true);
  }
  isInverted() {
    return this.m_bInverted;
  }
  getHashCode() {
    return this.m_hashCode;
  }
  GetPeGeogtran() {
    return this.m_geogTranWrapper.getGeogtran();
  }
  equals(e3) {
    const t2 = e3;
    return t2 === this || this.m_bInverted === t2.m_bInverted && (this.GetPeGeogtran() === t2.GetPeGeogtran() || this.getID() === t2.getID() && !(0 === this.getID() && !this.GetPeGeogtran().isEqual(t2.GetPeGeogtran())));
  }
  referencesMissingData() {
    return !!this.m_geogTranWrapper && !this.m_geogTranWrapper.isUsable();
  }
  getWrapper() {
    return this.m_geogTranWrapper;
  }
};
function Qc(s2, n5, r, i2, o2) {
  const a2 = s2.getGCS(), h2 = n5.getGCS(), m2 = a2.getPECoordSys(), g = h2.getPECoordSys();
  let u = null;
  if (!r.isEmpty()) {
    const e3 = r.clone();
    if (!e3.isEmpty() && 2 === s2.getCoordinateSystemType()) {
      let t2 = new he({ env2D: e3 });
      const n6 = Rg(s2, a2, null);
      t2 = new qh2().execute(t2, n6, null), t2.queryEnvelope(e3);
    }
    if (!e3.isEmpty()) {
      const t2 = m2.getPrimem().getLongitude(), s3 = m2.getUnit().getUnitFactor();
      u = new Fc(e3.xmin, e3.ymin, e3.xmax, e3.ymax, t2, s3);
    }
  }
  let c = i2;
  c >= ds() && (c = 0);
  const _ = [];
  let d2 = Tc.PE_GTLIST_OPTS_COMMON;
  o2 || (d2 &= ~Tc.PE_GTLIST_OPTS_USABLE);
  for (let f3 = 0; f3 < 2; f3++) {
    const s3 = { stack: [], error: void 0, hasError: false };
    try {
      _.length = 0;
      const t2 = Tc.getGTlist(m2, g, 2, d2, u, c);
      if (null == t2 || 0 === t2.length) break;
      __addDisposableResource(s3, { [Symbol.dispose]() {
        Gc.destroy(t2);
      } }, false);
      let n6 = false;
      for (const e3 of t2) {
        const t3 = $c(e3);
        if (n(t3), o2 && t3.referencesMissingData()) n6 = true, c = 0;
        else if (_.push(t3), _.length === i2) break;
      }
      if (!n6) break;
    } catch (p3) {
      s3.error = p3, s3.hasError = true;
    } finally {
      __disposeResources(s3);
    }
  }
  return u && u.destroy(), _;
}
function Jc() {
  return new e_([], null, null, null);
}
function $c(e3) {
  const t2 = new t_(), s2 = e3.getSteps();
  if (s2) {
    const n5 = e3.getEntries();
    for (let e4 = 0; e4 < s2; e4++) {
      const s3 = 0 !== n5[e4].getDirection();
      let r;
      const i2 = n5[e4].getGeogtran().getCode();
      if (i2 >= 0) r = Ic.geogtran(i2);
      else {
        const t3 = n5[e4].getGeogtran().toString(bc.PE_STR_FMT_WKT);
        r = Ic.fromString(bc.PE_TYPE_GEOGTRAN, t3);
      }
      if (null == r) return null;
      const o2 = Wc(r, s3);
      t2.add(o2);
    }
    return t2.create();
  }
  return null;
}
var e_ = class {
  constructor(e3, t2, s2, n5) {
    this.m_bReadOnly = true, this.m_name = "", this.m_fastTrack = -1, this.m_bNameIsSet = false, this.m_transforms = e3, t2 && (this.m_name = t2, this.m_bNameIsSet = true), this.m_inputSr = s2, this.m_outputSr = n5;
  }
  getType() {
    return 0;
  }
  getName() {
    if (this.m_bNameIsSet) return this.m_name;
    if (0 === this.m_transforms.length) return "";
    let e3 = "";
    for (const t2 of this.m_transforms) e3.length > 0 && (e3 += " + "), t2.isInverted() && (e3 += "~"), e3 += t2.getName();
    return e3;
  }
  count() {
    return this.m_transforms.length;
  }
  createInverse() {
    return this.getInverse();
  }
  getHashCode() {
    let e3 = 1973;
    for (let t2 = 0; t2 < this.m_transforms.length; t2++) e3 = As(e3, this.m_transforms[t2].getHashCode());
    return e3;
  }
  equals(e3) {
    return n(0), false;
  }
  referencesMissingData() {
    if (0 === this.m_transforms.length) return false;
    for (const e3 of this.m_transforms) if (e3.referencesMissingData()) return true;
    return false;
  }
  isMatchingTransformation(e3, t2) {
    return n(0), false;
  }
  validateTransformation(e3, t2) {
    return n(0), false;
  }
  nameIsSet() {
    return n(0), false;
  }
  getInputSpatialReference() {
    return this.m_inputSr;
  }
  getOutputSpatialReference() {
    return this.m_outputSr;
  }
  getStep(e3) {
    return (e3 < 0 || e3 > this.count()) && A(""), this.m_transforms[e3];
  }
  getInverse() {
    const e3 = new t_();
    return e3.addSteps(this, true), e3.setInputSpatialReference(this.m_outputSr), e3.setOutputSpatialReference(this.m_inputSr), e3.create();
  }
  transform(e3, t2, s2) {
    if (0 === this.count()) return;
    let n5 = this.m_inputSr, r = this.m_outputSr;
    if (e3 && (r = Pt(n5, n5 = r)), 0 === this.m_transforms.length) return void qm(n5, null, r, null, t2, null, s2);
    let i2 = this.m_fastTrack;
    if (1 === i2) return void pe(e3, this.m_transforms, (n6) => {
      Xm(n6.getWrapper(), e3 !== n6.isInverted(), t2, null, s2);
    });
    const o2 = Mm();
    -1 === i2 && o2.initFromGcsAndVcs(n5, null);
    const a2 = Mm();
    let h2 = e3 ? this.m_transforms.length - 1 : 0;
    const m2 = e3 ? -1 : 1;
    for (let g = 0, u = this.m_transforms.length; g < u; g++, h2 += m2) {
      if (0 === g) {
        const r3 = this.m_transforms[h2];
        Bm(n5.getPECoordSys(), null, r3.getWrapper(), e3 !== r3.isInverted(), t2, null, s2, a2), -1 === i2 && (o2.equals(a2) || (i2 = 0)), o2.assign(a2);
      } else {
        const n6 = this.m_transforms[h2 - m2], r3 = this.m_transforms[h2];
        Ym(o2, n6.getWrapper(), e3 !== n6.isInverted(), r3.getWrapper(), e3 !== r3.isInverted(), t2, null, s2, a2), -1 === i2 && (o2.equals(a2) || (i2 = 0)), o2.assign(a2);
      }
      const r2 = this.m_transforms[h2];
      Rm(o2, r2.getWrapper(), e3 !== r2.isInverted(), t2, null, s2, a2), o2.assign(a2);
    }
    const l2 = this.m_transforms[h2 - m2];
    Om(o2, l2.getWrapper(), e3 !== l2.isInverted(), r, null, t2, null, s2), -1 === i2 && (a2.initFromGcsAndVcs(r, null), o2.equals(a2) || (i2 = 0)), this.m_fastTrack = 0 === i2 ? 0 : 1;
  }
};
var t_ = class {
  constructor() {
    this.m_transforms = [], this.m_inputGCS = null, this.m_outputGCS = null, this.m_name = "", this.m_bNameIsSet = false;
  }
  getInputSpatialReference() {
    return null !== this.m_inputGCS ? this.m_inputGCS : this.count() > 0 ? this.m_transforms[0].getInputSpatialReference() : null;
  }
  setInputSpatialReference(e3) {
    this.m_inputGCS = e3 ? e3.getGCS() : null;
  }
  getOutputSpatialReference() {
    return null !== this.m_outputGCS ? this.m_outputGCS : this.count() > 0 ? this.m_transforms.at(-1).getOutputSpatialReference() : null;
  }
  setOutputSpatialReference(e3) {
    this.m_outputGCS = e3 ? e3.getGCS() : null;
  }
  getName() {
    if (this.m_bNameIsSet) return this.m_name;
    if (0 === this.m_transforms.length) return "";
    let e3 = "";
    for (const t2 of this.m_transforms) e3.length > 0 && (e3 += " + "), t2.isInverted() && (e3 += "~"), e3 += t2.getName();
    return e3;
  }
  count() {
    return this.m_transforms.length;
  }
  getStep(e3) {
    return (e3 < 0 || e3 > this.count()) && A(""), this.m_transforms[e3];
  }
  setStep(e3, t2) {
    n(0);
  }
  add(e3) {
    this.m_transforms.push(e3);
  }
  addSteps(e3, t2) {
    if (t2) for (let s2 = e3.count() - 1; s2 >= 0; --s2) this.add(e3.getStep(s2).getInverse());
    else for (let s2 = 0; s2 < e3.count(); ++s2) this.add(e3.getStep(s2));
  }
  clear() {
    this.m_transforms = [], this.m_name = "", this.m_bNameIsSet = false, this.m_inputGCS = null, this.m_outputGCS = null;
  }
  remove(e3) {
    n(0);
  }
  create() {
    const e3 = this.getInputSpatialReference(), t2 = this.getOutputSpatialReference(), s2 = new e_(this.m_transforms, this.m_bNameIsSet ? this.m_name : null, e3, t2);
    return s2.m_bReadOnly = true, this.clear(), s2;
  }
};
var s_ = Object.freeze(Object.defineProperty({ __proto__: null, SpatialReference: oc, SpatialReferencePrecisionDescriptor: ac, create: Ou, createFromWKT: Yu, createImplFromPe: Ru, createLocal: Wu2, createWithNewPrecision: Lu, createWithNewVCS: zu, getGCS: Zu, getTempName: tc, hasNoPe: qu, hasPe: Uu, injectNoPe: Mu, injectPe: Au, isInitialized: Bu, isTempName: sc, isValidWkid: Ku, isValidWkt: Qu, makeSpheroidData: Hu, snapGeometry: ju, webMercator: hc, webMercator102100: mc, wgs84: lc }, Symbol.toStringTag, { value: "Module" }));

export {
  f2 as f,
  I3 as I,
  o,
  ss,
  as,
  cs,
  ds2 as ds,
  Ps2 as Ps,
  Cs,
  Is,
  vs2 as vs,
  ks,
  Us2 as Us,
  qs2 as qs,
  Ys2 as Ys,
  tn,
  sn,
  Zn,
  er,
  sr,
  ir,
  kr,
  Lo,
  Wo,
  Ko,
  aa,
  ha,
  la,
  _a,
  da,
  pa,
  fa,
  ya,
  Sa,
  Fa,
  ka,
  Ma,
  Ra,
  Ka,
  nh,
  ih,
  hh,
  Eh,
  wh,
  Th2 as Th,
  qh2 as qh,
  Oh,
  Yh,
  Rh,
  Xh,
  Lh,
  zh,
  um2 as um,
  cm,
  _m,
  Hm,
  Lm,
  zm,
  Wm,
  jm,
  Km,
  al,
  ul,
  cl,
  Tl,
  kl,
  Al,
  ql,
  Xl,
  zl,
  Wl,
  jl,
  Zl,
  mg,
  fg,
  Ag,
  Og,
  Yg,
  Rg,
  Lg,
  zg,
  Wg,
  Qg,
  eu,
  Hu,
  Mu,
  Uu,
  Ou,
  Yu,
  Lu,
  Wu2 as Wu,
  ju,
  Zu,
  Ku,
  Qu,
  tc,
  ac,
  Pc,
  Cc,
  Ic,
  bc,
  wc,
  Dc,
  Vc,
  Lc,
  zc,
  Jc,
  t_,
  s_
};
//# sourceMappingURL=chunk-XQTWTSU3.js.map
