import {
  o
} from "./chunk-TTDA3WA3.js";
import {
  Qs,
  fm,
  mr,
  se
} from "./chunk-L3K266YP.js";
import {
  P,
  Pt,
  a,
  f,
  h,
  j,
  kt,
  l,
  mi,
  z
} from "./chunk-VIRT6ASK.js";
import {
  s
} from "./chunk-QLDYCH6C.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/chunks/OperatorGeneralize.js
var P2 = class {
  getOperatorType() {
    return 10204;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(t, e, s2) {
    return false;
  }
  canAccelerateGeometry(t) {
    return false;
  }
  executeMany(t, e, s2, i) {
    return new y(t, e, s2, i);
  }
  execute(t, e, s2, r) {
    t || P("null param is not allowed.");
    return new y(null, e, s2, r).generalize(t);
  }
};
var y = class extends s {
  constructor(t, e, s2, i) {
    super(), this.m_pline = null, this.m_point = new se(), this.m_stack = [], this.m_resultstack = [], this.m_callCount = 0, this.m_progressTracker = i, this.m_geoms = t, this.m_maxDeviation = e, this.m_bRemoveDegenerateParts = s2;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    const t = this.m_geoms.next();
    return null === t ? null : (j(t), this.generalize(t));
  }
  getGeometryID() {
    return this.m_geoms.getGeometryID();
  }
  generalize(s2) {
    const i = s2.getGeometryType();
    if (l(i)) return s2;
    if (i === a.enumEnvelope) {
      const t = new mr({ vd: s2.getDescription() });
      return t.addEnvelope(s2, false), this.generalize(t);
    }
    if (f(i)) {
      const t = new Qs({ vd: s2.getDescription() });
      return t.addSegment(s2, true), this.generalize(t);
    }
    if (h(i) || z(""), s2.isEmpty() || this.m_maxDeviation <= 0) return s2;
    const r = new o().execute(s2, 0, 0.05 * this.m_maxDeviation, 0, this.m_progressTracker);
    s2.hasNonLinearSegments() && (this.m_maxDeviation *= 0.95);
    const _ = r, p = s2.createInstance();
    if (p.getGeometryType() === a.enumPolygon) {
      p.setFillRule(s2.getFillRule());
    }
    this.m_xy = _.getAttributeStreamRef(0);
    {
      const s3 = { stack: [], error: void 0, hasError: false };
      try {
        const e = new fm();
        this.m_pline = e, __addDisposableResource(s3, kt(() => {
          this.m_pline = null;
        }, false), false);
        for (let t = 0, s4 = _.getPathCount(); t < s4; t++) this.generalizePath(_.getImpl(), t, p.getImpl());
      } catch (k) {
        s3.error = k, s3.hasError = true;
      } finally {
        __disposeResources(s3);
      }
    }
    return this.m_resultstack.length = 0, this.m_stack.length = 0, p;
  }
  generalizePath(t, e, s2) {
    if (t.getPathSize(e) < 2) return;
    this.m_resultstack.length = 0, this.m_stack.length = 0;
    const i = t.getPathStart(e), r = t.getPathEnd(e) - 1, n = t.isClosedPath(e), a2 = t.isClosedPathInXYPlane(e);
    let h2 = 0, m = -1;
    this.m_stack.push(n ? i : r), this.m_stack.push(i);
    let l2 = false, o2 = false;
    for (!this.m_bRemoveDegenerateParts && a2 && (l2 = true, o2 = true); this.m_stack.length > 1; ) {
      const e2 = this.m_stack.at(-1);
      this.m_stack.pop();
      const s3 = this.m_stack.at(-1);
      let i2 = t.getXY(e2);
      this.m_pline.setStartXY(i2), i2 = t.getXY(s3), this.m_pline.setEndXY(i2);
      const n2 = [Number.NaN];
      let a3 = this.findGreatestDistance(e2, s3, r, n2);
      a3 >= 0 && (l2 ? l2 = false : (o2 && n2[0] > h2 && (h2 = n2[0], m = a3), n2[0] <= this.m_maxDeviation && (a3 = -1))), a3 >= 0 ? (this.m_stack.push(a3), this.m_stack.push(e2)) : this.m_resultstack.push(e2);
    }
    n || this.m_resultstack.push(this.m_stack[0]);
    const c = this.m_resultstack.length;
    if (c === t.getPathSize(e) && c === this.m_stack.length) s2.addPath(t, e, true);
    else if (this.m_resultstack.length > 0) {
      if (this.m_bRemoveDegenerateParts && this.m_resultstack.length <= 2) {
        if (n || 1 === this.m_resultstack.length) return;
        if (mi.distance(t.getXY(this.m_resultstack[0]), t.getXY(this.m_resultstack[1])) <= this.m_maxDeviation) return;
      }
      if (o2 && m >= 0 && h2 <= this.m_maxDeviation) {
        const t2 = this.m_resultstack.at(-1) > m;
        this.m_resultstack.push(m), t2 && (this.m_resultstack[this.m_resultstack.length - 2] = Pt(this.m_resultstack[this.m_resultstack.length - 1], this.m_resultstack[this.m_resultstack.length - 1] = this.m_resultstack[this.m_resultstack.length - 2]));
      }
      for (let e2 = 0, i2 = this.m_resultstack.length; e2 < i2; e2++) t.getPointByVal(this.m_resultstack[e2], this.m_point), 0 === e2 ? s2.startPathPoint(this.m_point) : s2.lineToPoint(this.m_point);
      if (n) {
        for (let t2 = this.m_resultstack.length; t2 < 3; t2++) s2.lineToPoint(this.m_point);
        s2.closePathWithLine();
      }
    }
  }
  findGreatestDistance(t, e, s2, i) {
    let r = e - 1;
    e <= t && (r = s2);
    let n = -1, a2 = 0;
    const h2 = new mi();
    for (let m = t + 1; m <= r; m++) {
      this.m_xy.queryPoint2D(2 * m, h2);
      const t2 = h2.x, e2 = h2.y, s3 = this.m_pline.getClosestCoordinate(h2, false);
      h2.assign(this.m_pline.getCoord2D(s3)), h2.x -= t2, h2.y -= e2;
      const i2 = h2.length();
      i2 > a2 && (n = m, a2 = i2), this.m_callCount++;
    }
    return i[0] = a2, n;
  }
};

export {
  P2 as P
};
//# sourceMappingURL=chunk-EYMUFQFP.js.map
