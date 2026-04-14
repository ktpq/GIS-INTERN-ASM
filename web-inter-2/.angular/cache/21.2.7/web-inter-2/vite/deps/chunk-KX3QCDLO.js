import {
  C,
  E,
  M,
  Z,
  w
} from "./chunk-BHZILIII.js";
import {
  Fa,
  Ka,
  _a,
  aa,
  da,
  fa
} from "./chunk-6YNOGQRZ.js";
import {
  Ct,
  Qs,
  gr,
  mr,
  qt,
  yr
} from "./chunk-L3K266YP.js";
import {
  a,
  b,
  n
} from "./chunk-VIRT6ASK.js";
import {
  s
} from "./chunk-QLDYCH6C.js";
import {
  N
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/chunks/OperatorCut.js
var _ = fa;
function g(t2, e) {
  return { m_geometry: t2, m_side: e };
}
function f(t2, e, s2, n3, r, o2) {
  if (e.isEmpty()) {
    const t3 = g(e, 0);
    return void r.push(t3);
  }
  if (s2.isEmpty()) {
    const t3 = g(e, 0);
    return void r.push(t3);
  }
  const i2 = [], u = new yr();
  {
    const m2 = u.createGeometryUserIndex(), c2 = u.addGeometry(e), y = u.addGeometry(s2), f2 = new Ka(o2);
    let C3 = 0, E3 = null;
    if (u.hasCurves()) {
      E3 = new _();
      const t3 = u.getEnvelope2D(o2);
      C3 = da(n3.total());
      const e2 = _a(n3.total(), t3);
      aa(u, e2, n3.total(), 12e3, E3, null, o2);
    }
    u.dbgVerifyCurves(), f2.setEditShapeCrackAndCluster(u, n3), f2.cut(t2, m2, c2, y, i2);
    for (const t3 of i2) {
      null !== E3 && E3.stitchCurves(u, t3, C3, false);
      const e2 = g(u.getGeometry(t3), Fa(u.getGeometryUserIndex(t3, m2)));
      r.push(e2);
    }
    null !== E3 && E3.clearStitcher(u);
  }
}
function C2(t2, e, s2, n3, r, u) {
  if (e.isEmpty()) {
    const t3 = g(e, 0);
    return void r.push(t3);
  }
  if (s2.isEmpty()) {
    const t3 = g(e, 0);
    return void r.push(t3);
  }
  const c2 = [], p = new yr();
  {
    const t3 = p.createGeometryUserIndex(), y = p.addGeometry(e), f2 = p.addGeometry(s2), C3 = new Ka(u);
    let E3 = 0, G2 = null;
    if (p.hasCurves()) {
      G2 = new _();
      const t4 = p.getEnvelope2D(u);
      E3 = da(n3.total());
      const e2 = _a(n3.total(), t4);
      aa(p, e2, n3.total(), 12e3, G2, null, u);
    }
    p.dbgVerifyCurves(), C3.setEditShapeCrackAndCluster(p, n3), C3.cut(false, t3, y, f2, c2), null !== G2 && G2.stitchCurves(p, gr, E3, true);
    let v = p.getGeometry(y);
    const w2 = new mr(), x = new mr(), I = [];
    for (let e2 = 0; e2 < c2.length; e2++) {
      let s3 = null;
      {
        const r2 = new yr(), o2 = r2.addGeometry(v), d = r2.addGeometry(p.getGeometry(c2[e2]));
        if (r2.hasCurves()) {
          const t4 = r2.getEnvelope2D(u);
          E3 = da(n3.total());
          const e3 = _a(n3.total(), t4);
          aa(r2, e3, n3.total(), 12e3, G2, null, u);
        }
        C3.setEditShapeCrackAndCluster(r2, n3);
        const y2 = C3.intersection(o2, d);
        if (null !== G2 && G2.stitchCurves(r2, gr, E3, true), s3 = r2.getGeometry(y2), s3.isEmpty()) continue;
        const _2 = p.getGeometryUserIndex(c2[e2], t3);
        2 === _2 ? w2.add(s3, false) : 1 === _2 ? x.add(s3, false) : I.push(s3);
      }
      {
        const t4 = new yr(), s4 = t4.addGeometry(v), r2 = t4.addGeometry(p.getGeometry(c2[e2]));
        if (t4.hasCurves()) {
          const e3 = t4.getEnvelope2D(u);
          E3 = da(n3.total());
          const s5 = _a(n3.total(), e3);
          aa(t4, s5, n3.total(), 12e3, G2, null, u);
        }
        C3.setEditShapeCrackAndCluster(t4, n3);
        const o2 = C3.difference(s4, r2);
        null !== G2 && G2.stitchCurves(t4, gr, E3, true);
        v = t4.getGeometry(o2);
      }
    }
    if (!v.isEmpty() && c2.length > 0 && I.push(v), w2.isEmpty() && x.isEmpty()) return;
    if (!w2.isEmpty()) {
      const t4 = g(w2, 1);
      r.push(t4);
    }
    if (!x.isEmpty()) {
      const t4 = g(x, 2);
      r.push(t4);
    }
    for (let e2 = 0, s3 = I.length; e2 < s3; ++e2) {
      const t4 = g(I[e2], 3);
      r.push(t4);
    }
  }
}
var E2 = class {
  getOperatorType() {
    return 10005;
  }
  accelerateGeometry(t2, e, s2) {
    return false;
  }
  canAccelerateGeometry(t2) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  execute(t2, e, s2, n3, r) {
    return new G(t2, e, s2, n3, r);
  }
};
var G = class extends s {
  constructor(t2, e, s2, n3, o2) {
    super(), this.m_cutIndex = -1, this.m_cuts = [], this.m_progressTracker = o2, this.m_cuttee = e.clone(), this.m_cutter = new Qs({ copy: s2 }), this.m_bConsiderTouch = t2;
    const m2 = Ct(e, s2);
    this.m_tolerance = qt(n3, m2, true);
  }
  next() {
    return -1 === this.m_cutIndex && this.generateCuts(), ++this.m_cutIndex < this.m_cuts.length ? this.m_cuts[this.m_cutIndex] : null;
  }
  getGeometryID() {
    return this.m_cutIndex;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  generateCuts() {
    switch (this.m_cuttee.getGeometryType()) {
      case a.enumPolyline:
        this.generatePolylineCuts();
        break;
      case a.enumPolygon:
        this.generatePolygonCuts();
    }
  }
  generatePolylineCuts() {
    const t2 = new Qs(), e = new Qs(), n3 = new Qs();
    this.m_cuts.length = 0, this.m_cuts.push(t2), this.m_cuts.push(e);
    const o2 = [];
    f(this.m_bConsiderTouch, this.m_cuttee, this.m_cutter, this.m_tolerance, o2, this.m_progressTracker);
    for (let r = 0; r < o2.length; r++) {
      const m2 = o2[r];
      1 === m2.m_side ? t2.add(m2.m_geometry, false) : 2 === m2.m_side || 4 === m2.m_side ? e.add(m2.m_geometry, false) : 3 === m2.m_side ? this.m_cuts.push(m2.m_geometry) : 0 === m2.m_side ? n3.add(m2.m_geometry, false) : b("");
    }
    n3.isEmpty() || t2.isEmpty() && e.isEmpty() && !(this.m_cuts.length >= 3) || this.m_cuts.push(n3), t2.isEmpty() && e.isEmpty() && this.m_cuts.length < 3 && (this.m_cuts.length = 0);
  }
  generatePolygonCuts() {
    const t2 = new mr(), e = new mr(), r = new mr();
    this.m_cuts.length = 0, this.m_cuts.push(t2), this.m_cuts.push(e);
    const m2 = [];
    C2(this.m_bConsiderTouch, this.m_cuttee, this.m_cutter, this.m_tolerance, m2, this.m_progressTracker);
    for (let n3 = 0; n3 < m2.length; n3++) {
      const o2 = m2[n3];
      1 === o2.m_side ? t2.add(o2.m_geometry, false) : 2 === o2.m_side ? e.add(o2.m_geometry, false) : 3 === o2.m_side ? this.m_cuts.push(o2.m_geometry) : 0 === o2.m_side ? r.add(o2.m_geometry, false) : b("");
    }
    n(r.isEmpty() || 1 === m2.length), t2.isEmpty() && e.isEmpty() && this.m_cuts.length < 3 && (this.m_cuts.length = 0);
  }
};

// node_modules/@arcgis/core/geometry/operators/gx/operatorCut.js
var t = new E2();
function n2(r, n3, o2) {
  const u = t.execute(true, r, n3, o2, null);
  return Array.from(u);
}
function o() {
  return t.supportsCurves();
}

// node_modules/@arcgis/core/chunks/cutOperator.js
function m(o2, m2) {
  const c2 = C(o2);
  return n2(M(o2), Z(m2), w(c2)).map((r) => E(r, c2)).filter(N);
}
var c = o();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: m, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  c,
  i
};
//# sourceMappingURL=chunk-KX3QCDLO.js.map
